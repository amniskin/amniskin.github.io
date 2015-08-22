// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('content.home.top');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.top.content = (function() { 
var content$home$top$content__delegate = function (args__8262__auto__){
var vec__10292 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10292,(1),null);
var G__10297 = cljs.core.cst$kw$style;
var G__10298 = "margin-top: -50px; height: 100vh; display: flex; align-items: center;";
var G__10299 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__10300 = cljs.core.cst$kw$class;
var G__10301 = "col-lg-12 col-md-12 col-sm-12";
var G__10302 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"img/home/lightbulb.png",cljs.core.cst$kw$style,"display:block; \n                    margin-left:auto; \n                    margin-right:auto;") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,"img/home/lightbulb.png",cljs.core.cst$kw$style,"display:block; \n                    margin-left:auto; \n                    margin-right:auto;"));
var G__10303 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"text-align:center; font-family:'Lucida Console', Monaco, monospace;","Learn Simply") : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"text-align:center; font-family:'Lucida Console', Monaco, monospace;","Learn Simply"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__10300,G__10301,G__10302,G__10303) : tailrecursion.hoplon.div.call(null,G__10300,G__10301,G__10302,G__10303));
})()], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__10297,G__10298,G__10299) : tailrecursion.hoplon.div.call(null,G__10297,G__10298,G__10299));
};
var content$home$top$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10304__i = 0, G__10304__a = new Array(arguments.length -  0);
while (G__10304__i < G__10304__a.length) {G__10304__a[G__10304__i] = arguments[G__10304__i + 0]; ++G__10304__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10304__a,0);
} 
return content$home$top$content__delegate.call(this,args__8262__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__10305){
var args__8262__auto__ = cljs.core.seq(arglist__10305);
return content$home$top$content__delegate(args__8262__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;
