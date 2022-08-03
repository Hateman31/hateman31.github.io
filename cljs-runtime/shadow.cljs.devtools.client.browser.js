goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21353 = arguments.length;
var i__5770__auto___21354 = (0);
while(true){
if((i__5770__auto___21354 < len__5769__auto___21353)){
args__5775__auto__.push((arguments[i__5770__auto___21354]));

var G__21355 = (i__5770__auto___21354 + (1));
i__5770__auto___21354 = G__21355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20791){
var G__20792 = cljs.core.first(seq20791);
var seq20791__$1 = cljs.core.next(seq20791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20792,seq20791__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20809 = cljs.core.seq(sources);
var chunk__20810 = null;
var count__20811 = (0);
var i__20812 = (0);
while(true){
if((i__20812 < count__20811)){
var map__20828 = chunk__20810.cljs$core$IIndexed$_nth$arity$2(null,i__20812);
var map__20828__$1 = cljs.core.__destructure_map(map__20828);
var src = map__20828__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20830){var e_21356 = e20830;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21356);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21356.message)].join('')));
}

var G__21357 = seq__20809;
var G__21358 = chunk__20810;
var G__21359 = count__20811;
var G__21360 = (i__20812 + (1));
seq__20809 = G__21357;
chunk__20810 = G__21358;
count__20811 = G__21359;
i__20812 = G__21360;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20809);
if(temp__5804__auto__){
var seq__20809__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20809__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20809__$1);
var G__21361 = cljs.core.chunk_rest(seq__20809__$1);
var G__21362 = c__5568__auto__;
var G__21363 = cljs.core.count(c__5568__auto__);
var G__21364 = (0);
seq__20809 = G__21361;
chunk__20810 = G__21362;
count__20811 = G__21363;
i__20812 = G__21364;
continue;
} else {
var map__20845 = cljs.core.first(seq__20809__$1);
var map__20845__$1 = cljs.core.__destructure_map(map__20845);
var src = map__20845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20846){var e_21365 = e20846;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21365);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21365.message)].join('')));
}

var G__21366 = cljs.core.next(seq__20809__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__20809 = G__21366;
chunk__20810 = G__21367;
count__20811 = G__21368;
i__20812 = G__21369;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20874 = cljs.core.seq(js_requires);
var chunk__20876 = null;
var count__20877 = (0);
var i__20878 = (0);
while(true){
if((i__20878 < count__20877)){
var js_ns = chunk__20876.cljs$core$IIndexed$_nth$arity$2(null,i__20878);
var require_str_21370 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21370);


var G__21371 = seq__20874;
var G__21372 = chunk__20876;
var G__21373 = count__20877;
var G__21374 = (i__20878 + (1));
seq__20874 = G__21371;
chunk__20876 = G__21372;
count__20877 = G__21373;
i__20878 = G__21374;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20874);
if(temp__5804__auto__){
var seq__20874__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20874__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20874__$1);
var G__21375 = cljs.core.chunk_rest(seq__20874__$1);
var G__21376 = c__5568__auto__;
var G__21377 = cljs.core.count(c__5568__auto__);
var G__21378 = (0);
seq__20874 = G__21375;
chunk__20876 = G__21376;
count__20877 = G__21377;
i__20878 = G__21378;
continue;
} else {
var js_ns = cljs.core.first(seq__20874__$1);
var require_str_21379 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21379);


