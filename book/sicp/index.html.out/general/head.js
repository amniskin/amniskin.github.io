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
var vec__275454 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275454,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275454,(1),null);
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css"));
};
var general$head$bootstrap = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__275455__i = 0, G__275455__a = new Array(arguments.length -  0);
while (G__275455__i < G__275455__a.length) {G__275455__a[G__275455__i] = arguments[G__275455__i + 0]; ++G__275455__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__275455__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__8262__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__275456){
var args__8262__auto__ = cljs.core.seq(arglist__275456);
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
var vec__275458 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275458,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275458,(1),null);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"));
};
var general$head$viewport = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__275459__i = 0, G__275459__a = new Array(arguments.length -  0);
while (G__275459__i < G__275459__a.length) {G__275459__a[G__275459__i] = arguments[G__275459__i + 0]; ++G__275459__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__275459__a,0);
} 
return general$head$viewport__delegate.call(this,args__8262__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__275460){
var args__8262__auto__ = cljs.core.seq(arglist__275460);
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
var vec__275462 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275462,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275462,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML") : tailrecursion.hoplon.script.call(null,cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"));
};
var general$head$mathjax = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__275463__i = 0, G__275463__a = new Array(arguments.length -  0);
while (G__275463__i < G__275463__a.length) {G__275463__a[G__275463__i] = arguments[G__275463__i + 0]; ++G__275463__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__275463__a,0);
} 
return general$head$mathjax__delegate.call(this,args__8262__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__275464){
var args__8262__auto__ = cljs.core.seq(arglist__275464);
return general$head$mathjax__delegate(args__8262__auto__);
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
var general$head$google_analytics__delegate = function (args__8262__auto__){
var vec__275466 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275466,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__275466,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1(general.head.google_analytics_text) : tailrecursion.hoplon.script.call(null,general.head.google_analytics_text));
};
var general$head$google_analytics = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__275467__i = 0, G__275467__a = new Array(arguments.length -  0);
while (G__275467__i < G__275467__a.length) {G__275467__a[G__275467__i] = arguments[G__275467__i + 0]; ++G__275467__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__275467__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__8262__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__275468){
var args__8262__auto__ = cljs.core.seq(arglist__275468);
return general$head$google_analytics__delegate(args__8262__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;
