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
var vec__224061 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224061,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224061,(1),null);
var G__224065 = cljs.core.cst$kw$class;
var G__224066 = "col-sm-12";
var G__224067 = (function (){var G__224068 = cljs.core.cst$kw$style;
var G__224069 = "text-align:center;";
var G__224070 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__224068,G__224069,G__224070) : tailrecursion.hoplon.div.call(null,G__224068,G__224069,G__224070));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__224065,G__224066,G__224067) : tailrecursion.hoplon.div.call(null,G__224065,G__224066,G__224067));
};
var general$footer$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224071__i = 0, G__224071__a = new Array(arguments.length -  0);
while (G__224071__i < G__224071__a.length) {G__224071__a[G__224071__i] = arguments[G__224071__i + 0]; ++G__224071__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224071__a,0);
} 
return general$footer$content__delegate.call(this,args__8262__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__224072){
var args__8262__auto__ = cljs.core.seq(arglist__224072);
return general$footer$content__delegate(args__8262__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
