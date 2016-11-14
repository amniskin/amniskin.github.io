// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.head');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.head.bootstrap = (function() { 
var general$head$bootstrap__delegate = function (args__8082__auto__){
var vec__10191 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(1),null);
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css"));
};
var general$head$bootstrap = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10192__i = 0, G__10192__a = new Array(arguments.length -  0);
while (G__10192__i < G__10192__a.length) {G__10192__a[G__10192__i] = arguments[G__10192__i + 0]; ++G__10192__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10192__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__8082__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__10193){
var args__8082__auto__ = cljs.core.seq(arglist__10193);
return general$head$bootstrap__delegate(args__8082__auto__);
});
general$head$bootstrap.cljs$core$IFn$_invoke$arity$variadic = general$head$bootstrap__delegate;
return general$head$bootstrap;
})()
;
/**
 * @param {...*} var_args
 */
general.head.viewport = (function() { 
var general$head$viewport__delegate = function (args__8082__auto__){
var vec__10195 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10195,(1),null);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"));
};
var general$head$viewport = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10196__i = 0, G__10196__a = new Array(arguments.length -  0);
while (G__10196__i < G__10196__a.length) {G__10196__a[G__10196__i] = arguments[G__10196__i + 0]; ++G__10196__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10196__a,0);
} 
return general$head$viewport__delegate.call(this,args__8082__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__10197){
var args__8082__auto__ = cljs.core.seq(arglist__10197);
return general$head$viewport__delegate(args__8082__auto__);
});
general$head$viewport.cljs$core$IFn$_invoke$arity$variadic = general$head$viewport__delegate;
return general$head$viewport;
})()
;
/**
 * @param {...*} var_args
 */
general.head.mathjax = (function() { 
var general$head$mathjax__delegate = function (args__8082__auto__){
var vec__10199 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML") : tailrecursion.hoplon.script.call(null,cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"));
};
var general$head$mathjax = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10200__i = 0, G__10200__a = new Array(arguments.length -  0);
while (G__10200__i < G__10200__a.length) {G__10200__a[G__10200__i] = arguments[G__10200__i + 0]; ++G__10200__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10200__a,0);
} 
return general$head$mathjax__delegate.call(this,args__8082__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__10201){
var args__8082__auto__ = cljs.core.seq(arglist__10201);
return general$head$mathjax__delegate(args__8082__auto__);
});
general$head$mathjax.cljs$core$IFn$_invoke$arity$variadic = general$head$mathjax__delegate;
return general$head$mathjax;
})()
;
general.head.google_analytics_text = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga('create','UA-67291006-1','auto');\n  ga('send','pageview');";
/**
 * @param {...*} var_args
 */
general.head.google_analytics = (function() { 
var general$head$google_analytics__delegate = function (args__8082__auto__){
var vec__10203 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10203,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10203,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1(general.head.google_analytics_text) : tailrecursion.hoplon.script.call(null,general.head.google_analytics_text));
};
var general$head$google_analytics = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10204__i = 0, G__10204__a = new Array(arguments.length -  0);
while (G__10204__i < G__10204__a.length) {G__10204__a[G__10204__i] = arguments[G__10204__i + 0]; ++G__10204__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10204__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__8082__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__10205){
var args__8082__auto__ = cljs.core.seq(arglist__10205);
return general$head$google_analytics__delegate(args__8082__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;
