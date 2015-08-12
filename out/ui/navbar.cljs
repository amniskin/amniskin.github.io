(ns ui.navbar (:require [ui.info :as info] [ui.style :as style] [clojure.string :as string] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(def home info/home)

(defelem nav-button [{:keys [name]} kids] (button :type "button" :class (cell= {:navbar-toggle true, :collapsed true, :active (= info/nav-active name)}) :click (fn* [] (cond (not (clojure.core/deref info/nav-active)) (reset! info/nav-active name) (= (clojure.core/deref info/nav-active) name) (reset! info/nav-active nil) :else (reset! info/nav-active name))) kids))

(defelem bar [_ kids] (div :class "navbar navbar-inverse navbar-fixed-top" (style/container kids)))

(defelem header2 [_ kids] (apply (div :class "navbar-header") kids))

(defelem brand [_ kids] (apply (a :class "navbar-brand" :click (fn* [] (reset! info/nav-active nil)) :href home) kids))

(defelem menu2 [attr kids] (div :class (cell= {:collapse true, :navbar-collapse true, :in (= info/nav-active "menu")}) (apply (ul :class "nav navbar-nav") attr kids)))

(defelem item [{:keys [name]} _] (let [lc-name (string/lower-case name)] (li :class (cell= {:active (= info/location lc-name)}) (a :click (fn* [] (do (reset! info/scroll-location nil) (reset! info/scroll-location lc-name) (reset! info/nav-active nil))) :href (str "#!/" lc-name "/") name))))
