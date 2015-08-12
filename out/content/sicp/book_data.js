// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.sicp.book_data');
goog.require('cljs.core');
goog.require('ui.book');
goog.require('ui.book_toc');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
content.sicp.book_data.sicp_data = tailrecursion.javelin.cell.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"short-title","short-title",-1405732809),"SICP",new cljs.core.Keyword(null,"title","title",636505583),"Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"tagline","tagline",281987682),"With Clojure!",new cljs.core.Keyword(null,"location","location",1815599388),"sicp"], null));
/**
 * @param {...*} var_args
 */
content.sicp.book_data.toc = (function() { 
var content$sicp$book_data$toc__delegate = function (args__5784__auto__){
var vec__28038 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28038,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28038,(1),null);
var _STAR_book_data_STAR_28039 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book_toc.toc.call(null);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28039;
}};
var content$sicp$book_data$toc = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28040__i = 0, G__28040__a = new Array(arguments.length -  0);
while (G__28040__i < G__28040__a.length) {G__28040__a[G__28040__i] = arguments[G__28040__i + 0]; ++G__28040__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28040__a,0);
} 
return content$sicp$book_data$toc__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$toc.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$toc.cljs$lang$applyTo = (function (arglist__28041){
var args__5784__auto__ = cljs.core.seq(arglist__28041);
return content$sicp$book_data$toc__delegate(args__5784__auto__);
});
content$sicp$book_data$toc.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$toc__delegate;
return content$sicp$book_data$toc;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.container = (function() { 
var content$sicp$book_data$container__delegate = function (args__5784__auto__){
var vec__28044 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28044,(0),null);
var kids = cljs.core.nth.call(null,vec__28044,(1),null);
var _STAR_book_data_STAR_28045 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.container.call(null),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28045;
}};
var content$sicp$book_data$container = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28046__i = 0, G__28046__a = new Array(arguments.length -  0);
while (G__28046__i < G__28046__a.length) {G__28046__a[G__28046__i] = arguments[G__28046__i + 0]; ++G__28046__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28046__a,0);
} 
return content$sicp$book_data$container__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$container.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$container.cljs$lang$applyTo = (function (arglist__28047){
var args__5784__auto__ = cljs.core.seq(arglist__28047);
return content$sicp$book_data$container__delegate(args__5784__auto__);
});
content$sicp$book_data$container.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$container__delegate;
return content$sicp$book_data$container;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.about = (function() { 
var content$sicp$book_data$about__delegate = function (args__5784__auto__){
var vec__28050 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28050,(0),null);
var kids = cljs.core.nth.call(null,vec__28050,(1),null);
var _STAR_book_data_STAR_28051 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.about.call(null,new cljs.core.Keyword(null,"title","title",636505583),"about"),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28051;
}};
var content$sicp$book_data$about = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28052__i = 0, G__28052__a = new Array(arguments.length -  0);
while (G__28052__i < G__28052__a.length) {G__28052__a[G__28052__i] = arguments[G__28052__i + 0]; ++G__28052__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28052__a,0);
} 
return content$sicp$book_data$about__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$about.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$about.cljs$lang$applyTo = (function (arglist__28053){
var args__5784__auto__ = cljs.core.seq(arglist__28053);
return content$sicp$book_data$about__delegate(args__5784__auto__);
});
content$sicp$book_data$about.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$about__delegate;
return content$sicp$book_data$about;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.chapter = (function() { 
var content$sicp$book_data$chapter__delegate = function (args__5784__auto__){
var vec__28057 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28058 = cljs.core.nth.call(null,vec__28057,(0),null);
var map__28058__$1 = ((cljs.core.seq_QMARK_.call(null,map__28058))?cljs.core.apply.call(null,cljs.core.hash_map,map__28058):map__28058);
var title = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28057,(1),null);
var _STAR_book_data_STAR_28059 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.chapter.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28059;
}};
var content$sicp$book_data$chapter = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28060__i = 0, G__28060__a = new Array(arguments.length -  0);
while (G__28060__i < G__28060__a.length) {G__28060__a[G__28060__i] = arguments[G__28060__i + 0]; ++G__28060__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28060__a,0);
} 
return content$sicp$book_data$chapter__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$chapter.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$chapter.cljs$lang$applyTo = (function (arglist__28061){
var args__5784__auto__ = cljs.core.seq(arglist__28061);
return content$sicp$book_data$chapter__delegate(args__5784__auto__);
});
content$sicp$book_data$chapter.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$chapter__delegate;
return content$sicp$book_data$chapter;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.sect = (function() { 
var content$sicp$book_data$sect__delegate = function (args__5784__auto__){
var vec__28065 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28066 = cljs.core.nth.call(null,vec__28065,(0),null);
var map__28066__$1 = ((cljs.core.seq_QMARK_.call(null,map__28066))?cljs.core.apply.call(null,cljs.core.hash_map,map__28066):map__28066);
var title = cljs.core.get.call(null,map__28066__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28065,(1),null);
var _STAR_book_data_STAR_28067 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.sect.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28067;
}};
var content$sicp$book_data$sect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28068__i = 0, G__28068__a = new Array(arguments.length -  0);
while (G__28068__i < G__28068__a.length) {G__28068__a[G__28068__i] = arguments[G__28068__i + 0]; ++G__28068__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28068__a,0);
} 
return content$sicp$book_data$sect__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$sect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$sect.cljs$lang$applyTo = (function (arglist__28069){
var args__5784__auto__ = cljs.core.seq(arglist__28069);
return content$sicp$book_data$sect__delegate(args__5784__auto__);
});
content$sicp$book_data$sect.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$sect__delegate;
return content$sicp$book_data$sect;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.subsect = (function() { 
var content$sicp$book_data$subsect__delegate = function (args__5784__auto__){
var vec__28073 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28074 = cljs.core.nth.call(null,vec__28073,(0),null);
var map__28074__$1 = ((cljs.core.seq_QMARK_.call(null,map__28074))?cljs.core.apply.call(null,cljs.core.hash_map,map__28074):map__28074);
var title = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28073,(1),null);
var _STAR_book_data_STAR_28075 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.subsect.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28075;
}};
var content$sicp$book_data$subsect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28076__i = 0, G__28076__a = new Array(arguments.length -  0);
while (G__28076__i < G__28076__a.length) {G__28076__a[G__28076__i] = arguments[G__28076__i + 0]; ++G__28076__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28076__a,0);
} 
return content$sicp$book_data$subsect__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$subsect.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$subsect.cljs$lang$applyTo = (function (arglist__28077){
var args__5784__auto__ = cljs.core.seq(arglist__28077);
return content$sicp$book_data$subsect__delegate(args__5784__auto__);
});
content$sicp$book_data$subsect.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$subsect__delegate;
return content$sicp$book_data$subsect;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.ssub = (function() { 
var content$sicp$book_data$ssub__delegate = function (args__5784__auto__){
var vec__28081 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28082 = cljs.core.nth.call(null,vec__28081,(0),null);
var map__28082__$1 = ((cljs.core.seq_QMARK_.call(null,map__28082))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);
var title = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28081,(1),null);
var _STAR_book_data_STAR_28083 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.ssub.call(null,new cljs.core.Keyword(null,"title","title",636505583),title),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28083;
}};
var content$sicp$book_data$ssub = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28084__i = 0, G__28084__a = new Array(arguments.length -  0);
while (G__28084__i < G__28084__a.length) {G__28084__a[G__28084__i] = arguments[G__28084__i + 0]; ++G__28084__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28084__a,0);
} 
return content$sicp$book_data$ssub__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$ssub.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$ssub.cljs$lang$applyTo = (function (arglist__28085){
var args__5784__auto__ = cljs.core.seq(arglist__28085);
return content$sicp$book_data$ssub__delegate(args__5784__auto__);
});
content$sicp$book_data$ssub.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$ssub__delegate;
return content$sicp$book_data$ssub;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.exercises = (function() { 
var content$sicp$book_data$exercises__delegate = function (args__5784__auto__){
var vec__28088 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28088,(0),null);
var kids = cljs.core.nth.call(null,vec__28088,(1),null);
var _STAR_book_data_STAR_28089 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercises.call(null,attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28089;
}};
var content$sicp$book_data$exercises = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28090__i = 0, G__28090__a = new Array(arguments.length -  0);
while (G__28090__i < G__28090__a.length) {G__28090__a[G__28090__i] = arguments[G__28090__i + 0]; ++G__28090__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28090__a,0);
} 
return content$sicp$book_data$exercises__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$exercises.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercises.cljs$lang$applyTo = (function (arglist__28091){
var args__5784__auto__ = cljs.core.seq(arglist__28091);
return content$sicp$book_data$exercises__delegate(args__5784__auto__);
});
content$sicp$book_data$exercises.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$exercises__delegate;
return content$sicp$book_data$exercises;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.exercise = (function() { 
var content$sicp$book_data$exercise__delegate = function (args__5784__auto__){
var vec__28094 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28094,(0),null);
var kids = cljs.core.nth.call(null,vec__28094,(1),null);
var _STAR_book_data_STAR_28095 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.exercise.call(null,attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28095;
}};
var content$sicp$book_data$exercise = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28096__i = 0, G__28096__a = new Array(arguments.length -  0);
while (G__28096__i < G__28096__a.length) {G__28096__a[G__28096__i] = arguments[G__28096__i + 0]; ++G__28096__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28096__a,0);
} 
return content$sicp$book_data$exercise__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$exercise.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$exercise.cljs$lang$applyTo = (function (arglist__28097){
var args__5784__auto__ = cljs.core.seq(arglist__28097);
return content$sicp$book_data$exercise__delegate(args__5784__auto__);
});
content$sicp$book_data$exercise.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$exercise__delegate;
return content$sicp$book_data$exercise;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.q_a = (function() { 
var content$sicp$book_data$q_a__delegate = function (args__5784__auto__){
var vec__28100 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28100,(0),null);
var kids = cljs.core.nth.call(null,vec__28100,(1),null);
var _STAR_book_data_STAR_28101 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.q_a.call(null,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28101;
}};
var content$sicp$book_data$q_a = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28102__i = 0, G__28102__a = new Array(arguments.length -  0);
while (G__28102__i < G__28102__a.length) {G__28102__a[G__28102__i] = arguments[G__28102__i + 0]; ++G__28102__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28102__a,0);
} 
return content$sicp$book_data$q_a__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$q_a.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$q_a.cljs$lang$applyTo = (function (arglist__28103){
var args__5784__auto__ = cljs.core.seq(arglist__28103);
return content$sicp$book_data$q_a__delegate(args__5784__auto__);
});
content$sicp$book_data$q_a.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$q_a__delegate;
return content$sicp$book_data$q_a;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.footnote = (function() { 
var content$sicp$book_data$footnote__delegate = function (args__5784__auto__){
var vec__28106 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28106,(0),null);
var kids = cljs.core.nth.call(null,vec__28106,(1),null);
var _STAR_book_data_STAR_28107 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return ui.book.footnote.call(null,attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28107;
}};
var content$sicp$book_data$footnote = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28108__i = 0, G__28108__a = new Array(arguments.length -  0);
while (G__28108__i < G__28108__a.length) {G__28108__a[G__28108__i] = arguments[G__28108__i + 0]; ++G__28108__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28108__a,0);
} 
return content$sicp$book_data$footnote__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$footnote.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$footnote.cljs$lang$applyTo = (function (arglist__28109){
var args__5784__auto__ = cljs.core.seq(arglist__28109);
return content$sicp$book_data$footnote__delegate(args__5784__auto__);
});
content$sicp$book_data$footnote.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$footnote__delegate;
return content$sicp$book_data$footnote;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.fig = (function() { 
var content$sicp$book_data$fig__delegate = function (args__5784__auto__){
var vec__28113 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28114 = cljs.core.nth.call(null,vec__28113,(0),null);
var map__28114__$1 = ((cljs.core.seq_QMARK_.call(null,map__28114))?cljs.core.apply.call(null,cljs.core.hash_map,map__28114):map__28114);
var footer = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var kids = cljs.core.nth.call(null,vec__28113,(1),null);
var _STAR_book_data_STAR_28115 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.fig.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390),footer),kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28115;
}};
var content$sicp$book_data$fig = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28116__i = 0, G__28116__a = new Array(arguments.length -  0);
while (G__28116__i < G__28116__a.length) {G__28116__a[G__28116__i] = arguments[G__28116__i + 0]; ++G__28116__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28116__a,0);
} 
return content$sicp$book_data$fig__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$fig.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$fig.cljs$lang$applyTo = (function (arglist__28117){
var args__5784__auto__ = cljs.core.seq(arglist__28117);
return content$sicp$book_data$fig__delegate(args__5784__auto__);
});
content$sicp$book_data$fig.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$fig__delegate;
return content$sicp$book_data$fig;
})()
;
/**
 * @param {...*} var_args
 */
