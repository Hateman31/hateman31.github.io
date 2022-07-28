goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14069 = arguments.length;
switch (G__14069) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14071 = (function (f,blockable,meta14072){
this.f = f;
this.blockable = blockable;
this.meta14072 = meta14072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14073,meta14072__$1){
var self__ = this;
var _14073__$1 = this;
return (new cljs.core.async.t_cljs$core$async14071(self__.f,self__.blockable,meta14072__$1));
}));

(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14073){
var self__ = this;
var _14073__$1 = this;
return self__.meta14072;
}));

(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14072","meta14072",652096791,null)], null);
}));

(cljs.core.async.t_cljs$core$async14071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14071");

(cljs.core.async.t_cljs$core$async14071.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14071.
 */
cljs.core.async.__GT_t_cljs$core$async14071 = (function cljs$core$async$__GT_t_cljs$core$async14071(f__$1,blockable__$1,meta14072){
return (new cljs.core.async.t_cljs$core$async14071(f__$1,blockable__$1,meta14072));
});

}

return (new cljs.core.async.t_cljs$core$async14071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14101 = arguments.length;
switch (G__14101) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14117 = arguments.length;
switch (G__14117) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__14137 = arguments.length;
switch (G__14137) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17932 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17932) : fn1.call(null,val_17932));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17932) : fn1.call(null,val_17932));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__14151 = arguments.length;
switch (G__14151) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17943 = n;
var x_17944 = (0);
while(true){
if((x_17944 < n__5636__auto___17943)){
(a[x_17944] = x_17944);

var G__17945 = (x_17944 + (1));
x_17944 = G__17945;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14182 = (function (flag,meta14183){
this.flag = flag;
this.meta14183 = meta14183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14184,meta14183__$1){
var self__ = this;
var _14184__$1 = this;
return (new cljs.core.async.t_cljs$core$async14182(self__.flag,meta14183__$1));
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14184){
var self__ = this;
var _14184__$1 = this;
return self__.meta14183;
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14183","meta14183",744735920,null)], null);
}));

(cljs.core.async.t_cljs$core$async14182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14182");

(cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14182.
 */
cljs.core.async.__GT_t_cljs$core$async14182 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14182(flag__$1,meta14183){
return (new cljs.core.async.t_cljs$core$async14182(flag__$1,meta14183));
});

}

return (new cljs.core.async.t_cljs$core$async14182(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14196 = (function (flag,cb,meta14197){
this.flag = flag;
this.cb = cb;
this.meta14197 = meta14197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14198,meta14197__$1){
var self__ = this;
var _14198__$1 = this;
return (new cljs.core.async.t_cljs$core$async14196(self__.flag,self__.cb,meta14197__$1));
}));

(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14198){
var self__ = this;
var _14198__$1 = this;
return self__.meta14197;
}));

(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14197","meta14197",-1026026943,null)], null);
}));

(cljs.core.async.t_cljs$core$async14196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14196");

(cljs.core.async.t_cljs$core$async14196.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14196.
 */
cljs.core.async.__GT_t_cljs$core$async14196 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14196(flag__$1,cb__$1,meta14197){
return (new cljs.core.async.t_cljs$core$async14196(flag__$1,cb__$1,meta14197));
});

}

