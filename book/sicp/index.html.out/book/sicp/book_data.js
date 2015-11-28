// Compiled by ClojureScript 1.7.48 {}
goog.provide('book.sicp.book_data');
goog.require('cljs.core');
goog.require('book.general.parts');
goog.require('general.toc');
goog.require('general.toc_mobile');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
book.sicp.book_data.sicp_data = tailrecursion.javelin.cell.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"toc-hierarchy","toc-hierarchy",-863557290),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"sect","sect",709352997),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"ssub","ssub",1000444057)],null)),new cljs.core.Keyword(null,"short-title","short-title",-1405732809),"SICP",new cljs.core.Keyword(null,"title","title",636505583),"Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"tagline","tagline",281987682),"With Clojure!",new cljs.core.Keyword(null,"location","location",1815599388),"sicp"], null));
/**
 * @param {...*} var_args
 */
book.sicp.book_data.toc = (function() { 
var book$sicp$book_data$toc__delegate = function (args__6627__auto__){
var vec__17180 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__17180,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17180,(1),null);
return general.toc.toc.call(null,new cljs.core.Keyword(null,"data","data",-232669377),book.sicp.book_data.sicp_data);
};
var book$sicp$book_data$toc = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17181__i = 0, G__17181__a = new Array(arguments.length -  0);
while (G__17181__i < G__17181__a.length) {G__17181__a[G__17181__i] = arguments[G__17181__i + 0]; ++G__17181__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17181__a,0);
} 
return book$sicp$book_data$toc__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__17182){
var args__6627__auto__ = cljs.core.seq(arglist__17182);
return book$sicp$book_data$toc__delegate(args__6627__auto__);
});
book$sicp$book_data$toc.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc__delegate;
return book$sicp$book_data$toc;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.toc_mobile = (function() { 
var book$sicp$book_data$toc_mobile__delegate = function (args__6627__auto__){
var vec__17184 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__17184,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17184,(1),null);
return general.toc_mobile.toc.call(null,new cljs.core.Keyword(null,"data","data",-232669377),book.sicp.book_data.sicp_data);
};
var book$sicp$book_data$toc_mobile = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17185__i = 0, G__17185__a = new Array(arguments.length -  0);
while (G__17185__i < G__17185__a.length) {G__17185__a[G__17185__i] = arguments[G__17185__i + 0]; ++G__17185__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17185__a,0);
} 
return book$sicp$book_data$toc_mobile__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$toc_mobile.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$toc_mobile.cljs$lang$applyTo = (function (arglist__17186){
var args__6627__auto__ = cljs.core.seq(arglist__17186);
return book$sicp$book_data$toc_mobile__delegate(args__6627__auto__);
});
book$sicp$book_data$toc_mobile.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$toc_mobile__delegate;
return book$sicp$book_data$toc_mobile;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.content = (function() { 
var book$sicp$book_data$content__delegate = function (args__6627__auto__){
var vec__17189 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17189,(0),null);
var kids = cljs.core.nth.call(null,vec__17189,(1),null);
var _STAR_book_data_STAR_17190 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.content.call(null),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17190;
}};
var book$sicp$book_data$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17191__i = 0, G__17191__a = new Array(arguments.length -  0);
while (G__17191__i < G__17191__a.length) {G__17191__a[G__17191__i] = arguments[G__17191__i + 0]; ++G__17191__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17191__a,0);
} 
return book$sicp$book_data$content__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$content.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$content.cljs$lang$applyTo = (function (arglist__17192){
var args__6627__auto__ = cljs.core.seq(arglist__17192);
return book$sicp$book_data$content__delegate(args__6627__auto__);
});
book$sicp$book_data$content.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$content__delegate;
return book$sicp$book_data$content;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.about = (function() { 
var book$sicp$book_data$about__delegate = function (args__6627__auto__){
var vec__17195 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17195,(0),null);
var kids = cljs.core.nth.call(null,vec__17195,(1),null);
var _STAR_book_data_STAR_17196 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.about.call(null,new cljs.core.Keyword(null,"title","title",636505583),"about"),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17196;
}};
var book$sicp$book_data$about = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17197__i = 0, G__17197__a = new Array(arguments.length -  0);
while (G__17197__i < G__17197__a.length) {G__17197__a[G__17197__i] = arguments[G__17197__i + 0]; ++G__17197__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17197__a,0);
} 
return book$sicp$book_data$about__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__17198){
var args__6627__auto__ = cljs.core.seq(arglist__17198);
return book$sicp$book_data$about__delegate(args__6627__auto__);
});
book$sicp$book_data$about.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$about__delegate;
return book$sicp$book_data$about;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.chapter = (function() { 
var book$sicp$book_data$chapter__delegate = function (args__6627__auto__){
var vec__17203 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17204 = cljs.core.nth.call(null,vec__17203,(0),null);
var map__17204__$1 = ((((!((map__17204 == null)))?((((map__17204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17204):map__17204);
var title = cljs.core.get.call(null,map__17204__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__17203,(1),null);
var _STAR_book_data_STAR_17206 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.chapter.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17206;
}};
var book$sicp$book_data$chapter = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17207__i = 0, G__17207__a = new Array(arguments.length -  0);
while (G__17207__i < G__17207__a.length) {G__17207__a[G__17207__i] = arguments[G__17207__i + 0]; ++G__17207__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17207__a,0);
} 
return book$sicp$book_data$chapter__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__17208){
var args__6627__auto__ = cljs.core.seq(arglist__17208);
return book$sicp$book_data$chapter__delegate(args__6627__auto__);
});
book$sicp$book_data$chapter.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$chapter__delegate;
return book$sicp$book_data$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.sect = (function() { 
var book$sicp$book_data$sect__delegate = function (args__6627__auto__){
var vec__17213 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17214 = cljs.core.nth.call(null,vec__17213,(0),null);
var map__17214__$1 = ((((!((map__17214 == null)))?((((map__17214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17214):map__17214);
var title = cljs.core.get.call(null,map__17214__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__17213,(1),null);
var _STAR_book_data_STAR_17216 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.sect.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17216;
}};
var book$sicp$book_data$sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17217__i = 0, G__17217__a = new Array(arguments.length -  0);
while (G__17217__i < G__17217__a.length) {G__17217__a[G__17217__i] = arguments[G__17217__i + 0]; ++G__17217__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17217__a,0);
} 
return book$sicp$book_data$sect__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__17218){
var args__6627__auto__ = cljs.core.seq(arglist__17218);
return book$sicp$book_data$sect__delegate(args__6627__auto__);
});
book$sicp$book_data$sect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$sect__delegate;
return book$sicp$book_data$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.subsect = (function() { 
var book$sicp$book_data$subsect__delegate = function (args__6627__auto__){
var vec__17223 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17224 = cljs.core.nth.call(null,vec__17223,(0),null);
var map__17224__$1 = ((((!((map__17224 == null)))?((((map__17224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17224):map__17224);
var title = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__17223,(1),null);
var _STAR_book_data_STAR_17226 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.subsect.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17226;
}};
var book$sicp$book_data$subsect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17227__i = 0, G__17227__a = new Array(arguments.length -  0);
while (G__17227__i < G__17227__a.length) {G__17227__a[G__17227__i] = arguments[G__17227__i + 0]; ++G__17227__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17227__a,0);
} 
return book$sicp$book_data$subsect__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__17228){
var args__6627__auto__ = cljs.core.seq(arglist__17228);
return book$sicp$book_data$subsect__delegate(args__6627__auto__);
});
book$sicp$book_data$subsect.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$subsect__delegate;
return book$sicp$book_data$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.ssub = (function() { 
var book$sicp$book_data$ssub__delegate = function (args__6627__auto__){
var vec__17233 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17234 = cljs.core.nth.call(null,vec__17233,(0),null);
var map__17234__$1 = ((((!((map__17234 == null)))?((((map__17234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17234):map__17234);
var title = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__17233,(1),null);
var _STAR_book_data_STAR_17236 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.ssub.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17236;
}};
var book$sicp$book_data$ssub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17237__i = 0, G__17237__a = new Array(arguments.length -  0);
while (G__17237__i < G__17237__a.length) {G__17237__a[G__17237__i] = arguments[G__17237__i + 0]; ++G__17237__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17237__a,0);
} 
return book$sicp$book_data$ssub__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__17238){
var args__6627__auto__ = cljs.core.seq(arglist__17238);
return book$sicp$book_data$ssub__delegate(args__6627__auto__);
});
book$sicp$book_data$ssub.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$ssub__delegate;
return book$sicp$book_data$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercises = (function() { 
var book$sicp$book_data$exercises__delegate = function (args__6627__auto__){
var vec__17241 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17241,(0),null);
var kids = cljs.core.nth.call(null,vec__17241,(1),null);
var _STAR_book_data_STAR_17242 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercises.call(null,attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17242;
}};
var book$sicp$book_data$exercises = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17243__i = 0, G__17243__a = new Array(arguments.length -  0);
while (G__17243__i < G__17243__a.length) {G__17243__a[G__17243__i] = arguments[G__17243__i + 0]; ++G__17243__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17243__a,0);
} 
return book$sicp$book_data$exercises__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__17244){
var args__6627__auto__ = cljs.core.seq(arglist__17244);
return book$sicp$book_data$exercises__delegate(args__6627__auto__);
});
book$sicp$book_data$exercises.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercises__delegate;
return book$sicp$book_data$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.exercise = (function() { 
var book$sicp$book_data$exercise__delegate = function (args__6627__auto__){
var vec__17247 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17247,(0),null);
var kids = cljs.core.nth.call(null,vec__17247,(1),null);
var _STAR_book_data_STAR_17248 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.exercise.call(null,attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17248;
}};
var book$sicp$book_data$exercise = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17249__i = 0, G__17249__a = new Array(arguments.length -  0);
while (G__17249__i < G__17249__a.length) {G__17249__a[G__17249__i] = arguments[G__17249__i + 0]; ++G__17249__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17249__a,0);
} 
return book$sicp$book_data$exercise__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__17250){
var args__6627__auto__ = cljs.core.seq(arglist__17250);
return book$sicp$book_data$exercise__delegate(args__6627__auto__);
});
book$sicp$book_data$exercise.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$exercise__delegate;
return book$sicp$book_data$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.q_a = (function() { 
var book$sicp$book_data$q_a__delegate = function (args__6627__auto__){
var vec__17253 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__17253,(0),null);
var kids = cljs.core.nth.call(null,vec__17253,(1),null);
var _STAR_book_data_STAR_17254 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.q_a.call(null,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17254;
}};
var book$sicp$book_data$q_a = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17255__i = 0, G__17255__a = new Array(arguments.length -  0);
while (G__17255__i < G__17255__a.length) {G__17255__a[G__17255__i] = arguments[G__17255__i + 0]; ++G__17255__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17255__a,0);
} 
return book$sicp$book_data$q_a__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__17256){
var args__6627__auto__ = cljs.core.seq(arglist__17256);
return book$sicp$book_data$q_a__delegate(args__6627__auto__);
});
book$sicp$book_data$q_a.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$q_a__delegate;
return book$sicp$book_data$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.footnote = (function() { 
var book$sicp$book_data$footnote__delegate = function (args__6627__auto__){
var vec__17259 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17259,(0),null);
var kids = cljs.core.nth.call(null,vec__17259,(1),null);
var _STAR_book_data_STAR_17260 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return book.general.parts.footnote.call(null,attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17260;
}};
var book$sicp$book_data$footnote = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17261__i = 0, G__17261__a = new Array(arguments.length -  0);
while (G__17261__i < G__17261__a.length) {G__17261__a[G__17261__i] = arguments[G__17261__i + 0]; ++G__17261__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17261__a,0);
} 
return book$sicp$book_data$footnote__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__17262){
var args__6627__auto__ = cljs.core.seq(arglist__17262);
return book$sicp$book_data$footnote__delegate(args__6627__auto__);
});
book$sicp$book_data$footnote.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$footnote__delegate;
return book$sicp$book_data$footnote;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.fig = (function() { 
var book$sicp$book_data$fig__delegate = function (args__6627__auto__){
var vec__17267 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17268 = cljs.core.nth.call(null,vec__17267,(0),null);
var map__17268__$1 = ((((!((map__17268 == null)))?((((map__17268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17268):map__17268);
var footer = cljs.core.get.call(null,map__17268__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var kids = cljs.core.nth.call(null,vec__17267,(1),null);
var _STAR_book_data_STAR_17270 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.fig.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390),footer),kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17270;
}};
var book$sicp$book_data$fig = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17271__i = 0, G__17271__a = new Array(arguments.length -  0);
while (G__17271__i < G__17271__a.length) {G__17271__a[G__17271__i] = arguments[G__17271__i + 0]; ++G__17271__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17271__a,0);
} 
return book$sicp$book_data$fig__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__17272){
var args__6627__auto__ = cljs.core.seq(arglist__17272);
return book$sicp$book_data$fig__delegate(args__6627__auto__);
});
book$sicp$book_data$fig.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$fig__delegate;
return book$sicp$book_data$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.sicp.book_data.image = (function() { 
var book$sicp$book_data$image__delegate = function (args__6627__auto__){
var vec__17275 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__17275,(0),null);
var kids = cljs.core.nth.call(null,vec__17275,(1),null);
var _STAR_book_data_STAR_17276 = book.general.parts._STAR_book_data_STAR_;
book.general.parts._STAR_book_data_STAR_ = book.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,book.general.parts.image.call(null),attr,kids);
}finally {book.general.parts._STAR_book_data_STAR_ = _STAR_book_data_STAR_17276;
}};
var book$sicp$book_data$image = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17277__i = 0, G__17277__a = new Array(arguments.length -  0);
while (G__17277__i < G__17277__a.length) {G__17277__a[G__17277__i] = arguments[G__17277__i + 0]; ++G__17277__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17277__a,0);
} 
return book$sicp$book_data$image__delegate.call(this,args__6627__auto__);};
book$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
book$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__17278){
var args__6627__auto__ = cljs.core.seq(arglist__17278);
return book$sicp$book_data$image__delegate(args__6627__auto__);
});
book$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = book$sicp$book_data$image__delegate;
return book$sicp$book_data$image;
})()
;

//# sourceMappingURL=book_data.js.map