var G__21380 = cljs.core.next(seq__20874__$1);
var G__21381 = null;
var G__21382 = (0);
var G__21383 = (0);
seq__20874 = G__21380;
chunk__20876 = G__21381;
count__20877 = G__21382;
i__20878 = G__21383;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20887){
var map__20888 = p__20887;
var map__20888__$1 = cljs.core.__destructure_map(map__20888);
var msg = map__20888__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20888__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20889(s__20890){
return (new cljs.core.LazySeq(null,(function (){
var s__20890__$1 = s__20890;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20890__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20898 = cljs.core.first(xs__6360__auto__);
var map__20898__$1 = cljs.core.__destructure_map(map__20898);
var src = map__20898__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20898__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20898__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20890__$1,map__20898,map__20898__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20888,map__20888__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20889_$_iter__20891(s__20892){
return (new cljs.core.LazySeq(null,((function (s__20890__$1,map__20898,map__20898__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20888,map__20888__$1,msg,info,reload_info){
return (function (){
var s__20892__$1 = s__20892;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20892__$1);
if(temp__5804__auto____$1){
var s__20892__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20892__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20892__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20894 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20893 = (0);
while(true){
if((i__20893 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20893);
cljs.core.chunk_append(b__20894,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21384 = (i__20893 + (1));
i__20893 = G__21384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20894),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20889_$_iter__20891(cljs.core.chunk_rest(s__20892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20894),null);
}
} else {
var warning = cljs.core.first(s__20892__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20889_$_iter__20891(cljs.core.rest(s__20892__$2)));
}
} else {
return null;
}
break;
}
});})(s__20890__$1,map__20898,map__20898__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20888,map__20888__$1,msg,info,reload_info))
,null,null));
});})(s__20890__$1,map__20898,map__20898__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20888,map__20888__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20889(cljs.core.rest(s__20890__$1)));
} else {
var G__21385 = cljs.core.rest(s__20890__$1);
s__20890__$1 = G__21385;
continue;
}
} else {
var G__21386 = cljs.core.rest(s__20890__$1);
s__20890__$1 = G__21386;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20902_21387 = cljs.core.seq(warnings);
var chunk__20903_21388 = null;
var count__20904_21389 = (0);
var i__20905_21390 = (0);
while(true){
if((i__20905_21390 < count__20904_21389)){
var map__20908_21391 = chunk__20903_21388.cljs$core$IIndexed$_nth$arity$2(null,i__20905_21390);
var map__20908_21392__$1 = cljs.core.__destructure_map(map__20908_21391);
var w_21393 = map__20908_21392__$1;
var msg_21394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908_21392__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908_21392__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908_21392__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908_21392__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21397)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21395),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21396),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21394__$1)].join(''));


var G__21398 = seq__20902_21387;
var G__21399 = chunk__20903_21388;
var G__21400 = count__20904_21389;
var G__21401 = (i__20905_21390 + (1));
seq__20902_21387 = G__21398;
chunk__20903_21388 = G__21399;
count__20904_21389 = G__21400;
i__20905_21390 = G__21401;
continue;
} else {
var temp__5804__auto___21402 = cljs.core.seq(seq__20902_21387);
if(temp__5804__auto___21402){
var seq__20902_21403__$1 = temp__5804__auto___21402;
if(cljs.core.chunked_seq_QMARK_(seq__20902_21403__$1)){
var c__5568__auto___21404 = cljs.core.chunk_first(seq__20902_21403__$1);
var G__21405 = cljs.core.chunk_rest(seq__20902_21403__$1);
var G__21406 = c__5568__auto___21404;
var G__21407 = cljs.core.count(c__5568__auto___21404);
var G__21408 = (0);
seq__20902_21387 = G__21405;
chunk__20903_21388 = G__21406;
count__20904_21389 = G__21407;
i__20905_21390 = G__21408;
continue;
} else {
var map__20916_21409 = cljs.core.first(seq__20902_21403__$1);
var map__20916_21410__$1 = cljs.core.__destructure_map(map__20916_21409);
var w_21411 = map__20916_21410__$1;
var msg_21412__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916_21410__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916_21410__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916_21410__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916_21410__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21415)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21413),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21414),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21412__$1)].join(''));


