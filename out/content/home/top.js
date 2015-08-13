// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.top');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.top.content = (function() { 
var content$home$top$content__delegate = function (args__10403__auto__){
var vec__165696 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165696,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165696,(1),null);
var G__165697 = cljs.core.constant$keyword$style;
var G__165698 = "margin-top: -50px; height: 100vh; display: flex; align-items: center;";
var G__165699 = ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__165700 = cljs.core.constant$keyword$class;
var G__165701 = "col-lg-12 col-md-12 col-sm-12";
var G__165702 = (function (){var G__165704 = cljs.core.constant$keyword$src;
var G__165705 = "img/home/lightbulb.png";
var G__165706 = cljs.core.constant$keyword$style;
var G__165707 = "display:block; \n                    margin-left:auto; \n                    margin-right:auto;";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__165704,G__165705,G__165706,G__165707) : tailrecursion.hoplon.img.call(null,G__165704,G__165705,G__165706,G__165707));
})();
var G__165703 = (function (){var G__165708 = cljs.core.constant$keyword$style;
var G__165709 = "text-align:center; font-family:'Lucida Console', Monaco, monospace;";
var G__165710 = "Learn Simply";
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__165708,G__165709,G__165710) : tailrecursion.hoplon.h2.call(null,G__165708,G__165709,G__165710));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__165700,G__165701,G__165702,G__165703) : tailrecursion.hoplon.div.call(null,G__165700,G__165701,G__165702,G__165703));
})()], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__165697,G__165698,G__165699) : tailrecursion.hoplon.div.call(null,G__165697,G__165698,G__165699));
};
var content$home$top$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__165711__i = 0, G__165711__a = new Array(arguments.length -  0);
while (G__165711__i < G__165711__a.length) {G__165711__a[G__165711__i] = arguments[G__165711__i + 0]; ++G__165711__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__165711__a,0);
} 
return content$home$top$content__delegate.call(this,args__10403__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__165712){
var args__10403__auto__ = cljs.core.seq(arglist__165712);
return content$home$top$content__delegate(args__10403__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;
