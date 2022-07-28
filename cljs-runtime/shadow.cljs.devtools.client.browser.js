goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21165 = arguments.length;
var i__5770__auto___21166 = (0);
while(true){
if((i__5770__auto___21166 < len__5769__auto___21165)){
args__5775__auto__.push((arguments[i__5770__auto___21166]));

var G__21167 = (i__5770__auto___21166 + (1));
i__5770__auto___21166 = G__21167;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20878){
var G__20879 = cljs.core.first(seq20878);
var seq20878__$1 = cljs.core.next(seq20878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20879,seq20878__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20883 = cljs.core.seq(sources);
var chunk__20884 = null;
var count__20885 = (0);
var i__20886 = (0);
while(true){
if((i__20886 < count__20885)){
var map__20893 = chunk__20884.cljs$core$IIndexed$_nth$arity$2(null,i__20886);
var map__20893__$1 = cljs.core.__destructure_map(map__20893);
var src = map__20893__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20894){var e_21168 = e20894;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21168);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21168.message)].join('')));
}

var G__21169 = seq__20883;
var G__21170 = chunk__20884;
var G__21171 = count__20885;
var G__21172 = (i__20886 + (1));
seq__20883 = G__21169;
chunk__20884 = G__21170;
count__20885 = G__21171;
i__20886 = G__21172;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20883);
if(temp__5804__auto__){
var seq__20883__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20883__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20883__$1);
var G__21173 = cljs.core.chunk_rest(seq__20883__$1);
var G__21174 = c__5568__auto__;
var G__21175 = cljs.core.count(c__5568__auto__);
var G__21176 = (0);
seq__20883 = G__21173;
chunk__20884 = G__21174;
count__20885 = G__21175;
i__20886 = G__21176;
continue;
} else {
var map__20895 = cljs.core.first(seq__20883__$1);
var map__20895__$1 = cljs.core.__destructure_map(map__20895);
var src = map__20895__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20895__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20895__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20896){var e_21177 = e20896;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21177);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21177.message)].join('')));
}

var G__21178 = cljs.core.next(seq__20883__$1);
var G__21179 = null;
var G__21180 = (0);
var G__21181 = (0);
seq__20883 = G__21178;
chunk__20884 = G__21179;
count__20885 = G__21180;
i__20886 = G__21181;
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
var seq__20899 = cljs.core.seq(js_requires);
var chunk__20900 = null;
var count__20901 = (0);
var i__20902 = (0);
while(true){
if((i__20902 < count__20901)){
var js_ns = chunk__20900.cljs$core$IIndexed$_nth$arity$2(null,i__20902);
var require_str_21182 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21182);


var G__21183 = seq__20899;
var G__21184 = chunk__20900;
var G__21185 = count__20901;
var G__21186 = (i__20902 + (1));
seq__20899 = G__21183;
chunk__20900 = G__21184;
count__20901 = G__21185;
i__20902 = G__21186;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20899);
if(temp__5804__auto__){
var seq__20899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20899__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20899__$1);
var G__21187 = cljs.core.chunk_rest(seq__20899__$1);
var G__21188 = c__5568__auto__;
var G__21189 = cljs.core.count(c__5568__auto__);
var G__21190 = (0);
seq__20899 = G__21187;
chunk__20900 = G__21188;
count__20901 = G__21189;
i__20902 = G__21190;
continue;
} else {
var js_ns = cljs.core.first(seq__20899__$1);
var require_str_21191 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21191);


