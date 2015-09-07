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
var vec__9395 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9395,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9395,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9396__i = 0, G__9396__a = new Array(arguments.length -  0);
while (G__9396__i < G__9396__a.length) {G__9396__a[G__9396__i] = arguments[G__9396__i + 0]; ++G__9396__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9396__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__9397){
var args__8262__auto__ = cljs.core.seq(arglist__9397);
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
var vec__9400 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9400,(0),null);
var vec__9401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9400,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9401,(0),null);
var _ = cljs.core.nthnext(vec__9401,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9402__i = 0, G__9402__a = new Array(arguments.length -  0);
while (G__9402__i < G__9402__a.length) {G__9402__a[G__9402__i] = arguments[G__9402__i + 0]; ++G__9402__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9402__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__9403){
var args__8262__auto__ = cljs.core.seq(arglist__9403);
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
var vec__9408 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9408,(0),null);
var map__9409__$1 = ((((!((map__9409 == null)))?((((map__9409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9409):map__9409);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9409__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9409__$1,cljs.core.cst$kw$title);
var vec__9410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9408,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,(0),null);
var _ = cljs.core.nthnext(vec__9410,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9412__i = 0, G__9412__a = new Array(arguments.length -  0);
while (G__9412__i < G__9412__a.length) {G__9412__a[G__9412__i] = arguments[G__9412__i + 0]; ++G__9412__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9412__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__9413){
var args__8262__auto__ = cljs.core.seq(arglist__9413);
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
var vec__9417 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9417,(0),null);
var map__9418__$1 = ((((!((map__9418 == null)))?((((map__9418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9418):map__9418);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9418__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9418__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9417,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9420__i = 0, G__9420__a = new Array(arguments.length -  0);
while (G__9420__i < G__9420__a.length) {G__9420__a[G__9420__i] = arguments[G__9420__i + 0]; ++G__9420__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9420__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__9421){
var args__8262__auto__ = cljs.core.seq(arglist__9421);
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
var vec__9425 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9425,(0),null);
var map__9426__$1 = ((((!((map__9426 == null)))?((((map__9426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9426):map__9426);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9426__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9425,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9428__i = 0, G__9428__a = new Array(arguments.length -  0);
while (G__9428__i < G__9428__a.length) {G__9428__a[G__9428__i] = arguments[G__9428__i + 0]; ++G__9428__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9428__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__9429){
var args__8262__auto__ = cljs.core.seq(arglist__9429);
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
var vec__9436 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9436,(0),null);
var map__9437__$1 = ((((!((map__9437 == null)))?((((map__9437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9437):map__9437);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9437__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9436,(1),null);
var G__9439 = cljs.core.cst$kw$href;
var G__9440 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__9441 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9439,G__9440,G__9441) : tailrecursion.hoplon.a.call(null,G__9439,G__9440,G__9441));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9442__i = 0, G__9442__a = new Array(arguments.length -  0);
while (G__9442__i < G__9442__a.length) {G__9442__a[G__9442__i] = arguments[G__9442__i + 0]; ++G__9442__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9442__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__9443){
var args__8262__auto__ = cljs.core.seq(arglist__9443);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = (function (){var G__9444 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9444) : cljs.core.atom.call(null,G__9444));
})();
var prefer_table__5917__auto__ = (function (){var G__9445 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9445) : cljs.core.atom.call(null,G__9445));
})();
var method_cache__5918__auto__ = (function (){var G__9446 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9446) : cljs.core.atom.call(null,G__9446));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9447 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9447) : cljs.core.atom.call(null,G__9447));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__9448,kids){
var map__9449 = p__9448;
var map__9449__$1 = ((((!((map__9449 == null)))?((((map__9449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9449):map__9449);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9449__$1,cljs.core.cst$kw$type);
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
var vec__9457 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9457,(0),null);
var map__9458__$1 = ((((!((map__9458 == null)))?((((map__9458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9458):map__9458);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9458__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9458__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__9459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9457,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9459,(0),null);
var _ = cljs.core.nthnext(vec__9459,(1));
var kids = vec__9459;
var map__9461 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__9461__$1 = ((((!((map__9461 == null)))?((((map__9461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9461):map__9461);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9461__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9461__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9463__i = 0, G__9463__a = new Array(arguments.length -  0);
while (G__9463__i < G__9463__a.length) {G__9463__a[G__9463__i] = arguments[G__9463__i + 0]; ++G__9463__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9463__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__9464){
var args__8262__auto__ = cljs.core.seq(arglist__9464);
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
var vec__9472 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(0),null);
var map__9473__$1 = ((((!((map__9473 == null)))?((((map__9473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9473):map__9473);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9473__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9473__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(1),null);
var map__9475 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__9475__$1 = ((((!((map__9475 == null)))?((((map__9475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9475):map__9475);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9475__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9475__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__9477 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__9478 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__9477,G__9478) : tailrecursion.hoplon.a.call(null,G__9477,G__9478));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9479__i = 0, G__9479__a = new Array(arguments.length -  0);
while (G__9479__i < G__9479__a.length) {G__9479__a[G__9479__i] = arguments[G__9479__i + 0]; ++G__9479__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9479__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__9480){
var args__8262__auto__ = cljs.core.seq(arglist__9480);
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
var vec__9482 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9482,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9482,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9483__i = 0, G__9483__a = new Array(arguments.length -  0);
while (G__9483__i < G__9483__a.length) {G__9483__a[G__9483__i] = arguments[G__9483__i + 0]; ++G__9483__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9483__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__9484){
var args__8262__auto__ = cljs.core.seq(arglist__9484);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = (function (){var G__9485 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9485) : cljs.core.atom.call(null,G__9485));
})();
var prefer_table__5917__auto__ = (function (){var G__9486 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9486) : cljs.core.atom.call(null,G__9486));
})();
var method_cache__5918__auto__ = (function (){var G__9487 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9487) : cljs.core.atom.call(null,G__9487));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9488 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9488) : cljs.core.atom.call(null,G__9488));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__9489,_){
var map__9490 = p__9489;
var map__9490__$1 = ((((!((map__9490 == null)))?((((map__9490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9490):map__9490);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9490__$1,cljs.core.cst$kw$type);
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
var vec__9495 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9495,(0),null);
var map__9496__$1 = ((((!((map__9496 == null)))?((((map__9496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9496):map__9496);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9496__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9495,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9498__i = 0, G__9498__a = new Array(arguments.length -  0);
while (G__9498__i < G__9498__a.length) {G__9498__a[G__9498__i] = arguments[G__9498__i + 0]; ++G__9498__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9498__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__9499){
var args__8262__auto__ = cljs.core.seq(arglist__9499);
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
var vec__9501 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9501,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9501,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9502__i = 0, G__9502__a = new Array(arguments.length -  0);
while (G__9502__i < G__9502__a.length) {G__9502__a[G__9502__i] = arguments[G__9502__i + 0]; ++G__9502__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9502__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__9503){
var args__8262__auto__ = cljs.core.seq(arglist__9503);
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
var vec__9505 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9505,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9505,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9506__i = 0, G__9506__a = new Array(arguments.length -  0);
while (G__9506__i < G__9506__a.length) {G__9506__a[G__9506__i] = arguments[G__9506__i + 0]; ++G__9506__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9506__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__9507){
var args__8262__auto__ = cljs.core.seq(arglist__9507);
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
var vec__9509 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9509,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9509,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9510__i = 0, G__9510__a = new Array(arguments.length -  0);
while (G__9510__i < G__9510__a.length) {G__9510__a[G__9510__i] = arguments[G__9510__i + 0]; ++G__9510__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9510__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__9511){
var args__8262__auto__ = cljs.core.seq(arglist__9511);
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
var vec__9513 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9513,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9513,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9514__i = 0, G__9514__a = new Array(arguments.length -  0);
while (G__9514__i < G__9514__a.length) {G__9514__a[G__9514__i] = arguments[G__9514__i + 0]; ++G__9514__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9514__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__9515){
var args__8262__auto__ = cljs.core.seq(arglist__9515);
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
var vec__9517 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9517,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9517,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9518__i = 0, G__9518__a = new Array(arguments.length -  0);
while (G__9518__i < G__9518__a.length) {G__9518__a[G__9518__i] = arguments[G__9518__i + 0]; ++G__9518__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9518__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__9519){
var args__8262__auto__ = cljs.core.seq(arglist__9519);
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
var vec__9521 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9522__i = 0, G__9522__a = new Array(arguments.length -  0);
while (G__9522__i < G__9522__a.length) {G__9522__a[G__9522__i] = arguments[G__9522__i + 0]; ++G__9522__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9522__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__9523){
var args__8262__auto__ = cljs.core.seq(arglist__9523);
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
var vec__9525 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9525,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9525,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9526__i = 0, G__9526__a = new Array(arguments.length -  0);
while (G__9526__i < G__9526__a.length) {G__9526__a[G__9526__i] = arguments[G__9526__i + 0]; ++G__9526__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9526__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__9527){
var args__8262__auto__ = cljs.core.seq(arglist__9527);
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
var vec__9529 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9529,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9529,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9530__i = 0, G__9530__a = new Array(arguments.length -  0);
while (G__9530__i < G__9530__a.length) {G__9530__a[G__9530__i] = arguments[G__9530__i + 0]; ++G__9530__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9530__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__9531){
var args__8262__auto__ = cljs.core.seq(arglist__9531);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
