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
var vec__244571 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__244572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244571,(0),null);
var map__244572__$1 = ((((!((map__244572 == null)))?((((map__244572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__244572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__244572):map__244572);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244572__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244571,(1),null);
var G__244574 = cljs.core.cst$kw$style;
var G__244575 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__244576 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__244577 = ((function (G__244574,G__244575,G__244576,vec__244571,map__244572,map__244572__$1,url,kids){
return (function (p1__2099_SHARP_,p2__2100_SHARP_){
return p1__2099_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__2100_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__244574,G__244575,G__244576,vec__244571,map__244572,map__244572__$1,url,kids))
;
var G__244578 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__244574,G__244575,G__244576,G__244577,G__244578) : tailrecursion.hoplon.div.call(null,G__244574,G__244575,G__244576,G__244577,G__244578));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244579__i = 0, G__244579__a = new Array(arguments.length -  0);
while (G__244579__i < G__244579__a.length) {G__244579__a[G__244579__i] = arguments[G__244579__i + 0]; ++G__244579__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244579__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__244580){
var args__8262__auto__ = cljs.core.seq(arglist__244580);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
