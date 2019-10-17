(ns defblog.layout
  (:require [defblog.styles :refer [anchor-style
                                    nav-style
                                    title-style
                                    title-style-extra
                                    title-content
                                    home-div
                                    ]]
            [herb.core :refer [<class]]
            [defblog.db :refer [default-db]]))

(defn about-anchor []
  [:a {:class anchor-style :href "/about"} "About"])

; (reg-event-db
;  :modal
;  (fn [db [_ data]]
;    (assoc-in db [:modal] data)))

; (reg-sub-raw
;  :modal
;  (fn [db _] (reaction (:modal @db))))

; (defn my-awesome-modal-fn []
;  [:button
;   {:title "Click to show modal!"
;    :on-click #(dispatch [:modal {:show? true
;                                  :child [modal/hello]
;                                  :size :small}])} "Show me the modal!"])

(defn bg-image []
  )


(defn article [title content]
  [:article.mw6.center.bg-washed-red.br3.pa4-ns
   [:div.tc
    [:h1.f4 title]
    [:hr.mw3.bb.bw1.b--washed-blue-10]]
   [:p.lh-copy.measure.center.f6.black-70 content]])

(defn article-section []
  [:article.mv5.flex.justify-around.h-100.flex-row.flex-wrap.w-100
   [:a.mw4.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow (article (:labs-1 (get default-db :articles)) (:labs-1-prev (get default-db :articles)))]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]])


(defn blog-title-content []
  [:header.flex.flex-column.justify-center.br1.ba.b--lightest-purple.bw3.grow.w-80 {:class title-style}
   [:div.bg-washed-red.h-100.w-100.o-10]
   [:span {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega.mt1 {:class title-content} "By : : 0xLE"]
    [:div.fw1.f4.pa2.washed-blue.text-hover.outline-transparent.bw1.pa2.h4.avenir [:span.o-80.fw1.pa3.ma2 "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, AN ARK LIT PRESSURE, AARDVARK CONJECTURE..."]]
    [:div {:class title-content}  "warning! may contain: code, art, beauty, logic"]]])

(defn blog-title []
  [:header
  [:div.cover.bg-left.bg-center-l.bg-image
   [:div.pb5.pb6-m.pb7-l
    [:nav.dt.w-100.center
     [:div.dtc.v-mid.pa3
]
     [:div.dtc.v-mid.tr.pa3
      [:a.f6.fw4.hover-white.no-underline.white-70.dn.dib-ns.pv2.ph3 {:href "/about"} "About"]
      [:a.f6.fw4.hover-white.no-underline.white-70.dn.dib-ns.pv2.ph3 {:href ""} "Github"]
      [:a.f6.fw4.hover-white.no-underline.white-70.dn.dib-ns.pv2.ph3 {:href "/"} "LinkedIn"]
      [:a.f6.fw4.hover-white.no-underline.white-70.dn.dib-ns.pv2.ph3 {:href "/"} "Twitter"]
      [:a.f6.fw4.hover-white.no-underline.white-70.dn.dib-ns.pv2.ph3 {:href "/"} "Misc"]]]
    [:div.flex.justify-center
     [blog-title-content]]]]])

(defn side-bar []
  [:div {:class home-div}
   [:nav {:class nav-style}
    [blog-title]]])

(def main-content "h-100 w-80 bg-washed-red ba b--black helvetica")
(defn sidebar  []
  [:div
   [side-bar]])
