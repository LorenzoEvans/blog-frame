(ns defblog.layout
  (:require [defblog.styles :refer [anchor-style
                                    nav-style
                                    title-style
                                    title-style-extra
                                    title-content
                                    home-div
                                    ]]
            [herb.core :refer [<class]]))

(defn about-anchor []
  [:a {:class anchor-style :href "/about"} "About"])

; (defn svg-item [] "<svg width='1335' height='400' xmlns='http://www.w3.org/2000/svg'>
;  ; <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
;  <defs>
;   <linearGradient spreadMethod='pad' y2='0.9875' x2='0.960938' y1='0.053906' x1='0.046875' id='svg_7'>
;    <stop offset='0.328125' stop-color='#ddc7d9'/>
;    <stop offset='1' stop-color='#223826'/>
;   </linearGradient>
;  </defs>
;  <g>
;   <title>background</title>
;   <rect fill='url(#svg_7)' id='canvas_background' height='402' width='1337' y='-1' x='-1'/>
;   <g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'>
;    <rect fill='url(#gridpattern)' stroke-width='0' y='0' x='0' height='100%' width='100%'/>
;   </g>
;  </g>
;  <g>
;   <title>Layer 1</title>
;  </g>
; </svg>")

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
  [:div.flex.flex-column.justify-center.br1.ba.b--lightest-purple.bw4.h-30.grow.w-50 {:class title-style}
   [:div.absolute.bg-washed-red.h-100.w-100.o-10]
   [:span {:class title-style-extra} "Maybe Sheep"
    [:div {:class title-content} "By : : #0xLE"]
    [:div.fw2.f5 "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, AN ARK LIT PRESSURE, "]
    [:div {:class title-content}  "warning! may contain: code, art, beauty, logic"]]])

; (defn blog-nav []
;   [:div {:class home-div}
;    [:nav {:class nav-style}
;     [:img.absolute.bg-img]
;     [blog-title]
;     [about-anchor]]])

(defn side-bar []
  [:div {:class home-div}
   [:nav {:class nav-style}
    [blog-title]
    [:img.absolute.bg-img {:src "/assets/paintswirl.jpeg"}]]])

(def main-content "h-100 w-80 bg-washed-red ba b--black helvetica")
(defn sidebar  []
  [:div.flex.flex-column.justify-between.h-100
   [side-bar]])
