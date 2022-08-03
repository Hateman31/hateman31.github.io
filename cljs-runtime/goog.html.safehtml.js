goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeHtml");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var Dir = goog.require("goog.i18n.bidi.Dir");
  var DirectionalString = goog.require("goog.i18n.bidi.DirectionalString");
  var SafeScript = goog.require("goog.html.SafeScript");
  var SafeStyle = goog.require("goog.html.SafeStyle");
  var SafeStyleSheet = goog.require("goog.html.SafeStyleSheet");
  var SafeUrl = goog.require("goog.html.SafeUrl");
  var TagName = goog.require("goog.dom.TagName");
  var TrustedResourceUrl = goog.require("goog.html.TrustedResourceUrl");
  var TypedString = goog.require("goog.string.TypedString");
  var asserts = goog.require("goog.asserts");
  var browser = goog.require("goog.labs.userAgent.browser");
  var googArray = goog.require("goog.array");
  var googObject = goog.require("goog.object");
  var internal = goog.require("goog.string.internal");
  var tags = goog.require("goog.dom.tags");
  var trustedtypes = goog.require("goog.html.trustedtypes");
  var CONSTRUCTOR_TOKEN_PRIVATE = {};
  var SafeHtml = function(value, dir, token) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
    this.dir_ = dir;
    this.implementsGoogI18nBidiDirectionalString = true;
    this.implementsGoogStringTypedString = true;
  };
  SafeHtml.prototype.getDirection = function() {
    return this.dir_;
  };
  SafeHtml.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  SafeHtml.prototype.toString = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  SafeHtml.unwrap = function(safeHtml) {
    return SafeHtml.unwrapTrustedHTML(safeHtml).toString();
  };
  SafeHtml.unwrapTrustedHTML = function(safeHtml) {
    if (safeHtml instanceof SafeHtml && safeHtml.constructor === SafeHtml) {
      return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    } else {
      asserts.fail("expected object of type SafeHtml, got '" + safeHtml + "' of type " + goog.typeOf(safeHtml));
      return "type_error:SafeHtml";
    }
  };
  SafeHtml.htmlEscape = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var textIsObject = typeof textOrHtml == "object";
    var dir = null;
    if (textIsObject && textOrHtml.implementsGoogI18nBidiDirectionalString) {
      dir = textOrHtml.getDirection();
    }
    var textAsString;
    if (textIsObject && textOrHtml.implementsGoogStringTypedString) {
      textAsString = textOrHtml.getTypedStringValue();
    } else {
      textAsString = String(textOrHtml);
    }
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.htmlEscape(textAsString), dir);
  };
  SafeHtml.htmlEscapePreservingNewlines = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var html = SafeHtml.htmlEscape(textOrHtml);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.newLineToBr(SafeHtml.unwrap(html)), html.getDirection());
  };
  SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(textOrHtml) {
    if (textOrHtml instanceof SafeHtml) {
      return textOrHtml;
    }
    var html = SafeHtml.htmlEscape(textOrHtml);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(internal.whitespaceEscape(SafeHtml.unwrap(html)), html.getDirection());
  };
  SafeHtml.comment = function(text) {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!--" + internal.htmlEscape(text) + "--\x3e", null);
  };
  SafeHtml.create = function(tagName, attributes, content) {
    SafeHtml.verifyTagName(String(tagName));
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(tagName), attributes, content);
  };
  SafeHtml.verifyTagName = function(tagName) {
    if (!VALID_NAMES_IN_TAG.test(tagName)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name \x3c" + tagName + "\x3e." : "");
    }
    if (tagName.toUpperCase() in NOT_ALLOWED_TAG_NAMES) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name \x3c" + tagName + "\x3e is not allowed for SafeHtml." : "");
    }
  };
  SafeHtml.createIframe = function(src, srcdoc, attributes, content) {
    if (src) {
      TrustedResourceUrl.unwrap(src);
    }
    var fixedAttributes = {};
    fixedAttributes["src"] = src || null;
    fixedAttributes["srcdoc"] = srcdoc && SafeHtml.unwrap(srcdoc);
    var defaultAttributes = {"sandbox":""};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
  };
  SafeHtml.createSandboxIframe = function(src, srcdoc, attributes, content) {
    if (!SafeHtml.canUseSandboxIframe()) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
    }
    var fixedAttributes = {};
    if (src) {
      fixedAttributes["src"] = SafeUrl.unwrap(SafeUrl.sanitize(src));
    } else {
      fixedAttributes["src"] = null;
    }
    fixedAttributes["srcdoc"] = srcdoc || null;
    fixedAttributes["sandbox"] = "";
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, {}, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", combinedAttrs, content);
  };
  SafeHtml.canUseSandboxIframe = function() {
    return goog.global["HTMLIFrameElement"] && "sandbox" in goog.global["HTMLIFrameElement"].prototype;
  };
  SafeHtml.createScriptSrc = function(src, attributes) {
    TrustedResourceUrl.unwrap(src);
    var fixedAttributes = {"src":src};
    var defaultAttributes = {};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", combinedAttrs);
  };
  SafeHtml.createScript = function(script, attributes) {
    for (var attr in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
        var attrLower = attr.toLowerCase();
        if (attrLower == "language" || attrLower == "src" || attrLower == "text" || attrLower == "type") {
          throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + attrLower + '" attribute' : "");
        }
      }
    }
    var content = "";
    script = googArray.concat(script);
    for (var i = 0; i < script.length; i++) {
      content += SafeScript.unwrap(script[i]);
    }
    var htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, Dir.NEUTRAL);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", attributes, htmlContent);
  };
  SafeHtml.createStyle = function(styleSheet, attributes) {
    var fixedAttributes = {"type":"text/css"};
    var defaultAttributes = {};
    var combinedAttrs = SafeHtml.combineAttributes(fixedAttributes, defaultAttributes, attributes);
    var content = "";
    styleSheet = googArray.concat(styleSheet);
    for (var i = 0; i < styleSheet.length; i++) {
      content += SafeStyleSheet.unwrap(styleSheet[i]);
    }
    var htmlContent = SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, Dir.NEUTRAL);
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", combinedAttrs, htmlContent);
  };
  SafeHtml.createMetaRefresh = function(url, secs) {
    var unwrappedUrl = SafeUrl.unwrap(SafeUrl.sanitize(url));
    if (browser.isIE() || browser.isEdge()) {
      if (internal.contains(unwrappedUrl, ";")) {
        unwrappedUrl = "'" + unwrappedUrl.replace(/'/g, "%27") + "'";
      }
    }
    var attributes = {"http-equiv":"refresh", "content":(secs || 0) + "; url\x3d" + unwrappedUrl,};
    return SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", attributes);
  };
  SafeHtml.createWithDir = function(dir, tagName, attributes, content) {
    var html = SafeHtml.create(tagName, attributes, content);
    html.dir_ = dir;
    return html;
  };
  SafeHtml.join = function(separator, parts) {
    var separatorHtml = SafeHtml.htmlEscape(separator);
    var dir = separatorHtml.getDirection();
    var content = [];
    var addArgument = function(argument) {
      if (Array.isArray(argument)) {
        argument.forEach(addArgument);
      } else {
        var html = SafeHtml.htmlEscape(argument);
        content.push(SafeHtml.unwrap(html));
        var htmlDir = html.getDirection();
        if (dir == Dir.NEUTRAL) {
          dir = htmlDir;
        } else if (htmlDir != Dir.NEUTRAL && dir != htmlDir) {
          dir = null;
        }
      }
    };
    parts.forEach(addArgument);
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content.join(SafeHtml.unwrap(separatorHtml)), dir);
  };
  SafeHtml.concat = function(var_args) {
    return SafeHtml.join(SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
  };
  SafeHtml.concatWithDir = function(dir, var_args) {
    var html = SafeHtml.concat(Array.prototype.slice.call(arguments, 1));
    html.dir_ = dir;
    return html;
  };
  SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(html, dir) {
    var policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
    var trustedHtml = policy ? policy.createHTML(html) : html;
    return new SafeHtml(trustedHtml, dir, CONSTRUCTOR_TOKEN_PRIVATE);
  };
  SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(tagName, attributes, content) {
    var dir = null;
    var result = "\x3c" + tagName;
    result += SafeHtml.stringifyAttributes(tagName, attributes);
    if (content == null) {
      content = [];
    } else if (!Array.isArray(content)) {
      content = [content];
    }
    if (tags.isVoidTag(tagName.toLowerCase())) {
      asserts.assert(!content.length, "Void tag \x3c" + tagName + "\x3e does not allow content.");
      result += "\x3e";
    } else {
      var html = SafeHtml.concat(content);
      result += "\x3e" + SafeHtml.unwrap(html) + "\x3c/" + tagName + "\x3e";
      dir = html.getDirection();
    }
    var dirAttribute = attributes && attributes["dir"];
    if (dirAttribute) {
      if (/^(ltr|rtl|auto)$/i.test(dirAttribute)) {
        dir = Dir.NEUTRAL;
      } else {
        dir = null;
      }
    }
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result, dir);
  };
  SafeHtml.stringifyAttributes = function(tagName, attributes) {
    var result = "";
    if (attributes) {
      for (var name in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, name)) {
          if (!VALID_NAMES_IN_TAG.test(name)) {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + name + '".' : "");
          }
          var value = attributes[name];
          if (value == null) {
            continue;
          }
          result += " " + getAttrNameAndValue(tagName, name, value);
        }
      }
    }
    return result;
  };
  SafeHtml.combineAttributes = function(fixedAttributes, defaultAttributes, attributes) {
    var combinedAttributes = {};
    for (var name in fixedAttributes) {
      if (Object.prototype.hasOwnProperty.call(fixedAttributes, name)) {
        asserts.assert(name.toLowerCase() == name, "Must be lower case");
        combinedAttributes[name] = fixedAttributes[name];
      }
    }
    for (var name$12 in defaultAttributes) {
      if (Object.prototype.hasOwnProperty.call(defaultAttributes, name$12)) {
        asserts.assert(name$12.toLowerCase() == name$12, "Must be lower case");
        combinedAttributes[name$12] = defaultAttributes[name$12];
      }
    }
    if (attributes) {
      for (var name$13 in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, name$13)) {
          var nameLower = name$13.toLowerCase();
          if (nameLower in fixedAttributes) {
            throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + nameLower + '" attribute, got "' + name$13 + '" with value "' + attributes[name$13] + '"' : "");
          }
          if (nameLower in defaultAttributes) {
            delete combinedAttributes[nameLower];
          }
          combinedAttributes[name$13] = attributes[name$13];
        }
      }
    }
    return combinedAttributes;
  };
  SafeHtml.ENABLE_ERROR_MESSAGES = goog.define("goog.html.SafeHtml.ENABLE_ERROR_MESSAGES", goog.DEBUG);
  SafeHtml.SUPPORT_STYLE_ATTRIBUTE = goog.define("goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE", true);
  SafeHtml.TextOrHtml_;
  SafeHtml.from = SafeHtml.htmlEscape;
  var VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/;
  var URL_ATTRIBUTES = googObject.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
  var NOT_ALLOWED_TAG_NAMES = googObject.createSet(TagName.APPLET, TagName.BASE, TagName.EMBED, TagName.IFRAME, TagName.LINK, TagName.MATH, TagName.META, TagName.OBJECT, TagName.SCRIPT, TagName.STYLE, TagName.SVG, TagName.TEMPLATE);
  SafeHtml.AttributeValue;
  function getAttrNameAndValue(tagName, name, value) {
    if (value instanceof Const) {
      value = Const.unwrap(value);
    } else if (name.toLowerCase() == "style") {
      if (SafeHtml.SUPPORT_STYLE_ATTRIBUTE) {
        value = getStyleValue(value);
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
      }
    } else if (/^on/i.test(name)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + name + '" requires goog.string.Const value, "' + value + '" given.' : "");
    } else if (name.toLowerCase() in URL_ATTRIBUTES) {
      if (value instanceof TrustedResourceUrl) {
        value = TrustedResourceUrl.unwrap(value);
      } else if (value instanceof SafeUrl) {
        value = SafeUrl.unwrap(value);
      } else if (typeof value === "string") {
        value = SafeUrl.sanitize(value).getTypedStringValue();
      } else {
        throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + name + '" on tag "' + tagName + '" requires goog.html.SafeUrl, goog.string.Const, or' + ' string, value "' + value + '" given.' : "");
      }
    }
    if (value.implementsGoogStringTypedString) {
      value = value.getTypedStringValue();
    }
    asserts.assert(typeof value === "string" || typeof value === "number", "String or number value expected, got " + typeof value + " with value: " + value);
    return name + '\x3d"' + internal.htmlEscape(String(value)) + '"';
  }
  function getStyleValue(value) {
    if (!goog.isObject(value)) {
      throw new Error(SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map ' + "of style properties, " + typeof value + " given: " + value : "");
    }
    if (!(value instanceof SafeStyle)) {
      value = SafeStyle.create(value);
    }
    return SafeStyle.unwrap(value);
  }
  SafeHtml.DOCTYPE_HTML = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3c!DOCTYPE html\x3e", Dir.NEUTRAL);
  },}.valueOf();
  SafeHtml.EMPTY = new SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", Dir.NEUTRAL, CONSTRUCTOR_TOKEN_PRIVATE);
  SafeHtml.BR = {valueOf:function() {
    return SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("\x3cbr\x3e", Dir.NEUTRAL);
  },}.valueOf();
  exports = SafeHtml;
  return exports;
});

//# sourceMappingURL=goog.html.safehtml.js.map
