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
var vec__160952 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160952,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160952,(1),null);
return ui.style.jumbotron.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__160953 = cljs.core.constant$keyword$class;
var G__160954 = "col-lg-12 col-md-12 col-sm-12";
var G__160955 = (function (){var G__160957 = "Tutoring";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1(G__160957) : tailrecursion.hoplon.h1.call(null,G__160957));
})();
var G__160956 = (function (){var G__160958 = "Need a tagline...";
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__160958) : tailrecursion.hoplon.p.call(null,G__160958));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__160953,G__160954,G__160955,G__160956) : tailrecursion.hoplon.div.call(null,G__160953,G__160954,G__160955,G__160956));
})()], 0))], 0));
};
var content$home$top$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160959__i = 0, G__160959__a = new Array(arguments.length -  0);
while (G__160959__i < G__160959__a.length) {G__160959__a[G__160959__i] = arguments[G__160959__i + 0]; ++G__160959__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160959__a,0);
} 
return content$home$top$content__delegate.call(this,args__10403__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__160960){
var args__10403__auto__ = cljs.core.seq(arglist__160960);
return content$home$top$content__delegate(args__10403__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;
