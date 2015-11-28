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
var vec__265916 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__265917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265916,(0),null);
var map__265917__$1 = ((((!((map__265917 == null)))?((((map__265917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265917):map__265917);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265917__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265916,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265919__i = 0, G__265919__a = new Array(arguments.length -  0);
while (G__265919__i < G__265919__a.length) {G__265919__a[G__265919__i] = arguments[G__265919__i + 0]; ++G__265919__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265919__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8262__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__265920){
var args__8262__auto__ = cljs.core.seq(arglist__265920);
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
var vec__265922 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265922,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265922,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265923__i = 0, G__265923__a = new Array(arguments.length -  0);
while (G__265923__i < G__265923__a.length) {G__265923__a[G__265923__i] = arguments[G__265923__i + 0]; ++G__265923__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265923__a,0);
} 
return general$sections$divider__delegate.call(this,args__8262__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__265924){
var args__8262__auto__ = cljs.core.seq(arglist__265924);
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
var vec__265926 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265926,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265926,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265927__i = 0, G__265927__a = new Array(arguments.length -  0);
while (G__265927__i < G__265927__a.length) {G__265927__a[G__265927__i] = arguments[G__265927__i + 0]; ++G__265927__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265927__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8262__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__265928){
var args__8262__auto__ = cljs.core.seq(arglist__265928);
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
var vec__265932 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__265933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265932,(0),null);
var map__265933__$1 = ((((!((map__265933 == null)))?((((map__265933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265933):map__265933);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265933__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265932,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265935__i = 0, G__265935__a = new Array(arguments.length -  0);
while (G__265935__i < G__265935__a.length) {G__265935__a[G__265935__i] = arguments[G__265935__i + 0]; ++G__265935__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265935__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8262__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__265936){
var args__8262__auto__ = cljs.core.seq(arglist__265936);
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
var vec__265938 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265938,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265938,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265939__i = 0, G__265939__a = new Array(arguments.length -  0);
while (G__265939__i < G__265939__a.length) {G__265939__a[G__265939__i] = arguments[G__265939__i + 0]; ++G__265939__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265939__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8262__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__265940){
var args__8262__auto__ = cljs.core.seq(arglist__265940);
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
var vec__265942 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265942,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265942,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__265943__i = 0, G__265943__a = new Array(arguments.length -  0);
while (G__265943__i < G__265943__a.length) {G__265943__a[G__265943__i] = arguments[G__265943__i + 0]; ++G__265943__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__265943__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8262__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__265944){
var args__8262__auto__ = cljs.core.seq(arglist__265944);
return general$sections$content_with_sidebar__delegate(args__8262__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
