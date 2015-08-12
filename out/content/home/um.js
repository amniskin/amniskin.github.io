// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.um');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.um.content = (function() { 
var content$home$um$content__delegate = function (args__5784__auto__){
var vec__28967 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28967,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28967,(1),null);
return ui.style.background_section.call(null,new cljs.core.Keyword(null,"url","url",276297046),"img/um.jpg","Group sessions at UM");
};
var content$home$um$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28968__i = 0, G__28968__a = new Array(arguments.length -  0);
while (G__28968__i < G__28968__a.length) {G__28968__a[G__28968__i] = arguments[G__28968__i + 0]; ++G__28968__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28968__a,0);
} 
return content$home$um$content__delegate.call(this,args__5784__auto__);};
content$home$um$content.cljs$lang$maxFixedArity = 0;
content$home$um$content.cljs$lang$applyTo = (function (arglist__28969){
var args__5784__auto__ = cljs.core.seq(arglist__28969);
return content$home$um$content__delegate(args__5784__auto__);
});
content$home$um$content.cljs$core$IFn$_invoke$arity$variadic = content$home$um$content__delegate;
return content$home$um$content;
})()
;

//# sourceMappingURL=um.js.map