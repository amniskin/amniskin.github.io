// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.main');
goog.require('cljs.core');
goog.require('content.home.highlights');
goog.require('content.home.contact');
goog.require('content.home.um');
goog.require('ui.style');
goog.require('content.home.fiu');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('content.home.top');
goog.require('content.home.testimonials');
/**
 * @param {...*} var_args
 */
content.home.main.content = (function() { 
var content$home$main$content__delegate = function (args__5784__auto__){
var vec__28941 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28941,(0),null);
var kids = cljs.core.nth.call(null,vec__28941,(1),null);
return ui.style.page.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"home",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"fade-bg",content.home.top.content.call(null),ui.style.divider.call(null),content.home.highlights.content.call(null),ui.style.divider.call(null),content.home.fiu.content.call(null),ui.style.divider.call(null),content.home.testimonials.content.call(null),ui.style.divider.call(null),content.home.um.content.call(null),ui.style.divider.call(null),content.home.contact.content.call(null)));
};
var content$home$main$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28942__i = 0, G__28942__a = new Array(arguments.length -  0);
while (G__28942__i < G__28942__a.length) {G__28942__a[G__28942__i] = arguments[G__28942__i + 0]; ++G__28942__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28942__a,0);
} 
return content$home$main$content__delegate.call(this,args__5784__auto__);};
content$home$main$content.cljs$lang$maxFixedArity = 0;
content$home$main$content.cljs$lang$applyTo = (function (arglist__28943){
var args__5784__auto__ = cljs.core.seq(arglist__28943);
return content$home$main$content__delegate(args__5784__auto__);
});
content$home$main$content.cljs$core$IFn$_invoke$arity$variadic = content$home$main$content__delegate;
return content$home$main$content;
})()
;

//# sourceMappingURL=main.js.map