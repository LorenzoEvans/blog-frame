goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),(function (db,p__41848){
var vec__41849 = p__41848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41849,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41849,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","set-active-article","defblog.events/set-active-article",495583094),(function (db,p__41852){
var vec__41853 = p__41852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41853,(0),null);
var active_article = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41853,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),active_article);
}));

//# sourceMappingURL=defblog.events.js.map
