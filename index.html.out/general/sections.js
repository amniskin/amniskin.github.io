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
var vec__10319 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10319,(0),null);
var map__10320__$1 = ((((!((map__10320 == null)))?((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10320):map__10320);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10320__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10319,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10322__i = 0, G__10322__a = new Array(arguments.length -  0);
while (G__10322__i < G__10322__a.length) {G__10322__a[G__10322__i] = arguments[G__10322__i + 0]; ++G__10322__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10322__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8262__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__10323){
var args__8262__auto__ = cljs.core.seq(arglist__10323);
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
var vec__10325 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10325,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10326__i = 0, G__10326__a = new Array(arguments.length -  0);
while (G__10326__i < G__10326__a.length) {G__10326__a[G__10326__i] = arguments[G__10326__i + 0]; ++G__10326__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10326__a,0);
} 
return general$sections$divider__delegate.call(this,args__8262__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__10327){
var args__8262__auto__ = cljs.core.seq(arglist__10327);
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
var vec__10329 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10330__i = 0, G__10330__a = new Array(arguments.length -  0);
while (G__10330__i < G__10330__a.length) {G__10330__a[G__10330__i] = arguments[G__10330__i + 0]; ++G__10330__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10330__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8262__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__10331){
var args__8262__auto__ = cljs.core.seq(arglist__10331);
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
var vec__10335 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335,(0),null);
var map__10336__$1 = ((((!((map__10336 == null)))?((((map__10336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10336):map__10336);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10336__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10338__i = 0, G__10338__a = new Array(arguments.length -  0);
while (G__10338__i < G__10338__a.length) {G__10338__a[G__10338__i] = arguments[G__10338__i + 0]; ++G__10338__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10338__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8262__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__10339){
var args__8262__auto__ = cljs.core.seq(arglist__10339);
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
var vec__10341 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10342__i = 0, G__10342__a = new Array(arguments.length -  0);
while (G__10342__i < G__10342__a.length) {G__10342__a[G__10342__i] = arguments[G__10342__i + 0]; ++G__10342__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10342__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8262__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__10343){
var args__8262__auto__ = cljs.core.seq(arglist__10343);
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
var vec__10345 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10345,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10346__i = 0, G__10346__a = new Array(arguments.length -  0);
while (G__10346__i < G__10346__a.length) {G__10346__a[G__10346__i] = arguments[G__10346__i + 0]; ++G__10346__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10346__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8262__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__10347){
var args__8262__auto__ = cljs.core.seq(arglist__10347);
return general$sections$content_with_sidebar__delegate(args__8262__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
