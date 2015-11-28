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
var vec__84592 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84592,(0),null);
var kids = cljs.core.nth.call(null,vec__84592,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84593__i = 0, G__84593__a = new Array(arguments.length -  0);
while (G__84593__i < G__84593__a.length) {G__84593__a[G__84593__i] = arguments[G__84593__i + 0]; ++G__84593__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84593__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__84594){
var args__6627__auto__ = cljs.core.seq(arglist__84594);
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
var vec__84597 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84597,(0),null);
var vec__84598 = cljs.core.nth.call(null,vec__84597,(1),null);
var url = cljs.core.nth.call(null,vec__84598,(0),null);
var _ = cljs.core.nthnext.call(null,vec__84598,(1));
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),url,url);
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84599__i = 0, G__84599__a = new Array(arguments.length -  0);
while (G__84599__i < G__84599__a.length) {G__84599__a[G__84599__i] = arguments[G__84599__i + 0]; ++G__84599__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84599__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__84600){
var args__6627__auto__ = cljs.core.seq(arglist__84600);
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
var vec__84605 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84606 = cljs.core.nth.call(null,vec__84605,(0),null);
var map__84606__$1 = ((((!((map__84606 == null)))?((((map__84606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84606):map__84606);
var url = cljs.core.get.call(null,map__84606__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__84606__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__84607 = cljs.core.nth.call(null,vec__84605,(1),null);
var alt = cljs.core.nth.call(null,vec__84607,(0),null);
var _ = cljs.core.nthnext.call(null,vec__84607,(1));
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84609__i = 0, G__84609__a = new Array(arguments.length -  0);
while (G__84609__i < G__84609__a.length) {G__84609__a[G__84609__i] = arguments[G__84609__i + 0]; ++G__84609__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84609__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__84610){
var args__6627__auto__ = cljs.core.seq(arglist__84610);
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
var vec__84614 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84615 = cljs.core.nth.call(null,vec__84614,(0),null);
var map__84615__$1 = ((((!((map__84615 == null)))?((((map__84615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84615):map__84615);
var url = cljs.core.get.call(null,map__84615__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__84615__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84614,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a,new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title,kids);
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84617__i = 0, G__84617__a = new Array(arguments.length -  0);
while (G__84617__i < G__84617__a.length) {G__84617__a[G__84617__i] = arguments[G__84617__i + 0]; ++G__84617__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84617__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__84618){
var args__6627__auto__ = cljs.core.seq(arglist__84618);
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
var vec__84622 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84623 = cljs.core.nth.call(null,vec__84622,(0),null);
var map__84623__$1 = ((((!((map__84623 == null)))?((((map__84623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84623):map__84623);
var level = cljs.core.get.call(null,map__84623__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var kids = cljs.core.nth.call(null,vec__84622,(1),null);
return cljs.core.apply.call(null,cljs.core.nth.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.call(null,tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84625__i = 0, G__84625__a = new Array(arguments.length -  0);
while (G__84625__i < G__84625__a.length) {G__84625__a[G__84625__i] = arguments[G__84625__i + 0]; ++G__84625__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84625__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__84626){
var args__6627__auto__ = cljs.core.seq(arglist__84626);
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
var vec__84630 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84631 = cljs.core.nth.call(null,vec__84630,(0),null);
var map__84631__$1 = ((((!((map__84631 == null)))?((((map__84631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84631):map__84631);
var text = cljs.core.get.call(null,map__84631__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var _ = cljs.core.nth.call(null,vec__84630,(1),null);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(text)].join(''),text);
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84633__i = 0, G__84633__a = new Array(arguments.length -  0);
while (G__84633__i < G__84633__a.length) {G__84633__a[G__84633__i] = arguments[G__84633__i + 0]; ++G__84633__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84633__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__84634){
var args__6627__auto__ = cljs.core.seq(arglist__84634);
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
return (function (p__84635,kids){
var map__84636 = p__84635;
var map__84636__$1 = ((((!((map__84636 == null)))?((((map__84636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84636):map__84636);
var type = cljs.core.get.call(null,map__84636__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
var vec__84644 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84645 = cljs.core.nth.call(null,vec__84644,(0),null);
var map__84645__$1 = ((((!((map__84645 == null)))?((((map__84645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84645):map__84645);
var rk = cljs.core.get.call(null,map__84645__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__84645__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var vec__84646 = cljs.core.nth.call(null,vec__84644,(1),null);
var alt = cljs.core.nth.call(null,vec__84646,(0),null);
var _ = cljs.core.nthnext.call(null,vec__84646,(1));
var kids = vec__84646;
var map__84648 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__84648__$1 = ((((!((map__84648 == null)))?((((map__84648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84648):map__84648);
var title = cljs.core.get.call(null,map__84648__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__84648__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84650__i = 0, G__84650__a = new Array(arguments.length -  0);
while (G__84650__i < G__84650__a.length) {G__84650__a[G__84650__i] = arguments[G__84650__i + 0]; ++G__84650__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84650__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__84651){
var args__6627__auto__ = cljs.core.seq(arglist__84651);
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
var vec__84657 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84658 = cljs.core.nth.call(null,vec__84657,(0),null);
var map__84658__$1 = ((((!((map__84658 == null)))?((((map__84658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84658):map__84658);
var rk = cljs.core.get.call(null,map__84658__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__84658__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var kids = cljs.core.nth.call(null,vec__84657,(1),null);
var map__84660 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__84660__$1 = ((((!((map__84660 == null)))?((((map__84660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84660):map__84660);
var title = cljs.core.get.call(null,map__84660__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__84660__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title], null),kids);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84662__i = 0, G__84662__a = new Array(arguments.length -  0);
while (G__84662__i < G__84662__a.length) {G__84662__a[G__84662__i] = arguments[G__84662__i + 0]; ++G__84662__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84662__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__84663){
var args__6627__auto__ = cljs.core.seq(arglist__84663);
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
var vec__84665 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84665,(0),null);
var kids = cljs.core.nth.call(null,vec__84665,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84666__i = 0, G__84666__a = new Array(arguments.length -  0);
while (G__84666__i < G__84666__a.length) {G__84666__a[G__84666__i] = arguments[G__84666__i + 0]; ++G__84666__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84666__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__84667){
var args__6627__auto__ = cljs.core.seq(arglist__84667);
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
return (function (p__84668,_){
var map__84669 = p__84668;
var map__84669__$1 = ((((!((map__84669 == null)))?((((map__84669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84669):map__84669);
var type = cljs.core.get.call(null,map__84669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
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
var vec__84674 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84675 = cljs.core.nth.call(null,vec__84674,(0),null);
var map__84675__$1 = ((((!((map__84675 == null)))?((((map__84675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84675):map__84675);
var chars = cljs.core.get.call(null,map__84675__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var closed_QMARK_ = cljs.core.get.call(null,map__84675__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var strong_QMARK_ = cljs.core.get.call(null,map__84675__$1,new cljs.core.Keyword(null,"strong","strong",269529000));
var kids = cljs.core.nth.call(null,vec__84674,(1),null);
if(cljs.core.not.call(null,closed_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.call(null,((cljs.core.not.call(null,strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84677__i = 0, G__84677__a = new Array(arguments.length -  0);
while (G__84677__i < G__84677__a.length) {G__84677__a[G__84677__i] = arguments[G__84677__i + 0]; ++G__84677__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84677__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__84678){
var args__6627__auto__ = cljs.core.seq(arglist__84678);
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
var vec__84680 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84680,(0),null);
var kids = cljs.core.nth.call(null,vec__84680,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84681__i = 0, G__84681__a = new Array(arguments.length -  0);
while (G__84681__i < G__84681__a.length) {G__84681__a[G__84681__i] = arguments[G__84681__i + 0]; ++G__84681__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84681__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__84682){
var args__6627__auto__ = cljs.core.seq(arglist__84682);
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
var vec__84684 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84684,(0),null);
var kids = cljs.core.nth.call(null,vec__84684,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84685__i = 0, G__84685__a = new Array(arguments.length -  0);
while (G__84685__i < G__84685__a.length) {G__84685__a[G__84685__i] = arguments[G__84685__i + 0]; ++G__84685__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84685__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__84686){
var args__6627__auto__ = cljs.core.seq(arglist__84686);
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
var vec__84688 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84688,(0),null);
var kids = cljs.core.nth.call(null,vec__84688,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84689__i = 0, G__84689__a = new Array(arguments.length -  0);
while (G__84689__i < G__84689__a.length) {G__84689__a[G__84689__i] = arguments[G__84689__i + 0]; ++G__84689__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84689__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__84690){
var args__6627__auto__ = cljs.core.seq(arglist__84690);
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
var vec__84692 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84692,(0),null);
var kids = cljs.core.nth.call(null,vec__84692,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84693__i = 0, G__84693__a = new Array(arguments.length -  0);
while (G__84693__i < G__84693__a.length) {G__84693__a[G__84693__i] = arguments[G__84693__i + 0]; ++G__84693__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84693__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__84694){
var args__6627__auto__ = cljs.core.seq(arglist__84694);
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
var vec__84696 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84696,(0),null);
var kids = cljs.core.nth.call(null,vec__84696,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84697__i = 0, G__84697__a = new Array(arguments.length -  0);
while (G__84697__i < G__84697__a.length) {G__84697__a[G__84697__i] = arguments[G__84697__i + 0]; ++G__84697__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84697__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__84698){
var args__6627__auto__ = cljs.core.seq(arglist__84698);
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
var vec__84700 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84700,(0),null);
var kids = cljs.core.nth.call(null,vec__84700,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84701__i = 0, G__84701__a = new Array(arguments.length -  0);
while (G__84701__i < G__84701__a.length) {G__84701__a[G__84701__i] = arguments[G__84701__i + 0]; ++G__84701__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84701__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__84702){
var args__6627__auto__ = cljs.core.seq(arglist__84702);
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
var vec__84704 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84704,(0),null);
var kids = cljs.core.nth.call(null,vec__84704,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84705__i = 0, G__84705__a = new Array(arguments.length -  0);
while (G__84705__i < G__84705__a.length) {G__84705__a[G__84705__i] = arguments[G__84705__i + 0]; ++G__84705__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84705__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__84706){
var args__6627__auto__ = cljs.core.seq(arglist__84706);
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
var vec__84708 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84708,(0),null);
var kids = cljs.core.nth.call(null,vec__84708,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84709__i = 0, G__84709__a = new Array(arguments.length -  0);
while (G__84709__i < G__84709__a.length) {G__84709__a[G__84709__i] = arguments[G__84709__i + 0]; ++G__84709__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84709__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__6627__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__84710){
var args__6627__auto__ = cljs.core.seq(arglist__84710);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__6627__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;

//# sourceMappingURL=markdown.js.map