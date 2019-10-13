goog.provide('defblog.layout');
goog.require('cljs.core');
goog.require('defblog.styles');
goog.require('herb.core');
defblog.layout.about_anchor = (function defblog$layout$about_anchor(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.anchor_style,new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),new cljs.core.Symbol(null,"About'","About'",-1705034383,null)], null);
});
defblog.layout.svg_item = (function defblog$layout$svg_item(){
return "<svg width='1335' height='400' xmlns='http://www.w3.org/2000/svg'>\n ; <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n <defs>\n  <linearGradient spreadMethod='pad' y2='0.9875' x2='0.960938' y1='0.053906' x1='0.046875' id='svg_7'>\n   <stop offset='0.328125' stop-color='#ddc7d9'/>\n   <stop offset='1' stop-color='#223826'/>\n  </linearGradient>\n </defs>\n <g>\n  <title>background</title>\n  <rect fill='url(#svg_7)' id='canvas_background' height='402' width='1337' y='-1' x='-1'/>\n  <g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'>\n   <rect fill='url(#gridpattern)' stroke-width='0' y='0' x='0' height='100%' width='100%'/>\n  </g>\n </g>\n <g>\n  <title>Layer 1</title>\n </g>\n</svg>";
});
defblog.layout.blog_title = (function defblog$layout$blog_title(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.blog_title_style], null),"A Mind Meandering",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.about_anchor], null)], null);
});
defblog.layout.blog_nav = (function defblog$layout$blog_nav(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),defblog.styles.nav_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [defblog.layout.blog_title], null)], null);
});

//# sourceMappingURL=defblog.layout.js.map
