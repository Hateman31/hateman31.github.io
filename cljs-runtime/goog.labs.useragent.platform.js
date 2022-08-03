goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.platform");
  goog.module.declareLegacyNamespace();
  var googString = goog.require("goog.string.internal");
  var util = goog.require("goog.labs.userAgent.util");
  function isAndroid() {
    return util.matchUserAgent("Android");
  }
  function isIpod() {
    return util.matchUserAgent("iPod");
  }
  function isIphone() {
    return util.matchUserAgent("iPhone") && !util.matchUserAgent("iPod") && !util.matchUserAgent("iPad");
  }
  function isIpad() {
    return util.matchUserAgent("iPad");
  }
  function isIos() {
    return isIphone() || isIpad() || isIpod();
  }
  function isMacintosh() {
    return util.matchUserAgent("Macintosh");
  }
  function isLinux() {
    return util.matchUserAgent("Linux");
  }
  function isWindows() {
    return util.matchUserAgent("Windows");
  }
  function isChromeOS() {
    return util.matchUserAgent("CrOS");
  }
  function isChromecast() {
    return util.matchUserAgent("CrKey");
  }
  function isKaiOS() {
    return util.matchUserAgentIgnoreCase("KaiOS");
  }
  function getVersion() {
    var userAgentString = util.getUserAgent();
    var version = "", re;
    if (isWindows()) {
      re = /Windows (?:NT|Phone) ([0-9.]+)/;
      var match = re.exec(userAgentString);
      if (match) {
        version = match[1];
      } else {
        version = "0.0";
      }
    } else if (isIos()) {
      re = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/;
      var match$16 = re.exec(userAgentString);
      version = match$16 && match$16[1].replace(/_/g, ".");
    } else if (isMacintosh()) {
      re = /Mac OS X ([0-9_.]+)/;
      var match$17 = re.exec(userAgentString);
      version = match$17 ? match$17[1].replace(/_/g, ".") : "10";
    } else if (isKaiOS()) {
      re = /(?:KaiOS)\/(\S+)/i;
      var match$18 = re.exec(userAgentString);
      version = match$18 && match$18[1];
    } else if (isAndroid()) {
      re = /Android\s+([^\);]+)(\)|;)/;
      var match$19 = re.exec(userAgentString);
      version = match$19 && match$19[1];
    } else if (isChromeOS()) {
      re = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/;
      var match$20 = re.exec(userAgentString);
      version = match$20 && match$20[1];
    }
    return version || "";
  }
  function isVersionOrHigher(version) {
    return googString.compareVersions(getVersion(), version) >= 0;
  }
  exports = {getVersion:getVersion, isAndroid:isAndroid, isChromeOS:isChromeOS, isChromecast:isChromecast, isIos:isIos, isIpad:isIpad, isIphone:isIphone, isIpod:isIpod, isKaiOS:isKaiOS, isLinux:isLinux, isMacintosh:isMacintosh, isVersionOrHigher:isVersionOrHigher, isWindows:isWindows,};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.platform.js.map
