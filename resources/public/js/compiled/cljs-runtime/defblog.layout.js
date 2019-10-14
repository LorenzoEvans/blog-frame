goog.provide('defblog.layout');
goog.require('cljs.core');
goog.require('defblog.styles');
goog.require('herb.core');
defblog.layout.about_anchor = (function defblog$layout$about_anchor(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"About"], null);
});
defblog.layout.blog_title = (function defblog$layout$blog_title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.title_style], null),"Maybe Sheep"], null);
});
defblog.layout.blog_nav = (function defblog$layout$blog_nav(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.home_div], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.nav_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.absolute.bg-img","img.absolute.bg-img",2084801523)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.about_anchor], null)], null)], null);
});

//# sourceMappingURL=defblog.layout.js.map
