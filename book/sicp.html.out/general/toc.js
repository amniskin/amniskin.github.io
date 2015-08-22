// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell(null);
general.toc.scroll_map = tailrecursion.javelin.formula((function (G__160295,G__160294,G__160300,G__160301,G__160297,G__160299,G__160298,G__160296){
var G__160302 = cljs.core.PersistentArrayMap.EMPTY;
var G__160303 = (function (){var G__160304 = ((function (G__160302){
return (function (p__160292){
var vec__160293 = p__160292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160293,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__160296.cljs$core$IFn$_invoke$arity$1 ? G__160296.cljs$core$IFn$_invoke$arity$1(k) : G__160296.call(null,k)),(G__160297.cljs$core$IFn$_invoke$arity$1 ? G__160297.cljs$core$IFn$_invoke$arity$1(v) : G__160297.call(null,v))], null);
});})(G__160302))
;
var G__160305 = (function (){var G__160308 = (2);
var G__160309 = (function (){var G__160310 = (1);
var G__160311 = (G__160300.cljs$core$IFn$_invoke$arity$2 ? G__160300.cljs$core$IFn$_invoke$arity$2(G__160301,/\//) : G__160300.call(null,G__160301,/\//));
return (G__160299.cljs$core$IFn$_invoke$arity$2 ? G__160299.cljs$core$IFn$_invoke$arity$2(G__160310,G__160311) : G__160299.call(null,G__160310,G__160311));
})();
return (G__160298.cljs$core$IFn$_invoke$arity$2 ? G__160298.cljs$core$IFn$_invoke$arity$2(G__160308,G__160309) : G__160298.call(null,G__160308,G__160309));
})();
return (G__160295.cljs$core$IFn$_invoke$arity$2 ? G__160295.cljs$core$IFn$_invoke$arity$2(G__160304,G__160305) : G__160295.call(null,G__160304,G__160305));
})();
return (G__160294.cljs$core$IFn$_invoke$arity$2 ? G__160294.cljs$core$IFn$_invoke$arity$2(G__160302,G__160303) : G__160294.call(null,G__160302,G__160303));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__8262__auto__){
var vec__160334 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160334,(0),null);
var map__160335__$1 = ((((!((map__160335 == null)))?((((map__160335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160335):map__160335);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160335__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160335__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160334,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (G__160337,G__160338,G__160339){
return (G__160337.cljs$core$IFn$_invoke$arity$2 ? G__160337.cljs$core$IFn$_invoke$arity$2(G__160338,G__160339) : G__160337.call(null,G__160338,G__160339));
});})(vec__160334,map__160335,map__160335__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (G__160340,G__160341,G__160342){
return (G__160340.cljs$core$IFn$_invoke$arity$2 ? G__160340.cljs$core$IFn$_invoke$arity$2(G__160341,G__160342) : G__160340.call(null,G__160341,G__160342));
});})(scroll_link_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (G__160343,G__160344){
var or__5022__auto__ = G__160343;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__160344;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__160346 = cljs.core.cst$kw$class;
var G__160347 = tailrecursion.javelin.formula(((function (G__160346,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (G__160355){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__160355], null);
});})(G__160346,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_))
).call(null,active_QMARK_);
var G__160348 = cljs.core.cst$kw$click;
var G__160349 = ((function (G__160346,G__160347,G__160348,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__160346,G__160347,G__160348,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_))
;
var G__160350 = cljs.core.cst$kw$hover;
var G__160351 = ((function (G__160346,G__160347,G__160348,G__160349,G__160350,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__160346,G__160347,G__160348,G__160349,G__160350,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__160334,map__160335,map__160335__$1,link,title,_))
;
var G__160352 = cljs.core.cst$kw$href;
var G__160353 = link;
var G__160354 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__160346,G__160347,G__160348,G__160349,G__160350,G__160351,G__160352,G__160353,G__160354) : tailrecursion.hoplon.a.call(null,G__160346,G__160347,G__160348,G__160349,G__160350,G__160351,G__160352,G__160353,G__160354));
};
var general$toc$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160356__i = 0, G__160356__a = new Array(arguments.length -  0);
while (G__160356__i < G__160356__a.length) {G__160356__a[G__160356__i] = arguments[G__160356__i + 0]; ++G__160356__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160356__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__8262__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__160357){
var args__8262__auto__ = cljs.core.seq(arglist__160357);
return general$toc$toc_link__delegate(args__8262__auto__);
});
general$toc$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc_link__delegate;
return general$toc$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_ch = (function() { 
var general$toc$li_ch__delegate = function (args__8262__auto__){
var vec__160362 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160362,(0),null);
var map__160363__$1 = ((((!((map__160363 == null)))?((((map__160363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160363):map__160363);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160363__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160363__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160362,(1),null);
var G__160365 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__160365) : tailrecursion.hoplon.li.call(null,G__160365));
};
var general$toc$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160366__i = 0, G__160366__a = new Array(arguments.length -  0);
while (G__160366__i < G__160366__a.length) {G__160366__a[G__160366__i] = arguments[G__160366__i + 0]; ++G__160366__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160366__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__8262__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__160367){
var args__8262__auto__ = cljs.core.seq(arglist__160367);
return general$toc$li_ch__delegate(args__8262__auto__);
});
general$toc$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_ch__delegate;
return general$toc$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sect = (function() { 
var general$toc$li_sect__delegate = function (args__8262__auto__){
var vec__160374 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160374,(0),null);
var map__160375__$1 = ((((!((map__160375 == null)))?((((map__160375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160375):map__160375);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160375__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160375__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160374,(1),null);
var G__160377 = cljs.core.cst$kw$style;
var G__160378 = "margin-left:0px; font-size:13px;";
var G__160379 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__160377,G__160378,G__160379) : tailrecursion.hoplon.li.call(null,G__160377,G__160378,G__160379));
};
var general$toc$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160380__i = 0, G__160380__a = new Array(arguments.length -  0);
while (G__160380__i < G__160380__a.length) {G__160380__a[G__160380__i] = arguments[G__160380__i + 0]; ++G__160380__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160380__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__8262__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__160381){
var args__8262__auto__ = cljs.core.seq(arglist__160381);
return general$toc$li_sect__delegate(args__8262__auto__);
});
general$toc$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sect__delegate;
return general$toc$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sub = (function() { 
var general$toc$li_sub__delegate = function (args__8262__auto__){
var vec__160388 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160388,(0),null);
var map__160389__$1 = ((((!((map__160389 == null)))?((((map__160389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160389):map__160389);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160389__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160389__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160388,(1),null);
var G__160391 = cljs.core.cst$kw$style;
var G__160392 = "font-size:12px;";
var G__160393 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__160391,G__160392,G__160393) : tailrecursion.hoplon.li.call(null,G__160391,G__160392,G__160393));
};
var general$toc$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160394__i = 0, G__160394__a = new Array(arguments.length -  0);
while (G__160394__i < G__160394__a.length) {G__160394__a[G__160394__i] = arguments[G__160394__i + 0]; ++G__160394__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160394__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__8262__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__160395){
var args__8262__auto__ = cljs.core.seq(arglist__160395);
return general$toc$li_sub__delegate(args__8262__auto__);
});
general$toc$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sub__delegate;
return general$toc$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ch = (function() { 
var general$toc$ul_ch__delegate = function (args__8262__auto__){
var vec__160397 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160397,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160397,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"list-unstyled") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"list-unstyled")),kids);
};
var general$toc$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160398__i = 0, G__160398__a = new Array(arguments.length -  0);
while (G__160398__i < G__160398__a.length) {G__160398__a[G__160398__i] = arguments[G__160398__i + 0]; ++G__160398__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160398__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__160399){
var args__8262__auto__ = cljs.core.seq(arglist__160399);
return general$toc$ul_ch__delegate(args__8262__auto__);
});
general$toc$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ch__delegate;
return general$toc$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sect = (function() { 
var general$toc$ul_sect__delegate = function (args__8262__auto__){
var vec__160425 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160425,(0),null);
var map__160426__$1 = ((((!((map__160426 == null)))?((((map__160426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160426):map__160426);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160426__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160425,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__160437 = cljs.core.cst$kw$style;
var G__160438 = "padding-left:10px; padding-top:0px;";
var G__160439 = cljs.core.cst$kw$class;
var G__160440 = tailrecursion.javelin.formula(((function (G__160437,G__160438,G__160439,vec__160425,map__160426,map__160426__$1,ch,kids){
return (function (G__160444,G__160442,G__160441,G__160443){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__160447 = (function (){var G__160448 = G__160443;
var G__160449 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__160444);
return (G__160442.cljs$core$IFn$_invoke$arity$2 ? G__160442.cljs$core$IFn$_invoke$arity$2(G__160448,G__160449) : G__160442.call(null,G__160448,G__160449));
})();
return (G__160441.cljs$core$IFn$_invoke$arity$1 ? G__160441.cljs$core$IFn$_invoke$arity$1(G__160447) : G__160441.call(null,G__160447));
})()], null);
});})(G__160437,G__160438,G__160439,vec__160425,map__160426,map__160426__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__160437,G__160438,G__160439,G__160440) : tailrecursion.hoplon.ul.call(null,G__160437,G__160438,G__160439,G__160440));
})(),kids);
};
var general$toc$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160450__i = 0, G__160450__a = new Array(arguments.length -  0);
while (G__160450__i < G__160450__a.length) {G__160450__a[G__160450__i] = arguments[G__160450__i + 0]; ++G__160450__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160450__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__160451){
var args__8262__auto__ = cljs.core.seq(arglist__160451);
return general$toc$ul_sect__delegate(args__8262__auto__);
});
general$toc$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sect__delegate;
return general$toc$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sub = (function() { 
var general$toc$ul_sub__delegate = function (args__8262__auto__){
var vec__160487 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160487,(0),null);
var map__160488__$1 = ((((!((map__160488 == null)))?((((map__160488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160488):map__160488);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160488__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160488__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160487,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__160504 = cljs.core.cst$kw$style;
var G__160505 = "padding-left:10px; padding-top:0px;";
var G__160506 = cljs.core.cst$kw$class;
var G__160507 = tailrecursion.javelin.formula(((function (G__160504,G__160505,G__160506,vec__160487,map__160488,map__160488__$1,ch,sect,kids){
return (function (G__160510,G__160509,G__160512,G__160508,G__160511){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__160517 = ((function (){var G__160518 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__160510);
var G__160519 = G__160511;
return (G__160509.cljs$core$IFn$_invoke$arity$2 ? G__160509.cljs$core$IFn$_invoke$arity$2(G__160518,G__160519) : G__160509.call(null,G__160518,G__160519));
})()) && ((function (){var G__160520 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__160510);
var G__160521 = G__160512;
return (G__160509.cljs$core$IFn$_invoke$arity$2 ? G__160509.cljs$core$IFn$_invoke$arity$2(G__160520,G__160521) : G__160509.call(null,G__160520,G__160521));
})());
return (G__160508.cljs$core$IFn$_invoke$arity$1 ? G__160508.cljs$core$IFn$_invoke$arity$1(G__160517) : G__160508.call(null,G__160517));
})()], null);
});})(G__160504,G__160505,G__160506,vec__160487,map__160488,map__160488__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__160504,G__160505,G__160506,G__160507) : tailrecursion.hoplon.ul.call(null,G__160504,G__160505,G__160506,G__160507));
})(),kids);
};
var general$toc$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160522__i = 0, G__160522__a = new Array(arguments.length -  0);
while (G__160522__i < G__160522__a.length) {G__160522__a[G__160522__i] = arguments[G__160522__i + 0]; ++G__160522__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160522__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__160523){
var args__8262__auto__ = cljs.core.seq(arglist__160523);
return general$toc$ul_sub__delegate(args__8262__auto__);
});
general$toc$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sub__delegate;
return general$toc$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ssub = (function() { 
var general$toc$ul_ssub__delegate = function (args__8262__auto__){
var vec__160569 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160569,(0),null);
var map__160570__$1 = ((((!((map__160570 == null)))?((((map__160570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160570):map__160570);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160570__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160570__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160570__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160569,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__160591 = cljs.core.cst$kw$style;
var G__160592 = "padding-left: 10px;";
var G__160593 = cljs.core.cst$kw$class;
var G__160594 = tailrecursion.javelin.formula(((function (G__160591,G__160592,G__160593,vec__160569,map__160570,map__160570__$1,ch,sect,sub,kids){
return (function (G__160597,G__160596,G__160599,G__160600,G__160595,G__160598){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__160607 = ((function (){var G__160608 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__160597);
var G__160609 = G__160598;
return (G__160596.cljs$core$IFn$_invoke$arity$2 ? G__160596.cljs$core$IFn$_invoke$arity$2(G__160608,G__160609) : G__160596.call(null,G__160608,G__160609));
})()) && ((function (){var G__160610 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__160597);
var G__160611 = G__160599;
return (G__160596.cljs$core$IFn$_invoke$arity$2 ? G__160596.cljs$core$IFn$_invoke$arity$2(G__160610,G__160611) : G__160596.call(null,G__160610,G__160611));
})()) && ((function (){var G__160612 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__160597);
var G__160613 = G__160600;
return (G__160596.cljs$core$IFn$_invoke$arity$2 ? G__160596.cljs$core$IFn$_invoke$arity$2(G__160612,G__160613) : G__160596.call(null,G__160612,G__160613));
})());
return (G__160595.cljs$core$IFn$_invoke$arity$1 ? G__160595.cljs$core$IFn$_invoke$arity$1(G__160607) : G__160595.call(null,G__160607));
})()], null);
});})(G__160591,G__160592,G__160593,vec__160569,map__160570,map__160570__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__160591,G__160592,G__160593,G__160594) : tailrecursion.hoplon.ul.call(null,G__160591,G__160592,G__160593,G__160594));
})(),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160614__i = 0, G__160614__a = new Array(arguments.length -  0);
while (G__160614__i < G__160614__a.length) {G__160614__a[G__160614__i] = arguments[G__160614__i + 0]; ++G__160614__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160614__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__160615){
var args__8262__auto__ = cljs.core.seq(arglist__160615);
return general$toc$ul_ssub__delegate(args__8262__auto__);
});
general$toc$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ssub__delegate;
return general$toc$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.toc = (function() { 
var general$toc$toc__delegate = function (args__8262__auto__){
var vec__160715 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__160716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160715,(0),null);
var map__160716__$1 = ((((!((map__160716 == null)))?((((map__160716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__160716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160716):map__160716);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160716__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160715,(1),null);
var vec__160718 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160718,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160718,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160718,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160718,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__160719 = cljs.core.cst$kw$class;
var G__160720 = "col-md-3 col-sm-3 toc";
var G__160721 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Table of Contents") : tailrecursion.hoplon.h3.call(null,"Table of Contents"));
var G__160722 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160724,G__160725,G__160723){
return (G__160723.cljs$core$IFn$_invoke$arity$2 ? G__160723.cljs$core$IFn$_invoke$arity$2(G__160724,G__160725) : G__160723.call(null,G__160724,G__160725));
});})(G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160728,G__160726,G__160727){
var G__160729 = (1);
var G__160730 = ((G__160727.cljs$core$IFn$_invoke$arity$1 ? G__160727.cljs$core$IFn$_invoke$arity$1(G__160728) : G__160727.call(null,G__160728)) + (1));
return (G__160726.cljs$core$IFn$_invoke$arity$2 ? G__160726.cljs$core$IFn$_invoke$arity$2(G__160729,G__160730) : G__160726.call(null,G__160729,G__160730));
});})(all_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (item__8273__auto__){
var vec__160731 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160731,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160733,G__160734,G__160732){
var G__160735 = G__160733;
var G__160736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160734,cljs.core.cst$kw$title], null);
return (G__160732.cljs$core$IFn$_invoke$arity$2 ? G__160732.cljs$core$IFn$_invoke$arity$2(G__160735,G__160736) : G__160732.call(null,G__160735,G__160736));
});})(vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160738,G__160739,G__160737){
var G__160740 = G__160738;
var G__160741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160739,cljs.core.cst$kw$link], null);
return (G__160737.cljs$core$IFn$_invoke$arity$2 ? G__160737.cljs$core$IFn$_invoke$arity$2(G__160740,G__160741) : G__160737.call(null,G__160740,G__160741));
});})(title,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160743,G__160744,G__160745,G__160742){
var G__160746 = G__160743;
var G__160747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160744,G__160745], null);
return (G__160742.cljs$core$IFn$_invoke$arity$2 ? G__160742.cljs$core$IFn$_invoke$arity$2(G__160746,G__160747) : G__160742.call(null,G__160746,G__160747));
});})(title,link,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160750,G__160748,G__160749){
var G__160751 = (1);
var G__160752 = ((G__160749.cljs$core$IFn$_invoke$arity$1 ? G__160749.cljs$core$IFn$_invoke$arity$1(G__160750) : G__160749.call(null,G__160750)) + (1));
return (G__160748.cljs$core$IFn$_invoke$arity$2 ? G__160748.cljs$core$IFn$_invoke$arity$2(G__160751,G__160752) : G__160748.call(null,G__160751,G__160752));
});})(title,link,all_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__160753 = general.toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__160754 = general.toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (item__8273__auto____$1){
var vec__160755 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160755,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160757,G__160758,G__160756){
var G__160759 = G__160757;
var G__160760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160758,cljs.core.cst$kw$title], null);
return (G__160756.cljs$core$IFn$_invoke$arity$2 ? G__160756.cljs$core$IFn$_invoke$arity$2(G__160759,G__160760) : G__160756.call(null,G__160759,G__160760));
});})(vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160762,G__160763,G__160761){
var G__160764 = G__160762;
var G__160765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160763,cljs.core.cst$kw$link], null);
return (G__160761.cljs$core$IFn$_invoke$arity$2 ? G__160761.cljs$core$IFn$_invoke$arity$2(G__160764,G__160765) : G__160761.call(null,G__160764,G__160765));
});})(title__$1,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160767,G__160768,G__160769,G__160766){
var G__160770 = G__160767;
var G__160771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160768,G__160769], null);
return (G__160766.cljs$core$IFn$_invoke$arity$2 ? G__160766.cljs$core$IFn$_invoke$arity$2(G__160770,G__160771) : G__160766.call(null,G__160770,G__160771));
});})(title__$1,link__$1,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160772,G__160774,G__160773){
var G__160775 = (1);
var G__160776 = ((G__160773.cljs$core$IFn$_invoke$arity$1 ? G__160773.cljs$core$IFn$_invoke$arity$1(G__160774) : G__160773.call(null,G__160774)) + (1));
return (G__160772.cljs$core$IFn$_invoke$arity$2 ? G__160772.cljs$core$IFn$_invoke$arity$2(G__160775,G__160776) : G__160772.call(null,G__160775,G__160776));
});})(title__$1,link__$1,all_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__160777 = general.toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__160778 = general.toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (item__8273__auto____$2){
var vec__160779 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160779,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160782,G__160781,G__160780){
var G__160783 = G__160781;
var G__160784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160782,cljs.core.cst$kw$title], null);
return (G__160780.cljs$core$IFn$_invoke$arity$2 ? G__160780.cljs$core$IFn$_invoke$arity$2(G__160783,G__160784) : G__160780.call(null,G__160783,G__160784));
});})(vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160787,G__160786,G__160785){
var G__160788 = G__160786;
var G__160789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160787,cljs.core.cst$kw$link], null);
return (G__160785.cljs$core$IFn$_invoke$arity$2 ? G__160785.cljs$core$IFn$_invoke$arity$2(G__160788,G__160789) : G__160785.call(null,G__160788,G__160789));
});})(title__$2,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160792,G__160791,G__160793,G__160790){
var G__160794 = G__160791;
var G__160795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160792,G__160793], null);
return (G__160790.cljs$core$IFn$_invoke$arity$2 ? G__160790.cljs$core$IFn$_invoke$arity$2(G__160794,G__160795) : G__160790.call(null,G__160794,G__160795));
});})(title__$2,link__$2,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160796,G__160798,G__160797){
var G__160799 = (1);
var G__160800 = ((G__160797.cljs$core$IFn$_invoke$arity$1 ? G__160797.cljs$core$IFn$_invoke$arity$1(G__160798) : G__160797.call(null,G__160798)) + (1));
return (G__160796.cljs$core$IFn$_invoke$arity$2 ? G__160796.cljs$core$IFn$_invoke$arity$2(G__160799,G__160800) : G__160796.call(null,G__160799,G__160800));
});})(title__$2,link__$2,all_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__160801 = general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__160802 = general.toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (item__8273__auto____$3){
var vec__160803 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160803,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__160803,ssub,G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160806,G__160805,G__160804){
var G__160807 = G__160805;
var G__160808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160806,cljs.core.cst$kw$title], null);
return (G__160804.cljs$core$IFn$_invoke$arity$2 ? G__160804.cljs$core$IFn$_invoke$arity$2(G__160807,G__160808) : G__160804.call(null,G__160807,G__160808));
});})(vec__160803,ssub,G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__160803,ssub,G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_){
return (function (G__160811,G__160810,G__160809){
var G__160812 = G__160810;
var G__160813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__160811,cljs.core.cst$kw$link], null);
return (G__160809.cljs$core$IFn$_invoke$arity$2 ? G__160809.cljs$core$IFn$_invoke$arity$2(G__160812,G__160813) : G__160809.call(null,G__160812,G__160813));
});})(title__$3,vec__160803,ssub,G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__160801,title__$2,link__$2,all_ssub,num_ssub,vec__160779,sub,G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160801,G__160802) : tailrecursion.hoplon.div.call(null,G__160801,G__160802));
});})(G__160777,title__$1,link__$1,all_subs,num_subs,vec__160755,sect,G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160777,G__160778) : tailrecursion.hoplon.div.call(null,G__160777,G__160778));
});})(G__160753,title,link,all_sects,num_sects,vec__160731,ch,all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__160753,G__160754) : tailrecursion.hoplon.div.call(null,G__160753,G__160754));
});})(all_chapters,num_chapters,G__160719,G__160720,G__160721,vec__160718,one,two,three,four,vec__160715,map__160716,map__160716__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__160719,G__160720,G__160721,G__160722) : tailrecursion.hoplon.div.call(null,G__160719,G__160720,G__160721,G__160722));
})()], 0));
};
var general$toc$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__160814__i = 0, G__160814__a = new Array(arguments.length -  0);
while (G__160814__i < G__160814__a.length) {G__160814__a[G__160814__i] = arguments[G__160814__i + 0]; ++G__160814__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__160814__a,0);
} 
return general$toc$toc__delegate.call(this,args__8262__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__160815){
var args__8262__auto__ = cljs.core.seq(arglist__160815);
return general$toc$toc__delegate(args__8262__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;
