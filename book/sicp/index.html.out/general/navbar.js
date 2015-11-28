// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.navbar');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.navbar.nav_active = tailrecursion.javelin.cell(null);
general.navbar.location = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(location.pathname,/\//)),/\./));
general.navbar.height = tailrecursion.javelin.cell((50));
/**
 * @param {...*} var_args
 */
general.navbar.nav_button = (function() { 
var general$navbar$nav_button__delegate = function (args__8262__auto__){
var vec__221809 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__221810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221809,(0),null);
var map__221810__$1 = ((((!((map__221810 == null)))?((((map__221810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__221810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__221810):map__221810);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__221810__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221809,(1),null);
var G__221815 = cljs.core.cst$kw$type;
var G__221816 = "button";
var G__221817 = cljs.core.cst$kw$class;
var G__221818 = tailrecursion.javelin.formula(((function (G__221815,G__221816,G__221817,vec__221809,map__221810,map__221810__$1,name,kids){
return (function (G__221822,G__221823,G__221824){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__221822.cljs$core$IFn$_invoke$arity$2 ? G__221822.cljs$core$IFn$_invoke$arity$2(G__221823,G__221824) : G__221822.call(null,G__221823,G__221824))], null);
});})(G__221815,G__221816,G__221817,vec__221809,map__221810,map__221810__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__221819 = cljs.core.cst$kw$click;
var G__221820 = ((function (G__221815,G__221816,G__221817,G__221818,G__221819,vec__221809,map__221810,map__221810__$1,name,kids){
return (function (){
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(general.navbar.nav_active) : cljs.core.deref.call(null,general.navbar.nav_active)))){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,name) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(general.navbar.nav_active) : cljs.core.deref.call(null,general.navbar.nav_active)),name)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,name) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,name));

}
}
});})(G__221815,G__221816,G__221817,G__221818,G__221819,vec__221809,map__221810,map__221810__$1,name,kids))
;
var G__221821 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__221815,G__221816,G__221817,G__221818,G__221819,G__221820,G__221821) : tailrecursion.hoplon.button.call(null,G__221815,G__221816,G__221817,G__221818,G__221819,G__221820,G__221821));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221825__i = 0, G__221825__a = new Array(arguments.length -  0);
while (G__221825__i < G__221825__a.length) {G__221825__a[G__221825__i] = arguments[G__221825__i + 0]; ++G__221825__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221825__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__221826){
var args__8262__auto__ = cljs.core.seq(arglist__221826);
return general$navbar$nav_button__delegate(args__8262__auto__);
});
general$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_button__delegate;
return general$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_bar = (function() { 
var general$navbar$fixed_bar__delegate = function (args__8262__auto__){
var vec__221831 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221831,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221831,(1),null);
var G__221832 = cljs.core.cst$kw$class;
var G__221833 = "navbar navbar-inverse navbar-fixed-top";
var G__221834 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__221832,G__221833,G__221834) : tailrecursion.hoplon.div.call(null,G__221832,G__221833,G__221834));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221835__i = 0, G__221835__a = new Array(arguments.length -  0);
while (G__221835__i < G__221835__a.length) {G__221835__a[G__221835__i] = arguments[G__221835__i + 0]; ++G__221835__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221835__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__221836){
var args__8262__auto__ = cljs.core.seq(arglist__221836);
return general$navbar$fixed_bar__delegate(args__8262__auto__);
});
general$navbar$fixed_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_bar__delegate;
return general$navbar$fixed_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static_bar = (function() { 
var general$navbar$static_bar__delegate = function (args__8262__auto__){
var vec__221843 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221843,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221843,(1),null);
var G__221844 = cljs.core.cst$kw$class;
var G__221845 = "navbar navbar-inverse navbar-static-top";
var G__221846 = cljs.core.cst$kw$style;
var G__221847 = "margin-bottom:0;";
var G__221848 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__221844,G__221845,G__221846,G__221847,G__221848) : tailrecursion.hoplon.div.call(null,G__221844,G__221845,G__221846,G__221847,G__221848));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221849__i = 0, G__221849__a = new Array(arguments.length -  0);
while (G__221849__i < G__221849__a.length) {G__221849__a[G__221849__i] = arguments[G__221849__i + 0]; ++G__221849__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221849__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__221850){
var args__8262__auto__ = cljs.core.seq(arglist__221850);
return general$navbar$static_bar__delegate(args__8262__auto__);
});
general$navbar$static_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static_bar__delegate;
return general$navbar$static_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.header2 = (function() { 
var general$navbar$header2__delegate = function (args__8262__auto__){
var vec__221852 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221852,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221852,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221853__i = 0, G__221853__a = new Array(arguments.length -  0);
while (G__221853__i < G__221853__a.length) {G__221853__a[G__221853__i] = arguments[G__221853__i + 0]; ++G__221853__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221853__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__221854){
var args__8262__auto__ = cljs.core.seq(arglist__221854);
return general$navbar$header2__delegate(args__8262__auto__);
});
general$navbar$header2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$header2__delegate;
return general$navbar$header2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.brand = (function() { 
var general$navbar$brand__delegate = function (args__8262__auto__){
var vec__221862 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221862,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221862,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__221863 = cljs.core.cst$kw$class;
var G__221864 = "navbar-brand";
var G__221865 = cljs.core.cst$kw$click;
var G__221866 = ((function (G__221863,G__221864,G__221865,vec__221862,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__221863,G__221864,G__221865,vec__221862,_,kids))
;
var G__221867 = cljs.core.cst$kw$href;
var G__221868 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__221863,G__221864,G__221865,G__221866,G__221867,G__221868) : tailrecursion.hoplon.a.call(null,G__221863,G__221864,G__221865,G__221866,G__221867,G__221868));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221869__i = 0, G__221869__a = new Array(arguments.length -  0);
while (G__221869__i < G__221869__a.length) {G__221869__a[G__221869__i] = arguments[G__221869__i + 0]; ++G__221869__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221869__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__221870){
var args__8262__auto__ = cljs.core.seq(arglist__221870);
return general$navbar$brand__delegate(args__8262__auto__);
});
general$navbar$brand.cljs$core$IFn$_invoke$arity$variadic = general$navbar$brand__delegate;
return general$navbar$brand;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.menu2 = (function() { 
var general$navbar$menu2__delegate = function (args__8262__auto__){
var vec__221879 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221879,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221879,(1),null);
var G__221882 = cljs.core.cst$kw$class;
var G__221883 = tailrecursion.javelin.formula(((function (G__221882,vec__221879,attr,kids){
return (function (G__221885,G__221886){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__221885.cljs$core$IFn$_invoke$arity$2 ? G__221885.cljs$core$IFn$_invoke$arity$2(G__221886,"menu") : G__221885.call(null,G__221886,"menu"))], null);
});})(G__221882,vec__221879,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__221884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__221882,G__221883,G__221884) : tailrecursion.hoplon.div.call(null,G__221882,G__221883,G__221884));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221887__i = 0, G__221887__a = new Array(arguments.length -  0);
while (G__221887__i < G__221887__a.length) {G__221887__a[G__221887__i] = arguments[G__221887__i + 0]; ++G__221887__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221887__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__221888){
var args__8262__auto__ = cljs.core.seq(arglist__221888);
return general$navbar$menu2__delegate(args__8262__auto__);
});
general$navbar$menu2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$menu2__delegate;
return general$navbar$menu2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.nav_menu_button = (function() { 
var general$navbar$nav_menu_button__delegate = function (args__8262__auto__){
var vec__221902 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221902,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221902,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__221905 = cljs.core.cst$kw$style;
var G__221906 = tailrecursion.javelin.formula(((function (G__221905,vec__221902,_,___$1){
return (function (G__221909,G__221910){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__221909.cljs$core$IFn$_invoke$arity$2 ? G__221909.cljs$core$IFn$_invoke$arity$2("menu",G__221910) : G__221909.call(null,"menu",G__221910)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__221905,vec__221902,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__221907 = cljs.core.cst$kw$class;
var G__221908 = tailrecursion.javelin.formula(((function (G__221905,G__221906,G__221907,vec__221902,_,___$1){
return (function (G__221912,G__221913,G__221911){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__221914 = (G__221912.cljs$core$IFn$_invoke$arity$2 ? G__221912.cljs$core$IFn$_invoke$arity$2("menu",G__221913) : G__221912.call(null,"menu",G__221913));
return (G__221911.cljs$core$IFn$_invoke$arity$1 ? G__221911.cljs$core$IFn$_invoke$arity$1(G__221914) : G__221911.call(null,G__221914));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__221912.cljs$core$IFn$_invoke$arity$2 ? G__221912.cljs$core$IFn$_invoke$arity$2("menu",G__221913) : G__221912.call(null,"menu",G__221913))], null);
});})(G__221905,G__221906,G__221907,vec__221902,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__221905,G__221906,G__221907,G__221908) : tailrecursion.hoplon.span.call(null,G__221905,G__221906,G__221907,G__221908));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221915__i = 0, G__221915__a = new Array(arguments.length -  0);
while (G__221915__i < G__221915__a.length) {G__221915__a[G__221915__i] = arguments[G__221915__i + 0]; ++G__221915__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221915__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__221916){
var args__8262__auto__ = cljs.core.seq(arglist__221916);
return general$navbar$nav_menu_button__delegate(args__8262__auto__);
});
general$navbar$nav_menu_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_menu_button__delegate;
return general$navbar$nav_menu_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.item = (function() { 
var general$navbar$item__delegate = function (args__8262__auto__){
var vec__221932 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__221933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221932,(0),null);
var map__221933__$1 = ((((!((map__221933 == null)))?((((map__221933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__221933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__221933):map__221933);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__221933__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221932,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__221938 = cljs.core.cst$kw$class;
var G__221939 = tailrecursion.javelin.formula(((function (G__221938,lc_name,vec__221932,map__221933,map__221933__$1,name,_){
return (function (G__221941,G__221942,G__221943){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__221941.cljs$core$IFn$_invoke$arity$2 ? G__221941.cljs$core$IFn$_invoke$arity$2(G__221942,G__221943) : G__221941.call(null,G__221942,G__221943))], null);
});})(G__221938,lc_name,vec__221932,map__221933,map__221933__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__221940 = (function (){var G__221944 = cljs.core.cst$kw$href;
var G__221945 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__221946 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__221944,G__221945,G__221946) : tailrecursion.hoplon.a.call(null,G__221944,G__221945,G__221946));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221938,G__221939,G__221940) : tailrecursion.hoplon.li.call(null,G__221938,G__221939,G__221940));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221947__i = 0, G__221947__a = new Array(arguments.length -  0);
while (G__221947__i < G__221947__a.length) {G__221947__a[G__221947__i] = arguments[G__221947__i + 0]; ++G__221947__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221947__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__221948){
var args__8262__auto__ = cljs.core.seq(arglist__221948);
return general$navbar$item__delegate(args__8262__auto__);
});
general$navbar$item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$item__delegate;
return general$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.home_item = (function() { 
var general$navbar$home_item__delegate = function (args__8262__auto__){
var vec__221957 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221957,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221957,(1),null);
var G__221960 = cljs.core.cst$kw$class;
var G__221961 = tailrecursion.javelin.formula(((function (G__221960,vec__221957,_,___$1){
return (function (G__221963,G__221964){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__221963.cljs$core$IFn$_invoke$arity$2 ? G__221963.cljs$core$IFn$_invoke$arity$2(G__221964,null) : G__221963.call(null,G__221964,null))) || ((G__221963.cljs$core$IFn$_invoke$arity$2 ? G__221963.cljs$core$IFn$_invoke$arity$2(G__221964,"index") : G__221963.call(null,G__221964,"index")))], null);
});})(G__221960,vec__221957,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__221962 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221960,G__221961,G__221962) : tailrecursion.hoplon.li.call(null,G__221960,G__221961,G__221962));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221965__i = 0, G__221965__a = new Array(arguments.length -  0);
while (G__221965__i < G__221965__a.length) {G__221965__a[G__221965__i] = arguments[G__221965__i + 0]; ++G__221965__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221965__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__221966){
var args__8262__auto__ = cljs.core.seq(arglist__221966);
return general$navbar$home_item__delegate(args__8262__auto__);
});
general$navbar$home_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$home_item__delegate;
return general$navbar$home_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.sicp_item = (function() { 
var general$navbar$sicp_item__delegate = function (args__8262__auto__){
var vec__221975 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221975,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221975,(1),null);
var G__221978 = cljs.core.cst$kw$class;
var G__221979 = tailrecursion.javelin.formula(((function (G__221978,vec__221975,_,___$1){
return (function (G__221981,G__221982){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__221981.cljs$core$IFn$_invoke$arity$2 ? G__221981.cljs$core$IFn$_invoke$arity$2(G__221982,"book") : G__221981.call(null,G__221982,"book"))], null);
});})(G__221978,vec__221975,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__221980 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221978,G__221979,G__221980) : tailrecursion.hoplon.li.call(null,G__221978,G__221979,G__221980));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221983__i = 0, G__221983__a = new Array(arguments.length -  0);
while (G__221983__i < G__221983__a.length) {G__221983__a[G__221983__i] = arguments[G__221983__i + 0]; ++G__221983__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221983__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__221984){
var args__8262__auto__ = cljs.core.seq(arglist__221984);
return general$navbar$sicp_item__delegate(args__8262__auto__);
});
general$navbar$sicp_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$sicp_item__delegate;
return general$navbar$sicp_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_offset = (function() { 
var general$navbar$fixed_offset__delegate = function (args__8262__auto__){
var vec__221986 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221986,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221986,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221987__i = 0, G__221987__a = new Array(arguments.length -  0);
while (G__221987__i < G__221987__a.length) {G__221987__a[G__221987__i] = arguments[G__221987__i + 0]; ++G__221987__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221987__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__221988){
var args__8262__auto__ = cljs.core.seq(arglist__221988);
return general$navbar$fixed_offset__delegate(args__8262__auto__);
});
general$navbar$fixed_offset.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_offset__delegate;
return general$navbar$fixed_offset;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_nav = (function() { 
var general$navbar$fixed_nav__delegate = function (args__8262__auto__){
var vec__221990 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221990,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221990,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221991__i = 0, G__221991__a = new Array(arguments.length -  0);
while (G__221991__i < G__221991__a.length) {G__221991__a[G__221991__i] = arguments[G__221991__i + 0]; ++G__221991__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221991__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__221992){
var args__8262__auto__ = cljs.core.seq(arglist__221992);
return general$navbar$fixed_nav__delegate(args__8262__auto__);
});
general$navbar$fixed_nav.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_nav__delegate;
return general$navbar$fixed_nav;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed = (function() { 
var general$navbar$fixed__delegate = function (args__8262__auto__){
var vec__221996 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221996,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221996,(1),null);
var G__221997 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__221998 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__221997,G__221998) : tailrecursion.hoplon.div.call(null,G__221997,G__221998));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__221999__i = 0, G__221999__a = new Array(arguments.length -  0);
while (G__221999__i < G__221999__a.length) {G__221999__a[G__221999__i] = arguments[G__221999__i + 0]; ++G__221999__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__221999__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__222000){
var args__8262__auto__ = cljs.core.seq(arglist__222000);
return general$navbar$fixed__delegate(args__8262__auto__);
});
general$navbar$fixed.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed__delegate;
return general$navbar$fixed;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static$ = (function() { 
var general$navbar$static__delegate = function (args__8262__auto__){
var vec__222002 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__222002,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__222002,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__222003__i = 0, G__222003__a = new Array(arguments.length -  0);
while (G__222003__i < G__222003__a.length) {G__222003__a[G__222003__i] = arguments[G__222003__i + 0]; ++G__222003__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__222003__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__222004){
var args__8262__auto__ = cljs.core.seq(arglist__222004);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
