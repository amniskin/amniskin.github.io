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
var book$sicp$book_data$toc__delegate = function (args__8262__auto__){
var vec__201485 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201485,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201485,(1),null);
return general.toc.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201486__i = 0, G__201486__a = new Array(arguments.length -  0);
while (G__201486__i < G__201486__a.length) {G__201486__a[G__201486__i] = arguments[G__201486__i + 0]; ++G__201486__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201486__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__201487){
var args__8262__auto__ = cljs.core.seq(arglist__201487);
return book$sicp$book_data$toc__delegate(args__8262__auto__);
});
book$sicp$book_data$toc.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc__delegate;
return book$sicp$book_data$toc;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.toc_mobile = (function() { 
var book$sicp$book_data$toc_mobile__delegate = function (args__8262__auto__){
var vec__201489 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201489,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201489,(1),null);
return general.toc_mobile.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201490__i = 0, G__201490__a = new Array(arguments.length -  0);
while (G__201490__i < G__201490__a.length) {G__201490__a[G__201490__i] = arguments[G__201490__i + 0]; ++G__201490__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201490__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__201491){
var args__8262__auto__ = cljs.core.seq(arglist__201491);
return book$sicp$book_data$toc_mobile__delegate(args__8262__auto__);
});
book$sicp$book_data$toc_mobile.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc_mobile__delegate;
return book$sicp$book_data$toc_mobile;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.content = (function() { 
var book$sicp$book_data$content__delegate = function (args__8262__auto__){
var vec__201494 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201494,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201494,(1),null);
var _STAR_book_data_STAR_201495 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.content(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201495;
}};
var book$sicp$book_data$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201496__i = 0, G__201496__a = new Array(arguments.length -  0);
while (G__201496__i < G__201496__a.length) {G__201496__a[G__201496__i] = arguments[G__201496__i + 0]; ++G__201496__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201496__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__201497){
var args__8262__auto__ = cljs.core.seq(arglist__201497);
return book$sicp$book_data$content__delegate(args__8262__auto__);
});
book$sicp$book_data$content.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$content__delegate;
return book$sicp$book_data$content;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.about = (function() { 
var book$sicp$book_data$about__delegate = function (args__8262__auto__){
var vec__201500 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201500,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201500,(1),null);
var _STAR_book_data_STAR_201501 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"about"], 0)),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201501;
}};
var book$sicp$book_data$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201502__i = 0, G__201502__a = new Array(arguments.length -  0);
while (G__201502__i < G__201502__a.length) {G__201502__a[G__201502__i] = arguments[G__201502__i + 0]; ++G__201502__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201502__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__201503){
var args__8262__auto__ = cljs.core.seq(arglist__201503);
return book$sicp$book_data$about__delegate(args__8262__auto__);
});
book$sicp$book_data$about.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$about__delegate;
return book$sicp$book_data$about;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.chapter = (function() { 
var book$sicp$book_data$chapter__delegate = function (args__8262__auto__){
var vec__201508 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201508,(0),null);
var map__201509__$1 = ((((!((map__201509 == null)))?((((map__201509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201509):map__201509);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201509__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201508,(1),null);
var _STAR_book_data_STAR_201511 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201511;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201512__i = 0, G__201512__a = new Array(arguments.length -  0);
while (G__201512__i < G__201512__a.length) {G__201512__a[G__201512__i] = arguments[G__201512__i + 0]; ++G__201512__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201512__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__201513){
var args__8262__auto__ = cljs.core.seq(arglist__201513);
return book$sicp$book_data$chapter__delegate(args__8262__auto__);
});
book$sicp$book_data$chapter.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$chapter__delegate;
return book$sicp$book_data$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.sect = (function() { 
var book$sicp$book_data$sect__delegate = function (args__8262__auto__){
var vec__201518 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201518,(0),null);
var map__201519__$1 = ((((!((map__201519 == null)))?((((map__201519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201519):map__201519);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201519__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201518,(1),null);
var _STAR_book_data_STAR_201521 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201521;
}};
var book$sicp$book_data$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201522__i = 0, G__201522__a = new Array(arguments.length -  0);
while (G__201522__i < G__201522__a.length) {G__201522__a[G__201522__i] = arguments[G__201522__i + 0]; ++G__201522__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201522__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__201523){
var args__8262__auto__ = cljs.core.seq(arglist__201523);
return book$sicp$book_data$sect__delegate(args__8262__auto__);
});
book$sicp$book_data$sect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$sect__delegate;
return book$sicp$book_data$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.subsect = (function() { 
var book$sicp$book_data$subsect__delegate = function (args__8262__auto__){
var vec__201528 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201528,(0),null);
var map__201529__$1 = ((((!((map__201529 == null)))?((((map__201529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201529):map__201529);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201529__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201528,(1),null);
var _STAR_book_data_STAR_201531 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201531;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201532__i = 0, G__201532__a = new Array(arguments.length -  0);
while (G__201532__i < G__201532__a.length) {G__201532__a[G__201532__i] = arguments[G__201532__i + 0]; ++G__201532__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201532__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__201533){
var args__8262__auto__ = cljs.core.seq(arglist__201533);
return book$sicp$book_data$subsect__delegate(args__8262__auto__);
});
book$sicp$book_data$subsect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$subsect__delegate;
return book$sicp$book_data$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.ssub = (function() { 
var book$sicp$book_data$ssub__delegate = function (args__8262__auto__){
var vec__201538 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201538,(0),null);
var map__201539__$1 = ((((!((map__201539 == null)))?((((map__201539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201539):map__201539);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201539__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201538,(1),null);
var _STAR_book_data_STAR_201541 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201541;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201542__i = 0, G__201542__a = new Array(arguments.length -  0);
while (G__201542__i < G__201542__a.length) {G__201542__a[G__201542__i] = arguments[G__201542__i + 0]; ++G__201542__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201542__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__201543){
var args__8262__auto__ = cljs.core.seq(arglist__201543);
return book$sicp$book_data$ssub__delegate(args__8262__auto__);
});
book$sicp$book_data$ssub.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$ssub__delegate;
return book$sicp$book_data$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercises = (function() { 
var book$sicp$book_data$exercises__delegate = function (args__8262__auto__){
var vec__201546 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201546,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201546,(1),null);
var _STAR_book_data_STAR_201547 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201547;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201548__i = 0, G__201548__a = new Array(arguments.length -  0);
while (G__201548__i < G__201548__a.length) {G__201548__a[G__201548__i] = arguments[G__201548__i + 0]; ++G__201548__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201548__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__201549){
var args__8262__auto__ = cljs.core.seq(arglist__201549);
return book$sicp$book_data$exercises__delegate(args__8262__auto__);
});
book$sicp$book_data$exercises.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercises__delegate;
return book$sicp$book_data$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercise = (function() { 
var book$sicp$book_data$exercise__delegate = function (args__8262__auto__){
var vec__201552 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201552,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201552,(1),null);
var _STAR_book_data_STAR_201553 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201553;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201554__i = 0, G__201554__a = new Array(arguments.length -  0);
while (G__201554__i < G__201554__a.length) {G__201554__a[G__201554__i] = arguments[G__201554__i + 0]; ++G__201554__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201554__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__201555){
var args__8262__auto__ = cljs.core.seq(arglist__201555);
return book$sicp$book_data$exercise__delegate(args__8262__auto__);
});
book$sicp$book_data$exercise.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercise__delegate;
return book$sicp$book_data$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.q_a = (function() { 
var book$sicp$book_data$q_a__delegate = function (args__8262__auto__){
var vec__201558 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201558,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201558,(1),null);
var _STAR_book_data_STAR_201559 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201559;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201560__i = 0, G__201560__a = new Array(arguments.length -  0);
while (G__201560__i < G__201560__a.length) {G__201560__a[G__201560__i] = arguments[G__201560__i + 0]; ++G__201560__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201560__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__201561){
var args__8262__auto__ = cljs.core.seq(arglist__201561);
return book$sicp$book_data$q_a__delegate(args__8262__auto__);
});
book$sicp$book_data$q_a.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$q_a__delegate;
return book$sicp$book_data$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.footnote = (function() { 
var book$sicp$book_data$footnote__delegate = function (args__8262__auto__){
var vec__201564 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201564,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201564,(1),null);
var _STAR_book_data_STAR_201565 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201565;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201566__i = 0, G__201566__a = new Array(arguments.length -  0);
while (G__201566__i < G__201566__a.length) {G__201566__a[G__201566__i] = arguments[G__201566__i + 0]; ++G__201566__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201566__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__201567){
var args__8262__auto__ = cljs.core.seq(arglist__201567);
return book$sicp$book_data$footnote__delegate(args__8262__auto__);
});
book$sicp$book_data$footnote.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$footnote__delegate;
return book$sicp$book_data$footnote;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.fig = (function() { 
var book$sicp$book_data$fig__delegate = function (args__8262__auto__){
var vec__201572 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201572,(0),null);
var map__201573__$1 = ((((!((map__201573 == null)))?((((map__201573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201573):map__201573);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201573__$1,cljs.core.cst$kw$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201572,(1),null);
var _STAR_book_data_STAR_201575 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$footer,footer], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201575;
}};
var book$sicp$book_data$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201576__i = 0, G__201576__a = new Array(arguments.length -  0);
while (G__201576__i < G__201576__a.length) {G__201576__a[G__201576__i] = arguments[G__201576__i + 0]; ++G__201576__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201576__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__201577){
var args__8262__auto__ = cljs.core.seq(arglist__201577);
return book$sicp$book_data$fig__delegate(args__8262__auto__);
});
book$sicp$book_data$fig.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$fig__delegate;
return book$sicp$book_data$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.image = (function() { 
var book$sicp$book_data$image__delegate = function (args__8262__auto__){
var vec__201580 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201580,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201580,(1),null);
var _STAR_book_data_STAR_201581 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.image(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_201581;
}};
var book$sicp$book_data$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201582__i = 0, G__201582__a = new Array(arguments.length -  0);
while (G__201582__i < G__201582__a.length) {G__201582__a[G__201582__i] = arguments[G__201582__i + 0]; ++G__201582__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201582__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__201583){
var args__8262__auto__ = cljs.core.seq(arglist__201583);
return book$sicp$book_data$image__delegate(args__8262__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;
