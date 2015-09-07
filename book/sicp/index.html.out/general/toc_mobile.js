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
var general$toc_mobile$toc_link__delegate = function (args__8262__auto__){
var vec__180224 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180224,(0),null);
var map__180225__$1 = ((((!((map__180225 == null)))?((((map__180225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180225):map__180225);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180225__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180225__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180224,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (G__180227,G__180228,G__180229){
return (G__180227.cljs$core$IFn$_invoke$arity$2 ? G__180227.cljs$core$IFn$_invoke$arity$2(G__180228,G__180229) : G__180227.call(null,G__180228,G__180229));
});})(vec__180224,map__180225,map__180225__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (G__180230,G__180231,G__180232){
return (G__180230.cljs$core$IFn$_invoke$arity$2 ? G__180230.cljs$core$IFn$_invoke$arity$2(G__180231,G__180232) : G__180230.call(null,G__180231,G__180232));
});})(scroll_link_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (G__180233,G__180234){
var or__5022__auto__ = G__180233;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__180234;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__180236 = cljs.core.cst$kw$class;
var G__180237 = tailrecursion.javelin.formula(((function (G__180236,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (G__180245){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__180245], null);
});})(G__180236,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_))
).call(null,active_QMARK_);
var G__180238 = cljs.core.cst$kw$click;
var G__180239 = ((function (G__180236,G__180237,G__180238,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__180236,G__180237,G__180238,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_))
;
var G__180240 = cljs.core.cst$kw$hover;
var G__180241 = ((function (G__180236,G__180237,G__180238,G__180239,G__180240,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__180236,G__180237,G__180238,G__180239,G__180240,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180224,map__180225,map__180225__$1,link,title,_))
;
var G__180242 = cljs.core.cst$kw$href;
var G__180243 = link;
var G__180244 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__180236,G__180237,G__180238,G__180239,G__180240,G__180241,G__180242,G__180243,G__180244) : tailrecursion.hoplon.a.call(null,G__180236,G__180237,G__180238,G__180239,G__180240,G__180241,G__180242,G__180243,G__180244));
};
var general$toc_mobile$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180246__i = 0, G__180246__a = new Array(arguments.length -  0);
while (G__180246__i < G__180246__a.length) {G__180246__a[G__180246__i] = arguments[G__180246__i + 0]; ++G__180246__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180246__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__180247){
var args__8262__auto__ = cljs.core.seq(arglist__180247);
return general$toc_mobile$toc_link__delegate(args__8262__auto__);
});
general$toc_mobile$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc_link__delegate;
return general$toc_mobile$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_ch = (function() { 
var general$toc_mobile$li_ch__delegate = function (args__8262__auto__){
var vec__180252 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180252,(0),null);
var map__180253__$1 = ((((!((map__180253 == null)))?((((map__180253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180253):map__180253);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180253__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180253__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180252,(1),null);
var G__180255 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__180255) : tailrecursion.hoplon.li.call(null,G__180255));
};
var general$toc_mobile$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180256__i = 0, G__180256__a = new Array(arguments.length -  0);
while (G__180256__i < G__180256__a.length) {G__180256__a[G__180256__i] = arguments[G__180256__i + 0]; ++G__180256__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180256__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__180257){
var args__8262__auto__ = cljs.core.seq(arglist__180257);
return general$toc_mobile$li_ch__delegate(args__8262__auto__);
});
general$toc_mobile$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_ch__delegate;
return general$toc_mobile$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sect = (function() { 
var general$toc_mobile$li_sect__delegate = function (args__8262__auto__){
var vec__180264 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180264,(0),null);
var map__180265__$1 = ((((!((map__180265 == null)))?((((map__180265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180265):map__180265);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180265__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180265__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180264,(1),null);
var G__180267 = cljs.core.cst$kw$style;
var G__180268 = "margin-left:0px; font-size:13px;";
var G__180269 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180267,G__180268,G__180269) : tailrecursion.hoplon.li.call(null,G__180267,G__180268,G__180269));
};
var general$toc_mobile$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180270__i = 0, G__180270__a = new Array(arguments.length -  0);
while (G__180270__i < G__180270__a.length) {G__180270__a[G__180270__i] = arguments[G__180270__i + 0]; ++G__180270__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180270__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__180271){
var args__8262__auto__ = cljs.core.seq(arglist__180271);
return general$toc_mobile$li_sect__delegate(args__8262__auto__);
});
general$toc_mobile$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sect__delegate;
return general$toc_mobile$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sub = (function() { 
var general$toc_mobile$li_sub__delegate = function (args__8262__auto__){
var vec__180278 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180278,(0),null);
var map__180279__$1 = ((((!((map__180279 == null)))?((((map__180279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180279):map__180279);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180279__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180279__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180278,(1),null);
var G__180281 = cljs.core.cst$kw$style;
var G__180282 = "font-size:12px;";
var G__180283 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180281,G__180282,G__180283) : tailrecursion.hoplon.li.call(null,G__180281,G__180282,G__180283));
};
var general$toc_mobile$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180284__i = 0, G__180284__a = new Array(arguments.length -  0);
while (G__180284__i < G__180284__a.length) {G__180284__a[G__180284__i] = arguments[G__180284__i + 0]; ++G__180284__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180284__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__180285){
var args__8262__auto__ = cljs.core.seq(arglist__180285);
return general$toc_mobile$li_sub__delegate(args__8262__auto__);
});
general$toc_mobile$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sub__delegate;
return general$toc_mobile$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ch = (function() { 
var general$toc_mobile$ul_ch__delegate = function (args__8262__auto__){
var vec__180287 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180287,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180287,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180288__i = 0, G__180288__a = new Array(arguments.length -  0);
while (G__180288__i < G__180288__a.length) {G__180288__a[G__180288__i] = arguments[G__180288__i + 0]; ++G__180288__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180288__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__180289){
var args__8262__auto__ = cljs.core.seq(arglist__180289);
return general$toc_mobile$ul_ch__delegate(args__8262__auto__);
});
general$toc_mobile$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ch__delegate;
return general$toc_mobile$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sect = (function() { 
var general$toc_mobile$ul_sect__delegate = function (args__8262__auto__){
var vec__180315 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180315,(0),null);
var map__180316__$1 = ((((!((map__180316 == null)))?((((map__180316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180316):map__180316);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180316__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180315,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180327 = cljs.core.cst$kw$style;
var G__180328 = "padding-left:10px; padding-top:0px;";
var G__180329 = cljs.core.cst$kw$class;
var G__180330 = tailrecursion.javelin.formula(((function (G__180327,G__180328,G__180329,vec__180315,map__180316,map__180316__$1,ch,kids){
return (function (G__180332,G__180334,G__180331,G__180333){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__180337 = (function (){var G__180338 = G__180333;
var G__180339 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__180334);
return (G__180332.cljs$core$IFn$_invoke$arity$2 ? G__180332.cljs$core$IFn$_invoke$arity$2(G__180338,G__180339) : G__180332.call(null,G__180338,G__180339));
})();
return (G__180331.cljs$core$IFn$_invoke$arity$1 ? G__180331.cljs$core$IFn$_invoke$arity$1(G__180337) : G__180331.call(null,G__180337));
})()], null);
});})(G__180327,G__180328,G__180329,vec__180315,map__180316,map__180316__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__180327,G__180328,G__180329,G__180330) : tailrecursion.hoplon.ul.call(null,G__180327,G__180328,G__180329,G__180330));
})(),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180340__i = 0, G__180340__a = new Array(arguments.length -  0);
while (G__180340__i < G__180340__a.length) {G__180340__a[G__180340__i] = arguments[G__180340__i + 0]; ++G__180340__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180340__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__180341){
var args__8262__auto__ = cljs.core.seq(arglist__180341);
return general$toc_mobile$ul_sect__delegate(args__8262__auto__);
});
general$toc_mobile$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sect__delegate;
return general$toc_mobile$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sub = (function() { 
var general$toc_mobile$ul_sub__delegate = function (args__8262__auto__){
var vec__180377 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180377,(0),null);
var map__180378__$1 = ((((!((map__180378 == null)))?((((map__180378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180378):map__180378);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180378__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180378__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180377,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180394 = cljs.core.cst$kw$style;
var G__180395 = "padding-left:10px; padding-top:0px;";
var G__180396 = cljs.core.cst$kw$class;
var G__180397 = tailrecursion.javelin.formula(((function (G__180394,G__180395,G__180396,vec__180377,map__180378,map__180378__$1,ch,sect,kids){
return (function (G__180399,G__180400,G__180402,G__180398,G__180401){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__180407 = ((function (){var G__180408 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__180400);
var G__180409 = G__180401;
return (G__180399.cljs$core$IFn$_invoke$arity$2 ? G__180399.cljs$core$IFn$_invoke$arity$2(G__180408,G__180409) : G__180399.call(null,G__180408,G__180409));
})()) && ((function (){var G__180410 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__180400);
var G__180411 = G__180402;
return (G__180399.cljs$core$IFn$_invoke$arity$2 ? G__180399.cljs$core$IFn$_invoke$arity$2(G__180410,G__180411) : G__180399.call(null,G__180410,G__180411));
})());
return (G__180398.cljs$core$IFn$_invoke$arity$1 ? G__180398.cljs$core$IFn$_invoke$arity$1(G__180407) : G__180398.call(null,G__180407));
})()], null);
});})(G__180394,G__180395,G__180396,vec__180377,map__180378,map__180378__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__180394,G__180395,G__180396,G__180397) : tailrecursion.hoplon.ul.call(null,G__180394,G__180395,G__180396,G__180397));
})(),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180412__i = 0, G__180412__a = new Array(arguments.length -  0);
while (G__180412__i < G__180412__a.length) {G__180412__a[G__180412__i] = arguments[G__180412__i + 0]; ++G__180412__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180412__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__180413){
var args__8262__auto__ = cljs.core.seq(arglist__180413);
return general$toc_mobile$ul_sub__delegate(args__8262__auto__);
});
general$toc_mobile$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sub__delegate;
return general$toc_mobile$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ssub = (function() { 
var general$toc_mobile$ul_ssub__delegate = function (args__8262__auto__){
var vec__180459 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180459,(0),null);
var map__180460__$1 = ((((!((map__180460 == null)))?((((map__180460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180460):map__180460);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180460__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180460__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180460__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180459,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180481 = cljs.core.cst$kw$style;
var G__180482 = "padding-left: 10px;";
var G__180483 = cljs.core.cst$kw$class;
var G__180484 = tailrecursion.javelin.formula(((function (G__180481,G__180482,G__180483,vec__180459,map__180460,map__180460__$1,ch,sect,sub,kids){
return (function (G__180486,G__180487,G__180489,G__180490,G__180485,G__180488){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__180497 = ((function (){var G__180498 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__180487);
var G__180499 = G__180488;
return (G__180486.cljs$core$IFn$_invoke$arity$2 ? G__180486.cljs$core$IFn$_invoke$arity$2(G__180498,G__180499) : G__180486.call(null,G__180498,G__180499));
})()) && ((function (){var G__180500 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__180487);
var G__180501 = G__180489;
return (G__180486.cljs$core$IFn$_invoke$arity$2 ? G__180486.cljs$core$IFn$_invoke$arity$2(G__180500,G__180501) : G__180486.call(null,G__180500,G__180501));
})()) && ((function (){var G__180502 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__180487);
var G__180503 = G__180490;
return (G__180486.cljs$core$IFn$_invoke$arity$2 ? G__180486.cljs$core$IFn$_invoke$arity$2(G__180502,G__180503) : G__180486.call(null,G__180502,G__180503));
})());
return (G__180485.cljs$core$IFn$_invoke$arity$1 ? G__180485.cljs$core$IFn$_invoke$arity$1(G__180497) : G__180485.call(null,G__180497));
})()], null);
});})(G__180481,G__180482,G__180483,vec__180459,map__180460,map__180460__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__180481,G__180482,G__180483,G__180484) : tailrecursion.hoplon.ul.call(null,G__180481,G__180482,G__180483,G__180484));
})(),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180504__i = 0, G__180504__a = new Array(arguments.length -  0);
while (G__180504__i < G__180504__a.length) {G__180504__a[G__180504__i] = arguments[G__180504__i + 0]; ++G__180504__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180504__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__180505){
var args__8262__auto__ = cljs.core.seq(arglist__180505);
return general$toc_mobile$ul_ssub__delegate(args__8262__auto__);
});
general$toc_mobile$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ssub__delegate;
return general$toc_mobile$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.toc = (function() { 
var general$toc_mobile$toc__delegate = function (args__8262__auto__){
var vec__180608 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180608,(0),null);
var map__180609__$1 = ((((!((map__180609 == null)))?((((map__180609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180609):map__180609);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180609__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180608,(1),null);
var vec__180611 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180611,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180611,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180611,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180611,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__180614 = cljs.core.cst$kw$class;
var G__180615 = tailrecursion.javelin.formula(((function (G__180614,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180617,G__180618){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible_DASH_xs,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$in,(G__180617.cljs$core$IFn$_invoke$arity$2 ? G__180617.cljs$core$IFn$_invoke$arity$2(G__180618,"toc") : G__180617.call(null,G__180618,"toc"))], null);
});})(G__180614,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__180616 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180620,G__180621,G__180619){
return (G__180619.cljs$core$IFn$_invoke$arity$2 ? G__180619.cljs$core$IFn$_invoke$arity$2(G__180620,G__180621) : G__180619.call(null,G__180620,G__180621));
});})(G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180624,G__180622,G__180623){
var G__180625 = (1);
var G__180626 = ((G__180623.cljs$core$IFn$_invoke$arity$1 ? G__180623.cljs$core$IFn$_invoke$arity$1(G__180624) : G__180623.call(null,G__180624)) + (1));
return (G__180622.cljs$core$IFn$_invoke$arity$2 ? G__180622.cljs$core$IFn$_invoke$arity$2(G__180625,G__180626) : G__180622.call(null,G__180625,G__180626));
});})(all_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (item__8273__auto__){
var vec__180627 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180627,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180629,G__180630,G__180628){
var G__180631 = G__180629;
var G__180632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180630,cljs.core.cst$kw$title], null);
return (G__180628.cljs$core$IFn$_invoke$arity$2 ? G__180628.cljs$core$IFn$_invoke$arity$2(G__180631,G__180632) : G__180628.call(null,G__180631,G__180632));
});})(vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180634,G__180635,G__180633){
var G__180636 = G__180634;
var G__180637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180635,cljs.core.cst$kw$link], null);
return (G__180633.cljs$core$IFn$_invoke$arity$2 ? G__180633.cljs$core$IFn$_invoke$arity$2(G__180636,G__180637) : G__180633.call(null,G__180636,G__180637));
});})(title,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180639,G__180640,G__180641,G__180638){
var G__180642 = G__180639;
var G__180643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180640,G__180641], null);
return (G__180638.cljs$core$IFn$_invoke$arity$2 ? G__180638.cljs$core$IFn$_invoke$arity$2(G__180642,G__180643) : G__180638.call(null,G__180642,G__180643));
});})(title,link,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180646,G__180644,G__180645){
var G__180647 = (1);
var G__180648 = ((G__180645.cljs$core$IFn$_invoke$arity$1 ? G__180645.cljs$core$IFn$_invoke$arity$1(G__180646) : G__180645.call(null,G__180646)) + (1));
return (G__180644.cljs$core$IFn$_invoke$arity$2 ? G__180644.cljs$core$IFn$_invoke$arity$2(G__180647,G__180648) : G__180644.call(null,G__180647,G__180648));
});})(title,link,all_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__180649 = general.toc_mobile.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__180650 = general.toc_mobile.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (item__8273__auto____$1){
var vec__180651 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180651,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180653,G__180654,G__180652){
var G__180655 = G__180653;
var G__180656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180654,cljs.core.cst$kw$title], null);
return (G__180652.cljs$core$IFn$_invoke$arity$2 ? G__180652.cljs$core$IFn$_invoke$arity$2(G__180655,G__180656) : G__180652.call(null,G__180655,G__180656));
});})(vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180658,G__180659,G__180657){
var G__180660 = G__180658;
var G__180661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180659,cljs.core.cst$kw$link], null);
return (G__180657.cljs$core$IFn$_invoke$arity$2 ? G__180657.cljs$core$IFn$_invoke$arity$2(G__180660,G__180661) : G__180657.call(null,G__180660,G__180661));
});})(title__$1,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180663,G__180664,G__180665,G__180662){
var G__180666 = G__180663;
var G__180667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180664,G__180665], null);
return (G__180662.cljs$core$IFn$_invoke$arity$2 ? G__180662.cljs$core$IFn$_invoke$arity$2(G__180666,G__180667) : G__180662.call(null,G__180666,G__180667));
});})(title__$1,link__$1,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180668,G__180670,G__180669){
var G__180671 = (1);
var G__180672 = ((G__180669.cljs$core$IFn$_invoke$arity$1 ? G__180669.cljs$core$IFn$_invoke$arity$1(G__180670) : G__180669.call(null,G__180670)) + (1));
return (G__180668.cljs$core$IFn$_invoke$arity$2 ? G__180668.cljs$core$IFn$_invoke$arity$2(G__180671,G__180672) : G__180668.call(null,G__180671,G__180672));
});})(title__$1,link__$1,all_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__180673 = general.toc_mobile.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__180674 = general.toc_mobile.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (item__8273__auto____$2){
var vec__180675 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180675,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180678,G__180677,G__180676){
var G__180679 = G__180677;
var G__180680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180678,cljs.core.cst$kw$title], null);
return (G__180676.cljs$core$IFn$_invoke$arity$2 ? G__180676.cljs$core$IFn$_invoke$arity$2(G__180679,G__180680) : G__180676.call(null,G__180679,G__180680));
});})(vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180683,G__180682,G__180681){
var G__180684 = G__180682;
var G__180685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180683,cljs.core.cst$kw$link], null);
return (G__180681.cljs$core$IFn$_invoke$arity$2 ? G__180681.cljs$core$IFn$_invoke$arity$2(G__180684,G__180685) : G__180681.call(null,G__180684,G__180685));
});})(title__$2,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180688,G__180687,G__180689,G__180686){
var G__180690 = G__180687;
var G__180691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180688,G__180689], null);
return (G__180686.cljs$core$IFn$_invoke$arity$2 ? G__180686.cljs$core$IFn$_invoke$arity$2(G__180690,G__180691) : G__180686.call(null,G__180690,G__180691));
});})(title__$2,link__$2,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180692,G__180694,G__180693){
var G__180695 = (1);
var G__180696 = ((G__180693.cljs$core$IFn$_invoke$arity$1 ? G__180693.cljs$core$IFn$_invoke$arity$1(G__180694) : G__180693.call(null,G__180694)) + (1));
return (G__180692.cljs$core$IFn$_invoke$arity$2 ? G__180692.cljs$core$IFn$_invoke$arity$2(G__180695,G__180696) : G__180692.call(null,G__180695,G__180696));
});})(title__$2,link__$2,all_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__180697 = general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__180698 = general.toc_mobile.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (item__8273__auto____$3){
var vec__180699 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180699,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__180699,ssub,G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180702,G__180701,G__180700){
var G__180703 = G__180701;
var G__180704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180702,cljs.core.cst$kw$title], null);
return (G__180700.cljs$core$IFn$_invoke$arity$2 ? G__180700.cljs$core$IFn$_invoke$arity$2(G__180703,G__180704) : G__180700.call(null,G__180703,G__180704));
});})(vec__180699,ssub,G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__180699,ssub,G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_){
return (function (G__180707,G__180706,G__180705){
var G__180708 = G__180706;
var G__180709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__180707,cljs.core.cst$kw$link], null);
return (G__180705.cljs$core$IFn$_invoke$arity$2 ? G__180705.cljs$core$IFn$_invoke$arity$2(G__180708,G__180709) : G__180705.call(null,G__180708,G__180709));
});})(title__$3,vec__180699,ssub,G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__180697,title__$2,link__$2,all_ssub,num_ssub,vec__180675,sub,G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__180697,G__180698) : tailrecursion.hoplon.div.call(null,G__180697,G__180698));
});})(G__180673,title__$1,link__$1,all_subs,num_subs,vec__180651,sect,G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__180673,G__180674) : tailrecursion.hoplon.div.call(null,G__180673,G__180674));
});})(G__180649,title,link,all_sects,num_sects,vec__180627,ch,all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__180649,G__180650) : tailrecursion.hoplon.div.call(null,G__180649,G__180650));
});})(all_chapters,num_chapters,G__180614,G__180615,vec__180611,one,two,three,four,vec__180608,map__180609,map__180609__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__180614,G__180615,G__180616) : tailrecursion.hoplon.div.call(null,G__180614,G__180615,G__180616));
})()], 0));
};
var general$toc_mobile$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180710__i = 0, G__180710__a = new Array(arguments.length -  0);
while (G__180710__i < G__180710__a.length) {G__180710__a[G__180710__i] = arguments[G__180710__i + 0]; ++G__180710__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180710__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__180711){
var args__8262__auto__ = cljs.core.seq(arglist__180711);
return general$toc_mobile$toc__delegate(args__8262__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;
