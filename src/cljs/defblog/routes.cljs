(ns defblog.routes
  (:require
   [secretary.core :as secretary]
   [re-frame.core :as re-frame :refer [dispatch]]
   [defblog.events :as events]
   [bidi.bidi :as bidi]
   [pushy.core :as push]))

; a route is just a vector with a pattern and result
(def routes ["/" {"/" :home
                  "about" :about
                  "article/" {[:slug] :article}}])
; implements bi-directional routing, for forward and backward nav in browser.
(def history
  (let [dispatch #(dispatch [:set-active-panel
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
