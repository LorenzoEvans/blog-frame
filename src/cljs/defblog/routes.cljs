(ns defblog.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require
   [secretary.core :as secretary]
   [goog.events :as gevents]
   [goog.history.EventType :as EventType]
   [re-frame.core :as re-frame]
   [defblog.events :as events]
   [pushy.core :as push]))

; (defn hook-browser-navigation! []
;   (doto (History.)
;     (gevents/listen
;      EventType/NAVIGATE
;      (fn [event]
;        (secretary/dispatch! (.-token event))))
;     (.setEnabled true)))


(defn hook-routes! []
  (def history (push/pushy secretary/dispatch! (fn [x] (when (secretary/locate-route x) x))))
  (push/start! history))

(defn app-routes []
  (secretary/set-config! :prefix "/")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (re-frame/dispatch [::events/set-active-panel :home-panel]))

  (defroute "/about" []
    (re-frame/dispatch [::events/set-active-panel :about-panel]))

(defroute "/labs-1" []
  (re-frame/dispatch [::events/set-active-panel :labs-1-page]))
  ;; --------------------


  (hook-routes!))
