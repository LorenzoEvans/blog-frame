(ns defblog.views
  (:require
   [re-frame.core :as re-frame]
   [defblog.subs :as subs]
   [defblog.layout :refer [homepage]]
   [defblog.db :refer [default-db]]
   [defblog.articles.article_content :refer [labs-article-data]]))

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]
   [:div
    [:a {:href "#/"}
     "go to Home Page"]]])

;; home


(defn home-panel []
  [:div.flex.flex-column.justify-between.bg-image
   [homepage]])

;; about

;; main

(defn article []
  (let [active-article (get-in default-db [:active-article])]
    [:div
      [:header (js/console.log active-article)]
      [:p "got it"]]))
    
    
  
(defn- panels [panel-name & article-name]
  (let [active-article (re-frame/subscribe [::subs/active-article])] 
    (case panel-name
      :home-panel [home-panel]
      :about-panel [about-panel]
      (keywordize @active-article) [article]
     [:div])))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
