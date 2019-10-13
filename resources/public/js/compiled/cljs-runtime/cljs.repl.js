goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44568){
var map__44569 = p__44568;
var map__44569__$1 = (((((!((map__44569 == null))))?(((((map__44569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44569):map__44569);
var m = map__44569__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44569__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44571_44683 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44572_44684 = null;
var count__44573_44685 = (0);
var i__44574_44686 = (0);
while(true){
if((i__44574_44686 < count__44573_44685)){
var f_44691 = chunk__44572_44684.cljs$core$IIndexed$_nth$arity$2(null,i__44574_44686);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44691], 0));


var G__44701 = seq__44571_44683;
var G__44702 = chunk__44572_44684;
var G__44703 = count__44573_44685;
var G__44704 = (i__44574_44686 + (1));
seq__44571_44683 = G__44701;
chunk__44572_44684 = G__44702;
count__44573_44685 = G__44703;
i__44574_44686 = G__44704;
continue;
} else {
var temp__5735__auto___44705 = cljs.core.seq(seq__44571_44683);
if(temp__5735__auto___44705){
var seq__44571_44706__$1 = temp__5735__auto___44705;
if(cljs.core.chunked_seq_QMARK_(seq__44571_44706__$1)){
var c__4550__auto___44707 = cljs.core.chunk_first(seq__44571_44706__$1);
var G__44708 = cljs.core.chunk_rest(seq__44571_44706__$1);
var G__44709 = c__4550__auto___44707;
var G__44710 = cljs.core.count(c__4550__auto___44707);
var G__44711 = (0);
seq__44571_44683 = G__44708;
chunk__44572_44684 = G__44709;
count__44573_44685 = G__44710;
i__44574_44686 = G__44711;
continue;
} else {
var f_44712 = cljs.core.first(seq__44571_44706__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44712], 0));


var G__44713 = cljs.core.next(seq__44571_44706__$1);
var G__44714 = null;
var G__44715 = (0);
var G__44716 = (0);
seq__44571_44683 = G__44713;
chunk__44572_44684 = G__44714;
count__44573_44685 = G__44715;
i__44574_44686 = G__44716;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44717 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44717], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44717)))?cljs.core.second(arglists_44717):arglists_44717)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44575_44723 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44576_44724 = null;
var count__44577_44725 = (0);
var i__44578_44726 = (0);
while(true){
if((i__44578_44726 < count__44577_44725)){
var vec__44589_44727 = chunk__44576_44724.cljs$core$IIndexed$_nth$arity$2(null,i__44578_44726);
var name_44728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44589_44727,(0),null);
var map__44592_44729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44589_44727,(1),null);
var map__44592_44730__$1 = (((((!((map__44592_44729 == null))))?(((((map__44592_44729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44592_44729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44592_44729):map__44592_44729);
var doc_44731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44592_44730__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44592_44730__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44728], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44732], 0));

if(cljs.core.truth_(doc_44731)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44731], 0));
} else {
}


var G__44740 = seq__44575_44723;
var G__44741 = chunk__44576_44724;
var G__44742 = count__44577_44725;
var G__44743 = (i__44578_44726 + (1));
seq__44575_44723 = G__44740;
chunk__44576_44724 = G__44741;
count__44577_44725 = G__44742;
i__44578_44726 = G__44743;
continue;
} else {
var temp__5735__auto___44744 = cljs.core.seq(seq__44575_44723);
if(temp__5735__auto___44744){
var seq__44575_44745__$1 = temp__5735__auto___44744;
if(cljs.core.chunked_seq_QMARK_(seq__44575_44745__$1)){
var c__4550__auto___44746 = cljs.core.chunk_first(seq__44575_44745__$1);
var G__44748 = cljs.core.chunk_rest(seq__44575_44745__$1);
var G__44749 = c__4550__auto___44746;
var G__44750 = cljs.core.count(c__4550__auto___44746);
var G__44751 = (0);
seq__44575_44723 = G__44748;
chunk__44576_44724 = G__44749;
count__44577_44725 = G__44750;
i__44578_44726 = G__44751;
continue;
} else {
var vec__44595_44752 = cljs.core.first(seq__44575_44745__$1);
var name_44753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44595_44752,(0),null);
var map__44598_44754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44595_44752,(1),null);
var map__44598_44755__$1 = (((((!((map__44598_44754 == null))))?(((((map__44598_44754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44598_44754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44598_44754):map__44598_44754);
var doc_44756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44598_44755__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44598_44755__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44753], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44757], 0));

if(cljs.core.truth_(doc_44756)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44756], 0));
} else {
}


