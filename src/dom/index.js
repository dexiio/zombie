// Exports the JSDOM DOM living namespace.

const DOM = require('jsdom/lib/jsdom/living');

const RegisterElements = require('jsdom/lib/jsdom/living/register-elements');

module.exports = DOM;


// Monkey patching JSDOM.  This is why we can't have nice things.
require('./iframe');
//require('./forms');
require('./jsdom_patches');
require('./scripts');