var G__21192 = cljs.core.next(seq__20899__$1);
var G__21193 = null;
var G__21194 = (0);
var G__21195 = (0);
seq__20899 = G__21192;
chunk__20900 = G__21193;
count__20901 = G__21194;
i__20902 = G__21195;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20904){
var map__20905 = p__20904;
var map__20905__$1 = cljs.core.__destructure_map(map__20905);
var msg = map__20905__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906(s__20907){
return (new cljs.core.LazySeq(null,(function (){
var s__20907__$1 = s__20907;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20907__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20912 = cljs.core.first(xs__6360__auto__);
var map__20912__$1 = cljs.core.__destructure_map(map__20912);
var src = map__20912__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20907__$1,map__20912,map__20912__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20905,map__20905__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(s__20909){
return (new cljs.core.LazySeq(null,((function (s__20907__$1,map__20912,map__20912__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20905,map__20905__$1,msg,info,reload_info){
return (function (){
var s__20909__$1 = s__20909;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20909__$1);
if(temp__5804__auto____$1){
var s__20909__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20909__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20909__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20911 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20910 = (0);
while(true){
if((i__20910 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20910);
cljs.core.chunk_append(b__20911,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21196 = (i__20910 + (1));
i__20910 = G__21196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20911),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(cljs.core.chunk_rest(s__20909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20911),null);
}
} else {
var warning = cljs.core.first(s__20909__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(cljs.core.rest(s__20909__$2)));
}
} else {
return null;
}
break;
}
});})(s__20907__$1,map__20912,map__20912__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20905,map__20905__$1,msg,info,reload_info))
,null,null));
});})(s__20907__$1,map__20912,map__20912__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20905,map__20905__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906(cljs.core.rest(s__20907__$1)));
} else {
var G__21197 = cljs.core.rest(s__20907__$1);
s__20907__$1 = G__21197;
continue;
}
} else {
var G__21198 = cljs.core.rest(s__20907__$1);
s__20907__$1 = G__21198;
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
var seq__20913_21199 = cljs.core.seq(warnings);
var chunk__20914_21200 = null;
var count__20915_21201 = (0);
var i__20916_21202 = (0);
while(true){
if((i__20916_21202 < count__20915_21201)){
var map__20919_21203 = chunk__20914_21200.cljs$core$IIndexed$_nth$arity$2(null,i__20916_21202);
var map__20919_21204__$1 = cljs.core.__destructure_map(map__20919_21203);
var w_21205 = map__20919_21204__$1;
var msg_21206__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21204__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21204__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21204__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21204__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21209)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21207),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21208),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21206__$1)].join(''));


var G__21210 = seq__20913_21199;
var G__21211 = chunk__20914_21200;
var G__21212 = count__20915_21201;
var G__21213 = (i__20916_21202 + (1));
seq__20913_21199 = G__21210;
chunk__20914_21200 = G__21211;
count__20915_21201 = G__21212;
i__20916_21202 = G__21213;
continue;
} else {
var temp__5804__auto___21214 = cljs.core.seq(seq__20913_21199);
if(temp__5804__auto___21214){
var seq__20913_21215__$1 = temp__5804__auto___21214;
if(cljs.core.chunked_seq_QMARK_(seq__20913_21215__$1)){
var c__5568__auto___21216 = cljs.core.chunk_first(seq__20913_21215__$1);
var G__21217 = cljs.core.chunk_rest(seq__20913_21215__$1);
var G__21218 = c__5568__auto___21216;
var G__21219 = cljs.core.count(c__5568__auto___21216);
var G__21220 = (0);
seq__20913_21199 = G__21217;
chunk__20914_21200 = G__21218;
count__20915_21201 = G__21219;
i__20916_21202 = G__21220;
continue;
} else {
var map__20920_21221 = cljs.core.first(seq__20913_21215__$1);
var map__20920_21222__$1 = cljs.core.__destructure_map(map__20920_21221);
var w_21223 = map__20920_21222__$1;
var msg_21224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21222__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21222__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21222__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21227)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21225),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21226),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21224__$1)].join(''));


