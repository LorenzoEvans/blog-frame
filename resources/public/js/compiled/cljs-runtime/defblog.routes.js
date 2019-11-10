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

var action__49042__auto___49119 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49072 = params__49043__auto__;
var map__49072__$1 = (((((!((map__49072 == null))))?(((((map__49072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49072):map__49072);
var G__49074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49074) : re_frame.core.dispatch.call(null,G__49074));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49075 = params__49043__auto__;
var G__49078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49078) : re_frame.core.dispatch.call(null,G__49078));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__49042__auto___49119);


var action__49042__auto___49121 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49079 = params__49043__auto__;
var map__49079__$1 = (((((!((map__49079 == null))))?(((((map__49079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49079):map__49079);
var G__49081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49081) : re_frame.core.dispatch.call(null,G__49081));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49082 = params__49043__auto__;
var G__49085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49085) : re_frame.core.dispatch.call(null,G__49085));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__49042__auto___49121);


var action__49042__auto___49123 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49086 = params__49043__auto__;
var map__49086__$1 = (((((!((map__49086 == null))))?(((((map__49086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49086):map__49086);
var G__49088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49088) : re_frame.core.dispatch.call(null,G__49088));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49089 = params__49043__auto__;
var G__49092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49092) : re_frame.core.dispatch.call(null,G__49092));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__49042__auto___49123);


var action__49042__auto___49124 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49093 = params__49043__auto__;
var map__49093__$1 = (((((!((map__49093 == null))))?(((((map__49093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49093):map__49093);
var G__49095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49095) : re_frame.core.dispatch.call(null,G__49095));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49096 = params__49043__auto__;
var G__49099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-2","lambda-labs-gql-2",375628964)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49099) : re_frame.core.dispatch.call(null,G__49099));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-2-firebase",action__49042__auto___49124);


var action__49042__auto___49125 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49100 = params__49043__auto__;
var map__49100__$1 = (((((!((map__49100 == null))))?(((((map__49100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49100):map__49100);
var G__49102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49102) : re_frame.core.dispatch.call(null,G__49102));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49103 = params__49043__auto__;
var G__49106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-3","lambda-labs-gql-3",-1011174006)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49106) : re_frame.core.dispatch.call(null,G__49106));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-3-firebase",action__49042__auto___49125);


var action__49042__auto___49126 = (function (params__49043__auto__){
if(cljs.core.map_QMARK_(params__49043__auto__)){
var map__49107 = params__49043__auto__;
var map__49107__$1 = (((((!((map__49107 == null))))?(((((map__49107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49107):map__49107);
var G__49109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49109) : re_frame.core.dispatch.call(null,G__49109));
} else {
if(cljs.core.vector_QMARK_(params__49043__auto__)){
var vec__49110 = params__49043__auto__;
var G__49113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"how-fp","how-fp",705506556)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49113) : re_frame.core.dispatch.call(null,G__49113));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/how-fp",action__49042__auto___49126);


return defblog.routes.hook_routes_BANG_();
});

//# sourceMappingURL=defblog.routes.js.map
