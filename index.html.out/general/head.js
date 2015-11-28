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
var vec__14849 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14849,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14849,(1),null);
return tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"REL","REL",1754926964),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"/css/bootstrap.css",new cljs.core.Keyword(null,"type","type",1174270348),"text/css");
};
var general$head$bootstrap = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14850__i = 0, G__14850__a = new Array(arguments.length -  0);
while (G__14850__i < G__14850__a.length) {G__14850__a[G__14850__i] = arguments[G__14850__i + 0]; ++G__14850__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14850__a,0);
} 
return general$head$bootstrap__delegate.call(this,args__6627__auto__);};
general$head$bootstrap.cljs$lang$maxFixedArity = 0;
general$head$bootstrap.cljs$lang$applyTo = (function (arglist__14851){
var args__6627__auto__ = cljs.core.seq(arglist__14851);
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
var vec__14853 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14853,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14853,(1),null);
return tailrecursion.hoplon.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1");
};
var general$head$viewport = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14854__i = 0, G__14854__a = new Array(arguments.length -  0);
while (G__14854__i < G__14854__a.length) {G__14854__a[G__14854__i] = arguments[G__14854__i + 0]; ++G__14854__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14854__a,0);
} 
return general$head$viewport__delegate.call(this,args__6627__auto__);};
general$head$viewport.cljs$lang$maxFixedArity = 0;
general$head$viewport.cljs$lang$applyTo = (function (arglist__14855){
var args__6627__auto__ = cljs.core.seq(arglist__14855);
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
var vec__14857 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14857,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14857,(1),null);
return tailrecursion.hoplon.script.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML");
};
var general$head$mathjax = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14858__i = 0, G__14858__a = new Array(arguments.length -  0);
while (G__14858__i < G__14858__a.length) {G__14858__a[G__14858__i] = arguments[G__14858__i + 0]; ++G__14858__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14858__a,0);
} 
return general$head$mathjax__delegate.call(this,args__6627__auto__);};
general$head$mathjax.cljs$lang$maxFixedArity = 0;
general$head$mathjax.cljs$lang$applyTo = (function (arglist__14859){
var args__6627__auto__ = cljs.core.seq(arglist__14859);
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
var vec__14861 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14861,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14861,(1),null);
return tailrecursion.hoplon.script.call(null,general.head.google_analytics_text);
};
var general$head$google_analytics = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14862__i = 0, G__14862__a = new Array(arguments.length -  0);
while (G__14862__i < G__14862__a.length) {G__14862__a[G__14862__i] = arguments[G__14862__i + 0]; ++G__14862__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14862__a,0);
} 
return general$head$google_analytics__delegate.call(this,args__6627__auto__);};
general$head$google_analytics.cljs$lang$maxFixedArity = 0;
general$head$google_analytics.cljs$lang$applyTo = (function (arglist__14863){
var args__6627__auto__ = cljs.core.seq(arglist__14863);
return general$head$google_analytics__delegate(args__6627__auto__);
});
general$head$google_analytics.cljs$core$IFn$_invoke$arity$variadic = general$head$google_analytics__delegate;
return general$head$google_analytics;
})()
;

//# sourceMappingURL=head.js.map