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
var vec__180101 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180101,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180101,(1),null);
return general.toc.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180102__i = 0, G__180102__a = new Array(arguments.length -  0);
while (G__180102__i < G__180102__a.length) {G__180102__a[G__180102__i] = arguments[G__180102__i + 0]; ++G__180102__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180102__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__180103){
var args__8262__auto__ = cljs.core.seq(arglist__180103);
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
var vec__180105 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180105,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180105,(1),null);
return general.toc_mobile.toc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$data,book.sicp.book_data.sicp_data], 0));
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180106__i = 0, G__180106__a = new Array(arguments.length -  0);
while (G__180106__i < G__180106__a.length) {G__180106__a[G__180106__i] = arguments[G__180106__i + 0]; ++G__180106__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180106__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__180107){
var args__8262__auto__ = cljs.core.seq(arglist__180107);
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
var vec__180110 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180110,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180110,(1),null);
var _STAR_book_data_STAR_180111 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.content(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180111;
}};
var book$sicp$book_data$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180112__i = 0, G__180112__a = new Array(arguments.length -  0);
while (G__180112__i < G__180112__a.length) {G__180112__a[G__180112__i] = arguments[G__180112__i + 0]; ++G__180112__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180112__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__180113){
var args__8262__auto__ = cljs.core.seq(arglist__180113);
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
var vec__180116 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180116,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180116,(1),null);
var _STAR_book_data_STAR_180117 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.about.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"about"], 0)),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180117;
}};
var book$sicp$book_data$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180118__i = 0, G__180118__a = new Array(arguments.length -  0);
while (G__180118__i < G__180118__a.length) {G__180118__a[G__180118__i] = arguments[G__180118__i + 0]; ++G__180118__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180118__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__180119){
var args__8262__auto__ = cljs.core.seq(arglist__180119);
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
var vec__180124 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180124,(0),null);
var map__180125__$1 = ((((!((map__180125 == null)))?((((map__180125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180125):map__180125);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180125__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180124,(1),null);
var _STAR_book_data_STAR_180127 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.chapter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180127;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180128__i = 0, G__180128__a = new Array(arguments.length -  0);
while (G__180128__i < G__180128__a.length) {G__180128__a[G__180128__i] = arguments[G__180128__i + 0]; ++G__180128__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180128__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__180129){
var args__8262__auto__ = cljs.core.seq(arglist__180129);
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
var vec__180134 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180134,(0),null);
var map__180135__$1 = ((((!((map__180135 == null)))?((((map__180135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180135):map__180135);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180135__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180134,(1),null);
var _STAR_book_data_STAR_180137 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180137;
}};
var book$sicp$book_data$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180138__i = 0, G__180138__a = new Array(arguments.length -  0);
while (G__180138__i < G__180138__a.length) {G__180138__a[G__180138__i] = arguments[G__180138__i + 0]; ++G__180138__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180138__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__180139){
var args__8262__auto__ = cljs.core.seq(arglist__180139);
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
var vec__180144 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180144,(0),null);
var map__180145__$1 = ((((!((map__180145 == null)))?((((map__180145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180145):map__180145);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180145__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180144,(1),null);
var _STAR_book_data_STAR_180147 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.subsect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180147;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180148__i = 0, G__180148__a = new Array(arguments.length -  0);
while (G__180148__i < G__180148__a.length) {G__180148__a[G__180148__i] = arguments[G__180148__i + 0]; ++G__180148__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180148__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__180149){
var args__8262__auto__ = cljs.core.seq(arglist__180149);
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
var vec__180154 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180154,(0),null);
var map__180155__$1 = ((((!((map__180155 == null)))?((((map__180155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180155):map__180155);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180155__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180154,(1),null);
var _STAR_book_data_STAR_180157 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,title], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180157;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180158__i = 0, G__180158__a = new Array(arguments.length -  0);
while (G__180158__i < G__180158__a.length) {G__180158__a[G__180158__i] = arguments[G__180158__i + 0]; ++G__180158__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180158__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__180159){
var args__8262__auto__ = cljs.core.seq(arglist__180159);
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
var vec__180162 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180162,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180162,(1),null);
var _STAR_book_data_STAR_180163 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180163;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180164__i = 0, G__180164__a = new Array(arguments.length -  0);
while (G__180164__i < G__180164__a.length) {G__180164__a[G__180164__i] = arguments[G__180164__i + 0]; ++G__180164__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180164__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__180165){
var args__8262__auto__ = cljs.core.seq(arglist__180165);
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
var vec__180168 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180168,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180168,(1),null);
var _STAR_book_data_STAR_180169 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180169;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180170__i = 0, G__180170__a = new Array(arguments.length -  0);
while (G__180170__i < G__180170__a.length) {G__180170__a[G__180170__i] = arguments[G__180170__i + 0]; ++G__180170__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180170__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__180171){
var args__8262__auto__ = cljs.core.seq(arglist__180171);
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
var vec__180174 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180174,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180174,(1),null);
var _STAR_book_data_STAR_180175 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180175;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180176__i = 0, G__180176__a = new Array(arguments.length -  0);
while (G__180176__i < G__180176__a.length) {G__180176__a[G__180176__i] = arguments[G__180176__i + 0]; ++G__180176__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180176__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__180177){
var args__8262__auto__ = cljs.core.seq(arglist__180177);
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
var vec__180180 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180180,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180180,(1),null);
var _STAR_book_data_STAR_180181 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180181;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180182__i = 0, G__180182__a = new Array(arguments.length -  0);
while (G__180182__i < G__180182__a.length) {G__180182__a[G__180182__i] = arguments[G__180182__i + 0]; ++G__180182__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180182__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__180183){
var args__8262__auto__ = cljs.core.seq(arglist__180183);
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
var vec__180188 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180188,(0),null);
var map__180189__$1 = ((((!((map__180189 == null)))?((((map__180189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180189):map__180189);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180189__$1,cljs.core.cst$kw$footer);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180188,(1),null);
var _STAR_book_data_STAR_180191 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(book.general.parts.fig.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$footer,footer], 0)),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180191;
}};
var book$sicp$book_data$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180192__i = 0, G__180192__a = new Array(arguments.length -  0);
while (G__180192__i < G__180192__a.length) {G__180192__a[G__180192__i] = arguments[G__180192__i + 0]; ++G__180192__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180192__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__180193){
var args__8262__auto__ = cljs.core.seq(arglist__180193);
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
var vec__180196 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180196,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180196,(1),null);
var _STAR_book_data_STAR_180197 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(book.general.parts.image(),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_180197;
}};
var book$sicp$book_data$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180198__i = 0, G__180198__a = new Array(arguments.length -  0);
while (G__180198__i < G__180198__a.length) {G__180198__a[G__180198__i] = arguments[G__180198__i + 0]; ++G__180198__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180198__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__8262__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__180199){
var args__8262__auto__ = cljs.core.seq(arglist__180199);
return book$sicp$book_data$image__delegate(args__8262__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;
