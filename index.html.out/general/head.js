// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.head');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.head.bootstrap = (function() { 
var general$head$bootstrap__delegate = function (args__8262__auto__){
var vec__14859 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(1),null);
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css"));
};
var general$head$bootstrap = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__14860__i = 0, G__14860__a = new Array(arguments.length -  0);
while (G__14860__i < G__14860__a.length) {G__14860__a[G__14860__i] = arguments[G__14860__i + 0]; ++G__14860__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__14860__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__8262__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__14861){
var args__8262__auto__ = cljs.core.seq(arglist__14861);
return general$head$bootstrap__delegate(args__8262__auto__);
});
general$head$bootstrap.cljs$core$IFn$_invoke$arity$variadic = general$head$bootstrap__delegate;
return general$head$bootstrap;
})()
;
/**
 * @param {...*} var_args
 */
general.head.viewport = (function() { 
var general$head$viewport__delegate = function (args__8262__auto__){
var vec__14863 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,(1),null);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"));
};
var general$head$viewport = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__14864__i = 0, G__14864__a = new Array(arguments.length -  0);
while (G__14864__i < G__14864__a.length) {G__14864__a[G__14864__i] = arguments[G__14864__i + 0]; ++G__14864__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__14864__a,0);
} 
return general$head$viewport__delegate.call(this,args__8262__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__14865){
var args__8262__auto__ = cljs.core.seq(arglist__14865);
return general$head$viewport__delegate(args__8262__auto__);
});
general$head$viewport.cljs$core$IFn$_invoke$arity$variadic = general$head$viewport__delegate;
return general$head$viewport;
})()
;
/**
 * @param {...*} var_args
 */
general.head.mathjax = (function() { 
var general$head$mathjax__delegate = function (args__8262__auto__){
var vec__14867 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML") : tailrecursion.hoplon.script.call(null,cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"));
};
var general$head$mathjax = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__14868__i = 0, G__14868__a = new Array(arguments.length -  0);
while (G__14868__i < G__14868__a.length) {G__14868__a[G__14868__i] = arguments[G__14868__i + 0]; ++G__14868__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__14868__a,0);
} 
return general$head$mathjax__delegate.call(this,args__8262__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__14869){
var args__8262__auto__ = cljs.core.seq(arglist__14869);
return general$head$mathjax__delegate(args__8262__auto__);
});
general$head$mathjax.cljs$core$IFn$_invoke$arity$variadic = general$head$mathjax__delegate;
return general$head$mathjax;
})()
;
/**
 * @param {...*} var_args
 */
general.head.google_analytics = (function() { 
var general$head$google_analytics__delegate = function (args__8262__auto__){
var vec__14871 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m))(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga ('create','UA-67291006-1','auto'); ga ('send','pageview');") : tailrecursion.hoplon.script.call(null,"(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m))(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga ('create','UA-67291006-1','auto'); ga ('send','pageview');"));
};
var general$head$google_analytics = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__14872__i = 0, G__14872__a = new Array(arguments.length -  0);
while (G__14872__i < G__14872__a.length) {G__14872__a[G__14872__i] = arguments[G__14872__i + 0]; ++G__14872__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__14872__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__8262__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__14873){
var args__8262__auto__ = cljs.core.seq(arglist__14873);
return general$head$google_analytics__delegate(args__8262__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;
