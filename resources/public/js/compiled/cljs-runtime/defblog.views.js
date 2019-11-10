goog.provide('defblog.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.subs');
goog.require('defblog.events');
goog.require('defblog.routes');
goog.require('defblog.styles');
goog.require('defblog.layout');
goog.require('defblog.db');
goog.require('defblog.articles.article_content');
defblog.views.about_panel = (function defblog$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is the About Page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null)], null);
});
defblog.views.home_panel = (function defblog$views$home_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-between.bg-image","div.flex.flex-column.justify-between.bg-image",1851794394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.homepage], null)], null);
});
defblog.views.panels = (function defblog$views$panels(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46079 = arguments.length;
var i__4731__auto___46080 = (0);
while(true){
if((i__4731__auto___46080 < len__4730__auto___46079)){
args__4736__auto__.push((arguments[i__4731__auto___46080]));

var G__46081 = (i__4731__auto___46080 + (1));
i__4731__auto___46080 = G__46081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return defblog.views.panels.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

defblog.views.panels.cljs$core$IFn$_invoke$arity$variadic = (function (panel_name,article_name){
var active_article = (function (){var G__46076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.subs","active-panel","defblog.subs/active-panel",-382304736)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46076) : re_frame.core.subscribe.call(null,G__46076));
})();
var G__46077 = panel_name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),G__46077)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.home_panel], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"about-panel","about-panel",334628515),G__46077)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.about_panel], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"keywordize","keywordize",-1273225011,null),G__46077)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),G__46077)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
}
}
}
});

defblog.views.panels.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
defblog.views.panels.cljs$lang$applyTo = (function (seq46074){
var G__46075 = cljs.core.first(seq46074);
var seq46074__$1 = cljs.core.next(seq46074);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46075,seq46074__$1);
});

defblog.views.show_panel = (function defblog$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.panels,panel_name], null);
});
defblog.views.main_panel = (function defblog$views$main_panel(){
var active_panel = (function (){var G__46078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.subs","active-panel","defblog.subs/active-panel",-382304736)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46078) : re_frame.core.subscribe.call(null,G__46078));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.show_panel,cljs.core.deref(active_panel)], null);
});

//# sourceMappingURL=defblog.views.js.map
