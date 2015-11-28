(ns tailrecursion.hoplon.markdown (:require [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(def ^{:dynamic true} *references* {})

(def ^{:dynamic true} *abbreviations* {})

(def ^{:dynamic true} *current-table* nil)

(def ^{:dynamic true} *current-table-header* nil)

(def ^{:dynamic true} *current-table-column* nil)

(defelem abbreviation-node [attr kids] nil)

(defelem auto-link-node [attr [url & _]] (a :href url url))

(def block-quote-node blockquote)

(def bullet-list-node ul)

(def code-node code)

(def definition-list-node dl)

(def definition-node dd)

(def definition-term-node dt)

(defelem exp-image-node [{:keys [url title]} [alt & _]] (img :src url :title title :alt alt))

(defelem exp-link-node [{:keys [url title]} kids] (apply a :href url :title title kids))

(defelem header-node [{:keys [level]} kids] (apply (nth (concat [h6 h1 h2 h3 h4 h5] (repeat h6)) level) kids))

(def list-item-node li)

(defelem mail-link-node [{:keys [text]} _] (a :href (str "mailto:" text) text))

(def ordered-list-node ol)

(def para-node p)

(defmulti quoted-node (fn [{:keys [type]} kids] type))

(defmethod quoted-node :double-angle [_ kids] (concat ["«"] kids ["»"]))

(defmethod quoted-node :double [_ kids] (concat ["“"] kids ["”"]))

(defmethod quoted-node :single [_ kids] (concat ["‘"] kids ["’"]))

(defelem ref-image-node [{rk :reference-key, ss :separator-space} [alt & _ :as kids]] (let [{:keys [title url]} (*references* rk)] (if url (img :src url :title title :alt alt) (concat ["!["] kids ["]"] (when rk [ss "[" rk "]"])))))

(defelem ref-link-node [{rk :reference-key, ss :separator-space} kids] (let [{:keys [title url]} (*references* rk)] (if url (a {:href url, :title title} kids) (concat ["["] kids ["]"] (when rk [ss "[" rk "]"])))))

(defelem reference-node [attr kids] nil)

(defmulti simple-node (fn [{:keys [type]} _] type))

(defmethod simple-node :apostrophe [_ _] "'")

(defmethod simple-node :ellipsis [_ _] "…")

(defmethod simple-node :emdash [_ _] "—")

(defmethod simple-node :endash [_ _] "–")

(defmethod simple-node :h-rule [_ _] (hr))

(defmethod simple-node :linebreak [_ _] (br))

(defmethod simple-node :nbsp [_ _] " ")

(def strike-node del)

(defelem strong-emph-super-node [{chars :chars, closed? :closed, strong? :strong} kids] (if-not closed? (into [chars] kids) (apply (if-not strong? em strong) kids)))

(defelem table-body-node [attr kids] nil)

(defelem table-caption-node [attr kids] nil)

(defelem table-cell-node [attr kids] nil)

(defelem table-column-node [attr kids] nil)

(defelem table-header-node [attr kids] nil)

(defelem table-node [attr kids] nil)

(defelem table-row-node [attr kids] nil)

(defelem wiki-link-node [attr kids] nil)
