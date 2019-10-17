(ns defblog.views
  (:require
   [re-frame.core :as re-frame]
   [defblog.subs :as subs]
   [defblog.layout]
   [herb.core :refer [<class]]
   [defblog.styles :refer [global-styles]]
   [defblog.layout :refer [sidebar
                           article-section]]))


;; home


(defn home-panel []
  [:div.flex.flex-column.justify-between.h-100.bg-washed-green.w-100 
   [sidebar]
   [article-section]])


;; about


(defn about-panel []
  [:div
   [:h1 "This is the About Page."]

   [:div
    [:a {:href "/"}
     "go to Home Page"]]])


;; main


(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
