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
var vec__113858 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113858,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113858,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$abbreviation_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113859__i = 0, G__113859__a = new Array(arguments.length -  0);
while (G__113859__i < G__113859__a.length) {G__113859__a[G__113859__i] = arguments[G__113859__i + 0]; ++G__113859__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113859__a,0);
} 
return tailrecursion$hoplon$markdown$abbreviation_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$abbreviation_node.cljs$lang$applyTo = (function (arglist__113860){
var args__10403__auto__ = cljs.core.seq(arglist__113860);
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
var vec__113866 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113866,(0),null);
var vec__113867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113866,(1),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113867,(0),null);
var _ = cljs.core.nthnext(vec__113867,(1));
var G__113868 = cljs.core.constant$keyword$href;
var G__113869 = url;
var G__113870 = url;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__113868,G__113869,G__113870) : tailrecursion.hoplon.a.call(null,G__113868,G__113869,G__113870));
};
var tailrecursion$hoplon$markdown$auto_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113871__i = 0, G__113871__a = new Array(arguments.length -  0);
while (G__113871__i < G__113871__a.length) {G__113871__a[G__113871__i] = arguments[G__113871__i + 0]; ++G__113871__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113871__a,0);
} 
return tailrecursion$hoplon$markdown$auto_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$auto_link_node.cljs$lang$applyTo = (function (arglist__113872){
var args__10403__auto__ = cljs.core.seq(arglist__113872);
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
var vec__113882 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113882,(0),null);
var map__113883__$1 = ((cljs.core.seq_QMARK_(map__113883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113883):map__113883);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113883__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113883__$1,cljs.core.constant$keyword$title);
var vec__113884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113882,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113884,(0),null);
var _ = cljs.core.nthnext(vec__113884,(1));
var G__113885 = cljs.core.constant$keyword$src;
var G__113886 = url;
var G__113887 = cljs.core.constant$keyword$title;
var G__113888 = title;
var G__113889 = cljs.core.constant$keyword$alt;
var G__113890 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__113885,G__113886,G__113887,G__113888,G__113889,G__113890) : tailrecursion.hoplon.img.call(null,G__113885,G__113886,G__113887,G__113888,G__113889,G__113890));
};
var tailrecursion$hoplon$markdown$exp_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113891__i = 0, G__113891__a = new Array(arguments.length -  0);
while (G__113891__i < G__113891__a.length) {G__113891__a[G__113891__i] = arguments[G__113891__i + 0]; ++G__113891__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113891__a,0);
} 
return tailrecursion$hoplon$markdown$exp_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_image_node.cljs$lang$applyTo = (function (arglist__113892){
var args__10403__auto__ = cljs.core.seq(arglist__113892);
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
var vec__113895 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113895,(0),null);
var map__113896__$1 = ((cljs.core.seq_QMARK_(map__113896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113896):map__113896);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113896__$1,cljs.core.constant$keyword$url);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113896__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113895,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tailrecursion.hoplon.a,cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title,cljs.core.array_seq([kids], 0));
};
var tailrecursion$hoplon$markdown$exp_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113897__i = 0, G__113897__a = new Array(arguments.length -  0);
while (G__113897__i < G__113897__a.length) {G__113897__a[G__113897__i] = arguments[G__113897__i + 0]; ++G__113897__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113897__a,0);
} 
return tailrecursion$hoplon$markdown$exp_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$exp_link_node.cljs$lang$applyTo = (function (arglist__113898){
var args__10403__auto__ = cljs.core.seq(arglist__113898);
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
var vec__113901 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113901,(0),null);
var map__113902__$1 = ((cljs.core.seq_QMARK_(map__113902))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113902):map__113902);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113902__$1,cljs.core.constant$keyword$level);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113901,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.h6,tailrecursion.hoplon.h1,tailrecursion.hoplon.h2,tailrecursion.hoplon.h3,tailrecursion.hoplon.h4,tailrecursion.hoplon.h5], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.h6)),level),kids);
};
var tailrecursion$hoplon$markdown$header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113903__i = 0, G__113903__a = new Array(arguments.length -  0);
while (G__113903__i < G__113903__a.length) {G__113903__a[G__113903__i] = arguments[G__113903__i + 0]; ++G__113903__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113903__a,0);
} 
return tailrecursion$hoplon$markdown$header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$header_node.cljs$lang$applyTo = (function (arglist__113904){
var args__10403__auto__ = cljs.core.seq(arglist__113904);
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
var vec__113910 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113910,(0),null);
var map__113911__$1 = ((cljs.core.seq_QMARK_(map__113911))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113911):map__113911);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113911__$1,cljs.core.constant$keyword$text);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113910,(1),null);
var G__113912 = cljs.core.constant$keyword$href;
var G__113913 = [cljs.core.str("mailto:"),cljs.core.str(text)].join('');
var G__113914 = text;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__113912,G__113913,G__113914) : tailrecursion.hoplon.a.call(null,G__113912,G__113913,G__113914));
};
var tailrecursion$hoplon$markdown$mail_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113915__i = 0, G__113915__a = new Array(arguments.length -  0);
while (G__113915__i < G__113915__a.length) {G__113915__a[G__113915__i] = arguments[G__113915__i + 0]; ++G__113915__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113915__a,0);
} 
return tailrecursion$hoplon$markdown$mail_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$mail_link_node.cljs$lang$applyTo = (function (arglist__113916){
var args__10403__auto__ = cljs.core.seq(arglist__113916);
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
tailrecursion.hoplon.markdown.quoted_node = (function (){var method_table__5105__auto__ = (function (){var G__113917 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113917) : cljs.core.atom.call(null,G__113917));
})();
var prefer_table__5106__auto__ = (function (){var G__113918 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113918) : cljs.core.atom.call(null,G__113918));
})();
var method_cache__5107__auto__ = (function (){var G__113919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113919) : cljs.core.atom.call(null,G__113919));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__113920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113920) : cljs.core.atom.call(null,G__113920));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","quoted-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__113921,kids){
var map__113922 = p__113921;
var map__113922__$1 = ((cljs.core.seq_QMARK_(map__113922))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113922):map__113922);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113922__$1,cljs.core.constant$keyword$type);
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
var vec__113934 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113934,(0),null);
var map__113935__$1 = ((cljs.core.seq_QMARK_(map__113935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113935):map__113935);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113935__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113935__$1,cljs.core.constant$keyword$separator_DASH_space);
var vec__113936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113934,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113936,(0),null);
var _ = cljs.core.nthnext(vec__113936,(1));
var kids = vec__113936;
var map__113937 = (function (){var G__113938 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__113938) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__113938));
})();
var map__113937__$1 = ((cljs.core.seq_QMARK_(map__113937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113937):map__113937);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113937__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113937__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__113939 = cljs.core.constant$keyword$src;
var G__113940 = url;
var G__113941 = cljs.core.constant$keyword$title;
var G__113942 = title;
var G__113943 = cljs.core.constant$keyword$alt;
var G__113944 = alt;
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__113939,G__113940,G__113941,G__113942,G__113943,G__113944) : tailrecursion.hoplon.img.call(null,G__113939,G__113940,G__113941,G__113942,G__113943,G__113944));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_image_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113945__i = 0, G__113945__a = new Array(arguments.length -  0);
while (G__113945__i < G__113945__a.length) {G__113945__a[G__113945__i] = arguments[G__113945__i + 0]; ++G__113945__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113945__a,0);
} 
return tailrecursion$hoplon$markdown$ref_image_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_image_node.cljs$lang$applyTo = (function (arglist__113946){
var args__10403__auto__ = cljs.core.seq(arglist__113946);
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
var vec__113953 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113953,(0),null);
var map__113954__$1 = ((cljs.core.seq_QMARK_(map__113954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113954):map__113954);
var rk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113954__$1,cljs.core.constant$keyword$reference_DASH_key);
var ss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113954__$1,cljs.core.constant$keyword$separator_DASH_space);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113953,(1),null);
var map__113955 = (function (){var G__113956 = rk;
return (tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.markdown._STAR_references_STAR_.cljs$core$IFn$_invoke$arity$1(G__113956) : tailrecursion.hoplon.markdown._STAR_references_STAR_.call(null,G__113956));
})();
var map__113955__$1 = ((cljs.core.seq_QMARK_(map__113955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113955):map__113955);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113955__$1,cljs.core.constant$keyword$title);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113955__$1,cljs.core.constant$keyword$url);
if(cljs.core.truth_(url)){
var G__113957 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,url,cljs.core.constant$keyword$title,title], null);
var G__113958 = kids;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(G__113957,G__113958) : tailrecursion.hoplon.a.call(null,G__113957,G__113958));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),kids,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null),(cljs.core.truth_(rk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ss,"[",rk,"]"], null):null)], 0));
}
};
var tailrecursion$hoplon$markdown$ref_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113959__i = 0, G__113959__a = new Array(arguments.length -  0);
while (G__113959__i < G__113959__a.length) {G__113959__a[G__113959__i] = arguments[G__113959__i + 0]; ++G__113959__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113959__a,0);
} 
return tailrecursion$hoplon$markdown$ref_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$ref_link_node.cljs$lang$applyTo = (function (arglist__113960){
var args__10403__auto__ = cljs.core.seq(arglist__113960);
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
var vec__113962 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113962,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113962,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$reference_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113963__i = 0, G__113963__a = new Array(arguments.length -  0);
while (G__113963__i < G__113963__a.length) {G__113963__a[G__113963__i] = arguments[G__113963__i + 0]; ++G__113963__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113963__a,0);
} 
return tailrecursion$hoplon$markdown$reference_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$reference_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$reference_node.cljs$lang$applyTo = (function (arglist__113964){
var args__10403__auto__ = cljs.core.seq(arglist__113964);
return tailrecursion$hoplon$markdown$reference_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$reference_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$reference_node__delegate;
return tailrecursion$hoplon$markdown$reference_node;
})()
;
if(typeof tailrecursion.hoplon.markdown.simple_node !== 'undefined'){
} else {
tailrecursion.hoplon.markdown.simple_node = (function (){var method_table__5105__auto__ = (function (){var G__113965 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113965) : cljs.core.atom.call(null,G__113965));
})();
var prefer_table__5106__auto__ = (function (){var G__113966 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113966) : cljs.core.atom.call(null,G__113966));
})();
var method_cache__5107__auto__ = (function (){var G__113967 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113967) : cljs.core.atom.call(null,G__113967));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__113968 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__113968) : cljs.core.atom.call(null,G__113968));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon.markdown","simple-node"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (p__113969,_){
var map__113970 = p__113969;
var map__113970__$1 = ((cljs.core.seq_QMARK_(map__113970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113970):map__113970);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113970__$1,cljs.core.constant$keyword$type);
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
var vec__113973 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__113974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113973,(0),null);
var map__113974__$1 = ((cljs.core.seq_QMARK_(map__113974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__113974):map__113974);
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113974__$1,cljs.core.constant$keyword$chars);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113974__$1,cljs.core.constant$keyword$closed);
var strong_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__113974__$1,cljs.core.constant$keyword$strong);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113973,(1),null);
if(cljs.core.not(closed_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chars], null),kids);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(strong_QMARK_))?tailrecursion.hoplon.em:tailrecursion.hoplon.strong),kids);
}
};
var tailrecursion$hoplon$markdown$strong_emph_super_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113975__i = 0, G__113975__a = new Array(arguments.length -  0);
while (G__113975__i < G__113975__a.length) {G__113975__a[G__113975__i] = arguments[G__113975__i + 0]; ++G__113975__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113975__a,0);
} 
return tailrecursion$hoplon$markdown$strong_emph_super_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$strong_emph_super_node.cljs$lang$applyTo = (function (arglist__113976){
var args__10403__auto__ = cljs.core.seq(arglist__113976);
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
var vec__113978 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113978,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113978,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_body_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113979__i = 0, G__113979__a = new Array(arguments.length -  0);
while (G__113979__i < G__113979__a.length) {G__113979__a[G__113979__i] = arguments[G__113979__i + 0]; ++G__113979__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113979__a,0);
} 
return tailrecursion$hoplon$markdown$table_body_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_body_node.cljs$lang$applyTo = (function (arglist__113980){
var args__10403__auto__ = cljs.core.seq(arglist__113980);
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
var vec__113982 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113982,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113982,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_caption_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113983__i = 0, G__113983__a = new Array(arguments.length -  0);
while (G__113983__i < G__113983__a.length) {G__113983__a[G__113983__i] = arguments[G__113983__i + 0]; ++G__113983__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113983__a,0);
} 
return tailrecursion$hoplon$markdown$table_caption_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_caption_node.cljs$lang$applyTo = (function (arglist__113984){
var args__10403__auto__ = cljs.core.seq(arglist__113984);
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
var vec__113986 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113986,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113986,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_cell_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113987__i = 0, G__113987__a = new Array(arguments.length -  0);
while (G__113987__i < G__113987__a.length) {G__113987__a[G__113987__i] = arguments[G__113987__i + 0]; ++G__113987__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113987__a,0);
} 
return tailrecursion$hoplon$markdown$table_cell_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_cell_node.cljs$lang$applyTo = (function (arglist__113988){
var args__10403__auto__ = cljs.core.seq(arglist__113988);
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
var vec__113990 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113990,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113990,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_column_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113991__i = 0, G__113991__a = new Array(arguments.length -  0);
while (G__113991__i < G__113991__a.length) {G__113991__a[G__113991__i] = arguments[G__113991__i + 0]; ++G__113991__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113991__a,0);
} 
return tailrecursion$hoplon$markdown$table_column_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_column_node.cljs$lang$applyTo = (function (arglist__113992){
var args__10403__auto__ = cljs.core.seq(arglist__113992);
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
var vec__113994 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113994,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113994,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_header_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113995__i = 0, G__113995__a = new Array(arguments.length -  0);
while (G__113995__i < G__113995__a.length) {G__113995__a[G__113995__i] = arguments[G__113995__i + 0]; ++G__113995__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113995__a,0);
} 
return tailrecursion$hoplon$markdown$table_header_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_header_node.cljs$lang$applyTo = (function (arglist__113996){
var args__10403__auto__ = cljs.core.seq(arglist__113996);
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
var vec__113998 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113998,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__113998,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__113999__i = 0, G__113999__a = new Array(arguments.length -  0);
while (G__113999__i < G__113999__a.length) {G__113999__a[G__113999__i] = arguments[G__113999__i + 0]; ++G__113999__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__113999__a,0);
} 
return tailrecursion$hoplon$markdown$table_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_node.cljs$lang$applyTo = (function (arglist__114000){
var args__10403__auto__ = cljs.core.seq(arglist__114000);
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
var vec__114002 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114002,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114002,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$table_row_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__114003__i = 0, G__114003__a = new Array(arguments.length -  0);
while (G__114003__i < G__114003__a.length) {G__114003__a[G__114003__i] = arguments[G__114003__i + 0]; ++G__114003__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__114003__a,0);
} 
return tailrecursion$hoplon$markdown$table_row_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$table_row_node.cljs$lang$applyTo = (function (arglist__114004){
var args__10403__auto__ = cljs.core.seq(arglist__114004);
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
var vec__114006 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114006,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__114006,(1),null);
return null;
};
var tailrecursion$hoplon$markdown$wiki_link_node = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__114007__i = 0, G__114007__a = new Array(arguments.length -  0);
while (G__114007__i < G__114007__a.length) {G__114007__a[G__114007__i] = arguments[G__114007__i + 0]; ++G__114007__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__114007__a,0);
} 
return tailrecursion$hoplon$markdown$wiki_link_node__delegate.call(this,args__10403__auto__);};
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$maxFixedArity = 0;
tailrecursion$hoplon$markdown$wiki_link_node.cljs$lang$applyTo = (function (arglist__114008){
var args__10403__auto__ = cljs.core.seq(arglist__114008);
return tailrecursion$hoplon$markdown$wiki_link_node__delegate(args__10403__auto__);
});
tailrecursion$hoplon$markdown$wiki_link_node.cljs$core$IFn$_invoke$arity$variadic = tailrecursion$hoplon$markdown$wiki_link_node__delegate;
return tailrecursion$hoplon$markdown$wiki_link_node;
})()
;
