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

var action__42976__auto___43669 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__43614 = params__42977__auto__;
var map__43614__$1 = (((((!((map__43614 == null))))?(((((map__43614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43614):map__43614);
var G__43624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43624) : re_frame.core.dispatch.call(null,G__43624));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__43631 = params__42977__auto__;
var G__43634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43634) : re_frame.core.dispatch.call(null,G__43634));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42976__auto___43669);


var action__42976__auto___43680 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__43635 = params__42977__auto__;
var map__43635__$1 = (((((!((map__43635 == null))))?(((((map__43635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43635):map__43635);
var G__43642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43642) : re_frame.core.dispatch.call(null,G__43642));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__43643 = params__42977__auto__;
var G__43646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43646) : re_frame.core.dispatch.call(null,G__43646));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42976__auto___43680);


var action__42976__auto___43691 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__43647 = params__42977__auto__;
var map__43647__$1 = (((((!((map__43647 == null))))?(((((map__43647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43647):map__43647);
var G__43650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43650) : re_frame.core.dispatch.call(null,G__43650));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__43654 = params__42977__auto__;
var G__43657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43657) : re_frame.core.dispatch.call(null,G__43657));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-graphql-1",action__42976__auto___43691);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
