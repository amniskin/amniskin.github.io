(ns general.navbar (:require [clojure.string :as string] [general.bootstrap :as bootstrap] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defc nav-active nil)

(def location (first (string/split (second (string/split (.-pathname js/location) #"/")) #"\.")))

(defc height 50)

(defelem nav-button [{:keys [name]} kids] (button :type "button" :class (cell= {:navbar-toggle true, :collapsed true, :active (= nav-active name)}) :click (fn* [] (cond (not (clojure.core/deref nav-active)) (reset! nav-active name) (= (clojure.core/deref nav-active) name) (reset! nav-active nil) :else (reset! nav-active name))) kids))

(defelem fixed-bar [_ kids] (div :class "navbar navbar-inverse navbar-fixed-top" (bootstrap/container kids)))

(defelem static-bar [_ kids] (div :class "navbar navbar-inverse navbar-static-top" :style "margin-bottom:0;" (bootstrap/container kids)))

(defelem header2 [_ kids] (apply (div :class "navbar-header") kids))

(defelem brand [_ kids] (apply (a :class "navbar-brand" :click (fn* [] (reset! nav-active nil)) :href "/index.html") kids))

(defelem menu2 [attr kids] (div :class (cell= {:collapse true, :navbar-collapse true, :in (= nav-active "menu")}) (apply (ul :class "nav navbar-nav") attr kids)))

(defelem nav-menu-button [_ _] (nav-button (span :style (cell= (str "color:" (if (= "menu" nav-active) "white" "black") ";")) :class (cell= {:glyphicon true, :glyphicon-chevron-down (not (= "menu" nav-active)), :glyphicon-chevron-up (= "menu" nav-active)})) :name "menu"))

(defelem item [{:keys [name]} _] (let [lc-name (string/lower-case name)] (li :class (cell= {:active (= location lc-name)}) (a :href (str "/" lc-name ".html") name))))

(defelem home-item [_ _] (li :class (cell= {:active (or (= location nil) (= location "index"))}) (a :href "/index.html" "Home")))

(defelem sicp-item [_ _] (li :class (cell= {:active (= location "book")}) (a :href "/book/sicp/index.html" "SICP")))

(defelem fixed-offset [_ _] (div :style "height:50px"))

(defelem fixed-nav [_ kids] (fixed-bar (header2 (nav-menu-button) kids (brand "Λaron Niskin")) (menu2 (home-item) (sicp-item) (item :name "CV"))))

(defelem fixed [attr kids] (div (fixed-nav attr kids) (fixed-offset)))

(defelem static [attr kids] (static-bar (header2 (nav-menu-button) kids (brand "Λaron Niskin")) (menu2 (home-item) (sicp-item) (item :name "CV"))))