var G__44762 = cljs.core.next(seq__44575_44745__$1);
var G__44763 = null;
var G__44764 = (0);
var G__44765 = (0);
seq__44575_44723 = G__44762;
chunk__44576_44724 = G__44763;
count__44577_44725 = G__44764;
i__44578_44726 = G__44765;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44600 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44601 = null;
var count__44602 = (0);
var i__44603 = (0);
while(true){
if((i__44603 < count__44602)){
var role = chunk__44601.cljs$core$IIndexed$_nth$arity$2(null,i__44603);
var temp__5735__auto___44766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44766__$1)){
var spec_44767 = temp__5735__auto___44766__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44767)], 0));
} else {
}


var G__44768 = seq__44600;
var G__44769 = chunk__44601;
var G__44770 = count__44602;
var G__44771 = (i__44603 + (1));
seq__44600 = G__44768;
chunk__44601 = G__44769;
count__44602 = G__44770;
i__44603 = G__44771;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__44600);
if(temp__5735__auto____$1){
var seq__44600__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44600__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44600__$1);
var G__44772 = cljs.core.chunk_rest(seq__44600__$1);
var G__44773 = c__4550__auto__;
var G__44774 = cljs.core.count(c__4550__auto__);
var G__44775 = (0);
seq__44600 = G__44772;
chunk__44601 = G__44773;
count__44602 = G__44774;
i__44603 = G__44775;
continue;
} else {
var role = cljs.core.first(seq__44600__$1);
var temp__5735__auto___44776__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44776__$2)){
var spec_44781 = temp__5735__auto___44776__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44781)], 0));
} else {
}


