// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.footer.main');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.footer.main.content = (function() { 
var content$footer$main$content__delegate = function (args__10403__auto__){
var vec__161432 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161432,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161432,(1),null);
var G__161433 = cljs.core.constant$keyword$class;
var G__161434 = "col-sm-12";
var G__161435 = (function (){var G__161436 = cljs.core.constant$keyword$style;
var G__161437 = "text-align:center;";
var G__161438 = [cljs.core.str("\u00A9 "),cljs.core.str(ui.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__161436,G__161437,G__161438) : tailrecursion.hoplon.div.call(null,G__161436,G__161437,G__161438));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__161433,G__161434,G__161435) : tailrecursion.hoplon.div.call(null,G__161433,G__161434,G__161435));
};
var content$footer$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__161439__i = 0, G__161439__a = new Array(arguments.length -  0);
while (G__161439__i < G__161439__a.length) {G__161439__a[G__161439__i] = arguments[G__161439__i + 0]; ++G__161439__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__161439__a,0);
} 
return content$footer$main$content__delegate.call(this,args__10403__auto__);};
content$footer$main$content.cljs$lang$maxFixedArity = 0;
content$footer$main$content.cljs$lang$applyTo = (function (arglist__161440){
var args__10403__auto__ = cljs.core.seq(arglist__161440);
return content$footer$main$content__delegate(args__10403__auto__);
});
content$footer$main$content.cljs$core$IFn$_invoke$arity$variadic = content$footer$main$content__delegate;
return content$footer$main$content;
})()
;
