goog.provide('defblog.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('defblog.events');
goog.require('bidi.bidi');
goog.require('pushy.core');
defblog.routes.hook_browser_navigation_BANG_ = (function defblog$routes$hook_browser_navigation_BANG_(){
var G__43476 = (new goog.History());
var G__43493_43623 = G__43476;
var G__43494_43624 = goog.history.EventType.NAVIGATE;
var G__43495_43625 = ((function (G__43493_43623,G__43494_43624,G__43476){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__43493_43623,G__43494_43624,G__43476))
;
goog.events.listen(G__43493_43623,G__43494_43624,G__43495_43625);

G__43476.setEnabled(true);

return G__43476;
});
defblog.routes.hook_routes_BANG_ = (function defblog$routes$hook_routes_BANG_(){
defblog.routes.history = pushy.core.pushy(secretary.core.dispatch_BANG_,(function (x){
if(cljs.core.truth_(secretary.core.locate_route(x))){
return x;
} else {
return null;
}
}));

return defblog.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
defblog.routes.app_routes = (function defblog$routes$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__42974__auto___43636 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43551 = params__42975__auto__;
var map__43551__$1 = (((((!((map__43551 == null))))?(((((map__43551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43551):map__43551);
var G__43573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43573) : re_frame.core.dispatch.call(null,G__43573));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43583 = params__42975__auto__;
var G__43586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43586) : re_frame.core.dispatch.call(null,G__43586));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42974__auto___43636);


var action__42974__auto___43645 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43590 = params__42975__auto__;
var map__43590__$1 = (((((!((map__43590 == null))))?(((((map__43590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43590):map__43590);
var G__43595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43595) : re_frame.core.dispatch.call(null,G__43595));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43599 = params__42975__auto__;
var G__43603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43603) : re_frame.core.dispatch.call(null,G__43603));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42974__auto___43645);


var action__42974__auto___43650 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43606 = params__42975__auto__;
var map__43606__$1 = (((((!((map__43606 == null))))?(((((map__43606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43606):map__43606);
var G__43609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43609) : re_frame.core.dispatch.call(null,G__43609));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43611 = params__42975__auto__;
var G__43614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43614) : re_frame.core.dispatch.call(null,G__43614));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-graphql-1",action__42974__auto___43650);


return defblog.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
