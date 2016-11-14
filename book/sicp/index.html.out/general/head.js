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
var vec__293788 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293788,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293788,(1),null);
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css"));
};
var general$head$bootstrap = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__293789__i = 0, G__293789__a = new Array(arguments.length -  0);
while (G__293789__i < G__293789__a.length) {G__293789__a[G__293789__i] = arguments[G__293789__i + 0]; ++G__293789__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__293789__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__8082__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__293790){
var args__8082__auto__ = cljs.core.seq(arglist__293790);
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
var vec__293792 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293792,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293792,(1),null);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"));
};
var general$head$viewport = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__293793__i = 0, G__293793__a = new Array(arguments.length -  0);
while (G__293793__i < G__293793__a.length) {G__293793__a[G__293793__i] = arguments[G__293793__i + 0]; ++G__293793__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__293793__a,0);
} 
return general$head$viewport__delegate.call(this,args__8082__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__293794){
var args__8082__auto__ = cljs.core.seq(arglist__293794);
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
var vec__293796 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293796,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293796,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML") : tailrecursion.hoplon.script.call(null,cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"));
};
var general$head$mathjax = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__293797__i = 0, G__293797__a = new Array(arguments.length -  0);
while (G__293797__i < G__293797__a.length) {G__293797__a[G__293797__i] = arguments[G__293797__i + 0]; ++G__293797__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__293797__a,0);
} 
return general$head$mathjax__delegate.call(this,args__8082__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__293798){
var args__8082__auto__ = cljs.core.seq(arglist__293798);
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
var vec__293800 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293800,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293800,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1(general.head.google_analytics_text) : tailrecursion.hoplon.script.call(null,general.head.google_analytics_text));
};
var general$head$google_analytics = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__293801__i = 0, G__293801__a = new Array(arguments.length -  0);
while (G__293801__i < G__293801__a.length) {G__293801__a[G__293801__i] = arguments[G__293801__i + 0]; ++G__293801__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__293801__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__8082__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__293802){
var args__8082__auto__ = cljs.core.seq(arglist__293802);
return general$head$google_analytics__delegate(args__8082__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;
