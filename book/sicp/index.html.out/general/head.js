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
var vec__355718 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355718,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355718,(1),null);
return (tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css") : tailrecursion.hoplon.link.call(null,cljs.core.cst$kw$REL,"stylesheet",cljs.core.cst$kw$href,"/css/bootstrap.css",cljs.core.cst$kw$type,"text/css"));
};
var general$head$bootstrap = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__355719__i = 0, G__355719__a = new Array(arguments.length -  0);
while (G__355719__i < G__355719__a.length) {G__355719__a[G__355719__i] = arguments[G__355719__i + 0]; ++G__355719__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__355719__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__8262__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__355720){
var args__8262__auto__ = cljs.core.seq(arglist__355720);
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
var vec__355722 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355722,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355722,(1),null);
return (tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1") : tailrecursion.hoplon.html_meta.call(null,cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"));
};
var general$head$viewport = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__355723__i = 0, G__355723__a = new Array(arguments.length -  0);
while (G__355723__i < G__355723__a.length) {G__355723__a[G__355723__i] = arguments[G__355723__i + 0]; ++G__355723__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__355723__a,0);
} 
return general$head$viewport__delegate.call(this,args__8262__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__355724){
var args__8262__auto__ = cljs.core.seq(arglist__355724);
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
var vec__355726 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355726,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355726,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML") : tailrecursion.hoplon.script.call(null,cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"));
};
var general$head$mathjax = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__355727__i = 0, G__355727__a = new Array(arguments.length -  0);
while (G__355727__i < G__355727__a.length) {G__355727__a[G__355727__i] = arguments[G__355727__i + 0]; ++G__355727__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__355727__a,0);
} 
return general$head$mathjax__delegate.call(this,args__8262__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__355728){
var args__8262__auto__ = cljs.core.seq(arglist__355728);
return general$head$mathjax__delegate(args__8262__auto__);
});
general$head$mathjax.cljs$core$IFn$_invoke$arity$variadic = general$head$mathjax__delegate;
return general$head$mathjax;
})()
;
general.head.google_analytics_text = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n  ga ('create', 'UA-67291006-1', 'auto');\n  ga ('send', 'pageview');";
/**
 * @param {...*} var_args
 */
general.head.google_analytics = (function() { 
var general$head$google_analytics__delegate = function (args__8262__auto__){
var vec__355730 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355730,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__355730,(1),null);
return (tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.script.cljs$core$IFn$_invoke$arity$1(general.head.google_analytics_text) : tailrecursion.hoplon.script.call(null,general.head.google_analytics_text));
};
var general$head$google_analytics = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__355731__i = 0, G__355731__a = new Array(arguments.length -  0);
while (G__355731__i < G__355731__a.length) {G__355731__a[G__355731__i] = arguments[G__355731__i + 0]; ++G__355731__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__355731__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__8262__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__355732){
var args__8262__auto__ = cljs.core.seq(arglist__355732);
return general$head$google_analytics__delegate(args__8262__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;
