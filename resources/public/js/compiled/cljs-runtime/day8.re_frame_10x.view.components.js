goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
var module$node_modules$react_highlight_DOT_js$dist$main=shadow.js.require("module$node_modules$react_highlight_DOT_js$dist$main", {});
var module$node_modules$highlight_DOT_js$lib$languages$clojure=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$clojure", {});
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__41271){
var map__41272 = p__41271;
var map__41272__$1 = (((((!((map__41272 == null))))?(((((map__41272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41272):map__41272);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41272__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41272__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41272__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41272__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41272__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var save = ((function (val,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
if((cljs.core.count(v) > (0))){
return (on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
return null;
}
});})(val,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)))))?(25):cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__41268_SHARP_){
cljs.core.reset_BANG_(val,p1__41268_SHARP_.target.value);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__41268_SHARP_) : on_change.call(null,p1__41268_SHARP_));
});})(val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__41269_SHARP_){
var G__41274 = p1__41269_SHARP_.which;
switch (G__41274) {
case (13):
save();

return cljs.core.reset_BANG_(val,"");

break;
default:
return null;

}
});})(val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__41272,map__41272__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__41289){
var vec__41291 = p__41289;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41291,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41291,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41287_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__41287_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace(css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs], 0));
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41369 = arguments.length;
var i__4731__auto___41370 = (0);
while(true){
if((i__4731__auto___41370 < len__4730__auto___41369)){
args__4736__auto__.push((arguments[i__4731__auto___41370]));

var G__41372 = (i__4731__auto___41370 + (1));
i__4731__auto___41370 = G__41372;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__41261__auto__ = devtools.prefs.get_prefs();
var prefs__41262__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_(prefs__41262__auto__);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(api_fn,args);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__41262__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__41262__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__41261__auto__);
}});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq41304){
var G__41305 = cljs.core.first(seq41304);
var seq41304__$1 = cljs.core.next(seq41304);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41305,seq41304__$1);
});

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41384 = arguments.length;
var i__4731__auto___41385 = (0);
while(true){
if((i__4731__auto___41385 < len__4730__auto___41384)){
args__4736__auto__.push((arguments[i__4731__auto___41385]));

var G__41386 = (i__4731__auto___41385 + (1));
i__4731__auto___41385 = G__41386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq41313){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41313));
});

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41392 = arguments.length;
var i__4731__auto___41393 = (0);
while(true){
if((i__4731__auto___41393 < len__4730__auto___41392)){
args__4736__auto__.push((arguments[i__4731__auto___41393]));

var G__41394 = (i__4731__auto___41393 + (1));
i__4731__auto___41393 = G__41394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq41321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41321));
});

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41396 = arguments.length;
var i__4731__auto___41401 = (0);
while(true){
if((i__4731__auto___41401 < len__4730__auto___41396)){
args__4736__auto__.push((arguments[i__4731__auto___41401]));

var G__41408 = (i__4731__auto___41401 + (1));
i__4731__auto___41401 = G__41408;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq41322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41322));
});

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = (function (){var G__41323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41323) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,G__41323));
})();
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?" expanded":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
var G__41324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41324) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__41324));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
} else {
return and__4120__auto__;
}
})())?(function (){var G__41325 = day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
var G__41326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__41325,G__41326) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__41325,G__41326));
})():(function (){var G__41327 = day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.view.components.get_object(jsonml__$1),day8.re_frame_10x.view.components.get_config(jsonml__$1)], 0));
var G__41328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__41327,G__41328) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__41327,G__41328));
})())], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__41329 = jsonml;
var seq__41330 = cljs.core.seq(vec__41329);
var first__41331 = cljs.core.first(seq__41330);
var seq__41330__$1 = cljs.core.next(seq__41330);
var tag_name = first__41331;
var first__41331__$1 = cljs.core.first(seq__41330__$1);
var seq__41330__$2 = cljs.core.next(seq__41330__$1);
var attributes = first__41331__$1;
var children = seq__41330__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (vec__41329,seq__41330,first__41331,seq__41330__$1,tag_name,first__41331__$1,seq__41330__$2,attributes,children,tagnames){
return (function (i,child){
var G__41332 = child;
var G__41333 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.view.components.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__41332,G__41333) : day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,G__41332,G__41333));
});})(vec__41329,seq__41330,first__41331,seq__41330__$1,tag_name,first__41331__$1,seq__41330__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = (function (){var G__41334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__41334) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,G__41334));
})();
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
var G__41335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41335) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,G__41335));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41444 = arguments.length;
var i__4731__auto___41445 = (0);
while(true){
if((i__4731__auto___41445 < len__4730__auto___41444)){
args__4736__auto__.push((arguments[i__4731__auto___41445]));

var G__41447 = (i__4731__auto___41445 + (1));
i__4731__auto___41445 = G__41447;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__41339){
var vec__41340 = p__41339;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41340,(0),null);
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (expanded_QMARK_,vec__41340,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return ((typeof data__$1 === 'string') || ((data__$1 instanceof RegExp)) || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_(data__$1)) || ((data__$1 == null)));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0))], null):(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup(day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data__$1], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__41340,class$))
});

day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq41336){
var G__41337 = cljs.core.first(seq41336);
var seq41336__$1 = cljs.core.next(seq41336);
var G__41338 = cljs.core.first(seq41336__$1);
var seq41336__$2 = cljs.core.next(seq41336__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41337,G__41338,seq41336__$2);
});

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});
day8.re_frame_10x.view.components.highlight = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.adapt_react_class((function (){var or__4131__auto__ = module$node_modules$react_highlight_DOT_js$dist$main.default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return module$node_modules$react_highlight_DOT_js$dist$main;
}
})());

//# sourceMappingURL=day8.re_frame_10x.view.components.js.map
