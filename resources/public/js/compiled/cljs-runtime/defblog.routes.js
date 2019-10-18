goog.provide('defblog.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('defblog.events');
goog.require('pushy.core');
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
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");

var action__43011__auto___44339 = (function (params__43012__auto__){
if(cljs.core.map_QMARK_(params__43012__auto__)){
var map__44318 = params__43012__auto__;
var map__44318__$1 = (((((!((map__44318 == null))))?(((((map__44318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44318):map__44318);
var G__44320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44320) : re_frame.core.dispatch.call(null,G__44320));
} else {
if(cljs.core.vector_QMARK_(params__43012__auto__)){
var vec__44321 = params__43012__auto__;
var G__44324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44324) : re_frame.core.dispatch.call(null,G__44324));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__43011__auto___44339);


var action__43011__auto___44340 = (function (params__43012__auto__){
if(cljs.core.map_QMARK_(params__43012__auto__)){
var map__44325 = params__43012__auto__;
var map__44325__$1 = (((((!((map__44325 == null))))?(((((map__44325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44325):map__44325);
var G__44327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44327) : re_frame.core.dispatch.call(null,G__44327));
} else {
if(cljs.core.vector_QMARK_(params__43012__auto__)){
var vec__44328 = params__43012__auto__;
var G__44331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44331) : re_frame.core.dispatch.call(null,G__44331));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__43011__auto___44340);


var action__43011__auto___44342 = (function (params__43012__auto__){
if(cljs.core.map_QMARK_(params__43012__auto__)){
var map__44332 = params__43012__auto__;
var map__44332__$1 = (((((!((map__44332 == null))))?(((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44332):map__44332);
var G__44334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44334) : re_frame.core.dispatch.call(null,G__44334));
} else {
if(cljs.core.vector_QMARK_(params__43012__auto__)){
var vec__44335 = params__43012__auto__;
var G__44338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44338) : re_frame.core.dispatch.call(null,G__44338));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-graphql-1",action__43011__auto___44342);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
