// Compiled by ClojureScript 1.7.48 {}
goog.provide('content.home.top');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.top.content = (function() { 
var content$home$top$content__delegate = function (args__6627__auto__){
var vec__14799 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14799,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14799,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"margin-top: -50px; height: 100vh; display: flex; align-items: center;",general.bootstrap.container.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-12 col-md-12 col-sm-12",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/home/lightbulb.png",new cljs.core.Keyword(null,"style","style",-496642736),"display:block; \n                    margin-left:auto; \n                    margin-right:auto;"),tailrecursion.hoplon.h2.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"text-align:center; font-family:'Lucida Console', Monaco, monospace;","Learn Simply"))));
};
var content$home$top$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14800__i = 0, G__14800__a = new Array(arguments.length -  0);
while (G__14800__i < G__14800__a.length) {G__14800__a[G__14800__i] = arguments[G__14800__i + 0]; ++G__14800__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14800__a,0);
} 
return content$home$top$content__delegate.call(this,args__6627__auto__);};
content$home$top$content.cljs$lang$maxFixedArity = 0;
content$home$top$content.cljs$lang$applyTo = (function (arglist__14801){
var args__6627__auto__ = cljs.core.seq(arglist__14801);
return content$home$top$content__delegate(args__6627__auto__);
});
content$home$top$content.cljs$core$IFn$_invoke$arity$variadic = content$home$top$content__delegate;
return content$home$top$content;
})()
;

//# sourceMappingURL=top.js.map