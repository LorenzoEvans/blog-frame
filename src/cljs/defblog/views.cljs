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

; (defn labs-1 []
;   [:div.bg-washed-blue "hi"])
;; main

(defn lambda-labs-graphql-1 []
  [lambda-labs-gql])

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :lambda-labs-graphql-1 [lambda-labs-graphql-1]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
