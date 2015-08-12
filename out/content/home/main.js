// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.main');
goog.require('cljs.core');
goog.require('content.home.highlights');
goog.require('content.home.contact');
goog.require('content.home.um');
goog.require('ui.style');
goog.require('content.home.fiu');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('content.home.top');
goog.require('content.home.testimonials');
/**
 * @param {...*} var_args
 */
content.home.main.content = (function() { 
var content$home$main$content__delegate = function (args__10403__auto__){
var vec__160889 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160889,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160889,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"home",(function (){var G__160890 = cljs.core.constant$keyword$class;
var G__160891 = "fade-bg";
var G__160892 = content.home.top.content();
var G__160893 = ui.style.divider();
var G__160894 = content.home.highlights.content();
var G__160895 = ui.style.divider();
var G__160896 = content.home.fiu.content();
var G__160897 = ui.style.divider();
var G__160898 = content.home.testimonials.content();
var G__160899 = ui.style.divider();
var G__160900 = content.home.um.content();
var G__160901 = ui.style.divider();
var G__160902 = content.home.contact.content();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$13 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$13(G__160890,G__160891,G__160892,G__160893,G__160894,G__160895,G__160896,G__160897,G__160898,G__160899,G__160900,G__160901,G__160902) : tailrecursion.hoplon.div.call(null,G__160890,G__160891,G__160892,G__160893,G__160894,G__160895,G__160896,G__160897,G__160898,G__160899,G__160900,G__160901,G__160902));
})()], 0));
};
var content$home$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160903__i = 0, G__160903__a = new Array(arguments.length -  0);
while (G__160903__i < G__160903__a.length) {G__160903__a[G__160903__i] = arguments[G__160903__i + 0]; ++G__160903__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160903__a,0);
} 
return content$home$main$content__delegate.call(this,args__10403__auto__);};
content$home$main$content.cljs$lang$maxFixedArity = 0;
content$home$main$content.cljs$lang$applyTo = (function (arglist__160904){
var args__10403__auto__ = cljs.core.seq(arglist__160904);
return content$home$main$content__delegate(args__10403__auto__);
});
content$home$main$content.cljs$core$IFn$_invoke$arity$variadic = content$home$main$content__delegate;
return content$home$main$content;
})()
;
