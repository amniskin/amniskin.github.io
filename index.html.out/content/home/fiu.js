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
var content$home$fiu$content__delegate = function (args__8262__auto__){
var vec__11117 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(1),null);
return general.sections.fixed_background_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,"/img/FIU_Lib.jpg","FIU friendly!"], 0));
};
var content$home$fiu$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__11118__i = 0, G__11118__a = new Array(arguments.length -  0);
while (G__11118__i < G__11118__a.length) {G__11118__a[G__11118__i] = arguments[G__11118__i + 0]; ++G__11118__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__11118__a,0);
} 
return content$home$fiu$content__delegate.call(this,args__8262__auto__);};
content$home$fiu$content.cljs$lang$maxFixedArity = 0;
content$home$fiu$content.cljs$lang$applyTo = (function (arglist__11119){
var args__8262__auto__ = cljs.core.seq(arglist__11119);
return content$home$fiu$content__delegate(args__8262__auto__);
});
content$home$fiu$content.cljs$core$IFn$_invoke$arity$variadic = content$home$fiu$content__delegate;
return content$home$fiu$content;
})()
;
