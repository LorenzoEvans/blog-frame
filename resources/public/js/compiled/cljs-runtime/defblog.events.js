goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),(function (db,p__43589){
var vec__43590 = p__43589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43590,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43590,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","active-article","defblog.events/active-article",-1058699541),(function (db,p__43593){
var vec__43594 = p__43593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43594,(0),null);
var active_article = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43594,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_article);
}));

//# sourceMappingURL=defblog.events.js.map
