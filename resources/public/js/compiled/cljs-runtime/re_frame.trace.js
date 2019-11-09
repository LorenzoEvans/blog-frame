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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43174){
var map__43175 = p__43174;
var map__43175__$1 = (((((!((map__43175 == null))))?(((((map__43175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43175):map__43175);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__43177_43204 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__43178_43205 = null;
var count__43179_43206 = (0);
var i__43180_43207 = (0);
while(true){
if((i__43180_43207 < count__43179_43206)){
var vec__43191_43209 = chunk__43178_43205.cljs$core$IIndexed$_nth$arity$2(null,i__43180_43207);
var k_43210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191_43209,(0),null);
var cb_43211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191_43209,(1),null);
try{var G__43195_43216 = cljs.core.deref(re_frame.trace.traces);
(cb_43211.cljs$core$IFn$_invoke$arity$1 ? cb_43211.cljs$core$IFn$_invoke$arity$1(G__43195_43216) : cb_43211.call(null,G__43195_43216));
}catch (e43194){var e_43220 = e43194;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43210,"while storing",cljs.core.deref(re_frame.trace.traces),e_43220], 0));
}

var G__43235 = seq__43177_43204;
var G__43236 = chunk__43178_43205;
var G__43237 = count__43179_43206;
var G__43238 = (i__43180_43207 + (1));
seq__43177_43204 = G__43235;
chunk__43178_43205 = G__43236;
count__43179_43206 = G__43237;
i__43180_43207 = G__43238;
continue;
} else {
var temp__5735__auto___43239 = cljs.core.seq(seq__43177_43204);
if(temp__5735__auto___43239){
var seq__43177_43242__$1 = temp__5735__auto___43239;
if(cljs.core.chunked_seq_QMARK_(seq__43177_43242__$1)){
var c__4550__auto___43243 = cljs.core.chunk_first(seq__43177_43242__$1);
var G__43244 = cljs.core.chunk_rest(seq__43177_43242__$1);
var G__43245 = c__4550__auto___43243;
var G__43246 = cljs.core.count(c__4550__auto___43243);
var G__43247 = (0);
seq__43177_43204 = G__43244;
chunk__43178_43205 = G__43245;
count__43179_43206 = G__43246;
i__43180_43207 = G__43247;
continue;
} else {
var vec__43196_43248 = cljs.core.first(seq__43177_43242__$1);
var k_43249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43196_43248,(0),null);
var cb_43250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43196_43248,(1),null);
try{var G__43200_43251 = cljs.core.deref(re_frame.trace.traces);
(cb_43250.cljs$core$IFn$_invoke$arity$1 ? cb_43250.cljs$core$IFn$_invoke$arity$1(G__43200_43251) : cb_43250.call(null,G__43200_43251));
}catch (e43199){var e_43252 = e43199;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43249,"while storing",cljs.core.deref(re_frame.trace.traces),e_43252], 0));
}

var G__43259 = cljs.core.next(seq__43177_43242__$1);
var G__43260 = null;
var G__43261 = (0);
var G__43262 = (0);
seq__43177_43204 = G__43259;
chunk__43178_43205 = G__43260;
count__43179_43206 = G__43261;
i__43180_43207 = G__43262;
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
