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
var G__47065 = arguments.length;
switch (G__47065) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47066 = (function (f,blockable,meta47067){
this.f = f;
this.blockable = blockable;
this.meta47067 = meta47067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47068,meta47067__$1){
var self__ = this;
var _47068__$1 = this;
return (new cljs.core.async.t_cljs$core$async47066(self__.f,self__.blockable,meta47067__$1));
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47068){
var self__ = this;
var _47068__$1 = this;
return self__.meta47067;
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47067","meta47067",216659158,null)], null);
});

cljs.core.async.t_cljs$core$async47066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47066";

cljs.core.async.t_cljs$core$async47066.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47066");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47066.
 */
cljs.core.async.__GT_t_cljs$core$async47066 = (function cljs$core$async$__GT_t_cljs$core$async47066(f__$1,blockable__$1,meta47067){
return (new cljs.core.async.t_cljs$core$async47066(f__$1,blockable__$1,meta47067));
});

}

return (new cljs.core.async.t_cljs$core$async47066(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__47071 = arguments.length;
switch (G__47071) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__47075 = arguments.length;
switch (G__47075) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__47077 = arguments.length;
switch (G__47077) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48524 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48524) : fn1.call(null,val_48524));
} else {
cljs.core.async.impl.dispatch.run(((function (val_48524,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48524) : fn1.call(null,val_48524));
});})(val_48524,ret))
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
var G__47079 = arguments.length;
switch (G__47079) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___48541 = n;
var x_48542 = (0);
while(true){
if((x_48542 < n__4607__auto___48541)){
(a[x_48542] = x_48542);

var G__48543 = (x_48542 + (1));
x_48542 = G__48543;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47080 = (function (flag,meta47081){
this.flag = flag;
this.meta47081 = meta47081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47082,meta47081__$1){
var self__ = this;
var _47082__$1 = this;
return (new cljs.core.async.t_cljs$core$async47080(self__.flag,meta47081__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47082){
var self__ = this;
var _47082__$1 = this;
return self__.meta47081;
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47081","meta47081",625862016,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47080";

cljs.core.async.t_cljs$core$async47080.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47080");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47080.
 */
cljs.core.async.__GT_t_cljs$core$async47080 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47080(flag__$1,meta47081){
return (new cljs.core.async.t_cljs$core$async47080(flag__$1,meta47081));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47080(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47083 = (function (flag,cb,meta47084){
this.flag = flag;
this.cb = cb;
this.meta47084 = meta47084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47085,meta47084__$1){
var self__ = this;
var _47085__$1 = this;
return (new cljs.core.async.t_cljs$core$async47083(self__.flag,self__.cb,meta47084__$1));
});

cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47085){
var self__ = this;
var _47085__$1 = this;
return self__.meta47084;
});

cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47084","meta47084",651654603,null)], null);
});

cljs.core.async.t_cljs$core$async47083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47083";

cljs.core.async.t_cljs$core$async47083.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47083");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47083.
 */
cljs.core.async.__GT_t_cljs$core$async47083 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47083(flag__$1,cb__$1,meta47084){
return (new cljs.core.async.t_cljs$core$async47083(flag__$1,cb__$1,meta47084));
});

}

return (new cljs.core.async.t_cljs$core$async47083(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47086_SHARP_){
var G__47088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47086_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47088) : fret.call(null,G__47088));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47087_SHARP_){
var G__47089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47087_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47089) : fret.call(null,G__47089));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48569 = (i + (1));
i = G__48569;
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
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___48575 = arguments.length;
var i__4731__auto___48577 = (0);
while(true){
if((i__4731__auto___48577 < len__4730__auto___48575)){
args__4736__auto__.push((arguments[i__4731__auto___48577]));

var G__48578 = (i__4731__auto___48577 + (1));
i__4731__auto___48577 = G__48578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47092){
var map__47093 = p__47092;
var map__47093__$1 = (((((!((map__47093 == null))))?(((((map__47093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47093):map__47093);
var opts = map__47093__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47090){
var G__47091 = cljs.core.first(seq47090);
var seq47090__$1 = cljs.core.next(seq47090);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47091,seq47090__$1);
});

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
var G__47096 = arguments.length;
switch (G__47096) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47005__auto___48594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___48594){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___48594){
return (function (state_47120){
var state_val_47121 = (state_47120[(1)]);
if((state_val_47121 === (7))){
var inst_47116 = (state_47120[(2)]);
var state_47120__$1 = state_47120;
var statearr_47122_48603 = state_47120__$1;
(statearr_47122_48603[(2)] = inst_47116);

(statearr_47122_48603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (1))){
var state_47120__$1 = state_47120;
var statearr_47123_48604 = state_47120__$1;
(statearr_47123_48604[(2)] = null);

(statearr_47123_48604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (4))){
var inst_47099 = (state_47120[(7)]);
var inst_47099__$1 = (state_47120[(2)]);
var inst_47100 = (inst_47099__$1 == null);
var state_47120__$1 = (function (){var statearr_47124 = state_47120;
(statearr_47124[(7)] = inst_47099__$1);

return statearr_47124;
})();
if(cljs.core.truth_(inst_47100)){
var statearr_47125_48605 = state_47120__$1;
(statearr_47125_48605[(1)] = (5));

} else {
var statearr_47126_48606 = state_47120__$1;
(statearr_47126_48606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (13))){
var state_47120__$1 = state_47120;
var statearr_47127_48607 = state_47120__$1;
(statearr_47127_48607[(2)] = null);

(statearr_47127_48607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (6))){
var inst_47099 = (state_47120[(7)]);
var state_47120__$1 = state_47120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47120__$1,(11),to,inst_47099);
} else {
if((state_val_47121 === (3))){
var inst_47118 = (state_47120[(2)]);
var state_47120__$1 = state_47120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47120__$1,inst_47118);
} else {
if((state_val_47121 === (12))){
var state_47120__$1 = state_47120;
var statearr_47128_48608 = state_47120__$1;
(statearr_47128_48608[(2)] = null);

(statearr_47128_48608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (2))){
var state_47120__$1 = state_47120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47120__$1,(4),from);
} else {
if((state_val_47121 === (11))){
var inst_47109 = (state_47120[(2)]);
var state_47120__$1 = state_47120;
if(cljs.core.truth_(inst_47109)){
var statearr_47129_48609 = state_47120__$1;
(statearr_47129_48609[(1)] = (12));

} else {
var statearr_47130_48610 = state_47120__$1;
(statearr_47130_48610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (9))){
var state_47120__$1 = state_47120;
var statearr_47131_48611 = state_47120__$1;
(statearr_47131_48611[(2)] = null);

(statearr_47131_48611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (5))){
var state_47120__$1 = state_47120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47132_48612 = state_47120__$1;
(statearr_47132_48612[(1)] = (8));

} else {
var statearr_47133_48613 = state_47120__$1;
(statearr_47133_48613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (14))){
var inst_47114 = (state_47120[(2)]);
var state_47120__$1 = state_47120;
var statearr_47134_48614 = state_47120__$1;
(statearr_47134_48614[(2)] = inst_47114);

(statearr_47134_48614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (10))){
var inst_47106 = (state_47120[(2)]);
var state_47120__$1 = state_47120;
var statearr_47135_48615 = state_47120__$1;
(statearr_47135_48615[(2)] = inst_47106);

(statearr_47135_48615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47121 === (8))){
var inst_47103 = cljs.core.async.close_BANG_(to);
var state_47120__$1 = state_47120;
var statearr_47136_48618 = state_47120__$1;
(statearr_47136_48618[(2)] = inst_47103);

(statearr_47136_48618[(1)] = (10));


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
});})(c__47005__auto___48594))
;
return ((function (switch__46939__auto__,c__47005__auto___48594){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_47137 = [null,null,null,null,null,null,null,null];
(statearr_47137[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_47137[(1)] = (1));

return statearr_47137;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_47120){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47120);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47138){if((e47138 instanceof Object)){
var ex__46943__auto__ = e47138;
var statearr_47139_48629 = state_47120;
(statearr_47139_48629[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48632 = state_47120;
state_47120 = G__48632;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_47120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_47120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___48594))
})();
var state__47007__auto__ = (function (){var statearr_47140 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47140[(6)] = c__47005__auto___48594);

return statearr_47140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___48594))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__47141){
var vec__47142 = p__47141;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47142,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47142,(1),null);
var job = vec__47142;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47005__auto___48637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results){
return (function (state_47149){
var state_val_47150 = (state_47149[(1)]);
if((state_val_47150 === (1))){
var state_47149__$1 = state_47149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47149__$1,(2),res,v);
} else {
if((state_val_47150 === (2))){
var inst_47146 = (state_47149[(2)]);
var inst_47147 = cljs.core.async.close_BANG_(res);
var state_47149__$1 = (function (){var statearr_47151 = state_47149;
(statearr_47151[(7)] = inst_47146);

return statearr_47151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47149__$1,inst_47147);
} else {
return null;
}
}
});})(c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results))
;
return ((function (switch__46939__auto__,c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_47152 = [null,null,null,null,null,null,null,null];
(statearr_47152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__);

(statearr_47152[(1)] = (1));

return statearr_47152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1 = (function (state_47149){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47149);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47153){if((e47153 instanceof Object)){
var ex__46943__auto__ = e47153;
var statearr_47154_48643 = state_47149;
(statearr_47154_48643[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48644 = state_47149;
state_47149 = G__48644;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = function(state_47149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1.call(this,state_47149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results))
})();
var state__47007__auto__ = (function (){var statearr_47155 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47155[(6)] = c__47005__auto___48637);

return statearr_47155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___48637,res,vec__47142,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47156){
var vec__47157 = p__47156;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47157,(1),null);
var job = vec__47157;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___48647 = n;
var __48648 = (0);
while(true){
if((__48648 < n__4607__auto___48647)){
var G__47160_48649 = type;
var G__47160_48650__$1 = (((G__47160_48649 instanceof cljs.core.Keyword))?G__47160_48649.fqn:null);
switch (G__47160_48650__$1) {
case "compute":
var c__47005__auto___48652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48648,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (__48648,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function (state_47173){
var state_val_47174 = (state_47173[(1)]);
if((state_val_47174 === (1))){
var state_47173__$1 = state_47173;
var statearr_47175_48653 = state_47173__$1;
(statearr_47175_48653[(2)] = null);

(statearr_47175_48653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47174 === (2))){
var state_47173__$1 = state_47173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47173__$1,(4),jobs);
} else {
if((state_val_47174 === (3))){
var inst_47171 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47173__$1,inst_47171);
} else {
if((state_val_47174 === (4))){
var inst_47163 = (state_47173[(2)]);
var inst_47164 = process(inst_47163);
var state_47173__$1 = state_47173;
if(cljs.core.truth_(inst_47164)){
var statearr_47176_48655 = state_47173__$1;
(statearr_47176_48655[(1)] = (5));

} else {
var statearr_47177_48657 = state_47173__$1;
(statearr_47177_48657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47174 === (5))){
var state_47173__$1 = state_47173;
var statearr_47178_48658 = state_47173__$1;
(statearr_47178_48658[(2)] = null);

(statearr_47178_48658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47174 === (6))){
var state_47173__$1 = state_47173;
var statearr_47179_48661 = state_47173__$1;
(statearr_47179_48661[(2)] = null);

(statearr_47179_48661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47174 === (7))){
var inst_47169 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47180_48664 = state_47173__$1;
(statearr_47180_48664[(2)] = inst_47169);

(statearr_47180_48664[(1)] = (3));


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
});})(__48648,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
;
return ((function (__48648,switch__46939__auto__,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_47181 = [null,null,null,null,null,null,null];
(statearr_47181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__);

(statearr_47181[(1)] = (1));

return statearr_47181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1 = (function (state_47173){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47173);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47182){if((e47182 instanceof Object)){
var ex__46943__auto__ = e47182;
var statearr_47183_48667 = state_47173;
(statearr_47183_48667[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48668 = state_47173;
state_47173 = G__48668;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = function(state_47173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1.call(this,state_47173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__;
})()
;})(__48648,switch__46939__auto__,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
})();
var state__47007__auto__ = (function (){var statearr_47184 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47184[(6)] = c__47005__auto___48652);

return statearr_47184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(__48648,c__47005__auto___48652,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
);


break;
case "async":
var c__47005__auto___48671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48648,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (__48648,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function (state_47197){
var state_val_47198 = (state_47197[(1)]);
if((state_val_47198 === (1))){
var state_47197__$1 = state_47197;
var statearr_47199_48674 = state_47197__$1;
(statearr_47199_48674[(2)] = null);

(statearr_47199_48674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (2))){
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47197__$1,(4),jobs);
} else {
if((state_val_47198 === (3))){
var inst_47195 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47197__$1,inst_47195);
} else {
if((state_val_47198 === (4))){
var inst_47187 = (state_47197[(2)]);
var inst_47188 = async(inst_47187);
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47188)){
var statearr_47200_48677 = state_47197__$1;
(statearr_47200_48677[(1)] = (5));

} else {
var statearr_47201_48678 = state_47197__$1;
(statearr_47201_48678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (5))){
var state_47197__$1 = state_47197;
var statearr_47202_48679 = state_47197__$1;
(statearr_47202_48679[(2)] = null);

(statearr_47202_48679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (6))){
var state_47197__$1 = state_47197;
var statearr_47203_48680 = state_47197__$1;
(statearr_47203_48680[(2)] = null);

(statearr_47203_48680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (7))){
var inst_47193 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47204_48681 = state_47197__$1;
(statearr_47204_48681[(2)] = inst_47193);

(statearr_47204_48681[(1)] = (3));


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
});})(__48648,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
;
return ((function (__48648,switch__46939__auto__,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_47205 = [null,null,null,null,null,null,null];
(statearr_47205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__);

(statearr_47205[(1)] = (1));

return statearr_47205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1 = (function (state_47197){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47197);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47206){if((e47206 instanceof Object)){
var ex__46943__auto__ = e47206;
var statearr_47207_48683 = state_47197;
(statearr_47207_48683[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48684 = state_47197;
state_47197 = G__48684;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = function(state_47197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1.call(this,state_47197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__;
})()
;})(__48648,switch__46939__auto__,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
})();
var state__47007__auto__ = (function (){var statearr_47208 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47208[(6)] = c__47005__auto___48671);

return statearr_47208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(__48648,c__47005__auto___48671,G__47160_48649,G__47160_48650__$1,n__4607__auto___48647,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47160_48650__$1)].join('')));

}

var G__48685 = (__48648 + (1));
__48648 = G__48685;
continue;
} else {
}
break;
}

var c__47005__auto___48686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___48686,jobs,results,process,async){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___48686,jobs,results,process,async){
return (function (state_47230){
var state_val_47231 = (state_47230[(1)]);
if((state_val_47231 === (7))){
var inst_47226 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
var statearr_47232_48687 = state_47230__$1;
(statearr_47232_48687[(2)] = inst_47226);

(statearr_47232_48687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (1))){
var state_47230__$1 = state_47230;
var statearr_47233_48688 = state_47230__$1;
(statearr_47233_48688[(2)] = null);

(statearr_47233_48688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (4))){
var inst_47211 = (state_47230[(7)]);
var inst_47211__$1 = (state_47230[(2)]);
var inst_47212 = (inst_47211__$1 == null);
var state_47230__$1 = (function (){var statearr_47234 = state_47230;
(statearr_47234[(7)] = inst_47211__$1);

return statearr_47234;
})();
if(cljs.core.truth_(inst_47212)){
var statearr_47235_48693 = state_47230__$1;
(statearr_47235_48693[(1)] = (5));

} else {
var statearr_47236_48694 = state_47230__$1;
(statearr_47236_48694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (6))){
var inst_47211 = (state_47230[(7)]);
var inst_47216 = (state_47230[(8)]);
var inst_47216__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47218 = [inst_47211,inst_47216__$1];
var inst_47219 = (new cljs.core.PersistentVector(null,2,(5),inst_47217,inst_47218,null));
var state_47230__$1 = (function (){var statearr_47237 = state_47230;
(statearr_47237[(8)] = inst_47216__$1);

return statearr_47237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47230__$1,(8),jobs,inst_47219);
} else {
if((state_val_47231 === (3))){
var inst_47228 = (state_47230[(2)]);
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47230__$1,inst_47228);
} else {
if((state_val_47231 === (2))){
var state_47230__$1 = state_47230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47230__$1,(4),from);
} else {
if((state_val_47231 === (9))){
var inst_47223 = (state_47230[(2)]);
var state_47230__$1 = (function (){var statearr_47238 = state_47230;
(statearr_47238[(9)] = inst_47223);

return statearr_47238;
})();
var statearr_47239_48707 = state_47230__$1;
(statearr_47239_48707[(2)] = null);

(statearr_47239_48707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (5))){
var inst_47214 = cljs.core.async.close_BANG_(jobs);
var state_47230__$1 = state_47230;
var statearr_47240_48708 = state_47230__$1;
(statearr_47240_48708[(2)] = inst_47214);

(statearr_47240_48708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47231 === (8))){
var inst_47216 = (state_47230[(8)]);
var inst_47221 = (state_47230[(2)]);
var state_47230__$1 = (function (){var statearr_47241 = state_47230;
(statearr_47241[(10)] = inst_47221);

return statearr_47241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47230__$1,(9),results,inst_47216);
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
});})(c__47005__auto___48686,jobs,results,process,async))
;
return ((function (switch__46939__auto__,c__47005__auto___48686,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_47242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__);

(statearr_47242[(1)] = (1));

return statearr_47242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1 = (function (state_47230){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47230);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47243){if((e47243 instanceof Object)){
var ex__46943__auto__ = e47243;
var statearr_47244_48711 = state_47230;
(statearr_47244_48711[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48712 = state_47230;
state_47230 = G__48712;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = function(state_47230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1.call(this,state_47230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___48686,jobs,results,process,async))
})();
var state__47007__auto__ = (function (){var statearr_47245 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47245[(6)] = c__47005__auto___48686);

return statearr_47245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___48686,jobs,results,process,async))
);


var c__47005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto__,jobs,results,process,async){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto__,jobs,results,process,async){
return (function (state_47283){
var state_val_47284 = (state_47283[(1)]);
if((state_val_47284 === (7))){
var inst_47279 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47285_48716 = state_47283__$1;
(statearr_47285_48716[(2)] = inst_47279);

(statearr_47285_48716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (20))){
var state_47283__$1 = state_47283;
var statearr_47286_48720 = state_47283__$1;
(statearr_47286_48720[(2)] = null);

(statearr_47286_48720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (1))){
var state_47283__$1 = state_47283;
var statearr_47287_48721 = state_47283__$1;
(statearr_47287_48721[(2)] = null);

(statearr_47287_48721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (4))){
var inst_47248 = (state_47283[(7)]);
var inst_47248__$1 = (state_47283[(2)]);
var inst_47249 = (inst_47248__$1 == null);
var state_47283__$1 = (function (){var statearr_47288 = state_47283;
(statearr_47288[(7)] = inst_47248__$1);

return statearr_47288;
})();
if(cljs.core.truth_(inst_47249)){
var statearr_47289_48726 = state_47283__$1;
(statearr_47289_48726[(1)] = (5));

} else {
var statearr_47290_48730 = state_47283__$1;
(statearr_47290_48730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (15))){
var inst_47261 = (state_47283[(8)]);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47283__$1,(18),to,inst_47261);
} else {
if((state_val_47284 === (21))){
var inst_47274 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47291_48731 = state_47283__$1;
(statearr_47291_48731[(2)] = inst_47274);

(statearr_47291_48731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (13))){
var inst_47276 = (state_47283[(2)]);
var state_47283__$1 = (function (){var statearr_47292 = state_47283;
(statearr_47292[(9)] = inst_47276);

return statearr_47292;
})();
var statearr_47293_48735 = state_47283__$1;
(statearr_47293_48735[(2)] = null);

(statearr_47293_48735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (6))){
var inst_47248 = (state_47283[(7)]);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47283__$1,(11),inst_47248);
} else {
if((state_val_47284 === (17))){
var inst_47269 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
if(cljs.core.truth_(inst_47269)){
var statearr_47294_48739 = state_47283__$1;
(statearr_47294_48739[(1)] = (19));

} else {
var statearr_47295_48740 = state_47283__$1;
(statearr_47295_48740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (3))){
var inst_47281 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47283__$1,inst_47281);
} else {
if((state_val_47284 === (12))){
var inst_47258 = (state_47283[(10)]);
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47283__$1,(14),inst_47258);
} else {
if((state_val_47284 === (2))){
var state_47283__$1 = state_47283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47283__$1,(4),results);
} else {
if((state_val_47284 === (19))){
var state_47283__$1 = state_47283;
var statearr_47296_48751 = state_47283__$1;
(statearr_47296_48751[(2)] = null);

(statearr_47296_48751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (11))){
var inst_47258 = (state_47283[(2)]);
var state_47283__$1 = (function (){var statearr_47297 = state_47283;
(statearr_47297[(10)] = inst_47258);

return statearr_47297;
})();
var statearr_47298_48755 = state_47283__$1;
(statearr_47298_48755[(2)] = null);

(statearr_47298_48755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (9))){
var state_47283__$1 = state_47283;
var statearr_47299_48756 = state_47283__$1;
(statearr_47299_48756[(2)] = null);

(statearr_47299_48756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (5))){
var state_47283__$1 = state_47283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47300_48763 = state_47283__$1;
(statearr_47300_48763[(1)] = (8));

} else {
var statearr_47301_48764 = state_47283__$1;
(statearr_47301_48764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (14))){
var inst_47261 = (state_47283[(8)]);
var inst_47263 = (state_47283[(11)]);
var inst_47261__$1 = (state_47283[(2)]);
var inst_47262 = (inst_47261__$1 == null);
var inst_47263__$1 = cljs.core.not(inst_47262);
var state_47283__$1 = (function (){var statearr_47302 = state_47283;
(statearr_47302[(8)] = inst_47261__$1);

(statearr_47302[(11)] = inst_47263__$1);

return statearr_47302;
})();
if(inst_47263__$1){
var statearr_47303_48771 = state_47283__$1;
(statearr_47303_48771[(1)] = (15));

} else {
var statearr_47304_48772 = state_47283__$1;
(statearr_47304_48772[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (16))){
var inst_47263 = (state_47283[(11)]);
var state_47283__$1 = state_47283;
var statearr_47305_48779 = state_47283__$1;
(statearr_47305_48779[(2)] = inst_47263);

(statearr_47305_48779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (10))){
var inst_47255 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47306_48780 = state_47283__$1;
(statearr_47306_48780[(2)] = inst_47255);

(statearr_47306_48780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (18))){
var inst_47266 = (state_47283[(2)]);
var state_47283__$1 = state_47283;
var statearr_47307_48782 = state_47283__$1;
(statearr_47307_48782[(2)] = inst_47266);

(statearr_47307_48782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47284 === (8))){
var inst_47252 = cljs.core.async.close_BANG_(to);
var state_47283__$1 = state_47283;
var statearr_47308_48783 = state_47283__$1;
(statearr_47308_48783[(2)] = inst_47252);

(statearr_47308_48783[(1)] = (10));


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
});})(c__47005__auto__,jobs,results,process,async))
;
return ((function (switch__46939__auto__,c__47005__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_47309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__);

(statearr_47309[(1)] = (1));

return statearr_47309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1 = (function (state_47283){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47283);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47310){if((e47310 instanceof Object)){
var ex__46943__auto__ = e47310;
var statearr_47311_48784 = state_47283;
(statearr_47311_48784[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48785 = state_47283;
state_47283 = G__48785;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__ = function(state_47283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1.call(this,state_47283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto__,jobs,results,process,async))
})();
var state__47007__auto__ = (function (){var statearr_47312 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47312[(6)] = c__47005__auto__);

return statearr_47312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto__,jobs,results,process,async))
);

return c__47005__auto__;
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
var G__47314 = arguments.length;
switch (G__47314) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__47316 = arguments.length;
switch (G__47316) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__47318 = arguments.length;
switch (G__47318) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47005__auto___48791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___48791,tc,fc){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___48791,tc,fc){
return (function (state_47344){
var state_val_47345 = (state_47344[(1)]);
if((state_val_47345 === (7))){
var inst_47340 = (state_47344[(2)]);
var state_47344__$1 = state_47344;
var statearr_47346_48794 = state_47344__$1;
(statearr_47346_48794[(2)] = inst_47340);

(statearr_47346_48794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (1))){
var state_47344__$1 = state_47344;
var statearr_47347_48796 = state_47344__$1;
(statearr_47347_48796[(2)] = null);

(statearr_47347_48796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (4))){
var inst_47321 = (state_47344[(7)]);
var inst_47321__$1 = (state_47344[(2)]);
var inst_47322 = (inst_47321__$1 == null);
var state_47344__$1 = (function (){var statearr_47348 = state_47344;
(statearr_47348[(7)] = inst_47321__$1);

return statearr_47348;
})();
if(cljs.core.truth_(inst_47322)){
var statearr_47349_48801 = state_47344__$1;
(statearr_47349_48801[(1)] = (5));

} else {
var statearr_47350_48803 = state_47344__$1;
(statearr_47350_48803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (13))){
var state_47344__$1 = state_47344;
var statearr_47351_48804 = state_47344__$1;
(statearr_47351_48804[(2)] = null);

(statearr_47351_48804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (6))){
var inst_47321 = (state_47344[(7)]);
var inst_47327 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47321) : p.call(null,inst_47321));
var state_47344__$1 = state_47344;
if(cljs.core.truth_(inst_47327)){
var statearr_47352_48806 = state_47344__$1;
(statearr_47352_48806[(1)] = (9));

} else {
var statearr_47353_48807 = state_47344__$1;
(statearr_47353_48807[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (3))){
var inst_47342 = (state_47344[(2)]);
var state_47344__$1 = state_47344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47344__$1,inst_47342);
} else {
if((state_val_47345 === (12))){
var state_47344__$1 = state_47344;
var statearr_47354_48808 = state_47344__$1;
(statearr_47354_48808[(2)] = null);

(statearr_47354_48808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (2))){
var state_47344__$1 = state_47344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47344__$1,(4),ch);
} else {
if((state_val_47345 === (11))){
var inst_47321 = (state_47344[(7)]);
var inst_47331 = (state_47344[(2)]);
var state_47344__$1 = state_47344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47344__$1,(8),inst_47331,inst_47321);
} else {
if((state_val_47345 === (9))){
var state_47344__$1 = state_47344;
var statearr_47355_48809 = state_47344__$1;
(statearr_47355_48809[(2)] = tc);

(statearr_47355_48809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (5))){
var inst_47324 = cljs.core.async.close_BANG_(tc);
var inst_47325 = cljs.core.async.close_BANG_(fc);
var state_47344__$1 = (function (){var statearr_47356 = state_47344;
(statearr_47356[(8)] = inst_47324);

return statearr_47356;
})();
var statearr_47357_48810 = state_47344__$1;
(statearr_47357_48810[(2)] = inst_47325);

(statearr_47357_48810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (14))){
var inst_47338 = (state_47344[(2)]);
var state_47344__$1 = state_47344;
var statearr_47358_48811 = state_47344__$1;
(statearr_47358_48811[(2)] = inst_47338);

(statearr_47358_48811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (10))){
var state_47344__$1 = state_47344;
var statearr_47359_48812 = state_47344__$1;
(statearr_47359_48812[(2)] = fc);

(statearr_47359_48812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47345 === (8))){
var inst_47333 = (state_47344[(2)]);
var state_47344__$1 = state_47344;
if(cljs.core.truth_(inst_47333)){
var statearr_47360_48817 = state_47344__$1;
(statearr_47360_48817[(1)] = (12));

} else {
var statearr_47361_48818 = state_47344__$1;
(statearr_47361_48818[(1)] = (13));

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
});})(c__47005__auto___48791,tc,fc))
;
return ((function (switch__46939__auto__,c__47005__auto___48791,tc,fc){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_47362 = [null,null,null,null,null,null,null,null,null];
(statearr_47362[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_47362[(1)] = (1));

return statearr_47362;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_47344){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47344);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47363){if((e47363 instanceof Object)){
var ex__46943__auto__ = e47363;
var statearr_47364_48823 = state_47344;
(statearr_47364_48823[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48827 = state_47344;
state_47344 = G__48827;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_47344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_47344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___48791,tc,fc))
})();
var state__47007__auto__ = (function (){var statearr_47365 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47365[(6)] = c__47005__auto___48791);

return statearr_47365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___48791,tc,fc))
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
var c__47005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto__){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto__){
return (function (state_47386){
var state_val_47387 = (state_47386[(1)]);
if((state_val_47387 === (7))){
var inst_47382 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
var statearr_47388_48838 = state_47386__$1;
(statearr_47388_48838[(2)] = inst_47382);

(statearr_47388_48838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (1))){
var inst_47366 = init;
var state_47386__$1 = (function (){var statearr_47389 = state_47386;
(statearr_47389[(7)] = inst_47366);

return statearr_47389;
})();
var statearr_47390_48839 = state_47386__$1;
(statearr_47390_48839[(2)] = null);

(statearr_47390_48839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (4))){
var inst_47369 = (state_47386[(8)]);
var inst_47369__$1 = (state_47386[(2)]);
var inst_47370 = (inst_47369__$1 == null);
var state_47386__$1 = (function (){var statearr_47391 = state_47386;
(statearr_47391[(8)] = inst_47369__$1);

return statearr_47391;
})();
if(cljs.core.truth_(inst_47370)){
var statearr_47392_48840 = state_47386__$1;
(statearr_47392_48840[(1)] = (5));

} else {
var statearr_47393_48841 = state_47386__$1;
(statearr_47393_48841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (6))){
var inst_47369 = (state_47386[(8)]);
var inst_47366 = (state_47386[(7)]);
var inst_47373 = (state_47386[(9)]);
var inst_47373__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47366,inst_47369) : f.call(null,inst_47366,inst_47369));
var inst_47374 = cljs.core.reduced_QMARK_(inst_47373__$1);
var state_47386__$1 = (function (){var statearr_47394 = state_47386;
(statearr_47394[(9)] = inst_47373__$1);

return statearr_47394;
})();
if(inst_47374){
var statearr_47395_48842 = state_47386__$1;
(statearr_47395_48842[(1)] = (8));

} else {
var statearr_47396_48843 = state_47386__$1;
(statearr_47396_48843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (3))){
var inst_47384 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47386__$1,inst_47384);
} else {
if((state_val_47387 === (2))){
var state_47386__$1 = state_47386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47386__$1,(4),ch);
} else {
if((state_val_47387 === (9))){
var inst_47373 = (state_47386[(9)]);
var inst_47366 = inst_47373;
var state_47386__$1 = (function (){var statearr_47397 = state_47386;
(statearr_47397[(7)] = inst_47366);

return statearr_47397;
})();
var statearr_47398_48844 = state_47386__$1;
(statearr_47398_48844[(2)] = null);

(statearr_47398_48844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (5))){
var inst_47366 = (state_47386[(7)]);
var state_47386__$1 = state_47386;
var statearr_47399_48845 = state_47386__$1;
(statearr_47399_48845[(2)] = inst_47366);

(statearr_47399_48845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (10))){
var inst_47380 = (state_47386[(2)]);
var state_47386__$1 = state_47386;
var statearr_47400_48852 = state_47386__$1;
(statearr_47400_48852[(2)] = inst_47380);

(statearr_47400_48852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47387 === (8))){
var inst_47373 = (state_47386[(9)]);
var inst_47376 = cljs.core.deref(inst_47373);
var state_47386__$1 = state_47386;
var statearr_47401_48853 = state_47386__$1;
(statearr_47401_48853[(2)] = inst_47376);

(statearr_47401_48853[(1)] = (10));


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
});})(c__47005__auto__))
;
return ((function (switch__46939__auto__,c__47005__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46940__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46940__auto____0 = (function (){
var statearr_47402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47402[(0)] = cljs$core$async$reduce_$_state_machine__46940__auto__);

(statearr_47402[(1)] = (1));

return statearr_47402;
});
var cljs$core$async$reduce_$_state_machine__46940__auto____1 = (function (state_47386){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47386);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47403){if((e47403 instanceof Object)){
var ex__46943__auto__ = e47403;
var statearr_47404_48854 = state_47386;
(statearr_47404_48854[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48855 = state_47386;
state_47386 = G__48855;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46940__auto__ = function(state_47386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46940__auto____1.call(this,state_47386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46940__auto____0;
cljs$core$async$reduce_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46940__auto____1;
return cljs$core$async$reduce_$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto__))
})();
var state__47007__auto__ = (function (){var statearr_47405 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47405[(6)] = c__47005__auto__);

return statearr_47405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto__))
);

return c__47005__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto__,f__$1){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto__,f__$1){
return (function (state_47411){
var state_val_47412 = (state_47411[(1)]);
if((state_val_47412 === (1))){
var inst_47406 = cljs.core.async.reduce(f__$1,init,ch);
var state_47411__$1 = state_47411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47411__$1,(2),inst_47406);
} else {
if((state_val_47412 === (2))){
var inst_47408 = (state_47411[(2)]);
var inst_47409 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47408) : f__$1.call(null,inst_47408));
var state_47411__$1 = state_47411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47411__$1,inst_47409);
} else {
return null;
}
}
});})(c__47005__auto__,f__$1))
;
return ((function (switch__46939__auto__,c__47005__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46940__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46940__auto____0 = (function (){
var statearr_47413 = [null,null,null,null,null,null,null];
(statearr_47413[(0)] = cljs$core$async$transduce_$_state_machine__46940__auto__);

(statearr_47413[(1)] = (1));

return statearr_47413;
});
var cljs$core$async$transduce_$_state_machine__46940__auto____1 = (function (state_47411){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47411);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47414){if((e47414 instanceof Object)){
var ex__46943__auto__ = e47414;
var statearr_47415_48862 = state_47411;
(statearr_47415_48862[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48863 = state_47411;
state_47411 = G__48863;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46940__auto__ = function(state_47411){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46940__auto____1.call(this,state_47411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46940__auto____0;
cljs$core$async$transduce_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46940__auto____1;
return cljs$core$async$transduce_$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto__,f__$1))
})();
var state__47007__auto__ = (function (){var statearr_47416 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47416[(6)] = c__47005__auto__);

return statearr_47416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto__,f__$1))
);

return c__47005__auto__;
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
var G__47418 = arguments.length;
switch (G__47418) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto__){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto__){
return (function (state_47443){
var state_val_47444 = (state_47443[(1)]);
if((state_val_47444 === (7))){
var inst_47425 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
var statearr_47445_48865 = state_47443__$1;
(statearr_47445_48865[(2)] = inst_47425);

(statearr_47445_48865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (1))){
var inst_47419 = cljs.core.seq(coll);
var inst_47420 = inst_47419;
var state_47443__$1 = (function (){var statearr_47446 = state_47443;
(statearr_47446[(7)] = inst_47420);

return statearr_47446;
})();
var statearr_47447_48866 = state_47443__$1;
(statearr_47447_48866[(2)] = null);

(statearr_47447_48866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (4))){
var inst_47420 = (state_47443[(7)]);
var inst_47423 = cljs.core.first(inst_47420);
var state_47443__$1 = state_47443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47443__$1,(7),ch,inst_47423);
} else {
if((state_val_47444 === (13))){
var inst_47437 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
var statearr_47448_48873 = state_47443__$1;
(statearr_47448_48873[(2)] = inst_47437);

(statearr_47448_48873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (6))){
var inst_47428 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
if(cljs.core.truth_(inst_47428)){
var statearr_47449_48874 = state_47443__$1;
(statearr_47449_48874[(1)] = (8));

} else {
var statearr_47450_48875 = state_47443__$1;
(statearr_47450_48875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (3))){
var inst_47441 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47443__$1,inst_47441);
} else {
if((state_val_47444 === (12))){
var state_47443__$1 = state_47443;
var statearr_47451_48876 = state_47443__$1;
(statearr_47451_48876[(2)] = null);

(statearr_47451_48876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (2))){
var inst_47420 = (state_47443[(7)]);
var state_47443__$1 = state_47443;
if(cljs.core.truth_(inst_47420)){
var statearr_47452_48877 = state_47443__$1;
(statearr_47452_48877[(1)] = (4));

} else {
var statearr_47453_48878 = state_47443__$1;
(statearr_47453_48878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (11))){
var inst_47434 = cljs.core.async.close_BANG_(ch);
var state_47443__$1 = state_47443;
var statearr_47454_48879 = state_47443__$1;
(statearr_47454_48879[(2)] = inst_47434);

(statearr_47454_48879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (9))){
var state_47443__$1 = state_47443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47455_48880 = state_47443__$1;
(statearr_47455_48880[(1)] = (11));

} else {
var statearr_47456_48881 = state_47443__$1;
(statearr_47456_48881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (5))){
var inst_47420 = (state_47443[(7)]);
var state_47443__$1 = state_47443;
var statearr_47457_48882 = state_47443__$1;
(statearr_47457_48882[(2)] = inst_47420);

(statearr_47457_48882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (10))){
var inst_47439 = (state_47443[(2)]);
var state_47443__$1 = state_47443;
var statearr_47458_48883 = state_47443__$1;
(statearr_47458_48883[(2)] = inst_47439);

(statearr_47458_48883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47444 === (8))){
var inst_47420 = (state_47443[(7)]);
var inst_47430 = cljs.core.next(inst_47420);
var inst_47420__$1 = inst_47430;
var state_47443__$1 = (function (){var statearr_47459 = state_47443;
(statearr_47459[(7)] = inst_47420__$1);

return statearr_47459;
})();
var statearr_47460_48884 = state_47443__$1;
(statearr_47460_48884[(2)] = null);

(statearr_47460_48884[(1)] = (2));


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
});})(c__47005__auto__))
;
return ((function (switch__46939__auto__,c__47005__auto__){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_47461 = [null,null,null,null,null,null,null,null];
(statearr_47461[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_47461[(1)] = (1));

return statearr_47461;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_47443){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47443);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47462){if((e47462 instanceof Object)){
var ex__46943__auto__ = e47462;
var statearr_47463_48885 = state_47443;
(statearr_47463_48885[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48886 = state_47443;
state_47443 = G__48886;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_47443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_47443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto__))
})();
var state__47007__auto__ = (function (){var statearr_47464 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47464[(6)] = c__47005__auto__);

return statearr_47464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto__))
);

return c__47005__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47465 = (function (ch,cs,meta47466){
this.ch = ch;
this.cs = cs;
this.meta47466 = meta47466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47467,meta47466__$1){
var self__ = this;
var _47467__$1 = this;
return (new cljs.core.async.t_cljs$core$async47465(self__.ch,self__.cs,meta47466__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47467){
var self__ = this;
var _47467__$1 = this;
return self__.meta47466;
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47466","meta47466",-1784198905,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47465";

cljs.core.async.t_cljs$core$async47465.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47465");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47465.
 */
cljs.core.async.__GT_t_cljs$core$async47465 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47465(ch__$1,cs__$1,meta47466){
return (new cljs.core.async.t_cljs$core$async47465(ch__$1,cs__$1,meta47466));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47465(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47005__auto___48899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___48899,cs,m,dchan,dctr,done){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___48899,cs,m,dchan,dctr,done){
return (function (state_47602){
var state_val_47603 = (state_47602[(1)]);
if((state_val_47603 === (7))){
var inst_47598 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47604_48900 = state_47602__$1;
(statearr_47604_48900[(2)] = inst_47598);

(statearr_47604_48900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (20))){
var inst_47501 = (state_47602[(7)]);
var inst_47513 = cljs.core.first(inst_47501);
var inst_47514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47513,(0),null);
var inst_47515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47513,(1),null);
var state_47602__$1 = (function (){var statearr_47605 = state_47602;
(statearr_47605[(8)] = inst_47514);

return statearr_47605;
})();
if(cljs.core.truth_(inst_47515)){
var statearr_47606_48903 = state_47602__$1;
(statearr_47606_48903[(1)] = (22));

} else {
var statearr_47607_48904 = state_47602__$1;
(statearr_47607_48904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (27))){
var inst_47545 = (state_47602[(9)]);
var inst_47470 = (state_47602[(10)]);
var inst_47543 = (state_47602[(11)]);
var inst_47550 = (state_47602[(12)]);
var inst_47550__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47543,inst_47545);
var inst_47551 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47550__$1,inst_47470,done);
var state_47602__$1 = (function (){var statearr_47608 = state_47602;
(statearr_47608[(12)] = inst_47550__$1);

return statearr_47608;
})();
if(cljs.core.truth_(inst_47551)){
var statearr_47609_48905 = state_47602__$1;
(statearr_47609_48905[(1)] = (30));

} else {
var statearr_47610_48906 = state_47602__$1;
(statearr_47610_48906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (1))){
var state_47602__$1 = state_47602;
var statearr_47611_48907 = state_47602__$1;
(statearr_47611_48907[(2)] = null);

(statearr_47611_48907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (24))){
var inst_47501 = (state_47602[(7)]);
var inst_47520 = (state_47602[(2)]);
var inst_47521 = cljs.core.next(inst_47501);
var inst_47479 = inst_47521;
var inst_47480 = null;
var inst_47481 = (0);
var inst_47482 = (0);
var state_47602__$1 = (function (){var statearr_47612 = state_47602;
(statearr_47612[(13)] = inst_47480);

(statearr_47612[(14)] = inst_47479);

(statearr_47612[(15)] = inst_47520);

(statearr_47612[(16)] = inst_47481);

(statearr_47612[(17)] = inst_47482);

return statearr_47612;
})();
var statearr_47613_48908 = state_47602__$1;
(statearr_47613_48908[(2)] = null);

(statearr_47613_48908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (39))){
var state_47602__$1 = state_47602;
var statearr_47617_48909 = state_47602__$1;
(statearr_47617_48909[(2)] = null);

(statearr_47617_48909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (4))){
var inst_47470 = (state_47602[(10)]);
var inst_47470__$1 = (state_47602[(2)]);
var inst_47471 = (inst_47470__$1 == null);
var state_47602__$1 = (function (){var statearr_47618 = state_47602;
(statearr_47618[(10)] = inst_47470__$1);

return statearr_47618;
})();
if(cljs.core.truth_(inst_47471)){
var statearr_47619_48910 = state_47602__$1;
(statearr_47619_48910[(1)] = (5));

} else {
var statearr_47620_48911 = state_47602__$1;
(statearr_47620_48911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (15))){
var inst_47480 = (state_47602[(13)]);
var inst_47479 = (state_47602[(14)]);
var inst_47481 = (state_47602[(16)]);
var inst_47482 = (state_47602[(17)]);
var inst_47497 = (state_47602[(2)]);
var inst_47498 = (inst_47482 + (1));
var tmp47614 = inst_47480;
var tmp47615 = inst_47479;
var tmp47616 = inst_47481;
var inst_47479__$1 = tmp47615;
var inst_47480__$1 = tmp47614;
var inst_47481__$1 = tmp47616;
var inst_47482__$1 = inst_47498;
var state_47602__$1 = (function (){var statearr_47621 = state_47602;
(statearr_47621[(13)] = inst_47480__$1);

(statearr_47621[(14)] = inst_47479__$1);

(statearr_47621[(18)] = inst_47497);

(statearr_47621[(16)] = inst_47481__$1);

(statearr_47621[(17)] = inst_47482__$1);

return statearr_47621;
})();
var statearr_47622_48913 = state_47602__$1;
(statearr_47622_48913[(2)] = null);

(statearr_47622_48913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (21))){
var inst_47524 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47626_48914 = state_47602__$1;
(statearr_47626_48914[(2)] = inst_47524);

(statearr_47626_48914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (31))){
var inst_47550 = (state_47602[(12)]);
var inst_47554 = done(null);
var inst_47555 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47550);
var state_47602__$1 = (function (){var statearr_47627 = state_47602;
(statearr_47627[(19)] = inst_47554);

return statearr_47627;
})();
var statearr_47628_48919 = state_47602__$1;
(statearr_47628_48919[(2)] = inst_47555);

(statearr_47628_48919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (32))){
var inst_47545 = (state_47602[(9)]);
var inst_47542 = (state_47602[(20)]);
var inst_47544 = (state_47602[(21)]);
var inst_47543 = (state_47602[(11)]);
var inst_47557 = (state_47602[(2)]);
var inst_47558 = (inst_47545 + (1));
var tmp47623 = inst_47542;
var tmp47624 = inst_47544;
var tmp47625 = inst_47543;
var inst_47542__$1 = tmp47623;
var inst_47543__$1 = tmp47625;
var inst_47544__$1 = tmp47624;
var inst_47545__$1 = inst_47558;
var state_47602__$1 = (function (){var statearr_47629 = state_47602;
(statearr_47629[(9)] = inst_47545__$1);

(statearr_47629[(20)] = inst_47542__$1);

(statearr_47629[(21)] = inst_47544__$1);

(statearr_47629[(22)] = inst_47557);

(statearr_47629[(11)] = inst_47543__$1);

return statearr_47629;
})();
var statearr_47630_48920 = state_47602__$1;
(statearr_47630_48920[(2)] = null);

(statearr_47630_48920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (40))){
var inst_47570 = (state_47602[(23)]);
var inst_47574 = done(null);
var inst_47575 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47570);
var state_47602__$1 = (function (){var statearr_47631 = state_47602;
(statearr_47631[(24)] = inst_47574);

return statearr_47631;
})();
var statearr_47632_48921 = state_47602__$1;
(statearr_47632_48921[(2)] = inst_47575);

(statearr_47632_48921[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (33))){
var inst_47561 = (state_47602[(25)]);
var inst_47563 = cljs.core.chunked_seq_QMARK_(inst_47561);
var state_47602__$1 = state_47602;
if(inst_47563){
var statearr_47633_48922 = state_47602__$1;
(statearr_47633_48922[(1)] = (36));

} else {
var statearr_47634_48923 = state_47602__$1;
(statearr_47634_48923[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (13))){
var inst_47491 = (state_47602[(26)]);
var inst_47494 = cljs.core.async.close_BANG_(inst_47491);
var state_47602__$1 = state_47602;
var statearr_47635_48924 = state_47602__$1;
(statearr_47635_48924[(2)] = inst_47494);

(statearr_47635_48924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (22))){
var inst_47514 = (state_47602[(8)]);
var inst_47517 = cljs.core.async.close_BANG_(inst_47514);
var state_47602__$1 = state_47602;
var statearr_47636_48925 = state_47602__$1;
(statearr_47636_48925[(2)] = inst_47517);

(statearr_47636_48925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (36))){
var inst_47561 = (state_47602[(25)]);
var inst_47565 = cljs.core.chunk_first(inst_47561);
var inst_47566 = cljs.core.chunk_rest(inst_47561);
var inst_47567 = cljs.core.count(inst_47565);
var inst_47542 = inst_47566;
var inst_47543 = inst_47565;
var inst_47544 = inst_47567;
var inst_47545 = (0);
var state_47602__$1 = (function (){var statearr_47637 = state_47602;
(statearr_47637[(9)] = inst_47545);

(statearr_47637[(20)] = inst_47542);

(statearr_47637[(21)] = inst_47544);

(statearr_47637[(11)] = inst_47543);

return statearr_47637;
})();
var statearr_47638_48933 = state_47602__$1;
(statearr_47638_48933[(2)] = null);

(statearr_47638_48933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (41))){
var inst_47561 = (state_47602[(25)]);
var inst_47577 = (state_47602[(2)]);
var inst_47578 = cljs.core.next(inst_47561);
var inst_47542 = inst_47578;
var inst_47543 = null;
var inst_47544 = (0);
var inst_47545 = (0);
var state_47602__$1 = (function (){var statearr_47639 = state_47602;
(statearr_47639[(9)] = inst_47545);

(statearr_47639[(20)] = inst_47542);

(statearr_47639[(21)] = inst_47544);

(statearr_47639[(11)] = inst_47543);

(statearr_47639[(27)] = inst_47577);

return statearr_47639;
})();
var statearr_47640_48937 = state_47602__$1;
(statearr_47640_48937[(2)] = null);

(statearr_47640_48937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (43))){
var state_47602__$1 = state_47602;
var statearr_47641_48941 = state_47602__$1;
(statearr_47641_48941[(2)] = null);

(statearr_47641_48941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (29))){
var inst_47586 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47642_48942 = state_47602__$1;
(statearr_47642_48942[(2)] = inst_47586);

(statearr_47642_48942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (44))){
var inst_47595 = (state_47602[(2)]);
var state_47602__$1 = (function (){var statearr_47643 = state_47602;
(statearr_47643[(28)] = inst_47595);

return statearr_47643;
})();
var statearr_47644_48946 = state_47602__$1;
(statearr_47644_48946[(2)] = null);

(statearr_47644_48946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (6))){
var inst_47534 = (state_47602[(29)]);
var inst_47533 = cljs.core.deref(cs);
var inst_47534__$1 = cljs.core.keys(inst_47533);
var inst_47535 = cljs.core.count(inst_47534__$1);
var inst_47536 = cljs.core.reset_BANG_(dctr,inst_47535);
var inst_47541 = cljs.core.seq(inst_47534__$1);
var inst_47542 = inst_47541;
var inst_47543 = null;
var inst_47544 = (0);
var inst_47545 = (0);
var state_47602__$1 = (function (){var statearr_47645 = state_47602;
(statearr_47645[(9)] = inst_47545);

(statearr_47645[(20)] = inst_47542);

(statearr_47645[(21)] = inst_47544);

(statearr_47645[(30)] = inst_47536);

(statearr_47645[(11)] = inst_47543);

(statearr_47645[(29)] = inst_47534__$1);

return statearr_47645;
})();
var statearr_47646_48951 = state_47602__$1;
(statearr_47646_48951[(2)] = null);

(statearr_47646_48951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (28))){
var inst_47542 = (state_47602[(20)]);
var inst_47561 = (state_47602[(25)]);
var inst_47561__$1 = cljs.core.seq(inst_47542);
var state_47602__$1 = (function (){var statearr_47647 = state_47602;
(statearr_47647[(25)] = inst_47561__$1);

return statearr_47647;
})();
if(inst_47561__$1){
var statearr_47648_48952 = state_47602__$1;
(statearr_47648_48952[(1)] = (33));

} else {
var statearr_47649_48953 = state_47602__$1;
(statearr_47649_48953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (25))){
var inst_47545 = (state_47602[(9)]);
var inst_47544 = (state_47602[(21)]);
var inst_47547 = (inst_47545 < inst_47544);
var inst_47548 = inst_47547;
var state_47602__$1 = state_47602;
if(cljs.core.truth_(inst_47548)){
var statearr_47650_48954 = state_47602__$1;
(statearr_47650_48954[(1)] = (27));

} else {
var statearr_47651_48955 = state_47602__$1;
(statearr_47651_48955[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (34))){
var state_47602__$1 = state_47602;
var statearr_47652_48956 = state_47602__$1;
(statearr_47652_48956[(2)] = null);

(statearr_47652_48956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (17))){
var state_47602__$1 = state_47602;
var statearr_47653_48957 = state_47602__$1;
(statearr_47653_48957[(2)] = null);

(statearr_47653_48957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (3))){
var inst_47600 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47602__$1,inst_47600);
} else {
if((state_val_47603 === (12))){
var inst_47529 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47654_48960 = state_47602__$1;
(statearr_47654_48960[(2)] = inst_47529);

(statearr_47654_48960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (2))){
var state_47602__$1 = state_47602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47602__$1,(4),ch);
} else {
if((state_val_47603 === (23))){
var state_47602__$1 = state_47602;
var statearr_47655_48963 = state_47602__$1;
(statearr_47655_48963[(2)] = null);

(statearr_47655_48963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (35))){
var inst_47584 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47656_48964 = state_47602__$1;
(statearr_47656_48964[(2)] = inst_47584);

(statearr_47656_48964[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (19))){
var inst_47501 = (state_47602[(7)]);
var inst_47505 = cljs.core.chunk_first(inst_47501);
var inst_47506 = cljs.core.chunk_rest(inst_47501);
var inst_47507 = cljs.core.count(inst_47505);
var inst_47479 = inst_47506;
var inst_47480 = inst_47505;
var inst_47481 = inst_47507;
var inst_47482 = (0);
var state_47602__$1 = (function (){var statearr_47657 = state_47602;
(statearr_47657[(13)] = inst_47480);

(statearr_47657[(14)] = inst_47479);

(statearr_47657[(16)] = inst_47481);

(statearr_47657[(17)] = inst_47482);

return statearr_47657;
})();
var statearr_47658_48970 = state_47602__$1;
(statearr_47658_48970[(2)] = null);

(statearr_47658_48970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (11))){
var inst_47479 = (state_47602[(14)]);
var inst_47501 = (state_47602[(7)]);
var inst_47501__$1 = cljs.core.seq(inst_47479);
var state_47602__$1 = (function (){var statearr_47659 = state_47602;
(statearr_47659[(7)] = inst_47501__$1);

return statearr_47659;
})();
if(inst_47501__$1){
var statearr_47660_48972 = state_47602__$1;
(statearr_47660_48972[(1)] = (16));

} else {
var statearr_47661_48973 = state_47602__$1;
(statearr_47661_48973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (9))){
var inst_47531 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47662_48976 = state_47602__$1;
(statearr_47662_48976[(2)] = inst_47531);

(statearr_47662_48976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (5))){
var inst_47477 = cljs.core.deref(cs);
var inst_47478 = cljs.core.seq(inst_47477);
var inst_47479 = inst_47478;
var inst_47480 = null;
var inst_47481 = (0);
var inst_47482 = (0);
var state_47602__$1 = (function (){var statearr_47663 = state_47602;
(statearr_47663[(13)] = inst_47480);

(statearr_47663[(14)] = inst_47479);

(statearr_47663[(16)] = inst_47481);

(statearr_47663[(17)] = inst_47482);

return statearr_47663;
})();
var statearr_47664_48977 = state_47602__$1;
(statearr_47664_48977[(2)] = null);

(statearr_47664_48977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (14))){
var state_47602__$1 = state_47602;
var statearr_47665_48978 = state_47602__$1;
(statearr_47665_48978[(2)] = null);

(statearr_47665_48978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (45))){
var inst_47592 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47666_48979 = state_47602__$1;
(statearr_47666_48979[(2)] = inst_47592);

(statearr_47666_48979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (26))){
var inst_47534 = (state_47602[(29)]);
var inst_47588 = (state_47602[(2)]);
var inst_47589 = cljs.core.seq(inst_47534);
var state_47602__$1 = (function (){var statearr_47667 = state_47602;
(statearr_47667[(31)] = inst_47588);

return statearr_47667;
})();
if(inst_47589){
var statearr_47668_48980 = state_47602__$1;
(statearr_47668_48980[(1)] = (42));

} else {
var statearr_47669_48981 = state_47602__$1;
(statearr_47669_48981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (16))){
var inst_47501 = (state_47602[(7)]);
var inst_47503 = cljs.core.chunked_seq_QMARK_(inst_47501);
var state_47602__$1 = state_47602;
if(inst_47503){
var statearr_47670_48986 = state_47602__$1;
(statearr_47670_48986[(1)] = (19));

} else {
var statearr_47671_48987 = state_47602__$1;
(statearr_47671_48987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (38))){
var inst_47581 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47672_48988 = state_47602__$1;
(statearr_47672_48988[(2)] = inst_47581);

(statearr_47672_48988[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (30))){
var state_47602__$1 = state_47602;
var statearr_47673_48989 = state_47602__$1;
(statearr_47673_48989[(2)] = null);

(statearr_47673_48989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (10))){
var inst_47480 = (state_47602[(13)]);
var inst_47482 = (state_47602[(17)]);
var inst_47490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47480,inst_47482);
var inst_47491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47490,(0),null);
var inst_47492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47490,(1),null);
var state_47602__$1 = (function (){var statearr_47674 = state_47602;
(statearr_47674[(26)] = inst_47491);

return statearr_47674;
})();
if(cljs.core.truth_(inst_47492)){
var statearr_47675_48994 = state_47602__$1;
(statearr_47675_48994[(1)] = (13));

} else {
var statearr_47676_48995 = state_47602__$1;
(statearr_47676_48995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (18))){
var inst_47527 = (state_47602[(2)]);
var state_47602__$1 = state_47602;
var statearr_47677_48997 = state_47602__$1;
(statearr_47677_48997[(2)] = inst_47527);

(statearr_47677_48997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (42))){
var state_47602__$1 = state_47602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47602__$1,(45),dchan);
} else {
if((state_val_47603 === (37))){
var inst_47470 = (state_47602[(10)]);
var inst_47570 = (state_47602[(23)]);
var inst_47561 = (state_47602[(25)]);
var inst_47570__$1 = cljs.core.first(inst_47561);
var inst_47571 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47570__$1,inst_47470,done);
var state_47602__$1 = (function (){var statearr_47678 = state_47602;
(statearr_47678[(23)] = inst_47570__$1);

return statearr_47678;
})();
if(cljs.core.truth_(inst_47571)){
var statearr_47679_48998 = state_47602__$1;
(statearr_47679_48998[(1)] = (39));

} else {
var statearr_47680_48999 = state_47602__$1;
(statearr_47680_48999[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47603 === (8))){
var inst_47481 = (state_47602[(16)]);
var inst_47482 = (state_47602[(17)]);
var inst_47484 = (inst_47482 < inst_47481);
var inst_47485 = inst_47484;
var state_47602__$1 = state_47602;
if(cljs.core.truth_(inst_47485)){
var statearr_47681_49000 = state_47602__$1;
(statearr_47681_49000[(1)] = (10));

} else {
var statearr_47682_49001 = state_47602__$1;
(statearr_47682_49001[(1)] = (11));

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
});})(c__47005__auto___48899,cs,m,dchan,dctr,done))
;
return ((function (switch__46939__auto__,c__47005__auto___48899,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46940__auto__ = null;
var cljs$core$async$mult_$_state_machine__46940__auto____0 = (function (){
var statearr_47683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47683[(0)] = cljs$core$async$mult_$_state_machine__46940__auto__);

(statearr_47683[(1)] = (1));

return statearr_47683;
});
var cljs$core$async$mult_$_state_machine__46940__auto____1 = (function (state_47602){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47602);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47684){if((e47684 instanceof Object)){
var ex__46943__auto__ = e47684;
var statearr_47685_49007 = state_47602;
(statearr_47685_49007[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49008 = state_47602;
state_47602 = G__49008;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46940__auto__ = function(state_47602){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46940__auto____1.call(this,state_47602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46940__auto____0;
cljs$core$async$mult_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46940__auto____1;
return cljs$core$async$mult_$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___48899,cs,m,dchan,dctr,done))
})();
var state__47007__auto__ = (function (){var statearr_47686 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47686[(6)] = c__47005__auto___48899);

return statearr_47686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___48899,cs,m,dchan,dctr,done))
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
var G__47688 = arguments.length;
switch (G__47688) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49016 = arguments.length;
var i__4731__auto___49017 = (0);
while(true){
if((i__4731__auto___49017 < len__4730__auto___49016)){
args__4736__auto__.push((arguments[i__4731__auto___49017]));

var G__49018 = (i__4731__auto___49017 + (1));
i__4731__auto___49017 = G__49018;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47693){
var map__47694 = p__47693;
var map__47694__$1 = (((((!((map__47694 == null))))?(((((map__47694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47694):map__47694);
var opts = map__47694__$1;
var statearr_47696_49019 = state;
(statearr_47696_49019[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__47694,map__47694__$1,opts){
return (function (val){
var statearr_47697_49022 = state;
(statearr_47697_49022[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__47694,map__47694__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47698_49023 = state;
(statearr_47698_49023[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47689){
var G__47690 = cljs.core.first(seq47689);
var seq47689__$1 = cljs.core.next(seq47689);
var G__47691 = cljs.core.first(seq47689__$1);
var seq47689__$2 = cljs.core.next(seq47689__$1);
var G__47692 = cljs.core.first(seq47689__$2);
var seq47689__$3 = cljs.core.next(seq47689__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47690,G__47691,G__47692,seq47689__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47699 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47700){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47700 = meta47700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47701,meta47700__$1){
var self__ = this;
var _47701__$1 = this;
return (new cljs.core.async.t_cljs$core$async47699(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47700__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47701){
var self__ = this;
var _47701__$1 = this;
return self__.meta47700;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47700","meta47700",-2112675869,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47699";

cljs.core.async.t_cljs$core$async47699.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47699");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47699.
 */
cljs.core.async.__GT_t_cljs$core$async47699 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47699(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47700){
return (new cljs.core.async.t_cljs$core$async47699(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47700));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47699(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47005__auto___49038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47803){
var state_val_47804 = (state_47803[(1)]);
if((state_val_47804 === (7))){
var inst_47718 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47805_49039 = state_47803__$1;
(statearr_47805_49039[(2)] = inst_47718);

(statearr_47805_49039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (20))){
var inst_47730 = (state_47803[(7)]);
var state_47803__$1 = state_47803;
var statearr_47806_49040 = state_47803__$1;
(statearr_47806_49040[(2)] = inst_47730);

(statearr_47806_49040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (27))){
var state_47803__$1 = state_47803;
var statearr_47807_49041 = state_47803__$1;
(statearr_47807_49041[(2)] = null);

(statearr_47807_49041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (1))){
var inst_47705 = (state_47803[(8)]);
var inst_47705__$1 = calc_state();
var inst_47707 = (inst_47705__$1 == null);
var inst_47708 = cljs.core.not(inst_47707);
var state_47803__$1 = (function (){var statearr_47808 = state_47803;
(statearr_47808[(8)] = inst_47705__$1);

return statearr_47808;
})();
if(inst_47708){
var statearr_47809_49042 = state_47803__$1;
(statearr_47809_49042[(1)] = (2));

} else {
var statearr_47810_49043 = state_47803__$1;
(statearr_47810_49043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (24))){
var inst_47754 = (state_47803[(9)]);
var inst_47763 = (state_47803[(10)]);
var inst_47777 = (state_47803[(11)]);
var inst_47777__$1 = (inst_47754.cljs$core$IFn$_invoke$arity$1 ? inst_47754.cljs$core$IFn$_invoke$arity$1(inst_47763) : inst_47754.call(null,inst_47763));
var state_47803__$1 = (function (){var statearr_47811 = state_47803;
(statearr_47811[(11)] = inst_47777__$1);

return statearr_47811;
})();
if(cljs.core.truth_(inst_47777__$1)){
var statearr_47812_49044 = state_47803__$1;
(statearr_47812_49044[(1)] = (29));

} else {
var statearr_47813_49045 = state_47803__$1;
(statearr_47813_49045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (4))){
var inst_47721 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47721)){
var statearr_47814_49047 = state_47803__$1;
(statearr_47814_49047[(1)] = (8));

} else {
var statearr_47815_49048 = state_47803__$1;
(statearr_47815_49048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (15))){
var inst_47748 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47748)){
var statearr_47816_49049 = state_47803__$1;
(statearr_47816_49049[(1)] = (19));

} else {
var statearr_47817_49050 = state_47803__$1;
(statearr_47817_49050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (21))){
var inst_47753 = (state_47803[(12)]);
var inst_47753__$1 = (state_47803[(2)]);
var inst_47754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47803__$1 = (function (){var statearr_47818 = state_47803;
(statearr_47818[(9)] = inst_47754);

(statearr_47818[(13)] = inst_47755);

(statearr_47818[(12)] = inst_47753__$1);

return statearr_47818;
})();
return cljs.core.async.ioc_alts_BANG_(state_47803__$1,(22),inst_47756);
} else {
if((state_val_47804 === (31))){
var inst_47785 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47785)){
var statearr_47819_49051 = state_47803__$1;
(statearr_47819_49051[(1)] = (32));

} else {
var statearr_47820_49052 = state_47803__$1;
(statearr_47820_49052[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (32))){
var inst_47762 = (state_47803[(14)]);
var state_47803__$1 = state_47803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47803__$1,(35),out,inst_47762);
} else {
if((state_val_47804 === (33))){
var inst_47753 = (state_47803[(12)]);
var inst_47730 = inst_47753;
var state_47803__$1 = (function (){var statearr_47821 = state_47803;
(statearr_47821[(7)] = inst_47730);

return statearr_47821;
})();
var statearr_47822_49053 = state_47803__$1;
(statearr_47822_49053[(2)] = null);

(statearr_47822_49053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (13))){
var inst_47730 = (state_47803[(7)]);
var inst_47737 = inst_47730.cljs$lang$protocol_mask$partition0$;
var inst_47738 = (inst_47737 & (64));
var inst_47739 = inst_47730.cljs$core$ISeq$;
var inst_47740 = (cljs.core.PROTOCOL_SENTINEL === inst_47739);
var inst_47741 = ((inst_47738) || (inst_47740));
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47741)){
var statearr_47823_49061 = state_47803__$1;
(statearr_47823_49061[(1)] = (16));

} else {
var statearr_47824_49062 = state_47803__$1;
(statearr_47824_49062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (22))){
var inst_47763 = (state_47803[(10)]);
var inst_47762 = (state_47803[(14)]);
var inst_47761 = (state_47803[(2)]);
var inst_47762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47761,(0),null);
var inst_47763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47761,(1),null);
var inst_47764 = (inst_47762__$1 == null);
var inst_47765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47763__$1,change);
var inst_47766 = ((inst_47764) || (inst_47765));
var state_47803__$1 = (function (){var statearr_47825 = state_47803;
(statearr_47825[(10)] = inst_47763__$1);

(statearr_47825[(14)] = inst_47762__$1);

return statearr_47825;
})();
if(cljs.core.truth_(inst_47766)){
var statearr_47826_49063 = state_47803__$1;
(statearr_47826_49063[(1)] = (23));

} else {
var statearr_47827_49064 = state_47803__$1;
(statearr_47827_49064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (36))){
var inst_47753 = (state_47803[(12)]);
var inst_47730 = inst_47753;
var state_47803__$1 = (function (){var statearr_47828 = state_47803;
(statearr_47828[(7)] = inst_47730);

return statearr_47828;
})();
var statearr_47829_49065 = state_47803__$1;
(statearr_47829_49065[(2)] = null);

(statearr_47829_49065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (29))){
var inst_47777 = (state_47803[(11)]);
var state_47803__$1 = state_47803;
var statearr_47830_49067 = state_47803__$1;
(statearr_47830_49067[(2)] = inst_47777);

(statearr_47830_49067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (6))){
var state_47803__$1 = state_47803;
var statearr_47831_49068 = state_47803__$1;
(statearr_47831_49068[(2)] = false);

(statearr_47831_49068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (28))){
var inst_47773 = (state_47803[(2)]);
var inst_47774 = calc_state();
var inst_47730 = inst_47774;
var state_47803__$1 = (function (){var statearr_47832 = state_47803;
(statearr_47832[(15)] = inst_47773);

(statearr_47832[(7)] = inst_47730);

return statearr_47832;
})();
var statearr_47833_49070 = state_47803__$1;
(statearr_47833_49070[(2)] = null);

(statearr_47833_49070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (25))){
var inst_47799 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47834_49071 = state_47803__$1;
(statearr_47834_49071[(2)] = inst_47799);

(statearr_47834_49071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (34))){
var inst_47797 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47835_49072 = state_47803__$1;
(statearr_47835_49072[(2)] = inst_47797);

(statearr_47835_49072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (17))){
var state_47803__$1 = state_47803;
var statearr_47836_49073 = state_47803__$1;
(statearr_47836_49073[(2)] = false);

(statearr_47836_49073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (3))){
var state_47803__$1 = state_47803;
var statearr_47837_49074 = state_47803__$1;
(statearr_47837_49074[(2)] = false);

(statearr_47837_49074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (12))){
var inst_47801 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47803__$1,inst_47801);
} else {
if((state_val_47804 === (2))){
var inst_47705 = (state_47803[(8)]);
var inst_47710 = inst_47705.cljs$lang$protocol_mask$partition0$;
var inst_47711 = (inst_47710 & (64));
var inst_47712 = inst_47705.cljs$core$ISeq$;
var inst_47713 = (cljs.core.PROTOCOL_SENTINEL === inst_47712);
var inst_47714 = ((inst_47711) || (inst_47713));
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47714)){
var statearr_47838_49075 = state_47803__$1;
(statearr_47838_49075[(1)] = (5));

} else {
var statearr_47839_49076 = state_47803__$1;
(statearr_47839_49076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (23))){
var inst_47762 = (state_47803[(14)]);
var inst_47768 = (inst_47762 == null);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47768)){
var statearr_47840_49081 = state_47803__$1;
(statearr_47840_49081[(1)] = (26));

} else {
var statearr_47841_49082 = state_47803__$1;
(statearr_47841_49082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (35))){
var inst_47788 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
if(cljs.core.truth_(inst_47788)){
var statearr_47842_49087 = state_47803__$1;
(statearr_47842_49087[(1)] = (36));

} else {
var statearr_47843_49088 = state_47803__$1;
(statearr_47843_49088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (19))){
var inst_47730 = (state_47803[(7)]);
var inst_47750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47730);
var state_47803__$1 = state_47803;
var statearr_47844_49091 = state_47803__$1;
(statearr_47844_49091[(2)] = inst_47750);

(statearr_47844_49091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (11))){
var inst_47730 = (state_47803[(7)]);
var inst_47734 = (inst_47730 == null);
var inst_47735 = cljs.core.not(inst_47734);
var state_47803__$1 = state_47803;
if(inst_47735){
var statearr_47845_49092 = state_47803__$1;
(statearr_47845_49092[(1)] = (13));

} else {
var statearr_47846_49093 = state_47803__$1;
(statearr_47846_49093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (9))){
var inst_47705 = (state_47803[(8)]);
var state_47803__$1 = state_47803;
var statearr_47847_49098 = state_47803__$1;
(statearr_47847_49098[(2)] = inst_47705);

(statearr_47847_49098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (5))){
var state_47803__$1 = state_47803;
var statearr_47848_49099 = state_47803__$1;
(statearr_47848_49099[(2)] = true);

(statearr_47848_49099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (14))){
var state_47803__$1 = state_47803;
var statearr_47849_49100 = state_47803__$1;
(statearr_47849_49100[(2)] = false);

(statearr_47849_49100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (26))){
var inst_47763 = (state_47803[(10)]);
var inst_47770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47763);
var state_47803__$1 = state_47803;
var statearr_47850_49101 = state_47803__$1;
(statearr_47850_49101[(2)] = inst_47770);

(statearr_47850_49101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (16))){
var state_47803__$1 = state_47803;
var statearr_47851_49102 = state_47803__$1;
(statearr_47851_49102[(2)] = true);

(statearr_47851_49102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (38))){
var inst_47793 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47852_49103 = state_47803__$1;
(statearr_47852_49103[(2)] = inst_47793);

(statearr_47852_49103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (30))){
var inst_47754 = (state_47803[(9)]);
var inst_47763 = (state_47803[(10)]);
var inst_47755 = (state_47803[(13)]);
var inst_47780 = cljs.core.empty_QMARK_(inst_47754);
var inst_47781 = (inst_47755.cljs$core$IFn$_invoke$arity$1 ? inst_47755.cljs$core$IFn$_invoke$arity$1(inst_47763) : inst_47755.call(null,inst_47763));
var inst_47782 = cljs.core.not(inst_47781);
var inst_47783 = ((inst_47780) && (inst_47782));
var state_47803__$1 = state_47803;
var statearr_47853_49104 = state_47803__$1;
(statearr_47853_49104[(2)] = inst_47783);

(statearr_47853_49104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (10))){
var inst_47705 = (state_47803[(8)]);
var inst_47726 = (state_47803[(2)]);
var inst_47727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47726,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47726,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47726,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47730 = inst_47705;
var state_47803__$1 = (function (){var statearr_47854 = state_47803;
(statearr_47854[(16)] = inst_47727);

(statearr_47854[(17)] = inst_47728);

(statearr_47854[(7)] = inst_47730);

(statearr_47854[(18)] = inst_47729);

return statearr_47854;
})();
var statearr_47855_49105 = state_47803__$1;
(statearr_47855_49105[(2)] = null);

(statearr_47855_49105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (18))){
var inst_47745 = (state_47803[(2)]);
var state_47803__$1 = state_47803;
var statearr_47856_49106 = state_47803__$1;
(statearr_47856_49106[(2)] = inst_47745);

(statearr_47856_49106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (37))){
var state_47803__$1 = state_47803;
var statearr_47857_49107 = state_47803__$1;
(statearr_47857_49107[(2)] = null);

(statearr_47857_49107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47804 === (8))){
var inst_47705 = (state_47803[(8)]);
var inst_47723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47705);
var state_47803__$1 = state_47803;
var statearr_47858_49109 = state_47803__$1;
(statearr_47858_49109[(2)] = inst_47723);

(statearr_47858_49109[(1)] = (10));


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
});})(c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46939__auto__,c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46940__auto__ = null;
var cljs$core$async$mix_$_state_machine__46940__auto____0 = (function (){
var statearr_47859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47859[(0)] = cljs$core$async$mix_$_state_machine__46940__auto__);

(statearr_47859[(1)] = (1));

return statearr_47859;
});
var cljs$core$async$mix_$_state_machine__46940__auto____1 = (function (state_47803){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47803);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47860){if((e47860 instanceof Object)){
var ex__46943__auto__ = e47860;
var statearr_47861_49110 = state_47803;
(statearr_47861_49110[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49112 = state_47803;
state_47803 = G__49112;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46940__auto__ = function(state_47803){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46940__auto____1.call(this,state_47803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46940__auto____0;
cljs$core$async$mix_$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46940__auto____1;
return cljs$core$async$mix_$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47007__auto__ = (function (){var statearr_47862 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47862[(6)] = c__47005__auto___49038);

return statearr_47862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47864 = arguments.length;
switch (G__47864) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__47867 = arguments.length;
switch (G__47867) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__47865_SHARP_){
if(cljs.core.truth_((p1__47865_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47865_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47865_SHARP_.call(null,topic)))){
return p1__47865_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47865_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47869 = meta47869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47870,meta47869__$1){
var self__ = this;
var _47870__$1 = this;
return (new cljs.core.async.t_cljs$core$async47868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47869__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47870){
var self__ = this;
var _47870__$1 = this;
return self__.meta47869;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47869","meta47869",53026590,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47868";

cljs.core.async.t_cljs$core$async47868.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47868");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47868.
 */
cljs.core.async.__GT_t_cljs$core$async47868 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47869){
return (new cljs.core.async.t_cljs$core$async47868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47869));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47005__auto___49157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49157,mults,ensure_mult,p){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49157,mults,ensure_mult,p){
return (function (state_47942){
var state_val_47943 = (state_47942[(1)]);
if((state_val_47943 === (7))){
var inst_47938 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47944_49158 = state_47942__$1;
(statearr_47944_49158[(2)] = inst_47938);

(statearr_47944_49158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (20))){
var state_47942__$1 = state_47942;
var statearr_47945_49159 = state_47942__$1;
(statearr_47945_49159[(2)] = null);

(statearr_47945_49159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (1))){
var state_47942__$1 = state_47942;
var statearr_47946_49160 = state_47942__$1;
(statearr_47946_49160[(2)] = null);

(statearr_47946_49160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (24))){
var inst_47921 = (state_47942[(7)]);
var inst_47930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47921);
var state_47942__$1 = state_47942;
var statearr_47947_49161 = state_47942__$1;
(statearr_47947_49161[(2)] = inst_47930);

(statearr_47947_49161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (4))){
var inst_47873 = (state_47942[(8)]);
var inst_47873__$1 = (state_47942[(2)]);
var inst_47874 = (inst_47873__$1 == null);
var state_47942__$1 = (function (){var statearr_47948 = state_47942;
(statearr_47948[(8)] = inst_47873__$1);

return statearr_47948;
})();
if(cljs.core.truth_(inst_47874)){
var statearr_47949_49162 = state_47942__$1;
(statearr_47949_49162[(1)] = (5));

} else {
var statearr_47950_49163 = state_47942__$1;
(statearr_47950_49163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (15))){
var inst_47915 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47951_49170 = state_47942__$1;
(statearr_47951_49170[(2)] = inst_47915);

(statearr_47951_49170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (21))){
var inst_47935 = (state_47942[(2)]);
var state_47942__$1 = (function (){var statearr_47952 = state_47942;
(statearr_47952[(9)] = inst_47935);

return statearr_47952;
})();
var statearr_47953_49171 = state_47942__$1;
(statearr_47953_49171[(2)] = null);

(statearr_47953_49171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (13))){
var inst_47897 = (state_47942[(10)]);
var inst_47899 = cljs.core.chunked_seq_QMARK_(inst_47897);
var state_47942__$1 = state_47942;
if(inst_47899){
var statearr_47954_49172 = state_47942__$1;
(statearr_47954_49172[(1)] = (16));

} else {
var statearr_47955_49173 = state_47942__$1;
(statearr_47955_49173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (22))){
var inst_47927 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47927)){
var statearr_47956_49174 = state_47942__$1;
(statearr_47956_49174[(1)] = (23));

} else {
var statearr_47957_49175 = state_47942__$1;
(statearr_47957_49175[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (6))){
var inst_47873 = (state_47942[(8)]);
var inst_47923 = (state_47942[(11)]);
var inst_47921 = (state_47942[(7)]);
var inst_47921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47873) : topic_fn.call(null,inst_47873));
var inst_47922 = cljs.core.deref(mults);
var inst_47923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47922,inst_47921__$1);
var state_47942__$1 = (function (){var statearr_47958 = state_47942;
(statearr_47958[(11)] = inst_47923__$1);

(statearr_47958[(7)] = inst_47921__$1);

return statearr_47958;
})();
if(cljs.core.truth_(inst_47923__$1)){
var statearr_47959_49176 = state_47942__$1;
(statearr_47959_49176[(1)] = (19));

} else {
var statearr_47960_49177 = state_47942__$1;
(statearr_47960_49177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (25))){
var inst_47932 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47961_49178 = state_47942__$1;
(statearr_47961_49178[(2)] = inst_47932);

(statearr_47961_49178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (17))){
var inst_47897 = (state_47942[(10)]);
var inst_47906 = cljs.core.first(inst_47897);
var inst_47907 = cljs.core.async.muxch_STAR_(inst_47906);
var inst_47908 = cljs.core.async.close_BANG_(inst_47907);
var inst_47909 = cljs.core.next(inst_47897);
var inst_47883 = inst_47909;
var inst_47884 = null;
var inst_47885 = (0);
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47962 = state_47942;
(statearr_47962[(12)] = inst_47885);

(statearr_47962[(13)] = inst_47908);

(statearr_47962[(14)] = inst_47886);

(statearr_47962[(15)] = inst_47883);

(statearr_47962[(16)] = inst_47884);

return statearr_47962;
})();
var statearr_47963_49185 = state_47942__$1;
(statearr_47963_49185[(2)] = null);

(statearr_47963_49185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (3))){
var inst_47940 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47942__$1,inst_47940);
} else {
if((state_val_47943 === (12))){
var inst_47917 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47964_49186 = state_47942__$1;
(statearr_47964_49186[(2)] = inst_47917);

(statearr_47964_49186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (2))){
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47942__$1,(4),ch);
} else {
if((state_val_47943 === (23))){
var state_47942__$1 = state_47942;
var statearr_47965_49187 = state_47942__$1;
(statearr_47965_49187[(2)] = null);

(statearr_47965_49187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (19))){
var inst_47873 = (state_47942[(8)]);
var inst_47923 = (state_47942[(11)]);
var inst_47925 = cljs.core.async.muxch_STAR_(inst_47923);
var state_47942__$1 = state_47942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47942__$1,(22),inst_47925,inst_47873);
} else {
if((state_val_47943 === (11))){
var inst_47883 = (state_47942[(15)]);
var inst_47897 = (state_47942[(10)]);
var inst_47897__$1 = cljs.core.seq(inst_47883);
var state_47942__$1 = (function (){var statearr_47966 = state_47942;
(statearr_47966[(10)] = inst_47897__$1);

return statearr_47966;
})();
if(inst_47897__$1){
var statearr_47967_49188 = state_47942__$1;
(statearr_47967_49188[(1)] = (13));

} else {
var statearr_47968_49189 = state_47942__$1;
(statearr_47968_49189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (9))){
var inst_47919 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47969_49193 = state_47942__$1;
(statearr_47969_49193[(2)] = inst_47919);

(statearr_47969_49193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (5))){
var inst_47880 = cljs.core.deref(mults);
var inst_47881 = cljs.core.vals(inst_47880);
var inst_47882 = cljs.core.seq(inst_47881);
var inst_47883 = inst_47882;
var inst_47884 = null;
var inst_47885 = (0);
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47970 = state_47942;
(statearr_47970[(12)] = inst_47885);

(statearr_47970[(14)] = inst_47886);

(statearr_47970[(15)] = inst_47883);

(statearr_47970[(16)] = inst_47884);

return statearr_47970;
})();
var statearr_47971_49194 = state_47942__$1;
(statearr_47971_49194[(2)] = null);

(statearr_47971_49194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (14))){
var state_47942__$1 = state_47942;
var statearr_47975_49195 = state_47942__$1;
(statearr_47975_49195[(2)] = null);

(statearr_47975_49195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (16))){
var inst_47897 = (state_47942[(10)]);
var inst_47901 = cljs.core.chunk_first(inst_47897);
var inst_47902 = cljs.core.chunk_rest(inst_47897);
var inst_47903 = cljs.core.count(inst_47901);
var inst_47883 = inst_47902;
var inst_47884 = inst_47901;
var inst_47885 = inst_47903;
var inst_47886 = (0);
var state_47942__$1 = (function (){var statearr_47976 = state_47942;
(statearr_47976[(12)] = inst_47885);

(statearr_47976[(14)] = inst_47886);

(statearr_47976[(15)] = inst_47883);

(statearr_47976[(16)] = inst_47884);

return statearr_47976;
})();
var statearr_47977_49201 = state_47942__$1;
(statearr_47977_49201[(2)] = null);

(statearr_47977_49201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (10))){
var inst_47885 = (state_47942[(12)]);
var inst_47886 = (state_47942[(14)]);
var inst_47883 = (state_47942[(15)]);
var inst_47884 = (state_47942[(16)]);
var inst_47891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47884,inst_47886);
var inst_47892 = cljs.core.async.muxch_STAR_(inst_47891);
var inst_47893 = cljs.core.async.close_BANG_(inst_47892);
var inst_47894 = (inst_47886 + (1));
var tmp47972 = inst_47885;
var tmp47973 = inst_47883;
var tmp47974 = inst_47884;
var inst_47883__$1 = tmp47973;
var inst_47884__$1 = tmp47974;
var inst_47885__$1 = tmp47972;
var inst_47886__$1 = inst_47894;
var state_47942__$1 = (function (){var statearr_47978 = state_47942;
(statearr_47978[(12)] = inst_47885__$1);

(statearr_47978[(14)] = inst_47886__$1);

(statearr_47978[(15)] = inst_47883__$1);

(statearr_47978[(17)] = inst_47893);

(statearr_47978[(16)] = inst_47884__$1);

return statearr_47978;
})();
var statearr_47979_49202 = state_47942__$1;
(statearr_47979_49202[(2)] = null);

(statearr_47979_49202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (18))){
var inst_47912 = (state_47942[(2)]);
var state_47942__$1 = state_47942;
var statearr_47980_49203 = state_47942__$1;
(statearr_47980_49203[(2)] = inst_47912);

(statearr_47980_49203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47943 === (8))){
var inst_47885 = (state_47942[(12)]);
var inst_47886 = (state_47942[(14)]);
var inst_47888 = (inst_47886 < inst_47885);
var inst_47889 = inst_47888;
var state_47942__$1 = state_47942;
if(cljs.core.truth_(inst_47889)){
var statearr_47981_49205 = state_47942__$1;
(statearr_47981_49205[(1)] = (10));

} else {
var statearr_47982_49206 = state_47942__$1;
(statearr_47982_49206[(1)] = (11));

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
});})(c__47005__auto___49157,mults,ensure_mult,p))
;
return ((function (switch__46939__auto__,c__47005__auto___49157,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_47983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47983[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_47983[(1)] = (1));

return statearr_47983;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_47942){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_47942);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e47984){if((e47984 instanceof Object)){
var ex__46943__auto__ = e47984;
var statearr_47985_49208 = state_47942;
(statearr_47985_49208[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49209 = state_47942;
state_47942 = G__49209;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_47942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_47942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49157,mults,ensure_mult,p))
})();
var state__47007__auto__ = (function (){var statearr_47986 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_47986[(6)] = c__47005__auto___49157);

return statearr_47986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49157,mults,ensure_mult,p))
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
var G__47988 = arguments.length;
switch (G__47988) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__47990 = arguments.length;
switch (G__47990) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__47992 = arguments.length;
switch (G__47992) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47005__auto___49227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48031){
var state_val_48032 = (state_48031[(1)]);
if((state_val_48032 === (7))){
var state_48031__$1 = state_48031;
var statearr_48033_49228 = state_48031__$1;
(statearr_48033_49228[(2)] = null);

(statearr_48033_49228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (1))){
var state_48031__$1 = state_48031;
var statearr_48034_49229 = state_48031__$1;
(statearr_48034_49229[(2)] = null);

(statearr_48034_49229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (4))){
var inst_47995 = (state_48031[(7)]);
var inst_47997 = (inst_47995 < cnt);
var state_48031__$1 = state_48031;
if(cljs.core.truth_(inst_47997)){
var statearr_48035_49230 = state_48031__$1;
(statearr_48035_49230[(1)] = (6));

} else {
var statearr_48036_49231 = state_48031__$1;
(statearr_48036_49231[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (15))){
var inst_48027 = (state_48031[(2)]);
var state_48031__$1 = state_48031;
var statearr_48037_49232 = state_48031__$1;
(statearr_48037_49232[(2)] = inst_48027);

(statearr_48037_49232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (13))){
var inst_48020 = cljs.core.async.close_BANG_(out);
var state_48031__$1 = state_48031;
var statearr_48038_49233 = state_48031__$1;
(statearr_48038_49233[(2)] = inst_48020);

(statearr_48038_49233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (6))){
var state_48031__$1 = state_48031;
var statearr_48039_49234 = state_48031__$1;
(statearr_48039_49234[(2)] = null);

(statearr_48039_49234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (3))){
var inst_48029 = (state_48031[(2)]);
var state_48031__$1 = state_48031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48031__$1,inst_48029);
} else {
if((state_val_48032 === (12))){
var inst_48017 = (state_48031[(8)]);
var inst_48017__$1 = (state_48031[(2)]);
var inst_48018 = cljs.core.some(cljs.core.nil_QMARK_,inst_48017__$1);
var state_48031__$1 = (function (){var statearr_48040 = state_48031;
(statearr_48040[(8)] = inst_48017__$1);

return statearr_48040;
})();
if(cljs.core.truth_(inst_48018)){
var statearr_48041_49235 = state_48031__$1;
(statearr_48041_49235[(1)] = (13));

} else {
var statearr_48042_49236 = state_48031__$1;
(statearr_48042_49236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (2))){
var inst_47994 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47995 = (0);
var state_48031__$1 = (function (){var statearr_48043 = state_48031;
(statearr_48043[(9)] = inst_47994);

(statearr_48043[(7)] = inst_47995);

return statearr_48043;
})();
var statearr_48044_49238 = state_48031__$1;
(statearr_48044_49238[(2)] = null);

(statearr_48044_49238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (11))){
var inst_47995 = (state_48031[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48031,(10),Object,null,(9));
var inst_48004 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47995) : chs__$1.call(null,inst_47995));
var inst_48005 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47995) : done.call(null,inst_47995));
var inst_48006 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48004,inst_48005);
var state_48031__$1 = state_48031;
var statearr_48045_49240 = state_48031__$1;
(statearr_48045_49240[(2)] = inst_48006);


cljs.core.async.impl.ioc_helpers.process_exception(state_48031__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (9))){
var inst_47995 = (state_48031[(7)]);
var inst_48008 = (state_48031[(2)]);
var inst_48009 = (inst_47995 + (1));
var inst_47995__$1 = inst_48009;
var state_48031__$1 = (function (){var statearr_48046 = state_48031;
(statearr_48046[(10)] = inst_48008);

(statearr_48046[(7)] = inst_47995__$1);

return statearr_48046;
})();
var statearr_48047_49241 = state_48031__$1;
(statearr_48047_49241[(2)] = null);

(statearr_48047_49241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (5))){
var inst_48015 = (state_48031[(2)]);
var state_48031__$1 = (function (){var statearr_48048 = state_48031;
(statearr_48048[(11)] = inst_48015);

return statearr_48048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48031__$1,(12),dchan);
} else {
if((state_val_48032 === (14))){
var inst_48017 = (state_48031[(8)]);
var inst_48022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48017);
var state_48031__$1 = state_48031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48031__$1,(16),out,inst_48022);
} else {
if((state_val_48032 === (16))){
var inst_48024 = (state_48031[(2)]);
var state_48031__$1 = (function (){var statearr_48049 = state_48031;
(statearr_48049[(12)] = inst_48024);

return statearr_48049;
})();
var statearr_48050_49244 = state_48031__$1;
(statearr_48050_49244[(2)] = null);

(statearr_48050_49244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (10))){
var inst_47999 = (state_48031[(2)]);
var inst_48000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48031__$1 = (function (){var statearr_48051 = state_48031;
(statearr_48051[(13)] = inst_47999);

return statearr_48051;
})();
var statearr_48052_49245 = state_48031__$1;
(statearr_48052_49245[(2)] = inst_48000);


cljs.core.async.impl.ioc_helpers.process_exception(state_48031__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48032 === (8))){
var inst_48013 = (state_48031[(2)]);
var state_48031__$1 = state_48031;
var statearr_48053_49246 = state_48031__$1;
(statearr_48053_49246[(2)] = inst_48013);

(statearr_48053_49246[(1)] = (5));


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
});})(c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46939__auto__,c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48054[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48054[(1)] = (1));

return statearr_48054;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48031){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48031);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48055){if((e48055 instanceof Object)){
var ex__46943__auto__ = e48055;
var statearr_48056_49250 = state_48031;
(statearr_48056_49250[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49251 = state_48031;
state_48031 = G__49251;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47007__auto__ = (function (){var statearr_48057 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48057[(6)] = c__47005__auto___49227);

return statearr_48057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49227,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48060 = arguments.length;
switch (G__48060) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49253,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49253,out){
return (function (state_48092){
var state_val_48093 = (state_48092[(1)]);
if((state_val_48093 === (7))){
var inst_48071 = (state_48092[(7)]);
var inst_48072 = (state_48092[(8)]);
var inst_48071__$1 = (state_48092[(2)]);
var inst_48072__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48071__$1,(0),null);
var inst_48073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48071__$1,(1),null);
var inst_48074 = (inst_48072__$1 == null);
var state_48092__$1 = (function (){var statearr_48094 = state_48092;
(statearr_48094[(7)] = inst_48071__$1);

(statearr_48094[(9)] = inst_48073);

(statearr_48094[(8)] = inst_48072__$1);

return statearr_48094;
})();
if(cljs.core.truth_(inst_48074)){
var statearr_48095_49256 = state_48092__$1;
(statearr_48095_49256[(1)] = (8));

} else {
var statearr_48096_49257 = state_48092__$1;
(statearr_48096_49257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (1))){
var inst_48061 = cljs.core.vec(chs);
var inst_48062 = inst_48061;
var state_48092__$1 = (function (){var statearr_48097 = state_48092;
(statearr_48097[(10)] = inst_48062);

return statearr_48097;
})();
var statearr_48098_49259 = state_48092__$1;
(statearr_48098_49259[(2)] = null);

(statearr_48098_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (4))){
var inst_48062 = (state_48092[(10)]);
var state_48092__$1 = state_48092;
return cljs.core.async.ioc_alts_BANG_(state_48092__$1,(7),inst_48062);
} else {
if((state_val_48093 === (6))){
var inst_48088 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48099_49260 = state_48092__$1;
(statearr_48099_49260[(2)] = inst_48088);

(statearr_48099_49260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (3))){
var inst_48090 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48092__$1,inst_48090);
} else {
if((state_val_48093 === (2))){
var inst_48062 = (state_48092[(10)]);
var inst_48064 = cljs.core.count(inst_48062);
var inst_48065 = (inst_48064 > (0));
var state_48092__$1 = state_48092;
if(cljs.core.truth_(inst_48065)){
var statearr_48101_49263 = state_48092__$1;
(statearr_48101_49263[(1)] = (4));

} else {
var statearr_48102_49264 = state_48092__$1;
(statearr_48102_49264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (11))){
var inst_48062 = (state_48092[(10)]);
var inst_48081 = (state_48092[(2)]);
var tmp48100 = inst_48062;
var inst_48062__$1 = tmp48100;
var state_48092__$1 = (function (){var statearr_48103 = state_48092;
(statearr_48103[(11)] = inst_48081);

(statearr_48103[(10)] = inst_48062__$1);

return statearr_48103;
})();
var statearr_48104_49269 = state_48092__$1;
(statearr_48104_49269[(2)] = null);

(statearr_48104_49269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (9))){
var inst_48072 = (state_48092[(8)]);
var state_48092__$1 = state_48092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48092__$1,(11),out,inst_48072);
} else {
if((state_val_48093 === (5))){
var inst_48086 = cljs.core.async.close_BANG_(out);
var state_48092__$1 = state_48092;
var statearr_48105_49297 = state_48092__$1;
(statearr_48105_49297[(2)] = inst_48086);

(statearr_48105_49297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (10))){
var inst_48084 = (state_48092[(2)]);
var state_48092__$1 = state_48092;
var statearr_48106_49298 = state_48092__$1;
(statearr_48106_49298[(2)] = inst_48084);

(statearr_48106_49298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48093 === (8))){
var inst_48071 = (state_48092[(7)]);
var inst_48073 = (state_48092[(9)]);
var inst_48072 = (state_48092[(8)]);
var inst_48062 = (state_48092[(10)]);
var inst_48076 = (function (){var cs = inst_48062;
var vec__48067 = inst_48071;
var v = inst_48072;
var c = inst_48073;
return ((function (cs,vec__48067,v,c,inst_48071,inst_48073,inst_48072,inst_48062,state_val_48093,c__47005__auto___49253,out){
return (function (p1__48058_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48058_SHARP_);
});
;})(cs,vec__48067,v,c,inst_48071,inst_48073,inst_48072,inst_48062,state_val_48093,c__47005__auto___49253,out))
})();
var inst_48077 = cljs.core.filterv(inst_48076,inst_48062);
var inst_48062__$1 = inst_48077;
var state_48092__$1 = (function (){var statearr_48107 = state_48092;
(statearr_48107[(10)] = inst_48062__$1);

return statearr_48107;
})();
var statearr_48108_49299 = state_48092__$1;
(statearr_48108_49299[(2)] = null);

(statearr_48108_49299[(1)] = (2));


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
});})(c__47005__auto___49253,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49253,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48109[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48109[(1)] = (1));

return statearr_48109;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48092){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48092);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48110){if((e48110 instanceof Object)){
var ex__46943__auto__ = e48110;
var statearr_48111_49303 = state_48092;
(statearr_48111_49303[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49308 = state_48092;
state_48092 = G__49308;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49253,out))
})();
var state__47007__auto__ = (function (){var statearr_48112 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48112[(6)] = c__47005__auto___49253);

return statearr_48112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49253,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48114 = arguments.length;
switch (G__48114) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49326,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49326,out){
return (function (state_48138){
var state_val_48139 = (state_48138[(1)]);
if((state_val_48139 === (7))){
var inst_48120 = (state_48138[(7)]);
var inst_48120__$1 = (state_48138[(2)]);
var inst_48121 = (inst_48120__$1 == null);
var inst_48122 = cljs.core.not(inst_48121);
var state_48138__$1 = (function (){var statearr_48140 = state_48138;
(statearr_48140[(7)] = inst_48120__$1);

return statearr_48140;
})();
if(inst_48122){
var statearr_48141_49334 = state_48138__$1;
(statearr_48141_49334[(1)] = (8));

} else {
var statearr_48142_49335 = state_48138__$1;
(statearr_48142_49335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (1))){
var inst_48115 = (0);
var state_48138__$1 = (function (){var statearr_48143 = state_48138;
(statearr_48143[(8)] = inst_48115);

return statearr_48143;
})();
var statearr_48144_49336 = state_48138__$1;
(statearr_48144_49336[(2)] = null);

(statearr_48144_49336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (4))){
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48138__$1,(7),ch);
} else {
if((state_val_48139 === (6))){
var inst_48133 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48145_49340 = state_48138__$1;
(statearr_48145_49340[(2)] = inst_48133);

(statearr_48145_49340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (3))){
var inst_48135 = (state_48138[(2)]);
var inst_48136 = cljs.core.async.close_BANG_(out);
var state_48138__$1 = (function (){var statearr_48146 = state_48138;
(statearr_48146[(9)] = inst_48135);

return statearr_48146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48138__$1,inst_48136);
} else {
if((state_val_48139 === (2))){
var inst_48115 = (state_48138[(8)]);
var inst_48117 = (inst_48115 < n);
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48117)){
var statearr_48147_49351 = state_48138__$1;
(statearr_48147_49351[(1)] = (4));

} else {
var statearr_48148_49352 = state_48138__$1;
(statearr_48148_49352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (11))){
var inst_48115 = (state_48138[(8)]);
var inst_48125 = (state_48138[(2)]);
var inst_48126 = (inst_48115 + (1));
var inst_48115__$1 = inst_48126;
var state_48138__$1 = (function (){var statearr_48149 = state_48138;
(statearr_48149[(8)] = inst_48115__$1);

(statearr_48149[(10)] = inst_48125);

return statearr_48149;
})();
var statearr_48150_49354 = state_48138__$1;
(statearr_48150_49354[(2)] = null);

(statearr_48150_49354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (9))){
var state_48138__$1 = state_48138;
var statearr_48151_49355 = state_48138__$1;
(statearr_48151_49355[(2)] = null);

(statearr_48151_49355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (5))){
var state_48138__$1 = state_48138;
var statearr_48152_49356 = state_48138__$1;
(statearr_48152_49356[(2)] = null);

(statearr_48152_49356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (10))){
var inst_48130 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48153_49360 = state_48138__$1;
(statearr_48153_49360[(2)] = inst_48130);

(statearr_48153_49360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (8))){
var inst_48120 = (state_48138[(7)]);
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48138__$1,(11),out,inst_48120);
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
});})(c__47005__auto___49326,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49326,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48154[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48154[(1)] = (1));

return statearr_48154;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48138){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48138);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48155){if((e48155 instanceof Object)){
var ex__46943__auto__ = e48155;
var statearr_48156_49362 = state_48138;
(statearr_48156_49362[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49363 = state_48138;
state_48138 = G__49363;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49326,out))
})();
var state__47007__auto__ = (function (){var statearr_48157 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48157[(6)] = c__47005__auto___49326);

return statearr_48157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49326,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48159 = (function (f,ch,meta48160){
this.f = f;
this.ch = ch;
this.meta48160 = meta48160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48161,meta48160__$1){
var self__ = this;
var _48161__$1 = this;
return (new cljs.core.async.t_cljs$core$async48159(self__.f,self__.ch,meta48160__$1));
});

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48161){
var self__ = this;
var _48161__$1 = this;
return self__.meta48160;
});

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48162 = (function (f,ch,meta48160,_,fn1,meta48163){
this.f = f;
this.ch = ch;
this.meta48160 = meta48160;
this._ = _;
this.fn1 = fn1;
this.meta48163 = meta48163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48164,meta48163__$1){
var self__ = this;
var _48164__$1 = this;
return (new cljs.core.async.t_cljs$core$async48162(self__.f,self__.ch,self__.meta48160,self__._,self__.fn1,meta48163__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48164){
var self__ = this;
var _48164__$1 = this;
return self__.meta48163;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48158_SHARP_){
var G__48165 = (((p1__48158_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48158_SHARP_) : self__.f.call(null,p1__48158_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48165) : f1.call(null,G__48165));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48160","meta48160",89378196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48159","cljs.core.async/t_cljs$core$async48159",1403321230,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48163","meta48163",2140155174,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48162";

cljs.core.async.t_cljs$core$async48162.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48162");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48162.
 */
cljs.core.async.__GT_t_cljs$core$async48162 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48162(f__$1,ch__$1,meta48160__$1,___$2,fn1__$1,meta48163){
return (new cljs.core.async.t_cljs$core$async48162(f__$1,ch__$1,meta48160__$1,___$2,fn1__$1,meta48163));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48162(self__.f,self__.ch,self__.meta48160,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48166 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48166) : self__.f.call(null,G__48166));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48160","meta48160",89378196,null)], null);
});

cljs.core.async.t_cljs$core$async48159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48159";

cljs.core.async.t_cljs$core$async48159.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48159");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48159.
 */
cljs.core.async.__GT_t_cljs$core$async48159 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48159(f__$1,ch__$1,meta48160){
return (new cljs.core.async.t_cljs$core$async48159(f__$1,ch__$1,meta48160));
});

}

return (new cljs.core.async.t_cljs$core$async48159(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48167 = (function (f,ch,meta48168){
this.f = f;
this.ch = ch;
this.meta48168 = meta48168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48169,meta48168__$1){
var self__ = this;
var _48169__$1 = this;
return (new cljs.core.async.t_cljs$core$async48167(self__.f,self__.ch,meta48168__$1));
});

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48169){
var self__ = this;
var _48169__$1 = this;
return self__.meta48168;
});

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async48167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48168","meta48168",375258821,null)], null);
});

cljs.core.async.t_cljs$core$async48167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48167";

cljs.core.async.t_cljs$core$async48167.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48167.
 */
cljs.core.async.__GT_t_cljs$core$async48167 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48167(f__$1,ch__$1,meta48168){
return (new cljs.core.async.t_cljs$core$async48167(f__$1,ch__$1,meta48168));
});

}

return (new cljs.core.async.t_cljs$core$async48167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48170 = (function (p,ch,meta48171){
this.p = p;
this.ch = ch;
this.meta48171 = meta48171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48172,meta48171__$1){
var self__ = this;
var _48172__$1 = this;
return (new cljs.core.async.t_cljs$core$async48170(self__.p,self__.ch,meta48171__$1));
});

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48172){
var self__ = this;
var _48172__$1 = this;
return self__.meta48171;
});

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48171","meta48171",1948249234,null)], null);
});

cljs.core.async.t_cljs$core$async48170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48170";

cljs.core.async.t_cljs$core$async48170.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48170.
 */
cljs.core.async.__GT_t_cljs$core$async48170 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48170(p__$1,ch__$1,meta48171){
return (new cljs.core.async.t_cljs$core$async48170(p__$1,ch__$1,meta48171));
});

}

return (new cljs.core.async.t_cljs$core$async48170(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48174 = arguments.length;
switch (G__48174) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49453,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49453,out){
return (function (state_48195){
var state_val_48196 = (state_48195[(1)]);
if((state_val_48196 === (7))){
var inst_48191 = (state_48195[(2)]);
var state_48195__$1 = state_48195;
var statearr_48197_49463 = state_48195__$1;
(statearr_48197_49463[(2)] = inst_48191);

(statearr_48197_49463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (1))){
var state_48195__$1 = state_48195;
var statearr_48198_49468 = state_48195__$1;
(statearr_48198_49468[(2)] = null);

(statearr_48198_49468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (4))){
var inst_48177 = (state_48195[(7)]);
var inst_48177__$1 = (state_48195[(2)]);
var inst_48178 = (inst_48177__$1 == null);
var state_48195__$1 = (function (){var statearr_48199 = state_48195;
(statearr_48199[(7)] = inst_48177__$1);

return statearr_48199;
})();
if(cljs.core.truth_(inst_48178)){
var statearr_48200_49476 = state_48195__$1;
(statearr_48200_49476[(1)] = (5));

} else {
var statearr_48201_49477 = state_48195__$1;
(statearr_48201_49477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (6))){
var inst_48177 = (state_48195[(7)]);
var inst_48182 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48177) : p.call(null,inst_48177));
var state_48195__$1 = state_48195;
if(cljs.core.truth_(inst_48182)){
var statearr_48202_49478 = state_48195__$1;
(statearr_48202_49478[(1)] = (8));

} else {
var statearr_48203_49479 = state_48195__$1;
(statearr_48203_49479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (3))){
var inst_48193 = (state_48195[(2)]);
var state_48195__$1 = state_48195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48195__$1,inst_48193);
} else {
if((state_val_48196 === (2))){
var state_48195__$1 = state_48195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48195__$1,(4),ch);
} else {
if((state_val_48196 === (11))){
var inst_48185 = (state_48195[(2)]);
var state_48195__$1 = state_48195;
var statearr_48204_49488 = state_48195__$1;
(statearr_48204_49488[(2)] = inst_48185);

(statearr_48204_49488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (9))){
var state_48195__$1 = state_48195;
var statearr_48205_49489 = state_48195__$1;
(statearr_48205_49489[(2)] = null);

(statearr_48205_49489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (5))){
var inst_48180 = cljs.core.async.close_BANG_(out);
var state_48195__$1 = state_48195;
var statearr_48206_49494 = state_48195__$1;
(statearr_48206_49494[(2)] = inst_48180);

(statearr_48206_49494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (10))){
var inst_48188 = (state_48195[(2)]);
var state_48195__$1 = (function (){var statearr_48207 = state_48195;
(statearr_48207[(8)] = inst_48188);

return statearr_48207;
})();
var statearr_48208_49499 = state_48195__$1;
(statearr_48208_49499[(2)] = null);

(statearr_48208_49499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (8))){
var inst_48177 = (state_48195[(7)]);
var state_48195__$1 = state_48195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48195__$1,(11),out,inst_48177);
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
});})(c__47005__auto___49453,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49453,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48209 = [null,null,null,null,null,null,null,null,null];
(statearr_48209[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48209[(1)] = (1));

return statearr_48209;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48195){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48195);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48210){if((e48210 instanceof Object)){
var ex__46943__auto__ = e48210;
var statearr_48211_49504 = state_48195;
(statearr_48211_49504[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49505 = state_48195;
state_48195 = G__49505;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49453,out))
})();
var state__47007__auto__ = (function (){var statearr_48212 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48212[(6)] = c__47005__auto___49453);

return statearr_48212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49453,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48214 = arguments.length;
switch (G__48214) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47005__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto__){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto__){
return (function (state_48276){
var state_val_48277 = (state_48276[(1)]);
if((state_val_48277 === (7))){
var inst_48272 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
var statearr_48278_49509 = state_48276__$1;
(statearr_48278_49509[(2)] = inst_48272);

(statearr_48278_49509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (20))){
var inst_48242 = (state_48276[(7)]);
var inst_48253 = (state_48276[(2)]);
var inst_48254 = cljs.core.next(inst_48242);
var inst_48228 = inst_48254;
var inst_48229 = null;
var inst_48230 = (0);
var inst_48231 = (0);
var state_48276__$1 = (function (){var statearr_48279 = state_48276;
(statearr_48279[(8)] = inst_48231);

(statearr_48279[(9)] = inst_48230);

(statearr_48279[(10)] = inst_48228);

(statearr_48279[(11)] = inst_48253);

(statearr_48279[(12)] = inst_48229);

return statearr_48279;
})();
var statearr_48280_49531 = state_48276__$1;
(statearr_48280_49531[(2)] = null);

(statearr_48280_49531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (1))){
var state_48276__$1 = state_48276;
var statearr_48281_49539 = state_48276__$1;
(statearr_48281_49539[(2)] = null);

(statearr_48281_49539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (4))){
var inst_48217 = (state_48276[(13)]);
var inst_48217__$1 = (state_48276[(2)]);
var inst_48218 = (inst_48217__$1 == null);
var state_48276__$1 = (function (){var statearr_48282 = state_48276;
(statearr_48282[(13)] = inst_48217__$1);

return statearr_48282;
})();
if(cljs.core.truth_(inst_48218)){
var statearr_48283_49546 = state_48276__$1;
(statearr_48283_49546[(1)] = (5));

} else {
var statearr_48284_49550 = state_48276__$1;
(statearr_48284_49550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (15))){
var state_48276__$1 = state_48276;
var statearr_48288_49551 = state_48276__$1;
(statearr_48288_49551[(2)] = null);

(statearr_48288_49551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (21))){
var state_48276__$1 = state_48276;
var statearr_48289_49556 = state_48276__$1;
(statearr_48289_49556[(2)] = null);

(statearr_48289_49556[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (13))){
var inst_48231 = (state_48276[(8)]);
var inst_48230 = (state_48276[(9)]);
var inst_48228 = (state_48276[(10)]);
var inst_48229 = (state_48276[(12)]);
var inst_48238 = (state_48276[(2)]);
var inst_48239 = (inst_48231 + (1));
var tmp48285 = inst_48230;
var tmp48286 = inst_48228;
var tmp48287 = inst_48229;
var inst_48228__$1 = tmp48286;
var inst_48229__$1 = tmp48287;
var inst_48230__$1 = tmp48285;
var inst_48231__$1 = inst_48239;
var state_48276__$1 = (function (){var statearr_48290 = state_48276;
(statearr_48290[(8)] = inst_48231__$1);

(statearr_48290[(9)] = inst_48230__$1);

(statearr_48290[(10)] = inst_48228__$1);

(statearr_48290[(14)] = inst_48238);

(statearr_48290[(12)] = inst_48229__$1);

return statearr_48290;
})();
var statearr_48291_49571 = state_48276__$1;
(statearr_48291_49571[(2)] = null);

(statearr_48291_49571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (22))){
var state_48276__$1 = state_48276;
var statearr_48292_49575 = state_48276__$1;
(statearr_48292_49575[(2)] = null);

(statearr_48292_49575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (6))){
var inst_48217 = (state_48276[(13)]);
var inst_48226 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48217) : f.call(null,inst_48217));
var inst_48227 = cljs.core.seq(inst_48226);
var inst_48228 = inst_48227;
var inst_48229 = null;
var inst_48230 = (0);
var inst_48231 = (0);
var state_48276__$1 = (function (){var statearr_48293 = state_48276;
(statearr_48293[(8)] = inst_48231);

(statearr_48293[(9)] = inst_48230);

(statearr_48293[(10)] = inst_48228);

(statearr_48293[(12)] = inst_48229);

return statearr_48293;
})();
var statearr_48294_49581 = state_48276__$1;
(statearr_48294_49581[(2)] = null);

(statearr_48294_49581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (17))){
var inst_48242 = (state_48276[(7)]);
var inst_48246 = cljs.core.chunk_first(inst_48242);
var inst_48247 = cljs.core.chunk_rest(inst_48242);
var inst_48248 = cljs.core.count(inst_48246);
var inst_48228 = inst_48247;
var inst_48229 = inst_48246;
var inst_48230 = inst_48248;
var inst_48231 = (0);
var state_48276__$1 = (function (){var statearr_48295 = state_48276;
(statearr_48295[(8)] = inst_48231);

(statearr_48295[(9)] = inst_48230);

(statearr_48295[(10)] = inst_48228);

(statearr_48295[(12)] = inst_48229);

return statearr_48295;
})();
var statearr_48296_49583 = state_48276__$1;
(statearr_48296_49583[(2)] = null);

(statearr_48296_49583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (3))){
var inst_48274 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48276__$1,inst_48274);
} else {
if((state_val_48277 === (12))){
var inst_48262 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
var statearr_48297_49584 = state_48276__$1;
(statearr_48297_49584[(2)] = inst_48262);

(statearr_48297_49584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (2))){
var state_48276__$1 = state_48276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48276__$1,(4),in$);
} else {
if((state_val_48277 === (23))){
var inst_48270 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
var statearr_48298_49585 = state_48276__$1;
(statearr_48298_49585[(2)] = inst_48270);

(statearr_48298_49585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (19))){
var inst_48257 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
var statearr_48299_49593 = state_48276__$1;
(statearr_48299_49593[(2)] = inst_48257);

(statearr_48299_49593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (11))){
var inst_48228 = (state_48276[(10)]);
var inst_48242 = (state_48276[(7)]);
var inst_48242__$1 = cljs.core.seq(inst_48228);
var state_48276__$1 = (function (){var statearr_48300 = state_48276;
(statearr_48300[(7)] = inst_48242__$1);

return statearr_48300;
})();
if(inst_48242__$1){
var statearr_48301_49594 = state_48276__$1;
(statearr_48301_49594[(1)] = (14));

} else {
var statearr_48302_49595 = state_48276__$1;
(statearr_48302_49595[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (9))){
var inst_48264 = (state_48276[(2)]);
var inst_48265 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48276__$1 = (function (){var statearr_48303 = state_48276;
(statearr_48303[(15)] = inst_48264);

return statearr_48303;
})();
if(cljs.core.truth_(inst_48265)){
var statearr_48304_49596 = state_48276__$1;
(statearr_48304_49596[(1)] = (21));

} else {
var statearr_48305_49597 = state_48276__$1;
(statearr_48305_49597[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (5))){
var inst_48220 = cljs.core.async.close_BANG_(out);
var state_48276__$1 = state_48276;
var statearr_48306_49602 = state_48276__$1;
(statearr_48306_49602[(2)] = inst_48220);

(statearr_48306_49602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (14))){
var inst_48242 = (state_48276[(7)]);
var inst_48244 = cljs.core.chunked_seq_QMARK_(inst_48242);
var state_48276__$1 = state_48276;
if(inst_48244){
var statearr_48307_49607 = state_48276__$1;
(statearr_48307_49607[(1)] = (17));

} else {
var statearr_48308_49608 = state_48276__$1;
(statearr_48308_49608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (16))){
var inst_48260 = (state_48276[(2)]);
var state_48276__$1 = state_48276;
var statearr_48309_49613 = state_48276__$1;
(statearr_48309_49613[(2)] = inst_48260);

(statearr_48309_49613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48277 === (10))){
var inst_48231 = (state_48276[(8)]);
var inst_48229 = (state_48276[(12)]);
var inst_48236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48229,inst_48231);
var state_48276__$1 = state_48276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48276__$1,(13),out,inst_48236);
} else {
if((state_val_48277 === (18))){
var inst_48242 = (state_48276[(7)]);
var inst_48251 = cljs.core.first(inst_48242);
var state_48276__$1 = state_48276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48276__$1,(20),out,inst_48251);
} else {
if((state_val_48277 === (8))){
var inst_48231 = (state_48276[(8)]);
var inst_48230 = (state_48276[(9)]);
var inst_48233 = (inst_48231 < inst_48230);
var inst_48234 = inst_48233;
var state_48276__$1 = state_48276;
if(cljs.core.truth_(inst_48234)){
var statearr_48310_49617 = state_48276__$1;
(statearr_48310_49617[(1)] = (10));

} else {
var statearr_48311_49618 = state_48276__$1;
(statearr_48311_49618[(1)] = (11));

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
});})(c__47005__auto__))
;
return ((function (switch__46939__auto__,c__47005__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____0 = (function (){
var statearr_48312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48312[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__);

(statearr_48312[(1)] = (1));

return statearr_48312;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____1 = (function (state_48276){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48276);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48313){if((e48313 instanceof Object)){
var ex__46943__auto__ = e48313;
var statearr_48314_49619 = state_48276;
(statearr_48314_49619[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49620 = state_48276;
state_48276 = G__49620;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__ = function(state_48276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____1.call(this,state_48276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46940__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto__))
})();
var state__47007__auto__ = (function (){var statearr_48315 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48315[(6)] = c__47005__auto__);

return statearr_48315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto__))
);

return c__47005__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48317 = arguments.length;
switch (G__48317) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48319 = arguments.length;
switch (G__48319) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48321 = arguments.length;
switch (G__48321) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49624,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49624,out){
return (function (state_48345){
var state_val_48346 = (state_48345[(1)]);
if((state_val_48346 === (7))){
var inst_48340 = (state_48345[(2)]);
var state_48345__$1 = state_48345;
var statearr_48347_49625 = state_48345__$1;
(statearr_48347_49625[(2)] = inst_48340);

(statearr_48347_49625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (1))){
var inst_48322 = null;
var state_48345__$1 = (function (){var statearr_48348 = state_48345;
(statearr_48348[(7)] = inst_48322);

return statearr_48348;
})();
var statearr_48349_49630 = state_48345__$1;
(statearr_48349_49630[(2)] = null);

(statearr_48349_49630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (4))){
var inst_48325 = (state_48345[(8)]);
var inst_48325__$1 = (state_48345[(2)]);
var inst_48326 = (inst_48325__$1 == null);
var inst_48327 = cljs.core.not(inst_48326);
var state_48345__$1 = (function (){var statearr_48350 = state_48345;
(statearr_48350[(8)] = inst_48325__$1);

return statearr_48350;
})();
if(inst_48327){
var statearr_48351_49633 = state_48345__$1;
(statearr_48351_49633[(1)] = (5));

} else {
var statearr_48352_49634 = state_48345__$1;
(statearr_48352_49634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (6))){
var state_48345__$1 = state_48345;
var statearr_48353_49635 = state_48345__$1;
(statearr_48353_49635[(2)] = null);

(statearr_48353_49635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (3))){
var inst_48342 = (state_48345[(2)]);
var inst_48343 = cljs.core.async.close_BANG_(out);
var state_48345__$1 = (function (){var statearr_48354 = state_48345;
(statearr_48354[(9)] = inst_48342);

return statearr_48354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48345__$1,inst_48343);
} else {
if((state_val_48346 === (2))){
var state_48345__$1 = state_48345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48345__$1,(4),ch);
} else {
if((state_val_48346 === (11))){
var inst_48325 = (state_48345[(8)]);
var inst_48334 = (state_48345[(2)]);
var inst_48322 = inst_48325;
var state_48345__$1 = (function (){var statearr_48355 = state_48345;
(statearr_48355[(10)] = inst_48334);

(statearr_48355[(7)] = inst_48322);

return statearr_48355;
})();
var statearr_48356_49639 = state_48345__$1;
(statearr_48356_49639[(2)] = null);

(statearr_48356_49639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (9))){
var inst_48325 = (state_48345[(8)]);
var state_48345__$1 = state_48345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48345__$1,(11),out,inst_48325);
} else {
if((state_val_48346 === (5))){
var inst_48325 = (state_48345[(8)]);
var inst_48322 = (state_48345[(7)]);
var inst_48329 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48325,inst_48322);
var state_48345__$1 = state_48345;
if(inst_48329){
var statearr_48358_49643 = state_48345__$1;
(statearr_48358_49643[(1)] = (8));

} else {
var statearr_48359_49644 = state_48345__$1;
(statearr_48359_49644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (10))){
var inst_48337 = (state_48345[(2)]);
var state_48345__$1 = state_48345;
var statearr_48360_49645 = state_48345__$1;
(statearr_48360_49645[(2)] = inst_48337);

(statearr_48360_49645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48346 === (8))){
var inst_48322 = (state_48345[(7)]);
var tmp48357 = inst_48322;
var inst_48322__$1 = tmp48357;
var state_48345__$1 = (function (){var statearr_48361 = state_48345;
(statearr_48361[(7)] = inst_48322__$1);

return statearr_48361;
})();
var statearr_48362_49650 = state_48345__$1;
(statearr_48362_49650[(2)] = null);

(statearr_48362_49650[(1)] = (2));


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
});})(c__47005__auto___49624,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49624,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48363[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48363[(1)] = (1));

return statearr_48363;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48345){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48345);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48364){if((e48364 instanceof Object)){
var ex__46943__auto__ = e48364;
var statearr_48365_49651 = state_48345;
(statearr_48365_49651[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49652 = state_48345;
state_48345 = G__49652;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49624,out))
})();
var state__47007__auto__ = (function (){var statearr_48366 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48366[(6)] = c__47005__auto___49624);

return statearr_48366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49624,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48368 = arguments.length;
switch (G__48368) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49655,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49655,out){
return (function (state_48406){
var state_val_48407 = (state_48406[(1)]);
if((state_val_48407 === (7))){
var inst_48402 = (state_48406[(2)]);
var state_48406__$1 = state_48406;
var statearr_48408_49658 = state_48406__$1;
(statearr_48408_49658[(2)] = inst_48402);

(statearr_48408_49658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (1))){
var inst_48369 = (new Array(n));
var inst_48370 = inst_48369;
var inst_48371 = (0);
var state_48406__$1 = (function (){var statearr_48409 = state_48406;
(statearr_48409[(7)] = inst_48371);

(statearr_48409[(8)] = inst_48370);

return statearr_48409;
})();
var statearr_48410_49659 = state_48406__$1;
(statearr_48410_49659[(2)] = null);

(statearr_48410_49659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (4))){
var inst_48374 = (state_48406[(9)]);
var inst_48374__$1 = (state_48406[(2)]);
var inst_48375 = (inst_48374__$1 == null);
var inst_48376 = cljs.core.not(inst_48375);
var state_48406__$1 = (function (){var statearr_48411 = state_48406;
(statearr_48411[(9)] = inst_48374__$1);

return statearr_48411;
})();
if(inst_48376){
var statearr_48412_49661 = state_48406__$1;
(statearr_48412_49661[(1)] = (5));

} else {
var statearr_48413_49663 = state_48406__$1;
(statearr_48413_49663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (15))){
var inst_48396 = (state_48406[(2)]);
var state_48406__$1 = state_48406;
var statearr_48414_49664 = state_48406__$1;
(statearr_48414_49664[(2)] = inst_48396);

(statearr_48414_49664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (13))){
var state_48406__$1 = state_48406;
var statearr_48415_49665 = state_48406__$1;
(statearr_48415_49665[(2)] = null);

(statearr_48415_49665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (6))){
var inst_48371 = (state_48406[(7)]);
var inst_48392 = (inst_48371 > (0));
var state_48406__$1 = state_48406;
if(cljs.core.truth_(inst_48392)){
var statearr_48416_49667 = state_48406__$1;
(statearr_48416_49667[(1)] = (12));

} else {
var statearr_48417_49668 = state_48406__$1;
(statearr_48417_49668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (3))){
var inst_48404 = (state_48406[(2)]);
var state_48406__$1 = state_48406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48406__$1,inst_48404);
} else {
if((state_val_48407 === (12))){
var inst_48370 = (state_48406[(8)]);
var inst_48394 = cljs.core.vec(inst_48370);
var state_48406__$1 = state_48406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48406__$1,(15),out,inst_48394);
} else {
if((state_val_48407 === (2))){
var state_48406__$1 = state_48406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48406__$1,(4),ch);
} else {
if((state_val_48407 === (11))){
var inst_48386 = (state_48406[(2)]);
var inst_48387 = (new Array(n));
var inst_48370 = inst_48387;
var inst_48371 = (0);
var state_48406__$1 = (function (){var statearr_48418 = state_48406;
(statearr_48418[(10)] = inst_48386);

(statearr_48418[(7)] = inst_48371);

(statearr_48418[(8)] = inst_48370);

return statearr_48418;
})();
var statearr_48419_49669 = state_48406__$1;
(statearr_48419_49669[(2)] = null);

(statearr_48419_49669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (9))){
var inst_48370 = (state_48406[(8)]);
var inst_48384 = cljs.core.vec(inst_48370);
var state_48406__$1 = state_48406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48406__$1,(11),out,inst_48384);
} else {
if((state_val_48407 === (5))){
var inst_48371 = (state_48406[(7)]);
var inst_48370 = (state_48406[(8)]);
var inst_48379 = (state_48406[(11)]);
var inst_48374 = (state_48406[(9)]);
var inst_48378 = (inst_48370[inst_48371] = inst_48374);
var inst_48379__$1 = (inst_48371 + (1));
var inst_48380 = (inst_48379__$1 < n);
var state_48406__$1 = (function (){var statearr_48420 = state_48406;
(statearr_48420[(11)] = inst_48379__$1);

(statearr_48420[(12)] = inst_48378);

return statearr_48420;
})();
if(cljs.core.truth_(inst_48380)){
var statearr_48421_49673 = state_48406__$1;
(statearr_48421_49673[(1)] = (8));

} else {
var statearr_48422_49674 = state_48406__$1;
(statearr_48422_49674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (14))){
var inst_48399 = (state_48406[(2)]);
var inst_48400 = cljs.core.async.close_BANG_(out);
var state_48406__$1 = (function (){var statearr_48424 = state_48406;
(statearr_48424[(13)] = inst_48399);

return statearr_48424;
})();
var statearr_48425_49675 = state_48406__$1;
(statearr_48425_49675[(2)] = inst_48400);

(statearr_48425_49675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (10))){
var inst_48390 = (state_48406[(2)]);
var state_48406__$1 = state_48406;
var statearr_48426_49676 = state_48406__$1;
(statearr_48426_49676[(2)] = inst_48390);

(statearr_48426_49676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48407 === (8))){
var inst_48370 = (state_48406[(8)]);
var inst_48379 = (state_48406[(11)]);
var tmp48423 = inst_48370;
var inst_48370__$1 = tmp48423;
var inst_48371 = inst_48379;
var state_48406__$1 = (function (){var statearr_48427 = state_48406;
(statearr_48427[(7)] = inst_48371);

(statearr_48427[(8)] = inst_48370__$1);

return statearr_48427;
})();
var statearr_48428_49677 = state_48406__$1;
(statearr_48428_49677[(2)] = null);

(statearr_48428_49677[(1)] = (2));


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
});})(c__47005__auto___49655,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49655,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48429[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48429[(1)] = (1));

return statearr_48429;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48406){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48406);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48430){if((e48430 instanceof Object)){
var ex__46943__auto__ = e48430;
var statearr_48431_49686 = state_48406;
(statearr_48431_49686[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49690 = state_48406;
state_48406 = G__49690;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49655,out))
})();
var state__47007__auto__ = (function (){var statearr_48432 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48432[(6)] = c__47005__auto___49655);

return statearr_48432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49655,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48434 = arguments.length;
switch (G__48434) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47005__auto___49701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49701,out){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49701,out){
return (function (state_48476){
var state_val_48477 = (state_48476[(1)]);
if((state_val_48477 === (7))){
var inst_48472 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48478_49706 = state_48476__$1;
(statearr_48478_49706[(2)] = inst_48472);

(statearr_48478_49706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (1))){
var inst_48435 = [];
var inst_48436 = inst_48435;
var inst_48437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48476__$1 = (function (){var statearr_48479 = state_48476;
(statearr_48479[(7)] = inst_48437);

(statearr_48479[(8)] = inst_48436);

return statearr_48479;
})();
var statearr_48480_49709 = state_48476__$1;
(statearr_48480_49709[(2)] = null);

(statearr_48480_49709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (4))){
var inst_48440 = (state_48476[(9)]);
var inst_48440__$1 = (state_48476[(2)]);
var inst_48441 = (inst_48440__$1 == null);
var inst_48442 = cljs.core.not(inst_48441);
var state_48476__$1 = (function (){var statearr_48481 = state_48476;
(statearr_48481[(9)] = inst_48440__$1);

return statearr_48481;
})();
if(inst_48442){
var statearr_48482_49712 = state_48476__$1;
(statearr_48482_49712[(1)] = (5));

} else {
var statearr_48483_49713 = state_48476__$1;
(statearr_48483_49713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (15))){
var inst_48466 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48484_49714 = state_48476__$1;
(statearr_48484_49714[(2)] = inst_48466);

(statearr_48484_49714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (13))){
var state_48476__$1 = state_48476;
var statearr_48485_49715 = state_48476__$1;
(statearr_48485_49715[(2)] = null);

(statearr_48485_49715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (6))){
var inst_48436 = (state_48476[(8)]);
var inst_48461 = inst_48436.length;
var inst_48462 = (inst_48461 > (0));
var state_48476__$1 = state_48476;
if(cljs.core.truth_(inst_48462)){
var statearr_48486_49720 = state_48476__$1;
(statearr_48486_49720[(1)] = (12));

} else {
var statearr_48487_49721 = state_48476__$1;
(statearr_48487_49721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (3))){
var inst_48474 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48476__$1,inst_48474);
} else {
if((state_val_48477 === (12))){
var inst_48436 = (state_48476[(8)]);
var inst_48464 = cljs.core.vec(inst_48436);
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48476__$1,(15),out,inst_48464);
} else {
if((state_val_48477 === (2))){
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48476__$1,(4),ch);
} else {
if((state_val_48477 === (11))){
var inst_48444 = (state_48476[(10)]);
var inst_48440 = (state_48476[(9)]);
var inst_48454 = (state_48476[(2)]);
var inst_48455 = [];
var inst_48456 = inst_48455.push(inst_48440);
var inst_48436 = inst_48455;
var inst_48437 = inst_48444;
var state_48476__$1 = (function (){var statearr_48488 = state_48476;
(statearr_48488[(7)] = inst_48437);

(statearr_48488[(8)] = inst_48436);

(statearr_48488[(11)] = inst_48456);

(statearr_48488[(12)] = inst_48454);

return statearr_48488;
})();
var statearr_48489_49726 = state_48476__$1;
(statearr_48489_49726[(2)] = null);

(statearr_48489_49726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (9))){
var inst_48436 = (state_48476[(8)]);
var inst_48452 = cljs.core.vec(inst_48436);
var state_48476__$1 = state_48476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48476__$1,(11),out,inst_48452);
} else {
if((state_val_48477 === (5))){
var inst_48444 = (state_48476[(10)]);
var inst_48437 = (state_48476[(7)]);
var inst_48440 = (state_48476[(9)]);
var inst_48444__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48440) : f.call(null,inst_48440));
var inst_48445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48444__$1,inst_48437);
var inst_48446 = cljs.core.keyword_identical_QMARK_(inst_48437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48447 = ((inst_48445) || (inst_48446));
var state_48476__$1 = (function (){var statearr_48490 = state_48476;
(statearr_48490[(10)] = inst_48444__$1);

return statearr_48490;
})();
if(cljs.core.truth_(inst_48447)){
var statearr_48491_49735 = state_48476__$1;
(statearr_48491_49735[(1)] = (8));

} else {
var statearr_48492_49740 = state_48476__$1;
(statearr_48492_49740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (14))){
var inst_48469 = (state_48476[(2)]);
var inst_48470 = cljs.core.async.close_BANG_(out);
var state_48476__$1 = (function (){var statearr_48494 = state_48476;
(statearr_48494[(13)] = inst_48469);

return statearr_48494;
})();
var statearr_48495_49744 = state_48476__$1;
(statearr_48495_49744[(2)] = inst_48470);

(statearr_48495_49744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (10))){
var inst_48459 = (state_48476[(2)]);
var state_48476__$1 = state_48476;
var statearr_48496_49747 = state_48476__$1;
(statearr_48496_49747[(2)] = inst_48459);

(statearr_48496_49747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48477 === (8))){
var inst_48444 = (state_48476[(10)]);
var inst_48436 = (state_48476[(8)]);
var inst_48440 = (state_48476[(9)]);
var inst_48449 = inst_48436.push(inst_48440);
var tmp48493 = inst_48436;
var inst_48436__$1 = tmp48493;
var inst_48437 = inst_48444;
var state_48476__$1 = (function (){var statearr_48497 = state_48476;
(statearr_48497[(7)] = inst_48437);

(statearr_48497[(14)] = inst_48449);

(statearr_48497[(8)] = inst_48436__$1);

return statearr_48497;
})();
var statearr_48498_49748 = state_48476__$1;
(statearr_48498_49748[(2)] = null);

(statearr_48498_49748[(1)] = (2));


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
});})(c__47005__auto___49701,out))
;
return ((function (switch__46939__auto__,c__47005__auto___49701,out){
return (function() {
var cljs$core$async$state_machine__46940__auto__ = null;
var cljs$core$async$state_machine__46940__auto____0 = (function (){
var statearr_48499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48499[(0)] = cljs$core$async$state_machine__46940__auto__);

(statearr_48499[(1)] = (1));

return statearr_48499;
});
var cljs$core$async$state_machine__46940__auto____1 = (function (state_48476){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_48476);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e48500){if((e48500 instanceof Object)){
var ex__46943__auto__ = e48500;
var statearr_48501_49764 = state_48476;
(statearr_48501_49764[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49765 = state_48476;
state_48476 = G__49765;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
cljs$core$async$state_machine__46940__auto__ = function(state_48476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46940__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46940__auto____1.call(this,state_48476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46940__auto____0;
cljs$core$async$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46940__auto____1;
return cljs$core$async$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49701,out))
})();
var state__47007__auto__ = (function (){var statearr_48502 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_48502[(6)] = c__47005__auto___49701);

return statearr_48502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49701,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
