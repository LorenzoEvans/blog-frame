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

var action__40472__auto___43189 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__43167 = params__40473__auto__;
var map__43167__$1 = (((((!((map__43167 == null))))?(((((map__43167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43167):map__43167);
var G__43170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43170) : re_frame.core.dispatch.call(null,G__43170));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__43171 = params__40473__auto__;
var G__43174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43174) : re_frame.core.dispatch.call(null,G__43174));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__40472__auto___43189);


var action__40472__auto___43190 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__43175 = params__40473__auto__;
var map__43175__$1 = (((((!((map__43175 == null))))?(((((map__43175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43175):map__43175);
var G__43177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43177) : re_frame.core.dispatch.call(null,G__43177));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__43178 = params__40473__auto__;
var G__43181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43181) : re_frame.core.dispatch.call(null,G__43181));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__40472__auto___43190);


var action__40472__auto___43193 = (function (params__40473__auto__){
if(cljs.core.map_QMARK_(params__40473__auto__)){
var map__43182 = params__40473__auto__;
var map__43182__$1 = (((((!((map__43182 == null))))?(((((map__43182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43182):map__43182);
var G__43184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43184) : re_frame.core.dispatch.call(null,G__43184));
} else {
if(cljs.core.vector_QMARK_(params__40473__auto__)){
var vec__43185 = params__40473__auto__;
var G__43188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43188) : re_frame.core.dispatch.call(null,G__43188));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__40472__auto___43193);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
