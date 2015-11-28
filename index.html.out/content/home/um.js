// Compiled by ClojureScript 1.7.48 {}
goog.provide('content.home.um');
goog.require('cljs.core');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.um.content = (function() { 
var content$home$um$content__delegate = function (args__6627__auto__){
var vec__14613 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14613,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14613,(1),null);
return general.sections.fixed_background_img.call(null,new cljs.core.Keyword(null,"url","url",276297046),"/img/um.jpg","Group sessions at UM");
};
var content$home$um$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14614__i = 0, G__14614__a = new Array(arguments.length -  0);
while (G__14614__i < G__14614__a.length) {G__14614__a[G__14614__i] = arguments[G__14614__i + 0]; ++G__14614__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14614__a,0);
} 
return content$home$um$content__delegate.call(this,args__6627__auto__);};
content$home$um$content.cljs$lang$maxFixedArity = 0;
content$home$um$content.cljs$lang$applyTo = (function (arglist__14615){
var args__6627__auto__ = cljs.core.seq(arglist__14615);
return content$home$um$content__delegate(args__6627__auto__);
});
content$home$um$content.cljs$core$IFn$_invoke$arity$variadic = content$home$um$content__delegate;
return content$home$um$content;
})()
;

//# sourceMappingURL=um.js.map