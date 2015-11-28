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
var vec__86197 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__86198 = cljs.core.nth.call(null,vec__86197,(0),null);
var map__86198__$1 = ((((!((map__86198 == null)))?((((map__86198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86198):map__86198);
var url = cljs.core.get.call(null,map__86198__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__86197,(1),null);
return general.background.fixed_img.call(null,new cljs.core.Keyword(null,"url","url",276297046),url,general.bootstrap.container.call(null,general.bootstrap.sm6_off3.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top: 20%;\n               padding-bottom:20%;",tailrecursion.hoplon.h2.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"color:#ffffff;\n                   padding:20px;\n                   background-color:rgba(5,5,5,.8)",kids))));
};
var general$sections$fixed_background_img = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86200__i = 0, G__86200__a = new Array(arguments.length -  0);
while (G__86200__i < G__86200__a.length) {G__86200__a[G__86200__i] = arguments[G__86200__i + 0]; ++G__86200__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86200__a,0);
} 
return general$sections$fixed_background_img__delegate.call(this,args__6627__auto__);};
general$sections$fixed_background_img.cljs$lang$maxFixedArity = 0;
general$sections$fixed_background_img.cljs$lang$applyTo = (function (arglist__86201){
var args__6627__auto__ = cljs.core.seq(arglist__86201);
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
var vec__86203 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__86203,(0),null);
var kids = cljs.core.nth.call(null,vec__86203,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hidden-xs",new cljs.core.Keyword(null,"style","style",-496642736),"height: 100px;");
};
var general$sections$divider = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86204__i = 0, G__86204__a = new Array(arguments.length -  0);
while (G__86204__i < G__86204__a.length) {G__86204__a[G__86204__i] = arguments[G__86204__i + 0]; ++G__86204__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86204__a,0);
} 
return general$sections$divider__delegate.call(this,args__6627__auto__);};
general$sections$divider.cljs$lang$maxFixedArity = 0;
general$sections$divider.cljs$lang$applyTo = (function (arglist__86205){
var args__6627__auto__ = cljs.core.seq(arglist__86205);
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
var vec__86207 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__86207,(0),null);
var kids = cljs.core.nth.call(null,vec__86207,(1),null);
return general.bootstrap.md4_xs12.call(null,cljs.core.apply.call(null,general.bootstrap.well.call(null),attr,kids));
};
var general$sections$bubble = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86208__i = 0, G__86208__a = new Array(arguments.length -  0);
while (G__86208__i < G__86208__a.length) {G__86208__a[G__86208__i] = arguments[G__86208__i + 0]; ++G__86208__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86208__a,0);
} 
return general$sections$bubble__delegate.call(this,args__6627__auto__);};
general$sections$bubble.cljs$lang$maxFixedArity = 0;
general$sections$bubble.cljs$lang$applyTo = (function (arglist__86209){
var args__6627__auto__ = cljs.core.seq(arglist__86209);
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
var vec__86213 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__86214 = cljs.core.nth.call(null,vec__86213,(0),null);
var map__86214__$1 = ((((!((map__86214 == null)))?((((map__86214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86214):map__86214);
var src = cljs.core.get.call(null,map__86214__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var kids = cljs.core.nth.call(null,vec__86213,(1),null);
return general.sections.bubble.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"src","src",-1651076051),src),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top: 5;",kids));
};
var general$sections$img_bubble = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86216__i = 0, G__86216__a = new Array(arguments.length -  0);
while (G__86216__i < G__86216__a.length) {G__86216__a[G__86216__i] = arguments[G__86216__i + 0]; ++G__86216__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86216__a,0);
} 
return general$sections$img_bubble__delegate.call(this,args__6627__auto__);};
general$sections$img_bubble.cljs$lang$maxFixedArity = 0;
general$sections$img_bubble.cljs$lang$applyTo = (function (arglist__86217){
var args__6627__auto__ = cljs.core.seq(arglist__86217);
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
var vec__86219 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__86219,(0),null);
var kids = cljs.core.nth.call(null,vec__86219,(1),null);
return cljs.core.apply.call(null,general.bootstrap.md4_xs_.call(null),attr,kids);
};
var general$sections$sidebar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86220__i = 0, G__86220__a = new Array(arguments.length -  0);
while (G__86220__i < G__86220__a.length) {G__86220__a[G__86220__i] = arguments[G__86220__i + 0]; ++G__86220__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86220__a,0);
} 
return general$sections$sidebar__delegate.call(this,args__6627__auto__);};
general$sections$sidebar.cljs$lang$maxFixedArity = 0;
general$sections$sidebar.cljs$lang$applyTo = (function (arglist__86221){
var args__6627__auto__ = cljs.core.seq(arglist__86221);
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
var vec__86223 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__86223,(0),null);
var kids = cljs.core.nth.call(null,vec__86223,(1),null);
return cljs.core.apply.call(null,general.bootstrap.md8_xs12.call(null),attr,kids);
};
var general$sections$content_with_sidebar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86224__i = 0, G__86224__a = new Array(arguments.length -  0);
while (G__86224__i < G__86224__a.length) {G__86224__a[G__86224__i] = arguments[G__86224__i + 0]; ++G__86224__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86224__a,0);
} 
return general$sections$content_with_sidebar__delegate.call(this,args__6627__auto__);};
general$sections$content_with_sidebar.cljs$lang$maxFixedArity = 0;
general$sections$content_with_sidebar.cljs$lang$applyTo = (function (arglist__86225){
var args__6627__auto__ = cljs.core.seq(arglist__86225);
return general$sections$content_with_sidebar__delegate(args__6627__auto__);
});
general$sections$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = general$sections$content_with_sidebar__delegate;
return general$sections$content_with_sidebar;
})()
;

//# sourceMappingURL=sections.js.map