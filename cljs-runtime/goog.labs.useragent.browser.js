goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.browser");
  goog.module.declareLegacyNamespace();
  var googArray = goog.require("goog.array");
  var googObject = goog.require("goog.object");
  var util = goog.require("goog.labs.userAgent.util");
  var $jscomp$destructuring$var9 = goog.require("goog.string.internal");
  var compareVersions = $jscomp$destructuring$var9.compareVersions;
  function useUserAgentBrand() {
    var userAgentData = util.getUserAgentData();
    return !!userAgentData && userAgentData.brands.length > 0;
  }
  function matchOpera() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Opera");
  }
  function matchIE() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function matchEdgeHtml() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Edge");
  }
  function matchEdgeChromium() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Edge");
    }
    return util.matchUserAgent("Edg/");
  }
  function matchOperaChromium() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Opera");
    }
    return util.matchUserAgent("OPR");
  }
  function matchFirefox() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Firefox");
    }
    return util.matchUserAgent("Firefox") || util.matchUserAgent("FxiOS");
  }
  function matchSafari() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Safari");
    }
    return util.matchUserAgent("Safari") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent("Android"));
  }
  function matchCoast() {
    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {
      return false;
    }
    return util.matchUserAgent("Coast");
  }
  function matchIosWebview() {
    return (util.matchUserAgent("iPad") || util.matchUserAgent("iPhone")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent("AppleWebKit");
  }
  function matchChrome() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Chromium");
    }
    return (util.matchUserAgent("Chrome") || util.matchUserAgent("CriOS")) && !matchEdgeHtml();
  }
  function matchAndroidBrowser() {
    return util.matchUserAgent("Android") && !(isChrome() || isFirefox() || isOpera() || isSilk());
  }
  var isOpera = matchOpera;
  var isIE = matchIE;
  var isEdge = matchEdgeHtml;
  var isEdgeChromium = matchEdgeChromium;
  var isOperaChromium = matchOperaChromium;
  var isFirefox = matchFirefox;
  var isSafari = matchSafari;
  var isCoast = matchCoast;
  var isIosWebview = matchIosWebview;
  var isChrome = matchChrome;
  var isAndroidBrowser = matchAndroidBrowser;
  function isSilk() {
    if (useUserAgentBrand()) {
      return util.matchUserAgentDataBrand("Silk");
    }
    return util.matchUserAgent("Silk");
  }
  function getVersion() {
    var userAgentString = util.getUserAgent();
    if (isIE()) {
      return getIEVersion(userAgentString);
    }
    var versionTuples = util.extractVersionTuples(userAgentString);
    var versionMap = {};
    versionTuples.forEach(function(tuple) {
      var key = tuple[0];
      var value = tuple[1];
      versionMap[key] = value;
    });
    var versionMapHasKey = goog.partial(googObject.containsKey, versionMap);
    function lookUpValueWithKeys(keys) {
      var key = googArray.find(keys, versionMapHasKey);
      return versionMap[key] || "";
    }
    if (isOpera()) {
      return lookUpValueWithKeys(["Version", "Opera"]);
    }
    if (isEdge()) {
      return lookUpValueWithKeys(["Edge"]);
    }
    if (isEdgeChromium()) {
      return lookUpValueWithKeys(["Edg"]);
    }
    if (isChrome()) {
      return lookUpValueWithKeys(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    var tuple = versionTuples[2];
    return tuple && tuple[1] || "";
  }
  function isVersionOrHigher(version) {
    return compareVersions(getVersion(), version) >= 0;
  }
  function getIEVersion(userAgent) {
    var rv = /rv: *([\d\.]*)/.exec(userAgent);
    if (rv && rv[1]) {
      return rv[1];
    }
    var version = "";
    var msie = /MSIE +([\d\.]+)/.exec(userAgent);
    if (msie && msie[1]) {
      var tridentVersion = /Trident\/(\d.\d)/.exec(userAgent);
      if (msie[1] == "7.0") {
        if (tridentVersion && tridentVersion[1]) {
          switch(tridentVersion[1]) {
            case "4.0":
              version = "8.0";
              break;
            case "5.0":
              version = "9.0";
              break;
            case "6.0":
              version = "10.0";
              break;
            case "7.0":
              version = "11.0";
              break;
          }
        } else {
          version = "7.0";
        }
      } else {
        version = msie[1];
      }
    }
    return version;
  }
  exports = {getVersion:getVersion, isAndroidBrowser:isAndroidBrowser, isChrome:isChrome, isCoast:isCoast, isEdge:isEdge, isEdgeChromium:isEdgeChromium, isFirefox:isFirefox, isIE:isIE, isIosWebview:isIosWebview, isOpera:isOpera, isOperaChromium:isOperaChromium, isSafari:isSafari, isSilk:isSilk, isVersionOrHigher:isVersionOrHigher,};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.browser.js.map
