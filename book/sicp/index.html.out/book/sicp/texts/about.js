// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('book.sicp.texts.about');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.markdown');
goog.require('book.sicp.book_data');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
book.sicp.texts.about.content = (function() { 
var book$sicp$texts$about$content__delegate = function (args__8262__auto__){
var vec__352670 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__352670,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__352670,(1),null);
return book.sicp.book_data.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,(function (){var _STAR_references_STAR_352671 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_352672 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_references_STAR_,null], 0));

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,null], 0));

try{var _STAR_references_STAR_352673 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_352674 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_references_STAR_,cljs.core.PersistentArrayMap.EMPTY], 0));

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,cljs.core.List.EMPTY], 0));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__352675 = cljs.core.PersistentArrayMap.EMPTY;
var G__352676 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This site is designed to be used on its own by people who want to learn to program from the textbook, ",(function (){var G__352677 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
var G__352678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Structure and Interpretation of Computer Programs"], null);
return (tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2(G__352677,G__352678) : tailrecursion.hoplon.markdown.quoted_node.call(null,G__352677,G__352678));
})()," (SICP) by Harold Abelson and Gerald Jay Sussman with Julie Sussman. SICP is licensed under a ",tailrecursion.hoplon.markdown.exp_link_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"\"http://creativecommons.org/licenses/by-sa/4.0/\"",cljs.core.cst$kw$title,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creative Commons Attribution-ShareAlike 4.0 International License"], null)], 0))," by the MIT Press. I have included ",(function (){var G__352679 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
var G__352680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["translations"], null);
return (tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2(G__352679,G__352680) : tailrecursion.hoplon.markdown.quoted_node.call(null,G__352679,G__352680));
})()," of the textbook into Clojure, and have included Clojure solutions to the problems."], null);
return (tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2(G__352675,G__352676) : tailrecursion.hoplon.markdown.para_node.call(null,G__352675,G__352676));
})(),(function (){var G__352681 = cljs.core.PersistentArrayMap.EMPTY;
var G__352682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["If you do not have a Clojure REPL already in place, go ahead and get ",tailrecursion.hoplon.markdown.exp_link_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"http://boot-clj.com/",cljs.core.cst$kw$title,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boot"], null)], 0)),". Most importantly, Lisp can do it!"], null);
return (tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2(G__352681,G__352682) : tailrecursion.hoplon.markdown.para_node.call(null,G__352681,G__352682));
})()], null);
}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_352674;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_352673;
}}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_352672;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_352671;
}})()], 0));
};
var book$sicp$texts$about$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__352683__i = 0, G__352683__a = new Array(arguments.length -  0);
while (G__352683__i < G__352683__a.length) {G__352683__a[G__352683__i] = arguments[G__352683__i + 0]; ++G__352683__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__352683__a,0);
} 
return book$sicp$texts$about$content__delegate.call(this,args__8262__auto__);};
book$sicp$texts$about$content.cljs$lang$maxFixedArity = 0;
book$sicp$texts$about$content.cljs$lang$applyTo = (function (arglist__352684){
var args__8262__auto__ = cljs.core.seq(arglist__352684);
return book$sicp$texts$about$content__delegate(args__8262__auto__);
});
book$sicp$texts$about$content.cljs$core$IFn$_invoke$arity$variadic = book$sicp$texts$about$content__delegate;
return book$sicp$texts$about$content;
})()
;
