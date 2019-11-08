(ns defblog.routes
  (:require
   [secretary.core :as secretary]
   [re-frame.core :as re-frame :refer [dispatch]]
   [defblog.events :as events]
   [bidi.bidi :as bidi]
   [pushy.core :as push]))

<<<<<<< HEAD
; a route is just a vector with a pattern and result
(def routes ["/" {"" :home
                  "about" :about
                  "article/" {[:slug] :article}}])
; implements bi-directional routing, for forward and backward nav in browser.
(def history
  (let [dispatch #(dispatch [:set-active-page
                             {:page (:handler %) :slug (get-in % [:route-params :slug])}])
        match #(bidi/match-route routes %)]
    (push/pushy dispatch match)))

(defn- parse-url [url]
  (bidi/match-route routes url))
; bidi/match-route converts urls into data structures to search for in routes.

(defn start! []
  (push/start! history))

(def url-for (partial bidi/path-for routes))

(defn token! [token]
  (push/set-token! history token))
=======
(def routes ["/" {"" :home
                  "about" :about}])

(defn- parse-url [url]
  (bidi/match-route routes url))
>>>>>>> development

(defn- dispatch-route [matched-route]
  (let [panel-name (keyword (str (name (:handler matched-route)) "-panel"))]
    (re-frame/dispatch [::events/set-active-panel panel-name])))

<<<<<<< HEAD

=======
(defn app-routes []
  (pushy/start! (pushy/pushy dispatch-route parse-url)))

(def url-for (partial bidi/path-for routes))
>>>>>>> development


; (defn hook-browser-navigation! []
;   (doto (History.)
;     (gevents/listen
;      EventType/NAVIGATE
;      (fn [event]
;        (secretary/dispatch! (.-token event))))
;     (.setEnabled true)))

<<<<<<< HEAD

; (defn hook-routes! []
;   (def history (push/pushy secretary/dispatch! (fn [x] (when (secretary/locate-route x) x))))
;   (push/start! history))

=======
; (defn hook-routes! []
;   (def history (push/pushy secretary/dispatch! (fn [x] (when (secretary/locate-route x) x))))
;   (push/start! history))

>>>>>>> development
; (defn app-routes []
;   (secretary/set-config! :prefix "/")
;   ;; --------------------
;   ;; define routes here
;   (defroute "/" []
;     (re-frame/dispatch [::events/set-active-panel :home-panel]))

;   (defroute "/about" []
;     (re-frame/dispatch [::events/set-active-panel :about-panel]))

;   (defroute "/lambda-labs-gql-1" []
;     (re-frame/dispatch [::events/set-active-panel :lambda-labs-gql-1]))
;   ; --------------------


;   (hook-routes!))
