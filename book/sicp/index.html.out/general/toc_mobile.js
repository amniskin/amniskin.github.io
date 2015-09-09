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
var vec__183094 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183094,(0),null);
var map__183095__$1 = ((((!((map__183095 == null)))?((((map__183095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183095):map__183095);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183095__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183095__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183094,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (G__183097,G__183098,G__183099){
return (G__183097.cljs$core$IFn$_invoke$arity$2 ? G__183097.cljs$core$IFn$_invoke$arity$2(G__183098,G__183099) : G__183097.call(null,G__183098,G__183099));
});})(vec__183094,map__183095,map__183095__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (G__183100,G__183101,G__183102){
return (G__183100.cljs$core$IFn$_invoke$arity$2 ? G__183100.cljs$core$IFn$_invoke$arity$2(G__183101,G__183102) : G__183100.call(null,G__183101,G__183102));
});})(scroll_link_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (G__183103,G__183104){
var or__5022__auto__ = G__183103;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__183104;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__183106 = cljs.core.cst$kw$class;
var G__183107 = tailrecursion.javelin.formula(((function (G__183106,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (G__183115){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__183115], null);
});})(G__183106,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_))
).call(null,active_QMARK_);
var G__183108 = cljs.core.cst$kw$click;
var G__183109 = ((function (G__183106,G__183107,G__183108,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__183106,G__183107,G__183108,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_))
;
var G__183110 = cljs.core.cst$kw$hover;
var G__183111 = ((function (G__183106,G__183107,G__183108,G__183109,G__183110,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__183106,G__183107,G__183108,G__183109,G__183110,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183094,map__183095,map__183095__$1,link,title,_))
;
var G__183112 = cljs.core.cst$kw$href;
var G__183113 = link;
var G__183114 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__183106,G__183107,G__183108,G__183109,G__183110,G__183111,G__183112,G__183113,G__183114) : tailrecursion.hoplon.a.call(null,G__183106,G__183107,G__183108,G__183109,G__183110,G__183111,G__183112,G__183113,G__183114));
};
var general$toc_mobile$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183116__i = 0, G__183116__a = new Array(arguments.length -  0);
while (G__183116__i < G__183116__a.length) {G__183116__a[G__183116__i] = arguments[G__183116__i + 0]; ++G__183116__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183116__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__183117){
var args__8262__auto__ = cljs.core.seq(arglist__183117);
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
var vec__183122 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183122,(0),null);
var map__183123__$1 = ((((!((map__183123 == null)))?((((map__183123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183123):map__183123);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183123__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183123__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183122,(1),null);
var G__183125 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__183125) : tailrecursion.hoplon.li.call(null,G__183125));
};
var general$toc_mobile$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183126__i = 0, G__183126__a = new Array(arguments.length -  0);
while (G__183126__i < G__183126__a.length) {G__183126__a[G__183126__i] = arguments[G__183126__i + 0]; ++G__183126__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183126__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__183127){
var args__8262__auto__ = cljs.core.seq(arglist__183127);
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
var vec__183134 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183134,(0),null);
var map__183135__$1 = ((((!((map__183135 == null)))?((((map__183135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183135):map__183135);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183135__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183135__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183134,(1),null);
var G__183137 = cljs.core.cst$kw$style;
var G__183138 = "margin-left:0px; font-size:13px;";
var G__183139 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__183137,G__183138,G__183139) : tailrecursion.hoplon.li.call(null,G__183137,G__183138,G__183139));
};
var general$toc_mobile$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183140__i = 0, G__183140__a = new Array(arguments.length -  0);
while (G__183140__i < G__183140__a.length) {G__183140__a[G__183140__i] = arguments[G__183140__i + 0]; ++G__183140__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183140__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__183141){
var args__8262__auto__ = cljs.core.seq(arglist__183141);
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
var vec__183148 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183148,(0),null);
var map__183149__$1 = ((((!((map__183149 == null)))?((((map__183149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183149):map__183149);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183149__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183149__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183148,(1),null);
var G__183151 = cljs.core.cst$kw$style;
var G__183152 = "font-size:12px;";
var G__183153 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__183151,G__183152,G__183153) : tailrecursion.hoplon.li.call(null,G__183151,G__183152,G__183153));
};
var general$toc_mobile$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183154__i = 0, G__183154__a = new Array(arguments.length -  0);
while (G__183154__i < G__183154__a.length) {G__183154__a[G__183154__i] = arguments[G__183154__i + 0]; ++G__183154__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183154__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__183155){
var args__8262__auto__ = cljs.core.seq(arglist__183155);
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
var vec__183157 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183157,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183157,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183158__i = 0, G__183158__a = new Array(arguments.length -  0);
while (G__183158__i < G__183158__a.length) {G__183158__a[G__183158__i] = arguments[G__183158__i + 0]; ++G__183158__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183158__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__183159){
var args__8262__auto__ = cljs.core.seq(arglist__183159);
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
var vec__183185 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183185,(0),null);
var map__183186__$1 = ((((!((map__183186 == null)))?((((map__183186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183186):map__183186);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183186__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183185,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183197 = cljs.core.cst$kw$style;
var G__183198 = "padding-left:10px; padding-top:0px;";
var G__183199 = cljs.core.cst$kw$class;
var G__183200 = tailrecursion.javelin.formula(((function (G__183197,G__183198,G__183199,vec__183185,map__183186,map__183186__$1,ch,kids){
return (function (G__183202,G__183204,G__183201,G__183203){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183207 = (function (){var G__183208 = G__183203;
var G__183209 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183204);
return (G__183202.cljs$core$IFn$_invoke$arity$2 ? G__183202.cljs$core$IFn$_invoke$arity$2(G__183208,G__183209) : G__183202.call(null,G__183208,G__183209));
})();
return (G__183201.cljs$core$IFn$_invoke$arity$1 ? G__183201.cljs$core$IFn$_invoke$arity$1(G__183207) : G__183201.call(null,G__183207));
})()], null);
});})(G__183197,G__183198,G__183199,vec__183185,map__183186,map__183186__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183197,G__183198,G__183199,G__183200) : tailrecursion.hoplon.ul.call(null,G__183197,G__183198,G__183199,G__183200));
})(),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183210__i = 0, G__183210__a = new Array(arguments.length -  0);
while (G__183210__i < G__183210__a.length) {G__183210__a[G__183210__i] = arguments[G__183210__i + 0]; ++G__183210__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183210__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__183211){
var args__8262__auto__ = cljs.core.seq(arglist__183211);
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
var vec__183247 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183247,(0),null);
var map__183248__$1 = ((((!((map__183248 == null)))?((((map__183248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183248):map__183248);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183248__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183248__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183247,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183264 = cljs.core.cst$kw$style;
var G__183265 = "padding-left:10px; padding-top:0px;";
var G__183266 = cljs.core.cst$kw$class;
var G__183267 = tailrecursion.javelin.formula(((function (G__183264,G__183265,G__183266,vec__183247,map__183248,map__183248__$1,ch,sect,kids){
return (function (G__183269,G__183270,G__183272,G__183268,G__183271){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183277 = ((function (){var G__183278 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183270);
var G__183279 = G__183271;
return (G__183269.cljs$core$IFn$_invoke$arity$2 ? G__183269.cljs$core$IFn$_invoke$arity$2(G__183278,G__183279) : G__183269.call(null,G__183278,G__183279));
})()) && ((function (){var G__183280 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__183270);
var G__183281 = G__183272;
return (G__183269.cljs$core$IFn$_invoke$arity$2 ? G__183269.cljs$core$IFn$_invoke$arity$2(G__183280,G__183281) : G__183269.call(null,G__183280,G__183281));
})());
return (G__183268.cljs$core$IFn$_invoke$arity$1 ? G__183268.cljs$core$IFn$_invoke$arity$1(G__183277) : G__183268.call(null,G__183277));
})()], null);
});})(G__183264,G__183265,G__183266,vec__183247,map__183248,map__183248__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183264,G__183265,G__183266,G__183267) : tailrecursion.hoplon.ul.call(null,G__183264,G__183265,G__183266,G__183267));
})(),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183282__i = 0, G__183282__a = new Array(arguments.length -  0);
while (G__183282__i < G__183282__a.length) {G__183282__a[G__183282__i] = arguments[G__183282__i + 0]; ++G__183282__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183282__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__183283){
var args__8262__auto__ = cljs.core.seq(arglist__183283);
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
var vec__183329 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183329,(0),null);
var map__183330__$1 = ((((!((map__183330 == null)))?((((map__183330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183330):map__183330);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183330__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183330__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183330__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183329,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183351 = cljs.core.cst$kw$style;
var G__183352 = "padding-left: 10px;";
var G__183353 = cljs.core.cst$kw$class;
var G__183354 = tailrecursion.javelin.formula(((function (G__183351,G__183352,G__183353,vec__183329,map__183330,map__183330__$1,ch,sect,sub,kids){
return (function (G__183356,G__183357,G__183359,G__183360,G__183355,G__183358){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183367 = ((function (){var G__183368 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183357);
var G__183369 = G__183358;
return (G__183356.cljs$core$IFn$_invoke$arity$2 ? G__183356.cljs$core$IFn$_invoke$arity$2(G__183368,G__183369) : G__183356.call(null,G__183368,G__183369));
})()) && ((function (){var G__183370 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__183357);
var G__183371 = G__183359;
return (G__183356.cljs$core$IFn$_invoke$arity$2 ? G__183356.cljs$core$IFn$_invoke$arity$2(G__183370,G__183371) : G__183356.call(null,G__183370,G__183371));
})()) && ((function (){var G__183372 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__183357);
var G__183373 = G__183360;
return (G__183356.cljs$core$IFn$_invoke$arity$2 ? G__183356.cljs$core$IFn$_invoke$arity$2(G__183372,G__183373) : G__183356.call(null,G__183372,G__183373));
})());
return (G__183355.cljs$core$IFn$_invoke$arity$1 ? G__183355.cljs$core$IFn$_invoke$arity$1(G__183367) : G__183355.call(null,G__183367));
})()], null);
});})(G__183351,G__183352,G__183353,vec__183329,map__183330,map__183330__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183351,G__183352,G__183353,G__183354) : tailrecursion.hoplon.ul.call(null,G__183351,G__183352,G__183353,G__183354));
})(),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183374__i = 0, G__183374__a = new Array(arguments.length -  0);
while (G__183374__i < G__183374__a.length) {G__183374__a[G__183374__i] = arguments[G__183374__i + 0]; ++G__183374__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183374__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__183375){
var args__8262__auto__ = cljs.core.seq(arglist__183375);
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
var vec__183478 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183478,(0),null);
var map__183479__$1 = ((((!((map__183479 == null)))?((((map__183479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183479):map__183479);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183479__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183478,(1),null);
var vec__183481 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183481,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183481,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183481,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183481,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__183484 = cljs.core.cst$kw$class;
var G__183485 = tailrecursion.javelin.formula(((function (G__183484,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183487,G__183488){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible_DASH_xs,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$in,(G__183487.cljs$core$IFn$_invoke$arity$2 ? G__183487.cljs$core$IFn$_invoke$arity$2(G__183488,"toc") : G__183487.call(null,G__183488,"toc"))], null);
});})(G__183484,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__183486 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183490,G__183491,G__183489){
return (G__183489.cljs$core$IFn$_invoke$arity$2 ? G__183489.cljs$core$IFn$_invoke$arity$2(G__183490,G__183491) : G__183489.call(null,G__183490,G__183491));
});})(G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183494,G__183492,G__183493){
var G__183495 = (1);
var G__183496 = ((G__183493.cljs$core$IFn$_invoke$arity$1 ? G__183493.cljs$core$IFn$_invoke$arity$1(G__183494) : G__183493.call(null,G__183494)) + (1));
return (G__183492.cljs$core$IFn$_invoke$arity$2 ? G__183492.cljs$core$IFn$_invoke$arity$2(G__183495,G__183496) : G__183492.call(null,G__183495,G__183496));
});})(all_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (item__8273__auto__){
var vec__183497 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183497,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183499,G__183500,G__183498){
var G__183501 = G__183499;
var G__183502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183500,cljs.core.cst$kw$title], null);
return (G__183498.cljs$core$IFn$_invoke$arity$2 ? G__183498.cljs$core$IFn$_invoke$arity$2(G__183501,G__183502) : G__183498.call(null,G__183501,G__183502));
});})(vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183504,G__183505,G__183503){
var G__183506 = G__183504;
var G__183507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183505,cljs.core.cst$kw$link], null);
return (G__183503.cljs$core$IFn$_invoke$arity$2 ? G__183503.cljs$core$IFn$_invoke$arity$2(G__183506,G__183507) : G__183503.call(null,G__183506,G__183507));
});})(title,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183509,G__183510,G__183511,G__183508){
var G__183512 = G__183509;
var G__183513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183510,G__183511], null);
return (G__183508.cljs$core$IFn$_invoke$arity$2 ? G__183508.cljs$core$IFn$_invoke$arity$2(G__183512,G__183513) : G__183508.call(null,G__183512,G__183513));
});})(title,link,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183516,G__183514,G__183515){
var G__183517 = (1);
var G__183518 = ((G__183515.cljs$core$IFn$_invoke$arity$1 ? G__183515.cljs$core$IFn$_invoke$arity$1(G__183516) : G__183515.call(null,G__183516)) + (1));
return (G__183514.cljs$core$IFn$_invoke$arity$2 ? G__183514.cljs$core$IFn$_invoke$arity$2(G__183517,G__183518) : G__183514.call(null,G__183517,G__183518));
});})(title,link,all_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__183519 = general.toc_mobile.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__183520 = general.toc_mobile.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (item__8273__auto____$1){
var vec__183521 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183521,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183523,G__183524,G__183522){
var G__183525 = G__183523;
var G__183526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183524,cljs.core.cst$kw$title], null);
return (G__183522.cljs$core$IFn$_invoke$arity$2 ? G__183522.cljs$core$IFn$_invoke$arity$2(G__183525,G__183526) : G__183522.call(null,G__183525,G__183526));
});})(vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183528,G__183529,G__183527){
var G__183530 = G__183528;
var G__183531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183529,cljs.core.cst$kw$link], null);
return (G__183527.cljs$core$IFn$_invoke$arity$2 ? G__183527.cljs$core$IFn$_invoke$arity$2(G__183530,G__183531) : G__183527.call(null,G__183530,G__183531));
});})(title__$1,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183533,G__183534,G__183535,G__183532){
var G__183536 = G__183533;
var G__183537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183534,G__183535], null);
return (G__183532.cljs$core$IFn$_invoke$arity$2 ? G__183532.cljs$core$IFn$_invoke$arity$2(G__183536,G__183537) : G__183532.call(null,G__183536,G__183537));
});})(title__$1,link__$1,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183538,G__183540,G__183539){
var G__183541 = (1);
var G__183542 = ((G__183539.cljs$core$IFn$_invoke$arity$1 ? G__183539.cljs$core$IFn$_invoke$arity$1(G__183540) : G__183539.call(null,G__183540)) + (1));
return (G__183538.cljs$core$IFn$_invoke$arity$2 ? G__183538.cljs$core$IFn$_invoke$arity$2(G__183541,G__183542) : G__183538.call(null,G__183541,G__183542));
});})(title__$1,link__$1,all_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__183543 = general.toc_mobile.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__183544 = general.toc_mobile.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (item__8273__auto____$2){
var vec__183545 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183545,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183548,G__183547,G__183546){
var G__183549 = G__183547;
var G__183550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183548,cljs.core.cst$kw$title], null);
return (G__183546.cljs$core$IFn$_invoke$arity$2 ? G__183546.cljs$core$IFn$_invoke$arity$2(G__183549,G__183550) : G__183546.call(null,G__183549,G__183550));
});})(vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183553,G__183552,G__183551){
var G__183554 = G__183552;
var G__183555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183553,cljs.core.cst$kw$link], null);
return (G__183551.cljs$core$IFn$_invoke$arity$2 ? G__183551.cljs$core$IFn$_invoke$arity$2(G__183554,G__183555) : G__183551.call(null,G__183554,G__183555));
});})(title__$2,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183558,G__183557,G__183559,G__183556){
var G__183560 = G__183557;
var G__183561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183558,G__183559], null);
return (G__183556.cljs$core$IFn$_invoke$arity$2 ? G__183556.cljs$core$IFn$_invoke$arity$2(G__183560,G__183561) : G__183556.call(null,G__183560,G__183561));
});})(title__$2,link__$2,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183562,G__183564,G__183563){
var G__183565 = (1);
var G__183566 = ((G__183563.cljs$core$IFn$_invoke$arity$1 ? G__183563.cljs$core$IFn$_invoke$arity$1(G__183564) : G__183563.call(null,G__183564)) + (1));
return (G__183562.cljs$core$IFn$_invoke$arity$2 ? G__183562.cljs$core$IFn$_invoke$arity$2(G__183565,G__183566) : G__183562.call(null,G__183565,G__183566));
});})(title__$2,link__$2,all_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__183567 = general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__183568 = general.toc_mobile.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (item__8273__auto____$3){
var vec__183569 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183569,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__183569,ssub,G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183572,G__183571,G__183570){
var G__183573 = G__183571;
var G__183574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183572,cljs.core.cst$kw$title], null);
return (G__183570.cljs$core$IFn$_invoke$arity$2 ? G__183570.cljs$core$IFn$_invoke$arity$2(G__183573,G__183574) : G__183570.call(null,G__183573,G__183574));
});})(vec__183569,ssub,G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__183569,ssub,G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_){
return (function (G__183577,G__183576,G__183575){
var G__183578 = G__183576;
var G__183579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__183577,cljs.core.cst$kw$link], null);
return (G__183575.cljs$core$IFn$_invoke$arity$2 ? G__183575.cljs$core$IFn$_invoke$arity$2(G__183578,G__183579) : G__183575.call(null,G__183578,G__183579));
});})(title__$3,vec__183569,ssub,G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__183567,title__$2,link__$2,all_ssub,num_ssub,vec__183545,sub,G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__183567,G__183568) : tailrecursion.hoplon.div.call(null,G__183567,G__183568));
});})(G__183543,title__$1,link__$1,all_subs,num_subs,vec__183521,sect,G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__183543,G__183544) : tailrecursion.hoplon.div.call(null,G__183543,G__183544));
});})(G__183519,title,link,all_sects,num_sects,vec__183497,ch,all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__183519,G__183520) : tailrecursion.hoplon.div.call(null,G__183519,G__183520));
});})(all_chapters,num_chapters,G__183484,G__183485,vec__183481,one,two,three,four,vec__183478,map__183479,map__183479__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__183484,G__183485,G__183486) : tailrecursion.hoplon.div.call(null,G__183484,G__183485,G__183486));
})()], 0));
};
var general$toc_mobile$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183580__i = 0, G__183580__a = new Array(arguments.length -  0);
while (G__183580__i < G__183580__a.length) {G__183580__a[G__183580__i] = arguments[G__183580__i + 0]; ++G__183580__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183580__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__183581){
var args__8262__auto__ = cljs.core.seq(arglist__183581);
return general$toc_mobile$toc__delegate(args__8262__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;
