(ns defblog.views
  (:require
   [re-frame.core :as re-frame]
   [defblog.subs :as subs]
   [defblog.layout]
   [herb.core :refer [<class]]
   [defblog.styles :refer [global-styles]]
   [defblog.layout :refer [sidebar
                           article-section
                           lambda-labs-gql]]))

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]
   [:div
    [:a {:href "#/"}
     "go to Home Page"]]])

;; home


(defn home-panel []
  [:div.flex.flex-column.justify-between.bg-image
   [sidebar]])

;; about

;; main

(defn labs-full []
  [:div.h-100 [lambda-labs-gql]])

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :labs-1 [labs-full]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
