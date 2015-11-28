// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
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
var tailrecursion$hoplon$markdown$abbreviation_node__delegate = function (args__8262__auto__){
var vec__202775 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202775,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202775,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202776__i = 0, G__202776__a = new Array(arguments.length -  0);
while (G__202776__i < G__202776__a.length) {G__202776__a[G__202776__i] = arguments[G__202776__i + 0]; ++G__202776__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202776__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__202777){
var args__8262__auto__ = cljs.core.seq(arglist__202777);
return tailrecursion$hoplon$markdown$abbreviation_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$abbreviation_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$abbreviation_node__delegate;
return tailrecursion$hoplon$markdown$abbreviation_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.auto_link_node = (function() { 
var tailrecursion$hoplon$markdown$auto_link_node__delegate = function (args__8262__auto__){
var vec__202780 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202780,(0),null);
var vec__202781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202780,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202781,(0),null);
var _ = cljs.core.nthnext(vec__202781,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202782__i = 0, G__202782__a = new Array(arguments.length -  0);
while (G__202782__i < G__202782__a.length) {G__202782__a[G__202782__i] = arguments[G__202782__i + 0]; ++G__202782__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202782__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__202783){
var args__8262__auto__ = cljs.core.seq(arglist__202783);
return tailrecursion$hoplon$markdown$auto_link_node__delegate(args__8262__auto__);
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
var tailrecursion$hoplon$markdown$exp_image_node__delegate = function (args__8262__auto__){
var vec__202788 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202788,(0),null);
var map__202789__$1 = ((((!((map__202789 == null)))?((((map__202789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202789):map__202789);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202789__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202789__$1,cljs.core.cst$kw$title);
var vec__202790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202788,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202790,(0),null);
var _ = cljs.core.nthnext(vec__202790,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202792__i = 0, G__202792__a = new Array(arguments.length -  0);
while (G__202792__i < G__202792__a.length) {G__202792__a[G__202792__i] = arguments[G__202792__i + 0]; ++G__202792__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202792__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__202793){
var args__8262__auto__ = cljs.core.seq(arglist__202793);
return tailrecursion$hoplon$markdown$exp_image_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$exp_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_image_node__delegate;
return tailrecursion$hoplon$markdown$exp_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_link_node = (function() { 
var tailrecursion$hoplon$markdown$exp_link_node__delegate = function (args__8262__auto__){
var vec__202797 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202797,(0),null);
var map__202798__$1 = ((((!((map__202798 == null)))?((((map__202798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202798):map__202798);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202798__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202798__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202797,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202800__i = 0, G__202800__a = new Array(arguments.length -  0);
while (G__202800__i < G__202800__a.length) {G__202800__a[G__202800__i] = arguments[G__202800__i + 0]; ++G__202800__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202800__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__202801){
var args__8262__auto__ = cljs.core.seq(arglist__202801);
return tailrecursion$hoplon$markdown$exp_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$exp_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_link_node__delegate;
return tailrecursion$hoplon$markdown$exp_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.header_node = (function() { 
var tailrecursion$hoplon$markdown$header_node__delegate = function (args__8262__auto__){
var vec__202805 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202805,(0),null);
var map__202806__$1 = ((((!((map__202806 == null)))?((((map__202806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202806):map__202806);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202806__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202805,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202808__i = 0, G__202808__a = new Array(arguments.length -  0);
while (G__202808__i < G__202808__a.length) {G__202808__a[G__202808__i] = arguments[G__202808__i + 0]; ++G__202808__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202808__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__202809){
var args__8262__auto__ = cljs.core.seq(arglist__202809);
return tailrecursion$hoplon$markdown$header_node__delegate(args__8262__auto__);
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
var tailrecursion$hoplon$markdown$mail_link_node__delegate = function (args__8262__auto__){
var vec__202816 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202816,(0),null);
var map__202817__$1 = ((((!((map__202817 == null)))?((((map__202817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202817):map__202817);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202817__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202816,(1),null);
var G__202819 = cljs.core.cst$kw$href;
var G__202820 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__202821 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__202819,G__202820,G__202821) : tailrecursion.hoplon.a.call(null,G__202819,G__202820,G__202821));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202822__i = 0, G__202822__a = new Array(arguments.length -  0);
while (G__202822__i < G__202822__a.length) {G__202822__a[G__202822__i] = arguments[G__202822__i + 0]; ++G__202822__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202822__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__202823){
var args__8262__auto__ = cljs.core.seq(arglist__202823);
return tailrecursion$hoplon$markdown$mail_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$mail_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$mail_link_node__delegate;
return tailrecursion$hoplon$markdown$mail_link_node;
})()
;
tailrecursion.hoplon.markdown.ordered_list_node = tailrecursion.hoplon.ol;
tailrecursion.hoplon.markdown.para_node = tailrecursion.hoplon.p;
if(typeof tailrecursion.hoplon.markdown.quoted_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = (function (){var G__202824 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202824) : cljs.core.atom.call(null,G__202824));
})();
var prefer_table__5917__auto__ = (function (){var G__202825 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202825) : cljs.core.atom.call(null,G__202825));
})();
var method_cache__5918__auto__ = (function (){var G__202826 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202826) : cljs.core.atom.call(null,G__202826));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__202827 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202827) : cljs.core.atom.call(null,G__202827));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__202828,kids){
var map__202829 = p__202828;
var map__202829__$1 = ((((!((map__202829 == null)))?((((map__202829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202829):map__202829);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202829__$1,cljs.core.cst$kw$type);
return type;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00AB"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00BB"], null)], 0));
}));
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201C"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201D"], null)], 0));
}));
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2018"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2019"], null)], 0));
}));
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_image_node = (function() { 
var tailrecursion$hoplon$markdown$ref_image_node__delegate = function (args__8262__auto__){
var vec__202837 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202837,(0),null);
var map__202838__$1 = ((((!((map__202838 == null)))?((((map__202838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202838):map__202838);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202838__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202838__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__202839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202837,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202839,(0),null);
var _ = cljs.core.nthnext(vec__202839,(1));
var kids = vec__202839;
var map__202841 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__202841__$1 = ((((!((map__202841 == null)))?((((map__202841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202841):map__202841);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202841__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202841__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202843__i = 0, G__202843__a = new Array(arguments.length -  0);
while (G__202843__i < G__202843__a.length) {G__202843__a[G__202843__i] = arguments[G__202843__i + 0]; ++G__202843__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202843__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__202844){
var args__8262__auto__ = cljs.core.seq(arglist__202844);
return tailrecursion$hoplon$markdown$ref_image_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$ref_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_image_node__delegate;
return tailrecursion$hoplon$markdown$ref_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_link_node = (function() { 
var tailrecursion$hoplon$markdown$ref_link_node__delegate = function (args__8262__auto__){
var vec__202852 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202852,(0),null);
var map__202853__$1 = ((((!((map__202853 == null)))?((((map__202853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202853):map__202853);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202853__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202853__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202852,(1),null);
var map__202855 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__202855__$1 = ((((!((map__202855 == null)))?((((map__202855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202855):map__202855);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202855__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202855__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__202857 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__202858 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__202857,G__202858) : tailrecursion.hoplon.a.call(null,G__202857,G__202858));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202859__i = 0, G__202859__a = new Array(arguments.length -  0);
while (G__202859__i < G__202859__a.length) {G__202859__a[G__202859__i] = arguments[G__202859__i + 0]; ++G__202859__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202859__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__202860){
var args__8262__auto__ = cljs.core.seq(arglist__202860);
return tailrecursion$hoplon$markdown$ref_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$ref_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_link_node__delegate;
return tailrecursion$hoplon$markdown$ref_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.reference_node = (function() { 
var tailrecursion$hoplon$markdown$reference_node__delegate = function (args__8262__auto__){
var vec__202862 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202862,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202862,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202863__i = 0, G__202863__a = new Array(arguments.length -  0);
while (G__202863__i < G__202863__a.length) {G__202863__a[G__202863__i] = arguments[G__202863__i + 0]; ++G__202863__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202863__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__202864){
var args__8262__auto__ = cljs.core.seq(arglist__202864);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = (function (){var G__202865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202865) : cljs.core.atom.call(null,G__202865));
})();
var prefer_table__5917__auto__ = (function (){var G__202866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202866) : cljs.core.atom.call(null,G__202866));
})();
var method_cache__5918__auto__ = (function (){var G__202867 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202867) : cljs.core.atom.call(null,G__202867));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__202868 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202868) : cljs.core.atom.call(null,G__202868));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__202869,_){
var map__202870 = p__202869;
var map__202870__$1 = ((((!((map__202870 == null)))?((((map__202870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202870):map__202870);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202870__$1,cljs.core.cst$kw$type);
return type;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$apostrophe,(function (_,___$1){
return "'";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ellipsis,(function (_,___$1){
return "\u2026";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$emdash,(function (_,___$1){
return "\u2014";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$endash,(function (_,___$1){
return "\u2013";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$h_DASH_rule,(function (_,___$1){
return (tailrecursion.hoplon.hr.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.hr.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.hr.call(null));
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linebreak,(function (_,___$1){
return (tailrecursion.hoplon.br.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.br.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.br.call(null));
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nbsp,(function (_,___$1){
return "\u00A0";
}));
tailrecursion.hoplon.markdown.strike_node = tailrecursion.hoplon.del;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.strong_emph_super_node = (function() { 
var tailrecursion$hoplon$markdown$strong_emph_super_node__delegate = function (args__8262__auto__){
var vec__202875 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202875,(0),null);
var map__202876__$1 = ((((!((map__202876 == null)))?((((map__202876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202876):map__202876);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202876__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202876__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202876__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202875,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202878__i = 0, G__202878__a = new Array(arguments.length -  0);
while (G__202878__i < G__202878__a.length) {G__202878__a[G__202878__i] = arguments[G__202878__i + 0]; ++G__202878__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202878__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__202879){
var args__8262__auto__ = cljs.core.seq(arglist__202879);
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$strong_emph_super_node__delegate;
return tailrecursion$hoplon$markdown$strong_emph_super_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_body_node = (function() { 
var tailrecursion$hoplon$markdown$table_body_node__delegate = function (args__8262__auto__){
var vec__202881 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202881,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202881,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202882__i = 0, G__202882__a = new Array(arguments.length -  0);
while (G__202882__i < G__202882__a.length) {G__202882__a[G__202882__i] = arguments[G__202882__i + 0]; ++G__202882__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202882__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__202883){
var args__8262__auto__ = cljs.core.seq(arglist__202883);
return tailrecursion$hoplon$markdown$table_body_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_body_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_body_node__delegate;
return tailrecursion$hoplon$markdown$table_body_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_caption_node = (function() { 
var tailrecursion$hoplon$markdown$table_caption_node__delegate = function (args__8262__auto__){
var vec__202885 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202885,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202885,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202886__i = 0, G__202886__a = new Array(arguments.length -  0);
while (G__202886__i < G__202886__a.length) {G__202886__a[G__202886__i] = arguments[G__202886__i + 0]; ++G__202886__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202886__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__202887){
var args__8262__auto__ = cljs.core.seq(arglist__202887);
return tailrecursion$hoplon$markdown$table_caption_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_caption_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_caption_node__delegate;
return tailrecursion$hoplon$markdown$table_caption_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_cell_node = (function() { 
var tailrecursion$hoplon$markdown$table_cell_node__delegate = function (args__8262__auto__){
var vec__202889 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202889,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202889,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202890__i = 0, G__202890__a = new Array(arguments.length -  0);
while (G__202890__i < G__202890__a.length) {G__202890__a[G__202890__i] = arguments[G__202890__i + 0]; ++G__202890__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202890__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__202891){
var args__8262__auto__ = cljs.core.seq(arglist__202891);
return tailrecursion$hoplon$markdown$table_cell_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_cell_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_cell_node__delegate;
return tailrecursion$hoplon$markdown$table_cell_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_column_node = (function() { 
var tailrecursion$hoplon$markdown$table_column_node__delegate = function (args__8262__auto__){
var vec__202893 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202893,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202893,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202894__i = 0, G__202894__a = new Array(arguments.length -  0);
while (G__202894__i < G__202894__a.length) {G__202894__a[G__202894__i] = arguments[G__202894__i + 0]; ++G__202894__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202894__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__202895){
var args__8262__auto__ = cljs.core.seq(arglist__202895);
return tailrecursion$hoplon$markdown$table_column_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_column_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_column_node__delegate;
return tailrecursion$hoplon$markdown$table_column_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_header_node = (function() { 
var tailrecursion$hoplon$markdown$table_header_node__delegate = function (args__8262__auto__){
var vec__202897 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202897,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202897,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202898__i = 0, G__202898__a = new Array(arguments.length -  0);
while (G__202898__i < G__202898__a.length) {G__202898__a[G__202898__i] = arguments[G__202898__i + 0]; ++G__202898__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202898__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__202899){
var args__8262__auto__ = cljs.core.seq(arglist__202899);
return tailrecursion$hoplon$markdown$table_header_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_header_node__delegate;
return tailrecursion$hoplon$markdown$table_header_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_node = (function() { 
var tailrecursion$hoplon$markdown$table_node__delegate = function (args__8262__auto__){
var vec__202901 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202901,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202901,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202902__i = 0, G__202902__a = new Array(arguments.length -  0);
while (G__202902__i < G__202902__a.length) {G__202902__a[G__202902__i] = arguments[G__202902__i + 0]; ++G__202902__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202902__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__202903){
var args__8262__auto__ = cljs.core.seq(arglist__202903);
return tailrecursion$hoplon$markdown$table_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_node__delegate;
return tailrecursion$hoplon$markdown$table_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_row_node = (function() { 
var tailrecursion$hoplon$markdown$table_row_node__delegate = function (args__8262__auto__){
var vec__202905 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202905,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202905,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202906__i = 0, G__202906__a = new Array(arguments.length -  0);
while (G__202906__i < G__202906__a.length) {G__202906__a[G__202906__i] = arguments[G__202906__i + 0]; ++G__202906__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202906__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__202907){
var args__8262__auto__ = cljs.core.seq(arglist__202907);
return tailrecursion$hoplon$markdown$table_row_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$table_row_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_row_node__delegate;
return tailrecursion$hoplon$markdown$table_row_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.wiki_link_node = (function() { 
var tailrecursion$hoplon$markdown$wiki_link_node__delegate = function (args__8262__auto__){
var vec__202909 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202909,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202909,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202910__i = 0, G__202910__a = new Array(arguments.length -  0);
while (G__202910__i < G__202910__a.length) {G__202910__a[G__202910__i] = arguments[G__202910__i + 0]; ++G__202910__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202910__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__202911){
var args__8262__auto__ = cljs.core.seq(arglist__202911);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
