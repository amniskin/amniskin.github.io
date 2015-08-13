// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.sicp.main');
goog.require('cljs.core');
goog.require('ui.footer');
goog.require('content.sicp.texts.ch1sect2');
goog.require('ui.navbar');
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
var vec__88896 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88896,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88896,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"sicp",ui.navbar.fixed(),ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.book_data.toc()], 0)),ui.style.content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.book_data.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.sicp.texts.about.content(),content.sicp.texts.ch1.content(),content.sicp.texts.ch1sect1.content(),content.sicp.texts.ch1sect2.content(),content.sicp.texts.ch1sect3.content(),content.sicp.texts.ch2.content(),content.sicp.texts.ch2sect1.content(),content.sicp.texts.ch2sect2.content(),ui.footer.content()], 0))], 0))], 0))], 0));
};
var content$sicp$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88897__i = 0, G__88897__a = new Array(arguments.length -  0);
while (G__88897__i < G__88897__a.length) {G__88897__a[G__88897__i] = arguments[G__88897__i + 0]; ++G__88897__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88897__a,0);
} 
return content$sicp$main$content__delegate.call(this,args__10403__auto__);};
content$sicp$main$content.cljs$lang$maxFixedArity = 0;
content$sicp$main$content.cljs$lang$applyTo = (function (arglist__88898){
var args__10403__auto__ = cljs.core.seq(arglist__88898);
return content$sicp$main$content__delegate(args__10403__auto__);
});
content$sicp$main$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$main$content__delegate;
return content$sicp$main$content;
})()
;