var G__21228 = cljs.core.next(seq__20913_21215__$1);
var G__21229 = null;
var G__21230 = (0);
var G__21231 = (0);
seq__20913_21199 = G__21228;
chunk__20914_21200 = G__21229;
count__20915_21201 = G__21230;
i__20916_21202 = G__21231;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20903_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20903_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20921){
var map__20922 = p__20921;
var map__20922__$1 = cljs.core.__destructure_map(map__20922);
var msg = map__20922__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20923 = cljs.core.seq(updates);
var chunk__20925 = null;
var count__20926 = (0);
var i__20927 = (0);
while(true){
if((i__20927 < count__20926)){
var path = chunk__20925.cljs$core$IIndexed$_nth$arity$2(null,i__20927);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21037_21232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21041_21233 = null;
var count__21042_21234 = (0);
var i__21043_21235 = (0);
while(true){
if((i__21043_21235 < count__21042_21234)){
var node_21236 = chunk__21041_21233.cljs$core$IIndexed$_nth$arity$2(null,i__21043_21235);
if(cljs.core.not(node_21236.shadow$old)){
var path_match_21237 = shadow.cljs.devtools.client.browser.match_paths(node_21236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21237)){
var new_link_21238 = (function (){var G__21069 = node_21236.cloneNode(true);
G__21069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21069;
})();
(node_21236.shadow$old = true);

(new_link_21238.onload = ((function (seq__21037_21232,chunk__21041_21233,count__21042_21234,i__21043_21235,seq__20923,chunk__20925,count__20926,i__20927,new_link_21238,path_match_21237,node_21236,path,map__20922,map__20922__$1,msg,updates,reload_info){
return (function (e){
var seq__21070_21239 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21072_21240 = null;
var count__21073_21241 = (0);
var i__21074_21242 = (0);
while(true){
if((i__21074_21242 < count__21073_21241)){
var map__21078_21243 = chunk__21072_21240.cljs$core$IIndexed$_nth$arity$2(null,i__21074_21242);
var map__21078_21244__$1 = cljs.core.__destructure_map(map__21078_21243);
var task_21245 = map__21078_21244__$1;
var fn_str_21246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078_21244__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078_21244__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21248 = goog.getObjectByName(fn_str_21246,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21247)].join(''));

(fn_obj_21248.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21248.cljs$core$IFn$_invoke$arity$2(path,new_link_21238) : fn_obj_21248.call(null,path,new_link_21238));


var G__21249 = seq__21070_21239;
var G__21250 = chunk__21072_21240;
var G__21251 = count__21073_21241;
var G__21252 = (i__21074_21242 + (1));
seq__21070_21239 = G__21249;
chunk__21072_21240 = G__21250;
count__21073_21241 = G__21251;
i__21074_21242 = G__21252;
continue;
} else {
var temp__5804__auto___21253 = cljs.core.seq(seq__21070_21239);
if(temp__5804__auto___21253){
var seq__21070_21254__$1 = temp__5804__auto___21253;
if(cljs.core.chunked_seq_QMARK_(seq__21070_21254__$1)){
var c__5568__auto___21255 = cljs.core.chunk_first(seq__21070_21254__$1);
var G__21256 = cljs.core.chunk_rest(seq__21070_21254__$1);
var G__21257 = c__5568__auto___21255;
var G__21258 = cljs.core.count(c__5568__auto___21255);
var G__21259 = (0);
seq__21070_21239 = G__21256;
chunk__21072_21240 = G__21257;
count__21073_21241 = G__21258;
i__21074_21242 = G__21259;
continue;
} else {
var map__21079_21260 = cljs.core.first(seq__21070_21254__$1);
var map__21079_21261__$1 = cljs.core.__destructure_map(map__21079_21260);
var task_21262 = map__21079_21261__$1;
var fn_str_21263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079_21261__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079_21261__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21265 = goog.getObjectByName(fn_str_21263,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21264)].join(''));

(fn_obj_21265.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21265.cljs$core$IFn$_invoke$arity$2(path,new_link_21238) : fn_obj_21265.call(null,path,new_link_21238));


var G__21266 = cljs.core.next(seq__21070_21254__$1);
var G__21267 = null;
var G__21268 = (0);
var G__21269 = (0);
seq__21070_21239 = G__21266;
chunk__21072_21240 = G__21267;
count__21073_21241 = G__21268;
i__21074_21242 = G__21269;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21236);
});})(seq__21037_21232,chunk__21041_21233,count__21042_21234,i__21043_21235,seq__20923,chunk__20925,count__20926,i__20927,new_link_21238,path_match_21237,node_21236,path,map__20922,map__20922__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21237], 0));

goog.dom.insertSiblingAfter(new_link_21238,node_21236);


var G__21270 = seq__21037_21232;
var G__21271 = chunk__21041_21233;
var G__21272 = count__21042_21234;
var G__21273 = (i__21043_21235 + (1));
seq__21037_21232 = G__21270;
chunk__21041_21233 = G__21271;
count__21042_21234 = G__21272;
i__21043_21235 = G__21273;
continue;
} else {
var G__21274 = seq__21037_21232;
var G__21275 = chunk__21041_21233;
var G__21276 = count__21042_21234;
var G__21277 = (i__21043_21235 + (1));
seq__21037_21232 = G__21274;
chunk__21041_21233 = G__21275;
count__21042_21234 = G__21276;
i__21043_21235 = G__21277;
continue;
}
} else {
var G__21278 = seq__21037_21232;
var G__21279 = chunk__21041_21233;
var G__21280 = count__21042_21234;
var G__21281 = (i__21043_21235 + (1));
seq__21037_21232 = G__21278;
chunk__21041_21233 = G__21279;
count__21042_21234 = G__21280;
i__21043_21235 = G__21281;
continue;
}
} else {
var temp__5804__auto___21282 = cljs.core.seq(seq__21037_21232);
if(temp__5804__auto___21282){
var seq__21037_21283__$1 = temp__5804__auto___21282;
if(cljs.core.chunked_seq_QMARK_(seq__21037_21283__$1)){
var c__5568__auto___21284 = cljs.core.chunk_first(seq__21037_21283__$1);
var G__21285 = cljs.core.chunk_rest(seq__21037_21283__$1);
var G__21286 = c__5568__auto___21284;
var G__21287 = cljs.core.count(c__5568__auto___21284);
var G__21288 = (0);
seq__21037_21232 = G__21285;
chunk__21041_21233 = G__21286;
count__21042_21234 = G__21287;
i__21043_21235 = G__21288;
continue;
} else {
var node_21289 = cljs.core.first(seq__21037_21283__$1);
if(cljs.core.not(node_21289.shadow$old)){
var path_match_21290 = shadow.cljs.devtools.client.browser.match_paths(node_21289.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21290)){
var new_link_21291 = (function (){var G__21080 = node_21289.cloneNode(true);
G__21080.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21290),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21080;
})();
(node_21289.shadow$old = true);

(new_link_21291.onload = ((function (seq__21037_21232,chunk__21041_21233,count__21042_21234,i__21043_21235,seq__20923,chunk__20925,count__20926,i__20927,new_link_21291,path_match_21290,node_21289,seq__21037_21283__$1,temp__5804__auto___21282,path,map__20922,map__20922__$1,msg,updates,reload_info){
return (function (e){
var seq__21081_21292 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21083_21293 = null;
var count__21084_21294 = (0);
var i__21085_21295 = (0);
while(true){
if((i__21085_21295 < count__21084_21294)){
var map__21089_21296 = chunk__21083_21293.cljs$core$IIndexed$_nth$arity$2(null,i__21085_21295);
var map__21089_21297__$1 = cljs.core.__destructure_map(map__21089_21296);
var task_21298 = map__21089_21297__$1;
var fn_str_21299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21297__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21297__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21301 = goog.getObjectByName(fn_str_21299,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21300)].join(''));

(fn_obj_21301.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21301.cljs$core$IFn$_invoke$arity$2(path,new_link_21291) : fn_obj_21301.call(null,path,new_link_21291));


var G__21302 = seq__21081_21292;
var G__21303 = chunk__21083_21293;
var G__21304 = count__21084_21294;
var G__21305 = (i__21085_21295 + (1));
seq__21081_21292 = G__21302;
chunk__21083_21293 = G__21303;
count__21084_21294 = G__21304;
i__21085_21295 = G__21305;
continue;
} else {
var temp__5804__auto___21306__$1 = cljs.core.seq(seq__21081_21292);
if(temp__5804__auto___21306__$1){
var seq__21081_21307__$1 = temp__5804__auto___21306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21081_21307__$1)){
var c__5568__auto___21308 = cljs.core.chunk_first(seq__21081_21307__$1);
var G__21309 = cljs.core.chunk_rest(seq__21081_21307__$1);
var G__21310 = c__5568__auto___21308;
var G__21311 = cljs.core.count(c__5568__auto___21308);
var G__21312 = (0);
seq__21081_21292 = G__21309;
chunk__21083_21293 = G__21310;
count__21084_21294 = G__21311;
i__21085_21295 = G__21312;
continue;
} else {
var map__21090_21313 = cljs.core.first(seq__21081_21307__$1);
var map__21090_21314__$1 = cljs.core.__destructure_map(map__21090_21313);
var task_21315 = map__21090_21314__$1;
var fn_str_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21314__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21314__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21318 = goog.getObjectByName(fn_str_21316,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21317)].join(''));

(fn_obj_21318.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21318.cljs$core$IFn$_invoke$arity$2(path,new_link_21291) : fn_obj_21318.call(null,path,new_link_21291));


var G__21319 = cljs.core.next(seq__21081_21307__$1);
var G__21320 = null;
var G__21321 = (0);
var G__21322 = (0);
seq__21081_21292 = G__21319;
chunk__21083_21293 = G__21320;
count__21084_21294 = G__21321;
i__21085_21295 = G__21322;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21289);
});})(seq__21037_21232,chunk__21041_21233,count__21042_21234,i__21043_21235,seq__20923,chunk__20925,count__20926,i__20927,new_link_21291,path_match_21290,node_21289,seq__21037_21283__$1,temp__5804__auto___21282,path,map__20922,map__20922__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21290], 0));

goog.dom.insertSiblingAfter(new_link_21291,node_21289);


var G__21323 = cljs.core.next(seq__21037_21283__$1);
var G__21324 = null;
var G__21325 = (0);
var G__21326 = (0);
seq__21037_21232 = G__21323;
chunk__21041_21233 = G__21324;
count__21042_21234 = G__21325;
i__21043_21235 = G__21326;
continue;
} else {
var G__21327 = cljs.core.next(seq__21037_21283__$1);
var G__21328 = null;
var G__21329 = (0);
var G__21330 = (0);
seq__21037_21232 = G__21327;
chunk__21041_21233 = G__21328;
count__21042_21234 = G__21329;
i__21043_21235 = G__21330;
continue;
}
} else {
var G__21331 = cljs.core.next(seq__21037_21283__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__21037_21232 = G__21331;
chunk__21041_21233 = G__21332;
count__21042_21234 = G__21333;
i__21043_21235 = G__21334;
continue;
}
}
} else {
}
}
break;
}


