(ns general.toc (:require [general.info :as info] [general.bootstrap :as bootstrap] [clojure.string :as string] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defc scroll-location nil)

(defc= scroll-map (->> (string/split scroll-location #"/") (drop 1) (partition 2) (map (fn [[k v]] [(keyword k) (js/parseInt v)])) (into {})))

(defc hover-cell nil)

(defelem toc-link [{:keys [link title]} _] (let [scroll-link? (cell= (= scroll-location link)) hover? (cell= (= hover-cell link)) active? (cell= (or scroll-link? hover?))] (a :class (cell= {:active active?}) :click (fn* [] (do (reset! scroll-location nil) (reset! scroll-location link))) :hover (fn* [] (reset! hover-cell link)) :href link title)))

(defelem li-ch [{:keys [link title]} _] (li (toc-link :link link :title title)))

(defelem li-sect [{:keys [link title]} _] (li :style "margin-left:0px; font-size:13px;" (toc-link :link link :title title)))

(defelem li-sub [{:keys [link title]} _] (li :style "font-size:12px;" (toc-link :link link :title title)))

(defelem ul-ch [_ kids] (apply (ul :class "list-unstyled") kids))

(defelem ul-sect [{:keys [ch]} kids] (apply (ul :style "padding-left:10px; padding-top:0px;" :class (cell= {:list-unstyled true, :hidden (not (= ch (:ch scroll-map)))})) kids))

(defelem ul-sub [{:keys [ch sect]} kids] (apply (ul :style "padding-left:10px; padding-top:0px;" :class (cell= {:list-unstyled true, :hidden (not (and (= (:ch scroll-map) ch) (= (:sect scroll-map) sect)))})) kids))

(defelem ul-ssub [{:keys [ch sect sub]} kids] (apply (ul :style "padding-left: 10px;" :class (cell= {:list-unstyled true, :hidden (not (and (= (:ch scroll-map) ch) (= (:sect scroll-map) sect) (= (:sub scroll-map) sub)))})) kids))

(defelem toc [{:keys [data]} _] (let [[one two three four] (:toc-hierarchy (clojure.core/deref data))] (bootstrap/row (div :class "col-md-3 col-sm-3 toc" (h3 "Table of Contents") (let [all-chapters (cell= (get data one)) num-chapters (cell= (range 1 (inc (count all-chapters))))] (ul-ch (loop-tpl :bindings [ch num-chapters] (let [title (cell= (get-in all-chapters [ch :title])) link (cell= (get-in all-chapters [ch :link])) all-sects (cell= (get-in all-chapters [ch two])) num-sects (cell= (range 1 (inc (count all-sects))))] (div (li-ch :link link :title title) (ul-sect :ch ch (loop-tpl :bindings [sect num-sects] (let [title (cell= (get-in all-sects [sect :title])) link (cell= (get-in all-sects [sect :link])) all-subs (cell= (get-in all-sects [sect three])) num-subs (cell= (range 1 (inc (count all-subs))))] (div (li-sect :link link :title title) (ul-sub :ch ch :sect sect (loop-tpl :bindings [sub num-subs] (let [title (cell= (get-in all-subs [sub :title])) link (cell= (get-in all-subs [sub :link])) all-ssub (cell= (get-in all-subs [sub four])) num-ssub (cell= (range 1 (inc (count all-ssub))))] (div (li-sub :link link :title title) (ul-ssub :ch ch :sect sect :sub sub (loop-tpl :bindings [ssub num-ssub] (let [title (cell= (get-in all-ssub [ssub :title])) link (cell= (get-in all-ssub [ssub :link]))] (li-sub :link link :title title)))))))))))))))))))))
