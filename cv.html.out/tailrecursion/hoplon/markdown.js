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
var tailrecursion$hoplon$markdown$abbreviation_node__delegate = function (args__8082__auto__){
var vec__9215 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9215,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9215,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9216__i = 0, G__9216__a = new Array(arguments.length -  0);
while (G__9216__i < G__9216__a.length) {G__9216__a[G__9216__i] = arguments[G__9216__i + 0]; ++G__9216__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9216__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__9217){
var args__8082__auto__ = cljs.core.seq(arglist__9217);
return tailrecursion$hoplon$markdown$abbreviation_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$abbreviation_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$abbreviation_node__delegate;
return tailrecursion$hoplon$markdown$abbreviation_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.auto_link_node = (function() { 
var tailrecursion$hoplon$markdown$auto_link_node__delegate = function (args__8082__auto__){
var vec__9220 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220,(0),null);
var vec__9221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9221,(0),null);
var _ = cljs.core.nthnext(vec__9221,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9222__i = 0, G__9222__a = new Array(arguments.length -  0);
while (G__9222__i < G__9222__a.length) {G__9222__a[G__9222__i] = arguments[G__9222__i + 0]; ++G__9222__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9222__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__9223){
var args__8082__auto__ = cljs.core.seq(arglist__9223);
return tailrecursion$hoplon$markdown$auto_link_node__delegate(args__8082__auto__);
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
var tailrecursion$hoplon$markdown$exp_image_node__delegate = function (args__8082__auto__){
var vec__9228 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9228,(0),null);
var map__9229__$1 = ((((!((map__9229 == null)))?((((map__9229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9229):map__9229);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9229__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9229__$1,cljs.core.cst$kw$title);
var vec__9230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9228,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9230,(0),null);
var _ = cljs.core.nthnext(vec__9230,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9232__i = 0, G__9232__a = new Array(arguments.length -  0);
while (G__9232__i < G__9232__a.length) {G__9232__a[G__9232__i] = arguments[G__9232__i + 0]; ++G__9232__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9232__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__9233){
var args__8082__auto__ = cljs.core.seq(arglist__9233);
return tailrecursion$hoplon$markdown$exp_image_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$exp_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_image_node__delegate;
return tailrecursion$hoplon$markdown$exp_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_link_node = (function() { 
var tailrecursion$hoplon$markdown$exp_link_node__delegate = function (args__8082__auto__){
var vec__9237 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9237,(0),null);
var map__9238__$1 = ((((!((map__9238 == null)))?((((map__9238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9238):map__9238);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9237,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9240__i = 0, G__9240__a = new Array(arguments.length -  0);
while (G__9240__i < G__9240__a.length) {G__9240__a[G__9240__i] = arguments[G__9240__i + 0]; ++G__9240__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9240__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__9241){
var args__8082__auto__ = cljs.core.seq(arglist__9241);
return tailrecursion$hoplon$markdown$exp_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$exp_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_link_node__delegate;
return tailrecursion$hoplon$markdown$exp_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.header_node = (function() { 
var tailrecursion$hoplon$markdown$header_node__delegate = function (args__8082__auto__){
var vec__9245 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9245,(0),null);
var map__9246__$1 = ((((!((map__9246 == null)))?((((map__9246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9246):map__9246);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9246__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9245,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9248__i = 0, G__9248__a = new Array(arguments.length -  0);
while (G__9248__i < G__9248__a.length) {G__9248__a[G__9248__i] = arguments[G__9248__i + 0]; ++G__9248__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9248__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__9249){
var args__8082__auto__ = cljs.core.seq(arglist__9249);
return tailrecursion$hoplon$markdown$header_node__delegate(args__8082__auto__);
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
var tailrecursion$hoplon$markdown$mail_link_node__delegate = function (args__8082__auto__){
var vec__9256 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9256,(0),null);
var map__9257__$1 = ((((!((map__9257 == null)))?((((map__9257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9257):map__9257);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9257__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9256,(1),null);
var G__9259 = cljs.core.cst$kw$href;
var G__9260 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__9261 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9259,G__9260,G__9261) : tailrecursion.hoplon.a.call(null,G__9259,G__9260,G__9261));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9262__i = 0, G__9262__a = new Array(arguments.length -  0);
while (G__9262__i < G__9262__a.length) {G__9262__a[G__9262__i] = arguments[G__9262__i + 0]; ++G__9262__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9262__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__9263){
var args__8082__auto__ = cljs.core.seq(arglist__9263);
return tailrecursion$hoplon$markdown$mail_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$mail_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$mail_link_node__delegate;
return tailrecursion$hoplon$markdown$mail_link_node;
})()
;
tailrecursion.hoplon.markdown.ordered_list_node = tailrecursion.hoplon.ol;
tailrecursion.hoplon.markdown.para_node = tailrecursion.hoplon.p;
if(typeof tailrecursion.hoplon.markdown.quoted_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5736__auto__ = (function (){var G__9264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9264) : cljs.core.atom.call(null,G__9264));
})();
var prefer_table__5737__auto__ = (function (){var G__9265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9265) : cljs.core.atom.call(null,G__9265));
})();
var method_cache__5738__auto__ = (function (){var G__9266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9266) : cljs.core.atom.call(null,G__9266));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__9267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9267) : cljs.core.atom.call(null,G__9267));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__9268,kids){
var map__9269 = p__9268;
var map__9269__$1 = ((((!((map__9269 == null)))?((((map__9269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9269):map__9269);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9269__$1,cljs.core.cst$kw$type);
return type;
});})(method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__))
,cljs.core.cst$kw$default,hierarchy__5740__auto__,method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__));
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
var tailrecursion$hoplon$markdown$ref_image_node__delegate = function (args__8082__auto__){
var vec__9277 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9277,(0),null);
var map__9278__$1 = ((((!((map__9278 == null)))?((((map__9278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9278):map__9278);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9278__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__9279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9277,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9279,(0),null);
var _ = cljs.core.nthnext(vec__9279,(1));
var kids = vec__9279;
var map__9281 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__9281__$1 = ((((!((map__9281 == null)))?((((map__9281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9281):map__9281);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9281__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9281__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9283__i = 0, G__9283__a = new Array(arguments.length -  0);
while (G__9283__i < G__9283__a.length) {G__9283__a[G__9283__i] = arguments[G__9283__i + 0]; ++G__9283__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9283__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__9284){
var args__8082__auto__ = cljs.core.seq(arglist__9284);
return tailrecursion$hoplon$markdown$ref_image_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$ref_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_image_node__delegate;
return tailrecursion$hoplon$markdown$ref_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_link_node = (function() { 
var tailrecursion$hoplon$markdown$ref_link_node__delegate = function (args__8082__auto__){
var vec__9292 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9292,(0),null);
var map__9293__$1 = ((((!((map__9293 == null)))?((((map__9293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9293):map__9293);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9293__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9293__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9292,(1),null);
var map__9295 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__9295__$1 = ((((!((map__9295 == null)))?((((map__9295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9295):map__9295);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__9297 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__9298 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__9297,G__9298) : tailrecursion.hoplon.a.call(null,G__9297,G__9298));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9299__i = 0, G__9299__a = new Array(arguments.length -  0);
while (G__9299__i < G__9299__a.length) {G__9299__a[G__9299__i] = arguments[G__9299__i + 0]; ++G__9299__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9299__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__9300){
var args__8082__auto__ = cljs.core.seq(arglist__9300);
return tailrecursion$hoplon$markdown$ref_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$ref_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_link_node__delegate;
return tailrecursion$hoplon$markdown$ref_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.reference_node = (function() { 
var tailrecursion$hoplon$markdown$reference_node__delegate = function (args__8082__auto__){
var vec__9302 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9303__i = 0, G__9303__a = new Array(arguments.length -  0);
while (G__9303__i < G__9303__a.length) {G__9303__a[G__9303__i] = arguments[G__9303__i + 0]; ++G__9303__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9303__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__9304){
var args__8082__auto__ = cljs.core.seq(arglist__9304);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5736__auto__ = (function (){var G__9305 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9305) : cljs.core.atom.call(null,G__9305));
})();
var prefer_table__5737__auto__ = (function (){var G__9306 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9306) : cljs.core.atom.call(null,G__9306));
})();
var method_cache__5738__auto__ = (function (){var G__9307 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9307) : cljs.core.atom.call(null,G__9307));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__9308 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9308) : cljs.core.atom.call(null,G__9308));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__9309,_){
var map__9310 = p__9309;
var map__9310__$1 = ((((!((map__9310 == null)))?((((map__9310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9310):map__9310);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9310__$1,cljs.core.cst$kw$type);
return type;
});})(method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__))
,cljs.core.cst$kw$default,hierarchy__5740__auto__,method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__));
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
var tailrecursion$hoplon$markdown$strong_emph_super_node__delegate = function (args__8082__auto__){
var vec__9315 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9315,(0),null);
var map__9316__$1 = ((((!((map__9316 == null)))?((((map__9316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9316):map__9316);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9316__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9316__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9316__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9315,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9318__i = 0, G__9318__a = new Array(arguments.length -  0);
while (G__9318__i < G__9318__a.length) {G__9318__a[G__9318__i] = arguments[G__9318__i + 0]; ++G__9318__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9318__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__9319){
var args__8082__auto__ = cljs.core.seq(arglist__9319);
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$strong_emph_super_node__delegate;
return tailrecursion$hoplon$markdown$strong_emph_super_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_body_node = (function() { 
var tailrecursion$hoplon$markdown$table_body_node__delegate = function (args__8082__auto__){
var vec__9321 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9321,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9321,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9322__i = 0, G__9322__a = new Array(arguments.length -  0);
while (G__9322__i < G__9322__a.length) {G__9322__a[G__9322__i] = arguments[G__9322__i + 0]; ++G__9322__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9322__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__9323){
var args__8082__auto__ = cljs.core.seq(arglist__9323);
return tailrecursion$hoplon$markdown$table_body_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_body_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_body_node__delegate;
return tailrecursion$hoplon$markdown$table_body_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_caption_node = (function() { 
var tailrecursion$hoplon$markdown$table_caption_node__delegate = function (args__8082__auto__){
var vec__9325 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9325,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9325,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9326__i = 0, G__9326__a = new Array(arguments.length -  0);
while (G__9326__i < G__9326__a.length) {G__9326__a[G__9326__i] = arguments[G__9326__i + 0]; ++G__9326__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9326__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__9327){
var args__8082__auto__ = cljs.core.seq(arglist__9327);
return tailrecursion$hoplon$markdown$table_caption_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_caption_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_caption_node__delegate;
return tailrecursion$hoplon$markdown$table_caption_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_cell_node = (function() { 
var tailrecursion$hoplon$markdown$table_cell_node__delegate = function (args__8082__auto__){
var vec__9329 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9329,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9329,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9330__i = 0, G__9330__a = new Array(arguments.length -  0);
while (G__9330__i < G__9330__a.length) {G__9330__a[G__9330__i] = arguments[G__9330__i + 0]; ++G__9330__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9330__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__9331){
var args__8082__auto__ = cljs.core.seq(arglist__9331);
return tailrecursion$hoplon$markdown$table_cell_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_cell_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_cell_node__delegate;
return tailrecursion$hoplon$markdown$table_cell_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_column_node = (function() { 
var tailrecursion$hoplon$markdown$table_column_node__delegate = function (args__8082__auto__){
var vec__9333 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9333,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9333,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9334__i = 0, G__9334__a = new Array(arguments.length -  0);
while (G__9334__i < G__9334__a.length) {G__9334__a[G__9334__i] = arguments[G__9334__i + 0]; ++G__9334__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9334__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__9335){
var args__8082__auto__ = cljs.core.seq(arglist__9335);
return tailrecursion$hoplon$markdown$table_column_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_column_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_column_node__delegate;
return tailrecursion$hoplon$markdown$table_column_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_header_node = (function() { 
var tailrecursion$hoplon$markdown$table_header_node__delegate = function (args__8082__auto__){
var vec__9337 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9337,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9337,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9338__i = 0, G__9338__a = new Array(arguments.length -  0);
while (G__9338__i < G__9338__a.length) {G__9338__a[G__9338__i] = arguments[G__9338__i + 0]; ++G__9338__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9338__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__9339){
var args__8082__auto__ = cljs.core.seq(arglist__9339);
return tailrecursion$hoplon$markdown$table_header_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_header_node__delegate;
return tailrecursion$hoplon$markdown$table_header_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_node = (function() { 
var tailrecursion$hoplon$markdown$table_node__delegate = function (args__8082__auto__){
var vec__9341 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9341,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9341,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9342__i = 0, G__9342__a = new Array(arguments.length -  0);
while (G__9342__i < G__9342__a.length) {G__9342__a[G__9342__i] = arguments[G__9342__i + 0]; ++G__9342__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9342__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__9343){
var args__8082__auto__ = cljs.core.seq(arglist__9343);
return tailrecursion$hoplon$markdown$table_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_node__delegate;
return tailrecursion$hoplon$markdown$table_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_row_node = (function() { 
var tailrecursion$hoplon$markdown$table_row_node__delegate = function (args__8082__auto__){
var vec__9345 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9345,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9345,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9346__i = 0, G__9346__a = new Array(arguments.length -  0);
while (G__9346__i < G__9346__a.length) {G__9346__a[G__9346__i] = arguments[G__9346__i + 0]; ++G__9346__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9346__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__9347){
var args__8082__auto__ = cljs.core.seq(arglist__9347);
return tailrecursion$hoplon$markdown$table_row_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$table_row_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_row_node__delegate;
return tailrecursion$hoplon$markdown$table_row_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.wiki_link_node = (function() { 
var tailrecursion$hoplon$markdown$wiki_link_node__delegate = function (args__8082__auto__){
var vec__9349 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9349,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9349,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9350__i = 0, G__9350__a = new Array(arguments.length -  0);
while (G__9350__i < G__9350__a.length) {G__9350__a[G__9350__i] = arguments[G__9350__i + 0]; ++G__9350__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9350__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__9351){
var args__8082__auto__ = cljs.core.seq(arglist__9351);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
