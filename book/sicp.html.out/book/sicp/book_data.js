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
var vec__159647 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159647,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159647,(1),null);
return general.toc.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159648__i = 0, G__159648__a = new Array(arguments.length -  0);
while (G__159648__i < G__159648__a.length) {G__159648__a[G__159648__i] = arguments[G__159648__i + 0]; ++G__159648__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159648__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__159649){
var args__8262__auto__ = cljs.core.seq(arglist__159649);
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
var vec__159651 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159651,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159651,(1),null);
return general.toc_mobile.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159652__i = 0, G__159652__a = new Array(arguments.length -  0);
while (G__159652__i < G__159652__a.length) {G__159652__a[G__159652__i] = arguments[G__159652__i + 0]; ++G__159652__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159652__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__159653){
var args__8262__auto__ = cljs.core.seq(arglist__159653);
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
var vec__159656 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159656,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159656,(1),null);
var _STAR_book_data_STAR_159657 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.content(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159657;
}};
var book$sicp$book_data$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159658__i = 0, G__159658__a = new Array(arguments.length -  0);
while (G__159658__i < G__159658__a.length) {G__159658__a[G__159658__i] = arguments[G__159658__i + 0]; ++G__159658__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159658__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__159659){
var args__8262__auto__ = cljs.core.seq(arglist__159659);
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
var vec__159662 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159662,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159662,(1),null);
var _STAR_book_data_STAR_159663 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"about"], 0)),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159663;
}};
var book$sicp$book_data$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159664__i = 0, G__159664__a = new Array(arguments.length -  0);
while (G__159664__i < G__159664__a.length) {G__159664__a[G__159664__i] = arguments[G__159664__i + 0]; ++G__159664__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159664__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__159665){
var args__8262__auto__ = cljs.core.seq(arglist__159665);
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
var vec__159670 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159670,(0),null);
var map__159671__$1 = ((((!((map__159671 == null)))?((((map__159671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159671):map__159671);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159671__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159670,(1),null);
var _STAR_book_data_STAR_159673 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159673;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159674__i = 0, G__159674__a = new Array(arguments.length -  0);
while (G__159674__i < G__159674__a.length) {G__159674__a[G__159674__i] = arguments[G__159674__i + 0]; ++G__159674__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159674__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__159675){
var args__8262__auto__ = cljs.core.seq(arglist__159675);
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
var vec__159680 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159680,(0),null);
var map__159681__$1 = ((((!((map__159681 == null)))?((((map__159681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159681):map__159681);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159681__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159680,(1),null);
var _STAR_book_data_STAR_159683 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159683;
}};
var book$sicp$book_data$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159684__i = 0, G__159684__a = new Array(arguments.length -  0);
while (G__159684__i < G__159684__a.length) {G__159684__a[G__159684__i] = arguments[G__159684__i + 0]; ++G__159684__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159684__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__159685){
var args__8262__auto__ = cljs.core.seq(arglist__159685);
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
var vec__159690 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159690,(0),null);
var map__159691__$1 = ((((!((map__159691 == null)))?((((map__159691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159691):map__159691);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159691__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159690,(1),null);
var _STAR_book_data_STAR_159693 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159693;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159694__i = 0, G__159694__a = new Array(arguments.length -  0);
while (G__159694__i < G__159694__a.length) {G__159694__a[G__159694__i] = arguments[G__159694__i + 0]; ++G__159694__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159694__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__159695){
var args__8262__auto__ = cljs.core.seq(arglist__159695);
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
var vec__159700 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159700,(0),null);
var map__159701__$1 = ((((!((map__159701 == null)))?((((map__159701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159701):map__159701);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159701__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159700,(1),null);
var _STAR_book_data_STAR_159703 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159703;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159704__i = 0, G__159704__a = new Array(arguments.length -  0);
while (G__159704__i < G__159704__a.length) {G__159704__a[G__159704__i] = arguments[G__159704__i + 0]; ++G__159704__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159704__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__159705){
var args__8262__auto__ = cljs.core.seq(arglist__159705);
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
var vec__159708 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159708,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159708,(1),null);
var _STAR_book_data_STAR_159709 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159709;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159710__i = 0, G__159710__a = new Array(arguments.length -  0);
while (G__159710__i < G__159710__a.length) {G__159710__a[G__159710__i] = arguments[G__159710__i + 0]; ++G__159710__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159710__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__159711){
var args__8262__auto__ = cljs.core.seq(arglist__159711);
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
var vec__159714 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159714,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159714,(1),null);
var _STAR_book_data_STAR_159715 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159715;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159716__i = 0, G__159716__a = new Array(arguments.length -  0);
while (G__159716__i < G__159716__a.length) {G__159716__a[G__159716__i] = arguments[G__159716__i + 0]; ++G__159716__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159716__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__159717){
var args__8262__auto__ = cljs.core.seq(arglist__159717);
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
var vec__159720 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159720,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159720,(1),null);
var _STAR_book_data_STAR_159721 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159721;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159722__i = 0, G__159722__a = new Array(arguments.length -  0);
while (G__159722__i < G__159722__a.length) {G__159722__a[G__159722__i] = arguments[G__159722__i + 0]; ++G__159722__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159722__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__159723){
var args__8262__auto__ = cljs.core.seq(arglist__159723);
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
var vec__159726 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159726,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159726,(1),null);
var _STAR_book_data_STAR_159727 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159727;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159728__i = 0, G__159728__a = new Array(arguments.length -  0);
while (G__159728__i < G__159728__a.length) {G__159728__a[G__159728__i] = arguments[G__159728__i + 0]; ++G__159728__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159728__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__159729){
var args__8262__auto__ = cljs.core.seq(arglist__159729);
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
var vec__159734 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159734,(0),null);
var map__159735__$1 = ((((!((map__159735 == null)))?((((map__159735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159735):map__159735);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159735__$1,cljs.core.cst$kw$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159734,(1),null);
var _STAR_book_data_STAR_159737 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$footer,footer], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159737;
}};
var book$sicp$book_data$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159738__i = 0, G__159738__a = new Array(arguments.length -  0);
while (G__159738__i < G__159738__a.length) {G__159738__a[G__159738__i] = arguments[G__159738__i + 0]; ++G__159738__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159738__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__159739){
var args__8262__auto__ = cljs.core.seq(arglist__159739);
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
var vec__159742 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159742,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159742,(1),null);
var _STAR_book_data_STAR_159743 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.image(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_159743;
}};
var book$sicp$book_data$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159744__i = 0, G__159744__a = new Array(arguments.length -  0);
while (G__159744__i < G__159744__a.length) {G__159744__a[G__159744__i] = arguments[G__159744__i + 0]; ++G__159744__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159744__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__159745){
var args__8262__auto__ = cljs.core.seq(arglist__159745);
return book$sicp$book_data$image__delegate(args__8262__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;
