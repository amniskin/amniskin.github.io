// Compiled by ClojureScript 0.0-3308 {}
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
var tailrecursion$hoplon$markdown$abbreviation_node__delegate = function (args__5784__auto__){
var vec__13940 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__13940,(0),null);
var kids = cljs.core.nth.call(null,vec__13940,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13941__i = 0, G__13941__a = new Array(arguments.length -  0);
while (G__13941__i < G__13941__a.length) {G__13941__a[G__13941__i] = arguments[G__13941__i + 0]; ++G__13941__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13941__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__13942){
var args__5784__auto__ = cljs.core.seq(arglist__13942);
return tailrecursion$hoplon$markdown$abbreviation_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$abbreviation_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$abbreviation_node__delegate;
return tailrecursion$hoplon$markdown$abbreviation_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.auto_link_node = (function() { 
var tailrecursion$hoplon$markdown$auto_link_node__delegate = function (args__5784__auto__){
var vec__13945 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__13945,(0),null);
var vec__13946 = cljs.core.nth.call(null,vec__13945,(1),null);
var url = cljs.core.nth.call(null,vec__13946,(0),null);
var _ = cljs.core.nthnext.call(null,vec__13946,(1));
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),url,url);
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13947__i = 0, G__13947__a = new Array(arguments.length -  0);
while (G__13947__i < G__13947__a.length) {G__13947__a[G__13947__i] = arguments[G__13947__i + 0]; ++G__13947__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13947__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__13948){
var args__5784__auto__ = cljs.core.seq(arglist__13948);
return tailrecursion$hoplon$markdown$auto_link_node__delegate(args__5784__auto__);
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
var tailrecursion$hoplon$markdown$exp_image_node__delegate = function (args__5784__auto__){
var vec__13952 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13953 = cljs.core.nth.call(null,vec__13952,(0),null);
var map__13953__$1 = ((cljs.core.seq_QMARK_.call(null,map__13953))?cljs.core.apply.call(null,cljs.core.hash_map,map__13953):map__13953);
var url = cljs.core.get.call(null,map__13953__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__13953__$1,new cljs.core.Keyword(null,"title","title",636505583));
var vec__13954 = cljs.core.nth.call(null,vec__13952,(1),null);
var alt = cljs.core.nth.call(null,vec__13954,(0),null);
var _ = cljs.core.nthnext.call(null,vec__13954,(1));
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13955__i = 0, G__13955__a = new Array(arguments.length -  0);
while (G__13955__i < G__13955__a.length) {G__13955__a[G__13955__i] = arguments[G__13955__i + 0]; ++G__13955__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13955__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__13956){
var args__5784__auto__ = cljs.core.seq(arglist__13956);
return tailrecursion$hoplon$markdown$exp_image_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$exp_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_image_node__delegate;
return tailrecursion$hoplon$markdown$exp_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_link_node = (function() { 
var tailrecursion$hoplon$markdown$exp_link_node__delegate = function (args__5784__auto__){
var vec__13959 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13960 = cljs.core.nth.call(null,vec__13959,(0),null);
var map__13960__$1 = ((cljs.core.seq_QMARK_.call(null,map__13960))?cljs.core.apply.call(null,cljs.core.hash_map,map__13960):map__13960);
var url = cljs.core.get.call(null,map__13960__$1,new cljs.core.Keyword(null,"url","url",276297046));
var title = cljs.core.get.call(null,map__13960__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__13959,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a,new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title,kids);
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13961__i = 0, G__13961__a = new Array(arguments.length -  0);
while (G__13961__i < G__13961__a.length) {G__13961__a[G__13961__i] = arguments[G__13961__i + 0]; ++G__13961__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13961__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__13962){
var args__5784__auto__ = cljs.core.seq(arglist__13962);
return tailrecursion$hoplon$markdown$exp_link_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$exp_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_link_node__delegate;
return tailrecursion$hoplon$markdown$exp_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.header_node = (function() { 
var tailrecursion$hoplon$markdown$header_node__delegate = function (args__5784__auto__){
var vec__13965 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13966 = cljs.core.nth.call(null,vec__13965,(0),null);
var map__13966__$1 = ((cljs.core.seq_QMARK_.call(null,map__13966))?cljs.core.apply.call(null,cljs.core.hash_map,map__13966):map__13966);
var level = cljs.core.get.call(null,map__13966__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var kids = cljs.core.nth.call(null,vec__13965,(1),null);
return cljs.core.apply.call(null,cljs.core.nth.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.call(null,tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13967__i = 0, G__13967__a = new Array(arguments.length -  0);
while (G__13967__i < G__13967__a.length) {G__13967__a[G__13967__i] = arguments[G__13967__i + 0]; ++G__13967__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13967__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__13968){
var args__5784__auto__ = cljs.core.seq(arglist__13968);
return tailrecursion$hoplon$markdown$header_node__delegate(args__5784__auto__);
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
var tailrecursion$hoplon$markdown$mail_link_node__delegate = function (args__5784__auto__){
var vec__13971 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13972 = cljs.core.nth.call(null,vec__13971,(0),null);
var map__13972__$1 = ((cljs.core.seq_QMARK_.call(null,map__13972))?cljs.core.apply.call(null,cljs.core.hash_map,map__13972):map__13972);
var text = cljs.core.get.call(null,map__13972__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var _ = cljs.core.nth.call(null,vec__13971,(1),null);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(text)].join(''),text);
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13973__i = 0, G__13973__a = new Array(arguments.length -  0);
while (G__13973__i < G__13973__a.length) {G__13973__a[G__13973__i] = arguments[G__13973__i + 0]; ++G__13973__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13973__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__13974){
var args__5784__auto__ = cljs.core.seq(arglist__13974);
return tailrecursion$hoplon$markdown$mail_link_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$mail_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$mail_link_node__delegate;
return tailrecursion$hoplon$markdown$mail_link_node;
})()
;
tailrecursion.hoplon.markdown.ordered_list_node = tailrecursion.hoplon.ol;
tailrecursion.hoplon.markdown.para_node = tailrecursion.hoplon.p;
if(typeof tailrecursion.hoplon.markdown.quoted_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5109__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__13975,kids){
var map__13976 = p__13975;
var map__13976__$1 = ((cljs.core.seq_QMARK_.call(null,map__13976))?cljs.core.apply.call(null,cljs.core.hash_map,map__13976):map__13976);
var type = cljs.core.get.call(null,map__13976__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
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
var tailrecursion$hoplon$markdown$ref_image_node__delegate = function (args__5784__auto__){
var vec__13981 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13982 = cljs.core.nth.call(null,vec__13981,(0),null);
var map__13982__$1 = ((cljs.core.seq_QMARK_.call(null,map__13982))?cljs.core.apply.call(null,cljs.core.hash_map,map__13982):map__13982);
var rk = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__13982__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var vec__13983 = cljs.core.nth.call(null,vec__13981,(1),null);
var alt = cljs.core.nth.call(null,vec__13983,(0),null);
var _ = cljs.core.nthnext.call(null,vec__13983,(1));
var kids = vec__13983;
var map__13984 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__13984__$1 = ((cljs.core.seq_QMARK_.call(null,map__13984))?cljs.core.apply.call(null,cljs.core.hash_map,map__13984):map__13984);
var title = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"alt","alt",-3214426),alt);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13985__i = 0, G__13985__a = new Array(arguments.length -  0);
while (G__13985__i < G__13985__a.length) {G__13985__a[G__13985__i] = arguments[G__13985__i + 0]; ++G__13985__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13985__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__13986){
var args__5784__auto__ = cljs.core.seq(arglist__13986);
return tailrecursion$hoplon$markdown$ref_image_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$ref_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_image_node__delegate;
return tailrecursion$hoplon$markdown$ref_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_link_node = (function() { 
var tailrecursion$hoplon$markdown$ref_link_node__delegate = function (args__5784__auto__){
var vec__13990 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13991 = cljs.core.nth.call(null,vec__13990,(0),null);
var map__13991__$1 = ((cljs.core.seq_QMARK_.call(null,map__13991))?cljs.core.apply.call(null,cljs.core.hash_map,map__13991):map__13991);
var rk = cljs.core.get.call(null,map__13991__$1,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677));
var ss = cljs.core.get.call(null,map__13991__$1,new cljs.core.Keyword(null,"separator-space","separator-space",1127241784));
var kids = cljs.core.nth.call(null,vec__13990,(1),null);
var map__13992 = tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk);
var map__13992__$1 = ((cljs.core.seq_QMARK_.call(null,map__13992))?cljs.core.apply.call(null,cljs.core.hash_map,map__13992):map__13992);
var title = cljs.core.get.call(null,map__13992__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__13992__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"title","title",636505583),title], null),kids);
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13993__i = 0, G__13993__a = new Array(arguments.length -  0);
while (G__13993__i < G__13993__a.length) {G__13993__a[G__13993__i] = arguments[G__13993__i + 0]; ++G__13993__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13993__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__13994){
var args__5784__auto__ = cljs.core.seq(arglist__13994);
return tailrecursion$hoplon$markdown$ref_link_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$ref_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_link_node__delegate;
return tailrecursion$hoplon$markdown$ref_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.reference_node = (function() { 
var tailrecursion$hoplon$markdown$reference_node__delegate = function (args__5784__auto__){
var vec__13996 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__13996,(0),null);
var kids = cljs.core.nth.call(null,vec__13996,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13997__i = 0, G__13997__a = new Array(arguments.length -  0);
while (G__13997__i < G__13997__a.length) {G__13997__a[G__13997__i] = arguments[G__13997__i + 0]; ++G__13997__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13997__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__13998){
var args__5784__auto__ = cljs.core.seq(arglist__13998);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5109__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__13999,_){
var map__14000 = p__13999;
var map__14000__$1 = ((cljs.core.seq_QMARK_.call(null,map__14000))?cljs.core.apply.call(null,cljs.core.hash_map,map__14000):map__14000);
var type = cljs.core.get.call(null,map__14000__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
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
var tailrecursion$hoplon$markdown$strong_emph_super_node__delegate = function (args__5784__auto__){
var vec__14003 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__14004 = cljs.core.nth.call(null,vec__14003,(0),null);
var map__14004__$1 = ((cljs.core.seq_QMARK_.call(null,map__14004))?cljs.core.apply.call(null,cljs.core.hash_map,map__14004):map__14004);
var chars = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var closed_QMARK_ = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"closed","closed",-919675359));
var strong_QMARK_ = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"strong","strong",269529000));
var kids = cljs.core.nth.call(null,vec__14003,(1),null);
if(cljs.core.not.call(null,closed_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.call(null,((cljs.core.not.call(null,strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14005__i = 0, G__14005__a = new Array(arguments.length -  0);
while (G__14005__i < G__14005__a.length) {G__14005__a[G__14005__i] = arguments[G__14005__i + 0]; ++G__14005__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14005__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__14006){
var args__5784__auto__ = cljs.core.seq(arglist__14006);
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$strong_emph_super_node__delegate;
return tailrecursion$hoplon$markdown$strong_emph_super_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_body_node = (function() { 
var tailrecursion$hoplon$markdown$table_body_node__delegate = function (args__5784__auto__){
var vec__14008 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14008,(0),null);
var kids = cljs.core.nth.call(null,vec__14008,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14009__i = 0, G__14009__a = new Array(arguments.length -  0);
while (G__14009__i < G__14009__a.length) {G__14009__a[G__14009__i] = arguments[G__14009__i + 0]; ++G__14009__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14009__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__14010){
var args__5784__auto__ = cljs.core.seq(arglist__14010);
return tailrecursion$hoplon$markdown$table_body_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_body_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_body_node__delegate;
return tailrecursion$hoplon$markdown$table_body_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_caption_node = (function() { 
var tailrecursion$hoplon$markdown$table_caption_node__delegate = function (args__5784__auto__){
var vec__14012 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14012,(0),null);
var kids = cljs.core.nth.call(null,vec__14012,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14013__i = 0, G__14013__a = new Array(arguments.length -  0);
while (G__14013__i < G__14013__a.length) {G__14013__a[G__14013__i] = arguments[G__14013__i + 0]; ++G__14013__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14013__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__14014){
var args__5784__auto__ = cljs.core.seq(arglist__14014);
return tailrecursion$hoplon$markdown$table_caption_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_caption_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_caption_node__delegate;
return tailrecursion$hoplon$markdown$table_caption_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_cell_node = (function() { 
var tailrecursion$hoplon$markdown$table_cell_node__delegate = function (args__5784__auto__){
var vec__14016 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14016,(0),null);
var kids = cljs.core.nth.call(null,vec__14016,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14017__i = 0, G__14017__a = new Array(arguments.length -  0);
while (G__14017__i < G__14017__a.length) {G__14017__a[G__14017__i] = arguments[G__14017__i + 0]; ++G__14017__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14017__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__14018){
var args__5784__auto__ = cljs.core.seq(arglist__14018);
return tailrecursion$hoplon$markdown$table_cell_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_cell_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_cell_node__delegate;
return tailrecursion$hoplon$markdown$table_cell_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_column_node = (function() { 
var tailrecursion$hoplon$markdown$table_column_node__delegate = function (args__5784__auto__){
var vec__14020 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14020,(0),null);
var kids = cljs.core.nth.call(null,vec__14020,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14021__i = 0, G__14021__a = new Array(arguments.length -  0);
while (G__14021__i < G__14021__a.length) {G__14021__a[G__14021__i] = arguments[G__14021__i + 0]; ++G__14021__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14021__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__14022){
var args__5784__auto__ = cljs.core.seq(arglist__14022);
return tailrecursion$hoplon$markdown$table_column_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_column_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_column_node__delegate;
return tailrecursion$hoplon$markdown$table_column_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_header_node = (function() { 
var tailrecursion$hoplon$markdown$table_header_node__delegate = function (args__5784__auto__){
var vec__14024 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14024,(0),null);
var kids = cljs.core.nth.call(null,vec__14024,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14025__i = 0, G__14025__a = new Array(arguments.length -  0);
while (G__14025__i < G__14025__a.length) {G__14025__a[G__14025__i] = arguments[G__14025__i + 0]; ++G__14025__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14025__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__14026){
var args__5784__auto__ = cljs.core.seq(arglist__14026);
return tailrecursion$hoplon$markdown$table_header_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_header_node__delegate;
return tailrecursion$hoplon$markdown$table_header_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_node = (function() { 
var tailrecursion$hoplon$markdown$table_node__delegate = function (args__5784__auto__){
var vec__14028 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14028,(0),null);
var kids = cljs.core.nth.call(null,vec__14028,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14029__i = 0, G__14029__a = new Array(arguments.length -  0);
while (G__14029__i < G__14029__a.length) {G__14029__a[G__14029__i] = arguments[G__14029__i + 0]; ++G__14029__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14029__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__14030){
var args__5784__auto__ = cljs.core.seq(arglist__14030);
return tailrecursion$hoplon$markdown$table_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_node__delegate;
return tailrecursion$hoplon$markdown$table_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_row_node = (function() { 
var tailrecursion$hoplon$markdown$table_row_node__delegate = function (args__5784__auto__){
var vec__14032 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14032,(0),null);
var kids = cljs.core.nth.call(null,vec__14032,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14033__i = 0, G__14033__a = new Array(arguments.length -  0);
while (G__14033__i < G__14033__a.length) {G__14033__a[G__14033__i] = arguments[G__14033__i + 0]; ++G__14033__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14033__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__14034){
var args__5784__auto__ = cljs.core.seq(arglist__14034);
return tailrecursion$hoplon$markdown$table_row_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$table_row_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_row_node__delegate;
return tailrecursion$hoplon$markdown$table_row_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.wiki_link_node = (function() { 
var tailrecursion$hoplon$markdown$wiki_link_node__delegate = function (args__5784__auto__){
var vec__14036 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__14036,(0),null);
var kids = cljs.core.nth.call(null,vec__14036,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__14037__i = 0, G__14037__a = new Array(arguments.length -  0);
while (G__14037__i < G__14037__a.length) {G__14037__a[G__14037__i] = arguments[G__14037__i + 0]; ++G__14037__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__14037__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__5784__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__14038){
var args__5784__auto__ = cljs.core.seq(arglist__14038);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__5784__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;

//# sourceMappingURL=markdown.js.map