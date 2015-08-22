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
var vec__10350 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(0),null);
var map__10351__$1 = ((((!((map__10351 == null)))?((((map__10351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10351):map__10351);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10351__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(1),null);
var G__10353 = cljs.core.cst$kw$style;
var G__10354 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__10355 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__10356 = ((function (G__10353,G__10354,G__10355,vec__10350,map__10351,map__10351__$1,url,kids){
return (function (p1__3923_SHARP_,p2__3924_SHARP_){
return p1__3923_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__3924_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__10353,G__10354,G__10355,vec__10350,map__10351,map__10351__$1,url,kids))
;
var G__10357 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__10353,G__10354,G__10355,G__10356,G__10357) : tailrecursion.hoplon.div.call(null,G__10353,G__10354,G__10355,G__10356,G__10357));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10358__i = 0, G__10358__a = new Array(arguments.length -  0);
while (G__10358__i < G__10358__a.length) {G__10358__a[G__10358__i] = arguments[G__10358__i + 0]; ++G__10358__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10358__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__10359){
var args__8262__auto__ = cljs.core.seq(arglist__10359);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
