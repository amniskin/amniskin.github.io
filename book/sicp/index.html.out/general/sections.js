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
var general$sections$fixed_background_img__delegate = function (args__8082__auto__){
var vec__265736 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__265737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265736,(0),null);
var map__265737__$1 = ((((!((map__265737 == null)))?((((map__265737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265737):map__265737);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265737__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265736,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265739__i = 0, G__265739__a = new Array(arguments.length -  0);
while (G__265739__i < G__265739__a.length) {G__265739__a[G__265739__i] = arguments[G__265739__i + 0]; ++G__265739__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265739__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8082__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__265740){
var args__8082__auto__ = cljs.core.seq(arglist__265740);
return general$sections$fixed_background_img__delegate(args__8082__auto__);
});
general$sections$fixed_background_img.cljs$core$IFn$_invoke$arity$variadic = general$sections$fixed_background_img__delegate;
return general$sections$fixed_background_img;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.divider = (function() { 
var general$sections$divider__delegate = function (args__8082__auto__){
var vec__265742 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265742,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265742,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265743__i = 0, G__265743__a = new Array(arguments.length -  0);
while (G__265743__i < G__265743__a.length) {G__265743__a[G__265743__i] = arguments[G__265743__i + 0]; ++G__265743__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265743__a,0);
} 
return general$sections$divider__delegate.call(this,args__8082__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__265744){
var args__8082__auto__ = cljs.core.seq(arglist__265744);
return general$sections$divider__delegate(args__8082__auto__);
});
general$sections$divider.cljs$core$IFn$_invoke$arity$variadic = general$sections$divider__delegate;
return general$sections$divider;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.bubble = (function() { 
var general$sections$bubble__delegate = function (args__8082__auto__){
var vec__265746 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265746,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265746,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265747__i = 0, G__265747__a = new Array(arguments.length -  0);
while (G__265747__i < G__265747__a.length) {G__265747__a[G__265747__i] = arguments[G__265747__i + 0]; ++G__265747__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265747__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8082__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__265748){
var args__8082__auto__ = cljs.core.seq(arglist__265748);
return general$sections$bubble__delegate(args__8082__auto__);
});
general$sections$bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$bubble__delegate;
return general$sections$bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.img_bubble = (function() { 
var general$sections$img_bubble__delegate = function (args__8082__auto__){
var vec__265752 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__265753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265752,(0),null);
var map__265753__$1 = ((((!((map__265753 == null)))?((((map__265753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__265753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__265753):map__265753);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__265753__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265752,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265755__i = 0, G__265755__a = new Array(arguments.length -  0);
while (G__265755__i < G__265755__a.length) {G__265755__a[G__265755__i] = arguments[G__265755__i + 0]; ++G__265755__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265755__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8082__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__265756){
var args__8082__auto__ = cljs.core.seq(arglist__265756);
return general$sections$img_bubble__delegate(args__8082__auto__);
});
general$sections$img_bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$img_bubble__delegate;
return general$sections$img_bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.sidebar = (function() { 
var general$sections$sidebar__delegate = function (args__8082__auto__){
var vec__265758 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265758,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265758,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265759__i = 0, G__265759__a = new Array(arguments.length -  0);
while (G__265759__i < G__265759__a.length) {G__265759__a[G__265759__i] = arguments[G__265759__i + 0]; ++G__265759__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265759__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8082__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__265760){
var args__8082__auto__ = cljs.core.seq(arglist__265760);
return general$sections$sidebar__delegate(args__8082__auto__);
});
general$sections$sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$sidebar__delegate;
return general$sections$sidebar;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.content_with_sidebar = (function() { 
var general$sections$content_with_sidebar__delegate = function (args__8082__auto__){
var vec__265762 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265762,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__265762,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__265763__i = 0, G__265763__a = new Array(arguments.length -  0);
while (G__265763__i < G__265763__a.length) {G__265763__a[G__265763__i] = arguments[G__265763__i + 0]; ++G__265763__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__265763__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8082__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__265764){
var args__8082__auto__ = cljs.core.seq(arglist__265764);
return general$sections$content_with_sidebar__delegate(args__8082__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
