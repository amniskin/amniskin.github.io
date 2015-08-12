(ns ui.style (:require [ui.info :as info] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defc= location info/location)

(def bg-color "#5CBEFF")

(defelem page [{:keys [name]} kids] (apply (div :toggle (cell= (= info/location name)) :scroll-to (cell= (= info/scroll-location name))) kids))

(defelem sidebar [attr kids] (apply (div :class "col-md-4 col-sm-4 hidden-xs") attr kids))

(defelem divider [attr kids] (apply (div :class "hidden-xs" :style "height: 100px") attr kids))

(defelem content-with-sidebar [attr kids] (apply (div :class "col-md-8 col-sm-8 col-xs-12" :style "padding-right-5%; padding-bottom-5%;") attr kids))

(defelem container [attr kids] (apply (div :class "container") attr kids))

(defelem glyph-list-black [_ _] (span :class "glyphicon glyphicon--list-alt" :style "color:black;"))

(defelem jumbotron [attr kids] (apply (div :class "jumbotron" :style "background-color: inherit;") attr kids))

(defelem background [{:keys [url]} kids] (div :style (str "display:block; background-image:url('" url "'); background-size:length:auto 100vh; background-repeat: no-repeat;background-attachment:fixed;") :on-screen* (fn* [p1__4589# p2__4590#] (set! (.-backgroundPosition (.-style p1__4589#)) (str "50% +" (* 1000 p2__4590#) "+ %"))) kids))

(defelem background-section [{:keys [url]} kids] (background :url url (container (div :style "padding-top:20%;padding-bottom:20%;" :class "col-sm-6 col-sm-offset-3 text-center" (h2 :style "color: #ffffff; padding:20px;background-color:rgba(5,5,5,.8)" kids)))))

(defelem row [attr kids] (apply (div :class "row") attr kids))

(defelem well [attr kids] (apply (div :class "well") attr kids))

(defelem content-bubble [attr kids] (div :class "col-md-4 col-sm-4 col-xs-12" (well attr kids)))

(defelem img-content-bubble [{:keys [src]} kids] (content-bubble (img :src src :class "img-responsive") (div :style "padding-top:5;" kids)))
