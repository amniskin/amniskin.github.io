// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.fiu');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.fiu.content = (function() { 
var content$home$fiu$content__delegate = function (args__5784__auto__){
var vec__28979 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28979,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28979,(1),null);
return ui.style.background_section.call(null,new cljs.core.Keyword(null,"url","url",276297046),"img/FIU_Lib.jpg","FIU friendly!");
};
var content$home$fiu$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28980__i = 0, G__28980__a = new Array(arguments.length -  0);
while (G__28980__i < G__28980__a.length) {G__28980__a[G__28980__i] = arguments[G__28980__i + 0]; ++G__28980__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28980__a,0);
} 
return content$home$fiu$content__delegate.call(this,args__5784__auto__);};
content$home$fiu$content.cljs$lang$maxFixedArity = 0;
content$home$fiu$content.cljs$lang$applyTo = (function (arglist__28981){
var args__5784__auto__ = cljs.core.seq(arglist__28981);
return content$home$fiu$content__delegate(args__5784__auto__);
});
content$home$fiu$content.cljs$core$IFn$_invoke$arity$variadic = content$home$fiu$content__delegate;
return content$home$fiu$content;
})()
;

//# sourceMappingURL=fiu.js.map