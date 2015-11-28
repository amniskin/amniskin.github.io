// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon.markdown');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
tailrecursion.hoplon.markdown._STAR_current_table_STAR_ = null;
tailrecursion.hoplon.markdown._STAR_current_table_header_STAR_ = null;
tailrecursion.hoplon.markdown._STAR_current_table_column_STAR_ = null;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.abbreviation_node = (function() { 
var tailrecursion$hoplon$markdown$abbreviation_node__delegate = function (args__6627__auto__){
var vec__14671 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14671,(0),null);
var kids = cljs.core.nth.call(null,vec__14671,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14672__i = 0, G__14672__a = new Array(arguments.length -  0);
while (G__14672__i < G__14672__a.length) {G__14672__a[G__14672__i] = arguments[G__14672__i + 0]; ++G__14672__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14672__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__14673){
var args__6627__auto__ = cljs.core.seq(arglist__14673);
return tailrecursion$hoplon$markdown$abbreviation_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$abbreviation_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$abbreviation_node__delegate;
return tailrecursion$hoplon$markdown$abbreviation_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.auto_link_node = (function() { 
var tailrecursion$hoplon$markdown$auto_link_node__delegate = function (args__6627__auto__){
var vec__14676 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14676,(0),null);
var vec__14677 = cljs.core.nth.call(null,vec__14676,(1),null);
var url = cljs.core.nth.call(null,vec__14677,(0),null);
var _ = cljs.core.nthnext.call(null,vec__14677,(1));
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),url,url);
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14678__i = 0, G__14678__a = new Array(arguments.length -  0);
while (G__14678__i < G__14678__a.length) {G__14678__a[G__14678__i] = arguments[G__14678__i + 0]; ++G__14678__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14678__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__14679){
var args__6627__auto__ = cljs.core.seq(arglist__14679);
return tailrecursion$hoplon$markdown$auto_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$auto_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$auto_link_node__delegate;
return tailrecursion$hoplon$markdown$auto_link_node;
})()
;
tailrecursion.hoplon.markdown.block_quote_node = tailrecursion.hoplon.blockquote;
tailrecursion.hoplon.markdown.bullet_list_node = tailrecursion.hoplon.ul;
tailrecursion.hoplon.markdown.code_node = tailrecursion.hoplon.code;
tailrecursion.hoplon.markdown.definition_list_node = tailrecursion.hoplon.dl;
tailrecursion.hoplon.markdown.definition_node = tailrecursion.hoplon.dd;
tailrecursion.hoplon.markdown.definition_term_node = tailrecursion.hoplon.dt;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_image_node = (function() { 
var tailrecursion$hoplon$markdown$exp_image_node__delegate = function (args__6627__auto__){
var vec__14684 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14685 = cljs.core.nth.call(null,vec__14684,(0),null);
var map__14685__$1 = ((((!((map__14685 == null)))?((((map__14685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14685):map__14685);
var url = cljs.core.get.call(null,map__14685__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__14685__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__14686 = cljs.core.nth.call(null,vec__14684,(1),null);
var alt = cljs.core.nth.call(null,vec__14686,(0),null);
var _ = cljs.core.nthnext.call(null,vec__14686,(1));
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14688__i = 0, G__14688__a = new Array(arguments.length -  0);
while (G__14688__i < G__14688__a.length) {G__14688__a[G__14688__i] = arguments[G__14688__i + 0]; ++G__14688__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14688__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__14689){
var args__6627__auto__ = cljs.core.seq(arglist__14689);
return tailrecursion$hoplon$markdown$exp_image_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$exp_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_image_node__delegate;
return tailrecursion$hoplon$markdown$exp_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_link_node = (function() { 
var tailrecursion$hoplon$markdown$exp_link_node__delegate = function (args__6627__auto__){
var vec__14693 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14694 = cljs.core.nth.call(null,vec__14693,(0),null);
var map__14694__$1 = ((((!((map__14694 == null)))?((((map__14694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14694):map__14694);
var url = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__14693,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a,new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title,kids);
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14696__i = 0, G__14696__a = new Array(arguments.length -  0);
while (G__14696__i < G__14696__a.length) {G__14696__a[G__14696__i] = arguments[G__14696__i + 0]; ++G__14696__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14696__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__14697){
var args__6627__auto__ = cljs.core.seq(arglist__14697);
return tailrecursion$hoplon$markdown$exp_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$exp_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_link_node__delegate;
return tailrecursion$hoplon$markdown$exp_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.header_node = (function() { 
var tailrecursion$hoplon$markdown$header_node__delegate = function (args__6627__auto__){
var vec__14701 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14702 = cljs.core.nth.call(null,vec__14701,(0),null);
var map__14702__$1 = ((((!((map__14702 == null)))?((((map__14702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14702):map__14702);
var level = cljs.core.get.call(null,map__14702__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var kids = cljs.core.nth.call(null,vec__14701,(1),null);
return cljs.core.apply.call(null,cljs.core.nth.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.call(null,tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14704__i = 0, G__14704__a = new Array(arguments.length -  0);
while (G__14704__i < G__14704__a.length) {G__14704__a[G__14704__i] = arguments[G__14704__i + 0]; ++G__14704__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14704__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__14705){
var args__6627__auto__ = cljs.core.seq(arglist__14705);
return tailrecursion$hoplon$markdown$header_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$header_node__delegate;
return tailrecursion$hoplon$markdown$header_node;
})()
;
tailrecursion.hoplon.markdown.list_item_node = tailrecursion.hoplon.li;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.mail_link_node = (function() { 
var tailrecursion$hoplon$markdown$mail_link_node__delegate = function (args__6627__auto__){
var vec__14709 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14710 = cljs.core.nth.call(null,vec__14709,(0),null);
var map__14710__$1 = ((((!((map__14710 == null)))?((((map__14710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14710):map__14710);
var text = cljs.core.get.call(null,map__14710__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var _ = cljs.core.nth.call(null,vec__14709,(1),null);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(text)].join(''),text);
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14712__i = 0, G__14712__a = new Array(arguments.length -  0);
while (G__14712__i < G__14712__a.length) {G__14712__a[G__14712__i] = arguments[G__14712__i + 0]; ++G__14712__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14712__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__14713){
var args__6627__auto__ = cljs.core.seq(arglist__14713);
return tailrecursion$hoplon$markdown$mail_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$mail_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$mail_link_node__delegate;
return tailrecursion$hoplon$markdown$mail_link_node;
})()
;
tailrecursion.hoplon.markdown.ordered_list_node = tailrecursion.hoplon.ol;
tailrecursion.hoplon.markdown.para_node = tailrecursion.hoplon.p;
if(typeof tailrecursion.hoplon.markdown.quoted_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__14714,kids){
var map__14715 = p__14714;
var map__14715__$1 = ((((!((map__14715 == null)))?((((map__14715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14715):map__14715);
var type = cljs.core.get.call(null,map__14715__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.quoted_node,new cljs.core.Keyword(null,"double-angle","double-angle",-1539114060),(function (_,kids){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00AB"], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00BB"], null));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.quoted_node,new cljs.core.Keyword(null,"double","double",884886883),(function (_,kids){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201C"], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201D"], null));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.quoted_node,new cljs.core.Keyword(null,"single","single",1551466437),(function (_,kids){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2018"], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2019"], null));
}));
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_image_node = (function() { 
var tailrecursion$hoplon$markdown$ref_image_node__delegate = function (args__6627__auto__){
var vec__14723 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14724 = cljs.core.nth.call(null,vec__14723,(0),null);
var map__14724__$1 = ((((!((map__14724 == null)))?((((map__14724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14724):map__14724);
var rk = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__14724__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var vec__14725 = cljs.core.nth.call(null,vec__14723,(1),null);
var alt = cljs.core.nth.call(null,vec__14725,(0),null);
var _ = cljs.core.nthnext.call(null,vec__14725,(1));
var kids = vec__14725;
var map__14727 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__14727__$1 = ((((!((map__14727 == null)))?((((map__14727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14727):map__14727);
var title = cljs.core.get.call(null,map__14727__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__14727__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14729__i = 0, G__14729__a = new Array(arguments.length -  0);
while (G__14729__i < G__14729__a.length) {G__14729__a[G__14729__i] = arguments[G__14729__i + 0]; ++G__14729__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14729__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__14730){
var args__6627__auto__ = cljs.core.seq(arglist__14730);
return tailrecursion$hoplon$markdown$ref_image_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$ref_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_image_node__delegate;
return tailrecursion$hoplon$markdown$ref_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_link_node = (function() { 
var tailrecursion$hoplon$markdown$ref_link_node__delegate = function (args__6627__auto__){
var vec__14736 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14737 = cljs.core.nth.call(null,vec__14736,(0),null);
var map__14737__$1 = ((((!((map__14737 == null)))?((((map__14737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14737):map__14737);
var rk = cljs.core.get.call(null,map__14737__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__14737__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var kids = cljs.core.nth.call(null,vec__14736,(1),null);
var map__14739 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__14739__$1 = ((((!((map__14739 == null)))?((((map__14739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14739):map__14739);
var title = cljs.core.get.call(null,map__14739__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__14739__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title], null),kids);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14741__i = 0, G__14741__a = new Array(arguments.length -  0);
while (G__14741__i < G__14741__a.length) {G__14741__a[G__14741__i] = arguments[G__14741__i + 0]; ++G__14741__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14741__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__14742){
var args__6627__auto__ = cljs.core.seq(arglist__14742);
return tailrecursion$hoplon$markdown$ref_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$ref_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_link_node__delegate;
return tailrecursion$hoplon$markdown$ref_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.reference_node = (function() { 
var tailrecursion$hoplon$markdown$reference_node__delegate = function (args__6627__auto__){
var vec__14744 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14744,(0),null);
var kids = cljs.core.nth.call(null,vec__14744,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14745__i = 0, G__14745__a = new Array(arguments.length -  0);
while (G__14745__i < G__14745__a.length) {G__14745__a[G__14745__i] = arguments[G__14745__i + 0]; ++G__14745__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14745__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__14746){
var args__6627__auto__ = cljs.core.seq(arglist__14746);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__14747,_){
var map__14748 = p__14747;
var map__14748__$1 = ((((!((map__14748 == null)))?((((map__14748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14748):map__14748);
var type = cljs.core.get.call(null,map__14748__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"apostrophe","apostrophe",-1476834636),(function (_,___$1){
return "'";
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),(function (_,___$1){
return "\u2026";
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"emdash","emdash",-1917302467),(function (_,___$1){
return "\u2014";
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"endash","endash",-1084701295),(function (_,___$1){
return "\u2013";
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"h-rule","h-rule",1902373554),(function (_,___$1){
return tailrecursion.hoplon.hr.call(null);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"linebreak","linebreak",-1133865138),(function (_,___$1){
return tailrecursion.hoplon.br.call(null);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.simple_node,new cljs.core.Keyword(null,"nbsp","nbsp",588425146),(function (_,___$1){
return "\u00A0";
}));
tailrecursion.hoplon.markdown.strike_node = tailrecursion.hoplon.del;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.strong_emph_super_node = (function() { 
var tailrecursion$hoplon$markdown$strong_emph_super_node__delegate = function (args__6627__auto__){
var vec__14753 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14754 = cljs.core.nth.call(null,vec__14753,(0),null);
var map__14754__$1 = ((((!((map__14754 == null)))?((((map__14754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14754):map__14754);
var chars = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var closed_QMARK_ = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var strong_QMARK_ = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"strong","strong",269529000));
var kids = cljs.core.nth.call(null,vec__14753,(1),null);
if(cljs.core.not.call(null,closed_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.call(null,((cljs.core.not.call(null,strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14756__i = 0, G__14756__a = new Array(arguments.length -  0);
while (G__14756__i < G__14756__a.length) {G__14756__a[G__14756__i] = arguments[G__14756__i + 0]; ++G__14756__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14756__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__14757){
var args__6627__auto__ = cljs.core.seq(arglist__14757);
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$strong_emph_super_node__delegate;
return tailrecursion$hoplon$markdown$strong_emph_super_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_body_node = (function() { 
var tailrecursion$hoplon$markdown$table_body_node__delegate = function (args__6627__auto__){
var vec__14759 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14759,(0),null);
var kids = cljs.core.nth.call(null,vec__14759,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14760__i = 0, G__14760__a = new Array(arguments.length -  0);
while (G__14760__i < G__14760__a.length) {G__14760__a[G__14760__i] = arguments[G__14760__i + 0]; ++G__14760__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14760__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__14761){
var args__6627__auto__ = cljs.core.seq(arglist__14761);
return tailrecursion$hoplon$markdown$table_body_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_body_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_body_node__delegate;
return tailrecursion$hoplon$markdown$table_body_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_caption_node = (function() { 
var tailrecursion$hoplon$markdown$table_caption_node__delegate = function (args__6627__auto__){
var vec__14763 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14763,(0),null);
var kids = cljs.core.nth.call(null,vec__14763,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14764__i = 0, G__14764__a = new Array(arguments.length -  0);
while (G__14764__i < G__14764__a.length) {G__14764__a[G__14764__i] = arguments[G__14764__i + 0]; ++G__14764__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14764__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__14765){
var args__6627__auto__ = cljs.core.seq(arglist__14765);
return tailrecursion$hoplon$markdown$table_caption_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_caption_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_caption_node__delegate;
return tailrecursion$hoplon$markdown$table_caption_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_cell_node = (function() { 
var tailrecursion$hoplon$markdown$table_cell_node__delegate = function (args__6627__auto__){
var vec__14767 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14767,(0),null);
var kids = cljs.core.nth.call(null,vec__14767,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14768__i = 0, G__14768__a = new Array(arguments.length -  0);
while (G__14768__i < G__14768__a.length) {G__14768__a[G__14768__i] = arguments[G__14768__i + 0]; ++G__14768__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14768__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__14769){
var args__6627__auto__ = cljs.core.seq(arglist__14769);
return tailrecursion$hoplon$markdown$table_cell_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_cell_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_cell_node__delegate;
return tailrecursion$hoplon$markdown$table_cell_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_column_node = (function() { 
var tailrecursion$hoplon$markdown$table_column_node__delegate = function (args__6627__auto__){
var vec__14771 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14771,(0),null);
var kids = cljs.core.nth.call(null,vec__14771,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14772__i = 0, G__14772__a = new Array(arguments.length -  0);
while (G__14772__i < G__14772__a.length) {G__14772__a[G__14772__i] = arguments[G__14772__i + 0]; ++G__14772__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14772__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__14773){
var args__6627__auto__ = cljs.core.seq(arglist__14773);
return tailrecursion$hoplon$markdown$table_column_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_column_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_column_node__delegate;
return tailrecursion$hoplon$markdown$table_column_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_header_node = (function() { 
var tailrecursion$hoplon$markdown$table_header_node__delegate = function (args__6627__auto__){
var vec__14775 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14775,(0),null);
var kids = cljs.core.nth.call(null,vec__14775,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14776__i = 0, G__14776__a = new Array(arguments.length -  0);
while (G__14776__i < G__14776__a.length) {G__14776__a[G__14776__i] = arguments[G__14776__i + 0]; ++G__14776__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14776__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__14777){
var args__6627__auto__ = cljs.core.seq(arglist__14777);
return tailrecursion$hoplon$markdown$table_header_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_header_node__delegate;
return tailrecursion$hoplon$markdown$table_header_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_node = (function() { 
var tailrecursion$hoplon$markdown$table_node__delegate = function (args__6627__auto__){
var vec__14779 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14779,(0),null);
var kids = cljs.core.nth.call(null,vec__14779,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14780__i = 0, G__14780__a = new Array(arguments.length -  0);
while (G__14780__i < G__14780__a.length) {G__14780__a[G__14780__i] = arguments[G__14780__i + 0]; ++G__14780__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14780__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__14781){
var args__6627__auto__ = cljs.core.seq(arglist__14781);
return tailrecursion$hoplon$markdown$table_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_node__delegate;
return tailrecursion$hoplon$markdown$table_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_row_node = (function() { 
var tailrecursion$hoplon$markdown$table_row_node__delegate = function (args__6627__auto__){
var vec__14783 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14783,(0),null);
var kids = cljs.core.nth.call(null,vec__14783,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14784__i = 0, G__14784__a = new Array(arguments.length -  0);
while (G__14784__i < G__14784__a.length) {G__14784__a[G__14784__i] = arguments[G__14784__i + 0]; ++G__14784__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14784__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__14785){
var args__6627__auto__ = cljs.core.seq(arglist__14785);
return tailrecursion$hoplon$markdown$table_row_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$table_row_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_row_node__delegate;
return tailrecursion$hoplon$markdown$table_row_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.wiki_link_node = (function() { 
var tailrecursion$hoplon$markdown$wiki_link_node__delegate = function (args__6627__auto__){
var vec__14787 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14787,(0),null);
var kids = cljs.core.nth.call(null,vec__14787,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14788__i = 0, G__14788__a = new Array(arguments.length -  0);
while (G__14788__i < G__14788__a.length) {G__14788__a[G__14788__i] = arguments[G__14788__i + 0]; ++G__14788__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14788__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__14789){
var args__6627__auto__ = cljs.core.seq(arglist__14789);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;

//# sourceMappingURL=markdown.js.map