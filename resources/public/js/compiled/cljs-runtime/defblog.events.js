goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
<<<<<<< HEAD
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),(function (db,p__42986){
var vec__42991 = p__42986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42991,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42991,(1),null);
=======
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),(function (db,p__42992){
var vec__42993 = p__42992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42993,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42993,(1),null);
>>>>>>> master
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=defblog.events.js.map
