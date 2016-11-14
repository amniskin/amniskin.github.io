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
var vec__8798 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__8799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8798,(0),null);
var map__8799__$1 = ((((!((map__8799 == null)))?((((map__8799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8799):map__8799);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8799__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8798,(1),null);
var G__8804 = cljs.core.cst$kw$type;
var G__8805 = "button";
var G__8806 = cljs.core.cst$kw$class;
var G__8807 = tailrecursion.javelin.formula(((function (G__8804,G__8805,G__8806,vec__8798,map__8799,map__8799__$1,name,kids){
return (function (G__8811,G__8812,G__8813){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__8811.cljs$core$IFn$_invoke$arity$2 ? G__8811.cljs$core$IFn$_invoke$arity$2(G__8812,G__8813) : G__8811.call(null,G__8812,G__8813))], null);
});})(G__8804,G__8805,G__8806,vec__8798,map__8799,map__8799__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__8808 = cljs.core.cst$kw$click;
var G__8809 = ((function (G__8804,G__8805,G__8806,G__8807,G__8808,vec__8798,map__8799,map__8799__$1,name,kids){
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
});})(G__8804,G__8805,G__8806,G__8807,G__8808,vec__8798,map__8799,map__8799__$1,name,kids))
;
var G__8810 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__8804,G__8805,G__8806,G__8807,G__8808,G__8809,G__8810) : tailrecursion.hoplon.button.call(null,G__8804,G__8805,G__8806,G__8807,G__8808,G__8809,G__8810));
};
var general$navbar$nav_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8814__i = 0, G__8814__a = new Array(arguments.length -  0);
while (G__8814__i < G__8814__a.length) {G__8814__a[G__8814__i] = arguments[G__8814__i + 0]; ++G__8814__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8814__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__8815){
var args__8082__auto__ = cljs.core.seq(arglist__8815);
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
var vec__8820 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8820,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8820,(1),null);
var G__8821 = cljs.core.cst$kw$class;
var G__8822 = "navbar navbar-inverse navbar-fixed-top";
var G__8823 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8821,G__8822,G__8823) : tailrecursion.hoplon.div.call(null,G__8821,G__8822,G__8823));
};
var general$navbar$fixed_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8824__i = 0, G__8824__a = new Array(arguments.length -  0);
while (G__8824__i < G__8824__a.length) {G__8824__a[G__8824__i] = arguments[G__8824__i + 0]; ++G__8824__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8824__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__8825){
var args__8082__auto__ = cljs.core.seq(arglist__8825);
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
var vec__8832 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8832,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8832,(1),null);
var G__8833 = cljs.core.cst$kw$class;
var G__8834 = "navbar navbar-inverse navbar-static-top";
var G__8835 = cljs.core.cst$kw$style;
var G__8836 = "margin-bottom:0;";
var G__8837 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__8833,G__8834,G__8835,G__8836,G__8837) : tailrecursion.hoplon.div.call(null,G__8833,G__8834,G__8835,G__8836,G__8837));
};
var general$navbar$static_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8838__i = 0, G__8838__a = new Array(arguments.length -  0);
while (G__8838__i < G__8838__a.length) {G__8838__a[G__8838__i] = arguments[G__8838__i + 0]; ++G__8838__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8838__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8082__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__8839){
var args__8082__auto__ = cljs.core.seq(arglist__8839);
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
var vec__8841 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8842__i = 0, G__8842__a = new Array(arguments.length -  0);
while (G__8842__i < G__8842__a.length) {G__8842__a[G__8842__i] = arguments[G__8842__i + 0]; ++G__8842__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8842__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8082__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__8843){
var args__8082__auto__ = cljs.core.seq(arglist__8843);
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
var vec__8851 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8851,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8851,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__8852 = cljs.core.cst$kw$class;
var G__8853 = "navbar-brand";
var G__8854 = cljs.core.cst$kw$click;
var G__8855 = ((function (G__8852,G__8853,G__8854,vec__8851,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__8852,G__8853,G__8854,vec__8851,_,kids))
;
var G__8856 = cljs.core.cst$kw$href;
var G__8857 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__8852,G__8853,G__8854,G__8855,G__8856,G__8857) : tailrecursion.hoplon.a.call(null,G__8852,G__8853,G__8854,G__8855,G__8856,G__8857));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8858__i = 0, G__8858__a = new Array(arguments.length -  0);
while (G__8858__i < G__8858__a.length) {G__8858__a[G__8858__i] = arguments[G__8858__i + 0]; ++G__8858__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8858__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8082__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__8859){
var args__8082__auto__ = cljs.core.seq(arglist__8859);
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
var vec__8868 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8868,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8868,(1),null);
var G__8871 = cljs.core.cst$kw$class;
var G__8872 = tailrecursion.javelin.formula(((function (G__8871,vec__8868,attr,kids){
return (function (G__8874,G__8875){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__8874.cljs$core$IFn$_invoke$arity$2 ? G__8874.cljs$core$IFn$_invoke$arity$2(G__8875,"menu") : G__8874.call(null,G__8875,"menu"))], null);
});})(G__8871,vec__8868,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__8873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8871,G__8872,G__8873) : tailrecursion.hoplon.div.call(null,G__8871,G__8872,G__8873));
};
var general$navbar$menu2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8876__i = 0, G__8876__a = new Array(arguments.length -  0);
while (G__8876__i < G__8876__a.length) {G__8876__a[G__8876__i] = arguments[G__8876__i + 0]; ++G__8876__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8876__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8082__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__8877){
var args__8082__auto__ = cljs.core.seq(arglist__8877);
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
var vec__8891 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8891,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__8894 = cljs.core.cst$kw$style;
var G__8895 = tailrecursion.javelin.formula(((function (G__8894,vec__8891,_,___$1){
return (function (G__8898,G__8899){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__8898.cljs$core$IFn$_invoke$arity$2 ? G__8898.cljs$core$IFn$_invoke$arity$2("menu",G__8899) : G__8898.call(null,"menu",G__8899)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__8894,vec__8891,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__8896 = cljs.core.cst$kw$class;
var G__8897 = tailrecursion.javelin.formula(((function (G__8894,G__8895,G__8896,vec__8891,_,___$1){
return (function (G__8901,G__8902,G__8900){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__8903 = (G__8901.cljs$core$IFn$_invoke$arity$2 ? G__8901.cljs$core$IFn$_invoke$arity$2("menu",G__8902) : G__8901.call(null,"menu",G__8902));
return (G__8900.cljs$core$IFn$_invoke$arity$1 ? G__8900.cljs$core$IFn$_invoke$arity$1(G__8903) : G__8900.call(null,G__8903));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__8901.cljs$core$IFn$_invoke$arity$2 ? G__8901.cljs$core$IFn$_invoke$arity$2("menu",G__8902) : G__8901.call(null,"menu",G__8902))], null);
});})(G__8894,G__8895,G__8896,vec__8891,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__8894,G__8895,G__8896,G__8897) : tailrecursion.hoplon.span.call(null,G__8894,G__8895,G__8896,G__8897));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8904__i = 0, G__8904__a = new Array(arguments.length -  0);
while (G__8904__i < G__8904__a.length) {G__8904__a[G__8904__i] = arguments[G__8904__i + 0]; ++G__8904__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8904__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__8905){
var args__8082__auto__ = cljs.core.seq(arglist__8905);
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
var vec__8921 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__8922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8921,(0),null);
var map__8922__$1 = ((((!((map__8922 == null)))?((((map__8922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8922):map__8922);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8922__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8921,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__8927 = cljs.core.cst$kw$class;
var G__8928 = tailrecursion.javelin.formula(((function (G__8927,lc_name,vec__8921,map__8922,map__8922__$1,name,_){
return (function (G__8930,G__8931,G__8932){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__8930.cljs$core$IFn$_invoke$arity$2 ? G__8930.cljs$core$IFn$_invoke$arity$2(G__8931,G__8932) : G__8930.call(null,G__8931,G__8932))], null);
});})(G__8927,lc_name,vec__8921,map__8922,map__8922__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__8929 = (function (){var G__8933 = cljs.core.cst$kw$href;
var G__8934 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__8935 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__8933,G__8934,G__8935) : tailrecursion.hoplon.a.call(null,G__8933,G__8934,G__8935));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__8927,G__8928,G__8929) : tailrecursion.hoplon.li.call(null,G__8927,G__8928,G__8929));
};
var general$navbar$item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8936__i = 0, G__8936__a = new Array(arguments.length -  0);
while (G__8936__i < G__8936__a.length) {G__8936__a[G__8936__i] = arguments[G__8936__i + 0]; ++G__8936__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8936__a,0);
} 
return general$navbar$item__delegate.call(this,args__8082__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__8937){
var args__8082__auto__ = cljs.core.seq(arglist__8937);
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
var vec__8946 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,(1),null);
var G__8949 = cljs.core.cst$kw$class;
var G__8950 = tailrecursion.javelin.formula(((function (G__8949,vec__8946,_,___$1){
return (function (G__8952,G__8953){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__8952.cljs$core$IFn$_invoke$arity$2 ? G__8952.cljs$core$IFn$_invoke$arity$2(G__8953,null) : G__8952.call(null,G__8953,null))) || ((G__8952.cljs$core$IFn$_invoke$arity$2 ? G__8952.cljs$core$IFn$_invoke$arity$2(G__8953,"index") : G__8952.call(null,G__8953,"index")))], null);
});})(G__8949,vec__8946,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__8951 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__8949,G__8950,G__8951) : tailrecursion.hoplon.li.call(null,G__8949,G__8950,G__8951));
};
var general$navbar$home_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8954__i = 0, G__8954__a = new Array(arguments.length -  0);
while (G__8954__i < G__8954__a.length) {G__8954__a[G__8954__i] = arguments[G__8954__i + 0]; ++G__8954__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8954__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8082__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__8955){
var args__8082__auto__ = cljs.core.seq(arglist__8955);
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
var vec__8964 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8964,(1),null);
var G__8967 = cljs.core.cst$kw$class;
var G__8968 = tailrecursion.javelin.formula(((function (G__8967,vec__8964,_,___$1){
return (function (G__8970,G__8971){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__8970.cljs$core$IFn$_invoke$arity$2 ? G__8970.cljs$core$IFn$_invoke$arity$2(G__8971,"book") : G__8970.call(null,G__8971,"book"))], null);
});})(G__8967,vec__8964,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__8969 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__8967,G__8968,G__8969) : tailrecursion.hoplon.li.call(null,G__8967,G__8968,G__8969));
};
var general$navbar$sicp_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8972__i = 0, G__8972__a = new Array(arguments.length -  0);
while (G__8972__i < G__8972__a.length) {G__8972__a[G__8972__i] = arguments[G__8972__i + 0]; ++G__8972__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8972__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8082__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__8973){
var args__8082__auto__ = cljs.core.seq(arglist__8973);
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
var vec__8975 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8975,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8975,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8976__i = 0, G__8976__a = new Array(arguments.length -  0);
while (G__8976__i < G__8976__a.length) {G__8976__a[G__8976__i] = arguments[G__8976__i + 0]; ++G__8976__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8976__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__8977){
var args__8082__auto__ = cljs.core.seq(arglist__8977);
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
var vec__8979 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8979,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8979,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8980__i = 0, G__8980__a = new Array(arguments.length -  0);
while (G__8980__i < G__8980__a.length) {G__8980__a[G__8980__i] = arguments[G__8980__i + 0]; ++G__8980__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8980__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__8981){
var args__8082__auto__ = cljs.core.seq(arglist__8981);
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
var vec__8985 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8985,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8985,(1),null);
var G__8986 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__8987 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__8986,G__8987) : tailrecursion.hoplon.div.call(null,G__8986,G__8987));
};
var general$navbar$fixed = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8988__i = 0, G__8988__a = new Array(arguments.length -  0);
while (G__8988__i < G__8988__a.length) {G__8988__a[G__8988__i] = arguments[G__8988__i + 0]; ++G__8988__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8988__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8082__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__8989){
var args__8082__auto__ = cljs.core.seq(arglist__8989);
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
var vec__8991 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8991,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8991,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__8992__i = 0, G__8992__a = new Array(arguments.length -  0);
while (G__8992__i < G__8992__a.length) {G__8992__a[G__8992__i] = arguments[G__8992__i + 0]; ++G__8992__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__8992__a,0);
} 
return general$navbar$static__delegate.call(this,args__8082__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__8993){
var args__8082__auto__ = cljs.core.seq(arglist__8993);
return general$navbar$static__delegate(args__8082__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
