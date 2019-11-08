goog.provide('defblog.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('re_frame.core');
goog.require('defblog.events');
goog.require('bidi.bidi');
goog.require('pushy.core');
<<<<<<< HEAD
defblog.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543),"article/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850)], null),new cljs.core.Keyword(null,"article","article",-21685045)])], null)], null);
defblog.routes.history = (function (){var dispatch = (function (p1__44325_SHARP_){
var G__44327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(p1__44325_SHARP_),new cljs.core.Keyword(null,"slug","slug",2029314850),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__44325_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"slug","slug",2029314850)], null))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44327) : re_frame.core.dispatch.call(null,G__44327));
});
var match = ((function (dispatch){
return (function (p1__44326_SHARP_){
return bidi.bidi.match_route(defblog.routes.routes,p1__44326_SHARP_);
});})(dispatch))
;
return pushy.core.pushy(dispatch,match);
})();
defblog.routes.parse_url = (function defblog$routes$parse_url(url){
return bidi.bidi.match_route(defblog.routes.routes,url);
});
defblog.routes.start_BANG_ = (function defblog$routes$start_BANG_(){
return defblog.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
defblog.routes.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,defblog.routes.routes);
defblog.routes.token_BANG_ = (function defblog$routes$token_BANG_(token){
return defblog.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
=======
<<<<<<< HEAD
defblog.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null);
defblog.routes.parse_url = (function defblog$routes$parse_url(url){
return bidi.bidi.match_route(defblog.routes.routes,url);
});
defblog.routes.dispatch_route = (function defblog$routes$dispatch_route(matched_route){
var panel_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route)),"-panel"].join(''));
var G__44269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),panel_name], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44269) : re_frame.core.dispatch.call(null,G__44269));
});
defblog.routes.app_routes = (function defblog$routes$app_routes(){
var G__44270 = pushy.pushy(defblog.routes.dispatch_route,defblog.routes.parse_url);
return pushy.start_BANG_(G__44270);
=======
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

var action__42974__auto___43667 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43622 = params__42975__auto__;
var map__43622__$1 = (((((!((map__43622 == null))))?(((((map__43622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43622):map__43622);
var G__43632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43632) : re_frame.core.dispatch.call(null,G__43632));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43634 = params__42975__auto__;
var G__43637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43637) : re_frame.core.dispatch.call(null,G__43637));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__42974__auto___43667);


var action__42974__auto___43673 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43640 = params__42975__auto__;
var map__43640__$1 = (((((!((map__43640 == null))))?(((((map__43640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43640):map__43640);
var G__43643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43643) : re_frame.core.dispatch.call(null,G__43643));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43644 = params__42975__auto__;
var G__43647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43647) : re_frame.core.dispatch.call(null,G__43647));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__42974__auto___43673);


var action__42974__auto___43685 = (function (params__42975__auto__){
if(cljs.core.map_QMARK_(params__42975__auto__)){
var map__43648 = params__42975__auto__;
var map__43648__$1 = (((((!((map__43648 == null))))?(((((map__43648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43648):map__43648);
var G__43655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43655) : re_frame.core.dispatch.call(null,G__43655));
} else {
if(cljs.core.vector_QMARK_(params__42975__auto__)){
var vec__43656 = params__42975__auto__;
var G__43659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"lambda-labs-gql-1","lambda-labs-gql-1",462979742)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43659) : re_frame.core.dispatch.call(null,G__43659));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/lambda-labs-gql-1",action__42974__auto___43685);


return defblog.routes.hook_routes_BANG_();
>>>>>>> master
>>>>>>> development
});
defblog.routes.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,defblog.routes.routes);

//# sourceMappingURL=defblog.routes.js.map
