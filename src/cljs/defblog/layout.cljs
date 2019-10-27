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
   [defblog.events :as events]
   [defblog.articles.article_content :refer [labs-article-data]]))

(def content-store (get-in default-db [:content]))

; (defn article-card [title content]
; (let []  
;   [:span.br3.pa2-ns.flex.justify-center.flex-column.items-center
;    [:h1.f4.washed-red.items-center title]
;    [:p.f5.black-70.truncate.near-white.w-70 content]]))

(defn article-card [content-store]
  [:div.w-100
   (for [item content-store]
     ^{:key (item :title)}[:div {:class article-card-style}
      [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy
       {:href (item :url)}]
      [:span.br3.pa2-ns.flex.justify-center.flex-column.items-center
       [:h1.f4.washed-red.items-center (item :title)]
       [:p.f5.black-70.truncate.near-white.w-70 (item :content)]]])])

; (defn full-article [title content exit]
;   [:article.center.bg-washed-red.br3.pa4-ns.w-100.h-100.flex.flex-column.justify-between
;    [:h1.f4. title]
;    [:div.center.f6.black-70.w-75.h-100.overflow-scroll content]
;    exit])

; (defn labs-2-card []
;   [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "#/lambda-labs-graphql-2"}
;    [:div
;     (article-card (get-in content-store [:articles :labs-2 :title])
;                   (get-in content-store [:articles :labs-2 :labs-2-prev]))]])
; (defn labs-1-card []
;   [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "#/lambda-labs-graphql-1"}
;    [:div
;     (article-card (get-in content-store [:articles :labs-1 :title])
;                   (get-in content-store [:articles :labs-1 :labs-1-prev]))]])

; (defn fp-card []
;   [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "#/how-fp"}
;    [:div
;     (article-card (get-in content-store [:articles :how-fp :title])
;                   (get-in content-store [:articles :how-fp :prev]))]])

; (defn lisp-card []
;   [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "#/lambda-labs-graphql-1"}
;    [:div
;     (article-card (get-in content-store [:articles :how-lisp :title])
;                   (get-in content-store [:articles :how-lisp :prev]))]])

; (defn clojure-card []
;   [:a.h7-ns.overflow-hidden.ma2.no-underline.link.navy {:href "#/lambda-labs-graphql-1"}
;    [:div
;     (article-card (get-in content-store [:articles :how-clojure :title])
;                   (get-in content-store [:articles :how-clojure :prev]))]])

; (defn lambda-labs-gql []
;   [:div.w-100.h-100
;    (full-article (:labs-1 (get content-store :articles))
;                  (:labs-1-content (get content-store :articles))
;                  [:a.fw2.f4.ba.b--hot-pink.pa2.ma4 {:href "/" :on-click #(re-frame/dispatch [::events/set-active-panel :home-panel])}
;                   "Back Home"])])

(defn lambda-labs-gql []
  [labs-article-data])

(defn article-section []
  [:article.w-100 {:class article-section-style}
     [article-card content-store]])

; (defn article-section []
;   [:article {:class article-section-style}
;    [:a.w-50
;     [:div.overlay-gradient.w-90 {:class article-card-style}  [fp-card]]]
;    [:a.w-50
;     [:div.overlay-gradient.w-90 {:class article-card-style} [lisp-card]]]
;    [:a.w-50
;     [:div.overlay-gradient.w-90 {:class article-card-style} [clojure-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-1-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;   ;  [:a.w-50
;   ;   [:div.overlay-gradient.w-90 {:class article-card-style} [labs-2-card]]]
;    ])

(defn blog-title-content []
  [:div.flex.flex-column.justify-center.br1.ba.b--washed-blue.bw3.grow.w-40.mv5 {:class title-style}
   [:span.tracked-mega-ns {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega-ns.mt1 {:class title-content} "By : : 0xLE"]
    [:div.pa2.bw1.pa2.h4.avenir.w-100 [:span.o-80.f5.fw3.pa3.ma2.text-hover.tracked  "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, A HARP CONVENTION, AN ARK LIT PRESSURE, AN ORBIT GESTURE..."]]
    [:div.w-100 {:class title-content} "warning! may contain: code, art, beauty, logic"]
    [:div
     [:a {:href "#/about"}
      "go to About Page"]]]])

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
    [article-section]]])

(defn side-bar []
  [:div.w-100 {:class home-div}
   [:nav.w-100 {:class nav-style}]
   [blog-title]])

(defn sidebar  []
  [:div.flex.flex-column.justify-center.content-center.w-100
   [side-bar]])
