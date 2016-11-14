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
var vec__10139 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10139,(0),null);
var map__10140__$1 = ((((!((map__10140 == null)))?((((map__10140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10140):map__10140);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10140__$1,cljs.core.cst$kw$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10139,(1),null);
return general.background.fixed_img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$url,url,general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.bootstrap.sm6_off3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$style,"padding-top: 20%;\n               padding-bottom:20%;",(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids) : tailrecursion.hoplon.h2.call(null,cljs.core.cst$kw$style,"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))], 0))], 0))], 0));
};
var general$sections$fixed_background_img = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10142__i = 0, G__10142__a = new Array(arguments.length -  0);
while (G__10142__i < G__10142__a.length) {G__10142__a[G__10142__i] = arguments[G__10142__i + 0]; ++G__10142__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10142__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__8082__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__10143){
var args__8082__auto__ = cljs.core.seq(arglist__10143);
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
var vec__10145 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"hidden-xs",cljs.core.cst$kw$style,"height: 100px;"));
};
var general$sections$divider = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10146__i = 0, G__10146__a = new Array(arguments.length -  0);
while (G__10146__i < G__10146__a.length) {G__10146__a[G__10146__i] = arguments[G__10146__i + 0]; ++G__10146__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10146__a,0);
} 
return general$sections$divider__delegate.call(this,args__8082__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__10147){
var args__8082__auto__ = cljs.core.seq(arglist__10147);
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
var vec__10149 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(1),null);
return general.bootstrap.md4_xs12.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.well(),attr,kids)], 0));
};
var general$sections$bubble = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10150__i = 0, G__10150__a = new Array(arguments.length -  0);
while (G__10150__i < G__10150__a.length) {G__10150__a[G__10150__i] = arguments[G__10150__i + 0]; ++G__10150__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10150__a,0);
} 
return general$sections$bubble__delegate.call(this,args__8082__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__10151){
var args__8082__auto__ = cljs.core.seq(arglist__10151);
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
var vec__10155 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,(0),null);
var map__10156__$1 = ((((!((map__10156 == null)))?((((map__10156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10156):map__10156);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10156__$1,cljs.core.cst$kw$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,(1),null);
return general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$src,src)),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"padding-top: 5;",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"padding-top: 5;",kids))], 0));
};
var general$sections$img_bubble = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10158__i = 0, G__10158__a = new Array(arguments.length -  0);
while (G__10158__i < G__10158__a.length) {G__10158__a[G__10158__i] = arguments[G__10158__i + 0]; ++G__10158__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10158__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__8082__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__10159){
var args__8082__auto__ = cljs.core.seq(arglist__10159);
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
var vec__10161 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10161,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10161,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md4_xs_(),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10162__i = 0, G__10162__a = new Array(arguments.length -  0);
while (G__10162__i < G__10162__a.length) {G__10162__a[G__10162__i] = arguments[G__10162__i + 0]; ++G__10162__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10162__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__8082__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__10163){
var args__8082__auto__ = cljs.core.seq(arglist__10163);
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
var vec__10165 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(general.bootstrap.md8_xs12(),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10166__i = 0, G__10166__a = new Array(arguments.length -  0);
while (G__10166__i < G__10166__a.length) {G__10166__a[G__10166__i] = arguments[G__10166__i + 0]; ++G__10166__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10166__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__8082__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__10167){
var args__8082__auto__ = cljs.core.seq(arglist__10167);
return general$sections$content_with_sidebar__delegate(args__8082__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;
