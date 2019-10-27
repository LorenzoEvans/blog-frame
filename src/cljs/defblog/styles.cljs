(ns defblog.styles
  (:require [herb.core :refer [defglobal]]))

(defglobal global
  [:body :html {:margin 0}]
  [:#app {:height "100vh"}])

(def home-div "")
(def title-style "flex flex-column justify-center br1 ba b--b--washed-blue bw3 grow w-40 mv5 dt hide-child cover bg-center bw1  pa3 tc self-center fw3 f1 mt3 items-center mb3 tl self-center washed-red hover-washed-blue hover-bg-black")
(def title-style-extra "bw1 pa2 helvetica fw1 flex flex-column w-100 b f4 mt3 items-center mb3 washed-green hover-animate hover-washed-blue")

(def title-content "lightest-blue dtv v-mid bg-washed-blue-40 pa1 child f6 fw2 pb3 bb bw1")
(def nav-style "f4 fw4 helvetica h-30 w-100 tc flex flex-column justify-center")

(def global-styles "vh-100 flex flex-column w-100 over-div")

(def anchor-style "grow avenir h2 tc hover-animate hover-lightest-blue fw4 f5 no-underline light-pink ba bw1 br2 w-20 ")

(def article-card-style "h4-ns link overflow-hidden avenir mb5 mt4 ml4 washed-blue ba bw1 br1 b--near-white pa2 ")

(def card-title "")

(def article-section-style "bt b--washed-blue bw2 vh-70 flex justify-center flex-wrap w-100 overflow-scroll")

(def title-quote "pa2 bw1 pa2 h4 avenir w-100 o-80 f5 fw3 pa3 ma2 text-hover tracked ")