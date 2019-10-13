goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39870,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39880 = k39870;
var G__39880__$1 = (((G__39880 instanceof cljs.core.Keyword))?G__39880.fqn:null);
switch (G__39880__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39870,else__4388__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39881){
var vec__39882 = p__39881;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39882,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39882,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#garden.types.CSSUnit{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39869){
var self__ = this;
var G__39869__$1 = this;
return (new cljs.core.RecordIter((0),G__39869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__39885 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__39885(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39871,other39872){
var self__ = this;
var this39871__$1 = this;
return (((!((other39872 == null)))) && ((this39871__$1.constructor === other39872.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39871__$1.unit,other39872.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39871__$1.magnitude,other39872.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39871__$1.__extmap,other39872.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39869){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39890 = cljs.core.keyword_identical_QMARK_;
var expr__39891 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__39893 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__39894 = expr__39891;
return (pred__39890.cljs$core$IFn$_invoke$arity$2 ? pred__39890.cljs$core$IFn$_invoke$arity$2(G__39893,G__39894) : pred__39890.call(null,G__39893,G__39894));
})())){
return (new garden.types.CSSUnit(G__39869,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39895 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__39896 = expr__39891;
return (pred__39890.cljs$core$IFn$_invoke$arity$2 ? pred__39890.cljs$core$IFn$_invoke$arity$2(G__39895,G__39896) : pred__39890.call(null,G__39895,G__39896));
})())){
return (new garden.types.CSSUnit(self__.unit,G__39869,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__39869),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39869){
var self__ = this;
var this__4384__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__39869,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"garden.types/CSSUnit");
});

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__39877){
var extmap__4424__auto__ = (function (){var G__39900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39877,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__39877)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39900);
} else {
return G__39900;
}
})();
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__39877),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__39877),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39902,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39909 = k39902;
var G__39909__$1 = (((G__39909 instanceof cljs.core.Keyword))?G__39909.fqn:null);
switch (G__39909__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39902,else__4388__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39910){
var vec__39911 = p__39910;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#garden.types.CSSFunction{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39901){
var self__ = this;
var G__39901__$1 = this;
return (new cljs.core.RecordIter((0),G__39901__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__39914 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__39914(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39903,other39904){
var self__ = this;
var this39903__$1 = this;
return (((!((other39904 == null)))) && ((this39903__$1.constructor === other39904.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39903__$1.f,other39904.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39903__$1.args,other39904.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39903__$1.__extmap,other39904.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39901){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39915 = cljs.core.keyword_identical_QMARK_;
var expr__39916 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__39918 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__39919 = expr__39916;
return (pred__39915.cljs$core$IFn$_invoke$arity$2 ? pred__39915.cljs$core$IFn$_invoke$arity$2(G__39918,G__39919) : pred__39915.call(null,G__39918,G__39919));
})())){
return (new garden.types.CSSFunction(G__39901,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39920 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__39921 = expr__39916;
return (pred__39915.cljs$core$IFn$_invoke$arity$2 ? pred__39915.cljs$core$IFn$_invoke$arity$2(G__39920,G__39921) : pred__39915.call(null,G__39920,G__39921));
})())){
return (new garden.types.CSSFunction(self__.f,G__39901,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__39901),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39901){
var self__ = this;
var this__4384__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__39901,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"garden.types/CSSFunction");
});

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__39905){
var extmap__4424__auto__ = (function (){var G__39934 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39905,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__39905)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39934);
} else {
return G__39934;
}
})();
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__39905),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39905),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39941,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39959 = k39941;
var G__39959__$1 = (((G__39959 instanceof cljs.core.Keyword))?G__39959.fqn:null);
switch (G__39959__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39941,else__4388__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39960){
var vec__39964 = p__39960;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39940){
var self__ = this;
var G__39940__$1 = this;
return (new cljs.core.RecordIter((0),G__39940__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__39989 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__39989(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39942,other39943){
var self__ = this;
var this39942__$1 = this;
return (((!((other39943 == null)))) && ((this39942__$1.constructor === other39943.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39942__$1.identifier,other39943.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39942__$1.value,other39943.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39942__$1.__extmap,other39943.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39940){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39994 = cljs.core.keyword_identical_QMARK_;
var expr__39995 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__39997 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__39998 = expr__39995;
return (pred__39994.cljs$core$IFn$_invoke$arity$2 ? pred__39994.cljs$core$IFn$_invoke$arity$2(G__39997,G__39998) : pred__39994.call(null,G__39997,G__39998));
})())){
return (new garden.types.CSSAtRule(G__39940,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39999 = new cljs.core.Keyword(null,"value","value",305978217);
var G__40000 = expr__39995;
return (pred__39994.cljs$core$IFn$_invoke$arity$2 ? pred__39994.cljs$core$IFn$_invoke$arity$2(G__39999,G__40000) : pred__39994.call(null,G__39999,G__40000));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__39940,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__39940),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39940){
var self__ = this;
var this__4384__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__39940,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"garden.types/CSSAtRule");
});

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__39946){
var extmap__4424__auto__ = (function (){var G__40014 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39946,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__39946)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40014);
} else {
return G__40014;
}
})();
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__39946),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


//# sourceMappingURL=garden.types.js.map
