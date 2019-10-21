(ns defblog.layout
  (:require
   [re-frame.core :as re-frame]
   [defblog.styles :refer [anchor-style
                           nav-style
                           title-style
                           title-style-extra
                           title-content
                           home-div
                           article-card-style
                           article-section-style]]
   [herb.core :refer [<class]]
   [defblog.db :refer [default-db]]
   [defblog.events :as events]))

(def content-store default-db)

(defn article-card [title content]
  [:span.br3.pa4-ns
   [:h1.f6.content-start.washed-blue title]
   [:p.f6.black-70.truncate.washed-green content]])

(defn full-article [title content exit]
  [:article.center.bg-washed-red.br3.pa4-ns.w-100.h-100.flex.flex-column.justify-between
   [:h1.f4. title]
   [:div.center.f6.black-70.w-75.h-100.overflow-scroll content]
   exit])

(defn labs-1-card []
  [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "/lambda-labs-graphql-1"}
   [:div
    (article-card (:labs-1 (get content-store :articles))
                  (:labs-1-prev (get content-store :articles)))]])

(defn lambda-labs-gql []
  [:div.w-100.h-100
   (full-article (:labs-1 (get content-store :articles))
                 (:labs-1-content (get content-store :articles))
                 [:a.fw2.f4.ba.b--hot-pink.pa2.ma4 {:href "/" :on-click #(re-frame/dispatch [::events/set-active-panel :home-panel])}
                  "Back Home"])])

(defn article-section []
  [:article {:class article-section-style}
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style}  [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]
   [:a.w-30
    [:div.overlay-gradient.w-60 {:class article-card-style} [labs-1-card]]]])

(defn blog-title-content []
  [:div.flex.flex-column.justify-center.br1.ba.b--washed-blue.bw3.grow.w-40.mv5 {:class title-style}
   [:span.tracked-mega-ns {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega-ns.mt1 {:class title-content} "By : : 0xLE"]
    [:div.pa2.bw1.pa2.h4.avenir.w-30 [:span.o-80.f5.fw3.pa3.ma2.text-hover.tracked  "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."]]
    [:div.overlay-gradient.w-20 {:class title-content}6 "warning! may contain: code, art, beauty, logic"]]])

(defn blog-title []
  [:header
   [:div.cover.bg-left.bg-center-l.bg-image.w-100
    [:div.pb5.pb6-m.pb7-l.w-100
     [:nav.dt.w-100.center.flex.flex-column.justify-center.w-100
      [:div.tr.pa3.flex.flex-column-reverse.w-100
       [blog-title-content]
       [:div.flex.flex-row.flex-wrap.justify-between.w-100
        [:a.anchor-hover.move {:class anchor-style :href "/about"} "About"]
        [:a.anchor-hover.move {:class anchor-style :href ""} "Github"]
        [:a.anchor-hover.move {:class anchor-style :href "/"} "LinkedIn"]
        [:a.anchor-hover.move {:class anchor-style :href "/"} "Twitter"]
        [:a.anchor-hover.move {:class anchor-style :href "/"} "Misc"]]]]]
    [:div [article-section]]]])

(defn side-bar []
  [:div.w-100 {:class home-div}
   [:nav.w-100 {:class nav-style}]
    [blog-title]])

(defn sidebar  []
  [:div.flex.flex-column.justify-center.content-center.w-100
   [side-bar]])
