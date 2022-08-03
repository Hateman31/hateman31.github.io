goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15921 = arguments.length;
switch (G__15921) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15922 = (function (f,blockable,meta15923){
this.f = f;
this.blockable = blockable;
this.meta15923 = meta15923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15924,meta15923__$1){
var self__ = this;
var _15924__$1 = this;
return (new cljs.core.async.t_cljs$core$async15922(self__.f,self__.blockable,meta15923__$1));
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15924){
var self__ = this;
var _15924__$1 = this;
return self__.meta15923;
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15923","meta15923",-191182116,null)], null);
}));

(cljs.core.async.t_cljs$core$async15922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15922");

(cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15922.
 */
cljs.core.async.__GT_t_cljs$core$async15922 = (function cljs$core$async$__GT_t_cljs$core$async15922(f__$1,blockable__$1,meta15923){
return (new cljs.core.async.t_cljs$core$async15922(f__$1,blockable__$1,meta15923));
});

}

return (new cljs.core.async.t_cljs$core$async15922(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15927 = arguments.length;
switch (G__15927) {
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
var G__15932 = arguments.length;
switch (G__15932) {
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
var G__15934 = arguments.length;
switch (G__15934) {
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
var val_17473 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17473) : fn1.call(null,val_17473));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17473) : fn1.call(null,val_17473));
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
var G__15937 = arguments.length;
switch (G__15937) {
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
var n__5636__auto___17476 = n;
var x_17477 = (0);
while(true){
if((x_17477 < n__5636__auto___17476)){
(a[x_17477] = x_17477);

var G__17478 = (x_17477 + (1));
x_17477 = G__17478;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15950 = (function (flag,meta15951){
this.flag = flag;
this.meta15951 = meta15951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15952,meta15951__$1){
var self__ = this;
var _15952__$1 = this;
return (new cljs.core.async.t_cljs$core$async15950(self__.flag,meta15951__$1));
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15952){
var self__ = this;
var _15952__$1 = this;
return self__.meta15951;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15951","meta15951",1051238096,null)], null);
}));

(cljs.core.async.t_cljs$core$async15950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15950");

(cljs.core.async.t_cljs$core$async15950.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15950.
 */
cljs.core.async.__GT_t_cljs$core$async15950 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15950(flag__$1,meta15951){
return (new cljs.core.async.t_cljs$core$async15950(flag__$1,meta15951));
});

}

return (new cljs.core.async.t_cljs$core$async15950(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15959 = (function (flag,cb,meta15960){
this.flag = flag;
this.cb = cb;
this.meta15960 = meta15960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15961,meta15960__$1){
var self__ = this;
var _15961__$1 = this;
return (new cljs.core.async.t_cljs$core$async15959(self__.flag,self__.cb,meta15960__$1));
}));

(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15961){
var self__ = this;
var _15961__$1 = this;
return self__.meta15960;
}));

(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15960","meta15960",1490749115,null)], null);
}));

(cljs.core.async.t_cljs$core$async15959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15959");

(cljs.core.async.t_cljs$core$async15959.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15959.
 */
cljs.core.async.__GT_t_cljs$core$async15959 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15959(flag__$1,cb__$1,meta15960){
return (new cljs.core.async.t_cljs$core$async15959(flag__$1,cb__$1,meta15960));
});

}

return (new cljs.core.async.t_cljs$core$async15959(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15962_SHARP_){
var G__15964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15962_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15964) : fret.call(null,G__15964));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15963_SHARP_){
var G__15965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15963_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15965) : fret.call(null,G__15965));
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
var G__17479 = (i + (1));
i = G__17479;
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
var len__5769__auto___17480 = arguments.length;
var i__5770__auto___17481 = (0);
while(true){
if((i__5770__auto___17481 < len__5769__auto___17480)){
args__5775__auto__.push((arguments[i__5770__auto___17481]));

var G__17482 = (i__5770__auto___17481 + (1));
i__5770__auto___17481 = G__17482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15968){
var map__15969 = p__15968;
var map__15969__$1 = cljs.core.__destructure_map(map__15969);
var opts = map__15969__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15966){
var G__15967 = cljs.core.first(seq15966);
var seq15966__$1 = cljs.core.next(seq15966);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15967,seq15966__$1);
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
var G__15971 = arguments.length;
switch (G__15971) {
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
var c__15843__auto___17484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_15995){
var state_val_15996 = (state_15995[(1)]);
if((state_val_15996 === (7))){
var inst_15991 = (state_15995[(2)]);
var state_15995__$1 = state_15995;
var statearr_15997_17487 = state_15995__$1;
(statearr_15997_17487[(2)] = inst_15991);

(statearr_15997_17487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (1))){
var state_15995__$1 = state_15995;
var statearr_15998_17488 = state_15995__$1;
(statearr_15998_17488[(2)] = null);

(statearr_15998_17488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (4))){
var inst_15974 = (state_15995[(7)]);
var inst_15974__$1 = (state_15995[(2)]);
var inst_15975 = (inst_15974__$1 == null);
var state_15995__$1 = (function (){var statearr_15999 = state_15995;
(statearr_15999[(7)] = inst_15974__$1);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15975)){
var statearr_16000_17489 = state_15995__$1;
(statearr_16000_17489[(1)] = (5));

} else {
var statearr_16001_17490 = state_15995__$1;
(statearr_16001_17490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (13))){
var state_15995__$1 = state_15995;
var statearr_16002_17491 = state_15995__$1;
(statearr_16002_17491[(2)] = null);

(statearr_16002_17491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (6))){
var inst_15974 = (state_15995[(7)]);
var state_15995__$1 = state_15995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15995__$1,(11),to,inst_15974);
} else {
if((state_val_15996 === (3))){
var inst_15993 = (state_15995[(2)]);
var state_15995__$1 = state_15995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15995__$1,inst_15993);
} else {
if((state_val_15996 === (12))){
var state_15995__$1 = state_15995;
var statearr_16003_17492 = state_15995__$1;
(statearr_16003_17492[(2)] = null);

(statearr_16003_17492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (2))){
var state_15995__$1 = state_15995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15995__$1,(4),from);
} else {
if((state_val_15996 === (11))){
var inst_15984 = (state_15995[(2)]);
var state_15995__$1 = state_15995;
if(cljs.core.truth_(inst_15984)){
var statearr_16004_17493 = state_15995__$1;
(statearr_16004_17493[(1)] = (12));

} else {
var statearr_16005_17494 = state_15995__$1;
(statearr_16005_17494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (9))){
var state_15995__$1 = state_15995;
var statearr_16006_17495 = state_15995__$1;
(statearr_16006_17495[(2)] = null);

(statearr_16006_17495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (5))){
var state_15995__$1 = state_15995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16007_17496 = state_15995__$1;
(statearr_16007_17496[(1)] = (8));

} else {
var statearr_16008_17497 = state_15995__$1;
(statearr_16008_17497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (14))){
var inst_15989 = (state_15995[(2)]);
var state_15995__$1 = state_15995;
var statearr_16009_17498 = state_15995__$1;
(statearr_16009_17498[(2)] = inst_15989);

(statearr_16009_17498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (10))){
var inst_15981 = (state_15995[(2)]);
var state_15995__$1 = state_15995;
var statearr_16010_17499 = state_15995__$1;
(statearr_16010_17499[(2)] = inst_15981);

(statearr_16010_17499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15996 === (8))){
var inst_15978 = cljs.core.async.close_BANG_(to);
var state_15995__$1 = state_15995;
var statearr_16011_17500 = state_15995__$1;
(statearr_16011_17500[(2)] = inst_15978);

(statearr_16011_17500[(1)] = (10));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_16012 = [null,null,null,null,null,null,null,null];
(statearr_16012[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_16012[(1)] = (1));

return statearr_16012;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_15995){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_15995);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16013){var ex__15574__auto__ = e16013;
var statearr_16014_17501 = state_15995;
(statearr_16014_17501[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_15995[(4)]))){
var statearr_16015_17502 = state_15995;
(statearr_16015_17502[(1)] = cljs.core.first((state_15995[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17503 = state_15995;
state_15995 = G__17503;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_15995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_15995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16016 = f__15847__auto__();
(statearr_16016[(6)] = c__15843__auto___17484);

return statearr_16016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var process__$1 = (function (p__16017){
var vec__16018 = p__16017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(1),null);
var job = vec__16018;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15843__auto___17504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16025){
var state_val_16026 = (state_16025[(1)]);
if((state_val_16026 === (1))){
var state_16025__$1 = state_16025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16025__$1,(2),res,v);
} else {
if((state_val_16026 === (2))){
var inst_16022 = (state_16025[(2)]);
var inst_16023 = cljs.core.async.close_BANG_(res);
var state_16025__$1 = (function (){var statearr_16027 = state_16025;
(statearr_16027[(7)] = inst_16022);

return statearr_16027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16025__$1,inst_16023);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_16028 = [null,null,null,null,null,null,null,null];
(statearr_16028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__);

(statearr_16028[(1)] = (1));

return statearr_16028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1 = (function (state_16025){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16025);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16029){var ex__15574__auto__ = e16029;
var statearr_16030_17505 = state_16025;
(statearr_16030_17505[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16025[(4)]))){
var statearr_16031_17506 = state_16025;
(statearr_16031_17506[(1)] = cljs.core.first((state_16025[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17507 = state_16025;
state_16025 = G__17507;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = function(state_16025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1.call(this,state_16025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16032 = f__15847__auto__();
(statearr_16032[(6)] = c__15843__auto___17504);

return statearr_16032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16033){
var vec__16034 = p__16033;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(1),null);
var job = vec__16034;
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
var n__5636__auto___17508 = n;
var __17509 = (0);
while(true){
if((__17509 < n__5636__auto___17508)){
var G__16037_17510 = type;
var G__16037_17511__$1 = (((G__16037_17510 instanceof cljs.core.Keyword))?G__16037_17510.fqn:null);
switch (G__16037_17511__$1) {
case "compute":
var c__15843__auto___17513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17509,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = ((function (__17509,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function (state_16050){
var state_val_16051 = (state_16050[(1)]);
if((state_val_16051 === (1))){
var state_16050__$1 = state_16050;
var statearr_16052_17514 = state_16050__$1;
(statearr_16052_17514[(2)] = null);

(statearr_16052_17514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (2))){
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16050__$1,(4),jobs);
} else {
if((state_val_16051 === (3))){
var inst_16048 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16050__$1,inst_16048);
} else {
if((state_val_16051 === (4))){
var inst_16040 = (state_16050[(2)]);
var inst_16041 = process__$1(inst_16040);
var state_16050__$1 = state_16050;
if(cljs.core.truth_(inst_16041)){
var statearr_16053_17515 = state_16050__$1;
(statearr_16053_17515[(1)] = (5));

} else {
var statearr_16054_17516 = state_16050__$1;
(statearr_16054_17516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (5))){
var state_16050__$1 = state_16050;
var statearr_16055_17517 = state_16050__$1;
(statearr_16055_17517[(2)] = null);

(statearr_16055_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (6))){
var state_16050__$1 = state_16050;
var statearr_16056_17518 = state_16050__$1;
(statearr_16056_17518[(2)] = null);

(statearr_16056_17518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (7))){
var inst_16046 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16057_17519 = state_16050__$1;
(statearr_16057_17519[(2)] = inst_16046);

(statearr_16057_17519[(1)] = (3));


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
});})(__17509,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
;
return ((function (__17509,switch__15570__auto__,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_16058 = [null,null,null,null,null,null,null];
(statearr_16058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__);

(statearr_16058[(1)] = (1));

return statearr_16058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1 = (function (state_16050){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16050);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16059){var ex__15574__auto__ = e16059;
var statearr_16060_17520 = state_16050;
(statearr_16060_17520[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16050[(4)]))){
var statearr_16061_17521 = state_16050;
(statearr_16061_17521[(1)] = cljs.core.first((state_16050[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17522 = state_16050;
state_16050 = G__17522;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = function(state_16050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1.call(this,state_16050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__;
})()
;})(__17509,switch__15570__auto__,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
})();
var state__15848__auto__ = (function (){var statearr_16062 = f__15847__auto__();
(statearr_16062[(6)] = c__15843__auto___17513);

return statearr_16062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
});})(__17509,c__15843__auto___17513,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
);


break;
case "async":
var c__15843__auto___17523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17509,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = ((function (__17509,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function (state_16075){
var state_val_16076 = (state_16075[(1)]);
if((state_val_16076 === (1))){
var state_16075__$1 = state_16075;
var statearr_16077_17524 = state_16075__$1;
(statearr_16077_17524[(2)] = null);

(statearr_16077_17524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (2))){
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(4),jobs);
} else {
if((state_val_16076 === (3))){
var inst_16073 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16075__$1,inst_16073);
} else {
if((state_val_16076 === (4))){
var inst_16065 = (state_16075[(2)]);
var inst_16066 = async(inst_16065);
var state_16075__$1 = state_16075;
if(cljs.core.truth_(inst_16066)){
var statearr_16078_17525 = state_16075__$1;
(statearr_16078_17525[(1)] = (5));

} else {
var statearr_16079_17526 = state_16075__$1;
(statearr_16079_17526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (5))){
var state_16075__$1 = state_16075;
var statearr_16080_17527 = state_16075__$1;
(statearr_16080_17527[(2)] = null);

(statearr_16080_17527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (6))){
var state_16075__$1 = state_16075;
var statearr_16081_17528 = state_16075__$1;
(statearr_16081_17528[(2)] = null);

(statearr_16081_17528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (7))){
var inst_16071 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
var statearr_16082_17529 = state_16075__$1;
(statearr_16082_17529[(2)] = inst_16071);

(statearr_16082_17529[(1)] = (3));


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
});})(__17509,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
;
return ((function (__17509,switch__15570__auto__,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_16083 = [null,null,null,null,null,null,null];
(statearr_16083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__);

(statearr_16083[(1)] = (1));

return statearr_16083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1 = (function (state_16075){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16075);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16084){var ex__15574__auto__ = e16084;
var statearr_16085_17530 = state_16075;
(statearr_16085_17530[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16075[(4)]))){
var statearr_16086_17531 = state_16075;
(statearr_16086_17531[(1)] = cljs.core.first((state_16075[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17532 = state_16075;
state_16075 = G__17532;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = function(state_16075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1.call(this,state_16075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__;
})()
;})(__17509,switch__15570__auto__,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
})();
var state__15848__auto__ = (function (){var statearr_16087 = f__15847__auto__();
(statearr_16087[(6)] = c__15843__auto___17523);

return statearr_16087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
});})(__17509,c__15843__auto___17523,G__16037_17510,G__16037_17511__$1,n__5636__auto___17508,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16037_17511__$1)].join('')));

}

var G__17533 = (__17509 + (1));
__17509 = G__17533;
continue;
} else {
}
break;
}

var c__15843__auto___17534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16109){
var state_val_16110 = (state_16109[(1)]);
if((state_val_16110 === (7))){
var inst_16105 = (state_16109[(2)]);
var state_16109__$1 = state_16109;
var statearr_16111_17535 = state_16109__$1;
(statearr_16111_17535[(2)] = inst_16105);

(statearr_16111_17535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16110 === (1))){
var state_16109__$1 = state_16109;
var statearr_16112_17537 = state_16109__$1;
(statearr_16112_17537[(2)] = null);

(statearr_16112_17537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16110 === (4))){
var inst_16090 = (state_16109[(7)]);
var inst_16090__$1 = (state_16109[(2)]);
var inst_16091 = (inst_16090__$1 == null);
var state_16109__$1 = (function (){var statearr_16113 = state_16109;
(statearr_16113[(7)] = inst_16090__$1);

return statearr_16113;
})();
if(cljs.core.truth_(inst_16091)){
var statearr_16114_17538 = state_16109__$1;
(statearr_16114_17538[(1)] = (5));

} else {
var statearr_16115_17539 = state_16109__$1;
(statearr_16115_17539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16110 === (6))){
var inst_16095 = (state_16109[(8)]);
var inst_16090 = (state_16109[(7)]);
var inst_16095__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16097 = [inst_16090,inst_16095__$1];
var inst_16098 = (new cljs.core.PersistentVector(null,2,(5),inst_16096,inst_16097,null));
var state_16109__$1 = (function (){var statearr_16116 = state_16109;
(statearr_16116[(8)] = inst_16095__$1);

return statearr_16116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16109__$1,(8),jobs,inst_16098);
} else {
if((state_val_16110 === (3))){
var inst_16107 = (state_16109[(2)]);
var state_16109__$1 = state_16109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16109__$1,inst_16107);
} else {
if((state_val_16110 === (2))){
var state_16109__$1 = state_16109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16109__$1,(4),from);
} else {
if((state_val_16110 === (9))){
var inst_16102 = (state_16109[(2)]);
var state_16109__$1 = (function (){var statearr_16117 = state_16109;
(statearr_16117[(9)] = inst_16102);

return statearr_16117;
})();
var statearr_16118_17542 = state_16109__$1;
(statearr_16118_17542[(2)] = null);

(statearr_16118_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16110 === (5))){
var inst_16093 = cljs.core.async.close_BANG_(jobs);
var state_16109__$1 = state_16109;
var statearr_16119_17543 = state_16109__$1;
(statearr_16119_17543[(2)] = inst_16093);

(statearr_16119_17543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16110 === (8))){
var inst_16095 = (state_16109[(8)]);
var inst_16100 = (state_16109[(2)]);
var state_16109__$1 = (function (){var statearr_16120 = state_16109;
(statearr_16120[(10)] = inst_16100);

return statearr_16120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16109__$1,(9),results,inst_16095);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_16121 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__);

(statearr_16121[(1)] = (1));

return statearr_16121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1 = (function (state_16109){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16109);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16122){var ex__15574__auto__ = e16122;
var statearr_16123_17544 = state_16109;
(statearr_16123_17544[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16109[(4)]))){
var statearr_16124_17545 = state_16109;
(statearr_16124_17545[(1)] = cljs.core.first((state_16109[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17547 = state_16109;
state_16109 = G__17547;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = function(state_16109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1.call(this,state_16109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16125 = f__15847__auto__();
(statearr_16125[(6)] = c__15843__auto___17534);

return statearr_16125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


var c__15843__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16163){
var state_val_16164 = (state_16163[(1)]);
if((state_val_16164 === (7))){
var inst_16159 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16165_17549 = state_16163__$1;
(statearr_16165_17549[(2)] = inst_16159);

(statearr_16165_17549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (20))){
var state_16163__$1 = state_16163;
var statearr_16166_17550 = state_16163__$1;
(statearr_16166_17550[(2)] = null);

(statearr_16166_17550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (1))){
var state_16163__$1 = state_16163;
var statearr_16167_17551 = state_16163__$1;
(statearr_16167_17551[(2)] = null);

(statearr_16167_17551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (4))){
var inst_16128 = (state_16163[(7)]);
var inst_16128__$1 = (state_16163[(2)]);
var inst_16129 = (inst_16128__$1 == null);
var state_16163__$1 = (function (){var statearr_16168 = state_16163;
(statearr_16168[(7)] = inst_16128__$1);

return statearr_16168;
})();
if(cljs.core.truth_(inst_16129)){
var statearr_16169_17552 = state_16163__$1;
(statearr_16169_17552[(1)] = (5));

} else {
var statearr_16170_17553 = state_16163__$1;
(statearr_16170_17553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (15))){
var inst_16141 = (state_16163[(8)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16163__$1,(18),to,inst_16141);
} else {
if((state_val_16164 === (21))){
var inst_16154 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16171_17555 = state_16163__$1;
(statearr_16171_17555[(2)] = inst_16154);

(statearr_16171_17555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (13))){
var inst_16156 = (state_16163[(2)]);
var state_16163__$1 = (function (){var statearr_16172 = state_16163;
(statearr_16172[(9)] = inst_16156);

return statearr_16172;
})();
var statearr_16173_17557 = state_16163__$1;
(statearr_16173_17557[(2)] = null);

(statearr_16173_17557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (6))){
var inst_16128 = (state_16163[(7)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16163__$1,(11),inst_16128);
} else {
if((state_val_16164 === (17))){
var inst_16149 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
if(cljs.core.truth_(inst_16149)){
var statearr_16174_17558 = state_16163__$1;
(statearr_16174_17558[(1)] = (19));

} else {
var statearr_16175_17559 = state_16163__$1;
(statearr_16175_17559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (3))){
var inst_16161 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16163__$1,inst_16161);
} else {
if((state_val_16164 === (12))){
var inst_16138 = (state_16163[(10)]);
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16163__$1,(14),inst_16138);
} else {
if((state_val_16164 === (2))){
var state_16163__$1 = state_16163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16163__$1,(4),results);
} else {
if((state_val_16164 === (19))){
var state_16163__$1 = state_16163;
var statearr_16176_17560 = state_16163__$1;
(statearr_16176_17560[(2)] = null);

(statearr_16176_17560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (11))){
var inst_16138 = (state_16163[(2)]);
var state_16163__$1 = (function (){var statearr_16177 = state_16163;
(statearr_16177[(10)] = inst_16138);

return statearr_16177;
})();
var statearr_16178_17561 = state_16163__$1;
(statearr_16178_17561[(2)] = null);

(statearr_16178_17561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (9))){
var state_16163__$1 = state_16163;
var statearr_16179_17562 = state_16163__$1;
(statearr_16179_17562[(2)] = null);

(statearr_16179_17562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (5))){
var state_16163__$1 = state_16163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16180_17563 = state_16163__$1;
(statearr_16180_17563[(1)] = (8));

} else {
var statearr_16181_17565 = state_16163__$1;
(statearr_16181_17565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (14))){
var inst_16143 = (state_16163[(11)]);
var inst_16141 = (state_16163[(8)]);
var inst_16141__$1 = (state_16163[(2)]);
var inst_16142 = (inst_16141__$1 == null);
var inst_16143__$1 = cljs.core.not(inst_16142);
var state_16163__$1 = (function (){var statearr_16182 = state_16163;
(statearr_16182[(11)] = inst_16143__$1);

(statearr_16182[(8)] = inst_16141__$1);

return statearr_16182;
})();
if(inst_16143__$1){
var statearr_16183_17567 = state_16163__$1;
(statearr_16183_17567[(1)] = (15));

} else {
var statearr_16184_17568 = state_16163__$1;
(statearr_16184_17568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (16))){
var inst_16143 = (state_16163[(11)]);
var state_16163__$1 = state_16163;
var statearr_16185_17569 = state_16163__$1;
(statearr_16185_17569[(2)] = inst_16143);

(statearr_16185_17569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (10))){
var inst_16135 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16186_17570 = state_16163__$1;
(statearr_16186_17570[(2)] = inst_16135);

(statearr_16186_17570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (18))){
var inst_16146 = (state_16163[(2)]);
var state_16163__$1 = state_16163;
var statearr_16187_17571 = state_16163__$1;
(statearr_16187_17571[(2)] = inst_16146);

(statearr_16187_17571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16164 === (8))){
var inst_16132 = cljs.core.async.close_BANG_(to);
var state_16163__$1 = state_16163;
var statearr_16188_17572 = state_16163__$1;
(statearr_16188_17572[(2)] = inst_16132);

(statearr_16188_17572[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_16189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__);

(statearr_16189[(1)] = (1));

return statearr_16189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1 = (function (state_16163){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16163);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16190){var ex__15574__auto__ = e16190;
var statearr_16191_17573 = state_16163;
(statearr_16191_17573[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16163[(4)]))){
var statearr_16192_17574 = state_16163;
(statearr_16192_17574[(1)] = cljs.core.first((state_16163[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17575 = state_16163;
state_16163 = G__17575;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__ = function(state_16163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1.call(this,state_16163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16193 = f__15847__auto__();
(statearr_16193[(6)] = c__15843__auto__);

return statearr_16193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));

return c__15843__auto__;
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
var G__16195 = arguments.length;
switch (G__16195) {
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
var G__16197 = arguments.length;
switch (G__16197) {
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
var G__16199 = arguments.length;
switch (G__16199) {
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
var c__15843__auto___17581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16225){
var state_val_16226 = (state_16225[(1)]);
if((state_val_16226 === (7))){
var inst_16221 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16227_17582 = state_16225__$1;
(statearr_16227_17582[(2)] = inst_16221);

(statearr_16227_17582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (1))){
var state_16225__$1 = state_16225;
var statearr_16228_17583 = state_16225__$1;
(statearr_16228_17583[(2)] = null);

(statearr_16228_17583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (4))){
var inst_16202 = (state_16225[(7)]);
var inst_16202__$1 = (state_16225[(2)]);
var inst_16203 = (inst_16202__$1 == null);
var state_16225__$1 = (function (){var statearr_16229 = state_16225;
(statearr_16229[(7)] = inst_16202__$1);

return statearr_16229;
})();
if(cljs.core.truth_(inst_16203)){
var statearr_16230_17585 = state_16225__$1;
(statearr_16230_17585[(1)] = (5));

} else {
var statearr_16231_17586 = state_16225__$1;
(statearr_16231_17586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (13))){
var state_16225__$1 = state_16225;
var statearr_16232_17587 = state_16225__$1;
(statearr_16232_17587[(2)] = null);

(statearr_16232_17587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (6))){
var inst_16202 = (state_16225[(7)]);
var inst_16208 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16202) : p.call(null,inst_16202));
var state_16225__$1 = state_16225;
if(cljs.core.truth_(inst_16208)){
var statearr_16233_17589 = state_16225__$1;
(statearr_16233_17589[(1)] = (9));

} else {
var statearr_16234_17590 = state_16225__$1;
(statearr_16234_17590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (3))){
var inst_16223 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16225__$1,inst_16223);
} else {
if((state_val_16226 === (12))){
var state_16225__$1 = state_16225;
var statearr_16235_17591 = state_16225__$1;
(statearr_16235_17591[(2)] = null);

(statearr_16235_17591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (2))){
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16225__$1,(4),ch);
} else {
if((state_val_16226 === (11))){
var inst_16202 = (state_16225[(7)]);
var inst_16212 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16225__$1,(8),inst_16212,inst_16202);
} else {
if((state_val_16226 === (9))){
var state_16225__$1 = state_16225;
var statearr_16236_17592 = state_16225__$1;
(statearr_16236_17592[(2)] = tc);

(statearr_16236_17592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (5))){
var inst_16205 = cljs.core.async.close_BANG_(tc);
var inst_16206 = cljs.core.async.close_BANG_(fc);
var state_16225__$1 = (function (){var statearr_16237 = state_16225;
(statearr_16237[(8)] = inst_16205);

return statearr_16237;
})();
var statearr_16238_17593 = state_16225__$1;
(statearr_16238_17593[(2)] = inst_16206);

(statearr_16238_17593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (14))){
var inst_16219 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
var statearr_16239_17594 = state_16225__$1;
(statearr_16239_17594[(2)] = inst_16219);

(statearr_16239_17594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (10))){
var state_16225__$1 = state_16225;
var statearr_16240_17595 = state_16225__$1;
(statearr_16240_17595[(2)] = fc);

(statearr_16240_17595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16226 === (8))){
var inst_16214 = (state_16225[(2)]);
var state_16225__$1 = state_16225;
if(cljs.core.truth_(inst_16214)){
var statearr_16241_17597 = state_16225__$1;
(statearr_16241_17597[(1)] = (12));

} else {
var statearr_16242_17598 = state_16225__$1;
(statearr_16242_17598[(1)] = (13));

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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_16243 = [null,null,null,null,null,null,null,null,null];
(statearr_16243[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_16243[(1)] = (1));

return statearr_16243;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_16225){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16225);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16244){var ex__15574__auto__ = e16244;
var statearr_16245_17599 = state_16225;
(statearr_16245_17599[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16225[(4)]))){
var statearr_16246_17601 = state_16225;
(statearr_16246_17601[(1)] = cljs.core.first((state_16225[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17605 = state_16225;
state_16225 = G__17605;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_16225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_16225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16247 = f__15847__auto__();
(statearr_16247[(6)] = c__15843__auto___17581);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var c__15843__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16269){
var state_val_16270 = (state_16269[(1)]);
if((state_val_16270 === (7))){
var inst_16265 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16271_17606 = state_16269__$1;
(statearr_16271_17606[(2)] = inst_16265);

(statearr_16271_17606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (1))){
var inst_16248 = init;
var inst_16249 = inst_16248;
var state_16269__$1 = (function (){var statearr_16272 = state_16269;
(statearr_16272[(7)] = inst_16249);

return statearr_16272;
})();
var statearr_16273_17607 = state_16269__$1;
(statearr_16273_17607[(2)] = null);

(statearr_16273_17607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (4))){
var inst_16252 = (state_16269[(8)]);
var inst_16252__$1 = (state_16269[(2)]);
var inst_16253 = (inst_16252__$1 == null);
var state_16269__$1 = (function (){var statearr_16274 = state_16269;
(statearr_16274[(8)] = inst_16252__$1);

return statearr_16274;
})();
if(cljs.core.truth_(inst_16253)){
var statearr_16275_17608 = state_16269__$1;
(statearr_16275_17608[(1)] = (5));

} else {
var statearr_16276_17609 = state_16269__$1;
(statearr_16276_17609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (6))){
var inst_16252 = (state_16269[(8)]);
var inst_16249 = (state_16269[(7)]);
var inst_16256 = (state_16269[(9)]);
var inst_16256__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16249,inst_16252) : f.call(null,inst_16249,inst_16252));
var inst_16257 = cljs.core.reduced_QMARK_(inst_16256__$1);
var state_16269__$1 = (function (){var statearr_16277 = state_16269;
(statearr_16277[(9)] = inst_16256__$1);

return statearr_16277;
})();
if(inst_16257){
var statearr_16278_17610 = state_16269__$1;
(statearr_16278_17610[(1)] = (8));

} else {
var statearr_16279_17611 = state_16269__$1;
(statearr_16279_17611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (3))){
var inst_16267 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16269__$1,inst_16267);
} else {
if((state_val_16270 === (2))){
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16269__$1,(4),ch);
} else {
if((state_val_16270 === (9))){
var inst_16256 = (state_16269[(9)]);
var inst_16249 = inst_16256;
var state_16269__$1 = (function (){var statearr_16280 = state_16269;
(statearr_16280[(7)] = inst_16249);

return statearr_16280;
})();
var statearr_16281_17612 = state_16269__$1;
(statearr_16281_17612[(2)] = null);

(statearr_16281_17612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (5))){
var inst_16249 = (state_16269[(7)]);
var state_16269__$1 = state_16269;
var statearr_16282_17615 = state_16269__$1;
(statearr_16282_17615[(2)] = inst_16249);

(statearr_16282_17615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (10))){
var inst_16263 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16283_17616 = state_16269__$1;
(statearr_16283_17616[(2)] = inst_16263);

(statearr_16283_17616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (8))){
var inst_16256 = (state_16269[(9)]);
var inst_16259 = cljs.core.deref(inst_16256);
var state_16269__$1 = state_16269;
var statearr_16284_17617 = state_16269__$1;
(statearr_16284_17617[(2)] = inst_16259);

(statearr_16284_17617[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15571__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15571__auto____0 = (function (){
var statearr_16285 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16285[(0)] = cljs$core$async$reduce_$_state_machine__15571__auto__);

(statearr_16285[(1)] = (1));

return statearr_16285;
});
var cljs$core$async$reduce_$_state_machine__15571__auto____1 = (function (state_16269){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16269);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16286){var ex__15574__auto__ = e16286;
var statearr_16287_17618 = state_16269;
(statearr_16287_17618[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16269[(4)]))){
var statearr_16288_17619 = state_16269;
(statearr_16288_17619[(1)] = cljs.core.first((state_16269[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17620 = state_16269;
state_16269 = G__17620;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15571__auto__ = function(state_16269){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15571__auto____1.call(this,state_16269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15571__auto____0;
cljs$core$async$reduce_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15571__auto____1;
return cljs$core$async$reduce_$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16289 = f__15847__auto__();
(statearr_16289[(6)] = c__15843__auto__);

return statearr_16289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));

return c__15843__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15843__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16295){
var state_val_16296 = (state_16295[(1)]);
if((state_val_16296 === (1))){
var inst_16290 = cljs.core.async.reduce(f__$1,init,ch);
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16295__$1,(2),inst_16290);
} else {
if((state_val_16296 === (2))){
var inst_16292 = (state_16295[(2)]);
var inst_16293 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16292) : f__$1.call(null,inst_16292));
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16295__$1,inst_16293);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15571__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15571__auto____0 = (function (){
var statearr_16297 = [null,null,null,null,null,null,null];
(statearr_16297[(0)] = cljs$core$async$transduce_$_state_machine__15571__auto__);

(statearr_16297[(1)] = (1));

return statearr_16297;
});
var cljs$core$async$transduce_$_state_machine__15571__auto____1 = (function (state_16295){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16295);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16298){var ex__15574__auto__ = e16298;
var statearr_16299_17634 = state_16295;
(statearr_16299_17634[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16295[(4)]))){
var statearr_16300_17635 = state_16295;
(statearr_16300_17635[(1)] = cljs.core.first((state_16295[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17639 = state_16295;
state_16295 = G__17639;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15571__auto__ = function(state_16295){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15571__auto____1.call(this,state_16295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15571__auto____0;
cljs$core$async$transduce_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15571__auto____1;
return cljs$core$async$transduce_$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16301 = f__15847__auto__();
(statearr_16301[(6)] = c__15843__auto__);

return statearr_16301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));

return c__15843__auto__;
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
var G__16303 = arguments.length;
switch (G__16303) {
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
var c__15843__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16328){
var state_val_16329 = (state_16328[(1)]);
if((state_val_16329 === (7))){
var inst_16310 = (state_16328[(2)]);
var state_16328__$1 = state_16328;
var statearr_16330_17654 = state_16328__$1;
(statearr_16330_17654[(2)] = inst_16310);

(statearr_16330_17654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (1))){
var inst_16304 = cljs.core.seq(coll);
var inst_16305 = inst_16304;
var state_16328__$1 = (function (){var statearr_16331 = state_16328;
(statearr_16331[(7)] = inst_16305);

return statearr_16331;
})();
var statearr_16332_17655 = state_16328__$1;
(statearr_16332_17655[(2)] = null);

(statearr_16332_17655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (4))){
var inst_16305 = (state_16328[(7)]);
var inst_16308 = cljs.core.first(inst_16305);
var state_16328__$1 = state_16328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16328__$1,(7),ch,inst_16308);
} else {
if((state_val_16329 === (13))){
var inst_16322 = (state_16328[(2)]);
var state_16328__$1 = state_16328;
var statearr_16333_17660 = state_16328__$1;
(statearr_16333_17660[(2)] = inst_16322);

(statearr_16333_17660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (6))){
var inst_16313 = (state_16328[(2)]);
var state_16328__$1 = state_16328;
if(cljs.core.truth_(inst_16313)){
var statearr_16334_17661 = state_16328__$1;
(statearr_16334_17661[(1)] = (8));

} else {
var statearr_16335_17662 = state_16328__$1;
(statearr_16335_17662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (3))){
var inst_16326 = (state_16328[(2)]);
var state_16328__$1 = state_16328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16328__$1,inst_16326);
} else {
if((state_val_16329 === (12))){
var state_16328__$1 = state_16328;
var statearr_16336_17663 = state_16328__$1;
(statearr_16336_17663[(2)] = null);

(statearr_16336_17663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (2))){
var inst_16305 = (state_16328[(7)]);
var state_16328__$1 = state_16328;
if(cljs.core.truth_(inst_16305)){
var statearr_16337_17664 = state_16328__$1;
(statearr_16337_17664[(1)] = (4));

} else {
var statearr_16338_17665 = state_16328__$1;
(statearr_16338_17665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (11))){
var inst_16319 = cljs.core.async.close_BANG_(ch);
var state_16328__$1 = state_16328;
var statearr_16339_17666 = state_16328__$1;
(statearr_16339_17666[(2)] = inst_16319);

(statearr_16339_17666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (9))){
var state_16328__$1 = state_16328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16340_17667 = state_16328__$1;
(statearr_16340_17667[(1)] = (11));

} else {
var statearr_16341_17668 = state_16328__$1;
(statearr_16341_17668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (5))){
var inst_16305 = (state_16328[(7)]);
var state_16328__$1 = state_16328;
var statearr_16342_17669 = state_16328__$1;
(statearr_16342_17669[(2)] = inst_16305);

(statearr_16342_17669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (10))){
var inst_16324 = (state_16328[(2)]);
var state_16328__$1 = state_16328;
var statearr_16343_17670 = state_16328__$1;
(statearr_16343_17670[(2)] = inst_16324);

(statearr_16343_17670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16329 === (8))){
var inst_16305 = (state_16328[(7)]);
var inst_16315 = cljs.core.next(inst_16305);
var inst_16305__$1 = inst_16315;
var state_16328__$1 = (function (){var statearr_16344 = state_16328;
(statearr_16344[(7)] = inst_16305__$1);

return statearr_16344;
})();
var statearr_16345_17671 = state_16328__$1;
(statearr_16345_17671[(2)] = null);

(statearr_16345_17671[(1)] = (2));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_16346 = [null,null,null,null,null,null,null,null];
(statearr_16346[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_16346[(1)] = (1));

return statearr_16346;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_16328){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16328);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16347){var ex__15574__auto__ = e16347;
var statearr_16348_17672 = state_16328;
(statearr_16348_17672[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16328[(4)]))){
var statearr_16349_17673 = state_16328;
(statearr_16349_17673[(1)] = cljs.core.first((state_16328[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17674 = state_16328;
state_16328 = G__17674;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_16328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_16328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16350 = f__15847__auto__();
(statearr_16350[(6)] = c__15843__auto__);

return statearr_16350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));

return c__15843__auto__;
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
var G__16352 = arguments.length;
switch (G__16352) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17682 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_17682(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17685 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_17685(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17686 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_17686(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17691 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_17691(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16353 = (function (ch,cs,meta16354){
this.ch = ch;
this.cs = cs;
this.meta16354 = meta16354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16355,meta16354__$1){
var self__ = this;
var _16355__$1 = this;
return (new cljs.core.async.t_cljs$core$async16353(self__.ch,self__.cs,meta16354__$1));
}));

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16355){
var self__ = this;
var _16355__$1 = this;
return self__.meta16354;
}));

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16353.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16354","meta16354",1936764896,null)], null);
}));

(cljs.core.async.t_cljs$core$async16353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16353");

(cljs.core.async.t_cljs$core$async16353.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16353.
 */
cljs.core.async.__GT_t_cljs$core$async16353 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16353(ch__$1,cs__$1,meta16354){
return (new cljs.core.async.t_cljs$core$async16353(ch__$1,cs__$1,meta16354));
});

}

return (new cljs.core.async.t_cljs$core$async16353(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15843__auto___17709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16488){
var state_val_16489 = (state_16488[(1)]);
if((state_val_16489 === (7))){
var inst_16484 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16490_17710 = state_16488__$1;
(statearr_16490_17710[(2)] = inst_16484);

(statearr_16490_17710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (20))){
var inst_16389 = (state_16488[(7)]);
var inst_16401 = cljs.core.first(inst_16389);
var inst_16402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16401,(0),null);
var inst_16403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16401,(1),null);
var state_16488__$1 = (function (){var statearr_16491 = state_16488;
(statearr_16491[(8)] = inst_16402);

return statearr_16491;
})();
if(cljs.core.truth_(inst_16403)){
var statearr_16492_17711 = state_16488__$1;
(statearr_16492_17711[(1)] = (22));

} else {
var statearr_16493_17712 = state_16488__$1;
(statearr_16493_17712[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (27))){
var inst_16431 = (state_16488[(9)]);
var inst_16433 = (state_16488[(10)]);
var inst_16358 = (state_16488[(11)]);
var inst_16438 = (state_16488[(12)]);
var inst_16438__$1 = cljs.core._nth(inst_16431,inst_16433);
var inst_16439 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16438__$1,inst_16358,done);
var state_16488__$1 = (function (){var statearr_16494 = state_16488;
(statearr_16494[(12)] = inst_16438__$1);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16439)){
var statearr_16495_17713 = state_16488__$1;
(statearr_16495_17713[(1)] = (30));

} else {
var statearr_16496_17720 = state_16488__$1;
(statearr_16496_17720[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (1))){
var state_16488__$1 = state_16488;
var statearr_16497_17721 = state_16488__$1;
(statearr_16497_17721[(2)] = null);

(statearr_16497_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (24))){
var inst_16389 = (state_16488[(7)]);
var inst_16408 = (state_16488[(2)]);
var inst_16409 = cljs.core.next(inst_16389);
var inst_16367 = inst_16409;
var inst_16368 = null;
var inst_16369 = (0);
var inst_16370 = (0);
var state_16488__$1 = (function (){var statearr_16498 = state_16488;
(statearr_16498[(13)] = inst_16408);

(statearr_16498[(14)] = inst_16369);

(statearr_16498[(15)] = inst_16368);

(statearr_16498[(16)] = inst_16370);

(statearr_16498[(17)] = inst_16367);

return statearr_16498;
})();
var statearr_16499_17722 = state_16488__$1;
(statearr_16499_17722[(2)] = null);

(statearr_16499_17722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (39))){
var state_16488__$1 = state_16488;
var statearr_16503_17723 = state_16488__$1;
(statearr_16503_17723[(2)] = null);

(statearr_16503_17723[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (4))){
var inst_16358 = (state_16488[(11)]);
var inst_16358__$1 = (state_16488[(2)]);
var inst_16359 = (inst_16358__$1 == null);
var state_16488__$1 = (function (){var statearr_16504 = state_16488;
(statearr_16504[(11)] = inst_16358__$1);

return statearr_16504;
})();
if(cljs.core.truth_(inst_16359)){
var statearr_16505_17724 = state_16488__$1;
(statearr_16505_17724[(1)] = (5));

} else {
var statearr_16506_17725 = state_16488__$1;
(statearr_16506_17725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (15))){
var inst_16369 = (state_16488[(14)]);
var inst_16368 = (state_16488[(15)]);
var inst_16370 = (state_16488[(16)]);
var inst_16367 = (state_16488[(17)]);
var inst_16385 = (state_16488[(2)]);
var inst_16386 = (inst_16370 + (1));
var tmp16500 = inst_16369;
var tmp16501 = inst_16368;
var tmp16502 = inst_16367;
var inst_16367__$1 = tmp16502;
var inst_16368__$1 = tmp16501;
var inst_16369__$1 = tmp16500;
var inst_16370__$1 = inst_16386;
var state_16488__$1 = (function (){var statearr_16508 = state_16488;
(statearr_16508[(14)] = inst_16369__$1);

(statearr_16508[(15)] = inst_16368__$1);

(statearr_16508[(16)] = inst_16370__$1);

(statearr_16508[(17)] = inst_16367__$1);

(statearr_16508[(18)] = inst_16385);

return statearr_16508;
})();
var statearr_16512_17732 = state_16488__$1;
(statearr_16512_17732[(2)] = null);

(statearr_16512_17732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (21))){
var inst_16412 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16516_17733 = state_16488__$1;
(statearr_16516_17733[(2)] = inst_16412);

(statearr_16516_17733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (31))){
var inst_16438 = (state_16488[(12)]);
var inst_16442 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16438);
var state_16488__$1 = state_16488;
var statearr_16517_17734 = state_16488__$1;
(statearr_16517_17734[(2)] = inst_16442);

(statearr_16517_17734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (32))){
var inst_16431 = (state_16488[(9)]);
var inst_16430 = (state_16488[(19)]);
var inst_16433 = (state_16488[(10)]);
var inst_16432 = (state_16488[(20)]);
var inst_16444 = (state_16488[(2)]);
var inst_16445 = (inst_16433 + (1));
var tmp16513 = inst_16431;
var tmp16514 = inst_16430;
var tmp16515 = inst_16432;
var inst_16430__$1 = tmp16514;
var inst_16431__$1 = tmp16513;
var inst_16432__$1 = tmp16515;
var inst_16433__$1 = inst_16445;
var state_16488__$1 = (function (){var statearr_16518 = state_16488;
(statearr_16518[(9)] = inst_16431__$1);

(statearr_16518[(19)] = inst_16430__$1);

(statearr_16518[(10)] = inst_16433__$1);

(statearr_16518[(20)] = inst_16432__$1);

(statearr_16518[(21)] = inst_16444);

return statearr_16518;
})();
var statearr_16519_17735 = state_16488__$1;
(statearr_16519_17735[(2)] = null);

(statearr_16519_17735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (40))){
var inst_16457 = (state_16488[(22)]);
var inst_16461 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16457);
var state_16488__$1 = state_16488;
var statearr_16520_17736 = state_16488__$1;
(statearr_16520_17736[(2)] = inst_16461);

(statearr_16520_17736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (33))){
var inst_16448 = (state_16488[(23)]);
var inst_16450 = cljs.core.chunked_seq_QMARK_(inst_16448);
var state_16488__$1 = state_16488;
if(inst_16450){
var statearr_16524_17743 = state_16488__$1;
(statearr_16524_17743[(1)] = (36));

} else {
var statearr_16525_17744 = state_16488__$1;
(statearr_16525_17744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (13))){
var inst_16379 = (state_16488[(24)]);
var inst_16382 = cljs.core.async.close_BANG_(inst_16379);
var state_16488__$1 = state_16488;
var statearr_16526_17745 = state_16488__$1;
(statearr_16526_17745[(2)] = inst_16382);

(statearr_16526_17745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (22))){
var inst_16402 = (state_16488[(8)]);
var inst_16405 = cljs.core.async.close_BANG_(inst_16402);
var state_16488__$1 = state_16488;
var statearr_16527_17746 = state_16488__$1;
(statearr_16527_17746[(2)] = inst_16405);

(statearr_16527_17746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (36))){
var inst_16448 = (state_16488[(23)]);
var inst_16452 = cljs.core.chunk_first(inst_16448);
var inst_16453 = cljs.core.chunk_rest(inst_16448);
var inst_16454 = cljs.core.count(inst_16452);
var inst_16430 = inst_16453;
var inst_16431 = inst_16452;
var inst_16432 = inst_16454;
var inst_16433 = (0);
var state_16488__$1 = (function (){var statearr_16528 = state_16488;
(statearr_16528[(9)] = inst_16431);

(statearr_16528[(19)] = inst_16430);

(statearr_16528[(10)] = inst_16433);

(statearr_16528[(20)] = inst_16432);

return statearr_16528;
})();
var statearr_16529_17747 = state_16488__$1;
(statearr_16529_17747[(2)] = null);

(statearr_16529_17747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (41))){
var inst_16448 = (state_16488[(23)]);
var inst_16463 = (state_16488[(2)]);
var inst_16464 = cljs.core.next(inst_16448);
var inst_16430 = inst_16464;
var inst_16431 = null;
var inst_16432 = (0);
var inst_16433 = (0);
var state_16488__$1 = (function (){var statearr_16530 = state_16488;
(statearr_16530[(9)] = inst_16431);

(statearr_16530[(19)] = inst_16430);

(statearr_16530[(10)] = inst_16433);

(statearr_16530[(25)] = inst_16463);

(statearr_16530[(20)] = inst_16432);

return statearr_16530;
})();
var statearr_16531_17748 = state_16488__$1;
(statearr_16531_17748[(2)] = null);

(statearr_16531_17748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (43))){
var state_16488__$1 = state_16488;
var statearr_16532_17749 = state_16488__$1;
(statearr_16532_17749[(2)] = null);

(statearr_16532_17749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (29))){
var inst_16472 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16533_17750 = state_16488__$1;
(statearr_16533_17750[(2)] = inst_16472);

(statearr_16533_17750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (44))){
var inst_16481 = (state_16488[(2)]);
var state_16488__$1 = (function (){var statearr_16534 = state_16488;
(statearr_16534[(26)] = inst_16481);

return statearr_16534;
})();
var statearr_16535_17751 = state_16488__$1;
(statearr_16535_17751[(2)] = null);

(statearr_16535_17751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (6))){
var inst_16422 = (state_16488[(27)]);
var inst_16421 = cljs.core.deref(cs);
var inst_16422__$1 = cljs.core.keys(inst_16421);
var inst_16423 = cljs.core.count(inst_16422__$1);
var inst_16424 = cljs.core.reset_BANG_(dctr,inst_16423);
var inst_16429 = cljs.core.seq(inst_16422__$1);
var inst_16430 = inst_16429;
var inst_16431 = null;
var inst_16432 = (0);
var inst_16433 = (0);
var state_16488__$1 = (function (){var statearr_16538 = state_16488;
(statearr_16538[(9)] = inst_16431);

(statearr_16538[(28)] = inst_16424);

(statearr_16538[(19)] = inst_16430);

(statearr_16538[(10)] = inst_16433);

(statearr_16538[(27)] = inst_16422__$1);

(statearr_16538[(20)] = inst_16432);

return statearr_16538;
})();
var statearr_16539_17752 = state_16488__$1;
(statearr_16539_17752[(2)] = null);

(statearr_16539_17752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (28))){
var inst_16430 = (state_16488[(19)]);
var inst_16448 = (state_16488[(23)]);
var inst_16448__$1 = cljs.core.seq(inst_16430);
var state_16488__$1 = (function (){var statearr_16540 = state_16488;
(statearr_16540[(23)] = inst_16448__$1);

return statearr_16540;
})();
if(inst_16448__$1){
var statearr_16541_17753 = state_16488__$1;
(statearr_16541_17753[(1)] = (33));

} else {
var statearr_16542_17754 = state_16488__$1;
(statearr_16542_17754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (25))){
var inst_16433 = (state_16488[(10)]);
var inst_16432 = (state_16488[(20)]);
var inst_16435 = (inst_16433 < inst_16432);
var inst_16436 = inst_16435;
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16436)){
var statearr_16543_17755 = state_16488__$1;
(statearr_16543_17755[(1)] = (27));

} else {
var statearr_16544_17756 = state_16488__$1;
(statearr_16544_17756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (34))){
var state_16488__$1 = state_16488;
var statearr_16545_17757 = state_16488__$1;
(statearr_16545_17757[(2)] = null);

(statearr_16545_17757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (17))){
var state_16488__$1 = state_16488;
var statearr_16546_17758 = state_16488__$1;
(statearr_16546_17758[(2)] = null);

(statearr_16546_17758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (3))){
var inst_16486 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16488__$1,inst_16486);
} else {
if((state_val_16489 === (12))){
var inst_16417 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16547_17759 = state_16488__$1;
(statearr_16547_17759[(2)] = inst_16417);

(statearr_16547_17759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (2))){
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(4),ch);
} else {
if((state_val_16489 === (23))){
var state_16488__$1 = state_16488;
var statearr_16548_17760 = state_16488__$1;
(statearr_16548_17760[(2)] = null);

(statearr_16548_17760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (35))){
var inst_16470 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16549_17761 = state_16488__$1;
(statearr_16549_17761[(2)] = inst_16470);

(statearr_16549_17761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (19))){
var inst_16389 = (state_16488[(7)]);
var inst_16393 = cljs.core.chunk_first(inst_16389);
var inst_16394 = cljs.core.chunk_rest(inst_16389);
var inst_16395 = cljs.core.count(inst_16393);
var inst_16367 = inst_16394;
var inst_16368 = inst_16393;
var inst_16369 = inst_16395;
var inst_16370 = (0);
var state_16488__$1 = (function (){var statearr_16550 = state_16488;
(statearr_16550[(14)] = inst_16369);

(statearr_16550[(15)] = inst_16368);

(statearr_16550[(16)] = inst_16370);

(statearr_16550[(17)] = inst_16367);

return statearr_16550;
})();
var statearr_16551_17762 = state_16488__$1;
(statearr_16551_17762[(2)] = null);

(statearr_16551_17762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (11))){
var inst_16389 = (state_16488[(7)]);
var inst_16367 = (state_16488[(17)]);
var inst_16389__$1 = cljs.core.seq(inst_16367);
var state_16488__$1 = (function (){var statearr_16552 = state_16488;
(statearr_16552[(7)] = inst_16389__$1);

return statearr_16552;
})();
if(inst_16389__$1){
var statearr_16553_17763 = state_16488__$1;
(statearr_16553_17763[(1)] = (16));

} else {
var statearr_16554_17764 = state_16488__$1;
(statearr_16554_17764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (9))){
var inst_16419 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16555_17765 = state_16488__$1;
(statearr_16555_17765[(2)] = inst_16419);

(statearr_16555_17765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (5))){
var inst_16365 = cljs.core.deref(cs);
var inst_16366 = cljs.core.seq(inst_16365);
var inst_16367 = inst_16366;
var inst_16368 = null;
var inst_16369 = (0);
var inst_16370 = (0);
var state_16488__$1 = (function (){var statearr_16556 = state_16488;
(statearr_16556[(14)] = inst_16369);

(statearr_16556[(15)] = inst_16368);

(statearr_16556[(16)] = inst_16370);

(statearr_16556[(17)] = inst_16367);

return statearr_16556;
})();
var statearr_16557_17766 = state_16488__$1;
(statearr_16557_17766[(2)] = null);

(statearr_16557_17766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (14))){
var state_16488__$1 = state_16488;
var statearr_16558_17767 = state_16488__$1;
(statearr_16558_17767[(2)] = null);

(statearr_16558_17767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (45))){
var inst_16478 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16559_17768 = state_16488__$1;
(statearr_16559_17768[(2)] = inst_16478);

(statearr_16559_17768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (26))){
var inst_16422 = (state_16488[(27)]);
var inst_16474 = (state_16488[(2)]);
var inst_16475 = cljs.core.seq(inst_16422);
var state_16488__$1 = (function (){var statearr_16560 = state_16488;
(statearr_16560[(29)] = inst_16474);

return statearr_16560;
})();
if(inst_16475){
var statearr_16561_17769 = state_16488__$1;
(statearr_16561_17769[(1)] = (42));

} else {
var statearr_16562_17770 = state_16488__$1;
(statearr_16562_17770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (16))){
var inst_16389 = (state_16488[(7)]);
var inst_16391 = cljs.core.chunked_seq_QMARK_(inst_16389);
var state_16488__$1 = state_16488;
if(inst_16391){
var statearr_16563_17772 = state_16488__$1;
(statearr_16563_17772[(1)] = (19));

} else {
var statearr_16564_17773 = state_16488__$1;
(statearr_16564_17773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (38))){
var inst_16467 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16565_17774 = state_16488__$1;
(statearr_16565_17774[(2)] = inst_16467);

(statearr_16565_17774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (30))){
var state_16488__$1 = state_16488;
var statearr_16566_17779 = state_16488__$1;
(statearr_16566_17779[(2)] = null);

(statearr_16566_17779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (10))){
var inst_16368 = (state_16488[(15)]);
var inst_16370 = (state_16488[(16)]);
var inst_16378 = cljs.core._nth(inst_16368,inst_16370);
var inst_16379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16378,(0),null);
var inst_16380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16378,(1),null);
var state_16488__$1 = (function (){var statearr_16567 = state_16488;
(statearr_16567[(24)] = inst_16379);

return statearr_16567;
})();
if(cljs.core.truth_(inst_16380)){
var statearr_16568_17780 = state_16488__$1;
(statearr_16568_17780[(1)] = (13));

} else {
var statearr_16569_17781 = state_16488__$1;
(statearr_16569_17781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (18))){
var inst_16415 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16570_17782 = state_16488__$1;
(statearr_16570_17782[(2)] = inst_16415);

(statearr_16570_17782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (42))){
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(45),dchan);
} else {
if((state_val_16489 === (37))){
var inst_16457 = (state_16488[(22)]);
var inst_16358 = (state_16488[(11)]);
var inst_16448 = (state_16488[(23)]);
var inst_16457__$1 = cljs.core.first(inst_16448);
var inst_16458 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16457__$1,inst_16358,done);
var state_16488__$1 = (function (){var statearr_16571 = state_16488;
(statearr_16571[(22)] = inst_16457__$1);

return statearr_16571;
})();
if(cljs.core.truth_(inst_16458)){
var statearr_16572_17783 = state_16488__$1;
(statearr_16572_17783[(1)] = (39));

} else {
var statearr_16573_17784 = state_16488__$1;
(statearr_16573_17784[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (8))){
var inst_16369 = (state_16488[(14)]);
var inst_16370 = (state_16488[(16)]);
var inst_16372 = (inst_16370 < inst_16369);
var inst_16373 = inst_16372;
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16373)){
var statearr_16574_17785 = state_16488__$1;
(statearr_16574_17785[(1)] = (10));

} else {
var statearr_16575_17786 = state_16488__$1;
(statearr_16575_17786[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15571__auto__ = null;
var cljs$core$async$mult_$_state_machine__15571__auto____0 = (function (){
var statearr_16576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16576[(0)] = cljs$core$async$mult_$_state_machine__15571__auto__);

(statearr_16576[(1)] = (1));

return statearr_16576;
});
var cljs$core$async$mult_$_state_machine__15571__auto____1 = (function (state_16488){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16488);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16577){var ex__15574__auto__ = e16577;
var statearr_16578_17787 = state_16488;
(statearr_16578_17787[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16488[(4)]))){
var statearr_16579_17788 = state_16488;
(statearr_16579_17788[(1)] = cljs.core.first((state_16488[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17789 = state_16488;
state_16488 = G__17789;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15571__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15571__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15571__auto____0;
cljs$core$async$mult_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15571__auto____1;
return cljs$core$async$mult_$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16580 = f__15847__auto__();
(statearr_16580[(6)] = c__15843__auto___17709);

return statearr_16580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var G__16582 = arguments.length;
switch (G__16582) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17791 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_17791(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17794 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_17794(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17795 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17795(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17796 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_17796(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17799 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17799(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17800 = arguments.length;
var i__5770__auto___17801 = (0);
while(true){
if((i__5770__auto___17801 < len__5769__auto___17800)){
args__5775__auto__.push((arguments[i__5770__auto___17801]));

var G__17802 = (i__5770__auto___17801 + (1));
i__5770__auto___17801 = G__17802;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16593){
var map__16594 = p__16593;
var map__16594__$1 = cljs.core.__destructure_map(map__16594);
var opts = map__16594__$1;
var statearr_16595_17803 = state;
(statearr_16595_17803[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16596_17804 = state;
(statearr_16596_17804[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16597_17805 = state;
(statearr_16597_17805[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16588){
var G__16590 = cljs.core.first(seq16588);
var seq16588__$1 = cljs.core.next(seq16588);
var G__16591 = cljs.core.first(seq16588__$1);
var seq16588__$2 = cljs.core.next(seq16588__$1);
var G__16592 = cljs.core.first(seq16588__$2);
var seq16588__$3 = cljs.core.next(seq16588__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16590,G__16591,G__16592,seq16588__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16601 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16602){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16602 = meta16602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16603,meta16602__$1){
var self__ = this;
var _16603__$1 = this;
return (new cljs.core.async.t_cljs$core$async16601(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16602__$1));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16603){
var self__ = this;
var _16603__$1 = this;
return self__.meta16602;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16602","meta16602",2029699167,null)], null);
}));

(cljs.core.async.t_cljs$core$async16601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16601");

(cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16601.
 */
cljs.core.async.__GT_t_cljs$core$async16601 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16602){
return (new cljs.core.async.t_cljs$core$async16601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16602));
});

}

return (new cljs.core.async.t_cljs$core$async16601(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15843__auto___17808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16672){
var state_val_16673 = (state_16672[(1)]);
if((state_val_16673 === (7))){
var inst_16632 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
if(cljs.core.truth_(inst_16632)){
var statearr_16674_17809 = state_16672__$1;
(statearr_16674_17809[(1)] = (8));

} else {
var statearr_16675_17810 = state_16672__$1;
(statearr_16675_17810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (20))){
var inst_16625 = (state_16672[(7)]);
var state_16672__$1 = state_16672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16672__$1,(23),out,inst_16625);
} else {
if((state_val_16673 === (1))){
var inst_16608 = calc_state();
var inst_16609 = cljs.core.__destructure_map(inst_16608);
var inst_16610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16609,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16609,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16609,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16613 = inst_16608;
var state_16672__$1 = (function (){var statearr_16676 = state_16672;
(statearr_16676[(8)] = inst_16613);

(statearr_16676[(9)] = inst_16610);

(statearr_16676[(10)] = inst_16612);

(statearr_16676[(11)] = inst_16611);

return statearr_16676;
})();
var statearr_16677_17811 = state_16672__$1;
(statearr_16677_17811[(2)] = null);

(statearr_16677_17811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (24))){
var inst_16616 = (state_16672[(12)]);
var inst_16613 = inst_16616;
var state_16672__$1 = (function (){var statearr_16678 = state_16672;
(statearr_16678[(8)] = inst_16613);

return statearr_16678;
})();
var statearr_16679_17812 = state_16672__$1;
(statearr_16679_17812[(2)] = null);

(statearr_16679_17812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (4))){
var inst_16625 = (state_16672[(7)]);
var inst_16627 = (state_16672[(13)]);
var inst_16624 = (state_16672[(2)]);
var inst_16625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16624,(0),null);
var inst_16626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16624,(1),null);
var inst_16627__$1 = (inst_16625__$1 == null);
var state_16672__$1 = (function (){var statearr_16680 = state_16672;
(statearr_16680[(7)] = inst_16625__$1);

(statearr_16680[(13)] = inst_16627__$1);

(statearr_16680[(14)] = inst_16626);

return statearr_16680;
})();
if(cljs.core.truth_(inst_16627__$1)){
var statearr_16681_17813 = state_16672__$1;
(statearr_16681_17813[(1)] = (5));

} else {
var statearr_16682_17814 = state_16672__$1;
(statearr_16682_17814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (15))){
var inst_16646 = (state_16672[(15)]);
var inst_16617 = (state_16672[(16)]);
var inst_16646__$1 = cljs.core.empty_QMARK_(inst_16617);
var state_16672__$1 = (function (){var statearr_16683 = state_16672;
(statearr_16683[(15)] = inst_16646__$1);

return statearr_16683;
})();
if(inst_16646__$1){
var statearr_16684_17815 = state_16672__$1;
(statearr_16684_17815[(1)] = (17));

} else {
var statearr_16685_17816 = state_16672__$1;
(statearr_16685_17816[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (21))){
var inst_16616 = (state_16672[(12)]);
var inst_16613 = inst_16616;
var state_16672__$1 = (function (){var statearr_16686 = state_16672;
(statearr_16686[(8)] = inst_16613);

return statearr_16686;
})();
var statearr_16687_17817 = state_16672__$1;
(statearr_16687_17817[(2)] = null);

(statearr_16687_17817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (13))){
var inst_16639 = (state_16672[(2)]);
var inst_16640 = calc_state();
var inst_16613 = inst_16640;
var state_16672__$1 = (function (){var statearr_16688 = state_16672;
(statearr_16688[(8)] = inst_16613);

(statearr_16688[(17)] = inst_16639);

return statearr_16688;
})();
var statearr_16689_17818 = state_16672__$1;
(statearr_16689_17818[(2)] = null);

(statearr_16689_17818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (22))){
var inst_16666 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
var statearr_16690_17819 = state_16672__$1;
(statearr_16690_17819[(2)] = inst_16666);

(statearr_16690_17819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (6))){
var inst_16626 = (state_16672[(14)]);
var inst_16630 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16626,change);
var state_16672__$1 = state_16672;
var statearr_16691_17820 = state_16672__$1;
(statearr_16691_17820[(2)] = inst_16630);

(statearr_16691_17820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (25))){
var state_16672__$1 = state_16672;
var statearr_16692_17821 = state_16672__$1;
(statearr_16692_17821[(2)] = null);

(statearr_16692_17821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (17))){
var inst_16618 = (state_16672[(18)]);
var inst_16626 = (state_16672[(14)]);
var inst_16648 = (inst_16618.cljs$core$IFn$_invoke$arity$1 ? inst_16618.cljs$core$IFn$_invoke$arity$1(inst_16626) : inst_16618.call(null,inst_16626));
var inst_16649 = cljs.core.not(inst_16648);
var state_16672__$1 = state_16672;
var statearr_16693_17822 = state_16672__$1;
(statearr_16693_17822[(2)] = inst_16649);

(statearr_16693_17822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (3))){
var inst_16670 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16672__$1,inst_16670);
} else {
if((state_val_16673 === (12))){
var state_16672__$1 = state_16672;
var statearr_16694_17823 = state_16672__$1;
(statearr_16694_17823[(2)] = null);

(statearr_16694_17823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (2))){
var inst_16613 = (state_16672[(8)]);
var inst_16616 = (state_16672[(12)]);
var inst_16616__$1 = cljs.core.__destructure_map(inst_16613);
var inst_16617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16616__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16616__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16616__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16672__$1 = (function (){var statearr_16695 = state_16672;
(statearr_16695[(12)] = inst_16616__$1);

(statearr_16695[(18)] = inst_16618);

(statearr_16695[(16)] = inst_16617);

return statearr_16695;
})();
return cljs.core.async.ioc_alts_BANG_(state_16672__$1,(4),inst_16619);
} else {
if((state_val_16673 === (23))){
var inst_16657 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
if(cljs.core.truth_(inst_16657)){
var statearr_16696_17824 = state_16672__$1;
(statearr_16696_17824[(1)] = (24));

} else {
var statearr_16697_17825 = state_16672__$1;
(statearr_16697_17825[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (19))){
var inst_16652 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
var statearr_16698_17831 = state_16672__$1;
(statearr_16698_17831[(2)] = inst_16652);

(statearr_16698_17831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (11))){
var inst_16626 = (state_16672[(14)]);
var inst_16636 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16626);
var state_16672__$1 = state_16672;
var statearr_16699_17832 = state_16672__$1;
(statearr_16699_17832[(2)] = inst_16636);

(statearr_16699_17832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (9))){
var inst_16643 = (state_16672[(19)]);
var inst_16626 = (state_16672[(14)]);
var inst_16617 = (state_16672[(16)]);
var inst_16643__$1 = (inst_16617.cljs$core$IFn$_invoke$arity$1 ? inst_16617.cljs$core$IFn$_invoke$arity$1(inst_16626) : inst_16617.call(null,inst_16626));
var state_16672__$1 = (function (){var statearr_16700 = state_16672;
(statearr_16700[(19)] = inst_16643__$1);

return statearr_16700;
})();
if(cljs.core.truth_(inst_16643__$1)){
var statearr_16701_17833 = state_16672__$1;
(statearr_16701_17833[(1)] = (14));

} else {
var statearr_16702_17834 = state_16672__$1;
(statearr_16702_17834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (5))){
var inst_16627 = (state_16672[(13)]);
var state_16672__$1 = state_16672;
var statearr_16703_17835 = state_16672__$1;
(statearr_16703_17835[(2)] = inst_16627);

(statearr_16703_17835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (14))){
var inst_16643 = (state_16672[(19)]);
var state_16672__$1 = state_16672;
var statearr_16704_17836 = state_16672__$1;
(statearr_16704_17836[(2)] = inst_16643);

(statearr_16704_17836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (26))){
var inst_16662 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
var statearr_16705_17837 = state_16672__$1;
(statearr_16705_17837[(2)] = inst_16662);

(statearr_16705_17837[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (16))){
var inst_16654 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
if(cljs.core.truth_(inst_16654)){
var statearr_16706_17838 = state_16672__$1;
(statearr_16706_17838[(1)] = (20));

} else {
var statearr_16707_17839 = state_16672__$1;
(statearr_16707_17839[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (10))){
var inst_16668 = (state_16672[(2)]);
var state_16672__$1 = state_16672;
var statearr_16708_17840 = state_16672__$1;
(statearr_16708_17840[(2)] = inst_16668);

(statearr_16708_17840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (18))){
var inst_16646 = (state_16672[(15)]);
var state_16672__$1 = state_16672;
var statearr_16709_17841 = state_16672__$1;
(statearr_16709_17841[(2)] = inst_16646);

(statearr_16709_17841[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16673 === (8))){
var inst_16625 = (state_16672[(7)]);
var inst_16634 = (inst_16625 == null);
var state_16672__$1 = state_16672;
if(cljs.core.truth_(inst_16634)){
var statearr_16710_17842 = state_16672__$1;
(statearr_16710_17842[(1)] = (11));

} else {
var statearr_16711_17843 = state_16672__$1;
(statearr_16711_17843[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__15571__auto__ = null;
var cljs$core$async$mix_$_state_machine__15571__auto____0 = (function (){
var statearr_16712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16712[(0)] = cljs$core$async$mix_$_state_machine__15571__auto__);

(statearr_16712[(1)] = (1));

return statearr_16712;
});
var cljs$core$async$mix_$_state_machine__15571__auto____1 = (function (state_16672){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16672);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16713){var ex__15574__auto__ = e16713;
var statearr_16714_17844 = state_16672;
(statearr_16714_17844[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16672[(4)]))){
var statearr_16715_17845 = state_16672;
(statearr_16715_17845[(1)] = cljs.core.first((state_16672[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17846 = state_16672;
state_16672 = G__17846;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15571__auto__ = function(state_16672){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15571__auto____1.call(this,state_16672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15571__auto____0;
cljs$core$async$mix_$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15571__auto____1;
return cljs$core$async$mix_$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16716 = f__15847__auto__();
(statearr_16716[(6)] = c__15843__auto___17808);

return statearr_16716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17860 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_17860(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17868 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_17868(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17869 = (function() {
var G__17870 = null;
var G__17870__1 = (function (p){
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
var G__17870__2 = (function (p,v){
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
G__17870 = function(p,v){
switch(arguments.length){
case 1:
return G__17870__1.call(this,p);
case 2:
return G__17870__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17870.cljs$core$IFn$_invoke$arity$1 = G__17870__1;
G__17870.cljs$core$IFn$_invoke$arity$2 = G__17870__2;
return G__17870;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16718 = arguments.length;
switch (G__16718) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17869(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17869(p,v);
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
var G__16721 = arguments.length;
switch (G__16721) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16719_SHARP_){
if(cljs.core.truth_((p1__16719_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16719_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16719_SHARP_.call(null,topic)))){
return p1__16719_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16719_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16733 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16734){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16734 = meta16734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16735,meta16734__$1){
var self__ = this;
var _16735__$1 = this;
return (new cljs.core.async.t_cljs$core$async16733(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16734__$1));
}));

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16735){
var self__ = this;
var _16735__$1 = this;
return self__.meta16734;
}));

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16733.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16734","meta16734",-1972515618,null)], null);
}));

(cljs.core.async.t_cljs$core$async16733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16733");

(cljs.core.async.t_cljs$core$async16733.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16733.
 */
cljs.core.async.__GT_t_cljs$core$async16733 = (function cljs$core$async$__GT_t_cljs$core$async16733(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16734){
return (new cljs.core.async.t_cljs$core$async16733(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16734));
});

}

return (new cljs.core.async.t_cljs$core$async16733(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15843__auto___17875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16829){
var state_val_16830 = (state_16829[(1)]);
if((state_val_16830 === (7))){
var inst_16825 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16835_17876 = state_16829__$1;
(statearr_16835_17876[(2)] = inst_16825);

(statearr_16835_17876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (20))){
var state_16829__$1 = state_16829;
var statearr_16836_17877 = state_16829__$1;
(statearr_16836_17877[(2)] = null);

(statearr_16836_17877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (1))){
var state_16829__$1 = state_16829;
var statearr_16837_17878 = state_16829__$1;
(statearr_16837_17878[(2)] = null);

(statearr_16837_17878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (24))){
var inst_16807 = (state_16829[(7)]);
var inst_16817 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16807);
var state_16829__$1 = state_16829;
var statearr_16838_17879 = state_16829__$1;
(statearr_16838_17879[(2)] = inst_16817);

(statearr_16838_17879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (4))){
var inst_16759 = (state_16829[(8)]);
var inst_16759__$1 = (state_16829[(2)]);
var inst_16760 = (inst_16759__$1 == null);
var state_16829__$1 = (function (){var statearr_16840 = state_16829;
(statearr_16840[(8)] = inst_16759__$1);

return statearr_16840;
})();
if(cljs.core.truth_(inst_16760)){
var statearr_16841_17880 = state_16829__$1;
(statearr_16841_17880[(1)] = (5));

} else {
var statearr_16843_17881 = state_16829__$1;
(statearr_16843_17881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (15))){
var inst_16801 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16847_17882 = state_16829__$1;
(statearr_16847_17882[(2)] = inst_16801);

(statearr_16847_17882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (21))){
var inst_16822 = (state_16829[(2)]);
var state_16829__$1 = (function (){var statearr_16849 = state_16829;
(statearr_16849[(9)] = inst_16822);

return statearr_16849;
})();
var statearr_16850_17883 = state_16829__$1;
(statearr_16850_17883[(2)] = null);

(statearr_16850_17883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (13))){
var inst_16783 = (state_16829[(10)]);
var inst_16785 = cljs.core.chunked_seq_QMARK_(inst_16783);
var state_16829__$1 = state_16829;
if(inst_16785){
var statearr_16853_17884 = state_16829__$1;
(statearr_16853_17884[(1)] = (16));

} else {
var statearr_16854_17885 = state_16829__$1;
(statearr_16854_17885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (22))){
var inst_16814 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16814)){
var statearr_16855_17886 = state_16829__$1;
(statearr_16855_17886[(1)] = (23));

} else {
var statearr_16856_17887 = state_16829__$1;
(statearr_16856_17887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (6))){
var inst_16759 = (state_16829[(8)]);
var inst_16809 = (state_16829[(11)]);
var inst_16807 = (state_16829[(7)]);
var inst_16807__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16759) : topic_fn.call(null,inst_16759));
var inst_16808 = cljs.core.deref(mults);
var inst_16809__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16808,inst_16807__$1);
var state_16829__$1 = (function (){var statearr_16857 = state_16829;
(statearr_16857[(11)] = inst_16809__$1);

(statearr_16857[(7)] = inst_16807__$1);

return statearr_16857;
})();
if(cljs.core.truth_(inst_16809__$1)){
var statearr_16858_17888 = state_16829__$1;
(statearr_16858_17888[(1)] = (19));

} else {
var statearr_16859_17889 = state_16829__$1;
(statearr_16859_17889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (25))){
var inst_16819 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16862_17890 = state_16829__$1;
(statearr_16862_17890[(2)] = inst_16819);

(statearr_16862_17890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (17))){
var inst_16783 = (state_16829[(10)]);
var inst_16792 = cljs.core.first(inst_16783);
var inst_16793 = cljs.core.async.muxch_STAR_(inst_16792);
var inst_16794 = cljs.core.async.close_BANG_(inst_16793);
var inst_16795 = cljs.core.next(inst_16783);
var inst_16769 = inst_16795;
var inst_16770 = null;
var inst_16771 = (0);
var inst_16772 = (0);
var state_16829__$1 = (function (){var statearr_16863 = state_16829;
(statearr_16863[(12)] = inst_16772);

(statearr_16863[(13)] = inst_16771);

(statearr_16863[(14)] = inst_16770);

(statearr_16863[(15)] = inst_16794);

(statearr_16863[(16)] = inst_16769);

return statearr_16863;
})();
var statearr_16864_17891 = state_16829__$1;
(statearr_16864_17891[(2)] = null);

(statearr_16864_17891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (3))){
var inst_16827 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16829__$1,inst_16827);
} else {
if((state_val_16830 === (12))){
var inst_16803 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16866_17892 = state_16829__$1;
(statearr_16866_17892[(2)] = inst_16803);

(statearr_16866_17892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (2))){
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16829__$1,(4),ch);
} else {
if((state_val_16830 === (23))){
var state_16829__$1 = state_16829;
var statearr_16867_17893 = state_16829__$1;
(statearr_16867_17893[(2)] = null);

(statearr_16867_17893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (19))){
var inst_16759 = (state_16829[(8)]);
var inst_16809 = (state_16829[(11)]);
var inst_16812 = cljs.core.async.muxch_STAR_(inst_16809);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16829__$1,(22),inst_16812,inst_16759);
} else {
if((state_val_16830 === (11))){
var inst_16783 = (state_16829[(10)]);
var inst_16769 = (state_16829[(16)]);
var inst_16783__$1 = cljs.core.seq(inst_16769);
var state_16829__$1 = (function (){var statearr_16868 = state_16829;
(statearr_16868[(10)] = inst_16783__$1);

return statearr_16868;
})();
if(inst_16783__$1){
var statearr_16869_17894 = state_16829__$1;
(statearr_16869_17894[(1)] = (13));

} else {
var statearr_16870_17895 = state_16829__$1;
(statearr_16870_17895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (9))){
var inst_16805 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16871_17900 = state_16829__$1;
(statearr_16871_17900[(2)] = inst_16805);

(statearr_16871_17900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (5))){
var inst_16766 = cljs.core.deref(mults);
var inst_16767 = cljs.core.vals(inst_16766);
var inst_16768 = cljs.core.seq(inst_16767);
var inst_16769 = inst_16768;
var inst_16770 = null;
var inst_16771 = (0);
var inst_16772 = (0);
var state_16829__$1 = (function (){var statearr_16872 = state_16829;
(statearr_16872[(12)] = inst_16772);

(statearr_16872[(13)] = inst_16771);

(statearr_16872[(14)] = inst_16770);

(statearr_16872[(16)] = inst_16769);

return statearr_16872;
})();
var statearr_16873_17901 = state_16829__$1;
(statearr_16873_17901[(2)] = null);

(statearr_16873_17901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (14))){
var state_16829__$1 = state_16829;
var statearr_16877_17902 = state_16829__$1;
(statearr_16877_17902[(2)] = null);

(statearr_16877_17902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (16))){
var inst_16783 = (state_16829[(10)]);
var inst_16787 = cljs.core.chunk_first(inst_16783);
var inst_16788 = cljs.core.chunk_rest(inst_16783);
var inst_16789 = cljs.core.count(inst_16787);
var inst_16769 = inst_16788;
var inst_16770 = inst_16787;
var inst_16771 = inst_16789;
var inst_16772 = (0);
var state_16829__$1 = (function (){var statearr_16878 = state_16829;
(statearr_16878[(12)] = inst_16772);

(statearr_16878[(13)] = inst_16771);

(statearr_16878[(14)] = inst_16770);

(statearr_16878[(16)] = inst_16769);

return statearr_16878;
})();
var statearr_16879_17903 = state_16829__$1;
(statearr_16879_17903[(2)] = null);

(statearr_16879_17903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (10))){
var inst_16772 = (state_16829[(12)]);
var inst_16771 = (state_16829[(13)]);
var inst_16770 = (state_16829[(14)]);
var inst_16769 = (state_16829[(16)]);
var inst_16777 = cljs.core._nth(inst_16770,inst_16772);
var inst_16778 = cljs.core.async.muxch_STAR_(inst_16777);
var inst_16779 = cljs.core.async.close_BANG_(inst_16778);
var inst_16780 = (inst_16772 + (1));
var tmp16874 = inst_16771;
var tmp16875 = inst_16770;
var tmp16876 = inst_16769;
var inst_16769__$1 = tmp16876;
var inst_16770__$1 = tmp16875;
var inst_16771__$1 = tmp16874;
var inst_16772__$1 = inst_16780;
var state_16829__$1 = (function (){var statearr_16888 = state_16829;
(statearr_16888[(12)] = inst_16772__$1);

(statearr_16888[(13)] = inst_16771__$1);

(statearr_16888[(14)] = inst_16770__$1);

(statearr_16888[(16)] = inst_16769__$1);

(statearr_16888[(17)] = inst_16779);

return statearr_16888;
})();
var statearr_16890_17904 = state_16829__$1;
(statearr_16890_17904[(2)] = null);

(statearr_16890_17904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (18))){
var inst_16798 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16891_17905 = state_16829__$1;
(statearr_16891_17905[(2)] = inst_16798);

(statearr_16891_17905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (8))){
var inst_16772 = (state_16829[(12)]);
var inst_16771 = (state_16829[(13)]);
var inst_16774 = (inst_16772 < inst_16771);
var inst_16775 = inst_16774;
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16775)){
var statearr_16892_17906 = state_16829__$1;
(statearr_16892_17906[(1)] = (10));

} else {
var statearr_16893_17907 = state_16829__$1;
(statearr_16893_17907[(1)] = (11));

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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_16894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16894[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_16894[(1)] = (1));

return statearr_16894;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_16829){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16829);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16895){var ex__15574__auto__ = e16895;
var statearr_16896_17908 = state_16829;
(statearr_16896_17908[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16829[(4)]))){
var statearr_16897_17909 = state_16829;
(statearr_16897_17909[(1)] = cljs.core.first((state_16829[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17910 = state_16829;
state_16829 = G__17910;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_16829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_16829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16898 = f__15847__auto__();
(statearr_16898[(6)] = c__15843__auto___17875);

return statearr_16898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var G__16900 = arguments.length;
switch (G__16900) {
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
var G__16902 = arguments.length;
switch (G__16902) {
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
var G__16904 = arguments.length;
switch (G__16904) {
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
var c__15843__auto___17914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_16954){
var state_val_16955 = (state_16954[(1)]);
if((state_val_16955 === (7))){
var state_16954__$1 = state_16954;
var statearr_16957_17915 = state_16954__$1;
(statearr_16957_17915[(2)] = null);

(statearr_16957_17915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (1))){
var state_16954__$1 = state_16954;
var statearr_16960_17916 = state_16954__$1;
(statearr_16960_17916[(2)] = null);

(statearr_16960_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (4))){
var inst_16913 = (state_16954[(7)]);
var inst_16912 = (state_16954[(8)]);
var inst_16915 = (inst_16913 < inst_16912);
var state_16954__$1 = state_16954;
if(cljs.core.truth_(inst_16915)){
var statearr_16962_17917 = state_16954__$1;
(statearr_16962_17917[(1)] = (6));

} else {
var statearr_16963_17918 = state_16954__$1;
(statearr_16963_17918[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (15))){
var inst_16940 = (state_16954[(9)]);
var inst_16945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16940);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16954__$1,(17),out,inst_16945);
} else {
if((state_val_16955 === (13))){
var inst_16940 = (state_16954[(9)]);
var inst_16940__$1 = (state_16954[(2)]);
var inst_16941 = cljs.core.some(cljs.core.nil_QMARK_,inst_16940__$1);
var state_16954__$1 = (function (){var statearr_16964 = state_16954;
(statearr_16964[(9)] = inst_16940__$1);

return statearr_16964;
})();
if(cljs.core.truth_(inst_16941)){
var statearr_16965_17919 = state_16954__$1;
(statearr_16965_17919[(1)] = (14));

} else {
var statearr_16966_17920 = state_16954__$1;
(statearr_16966_17920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (6))){
var state_16954__$1 = state_16954;
var statearr_16967_17921 = state_16954__$1;
(statearr_16967_17921[(2)] = null);

(statearr_16967_17921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (17))){
var inst_16947 = (state_16954[(2)]);
var state_16954__$1 = (function (){var statearr_16969 = state_16954;
(statearr_16969[(10)] = inst_16947);

return statearr_16969;
})();
var statearr_16970_17922 = state_16954__$1;
(statearr_16970_17922[(2)] = null);

(statearr_16970_17922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (3))){
var inst_16952 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16954__$1,inst_16952);
} else {
if((state_val_16955 === (12))){
var _ = (function (){var statearr_16971 = state_16954;
(statearr_16971[(4)] = cljs.core.rest((state_16954[(4)])));

return statearr_16971;
})();
var state_16954__$1 = state_16954;
var ex16968 = (state_16954__$1[(2)]);
var statearr_16972_17923 = state_16954__$1;
(statearr_16972_17923[(5)] = ex16968);


if((ex16968 instanceof Object)){
var statearr_16973_17924 = state_16954__$1;
(statearr_16973_17924[(1)] = (11));

(statearr_16973_17924[(5)] = null);

} else {
throw ex16968;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (2))){
var inst_16911 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16912 = cnt;
var inst_16913 = (0);
var state_16954__$1 = (function (){var statearr_16974 = state_16954;
(statearr_16974[(7)] = inst_16913);

(statearr_16974[(8)] = inst_16912);

(statearr_16974[(11)] = inst_16911);

return statearr_16974;
})();
var statearr_16975_17925 = state_16954__$1;
(statearr_16975_17925[(2)] = null);

(statearr_16975_17925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (11))){
var inst_16919 = (state_16954[(2)]);
var inst_16920 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16954__$1 = (function (){var statearr_16976 = state_16954;
(statearr_16976[(12)] = inst_16919);

return statearr_16976;
})();
var statearr_16977_17926 = state_16954__$1;
(statearr_16977_17926[(2)] = inst_16920);

(statearr_16977_17926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (9))){
var inst_16913 = (state_16954[(7)]);
var _ = (function (){var statearr_16978 = state_16954;
(statearr_16978[(4)] = cljs.core.cons((12),(state_16954[(4)])));

return statearr_16978;
})();
var inst_16926 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16913) : chs__$1.call(null,inst_16913));
var inst_16927 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16913) : done.call(null,inst_16913));
var inst_16928 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16926,inst_16927);
var ___$1 = (function (){var statearr_16979 = state_16954;
(statearr_16979[(4)] = cljs.core.rest((state_16954[(4)])));

return statearr_16979;
})();
var state_16954__$1 = state_16954;
var statearr_16980_17932 = state_16954__$1;
(statearr_16980_17932[(2)] = inst_16928);

(statearr_16980_17932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (5))){
var inst_16938 = (state_16954[(2)]);
var state_16954__$1 = (function (){var statearr_16981 = state_16954;
(statearr_16981[(13)] = inst_16938);

return statearr_16981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16954__$1,(13),dchan);
} else {
if((state_val_16955 === (14))){
var inst_16943 = cljs.core.async.close_BANG_(out);
var state_16954__$1 = state_16954;
var statearr_16982_17933 = state_16954__$1;
(statearr_16982_17933[(2)] = inst_16943);

(statearr_16982_17933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (16))){
var inst_16950 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16983_17934 = state_16954__$1;
(statearr_16983_17934[(2)] = inst_16950);

(statearr_16983_17934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (10))){
var inst_16913 = (state_16954[(7)]);
var inst_16931 = (state_16954[(2)]);
var inst_16932 = (inst_16913 + (1));
var inst_16913__$1 = inst_16932;
var state_16954__$1 = (function (){var statearr_16984 = state_16954;
(statearr_16984[(7)] = inst_16913__$1);

(statearr_16984[(14)] = inst_16931);

return statearr_16984;
})();
var statearr_16985_17935 = state_16954__$1;
(statearr_16985_17935[(2)] = null);

(statearr_16985_17935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16955 === (8))){
var inst_16936 = (state_16954[(2)]);
var state_16954__$1 = state_16954;
var statearr_16986_17936 = state_16954__$1;
(statearr_16986_17936[(2)] = inst_16936);

(statearr_16986_17936[(1)] = (5));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_16987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16987[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_16987[(1)] = (1));

return statearr_16987;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_16954){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_16954);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e16988){var ex__15574__auto__ = e16988;
var statearr_16989_17937 = state_16954;
(statearr_16989_17937[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_16954[(4)]))){
var statearr_16990_17938 = state_16954;
(statearr_16990_17938[(1)] = cljs.core.first((state_16954[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17939 = state_16954;
state_16954 = G__17939;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_16954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_16954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_16991 = f__15847__auto__();
(statearr_16991[(6)] = c__15843__auto___17914);

return statearr_16991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var G__16994 = arguments.length;
switch (G__16994) {
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
var c__15843__auto___17941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17026){
var state_val_17027 = (state_17026[(1)]);
if((state_val_17027 === (7))){
var inst_17006 = (state_17026[(7)]);
var inst_17005 = (state_17026[(8)]);
var inst_17005__$1 = (state_17026[(2)]);
var inst_17006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17005__$1,(0),null);
var inst_17007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17005__$1,(1),null);
var inst_17008 = (inst_17006__$1 == null);
var state_17026__$1 = (function (){var statearr_17028 = state_17026;
(statearr_17028[(9)] = inst_17007);

(statearr_17028[(7)] = inst_17006__$1);

(statearr_17028[(8)] = inst_17005__$1);

return statearr_17028;
})();
if(cljs.core.truth_(inst_17008)){
var statearr_17029_17942 = state_17026__$1;
(statearr_17029_17942[(1)] = (8));

} else {
var statearr_17030_17943 = state_17026__$1;
(statearr_17030_17943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (1))){
var inst_16995 = cljs.core.vec(chs);
var inst_16996 = inst_16995;
var state_17026__$1 = (function (){var statearr_17031 = state_17026;
(statearr_17031[(10)] = inst_16996);

return statearr_17031;
})();
var statearr_17032_17945 = state_17026__$1;
(statearr_17032_17945[(2)] = null);

(statearr_17032_17945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (4))){
var inst_16996 = (state_17026[(10)]);
var state_17026__$1 = state_17026;
return cljs.core.async.ioc_alts_BANG_(state_17026__$1,(7),inst_16996);
} else {
if((state_val_17027 === (6))){
var inst_17022 = (state_17026[(2)]);
var state_17026__$1 = state_17026;
var statearr_17033_17946 = state_17026__$1;
(statearr_17033_17946[(2)] = inst_17022);

(statearr_17033_17946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (3))){
var inst_17024 = (state_17026[(2)]);
var state_17026__$1 = state_17026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17026__$1,inst_17024);
} else {
if((state_val_17027 === (2))){
var inst_16996 = (state_17026[(10)]);
var inst_16998 = cljs.core.count(inst_16996);
var inst_16999 = (inst_16998 > (0));
var state_17026__$1 = state_17026;
if(cljs.core.truth_(inst_16999)){
var statearr_17035_17947 = state_17026__$1;
(statearr_17035_17947[(1)] = (4));

} else {
var statearr_17036_17948 = state_17026__$1;
(statearr_17036_17948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (11))){
var inst_16996 = (state_17026[(10)]);
var inst_17015 = (state_17026[(2)]);
var tmp17034 = inst_16996;
var inst_16996__$1 = tmp17034;
var state_17026__$1 = (function (){var statearr_17037 = state_17026;
(statearr_17037[(11)] = inst_17015);

(statearr_17037[(10)] = inst_16996__$1);

return statearr_17037;
})();
var statearr_17038_17953 = state_17026__$1;
(statearr_17038_17953[(2)] = null);

(statearr_17038_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (9))){
var inst_17006 = (state_17026[(7)]);
var state_17026__$1 = state_17026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17026__$1,(11),out,inst_17006);
} else {
if((state_val_17027 === (5))){
var inst_17020 = cljs.core.async.close_BANG_(out);
var state_17026__$1 = state_17026;
var statearr_17039_17954 = state_17026__$1;
(statearr_17039_17954[(2)] = inst_17020);

(statearr_17039_17954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (10))){
var inst_17018 = (state_17026[(2)]);
var state_17026__$1 = state_17026;
var statearr_17040_17955 = state_17026__$1;
(statearr_17040_17955[(2)] = inst_17018);

(statearr_17040_17955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17027 === (8))){
var inst_17007 = (state_17026[(9)]);
var inst_17006 = (state_17026[(7)]);
var inst_16996 = (state_17026[(10)]);
var inst_17005 = (state_17026[(8)]);
var inst_17010 = (function (){var cs = inst_16996;
var vec__17001 = inst_17005;
var v = inst_17006;
var c = inst_17007;
return (function (p1__16992_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16992_SHARP_);
});
})();
var inst_17011 = cljs.core.filterv(inst_17010,inst_16996);
var inst_16996__$1 = inst_17011;
var state_17026__$1 = (function (){var statearr_17041 = state_17026;
(statearr_17041[(10)] = inst_16996__$1);

return statearr_17041;
})();
var statearr_17042_17956 = state_17026__$1;
(statearr_17042_17956[(2)] = null);

(statearr_17042_17956[(1)] = (2));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17043[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17043[(1)] = (1));

return statearr_17043;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17026){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17026);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17044){var ex__15574__auto__ = e17044;
var statearr_17045_17957 = state_17026;
(statearr_17045_17957[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17026[(4)]))){
var statearr_17046_17958 = state_17026;
(statearr_17046_17958[(1)] = cljs.core.first((state_17026[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_17026;
state_17026 = G__17959;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17047 = f__15847__auto__();
(statearr_17047[(6)] = c__15843__auto___17941);

return statearr_17047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
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
var G__17049 = arguments.length;
switch (G__17049) {
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
var c__15843__auto___17961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17073){
var state_val_17074 = (state_17073[(1)]);
if((state_val_17074 === (7))){
var inst_17055 = (state_17073[(7)]);
var inst_17055__$1 = (state_17073[(2)]);
var inst_17056 = (inst_17055__$1 == null);
var inst_17057 = cljs.core.not(inst_17056);
var state_17073__$1 = (function (){var statearr_17075 = state_17073;
(statearr_17075[(7)] = inst_17055__$1);

return statearr_17075;
})();
if(inst_17057){
var statearr_17076_17962 = state_17073__$1;
(statearr_17076_17962[(1)] = (8));

} else {
var statearr_17077_17963 = state_17073__$1;
(statearr_17077_17963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (1))){
var inst_17050 = (0);
var state_17073__$1 = (function (){var statearr_17078 = state_17073;
(statearr_17078[(8)] = inst_17050);

return statearr_17078;
})();
var statearr_17079_17964 = state_17073__$1;
(statearr_17079_17964[(2)] = null);

(statearr_17079_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (4))){
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17073__$1,(7),ch);
} else {
if((state_val_17074 === (6))){
var inst_17068 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17080_17965 = state_17073__$1;
(statearr_17080_17965[(2)] = inst_17068);

(statearr_17080_17965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (3))){
var inst_17070 = (state_17073[(2)]);
var inst_17071 = cljs.core.async.close_BANG_(out);
var state_17073__$1 = (function (){var statearr_17081 = state_17073;
(statearr_17081[(9)] = inst_17070);

return statearr_17081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17073__$1,inst_17071);
} else {
if((state_val_17074 === (2))){
var inst_17050 = (state_17073[(8)]);
var inst_17052 = (inst_17050 < n);
var state_17073__$1 = state_17073;
if(cljs.core.truth_(inst_17052)){
var statearr_17082_17966 = state_17073__$1;
(statearr_17082_17966[(1)] = (4));

} else {
var statearr_17083_17967 = state_17073__$1;
(statearr_17083_17967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (11))){
var inst_17050 = (state_17073[(8)]);
var inst_17060 = (state_17073[(2)]);
var inst_17061 = (inst_17050 + (1));
var inst_17050__$1 = inst_17061;
var state_17073__$1 = (function (){var statearr_17084 = state_17073;
(statearr_17084[(10)] = inst_17060);

(statearr_17084[(8)] = inst_17050__$1);

return statearr_17084;
})();
var statearr_17085_17968 = state_17073__$1;
(statearr_17085_17968[(2)] = null);

(statearr_17085_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (9))){
var state_17073__$1 = state_17073;
var statearr_17086_17969 = state_17073__$1;
(statearr_17086_17969[(2)] = null);

(statearr_17086_17969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (5))){
var state_17073__$1 = state_17073;
var statearr_17087_17970 = state_17073__$1;
(statearr_17087_17970[(2)] = null);

(statearr_17087_17970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (10))){
var inst_17065 = (state_17073[(2)]);
var state_17073__$1 = state_17073;
var statearr_17088_17971 = state_17073__$1;
(statearr_17088_17971[(2)] = inst_17065);

(statearr_17088_17971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17074 === (8))){
var inst_17055 = (state_17073[(7)]);
var state_17073__$1 = state_17073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17073__$1,(11),out,inst_17055);
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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17089[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17089[(1)] = (1));

return statearr_17089;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17073){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17073);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17090){var ex__15574__auto__ = e17090;
var statearr_17091_17972 = state_17073;
(statearr_17091_17972[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17073[(4)]))){
var statearr_17092_17973 = state_17073;
(statearr_17092_17973[(1)] = cljs.core.first((state_17073[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17974 = state_17073;
state_17073 = G__17974;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17093 = f__15847__auto__();
(statearr_17093[(6)] = c__15843__auto___17961);

return statearr_17093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17095 = (function (f,ch,meta17096){
this.f = f;
this.ch = ch;
this.meta17096 = meta17096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17097,meta17096__$1){
var self__ = this;
var _17097__$1 = this;
return (new cljs.core.async.t_cljs$core$async17095(self__.f,self__.ch,meta17096__$1));
}));

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17097){
var self__ = this;
var _17097__$1 = this;
return self__.meta17096;
}));

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17098 = (function (f,ch,meta17096,_,fn1,meta17099){
this.f = f;
this.ch = ch;
this.meta17096 = meta17096;
this._ = _;
this.fn1 = fn1;
this.meta17099 = meta17099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17100,meta17099__$1){
var self__ = this;
var _17100__$1 = this;
return (new cljs.core.async.t_cljs$core$async17098(self__.f,self__.ch,self__.meta17096,self__._,self__.fn1,meta17099__$1));
}));

(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17100){
var self__ = this;
var _17100__$1 = this;
return self__.meta17099;
}));

(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17094_SHARP_){
var G__17101 = (((p1__17094_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17094_SHARP_) : self__.f.call(null,p1__17094_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17101) : f1.call(null,G__17101));
});
}));

(cljs.core.async.t_cljs$core$async17098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17096","meta17096",-1215561985,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17095","cljs.core.async/t_cljs$core$async17095",2117220394,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17099","meta17099",-867943554,null)], null);
}));

(cljs.core.async.t_cljs$core$async17098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17098");

(cljs.core.async.t_cljs$core$async17098.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17098.
 */
cljs.core.async.__GT_t_cljs$core$async17098 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17098(f__$1,ch__$1,meta17096__$1,___$2,fn1__$1,meta17099){
return (new cljs.core.async.t_cljs$core$async17098(f__$1,ch__$1,meta17096__$1,___$2,fn1__$1,meta17099));
});

}

return (new cljs.core.async.t_cljs$core$async17098(self__.f,self__.ch,self__.meta17096,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17102 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17102) : self__.f.call(null,G__17102));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17096","meta17096",-1215561985,null)], null);
}));

(cljs.core.async.t_cljs$core$async17095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17095");

(cljs.core.async.t_cljs$core$async17095.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17095.
 */
cljs.core.async.__GT_t_cljs$core$async17095 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17095(f__$1,ch__$1,meta17096){
return (new cljs.core.async.t_cljs$core$async17095(f__$1,ch__$1,meta17096));
});

}

return (new cljs.core.async.t_cljs$core$async17095(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17103 = (function (f,ch,meta17104){
this.f = f;
this.ch = ch;
this.meta17104 = meta17104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17105,meta17104__$1){
var self__ = this;
var _17105__$1 = this;
return (new cljs.core.async.t_cljs$core$async17103(self__.f,self__.ch,meta17104__$1));
}));

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17105){
var self__ = this;
var _17105__$1 = this;
return self__.meta17104;
}));

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17104","meta17104",-270788578,null)], null);
}));

(cljs.core.async.t_cljs$core$async17103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17103");

(cljs.core.async.t_cljs$core$async17103.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17103.
 */
cljs.core.async.__GT_t_cljs$core$async17103 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17103(f__$1,ch__$1,meta17104){
return (new cljs.core.async.t_cljs$core$async17103(f__$1,ch__$1,meta17104));
});

}

return (new cljs.core.async.t_cljs$core$async17103(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17106 = (function (p,ch,meta17107){
this.p = p;
this.ch = ch;
this.meta17107 = meta17107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17108,meta17107__$1){
var self__ = this;
var _17108__$1 = this;
return (new cljs.core.async.t_cljs$core$async17106(self__.p,self__.ch,meta17107__$1));
}));

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17108){
var self__ = this;
var _17108__$1 = this;
return self__.meta17107;
}));

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17107","meta17107",-406536868,null)], null);
}));

(cljs.core.async.t_cljs$core$async17106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17106");

(cljs.core.async.t_cljs$core$async17106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17106.
 */
cljs.core.async.__GT_t_cljs$core$async17106 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17106(p__$1,ch__$1,meta17107){
return (new cljs.core.async.t_cljs$core$async17106(p__$1,ch__$1,meta17107));
});

}

return (new cljs.core.async.t_cljs$core$async17106(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17110 = arguments.length;
switch (G__17110) {
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
var c__15843__auto___17977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17131){
var state_val_17132 = (state_17131[(1)]);
if((state_val_17132 === (7))){
var inst_17127 = (state_17131[(2)]);
var state_17131__$1 = state_17131;
var statearr_17133_17978 = state_17131__$1;
(statearr_17133_17978[(2)] = inst_17127);

(statearr_17133_17978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (1))){
var state_17131__$1 = state_17131;
var statearr_17134_17979 = state_17131__$1;
(statearr_17134_17979[(2)] = null);

(statearr_17134_17979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (4))){
var inst_17113 = (state_17131[(7)]);
var inst_17113__$1 = (state_17131[(2)]);
var inst_17114 = (inst_17113__$1 == null);
var state_17131__$1 = (function (){var statearr_17135 = state_17131;
(statearr_17135[(7)] = inst_17113__$1);

return statearr_17135;
})();
if(cljs.core.truth_(inst_17114)){
var statearr_17136_17980 = state_17131__$1;
(statearr_17136_17980[(1)] = (5));

} else {
var statearr_17137_17981 = state_17131__$1;
(statearr_17137_17981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (6))){
var inst_17113 = (state_17131[(7)]);
var inst_17118 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17113) : p.call(null,inst_17113));
var state_17131__$1 = state_17131;
if(cljs.core.truth_(inst_17118)){
var statearr_17138_17982 = state_17131__$1;
(statearr_17138_17982[(1)] = (8));

} else {
var statearr_17139_17983 = state_17131__$1;
(statearr_17139_17983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (3))){
var inst_17129 = (state_17131[(2)]);
var state_17131__$1 = state_17131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17131__$1,inst_17129);
} else {
if((state_val_17132 === (2))){
var state_17131__$1 = state_17131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17131__$1,(4),ch);
} else {
if((state_val_17132 === (11))){
var inst_17121 = (state_17131[(2)]);
var state_17131__$1 = state_17131;
var statearr_17140_17984 = state_17131__$1;
(statearr_17140_17984[(2)] = inst_17121);

(statearr_17140_17984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (9))){
var state_17131__$1 = state_17131;
var statearr_17141_17988 = state_17131__$1;
(statearr_17141_17988[(2)] = null);

(statearr_17141_17988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (5))){
var inst_17116 = cljs.core.async.close_BANG_(out);
var state_17131__$1 = state_17131;
var statearr_17142_17989 = state_17131__$1;
(statearr_17142_17989[(2)] = inst_17116);

(statearr_17142_17989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (10))){
var inst_17124 = (state_17131[(2)]);
var state_17131__$1 = (function (){var statearr_17143 = state_17131;
(statearr_17143[(8)] = inst_17124);

return statearr_17143;
})();
var statearr_17144_17990 = state_17131__$1;
(statearr_17144_17990[(2)] = null);

(statearr_17144_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17132 === (8))){
var inst_17113 = (state_17131[(7)]);
var state_17131__$1 = state_17131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17131__$1,(11),out,inst_17113);
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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17145 = [null,null,null,null,null,null,null,null,null];
(statearr_17145[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17145[(1)] = (1));

return statearr_17145;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17131){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17131);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17146){var ex__15574__auto__ = e17146;
var statearr_17147_17991 = state_17131;
(statearr_17147_17991[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17131[(4)]))){
var statearr_17148_17992 = state_17131;
(statearr_17148_17992[(1)] = cljs.core.first((state_17131[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17993 = state_17131;
state_17131 = G__17993;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17149 = f__15847__auto__();
(statearr_17149[(6)] = c__15843__auto___17977);

return statearr_17149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17151 = arguments.length;
switch (G__17151) {
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
var c__15843__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17213){
var state_val_17214 = (state_17213[(1)]);
if((state_val_17214 === (7))){
var inst_17209 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17215_17995 = state_17213__$1;
(statearr_17215_17995[(2)] = inst_17209);

(statearr_17215_17995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (20))){
var inst_17179 = (state_17213[(7)]);
var inst_17190 = (state_17213[(2)]);
var inst_17191 = cljs.core.next(inst_17179);
var inst_17165 = inst_17191;
var inst_17166 = null;
var inst_17167 = (0);
var inst_17168 = (0);
var state_17213__$1 = (function (){var statearr_17216 = state_17213;
(statearr_17216[(8)] = inst_17165);

(statearr_17216[(9)] = inst_17166);

(statearr_17216[(10)] = inst_17167);

(statearr_17216[(11)] = inst_17168);

(statearr_17216[(12)] = inst_17190);

return statearr_17216;
})();
var statearr_17217_17996 = state_17213__$1;
(statearr_17217_17996[(2)] = null);

(statearr_17217_17996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (1))){
var state_17213__$1 = state_17213;
var statearr_17218_17997 = state_17213__$1;
(statearr_17218_17997[(2)] = null);

(statearr_17218_17997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (4))){
var inst_17154 = (state_17213[(13)]);
var inst_17154__$1 = (state_17213[(2)]);
var inst_17155 = (inst_17154__$1 == null);
var state_17213__$1 = (function (){var statearr_17219 = state_17213;
(statearr_17219[(13)] = inst_17154__$1);

return statearr_17219;
})();
if(cljs.core.truth_(inst_17155)){
var statearr_17220_17998 = state_17213__$1;
(statearr_17220_17998[(1)] = (5));

} else {
var statearr_17221_17999 = state_17213__$1;
(statearr_17221_17999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (15))){
var state_17213__$1 = state_17213;
var statearr_17225_18000 = state_17213__$1;
(statearr_17225_18000[(2)] = null);

(statearr_17225_18000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (21))){
var state_17213__$1 = state_17213;
var statearr_17226_18001 = state_17213__$1;
(statearr_17226_18001[(2)] = null);

(statearr_17226_18001[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (13))){
var inst_17165 = (state_17213[(8)]);
var inst_17166 = (state_17213[(9)]);
var inst_17167 = (state_17213[(10)]);
var inst_17168 = (state_17213[(11)]);
var inst_17175 = (state_17213[(2)]);
var inst_17176 = (inst_17168 + (1));
var tmp17222 = inst_17165;
var tmp17223 = inst_17166;
var tmp17224 = inst_17167;
var inst_17165__$1 = tmp17222;
var inst_17166__$1 = tmp17223;
var inst_17167__$1 = tmp17224;
var inst_17168__$1 = inst_17176;
var state_17213__$1 = (function (){var statearr_17227 = state_17213;
(statearr_17227[(8)] = inst_17165__$1);

(statearr_17227[(14)] = inst_17175);

(statearr_17227[(9)] = inst_17166__$1);

(statearr_17227[(10)] = inst_17167__$1);

(statearr_17227[(11)] = inst_17168__$1);

return statearr_17227;
})();
var statearr_17228_18002 = state_17213__$1;
(statearr_17228_18002[(2)] = null);

(statearr_17228_18002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (22))){
var state_17213__$1 = state_17213;
var statearr_17229_18003 = state_17213__$1;
(statearr_17229_18003[(2)] = null);

(statearr_17229_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (6))){
var inst_17154 = (state_17213[(13)]);
var inst_17163 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17154) : f.call(null,inst_17154));
var inst_17164 = cljs.core.seq(inst_17163);
var inst_17165 = inst_17164;
var inst_17166 = null;
var inst_17167 = (0);
var inst_17168 = (0);
var state_17213__$1 = (function (){var statearr_17230 = state_17213;
(statearr_17230[(8)] = inst_17165);

(statearr_17230[(9)] = inst_17166);

(statearr_17230[(10)] = inst_17167);

(statearr_17230[(11)] = inst_17168);

return statearr_17230;
})();
var statearr_17231_18004 = state_17213__$1;
(statearr_17231_18004[(2)] = null);

(statearr_17231_18004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (17))){
var inst_17179 = (state_17213[(7)]);
var inst_17183 = cljs.core.chunk_first(inst_17179);
var inst_17184 = cljs.core.chunk_rest(inst_17179);
var inst_17185 = cljs.core.count(inst_17183);
var inst_17165 = inst_17184;
var inst_17166 = inst_17183;
var inst_17167 = inst_17185;
var inst_17168 = (0);
var state_17213__$1 = (function (){var statearr_17232 = state_17213;
(statearr_17232[(8)] = inst_17165);

(statearr_17232[(9)] = inst_17166);

(statearr_17232[(10)] = inst_17167);

(statearr_17232[(11)] = inst_17168);

return statearr_17232;
})();
var statearr_17233_18005 = state_17213__$1;
(statearr_17233_18005[(2)] = null);

(statearr_17233_18005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (3))){
var inst_17211 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17213__$1,inst_17211);
} else {
if((state_val_17214 === (12))){
var inst_17199 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17234_18006 = state_17213__$1;
(statearr_17234_18006[(2)] = inst_17199);

(statearr_17234_18006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (2))){
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17213__$1,(4),in$);
} else {
if((state_val_17214 === (23))){
var inst_17207 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17235_18007 = state_17213__$1;
(statearr_17235_18007[(2)] = inst_17207);

(statearr_17235_18007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (19))){
var inst_17194 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17236_18008 = state_17213__$1;
(statearr_17236_18008[(2)] = inst_17194);

(statearr_17236_18008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (11))){
var inst_17165 = (state_17213[(8)]);
var inst_17179 = (state_17213[(7)]);
var inst_17179__$1 = cljs.core.seq(inst_17165);
var state_17213__$1 = (function (){var statearr_17237 = state_17213;
(statearr_17237[(7)] = inst_17179__$1);

return statearr_17237;
})();
if(inst_17179__$1){
var statearr_17238_18009 = state_17213__$1;
(statearr_17238_18009[(1)] = (14));

} else {
var statearr_17239_18010 = state_17213__$1;
(statearr_17239_18010[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (9))){
var inst_17201 = (state_17213[(2)]);
var inst_17202 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17213__$1 = (function (){var statearr_17240 = state_17213;
(statearr_17240[(15)] = inst_17201);

return statearr_17240;
})();
if(cljs.core.truth_(inst_17202)){
var statearr_17241_18011 = state_17213__$1;
(statearr_17241_18011[(1)] = (21));

} else {
var statearr_17242_18012 = state_17213__$1;
(statearr_17242_18012[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (5))){
var inst_17157 = cljs.core.async.close_BANG_(out);
var state_17213__$1 = state_17213;
var statearr_17243_18013 = state_17213__$1;
(statearr_17243_18013[(2)] = inst_17157);

(statearr_17243_18013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (14))){
var inst_17179 = (state_17213[(7)]);
var inst_17181 = cljs.core.chunked_seq_QMARK_(inst_17179);
var state_17213__$1 = state_17213;
if(inst_17181){
var statearr_17244_18014 = state_17213__$1;
(statearr_17244_18014[(1)] = (17));

} else {
var statearr_17245_18015 = state_17213__$1;
(statearr_17245_18015[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (16))){
var inst_17197 = (state_17213[(2)]);
var state_17213__$1 = state_17213;
var statearr_17246_18016 = state_17213__$1;
(statearr_17246_18016[(2)] = inst_17197);

(statearr_17246_18016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17214 === (10))){
var inst_17166 = (state_17213[(9)]);
var inst_17168 = (state_17213[(11)]);
var inst_17173 = cljs.core._nth(inst_17166,inst_17168);
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17213__$1,(13),out,inst_17173);
} else {
if((state_val_17214 === (18))){
var inst_17179 = (state_17213[(7)]);
var inst_17188 = cljs.core.first(inst_17179);
var state_17213__$1 = state_17213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17213__$1,(20),out,inst_17188);
} else {
if((state_val_17214 === (8))){
var inst_17167 = (state_17213[(10)]);
var inst_17168 = (state_17213[(11)]);
var inst_17170 = (inst_17168 < inst_17167);
var inst_17171 = inst_17170;
var state_17213__$1 = state_17213;
if(cljs.core.truth_(inst_17171)){
var statearr_17247_18017 = state_17213__$1;
(statearr_17247_18017[(1)] = (10));

} else {
var statearr_17248_18018 = state_17213__$1;
(statearr_17248_18018[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____0 = (function (){
var statearr_17249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17249[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__);

(statearr_17249[(1)] = (1));

return statearr_17249;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____1 = (function (state_17213){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17213);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17250){var ex__15574__auto__ = e17250;
var statearr_17251_18019 = state_17213;
(statearr_17251_18019[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17213[(4)]))){
var statearr_17252_18020 = state_17213;
(statearr_17252_18020[(1)] = cljs.core.first((state_17213[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18021 = state_17213;
state_17213 = G__18021;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__ = function(state_17213){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____1.call(this,state_17213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15571__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17253 = f__15847__auto__();
(statearr_17253[(6)] = c__15843__auto__);

return statearr_17253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));

return c__15843__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17255 = arguments.length;
switch (G__17255) {
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
var G__17257 = arguments.length;
switch (G__17257) {
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
var G__17259 = arguments.length;
switch (G__17259) {
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
var c__15843__auto___18026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17283){
var state_val_17284 = (state_17283[(1)]);
if((state_val_17284 === (7))){
var inst_17278 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
var statearr_17285_18031 = state_17283__$1;
(statearr_17285_18031[(2)] = inst_17278);

(statearr_17285_18031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (1))){
var inst_17260 = null;
var state_17283__$1 = (function (){var statearr_17286 = state_17283;
(statearr_17286[(7)] = inst_17260);

return statearr_17286;
})();
var statearr_17287_18032 = state_17283__$1;
(statearr_17287_18032[(2)] = null);

(statearr_17287_18032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (4))){
var inst_17263 = (state_17283[(8)]);
var inst_17263__$1 = (state_17283[(2)]);
var inst_17264 = (inst_17263__$1 == null);
var inst_17265 = cljs.core.not(inst_17264);
var state_17283__$1 = (function (){var statearr_17288 = state_17283;
(statearr_17288[(8)] = inst_17263__$1);

return statearr_17288;
})();
if(inst_17265){
var statearr_17289_18033 = state_17283__$1;
(statearr_17289_18033[(1)] = (5));

} else {
var statearr_17290_18034 = state_17283__$1;
(statearr_17290_18034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (6))){
var state_17283__$1 = state_17283;
var statearr_17291_18035 = state_17283__$1;
(statearr_17291_18035[(2)] = null);

(statearr_17291_18035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (3))){
var inst_17280 = (state_17283[(2)]);
var inst_17281 = cljs.core.async.close_BANG_(out);
var state_17283__$1 = (function (){var statearr_17292 = state_17283;
(statearr_17292[(9)] = inst_17280);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17283__$1,inst_17281);
} else {
if((state_val_17284 === (2))){
var state_17283__$1 = state_17283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17283__$1,(4),ch);
} else {
if((state_val_17284 === (11))){
var inst_17263 = (state_17283[(8)]);
var inst_17272 = (state_17283[(2)]);
var inst_17260 = inst_17263;
var state_17283__$1 = (function (){var statearr_17293 = state_17283;
(statearr_17293[(7)] = inst_17260);

(statearr_17293[(10)] = inst_17272);

return statearr_17293;
})();
var statearr_17294_18036 = state_17283__$1;
(statearr_17294_18036[(2)] = null);

(statearr_17294_18036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (9))){
var inst_17263 = (state_17283[(8)]);
var state_17283__$1 = state_17283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17283__$1,(11),out,inst_17263);
} else {
if((state_val_17284 === (5))){
var inst_17260 = (state_17283[(7)]);
var inst_17263 = (state_17283[(8)]);
var inst_17267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17263,inst_17260);
var state_17283__$1 = state_17283;
if(inst_17267){
var statearr_17296_18039 = state_17283__$1;
(statearr_17296_18039[(1)] = (8));

} else {
var statearr_17297_18040 = state_17283__$1;
(statearr_17297_18040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (10))){
var inst_17275 = (state_17283[(2)]);
var state_17283__$1 = state_17283;
var statearr_17298_18041 = state_17283__$1;
(statearr_17298_18041[(2)] = inst_17275);

(statearr_17298_18041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17284 === (8))){
var inst_17260 = (state_17283[(7)]);
var tmp17295 = inst_17260;
var inst_17260__$1 = tmp17295;
var state_17283__$1 = (function (){var statearr_17299 = state_17283;
(statearr_17299[(7)] = inst_17260__$1);

return statearr_17299;
})();
var statearr_17300_18042 = state_17283__$1;
(statearr_17300_18042[(2)] = null);

(statearr_17300_18042[(1)] = (2));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17301[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17301[(1)] = (1));

return statearr_17301;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17283){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17283);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17302){var ex__15574__auto__ = e17302;
var statearr_17303_18043 = state_17283;
(statearr_17303_18043[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17283[(4)]))){
var statearr_17304_18044 = state_17283;
(statearr_17304_18044[(1)] = cljs.core.first((state_17283[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18045 = state_17283;
state_17283 = G__18045;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17305 = f__15847__auto__();
(statearr_17305[(6)] = c__15843__auto___18026);

return statearr_17305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17307 = arguments.length;
switch (G__17307) {
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
var c__15843__auto___18051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17345){
var state_val_17346 = (state_17345[(1)]);
if((state_val_17346 === (7))){
var inst_17341 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17347_18052 = state_17345__$1;
(statearr_17347_18052[(2)] = inst_17341);

(statearr_17347_18052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (1))){
var inst_17308 = (new Array(n));
var inst_17309 = inst_17308;
var inst_17310 = (0);
var state_17345__$1 = (function (){var statearr_17348 = state_17345;
(statearr_17348[(7)] = inst_17309);

(statearr_17348[(8)] = inst_17310);

return statearr_17348;
})();
var statearr_17349_18053 = state_17345__$1;
(statearr_17349_18053[(2)] = null);

(statearr_17349_18053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (4))){
var inst_17313 = (state_17345[(9)]);
var inst_17313__$1 = (state_17345[(2)]);
var inst_17314 = (inst_17313__$1 == null);
var inst_17315 = cljs.core.not(inst_17314);
var state_17345__$1 = (function (){var statearr_17350 = state_17345;
(statearr_17350[(9)] = inst_17313__$1);

return statearr_17350;
})();
if(inst_17315){
var statearr_17351_18054 = state_17345__$1;
(statearr_17351_18054[(1)] = (5));

} else {
var statearr_17352_18055 = state_17345__$1;
(statearr_17352_18055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (15))){
var inst_17335 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17353_18056 = state_17345__$1;
(statearr_17353_18056[(2)] = inst_17335);

(statearr_17353_18056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (13))){
var state_17345__$1 = state_17345;
var statearr_17354_18057 = state_17345__$1;
(statearr_17354_18057[(2)] = null);

(statearr_17354_18057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (6))){
var inst_17310 = (state_17345[(8)]);
var inst_17331 = (inst_17310 > (0));
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17331)){
var statearr_17355_18058 = state_17345__$1;
(statearr_17355_18058[(1)] = (12));

} else {
var statearr_17356_18059 = state_17345__$1;
(statearr_17356_18059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (3))){
var inst_17343 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17345__$1,inst_17343);
} else {
if((state_val_17346 === (12))){
var inst_17309 = (state_17345[(7)]);
var inst_17333 = cljs.core.vec(inst_17309);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(15),out,inst_17333);
} else {
if((state_val_17346 === (2))){
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17345__$1,(4),ch);
} else {
if((state_val_17346 === (11))){
var inst_17325 = (state_17345[(2)]);
var inst_17326 = (new Array(n));
var inst_17309 = inst_17326;
var inst_17310 = (0);
var state_17345__$1 = (function (){var statearr_17357 = state_17345;
(statearr_17357[(7)] = inst_17309);

(statearr_17357[(8)] = inst_17310);

(statearr_17357[(10)] = inst_17325);

return statearr_17357;
})();
var statearr_17358_18060 = state_17345__$1;
(statearr_17358_18060[(2)] = null);

(statearr_17358_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (9))){
var inst_17309 = (state_17345[(7)]);
var inst_17323 = cljs.core.vec(inst_17309);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17345__$1,(11),out,inst_17323);
} else {
if((state_val_17346 === (5))){
var inst_17309 = (state_17345[(7)]);
var inst_17310 = (state_17345[(8)]);
var inst_17318 = (state_17345[(11)]);
var inst_17313 = (state_17345[(9)]);
var inst_17317 = (inst_17309[inst_17310] = inst_17313);
var inst_17318__$1 = (inst_17310 + (1));
var inst_17319 = (inst_17318__$1 < n);
var state_17345__$1 = (function (){var statearr_17359 = state_17345;
(statearr_17359[(11)] = inst_17318__$1);

(statearr_17359[(12)] = inst_17317);

return statearr_17359;
})();
if(cljs.core.truth_(inst_17319)){
var statearr_17360_18061 = state_17345__$1;
(statearr_17360_18061[(1)] = (8));

} else {
var statearr_17361_18062 = state_17345__$1;
(statearr_17361_18062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (14))){
var inst_17338 = (state_17345[(2)]);
var inst_17339 = cljs.core.async.close_BANG_(out);
var state_17345__$1 = (function (){var statearr_17363 = state_17345;
(statearr_17363[(13)] = inst_17338);

return statearr_17363;
})();
var statearr_17364_18063 = state_17345__$1;
(statearr_17364_18063[(2)] = inst_17339);

(statearr_17364_18063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (10))){
var inst_17329 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17365_18064 = state_17345__$1;
(statearr_17365_18064[(2)] = inst_17329);

(statearr_17365_18064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (8))){
var inst_17309 = (state_17345[(7)]);
var inst_17318 = (state_17345[(11)]);
var tmp17362 = inst_17309;
var inst_17309__$1 = tmp17362;
var inst_17310 = inst_17318;
var state_17345__$1 = (function (){var statearr_17366 = state_17345;
(statearr_17366[(7)] = inst_17309__$1);

(statearr_17366[(8)] = inst_17310);

return statearr_17366;
})();
var statearr_17367_18065 = state_17345__$1;
(statearr_17367_18065[(2)] = null);

(statearr_17367_18065[(1)] = (2));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17368[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17368[(1)] = (1));

return statearr_17368;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17345){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17345);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17369){var ex__15574__auto__ = e17369;
var statearr_17370_18066 = state_17345;
(statearr_17370_18066[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17345[(4)]))){
var statearr_17371_18067 = state_17345;
(statearr_17371_18067[(1)] = cljs.core.first((state_17345[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18068 = state_17345;
state_17345 = G__18068;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17372 = f__15847__auto__();
(statearr_17372[(6)] = c__15843__auto___18051);

return statearr_17372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17374 = arguments.length;
switch (G__17374) {
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
var c__15843__auto___18070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15847__auto__ = (function (){var switch__15570__auto__ = (function (state_17419){
var state_val_17420 = (state_17419[(1)]);
if((state_val_17420 === (7))){
var inst_17415 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17421_18071 = state_17419__$1;
(statearr_17421_18071[(2)] = inst_17415);

(statearr_17421_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (1))){
var inst_17375 = [];
var inst_17376 = inst_17375;
var inst_17377 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17419__$1 = (function (){var statearr_17422 = state_17419;
(statearr_17422[(7)] = inst_17377);

(statearr_17422[(8)] = inst_17376);

return statearr_17422;
})();
var statearr_17423_18072 = state_17419__$1;
(statearr_17423_18072[(2)] = null);

(statearr_17423_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (4))){
var inst_17380 = (state_17419[(9)]);
var inst_17380__$1 = (state_17419[(2)]);
var inst_17381 = (inst_17380__$1 == null);
var inst_17382 = cljs.core.not(inst_17381);
var state_17419__$1 = (function (){var statearr_17424 = state_17419;
(statearr_17424[(9)] = inst_17380__$1);

return statearr_17424;
})();
if(inst_17382){
var statearr_17425_18073 = state_17419__$1;
(statearr_17425_18073[(1)] = (5));

} else {
var statearr_17426_18074 = state_17419__$1;
(statearr_17426_18074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (15))){
var inst_17376 = (state_17419[(8)]);
var inst_17407 = cljs.core.vec(inst_17376);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17419__$1,(18),out,inst_17407);
} else {
if((state_val_17420 === (13))){
var inst_17402 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17427_18075 = state_17419__$1;
(statearr_17427_18075[(2)] = inst_17402);

(statearr_17427_18075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (6))){
var inst_17376 = (state_17419[(8)]);
var inst_17404 = inst_17376.length;
var inst_17405 = (inst_17404 > (0));
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17405)){
var statearr_17428_18076 = state_17419__$1;
(statearr_17428_18076[(1)] = (15));

} else {
var statearr_17429_18077 = state_17419__$1;
(statearr_17429_18077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (17))){
var inst_17412 = (state_17419[(2)]);
var inst_17413 = cljs.core.async.close_BANG_(out);
var state_17419__$1 = (function (){var statearr_17430 = state_17419;
(statearr_17430[(10)] = inst_17412);

return statearr_17430;
})();
var statearr_17431_18078 = state_17419__$1;
(statearr_17431_18078[(2)] = inst_17413);

(statearr_17431_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (3))){
var inst_17417 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17419__$1,inst_17417);
} else {
if((state_val_17420 === (12))){
var inst_17376 = (state_17419[(8)]);
var inst_17395 = cljs.core.vec(inst_17376);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17419__$1,(14),out,inst_17395);
} else {
if((state_val_17420 === (2))){
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17419__$1,(4),ch);
} else {
if((state_val_17420 === (11))){
var inst_17384 = (state_17419[(11)]);
var inst_17376 = (state_17419[(8)]);
var inst_17380 = (state_17419[(9)]);
var inst_17392 = inst_17376.push(inst_17380);
var tmp17432 = inst_17376;
var inst_17376__$1 = tmp17432;
var inst_17377 = inst_17384;
var state_17419__$1 = (function (){var statearr_17433 = state_17419;
(statearr_17433[(7)] = inst_17377);

(statearr_17433[(12)] = inst_17392);

(statearr_17433[(8)] = inst_17376__$1);

return statearr_17433;
})();
var statearr_17434_18079 = state_17419__$1;
(statearr_17434_18079[(2)] = null);

(statearr_17434_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (9))){
var inst_17377 = (state_17419[(7)]);
var inst_17388 = cljs.core.keyword_identical_QMARK_(inst_17377,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17419__$1 = state_17419;
var statearr_17435_18080 = state_17419__$1;
(statearr_17435_18080[(2)] = inst_17388);

(statearr_17435_18080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (5))){
var inst_17384 = (state_17419[(11)]);
var inst_17385 = (state_17419[(13)]);
var inst_17377 = (state_17419[(7)]);
var inst_17380 = (state_17419[(9)]);
var inst_17384__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17380) : f.call(null,inst_17380));
var inst_17385__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17384__$1,inst_17377);
var state_17419__$1 = (function (){var statearr_17436 = state_17419;
(statearr_17436[(11)] = inst_17384__$1);

(statearr_17436[(13)] = inst_17385__$1);

return statearr_17436;
})();
if(inst_17385__$1){
var statearr_17437_18081 = state_17419__$1;
(statearr_17437_18081[(1)] = (8));

} else {
var statearr_17438_18082 = state_17419__$1;
(statearr_17438_18082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (14))){
var inst_17384 = (state_17419[(11)]);
var inst_17380 = (state_17419[(9)]);
var inst_17397 = (state_17419[(2)]);
var inst_17398 = [];
var inst_17399 = inst_17398.push(inst_17380);
var inst_17376 = inst_17398;
var inst_17377 = inst_17384;
var state_17419__$1 = (function (){var statearr_17439 = state_17419;
(statearr_17439[(14)] = inst_17397);

(statearr_17439[(7)] = inst_17377);

(statearr_17439[(8)] = inst_17376);

(statearr_17439[(15)] = inst_17399);

return statearr_17439;
})();
var statearr_17440_18083 = state_17419__$1;
(statearr_17440_18083[(2)] = null);

(statearr_17440_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (16))){
var state_17419__$1 = state_17419;
var statearr_17441_18084 = state_17419__$1;
(statearr_17441_18084[(2)] = null);

(statearr_17441_18084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (10))){
var inst_17390 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17390)){
var statearr_17442_18085 = state_17419__$1;
(statearr_17442_18085[(1)] = (11));

} else {
var statearr_17443_18086 = state_17419__$1;
(statearr_17443_18086[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (18))){
var inst_17409 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17444_18087 = state_17419__$1;
(statearr_17444_18087[(2)] = inst_17409);

(statearr_17444_18087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (8))){
var inst_17385 = (state_17419[(13)]);
var state_17419__$1 = state_17419;
var statearr_17445_18088 = state_17419__$1;
(statearr_17445_18088[(2)] = inst_17385);

(statearr_17445_18088[(1)] = (10));


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
var cljs$core$async$state_machine__15571__auto__ = null;
var cljs$core$async$state_machine__15571__auto____0 = (function (){
var statearr_17446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17446[(0)] = cljs$core$async$state_machine__15571__auto__);

(statearr_17446[(1)] = (1));

return statearr_17446;
});
var cljs$core$async$state_machine__15571__auto____1 = (function (state_17419){
while(true){
var ret_value__15572__auto__ = (function (){try{while(true){
var result__15573__auto__ = switch__15570__auto__(state_17419);
if(cljs.core.keyword_identical_QMARK_(result__15573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15573__auto__;
}
break;
}
}catch (e17447){var ex__15574__auto__ = e17447;
var statearr_17448_18089 = state_17419;
(statearr_17448_18089[(2)] = ex__15574__auto__);


if(cljs.core.seq((state_17419[(4)]))){
var statearr_17449_18090 = state_17419;
(statearr_17449_18090[(1)] = cljs.core.first((state_17419[(4)])));

} else {
throw ex__15574__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18091 = state_17419;
state_17419 = G__18091;
continue;
} else {
return ret_value__15572__auto__;
}
break;
}
});
cljs$core$async$state_machine__15571__auto__ = function(state_17419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15571__auto____1.call(this,state_17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15571__auto____0;
cljs$core$async$state_machine__15571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15571__auto____1;
return cljs$core$async$state_machine__15571__auto__;
})()
})();
var state__15848__auto__ = (function (){var statearr_17450 = f__15847__auto__();
(statearr_17450[(6)] = c__15843__auto___18070);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15848__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
