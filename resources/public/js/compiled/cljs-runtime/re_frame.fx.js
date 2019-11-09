goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__43417 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43418 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43418;

try{try{var seq__43420 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43421 = null;
var count__43422 = (0);
var i__43423 = (0);
while(true){
if((i__43423 < count__43422)){
var vec__43433 = chunk__43421.cljs$core$IIndexed$_nth$arity$2(null,i__43423);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43433,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43433,(1),null);
var temp__5733__auto___43489 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43489)){
var effect_fn_43490 = temp__5733__auto___43489;
(effect_fn_43490.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43490.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43490.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43491 = seq__43420;
var G__43492 = chunk__43421;
var G__43493 = count__43422;
var G__43494 = (i__43423 + (1));
seq__43420 = G__43491;
chunk__43421 = G__43492;
count__43422 = G__43493;
i__43423 = G__43494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43420);
if(temp__5735__auto__){
var seq__43420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43420__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43420__$1);
var G__43497 = cljs.core.chunk_rest(seq__43420__$1);
var G__43498 = c__4550__auto__;
var G__43499 = cljs.core.count(c__4550__auto__);
var G__43500 = (0);
seq__43420 = G__43497;
chunk__43421 = G__43498;
count__43422 = G__43499;
i__43423 = G__43500;
continue;
} else {
var vec__43439 = cljs.core.first(seq__43420__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43439,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43439,(1),null);
var temp__5733__auto___43501 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43501)){
var effect_fn_43502 = temp__5733__auto___43501;
(effect_fn_43502.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43502.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43502.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43503 = cljs.core.next(seq__43420__$1);
var G__43504 = null;
var G__43505 = (0);
var G__43506 = (0);
seq__43420 = G__43503;
chunk__43421 = G__43504;
count__43422 = G__43505;
i__43423 = G__43506;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__43154__auto___43507 = re_frame.interop.now();
var duration__43155__auto___43508 = (end__43154__auto___43507 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43155__auto___43508,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__43154__auto___43507);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43417;
}} else {
var seq__43442 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43443 = null;
var count__43444 = (0);
var i__43445 = (0);
while(true){
if((i__43445 < count__43444)){
var vec__43452 = chunk__43443.cljs$core$IIndexed$_nth$arity$2(null,i__43445);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);
var temp__5733__auto___43509 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43509)){
var effect_fn_43510 = temp__5733__auto___43509;
(effect_fn_43510.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43510.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43510.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43511 = seq__43442;
var G__43512 = chunk__43443;
var G__43513 = count__43444;
var G__43514 = (i__43445 + (1));
seq__43442 = G__43511;
chunk__43443 = G__43512;
count__43444 = G__43513;
i__43445 = G__43514;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43442);
if(temp__5735__auto__){
var seq__43442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43442__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43442__$1);
var G__43516 = cljs.core.chunk_rest(seq__43442__$1);
var G__43517 = c__4550__auto__;
var G__43518 = cljs.core.count(c__4550__auto__);
var G__43519 = (0);
seq__43442 = G__43516;
chunk__43443 = G__43517;
count__43444 = G__43518;
i__43445 = G__43519;
continue;
} else {
var vec__43455 = cljs.core.first(seq__43442__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(1),null);
var temp__5733__auto___43520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43520)){
var effect_fn_43521 = temp__5733__auto___43520;
(effect_fn_43521.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43521.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43521.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43522 = cljs.core.next(seq__43442__$1);
var G__43523 = null;
var G__43524 = (0);
var G__43525 = (0);
seq__43442 = G__43522;
chunk__43443 = G__43523;
count__43444 = G__43524;
i__43445 = G__43525;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__43458 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43459 = null;
var count__43460 = (0);
var i__43461 = (0);
while(true){
if((i__43461 < count__43460)){
var map__43466 = chunk__43459.cljs$core$IIndexed$_nth$arity$2(null,i__43461);
var map__43466__$1 = (((((!((map__43466 == null))))?(((((map__43466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43466):map__43466);
var effect = map__43466__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43466__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43458,chunk__43459,count__43460,i__43461,map__43466,map__43466__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43458,chunk__43459,count__43460,i__43461,map__43466,map__43466__$1,effect,ms,dispatch))
,ms);
}


var G__43526 = seq__43458;
var G__43527 = chunk__43459;
var G__43528 = count__43460;
var G__43529 = (i__43461 + (1));
seq__43458 = G__43526;
chunk__43459 = G__43527;
count__43460 = G__43528;
i__43461 = G__43529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43458);
if(temp__5735__auto__){
var seq__43458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43458__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43458__$1);
var G__43530 = cljs.core.chunk_rest(seq__43458__$1);
var G__43531 = c__4550__auto__;
var G__43532 = cljs.core.count(c__4550__auto__);
var G__43533 = (0);
seq__43458 = G__43530;
chunk__43459 = G__43531;
count__43460 = G__43532;
i__43461 = G__43533;
continue;
} else {
var map__43472 = cljs.core.first(seq__43458__$1);
var map__43472__$1 = (((((!((map__43472 == null))))?(((((map__43472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43472):map__43472);
var effect = map__43472__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43458,chunk__43459,count__43460,i__43461,map__43472,map__43472__$1,effect,ms,dispatch,seq__43458__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43458,chunk__43459,count__43460,i__43461,map__43472,map__43472__$1,effect,ms,dispatch,seq__43458__$1,temp__5735__auto__))
,ms);
}


var G__43534 = cljs.core.next(seq__43458__$1);
var G__43535 = null;
var G__43536 = (0);
var G__43537 = (0);
seq__43458 = G__43534;
chunk__43459 = G__43535;
count__43460 = G__43536;
i__43461 = G__43537;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__43476 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43477 = null;
var count__43478 = (0);
var i__43479 = (0);
while(true){
if((i__43479 < count__43478)){
var event = chunk__43477.cljs$core$IIndexed$_nth$arity$2(null,i__43479);
re_frame.router.dispatch(event);


var G__43541 = seq__43476;
var G__43542 = chunk__43477;
var G__43543 = count__43478;
var G__43544 = (i__43479 + (1));
seq__43476 = G__43541;
chunk__43477 = G__43542;
count__43478 = G__43543;
i__43479 = G__43544;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43476);
if(temp__5735__auto__){
var seq__43476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43476__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43476__$1);
var G__43547 = cljs.core.chunk_rest(seq__43476__$1);
var G__43548 = c__4550__auto__;
var G__43549 = cljs.core.count(c__4550__auto__);
var G__43550 = (0);
seq__43476 = G__43547;
chunk__43477 = G__43548;
count__43478 = G__43549;
i__43479 = G__43550;
continue;
} else {
var event = cljs.core.first(seq__43476__$1);
re_frame.router.dispatch(event);


var G__43551 = cljs.core.next(seq__43476__$1);
var G__43552 = null;
var G__43553 = (0);
var G__43554 = (0);
seq__43476 = G__43551;
chunk__43477 = G__43552;
count__43478 = G__43553;
i__43479 = G__43554;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__43484 = cljs.core.seq(value);
var chunk__43485 = null;
var count__43486 = (0);
var i__43487 = (0);
while(true){
if((i__43487 < count__43486)){
var event = chunk__43485.cljs$core$IIndexed$_nth$arity$2(null,i__43487);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43559 = seq__43484;
var G__43560 = chunk__43485;
var G__43561 = count__43486;
var G__43562 = (i__43487 + (1));
seq__43484 = G__43559;
chunk__43485 = G__43560;
count__43486 = G__43561;
i__43487 = G__43562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43484);
if(temp__5735__auto__){
var seq__43484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43484__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43484__$1);
var G__43563 = cljs.core.chunk_rest(seq__43484__$1);
var G__43564 = c__4550__auto__;
var G__43565 = cljs.core.count(c__4550__auto__);
var G__43566 = (0);
seq__43484 = G__43563;
chunk__43485 = G__43564;
count__43486 = G__43565;
i__43487 = G__43566;
continue;
} else {
var event = cljs.core.first(seq__43484__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43567 = cljs.core.next(seq__43484__$1);
var G__43568 = null;
var G__43569 = (0);
var G__43570 = (0);
seq__43484 = G__43567;
chunk__43485 = G__43568;
count__43486 = G__43569;
i__43487 = G__43570;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
