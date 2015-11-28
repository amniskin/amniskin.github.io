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
var vec__10358 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10358,(0),null);
var map__10359__$1 = ((((!((map__10359 == null)))?((((map__10359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10359):map__10359);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10359__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10358,(1),null);
var G__10361 = cljs.core.cst$kw$style;
var G__10362 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__10363 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__10364 = ((function (G__10361,G__10362,G__10363,vec__10358,map__10359,map__10359__$1,url,kids){
return (function (p1__5415_SHARP_,p2__5416_SHARP_){
return p1__5415_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__5416_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__10361,G__10362,G__10363,vec__10358,map__10359,map__10359__$1,url,kids))
;
var G__10365 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__10361,G__10362,G__10363,G__10364,G__10365) : tailrecursion.hoplon.div.call(null,G__10361,G__10362,G__10363,G__10364,G__10365));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10366__i = 0, G__10366__a = new Array(arguments.length -  0);
while (G__10366__i < G__10366__a.length) {G__10366__a[G__10366__i] = arguments[G__10366__i + 0]; ++G__10366__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10366__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__10367){
var args__8262__auto__ = cljs.core.seq(arglist__10367);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
