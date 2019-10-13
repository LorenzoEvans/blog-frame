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

var action__39828__auto___39855 = (function (params__39829__auto__){
if(cljs.core.map_QMARK_(params__39829__auto__)){
var map__39839 = params__39829__auto__;
var map__39839__$1 = (((((!((map__39839 == null))))?(((((map__39839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39839):map__39839);
var G__39842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39842) : re_frame.core.dispatch.call(null,G__39842));
} else {
if(cljs.core.vector_QMARK_(params__39829__auto__)){
var vec__39843 = params__39829__auto__;
var G__39846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39846) : re_frame.core.dispatch.call(null,G__39846));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__39828__auto___39855);


var action__39828__auto___39856 = (function (params__39829__auto__){
if(cljs.core.map_QMARK_(params__39829__auto__)){
var map__39847 = params__39829__auto__;
var map__39847__$1 = (((((!((map__39847 == null))))?(((((map__39847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39847):map__39847);
var G__39849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39849) : re_frame.core.dispatch.call(null,G__39849));
} else {
if(cljs.core.vector_QMARK_(params__39829__auto__)){
var vec__39851 = params__39829__auto__;
var G__39854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__39854) : re_frame.core.dispatch.call(null,G__39854));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__39828__auto___39856);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
