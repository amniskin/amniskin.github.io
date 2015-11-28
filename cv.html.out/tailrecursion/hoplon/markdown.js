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
var vec__12861 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12861,(0),null);
var kids = cljs.core.nth.call(null,vec__12861,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12862__i = 0, G__12862__a = new Array(arguments.length -  0);
while (G__12862__i < G__12862__a.length) {G__12862__a[G__12862__i] = arguments[G__12862__i + 0]; ++G__12862__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12862__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__12863){
var args__6627__auto__ = cljs.core.seq(arglist__12863);
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
var vec__12866 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12866,(0),null);
var vec__12867 = cljs.core.nth.call(null,vec__12866,(1),null);
var url = cljs.core.nth.call(null,vec__12867,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12867,(1));
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),url,url);
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12868__i = 0, G__12868__a = new Array(arguments.length -  0);
while (G__12868__i < G__12868__a.length) {G__12868__a[G__12868__i] = arguments[G__12868__i + 0]; ++G__12868__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12868__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__12869){
var args__6627__auto__ = cljs.core.seq(arglist__12869);
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
var vec__12874 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12875 = cljs.core.nth.call(null,vec__12874,(0),null);
var map__12875__$1 = ((((!((map__12875 == null)))?((((map__12875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12875):map__12875);
var url = cljs.core.get.call(null,map__12875__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__12875__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__12876 = cljs.core.nth.call(null,vec__12874,(1),null);
var alt = cljs.core.nth.call(null,vec__12876,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12876,(1));
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12878__i = 0, G__12878__a = new Array(arguments.length -  0);
while (G__12878__i < G__12878__a.length) {G__12878__a[G__12878__i] = arguments[G__12878__i + 0]; ++G__12878__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12878__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__12879){
var args__6627__auto__ = cljs.core.seq(arglist__12879);
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
var vec__12883 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12884 = cljs.core.nth.call(null,vec__12883,(0),null);
var map__12884__$1 = ((((!((map__12884 == null)))?((((map__12884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12884):map__12884);
var url = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__12884__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__12883,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a,new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title,kids);
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12886__i = 0, G__12886__a = new Array(arguments.length -  0);
while (G__12886__i < G__12886__a.length) {G__12886__a[G__12886__i] = arguments[G__12886__i + 0]; ++G__12886__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12886__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__12887){
var args__6627__auto__ = cljs.core.seq(arglist__12887);
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
var vec__12891 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12892 = cljs.core.nth.call(null,vec__12891,(0),null);
var map__12892__$1 = ((((!((map__12892 == null)))?((((map__12892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12892):map__12892);
var level = cljs.core.get.call(null,map__12892__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var kids = cljs.core.nth.call(null,vec__12891,(1),null);
return cljs.core.apply.call(null,cljs.core.nth.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.call(null,tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12894__i = 0, G__12894__a = new Array(arguments.length -  0);
while (G__12894__i < G__12894__a.length) {G__12894__a[G__12894__i] = arguments[G__12894__i + 0]; ++G__12894__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12894__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__12895){
var args__6627__auto__ = cljs.core.seq(arglist__12895);
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
var vec__12899 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12900 = cljs.core.nth.call(null,vec__12899,(0),null);
var map__12900__$1 = ((((!((map__12900 == null)))?((((map__12900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12900):map__12900);
var text = cljs.core.get.call(null,map__12900__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var _ = cljs.core.nth.call(null,vec__12899,(1),null);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(text)].join(''),text);
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12902__i = 0, G__12902__a = new Array(arguments.length -  0);
while (G__12902__i < G__12902__a.length) {G__12902__a[G__12902__i] = arguments[G__12902__i + 0]; ++G__12902__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12902__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__12903){
var args__6627__auto__ = cljs.core.seq(arglist__12903);
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
return (function (p__12904,kids){
var map__12905 = p__12904;
var map__12905__$1 = ((((!((map__12905 == null)))?((((map__12905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12905):map__12905);
var type = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
var vec__12913 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12914 = cljs.core.nth.call(null,vec__12913,(0),null);
var map__12914__$1 = ((((!((map__12914 == null)))?((((map__12914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12914):map__12914);
var rk = cljs.core.get.call(null,map__12914__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__12914__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var vec__12915 = cljs.core.nth.call(null,vec__12913,(1),null);
var alt = cljs.core.nth.call(null,vec__12915,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12915,(1));
var kids = vec__12915;
var map__12917 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__12917__$1 = ((((!((map__12917 == null)))?((((map__12917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12917):map__12917);
var title = cljs.core.get.call(null,map__12917__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__12917__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12919__i = 0, G__12919__a = new Array(arguments.length -  0);
while (G__12919__i < G__12919__a.length) {G__12919__a[G__12919__i] = arguments[G__12919__i + 0]; ++G__12919__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12919__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__12920){
var args__6627__auto__ = cljs.core.seq(arglist__12920);
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
var vec__12926 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12927 = cljs.core.nth.call(null,vec__12926,(0),null);
var map__12927__$1 = ((((!((map__12927 == null)))?((((map__12927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12927):map__12927);
var rk = cljs.core.get.call(null,map__12927__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__12927__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var kids = cljs.core.nth.call(null,vec__12926,(1),null);
var map__12929 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__12929__$1 = ((((!((map__12929 == null)))?((((map__12929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12929):map__12929);
var title = cljs.core.get.call(null,map__12929__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__12929__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title], null),kids);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12931__i = 0, G__12931__a = new Array(arguments.length -  0);
while (G__12931__i < G__12931__a.length) {G__12931__a[G__12931__i] = arguments[G__12931__i + 0]; ++G__12931__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12931__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__12932){
var args__6627__auto__ = cljs.core.seq(arglist__12932);
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
var vec__12934 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12934,(0),null);
var kids = cljs.core.nth.call(null,vec__12934,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12935__i = 0, G__12935__a = new Array(arguments.length -  0);
while (G__12935__i < G__12935__a.length) {G__12935__a[G__12935__i] = arguments[G__12935__i + 0]; ++G__12935__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12935__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__12936){
var args__6627__auto__ = cljs.core.seq(arglist__12936);
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
return (function (p__12937,_){
var map__12938 = p__12937;
var map__12938__$1 = ((((!((map__12938 == null)))?((((map__12938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12938):map__12938);
var type = cljs.core.get.call(null,map__12938__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
var vec__12943 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12944 = cljs.core.nth.call(null,vec__12943,(0),null);
var map__12944__$1 = ((((!((map__12944 == null)))?((((map__12944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12944):map__12944);
var chars = cljs.core.get.call(null,map__12944__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var closed_QMARK_ = cljs.core.get.call(null,map__12944__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var strong_QMARK_ = cljs.core.get.call(null,map__12944__$1,new cljs.core.Keyword(null,"strong","strong",269529000));
var kids = cljs.core.nth.call(null,vec__12943,(1),null);
if(cljs.core.not.call(null,closed_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.call(null,((cljs.core.not.call(null,strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12946__i = 0, G__12946__a = new Array(arguments.length -  0);
while (G__12946__i < G__12946__a.length) {G__12946__a[G__12946__i] = arguments[G__12946__i + 0]; ++G__12946__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12946__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__12947){
var args__6627__auto__ = cljs.core.seq(arglist__12947);
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
var vec__12949 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12949,(0),null);
var kids = cljs.core.nth.call(null,vec__12949,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12950__i = 0, G__12950__a = new Array(arguments.length -  0);
while (G__12950__i < G__12950__a.length) {G__12950__a[G__12950__i] = arguments[G__12950__i + 0]; ++G__12950__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12950__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__12951){
var args__6627__auto__ = cljs.core.seq(arglist__12951);
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
var vec__12953 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12953,(0),null);
var kids = cljs.core.nth.call(null,vec__12953,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12954__i = 0, G__12954__a = new Array(arguments.length -  0);
while (G__12954__i < G__12954__a.length) {G__12954__a[G__12954__i] = arguments[G__12954__i + 0]; ++G__12954__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12954__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__12955){
var args__6627__auto__ = cljs.core.seq(arglist__12955);
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
var vec__12957 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12957,(0),null);
var kids = cljs.core.nth.call(null,vec__12957,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12958__i = 0, G__12958__a = new Array(arguments.length -  0);
while (G__12958__i < G__12958__a.length) {G__12958__a[G__12958__i] = arguments[G__12958__i + 0]; ++G__12958__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12958__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__12959){
var args__6627__auto__ = cljs.core.seq(arglist__12959);
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
var vec__12961 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12961,(0),null);
var kids = cljs.core.nth.call(null,vec__12961,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12962__i = 0, G__12962__a = new Array(arguments.length -  0);
while (G__12962__i < G__12962__a.length) {G__12962__a[G__12962__i] = arguments[G__12962__i + 0]; ++G__12962__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12962__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__12963){
var args__6627__auto__ = cljs.core.seq(arglist__12963);
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
var vec__12965 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12965,(0),null);
var kids = cljs.core.nth.call(null,vec__12965,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12966__i = 0, G__12966__a = new Array(arguments.length -  0);
while (G__12966__i < G__12966__a.length) {G__12966__a[G__12966__i] = arguments[G__12966__i + 0]; ++G__12966__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12966__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__12967){
var args__6627__auto__ = cljs.core.seq(arglist__12967);
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
var vec__12969 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12969,(0),null);
var kids = cljs.core.nth.call(null,vec__12969,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12970__i = 0, G__12970__a = new Array(arguments.length -  0);
while (G__12970__i < G__12970__a.length) {G__12970__a[G__12970__i] = arguments[G__12970__i + 0]; ++G__12970__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12970__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__12971){
var args__6627__auto__ = cljs.core.seq(arglist__12971);
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
var vec__12973 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12973,(0),null);
var kids = cljs.core.nth.call(null,vec__12973,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12974__i = 0, G__12974__a = new Array(arguments.length -  0);
while (G__12974__i < G__12974__a.length) {G__12974__a[G__12974__i] = arguments[G__12974__i + 0]; ++G__12974__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12974__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__12975){
var args__6627__auto__ = cljs.core.seq(arglist__12975);
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
var vec__12977 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12977,(0),null);
var kids = cljs.core.nth.call(null,vec__12977,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12978__i = 0, G__12978__a = new Array(arguments.length -  0);
while (G__12978__i < G__12978__a.length) {G__12978__a[G__12978__i] = arguments[G__12978__i + 0]; ++G__12978__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12978__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__12979){
var args__6627__auto__ = cljs.core.seq(arglist__12979);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;

//# sourceMappingURL=markdown.js.map