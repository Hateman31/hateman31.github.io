goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent");
  var USE_CLIENT_HINTS_OVERRIDE = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE", "");
  var USE_CLIENT_HINTS = goog.define("goog.labs.userAgent.USE_CLIENT_HINTS", false);
  exports.USE_CLIENT_HINTS = function() {
    var override = USE_CLIENT_HINTS_OVERRIDE ? goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : null;
    return override != null ? override : USE_CLIENT_HINTS;
  }();
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.useragent.js.map
