// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc_mobile');
goog.require('cljs.core');
goog.require('general.navbar');
goog.require('tailrecursion.hoplon');
goog.require('general.toc');
goog.require('tailrecursion.javelin');
goog.require('general.bootstrap');
goog.require('clojure.string');
/**
 * @param {...*} var_args
 */
general.toc_mobile.toc_link = (function() { 
var general$toc_mobile$toc_link__delegate = function (args__8082__auto__){
var vec__201428 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201428,(0),null);
var map__201429__$1 = ((((!((map__201429 == null)))?((((map__201429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201429):map__201429);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201429__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201429__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201428,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (G__201431,G__201432,G__201433){
return (G__201431.cljs$core$IFn$_invoke$arity$2 ? G__201431.cljs$core$IFn$_invoke$arity$2(G__201432,G__201433) : G__201431.call(null,G__201432,G__201433));
});})(vec__201428,map__201429,map__201429__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (G__201434,G__201435,G__201436){
return (G__201434.cljs$core$IFn$_invoke$arity$2 ? G__201434.cljs$core$IFn$_invoke$arity$2(G__201435,G__201436) : G__201434.call(null,G__201435,G__201436));
});})(scroll_link_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (G__201437,G__201438){
var or__4842__auto__ = G__201437;
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__201438;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__201440 = cljs.core.cst$kw$class;
var G__201441 = tailrecursion.javelin.formula(((function (G__201440,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (G__201449){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__201449], null);
});})(G__201440,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_))
).call(null,active_QMARK_);
var G__201442 = cljs.core.cst$kw$click;
var G__201443 = ((function (G__201440,G__201441,G__201442,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__201440,G__201441,G__201442,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_))
;
var G__201444 = cljs.core.cst$kw$hover;
var G__201445 = ((function (G__201440,G__201441,G__201442,G__201443,G__201444,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__201440,G__201441,G__201442,G__201443,G__201444,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201428,map__201429,map__201429__$1,link,title,_))
;
var G__201446 = cljs.core.cst$kw$href;
var G__201447 = link;
var G__201448 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__201440,G__201441,G__201442,G__201443,G__201444,G__201445,G__201446,G__201447,G__201448) : tailrecursion.hoplon.a.call(null,G__201440,G__201441,G__201442,G__201443,G__201444,G__201445,G__201446,G__201447,G__201448));
};
var general$toc_mobile$toc_link = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201450__i = 0, G__201450__a = new Array(arguments.length -  0);
while (G__201450__i < G__201450__a.length) {G__201450__a[G__201450__i] = arguments[G__201450__i + 0]; ++G__201450__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201450__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__8082__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__201451){
var args__8082__auto__ = cljs.core.seq(arglist__201451);
return general$toc_mobile$toc_link__delegate(args__8082__auto__);
});
general$toc_mobile$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc_link__delegate;
return general$toc_mobile$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_ch = (function() { 
var general$toc_mobile$li_ch__delegate = function (args__8082__auto__){
var vec__201456 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201456,(0),null);
var map__201457__$1 = ((((!((map__201457 == null)))?((((map__201457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201457):map__201457);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201457__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201457__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201456,(1),null);
var G__201459 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__201459) : tailrecursion.hoplon.li.call(null,G__201459));
};
var general$toc_mobile$li_ch = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201460__i = 0, G__201460__a = new Array(arguments.length -  0);
while (G__201460__i < G__201460__a.length) {G__201460__a[G__201460__i] = arguments[G__201460__i + 0]; ++G__201460__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201460__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__8082__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__201461){
var args__8082__auto__ = cljs.core.seq(arglist__201461);
return general$toc_mobile$li_ch__delegate(args__8082__auto__);
});
general$toc_mobile$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_ch__delegate;
return general$toc_mobile$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sect = (function() { 
var general$toc_mobile$li_sect__delegate = function (args__8082__auto__){
var vec__201468 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201468,(0),null);
var map__201469__$1 = ((((!((map__201469 == null)))?((((map__201469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201469):map__201469);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201469__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201469__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201468,(1),null);
var G__201471 = cljs.core.cst$kw$style;
var G__201472 = "margin-left:0px; font-size:13px;";
var G__201473 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__201471,G__201472,G__201473) : tailrecursion.hoplon.li.call(null,G__201471,G__201472,G__201473));
};
var general$toc_mobile$li_sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201474__i = 0, G__201474__a = new Array(arguments.length -  0);
while (G__201474__i < G__201474__a.length) {G__201474__a[G__201474__i] = arguments[G__201474__i + 0]; ++G__201474__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201474__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__8082__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__201475){
var args__8082__auto__ = cljs.core.seq(arglist__201475);
return general$toc_mobile$li_sect__delegate(args__8082__auto__);
});
general$toc_mobile$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sect__delegate;
return general$toc_mobile$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sub = (function() { 
var general$toc_mobile$li_sub__delegate = function (args__8082__auto__){
var vec__201482 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201482,(0),null);
var map__201483__$1 = ((((!((map__201483 == null)))?((((map__201483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201483):map__201483);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201483__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201483__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201482,(1),null);
var G__201485 = cljs.core.cst$kw$style;
var G__201486 = "font-size:12px;";
var G__201487 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__201485,G__201486,G__201487) : tailrecursion.hoplon.li.call(null,G__201485,G__201486,G__201487));
};
var general$toc_mobile$li_sub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201488__i = 0, G__201488__a = new Array(arguments.length -  0);
while (G__201488__i < G__201488__a.length) {G__201488__a[G__201488__i] = arguments[G__201488__i + 0]; ++G__201488__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201488__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__8082__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__201489){
var args__8082__auto__ = cljs.core.seq(arglist__201489);
return general$toc_mobile$li_sub__delegate(args__8082__auto__);
});
general$toc_mobile$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sub__delegate;
return general$toc_mobile$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ch = (function() { 
var general$toc_mobile$ul_ch__delegate = function (args__8082__auto__){
var vec__201491 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201491,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201491,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201492__i = 0, G__201492__a = new Array(arguments.length -  0);
while (G__201492__i < G__201492__a.length) {G__201492__a[G__201492__i] = arguments[G__201492__i + 0]; ++G__201492__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201492__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__8082__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__201493){
var args__8082__auto__ = cljs.core.seq(arglist__201493);
return general$toc_mobile$ul_ch__delegate(args__8082__auto__);
});
general$toc_mobile$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ch__delegate;
return general$toc_mobile$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sect = (function() { 
var general$toc_mobile$ul_sect__delegate = function (args__8082__auto__){
var vec__201519 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201519,(0),null);
var map__201520__$1 = ((((!((map__201520 == null)))?((((map__201520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201520):map__201520);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201520__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201519,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201531 = cljs.core.cst$kw$style;
var G__201532 = "padding-left:10px; padding-top:0px;";
var G__201533 = cljs.core.cst$kw$class;
var G__201534 = tailrecursion.javelin.formula(((function (G__201531,G__201532,G__201533,vec__201519,map__201520,map__201520__$1,ch,kids){
return (function (G__201536,G__201538,G__201535,G__201537){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201541 = (function (){var G__201542 = G__201537;
var G__201543 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201538);
return (G__201536.cljs$core$IFn$_invoke$arity$2 ? G__201536.cljs$core$IFn$_invoke$arity$2(G__201542,G__201543) : G__201536.call(null,G__201542,G__201543));
})();
return (G__201535.cljs$core$IFn$_invoke$arity$1 ? G__201535.cljs$core$IFn$_invoke$arity$1(G__201541) : G__201535.call(null,G__201541));
})()], null);
});})(G__201531,G__201532,G__201533,vec__201519,map__201520,map__201520__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201531,G__201532,G__201533,G__201534) : tailrecursion.hoplon.ul.call(null,G__201531,G__201532,G__201533,G__201534));
})(),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201544__i = 0, G__201544__a = new Array(arguments.length -  0);
while (G__201544__i < G__201544__a.length) {G__201544__a[G__201544__i] = arguments[G__201544__i + 0]; ++G__201544__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201544__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__8082__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__201545){
var args__8082__auto__ = cljs.core.seq(arglist__201545);
return general$toc_mobile$ul_sect__delegate(args__8082__auto__);
});
general$toc_mobile$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sect__delegate;
return general$toc_mobile$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sub = (function() { 
var general$toc_mobile$ul_sub__delegate = function (args__8082__auto__){
var vec__201581 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201581,(0),null);
var map__201582__$1 = ((((!((map__201582 == null)))?((((map__201582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201582):map__201582);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201582__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201582__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201581,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201598 = cljs.core.cst$kw$style;
var G__201599 = "padding-left:10px; padding-top:0px;";
var G__201600 = cljs.core.cst$kw$class;
var G__201601 = tailrecursion.javelin.formula(((function (G__201598,G__201599,G__201600,vec__201581,map__201582,map__201582__$1,ch,sect,kids){
return (function (G__201603,G__201604,G__201606,G__201602,G__201605){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201611 = ((function (){var G__201612 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201604);
var G__201613 = G__201605;
return (G__201603.cljs$core$IFn$_invoke$arity$2 ? G__201603.cljs$core$IFn$_invoke$arity$2(G__201612,G__201613) : G__201603.call(null,G__201612,G__201613));
})()) && ((function (){var G__201614 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__201604);
var G__201615 = G__201606;
return (G__201603.cljs$core$IFn$_invoke$arity$2 ? G__201603.cljs$core$IFn$_invoke$arity$2(G__201614,G__201615) : G__201603.call(null,G__201614,G__201615));
})());
return (G__201602.cljs$core$IFn$_invoke$arity$1 ? G__201602.cljs$core$IFn$_invoke$arity$1(G__201611) : G__201602.call(null,G__201611));
})()], null);
});})(G__201598,G__201599,G__201600,vec__201581,map__201582,map__201582__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201598,G__201599,G__201600,G__201601) : tailrecursion.hoplon.ul.call(null,G__201598,G__201599,G__201600,G__201601));
})(),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201616__i = 0, G__201616__a = new Array(arguments.length -  0);
while (G__201616__i < G__201616__a.length) {G__201616__a[G__201616__i] = arguments[G__201616__i + 0]; ++G__201616__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201616__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__8082__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__201617){
var args__8082__auto__ = cljs.core.seq(arglist__201617);
return general$toc_mobile$ul_sub__delegate(args__8082__auto__);
});
general$toc_mobile$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sub__delegate;
return general$toc_mobile$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ssub = (function() { 
var general$toc_mobile$ul_ssub__delegate = function (args__8082__auto__){
var vec__201663 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201663,(0),null);
var map__201664__$1 = ((((!((map__201664 == null)))?((((map__201664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201664):map__201664);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201664__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201664__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201664__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201663,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201685 = cljs.core.cst$kw$style;
var G__201686 = "padding-left: 10px;";
var G__201687 = cljs.core.cst$kw$class;
var G__201688 = tailrecursion.javelin.formula(((function (G__201685,G__201686,G__201687,vec__201663,map__201664,map__201664__$1,ch,sect,sub,kids){
return (function (G__201690,G__201691,G__201693,G__201694,G__201689,G__201692){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201701 = ((function (){var G__201702 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201691);
var G__201703 = G__201692;
return (G__201690.cljs$core$IFn$_invoke$arity$2 ? G__201690.cljs$core$IFn$_invoke$arity$2(G__201702,G__201703) : G__201690.call(null,G__201702,G__201703));
})()) && ((function (){var G__201704 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__201691);
var G__201705 = G__201693;
return (G__201690.cljs$core$IFn$_invoke$arity$2 ? G__201690.cljs$core$IFn$_invoke$arity$2(G__201704,G__201705) : G__201690.call(null,G__201704,G__201705));
})()) && ((function (){var G__201706 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__201691);
var G__201707 = G__201694;
return (G__201690.cljs$core$IFn$_invoke$arity$2 ? G__201690.cljs$core$IFn$_invoke$arity$2(G__201706,G__201707) : G__201690.call(null,G__201706,G__201707));
})());
return (G__201689.cljs$core$IFn$_invoke$arity$1 ? G__201689.cljs$core$IFn$_invoke$arity$1(G__201701) : G__201689.call(null,G__201701));
})()], null);
});})(G__201685,G__201686,G__201687,vec__201663,map__201664,map__201664__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201685,G__201686,G__201687,G__201688) : tailrecursion.hoplon.ul.call(null,G__201685,G__201686,G__201687,G__201688));
})(),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201708__i = 0, G__201708__a = new Array(arguments.length -  0);
while (G__201708__i < G__201708__a.length) {G__201708__a[G__201708__i] = arguments[G__201708__i + 0]; ++G__201708__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201708__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__8082__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__201709){
var args__8082__auto__ = cljs.core.seq(arglist__201709);
return general$toc_mobile$ul_ssub__delegate(args__8082__auto__);
});
general$toc_mobile$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ssub__delegate;
return general$toc_mobile$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.toc = (function() { 
var general$toc_mobile$toc__delegate = function (args__8082__auto__){
var vec__201812 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201812,(0),null);
var map__201813__$1 = ((((!((map__201813 == null)))?((((map__201813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201813):map__201813);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201813__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201812,(1),null);
var vec__201815 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201815,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201815,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201815,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201815,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__201818 = cljs.core.cst$kw$class;
var G__201819 = tailrecursion.javelin.formula(((function (G__201818,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201821,G__201822){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible_DASH_xs,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$in,(G__201821.cljs$core$IFn$_invoke$arity$2 ? G__201821.cljs$core$IFn$_invoke$arity$2(G__201822,"toc") : G__201821.call(null,G__201822,"toc"))], null);
});})(G__201818,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__201820 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201824,G__201825,G__201823){
return (G__201823.cljs$core$IFn$_invoke$arity$2 ? G__201823.cljs$core$IFn$_invoke$arity$2(G__201824,G__201825) : G__201823.call(null,G__201824,G__201825));
});})(G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201828,G__201826,G__201827){
var G__201829 = (1);
var G__201830 = ((G__201827.cljs$core$IFn$_invoke$arity$1 ? G__201827.cljs$core$IFn$_invoke$arity$1(G__201828) : G__201827.call(null,G__201828)) + (1));
return (G__201826.cljs$core$IFn$_invoke$arity$2 ? G__201826.cljs$core$IFn$_invoke$arity$2(G__201829,G__201830) : G__201826.call(null,G__201829,G__201830));
});})(all_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (item__8093__auto__){
var vec__201831 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,item__8093__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201831,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201833,G__201834,G__201832){
var G__201835 = G__201833;
var G__201836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201834,cljs.core.cst$kw$title], null);
return (G__201832.cljs$core$IFn$_invoke$arity$2 ? G__201832.cljs$core$IFn$_invoke$arity$2(G__201835,G__201836) : G__201832.call(null,G__201835,G__201836));
});})(vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201838,G__201839,G__201837){
var G__201840 = G__201838;
var G__201841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201839,cljs.core.cst$kw$link], null);
return (G__201837.cljs$core$IFn$_invoke$arity$2 ? G__201837.cljs$core$IFn$_invoke$arity$2(G__201840,G__201841) : G__201837.call(null,G__201840,G__201841));
});})(title,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201843,G__201844,G__201845,G__201842){
var G__201846 = G__201843;
var G__201847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201844,G__201845], null);
return (G__201842.cljs$core$IFn$_invoke$arity$2 ? G__201842.cljs$core$IFn$_invoke$arity$2(G__201846,G__201847) : G__201842.call(null,G__201846,G__201847));
});})(title,link,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201850,G__201848,G__201849){
var G__201851 = (1);
var G__201852 = ((G__201849.cljs$core$IFn$_invoke$arity$1 ? G__201849.cljs$core$IFn$_invoke$arity$1(G__201850) : G__201849.call(null,G__201850)) + (1));
return (G__201848.cljs$core$IFn$_invoke$arity$2 ? G__201848.cljs$core$IFn$_invoke$arity$2(G__201851,G__201852) : G__201848.call(null,G__201851,G__201852));
});})(title,link,all_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__201853 = general.toc_mobile.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__201854 = general.toc_mobile.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (item__8093__auto____$1){
var vec__201855 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,item__8093__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201855,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201857,G__201858,G__201856){
var G__201859 = G__201857;
var G__201860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201858,cljs.core.cst$kw$title], null);
return (G__201856.cljs$core$IFn$_invoke$arity$2 ? G__201856.cljs$core$IFn$_invoke$arity$2(G__201859,G__201860) : G__201856.call(null,G__201859,G__201860));
});})(vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201862,G__201863,G__201861){
var G__201864 = G__201862;
var G__201865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201863,cljs.core.cst$kw$link], null);
return (G__201861.cljs$core$IFn$_invoke$arity$2 ? G__201861.cljs$core$IFn$_invoke$arity$2(G__201864,G__201865) : G__201861.call(null,G__201864,G__201865));
});})(title__$1,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201867,G__201868,G__201869,G__201866){
var G__201870 = G__201867;
var G__201871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201868,G__201869], null);
return (G__201866.cljs$core$IFn$_invoke$arity$2 ? G__201866.cljs$core$IFn$_invoke$arity$2(G__201870,G__201871) : G__201866.call(null,G__201870,G__201871));
});})(title__$1,link__$1,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201872,G__201874,G__201873){
var G__201875 = (1);
var G__201876 = ((G__201873.cljs$core$IFn$_invoke$arity$1 ? G__201873.cljs$core$IFn$_invoke$arity$1(G__201874) : G__201873.call(null,G__201874)) + (1));
return (G__201872.cljs$core$IFn$_invoke$arity$2 ? G__201872.cljs$core$IFn$_invoke$arity$2(G__201875,G__201876) : G__201872.call(null,G__201875,G__201876));
});})(title__$1,link__$1,all_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__201877 = general.toc_mobile.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__201878 = general.toc_mobile.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (item__8093__auto____$2){
var vec__201879 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,item__8093__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201879,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201882,G__201881,G__201880){
var G__201883 = G__201881;
var G__201884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201882,cljs.core.cst$kw$title], null);
return (G__201880.cljs$core$IFn$_invoke$arity$2 ? G__201880.cljs$core$IFn$_invoke$arity$2(G__201883,G__201884) : G__201880.call(null,G__201883,G__201884));
});})(vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201887,G__201886,G__201885){
var G__201888 = G__201886;
var G__201889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201887,cljs.core.cst$kw$link], null);
return (G__201885.cljs$core$IFn$_invoke$arity$2 ? G__201885.cljs$core$IFn$_invoke$arity$2(G__201888,G__201889) : G__201885.call(null,G__201888,G__201889));
});})(title__$2,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201892,G__201891,G__201893,G__201890){
var G__201894 = G__201891;
var G__201895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201892,G__201893], null);
return (G__201890.cljs$core$IFn$_invoke$arity$2 ? G__201890.cljs$core$IFn$_invoke$arity$2(G__201894,G__201895) : G__201890.call(null,G__201894,G__201895));
});})(title__$2,link__$2,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201896,G__201898,G__201897){
var G__201899 = (1);
var G__201900 = ((G__201897.cljs$core$IFn$_invoke$arity$1 ? G__201897.cljs$core$IFn$_invoke$arity$1(G__201898) : G__201897.call(null,G__201898)) + (1));
return (G__201896.cljs$core$IFn$_invoke$arity$2 ? G__201896.cljs$core$IFn$_invoke$arity$2(G__201899,G__201900) : G__201896.call(null,G__201899,G__201900));
});})(title__$2,link__$2,all_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__201901 = general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__201902 = general.toc_mobile.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (item__8093__auto____$3){
var vec__201903 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,item__8093__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201903,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__201903,ssub,G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201906,G__201905,G__201904){
var G__201907 = G__201905;
var G__201908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201906,cljs.core.cst$kw$title], null);
return (G__201904.cljs$core$IFn$_invoke$arity$2 ? G__201904.cljs$core$IFn$_invoke$arity$2(G__201907,G__201908) : G__201904.call(null,G__201907,G__201908));
});})(vec__201903,ssub,G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__201903,ssub,G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_){
return (function (G__201911,G__201910,G__201909){
var G__201912 = G__201910;
var G__201913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__201911,cljs.core.cst$kw$link], null);
return (G__201909.cljs$core$IFn$_invoke$arity$2 ? G__201909.cljs$core$IFn$_invoke$arity$2(G__201912,G__201913) : G__201909.call(null,G__201912,G__201913));
});})(title__$3,vec__201903,ssub,G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__201901,title__$2,link__$2,all_ssub,num_ssub,vec__201879,sub,G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__201901,G__201902) : tailrecursion.hoplon.div.call(null,G__201901,G__201902));
});})(G__201877,title__$1,link__$1,all_subs,num_subs,vec__201855,sect,G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__201877,G__201878) : tailrecursion.hoplon.div.call(null,G__201877,G__201878));
});})(G__201853,title,link,all_sects,num_sects,vec__201831,ch,all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__201853,G__201854) : tailrecursion.hoplon.div.call(null,G__201853,G__201854));
});})(all_chapters,num_chapters,G__201818,G__201819,vec__201815,one,two,three,four,vec__201812,map__201813,map__201813__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__201818,G__201819,G__201820) : tailrecursion.hoplon.div.call(null,G__201818,G__201819,G__201820));
})()], 0));
};
var general$toc_mobile$toc = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__201914__i = 0, G__201914__a = new Array(arguments.length -  0);
while (G__201914__i < G__201914__a.length) {G__201914__a[G__201914__i] = arguments[G__201914__i + 0]; ++G__201914__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__201914__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__8082__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__201915){
var args__8082__auto__ = cljs.core.seq(arglist__201915);
return general$toc_mobile$toc__delegate(args__8082__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;
