// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24903 = arguments.length;
switch (G__24903) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24904 = (function (f,blockable,meta24905){
this.f = f;
this.blockable = blockable;
this.meta24905 = meta24905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24906,meta24905__$1){
var self__ = this;
var _24906__$1 = this;
return (new cljs.core.async.t_cljs$core$async24904(self__.f,self__.blockable,meta24905__$1));
});

cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24906){
var self__ = this;
var _24906__$1 = this;
return self__.meta24905;
});

cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24905","meta24905",-930006838,null)], null);
});

cljs.core.async.t_cljs$core$async24904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24904";

cljs.core.async.t_cljs$core$async24904.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24904");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24904.
 */
cljs.core.async.__GT_t_cljs$core$async24904 = (function cljs$core$async$__GT_t_cljs$core$async24904(f__$1,blockable__$1,meta24905){
return (new cljs.core.async.t_cljs$core$async24904(f__$1,blockable__$1,meta24905));
});

}

return (new cljs.core.async.t_cljs$core$async24904(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24910 = arguments.length;
switch (G__24910) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24913 = arguments.length;
switch (G__24913) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24916 = arguments.length;
switch (G__24916) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24918 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24918);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24918,ret){
return (function (){
return fn1.call(null,val_24918);
});})(val_24918,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24920 = arguments.length;
switch (G__24920) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24922 = n;
var x_24923 = (0);
while(true){
if((x_24923 < n__4607__auto___24922)){
(a[x_24923] = x_24923);

var G__24924 = (x_24923 + (1));
x_24923 = G__24924;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24925 = (function (flag,meta24926){
this.flag = flag;
this.meta24926 = meta24926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24927,meta24926__$1){
var self__ = this;
var _24927__$1 = this;
return (new cljs.core.async.t_cljs$core$async24925(self__.flag,meta24926__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24927){
var self__ = this;
var _24927__$1 = this;
return self__.meta24926;
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24926","meta24926",-1905011787,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24925";

cljs.core.async.t_cljs$core$async24925.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24925");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24925.
 */
cljs.core.async.__GT_t_cljs$core$async24925 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24925(flag__$1,meta24926){
return (new cljs.core.async.t_cljs$core$async24925(flag__$1,meta24926));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24925(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24928 = (function (flag,cb,meta24929){
this.flag = flag;
this.cb = cb;
this.meta24929 = meta24929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24930,meta24929__$1){
var self__ = this;
var _24930__$1 = this;
return (new cljs.core.async.t_cljs$core$async24928(self__.flag,self__.cb,meta24929__$1));
});

cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24930){
var self__ = this;
var _24930__$1 = this;
return self__.meta24929;
});

cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24929","meta24929",-1025847724,null)], null);
});

cljs.core.async.t_cljs$core$async24928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24928";

cljs.core.async.t_cljs$core$async24928.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24928");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24928.
 */
cljs.core.async.__GT_t_cljs$core$async24928 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24928(flag__$1,cb__$1,meta24929){
return (new cljs.core.async.t_cljs$core$async24928(flag__$1,cb__$1,meta24929));
});

}

return (new cljs.core.async.t_cljs$core$async24928(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24931_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24931_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24932_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24932_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24933 = (i + (1));
i = G__24933;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24939 = arguments.length;
var i__4731__auto___24940 = (0);
while(true){
if((i__4731__auto___24940 < len__4730__auto___24939)){
args__4736__auto__.push((arguments[i__4731__auto___24940]));

var G__24941 = (i__4731__auto___24940 + (1));
i__4731__auto___24940 = G__24941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24936){
var map__24937 = p__24936;
var map__24937__$1 = (((((!((map__24937 == null))))?(((((map__24937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24937):map__24937);
var opts = map__24937__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24934){
var G__24935 = cljs.core.first.call(null,seq24934);
var seq24934__$1 = cljs.core.next.call(null,seq24934);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24935,seq24934__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24943 = arguments.length;
switch (G__24943) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24843__auto___24989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___24989){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___24989){
return (function (state_24967){
var state_val_24968 = (state_24967[(1)]);
if((state_val_24968 === (7))){
var inst_24963 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24969_24990 = state_24967__$1;
(statearr_24969_24990[(2)] = inst_24963);

(statearr_24969_24990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (1))){
var state_24967__$1 = state_24967;
var statearr_24970_24991 = state_24967__$1;
(statearr_24970_24991[(2)] = null);

(statearr_24970_24991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (4))){
var inst_24946 = (state_24967[(7)]);
var inst_24946__$1 = (state_24967[(2)]);
var inst_24947 = (inst_24946__$1 == null);
var state_24967__$1 = (function (){var statearr_24971 = state_24967;
(statearr_24971[(7)] = inst_24946__$1);

return statearr_24971;
})();
if(cljs.core.truth_(inst_24947)){
var statearr_24972_24992 = state_24967__$1;
(statearr_24972_24992[(1)] = (5));

} else {
var statearr_24973_24993 = state_24967__$1;
(statearr_24973_24993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (13))){
var state_24967__$1 = state_24967;
var statearr_24974_24994 = state_24967__$1;
(statearr_24974_24994[(2)] = null);

(statearr_24974_24994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (6))){
var inst_24946 = (state_24967[(7)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24967__$1,(11),to,inst_24946);
} else {
if((state_val_24968 === (3))){
var inst_24965 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24967__$1,inst_24965);
} else {
if((state_val_24968 === (12))){
var state_24967__$1 = state_24967;
var statearr_24975_24995 = state_24967__$1;
(statearr_24975_24995[(2)] = null);

(statearr_24975_24995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (2))){
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24967__$1,(4),from);
} else {
if((state_val_24968 === (11))){
var inst_24956 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
if(cljs.core.truth_(inst_24956)){
var statearr_24976_24996 = state_24967__$1;
(statearr_24976_24996[(1)] = (12));

} else {
var statearr_24977_24997 = state_24967__$1;
(statearr_24977_24997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (9))){
var state_24967__$1 = state_24967;
var statearr_24978_24998 = state_24967__$1;
(statearr_24978_24998[(2)] = null);

(statearr_24978_24998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (5))){
var state_24967__$1 = state_24967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24979_24999 = state_24967__$1;
(statearr_24979_24999[(1)] = (8));

} else {
var statearr_24980_25000 = state_24967__$1;
(statearr_24980_25000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (14))){
var inst_24961 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24981_25001 = state_24967__$1;
(statearr_24981_25001[(2)] = inst_24961);

(statearr_24981_25001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (10))){
var inst_24953 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24982_25002 = state_24967__$1;
(statearr_24982_25002[(2)] = inst_24953);

(statearr_24982_25002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (8))){
var inst_24950 = cljs.core.async.close_BANG_.call(null,to);
var state_24967__$1 = state_24967;
var statearr_24983_25003 = state_24967__$1;
(statearr_24983_25003[(2)] = inst_24950);

(statearr_24983_25003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___24989))
;
return ((function (switch__24748__auto__,c__24843__auto___24989){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_24984 = [null,null,null,null,null,null,null,null];
(statearr_24984[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_24984[(1)] = (1));

return statearr_24984;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_24967){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_24967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e24985){if((e24985 instanceof Object)){
var ex__24752__auto__ = e24985;
var statearr_24986_25004 = state_24967;
(statearr_24986_25004[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25005 = state_24967;
state_24967 = G__25005;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_24967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_24967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___24989))
})();
var state__24845__auto__ = (function (){var statearr_24987 = f__24844__auto__.call(null);
(statearr_24987[(6)] = c__24843__auto___24989);

return statearr_24987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___24989))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25006){
var vec__25007 = p__25006;
var v = cljs.core.nth.call(null,vec__25007,(0),null);
var p = cljs.core.nth.call(null,vec__25007,(1),null);
var job = vec__25007;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24843__auto___25178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results){
return (function (state_25014){
var state_val_25015 = (state_25014[(1)]);
if((state_val_25015 === (1))){
var state_25014__$1 = state_25014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25014__$1,(2),res,v);
} else {
if((state_val_25015 === (2))){
var inst_25011 = (state_25014[(2)]);
var inst_25012 = cljs.core.async.close_BANG_.call(null,res);
var state_25014__$1 = (function (){var statearr_25016 = state_25014;
(statearr_25016[(7)] = inst_25011);

return statearr_25016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25014__$1,inst_25012);
} else {
return null;
}
}
});})(c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results))
;
return ((function (switch__24748__auto__,c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_25017 = [null,null,null,null,null,null,null,null];
(statearr_25017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__);

(statearr_25017[(1)] = (1));

return statearr_25017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1 = (function (state_25014){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25018){if((e25018 instanceof Object)){
var ex__24752__auto__ = e25018;
var statearr_25019_25179 = state_25014;
(statearr_25019_25179[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25180 = state_25014;
state_25014 = G__25180;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = function(state_25014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1.call(this,state_25014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results))
})();
var state__24845__auto__ = (function (){var statearr_25020 = f__24844__auto__.call(null);
(statearr_25020[(6)] = c__24843__auto___25178);

return statearr_25020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___25178,res,vec__25007,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25021){
var vec__25022 = p__25021;
var v = cljs.core.nth.call(null,vec__25022,(0),null);
var p = cljs.core.nth.call(null,vec__25022,(1),null);
var job = vec__25022;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___25181 = n;
var __25182 = (0);
while(true){
if((__25182 < n__4607__auto___25181)){
var G__25025_25183 = type;
var G__25025_25184__$1 = (((G__25025_25183 instanceof cljs.core.Keyword))?G__25025_25183.fqn:null);
switch (G__25025_25184__$1) {
case "compute":
var c__24843__auto___25186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25182,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (__25182,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (1))){
var state_25038__$1 = state_25038;
var statearr_25040_25187 = state_25038__$1;
(statearr_25040_25187[(2)] = null);

(statearr_25040_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (2))){
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25038__$1,(4),jobs);
} else {
if((state_val_25039 === (3))){
var inst_25036 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (4))){
var inst_25028 = (state_25038[(2)]);
var inst_25029 = process.call(null,inst_25028);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25029)){
var statearr_25041_25188 = state_25038__$1;
(statearr_25041_25188[(1)] = (5));

} else {
var statearr_25042_25189 = state_25038__$1;
(statearr_25042_25189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (5))){
var state_25038__$1 = state_25038;
var statearr_25043_25190 = state_25038__$1;
(statearr_25043_25190[(2)] = null);

(statearr_25043_25190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (6))){
var state_25038__$1 = state_25038;
var statearr_25044_25191 = state_25038__$1;
(statearr_25044_25191[(2)] = null);

(statearr_25044_25191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (7))){
var inst_25034 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25045_25192 = state_25038__$1;
(statearr_25045_25192[(2)] = inst_25034);

(statearr_25045_25192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25182,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
;
return ((function (__25182,switch__24748__auto__,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_25046 = [null,null,null,null,null,null,null];
(statearr_25046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__);

(statearr_25046[(1)] = (1));

return statearr_25046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1 = (function (state_25038){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25047){if((e25047 instanceof Object)){
var ex__24752__auto__ = e25047;
var statearr_25048_25193 = state_25038;
(statearr_25048_25193[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25194 = state_25038;
state_25038 = G__25194;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__;
})()
;})(__25182,switch__24748__auto__,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
})();
var state__24845__auto__ = (function (){var statearr_25049 = f__24844__auto__.call(null);
(statearr_25049[(6)] = c__24843__auto___25186);

return statearr_25049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(__25182,c__24843__auto___25186,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
);


break;
case "async":
var c__24843__auto___25195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25182,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (__25182,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (1))){
var state_25062__$1 = state_25062;
var statearr_25064_25196 = state_25062__$1;
(statearr_25064_25196[(2)] = null);

(statearr_25064_25196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (2))){
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25062__$1,(4),jobs);
} else {
if((state_val_25063 === (3))){
var inst_25060 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (4))){
var inst_25052 = (state_25062[(2)]);
var inst_25053 = async.call(null,inst_25052);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25053)){
var statearr_25065_25197 = state_25062__$1;
(statearr_25065_25197[(1)] = (5));

} else {
var statearr_25066_25198 = state_25062__$1;
(statearr_25066_25198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (5))){
var state_25062__$1 = state_25062;
var statearr_25067_25199 = state_25062__$1;
(statearr_25067_25199[(2)] = null);

(statearr_25067_25199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (6))){
var state_25062__$1 = state_25062;
var statearr_25068_25200 = state_25062__$1;
(statearr_25068_25200[(2)] = null);

(statearr_25068_25200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (7))){
var inst_25058 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25069_25201 = state_25062__$1;
(statearr_25069_25201[(2)] = inst_25058);

(statearr_25069_25201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25182,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
;
return ((function (__25182,switch__24748__auto__,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_25070 = [null,null,null,null,null,null,null];
(statearr_25070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__);

(statearr_25070[(1)] = (1));

return statearr_25070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1 = (function (state_25062){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25071){if((e25071 instanceof Object)){
var ex__24752__auto__ = e25071;
var statearr_25072_25202 = state_25062;
(statearr_25072_25202[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25203 = state_25062;
state_25062 = G__25203;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__;
})()
;})(__25182,switch__24748__auto__,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
})();
var state__24845__auto__ = (function (){var statearr_25073 = f__24844__auto__.call(null);
(statearr_25073[(6)] = c__24843__auto___25195);

return statearr_25073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(__25182,c__24843__auto___25195,G__25025_25183,G__25025_25184__$1,n__4607__auto___25181,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25025_25184__$1)].join('')));

}

var G__25204 = (__25182 + (1));
__25182 = G__25204;
continue;
} else {
}
break;
}

var c__24843__auto___25205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___25205,jobs,results,process,async){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___25205,jobs,results,process,async){
return (function (state_25095){
var state_val_25096 = (state_25095[(1)]);
if((state_val_25096 === (7))){
var inst_25091 = (state_25095[(2)]);
var state_25095__$1 = state_25095;
var statearr_25097_25206 = state_25095__$1;
(statearr_25097_25206[(2)] = inst_25091);

(statearr_25097_25206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25096 === (1))){
var state_25095__$1 = state_25095;
var statearr_25098_25207 = state_25095__$1;
(statearr_25098_25207[(2)] = null);

(statearr_25098_25207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25096 === (4))){
var inst_25076 = (state_25095[(7)]);
var inst_25076__$1 = (state_25095[(2)]);
var inst_25077 = (inst_25076__$1 == null);
var state_25095__$1 = (function (){var statearr_25099 = state_25095;
(statearr_25099[(7)] = inst_25076__$1);

return statearr_25099;
})();
if(cljs.core.truth_(inst_25077)){
var statearr_25100_25208 = state_25095__$1;
(statearr_25100_25208[(1)] = (5));

} else {
var statearr_25101_25209 = state_25095__$1;
(statearr_25101_25209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25096 === (6))){
var inst_25081 = (state_25095[(8)]);
var inst_25076 = (state_25095[(7)]);
var inst_25081__$1 = cljs.core.async.chan.call(null,(1));
var inst_25082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25083 = [inst_25076,inst_25081__$1];
var inst_25084 = (new cljs.core.PersistentVector(null,2,(5),inst_25082,inst_25083,null));
var state_25095__$1 = (function (){var statearr_25102 = state_25095;
(statearr_25102[(8)] = inst_25081__$1);

return statearr_25102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25095__$1,(8),jobs,inst_25084);
} else {
if((state_val_25096 === (3))){
var inst_25093 = (state_25095[(2)]);
var state_25095__$1 = state_25095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25095__$1,inst_25093);
} else {
if((state_val_25096 === (2))){
var state_25095__$1 = state_25095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25095__$1,(4),from);
} else {
if((state_val_25096 === (9))){
var inst_25088 = (state_25095[(2)]);
var state_25095__$1 = (function (){var statearr_25103 = state_25095;
(statearr_25103[(9)] = inst_25088);

return statearr_25103;
})();
var statearr_25104_25210 = state_25095__$1;
(statearr_25104_25210[(2)] = null);

(statearr_25104_25210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25096 === (5))){
var inst_25079 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25095__$1 = state_25095;
var statearr_25105_25211 = state_25095__$1;
(statearr_25105_25211[(2)] = inst_25079);

(statearr_25105_25211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25096 === (8))){
var inst_25081 = (state_25095[(8)]);
var inst_25086 = (state_25095[(2)]);
var state_25095__$1 = (function (){var statearr_25106 = state_25095;
(statearr_25106[(10)] = inst_25086);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25095__$1,(9),results,inst_25081);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___25205,jobs,results,process,async))
;
return ((function (switch__24748__auto__,c__24843__auto___25205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_25107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__);

(statearr_25107[(1)] = (1));

return statearr_25107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1 = (function (state_25095){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25108){if((e25108 instanceof Object)){
var ex__24752__auto__ = e25108;
var statearr_25109_25212 = state_25095;
(statearr_25109_25212[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25213 = state_25095;
state_25095 = G__25213;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = function(state_25095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1.call(this,state_25095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___25205,jobs,results,process,async))
})();
var state__24845__auto__ = (function (){var statearr_25110 = f__24844__auto__.call(null);
(statearr_25110[(6)] = c__24843__auto___25205);

return statearr_25110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___25205,jobs,results,process,async))
);


var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__,jobs,results,process,async){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__,jobs,results,process,async){
return (function (state_25148){
var state_val_25149 = (state_25148[(1)]);
if((state_val_25149 === (7))){
var inst_25144 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25150_25214 = state_25148__$1;
(statearr_25150_25214[(2)] = inst_25144);

(statearr_25150_25214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (20))){
var state_25148__$1 = state_25148;
var statearr_25151_25215 = state_25148__$1;
(statearr_25151_25215[(2)] = null);

(statearr_25151_25215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (1))){
var state_25148__$1 = state_25148;
var statearr_25152_25216 = state_25148__$1;
(statearr_25152_25216[(2)] = null);

(statearr_25152_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (4))){
var inst_25113 = (state_25148[(7)]);
var inst_25113__$1 = (state_25148[(2)]);
var inst_25114 = (inst_25113__$1 == null);
var state_25148__$1 = (function (){var statearr_25153 = state_25148;
(statearr_25153[(7)] = inst_25113__$1);

return statearr_25153;
})();
if(cljs.core.truth_(inst_25114)){
var statearr_25154_25217 = state_25148__$1;
(statearr_25154_25217[(1)] = (5));

} else {
var statearr_25155_25218 = state_25148__$1;
(statearr_25155_25218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (15))){
var inst_25126 = (state_25148[(8)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25148__$1,(18),to,inst_25126);
} else {
if((state_val_25149 === (21))){
var inst_25139 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25156_25219 = state_25148__$1;
(statearr_25156_25219[(2)] = inst_25139);

(statearr_25156_25219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (13))){
var inst_25141 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25157 = state_25148;
(statearr_25157[(9)] = inst_25141);

return statearr_25157;
})();
var statearr_25158_25220 = state_25148__$1;
(statearr_25158_25220[(2)] = null);

(statearr_25158_25220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (6))){
var inst_25113 = (state_25148[(7)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(11),inst_25113);
} else {
if((state_val_25149 === (17))){
var inst_25134 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
if(cljs.core.truth_(inst_25134)){
var statearr_25159_25221 = state_25148__$1;
(statearr_25159_25221[(1)] = (19));

} else {
var statearr_25160_25222 = state_25148__$1;
(statearr_25160_25222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (3))){
var inst_25146 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25148__$1,inst_25146);
} else {
if((state_val_25149 === (12))){
var inst_25123 = (state_25148[(10)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(14),inst_25123);
} else {
if((state_val_25149 === (2))){
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(4),results);
} else {
if((state_val_25149 === (19))){
var state_25148__$1 = state_25148;
var statearr_25161_25223 = state_25148__$1;
(statearr_25161_25223[(2)] = null);

(statearr_25161_25223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (11))){
var inst_25123 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25162 = state_25148;
(statearr_25162[(10)] = inst_25123);

return statearr_25162;
})();
var statearr_25163_25224 = state_25148__$1;
(statearr_25163_25224[(2)] = null);

(statearr_25163_25224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (9))){
var state_25148__$1 = state_25148;
var statearr_25164_25225 = state_25148__$1;
(statearr_25164_25225[(2)] = null);

(statearr_25164_25225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (5))){
var state_25148__$1 = state_25148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25165_25226 = state_25148__$1;
(statearr_25165_25226[(1)] = (8));

} else {
var statearr_25166_25227 = state_25148__$1;
(statearr_25166_25227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (14))){
var inst_25128 = (state_25148[(11)]);
var inst_25126 = (state_25148[(8)]);
var inst_25126__$1 = (state_25148[(2)]);
var inst_25127 = (inst_25126__$1 == null);
var inst_25128__$1 = cljs.core.not.call(null,inst_25127);
var state_25148__$1 = (function (){var statearr_25167 = state_25148;
(statearr_25167[(11)] = inst_25128__$1);

(statearr_25167[(8)] = inst_25126__$1);

return statearr_25167;
})();
if(inst_25128__$1){
var statearr_25168_25228 = state_25148__$1;
(statearr_25168_25228[(1)] = (15));

} else {
var statearr_25169_25229 = state_25148__$1;
(statearr_25169_25229[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (16))){
var inst_25128 = (state_25148[(11)]);
var state_25148__$1 = state_25148;
var statearr_25170_25230 = state_25148__$1;
(statearr_25170_25230[(2)] = inst_25128);

(statearr_25170_25230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (10))){
var inst_25120 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25171_25231 = state_25148__$1;
(statearr_25171_25231[(2)] = inst_25120);

(statearr_25171_25231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (18))){
var inst_25131 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25172_25232 = state_25148__$1;
(statearr_25172_25232[(2)] = inst_25131);

(statearr_25172_25232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (8))){
var inst_25117 = cljs.core.async.close_BANG_.call(null,to);
var state_25148__$1 = state_25148;
var statearr_25173_25233 = state_25148__$1;
(statearr_25173_25233[(2)] = inst_25117);

(statearr_25173_25233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto__,jobs,results,process,async))
;
return ((function (switch__24748__auto__,c__24843__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1 = (function (state_25148){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__24752__auto__ = e25175;
var statearr_25176_25234 = state_25148;
(statearr_25176_25234[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25235 = state_25148;
state_25148 = G__25235;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__ = function(state_25148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1.call(this,state_25148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__,jobs,results,process,async))
})();
var state__24845__auto__ = (function (){var statearr_25177 = f__24844__auto__.call(null);
(statearr_25177[(6)] = c__24843__auto__);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__,jobs,results,process,async))
);

return c__24843__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25237 = arguments.length;
switch (G__25237) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25240 = arguments.length;
switch (G__25240) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25243 = arguments.length;
switch (G__25243) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24843__auto___25292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___25292,tc,fc){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___25292,tc,fc){
return (function (state_25269){
var state_val_25270 = (state_25269[(1)]);
if((state_val_25270 === (7))){
var inst_25265 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25271_25293 = state_25269__$1;
(statearr_25271_25293[(2)] = inst_25265);

(statearr_25271_25293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (1))){
var state_25269__$1 = state_25269;
var statearr_25272_25294 = state_25269__$1;
(statearr_25272_25294[(2)] = null);

(statearr_25272_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (4))){
var inst_25246 = (state_25269[(7)]);
var inst_25246__$1 = (state_25269[(2)]);
var inst_25247 = (inst_25246__$1 == null);
var state_25269__$1 = (function (){var statearr_25273 = state_25269;
(statearr_25273[(7)] = inst_25246__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25247)){
var statearr_25274_25295 = state_25269__$1;
(statearr_25274_25295[(1)] = (5));

} else {
var statearr_25275_25296 = state_25269__$1;
(statearr_25275_25296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (13))){
var state_25269__$1 = state_25269;
var statearr_25276_25297 = state_25269__$1;
(statearr_25276_25297[(2)] = null);

(statearr_25276_25297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (6))){
var inst_25246 = (state_25269[(7)]);
var inst_25252 = p.call(null,inst_25246);
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25252)){
var statearr_25277_25298 = state_25269__$1;
(statearr_25277_25298[(1)] = (9));

} else {
var statearr_25278_25299 = state_25269__$1;
(statearr_25278_25299[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (3))){
var inst_25267 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25269__$1,inst_25267);
} else {
if((state_val_25270 === (12))){
var state_25269__$1 = state_25269;
var statearr_25279_25300 = state_25269__$1;
(statearr_25279_25300[(2)] = null);

(statearr_25279_25300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (2))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25269__$1,(4),ch);
} else {
if((state_val_25270 === (11))){
var inst_25246 = (state_25269[(7)]);
var inst_25256 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25269__$1,(8),inst_25256,inst_25246);
} else {
if((state_val_25270 === (9))){
var state_25269__$1 = state_25269;
var statearr_25280_25301 = state_25269__$1;
(statearr_25280_25301[(2)] = tc);

(statearr_25280_25301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (5))){
var inst_25249 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25250 = cljs.core.async.close_BANG_.call(null,fc);
var state_25269__$1 = (function (){var statearr_25281 = state_25269;
(statearr_25281[(8)] = inst_25249);

return statearr_25281;
})();
var statearr_25282_25302 = state_25269__$1;
(statearr_25282_25302[(2)] = inst_25250);

(statearr_25282_25302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (14))){
var inst_25263 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25283_25303 = state_25269__$1;
(statearr_25283_25303[(2)] = inst_25263);

(statearr_25283_25303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (10))){
var state_25269__$1 = state_25269;
var statearr_25284_25304 = state_25269__$1;
(statearr_25284_25304[(2)] = fc);

(statearr_25284_25304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (8))){
var inst_25258 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25258)){
var statearr_25285_25305 = state_25269__$1;
(statearr_25285_25305[(1)] = (12));

} else {
var statearr_25286_25306 = state_25269__$1;
(statearr_25286_25306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___25292,tc,fc))
;
return ((function (switch__24748__auto__,c__24843__auto___25292,tc,fc){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_25269){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__24752__auto__ = e25288;
var statearr_25289_25307 = state_25269;
(statearr_25289_25307[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25308 = state_25269;
state_25269 = G__25308;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___25292,tc,fc))
})();
var state__24845__auto__ = (function (){var statearr_25290 = f__24844__auto__.call(null);
(statearr_25290[(6)] = c__24843__auto___25292);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___25292,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__){
return (function (state_25329){
var state_val_25330 = (state_25329[(1)]);
if((state_val_25330 === (7))){
var inst_25325 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25331_25349 = state_25329__$1;
(statearr_25331_25349[(2)] = inst_25325);

(statearr_25331_25349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (1))){
var inst_25309 = init;
var state_25329__$1 = (function (){var statearr_25332 = state_25329;
(statearr_25332[(7)] = inst_25309);

return statearr_25332;
})();
var statearr_25333_25350 = state_25329__$1;
(statearr_25333_25350[(2)] = null);

(statearr_25333_25350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (4))){
var inst_25312 = (state_25329[(8)]);
var inst_25312__$1 = (state_25329[(2)]);
var inst_25313 = (inst_25312__$1 == null);
var state_25329__$1 = (function (){var statearr_25334 = state_25329;
(statearr_25334[(8)] = inst_25312__$1);

return statearr_25334;
})();
if(cljs.core.truth_(inst_25313)){
var statearr_25335_25351 = state_25329__$1;
(statearr_25335_25351[(1)] = (5));

} else {
var statearr_25336_25352 = state_25329__$1;
(statearr_25336_25352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (6))){
var inst_25316 = (state_25329[(9)]);
var inst_25309 = (state_25329[(7)]);
var inst_25312 = (state_25329[(8)]);
var inst_25316__$1 = f.call(null,inst_25309,inst_25312);
var inst_25317 = cljs.core.reduced_QMARK_.call(null,inst_25316__$1);
var state_25329__$1 = (function (){var statearr_25337 = state_25329;
(statearr_25337[(9)] = inst_25316__$1);

return statearr_25337;
})();
if(inst_25317){
var statearr_25338_25353 = state_25329__$1;
(statearr_25338_25353[(1)] = (8));

} else {
var statearr_25339_25354 = state_25329__$1;
(statearr_25339_25354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (3))){
var inst_25327 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25329__$1,inst_25327);
} else {
if((state_val_25330 === (2))){
var state_25329__$1 = state_25329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25329__$1,(4),ch);
} else {
if((state_val_25330 === (9))){
var inst_25316 = (state_25329[(9)]);
var inst_25309 = inst_25316;
var state_25329__$1 = (function (){var statearr_25340 = state_25329;
(statearr_25340[(7)] = inst_25309);

return statearr_25340;
})();
var statearr_25341_25355 = state_25329__$1;
(statearr_25341_25355[(2)] = null);

(statearr_25341_25355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (5))){
var inst_25309 = (state_25329[(7)]);
var state_25329__$1 = state_25329;
var statearr_25342_25356 = state_25329__$1;
(statearr_25342_25356[(2)] = inst_25309);

(statearr_25342_25356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (10))){
var inst_25323 = (state_25329[(2)]);
var state_25329__$1 = state_25329;
var statearr_25343_25357 = state_25329__$1;
(statearr_25343_25357[(2)] = inst_25323);

(statearr_25343_25357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25330 === (8))){
var inst_25316 = (state_25329[(9)]);
var inst_25319 = cljs.core.deref.call(null,inst_25316);
var state_25329__$1 = state_25329;
var statearr_25344_25358 = state_25329__$1;
(statearr_25344_25358[(2)] = inst_25319);

(statearr_25344_25358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24749__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24749__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = cljs$core$async$reduce_$_state_machine__24749__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var cljs$core$async$reduce_$_state_machine__24749__auto____1 = (function (state_25329){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__24752__auto__ = e25346;
var statearr_25347_25359 = state_25329;
(statearr_25347_25359[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25360 = state_25329;
state_25329 = G__25360;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24749__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24749__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24749__auto____0;
cljs$core$async$reduce_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24749__auto____1;
return cljs$core$async$reduce_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__))
})();
var state__24845__auto__ = (function (){var statearr_25348 = f__24844__auto__.call(null);
(statearr_25348[(6)] = c__24843__auto__);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__))
);

return c__24843__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__,f__$1){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__,f__$1){
return (function (state_25366){
var state_val_25367 = (state_25366[(1)]);
if((state_val_25367 === (1))){
var inst_25361 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25366__$1,(2),inst_25361);
} else {
if((state_val_25367 === (2))){
var inst_25363 = (state_25366[(2)]);
var inst_25364 = f__$1.call(null,inst_25363);
var state_25366__$1 = state_25366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25366__$1,inst_25364);
} else {
return null;
}
}
});})(c__24843__auto__,f__$1))
;
return ((function (switch__24748__auto__,c__24843__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24749__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24749__auto____0 = (function (){
var statearr_25368 = [null,null,null,null,null,null,null];
(statearr_25368[(0)] = cljs$core$async$transduce_$_state_machine__24749__auto__);

(statearr_25368[(1)] = (1));

return statearr_25368;
});
var cljs$core$async$transduce_$_state_machine__24749__auto____1 = (function (state_25366){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25369){if((e25369 instanceof Object)){
var ex__24752__auto__ = e25369;
var statearr_25370_25372 = state_25366;
(statearr_25370_25372[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_25366;
state_25366 = G__25373;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24749__auto__ = function(state_25366){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24749__auto____1.call(this,state_25366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24749__auto____0;
cljs$core$async$transduce_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24749__auto____1;
return cljs$core$async$transduce_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__,f__$1))
})();
var state__24845__auto__ = (function (){var statearr_25371 = f__24844__auto__.call(null);
(statearr_25371[(6)] = c__24843__auto__);

return statearr_25371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__,f__$1))
);

return c__24843__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25375 = arguments.length;
switch (G__25375) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__){
return (function (state_25400){
var state_val_25401 = (state_25400[(1)]);
if((state_val_25401 === (7))){
var inst_25382 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25402_25423 = state_25400__$1;
(statearr_25402_25423[(2)] = inst_25382);

(statearr_25402_25423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (1))){
var inst_25376 = cljs.core.seq.call(null,coll);
var inst_25377 = inst_25376;
var state_25400__$1 = (function (){var statearr_25403 = state_25400;
(statearr_25403[(7)] = inst_25377);

return statearr_25403;
})();
var statearr_25404_25424 = state_25400__$1;
(statearr_25404_25424[(2)] = null);

(statearr_25404_25424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (4))){
var inst_25377 = (state_25400[(7)]);
var inst_25380 = cljs.core.first.call(null,inst_25377);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25400__$1,(7),ch,inst_25380);
} else {
if((state_val_25401 === (13))){
var inst_25394 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25405_25425 = state_25400__$1;
(statearr_25405_25425[(2)] = inst_25394);

(statearr_25405_25425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (6))){
var inst_25385 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25385)){
var statearr_25406_25426 = state_25400__$1;
(statearr_25406_25426[(1)] = (8));

} else {
var statearr_25407_25427 = state_25400__$1;
(statearr_25407_25427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (3))){
var inst_25398 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25400__$1,inst_25398);
} else {
if((state_val_25401 === (12))){
var state_25400__$1 = state_25400;
var statearr_25408_25428 = state_25400__$1;
(statearr_25408_25428[(2)] = null);

(statearr_25408_25428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (2))){
var inst_25377 = (state_25400[(7)]);
var state_25400__$1 = state_25400;
if(cljs.core.truth_(inst_25377)){
var statearr_25409_25429 = state_25400__$1;
(statearr_25409_25429[(1)] = (4));

} else {
var statearr_25410_25430 = state_25400__$1;
(statearr_25410_25430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (11))){
var inst_25391 = cljs.core.async.close_BANG_.call(null,ch);
var state_25400__$1 = state_25400;
var statearr_25411_25431 = state_25400__$1;
(statearr_25411_25431[(2)] = inst_25391);

(statearr_25411_25431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (9))){
var state_25400__$1 = state_25400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25412_25432 = state_25400__$1;
(statearr_25412_25432[(1)] = (11));

} else {
var statearr_25413_25433 = state_25400__$1;
(statearr_25413_25433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (5))){
var inst_25377 = (state_25400[(7)]);
var state_25400__$1 = state_25400;
var statearr_25414_25434 = state_25400__$1;
(statearr_25414_25434[(2)] = inst_25377);

(statearr_25414_25434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (10))){
var inst_25396 = (state_25400[(2)]);
var state_25400__$1 = state_25400;
var statearr_25415_25435 = state_25400__$1;
(statearr_25415_25435[(2)] = inst_25396);

(statearr_25415_25435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25401 === (8))){
var inst_25377 = (state_25400[(7)]);
var inst_25387 = cljs.core.next.call(null,inst_25377);
var inst_25377__$1 = inst_25387;
var state_25400__$1 = (function (){var statearr_25416 = state_25400;
(statearr_25416[(7)] = inst_25377__$1);

return statearr_25416;
})();
var statearr_25417_25436 = state_25400__$1;
(statearr_25417_25436[(2)] = null);

(statearr_25417_25436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_25418 = [null,null,null,null,null,null,null,null];
(statearr_25418[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_25418[(1)] = (1));

return statearr_25418;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_25400){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25419){if((e25419 instanceof Object)){
var ex__24752__auto__ = e25419;
var statearr_25420_25437 = state_25400;
(statearr_25420_25437[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25438 = state_25400;
state_25400 = G__25438;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_25400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_25400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__))
})();
var state__24845__auto__ = (function (){var statearr_25421 = f__24844__auto__.call(null);
(statearr_25421[(6)] = c__24843__auto__);

return statearr_25421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__))
);

return c__24843__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25439 = (function (ch,cs,meta25440){
this.ch = ch;
this.cs = cs;
this.meta25440 = meta25440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25441,meta25440__$1){
var self__ = this;
var _25441__$1 = this;
return (new cljs.core.async.t_cljs$core$async25439(self__.ch,self__.cs,meta25440__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25441){
var self__ = this;
var _25441__$1 = this;
return self__.meta25440;
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25440","meta25440",-1285906674,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25439";

cljs.core.async.t_cljs$core$async25439.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25439");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25439.
 */
cljs.core.async.__GT_t_cljs$core$async25439 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25439(ch__$1,cs__$1,meta25440){
return (new cljs.core.async.t_cljs$core$async25439(ch__$1,cs__$1,meta25440));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25439(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24843__auto___25661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___25661,cs,m,dchan,dctr,done){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___25661,cs,m,dchan,dctr,done){
return (function (state_25576){
var state_val_25577 = (state_25576[(1)]);
if((state_val_25577 === (7))){
var inst_25572 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25578_25662 = state_25576__$1;
(statearr_25578_25662[(2)] = inst_25572);

(statearr_25578_25662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (20))){
var inst_25475 = (state_25576[(7)]);
var inst_25487 = cljs.core.first.call(null,inst_25475);
var inst_25488 = cljs.core.nth.call(null,inst_25487,(0),null);
var inst_25489 = cljs.core.nth.call(null,inst_25487,(1),null);
var state_25576__$1 = (function (){var statearr_25579 = state_25576;
(statearr_25579[(8)] = inst_25488);

return statearr_25579;
})();
if(cljs.core.truth_(inst_25489)){
var statearr_25580_25663 = state_25576__$1;
(statearr_25580_25663[(1)] = (22));

} else {
var statearr_25581_25664 = state_25576__$1;
(statearr_25581_25664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (27))){
var inst_25524 = (state_25576[(9)]);
var inst_25519 = (state_25576[(10)]);
var inst_25444 = (state_25576[(11)]);
var inst_25517 = (state_25576[(12)]);
var inst_25524__$1 = cljs.core._nth.call(null,inst_25517,inst_25519);
var inst_25525 = cljs.core.async.put_BANG_.call(null,inst_25524__$1,inst_25444,done);
var state_25576__$1 = (function (){var statearr_25582 = state_25576;
(statearr_25582[(9)] = inst_25524__$1);

return statearr_25582;
})();
if(cljs.core.truth_(inst_25525)){
var statearr_25583_25665 = state_25576__$1;
(statearr_25583_25665[(1)] = (30));

} else {
var statearr_25584_25666 = state_25576__$1;
(statearr_25584_25666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (1))){
var state_25576__$1 = state_25576;
var statearr_25585_25667 = state_25576__$1;
(statearr_25585_25667[(2)] = null);

(statearr_25585_25667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (24))){
var inst_25475 = (state_25576[(7)]);
var inst_25494 = (state_25576[(2)]);
var inst_25495 = cljs.core.next.call(null,inst_25475);
var inst_25453 = inst_25495;
var inst_25454 = null;
var inst_25455 = (0);
var inst_25456 = (0);
var state_25576__$1 = (function (){var statearr_25586 = state_25576;
(statearr_25586[(13)] = inst_25494);

(statearr_25586[(14)] = inst_25456);

(statearr_25586[(15)] = inst_25454);

(statearr_25586[(16)] = inst_25455);

(statearr_25586[(17)] = inst_25453);

return statearr_25586;
})();
var statearr_25587_25668 = state_25576__$1;
(statearr_25587_25668[(2)] = null);

(statearr_25587_25668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (39))){
var state_25576__$1 = state_25576;
var statearr_25591_25669 = state_25576__$1;
(statearr_25591_25669[(2)] = null);

(statearr_25591_25669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (4))){
var inst_25444 = (state_25576[(11)]);
var inst_25444__$1 = (state_25576[(2)]);
var inst_25445 = (inst_25444__$1 == null);
var state_25576__$1 = (function (){var statearr_25592 = state_25576;
(statearr_25592[(11)] = inst_25444__$1);

return statearr_25592;
})();
if(cljs.core.truth_(inst_25445)){
var statearr_25593_25670 = state_25576__$1;
(statearr_25593_25670[(1)] = (5));

} else {
var statearr_25594_25671 = state_25576__$1;
(statearr_25594_25671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (15))){
var inst_25456 = (state_25576[(14)]);
var inst_25454 = (state_25576[(15)]);
var inst_25455 = (state_25576[(16)]);
var inst_25453 = (state_25576[(17)]);
var inst_25471 = (state_25576[(2)]);
var inst_25472 = (inst_25456 + (1));
var tmp25588 = inst_25454;
var tmp25589 = inst_25455;
var tmp25590 = inst_25453;
var inst_25453__$1 = tmp25590;
var inst_25454__$1 = tmp25588;
var inst_25455__$1 = tmp25589;
var inst_25456__$1 = inst_25472;
var state_25576__$1 = (function (){var statearr_25595 = state_25576;
(statearr_25595[(18)] = inst_25471);

(statearr_25595[(14)] = inst_25456__$1);

(statearr_25595[(15)] = inst_25454__$1);

(statearr_25595[(16)] = inst_25455__$1);

(statearr_25595[(17)] = inst_25453__$1);

return statearr_25595;
})();
var statearr_25596_25672 = state_25576__$1;
(statearr_25596_25672[(2)] = null);

(statearr_25596_25672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (21))){
var inst_25498 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25600_25673 = state_25576__$1;
(statearr_25600_25673[(2)] = inst_25498);

(statearr_25600_25673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (31))){
var inst_25524 = (state_25576[(9)]);
var inst_25528 = done.call(null,null);
var inst_25529 = cljs.core.async.untap_STAR_.call(null,m,inst_25524);
var state_25576__$1 = (function (){var statearr_25601 = state_25576;
(statearr_25601[(19)] = inst_25528);

return statearr_25601;
})();
var statearr_25602_25674 = state_25576__$1;
(statearr_25602_25674[(2)] = inst_25529);

(statearr_25602_25674[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (32))){
var inst_25516 = (state_25576[(20)]);
var inst_25518 = (state_25576[(21)]);
var inst_25519 = (state_25576[(10)]);
var inst_25517 = (state_25576[(12)]);
var inst_25531 = (state_25576[(2)]);
var inst_25532 = (inst_25519 + (1));
var tmp25597 = inst_25516;
var tmp25598 = inst_25518;
var tmp25599 = inst_25517;
var inst_25516__$1 = tmp25597;
var inst_25517__$1 = tmp25599;
var inst_25518__$1 = tmp25598;
var inst_25519__$1 = inst_25532;
var state_25576__$1 = (function (){var statearr_25603 = state_25576;
(statearr_25603[(22)] = inst_25531);

(statearr_25603[(20)] = inst_25516__$1);

(statearr_25603[(21)] = inst_25518__$1);

(statearr_25603[(10)] = inst_25519__$1);

(statearr_25603[(12)] = inst_25517__$1);

return statearr_25603;
})();
var statearr_25604_25675 = state_25576__$1;
(statearr_25604_25675[(2)] = null);

(statearr_25604_25675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (40))){
var inst_25544 = (state_25576[(23)]);
var inst_25548 = done.call(null,null);
var inst_25549 = cljs.core.async.untap_STAR_.call(null,m,inst_25544);
var state_25576__$1 = (function (){var statearr_25605 = state_25576;
(statearr_25605[(24)] = inst_25548);

return statearr_25605;
})();
var statearr_25606_25676 = state_25576__$1;
(statearr_25606_25676[(2)] = inst_25549);

(statearr_25606_25676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (33))){
var inst_25535 = (state_25576[(25)]);
var inst_25537 = cljs.core.chunked_seq_QMARK_.call(null,inst_25535);
var state_25576__$1 = state_25576;
if(inst_25537){
var statearr_25607_25677 = state_25576__$1;
(statearr_25607_25677[(1)] = (36));

} else {
var statearr_25608_25678 = state_25576__$1;
(statearr_25608_25678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (13))){
var inst_25465 = (state_25576[(26)]);
var inst_25468 = cljs.core.async.close_BANG_.call(null,inst_25465);
var state_25576__$1 = state_25576;
var statearr_25609_25679 = state_25576__$1;
(statearr_25609_25679[(2)] = inst_25468);

(statearr_25609_25679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (22))){
var inst_25488 = (state_25576[(8)]);
var inst_25491 = cljs.core.async.close_BANG_.call(null,inst_25488);
var state_25576__$1 = state_25576;
var statearr_25610_25680 = state_25576__$1;
(statearr_25610_25680[(2)] = inst_25491);

(statearr_25610_25680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (36))){
var inst_25535 = (state_25576[(25)]);
var inst_25539 = cljs.core.chunk_first.call(null,inst_25535);
var inst_25540 = cljs.core.chunk_rest.call(null,inst_25535);
var inst_25541 = cljs.core.count.call(null,inst_25539);
var inst_25516 = inst_25540;
var inst_25517 = inst_25539;
var inst_25518 = inst_25541;
var inst_25519 = (0);
var state_25576__$1 = (function (){var statearr_25611 = state_25576;
(statearr_25611[(20)] = inst_25516);

(statearr_25611[(21)] = inst_25518);

(statearr_25611[(10)] = inst_25519);

(statearr_25611[(12)] = inst_25517);

return statearr_25611;
})();
var statearr_25612_25681 = state_25576__$1;
(statearr_25612_25681[(2)] = null);

(statearr_25612_25681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (41))){
var inst_25535 = (state_25576[(25)]);
var inst_25551 = (state_25576[(2)]);
var inst_25552 = cljs.core.next.call(null,inst_25535);
var inst_25516 = inst_25552;
var inst_25517 = null;
var inst_25518 = (0);
var inst_25519 = (0);
var state_25576__$1 = (function (){var statearr_25613 = state_25576;
(statearr_25613[(20)] = inst_25516);

(statearr_25613[(21)] = inst_25518);

(statearr_25613[(27)] = inst_25551);

(statearr_25613[(10)] = inst_25519);

(statearr_25613[(12)] = inst_25517);

return statearr_25613;
})();
var statearr_25614_25682 = state_25576__$1;
(statearr_25614_25682[(2)] = null);

(statearr_25614_25682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (43))){
var state_25576__$1 = state_25576;
var statearr_25615_25683 = state_25576__$1;
(statearr_25615_25683[(2)] = null);

(statearr_25615_25683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (29))){
var inst_25560 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25616_25684 = state_25576__$1;
(statearr_25616_25684[(2)] = inst_25560);

(statearr_25616_25684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (44))){
var inst_25569 = (state_25576[(2)]);
var state_25576__$1 = (function (){var statearr_25617 = state_25576;
(statearr_25617[(28)] = inst_25569);

return statearr_25617;
})();
var statearr_25618_25685 = state_25576__$1;
(statearr_25618_25685[(2)] = null);

(statearr_25618_25685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (6))){
var inst_25508 = (state_25576[(29)]);
var inst_25507 = cljs.core.deref.call(null,cs);
var inst_25508__$1 = cljs.core.keys.call(null,inst_25507);
var inst_25509 = cljs.core.count.call(null,inst_25508__$1);
var inst_25510 = cljs.core.reset_BANG_.call(null,dctr,inst_25509);
var inst_25515 = cljs.core.seq.call(null,inst_25508__$1);
var inst_25516 = inst_25515;
var inst_25517 = null;
var inst_25518 = (0);
var inst_25519 = (0);
var state_25576__$1 = (function (){var statearr_25619 = state_25576;
(statearr_25619[(20)] = inst_25516);

(statearr_25619[(21)] = inst_25518);

(statearr_25619[(29)] = inst_25508__$1);

(statearr_25619[(30)] = inst_25510);

(statearr_25619[(10)] = inst_25519);

(statearr_25619[(12)] = inst_25517);

return statearr_25619;
})();
var statearr_25620_25686 = state_25576__$1;
(statearr_25620_25686[(2)] = null);

(statearr_25620_25686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (28))){
var inst_25516 = (state_25576[(20)]);
var inst_25535 = (state_25576[(25)]);
var inst_25535__$1 = cljs.core.seq.call(null,inst_25516);
var state_25576__$1 = (function (){var statearr_25621 = state_25576;
(statearr_25621[(25)] = inst_25535__$1);

return statearr_25621;
})();
if(inst_25535__$1){
var statearr_25622_25687 = state_25576__$1;
(statearr_25622_25687[(1)] = (33));

} else {
var statearr_25623_25688 = state_25576__$1;
(statearr_25623_25688[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (25))){
var inst_25518 = (state_25576[(21)]);
var inst_25519 = (state_25576[(10)]);
var inst_25521 = (inst_25519 < inst_25518);
var inst_25522 = inst_25521;
var state_25576__$1 = state_25576;
if(cljs.core.truth_(inst_25522)){
var statearr_25624_25689 = state_25576__$1;
(statearr_25624_25689[(1)] = (27));

} else {
var statearr_25625_25690 = state_25576__$1;
(statearr_25625_25690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (34))){
var state_25576__$1 = state_25576;
var statearr_25626_25691 = state_25576__$1;
(statearr_25626_25691[(2)] = null);

(statearr_25626_25691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (17))){
var state_25576__$1 = state_25576;
var statearr_25627_25692 = state_25576__$1;
(statearr_25627_25692[(2)] = null);

(statearr_25627_25692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (3))){
var inst_25574 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25576__$1,inst_25574);
} else {
if((state_val_25577 === (12))){
var inst_25503 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25628_25693 = state_25576__$1;
(statearr_25628_25693[(2)] = inst_25503);

(statearr_25628_25693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (2))){
var state_25576__$1 = state_25576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25576__$1,(4),ch);
} else {
if((state_val_25577 === (23))){
var state_25576__$1 = state_25576;
var statearr_25629_25694 = state_25576__$1;
(statearr_25629_25694[(2)] = null);

(statearr_25629_25694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (35))){
var inst_25558 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25630_25695 = state_25576__$1;
(statearr_25630_25695[(2)] = inst_25558);

(statearr_25630_25695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (19))){
var inst_25475 = (state_25576[(7)]);
var inst_25479 = cljs.core.chunk_first.call(null,inst_25475);
var inst_25480 = cljs.core.chunk_rest.call(null,inst_25475);
var inst_25481 = cljs.core.count.call(null,inst_25479);
var inst_25453 = inst_25480;
var inst_25454 = inst_25479;
var inst_25455 = inst_25481;
var inst_25456 = (0);
var state_25576__$1 = (function (){var statearr_25631 = state_25576;
(statearr_25631[(14)] = inst_25456);

(statearr_25631[(15)] = inst_25454);

(statearr_25631[(16)] = inst_25455);

(statearr_25631[(17)] = inst_25453);

return statearr_25631;
})();
var statearr_25632_25696 = state_25576__$1;
(statearr_25632_25696[(2)] = null);

(statearr_25632_25696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (11))){
var inst_25475 = (state_25576[(7)]);
var inst_25453 = (state_25576[(17)]);
var inst_25475__$1 = cljs.core.seq.call(null,inst_25453);
var state_25576__$1 = (function (){var statearr_25633 = state_25576;
(statearr_25633[(7)] = inst_25475__$1);

return statearr_25633;
})();
if(inst_25475__$1){
var statearr_25634_25697 = state_25576__$1;
(statearr_25634_25697[(1)] = (16));

} else {
var statearr_25635_25698 = state_25576__$1;
(statearr_25635_25698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (9))){
var inst_25505 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25636_25699 = state_25576__$1;
(statearr_25636_25699[(2)] = inst_25505);

(statearr_25636_25699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (5))){
var inst_25451 = cljs.core.deref.call(null,cs);
var inst_25452 = cljs.core.seq.call(null,inst_25451);
var inst_25453 = inst_25452;
var inst_25454 = null;
var inst_25455 = (0);
var inst_25456 = (0);
var state_25576__$1 = (function (){var statearr_25637 = state_25576;
(statearr_25637[(14)] = inst_25456);

(statearr_25637[(15)] = inst_25454);

(statearr_25637[(16)] = inst_25455);

(statearr_25637[(17)] = inst_25453);

return statearr_25637;
})();
var statearr_25638_25700 = state_25576__$1;
(statearr_25638_25700[(2)] = null);

(statearr_25638_25700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (14))){
var state_25576__$1 = state_25576;
var statearr_25639_25701 = state_25576__$1;
(statearr_25639_25701[(2)] = null);

(statearr_25639_25701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (45))){
var inst_25566 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25640_25702 = state_25576__$1;
(statearr_25640_25702[(2)] = inst_25566);

(statearr_25640_25702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (26))){
var inst_25508 = (state_25576[(29)]);
var inst_25562 = (state_25576[(2)]);
var inst_25563 = cljs.core.seq.call(null,inst_25508);
var state_25576__$1 = (function (){var statearr_25641 = state_25576;
(statearr_25641[(31)] = inst_25562);

return statearr_25641;
})();
if(inst_25563){
var statearr_25642_25703 = state_25576__$1;
(statearr_25642_25703[(1)] = (42));

} else {
var statearr_25643_25704 = state_25576__$1;
(statearr_25643_25704[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (16))){
var inst_25475 = (state_25576[(7)]);
var inst_25477 = cljs.core.chunked_seq_QMARK_.call(null,inst_25475);
var state_25576__$1 = state_25576;
if(inst_25477){
var statearr_25644_25705 = state_25576__$1;
(statearr_25644_25705[(1)] = (19));

} else {
var statearr_25645_25706 = state_25576__$1;
(statearr_25645_25706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (38))){
var inst_25555 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25646_25707 = state_25576__$1;
(statearr_25646_25707[(2)] = inst_25555);

(statearr_25646_25707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (30))){
var state_25576__$1 = state_25576;
var statearr_25647_25708 = state_25576__$1;
(statearr_25647_25708[(2)] = null);

(statearr_25647_25708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (10))){
var inst_25456 = (state_25576[(14)]);
var inst_25454 = (state_25576[(15)]);
var inst_25464 = cljs.core._nth.call(null,inst_25454,inst_25456);
var inst_25465 = cljs.core.nth.call(null,inst_25464,(0),null);
var inst_25466 = cljs.core.nth.call(null,inst_25464,(1),null);
var state_25576__$1 = (function (){var statearr_25648 = state_25576;
(statearr_25648[(26)] = inst_25465);

return statearr_25648;
})();
if(cljs.core.truth_(inst_25466)){
var statearr_25649_25709 = state_25576__$1;
(statearr_25649_25709[(1)] = (13));

} else {
var statearr_25650_25710 = state_25576__$1;
(statearr_25650_25710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (18))){
var inst_25501 = (state_25576[(2)]);
var state_25576__$1 = state_25576;
var statearr_25651_25711 = state_25576__$1;
(statearr_25651_25711[(2)] = inst_25501);

(statearr_25651_25711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (42))){
var state_25576__$1 = state_25576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25576__$1,(45),dchan);
} else {
if((state_val_25577 === (37))){
var inst_25544 = (state_25576[(23)]);
var inst_25535 = (state_25576[(25)]);
var inst_25444 = (state_25576[(11)]);
var inst_25544__$1 = cljs.core.first.call(null,inst_25535);
var inst_25545 = cljs.core.async.put_BANG_.call(null,inst_25544__$1,inst_25444,done);
var state_25576__$1 = (function (){var statearr_25652 = state_25576;
(statearr_25652[(23)] = inst_25544__$1);

return statearr_25652;
})();
if(cljs.core.truth_(inst_25545)){
var statearr_25653_25712 = state_25576__$1;
(statearr_25653_25712[(1)] = (39));

} else {
var statearr_25654_25713 = state_25576__$1;
(statearr_25654_25713[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25577 === (8))){
var inst_25456 = (state_25576[(14)]);
var inst_25455 = (state_25576[(16)]);
var inst_25458 = (inst_25456 < inst_25455);
var inst_25459 = inst_25458;
var state_25576__$1 = state_25576;
if(cljs.core.truth_(inst_25459)){
var statearr_25655_25714 = state_25576__$1;
(statearr_25655_25714[(1)] = (10));

} else {
var statearr_25656_25715 = state_25576__$1;
(statearr_25656_25715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___25661,cs,m,dchan,dctr,done))
;
return ((function (switch__24748__auto__,c__24843__auto___25661,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24749__auto__ = null;
var cljs$core$async$mult_$_state_machine__24749__auto____0 = (function (){
var statearr_25657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25657[(0)] = cljs$core$async$mult_$_state_machine__24749__auto__);

(statearr_25657[(1)] = (1));

return statearr_25657;
});
var cljs$core$async$mult_$_state_machine__24749__auto____1 = (function (state_25576){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25658){if((e25658 instanceof Object)){
var ex__24752__auto__ = e25658;
var statearr_25659_25716 = state_25576;
(statearr_25659_25716[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25717 = state_25576;
state_25576 = G__25717;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24749__auto__ = function(state_25576){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24749__auto____1.call(this,state_25576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24749__auto____0;
cljs$core$async$mult_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24749__auto____1;
return cljs$core$async$mult_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___25661,cs,m,dchan,dctr,done))
})();
var state__24845__auto__ = (function (){var statearr_25660 = f__24844__auto__.call(null);
(statearr_25660[(6)] = c__24843__auto___25661);

return statearr_25660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___25661,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25719 = arguments.length;
switch (G__25719) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25731 = arguments.length;
var i__4731__auto___25732 = (0);
while(true){
if((i__4731__auto___25732 < len__4730__auto___25731)){
args__4736__auto__.push((arguments[i__4731__auto___25732]));

var G__25733 = (i__4731__auto___25732 + (1));
i__4731__auto___25732 = G__25733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25725){
var map__25726 = p__25725;
var map__25726__$1 = (((((!((map__25726 == null))))?(((((map__25726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25726):map__25726);
var opts = map__25726__$1;
var statearr_25728_25734 = state;
(statearr_25728_25734[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25726,map__25726__$1,opts){
return (function (val){
var statearr_25729_25735 = state;
(statearr_25729_25735[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25726,map__25726__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25730_25736 = state;
(statearr_25730_25736[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25721){
var G__25722 = cljs.core.first.call(null,seq25721);
var seq25721__$1 = cljs.core.next.call(null,seq25721);
var G__25723 = cljs.core.first.call(null,seq25721__$1);
var seq25721__$2 = cljs.core.next.call(null,seq25721__$1);
var G__25724 = cljs.core.first.call(null,seq25721__$2);
var seq25721__$3 = cljs.core.next.call(null,seq25721__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25722,G__25723,G__25724,seq25721__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25737 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25738){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25738 = meta25738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25739,meta25738__$1){
var self__ = this;
var _25739__$1 = this;
return (new cljs.core.async.t_cljs$core$async25737(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25738__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25739){
var self__ = this;
var _25739__$1 = this;
return self__.meta25738;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25738","meta25738",-421482052,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25737";

cljs.core.async.t_cljs$core$async25737.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25737");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25737.
 */
cljs.core.async.__GT_t_cljs$core$async25737 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25737(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25738){
return (new cljs.core.async.t_cljs$core$async25737(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25738));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25737(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24843__auto___25901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (7))){
var inst_25756 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25843_25902 = state_25841__$1;
(statearr_25843_25902[(2)] = inst_25756);

(statearr_25843_25902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (20))){
var inst_25768 = (state_25841[(7)]);
var state_25841__$1 = state_25841;
var statearr_25844_25903 = state_25841__$1;
(statearr_25844_25903[(2)] = inst_25768);

(statearr_25844_25903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (27))){
var state_25841__$1 = state_25841;
var statearr_25845_25904 = state_25841__$1;
(statearr_25845_25904[(2)] = null);

(statearr_25845_25904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (1))){
var inst_25743 = (state_25841[(8)]);
var inst_25743__$1 = calc_state.call(null);
var inst_25745 = (inst_25743__$1 == null);
var inst_25746 = cljs.core.not.call(null,inst_25745);
var state_25841__$1 = (function (){var statearr_25846 = state_25841;
(statearr_25846[(8)] = inst_25743__$1);

return statearr_25846;
})();
if(inst_25746){
var statearr_25847_25905 = state_25841__$1;
(statearr_25847_25905[(1)] = (2));

} else {
var statearr_25848_25906 = state_25841__$1;
(statearr_25848_25906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (24))){
var inst_25801 = (state_25841[(9)]);
var inst_25792 = (state_25841[(10)]);
var inst_25815 = (state_25841[(11)]);
var inst_25815__$1 = inst_25792.call(null,inst_25801);
var state_25841__$1 = (function (){var statearr_25849 = state_25841;
(statearr_25849[(11)] = inst_25815__$1);

return statearr_25849;
})();
if(cljs.core.truth_(inst_25815__$1)){
var statearr_25850_25907 = state_25841__$1;
(statearr_25850_25907[(1)] = (29));

} else {
var statearr_25851_25908 = state_25841__$1;
(statearr_25851_25908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (4))){
var inst_25759 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25759)){
var statearr_25852_25909 = state_25841__$1;
(statearr_25852_25909[(1)] = (8));

} else {
var statearr_25853_25910 = state_25841__$1;
(statearr_25853_25910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (15))){
var inst_25786 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25786)){
var statearr_25854_25911 = state_25841__$1;
(statearr_25854_25911[(1)] = (19));

} else {
var statearr_25855_25912 = state_25841__$1;
(statearr_25855_25912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (21))){
var inst_25791 = (state_25841[(12)]);
var inst_25791__$1 = (state_25841[(2)]);
var inst_25792 = cljs.core.get.call(null,inst_25791__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25793 = cljs.core.get.call(null,inst_25791__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25794 = cljs.core.get.call(null,inst_25791__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25841__$1 = (function (){var statearr_25856 = state_25841;
(statearr_25856[(13)] = inst_25793);

(statearr_25856[(10)] = inst_25792);

(statearr_25856[(12)] = inst_25791__$1);

return statearr_25856;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25841__$1,(22),inst_25794);
} else {
if((state_val_25842 === (31))){
var inst_25823 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25823)){
var statearr_25857_25913 = state_25841__$1;
(statearr_25857_25913[(1)] = (32));

} else {
var statearr_25858_25914 = state_25841__$1;
(statearr_25858_25914[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (32))){
var inst_25800 = (state_25841[(14)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25841__$1,(35),out,inst_25800);
} else {
if((state_val_25842 === (33))){
var inst_25791 = (state_25841[(12)]);
var inst_25768 = inst_25791;
var state_25841__$1 = (function (){var statearr_25859 = state_25841;
(statearr_25859[(7)] = inst_25768);

return statearr_25859;
})();
var statearr_25860_25915 = state_25841__$1;
(statearr_25860_25915[(2)] = null);

(statearr_25860_25915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (13))){
var inst_25768 = (state_25841[(7)]);
var inst_25775 = inst_25768.cljs$lang$protocol_mask$partition0$;
var inst_25776 = (inst_25775 & (64));
var inst_25777 = inst_25768.cljs$core$ISeq$;
var inst_25778 = (cljs.core.PROTOCOL_SENTINEL === inst_25777);
var inst_25779 = ((inst_25776) || (inst_25778));
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25779)){
var statearr_25861_25916 = state_25841__$1;
(statearr_25861_25916[(1)] = (16));

} else {
var statearr_25862_25917 = state_25841__$1;
(statearr_25862_25917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (22))){
var inst_25801 = (state_25841[(9)]);
var inst_25800 = (state_25841[(14)]);
var inst_25799 = (state_25841[(2)]);
var inst_25800__$1 = cljs.core.nth.call(null,inst_25799,(0),null);
var inst_25801__$1 = cljs.core.nth.call(null,inst_25799,(1),null);
var inst_25802 = (inst_25800__$1 == null);
var inst_25803 = cljs.core._EQ_.call(null,inst_25801__$1,change);
var inst_25804 = ((inst_25802) || (inst_25803));
var state_25841__$1 = (function (){var statearr_25863 = state_25841;
(statearr_25863[(9)] = inst_25801__$1);

(statearr_25863[(14)] = inst_25800__$1);

return statearr_25863;
})();
if(cljs.core.truth_(inst_25804)){
var statearr_25864_25918 = state_25841__$1;
(statearr_25864_25918[(1)] = (23));

} else {
var statearr_25865_25919 = state_25841__$1;
(statearr_25865_25919[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (36))){
var inst_25791 = (state_25841[(12)]);
var inst_25768 = inst_25791;
var state_25841__$1 = (function (){var statearr_25866 = state_25841;
(statearr_25866[(7)] = inst_25768);

return statearr_25866;
})();
var statearr_25867_25920 = state_25841__$1;
(statearr_25867_25920[(2)] = null);

(statearr_25867_25920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (29))){
var inst_25815 = (state_25841[(11)]);
var state_25841__$1 = state_25841;
var statearr_25868_25921 = state_25841__$1;
(statearr_25868_25921[(2)] = inst_25815);

(statearr_25868_25921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (6))){
var state_25841__$1 = state_25841;
var statearr_25869_25922 = state_25841__$1;
(statearr_25869_25922[(2)] = false);

(statearr_25869_25922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (28))){
var inst_25811 = (state_25841[(2)]);
var inst_25812 = calc_state.call(null);
var inst_25768 = inst_25812;
var state_25841__$1 = (function (){var statearr_25870 = state_25841;
(statearr_25870[(15)] = inst_25811);

(statearr_25870[(7)] = inst_25768);

return statearr_25870;
})();
var statearr_25871_25923 = state_25841__$1;
(statearr_25871_25923[(2)] = null);

(statearr_25871_25923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (25))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25872_25924 = state_25841__$1;
(statearr_25872_25924[(2)] = inst_25837);

(statearr_25872_25924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (34))){
var inst_25835 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25873_25925 = state_25841__$1;
(statearr_25873_25925[(2)] = inst_25835);

(statearr_25873_25925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (17))){
var state_25841__$1 = state_25841;
var statearr_25874_25926 = state_25841__$1;
(statearr_25874_25926[(2)] = false);

(statearr_25874_25926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (3))){
var state_25841__$1 = state_25841;
var statearr_25875_25927 = state_25841__$1;
(statearr_25875_25927[(2)] = false);

(statearr_25875_25927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (12))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (2))){
var inst_25743 = (state_25841[(8)]);
var inst_25748 = inst_25743.cljs$lang$protocol_mask$partition0$;
var inst_25749 = (inst_25748 & (64));
var inst_25750 = inst_25743.cljs$core$ISeq$;
var inst_25751 = (cljs.core.PROTOCOL_SENTINEL === inst_25750);
var inst_25752 = ((inst_25749) || (inst_25751));
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25752)){
var statearr_25876_25928 = state_25841__$1;
(statearr_25876_25928[(1)] = (5));

} else {
var statearr_25877_25929 = state_25841__$1;
(statearr_25877_25929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (23))){
var inst_25800 = (state_25841[(14)]);
var inst_25806 = (inst_25800 == null);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25806)){
var statearr_25878_25930 = state_25841__$1;
(statearr_25878_25930[(1)] = (26));

} else {
var statearr_25879_25931 = state_25841__$1;
(statearr_25879_25931[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (35))){
var inst_25826 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25826)){
var statearr_25880_25932 = state_25841__$1;
(statearr_25880_25932[(1)] = (36));

} else {
var statearr_25881_25933 = state_25841__$1;
(statearr_25881_25933[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (19))){
var inst_25768 = (state_25841[(7)]);
var inst_25788 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25768);
var state_25841__$1 = state_25841;
var statearr_25882_25934 = state_25841__$1;
(statearr_25882_25934[(2)] = inst_25788);

(statearr_25882_25934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (11))){
var inst_25768 = (state_25841[(7)]);
var inst_25772 = (inst_25768 == null);
var inst_25773 = cljs.core.not.call(null,inst_25772);
var state_25841__$1 = state_25841;
if(inst_25773){
var statearr_25883_25935 = state_25841__$1;
(statearr_25883_25935[(1)] = (13));

} else {
var statearr_25884_25936 = state_25841__$1;
(statearr_25884_25936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (9))){
var inst_25743 = (state_25841[(8)]);
var state_25841__$1 = state_25841;
var statearr_25885_25937 = state_25841__$1;
(statearr_25885_25937[(2)] = inst_25743);

(statearr_25885_25937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (5))){
var state_25841__$1 = state_25841;
var statearr_25886_25938 = state_25841__$1;
(statearr_25886_25938[(2)] = true);

(statearr_25886_25938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (14))){
var state_25841__$1 = state_25841;
var statearr_25887_25939 = state_25841__$1;
(statearr_25887_25939[(2)] = false);

(statearr_25887_25939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (26))){
var inst_25801 = (state_25841[(9)]);
var inst_25808 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25801);
var state_25841__$1 = state_25841;
var statearr_25888_25940 = state_25841__$1;
(statearr_25888_25940[(2)] = inst_25808);

(statearr_25888_25940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (16))){
var state_25841__$1 = state_25841;
var statearr_25889_25941 = state_25841__$1;
(statearr_25889_25941[(2)] = true);

(statearr_25889_25941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (38))){
var inst_25831 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25890_25942 = state_25841__$1;
(statearr_25890_25942[(2)] = inst_25831);

(statearr_25890_25942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (30))){
var inst_25801 = (state_25841[(9)]);
var inst_25793 = (state_25841[(13)]);
var inst_25792 = (state_25841[(10)]);
var inst_25818 = cljs.core.empty_QMARK_.call(null,inst_25792);
var inst_25819 = inst_25793.call(null,inst_25801);
var inst_25820 = cljs.core.not.call(null,inst_25819);
var inst_25821 = ((inst_25818) && (inst_25820));
var state_25841__$1 = state_25841;
var statearr_25891_25943 = state_25841__$1;
(statearr_25891_25943[(2)] = inst_25821);

(statearr_25891_25943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (10))){
var inst_25743 = (state_25841[(8)]);
var inst_25764 = (state_25841[(2)]);
var inst_25765 = cljs.core.get.call(null,inst_25764,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25766 = cljs.core.get.call(null,inst_25764,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25767 = cljs.core.get.call(null,inst_25764,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25768 = inst_25743;
var state_25841__$1 = (function (){var statearr_25892 = state_25841;
(statearr_25892[(7)] = inst_25768);

(statearr_25892[(16)] = inst_25766);

(statearr_25892[(17)] = inst_25765);

(statearr_25892[(18)] = inst_25767);

return statearr_25892;
})();
var statearr_25893_25944 = state_25841__$1;
(statearr_25893_25944[(2)] = null);

(statearr_25893_25944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (18))){
var inst_25783 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25894_25945 = state_25841__$1;
(statearr_25894_25945[(2)] = inst_25783);

(statearr_25894_25945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (37))){
var state_25841__$1 = state_25841;
var statearr_25895_25946 = state_25841__$1;
(statearr_25895_25946[(2)] = null);

(statearr_25895_25946[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (8))){
var inst_25743 = (state_25841[(8)]);
var inst_25761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25743);
var state_25841__$1 = state_25841;
var statearr_25896_25947 = state_25841__$1;
(statearr_25896_25947[(2)] = inst_25761);

(statearr_25896_25947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24748__auto__,c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24749__auto__ = null;
var cljs$core$async$mix_$_state_machine__24749__auto____0 = (function (){
var statearr_25897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25897[(0)] = cljs$core$async$mix_$_state_machine__24749__auto__);

(statearr_25897[(1)] = (1));

return statearr_25897;
});
var cljs$core$async$mix_$_state_machine__24749__auto____1 = (function (state_25841){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e25898){if((e25898 instanceof Object)){
var ex__24752__auto__ = e25898;
var statearr_25899_25948 = state_25841;
(statearr_25899_25948[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25949 = state_25841;
state_25841 = G__25949;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24749__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24749__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24749__auto____0;
cljs$core$async$mix_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24749__auto____1;
return cljs$core$async$mix_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24845__auto__ = (function (){var statearr_25900 = f__24844__auto__.call(null);
(statearr_25900[(6)] = c__24843__auto___25901);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___25901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25951 = arguments.length;
switch (G__25951) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25955 = arguments.length;
switch (G__25955) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25953_SHARP_){
if(cljs.core.truth_(p1__25953_SHARP_.call(null,topic))){
return p1__25953_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25953_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25956 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25957){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25957 = meta25957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25958,meta25957__$1){
var self__ = this;
var _25958__$1 = this;
return (new cljs.core.async.t_cljs$core$async25956(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25957__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25958){
var self__ = this;
var _25958__$1 = this;
return self__.meta25957;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25957","meta25957",-1921023487,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25956";

cljs.core.async.t_cljs$core$async25956.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25956");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25956.
 */
cljs.core.async.__GT_t_cljs$core$async25956 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25957){
return (new cljs.core.async.t_cljs$core$async25956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25957));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25956(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24843__auto___26076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26076,mults,ensure_mult,p){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26076,mults,ensure_mult,p){
return (function (state_26030){
var state_val_26031 = (state_26030[(1)]);
if((state_val_26031 === (7))){
var inst_26026 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26032_26077 = state_26030__$1;
(statearr_26032_26077[(2)] = inst_26026);

(statearr_26032_26077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (20))){
var state_26030__$1 = state_26030;
var statearr_26033_26078 = state_26030__$1;
(statearr_26033_26078[(2)] = null);

(statearr_26033_26078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (1))){
var state_26030__$1 = state_26030;
var statearr_26034_26079 = state_26030__$1;
(statearr_26034_26079[(2)] = null);

(statearr_26034_26079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (24))){
var inst_26009 = (state_26030[(7)]);
var inst_26018 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26009);
var state_26030__$1 = state_26030;
var statearr_26035_26080 = state_26030__$1;
(statearr_26035_26080[(2)] = inst_26018);

(statearr_26035_26080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (4))){
var inst_25961 = (state_26030[(8)]);
var inst_25961__$1 = (state_26030[(2)]);
var inst_25962 = (inst_25961__$1 == null);
var state_26030__$1 = (function (){var statearr_26036 = state_26030;
(statearr_26036[(8)] = inst_25961__$1);

return statearr_26036;
})();
if(cljs.core.truth_(inst_25962)){
var statearr_26037_26081 = state_26030__$1;
(statearr_26037_26081[(1)] = (5));

} else {
var statearr_26038_26082 = state_26030__$1;
(statearr_26038_26082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (15))){
var inst_26003 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26039_26083 = state_26030__$1;
(statearr_26039_26083[(2)] = inst_26003);

(statearr_26039_26083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (21))){
var inst_26023 = (state_26030[(2)]);
var state_26030__$1 = (function (){var statearr_26040 = state_26030;
(statearr_26040[(9)] = inst_26023);

return statearr_26040;
})();
var statearr_26041_26084 = state_26030__$1;
(statearr_26041_26084[(2)] = null);

(statearr_26041_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (13))){
var inst_25985 = (state_26030[(10)]);
var inst_25987 = cljs.core.chunked_seq_QMARK_.call(null,inst_25985);
var state_26030__$1 = state_26030;
if(inst_25987){
var statearr_26042_26085 = state_26030__$1;
(statearr_26042_26085[(1)] = (16));

} else {
var statearr_26043_26086 = state_26030__$1;
(statearr_26043_26086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (22))){
var inst_26015 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
if(cljs.core.truth_(inst_26015)){
var statearr_26044_26087 = state_26030__$1;
(statearr_26044_26087[(1)] = (23));

} else {
var statearr_26045_26088 = state_26030__$1;
(statearr_26045_26088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (6))){
var inst_25961 = (state_26030[(8)]);
var inst_26009 = (state_26030[(7)]);
var inst_26011 = (state_26030[(11)]);
var inst_26009__$1 = topic_fn.call(null,inst_25961);
var inst_26010 = cljs.core.deref.call(null,mults);
var inst_26011__$1 = cljs.core.get.call(null,inst_26010,inst_26009__$1);
var state_26030__$1 = (function (){var statearr_26046 = state_26030;
(statearr_26046[(7)] = inst_26009__$1);

(statearr_26046[(11)] = inst_26011__$1);

return statearr_26046;
})();
if(cljs.core.truth_(inst_26011__$1)){
var statearr_26047_26089 = state_26030__$1;
(statearr_26047_26089[(1)] = (19));

} else {
var statearr_26048_26090 = state_26030__$1;
(statearr_26048_26090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (25))){
var inst_26020 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26049_26091 = state_26030__$1;
(statearr_26049_26091[(2)] = inst_26020);

(statearr_26049_26091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (17))){
var inst_25985 = (state_26030[(10)]);
var inst_25994 = cljs.core.first.call(null,inst_25985);
var inst_25995 = cljs.core.async.muxch_STAR_.call(null,inst_25994);
var inst_25996 = cljs.core.async.close_BANG_.call(null,inst_25995);
var inst_25997 = cljs.core.next.call(null,inst_25985);
var inst_25971 = inst_25997;
var inst_25972 = null;
var inst_25973 = (0);
var inst_25974 = (0);
var state_26030__$1 = (function (){var statearr_26050 = state_26030;
(statearr_26050[(12)] = inst_25974);

(statearr_26050[(13)] = inst_25972);

(statearr_26050[(14)] = inst_25973);

(statearr_26050[(15)] = inst_25996);

(statearr_26050[(16)] = inst_25971);

return statearr_26050;
})();
var statearr_26051_26092 = state_26030__$1;
(statearr_26051_26092[(2)] = null);

(statearr_26051_26092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (3))){
var inst_26028 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26030__$1,inst_26028);
} else {
if((state_val_26031 === (12))){
var inst_26005 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26052_26093 = state_26030__$1;
(statearr_26052_26093[(2)] = inst_26005);

(statearr_26052_26093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (2))){
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26030__$1,(4),ch);
} else {
if((state_val_26031 === (23))){
var state_26030__$1 = state_26030;
var statearr_26053_26094 = state_26030__$1;
(statearr_26053_26094[(2)] = null);

(statearr_26053_26094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (19))){
var inst_25961 = (state_26030[(8)]);
var inst_26011 = (state_26030[(11)]);
var inst_26013 = cljs.core.async.muxch_STAR_.call(null,inst_26011);
var state_26030__$1 = state_26030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26030__$1,(22),inst_26013,inst_25961);
} else {
if((state_val_26031 === (11))){
var inst_25985 = (state_26030[(10)]);
var inst_25971 = (state_26030[(16)]);
var inst_25985__$1 = cljs.core.seq.call(null,inst_25971);
var state_26030__$1 = (function (){var statearr_26054 = state_26030;
(statearr_26054[(10)] = inst_25985__$1);

return statearr_26054;
})();
if(inst_25985__$1){
var statearr_26055_26095 = state_26030__$1;
(statearr_26055_26095[(1)] = (13));

} else {
var statearr_26056_26096 = state_26030__$1;
(statearr_26056_26096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (9))){
var inst_26007 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26057_26097 = state_26030__$1;
(statearr_26057_26097[(2)] = inst_26007);

(statearr_26057_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (5))){
var inst_25968 = cljs.core.deref.call(null,mults);
var inst_25969 = cljs.core.vals.call(null,inst_25968);
var inst_25970 = cljs.core.seq.call(null,inst_25969);
var inst_25971 = inst_25970;
var inst_25972 = null;
var inst_25973 = (0);
var inst_25974 = (0);
var state_26030__$1 = (function (){var statearr_26058 = state_26030;
(statearr_26058[(12)] = inst_25974);

(statearr_26058[(13)] = inst_25972);

(statearr_26058[(14)] = inst_25973);

(statearr_26058[(16)] = inst_25971);

return statearr_26058;
})();
var statearr_26059_26098 = state_26030__$1;
(statearr_26059_26098[(2)] = null);

(statearr_26059_26098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (14))){
var state_26030__$1 = state_26030;
var statearr_26063_26099 = state_26030__$1;
(statearr_26063_26099[(2)] = null);

(statearr_26063_26099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (16))){
var inst_25985 = (state_26030[(10)]);
var inst_25989 = cljs.core.chunk_first.call(null,inst_25985);
var inst_25990 = cljs.core.chunk_rest.call(null,inst_25985);
var inst_25991 = cljs.core.count.call(null,inst_25989);
var inst_25971 = inst_25990;
var inst_25972 = inst_25989;
var inst_25973 = inst_25991;
var inst_25974 = (0);
var state_26030__$1 = (function (){var statearr_26064 = state_26030;
(statearr_26064[(12)] = inst_25974);

(statearr_26064[(13)] = inst_25972);

(statearr_26064[(14)] = inst_25973);

(statearr_26064[(16)] = inst_25971);

return statearr_26064;
})();
var statearr_26065_26100 = state_26030__$1;
(statearr_26065_26100[(2)] = null);

(statearr_26065_26100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (10))){
var inst_25974 = (state_26030[(12)]);
var inst_25972 = (state_26030[(13)]);
var inst_25973 = (state_26030[(14)]);
var inst_25971 = (state_26030[(16)]);
var inst_25979 = cljs.core._nth.call(null,inst_25972,inst_25974);
var inst_25980 = cljs.core.async.muxch_STAR_.call(null,inst_25979);
var inst_25981 = cljs.core.async.close_BANG_.call(null,inst_25980);
var inst_25982 = (inst_25974 + (1));
var tmp26060 = inst_25972;
var tmp26061 = inst_25973;
var tmp26062 = inst_25971;
var inst_25971__$1 = tmp26062;
var inst_25972__$1 = tmp26060;
var inst_25973__$1 = tmp26061;
var inst_25974__$1 = inst_25982;
var state_26030__$1 = (function (){var statearr_26066 = state_26030;
(statearr_26066[(12)] = inst_25974__$1);

(statearr_26066[(13)] = inst_25972__$1);

(statearr_26066[(14)] = inst_25973__$1);

(statearr_26066[(16)] = inst_25971__$1);

(statearr_26066[(17)] = inst_25981);

return statearr_26066;
})();
var statearr_26067_26101 = state_26030__$1;
(statearr_26067_26101[(2)] = null);

(statearr_26067_26101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (18))){
var inst_26000 = (state_26030[(2)]);
var state_26030__$1 = state_26030;
var statearr_26068_26102 = state_26030__$1;
(statearr_26068_26102[(2)] = inst_26000);

(statearr_26068_26102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26031 === (8))){
var inst_25974 = (state_26030[(12)]);
var inst_25973 = (state_26030[(14)]);
var inst_25976 = (inst_25974 < inst_25973);
var inst_25977 = inst_25976;
var state_26030__$1 = state_26030;
if(cljs.core.truth_(inst_25977)){
var statearr_26069_26103 = state_26030__$1;
(statearr_26069_26103[(1)] = (10));

} else {
var statearr_26070_26104 = state_26030__$1;
(statearr_26070_26104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26076,mults,ensure_mult,p))
;
return ((function (switch__24748__auto__,c__24843__auto___26076,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26071[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26071[(1)] = (1));

return statearr_26071;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26030){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26072){if((e26072 instanceof Object)){
var ex__24752__auto__ = e26072;
var statearr_26073_26105 = state_26030;
(statearr_26073_26105[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26106 = state_26030;
state_26030 = G__26106;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26076,mults,ensure_mult,p))
})();
var state__24845__auto__ = (function (){var statearr_26074 = f__24844__auto__.call(null);
(statearr_26074[(6)] = c__24843__auto___26076);

return statearr_26074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26076,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26108 = arguments.length;
switch (G__26108) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26111 = arguments.length;
switch (G__26111) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26114 = arguments.length;
switch (G__26114) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24843__auto___26181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26153){
var state_val_26154 = (state_26153[(1)]);
if((state_val_26154 === (7))){
var state_26153__$1 = state_26153;
var statearr_26155_26182 = state_26153__$1;
(statearr_26155_26182[(2)] = null);

(statearr_26155_26182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (1))){
var state_26153__$1 = state_26153;
var statearr_26156_26183 = state_26153__$1;
(statearr_26156_26183[(2)] = null);

(statearr_26156_26183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (4))){
var inst_26117 = (state_26153[(7)]);
var inst_26119 = (inst_26117 < cnt);
var state_26153__$1 = state_26153;
if(cljs.core.truth_(inst_26119)){
var statearr_26157_26184 = state_26153__$1;
(statearr_26157_26184[(1)] = (6));

} else {
var statearr_26158_26185 = state_26153__$1;
(statearr_26158_26185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (15))){
var inst_26149 = (state_26153[(2)]);
var state_26153__$1 = state_26153;
var statearr_26159_26186 = state_26153__$1;
(statearr_26159_26186[(2)] = inst_26149);

(statearr_26159_26186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (13))){
var inst_26142 = cljs.core.async.close_BANG_.call(null,out);
var state_26153__$1 = state_26153;
var statearr_26160_26187 = state_26153__$1;
(statearr_26160_26187[(2)] = inst_26142);

(statearr_26160_26187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (6))){
var state_26153__$1 = state_26153;
var statearr_26161_26188 = state_26153__$1;
(statearr_26161_26188[(2)] = null);

(statearr_26161_26188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (3))){
var inst_26151 = (state_26153[(2)]);
var state_26153__$1 = state_26153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26153__$1,inst_26151);
} else {
if((state_val_26154 === (12))){
var inst_26139 = (state_26153[(8)]);
var inst_26139__$1 = (state_26153[(2)]);
var inst_26140 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26139__$1);
var state_26153__$1 = (function (){var statearr_26162 = state_26153;
(statearr_26162[(8)] = inst_26139__$1);

return statearr_26162;
})();
if(cljs.core.truth_(inst_26140)){
var statearr_26163_26189 = state_26153__$1;
(statearr_26163_26189[(1)] = (13));

} else {
var statearr_26164_26190 = state_26153__$1;
(statearr_26164_26190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (2))){
var inst_26116 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26117 = (0);
var state_26153__$1 = (function (){var statearr_26165 = state_26153;
(statearr_26165[(9)] = inst_26116);

(statearr_26165[(7)] = inst_26117);

return statearr_26165;
})();
var statearr_26166_26191 = state_26153__$1;
(statearr_26166_26191[(2)] = null);

(statearr_26166_26191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (11))){
var inst_26117 = (state_26153[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26153,(10),Object,null,(9));
var inst_26126 = chs__$1.call(null,inst_26117);
var inst_26127 = done.call(null,inst_26117);
var inst_26128 = cljs.core.async.take_BANG_.call(null,inst_26126,inst_26127);
var state_26153__$1 = state_26153;
var statearr_26167_26192 = state_26153__$1;
(statearr_26167_26192[(2)] = inst_26128);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (9))){
var inst_26117 = (state_26153[(7)]);
var inst_26130 = (state_26153[(2)]);
var inst_26131 = (inst_26117 + (1));
var inst_26117__$1 = inst_26131;
var state_26153__$1 = (function (){var statearr_26168 = state_26153;
(statearr_26168[(7)] = inst_26117__$1);

(statearr_26168[(10)] = inst_26130);

return statearr_26168;
})();
var statearr_26169_26193 = state_26153__$1;
(statearr_26169_26193[(2)] = null);

(statearr_26169_26193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (5))){
var inst_26137 = (state_26153[(2)]);
var state_26153__$1 = (function (){var statearr_26170 = state_26153;
(statearr_26170[(11)] = inst_26137);

return statearr_26170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26153__$1,(12),dchan);
} else {
if((state_val_26154 === (14))){
var inst_26139 = (state_26153[(8)]);
var inst_26144 = cljs.core.apply.call(null,f,inst_26139);
var state_26153__$1 = state_26153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26153__$1,(16),out,inst_26144);
} else {
if((state_val_26154 === (16))){
var inst_26146 = (state_26153[(2)]);
var state_26153__$1 = (function (){var statearr_26171 = state_26153;
(statearr_26171[(12)] = inst_26146);

return statearr_26171;
})();
var statearr_26172_26194 = state_26153__$1;
(statearr_26172_26194[(2)] = null);

(statearr_26172_26194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (10))){
var inst_26121 = (state_26153[(2)]);
var inst_26122 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26153__$1 = (function (){var statearr_26173 = state_26153;
(statearr_26173[(13)] = inst_26121);

return statearr_26173;
})();
var statearr_26174_26195 = state_26153__$1;
(statearr_26174_26195[(2)] = inst_26122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26154 === (8))){
var inst_26135 = (state_26153[(2)]);
var state_26153__$1 = state_26153;
var statearr_26175_26196 = state_26153__$1;
(statearr_26175_26196[(2)] = inst_26135);

(statearr_26175_26196[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24748__auto__,c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26176[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26176[(1)] = (1));

return statearr_26176;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26153){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26177){if((e26177 instanceof Object)){
var ex__24752__auto__ = e26177;
var statearr_26178_26197 = state_26153;
(statearr_26178_26197[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26198 = state_26153;
state_26153 = G__26198;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24845__auto__ = (function (){var statearr_26179 = f__24844__auto__.call(null);
(statearr_26179[(6)] = c__24843__auto___26181);

return statearr_26179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26181,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26201 = arguments.length;
switch (G__26201) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26255,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26255,out){
return (function (state_26233){
var state_val_26234 = (state_26233[(1)]);
if((state_val_26234 === (7))){
var inst_26212 = (state_26233[(7)]);
var inst_26213 = (state_26233[(8)]);
var inst_26212__$1 = (state_26233[(2)]);
var inst_26213__$1 = cljs.core.nth.call(null,inst_26212__$1,(0),null);
var inst_26214 = cljs.core.nth.call(null,inst_26212__$1,(1),null);
var inst_26215 = (inst_26213__$1 == null);
var state_26233__$1 = (function (){var statearr_26235 = state_26233;
(statearr_26235[(7)] = inst_26212__$1);

(statearr_26235[(9)] = inst_26214);

(statearr_26235[(8)] = inst_26213__$1);

return statearr_26235;
})();
if(cljs.core.truth_(inst_26215)){
var statearr_26236_26256 = state_26233__$1;
(statearr_26236_26256[(1)] = (8));

} else {
var statearr_26237_26257 = state_26233__$1;
(statearr_26237_26257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (1))){
var inst_26202 = cljs.core.vec.call(null,chs);
var inst_26203 = inst_26202;
var state_26233__$1 = (function (){var statearr_26238 = state_26233;
(statearr_26238[(10)] = inst_26203);

return statearr_26238;
})();
var statearr_26239_26258 = state_26233__$1;
(statearr_26239_26258[(2)] = null);

(statearr_26239_26258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (4))){
var inst_26203 = (state_26233[(10)]);
var state_26233__$1 = state_26233;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26233__$1,(7),inst_26203);
} else {
if((state_val_26234 === (6))){
var inst_26229 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26240_26259 = state_26233__$1;
(statearr_26240_26259[(2)] = inst_26229);

(statearr_26240_26259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (3))){
var inst_26231 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26233__$1,inst_26231);
} else {
if((state_val_26234 === (2))){
var inst_26203 = (state_26233[(10)]);
var inst_26205 = cljs.core.count.call(null,inst_26203);
var inst_26206 = (inst_26205 > (0));
var state_26233__$1 = state_26233;
if(cljs.core.truth_(inst_26206)){
var statearr_26242_26260 = state_26233__$1;
(statearr_26242_26260[(1)] = (4));

} else {
var statearr_26243_26261 = state_26233__$1;
(statearr_26243_26261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (11))){
var inst_26203 = (state_26233[(10)]);
var inst_26222 = (state_26233[(2)]);
var tmp26241 = inst_26203;
var inst_26203__$1 = tmp26241;
var state_26233__$1 = (function (){var statearr_26244 = state_26233;
(statearr_26244[(11)] = inst_26222);

(statearr_26244[(10)] = inst_26203__$1);

return statearr_26244;
})();
var statearr_26245_26262 = state_26233__$1;
(statearr_26245_26262[(2)] = null);

(statearr_26245_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (9))){
var inst_26213 = (state_26233[(8)]);
var state_26233__$1 = state_26233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26233__$1,(11),out,inst_26213);
} else {
if((state_val_26234 === (5))){
var inst_26227 = cljs.core.async.close_BANG_.call(null,out);
var state_26233__$1 = state_26233;
var statearr_26246_26263 = state_26233__$1;
(statearr_26246_26263[(2)] = inst_26227);

(statearr_26246_26263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (10))){
var inst_26225 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26247_26264 = state_26233__$1;
(statearr_26247_26264[(2)] = inst_26225);

(statearr_26247_26264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (8))){
var inst_26212 = (state_26233[(7)]);
var inst_26214 = (state_26233[(9)]);
var inst_26213 = (state_26233[(8)]);
var inst_26203 = (state_26233[(10)]);
var inst_26217 = (function (){var cs = inst_26203;
var vec__26208 = inst_26212;
var v = inst_26213;
var c = inst_26214;
return ((function (cs,vec__26208,v,c,inst_26212,inst_26214,inst_26213,inst_26203,state_val_26234,c__24843__auto___26255,out){
return (function (p1__26199_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26199_SHARP_);
});
;})(cs,vec__26208,v,c,inst_26212,inst_26214,inst_26213,inst_26203,state_val_26234,c__24843__auto___26255,out))
})();
var inst_26218 = cljs.core.filterv.call(null,inst_26217,inst_26203);
var inst_26203__$1 = inst_26218;
var state_26233__$1 = (function (){var statearr_26248 = state_26233;
(statearr_26248[(10)] = inst_26203__$1);

return statearr_26248;
})();
var statearr_26249_26265 = state_26233__$1;
(statearr_26249_26265[(2)] = null);

(statearr_26249_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26255,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26255,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26250[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26250[(1)] = (1));

return statearr_26250;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26233){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26251){if((e26251 instanceof Object)){
var ex__24752__auto__ = e26251;
var statearr_26252_26266 = state_26233;
(statearr_26252_26266[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26267 = state_26233;
state_26233 = G__26267;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26255,out))
})();
var state__24845__auto__ = (function (){var statearr_26253 = f__24844__auto__.call(null);
(statearr_26253[(6)] = c__24843__auto___26255);

return statearr_26253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26255,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26269 = arguments.length;
switch (G__26269) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26314,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26314,out){
return (function (state_26293){
var state_val_26294 = (state_26293[(1)]);
if((state_val_26294 === (7))){
var inst_26275 = (state_26293[(7)]);
var inst_26275__$1 = (state_26293[(2)]);
var inst_26276 = (inst_26275__$1 == null);
var inst_26277 = cljs.core.not.call(null,inst_26276);
var state_26293__$1 = (function (){var statearr_26295 = state_26293;
(statearr_26295[(7)] = inst_26275__$1);

return statearr_26295;
})();
if(inst_26277){
var statearr_26296_26315 = state_26293__$1;
(statearr_26296_26315[(1)] = (8));

} else {
var statearr_26297_26316 = state_26293__$1;
(statearr_26297_26316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (1))){
var inst_26270 = (0);
var state_26293__$1 = (function (){var statearr_26298 = state_26293;
(statearr_26298[(8)] = inst_26270);

return statearr_26298;
})();
var statearr_26299_26317 = state_26293__$1;
(statearr_26299_26317[(2)] = null);

(statearr_26299_26317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (4))){
var state_26293__$1 = state_26293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26293__$1,(7),ch);
} else {
if((state_val_26294 === (6))){
var inst_26288 = (state_26293[(2)]);
var state_26293__$1 = state_26293;
var statearr_26300_26318 = state_26293__$1;
(statearr_26300_26318[(2)] = inst_26288);

(statearr_26300_26318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (3))){
var inst_26290 = (state_26293[(2)]);
var inst_26291 = cljs.core.async.close_BANG_.call(null,out);
var state_26293__$1 = (function (){var statearr_26301 = state_26293;
(statearr_26301[(9)] = inst_26290);

return statearr_26301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26293__$1,inst_26291);
} else {
if((state_val_26294 === (2))){
var inst_26270 = (state_26293[(8)]);
var inst_26272 = (inst_26270 < n);
var state_26293__$1 = state_26293;
if(cljs.core.truth_(inst_26272)){
var statearr_26302_26319 = state_26293__$1;
(statearr_26302_26319[(1)] = (4));

} else {
var statearr_26303_26320 = state_26293__$1;
(statearr_26303_26320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (11))){
var inst_26270 = (state_26293[(8)]);
var inst_26280 = (state_26293[(2)]);
var inst_26281 = (inst_26270 + (1));
var inst_26270__$1 = inst_26281;
var state_26293__$1 = (function (){var statearr_26304 = state_26293;
(statearr_26304[(8)] = inst_26270__$1);

(statearr_26304[(10)] = inst_26280);

return statearr_26304;
})();
var statearr_26305_26321 = state_26293__$1;
(statearr_26305_26321[(2)] = null);

(statearr_26305_26321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (9))){
var state_26293__$1 = state_26293;
var statearr_26306_26322 = state_26293__$1;
(statearr_26306_26322[(2)] = null);

(statearr_26306_26322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (5))){
var state_26293__$1 = state_26293;
var statearr_26307_26323 = state_26293__$1;
(statearr_26307_26323[(2)] = null);

(statearr_26307_26323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (10))){
var inst_26285 = (state_26293[(2)]);
var state_26293__$1 = state_26293;
var statearr_26308_26324 = state_26293__$1;
(statearr_26308_26324[(2)] = inst_26285);

(statearr_26308_26324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26294 === (8))){
var inst_26275 = (state_26293[(7)]);
var state_26293__$1 = state_26293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26293__$1,(11),out,inst_26275);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26314,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26314,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26309[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26309[(1)] = (1));

return statearr_26309;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26293){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26310){if((e26310 instanceof Object)){
var ex__24752__auto__ = e26310;
var statearr_26311_26325 = state_26293;
(statearr_26311_26325[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26326 = state_26293;
state_26293 = G__26326;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26314,out))
})();
var state__24845__auto__ = (function (){var statearr_26312 = f__24844__auto__.call(null);
(statearr_26312[(6)] = c__24843__auto___26314);

return statearr_26312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26314,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26328 = (function (f,ch,meta26329){
this.f = f;
this.ch = ch;
this.meta26329 = meta26329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26330,meta26329__$1){
var self__ = this;
var _26330__$1 = this;
return (new cljs.core.async.t_cljs$core$async26328(self__.f,self__.ch,meta26329__$1));
});

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26330){
var self__ = this;
var _26330__$1 = this;
return self__.meta26329;
});

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26331 = (function (f,ch,meta26329,_,fn1,meta26332){
this.f = f;
this.ch = ch;
this.meta26329 = meta26329;
this._ = _;
this.fn1 = fn1;
this.meta26332 = meta26332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26333,meta26332__$1){
var self__ = this;
var _26333__$1 = this;
return (new cljs.core.async.t_cljs$core$async26331(self__.f,self__.ch,self__.meta26329,self__._,self__.fn1,meta26332__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26333){
var self__ = this;
var _26333__$1 = this;
return self__.meta26332;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26327_SHARP_){
return f1.call(null,(((p1__26327_SHARP_ == null))?null:self__.f.call(null,p1__26327_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26329","meta26329",-858852854,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26328","cljs.core.async/t_cljs$core$async26328",1235903105,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26332","meta26332",-796859095,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26331";

cljs.core.async.t_cljs$core$async26331.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26331");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26331.
 */
cljs.core.async.__GT_t_cljs$core$async26331 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26331(f__$1,ch__$1,meta26329__$1,___$2,fn1__$1,meta26332){
return (new cljs.core.async.t_cljs$core$async26331(f__$1,ch__$1,meta26329__$1,___$2,fn1__$1,meta26332));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26331(self__.f,self__.ch,self__.meta26329,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26329","meta26329",-858852854,null)], null);
});

cljs.core.async.t_cljs$core$async26328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26328";

cljs.core.async.t_cljs$core$async26328.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26328");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26328.
 */
cljs.core.async.__GT_t_cljs$core$async26328 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26328(f__$1,ch__$1,meta26329){
return (new cljs.core.async.t_cljs$core$async26328(f__$1,ch__$1,meta26329));
});

}

return (new cljs.core.async.t_cljs$core$async26328(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26334 = (function (f,ch,meta26335){
this.f = f;
this.ch = ch;
this.meta26335 = meta26335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26336,meta26335__$1){
var self__ = this;
var _26336__$1 = this;
return (new cljs.core.async.t_cljs$core$async26334(self__.f,self__.ch,meta26335__$1));
});

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26336){
var self__ = this;
var _26336__$1 = this;
return self__.meta26335;
});

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26335","meta26335",-1153538414,null)], null);
});

cljs.core.async.t_cljs$core$async26334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26334";

cljs.core.async.t_cljs$core$async26334.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26334");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26334.
 */
cljs.core.async.__GT_t_cljs$core$async26334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26334(f__$1,ch__$1,meta26335){
return (new cljs.core.async.t_cljs$core$async26334(f__$1,ch__$1,meta26335));
});

}

return (new cljs.core.async.t_cljs$core$async26334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26337 = (function (p,ch,meta26338){
this.p = p;
this.ch = ch;
this.meta26338 = meta26338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26339,meta26338__$1){
var self__ = this;
var _26339__$1 = this;
return (new cljs.core.async.t_cljs$core$async26337(self__.p,self__.ch,meta26338__$1));
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26339){
var self__ = this;
var _26339__$1 = this;
return self__.meta26338;
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26338","meta26338",410530683,null)], null);
});

cljs.core.async.t_cljs$core$async26337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26337";

cljs.core.async.t_cljs$core$async26337.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26337");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26337.
 */
cljs.core.async.__GT_t_cljs$core$async26337 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26337(p__$1,ch__$1,meta26338){
return (new cljs.core.async.t_cljs$core$async26337(p__$1,ch__$1,meta26338));
});

}

return (new cljs.core.async.t_cljs$core$async26337(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26341 = arguments.length;
switch (G__26341) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26381,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26381,out){
return (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (7))){
var inst_26358 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26364_26382 = state_26362__$1;
(statearr_26364_26382[(2)] = inst_26358);

(statearr_26364_26382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (1))){
var state_26362__$1 = state_26362;
var statearr_26365_26383 = state_26362__$1;
(statearr_26365_26383[(2)] = null);

(statearr_26365_26383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (4))){
var inst_26344 = (state_26362[(7)]);
var inst_26344__$1 = (state_26362[(2)]);
var inst_26345 = (inst_26344__$1 == null);
var state_26362__$1 = (function (){var statearr_26366 = state_26362;
(statearr_26366[(7)] = inst_26344__$1);

return statearr_26366;
})();
if(cljs.core.truth_(inst_26345)){
var statearr_26367_26384 = state_26362__$1;
(statearr_26367_26384[(1)] = (5));

} else {
var statearr_26368_26385 = state_26362__$1;
(statearr_26368_26385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (6))){
var inst_26344 = (state_26362[(7)]);
var inst_26349 = p.call(null,inst_26344);
var state_26362__$1 = state_26362;
if(cljs.core.truth_(inst_26349)){
var statearr_26369_26386 = state_26362__$1;
(statearr_26369_26386[(1)] = (8));

} else {
var statearr_26370_26387 = state_26362__$1;
(statearr_26370_26387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26360 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (2))){
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26362__$1,(4),ch);
} else {
if((state_val_26363 === (11))){
var inst_26352 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26371_26388 = state_26362__$1;
(statearr_26371_26388[(2)] = inst_26352);

(statearr_26371_26388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (9))){
var state_26362__$1 = state_26362;
var statearr_26372_26389 = state_26362__$1;
(statearr_26372_26389[(2)] = null);

(statearr_26372_26389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (5))){
var inst_26347 = cljs.core.async.close_BANG_.call(null,out);
var state_26362__$1 = state_26362;
var statearr_26373_26390 = state_26362__$1;
(statearr_26373_26390[(2)] = inst_26347);

(statearr_26373_26390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (10))){
var inst_26355 = (state_26362[(2)]);
var state_26362__$1 = (function (){var statearr_26374 = state_26362;
(statearr_26374[(8)] = inst_26355);

return statearr_26374;
})();
var statearr_26375_26391 = state_26362__$1;
(statearr_26375_26391[(2)] = null);

(statearr_26375_26391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (8))){
var inst_26344 = (state_26362[(7)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26362__$1,(11),out,inst_26344);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26381,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26381,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26362){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__24752__auto__ = e26377;
var statearr_26378_26392 = state_26362;
(statearr_26378_26392[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26393 = state_26362;
state_26362 = G__26393;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26381,out))
})();
var state__24845__auto__ = (function (){var statearr_26379 = f__24844__auto__.call(null);
(statearr_26379[(6)] = c__24843__auto___26381);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26381,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26395 = arguments.length;
switch (G__26395) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__){
return (function (state_26458){
var state_val_26459 = (state_26458[(1)]);
if((state_val_26459 === (7))){
var inst_26454 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26460_26498 = state_26458__$1;
(statearr_26460_26498[(2)] = inst_26454);

(statearr_26460_26498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (20))){
var inst_26424 = (state_26458[(7)]);
var inst_26435 = (state_26458[(2)]);
var inst_26436 = cljs.core.next.call(null,inst_26424);
var inst_26410 = inst_26436;
var inst_26411 = null;
var inst_26412 = (0);
var inst_26413 = (0);
var state_26458__$1 = (function (){var statearr_26461 = state_26458;
(statearr_26461[(8)] = inst_26412);

(statearr_26461[(9)] = inst_26411);

(statearr_26461[(10)] = inst_26413);

(statearr_26461[(11)] = inst_26435);

(statearr_26461[(12)] = inst_26410);

return statearr_26461;
})();
var statearr_26462_26499 = state_26458__$1;
(statearr_26462_26499[(2)] = null);

(statearr_26462_26499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (1))){
var state_26458__$1 = state_26458;
var statearr_26463_26500 = state_26458__$1;
(statearr_26463_26500[(2)] = null);

(statearr_26463_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (4))){
var inst_26399 = (state_26458[(13)]);
var inst_26399__$1 = (state_26458[(2)]);
var inst_26400 = (inst_26399__$1 == null);
var state_26458__$1 = (function (){var statearr_26464 = state_26458;
(statearr_26464[(13)] = inst_26399__$1);

return statearr_26464;
})();
if(cljs.core.truth_(inst_26400)){
var statearr_26465_26501 = state_26458__$1;
(statearr_26465_26501[(1)] = (5));

} else {
var statearr_26466_26502 = state_26458__$1;
(statearr_26466_26502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (15))){
var state_26458__$1 = state_26458;
var statearr_26470_26503 = state_26458__$1;
(statearr_26470_26503[(2)] = null);

(statearr_26470_26503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (21))){
var state_26458__$1 = state_26458;
var statearr_26471_26504 = state_26458__$1;
(statearr_26471_26504[(2)] = null);

(statearr_26471_26504[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (13))){
var inst_26412 = (state_26458[(8)]);
var inst_26411 = (state_26458[(9)]);
var inst_26413 = (state_26458[(10)]);
var inst_26410 = (state_26458[(12)]);
var inst_26420 = (state_26458[(2)]);
var inst_26421 = (inst_26413 + (1));
var tmp26467 = inst_26412;
var tmp26468 = inst_26411;
var tmp26469 = inst_26410;
var inst_26410__$1 = tmp26469;
var inst_26411__$1 = tmp26468;
var inst_26412__$1 = tmp26467;
var inst_26413__$1 = inst_26421;
var state_26458__$1 = (function (){var statearr_26472 = state_26458;
(statearr_26472[(8)] = inst_26412__$1);

(statearr_26472[(14)] = inst_26420);

(statearr_26472[(9)] = inst_26411__$1);

(statearr_26472[(10)] = inst_26413__$1);

(statearr_26472[(12)] = inst_26410__$1);

return statearr_26472;
})();
var statearr_26473_26505 = state_26458__$1;
(statearr_26473_26505[(2)] = null);

(statearr_26473_26505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (22))){
var state_26458__$1 = state_26458;
var statearr_26474_26506 = state_26458__$1;
(statearr_26474_26506[(2)] = null);

(statearr_26474_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (6))){
var inst_26399 = (state_26458[(13)]);
var inst_26408 = f.call(null,inst_26399);
var inst_26409 = cljs.core.seq.call(null,inst_26408);
var inst_26410 = inst_26409;
var inst_26411 = null;
var inst_26412 = (0);
var inst_26413 = (0);
var state_26458__$1 = (function (){var statearr_26475 = state_26458;
(statearr_26475[(8)] = inst_26412);

(statearr_26475[(9)] = inst_26411);

(statearr_26475[(10)] = inst_26413);

(statearr_26475[(12)] = inst_26410);

return statearr_26475;
})();
var statearr_26476_26507 = state_26458__$1;
(statearr_26476_26507[(2)] = null);

(statearr_26476_26507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (17))){
var inst_26424 = (state_26458[(7)]);
var inst_26428 = cljs.core.chunk_first.call(null,inst_26424);
var inst_26429 = cljs.core.chunk_rest.call(null,inst_26424);
var inst_26430 = cljs.core.count.call(null,inst_26428);
var inst_26410 = inst_26429;
var inst_26411 = inst_26428;
var inst_26412 = inst_26430;
var inst_26413 = (0);
var state_26458__$1 = (function (){var statearr_26477 = state_26458;
(statearr_26477[(8)] = inst_26412);

(statearr_26477[(9)] = inst_26411);

(statearr_26477[(10)] = inst_26413);

(statearr_26477[(12)] = inst_26410);

return statearr_26477;
})();
var statearr_26478_26508 = state_26458__$1;
(statearr_26478_26508[(2)] = null);

(statearr_26478_26508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (3))){
var inst_26456 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26458__$1,inst_26456);
} else {
if((state_val_26459 === (12))){
var inst_26444 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26479_26509 = state_26458__$1;
(statearr_26479_26509[(2)] = inst_26444);

(statearr_26479_26509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (2))){
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26458__$1,(4),in$);
} else {
if((state_val_26459 === (23))){
var inst_26452 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26480_26510 = state_26458__$1;
(statearr_26480_26510[(2)] = inst_26452);

(statearr_26480_26510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (19))){
var inst_26439 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26481_26511 = state_26458__$1;
(statearr_26481_26511[(2)] = inst_26439);

(statearr_26481_26511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (11))){
var inst_26424 = (state_26458[(7)]);
var inst_26410 = (state_26458[(12)]);
var inst_26424__$1 = cljs.core.seq.call(null,inst_26410);
var state_26458__$1 = (function (){var statearr_26482 = state_26458;
(statearr_26482[(7)] = inst_26424__$1);

return statearr_26482;
})();
if(inst_26424__$1){
var statearr_26483_26512 = state_26458__$1;
(statearr_26483_26512[(1)] = (14));

} else {
var statearr_26484_26513 = state_26458__$1;
(statearr_26484_26513[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (9))){
var inst_26446 = (state_26458[(2)]);
var inst_26447 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26458__$1 = (function (){var statearr_26485 = state_26458;
(statearr_26485[(15)] = inst_26446);

return statearr_26485;
})();
if(cljs.core.truth_(inst_26447)){
var statearr_26486_26514 = state_26458__$1;
(statearr_26486_26514[(1)] = (21));

} else {
var statearr_26487_26515 = state_26458__$1;
(statearr_26487_26515[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (5))){
var inst_26402 = cljs.core.async.close_BANG_.call(null,out);
var state_26458__$1 = state_26458;
var statearr_26488_26516 = state_26458__$1;
(statearr_26488_26516[(2)] = inst_26402);

(statearr_26488_26516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (14))){
var inst_26424 = (state_26458[(7)]);
var inst_26426 = cljs.core.chunked_seq_QMARK_.call(null,inst_26424);
var state_26458__$1 = state_26458;
if(inst_26426){
var statearr_26489_26517 = state_26458__$1;
(statearr_26489_26517[(1)] = (17));

} else {
var statearr_26490_26518 = state_26458__$1;
(statearr_26490_26518[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (16))){
var inst_26442 = (state_26458[(2)]);
var state_26458__$1 = state_26458;
var statearr_26491_26519 = state_26458__$1;
(statearr_26491_26519[(2)] = inst_26442);

(statearr_26491_26519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26459 === (10))){
var inst_26411 = (state_26458[(9)]);
var inst_26413 = (state_26458[(10)]);
var inst_26418 = cljs.core._nth.call(null,inst_26411,inst_26413);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26458__$1,(13),out,inst_26418);
} else {
if((state_val_26459 === (18))){
var inst_26424 = (state_26458[(7)]);
var inst_26433 = cljs.core.first.call(null,inst_26424);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26458__$1,(20),out,inst_26433);
} else {
if((state_val_26459 === (8))){
var inst_26412 = (state_26458[(8)]);
var inst_26413 = (state_26458[(10)]);
var inst_26415 = (inst_26413 < inst_26412);
var inst_26416 = inst_26415;
var state_26458__$1 = state_26458;
if(cljs.core.truth_(inst_26416)){
var statearr_26492_26520 = state_26458__$1;
(statearr_26492_26520[(1)] = (10));

} else {
var statearr_26493_26521 = state_26458__$1;
(statearr_26493_26521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____0 = (function (){
var statearr_26494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26494[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__);

(statearr_26494[(1)] = (1));

return statearr_26494;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____1 = (function (state_26458){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26495){if((e26495 instanceof Object)){
var ex__24752__auto__ = e26495;
var statearr_26496_26522 = state_26458;
(statearr_26496_26522[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26523 = state_26458;
state_26458 = G__26523;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__ = function(state_26458){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____1.call(this,state_26458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24749__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__))
})();
var state__24845__auto__ = (function (){var statearr_26497 = f__24844__auto__.call(null);
(statearr_26497[(6)] = c__24843__auto__);

return statearr_26497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__))
);

return c__24843__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26525 = arguments.length;
switch (G__26525) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26528 = arguments.length;
switch (G__26528) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26531 = arguments.length;
switch (G__26531) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26578,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26578,out){
return (function (state_26555){
var state_val_26556 = (state_26555[(1)]);
if((state_val_26556 === (7))){
var inst_26550 = (state_26555[(2)]);
var state_26555__$1 = state_26555;
var statearr_26557_26579 = state_26555__$1;
(statearr_26557_26579[(2)] = inst_26550);

(statearr_26557_26579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (1))){
var inst_26532 = null;
var state_26555__$1 = (function (){var statearr_26558 = state_26555;
(statearr_26558[(7)] = inst_26532);

return statearr_26558;
})();
var statearr_26559_26580 = state_26555__$1;
(statearr_26559_26580[(2)] = null);

(statearr_26559_26580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (4))){
var inst_26535 = (state_26555[(8)]);
var inst_26535__$1 = (state_26555[(2)]);
var inst_26536 = (inst_26535__$1 == null);
var inst_26537 = cljs.core.not.call(null,inst_26536);
var state_26555__$1 = (function (){var statearr_26560 = state_26555;
(statearr_26560[(8)] = inst_26535__$1);

return statearr_26560;
})();
if(inst_26537){
var statearr_26561_26581 = state_26555__$1;
(statearr_26561_26581[(1)] = (5));

} else {
var statearr_26562_26582 = state_26555__$1;
(statearr_26562_26582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (6))){
var state_26555__$1 = state_26555;
var statearr_26563_26583 = state_26555__$1;
(statearr_26563_26583[(2)] = null);

(statearr_26563_26583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (3))){
var inst_26552 = (state_26555[(2)]);
var inst_26553 = cljs.core.async.close_BANG_.call(null,out);
var state_26555__$1 = (function (){var statearr_26564 = state_26555;
(statearr_26564[(9)] = inst_26552);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26555__$1,inst_26553);
} else {
if((state_val_26556 === (2))){
var state_26555__$1 = state_26555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26555__$1,(4),ch);
} else {
if((state_val_26556 === (11))){
var inst_26535 = (state_26555[(8)]);
var inst_26544 = (state_26555[(2)]);
var inst_26532 = inst_26535;
var state_26555__$1 = (function (){var statearr_26565 = state_26555;
(statearr_26565[(10)] = inst_26544);

(statearr_26565[(7)] = inst_26532);

return statearr_26565;
})();
var statearr_26566_26584 = state_26555__$1;
(statearr_26566_26584[(2)] = null);

(statearr_26566_26584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (9))){
var inst_26535 = (state_26555[(8)]);
var state_26555__$1 = state_26555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26555__$1,(11),out,inst_26535);
} else {
if((state_val_26556 === (5))){
var inst_26535 = (state_26555[(8)]);
var inst_26532 = (state_26555[(7)]);
var inst_26539 = cljs.core._EQ_.call(null,inst_26535,inst_26532);
var state_26555__$1 = state_26555;
if(inst_26539){
var statearr_26568_26585 = state_26555__$1;
(statearr_26568_26585[(1)] = (8));

} else {
var statearr_26569_26586 = state_26555__$1;
(statearr_26569_26586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (10))){
var inst_26547 = (state_26555[(2)]);
var state_26555__$1 = state_26555;
var statearr_26570_26587 = state_26555__$1;
(statearr_26570_26587[(2)] = inst_26547);

(statearr_26570_26587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26556 === (8))){
var inst_26532 = (state_26555[(7)]);
var tmp26567 = inst_26532;
var inst_26532__$1 = tmp26567;
var state_26555__$1 = (function (){var statearr_26571 = state_26555;
(statearr_26571[(7)] = inst_26532__$1);

return statearr_26571;
})();
var statearr_26572_26588 = state_26555__$1;
(statearr_26572_26588[(2)] = null);

(statearr_26572_26588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26578,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26578,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26573[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26573[(1)] = (1));

return statearr_26573;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26555){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26574){if((e26574 instanceof Object)){
var ex__24752__auto__ = e26574;
var statearr_26575_26589 = state_26555;
(statearr_26575_26589[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26590 = state_26555;
state_26555 = G__26590;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26578,out))
})();
var state__24845__auto__ = (function (){var statearr_26576 = f__24844__auto__.call(null);
(statearr_26576[(6)] = c__24843__auto___26578);

return statearr_26576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26578,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26592 = arguments.length;
switch (G__26592) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26658,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26658,out){
return (function (state_26630){
var state_val_26631 = (state_26630[(1)]);
if((state_val_26631 === (7))){
var inst_26626 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26632_26659 = state_26630__$1;
(statearr_26632_26659[(2)] = inst_26626);

(statearr_26632_26659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (1))){
var inst_26593 = (new Array(n));
var inst_26594 = inst_26593;
var inst_26595 = (0);
var state_26630__$1 = (function (){var statearr_26633 = state_26630;
(statearr_26633[(7)] = inst_26595);

(statearr_26633[(8)] = inst_26594);

return statearr_26633;
})();
var statearr_26634_26660 = state_26630__$1;
(statearr_26634_26660[(2)] = null);

(statearr_26634_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (4))){
var inst_26598 = (state_26630[(9)]);
var inst_26598__$1 = (state_26630[(2)]);
var inst_26599 = (inst_26598__$1 == null);
var inst_26600 = cljs.core.not.call(null,inst_26599);
var state_26630__$1 = (function (){var statearr_26635 = state_26630;
(statearr_26635[(9)] = inst_26598__$1);

return statearr_26635;
})();
if(inst_26600){
var statearr_26636_26661 = state_26630__$1;
(statearr_26636_26661[(1)] = (5));

} else {
var statearr_26637_26662 = state_26630__$1;
(statearr_26637_26662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (15))){
var inst_26620 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26638_26663 = state_26630__$1;
(statearr_26638_26663[(2)] = inst_26620);

(statearr_26638_26663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (13))){
var state_26630__$1 = state_26630;
var statearr_26639_26664 = state_26630__$1;
(statearr_26639_26664[(2)] = null);

(statearr_26639_26664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (6))){
var inst_26595 = (state_26630[(7)]);
var inst_26616 = (inst_26595 > (0));
var state_26630__$1 = state_26630;
if(cljs.core.truth_(inst_26616)){
var statearr_26640_26665 = state_26630__$1;
(statearr_26640_26665[(1)] = (12));

} else {
var statearr_26641_26666 = state_26630__$1;
(statearr_26641_26666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (3))){
var inst_26628 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26630__$1,inst_26628);
} else {
if((state_val_26631 === (12))){
var inst_26594 = (state_26630[(8)]);
var inst_26618 = cljs.core.vec.call(null,inst_26594);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26630__$1,(15),out,inst_26618);
} else {
if((state_val_26631 === (2))){
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26630__$1,(4),ch);
} else {
if((state_val_26631 === (11))){
var inst_26610 = (state_26630[(2)]);
var inst_26611 = (new Array(n));
var inst_26594 = inst_26611;
var inst_26595 = (0);
var state_26630__$1 = (function (){var statearr_26642 = state_26630;
(statearr_26642[(7)] = inst_26595);

(statearr_26642[(8)] = inst_26594);

(statearr_26642[(10)] = inst_26610);

return statearr_26642;
})();
var statearr_26643_26667 = state_26630__$1;
(statearr_26643_26667[(2)] = null);

(statearr_26643_26667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (9))){
var inst_26594 = (state_26630[(8)]);
var inst_26608 = cljs.core.vec.call(null,inst_26594);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26630__$1,(11),out,inst_26608);
} else {
if((state_val_26631 === (5))){
var inst_26603 = (state_26630[(11)]);
var inst_26595 = (state_26630[(7)]);
var inst_26594 = (state_26630[(8)]);
var inst_26598 = (state_26630[(9)]);
var inst_26602 = (inst_26594[inst_26595] = inst_26598);
var inst_26603__$1 = (inst_26595 + (1));
var inst_26604 = (inst_26603__$1 < n);
var state_26630__$1 = (function (){var statearr_26644 = state_26630;
(statearr_26644[(11)] = inst_26603__$1);

(statearr_26644[(12)] = inst_26602);

return statearr_26644;
})();
if(cljs.core.truth_(inst_26604)){
var statearr_26645_26668 = state_26630__$1;
(statearr_26645_26668[(1)] = (8));

} else {
var statearr_26646_26669 = state_26630__$1;
(statearr_26646_26669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (14))){
var inst_26623 = (state_26630[(2)]);
var inst_26624 = cljs.core.async.close_BANG_.call(null,out);
var state_26630__$1 = (function (){var statearr_26648 = state_26630;
(statearr_26648[(13)] = inst_26623);

return statearr_26648;
})();
var statearr_26649_26670 = state_26630__$1;
(statearr_26649_26670[(2)] = inst_26624);

(statearr_26649_26670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (10))){
var inst_26614 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26650_26671 = state_26630__$1;
(statearr_26650_26671[(2)] = inst_26614);

(statearr_26650_26671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (8))){
var inst_26603 = (state_26630[(11)]);
var inst_26594 = (state_26630[(8)]);
var tmp26647 = inst_26594;
var inst_26594__$1 = tmp26647;
var inst_26595 = inst_26603;
var state_26630__$1 = (function (){var statearr_26651 = state_26630;
(statearr_26651[(7)] = inst_26595);

(statearr_26651[(8)] = inst_26594__$1);

return statearr_26651;
})();
var statearr_26652_26672 = state_26630__$1;
(statearr_26652_26672[(2)] = null);

(statearr_26652_26672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26658,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26658,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26653[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26653[(1)] = (1));

return statearr_26653;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26630){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26654){if((e26654 instanceof Object)){
var ex__24752__auto__ = e26654;
var statearr_26655_26673 = state_26630;
(statearr_26655_26673[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26674 = state_26630;
state_26630 = G__26674;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26658,out))
})();
var state__24845__auto__ = (function (){var statearr_26656 = f__24844__auto__.call(null);
(statearr_26656[(6)] = c__24843__auto___26658);

return statearr_26656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26658,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26676 = arguments.length;
switch (G__26676) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24843__auto___26746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___26746,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___26746,out){
return (function (state_26718){
var state_val_26719 = (state_26718[(1)]);
if((state_val_26719 === (7))){
var inst_26714 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26720_26747 = state_26718__$1;
(statearr_26720_26747[(2)] = inst_26714);

(statearr_26720_26747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (1))){
var inst_26677 = [];
var inst_26678 = inst_26677;
var inst_26679 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26718__$1 = (function (){var statearr_26721 = state_26718;
(statearr_26721[(7)] = inst_26678);

(statearr_26721[(8)] = inst_26679);

return statearr_26721;
})();
var statearr_26722_26748 = state_26718__$1;
(statearr_26722_26748[(2)] = null);

(statearr_26722_26748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (4))){
var inst_26682 = (state_26718[(9)]);
var inst_26682__$1 = (state_26718[(2)]);
var inst_26683 = (inst_26682__$1 == null);
var inst_26684 = cljs.core.not.call(null,inst_26683);
var state_26718__$1 = (function (){var statearr_26723 = state_26718;
(statearr_26723[(9)] = inst_26682__$1);

return statearr_26723;
})();
if(inst_26684){
var statearr_26724_26749 = state_26718__$1;
(statearr_26724_26749[(1)] = (5));

} else {
var statearr_26725_26750 = state_26718__$1;
(statearr_26725_26750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (15))){
var inst_26708 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26726_26751 = state_26718__$1;
(statearr_26726_26751[(2)] = inst_26708);

(statearr_26726_26751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (13))){
var state_26718__$1 = state_26718;
var statearr_26727_26752 = state_26718__$1;
(statearr_26727_26752[(2)] = null);

(statearr_26727_26752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (6))){
var inst_26678 = (state_26718[(7)]);
var inst_26703 = inst_26678.length;
var inst_26704 = (inst_26703 > (0));
var state_26718__$1 = state_26718;
if(cljs.core.truth_(inst_26704)){
var statearr_26728_26753 = state_26718__$1;
(statearr_26728_26753[(1)] = (12));

} else {
var statearr_26729_26754 = state_26718__$1;
(statearr_26729_26754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (3))){
var inst_26716 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26718__$1,inst_26716);
} else {
if((state_val_26719 === (12))){
var inst_26678 = (state_26718[(7)]);
var inst_26706 = cljs.core.vec.call(null,inst_26678);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26718__$1,(15),out,inst_26706);
} else {
if((state_val_26719 === (2))){
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26718__$1,(4),ch);
} else {
if((state_val_26719 === (11))){
var inst_26682 = (state_26718[(9)]);
var inst_26686 = (state_26718[(10)]);
var inst_26696 = (state_26718[(2)]);
var inst_26697 = [];
var inst_26698 = inst_26697.push(inst_26682);
var inst_26678 = inst_26697;
var inst_26679 = inst_26686;
var state_26718__$1 = (function (){var statearr_26730 = state_26718;
(statearr_26730[(7)] = inst_26678);

(statearr_26730[(11)] = inst_26698);

(statearr_26730[(12)] = inst_26696);

(statearr_26730[(8)] = inst_26679);

return statearr_26730;
})();
var statearr_26731_26755 = state_26718__$1;
(statearr_26731_26755[(2)] = null);

(statearr_26731_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (9))){
var inst_26678 = (state_26718[(7)]);
var inst_26694 = cljs.core.vec.call(null,inst_26678);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26718__$1,(11),out,inst_26694);
} else {
if((state_val_26719 === (5))){
var inst_26682 = (state_26718[(9)]);
var inst_26686 = (state_26718[(10)]);
var inst_26679 = (state_26718[(8)]);
var inst_26686__$1 = f.call(null,inst_26682);
var inst_26687 = cljs.core._EQ_.call(null,inst_26686__$1,inst_26679);
var inst_26688 = cljs.core.keyword_identical_QMARK_.call(null,inst_26679,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26689 = ((inst_26687) || (inst_26688));
var state_26718__$1 = (function (){var statearr_26732 = state_26718;
(statearr_26732[(10)] = inst_26686__$1);

return statearr_26732;
})();
if(cljs.core.truth_(inst_26689)){
var statearr_26733_26756 = state_26718__$1;
(statearr_26733_26756[(1)] = (8));

} else {
var statearr_26734_26757 = state_26718__$1;
(statearr_26734_26757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (14))){
var inst_26711 = (state_26718[(2)]);
var inst_26712 = cljs.core.async.close_BANG_.call(null,out);
var state_26718__$1 = (function (){var statearr_26736 = state_26718;
(statearr_26736[(13)] = inst_26711);

return statearr_26736;
})();
var statearr_26737_26758 = state_26718__$1;
(statearr_26737_26758[(2)] = inst_26712);

(statearr_26737_26758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (10))){
var inst_26701 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26738_26759 = state_26718__$1;
(statearr_26738_26759[(2)] = inst_26701);

(statearr_26738_26759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (8))){
var inst_26682 = (state_26718[(9)]);
var inst_26686 = (state_26718[(10)]);
var inst_26678 = (state_26718[(7)]);
var inst_26691 = inst_26678.push(inst_26682);
var tmp26735 = inst_26678;
var inst_26678__$1 = tmp26735;
var inst_26679 = inst_26686;
var state_26718__$1 = (function (){var statearr_26739 = state_26718;
(statearr_26739[(14)] = inst_26691);

(statearr_26739[(7)] = inst_26678__$1);

(statearr_26739[(8)] = inst_26679);

return statearr_26739;
})();
var statearr_26740_26760 = state_26718__$1;
(statearr_26740_26760[(2)] = null);

(statearr_26740_26760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___26746,out))
;
return ((function (switch__24748__auto__,c__24843__auto___26746,out){
return (function() {
var cljs$core$async$state_machine__24749__auto__ = null;
var cljs$core$async$state_machine__24749__auto____0 = (function (){
var statearr_26741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26741[(0)] = cljs$core$async$state_machine__24749__auto__);

(statearr_26741[(1)] = (1));

return statearr_26741;
});
var cljs$core$async$state_machine__24749__auto____1 = (function (state_26718){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_26718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e26742){if((e26742 instanceof Object)){
var ex__24752__auto__ = e26742;
var statearr_26743_26761 = state_26718;
(statearr_26743_26761[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26762 = state_26718;
state_26718 = G__26762;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
cljs$core$async$state_machine__24749__auto__ = function(state_26718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24749__auto____1.call(this,state_26718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24749__auto____0;
cljs$core$async$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24749__auto____1;
return cljs$core$async$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___26746,out))
})();
var state__24845__auto__ = (function (){var statearr_26744 = f__24844__auto__.call(null);
(statearr_26744[(6)] = c__24843__auto___26746);

return statearr_26744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___26746,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1652343001044
