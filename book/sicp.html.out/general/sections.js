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
var vec__224078 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__224079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224078,(0),null);
var map__224079__$1 = ((((!((map__224079 == null)))?((((map__224079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__224079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__224079):map__224079);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__224079__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224078,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224081__i = 0, G__224081__a = new Array(arguments.length -  0);
while (G__224081__i < G__224081__a.length) {G__224081__a[G__224081__i] = arguments[G__224081__i + 0]; ++G__224081__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224081__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8262__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__224082){
var args__8262__auto__ = cljs.core.seq(arglist__224082);
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
var vec__224084 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224084,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224084,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224085__i = 0, G__224085__a = new Array(arguments.length -  0);
while (G__224085__i < G__224085__a.length) {G__224085__a[G__224085__i] = arguments[G__224085__i + 0]; ++G__224085__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224085__a,0);
} 
return general$sections$divider__delegate.call(this,args__8262__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__224086){
var args__8262__auto__ = cljs.core.seq(arglist__224086);
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
var vec__224088 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224088,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224088,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224089__i = 0, G__224089__a = new Array(arguments.length -  0);
while (G__224089__i < G__224089__a.length) {G__224089__a[G__224089__i] = arguments[G__224089__i + 0]; ++G__224089__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224089__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8262__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__224090){
var args__8262__auto__ = cljs.core.seq(arglist__224090);
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
var vec__224094 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__224095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224094,(0),null);
var map__224095__$1 = ((((!((map__224095 == null)))?((((map__224095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__224095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__224095):map__224095);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__224095__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224094,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224097__i = 0, G__224097__a = new Array(arguments.length -  0);
while (G__224097__i < G__224097__a.length) {G__224097__a[G__224097__i] = arguments[G__224097__i + 0]; ++G__224097__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224097__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8262__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__224098){
var args__8262__auto__ = cljs.core.seq(arglist__224098);
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
var vec__224100 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224100,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224100,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224101__i = 0, G__224101__a = new Array(arguments.length -  0);
while (G__224101__i < G__224101__a.length) {G__224101__a[G__224101__i] = arguments[G__224101__i + 0]; ++G__224101__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224101__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8262__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__224102){
var args__8262__auto__ = cljs.core.seq(arglist__224102);
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
var vec__224104 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224104,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__224104,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__224105__i = 0, G__224105__a = new Array(arguments.length -  0);
while (G__224105__i < G__224105__a.length) {G__224105__a[G__224105__i] = arguments[G__224105__i + 0]; ++G__224105__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__224105__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8262__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__224106){
var args__8262__auto__ = cljs.core.seq(arglist__224106);
return general$sections$content_with_sidebar__delegate(args__8262__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
