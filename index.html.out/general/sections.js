// Compiled by ClojureScript 1.7.48 {}
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
var general$sections$fixed_background_img__delegate = function (args__6627__auto__){
var vec__14807 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14808 = cljs.core.nth.call(null,vec__14807,(0),null);
var map__14808__$1 = ((((!((map__14808 == null)))?((((map__14808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14808):map__14808);
var url = cljs.core.get.call(null,map__14808__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__14807,(1),null);
return general.background.fixed_img.call(null,new cljs.core.Keyword(null,"url","url",276297046),url,general.bootstrap.container.call(null,general.bootstrap.sm6_off3.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top: 20%;\n               padding-bottom:20%;",tailrecursion.hoplon.h2.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))));
};
var general$sections$fixed_background_img = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14810__i = 0, G__14810__a = new Array(arguments.length -  0);
while (G__14810__i < G__14810__a.length) {G__14810__a[G__14810__i] = arguments[G__14810__i + 0]; ++G__14810__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14810__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__6627__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__14811){
var args__6627__auto__ = cljs.core.seq(arglist__14811);
return general$sections$fixed_background_img__delegate(args__6627__auto__);
});
general$sections$fixed_background_img.cljs$core$IFn$_invoke$arity$variadic = general$sections$fixed_background_img__delegate;
return general$sections$fixed_background_img;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.divider = (function() { 
var general$sections$divider__delegate = function (args__6627__auto__){
var vec__14813 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14813,(0),null);
var kids = cljs.core.nth.call(null,vec__14813,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hidden-xs",new cljs.core.Keyword(null,"style","style",-496642736),"height: 100px;");
};
var general$sections$divider = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14814__i = 0, G__14814__a = new Array(arguments.length -  0);
while (G__14814__i < G__14814__a.length) {G__14814__a[G__14814__i] = arguments[G__14814__i + 0]; ++G__14814__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14814__a,0);
} 
return general$sections$divider__delegate.call(this,args__6627__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__14815){
var args__6627__auto__ = cljs.core.seq(arglist__14815);
return general$sections$divider__delegate(args__6627__auto__);
});
general$sections$divider.cljs$core$IFn$_invoke$arity$variadic = general$sections$divider__delegate;
return general$sections$divider;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.bubble = (function() { 
var general$sections$bubble__delegate = function (args__6627__auto__){
var vec__14817 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14817,(0),null);
var kids = cljs.core.nth.call(null,vec__14817,(1),null);
return general.bootstrap.md4_xs12.call(null,cljs.core.apply.call(null,general.bootstrap.well.call(null),attr,kids));
};
var general$sections$bubble = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14818__i = 0, G__14818__a = new Array(arguments.length -  0);
while (G__14818__i < G__14818__a.length) {G__14818__a[G__14818__i] = arguments[G__14818__i + 0]; ++G__14818__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14818__a,0);
} 
return general$sections$bubble__delegate.call(this,args__6627__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__14819){
var args__6627__auto__ = cljs.core.seq(arglist__14819);
return general$sections$bubble__delegate(args__6627__auto__);
});
general$sections$bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$bubble__delegate;
return general$sections$bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.img_bubble = (function() { 
var general$sections$img_bubble__delegate = function (args__6627__auto__){
var vec__14823 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14824 = cljs.core.nth.call(null,vec__14823,(0),null);
var map__14824__$1 = ((((!((map__14824 == null)))?((((map__14824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14824):map__14824);
var src = cljs.core.get.call(null,map__14824__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var kids = cljs.core.nth.call(null,vec__14823,(1),null);
return general.sections.bubble.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"src","src",-1651076051),src),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top: 5;",kids));
};
var general$sections$img_bubble = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14826__i = 0, G__14826__a = new Array(arguments.length -  0);
while (G__14826__i < G__14826__a.length) {G__14826__a[G__14826__i] = arguments[G__14826__i + 0]; ++G__14826__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14826__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__6627__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__14827){
var args__6627__auto__ = cljs.core.seq(arglist__14827);
return general$sections$img_bubble__delegate(args__6627__auto__);
});
general$sections$img_bubble.cljs$core$IFn$_invoke$arity$variadic = general$sections$img_bubble__delegate;
return general$sections$img_bubble;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.sidebar = (function() { 
var general$sections$sidebar__delegate = function (args__6627__auto__){
var vec__14829 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14829,(0),null);
var kids = cljs.core.nth.call(null,vec__14829,(1),null);
return cljs.core.apply.call(null,general.bootstrap.md4_xs_.call(null),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14830__i = 0, G__14830__a = new Array(arguments.length -  0);
while (G__14830__i < G__14830__a.length) {G__14830__a[G__14830__i] = arguments[G__14830__i + 0]; ++G__14830__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14830__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__6627__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__14831){
var args__6627__auto__ = cljs.core.seq(arglist__14831);
return general$sections$sidebar__delegate(args__6627__auto__);
});
general$sections$sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$sidebar__delegate;
return general$sections$sidebar;
})()
;
/**
 * @param {...*} var_args
 */
general.sections.content_with_sidebar = (function() { 
var general$sections$content_with_sidebar__delegate = function (args__6627__auto__){
var vec__14833 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14833,(0),null);
var kids = cljs.core.nth.call(null,vec__14833,(1),null);
return cljs.core.apply.call(null,general.bootstrap.md8_xs12.call(null),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14834__i = 0, G__14834__a = new Array(arguments.length -  0);
while (G__14834__i < G__14834__a.length) {G__14834__a[G__14834__i] = arguments[G__14834__i + 0]; ++G__14834__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14834__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__6627__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__14835){
var args__6627__auto__ = cljs.core.seq(arglist__14835);
return general$sections$content_with_sidebar__delegate(args__6627__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;

//# sourceMappingURL=sections.js.map