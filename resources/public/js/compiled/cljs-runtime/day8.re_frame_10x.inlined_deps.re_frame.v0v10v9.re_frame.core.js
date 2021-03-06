goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors');
goog.require('clojure.set');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_db(var_args){
var G__41223 = arguments.length;
switch (G__41223) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_fx(var_args){
var G__41225 = arguments.length;
switch (G__41225) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_ctx(var_args){
var G__41227 = arguments.length;
switch (G__41227) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db);
var subs_cache = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_41275 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_41276 = cljs.core.set(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction)));
var seq__41228_41277 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_41276,original_subs_41275));
var chunk__41229_41278 = null;
var count__41230_41279 = (0);
var i__41231_41280 = (0);
while(true){
if((i__41231_41280 < count__41230_41279)){
var sub_41281 = chunk__41229_41278.cljs$core$IIndexed$_nth$arity$2(null,i__41231_41280);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_(sub_41281);


var G__41282 = seq__41228_41277;
var G__41283 = chunk__41229_41278;
var G__41284 = count__41230_41279;
var G__41285 = (i__41231_41280 + (1));
seq__41228_41277 = G__41282;
chunk__41229_41278 = G__41283;
count__41230_41279 = G__41284;
i__41231_41280 = G__41285;
continue;
} else {
var temp__5735__auto___41286 = cljs.core.seq(seq__41228_41277);
if(temp__5735__auto___41286){
var seq__41228_41288__$1 = temp__5735__auto___41286;
if(cljs.core.chunked_seq_QMARK_(seq__41228_41288__$1)){
var c__4550__auto___41290 = cljs.core.chunk_first(seq__41228_41288__$1);
var G__41294 = cljs.core.chunk_rest(seq__41228_41288__$1);
var G__41295 = c__4550__auto___41290;
var G__41296 = cljs.core.count(c__4550__auto___41290);
var G__41297 = (0);
seq__41228_41277 = G__41294;
chunk__41229_41278 = G__41295;
count__41230_41279 = G__41296;
i__41231_41280 = G__41297;
continue;
} else {
var sub_41298 = cljs.core.first(seq__41228_41288__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_(sub_41298);


var G__41299 = cljs.core.next(seq__41228_41288__$1);
var G__41300 = null;
var G__41301 = (0);
var G__41302 = (0);
seq__41228_41277 = G__41299;
chunk__41229_41278 = G__41300;
count__41230_41279 = G__41301;
i__41231_41280 = G__41302;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$add_post_event_callback(var_args){
var G__41233 = arguments.length;
switch (G__41233) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue.day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$register_handler(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41306 = arguments.length;
var i__4731__auto___41307 = (0);
while(true){
if((i__4731__auto___41307 < len__4730__auto___41306)){
args__4736__auto__.push((arguments[i__4731__auto___41307]));

var G__41308 = (i__4731__auto___41307 + (1));
i__4731__auto___41307 = G__41308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__41235_41309 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__41236_41310 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__41237_41311 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__41238_41312 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__41235_41309,G__41236_41310,G__41237_41311,G__41238_41312) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.call(null,G__41235_41309,G__41236_41310,G__41237_41311,G__41238_41312));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq41234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41234));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$register_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41314 = arguments.length;
var i__4731__auto___41315 = (0);
while(true){
if((i__4731__auto___41315 < len__4730__auto___41314)){
args__4736__auto__.push((arguments[i__4731__auto___41315]));

var G__41316 = (i__4731__auto___41315 + (1));
i__4731__auto___41315 = G__41316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__41240_41317 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__41241_41318 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__41242_41319 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__41243_41320 = ")";
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__41240_41317,G__41241_41318,G__41242_41319,G__41243_41320) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.call(null,G__41240_41317,G__41241_41318,G__41242_41319,G__41243_41320));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub_raw,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq41239){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41239));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.js.map
