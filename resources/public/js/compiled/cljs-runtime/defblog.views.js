goog.provide('defblog.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.subs');
goog.require('defblog.layout');
goog.require('herb.core');
goog.require('defblog.styles');
defblog.views.home_panel = (function defblog$views$home_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-between.h-100.bg-washed-green.w-100","div.flex.flex-column.justify-between.h-100.bg-washed-green.w-100",-503878069),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article_section], null)], null);
});
defblog.views.labs_full = (function defblog$views$labs_full(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.lambda_labs_gql], null);
});
defblog.views.panels = (function defblog$views$panels(panel_name){
var G__44364 = panel_name;
var G__44364__$1 = (((G__44364 instanceof cljs.core.Keyword))?G__44364.fqn:null);
switch (G__44364__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.home_panel], null);

break;
case "lambda-labs-graphql-1":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.labs_full], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
defblog.views.show_panel = (function defblog$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.panels,panel_name], null);
});
defblog.views.main_panel = (function defblog$views$main_panel(){
var active_panel = (function (){var G__44365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.subs","active-panel","defblog.subs/active-panel",-382304736)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__44365) : re_frame.core.subscribe.call(null,G__44365));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.show_panel,cljs.core.deref(active_panel)], null);
});

//# sourceMappingURL=defblog.views.js.map
