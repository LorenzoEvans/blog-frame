(ns defblog.db)

(def default-db
  {:name "re-frame"
   :content [{:title "Lambda Labs & GraphQL, Part I" :prev "Taught me how to walk this graph, she told me to walk this graph..."
              :url "/lambda-labs-gql-1"
              :panel-name "lambda-labs-gql-1"}
             {:title "Lambda Labs & Firebase, Part II" :prev "A quick but vivid journey into the world of O-Auth."
              :url "/lambda-labs-2-firebase"}
             {:title "Lambda Labs & O-Auth Part II" :prev "A quick but vivid journey into the world of O-Auth."
              :url "lambda-labs-3-firebase"}
             {:title "An Abridged History of Linux" :prev "How one rebellious Finnish kid redefined an OS."
              :url "#/hist-of-linux"}
             {:title "How I Ended Up A Functional Programmer" :prev "One night, a little Haskell, and here we are."
              :url "#/how-fp"}
             {:title "Haskell's list of secrets" :prev "Hold on, wait, you mean like the speech impediment?"
              :url "#/how-lisp"}
             {:title "How I Ended Up Writing Clojure" :prev "Battened down in web development, one paren left, one way out."
              :url "#/how-clojure"}
             {:title "How I Ended Up Writing Code: The Prequel" :prev "spoiler alert: it involves bitcoin"
              :url "#/how-code-a-prequel"}
             {:title "My preferred Front End Set Up" :prev "If you make me write CSS, it's going to be functional!"
              :url "#/functional-front-end"}]
   :misc {:mit-scheme-lectures "link"
          :100rco "link"
          :sonic-pi "link"
          :sentivate "link"
          :blockstack "link"}
   :current-reads "link"})
