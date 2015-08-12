(ns content.sicp.book-data (:require [ui.book :as book] [ui.book-toc :as toc] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(def sicp-data (cell {:short-title "SICP", :title "Structure and Interpretation of Computer Programs", :tagline "With Clojure!", :location "sicp"}))

(defelem toc [_ _] (binding [book/*book-data* sicp-data] (toc/toc)))

(defelem container [attr kids] (binding [book/*book-data* sicp-data] (apply (book/container) attr kids)))

(defelem about [attr kids] (binding [book/*book-data* sicp-data] (apply (book/about :title "about") attr kids)))

(defelem chapter [{:keys [title]} kids] (binding [book/*book-data* sicp-data] (apply (book/chapter :title title) kids)))

(defelem sect [{:keys [title]} kids] (binding [book/*book-data* sicp-data] (apply (book/sect :title title) kids)))

(defelem subsect [{:keys [title]} kids] (binding [book/*book-data* sicp-data] (apply (book/subsect :title title) kids)))

(defelem ssub [{:keys [title]} kids] (binding [book/*book-data* sicp-data] (apply (book/ssub :title title) kids)))

(defelem exercises [attr kids] (binding [book/*book-data* sicp-data] (book/exercises attr kids)))

(defelem exercise [attr kids] (binding [book/*book-data* sicp-data] (book/exercise attr kids)))

(defelem q-a [_ kids] (binding [book/*book-data* sicp-data] (book/q-a kids)))

(defelem footnote [attr kids] (binding [book/*book-data* sicp-data] (book/footnote attr kids)))

(defelem fig [{:keys [footer]} kids] (binding [book/*book-data* sicp-data] (apply (book/fig :footer footer) kids)))

(defelem image [attr kids] (binding [book/*book-data* sicp-data] (apply (book/image) attr kids)))
