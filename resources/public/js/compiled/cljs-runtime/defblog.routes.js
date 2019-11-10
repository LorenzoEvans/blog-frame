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
var map__41652 = params__41631__auto__;
var map__41652__$1 = (((((!((map__41652 == null))))?(((((map__41652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41652):map__41652);
var G__41654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41654) : re_frame.core.dispatch.call(null,G__41654));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41656 = params__41631__auto__;
var G__41659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41659) : re_frame.core.dispatch.call(null,G__41659));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__41630__auto___41697);


var action__41630__auto___41698 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41660 = params__41631__auto__;
var map__41660__$1 = (((((!((map__41660 == null))))?(((((map__41660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41660):map__41660);
var G__41662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41662) : re_frame.core.dispatch.call(null,G__41662));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41663 = params__41631__auto__;
var G__41667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41667) : re_frame.core.dispatch.call(null,G__41667));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__41630__auto___41698);


var action__41630__auto___41700 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41668 = params__41631__auto__;
var map__41668__$1 = (((((!((map__41668 == null))))?(((((map__41668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41668):map__41668);
var G__41670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41670) : re_frame.core.dispatch.call(null,G__41670));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41671 = params__41631__auto__;
var G__41674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41674) : re_frame.core.dispatch.call(null,G__41674));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__41630__auto___41700);


var action__41630__auto___41702 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41676 = params__41631__auto__;
var map__41676__$1 = (((((!((map__41676 == null))))?(((((map__41676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41676):map__41676);
var G__41678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41678) : re_frame.core.dispatch.call(null,G__41678));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41679 = params__41631__auto__;
var G__41682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41682) : re_frame.core.dispatch.call(null,G__41682));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-2-firebase",action__41630__auto___41702);


var action__41630__auto___41703 = (function (params__41631__auto__){
if(cljs.core.map_QMARK_(params__41631__auto__)){
var map__41683 = params__41631__auto__;
var map__41683__$1 = (((((!((map__41683 == null))))?(((((map__41683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41683):map__41683);
var G__41685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41685) : re_frame.core.dispatch.call(null,G__41685));
} else {
if(cljs.core.vector_QMARK_(params__41631__auto__)){
var vec__41686 = params__41631__auto__;
var G__41689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41689) : re_frame.core.dispatch.call(null,G__41689));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-3-firebase",action__41630__auto___41703);


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
