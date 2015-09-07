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
var vec__181391 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181391,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181391,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181392__i = 0, G__181392__a = new Array(arguments.length -  0);
while (G__181392__i < G__181392__a.length) {G__181392__a[G__181392__i] = arguments[G__181392__i + 0]; ++G__181392__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181392__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__181393){
var args__8262__auto__ = cljs.core.seq(arglist__181393);
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
var vec__181396 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181396,(0),null);
var vec__181397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181396,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181397,(0),null);
var _ = cljs.core.nthnext(vec__181397,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181398__i = 0, G__181398__a = new Array(arguments.length -  0);
while (G__181398__i < G__181398__a.length) {G__181398__a[G__181398__i] = arguments[G__181398__i + 0]; ++G__181398__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181398__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__181399){
var args__8262__auto__ = cljs.core.seq(arglist__181399);
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
var vec__181404 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181404,(0),null);
var map__181405__$1 = ((((!((map__181405 == null)))?((((map__181405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181405):map__181405);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181405__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181405__$1,cljs.core.cst$kw$title);
var vec__181406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181404,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181406,(0),null);
var _ = cljs.core.nthnext(vec__181406,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181408__i = 0, G__181408__a = new Array(arguments.length -  0);
while (G__181408__i < G__181408__a.length) {G__181408__a[G__181408__i] = arguments[G__181408__i + 0]; ++G__181408__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181408__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__181409){
var args__8262__auto__ = cljs.core.seq(arglist__181409);
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
var vec__181413 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181413,(0),null);
var map__181414__$1 = ((((!((map__181414 == null)))?((((map__181414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181414):map__181414);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181414__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181414__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181413,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181416__i = 0, G__181416__a = new Array(arguments.length -  0);
while (G__181416__i < G__181416__a.length) {G__181416__a[G__181416__i] = arguments[G__181416__i + 0]; ++G__181416__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181416__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__181417){
var args__8262__auto__ = cljs.core.seq(arglist__181417);
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
var vec__181421 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181421,(0),null);
var map__181422__$1 = ((((!((map__181422 == null)))?((((map__181422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181422):map__181422);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181422__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181421,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181424__i = 0, G__181424__a = new Array(arguments.length -  0);
while (G__181424__i < G__181424__a.length) {G__181424__a[G__181424__i] = arguments[G__181424__i + 0]; ++G__181424__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181424__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__181425){
var args__8262__auto__ = cljs.core.seq(arglist__181425);
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
var vec__181432 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181432,(0),null);
var map__181433__$1 = ((((!((map__181433 == null)))?((((map__181433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181433):map__181433);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181433__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181432,(1),null);
var G__181435 = cljs.core.cst$kw$href;
var G__181436 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__181437 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__181435,G__181436,G__181437) : tailrecursion.hoplon.a.call(null,G__181435,G__181436,G__181437));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181438__i = 0, G__181438__a = new Array(arguments.length -  0);
while (G__181438__i < G__181438__a.length) {G__181438__a[G__181438__i] = arguments[G__181438__i + 0]; ++G__181438__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181438__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__181439){
var args__8262__auto__ = cljs.core.seq(arglist__181439);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5916__auto__ = (function (){var G__181440 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181440) : cljs.core.atom.call(null,G__181440));
})();
var prefer_table__5917__auto__ = (function (){var G__181441 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181441) : cljs.core.atom.call(null,G__181441));
})();
var method_cache__5918__auto__ = (function (){var G__181442 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181442) : cljs.core.atom.call(null,G__181442));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__181443 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181443) : cljs.core.atom.call(null,G__181443));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__181444,kids){
var map__181445 = p__181444;
var map__181445__$1 = ((((!((map__181445 == null)))?((((map__181445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181445):map__181445);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181445__$1,cljs.core.cst$kw$type);
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
var vec__181453 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181453,(0),null);
var map__181454__$1 = ((((!((map__181454 == null)))?((((map__181454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181454):map__181454);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181454__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181454__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__181455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181453,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181455,(0),null);
var _ = cljs.core.nthnext(vec__181455,(1));
var kids = vec__181455;
var map__181457 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__181457__$1 = ((((!((map__181457 == null)))?((((map__181457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181457):map__181457);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181457__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181457__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181459__i = 0, G__181459__a = new Array(arguments.length -  0);
while (G__181459__i < G__181459__a.length) {G__181459__a[G__181459__i] = arguments[G__181459__i + 0]; ++G__181459__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181459__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__181460){
var args__8262__auto__ = cljs.core.seq(arglist__181460);
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
var vec__181468 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181468,(0),null);
var map__181469__$1 = ((((!((map__181469 == null)))?((((map__181469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181469):map__181469);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181469__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181469__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181468,(1),null);
var map__181471 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__181471__$1 = ((((!((map__181471 == null)))?((((map__181471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181471):map__181471);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181471__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181471__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__181473 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__181474 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__181473,G__181474) : tailrecursion.hoplon.a.call(null,G__181473,G__181474));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181475__i = 0, G__181475__a = new Array(arguments.length -  0);
while (G__181475__i < G__181475__a.length) {G__181475__a[G__181475__i] = arguments[G__181475__i + 0]; ++G__181475__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181475__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__181476){
var args__8262__auto__ = cljs.core.seq(arglist__181476);
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
var vec__181478 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181478,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181478,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181479__i = 0, G__181479__a = new Array(arguments.length -  0);
while (G__181479__i < G__181479__a.length) {G__181479__a[G__181479__i] = arguments[G__181479__i + 0]; ++G__181479__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181479__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__181480){
var args__8262__auto__ = cljs.core.seq(arglist__181480);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5916__auto__ = (function (){var G__181481 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181481) : cljs.core.atom.call(null,G__181481));
})();
var prefer_table__5917__auto__ = (function (){var G__181482 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181482) : cljs.core.atom.call(null,G__181482));
})();
var method_cache__5918__auto__ = (function (){var G__181483 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181483) : cljs.core.atom.call(null,G__181483));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__181484 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__181484) : cljs.core.atom.call(null,G__181484));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (p__181485,_){
var map__181486 = p__181485;
var map__181486__$1 = ((((!((map__181486 == null)))?((((map__181486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181486):map__181486);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181486__$1,cljs.core.cst$kw$type);
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
var vec__181491 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181491,(0),null);
var map__181492__$1 = ((((!((map__181492 == null)))?((((map__181492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181492):map__181492);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181492__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181492__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181492__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181491,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181494__i = 0, G__181494__a = new Array(arguments.length -  0);
while (G__181494__i < G__181494__a.length) {G__181494__a[G__181494__i] = arguments[G__181494__i + 0]; ++G__181494__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181494__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__181495){
var args__8262__auto__ = cljs.core.seq(arglist__181495);
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
var vec__181497 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181497,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181497,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181498__i = 0, G__181498__a = new Array(arguments.length -  0);
while (G__181498__i < G__181498__a.length) {G__181498__a[G__181498__i] = arguments[G__181498__i + 0]; ++G__181498__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181498__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__181499){
var args__8262__auto__ = cljs.core.seq(arglist__181499);
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
var vec__181501 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181501,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181501,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181502__i = 0, G__181502__a = new Array(arguments.length -  0);
while (G__181502__i < G__181502__a.length) {G__181502__a[G__181502__i] = arguments[G__181502__i + 0]; ++G__181502__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181502__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__181503){
var args__8262__auto__ = cljs.core.seq(arglist__181503);
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
var vec__181505 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181505,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181505,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181506__i = 0, G__181506__a = new Array(arguments.length -  0);
while (G__181506__i < G__181506__a.length) {G__181506__a[G__181506__i] = arguments[G__181506__i + 0]; ++G__181506__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181506__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__181507){
var args__8262__auto__ = cljs.core.seq(arglist__181507);
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
var vec__181509 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181509,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181509,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181510__i = 0, G__181510__a = new Array(arguments.length -  0);
while (G__181510__i < G__181510__a.length) {G__181510__a[G__181510__i] = arguments[G__181510__i + 0]; ++G__181510__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181510__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__181511){
var args__8262__auto__ = cljs.core.seq(arglist__181511);
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
var vec__181513 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181513,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181513,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181514__i = 0, G__181514__a = new Array(arguments.length -  0);
while (G__181514__i < G__181514__a.length) {G__181514__a[G__181514__i] = arguments[G__181514__i + 0]; ++G__181514__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181514__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__181515){
var args__8262__auto__ = cljs.core.seq(arglist__181515);
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
var vec__181517 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181517,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181517,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181518__i = 0, G__181518__a = new Array(arguments.length -  0);
while (G__181518__i < G__181518__a.length) {G__181518__a[G__181518__i] = arguments[G__181518__i + 0]; ++G__181518__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181518__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__181519){
var args__8262__auto__ = cljs.core.seq(arglist__181519);
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
var vec__181521 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181521,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181521,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181522__i = 0, G__181522__a = new Array(arguments.length -  0);
while (G__181522__i < G__181522__a.length) {G__181522__a[G__181522__i] = arguments[G__181522__i + 0]; ++G__181522__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181522__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__181523){
var args__8262__auto__ = cljs.core.seq(arglist__181523);
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
var vec__181525 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181525,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181525,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181526__i = 0, G__181526__a = new Array(arguments.length -  0);
while (G__181526__i < G__181526__a.length) {G__181526__a[G__181526__i] = arguments[G__181526__i + 0]; ++G__181526__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181526__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8262__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__181527){
var args__8262__auto__ = cljs.core.seq(arglist__181527);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8262__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
