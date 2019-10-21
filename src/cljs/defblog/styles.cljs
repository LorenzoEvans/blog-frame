(ns defblog.styles
  (:require [herb.core :refer [defglobal]]))

(defglobal global
  [:body :html {:margin 0}]
  [:#app {:height "100vh"}])

(def home-div "")
(def title-style "dt hide-child cover bg-center bw1  pa3 tc self-center fw3 f1 mt3 items-center mb3 tl self-center washed-red hover-washed-blue hover-bg-black")
(def title-style-extra "bw1 pa2 helvetica fw1 b f4 mt3 items-center mb3 washed-green hover-animate hover-washed-blue")

(def title-content "lightest-blue dtv v-mid bg-washed-blue-40 pa1 child f6 fw2 pb3 bb bw1")
(def nav-style "f4 fw4 helvetica h-50 w-100 tc flex flex-column justify-center")

(def global-styles "vh-100 flex flex-column w-100 over-div")

(def anchor-style "grow avenir h2 tc hover-animate hover-lightest-blue fw4 f5 no-underline light-pink ba bw1 br2 w-20 ")

(def article-card-style "h4-ns w-20 self-center link overflow-hidden avenir ma2 washed-blue ba bw1 br3  b--near-white pa2 ")

(def article-section-style "bt b--washed-blue bw2 vh-50 flex justify-around flex-wrap w-100 overflow-scroll")