goog.provide('herb.core');
goog.require('cljs.core');
goog.require('herb.impl');
goog.require('herb.spec');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('herb.runtime');
/**
 * Initialize herb, takes a map of options:
 *   :vendors - a vector of vendor prefixes, ie [:webkit :moz]
 *   :auto-prefix - A set of CSS properties to auto prefix, ie #{:transition :border-radius} 
 */
herb.core.init_BANG_ = (function herb$core$init_BANG_(options){
var parsed = cljs.spec.alpha.conform(new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid input",cljs.spec.alpha.explain_data(new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options));
} else {
return cljs.core.reset_BANG_(herb.runtime.options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),herb.impl.convert_vendors(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (p__41733){
var vec__41734 = p__41733;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41734,(1),null);
return v;
});})(parsed))
,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(parsed))),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(options)], null));
}
});
/**
 * Joins multiple classes together, filtering out nils:
 *   ```clojure
 *   (join (<class fn-1) (<class fn-2))
 *   ```
 */
herb.core.join = (function herb$core$join(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41738 = arguments.length;
var i__4731__auto___41739 = (0);
while(true){
if((i__4731__auto___41739 < len__4730__auto___41738)){
args__4736__auto__.push((arguments[i__4731__auto___41739]));

var G__41740 = (i__4731__auto___41739 + (1));
i__4731__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return herb.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

herb.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,classes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("join takes one or more strings as arguments",cljs.spec.alpha.explain_data(new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes));
}
});

herb.core.join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
herb.core.join.cljs$lang$applyTo = (function (seq41737){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41737));
});


//# sourceMappingURL=herb.core.js.map
