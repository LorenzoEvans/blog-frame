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
var G__43666 = (new goog.History());
var G__43673_43817 = G__43666;
var G__43674_43818 = goog.history.EventType.NAVIGATE;
var G__43675_43819 = ((function (G__43673_43817,G__43674_43818,G__43666){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__43673_43817,G__43674_43818,G__43666))
;
goog.events.listen(G__43673_43817,G__43674_43818,G__43675_43819);

G__43666.setEnabled(true);

return G__43666;
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

var action__42974__auto___43835 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43707 = params__42975__auto__;
var map__43707__$1 = (((((!((map__43707 == null))))?(((((map__43707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43707):map__43707);
var G__43733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43733) : re_frame.core.dispatch.call(null,G__43733));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43746 = params__42975__auto__;
var G__43749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43749) : re_frame.core.dispatch.call(null,G__43749));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42974__auto___43835);


var action__42974__auto___43849 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43754 = params__42975__auto__;
var map__43754__$1 = (((((!((map__43754 == null))))?(((((map__43754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43754):map__43754);
var G__43756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43756) : re_frame.core.dispatch.call(null,G__43756));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43760 = params__42975__auto__;
var G__43765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43765) : re_frame.core.dispatch.call(null,G__43765));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42974__auto___43849);


var action__42974__auto___43866 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43779 = params__42975__auto__;
var map__43779__$1 = (((((!((map__43779 == null))))?(((((map__43779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43779):map__43779);
var G__43784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43784) : re_frame.core.dispatch.call(null,G__43784));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43787 = params__42975__auto__;
var G__43790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-graphql-1","lambda-labs-graphql-1",2041255955)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43790) : re_frame.core.dispatch.call(null,G__43790));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-graphql-1",action__42974__auto___43866);


return defblog.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
