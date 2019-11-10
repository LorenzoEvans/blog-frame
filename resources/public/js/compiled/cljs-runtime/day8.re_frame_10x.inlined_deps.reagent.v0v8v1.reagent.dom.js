goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__40152 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40153 = true;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40153;

try{var G__40154 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__40155 = container;
var G__40156 = ((function (G__40154,G__40155,_STAR_always_update_STAR__orig_val__40152,_STAR_always_update_STAR__temp_val__40153){
return (function (){
var _STAR_always_update_STAR__orig_val__40157 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40158 = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40158;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40157;
}});})(G__40154,G__40155,_STAR_always_update_STAR__orig_val__40152,_STAR_always_update_STAR__temp_val__40153))
;
return module$node_modules$react_dom$index.render(G__40154,G__40155,G__40156);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40152;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render(var_args){
var G__40163 = arguments.length;
switch (G__40163) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp(f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_();

var seq__40167_40172 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots)));
var chunk__40168_40173 = null;
var count__40169_40174 = (0);
var i__40170_40175 = (0);
while(true){
if((i__40170_40175 < count__40169_40174)){
var v_40176 = chunk__40168_40173.cljs$core$IIndexed$_nth$arity$2(null,i__40170_40175);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_40176);


var G__40177 = seq__40167_40172;
var G__40178 = chunk__40168_40173;
var G__40179 = count__40169_40174;
var G__40180 = (i__40170_40175 + (1));
seq__40167_40172 = G__40177;
chunk__40168_40173 = G__40178;
count__40169_40174 = G__40179;
i__40170_40175 = G__40180;
continue;
} else {
var temp__5735__auto___40181 = cljs.core.seq(seq__40167_40172);
if(temp__5735__auto___40181){
var seq__40167_40182__$1 = temp__5735__auto___40181;
if(cljs.core.chunked_seq_QMARK_(seq__40167_40182__$1)){
var c__4550__auto___40183 = cljs.core.chunk_first(seq__40167_40182__$1);
var G__40184 = cljs.core.chunk_rest(seq__40167_40182__$1);
var G__40185 = c__4550__auto___40183;
var G__40186 = cljs.core.count(c__4550__auto___40183);
var G__40187 = (0);
seq__40167_40172 = G__40184;
chunk__40168_40173 = G__40185;
count__40169_40174 = G__40186;
i__40170_40175 = G__40187;
continue;
} else {
var v_40188 = cljs.core.first(seq__40167_40182__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_40188);


var G__40190 = cljs.core.next(seq__40167_40182__$1);
var G__40191 = null;
var G__40192 = (0);
var G__40193 = (0);
seq__40167_40172 = G__40190;
chunk__40168_40173 = G__40191;
count__40169_40174 = G__40192;
i__40170_40175 = G__40193;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.js.map
