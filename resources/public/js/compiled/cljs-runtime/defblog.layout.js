goog.provide('defblog.layout');
goog.require('cljs.core');
goog.require('defblog.styles');
goog.require('defblog.db');
goog.require('defblog.events');
goog.require('defblog.subs');
goog.require('re_frame.core');
defblog.layout.article_card = (function defblog$layout$article_card(content_store){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-scroll","div.overflow-scroll",-373100691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_section_style], null),(function (){var iter__4523__auto__ = (function defblog$layout$article_card_$_iter__45358(s__45359){
return (new cljs.core.LazySeq(null,(function (){
var s__45359__$1 = s__45359;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45359__$1);
if(temp__5735__auto__){
var s__45359__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45359__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__45359__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__45361 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__45360 = (0);
while(true){
if((i__45360 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__45360);
cljs.core.chunk_append(b__45361,(function (){var kw = cljs.core.first(item);
var data = cljs.core.second(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay-gradient-2.hover-bg-near-white","div.overlay-gradient-2.hover-bg-near-white",2035139573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_card_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red","a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red",1607503521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45360,kw,data,item,c__4521__auto__,size__4522__auto__,b__45361,s__45359__$2,temp__5735__auto__){
return (function (){
var G__45362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"panel-name","panel-name",224917079).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45362) : re_frame.core.dispatch.call(null,G__45362));
});})(i__45360,kw,data,item,c__4521__auto__,size__4522__auto__,b__45361,s__45359__$2,temp__5735__auto__))
], null),"Read"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1","p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1",268872798),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kw], null));
})());

var G__45365 = (i__45360 + (1));
i__45360 = G__45365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45361),defblog$layout$article_card_$_iter__45358(cljs.core.chunk_rest(s__45359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45361),null);
}
} else {
var item = cljs.core.first(s__45359__$2);
return cljs.core.cons((function (){var kw = cljs.core.first(item);
var data = cljs.core.second(item);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay-gradient-2.hover-bg-near-white","div.overlay-gradient-2.hover-bg-near-white",2035139573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_card_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red","a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red",1607503521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (kw,data,item,s__45359__$2,temp__5735__auto__){
return (function (){
var G__45363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.events","set-active-panel","defblog.events/set-active-panel",-1784795604),new cljs.core.Keyword(null,"panel-name","panel-name",224917079).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45363) : re_frame.core.dispatch.call(null,G__45363));
});})(kw,data,item,s__45359__$2,temp__5735__auto__))
], null),"Read"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1","p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1",268872798),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),kw], null));
})(),defblog$layout$article_card_$_iter__45358(cljs.core.rest(s__45359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(content_store);
})()], null);
});
defblog.layout.article = (function defblog$layout$article(){
var active_article = (function (){var G__45364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.subs","active-panel","defblog.subs/active-panel",-382304736)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45364) : re_frame.core.subscribe.call(null,G__45364));
})();
var kw = cljs.core.deref(active_article);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defblog.db.default_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),kw,new cljs.core.Keyword(null,"title","title",636505583)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defblog.db.default_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),kw,new cljs.core.Keyword(null,"full-article","full-article",-1413922236)], null))], null)], null)], null);
});
defblog.layout.article_section = (function defblog$layout$article_section(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article_card,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defblog.db.default_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null))], null);
});
defblog.layout.blog_title_content = (function defblog$layout$blog_title_content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay-gradient","div.overlay-gradient",2035350314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_style], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tracked-mega-ns.text-hover","section.tracked-mega-ns.text-hover",-299953013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_style_extra], null),"Maybe Black Sheep",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tracked-mega-ns.mt1","div.tracked-mega-ns.mt1",1462676564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_content], null),"By : : 0xLE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-hover-2","div.text-hover-2",-433838953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_quote], null),"ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100","div.w-100",-155155018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_warning], null),"warning! may contain: code, art, beauty, logic"], null)], null);
});
defblog.layout.blog_title = (function defblog$layout$blog_title(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cover.bg-left.bg-center-l.bg-image.w-100","div.cover.bg-left.bg-center-l.bg-image.w-100",-239558066),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb5.pb6-m.pb7-l.w-100","div.pb5.pb6-m.pb7-l.w-100",-711780663),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.dt.w-100.center.flex.flex-column.justify-center.w-100","nav.dt.w-100.center.flex.flex-column.justify-center.w-100",113591243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tr.pa3.flex.flex-column-reverse.w-100","div.tr.pa3.flex.flex-column-reverse.w-100",1135643835),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title_content], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.justify-between","div.flex.flex-row.flex-wrap.justify-between",1708408089),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),""], null),"Github"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Twitter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Misc"], null)], null)], null)], null)], null)], null)], null);
});
defblog.layout.home_page = (function defblog$layout$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100","div.w-100",-155155018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.w-100","nav.w-100",-2050167792),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.nav_style], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article_section], null)], null);
});
defblog.layout.homepage = (function defblog$layout$homepage(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-center.content-center.w-100.bg-washed-blue","div.flex.flex-column.justify-center.content-center.w-100.bg-washed-blue",857434486),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.home_page], null)], null);
});

//# sourceMappingURL=defblog.layout.js.map
