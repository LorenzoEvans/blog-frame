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

var action__42976__auto___45231 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__45206 = params__42977__auto__;
var map__45206__$1 = (((((!((map__45206 == null))))?(((((map__45206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45206):map__45206);
var G__45208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45208) : re_frame.core.dispatch.call(null,G__45208));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__45210 = params__42977__auto__;
var G__45213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45213) : re_frame.core.dispatch.call(null,G__45213));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42976__auto___45231);


var action__42976__auto___45232 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__45215 = params__42977__auto__;
var map__45215__$1 = (((((!((map__45215 == null))))?(((((map__45215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45215):map__45215);
var G__45217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45217) : re_frame.core.dispatch.call(null,G__45217));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__45218 = params__42977__auto__;
var G__45221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45221) : re_frame.core.dispatch.call(null,G__45221));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42976__auto___45232);


var action__42976__auto___45233 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__45222 = params__42977__auto__;
var map__45222__$1 = (((((!((map__45222 == null))))?(((((map__45222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45222):map__45222);
var G__45224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"labs-1-page","labs-1-page",-215469853)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45224) : re_frame.core.dispatch.call(null,G__45224));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__45225 = params__42977__auto__;
var G__45228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"labs-1-page","labs-1-page",-215469853)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45228) : re_frame.core.dispatch.call(null,G__45228));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/labs-1",action__42976__auto___45233);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