var G__21416 = cljs.core.next(seq__20902_21403__$1);
var G__21417 = null;
var G__21418 = (0);
var G__21419 = (0);
seq__20902_21387 = G__21416;
chunk__20903_21388 = G__21417;
count__20904_21389 = G__21418;
i__20905_21390 = G__21419;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20886_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20886_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20935){
var map__20936 = p__20935;
var map__20936__$1 = cljs.core.__destructure_map(map__20936);
var msg = map__20936__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20937 = cljs.core.seq(updates);
var chunk__20939 = null;
var count__20940 = (0);
var i__20941 = (0);
while(true){
if((i__20941 < count__20940)){
var path = chunk__20939.cljs$core$IIndexed$_nth$arity$2(null,i__20941);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21225_21420 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21229_21421 = null;
var count__21230_21422 = (0);
var i__21231_21423 = (0);
while(true){
if((i__21231_21423 < count__21230_21422)){
var node_21424 = chunk__21229_21421.cljs$core$IIndexed$_nth$arity$2(null,i__21231_21423);
if(cljs.core.not(node_21424.shadow$old)){
var path_match_21425 = shadow.cljs.devtools.client.browser.match_paths(node_21424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21425)){
var new_link_21426 = (function (){var G__21257 = node_21424.cloneNode(true);
G__21257.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21425),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21257;
})();
(node_21424.shadow$old = true);

(new_link_21426.onload = ((function (seq__21225_21420,chunk__21229_21421,count__21230_21422,i__21231_21423,seq__20937,chunk__20939,count__20940,i__20941,new_link_21426,path_match_21425,node_21424,path,map__20936,map__20936__$1,msg,updates,reload_info){
return (function (e){
var seq__21258_21427 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21260_21428 = null;
var count__21261_21429 = (0);
var i__21262_21430 = (0);
while(true){
if((i__21262_21430 < count__21261_21429)){
var map__21266_21431 = chunk__21260_21428.cljs$core$IIndexed$_nth$arity$2(null,i__21262_21430);
var map__21266_21432__$1 = cljs.core.__destructure_map(map__21266_21431);
var task_21433 = map__21266_21432__$1;
var fn_str_21434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21266_21432__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21266_21432__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21436 = goog.getObjectByName(fn_str_21434,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21435)].join(''));

(fn_obj_21436.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21436.cljs$core$IFn$_invoke$arity$2(path,new_link_21426) : fn_obj_21436.call(null,path,new_link_21426));


var G__21437 = seq__21258_21427;
var G__21438 = chunk__21260_21428;
var G__21439 = count__21261_21429;
var G__21440 = (i__21262_21430 + (1));
seq__21258_21427 = G__21437;
chunk__21260_21428 = G__21438;
count__21261_21429 = G__21439;
i__21262_21430 = G__21440;
continue;
} else {
var temp__5804__auto___21441 = cljs.core.seq(seq__21258_21427);
if(temp__5804__auto___21441){
var seq__21258_21442__$1 = temp__5804__auto___21441;
if(cljs.core.chunked_seq_QMARK_(seq__21258_21442__$1)){
var c__5568__auto___21443 = cljs.core.chunk_first(seq__21258_21442__$1);
var G__21444 = cljs.core.chunk_rest(seq__21258_21442__$1);
var G__21445 = c__5568__auto___21443;
var G__21446 = cljs.core.count(c__5568__auto___21443);
var G__21447 = (0);
seq__21258_21427 = G__21444;
chunk__21260_21428 = G__21445;
count__21261_21429 = G__21446;
i__21262_21430 = G__21447;
continue;
} else {
var map__21267_21448 = cljs.core.first(seq__21258_21442__$1);
var map__21267_21449__$1 = cljs.core.__destructure_map(map__21267_21448);
var task_21450 = map__21267_21449__$1;
var fn_str_21451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267_21449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267_21449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21453 = goog.getObjectByName(fn_str_21451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21452)].join(''));

(fn_obj_21453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21453.cljs$core$IFn$_invoke$arity$2(path,new_link_21426) : fn_obj_21453.call(null,path,new_link_21426));


var G__21454 = cljs.core.next(seq__21258_21442__$1);
var G__21455 = null;
var G__21456 = (0);
var G__21457 = (0);
seq__21258_21427 = G__21454;
chunk__21260_21428 = G__21455;
count__21261_21429 = G__21456;
i__21262_21430 = G__21457;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21424);
});})(seq__21225_21420,chunk__21229_21421,count__21230_21422,i__21231_21423,seq__20937,chunk__20939,count__20940,i__20941,new_link_21426,path_match_21425,node_21424,path,map__20936,map__20936__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21425], 0));

goog.dom.insertSiblingAfter(new_link_21426,node_21424);


var G__21458 = seq__21225_21420;
var G__21459 = chunk__21229_21421;
var G__21460 = count__21230_21422;
var G__21461 = (i__21231_21423 + (1));
seq__21225_21420 = G__21458;
chunk__21229_21421 = G__21459;
count__21230_21422 = G__21460;
i__21231_21423 = G__21461;
continue;
} else {
var G__21462 = seq__21225_21420;
var G__21463 = chunk__21229_21421;
var G__21464 = count__21230_21422;
var G__21465 = (i__21231_21423 + (1));
seq__21225_21420 = G__21462;
chunk__21229_21421 = G__21463;
count__21230_21422 = G__21464;
i__21231_21423 = G__21465;
continue;
}
} else {
var G__21466 = seq__21225_21420;
var G__21467 = chunk__21229_21421;
var G__21468 = count__21230_21422;
var G__21469 = (i__21231_21423 + (1));
seq__21225_21420 = G__21466;
chunk__21229_21421 = G__21467;
count__21230_21422 = G__21468;
i__21231_21423 = G__21469;
continue;
}
} else {
var temp__5804__auto___21470 = cljs.core.seq(seq__21225_21420);
if(temp__5804__auto___21470){
var seq__21225_21471__$1 = temp__5804__auto___21470;
if(cljs.core.chunked_seq_QMARK_(seq__21225_21471__$1)){
var c__5568__auto___21472 = cljs.core.chunk_first(seq__21225_21471__$1);
var G__21473 = cljs.core.chunk_rest(seq__21225_21471__$1);
var G__21474 = c__5568__auto___21472;
var G__21475 = cljs.core.count(c__5568__auto___21472);
var G__21476 = (0);
seq__21225_21420 = G__21473;
chunk__21229_21421 = G__21474;
count__21230_21422 = G__21475;
i__21231_21423 = G__21476;
continue;
} else {
var node_21477 = cljs.core.first(seq__21225_21471__$1);
if(cljs.core.not(node_21477.shadow$old)){
var path_match_21478 = shadow.cljs.devtools.client.browser.match_paths(node_21477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21478)){
var new_link_21479 = (function (){var G__21268 = node_21477.cloneNode(true);
G__21268.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21268;
})();
(node_21477.shadow$old = true);

(new_link_21479.onload = ((function (seq__21225_21420,chunk__21229_21421,count__21230_21422,i__21231_21423,seq__20937,chunk__20939,count__20940,i__20941,new_link_21479,path_match_21478,node_21477,seq__21225_21471__$1,temp__5804__auto___21470,path,map__20936,map__20936__$1,msg,updates,reload_info){
return (function (e){
var seq__21269_21480 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21271_21481 = null;
var count__21272_21482 = (0);
var i__21273_21483 = (0);
while(true){
if((i__21273_21483 < count__21272_21482)){
var map__21277_21484 = chunk__21271_21481.cljs$core$IIndexed$_nth$arity$2(null,i__21273_21483);
var map__21277_21485__$1 = cljs.core.__destructure_map(map__21277_21484);
var task_21486 = map__21277_21485__$1;
var fn_str_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21485__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21485__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21489 = goog.getObjectByName(fn_str_21487,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21488)].join(''));

(fn_obj_21489.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21489.cljs$core$IFn$_invoke$arity$2(path,new_link_21479) : fn_obj_21489.call(null,path,new_link_21479));


var G__21490 = seq__21269_21480;
var G__21491 = chunk__21271_21481;
var G__21492 = count__21272_21482;
var G__21493 = (i__21273_21483 + (1));
seq__21269_21480 = G__21490;
chunk__21271_21481 = G__21491;
count__21272_21482 = G__21492;
i__21273_21483 = G__21493;
continue;
} else {
var temp__5804__auto___21494__$1 = cljs.core.seq(seq__21269_21480);
if(temp__5804__auto___21494__$1){
var seq__21269_21495__$1 = temp__5804__auto___21494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21269_21495__$1)){
var c__5568__auto___21496 = cljs.core.chunk_first(seq__21269_21495__$1);
var G__21497 = cljs.core.chunk_rest(seq__21269_21495__$1);
var G__21498 = c__5568__auto___21496;
var G__21499 = cljs.core.count(c__5568__auto___21496);
var G__21500 = (0);
seq__21269_21480 = G__21497;
chunk__21271_21481 = G__21498;
count__21272_21482 = G__21499;
i__21273_21483 = G__21500;
continue;
} else {
var map__21278_21501 = cljs.core.first(seq__21269_21495__$1);
var map__21278_21502__$1 = cljs.core.__destructure_map(map__21278_21501);
var task_21503 = map__21278_21502__$1;
var fn_str_21504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21502__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21502__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21506 = goog.getObjectByName(fn_str_21504,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21505)].join(''));

(fn_obj_21506.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21506.cljs$core$IFn$_invoke$arity$2(path,new_link_21479) : fn_obj_21506.call(null,path,new_link_21479));


var G__21507 = cljs.core.next(seq__21269_21495__$1);
var G__21508 = null;
var G__21509 = (0);
var G__21510 = (0);
seq__21269_21480 = G__21507;
chunk__21271_21481 = G__21508;
count__21272_21482 = G__21509;
i__21273_21483 = G__21510;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21477);
});})(seq__21225_21420,chunk__21229_21421,count__21230_21422,i__21231_21423,seq__20937,chunk__20939,count__20940,i__20941,new_link_21479,path_match_21478,node_21477,seq__21225_21471__$1,temp__5804__auto___21470,path,map__20936,map__20936__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21478], 0));

goog.dom.insertSiblingAfter(new_link_21479,node_21477);


var G__21511 = cljs.core.next(seq__21225_21471__$1);
var G__21512 = null;
var G__21513 = (0);
var G__21514 = (0);
seq__21225_21420 = G__21511;
chunk__21229_21421 = G__21512;
count__21230_21422 = G__21513;
i__21231_21423 = G__21514;
continue;
} else {
var G__21515 = cljs.core.next(seq__21225_21471__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__21225_21420 = G__21515;
chunk__21229_21421 = G__21516;
count__21230_21422 = G__21517;
i__21231_21423 = G__21518;
continue;
}
} else {
var G__21519 = cljs.core.next(seq__21225_21471__$1);
var G__21520 = null;
var G__21521 = (0);
var G__21522 = (0);
seq__21225_21420 = G__21519;
chunk__21229_21421 = G__21520;
count__21230_21422 = G__21521;
i__21231_21423 = G__21522;
continue;
}
}
} else {
}
}
break;
}


