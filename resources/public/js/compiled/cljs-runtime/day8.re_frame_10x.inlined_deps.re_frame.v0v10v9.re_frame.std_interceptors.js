goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('clojure.data');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `js/console.debug`. See examples/todomvc/src/events.cljs for use.
 * 
 *   Output includes:
 *   1. the event vector
 *   2. a `clojure.data/diff` of db, before vs after, which shows
 *   the changes caused by the event handler.  You will absolutely have
 *   to understand https://clojuredocs.org/clojure.data/diff to
 *   understand the output.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So condition it out like this :
 * 
 *    (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.core/reg-event-db
 *       :evt-id
 *       [(when ^boolean goog.DEBUG day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.core/debug)]  ;; <-- conditional
 *       (fn [db v]
 *         ...))
 * 
 *   To make this code fragment work, you'll also have to set goog.DEBUG to
 *   false in your production builds - look in `project.clj` of /examples/todomvc.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$debug_before(context){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], 0));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$debug_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No :db changes caused by:",event], 0));
} else {
var vec__41026_41108 = clojure.data.diff(orig_db,new_db);
var only_before_41109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41026_41108,(0),null);
var only_after_41110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41026_41108,(1),null);
var db_changed_QMARK__41111 = (((!((only_before_41109 == null)))) || ((!((only_after_41110 == null)))));
if(db_changed_QMARK__41111){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",event], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_41109], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_41110], 0));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no app-db changes caused by:",event], 0));
}
}

return context;
})], 0));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing event handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$trimv_before(context){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)));
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$trimv_after(context){
return cljs.core.assoc_in(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.dissoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.db_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__41032 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41033 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41033;

try{try{var map__41038 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__41038__$1 = (((((!((map__41038 == null))))?(((((map__41038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41038):map__41038);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41038__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41038__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40774__auto___41121 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__40775__auto___41122 = (end__40774__auto___41121 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40775__auto___41122,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__40774__auto___41121);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41032;
}})():(function (){var map__41041 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__41041__$1 = (((((!((map__41041 == null))))?(((((map__41041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41041):map__41041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__40776__auto___41125 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__40776__auto___41125;

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.fx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__41043 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__41043__$1 = (((((!((map__41043 == null))))?(((((map__41043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41043):map__41043);
var coeffects = map__41043__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"event","event",301435442));
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__41048 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41049 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41049;

try{try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40774__auto___41161 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__40775__auto___41162 = (end__40774__auto___41161 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40775__auto___41162,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__40774__auto___41161);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41048;
}})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event))));
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__40776__auto___41163 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__40776__auto___41163;

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.ctx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__41053 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41054 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41054;

try{try{return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40774__auto___41164 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now();
var duration__40775__auto___41165 = (end__40774__auto___41164 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40775__auto___41165,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_(end__40774__auto___41164);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41053;
}})():(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context)));
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__40776__auto___41174 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__40776__auto___41174;

} else {
}

return new_context;
})], 0));
});
/**
 * returns an interceptor whose `:before` substitutes the coeffects `:db` with
 *   a sub-path of `:db`. Within `:after` it grafts the handler's return value
 *   back into db, at the right path.
 * 
 *   So, its overall action is to make the event handler behave like the function
 *   you might give to clojure's `update-in`.
 * 
 *   Examples:
 * 
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *    (reg-event-db
 *      :event-id
 *      (path [:a :b])  ;; used here, in interceptor chain
 *      (fn [b v]       ;; 1st arg is now not db. Is the value from path [:a :b] within db
 *        ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41180 = arguments.length;
var i__4731__auto___41181 = (0);
while(true){
if((i__4731__auto___41181 < len__4730__auto___41180)){
args__4736__auto__.push((arguments[i__4731__auto___41181]));

var G__41182 = (i__4731__auto___41181 + (1));
i__4731__auto___41181 = G__41182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_(path)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),((function (path,db_store_key){
return (function (context){
var original_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
});})(path,db_store_key))
,new cljs.core.Keyword(null,"after","after",594996914),((function (path,db_store_key){
return (function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479))){
return context_SINGLEQUOTE_;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(original_db,path,db));
}
});})(path,db_store_key))
], 0));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq41070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41070));
});

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   https://twitter.com/nathanmarz/status/879722740776939520
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.enrich = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$enrich(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
/**
 * returns an interceptor which runs a given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   Examples use can be seen in the /examples/todomvc:
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.after = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$after(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into
 *   `db`, rather than out). It observes N paths within `db` and if any of them
 *   test not identical? to their previous value  (as a result of a event handler
 *   being run) then it runs `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *    (defn my-f
 *      [a-val b-val]
 *      ... some computation on a and b in here)
 * 
 *    (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$on_changes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41211 = arguments.length;
var i__4731__auto___41212 = (0);
while(true){
if((i__4731__auto___41212 < len__4730__auto___41211)){
args__4736__auto__.push((arguments[i__4731__auto___41212]));

var G__41213 = (i__4731__auto___41212 + (1));
i__4731__auto___41212 = G__41213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$on_change_after(context){
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,old_db){
return (function (p1__41088_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__41088_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,old_db,new_ins){
return (function (p1__41089_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__41089_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = (function (){var and__4120__auto__ = cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__4120__auto__){
return cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq41090){
var G__41091 = cljs.core.first(seq41090);
var seq41090__$1 = cljs.core.next(seq41090);
var G__41092 = cljs.core.first(seq41090__$1);
var seq41090__$2 = cljs.core.next(seq41090__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41091,G__41092,seq41090__$2);
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.js.map
