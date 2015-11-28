// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.head');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.head.bootstrap = (function() { 
var general$head$bootstrap__delegate = function (args__6627__auto__){
var vec__86787 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__86787,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86787,(1),null);
return tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"REL","REL",1754926964),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"/css/bootstrap.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css");
};
var general$head$bootstrap = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86788__i = 0, G__86788__a = new Array(arguments.length -  0);
while (G__86788__i < G__86788__a.length) {G__86788__a[G__86788__i] = arguments[G__86788__i + 0]; ++G__86788__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86788__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__6627__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__86789){
var args__6627__auto__ = cljs.core.seq(arglist__86789);
return general$head$bootstrap__delegate(args__6627__auto__);
});
general$head$bootstrap.cljs$core$IFn$_invoke$arity$variadic = general$head$bootstrap__delegate;
return general$head$bootstrap;
})()
;
/**
 * @param {...*} var_args
 */
general.head.viewport = (function() { 
var general$head$viewport__delegate = function (args__6627__auto__){
var vec__86791 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__86791,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86791,(1),null);
return tailrecursion.hoplon.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1");
};
var general$head$viewport = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86792__i = 0, G__86792__a = new Array(arguments.length -  0);
while (G__86792__i < G__86792__a.length) {G__86792__a[G__86792__i] = arguments[G__86792__i + 0]; ++G__86792__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86792__a,0);
} 
return general$head$viewport__delegate.call(this,args__6627__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__86793){
var args__6627__auto__ = cljs.core.seq(arglist__86793);
return general$head$viewport__delegate(args__6627__auto__);
});
general$head$viewport.cljs$core$IFn$_invoke$arity$variadic = general$head$viewport__delegate;
return general$head$viewport;
})()
;
/**
 * @param {...*} var_args
 */
general.head.mathjax = (function() { 
var general$head$mathjax__delegate = function (args__6627__auto__){
var vec__86795 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__86795,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86795,(1),null);
return tailrecursion.hoplon.script.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML");
};
var general$head$mathjax = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86796__i = 0, G__86796__a = new Array(arguments.length -  0);
while (G__86796__i < G__86796__a.length) {G__86796__a[G__86796__i] = arguments[G__86796__i + 0]; ++G__86796__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86796__a,0);
} 
return general$head$mathjax__delegate.call(this,args__6627__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__86797){
var args__6627__auto__ = cljs.core.seq(arglist__86797);
return general$head$mathjax__delegate(args__6627__auto__);
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
var general$head$google_analytics__delegate = function (args__6627__auto__){
var vec__86799 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__86799,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86799,(1),null);
return tailrecursion.hoplon.script.call(null,general.head.google_analytics_text);
};
var general$head$google_analytics = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86800__i = 0, G__86800__a = new Array(arguments.length -  0);
while (G__86800__i < G__86800__a.length) {G__86800__a[G__86800__i] = arguments[G__86800__i + 0]; ++G__86800__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86800__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__6627__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__86801){
var args__6627__auto__ = cljs.core.seq(arglist__86801);
return general$head$google_analytics__delegate(args__6627__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;

//# sourceMappingURL=head.js.map