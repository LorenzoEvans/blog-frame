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

var action__40472__auto___42362 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42317 = params__40473__auto__;
var map__42317__$1 = (((((!((map__42317 == null))))?(((((map__42317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42317):map__42317);
var G__42319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42319) : re_frame.core.dispatch.call(null,G__42319));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42321 = params__40473__auto__;
var G__42324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42324) : re_frame.core.dispatch.call(null,G__42324));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__40472__auto___42362);


var action__40472__auto___42363 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42326 = params__40473__auto__;
var map__42326__$1 = (((((!((map__42326 == null))))?(((((map__42326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42326):map__42326);
var G__42328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42328) : re_frame.core.dispatch.call(null,G__42328));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42329 = params__40473__auto__;
var G__42332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42332) : re_frame.core.dispatch.call(null,G__42332));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__40472__auto___42363);


var action__40472__auto___42366 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42333 = params__40473__auto__;
var map__42333__$1 = (((((!((map__42333 == null))))?(((((map__42333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42333):map__42333);
var G__42335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42335) : re_frame.core.dispatch.call(null,G__42335));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42336 = params__40473__auto__;
var G__42339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42339) : re_frame.core.dispatch.call(null,G__42339));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__40472__auto___42366);


var action__40472__auto___42370 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42340 = params__40473__auto__;
var map__42340__$1 = (((((!((map__42340 == null))))?(((((map__42340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42340):map__42340);
var G__42342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42342) : re_frame.core.dispatch.call(null,G__42342));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42343 = params__40473__auto__;
var G__42346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42346) : re_frame.core.dispatch.call(null,G__42346));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-2-firebase",action__40472__auto___42370);


var action__40472__auto___42374 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42347 = params__40473__auto__;
var map__42347__$1 = (((((!((map__42347 == null))))?(((((map__42347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42347):map__42347);
var G__42349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42349) : re_frame.core.dispatch.call(null,G__42349));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42350 = params__40473__auto__;
var G__42353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42353) : re_frame.core.dispatch.call(null,G__42353));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-3-firebase",action__40472__auto___42374);


var action__40472__auto___42377 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__42355 = params__40473__auto__;
var map__42355__$1 = (((((!((map__42355 == null))))?(((((map__42355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42355):map__42355);
var G__42357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42357) : re_frame.core.dispatch.call(null,G__42357));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__42358 = params__40473__auto__;
var G__42361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42361) : re_frame.core.dispatch.call(null,G__42361));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/how-fp",action__40472__auto___42377);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
