goog.provide('sibiro.core');
goog.require('cljs.core');
goog.require('clojure.string');
sibiro.core.url_encode = (function sibiro$core$url_encode(string){
var G__44193 = string;
var G__44193__$1 = (((G__44193 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44193));
var G__44193__$2 = (((G__44193__$1 == null))?null:encodeURIComponent(G__44193__$1));
if((G__44193__$2 == null)){
return null;
} else {
return G__44193__$2.replace("+","%20");
}
});
sibiro.core.url_decode = (function sibiro$core$url_decode(string){
var G__44194 = string;
var G__44194__$1 = (((G__44194 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44194));
if((G__44194__$1 == null)){
return null;
} else {
return decodeURIComponent(G__44194__$1);
}
});
sibiro.core.keyword_regex = (function sibiro$core$keyword_regex(string,start){
var re_start = string.indexOf("{");
var re_stop = string.indexOf("}");
if(((0) <= re_start)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,start,re_start)),cljs.core.re_pattern(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(re_start + (1)),re_stop))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(string,start)),null], null);
}
});
sibiro.core.path_parts = (function sibiro$core$path_parts(path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
if(cljs.core.truth_(p.startsWith(":"))){
return sibiro.core.keyword_regex(p,(1));
} else {
if(cljs.core.truth_(p.startsWith("*"))){
return sibiro.core.keyword_regex(p,(0));
} else {
return p;

}
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
sibiro.core.routes_tree = (function sibiro$core$routes_tree(routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__44196){
var vec__44197 = p__44196;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44197,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44197,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44197,(2),null);
var route = vec__44197;
var parts = sibiro.core.path_parts(path);
var arguments$ = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,parts);
var keywords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,arguments$);
var regexes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,arguments$);
var in$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parts,arguments$,keywords,regexes,vec__44197,method,path,handler,route){
return (function (p1__44195_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var and__4120__auto__ = cljs.core.vector_QMARK_(p1__44195_SHARP_);
if(and__4120__auto__){
return cljs.core.first(p1__44195_SHARP_);
} else {
return and__4120__auto__;
}
})(),new cljs.core.Keyword(null,"*","*",-1294732318))){
return new cljs.core.Keyword(null,"*","*",-1294732318);
} else {
if(cljs.core.vector_QMARK_(p1__44195_SHARP_)){
return new cljs.core.Keyword(null,"arg","arg",-1747261837);
} else {
return p1__44195_SHARP_;

}
}
});})(parts,arguments$,keywords,regexes,vec__44197,method,path,handler,route))
,parts);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(result,in$,cljs.core.assoc,method,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"route-handler","route-handler",267253263),handler,new cljs.core.Keyword(null,"route-params","route-params",2111411055),keywords,new cljs.core.Keyword(null,"regexes","regexes",328165980),regexes], null));
}),cljs.core.PersistentArrayMap.EMPTY,routes);
});
sibiro.core.check_regexes = (function sibiro$core$check_regexes(params,regexes){
var params__$1 = params;
var regexes__$1 = regexes;
while(true){
var temp__5733__auto__ = cljs.core.first(params__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var param = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.first(regexes__$1);
if(cljs.core.truth_(temp__5733__auto____$1)){
var regex = temp__5733__auto____$1;
if(cljs.core.truth_(cljs.core.re_matches(regex,param))){
var G__44269 = cljs.core.rest(params__$1);
var G__44270 = cljs.core.rest(regexes__$1);
params__$1 = G__44269;
regexes__$1 = G__44270;
continue;
} else {
return false;
}
} else {
var G__44271 = cljs.core.rest(params__$1);
var G__44272 = cljs.core.rest(regexes__$1);
params__$1 = G__44271;
regexes__$1 = G__44272;
continue;
}
} else {
return true;
}
break;
}
});
sibiro.core.match_uri_STAR_ = (function sibiro$core$match_uri_STAR_(tree,parts,params,method){
var temp__5733__auto__ = cljs.core.first(parts);
if(cljs.core.truth_(temp__5733__auto__)){
var part = temp__5733__auto__;
return (new cljs.core.LazySeq(null,((function (part,temp__5733__auto__){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,part);
if(cljs.core.truth_(temp__5735__auto__)){
var subtree = temp__5735__auto__;
var G__44200 = subtree;
var G__44201 = cljs.core.rest(parts);
var G__44202 = params;
var G__44203 = method;
return (sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4 ? sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4(G__44200,G__44201,G__44202,G__44203) : sibiro.core.match_uri_STAR_.call(null,G__44200,G__44201,G__44202,G__44203));
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.Keyword(null,"arg","arg",-1747261837));
if(cljs.core.truth_(temp__5735__auto__)){
var subtree = temp__5735__auto__;
var G__44204 = subtree;
var G__44205 = cljs.core.rest(parts);
var G__44206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,part);
var G__44207 = method;
return (sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4 ? sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4(G__44204,G__44205,G__44206,G__44207) : sibiro.core.match_uri_STAR_.call(null,G__44204,G__44205,G__44206,G__44207));
} else {
return null;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.Keyword(null,"*","*",-1294732318));
if(cljs.core.truth_(temp__5735__auto__)){
var subtree = temp__5735__auto__;
var G__44208 = subtree;
var G__44209 = null;
var G__44210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",parts)));
var G__44211 = method;
return (sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4 ? sibiro.core.match_uri_STAR_.cljs$core$IFn$_invoke$arity$4(G__44208,G__44209,G__44210,G__44211) : sibiro.core.match_uri_STAR_.call(null,G__44208,G__44209,G__44210,G__44211));
} else {
return null;
}
})()], 0));
});})(part,temp__5733__auto__))
,null,null));
} else {
return (new cljs.core.LazySeq(null,((function (temp__5733__auto__){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,method);
if(cljs.core.truth_(temp__5735__auto__)){
var result = temp__5735__auto__;
if(sibiro.core.check_regexes(params,new cljs.core.Keyword(null,"regexes","regexes",328165980).cljs$core$IFn$_invoke$arity$1(result))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"regexes","regexes",328165980)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.zipmap,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sibiro.core.url_decode,params))], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.Keyword(null,"any","any",1705907423));
if(cljs.core.truth_(temp__5735__auto__)){
var result = temp__5735__auto__;
if(sibiro.core.check_regexes(params,new cljs.core.Keyword(null,"regexes","regexes",328165980).cljs$core$IFn$_invoke$arity$1(result))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"regexes","regexes",328165980)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null),cljs.core.zipmap,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sibiro.core.url_decode,params))], null);
} else {
return null;
}
} else {
return null;
}
})());
});})(temp__5733__auto__))
,null,null));
}
});
sibiro.core.query_string = (function sibiro$core$query_string(data){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"?",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__4523__auto__ = (function sibiro$core$query_string_$_iter__44212(s__44213){
return (new cljs.core.LazySeq(null,(function (){
var s__44213__$1 = s__44213;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44213__$1);
if(temp__5735__auto__){
var s__44213__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44213__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44213__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44215 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44214 = (0);
while(true){
if((i__44214 < size__4522__auto__)){
var vec__44216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44214);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44216,(1),null);
cljs.core.chunk_append(b__44215,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibiro.core.url_encode(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibiro.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join(''));

var G__44273 = (i__44214 + (1));
i__44214 = G__44273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44215),sibiro$core$query_string_$_iter__44212(cljs.core.chunk_rest(s__44213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44215),null);
}
} else {
var vec__44219 = cljs.core.first(s__44213__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibiro.core.url_encode(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibiro.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join(''),sibiro$core$query_string_$_iter__44212(cljs.core.rest(s__44213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(data);
})()));
});
sibiro.core.throw_unmatched = (function sibiro$core$throw_unmatched(regex,key,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," with value '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"' does not match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"regex","regex",939488856),regex,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
sibiro.core.uri_for_fn = (function sibiro$core$uri_for_fn(path){
var parts = sibiro.core.path_parts(path);
var keyset = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,parts)));
return ((function (parts,keyset){
return (function (data){
var temp__5735__auto___44274 = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,keyset,cljs.core.keys(data)));
if(temp__5735__auto___44274){
var diff_44275 = temp__5735__auto___44274;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing data for path.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"missing-keys","missing-keys",1110061005),diff_44275], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",(function (){var iter__4523__auto__ = ((function (parts,keyset){
return (function sibiro$core$uri_for_fn_$_iter__44225(s__44226){
return (new cljs.core.LazySeq(null,((function (parts,keyset){
return (function (){
var s__44226__$1 = s__44226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44226__$1);
if(temp__5735__auto__){
var s__44226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44226__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44226__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44228 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44227 = (0);
while(true){
if((i__44227 < size__4522__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44227);
cljs.core.chunk_append(b__44228,((cljs.core.vector_QMARK_(part))?(function (){var key = cljs.core.first(part);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var temp__5733__auto__ = cljs.core.second(part);
if(cljs.core.truth_(temp__5733__auto__)){
var re = temp__5733__auto__;
if(cljs.core.truth_(cljs.core.re_matches(re,val))){
return sibiro.core.url_encode(val);
} else {
return sibiro.core.throw_unmatched(re,key,val);
}
} else {
return sibiro.core.url_encode(val);
}
})():part));

var G__44276 = (i__44227 + (1));
i__44227 = G__44276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44228),sibiro$core$uri_for_fn_$_iter__44225(cljs.core.chunk_rest(s__44226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44228),null);
}
} else {
var part = cljs.core.first(s__44226__$2);
return cljs.core.cons(((cljs.core.vector_QMARK_(part))?(function (){var key = cljs.core.first(part);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var temp__5733__auto__ = cljs.core.second(part);
if(cljs.core.truth_(temp__5733__auto__)){
var re = temp__5733__auto__;
if(cljs.core.truth_(cljs.core.re_matches(re,val))){
return sibiro.core.url_encode(val);
} else {
return sibiro.core.throw_unmatched(re,key,val);
}
} else {
return sibiro.core.url_encode(val);
}
})():part),sibiro$core$uri_for_fn_$_iter__44225(cljs.core.rest(s__44226__$2)));
}
} else {
return null;
}
break;
}
});})(parts,keyset))
,null,null));
});})(parts,keyset))
;
return iter__4523__auto__(parts);
})())),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),(function (){var temp__5735__auto__ = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.set(cljs.core.keys(data)),keyset));
if(temp__5735__auto__){
var keys = temp__5735__auto__;
return sibiro.core.query_string(cljs.core.select_keys(data,keys));
} else {
return null;
}
})()], null);
});
;})(parts,keyset))
});
sibiro.core.routes_tags = (function sibiro$core$routes_tags(routes,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__44229){
var vec__44230 = p__44229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230,(2),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230,(3),null);
var uff = sibiro.core.uri_for_fn(path);
var ufhandler_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"uri-for-tagged-only?","uri-for-tagged-only?",-1209203629).cljs$core$IFn$_invoke$arity$1(opts));
var G__44233 = result;
var G__44233__$1 = (cljs.core.truth_(tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44233,tag,uff):G__44233);
if(ufhandler_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44233__$1,handler,uff);
} else {
return G__44233__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,routes);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sibiro.core.CompiledRoutes = (function (tree,tags,__meta,__extmap,__hash){
this.tree = tree;
this.tags = tags;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
sibiro.core.CompiledRoutes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

sibiro.core.CompiledRoutes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k44235,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__44239 = k44235;
var G__44239__$1 = (((G__44239 instanceof cljs.core.Keyword))?G__44239.fqn:null);
switch (G__44239__$1) {
case "tree":
return self__.tree;

break;
case "tags":
return self__.tags;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44235,else__4388__auto__);

}
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__44240){
var vec__44241 = p__44240;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#sibiro.core.CompiledRoutes{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null))], null),self__.__extmap));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44234){
var self__ = this;
var G__44234__$1 = this;
return (new cljs.core.RecordIter((0),G__44234__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

sibiro.core.CompiledRoutes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new sibiro.core.CompiledRoutes(self__.tree,self__.tags,self__.__meta,self__.__extmap,self__.__hash));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__44244 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-208534189 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__44244(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44236,other44237){
var self__ = this;
var this44236__$1 = this;
return (((!((other44237 == null)))) && ((this44236__$1.constructor === other44237.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44236__$1.tree,other44237.tree)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44236__$1.tags,other44237.tags)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44236__$1.__extmap,other44237.__extmap)));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"tree","tree",-196312028),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new sibiro.core.CompiledRoutes(self__.tree,self__.tags,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__44234){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__44245 = cljs.core.keyword_identical_QMARK_;
var expr__44246 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__44248 = new cljs.core.Keyword(null,"tree","tree",-196312028);
var G__44249 = expr__44246;
return (pred__44245.cljs$core$IFn$_invoke$arity$2 ? pred__44245.cljs$core$IFn$_invoke$arity$2(G__44248,G__44249) : pred__44245.call(null,G__44248,G__44249));
})())){
return (new sibiro.core.CompiledRoutes(G__44234,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44250 = new cljs.core.Keyword(null,"tags","tags",1771418977);
var G__44251 = expr__44246;
return (pred__44245.cljs$core$IFn$_invoke$arity$2 ? pred__44245.cljs$core$IFn$_invoke$arity$2(G__44250,G__44251) : pred__44245.call(null,G__44250,G__44251));
})())){
return (new sibiro.core.CompiledRoutes(self__.tree,G__44234,self__.__meta,self__.__extmap,null));
} else {
return (new sibiro.core.CompiledRoutes(self__.tree,self__.tags,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__44234),null));
}
}
});

