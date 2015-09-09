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
var vec__182971 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182971,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182971,(1),null);
return general.toc.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__182972__i = 0, G__182972__a = new Array(arguments.length -  0);
while (G__182972__i < G__182972__a.length) {G__182972__a[G__182972__i] = arguments[G__182972__i + 0]; ++G__182972__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__182972__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__182973){
var args__8262__auto__ = cljs.core.seq(arglist__182973);
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
var vec__182975 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182975,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182975,(1),null);
return general.toc_mobile.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__182976__i = 0, G__182976__a = new Array(arguments.length -  0);
while (G__182976__i < G__182976__a.length) {G__182976__a[G__182976__i] = arguments[G__182976__i + 0]; ++G__182976__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__182976__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__182977){
var args__8262__auto__ = cljs.core.seq(arglist__182977);
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
var vec__182980 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182980,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182980,(1),null);
var _STAR_book_data_STAR_182981 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.content(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_182981;
}};
var book$sicp$book_data$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__182982__i = 0, G__182982__a = new Array(arguments.length -  0);
while (G__182982__i < G__182982__a.length) {G__182982__a[G__182982__i] = arguments[G__182982__i + 0]; ++G__182982__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__182982__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__182983){
var args__8262__auto__ = cljs.core.seq(arglist__182983);
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
var vec__182986 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182986,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182986,(1),null);
var _STAR_book_data_STAR_182987 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"about"], 0)),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_182987;
}};
var book$sicp$book_data$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__182988__i = 0, G__182988__a = new Array(arguments.length -  0);
while (G__182988__i < G__182988__a.length) {G__182988__a[G__182988__i] = arguments[G__182988__i + 0]; ++G__182988__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__182988__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__182989){
var args__8262__auto__ = cljs.core.seq(arglist__182989);
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
var vec__182994 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__182995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182994,(0),null);
var map__182995__$1 = ((((!((map__182995 == null)))?((((map__182995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__182995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__182995):map__182995);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__182995__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__182994,(1),null);
var _STAR_book_data_STAR_182997 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_182997;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__182998__i = 0, G__182998__a = new Array(arguments.length -  0);
while (G__182998__i < G__182998__a.length) {G__182998__a[G__182998__i] = arguments[G__182998__i + 0]; ++G__182998__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__182998__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__182999){
var args__8262__auto__ = cljs.core.seq(arglist__182999);
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
var vec__183004 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183004,(0),null);
var map__183005__$1 = ((((!((map__183005 == null)))?((((map__183005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183005):map__183005);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183005__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183004,(1),null);
var _STAR_book_data_STAR_183007 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183007;
}};
var book$sicp$book_data$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183008__i = 0, G__183008__a = new Array(arguments.length -  0);
while (G__183008__i < G__183008__a.length) {G__183008__a[G__183008__i] = arguments[G__183008__i + 0]; ++G__183008__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183008__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__183009){
var args__8262__auto__ = cljs.core.seq(arglist__183009);
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
var vec__183014 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183014,(0),null);
var map__183015__$1 = ((((!((map__183015 == null)))?((((map__183015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183015):map__183015);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183015__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183014,(1),null);
var _STAR_book_data_STAR_183017 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183017;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183018__i = 0, G__183018__a = new Array(arguments.length -  0);
while (G__183018__i < G__183018__a.length) {G__183018__a[G__183018__i] = arguments[G__183018__i + 0]; ++G__183018__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183018__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__183019){
var args__8262__auto__ = cljs.core.seq(arglist__183019);
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
var vec__183024 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183024,(0),null);
var map__183025__$1 = ((((!((map__183025 == null)))?((((map__183025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183025):map__183025);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183025__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183024,(1),null);
var _STAR_book_data_STAR_183027 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183027;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183028__i = 0, G__183028__a = new Array(arguments.length -  0);
while (G__183028__i < G__183028__a.length) {G__183028__a[G__183028__i] = arguments[G__183028__i + 0]; ++G__183028__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183028__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__183029){
var args__8262__auto__ = cljs.core.seq(arglist__183029);
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
var vec__183032 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183032,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183032,(1),null);
var _STAR_book_data_STAR_183033 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183033;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183034__i = 0, G__183034__a = new Array(arguments.length -  0);
while (G__183034__i < G__183034__a.length) {G__183034__a[G__183034__i] = arguments[G__183034__i + 0]; ++G__183034__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183034__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__183035){
var args__8262__auto__ = cljs.core.seq(arglist__183035);
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
var vec__183038 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183038,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183038,(1),null);
var _STAR_book_data_STAR_183039 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183039;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183040__i = 0, G__183040__a = new Array(arguments.length -  0);
while (G__183040__i < G__183040__a.length) {G__183040__a[G__183040__i] = arguments[G__183040__i + 0]; ++G__183040__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183040__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__183041){
var args__8262__auto__ = cljs.core.seq(arglist__183041);
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
var vec__183044 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183044,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183044,(1),null);
var _STAR_book_data_STAR_183045 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183045;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183046__i = 0, G__183046__a = new Array(arguments.length -  0);
while (G__183046__i < G__183046__a.length) {G__183046__a[G__183046__i] = arguments[G__183046__i + 0]; ++G__183046__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183046__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__183047){
var args__8262__auto__ = cljs.core.seq(arglist__183047);
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
var vec__183050 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183050,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183050,(1),null);
var _STAR_book_data_STAR_183051 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183051;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183052__i = 0, G__183052__a = new Array(arguments.length -  0);
while (G__183052__i < G__183052__a.length) {G__183052__a[G__183052__i] = arguments[G__183052__i + 0]; ++G__183052__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183052__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__183053){
var args__8262__auto__ = cljs.core.seq(arglist__183053);
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
var vec__183058 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183058,(0),null);
var map__183059__$1 = ((((!((map__183059 == null)))?((((map__183059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183059):map__183059);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183059__$1,cljs.core.cst$kw$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183058,(1),null);
var _STAR_book_data_STAR_183061 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$footer,footer], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183061;
}};
var book$sicp$book_data$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183062__i = 0, G__183062__a = new Array(arguments.length -  0);
while (G__183062__i < G__183062__a.length) {G__183062__a[G__183062__i] = arguments[G__183062__i + 0]; ++G__183062__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183062__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__183063){
var args__8262__auto__ = cljs.core.seq(arglist__183063);
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
var vec__183066 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183066,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183066,(1),null);
var _STAR_book_data_STAR_183067 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.image(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_183067;
}};
var book$sicp$book_data$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183068__i = 0, G__183068__a = new Array(arguments.length -  0);
while (G__183068__i < G__183068__a.length) {G__183068__a[G__183068__i] = arguments[G__183068__i + 0]; ++G__183068__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183068__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__183069){
var args__8262__auto__ = cljs.core.seq(arglist__183069);
return book$sicp$book_data$image__delegate(args__8262__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;
