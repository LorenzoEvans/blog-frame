goog.provide('day8.re_frame_10x.db');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.db.init_db = (function day8$re_frame_10x$db$init_db(debug_QMARK_){
var panel_width_PERCENT_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-panel",true);
var selected_tab = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("selected-tab",new cljs.core.Keyword(null,"event","event",301435442));
var filter_items = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-paths",cljs.core.PersistentArrayMap.EMPTY));
var json_ml_paths = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window?",false);
var external_window_dimensions = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window-dimensions",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var show_epoch_traces_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-epoch-traces?",true);
var using_trace_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("using-trace?",true);
var ignored_events = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("ignored-events",cljs.core.PersistentArrayMap.EMPTY);
var low_level_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("low-level-trace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null));
var filtered_view_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filtered-view-trace",(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})());
var num_epochs = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("retained-epochs",(25));
var follows_events_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-follows-events?",true);
var categories = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("categories",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
if(cljs.core.truth_(using_trace_QMARK_)){
var G__45671_45826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45671_45826) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45671_45826));
} else {
}

var G__45672_45831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45672_45831) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45672_45831));

var G__45677_45832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45677_45832) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45677_45832));

var G__45678_45833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45678_45833) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45678_45833));

var G__45679_45834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),ignored_events], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45679_45834) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45679_45834));

var G__45680_45848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),filtered_view_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45680_45848) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45680_45848));

var G__45681_45859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),low_level_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45681_45859) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45681_45859));

var G__45690_45864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),num_epochs], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45690_45864) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45690_45864));

var G__45693_45865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),follows_events_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45693_45865) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45693_45865));

var G__45698_45872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),debug_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45698_45872) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45698_45872));

var G__45703_45875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),external_window_dimensions], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45703_45875) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45703_45875));

if(cljs.core.truth_(external_window_QMARK_)){
var G__45704_45877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45704_45877) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45704_45877));
} else {
}

var G__45705_45886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45705_45886) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45705_45886));

var G__45706_45893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),categories], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45706_45893) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45706_45893));

var G__45711_45894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),show_epoch_traces_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45711_45894) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45711_45894));

var G__45712_45895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45712_45895) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45712_45895));

var G__45713_45896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45713_45896) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45713_45896));

var G__45719_45897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45719_45897) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45719_45897));

var G__45720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45720) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__45720));
});

//# sourceMappingURL=day8.re_frame_10x.db.js.map
