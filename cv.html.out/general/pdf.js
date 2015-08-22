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
var general$pdf$viewer__delegate = function (args__8262__auto__){
var vec__9253 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9253,(0),null);
var map__9254__$1 = ((((!((map__9254 == null)))?((((map__9254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9254):map__9254);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9254__$1,cljs.core.cst$kw$src);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9253,(1),null);
var G__9258 = cljs.core.cst$kw$width;
var G__9259 = "100%";
var G__9260 = cljs.core.cst$kw$height;
var G__9261 = tailrecursion.javelin.formula(((function (G__9258,G__9259,G__9260,vec__9253,map__9254,map__9254__$1,src,_){
return (function (G__9267,G__9266){
return (G__9266 - G__9267);
});})(G__9258,G__9259,G__9260,vec__9253,map__9254,map__9254__$1,src,_))
).call(null,general.navbar.height,general.info.screen_height);
var G__9262 = cljs.core.cst$kw$src;
var G__9263 = src;
var G__9264 = cljs.core.cst$kw$frameborder;
var G__9265 = "0";
return (tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.iframe.cljs$core$IFn$_invoke$arity$8(G__9258,G__9259,G__9260,G__9261,G__9262,G__9263,G__9264,G__9265) : tailrecursion.hoplon.iframe.call(null,G__9258,G__9259,G__9260,G__9261,G__9262,G__9263,G__9264,G__9265));
};
var general$pdf$viewer = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9268__i = 0, G__9268__a = new Array(arguments.length -  0);
while (G__9268__i < G__9268__a.length) {G__9268__a[G__9268__i] = arguments[G__9268__i + 0]; ++G__9268__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9268__a,0);
} 
return general$pdf$viewer__delegate.call(this,args__8262__auto__);};
general$pdf$viewer.cljs$lang$maxFixedArity = 0;
general$pdf$viewer.cljs$lang$applyTo = (function (arglist__9269){
var args__8262__auto__ = cljs.core.seq(arglist__9269);
return general$pdf$viewer__delegate(args__8262__auto__);
});
general$pdf$viewer.cljs$core$IFn$_invoke$arity$variadic = general$pdf$viewer__delegate;
return general$pdf$viewer;
})()
;