sibiro.core.CompiledRoutes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags,null))], null),self__.__extmap));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__44234){
var self__ = this;
var this__4384__auto____$1 = this;
return (new sibiro.core.CompiledRoutes(self__.tree,self__.tags,G__44234,self__.__extmap,self__.__hash));
});

sibiro.core.CompiledRoutes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

sibiro.core.CompiledRoutes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null);
});

sibiro.core.CompiledRoutes.cljs$lang$type = true;

sibiro.core.CompiledRoutes.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"sibiro.core/CompiledRoutes",null,(1),null));
});

sibiro.core.CompiledRoutes.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"sibiro.core/CompiledRoutes");
});

/**
 * Positional factory function for sibiro.core/CompiledRoutes.
 */
sibiro.core.__GT_CompiledRoutes = (function sibiro$core$__GT_CompiledRoutes(tree,tags){
return (new sibiro.core.CompiledRoutes(tree,tags,null,null,null));
});

/**
 * Factory function for sibiro.core/CompiledRoutes, taking a map of keywords to field values.
 */
sibiro.core.map__GT_CompiledRoutes = (function sibiro$core$map__GT_CompiledRoutes(G__44238){
var extmap__4424__auto__ = (function (){var G__44252 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44238,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tags","tags",1771418977)], 0));
if(cljs.core.record_QMARK_(G__44238)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44252);
} else {
return G__44252;
}
})();
return (new sibiro.core.CompiledRoutes(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(G__44238),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__44238),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

sibiro.core.compiled_QMARK_ = (function sibiro$core$compiled_QMARK_(routes){
return (routes instanceof sibiro.core.CompiledRoutes);
});
/**
 * Compiles a routes datastructure for use in `match-uri` and
 *   `uri-for`. Routes is a sequence of sequences (e.g. a vector of
 *   vectors) containing 3 or 4 elements: a method keyword (or :any), a
 *   clout-like path, a result object (can be a handler), and optionally
 *   a tag. For example:
 * 
 *   [[:get  "/admin/user/" user-list]
 * [:get  "/admin/user/:id" user-get :user-page]
 * [:post "/admin/user/:id" user-update]
 * [:any  "/:*" handle-404]]
 * 
 *   The order in which the routes are specified does not matter. Longer
 *   routes always take precedence, exact uri parts take precedence over
 *   route parameters, catch-all (:*) is tried last, and specific request
 *   methods take precedence over :any.
 * 
 *   Compiling takes some optional keyword arguments:
 * 
 * :uri-for-tagged-only? - When set to true, only tagged routes are
 *   compiled for use with `uri-for` and can only be found by their
 *   tag. Defaults to false.
 * 
 *   The routes are compiled into a tree structure, for fast matching.
 *   Functions for creating URIs (`uri-for`) are also precompiled for
 *   every route.
 */
sibiro.core.compile_routes = (function sibiro$core$compile_routes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44278 = arguments.length;
var i__4731__auto___44279 = (0);
while(true){
if((i__4731__auto___44279 < len__4730__auto___44278)){
args__4736__auto__.push((arguments[i__4731__auto___44279]));

var G__44280 = (i__4731__auto___44279 + (1));
i__4731__auto___44279 = G__44280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sibiro.core.compile_routes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sibiro.core.compile_routes.cljs$core$IFn$_invoke$arity$variadic = (function (routes,p__44255){
var map__44256 = p__44255;
var map__44256__$1 = (((((!((map__44256 == null))))?(((((map__44256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44256):map__44256);
var opts = map__44256__$1;
return sibiro.core.map__GT_CompiledRoutes(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),sibiro.core.routes_tree(routes),new cljs.core.Keyword(null,"tags","tags",1771418977),sibiro.core.routes_tags(routes,opts)], null));
});

sibiro.core.compile_routes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sibiro.core.compile_routes.cljs$lang$applyTo = (function (seq44253){
var G__44254 = cljs.core.first(seq44253);
var seq44253__$1 = cljs.core.next(seq44253);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44254,seq44253__$1);
});

/**
 * Given compiled routes, an URI and a request-method, returns
 *   {:route-handler handler, :route-params {...}, :alternatives (...)}
 *   for a match, or nil. For example:
 * 
 *   (match-uri (compile-routes [[:post "/admin/user/:id" :update-user]
 *                            [:post "/admin/*"        :admin-catch]])
 *           "/admin/user/42" :post)
 *   ;=> {:route-handler :update-user, :route-params {:id "42"}
 *     :alternatives ({:route-handler :admin-catch, :route-params {:* "user/42"}})}
 * 
 *   The values in :route-params are URL decoded for you.
 *   The :alternatives value is lazy, so it won't search for alternatives
 *   if you don't ask for it.
 */
sibiro.core.match_uri = (function sibiro$core$match_uri(compiled,uri,request_method){
var result = sibiro.core.match_uri_STAR_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(compiled),clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//),cljs.core.PersistentVector.EMPTY,request_method);
if(cljs.core.seq(result)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(result),new cljs.core.Keyword(null,"alternatives","alternatives",1927759600),cljs.core.rest(result));
} else {
return null;
}
});
/**
 * Given compiled routes and a handler (or tag), and optionally
 *   parameters, returns {:uri "...", :query-string "?..."}. For
 *   example:
 * 
 *   (uri-for (compile-routes [[:post "/admin/user/:id" :update-user]])
 *         :update-user {:id 42 :name "alice"})
 *   ;=> {:uri "/admin/user/42", :query-string "?name=alice"}
 * 
 *   An exception is thrown if parameters for the URI are missing in the
 *   data map. The values in the data map are URL encoded for you.
 */
sibiro.core.uri_for = (function sibiro$core$uri_for(var_args){
var G__44259 = arguments.length;
switch (G__44259) {
case 2:
return sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$2 = (function (compiled,obj){
return sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$3(compiled,obj,null);
});

sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$3 = (function (compiled,obj,data){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(compiled),obj);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
return null;
}
});

sibiro.core.uri_for.cljs$lang$maxFixedArity = 3;

/**
 * Convenience method concatenating :uri and :query-string from
 *   `uri-for`.
 */
sibiro.core.path_for = (function sibiro$core$path_for(var_args){
var G__44261 = arguments.length;
switch (G__44261) {
case 2:
return sibiro.core.path_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sibiro.core.path_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sibiro.core.path_for.cljs$core$IFn$_invoke$arity$2 = (function (compiled,obj){
return sibiro.core.path_for.cljs$core$IFn$_invoke$arity$3(compiled,obj,null);
});

sibiro.core.path_for.cljs$core$IFn$_invoke$arity$3 = (function (compiled,obj,data){
var temp__5735__auto__ = sibiro.core.uri_for.cljs$core$IFn$_invoke$arity$3(compiled,obj,data);
if(cljs.core.truth_(temp__5735__auto__)){
var map__44262 = temp__5735__auto__;
var map__44262__$1 = (((((!((map__44262 == null))))?(((((map__44262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44262):map__44262);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join('');
} else {
return null;
}
});

sibiro.core.path_for.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=sibiro.core.js.map
