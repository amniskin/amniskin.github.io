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
var vec__9963 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9964__i = 0, G__9964__a = new Array(arguments.length -  0);
while (G__9964__i < G__9964__a.length) {G__9964__a[G__9964__i] = arguments[G__9964__i + 0]; ++G__9964__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9964__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__9965){
var args__8082__auto__ = cljs.core.seq(arglist__9965);
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
var vec__9968 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9968,(0),null);
var vec__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9968,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9969,(0),null);
var _ = cljs.core.nthnext(vec__9969,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9970__i = 0, G__9970__a = new Array(arguments.length -  0);
while (G__9970__i < G__9970__a.length) {G__9970__a[G__9970__i] = arguments[G__9970__i + 0]; ++G__9970__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9970__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__9971){
var args__8082__auto__ = cljs.core.seq(arglist__9971);
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
var vec__9976 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9976,(0),null);
var map__9977__$1 = ((((!((map__9977 == null)))?((((map__9977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9977):map__9977);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9977__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9977__$1,cljs.core.cst$kw$title);
var vec__9978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9976,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9978,(0),null);
var _ = cljs.core.nthnext(vec__9978,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9980__i = 0, G__9980__a = new Array(arguments.length -  0);
while (G__9980__i < G__9980__a.length) {G__9980__a[G__9980__i] = arguments[G__9980__i + 0]; ++G__9980__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9980__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__9981){
var args__8082__auto__ = cljs.core.seq(arglist__9981);
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
var vec__9985 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9985,(0),null);
var map__9986__$1 = ((((!((map__9986 == null)))?((((map__9986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9986):map__9986);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9986__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9985,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9988__i = 0, G__9988__a = new Array(arguments.length -  0);
while (G__9988__i < G__9988__a.length) {G__9988__a[G__9988__i] = arguments[G__9988__i + 0]; ++G__9988__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9988__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__9989){
var args__8082__auto__ = cljs.core.seq(arglist__9989);
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
var vec__9993 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993,(0),null);
var map__9994__$1 = ((((!((map__9994 == null)))?((((map__9994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9994):map__9994);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9994__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9993,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9996__i = 0, G__9996__a = new Array(arguments.length -  0);
while (G__9996__i < G__9996__a.length) {G__9996__a[G__9996__i] = arguments[G__9996__i + 0]; ++G__9996__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9996__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__9997){
var args__8082__auto__ = cljs.core.seq(arglist__9997);
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
var vec__10004 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10004,(0),null);
var map__10005__$1 = ((((!((map__10005 == null)))?((((map__10005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10005):map__10005);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10005__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10004,(1),null);
var G__10007 = cljs.core.cst$kw$href;
var G__10008 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__10009 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__10007,G__10008,G__10009) : tailrecursion.hoplon.a.call(null,G__10007,G__10008,G__10009));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10010__i = 0, G__10010__a = new Array(arguments.length -  0);
while (G__10010__i < G__10010__a.length) {G__10010__a[G__10010__i] = arguments[G__10010__i + 0]; ++G__10010__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10010__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__10011){
var args__8082__auto__ = cljs.core.seq(arglist__10011);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5736__auto__ = (function (){var G__10012 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10012) : cljs.core.atom.call(null,G__10012));
})();
var prefer_table__5737__auto__ = (function (){var G__10013 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10013) : cljs.core.atom.call(null,G__10013));
})();
var method_cache__5738__auto__ = (function (){var G__10014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10014) : cljs.core.atom.call(null,G__10014));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__10015 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10015) : cljs.core.atom.call(null,G__10015));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__10016,kids){
var map__10017 = p__10016;
var map__10017__$1 = ((((!((map__10017 == null)))?((((map__10017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10017):map__10017);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10017__$1,cljs.core.cst$kw$type);
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
var vec__10025 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10025,(0),null);
var map__10026__$1 = ((((!((map__10026 == null)))?((((map__10026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10026):map__10026);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10026__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10026__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__10027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10025,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10027,(0),null);
var _ = cljs.core.nthnext(vec__10027,(1));
var kids = vec__10027;
var map__10029 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__10029__$1 = ((((!((map__10029 == null)))?((((map__10029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10029):map__10029);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10029__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10029__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10031__i = 0, G__10031__a = new Array(arguments.length -  0);
while (G__10031__i < G__10031__a.length) {G__10031__a[G__10031__i] = arguments[G__10031__i + 0]; ++G__10031__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10031__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__10032){
var args__8082__auto__ = cljs.core.seq(arglist__10032);
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
var vec__10040 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10040,(0),null);
var map__10041__$1 = ((((!((map__10041 == null)))?((((map__10041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10041):map__10041);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10041__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10041__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10040,(1),null);
var map__10043 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__10043__$1 = ((((!((map__10043 == null)))?((((map__10043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10043):map__10043);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10043__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10043__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__10045 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__10046 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__10045,G__10046) : tailrecursion.hoplon.a.call(null,G__10045,G__10046));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10047__i = 0, G__10047__a = new Array(arguments.length -  0);
while (G__10047__i < G__10047__a.length) {G__10047__a[G__10047__i] = arguments[G__10047__i + 0]; ++G__10047__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10047__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__10048){
var args__8082__auto__ = cljs.core.seq(arglist__10048);
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
var vec__10050 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10051__i = 0, G__10051__a = new Array(arguments.length -  0);
while (G__10051__i < G__10051__a.length) {G__10051__a[G__10051__i] = arguments[G__10051__i + 0]; ++G__10051__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10051__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__10052){
var args__8082__auto__ = cljs.core.seq(arglist__10052);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5736__auto__ = (function (){var G__10053 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10053) : cljs.core.atom.call(null,G__10053));
})();
var prefer_table__5737__auto__ = (function (){var G__10054 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10054) : cljs.core.atom.call(null,G__10054));
})();
var method_cache__5738__auto__ = (function (){var G__10055 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10055) : cljs.core.atom.call(null,G__10055));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__10056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10056) : cljs.core.atom.call(null,G__10056));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__10057,_){
var map__10058 = p__10057;
var map__10058__$1 = ((((!((map__10058 == null)))?((((map__10058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10058):map__10058);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10058__$1,cljs.core.cst$kw$type);
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
var vec__10063 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__10064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063,(0),null);
var map__10064__$1 = ((((!((map__10064 == null)))?((((map__10064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10064):map__10064);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10064__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10064__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10064__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10066__i = 0, G__10066__a = new Array(arguments.length -  0);
while (G__10066__i < G__10066__a.length) {G__10066__a[G__10066__i] = arguments[G__10066__i + 0]; ++G__10066__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10066__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__10067){
var args__8082__auto__ = cljs.core.seq(arglist__10067);
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
var vec__10069 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10069,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10070__i = 0, G__10070__a = new Array(arguments.length -  0);
while (G__10070__i < G__10070__a.length) {G__10070__a[G__10070__i] = arguments[G__10070__i + 0]; ++G__10070__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10070__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__10071){
var args__8082__auto__ = cljs.core.seq(arglist__10071);
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
var vec__10073 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10073,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10073,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10074__i = 0, G__10074__a = new Array(arguments.length -  0);
while (G__10074__i < G__10074__a.length) {G__10074__a[G__10074__i] = arguments[G__10074__i + 0]; ++G__10074__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10074__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__10075){
var args__8082__auto__ = cljs.core.seq(arglist__10075);
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
var vec__10077 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10077,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10077,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10078__i = 0, G__10078__a = new Array(arguments.length -  0);
while (G__10078__i < G__10078__a.length) {G__10078__a[G__10078__i] = arguments[G__10078__i + 0]; ++G__10078__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10078__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__10079){
var args__8082__auto__ = cljs.core.seq(arglist__10079);
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
var vec__10081 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10081,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10081,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10082__i = 0, G__10082__a = new Array(arguments.length -  0);
while (G__10082__i < G__10082__a.length) {G__10082__a[G__10082__i] = arguments[G__10082__i + 0]; ++G__10082__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10082__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__10083){
var args__8082__auto__ = cljs.core.seq(arglist__10083);
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
var vec__10085 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10086__i = 0, G__10086__a = new Array(arguments.length -  0);
while (G__10086__i < G__10086__a.length) {G__10086__a[G__10086__i] = arguments[G__10086__i + 0]; ++G__10086__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10086__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__10087){
var args__8082__auto__ = cljs.core.seq(arglist__10087);
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
var vec__10089 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10089,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10089,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10090__i = 0, G__10090__a = new Array(arguments.length -  0);
while (G__10090__i < G__10090__a.length) {G__10090__a[G__10090__i] = arguments[G__10090__i + 0]; ++G__10090__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10090__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__10091){
var args__8082__auto__ = cljs.core.seq(arglist__10091);
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
var vec__10093 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10094__i = 0, G__10094__a = new Array(arguments.length -  0);
while (G__10094__i < G__10094__a.length) {G__10094__a[G__10094__i] = arguments[G__10094__i + 0]; ++G__10094__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10094__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__10095){
var args__8082__auto__ = cljs.core.seq(arglist__10095);
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
var vec__10097 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__10098__i = 0, G__10098__a = new Array(arguments.length -  0);
while (G__10098__i < G__10098__a.length) {G__10098__a[G__10098__i] = arguments[G__10098__i + 0]; ++G__10098__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__10098__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__10099){
var args__8082__auto__ = cljs.core.seq(arglist__10099);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
