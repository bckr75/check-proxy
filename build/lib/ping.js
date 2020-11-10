'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
function default_1(headers, getParams, postParams, cookies) {
    var res = {
        get: (getParams.test && getParams.test == 'get') || false,
        post: (postParams.test && postParams.test == 'post') || false,
        cookies: (cookies.test && cookies.test == 'cookie') || false,
        referer: (headers.referer && 'http://www.google.com' == headers.referer) || false,
        'user-agent': (headers['user-agent'] && 'Mozilla/4.0' == headers['user-agent']) || false,
    };
    if (getParams.ip) {
        var ips = lodash_1.default.isArray(getParams.ip) ? getParams.ip : [getParams.ip];
        var headersStr_1 = lodash_1.default(headers).reduce(function (result, el) { return result + el; });
        var foundIp = lodash_1.default.find(ips, function (ip) { return headersStr_1.indexOf(ip) != -1; });
        res.anonymityLevel = foundIp ? 0 : 1;
    }
    else {
        res.anonymityLevel = 0;
    }
    return res;
}
exports.default = default_1;
