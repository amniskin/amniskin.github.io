// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.sicp.book_data');
goog.require('cljs.core');
goog.require('ui.book');
goog.require('ui.book_toc');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
content.sicp.book_data.sicp_data = tailrecursion.javelin.cell(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$short_DASH_title,"SICP",cljs.core.constant$keyword$title,"Structure and Interpretation of Computer Programs",cljs.core.constant$keyword$tagline,"With Clojure!",cljs.core.constant$keyword$location,"sicp"], null));
/**
 * @param {...*} var_args
 */
content.sicp.book_data.toc = (function() { 
var content$sicp$book_data$toc__delegate = function (args__10403__auto__){
var vec__144855 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144855,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144855,(1),null);
var _STAR_book_data_STAR_144856 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book_toc.toc();
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144856;
}};
var content$sicp$book_data$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144857__i = 0, G__144857__a = new Array(arguments.length -  0);
while (G__144857__i < G__144857__a.length) {G__144857__a[G__144857__i] = arguments[G__144857__i + 0]; ++G__144857__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144857__a,0);
} 
return content$sicp$book_data$toc__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__144858){
var args__10403__auto__ = cljs.core.seq(arglist__144858);
return content$sicp$book_data$toc__delegate(args__10403__auto__);
});
content$sicp$book_data$toc.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$toc__delegate;
return content$sicp$book_data$toc;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.container = (function() { 
var content$sicp$book_data$container__delegate = function (args__10403__auto__){
var vec__144861 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144861,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144861,(1),null);
var _STAR_book_data_STAR_144862 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.container(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144862;
}};
var content$sicp$book_data$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144863__i = 0, G__144863__a = new Array(arguments.length -  0);
while (G__144863__i < G__144863__a.length) {G__144863__a[G__144863__i] = arguments[G__144863__i + 0]; ++G__144863__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144863__a,0);
} 
return content$sicp$book_data$container__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$container.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$container.cljs$lang$applyTo = (function (arglist__144864){
var args__10403__auto__ = cljs.core.seq(arglist__144864);
return content$sicp$book_data$container__delegate(args__10403__auto__);
});
content$sicp$book_data$container.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$container__delegate;
return content$sicp$book_data$container;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.about = (function() { 
var content$sicp$book_data$about__delegate = function (args__10403__auto__){
var vec__144867 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144867,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144867,(1),null);
var _STAR_book_data_STAR_144868 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,"about"], 0)),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144868;
}};
var content$sicp$book_data$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144869__i = 0, G__144869__a = new Array(arguments.length -  0);
while (G__144869__i < G__144869__a.length) {G__144869__a[G__144869__i] = arguments[G__144869__i + 0]; ++G__144869__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144869__a,0);
} 
return content$sicp$book_data$about__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__144870){
var args__10403__auto__ = cljs.core.seq(arglist__144870);
return content$sicp$book_data$about__delegate(args__10403__auto__);
});
content$sicp$book_data$about.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$about__delegate;
return content$sicp$book_data$about;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.chapter = (function() { 
var content$sicp$book_data$chapter__delegate = function (args__10403__auto__){
var vec__144874 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144874,(0),null);
var map__144875__$1 = ((cljs.core.seq_QMARK_(map__144875))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144875):map__144875);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144875__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144874,(1),null);
var _STAR_book_data_STAR_144876 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144876;
}};
var content$sicp$book_data$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144877__i = 0, G__144877__a = new Array(arguments.length -  0);
while (G__144877__i < G__144877__a.length) {G__144877__a[G__144877__i] = arguments[G__144877__i + 0]; ++G__144877__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144877__a,0);
} 
return content$sicp$book_data$chapter__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__144878){
var args__10403__auto__ = cljs.core.seq(arglist__144878);
return content$sicp$book_data$chapter__delegate(args__10403__auto__);
});
content$sicp$book_data$chapter.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$chapter__delegate;
return content$sicp$book_data$chapter;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.sect = (function() { 
var content$sicp$book_data$sect__delegate = function (args__10403__auto__){
var vec__144882 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144882,(0),null);
var map__144883__$1 = ((cljs.core.seq_QMARK_(map__144883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144883):map__144883);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144883__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144882,(1),null);
var _STAR_book_data_STAR_144884 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144884;
}};
var content$sicp$book_data$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144885__i = 0, G__144885__a = new Array(arguments.length -  0);
while (G__144885__i < G__144885__a.length) {G__144885__a[G__144885__i] = arguments[G__144885__i + 0]; ++G__144885__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144885__a,0);
} 
return content$sicp$book_data$sect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__144886){
var args__10403__auto__ = cljs.core.seq(arglist__144886);
return content$sicp$book_data$sect__delegate(args__10403__auto__);
});
content$sicp$book_data$sect.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$sect__delegate;
return content$sicp$book_data$sect;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.subsect = (function() { 
var content$sicp$book_data$subsect__delegate = function (args__10403__auto__){
var vec__144890 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144890,(0),null);
var map__144891__$1 = ((cljs.core.seq_QMARK_(map__144891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144891):map__144891);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144891__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144890,(1),null);
var _STAR_book_data_STAR_144892 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144892;
}};
var content$sicp$book_data$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144893__i = 0, G__144893__a = new Array(arguments.length -  0);
while (G__144893__i < G__144893__a.length) {G__144893__a[G__144893__i] = arguments[G__144893__i + 0]; ++G__144893__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144893__a,0);
} 
return content$sicp$book_data$subsect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__144894){
var args__10403__auto__ = cljs.core.seq(arglist__144894);
return content$sicp$book_data$subsect__delegate(args__10403__auto__);
});
content$sicp$book_data$subsect.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$subsect__delegate;
return content$sicp$book_data$subsect;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.ssub = (function() { 
var content$sicp$book_data$ssub__delegate = function (args__10403__auto__){
var vec__144898 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144898,(0),null);
var map__144899__$1 = ((cljs.core.seq_QMARK_(map__144899))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144899):map__144899);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144899__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144898,(1),null);
var _STAR_book_data_STAR_144900 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144900;
}};
var content$sicp$book_data$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144901__i = 0, G__144901__a = new Array(arguments.length -  0);
while (G__144901__i < G__144901__a.length) {G__144901__a[G__144901__i] = arguments[G__144901__i + 0]; ++G__144901__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144901__a,0);
} 
return content$sicp$book_data$ssub__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__144902){
var args__10403__auto__ = cljs.core.seq(arglist__144902);
return content$sicp$book_data$ssub__delegate(args__10403__auto__);
});
content$sicp$book_data$ssub.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$ssub__delegate;
return content$sicp$book_data$ssub;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.exercises = (function() { 
var content$sicp$book_data$exercises__delegate = function (args__10403__auto__){
var vec__144905 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144905,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144905,(1),null);
var _STAR_book_data_STAR_144906 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144906;
}};
var content$sicp$book_data$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144907__i = 0, G__144907__a = new Array(arguments.length -  0);
while (G__144907__i < G__144907__a.length) {G__144907__a[G__144907__i] = arguments[G__144907__i + 0]; ++G__144907__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144907__a,0);
} 
return content$sicp$book_data$exercises__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__144908){
var args__10403__auto__ = cljs.core.seq(arglist__144908);
return content$sicp$book_data$exercises__delegate(args__10403__auto__);
});
content$sicp$book_data$exercises.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$exercises__delegate;
return content$sicp$book_data$exercises;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.exercise = (function() { 
var content$sicp$book_data$exercise__delegate = function (args__10403__auto__){
var vec__144911 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144911,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144911,(1),null);
var _STAR_book_data_STAR_144912 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144912;
}};
var content$sicp$book_data$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144913__i = 0, G__144913__a = new Array(arguments.length -  0);
while (G__144913__i < G__144913__a.length) {G__144913__a[G__144913__i] = arguments[G__144913__i + 0]; ++G__144913__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144913__a,0);
} 
return content$sicp$book_data$exercise__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__144914){
var args__10403__auto__ = cljs.core.seq(arglist__144914);
return content$sicp$book_data$exercise__delegate(args__10403__auto__);
});
content$sicp$book_data$exercise.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$exercise__delegate;
return content$sicp$book_data$exercise;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.q_a = (function() { 
var content$sicp$book_data$q_a__delegate = function (args__10403__auto__){
var vec__144917 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144917,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144917,(1),null);
var _STAR_book_data_STAR_144918 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144918;
}};
var content$sicp$book_data$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144919__i = 0, G__144919__a = new Array(arguments.length -  0);
while (G__144919__i < G__144919__a.length) {G__144919__a[G__144919__i] = arguments[G__144919__i + 0]; ++G__144919__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144919__a,0);
} 
return content$sicp$book_data$q_a__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__144920){
var args__10403__auto__ = cljs.core.seq(arglist__144920);
return content$sicp$book_data$q_a__delegate(args__10403__auto__);
});
content$sicp$book_data$q_a.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$q_a__delegate;
return content$sicp$book_data$q_a;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.footnote = (function() { 
var content$sicp$book_data$footnote__delegate = function (args__10403__auto__){
var vec__144923 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144923,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144923,(1),null);
var _STAR_book_data_STAR_144924 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144924;
}};
var content$sicp$book_data$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144925__i = 0, G__144925__a = new Array(arguments.length -  0);
while (G__144925__i < G__144925__a.length) {G__144925__a[G__144925__i] = arguments[G__144925__i + 0]; ++G__144925__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144925__a,0);
} 
return content$sicp$book_data$footnote__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__144926){
var args__10403__auto__ = cljs.core.seq(arglist__144926);
return content$sicp$book_data$footnote__delegate(args__10403__auto__);
});
content$sicp$book_data$footnote.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$footnote__delegate;
return content$sicp$book_data$footnote;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.fig = (function() { 
var content$sicp$book_data$fig__delegate = function (args__10403__auto__){
var vec__144930 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144930,(0),null);
var map__144931__$1 = ((cljs.core.seq_QMARK_(map__144931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144931):map__144931);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144931__$1,cljs.core.constant$keyword$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144930,(1),null);
var _STAR_book_data_STAR_144932 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$footer,footer], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144932;
}};
var content$sicp$book_data$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144933__i = 0, G__144933__a = new Array(arguments.length -  0);
while (G__144933__i < G__144933__a.length) {G__144933__a[G__144933__i] = arguments[G__144933__i + 0]; ++G__144933__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144933__a,0);
} 
return content$sicp$book_data$fig__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__144934){
var args__10403__auto__ = cljs.core.seq(arglist__144934);
return content$sicp$book_data$fig__delegate(args__10403__auto__);
});
content$sicp$book_data$fig.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$fig__delegate;
return content$sicp$book_data$fig;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.image = (function() { 
var content$sicp$book_data$image__delegate = function (args__10403__auto__){
var vec__144937 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144937,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144937,(1),null);
var _STAR_book_data_STAR_144938 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.image(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144938;
}};
var content$sicp$book_data$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144939__i = 0, G__144939__a = new Array(arguments.length -  0);
while (G__144939__i < G__144939__a.length) {G__144939__a[G__144939__i] = arguments[G__144939__i + 0]; ++G__144939__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144939__a,0);
} 
return content$sicp$book_data$image__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__144940){
var args__10403__auto__ = cljs.core.seq(arglist__144940);
return content$sicp$book_data$image__delegate(args__10403__auto__);
});
content$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$image__delegate;
return content$sicp$book_data$image;
})()
;
