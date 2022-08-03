goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18934,res){
var map__18935 = p__18934;
var map__18935__$1 = cljs.core.__destructure_map(map__18935);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18935__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18935__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18936 = res;
var G__18936__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18936);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18936__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18938 = arguments.length;
switch (G__18938) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18939,msg,handlers,timeout_after_ms){
var map__18940 = p__18939;
var map__18940__$1 = cljs.core.__destructure_map(map__18940);
var runtime = map__18940__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18940__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19040 = arguments.length;
var i__5770__auto___19041 = (0);
while(true){
if((i__5770__auto___19041 < len__5769__auto___19040)){
args__5775__auto__.push((arguments[i__5770__auto___19041]));

var G__19043 = (i__5770__auto___19041 + (1));
i__5770__auto___19041 = G__19043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18947,ev,args){
var map__18949 = p__18947;
var map__18949__$1 = cljs.core.__destructure_map(map__18949);
var runtime = map__18949__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18949__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18950 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18953 = null;
var count__18954 = (0);
var i__18955 = (0);
while(true){
if((i__18955 < count__18954)){
var ext = chunk__18953.cljs$core$IIndexed$_nth$arity$2(null,i__18955);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19050 = seq__18950;
var G__19051 = chunk__18953;
var G__19052 = count__18954;
var G__19053 = (i__18955 + (1));
seq__18950 = G__19050;
chunk__18953 = G__19051;
count__18954 = G__19052;
i__18955 = G__19053;
continue;
} else {
var G__19057 = seq__18950;
var G__19058 = chunk__18953;
var G__19059 = count__18954;
var G__19060 = (i__18955 + (1));
seq__18950 = G__19057;
chunk__18953 = G__19058;
count__18954 = G__19059;
i__18955 = G__19060;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18950);
if(temp__5804__auto__){
var seq__18950__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18950__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18950__$1);
var G__19061 = cljs.core.chunk_rest(seq__18950__$1);
var G__19062 = c__5568__auto__;
var G__19063 = cljs.core.count(c__5568__auto__);
var G__19064 = (0);
seq__18950 = G__19061;
chunk__18953 = G__19062;
count__18954 = G__19063;
i__18955 = G__19064;
continue;
} else {
var ext = cljs.core.first(seq__18950__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19066 = cljs.core.next(seq__18950__$1);
var G__19067 = null;
var G__19068 = (0);
var G__19069 = (0);
seq__18950 = G__19066;
chunk__18953 = G__19067;
count__18954 = G__19068;
i__18955 = G__19069;
continue;
} else {
var G__19070 = cljs.core.next(seq__18950__$1);
var G__19071 = null;
var G__19072 = (0);
var G__19073 = (0);
seq__18950 = G__19070;
chunk__18953 = G__19071;
count__18954 = G__19072;
i__18955 = G__19073;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18944){
var G__18945 = cljs.core.first(seq18944);
var seq18944__$1 = cljs.core.next(seq18944);
var G__18946 = cljs.core.first(seq18944__$1);
var seq18944__$2 = cljs.core.next(seq18944__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18945,G__18946,seq18944__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18961,p__18962){
var map__18963 = p__18961;
var map__18963__$1 = cljs.core.__destructure_map(map__18963);
var runtime = map__18963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18964 = p__18962;
var map__18964__$1 = cljs.core.__destructure_map(map__18964);
var msg = map__18964__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18964__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__18966 = cljs.core.deref(state_ref);
var map__18966__$1 = cljs.core.__destructure_map(map__18966);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18966__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18966__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18971){
var map__18972 = p__18971;
var map__18972__$1 = cljs.core.__destructure_map(map__18972);
var runtime = map__18972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18973,msg){
var map__18974 = p__18973;
var map__18974__$1 = cljs.core.__destructure_map(map__18974);
var runtime = map__18974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18977,key,p__18978){
var map__18979 = p__18977;
var map__18979__$1 = cljs.core.__destructure_map(map__18979);
var state = map__18979__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18979__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18980 = p__18978;
var map__18980__$1 = cljs.core.__destructure_map(map__18980);
var spec = map__18980__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18980__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18982,key,spec){
var map__18983 = p__18982;
var map__18983__$1 = cljs.core.__destructure_map(map__18983);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18984_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18984_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18985_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18985_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18986_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18986_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18987_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18987_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18988_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18988_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18993,key){
var map__18994 = p__18993;
var map__18994__$1 = cljs.core.__destructure_map(map__18994);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18994__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18995,msg){
var map__18996 = p__18995;
var map__18996__$1 = cljs.core.__destructure_map(map__18996);
var runtime = map__18996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18997,p__18998){
var map__18999 = p__18997;
var map__18999__$1 = cljs.core.__destructure_map(map__18999);
var runtime = map__18999__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19000 = p__18998;
var map__19000__$1 = cljs.core.__destructure_map(map__19000);
var msg = map__19000__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19001 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19003 = null;
var count__19004 = (0);
var i__19005 = (0);
while(true){
if((i__19005 < count__19004)){
var map__19017 = chunk__19003.cljs$core$IIndexed$_nth$arity$2(null,i__19005);
var map__19017__$1 = cljs.core.__destructure_map(map__19017);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19085 = seq__19001;
var G__19086 = chunk__19003;
var G__19087 = count__19004;
var G__19088 = (i__19005 + (1));
seq__19001 = G__19085;
chunk__19003 = G__19086;
count__19004 = G__19087;
i__19005 = G__19088;
continue;
} else {
var G__19089 = seq__19001;
var G__19090 = chunk__19003;
var G__19091 = count__19004;
var G__19092 = (i__19005 + (1));
seq__19001 = G__19089;
chunk__19003 = G__19090;
count__19004 = G__19091;
i__19005 = G__19092;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19001);
if(temp__5804__auto__){
var seq__19001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19001__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19001__$1);
var G__19093 = cljs.core.chunk_rest(seq__19001__$1);
var G__19094 = c__5568__auto__;
var G__19095 = cljs.core.count(c__5568__auto__);
var G__19096 = (0);
seq__19001 = G__19093;
chunk__19003 = G__19094;
count__19004 = G__19095;
i__19005 = G__19096;
continue;
} else {
var map__19018 = cljs.core.first(seq__19001__$1);
var map__19018__$1 = cljs.core.__destructure_map(map__19018);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19098 = cljs.core.next(seq__19001__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__19001 = G__19098;
chunk__19003 = G__19099;
count__19004 = G__19100;
i__19005 = G__19101;
continue;
} else {
var G__19103 = cljs.core.next(seq__19001__$1);
var G__19104 = null;
var G__19105 = (0);
var G__19106 = (0);
seq__19001 = G__19103;
chunk__19003 = G__19104;
count__19004 = G__19105;
i__19005 = G__19106;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
