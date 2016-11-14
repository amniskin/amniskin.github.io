// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.background');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.background.fixed_img = (function() { 
var general$background$fixed_img__delegate = function (args__8082__auto__){
var vec__265775 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__265776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265775,(0),null);
var map__265776__$1 = ((((!((map__265776 == null)))?((((map__265776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265776):map__265776);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265776__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265775,(1),null);
var G__265778 = cljs.core.cst$kw$style;
var G__265779 = [cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join('');
var G__265780 = cljs.core.cst$kw$on_DASH_screen_STAR_;
var G__265781 = ((function (G__265778,G__265779,G__265780,vec__265775,map__265776,map__265776__$1,url,kids){
return (function (p1__5391_SHARP_,p2__5392_SHARP_){
return p1__5391_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__5392_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__265778,G__265779,G__265780,vec__265775,map__265776,map__265776__$1,url,kids))
;
var G__265782 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__265778,G__265779,G__265780,G__265781,G__265782) : tailrecursion.hoplon.div.call(null,G__265778,G__265779,G__265780,G__265781,G__265782));
};
var general$background$fixed_img = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265783__i = 0, G__265783__a = new Array(arguments.length -  0);
while (G__265783__i < G__265783__a.length) {G__265783__a[G__265783__i] = arguments[G__265783__i + 0]; ++G__265783__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265783__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__8082__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__265784){
var args__8082__auto__ = cljs.core.seq(arglist__265784);
return general$background$fixed_img__delegate(args__8082__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;