var G__44784 = cljs.core.next(seq__44600__$1);
var G__44785 = null;
var G__44786 = (0);
var G__44787 = (0);
seq__44600 = G__44784;
chunk__44601 = G__44785;
count__44602 = G__44786;
i__44603 = G__44787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__44801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44802 = cljs.core.ex_cause(t);
via = G__44801;
t = G__44802;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44606 = datafied_throwable;
var map__44606__$1 = (((((!((map__44606 == null))))?(((((map__44606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44606):map__44606);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44606__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44606__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44606__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44607 = cljs.core.last(via);
var map__44607__$1 = (((((!((map__44607 == null))))?(((((map__44607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44607):map__44607);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44607__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44607__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44608 = data;
var map__44608__$1 = (((((!((map__44608 == null))))?(((((map__44608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44608):map__44608);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44608__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44608__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44608__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44609 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44609__$1 = (((((!((map__44609 == null))))?(((((map__44609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44609):map__44609);
var top_data = map__44609__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44614 = phase;
var G__44614__$1 = (((G__44614 instanceof cljs.core.Keyword))?G__44614.fqn:null);
switch (G__44614__$1) {
case "read-source":
var map__44615 = data;
var map__44615__$1 = (((((!((map__44615 == null))))?(((((map__44615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44615):map__44615);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44618 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44618__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44618,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44618);
var G__44618__$2 = (cljs.core.truth_((function (){var fexpr__44619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44619.cljs$core$IFn$_invoke$arity$1 ? fexpr__44619.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44619.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44618__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44618__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44618__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44620 = top_data;
var G__44620__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44620,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44620);
var G__44620__$2 = (cljs.core.truth_((function (){var fexpr__44621 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44621.cljs$core$IFn$_invoke$arity$1 ? fexpr__44621.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44621.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44620__$1);
var G__44620__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44620__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44620__$2);
var G__44620__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44620__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44620__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44620__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44620__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44622 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(3),null);
var G__44625 = top_data;
var G__44625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44625);
var G__44625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44625__$1);
var G__44625__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44625__$2);
var G__44625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44625__$4;
}

break;
case "execution":
var vec__44626 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44626,source__$1,method,file,line,G__44614,G__44614__$1,map__44606,map__44606__$1,via,trace,phase,map__44607,map__44607__$1,type,message,data,map__44608,map__44608__$1,problems,fn,caller,map__44609,map__44609__$1,top_data,source){
return (function (p1__44605_SHARP_){
var or__4131__auto__ = (p1__44605_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44630 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44630.cljs$core$IFn$_invoke$arity$1 ? fexpr__44630.cljs$core$IFn$_invoke$arity$1(p1__44605_SHARP_) : fexpr__44630.call(null,p1__44605_SHARP_));
}
});})(vec__44626,source__$1,method,file,line,G__44614,G__44614__$1,map__44606,map__44606__$1,via,trace,phase,map__44607,map__44607__$1,type,message,data,map__44608,map__44608__$1,problems,fn,caller,map__44609,map__44609__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44635__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44635,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44635);
var G__44635__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44635__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44635__$1);
var G__44635__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44635__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44635__$2);
var G__44635__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44635__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44635__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44635__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44635__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44614__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44639){
var map__44640 = p__44639;
var map__44640__$1 = (((((!((map__44640 == null))))?(((((map__44640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44640):map__44640);
var triage_data = map__44640__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44642 = phase;
var G__44642__$1 = (((G__44642 instanceof cljs.core.Keyword))?G__44642.fqn:null);
switch (G__44642__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44643 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44644 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44645 = loc;
var G__44646 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44647_44882 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44648_44883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44649_44884 = true;
var _STAR_print_fn_STAR__temp_val__44650_44885 = ((function (_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44649_44884;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44650_44885;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,_STAR_print_fn_STAR__temp_val__44650_44885,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,_STAR_print_fn_STAR__temp_val__44650_44885,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44637_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44637_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,_STAR_print_fn_STAR__temp_val__44650_44885,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44647_44882,_STAR_print_fn_STAR__orig_val__44648_44883,_STAR_print_newline_STAR__temp_val__44649_44884,_STAR_print_fn_STAR__temp_val__44650_44885,sb__4661__auto__,G__44643,G__44644,G__44645,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44648_44883;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44647_44882;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44643,G__44644,G__44645,G__44646) : format.call(null,G__44643,G__44644,G__44645,G__44646));

break;
case "macroexpansion":
var G__44651 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44652 = cause_type;
var G__44653 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44654 = loc;
var G__44655 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44651,G__44652,G__44653,G__44654,G__44655) : format.call(null,G__44651,G__44652,G__44653,G__44654,G__44655));

break;
case "compile-syntax-check":
var G__44656 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44657 = cause_type;
var G__44658 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44659 = loc;
var G__44660 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44656,G__44657,G__44658,G__44659,G__44660) : format.call(null,G__44656,G__44657,G__44658,G__44659,G__44660));

break;
case "compilation":
var G__44661 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44662 = cause_type;
var G__44663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44664 = loc;
var G__44665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44661,G__44662,G__44663,G__44664,G__44665) : format.call(null,G__44661,G__44662,G__44663,G__44664,G__44665));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44666 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44667 = symbol;
var G__44668 = loc;
var G__44669 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44670_44888 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44671_44889 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44672_44890 = true;
var _STAR_print_fn_STAR__temp_val__44673_44891 = ((function (_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44672_44890;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44673_44891;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,_STAR_print_fn_STAR__temp_val__44673_44891,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,_STAR_print_fn_STAR__temp_val__44673_44891,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44638_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44638_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,_STAR_print_fn_STAR__temp_val__44673_44891,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44670_44888,_STAR_print_fn_STAR__orig_val__44671_44889,_STAR_print_newline_STAR__temp_val__44672_44890,_STAR_print_fn_STAR__temp_val__44673_44891,sb__4661__auto__,G__44666,G__44667,G__44668,G__44642,G__44642__$1,loc,class_name,simple_class,cause_type,format,map__44640,map__44640__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44671_44889;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44670_44888;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44666,G__44667,G__44668,G__44669) : format.call(null,G__44666,G__44667,G__44668,G__44669));
} else {
var G__44674 = "Execution error%s at %s(%s).\n%s\n";
var G__44675 = cause_type;
var G__44676 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44677 = loc;
var G__44678 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44674,G__44675,G__44676,G__44677,G__44678) : format.call(null,G__44674,G__44675,G__44676,G__44677,G__44678));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44642__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
