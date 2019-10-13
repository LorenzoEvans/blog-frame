goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51650){
var map__51651 = p__51650;
var map__51651__$1 = (((((!((map__51651 == null))))?(((((map__51651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51651):map__51651);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51653_51697 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51654_51698 = null;
var count__51655_51699 = (0);
var i__51656_51700 = (0);
while(true){
if((i__51656_51700 < count__51655_51699)){
var vec__51667_51704 = chunk__51654_51698.cljs$core$IIndexed$_nth$arity$2(null,i__51656_51700);
var k_51705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667_51704,(0),null);
var cb_51706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51667_51704,(1),null);
try{var G__51671_51708 = cljs.core.deref(re_frame.trace.traces);
(cb_51706.cljs$core$IFn$_invoke$arity$1 ? cb_51706.cljs$core$IFn$_invoke$arity$1(G__51671_51708) : cb_51706.call(null,G__51671_51708));
}catch (e51670){var e_51710 = e51670;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51705,"while storing",cljs.core.deref(re_frame.trace.traces),e_51710], 0));
}

var G__51711 = seq__51653_51697;
var G__51712 = chunk__51654_51698;
var G__51713 = count__51655_51699;
var G__51714 = (i__51656_51700 + (1));
seq__51653_51697 = G__51711;
chunk__51654_51698 = G__51712;
count__51655_51699 = G__51713;
i__51656_51700 = G__51714;
continue;
} else {
var temp__5735__auto___51715 = cljs.core.seq(seq__51653_51697);
if(temp__5735__auto___51715){
var seq__51653_51716__$1 = temp__5735__auto___51715;
if(cljs.core.chunked_seq_QMARK_(seq__51653_51716__$1)){
var c__4550__auto___51717 = cljs.core.chunk_first(seq__51653_51716__$1);
var G__51718 = cljs.core.chunk_rest(seq__51653_51716__$1);
var G__51719 = c__4550__auto___51717;
var G__51720 = cljs.core.count(c__4550__auto___51717);
var G__51721 = (0);
seq__51653_51697 = G__51718;
chunk__51654_51698 = G__51719;
count__51655_51699 = G__51720;
i__51656_51700 = G__51721;
continue;
} else {
var vec__51672_51722 = cljs.core.first(seq__51653_51716__$1);
var k_51723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51672_51722,(0),null);
var cb_51724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51672_51722,(1),null);
try{var G__51676_51727 = cljs.core.deref(re_frame.trace.traces);
(cb_51724.cljs$core$IFn$_invoke$arity$1 ? cb_51724.cljs$core$IFn$_invoke$arity$1(G__51676_51727) : cb_51724.call(null,G__51676_51727));
}catch (e51675){var e_51732 = e51675;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51723,"while storing",cljs.core.deref(re_frame.trace.traces),e_51732], 0));
}

var G__51733 = cljs.core.next(seq__51653_51716__$1);
var G__51734 = null;
var G__51735 = (0);
var G__51736 = (0);
seq__51653_51697 = G__51733;
chunk__51654_51698 = G__51734;
count__51655_51699 = G__51735;
i__51656_51700 = G__51736;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
