// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.pdf');
goog.require('cljs.core');
goog.require('general.navbar');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.pdf.viewer = (function() { 
var general$pdf$viewer__delegate = function (args__8082__auto__){
var vec__9077 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(0),null);
var map__9078__$1 = ((((!((map__9078 == null)))?((((map__9078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9078):map__9078);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9078__$1,cljs.core.cst$kw$src);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077,(1),null);
var G__9082 = cljs.core.cst$kw$width;
var G__9083 = "100%";
var G__9084 = cljs.core.cst$kw$height;
var G__9085 = tailrecursion.javelin.formula(((function (G__9082,G__9083,G__9084,vec__9077,map__9078,map__9078__$1,src,_){
return (function (G__9091,G__9090){
return (G__9090 - G__9091);
});})(G__9082,G__9083,G__9084,vec__9077,map__9078,map__9078__$1,src,_))
).call(null,general.navbar.height,general.info.screen_height);
var G__9086 = cljs.core.cst$kw$src;
var G__9087 = src;
var G__9088 = cljs.core.cst$kw$frameborder;
var G__9089 = "0";
return (tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8(G__9082,G__9083,G__9084,G__9085,G__9086,G__9087,G__9088,G__9089) : tailrecursion.hoplon.iframe.call(null,G__9082,G__9083,G__9084,G__9085,G__9086,G__9087,G__9088,G__9089));
};
var general$pdf$viewer = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9092__i = 0, G__9092__a = new Array(arguments.length -  0);
while (G__9092__i < G__9092__a.length) {G__9092__a[G__9092__i] = arguments[G__9092__i + 0]; ++G__9092__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9092__a,0);
} 
return general$pdf$viewer__delegate.call(this,args__8082__auto__);};
general$pdf$viewer.cljs$lang$maxFixedArity = 0;
general$pdf$viewer.cljs$lang$applyTo = (function (arglist__9093){
var args__8082__auto__ = cljs.core.seq(arglist__9093);
return general$pdf$viewer__delegate(args__8082__auto__);
});
general$pdf$viewer.cljs$core$IFn$_invoke$arity$variadic = general$pdf$viewer__delegate;
return general$pdf$viewer;
})()
;
