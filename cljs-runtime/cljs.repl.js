goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20117){
var map__20118 = p__20117;
var map__20118__$1 = cljs.core.__destructure_map(map__20118);
var m = map__20118__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20119_20322 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20120_20323 = null;
var count__20121_20324 = (0);
var i__20122_20325 = (0);
while(true){
if((i__20122_20325 < count__20121_20324)){
var f_20326 = chunk__20120_20323.cljs$core$IIndexed$_nth$arity$2(null,i__20122_20325);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20326], 0));


var G__20327 = seq__20119_20322;
var G__20328 = chunk__20120_20323;
var G__20329 = count__20121_20324;
var G__20330 = (i__20122_20325 + (1));
seq__20119_20322 = G__20327;
chunk__20120_20323 = G__20328;
count__20121_20324 = G__20329;
i__20122_20325 = G__20330;
continue;
} else {
var temp__5804__auto___20331 = cljs.core.seq(seq__20119_20322);
if(temp__5804__auto___20331){
var seq__20119_20332__$1 = temp__5804__auto___20331;
if(cljs.core.chunked_seq_QMARK_(seq__20119_20332__$1)){
var c__5568__auto___20333 = cljs.core.chunk_first(seq__20119_20332__$1);
var G__20334 = cljs.core.chunk_rest(seq__20119_20332__$1);
var G__20335 = c__5568__auto___20333;
var G__20336 = cljs.core.count(c__5568__auto___20333);
var G__20337 = (0);
seq__20119_20322 = G__20334;
chunk__20120_20323 = G__20335;
count__20121_20324 = G__20336;
i__20122_20325 = G__20337;
continue;
} else {
var f_20342 = cljs.core.first(seq__20119_20332__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20342], 0));


var G__20343 = cljs.core.next(seq__20119_20332__$1);
var G__20344 = null;
var G__20345 = (0);
var G__20346 = (0);
seq__20119_20322 = G__20343;
chunk__20120_20323 = G__20344;
count__20121_20324 = G__20345;
i__20122_20325 = G__20346;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20347 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20347], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20347)))?cljs.core.second(arglists_20347):arglists_20347)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20129_20349 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20130_20350 = null;
var count__20131_20351 = (0);
var i__20132_20352 = (0);
while(true){
if((i__20132_20352 < count__20131_20351)){
var vec__20142_20353 = chunk__20130_20350.cljs$core$IIndexed$_nth$arity$2(null,i__20132_20352);
var name_20354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142_20353,(0),null);
var map__20145_20355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142_20353,(1),null);
var map__20145_20356__$1 = cljs.core.__destructure_map(map__20145_20355);
var doc_20357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145_20356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20145_20356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20354], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20358], 0));

if(cljs.core.truth_(doc_20357)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20357], 0));
} else {
}


var G__20359 = seq__20129_20349;
var G__20360 = chunk__20130_20350;
var G__20361 = count__20131_20351;
var G__20362 = (i__20132_20352 + (1));
seq__20129_20349 = G__20359;
chunk__20130_20350 = G__20360;
count__20131_20351 = G__20361;
i__20132_20352 = G__20362;
continue;
} else {
var temp__5804__auto___20363 = cljs.core.seq(seq__20129_20349);
if(temp__5804__auto___20363){
var seq__20129_20364__$1 = temp__5804__auto___20363;
if(cljs.core.chunked_seq_QMARK_(seq__20129_20364__$1)){
var c__5568__auto___20365 = cljs.core.chunk_first(seq__20129_20364__$1);
var G__20366 = cljs.core.chunk_rest(seq__20129_20364__$1);
var G__20367 = c__5568__auto___20365;
var G__20368 = cljs.core.count(c__5568__auto___20365);
var G__20369 = (0);
seq__20129_20349 = G__20366;
chunk__20130_20350 = G__20367;
count__20131_20351 = G__20368;
i__20132_20352 = G__20369;
continue;
} else {
var vec__20147_20370 = cljs.core.first(seq__20129_20364__$1);
var name_20371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20147_20370,(0),null);
var map__20151_20372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20147_20370,(1),null);
var map__20151_20373__$1 = cljs.core.__destructure_map(map__20151_20372);
var doc_20374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151_20373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151_20373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20375], 0));

if(cljs.core.truth_(doc_20374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20374], 0));
} else {
}


var G__20380 = cljs.core.next(seq__20129_20364__$1);
var G__20381 = null;
var G__20382 = (0);
var G__20383 = (0);
seq__20129_20349 = G__20380;
chunk__20130_20350 = G__20381;
count__20131_20351 = G__20382;
i__20132_20352 = G__20383;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20153 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20154 = null;
var count__20155 = (0);
var i__20156 = (0);
while(true){
if((i__20156 < count__20155)){
var role = chunk__20154.cljs$core$IIndexed$_nth$arity$2(null,i__20156);
var temp__5804__auto___20384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20384__$1)){
var spec_20385 = temp__5804__auto___20384__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20385)], 0));
} else {
}


