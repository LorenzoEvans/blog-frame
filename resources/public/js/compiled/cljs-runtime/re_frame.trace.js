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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__44553){
var map__44554 = p__44553;
var map__44554__$1 = (((((!((map__44554 == null))))?(((((map__44554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44554):map__44554);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__44556_44586 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__44557_44587 = null;
var count__44558_44588 = (0);
var i__44559_44589 = (0);
while(true){
if((i__44559_44589 < count__44558_44588)){
var vec__44570_44595 = chunk__44557_44587.cljs$core$IIndexed$_nth$arity$2(null,i__44559_44589);
var k_44596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44570_44595,(0),null);
var cb_44597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44570_44595,(1),null);
try{var G__44574_44604 = cljs.core.deref(re_frame.trace.traces);
(cb_44597.cljs$core$IFn$_invoke$arity$1 ? cb_44597.cljs$core$IFn$_invoke$arity$1(G__44574_44604) : cb_44597.call(null,G__44574_44604));
}catch (e44573){var e_44605 = e44573;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44596,"while storing",cljs.core.deref(re_frame.trace.traces),e_44605], 0));
}

var G__44606 = seq__44556_44586;
var G__44607 = chunk__44557_44587;
var G__44608 = count__44558_44588;
var G__44609 = (i__44559_44589 + (1));
seq__44556_44586 = G__44606;
chunk__44557_44587 = G__44607;
count__44558_44588 = G__44608;
i__44559_44589 = G__44609;
continue;
} else {
var temp__5735__auto___44610 = cljs.core.seq(seq__44556_44586);
if(temp__5735__auto___44610){
var seq__44556_44613__$1 = temp__5735__auto___44610;
if(cljs.core.chunked_seq_QMARK_(seq__44556_44613__$1)){
var c__4550__auto___44614 = cljs.core.chunk_first(seq__44556_44613__$1);
var G__44615 = cljs.core.chunk_rest(seq__44556_44613__$1);
var G__44616 = c__4550__auto___44614;
var G__44617 = cljs.core.count(c__4550__auto___44614);
var G__44618 = (0);
seq__44556_44586 = G__44615;
chunk__44557_44587 = G__44616;
count__44558_44588 = G__44617;
i__44559_44589 = G__44618;
continue;
} else {
var vec__44575_44619 = cljs.core.first(seq__44556_44613__$1);
var k_44620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44575_44619,(0),null);
var cb_44621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44575_44619,(1),null);
try{var G__44579_44622 = cljs.core.deref(re_frame.trace.traces);
(cb_44621.cljs$core$IFn$_invoke$arity$1 ? cb_44621.cljs$core$IFn$_invoke$arity$1(G__44579_44622) : cb_44621.call(null,G__44579_44622));
}catch (e44578){var e_44623 = e44578;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44620,"while storing",cljs.core.deref(re_frame.trace.traces),e_44623], 0));
}

var G__44624 = cljs.core.next(seq__44556_44613__$1);
var G__44625 = null;
var G__44626 = (0);
var G__44627 = (0);
seq__44556_44586 = G__44624;
chunk__44557_44587 = G__44625;
count__44558_44588 = G__44626;
i__44559_44589 = G__44627;
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
