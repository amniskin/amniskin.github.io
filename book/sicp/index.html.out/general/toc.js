// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell(null);
general.toc.scroll_map = tailrecursion.javelin.formula((function (G__202133,G__202132,G__202138,G__202139,G__202135,G__202137,G__202136,G__202134){
var G__202140 = cljs.core.PersistentArrayMap.EMPTY;
var G__202141 = (function (){var G__202142 = ((function (G__202140){
return (function (p__202130){
var vec__202131 = p__202130;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202131,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__202134.cljs$core$IFn$_invoke$arity$1 ? G__202134.cljs$core$IFn$_invoke$arity$1(k) : G__202134.call(null,k)),(G__202135.cljs$core$IFn$_invoke$arity$1 ? G__202135.cljs$core$IFn$_invoke$arity$1(v) : G__202135.call(null,v))], null);
});})(G__202140))
;
var G__202143 = (function (){var G__202146 = (2);
var G__202147 = (function (){var G__202148 = (1);
var G__202149 = (G__202138.cljs$core$IFn$_invoke$arity$2 ? G__202138.cljs$core$IFn$_invoke$arity$2(G__202139,/\//) : G__202138.call(null,G__202139,/\//));
return (G__202137.cljs$core$IFn$_invoke$arity$2 ? G__202137.cljs$core$IFn$_invoke$arity$2(G__202148,G__202149) : G__202137.call(null,G__202148,G__202149));
})();
return (G__202136.cljs$core$IFn$_invoke$arity$2 ? G__202136.cljs$core$IFn$_invoke$arity$2(G__202146,G__202147) : G__202136.call(null,G__202146,G__202147));
})();
return (G__202133.cljs$core$IFn$_invoke$arity$2 ? G__202133.cljs$core$IFn$_invoke$arity$2(G__202142,G__202143) : G__202133.call(null,G__202142,G__202143));
})();
return (G__202132.cljs$core$IFn$_invoke$arity$2 ? G__202132.cljs$core$IFn$_invoke$arity$2(G__202140,G__202141) : G__202132.call(null,G__202140,G__202141));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell(null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__8262__auto__){
var vec__202172 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202172,(0),null);
var map__202173__$1 = ((((!((map__202173 == null)))?((((map__202173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202173):map__202173);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202173__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202173__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202172,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula(((function (vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (G__202175,G__202176,G__202177){
return (G__202175.cljs$core$IFn$_invoke$arity$2 ? G__202175.cljs$core$IFn$_invoke$arity$2(G__202176,G__202177) : G__202175.call(null,G__202176,G__202177));
});})(vec__202172,map__202173,map__202173__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (G__202178,G__202179,G__202180){
return (G__202178.cljs$core$IFn$_invoke$arity$2 ? G__202178.cljs$core$IFn$_invoke$arity$2(G__202179,G__202180) : G__202178.call(null,G__202179,G__202180));
});})(scroll_link_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula(((function (scroll_link_QMARK_,hover_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (G__202181,G__202182){
var or__5022__auto__ = G__202181;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__202182;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
var G__202184 = cljs.core.cst$kw$class;
var G__202185 = tailrecursion.javelin.formula(((function (G__202184,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (G__202193){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__202193], null);
});})(G__202184,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_))
).call(null,active_QMARK_);
var G__202186 = cljs.core.cst$kw$click;
var G__202187 = ((function (G__202184,G__202185,G__202186,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,null) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__202184,G__202185,G__202186,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_))
;
var G__202188 = cljs.core.cst$kw$hover;
var G__202189 = ((function (G__202184,G__202185,G__202186,G__202187,G__202188,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.hover_cell,link) : cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link));
});})(G__202184,G__202185,G__202186,G__202187,G__202188,scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__202172,map__202173,map__202173__$1,link,title,_))
;
var G__202190 = cljs.core.cst$kw$href;
var G__202191 = link;
var G__202192 = title;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$9(G__202184,G__202185,G__202186,G__202187,G__202188,G__202189,G__202190,G__202191,G__202192) : tailrecursion.hoplon.a.call(null,G__202184,G__202185,G__202186,G__202187,G__202188,G__202189,G__202190,G__202191,G__202192));
};
var general$toc$toc_link = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202194__i = 0, G__202194__a = new Array(arguments.length -  0);
while (G__202194__i < G__202194__a.length) {G__202194__a[G__202194__i] = arguments[G__202194__i + 0]; ++G__202194__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202194__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__8262__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__202195){
var args__8262__auto__ = cljs.core.seq(arglist__202195);
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
var vec__202200 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202200,(0),null);
var map__202201__$1 = ((((!((map__202201 == null)))?((((map__202201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202201):map__202201);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202201__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202201__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202200,(1),null);
var G__202203 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__202203) : tailrecursion.hoplon.li.call(null,G__202203));
};
var general$toc$li_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202204__i = 0, G__202204__a = new Array(arguments.length -  0);
while (G__202204__i < G__202204__a.length) {G__202204__a[G__202204__i] = arguments[G__202204__i + 0]; ++G__202204__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202204__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__8262__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__202205){
var args__8262__auto__ = cljs.core.seq(arglist__202205);
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
var vec__202212 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202212,(0),null);
var map__202213__$1 = ((((!((map__202213 == null)))?((((map__202213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202213):map__202213);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202213__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202213__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202212,(1),null);
var G__202215 = cljs.core.cst$kw$style;
var G__202216 = "margin-left:0px; font-size:13px;";
var G__202217 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__202215,G__202216,G__202217) : tailrecursion.hoplon.li.call(null,G__202215,G__202216,G__202217));
};
var general$toc$li_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202218__i = 0, G__202218__a = new Array(arguments.length -  0);
while (G__202218__i < G__202218__a.length) {G__202218__a[G__202218__i] = arguments[G__202218__i + 0]; ++G__202218__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202218__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__8262__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__202219){
var args__8262__auto__ = cljs.core.seq(arglist__202219);
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
var vec__202226 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202226,(0),null);
var map__202227__$1 = ((((!((map__202227 == null)))?((((map__202227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202227):map__202227);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202227__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202227__$1,cljs.core.cst$kw$title);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202226,(1),null);
var G__202229 = cljs.core.cst$kw$style;
var G__202230 = "font-size:12px;";
var G__202231 = general.toc.toc_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__202229,G__202230,G__202231) : tailrecursion.hoplon.li.call(null,G__202229,G__202230,G__202231));
};
var general$toc$li_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202232__i = 0, G__202232__a = new Array(arguments.length -  0);
while (G__202232__i < G__202232__a.length) {G__202232__a[G__202232__i] = arguments[G__202232__i + 0]; ++G__202232__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202232__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__8262__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__202233){
var args__8262__auto__ = cljs.core.seq(arglist__202233);
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
var vec__202235 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202235,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202235,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"list-unstyled") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"list-unstyled")),kids);
};
var general$toc$ul_ch = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202236__i = 0, G__202236__a = new Array(arguments.length -  0);
while (G__202236__i < G__202236__a.length) {G__202236__a[G__202236__i] = arguments[G__202236__i + 0]; ++G__202236__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202236__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__8262__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__202237){
var args__8262__auto__ = cljs.core.seq(arglist__202237);
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
var vec__202263 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202263,(0),null);
var map__202264__$1 = ((((!((map__202264 == null)))?((((map__202264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202264):map__202264);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202264__$1,cljs.core.cst$kw$ch);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202263,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202275 = cljs.core.cst$kw$style;
var G__202276 = "padding-left:10px; padding-top:0px;";
var G__202277 = cljs.core.cst$kw$class;
var G__202278 = tailrecursion.javelin.formula(((function (G__202275,G__202276,G__202277,vec__202263,map__202264,map__202264__$1,ch,kids){
return (function (G__202282,G__202280,G__202279,G__202281){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202285 = (function (){var G__202286 = G__202281;
var G__202287 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202282);
return (G__202280.cljs$core$IFn$_invoke$arity$2 ? G__202280.cljs$core$IFn$_invoke$arity$2(G__202286,G__202287) : G__202280.call(null,G__202286,G__202287));
})();
return (G__202279.cljs$core$IFn$_invoke$arity$1 ? G__202279.cljs$core$IFn$_invoke$arity$1(G__202285) : G__202279.call(null,G__202285));
})()], null);
});})(G__202275,G__202276,G__202277,vec__202263,map__202264,map__202264__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202275,G__202276,G__202277,G__202278) : tailrecursion.hoplon.ul.call(null,G__202275,G__202276,G__202277,G__202278));
})(),kids);
};
var general$toc$ul_sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202288__i = 0, G__202288__a = new Array(arguments.length -  0);
while (G__202288__i < G__202288__a.length) {G__202288__a[G__202288__i] = arguments[G__202288__i + 0]; ++G__202288__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202288__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__8262__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__202289){
var args__8262__auto__ = cljs.core.seq(arglist__202289);
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
var vec__202325 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202325,(0),null);
var map__202326__$1 = ((((!((map__202326 == null)))?((((map__202326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202326):map__202326);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202326__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202326__$1,cljs.core.cst$kw$sect);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202325,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202342 = cljs.core.cst$kw$style;
var G__202343 = "padding-left:10px; padding-top:0px;";
var G__202344 = cljs.core.cst$kw$class;
var G__202345 = tailrecursion.javelin.formula(((function (G__202342,G__202343,G__202344,vec__202325,map__202326,map__202326__$1,ch,sect,kids){
return (function (G__202348,G__202347,G__202350,G__202346,G__202349){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202355 = ((function (){var G__202356 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202348);
var G__202357 = G__202349;
return (G__202347.cljs$core$IFn$_invoke$arity$2 ? G__202347.cljs$core$IFn$_invoke$arity$2(G__202356,G__202357) : G__202347.call(null,G__202356,G__202357));
})()) && ((function (){var G__202358 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__202348);
var G__202359 = G__202350;
return (G__202347.cljs$core$IFn$_invoke$arity$2 ? G__202347.cljs$core$IFn$_invoke$arity$2(G__202358,G__202359) : G__202347.call(null,G__202358,G__202359));
})());
return (G__202346.cljs$core$IFn$_invoke$arity$1 ? G__202346.cljs$core$IFn$_invoke$arity$1(G__202355) : G__202346.call(null,G__202355));
})()], null);
});})(G__202342,G__202343,G__202344,vec__202325,map__202326,map__202326__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202342,G__202343,G__202344,G__202345) : tailrecursion.hoplon.ul.call(null,G__202342,G__202343,G__202344,G__202345));
})(),kids);
};
var general$toc$ul_sub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202360__i = 0, G__202360__a = new Array(arguments.length -  0);
while (G__202360__i < G__202360__a.length) {G__202360__a[G__202360__i] = arguments[G__202360__i + 0]; ++G__202360__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202360__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__8262__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__202361){
var args__8262__auto__ = cljs.core.seq(arglist__202361);
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
var vec__202407 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202407,(0),null);
var map__202408__$1 = ((((!((map__202408 == null)))?((((map__202408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202408):map__202408);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202408__$1,cljs.core.cst$kw$ch);
var sect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202408__$1,cljs.core.cst$kw$sect);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202408__$1,cljs.core.cst$kw$sub);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202407,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202429 = cljs.core.cst$kw$style;
var G__202430 = "padding-left: 10px;";
var G__202431 = cljs.core.cst$kw$class;
var G__202432 = tailrecursion.javelin.formula(((function (G__202429,G__202430,G__202431,vec__202407,map__202408,map__202408__$1,ch,sect,sub,kids){
return (function (G__202435,G__202434,G__202437,G__202438,G__202433,G__202436){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$list_DASH_unstyled,true,cljs.core.cst$kw$hidden,(function (){var G__202445 = ((function (){var G__202446 = cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(G__202435);
var G__202447 = G__202436;
return (G__202434.cljs$core$IFn$_invoke$arity$2 ? G__202434.cljs$core$IFn$_invoke$arity$2(G__202446,G__202447) : G__202434.call(null,G__202446,G__202447));
})()) && ((function (){var G__202448 = cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(G__202435);
var G__202449 = G__202437;
return (G__202434.cljs$core$IFn$_invoke$arity$2 ? G__202434.cljs$core$IFn$_invoke$arity$2(G__202448,G__202449) : G__202434.call(null,G__202448,G__202449));
})()) && ((function (){var G__202450 = cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(G__202435);
var G__202451 = G__202438;
return (G__202434.cljs$core$IFn$_invoke$arity$2 ? G__202434.cljs$core$IFn$_invoke$arity$2(G__202450,G__202451) : G__202434.call(null,G__202450,G__202451));
})());
return (G__202433.cljs$core$IFn$_invoke$arity$1 ? G__202433.cljs$core$IFn$_invoke$arity$1(G__202445) : G__202433.call(null,G__202445));
})()], null);
});})(G__202429,G__202430,G__202431,vec__202407,map__202408,map__202408__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch);
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(G__202429,G__202430,G__202431,G__202432) : tailrecursion.hoplon.ul.call(null,G__202429,G__202430,G__202431,G__202432));
})(),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202452__i = 0, G__202452__a = new Array(arguments.length -  0);
while (G__202452__i < G__202452__a.length) {G__202452__a[G__202452__i] = arguments[G__202452__i + 0]; ++G__202452__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202452__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__8262__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__202453){
var args__8262__auto__ = cljs.core.seq(arglist__202453);
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
var vec__202553 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202553,(0),null);
var map__202554__$1 = ((((!((map__202554 == null)))?((((map__202554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202554):map__202554);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202554__$1,cljs.core.cst$kw$data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202553,(1),null);
var vec__202556 = cljs.core.cst$kw$toc_DASH_hierarchy.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)));
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202556,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202556,(1),null);
var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202556,(2),null);
var four = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202556,(3),null);
return general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__202557 = cljs.core.cst$kw$class;
var G__202558 = "col-md-3 col-sm-3 toc";
var G__202559 = (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1("Table of Contents") : tailrecursion.hoplon.h3.call(null,"Table of Contents"));
var G__202560 = (function (){var all_chapters = tailrecursion.javelin.formula(((function (G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202562,G__202563,G__202561){
return (G__202561.cljs$core$IFn$_invoke$arity$2 ? G__202561.cljs$core$IFn$_invoke$arity$2(G__202562,G__202563) : G__202561.call(null,G__202562,G__202563));
});})(G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula(((function (all_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202566,G__202564,G__202565){
var G__202567 = (1);
var G__202568 = ((G__202565.cljs$core$IFn$_invoke$arity$1 ? G__202565.cljs$core$IFn$_invoke$arity$1(G__202566) : G__202565.call(null,G__202566)) + (1));
return (G__202564.cljs$core$IFn$_invoke$arity$2 ? G__202564.cljs$core$IFn$_invoke$arity$2(G__202567,G__202568) : G__202564.call(null,G__202567,G__202568));
});})(all_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tailrecursion.hoplon.loop_tpl_STAR_(num_chapters,null,((function (all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (item__8273__auto__){
var vec__202569 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,item__8273__auto__));
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202569,(0),null);
var title = tailrecursion.javelin.formula(((function (vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202571,G__202572,G__202570){
var G__202573 = G__202571;
var G__202574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202572,cljs.core.cst$kw$title], null);
return (G__202570.cljs$core$IFn$_invoke$arity$2 ? G__202570.cljs$core$IFn$_invoke$arity$2(G__202573,G__202574) : G__202570.call(null,G__202573,G__202574));
});})(vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula(((function (title,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202576,G__202577,G__202575){
var G__202578 = G__202576;
var G__202579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202577,cljs.core.cst$kw$link], null);
return (G__202575.cljs$core$IFn$_invoke$arity$2 ? G__202575.cljs$core$IFn$_invoke$arity$2(G__202578,G__202579) : G__202575.call(null,G__202578,G__202579));
});})(title,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula(((function (title,link,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202581,G__202582,G__202583,G__202580){
var G__202584 = G__202581;
var G__202585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202582,G__202583], null);
return (G__202580.cljs$core$IFn$_invoke$arity$2 ? G__202580.cljs$core$IFn$_invoke$arity$2(G__202584,G__202585) : G__202580.call(null,G__202584,G__202585));
});})(title,link,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula(((function (title,link,all_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202588,G__202586,G__202587){
var G__202589 = (1);
var G__202590 = ((G__202587.cljs$core$IFn$_invoke$arity$1 ? G__202587.cljs$core$IFn$_invoke$arity$1(G__202588) : G__202587.call(null,G__202588)) + (1));
return (G__202586.cljs$core$IFn$_invoke$arity$2 ? G__202586.cljs$core$IFn$_invoke$arity$2(G__202589,G__202590) : G__202586.call(null,G__202589,G__202590));
});})(title,link,all_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
var G__202591 = general.toc.li_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link,cljs.core.cst$kw$title,title], 0));
var G__202592 = general.toc.ul_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,tailrecursion.hoplon.loop_tpl_STAR_(num_sects,null,((function (G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (item__8273__auto____$1){
var vec__202593 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,item__8273__auto____$1));
var sect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202593,(0),null);
var title__$1 = tailrecursion.javelin.formula(((function (vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202595,G__202596,G__202594){
var G__202597 = G__202595;
var G__202598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202596,cljs.core.cst$kw$title], null);
return (G__202594.cljs$core$IFn$_invoke$arity$2 ? G__202594.cljs$core$IFn$_invoke$arity$2(G__202597,G__202598) : G__202594.call(null,G__202597,G__202598));
});})(vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula(((function (title__$1,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202600,G__202601,G__202599){
var G__202602 = G__202600;
var G__202603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202601,cljs.core.cst$kw$link], null);
return (G__202599.cljs$core$IFn$_invoke$arity$2 ? G__202599.cljs$core$IFn$_invoke$arity$2(G__202602,G__202603) : G__202599.call(null,G__202602,G__202603));
});})(title__$1,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202605,G__202606,G__202607,G__202604){
var G__202608 = G__202605;
var G__202609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202606,G__202607], null);
return (G__202604.cljs$core$IFn$_invoke$arity$2 ? G__202604.cljs$core$IFn$_invoke$arity$2(G__202608,G__202609) : G__202604.call(null,G__202608,G__202609));
});})(title__$1,link__$1,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula(((function (title__$1,link__$1,all_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202610,G__202612,G__202611){
var G__202613 = (1);
var G__202614 = ((G__202611.cljs$core$IFn$_invoke$arity$1 ? G__202611.cljs$core$IFn$_invoke$arity$1(G__202612) : G__202611.call(null,G__202612)) + (1));
return (G__202610.cljs$core$IFn$_invoke$arity$2 ? G__202610.cljs$core$IFn$_invoke$arity$2(G__202613,G__202614) : G__202610.call(null,G__202613,G__202614));
});})(title__$1,link__$1,all_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
var G__202615 = general.toc.li_sect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$1,cljs.core.cst$kw$title,title__$1], 0));
var G__202616 = general.toc.ul_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,tailrecursion.hoplon.loop_tpl_STAR_(num_subs,null,((function (G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (item__8273__auto____$2){
var vec__202617 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,item__8273__auto____$2));
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202617,(0),null);
var title__$2 = tailrecursion.javelin.formula(((function (vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202620,G__202619,G__202618){
var G__202621 = G__202619;
var G__202622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202620,cljs.core.cst$kw$title], null);
return (G__202618.cljs$core$IFn$_invoke$arity$2 ? G__202618.cljs$core$IFn$_invoke$arity$2(G__202621,G__202622) : G__202618.call(null,G__202621,G__202622));
});})(vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula(((function (title__$2,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202625,G__202624,G__202623){
var G__202626 = G__202624;
var G__202627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202625,cljs.core.cst$kw$link], null);
return (G__202623.cljs$core$IFn$_invoke$arity$2 ? G__202623.cljs$core$IFn$_invoke$arity$2(G__202626,G__202627) : G__202623.call(null,G__202626,G__202627));
});})(title__$2,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202630,G__202629,G__202631,G__202628){
var G__202632 = G__202629;
var G__202633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202630,G__202631], null);
return (G__202628.cljs$core$IFn$_invoke$arity$2 ? G__202628.cljs$core$IFn$_invoke$arity$2(G__202632,G__202633) : G__202628.call(null,G__202632,G__202633));
});})(title__$2,link__$2,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula(((function (title__$2,link__$2,all_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202634,G__202636,G__202635){
var G__202637 = (1);
var G__202638 = ((G__202635.cljs$core$IFn$_invoke$arity$1 ? G__202635.cljs$core$IFn$_invoke$arity$1(G__202636) : G__202635.call(null,G__202636)) + (1));
return (G__202634.cljs$core$IFn$_invoke$arity$2 ? G__202634.cljs$core$IFn$_invoke$arity$2(G__202637,G__202638) : G__202634.call(null,G__202637,G__202638));
});})(title__$2,link__$2,all_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
var G__202639 = general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$2,cljs.core.cst$kw$title,title__$2], 0));
var G__202640 = general.toc.ul_ssub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,tailrecursion.hoplon.loop_tpl_STAR_(num_ssub,null,((function (G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (item__8273__auto____$3){
var vec__202641 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.formula(((function (G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,item__8273__auto____$3));
var ssub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202641,(0),null);
var title__$3 = tailrecursion.javelin.formula(((function (vec__202641,ssub,G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202644,G__202643,G__202642){
var G__202645 = G__202643;
var G__202646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202644,cljs.core.cst$kw$title], null);
return (G__202642.cljs$core$IFn$_invoke$arity$2 ? G__202642.cljs$core$IFn$_invoke$arity$2(G__202645,G__202646) : G__202642.call(null,G__202645,G__202646));
});})(vec__202641,ssub,G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula(((function (title__$3,vec__202641,ssub,G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_){
return (function (G__202649,G__202648,G__202647){
var G__202650 = G__202648;
var G__202651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__202649,cljs.core.cst$kw$link], null);
return (G__202647.cljs$core$IFn$_invoke$arity$2 ? G__202647.cljs$core$IFn$_invoke$arity$2(G__202650,G__202651) : G__202647.call(null,G__202650,G__202651));
});})(title__$3,vec__202641,ssub,G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$link,link__$3,cljs.core.cst$kw$title,title__$3], 0));
});})(G__202639,title__$2,link__$2,all_ssub,num_ssub,vec__202617,sub,G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202639,G__202640) : tailrecursion.hoplon.div.call(null,G__202639,G__202640));
});})(G__202615,title__$1,link__$1,all_subs,num_subs,vec__202593,sect,G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202615,G__202616) : tailrecursion.hoplon.div.call(null,G__202615,G__202616));
});})(G__202591,title,link,all_sects,num_sects,vec__202569,ch,all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
)], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202591,G__202592) : tailrecursion.hoplon.div.call(null,G__202591,G__202592));
});})(all_chapters,num_chapters,G__202557,G__202558,G__202559,vec__202556,one,two,three,four,vec__202553,map__202554,map__202554__$1,data,_))
)], 0));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__202557,G__202558,G__202559,G__202560) : tailrecursion.hoplon.div.call(null,G__202557,G__202558,G__202559,G__202560));
})()], 0));
};
var general$toc$toc = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202652__i = 0, G__202652__a = new Array(arguments.length -  0);
while (G__202652__i < G__202652__a.length) {G__202652__a[G__202652__i] = arguments[G__202652__i + 0]; ++G__202652__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202652__a,0);
} 
return general$toc$toc__delegate.call(this,args__8262__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__202653){
var args__8262__auto__ = cljs.core.seq(arglist__202653);
return general$toc$toc__delegate(args__8262__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;
