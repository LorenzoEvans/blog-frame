goog.provide('defblog.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('defblog.events');
goog.require('defblog.routes');
goog.require('defblog.views');
goog.require('defblog.config');
goog.require('defblog.subs');
defblog.core.dev_setup = (function defblog$core$dev_setup(){
if(defblog.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
defblog.core.mount_root = (function defblog$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.views.main_panel], null),document.getElementById("app"));
});
defblog.core.init = (function defblog$core$init(){
defblog.routes.app_routes();

var G__41878_41882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","initialize-db","defblog.events/initialize-db",1258958176)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__41878_41882) : re_frame.core.dispatch_sync.call(null,G__41878_41882));

defblog.core.dev_setup();

return defblog.core.mount_root();
});

//# sourceMappingURL=defblog.core.js.map
