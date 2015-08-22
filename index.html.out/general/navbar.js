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
var vec__9756 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9756,(0),null);
var map__9757__$1 = ((((!((map__9757 == null)))?((((map__9757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9757):map__9757);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9757__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9756,(1),null);
var G__9762 = cljs.core.cst$kw$type;
var G__9763 = "button";
var G__9764 = cljs.core.cst$kw$class;
var G__9765 = tailrecursion.javelin.formula(((function (G__9762,G__9763,G__9764,vec__9756,map__9757,map__9757__$1,name,kids){
return (function (G__9769,G__9770,G__9771){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__9769.cljs$core$IFn$_invoke$arity$2 ? G__9769.cljs$core$IFn$_invoke$arity$2(G__9770,G__9771) : G__9769.call(null,G__9770,G__9771))], null);
});})(G__9762,G__9763,G__9764,vec__9756,map__9757,map__9757__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__9766 = cljs.core.cst$kw$click;
var G__9767 = ((function (G__9762,G__9763,G__9764,G__9765,G__9766,vec__9756,map__9757,map__9757__$1,name,kids){
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
});})(G__9762,G__9763,G__9764,G__9765,G__9766,vec__9756,map__9757,map__9757__$1,name,kids))
;
var G__9768 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__9762,G__9763,G__9764,G__9765,G__9766,G__9767,G__9768) : tailrecursion.hoplon.button.call(null,G__9762,G__9763,G__9764,G__9765,G__9766,G__9767,G__9768));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9772__i = 0, G__9772__a = new Array(arguments.length -  0);
while (G__9772__i < G__9772__a.length) {G__9772__a[G__9772__i] = arguments[G__9772__i + 0]; ++G__9772__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9772__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__9773){
var args__8262__auto__ = cljs.core.seq(arglist__9773);
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
var vec__9778 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9778,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9778,(1),null);
var G__9779 = cljs.core.cst$kw$class;
var G__9780 = "navbar navbar-inverse navbar-fixed-top";
var G__9781 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9779,G__9780,G__9781) : tailrecursion.hoplon.div.call(null,G__9779,G__9780,G__9781));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9782__i = 0, G__9782__a = new Array(arguments.length -  0);
while (G__9782__i < G__9782__a.length) {G__9782__a[G__9782__i] = arguments[G__9782__i + 0]; ++G__9782__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9782__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9783){
var args__8262__auto__ = cljs.core.seq(arglist__9783);
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
var vec__9790 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9790,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9790,(1),null);
var G__9791 = cljs.core.cst$kw$class;
var G__9792 = "navbar navbar-inverse navbar-static-top";
var G__9793 = cljs.core.cst$kw$style;
var G__9794 = "margin-bottom:0;";
var G__9795 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9791,G__9792,G__9793,G__9794,G__9795) : tailrecursion.hoplon.div.call(null,G__9791,G__9792,G__9793,G__9794,G__9795));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9796__i = 0, G__9796__a = new Array(arguments.length -  0);
while (G__9796__i < G__9796__a.length) {G__9796__a[G__9796__i] = arguments[G__9796__i + 0]; ++G__9796__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9796__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9797){
var args__8262__auto__ = cljs.core.seq(arglist__9797);
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
var vec__9799 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9799,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9799,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9800__i = 0, G__9800__a = new Array(arguments.length -  0);
while (G__9800__i < G__9800__a.length) {G__9800__a[G__9800__i] = arguments[G__9800__i + 0]; ++G__9800__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9800__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9801){
var args__8262__auto__ = cljs.core.seq(arglist__9801);
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
var vec__9809 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9809,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9809,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9810 = cljs.core.cst$kw$class;
var G__9811 = "navbar-brand";
var G__9812 = cljs.core.cst$kw$click;
var G__9813 = ((function (G__9810,G__9811,G__9812,vec__9809,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9810,G__9811,G__9812,vec__9809,_,kids))
;
var G__9814 = cljs.core.cst$kw$href;
var G__9815 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9810,G__9811,G__9812,G__9813,G__9814,G__9815) : tailrecursion.hoplon.a.call(null,G__9810,G__9811,G__9812,G__9813,G__9814,G__9815));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9816__i = 0, G__9816__a = new Array(arguments.length -  0);
while (G__9816__i < G__9816__a.length) {G__9816__a[G__9816__i] = arguments[G__9816__i + 0]; ++G__9816__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9816__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9817){
var args__8262__auto__ = cljs.core.seq(arglist__9817);
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
var vec__9826 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9826,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9826,(1),null);
var G__9829 = cljs.core.cst$kw$class;
var G__9830 = tailrecursion.javelin.formula(((function (G__9829,vec__9826,attr,kids){
return (function (G__9832,G__9833){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9832.cljs$core$IFn$_invoke$arity$2 ? G__9832.cljs$core$IFn$_invoke$arity$2(G__9833,"menu") : G__9832.call(null,G__9833,"menu"))], null);
});})(G__9829,vec__9826,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9829,G__9830,G__9831) : tailrecursion.hoplon.div.call(null,G__9829,G__9830,G__9831));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9834__i = 0, G__9834__a = new Array(arguments.length -  0);
while (G__9834__i < G__9834__a.length) {G__9834__a[G__9834__i] = arguments[G__9834__i + 0]; ++G__9834__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9834__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9835){
var args__8262__auto__ = cljs.core.seq(arglist__9835);
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
var vec__9849 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9849,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9849,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9852 = cljs.core.cst$kw$style;
var G__9853 = tailrecursion.javelin.formula(((function (G__9852,vec__9849,_,___$1){
return (function (G__9856,G__9857){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9856.cljs$core$IFn$_invoke$arity$2 ? G__9856.cljs$core$IFn$_invoke$arity$2("menu",G__9857) : G__9856.call(null,"menu",G__9857)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9852,vec__9849,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9854 = cljs.core.cst$kw$class;
var G__9855 = tailrecursion.javelin.formula(((function (G__9852,G__9853,G__9854,vec__9849,_,___$1){
return (function (G__9859,G__9860,G__9858){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9861 = (G__9859.cljs$core$IFn$_invoke$arity$2 ? G__9859.cljs$core$IFn$_invoke$arity$2("menu",G__9860) : G__9859.call(null,"menu",G__9860));
return (G__9858.cljs$core$IFn$_invoke$arity$1 ? G__9858.cljs$core$IFn$_invoke$arity$1(G__9861) : G__9858.call(null,G__9861));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9859.cljs$core$IFn$_invoke$arity$2 ? G__9859.cljs$core$IFn$_invoke$arity$2("menu",G__9860) : G__9859.call(null,"menu",G__9860))], null);
});})(G__9852,G__9853,G__9854,vec__9849,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9852,G__9853,G__9854,G__9855) : tailrecursion.hoplon.span.call(null,G__9852,G__9853,G__9854,G__9855));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9862__i = 0, G__9862__a = new Array(arguments.length -  0);
while (G__9862__i < G__9862__a.length) {G__9862__a[G__9862__i] = arguments[G__9862__i + 0]; ++G__9862__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9862__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9863){
var args__8262__auto__ = cljs.core.seq(arglist__9863);
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
var vec__9879 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,(0),null);
var map__9880__$1 = ((((!((map__9880 == null)))?((((map__9880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9880):map__9880);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9885 = cljs.core.cst$kw$class;
var G__9886 = tailrecursion.javelin.formula(((function (G__9885,lc_name,vec__9879,map__9880,map__9880__$1,name,_){
return (function (G__9888,G__9889,G__9890){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9888.cljs$core$IFn$_invoke$arity$2 ? G__9888.cljs$core$IFn$_invoke$arity$2(G__9889,G__9890) : G__9888.call(null,G__9889,G__9890))], null);
});})(G__9885,lc_name,vec__9879,map__9880,map__9880__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9887 = (function (){var G__9891 = cljs.core.cst$kw$href;
var G__9892 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9893 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9891,G__9892,G__9893) : tailrecursion.hoplon.a.call(null,G__9891,G__9892,G__9893));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9885,G__9886,G__9887) : tailrecursion.hoplon.li.call(null,G__9885,G__9886,G__9887));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9894__i = 0, G__9894__a = new Array(arguments.length -  0);
while (G__9894__i < G__9894__a.length) {G__9894__a[G__9894__i] = arguments[G__9894__i + 0]; ++G__9894__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9894__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9895){
var args__8262__auto__ = cljs.core.seq(arglist__9895);
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
var vec__9904 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,(1),null);
var G__9907 = cljs.core.cst$kw$class;
var G__9908 = tailrecursion.javelin.formula(((function (G__9907,vec__9904,_,___$1){
return (function (G__9910,G__9911){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9910.cljs$core$IFn$_invoke$arity$2 ? G__9910.cljs$core$IFn$_invoke$arity$2(G__9911,null) : G__9910.call(null,G__9911,null))) || ((G__9910.cljs$core$IFn$_invoke$arity$2 ? G__9910.cljs$core$IFn$_invoke$arity$2(G__9911,"index") : G__9910.call(null,G__9911,"index")))], null);
});})(G__9907,vec__9904,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9909 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9907,G__9908,G__9909) : tailrecursion.hoplon.li.call(null,G__9907,G__9908,G__9909));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9912__i = 0, G__9912__a = new Array(arguments.length -  0);
while (G__9912__i < G__9912__a.length) {G__9912__a[G__9912__i] = arguments[G__9912__i + 0]; ++G__9912__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9912__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9913){
var args__8262__auto__ = cljs.core.seq(arglist__9913);
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
var vec__9922 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9922,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9922,(1),null);
var G__9925 = cljs.core.cst$kw$class;
var G__9926 = tailrecursion.javelin.formula(((function (G__9925,vec__9922,_,___$1){
return (function (G__9928,G__9929){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9928.cljs$core$IFn$_invoke$arity$2 ? G__9928.cljs$core$IFn$_invoke$arity$2(G__9929,"book") : G__9928.call(null,G__9929,"book"))], null);
});})(G__9925,vec__9922,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9927 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9925,G__9926,G__9927) : tailrecursion.hoplon.li.call(null,G__9925,G__9926,G__9927));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9930__i = 0, G__9930__a = new Array(arguments.length -  0);
while (G__9930__i < G__9930__a.length) {G__9930__a[G__9930__i] = arguments[G__9930__i + 0]; ++G__9930__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9930__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9931){
var args__8262__auto__ = cljs.core.seq(arglist__9931);
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
var vec__9933 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9933,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9933,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9934__i = 0, G__9934__a = new Array(arguments.length -  0);
while (G__9934__i < G__9934__a.length) {G__9934__a[G__9934__i] = arguments[G__9934__i + 0]; ++G__9934__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9934__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9935){
var args__8262__auto__ = cljs.core.seq(arglist__9935);
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
var vec__9937 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9938__i = 0, G__9938__a = new Array(arguments.length -  0);
while (G__9938__i < G__9938__a.length) {G__9938__a[G__9938__i] = arguments[G__9938__i + 0]; ++G__9938__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9938__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9939){
var args__8262__auto__ = cljs.core.seq(arglist__9939);
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
var vec__9943 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9943,(1),null);
var G__9944 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9945 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9944,G__9945) : tailrecursion.hoplon.div.call(null,G__9944,G__9945));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9946__i = 0, G__9946__a = new Array(arguments.length -  0);
while (G__9946__i < G__9946__a.length) {G__9946__a[G__9946__i] = arguments[G__9946__i + 0]; ++G__9946__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9946__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9947){
var args__8262__auto__ = cljs.core.seq(arglist__9947);
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
var vec__9949 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9949,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9949,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9950__i = 0, G__9950__a = new Array(arguments.length -  0);
while (G__9950__i < G__9950__a.length) {G__9950__a[G__9950__i] = arguments[G__9950__i + 0]; ++G__9950__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9950__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9951){
var args__8262__auto__ = cljs.core.seq(arglist__9951);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
