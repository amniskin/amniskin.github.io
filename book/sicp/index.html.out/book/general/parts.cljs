(ns book.general.parts (:require [general.info :as info] [general.toc :as toc] [clojure.string :as string] [tailrecursion.hoplon.markdown :as md] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon.markdown :refer [md]] [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(def ^{:dynamic true} *book-data* (cell {}))

(defn make-link ([ch] (str "#!/ch/" ch "/")) ([ch sect] (str "#!/ch/" ch "/sect/" sect "/")) ([ch sect sub] (str "#!/ch/" ch "/sect/" sect "/sub/" sub "/")) ([ch sect sub ssub] (str "#!/ch/" ch "/sect/" sect "/sub/" sub "/ssub/" ssub "/")))

(defn get-chapters [data] (:ch data))

(defn get-sects [data ch] (:sect ((:ch data) ch)))

(defn get-subsects [data ch sect] (:sub ((:sect ((:ch data) ch)) sect)))

(defn get-ssubs [data ch sect sub] (:ssub ((:sub ((:sect ((:ch data) ch)) sect)) sub)))

(defn get-exs [data ch] (:ex ((:ch data) ch)))

(defn get-figs [data ch] (:fig ((:ch data) ch)))

(defn get-footnotes [data ch] (:footnote ((:ch data) ch)))

(defelem part [{:keys [size link title]} kids] (div :scroll-to (cell= (= info/route* link)) :at-top (fn* [] (reset! toc/scroll-location link)) (size :class "text-left" title) (div :class "" kids)))

(defelem content [attr kids] (apply (div :class "text-justify" :style "padding-left:10%; padding-right:5%;") attr kids))

(defelem about [{:keys [title tagline]} kids] (div :scroll-to (cell= (= info/route* (str "#!/" (:short-title *book-data*) "/"))) :at-top (fn* [] (reset! toc/scroll-location (str "#!/" (:short-title (clojure.core/deref *book-data*)) "/"))) :class "text-justify" (h1 :class "text-left" (:title (clojure.core/deref *book-data*))) (h3 (:tagline (clojure.core/deref *book-data*))) (div kids)))

(defelem chapter [{:keys [title]} kids] (let [ch (inc (count (get-chapters (clojure.core/deref *book-data*)))) link (make-link ch) this-data {:ch ch, :title title, :link link} title (str ch " " title)] (swap! *book-data* (fn* [p1__5408#] (assoc-in p1__5408# [:ch ch] this-data))) (part :size h1 :title title :link link kids)))

(defelem sect [{:keys [title]} kids] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) sect (inc (count (get-sects (clojure.core/deref *book-data*) ch))) link (make-link ch sect) this-data {:ch ch, :sect sect, :title title, :link link} title (str ch "." sect " " title)] (swap! *book-data* (fn* [p1__5409#] (assoc-in p1__5409# [:ch ch :sect sect] this-data))) (part :size h2 :title title :link link kids)))

(defelem subsect [{:keys [title]} kids] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) sect (count (get-sects (clojure.core/deref *book-data*) ch)) sub (inc (count (get-subsects (clojure.core/deref *book-data*) ch sect))) link (make-link ch sect sub) this-data {:ch ch, :sect sect, :sub sub, :title title, :link link} title (str ch "." sect "." sub " " title)] (swap! *book-data* (fn* [p1__5410#] (assoc-in p1__5410# [:ch ch :sect sect :sub sub] this-data))) (part :size h3 :title title :link link kids)))

(defelem ssub [{:keys [title]} kids] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) sect (count (get-sects (clojure.core/deref *book-data*) ch)) sub (count (get-subsects (clojure.core/deref *book-data*) ch sect)) ssub (inc (count (get-ssubs (clojure.core/deref *book-data*) ch sect sub))) link (make-link ch sect sub ssub) this-data {:ch ch, :sect sect, :sub sub, :ssub ssub, :type :ssub, :title title, :link link} title title] (swap! *book-data* (fn* [p1__5411#] (assoc-in p1__5411# [:ch ch :sect sect :sub sub :ssub ssub] this-data))) (part :size h4 :title title :link link kids)))

(defelem exercises [attr kids] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) sect (count (get-sects (clojure.core/deref *book-data*) ch)) sub (count (get-subsects (clojure.core/deref *book-data*) ch sect)) ssub (inc (count (get-ssubs (clojure.core/deref *book-data*) ch sect sub))) link (make-link ch sect sub ssub) end-exers (count (:ex ((:ch (clojure.core/deref *book-data*)) ch))) first-exs (inc (- end-exers (count (filter (fn* [p1__5412#] (not (= "" p1__5412#))) kids)))) title (str "Exercise" (if (= 0 (- end-exers first-exs)) (str " ") (str "s " first-exs "-")) end-exers) this-data {:type "exercises", :title title, :link link}] (swap! *book-data* (fn* [p1__5413#] (assoc-in p1__5413# [:ch ch :sect sect :sub sub :ssub ssub] this-data))) (part :size h3 :title "" :link link kids)))

(defelem exercise [attr kids] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) ex (inc (count (get-exs (clojure.core/deref *book-data*) ch))) this-data {:type "exercise", :link (str "#!/sicp/ch/1/ex/" ex)}] (swap! *book-data* (fn* [p1__5414#] (assoc-in p1__5414# [:ch ch :ex ex] this-data))) (div :type "exercise" :class "exercise" (h3 (str "Exercise " ch "." ex)) kids)))

(defelem q-a [_ children] (let [open (cell false) button-text (cell= (str (if open "Hide" "Show") " solution"))] (div (button :click (fn* [] (swap! open not)) button-text) (div {:class "solution", :toggle open} children))))

(defelem fig [{:keys [footer]} _] (let [ch (count (get-chapters (clojure.core/deref *book-data*))) figr (inc (count (get-figs (clojure.core/deref *book-data*) ch))) link (str "#!/" (string/lower-case (:short-title (clojure.core/deref *book-data*))) "/ch/" ch "/fig/" figr "/") src (str "/img/" (string/lower-case (:short-title (clojure.core/deref *book-data*))) "/figure" ch "_" figr ".gif") this-data {:footer footer, :src src, :link link}] (swap! *book-data* (fn* [p1__5415#] (assoc-in p1__5415# [:ch ch :fig figr] this-data))) (div (img :src src :class "img-responsive" :alt "Figure 1.3") (p (b (str "Figure " ch "." figr ": ")) footer))))

(defelem image [attr kids] (apply (img :class "img-responsive" :src (str "/" (:src attr))) kids))

(defelem footnote [attr kids] (let [hidden (cell true) ch (count (get-chapters (clojure.core/deref *book-data*))) ftn (inc (count (:footnote (clojure.core/deref *book-data*)))) this-data kids] (swap! *book-data* (fn* [p1__5416#] (assoc-in p1__5416# [:footnote ftn] this-data))) (div :style "display:inline;" (span :click (fn* [] (swap! hidden not)) :style "color:#0000ff" (sup (str ftn))) (div :class (cell= {:hidden hidden, :popover true, :bottom true}) (apply (div :class "popover-content" :click (fn* [] (reset! hidden true))) attr kids)))))

(defmethod md/quoted-node :double-angle [_ kids] (footnote kids))
