(ns general.info (:require [clojure.string :as string] [tailrecursion.hoplon.markdown :as md] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defn do-watch ([atom f] (do-watch atom nil f)) ([atom init f] (with-let [k (gensym)] (f init (clojure.core/deref atom)) (add-watch atom k (fn [_ _ old new] (f old new))))))

(def home nil)

(def route* (route-cell home))

(def route (cell= (->> (string/split route* #"/") (partition 2) (map (fn [[k v]] [(keyword k) v])) (into {}))))

(defc scroll-location nil)

(defc= scroll-map (->> (string/split scroll-location #"/") (partition 2) (map (fn [[k v]] [(keyword k) v])) (into {})))

(def date (js/Date.))

(def nav-height 50)

(defc screen-height (.height (js/jQuery js/window)))

(let [w (js/jQuery js/window)] (on! w :resize (fn* [] (reset! screen-height (.height w)))))

(defc scroll-top 0)

(let [d (js/jQuery js/document)] (on! d :scroll (fn* [] (reset! scroll-top (.scrollTop d)))))

(defmethod do! :scroll-to [elem _ v] (with-timeout 0 (when v (let [body (js/jQuery "body,html") elem (js/jQuery elem)] (.animate body (clj->js {:scrollTop (- (.-top (.offset elem)) nav-height)}))))))

(defmethod do! :scroll-background [elem _ v] (when v (let [elem (js/jQuery elem) top (.. elem offset -top) scroll (cell= (str "50% " (/ (- (+ scroll-top screen-height) top) 8) "px"))] (set! (.-backgroundPosition (.-style elem)) scroll))))

(defmethod on! :on-screen [elem k callback] (with-timeout 0 (let [e-top 0 e-bot 0 s-top 0 s-bot 0 c (cell= (let [e (js/jQuery elem) e-top (.. e offset -top) e-bot (+ e-top (. e height)) s-top (+ 50 scroll-top) s-bot (+ screen-height s-top)] (or (<= e-top s-bot e-bot) (<= e-top s-top e-bot))))] (do-watch c (fn* [p1__2430# p2__2429#] (callback elem (boolean p2__2429#)))))))

(defmethod on! :on-screen* [elem k callback] (with-timeout 0 (let [e (js/jQuery elem) e-top (.. e offset -top) e-bot (+ e-top (. e height)) begin (cell= (- (+ e-top nav-height) screen-height)) end (cell= (+ e-bot nav-height)) prcnt (cell= (/ (- scroll-top begin) (- end begin))) c (cell= (if (<= 0 prcnt 1) prcnt nil))] (do-watch c (fn* [p1__2432# p2__2431#] (callback elem prcnt (boolean p2__2431#)))))))

(defmethod on! :at-top [elem k callback] (with-timeout 0 (let [e-top 0 e-bot 0 c (cell= (let [e (js/jQuery elem) e-top (.. e offset -top) e-bot (+ e-top (. e height))] (<= e-top (+ 50 scroll-top) e-bot)))] (do-watch c (fn* [p1__2434# p2__2433#] (callback (boolean p2__2433#)))))))