var G__21523 = seq__20937;
var G__21524 = chunk__20939;
var G__21525 = count__20940;
var G__21526 = (i__20941 + (1));
seq__20937 = G__21523;
chunk__20939 = G__21524;
count__20940 = G__21525;
i__20941 = G__21526;
continue;
} else {
var G__21527 = seq__20937;
var G__21528 = chunk__20939;
var G__21529 = count__20940;
var G__21530 = (i__20941 + (1));
seq__20937 = G__21527;
chunk__20939 = G__21528;
count__20940 = G__21529;
i__20941 = G__21530;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20937);
if(temp__5804__auto__){
var seq__20937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20937__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20937__$1);
var G__21531 = cljs.core.chunk_rest(seq__20937__$1);
var G__21532 = c__5568__auto__;
var G__21533 = cljs.core.count(c__5568__auto__);
var G__21534 = (0);
seq__20937 = G__21531;
chunk__20939 = G__21532;
count__20940 = G__21533;
i__20941 = G__21534;
continue;
} else {
var path = cljs.core.first(seq__20937__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21279_21535 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21283_21536 = null;
var count__21284_21537 = (0);
var i__21285_21538 = (0);
while(true){
if((i__21285_21538 < count__21284_21537)){
var node_21539 = chunk__21283_21536.cljs$core$IIndexed$_nth$arity$2(null,i__21285_21538);
if(cljs.core.not(node_21539.shadow$old)){
var path_match_21540 = shadow.cljs.devtools.client.browser.match_paths(node_21539.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21540)){
var new_link_21541 = (function (){var G__21311 = node_21539.cloneNode(true);
G__21311.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21540),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21311;
})();
(node_21539.shadow$old = true);

(new_link_21541.onload = ((function (seq__21279_21535,chunk__21283_21536,count__21284_21537,i__21285_21538,seq__20937,chunk__20939,count__20940,i__20941,new_link_21541,path_match_21540,node_21539,path,seq__20937__$1,temp__5804__auto__,map__20936,map__20936__$1,msg,updates,reload_info){
return (function (e){
var seq__21312_21542 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21314_21543 = null;
var count__21315_21544 = (0);
var i__21316_21545 = (0);
while(true){
if((i__21316_21545 < count__21315_21544)){
var map__21320_21546 = chunk__21314_21543.cljs$core$IIndexed$_nth$arity$2(null,i__21316_21545);
var map__21320_21547__$1 = cljs.core.__destructure_map(map__21320_21546);
var task_21548 = map__21320_21547__$1;
var fn_str_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21320_21547__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21320_21547__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21551 = goog.getObjectByName(fn_str_21549,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21550)].join(''));

(fn_obj_21551.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21551.cljs$core$IFn$_invoke$arity$2(path,new_link_21541) : fn_obj_21551.call(null,path,new_link_21541));


var G__21552 = seq__21312_21542;
var G__21553 = chunk__21314_21543;
var G__21554 = count__21315_21544;
var G__21555 = (i__21316_21545 + (1));
seq__21312_21542 = G__21552;
chunk__21314_21543 = G__21553;
count__21315_21544 = G__21554;
i__21316_21545 = G__21555;
continue;
} else {
var temp__5804__auto___21556__$1 = cljs.core.seq(seq__21312_21542);
if(temp__5804__auto___21556__$1){
var seq__21312_21557__$1 = temp__5804__auto___21556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21312_21557__$1)){
var c__5568__auto___21558 = cljs.core.chunk_first(seq__21312_21557__$1);
var G__21559 = cljs.core.chunk_rest(seq__21312_21557__$1);
var G__21560 = c__5568__auto___21558;
var G__21561 = cljs.core.count(c__5568__auto___21558);
var G__21562 = (0);
seq__21312_21542 = G__21559;
chunk__21314_21543 = G__21560;
count__21315_21544 = G__21561;
i__21316_21545 = G__21562;
continue;
} else {
var map__21321_21563 = cljs.core.first(seq__21312_21557__$1);
var map__21321_21564__$1 = cljs.core.__destructure_map(map__21321_21563);
var task_21565 = map__21321_21564__$1;
var fn_str_21566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21321_21564__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21321_21564__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21568 = goog.getObjectByName(fn_str_21566,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21567)].join(''));

(fn_obj_21568.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21568.cljs$core$IFn$_invoke$arity$2(path,new_link_21541) : fn_obj_21568.call(null,path,new_link_21541));


var G__21569 = cljs.core.next(seq__21312_21557__$1);
var G__21570 = null;
var G__21571 = (0);
var G__21572 = (0);
seq__21312_21542 = G__21569;
chunk__21314_21543 = G__21570;
count__21315_21544 = G__21571;
i__21316_21545 = G__21572;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21539);
});})(seq__21279_21535,chunk__21283_21536,count__21284_21537,i__21285_21538,seq__20937,chunk__20939,count__20940,i__20941,new_link_21541,path_match_21540,node_21539,path,seq__20937__$1,temp__5804__auto__,map__20936,map__20936__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21540], 0));

goog.dom.insertSiblingAfter(new_link_21541,node_21539);


var G__21573 = seq__21279_21535;
var G__21574 = chunk__21283_21536;
var G__21575 = count__21284_21537;
var G__21576 = (i__21285_21538 + (1));
seq__21279_21535 = G__21573;
chunk__21283_21536 = G__21574;
count__21284_21537 = G__21575;
i__21285_21538 = G__21576;
continue;
} else {
var G__21577 = seq__21279_21535;
var G__21578 = chunk__21283_21536;
var G__21579 = count__21284_21537;
var G__21580 = (i__21285_21538 + (1));
seq__21279_21535 = G__21577;
chunk__21283_21536 = G__21578;
count__21284_21537 = G__21579;
i__21285_21538 = G__21580;
continue;
}
} else {
var G__21581 = seq__21279_21535;
var G__21582 = chunk__21283_21536;
var G__21583 = count__21284_21537;
var G__21584 = (i__21285_21538 + (1));
seq__21279_21535 = G__21581;
chunk__21283_21536 = G__21582;
count__21284_21537 = G__21583;
i__21285_21538 = G__21584;
continue;
}
} else {
var temp__5804__auto___21585__$1 = cljs.core.seq(seq__21279_21535);
if(temp__5804__auto___21585__$1){
var seq__21279_21586__$1 = temp__5804__auto___21585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21279_21586__$1)){
var c__5568__auto___21587 = cljs.core.chunk_first(seq__21279_21586__$1);
var G__21588 = cljs.core.chunk_rest(seq__21279_21586__$1);
var G__21589 = c__5568__auto___21587;
var G__21590 = cljs.core.count(c__5568__auto___21587);
var G__21591 = (0);
seq__21279_21535 = G__21588;
chunk__21283_21536 = G__21589;
count__21284_21537 = G__21590;
i__21285_21538 = G__21591;
continue;
} else {
var node_21592 = cljs.core.first(seq__21279_21586__$1);
if(cljs.core.not(node_21592.shadow$old)){
var path_match_21593 = shadow.cljs.devtools.client.browser.match_paths(node_21592.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21593)){
var new_link_21594 = (function (){var G__21322 = node_21592.cloneNode(true);
G__21322.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21593),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21322;
})();
(node_21592.shadow$old = true);

(new_link_21594.onload = ((function (seq__21279_21535,chunk__21283_21536,count__21284_21537,i__21285_21538,seq__20937,chunk__20939,count__20940,i__20941,new_link_21594,path_match_21593,node_21592,seq__21279_21586__$1,temp__5804__auto___21585__$1,path,seq__20937__$1,temp__5804__auto__,map__20936,map__20936__$1,msg,updates,reload_info){
return (function (e){
var seq__21323_21595 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21325_21596 = null;
var count__21326_21597 = (0);
var i__21327_21598 = (0);
while(true){
if((i__21327_21598 < count__21326_21597)){
var map__21331_21599 = chunk__21325_21596.cljs$core$IIndexed$_nth$arity$2(null,i__21327_21598);
var map__21331_21600__$1 = cljs.core.__destructure_map(map__21331_21599);
var task_21601 = map__21331_21600__$1;
var fn_str_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21600__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21600__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21604 = goog.getObjectByName(fn_str_21602,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21603)].join(''));

(fn_obj_21604.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21604.cljs$core$IFn$_invoke$arity$2(path,new_link_21594) : fn_obj_21604.call(null,path,new_link_21594));


var G__21605 = seq__21323_21595;
var G__21606 = chunk__21325_21596;
var G__21607 = count__21326_21597;
var G__21608 = (i__21327_21598 + (1));
seq__21323_21595 = G__21605;
chunk__21325_21596 = G__21606;
count__21326_21597 = G__21607;
i__21327_21598 = G__21608;
continue;
} else {
var temp__5804__auto___21609__$2 = cljs.core.seq(seq__21323_21595);
if(temp__5804__auto___21609__$2){
var seq__21323_21610__$1 = temp__5804__auto___21609__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21323_21610__$1)){
var c__5568__auto___21611 = cljs.core.chunk_first(seq__21323_21610__$1);
var G__21612 = cljs.core.chunk_rest(seq__21323_21610__$1);
var G__21613 = c__5568__auto___21611;
var G__21614 = cljs.core.count(c__5568__auto___21611);
var G__21615 = (0);
seq__21323_21595 = G__21612;
chunk__21325_21596 = G__21613;
count__21326_21597 = G__21614;
i__21327_21598 = G__21615;
continue;
} else {
var map__21332_21616 = cljs.core.first(seq__21323_21610__$1);
var map__21332_21617__$1 = cljs.core.__destructure_map(map__21332_21616);
var task_21618 = map__21332_21617__$1;
var fn_str_21619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332_21617__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332_21617__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21621 = goog.getObjectByName(fn_str_21619,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21620)].join(''));

(fn_obj_21621.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21621.cljs$core$IFn$_invoke$arity$2(path,new_link_21594) : fn_obj_21621.call(null,path,new_link_21594));


var G__21622 = cljs.core.next(seq__21323_21610__$1);
var G__21623 = null;
var G__21624 = (0);
var G__21625 = (0);
seq__21323_21595 = G__21622;
chunk__21325_21596 = G__21623;
count__21326_21597 = G__21624;
i__21327_21598 = G__21625;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21592);
});})(seq__21279_21535,chunk__21283_21536,count__21284_21537,i__21285_21538,seq__20937,chunk__20939,count__20940,i__20941,new_link_21594,path_match_21593,node_21592,seq__21279_21586__$1,temp__5804__auto___21585__$1,path,seq__20937__$1,temp__5804__auto__,map__20936,map__20936__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21593], 0));

