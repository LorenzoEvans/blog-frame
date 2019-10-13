goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48616 = coll;
var G__48617 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48616,G__48617) : shadow.dom.lazy_native_coll_seq.call(null,G__48616,G__48617));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48628 = arguments.length;
switch (G__48628) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48636 = arguments.length;
switch (G__48636) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48642 = arguments.length;
switch (G__48642) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48646 = arguments.length;
switch (G__48646) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48656 = arguments.length;
switch (G__48656) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48659 = document;
var G__48660 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48659,G__48660);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48662 = shadow.dom.dom_node(parent);
var G__48663 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48662,G__48663);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48665 = shadow.dom.dom_node(el);
var G__48666 = cls;
return goog.dom.classlist.add(G__48665,G__48666);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48669 = shadow.dom.dom_node(el);
var G__48670 = cls;
return goog.dom.classlist.remove(G__48669,G__48670);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48673 = arguments.length;
switch (G__48673) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48675 = shadow.dom.dom_node(el);
var G__48676 = cls;
return goog.dom.classlist.toggle(G__48675,G__48676);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48682){if((e48682 instanceof Object)){
var e = e48682;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48682;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48689 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48690 = null;
var count__48691 = (0);
var i__48692 = (0);
while(true){
if((i__48692 < count__48691)){
var el = chunk__48690.cljs$core$IIndexed$_nth$arity$2(null,i__48692);
var handler_49265__$1 = ((function (seq__48689,chunk__48690,count__48691,i__48692,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48689,chunk__48690,count__48691,i__48692,el))
;
var G__48701_49266 = el;
var G__48702_49267 = cljs.core.name(ev);
var G__48703_49268 = handler_49265__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48701_49266,G__48702_49267,G__48703_49268) : shadow.dom.dom_listen.call(null,G__48701_49266,G__48702_49267,G__48703_49268));


var G__49270 = seq__48689;
var G__49271 = chunk__48690;
var G__49272 = count__48691;
var G__49273 = (i__48692 + (1));
seq__48689 = G__49270;
chunk__48690 = G__49271;
count__48691 = G__49272;
i__48692 = G__49273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48689);
if(temp__5735__auto__){
var seq__48689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48689__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48689__$1);
var G__49274 = cljs.core.chunk_rest(seq__48689__$1);
var G__49275 = c__4550__auto__;
var G__49276 = cljs.core.count(c__4550__auto__);
var G__49277 = (0);
seq__48689 = G__49274;
chunk__48690 = G__49275;
count__48691 = G__49276;
i__48692 = G__49277;
continue;
} else {
var el = cljs.core.first(seq__48689__$1);
var handler_49278__$1 = ((function (seq__48689,chunk__48690,count__48691,i__48692,el,seq__48689__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48689,chunk__48690,count__48691,i__48692,el,seq__48689__$1,temp__5735__auto__))
;
var G__48704_49280 = el;
var G__48705_49281 = cljs.core.name(ev);
var G__48706_49282 = handler_49278__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48704_49280,G__48705_49281,G__48706_49282) : shadow.dom.dom_listen.call(null,G__48704_49280,G__48705_49281,G__48706_49282));


var G__49283 = cljs.core.next(seq__48689__$1);
var G__49284 = null;
var G__49285 = (0);
var G__49286 = (0);
seq__48689 = G__49283;
chunk__48690 = G__49284;
count__48691 = G__49285;
i__48692 = G__49286;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48710 = arguments.length;
switch (G__48710) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48713 = shadow.dom.dom_node(el);
var G__48714 = cljs.core.name(ev);
var G__48715 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48713,G__48714,G__48715) : shadow.dom.dom_listen.call(null,G__48713,G__48714,G__48715));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48717 = shadow.dom.dom_node(el);
var G__48718 = cljs.core.name(ev);
var G__48719 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48717,G__48718,G__48719) : shadow.dom.dom_listen_remove.call(null,G__48717,G__48718,G__48719));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48722 = cljs.core.seq(events);
var chunk__48723 = null;
var count__48724 = (0);
var i__48725 = (0);
while(true){
if((i__48725 < count__48724)){
var vec__48736 = chunk__48723.cljs$core$IIndexed$_nth$arity$2(null,i__48725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49304 = seq__48722;
var G__49305 = chunk__48723;
var G__49306 = count__48724;
var G__49307 = (i__48725 + (1));
seq__48722 = G__49304;
chunk__48723 = G__49305;
count__48724 = G__49306;
i__48725 = G__49307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48722);
if(temp__5735__auto__){
var seq__48722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48722__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48722__$1);
var G__49309 = cljs.core.chunk_rest(seq__48722__$1);
var G__49310 = c__4550__auto__;
var G__49311 = cljs.core.count(c__4550__auto__);
var G__49312 = (0);
seq__48722 = G__49309;
chunk__48723 = G__49310;
count__48724 = G__49311;
i__48725 = G__49312;
continue;
} else {
var vec__48741 = cljs.core.first(seq__48722__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48741,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49317 = cljs.core.next(seq__48722__$1);
var G__49318 = null;
var G__49319 = (0);
var G__49320 = (0);
seq__48722 = G__49317;
chunk__48723 = G__49318;
count__48724 = G__49319;
i__48725 = G__49320;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48744 = cljs.core.seq(styles);
var chunk__48745 = null;
var count__48746 = (0);
var i__48747 = (0);
while(true){
if((i__48747 < count__48746)){
var vec__48765 = chunk__48745.cljs$core$IIndexed$_nth$arity$2(null,i__48747);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48765,(1),null);
var G__48768_49322 = dom;
var G__48769_49323 = cljs.core.name(k);
var G__48770_49324 = (((v == null))?"":v);
goog.style.setStyle(G__48768_49322,G__48769_49323,G__48770_49324);


var G__49325 = seq__48744;
var G__49327 = chunk__48745;
var G__49328 = count__48746;
var G__49329 = (i__48747 + (1));
seq__48744 = G__49325;
chunk__48745 = G__49327;
count__48746 = G__49328;
i__48747 = G__49329;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48744);
if(temp__5735__auto__){
var seq__48744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48744__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48744__$1);
var G__49330 = cljs.core.chunk_rest(seq__48744__$1);
var G__49331 = c__4550__auto__;
var G__49332 = cljs.core.count(c__4550__auto__);
var G__49333 = (0);
seq__48744 = G__49330;
chunk__48745 = G__49331;
count__48746 = G__49332;
i__48747 = G__49333;
continue;
} else {
var vec__48773 = cljs.core.first(seq__48744__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48773,(1),null);
var G__48776_49337 = dom;
var G__48777_49338 = cljs.core.name(k);
var G__48778_49339 = (((v == null))?"":v);
goog.style.setStyle(G__48776_49337,G__48777_49338,G__48778_49339);


var G__49341 = cljs.core.next(seq__48744__$1);
var G__49342 = null;
var G__49343 = (0);
var G__49344 = (0);
seq__48744 = G__49341;
chunk__48745 = G__49342;
count__48746 = G__49343;
i__48747 = G__49344;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48781_49349 = key;
var G__48781_49350__$1 = (((G__48781_49349 instanceof cljs.core.Keyword))?G__48781_49349.fqn:null);
switch (G__48781_49350__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49361 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_49361,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_49361,"aria-");
}
})())){
el.setAttribute(ks_49361,value);
} else {
(el[ks_49361] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48787 = shadow.dom.dom_node(el);
var G__48788 = cls;
return goog.dom.classlist.contains(G__48787,G__48788);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48792){
var map__48793 = p__48792;
var map__48793__$1 = (((((!((map__48793 == null))))?(((((map__48793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48793):map__48793);
var props = map__48793__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48793__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48797 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48797,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48797,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48797,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48800 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48800,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48800;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48805 = arguments.length;
switch (G__48805) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48813){
var vec__48814 = p__48813;
var seq__48815 = cljs.core.seq(vec__48814);
var first__48816 = cljs.core.first(seq__48815);
var seq__48815__$1 = cljs.core.next(seq__48815);
var nn = first__48816;
var first__48816__$1 = cljs.core.first(seq__48815__$1);
var seq__48815__$2 = cljs.core.next(seq__48815__$1);
var np = first__48816__$1;
var nc = seq__48815__$2;
var node = vec__48814;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48819 = nn;
var G__48820 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48819,G__48820) : create_fn.call(null,G__48819,G__48820));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48821 = nn;
var G__48822 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48821,G__48822) : create_fn.call(null,G__48821,G__48822));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48824 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(1),null);
var seq__48828_49373 = cljs.core.seq(node_children);
var chunk__48829_49374 = null;
var count__48830_49375 = (0);
var i__48831_49376 = (0);
while(true){
if((i__48831_49376 < count__48830_49375)){
var child_struct_49378 = chunk__48829_49374.cljs$core$IIndexed$_nth$arity$2(null,i__48831_49376);
var children_49380 = shadow.dom.dom_node(child_struct_49378);
if(cljs.core.seq_QMARK_(children_49380)){
var seq__48856_49381 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49380));
var chunk__48858_49382 = null;
var count__48859_49383 = (0);
var i__48860_49384 = (0);
while(true){
if((i__48860_49384 < count__48859_49383)){
var child_49385 = chunk__48858_49382.cljs$core$IIndexed$_nth$arity$2(null,i__48860_49384);
if(cljs.core.truth_(child_49385)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49385);


var G__49386 = seq__48856_49381;
var G__49387 = chunk__48858_49382;
var G__49388 = count__48859_49383;
var G__49389 = (i__48860_49384 + (1));
seq__48856_49381 = G__49386;
chunk__48858_49382 = G__49387;
count__48859_49383 = G__49388;
i__48860_49384 = G__49389;
continue;
} else {
var G__49390 = seq__48856_49381;
var G__49391 = chunk__48858_49382;
var G__49392 = count__48859_49383;
var G__49393 = (i__48860_49384 + (1));
seq__48856_49381 = G__49390;
chunk__48858_49382 = G__49391;
count__48859_49383 = G__49392;
i__48860_49384 = G__49393;
continue;
}
} else {
var temp__5735__auto___49394 = cljs.core.seq(seq__48856_49381);
if(temp__5735__auto___49394){
var seq__48856_49395__$1 = temp__5735__auto___49394;
if(cljs.core.chunked_seq_QMARK_(seq__48856_49395__$1)){
var c__4550__auto___49396 = cljs.core.chunk_first(seq__48856_49395__$1);
var G__49397 = cljs.core.chunk_rest(seq__48856_49395__$1);
var G__49398 = c__4550__auto___49396;
var G__49399 = cljs.core.count(c__4550__auto___49396);
var G__49400 = (0);
seq__48856_49381 = G__49397;
chunk__48858_49382 = G__49398;
count__48859_49383 = G__49399;
i__48860_49384 = G__49400;
continue;
} else {
var child_49401 = cljs.core.first(seq__48856_49395__$1);
if(cljs.core.truth_(child_49401)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49401);


var G__49402 = cljs.core.next(seq__48856_49395__$1);
var G__49403 = null;
var G__49404 = (0);
var G__49405 = (0);
seq__48856_49381 = G__49402;
chunk__48858_49382 = G__49403;
count__48859_49383 = G__49404;
i__48860_49384 = G__49405;
continue;
} else {
var G__49410 = cljs.core.next(seq__48856_49395__$1);
var G__49411 = null;
var G__49412 = (0);
var G__49413 = (0);
seq__48856_49381 = G__49410;
chunk__48858_49382 = G__49411;
count__48859_49383 = G__49412;
i__48860_49384 = G__49413;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49380);
}


var G__49417 = seq__48828_49373;
var G__49418 = chunk__48829_49374;
var G__49419 = count__48830_49375;
var G__49420 = (i__48831_49376 + (1));
seq__48828_49373 = G__49417;
chunk__48829_49374 = G__49418;
count__48830_49375 = G__49419;
i__48831_49376 = G__49420;
continue;
} else {
var temp__5735__auto___49421 = cljs.core.seq(seq__48828_49373);
if(temp__5735__auto___49421){
var seq__48828_49422__$1 = temp__5735__auto___49421;
if(cljs.core.chunked_seq_QMARK_(seq__48828_49422__$1)){
var c__4550__auto___49423 = cljs.core.chunk_first(seq__48828_49422__$1);
var G__49424 = cljs.core.chunk_rest(seq__48828_49422__$1);
var G__49425 = c__4550__auto___49423;
var G__49426 = cljs.core.count(c__4550__auto___49423);
var G__49427 = (0);
seq__48828_49373 = G__49424;
chunk__48829_49374 = G__49425;
count__48830_49375 = G__49426;
i__48831_49376 = G__49427;
continue;
} else {
var child_struct_49428 = cljs.core.first(seq__48828_49422__$1);
var children_49429 = shadow.dom.dom_node(child_struct_49428);
if(cljs.core.seq_QMARK_(children_49429)){
var seq__48867_49433 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49429));
var chunk__48869_49434 = null;
var count__48870_49435 = (0);
var i__48871_49436 = (0);
while(true){
if((i__48871_49436 < count__48870_49435)){
var child_49437 = chunk__48869_49434.cljs$core$IIndexed$_nth$arity$2(null,i__48871_49436);
if(cljs.core.truth_(child_49437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49437);


var G__49439 = seq__48867_49433;
var G__49440 = chunk__48869_49434;
var G__49441 = count__48870_49435;
var G__49442 = (i__48871_49436 + (1));
seq__48867_49433 = G__49439;
chunk__48869_49434 = G__49440;
count__48870_49435 = G__49441;
i__48871_49436 = G__49442;
continue;
} else {
var G__49443 = seq__48867_49433;
var G__49444 = chunk__48869_49434;
var G__49445 = count__48870_49435;
var G__49446 = (i__48871_49436 + (1));
seq__48867_49433 = G__49443;
chunk__48869_49434 = G__49444;
count__48870_49435 = G__49445;
i__48871_49436 = G__49446;
continue;
}
} else {
var temp__5735__auto___49450__$1 = cljs.core.seq(seq__48867_49433);
if(temp__5735__auto___49450__$1){
var seq__48867_49451__$1 = temp__5735__auto___49450__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48867_49451__$1)){
var c__4550__auto___49452 = cljs.core.chunk_first(seq__48867_49451__$1);
var G__49454 = cljs.core.chunk_rest(seq__48867_49451__$1);
var G__49455 = c__4550__auto___49452;
var G__49456 = cljs.core.count(c__4550__auto___49452);
var G__49457 = (0);
seq__48867_49433 = G__49454;
chunk__48869_49434 = G__49455;
count__48870_49435 = G__49456;
i__48871_49436 = G__49457;
continue;
} else {
var child_49458 = cljs.core.first(seq__48867_49451__$1);
if(cljs.core.truth_(child_49458)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49458);


var G__49459 = cljs.core.next(seq__48867_49451__$1);
var G__49460 = null;
var G__49461 = (0);
var G__49462 = (0);
seq__48867_49433 = G__49459;
chunk__48869_49434 = G__49460;
count__48870_49435 = G__49461;
i__48871_49436 = G__49462;
continue;
} else {
var G__49464 = cljs.core.next(seq__48867_49451__$1);
var G__49465 = null;
var G__49466 = (0);
var G__49467 = (0);
seq__48867_49433 = G__49464;
chunk__48869_49434 = G__49465;
count__48870_49435 = G__49466;
i__48871_49436 = G__49467;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49429);
}


var G__49469 = cljs.core.next(seq__48828_49422__$1);
var G__49470 = null;
var G__49471 = (0);
var G__49472 = (0);
seq__48828_49373 = G__49469;
chunk__48829_49374 = G__49470;
count__48830_49375 = G__49471;
i__48831_49376 = G__49472;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48887 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48887);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48889 = cljs.core.seq(node);
var chunk__48890 = null;
var count__48891 = (0);
var i__48892 = (0);
while(true){
if((i__48892 < count__48891)){
var n = chunk__48890.cljs$core$IIndexed$_nth$arity$2(null,i__48892);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49484 = seq__48889;
var G__49485 = chunk__48890;
var G__49486 = count__48891;
var G__49487 = (i__48892 + (1));
seq__48889 = G__49484;
chunk__48890 = G__49485;
count__48891 = G__49486;
i__48892 = G__49487;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48889);
if(temp__5735__auto__){
var seq__48889__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48889__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48889__$1);
var G__49490 = cljs.core.chunk_rest(seq__48889__$1);
var G__49491 = c__4550__auto__;
var G__49492 = cljs.core.count(c__4550__auto__);
var G__49493 = (0);
seq__48889 = G__49490;
chunk__48890 = G__49491;
count__48891 = G__49492;
i__48892 = G__49493;
continue;
} else {
var n = cljs.core.first(seq__48889__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49495 = cljs.core.next(seq__48889__$1);
var G__49496 = null;
var G__49497 = (0);
var G__49498 = (0);
seq__48889 = G__49495;
chunk__48890 = G__49496;
count__48891 = G__49497;
i__48892 = G__49498;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48893 = shadow.dom.dom_node(new$);
var G__48894 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48893,G__48894);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48896 = arguments.length;
switch (G__48896) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48898 = arguments.length;
switch (G__48898) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48902 = arguments.length;
switch (G__48902) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49512 = arguments.length;
var i__4731__auto___49513 = (0);
while(true){
if((i__4731__auto___49513 < len__4730__auto___49512)){
args__4736__auto__.push((arguments[i__4731__auto___49513]));

var G__49514 = (i__4731__auto___49513 + (1));
i__4731__auto___49513 = G__49514;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48915_49516 = cljs.core.seq(nodes);
var chunk__48916_49517 = null;
var count__48917_49518 = (0);
var i__48918_49519 = (0);
while(true){
if((i__48918_49519 < count__48917_49518)){
var node_49525 = chunk__48916_49517.cljs$core$IIndexed$_nth$arity$2(null,i__48918_49519);
fragment.appendChild(shadow.dom._to_dom(node_49525));


var G__49526 = seq__48915_49516;
var G__49527 = chunk__48916_49517;
var G__49528 = count__48917_49518;
var G__49529 = (i__48918_49519 + (1));
seq__48915_49516 = G__49526;
chunk__48916_49517 = G__49527;
count__48917_49518 = G__49528;
i__48918_49519 = G__49529;
continue;
} else {
var temp__5735__auto___49530 = cljs.core.seq(seq__48915_49516);
if(temp__5735__auto___49530){
var seq__48915_49532__$1 = temp__5735__auto___49530;
if(cljs.core.chunked_seq_QMARK_(seq__48915_49532__$1)){
var c__4550__auto___49534 = cljs.core.chunk_first(seq__48915_49532__$1);
var G__49535 = cljs.core.chunk_rest(seq__48915_49532__$1);
var G__49536 = c__4550__auto___49534;
var G__49537 = cljs.core.count(c__4550__auto___49534);
var G__49538 = (0);
seq__48915_49516 = G__49535;
chunk__48916_49517 = G__49536;
count__48917_49518 = G__49537;
i__48918_49519 = G__49538;
continue;
} else {
var node_49540 = cljs.core.first(seq__48915_49532__$1);
fragment.appendChild(shadow.dom._to_dom(node_49540));


var G__49541 = cljs.core.next(seq__48915_49532__$1);
var G__49542 = null;
var G__49543 = (0);
var G__49544 = (0);
seq__48915_49516 = G__49541;
chunk__48916_49517 = G__49542;
count__48917_49518 = G__49543;
i__48918_49519 = G__49544;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48912){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48912));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48926_49552 = cljs.core.seq(scripts);
var chunk__48927_49553 = null;
var count__48928_49554 = (0);
var i__48929_49555 = (0);
while(true){
if((i__48929_49555 < count__48928_49554)){
var vec__48938_49557 = chunk__48927_49553.cljs$core$IIndexed$_nth$arity$2(null,i__48929_49555);
var script_tag_49558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48938_49557,(0),null);
var script_body_49559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48938_49557,(1),null);
eval(script_body_49559);


var G__49560 = seq__48926_49552;
var G__49561 = chunk__48927_49553;
var G__49562 = count__48928_49554;
var G__49563 = (i__48929_49555 + (1));
seq__48926_49552 = G__49560;
chunk__48927_49553 = G__49561;
count__48928_49554 = G__49562;
i__48929_49555 = G__49563;
continue;
} else {
var temp__5735__auto___49564 = cljs.core.seq(seq__48926_49552);
if(temp__5735__auto___49564){
var seq__48926_49565__$1 = temp__5735__auto___49564;
if(cljs.core.chunked_seq_QMARK_(seq__48926_49565__$1)){
var c__4550__auto___49566 = cljs.core.chunk_first(seq__48926_49565__$1);
var G__49567 = cljs.core.chunk_rest(seq__48926_49565__$1);
var G__49568 = c__4550__auto___49566;
var G__49569 = cljs.core.count(c__4550__auto___49566);
var G__49570 = (0);
seq__48926_49552 = G__49567;
chunk__48927_49553 = G__49568;
count__48928_49554 = G__49569;
i__48929_49555 = G__49570;
continue;
} else {
var vec__48943_49572 = cljs.core.first(seq__48926_49565__$1);
var script_tag_49573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48943_49572,(0),null);
var script_body_49574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48943_49572,(1),null);
eval(script_body_49574);


var G__49576 = cljs.core.next(seq__48926_49565__$1);
var G__49577 = null;
var G__49578 = (0);
var G__49579 = (0);
seq__48926_49552 = G__49576;
chunk__48927_49553 = G__49577;
count__48928_49554 = G__49578;
i__48929_49555 = G__49579;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48947){
var vec__48948 = p__48947;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48958 = shadow.dom.dom_node(el);
var G__48959 = cls;
return goog.dom.getAncestorByClass(G__48958,G__48959);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48962 = arguments.length;
switch (G__48962) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48965 = shadow.dom.dom_node(el);
var G__48966 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48965,G__48966);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48967 = shadow.dom.dom_node(el);
var G__48968 = cljs.core.name(tag);
var G__48969 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48967,G__48968,G__48969);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48971 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48971);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48974 = shadow.dom.dom_node(dom);
var G__48975 = value;
return goog.dom.forms.setValue(G__48974,G__48975);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48982 = cljs.core.seq(style_keys);
var chunk__48983 = null;
var count__48984 = (0);
var i__48985 = (0);
while(true){
if((i__48985 < count__48984)){
var it = chunk__48983.cljs$core$IIndexed$_nth$arity$2(null,i__48985);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49598 = seq__48982;
var G__49599 = chunk__48983;
var G__49600 = count__48984;
var G__49601 = (i__48985 + (1));
seq__48982 = G__49598;
chunk__48983 = G__49599;
count__48984 = G__49600;
i__48985 = G__49601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48982);
if(temp__5735__auto__){
var seq__48982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48982__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48982__$1);
var G__49603 = cljs.core.chunk_rest(seq__48982__$1);
var G__49604 = c__4550__auto__;
var G__49605 = cljs.core.count(c__4550__auto__);
var G__49606 = (0);
seq__48982 = G__49603;
chunk__48983 = G__49604;
count__48984 = G__49605;
i__48985 = G__49606;
continue;
} else {
var it = cljs.core.first(seq__48982__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49609 = cljs.core.next(seq__48982__$1);
var G__49610 = null;
var G__49611 = (0);
var G__49612 = (0);
seq__48982 = G__49609;
chunk__48983 = G__49610;
count__48984 = G__49611;
i__48985 = G__49612;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48991,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49002 = k48991;
var G__49002__$1 = (((G__49002 instanceof cljs.core.Keyword))?G__49002.fqn:null);
switch (G__49002__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48991,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49003){
var vec__49004 = p__49003;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49004,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49004,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48990){
var self__ = this;
var G__48990__$1 = this;
return (new cljs.core.RecordIter((0),G__48990__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49010 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49010(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48992,other48993){
var self__ = this;
var this48992__$1 = this;
return (((!((other48993 == null)))) && ((this48992__$1.constructor === other48993.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48992__$1.x,other48993.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48992__$1.y,other48993.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48992__$1.__extmap,other48993.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48990){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49011 = cljs.core.keyword_identical_QMARK_;
var expr__49012 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49014 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__49015 = expr__49012;
return (pred__49011.cljs$core$IFn$_invoke$arity$2 ? pred__49011.cljs$core$IFn$_invoke$arity$2(G__49014,G__49015) : pred__49011.call(null,G__49014,G__49015));
})())){
return (new shadow.dom.Coordinate(G__48990,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49020 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__49021 = expr__49012;
return (pred__49011.cljs$core$IFn$_invoke$arity$2 ? pred__49011.cljs$core$IFn$_invoke$arity$2(G__49020,G__49021) : pred__49011.call(null,G__49020,G__49021));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48990,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48990),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48990){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48990,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48996){
var extmap__4424__auto__ = (function (){var G__49024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48996,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48996)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49024);
} else {
return G__49024;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48996),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48996),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__49025 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__49025);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__49026 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__49026);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__49027 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__49027);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49029,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49033 = k49029;
var G__49033__$1 = (((G__49033 instanceof cljs.core.Keyword))?G__49033.fqn:null);
switch (G__49033__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49029,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49034){
var vec__49035 = p__49034;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49035,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49035,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49028){
var self__ = this;
var G__49028__$1 = this;
return (new cljs.core.RecordIter((0),G__49028__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49046 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49046(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49030,other49031){
var self__ = this;
var this49030__$1 = this;
return (((!((other49031 == null)))) && ((this49030__$1.constructor === other49031.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49030__$1.w,other49031.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49030__$1.h,other49031.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49030__$1.__extmap,other49031.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49028){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49054 = cljs.core.keyword_identical_QMARK_;
var expr__49055 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49057 = new cljs.core.Keyword(null,"w","w",354169001);
var G__49058 = expr__49055;
return (pred__49054.cljs$core$IFn$_invoke$arity$2 ? pred__49054.cljs$core$IFn$_invoke$arity$2(G__49057,G__49058) : pred__49054.call(null,G__49057,G__49058));
})())){
return (new shadow.dom.Size(G__49028,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49059 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__49060 = expr__49055;
return (pred__49054.cljs$core$IFn$_invoke$arity$2 ? pred__49054.cljs$core$IFn$_invoke$arity$2(G__49059,G__49060) : pred__49054.call(null,G__49059,G__49060));
})())){
return (new shadow.dom.Size(self__.w,G__49028,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49028),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49028){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49028,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49032){
var extmap__4424__auto__ = (function (){var G__49066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49032,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49032)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49066);
} else {
return G__49066;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49032),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49032),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__49069 = shadow.dom.dom_node(el);
return goog.style.getSize(G__49069);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__49691 = (i + (1));
var G__49692 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49691;
ret = G__49692;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49083){
var vec__49084 = p__49083;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49084,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49090 = arguments.length;
switch (G__49090) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49094_49707 = new_node;
var G__49095_49708 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__49094_49707,G__49095_49708);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49096_49710 = new_node;
var G__49097_49711 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__49096_49710,G__49097_49711);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49716 = ps;
var G__49717 = (i + (1));
el__$1 = G__49716;
i = G__49717;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__49108 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__49108);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__49111 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__49111);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__49113 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__49113);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49114 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49114,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49114,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49114,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49117_49727 = cljs.core.seq(props);
var chunk__49118_49728 = null;
var count__49119_49729 = (0);
var i__49120_49730 = (0);
while(true){
if((i__49120_49730 < count__49119_49729)){
var vec__49127_49731 = chunk__49118_49728.cljs$core$IIndexed$_nth$arity$2(null,i__49120_49730);
var k_49732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127_49731,(0),null);
var v_49733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127_49731,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49732);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49732),v_49733);


var G__49736 = seq__49117_49727;
var G__49737 = chunk__49118_49728;
var G__49738 = count__49119_49729;
var G__49739 = (i__49120_49730 + (1));
seq__49117_49727 = G__49736;
chunk__49118_49728 = G__49737;
count__49119_49729 = G__49738;
i__49120_49730 = G__49739;
continue;
} else {
var temp__5735__auto___49741 = cljs.core.seq(seq__49117_49727);
if(temp__5735__auto___49741){
var seq__49117_49742__$1 = temp__5735__auto___49741;
if(cljs.core.chunked_seq_QMARK_(seq__49117_49742__$1)){
var c__4550__auto___49743 = cljs.core.chunk_first(seq__49117_49742__$1);
var G__49749 = cljs.core.chunk_rest(seq__49117_49742__$1);
var G__49750 = c__4550__auto___49743;
var G__49751 = cljs.core.count(c__4550__auto___49743);
var G__49752 = (0);
seq__49117_49727 = G__49749;
chunk__49118_49728 = G__49750;
count__49119_49729 = G__49751;
i__49120_49730 = G__49752;
continue;
} else {
var vec__49131_49753 = cljs.core.first(seq__49117_49742__$1);
var k_49754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131_49753,(0),null);
var v_49755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49131_49753,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49754);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49754),v_49755);


var G__49756 = cljs.core.next(seq__49117_49742__$1);
var G__49757 = null;
var G__49758 = (0);
var G__49759 = (0);
seq__49117_49727 = G__49756;
chunk__49118_49728 = G__49757;
count__49119_49729 = G__49758;
i__49120_49730 = G__49759;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49135 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49135,(1),null);
var seq__49139_49766 = cljs.core.seq(node_children);
var chunk__49141_49767 = null;
var count__49142_49768 = (0);
var i__49143_49769 = (0);
while(true){
if((i__49143_49769 < count__49142_49768)){
var child_struct_49775 = chunk__49141_49767.cljs$core$IIndexed$_nth$arity$2(null,i__49143_49769);
if((!((child_struct_49775 == null)))){
if(typeof child_struct_49775 === 'string'){
var text_49776 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49776),child_struct_49775].join(''));
} else {
var children_49777 = shadow.dom.svg_node(child_struct_49775);
if(cljs.core.seq_QMARK_(children_49777)){
var seq__49164_49778 = cljs.core.seq(children_49777);
var chunk__49166_49779 = null;
var count__49167_49780 = (0);
var i__49168_49781 = (0);
while(true){
if((i__49168_49781 < count__49167_49780)){
var child_49782 = chunk__49166_49779.cljs$core$IIndexed$_nth$arity$2(null,i__49168_49781);
if(cljs.core.truth_(child_49782)){
node.appendChild(child_49782);


var G__49783 = seq__49164_49778;
var G__49784 = chunk__49166_49779;
var G__49785 = count__49167_49780;
var G__49786 = (i__49168_49781 + (1));
seq__49164_49778 = G__49783;
chunk__49166_49779 = G__49784;
count__49167_49780 = G__49785;
i__49168_49781 = G__49786;
continue;
} else {
var G__49788 = seq__49164_49778;
var G__49789 = chunk__49166_49779;
var G__49790 = count__49167_49780;
var G__49791 = (i__49168_49781 + (1));
seq__49164_49778 = G__49788;
chunk__49166_49779 = G__49789;
count__49167_49780 = G__49790;
i__49168_49781 = G__49791;
continue;
}
} else {
var temp__5735__auto___49792 = cljs.core.seq(seq__49164_49778);
if(temp__5735__auto___49792){
var seq__49164_49793__$1 = temp__5735__auto___49792;
if(cljs.core.chunked_seq_QMARK_(seq__49164_49793__$1)){
var c__4550__auto___49794 = cljs.core.chunk_first(seq__49164_49793__$1);
var G__49795 = cljs.core.chunk_rest(seq__49164_49793__$1);
var G__49796 = c__4550__auto___49794;
var G__49797 = cljs.core.count(c__4550__auto___49794);
var G__49798 = (0);
seq__49164_49778 = G__49795;
chunk__49166_49779 = G__49796;
count__49167_49780 = G__49797;
i__49168_49781 = G__49798;
continue;
} else {
var child_49799 = cljs.core.first(seq__49164_49793__$1);
if(cljs.core.truth_(child_49799)){
node.appendChild(child_49799);


var G__49800 = cljs.core.next(seq__49164_49793__$1);
var G__49801 = null;
var G__49802 = (0);
var G__49803 = (0);
seq__49164_49778 = G__49800;
chunk__49166_49779 = G__49801;
count__49167_49780 = G__49802;
i__49168_49781 = G__49803;
continue;
} else {
var G__49804 = cljs.core.next(seq__49164_49793__$1);
var G__49805 = null;
var G__49806 = (0);
var G__49807 = (0);
seq__49164_49778 = G__49804;
chunk__49166_49779 = G__49805;
count__49167_49780 = G__49806;
i__49168_49781 = G__49807;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49777);
}
}


var G__49808 = seq__49139_49766;
var G__49809 = chunk__49141_49767;
var G__49810 = count__49142_49768;
var G__49811 = (i__49143_49769 + (1));
seq__49139_49766 = G__49808;
chunk__49141_49767 = G__49809;
count__49142_49768 = G__49810;
i__49143_49769 = G__49811;
continue;
} else {
var G__49812 = seq__49139_49766;
var G__49813 = chunk__49141_49767;
var G__49814 = count__49142_49768;
var G__49815 = (i__49143_49769 + (1));
seq__49139_49766 = G__49812;
chunk__49141_49767 = G__49813;
count__49142_49768 = G__49814;
i__49143_49769 = G__49815;
continue;
}
} else {
var temp__5735__auto___49816 = cljs.core.seq(seq__49139_49766);
if(temp__5735__auto___49816){
var seq__49139_49817__$1 = temp__5735__auto___49816;
if(cljs.core.chunked_seq_QMARK_(seq__49139_49817__$1)){
var c__4550__auto___49818 = cljs.core.chunk_first(seq__49139_49817__$1);
var G__49821 = cljs.core.chunk_rest(seq__49139_49817__$1);
var G__49823 = c__4550__auto___49818;
var G__49824 = cljs.core.count(c__4550__auto___49818);
var G__49825 = (0);
seq__49139_49766 = G__49821;
chunk__49141_49767 = G__49823;
count__49142_49768 = G__49824;
i__49143_49769 = G__49825;
continue;
} else {
var child_struct_49826 = cljs.core.first(seq__49139_49817__$1);
if((!((child_struct_49826 == null)))){
if(typeof child_struct_49826 === 'string'){
var text_49827 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49827),child_struct_49826].join(''));
} else {
var children_49828 = shadow.dom.svg_node(child_struct_49826);
if(cljs.core.seq_QMARK_(children_49828)){
var seq__49179_49829 = cljs.core.seq(children_49828);
var chunk__49181_49830 = null;
var count__49182_49831 = (0);
var i__49183_49832 = (0);
while(true){
if((i__49183_49832 < count__49182_49831)){
var child_49837 = chunk__49181_49830.cljs$core$IIndexed$_nth$arity$2(null,i__49183_49832);
if(cljs.core.truth_(child_49837)){
node.appendChild(child_49837);


var G__49838 = seq__49179_49829;
var G__49839 = chunk__49181_49830;
var G__49840 = count__49182_49831;
var G__49841 = (i__49183_49832 + (1));
seq__49179_49829 = G__49838;
chunk__49181_49830 = G__49839;
count__49182_49831 = G__49840;
i__49183_49832 = G__49841;
continue;
} else {
var G__49842 = seq__49179_49829;
var G__49843 = chunk__49181_49830;
var G__49844 = count__49182_49831;
var G__49845 = (i__49183_49832 + (1));
seq__49179_49829 = G__49842;
chunk__49181_49830 = G__49843;
count__49182_49831 = G__49844;
i__49183_49832 = G__49845;
continue;
}
} else {
var temp__5735__auto___49846__$1 = cljs.core.seq(seq__49179_49829);
if(temp__5735__auto___49846__$1){
var seq__49179_49847__$1 = temp__5735__auto___49846__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49179_49847__$1)){
var c__4550__auto___49848 = cljs.core.chunk_first(seq__49179_49847__$1);
var G__49849 = cljs.core.chunk_rest(seq__49179_49847__$1);
var G__49850 = c__4550__auto___49848;
var G__49851 = cljs.core.count(c__4550__auto___49848);
var G__49852 = (0);
seq__49179_49829 = G__49849;
chunk__49181_49830 = G__49850;
count__49182_49831 = G__49851;
i__49183_49832 = G__49852;
continue;
} else {
var child_49853 = cljs.core.first(seq__49179_49847__$1);
if(cljs.core.truth_(child_49853)){
node.appendChild(child_49853);


var G__49854 = cljs.core.next(seq__49179_49847__$1);
var G__49855 = null;
var G__49856 = (0);
var G__49857 = (0);
seq__49179_49829 = G__49854;
chunk__49181_49830 = G__49855;
count__49182_49831 = G__49856;
i__49183_49832 = G__49857;
continue;
} else {
var G__49858 = cljs.core.next(seq__49179_49847__$1);
var G__49859 = null;
var G__49860 = (0);
var G__49861 = (0);
seq__49179_49829 = G__49858;
chunk__49181_49830 = G__49859;
count__49182_49831 = G__49860;
i__49183_49832 = G__49861;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49828);
}
}


var G__49862 = cljs.core.next(seq__49139_49817__$1);
var G__49863 = null;
var G__49864 = (0);
var G__49865 = (0);
seq__49139_49766 = G__49862;
chunk__49141_49767 = G__49863;
count__49142_49768 = G__49864;
i__49143_49769 = G__49865;
continue;
} else {
var G__49866 = cljs.core.next(seq__49139_49817__$1);
var G__49867 = null;
var G__49868 = (0);
var G__49869 = (0);
seq__49139_49766 = G__49866;
chunk__49141_49767 = G__49867;
count__49142_49768 = G__49868;
i__49143_49769 = G__49869;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__49190_49870 = shadow.dom._to_svg;
var G__49191_49871 = "string";
var G__49192_49872 = ((function (G__49190_49870,G__49191_49871){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__49190_49870,G__49191_49871))
;
goog.object.set(G__49190_49870,G__49191_49871,G__49192_49872);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__49196_49884 = shadow.dom._to_svg;
var G__49197_49885 = "null";
var G__49198_49886 = ((function (G__49196_49884,G__49197_49885){
return (function (_){
return null;
});})(G__49196_49884,G__49197_49885))
;
goog.object.set(G__49196_49884,G__49197_49885,G__49198_49886);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49891 = arguments.length;
var i__4731__auto___49892 = (0);
while(true){
if((i__4731__auto___49892 < len__4730__auto___49891)){
args__4736__auto__.push((arguments[i__4731__auto___49892]));

var G__49893 = (i__4731__auto___49892 + (1));
i__4731__auto___49892 = G__49893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq49199){
var G__49200 = cljs.core.first(seq49199);
var seq49199__$1 = cljs.core.next(seq49199);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49200,seq49199__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49207 = arguments.length;
switch (G__49207) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__49210_49917 = shadow.dom.dom_node(el);
var G__49211_49918 = cljs.core.name(event);
var G__49212_49919 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49210_49917,G__49211_49918,G__49212_49919) : shadow.dom.dom_listen.call(null,G__49210_49917,G__49211_49918,G__49212_49919));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__47005__auto___49932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47005__auto___49932,buf,chan,event_fn){
return (function (){
var f__47006__auto__ = (function (){var switch__46939__auto__ = ((function (c__47005__auto___49932,buf,chan,event_fn){
return (function (state_49218){
var state_val_49219 = (state_49218[(1)]);
if((state_val_49219 === (1))){
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49218__$1,(2),once_or_cleanup);
} else {
if((state_val_49219 === (2))){
var inst_49215 = (state_49218[(2)]);
var inst_49216 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49218__$1 = (function (){var statearr_49220 = state_49218;
(statearr_49220[(7)] = inst_49215);

return statearr_49220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49218__$1,inst_49216);
} else {
return null;
}
}
});})(c__47005__auto___49932,buf,chan,event_fn))
;
return ((function (switch__46939__auto__,c__47005__auto___49932,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__46940__auto__ = null;
var shadow$dom$state_machine__46940__auto____0 = (function (){
var statearr_49221 = [null,null,null,null,null,null,null,null];
(statearr_49221[(0)] = shadow$dom$state_machine__46940__auto__);

(statearr_49221[(1)] = (1));

return statearr_49221;
});
var shadow$dom$state_machine__46940__auto____1 = (function (state_49218){
while(true){
var ret_value__46941__auto__ = (function (){try{while(true){
var result__46942__auto__ = switch__46939__auto__(state_49218);
if(cljs.core.keyword_identical_QMARK_(result__46942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46942__auto__;
}
break;
}
}catch (e49222){if((e49222 instanceof Object)){
var ex__46943__auto__ = e49222;
var statearr_49223_49968 = state_49218;
(statearr_49223_49968[(5)] = ex__46943__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49991 = state_49218;
state_49218 = G__49991;
continue;
} else {
return ret_value__46941__auto__;
}
break;
}
});
shadow$dom$state_machine__46940__auto__ = function(state_49218){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46940__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46940__auto____1.call(this,state_49218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46940__auto____0;
shadow$dom$state_machine__46940__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46940__auto____1;
return shadow$dom$state_machine__46940__auto__;
})()
;})(switch__46939__auto__,c__47005__auto___49932,buf,chan,event_fn))
})();
var state__47007__auto__ = (function (){var statearr_49224 = (f__47006__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47006__auto__.cljs$core$IFn$_invoke$arity$0() : f__47006__auto__.call(null));
(statearr_49224[(6)] = c__47005__auto___49932);

return statearr_49224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47007__auto__);
});})(c__47005__auto___49932,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