var G__21335 = seq__20923;
var G__21336 = chunk__20925;
var G__21337 = count__20926;
var G__21338 = (i__20927 + (1));
seq__20923 = G__21335;
chunk__20925 = G__21336;
count__20926 = G__21337;
i__20927 = G__21338;
continue;
} else {
var G__21339 = seq__20923;
var G__21340 = chunk__20925;
var G__21341 = count__20926;
var G__21342 = (i__20927 + (1));
seq__20923 = G__21339;
chunk__20925 = G__21340;
count__20926 = G__21341;
i__20927 = G__21342;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20923);
if(temp__5804__auto__){
var seq__20923__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20923__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20923__$1);
var G__21343 = cljs.core.chunk_rest(seq__20923__$1);
var G__21344 = c__5568__auto__;
var G__21345 = cljs.core.count(c__5568__auto__);
var G__21346 = (0);
seq__20923 = G__21343;
chunk__20925 = G__21344;
count__20926 = G__21345;
i__20927 = G__21346;
continue;
} else {
var path = cljs.core.first(seq__20923__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21091_21347 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21095_21348 = null;
var count__21096_21349 = (0);
var i__21097_21350 = (0);
while(true){
if((i__21097_21350 < count__21096_21349)){
var node_21351 = chunk__21095_21348.cljs$core$IIndexed$_nth$arity$2(null,i__21097_21350);
if(cljs.core.not(node_21351.shadow$old)){
var path_match_21352 = shadow.cljs.devtools.client.browser.match_paths(node_21351.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21352)){
var new_link_21353 = (function (){var G__21123 = node_21351.cloneNode(true);
G__21123.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21352),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21123;
})();
(node_21351.shadow$old = true);

(new_link_21353.onload = ((function (seq__21091_21347,chunk__21095_21348,count__21096_21349,i__21097_21350,seq__20923,chunk__20925,count__20926,i__20927,new_link_21353,path_match_21352,node_21351,path,seq__20923__$1,temp__5804__auto__,map__20922,map__20922__$1,msg,updates,reload_info){
return (function (e){
var seq__21124_21354 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21126_21355 = null;
var count__21127_21356 = (0);
var i__21128_21357 = (0);
while(true){
if((i__21128_21357 < count__21127_21356)){
var map__21132_21358 = chunk__21126_21355.cljs$core$IIndexed$_nth$arity$2(null,i__21128_21357);
var map__21132_21359__$1 = cljs.core.__destructure_map(map__21132_21358);
var task_21360 = map__21132_21359__$1;
var fn_str_21361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21132_21359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21132_21359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21363 = goog.getObjectByName(fn_str_21361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21362)].join(''));

(fn_obj_21363.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21363.cljs$core$IFn$_invoke$arity$2(path,new_link_21353) : fn_obj_21363.call(null,path,new_link_21353));


var G__21364 = seq__21124_21354;
var G__21365 = chunk__21126_21355;
var G__21366 = count__21127_21356;
var G__21367 = (i__21128_21357 + (1));
seq__21124_21354 = G__21364;
chunk__21126_21355 = G__21365;
count__21127_21356 = G__21366;
i__21128_21357 = G__21367;
continue;
} else {
var temp__5804__auto___21368__$1 = cljs.core.seq(seq__21124_21354);
if(temp__5804__auto___21368__$1){
var seq__21124_21369__$1 = temp__5804__auto___21368__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21124_21369__$1)){
var c__5568__auto___21370 = cljs.core.chunk_first(seq__21124_21369__$1);
var G__21371 = cljs.core.chunk_rest(seq__21124_21369__$1);
var G__21372 = c__5568__auto___21370;
var G__21373 = cljs.core.count(c__5568__auto___21370);
var G__21374 = (0);
seq__21124_21354 = G__21371;
chunk__21126_21355 = G__21372;
count__21127_21356 = G__21373;
i__21128_21357 = G__21374;
continue;
} else {
var map__21133_21375 = cljs.core.first(seq__21124_21369__$1);
var map__21133_21376__$1 = cljs.core.__destructure_map(map__21133_21375);
var task_21377 = map__21133_21376__$1;
var fn_str_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133_21376__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133_21376__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21380 = goog.getObjectByName(fn_str_21378,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21379)].join(''));

(fn_obj_21380.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21380.cljs$core$IFn$_invoke$arity$2(path,new_link_21353) : fn_obj_21380.call(null,path,new_link_21353));


var G__21381 = cljs.core.next(seq__21124_21369__$1);
var G__21382 = null;
var G__21383 = (0);
var G__21384 = (0);
seq__21124_21354 = G__21381;
chunk__21126_21355 = G__21382;
count__21127_21356 = G__21383;
i__21128_21357 = G__21384;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21351);
});})(seq__21091_21347,chunk__21095_21348,count__21096_21349,i__21097_21350,seq__20923,chunk__20925,count__20926,i__20927,new_link_21353,path_match_21352,node_21351,path,seq__20923__$1,temp__5804__auto__,map__20922,map__20922__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21352], 0));

goog.dom.insertSiblingAfter(new_link_21353,node_21351);


var G__21385 = seq__21091_21347;
var G__21386 = chunk__21095_21348;
var G__21387 = count__21096_21349;
var G__21388 = (i__21097_21350 + (1));
seq__21091_21347 = G__21385;
chunk__21095_21348 = G__21386;
count__21096_21349 = G__21387;
i__21097_21350 = G__21388;
continue;
} else {
var G__21389 = seq__21091_21347;
var G__21390 = chunk__21095_21348;
var G__21391 = count__21096_21349;
var G__21392 = (i__21097_21350 + (1));
seq__21091_21347 = G__21389;
chunk__21095_21348 = G__21390;
count__21096_21349 = G__21391;
i__21097_21350 = G__21392;
continue;
}
} else {
var G__21393 = seq__21091_21347;
var G__21394 = chunk__21095_21348;
var G__21395 = count__21096_21349;
var G__21396 = (i__21097_21350 + (1));
seq__21091_21347 = G__21393;
chunk__21095_21348 = G__21394;
count__21096_21349 = G__21395;
i__21097_21350 = G__21396;
continue;
}
} else {
var temp__5804__auto___21397__$1 = cljs.core.seq(seq__21091_21347);
if(temp__5804__auto___21397__$1){
var seq__21091_21398__$1 = temp__5804__auto___21397__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21091_21398__$1)){
var c__5568__auto___21399 = cljs.core.chunk_first(seq__21091_21398__$1);
var G__21400 = cljs.core.chunk_rest(seq__21091_21398__$1);
var G__21401 = c__5568__auto___21399;
var G__21402 = cljs.core.count(c__5568__auto___21399);
var G__21403 = (0);
seq__21091_21347 = G__21400;
chunk__21095_21348 = G__21401;
count__21096_21349 = G__21402;
i__21097_21350 = G__21403;
continue;
} else {
var node_21404 = cljs.core.first(seq__21091_21398__$1);
if(cljs.core.not(node_21404.shadow$old)){
var path_match_21405 = shadow.cljs.devtools.client.browser.match_paths(node_21404.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21405)){
var new_link_21406 = (function (){var G__21134 = node_21404.cloneNode(true);
G__21134.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21405),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21134;
})();
(node_21404.shadow$old = true);

(new_link_21406.onload = ((function (seq__21091_21347,chunk__21095_21348,count__21096_21349,i__21097_21350,seq__20923,chunk__20925,count__20926,i__20927,new_link_21406,path_match_21405,node_21404,seq__21091_21398__$1,temp__5804__auto___21397__$1,path,seq__20923__$1,temp__5804__auto__,map__20922,map__20922__$1,msg,updates,reload_info){
return (function (e){
var seq__21135_21407 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21137_21408 = null;
var count__21138_21409 = (0);
var i__21139_21410 = (0);
while(true){
if((i__21139_21410 < count__21138_21409)){
var map__21143_21411 = chunk__21137_21408.cljs$core$IIndexed$_nth$arity$2(null,i__21139_21410);
var map__21143_21412__$1 = cljs.core.__destructure_map(map__21143_21411);
var task_21413 = map__21143_21412__$1;
var fn_str_21414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21412__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143_21412__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21416 = goog.getObjectByName(fn_str_21414,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21415)].join(''));

(fn_obj_21416.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21416.cljs$core$IFn$_invoke$arity$2(path,new_link_21406) : fn_obj_21416.call(null,path,new_link_21406));


var G__21417 = seq__21135_21407;
var G__21418 = chunk__21137_21408;
var G__21419 = count__21138_21409;
var G__21420 = (i__21139_21410 + (1));
seq__21135_21407 = G__21417;
chunk__21137_21408 = G__21418;
count__21138_21409 = G__21419;
i__21139_21410 = G__21420;
continue;
} else {
var temp__5804__auto___21421__$2 = cljs.core.seq(seq__21135_21407);
if(temp__5804__auto___21421__$2){
var seq__21135_21422__$1 = temp__5804__auto___21421__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21135_21422__$1)){
var c__5568__auto___21423 = cljs.core.chunk_first(seq__21135_21422__$1);
var G__21424 = cljs.core.chunk_rest(seq__21135_21422__$1);
var G__21425 = c__5568__auto___21423;
var G__21426 = cljs.core.count(c__5568__auto___21423);
var G__21427 = (0);
seq__21135_21407 = G__21424;
chunk__21137_21408 = G__21425;
count__21138_21409 = G__21426;
i__21139_21410 = G__21427;
continue;
} else {
var map__21144_21428 = cljs.core.first(seq__21135_21422__$1);
var map__21144_21429__$1 = cljs.core.__destructure_map(map__21144_21428);
var task_21430 = map__21144_21429__$1;
var fn_str_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21429__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21429__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21433 = goog.getObjectByName(fn_str_21431,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21432)].join(''));

(fn_obj_21433.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21433.cljs$core$IFn$_invoke$arity$2(path,new_link_21406) : fn_obj_21433.call(null,path,new_link_21406));


var G__21434 = cljs.core.next(seq__21135_21422__$1);
var G__21435 = null;
var G__21436 = (0);
var G__21437 = (0);
seq__21135_21407 = G__21434;
chunk__21137_21408 = G__21435;
count__21138_21409 = G__21436;
i__21139_21410 = G__21437;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21404);
});})(seq__21091_21347,chunk__21095_21348,count__21096_21349,i__21097_21350,seq__20923,chunk__20925,count__20926,i__20927,new_link_21406,path_match_21405,node_21404,seq__21091_21398__$1,temp__5804__auto___21397__$1,path,seq__20923__$1,temp__5804__auto__,map__20922,map__20922__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21405], 0));

