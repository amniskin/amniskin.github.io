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
var vec__10002 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002,(1),null);
var G__10006 = cljs.core.cst$kw$class;
var G__10007 = "col-sm-12";
var G__10008 = (function (){var G__10009 = cljs.core.cst$kw$style;
var G__10010 = "text-align:center;";
var G__10011 = [cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('');
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__10009,G__10010,G__10011) : tailrecursion.hoplon.div.call(null,G__10009,G__10010,G__10011));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__10006,G__10007,G__10008) : tailrecursion.hoplon.div.call(null,G__10006,G__10007,G__10008));
};
var general$footer$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10012__i = 0, G__10012__a = new Array(arguments.length -  0);
while (G__10012__i < G__10012__a.length) {G__10012__a[G__10012__i] = arguments[G__10012__i + 0]; ++G__10012__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10012__a,0);
} 
return general$footer$content__delegate.call(this,args__8262__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__10013){
var args__8262__auto__ = cljs.core.seq(arglist__10013);
return general$footer$content__delegate(args__8262__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;
