goog.provide('herb.runtime');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('garden.core');
goog.require('garden.selectors');
herb.runtime.dev_QMARK_ = goog.DEBUG;
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_styles !== 'undefined')){
} else {
/**
 * Atom containing all styles added to DOM. Takes the form of a map with
 *   classnames as keys. The map entry contains a `:data` which is Herb's
 *   representation of a style unit, `:data-string` which is what is used as the
 *   style data attribute in DOM, and `:css` which contains the rendered CSS
 *   string.
 */
herb.runtime.injected_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_keyframes !== 'undefined')){
} else {
/**
 * Atom containing all keyframe CSS added to DOM. Takes the form of a map
 *   with a namespace as a key. A map entry contains the keys `:data` which is herb's
 *   representation of a keyframe unit and `:css` which is the rendered CSS
 *   string
 */
herb.runtime.injected_keyframes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.injected_global !== 'undefined')){
} else {
/**
 * Atom containing all global style added to DOM. Takes the form of a map
 *   with namespace as keys. A map entry contains `:data` which is a collection of
 *   global styles for a given via defglobal call and `:css` that contains the
 *   rendered CSS
 */
herb.runtime.injected_global = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof herb !== 'undefined') && (typeof herb.runtime !== 'undefined') && (typeof herb.runtime.options !== 'undefined')){
} else {
/**
 * Atom containing a map with options passed from `herb.core/init!`.
 *   Entry includes `:vendors` and `:auto-prefix`
 */
herb.runtime.options = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Either update a style in state, or create it depending on existing state.
 */
herb.runtime.update_state = (function herb$runtime$update_state(state,ident,p__41583,css){
var map__41584 = p__41583;
var map__41584__$1 = (((((!((map__41584 == null))))?(((((map__41584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41584):map__41584);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,new cljs.core.Keyword(null,"data-string","data-string",1508502883));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var css__$1 = (function (){var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),ident);
if(cljs.core.truth_(temp__5733__auto__)){
var old = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(old)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css)].join('');
} else {
return css;
}
})();
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(data)], null),cljs.core.last(data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword(null,"data-string","data-string",1508502883)], null),data_string),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword(null,"element","element",1974019749)], null),element),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword(null,"css","css",1135045163)], null),css__$1);
});
herb.runtime.combinator_fns = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,">",">",-555517146),garden.selectors._GT_,new cljs.core.Keyword(null,"+","+",1913524883),garden.selectors._PLUS_,new cljs.core.Keyword(null,"-","-",-2112348439),garden.selectors._,new cljs.core.Keyword(null,"descendant","descendant",188254602),garden.selectors.descendant], null);
/**
 * Renders CSS, and appends to DOM. Ensure state is in sync with DOM.
 */
herb.runtime.render_style_BANG_ = (function herb$runtime$render_style_BANG_(identifier,new$){
var style = (function (){var vec__41586 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new$);
var classname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586,(0),null);
var map__41589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41586,(1),null);
var map__41589__$1 = (((((!((map__41589 == null))))?(((((map__41589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41589):map__41589);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var pseudo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"pseudo","pseudo",851696982));
var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var supports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"supports","supports",1501242067));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var vendors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"vendors","vendors",-153040496));
var combinators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41589__$1,new cljs.core.Keyword(null,"combinators","combinators",-1995039000));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [classname,cljs.core.with_meta(style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors], null)),pseudo,media,supports], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__41586,classname,map__41589,map__41589__$1,style,pseudo,media,supports,prefix,vendors,combinators){
return (function (p__41591){
var vec__41592 = p__41591;
var vec__41595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41592,(0),null);
var seq__41596 = cljs.core.seq(vec__41595);
var first__41597 = cljs.core.first(seq__41596);
var seq__41596__$1 = cljs.core.next(seq__41596);
var combinator = first__41597;
var elements = seq__41596__$1;
var style__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41592,(1),null);
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(herb.runtime.combinator_fns,combinator);
if(cljs.core.truth_(temp__5733__auto__)){
var cfn = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cfn,classname,elements),style__$1], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported combinator function ",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"combinator","combinator",1907795941),combinator,new cljs.core.Keyword(null,"elements","elements",657646735),elements,new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null));
}
});})(vec__41586,classname,map__41589,map__41589__$1,style,pseudo,media,supports,prefix,vendors,combinators))
,combinators)], null)], null);
})();
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.seq(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options))),new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),herb.runtime.dev_QMARK_,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.seq(new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(herb.runtime.options)))], null),style], 0));
var G__41598_41620 = new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(new$);
var G__41599_41621 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join('');
goog.dom.append(G__41598_41620,G__41599_41621);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(herb.runtime.injected_styles,herb.runtime.update_state,identifier,new$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([css_str], 0));
});
/**
 * Create an element in the DOM with an optional data-herb attribute
 */
