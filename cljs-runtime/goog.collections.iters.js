goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.collections.iters");
  goog.module.declareLegacyNamespace();
  function getIterator(iterable) {
    return iterable[goog.global.Symbol.iterator]();
  }
  exports.getIterator = getIterator;
  exports.forEach = function(iterable, f) {
    for (var $jscomp$iter$5 = $jscomp.makeIterator(iterable), $jscomp$key$elem = $jscomp$iter$5.next(); !$jscomp$key$elem.done; $jscomp$key$elem = $jscomp$iter$5.next()) {
      var elem = $jscomp$key$elem.value;
      {
        f(elem);
      }
    }
  };
  var MapIterator = function(childIter, mapFn) {
    this.childIterator_ = getIterator(childIter);
    this.mapFn_ = mapFn;
    this.nextIndex_ = 0;
  };
  MapIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  MapIterator.prototype.next = function() {
    var childResult = this.childIterator_.next();
    return {value:childResult.done ? undefined : this.mapFn_.call(undefined, childResult.value, this.nextIndex_++), done:childResult.done,};
  };
  exports.map = function(iterable, f) {
    return new MapIterator(iterable, f);
  };
  var FilterIterator = function(childIter, filterFn) {
    this.childIter_ = getIterator(childIter);
    this.filterFn_ = filterFn;
    this.nextIndex_ = 0;
  };
  FilterIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  FilterIterator.prototype.next = function() {
    while (true) {
      var childResult = this.childIter_.next();
      if (childResult.done) {
        return {done:true, value:undefined};
      }
      var passesFilter = this.filterFn_.call(undefined, childResult.value, this.nextIndex_++);
      if (passesFilter) {
        return childResult;
      }
    }
  };
  exports.filter = function(iterable, f) {
    return new FilterIterator(iterable, f);
  };
  var ConcatIterator = function(iterators) {
    this.iterators_ = iterators;
    this.iterIndex_ = 0;
  };
  ConcatIterator.prototype[Symbol.iterator] = function() {
    return this;
  };
  ConcatIterator.prototype.next = function() {
    while (this.iterIndex_ < this.iterators_.length) {
      var result = this.iterators_[this.iterIndex_].next();
      if (!result.done) {
        return result;
      }
      this.iterIndex_++;
    }
    return {done:true};
  };
  exports.concat = function() {
    var iterables = $jscomp.getRestArguments.apply(0, arguments);
    return new ConcatIterator(iterables.map(getIterator));
  };
  return exports;
});

//# sourceMappingURL=goog.collections.iters.js.map
