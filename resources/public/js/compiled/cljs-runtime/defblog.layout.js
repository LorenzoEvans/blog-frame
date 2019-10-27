goog.provide('defblog.layout');
goog.require('cljs.core');
goog.require('defblog.styles');
goog.require('defblog.db');
defblog.layout.article_card = (function defblog$layout$article_card(content_store){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100","div.w-100",-155155018),(function (){var iter__4523__auto__ = (function defblog$layout$article_card_$_iter__44476(s__44477){
return (new cljs.core.LazySeq(null,(function (){
var s__44477__$1 = s__44477;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44477__$1);
if(temp__5735__auto__){
var s__44477__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44477__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44477__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44479 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44478 = (0);
while(true){
if((i__44478 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44478);
cljs.core.chunk_append(b__44479,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_card_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.h7-ns.overflow-hidden.ma2.no-underline.link.navy","a.h7-ns.overflow-hidden.ma2.no-underline.link.navy",819130184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__44480 = new cljs.core.Keyword(null,"url","url",276297046);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44480) : item.call(null,G__44480));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br3.pa2-ns.flex.justify-center.flex-column.items-center","span.br3.pa2-ns.flex.justify-center.flex-column.items-center",-212613484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.f4.washed-red.items-center","h1.f4.washed-red.items-center",1370281757),(function (){var G__44481 = new cljs.core.Keyword(null,"title","title",636505583);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44481) : item.call(null,G__44481));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.f5.black-70.truncate.near-white.w-70","p.f5.black-70.truncate.near-white.w-70",1219602496),(function (){var G__44482 = new cljs.core.Keyword(null,"content","content",15833224);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44482) : item.call(null,G__44482));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var G__44483 = new cljs.core.Keyword(null,"title","title",636505583);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44483) : item.call(null,G__44483));
})()], null)));

var G__44488 = (i__44478 + (1));
i__44478 = G__44488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44479),defblog$layout$article_card_$_iter__44476(cljs.core.chunk_rest(s__44477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44479),null);
}
} else {
var item = cljs.core.first(s__44477__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_card_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.h7-ns.overflow-hidden.ma2.no-underline.link.navy","a.h7-ns.overflow-hidden.ma2.no-underline.link.navy",819130184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__44484 = new cljs.core.Keyword(null,"url","url",276297046);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44484) : item.call(null,G__44484));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.br3.pa2-ns.flex.justify-center.flex-column.items-center","span.br3.pa2-ns.flex.justify-center.flex-column.items-center",-212613484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.f4.washed-red.items-center","h1.f4.washed-red.items-center",1370281757),(function (){var G__44485 = new cljs.core.Keyword(null,"title","title",636505583);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44485) : item.call(null,G__44485));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.f5.black-70.truncate.near-white.w-70","p.f5.black-70.truncate.near-white.w-70",1219602496),(function (){var G__44486 = new cljs.core.Keyword(null,"content","content",15833224);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44486) : item.call(null,G__44486));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var G__44487 = new cljs.core.Keyword(null,"title","title",636505583);
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__44487) : item.call(null,G__44487));
})()], null)),defblog$layout$article_card_$_iter__44476(cljs.core.rest(s__44477__$2)));
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
defblog.layout.article_section = (function defblog$layout$article_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.w-100","article.w-100",-999008911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_section_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article_card,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defblog.db.default_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null))], null)], null);
});
defblog.layout.blog_title_content = (function defblog$layout$blog_title_content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_style], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.tracked-mega-ns","section.tracked-mega-ns",1173264193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_style_extra], null),"Maybe Black Sheep",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tracked-mega-ns.mt1","div.tracked-mega-ns.mt1",1462676564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_content], null),"By : : 0xLE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_quote], null),"ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100","div.w-100",-155155018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_content], null),"warning! may contain: code, art, beauty, logic"], null)], null);
});
defblog.layout.blog_title = (function defblog$layout$blog_title(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cover.bg-left.bg-center-l.bg-image.w-100","div.cover.bg-left.bg-center-l.bg-image.w-100",-239558066),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pb5.pb6-m.pb7-l.w-100","div.pb5.pb6-m.pb7-l.w-100",-711780663),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.dt.w-100.center.flex.flex-column.justify-center.w-100","nav.dt.w-100.center.flex.flex-column.justify-center.w-100",113591243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tr.pa3.flex.flex-column-reverse.w-100","div.tr.pa3.flex.flex-column-reverse.w-100",1135643835),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title_content], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.flex-wrap.justify-between.w-100","div.flex.flex-row.flex-wrap.justify-between.w-100",-1881010415),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),""], null),"Github"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Twitter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.anchor-hover","a.anchor-hover",-1682555103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Misc"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.article_section], null)], null)], null);
});
defblog.layout.home_page = (function defblog$layout$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-100","div.w-100",-155155018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.w-100","nav.w-100",-2050167792),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.nav_style], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title], null)], null);
});
defblog.layout.homepage = (function defblog$layout$homepage(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-center.content-center.w-100","div.flex.flex-column.justify-center.content-center.w-100",-753394820),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.home_page], null)], null);
});

//# sourceMappingURL=defblog.layout.js.map
