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

var action__41630__auto___41697 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41648 = params__41631__auto__;
var map__41648__$1 = (((((!((map__41648 == null))))?(((((map__41648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41648):map__41648);
var G__41650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41650) : re_frame.core.dispatch.call(null,G__41650));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41651 = params__41631__auto__;
var G__41654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41654) : re_frame.core.dispatch.call(null,G__41654));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__41630__auto___41697);


var action__41630__auto___41698 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41655 = params__41631__auto__;
var map__41655__$1 = (((((!((map__41655 == null))))?(((((map__41655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41655):map__41655);
var G__41657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41657) : re_frame.core.dispatch.call(null,G__41657));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41658 = params__41631__auto__;
var G__41663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41663) : re_frame.core.dispatch.call(null,G__41663));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__41630__auto___41698);


var action__41630__auto___41700 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41666 = params__41631__auto__;
var map__41666__$1 = (((((!((map__41666 == null))))?(((((map__41666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41666):map__41666);
var G__41668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41668) : re_frame.core.dispatch.call(null,G__41668));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41669 = params__41631__auto__;
var G__41672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41672) : re_frame.core.dispatch.call(null,G__41672));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__41630__auto___41700);


var action__41630__auto___41701 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41673 = params__41631__auto__;
var map__41673__$1 = (((((!((map__41673 == null))))?(((((map__41673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41673):map__41673);
var G__41676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41676) : re_frame.core.dispatch.call(null,G__41676));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41677 = params__41631__auto__;
var G__41680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41680) : re_frame.core.dispatch.call(null,G__41680));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-2-firebase",action__41630__auto___41701);


var action__41630__auto___41704 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41681 = params__41631__auto__;
var map__41681__$1 = (((((!((map__41681 == null))))?(((((map__41681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41681):map__41681);
var G__41684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41684) : re_frame.core.dispatch.call(null,G__41684));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41685 = params__41631__auto__;
var G__41688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41688) : re_frame.core.dispatch.call(null,G__41688));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-3-firebase",action__41630__auto___41704);


var action__41630__auto___41705 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41690 = params__41631__auto__;
var map__41690__$1 = (((((!((map__41690 == null))))?(((((map__41690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41690):map__41690);
var G__41692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41692) : re_frame.core.dispatch.call(null,G__41692));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41693 = params__41631__auto__;
var G__41696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41696) : re_frame.core.dispatch.call(null,G__41696));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/how-fp",action__41630__auto___41705);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
