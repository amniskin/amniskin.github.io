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
var vec__109140 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109140,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109140,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109141__i = 0, G__109141__a = new Array(arguments.length -  0);
while (G__109141__i < G__109141__a.length) {G__109141__a[G__109141__i] = arguments[G__109141__i + 0]; ++G__109141__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109141__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__109142){
var args__10403__auto__ = cljs.core.seq(arglist__109142);
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
var vec__109148 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109148,(0),null);
var vec__109149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109148,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109149,(0),null);
var _ = cljs.core.nthnext(vec__109149,(1));
var G__109150 = cljs.core.constant$keyword$href;
var G__109151 = url;
var G__109152 = url;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__109150,G__109151,G__109152) : tailrecursion.hoplon.a.call(null,G__109150,G__109151,G__109152));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109153__i = 0, G__109153__a = new Array(arguments.length -  0);
while (G__109153__i < G__109153__a.length) {G__109153__a[G__109153__i] = arguments[G__109153__i + 0]; ++G__109153__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109153__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__109154){
var args__10403__auto__ = cljs.core.seq(arglist__109154);
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
var vec__109164 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109164,(0),null);
var map__109165__$1 = ((cljs.core.seq_QMARK_(map__109165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109165):map__109165);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109165__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109165__$1,cljs.core.constant$keyword$title);
var vec__109166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109164,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109166,(0),null);
var _ = cljs.core.nthnext(vec__109166,(1));
var G__109167 = cljs.core.constant$keyword$src;
var G__109168 = url;
var G__109169 = cljs.core.constant$keyword$title;
var G__109170 = title;
var G__109171 = cljs.core.constant$keyword$alt;
var G__109172 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__109167,G__109168,G__109169,G__109170,G__109171,G__109172) : tailrecursion.hoplon.img.call(null,G__109167,G__109168,G__109169,G__109170,G__109171,G__109172));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109173__i = 0, G__109173__a = new Array(arguments.length -  0);
while (G__109173__i < G__109173__a.length) {G__109173__a[G__109173__i] = arguments[G__109173__i + 0]; ++G__109173__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109173__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__109174){
var args__10403__auto__ = cljs.core.seq(arglist__109174);
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
var vec__109177 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109177,(0),null);
var map__109178__$1 = ((cljs.core.seq_QMARK_(map__109178))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109178):map__109178);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109178__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109178__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109177,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109179__i = 0, G__109179__a = new Array(arguments.length -  0);
while (G__109179__i < G__109179__a.length) {G__109179__a[G__109179__i] = arguments[G__109179__i + 0]; ++G__109179__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109179__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__109180){
var args__10403__auto__ = cljs.core.seq(arglist__109180);
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
var vec__109183 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109183,(0),null);
var map__109184__$1 = ((cljs.core.seq_QMARK_(map__109184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109184):map__109184);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109184__$1,cljs.core.constant$keyword$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109183,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109185__i = 0, G__109185__a = new Array(arguments.length -  0);
while (G__109185__i < G__109185__a.length) {G__109185__a[G__109185__i] = arguments[G__109185__i + 0]; ++G__109185__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109185__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__109186){
var args__10403__auto__ = cljs.core.seq(arglist__109186);
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
var vec__109192 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109192,(0),null);
var map__109193__$1 = ((cljs.core.seq_QMARK_(map__109193))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109193):map__109193);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109193__$1,cljs.core.constant$keyword$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109192,(1),null);
var G__109194 = cljs.core.constant$keyword$href;
var G__109195 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__109196 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__109194,G__109195,G__109196) : tailrecursion.hoplon.a.call(null,G__109194,G__109195,G__109196));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109197__i = 0, G__109197__a = new Array(arguments.length -  0);
while (G__109197__i < G__109197__a.length) {G__109197__a[G__109197__i] = arguments[G__109197__i + 0]; ++G__109197__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109197__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__109198){
var args__10403__auto__ = cljs.core.seq(arglist__109198);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5105__auto__ = (function (){var G__109199 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109199) : cljs.core.atom.call(null,G__109199));
})();
var prefer_table__5106__auto__ = (function (){var G__109200 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109200) : cljs.core.atom.call(null,G__109200));
})();
var method_cache__5107__auto__ = (function (){var G__109201 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109201) : cljs.core.atom.call(null,G__109201));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__109202 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109202) : cljs.core.atom.call(null,G__109202));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__109203,kids){
var map__109204 = p__109203;
var map__109204__$1 = ((cljs.core.seq_QMARK_(map__109204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109204):map__109204);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109204__$1,cljs.core.constant$keyword$type);
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
var vec__109216 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109216,(0),null);
var map__109217__$1 = ((cljs.core.seq_QMARK_(map__109217))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109217):map__109217);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109217__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109217__$1,cljs.core.constant$keyword$separator_DASH_space);
var vec__109218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109216,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109218,(0),null);
var _ = cljs.core.nthnext(vec__109218,(1));
var kids = vec__109218;
var map__109219 = (function (){var G__109220 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__109220) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__109220));
})();
var map__109219__$1 = ((cljs.core.seq_QMARK_(map__109219))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109219):map__109219);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109219__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109219__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__109221 = cljs.core.constant$keyword$src;
var G__109222 = url;
var G__109223 = cljs.core.constant$keyword$title;
var G__109224 = title;
var G__109225 = cljs.core.constant$keyword$alt;
var G__109226 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__109221,G__109222,G__109223,G__109224,G__109225,G__109226) : tailrecursion.hoplon.img.call(null,G__109221,G__109222,G__109223,G__109224,G__109225,G__109226));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109227__i = 0, G__109227__a = new Array(arguments.length -  0);
while (G__109227__i < G__109227__a.length) {G__109227__a[G__109227__i] = arguments[G__109227__i + 0]; ++G__109227__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109227__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__109228){
var args__10403__auto__ = cljs.core.seq(arglist__109228);
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
var vec__109235 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109235,(0),null);
var map__109236__$1 = ((cljs.core.seq_QMARK_(map__109236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109236):map__109236);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109236__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109236__$1,cljs.core.constant$keyword$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109235,(1),null);
var map__109237 = (function (){var G__109238 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__109238) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__109238));
})();
var map__109237__$1 = ((cljs.core.seq_QMARK_(map__109237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109237):map__109237);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109237__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109237__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__109239 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title], null);
var G__109240 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__109239,G__109240) : tailrecursion.hoplon.a.call(null,G__109239,G__109240));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109241__i = 0, G__109241__a = new Array(arguments.length -  0);
while (G__109241__i < G__109241__a.length) {G__109241__a[G__109241__i] = arguments[G__109241__i + 0]; ++G__109241__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109241__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__109242){
var args__10403__auto__ = cljs.core.seq(arglist__109242);
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
var vec__109244 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109244,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109244,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109245__i = 0, G__109245__a = new Array(arguments.length -  0);
while (G__109245__i < G__109245__a.length) {G__109245__a[G__109245__i] = arguments[G__109245__i + 0]; ++G__109245__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109245__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__109246){
var args__10403__auto__ = cljs.core.seq(arglist__109246);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5105__auto__ = (function (){var G__109247 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109247) : cljs.core.atom.call(null,G__109247));
})();
var prefer_table__5106__auto__ = (function (){var G__109248 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109248) : cljs.core.atom.call(null,G__109248));
})();
var method_cache__5107__auto__ = (function (){var G__109249 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109249) : cljs.core.atom.call(null,G__109249));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__109250 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__109250) : cljs.core.atom.call(null,G__109250));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__109251,_){
var map__109252 = p__109251;
var map__109252__$1 = ((cljs.core.seq_QMARK_(map__109252))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109252):map__109252);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109252__$1,cljs.core.constant$keyword$type);
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
var vec__109255 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__109256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109255,(0),null);
var map__109256__$1 = ((cljs.core.seq_QMARK_(map__109256))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109256):map__109256);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109256__$1,cljs.core.constant$keyword$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109256__$1,cljs.core.constant$keyword$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109256__$1,cljs.core.constant$keyword$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109255,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109257__i = 0, G__109257__a = new Array(arguments.length -  0);
while (G__109257__i < G__109257__a.length) {G__109257__a[G__109257__i] = arguments[G__109257__i + 0]; ++G__109257__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109257__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__109258){
var args__10403__auto__ = cljs.core.seq(arglist__109258);
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
var vec__109260 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109260,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109260,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109261__i = 0, G__109261__a = new Array(arguments.length -  0);
while (G__109261__i < G__109261__a.length) {G__109261__a[G__109261__i] = arguments[G__109261__i + 0]; ++G__109261__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109261__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__109262){
var args__10403__auto__ = cljs.core.seq(arglist__109262);
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
var vec__109264 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109264,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109264,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109265__i = 0, G__109265__a = new Array(arguments.length -  0);
while (G__109265__i < G__109265__a.length) {G__109265__a[G__109265__i] = arguments[G__109265__i + 0]; ++G__109265__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109265__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__109266){
var args__10403__auto__ = cljs.core.seq(arglist__109266);
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
var vec__109268 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109268,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109268,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109269__i = 0, G__109269__a = new Array(arguments.length -  0);
while (G__109269__i < G__109269__a.length) {G__109269__a[G__109269__i] = arguments[G__109269__i + 0]; ++G__109269__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109269__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__109270){
var args__10403__auto__ = cljs.core.seq(arglist__109270);
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
var vec__109272 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109272,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109272,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109273__i = 0, G__109273__a = new Array(arguments.length -  0);
while (G__109273__i < G__109273__a.length) {G__109273__a[G__109273__i] = arguments[G__109273__i + 0]; ++G__109273__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109273__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__109274){
var args__10403__auto__ = cljs.core.seq(arglist__109274);
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
var vec__109276 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109276,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109276,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109277__i = 0, G__109277__a = new Array(arguments.length -  0);
while (G__109277__i < G__109277__a.length) {G__109277__a[G__109277__i] = arguments[G__109277__i + 0]; ++G__109277__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109277__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__109278){
var args__10403__auto__ = cljs.core.seq(arglist__109278);
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
var vec__109280 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109280,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109280,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109281__i = 0, G__109281__a = new Array(arguments.length -  0);
while (G__109281__i < G__109281__a.length) {G__109281__a[G__109281__i] = arguments[G__109281__i + 0]; ++G__109281__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109281__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__109282){
var args__10403__auto__ = cljs.core.seq(arglist__109282);
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
var vec__109284 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109284,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109284,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109285__i = 0, G__109285__a = new Array(arguments.length -  0);
while (G__109285__i < G__109285__a.length) {G__109285__a[G__109285__i] = arguments[G__109285__i + 0]; ++G__109285__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109285__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__109286){
var args__10403__auto__ = cljs.core.seq(arglist__109286);
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
var vec__109288 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109288,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109288,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__109289__i = 0, G__109289__a = new Array(arguments.length -  0);
while (G__109289__i < G__109289__a.length) {G__109289__a[G__109289__i] = arguments[G__109289__i + 0]; ++G__109289__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__109289__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__109290){
var args__10403__auto__ = cljs.core.seq(arglist__109290);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
