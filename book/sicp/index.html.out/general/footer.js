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
var vec__265719 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265719,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265719,(1),null);
var G__265723 = cljs.core.cst$kw$class;
var G__265724 = "col-sm-12";
var G__265725 = (function (){var G__265726 = cljs.core.cst$kw$style;
var G__265727 = "text-align:center;";
var G__265728 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__265726,G__265727,G__265728) : tailrecursion.hoplon.div.call(null,G__265726,G__265727,G__265728));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__265723,G__265724,G__265725) : tailrecursion.hoplon.div.call(null,G__265723,G__265724,G__265725));
};
var general$footer$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265729__i = 0, G__265729__a = new Array(arguments.length -  0);
while (G__265729__i < G__265729__a.length) {G__265729__a[G__265729__i] = arguments[G__265729__i + 0]; ++G__265729__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265729__a,0);
} 
return general$footer$content__delegate.call(this,args__8082__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__265730){
var args__8082__auto__ = cljs.core.seq(arglist__265730);
return general$footer$content__delegate(args__8082__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
