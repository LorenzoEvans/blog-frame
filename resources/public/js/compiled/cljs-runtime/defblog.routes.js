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

var action__43630__auto___45722 = (function (params__43631__auto__){
if(cljs.core.map_QMARK_(params__43631__auto__)){
var map__45689 = params__43631__auto__;
var map__45689__$1 = (((((!((map__45689 == null))))?(((((map__45689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45689):map__45689);
var G__45697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45697) : re_frame.core.dispatch.call(null,G__45697));
} else {
if(cljs.core.vector_QMARK_(params__43631__auto__)){
var vec__45699 = params__43631__auto__;
var G__45702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45702) : re_frame.core.dispatch.call(null,G__45702));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__43630__auto___45722);


var action__43630__auto___45724 = (function (params__43631__auto__){
if(cljs.core.map_QMARK_(params__43631__auto__)){
var map__45708 = params__43631__auto__;
var map__45708__$1 = (((((!((map__45708 == null))))?(((((map__45708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45708):map__45708);
var G__45710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45710) : re_frame.core.dispatch.call(null,G__45710));
} else {
if(cljs.core.vector_QMARK_(params__43631__auto__)){
var vec__45711 = params__43631__auto__;
var G__45714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45714) : re_frame.core.dispatch.call(null,G__45714));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__43630__auto___45724);


var action__43630__auto___45726 = (function (params__43631__auto__){
if(cljs.core.map_QMARK_(params__43631__auto__)){
var map__45715 = params__43631__auto__;
var map__45715__$1 = (((((!((map__45715 == null))))?(((((map__45715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45715):map__45715);
var G__45717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45717) : re_frame.core.dispatch.call(null,G__45717));
} else {
if(cljs.core.vector_QMARK_(params__43631__auto__)){
var vec__45718 = params__43631__auto__;
var G__45721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45721) : re_frame.core.dispatch.call(null,G__45721));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__43630__auto___45726);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
