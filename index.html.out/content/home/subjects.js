// Compiled by ClojureScript 1.7.48 {}
goog.provide('content.home.subjects');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.subjects.content = (function() { 
var content$home$subjects$content__delegate = function (args__6627__auto__){
var vec__14793 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14793,(0),null);
var kids = cljs.core.nth.call(null,vec__14793,(1),null);
return general.bootstrap.container.call(null,general.bootstrap.row.call(null,general.sections.img_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"/img/highlights/my-math-icon.png",tailrecursion.hoplon.h3.call(null,"Mathematics"),tailrecursion.hoplon.p.call(null,"Not only did I major in Mathematics for my undergrad, but I\n           continue my studies to this day. Whether you're struggling with some\n           Abstract Algebra or you need some clarification with High School\n           Algebra, I can help.")),general.sections.img_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"/img/highlights/my-chem-icon.png",tailrecursion.hoplon.h3.call(null,"Chemistry"),tailrecursion.hoplon.p.call(null,"To understand Chemistry is to understand the atom, which is what\n           initially drew me to the subject. In fact, in 2010, Chemistry 1045\n           was the first subject I tutored professionally. From CHM 1045 to\n           Organic Chemistry, I can help.")),general.sections.img_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"/img/highlights/my-physics-icon.png",tailrecursion.hoplon.h3.call(null,"Physics"),tailrecursion.hoplon.p.call(null,"The nature of our universe is no small subject, but I say, \"let's\n           get started!\" The fact that many phenomena in nature are\n           predictable via mathematical formalism excites me still. From PHY\n           1045 to Quantum Mechanics, I can help."))));
};
var content$home$subjects$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14794__i = 0, G__14794__a = new Array(arguments.length -  0);
while (G__14794__i < G__14794__a.length) {G__14794__a[G__14794__i] = arguments[G__14794__i + 0]; ++G__14794__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14794__a,0);
} 
return content$home$subjects$content__delegate.call(this,args__6627__auto__);};
content$home$subjects$content.cljs$lang$maxFixedArity = 0;
content$home$subjects$content.cljs$lang$applyTo = (function (arglist__14795){
var args__6627__auto__ = cljs.core.seq(arglist__14795);
return content$home$subjects$content__delegate(args__6627__auto__);
});
content$home$subjects$content.cljs$core$IFn$_invoke$arity$variadic = content$home$subjects$content__delegate;
return content$home$subjects$content;
})()
;

//# sourceMappingURL=subjects.js.map