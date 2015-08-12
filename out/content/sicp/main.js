// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.sicp.main');
goog.require('cljs.core');
goog.require('content.sicp.texts.ch1sect2');
goog.require('content.sicp.book_data');
goog.require('content.sicp.texts.about');
goog.require('ui.style');
goog.require('content.sicp.texts.ch1sect3');
goog.require('tailrecursion.hoplon');
goog.require('content.sicp.texts.ch2sect2');
goog.require('tailrecursion.javelin');
goog.require('content.sicp.texts.ch1sect1');
goog.require('content.sicp.texts.ch2');
goog.require('content.sicp.texts.ch1');
goog.require('content.sicp.texts.ch2sect1');
/**
 * @param {...*} var_args
 */
content.sicp.main.content = (function() { 
var content$sicp$main$content__delegate = function (args__10403__auto__){
var vec__86406 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86406,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86406,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"sicp",ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.book_data.toc()], 0)),ui.style.content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.book_data.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.texts.about.content(),content.sicp.texts.ch1.content(),content.sicp.texts.ch1sect1.content(),content.sicp.texts.ch1sect2.content(),content.sicp.texts.ch1sect3.content(),content.sicp.texts.ch2.content(),content.sicp.texts.ch2sect1.content(),content.sicp.texts.ch2sect2.content()], 0))], 0))], 0))], 0));
};
var content$sicp$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86407__i = 0, G__86407__a = new Array(arguments.length -  0);
while (G__86407__i < G__86407__a.length) {G__86407__a[G__86407__i] = arguments[G__86407__i + 0]; ++G__86407__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86407__a,0);
} 
return content$sicp$main$content__delegate.call(this,args__10403__auto__);};
content$sicp$main$content.cljs$lang$maxFixedArity = 0;
content$sicp$main$content.cljs$lang$applyTo = (function (arglist__86408){
var args__10403__auto__ = cljs.core.seq(arglist__86408);
return content$sicp$main$content__delegate(args__10403__auto__);
});
content$sicp$main$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$main$content__delegate;
return content$sicp$main$content;
})()
;
