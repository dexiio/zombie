const whatwgURL = require("whatwg-url");

exports.resolveHref = (baseURL, url) => {
    if (typeof baseURL === 'string') {
        baseURL = whatwgURL.basicURLParse(baseURL);
    }

    var parsedUrl = whatwgURL.basicURLParse(url, { baseURL });
    return whatwgURL.serializeURL(parsedUrl);
};