content.sicp.book_data.image = (function() { 
var content$sicp$book_data$image__delegate = function (args__5784__auto__){
var vec__28120 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28120,(0),null);
var kids = cljs.core.nth.call(null,vec__28120,(1),null);
var _STAR_book_data_STAR_28121 = ui.book._STAR_book_data_STAR_;
ui.book._STAR_book_data_STAR_ = content.sicp.book_data.sicp_data;

try{return cljs.core.apply.call(null,ui.book.image.call(null),attr,kids);
}finally {ui.book._STAR_book_data_STAR_ = _STAR_book_data_STAR_28121;
}};
var content$sicp$book_data$image = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28122__i = 0, G__28122__a = new Array(arguments.length -  0);
while (G__28122__i < G__28122__a.length) {G__28122__a[G__28122__i] = arguments[G__28122__i + 0]; ++G__28122__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28122__a,0);
} 
return content$sicp$book_data$image__delegate.call(this,args__5784__auto__);};
content$sicp$book_data$image.cljs$lang$maxFixedArity = 0;
content$sicp$book_data$image.cljs$lang$applyTo = (function (arglist__28123){
var args__5784__auto__ = cljs.core.seq(arglist__28123);
return content$sicp$book_data$image__delegate(args__5784__auto__);
});
content$sicp$book_data$image.cljs$core$IFn$_invoke$arity$variadic = content$sicp$book_data$image__delegate;
return content$sicp$book_data$image;
})()
;

//# sourceMappingURL=book_data.js.map