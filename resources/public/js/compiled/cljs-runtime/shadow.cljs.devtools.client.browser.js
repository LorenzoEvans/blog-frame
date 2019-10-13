goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50845 = arguments.length;
var i__4731__auto___50846 = (0);
while(true){
if((i__4731__auto___50846 < len__4730__auto___50845)){
args__4736__auto__.push((arguments[i__4731__auto___50846]));

var G__50847 = (i__4731__auto___50846 + (1));
i__4731__auto___50846 = G__50847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50552){
var G__50553 = cljs.core.first(seq50552);
var seq50552__$1 = cljs.core.next(seq50552);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50553,seq50552__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50560){
var map__50562 = p__50560;
var map__50562__$1 = (((((!((map__50562 == null))))?(((((map__50562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50562):map__50562);
var src = map__50562__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50567 = cljs.core.seq(sources);
var chunk__50568 = null;
var count__50569 = (0);
var i__50570 = (0);
while(true){
if((i__50570 < count__50569)){
var map__50585 = chunk__50568.cljs$core$IIndexed$_nth$arity$2(null,i__50570);
var map__50585__$1 = (((((!((map__50585 == null))))?(((((map__50585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50585):map__50585);
var src = map__50585__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50585__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50588){var e_50857 = e50588;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50857);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50857.message)].join('')));
}

var G__50858 = seq__50567;
var G__50859 = chunk__50568;
var G__50860 = count__50569;
var G__50861 = (i__50570 + (1));
seq__50567 = G__50858;
chunk__50568 = G__50859;
count__50569 = G__50860;
i__50570 = G__50861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50567);
if(temp__5735__auto__){
var seq__50567__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50567__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50567__$1);
var G__50864 = cljs.core.chunk_rest(seq__50567__$1);
var G__50865 = c__4550__auto__;
var G__50866 = cljs.core.count(c__4550__auto__);
var G__50867 = (0);
seq__50567 = G__50864;
chunk__50568 = G__50865;
count__50569 = G__50866;
i__50570 = G__50867;
continue;
} else {
var map__50589 = cljs.core.first(seq__50567__$1);
var map__50589__$1 = (((((!((map__50589 == null))))?(((((map__50589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50589):map__50589);
var src = map__50589__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50589__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50591){var e_50875 = e50591;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50875);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50875.message)].join('')));
}

var G__50879 = cljs.core.next(seq__50567__$1);
var G__50880 = null;
var G__50881 = (0);
var G__50882 = (0);
seq__50567 = G__50879;
chunk__50568 = G__50880;
count__50569 = G__50881;
i__50570 = G__50882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50596 = cljs.core.seq(js_requires);
var chunk__50597 = null;
var count__50598 = (0);
var i__50599 = (0);
while(true){
if((i__50599 < count__50598)){
var js_ns = chunk__50597.cljs$core$IIndexed$_nth$arity$2(null,i__50599);
var require_str_50883 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50883);


var G__50884 = seq__50596;
var G__50885 = chunk__50597;
var G__50886 = count__50598;
var G__50887 = (i__50599 + (1));
seq__50596 = G__50884;
chunk__50597 = G__50885;
count__50598 = G__50886;
i__50599 = G__50887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50596);
if(temp__5735__auto__){
var seq__50596__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50596__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50596__$1);
var G__50888 = cljs.core.chunk_rest(seq__50596__$1);
var G__50889 = c__4550__auto__;
var G__50890 = cljs.core.count(c__4550__auto__);
var G__50891 = (0);
seq__50596 = G__50888;
chunk__50597 = G__50889;
count__50598 = G__50890;
i__50599 = G__50891;
continue;
} else {
var js_ns = cljs.core.first(seq__50596__$1);
var require_str_50892 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50892);


var G__50893 = cljs.core.next(seq__50596__$1);
var G__50894 = null;
var G__50895 = (0);
var G__50896 = (0);
seq__50596 = G__50893;
chunk__50597 = G__50894;
count__50598 = G__50895;
i__50599 = G__50896;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50602 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50602) : callback.call(null,G__50602));
} else {
var G__50603 = shadow.cljs.devtools.client.env.files_url();
var G__50604 = ((function (G__50603){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__50603))
;
var G__50605 = "POST";
var G__50606 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50607 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50603,G__50604,G__50605,G__50606,G__50607);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50609){
var map__50610 = p__50609;
var map__50610__$1 = (((((!((map__50610 == null))))?(((((map__50610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50610):map__50610);
var msg = map__50610__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50610__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50610__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50612 = info;
var map__50612__$1 = (((((!((map__50612 == null))))?(((((map__50612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50612):map__50612);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50614(s__50615){
return (new cljs.core.LazySeq(null,((function (map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info){
return (function (){
var s__50615__$1 = s__50615;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50615__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50620 = cljs.core.first(xs__6292__auto__);
var map__50620__$1 = (((((!((map__50620 == null))))?(((((map__50620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50620):map__50620);
var src = map__50620__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50620__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50620__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__50615__$1,map__50620,map__50620__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50614_$_iter__50616(s__50617){
return (new cljs.core.LazySeq(null,((function (s__50615__$1,map__50620,map__50620__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info){
return (function (){
var s__50617__$1 = s__50617;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50617__$1);
if(temp__5735__auto____$1){
var s__50617__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50617__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50617__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50619 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50618 = (0);
while(true){
if((i__50618 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50618);
cljs.core.chunk_append(b__50619,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50897 = (i__50618 + (1));
i__50618 = G__50897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50619),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50614_$_iter__50616(cljs.core.chunk_rest(s__50617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50619),null);
}
} else {
var warning = cljs.core.first(s__50617__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50614_$_iter__50616(cljs.core.rest(s__50617__$2)));
}
} else {
return null;
}
break;
}
});})(s__50615__$1,map__50620,map__50620__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info))
,null,null));
});})(s__50615__$1,map__50620,map__50620__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50614(cljs.core.rest(s__50615__$1)));
} else {
var G__50898 = cljs.core.rest(s__50615__$1);
s__50615__$1 = G__50898;
continue;
}
} else {
var G__50899 = cljs.core.rest(s__50615__$1);
s__50615__$1 = G__50899;
continue;
}
} else {
return null;
}
break;
}
});})(map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info))
,null,null));
});})(map__50612,map__50612__$1,sources,compiled,map__50610,map__50610__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__50624_50900 = cljs.core.seq(warnings);
var chunk__50625_50901 = null;
var count__50626_50902 = (0);
var i__50627_50903 = (0);
while(true){
if((i__50627_50903 < count__50626_50902)){
var map__50637_50904 = chunk__50625_50901.cljs$core$IIndexed$_nth$arity$2(null,i__50627_50903);
var map__50637_50905__$1 = (((((!((map__50637_50904 == null))))?(((((map__50637_50904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50637_50904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50637_50904):map__50637_50904);
var w_50906 = map__50637_50905__$1;
var msg_50907__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637_50905__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637_50905__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637_50905__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637_50905__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50910)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50908),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50909),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50907__$1)].join(''));


var G__50914 = seq__50624_50900;
var G__50915 = chunk__50625_50901;
var G__50916 = count__50626_50902;
var G__50917 = (i__50627_50903 + (1));
seq__50624_50900 = G__50914;
chunk__50625_50901 = G__50915;
count__50626_50902 = G__50916;
i__50627_50903 = G__50917;
continue;
} else {
var temp__5735__auto___50918 = cljs.core.seq(seq__50624_50900);
if(temp__5735__auto___50918){
var seq__50624_50919__$1 = temp__5735__auto___50918;
if(cljs.core.chunked_seq_QMARK_(seq__50624_50919__$1)){
var c__4550__auto___50920 = cljs.core.chunk_first(seq__50624_50919__$1);
var G__50921 = cljs.core.chunk_rest(seq__50624_50919__$1);
var G__50922 = c__4550__auto___50920;
var G__50923 = cljs.core.count(c__4550__auto___50920);
var G__50924 = (0);
seq__50624_50900 = G__50921;
chunk__50625_50901 = G__50922;
count__50626_50902 = G__50923;
i__50627_50903 = G__50924;
continue;
} else {
var map__50645_50925 = cljs.core.first(seq__50624_50919__$1);
var map__50645_50926__$1 = (((((!((map__50645_50925 == null))))?(((((map__50645_50925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50645_50925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50645_50925):map__50645_50925);
var w_50927 = map__50645_50926__$1;
var msg_50928__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645_50926__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645_50926__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645_50926__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645_50926__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50931)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50929),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50930),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50928__$1)].join(''));


var G__50935 = cljs.core.next(seq__50624_50919__$1);
var G__50936 = null;
var G__50937 = (0);
var G__50938 = (0);
seq__50624_50900 = G__50935;
chunk__50625_50901 = G__50936;
count__50626_50902 = G__50937;
i__50627_50903 = G__50938;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info){
return (function (p__50651){
var map__50652 = p__50651;
var map__50652__$1 = (((((!((map__50652 == null))))?(((((map__50652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50652):map__50652);
var src = map__50652__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info){
return (function (p__50656){
var map__50657 = p__50656;
var map__50657__$1 = (((((!((map__50657 == null))))?(((((map__50657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50657):map__50657);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info){
return (function (p__50661){
var map__50662 = p__50661;
var map__50662__$1 = (((((!((map__50662 == null))))?(((((map__50662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50662):map__50662);
var rc = map__50662__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info){
return (function (p1__50608_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50608_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__50612,map__50612__$1,sources,compiled,warnings,map__50610,map__50610__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50682){
var map__50683 = p__50682;
var map__50683__$1 = (((((!((map__50683 == null))))?(((((map__50683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50683):map__50683);
var msg = map__50683__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50683__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50686 = cljs.core.seq(updates);
var chunk__50688 = null;
var count__50689 = (0);
var i__50690 = (0);
while(true){
if((i__50690 < count__50689)){
var path = chunk__50688.cljs$core$IIndexed$_nth$arity$2(null,i__50690);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50754_50941 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50757_50942 = null;
var count__50758_50943 = (0);
var i__50759_50944 = (0);
while(true){
if((i__50759_50944 < count__50758_50943)){
var node_50945 = chunk__50757_50942.cljs$core$IIndexed$_nth$arity$2(null,i__50759_50944);
var path_match_50946 = shadow.cljs.devtools.client.browser.match_paths(node_50945.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50946)){
var new_link_50947 = (function (){var G__50772 = node_50945.cloneNode(true);
G__50772.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50946),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50772;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50946], 0));

goog.dom.insertSiblingAfter(new_link_50947,node_50945);

goog.dom.removeNode(node_50945);


var G__50948 = seq__50754_50941;
var G__50949 = chunk__50757_50942;
var G__50950 = count__50758_50943;
var G__50951 = (i__50759_50944 + (1));
seq__50754_50941 = G__50948;
chunk__50757_50942 = G__50949;
count__50758_50943 = G__50950;
i__50759_50944 = G__50951;
continue;
} else {
var G__50952 = seq__50754_50941;
var G__50953 = chunk__50757_50942;
var G__50954 = count__50758_50943;
var G__50955 = (i__50759_50944 + (1));
seq__50754_50941 = G__50952;
chunk__50757_50942 = G__50953;
count__50758_50943 = G__50954;
i__50759_50944 = G__50955;
continue;
}
} else {
var temp__5735__auto___50956 = cljs.core.seq(seq__50754_50941);
if(temp__5735__auto___50956){
var seq__50754_50957__$1 = temp__5735__auto___50956;
if(cljs.core.chunked_seq_QMARK_(seq__50754_50957__$1)){
var c__4550__auto___50958 = cljs.core.chunk_first(seq__50754_50957__$1);
var G__50959 = cljs.core.chunk_rest(seq__50754_50957__$1);
var G__50960 = c__4550__auto___50958;
var G__50961 = cljs.core.count(c__4550__auto___50958);
var G__50962 = (0);
seq__50754_50941 = G__50959;
chunk__50757_50942 = G__50960;
count__50758_50943 = G__50961;
i__50759_50944 = G__50962;
continue;
} else {
var node_50963 = cljs.core.first(seq__50754_50957__$1);
var path_match_50964 = shadow.cljs.devtools.client.browser.match_paths(node_50963.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50964)){
var new_link_50965 = (function (){var G__50774 = node_50963.cloneNode(true);
G__50774.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50964),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50774;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50964], 0));

goog.dom.insertSiblingAfter(new_link_50965,node_50963);

goog.dom.removeNode(node_50963);


var G__50966 = cljs.core.next(seq__50754_50957__$1);
var G__50967 = null;
var G__50968 = (0);
var G__50969 = (0);
seq__50754_50941 = G__50966;
chunk__50757_50942 = G__50967;
count__50758_50943 = G__50968;
i__50759_50944 = G__50969;
continue;
} else {
var G__50970 = cljs.core.next(seq__50754_50957__$1);
var G__50971 = null;
var G__50972 = (0);
var G__50973 = (0);
seq__50754_50941 = G__50970;
chunk__50757_50942 = G__50971;
count__50758_50943 = G__50972;
i__50759_50944 = G__50973;
continue;
}
}
} else {
}
}
break;
}


var G__50974 = seq__50686;
var G__50975 = chunk__50688;
var G__50976 = count__50689;
var G__50977 = (i__50690 + (1));
seq__50686 = G__50974;
chunk__50688 = G__50975;
count__50689 = G__50976;
i__50690 = G__50977;
continue;
} else {
var G__50978 = seq__50686;
var G__50979 = chunk__50688;
var G__50980 = count__50689;
var G__50981 = (i__50690 + (1));
seq__50686 = G__50978;
chunk__50688 = G__50979;
count__50689 = G__50980;
i__50690 = G__50981;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50686);
if(temp__5735__auto__){
var seq__50686__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50686__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50686__$1);
var G__50982 = cljs.core.chunk_rest(seq__50686__$1);
var G__50983 = c__4550__auto__;
var G__50984 = cljs.core.count(c__4550__auto__);
var G__50985 = (0);
seq__50686 = G__50982;
chunk__50688 = G__50983;
count__50689 = G__50984;
i__50690 = G__50985;
continue;
} else {
var path = cljs.core.first(seq__50686__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50775_50986 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50778_50987 = null;
var count__50779_50988 = (0);
var i__50780_50989 = (0);
while(true){
if((i__50780_50989 < count__50779_50988)){
var node_50990 = chunk__50778_50987.cljs$core$IIndexed$_nth$arity$2(null,i__50780_50989);
var path_match_50991 = shadow.cljs.devtools.client.browser.match_paths(node_50990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50991)){
var new_link_50992 = (function (){var G__50785 = node_50990.cloneNode(true);
G__50785.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50785;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50991], 0));

goog.dom.insertSiblingAfter(new_link_50992,node_50990);

goog.dom.removeNode(node_50990);


var G__50993 = seq__50775_50986;
var G__50994 = chunk__50778_50987;
var G__50995 = count__50779_50988;
var G__50996 = (i__50780_50989 + (1));
seq__50775_50986 = G__50993;
chunk__50778_50987 = G__50994;
count__50779_50988 = G__50995;
i__50780_50989 = G__50996;
continue;
} else {
var G__50997 = seq__50775_50986;
var G__50998 = chunk__50778_50987;
var G__50999 = count__50779_50988;
var G__51000 = (i__50780_50989 + (1));
seq__50775_50986 = G__50997;
chunk__50778_50987 = G__50998;
count__50779_50988 = G__50999;
i__50780_50989 = G__51000;
continue;
}
} else {
var temp__5735__auto___51001__$1 = cljs.core.seq(seq__50775_50986);
if(temp__5735__auto___51001__$1){
var seq__50775_51002__$1 = temp__5735__auto___51001__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50775_51002__$1)){
var c__4550__auto___51003 = cljs.core.chunk_first(seq__50775_51002__$1);
var G__51004 = cljs.core.chunk_rest(seq__50775_51002__$1);
var G__51005 = c__4550__auto___51003;
var G__51006 = cljs.core.count(c__4550__auto___51003);
var G__51007 = (0);
seq__50775_50986 = G__51004;
chunk__50778_50987 = G__51005;
count__50779_50988 = G__51006;
i__50780_50989 = G__51007;
continue;
} else {
var node_51008 = cljs.core.first(seq__50775_51002__$1);
var path_match_51009 = shadow.cljs.devtools.client.browser.match_paths(node_51008.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51009)){
var new_link_51010 = (function (){var G__50787 = node_51008.cloneNode(true);
G__50787.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51009),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50787;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51009], 0));

goog.dom.insertSiblingAfter(new_link_51010,node_51008);

goog.dom.removeNode(node_51008);


var G__51011 = cljs.core.next(seq__50775_51002__$1);
var G__51012 = null;
var G__51013 = (0);
var G__51014 = (0);
seq__50775_50986 = G__51011;
chunk__50778_50987 = G__51012;
count__50779_50988 = G__51013;
i__50780_50989 = G__51014;
continue;
} else {
var G__51015 = cljs.core.next(seq__50775_51002__$1);
var G__51016 = null;
var G__51017 = (0);
var G__51018 = (0);
seq__50775_50986 = G__51015;
chunk__50778_50987 = G__51016;
count__50779_50988 = G__51017;
i__50780_50989 = G__51018;
continue;
}
}
} else {
}
}
break;
}


var G__51019 = cljs.core.next(seq__50686__$1);
var G__51020 = null;
var G__51021 = (0);
var G__51022 = (0);
seq__50686 = G__51019;
chunk__50688 = G__51020;
count__50689 = G__51021;
i__50690 = G__51022;
continue;
} else {
var G__51023 = cljs.core.next(seq__50686__$1);
var G__51024 = null;
var G__51025 = (0);
var G__51026 = (0);
seq__50686 = G__51023;
chunk__50688 = G__51024;
count__50689 = G__51025;
i__50690 = G__51026;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50794){
var map__50795 = p__50794;
var map__50795__$1 = (((((!((map__50795 == null))))?(((((map__50795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50795):map__50795);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50795__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__50795,map__50795__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__50795,map__50795__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50801,done){
var map__50802 = p__50801;
var map__50802__$1 = (((((!((map__50802 == null))))?(((((map__50802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50802):map__50802);
var msg = map__50802__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50802,map__50802__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__50809){
var map__50810 = p__50809;
var map__50810__$1 = (((((!((map__50810 == null))))?(((((map__50810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50810):map__50810);
var src = map__50810__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50810__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__50802,map__50802__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__50802,map__50802__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50812){var e = e50812;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__50802,map__50802__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50813,done){
var map__50814 = p__50813;
var map__50814__$1 = (((((!((map__50814 == null))))?(((((map__50814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50814):map__50814);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__50814,map__50814__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__50814,map__50814__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50822){
var map__50823 = p__50822;
var map__50823__$1 = (((((!((map__50823 == null))))?(((((map__50823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50823):map__50823);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50823__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50825,done){
var map__50826 = p__50825;
var map__50826__$1 = (((((!((map__50826 == null))))?(((((map__50826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50826):map__50826);
var msg = map__50826__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50828_51027 = type;
var G__50828_51028__$1 = (((G__50828_51027 instanceof cljs.core.Keyword))?G__50828_51027.fqn:null);
switch (G__50828_51028__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__50829 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50830 = ((function (G__50829){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__50829))
;
var G__50831 = "POST";
var G__50832 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50833 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50829,G__50830,G__50831,G__50832,G__50833);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e50836){var e = e50836;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51032 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51032)){
var s_51033 = temp__5735__auto___51032;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_51033.onclose = ((function (s_51033,temp__5735__auto___51032){
return (function (e){
return null;
});})(s_51033,temp__5735__auto___51032))
;

s_51033.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
