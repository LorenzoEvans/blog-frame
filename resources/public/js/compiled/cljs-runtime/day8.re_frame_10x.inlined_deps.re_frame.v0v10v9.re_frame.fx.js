goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__41051 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41052 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41052;

try{try{var seq__41055 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41056 = null;
var count__41057 = (0);
var i__41058 = (0);
while(true){
if((i__41058 < count__41057)){
var vec__41067 = chunk__41056.cljs$core$IIndexed$_nth$arity$2(null,i__41058);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(1),null);
var temp__5733__auto___41123 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41123)){
var effect_fn_41124 = temp__5733__auto___41123;
(effect_fn_41124.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41124.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41124.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41126 = seq__41055;
var G__41127 = chunk__41056;
var G__41128 = count__41057;
var G__41129 = (i__41058 + (1));
seq__41055 = G__41126;
chunk__41056 = G__41127;
count__41057 = G__41128;
i__41058 = G__41129;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41055);
if(temp__5735__auto__){
var seq__41055__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41055__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41055__$1);
var G__41130 = cljs.core.chunk_rest(seq__41055__$1);
var G__41131 = c__4550__auto__;
var G__41132 = cljs.core.count(c__4550__auto__);
var G__41133 = (0);
seq__41055 = G__41130;
chunk__41056 = G__41131;
count__41057 = G__41132;
i__41058 = G__41133;
continue;
} else {
var vec__41072 = cljs.core.first(seq__41055__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41072,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41072,(1),null);
var temp__5733__auto___41134 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41134)){
var effect_fn_41135 = temp__5733__auto___41134;
(effect_fn_41135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41135.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41136 = cljs.core.next(seq__41055__$1);
var G__41137 = null;
var G__41138 = (0);
var G__41139 = (0);
seq__41055 = G__41136;
chunk__41056 = G__41137;
count__41057 = G__41138;
i__41058 = G__41139;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40774__auto___41140 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__40775__auto___41141 = (end__40774__auto___41140 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40775__auto___41141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__40774__auto___41140);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41051;
}} else {
var seq__41075 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41076 = null;
var count__41077 = (0);
var i__41078 = (0);
while(true){
if((i__41078 < count__41077)){
var vec__41085 = chunk__41076.cljs$core$IIndexed$_nth$arity$2(null,i__41078);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41085,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41085,(1),null);
var temp__5733__auto___41143 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41143)){
var effect_fn_41144 = temp__5733__auto___41143;
(effect_fn_41144.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41144.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41144.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41145 = seq__41075;
var G__41146 = chunk__41076;
var G__41147 = count__41077;
var G__41148 = (i__41078 + (1));
seq__41075 = G__41145;
chunk__41076 = G__41146;
count__41077 = G__41147;
i__41078 = G__41148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41075);
if(temp__5735__auto__){
var seq__41075__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41075__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41075__$1);
var G__41149 = cljs.core.chunk_rest(seq__41075__$1);
var G__41150 = c__4550__auto__;
var G__41151 = cljs.core.count(c__4550__auto__);
var G__41152 = (0);
seq__41075 = G__41149;
chunk__41076 = G__41150;
count__41077 = G__41151;
i__41078 = G__41152;
continue;
} else {
var vec__41093 = cljs.core.first(seq__41075__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41093,(1),null);
var temp__5733__auto___41153 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41153)){
var effect_fn_41154 = temp__5733__auto___41153;
(effect_fn_41154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41154.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41155 = cljs.core.next(seq__41075__$1);
var G__41156 = null;
var G__41157 = (0);
var G__41158 = (0);
seq__41075 = G__41155;
chunk__41076 = G__41156;
count__41077 = G__41157;
i__41078 = G__41158;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41096 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41097 = null;
var count__41098 = (0);
var i__41099 = (0);
while(true){
if((i__41099 < count__41098)){
var map__41104 = chunk__41097.cljs$core$IIndexed$_nth$arity$2(null,i__41099);
var map__41104__$1 = (((((!((map__41104 == null))))?(((((map__41104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41104):map__41104);
var effect = map__41104__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41104__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41104__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__41096,chunk__41097,count__41098,i__41099,map__41104,map__41104__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__41096,chunk__41097,count__41098,i__41099,map__41104,map__41104__$1,effect,ms,dispatch))
,ms);
}


var G__41166 = seq__41096;
var G__41167 = chunk__41097;
var G__41168 = count__41098;
var G__41169 = (i__41099 + (1));
seq__41096 = G__41166;
chunk__41097 = G__41167;
count__41098 = G__41168;
i__41099 = G__41169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41096);
if(temp__5735__auto__){
var seq__41096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41096__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41096__$1);
var G__41170 = cljs.core.chunk_rest(seq__41096__$1);
var G__41171 = c__4550__auto__;
var G__41172 = cljs.core.count(c__4550__auto__);
var G__41173 = (0);
seq__41096 = G__41170;
chunk__41097 = G__41171;
count__41098 = G__41172;
i__41099 = G__41173;
continue;
} else {
var map__41106 = cljs.core.first(seq__41096__$1);
var map__41106__$1 = (((((!((map__41106 == null))))?(((((map__41106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41106):map__41106);
var effect = map__41106__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41106__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41106__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_(((function (seq__41096,chunk__41097,count__41098,i__41099,map__41106,map__41106__$1,effect,ms,dispatch,seq__41096__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(dispatch);
});})(seq__41096,chunk__41097,count__41098,i__41099,map__41106,map__41106__$1,effect,ms,dispatch,seq__41096__$1,temp__5735__auto__))
,ms);
}


var G__41176 = cljs.core.next(seq__41096__$1);
var G__41177 = null;
var G__41178 = (0);
var G__41179 = (0);
seq__41096 = G__41176;
chunk__41097 = G__41177;
count__41098 = G__41178;
i__41099 = G__41179;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__41112 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41113 = null;
var count__41114 = (0);
var i__41115 = (0);
while(true){
if((i__41115 < count__41114)){
var event = chunk__41113.cljs$core$IIndexed$_nth$arity$2(null,i__41115);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__41195 = seq__41112;
var G__41196 = chunk__41113;
var G__41197 = count__41114;
var G__41198 = (i__41115 + (1));
seq__41112 = G__41195;
chunk__41113 = G__41196;
count__41114 = G__41197;
i__41115 = G__41198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41112);
if(temp__5735__auto__){
var seq__41112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41112__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41112__$1);
var G__41199 = cljs.core.chunk_rest(seq__41112__$1);
var G__41200 = c__4550__auto__;
var G__41201 = cljs.core.count(c__4550__auto__);
var G__41202 = (0);
seq__41112 = G__41199;
chunk__41113 = G__41200;
count__41114 = G__41201;
i__41115 = G__41202;
continue;
} else {
var event = cljs.core.first(seq__41112__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch(event);


var G__41203 = cljs.core.next(seq__41112__$1);
var G__41204 = null;
var G__41205 = (0);
var G__41206 = (0);
seq__41112 = G__41203;
chunk__41113 = G__41204;
count__41114 = G__41205;
i__41115 = G__41206;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__41117 = cljs.core.seq(value);
var chunk__41118 = null;
var count__41119 = (0);
var i__41120 = (0);
while(true){
if((i__41120 < count__41119)){
var event = chunk__41118.cljs$core$IIndexed$_nth$arity$2(null,i__41120);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41207 = seq__41117;
var G__41208 = chunk__41118;
var G__41209 = count__41119;
var G__41210 = (i__41120 + (1));
seq__41117 = G__41207;
chunk__41118 = G__41208;
count__41119 = G__41209;
i__41120 = G__41210;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41117);
if(temp__5735__auto__){
var seq__41117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41117__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41117__$1);
var G__41214 = cljs.core.chunk_rest(seq__41117__$1);
var G__41215 = c__4550__auto__;
var G__41216 = cljs.core.count(c__4550__auto__);
var G__41217 = (0);
seq__41117 = G__41214;
chunk__41118 = G__41215;
count__41119 = G__41216;
i__41120 = G__41217;
continue;
} else {
var event = cljs.core.first(seq__41117__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41218 = cljs.core.next(seq__41117__$1);
var G__41219 = null;
var G__41220 = (0);
var G__41221 = (0);
seq__41117 = G__41218;
chunk__41118 = G__41219;
count__41119 = G__41220;
i__41120 = G__41221;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.js.map
