// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.footer');
goog.require('cljs.core');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.footer.content = (function() { 
var general$footer$content__delegate = function (args__8082__auto__){
var vec__9830 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9830,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9830,(1),null);
var G__9834 = cljs.core.cst$kw$class;
var G__9835 = "col-sm-12";
var G__9836 = (function (){var G__9837 = cljs.core.cst$kw$style;
var G__9838 = "text-align:center;";
var G__9839 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9837,G__9838,G__9839) : tailrecursion.hoplon.div.call(null,G__9837,G__9838,G__9839));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9834,G__9835,G__9836) : tailrecursion.hoplon.div.call(null,G__9834,G__9835,G__9836));
};
var general$footer$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9840__i = 0, G__9840__a = new Array(arguments.length -  0);
while (G__9840__i < G__9840__a.length) {G__9840__a[G__9840__i] = arguments[G__9840__i + 0]; ++G__9840__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9840__a,0);
} 
return general$footer$content__delegate.call(this,args__8082__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__9841){
var args__8082__auto__ = cljs.core.seq(arglist__9841);
return general$footer$content__delegate(args__8082__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
