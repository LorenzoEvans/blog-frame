goog.provide('defblog.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('defblog.events');
defblog.routes.hook_browser_navigation_BANG_ = (function defblog$routes$hook_browser_navigation_BANG_(){
var G__52302 = (new goog.History());
var G__52303_52321 = G__52302;
var G__52304_52322 = goog.history.EventType.NAVIGATE;
var G__52305_52323 = ((function (G__52303_52321,G__52304_52322,G__52302){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__52303_52321,G__52304_52322,G__52302))
;
goog.events.listen(G__52303_52321,G__52304_52322,G__52305_52323);

G__52302.setEnabled(true);

return G__52302;
});
defblog.routes.app_routes = (function defblog$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__52142__auto___52324 = (function (params__52143__auto__){
if(cljs.core.map_QMARK_(params__52143__auto__)){
var map__52306 = params__52143__auto__;
var map__52306__$1 = (((((!((map__52306 == null))))?(((((map__52306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52306):map__52306);
var G__52308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52308) : re_frame.core.dispatch.call(null,G__52308));
} else {
if(cljs.core.vector_QMARK_(params__52143__auto__)){
var vec__52309 = params__52143__auto__;
var G__52312 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52312) : re_frame.core.dispatch.call(null,G__52312));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52142__auto___52324);


var action__52142__auto___52325 = (function (params__52143__auto__){
if(cljs.core.map_QMARK_(params__52143__auto__)){
var map__52314 = params__52143__auto__;
var map__52314__$1 = (((((!((map__52314 == null))))?(((((map__52314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52314):map__52314);
var G__52316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52316) : re_frame.core.dispatch.call(null,G__52316));
} else {
if(cljs.core.vector_QMARK_(params__52143__auto__)){
var vec__52317 = params__52143__auto__;
var G__52320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__52320) : re_frame.core.dispatch.call(null,G__52320));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__52142__auto___52325);


return defblog.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
