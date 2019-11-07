(ns defblog.events
  (:require
   [re-frame.core :as re-frame]
   [defblog.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-fx
 :set-active-panel
 (fn [{:keys [db]} [_ {:keys [page slug]}]]
   (let [cur-page (assoc db :active-page page)]
     (case page
       :home {:db cur-page
              :dispatch-n [[:get-articles]]}
       :article {:db (assoc cur-page :active-article slug)
                 :dispatch-n [[:get-articles]]}))))

(re-frame/reg-event-db
 :set-active-article
 (fn [{:keys [db]} [_ slug]]
   {:db (assoc db :active-article slug)}))

(re-frame/reg-event-db
 :get-articles
 (fn [{:keys [db]} [_ content]]
   content))