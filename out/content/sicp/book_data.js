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
var vec__144851 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144851,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144851,(1),null);
var _STAR_book_data_STAR_144852 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book_toc.toc();
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144852;
}};
var content$sicp$book_data$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144853__i = 0, G__144853__a = new Array(arguments.length -  0);
while (G__144853__i < G__144853__a.length) {G__144853__a[G__144853__i] = arguments[G__144853__i + 0]; ++G__144853__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144853__a,0);
} 
return content$sicp$book_data$toc__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__144854){
var args__10403__auto__ = cljs.core.seq(arglist__144854);
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
var vec__144857 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144857,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144857,(1),null);
var _STAR_book_data_STAR_144858 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.container(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144858;
}};
var content$sicp$book_data$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144859__i = 0, G__144859__a = new Array(arguments.length -  0);
while (G__144859__i < G__144859__a.length) {G__144859__a[G__144859__i] = arguments[G__144859__i + 0]; ++G__144859__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144859__a,0);
} 
return content$sicp$book_data$container__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$container.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$container.cljs$lang$applyTo = (function (arglist__144860){
var args__10403__auto__ = cljs.core.seq(arglist__144860);
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
var vec__144863 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144863,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144863,(1),null);
var _STAR_book_data_STAR_144864 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,"about"], 0)),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144864;
}};
var content$sicp$book_data$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144865__i = 0, G__144865__a = new Array(arguments.length -  0);
while (G__144865__i < G__144865__a.length) {G__144865__a[G__144865__i] = arguments[G__144865__i + 0]; ++G__144865__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144865__a,0);
} 
return content$sicp$book_data$about__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__144866){
var args__10403__auto__ = cljs.core.seq(arglist__144866);
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
var vec__144870 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144870,(0),null);
var map__144871__$1 = ((cljs.core.seq_QMARK_(map__144871))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144871):map__144871);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144871__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144870,(1),null);
var _STAR_book_data_STAR_144872 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144872;
}};
var content$sicp$book_data$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144873__i = 0, G__144873__a = new Array(arguments.length -  0);
while (G__144873__i < G__144873__a.length) {G__144873__a[G__144873__i] = arguments[G__144873__i + 0]; ++G__144873__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144873__a,0);
} 
return content$sicp$book_data$chapter__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__144874){
var args__10403__auto__ = cljs.core.seq(arglist__144874);
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
var vec__144878 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144878,(0),null);
var map__144879__$1 = ((cljs.core.seq_QMARK_(map__144879))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144879):map__144879);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144879__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144878,(1),null);
var _STAR_book_data_STAR_144880 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144880;
}};
var content$sicp$book_data$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144881__i = 0, G__144881__a = new Array(arguments.length -  0);
while (G__144881__i < G__144881__a.length) {G__144881__a[G__144881__i] = arguments[G__144881__i + 0]; ++G__144881__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144881__a,0);
} 
return content$sicp$book_data$sect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__144882){
var args__10403__auto__ = cljs.core.seq(arglist__144882);
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
var vec__144886 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144886,(0),null);
var map__144887__$1 = ((cljs.core.seq_QMARK_(map__144887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144887):map__144887);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144887__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144886,(1),null);
var _STAR_book_data_STAR_144888 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144888;
}};
var content$sicp$book_data$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144889__i = 0, G__144889__a = new Array(arguments.length -  0);
while (G__144889__i < G__144889__a.length) {G__144889__a[G__144889__i] = arguments[G__144889__i + 0]; ++G__144889__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144889__a,0);
} 
return content$sicp$book_data$subsect__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__144890){
var args__10403__auto__ = cljs.core.seq(arglist__144890);
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
var vec__144894 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144894,(0),null);
var map__144895__$1 = ((cljs.core.seq_QMARK_(map__144895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144895):map__144895);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144895__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144894,(1),null);
var _STAR_book_data_STAR_144896 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$title,title], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144896;
}};
var content$sicp$book_data$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144897__i = 0, G__144897__a = new Array(arguments.length -  0);
while (G__144897__i < G__144897__a.length) {G__144897__a[G__144897__i] = arguments[G__144897__i + 0]; ++G__144897__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144897__a,0);
} 
return content$sicp$book_data$ssub__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__144898){
var args__10403__auto__ = cljs.core.seq(arglist__144898);
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
var vec__144901 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144901,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144901,(1),null);
var _STAR_book_data_STAR_144902 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144902;
}};
var content$sicp$book_data$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144903__i = 0, G__144903__a = new Array(arguments.length -  0);
while (G__144903__i < G__144903__a.length) {G__144903__a[G__144903__i] = arguments[G__144903__i + 0]; ++G__144903__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144903__a,0);
} 
return content$sicp$book_data$exercises__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__144904){
var args__10403__auto__ = cljs.core.seq(arglist__144904);
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
var vec__144907 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144907,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144907,(1),null);
var _STAR_book_data_STAR_144908 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144908;
}};
var content$sicp$book_data$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144909__i = 0, G__144909__a = new Array(arguments.length -  0);
while (G__144909__i < G__144909__a.length) {G__144909__a[G__144909__i] = arguments[G__144909__i + 0]; ++G__144909__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144909__a,0);
} 
return content$sicp$book_data$exercise__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__144910){
var args__10403__auto__ = cljs.core.seq(arglist__144910);
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
var vec__144913 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144913,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144913,(1),null);
var _STAR_book_data_STAR_144914 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144914;
}};
var content$sicp$book_data$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144915__i = 0, G__144915__a = new Array(arguments.length -  0);
while (G__144915__i < G__144915__a.length) {G__144915__a[G__144915__i] = arguments[G__144915__i + 0]; ++G__144915__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144915__a,0);
} 
return content$sicp$book_data$q_a__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__144916){
var args__10403__auto__ = cljs.core.seq(arglist__144916);
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
var vec__144919 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144919,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144919,(1),null);
var _STAR_book_data_STAR_144920 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144920;
}};
var content$sicp$book_data$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144921__i = 0, G__144921__a = new Array(arguments.length -  0);
while (G__144921__i < G__144921__a.length) {G__144921__a[G__144921__i] = arguments[G__144921__i + 0]; ++G__144921__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144921__a,0);
} 
return content$sicp$book_data$footnote__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__144922){
var args__10403__auto__ = cljs.core.seq(arglist__144922);
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
var vec__144926 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144926,(0),null);
var map__144927__$1 = ((cljs.core.seq_QMARK_(map__144927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144927):map__144927);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144927__$1,cljs.core.constant$keyword$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144926,(1),null);
var _STAR_book_data_STAR_144928 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui.book.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$footer,footer], 0)),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144928;
}};
var content$sicp$book_data$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144929__i = 0, G__144929__a = new Array(arguments.length -  0);
while (G__144929__i < G__144929__a.length) {G__144929__a[G__144929__i] = arguments[G__144929__i + 0]; ++G__144929__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144929__a,0);
} 
return content$sicp$book_data$fig__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__144930){
var args__10403__auto__ = cljs.core.seq(arglist__144930);
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
var vec__144933 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144933,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144933,(1),null);
var _STAR_book_data_STAR_144934 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ui.book.image(),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_144934;
}};
var content$sicp$book_data$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__144935__i = 0, G__144935__a = new Array(arguments.length -  0);
while (G__144935__i < G__144935__a.length) {G__144935__a[G__144935__i] = arguments[G__144935__i + 0]; ++G__144935__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__144935__a,0);
} 
return content$sicp$book_data$image__delegate.call(this,args__10403__auto__);};
content$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__144936){
var args__10403__auto__ = cljs.core.seq(arglist__144936);
return content$sicp$book_data$image__delegate(args__10403__auto__);
});
content$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$image__delegate;
return content$sicp$book_data$image;
})()
;
