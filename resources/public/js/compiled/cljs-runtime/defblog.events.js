goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
<<<<<<< HEAD
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (p__44296,p__44297){
var map__44298 = p__44296;
var map__44298__$1 = (((((!((map__44298 == null))))?(((((map__44298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44298):map__44298);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44298__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44299 = p__44297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44299,(0),null);
var map__44302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44299,(1),null);
var map__44302__$1 = (((((!((map__44302 == null))))?(((((map__44302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44302):map__44302);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44302__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),defblog.events.active_panel);
=======
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
>>>>>>> development
}));

//# sourceMappingURL=defblog.events.js.map
