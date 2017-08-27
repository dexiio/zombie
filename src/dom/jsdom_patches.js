// Fix things that JSDOM doesn't do quite right.


const DOM                  = require('./index');
const Fetch                = require('../fetch');
const resourceLoader       = require('jsdom/lib/jsdom/browser/resource-loader');
const Utils                = require('jsdom/lib/jsdom/utils');
const URL                  = require('url');


// Default behavior for clicking on links: navigate to new URL if specified.

DOM.HTMLAnchorElement.prototype.click = function(event) {
  const anchor = event.target;
  if (!anchor.href)
    return;

  const window      = anchor.ownerDocument.defaultView;
  const { browser } = window;
  // Decide which window to open this link in
  switch (anchor.target || '_self') {
    case '_self': {   // navigate same window
      window.location = anchor.href;
      break;
    }
    case '_parent': { // navigate parent window
      window.parent.location = anchor.href;
      break;
    }
    case '_top': {    // navigate top window
      window.top.location = anchor.href;
      break;
    }
    default: { // open named window
      browser.tabs.open({ name: anchor.target, url: anchor.href });
      break;
    }
  }
  browser.emit('link', anchor.href, anchor.target || '_self');
};


// Attempt to load the image, this will trigger a 'load' event when succesful
// jsdom seemed to only queue the 'load' event
DOM.HTMLImageElement.prototype._attrModified = function(name, value, oldVal) {
  if (name === 'src' && value && value !== oldVal)
    resourceLoader.load(this, value);
  DOM.HTMLElement.prototype._attrModified.call(this, name, value, oldVal);
};

// Implement getClientRects
DOM.HTMLElement.prototype.getClientRects = function () {
  const style = this.style;

  if (style && style.display === 'none') {
    return [];
  }

  return [{
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0
  }];
};

Object.defineProperty(DOM.HTMLElement.prototype, 'offsetHeight', {
  get: function () {
    return 0;
  }
});

Object.defineProperty(DOM.HTMLElement.prototype, 'offsetWidth', {
  get: function () {
    return 0;
  }
});



// Support for opacity style property.
Object.defineProperty(DOM.CSSStyleDeclaration.prototype, 'opacity', {
  get() {
    const opacity = this.getPropertyValue('opacity');
    return Number.isFinite(opacity) ? opacity.toString() : '';
  },

  set(opacity) {
    if (opacity === null || opacity === undefined || opacity === '')
      this.removeProperty('opacity');
    else {
      const value = parseFloat(opacity);
      if (isFinite(value))
        this._setProperty('opacity', value);
    }
  }
});


// Wrap dispatchEvent to support _windowInScope and error handling.
const jsdomDispatchEvent = DOM.EventTarget.prototype.dispatchEvent;
DOM.EventTarget.prototype.dispatchEvent = function(event) {
  // Could be node, window or document
  const document = this._ownerDocument || this.document || this;
  const window   = document.defaultView;
  // Fail miserably on objects that don't have ownerDocument: nodes and XHR
  // request have those
  const { browser } = window;
  browser.emit('event', event, this);

  const originalInScope = browser._windowInScope;
  try {
    // The current window, postMessage and window.close need this
    browser._windowInScope = window;
    // Inline event handlers rely on window.event
    window.event = event;
    return jsdomDispatchEvent.call(this, event);
  } finally {
    delete window.event;
    browser._windowInScope = originalInScope;
  }
};


// Fix resource loading to keep track of in-progress requests. Need this to wait
// for all resources (mainly JavaScript) to complete loading before terminating
// browser.wait.
resourceLoader.load = function(element, href, callback) {
  const document      = element.ownerDocument;
  const window        = document.defaultView;
  const tagName       = element.tagName.toLowerCase();
  const loadResource  = document.implementation._hasFeature('FetchExternalResources', tagName);
  const url           = resourceLoader.resolveResourceUrl(document, href);

  if (loadResource) {
    // This guarantees that all scripts are executed in order, must add to the
    // JSDOM queue before we add to the Zombie event queue.
    const enqueued = this.enqueue(element, url, callback && callback.bind(element));
    const request = new Fetch.Request(url);
    window._eventQueue.http(request, (error, response)=> {
      // Since this is used by resourceLoader that doesn't check the response,
      // we're responsible to turn anything other than 2xx/3xx into an error
      if (error)
        enqueued(new Error('Network error'));
      else if (response.status >= 400)
        enqueued(new Error(`Server returned status code ${response.status} from ${url}`));
      else
        response._consume().then((buffer)=> {
          response.body = buffer;
          enqueued(null, buffer);
        });
    });
  }
};

/*
Note: JSDOM now using whatwg-url and seems to handle this scenario

// Fix residual Node bug. See https://github.com/joyent/node/pull/14146

const jsdomResolveHref = Utils.resolveHref;
Utils.resolveHref = function (baseUrl, href) {
  const pattern = /file:?/;
  const protocol = URL.parse(baseUrl).protocol;
  const original = URL.parse(href);
  const resolved = URL.parse(jsdomResolveHref(baseUrl, href));

  if (!pattern.test(protocol) && pattern.test(original.protocol) && !original.host && resolved.host)
    return URL.format(original);
  else
    return URL.format(resolved);
};
*/