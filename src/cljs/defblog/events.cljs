(ns defblog.events
  (:require
   [re-frame.core :as re-frame]
   [defblog.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  ::set-active-article
  (fn [db [_ active-article]]
      (assoc db :active-article active-article)))
   
   