var G__20386 = seq__20153;
var G__20387 = chunk__20154;
var G__20388 = count__20155;
var G__20389 = (i__20156 + (1));
seq__20153 = G__20386;
chunk__20154 = G__20387;
count__20155 = G__20388;
i__20156 = G__20389;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20153);
if(temp__5804__auto____$1){
var seq__20153__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20153__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20153__$1);
var G__20394 = cljs.core.chunk_rest(seq__20153__$1);
var G__20395 = c__5568__auto__;
var G__20396 = cljs.core.count(c__5568__auto__);
var G__20397 = (0);
seq__20153 = G__20394;
chunk__20154 = G__20395;
count__20155 = G__20396;
i__20156 = G__20397;
continue;
} else {
var role = cljs.core.first(seq__20153__$1);
var temp__5804__auto___20398__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20398__$2)){
var spec_20399 = temp__5804__auto___20398__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20399)], 0));
} else {
}


var G__20400 = cljs.core.next(seq__20153__$1);
var G__20401 = null;
var G__20402 = (0);
var G__20403 = (0);
seq__20153 = G__20400;
chunk__20154 = G__20401;
count__20155 = G__20402;
i__20156 = G__20403;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20406 = cljs.core.ex_cause(t);
via = G__20405;
t = G__20406;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20203 = datafied_throwable;
var map__20203__$1 = cljs.core.__destructure_map(map__20203);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20203__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20203__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20204 = cljs.core.last(via);
var map__20204__$1 = cljs.core.__destructure_map(map__20204);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20209 = data;
var map__20209__$1 = cljs.core.__destructure_map(map__20209);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20209__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20210 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20210__$1 = cljs.core.__destructure_map(map__20210);
var top_data = map__20210__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20227 = phase;
var G__20227__$1 = (((G__20227 instanceof cljs.core.Keyword))?G__20227.fqn:null);
switch (G__20227__$1) {
case "read-source":
var map__20232 = data;
var map__20232__$1 = cljs.core.__destructure_map(map__20232);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20232__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20232__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20236 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20236__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20236,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20236);
var G__20236__$2 = (cljs.core.truth_((function (){var fexpr__20237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20237.cljs$core$IFn$_invoke$arity$1 ? fexpr__20237.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20237.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20236__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20236__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20236__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20249 = top_data;
var G__20249__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20249);
var G__20249__$2 = (cljs.core.truth_((function (){var fexpr__20253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20253.cljs$core$IFn$_invoke$arity$1 ? fexpr__20253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20249__$1);
var G__20249__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20249__$2);
var G__20249__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20249__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20249__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20249__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20262 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20262,(3),null);
var G__20269 = top_data;
var G__20269__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20269);
var G__20269__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20269__$1);
var G__20269__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20269__$2);
var G__20269__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20269__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20269__$4;
}

break;
case "execution":
var vec__20270 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20191_SHARP_){
var or__5045__auto__ = (p1__20191_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20274.cljs$core$IFn$_invoke$arity$1 ? fexpr__20274.cljs$core$IFn$_invoke$arity$1(p1__20191_SHARP_) : fexpr__20274.call(null,p1__20191_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20275 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20275__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20275,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20275);
var G__20275__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20275__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20275__$1);
var G__20275__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20275__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20275__$2);
var G__20275__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20275__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20275__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20275__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20275__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20227__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20280){
var map__20281 = p__20280;
var map__20281__$1 = cljs.core.__destructure_map(map__20281);
var triage_data = map__20281__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20284 = phase;
var G__20284__$1 = (((G__20284 instanceof cljs.core.Keyword))?G__20284.fqn:null);
switch (G__20284__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20285 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20287 = loc;
var G__20288 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20289_20413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20290_20414 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20291_20415 = true;
var _STAR_print_fn_STAR__temp_val__20292_20416 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20291_20415);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20292_20416);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20277_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20277_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20290_20414);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20289_20413);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20285,G__20286,G__20287,G__20288) : format.call(null,G__20285,G__20286,G__20287,G__20288));

break;
case "macroexpansion":
var G__20294 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20295 = cause_type;
var G__20296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20297 = loc;
var G__20298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20294,G__20295,G__20296,G__20297,G__20298) : format.call(null,G__20294,G__20295,G__20296,G__20297,G__20298));

break;
case "compile-syntax-check":
var G__20299 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20300 = cause_type;
var G__20301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20302 = loc;
var G__20303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20299,G__20300,G__20301,G__20302,G__20303) : format.call(null,G__20299,G__20300,G__20301,G__20302,G__20303));

break;
case "compilation":
var G__20304 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20305 = cause_type;
var G__20306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20307 = loc;
var G__20308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20304,G__20305,G__20306,G__20307,G__20308) : format.call(null,G__20304,G__20305,G__20306,G__20307,G__20308));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20309 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20310 = symbol;
var G__20311 = loc;
var G__20312 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20313_20417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20314_20418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20315_20419 = true;
var _STAR_print_fn_STAR__temp_val__20316_20420 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20315_20419);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20316_20420);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20278_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20278_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20314_20418);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20313_20417);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20309,G__20310,G__20311,G__20312) : format.call(null,G__20309,G__20310,G__20311,G__20312));
} else {
var G__20317 = "Execution error%s at %s(%s).\n%s\n";
var G__20318 = cause_type;
var G__20319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20320 = loc;
var G__20321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20317,G__20318,G__20319,G__20320,G__20321) : format.call(null,G__20317,G__20318,G__20319,G__20320,G__20321));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20284__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
