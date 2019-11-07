goog.provide('defblog.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('re_frame.core');
goog.require('defblog.events');
goog.require('bidi.bidi');
goog.require('pushy.core');
defblog.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543),"article/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850)], null),new cljs.core.Keyword(null,"article","article",-21685045)])], null)], null);
defblog.routes.history = (function (){var dispatch = (function (p1__44227_SHARP_){
var G__44229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(p1__44227_SHARP_),new cljs.core.Keyword(null,"slug","slug",2029314850),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__44227_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"slug","slug",2029314850)], null))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__44229) : re_frame.core.dispatch.call(null,G__44229));
});
var match = ((function (dispatch){
return (function (p1__44228_SHARP_){
return bidi.bidi.match_route(defblog.routes.routes,p1__44228_SHARP_);
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
});

//# sourceMappingURL=defblog.routes.js.map
