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

var action__42976__auto___44220 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__44199 = params__42977__auto__;
var map__44199__$1 = (((((!((map__44199 == null))))?(((((map__44199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44199):map__44199);
var G__44201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44201) : re_frame.core.dispatch.call(null,G__44201));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__44202 = params__42977__auto__;
var G__44205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44205) : re_frame.core.dispatch.call(null,G__44205));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42976__auto___44220);


var action__42976__auto___44223 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__44206 = params__42977__auto__;
var map__44206__$1 = (((((!((map__44206 == null))))?(((((map__44206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44206):map__44206);
var G__44208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44208) : re_frame.core.dispatch.call(null,G__44208));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__44209 = params__42977__auto__;
var G__44212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44212) : re_frame.core.dispatch.call(null,G__44212));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42976__auto___44223);


var action__42976__auto___44224 = (function (params__42977__auto__){
if(cljs.core.map_QMARK_(params__42977__auto__)){
var map__44213 = params__42977__auto__;
var map__44213__$1 = (((((!((map__44213 == null))))?(((((map__44213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44213):map__44213);
var G__44215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"labs-1","labs-1",1095595901)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44215) : re_frame.core.dispatch.call(null,G__44215));
} else {
if(cljs.core.vector_QMARK_(params__42977__auto__)){
var vec__44216 = params__42977__auto__;
var G__44219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"labs-1","labs-1",1095595901)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44219) : re_frame.core.dispatch.call(null,G__44219));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/labs-1",action__42976__auto___44224);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