return (new cljs.core.async.t_cljs$core$async14196(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14208_SHARP_){
var G__14211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14208_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14211) : fret.call(null,G__14211));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14209_SHARP_){
var G__14216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14209_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14216) : fret.call(null,G__14216));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17964 = (i + (1));
i = G__17964;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___17972 = arguments.length;
var i__5770__auto___17973 = (0);
while(true){
if((i__5770__auto___17973 < len__5769__auto___17972)){
args__5775__auto__.push((arguments[i__5770__auto___17973]));

var G__17974 = (i__5770__auto___17973 + (1));
i__5770__auto___17973 = G__17974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14238){
var map__14239 = p__14238;
var map__14239__$1 = cljs.core.__destructure_map(map__14239);
var opts = map__14239__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14232){
var G__14233 = cljs.core.first(seq14232);
var seq14232__$1 = cljs.core.next(seq14232);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14233,seq14232__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__14245 = arguments.length;
switch (G__14245) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13958__auto___17994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_14331){
var state_val_14332 = (state_14331[(1)]);
if((state_val_14332 === (7))){
var inst_14321 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14351_18000 = state_14331__$1;
(statearr_14351_18000[(2)] = inst_14321);

(statearr_14351_18000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (1))){
var state_14331__$1 = state_14331;
var statearr_14352_18008 = state_14331__$1;
(statearr_14352_18008[(2)] = null);

(statearr_14352_18008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (4))){
var inst_14293 = (state_14331[(7)]);
var inst_14293__$1 = (state_14331[(2)]);
var inst_14296 = (inst_14293__$1 == null);
var state_14331__$1 = (function (){var statearr_14367 = state_14331;
(statearr_14367[(7)] = inst_14293__$1);

return statearr_14367;
})();
if(cljs.core.truth_(inst_14296)){
var statearr_14368_18019 = state_14331__$1;
(statearr_14368_18019[(1)] = (5));

} else {
var statearr_14369_18041 = state_14331__$1;
(statearr_14369_18041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (13))){
var state_14331__$1 = state_14331;
var statearr_14378_18047 = state_14331__$1;
(statearr_14378_18047[(2)] = null);

(statearr_14378_18047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (6))){
var inst_14293 = (state_14331[(7)]);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14331__$1,(11),to,inst_14293);
} else {
if((state_val_14332 === (3))){
var inst_14324 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14331__$1,inst_14324);
} else {
if((state_val_14332 === (12))){
var state_14331__$1 = state_14331;
var statearr_14386_18052 = state_14331__$1;
(statearr_14386_18052[(2)] = null);

(statearr_14386_18052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (2))){
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14331__$1,(4),from);
} else {
if((state_val_14332 === (11))){
var inst_14313 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
if(cljs.core.truth_(inst_14313)){
var statearr_14389_18058 = state_14331__$1;
(statearr_14389_18058[(1)] = (12));

} else {
var statearr_14394_18059 = state_14331__$1;
(statearr_14394_18059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (9))){
var state_14331__$1 = state_14331;
var statearr_14400_18061 = state_14331__$1;
(statearr_14400_18061[(2)] = null);

(statearr_14400_18061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (5))){
var state_14331__$1 = state_14331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14404_18063 = state_14331__$1;
(statearr_14404_18063[(1)] = (8));

} else {
var statearr_14405_18064 = state_14331__$1;
(statearr_14405_18064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (14))){
var inst_14319 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14408_18066 = state_14331__$1;
(statearr_14408_18066[(2)] = inst_14319);

(statearr_14408_18066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (10))){
var inst_14307 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14413_18069 = state_14331__$1;
(statearr_14413_18069[(2)] = inst_14307);

(statearr_14413_18069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (8))){
var inst_14303 = cljs.core.async.close_BANG_(to);
var state_14331__$1 = state_14331;
var statearr_14417_18073 = state_14331__$1;
(statearr_14417_18073[(2)] = inst_14303);

(statearr_14417_18073[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_14424 = [null,null,null,null,null,null,null,null];
(statearr_14424[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_14424[(1)] = (1));

return statearr_14424;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_14331){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14331);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e14427){var ex__13651__auto__ = e14427;
var statearr_14429_18074 = state_14331;
(statearr_14429_18074[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14331[(4)]))){
var statearr_14430_18075 = state_14331;
(statearr_14430_18075[(1)] = cljs.core.first((state_14331[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_14331;
state_14331 = G__18076;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_14331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_14331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_14438 = f__13959__auto__();
(statearr_14438[(6)] = c__13958__auto___17994);

return statearr_14438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14443){
var vec__14446 = p__14443;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14446,(1),null);
var job = vec__14446;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13958__auto___18085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_14456){
var state_val_14458 = (state_14456[(1)]);
if((state_val_14458 === (1))){
var state_14456__$1 = state_14456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14456__$1,(2),res,v);
} else {
if((state_val_14458 === (2))){
var inst_14453 = (state_14456[(2)]);
var inst_14454 = cljs.core.async.close_BANG_(res);
var state_14456__$1 = (function (){var statearr_14462 = state_14456;
(statearr_14462[(7)] = inst_14453);

return statearr_14462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14456__$1,inst_14454);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_14469 = [null,null,null,null,null,null,null,null];
(statearr_14469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__);

(statearr_14469[(1)] = (1));

return statearr_14469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1 = (function (state_14456){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14456);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e14476){var ex__13651__auto__ = e14476;
var statearr_14477_18100 = state_14456;
(statearr_14477_18100[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14456[(4)]))){
var statearr_14479_18102 = state_14456;
(statearr_14479_18102[(1)] = cljs.core.first((state_14456[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18105 = state_14456;
state_14456 = G__18105;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_14500 = f__13959__auto__();
(statearr_14500[(6)] = c__13958__auto___18085);

return statearr_14500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14501){
var vec__14502 = p__14501;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(1),null);
var job = vec__14502;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18111 = n;
var __18112 = (0);
while(true){
if((__18112 < n__5636__auto___18111)){
var G__14506_18113 = type;
var G__14506_18114__$1 = (((G__14506_18113 instanceof cljs.core.Keyword))?G__14506_18113.fqn:null);
switch (G__14506_18114__$1) {
case "compute":
var c__13958__auto___18116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18112,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = ((function (__18112,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function (state_14555){
var state_val_14556 = (state_14555[(1)]);
if((state_val_14556 === (1))){
var state_14555__$1 = state_14555;
var statearr_14564_18123 = state_14555__$1;
(statearr_14564_18123[(2)] = null);

(statearr_14564_18123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (2))){
var state_14555__$1 = state_14555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14555__$1,(4),jobs);
} else {
if((state_val_14556 === (3))){
var inst_14553 = (state_14555[(2)]);
var state_14555__$1 = state_14555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14555__$1,inst_14553);
} else {
if((state_val_14556 === (4))){
var inst_14512 = (state_14555[(2)]);
var inst_14534 = process__$1(inst_14512);
var state_14555__$1 = state_14555;
if(cljs.core.truth_(inst_14534)){
var statearr_14570_18130 = state_14555__$1;
(statearr_14570_18130[(1)] = (5));

} else {
var statearr_14571_18131 = state_14555__$1;
(statearr_14571_18131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (5))){
var state_14555__$1 = state_14555;
var statearr_14573_18132 = state_14555__$1;
(statearr_14573_18132[(2)] = null);

(statearr_14573_18132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (6))){
var state_14555__$1 = state_14555;
var statearr_14574_18133 = state_14555__$1;
(statearr_14574_18133[(2)] = null);

(statearr_14574_18133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14556 === (7))){
var inst_14548 = (state_14555[(2)]);
var state_14555__$1 = state_14555;
var statearr_14575_18136 = state_14555__$1;
(statearr_14575_18136[(2)] = inst_14548);

(statearr_14575_18136[(1)] = (3));


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
});})(__18112,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
;
return ((function (__18112,switch__13647__auto__,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_14576 = [null,null,null,null,null,null,null];
(statearr_14576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__);

(statearr_14576[(1)] = (1));

return statearr_14576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1 = (function (state_14555){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14555);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e14581){var ex__13651__auto__ = e14581;
var statearr_14582_18140 = state_14555;
(statearr_14582_18140[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14555[(4)]))){
var statearr_14583_18143 = state_14555;
(statearr_14583_18143[(1)] = cljs.core.first((state_14555[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18145 = state_14555;
state_14555 = G__18145;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = function(state_14555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1.call(this,state_14555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__;
})()
;})(__18112,switch__13647__auto__,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
})();
var state__13960__auto__ = (function (){var statearr_14584 = f__13959__auto__();
(statearr_14584[(6)] = c__13958__auto___18116);

return statearr_14584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
});})(__18112,c__13958__auto___18116,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
);


break;
case "async":
var c__13958__auto___18147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18112,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = ((function (__18112,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function (state_14597){
var state_val_14598 = (state_14597[(1)]);
if((state_val_14598 === (1))){
var state_14597__$1 = state_14597;
var statearr_14599_18153 = state_14597__$1;
(statearr_14599_18153[(2)] = null);

(statearr_14599_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (2))){
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14597__$1,(4),jobs);
} else {
if((state_val_14598 === (3))){
var inst_14595 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14597__$1,inst_14595);
} else {
if((state_val_14598 === (4))){
var inst_14587 = (state_14597[(2)]);
var inst_14588 = async(inst_14587);
var state_14597__$1 = state_14597;
if(cljs.core.truth_(inst_14588)){
var statearr_14603_18158 = state_14597__$1;
(statearr_14603_18158[(1)] = (5));

} else {
var statearr_14604_18159 = state_14597__$1;
(statearr_14604_18159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (5))){
var state_14597__$1 = state_14597;
var statearr_14605_18160 = state_14597__$1;
(statearr_14605_18160[(2)] = null);

(statearr_14605_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (6))){
var state_14597__$1 = state_14597;
var statearr_14606_18161 = state_14597__$1;
(statearr_14606_18161[(2)] = null);

(statearr_14606_18161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (7))){
var inst_14593 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
var statearr_14631_18162 = state_14597__$1;
(statearr_14631_18162[(2)] = inst_14593);

(statearr_14631_18162[(1)] = (3));


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
});})(__18112,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
;
return ((function (__18112,switch__13647__auto__,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_14661 = [null,null,null,null,null,null,null];
(statearr_14661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__);

(statearr_14661[(1)] = (1));

return statearr_14661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1 = (function (state_14597){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14597);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e14662){var ex__13651__auto__ = e14662;
var statearr_14663_18166 = state_14597;
(statearr_14663_18166[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14597[(4)]))){
var statearr_14666_18167 = state_14597;
(statearr_14666_18167[(1)] = cljs.core.first((state_14597[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18168 = state_14597;
state_14597 = G__18168;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__;
})()
;})(__18112,switch__13647__auto__,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
})();
var state__13960__auto__ = (function (){var statearr_14671 = f__13959__auto__();
(statearr_14671[(6)] = c__13958__auto___18147);

return statearr_14671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
});})(__18112,c__13958__auto___18147,G__14506_18113,G__14506_18114__$1,n__5636__auto___18111,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14506_18114__$1)].join('')));

}

var G__18170 = (__18112 + (1));
__18112 = G__18170;
continue;
} else {
}
break;
}

var c__13958__auto___18171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_14707){
var state_val_14708 = (state_14707[(1)]);
if((state_val_14708 === (7))){
var inst_14703 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
var statearr_14721_18176 = state_14707__$1;
(statearr_14721_18176[(2)] = inst_14703);

(statearr_14721_18176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (1))){
var state_14707__$1 = state_14707;
var statearr_14728_18182 = state_14707__$1;
(statearr_14728_18182[(2)] = null);

(statearr_14728_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (4))){
var inst_14677 = (state_14707[(7)]);
var inst_14677__$1 = (state_14707[(2)]);
var inst_14678 = (inst_14677__$1 == null);
var state_14707__$1 = (function (){var statearr_14733 = state_14707;
(statearr_14733[(7)] = inst_14677__$1);

return statearr_14733;
})();
if(cljs.core.truth_(inst_14678)){
var statearr_14736_18185 = state_14707__$1;
(statearr_14736_18185[(1)] = (5));

} else {
var statearr_14737_18188 = state_14707__$1;
(statearr_14737_18188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (6))){
var inst_14677 = (state_14707[(7)]);
var inst_14685 = (state_14707[(8)]);
var inst_14685__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14695 = [inst_14677,inst_14685__$1];
var inst_14696 = (new cljs.core.PersistentVector(null,2,(5),inst_14694,inst_14695,null));
var state_14707__$1 = (function (){var statearr_14738 = state_14707;
(statearr_14738[(8)] = inst_14685__$1);

return statearr_14738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14707__$1,(8),jobs,inst_14696);
} else {
if((state_val_14708 === (3))){
var inst_14705 = (state_14707[(2)]);
var state_14707__$1 = state_14707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14707__$1,inst_14705);
} else {
if((state_val_14708 === (2))){
var state_14707__$1 = state_14707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14707__$1,(4),from);
} else {
if((state_val_14708 === (9))){
var inst_14700 = (state_14707[(2)]);
var state_14707__$1 = (function (){var statearr_14750 = state_14707;
(statearr_14750[(9)] = inst_14700);

return statearr_14750;
})();
var statearr_14756_18219 = state_14707__$1;
(statearr_14756_18219[(2)] = null);

(statearr_14756_18219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (5))){
var inst_14683 = cljs.core.async.close_BANG_(jobs);
var state_14707__$1 = state_14707;
var statearr_14762_18221 = state_14707__$1;
(statearr_14762_18221[(2)] = inst_14683);

(statearr_14762_18221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14708 === (8))){
var inst_14685 = (state_14707[(8)]);
var inst_14698 = (state_14707[(2)]);
var state_14707__$1 = (function (){var statearr_14764 = state_14707;
(statearr_14764[(10)] = inst_14698);

return statearr_14764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14707__$1,(9),results,inst_14685);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_14812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__);

(statearr_14812[(1)] = (1));

return statearr_14812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1 = (function (state_14707){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14707);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e14813){var ex__13651__auto__ = e14813;
var statearr_14822_18228 = state_14707;
(statearr_14822_18228[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14707[(4)]))){
var statearr_14831_18229 = state_14707;
(statearr_14831_18229[(1)] = cljs.core.first((state_14707[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18234 = state_14707;
state_14707 = G__18234;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = function(state_14707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1.call(this,state_14707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_14834 = f__13959__auto__();
(statearr_14834[(6)] = c__13958__auto___18171);

return statearr_14834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


var c__13958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_14908){
var state_val_14909 = (state_14908[(1)]);
if((state_val_14909 === (7))){
var inst_14904 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14930_18240 = state_14908__$1;
(statearr_14930_18240[(2)] = inst_14904);

(statearr_14930_18240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (20))){
var state_14908__$1 = state_14908;
var statearr_14932_18241 = state_14908__$1;
(statearr_14932_18241[(2)] = null);

(statearr_14932_18241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (1))){
var state_14908__$1 = state_14908;
var statearr_14935_18243 = state_14908__$1;
(statearr_14935_18243[(2)] = null);

(statearr_14935_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (4))){
var inst_14841 = (state_14908[(7)]);
var inst_14841__$1 = (state_14908[(2)]);
var inst_14842 = (inst_14841__$1 == null);
var state_14908__$1 = (function (){var statearr_14938 = state_14908;
(statearr_14938[(7)] = inst_14841__$1);

return statearr_14938;
})();
if(cljs.core.truth_(inst_14842)){
var statearr_14940_18244 = state_14908__$1;
(statearr_14940_18244[(1)] = (5));

} else {
var statearr_14942_18245 = state_14908__$1;
(statearr_14942_18245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (15))){
var inst_14885 = (state_14908[(8)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14908__$1,(18),to,inst_14885);
} else {
if((state_val_14909 === (21))){
var inst_14898 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14946_18250 = state_14908__$1;
(statearr_14946_18250[(2)] = inst_14898);

(statearr_14946_18250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (13))){
var inst_14900 = (state_14908[(2)]);
var state_14908__$1 = (function (){var statearr_14956 = state_14908;
(statearr_14956[(9)] = inst_14900);

return statearr_14956;
})();
var statearr_14957_18252 = state_14908__$1;
(statearr_14957_18252[(2)] = null);

(statearr_14957_18252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (6))){
var inst_14841 = (state_14908[(7)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(11),inst_14841);
} else {
if((state_val_14909 === (17))){
var inst_14893 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
if(cljs.core.truth_(inst_14893)){
var statearr_14960_18255 = state_14908__$1;
(statearr_14960_18255[(1)] = (19));

} else {
var statearr_14961_18257 = state_14908__$1;
(statearr_14961_18257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (3))){
var inst_14906 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14908__$1,inst_14906);
} else {
if((state_val_14909 === (12))){
var inst_14873 = (state_14908[(10)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(14),inst_14873);
} else {
if((state_val_14909 === (2))){
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(4),results);
} else {
if((state_val_14909 === (19))){
var state_14908__$1 = state_14908;
var statearr_14965_18264 = state_14908__$1;
(statearr_14965_18264[(2)] = null);

(statearr_14965_18264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (11))){
var inst_14873 = (state_14908[(2)]);
var state_14908__$1 = (function (){var statearr_14966 = state_14908;
(statearr_14966[(10)] = inst_14873);

return statearr_14966;
})();
var statearr_14969_18269 = state_14908__$1;
(statearr_14969_18269[(2)] = null);

(statearr_14969_18269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (9))){
var state_14908__$1 = state_14908;
var statearr_14995_18273 = state_14908__$1;
(statearr_14995_18273[(2)] = null);

(statearr_14995_18273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (5))){
var state_14908__$1 = state_14908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14996_18274 = state_14908__$1;
(statearr_14996_18274[(1)] = (8));

} else {
var statearr_14998_18277 = state_14908__$1;
(statearr_14998_18277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (14))){
var inst_14887 = (state_14908[(11)]);
var inst_14885 = (state_14908[(8)]);
var inst_14885__$1 = (state_14908[(2)]);
var inst_14886 = (inst_14885__$1 == null);
var inst_14887__$1 = cljs.core.not(inst_14886);
var state_14908__$1 = (function (){var statearr_14999 = state_14908;
(statearr_14999[(11)] = inst_14887__$1);

(statearr_14999[(8)] = inst_14885__$1);

return statearr_14999;
})();
if(inst_14887__$1){
var statearr_15000_18280 = state_14908__$1;
(statearr_15000_18280[(1)] = (15));

} else {
var statearr_15001_18282 = state_14908__$1;
(statearr_15001_18282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (16))){
var inst_14887 = (state_14908[(11)]);
var state_14908__$1 = state_14908;
var statearr_15002_18286 = state_14908__$1;
(statearr_15002_18286[(2)] = inst_14887);

(statearr_15002_18286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (10))){
var inst_14867 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15018_18287 = state_14908__$1;
(statearr_15018_18287[(2)] = inst_14867);

(statearr_15018_18287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (18))){
var inst_14890 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15019_18291 = state_14908__$1;
(statearr_15019_18291[(2)] = inst_14890);

(statearr_15019_18291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (8))){
var inst_14845 = cljs.core.async.close_BANG_(to);
var state_14908__$1 = state_14908;
var statearr_15020_18293 = state_14908__$1;
(statearr_15020_18293[(2)] = inst_14845);

(statearr_15020_18293[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_15022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__);

(statearr_15022[(1)] = (1));

return statearr_15022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1 = (function (state_14908){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_14908);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15024){var ex__13651__auto__ = e15024;
var statearr_15026_18299 = state_14908;
(statearr_15026_18299[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_14908[(4)]))){
var statearr_15027_18300 = state_14908;
(statearr_15027_18300[(1)] = cljs.core.first((state_14908[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18301 = state_14908;
state_14908 = G__18301;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__ = function(state_14908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1.call(this,state_14908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15028 = f__13959__auto__();
(statearr_15028[(6)] = c__13958__auto__);

return statearr_15028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

return c__13958__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15032 = arguments.length;
switch (G__15032) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15042 = arguments.length;
switch (G__15042) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15063 = arguments.length;
switch (G__15063) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13958__auto___18328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15110){
var state_val_15111 = (state_15110[(1)]);
if((state_val_15111 === (7))){
var inst_15105 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15115_18334 = state_15110__$1;
(statearr_15115_18334[(2)] = inst_15105);

(statearr_15115_18334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (1))){
var state_15110__$1 = state_15110;
var statearr_15117_18336 = state_15110__$1;
(statearr_15117_18336[(2)] = null);

(statearr_15117_18336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (4))){
var inst_15083 = (state_15110[(7)]);
var inst_15083__$1 = (state_15110[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var state_15110__$1 = (function (){var statearr_15120 = state_15110;
(statearr_15120[(7)] = inst_15083__$1);

return statearr_15120;
})();
if(cljs.core.truth_(inst_15084)){
var statearr_15121_18341 = state_15110__$1;
(statearr_15121_18341[(1)] = (5));

} else {
var statearr_15122_18342 = state_15110__$1;
(statearr_15122_18342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (13))){
var state_15110__$1 = state_15110;
var statearr_15123_18344 = state_15110__$1;
(statearr_15123_18344[(2)] = null);

(statearr_15123_18344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (6))){
var inst_15083 = (state_15110[(7)]);
var inst_15091 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15083) : p.call(null,inst_15083));
var state_15110__$1 = state_15110;
if(cljs.core.truth_(inst_15091)){
var statearr_15125_18349 = state_15110__$1;
(statearr_15125_18349[(1)] = (9));

} else {
var statearr_15126_18350 = state_15110__$1;
(statearr_15126_18350[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (3))){
var inst_15107 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15110__$1,inst_15107);
} else {
if((state_val_15111 === (12))){
var state_15110__$1 = state_15110;
var statearr_15128_18353 = state_15110__$1;
(statearr_15128_18353[(2)] = null);

(statearr_15128_18353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (2))){
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15110__$1,(4),ch);
} else {
if((state_val_15111 === (11))){
var inst_15083 = (state_15110[(7)]);
var inst_15095 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15110__$1,(8),inst_15095,inst_15083);
} else {
if((state_val_15111 === (9))){
var state_15110__$1 = state_15110;
var statearr_15132_18354 = state_15110__$1;
(statearr_15132_18354[(2)] = tc);

(statearr_15132_18354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (5))){
var inst_15088 = cljs.core.async.close_BANG_(tc);
var inst_15089 = cljs.core.async.close_BANG_(fc);
var state_15110__$1 = (function (){var statearr_15134 = state_15110;
(statearr_15134[(8)] = inst_15088);

return statearr_15134;
})();
var statearr_15135_18358 = state_15110__$1;
(statearr_15135_18358[(2)] = inst_15089);

(statearr_15135_18358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (14))){
var inst_15103 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
var statearr_15136_18359 = state_15110__$1;
(statearr_15136_18359[(2)] = inst_15103);

(statearr_15136_18359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (10))){
var state_15110__$1 = state_15110;
var statearr_15138_18361 = state_15110__$1;
(statearr_15138_18361[(2)] = fc);

(statearr_15138_18361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15111 === (8))){
var inst_15097 = (state_15110[(2)]);
var state_15110__$1 = state_15110;
if(cljs.core.truth_(inst_15097)){
var statearr_15139_18364 = state_15110__$1;
(statearr_15139_18364[(1)] = (12));

} else {
var statearr_15140_18365 = state_15110__$1;
(statearr_15140_18365[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_15142 = [null,null,null,null,null,null,null,null,null];
(statearr_15142[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_15142[(1)] = (1));

return statearr_15142;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_15110){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15110);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15144){var ex__13651__auto__ = e15144;
var statearr_15145_18377 = state_15110;
(statearr_15145_18377[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15110[(4)]))){
var statearr_15146_18380 = state_15110;
(statearr_15146_18380[(1)] = cljs.core.first((state_15110[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18382 = state_15110;
state_15110 = G__18382;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_15110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_15110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15150 = f__13959__auto__();
(statearr_15150[(6)] = c__13958__auto___18328);

return statearr_15150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15182){
var state_val_15183 = (state_15182[(1)]);
if((state_val_15183 === (7))){
var inst_15178 = (state_15182[(2)]);
var state_15182__$1 = state_15182;
var statearr_15193_18388 = state_15182__$1;
(statearr_15193_18388[(2)] = inst_15178);

(statearr_15193_18388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (1))){
var inst_15161 = init;
var inst_15162 = inst_15161;
var state_15182__$1 = (function (){var statearr_15195 = state_15182;
(statearr_15195[(7)] = inst_15162);

return statearr_15195;
})();
var statearr_15200_18391 = state_15182__$1;
(statearr_15200_18391[(2)] = null);

(statearr_15200_18391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (4))){
var inst_15165 = (state_15182[(8)]);
var inst_15165__$1 = (state_15182[(2)]);
var inst_15166 = (inst_15165__$1 == null);
var state_15182__$1 = (function (){var statearr_15208 = state_15182;
(statearr_15208[(8)] = inst_15165__$1);

return statearr_15208;
})();
if(cljs.core.truth_(inst_15166)){
var statearr_15211_18396 = state_15182__$1;
(statearr_15211_18396[(1)] = (5));

} else {
var statearr_15212_18397 = state_15182__$1;
(statearr_15212_18397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (6))){
var inst_15169 = (state_15182[(9)]);
var inst_15165 = (state_15182[(8)]);
var inst_15162 = (state_15182[(7)]);
var inst_15169__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15162,inst_15165) : f.call(null,inst_15162,inst_15165));
var inst_15170 = cljs.core.reduced_QMARK_(inst_15169__$1);
var state_15182__$1 = (function (){var statearr_15214 = state_15182;
(statearr_15214[(9)] = inst_15169__$1);

return statearr_15214;
})();
if(inst_15170){
var statearr_15215_18399 = state_15182__$1;
(statearr_15215_18399[(1)] = (8));

} else {
var statearr_15216_18400 = state_15182__$1;
(statearr_15216_18400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (3))){
var inst_15180 = (state_15182[(2)]);
var state_15182__$1 = state_15182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15182__$1,inst_15180);
} else {
if((state_val_15183 === (2))){
var state_15182__$1 = state_15182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15182__$1,(4),ch);
} else {
if((state_val_15183 === (9))){
var inst_15169 = (state_15182[(9)]);
var inst_15162 = inst_15169;
var state_15182__$1 = (function (){var statearr_15218 = state_15182;
(statearr_15218[(7)] = inst_15162);

return statearr_15218;
})();
var statearr_15219_18403 = state_15182__$1;
(statearr_15219_18403[(2)] = null);

(statearr_15219_18403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (5))){
var inst_15162 = (state_15182[(7)]);
var state_15182__$1 = state_15182;
var statearr_15220_18408 = state_15182__$1;
(statearr_15220_18408[(2)] = inst_15162);

(statearr_15220_18408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (10))){
var inst_15176 = (state_15182[(2)]);
var state_15182__$1 = state_15182;
var statearr_15221_18414 = state_15182__$1;
(statearr_15221_18414[(2)] = inst_15176);

(statearr_15221_18414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15183 === (8))){
var inst_15169 = (state_15182[(9)]);
var inst_15172 = cljs.core.deref(inst_15169);
var state_15182__$1 = state_15182;
var statearr_15223_18420 = state_15182__$1;
(statearr_15223_18420[(2)] = inst_15172);

(statearr_15223_18420[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13648__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13648__auto____0 = (function (){
var statearr_15227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15227[(0)] = cljs$core$async$reduce_$_state_machine__13648__auto__);

(statearr_15227[(1)] = (1));

return statearr_15227;
});
var cljs$core$async$reduce_$_state_machine__13648__auto____1 = (function (state_15182){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15182);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15228){var ex__13651__auto__ = e15228;
var statearr_15231_18428 = state_15182;
(statearr_15231_18428[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15182[(4)]))){
var statearr_15232_18429 = state_15182;
(statearr_15232_18429[(1)] = cljs.core.first((state_15182[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18430 = state_15182;
state_15182 = G__18430;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13648__auto__ = function(state_15182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13648__auto____1.call(this,state_15182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13648__auto____0;
cljs$core$async$reduce_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13648__auto____1;
return cljs$core$async$reduce_$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15239 = f__13959__auto__();
(statearr_15239[(6)] = c__13958__auto__);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

return c__13958__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15251){
var state_val_15252 = (state_15251[(1)]);
if((state_val_15252 === (1))){
var inst_15246 = cljs.core.async.reduce(f__$1,init,ch);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15251__$1,(2),inst_15246);
} else {
if((state_val_15252 === (2))){
var inst_15248 = (state_15251[(2)]);
var inst_15249 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15248) : f__$1.call(null,inst_15248));
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15251__$1,inst_15249);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13648__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13648__auto____0 = (function (){
var statearr_15254 = [null,null,null,null,null,null,null];
(statearr_15254[(0)] = cljs$core$async$transduce_$_state_machine__13648__auto__);

(statearr_15254[(1)] = (1));

return statearr_15254;
});
var cljs$core$async$transduce_$_state_machine__13648__auto____1 = (function (state_15251){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15251);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15255){var ex__13651__auto__ = e15255;
var statearr_15256_18436 = state_15251;
(statearr_15256_18436[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15251[(4)]))){
var statearr_15257_18441 = state_15251;
(statearr_15257_18441[(1)] = cljs.core.first((state_15251[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18444 = state_15251;
state_15251 = G__18444;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13648__auto__ = function(state_15251){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13648__auto____1.call(this,state_15251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13648__auto____0;
cljs$core$async$transduce_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13648__auto____1;
return cljs$core$async$transduce_$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15261 = f__13959__auto__();
(statearr_15261[(6)] = c__13958__auto__);

return statearr_15261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

return c__13958__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15267 = arguments.length;
switch (G__15267) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15303){
var state_val_15306 = (state_15303[(1)]);
if((state_val_15306 === (7))){
var inst_15278 = (state_15303[(2)]);
var state_15303__$1 = state_15303;
var statearr_15311_18457 = state_15303__$1;
(statearr_15311_18457[(2)] = inst_15278);

(statearr_15311_18457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (1))){
var inst_15272 = cljs.core.seq(coll);
var inst_15273 = inst_15272;
var state_15303__$1 = (function (){var statearr_15312 = state_15303;
(statearr_15312[(7)] = inst_15273);

return statearr_15312;
})();
var statearr_15313_18458 = state_15303__$1;
(statearr_15313_18458[(2)] = null);

(statearr_15313_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (4))){
var inst_15273 = (state_15303[(7)]);
var inst_15276 = cljs.core.first(inst_15273);
var state_15303__$1 = state_15303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15303__$1,(7),ch,inst_15276);
} else {
if((state_val_15306 === (13))){
var inst_15297 = (state_15303[(2)]);
var state_15303__$1 = state_15303;
var statearr_15317_18459 = state_15303__$1;
(statearr_15317_18459[(2)] = inst_15297);

(statearr_15317_18459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (6))){
var inst_15281 = (state_15303[(2)]);
var state_15303__$1 = state_15303;
if(cljs.core.truth_(inst_15281)){
var statearr_15318_18461 = state_15303__$1;
(statearr_15318_18461[(1)] = (8));

} else {
var statearr_15319_18462 = state_15303__$1;
(statearr_15319_18462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (3))){
var inst_15301 = (state_15303[(2)]);
var state_15303__$1 = state_15303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15303__$1,inst_15301);
} else {
if((state_val_15306 === (12))){
var state_15303__$1 = state_15303;
var statearr_15324_18463 = state_15303__$1;
(statearr_15324_18463[(2)] = null);

(statearr_15324_18463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (2))){
var inst_15273 = (state_15303[(7)]);
var state_15303__$1 = state_15303;
if(cljs.core.truth_(inst_15273)){
var statearr_15325_18464 = state_15303__$1;
(statearr_15325_18464[(1)] = (4));

} else {
var statearr_15326_18465 = state_15303__$1;
(statearr_15326_18465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (11))){
var inst_15294 = cljs.core.async.close_BANG_(ch);
var state_15303__$1 = state_15303;
var statearr_15328_18468 = state_15303__$1;
(statearr_15328_18468[(2)] = inst_15294);

(statearr_15328_18468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (9))){
var state_15303__$1 = state_15303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15330_18473 = state_15303__$1;
(statearr_15330_18473[(1)] = (11));

} else {
var statearr_15336_18474 = state_15303__$1;
(statearr_15336_18474[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (5))){
var inst_15273 = (state_15303[(7)]);
var state_15303__$1 = state_15303;
var statearr_15338_18475 = state_15303__$1;
(statearr_15338_18475[(2)] = inst_15273);

(statearr_15338_18475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (10))){
var inst_15299 = (state_15303[(2)]);
var state_15303__$1 = state_15303;
var statearr_15339_18479 = state_15303__$1;
(statearr_15339_18479[(2)] = inst_15299);

(statearr_15339_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (8))){
var inst_15273 = (state_15303[(7)]);
var inst_15283 = cljs.core.next(inst_15273);
var inst_15273__$1 = inst_15283;
var state_15303__$1 = (function (){var statearr_15343 = state_15303;
(statearr_15343[(7)] = inst_15273__$1);

return statearr_15343;
})();
var statearr_15345_18480 = state_15303__$1;
(statearr_15345_18480[(2)] = null);

(statearr_15345_18480[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_15353 = [null,null,null,null,null,null,null,null];
(statearr_15353[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_15353[(1)] = (1));

return statearr_15353;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_15303){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15303);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15354){var ex__13651__auto__ = e15354;
var statearr_15356_18482 = state_15303;
(statearr_15356_18482[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15303[(4)]))){
var statearr_15357_18483 = state_15303;
(statearr_15357_18483[(1)] = cljs.core.first((state_15303[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18484 = state_15303;
state_15303 = G__18484;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_15303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_15303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15360 = f__13959__auto__();
(statearr_15360[(6)] = c__13958__auto__);

return statearr_15360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

return c__13958__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15368 = arguments.length;
switch (G__15368) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18490 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18490(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18494 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18494(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18496 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18496(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18508 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18508(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15400 = (function (ch,cs,meta15401){
this.ch = ch;
this.cs = cs;
this.meta15401 = meta15401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15402,meta15401__$1){
var self__ = this;
var _15402__$1 = this;
return (new cljs.core.async.t_cljs$core$async15400(self__.ch,self__.cs,meta15401__$1));
}));

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15402){
var self__ = this;
var _15402__$1 = this;
return self__.meta15401;
}));

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15401","meta15401",1415676502,null)], null);
}));

(cljs.core.async.t_cljs$core$async15400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15400");

(cljs.core.async.t_cljs$core$async15400.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15400.
 */
cljs.core.async.__GT_t_cljs$core$async15400 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15400(ch__$1,cs__$1,meta15401){
return (new cljs.core.async.t_cljs$core$async15400(ch__$1,cs__$1,meta15401));
});

}

return (new cljs.core.async.t_cljs$core$async15400(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13958__auto___18523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15568){
var state_val_15569 = (state_15568[(1)]);
if((state_val_15569 === (7))){
var inst_15559 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15578_18533 = state_15568__$1;
(statearr_15578_18533[(2)] = inst_15559);

(statearr_15578_18533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (20))){
var inst_15455 = (state_15568[(7)]);
var inst_15469 = cljs.core.first(inst_15455);
var inst_15470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15469,(0),null);
var inst_15471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15469,(1),null);
var state_15568__$1 = (function (){var statearr_15583 = state_15568;
(statearr_15583[(8)] = inst_15470);

return statearr_15583;
})();
if(cljs.core.truth_(inst_15471)){
var statearr_15584_18534 = state_15568__$1;
(statearr_15584_18534[(1)] = (22));

} else {
var statearr_15585_18535 = state_15568__$1;
(statearr_15585_18535[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (27))){
var inst_15418 = (state_15568[(9)]);
var inst_15506 = (state_15568[(10)]);
var inst_15499 = (state_15568[(11)]);
var inst_15501 = (state_15568[(12)]);
var inst_15506__$1 = cljs.core._nth(inst_15499,inst_15501);
var inst_15507 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15506__$1,inst_15418,done);
var state_15568__$1 = (function (){var statearr_15586 = state_15568;
(statearr_15586[(10)] = inst_15506__$1);

return statearr_15586;
})();
if(cljs.core.truth_(inst_15507)){
var statearr_15587_18536 = state_15568__$1;
(statearr_15587_18536[(1)] = (30));

} else {
var statearr_15589_18537 = state_15568__$1;
(statearr_15589_18537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (1))){
var state_15568__$1 = state_15568;
var statearr_15590_18540 = state_15568__$1;
(statearr_15590_18540[(2)] = null);

(statearr_15590_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (24))){
var inst_15455 = (state_15568[(7)]);
var inst_15476 = (state_15568[(2)]);
var inst_15477 = cljs.core.next(inst_15455);
var inst_15427 = inst_15477;
var inst_15428 = null;
var inst_15429 = (0);
var inst_15430 = (0);
var state_15568__$1 = (function (){var statearr_15594 = state_15568;
(statearr_15594[(13)] = inst_15427);

(statearr_15594[(14)] = inst_15429);

(statearr_15594[(15)] = inst_15476);

(statearr_15594[(16)] = inst_15430);

(statearr_15594[(17)] = inst_15428);

return statearr_15594;
})();
var statearr_15595_18543 = state_15568__$1;
(statearr_15595_18543[(2)] = null);

(statearr_15595_18543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (39))){
var state_15568__$1 = state_15568;
var statearr_15603_18544 = state_15568__$1;
(statearr_15603_18544[(2)] = null);

(statearr_15603_18544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (4))){
var inst_15418 = (state_15568[(9)]);
var inst_15418__$1 = (state_15568[(2)]);
var inst_15419 = (inst_15418__$1 == null);
var state_15568__$1 = (function (){var statearr_15608 = state_15568;
(statearr_15608[(9)] = inst_15418__$1);

return statearr_15608;
})();
if(cljs.core.truth_(inst_15419)){
var statearr_15610_18545 = state_15568__$1;
(statearr_15610_18545[(1)] = (5));

} else {
var statearr_15611_18546 = state_15568__$1;
(statearr_15611_18546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (15))){
var inst_15427 = (state_15568[(13)]);
var inst_15429 = (state_15568[(14)]);
var inst_15430 = (state_15568[(16)]);
var inst_15428 = (state_15568[(17)]);
var inst_15445 = (state_15568[(2)]);
var inst_15451 = (inst_15430 + (1));
var tmp15600 = inst_15427;
var tmp15601 = inst_15429;
var tmp15602 = inst_15428;
var inst_15427__$1 = tmp15600;
var inst_15428__$1 = tmp15602;
var inst_15429__$1 = tmp15601;
var inst_15430__$1 = inst_15451;
var state_15568__$1 = (function (){var statearr_15612 = state_15568;
(statearr_15612[(13)] = inst_15427__$1);

(statearr_15612[(14)] = inst_15429__$1);

(statearr_15612[(16)] = inst_15430__$1);

(statearr_15612[(18)] = inst_15445);

(statearr_15612[(17)] = inst_15428__$1);

return statearr_15612;
})();
var statearr_15613_18547 = state_15568__$1;
(statearr_15613_18547[(2)] = null);

(statearr_15613_18547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (21))){
var inst_15480 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15617_18548 = state_15568__$1;
(statearr_15617_18548[(2)] = inst_15480);

(statearr_15617_18548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (31))){
var inst_15506 = (state_15568[(10)]);
var inst_15511 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15506);
var state_15568__$1 = state_15568;
var statearr_15618_18556 = state_15568__$1;
(statearr_15618_18556[(2)] = inst_15511);

(statearr_15618_18556[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (32))){
var inst_15500 = (state_15568[(19)]);
var inst_15499 = (state_15568[(11)]);
var inst_15498 = (state_15568[(20)]);
var inst_15501 = (state_15568[(12)]);
var inst_15513 = (state_15568[(2)]);
var inst_15514 = (inst_15501 + (1));
var tmp15614 = inst_15500;
var tmp15615 = inst_15499;
var tmp15616 = inst_15498;
var inst_15498__$1 = tmp15616;
var inst_15499__$1 = tmp15615;
var inst_15500__$1 = tmp15614;
var inst_15501__$1 = inst_15514;
var state_15568__$1 = (function (){var statearr_15622 = state_15568;
(statearr_15622[(19)] = inst_15500__$1);

(statearr_15622[(11)] = inst_15499__$1);

(statearr_15622[(21)] = inst_15513);

(statearr_15622[(20)] = inst_15498__$1);

(statearr_15622[(12)] = inst_15501__$1);

return statearr_15622;
})();
var statearr_15623_18557 = state_15568__$1;
(statearr_15623_18557[(2)] = null);

(statearr_15623_18557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (40))){
var inst_15530 = (state_15568[(22)]);
var inst_15534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15530);
var state_15568__$1 = state_15568;
var statearr_15624_18559 = state_15568__$1;
(statearr_15624_18559[(2)] = inst_15534);

(statearr_15624_18559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (33))){
var inst_15517 = (state_15568[(23)]);
var inst_15520 = cljs.core.chunked_seq_QMARK_(inst_15517);
var state_15568__$1 = state_15568;
if(inst_15520){
var statearr_15625_18560 = state_15568__$1;
(statearr_15625_18560[(1)] = (36));

} else {
var statearr_15626_18561 = state_15568__$1;
(statearr_15626_18561[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (13))){
var inst_15439 = (state_15568[(24)]);
var inst_15442 = cljs.core.async.close_BANG_(inst_15439);
var state_15568__$1 = state_15568;
var statearr_15628_18562 = state_15568__$1;
(statearr_15628_18562[(2)] = inst_15442);

(statearr_15628_18562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (22))){
var inst_15470 = (state_15568[(8)]);
var inst_15473 = cljs.core.async.close_BANG_(inst_15470);
var state_15568__$1 = state_15568;
var statearr_15638_18563 = state_15568__$1;
(statearr_15638_18563[(2)] = inst_15473);

(statearr_15638_18563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (36))){
var inst_15517 = (state_15568[(23)]);
var inst_15524 = cljs.core.chunk_first(inst_15517);
var inst_15525 = cljs.core.chunk_rest(inst_15517);
var inst_15526 = cljs.core.count(inst_15524);
var inst_15498 = inst_15525;
var inst_15499 = inst_15524;
var inst_15500 = inst_15526;
var inst_15501 = (0);
var state_15568__$1 = (function (){var statearr_15641 = state_15568;
(statearr_15641[(19)] = inst_15500);

(statearr_15641[(11)] = inst_15499);

(statearr_15641[(20)] = inst_15498);

(statearr_15641[(12)] = inst_15501);

return statearr_15641;
})();
var statearr_15646_18569 = state_15568__$1;
(statearr_15646_18569[(2)] = null);

(statearr_15646_18569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (41))){
var inst_15517 = (state_15568[(23)]);
var inst_15536 = (state_15568[(2)]);
var inst_15537 = cljs.core.next(inst_15517);
var inst_15498 = inst_15537;
var inst_15499 = null;
var inst_15500 = (0);
var inst_15501 = (0);
var state_15568__$1 = (function (){var statearr_15647 = state_15568;
(statearr_15647[(19)] = inst_15500);

(statearr_15647[(25)] = inst_15536);

(statearr_15647[(11)] = inst_15499);

(statearr_15647[(20)] = inst_15498);

(statearr_15647[(12)] = inst_15501);

return statearr_15647;
})();
var statearr_15649_18572 = state_15568__$1;
(statearr_15649_18572[(2)] = null);

(statearr_15649_18572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (43))){
var state_15568__$1 = state_15568;
var statearr_15654_18573 = state_15568__$1;
(statearr_15654_18573[(2)] = null);

(statearr_15654_18573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (29))){
var inst_15545 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15655_18574 = state_15568__$1;
(statearr_15655_18574[(2)] = inst_15545);

(statearr_15655_18574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (44))){
var inst_15556 = (state_15568[(2)]);
var state_15568__$1 = (function (){var statearr_15656 = state_15568;
(statearr_15656[(26)] = inst_15556);

return statearr_15656;
})();
var statearr_15657_18575 = state_15568__$1;
(statearr_15657_18575[(2)] = null);

(statearr_15657_18575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (6))){
var inst_15490 = (state_15568[(27)]);
var inst_15489 = cljs.core.deref(cs);
var inst_15490__$1 = cljs.core.keys(inst_15489);
var inst_15491 = cljs.core.count(inst_15490__$1);
var inst_15492 = cljs.core.reset_BANG_(dctr,inst_15491);
var inst_15497 = cljs.core.seq(inst_15490__$1);
var inst_15498 = inst_15497;
var inst_15499 = null;
var inst_15500 = (0);
var inst_15501 = (0);
var state_15568__$1 = (function (){var statearr_15659 = state_15568;
(statearr_15659[(19)] = inst_15500);

(statearr_15659[(11)] = inst_15499);

(statearr_15659[(20)] = inst_15498);

(statearr_15659[(12)] = inst_15501);

(statearr_15659[(28)] = inst_15492);

(statearr_15659[(27)] = inst_15490__$1);

return statearr_15659;
})();
var statearr_15660_18577 = state_15568__$1;
(statearr_15660_18577[(2)] = null);

(statearr_15660_18577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (28))){
var inst_15517 = (state_15568[(23)]);
var inst_15498 = (state_15568[(20)]);
var inst_15517__$1 = cljs.core.seq(inst_15498);
var state_15568__$1 = (function (){var statearr_15661 = state_15568;
(statearr_15661[(23)] = inst_15517__$1);

return statearr_15661;
})();
if(inst_15517__$1){
var statearr_15662_18581 = state_15568__$1;
(statearr_15662_18581[(1)] = (33));

} else {
var statearr_15663_18582 = state_15568__$1;
(statearr_15663_18582[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (25))){
var inst_15500 = (state_15568[(19)]);
var inst_15501 = (state_15568[(12)]);
var inst_15503 = (inst_15501 < inst_15500);
var inst_15504 = inst_15503;
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15504)){
var statearr_15667_18584 = state_15568__$1;
(statearr_15667_18584[(1)] = (27));

} else {
var statearr_15668_18585 = state_15568__$1;
(statearr_15668_18585[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (34))){
var state_15568__$1 = state_15568;
var statearr_15673_18586 = state_15568__$1;
(statearr_15673_18586[(2)] = null);

(statearr_15673_18586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (17))){
var state_15568__$1 = state_15568;
var statearr_15676_18587 = state_15568__$1;
(statearr_15676_18587[(2)] = null);

(statearr_15676_18587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (3))){
var inst_15561 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15568__$1,inst_15561);
} else {
if((state_val_15569 === (12))){
var inst_15485 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15677_18588 = state_15568__$1;
(statearr_15677_18588[(2)] = inst_15485);

(statearr_15677_18588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(4),ch);
} else {
if((state_val_15569 === (23))){
var state_15568__$1 = state_15568;
var statearr_15680_18590 = state_15568__$1;
(statearr_15680_18590[(2)] = null);

(statearr_15680_18590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (35))){
var inst_15543 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15681_18591 = state_15568__$1;
(statearr_15681_18591[(2)] = inst_15543);

(statearr_15681_18591[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (19))){
var inst_15455 = (state_15568[(7)]);
var inst_15460 = cljs.core.chunk_first(inst_15455);
var inst_15461 = cljs.core.chunk_rest(inst_15455);
var inst_15462 = cljs.core.count(inst_15460);
var inst_15427 = inst_15461;
var inst_15428 = inst_15460;
var inst_15429 = inst_15462;
var inst_15430 = (0);
var state_15568__$1 = (function (){var statearr_15686 = state_15568;
(statearr_15686[(13)] = inst_15427);

(statearr_15686[(14)] = inst_15429);

(statearr_15686[(16)] = inst_15430);

(statearr_15686[(17)] = inst_15428);

return statearr_15686;
})();
var statearr_15687_18604 = state_15568__$1;
(statearr_15687_18604[(2)] = null);

(statearr_15687_18604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (11))){
var inst_15427 = (state_15568[(13)]);
var inst_15455 = (state_15568[(7)]);
var inst_15455__$1 = cljs.core.seq(inst_15427);
var state_15568__$1 = (function (){var statearr_15689 = state_15568;
(statearr_15689[(7)] = inst_15455__$1);

return statearr_15689;
})();
if(inst_15455__$1){
var statearr_15690_18605 = state_15568__$1;
(statearr_15690_18605[(1)] = (16));

} else {
var statearr_15691_18606 = state_15568__$1;
(statearr_15691_18606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (9))){
var inst_15487 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15701_18608 = state_15568__$1;
(statearr_15701_18608[(2)] = inst_15487);

(statearr_15701_18608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (5))){
var inst_15425 = cljs.core.deref(cs);
var inst_15426 = cljs.core.seq(inst_15425);
var inst_15427 = inst_15426;
var inst_15428 = null;
var inst_15429 = (0);
var inst_15430 = (0);
var state_15568__$1 = (function (){var statearr_15702 = state_15568;
(statearr_15702[(13)] = inst_15427);

(statearr_15702[(14)] = inst_15429);

(statearr_15702[(16)] = inst_15430);

(statearr_15702[(17)] = inst_15428);

return statearr_15702;
})();
var statearr_15703_18610 = state_15568__$1;
(statearr_15703_18610[(2)] = null);

(statearr_15703_18610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (14))){
var state_15568__$1 = state_15568;
var statearr_15709_18611 = state_15568__$1;
(statearr_15709_18611[(2)] = null);

(statearr_15709_18611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (45))){
var inst_15553 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15711_18613 = state_15568__$1;
(statearr_15711_18613[(2)] = inst_15553);

(statearr_15711_18613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (26))){
var inst_15490 = (state_15568[(27)]);
var inst_15547 = (state_15568[(2)]);
var inst_15550 = cljs.core.seq(inst_15490);
var state_15568__$1 = (function (){var statearr_15712 = state_15568;
(statearr_15712[(29)] = inst_15547);

return statearr_15712;
})();
if(inst_15550){
var statearr_15713_18615 = state_15568__$1;
(statearr_15713_18615[(1)] = (42));

} else {
var statearr_15714_18616 = state_15568__$1;
(statearr_15714_18616[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (16))){
var inst_15455 = (state_15568[(7)]);
var inst_15457 = cljs.core.chunked_seq_QMARK_(inst_15455);
var state_15568__$1 = state_15568;
if(inst_15457){
var statearr_15715_18617 = state_15568__$1;
(statearr_15715_18617[(1)] = (19));

} else {
var statearr_15716_18618 = state_15568__$1;
(statearr_15716_18618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (38))){
var inst_15540 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15717_18621 = state_15568__$1;
(statearr_15717_18621[(2)] = inst_15540);

(statearr_15717_18621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (30))){
var state_15568__$1 = state_15568;
var statearr_15718_18622 = state_15568__$1;
(statearr_15718_18622[(2)] = null);

(statearr_15718_18622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (10))){
var inst_15430 = (state_15568[(16)]);
var inst_15428 = (state_15568[(17)]);
var inst_15438 = cljs.core._nth(inst_15428,inst_15430);
var inst_15439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15438,(0),null);
var inst_15440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15438,(1),null);
var state_15568__$1 = (function (){var statearr_15720 = state_15568;
(statearr_15720[(24)] = inst_15439);

return statearr_15720;
})();
if(cljs.core.truth_(inst_15440)){
var statearr_15721_18623 = state_15568__$1;
(statearr_15721_18623[(1)] = (13));

} else {
var statearr_15722_18624 = state_15568__$1;
(statearr_15722_18624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (18))){
var inst_15483 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15727_18625 = state_15568__$1;
(statearr_15727_18625[(2)] = inst_15483);

(statearr_15727_18625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (42))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(45),dchan);
} else {
if((state_val_15569 === (37))){
var inst_15517 = (state_15568[(23)]);
var inst_15418 = (state_15568[(9)]);
var inst_15530 = (state_15568[(22)]);
var inst_15530__$1 = cljs.core.first(inst_15517);
var inst_15531 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15530__$1,inst_15418,done);
var state_15568__$1 = (function (){var statearr_15734 = state_15568;
(statearr_15734[(22)] = inst_15530__$1);

return statearr_15734;
})();
if(cljs.core.truth_(inst_15531)){
var statearr_15736_18628 = state_15568__$1;
(statearr_15736_18628[(1)] = (39));

} else {
var statearr_15737_18629 = state_15568__$1;
(statearr_15737_18629[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (8))){
var inst_15429 = (state_15568[(14)]);
var inst_15430 = (state_15568[(16)]);
var inst_15432 = (inst_15430 < inst_15429);
var inst_15433 = inst_15432;
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15433)){
var statearr_15739_18630 = state_15568__$1;
(statearr_15739_18630[(1)] = (10));

} else {
var statearr_15743_18631 = state_15568__$1;
(statearr_15743_18631[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__13648__auto__ = null;
var cljs$core$async$mult_$_state_machine__13648__auto____0 = (function (){
var statearr_15748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15748[(0)] = cljs$core$async$mult_$_state_machine__13648__auto__);

(statearr_15748[(1)] = (1));

return statearr_15748;
});
var cljs$core$async$mult_$_state_machine__13648__auto____1 = (function (state_15568){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15568);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e15751){var ex__13651__auto__ = e15751;
var statearr_15752_18637 = state_15568;
(statearr_15752_18637[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15568[(4)]))){
var statearr_15753_18638 = state_15568;
(statearr_15753_18638[(1)] = cljs.core.first((state_15568[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18639 = state_15568;
state_15568 = G__18639;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13648__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13648__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13648__auto____0;
cljs$core$async$mult_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13648__auto____1;
return cljs$core$async$mult_$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_15759 = f__13959__auto__();
(statearr_15759[(6)] = c__13958__auto___18523);

return statearr_15759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15762 = arguments.length;
switch (G__15762) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18646 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18646(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18654 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18654(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18661 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18661(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18663 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18663(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18664 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18664(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18669 = arguments.length;
var i__5770__auto___18670 = (0);
while(true){
if((i__5770__auto___18670 < len__5769__auto___18669)){
args__5775__auto__.push((arguments[i__5770__auto___18670]));

var G__18671 = (i__5770__auto___18670 + (1));
i__5770__auto___18670 = G__18671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15819){
var map__15822 = p__15819;
var map__15822__$1 = cljs.core.__destructure_map(map__15822);
var opts = map__15822__$1;
var statearr_15823_18672 = state;
(statearr_15823_18672[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15824_18673 = state;
(statearr_15824_18673[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15829_18674 = state;
(statearr_15829_18674[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15812){
var G__15813 = cljs.core.first(seq15812);
var seq15812__$1 = cljs.core.next(seq15812);
var G__15814 = cljs.core.first(seq15812__$1);
var seq15812__$2 = cljs.core.next(seq15812__$1);
var G__15815 = cljs.core.first(seq15812__$2);
var seq15812__$3 = cljs.core.next(seq15812__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15813,G__15814,G__15815,seq15812__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15852 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15853){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15853 = meta15853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15854,meta15853__$1){
var self__ = this;
var _15854__$1 = this;
return (new cljs.core.async.t_cljs$core$async15852(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15853__$1));
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15854){
var self__ = this;
var _15854__$1 = this;
return self__.meta15853;
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15852.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15853","meta15853",1033338802,null)], null);
}));

(cljs.core.async.t_cljs$core$async15852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15852");

(cljs.core.async.t_cljs$core$async15852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15852.
 */
cljs.core.async.__GT_t_cljs$core$async15852 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15852(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15853){
return (new cljs.core.async.t_cljs$core$async15852(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15853));
});

}

return (new cljs.core.async.t_cljs$core$async15852(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13958__auto___18716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_15976){
var state_val_15977 = (state_15976[(1)]);
if((state_val_15977 === (7))){
var inst_15928 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
if(cljs.core.truth_(inst_15928)){
var statearr_15988_18717 = state_15976__$1;
(statearr_15988_18717[(1)] = (8));

} else {
var statearr_15991_18718 = state_15976__$1;
(statearr_15991_18718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (20))){
var inst_15920 = (state_15976[(7)]);
var state_15976__$1 = state_15976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15976__$1,(23),out,inst_15920);
} else {
if((state_val_15977 === (1))){
var inst_15898 = calc_state();
var inst_15900 = cljs.core.__destructure_map(inst_15898);
var inst_15901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15900,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15900,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15900,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15905 = inst_15898;
var state_15976__$1 = (function (){var statearr_15997 = state_15976;
(statearr_15997[(8)] = inst_15905);

(statearr_15997[(9)] = inst_15901);

(statearr_15997[(10)] = inst_15903);

(statearr_15997[(11)] = inst_15902);

return statearr_15997;
})();
var statearr_16000_18719 = state_15976__$1;
(statearr_16000_18719[(2)] = null);

(statearr_16000_18719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (24))){
var inst_15909 = (state_15976[(12)]);
var inst_15905 = inst_15909;
var state_15976__$1 = (function (){var statearr_16003 = state_15976;
(statearr_16003[(8)] = inst_15905);

return statearr_16003;
})();
var statearr_16005_18731 = state_15976__$1;
(statearr_16005_18731[(2)] = null);

(statearr_16005_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (4))){
var inst_15920 = (state_15976[(7)]);
var inst_15923 = (state_15976[(13)]);
var inst_15919 = (state_15976[(2)]);
var inst_15920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15919,(0),null);
var inst_15921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15919,(1),null);
var inst_15923__$1 = (inst_15920__$1 == null);
var state_15976__$1 = (function (){var statearr_16012 = state_15976;
(statearr_16012[(7)] = inst_15920__$1);

(statearr_16012[(13)] = inst_15923__$1);

(statearr_16012[(14)] = inst_15921);

return statearr_16012;
})();
if(cljs.core.truth_(inst_15923__$1)){
var statearr_16016_18741 = state_15976__$1;
(statearr_16016_18741[(1)] = (5));

} else {
var statearr_16017_18742 = state_15976__$1;
(statearr_16017_18742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (15))){
var inst_15910 = (state_15976[(15)]);
var inst_15945 = (state_15976[(16)]);
var inst_15945__$1 = cljs.core.empty_QMARK_(inst_15910);
var state_15976__$1 = (function (){var statearr_16023 = state_15976;
(statearr_16023[(16)] = inst_15945__$1);

return statearr_16023;
})();
if(inst_15945__$1){
var statearr_16026_18743 = state_15976__$1;
(statearr_16026_18743[(1)] = (17));

} else {
var statearr_16027_18744 = state_15976__$1;
(statearr_16027_18744[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (21))){
var inst_15909 = (state_15976[(12)]);
var inst_15905 = inst_15909;
var state_15976__$1 = (function (){var statearr_16032 = state_15976;
(statearr_16032[(8)] = inst_15905);

return statearr_16032;
})();
var statearr_16033_18745 = state_15976__$1;
(statearr_16033_18745[(2)] = null);

(statearr_16033_18745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (13))){
var inst_15935 = (state_15976[(2)]);
var inst_15936 = calc_state();
var inst_15905 = inst_15936;
var state_15976__$1 = (function (){var statearr_16037 = state_15976;
(statearr_16037[(8)] = inst_15905);

(statearr_16037[(17)] = inst_15935);

return statearr_16037;
})();
var statearr_16043_18746 = state_15976__$1;
(statearr_16043_18746[(2)] = null);

(statearr_16043_18746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (22))){
var inst_15968 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
var statearr_16046_18748 = state_15976__$1;
(statearr_16046_18748[(2)] = inst_15968);

(statearr_16046_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (6))){
var inst_15921 = (state_15976[(14)]);
var inst_15926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15921,change);
var state_15976__$1 = state_15976;
var statearr_16048_18749 = state_15976__$1;
(statearr_16048_18749[(2)] = inst_15926);

(statearr_16048_18749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (25))){
var state_15976__$1 = state_15976;
var statearr_16050_18750 = state_15976__$1;
(statearr_16050_18750[(2)] = null);

(statearr_16050_18750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (17))){
var inst_15921 = (state_15976[(14)]);
var inst_15911 = (state_15976[(18)]);
var inst_15947 = (inst_15911.cljs$core$IFn$_invoke$arity$1 ? inst_15911.cljs$core$IFn$_invoke$arity$1(inst_15921) : inst_15911.call(null,inst_15921));
var inst_15948 = cljs.core.not(inst_15947);
var state_15976__$1 = state_15976;
var statearr_16057_18751 = state_15976__$1;
(statearr_16057_18751[(2)] = inst_15948);

(statearr_16057_18751[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (3))){
var inst_15973 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15976__$1,inst_15973);
} else {
if((state_val_15977 === (12))){
var state_15976__$1 = state_15976;
var statearr_16069_18752 = state_15976__$1;
(statearr_16069_18752[(2)] = null);

(statearr_16069_18752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (2))){
var inst_15905 = (state_15976[(8)]);
var inst_15909 = (state_15976[(12)]);
var inst_15909__$1 = cljs.core.__destructure_map(inst_15905);
var inst_15910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15909__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15909__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15909__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15976__$1 = (function (){var statearr_16073 = state_15976;
(statearr_16073[(15)] = inst_15910);

(statearr_16073[(12)] = inst_15909__$1);

(statearr_16073[(18)] = inst_15911);

return statearr_16073;
})();
return cljs.core.async.ioc_alts_BANG_(state_15976__$1,(4),inst_15912);
} else {
if((state_val_15977 === (23))){
var inst_15959 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
if(cljs.core.truth_(inst_15959)){
var statearr_16081_18760 = state_15976__$1;
(statearr_16081_18760[(1)] = (24));

} else {
var statearr_16082_18761 = state_15976__$1;
(statearr_16082_18761[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (19))){
var inst_15951 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
var statearr_16084_18762 = state_15976__$1;
(statearr_16084_18762[(2)] = inst_15951);

(statearr_16084_18762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (11))){
var inst_15921 = (state_15976[(14)]);
var inst_15932 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15921);
var state_15976__$1 = state_15976;
var statearr_16085_18763 = state_15976__$1;
(statearr_16085_18763[(2)] = inst_15932);

(statearr_16085_18763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (9))){
var inst_15910 = (state_15976[(15)]);
var inst_15921 = (state_15976[(14)]);
var inst_15942 = (state_15976[(19)]);
var inst_15942__$1 = (inst_15910.cljs$core$IFn$_invoke$arity$1 ? inst_15910.cljs$core$IFn$_invoke$arity$1(inst_15921) : inst_15910.call(null,inst_15921));
var state_15976__$1 = (function (){var statearr_16090 = state_15976;
(statearr_16090[(19)] = inst_15942__$1);

return statearr_16090;
})();
if(cljs.core.truth_(inst_15942__$1)){
var statearr_16093_18764 = state_15976__$1;
(statearr_16093_18764[(1)] = (14));

} else {
var statearr_16096_18765 = state_15976__$1;
(statearr_16096_18765[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (5))){
var inst_15923 = (state_15976[(13)]);
var state_15976__$1 = state_15976;
var statearr_16099_18766 = state_15976__$1;
(statearr_16099_18766[(2)] = inst_15923);

(statearr_16099_18766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (14))){
var inst_15942 = (state_15976[(19)]);
var state_15976__$1 = state_15976;
var statearr_16104_18769 = state_15976__$1;
(statearr_16104_18769[(2)] = inst_15942);

(statearr_16104_18769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (26))){
var inst_15964 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
var statearr_16106_18771 = state_15976__$1;
(statearr_16106_18771[(2)] = inst_15964);

(statearr_16106_18771[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (16))){
var inst_15954 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
if(cljs.core.truth_(inst_15954)){
var statearr_16108_18777 = state_15976__$1;
(statearr_16108_18777[(1)] = (20));

} else {
var statearr_16110_18778 = state_15976__$1;
(statearr_16110_18778[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (10))){
var inst_15970 = (state_15976[(2)]);
var state_15976__$1 = state_15976;
var statearr_16113_18779 = state_15976__$1;
(statearr_16113_18779[(2)] = inst_15970);

(statearr_16113_18779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (18))){
var inst_15945 = (state_15976[(16)]);
var state_15976__$1 = state_15976;
var statearr_16115_18785 = state_15976__$1;
(statearr_16115_18785[(2)] = inst_15945);

(statearr_16115_18785[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15977 === (8))){
var inst_15920 = (state_15976[(7)]);
var inst_15930 = (inst_15920 == null);
var state_15976__$1 = state_15976;
if(cljs.core.truth_(inst_15930)){
var statearr_16118_18786 = state_15976__$1;
(statearr_16118_18786[(1)] = (11));

} else {
var statearr_16120_18787 = state_15976__$1;
(statearr_16120_18787[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__13648__auto__ = null;
var cljs$core$async$mix_$_state_machine__13648__auto____0 = (function (){
var statearr_16125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16125[(0)] = cljs$core$async$mix_$_state_machine__13648__auto__);

(statearr_16125[(1)] = (1));

return statearr_16125;
});
var cljs$core$async$mix_$_state_machine__13648__auto____1 = (function (state_15976){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_15976);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e16127){var ex__13651__auto__ = e16127;
var statearr_16128_18789 = state_15976;
(statearr_16128_18789[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_15976[(4)]))){
var statearr_16133_18790 = state_15976;
(statearr_16133_18790[(1)] = cljs.core.first((state_15976[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18791 = state_15976;
state_15976 = G__18791;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13648__auto__ = function(state_15976){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13648__auto____1.call(this,state_15976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13648__auto____0;
cljs$core$async$mix_$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13648__auto____1;
return cljs$core$async$mix_$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_16144 = f__13959__auto__();
(statearr_16144[(6)] = c__13958__auto___18716);

return statearr_16144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18793 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18793(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18800 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18800(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18802 = (function() {
var G__18803 = null;
var G__18803__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18803__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18803 = function(p,v){
switch(arguments.length){
case 1:
return G__18803__1.call(this,p);
case 2:
return G__18803__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18803.cljs$core$IFn$_invoke$arity$1 = G__18803__1;
G__18803.cljs$core$IFn$_invoke$arity$2 = G__18803__2;
return G__18803;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16187 = arguments.length;
switch (G__16187) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18802(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18802(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__16215 = arguments.length;
switch (G__16215) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16209_SHARP_){
if(cljs.core.truth_((p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16209_SHARP_.call(null,topic)))){
return p1__16209_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16209_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16232 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16233){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16233 = meta16233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16234,meta16233__$1){
var self__ = this;
var _16234__$1 = this;
return (new cljs.core.async.t_cljs$core$async16232(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16233__$1));
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16234){
var self__ = this;
var _16234__$1 = this;
return self__.meta16233;
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16233","meta16233",-854287320,null)], null);
}));

(cljs.core.async.t_cljs$core$async16232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16232");

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16232.
 */
cljs.core.async.__GT_t_cljs$core$async16232 = (function cljs$core$async$__GT_t_cljs$core$async16232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16233){
return (new cljs.core.async.t_cljs$core$async16232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16233));
});

}

return (new cljs.core.async.t_cljs$core$async16232(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13958__auto___18825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_16425){
var state_val_16426 = (state_16425[(1)]);
if((state_val_16426 === (7))){
var inst_16417 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16434_18826 = state_16425__$1;
(statearr_16434_18826[(2)] = inst_16417);

(statearr_16434_18826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (20))){
var state_16425__$1 = state_16425;
var statearr_16435_18827 = state_16425__$1;
(statearr_16435_18827[(2)] = null);

(statearr_16435_18827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (1))){
var state_16425__$1 = state_16425;
var statearr_16446_18828 = state_16425__$1;
(statearr_16446_18828[(2)] = null);

(statearr_16446_18828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (24))){
var inst_16396 = (state_16425[(7)]);
var inst_16409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16396);
var state_16425__$1 = state_16425;
var statearr_16452_18830 = state_16425__$1;
(statearr_16452_18830[(2)] = inst_16409);

(statearr_16452_18830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (4))){
var inst_16334 = (state_16425[(8)]);
var inst_16334__$1 = (state_16425[(2)]);
var inst_16335 = (inst_16334__$1 == null);
var state_16425__$1 = (function (){var statearr_16455 = state_16425;
(statearr_16455[(8)] = inst_16334__$1);

return statearr_16455;
})();
if(cljs.core.truth_(inst_16335)){
var statearr_16459_18832 = state_16425__$1;
(statearr_16459_18832[(1)] = (5));

} else {
var statearr_16460_18833 = state_16425__$1;
(statearr_16460_18833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (15))){
var inst_16386 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16463_18834 = state_16425__$1;
(statearr_16463_18834[(2)] = inst_16386);

(statearr_16463_18834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (21))){
var inst_16414 = (state_16425[(2)]);
var state_16425__$1 = (function (){var statearr_16465 = state_16425;
(statearr_16465[(9)] = inst_16414);

return statearr_16465;
})();
var statearr_16466_18838 = state_16425__$1;
(statearr_16466_18838[(2)] = null);

(statearr_16466_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (13))){
var inst_16365 = (state_16425[(10)]);
var inst_16367 = cljs.core.chunked_seq_QMARK_(inst_16365);
var state_16425__$1 = state_16425;
if(inst_16367){
var statearr_16470_18839 = state_16425__$1;
(statearr_16470_18839[(1)] = (16));

} else {
var statearr_16475_18840 = state_16425__$1;
(statearr_16475_18840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (22))){
var inst_16406 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
if(cljs.core.truth_(inst_16406)){
var statearr_16482_18841 = state_16425__$1;
(statearr_16482_18841[(1)] = (23));

} else {
var statearr_16485_18842 = state_16425__$1;
(statearr_16485_18842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (6))){
var inst_16396 = (state_16425[(7)]);
var inst_16334 = (state_16425[(8)]);
var inst_16398 = (state_16425[(11)]);
var inst_16396__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16334) : topic_fn.call(null,inst_16334));
var inst_16397 = cljs.core.deref(mults);
var inst_16398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16397,inst_16396__$1);
var state_16425__$1 = (function (){var statearr_16489 = state_16425;
(statearr_16489[(7)] = inst_16396__$1);

(statearr_16489[(11)] = inst_16398__$1);

return statearr_16489;
})();
if(cljs.core.truth_(inst_16398__$1)){
var statearr_16490_18843 = state_16425__$1;
(statearr_16490_18843[(1)] = (19));

} else {
var statearr_16491_18844 = state_16425__$1;
(statearr_16491_18844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (25))){
var inst_16411 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16496_18845 = state_16425__$1;
(statearr_16496_18845[(2)] = inst_16411);

(statearr_16496_18845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (17))){
var inst_16365 = (state_16425[(10)]);
var inst_16375 = cljs.core.first(inst_16365);
var inst_16377 = cljs.core.async.muxch_STAR_(inst_16375);
var inst_16378 = cljs.core.async.close_BANG_(inst_16377);
var inst_16379 = cljs.core.next(inst_16365);
var inst_16346 = inst_16379;
var inst_16347 = null;
var inst_16348 = (0);
var inst_16349 = (0);
var state_16425__$1 = (function (){var statearr_16499 = state_16425;
(statearr_16499[(12)] = inst_16349);

(statearr_16499[(13)] = inst_16347);

(statearr_16499[(14)] = inst_16348);

(statearr_16499[(15)] = inst_16378);

(statearr_16499[(16)] = inst_16346);

return statearr_16499;
})();
var statearr_16505_18848 = state_16425__$1;
(statearr_16505_18848[(2)] = null);

(statearr_16505_18848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (3))){
var inst_16419 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16425__$1,inst_16419);
} else {
if((state_val_16426 === (12))){
var inst_16388 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16512_18849 = state_16425__$1;
(statearr_16512_18849[(2)] = inst_16388);

(statearr_16512_18849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (2))){
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16425__$1,(4),ch);
} else {
if((state_val_16426 === (23))){
var state_16425__$1 = state_16425;
var statearr_16513_18850 = state_16425__$1;
(statearr_16513_18850[(2)] = null);

(statearr_16513_18850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (19))){
var inst_16334 = (state_16425[(8)]);
var inst_16398 = (state_16425[(11)]);
var inst_16404 = cljs.core.async.muxch_STAR_(inst_16398);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16425__$1,(22),inst_16404,inst_16334);
} else {
if((state_val_16426 === (11))){
var inst_16346 = (state_16425[(16)]);
var inst_16365 = (state_16425[(10)]);
var inst_16365__$1 = cljs.core.seq(inst_16346);
var state_16425__$1 = (function (){var statearr_16523 = state_16425;
(statearr_16523[(10)] = inst_16365__$1);

return statearr_16523;
})();
if(inst_16365__$1){
var statearr_16524_18851 = state_16425__$1;
(statearr_16524_18851[(1)] = (13));

} else {
var statearr_16525_18852 = state_16425__$1;
(statearr_16525_18852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (9))){
var inst_16390 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16527_18853 = state_16425__$1;
(statearr_16527_18853[(2)] = inst_16390);

(statearr_16527_18853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (5))){
var inst_16342 = cljs.core.deref(mults);
var inst_16343 = cljs.core.vals(inst_16342);
var inst_16344 = cljs.core.seq(inst_16343);
var inst_16346 = inst_16344;
var inst_16347 = null;
var inst_16348 = (0);
var inst_16349 = (0);
var state_16425__$1 = (function (){var statearr_16546 = state_16425;
(statearr_16546[(12)] = inst_16349);

(statearr_16546[(13)] = inst_16347);

(statearr_16546[(14)] = inst_16348);

(statearr_16546[(16)] = inst_16346);

return statearr_16546;
})();
var statearr_16555_18854 = state_16425__$1;
(statearr_16555_18854[(2)] = null);

(statearr_16555_18854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (14))){
var state_16425__$1 = state_16425;
var statearr_16559_18855 = state_16425__$1;
(statearr_16559_18855[(2)] = null);

(statearr_16559_18855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (16))){
var inst_16365 = (state_16425[(10)]);
var inst_16369 = cljs.core.chunk_first(inst_16365);
var inst_16370 = cljs.core.chunk_rest(inst_16365);
var inst_16371 = cljs.core.count(inst_16369);
var inst_16346 = inst_16370;
var inst_16347 = inst_16369;
var inst_16348 = inst_16371;
var inst_16349 = (0);
var state_16425__$1 = (function (){var statearr_16566 = state_16425;
(statearr_16566[(12)] = inst_16349);

(statearr_16566[(13)] = inst_16347);

(statearr_16566[(14)] = inst_16348);

(statearr_16566[(16)] = inst_16346);

return statearr_16566;
})();
var statearr_16567_18856 = state_16425__$1;
(statearr_16567_18856[(2)] = null);

(statearr_16567_18856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (10))){
var inst_16349 = (state_16425[(12)]);
var inst_16347 = (state_16425[(13)]);
var inst_16348 = (state_16425[(14)]);
var inst_16346 = (state_16425[(16)]);
var inst_16357 = cljs.core._nth(inst_16347,inst_16349);
var inst_16359 = cljs.core.async.muxch_STAR_(inst_16357);
var inst_16361 = cljs.core.async.close_BANG_(inst_16359);
var inst_16362 = (inst_16349 + (1));
var tmp16556 = inst_16347;
var tmp16557 = inst_16348;
var tmp16558 = inst_16346;
var inst_16346__$1 = tmp16558;
var inst_16347__$1 = tmp16556;
var inst_16348__$1 = tmp16557;
var inst_16349__$1 = inst_16362;
var state_16425__$1 = (function (){var statearr_16573 = state_16425;
(statearr_16573[(12)] = inst_16349__$1);

(statearr_16573[(13)] = inst_16347__$1);

(statearr_16573[(17)] = inst_16361);

(statearr_16573[(14)] = inst_16348__$1);

(statearr_16573[(16)] = inst_16346__$1);

return statearr_16573;
})();
var statearr_16576_18857 = state_16425__$1;
(statearr_16576_18857[(2)] = null);

(statearr_16576_18857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (18))){
var inst_16383 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16577_18858 = state_16425__$1;
(statearr_16577_18858[(2)] = inst_16383);

(statearr_16577_18858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (8))){
var inst_16349 = (state_16425[(12)]);
var inst_16348 = (state_16425[(14)]);
var inst_16352 = (inst_16349 < inst_16348);
var inst_16353 = inst_16352;
var state_16425__$1 = state_16425;
if(cljs.core.truth_(inst_16353)){
var statearr_16584_18859 = state_16425__$1;
(statearr_16584_18859[(1)] = (10));

} else {
var statearr_16585_18860 = state_16425__$1;
(statearr_16585_18860[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_16590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16590[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_16590[(1)] = (1));

return statearr_16590;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_16425){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_16425);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e16593){var ex__13651__auto__ = e16593;
var statearr_16594_18863 = state_16425;
(statearr_16594_18863[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_16425[(4)]))){
var statearr_16595_18864 = state_16425;
(statearr_16595_18864[(1)] = cljs.core.first((state_16425[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18865 = state_16425;
state_16425 = G__18865;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_16425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_16425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_16599 = f__13959__auto__();
(statearr_16599[(6)] = c__13958__auto___18825);

return statearr_16599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16608 = arguments.length;
switch (G__16608) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16656 = arguments.length;
switch (G__16656) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16675 = arguments.length;
switch (G__16675) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13958__auto___18869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_16748){
var state_val_16749 = (state_16748[(1)]);
if((state_val_16749 === (7))){
var state_16748__$1 = state_16748;
var statearr_16750_18870 = state_16748__$1;
(statearr_16750_18870[(2)] = null);

(statearr_16750_18870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (1))){
var state_16748__$1 = state_16748;
var statearr_16751_18871 = state_16748__$1;
(statearr_16751_18871[(2)] = null);

(statearr_16751_18871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (4))){
var inst_16697 = (state_16748[(7)]);
var inst_16699 = (state_16748[(8)]);
var inst_16702 = (inst_16699 < inst_16697);
var state_16748__$1 = state_16748;
if(cljs.core.truth_(inst_16702)){
var statearr_16752_18872 = state_16748__$1;
(statearr_16752_18872[(1)] = (6));

} else {
var statearr_16757_18873 = state_16748__$1;
(statearr_16757_18873[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (15))){
var inst_16733 = (state_16748[(9)]);
var inst_16739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16733);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16748__$1,(17),out,inst_16739);
} else {
if((state_val_16749 === (13))){
var inst_16733 = (state_16748[(9)]);
var inst_16733__$1 = (state_16748[(2)]);
var inst_16735 = cljs.core.some(cljs.core.nil_QMARK_,inst_16733__$1);
var state_16748__$1 = (function (){var statearr_16759 = state_16748;
(statearr_16759[(9)] = inst_16733__$1);

return statearr_16759;
})();
if(cljs.core.truth_(inst_16735)){
var statearr_16760_18874 = state_16748__$1;
(statearr_16760_18874[(1)] = (14));

} else {
var statearr_16762_18875 = state_16748__$1;
(statearr_16762_18875[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (6))){
var state_16748__$1 = state_16748;
var statearr_16764_18876 = state_16748__$1;
(statearr_16764_18876[(2)] = null);

(statearr_16764_18876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (17))){
var inst_16741 = (state_16748[(2)]);
var state_16748__$1 = (function (){var statearr_16766 = state_16748;
(statearr_16766[(10)] = inst_16741);

return statearr_16766;
})();
var statearr_16767_18878 = state_16748__$1;
(statearr_16767_18878[(2)] = null);

(statearr_16767_18878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (3))){
var inst_16746 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16748__$1,inst_16746);
} else {
if((state_val_16749 === (12))){
var _ = (function (){var statearr_16769 = state_16748;
(statearr_16769[(4)] = cljs.core.rest((state_16748[(4)])));

return statearr_16769;
})();
var state_16748__$1 = state_16748;
var ex16765 = (state_16748__$1[(2)]);
var statearr_16773_18879 = state_16748__$1;
(statearr_16773_18879[(5)] = ex16765);


if((ex16765 instanceof Object)){
var statearr_16774_18880 = state_16748__$1;
(statearr_16774_18880[(1)] = (11));

(statearr_16774_18880[(5)] = null);

} else {
throw ex16765;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (2))){
var inst_16694 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16697 = cnt;
var inst_16699 = (0);
var state_16748__$1 = (function (){var statearr_16777 = state_16748;
(statearr_16777[(7)] = inst_16697);

(statearr_16777[(11)] = inst_16694);

(statearr_16777[(8)] = inst_16699);

return statearr_16777;
})();
var statearr_16778_18881 = state_16748__$1;
(statearr_16778_18881[(2)] = null);

(statearr_16778_18881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (11))){
var inst_16708 = (state_16748[(2)]);
var inst_16709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16748__$1 = (function (){var statearr_16779 = state_16748;
(statearr_16779[(12)] = inst_16708);

return statearr_16779;
})();
var statearr_16784_18882 = state_16748__$1;
(statearr_16784_18882[(2)] = inst_16709);

(statearr_16784_18882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (9))){
var inst_16699 = (state_16748[(8)]);
var _ = (function (){var statearr_16794 = state_16748;
(statearr_16794[(4)] = cljs.core.cons((12),(state_16748[(4)])));

return statearr_16794;
})();
var inst_16719 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16699) : chs__$1.call(null,inst_16699));
var inst_16720 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16699) : done.call(null,inst_16699));
var inst_16721 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16719,inst_16720);
var ___$1 = (function (){var statearr_16795 = state_16748;
(statearr_16795[(4)] = cljs.core.rest((state_16748[(4)])));

return statearr_16795;
})();
var state_16748__$1 = state_16748;
var statearr_16796_18886 = state_16748__$1;
(statearr_16796_18886[(2)] = inst_16721);

(statearr_16796_18886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (5))){
var inst_16731 = (state_16748[(2)]);
var state_16748__$1 = (function (){var statearr_16797 = state_16748;
(statearr_16797[(13)] = inst_16731);

return statearr_16797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16748__$1,(13),dchan);
} else {
if((state_val_16749 === (14))){
var inst_16737 = cljs.core.async.close_BANG_(out);
var state_16748__$1 = state_16748;
var statearr_16800_18888 = state_16748__$1;
(statearr_16800_18888[(2)] = inst_16737);

(statearr_16800_18888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (16))){
var inst_16744 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16802_18889 = state_16748__$1;
(statearr_16802_18889[(2)] = inst_16744);

(statearr_16802_18889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (10))){
var inst_16699 = (state_16748[(8)]);
var inst_16724 = (state_16748[(2)]);
var inst_16725 = (inst_16699 + (1));
var inst_16699__$1 = inst_16725;
var state_16748__$1 = (function (){var statearr_16803 = state_16748;
(statearr_16803[(14)] = inst_16724);

(statearr_16803[(8)] = inst_16699__$1);

return statearr_16803;
})();
var statearr_16804_18890 = state_16748__$1;
(statearr_16804_18890[(2)] = null);

(statearr_16804_18890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (8))){
var inst_16729 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16805_18891 = state_16748__$1;
(statearr_16805_18891[(2)] = inst_16729);

(statearr_16805_18891[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_16806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16806[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_16806[(1)] = (1));

return statearr_16806;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_16748){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_16748);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e16807){var ex__13651__auto__ = e16807;
var statearr_16808_18895 = state_16748;
(statearr_16808_18895[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_16748[(4)]))){
var statearr_16809_18900 = state_16748;
(statearr_16809_18900[(1)] = cljs.core.first((state_16748[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18901 = state_16748;
state_16748 = G__18901;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_16748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_16748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_16810 = f__13959__auto__();
(statearr_16810[(6)] = c__13958__auto___18869);

return statearr_16810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16825 = arguments.length;
switch (G__16825) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___18903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_16858){
var state_val_16859 = (state_16858[(1)]);
if((state_val_16859 === (7))){
var inst_16838 = (state_16858[(7)]);
var inst_16837 = (state_16858[(8)]);
var inst_16837__$1 = (state_16858[(2)]);
var inst_16838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16837__$1,(0),null);
var inst_16839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16837__$1,(1),null);
var inst_16840 = (inst_16838__$1 == null);
var state_16858__$1 = (function (){var statearr_16868 = state_16858;
(statearr_16868[(9)] = inst_16839);

(statearr_16868[(7)] = inst_16838__$1);

(statearr_16868[(8)] = inst_16837__$1);

return statearr_16868;
})();
if(cljs.core.truth_(inst_16840)){
var statearr_16870_18904 = state_16858__$1;
(statearr_16870_18904[(1)] = (8));

} else {
var statearr_16872_18905 = state_16858__$1;
(statearr_16872_18905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (1))){
var inst_16827 = cljs.core.vec(chs);
var inst_16828 = inst_16827;
var state_16858__$1 = (function (){var statearr_16874 = state_16858;
(statearr_16874[(10)] = inst_16828);

return statearr_16874;
})();
var statearr_16875_18906 = state_16858__$1;
(statearr_16875_18906[(2)] = null);

(statearr_16875_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (4))){
var inst_16828 = (state_16858[(10)]);
var state_16858__$1 = state_16858;
return cljs.core.async.ioc_alts_BANG_(state_16858__$1,(7),inst_16828);
} else {
if((state_val_16859 === (6))){
var inst_16854 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
var statearr_16876_18907 = state_16858__$1;
(statearr_16876_18907[(2)] = inst_16854);

(statearr_16876_18907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (3))){
var inst_16856 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16858__$1,inst_16856);
} else {
if((state_val_16859 === (2))){
var inst_16828 = (state_16858[(10)]);
var inst_16830 = cljs.core.count(inst_16828);
var inst_16831 = (inst_16830 > (0));
var state_16858__$1 = state_16858;
if(cljs.core.truth_(inst_16831)){
var statearr_16889_18908 = state_16858__$1;
(statearr_16889_18908[(1)] = (4));

} else {
var statearr_16891_18909 = state_16858__$1;
(statearr_16891_18909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (11))){
var inst_16828 = (state_16858[(10)]);
var inst_16847 = (state_16858[(2)]);
var tmp16883 = inst_16828;
var inst_16828__$1 = tmp16883;
var state_16858__$1 = (function (){var statearr_16894 = state_16858;
(statearr_16894[(11)] = inst_16847);

(statearr_16894[(10)] = inst_16828__$1);

return statearr_16894;
})();
var statearr_16897_18910 = state_16858__$1;
(statearr_16897_18910[(2)] = null);

(statearr_16897_18910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (9))){
var inst_16838 = (state_16858[(7)]);
var state_16858__$1 = state_16858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16858__$1,(11),out,inst_16838);
} else {
if((state_val_16859 === (5))){
var inst_16852 = cljs.core.async.close_BANG_(out);
var state_16858__$1 = state_16858;
var statearr_16908_18911 = state_16858__$1;
(statearr_16908_18911[(2)] = inst_16852);

(statearr_16908_18911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (10))){
var inst_16850 = (state_16858[(2)]);
var state_16858__$1 = state_16858;
var statearr_16909_18913 = state_16858__$1;
(statearr_16909_18913[(2)] = inst_16850);

(statearr_16909_18913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16859 === (8))){
var inst_16839 = (state_16858[(9)]);
var inst_16828 = (state_16858[(10)]);
var inst_16838 = (state_16858[(7)]);
var inst_16837 = (state_16858[(8)]);
var inst_16842 = (function (){var cs = inst_16828;
var vec__16833 = inst_16837;
var v = inst_16838;
var c = inst_16839;
return (function (p1__16819_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16819_SHARP_);
});
})();
var inst_16843 = cljs.core.filterv(inst_16842,inst_16828);
var inst_16828__$1 = inst_16843;
var state_16858__$1 = (function (){var statearr_16917 = state_16858;
(statearr_16917[(10)] = inst_16828__$1);

return statearr_16917;
})();
var statearr_16919_18914 = state_16858__$1;
(statearr_16919_18914[(2)] = null);

(statearr_16919_18914[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_16934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16934[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_16934[(1)] = (1));

return statearr_16934;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_16858){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_16858);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e16938){var ex__13651__auto__ = e16938;
var statearr_16943_18922 = state_16858;
(statearr_16943_18922[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_16858[(4)]))){
var statearr_16944_18923 = state_16858;
(statearr_16944_18923[(1)] = cljs.core.first((state_16858[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18924 = state_16858;
state_16858 = G__18924;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_16858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_16858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_16948 = f__13959__auto__();
(statearr_16948[(6)] = c__13958__auto___18903);

return statearr_16948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16954 = arguments.length;
switch (G__16954) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___18933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_16983){
var state_val_16984 = (state_16983[(1)]);
if((state_val_16984 === (7))){
var inst_16964 = (state_16983[(7)]);
var inst_16964__$1 = (state_16983[(2)]);
var inst_16965 = (inst_16964__$1 == null);
var inst_16966 = cljs.core.not(inst_16965);
var state_16983__$1 = (function (){var statearr_16990 = state_16983;
(statearr_16990[(7)] = inst_16964__$1);

return statearr_16990;
})();
if(inst_16966){
var statearr_16991_18937 = state_16983__$1;
(statearr_16991_18937[(1)] = (8));

} else {
var statearr_16993_18942 = state_16983__$1;
(statearr_16993_18942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (1))){
var inst_16957 = (0);
var state_16983__$1 = (function (){var statearr_16994 = state_16983;
(statearr_16994[(8)] = inst_16957);

return statearr_16994;
})();
var statearr_16995_18943 = state_16983__$1;
(statearr_16995_18943[(2)] = null);

(statearr_16995_18943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (4))){
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16983__$1,(7),ch);
} else {
if((state_val_16984 === (6))){
var inst_16977 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
var statearr_16996_18944 = state_16983__$1;
(statearr_16996_18944[(2)] = inst_16977);

(statearr_16996_18944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (3))){
var inst_16979 = (state_16983[(2)]);
var inst_16980 = cljs.core.async.close_BANG_(out);
var state_16983__$1 = (function (){var statearr_17000 = state_16983;
(statearr_17000[(9)] = inst_16979);

return statearr_17000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16983__$1,inst_16980);
} else {
if((state_val_16984 === (2))){
var inst_16957 = (state_16983[(8)]);
var inst_16960 = (inst_16957 < n);
var state_16983__$1 = state_16983;
if(cljs.core.truth_(inst_16960)){
var statearr_17006_18948 = state_16983__$1;
(statearr_17006_18948[(1)] = (4));

} else {
var statearr_17010_18949 = state_16983__$1;
(statearr_17010_18949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (11))){
var inst_16957 = (state_16983[(8)]);
var inst_16969 = (state_16983[(2)]);
var inst_16970 = (inst_16957 + (1));
var inst_16957__$1 = inst_16970;
var state_16983__$1 = (function (){var statearr_17019 = state_16983;
(statearr_17019[(10)] = inst_16969);

(statearr_17019[(8)] = inst_16957__$1);

return statearr_17019;
})();
var statearr_17025_18954 = state_16983__$1;
(statearr_17025_18954[(2)] = null);

(statearr_17025_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (9))){
var state_16983__$1 = state_16983;
var statearr_17034_18955 = state_16983__$1;
(statearr_17034_18955[(2)] = null);

(statearr_17034_18955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (5))){
var state_16983__$1 = state_16983;
var statearr_17037_18956 = state_16983__$1;
(statearr_17037_18956[(2)] = null);

(statearr_17037_18956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (10))){
var inst_16974 = (state_16983[(2)]);
var state_16983__$1 = state_16983;
var statearr_17038_18957 = state_16983__$1;
(statearr_17038_18957[(2)] = inst_16974);

(statearr_17038_18957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16984 === (8))){
var inst_16964 = (state_16983[(7)]);
var state_16983__$1 = state_16983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16983__$1,(11),out,inst_16964);
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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_17043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17043[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_17043[(1)] = (1));

return statearr_17043;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_16983){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_16983);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17045){var ex__13651__auto__ = e17045;
var statearr_17046_18958 = state_16983;
(statearr_17046_18958[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_16983[(4)]))){
var statearr_17047_18959 = state_16983;
(statearr_17047_18959[(1)] = cljs.core.first((state_16983[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18960 = state_16983;
state_16983 = G__18960;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_16983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_16983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17048 = f__13959__auto__();
(statearr_17048[(6)] = c__13958__auto___18933);

return statearr_17048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17065 = (function (f,ch,meta17066){
this.f = f;
this.ch = ch;
this.meta17066 = meta17066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17067,meta17066__$1){
var self__ = this;
var _17067__$1 = this;
return (new cljs.core.async.t_cljs$core$async17065(self__.f,self__.ch,meta17066__$1));
}));

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17067){
var self__ = this;
var _17067__$1 = this;
return self__.meta17066;
}));

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17094 = (function (f,ch,meta17066,_,fn1,meta17095){
this.f = f;
this.ch = ch;
this.meta17066 = meta17066;
this._ = _;
this.fn1 = fn1;
this.meta17095 = meta17095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17096,meta17095__$1){
var self__ = this;
var _17096__$1 = this;
return (new cljs.core.async.t_cljs$core$async17094(self__.f,self__.ch,self__.meta17066,self__._,self__.fn1,meta17095__$1));
}));

(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17096){
var self__ = this;
var _17096__$1 = this;
return self__.meta17095;
}));

(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17049_SHARP_){
var G__17109 = (((p1__17049_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17049_SHARP_) : self__.f.call(null,p1__17049_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17109) : f1.call(null,G__17109));
});
}));

(cljs.core.async.t_cljs$core$async17094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17066","meta17066",893824580,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17065","cljs.core.async/t_cljs$core$async17065",-575262964,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17095","meta17095",1909058546,null)], null);
}));

(cljs.core.async.t_cljs$core$async17094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17094");

(cljs.core.async.t_cljs$core$async17094.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17094.
 */
cljs.core.async.__GT_t_cljs$core$async17094 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17094(f__$1,ch__$1,meta17066__$1,___$2,fn1__$1,meta17095){
return (new cljs.core.async.t_cljs$core$async17094(f__$1,ch__$1,meta17066__$1,___$2,fn1__$1,meta17095));
});

}

return (new cljs.core.async.t_cljs$core$async17094(self__.f,self__.ch,self__.meta17066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17122 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17122) : self__.f.call(null,G__17122));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17066","meta17066",893824580,null)], null);
}));

(cljs.core.async.t_cljs$core$async17065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17065");

(cljs.core.async.t_cljs$core$async17065.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17065.
 */
cljs.core.async.__GT_t_cljs$core$async17065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17065(f__$1,ch__$1,meta17066){
return (new cljs.core.async.t_cljs$core$async17065(f__$1,ch__$1,meta17066));
});

}

return (new cljs.core.async.t_cljs$core$async17065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17127 = (function (f,ch,meta17128){
this.f = f;
this.ch = ch;
this.meta17128 = meta17128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17129,meta17128__$1){
var self__ = this;
var _17129__$1 = this;
return (new cljs.core.async.t_cljs$core$async17127(self__.f,self__.ch,meta17128__$1));
}));

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17129){
var self__ = this;
var _17129__$1 = this;
return self__.meta17128;
}));

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17128","meta17128",1955971320,null)], null);
}));

(cljs.core.async.t_cljs$core$async17127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17127");

(cljs.core.async.t_cljs$core$async17127.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17127.
 */
cljs.core.async.__GT_t_cljs$core$async17127 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17127(f__$1,ch__$1,meta17128){
return (new cljs.core.async.t_cljs$core$async17127(f__$1,ch__$1,meta17128));
});

}

return (new cljs.core.async.t_cljs$core$async17127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17163 = (function (p,ch,meta17164){
this.p = p;
this.ch = ch;
this.meta17164 = meta17164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17165,meta17164__$1){
var self__ = this;
var _17165__$1 = this;
return (new cljs.core.async.t_cljs$core$async17163(self__.p,self__.ch,meta17164__$1));
}));

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17165){
var self__ = this;
var _17165__$1 = this;
return self__.meta17164;
}));

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17164","meta17164",-1362604818,null)], null);
}));

(cljs.core.async.t_cljs$core$async17163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17163");

(cljs.core.async.t_cljs$core$async17163.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17163.
 */
cljs.core.async.__GT_t_cljs$core$async17163 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17163(p__$1,ch__$1,meta17164){
return (new cljs.core.async.t_cljs$core$async17163(p__$1,ch__$1,meta17164));
});

}

return (new cljs.core.async.t_cljs$core$async17163(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17195 = arguments.length;
switch (G__17195) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___18970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_17225){
var state_val_17226 = (state_17225[(1)]);
if((state_val_17226 === (7))){
var inst_17221 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17232_18971 = state_17225__$1;
(statearr_17232_18971[(2)] = inst_17221);

(statearr_17232_18971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (1))){
var state_17225__$1 = state_17225;
var statearr_17233_18972 = state_17225__$1;
(statearr_17233_18972[(2)] = null);

(statearr_17233_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (4))){
var inst_17206 = (state_17225[(7)]);
var inst_17206__$1 = (state_17225[(2)]);
var inst_17208 = (inst_17206__$1 == null);
var state_17225__$1 = (function (){var statearr_17234 = state_17225;
(statearr_17234[(7)] = inst_17206__$1);

return statearr_17234;
})();
if(cljs.core.truth_(inst_17208)){
var statearr_17235_18973 = state_17225__$1;
(statearr_17235_18973[(1)] = (5));

} else {
var statearr_17236_18974 = state_17225__$1;
(statearr_17236_18974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (6))){
var inst_17206 = (state_17225[(7)]);
var inst_17212 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17206) : p.call(null,inst_17206));
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17212)){
var statearr_17237_18975 = state_17225__$1;
(statearr_17237_18975[(1)] = (8));

} else {
var statearr_17238_18976 = state_17225__$1;
(statearr_17238_18976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (3))){
var inst_17223 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17225__$1,inst_17223);
} else {
if((state_val_17226 === (2))){
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17225__$1,(4),ch);
} else {
if((state_val_17226 === (11))){
var inst_17215 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17240_18977 = state_17225__$1;
(statearr_17240_18977[(2)] = inst_17215);

(statearr_17240_18977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (9))){
var state_17225__$1 = state_17225;
var statearr_17242_18978 = state_17225__$1;
(statearr_17242_18978[(2)] = null);

(statearr_17242_18978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (5))){
var inst_17210 = cljs.core.async.close_BANG_(out);
var state_17225__$1 = state_17225;
var statearr_17243_18979 = state_17225__$1;
(statearr_17243_18979[(2)] = inst_17210);

(statearr_17243_18979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (10))){
var inst_17218 = (state_17225[(2)]);
var state_17225__$1 = (function (){var statearr_17244 = state_17225;
(statearr_17244[(8)] = inst_17218);

return statearr_17244;
})();
var statearr_17245_18981 = state_17225__$1;
(statearr_17245_18981[(2)] = null);

(statearr_17245_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17226 === (8))){
var inst_17206 = (state_17225[(7)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17225__$1,(11),out,inst_17206);
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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_17249 = [null,null,null,null,null,null,null,null,null];
(statearr_17249[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_17249[(1)] = (1));

return statearr_17249;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_17225){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_17225);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17252){var ex__13651__auto__ = e17252;
var statearr_17255_18989 = state_17225;
(statearr_17255_18989[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_17225[(4)]))){
var statearr_17256_18990 = state_17225;
(statearr_17256_18990[(1)] = cljs.core.first((state_17225[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18992 = state_17225;
state_17225 = G__18992;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_17225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_17225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17260 = f__13959__auto__();
(statearr_17260[(6)] = c__13958__auto___18970);

return statearr_17260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17263 = arguments.length;
switch (G__17263) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13958__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_17339){
var state_val_17340 = (state_17339[(1)]);
if((state_val_17340 === (7))){
var inst_17328 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17341_18997 = state_17339__$1;
(statearr_17341_18997[(2)] = inst_17328);

(statearr_17341_18997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (20))){
var inst_17297 = (state_17339[(7)]);
var inst_17308 = (state_17339[(2)]);
var inst_17309 = cljs.core.next(inst_17297);
var inst_17283 = inst_17309;
var inst_17284 = null;
var inst_17285 = (0);
var inst_17286 = (0);
var state_17339__$1 = (function (){var statearr_17342 = state_17339;
(statearr_17342[(8)] = inst_17285);

(statearr_17342[(9)] = inst_17308);

(statearr_17342[(10)] = inst_17284);

(statearr_17342[(11)] = inst_17286);

(statearr_17342[(12)] = inst_17283);

return statearr_17342;
})();
var statearr_17344_18998 = state_17339__$1;
(statearr_17344_18998[(2)] = null);

(statearr_17344_18998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (1))){
var state_17339__$1 = state_17339;
var statearr_17348_19000 = state_17339__$1;
(statearr_17348_19000[(2)] = null);

(statearr_17348_19000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (4))){
var inst_17272 = (state_17339[(13)]);
var inst_17272__$1 = (state_17339[(2)]);
var inst_17273 = (inst_17272__$1 == null);
var state_17339__$1 = (function (){var statearr_17349 = state_17339;
(statearr_17349[(13)] = inst_17272__$1);

return statearr_17349;
})();
if(cljs.core.truth_(inst_17273)){
var statearr_17350_19001 = state_17339__$1;
(statearr_17350_19001[(1)] = (5));

} else {
var statearr_17351_19002 = state_17339__$1;
(statearr_17351_19002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (15))){
var state_17339__$1 = state_17339;
var statearr_17357_19003 = state_17339__$1;
(statearr_17357_19003[(2)] = null);

(statearr_17357_19003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (21))){
var state_17339__$1 = state_17339;
var statearr_17362_19004 = state_17339__$1;
(statearr_17362_19004[(2)] = null);

(statearr_17362_19004[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (13))){
var inst_17285 = (state_17339[(8)]);
var inst_17284 = (state_17339[(10)]);
var inst_17286 = (state_17339[(11)]);
var inst_17283 = (state_17339[(12)]);
var inst_17293 = (state_17339[(2)]);
var inst_17294 = (inst_17286 + (1));
var tmp17352 = inst_17285;
var tmp17353 = inst_17284;
var tmp17354 = inst_17283;
var inst_17283__$1 = tmp17354;
var inst_17284__$1 = tmp17353;
var inst_17285__$1 = tmp17352;
var inst_17286__$1 = inst_17294;
var state_17339__$1 = (function (){var statearr_17367 = state_17339;
(statearr_17367[(8)] = inst_17285__$1);

(statearr_17367[(14)] = inst_17293);

(statearr_17367[(10)] = inst_17284__$1);

(statearr_17367[(11)] = inst_17286__$1);

(statearr_17367[(12)] = inst_17283__$1);

return statearr_17367;
})();
var statearr_17370_19006 = state_17339__$1;
(statearr_17370_19006[(2)] = null);

(statearr_17370_19006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (22))){
var state_17339__$1 = state_17339;
var statearr_17373_19010 = state_17339__$1;
(statearr_17373_19010[(2)] = null);

(statearr_17373_19010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (6))){
var inst_17272 = (state_17339[(13)]);
var inst_17281 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17272) : f.call(null,inst_17272));
var inst_17282 = cljs.core.seq(inst_17281);
var inst_17283 = inst_17282;
var inst_17284 = null;
var inst_17285 = (0);
var inst_17286 = (0);
var state_17339__$1 = (function (){var statearr_17376 = state_17339;
(statearr_17376[(8)] = inst_17285);

(statearr_17376[(10)] = inst_17284);

(statearr_17376[(11)] = inst_17286);

(statearr_17376[(12)] = inst_17283);

return statearr_17376;
})();
var statearr_17377_19011 = state_17339__$1;
(statearr_17377_19011[(2)] = null);

(statearr_17377_19011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (17))){
var inst_17297 = (state_17339[(7)]);
var inst_17301 = cljs.core.chunk_first(inst_17297);
var inst_17302 = cljs.core.chunk_rest(inst_17297);
var inst_17303 = cljs.core.count(inst_17301);
var inst_17283 = inst_17302;
var inst_17284 = inst_17301;
var inst_17285 = inst_17303;
var inst_17286 = (0);
var state_17339__$1 = (function (){var statearr_17380 = state_17339;
(statearr_17380[(8)] = inst_17285);

(statearr_17380[(10)] = inst_17284);

(statearr_17380[(11)] = inst_17286);

(statearr_17380[(12)] = inst_17283);

return statearr_17380;
})();
var statearr_17383_19012 = state_17339__$1;
(statearr_17383_19012[(2)] = null);

(statearr_17383_19012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (3))){
var inst_17330 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17339__$1,inst_17330);
} else {
if((state_val_17340 === (12))){
var inst_17317 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17387_19013 = state_17339__$1;
(statearr_17387_19013[(2)] = inst_17317);

(statearr_17387_19013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (2))){
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17339__$1,(4),in$);
} else {
if((state_val_17340 === (23))){
var inst_17326 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17389_19014 = state_17339__$1;
(statearr_17389_19014[(2)] = inst_17326);

(statearr_17389_19014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (19))){
var inst_17312 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17394_19016 = state_17339__$1;
(statearr_17394_19016[(2)] = inst_17312);

(statearr_17394_19016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (11))){
var inst_17297 = (state_17339[(7)]);
var inst_17283 = (state_17339[(12)]);
var inst_17297__$1 = cljs.core.seq(inst_17283);
var state_17339__$1 = (function (){var statearr_17397 = state_17339;
(statearr_17397[(7)] = inst_17297__$1);

return statearr_17397;
})();
if(inst_17297__$1){
var statearr_17398_19017 = state_17339__$1;
(statearr_17398_19017[(1)] = (14));

} else {
var statearr_17399_19018 = state_17339__$1;
(statearr_17399_19018[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (9))){
var inst_17320 = (state_17339[(2)]);
var inst_17321 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17339__$1 = (function (){var statearr_17404 = state_17339;
(statearr_17404[(15)] = inst_17320);

return statearr_17404;
})();
if(cljs.core.truth_(inst_17321)){
var statearr_17412_19019 = state_17339__$1;
(statearr_17412_19019[(1)] = (21));

} else {
var statearr_17413_19020 = state_17339__$1;
(statearr_17413_19020[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (5))){
var inst_17275 = cljs.core.async.close_BANG_(out);
var state_17339__$1 = state_17339;
var statearr_17415_19021 = state_17339__$1;
(statearr_17415_19021[(2)] = inst_17275);

(statearr_17415_19021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (14))){
var inst_17297 = (state_17339[(7)]);
var inst_17299 = cljs.core.chunked_seq_QMARK_(inst_17297);
var state_17339__$1 = state_17339;
if(inst_17299){
var statearr_17416_19022 = state_17339__$1;
(statearr_17416_19022[(1)] = (17));

} else {
var statearr_17417_19023 = state_17339__$1;
(statearr_17417_19023[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (16))){
var inst_17315 = (state_17339[(2)]);
var state_17339__$1 = state_17339;
var statearr_17419_19024 = state_17339__$1;
(statearr_17419_19024[(2)] = inst_17315);

(statearr_17419_19024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17340 === (10))){
var inst_17284 = (state_17339[(10)]);
var inst_17286 = (state_17339[(11)]);
var inst_17291 = cljs.core._nth(inst_17284,inst_17286);
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17339__$1,(13),out,inst_17291);
} else {
if((state_val_17340 === (18))){
var inst_17297 = (state_17339[(7)]);
var inst_17306 = cljs.core.first(inst_17297);
var state_17339__$1 = state_17339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17339__$1,(20),out,inst_17306);
} else {
if((state_val_17340 === (8))){
var inst_17285 = (state_17339[(8)]);
var inst_17286 = (state_17339[(11)]);
var inst_17288 = (inst_17286 < inst_17285);
var inst_17289 = inst_17288;
var state_17339__$1 = state_17339;
if(cljs.core.truth_(inst_17289)){
var statearr_17423_19025 = state_17339__$1;
(statearr_17423_19025[(1)] = (10));

} else {
var statearr_17424_19026 = state_17339__$1;
(statearr_17424_19026[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____0 = (function (){
var statearr_17427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__);

(statearr_17427[(1)] = (1));

return statearr_17427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____1 = (function (state_17339){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_17339);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17428){var ex__13651__auto__ = e17428;
var statearr_17429_19027 = state_17339;
(statearr_17429_19027[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_17339[(4)]))){
var statearr_17430_19028 = state_17339;
(statearr_17430_19028[(1)] = cljs.core.first((state_17339[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19029 = state_17339;
state_17339 = G__19029;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__ = function(state_17339){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____1.call(this,state_17339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13648__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17431 = f__13959__auto__();
(statearr_17431[(6)] = c__13958__auto__);

return statearr_17431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

return c__13958__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17435 = arguments.length;
switch (G__17435) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17448 = arguments.length;
switch (G__17448) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17455 = arguments.length;
switch (G__17455) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___19036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_17498){
var state_val_17499 = (state_17498[(1)]);
if((state_val_17499 === (7))){
var inst_17487 = (state_17498[(2)]);
var state_17498__$1 = state_17498;
var statearr_17522_19038 = state_17498__$1;
(statearr_17522_19038[(2)] = inst_17487);

(statearr_17522_19038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (1))){
var inst_17463 = null;
var state_17498__$1 = (function (){var statearr_17527 = state_17498;
(statearr_17527[(7)] = inst_17463);

return statearr_17527;
})();
var statearr_17528_19039 = state_17498__$1;
(statearr_17528_19039[(2)] = null);

(statearr_17528_19039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (4))){
var inst_17466 = (state_17498[(8)]);
var inst_17466__$1 = (state_17498[(2)]);
var inst_17468 = (inst_17466__$1 == null);
var inst_17469 = cljs.core.not(inst_17468);
var state_17498__$1 = (function (){var statearr_17531 = state_17498;
(statearr_17531[(8)] = inst_17466__$1);

return statearr_17531;
})();
if(inst_17469){
var statearr_17538_19043 = state_17498__$1;
(statearr_17538_19043[(1)] = (5));

} else {
var statearr_17539_19044 = state_17498__$1;
(statearr_17539_19044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (6))){
var state_17498__$1 = state_17498;
var statearr_17543_19045 = state_17498__$1;
(statearr_17543_19045[(2)] = null);

(statearr_17543_19045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (3))){
var inst_17489 = (state_17498[(2)]);
var inst_17492 = cljs.core.async.close_BANG_(out);
var state_17498__$1 = (function (){var statearr_17544 = state_17498;
(statearr_17544[(9)] = inst_17489);

return statearr_17544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17498__$1,inst_17492);
} else {
if((state_val_17499 === (2))){
var state_17498__$1 = state_17498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17498__$1,(4),ch);
} else {
if((state_val_17499 === (11))){
var inst_17466 = (state_17498[(8)]);
var inst_17481 = (state_17498[(2)]);
var inst_17463 = inst_17466;
var state_17498__$1 = (function (){var statearr_17546 = state_17498;
(statearr_17546[(10)] = inst_17481);

(statearr_17546[(7)] = inst_17463);

return statearr_17546;
})();
var statearr_17547_19046 = state_17498__$1;
(statearr_17547_19046[(2)] = null);

(statearr_17547_19046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (9))){
var inst_17466 = (state_17498[(8)]);
var state_17498__$1 = state_17498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17498__$1,(11),out,inst_17466);
} else {
if((state_val_17499 === (5))){
var inst_17466 = (state_17498[(8)]);
var inst_17463 = (state_17498[(7)]);
var inst_17472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17466,inst_17463);
var state_17498__$1 = state_17498;
if(inst_17472){
var statearr_17549_19047 = state_17498__$1;
(statearr_17549_19047[(1)] = (8));

} else {
var statearr_17553_19048 = state_17498__$1;
(statearr_17553_19048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (10))){
var inst_17484 = (state_17498[(2)]);
var state_17498__$1 = state_17498;
var statearr_17554_19049 = state_17498__$1;
(statearr_17554_19049[(2)] = inst_17484);

(statearr_17554_19049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (8))){
var inst_17463 = (state_17498[(7)]);
var tmp17548 = inst_17463;
var inst_17463__$1 = tmp17548;
var state_17498__$1 = (function (){var statearr_17555 = state_17498;
(statearr_17555[(7)] = inst_17463__$1);

return statearr_17555;
})();
var statearr_17556_19050 = state_17498__$1;
(statearr_17556_19050[(2)] = null);

(statearr_17556_19050[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_17567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17567[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_17567[(1)] = (1));

return statearr_17567;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_17498){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_17498);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17568){var ex__13651__auto__ = e17568;
var statearr_17569_19051 = state_17498;
(statearr_17569_19051[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_17498[(4)]))){
var statearr_17572_19052 = state_17498;
(statearr_17572_19052[(1)] = cljs.core.first((state_17498[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19053 = state_17498;
state_17498 = G__19053;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_17498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_17498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17582 = f__13959__auto__();
(statearr_17582[(6)] = c__13958__auto___19036);

return statearr_17582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17592 = arguments.length;
switch (G__17592) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___19055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_17638){
var state_val_17639 = (state_17638[(1)]);
if((state_val_17639 === (7))){
var inst_17634 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
var statearr_17640_19056 = state_17638__$1;
(statearr_17640_19056[(2)] = inst_17634);

(statearr_17640_19056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (1))){
var inst_17597 = (new Array(n));
var inst_17600 = inst_17597;
var inst_17601 = (0);
var state_17638__$1 = (function (){var statearr_17644 = state_17638;
(statearr_17644[(7)] = inst_17600);

(statearr_17644[(8)] = inst_17601);

return statearr_17644;
})();
var statearr_17645_19058 = state_17638__$1;
(statearr_17645_19058[(2)] = null);

(statearr_17645_19058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (4))){
var inst_17604 = (state_17638[(9)]);
var inst_17604__$1 = (state_17638[(2)]);
var inst_17605 = (inst_17604__$1 == null);
var inst_17606 = cljs.core.not(inst_17605);
var state_17638__$1 = (function (){var statearr_17647 = state_17638;
(statearr_17647[(9)] = inst_17604__$1);

return statearr_17647;
})();
if(inst_17606){
var statearr_17648_19059 = state_17638__$1;
(statearr_17648_19059[(1)] = (5));

} else {
var statearr_17651_19060 = state_17638__$1;
(statearr_17651_19060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (15))){
var inst_17628 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
var statearr_17652_19061 = state_17638__$1;
(statearr_17652_19061[(2)] = inst_17628);

(statearr_17652_19061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (13))){
var state_17638__$1 = state_17638;
var statearr_17656_19062 = state_17638__$1;
(statearr_17656_19062[(2)] = null);

(statearr_17656_19062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (6))){
var inst_17601 = (state_17638[(8)]);
var inst_17624 = (inst_17601 > (0));
var state_17638__$1 = state_17638;
if(cljs.core.truth_(inst_17624)){
var statearr_17665_19063 = state_17638__$1;
(statearr_17665_19063[(1)] = (12));

} else {
var statearr_17672_19064 = state_17638__$1;
(statearr_17672_19064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (3))){
var inst_17636 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17638__$1,inst_17636);
} else {
if((state_val_17639 === (12))){
var inst_17600 = (state_17638[(7)]);
var inst_17626 = cljs.core.vec(inst_17600);
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17638__$1,(15),out,inst_17626);
} else {
if((state_val_17639 === (2))){
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17638__$1,(4),ch);
} else {
if((state_val_17639 === (11))){
var inst_17616 = (state_17638[(2)]);
var inst_17617 = (new Array(n));
var inst_17600 = inst_17617;
var inst_17601 = (0);
var state_17638__$1 = (function (){var statearr_17691 = state_17638;
(statearr_17691[(7)] = inst_17600);

(statearr_17691[(8)] = inst_17601);

(statearr_17691[(10)] = inst_17616);

return statearr_17691;
})();
var statearr_17696_19065 = state_17638__$1;
(statearr_17696_19065[(2)] = null);

(statearr_17696_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (9))){
var inst_17600 = (state_17638[(7)]);
var inst_17614 = cljs.core.vec(inst_17600);
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17638__$1,(11),out,inst_17614);
} else {
if((state_val_17639 === (5))){
var inst_17600 = (state_17638[(7)]);
var inst_17604 = (state_17638[(9)]);
var inst_17601 = (state_17638[(8)]);
var inst_17609 = (state_17638[(11)]);
var inst_17608 = (inst_17600[inst_17601] = inst_17604);
var inst_17609__$1 = (inst_17601 + (1));
var inst_17610 = (inst_17609__$1 < n);
var state_17638__$1 = (function (){var statearr_17702 = state_17638;
(statearr_17702[(11)] = inst_17609__$1);

(statearr_17702[(12)] = inst_17608);

return statearr_17702;
})();
if(cljs.core.truth_(inst_17610)){
var statearr_17711_19067 = state_17638__$1;
(statearr_17711_19067[(1)] = (8));

} else {
var statearr_17715_19068 = state_17638__$1;
(statearr_17715_19068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (14))){
var inst_17631 = (state_17638[(2)]);
var inst_17632 = cljs.core.async.close_BANG_(out);
var state_17638__$1 = (function (){var statearr_17723 = state_17638;
(statearr_17723[(13)] = inst_17631);

return statearr_17723;
})();
var statearr_17726_19070 = state_17638__$1;
(statearr_17726_19070[(2)] = inst_17632);

(statearr_17726_19070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (10))){
var inst_17622 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
var statearr_17734_19072 = state_17638__$1;
(statearr_17734_19072[(2)] = inst_17622);

(statearr_17734_19072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17639 === (8))){
var inst_17600 = (state_17638[(7)]);
var inst_17609 = (state_17638[(11)]);
var tmp17722 = inst_17600;
var inst_17600__$1 = tmp17722;
var inst_17601 = inst_17609;
var state_17638__$1 = (function (){var statearr_17735 = state_17638;
(statearr_17735[(7)] = inst_17600__$1);

(statearr_17735[(8)] = inst_17601);

return statearr_17735;
})();
var statearr_17739_19077 = state_17638__$1;
(statearr_17739_19077[(2)] = null);

(statearr_17739_19077[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_17744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17744[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_17744[(1)] = (1));

return statearr_17744;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_17638){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_17638);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17746){var ex__13651__auto__ = e17746;
var statearr_17749_19079 = state_17638;
(statearr_17749_19079[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_17638[(4)]))){
var statearr_17753_19080 = state_17638;
(statearr_17753_19080[(1)] = cljs.core.first((state_17638[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19081 = state_17638;
state_17638 = G__19081;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_17638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_17638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17756 = f__13959__auto__();
(statearr_17756[(6)] = c__13958__auto___19055);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17763 = arguments.length;
switch (G__17763) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13958__auto___19083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_17820){
var state_val_17825 = (state_17820[(1)]);
if((state_val_17825 === (7))){
var inst_17816 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17831_19084 = state_17820__$1;
(statearr_17831_19084[(2)] = inst_17816);

(statearr_17831_19084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (1))){
var inst_17776 = [];
var inst_17777 = inst_17776;
var inst_17778 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17820__$1 = (function (){var statearr_17832 = state_17820;
(statearr_17832[(7)] = inst_17777);

(statearr_17832[(8)] = inst_17778);

return statearr_17832;
})();
var statearr_17833_19085 = state_17820__$1;
(statearr_17833_19085[(2)] = null);

(statearr_17833_19085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (4))){
var inst_17781 = (state_17820[(9)]);
var inst_17781__$1 = (state_17820[(2)]);
var inst_17782 = (inst_17781__$1 == null);
var inst_17783 = cljs.core.not(inst_17782);
var state_17820__$1 = (function (){var statearr_17838 = state_17820;
(statearr_17838[(9)] = inst_17781__$1);

return statearr_17838;
})();
if(inst_17783){
var statearr_17839_19086 = state_17820__$1;
(statearr_17839_19086[(1)] = (5));

} else {
var statearr_17840_19087 = state_17820__$1;
(statearr_17840_19087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (15))){
var inst_17777 = (state_17820[(7)]);
var inst_17808 = cljs.core.vec(inst_17777);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17820__$1,(18),out,inst_17808);
} else {
if((state_val_17825 === (13))){
var inst_17803 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17841_19089 = state_17820__$1;
(statearr_17841_19089[(2)] = inst_17803);

(statearr_17841_19089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (6))){
var inst_17777 = (state_17820[(7)]);
var inst_17805 = inst_17777.length;
var inst_17806 = (inst_17805 > (0));
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17806)){
var statearr_17842_19090 = state_17820__$1;
(statearr_17842_19090[(1)] = (15));

} else {
var statearr_17843_19091 = state_17820__$1;
(statearr_17843_19091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (17))){
var inst_17813 = (state_17820[(2)]);
var inst_17814 = cljs.core.async.close_BANG_(out);
var state_17820__$1 = (function (){var statearr_17844 = state_17820;
(statearr_17844[(10)] = inst_17813);

return statearr_17844;
})();
var statearr_17845_19092 = state_17820__$1;
(statearr_17845_19092[(2)] = inst_17814);

(statearr_17845_19092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (3))){
var inst_17818 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17820__$1,inst_17818);
} else {
if((state_val_17825 === (12))){
var inst_17777 = (state_17820[(7)]);
var inst_17796 = cljs.core.vec(inst_17777);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17820__$1,(14),out,inst_17796);
} else {
if((state_val_17825 === (2))){
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17820__$1,(4),ch);
} else {
if((state_val_17825 === (11))){
var inst_17777 = (state_17820[(7)]);
var inst_17785 = (state_17820[(11)]);
var inst_17781 = (state_17820[(9)]);
var inst_17793 = inst_17777.push(inst_17781);
var tmp17846 = inst_17777;
var inst_17777__$1 = tmp17846;
var inst_17778 = inst_17785;
var state_17820__$1 = (function (){var statearr_17847 = state_17820;
(statearr_17847[(7)] = inst_17777__$1);

(statearr_17847[(8)] = inst_17778);

(statearr_17847[(12)] = inst_17793);

return statearr_17847;
})();
var statearr_17848_19097 = state_17820__$1;
(statearr_17848_19097[(2)] = null);

(statearr_17848_19097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (9))){
var inst_17778 = (state_17820[(8)]);
var inst_17789 = cljs.core.keyword_identical_QMARK_(inst_17778,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17820__$1 = state_17820;
var statearr_17849_19098 = state_17820__$1;
(statearr_17849_19098[(2)] = inst_17789);

(statearr_17849_19098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (5))){
var inst_17785 = (state_17820[(11)]);
var inst_17786 = (state_17820[(13)]);
var inst_17778 = (state_17820[(8)]);
var inst_17781 = (state_17820[(9)]);
var inst_17785__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17781) : f.call(null,inst_17781));
var inst_17786__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17785__$1,inst_17778);
var state_17820__$1 = (function (){var statearr_17850 = state_17820;
(statearr_17850[(11)] = inst_17785__$1);

(statearr_17850[(13)] = inst_17786__$1);

return statearr_17850;
})();
if(inst_17786__$1){
var statearr_17851_19099 = state_17820__$1;
(statearr_17851_19099[(1)] = (8));

} else {
var statearr_17852_19100 = state_17820__$1;
(statearr_17852_19100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (14))){
var inst_17785 = (state_17820[(11)]);
var inst_17781 = (state_17820[(9)]);
var inst_17798 = (state_17820[(2)]);
var inst_17799 = [];
var inst_17800 = inst_17799.push(inst_17781);
var inst_17777 = inst_17799;
var inst_17778 = inst_17785;
var state_17820__$1 = (function (){var statearr_17853 = state_17820;
(statearr_17853[(7)] = inst_17777);

(statearr_17853[(14)] = inst_17800);

(statearr_17853[(8)] = inst_17778);

(statearr_17853[(15)] = inst_17798);

return statearr_17853;
})();
var statearr_17854_19101 = state_17820__$1;
(statearr_17854_19101[(2)] = null);

(statearr_17854_19101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (16))){
var state_17820__$1 = state_17820;
var statearr_17855_19102 = state_17820__$1;
(statearr_17855_19102[(2)] = null);

(statearr_17855_19102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (10))){
var inst_17791 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17791)){
var statearr_17856_19103 = state_17820__$1;
(statearr_17856_19103[(1)] = (11));

} else {
var statearr_17857_19104 = state_17820__$1;
(statearr_17857_19104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (18))){
var inst_17810 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17860_19105 = state_17820__$1;
(statearr_17860_19105[(2)] = inst_17810);

(statearr_17860_19105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17825 === (8))){
var inst_17786 = (state_17820[(13)]);
var state_17820__$1 = state_17820;
var statearr_17867_19106 = state_17820__$1;
(statearr_17867_19106[(2)] = inst_17786);

(statearr_17867_19106[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13648__auto__ = null;
var cljs$core$async$state_machine__13648__auto____0 = (function (){
var statearr_17872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17872[(0)] = cljs$core$async$state_machine__13648__auto__);

(statearr_17872[(1)] = (1));

return statearr_17872;
});
var cljs$core$async$state_machine__13648__auto____1 = (function (state_17820){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_17820);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e17875){var ex__13651__auto__ = e17875;
var statearr_17876_19107 = state_17820;
(statearr_17876_19107[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_17820[(4)]))){
var statearr_17877_19108 = state_17820;
(statearr_17877_19108[(1)] = cljs.core.first((state_17820[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19109 = state_17820;
state_17820 = G__19109;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
cljs$core$async$state_machine__13648__auto__ = function(state_17820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13648__auto____1.call(this,state_17820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13648__auto____0;
cljs$core$async$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13648__auto____1;
return cljs$core$async$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_17885 = f__13959__auto__();
(statearr_17885[(6)] = c__13958__auto___19083);

return statearr_17885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
