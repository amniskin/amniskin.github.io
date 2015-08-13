// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.cv.main');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('ui.info');
goog.require('ui.navbar');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.cv.main.content = (function() { 
var content$cv$main$content__delegate = function (args__10403__auto__){
var vec__88790 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88790,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88790,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"cv",ui.navbar.fixed(),(function (){var G__88791 = cljs.core.constant$keyword$width;
var G__88792 = "100%";
var G__88793 = cljs.core.constant$keyword$height;
var G__88794 = tailrecursion.javelin.formula(((function (G__88791,G__88792,G__88793,vec__88790,_,___$1){
return (function (G__88799){
return (G__88799 - (50));
});})(G__88791,G__88792,G__88793,vec__88790,_,___$1))
).call(null,ui.info.screen_height);
var G__88795 = cljs.core.constant$keyword$src;
var G__88796 = "pdf/My_CV.pdf";
var G__88797 = cljs.core.constant$keyword$frameborder;
var G__88798 = "0";
return (tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8(G__88791,G__88792,G__88793,G__88794,G__88795,G__88796,G__88797,G__88798) : tailrecursion.hoplon.iframe.call(null,G__88791,G__88792,G__88793,G__88794,G__88795,G__88796,G__88797,G__88798));
})()], 0));
};
var content$cv$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88800__i = 0, G__88800__a = new Array(arguments.length -  0);
while (G__88800__i < G__88800__a.length) {G__88800__a[G__88800__i] = arguments[G__88800__i + 0]; ++G__88800__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88800__a,0);
} 
return content$cv$main$content__delegate.call(this,args__10403__auto__);};
content$cv$main$content.cljs$lang$maxFixedArity = 0;
content$cv$main$content.cljs$lang$applyTo = (function (arglist__88801){
var args__10403__auto__ = cljs.core.seq(arglist__88801);
return content$cv$main$content__delegate(args__10403__auto__);
});
content$cv$main$content.cljs$core$IFn$_invoke$arity$variadic = content$cv$main$content__delegate;
return content$cv$main$content;
})()
;
