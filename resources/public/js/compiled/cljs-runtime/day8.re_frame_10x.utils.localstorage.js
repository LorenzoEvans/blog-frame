goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__45134 = arguments.length;
switch (G__45134) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__45152 = cljs.core.seq(Object.keys(localStorage));
var chunk__45153 = null;
var count__45154 = (0);
var i__45155 = (0);
while(true){
if((i__45155 < count__45154)){
var k = chunk__45153.cljs$core$IIndexed$_nth$arity$2(null,i__45155);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__45191 = seq__45152;
var G__45192 = chunk__45153;
var G__45193 = count__45154;
var G__45194 = (i__45155 + (1));
seq__45152 = G__45191;
chunk__45153 = G__45192;
count__45154 = G__45193;
i__45155 = G__45194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45152);
if(temp__5735__auto__){
var seq__45152__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45152__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45152__$1);
var G__45195 = cljs.core.chunk_rest(seq__45152__$1);
var G__45196 = c__4550__auto__;
var G__45197 = cljs.core.count(c__4550__auto__);
var G__45198 = (0);
seq__45152 = G__45195;
chunk__45153 = G__45196;
count__45154 = G__45197;
i__45155 = G__45198;
continue;
} else {
var k = cljs.core.first(seq__45152__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__45199 = cljs.core.next(seq__45152__$1);
var G__45200 = null;
var G__45201 = (0);
var G__45202 = (0);
seq__45152 = G__45199;
chunk__45153 = G__45200;
count__45154 = G__45201;
i__45155 = G__45202;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
