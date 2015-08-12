// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.cv.main');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.cv.main.content = (function() { 
var content$cv$main$content__delegate = function (args__10403__auto__){
var vec__86300 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86300,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86300,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"cv",(function (){var G__86301 = cljs.core.constant$keyword$width;
var G__86302 = "100%";
var G__86303 = cljs.core.constant$keyword$height;
var G__86304 = tailrecursion.javelin.formula(((function (G__86301,G__86302,G__86303,vec__86300,_,___$1){
return (function (G__86309){
return (G__86309 - (50));
});})(G__86301,G__86302,G__86303,vec__86300,_,___$1))
).call(null,ui.info.screen_height);
var G__86305 = cljs.core.constant$keyword$src;
var G__86306 = "pdf/My_CV.pdf";
var G__86307 = cljs.core.constant$keyword$frameborder;
var G__86308 = "0";
return (tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8(G__86301,G__86302,G__86303,G__86304,G__86305,G__86306,G__86307,G__86308) : tailrecursion.hoplon.iframe.call(null,G__86301,G__86302,G__86303,G__86304,G__86305,G__86306,G__86307,G__86308));
})()], 0));
};
var content$cv$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86310__i = 0, G__86310__a = new Array(arguments.length -  0);
while (G__86310__i < G__86310__a.length) {G__86310__a[G__86310__i] = arguments[G__86310__i + 0]; ++G__86310__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86310__a,0);
} 
return content$cv$main$content__delegate.call(this,args__10403__auto__);};
content$cv$main$content.cljs$lang$maxFixedArity = 0;
content$cv$main$content.cljs$lang$applyTo = (function (arglist__86311){
var args__10403__auto__ = cljs.core.seq(arglist__86311);
return content$cv$main$content__delegate(args__10403__auto__);
});
content$cv$main$content.cljs$core$IFn$_invoke$arity$variadic = content$cv$main$content__delegate;
return content$cv$main$content;
})()
;
