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
var _STAR_current_trace_STAR__orig_val__44843 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44844 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44844;

try{try{var seq__44847 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44848 = null;
var count__44849 = (0);
var i__44850 = (0);
while(true){
if((i__44850 < count__44849)){
var vec__44859 = chunk__44848.cljs$core$IIndexed$_nth$arity$2(null,i__44850);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44859,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44859,(1),null);
var temp__5733__auto___44911 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44911)){
var effect_fn_44912 = temp__5733__auto___44911;
(effect_fn_44912.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44912.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44912.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44913 = seq__44847;
var G__44914 = chunk__44848;
var G__44915 = count__44849;
var G__44916 = (i__44850 + (1));
seq__44847 = G__44913;
chunk__44848 = G__44914;
count__44849 = G__44915;
i__44850 = G__44916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44847);
if(temp__5735__auto__){
var seq__44847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44847__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44847__$1);
var G__44917 = cljs.core.chunk_rest(seq__44847__$1);
var G__44918 = c__4550__auto__;
var G__44919 = cljs.core.count(c__4550__auto__);
var G__44920 = (0);
seq__44847 = G__44917;
chunk__44848 = G__44918;
count__44849 = G__44919;
i__44850 = G__44920;
continue;
} else {
var vec__44865 = cljs.core.first(seq__44847__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44865,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44865,(1),null);
var temp__5733__auto___44921 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44921)){
var effect_fn_44922 = temp__5733__auto___44921;
(effect_fn_44922.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44922.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44922.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44923 = cljs.core.next(seq__44847__$1);
var G__44924 = null;
var G__44925 = (0);
var G__44926 = (0);
seq__44847 = G__44923;
chunk__44848 = G__44924;
count__44849 = G__44925;
i__44850 = G__44926;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44533__auto___44927 = re_frame.interop.now();
var duration__44534__auto___44928 = (end__44533__auto___44927 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44534__auto___44928,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44533__auto___44927);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44843;
}} else {
var seq__44868 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44869 = null;
var count__44870 = (0);
var i__44871 = (0);
while(true){
if((i__44871 < count__44870)){
var vec__44878 = chunk__44869.cljs$core$IIndexed$_nth$arity$2(null,i__44871);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(1),null);
var temp__5733__auto___44932 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44932)){
var effect_fn_44933 = temp__5733__auto___44932;
(effect_fn_44933.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44933.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44933.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44934 = seq__44868;
var G__44935 = chunk__44869;
var G__44936 = count__44870;
var G__44937 = (i__44871 + (1));
seq__44868 = G__44934;
chunk__44869 = G__44935;
count__44870 = G__44936;
i__44871 = G__44937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44868);
if(temp__5735__auto__){
var seq__44868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44868__$1);
var G__44939 = cljs.core.chunk_rest(seq__44868__$1);
var G__44940 = c__4550__auto__;
var G__44941 = cljs.core.count(c__4550__auto__);
var G__44942 = (0);
seq__44868 = G__44939;
chunk__44869 = G__44940;
count__44870 = G__44941;
i__44871 = G__44942;
continue;
} else {
var vec__44881 = cljs.core.first(seq__44868__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44881,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44881,(1),null);
var temp__5733__auto___44943 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44943)){
var effect_fn_44944 = temp__5733__auto___44943;
(effect_fn_44944.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44944.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44944.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44945 = cljs.core.next(seq__44868__$1);
var G__44946 = null;
var G__44947 = (0);
var G__44948 = (0);
seq__44868 = G__44945;
chunk__44869 = G__44946;
count__44870 = G__44947;
i__44871 = G__44948;
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
var seq__44884 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44885 = null;
var count__44886 = (0);
var i__44887 = (0);
while(true){
if((i__44887 < count__44886)){
var map__44893 = chunk__44885.cljs$core$IIndexed$_nth$arity$2(null,i__44887);
var map__44893__$1 = (((((!((map__44893 == null))))?(((((map__44893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44893):map__44893);
var effect = map__44893__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44893__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44893__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__44884,chunk__44885,count__44886,i__44887,map__44893,map__44893__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__44884,chunk__44885,count__44886,i__44887,map__44893,map__44893__$1,effect,ms,dispatch))
,ms);
}


var G__44950 = seq__44884;
var G__44951 = chunk__44885;
var G__44952 = count__44886;
var G__44953 = (i__44887 + (1));
seq__44884 = G__44950;
chunk__44885 = G__44951;
count__44886 = G__44952;
i__44887 = G__44953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44884);
if(temp__5735__auto__){
var seq__44884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44884__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44884__$1);
var G__44956 = cljs.core.chunk_rest(seq__44884__$1);
var G__44957 = c__4550__auto__;
var G__44958 = cljs.core.count(c__4550__auto__);
var G__44959 = (0);
seq__44884 = G__44956;
chunk__44885 = G__44957;
count__44886 = G__44958;
i__44887 = G__44959;
continue;
} else {
var map__44900 = cljs.core.first(seq__44884__$1);
var map__44900__$1 = (((((!((map__44900 == null))))?(((((map__44900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44900):map__44900);
var effect = map__44900__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__44884,chunk__44885,count__44886,i__44887,map__44900,map__44900__$1,effect,ms,dispatch,seq__44884__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__44884,chunk__44885,count__44886,i__44887,map__44900,map__44900__$1,effect,ms,dispatch,seq__44884__$1,temp__5735__auto__))
,ms);
}


var G__44962 = cljs.core.next(seq__44884__$1);
var G__44963 = null;
var G__44964 = (0);
var G__44965 = (0);
seq__44884 = G__44962;
chunk__44885 = G__44963;
count__44886 = G__44964;
i__44887 = G__44965;
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
var seq__44902 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44903 = null;
var count__44904 = (0);
var i__44905 = (0);
while(true){
if((i__44905 < count__44904)){
var event = chunk__44903.cljs$core$IIndexed$_nth$arity$2(null,i__44905);
re_frame.router.dispatch(event);


var G__44968 = seq__44902;
var G__44969 = chunk__44903;
var G__44970 = count__44904;
var G__44971 = (i__44905 + (1));
seq__44902 = G__44968;
chunk__44903 = G__44969;
count__44904 = G__44970;
i__44905 = G__44971;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44902);
if(temp__5735__auto__){
var seq__44902__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44902__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44902__$1);
var G__44972 = cljs.core.chunk_rest(seq__44902__$1);
var G__44973 = c__4550__auto__;
var G__44974 = cljs.core.count(c__4550__auto__);
var G__44975 = (0);
seq__44902 = G__44972;
chunk__44903 = G__44973;
count__44904 = G__44974;
i__44905 = G__44975;
continue;
} else {
var event = cljs.core.first(seq__44902__$1);
re_frame.router.dispatch(event);


var G__44976 = cljs.core.next(seq__44902__$1);
var G__44977 = null;
var G__44978 = (0);
var G__44979 = (0);
seq__44902 = G__44976;
chunk__44903 = G__44977;
count__44904 = G__44978;
i__44905 = G__44979;
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
var seq__44906 = cljs.core.seq(value);
var chunk__44907 = null;
var count__44908 = (0);
var i__44909 = (0);
while(true){
if((i__44909 < count__44908)){
var event = chunk__44907.cljs$core$IIndexed$_nth$arity$2(null,i__44909);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__44980 = seq__44906;
var G__44981 = chunk__44907;
var G__44982 = count__44908;
var G__44983 = (i__44909 + (1));
seq__44906 = G__44980;
chunk__44907 = G__44981;
count__44908 = G__44982;
i__44909 = G__44983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44906);
if(temp__5735__auto__){
var seq__44906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44906__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44906__$1);
var G__44984 = cljs.core.chunk_rest(seq__44906__$1);
var G__44985 = c__4550__auto__;
var G__44986 = cljs.core.count(c__4550__auto__);
var G__44987 = (0);
seq__44906 = G__44984;
chunk__44907 = G__44985;
count__44908 = G__44986;
i__44909 = G__44987;
continue;
} else {
var event = cljs.core.first(seq__44906__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__44988 = cljs.core.next(seq__44906__$1);
var G__44989 = null;
var G__44990 = (0);
var G__44991 = (0);
seq__44906 = G__44988;
chunk__44907 = G__44989;
count__44908 = G__44990;
i__44909 = G__44991;
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
