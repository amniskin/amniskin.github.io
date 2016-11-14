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
var vec__202595 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202595,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202595,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202596__i = 0, G__202596__a = new Array(arguments.length -  0);
while (G__202596__i < G__202596__a.length) {G__202596__a[G__202596__i] = arguments[G__202596__i + 0]; ++G__202596__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202596__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__202597){
var args__8082__auto__ = cljs.core.seq(arglist__202597);
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
var vec__202600 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202600,(0),null);
var vec__202601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202600,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202601,(0),null);
var _ = cljs.core.nthnext(vec__202601,(1));
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,url,url) : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,url,url));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202602__i = 0, G__202602__a = new Array(arguments.length -  0);
while (G__202602__i < G__202602__a.length) {G__202602__a[G__202602__i] = arguments[G__202602__i + 0]; ++G__202602__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202602__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__202603){
var args__8082__auto__ = cljs.core.seq(arglist__202603);
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
var vec__202608 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202608,(0),null);
var map__202609__$1 = ((((!((map__202609 == null)))?((((map__202609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202609):map__202609);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202609__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202609__$1,cljs.core.cst$kw$title);
var vec__202610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202608,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202610,(0),null);
var _ = cljs.core.nthnext(vec__202610,(1));
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202612__i = 0, G__202612__a = new Array(arguments.length -  0);
while (G__202612__i < G__202612__a.length) {G__202612__a[G__202612__i] = arguments[G__202612__i + 0]; ++G__202612__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202612__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__202613){
var args__8082__auto__ = cljs.core.seq(arglist__202613);
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
var vec__202617 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202617,(0),null);
var map__202618__$1 = ((((!((map__202618 == null)))?((((map__202618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202618):map__202618);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202618__$1,cljs.core.cst$kw$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202618__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202617,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202620__i = 0, G__202620__a = new Array(arguments.length -  0);
while (G__202620__i < G__202620__a.length) {G__202620__a[G__202620__i] = arguments[G__202620__i + 0]; ++G__202620__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202620__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__202621){
var args__8082__auto__ = cljs.core.seq(arglist__202621);
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
var vec__202625 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202625,(0),null);
var map__202626__$1 = ((((!((map__202626 == null)))?((((map__202626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202626):map__202626);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202626__$1,cljs.core.cst$kw$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202625,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202628__i = 0, G__202628__a = new Array(arguments.length -  0);
while (G__202628__i < G__202628__a.length) {G__202628__a[G__202628__i] = arguments[G__202628__i + 0]; ++G__202628__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202628__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__202629){
var args__8082__auto__ = cljs.core.seq(arglist__202629);
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
var vec__202636 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202636,(0),null);
var map__202637__$1 = ((((!((map__202637 == null)))?((((map__202637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202637):map__202637);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202637__$1,cljs.core.cst$kw$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202636,(1),null);
var G__202639 = cljs.core.cst$kw$href;
var G__202640 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__202641 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__202639,G__202640,G__202641) : tailrecursion.hoplon.a.call(null,G__202639,G__202640,G__202641));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202642__i = 0, G__202642__a = new Array(arguments.length -  0);
while (G__202642__i < G__202642__a.length) {G__202642__a[G__202642__i] = arguments[G__202642__i + 0]; ++G__202642__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202642__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__202643){
var args__8082__auto__ = cljs.core.seq(arglist__202643);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5736__auto__ = (function (){var G__202644 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202644) : cljs.core.atom.call(null,G__202644));
})();
var prefer_table__5737__auto__ = (function (){var G__202645 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202645) : cljs.core.atom.call(null,G__202645));
})();
var method_cache__5738__auto__ = (function (){var G__202646 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202646) : cljs.core.atom.call(null,G__202646));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__202647 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202647) : cljs.core.atom.call(null,G__202647));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__202648,kids){
var map__202649 = p__202648;
var map__202649__$1 = ((((!((map__202649 == null)))?((((map__202649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202649):map__202649);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202649__$1,cljs.core.cst$kw$type);
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
var vec__202657 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202657,(0),null);
var map__202658__$1 = ((((!((map__202658 == null)))?((((map__202658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202658):map__202658);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202658__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202658__$1,cljs.core.cst$kw$separator_DASH_space);
var vec__202659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202657,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202659,(0),null);
var _ = cljs.core.nthnext(vec__202659,(1));
var kids = vec__202659;
var map__202661 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__202661__$1 = ((((!((map__202661 == null)))?((((map__202661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202661):map__202661);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202661__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202661__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt) : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,url,cljs.core.cst$kw$title,title,cljs.core.cst$kw$alt,alt));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202663__i = 0, G__202663__a = new Array(arguments.length -  0);
while (G__202663__i < G__202663__a.length) {G__202663__a[G__202663__i] = arguments[G__202663__i + 0]; ++G__202663__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202663__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__202664){
var args__8082__auto__ = cljs.core.seq(arglist__202664);
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
var vec__202672 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202672,(0),null);
var map__202673__$1 = ((((!((map__202673 == null)))?((((map__202673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202673):map__202673);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202673__$1,cljs.core.cst$kw$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202673__$1,cljs.core.cst$kw$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202672,(1),null);
var map__202675 = (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(rk) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,rk));
var map__202675__$1 = ((((!((map__202675 == null)))?((((map__202675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202675):map__202675);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202675__$1,cljs.core.cst$kw$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202675__$1,cljs.core.cst$kw$url);
if(cljs.core.truth_(url)){
var G__202677 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$title,title], null);
var G__202678 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__202677,G__202678) : tailrecursion.hoplon.a.call(null,G__202677,G__202678));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202679__i = 0, G__202679__a = new Array(arguments.length -  0);
while (G__202679__i < G__202679__a.length) {G__202679__a[G__202679__i] = arguments[G__202679__i + 0]; ++G__202679__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202679__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__202680){
var args__8082__auto__ = cljs.core.seq(arglist__202680);
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
var vec__202682 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202682,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202682,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202683__i = 0, G__202683__a = new Array(arguments.length -  0);
while (G__202683__i < G__202683__a.length) {G__202683__a[G__202683__i] = arguments[G__202683__i + 0]; ++G__202683__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202683__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__202684){
var args__8082__auto__ = cljs.core.seq(arglist__202684);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5736__auto__ = (function (){var G__202685 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202685) : cljs.core.atom.call(null,G__202685));
})();
var prefer_table__5737__auto__ = (function (){var G__202686 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202686) : cljs.core.atom.call(null,G__202686));
})();
var method_cache__5738__auto__ = (function (){var G__202687 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202687) : cljs.core.atom.call(null,G__202687));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__202688 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__202688) : cljs.core.atom.call(null,G__202688));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (p__202689,_){
var map__202690 = p__202689;
var map__202690__$1 = ((((!((map__202690 == null)))?((((map__202690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202690):map__202690);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202690__$1,cljs.core.cst$kw$type);
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
var vec__202695 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202695,(0),null);
var map__202696__$1 = ((((!((map__202696 == null)))?((((map__202696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202696):map__202696);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202696__$1,cljs.core.cst$kw$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202696__$1,cljs.core.cst$kw$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202696__$1,cljs.core.cst$kw$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202695,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202698__i = 0, G__202698__a = new Array(arguments.length -  0);
while (G__202698__i < G__202698__a.length) {G__202698__a[G__202698__i] = arguments[G__202698__i + 0]; ++G__202698__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202698__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__202699){
var args__8082__auto__ = cljs.core.seq(arglist__202699);
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
var vec__202701 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202701,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202701,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202702__i = 0, G__202702__a = new Array(arguments.length -  0);
while (G__202702__i < G__202702__a.length) {G__202702__a[G__202702__i] = arguments[G__202702__i + 0]; ++G__202702__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202702__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__202703){
var args__8082__auto__ = cljs.core.seq(arglist__202703);
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
var vec__202705 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202705,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202705,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202706__i = 0, G__202706__a = new Array(arguments.length -  0);
while (G__202706__i < G__202706__a.length) {G__202706__a[G__202706__i] = arguments[G__202706__i + 0]; ++G__202706__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202706__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__202707){
var args__8082__auto__ = cljs.core.seq(arglist__202707);
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
var vec__202709 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202709,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202709,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202710__i = 0, G__202710__a = new Array(arguments.length -  0);
while (G__202710__i < G__202710__a.length) {G__202710__a[G__202710__i] = arguments[G__202710__i + 0]; ++G__202710__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202710__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__202711){
var args__8082__auto__ = cljs.core.seq(arglist__202711);
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
var vec__202713 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202713,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202713,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202714__i = 0, G__202714__a = new Array(arguments.length -  0);
while (G__202714__i < G__202714__a.length) {G__202714__a[G__202714__i] = arguments[G__202714__i + 0]; ++G__202714__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202714__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__202715){
var args__8082__auto__ = cljs.core.seq(arglist__202715);
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
var vec__202717 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202717,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202717,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202718__i = 0, G__202718__a = new Array(arguments.length -  0);
while (G__202718__i < G__202718__a.length) {G__202718__a[G__202718__i] = arguments[G__202718__i + 0]; ++G__202718__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202718__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__202719){
var args__8082__auto__ = cljs.core.seq(arglist__202719);
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
var vec__202721 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202721,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202721,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202722__i = 0, G__202722__a = new Array(arguments.length -  0);
while (G__202722__i < G__202722__a.length) {G__202722__a[G__202722__i] = arguments[G__202722__i + 0]; ++G__202722__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202722__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__202723){
var args__8082__auto__ = cljs.core.seq(arglist__202723);
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
var vec__202725 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202725,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202725,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202726__i = 0, G__202726__a = new Array(arguments.length -  0);
while (G__202726__i < G__202726__a.length) {G__202726__a[G__202726__i] = arguments[G__202726__i + 0]; ++G__202726__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202726__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__202727){
var args__8082__auto__ = cljs.core.seq(arglist__202727);
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
var vec__202729 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202729,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202729,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202730__i = 0, G__202730__a = new Array(arguments.length -  0);
while (G__202730__i < G__202730__a.length) {G__202730__a[G__202730__i] = arguments[G__202730__i + 0]; ++G__202730__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202730__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__8082__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__202731){
var args__8082__auto__ = cljs.core.seq(arglist__202731);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__8082__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
