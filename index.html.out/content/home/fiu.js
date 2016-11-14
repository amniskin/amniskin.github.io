// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('content.home.fiu');
goog.require('cljs.core');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.fiu.content = (function() { 
var content$home$fiu$content__delegate = function (args__8082__auto__){
var vec__10949 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10949,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10949,(1),null);
return general.sections.fixed_background_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,"/img/FIU_Lib.jpg","FIU friendly!"], 0));
};
var content$home$fiu$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10950__i = 0, G__10950__a = new Array(arguments.length -  0);
while (G__10950__i < G__10950__a.length) {G__10950__a[G__10950__i] = arguments[G__10950__i + 0]; ++G__10950__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10950__a,0);
} 
return content$home$fiu$content__delegate.call(this,args__8082__auto__);};
content$home$fiu$content.cljs$lang$maxFixedArity = 0;
content$home$fiu$content.cljs$lang$applyTo = (function (arglist__10951){
var args__8082__auto__ = cljs.core.seq(arglist__10951);
return content$home$fiu$content__delegate(args__8082__auto__);
});
content$home$fiu$content.cljs$core$IFn$_invoke$arity$variadic = content$home$fiu$content__delegate;
return content$home$fiu$content;
})()
;
