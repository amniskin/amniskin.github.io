// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell(null);
general.toc.scroll_map = tailrecursion.javelin.formula((function (G__180749,G__180748,G__180754,G__180755,G__180751,G__180753,G__180752,G__180750){
var G__180756 = cljs.core.PersistentArrayMap.EMPTY;
var G__180757 = (function (){var G__180758 = ((function (G__180756){
return (function (p__180746){
var vec__180747 = p__180746;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180747,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__180750.cljs$core$IFn$_invoke$arity$1 ? G__180750.cljs$core$IFn$_invoke$arity$1(k) : G__180750.call(null,k)),(G__180751.cljs$core$IFn$_invoke$arity$1 ? G__180751.cljs$core$IFn$_invoke$arity$1(v) : G__180751.call(null,v))], null);
});})(G__180756))
;
var G__180759 = (function (){var G__180762 = (2);
var G__180763 = (function (){var G__180764 = (1);
var G__180765 = (G__180754.cljs$core$IFn$_invoke$arity$2 ? G__180754.cljs$core$IFn$_invoke$arity$2(G__180755,/\//) : G__180754.call(null,G__180755,/\//));
return (G__180753.cljs$core$IFn$_invoke$arity$2 ? G__180753.cljs$core$IFn$_invoke$arity$2(G__180764,G__180765) : G__180753.call(null,G__180764,G__180765));
})();
return (G__180752.cljs$core$IFn$_invoke$arity$2 ? G__180752.cljs$core$IFn$_invoke$arity$2(G__180762,G__180763) : G__180752.call(null,G__180762,G__180763));
})();
return (G__180749.cljs$core$IFn$_invoke$arity$2 ? G__180749.cljs$core$IFn$_invoke$arity$2(G__180758,G__180759) : G__180749.call(null,G__180758,G__180759));
})();
return (G__180748.cljs$core$IFn$_invoke$arity$2 ? G__180748.cljs$core$IFn$_invoke$arity$2(G__180756,G__180757) : G__180748.call(null,G__180756,G__180757));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__8262__auto__){
var vec__180788 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180788,(0),null);
var map__180789__$1 = ((((!((map__180789 == null)))?((((map__180789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180789):map__180789);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180789__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180789__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180788,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (G__180791,G__180792,G__180793){
return (G__180791.cljs$core$IFn$_invoke$arity$2 ? G__180791.cljs$core$IFn$_invoke$arity$2(G__180792,G__180793) : G__180791.call(null,G__180792,G__180793));
});})(vec__180788,map__180789,map__180789__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (G__180794,G__180795,G__180796){
return (G__180794.cljs$core$IFn$_invoke$arity$2 ? G__180794.cljs$core$IFn$_invoke$arity$2(G__180795,G__180796) : G__180794.call(null,G__180795,G__180796));
});})(scroll_link_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (G__180797,G__180798){
var or__5022__auto__ = G__180797;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__180798;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__180800 = cljs.core.cst$kw$class;
var G__180801 = tailrecursion.javelin.formula(((function (G__180800,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (G__180809){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__180809], null);
});})(G__180800,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_))
).call(null,active_QMARK_);
var G__180802 = cljs.core.cst$kw$click;
var G__180803 = ((function (G__180800,G__180801,G__180802,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__180800,G__180801,G__180802,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_))
;
var G__180804 = cljs.core.cst$kw$hover;
var G__180805 = ((function (G__180800,G__180801,G__180802,G__180803,G__180804,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__180800,G__180801,G__180802,G__180803,G__180804,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__180788,map__180789,map__180789__$1,link,title,_))
;
var G__180806 = cljs.core.cst$kw$href;
var G__180807 = link;
var G__180808 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__180800,G__180801,G__180802,G__180803,G__180804,G__180805,G__180806,G__180807,G__180808) : tailrecursion.hoplon.a.call(null,G__180800,G__180801,G__180802,G__180803,G__180804,G__180805,G__180806,G__180807,G__180808));
};
var general$toc$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180810__i = 0, G__180810__a = new Array(arguments.length -  0);
while (G__180810__i < G__180810__a.length) {G__180810__a[G__180810__i] = arguments[G__180810__i + 0]; ++G__180810__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180810__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__8262__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__180811){
var args__8262__auto__ = cljs.core.seq(arglist__180811);
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
var vec__180816 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180816,(0),null);
var map__180817__$1 = ((((!((map__180817 == null)))?((((map__180817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180817):map__180817);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180817__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180817__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180816,(1),null);
var G__180819 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__180819) : tailrecursion.hoplon.li.call(null,G__180819));
};
var general$toc$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180820__i = 0, G__180820__a = new Array(arguments.length -  0);
while (G__180820__i < G__180820__a.length) {G__180820__a[G__180820__i] = arguments[G__180820__i + 0]; ++G__180820__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180820__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__8262__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__180821){
var args__8262__auto__ = cljs.core.seq(arglist__180821);
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
var vec__180828 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180828,(0),null);
var map__180829__$1 = ((((!((map__180829 == null)))?((((map__180829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180829):map__180829);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180829__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180829__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180828,(1),null);
var G__180831 = cljs.core.cst$kw$style;
var G__180832 = "margin-left:0px; font-size:13px;";
var G__180833 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180831,G__180832,G__180833) : tailrecursion.hoplon.li.call(null,G__180831,G__180832,G__180833));
};
var general$toc$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180834__i = 0, G__180834__a = new Array(arguments.length -  0);
while (G__180834__i < G__180834__a.length) {G__180834__a[G__180834__i] = arguments[G__180834__i + 0]; ++G__180834__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180834__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__8262__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__180835){
var args__8262__auto__ = cljs.core.seq(arglist__180835);
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
var vec__180842 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180842,(0),null);
var map__180843__$1 = ((((!((map__180843 == null)))?((((map__180843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180843):map__180843);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180843__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180843__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180842,(1),null);
var G__180845 = cljs.core.cst$kw$style;
var G__180846 = "font-size:12px;";
var G__180847 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180845,G__180846,G__180847) : tailrecursion.hoplon.li.call(null,G__180845,G__180846,G__180847));
};
var general$toc$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180848__i = 0, G__180848__a = new Array(arguments.length -  0);
while (G__180848__i < G__180848__a.length) {G__180848__a[G__180848__i] = arguments[G__180848__i + 0]; ++G__180848__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180848__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__8262__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__180849){
var args__8262__auto__ = cljs.core.seq(arglist__180849);
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
var vec__180851 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180851,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180851,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"list-unstyled") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"list-unstyled")),kids);
};
var general$toc$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180852__i = 0, G__180852__a = new Array(arguments.length -  0);
while (G__180852__i < G__180852__a.length) {G__180852__a[G__180852__i] = arguments[G__180852__i + 0]; ++G__180852__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180852__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__180853){
var args__8262__auto__ = cljs.core.seq(arglist__180853);
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
var vec__180879 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180879,(0),null);
var map__180880__$1 = ((((!((map__180880 == null)))?((((map__180880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180880):map__180880);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180880__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180879,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180891 = cljs.core.cst$kw$style;
var G__180892 = "padding-left:10px; padding-top:0px;";
var G__180893 = cljs.core.cst$kw$class;
var G__180894 = tailrecursion.javelin.formula(((function (G__180891,G__180892,G__180893,vec__180879,map__180880,map__180880__$1,ch,kids){
return (function (G__180898,G__180896,G__180895,G__180897){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__180901 = (function (){var G__180902 = G__180897;
var G__180903 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__180898);
return (G__180896.cljs$core$IFn$_invoke$arity$2 ? G__180896.cljs$core$IFn$_invoke$arity$2(G__180902,G__180903) : G__180896.call(null,G__180902,G__180903));
})();
return (G__180895.cljs$core$IFn$_invoke$arity$1 ? G__180895.cljs$core$IFn$_invoke$arity$1(G__180901) : G__180895.call(null,G__180901));
})()], null);
});})(G__180891,G__180892,G__180893,vec__180879,map__180880,map__180880__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__180891,G__180892,G__180893,G__180894) : tailrecursion.hoplon.ul.call(null,G__180891,G__180892,G__180893,G__180894));
})(),kids);
};
var general$toc$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180904__i = 0, G__180904__a = new Array(arguments.length -  0);
while (G__180904__i < G__180904__a.length) {G__180904__a[G__180904__i] = arguments[G__180904__i + 0]; ++G__180904__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180904__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__180905){
var args__8262__auto__ = cljs.core.seq(arglist__180905);
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
var vec__180941 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180941,(0),null);
var map__180942__$1 = ((((!((map__180942 == null)))?((((map__180942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180942):map__180942);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180942__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180942__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180941,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180958 = cljs.core.cst$kw$style;
var G__180959 = "padding-left:10px; padding-top:0px;";
var G__180960 = cljs.core.cst$kw$class;
var G__180961 = tailrecursion.javelin.formula(((function (G__180958,G__180959,G__180960,vec__180941,map__180942,map__180942__$1,ch,sect,kids){
return (function (G__180964,G__180963,G__180966,G__180962,G__180965){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__180971 = ((function (){var G__180972 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__180964);
var G__180973 = G__180965;
return (G__180963.cljs$core$IFn$_invoke$arity$2 ? G__180963.cljs$core$IFn$_invoke$arity$2(G__180972,G__180973) : G__180963.call(null,G__180972,G__180973));
})()) && ((function (){var G__180974 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__180964);
var G__180975 = G__180966;
return (G__180963.cljs$core$IFn$_invoke$arity$2 ? G__180963.cljs$core$IFn$_invoke$arity$2(G__180974,G__180975) : G__180963.call(null,G__180974,G__180975));
})());
return (G__180962.cljs$core$IFn$_invoke$arity$1 ? G__180962.cljs$core$IFn$_invoke$arity$1(G__180971) : G__180962.call(null,G__180971));
})()], null);
});})(G__180958,G__180959,G__180960,vec__180941,map__180942,map__180942__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__180958,G__180959,G__180960,G__180961) : tailrecursion.hoplon.ul.call(null,G__180958,G__180959,G__180960,G__180961));
})(),kids);
};
var general$toc$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180976__i = 0, G__180976__a = new Array(arguments.length -  0);
while (G__180976__i < G__180976__a.length) {G__180976__a[G__180976__i] = arguments[G__180976__i + 0]; ++G__180976__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180976__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__180977){
var args__8262__auto__ = cljs.core.seq(arglist__180977);
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
var vec__181023 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181023,(0),null);
var map__181024__$1 = ((((!((map__181024 == null)))?((((map__181024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181024):map__181024);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181024__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181024__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181024__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181023,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__181045 = cljs.core.cst$kw$style;
var G__181046 = "padding-left: 10px;";
var G__181047 = cljs.core.cst$kw$class;
var G__181048 = tailrecursion.javelin.formula(((function (G__181045,G__181046,G__181047,vec__181023,map__181024,map__181024__$1,ch,sect,sub,kids){
return (function (G__181051,G__181050,G__181053,G__181054,G__181049,G__181052){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__181061 = ((function (){var G__181062 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__181051);
var G__181063 = G__181052;
return (G__181050.cljs$core$IFn$_invoke$arity$2 ? G__181050.cljs$core$IFn$_invoke$arity$2(G__181062,G__181063) : G__181050.call(null,G__181062,G__181063));
})()) && ((function (){var G__181064 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__181051);
var G__181065 = G__181053;
return (G__181050.cljs$core$IFn$_invoke$arity$2 ? G__181050.cljs$core$IFn$_invoke$arity$2(G__181064,G__181065) : G__181050.call(null,G__181064,G__181065));
})()) && ((function (){var G__181066 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__181051);
var G__181067 = G__181054;
return (G__181050.cljs$core$IFn$_invoke$arity$2 ? G__181050.cljs$core$IFn$_invoke$arity$2(G__181066,G__181067) : G__181050.call(null,G__181066,G__181067));
})());
return (G__181049.cljs$core$IFn$_invoke$arity$1 ? G__181049.cljs$core$IFn$_invoke$arity$1(G__181061) : G__181049.call(null,G__181061));
})()], null);
});})(G__181045,G__181046,G__181047,vec__181023,map__181024,map__181024__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__181045,G__181046,G__181047,G__181048) : tailrecursion.hoplon.ul.call(null,G__181045,G__181046,G__181047,G__181048));
})(),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181068__i = 0, G__181068__a = new Array(arguments.length -  0);
while (G__181068__i < G__181068__a.length) {G__181068__a[G__181068__i] = arguments[G__181068__i + 0]; ++G__181068__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181068__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__181069){
var args__8262__auto__ = cljs.core.seq(arglist__181069);
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
var vec__181169 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181169,(0),null);
var map__181170__$1 = ((((!((map__181170 == null)))?((((map__181170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181170):map__181170);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181170__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181169,(1),null);
var vec__181172 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181172,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181172,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181172,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181172,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__181173 = cljs.core.cst$kw$class;
var G__181174 = "col-md-3 col-sm-3 toc";
var G__181175 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Table of Contents") : tailrecursion.hoplon.h3.call(null,"Table of Contents"));
var G__181176 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181178,G__181179,G__181177){
return (G__181177.cljs$core$IFn$_invoke$arity$2 ? G__181177.cljs$core$IFn$_invoke$arity$2(G__181178,G__181179) : G__181177.call(null,G__181178,G__181179));
});})(G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181182,G__181180,G__181181){
var G__181183 = (1);
var G__181184 = ((G__181181.cljs$core$IFn$_invoke$arity$1 ? G__181181.cljs$core$IFn$_invoke$arity$1(G__181182) : G__181181.call(null,G__181182)) + (1));
return (G__181180.cljs$core$IFn$_invoke$arity$2 ? G__181180.cljs$core$IFn$_invoke$arity$2(G__181183,G__181184) : G__181180.call(null,G__181183,G__181184));
});})(all_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (item__8273__auto__){
var vec__181185 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181185,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181187,G__181188,G__181186){
var G__181189 = G__181187;
var G__181190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181188,cljs.core.cst$kw$title], null);
return (G__181186.cljs$core$IFn$_invoke$arity$2 ? G__181186.cljs$core$IFn$_invoke$arity$2(G__181189,G__181190) : G__181186.call(null,G__181189,G__181190));
});})(vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181192,G__181193,G__181191){
var G__181194 = G__181192;
var G__181195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181193,cljs.core.cst$kw$link], null);
return (G__181191.cljs$core$IFn$_invoke$arity$2 ? G__181191.cljs$core$IFn$_invoke$arity$2(G__181194,G__181195) : G__181191.call(null,G__181194,G__181195));
});})(title,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181197,G__181198,G__181199,G__181196){
var G__181200 = G__181197;
var G__181201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181198,G__181199], null);
return (G__181196.cljs$core$IFn$_invoke$arity$2 ? G__181196.cljs$core$IFn$_invoke$arity$2(G__181200,G__181201) : G__181196.call(null,G__181200,G__181201));
});})(title,link,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181204,G__181202,G__181203){
var G__181205 = (1);
var G__181206 = ((G__181203.cljs$core$IFn$_invoke$arity$1 ? G__181203.cljs$core$IFn$_invoke$arity$1(G__181204) : G__181203.call(null,G__181204)) + (1));
return (G__181202.cljs$core$IFn$_invoke$arity$2 ? G__181202.cljs$core$IFn$_invoke$arity$2(G__181205,G__181206) : G__181202.call(null,G__181205,G__181206));
});})(title,link,all_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__181207 = general.toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__181208 = general.toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (item__8273__auto____$1){
var vec__181209 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181209,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181211,G__181212,G__181210){
var G__181213 = G__181211;
var G__181214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181212,cljs.core.cst$kw$title], null);
return (G__181210.cljs$core$IFn$_invoke$arity$2 ? G__181210.cljs$core$IFn$_invoke$arity$2(G__181213,G__181214) : G__181210.call(null,G__181213,G__181214));
});})(vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181216,G__181217,G__181215){
var G__181218 = G__181216;
var G__181219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181217,cljs.core.cst$kw$link], null);
return (G__181215.cljs$core$IFn$_invoke$arity$2 ? G__181215.cljs$core$IFn$_invoke$arity$2(G__181218,G__181219) : G__181215.call(null,G__181218,G__181219));
});})(title__$1,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181221,G__181222,G__181223,G__181220){
var G__181224 = G__181221;
var G__181225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181222,G__181223], null);
return (G__181220.cljs$core$IFn$_invoke$arity$2 ? G__181220.cljs$core$IFn$_invoke$arity$2(G__181224,G__181225) : G__181220.call(null,G__181224,G__181225));
});})(title__$1,link__$1,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181226,G__181228,G__181227){
var G__181229 = (1);
var G__181230 = ((G__181227.cljs$core$IFn$_invoke$arity$1 ? G__181227.cljs$core$IFn$_invoke$arity$1(G__181228) : G__181227.call(null,G__181228)) + (1));
return (G__181226.cljs$core$IFn$_invoke$arity$2 ? G__181226.cljs$core$IFn$_invoke$arity$2(G__181229,G__181230) : G__181226.call(null,G__181229,G__181230));
});})(title__$1,link__$1,all_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__181231 = general.toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__181232 = general.toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (item__8273__auto____$2){
var vec__181233 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181233,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181236,G__181235,G__181234){
var G__181237 = G__181235;
var G__181238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181236,cljs.core.cst$kw$title], null);
return (G__181234.cljs$core$IFn$_invoke$arity$2 ? G__181234.cljs$core$IFn$_invoke$arity$2(G__181237,G__181238) : G__181234.call(null,G__181237,G__181238));
});})(vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181241,G__181240,G__181239){
var G__181242 = G__181240;
var G__181243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181241,cljs.core.cst$kw$link], null);
return (G__181239.cljs$core$IFn$_invoke$arity$2 ? G__181239.cljs$core$IFn$_invoke$arity$2(G__181242,G__181243) : G__181239.call(null,G__181242,G__181243));
});})(title__$2,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181246,G__181245,G__181247,G__181244){
var G__181248 = G__181245;
var G__181249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181246,G__181247], null);
return (G__181244.cljs$core$IFn$_invoke$arity$2 ? G__181244.cljs$core$IFn$_invoke$arity$2(G__181248,G__181249) : G__181244.call(null,G__181248,G__181249));
});})(title__$2,link__$2,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181250,G__181252,G__181251){
var G__181253 = (1);
var G__181254 = ((G__181251.cljs$core$IFn$_invoke$arity$1 ? G__181251.cljs$core$IFn$_invoke$arity$1(G__181252) : G__181251.call(null,G__181252)) + (1));
return (G__181250.cljs$core$IFn$_invoke$arity$2 ? G__181250.cljs$core$IFn$_invoke$arity$2(G__181253,G__181254) : G__181250.call(null,G__181253,G__181254));
});})(title__$2,link__$2,all_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__181255 = general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__181256 = general.toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (item__8273__auto____$3){
var vec__181257 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181257,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__181257,ssub,G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181260,G__181259,G__181258){
var G__181261 = G__181259;
var G__181262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181260,cljs.core.cst$kw$title], null);
return (G__181258.cljs$core$IFn$_invoke$arity$2 ? G__181258.cljs$core$IFn$_invoke$arity$2(G__181261,G__181262) : G__181258.call(null,G__181261,G__181262));
});})(vec__181257,ssub,G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__181257,ssub,G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_){
return (function (G__181265,G__181264,G__181263){
var G__181266 = G__181264;
var G__181267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__181265,cljs.core.cst$kw$link], null);
return (G__181263.cljs$core$IFn$_invoke$arity$2 ? G__181263.cljs$core$IFn$_invoke$arity$2(G__181266,G__181267) : G__181263.call(null,G__181266,G__181267));
});})(title__$3,vec__181257,ssub,G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__181255,title__$2,link__$2,all_ssub,num_ssub,vec__181233,sub,G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181255,G__181256) : tailrecursion.hoplon.div.call(null,G__181255,G__181256));
});})(G__181231,title__$1,link__$1,all_subs,num_subs,vec__181209,sect,G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181231,G__181232) : tailrecursion.hoplon.div.call(null,G__181231,G__181232));
});})(G__181207,title,link,all_sects,num_sects,vec__181185,ch,all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181207,G__181208) : tailrecursion.hoplon.div.call(null,G__181207,G__181208));
});})(all_chapters,num_chapters,G__181173,G__181174,G__181175,vec__181172,one,two,three,four,vec__181169,map__181170,map__181170__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__181173,G__181174,G__181175,G__181176) : tailrecursion.hoplon.div.call(null,G__181173,G__181174,G__181175,G__181176));
})()], 0));
};
var general$toc$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181268__i = 0, G__181268__a = new Array(arguments.length -  0);
while (G__181268__i < G__181268__a.length) {G__181268__a[G__181268__i] = arguments[G__181268__i + 0]; ++G__181268__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181268__a,0);
} 
return general$toc$toc__delegate.call(this,args__8262__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__181269){
var args__8262__auto__ = cljs.core.seq(arglist__181269);
return general$toc$toc__delegate(args__8262__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;
