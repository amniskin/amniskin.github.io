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
var vec__10139 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10139,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10139,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10140__i = 0, G__10140__a = new Array(arguments.length -  0);
while (G__10140__i < G__10140__a.length) {G__10140__a[G__10140__i] = arguments[G__10140__i + 0]; ++G__10140__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10140__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__10141){
var args__8262__auto__ = cljs.core.seq(arglist__10141);
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
var vec__10144 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10144,(0),null);
var vec__10145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10144,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(0),null);
var _ = cljs.core.nthnext(vec__10145,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10146__i = 0, G__10146__a = new Array(arguments.length -  0);
while (G__10146__i < G__10146__a.length) {G__10146__a[G__10146__i] = arguments[G__10146__i + 0]; ++G__10146__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10146__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__10147){
var args__8262__auto__ = cljs.core.seq(arglist__10147);
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
var vec__10152 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(0),null);
var map__10153__$1 = ((((!((map__10153 == null)))?((((map__10153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10153):map__10153);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10153__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10153__$1,cljs.core.cst$kw$title);
var vec__10154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,(0),null);
var _ = cljs.core.nthnext(vec__10154,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10156__i = 0, G__10156__a = new Array(arguments.length -  0);
while (G__10156__i < G__10156__a.length) {G__10156__a[G__10156__i] = arguments[G__10156__i + 0]; ++G__10156__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10156__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__10157){
var args__8262__auto__ = cljs.core.seq(arglist__10157);
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
var vec__10161 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10161,(0),null);
var map__10162__$1 = ((((!((map__10162 == null)))?((((map__10162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10162):map__10162);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10162__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10162__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10161,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10164__i = 0, G__10164__a = new Array(arguments.length -  0);
while (G__10164__i < G__10164__a.length) {G__10164__a[G__10164__i] = arguments[G__10164__i + 0]; ++G__10164__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10164__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__10165){
var args__8262__auto__ = cljs.core.seq(arglist__10165);
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
var vec__10169 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10169,(0),null);
var map__10170__$1 = ((((!((map__10170 == null)))?((((map__10170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10170):map__10170);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10170__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10169,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10172__i = 0, G__10172__a = new Array(arguments.length -  0);
while (G__10172__i < G__10172__a.length) {G__10172__a[G__10172__i] = arguments[G__10172__i + 0]; ++G__10172__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10172__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__10173){
var args__8262__auto__ = cljs.core.seq(arglist__10173);
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
var vec__10180 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10180,(0),null);
var map__10181__$1 = ((((!((map__10181 == null)))?((((map__10181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10181):map__10181);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10181__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10180,(1),null);
var G__10183 = cljs.core.cst$kw$href;
var G__10184 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__10185 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__10183,G__10184,G__10185) : tailrecursion.hoplon.a.call(null,G__10183,G__10184,G__10185));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10186__i = 0, G__10186__a = new Array(arguments.length -  0);
while (G__10186__i < G__10186__a.length) {G__10186__a[G__10186__i] = arguments[G__10186__i + 0]; ++G__10186__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10186__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__10187){
var args__8262__auto__ = cljs.core.seq(arglist__10187);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = (function (){var G__10188 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10188) : cljs.core.atom.call(null,G__10188));
})();
var prefer_table__5917__auto__ = (function (){var G__10189 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10189) : cljs.core.atom.call(null,G__10189));
})();
var method_cache__5918__auto__ = (function (){var G__10190 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10190) : cljs.core.atom.call(null,G__10190));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10191 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10191) : cljs.core.atom.call(null,G__10191));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__10192,kids){
var map__10193 = p__10192;
var map__10193__$1 = ((((!((map__10193 == null)))?((((map__10193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10193):map__10193);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10193__$1,cljs.core.cst$kw$type);
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
var vec__10201 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201,(0),null);
var map__10202__$1 = ((((!((map__10202 == null)))?((((map__10202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10202):map__10202);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10202__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10202__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__10203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10203,(0),null);
var _ = cljs.core.nthnext(vec__10203,(1));
var kids = vec__10203;
var map__10205 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__10205__$1 = ((((!((map__10205 == null)))?((((map__10205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10205):map__10205);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10205__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10205__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10207__i = 0, G__10207__a = new Array(arguments.length -  0);
while (G__10207__i < G__10207__a.length) {G__10207__a[G__10207__i] = arguments[G__10207__i + 0]; ++G__10207__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10207__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__10208){
var args__8262__auto__ = cljs.core.seq(arglist__10208);
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
var vec__10216 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10216,(0),null);
var map__10217__$1 = ((((!((map__10217 == null)))?((((map__10217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10217):map__10217);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10217__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10217__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10216,(1),null);
var map__10219 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__10219__$1 = ((((!((map__10219 == null)))?((((map__10219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10219):map__10219);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10219__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10219__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__10221 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__10222 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__10221,G__10222) : tailrecursion.hoplon.a.call(null,G__10221,G__10222));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10223__i = 0, G__10223__a = new Array(arguments.length -  0);
while (G__10223__i < G__10223__a.length) {G__10223__a[G__10223__i] = arguments[G__10223__i + 0]; ++G__10223__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10223__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__10224){
var args__8262__auto__ = cljs.core.seq(arglist__10224);
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
var vec__10226 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10226,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10226,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10227__i = 0, G__10227__a = new Array(arguments.length -  0);
while (G__10227__i < G__10227__a.length) {G__10227__a[G__10227__i] = arguments[G__10227__i + 0]; ++G__10227__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10227__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__10228){
var args__8262__auto__ = cljs.core.seq(arglist__10228);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = (function (){var G__10229 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10229) : cljs.core.atom.call(null,G__10229));
})();
var prefer_table__5917__auto__ = (function (){var G__10230 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10230) : cljs.core.atom.call(null,G__10230));
})();
var method_cache__5918__auto__ = (function (){var G__10231 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10231) : cljs.core.atom.call(null,G__10231));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10232 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10232) : cljs.core.atom.call(null,G__10232));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__10233,_){
var map__10234 = p__10233;
var map__10234__$1 = ((((!((map__10234 == null)))?((((map__10234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10234):map__10234);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10234__$1,cljs.core.cst$kw$type);
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
var vec__10239 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__10240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239,(0),null);
var map__10240__$1 = ((((!((map__10240 == null)))?((((map__10240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10240):map__10240);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10239,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10242__i = 0, G__10242__a = new Array(arguments.length -  0);
while (G__10242__i < G__10242__a.length) {G__10242__a[G__10242__i] = arguments[G__10242__i + 0]; ++G__10242__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10242__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__10243){
var args__8262__auto__ = cljs.core.seq(arglist__10243);
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
var vec__10245 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10245,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10245,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10246__i = 0, G__10246__a = new Array(arguments.length -  0);
while (G__10246__i < G__10246__a.length) {G__10246__a[G__10246__i] = arguments[G__10246__i + 0]; ++G__10246__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10246__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__10247){
var args__8262__auto__ = cljs.core.seq(arglist__10247);
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
var vec__10249 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10249,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10249,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10250__i = 0, G__10250__a = new Array(arguments.length -  0);
while (G__10250__i < G__10250__a.length) {G__10250__a[G__10250__i] = arguments[G__10250__i + 0]; ++G__10250__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10250__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__10251){
var args__8262__auto__ = cljs.core.seq(arglist__10251);
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
var vec__10253 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10253,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10253,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10254__i = 0, G__10254__a = new Array(arguments.length -  0);
while (G__10254__i < G__10254__a.length) {G__10254__a[G__10254__i] = arguments[G__10254__i + 0]; ++G__10254__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10254__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__10255){
var args__8262__auto__ = cljs.core.seq(arglist__10255);
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
var vec__10257 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10257,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10257,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10258__i = 0, G__10258__a = new Array(arguments.length -  0);
while (G__10258__i < G__10258__a.length) {G__10258__a[G__10258__i] = arguments[G__10258__i + 0]; ++G__10258__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10258__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__10259){
var args__8262__auto__ = cljs.core.seq(arglist__10259);
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
var vec__10261 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10262__i = 0, G__10262__a = new Array(arguments.length -  0);
while (G__10262__i < G__10262__a.length) {G__10262__a[G__10262__i] = arguments[G__10262__i + 0]; ++G__10262__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10262__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__10263){
var args__8262__auto__ = cljs.core.seq(arglist__10263);
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
var vec__10265 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10266__i = 0, G__10266__a = new Array(arguments.length -  0);
while (G__10266__i < G__10266__a.length) {G__10266__a[G__10266__i] = arguments[G__10266__i + 0]; ++G__10266__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10266__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__10267){
var args__8262__auto__ = cljs.core.seq(arglist__10267);
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
var vec__10269 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10269,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10269,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10270__i = 0, G__10270__a = new Array(arguments.length -  0);
while (G__10270__i < G__10270__a.length) {G__10270__a[G__10270__i] = arguments[G__10270__i + 0]; ++G__10270__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10270__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__10271){
var args__8262__auto__ = cljs.core.seq(arglist__10271);
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
var vec__10273 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__10274__i = 0, G__10274__a = new Array(arguments.length -  0);
while (G__10274__i < G__10274__a.length) {G__10274__a[G__10274__i] = arguments[G__10274__i + 0]; ++G__10274__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__10274__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__10275){
var args__8262__auto__ = cljs.core.seq(arglist__10275);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
