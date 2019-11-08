(ns defblog.events
  (:require
   [re-frame.core :as re-frame]
   [defblog.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :set-active-panel
 (fn [{:keys [db]} [_ {:keys [page slug]}]]
   (assoc db :active-panel active-panel)))
