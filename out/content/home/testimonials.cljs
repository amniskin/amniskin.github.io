(ns content.home.testimonials (:require [ui.style :as style] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defelem from [{:keys [name place date]} _] (p :class "small" (str "- " name ", " place " " date)))

(defelem heading [_ kids] (h3 kids))

(defelem review [_ kids] (p kids))

(defelem content [attr kids] (style/container (h1 :style "text-align: center;" "What my clients think of me.") (style/divider) (style/row (style/content-bubble (heading "Invaluable Asset") (review "Aaron has been an invaluable asset as a tutor to my nephew. He\n                is very patient, professional, and knowledgeable. He has been\n                able to identify what areas need to be addressed for the best\n                outcome. He is also teaching him study skills, note-taking, and\n                assisting him as a mentor. I feel very fortunate to have found\n                him.") (from :name "Sandra" :place "Miami, Fl" :date "12/02/2014")) (style/content-bubble (heading "A Great Experience") (review "Working with Aaron has been a great experience. He is very\n           knowledgeable and explains hard to understand concepts very well. He\n           is a natural at teaching and a pleasure to work with. Highly\n           recommend!!") (from :name "Jasmin" :place "Miami, Fl" :date "09/22/2014")) (style/content-bubble (heading "Very Likeable and Competent Tutor") (review "My son was unsettled by the thought of having a tutor for his HS\n           Calculus course, but he needed some help. Aaron has such a laid back\n           personality that my son was able to focus on the lessons without\n           feeling stressed. Aaron is very knowledgeable and was able to help\n           my son pass his online course with an A!") (from :name "Desiree" :place "Miami, Fl" :date "01/04/13"))) (style/row (style/content-bubble (heading "Extremely Helpful... One of the Best") (review "Aaron is one of the best calculus tutors I've met so far. He\n                helps you understand the methods and rules of math, and never\n                fails to miss a detail. His ways of teaching are extremely helpful\n                and I would definitely recommend him!") (from :name "Abdulla" :place "Miami, FL" :date "10/02/2014")) (style/content-bubble (heading "Great tutor!!") (review "Aaron has tutored me for physics, and has done a great job so\n                far. He is really knowledgeable about the subject and explains\n                things thoroughly. I would recommend him to anyone who not only\n                wants to pass a class, but who wants to understand it. He also\n                really cares about the grades received and is flexible with his\n                tutoring times.") (from :name "Paulina" :place "Miami, FL" :date "05/26/2012")) (style/content-bubble (heading "Best Tutor Ever!") (review "Mr. Aaron is a very very patient tutor. When my first lesson\n                was scheduled I was so nervous because the subject (math) was\n                very complicated but he made me feel comfortable. He not only\n                explained me the subject in a very clear way but showed me how\n                to solve all type of math problems. I can truly say that it was\n                the best experience I have ever had with a tutor. ") (from :name "Patricia" :place "Miami, FL" :date "02/06/2012")))))
