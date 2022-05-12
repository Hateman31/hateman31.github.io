// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29993){
var map__29994 = p__29993;
var map__29994__$1 = (((((!((map__29994 == null))))?(((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var m = map__29994__$1;
var n = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29996_30028 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29997_30029 = null;
var count__29998_30030 = (0);
var i__29999_30031 = (0);
while(true){
if((i__29999_30031 < count__29998_30030)){
var f_30032 = cljs.core._nth.call(null,chunk__29997_30029,i__29999_30031);
cljs.core.println.call(null,"  ",f_30032);


var G__30033 = seq__29996_30028;
var G__30034 = chunk__29997_30029;
var G__30035 = count__29998_30030;
var G__30036 = (i__29999_30031 + (1));
seq__29996_30028 = G__30033;
chunk__29997_30029 = G__30034;
count__29998_30030 = G__30035;
i__29999_30031 = G__30036;
continue;
} else {
var temp__5720__auto___30037 = cljs.core.seq.call(null,seq__29996_30028);
if(temp__5720__auto___30037){
var seq__29996_30038__$1 = temp__5720__auto___30037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29996_30038__$1)){
var c__4550__auto___30039 = cljs.core.chunk_first.call(null,seq__29996_30038__$1);
var G__30040 = cljs.core.chunk_rest.call(null,seq__29996_30038__$1);
var G__30041 = c__4550__auto___30039;
var G__30042 = cljs.core.count.call(null,c__4550__auto___30039);
var G__30043 = (0);
seq__29996_30028 = G__30040;
chunk__29997_30029 = G__30041;
count__29998_30030 = G__30042;
i__29999_30031 = G__30043;
continue;
} else {
var f_30044 = cljs.core.first.call(null,seq__29996_30038__$1);
cljs.core.println.call(null,"  ",f_30044);


var G__30045 = cljs.core.next.call(null,seq__29996_30038__$1);
var G__30046 = null;
var G__30047 = (0);
var G__30048 = (0);
seq__29996_30028 = G__30045;
chunk__29997_30029 = G__30046;
count__29998_30030 = G__30047;
i__29999_30031 = G__30048;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30049 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30049);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30049)))?cljs.core.second.call(null,arglists_30049):arglists_30049));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30000_30050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30001_30051 = null;
var count__30002_30052 = (0);
var i__30003_30053 = (0);
while(true){
if((i__30003_30053 < count__30002_30052)){
var vec__30014_30054 = cljs.core._nth.call(null,chunk__30001_30051,i__30003_30053);
var name_30055 = cljs.core.nth.call(null,vec__30014_30054,(0),null);
var map__30017_30056 = cljs.core.nth.call(null,vec__30014_30054,(1),null);
var map__30017_30057__$1 = (((((!((map__30017_30056 == null))))?(((((map__30017_30056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30017_30056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017_30056):map__30017_30056);
var doc_30058 = cljs.core.get.call(null,map__30017_30057__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30059 = cljs.core.get.call(null,map__30017_30057__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30055);

cljs.core.println.call(null," ",arglists_30059);

if(cljs.core.truth_(doc_30058)){
cljs.core.println.call(null," ",doc_30058);
} else {
}


var G__30060 = seq__30000_30050;
var G__30061 = chunk__30001_30051;
var G__30062 = count__30002_30052;
var G__30063 = (i__30003_30053 + (1));
seq__30000_30050 = G__30060;
chunk__30001_30051 = G__30061;
count__30002_30052 = G__30062;
i__30003_30053 = G__30063;
continue;
} else {
var temp__5720__auto___30064 = cljs.core.seq.call(null,seq__30000_30050);
if(temp__5720__auto___30064){
var seq__30000_30065__$1 = temp__5720__auto___30064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30000_30065__$1)){
var c__4550__auto___30066 = cljs.core.chunk_first.call(null,seq__30000_30065__$1);
var G__30067 = cljs.core.chunk_rest.call(null,seq__30000_30065__$1);
var G__30068 = c__4550__auto___30066;
var G__30069 = cljs.core.count.call(null,c__4550__auto___30066);
var G__30070 = (0);
seq__30000_30050 = G__30067;
chunk__30001_30051 = G__30068;
count__30002_30052 = G__30069;
i__30003_30053 = G__30070;
continue;
} else {
var vec__30019_30071 = cljs.core.first.call(null,seq__30000_30065__$1);
var name_30072 = cljs.core.nth.call(null,vec__30019_30071,(0),null);
var map__30022_30073 = cljs.core.nth.call(null,vec__30019_30071,(1),null);
var map__30022_30074__$1 = (((((!((map__30022_30073 == null))))?(((((map__30022_30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30022_30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022_30073):map__30022_30073);
var doc_30075 = cljs.core.get.call(null,map__30022_30074__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30076 = cljs.core.get.call(null,map__30022_30074__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30072);

cljs.core.println.call(null," ",arglists_30076);

if(cljs.core.truth_(doc_30075)){
cljs.core.println.call(null," ",doc_30075);
} else {
}


var G__30077 = cljs.core.next.call(null,seq__30000_30065__$1);
var G__30078 = null;
var G__30079 = (0);
var G__30080 = (0);
seq__30000_30050 = G__30077;
chunk__30001_30051 = G__30078;
count__30002_30052 = G__30079;
i__30003_30053 = G__30080;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30024 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30025 = null;
var count__30026 = (0);
var i__30027 = (0);
while(true){
if((i__30027 < count__30026)){
var role = cljs.core._nth.call(null,chunk__30025,i__30027);
var temp__5720__auto___30081__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30081__$1)){
var spec_30082 = temp__5720__auto___30081__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30082));
} else {
}


var G__30083 = seq__30024;
var G__30084 = chunk__30025;
var G__30085 = count__30026;
var G__30086 = (i__30027 + (1));
seq__30024 = G__30083;
chunk__30025 = G__30084;
count__30026 = G__30085;
i__30027 = G__30086;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30024);
if(temp__5720__auto____$1){
var seq__30024__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30024__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30024__$1);
var G__30087 = cljs.core.chunk_rest.call(null,seq__30024__$1);
var G__30088 = c__4550__auto__;
var G__30089 = cljs.core.count.call(null,c__4550__auto__);
var G__30090 = (0);
seq__30024 = G__30087;
chunk__30025 = G__30088;
count__30026 = G__30089;
i__30027 = G__30090;
continue;
} else {
var role = cljs.core.first.call(null,seq__30024__$1);
var temp__5720__auto___30091__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30091__$2)){
var spec_30092 = temp__5720__auto___30091__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30092));
} else {
}


var G__30093 = cljs.core.next.call(null,seq__30024__$1);
var G__30094 = null;
var G__30095 = (0);
var G__30096 = (0);
seq__30024 = G__30093;
chunk__30025 = G__30094;
count__30026 = G__30095;
i__30027 = G__30096;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30097 = cljs.core.conj.call(null,via,t);
var G__30098 = cljs.core.ex_cause.call(null,t);
via = G__30097;
t = G__30098;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__30101 = datafied_throwable;
var map__30101__$1 = (((((!((map__30101 == null))))?(((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var via = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30102 = cljs.core.last.call(null,via);
var map__30102__$1 = (((((!((map__30102 == null))))?(((((map__30102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30102):map__30102);
var type = cljs.core.get.call(null,map__30102__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30102__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30102__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30103 = data;
var map__30103__$1 = (((((!((map__30103 == null))))?(((((map__30103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30103):map__30103);
var problems = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30104 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30104__$1 = (((((!((map__30104 == null))))?(((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var top_data = map__30104__$1;
var source = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30109 = phase;
var G__30109__$1 = (((G__30109 instanceof cljs.core.Keyword))?G__30109.fqn:null);
switch (G__30109__$1) {
case "read-source":
var map__30110 = data;
var map__30110__$1 = (((((!((map__30110 == null))))?(((((map__30110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30110):map__30110);
var line = cljs.core.get.call(null,map__30110__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30110__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30112 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30112);
var G__30112__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30112__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30112__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30112__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30113 = top_data;
var G__30113__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30113,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30113);
var G__30113__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30113__$1);
var G__30113__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30113__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30113__$2);
var G__30113__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30113__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30113__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30113__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30113__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30114 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30114,(0),null);
var method = cljs.core.nth.call(null,vec__30114,(1),null);
var file = cljs.core.nth.call(null,vec__30114,(2),null);
var line = cljs.core.nth.call(null,vec__30114,(3),null);
var G__30117 = top_data;
var G__30117__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30117,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30117);
var G__30117__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30117__$1);
var G__30117__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30117__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30117__$2);
var G__30117__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30117__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30117__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30117__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30117__$4;
}

break;
case "execution":
var vec__30118 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30118,(0),null);
var method = cljs.core.nth.call(null,vec__30118,(1),null);
var file = cljs.core.nth.call(null,vec__30118,(2),null);
var line = cljs.core.nth.call(null,vec__30118,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30118,source__$1,method,file,line,G__30109,G__30109__$1,map__30101,map__30101__$1,via,trace,phase,map__30102,map__30102__$1,type,message,data,map__30103,map__30103__$1,problems,fn,caller,map__30104,map__30104__$1,top_data,source){
return (function (p1__30100_SHARP_){
var or__4131__auto__ = (p1__30100_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30100_SHARP_);
}
});})(vec__30118,source__$1,method,file,line,G__30109,G__30109__$1,map__30101,map__30101__$1,via,trace,phase,map__30102,map__30102__$1,type,message,data,map__30103,map__30103__$1,problems,fn,caller,map__30104,map__30104__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30121__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30121,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30121);
var G__30121__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30121__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30121__$1);
var G__30121__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30121__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30121__$2);
var G__30121__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30121__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30121__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30121__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30121__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30109__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30125){
var map__30126 = p__30125;
var map__30126__$1 = (((((!((map__30126 == null))))?(((((map__30126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30126):map__30126);
var triage_data = map__30126__$1;
var phase = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30126__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30128 = phase;
var G__30128__$1 = (((G__30128 instanceof cljs.core.Keyword))?G__30128.fqn:null);
switch (G__30128__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30129_30138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30130_30139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30131_30140 = true;
var _STAR_print_fn_STAR__temp_val__30132_30141 = ((function (_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30131_30140;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30132_30141;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,_STAR_print_fn_STAR__temp_val__30132_30141,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,_STAR_print_fn_STAR__temp_val__30132_30141,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30123_SHARP_){
return cljs.core.dissoc.call(null,p1__30123_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,_STAR_print_fn_STAR__temp_val__30132_30141,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30129_30138,_STAR_print_fn_STAR__orig_val__30130_30139,_STAR_print_newline_STAR__temp_val__30131_30140,_STAR_print_fn_STAR__temp_val__30132_30141,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30130_30139;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30129_30138;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30133_30142 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30134_30143 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30135_30144 = true;
var _STAR_print_fn_STAR__temp_val__30136_30145 = ((function (_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30135_30144;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30136_30145;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,_STAR_print_fn_STAR__temp_val__30136_30145,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,_STAR_print_fn_STAR__temp_val__30136_30145,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30124_SHARP_){
return cljs.core.dissoc.call(null,p1__30124_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,_STAR_print_fn_STAR__temp_val__30136_30145,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30133_30142,_STAR_print_fn_STAR__orig_val__30134_30143,_STAR_print_newline_STAR__temp_val__30135_30144,_STAR_print_fn_STAR__temp_val__30136_30145,sb__4661__auto__,G__30128,G__30128__$1,loc,class_name,simple_class,cause_type,format,map__30126,map__30126__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30134_30143;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30133_30142;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30128__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1652340847006
