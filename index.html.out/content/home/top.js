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
var content$home$top$content__delegate = function (args__8082__auto__){
var vec__10120 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10120,(1),null);
var G__10125 = cljs.core.cst$kw$style;
var G__10126 = "margin-top: -50px; height: 100vh; display: flex; align-items: center;";
var G__10127 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__10128 = cljs.core.cst$kw$class;
var G__10129 = "col-lg-12 col-md-12 col-sm-12";
var G__10130 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$src,"img/home/lightbulb.png",cljs.core.cst$kw$style,"display:block; \n                    margin-left:auto; \n                    margin-right:auto;") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,"img/home/lightbulb.png",cljs.core.cst$kw$style,"display:block; \n                    margin-left:auto; \n                    margin-right:auto;"));
var G__10131 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"text-align:center; font-family:'Lucida Console', Monaco, monospace;","Learn Simply") : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"text-align:center; font-family:'Lucida Console', Monaco, monospace;","Learn Simply"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__10128,G__10129,G__10130,G__10131) : tailrecursion.hoplon.div.call(null,G__10128,G__10129,G__10130,G__10131));
})()], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__10125,G__10126,G__10127) : tailrecursion.hoplon.div.call(null,G__10125,G__10126,G__10127));
};
var content$home$top$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10132__i = 0, G__10132__a = new Array(arguments.length -  0);
while (G__10132__i < G__10132__a.length) {G__10132__a[G__10132__i] = arguments[G__10132__i + 0]; ++G__10132__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10132__a,0);
} 
return content$home$top$content__delegate.call(this,args__8082__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__10133){
var args__8082__auto__ = cljs.core.seq(arglist__10133);
return content$home$top$content__delegate(args__8082__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;
