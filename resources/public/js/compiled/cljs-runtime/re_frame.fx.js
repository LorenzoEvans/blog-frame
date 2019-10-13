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
var _STAR_current_trace_STAR__orig_val__51906 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51907 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51907;

try{try{var seq__51908 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51909 = null;
var count__51910 = (0);
var i__51911 = (0);
while(true){
if((i__51911 < count__51910)){
var vec__51918 = chunk__51909.cljs$core$IIndexed$_nth$arity$2(null,i__51911);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51918,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51918,(1),null);
var temp__5733__auto___51973 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51973)){
var effect_fn_51974 = temp__5733__auto___51973;
(effect_fn_51974.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51974.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51974.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51975 = seq__51908;
var G__51976 = chunk__51909;
var G__51977 = count__51910;
var G__51978 = (i__51911 + (1));
seq__51908 = G__51975;
chunk__51909 = G__51976;
count__51910 = G__51977;
i__51911 = G__51978;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51908);
if(temp__5735__auto__){
var seq__51908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51908__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51908__$1);
var G__51983 = cljs.core.chunk_rest(seq__51908__$1);
var G__51984 = c__4550__auto__;
var G__51985 = cljs.core.count(c__4550__auto__);
var G__51986 = (0);
seq__51908 = G__51983;
chunk__51909 = G__51984;
count__51910 = G__51985;
i__51911 = G__51986;
continue;
} else {
var vec__51921 = cljs.core.first(seq__51908__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51921,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51921,(1),null);
var temp__5733__auto___51987 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51987)){
var effect_fn_51988 = temp__5733__auto___51987;
(effect_fn_51988.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51988.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51988.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51989 = cljs.core.next(seq__51908__$1);
var G__51990 = null;
var G__51991 = (0);
var G__51992 = (0);
seq__51908 = G__51989;
chunk__51909 = G__51990;
count__51910 = G__51991;
i__51911 = G__51992;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51630__auto___51993 = re_frame.interop.now();
var duration__51631__auto___51994 = (end__51630__auto___51993 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51631__auto___51994,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51630__auto___51993);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51906;
}} else {
var seq__51926 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51927 = null;
var count__51928 = (0);
var i__51929 = (0);
while(true){
if((i__51929 < count__51928)){
var vec__51940 = chunk__51927.cljs$core$IIndexed$_nth$arity$2(null,i__51929);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51940,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51940,(1),null);
var temp__5733__auto___51996 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51996)){
var effect_fn_51997 = temp__5733__auto___51996;
(effect_fn_51997.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51997.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51997.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51998 = seq__51926;
var G__51999 = chunk__51927;
var G__52000 = count__51928;
var G__52001 = (i__51929 + (1));
seq__51926 = G__51998;
chunk__51927 = G__51999;
count__51928 = G__52000;
i__51929 = G__52001;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51926);
if(temp__5735__auto__){
var seq__51926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51926__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51926__$1);
var G__52002 = cljs.core.chunk_rest(seq__51926__$1);
var G__52003 = c__4550__auto__;
var G__52004 = cljs.core.count(c__4550__auto__);
var G__52005 = (0);
seq__51926 = G__52002;
chunk__51927 = G__52003;
count__51928 = G__52004;
i__51929 = G__52005;
continue;
} else {
var vec__51943 = cljs.core.first(seq__51926__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51943,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51943,(1),null);
var temp__5733__auto___52006 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52006)){
var effect_fn_52007 = temp__5733__auto___52006;
(effect_fn_52007.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52007.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52007.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52008 = cljs.core.next(seq__51926__$1);
var G__52009 = null;
var G__52010 = (0);
var G__52011 = (0);
seq__51926 = G__52008;
chunk__51927 = G__52009;
count__51928 = G__52010;
i__51929 = G__52011;
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
var seq__51946 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51947 = null;
var count__51948 = (0);
var i__51949 = (0);
while(true){
if((i__51949 < count__51948)){
var map__51955 = chunk__51947.cljs$core$IIndexed$_nth$arity$2(null,i__51949);
var map__51955__$1 = (((((!((map__51955 == null))))?(((((map__51955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51955):map__51955);
var effect = map__51955__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51955__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51955__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51946,chunk__51947,count__51948,i__51949,map__51955,map__51955__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51946,chunk__51947,count__51948,i__51949,map__51955,map__51955__$1,effect,ms,dispatch))
,ms);
}


var G__52014 = seq__51946;
var G__52015 = chunk__51947;
var G__52016 = count__51948;
var G__52017 = (i__51949 + (1));
seq__51946 = G__52014;
chunk__51947 = G__52015;
count__51948 = G__52016;
i__51949 = G__52017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51946);
if(temp__5735__auto__){
var seq__51946__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51946__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51946__$1);
var G__52018 = cljs.core.chunk_rest(seq__51946__$1);
var G__52019 = c__4550__auto__;
var G__52020 = cljs.core.count(c__4550__auto__);
var G__52021 = (0);
seq__51946 = G__52018;
chunk__51947 = G__52019;
count__51948 = G__52020;
i__51949 = G__52021;
continue;
} else {
var map__51957 = cljs.core.first(seq__51946__$1);
var map__51957__$1 = (((((!((map__51957 == null))))?(((((map__51957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51957):map__51957);
var effect = map__51957__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51946,chunk__51947,count__51948,i__51949,map__51957,map__51957__$1,effect,ms,dispatch,seq__51946__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51946,chunk__51947,count__51948,i__51949,map__51957,map__51957__$1,effect,ms,dispatch,seq__51946__$1,temp__5735__auto__))
,ms);
}


var G__52024 = cljs.core.next(seq__51946__$1);
var G__52025 = null;
var G__52026 = (0);
var G__52027 = (0);
seq__51946 = G__52024;
chunk__51947 = G__52025;
count__51948 = G__52026;
i__51949 = G__52027;
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
var seq__51964 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51965 = null;
var count__51966 = (0);
var i__51967 = (0);
while(true){
if((i__51967 < count__51966)){
var event = chunk__51965.cljs$core$IIndexed$_nth$arity$2(null,i__51967);
re_frame.router.dispatch(event);


var G__52029 = seq__51964;
var G__52030 = chunk__51965;
var G__52031 = count__51966;
var G__52032 = (i__51967 + (1));
seq__51964 = G__52029;
chunk__51965 = G__52030;
count__51966 = G__52031;
i__51967 = G__52032;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51964);
if(temp__5735__auto__){
var seq__51964__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51964__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51964__$1);
var G__52033 = cljs.core.chunk_rest(seq__51964__$1);
var G__52034 = c__4550__auto__;
var G__52035 = cljs.core.count(c__4550__auto__);
var G__52036 = (0);
seq__51964 = G__52033;
chunk__51965 = G__52034;
count__51966 = G__52035;
i__51967 = G__52036;
continue;
} else {
var event = cljs.core.first(seq__51964__$1);
re_frame.router.dispatch(event);


var G__52037 = cljs.core.next(seq__51964__$1);
var G__52038 = null;
var G__52039 = (0);
var G__52040 = (0);
seq__51964 = G__52037;
chunk__51965 = G__52038;
count__51966 = G__52039;
i__51967 = G__52040;
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
var seq__51969 = cljs.core.seq(value);
var chunk__51970 = null;
var count__51971 = (0);
var i__51972 = (0);
while(true){
if((i__51972 < count__51971)){
var event = chunk__51970.cljs$core$IIndexed$_nth$arity$2(null,i__51972);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52041 = seq__51969;
var G__52042 = chunk__51970;
var G__52043 = count__51971;
var G__52044 = (i__51972 + (1));
seq__51969 = G__52041;
chunk__51970 = G__52042;
count__51971 = G__52043;
i__51972 = G__52044;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51969);
if(temp__5735__auto__){
var seq__51969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51969__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51969__$1);
var G__52045 = cljs.core.chunk_rest(seq__51969__$1);
var G__52046 = c__4550__auto__;
var G__52047 = cljs.core.count(c__4550__auto__);
var G__52048 = (0);
seq__51969 = G__52045;
chunk__51970 = G__52046;
count__51971 = G__52047;
i__51972 = G__52048;
continue;
} else {
var event = cljs.core.first(seq__51969__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52049 = cljs.core.next(seq__51969__$1);
var G__52050 = null;
var G__52051 = (0);
var G__52052 = (0);
seq__51969 = G__52049;
chunk__51970 = G__52050;
count__51971 = G__52051;
i__51972 = G__52052;
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
