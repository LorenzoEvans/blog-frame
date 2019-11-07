(defproject defblog "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"
                  :exclusions [com.google.javascript/closure-compiler-unshaded
                               org.clojure/google-closure-library]]
                 [thheller/shadow-cljs "2.8.62"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.9"]
                 [secretary "1.2.3"]
                 [compojure "1.6.1"]
                 [yogthos/config "1.1.5"]
                 [ring "1.7.1"]
                 [herb "0.10.0"]
                 [kibu/pushy "0.3.8"]
                 [bidi "2.1.6"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [day8.re-frame/tracing "0.5.1"]
                 [day8.re-frame/re-frame-10x "0.3.6-react16"]
                 [cljs-ajax "0.7.3"]]

  :plugins []

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :aliases {"dev"  ["with-profile" "dev" "run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "prod" ["with-profile" "prod" "run" "-m" "shadow.cljs.devtools.cli" "release" "app"]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.10"]]}

   :prod {}

   :uberjar {:source-paths ["env/prod/clj"]
             :omit-source  true
             :main         defblog.server
             :aot          [defblog.server]
             :uberjar-name "defblog.jar"
             :prep-tasks   ["compile" ["prod"]]}})
