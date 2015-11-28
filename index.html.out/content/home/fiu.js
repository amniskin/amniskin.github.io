// Compiled by ClojureScript 1.7.48 {}
goog.provide('content.home.fiu');
goog.require('cljs.core');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.fiu.content = (function() { 
var content$home$fiu$content__delegate = function (args__6627__auto__){
var vec__14867 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14867,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14867,(1),null);
return general.sections.fixed_background_img.call(null,new cljs.core.Keyword(null,"url","url",276297046),"/img/FIU_Lib.jpg","FIU friendly!");
};
var content$home$fiu$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14868__i = 0, G__14868__a = new Array(arguments.length -  0);
while (G__14868__i < G__14868__a.length) {G__14868__a[G__14868__i] = arguments[G__14868__i + 0]; ++G__14868__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14868__a,0);
} 
return content$home$fiu$content__delegate.call(this,args__6627__auto__);};
content$home$fiu$content.cljs$lang$maxFixedArity = 0;
content$home$fiu$content.cljs$lang$applyTo = (function (arglist__14869){
var args__6627__auto__ = cljs.core.seq(arglist__14869);
return content$home$fiu$content__delegate(args__6627__auto__);
});
content$home$fiu$content.cljs$core$IFn$_invoke$arity$variadic = content$home$fiu$content__delegate;
return content$home$fiu$content;
})()
;

//# sourceMappingURL=fiu.js.map