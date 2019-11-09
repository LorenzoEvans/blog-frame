(ns defblog.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType])
  (:require
   [secretary.core :as secretary]
   [goog.events :as gevents]
   [re-frame.core :as re-frame]
   [defblog.events :as events]
   [bidi.bidi :as bidi]
   [pushy.core :as push]))

; (def routes ["/" {"" :home
;                   "about" :about}])

; (defn- parse-url [url]
;   (bidi/match-route routes url))

; (defn- dispatch-route [matched-route]
;   (let [panel-name (keyword (str (name (:handler matched-route)) "-panel"))]
;     (re-frame/dispatch [::events/set-active-panel panel-name])))

; (defn app-routes []
;   (pushy/start! (pushy/pushy dispatch-route parse-url)))

; (def url-for (partial bidi/path-for routes))


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

  (defroute "/lambda-labs-gql-1" []
    (re-frame/dispatch [::events/set-active-panel :lambda-labs-gql-1]))
  
  (defroute "/lambda-labs-2-firebase" []
    (re-frame/dispatch [::events/set-active-panel :lambda-labs-gql-2]))
  
  (defroute "/lambda-labs-3-firebase" []
    (re-frame/dispatch [::events/set-active-panel :lambda-labs-gql-3]))
  ; --------------------


  (hook-routes!))
