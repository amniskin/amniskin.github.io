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
var general$navbar$nav_button__delegate = function (args__8082__auto__){
var vec__221629 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__221630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221629,(0),null);
var map__221630__$1 = ((((!((map__221630 == null)))?((((map__221630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__221630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__221630):map__221630);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__221630__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221629,(1),null);
var G__221635 = cljs.core.cst$kw$type;
var G__221636 = "button";
var G__221637 = cljs.core.cst$kw$class;
var G__221638 = tailrecursion.javelin.formula(((function (G__221635,G__221636,G__221637,vec__221629,map__221630,map__221630__$1,name,kids){
return (function (G__221642,G__221643,G__221644){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__221642.cljs$core$IFn$_invoke$arity$2 ? G__221642.cljs$core$IFn$_invoke$arity$2(G__221643,G__221644) : G__221642.call(null,G__221643,G__221644))], null);
});})(G__221635,G__221636,G__221637,vec__221629,map__221630,map__221630__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__221639 = cljs.core.cst$kw$click;
var G__221640 = ((function (G__221635,G__221636,G__221637,G__221638,G__221639,vec__221629,map__221630,map__221630__$1,name,kids){
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
});})(G__221635,G__221636,G__221637,G__221638,G__221639,vec__221629,map__221630,map__221630__$1,name,kids))
;
var G__221641 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__221635,G__221636,G__221637,G__221638,G__221639,G__221640,G__221641) : tailrecursion.hoplon.button.call(null,G__221635,G__221636,G__221637,G__221638,G__221639,G__221640,G__221641));
};
var general$navbar$nav_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221645__i = 0, G__221645__a = new Array(arguments.length -  0);
while (G__221645__i < G__221645__a.length) {G__221645__a[G__221645__i] = arguments[G__221645__i + 0]; ++G__221645__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221645__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__221646){
var args__8082__auto__ = cljs.core.seq(arglist__221646);
return general$navbar$nav_button__delegate(args__8082__auto__);
});
general$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_button__delegate;
return general$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_bar = (function() { 
var general$navbar$fixed_bar__delegate = function (args__8082__auto__){
var vec__221651 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221651,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221651,(1),null);
var G__221652 = cljs.core.cst$kw$class;
var G__221653 = "navbar navbar-inverse navbar-fixed-top";
var G__221654 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__221652,G__221653,G__221654) : tailrecursion.hoplon.div.call(null,G__221652,G__221653,G__221654));
};
var general$navbar$fixed_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221655__i = 0, G__221655__a = new Array(arguments.length -  0);
while (G__221655__i < G__221655__a.length) {G__221655__a[G__221655__i] = arguments[G__221655__i + 0]; ++G__221655__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221655__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__221656){
var args__8082__auto__ = cljs.core.seq(arglist__221656);
return general$navbar$fixed_bar__delegate(args__8082__auto__);
});
general$navbar$fixed_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_bar__delegate;
return general$navbar$fixed_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static_bar = (function() { 
var general$navbar$static_bar__delegate = function (args__8082__auto__){
var vec__221663 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221663,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221663,(1),null);
var G__221664 = cljs.core.cst$kw$class;
var G__221665 = "navbar navbar-inverse navbar-static-top";
var G__221666 = cljs.core.cst$kw$style;
var G__221667 = "margin-bottom:0;";
var G__221668 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__221664,G__221665,G__221666,G__221667,G__221668) : tailrecursion.hoplon.div.call(null,G__221664,G__221665,G__221666,G__221667,G__221668));
};
var general$navbar$static_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221669__i = 0, G__221669__a = new Array(arguments.length -  0);
while (G__221669__i < G__221669__a.length) {G__221669__a[G__221669__i] = arguments[G__221669__i + 0]; ++G__221669__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221669__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8082__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__221670){
var args__8082__auto__ = cljs.core.seq(arglist__221670);
return general$navbar$static_bar__delegate(args__8082__auto__);
});
general$navbar$static_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static_bar__delegate;
return general$navbar$static_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.header2 = (function() { 
var general$navbar$header2__delegate = function (args__8082__auto__){
var vec__221672 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221672,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221672,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221673__i = 0, G__221673__a = new Array(arguments.length -  0);
while (G__221673__i < G__221673__a.length) {G__221673__a[G__221673__i] = arguments[G__221673__i + 0]; ++G__221673__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221673__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8082__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__221674){
var args__8082__auto__ = cljs.core.seq(arglist__221674);
return general$navbar$header2__delegate(args__8082__auto__);
});
general$navbar$header2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$header2__delegate;
return general$navbar$header2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.brand = (function() { 
var general$navbar$brand__delegate = function (args__8082__auto__){
var vec__221682 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221682,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221682,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__221683 = cljs.core.cst$kw$class;
var G__221684 = "navbar-brand";
var G__221685 = cljs.core.cst$kw$click;
var G__221686 = ((function (G__221683,G__221684,G__221685,vec__221682,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__221683,G__221684,G__221685,vec__221682,_,kids))
;
var G__221687 = cljs.core.cst$kw$href;
var G__221688 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__221683,G__221684,G__221685,G__221686,G__221687,G__221688) : tailrecursion.hoplon.a.call(null,G__221683,G__221684,G__221685,G__221686,G__221687,G__221688));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221689__i = 0, G__221689__a = new Array(arguments.length -  0);
while (G__221689__i < G__221689__a.length) {G__221689__a[G__221689__i] = arguments[G__221689__i + 0]; ++G__221689__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221689__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8082__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__221690){
var args__8082__auto__ = cljs.core.seq(arglist__221690);
return general$navbar$brand__delegate(args__8082__auto__);
});
general$navbar$brand.cljs$core$IFn$_invoke$arity$variadic = general$navbar$brand__delegate;
return general$navbar$brand;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.menu2 = (function() { 
var general$navbar$menu2__delegate = function (args__8082__auto__){
var vec__221699 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221699,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221699,(1),null);
var G__221702 = cljs.core.cst$kw$class;
var G__221703 = tailrecursion.javelin.formula(((function (G__221702,vec__221699,attr,kids){
return (function (G__221705,G__221706){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__221705.cljs$core$IFn$_invoke$arity$2 ? G__221705.cljs$core$IFn$_invoke$arity$2(G__221706,"menu") : G__221705.call(null,G__221706,"menu"))], null);
});})(G__221702,vec__221699,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__221704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__221702,G__221703,G__221704) : tailrecursion.hoplon.div.call(null,G__221702,G__221703,G__221704));
};
var general$navbar$menu2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221707__i = 0, G__221707__a = new Array(arguments.length -  0);
while (G__221707__i < G__221707__a.length) {G__221707__a[G__221707__i] = arguments[G__221707__i + 0]; ++G__221707__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221707__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8082__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__221708){
var args__8082__auto__ = cljs.core.seq(arglist__221708);
return general$navbar$menu2__delegate(args__8082__auto__);
});
general$navbar$menu2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$menu2__delegate;
return general$navbar$menu2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.nav_menu_button = (function() { 
var general$navbar$nav_menu_button__delegate = function (args__8082__auto__){
var vec__221722 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221722,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221722,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__221725 = cljs.core.cst$kw$style;
var G__221726 = tailrecursion.javelin.formula(((function (G__221725,vec__221722,_,___$1){
return (function (G__221729,G__221730){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__221729.cljs$core$IFn$_invoke$arity$2 ? G__221729.cljs$core$IFn$_invoke$arity$2("menu",G__221730) : G__221729.call(null,"menu",G__221730)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__221725,vec__221722,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__221727 = cljs.core.cst$kw$class;
var G__221728 = tailrecursion.javelin.formula(((function (G__221725,G__221726,G__221727,vec__221722,_,___$1){
return (function (G__221732,G__221733,G__221731){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__221734 = (G__221732.cljs$core$IFn$_invoke$arity$2 ? G__221732.cljs$core$IFn$_invoke$arity$2("menu",G__221733) : G__221732.call(null,"menu",G__221733));
return (G__221731.cljs$core$IFn$_invoke$arity$1 ? G__221731.cljs$core$IFn$_invoke$arity$1(G__221734) : G__221731.call(null,G__221734));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__221732.cljs$core$IFn$_invoke$arity$2 ? G__221732.cljs$core$IFn$_invoke$arity$2("menu",G__221733) : G__221732.call(null,"menu",G__221733))], null);
});})(G__221725,G__221726,G__221727,vec__221722,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__221725,G__221726,G__221727,G__221728) : tailrecursion.hoplon.span.call(null,G__221725,G__221726,G__221727,G__221728));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221735__i = 0, G__221735__a = new Array(arguments.length -  0);
while (G__221735__i < G__221735__a.length) {G__221735__a[G__221735__i] = arguments[G__221735__i + 0]; ++G__221735__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221735__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__221736){
var args__8082__auto__ = cljs.core.seq(arglist__221736);
return general$navbar$nav_menu_button__delegate(args__8082__auto__);
});
general$navbar$nav_menu_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_menu_button__delegate;
return general$navbar$nav_menu_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.item = (function() { 
var general$navbar$item__delegate = function (args__8082__auto__){
var vec__221752 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__221753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221752,(0),null);
var map__221753__$1 = ((((!((map__221753 == null)))?((((map__221753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__221753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__221753):map__221753);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__221753__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221752,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__221758 = cljs.core.cst$kw$class;
var G__221759 = tailrecursion.javelin.formula(((function (G__221758,lc_name,vec__221752,map__221753,map__221753__$1,name,_){
return (function (G__221761,G__221762,G__221763){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__221761.cljs$core$IFn$_invoke$arity$2 ? G__221761.cljs$core$IFn$_invoke$arity$2(G__221762,G__221763) : G__221761.call(null,G__221762,G__221763))], null);
});})(G__221758,lc_name,vec__221752,map__221753,map__221753__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__221760 = (function (){var G__221764 = cljs.core.cst$kw$href;
var G__221765 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__221766 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__221764,G__221765,G__221766) : tailrecursion.hoplon.a.call(null,G__221764,G__221765,G__221766));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221758,G__221759,G__221760) : tailrecursion.hoplon.li.call(null,G__221758,G__221759,G__221760));
};
var general$navbar$item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221767__i = 0, G__221767__a = new Array(arguments.length -  0);
while (G__221767__i < G__221767__a.length) {G__221767__a[G__221767__i] = arguments[G__221767__i + 0]; ++G__221767__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221767__a,0);
} 
return general$navbar$item__delegate.call(this,args__8082__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__221768){
var args__8082__auto__ = cljs.core.seq(arglist__221768);
return general$navbar$item__delegate(args__8082__auto__);
});
general$navbar$item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$item__delegate;
return general$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.home_item = (function() { 
var general$navbar$home_item__delegate = function (args__8082__auto__){
var vec__221777 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221777,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221777,(1),null);
var G__221780 = cljs.core.cst$kw$class;
var G__221781 = tailrecursion.javelin.formula(((function (G__221780,vec__221777,_,___$1){
return (function (G__221783,G__221784){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__221783.cljs$core$IFn$_invoke$arity$2 ? G__221783.cljs$core$IFn$_invoke$arity$2(G__221784,null) : G__221783.call(null,G__221784,null))) || ((G__221783.cljs$core$IFn$_invoke$arity$2 ? G__221783.cljs$core$IFn$_invoke$arity$2(G__221784,"index") : G__221783.call(null,G__221784,"index")))], null);
});})(G__221780,vec__221777,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__221782 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221780,G__221781,G__221782) : tailrecursion.hoplon.li.call(null,G__221780,G__221781,G__221782));
};
var general$navbar$home_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221785__i = 0, G__221785__a = new Array(arguments.length -  0);
while (G__221785__i < G__221785__a.length) {G__221785__a[G__221785__i] = arguments[G__221785__i + 0]; ++G__221785__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221785__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8082__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__221786){
var args__8082__auto__ = cljs.core.seq(arglist__221786);
return general$navbar$home_item__delegate(args__8082__auto__);
});
general$navbar$home_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$home_item__delegate;
return general$navbar$home_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.sicp_item = (function() { 
var general$navbar$sicp_item__delegate = function (args__8082__auto__){
var vec__221795 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221795,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221795,(1),null);
var G__221798 = cljs.core.cst$kw$class;
var G__221799 = tailrecursion.javelin.formula(((function (G__221798,vec__221795,_,___$1){
return (function (G__221801,G__221802){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__221801.cljs$core$IFn$_invoke$arity$2 ? G__221801.cljs$core$IFn$_invoke$arity$2(G__221802,"book") : G__221801.call(null,G__221802,"book"))], null);
});})(G__221798,vec__221795,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__221800 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__221798,G__221799,G__221800) : tailrecursion.hoplon.li.call(null,G__221798,G__221799,G__221800));
};
var general$navbar$sicp_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221803__i = 0, G__221803__a = new Array(arguments.length -  0);
while (G__221803__i < G__221803__a.length) {G__221803__a[G__221803__i] = arguments[G__221803__i + 0]; ++G__221803__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221803__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8082__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__221804){
var args__8082__auto__ = cljs.core.seq(arglist__221804);
return general$navbar$sicp_item__delegate(args__8082__auto__);
});
general$navbar$sicp_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$sicp_item__delegate;
return general$navbar$sicp_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_offset = (function() { 
var general$navbar$fixed_offset__delegate = function (args__8082__auto__){
var vec__221806 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221806,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221806,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221807__i = 0, G__221807__a = new Array(arguments.length -  0);
while (G__221807__i < G__221807__a.length) {G__221807__a[G__221807__i] = arguments[G__221807__i + 0]; ++G__221807__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221807__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__221808){
var args__8082__auto__ = cljs.core.seq(arglist__221808);
return general$navbar$fixed_offset__delegate(args__8082__auto__);
});
general$navbar$fixed_offset.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_offset__delegate;
return general$navbar$fixed_offset;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_nav = (function() { 
var general$navbar$fixed_nav__delegate = function (args__8082__auto__){
var vec__221810 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221810,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221810,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221811__i = 0, G__221811__a = new Array(arguments.length -  0);
while (G__221811__i < G__221811__a.length) {G__221811__a[G__221811__i] = arguments[G__221811__i + 0]; ++G__221811__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221811__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__221812){
var args__8082__auto__ = cljs.core.seq(arglist__221812);
return general$navbar$fixed_nav__delegate(args__8082__auto__);
});
general$navbar$fixed_nav.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_nav__delegate;
return general$navbar$fixed_nav;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed = (function() { 
var general$navbar$fixed__delegate = function (args__8082__auto__){
var vec__221816 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221816,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221816,(1),null);
var G__221817 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__221818 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__221817,G__221818) : tailrecursion.hoplon.div.call(null,G__221817,G__221818));
};
var general$navbar$fixed = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221819__i = 0, G__221819__a = new Array(arguments.length -  0);
while (G__221819__i < G__221819__a.length) {G__221819__a[G__221819__i] = arguments[G__221819__i + 0]; ++G__221819__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221819__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8082__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__221820){
var args__8082__auto__ = cljs.core.seq(arglist__221820);
return general$navbar$fixed__delegate(args__8082__auto__);
});
general$navbar$fixed.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed__delegate;
return general$navbar$fixed;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static$ = (function() { 
var general$navbar$static__delegate = function (args__8082__auto__){
var vec__221822 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221822,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__221822,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__221823__i = 0, G__221823__a = new Array(arguments.length -  0);
while (G__221823__i < G__221823__a.length) {G__221823__a[G__221823__i] = arguments[G__221823__i + 0]; ++G__221823__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__221823__a,0);
} 
return general$navbar$static__delegate.call(this,args__8082__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__221824){
var args__8082__auto__ = cljs.core.seq(arglist__221824);
return general$navbar$static__delegate(args__8082__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
