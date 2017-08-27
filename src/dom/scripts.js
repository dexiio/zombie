// For handling JavaScript, mostly improvements to JSDOM

const DOM             = require('./index');
const resourceLoader  = require('jsdom/lib/jsdom/browser/resource-loader');
const reportException = require('jsdom/lib/jsdom/living/helpers/runtime-script-errors');

const HTMLScriptElementImpl = require('jsdom/lib/jsdom/living/nodes/HTMLScriptElement-impl');

// -- Patches to JSDOM --

const jsMIMETypes = new Set([
  "application/ecmascript",
  "application/javascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript"
]);

HTMLScriptElementImpl.implementation.prototype._eval = function(text, filename) {
  const typeString = this._getTypeString();

  if (this._ownerDocument._defaultView &&
      jsMIMETypes.has(typeString.toLowerCase())) {
    this._ownerDocument._writeAfterElement = this;
    processJavaScript(this, text, filename);
    delete this._ownerDocument._writeAfterElement;
  }
};

// If JSDOM encounters a JS error, it fires on the element.  We expect it to be
// fires on the Window.  We also want better stack traces.
function processJavaScript(element, buffer, filename) {
  const code = buffer.toString();
  // This may be called without code, e.g. script element that has no body yet
  if (!code)
    return;

  // Surpress JavaScript validation and execution
  const document = element.ownerDocument;
  const window   = document.defaultView;
  const browser  = window.top.browser;
  if (browser && !browser.runScripts)
    return;

  // This may be called without code, e.g. script element that has no body yet
  try {
    window.document._currentScript = element;
    window._evaluate(code, filename);
  } catch (error) {
    enhanceStackTrace(error, document.location.href);
    reportException(window, error);
  } finally {
    window.document._currentScript = null;
  }
};

function enhanceStackTrace(error, document_ref) {
  const partial = [];
  // "RangeError: Maximum call stack size exceeded" doesn't have a stack trace
  if (error.stack)
    for (let line of error.stack.split('\n')) {
      if (~line.indexOf('vm.js'))
        break;
      partial.push(line);
    }
  partial.push(`    in ${document_ref}`);
  error.stack = partial.join('\n');
  return error;
}

/*

Note: Assuming the below has since been fixed in JSDom:
https://github.com/tmpvar/jsdom/blob/2552a85e518b9c166dac7b2af8c8a17b3ab6cd8d/lib/jsdom/living/nodes/HTMLScriptElement-impl.js

// HTML5 parser doesn't play well with JSDOM so we need this trickey to sort of
// get script execution to work properly.
//
// Basically JSDOM listend for when the script tag is added to the DOM and
// attemps to evaluate at, but the script has no contents at that point in
// time.  This adds just enough delay for the inline script's content to be
// parsed and ready for processing.
DOM.HTMLScriptElement._init = function() {
  this.addEventListener('DOMNodeInsertedIntoDocument', function() {
    const script    = this;
    const document  = script.ownerDocument;

    if (script.src)
      // Script has a src attribute, load external resource.
      resourceLoader.load(script, script.src, script._eval);
    else {
      const filename = script.id ?  `${document.URL}:#${script.id}` : `${document.URL}:script`;
      // Queue to be executed in order with all other scripts
      const executeInOrder = resourceLoader.enqueue(script, filename, executeInlineScript);
      // There are two scenarios:
      // - script element added to existing document, we should evaluate it
      //   immediately
      // - inline script element parsed, when we get here, we still don't have
      //   the element contents, so we have to wait before we can read and
      //   execute it
      if (document.readyState === 'loading')
        process.nextTick(executeInOrder);
      else
        executeInOrder();
    }

    // Execute inline script
    function executeInlineScript(code, filename) {
      script._eval(script.textContent, filename);
    }
  });
};
*/