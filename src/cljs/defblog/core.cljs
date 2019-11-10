(ns defblog.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [defblog.events :as events]
   [defblog.routes :as routes]
   [defblog.views :as views]
   [defblog.config :as config]
   [defblog.subs :as subs])
  (:gen-class))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
