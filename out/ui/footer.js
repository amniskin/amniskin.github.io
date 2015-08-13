// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.footer');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
ui.footer.content = (function() { 
var ui$footer$content__delegate = function (args__10403__auto__){
var vec__167446 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167446,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167446,(1),null);
var G__167447 = cljs.core.constant$keyword$class;
var G__167448 = "col-sm-12";
var G__167449 = (function (){var G__167450 = cljs.core.constant$keyword$style;
var G__167451 = "text-align:center;";
var G__167452 = [cljs.core.str("\u00A9 "),cljs.core.str(ui.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__167450,G__167451,G__167452) : tailrecursion.hoplon.div.call(null,G__167450,G__167451,G__167452));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__167447,G__167448,G__167449) : tailrecursion.hoplon.div.call(null,G__167447,G__167448,G__167449));
};
var ui$footer$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167453__i = 0, G__167453__a = new Array(arguments.length -  0);
while (G__167453__i < G__167453__a.length) {G__167453__a[G__167453__i] = arguments[G__167453__i + 0]; ++G__167453__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167453__a,0);
} 
return ui$footer$content__delegate.call(this,args__10403__auto__);};
ui$footer$content.cljs$lang$maxFixedArity = 0;
ui$footer$content.cljs$lang$applyTo = (function (arglist__167454){
var args__10403__auto__ = cljs.core.seq(arglist__167454);
return ui$footer$content__delegate(args__10403__auto__);
});
ui$footer$content.cljs$core$IFn$_invoke$arity$variadic = ui$footer$content__delegate;
return ui$footer$content;
})()
;
