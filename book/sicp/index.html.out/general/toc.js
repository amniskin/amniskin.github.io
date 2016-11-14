// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell(null);
general.toc.scroll_map = tailrecursion.javelin.formula((function (G__201953,G__201952,G__201958,G__201959,G__201955,G__201957,G__201956,G__201954){
var G__201960 = cljs.core.PersistentArrayMap.EMPTY;
var G__201961 = (function (){var G__201962 = ((function (G__201960){
return (function (p__201950){
var vec__201951 = p__201950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201951,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__201954.cljs$core$IFn$_invoke$arity$1 ? G__201954.cljs$core$IFn$_invoke$arity$1(k) : G__201954.call(null,k)),(G__201955.cljs$core$IFn$_invoke$arity$1 ? G__201955.cljs$core$IFn$_invoke$arity$1(v) : G__201955.call(null,v))], null);
});})(G__201960))
;
var G__201963 = (function (){var G__201966 = (2);
var G__201967 = (function (){var G__201968 = (1);
var G__201969 = (G__201958.cljs$core$IFn$_invoke$arity$2 ? G__201958.cljs$core$IFn$_invoke$arity$2(G__201959,/\//) : G__201958.call(null,G__201959,/\//));
return (G__201957.cljs$core$IFn$_invoke$arity$2 ? G__201957.cljs$core$IFn$_invoke$arity$2(G__201968,G__201969) : G__201957.call(null,G__201968,G__201969));
})();
return (G__201956.cljs$core$IFn$_invoke$arity$2 ? G__201956.cljs$core$IFn$_invoke$arity$2(G__201966,G__201967) : G__201956.call(null,G__201966,G__201967));
})();
return (G__201953.cljs$core$IFn$_invoke$arity$2 ? G__201953.cljs$core$IFn$_invoke$arity$2(G__201962,G__201963) : G__201953.call(null,G__201962,G__201963));
})();
return (G__201952.cljs$core$IFn$_invoke$arity$2 ? G__201952.cljs$core$IFn$_invoke$arity$2(G__201960,G__201961) : G__201952.call(null,G__201960,G__201961));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__8082__auto__){
var vec__201992 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__201993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201992,(0),null);
var map__201993__$1 = ((((!((map__201993 == null)))?((((map__201993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201993):map__201993);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201993__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201993__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201992,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (G__201995,G__201996,G__201997){
return (G__201995.cljs$core$IFn$_invoke$arity$2 ? G__201995.cljs$core$IFn$_invoke$arity$2(G__201996,G__201997) : G__201995.call(null,G__201996,G__201997));
});})(vec__201992,map__201993,map__201993__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (G__201998,G__201999,G__202000){
return (G__201998.cljs$core$IFn$_invoke$arity$2 ? G__201998.cljs$core$IFn$_invoke$arity$2(G__201999,G__202000) : G__201998.call(null,G__201999,G__202000));
});})(scroll_link_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (G__202001,G__202002){
var or__4842__auto__ = G__202001;
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__202002;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__202004 = cljs.core.cst$kw$class;
var G__202005 = tailrecursion.javelin.formula(((function (G__202004,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (G__202013){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__202013], null);
});})(G__202004,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_))
).call(null,active_QMARK_);
var G__202006 = cljs.core.cst$kw$click;
var G__202007 = ((function (G__202004,G__202005,G__202006,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__202004,G__202005,G__202006,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_))
;
var G__202008 = cljs.core.cst$kw$hover;
var G__202009 = ((function (G__202004,G__202005,G__202006,G__202007,G__202008,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__202004,G__202005,G__202006,G__202007,G__202008,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201992,map__201993,map__201993__$1,link,title,_))
;
var G__202010 = cljs.core.cst$kw$href;
var G__202011 = link;
var G__202012 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__202004,G__202005,G__202006,G__202007,G__202008,G__202009,G__202010,G__202011,G__202012) : tailrecursion.hoplon.a.call(null,G__202004,G__202005,G__202006,G__202007,G__202008,G__202009,G__202010,G__202011,G__202012));
};
var general$toc$toc_link = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202014__i = 0, G__202014__a = new Array(arguments.length -  0);
while (G__202014__i < G__202014__a.length) {G__202014__a[G__202014__i] = arguments[G__202014__i + 0]; ++G__202014__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202014__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__8082__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__202015){
var args__8082__auto__ = cljs.core.seq(arglist__202015);
return general$toc$toc_link__delegate(args__8082__auto__);
});
general$toc$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc_link__delegate;
return general$toc$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_ch = (function() { 
var general$toc$li_ch__delegate = function (args__8082__auto__){
var vec__202020 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202020,(0),null);
var map__202021__$1 = ((((!((map__202021 == null)))?((((map__202021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202021):map__202021);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202021__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202021__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202020,(1),null);
var G__202023 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__202023) : tailrecursion.hoplon.li.call(null,G__202023));
};
var general$toc$li_ch = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202024__i = 0, G__202024__a = new Array(arguments.length -  0);
while (G__202024__i < G__202024__a.length) {G__202024__a[G__202024__i] = arguments[G__202024__i + 0]; ++G__202024__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202024__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__8082__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__202025){
var args__8082__auto__ = cljs.core.seq(arglist__202025);
return general$toc$li_ch__delegate(args__8082__auto__);
});
general$toc$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_ch__delegate;
return general$toc$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sect = (function() { 
var general$toc$li_sect__delegate = function (args__8082__auto__){
var vec__202032 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202032,(0),null);
var map__202033__$1 = ((((!((map__202033 == null)))?((((map__202033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202033):map__202033);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202033__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202033__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202032,(1),null);
var G__202035 = cljs.core.cst$kw$style;
var G__202036 = "margin-left:0px; font-size:13px;";
var G__202037 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__202035,G__202036,G__202037) : tailrecursion.hoplon.li.call(null,G__202035,G__202036,G__202037));
};
var general$toc$li_sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202038__i = 0, G__202038__a = new Array(arguments.length -  0);
while (G__202038__i < G__202038__a.length) {G__202038__a[G__202038__i] = arguments[G__202038__i + 0]; ++G__202038__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202038__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__8082__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__202039){
var args__8082__auto__ = cljs.core.seq(arglist__202039);
return general$toc$li_sect__delegate(args__8082__auto__);
});
general$toc$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sect__delegate;
return general$toc$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sub = (function() { 
var general$toc$li_sub__delegate = function (args__8082__auto__){
var vec__202046 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202046,(0),null);
var map__202047__$1 = ((((!((map__202047 == null)))?((((map__202047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202047):map__202047);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202047__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202047__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202046,(1),null);
var G__202049 = cljs.core.cst$kw$style;
var G__202050 = "font-size:12px;";
var G__202051 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__202049,G__202050,G__202051) : tailrecursion.hoplon.li.call(null,G__202049,G__202050,G__202051));
};
var general$toc$li_sub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202052__i = 0, G__202052__a = new Array(arguments.length -  0);
while (G__202052__i < G__202052__a.length) {G__202052__a[G__202052__i] = arguments[G__202052__i + 0]; ++G__202052__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202052__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__8082__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__202053){
var args__8082__auto__ = cljs.core.seq(arglist__202053);
return general$toc$li_sub__delegate(args__8082__auto__);
});
general$toc$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sub__delegate;
return general$toc$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ch = (function() { 
var general$toc$ul_ch__delegate = function (args__8082__auto__){
var vec__202055 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202055,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202055,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"list-unstyled") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"list-unstyled")),kids);
};
var general$toc$ul_ch = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202056__i = 0, G__202056__a = new Array(arguments.length -  0);
while (G__202056__i < G__202056__a.length) {G__202056__a[G__202056__i] = arguments[G__202056__i + 0]; ++G__202056__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202056__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__8082__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__202057){
var args__8082__auto__ = cljs.core.seq(arglist__202057);
return general$toc$ul_ch__delegate(args__8082__auto__);
});
general$toc$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ch__delegate;
return general$toc$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sect = (function() { 
var general$toc$ul_sect__delegate = function (args__8082__auto__){
var vec__202083 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202083,(0),null);
var map__202084__$1 = ((((!((map__202084 == null)))?((((map__202084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202084):map__202084);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202084__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202083,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202095 = cljs.core.cst$kw$style;
var G__202096 = "padding-left:10px; padding-top:0px;";
var G__202097 = cljs.core.cst$kw$class;
var G__202098 = tailrecursion.javelin.formula(((function (G__202095,G__202096,G__202097,vec__202083,map__202084,map__202084__$1,ch,kids){
return (function (G__202102,G__202100,G__202099,G__202101){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202105 = (function (){var G__202106 = G__202101;
var G__202107 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202102);
return (G__202100.cljs$core$IFn$_invoke$arity$2 ? G__202100.cljs$core$IFn$_invoke$arity$2(G__202106,G__202107) : G__202100.call(null,G__202106,G__202107));
})();
return (G__202099.cljs$core$IFn$_invoke$arity$1 ? G__202099.cljs$core$IFn$_invoke$arity$1(G__202105) : G__202099.call(null,G__202105));
})()], null);
});})(G__202095,G__202096,G__202097,vec__202083,map__202084,map__202084__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202095,G__202096,G__202097,G__202098) : tailrecursion.hoplon.ul.call(null,G__202095,G__202096,G__202097,G__202098));
})(),kids);
};
var general$toc$ul_sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202108__i = 0, G__202108__a = new Array(arguments.length -  0);
while (G__202108__i < G__202108__a.length) {G__202108__a[G__202108__i] = arguments[G__202108__i + 0]; ++G__202108__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202108__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__8082__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__202109){
var args__8082__auto__ = cljs.core.seq(arglist__202109);
return general$toc$ul_sect__delegate(args__8082__auto__);
});
general$toc$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sect__delegate;
return general$toc$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sub = (function() { 
var general$toc$ul_sub__delegate = function (args__8082__auto__){
var vec__202145 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202145,(0),null);
var map__202146__$1 = ((((!((map__202146 == null)))?((((map__202146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202146):map__202146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202146__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202146__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202145,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202162 = cljs.core.cst$kw$style;
var G__202163 = "padding-left:10px; padding-top:0px;";
var G__202164 = cljs.core.cst$kw$class;
var G__202165 = tailrecursion.javelin.formula(((function (G__202162,G__202163,G__202164,vec__202145,map__202146,map__202146__$1,ch,sect,kids){
return (function (G__202168,G__202167,G__202170,G__202166,G__202169){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202175 = ((function (){var G__202176 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202168);
var G__202177 = G__202169;
return (G__202167.cljs$core$IFn$_invoke$arity$2 ? G__202167.cljs$core$IFn$_invoke$arity$2(G__202176,G__202177) : G__202167.call(null,G__202176,G__202177));
})()) && ((function (){var G__202178 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__202168);
var G__202179 = G__202170;
return (G__202167.cljs$core$IFn$_invoke$arity$2 ? G__202167.cljs$core$IFn$_invoke$arity$2(G__202178,G__202179) : G__202167.call(null,G__202178,G__202179));
})());
return (G__202166.cljs$core$IFn$_invoke$arity$1 ? G__202166.cljs$core$IFn$_invoke$arity$1(G__202175) : G__202166.call(null,G__202175));
})()], null);
});})(G__202162,G__202163,G__202164,vec__202145,map__202146,map__202146__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202162,G__202163,G__202164,G__202165) : tailrecursion.hoplon.ul.call(null,G__202162,G__202163,G__202164,G__202165));
})(),kids);
};
var general$toc$ul_sub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202180__i = 0, G__202180__a = new Array(arguments.length -  0);
while (G__202180__i < G__202180__a.length) {G__202180__a[G__202180__i] = arguments[G__202180__i + 0]; ++G__202180__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202180__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__8082__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__202181){
var args__8082__auto__ = cljs.core.seq(arglist__202181);
return general$toc$ul_sub__delegate(args__8082__auto__);
});
general$toc$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sub__delegate;
return general$toc$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ssub = (function() { 
var general$toc$ul_ssub__delegate = function (args__8082__auto__){
var vec__202227 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202227,(0),null);
var map__202228__$1 = ((((!((map__202228 == null)))?((((map__202228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202228):map__202228);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202228__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202228__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202228__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202227,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202249 = cljs.core.cst$kw$style;
var G__202250 = "padding-left: 10px;";
var G__202251 = cljs.core.cst$kw$class;
var G__202252 = tailrecursion.javelin.formula(((function (G__202249,G__202250,G__202251,vec__202227,map__202228,map__202228__$1,ch,sect,sub,kids){
return (function (G__202255,G__202254,G__202257,G__202258,G__202253,G__202256){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202265 = ((function (){var G__202266 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202255);
var G__202267 = G__202256;
return (G__202254.cljs$core$IFn$_invoke$arity$2 ? G__202254.cljs$core$IFn$_invoke$arity$2(G__202266,G__202267) : G__202254.call(null,G__202266,G__202267));
})()) && ((function (){var G__202268 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__202255);
var G__202269 = G__202257;
return (G__202254.cljs$core$IFn$_invoke$arity$2 ? G__202254.cljs$core$IFn$_invoke$arity$2(G__202268,G__202269) : G__202254.call(null,G__202268,G__202269));
})()) && ((function (){var G__202270 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__202255);
var G__202271 = G__202258;
return (G__202254.cljs$core$IFn$_invoke$arity$2 ? G__202254.cljs$core$IFn$_invoke$arity$2(G__202270,G__202271) : G__202254.call(null,G__202270,G__202271));
})());
return (G__202253.cljs$core$IFn$_invoke$arity$1 ? G__202253.cljs$core$IFn$_invoke$arity$1(G__202265) : G__202253.call(null,G__202265));
})()], null);
});})(G__202249,G__202250,G__202251,vec__202227,map__202228,map__202228__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202249,G__202250,G__202251,G__202252) : tailrecursion.hoplon.ul.call(null,G__202249,G__202250,G__202251,G__202252));
})(),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202272__i = 0, G__202272__a = new Array(arguments.length -  0);
while (G__202272__i < G__202272__a.length) {G__202272__a[G__202272__i] = arguments[G__202272__i + 0]; ++G__202272__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202272__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__8082__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__202273){
var args__8082__auto__ = cljs.core.seq(arglist__202273);
return general$toc$ul_ssub__delegate(args__8082__auto__);
});
general$toc$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ssub__delegate;
return general$toc$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.toc = (function() { 
var general$toc$toc__delegate = function (args__8082__auto__){
var vec__202373 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202373,(0),null);
var map__202374__$1 = ((((!((map__202374 == null)))?((((map__202374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202374):map__202374);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202374__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202373,(1),null);
var vec__202376 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202376,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202376,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202376,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202376,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__202377 = cljs.core.cst$kw$class;
var G__202378 = "col-md-3 col-sm-3 toc";
var G__202379 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Table of Contents") : tailrecursion.hoplon.h3.call(null,"Table of Contents"));
var G__202380 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202382,G__202383,G__202381){
return (G__202381.cljs$core$IFn$_invoke$arity$2 ? G__202381.cljs$core$IFn$_invoke$arity$2(G__202382,G__202383) : G__202381.call(null,G__202382,G__202383));
});})(G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202386,G__202384,G__202385){
var G__202387 = (1);
var G__202388 = ((G__202385.cljs$core$IFn$_invoke$arity$1 ? G__202385.cljs$core$IFn$_invoke$arity$1(G__202386) : G__202385.call(null,G__202386)) + (1));
return (G__202384.cljs$core$IFn$_invoke$arity$2 ? G__202384.cljs$core$IFn$_invoke$arity$2(G__202387,G__202388) : G__202384.call(null,G__202387,G__202388));
});})(all_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (item__8093__auto__){
var vec__202389 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,item__8093__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202389,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202391,G__202392,G__202390){
var G__202393 = G__202391;
var G__202394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202392,cljs.core.cst$kw$title], null);
return (G__202390.cljs$core$IFn$_invoke$arity$2 ? G__202390.cljs$core$IFn$_invoke$arity$2(G__202393,G__202394) : G__202390.call(null,G__202393,G__202394));
});})(vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202396,G__202397,G__202395){
var G__202398 = G__202396;
var G__202399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202397,cljs.core.cst$kw$link], null);
return (G__202395.cljs$core$IFn$_invoke$arity$2 ? G__202395.cljs$core$IFn$_invoke$arity$2(G__202398,G__202399) : G__202395.call(null,G__202398,G__202399));
});})(title,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202401,G__202402,G__202403,G__202400){
var G__202404 = G__202401;
var G__202405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202402,G__202403], null);
return (G__202400.cljs$core$IFn$_invoke$arity$2 ? G__202400.cljs$core$IFn$_invoke$arity$2(G__202404,G__202405) : G__202400.call(null,G__202404,G__202405));
});})(title,link,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202408,G__202406,G__202407){
var G__202409 = (1);
var G__202410 = ((G__202407.cljs$core$IFn$_invoke$arity$1 ? G__202407.cljs$core$IFn$_invoke$arity$1(G__202408) : G__202407.call(null,G__202408)) + (1));
return (G__202406.cljs$core$IFn$_invoke$arity$2 ? G__202406.cljs$core$IFn$_invoke$arity$2(G__202409,G__202410) : G__202406.call(null,G__202409,G__202410));
});})(title,link,all_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__202411 = general.toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__202412 = general.toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (item__8093__auto____$1){
var vec__202413 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,item__8093__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202413,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202415,G__202416,G__202414){
var G__202417 = G__202415;
var G__202418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202416,cljs.core.cst$kw$title], null);
return (G__202414.cljs$core$IFn$_invoke$arity$2 ? G__202414.cljs$core$IFn$_invoke$arity$2(G__202417,G__202418) : G__202414.call(null,G__202417,G__202418));
});})(vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202420,G__202421,G__202419){
var G__202422 = G__202420;
var G__202423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202421,cljs.core.cst$kw$link], null);
return (G__202419.cljs$core$IFn$_invoke$arity$2 ? G__202419.cljs$core$IFn$_invoke$arity$2(G__202422,G__202423) : G__202419.call(null,G__202422,G__202423));
});})(title__$1,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202425,G__202426,G__202427,G__202424){
var G__202428 = G__202425;
var G__202429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202426,G__202427], null);
return (G__202424.cljs$core$IFn$_invoke$arity$2 ? G__202424.cljs$core$IFn$_invoke$arity$2(G__202428,G__202429) : G__202424.call(null,G__202428,G__202429));
});})(title__$1,link__$1,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202430,G__202432,G__202431){
var G__202433 = (1);
var G__202434 = ((G__202431.cljs$core$IFn$_invoke$arity$1 ? G__202431.cljs$core$IFn$_invoke$arity$1(G__202432) : G__202431.call(null,G__202432)) + (1));
return (G__202430.cljs$core$IFn$_invoke$arity$2 ? G__202430.cljs$core$IFn$_invoke$arity$2(G__202433,G__202434) : G__202430.call(null,G__202433,G__202434));
});})(title__$1,link__$1,all_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__202435 = general.toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__202436 = general.toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (item__8093__auto____$2){
var vec__202437 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,item__8093__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202437,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202440,G__202439,G__202438){
var G__202441 = G__202439;
var G__202442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202440,cljs.core.cst$kw$title], null);
return (G__202438.cljs$core$IFn$_invoke$arity$2 ? G__202438.cljs$core$IFn$_invoke$arity$2(G__202441,G__202442) : G__202438.call(null,G__202441,G__202442));
});})(vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202445,G__202444,G__202443){
var G__202446 = G__202444;
var G__202447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202445,cljs.core.cst$kw$link], null);
return (G__202443.cljs$core$IFn$_invoke$arity$2 ? G__202443.cljs$core$IFn$_invoke$arity$2(G__202446,G__202447) : G__202443.call(null,G__202446,G__202447));
});})(title__$2,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202450,G__202449,G__202451,G__202448){
var G__202452 = G__202449;
var G__202453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202450,G__202451], null);
return (G__202448.cljs$core$IFn$_invoke$arity$2 ? G__202448.cljs$core$IFn$_invoke$arity$2(G__202452,G__202453) : G__202448.call(null,G__202452,G__202453));
});})(title__$2,link__$2,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202454,G__202456,G__202455){
var G__202457 = (1);
var G__202458 = ((G__202455.cljs$core$IFn$_invoke$arity$1 ? G__202455.cljs$core$IFn$_invoke$arity$1(G__202456) : G__202455.call(null,G__202456)) + (1));
return (G__202454.cljs$core$IFn$_invoke$arity$2 ? G__202454.cljs$core$IFn$_invoke$arity$2(G__202457,G__202458) : G__202454.call(null,G__202457,G__202458));
});})(title__$2,link__$2,all_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__202459 = general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__202460 = general.toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (item__8093__auto____$3){
var vec__202461 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,item__8093__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202461,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__202461,ssub,G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202464,G__202463,G__202462){
var G__202465 = G__202463;
var G__202466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202464,cljs.core.cst$kw$title], null);
return (G__202462.cljs$core$IFn$_invoke$arity$2 ? G__202462.cljs$core$IFn$_invoke$arity$2(G__202465,G__202466) : G__202462.call(null,G__202465,G__202466));
});})(vec__202461,ssub,G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__202461,ssub,G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_){
return (function (G__202469,G__202468,G__202467){
var G__202470 = G__202468;
var G__202471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202469,cljs.core.cst$kw$link], null);
return (G__202467.cljs$core$IFn$_invoke$arity$2 ? G__202467.cljs$core$IFn$_invoke$arity$2(G__202470,G__202471) : G__202467.call(null,G__202470,G__202471));
});})(title__$3,vec__202461,ssub,G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__202459,title__$2,link__$2,all_ssub,num_ssub,vec__202437,sub,G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202459,G__202460) : tailrecursion.hoplon.div.call(null,G__202459,G__202460));
});})(G__202435,title__$1,link__$1,all_subs,num_subs,vec__202413,sect,G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202435,G__202436) : tailrecursion.hoplon.div.call(null,G__202435,G__202436));
});})(G__202411,title,link,all_sects,num_sects,vec__202389,ch,all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202411,G__202412) : tailrecursion.hoplon.div.call(null,G__202411,G__202412));
});})(all_chapters,num_chapters,G__202377,G__202378,G__202379,vec__202376,one,two,three,four,vec__202373,map__202374,map__202374__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__202377,G__202378,G__202379,G__202380) : tailrecursion.hoplon.div.call(null,G__202377,G__202378,G__202379,G__202380));
})()], 0));
};
var general$toc$toc = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202472__i = 0, G__202472__a = new Array(arguments.length -  0);
while (G__202472__i < G__202472__a.length) {G__202472__a[G__202472__i] = arguments[G__202472__i + 0]; ++G__202472__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202472__a,0);
} 
return general$toc$toc__delegate.call(this,args__8082__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__202473){
var args__8082__auto__ = cljs.core.seq(arglist__202473);
return general$toc$toc__delegate(args__8082__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;
