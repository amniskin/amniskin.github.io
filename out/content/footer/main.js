// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.footer.main');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.footer.main.content = (function() { 
var content$footer$main$content__delegate = function (args__10403__auto__){
var vec__161424 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161424,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161424,(1),null);
var G__161425 = cljs.core.constant$keyword$class;
var G__161426 = "col-sm-12";
var G__161427 = (function (){var G__161428 = cljs.core.constant$keyword$style;
var G__161429 = "text-align:center;";
var G__161430 = "Copyright \u00A9 Aaron Niskin. All rights reserved.";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__161428,G__161429,G__161430) : tailrecursion.hoplon.div.call(null,G__161428,G__161429,G__161430));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__161425,G__161426,G__161427) : tailrecursion.hoplon.div.call(null,G__161425,G__161426,G__161427));
};
var content$footer$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__161431__i = 0, G__161431__a = new Array(arguments.length -  0);
while (G__161431__i < G__161431__a.length) {G__161431__a[G__161431__i] = arguments[G__161431__i + 0]; ++G__161431__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__161431__a,0);
} 
return content$footer$main$content__delegate.call(this,args__10403__auto__);};
content$footer$main$content.cljs$lang$maxFixedArity = 0;
content$footer$main$content.cljs$lang$applyTo = (function (arglist__161432){
var args__10403__auto__ = cljs.core.seq(arglist__161432);
return content$footer$main$content__delegate(args__10403__auto__);
});
content$footer$main$content.cljs$core$IFn$_invoke$arity$variadic = content$footer$main$content__delegate;
return content$footer$main$content;
})()
;
