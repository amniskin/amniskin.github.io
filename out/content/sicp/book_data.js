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
var vec__149569 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149569,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149569,(1),null);
var _STAR_book_data_STAR_149570 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book_toc.toc();
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149570;
}};
var content$sicp$book_data$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149571__i = 0, G__149571__a = new Array(arguments.length -  0);
while (G__149571__i < G__149571__a.length) {G__149571__a[G__149571__i] = arguments[G__149571__i + 0]; ++G__149571__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149571__a,0);
} 
return content$sicp$book_data$toc__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__149572){
var args__10403__auto__ = cljs.core.seq(arglist__149572);
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
var vec__149575 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149575,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149575,(1),null);
var _STAR_book_data_STAR_149576 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.container(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149576;
}};
var content$sicp$book_data$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149577__i = 0, G__149577__a = new Array(arguments.length -  0);
while (G__149577__i < G__149577__a.length) {G__149577__a[G__149577__i] = arguments[G__149577__i + 0]; ++G__149577__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149577__a,0);
} 
return content$sicp$book_data$container__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$container.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$container.cljs$lang$applyTo = (function (arglist__149578){
var args__10403__auto__ = cljs.core.seq(arglist__149578);
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
var vec__149581 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149581,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149581,(1),null);
var _STAR_book_data_STAR_149582 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,"about"], 0)),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149582;
}};
var content$sicp$book_data$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149583__i = 0, G__149583__a = new Array(arguments.length -  0);
while (G__149583__i < G__149583__a.length) {G__149583__a[G__149583__i] = arguments[G__149583__i + 0]; ++G__149583__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149583__a,0);
} 
return content$sicp$book_data$about__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__149584){
var args__10403__auto__ = cljs.core.seq(arglist__149584);
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
var vec__149588 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149588,(0),null);
var map__149589__$1 = ((cljs.core.seq_QMARK_(map__149589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149589):map__149589);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149589__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149588,(1),null);
var _STAR_book_data_STAR_149590 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149590;
}};
var content$sicp$book_data$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149591__i = 0, G__149591__a = new Array(arguments.length -  0);
while (G__149591__i < G__149591__a.length) {G__149591__a[G__149591__i] = arguments[G__149591__i + 0]; ++G__149591__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149591__a,0);
} 
return content$sicp$book_data$chapter__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__149592){
var args__10403__auto__ = cljs.core.seq(arglist__149592);
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
var vec__149596 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149596,(0),null);
var map__149597__$1 = ((cljs.core.seq_QMARK_(map__149597))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149597):map__149597);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149597__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149596,(1),null);
var _STAR_book_data_STAR_149598 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149598;
}};
var content$sicp$book_data$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149599__i = 0, G__149599__a = new Array(arguments.length -  0);
while (G__149599__i < G__149599__a.length) {G__149599__a[G__149599__i] = arguments[G__149599__i + 0]; ++G__149599__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149599__a,0);
} 
return content$sicp$book_data$sect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__149600){
var args__10403__auto__ = cljs.core.seq(arglist__149600);
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
var vec__149604 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149604,(0),null);
var map__149605__$1 = ((cljs.core.seq_QMARK_(map__149605))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149605):map__149605);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149605__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149604,(1),null);
var _STAR_book_data_STAR_149606 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149606;
}};
var content$sicp$book_data$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149607__i = 0, G__149607__a = new Array(arguments.length -  0);
while (G__149607__i < G__149607__a.length) {G__149607__a[G__149607__i] = arguments[G__149607__i + 0]; ++G__149607__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149607__a,0);
} 
return content$sicp$book_data$subsect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__149608){
var args__10403__auto__ = cljs.core.seq(arglist__149608);
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
var vec__149612 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149612,(0),null);
var map__149613__$1 = ((cljs.core.seq_QMARK_(map__149613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149613):map__149613);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149613__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149612,(1),null);
var _STAR_book_data_STAR_149614 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149614;
}};
var content$sicp$book_data$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149615__i = 0, G__149615__a = new Array(arguments.length -  0);
while (G__149615__i < G__149615__a.length) {G__149615__a[G__149615__i] = arguments[G__149615__i + 0]; ++G__149615__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149615__a,0);
} 
return content$sicp$book_data$ssub__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__149616){
var args__10403__auto__ = cljs.core.seq(arglist__149616);
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
var vec__149619 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149619,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149619,(1),null);
var _STAR_book_data_STAR_149620 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149620;
}};
var content$sicp$book_data$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149621__i = 0, G__149621__a = new Array(arguments.length -  0);
while (G__149621__i < G__149621__a.length) {G__149621__a[G__149621__i] = arguments[G__149621__i + 0]; ++G__149621__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149621__a,0);
} 
return content$sicp$book_data$exercises__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__149622){
var args__10403__auto__ = cljs.core.seq(arglist__149622);
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
var vec__149625 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149625,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149625,(1),null);
var _STAR_book_data_STAR_149626 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149626;
}};
var content$sicp$book_data$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149627__i = 0, G__149627__a = new Array(arguments.length -  0);
while (G__149627__i < G__149627__a.length) {G__149627__a[G__149627__i] = arguments[G__149627__i + 0]; ++G__149627__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149627__a,0);
} 
return content$sicp$book_data$exercise__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__149628){
var args__10403__auto__ = cljs.core.seq(arglist__149628);
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
var vec__149631 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149631,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149631,(1),null);
var _STAR_book_data_STAR_149632 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149632;
}};
var content$sicp$book_data$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149633__i = 0, G__149633__a = new Array(arguments.length -  0);
while (G__149633__i < G__149633__a.length) {G__149633__a[G__149633__i] = arguments[G__149633__i + 0]; ++G__149633__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149633__a,0);
} 
return content$sicp$book_data$q_a__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__149634){
var args__10403__auto__ = cljs.core.seq(arglist__149634);
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
var vec__149637 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149637,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149637,(1),null);
var _STAR_book_data_STAR_149638 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149638;
}};
var content$sicp$book_data$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149639__i = 0, G__149639__a = new Array(arguments.length -  0);
while (G__149639__i < G__149639__a.length) {G__149639__a[G__149639__i] = arguments[G__149639__i + 0]; ++G__149639__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149639__a,0);
} 
return content$sicp$book_data$footnote__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__149640){
var args__10403__auto__ = cljs.core.seq(arglist__149640);
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
var vec__149644 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149644,(0),null);
var map__149645__$1 = ((cljs.core.seq_QMARK_(map__149645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149645):map__149645);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149645__$1,cljs.core.constant$keyword$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149644,(1),null);
var _STAR_book_data_STAR_149646 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$footer,footer], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149646;
}};
var content$sicp$book_data$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149647__i = 0, G__149647__a = new Array(arguments.length -  0);
while (G__149647__i < G__149647__a.length) {G__149647__a[G__149647__i] = arguments[G__149647__i + 0]; ++G__149647__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149647__a,0);
} 
return content$sicp$book_data$fig__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__149648){
var args__10403__auto__ = cljs.core.seq(arglist__149648);
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
var vec__149651 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149651,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149651,(1),null);
var _STAR_book_data_STAR_149652 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.image(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_149652;
}};
var content$sicp$book_data$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149653__i = 0, G__149653__a = new Array(arguments.length -  0);
while (G__149653__i < G__149653__a.length) {G__149653__a[G__149653__i] = arguments[G__149653__i + 0]; ++G__149653__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149653__a,0);
} 
return content$sicp$book_data$image__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__149654){
var args__10403__auto__ = cljs.core.seq(arglist__149654);
return content$sicp$book_data$image__delegate(args__10403__auto__);
});
content$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$image__delegate;
return content$sicp$book_data$image;
})()
;
