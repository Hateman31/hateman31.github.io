goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19122){
var map__19123 = p__19122;
var map__19123__$1 = cljs.core.__destructure_map(map__19123);
var m = map__19123__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19124_19388 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19125_19389 = null;
var count__19126_19390 = (0);
var i__19127_19391 = (0);
while(true){
if((i__19127_19391 < count__19126_19390)){
var f_19392 = chunk__19125_19389.cljs$core$IIndexed$_nth$arity$2(null,i__19127_19391);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19392], 0));


var G__19393 = seq__19124_19388;
var G__19394 = chunk__19125_19389;
var G__19395 = count__19126_19390;
var G__19396 = (i__19127_19391 + (1));
seq__19124_19388 = G__19393;
chunk__19125_19389 = G__19394;
count__19126_19390 = G__19395;
i__19127_19391 = G__19396;
continue;
} else {
var temp__5804__auto___19397 = cljs.core.seq(seq__19124_19388);
if(temp__5804__auto___19397){
var seq__19124_19398__$1 = temp__5804__auto___19397;
if(cljs.core.chunked_seq_QMARK_(seq__19124_19398__$1)){
var c__5568__auto___19399 = cljs.core.chunk_first(seq__19124_19398__$1);
var G__19400 = cljs.core.chunk_rest(seq__19124_19398__$1);
var G__19401 = c__5568__auto___19399;
var G__19402 = cljs.core.count(c__5568__auto___19399);
var G__19403 = (0);
seq__19124_19388 = G__19400;
chunk__19125_19389 = G__19401;
count__19126_19390 = G__19402;
i__19127_19391 = G__19403;
continue;
} else {
var f_19408 = cljs.core.first(seq__19124_19398__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19408], 0));


var G__19409 = cljs.core.next(seq__19124_19398__$1);
var G__19410 = null;
var G__19411 = (0);
var G__19412 = (0);
seq__19124_19388 = G__19409;
chunk__19125_19389 = G__19410;
count__19126_19390 = G__19411;
i__19127_19391 = G__19412;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19413 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19413], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19413)))?cljs.core.second(arglists_19413):arglists_19413)], 0));
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
var seq__19132_19421 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19133_19422 = null;
var count__19134_19423 = (0);
var i__19135_19424 = (0);
while(true){
if((i__19135_19424 < count__19134_19423)){
var vec__19152_19425 = chunk__19133_19422.cljs$core$IIndexed$_nth$arity$2(null,i__19135_19424);
var name_19426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152_19425,(0),null);
var map__19155_19427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152_19425,(1),null);
var map__19155_19428__$1 = cljs.core.__destructure_map(map__19155_19427);
var doc_19429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155_19428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155_19428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19426], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19430], 0));

if(cljs.core.truth_(doc_19429)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19429], 0));
} else {
}


var G__19431 = seq__19132_19421;
var G__19432 = chunk__19133_19422;
var G__19433 = count__19134_19423;
var G__19434 = (i__19135_19424 + (1));
seq__19132_19421 = G__19431;
chunk__19133_19422 = G__19432;
count__19134_19423 = G__19433;
i__19135_19424 = G__19434;
continue;
} else {
var temp__5804__auto___19435 = cljs.core.seq(seq__19132_19421);
if(temp__5804__auto___19435){
var seq__19132_19436__$1 = temp__5804__auto___19435;
if(cljs.core.chunked_seq_QMARK_(seq__19132_19436__$1)){
var c__5568__auto___19437 = cljs.core.chunk_first(seq__19132_19436__$1);
var G__19438 = cljs.core.chunk_rest(seq__19132_19436__$1);
var G__19439 = c__5568__auto___19437;
var G__19440 = cljs.core.count(c__5568__auto___19437);
var G__19441 = (0);
seq__19132_19421 = G__19438;
chunk__19133_19422 = G__19439;
count__19134_19423 = G__19440;
i__19135_19424 = G__19441;
continue;
} else {
var vec__19160_19442 = cljs.core.first(seq__19132_19436__$1);
var name_19443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160_19442,(0),null);
var map__19163_19444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160_19442,(1),null);
var map__19163_19445__$1 = cljs.core.__destructure_map(map__19163_19444);
var doc_19446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163_19445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19163_19445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19443], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19447], 0));

if(cljs.core.truth_(doc_19446)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19446], 0));
} else {
}


var G__19449 = cljs.core.next(seq__19132_19436__$1);
var G__19450 = null;
var G__19451 = (0);
var G__19452 = (0);
seq__19132_19421 = G__19449;
chunk__19133_19422 = G__19450;
count__19134_19423 = G__19451;
i__19135_19424 = G__19452;
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

var seq__19166 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19167 = null;
var count__19168 = (0);
var i__19169 = (0);
while(true){
if((i__19169 < count__19168)){
var role = chunk__19167.cljs$core$IIndexed$_nth$arity$2(null,i__19169);
var temp__5804__auto___19454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19454__$1)){
var spec_19455 = temp__5804__auto___19454__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19455)], 0));
} else {
}


