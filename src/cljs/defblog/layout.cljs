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



(defn article-section []
  [:article
   [:a.fl.w-50.w-25-l.link.overflow-hidden 
    [:div.grow.aspect-ratio--4x6]]])


(defn blog-title []
  [:div.flex.flex-column.justify-center.br1.ba.b--lightest-purple.bw4.h-30.grow.w-50 {:class title-style}
   [:div.absolute.bg-washed-red.h-100.w-100.o-10]
   [:span {:class title-style-extra} "Maybe Black Sheep"
    [:div.tracked-mega {:class title-content} "By : : 0xLE"]
    [:div.fw2.f7.tracked-mega.outline.pa1 "ANARCHITECTURE, AN ORCISH TESTER, AN ARC INSPECTION, AN ARK LIT PRESSURE, AARDVARK CONJECTURE..."]
    [:div {:class title-content}  "warning! may contain: code, art, beauty, logic"]]])

(defn side-bar []
  [:div {:class home-div}
   [:nav {:class nav-style}
    [blog-title]
    [:img.absolute.bg-img.no-repeat.center {:src "/assets/paintswirl.jpeg"}]]])

(def main-content "h-100 w-80 bg-washed-red ba b--black helvetica")
(defn sidebar  []
  [:div.flex.flex-column.justify-between.h-100
   [side-bar]])
