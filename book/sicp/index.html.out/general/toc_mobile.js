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
var vec__201608 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201608,(0),null);
var map__201609__$1 = ((((!((map__201609 == null)))?((((map__201609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201609):map__201609);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201609__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201609__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201608,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (G__201611,G__201612,G__201613){
return (G__201611.cljs$core$IFn$_invoke$arity$2 ? G__201611.cljs$core$IFn$_invoke$arity$2(G__201612,G__201613) : G__201611.call(null,G__201612,G__201613));
});})(vec__201608,map__201609,map__201609__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (G__201614,G__201615,G__201616){
return (G__201614.cljs$core$IFn$_invoke$arity$2 ? G__201614.cljs$core$IFn$_invoke$arity$2(G__201615,G__201616) : G__201614.call(null,G__201615,G__201616));
});})(scroll_link_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (G__201617,G__201618){
var or__5022__auto__ = G__201617;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__201618;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__201620 = cljs.core.cst$kw$class;
var G__201621 = tailrecursion.javelin.formula(((function (G__201620,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (G__201629){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__201629], null);
});})(G__201620,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_))
).call(null,active_QMARK_);
var G__201622 = cljs.core.cst$kw$click;
var G__201623 = ((function (G__201620,G__201621,G__201622,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__201620,G__201621,G__201622,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_))
;
var G__201624 = cljs.core.cst$kw$hover;
var G__201625 = ((function (G__201620,G__201621,G__201622,G__201623,G__201624,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__201620,G__201621,G__201622,G__201623,G__201624,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__201608,map__201609,map__201609__$1,link,title,_))
;
var G__201626 = cljs.core.cst$kw$href;
var G__201627 = link;
var G__201628 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__201620,G__201621,G__201622,G__201623,G__201624,G__201625,G__201626,G__201627,G__201628) : tailrecursion.hoplon.a.call(null,G__201620,G__201621,G__201622,G__201623,G__201624,G__201625,G__201626,G__201627,G__201628));
};
var general$toc_mobile$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201630__i = 0, G__201630__a = new Array(arguments.length -  0);
while (G__201630__i < G__201630__a.length) {G__201630__a[G__201630__i] = arguments[G__201630__i + 0]; ++G__201630__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201630__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__201631){
var args__8262__auto__ = cljs.core.seq(arglist__201631);
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
var vec__201636 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201636,(0),null);
var map__201637__$1 = ((((!((map__201637 == null)))?((((map__201637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201637):map__201637);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201637__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201637__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201636,(1),null);
var G__201639 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__201639) : tailrecursion.hoplon.li.call(null,G__201639));
};
var general$toc_mobile$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201640__i = 0, G__201640__a = new Array(arguments.length -  0);
while (G__201640__i < G__201640__a.length) {G__201640__a[G__201640__i] = arguments[G__201640__i + 0]; ++G__201640__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201640__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__201641){
var args__8262__auto__ = cljs.core.seq(arglist__201641);
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
var vec__201648 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201648,(0),null);
var map__201649__$1 = ((((!((map__201649 == null)))?((((map__201649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201649):map__201649);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201649__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201649__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201648,(1),null);
var G__201651 = cljs.core.cst$kw$style;
var G__201652 = "margin-left:0px; font-size:13px;";
var G__201653 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__201651,G__201652,G__201653) : tailrecursion.hoplon.li.call(null,G__201651,G__201652,G__201653));
};
var general$toc_mobile$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201654__i = 0, G__201654__a = new Array(arguments.length -  0);
while (G__201654__i < G__201654__a.length) {G__201654__a[G__201654__i] = arguments[G__201654__i + 0]; ++G__201654__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201654__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__201655){
var args__8262__auto__ = cljs.core.seq(arglist__201655);
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
var vec__201662 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201662,(0),null);
var map__201663__$1 = ((((!((map__201663 == null)))?((((map__201663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201663):map__201663);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201663__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201663__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201662,(1),null);
var G__201665 = cljs.core.cst$kw$style;
var G__201666 = "font-size:12px;";
var G__201667 = general.toc_mobile.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__201665,G__201666,G__201667) : tailrecursion.hoplon.li.call(null,G__201665,G__201666,G__201667));
};
var general$toc_mobile$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201668__i = 0, G__201668__a = new Array(arguments.length -  0);
while (G__201668__i < G__201668__a.length) {G__201668__a[G__201668__i] = arguments[G__201668__i + 0]; ++G__201668__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201668__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__201669){
var args__8262__auto__ = cljs.core.seq(arglist__201669);
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
var vec__201671 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201671,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201671,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201672__i = 0, G__201672__a = new Array(arguments.length -  0);
while (G__201672__i < G__201672__a.length) {G__201672__a[G__201672__i] = arguments[G__201672__i + 0]; ++G__201672__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201672__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__201673){
var args__8262__auto__ = cljs.core.seq(arglist__201673);
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
var vec__201699 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201699,(0),null);
var map__201700__$1 = ((((!((map__201700 == null)))?((((map__201700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201700):map__201700);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201700__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201699,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201711 = cljs.core.cst$kw$style;
var G__201712 = "padding-left:10px; padding-top:0px;";
var G__201713 = cljs.core.cst$kw$class;
var G__201714 = tailrecursion.javelin.formula(((function (G__201711,G__201712,G__201713,vec__201699,map__201700,map__201700__$1,ch,kids){
return (function (G__201716,G__201718,G__201715,G__201717){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201721 = (function (){var G__201722 = G__201717;
var G__201723 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201718);
return (G__201716.cljs$core$IFn$_invoke$arity$2 ? G__201716.cljs$core$IFn$_invoke$arity$2(G__201722,G__201723) : G__201716.call(null,G__201722,G__201723));
})();
return (G__201715.cljs$core$IFn$_invoke$arity$1 ? G__201715.cljs$core$IFn$_invoke$arity$1(G__201721) : G__201715.call(null,G__201721));
})()], null);
});})(G__201711,G__201712,G__201713,vec__201699,map__201700,map__201700__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201711,G__201712,G__201713,G__201714) : tailrecursion.hoplon.ul.call(null,G__201711,G__201712,G__201713,G__201714));
})(),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201724__i = 0, G__201724__a = new Array(arguments.length -  0);
while (G__201724__i < G__201724__a.length) {G__201724__a[G__201724__i] = arguments[G__201724__i + 0]; ++G__201724__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201724__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__201725){
var args__8262__auto__ = cljs.core.seq(arglist__201725);
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
var vec__201761 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201761,(0),null);
var map__201762__$1 = ((((!((map__201762 == null)))?((((map__201762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201762):map__201762);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201762__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201762__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201761,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201778 = cljs.core.cst$kw$style;
var G__201779 = "padding-left:10px; padding-top:0px;";
var G__201780 = cljs.core.cst$kw$class;
var G__201781 = tailrecursion.javelin.formula(((function (G__201778,G__201779,G__201780,vec__201761,map__201762,map__201762__$1,ch,sect,kids){
return (function (G__201783,G__201784,G__201786,G__201782,G__201785){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201791 = ((function (){var G__201792 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201784);
var G__201793 = G__201785;
return (G__201783.cljs$core$IFn$_invoke$arity$2 ? G__201783.cljs$core$IFn$_invoke$arity$2(G__201792,G__201793) : G__201783.call(null,G__201792,G__201793));
})()) && ((function (){var G__201794 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__201784);
var G__201795 = G__201786;
return (G__201783.cljs$core$IFn$_invoke$arity$2 ? G__201783.cljs$core$IFn$_invoke$arity$2(G__201794,G__201795) : G__201783.call(null,G__201794,G__201795));
})());
return (G__201782.cljs$core$IFn$_invoke$arity$1 ? G__201782.cljs$core$IFn$_invoke$arity$1(G__201791) : G__201782.call(null,G__201791));
})()], null);
});})(G__201778,G__201779,G__201780,vec__201761,map__201762,map__201762__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201778,G__201779,G__201780,G__201781) : tailrecursion.hoplon.ul.call(null,G__201778,G__201779,G__201780,G__201781));
})(),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201796__i = 0, G__201796__a = new Array(arguments.length -  0);
while (G__201796__i < G__201796__a.length) {G__201796__a[G__201796__i] = arguments[G__201796__i + 0]; ++G__201796__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201796__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__201797){
var args__8262__auto__ = cljs.core.seq(arglist__201797);
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
var vec__201843 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201843,(0),null);
var map__201844__$1 = ((((!((map__201844 == null)))?((((map__201844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201844):map__201844);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201844__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201844__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201844__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201843,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__201865 = cljs.core.cst$kw$style;
var G__201866 = "padding-left: 10px;";
var G__201867 = cljs.core.cst$kw$class;
var G__201868 = tailrecursion.javelin.formula(((function (G__201865,G__201866,G__201867,vec__201843,map__201844,map__201844__$1,ch,sect,sub,kids){
return (function (G__201870,G__201871,G__201873,G__201874,G__201869,G__201872){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__201881 = ((function (){var G__201882 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__201871);
var G__201883 = G__201872;
return (G__201870.cljs$core$IFn$_invoke$arity$2 ? G__201870.cljs$core$IFn$_invoke$arity$2(G__201882,G__201883) : G__201870.call(null,G__201882,G__201883));
})()) && ((function (){var G__201884 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__201871);
var G__201885 = G__201873;
return (G__201870.cljs$core$IFn$_invoke$arity$2 ? G__201870.cljs$core$IFn$_invoke$arity$2(G__201884,G__201885) : G__201870.call(null,G__201884,G__201885));
})()) && ((function (){var G__201886 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__201871);
var G__201887 = G__201874;
return (G__201870.cljs$core$IFn$_invoke$arity$2 ? G__201870.cljs$core$IFn$_invoke$arity$2(G__201886,G__201887) : G__201870.call(null,G__201886,G__201887));
})());
return (G__201869.cljs$core$IFn$_invoke$arity$1 ? G__201869.cljs$core$IFn$_invoke$arity$1(G__201881) : G__201869.call(null,G__201881));
})()], null);
});})(G__201865,G__201866,G__201867,vec__201843,map__201844,map__201844__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__201865,G__201866,G__201867,G__201868) : tailrecursion.hoplon.ul.call(null,G__201865,G__201866,G__201867,G__201868));
})(),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__201888__i = 0, G__201888__a = new Array(arguments.length -  0);
while (G__201888__i < G__201888__a.length) {G__201888__a[G__201888__i] = arguments[G__201888__i + 0]; ++G__201888__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__201888__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__201889){
var args__8262__auto__ = cljs.core.seq(arglist__201889);
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
var vec__201992 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__201993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201992,(0),null);
var map__201993__$1 = ((((!((map__201993 == null)))?((((map__201993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__201993):map__201993);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__201993__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201992,(1),null);
var vec__201995 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201995,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201995,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201995,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__201995,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__201998 = cljs.core.cst$kw$class;
var G__201999 = tailrecursion.javelin.formula(((function (G__201998,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202001,G__202002){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$visible_DASH_xs,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$in,(G__202001.cljs$core$IFn$_invoke$arity$2 ? G__202001.cljs$core$IFn$_invoke$arity$2(G__202002,"toc") : G__202001.call(null,G__202002,"toc"))], null);
});})(G__201998,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__202000 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202004,G__202005,G__202003){
return (G__202003.cljs$core$IFn$_invoke$arity$2 ? G__202003.cljs$core$IFn$_invoke$arity$2(G__202004,G__202005) : G__202003.call(null,G__202004,G__202005));
});})(G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202008,G__202006,G__202007){
var G__202009 = (1);
var G__202010 = ((G__202007.cljs$core$IFn$_invoke$arity$1 ? G__202007.cljs$core$IFn$_invoke$arity$1(G__202008) : G__202007.call(null,G__202008)) + (1));
return (G__202006.cljs$core$IFn$_invoke$arity$2 ? G__202006.cljs$core$IFn$_invoke$arity$2(G__202009,G__202010) : G__202006.call(null,G__202009,G__202010));
});})(all_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (item__8273__auto__){
var vec__202011 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202011,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202013,G__202014,G__202012){
var G__202015 = G__202013;
var G__202016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202014,cljs.core.cst$kw$title], null);
return (G__202012.cljs$core$IFn$_invoke$arity$2 ? G__202012.cljs$core$IFn$_invoke$arity$2(G__202015,G__202016) : G__202012.call(null,G__202015,G__202016));
});})(vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202018,G__202019,G__202017){
var G__202020 = G__202018;
var G__202021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202019,cljs.core.cst$kw$link], null);
return (G__202017.cljs$core$IFn$_invoke$arity$2 ? G__202017.cljs$core$IFn$_invoke$arity$2(G__202020,G__202021) : G__202017.call(null,G__202020,G__202021));
});})(title,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202023,G__202024,G__202025,G__202022){
var G__202026 = G__202023;
var G__202027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202024,G__202025], null);
return (G__202022.cljs$core$IFn$_invoke$arity$2 ? G__202022.cljs$core$IFn$_invoke$arity$2(G__202026,G__202027) : G__202022.call(null,G__202026,G__202027));
});})(title,link,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202030,G__202028,G__202029){
var G__202031 = (1);
var G__202032 = ((G__202029.cljs$core$IFn$_invoke$arity$1 ? G__202029.cljs$core$IFn$_invoke$arity$1(G__202030) : G__202029.call(null,G__202030)) + (1));
return (G__202028.cljs$core$IFn$_invoke$arity$2 ? G__202028.cljs$core$IFn$_invoke$arity$2(G__202031,G__202032) : G__202028.call(null,G__202031,G__202032));
});})(title,link,all_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__202033 = general.toc_mobile.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__202034 = general.toc_mobile.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (item__8273__auto____$1){
var vec__202035 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202035,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202037,G__202038,G__202036){
var G__202039 = G__202037;
var G__202040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202038,cljs.core.cst$kw$title], null);
return (G__202036.cljs$core$IFn$_invoke$arity$2 ? G__202036.cljs$core$IFn$_invoke$arity$2(G__202039,G__202040) : G__202036.call(null,G__202039,G__202040));
});})(vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202042,G__202043,G__202041){
var G__202044 = G__202042;
var G__202045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202043,cljs.core.cst$kw$link], null);
return (G__202041.cljs$core$IFn$_invoke$arity$2 ? G__202041.cljs$core$IFn$_invoke$arity$2(G__202044,G__202045) : G__202041.call(null,G__202044,G__202045));
});})(title__$1,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202047,G__202048,G__202049,G__202046){
var G__202050 = G__202047;
var G__202051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202048,G__202049], null);
return (G__202046.cljs$core$IFn$_invoke$arity$2 ? G__202046.cljs$core$IFn$_invoke$arity$2(G__202050,G__202051) : G__202046.call(null,G__202050,G__202051));
});})(title__$1,link__$1,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202052,G__202054,G__202053){
var G__202055 = (1);
var G__202056 = ((G__202053.cljs$core$IFn$_invoke$arity$1 ? G__202053.cljs$core$IFn$_invoke$arity$1(G__202054) : G__202053.call(null,G__202054)) + (1));
return (G__202052.cljs$core$IFn$_invoke$arity$2 ? G__202052.cljs$core$IFn$_invoke$arity$2(G__202055,G__202056) : G__202052.call(null,G__202055,G__202056));
});})(title__$1,link__$1,all_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__202057 = general.toc_mobile.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__202058 = general.toc_mobile.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (item__8273__auto____$2){
var vec__202059 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202059,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202062,G__202061,G__202060){
var G__202063 = G__202061;
var G__202064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202062,cljs.core.cst$kw$title], null);
return (G__202060.cljs$core$IFn$_invoke$arity$2 ? G__202060.cljs$core$IFn$_invoke$arity$2(G__202063,G__202064) : G__202060.call(null,G__202063,G__202064));
});})(vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202067,G__202066,G__202065){
var G__202068 = G__202066;
var G__202069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202067,cljs.core.cst$kw$link], null);
return (G__202065.cljs$core$IFn$_invoke$arity$2 ? G__202065.cljs$core$IFn$_invoke$arity$2(G__202068,G__202069) : G__202065.call(null,G__202068,G__202069));
});})(title__$2,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202072,G__202071,G__202073,G__202070){
var G__202074 = G__202071;
var G__202075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202072,G__202073], null);
return (G__202070.cljs$core$IFn$_invoke$arity$2 ? G__202070.cljs$core$IFn$_invoke$arity$2(G__202074,G__202075) : G__202070.call(null,G__202074,G__202075));
});})(title__$2,link__$2,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202076,G__202078,G__202077){
var G__202079 = (1);
var G__202080 = ((G__202077.cljs$core$IFn$_invoke$arity$1 ? G__202077.cljs$core$IFn$_invoke$arity$1(G__202078) : G__202077.call(null,G__202078)) + (1));
return (G__202076.cljs$core$IFn$_invoke$arity$2 ? G__202076.cljs$core$IFn$_invoke$arity$2(G__202079,G__202080) : G__202076.call(null,G__202079,G__202080));
});})(title__$2,link__$2,all_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__202081 = general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__202082 = general.toc_mobile.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (item__8273__auto____$3){
var vec__202083 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202083,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__202083,ssub,G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202086,G__202085,G__202084){
var G__202087 = G__202085;
var G__202088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202086,cljs.core.cst$kw$title], null);
return (G__202084.cljs$core$IFn$_invoke$arity$2 ? G__202084.cljs$core$IFn$_invoke$arity$2(G__202087,G__202088) : G__202084.call(null,G__202087,G__202088));
});})(vec__202083,ssub,G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__202083,ssub,G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_){
return (function (G__202091,G__202090,G__202089){
var G__202092 = G__202090;
var G__202093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202091,cljs.core.cst$kw$link], null);
return (G__202089.cljs$core$IFn$_invoke$arity$2 ? G__202089.cljs$core$IFn$_invoke$arity$2(G__202092,G__202093) : G__202089.call(null,G__202092,G__202093));
});})(title__$3,vec__202083,ssub,G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__202081,title__$2,link__$2,all_ssub,num_ssub,vec__202059,sub,G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202081,G__202082) : tailrecursion.hoplon.div.call(null,G__202081,G__202082));
});})(G__202057,title__$1,link__$1,all_subs,num_subs,vec__202035,sect,G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202057,G__202058) : tailrecursion.hoplon.div.call(null,G__202057,G__202058));
});})(G__202033,title,link,all_sects,num_sects,vec__202011,ch,all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202033,G__202034) : tailrecursion.hoplon.div.call(null,G__202033,G__202034));
});})(all_chapters,num_chapters,G__201998,G__201999,vec__201995,one,two,three,four,vec__201992,map__201993,map__201993__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__201998,G__201999,G__202000) : tailrecursion.hoplon.div.call(null,G__201998,G__201999,G__202000));
})()], 0));
};
var general$toc_mobile$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202094__i = 0, G__202094__a = new Array(arguments.length -  0);
while (G__202094__i < G__202094__a.length) {G__202094__a[G__202094__i] = arguments[G__202094__i + 0]; ++G__202094__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202094__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__8262__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__202095){
var args__8262__auto__ = cljs.core.seq(arglist__202095);
return general$toc_mobile$toc__delegate(args__8262__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;
