(ns defblog.layout
  (:require
   [defblog.styles :refer [anchor-style
                           nav-style
                           title-style
                           title-style-extra
                           title-content
                           article-card-style
                           title-quote
                           article-section-style]]
   [defblog.db :refer [default-db]]))

(defn article-card [content-store]
  [:div.w-100
   (for [item content-store]
     ^{:key (item :title)}[:div {:class article-card-style}
      [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy
       {:href (item :url)}]
      [:span.br3.pa2-ns.flex.justify-center.flex-column.items-center
       [:h1.f4.washed-red.items-center (item :title)]
       [:p.f5.black-70.truncate.near-white.w-70 (item :content)]]])])

(defn article-section []
  [:article.w-100 {:class article-section-style}
   [article-card (get-in default-db [:content])]])

(defn blog-title-content []
  [:div {:class title-style}
   [:section.tracked-mega-ns {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega-ns.mt1 {:class title-content} "By : : 0xLE"]
    [:div {:class title-quote} "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."]]
    [:div.w-100 {:class title-content} "warning! may contain: code, art, beauty, logic"]])

(defn blog-title []
  [:header
   [:div.cover.bg-left.bg-center-l.bg-image.w-100
    [:div.pb5.pb6-m.pb7-l.w-100
     [:nav.dt.w-100.center.flex.flex-column.justify-center.w-100
      [:div.tr.pa3.flex.flex-column-reverse.w-100
       [blog-title-content]
       [:div.flex.flex-row.flex-wrap.justify-between.w-100
        [:a.anchor-hover {:class anchor-style :href "#/"} "About"]
        [:a.anchor-hover {:class anchor-style :href ""} "Github"]
        [:a.anchor-hover {:class anchor-style :href "/"} "Twitter"]
        [:a.anchor-hover {:class anchor-style :href "/"} "Misc"]]]]]
    [article-section]]])

(defn home-page []
  [:div.w-100 
   [:nav.w-100 {:class nav-style}]
   [blog-title]])

(defn homepage  []
  [:div.flex.flex-column.justify-center.content-center.w-100
   [home-page]])
