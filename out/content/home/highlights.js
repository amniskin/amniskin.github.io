// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.highlights');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.highlights.content = (function() { 
var content$home$highlights$content__delegate = function (args__5784__auto__){
var vec__28991 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28991,(0),null);
var kids = cljs.core.nth.call(null,vec__28991,(1),null);
return ui.style.container.call(null,ui.style.row.call(null,ui.style.img_content_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/highlights/my-math-icon.png",tailrecursion.hoplon.h3.call(null,"Mathematics"),tailrecursion.hoplon.p.call(null,"Not only did I major in Mathematics for my undergrad, but I\n           continue my studies to this day. Whether you're struggling with some\n           Abstract Algebra or you need some help with your High School Algebra\n           course, I can help.")),ui.style.img_content_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/highlights/my-chem-icon.png",tailrecursion.hoplon.h3.call(null,"Chemistry"),tailrecursion.hoplon.p.call(null,"To understand Chemistry is to understand the atom. That is what\n           initially drew me to the subject. In fact, in 2010, Chemistry 1045\n           was the first subject I tutored professionally. From CHM 1045 to\n           Organic Chemistry, I can help.")),ui.style.img_content_bubble.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/highlights/my-physics-icon.png",tailrecursion.hoplon.h3.call(null,"Physics"),tailrecursion.hoplon.p.call(null,"Tha nature of our universe is no small subject, but I say, \"let's\n           get started!\" The fact that many phenomena in nature are\n           predictable via mathematical formalism excites me still. From PHY\n           1045 to Quantum Mechanics, I can help."))));
};
var content$home$highlights$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28992__i = 0, G__28992__a = new Array(arguments.length -  0);
while (G__28992__i < G__28992__a.length) {G__28992__a[G__28992__i] = arguments[G__28992__i + 0]; ++G__28992__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28992__a,0);
} 
return content$home$highlights$content__delegate.call(this,args__5784__auto__);};
content$home$highlights$content.cljs$lang$maxFixedArity = 0;
content$home$highlights$content.cljs$lang$applyTo = (function (arglist__28993){
var args__5784__auto__ = cljs.core.seq(arglist__28993);
return content$home$highlights$content__delegate(args__5784__auto__);
});
content$home$highlights$content.cljs$core$IFn$_invoke$arity$variadic = content$home$highlights$content__delegate;
return content$home$highlights$content;
})()
;

//# sourceMappingURL=highlights.js.map