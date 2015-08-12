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
var vec__160956 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160956,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160956,(1),null);
return ui.style.jumbotron.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__160957 = cljs.core.constant$keyword$class;
var G__160958 = "col-lg-12 col-md-12 col-sm-12";
var G__160959 = (function (){var G__160961 = "Tutoring";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1(G__160961) : tailrecursion.hoplon.h1.call(null,G__160961));
})();
var G__160960 = (function (){var G__160962 = "Need a tagline...";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__160962) : tailrecursion.hoplon.p.call(null,G__160962));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__160957,G__160958,G__160959,G__160960) : tailrecursion.hoplon.div.call(null,G__160957,G__160958,G__160959,G__160960));
})()], 0))], 0));
};
var content$home$top$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160963__i = 0, G__160963__a = new Array(arguments.length -  0);
while (G__160963__i < G__160963__a.length) {G__160963__a[G__160963__i] = arguments[G__160963__i + 0]; ++G__160963__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160963__a,0);
} 
return content$home$top$content__delegate.call(this,args__10403__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__160964){
var args__10403__auto__ = cljs.core.seq(arglist__160964);
return content$home$top$content__delegate(args__10403__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;
