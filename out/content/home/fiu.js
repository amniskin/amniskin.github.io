// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.fiu');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.fiu.content = (function() { 
var content$home$fiu$content__delegate = function (args__10403__auto__){
var vec__165716 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165716,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165716,(1),null);
return ui.style.background_section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$url,"img/FIU_Lib.jpg","FIU friendly!"], 0));
};
var content$home$fiu$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__165717__i = 0, G__165717__a = new Array(arguments.length -  0);
while (G__165717__i < G__165717__a.length) {G__165717__a[G__165717__i] = arguments[G__165717__i + 0]; ++G__165717__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__165717__a,0);
} 
return content$home$fiu$content__delegate.call(this,args__10403__auto__);};
content$home$fiu$content.cljs$lang$maxFixedArity = 0;
content$home$fiu$content.cljs$lang$applyTo = (function (arglist__165718){
var args__10403__auto__ = cljs.core.seq(arglist__165718);
return content$home$fiu$content__delegate(args__10403__auto__);
});
content$home$fiu$content.cljs$core$IFn$_invoke$arity$variadic = content$home$fiu$content__delegate;
return content$home$fiu$content;
})()
;
