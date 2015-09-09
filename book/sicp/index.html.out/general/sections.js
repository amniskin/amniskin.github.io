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
var vec__247402 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__247403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247402,(0),null);
var map__247403__$1 = ((((!((map__247403 == null)))?((((map__247403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__247403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__247403):map__247403);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__247403__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247402,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247405__i = 0, G__247405__a = new Array(arguments.length -  0);
while (G__247405__i < G__247405__a.length) {G__247405__a[G__247405__i] = arguments[G__247405__i + 0]; ++G__247405__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247405__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8262__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__247406){
var args__8262__auto__ = cljs.core.seq(arglist__247406);
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
var vec__247408 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247408,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247408,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247409__i = 0, G__247409__a = new Array(arguments.length -  0);
while (G__247409__i < G__247409__a.length) {G__247409__a[G__247409__i] = arguments[G__247409__i + 0]; ++G__247409__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247409__a,0);
} 
return general$sections$divider__delegate.call(this,args__8262__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__247410){
var args__8262__auto__ = cljs.core.seq(arglist__247410);
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
var vec__247412 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247412,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247412,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247413__i = 0, G__247413__a = new Array(arguments.length -  0);
while (G__247413__i < G__247413__a.length) {G__247413__a[G__247413__i] = arguments[G__247413__i + 0]; ++G__247413__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247413__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8262__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__247414){
var args__8262__auto__ = cljs.core.seq(arglist__247414);
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
var vec__247418 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__247419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247418,(0),null);
var map__247419__$1 = ((((!((map__247419 == null)))?((((map__247419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__247419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__247419):map__247419);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__247419__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247418,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247421__i = 0, G__247421__a = new Array(arguments.length -  0);
while (G__247421__i < G__247421__a.length) {G__247421__a[G__247421__i] = arguments[G__247421__i + 0]; ++G__247421__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247421__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8262__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__247422){
var args__8262__auto__ = cljs.core.seq(arglist__247422);
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
var vec__247424 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247424,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247424,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247425__i = 0, G__247425__a = new Array(arguments.length -  0);
while (G__247425__i < G__247425__a.length) {G__247425__a[G__247425__i] = arguments[G__247425__i + 0]; ++G__247425__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247425__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8262__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__247426){
var args__8262__auto__ = cljs.core.seq(arglist__247426);
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
var vec__247428 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247428,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__247428,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__247429__i = 0, G__247429__a = new Array(arguments.length -  0);
while (G__247429__i < G__247429__a.length) {G__247429__a[G__247429__i] = arguments[G__247429__i + 0]; ++G__247429__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__247429__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8262__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__247430){
var args__8262__auto__ = cljs.core.seq(arglist__247430);
return general$sections$content_with_sidebar__delegate(args__8262__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
