// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
var content$sicp$texts$about$content__delegate = function (args__10403__auto__){
var vec__133958 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__133958,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__133958,(1),null);
return content.sicp.book_data.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,(function (){var _STAR_references_STAR_133959 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_133960 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_references_STAR_,null], 0));

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,null], 0));

try{var _STAR_references_STAR_133961 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_133962 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_references_STAR_,cljs.core.PersistentArrayMap.EMPTY], 0));

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,cljs.core.List.EMPTY], 0));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__133963 = cljs.core.PersistentArrayMap.EMPTY;
var G__133964 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["This site is designed to be used on its own by people who want to learn to program from the textbook, ",(function (){var G__133965 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$double], null);
var G__133966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Structure and Interpretation of Computer Programs"], null);
return (tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2(G__133965,G__133966) : tailrecursion.hoplon.markdown.quoted_node.call(null,G__133965,G__133966));
})()," (SICP) by Harold Abelson and Gerald Jay Sussman with Julie Sussman. SICP is licensed under a ",tailrecursion.hoplon.markdown.exp_link_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$url,"\"http://creativecommons.org/licenses/by-sa/4.0/\"",cljs.core.constant$keyword$title,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Creative Commons Attribution-ShareAlike 4.0 International License"], null)], 0))," by the MIT Press. I have included ",(function (){var G__133967 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$double], null);
var G__133968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["translations"], null);
return (tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.quoted_node.cljs$core$IFn$_invoke$arity$2(G__133967,G__133968) : tailrecursion.hoplon.markdown.quoted_node.call(null,G__133967,G__133968));
})()," of the textbook into Clojure, and have included Clojure solutions to the problems."], null);
return (tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2(G__133963,G__133964) : tailrecursion.hoplon.markdown.para_node.call(null,G__133963,G__133964));
})(),(function (){var G__133969 = cljs.core.PersistentArrayMap.EMPTY;
var G__133970 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["If you do not have a Clojure REPL already in place, go ahead and get ",tailrecursion.hoplon.markdown.exp_link_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$url,"http://boot-clj.com/",cljs.core.constant$keyword$title,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boot"], null)], 0)),". Most importantly, Lisp can do it!"], null);
return (tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.markdown.para_node.cljs$core$IFn$_invoke$arity$2(G__133969,G__133970) : tailrecursion.hoplon.markdown.para_node.call(null,G__133969,G__133970));
})()], null);
}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_133962;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_133961;
}}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_133960;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_133959;
}})()], 0));
};
var content$sicp$texts$about$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__133971__i = 0, G__133971__a = new Array(arguments.length -  0);
while (G__133971__i < G__133971__a.length) {G__133971__a[G__133971__i] = arguments[G__133971__i + 0]; ++G__133971__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__133971__a,0);
} 
return content$sicp$texts$about$content__delegate.call(this,args__10403__auto__);};
content$sicp$texts$about$content.cljs$lang$maxFixedArity = 0;
content$sicp$texts$about$content.cljs$lang$applyTo = (function (arglist__133972){
var args__10403__auto__ = cljs.core.seq(arglist__133972);
return content$sicp$texts$about$content__delegate(args__10403__auto__);
});
content$sicp$texts$about$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$texts$about$content__delegate;
return content$sicp$texts$about$content;
})()
;
