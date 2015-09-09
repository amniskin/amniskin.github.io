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
var vec__184261 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184261,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184261,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184262__i = 0, G__184262__a = new Array(arguments.length -  0);
while (G__184262__i < G__184262__a.length) {G__184262__a[G__184262__i] = arguments[G__184262__i + 0]; ++G__184262__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184262__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__184263){
var args__8262__auto__ = cljs.core.seq(arglist__184263);
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
var vec__184266 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184266,(0),null);
var vec__184267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184266,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184267,(0),null);
var _ = cljs.core.nthnext(vec__184267,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184268__i = 0, G__184268__a = new Array(arguments.length -  0);
while (G__184268__i < G__184268__a.length) {G__184268__a[G__184268__i] = arguments[G__184268__i + 0]; ++G__184268__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184268__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__184269){
var args__8262__auto__ = cljs.core.seq(arglist__184269);
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
var vec__184274 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184274,(0),null);
var map__184275__$1 = ((((!((map__184275 == null)))?((((map__184275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184275):map__184275);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184275__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184275__$1,cljs.core.cst$kw$title);
var vec__184276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184274,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184276,(0),null);
var _ = cljs.core.nthnext(vec__184276,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184278__i = 0, G__184278__a = new Array(arguments.length -  0);
while (G__184278__i < G__184278__a.length) {G__184278__a[G__184278__i] = arguments[G__184278__i + 0]; ++G__184278__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184278__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__184279){
var args__8262__auto__ = cljs.core.seq(arglist__184279);
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
var vec__184283 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184283,(0),null);
var map__184284__$1 = ((((!((map__184284 == null)))?((((map__184284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184284):map__184284);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184284__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184284__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184283,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184286__i = 0, G__184286__a = new Array(arguments.length -  0);
while (G__184286__i < G__184286__a.length) {G__184286__a[G__184286__i] = arguments[G__184286__i + 0]; ++G__184286__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184286__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__184287){
var args__8262__auto__ = cljs.core.seq(arglist__184287);
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
var vec__184291 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184291,(0),null);
var map__184292__$1 = ((((!((map__184292 == null)))?((((map__184292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184292):map__184292);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184292__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184291,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184294__i = 0, G__184294__a = new Array(arguments.length -  0);
while (G__184294__i < G__184294__a.length) {G__184294__a[G__184294__i] = arguments[G__184294__i + 0]; ++G__184294__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184294__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__184295){
var args__8262__auto__ = cljs.core.seq(arglist__184295);
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
var vec__184302 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184302,(0),null);
var map__184303__$1 = ((((!((map__184303 == null)))?((((map__184303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184303):map__184303);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184303__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184302,(1),null);
var G__184305 = cljs.core.cst$kw$href;
var G__184306 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__184307 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__184305,G__184306,G__184307) : tailrecursion.hoplon.a.call(null,G__184305,G__184306,G__184307));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184308__i = 0, G__184308__a = new Array(arguments.length -  0);
while (G__184308__i < G__184308__a.length) {G__184308__a[G__184308__i] = arguments[G__184308__i + 0]; ++G__184308__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184308__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__184309){
var args__8262__auto__ = cljs.core.seq(arglist__184309);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = (function (){var G__184310 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184310) : cljs.core.atom.call(null,G__184310));
})();
var prefer_table__5917__auto__ = (function (){var G__184311 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184311) : cljs.core.atom.call(null,G__184311));
})();
var method_cache__5918__auto__ = (function (){var G__184312 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184312) : cljs.core.atom.call(null,G__184312));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__184313 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184313) : cljs.core.atom.call(null,G__184313));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__184314,kids){
var map__184315 = p__184314;
var map__184315__$1 = ((((!((map__184315 == null)))?((((map__184315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184315):map__184315);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184315__$1,cljs.core.cst$kw$type);
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
var vec__184323 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184323,(0),null);
var map__184324__$1 = ((((!((map__184324 == null)))?((((map__184324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184324):map__184324);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184324__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184324__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__184325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184323,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184325,(0),null);
var _ = cljs.core.nthnext(vec__184325,(1));
var kids = vec__184325;
var map__184327 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__184327__$1 = ((((!((map__184327 == null)))?((((map__184327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184327):map__184327);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184327__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184327__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184329__i = 0, G__184329__a = new Array(arguments.length -  0);
while (G__184329__i < G__184329__a.length) {G__184329__a[G__184329__i] = arguments[G__184329__i + 0]; ++G__184329__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184329__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__184330){
var args__8262__auto__ = cljs.core.seq(arglist__184330);
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
var vec__184338 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184338,(0),null);
var map__184339__$1 = ((((!((map__184339 == null)))?((((map__184339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184339):map__184339);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184339__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184339__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184338,(1),null);
var map__184341 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__184341__$1 = ((((!((map__184341 == null)))?((((map__184341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184341):map__184341);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184341__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184341__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__184343 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__184344 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__184343,G__184344) : tailrecursion.hoplon.a.call(null,G__184343,G__184344));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184345__i = 0, G__184345__a = new Array(arguments.length -  0);
while (G__184345__i < G__184345__a.length) {G__184345__a[G__184345__i] = arguments[G__184345__i + 0]; ++G__184345__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184345__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__184346){
var args__8262__auto__ = cljs.core.seq(arglist__184346);
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
var vec__184348 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184348,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184348,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184349__i = 0, G__184349__a = new Array(arguments.length -  0);
while (G__184349__i < G__184349__a.length) {G__184349__a[G__184349__i] = arguments[G__184349__i + 0]; ++G__184349__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184349__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__184350){
var args__8262__auto__ = cljs.core.seq(arglist__184350);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = (function (){var G__184351 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184351) : cljs.core.atom.call(null,G__184351));
})();
var prefer_table__5917__auto__ = (function (){var G__184352 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184352) : cljs.core.atom.call(null,G__184352));
})();
var method_cache__5918__auto__ = (function (){var G__184353 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184353) : cljs.core.atom.call(null,G__184353));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__184354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__184354) : cljs.core.atom.call(null,G__184354));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__184355,_){
var map__184356 = p__184355;
var map__184356__$1 = ((((!((map__184356 == null)))?((((map__184356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184356):map__184356);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184356__$1,cljs.core.cst$kw$type);
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
var vec__184361 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184361,(0),null);
var map__184362__$1 = ((((!((map__184362 == null)))?((((map__184362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184362):map__184362);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184362__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184362__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184362__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184361,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184364__i = 0, G__184364__a = new Array(arguments.length -  0);
while (G__184364__i < G__184364__a.length) {G__184364__a[G__184364__i] = arguments[G__184364__i + 0]; ++G__184364__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184364__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__184365){
var args__8262__auto__ = cljs.core.seq(arglist__184365);
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
var vec__184367 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184367,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184367,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184368__i = 0, G__184368__a = new Array(arguments.length -  0);
while (G__184368__i < G__184368__a.length) {G__184368__a[G__184368__i] = arguments[G__184368__i + 0]; ++G__184368__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184368__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__184369){
var args__8262__auto__ = cljs.core.seq(arglist__184369);
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
var vec__184371 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184371,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184371,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184372__i = 0, G__184372__a = new Array(arguments.length -  0);
while (G__184372__i < G__184372__a.length) {G__184372__a[G__184372__i] = arguments[G__184372__i + 0]; ++G__184372__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184372__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__184373){
var args__8262__auto__ = cljs.core.seq(arglist__184373);
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
var vec__184375 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184375,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184375,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184376__i = 0, G__184376__a = new Array(arguments.length -  0);
while (G__184376__i < G__184376__a.length) {G__184376__a[G__184376__i] = arguments[G__184376__i + 0]; ++G__184376__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184376__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__184377){
var args__8262__auto__ = cljs.core.seq(arglist__184377);
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
var vec__184379 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184379,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184379,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184380__i = 0, G__184380__a = new Array(arguments.length -  0);
while (G__184380__i < G__184380__a.length) {G__184380__a[G__184380__i] = arguments[G__184380__i + 0]; ++G__184380__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184380__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__184381){
var args__8262__auto__ = cljs.core.seq(arglist__184381);
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
var vec__184383 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184383,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184383,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184384__i = 0, G__184384__a = new Array(arguments.length -  0);
while (G__184384__i < G__184384__a.length) {G__184384__a[G__184384__i] = arguments[G__184384__i + 0]; ++G__184384__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184384__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__184385){
var args__8262__auto__ = cljs.core.seq(arglist__184385);
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
var vec__184387 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184387,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184387,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184388__i = 0, G__184388__a = new Array(arguments.length -  0);
while (G__184388__i < G__184388__a.length) {G__184388__a[G__184388__i] = arguments[G__184388__i + 0]; ++G__184388__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184388__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__184389){
var args__8262__auto__ = cljs.core.seq(arglist__184389);
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
var vec__184391 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184391,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184391,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184392__i = 0, G__184392__a = new Array(arguments.length -  0);
while (G__184392__i < G__184392__a.length) {G__184392__a[G__184392__i] = arguments[G__184392__i + 0]; ++G__184392__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184392__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__184393){
var args__8262__auto__ = cljs.core.seq(arglist__184393);
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
var vec__184395 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184395,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184395,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184396__i = 0, G__184396__a = new Array(arguments.length -  0);
while (G__184396__i < G__184396__a.length) {G__184396__a[G__184396__i] = arguments[G__184396__i + 0]; ++G__184396__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184396__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__184397){
var args__8262__auto__ = cljs.core.seq(arglist__184397);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
