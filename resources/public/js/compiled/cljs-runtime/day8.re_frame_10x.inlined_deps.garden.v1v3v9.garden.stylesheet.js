goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
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
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39881 = arguments.length;
var i__4731__auto___39882 = (0);
while(true){
if((i__4731__auto___39882 < len__4730__auto___39881)){
args__4736__auto__.push((arguments[i__4731__auto___39882]));

var G__39884 = (i__4731__auto___39882 + (1));
i__4731__auto___39882 = G__39884;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__39891__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__39891 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__39892__i = 0, G__39892__a = new Array(arguments.length -  0);
while (G__39892__i < G__39892__a.length) {G__39892__a[G__39892__i] = arguments[G__39892__i + 0]; ++G__39892__i;}
  children = new cljs.core.IndexedSeq(G__39892__a,0,null);
} 
return G__39891__delegate.call(this,children);};
G__39891.cljs$lang$maxFixedArity = 0;
G__39891.cljs$lang$applyTo = (function (arglist__39895){
var children = cljs.core.seq(arglist__39895);
return G__39891__delegate(children);
});
G__39891.cljs$core$IFn$_invoke$arity$variadic = G__39891__delegate;
return G__39891;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq39860){
var G__39861 = cljs.core.first(seq39860);
var seq39860__$1 = cljs.core.next(seq39860);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39861,seq39860__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__39896__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__39896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39899__i = 0, G__39899__a = new Array(arguments.length -  0);
while (G__39899__i < G__39899__a.length) {G__39899__a[G__39899__i] = arguments[G__39899__i + 0]; ++G__39899__i;}
  args = new cljs.core.IndexedSeq(G__39899__a,0,null);
} 
return G__39896__delegate.call(this,args);};
G__39896.cljs$lang$maxFixedArity = 0;
G__39896.cljs$lang$applyTo = (function (arglist__39900){
var args = cljs.core.seq(arglist__39900);
return G__39896__delegate(args);
});
G__39896.cljs$core$IFn$_invoke$arity$variadic = G__39896__delegate;
return G__39896;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39906 = arguments.length;
var i__4731__auto___39907 = (0);
while(true){
if((i__4731__auto___39907 < len__4730__auto___39906)){
args__4736__auto__.push((arguments[i__4731__auto___39907]));

var G__39908 = (i__4731__auto___39907 + (1));
i__4731__auto___39907 = G__39908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq39865){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39865));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_import(var_args){
var G__39869 = arguments.length;
switch (G__39869) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___39913 = arguments.length;
var i__4731__auto___39914 = (0);
while(true){
if((i__4731__auto___39914 < len__4730__auto___39913)){
args_arr__4751__auto__.push((arguments[i__4731__auto___39914]));

var G__39915 = (i__4731__auto___39914 + (1));
i__4731__auto___39914 = G__39915;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq39867){
var G__39868 = cljs.core.first(seq39867);
var seq39867__$1 = cljs.core.next(seq39867);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39868,seq39867__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39930 = arguments.length;
var i__4731__auto___39931 = (0);
while(true){
if((i__4731__auto___39931 < len__4730__auto___39930)){
args__4736__auto__.push((arguments[i__4731__auto___39931]));

var G__39935 = (i__4731__auto___39931 + (1));
i__4731__auto___39931 = G__39935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq39870){
var G__39871 = cljs.core.first(seq39870);
var seq39870__$1 = cljs.core.next(seq39870);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39871,seq39870__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39942 = arguments.length;
var i__4731__auto___39943 = (0);
while(true){
if((i__4731__auto___39943 < len__4730__auto___39942)){
args__4736__auto__.push((arguments[i__4731__auto___39943]));

var G__39944 = (i__4731__auto___39943 + (1));
i__4731__auto___39943 = G__39944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq39873){
var G__39874 = cljs.core.first(seq39873);
var seq39873__$1 = cljs.core.next(seq39873);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39874,seq39873__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39955 = arguments.length;
var i__4731__auto___39956 = (0);
while(true){
if((i__4731__auto___39956 < len__4730__auto___39955)){
args__4736__auto__.push((arguments[i__4731__auto___39956]));

var G__39958 = (i__4731__auto___39956 + (1));
i__4731__auto___39956 = G__39958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq39879){
var G__39880 = cljs.core.first(seq39879);
var seq39879__$1 = cljs.core.next(seq39879);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39880,seq39879__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.js.map