var G__19456 = seq__19166;
var G__19457 = chunk__19167;
var G__19458 = count__19168;
var G__19459 = (i__19169 + (1));
seq__19166 = G__19456;
chunk__19167 = G__19457;
count__19168 = G__19458;
i__19169 = G__19459;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19166);
if(temp__5804__auto____$1){
var seq__19166__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19166__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19166__$1);
var G__19461 = cljs.core.chunk_rest(seq__19166__$1);
var G__19462 = c__5568__auto__;
var G__19463 = cljs.core.count(c__5568__auto__);
var G__19464 = (0);
seq__19166 = G__19461;
chunk__19167 = G__19462;
count__19168 = G__19463;
i__19169 = G__19464;
continue;
} else {
var role = cljs.core.first(seq__19166__$1);
var temp__5804__auto___19468__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19468__$2)){
var spec_19469 = temp__5804__auto___19468__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19469)], 0));
} else {
}


var G__19470 = cljs.core.next(seq__19166__$1);
var G__19471 = null;
var G__19472 = (0);
var G__19473 = (0);
seq__19166 = G__19470;
chunk__19167 = G__19471;
count__19168 = G__19472;
i__19169 = G__19473;
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
var G__19480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19481 = cljs.core.ex_cause(t);
via = G__19480;
t = G__19481;
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
var map__19215 = datafied_throwable;
var map__19215__$1 = cljs.core.__destructure_map(map__19215);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19215__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19215__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19220 = cljs.core.last(via);
var map__19220__$1 = cljs.core.__destructure_map(map__19220);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19221 = data;
var map__19221__$1 = cljs.core.__destructure_map(map__19221);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19222 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19222__$1 = cljs.core.__destructure_map(map__19222);
var top_data = map__19222__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19222__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19246 = phase;
var G__19246__$1 = (((G__19246 instanceof cljs.core.Keyword))?G__19246.fqn:null);
switch (G__19246__$1) {
case "read-source":
var map__19247 = data;
var map__19247__$1 = cljs.core.__destructure_map(map__19247);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19247__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19247__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19252 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19252__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19252,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19252);
var G__19252__$2 = (cljs.core.truth_((function (){var fexpr__19256 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19256.cljs$core$IFn$_invoke$arity$1 ? fexpr__19256.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19256.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19252__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19252__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19252__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19252__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19266 = top_data;
var G__19266__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19266);
var G__19266__$2 = (cljs.core.truth_((function (){var fexpr__19279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19279.cljs$core$IFn$_invoke$arity$1 ? fexpr__19279.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19279.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19266__$1);
var G__19266__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19266__$2);
var G__19266__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19266__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19288 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(3),null);
var G__19295 = top_data;
var G__19295__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19295);
var G__19295__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19295__$1);
var G__19295__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19295__$2);
var G__19295__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19295__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19295__$4;
}

break;
case "execution":
var vec__19300 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19202_SHARP_){
var or__5045__auto__ = (p1__19202_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19306 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19306.cljs$core$IFn$_invoke$arity$1 ? fexpr__19306.cljs$core$IFn$_invoke$arity$1(p1__19202_SHARP_) : fexpr__19306.call(null,p1__19202_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19308 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19308__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19308,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19308);
var G__19308__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19308__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19308__$1);
var G__19308__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19308__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19308__$2);
var G__19308__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19308__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19308__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19308__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19308__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19246__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19318){
var map__19319 = p__19318;
var map__19319__$1 = cljs.core.__destructure_map(map__19319);
var triage_data = map__19319__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19319__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19330 = phase;
var G__19330__$1 = (((G__19330 instanceof cljs.core.Keyword))?G__19330.fqn:null);
switch (G__19330__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19331 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19332 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19333 = loc;
var G__19334 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19341_19492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19342_19493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19343_19494 = true;
var _STAR_print_fn_STAR__temp_val__19344_19495 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19343_19494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19344_19495);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19314_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19314_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19342_19493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19341_19492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19331,G__19332,G__19333,G__19334) : format.call(null,G__19331,G__19332,G__19333,G__19334));

break;
case "macroexpansion":
var G__19345 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19346 = cause_type;
var G__19347 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19348 = loc;
var G__19349 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19345,G__19346,G__19347,G__19348,G__19349) : format.call(null,G__19345,G__19346,G__19347,G__19348,G__19349));

break;
case "compile-syntax-check":
var G__19354 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19355 = cause_type;
var G__19356 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19357 = loc;
var G__19358 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19354,G__19355,G__19356,G__19357,G__19358) : format.call(null,G__19354,G__19355,G__19356,G__19357,G__19358));

break;
case "compilation":
var G__19359 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19360 = cause_type;
var G__19361 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19362 = loc;
var G__19363 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19359,G__19360,G__19361,G__19362,G__19363) : format.call(null,G__19359,G__19360,G__19361,G__19362,G__19363));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19364 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19365 = symbol;
var G__19366 = loc;
var G__19367 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19368_19501 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19369_19502 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19370_19503 = true;
var _STAR_print_fn_STAR__temp_val__19371_19504 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19370_19503);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19371_19504);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19315_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19315_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19369_19502);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19368_19501);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19364,G__19365,G__19366,G__19367) : format.call(null,G__19364,G__19365,G__19366,G__19367));
} else {
var G__19382 = "Execution error%s at %s(%s).\n%s\n";
var G__19383 = cause_type;
var G__19384 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19385 = loc;
var G__19386 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19382,G__19383,G__19384,G__19385,G__19386) : format.call(null,G__19382,G__19383,G__19384,G__19385,G__19386));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19330__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
