(ns defblog.layout
  (:require
   [defblog.styles :refer [anchor-style
                           nav-style
                           title-style
                           title-style-extra
                           title-content
                           title-warning
                           article-card-style
                           title-quote
                           article-section-style]]
   [defblog.db :refer [default-db]]
   [defblog.events :as events]
   [defblog.subs :as subs]
   [re-frame.core :as re-frame]))

; (defn article-card [content-store]
;   [:div.overflow-scroll {:class article-section-style}
;    (for [item (seq content-store)]
;      ^{:key (item :title)} [:div.overlay-gradient-2.hover-bg-near-white {:class article-card-style}
;                             [:a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red
;                              {:href (item :url)
;                               :on-click #(re-frame/dispatch [::events/set-active-panel (item :panel-name)])}

;                              (item :title)]
;                             [:p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1 (item :prev)]])])

(defn article-card [content-store]
  [:div.overflow-scroll {:class article-section-style}
   (for [item content-store]
    ^{:key (first item)}
    (let [kw (first item)
          data (second item)]
     ^{:key kw}
      [:div.overlay-gradient-2.hover-bg-near-white {:class article-card-style}
       [:h1 (:title data)]
       [:a.overflow-hidden.no-underline.fw5.link.f3.near-black.items-center.grow.hover-silver.hover-dark-red
         { :href (:url data)
           :on-click #(re-frame/dispatch [::events/set-active-panel (:panel-name data)])}  "Read"]
       [:p.f5.black-70.near-black.fw5.w-80.bb.b--black.bw1 (:prev data)]]))])
          
    

(defn article []
    (let [active-article (re-frame/subscribe [::subs/active-panel])
          kw @active-article]
      [:div
       [:div (get-in default-db [:content kw :title])]
       [:div [(get-in default-db [:content kw :full-article])]]])) 
       
       
(defn article-section []
  [article-card (get-in default-db [:content])])

(defn blog-title-content []
  [:div.overlay-gradient {:class title-style}
   [:section.tracked-mega-ns.text-hover {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega-ns.mt1 {:class title-content} "By : : 0xLE"]
    [:div.text-hover-2 {:class title-quote} "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."]]
   [:div.w-100 {:class title-warning} "warning! may contain: code, art, beauty, logic"]])

(defn blog-title []
  [:div.cover.bg-left.bg-center-l.bg-image.w-100
   [:header
    [:div.pb5.pb6-m.pb7-l.w-100
     [:nav.dt.w-100.center.flex.flex-column.justify-center.w-100
      [:div.tr.pa3.flex.flex-column-reverse.w-100
       [blog-title-content]
       [:div.flex.flex-row.flex-wrap.justify-between
        [:a.anchor-hover {:class anchor-style :href "#/"} "About"]
        [:a.anchor-hover {:class anchor-style :href ""} "Github"]
        [:a.anchor-hover {:class anchor-style :href "/"} "Twitter"]
        [:a.anchor-hover {:class anchor-style :href "/"} "Misc"]]]]]]])
    

(defn home-page []
  [:div.w-100
   [:nav.w-100 {:class nav-style}]
   [blog-title]
   [article-section]])

(defn homepage  []
  [:div.flex.flex-column.justify-center.content-center.w-100.bg-washed-blue
   [home-page]])