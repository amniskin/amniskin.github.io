// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.um');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.um.content = (function() { 
var content$home$um$content__delegate = function (args__10403__auto__){
var vec__160940 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160940,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160940,(1),null);
return ui.style.background_section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$url,"img/um.jpg","Group sessions at UM"], 0));
};
var content$home$um$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160941__i = 0, G__160941__a = new Array(arguments.length -  0);
while (G__160941__i < G__160941__a.length) {G__160941__a[G__160941__i] = arguments[G__160941__i + 0]; ++G__160941__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160941__a,0);
} 
return content$home$um$content__delegate.call(this,args__10403__auto__);};
content$home$um$content.cljs$lang$maxFixedArity = 0;
content$home$um$content.cljs$lang$applyTo = (function (arglist__160942){
var args__10403__auto__ = cljs.core.seq(arglist__160942);
return content$home$um$content__delegate(args__10403__auto__);
});
content$home$um$content.cljs$core$IFn$_invoke$arity$variadic = content$home$um$content__delegate;
return content$home$um$content;
})()
;
