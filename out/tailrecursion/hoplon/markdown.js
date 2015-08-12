// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
var tailrecursion$hoplon$markdown$abbreviation_node__delegate = function (args__10403__auto__){
var vec__109144 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109144,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109144,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109145__i = 0, G__109145__a = new Array(arguments.length -  0);
while (G__109145__i < G__109145__a.length) {G__109145__a[G__109145__i] = arguments[G__109145__i + 0]; ++G__109145__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109145__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__109146){
var args__10403__auto__ = cljs.core.seq(arglist__109146);
return tailrecursion$hoplon$markdown$abbreviation_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$abbreviation_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$abbreviation_node__delegate;
return tailrecursion$hoplon$markdown$abbreviation_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.auto_link_node = (function() { 
var tailrecursion$hoplon$markdown$auto_link_node__delegate = function (args__10403__auto__){
var vec__109152 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109152,(0),null);
var vec__109153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109152,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109153,(0),null);
var _ = cljs.core.nthnext(vec__109153,(1));
var G__109154 = cljs.core.constant$keyword$href;
var G__109155 = url;
var G__109156 = url;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__109154,G__109155,G__109156) : tailrecursion.hoplon.a.call(null,G__109154,G__109155,G__109156));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109157__i = 0, G__109157__a = new Array(arguments.length -  0);
while (G__109157__i < G__109157__a.length) {G__109157__a[G__109157__i] = arguments[G__109157__i + 0]; ++G__109157__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109157__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__109158){
var args__10403__auto__ = cljs.core.seq(arglist__109158);
return tailrecursion$hoplon$markdown$auto_link_node__delegate(args__10403__auto__);
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
var tailrecursion$hoplon$markdown$exp_image_node__delegate = function (args__10403__auto__){
var vec__109168 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109168,(0),null);
var map__109169__$1 = ((cljs.core.seq_QMARK_(map__109169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109169):map__109169);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109169__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109169__$1,cljs.core.constant$keyword$title);
var vec__109170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109168,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109170,(0),null);
var _ = cljs.core.nthnext(vec__109170,(1));
var G__109171 = cljs.core.constant$keyword$src;
var G__109172 = url;
var G__109173 = cljs.core.constant$keyword$title;
var G__109174 = title;
var G__109175 = cljs.core.constant$keyword$alt;
var G__109176 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__109171,G__109172,G__109173,G__109174,G__109175,G__109176) : tailrecursion.hoplon.img.call(null,G__109171,G__109172,G__109173,G__109174,G__109175,G__109176));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109177__i = 0, G__109177__a = new Array(arguments.length -  0);
while (G__109177__i < G__109177__a.length) {G__109177__a[G__109177__i] = arguments[G__109177__i + 0]; ++G__109177__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109177__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__109178){
var args__10403__auto__ = cljs.core.seq(arglist__109178);
return tailrecursion$hoplon$markdown$exp_image_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$exp_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_image_node__delegate;
return tailrecursion$hoplon$markdown$exp_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.exp_link_node = (function() { 
var tailrecursion$hoplon$markdown$exp_link_node__delegate = function (args__10403__auto__){
var vec__109181 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109181,(0),null);
var map__109182__$1 = ((cljs.core.seq_QMARK_(map__109182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109182):map__109182);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109182__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109182__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109181,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109183__i = 0, G__109183__a = new Array(arguments.length -  0);
while (G__109183__i < G__109183__a.length) {G__109183__a[G__109183__i] = arguments[G__109183__i + 0]; ++G__109183__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109183__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__109184){
var args__10403__auto__ = cljs.core.seq(arglist__109184);
return tailrecursion$hoplon$markdown$exp_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$exp_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$exp_link_node__delegate;
return tailrecursion$hoplon$markdown$exp_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.header_node = (function() { 
var tailrecursion$hoplon$markdown$header_node__delegate = function (args__10403__auto__){
var vec__109187 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109187,(0),null);
var map__109188__$1 = ((cljs.core.seq_QMARK_(map__109188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109188):map__109188);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109188__$1,cljs.core.constant$keyword$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109187,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109189__i = 0, G__109189__a = new Array(arguments.length -  0);
while (G__109189__i < G__109189__a.length) {G__109189__a[G__109189__i] = arguments[G__109189__i + 0]; ++G__109189__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109189__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__109190){
var args__10403__auto__ = cljs.core.seq(arglist__109190);
return tailrecursion$hoplon$markdown$header_node__delegate(args__10403__auto__);
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
var tailrecursion$hoplon$markdown$mail_link_node__delegate = function (args__10403__auto__){
var vec__109196 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109196,(0),null);
var map__109197__$1 = ((cljs.core.seq_QMARK_(map__109197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109197):map__109197);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109197__$1,cljs.core.constant$keyword$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109196,(1),null);
var G__109198 = cljs.core.constant$keyword$href;
var G__109199 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__109200 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__109198,G__109199,G__109200) : tailrecursion.hoplon.a.call(null,G__109198,G__109199,G__109200));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109201__i = 0, G__109201__a = new Array(arguments.length -  0);
while (G__109201__i < G__109201__a.length) {G__109201__a[G__109201__i] = arguments[G__109201__i + 0]; ++G__109201__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109201__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__109202){
var args__10403__auto__ = cljs.core.seq(arglist__109202);
return tailrecursion$hoplon$markdown$mail_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$mail_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$mail_link_node__delegate;
return tailrecursion$hoplon$markdown$mail_link_node;
})()
;
tailrecursion.hoplon.markdown.ordered_list_node = tailrecursion.hoplon.ol;
tailrecursion.hoplon.markdown.para_node = tailrecursion.hoplon.p;
if(typeof tailrecursion.hoplon.markdown.quoted_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5105__auto__ = (function (){var G__109203 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109203) : cljs.core.atom.call(null,G__109203));
})();
var prefer_table__5106__auto__ = (function (){var G__109204 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109204) : cljs.core.atom.call(null,G__109204));
})();
var method_cache__5107__auto__ = (function (){var G__109205 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109205) : cljs.core.atom.call(null,G__109205));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__109206 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109206) : cljs.core.atom.call(null,G__109206));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__109207,kids){
var map__109208 = p__109207;
var map__109208__$1 = ((cljs.core.seq_QMARK_(map__109208))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109208):map__109208);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109208__$1,cljs.core.constant$keyword$type);
return type;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$double_DASH_angle,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00AB"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u00BB"], null)], 0));
}));
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$double,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201C"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u201D"], null)], 0));
}));
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$single,(function (_,kids){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2018"], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2019"], null)], 0));
}));
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_image_node = (function() { 
var tailrecursion$hoplon$markdown$ref_image_node__delegate = function (args__10403__auto__){
var vec__109220 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109220,(0),null);
var map__109221__$1 = ((cljs.core.seq_QMARK_(map__109221))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109221):map__109221);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109221__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109221__$1,cljs.core.constant$keyword$separator_DASH_space);
var vec__109222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109220,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109222,(0),null);
var _ = cljs.core.nthnext(vec__109222,(1));
var kids = vec__109222;
var map__109223 = (function (){var G__109224 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__109224) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__109224));
})();
var map__109223__$1 = ((cljs.core.seq_QMARK_(map__109223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109223):map__109223);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109223__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109223__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__109225 = cljs.core.constant$keyword$src;
var G__109226 = url;
var G__109227 = cljs.core.constant$keyword$title;
var G__109228 = title;
var G__109229 = cljs.core.constant$keyword$alt;
var G__109230 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__109225,G__109226,G__109227,G__109228,G__109229,G__109230) : tailrecursion.hoplon.img.call(null,G__109225,G__109226,G__109227,G__109228,G__109229,G__109230));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109231__i = 0, G__109231__a = new Array(arguments.length -  0);
while (G__109231__i < G__109231__a.length) {G__109231__a[G__109231__i] = arguments[G__109231__i + 0]; ++G__109231__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109231__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__109232){
var args__10403__auto__ = cljs.core.seq(arglist__109232);
return tailrecursion$hoplon$markdown$ref_image_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$ref_image_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_image_node__delegate;
return tailrecursion$hoplon$markdown$ref_image_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.ref_link_node = (function() { 
var tailrecursion$hoplon$markdown$ref_link_node__delegate = function (args__10403__auto__){
var vec__109239 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109239,(0),null);
var map__109240__$1 = ((cljs.core.seq_QMARK_(map__109240))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109240):map__109240);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109240__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109240__$1,cljs.core.constant$keyword$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109239,(1),null);
var map__109241 = (function (){var G__109242 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__109242) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__109242));
})();
var map__109241__$1 = ((cljs.core.seq_QMARK_(map__109241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109241):map__109241);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109241__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109241__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__109243 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title], null);
var G__109244 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__109243,G__109244) : tailrecursion.hoplon.a.call(null,G__109243,G__109244));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109245__i = 0, G__109245__a = new Array(arguments.length -  0);
while (G__109245__i < G__109245__a.length) {G__109245__a[G__109245__i] = arguments[G__109245__i + 0]; ++G__109245__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109245__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__109246){
var args__10403__auto__ = cljs.core.seq(arglist__109246);
return tailrecursion$hoplon$markdown$ref_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$ref_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$ref_link_node__delegate;
return tailrecursion$hoplon$markdown$ref_link_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.reference_node = (function() { 
var tailrecursion$hoplon$markdown$reference_node__delegate = function (args__10403__auto__){
var vec__109248 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109248,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109248,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109249__i = 0, G__109249__a = new Array(arguments.length -  0);
while (G__109249__i < G__109249__a.length) {G__109249__a[G__109249__i] = arguments[G__109249__i + 0]; ++G__109249__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109249__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__109250){
var args__10403__auto__ = cljs.core.seq(arglist__109250);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5105__auto__ = (function (){var G__109251 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109251) : cljs.core.atom.call(null,G__109251));
})();
var prefer_table__5106__auto__ = (function (){var G__109252 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109252) : cljs.core.atom.call(null,G__109252));
})();
var method_cache__5107__auto__ = (function (){var G__109253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109253) : cljs.core.atom.call(null,G__109253));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__109254 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109254) : cljs.core.atom.call(null,G__109254));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__109255,_){
var map__109256 = p__109255;
var map__109256__$1 = ((cljs.core.seq_QMARK_(map__109256))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109256):map__109256);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109256__$1,cljs.core.constant$keyword$type);
return type;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$apostrophe,(function (_,___$1){
return "'";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$ellipsis,(function (_,___$1){
return "\u2026";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$emdash,(function (_,___$1){
return "\u2014";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$endash,(function (_,___$1){
return "\u2013";
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$h_DASH_rule,(function (_,___$1){
return (tailrecursion.hoplon.hr.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.hr.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.hr.call(null));
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$linebreak,(function (_,___$1){
return (tailrecursion.hoplon.br.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.br.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.br.call(null));
}));
tailrecursion.hoplon.markdown.simple_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$nbsp,(function (_,___$1){
return "\u00A0";
}));
tailrecursion.hoplon.markdown.strike_node = tailrecursion.hoplon.del;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.strong_emph_super_node = (function() { 
var tailrecursion$hoplon$markdown$strong_emph_super_node__delegate = function (args__10403__auto__){
var vec__109259 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109259,(0),null);
var map__109260__$1 = ((cljs.core.seq_QMARK_(map__109260))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109260):map__109260);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109260__$1,cljs.core.constant$keyword$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109260__$1,cljs.core.constant$keyword$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109260__$1,cljs.core.constant$keyword$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109259,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109261__i = 0, G__109261__a = new Array(arguments.length -  0);
while (G__109261__i < G__109261__a.length) {G__109261__a[G__109261__i] = arguments[G__109261__i + 0]; ++G__109261__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109261__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__109262){
var args__10403__auto__ = cljs.core.seq(arglist__109262);
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$strong_emph_super_node__delegate;
return tailrecursion$hoplon$markdown$strong_emph_super_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_body_node = (function() { 
var tailrecursion$hoplon$markdown$table_body_node__delegate = function (args__10403__auto__){
var vec__109264 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109264,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109264,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109265__i = 0, G__109265__a = new Array(arguments.length -  0);
while (G__109265__i < G__109265__a.length) {G__109265__a[G__109265__i] = arguments[G__109265__i + 0]; ++G__109265__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109265__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__109266){
var args__10403__auto__ = cljs.core.seq(arglist__109266);
return tailrecursion$hoplon$markdown$table_body_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_body_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_body_node__delegate;
return tailrecursion$hoplon$markdown$table_body_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_caption_node = (function() { 
var tailrecursion$hoplon$markdown$table_caption_node__delegate = function (args__10403__auto__){
var vec__109268 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109268,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109268,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109269__i = 0, G__109269__a = new Array(arguments.length -  0);
while (G__109269__i < G__109269__a.length) {G__109269__a[G__109269__i] = arguments[G__109269__i + 0]; ++G__109269__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109269__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__109270){
var args__10403__auto__ = cljs.core.seq(arglist__109270);
return tailrecursion$hoplon$markdown$table_caption_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_caption_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_caption_node__delegate;
return tailrecursion$hoplon$markdown$table_caption_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_cell_node = (function() { 
var tailrecursion$hoplon$markdown$table_cell_node__delegate = function (args__10403__auto__){
var vec__109272 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109272,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109272,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109273__i = 0, G__109273__a = new Array(arguments.length -  0);
while (G__109273__i < G__109273__a.length) {G__109273__a[G__109273__i] = arguments[G__109273__i + 0]; ++G__109273__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109273__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__109274){
var args__10403__auto__ = cljs.core.seq(arglist__109274);
return tailrecursion$hoplon$markdown$table_cell_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_cell_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_cell_node__delegate;
return tailrecursion$hoplon$markdown$table_cell_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_column_node = (function() { 
var tailrecursion$hoplon$markdown$table_column_node__delegate = function (args__10403__auto__){
var vec__109276 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109276,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109276,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109277__i = 0, G__109277__a = new Array(arguments.length -  0);
while (G__109277__i < G__109277__a.length) {G__109277__a[G__109277__i] = arguments[G__109277__i + 0]; ++G__109277__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109277__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__109278){
var args__10403__auto__ = cljs.core.seq(arglist__109278);
return tailrecursion$hoplon$markdown$table_column_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_column_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_column_node__delegate;
return tailrecursion$hoplon$markdown$table_column_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_header_node = (function() { 
var tailrecursion$hoplon$markdown$table_header_node__delegate = function (args__10403__auto__){
var vec__109280 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109280,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109280,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109281__i = 0, G__109281__a = new Array(arguments.length -  0);
while (G__109281__i < G__109281__a.length) {G__109281__a[G__109281__i] = arguments[G__109281__i + 0]; ++G__109281__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109281__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__109282){
var args__10403__auto__ = cljs.core.seq(arglist__109282);
return tailrecursion$hoplon$markdown$table_header_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_header_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_header_node__delegate;
return tailrecursion$hoplon$markdown$table_header_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_node = (function() { 
var tailrecursion$hoplon$markdown$table_node__delegate = function (args__10403__auto__){
var vec__109284 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109284,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109284,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109285__i = 0, G__109285__a = new Array(arguments.length -  0);
while (G__109285__i < G__109285__a.length) {G__109285__a[G__109285__i] = arguments[G__109285__i + 0]; ++G__109285__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109285__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__109286){
var args__10403__auto__ = cljs.core.seq(arglist__109286);
return tailrecursion$hoplon$markdown$table_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_node__delegate;
return tailrecursion$hoplon$markdown$table_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.table_row_node = (function() { 
var tailrecursion$hoplon$markdown$table_row_node__delegate = function (args__10403__auto__){
var vec__109288 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109288,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109288,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109289__i = 0, G__109289__a = new Array(arguments.length -  0);
while (G__109289__i < G__109289__a.length) {G__109289__a[G__109289__i] = arguments[G__109289__i + 0]; ++G__109289__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109289__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__109290){
var args__10403__auto__ = cljs.core.seq(arglist__109290);
return tailrecursion$hoplon$markdown$table_row_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$table_row_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$table_row_node__delegate;
return tailrecursion$hoplon$markdown$table_row_node;
})()
;
/**
 * @param {...*} var_args
 */
tailrecursion.hoplon.markdown.wiki_link_node = (function() { 
var tailrecursion$hoplon$markdown$wiki_link_node__delegate = function (args__10403__auto__){
var vec__109292 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109292,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109292,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109293__i = 0, G__109293__a = new Array(arguments.length -  0);
while (G__109293__i < G__109293__a.length) {G__109293__a[G__109293__i] = arguments[G__109293__i + 0]; ++G__109293__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109293__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__109294){
var args__10403__auto__ = cljs.core.seq(arglist__109294);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
