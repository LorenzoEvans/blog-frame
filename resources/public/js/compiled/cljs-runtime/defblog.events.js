goog.provide('defblog.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('defblog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176),(function (_,___$1){
return defblog.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (p__44206,p__44207){
var map__44208 = p__44206;
var map__44208__$1 = (((((!((map__44208 == null))))?(((((map__44208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44208):map__44208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44208__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44209 = p__44207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44209,(0),null);
var map__44212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44209,(1),null);
var map__44212__$1 = (((((!((map__44212 == null))))?(((((map__44212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44212):map__44212);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var cur_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
var G__44215 = page;
var G__44215__$1 = (((G__44215 instanceof cljs.core.Keyword))?G__44215.fqn:null);
switch (G__44215__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cur_page,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null)], null);

break;
case "article":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44215__$1)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),(function (p__44216,p__44217){
var map__44218 = p__44216;
var map__44218__$1 = (((((!((map__44218 == null))))?(((((map__44218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44218):map__44218);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44219 = p__44217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug)], null);
}));

//# sourceMappingURL=defblog.events.js.map
