goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__40100){
var vec__40101 = p__40100;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40101,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40101,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__40108 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__40125 = arguments.length;
switch (G__40125) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__40130_40212 = clojure.data.equality_partition;
var G__40131_40213 = "null";
var G__40132_40214 = ((function (G__40130_40212,G__40131_40213){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40130_40212,G__40131_40213))
;
goog.object.set(G__40130_40212,G__40131_40213,G__40132_40214);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__40133_40215 = clojure.data.equality_partition;
var G__40134_40216 = "string";
var G__40135_40217 = ((function (G__40133_40215,G__40134_40216){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40133_40215,G__40134_40216))
;
goog.object.set(G__40133_40215,G__40134_40216,G__40135_40217);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__40136_40218 = clojure.data.equality_partition;
var G__40137_40219 = "number";
var G__40138_40220 = ((function (G__40136_40218,G__40137_40219){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40136_40218,G__40137_40219))
;
goog.object.set(G__40136_40218,G__40137_40219,G__40138_40220);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__40139_40221 = clojure.data.equality_partition;
var G__40140_40222 = "array";
var G__40141_40223 = ((function (G__40139_40221,G__40140_40222){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__40139_40221,G__40140_40222))
;
goog.object.set(G__40139_40221,G__40140_40222,G__40141_40223);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__40142_40224 = clojure.data.equality_partition;
var G__40143_40225 = "function";
var G__40144_40226 = ((function (G__40142_40224,G__40143_40225){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40142_40224,G__40143_40225))
;
goog.object.set(G__40142_40224,G__40143_40225,G__40144_40226);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__40145_40227 = clojure.data.equality_partition;
var G__40146_40228 = "boolean";
var G__40147_40229 = ((function (G__40145_40227,G__40146_40228){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40145_40227,G__40146_40228))
;
goog.object.set(G__40145_40227,G__40146_40228,G__40147_40229);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__40148_40230 = clojure.data.equality_partition;
var G__40149_40231 = "_";
var G__40150_40232 = ((function (G__40148_40230,G__40149_40231){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__40148_40230,G__40149_40231))
;
goog.object.set(G__40148_40230,G__40149_40231,G__40150_40232);
goog.object.set(clojure.data.Diff,"null",true);

var G__40161_40237 = clojure.data.diff_similar;
var G__40162_40238 = "null";
var G__40163_40239 = ((function (G__40161_40237,G__40162_40238){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40161_40237,G__40162_40238))
;
goog.object.set(G__40161_40237,G__40162_40238,G__40163_40239);

goog.object.set(clojure.data.Diff,"string",true);

var G__40167_40240 = clojure.data.diff_similar;
var G__40168_40241 = "string";
var G__40169_40242 = ((function (G__40167_40240,G__40168_40241){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40167_40240,G__40168_40241))
;
goog.object.set(G__40167_40240,G__40168_40241,G__40169_40242);

goog.object.set(clojure.data.Diff,"number",true);

var G__40171_40246 = clojure.data.diff_similar;
var G__40172_40247 = "number";
var G__40173_40248 = ((function (G__40171_40246,G__40172_40247){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40171_40246,G__40172_40247))
;
goog.object.set(G__40171_40246,G__40172_40247,G__40173_40248);

goog.object.set(clojure.data.Diff,"array",true);

var G__40178_40251 = clojure.data.diff_similar;
var G__40179_40252 = "array";
var G__40180_40253 = ((function (G__40178_40251,G__40179_40252){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40178_40251,G__40179_40252))
;
goog.object.set(G__40178_40251,G__40179_40252,G__40180_40253);

goog.object.set(clojure.data.Diff,"function",true);

var G__40181_40255 = clojure.data.diff_similar;
var G__40182_40256 = "function";
var G__40183_40257 = ((function (G__40181_40255,G__40182_40256){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40181_40255,G__40182_40256))
;
goog.object.set(G__40181_40255,G__40182_40256,G__40183_40257);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40184_40258 = clojure.data.diff_similar;
var G__40185_40259 = "boolean";
var G__40186_40260 = ((function (G__40184_40258,G__40185_40259){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40184_40258,G__40185_40259))
;
goog.object.set(G__40184_40258,G__40185_40259,G__40186_40260);

goog.object.set(clojure.data.Diff,"_",true);

var G__40187_40262 = clojure.data.diff_similar;
var G__40188_40263 = "_";
var G__40189_40264 = ((function (G__40187_40262,G__40188_40263){
return (function (a,b){
var fexpr__40191 = (function (){var G__40192 = clojure.data.equality_partition(a);
var G__40192__$1 = (((G__40192 instanceof cljs.core.Keyword))?G__40192.fqn:null);
switch (G__40192__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40192__$1)].join('')));

}
})();
return (fexpr__40191.cljs$core$IFn$_invoke$arity$2 ? fexpr__40191.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40191.call(null,a,b));
});})(G__40187_40262,G__40188_40263))
;
goog.object.set(G__40187_40262,G__40188_40263,G__40189_40264);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
