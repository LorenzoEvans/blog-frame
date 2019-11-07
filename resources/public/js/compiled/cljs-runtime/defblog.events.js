goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (p__44316,p__44317){
var map__44318 = p__44316;
var map__44318__$1 = (((((!((map__44318 == null))))?(((((map__44318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44318):map__44318);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44318__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44319 = p__44317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44319,(0),null);
var map__44322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44319,(1),null);
var map__44322__$1 = (((((!((map__44322 == null))))?(((((map__44322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44322):map__44322);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44322__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44322__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var cur_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
var G__44331 = page;
var G__44331__$1 = (((G__44331 instanceof cljs.core.Keyword))?G__44331.fqn:null);
switch (G__44331__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cur_page,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null)], null);

break;
case "article":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44331__$1)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),(function (p__44334,p__44335){
var map__44336 = p__44334;
var map__44336__$1 = (((((!((map__44336 == null))))?(((((map__44336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44336):map__44336);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44336__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44337 = p__44335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-articles","get-articles",891972795),(function (p__44341,p__44342){
var map__44343 = p__44341;
var map__44343__$1 = (((((!((map__44343 == null))))?(((((map__44343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44343):map__44343);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44343__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44344 = p__44342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(1),null);
return content;
}));

//# sourceMappingURL=defblog.events.js.map
