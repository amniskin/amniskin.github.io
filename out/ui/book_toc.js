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
var vec__144973 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144973,(0),null);
var map__144974__$1 = ((cljs.core.seq_QMARK_(map__144974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144974):map__144974);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144974__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144974__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144973,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (G__144975,G__144976,G__144977){
var G__144978 = G__144976;
var G__144979 = G__144977;
return (G__144975.cljs$core$IFn$_invoke$arity$2 ? G__144975.cljs$core$IFn$_invoke$arity$2(G__144978,G__144979) : G__144975.call(null,G__144978,G__144979));
});})(vec__144973,map__144974,map__144974__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (G__144980,G__144981,G__144982){
var G__144983 = G__144981;
var G__144984 = G__144982;
return (G__144980.cljs$core$IFn$_invoke$arity$2 ? G__144980.cljs$core$IFn$_invoke$arity$2(G__144983,G__144984) : G__144980.call(null,G__144983,G__144984));
});})(scroll_link_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book_toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (G__144985,G__144986){
var or__4210__auto__ = G__144985;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__144986;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__144987 = cljs.core.constant$keyword$class;
var G__144988 = tailrecursion.javelin.formula(((function (G__144987,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (G__144996){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,G__144996], null);
});})(G__144987,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_))
).call(null,active_QMARK_);
var G__144989 = cljs.core.constant$keyword$click;
var G__144990 = ((function (G__144987,G__144988,G__144989,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (){
var G__144997_145003 = ui.book.scroll_location;
var G__144998_145004 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__144997_145003,G__144998_145004) : cljs.core.reset_BANG_.call(null,G__144997_145003,G__144998_145004));

var G__144999 = ui.book.scroll_location;
var G__145000 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__144999,G__145000) : cljs.core.reset_BANG_.call(null,G__144999,G__145000));
});})(G__144987,G__144988,G__144989,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_))
;
var G__144991 = cljs.core.constant$keyword$hover;
var G__144992 = ((function (G__144987,G__144988,G__144989,G__144990,G__144991,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_){
return (function (){
var G__145001 = ui.book_toc.hover_cell;
var G__145002 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145001,G__145002) : cljs.core.reset_BANG_.call(null,G__145001,G__145002));
});})(G__144987,G__144988,G__144989,G__144990,G__144991,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144973,map__144974,map__144974__$1,link,title,_))
;
var G__144993 = cljs.core.constant$keyword$href;
var G__144994 = link;
var G__144995 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__144987,G__144988,G__144989,G__144990,G__144991,G__144992,G__144993,G__144994,G__144995) : tailrecursion.hoplon.a.call(null,G__144987,G__144988,G__144989,G__144990,G__144991,G__144992,G__144993,G__144994,G__144995));
};
var ui$book_toc$toc_link = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145005__i = 0, G__145005__a = new Array(arguments.length -  0);
while (G__145005__i < G__145005__a.length) {G__145005__a[G__145005__i] = arguments[G__145005__i + 0]; ++G__145005__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145005__a,0);
} 
return ui$book_toc$toc_link__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc_link.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc_link.cljs$lang$applyTo = (function (arglist__145006){
var args__10403__auto__ = cljs.core.seq(arglist__145006);
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
var vec__145010 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145010,(0),null);
var map__145011__$1 = ((cljs.core.seq_QMARK_(map__145011))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145011):map__145011);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145011__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145011__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145010,(1),null);
var G__145012 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__145012) : tailrecursion.hoplon.li.call(null,G__145012));
};
var ui$book_toc$li_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145013__i = 0, G__145013__a = new Array(arguments.length -  0);
while (G__145013__i < G__145013__a.length) {G__145013__a[G__145013__i] = arguments[G__145013__i + 0]; ++G__145013__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145013__a,0);
} 
return ui$book_toc$li_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_ch.cljs$lang$applyTo = (function (arglist__145014){
var args__10403__auto__ = cljs.core.seq(arglist__145014);
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
var vec__145020 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145020,(0),null);
var map__145021__$1 = ((cljs.core.seq_QMARK_(map__145021))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145021):map__145021);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145021__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145021__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145020,(1),null);
var G__145022 = cljs.core.constant$keyword$style;
var G__145023 = "margin-left:0px; font-size:13px;";
var G__145024 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__145022,G__145023,G__145024) : tailrecursion.hoplon.li.call(null,G__145022,G__145023,G__145024));
};
var ui$book_toc$li_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145025__i = 0, G__145025__a = new Array(arguments.length -  0);
while (G__145025__i < G__145025__a.length) {G__145025__a[G__145025__i] = arguments[G__145025__i + 0]; ++G__145025__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145025__a,0);
} 
return ui$book_toc$li_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sect.cljs$lang$applyTo = (function (arglist__145026){
var args__10403__auto__ = cljs.core.seq(arglist__145026);
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
var vec__145032 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145032,(0),null);
var map__145033__$1 = ((cljs.core.seq_QMARK_(map__145033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145033):map__145033);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145033__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145033__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145032,(1),null);
var G__145034 = cljs.core.constant$keyword$style;
var G__145035 = "font-size:12px;";
var G__145036 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__145034,G__145035,G__145036) : tailrecursion.hoplon.li.call(null,G__145034,G__145035,G__145036));
};
var ui$book_toc$li_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145037__i = 0, G__145037__a = new Array(arguments.length -  0);
while (G__145037__i < G__145037__a.length) {G__145037__a[G__145037__i] = arguments[G__145037__i + 0]; ++G__145037__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145037__a,0);
} 
return ui$book_toc$li_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sub.cljs$lang$applyTo = (function (arglist__145038){
var args__10403__auto__ = cljs.core.seq(arglist__145038);
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
var vec__145042 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145042,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145042,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145043 = cljs.core.constant$keyword$class;
var G__145044 = "list-unstyled";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__145043,G__145044) : tailrecursion.hoplon.ul.call(null,G__145043,G__145044));
})(),kids);
};
var ui$book_toc$ul_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145045__i = 0, G__145045__a = new Array(arguments.length -  0);
while (G__145045__i < G__145045__a.length) {G__145045__a[G__145045__i] = arguments[G__145045__i + 0]; ++G__145045__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145045__a,0);
} 
return ui$book_toc$ul_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ch.cljs$lang$applyTo = (function (arglist__145046){
var args__10403__auto__ = cljs.core.seq(arglist__145046);
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
var vec__145060 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145060,(0),null);
var map__145061__$1 = ((cljs.core.seq_QMARK_(map__145061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145061):map__145061);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145061__$1,cljs.core.constant$keyword$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145060,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145062 = cljs.core.constant$keyword$style;
var G__145063 = "padding-left:10px; padding-top:0px;";
var G__145064 = cljs.core.constant$keyword$class;
var G__145065 = tailrecursion.javelin.formula(((function (G__145062,G__145063,G__145064,vec__145060,map__145061,map__145061__$1,ch,kids){
return (function (G__145067,G__145069,G__145066,G__145068){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145070 = (function (){var G__145071 = G__145068;
var G__145072 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145069);
return (G__145067.cljs$core$IFn$_invoke$arity$2 ? G__145067.cljs$core$IFn$_invoke$arity$2(G__145071,G__145072) : G__145067.call(null,G__145071,G__145072));
})();
return (G__145066.cljs$core$IFn$_invoke$arity$1 ? G__145066.cljs$core$IFn$_invoke$arity$1(G__145070) : G__145066.call(null,G__145070));
})()], null);
});})(G__145062,G__145063,G__145064,vec__145060,map__145061,map__145061__$1,ch,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145062,G__145063,G__145064,G__145065) : tailrecursion.hoplon.ul.call(null,G__145062,G__145063,G__145064,G__145065));
})(),kids);
};
var ui$book_toc$ul_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145073__i = 0, G__145073__a = new Array(arguments.length -  0);
while (G__145073__i < G__145073__a.length) {G__145073__a[G__145073__i] = arguments[G__145073__i + 0]; ++G__145073__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145073__a,0);
} 
return ui$book_toc$ul_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sect.cljs$lang$applyTo = (function (arglist__145074){
var args__10403__auto__ = cljs.core.seq(arglist__145074);
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
var vec__145091 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145091,(0),null);
var map__145092__$1 = ((cljs.core.seq_QMARK_(map__145092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145092):map__145092);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145092__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145092__$1,cljs.core.constant$keyword$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145091,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145093 = cljs.core.constant$keyword$style;
var G__145094 = "padding-left:10px; padding-top:0px;";
var G__145095 = cljs.core.constant$keyword$class;
var G__145096 = tailrecursion.javelin.formula(((function (G__145093,G__145094,G__145095,vec__145091,map__145092,map__145092__$1,ch,sect,kids){
return (function (G__145098,G__145099,G__145101,G__145097,G__145100){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145102 = ((function (){var G__145103 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145099);
var G__145104 = G__145100;
return (G__145098.cljs$core$IFn$_invoke$arity$2 ? G__145098.cljs$core$IFn$_invoke$arity$2(G__145103,G__145104) : G__145098.call(null,G__145103,G__145104));
})()) && ((function (){var G__145105 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__145099);
var G__145106 = G__145101;
return (G__145098.cljs$core$IFn$_invoke$arity$2 ? G__145098.cljs$core$IFn$_invoke$arity$2(G__145105,G__145106) : G__145098.call(null,G__145105,G__145106));
})());
return (G__145097.cljs$core$IFn$_invoke$arity$1 ? G__145097.cljs$core$IFn$_invoke$arity$1(G__145102) : G__145097.call(null,G__145102));
})()], null);
});})(G__145093,G__145094,G__145095,vec__145091,map__145092,map__145092__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145093,G__145094,G__145095,G__145096) : tailrecursion.hoplon.ul.call(null,G__145093,G__145094,G__145095,G__145096));
})(),kids);
};
var ui$book_toc$ul_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145107__i = 0, G__145107__a = new Array(arguments.length -  0);
while (G__145107__i < G__145107__a.length) {G__145107__a[G__145107__i] = arguments[G__145107__i + 0]; ++G__145107__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145107__a,0);
} 
return ui$book_toc$ul_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sub.cljs$lang$applyTo = (function (arglist__145108){
var args__10403__auto__ = cljs.core.seq(arglist__145108);
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
var vec__145128 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145128,(0),null);
var map__145129__$1 = ((cljs.core.seq_QMARK_(map__145129))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145129):map__145129);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145129__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145129__$1,cljs.core.constant$keyword$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145129__$1,cljs.core.constant$keyword$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145128,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145130 = cljs.core.constant$keyword$style;
var G__145131 = "padding-left: 10px;";
var G__145132 = cljs.core.constant$keyword$class;
var G__145133 = tailrecursion.javelin.formula(((function (G__145130,G__145131,G__145132,vec__145128,map__145129,map__145129__$1,ch,sect,sub,kids){
return (function (G__145135,G__145136,G__145138,G__145139,G__145134,G__145137){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145140 = ((function (){var G__145141 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145136);
var G__145142 = G__145137;
return (G__145135.cljs$core$IFn$_invoke$arity$2 ? G__145135.cljs$core$IFn$_invoke$arity$2(G__145141,G__145142) : G__145135.call(null,G__145141,G__145142));
})()) && ((function (){var G__145143 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__145136);
var G__145144 = G__145138;
return (G__145135.cljs$core$IFn$_invoke$arity$2 ? G__145135.cljs$core$IFn$_invoke$arity$2(G__145143,G__145144) : G__145135.call(null,G__145143,G__145144));
})()) && ((function (){var G__145145 = cljs.core.constant$keyword$sub.cljs$core$IFn$_invoke$arity$1(G__145136);
var G__145146 = G__145139;
return (G__145135.cljs$core$IFn$_invoke$arity$2 ? G__145135.cljs$core$IFn$_invoke$arity$2(G__145145,G__145146) : G__145135.call(null,G__145145,G__145146));
})());
return (G__145134.cljs$core$IFn$_invoke$arity$1 ? G__145134.cljs$core$IFn$_invoke$arity$1(G__145140) : G__145134.call(null,G__145140));
})()], null);
});})(G__145130,G__145131,G__145132,vec__145128,map__145129,map__145129__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145130,G__145131,G__145132,G__145133) : tailrecursion.hoplon.ul.call(null,G__145130,G__145131,G__145132,G__145133));
})(),kids);
};
var ui$book_toc$ul_ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145147__i = 0, G__145147__a = new Array(arguments.length -  0);
while (G__145147__i < G__145147__a.length) {G__145147__a[G__145147__i] = arguments[G__145147__i + 0]; ++G__145147__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145147__a,0);
} 
return ui$book_toc$ul_ssub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ssub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ssub.cljs$lang$applyTo = (function (arglist__145148){
var args__10403__auto__ = cljs.core.seq(arglist__145148);
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
var vec__145248 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145248,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145248,(1),null);
return ui.style.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__145249 = cljs.core.constant$keyword$class;
var G__145250 = "col-md-3 col-sm-3 toc";
var G__145251 = (function (){var G__145253 = "Table of Contents";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145253) : tailrecursion.hoplon.h3.call(null,G__145253));
})();
var G__145252 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145255,G__145254){
var G__145256 = G__145255;
var G__145257 = cljs.core.constant$keyword$ch;
return (G__145254.cljs$core$IFn$_invoke$arity$2 ? G__145254.cljs$core$IFn$_invoke$arity$2(G__145256,G__145257) : G__145254.call(null,G__145256,G__145257));
});})(G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,ui.book._STAR_book_data_STAR_,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145260,G__145258,G__145259){
var G__145261 = (1);
var G__145262 = ((function (){var G__145263 = G__145260;
return (G__145259.cljs$core$IFn$_invoke$arity$1 ? G__145259.cljs$core$IFn$_invoke$arity$1(G__145263) : G__145259.call(null,G__145263));
})() + (1));
return (G__145258.cljs$core$IFn$_invoke$arity$2 ? G__145258.cljs$core$IFn$_invoke$arity$2(G__145261,G__145262) : G__145258.call(null,G__145261,G__145262));
});})(all_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return ui.book_toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (item__10414__auto__){
var vec__145264 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,item__10414__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145264,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145266,G__145267,G__145265){
var G__145268 = G__145266;
var G__145269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145267,cljs.core.constant$keyword$title], null);
return (G__145265.cljs$core$IFn$_invoke$arity$2 ? G__145265.cljs$core$IFn$_invoke$arity$2(G__145268,G__145269) : G__145265.call(null,G__145268,G__145269));
});})(vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145271,G__145272,G__145270){
var G__145273 = G__145271;
var G__145274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145272,cljs.core.constant$keyword$link], null);
return (G__145270.cljs$core$IFn$_invoke$arity$2 ? G__145270.cljs$core$IFn$_invoke$arity$2(G__145273,G__145274) : G__145270.call(null,G__145273,G__145274));
});})(title,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145276,G__145277,G__145275){
var G__145278 = G__145276;
var G__145279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145277,cljs.core.constant$keyword$sect], null);
return (G__145275.cljs$core$IFn$_invoke$arity$2 ? G__145275.cljs$core$IFn$_invoke$arity$2(G__145278,G__145279) : G__145275.call(null,G__145278,G__145279));
});})(title,link,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145282,G__145280,G__145281){
var G__145283 = (1);
var G__145284 = ((function (){var G__145285 = G__145282;
return (G__145281.cljs$core$IFn$_invoke$arity$1 ? G__145281.cljs$core$IFn$_invoke$arity$1(G__145285) : G__145281.call(null,G__145285));
})() + (1));
return (G__145280.cljs$core$IFn$_invoke$arity$2 ? G__145280.cljs$core$IFn$_invoke$arity$2(G__145283,G__145284) : G__145280.call(null,G__145283,G__145284));
});})(title,link,all_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__145286 = ui.book_toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
var G__145287 = ui.book_toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (item__10414__auto____$1){
var vec__145288 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,item__10414__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145288,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145290,G__145291,G__145289){
var G__145292 = G__145290;
var G__145293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145291,cljs.core.constant$keyword$title], null);
return (G__145289.cljs$core$IFn$_invoke$arity$2 ? G__145289.cljs$core$IFn$_invoke$arity$2(G__145292,G__145293) : G__145289.call(null,G__145292,G__145293));
});})(vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145295,G__145296,G__145294){
var G__145297 = G__145295;
var G__145298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145296,cljs.core.constant$keyword$link], null);
return (G__145294.cljs$core$IFn$_invoke$arity$2 ? G__145294.cljs$core$IFn$_invoke$arity$2(G__145297,G__145298) : G__145294.call(null,G__145297,G__145298));
});})(title__$1,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145300,G__145301,G__145299){
var G__145302 = G__145300;
var G__145303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145301,cljs.core.constant$keyword$sub], null);
return (G__145299.cljs$core$IFn$_invoke$arity$2 ? G__145299.cljs$core$IFn$_invoke$arity$2(G__145302,G__145303) : G__145299.call(null,G__145302,G__145303));
});})(title__$1,link__$1,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145304,G__145306,G__145305){
var G__145307 = (1);
var G__145308 = ((function (){var G__145309 = G__145306;
return (G__145305.cljs$core$IFn$_invoke$arity$1 ? G__145305.cljs$core$IFn$_invoke$arity$1(G__145309) : G__145305.call(null,G__145309));
})() + (1));
return (G__145304.cljs$core$IFn$_invoke$arity$2 ? G__145304.cljs$core$IFn$_invoke$arity$2(G__145307,G__145308) : G__145304.call(null,G__145307,G__145308));
});})(title__$1,link__$1,all_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__145310 = ui.book_toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$1,cljs.core.constant$keyword$title,title__$1], 0));
var G__145311 = ui.book_toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (item__10414__auto____$2){
var vec__145312 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,item__10414__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145312,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145315,G__145314,G__145313){
var G__145316 = G__145314;
var G__145317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145315,cljs.core.constant$keyword$title], null);
return (G__145313.cljs$core$IFn$_invoke$arity$2 ? G__145313.cljs$core$IFn$_invoke$arity$2(G__145316,G__145317) : G__145313.call(null,G__145316,G__145317));
});})(vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145320,G__145319,G__145318){
var G__145321 = G__145319;
var G__145322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145320,cljs.core.constant$keyword$link], null);
return (G__145318.cljs$core$IFn$_invoke$arity$2 ? G__145318.cljs$core$IFn$_invoke$arity$2(G__145321,G__145322) : G__145318.call(null,G__145321,G__145322));
});})(title__$2,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145325,G__145324,G__145323){
var G__145326 = G__145324;
var G__145327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145325,cljs.core.constant$keyword$ssub], null);
return (G__145323.cljs$core$IFn$_invoke$arity$2 ? G__145323.cljs$core$IFn$_invoke$arity$2(G__145326,G__145327) : G__145323.call(null,G__145326,G__145327));
});})(title__$2,link__$2,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145328,G__145330,G__145329){
var G__145331 = (1);
var G__145332 = ((function (){var G__145333 = G__145330;
return (G__145329.cljs$core$IFn$_invoke$arity$1 ? G__145329.cljs$core$IFn$_invoke$arity$1(G__145333) : G__145329.call(null,G__145333));
})() + (1));
return (G__145328.cljs$core$IFn$_invoke$arity$2 ? G__145328.cljs$core$IFn$_invoke$arity$2(G__145331,G__145332) : G__145328.call(null,G__145331,G__145332));
});})(title__$2,link__$2,all_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__145334 = ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$2,cljs.core.constant$keyword$title,title__$2], 0));
var G__145335 = ui.book_toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (item__10414__auto____$3){
var vec__145336 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,item__10414__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145336,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__145336,ssub,G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145339,G__145338,G__145337){
var G__145340 = G__145338;
var G__145341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145339,cljs.core.constant$keyword$title], null);
return (G__145337.cljs$core$IFn$_invoke$arity$2 ? G__145337.cljs$core$IFn$_invoke$arity$2(G__145340,G__145341) : G__145337.call(null,G__145340,G__145341));
});})(vec__145336,ssub,G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__145336,ssub,G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1){
return (function (G__145344,G__145343,G__145342){
var G__145345 = G__145343;
var G__145346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145344,cljs.core.constant$keyword$link], null);
return (G__145342.cljs$core$IFn$_invoke$arity$2 ? G__145342.cljs$core$IFn$_invoke$arity$2(G__145345,G__145346) : G__145342.call(null,G__145345,G__145346));
});})(title__$3,vec__145336,ssub,G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
return ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$3,cljs.core.constant$keyword$title,title__$3], 0));
});})(G__145334,title__$2,link__$2,all_ssub,num_ssub,vec__145312,sub,G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145334,G__145335) : tailrecursion.hoplon.div.call(null,G__145334,G__145335));
});})(G__145310,title__$1,link__$1,all_subs,num_subs,vec__145288,sect,G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145310,G__145311) : tailrecursion.hoplon.div.call(null,G__145310,G__145311));
});})(G__145286,title,link,all_sects,num_sects,vec__145264,ch,all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145286,G__145287) : tailrecursion.hoplon.div.call(null,G__145286,G__145287));
});})(all_chapters,num_chapters,G__145249,G__145250,G__145251,vec__145248,_,___$1))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145249,G__145250,G__145251,G__145252) : tailrecursion.hoplon.div.call(null,G__145249,G__145250,G__145251,G__145252));
})()], 0));
};
var ui$book_toc$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145347__i = 0, G__145347__a = new Array(arguments.length -  0);
while (G__145347__i < G__145347__a.length) {G__145347__a[G__145347__i] = arguments[G__145347__i + 0]; ++G__145347__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145347__a,0);
} 
return ui$book_toc$toc__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc.cljs$lang$applyTo = (function (arglist__145348){
var args__10403__auto__ = cljs.core.seq(arglist__145348);
return ui$book_toc$toc__delegate(args__10403__auto__);
});
ui$book_toc$toc.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc__delegate;
return ui$book_toc$toc;
})()
;
