// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.main');
goog.require('cljs.core');
goog.require('content.home.subjects');
goog.require('ui.footer');
goog.require('content.home.highlights');
goog.require('content.home.contact');
goog.require('content.home.um');
goog.require('ui.navbar');
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
var vec__172773 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__172773,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__172773,(1),null);
return ui.style.page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"home",ui.navbar.fixed(),(function (){var G__172774 = cljs.core.constant$keyword$class;
var G__172775 = "fade-bg";
var G__172776 = content.home.top.content();
var G__172777 = content.home.subjects.content();
var G__172778 = ui.style.divider();
var G__172779 = content.home.fiu.content();
var G__172780 = ui.style.divider();
var G__172781 = content.home.testimonials.content();
var G__172782 = ui.style.divider();
var G__172783 = content.home.um.content();
var G__172784 = ui.style.divider();
var G__172785 = content.home.contact.content();
var G__172786 = ui.footer.content();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$13 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$13(G__172774,G__172775,G__172776,G__172777,G__172778,G__172779,G__172780,G__172781,G__172782,G__172783,G__172784,G__172785,G__172786) : tailrecursion.hoplon.div.call(null,G__172774,G__172775,G__172776,G__172777,G__172778,G__172779,G__172780,G__172781,G__172782,G__172783,G__172784,G__172785,G__172786));
})()], 0));
};
var content$home$main$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__172787__i = 0, G__172787__a = new Array(arguments.length -  0);
while (G__172787__i < G__172787__a.length) {G__172787__a[G__172787__i] = arguments[G__172787__i + 0]; ++G__172787__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__172787__a,0);
} 
return content$home$main$content__delegate.call(this,args__10403__auto__);};
content$home$main$content.cljs$lang$maxFixedArity = 0;
content$home$main$content.cljs$lang$applyTo = (function (arglist__172788){
var args__10403__auto__ = cljs.core.seq(arglist__172788);
return content$home$main$content__delegate(args__10403__auto__);
});
content$home$main$content.cljs$core$IFn$_invoke$arity$variadic = content$home$main$content__delegate;
return content$home$main$content;
})()
;
