// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.footer');
goog.require('cljs.core');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.footer.content = (function() { 
var general$footer$content__delegate = function (args__8262__auto__){
var vec__244515 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244515,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244515,(1),null);
var G__244519 = cljs.core.cst$kw$class;
var G__244520 = "col-sm-12";
var G__244521 = (function (){var G__244522 = cljs.core.cst$kw$style;
var G__244523 = "text-align:center;";
var G__244524 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__244522,G__244523,G__244524) : tailrecursion.hoplon.div.call(null,G__244522,G__244523,G__244524));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__244519,G__244520,G__244521) : tailrecursion.hoplon.div.call(null,G__244519,G__244520,G__244521));
};
var general$footer$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244525__i = 0, G__244525__a = new Array(arguments.length -  0);
while (G__244525__i < G__244525__a.length) {G__244525__a[G__244525__i] = arguments[G__244525__i + 0]; ++G__244525__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244525__a,0);
} 
return general$footer$content__delegate.call(this,args__8262__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__244526){
var args__8262__auto__ = cljs.core.seq(arglist__244526);
return general$footer$content__delegate(args__8262__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
