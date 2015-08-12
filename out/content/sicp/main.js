// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.sicp.main');
goog.require('cljs.core');
goog.require('content.sicp.texts.ch1sect2');
goog.require('content.sicp.book_data');
goog.require('content.sicp.texts.about');
goog.require('ui.style');
goog.require('content.sicp.texts.ch1sect3');
goog.require('tailrecursion.hoplon');
goog.require('content.sicp.texts.ch2sect2');
goog.require('tailrecursion.javelin');
goog.require('content.sicp.texts.ch1sect1');
goog.require('content.sicp.texts.ch2');
goog.require('content.sicp.texts.ch1');
goog.require('content.sicp.texts.ch2sect1');
/**
 * @param {...*} var_args
 */
content.sicp.main.content = (function() { 
var content$sicp$main$content__delegate = function (args__5784__auto__){
var vec__25993 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__25993,(0),null);
var kids = cljs.core.nth.call(null,vec__25993,(1),null);
return ui.style.page.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"sicp",ui.style.container.call(null,ui.style.sidebar.call(null,content.sicp.book_data.toc.call(null)),ui.style.content_with_sidebar.call(null,content.sicp.book_data.container.call(null,content.sicp.texts.about.content.call(null),content.sicp.texts.ch1.content.call(null),content.sicp.texts.ch1sect1.content.call(null),content.sicp.texts.ch1sect2.content.call(null),content.sicp.texts.ch1sect3.content.call(null),content.sicp.texts.ch2.content.call(null),content.sicp.texts.ch2sect1.content.call(null),content.sicp.texts.ch2sect2.content.call(null)))));
};
var content$sicp$main$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__25994__i = 0, G__25994__a = new Array(arguments.length -  0);
while (G__25994__i < G__25994__a.length) {G__25994__a[G__25994__i] = arguments[G__25994__i + 0]; ++G__25994__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__25994__a,0);
} 
return content$sicp$main$content__delegate.call(this,args__5784__auto__);};
content$sicp$main$content.cljs$lang$maxFixedArity = 0;
content$sicp$main$content.cljs$lang$applyTo = (function (arglist__25995){
var args__5784__auto__ = cljs.core.seq(arglist__25995);
return content$sicp$main$content__delegate(args__5784__auto__);
});
content$sicp$main$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$main$content__delegate;
return content$sicp$main$content;
})()
;

//# sourceMappingURL=main.js.map