(ns defblog.articles.article_content)




(defn article-full [])
  
(defn labs-article-data []
  [:div "hi"])


(defn how-fp-data []
  [:article {:id "b25e57a2-e45d-429e-b217-137f180d0ee3", :class "page serif"}
    [:header] 
    [:img {:class "page-cover-image", :src "How I Ended Up A Functional Programmer/fpwallpaper.png"}]
    [:h1 {:class "page-title"} "How I Ended Up A Functional Programmer"]
    [:div {:class "page-body"}]
    [:p {:id "516cc859-9115-4d5c-9336-7f47411f2637", :class "block-color-gray"}
      [:strong "One night, a little Haskell, and here we are."]]
    [:p {:id "73b4467d-7748-47fa-bdca-ab885aede234"} "How does a student taking Lambda&#39;s Web Development course end up staying up extra late after class to ready about Haskell?"]
   [:p {:id "2c3c34fe-a927-4260-b05f-2692fc0defb0"}]
   [:p {:id "bb29c8fe-a717-4699-b24a-1042d5d7b78a" } "It&#39;s really quite simple: JavaScript."]
   [:p {:id "46842aa2-29e6-47cc-b474-0f7d196e4f45" } "Now, this is not going to be a dunk on JS article, nor a up-turned nose &quot;FP as a cure-all&quot; article. While there might have been a time, even when I wrinkle my nose up at the language, I appreciate it for what it does, and the role it plays. In the event that someone tells me they want to learn programming tomorrow, or tells me they want to start a company around some idea for an app, I&#39;m going to point them right to JS, because it&#39;s approachable, ubiquitous, and the lingua franca of web development. \n\nHowever, when I was new to the language, and much newer to programming in general, I was desperately frustrated, stumbling over concatting, the ever famous " 
    [:em "this is undefined"]", the fact that adding integers to strings (or vice versa) coerces the result to into a string, but multiplication coerces the result into an integer, while division remains unbothered, or my personal favorite, the fact that capital letters aren&#39;t greater than lowercase letters. "]
   [:p {:id "73af75f5-b9c3-4d7d-b168-c742eee96fc9",} "As are most newcomers to the language, it&#39;s particularly vibrant set of quirks (and names....ECMAScript, anyone?), was leaving me quite befuddled, so, I set out to find out " 
    [:em "why"]" this language worked in the way it did, because it was becoming very obvious to me that the linear, logical relationship between events in the real world, did not apply (consistently) here."]
   [:p {:id "481b8628-a201-4e0f-b39b-4432ea90f67c",  } "So I asked google some not so polite questions, and, at this time I was only aware of Object Oriented Programming, which made sense to me conceptually, because the real world is full of objects. The world " 
    [:em "is "]"an object."]
   [:p {:id "f66c4448-5fcf-433d-bb31-686ac4c1d73c",  } "So imagine my suprise when someone starts listing things I&#39;m familiar with, mentioning imperative code, side-effects (the true boogeyman), and type coercion, only to swerve left and bring up Functional Programming, a magical side-effect-less land where things make sense, (mostly) void of objects, and everything is a function. "]
   [:p {:id "b1abec62-2a18-4487-b0d8-66a2c2ee049c",  } "I was immediately confused, because I couldn&#39;t imagine it was possible, to do the things you needed to do, with only functions."]])
