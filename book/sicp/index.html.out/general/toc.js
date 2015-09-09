// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell(null);
general.toc.scroll_map = tailrecursion.javelin.formula((function (G__183619,G__183618,G__183624,G__183625,G__183621,G__183623,G__183622,G__183620){
var G__183626 = cljs.core.PersistentArrayMap.EMPTY;
var G__183627 = (function (){var G__183628 = ((function (G__183626){
return (function (p__183616){
var vec__183617 = p__183616;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183617,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183617,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__183620.cljs$core$IFn$_invoke$arity$1 ? G__183620.cljs$core$IFn$_invoke$arity$1(k) : G__183620.call(null,k)),(G__183621.cljs$core$IFn$_invoke$arity$1 ? G__183621.cljs$core$IFn$_invoke$arity$1(v) : G__183621.call(null,v))], null);
});})(G__183626))
;
var G__183629 = (function (){var G__183632 = (2);
var G__183633 = (function (){var G__183634 = (1);
var G__183635 = (G__183624.cljs$core$IFn$_invoke$arity$2 ? G__183624.cljs$core$IFn$_invoke$arity$2(G__183625,/\//) : G__183624.call(null,G__183625,/\//));
return (G__183623.cljs$core$IFn$_invoke$arity$2 ? G__183623.cljs$core$IFn$_invoke$arity$2(G__183634,G__183635) : G__183623.call(null,G__183634,G__183635));
})();
return (G__183622.cljs$core$IFn$_invoke$arity$2 ? G__183622.cljs$core$IFn$_invoke$arity$2(G__183632,G__183633) : G__183622.call(null,G__183632,G__183633));
})();
return (G__183619.cljs$core$IFn$_invoke$arity$2 ? G__183619.cljs$core$IFn$_invoke$arity$2(G__183628,G__183629) : G__183619.call(null,G__183628,G__183629));
})();
return (G__183618.cljs$core$IFn$_invoke$arity$2 ? G__183618.cljs$core$IFn$_invoke$arity$2(G__183626,G__183627) : G__183618.call(null,G__183626,G__183627));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__8262__auto__){
var vec__183658 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183658,(0),null);
var map__183659__$1 = ((((!((map__183659 == null)))?((((map__183659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183659):map__183659);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183659__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183659__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183658,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (G__183661,G__183662,G__183663){
return (G__183661.cljs$core$IFn$_invoke$arity$2 ? G__183661.cljs$core$IFn$_invoke$arity$2(G__183662,G__183663) : G__183661.call(null,G__183662,G__183663));
});})(vec__183658,map__183659,map__183659__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (G__183664,G__183665,G__183666){
return (G__183664.cljs$core$IFn$_invoke$arity$2 ? G__183664.cljs$core$IFn$_invoke$arity$2(G__183665,G__183666) : G__183664.call(null,G__183665,G__183666));
});})(scroll_link_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (G__183667,G__183668){
var or__5022__auto__ = G__183667;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__183668;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__183670 = cljs.core.cst$kw$class;
var G__183671 = tailrecursion.javelin.formula(((function (G__183670,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (G__183679){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__183679], null);
});})(G__183670,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_))
).call(null,active_QMARK_);
var G__183672 = cljs.core.cst$kw$click;
var G__183673 = ((function (G__183670,G__183671,G__183672,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__183670,G__183671,G__183672,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_))
;
var G__183674 = cljs.core.cst$kw$hover;
var G__183675 = ((function (G__183670,G__183671,G__183672,G__183673,G__183674,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__183670,G__183671,G__183672,G__183673,G__183674,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__183658,map__183659,map__183659__$1,link,title,_))
;
var G__183676 = cljs.core.cst$kw$href;
var G__183677 = link;
var G__183678 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__183670,G__183671,G__183672,G__183673,G__183674,G__183675,G__183676,G__183677,G__183678) : tailrecursion.hoplon.a.call(null,G__183670,G__183671,G__183672,G__183673,G__183674,G__183675,G__183676,G__183677,G__183678));
};
var general$toc$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183680__i = 0, G__183680__a = new Array(arguments.length -  0);
while (G__183680__i < G__183680__a.length) {G__183680__a[G__183680__i] = arguments[G__183680__i + 0]; ++G__183680__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183680__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__8262__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__183681){
var args__8262__auto__ = cljs.core.seq(arglist__183681);
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
var vec__183686 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183686,(0),null);
var map__183687__$1 = ((((!((map__183687 == null)))?((((map__183687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183687):map__183687);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183687__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183687__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183686,(1),null);
var G__183689 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__183689) : tailrecursion.hoplon.li.call(null,G__183689));
};
var general$toc$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183690__i = 0, G__183690__a = new Array(arguments.length -  0);
while (G__183690__i < G__183690__a.length) {G__183690__a[G__183690__i] = arguments[G__183690__i + 0]; ++G__183690__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183690__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__8262__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__183691){
var args__8262__auto__ = cljs.core.seq(arglist__183691);
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
var vec__183698 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183698,(0),null);
var map__183699__$1 = ((((!((map__183699 == null)))?((((map__183699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183699):map__183699);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183699__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183699__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183698,(1),null);
var G__183701 = cljs.core.cst$kw$style;
var G__183702 = "margin-left:0px; font-size:13px;";
var G__183703 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__183701,G__183702,G__183703) : tailrecursion.hoplon.li.call(null,G__183701,G__183702,G__183703));
};
var general$toc$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183704__i = 0, G__183704__a = new Array(arguments.length -  0);
while (G__183704__i < G__183704__a.length) {G__183704__a[G__183704__i] = arguments[G__183704__i + 0]; ++G__183704__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183704__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__8262__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__183705){
var args__8262__auto__ = cljs.core.seq(arglist__183705);
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
var vec__183712 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183712,(0),null);
var map__183713__$1 = ((((!((map__183713 == null)))?((((map__183713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183713):map__183713);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183713__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183713__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183712,(1),null);
var G__183715 = cljs.core.cst$kw$style;
var G__183716 = "font-size:12px;";
var G__183717 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__183715,G__183716,G__183717) : tailrecursion.hoplon.li.call(null,G__183715,G__183716,G__183717));
};
var general$toc$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183718__i = 0, G__183718__a = new Array(arguments.length -  0);
while (G__183718__i < G__183718__a.length) {G__183718__a[G__183718__i] = arguments[G__183718__i + 0]; ++G__183718__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183718__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__8262__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__183719){
var args__8262__auto__ = cljs.core.seq(arglist__183719);
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
var vec__183721 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183721,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183721,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"list-unstyled") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"list-unstyled")),kids);
};
var general$toc$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183722__i = 0, G__183722__a = new Array(arguments.length -  0);
while (G__183722__i < G__183722__a.length) {G__183722__a[G__183722__i] = arguments[G__183722__i + 0]; ++G__183722__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183722__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__183723){
var args__8262__auto__ = cljs.core.seq(arglist__183723);
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
var vec__183749 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183749,(0),null);
var map__183750__$1 = ((((!((map__183750 == null)))?((((map__183750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183750):map__183750);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183750__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183749,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183761 = cljs.core.cst$kw$style;
var G__183762 = "padding-left:10px; padding-top:0px;";
var G__183763 = cljs.core.cst$kw$class;
var G__183764 = tailrecursion.javelin.formula(((function (G__183761,G__183762,G__183763,vec__183749,map__183750,map__183750__$1,ch,kids){
return (function (G__183768,G__183766,G__183765,G__183767){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183771 = (function (){var G__183772 = G__183767;
var G__183773 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183768);
return (G__183766.cljs$core$IFn$_invoke$arity$2 ? G__183766.cljs$core$IFn$_invoke$arity$2(G__183772,G__183773) : G__183766.call(null,G__183772,G__183773));
})();
return (G__183765.cljs$core$IFn$_invoke$arity$1 ? G__183765.cljs$core$IFn$_invoke$arity$1(G__183771) : G__183765.call(null,G__183771));
})()], null);
});})(G__183761,G__183762,G__183763,vec__183749,map__183750,map__183750__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183761,G__183762,G__183763,G__183764) : tailrecursion.hoplon.ul.call(null,G__183761,G__183762,G__183763,G__183764));
})(),kids);
};
var general$toc$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183774__i = 0, G__183774__a = new Array(arguments.length -  0);
while (G__183774__i < G__183774__a.length) {G__183774__a[G__183774__i] = arguments[G__183774__i + 0]; ++G__183774__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183774__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__183775){
var args__8262__auto__ = cljs.core.seq(arglist__183775);
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
var vec__183811 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183811,(0),null);
var map__183812__$1 = ((((!((map__183812 == null)))?((((map__183812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183812):map__183812);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183812__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183812__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183811,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183828 = cljs.core.cst$kw$style;
var G__183829 = "padding-left:10px; padding-top:0px;";
var G__183830 = cljs.core.cst$kw$class;
var G__183831 = tailrecursion.javelin.formula(((function (G__183828,G__183829,G__183830,vec__183811,map__183812,map__183812__$1,ch,sect,kids){
return (function (G__183834,G__183833,G__183836,G__183832,G__183835){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183841 = ((function (){var G__183842 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183834);
var G__183843 = G__183835;
return (G__183833.cljs$core$IFn$_invoke$arity$2 ? G__183833.cljs$core$IFn$_invoke$arity$2(G__183842,G__183843) : G__183833.call(null,G__183842,G__183843));
})()) && ((function (){var G__183844 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__183834);
var G__183845 = G__183836;
return (G__183833.cljs$core$IFn$_invoke$arity$2 ? G__183833.cljs$core$IFn$_invoke$arity$2(G__183844,G__183845) : G__183833.call(null,G__183844,G__183845));
})());
return (G__183832.cljs$core$IFn$_invoke$arity$1 ? G__183832.cljs$core$IFn$_invoke$arity$1(G__183841) : G__183832.call(null,G__183841));
})()], null);
});})(G__183828,G__183829,G__183830,vec__183811,map__183812,map__183812__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183828,G__183829,G__183830,G__183831) : tailrecursion.hoplon.ul.call(null,G__183828,G__183829,G__183830,G__183831));
})(),kids);
};
var general$toc$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183846__i = 0, G__183846__a = new Array(arguments.length -  0);
while (G__183846__i < G__183846__a.length) {G__183846__a[G__183846__i] = arguments[G__183846__i + 0]; ++G__183846__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183846__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__183847){
var args__8262__auto__ = cljs.core.seq(arglist__183847);
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
var vec__183893 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__183894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183893,(0),null);
var map__183894__$1 = ((((!((map__183894 == null)))?((((map__183894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__183894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__183894):map__183894);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183894__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183894__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__183894__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__183893,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__183915 = cljs.core.cst$kw$style;
var G__183916 = "padding-left: 10px;";
var G__183917 = cljs.core.cst$kw$class;
var G__183918 = tailrecursion.javelin.formula(((function (G__183915,G__183916,G__183917,vec__183893,map__183894,map__183894__$1,ch,sect,sub,kids){
return (function (G__183921,G__183920,G__183923,G__183924,G__183919,G__183922){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__183931 = ((function (){var G__183932 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__183921);
var G__183933 = G__183922;
return (G__183920.cljs$core$IFn$_invoke$arity$2 ? G__183920.cljs$core$IFn$_invoke$arity$2(G__183932,G__183933) : G__183920.call(null,G__183932,G__183933));
})()) && ((function (){var G__183934 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__183921);
var G__183935 = G__183923;
return (G__183920.cljs$core$IFn$_invoke$arity$2 ? G__183920.cljs$core$IFn$_invoke$arity$2(G__183934,G__183935) : G__183920.call(null,G__183934,G__183935));
})()) && ((function (){var G__183936 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__183921);
var G__183937 = G__183924;
return (G__183920.cljs$core$IFn$_invoke$arity$2 ? G__183920.cljs$core$IFn$_invoke$arity$2(G__183936,G__183937) : G__183920.call(null,G__183936,G__183937));
})());
return (G__183919.cljs$core$IFn$_invoke$arity$1 ? G__183919.cljs$core$IFn$_invoke$arity$1(G__183931) : G__183919.call(null,G__183931));
})()], null);
});})(G__183915,G__183916,G__183917,vec__183893,map__183894,map__183894__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__183915,G__183916,G__183917,G__183918) : tailrecursion.hoplon.ul.call(null,G__183915,G__183916,G__183917,G__183918));
})(),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__183938__i = 0, G__183938__a = new Array(arguments.length -  0);
while (G__183938__i < G__183938__a.length) {G__183938__a[G__183938__i] = arguments[G__183938__i + 0]; ++G__183938__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__183938__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__183939){
var args__8262__auto__ = cljs.core.seq(arglist__183939);
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
var vec__184039 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184039,(0),null);
var map__184040__$1 = ((((!((map__184040 == null)))?((((map__184040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184040):map__184040);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184040__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184039,(1),null);
var vec__184042 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184042,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184042,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184042,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184042,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__184043 = cljs.core.cst$kw$class;
var G__184044 = "col-md-3 col-sm-3 toc";
var G__184045 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Table of Contents") : tailrecursion.hoplon.h3.call(null,"Table of Contents"));
var G__184046 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184048,G__184049,G__184047){
return (G__184047.cljs$core$IFn$_invoke$arity$2 ? G__184047.cljs$core$IFn$_invoke$arity$2(G__184048,G__184049) : G__184047.call(null,G__184048,G__184049));
});})(G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184052,G__184050,G__184051){
var G__184053 = (1);
var G__184054 = ((G__184051.cljs$core$IFn$_invoke$arity$1 ? G__184051.cljs$core$IFn$_invoke$arity$1(G__184052) : G__184051.call(null,G__184052)) + (1));
return (G__184050.cljs$core$IFn$_invoke$arity$2 ? G__184050.cljs$core$IFn$_invoke$arity$2(G__184053,G__184054) : G__184050.call(null,G__184053,G__184054));
});})(all_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (item__8273__auto__){
var vec__184055 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184055,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184057,G__184058,G__184056){
var G__184059 = G__184057;
var G__184060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184058,cljs.core.cst$kw$title], null);
return (G__184056.cljs$core$IFn$_invoke$arity$2 ? G__184056.cljs$core$IFn$_invoke$arity$2(G__184059,G__184060) : G__184056.call(null,G__184059,G__184060));
});})(vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184062,G__184063,G__184061){
var G__184064 = G__184062;
var G__184065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184063,cljs.core.cst$kw$link], null);
return (G__184061.cljs$core$IFn$_invoke$arity$2 ? G__184061.cljs$core$IFn$_invoke$arity$2(G__184064,G__184065) : G__184061.call(null,G__184064,G__184065));
});})(title,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184067,G__184068,G__184069,G__184066){
var G__184070 = G__184067;
var G__184071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184068,G__184069], null);
return (G__184066.cljs$core$IFn$_invoke$arity$2 ? G__184066.cljs$core$IFn$_invoke$arity$2(G__184070,G__184071) : G__184066.call(null,G__184070,G__184071));
});})(title,link,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184074,G__184072,G__184073){
var G__184075 = (1);
var G__184076 = ((G__184073.cljs$core$IFn$_invoke$arity$1 ? G__184073.cljs$core$IFn$_invoke$arity$1(G__184074) : G__184073.call(null,G__184074)) + (1));
return (G__184072.cljs$core$IFn$_invoke$arity$2 ? G__184072.cljs$core$IFn$_invoke$arity$2(G__184075,G__184076) : G__184072.call(null,G__184075,G__184076));
});})(title,link,all_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__184077 = general.toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__184078 = general.toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (item__8273__auto____$1){
var vec__184079 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184079,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184081,G__184082,G__184080){
var G__184083 = G__184081;
var G__184084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184082,cljs.core.cst$kw$title], null);
return (G__184080.cljs$core$IFn$_invoke$arity$2 ? G__184080.cljs$core$IFn$_invoke$arity$2(G__184083,G__184084) : G__184080.call(null,G__184083,G__184084));
});})(vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184086,G__184087,G__184085){
var G__184088 = G__184086;
var G__184089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184087,cljs.core.cst$kw$link], null);
return (G__184085.cljs$core$IFn$_invoke$arity$2 ? G__184085.cljs$core$IFn$_invoke$arity$2(G__184088,G__184089) : G__184085.call(null,G__184088,G__184089));
});})(title__$1,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184091,G__184092,G__184093,G__184090){
var G__184094 = G__184091;
var G__184095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184092,G__184093], null);
return (G__184090.cljs$core$IFn$_invoke$arity$2 ? G__184090.cljs$core$IFn$_invoke$arity$2(G__184094,G__184095) : G__184090.call(null,G__184094,G__184095));
});})(title__$1,link__$1,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184096,G__184098,G__184097){
var G__184099 = (1);
var G__184100 = ((G__184097.cljs$core$IFn$_invoke$arity$1 ? G__184097.cljs$core$IFn$_invoke$arity$1(G__184098) : G__184097.call(null,G__184098)) + (1));
return (G__184096.cljs$core$IFn$_invoke$arity$2 ? G__184096.cljs$core$IFn$_invoke$arity$2(G__184099,G__184100) : G__184096.call(null,G__184099,G__184100));
});})(title__$1,link__$1,all_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__184101 = general.toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__184102 = general.toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (item__8273__auto____$2){
var vec__184103 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184103,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184106,G__184105,G__184104){
var G__184107 = G__184105;
var G__184108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184106,cljs.core.cst$kw$title], null);
return (G__184104.cljs$core$IFn$_invoke$arity$2 ? G__184104.cljs$core$IFn$_invoke$arity$2(G__184107,G__184108) : G__184104.call(null,G__184107,G__184108));
});})(vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184111,G__184110,G__184109){
var G__184112 = G__184110;
var G__184113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184111,cljs.core.cst$kw$link], null);
return (G__184109.cljs$core$IFn$_invoke$arity$2 ? G__184109.cljs$core$IFn$_invoke$arity$2(G__184112,G__184113) : G__184109.call(null,G__184112,G__184113));
});})(title__$2,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184116,G__184115,G__184117,G__184114){
var G__184118 = G__184115;
var G__184119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184116,G__184117], null);
return (G__184114.cljs$core$IFn$_invoke$arity$2 ? G__184114.cljs$core$IFn$_invoke$arity$2(G__184118,G__184119) : G__184114.call(null,G__184118,G__184119));
});})(title__$2,link__$2,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184120,G__184122,G__184121){
var G__184123 = (1);
var G__184124 = ((G__184121.cljs$core$IFn$_invoke$arity$1 ? G__184121.cljs$core$IFn$_invoke$arity$1(G__184122) : G__184121.call(null,G__184122)) + (1));
return (G__184120.cljs$core$IFn$_invoke$arity$2 ? G__184120.cljs$core$IFn$_invoke$arity$2(G__184123,G__184124) : G__184120.call(null,G__184123,G__184124));
});})(title__$2,link__$2,all_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__184125 = general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__184126 = general.toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (item__8273__auto____$3){
var vec__184127 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184127,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__184127,ssub,G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184130,G__184129,G__184128){
var G__184131 = G__184129;
var G__184132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184130,cljs.core.cst$kw$title], null);
return (G__184128.cljs$core$IFn$_invoke$arity$2 ? G__184128.cljs$core$IFn$_invoke$arity$2(G__184131,G__184132) : G__184128.call(null,G__184131,G__184132));
});})(vec__184127,ssub,G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__184127,ssub,G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_){
return (function (G__184135,G__184134,G__184133){
var G__184136 = G__184134;
var G__184137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__184135,cljs.core.cst$kw$link], null);
return (G__184133.cljs$core$IFn$_invoke$arity$2 ? G__184133.cljs$core$IFn$_invoke$arity$2(G__184136,G__184137) : G__184133.call(null,G__184136,G__184137));
});})(title__$3,vec__184127,ssub,G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__184125,title__$2,link__$2,all_ssub,num_ssub,vec__184103,sub,G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184125,G__184126) : tailrecursion.hoplon.div.call(null,G__184125,G__184126));
});})(G__184101,title__$1,link__$1,all_subs,num_subs,vec__184079,sect,G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184101,G__184102) : tailrecursion.hoplon.div.call(null,G__184101,G__184102));
});})(G__184077,title,link,all_sects,num_sects,vec__184055,ch,all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184077,G__184078) : tailrecursion.hoplon.div.call(null,G__184077,G__184078));
});})(all_chapters,num_chapters,G__184043,G__184044,G__184045,vec__184042,one,two,three,four,vec__184039,map__184040,map__184040__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__184043,G__184044,G__184045,G__184046) : tailrecursion.hoplon.div.call(null,G__184043,G__184044,G__184045,G__184046));
})()], 0));
};
var general$toc$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184138__i = 0, G__184138__a = new Array(arguments.length -  0);
while (G__184138__i < G__184138__a.length) {G__184138__a[G__184138__i] = arguments[G__184138__i + 0]; ++G__184138__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184138__a,0);
} 
return general$toc$toc__delegate.call(this,args__8262__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__184139){
var args__8262__auto__ = cljs.core.seq(arglist__184139);
return general$toc$toc__delegate(args__8262__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;
