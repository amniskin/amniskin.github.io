// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.sicp.texts.about');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.markdown');
goog.require('content.sicp.book_data');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.sicp.texts.about.content = (function() { 
var content$sicp$texts$about$content__delegate = function (args__5784__auto__){
var vec__27625 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__27625,(0),null);
var kids = cljs.core.nth.call(null,vec__27625,(1),null);
return content.sicp.book_data.about.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var _STAR_references_STAR_27626 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_27627 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_references_STAR_,null);

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,null);

try{var _STAR_references_STAR_27628 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_27629 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_references_STAR_,cljs.core.PersistentArrayMap.EMPTY);

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,cljs.core.List.EMPTY);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This site is designed to be used on its own by people who want to learn to program from the textbook, ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Structure and Interpretation of Computer Programs"], null))," (SICP) by Harold Abelson and Gerald Jay Sussman with Julie Sussman. SICP is licensed under a ",tailrecursion.hoplon.markdown.exp_link_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"\"http://creativecommons.org/licenses/by-sa/4.0/\"",new cljs.core.Keyword(null,"title","title",636505583),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creative Commons Attribution-ShareAlike 4.0 International License"], null))," by the MIT Press. I have included ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["translations"], null))," of the textbook into Clojure, and have included Clojure solutions to the problems."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["If you do not have a Clojure REPL already in place, go ahead and get ",tailrecursion.hoplon.markdown.exp_link_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"http://boot-clj.com/",new cljs.core.Keyword(null,"title","title",636505583),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boot"], null)),". Most importantly, Lisp can do it!"], null))], null);
}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_27629;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_27628;
}}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_27627;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_27626;
}})());
};
var content$sicp$texts$about$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__27630__i = 0, G__27630__a = new Array(arguments.length -  0);
while (G__27630__i < G__27630__a.length) {G__27630__a[G__27630__i] = arguments[G__27630__i + 0]; ++G__27630__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__27630__a,0);
} 
return content$sicp$texts$about$content__delegate.call(this,args__5784__auto__);};
content$sicp$texts$about$content.cljs$lang$maxFixedArity = 0;
content$sicp$texts$about$content.cljs$lang$applyTo = (function (arglist__27631){
var args__5784__auto__ = cljs.core.seq(arglist__27631);
return content$sicp$texts$about$content__delegate(args__5784__auto__);
});
content$sicp$texts$about$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$texts$about$content__delegate;
return content$sicp$texts$about$content;
})()
;

//# sourceMappingURL=about.js.map