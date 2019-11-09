(ns defblog.articles.article_content)




(defn article-full [])
  
(defn labs-article-data []
  [:div "\t\t\t\t"
   [:header "\t\t\t\t\t"
    [:h1 {:class "page-title"} "Lambda Labs & GraphQL, Part I"] "\t\t\t\t"] "\t\t\t\t"
   [:div {:class  "page-body"} "\t\t\t\t\t" 
    [:h2  "Part One: Individual Accomplishments."] "\t\t\t\t\t"
    [:p  "This sprint was an experience that taught me both how much I've learned, and how strong my skills are, but also how much I have to learn, and what areas I'm weak in."]
    [:p  "Some of these areas extend beyond software into communication, conflict resolution, and explaining my own thought process. "]
    [:p  "Some of the biggest difficulties were conforming to the rules of various 3rd party services, such as Google and Github, within the confines of Firebase. "]
    [:p  "Twitter, Google, and Github all return JSON user-objects that are shaped differently, which meant we had to effectively search these objects and find the pieces of data we needed to feed back to Firebase, and all of them don't necessarily return the same information. "]
    [:p  "Another difficulty was the immense size of Firebase functionality, as they offer services for iOS, Web, Android, Node, etc, and each of these are complex tools, and the depth of the documentation keeps in kind with the tools. "]
    [:p  "It can become difficult at times, to keep track of where you've been, what you've looked at, what you actually need, or what you were even looking for in the first place. "]
    [:p  "That being said, there's absolutely nothing like the reward of pulling off a task, and serving up a feature right in the nick of time, that you've been working on for two weeks. So, nonetheless, I signed up for access to Twitter's API as a dev, and was able to implement that 3rd party feature, along with implementing Google sign in."]
    [:div 
     [:div 
      [:h2  "Detailed Analysis:"]
      [:h3 
       [:mark 
        [:em "Ticket: Implementing 3rd Party O-Auth."]]]
      [:figure
       [:div {:class "bookmark source"}
        [:a {:href "https://trello.com/c/J6kUM2HU"} "Trello"]
        [:a {:class  "bookmark-href", :href "https://trello.com/c/J6kUM2HU"} "https://trello.com/c/J6kUM2HU"]]]
      [:p  "All in all, the third party login button you see on our site, is a React component that renders a single button, which then calls an onSubmit listener, which is a function that contains all of the necessary firebase logic for the particular method an individual chose to sign in."]
      [:figure {:id "ba94207a-8ae5-42b2-a466-69914bc56885", :class  "image"}
       [:a {:href "Lambda Labs GraphQL Part I/ratemydiy.png"}
        [:img.w-50.h-50 {:src "/assets/ratemydiy.png"}]]]
      [:p {:id "99116d05-dd0a-406b-b810-770b67f780e8", } "That logic speaks to the third party API, which then speaks to its &quot;database&quot;, and pulls the required information back, which is then returned to the Firestore, one of the two unique database types that Firebase provides, and is stored with a unique UID string that can be used to verify/authorize a user."]
      [:p {:id "ab2cd827-6502-4be5-8cb2-54b98e041c08", } "Something interesting I observed, was that, if a user signs in with a 3rd party service, that uses their Gmail, then tries to authenticate with Google, because their Google identifier is their Gmail,"
       [:strong " and "] "their 3rd party identifier is the same email, "
       [:em "their Gmail log in will actually over-write the 3rd party login"] ". "]
      [:figure {:id "f16e0311-3237-4325-89ff-6d10d35aebd6", :class "image"}
       [:a {:href "Lambda Labs GraphQL Part I/Screen_Shot_2019-10-19_at_5.09.20_PM.png"}
        [:img.h-50.w-50 { :src "/assets/firebase.png"}]]]
      [:p {:id "ad1ee1bb-440b-419c-afcd-f6fbf5afa09e",}]
      [:p {:id "b434bbdf-98b7-4ce7-8c96-c0f1c6e28533", } "This was a really, really tricky bug to catch, because it occurs as if it was an error with the 3rd party login, while expressing itself like an error in the code, while the actual solution was actually changing a setting in the Firebase console to allow users to sign up/in from various instances at the same time."]
      [:figure {:class "block-color-brown_background callout", :id "670744b6-62df-4604-b402-c1b54fe551a2"}
       [:div 
        [:span {:class  "icon"} "💡"]]
       [:div "The two emails, ange.lasalle91@gmail, and codehfffdack2018@gmail, belong to my team-mates, the latter of which is the owner of one of the twitter accounts appearing with a dash as opposed to an email. They're great developers, and team-mates. If you're in need of that, I'm sure an email would be received warmly."]]
      [:h2 {:id "fa617f21-d7bd-416e-8080-968850af9001", } "Part Two: Milestone Reflections."]]
     [:div {:id "5bfc0ea2-40a1-4ad2-bbd8-4661eb2db7f4", :class "column"}
      [:p {:id "06c8a43f-6f4a-42c4-a3a9-52987c666e9f",}]]]
    [:p {:id "f12277bd-83db-4cc6-b320-27a73f5033a4", } "I think that was the most important take-away, with the second being that sometimes, you have to try a thing, that doesn't work, but leads you to another thing, that works a little better, that leads you to something that gets the job done. It can be frustrating to build something up, just to have to tear it down, again and again, but you get a little better at building each time, and eventually that process pays major dividends."]]])


(defn how-fp-data []
  [:article {:id "b25e57a2-e45d-429e-b217-137f180d0ee3", :class "page serif"}])
[:header 
 [:img {:class "page-cover-image", :src "How I Ended Up A Functional Programmer/fpwallpaper.png", :style "object-position:center 50%"}]
 [:h1 {:class "page-title"} "How I Ended Up A Functional Programmer"]]
[:div {:class "page-body"}
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
 [:p {:id "b1abec62-2a18-4487-b0d8-66a2c2ee049c",  } "I was immediately confused, because I couldn&#39;t imagine it was possible, to do the things you needed to do, with only functions."]]
