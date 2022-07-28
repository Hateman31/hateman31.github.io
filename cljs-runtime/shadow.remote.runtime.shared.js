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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16150,res){
var map__16151 = p__16150;
var map__16151__$1 = cljs.core.__destructure_map(map__16151);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16151__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16151__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16156 = res;
var G__16156__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16156,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16156);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16156__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16156__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16169 = arguments.length;
switch (G__16169) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16170,msg,handlers,timeout_after_ms){
var map__16171 = p__16170;
var map__16171__$1 = cljs.core.__destructure_map(map__16171);
var runtime = map__16171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16520 = arguments.length;
var i__5770__auto___16521 = (0);
while(true){
if((i__5770__auto___16521 < len__5769__auto___16520)){
args__5775__auto__.push((arguments[i__5770__auto___16521]));

var G__16522 = (i__5770__auto___16521 + (1));
i__5770__auto___16521 = G__16522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16192,ev,args){
var map__16193 = p__16192;
var map__16193__$1 = cljs.core.__destructure_map(map__16193);
var runtime = map__16193__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16193__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16195 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16198 = null;
var count__16199 = (0);
var i__16200 = (0);
while(true){
if((i__16200 < count__16199)){
var ext = chunk__16198.cljs$core$IIndexed$_nth$arity$2(null,i__16200);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16528 = seq__16195;
var G__16529 = chunk__16198;
var G__16530 = count__16199;
var G__16531 = (i__16200 + (1));
seq__16195 = G__16528;
chunk__16198 = G__16529;
count__16199 = G__16530;
i__16200 = G__16531;
continue;
} else {
var G__16533 = seq__16195;
var G__16534 = chunk__16198;
var G__16535 = count__16199;
var G__16536 = (i__16200 + (1));
seq__16195 = G__16533;
chunk__16198 = G__16534;
count__16199 = G__16535;
i__16200 = G__16536;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16195);
if(temp__5804__auto__){
var seq__16195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16195__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16195__$1);
var G__16538 = cljs.core.chunk_rest(seq__16195__$1);
var G__16539 = c__5568__auto__;
var G__16540 = cljs.core.count(c__5568__auto__);
var G__16541 = (0);
seq__16195 = G__16538;
chunk__16198 = G__16539;
count__16199 = G__16540;
i__16200 = G__16541;
continue;
} else {
var ext = cljs.core.first(seq__16195__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16547 = cljs.core.next(seq__16195__$1);
var G__16548 = null;
var G__16549 = (0);
var G__16550 = (0);
seq__16195 = G__16547;
chunk__16198 = G__16548;
count__16199 = G__16549;
i__16200 = G__16550;
continue;
} else {
var G__16551 = cljs.core.next(seq__16195__$1);
var G__16552 = null;
var G__16553 = (0);
var G__16554 = (0);
seq__16195 = G__16551;
chunk__16198 = G__16552;
count__16199 = G__16553;
i__16200 = G__16554;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16173){
var G__16174 = cljs.core.first(seq16173);
var seq16173__$1 = cljs.core.next(seq16173);
var G__16177 = cljs.core.first(seq16173__$1);
var seq16173__$2 = cljs.core.next(seq16173__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16174,G__16177,seq16173__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16246,p__16247){
var map__16248 = p__16246;
var map__16248__$1 = cljs.core.__destructure_map(map__16248);
var runtime = map__16248__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16248__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16249 = p__16247;
var map__16249__$1 = cljs.core.__destructure_map(map__16249);
var msg = map__16249__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16249__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16253 = cljs.core.deref(state_ref);
var map__16253__$1 = cljs.core.__destructure_map(map__16253);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16253__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16253__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16264){
var map__16265 = p__16264;
var map__16265__$1 = cljs.core.__destructure_map(map__16265);
var runtime = map__16265__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16268,msg){
var map__16272 = p__16268;
var map__16272__$1 = cljs.core.__destructure_map(map__16272);
var runtime = map__16272__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16297,key,p__16298){
var map__16300 = p__16297;
var map__16300__$1 = cljs.core.__destructure_map(map__16300);
var state = map__16300__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16300__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16301 = p__16298;
var map__16301__$1 = cljs.core.__destructure_map(map__16301);
var spec = map__16301__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16301__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16311,key,spec){
var map__16312 = p__16311;
var map__16312__$1 = cljs.core.__destructure_map(map__16312);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16315_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16315_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16317_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16317_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16318_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16318_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16320_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16320_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16321_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16321_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16345,key){
var map__16351 = p__16345;
var map__16351__$1 = cljs.core.__destructure_map(map__16351);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16376,msg){
var map__16382 = p__16376;
var map__16382__$1 = cljs.core.__destructure_map(map__16382);
var runtime = map__16382__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16427,p__16428){
var map__16430 = p__16427;
var map__16430__$1 = cljs.core.__destructure_map(map__16430);
var runtime = map__16430__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16430__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16432 = p__16428;
var map__16432__$1 = cljs.core.__destructure_map(map__16432);
var msg = map__16432__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__16440 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16442 = null;
var count__16443 = (0);
var i__16444 = (0);
while(true){
if((i__16444 < count__16443)){
var map__16467 = chunk__16442.cljs$core$IIndexed$_nth$arity$2(null,i__16444);
var map__16467__$1 = cljs.core.__destructure_map(map__16467);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16467__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16617 = seq__16440;
var G__16618 = chunk__16442;
var G__16619 = count__16443;
var G__16620 = (i__16444 + (1));
seq__16440 = G__16617;
chunk__16442 = G__16618;
count__16443 = G__16619;
i__16444 = G__16620;
continue;
} else {
var G__16621 = seq__16440;
var G__16622 = chunk__16442;
var G__16623 = count__16443;
var G__16624 = (i__16444 + (1));
seq__16440 = G__16621;
chunk__16442 = G__16622;
count__16443 = G__16623;
i__16444 = G__16624;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16440);
if(temp__5804__auto__){
var seq__16440__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16440__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16440__$1);
var G__16628 = cljs.core.chunk_rest(seq__16440__$1);
var G__16629 = c__5568__auto__;
var G__16630 = cljs.core.count(c__5568__auto__);
var G__16631 = (0);
seq__16440 = G__16628;
chunk__16442 = G__16629;
count__16443 = G__16630;
i__16444 = G__16631;
continue;
} else {
var map__16483 = cljs.core.first(seq__16440__$1);
var map__16483__$1 = cljs.core.__destructure_map(map__16483);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16483__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16633 = cljs.core.next(seq__16440__$1);
var G__16634 = null;
var G__16635 = (0);
var G__16636 = (0);
seq__16440 = G__16633;
chunk__16442 = G__16634;
count__16443 = G__16635;
i__16444 = G__16636;
continue;
} else {
var G__16637 = cljs.core.next(seq__16440__$1);
var G__16638 = null;
var G__16639 = (0);
var G__16640 = (0);
seq__16440 = G__16637;
chunk__16442 = G__16638;
count__16443 = G__16639;
i__16444 = G__16640;
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
