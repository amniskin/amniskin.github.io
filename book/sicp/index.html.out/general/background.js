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
var vec__265955 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__265956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265955,(0),null);
var map__265956__$1 = ((((!((map__265956 == null)))?((((map__265956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265956):map__265956);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265956__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265955,(1),null);
var G__265958 = cljs.core.cst$kw$style;
var G__265959 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__265960 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__265961 = ((function (G__265958,G__265959,G__265960,vec__265955,map__265956,map__265956__$1,url,kids){
return (function (p1__5415_SHARP_,p2__5416_SHARP_){
return p1__5415_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__5416_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__265958,G__265959,G__265960,vec__265955,map__265956,map__265956__$1,url,kids))
;
var G__265962 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__265958,G__265959,G__265960,G__265961,G__265962) : tailrecursion.hoplon.div.call(null,G__265958,G__265959,G__265960,G__265961,G__265962));
};
var general$background$fixed_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265963__i = 0, G__265963__a = new Array(arguments.length -  0);
while (G__265963__i < G__265963__a.length) {G__265963__a[G__265963__i] = arguments[G__265963__i + 0]; ++G__265963__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265963__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8262__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__265964){
var args__8262__auto__ = cljs.core.seq(arglist__265964);
return general$background$fixed_img__delegate(args__8262__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
