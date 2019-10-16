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


(defn article []
  [:article.mw6.center.bg-washed-red.br3.pa4-ns.ma5
   [:div.tc
    [:h1.f4 "Title"]
    [:hr.mw3.bb.bw1.b--washed-blue-10]]
   [:p.lh-copy.measure.center.f6.black-70 "Content"]])

(defn article-section []
  [:article.mv5.flex.justify-around.h-100.flex-row.flex-wrap.bg-near-black.bt.bw4.b--silver
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]
   [:a.fl.w-50.w-25-l.h7-ns.link.overflow-hidden.ma2
    [:div.grow [article]]]])


; (defn blog-title []
;   [:header.flex.flex-column.justify-center.br1.ba.b--lightest-purple.bw4.h-30.grow.w-50.mb7-ns {:class title-style}
;    [:div.absolute.bg-washed-red.h-100.w-100.o-10]
;    [:span {:class title-style-extra} "Maybe Black Sheep"
;     [:div.tracked-mega {:class title-content} "By : : 0xLE"]
;     [:div.fw2.f7.tracked-mega.outline.pa1 "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, AN ARK LIT PRESSURE, AARDVARK CONJECTURE..."]
;     [:div {:class title-content}  "warning! may contain: code, art, beauty, logic"]]])

(defn blog-title []
  [:header
  [:div.cover.bg-left.bg-center-l.bg-image
   [:div.bg-black-80.pb5.pb6-m.pb7-l]]])

(defn side-bar []
  [:div.mb4 {:class home-div}
   [:img.absolute.bg-img.no-repeat.center {:src "/assets/paintswirl.jpeg"}]
   [:nav {:class nav-style}
    [blog-title]]])

(def main-content "h-100 w-80 bg-washed-red ba b--black helvetica")
(defn sidebar  []
  [:div.flex.flex-column.justify-between.h-100
   [side-bar]
   [article-section]])