goog.dom.insertSiblingAfter(new_link_21594,node_21592);


var G__21626 = cljs.core.next(seq__21279_21586__$1);
var G__21627 = null;
var G__21628 = (0);
var G__21629 = (0);
seq__21279_21535 = G__21626;
chunk__21283_21536 = G__21627;
count__21284_21537 = G__21628;
i__21285_21538 = G__21629;
continue;
} else {
var G__21630 = cljs.core.next(seq__21279_21586__$1);
var G__21631 = null;
var G__21632 = (0);
var G__21633 = (0);
seq__21279_21535 = G__21630;
chunk__21283_21536 = G__21631;
count__21284_21537 = G__21632;
i__21285_21538 = G__21633;
continue;
}
} else {
var G__21634 = cljs.core.next(seq__21279_21586__$1);
var G__21635 = null;
var G__21636 = (0);
var G__21637 = (0);
seq__21279_21535 = G__21634;
chunk__21283_21536 = G__21635;
count__21284_21537 = G__21636;
i__21285_21538 = G__21637;
continue;
}
}
} else {
}
}
break;
}


var G__21638 = cljs.core.next(seq__20937__$1);
var G__21639 = null;
var G__21640 = (0);
var G__21641 = (0);
seq__20937 = G__21638;
chunk__20939 = G__21639;
count__20940 = G__21640;
i__20941 = G__21641;
continue;
} else {
var G__21642 = cljs.core.next(seq__20937__$1);
var G__21643 = null;
var G__21644 = (0);
var G__21645 = (0);
seq__20937 = G__21642;
chunk__20939 = G__21643;
count__20940 = G__21644;
i__20941 = G__21645;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21333){
var map__21334 = p__21333;
var map__21334__$1 = cljs.core.__destructure_map(map__21334);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21335){
var map__21336 = p__21335;
var map__21336__$1 = cljs.core.__destructure_map(map__21336);
var _ = map__21336__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21337,done,error){
var map__21338 = p__21337;
var map__21338__$1 = cljs.core.__destructure_map(map__21338);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21339,done,error){
var map__21340 = p__21339;
var map__21340__$1 = cljs.core.__destructure_map(map__21340);
var msg = map__21340__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21341){
var map__21342 = p__21341;
var map__21342__$1 = cljs.core.__destructure_map(map__21342);
var src = map__21342__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21343 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21343) : done.call(null,G__21343));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21344){
var map__21345 = p__21344;
var map__21345__$1 = cljs.core.__destructure_map(map__21345);
var msg__$1 = map__21345__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21345__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21346){var ex = e21346;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21347){
var map__21348 = p__21347;
var map__21348__$1 = cljs.core.__destructure_map(map__21348);
var env = map__21348__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21349){
var map__21350 = p__21349;
var map__21350__$1 = cljs.core.__destructure_map(map__21350);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21350__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21350__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21351){
var map__21352 = p__21351;
var map__21352__$1 = cljs.core.__destructure_map(map__21352);
var svc = map__21352__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
