(ns general.bootstrap (:require [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(defelem container [attr kids] (apply (div :class "container") attr kids))

(defelem jumbotron [attr kids] (apply (div :class "jumbotron") attr kids))

(defelem well [attr kids] (apply (div :class "well") attr kids))

(defelem row [attr kids] (apply (div :class "row") attr kids))

(defelem md4-xs- [attr kids] (apply (div :class "col-md-4 col-sm-4 hidden-xs") attr kids))

(defelem md4-xs12 [attr kids] (apply (div :class "col-md-4 col-sm-4 col-xs-12") attr kids))

(defelem md8-xs12 [attr kids] (apply (div :class "col-md-8 col-sm-8 col-xs-12") attr kids))

(defelem sm6-off3 [attr kids] (apply (div :class "col-sm-6 \n                     col-sm-offset-3 \n                     text-center") attr kids))
