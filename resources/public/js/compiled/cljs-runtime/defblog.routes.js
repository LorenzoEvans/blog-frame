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
var G__43607 = (new goog.History());
var G__43613_43695 = G__43607;
var G__43614_43696 = goog.history.EventType.NAVIGATE;
var G__43615_43697 = ((function (G__43613_43695,G__43614_43696,G__43607){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__43613_43695,G__43614_43696,G__43607))
;
goog.events.listen(G__43613_43695,G__43614_43696,G__43615_43697);

G__43607.setEnabled(true);

return G__43607;
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

var action__42974__auto___43698 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43639 = params__42975__auto__;
var map__43639__$1 = (((((!((map__43639 == null))))?(((((map__43639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43639):map__43639);
var G__43654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43654) : re_frame.core.dispatch.call(null,G__43654));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43657 = params__42975__auto__;
var G__43661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43661) : re_frame.core.dispatch.call(null,G__43661));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42974__auto___43698);


var action__42974__auto___43699 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43672 = params__42975__auto__;
var map__43672__$1 = (((((!((map__43672 == null))))?(((((map__43672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43672):map__43672);
var G__43678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43678) : re_frame.core.dispatch.call(null,G__43678));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43680 = params__42975__auto__;
var G__43683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43683) : re_frame.core.dispatch.call(null,G__43683));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42974__auto___43699);


var action__42974__auto___43700 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43688 = params__42975__auto__;
var map__43688__$1 = (((((!((map__43688 == null))))?(((((map__43688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43688):map__43688);
var G__43690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43690) : re_frame.core.dispatch.call(null,G__43690));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43691 = params__42975__auto__;
var G__43694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43694) : re_frame.core.dispatch.call(null,G__43694));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-graphql-1",action__42974__auto___43700);


return defblog.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
