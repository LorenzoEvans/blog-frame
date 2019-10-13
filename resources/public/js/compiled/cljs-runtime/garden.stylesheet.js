goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41531 = arguments.length;
var i__4731__auto___41532 = (0);
while(true){
if((i__4731__auto___41532 < len__4730__auto___41531)){
args__4736__auto__.push((arguments[i__4731__auto___41532]));

var G__41533 = (i__4731__auto___41532 + (1));
i__4731__auto___41532 = G__41533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__41534__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__41534 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__41538__i = 0, G__41538__a = new Array(arguments.length -  0);
while (G__41538__i < G__41538__a.length) {G__41538__a[G__41538__i] = arguments[G__41538__i + 0]; ++G__41538__i;}
  children = new cljs.core.IndexedSeq(G__41538__a,0,null);
} 
return G__41534__delegate.call(this,children);};
G__41534.cljs$lang$maxFixedArity = 0;
G__41534.cljs$lang$applyTo = (function (arglist__41539){
var children = cljs.core.seq(arglist__41539);
return G__41534__delegate(children);
});
G__41534.cljs$core$IFn$_invoke$arity$variadic = G__41534__delegate;
return G__41534;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq41494){
var G__41496 = cljs.core.first(seq41494);
var seq41494__$1 = cljs.core.next(seq41494);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41496,seq41494__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__41540__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__41540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41541__i = 0, G__41541__a = new Array(arguments.length -  0);
while (G__41541__i < G__41541__a.length) {G__41541__a[G__41541__i] = arguments[G__41541__i + 0]; ++G__41541__i;}
  args = new cljs.core.IndexedSeq(G__41541__a,0,null);
} 
return G__41540__delegate.call(this,args);};
G__41540.cljs$lang$maxFixedArity = 0;
G__41540.cljs$lang$applyTo = (function (arglist__41542){
var args = cljs.core.seq(arglist__41542);
return G__41540__delegate(args);
});
G__41540.cljs$core$IFn$_invoke$arity$variadic = G__41540__delegate;
return G__41540;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41543 = arguments.length;
var i__4731__auto___41544 = (0);
while(true){
if((i__4731__auto___41544 < len__4730__auto___41543)){
args__4736__auto__.push((arguments[i__4731__auto___41544]));

var G__41545 = (i__4731__auto___41544 + (1));
i__4731__auto___41544 = G__41545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq41504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41504));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__41518 = arguments.length;
switch (G__41518) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___41549 = arguments.length;
var i__4731__auto___41550 = (0);
while(true){
if((i__4731__auto___41550 < len__4730__auto___41549)){
args_arr__4751__auto__.push((arguments[i__4731__auto___41550]));

var G__41551 = (i__4731__auto___41550 + (1));
i__4731__auto___41550 = G__41551;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq41516){
var G__41517 = cljs.core.first(seq41516);
var seq41516__$1 = cljs.core.next(seq41516);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41517,seq41516__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41555 = arguments.length;
var i__4731__auto___41556 = (0);
while(true){
if((i__4731__auto___41556 < len__4730__auto___41555)){
args__4736__auto__.push((arguments[i__4731__auto___41556]));

var G__41558 = (i__4731__auto___41556 + (1));
i__4731__auto___41556 = G__41558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq41522){
var G__41523 = cljs.core.first(seq41522);
var seq41522__$1 = cljs.core.next(seq41522);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41523,seq41522__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41561 = arguments.length;
var i__4731__auto___41562 = (0);
while(true){
if((i__4731__auto___41562 < len__4730__auto___41561)){
args__4736__auto__.push((arguments[i__4731__auto___41562]));

var G__41563 = (i__4731__auto___41562 + (1));
i__4731__auto___41562 = G__41563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq41524){
var G__41525 = cljs.core.first(seq41524);
var seq41524__$1 = cljs.core.next(seq41524);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41525,seq41524__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41567 = arguments.length;
var i__4731__auto___41568 = (0);
while(true){
if((i__4731__auto___41568 < len__4730__auto___41567)){
args__4736__auto__.push((arguments[i__4731__auto___41568]));

var G__41569 = (i__4731__auto___41568 + (1));
i__4731__auto___41568 = G__41569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq41526){
var G__41527 = cljs.core.first(seq41526);
var seq41526__$1 = cljs.core.next(seq41526);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41527,seq41526__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
