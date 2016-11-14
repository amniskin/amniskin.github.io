// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('book.sicp.book_data');
goog.require('cljs.core');
goog.require('book.general.parts');
goog.require('general.toc');
goog.require('general.toc_mobile');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
book.sicp.book_data.sicp_data = tailrecursion.javelin.cell(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$toc_DASH_hierarchy,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ch,cljs.core.cst$kw$sect,cljs.core.cst$kw$sub,cljs.core.cst$kw$ssub],null)),cljs.core.cst$kw$short_DASH_title,"SICP",cljs.core.cst$kw$title,"Structure and Interpretation of Computer Programs",cljs.core.cst$kw$tagline,"With Clojure!",cljs.core.cst$kw$location,"sicp"], null));
/**
 * @param {...*} var_args
 */
book.sicp.book_data.toc = (function() { 
var book$sicp$book_data$toc__delegate = function (args__8082__auto__){
var vec__201305 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201305,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201305,(1),null);
return general.toc.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201306__i = 0, G__201306__a = new Array(arguments.length -  0);
while (G__201306__i < G__201306__a.length) {G__201306__a[G__201306__i] = arguments[G__201306__i + 0]; ++G__201306__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201306__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__201307){
var args__8082__auto__ = cljs.core.seq(arglist__201307);
return book$sicp$book_data$toc__delegate(args__8082__auto__);
});
book$sicp$book_data$toc.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc__delegate;
return book$sicp$book_data$toc;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.toc_mobile = (function() { 
var book$sicp$book_data$toc_mobile__delegate = function (args__8082__auto__){
var vec__201309 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201309,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201309,(1),null);
return general.toc_mobile.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201310__i = 0, G__201310__a = new Array(arguments.length -  0);
while (G__201310__i < G__201310__a.length) {G__201310__a[G__201310__i] = arguments[G__201310__i + 0]; ++G__201310__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201310__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__201311){
var args__8082__auto__ = cljs.core.seq(arglist__201311);
return book$sicp$book_data$toc_mobile__delegate(args__8082__auto__);
});
book$sicp$book_data$toc_mobile.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc_mobile__delegate;
return book$sicp$book_data$toc_mobile;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.content = (function() { 
var book$sicp$book_data$content__delegate = function (args__8082__auto__){
var vec__201314 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201314,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201314,(1),null);
var _STAR_book_data_STAR_201315 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.content(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201315;
}};
var book$sicp$book_data$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201316__i = 0, G__201316__a = new Array(arguments.length -  0);
while (G__201316__i < G__201316__a.length) {G__201316__a[G__201316__i] = arguments[G__201316__i + 0]; ++G__201316__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201316__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__201317){
var args__8082__auto__ = cljs.core.seq(arglist__201317);
return book$sicp$book_data$content__delegate(args__8082__auto__);
});
book$sicp$book_data$content.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$content__delegate;
return book$sicp$book_data$content;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.about = (function() { 
var book$sicp$book_data$about__delegate = function (args__8082__auto__){
var vec__201320 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201320,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201320,(1),null);
var _STAR_book_data_STAR_201321 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"about"], 0)),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201321;
}};
var book$sicp$book_data$about = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201322__i = 0, G__201322__a = new Array(arguments.length -  0);
while (G__201322__i < G__201322__a.length) {G__201322__a[G__201322__i] = arguments[G__201322__i + 0]; ++G__201322__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201322__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__201323){
var args__8082__auto__ = cljs.core.seq(arglist__201323);
return book$sicp$book_data$about__delegate(args__8082__auto__);
});
book$sicp$book_data$about.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$about__delegate;
return book$sicp$book_data$about;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.chapter = (function() { 
var book$sicp$book_data$chapter__delegate = function (args__8082__auto__){
var vec__201328 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201328,(0),null);
var map__201329__$1 = ((((!((map__201329 == null)))?((((map__201329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201329):map__201329);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201329__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201328,(1),null);
var _STAR_book_data_STAR_201331 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201331;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201332__i = 0, G__201332__a = new Array(arguments.length -  0);
while (G__201332__i < G__201332__a.length) {G__201332__a[G__201332__i] = arguments[G__201332__i + 0]; ++G__201332__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201332__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__201333){
var args__8082__auto__ = cljs.core.seq(arglist__201333);
return book$sicp$book_data$chapter__delegate(args__8082__auto__);
});
book$sicp$book_data$chapter.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$chapter__delegate;
return book$sicp$book_data$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.sect = (function() { 
var book$sicp$book_data$sect__delegate = function (args__8082__auto__){
var vec__201338 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201338,(0),null);
var map__201339__$1 = ((((!((map__201339 == null)))?((((map__201339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201339):map__201339);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201339__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201338,(1),null);
var _STAR_book_data_STAR_201341 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201341;
}};
var book$sicp$book_data$sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201342__i = 0, G__201342__a = new Array(arguments.length -  0);
while (G__201342__i < G__201342__a.length) {G__201342__a[G__201342__i] = arguments[G__201342__i + 0]; ++G__201342__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201342__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__201343){
var args__8082__auto__ = cljs.core.seq(arglist__201343);
return book$sicp$book_data$sect__delegate(args__8082__auto__);
});
book$sicp$book_data$sect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$sect__delegate;
return book$sicp$book_data$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.subsect = (function() { 
var book$sicp$book_data$subsect__delegate = function (args__8082__auto__){
var vec__201348 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201348,(0),null);
var map__201349__$1 = ((((!((map__201349 == null)))?((((map__201349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201349):map__201349);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201349__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201348,(1),null);
var _STAR_book_data_STAR_201351 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201351;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201352__i = 0, G__201352__a = new Array(arguments.length -  0);
while (G__201352__i < G__201352__a.length) {G__201352__a[G__201352__i] = arguments[G__201352__i + 0]; ++G__201352__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201352__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__201353){
var args__8082__auto__ = cljs.core.seq(arglist__201353);
return book$sicp$book_data$subsect__delegate(args__8082__auto__);
});
book$sicp$book_data$subsect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$subsect__delegate;
return book$sicp$book_data$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.ssub = (function() { 
var book$sicp$book_data$ssub__delegate = function (args__8082__auto__){
var vec__201358 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201358,(0),null);
var map__201359__$1 = ((((!((map__201359 == null)))?((((map__201359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201359):map__201359);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201359__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201358,(1),null);
var _STAR_book_data_STAR_201361 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201361;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201362__i = 0, G__201362__a = new Array(arguments.length -  0);
while (G__201362__i < G__201362__a.length) {G__201362__a[G__201362__i] = arguments[G__201362__i + 0]; ++G__201362__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201362__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__201363){
var args__8082__auto__ = cljs.core.seq(arglist__201363);
return book$sicp$book_data$ssub__delegate(args__8082__auto__);
});
book$sicp$book_data$ssub.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$ssub__delegate;
return book$sicp$book_data$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercises = (function() { 
var book$sicp$book_data$exercises__delegate = function (args__8082__auto__){
var vec__201366 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201366,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201366,(1),null);
var _STAR_book_data_STAR_201367 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201367;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201368__i = 0, G__201368__a = new Array(arguments.length -  0);
while (G__201368__i < G__201368__a.length) {G__201368__a[G__201368__i] = arguments[G__201368__i + 0]; ++G__201368__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201368__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__201369){
var args__8082__auto__ = cljs.core.seq(arglist__201369);
return book$sicp$book_data$exercises__delegate(args__8082__auto__);
});
book$sicp$book_data$exercises.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercises__delegate;
return book$sicp$book_data$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercise = (function() { 
var book$sicp$book_data$exercise__delegate = function (args__8082__auto__){
var vec__201372 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201372,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201372,(1),null);
var _STAR_book_data_STAR_201373 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201373;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201374__i = 0, G__201374__a = new Array(arguments.length -  0);
while (G__201374__i < G__201374__a.length) {G__201374__a[G__201374__i] = arguments[G__201374__i + 0]; ++G__201374__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201374__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__201375){
var args__8082__auto__ = cljs.core.seq(arglist__201375);
return book$sicp$book_data$exercise__delegate(args__8082__auto__);
});
book$sicp$book_data$exercise.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercise__delegate;
return book$sicp$book_data$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.q_a = (function() { 
var book$sicp$book_data$q_a__delegate = function (args__8082__auto__){
var vec__201378 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201378,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201378,(1),null);
var _STAR_book_data_STAR_201379 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201379;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201380__i = 0, G__201380__a = new Array(arguments.length -  0);
while (G__201380__i < G__201380__a.length) {G__201380__a[G__201380__i] = arguments[G__201380__i + 0]; ++G__201380__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201380__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__201381){
var args__8082__auto__ = cljs.core.seq(arglist__201381);
return book$sicp$book_data$q_a__delegate(args__8082__auto__);
});
book$sicp$book_data$q_a.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$q_a__delegate;
return book$sicp$book_data$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.footnote = (function() { 
var book$sicp$book_data$footnote__delegate = function (args__8082__auto__){
var vec__201384 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201384,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201384,(1),null);
var _STAR_book_data_STAR_201385 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201385;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201386__i = 0, G__201386__a = new Array(arguments.length -  0);
while (G__201386__i < G__201386__a.length) {G__201386__a[G__201386__i] = arguments[G__201386__i + 0]; ++G__201386__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201386__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__201387){
var args__8082__auto__ = cljs.core.seq(arglist__201387);
return book$sicp$book_data$footnote__delegate(args__8082__auto__);
});
book$sicp$book_data$footnote.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$footnote__delegate;
return book$sicp$book_data$footnote;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.fig = (function() { 
var book$sicp$book_data$fig__delegate = function (args__8082__auto__){
var vec__201392 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201392,(0),null);
var map__201393__$1 = ((((!((map__201393 == null)))?((((map__201393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201393):map__201393);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201393__$1,cljs.core.cst$kw$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201392,(1),null);
var _STAR_book_data_STAR_201395 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$footer,footer], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201395;
}};
var book$sicp$book_data$fig = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201396__i = 0, G__201396__a = new Array(arguments.length -  0);
while (G__201396__i < G__201396__a.length) {G__201396__a[G__201396__i] = arguments[G__201396__i + 0]; ++G__201396__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201396__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__201397){
var args__8082__auto__ = cljs.core.seq(arglist__201397);
return book$sicp$book_data$fig__delegate(args__8082__auto__);
});
book$sicp$book_data$fig.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$fig__delegate;
return book$sicp$book_data$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.image = (function() { 
var book$sicp$book_data$image__delegate = function (args__8082__auto__){
var vec__201400 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201400,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201400,(1),null);
var _STAR_book_data_STAR_201401 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.image(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201401;
}};
var book$sicp$book_data$image = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201402__i = 0, G__201402__a = new Array(arguments.length -  0);
while (G__201402__i < G__201402__a.length) {G__201402__a[G__201402__i] = arguments[G__201402__i + 0]; ++G__201402__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201402__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__8082__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__201403){
var args__8082__auto__ = cljs.core.seq(arglist__201403);
return book$sicp$book_data$image__delegate(args__8082__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;
