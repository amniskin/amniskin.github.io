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
var vec__247441 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__247442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247441,(0),null);
var map__247442__$1 = ((((!((map__247442 == null)))?((((map__247442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__247442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__247442):map__247442);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__247442__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247441,(1),null);
var G__247444 = cljs.core.cst$kw$style;
var G__247445 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__247446 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__247447 = ((function (G__247444,G__247445,G__247446,vec__247441,map__247442,map__247442__$1,url,kids){
return (function (p1__2264_SHARP_,p2__2265_SHARP_){
return p1__2264_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__2265_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__247444,G__247445,G__247446,vec__247441,map__247442,map__247442__$1,url,kids))
;
var G__247448 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__247444,G__247445,G__247446,G__247447,G__247448) : tailrecursion.hoplon.div.call(null,G__247444,G__247445,G__247446,G__247447,G__247448));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247449__i = 0, G__247449__a = new Array(arguments.length -  0);
while (G__247449__i < G__247449__a.length) {G__247449__a[G__247449__i] = arguments[G__247449__i + 0]; ++G__247449__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247449__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__247450){
var args__8262__auto__ = cljs.core.seq(arglist__247450);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
