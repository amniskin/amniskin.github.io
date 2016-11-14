// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('content.home.um');
goog.require('cljs.core');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.um.content = (function() { 
var content$home$um$content__delegate = function (args__8082__auto__){
var vec__9815 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,(1),null);
return general.sections.fixed_background_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,"/img/um.jpg","Group sessions at UM"], 0));
};
var content$home$um$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9816__i = 0, G__9816__a = new Array(arguments.length -  0);
while (G__9816__i < G__9816__a.length) {G__9816__a[G__9816__i] = arguments[G__9816__i + 0]; ++G__9816__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9816__a,0);
} 
return content$home$um$content__delegate.call(this,args__8082__auto__);};
content$home$um$content.cljs$lang$maxFixedArity = 0;
content$home$um$content.cljs$lang$applyTo = (function (arglist__9817){
var args__8082__auto__ = cljs.core.seq(arglist__9817);
return content$home$um$content__delegate(args__8082__auto__);
});
content$home$um$content.cljs$core$IFn$_invoke$arity$variadic = content$home$um$content__delegate;
return content$home$um$content;
})()
;
