// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.book_toc');
goog.require('cljs.core');
goog.require('ui.book');
goog.require('ui.style');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book_toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
ui.book_toc.toc_link = (function() { 
var ui$book_toc$toc_link__delegate = function (args__10403__auto__){
var vec__149687 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149687,(0),null);
var map__149688__$1 = ((cljs.core.seq_QMARK_(map__149688))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149688):map__149688);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149688__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149688__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149687,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (G__149689,G__149690,G__149691){
var G__149692 = G__149690;
var G__149693 = G__149691;
return (G__149689.cljs$core$IFn$_invoke$arity$2 ? G__149689.cljs$core$IFn$_invoke$arity$2(G__149692,G__149693) : G__149689.call(null,G__149692,G__149693));
});})(vec__149687,map__149688,map__149688__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (G__149694,G__149695,G__149696){
var G__149697 = G__149695;
var G__149698 = G__149696;
return (G__149694.cljs$core$IFn$_invoke$arity$2 ? G__149694.cljs$core$IFn$_invoke$arity$2(G__149697,G__149698) : G__149694.call(null,G__149697,G__149698));
});})(scroll_link_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book_toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (G__149699,G__149700){
var or__4210__auto__ = G__149699;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__149700;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__149701 = cljs.core.constant$keyword$class;
var G__149702 = tailrecursion.javelin.formula(((function (G__149701,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (G__149710){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,G__149710], null);
});})(G__149701,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_))
).call(null,active_QMARK_);
var G__149703 = cljs.core.constant$keyword$click;
var G__149704 = ((function (G__149701,G__149702,G__149703,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (){
var G__149711_149717 = ui.book.scroll_location;
var G__149712_149718 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__149711_149717,G__149712_149718) : cljs.core.reset_BANG_.call(null,G__149711_149717,G__149712_149718));

var G__149713 = ui.book.scroll_location;
var G__149714 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__149713,G__149714) : cljs.core.reset_BANG_.call(null,G__149713,G__149714));
});})(G__149701,G__149702,G__149703,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_))
;
var G__149705 = cljs.core.constant$keyword$hover;
var G__149706 = ((function (G__149701,G__149702,G__149703,G__149704,G__149705,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_){
return (function (){
var G__149715 = ui.book_toc.hover_cell;
var G__149716 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__149715,G__149716) : cljs.core.reset_BANG_.call(null,G__149715,G__149716));
});})(G__149701,G__149702,G__149703,G__149704,G__149705,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__149687,map__149688,map__149688__$1,link,title,_))
;
var G__149707 = cljs.core.constant$keyword$href;
var G__149708 = link;
var G__149709 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__149701,G__149702,G__149703,G__149704,G__149705,G__149706,G__149707,G__149708,G__149709) : tailrecursion.hoplon.a.call(null,G__149701,G__149702,G__149703,G__149704,G__149705,G__149706,G__149707,G__149708,G__149709));
};
var ui$book_toc$toc_link = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149719__i = 0, G__149719__a = new Array(arguments.length -  0);
while (G__149719__i < G__149719__a.length) {G__149719__a[G__149719__i] = arguments[G__149719__i + 0]; ++G__149719__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149719__a,0);
} 
return ui$book_toc$toc_link__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc_link.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc_link.cljs$lang$applyTo = (function (arglist__149720){
var args__10403__auto__ = cljs.core.seq(arglist__149720);
return ui$book_toc$toc_link__delegate(args__10403__auto__);
});
ui$book_toc$toc_link.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc_link__delegate;
return ui$book_toc$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_ch = (function() { 
var ui$book_toc$li_ch__delegate = function (args__10403__auto__){
var vec__149724 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149724,(0),null);
var map__149725__$1 = ((cljs.core.seq_QMARK_(map__149725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149725):map__149725);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149725__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149725__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149724,(1),null);
var G__149726 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__149726) : tailrecursion.hoplon.li.call(null,G__149726));
};
var ui$book_toc$li_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149727__i = 0, G__149727__a = new Array(arguments.length -  0);
while (G__149727__i < G__149727__a.length) {G__149727__a[G__149727__i] = arguments[G__149727__i + 0]; ++G__149727__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149727__a,0);
} 
return ui$book_toc$li_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_ch.cljs$lang$applyTo = (function (arglist__149728){
var args__10403__auto__ = cljs.core.seq(arglist__149728);
return ui$book_toc$li_ch__delegate(args__10403__auto__);
});
ui$book_toc$li_ch.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_ch__delegate;
return ui$book_toc$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_sect = (function() { 
var ui$book_toc$li_sect__delegate = function (args__10403__auto__){
var vec__149734 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149734,(0),null);
var map__149735__$1 = ((cljs.core.seq_QMARK_(map__149735))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149735):map__149735);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149735__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149735__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149734,(1),null);
var G__149736 = cljs.core.constant$keyword$style;
var G__149737 = "margin-left:0px; font-size:13px;";
var G__149738 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__149736,G__149737,G__149738) : tailrecursion.hoplon.li.call(null,G__149736,G__149737,G__149738));
};
var ui$book_toc$li_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149739__i = 0, G__149739__a = new Array(arguments.length -  0);
while (G__149739__i < G__149739__a.length) {G__149739__a[G__149739__i] = arguments[G__149739__i + 0]; ++G__149739__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149739__a,0);
} 
return ui$book_toc$li_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sect.cljs$lang$applyTo = (function (arglist__149740){
var args__10403__auto__ = cljs.core.seq(arglist__149740);
return ui$book_toc$li_sect__delegate(args__10403__auto__);
});
ui$book_toc$li_sect.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_sect__delegate;
return ui$book_toc$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_sub = (function() { 
var ui$book_toc$li_sub__delegate = function (args__10403__auto__){
var vec__149746 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149746,(0),null);
var map__149747__$1 = ((cljs.core.seq_QMARK_(map__149747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149747):map__149747);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149747__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149747__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149746,(1),null);
var G__149748 = cljs.core.constant$keyword$style;
var G__149749 = "font-size:12px;";
var G__149750 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__149748,G__149749,G__149750) : tailrecursion.hoplon.li.call(null,G__149748,G__149749,G__149750));
};
var ui$book_toc$li_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149751__i = 0, G__149751__a = new Array(arguments.length -  0);
while (G__149751__i < G__149751__a.length) {G__149751__a[G__149751__i] = arguments[G__149751__i + 0]; ++G__149751__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149751__a,0);
} 
return ui$book_toc$li_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sub.cljs$lang$applyTo = (function (arglist__149752){
var args__10403__auto__ = cljs.core.seq(arglist__149752);
return ui$book_toc$li_sub__delegate(args__10403__auto__);
});
ui$book_toc$li_sub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_sub__delegate;
return ui$book_toc$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_ch = (function() { 
var ui$book_toc$ul_ch__delegate = function (args__10403__auto__){
var vec__149756 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149756,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149756,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__149757 = cljs.core.constant$keyword$class;
var G__149758 = "list-unstyled";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__149757,G__149758) : tailrecursion.hoplon.ul.call(null,G__149757,G__149758));
})(),kids);
};
var ui$book_toc$ul_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149759__i = 0, G__149759__a = new Array(arguments.length -  0);
while (G__149759__i < G__149759__a.length) {G__149759__a[G__149759__i] = arguments[G__149759__i + 0]; ++G__149759__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149759__a,0);
} 
return ui$book_toc$ul_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ch.cljs$lang$applyTo = (function (arglist__149760){
var args__10403__auto__ = cljs.core.seq(arglist__149760);
return ui$book_toc$ul_ch__delegate(args__10403__auto__);
});
ui$book_toc$ul_ch.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_ch__delegate;
return ui$book_toc$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_sect = (function() { 
var ui$book_toc$ul_sect__delegate = function (args__10403__auto__){
var vec__149774 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149774,(0),null);
var map__149775__$1 = ((cljs.core.seq_QMARK_(map__149775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149775):map__149775);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149775__$1,cljs.core.constant$keyword$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149774,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__149776 = cljs.core.constant$keyword$style;
var G__149777 = "padding-left:10px; padding-top:0px;";
var G__149778 = cljs.core.constant$keyword$class;
var G__149779 = tailrecursion.javelin.formula(((function (G__149776,G__149777,G__149778,vec__149774,map__149775,map__149775__$1,ch,kids){
return (function (G__149781,G__149783,G__149780,G__149782){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__149784 = (function (){var G__149785 = G__149782;
var G__149786 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__149783);
return (G__149781.cljs$core$IFn$_invoke$arity$2 ? G__149781.cljs$core$IFn$_invoke$arity$2(G__149785,G__149786) : G__149781.call(null,G__149785,G__149786));
})();
return (G__149780.cljs$core$IFn$_invoke$arity$1 ? G__149780.cljs$core$IFn$_invoke$arity$1(G__149784) : G__149780.call(null,G__149784));
})()], null);
});})(G__149776,G__149777,G__149778,vec__149774,map__149775,map__149775__$1,ch,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__149776,G__149777,G__149778,G__149779) : tailrecursion.hoplon.ul.call(null,G__149776,G__149777,G__149778,G__149779));
})(),kids);
};
var ui$book_toc$ul_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149787__i = 0, G__149787__a = new Array(arguments.length -  0);
while (G__149787__i < G__149787__a.length) {G__149787__a[G__149787__i] = arguments[G__149787__i + 0]; ++G__149787__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149787__a,0);
} 
return ui$book_toc$ul_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sect.cljs$lang$applyTo = (function (arglist__149788){
var args__10403__auto__ = cljs.core.seq(arglist__149788);
return ui$book_toc$ul_sect__delegate(args__10403__auto__);
});
ui$book_toc$ul_sect.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_sect__delegate;
return ui$book_toc$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_sub = (function() { 
var ui$book_toc$ul_sub__delegate = function (args__10403__auto__){
var vec__149805 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149805,(0),null);
var map__149806__$1 = ((cljs.core.seq_QMARK_(map__149806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149806):map__149806);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149806__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149806__$1,cljs.core.constant$keyword$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149805,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__149807 = cljs.core.constant$keyword$style;
var G__149808 = "padding-left:10px; padding-top:0px;";
var G__149809 = cljs.core.constant$keyword$class;
var G__149810 = tailrecursion.javelin.formula(((function (G__149807,G__149808,G__149809,vec__149805,map__149806,map__149806__$1,ch,sect,kids){
return (function (G__149812,G__149813,G__149815,G__149811,G__149814){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__149816 = ((function (){var G__149817 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__149813);
var G__149818 = G__149814;
return (G__149812.cljs$core$IFn$_invoke$arity$2 ? G__149812.cljs$core$IFn$_invoke$arity$2(G__149817,G__149818) : G__149812.call(null,G__149817,G__149818));
})()) && ((function (){var G__149819 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__149813);
var G__149820 = G__149815;
return (G__149812.cljs$core$IFn$_invoke$arity$2 ? G__149812.cljs$core$IFn$_invoke$arity$2(G__149819,G__149820) : G__149812.call(null,G__149819,G__149820));
})());
return (G__149811.cljs$core$IFn$_invoke$arity$1 ? G__149811.cljs$core$IFn$_invoke$arity$1(G__149816) : G__149811.call(null,G__149816));
})()], null);
});})(G__149807,G__149808,G__149809,vec__149805,map__149806,map__149806__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__149807,G__149808,G__149809,G__149810) : tailrecursion.hoplon.ul.call(null,G__149807,G__149808,G__149809,G__149810));
})(),kids);
};
var ui$book_toc$ul_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149821__i = 0, G__149821__a = new Array(arguments.length -  0);
while (G__149821__i < G__149821__a.length) {G__149821__a[G__149821__i] = arguments[G__149821__i + 0]; ++G__149821__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149821__a,0);
} 
return ui$book_toc$ul_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sub.cljs$lang$applyTo = (function (arglist__149822){
var args__10403__auto__ = cljs.core.seq(arglist__149822);
return ui$book_toc$ul_sub__delegate(args__10403__auto__);
});
ui$book_toc$ul_sub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_sub__delegate;
return ui$book_toc$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_ssub = (function() { 
var ui$book_toc$ul_ssub__delegate = function (args__10403__auto__){
var vec__149842 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__149843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149842,(0),null);
var map__149843__$1 = ((cljs.core.seq_QMARK_(map__149843))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__149843):map__149843);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149843__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149843__$1,cljs.core.constant$keyword$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__149843__$1,cljs.core.constant$keyword$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149842,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__149844 = cljs.core.constant$keyword$style;
var G__149845 = "padding-left: 10px;";
var G__149846 = cljs.core.constant$keyword$class;
var G__149847 = tailrecursion.javelin.formula(((function (G__149844,G__149845,G__149846,vec__149842,map__149843,map__149843__$1,ch,sect,sub,kids){
return (function (G__149849,G__149850,G__149852,G__149853,G__149848,G__149851){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__149854 = ((function (){var G__149855 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__149850);
var G__149856 = G__149851;
return (G__149849.cljs$core$IFn$_invoke$arity$2 ? G__149849.cljs$core$IFn$_invoke$arity$2(G__149855,G__149856) : G__149849.call(null,G__149855,G__149856));
})()) && ((function (){var G__149857 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__149850);
var G__149858 = G__149852;
return (G__149849.cljs$core$IFn$_invoke$arity$2 ? G__149849.cljs$core$IFn$_invoke$arity$2(G__149857,G__149858) : G__149849.call(null,G__149857,G__149858));
})()) && ((function (){var G__149859 = cljs.core.constant$keyword$sub.cljs$core$IFn$_invoke$arity$1(G__149850);
var G__149860 = G__149853;
return (G__149849.cljs$core$IFn$_invoke$arity$2 ? G__149849.cljs$core$IFn$_invoke$arity$2(G__149859,G__149860) : G__149849.call(null,G__149859,G__149860));
})());
return (G__149848.cljs$core$IFn$_invoke$arity$1 ? G__149848.cljs$core$IFn$_invoke$arity$1(G__149854) : G__149848.call(null,G__149854));
})()], null);
});})(G__149844,G__149845,G__149846,vec__149842,map__149843,map__149843__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__149844,G__149845,G__149846,G__149847) : tailrecursion.hoplon.ul.call(null,G__149844,G__149845,G__149846,G__149847));
})(),kids);
};
var ui$book_toc$ul_ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__149861__i = 0, G__149861__a = new Array(arguments.length -  0);
while (G__149861__i < G__149861__a.length) {G__149861__a[G__149861__i] = arguments[G__149861__i + 0]; ++G__149861__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__149861__a,0);
} 
return ui$book_toc$ul_ssub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ssub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ssub.cljs$lang$applyTo = (function (arglist__149862){
var args__10403__auto__ = cljs.core.seq(arglist__149862);
return ui$book_toc$ul_ssub__delegate(args__10403__auto__);
});
ui$book_toc$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_ssub__delegate;
return ui$book_toc$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.toc = (function() { 
var ui$book_toc$toc__delegate = function (args__10403__auto__){
var vec__149962 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149962,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149962,(1),null);
return ui.style.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__149963 = cljs.core.constant$keyword$class;
var G__149964 = "col-md-3 col-sm-3 toc";
var G__149965 = (function (){var G__149967 = "Table of Contents";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__149967) : tailrecursion.hoplon.h3.call(null,G__149967));
})();
var G__149966 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149969,G__149968){
var G__149970 = G__149969;
var G__149971 = cljs.core.constant$keyword$ch;
return (G__149968.cljs$core$IFn$_invoke$arity$2 ? G__149968.cljs$core$IFn$_invoke$arity$2(G__149970,G__149971) : G__149968.call(null,G__149970,G__149971));
});})(G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,ui.book._STAR_book_data_STAR_,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149974,G__149972,G__149973){
var G__149975 = (1);
var G__149976 = ((function (){var G__149977 = G__149974;
return (G__149973.cljs$core$IFn$_invoke$arity$1 ? G__149973.cljs$core$IFn$_invoke$arity$1(G__149977) : G__149973.call(null,G__149977));
})() + (1));
return (G__149972.cljs$core$IFn$_invoke$arity$2 ? G__149972.cljs$core$IFn$_invoke$arity$2(G__149975,G__149976) : G__149972.call(null,G__149975,G__149976));
});})(all_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return ui.book_toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (item__10414__auto__){
var vec__149978 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,item__10414__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__149978,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149980,G__149981,G__149979){
var G__149982 = G__149980;
var G__149983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__149981,cljs.core.constant$keyword$title], null);
return (G__149979.cljs$core$IFn$_invoke$arity$2 ? G__149979.cljs$core$IFn$_invoke$arity$2(G__149982,G__149983) : G__149979.call(null,G__149982,G__149983));
});})(vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149985,G__149986,G__149984){
var G__149987 = G__149985;
var G__149988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__149986,cljs.core.constant$keyword$link], null);
return (G__149984.cljs$core$IFn$_invoke$arity$2 ? G__149984.cljs$core$IFn$_invoke$arity$2(G__149987,G__149988) : G__149984.call(null,G__149987,G__149988));
});})(title,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149990,G__149991,G__149989){
var G__149992 = G__149990;
var G__149993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__149991,cljs.core.constant$keyword$sect], null);
return (G__149989.cljs$core$IFn$_invoke$arity$2 ? G__149989.cljs$core$IFn$_invoke$arity$2(G__149992,G__149993) : G__149989.call(null,G__149992,G__149993));
});})(title,link,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__149996,G__149994,G__149995){
var G__149997 = (1);
var G__149998 = ((function (){var G__149999 = G__149996;
return (G__149995.cljs$core$IFn$_invoke$arity$1 ? G__149995.cljs$core$IFn$_invoke$arity$1(G__149999) : G__149995.call(null,G__149999));
})() + (1));
return (G__149994.cljs$core$IFn$_invoke$arity$2 ? G__149994.cljs$core$IFn$_invoke$arity$2(G__149997,G__149998) : G__149994.call(null,G__149997,G__149998));
});})(title,link,all_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__150000 = ui.book_toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
var G__150001 = ui.book_toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (item__10414__auto____$1){
var vec__150002 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,item__10414__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150002,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150004,G__150005,G__150003){
var G__150006 = G__150004;
var G__150007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150005,cljs.core.constant$keyword$title], null);
return (G__150003.cljs$core$IFn$_invoke$arity$2 ? G__150003.cljs$core$IFn$_invoke$arity$2(G__150006,G__150007) : G__150003.call(null,G__150006,G__150007));
});})(vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150009,G__150010,G__150008){
var G__150011 = G__150009;
var G__150012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150010,cljs.core.constant$keyword$link], null);
return (G__150008.cljs$core$IFn$_invoke$arity$2 ? G__150008.cljs$core$IFn$_invoke$arity$2(G__150011,G__150012) : G__150008.call(null,G__150011,G__150012));
});})(title__$1,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150014,G__150015,G__150013){
var G__150016 = G__150014;
var G__150017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150015,cljs.core.constant$keyword$sub], null);
return (G__150013.cljs$core$IFn$_invoke$arity$2 ? G__150013.cljs$core$IFn$_invoke$arity$2(G__150016,G__150017) : G__150013.call(null,G__150016,G__150017));
});})(title__$1,link__$1,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150018,G__150020,G__150019){
var G__150021 = (1);
var G__150022 = ((function (){var G__150023 = G__150020;
return (G__150019.cljs$core$IFn$_invoke$arity$1 ? G__150019.cljs$core$IFn$_invoke$arity$1(G__150023) : G__150019.call(null,G__150023));
})() + (1));
return (G__150018.cljs$core$IFn$_invoke$arity$2 ? G__150018.cljs$core$IFn$_invoke$arity$2(G__150021,G__150022) : G__150018.call(null,G__150021,G__150022));
});})(title__$1,link__$1,all_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__150024 = ui.book_toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$1,cljs.core.constant$keyword$title,title__$1], 0));
var G__150025 = ui.book_toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (item__10414__auto____$2){
var vec__150026 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,item__10414__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150026,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150029,G__150028,G__150027){
var G__150030 = G__150028;
var G__150031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150029,cljs.core.constant$keyword$title], null);
return (G__150027.cljs$core$IFn$_invoke$arity$2 ? G__150027.cljs$core$IFn$_invoke$arity$2(G__150030,G__150031) : G__150027.call(null,G__150030,G__150031));
});})(vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150034,G__150033,G__150032){
var G__150035 = G__150033;
var G__150036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150034,cljs.core.constant$keyword$link], null);
return (G__150032.cljs$core$IFn$_invoke$arity$2 ? G__150032.cljs$core$IFn$_invoke$arity$2(G__150035,G__150036) : G__150032.call(null,G__150035,G__150036));
});})(title__$2,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150039,G__150038,G__150037){
var G__150040 = G__150038;
var G__150041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150039,cljs.core.constant$keyword$ssub], null);
return (G__150037.cljs$core$IFn$_invoke$arity$2 ? G__150037.cljs$core$IFn$_invoke$arity$2(G__150040,G__150041) : G__150037.call(null,G__150040,G__150041));
});})(title__$2,link__$2,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150042,G__150044,G__150043){
var G__150045 = (1);
var G__150046 = ((function (){var G__150047 = G__150044;
return (G__150043.cljs$core$IFn$_invoke$arity$1 ? G__150043.cljs$core$IFn$_invoke$arity$1(G__150047) : G__150043.call(null,G__150047));
})() + (1));
return (G__150042.cljs$core$IFn$_invoke$arity$2 ? G__150042.cljs$core$IFn$_invoke$arity$2(G__150045,G__150046) : G__150042.call(null,G__150045,G__150046));
});})(title__$2,link__$2,all_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__150048 = ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$2,cljs.core.constant$keyword$title,title__$2], 0));
var G__150049 = ui.book_toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (item__10414__auto____$3){
var vec__150050 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,item__10414__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150050,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__150050,ssub,G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150053,G__150052,G__150051){
var G__150054 = G__150052;
var G__150055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150053,cljs.core.constant$keyword$title], null);
return (G__150051.cljs$core$IFn$_invoke$arity$2 ? G__150051.cljs$core$IFn$_invoke$arity$2(G__150054,G__150055) : G__150051.call(null,G__150054,G__150055));
});})(vec__150050,ssub,G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__150050,ssub,G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1){
return (function (G__150058,G__150057,G__150056){
var G__150059 = G__150057;
var G__150060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__150058,cljs.core.constant$keyword$link], null);
return (G__150056.cljs$core$IFn$_invoke$arity$2 ? G__150056.cljs$core$IFn$_invoke$arity$2(G__150059,G__150060) : G__150056.call(null,G__150059,G__150060));
});})(title__$3,vec__150050,ssub,G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
return ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$3,cljs.core.constant$keyword$title,title__$3], 0));
});})(G__150048,title__$2,link__$2,all_ssub,num_ssub,vec__150026,sub,G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150048,G__150049) : tailrecursion.hoplon.div.call(null,G__150048,G__150049));
});})(G__150024,title__$1,link__$1,all_subs,num_subs,vec__150002,sect,G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150024,G__150025) : tailrecursion.hoplon.div.call(null,G__150024,G__150025));
});})(G__150000,title,link,all_sects,num_sects,vec__149978,ch,all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150000,G__150001) : tailrecursion.hoplon.div.call(null,G__150000,G__150001));
});})(all_chapters,num_chapters,G__149963,G__149964,G__149965,vec__149962,_,___$1))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__149963,G__149964,G__149965,G__149966) : tailrecursion.hoplon.div.call(null,G__149963,G__149964,G__149965,G__149966));
})()], 0));
};
var ui$book_toc$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150061__i = 0, G__150061__a = new Array(arguments.length -  0);
while (G__150061__i < G__150061__a.length) {G__150061__a[G__150061__i] = arguments[G__150061__i + 0]; ++G__150061__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150061__a,0);
} 
return ui$book_toc$toc__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc.cljs$lang$applyTo = (function (arglist__150062){
var args__10403__auto__ = cljs.core.seq(arglist__150062);
return ui$book_toc$toc__delegate(args__10403__auto__);
});
ui$book_toc$toc.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc__delegate;
return ui$book_toc$toc;
})()
;
