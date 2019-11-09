goog.provide('defblog.layout');
goog.require('cljs.core');
goog.require('defblog.styles');
goog.require('defblog.db');
goog.require('defblog.events');
goog.require('defblog.subs');
goog.require('re_frame.core');
defblog.layout.article_card = (function defblog$layout$article_card(content_store){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-scroll","div.overflow-scroll",-373100691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.article_section_style], null),(function (){var iter__4523__auto__ = (function defblog$layout$article_card_$_iter__43505(s__43506){
return (new cljs.core.LazySeq(null,(function (){
var s__43506__$1 = s__43506;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43506__$1);
if(temp__5735__auto__){
var s__43506__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43506__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43506__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43508 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43507 = (0);
while(true){
if((i__43507 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43507);
cljs.core.chunk_append(b__43508,console.log(cljs.core.second(item)));

var G__43510 = (i__43507 + (1));
i__43507 = G__43510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43508),defblog$layout$article_card_$_iter__43505(cljs.core.chunk_rest(s__43506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43508),null);
}
} else {
var item = cljs.core.first(s__43506__$2);
return cljs.core.cons(console.log(cljs.core.second(item)),defblog$layout$article_card_$_iter__43505(cljs.core.rest(s__43506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.seq(content_store));
})()], null);
});
defblog.layout.article = (function defblog$layout$article(){
return (function (){
var active_article = (function (){var G__43509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("defblog.subs","active-article","defblog.subs/active-article",1405033941)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43509) : re_frame.core.subscribe.call(null,G__43509));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(defblog.db.default_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.deref(active_article),new cljs.core.Keyword(null,"title","title",636505583)], null))], null);
});
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
