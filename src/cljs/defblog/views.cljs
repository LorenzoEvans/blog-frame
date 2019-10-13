(ns defblog.views
  (:require
   [re-frame.core :as re-frame]
   [defblog.subs :as subs]
   [defblog.layout :refer [background]]))


;; home


(defn home-panel []
  [:div {:class (str background)} "Home"
   [:a {:href "/about"} "About"]])


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
