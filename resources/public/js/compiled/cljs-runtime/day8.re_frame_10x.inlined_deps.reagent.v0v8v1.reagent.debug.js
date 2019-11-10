goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37900__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37901__i = 0, G__37901__a = new Array(arguments.length -  0);
while (G__37901__i < G__37901__a.length) {G__37901__a[G__37901__i] = arguments[G__37901__i + 0]; ++G__37901__i;}
  args = new cljs.core.IndexedSeq(G__37901__a,0,null);
} 
return G__37900__delegate.call(this,args);};
G__37900.cljs$lang$maxFixedArity = 0;
G__37900.cljs$lang$applyTo = (function (arglist__37902){
var args = cljs.core.seq(arglist__37902);
return G__37900__delegate(args);
});
G__37900.cljs$core$IFn$_invoke$arity$variadic = G__37900__delegate;
return G__37900;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37903__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37904__i = 0, G__37904__a = new Array(arguments.length -  0);
while (G__37904__i < G__37904__a.length) {G__37904__a[G__37904__i] = arguments[G__37904__i + 0]; ++G__37904__i;}
  args = new cljs.core.IndexedSeq(G__37904__a,0,null);
} 
return G__37903__delegate.call(this,args);};
G__37903.cljs$lang$maxFixedArity = 0;
G__37903.cljs$lang$applyTo = (function (arglist__37905){
var args = cljs.core.seq(arglist__37905);
return G__37903__delegate(args);
});
G__37903.cljs$core$IFn$_invoke$arity$variadic = G__37903__delegate;
return G__37903;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = true;

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.js.map