herb.runtime.create_element_BANG_ = (function herb$runtime$create_element_BANG_(attr){
var head = document.head;
if((!((head == null)))){
} else {
throw (new Error(["Assert failed: ","An head element is required in the dom to inject the style.","\n","(some? head)"].join('')));
}

var element = document.createElement("style");
element.setAttribute("type","text/css");

if(cljs.core.truth_(attr)){
element.setAttribute("data-herb",attr);
} else {
}

head.appendChild(element);

return element;
});
/**
 * Create a style element in head if identifier is not already present Attach a
 *   data attr with namespace and call render-style with new element
 */
herb.runtime.create_style_BANG_ = (function herb$runtime$create_style_BANG_(identifier,new$,data_str){
var element = herb.runtime.create_element_BANG_(data_str);
return herb.runtime.render_style_BANG_(identifier,(function (){var G__41600 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new$,new cljs.core.Keyword(null,"element","element",1974019749),element], null);
if(cljs.core.truth_(data_str)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41600,new cljs.core.Keyword(null,"data-string","data-string",1508502883),data_str);
} else {
return G__41600;
}
})());
});
/**
 * Main interface to runtime. Takes an identifier, new garden style data
 *   structure, fully qualified name. Make sure to add style only where
 *   necessary. Returns the injected style state object.
 */
herb.runtime.inject_style_BANG_ = (function herb$runtime$inject_style_BANG_(identifier,new$,data_str){
var injected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),identifier);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(injected),cljs.core.first(new$));
if(cljs.core.not(injected)){
herb.runtime.create_style_BANG_(identifier,new$,data_str);
} else {
if((((!((injected == null)))) && (cljs.core.not(target)))){
herb.runtime.render_style_BANG_(identifier,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new$,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(injected),new cljs.core.Keyword(null,"data-string","data-string",1508502883),data_str], null));
} else {
}
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(herb.runtime.injected_styles),identifier);
});
/**
 * Inject collection of style objects in a common element, used by passing a
 *   dispatch in the form of :keyframes or :global
 */
herb.runtime.inject_obj_BANG_ = (function herb$runtime$inject_obj_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41624 = arguments.length;
var i__4731__auto___41625 = (0);
while(true){
if((i__4731__auto___41625 < len__4730__auto___41624)){
args__4736__auto__.push((arguments[i__4731__auto___41625]));

var G__41626 = (i__4731__auto___41625 + (1));
i__4731__auto___41625 = G__41626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

herb.runtime.inject_obj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sym,dispatch,obj){
var state = (function (){var G__41604 = dispatch;
var G__41604__$1 = (((G__41604 instanceof cljs.core.Keyword))?G__41604.fqn:null);
switch (G__41604__$1) {
case "global":
return herb.runtime.injected_global;

break;
case "keyframes":
return herb.runtime.injected_keyframes;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41604__$1)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),sym)),obj)){
return null;
} else {
var css_str = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),herb.runtime.dev_QMARK_], null),obj], 0));
var element_41628 = (function (){var or__4131__auto__ = document.querySelector(["style[data-herb=\"",cljs.core.name(dispatch),"\"]"].join(''));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return herb.runtime.create_element_BANG_(cljs.core.name(dispatch));
}
})();
var inner_html_41629 = goog.object.get(element_41628,"innerHTML");
var G__41605_41630 = element_41628;
var G__41606_41631 = "innerHTML";
var G__41607_41632 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_html_41629),(cljs.core.truth_(herb.runtime.dev_QMARK_)?"\n":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_str)].join('');
goog.object.set(G__41605_41630,G__41606_41631,G__41607_41632);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),obj,new cljs.core.Keyword(null,"css","css",1135045163),css_str], null));
}
});

herb.runtime.inject_obj_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
herb.runtime.inject_obj_BANG_.cljs$lang$applyTo = (function (seq41601){
var G__41602 = cljs.core.first(seq41601);
var seq41601__$1 = cljs.core.next(seq41601);
var G__41603 = cljs.core.first(seq41601__$1);
var seq41601__$2 = cljs.core.next(seq41601__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41602,G__41603,seq41601__$2);
});


//# sourceMappingURL=herb.runtime.js.map
