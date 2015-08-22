// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.background');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.background.fixed_img = (function() { 
var general$background$fixed_img__delegate = function (args__8262__auto__){
var vec__224117 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__224118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224117,(0),null);
var map__224118__$1 = ((((!((map__224118 == null)))?((((map__224118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__224118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__224118):map__224118);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__224118__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224117,(1),null);
var G__224120 = cljs.core.cst$kw$style;
var G__224121 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__224122 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__224123 = ((function (G__224120,G__224121,G__224122,vec__224117,map__224118,map__224118__$1,url,kids){
return (function (p1__3923_SHARP_,p2__3924_SHARP_){
return p1__3923_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__3924_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__224120,G__224121,G__224122,vec__224117,map__224118,map__224118__$1,url,kids))
;
var G__224124 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__224120,G__224121,G__224122,G__224123,G__224124) : tailrecursion.hoplon.div.call(null,G__224120,G__224121,G__224122,G__224123,G__224124));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224125__i = 0, G__224125__a = new Array(arguments.length -  0);
while (G__224125__i < G__224125__a.length) {G__224125__a[G__224125__i] = arguments[G__224125__i + 0]; ++G__224125__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224125__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__224126){
var args__8262__auto__ = cljs.core.seq(arglist__224126);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
