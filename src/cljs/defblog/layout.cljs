(ns defblog.layout
  (:require [defblog.styles :refer [anchor-style
                                    blog-title-style
                                    nav-style]]
            [herb.core :refer [<class]]))


(defn about-anchor []
  [:a {:class anchor-style :href "/about"} "About"])


(defn blog-title []
  [:nav {:class blog-title-style} "A Mind Meandering"
   [about-anchor]])

(defn blog-nav []
  [:nav {:class nav-style}
   [blog-title]])