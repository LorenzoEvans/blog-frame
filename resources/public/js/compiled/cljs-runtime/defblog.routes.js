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
});
defblog.routes.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,defblog.routes.routes);

//# sourceMappingURL=defblog.routes.js.map
