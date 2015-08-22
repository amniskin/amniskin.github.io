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
var vec__159770 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159770,(0),null);
var map__159771__$1 = ((((!((map__159771 == null)))?((((map__159771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159771):map__159771);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159771__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159771__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159770,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (G__159773,G__159774,G__159775){
return (G__159773.cljs$core$IFn$_invoke$arity$2 ? G__159773.cljs$core$IFn$_invoke$arity$2(G__159774,G__159775) : G__159773.call(null,G__159774,G__159775));
});})(vec__159770,map__159771,map__159771__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (G__159776,G__159777,G__159778){
return (G__159776.cljs$core$IFn$_invoke$arity$2 ? G__159776.cljs$core$IFn$_invoke$arity$2(G__159777,G__159778) : G__159776.call(null,G__159777,G__159778));
});})(scroll_link_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (G__159779,G__159780){
var or__5022__auto__ = G__159779;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__159780;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__159782 = cljs.core.cst$kw$class;
var G__159783 = tailrecursion.javelin.formula(((function (G__159782,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (G__159791){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__159791], null);
});})(G__159782,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_))
).call(null,active_QMARK_);
var G__159784 = cljs.core.cst$kw$click;
var G__159785 = ((function (G__159782,G__159783,G__159784,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__159782,G__159783,G__159784,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_))
;
var G__159786 = cljs.core.cst$kw$hover;
var G__159787 = ((function (G__159782,G__159783,G__159784,G__159785,G__159786,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__159782,G__159783,G__159784,G__159785,G__159786,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__159770,map__159771,map__159771__$1,link,title,_))
;
var G__159788 = cljs.core.cst$kw$href;
var G__159789 = link;
var G__159790 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__159782,G__159783,G__159784,G__159785,G__159786,G__159787,G__159788,G__159789,G__159790) : tailrecursion.hoplon.a.call(null,G__159782,G__159783,G__159784,G__159785,G__159786,G__159787,G__159788,G__159789,G__159790));
};
var general$toc_mobile$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159792__i = 0, G__159792__a = new Array(arguments.length -  0);
while (G__159792__i < G__159792__a.length) {G__159792__a[G__159792__i] = arguments[G__159792__i + 0]; ++G__159792__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159792__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__159793){
var args__8262__auto__ = cljs.core.seq(arglist__159793);
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
var vec__159798 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159798,(0),null);
var map__159799__$1 = ((((!((map__159799 == null)))?((((map__159799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159799):map__159799);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159799__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159799__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159798,(1),null);
var G__159801 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__159801) : tailrecursion.hoplon.li.call(null,G__159801));
};
var general$toc_mobile$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159802__i = 0, G__159802__a = new Array(arguments.length -  0);
while (G__159802__i < G__159802__a.length) {G__159802__a[G__159802__i] = arguments[G__159802__i + 0]; ++G__159802__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159802__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__159803){
var args__8262__auto__ = cljs.core.seq(arglist__159803);
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
var vec__159810 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159810,(0),null);
var map__159811__$1 = ((((!((map__159811 == null)))?((((map__159811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159811):map__159811);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159811__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159811__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159810,(1),null);
var G__159813 = cljs.core.cst$kw$style;
var G__159814 = "margin-left:0px; font-size:13px;";
var G__159815 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__159813,G__159814,G__159815) : tailrecursion.hoplon.li.call(null,G__159813,G__159814,G__159815));
};
var general$toc_mobile$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159816__i = 0, G__159816__a = new Array(arguments.length -  0);
while (G__159816__i < G__159816__a.length) {G__159816__a[G__159816__i] = arguments[G__159816__i + 0]; ++G__159816__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159816__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__159817){
var args__8262__auto__ = cljs.core.seq(arglist__159817);
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
var vec__159824 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159824,(0),null);
var map__159825__$1 = ((((!((map__159825 == null)))?((((map__159825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159825):map__159825);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159825__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159825__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159824,(1),null);
var G__159827 = cljs.core.cst$kw$style;
var G__159828 = "font-size:12px;";
var G__159829 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__159827,G__159828,G__159829) : tailrecursion.hoplon.li.call(null,G__159827,G__159828,G__159829));
};
var general$toc_mobile$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159830__i = 0, G__159830__a = new Array(arguments.length -  0);
while (G__159830__i < G__159830__a.length) {G__159830__a[G__159830__i] = arguments[G__159830__i + 0]; ++G__159830__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159830__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__159831){
var args__8262__auto__ = cljs.core.seq(arglist__159831);
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
var vec__159833 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159833,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159833,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159834__i = 0, G__159834__a = new Array(arguments.length -  0);
while (G__159834__i < G__159834__a.length) {G__159834__a[G__159834__i] = arguments[G__159834__i + 0]; ++G__159834__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159834__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__159835){
var args__8262__auto__ = cljs.core.seq(arglist__159835);
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
var vec__159861 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159861,(0),null);
var map__159862__$1 = ((((!((map__159862 == null)))?((((map__159862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159862):map__159862);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159862__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159861,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__159873 = cljs.core.cst$kw$style;
var G__159874 = "padding-left:10px; padding-top:0px;";
var G__159875 = cljs.core.cst$kw$class;
var G__159876 = tailrecursion.javelin.formula(((function (G__159873,G__159874,G__159875,vec__159861,map__159862,map__159862__$1,ch,kids){
return (function (G__159878,G__159880,G__159877,G__159879){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__159883 = (function (){var G__159884 = G__159879;
var G__159885 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__159880);
return (G__159878.cljs$core$IFn$_invoke$arity$2 ? G__159878.cljs$core$IFn$_invoke$arity$2(G__159884,G__159885) : G__159878.call(null,G__159884,G__159885));
})();
return (G__159877.cljs$core$IFn$_invoke$arity$1 ? G__159877.cljs$core$IFn$_invoke$arity$1(G__159883) : G__159877.call(null,G__159883));
})()], null);
});})(G__159873,G__159874,G__159875,vec__159861,map__159862,map__159862__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__159873,G__159874,G__159875,G__159876) : tailrecursion.hoplon.ul.call(null,G__159873,G__159874,G__159875,G__159876));
})(),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159886__i = 0, G__159886__a = new Array(arguments.length -  0);
while (G__159886__i < G__159886__a.length) {G__159886__a[G__159886__i] = arguments[G__159886__i + 0]; ++G__159886__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159886__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__159887){
var args__8262__auto__ = cljs.core.seq(arglist__159887);
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
var vec__159923 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__159924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159923,(0),null);
var map__159924__$1 = ((((!((map__159924 == null)))?((((map__159924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__159924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159924):map__159924);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159924__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159924__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159923,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__159940 = cljs.core.cst$kw$style;
var G__159941 = "padding-left:10px; padding-top:0px;";
var G__159942 = cljs.core.cst$kw$class;
var G__159943 = tailrecursion.javelin.formula(((function (G__159940,G__159941,G__159942,vec__159923,map__159924,map__159924__$1,ch,sect,kids){
return (function (G__159945,G__159946,G__159948,G__159944,G__159947){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__159953 = ((function (){var G__159954 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__159946);
var G__159955 = G__159947;
return (G__159945.cljs$core$IFn$_invoke$arity$2 ? G__159945.cljs$core$IFn$_invoke$arity$2(G__159954,G__159955) : G__159945.call(null,G__159954,G__159955));
})()) && ((function (){var G__159956 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__159946);
var G__159957 = G__159948;
return (G__159945.cljs$core$IFn$_invoke$arity$2 ? G__159945.cljs$core$IFn$_invoke$arity$2(G__159956,G__159957) : G__159945.call(null,G__159956,G__159957));
})());
return (G__159944.cljs$core$IFn$_invoke$arity$1 ? G__159944.cljs$core$IFn$_invoke$arity$1(G__159953) : G__159944.call(null,G__159953));
})()], null);
});})(G__159940,G__159941,G__159942,vec__159923,map__159924,map__159924__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__159940,G__159941,G__159942,G__159943) : tailrecursion.hoplon.ul.call(null,G__159940,G__159941,G__159942,G__159943));
})(),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__159958__i = 0, G__159958__a = new Array(arguments.length -  0);
while (G__159958__i < G__159958__a.length) {G__159958__a[G__159958__i] = arguments[G__159958__i + 0]; ++G__159958__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__159958__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__159959){
var args__8262__auto__ = cljs.core.seq(arglist__159959);
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
var vec__160005 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160005,(0),null);
var map__160006__$1 = ((((!((map__160006 == null)))?((((map__160006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160006):map__160006);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160006__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160006__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160006__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160005,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__160027 = cljs.core.cst$kw$style;
var G__160028 = "padding-left: 10px;";
var G__160029 = cljs.core.cst$kw$class;
var G__160030 = tailrecursion.javelin.formula(((function (G__160027,G__160028,G__160029,vec__160005,map__160006,map__160006__$1,ch,sect,sub,kids){
return (function (G__160032,G__160033,G__160035,G__160036,G__160031,G__160034){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__160043 = ((function (){var G__160044 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__160033);
var G__160045 = G__160034;
return (G__160032.cljs$core$IFn$_invoke$arity$2 ? G__160032.cljs$core$IFn$_invoke$arity$2(G__160044,G__160045) : G__160032.call(null,G__160044,G__160045));
})()) && ((function (){var G__160046 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__160033);
var G__160047 = G__160035;
return (G__160032.cljs$core$IFn$_invoke$arity$2 ? G__160032.cljs$core$IFn$_invoke$arity$2(G__160046,G__160047) : G__160032.call(null,G__160046,G__160047));
})()) && ((function (){var G__160048 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__160033);
var G__160049 = G__160036;
return (G__160032.cljs$core$IFn$_invoke$arity$2 ? G__160032.cljs$core$IFn$_invoke$arity$2(G__160048,G__160049) : G__160032.call(null,G__160048,G__160049));
})());
return (G__160031.cljs$core$IFn$_invoke$arity$1 ? G__160031.cljs$core$IFn$_invoke$arity$1(G__160043) : G__160031.call(null,G__160043));
})()], null);
});})(G__160027,G__160028,G__160029,vec__160005,map__160006,map__160006__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__160027,G__160028,G__160029,G__160030) : tailrecursion.hoplon.ul.call(null,G__160027,G__160028,G__160029,G__160030));
})(),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160050__i = 0, G__160050__a = new Array(arguments.length -  0);
while (G__160050__i < G__160050__a.length) {G__160050__a[G__160050__i] = arguments[G__160050__i + 0]; ++G__160050__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160050__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__160051){
var args__8262__auto__ = cljs.core.seq(arglist__160051);
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
var vec__160154 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160154,(0),null);
var map__160155__$1 = ((((!((map__160155 == null)))?((((map__160155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160155):map__160155);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160155__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160154,(1),null);
var vec__160157 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160157,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160157,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160157,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160157,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__160160 = cljs.core.cst$kw$class;
var G__160161 = tailrecursion.javelin.formula(((function (G__160160,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160163,G__160164){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible_DASH_xs,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$in,(G__160163.cljs$core$IFn$_invoke$arity$2 ? G__160163.cljs$core$IFn$_invoke$arity$2(G__160164,"toc") : G__160163.call(null,G__160164,"toc"))], null);
});})(G__160160,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__160162 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160166,G__160167,G__160165){
return (G__160165.cljs$core$IFn$_invoke$arity$2 ? G__160165.cljs$core$IFn$_invoke$arity$2(G__160166,G__160167) : G__160165.call(null,G__160166,G__160167));
});})(G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160170,G__160168,G__160169){
var G__160171 = (1);
var G__160172 = ((G__160169.cljs$core$IFn$_invoke$arity$1 ? G__160169.cljs$core$IFn$_invoke$arity$1(G__160170) : G__160169.call(null,G__160170)) + (1));
return (G__160168.cljs$core$IFn$_invoke$arity$2 ? G__160168.cljs$core$IFn$_invoke$arity$2(G__160171,G__160172) : G__160168.call(null,G__160171,G__160172));
});})(all_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (item__8273__auto__){
var vec__160173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160173,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160175,G__160176,G__160174){
var G__160177 = G__160175;
var G__160178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160176,cljs.core.cst$kw$title], null);
return (G__160174.cljs$core$IFn$_invoke$arity$2 ? G__160174.cljs$core$IFn$_invoke$arity$2(G__160177,G__160178) : G__160174.call(null,G__160177,G__160178));
});})(vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160180,G__160181,G__160179){
var G__160182 = G__160180;
var G__160183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160181,cljs.core.cst$kw$link], null);
return (G__160179.cljs$core$IFn$_invoke$arity$2 ? G__160179.cljs$core$IFn$_invoke$arity$2(G__160182,G__160183) : G__160179.call(null,G__160182,G__160183));
});})(title,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160185,G__160186,G__160187,G__160184){
var G__160188 = G__160185;
var G__160189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160186,G__160187], null);
return (G__160184.cljs$core$IFn$_invoke$arity$2 ? G__160184.cljs$core$IFn$_invoke$arity$2(G__160188,G__160189) : G__160184.call(null,G__160188,G__160189));
});})(title,link,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160192,G__160190,G__160191){
var G__160193 = (1);
var G__160194 = ((G__160191.cljs$core$IFn$_invoke$arity$1 ? G__160191.cljs$core$IFn$_invoke$arity$1(G__160192) : G__160191.call(null,G__160192)) + (1));
return (G__160190.cljs$core$IFn$_invoke$arity$2 ? G__160190.cljs$core$IFn$_invoke$arity$2(G__160193,G__160194) : G__160190.call(null,G__160193,G__160194));
});})(title,link,all_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__160195 = general.toc_mobile.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__160196 = general.toc_mobile.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (item__8273__auto____$1){
var vec__160197 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160197,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160199,G__160200,G__160198){
var G__160201 = G__160199;
var G__160202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160200,cljs.core.cst$kw$title], null);
return (G__160198.cljs$core$IFn$_invoke$arity$2 ? G__160198.cljs$core$IFn$_invoke$arity$2(G__160201,G__160202) : G__160198.call(null,G__160201,G__160202));
});})(vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160204,G__160205,G__160203){
var G__160206 = G__160204;
var G__160207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160205,cljs.core.cst$kw$link], null);
return (G__160203.cljs$core$IFn$_invoke$arity$2 ? G__160203.cljs$core$IFn$_invoke$arity$2(G__160206,G__160207) : G__160203.call(null,G__160206,G__160207));
});})(title__$1,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160209,G__160210,G__160211,G__160208){
var G__160212 = G__160209;
var G__160213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160210,G__160211], null);
return (G__160208.cljs$core$IFn$_invoke$arity$2 ? G__160208.cljs$core$IFn$_invoke$arity$2(G__160212,G__160213) : G__160208.call(null,G__160212,G__160213));
});})(title__$1,link__$1,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160214,G__160216,G__160215){
var G__160217 = (1);
var G__160218 = ((G__160215.cljs$core$IFn$_invoke$arity$1 ? G__160215.cljs$core$IFn$_invoke$arity$1(G__160216) : G__160215.call(null,G__160216)) + (1));
return (G__160214.cljs$core$IFn$_invoke$arity$2 ? G__160214.cljs$core$IFn$_invoke$arity$2(G__160217,G__160218) : G__160214.call(null,G__160217,G__160218));
});})(title__$1,link__$1,all_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__160219 = general.toc_mobile.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__160220 = general.toc_mobile.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (item__8273__auto____$2){
var vec__160221 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160221,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160224,G__160223,G__160222){
var G__160225 = G__160223;
var G__160226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160224,cljs.core.cst$kw$title], null);
return (G__160222.cljs$core$IFn$_invoke$arity$2 ? G__160222.cljs$core$IFn$_invoke$arity$2(G__160225,G__160226) : G__160222.call(null,G__160225,G__160226));
});})(vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160229,G__160228,G__160227){
var G__160230 = G__160228;
var G__160231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160229,cljs.core.cst$kw$link], null);
return (G__160227.cljs$core$IFn$_invoke$arity$2 ? G__160227.cljs$core$IFn$_invoke$arity$2(G__160230,G__160231) : G__160227.call(null,G__160230,G__160231));
});})(title__$2,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160234,G__160233,G__160235,G__160232){
var G__160236 = G__160233;
var G__160237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160234,G__160235], null);
return (G__160232.cljs$core$IFn$_invoke$arity$2 ? G__160232.cljs$core$IFn$_invoke$arity$2(G__160236,G__160237) : G__160232.call(null,G__160236,G__160237));
});})(title__$2,link__$2,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160238,G__160240,G__160239){
var G__160241 = (1);
var G__160242 = ((G__160239.cljs$core$IFn$_invoke$arity$1 ? G__160239.cljs$core$IFn$_invoke$arity$1(G__160240) : G__160239.call(null,G__160240)) + (1));
return (G__160238.cljs$core$IFn$_invoke$arity$2 ? G__160238.cljs$core$IFn$_invoke$arity$2(G__160241,G__160242) : G__160238.call(null,G__160241,G__160242));
});})(title__$2,link__$2,all_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__160243 = general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__160244 = general.toc_mobile.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (item__8273__auto____$3){
var vec__160245 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160245,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__160245,ssub,G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160248,G__160247,G__160246){
var G__160249 = G__160247;
var G__160250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160248,cljs.core.cst$kw$title], null);
return (G__160246.cljs$core$IFn$_invoke$arity$2 ? G__160246.cljs$core$IFn$_invoke$arity$2(G__160249,G__160250) : G__160246.call(null,G__160249,G__160250));
});})(vec__160245,ssub,G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__160245,ssub,G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_){
return (function (G__160253,G__160252,G__160251){
var G__160254 = G__160252;
var G__160255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160253,cljs.core.cst$kw$link], null);
return (G__160251.cljs$core$IFn$_invoke$arity$2 ? G__160251.cljs$core$IFn$_invoke$arity$2(G__160254,G__160255) : G__160251.call(null,G__160254,G__160255));
});})(title__$3,vec__160245,ssub,G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__160243,title__$2,link__$2,all_ssub,num_ssub,vec__160221,sub,G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160243,G__160244) : tailrecursion.hoplon.div.call(null,G__160243,G__160244));
});})(G__160219,title__$1,link__$1,all_subs,num_subs,vec__160197,sect,G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160219,G__160220) : tailrecursion.hoplon.div.call(null,G__160219,G__160220));
});})(G__160195,title,link,all_sects,num_sects,vec__160173,ch,all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160195,G__160196) : tailrecursion.hoplon.div.call(null,G__160195,G__160196));
});})(all_chapters,num_chapters,G__160160,G__160161,vec__160157,one,two,three,four,vec__160154,map__160155,map__160155__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__160160,G__160161,G__160162) : tailrecursion.hoplon.div.call(null,G__160160,G__160161,G__160162));
})()], 0));
};
var general$toc_mobile$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160256__i = 0, G__160256__a = new Array(arguments.length -  0);
while (G__160256__i < G__160256__a.length) {G__160256__a[G__160256__i] = arguments[G__160256__i + 0]; ++G__160256__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160256__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__160257){
var args__8262__auto__ = cljs.core.seq(arglist__160257);
return general$toc_mobile$toc__delegate(args__8262__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;
