goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$create_element(var_args){
var G__40221 = arguments.length;
switch (G__40221) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40264 = arguments.length;
var i__4731__auto___40265 = (0);
while(true){
if((i__4731__auto___40265 < len__4730__auto___40264)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40265]));

var G__40266 = (i__4731__auto___40265 + (1));
i__4731__auto___40265 = G__40266;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$lang$applyTo = (function (seq40217){
var G__40218 = cljs.core.first(seq40217);
var seq40217__$1 = cljs.core.next(seq40217);
var G__40219 = cljs.core.first(seq40217__$1);
var seq40217__$2 = cljs.core.next(seq40217__$1);
var G__40220 = cljs.core.first(seq40217__$2);
var seq40217__$3 = cljs.core.next(seq40217__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40218,G__40219,G__40220,seq40217__$3);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$as_element(form){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$render(var_args){
var G__40232 = arguments.length;
switch (G__40232) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_component_at_node(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.as_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.render;
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
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.force_update_all();

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update_all', day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$create_class(spec){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$force_update(var_args){
var G__40243 = arguments.length;
switch (G__40243) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render();
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$merge_props(defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$atom(var_args){
var G__40247 = arguments.length;
switch (G__40247) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40290 = arguments.length;
var i__4731__auto___40292 = (0);
while(true){
if((i__4731__auto___40292 < len__4730__auto___40290)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40292]));

var G__40293 = (i__4731__auto___40292 + (1));
i__4731__auto___40292 = G__40293;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$lang$applyTo = (function (seq40245){
var G__40246 = cljs.core.first(seq40245);
var seq40245__$1 = cljs.core.next(seq40245);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40246,seq40245__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40294 = arguments.length;
var i__4731__auto___40295 = (0);
while(true){
if((i__4731__auto___40295 < len__4730__auto___40294)){
args__4736__auto__.push((arguments[i__4731__auto___40295]));

var G__40298 = (i__4731__auto___40295 + (1));
i__4731__auto___40295 = G__40298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track.cljs$lang$applyTo = (function (seq40248){
var G__40249 = cljs.core.first(seq40248);
var seq40248__$1 = cljs.core.next(seq40248);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40249,seq40248__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40300 = arguments.length;
var i__4731__auto___40302 = (0);
while(true){
if((i__4731__auto___40302 < len__4730__auto___40300)){
args__4736__auto__.push((arguments[i__4731__auto___40302]));

var G__40303 = (i__4731__auto___40302 + (1));
i__4731__auto___40302 = G__40303;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track_BANG_(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq40250){
var G__40251 = cljs.core.first(seq40250);
var seq40250__$1 = cljs.core.next(seq40250);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40251,seq40250__$1);
});

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$wrap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40310 = arguments.length;
var i__4731__auto___40311 = (0);
while(true){
if((i__4731__auto___40311 < len__4730__auto___40310)){
args__4736__auto__.push((arguments[i__4731__auto___40311]));

var G__40312 = (i__4731__auto___40311 + (1));
i__4731__auto___40311 = G__40312;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_wrapper(value,reset_fn,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.wrap.cljs$lang$applyTo = (function (seq40252){
var G__40253 = cljs.core.first(seq40252);
var seq40252__$1 = cljs.core.next(seq40252);
var G__40254 = cljs.core.first(seq40252__$1);
var seq40252__$2 = cljs.core.next(seq40252__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40253,G__40254,seq40252__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$rswap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40322 = arguments.length;
var i__4731__auto___40323 = (0);
while(true){
if((i__4731__auto___40323 < len__4730__auto___40322)){
args__4736__auto__.push((arguments[i__4731__auto___40323]));

var G__40324 = (i__4731__auto___40323 + (1));
i__4731__auto___40323 = G__40324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4131__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__40255_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__40255_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5737__auto__ = (function (){var G__40260 = a.rswapfs;
if((G__40260 == null)){
return null;
} else {
return G__40260.shift();
}
})();
if((temp__5737__auto__ == null)){
return s;
} else {
var sf = temp__5737__auto__;
var G__40330 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__40330;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq40256){
var G__40257 = cljs.core.first(seq40256);
var seq40256__$1 = cljs.core.next(seq40256);
var G__40258 = cljs.core.first(seq40256__$1);
var seq40256__$2 = cljs.core.next(seq40256__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40257,G__40258,seq40256__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$partial(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40338 = arguments.length;
var i__4731__auto___40339 = (0);
while(true){
if((i__4731__auto___40339 < len__4730__auto___40338)){
args__4736__auto__.push((arguments[i__4731__auto___40339]));

var G__40340 = (i__4731__auto___40339 + (1));
i__4731__auto___40339 = G__40340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.make_partial_fn(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.partial.cljs$lang$applyTo = (function (seq40261){
var G__40262 = cljs.core.first(seq40261);
var seq40261__$1 = cljs.core.next(seq40261);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40262,seq40261__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$core$component_path(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.component.component_path(c);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.js.map
