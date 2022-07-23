goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.util");
  goog.module.declareLegacyNamespace();
  var $jscomp$destructuring$var5 = goog.require("goog.labs.userAgent");
  var USE_CLIENT_HINTS = $jscomp$destructuring$var5.USE_CLIENT_HINTS;
  var $jscomp$destructuring$var6 = goog.require("goog.string.internal");
  var caseInsensitiveContains = $jscomp$destructuring$var6.caseInsensitiveContains;
  var contains = $jscomp$destructuring$var6.contains;
  var ASSUME_CLIENT_HINTS_SUPPORT = false;
  function getNativeUserAgentString() {
    var navigator = getNavigator();
    if (navigator) {
      var userAgent = navigator.userAgent;
      if (userAgent) {
        return userAgent;
      }
    }
    return "";
  }
  function getNativeUserAgentData() {
    if (!USE_CLIENT_HINTS) {
      return null;
    }
    var navigator = getNavigator();
    if (navigator) {
      return navigator.userAgentData || null;
    }
    return null;
  }
  function getNavigator() {
    return goog.global.navigator;
  }
  var userAgentInternal = getNativeUserAgentString();
  var userAgentDataInternal = getNativeUserAgentData();
  function setUserAgent(userAgent) {
    userAgentInternal = typeof userAgent === "string" ? userAgent : getNativeUserAgentString();
  }
  function getUserAgent() {
    return userAgentInternal;
  }
  function setUserAgentData(userAgentData) {
    userAgentDataInternal = userAgentData;
  }
  function resetUserAgentData() {
    userAgentDataInternal = getNativeUserAgentData();
  }
  function getUserAgentData() {
    return userAgentDataInternal;
  }
  function matchUserAgentDataBrand(str) {
    var data = getUserAgentData();
    if (!data) {
      return false;
    }
    return data.brands.some(function($jscomp$destructuring$var7) {
      var $jscomp$destructuring$var8 = $jscomp$destructuring$var7;
      var brand = $jscomp$destructuring$var8.brand;
      return brand && contains(brand, str);
    });
  }
  function matchUserAgent(str) {
    var userAgent = getUserAgent();
    return contains(userAgent, str);
  }
  function matchUserAgentIgnoreCase(str) {
    var userAgent = getUserAgent();
    return caseInsensitiveContains(userAgent, str);
  }
  function extractVersionTuples(userAgent) {
    var versionRegExp = new RegExp("(\\w[\\w ]+)" + "/" + "([^\\s]+)" + "\\s*" + "(?:\\((.*?)\\))?", "g");
    var data = [];
    var match;
    while (match = versionRegExp.exec(userAgent)) {
      data.push([match[1], match[2], match[3] || undefined]);
    }
    return data;
  }
  exports = {ASSUME_CLIENT_HINTS_SUPPORT:ASSUME_CLIENT_HINTS_SUPPORT, extractVersionTuples:extractVersionTuples, getNativeUserAgentString:getNativeUserAgentString, getUserAgent:getUserAgent, getUserAgentData:getUserAgentData, matchUserAgent:matchUserAgent, matchUserAgentDataBrand:matchUserAgentDataBrand, matchUserAgentIgnoreCase:matchUserAgentIgnoreCase, resetUserAgentData:resetUserAgentData, setUserAgent:setUserAgent, setUserAgentData:setUserAgentData,};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.util.js.map
