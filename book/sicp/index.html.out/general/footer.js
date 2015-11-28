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
var general$footer$content__delegate = function (args__8262__auto__){
var vec__265899 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265899,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265899,(1),null);
var G__265903 = cljs.core.cst$kw$class;
var G__265904 = "col-sm-12";
var G__265905 = (function (){var G__265906 = cljs.core.cst$kw$style;
var G__265907 = "text-align:center;";
var G__265908 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__265906,G__265907,G__265908) : tailrecursion.hoplon.div.call(null,G__265906,G__265907,G__265908));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__265903,G__265904,G__265905) : tailrecursion.hoplon.div.call(null,G__265903,G__265904,G__265905));
};
var general$footer$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265909__i = 0, G__265909__a = new Array(arguments.length -  0);
while (G__265909__i < G__265909__a.length) {G__265909__a[G__265909__i] = arguments[G__265909__i + 0]; ++G__265909__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265909__a,0);
} 
return general$footer$content__delegate.call(this,args__8262__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__265910){
var args__8262__auto__ = cljs.core.seq(arglist__265910);
return general$footer$content__delegate(args__8262__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