goog.dom.insertSiblingAfter(new_link_21406,node_21404);


var G__21438 = cljs.core.next(seq__21091_21398__$1);
var G__21439 = null;
var G__21440 = (0);
var G__21441 = (0);
seq__21091_21347 = G__21438;
chunk__21095_21348 = G__21439;
count__21096_21349 = G__21440;
i__21097_21350 = G__21441;
continue;
} else {
var G__21442 = cljs.core.next(seq__21091_21398__$1);
var G__21443 = null;
var G__21444 = (0);
var G__21445 = (0);
seq__21091_21347 = G__21442;
chunk__21095_21348 = G__21443;
count__21096_21349 = G__21444;
i__21097_21350 = G__21445;
continue;
}
} else {
var G__21446 = cljs.core.next(seq__21091_21398__$1);
var G__21447 = null;
var G__21448 = (0);
var G__21449 = (0);
seq__21091_21347 = G__21446;
chunk__21095_21348 = G__21447;
count__21096_21349 = G__21448;
i__21097_21350 = G__21449;
continue;
}
}
} else {
}
}
break;
}


var G__21450 = cljs.core.next(seq__20923__$1);
var G__21451 = null;
var G__21452 = (0);
var G__21453 = (0);
seq__20923 = G__21450;
chunk__20925 = G__21451;
count__20926 = G__21452;
i__20927 = G__21453;
continue;
} else {
var G__21454 = cljs.core.next(seq__20923__$1);
var G__21455 = null;
var G__21456 = (0);
var G__21457 = (0);
seq__20923 = G__21454;
chunk__20925 = G__21455;
count__20926 = G__21456;
i__20927 = G__21457;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21145){
var map__21146 = p__21145;
var map__21146__$1 = cljs.core.__destructure_map(map__21146);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21146__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21147){
var map__21148 = p__21147;
var map__21148__$1 = cljs.core.__destructure_map(map__21148);
var _ = map__21148__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21149,done,error){
var map__21150 = p__21149;
var map__21150__$1 = cljs.core.__destructure_map(map__21150);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21150__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21151,done,error){
var map__21152 = p__21151;
var map__21152__$1 = cljs.core.__destructure_map(map__21152);
var msg = map__21152__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21153){
var map__21154 = p__21153;
var map__21154__$1 = cljs.core.__destructure_map(map__21154);
var src = map__21154__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21155 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21155) : done.call(null,G__21155));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21156){
var map__21157 = p__21156;
var map__21157__$1 = cljs.core.__destructure_map(map__21157);
var msg__$1 = map__21157__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21158){var ex = e21158;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21159){
var map__21160 = p__21159;
var map__21160__$1 = cljs.core.__destructure_map(map__21160);
var env = map__21160__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21161){
var map__21162 = p__21161;
var map__21162__$1 = cljs.core.__destructure_map(map__21162);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21163){
var map__21164 = p__21163;
var map__21164__$1 = cljs.core.__destructure_map(map__21164);
var svc = map__21164__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
