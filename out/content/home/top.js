// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.top');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.top.content = (function() { 
var content$home$top$content__delegate = function (args__5784__auto__){
var vec__28973 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28973,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28973,(1),null);
return ui.style.jumbotron.call(null,ui.style.container.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-12 col-md-12 col-sm-12",tailrecursion.hoplon.h1.call(null,"Tutoring"),tailrecursion.hoplon.p.call(null,"Need a tagline..."))));
};
var content$home$top$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28974__i = 0, G__28974__a = new Array(arguments.length -  0);
while (G__28974__i < G__28974__a.length) {G__28974__a[G__28974__i] = arguments[G__28974__i + 0]; ++G__28974__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28974__a,0);
} 
return content$home$top$content__delegate.call(this,args__5784__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__28975){
var args__5784__auto__ = cljs.core.seq(arglist__28975);
return content$home$top$content__delegate(args__5784__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;

//# sourceMappingURL=top.js.map