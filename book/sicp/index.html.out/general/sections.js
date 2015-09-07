// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.sections');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('general.background');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.sections.fixed_background_img = (function() { 
var general$sections$fixed_background_img__delegate = function (args__8262__auto__){
var vec__244532 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__244533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244532,(0),null);
var map__244533__$1 = ((((!((map__244533 == null)))?((((map__244533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__244533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__244533):map__244533);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244533__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244532,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244535__i = 0, G__244535__a = new Array(arguments.length -  0);
while (G__244535__i < G__244535__a.length) {G__244535__a[G__244535__i] = arguments[G__244535__i + 0]; ++G__244535__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244535__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8262__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__244536){
var args__8262__auto__ = cljs.core.seq(arglist__244536);
return general$sections$fixed_background_img__delegate(args__8262__auto__);
});
general$sections$fixed_background_img.cljs$core$IFn$_invoke$arity$variadic = general$sections$fixed_background_img__delegate;
return general$sections$fixed_background_img;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.divider = (function() { 
var general$sections$divider__delegate = function (args__8262__auto__){
var vec__244538 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244538,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244538,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244539__i = 0, G__244539__a = new Array(arguments.length -  0);
while (G__244539__i < G__244539__a.length) {G__244539__a[G__244539__i] = arguments[G__244539__i + 0]; ++G__244539__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244539__a,0);
} 
return general$sections$divider__delegate.call(this,args__8262__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__244540){
var args__8262__auto__ = cljs.core.seq(arglist__244540);
return general$sections$divider__delegate(args__8262__auto__);
});
general$sections$divider.cljs$core$IFn$_invoke$arity$variadic = general$sections$divider__delegate;
return general$sections$divider;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.bubble = (function() { 
var general$sections$bubble__delegate = function (args__8262__auto__){
var vec__244542 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244542,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244542,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244543__i = 0, G__244543__a = new Array(arguments.length -  0);
while (G__244543__i < G__244543__a.length) {G__244543__a[G__244543__i] = arguments[G__244543__i + 0]; ++G__244543__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244543__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8262__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__244544){
var args__8262__auto__ = cljs.core.seq(arglist__244544);
return general$sections$bubble__delegate(args__8262__auto__);
});
general$sections$bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$bubble__delegate;
return general$sections$bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.img_bubble = (function() { 
var general$sections$img_bubble__delegate = function (args__8262__auto__){
var vec__244548 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__244549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244548,(0),null);
var map__244549__$1 = ((((!((map__244549 == null)))?((((map__244549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__244549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__244549):map__244549);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244549__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244548,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244551__i = 0, G__244551__a = new Array(arguments.length -  0);
while (G__244551__i < G__244551__a.length) {G__244551__a[G__244551__i] = arguments[G__244551__i + 0]; ++G__244551__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244551__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8262__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__244552){
var args__8262__auto__ = cljs.core.seq(arglist__244552);
return general$sections$img_bubble__delegate(args__8262__auto__);
});
general$sections$img_bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$img_bubble__delegate;
return general$sections$img_bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.sidebar = (function() { 
var general$sections$sidebar__delegate = function (args__8262__auto__){
var vec__244554 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244554,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244554,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244555__i = 0, G__244555__a = new Array(arguments.length -  0);
while (G__244555__i < G__244555__a.length) {G__244555__a[G__244555__i] = arguments[G__244555__i + 0]; ++G__244555__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244555__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8262__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__244556){
var args__8262__auto__ = cljs.core.seq(arglist__244556);
return general$sections$sidebar__delegate(args__8262__auto__);
});
general$sections$sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$sidebar__delegate;
return general$sections$sidebar;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.content_with_sidebar = (function() { 
var general$sections$content_with_sidebar__delegate = function (args__8262__auto__){
var vec__244558 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244558,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__244558,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__244559__i = 0, G__244559__a = new Array(arguments.length -  0);
while (G__244559__i < G__244559__a.length) {G__244559__a[G__244559__i] = arguments[G__244559__i + 0]; ++G__244559__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__244559__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8262__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__244560){
var args__8262__auto__ = cljs.core.seq(arglist__244560);
return general$sections$content_with_sidebar__delegate(args__8262__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
