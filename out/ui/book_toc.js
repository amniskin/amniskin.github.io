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
var vec__144969 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__144970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144969,(0),null);
var map__144970__$1 = ((cljs.core.seq_QMARK_(map__144970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__144970):map__144970);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144970__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__144970__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__144969,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (G__144971,G__144972,G__144973){
var G__144974 = G__144972;
var G__144975 = G__144973;
return (G__144971.cljs$core$IFn$_invoke$arity$2 ? G__144971.cljs$core$IFn$_invoke$arity$2(G__144974,G__144975) : G__144971.call(null,G__144974,G__144975));
});})(vec__144969,map__144970,map__144970__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (G__144976,G__144977,G__144978){
var G__144979 = G__144977;
var G__144980 = G__144978;
return (G__144976.cljs$core$IFn$_invoke$arity$2 ? G__144976.cljs$core$IFn$_invoke$arity$2(G__144979,G__144980) : G__144976.call(null,G__144979,G__144980));
});})(scroll_link_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book_toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (G__144981,G__144982){
var or__4210__auto__ = G__144981;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__144982;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__144983 = cljs.core.constant$keyword$class;
var G__144984 = tailrecursion.javelin.formula(((function (G__144983,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (G__144992){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,G__144992], null);
});})(G__144983,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_))
).call(null,active_QMARK_);
var G__144985 = cljs.core.constant$keyword$click;
var G__144986 = ((function (G__144983,G__144984,G__144985,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (){
var G__144993_144999 = ui.book.scroll_location;
var G__144994_145000 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__144993_144999,G__144994_145000) : cljs.core.reset_BANG_.call(null,G__144993_144999,G__144994_145000));

var G__144995 = ui.book.scroll_location;
var G__144996 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__144995,G__144996) : cljs.core.reset_BANG_.call(null,G__144995,G__144996));
});})(G__144983,G__144984,G__144985,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_))
;
var G__144987 = cljs.core.constant$keyword$hover;
var G__144988 = ((function (G__144983,G__144984,G__144985,G__144986,G__144987,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_){
return (function (){
var G__144997 = ui.book_toc.hover_cell;
var G__144998 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__144997,G__144998) : cljs.core.reset_BANG_.call(null,G__144997,G__144998));
});})(G__144983,G__144984,G__144985,G__144986,G__144987,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__144969,map__144970,map__144970__$1,link,title,_))
;
var G__144989 = cljs.core.constant$keyword$href;
var G__144990 = link;
var G__144991 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__144983,G__144984,G__144985,G__144986,G__144987,G__144988,G__144989,G__144990,G__144991) : tailrecursion.hoplon.a.call(null,G__144983,G__144984,G__144985,G__144986,G__144987,G__144988,G__144989,G__144990,G__144991));
};
var ui$book_toc$toc_link = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145001__i = 0, G__145001__a = new Array(arguments.length -  0);
while (G__145001__i < G__145001__a.length) {G__145001__a[G__145001__i] = arguments[G__145001__i + 0]; ++G__145001__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145001__a,0);
} 
return ui$book_toc$toc_link__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc_link.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc_link.cljs$lang$applyTo = (function (arglist__145002){
var args__10403__auto__ = cljs.core.seq(arglist__145002);
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
var vec__145006 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145006,(0),null);
var map__145007__$1 = ((cljs.core.seq_QMARK_(map__145007))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145007):map__145007);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145007__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145007__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145006,(1),null);
var G__145008 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__145008) : tailrecursion.hoplon.li.call(null,G__145008));
};
var ui$book_toc$li_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145009__i = 0, G__145009__a = new Array(arguments.length -  0);
while (G__145009__i < G__145009__a.length) {G__145009__a[G__145009__i] = arguments[G__145009__i + 0]; ++G__145009__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145009__a,0);
} 
return ui$book_toc$li_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_ch.cljs$lang$applyTo = (function (arglist__145010){
var args__10403__auto__ = cljs.core.seq(arglist__145010);
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
var vec__145016 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145016,(0),null);
var map__145017__$1 = ((cljs.core.seq_QMARK_(map__145017))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145017):map__145017);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145017__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145017__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145016,(1),null);
var G__145018 = cljs.core.constant$keyword$style;
var G__145019 = "margin-left:0px; font-size:13px;";
var G__145020 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__145018,G__145019,G__145020) : tailrecursion.hoplon.li.call(null,G__145018,G__145019,G__145020));
};
var ui$book_toc$li_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145021__i = 0, G__145021__a = new Array(arguments.length -  0);
while (G__145021__i < G__145021__a.length) {G__145021__a[G__145021__i] = arguments[G__145021__i + 0]; ++G__145021__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145021__a,0);
} 
return ui$book_toc$li_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sect.cljs$lang$applyTo = (function (arglist__145022){
var args__10403__auto__ = cljs.core.seq(arglist__145022);
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
var vec__145028 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145028,(0),null);
var map__145029__$1 = ((cljs.core.seq_QMARK_(map__145029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145029):map__145029);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145029__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145029__$1,cljs.core.constant$keyword$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145028,(1),null);
var G__145030 = cljs.core.constant$keyword$style;
var G__145031 = "font-size:12px;";
var G__145032 = ui.book_toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__145030,G__145031,G__145032) : tailrecursion.hoplon.li.call(null,G__145030,G__145031,G__145032));
};
var ui$book_toc$li_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145033__i = 0, G__145033__a = new Array(arguments.length -  0);
while (G__145033__i < G__145033__a.length) {G__145033__a[G__145033__i] = arguments[G__145033__i + 0]; ++G__145033__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145033__a,0);
} 
return ui$book_toc$li_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$li_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sub.cljs$lang$applyTo = (function (arglist__145034){
var args__10403__auto__ = cljs.core.seq(arglist__145034);
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
var vec__145038 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145038,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145038,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145039 = cljs.core.constant$keyword$class;
var G__145040 = "list-unstyled";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__145039,G__145040) : tailrecursion.hoplon.ul.call(null,G__145039,G__145040));
})(),kids);
};
var ui$book_toc$ul_ch = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145041__i = 0, G__145041__a = new Array(arguments.length -  0);
while (G__145041__i < G__145041__a.length) {G__145041__a[G__145041__i] = arguments[G__145041__i + 0]; ++G__145041__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145041__a,0);
} 
return ui$book_toc$ul_ch__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ch.cljs$lang$applyTo = (function (arglist__145042){
var args__10403__auto__ = cljs.core.seq(arglist__145042);
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
var vec__145056 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145056,(0),null);
var map__145057__$1 = ((cljs.core.seq_QMARK_(map__145057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145057):map__145057);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145057__$1,cljs.core.constant$keyword$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145056,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145058 = cljs.core.constant$keyword$style;
var G__145059 = "padding-left:10px; padding-top:0px;";
var G__145060 = cljs.core.constant$keyword$class;
var G__145061 = tailrecursion.javelin.formula(((function (G__145058,G__145059,G__145060,vec__145056,map__145057,map__145057__$1,ch,kids){
return (function (G__145063,G__145065,G__145062,G__145064){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145066 = (function (){var G__145067 = G__145064;
var G__145068 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145065);
return (G__145063.cljs$core$IFn$_invoke$arity$2 ? G__145063.cljs$core$IFn$_invoke$arity$2(G__145067,G__145068) : G__145063.call(null,G__145067,G__145068));
})();
return (G__145062.cljs$core$IFn$_invoke$arity$1 ? G__145062.cljs$core$IFn$_invoke$arity$1(G__145066) : G__145062.call(null,G__145066));
})()], null);
});})(G__145058,G__145059,G__145060,vec__145056,map__145057,map__145057__$1,ch,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145058,G__145059,G__145060,G__145061) : tailrecursion.hoplon.ul.call(null,G__145058,G__145059,G__145060,G__145061));
})(),kids);
};
var ui$book_toc$ul_sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145069__i = 0, G__145069__a = new Array(arguments.length -  0);
while (G__145069__i < G__145069__a.length) {G__145069__a[G__145069__i] = arguments[G__145069__i + 0]; ++G__145069__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145069__a,0);
} 
return ui$book_toc$ul_sect__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sect.cljs$lang$applyTo = (function (arglist__145070){
var args__10403__auto__ = cljs.core.seq(arglist__145070);
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
var vec__145087 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145087,(0),null);
var map__145088__$1 = ((cljs.core.seq_QMARK_(map__145088))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145088):map__145088);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145088__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145088__$1,cljs.core.constant$keyword$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145087,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145089 = cljs.core.constant$keyword$style;
var G__145090 = "padding-left:10px; padding-top:0px;";
var G__145091 = cljs.core.constant$keyword$class;
var G__145092 = tailrecursion.javelin.formula(((function (G__145089,G__145090,G__145091,vec__145087,map__145088,map__145088__$1,ch,sect,kids){
return (function (G__145094,G__145095,G__145097,G__145093,G__145096){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145098 = ((function (){var G__145099 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145095);
var G__145100 = G__145096;
return (G__145094.cljs$core$IFn$_invoke$arity$2 ? G__145094.cljs$core$IFn$_invoke$arity$2(G__145099,G__145100) : G__145094.call(null,G__145099,G__145100));
})()) && ((function (){var G__145101 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__145095);
var G__145102 = G__145097;
return (G__145094.cljs$core$IFn$_invoke$arity$2 ? G__145094.cljs$core$IFn$_invoke$arity$2(G__145101,G__145102) : G__145094.call(null,G__145101,G__145102));
})());
return (G__145093.cljs$core$IFn$_invoke$arity$1 ? G__145093.cljs$core$IFn$_invoke$arity$1(G__145098) : G__145093.call(null,G__145098));
})()], null);
});})(G__145089,G__145090,G__145091,vec__145087,map__145088,map__145088__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145089,G__145090,G__145091,G__145092) : tailrecursion.hoplon.ul.call(null,G__145089,G__145090,G__145091,G__145092));
})(),kids);
};
var ui$book_toc$ul_sub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145103__i = 0, G__145103__a = new Array(arguments.length -  0);
while (G__145103__i < G__145103__a.length) {G__145103__a[G__145103__i] = arguments[G__145103__i + 0]; ++G__145103__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145103__a,0);
} 
return ui$book_toc$ul_sub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sub.cljs$lang$applyTo = (function (arglist__145104){
var args__10403__auto__ = cljs.core.seq(arglist__145104);
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
var vec__145124 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145124,(0),null);
var map__145125__$1 = ((cljs.core.seq_QMARK_(map__145125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145125):map__145125);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145125__$1,cljs.core.constant$keyword$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145125__$1,cljs.core.constant$keyword$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145125__$1,cljs.core.constant$keyword$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145124,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__145126 = cljs.core.constant$keyword$style;
var G__145127 = "padding-left: 10px;";
var G__145128 = cljs.core.constant$keyword$class;
var G__145129 = tailrecursion.javelin.formula(((function (G__145126,G__145127,G__145128,vec__145124,map__145125,map__145125__$1,ch,sect,sub,kids){
return (function (G__145131,G__145132,G__145134,G__145135,G__145130,G__145133){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$list_DASH_unstyled,true,cljs.core.constant$keyword$hidden,(function (){var G__145136 = ((function (){var G__145137 = cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(G__145132);
var G__145138 = G__145133;
return (G__145131.cljs$core$IFn$_invoke$arity$2 ? G__145131.cljs$core$IFn$_invoke$arity$2(G__145137,G__145138) : G__145131.call(null,G__145137,G__145138));
})()) && ((function (){var G__145139 = cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(G__145132);
var G__145140 = G__145134;
return (G__145131.cljs$core$IFn$_invoke$arity$2 ? G__145131.cljs$core$IFn$_invoke$arity$2(G__145139,G__145140) : G__145131.call(null,G__145139,G__145140));
})()) && ((function (){var G__145141 = cljs.core.constant$keyword$sub.cljs$core$IFn$_invoke$arity$1(G__145132);
var G__145142 = G__145135;
return (G__145131.cljs$core$IFn$_invoke$arity$2 ? G__145131.cljs$core$IFn$_invoke$arity$2(G__145141,G__145142) : G__145131.call(null,G__145141,G__145142));
})());
return (G__145130.cljs$core$IFn$_invoke$arity$1 ? G__145130.cljs$core$IFn$_invoke$arity$1(G__145136) : G__145130.call(null,G__145136));
})()], null);
});})(G__145126,G__145127,G__145128,vec__145124,map__145125,map__145125__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__145126,G__145127,G__145128,G__145129) : tailrecursion.hoplon.ul.call(null,G__145126,G__145127,G__145128,G__145129));
})(),kids);
};
var ui$book_toc$ul_ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145143__i = 0, G__145143__a = new Array(arguments.length -  0);
while (G__145143__i < G__145143__a.length) {G__145143__a[G__145143__i] = arguments[G__145143__i + 0]; ++G__145143__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145143__a,0);
} 
return ui$book_toc$ul_ssub__delegate.call(this,args__10403__auto__);};
ui$book_toc$ul_ssub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ssub.cljs$lang$applyTo = (function (arglist__145144){
var args__10403__auto__ = cljs.core.seq(arglist__145144);
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
var vec__145244 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145244,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145244,(1),null);
return ui.style.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__145245 = cljs.core.constant$keyword$class;
var G__145246 = "col-md-3 col-sm-3 toc";
var G__145247 = (function (){var G__145249 = "Table of Contents";
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145249) : tailrecursion.hoplon.h3.call(null,G__145249));
})();
var G__145248 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145251,G__145250){
var G__145252 = G__145251;
var G__145253 = cljs.core.constant$keyword$ch;
return (G__145250.cljs$core$IFn$_invoke$arity$2 ? G__145250.cljs$core$IFn$_invoke$arity$2(G__145252,G__145253) : G__145250.call(null,G__145252,G__145253));
});})(G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,ui.book._STAR_book_data_STAR_,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145256,G__145254,G__145255){
var G__145257 = (1);
var G__145258 = ((function (){var G__145259 = G__145256;
return (G__145255.cljs$core$IFn$_invoke$arity$1 ? G__145255.cljs$core$IFn$_invoke$arity$1(G__145259) : G__145255.call(null,G__145259));
})() + (1));
return (G__145254.cljs$core$IFn$_invoke$arity$2 ? G__145254.cljs$core$IFn$_invoke$arity$2(G__145257,G__145258) : G__145254.call(null,G__145257,G__145258));
});})(all_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return ui.book_toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (item__10414__auto__){
var vec__145260 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,item__10414__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145260,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145262,G__145263,G__145261){
var G__145264 = G__145262;
var G__145265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145263,cljs.core.constant$keyword$title], null);
return (G__145261.cljs$core$IFn$_invoke$arity$2 ? G__145261.cljs$core$IFn$_invoke$arity$2(G__145264,G__145265) : G__145261.call(null,G__145264,G__145265));
});})(vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145267,G__145268,G__145266){
var G__145269 = G__145267;
var G__145270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145268,cljs.core.constant$keyword$link], null);
return (G__145266.cljs$core$IFn$_invoke$arity$2 ? G__145266.cljs$core$IFn$_invoke$arity$2(G__145269,G__145270) : G__145266.call(null,G__145269,G__145270));
});})(title,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145272,G__145273,G__145271){
var G__145274 = G__145272;
var G__145275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145273,cljs.core.constant$keyword$sect], null);
return (G__145271.cljs$core$IFn$_invoke$arity$2 ? G__145271.cljs$core$IFn$_invoke$arity$2(G__145274,G__145275) : G__145271.call(null,G__145274,G__145275));
});})(title,link,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145278,G__145276,G__145277){
var G__145279 = (1);
var G__145280 = ((function (){var G__145281 = G__145278;
return (G__145277.cljs$core$IFn$_invoke$arity$1 ? G__145277.cljs$core$IFn$_invoke$arity$1(G__145281) : G__145277.call(null,G__145281));
})() + (1));
return (G__145276.cljs$core$IFn$_invoke$arity$2 ? G__145276.cljs$core$IFn$_invoke$arity$2(G__145279,G__145280) : G__145276.call(null,G__145279,G__145280));
});})(title,link,all_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__145282 = ui.book_toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$title,title], 0));
var G__145283 = ui.book_toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (item__10414__auto____$1){
var vec__145284 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,item__10414__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145284,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145286,G__145287,G__145285){
var G__145288 = G__145286;
var G__145289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145287,cljs.core.constant$keyword$title], null);
return (G__145285.cljs$core$IFn$_invoke$arity$2 ? G__145285.cljs$core$IFn$_invoke$arity$2(G__145288,G__145289) : G__145285.call(null,G__145288,G__145289));
});})(vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145291,G__145292,G__145290){
var G__145293 = G__145291;
var G__145294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145292,cljs.core.constant$keyword$link], null);
return (G__145290.cljs$core$IFn$_invoke$arity$2 ? G__145290.cljs$core$IFn$_invoke$arity$2(G__145293,G__145294) : G__145290.call(null,G__145293,G__145294));
});})(title__$1,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145296,G__145297,G__145295){
var G__145298 = G__145296;
var G__145299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145297,cljs.core.constant$keyword$sub], null);
return (G__145295.cljs$core$IFn$_invoke$arity$2 ? G__145295.cljs$core$IFn$_invoke$arity$2(G__145298,G__145299) : G__145295.call(null,G__145298,G__145299));
});})(title__$1,link__$1,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145300,G__145302,G__145301){
var G__145303 = (1);
var G__145304 = ((function (){var G__145305 = G__145302;
return (G__145301.cljs$core$IFn$_invoke$arity$1 ? G__145301.cljs$core$IFn$_invoke$arity$1(G__145305) : G__145301.call(null,G__145305));
})() + (1));
return (G__145300.cljs$core$IFn$_invoke$arity$2 ? G__145300.cljs$core$IFn$_invoke$arity$2(G__145303,G__145304) : G__145300.call(null,G__145303,G__145304));
});})(title__$1,link__$1,all_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__145306 = ui.book_toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$1,cljs.core.constant$keyword$title,title__$1], 0));
var G__145307 = ui.book_toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (item__10414__auto____$2){
var vec__145308 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,item__10414__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145308,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145311,G__145310,G__145309){
var G__145312 = G__145310;
var G__145313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145311,cljs.core.constant$keyword$title], null);
return (G__145309.cljs$core$IFn$_invoke$arity$2 ? G__145309.cljs$core$IFn$_invoke$arity$2(G__145312,G__145313) : G__145309.call(null,G__145312,G__145313));
});})(vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145316,G__145315,G__145314){
var G__145317 = G__145315;
var G__145318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145316,cljs.core.constant$keyword$link], null);
return (G__145314.cljs$core$IFn$_invoke$arity$2 ? G__145314.cljs$core$IFn$_invoke$arity$2(G__145317,G__145318) : G__145314.call(null,G__145317,G__145318));
});})(title__$2,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145321,G__145320,G__145319){
var G__145322 = G__145320;
var G__145323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145321,cljs.core.constant$keyword$ssub], null);
return (G__145319.cljs$core$IFn$_invoke$arity$2 ? G__145319.cljs$core$IFn$_invoke$arity$2(G__145322,G__145323) : G__145319.call(null,G__145322,G__145323));
});})(title__$2,link__$2,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145324,G__145326,G__145325){
var G__145327 = (1);
var G__145328 = ((function (){var G__145329 = G__145326;
return (G__145325.cljs$core$IFn$_invoke$arity$1 ? G__145325.cljs$core$IFn$_invoke$arity$1(G__145329) : G__145325.call(null,G__145329));
})() + (1));
return (G__145324.cljs$core$IFn$_invoke$arity$2 ? G__145324.cljs$core$IFn$_invoke$arity$2(G__145327,G__145328) : G__145324.call(null,G__145327,G__145328));
});})(title__$2,link__$2,all_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__145330 = ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$2,cljs.core.constant$keyword$title,title__$2], 0));
var G__145331 = ui.book_toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (item__10414__auto____$3){
var vec__145332 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,item__10414__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145332,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__145332,ssub,G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145335,G__145334,G__145333){
var G__145336 = G__145334;
var G__145337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145335,cljs.core.constant$keyword$title], null);
return (G__145333.cljs$core$IFn$_invoke$arity$2 ? G__145333.cljs$core$IFn$_invoke$arity$2(G__145336,G__145337) : G__145333.call(null,G__145336,G__145337));
});})(vec__145332,ssub,G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__145332,ssub,G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1){
return (function (G__145340,G__145339,G__145338){
var G__145341 = G__145339;
var G__145342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__145340,cljs.core.constant$keyword$link], null);
return (G__145338.cljs$core$IFn$_invoke$arity$2 ? G__145338.cljs$core$IFn$_invoke$arity$2(G__145341,G__145342) : G__145338.call(null,G__145341,G__145342));
});})(title__$3,vec__145332,ssub,G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
return ui.book_toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$link,link__$3,cljs.core.constant$keyword$title,title__$3], 0));
});})(G__145330,title__$2,link__$2,all_ssub,num_ssub,vec__145308,sub,G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145330,G__145331) : tailrecursion.hoplon.div.call(null,G__145330,G__145331));
});})(G__145306,title__$1,link__$1,all_subs,num_subs,vec__145284,sect,G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145306,G__145307) : tailrecursion.hoplon.div.call(null,G__145306,G__145307));
});})(G__145282,title,link,all_sects,num_sects,vec__145260,ch,all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145282,G__145283) : tailrecursion.hoplon.div.call(null,G__145282,G__145283));
});})(all_chapters,num_chapters,G__145245,G__145246,G__145247,vec__145244,_,___$1))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145245,G__145246,G__145247,G__145248) : tailrecursion.hoplon.div.call(null,G__145245,G__145246,G__145247,G__145248));
})()], 0));
};
var ui$book_toc$toc = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145343__i = 0, G__145343__a = new Array(arguments.length -  0);
while (G__145343__i < G__145343__a.length) {G__145343__a[G__145343__i] = arguments[G__145343__i + 0]; ++G__145343__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145343__a,0);
} 
return ui$book_toc$toc__delegate.call(this,args__10403__auto__);};
ui$book_toc$toc.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc.cljs$lang$applyTo = (function (arglist__145344){
var args__10403__auto__ = cljs.core.seq(arglist__145344);
return ui$book_toc$toc__delegate(args__10403__auto__);
});
ui$book_toc$toc.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc__delegate;
return ui$book_toc$toc;
})()
;
