(ns defblog.layout
  (:require [defblog.styles :refer [anchor-style
                                    blog-title-style
                                    nav-style]]
            [herb.core :refer [<class]]
            ))


(defn about-anchor []
  [:a {:class anchor-style :href "/about"} 'About'])

(defn svg-item [] "<svg width='1335' height='400' xmlns='http://www.w3.org/2000/svg'>
 ; <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <defs>
  <linearGradient spreadMethod='pad' y2='0.9875' x2='0.960938' y1='0.053906' x1='0.046875' id='svg_7'>
   <stop offset='0.328125' stop-color='#ddc7d9'/>
   <stop offset='1' stop-color='#223826'/>
  </linearGradient>
 </defs>
 <g>
  <title>background</title>
  <rect fill='url(#svg_7)' id='canvas_background' height='402' width='1337' y='-1' x='-1'/>
  <g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'>
   <rect fill='url(#gridpattern)' stroke-width='0' y='0' x='0' height='100%' width='100%'/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
 </g>
</svg>")

; (defn svg-item []
;   [:svg {:defs {:linearGradient {:spreadMethod "pad" 
;                                  :y2 "0.9875" :x2 "0.960938" :y1 "0.053906" :x1 "0.046875" :id "svg_7"}
;                 :stop {:offset "0.328125" :stop-color "#ddc7d9"}
;                 :stop {:offset "1" :stop-color "#2238336"}}
;          :g {:title "background"
;              :rect {:fill "url(#svg_7)" :id "canvas_background" :height "402" :width "1337" :y "-1" :x "-1"}
;              :g {:display "none" :overflow "visible" :y "0" :x "0" :height "100%" :width "100%" :id "canvasGrid"
;                  :rect {:fill "url(#gridpattern)"  :stroke-width "0" :y "0" :x "0" :height "100%" :width "100%"}}}
;          :g {:title "Layer 1"}}])

(defn blog-title []
  [:nav {:class blog-title-style} "A Mind Meandering"
   [about-anchor]])

(defn blog-nav []
  [:nav {:class nav-style}
   [blog-title]])