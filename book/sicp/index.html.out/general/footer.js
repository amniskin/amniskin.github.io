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
var vec__247385 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247385,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247385,(1),null);
var G__247389 = cljs.core.cst$kw$class;
var G__247390 = "col-sm-12";
var G__247391 = (function (){var G__247392 = cljs.core.cst$kw$style;
var G__247393 = "text-align:center;";
var G__247394 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__247392,G__247393,G__247394) : tailrecursion.hoplon.div.call(null,G__247392,G__247393,G__247394));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__247389,G__247390,G__247391) : tailrecursion.hoplon.div.call(null,G__247389,G__247390,G__247391));
};
var general$footer$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247395__i = 0, G__247395__a = new Array(arguments.length -  0);
while (G__247395__i < G__247395__a.length) {G__247395__a[G__247395__i] = arguments[G__247395__i + 0]; ++G__247395__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247395__a,0);
} 
return general$footer$content__delegate.call(this,args__8262__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__247396){
var args__8262__auto__ = cljs.core.seq(arglist__247396);
return general$footer$content__delegate(args__8262__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
