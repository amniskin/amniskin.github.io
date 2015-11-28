// Compiled by ClojureScript 1.7.48 {}
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
var general$pdf$viewer__delegate = function (args__6627__auto__){
var vec__12805 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12806 = cljs.core.nth.call(null,vec__12805,(0),null);
var map__12806__$1 = ((((!((map__12806 == null)))?((((map__12806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12806):map__12806);
var src = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _ = cljs.core.nth.call(null,vec__12805,(1),null);
return tailrecursion.hoplon.iframe.call(null,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),tailrecursion.javelin.formula.call(null,((function (vec__12805,map__12806,map__12806__$1,src,_){
return (function (G__12809,G__12808){
return (G__12808 - G__12809);
});})(vec__12805,map__12806,map__12806__$1,src,_))
).call(null,general.navbar.height,general.info.screen_height),new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0");
};
var general$pdf$viewer = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12810__i = 0, G__12810__a = new Array(arguments.length -  0);
while (G__12810__i < G__12810__a.length) {G__12810__a[G__12810__i] = arguments[G__12810__i + 0]; ++G__12810__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12810__a,0);
} 
return general$pdf$viewer__delegate.call(this,args__6627__auto__);};
general$pdf$viewer.cljs$lang$maxFixedArity = 0;
general$pdf$viewer.cljs$lang$applyTo = (function (arglist__12811){
var args__6627__auto__ = cljs.core.seq(arglist__12811);
return general$pdf$viewer__delegate(args__6627__auto__);
});
general$pdf$viewer.cljs$core$IFn$_invoke$arity$variadic = general$pdf$viewer__delegate;
return general$pdf$viewer;
})()
;

//# sourceMappingURL=pdf.js.map