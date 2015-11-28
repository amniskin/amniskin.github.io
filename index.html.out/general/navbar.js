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
var vec__9764 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764,(0),null);
var map__9765__$1 = ((((!((map__9765 == null)))?((((map__9765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9765):map__9765);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764,(1),null);
var G__9770 = cljs.core.cst$kw$type;
var G__9771 = "button";
var G__9772 = cljs.core.cst$kw$class;
var G__9773 = tailrecursion.javelin.formula(((function (G__9770,G__9771,G__9772,vec__9764,map__9765,map__9765__$1,name,kids){
return (function (G__9777,G__9778,G__9779){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__9777.cljs$core$IFn$_invoke$arity$2 ? G__9777.cljs$core$IFn$_invoke$arity$2(G__9778,G__9779) : G__9777.call(null,G__9778,G__9779))], null);
});})(G__9770,G__9771,G__9772,vec__9764,map__9765,map__9765__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__9774 = cljs.core.cst$kw$click;
var G__9775 = ((function (G__9770,G__9771,G__9772,G__9773,G__9774,vec__9764,map__9765,map__9765__$1,name,kids){
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
});})(G__9770,G__9771,G__9772,G__9773,G__9774,vec__9764,map__9765,map__9765__$1,name,kids))
;
var G__9776 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__9770,G__9771,G__9772,G__9773,G__9774,G__9775,G__9776) : tailrecursion.hoplon.button.call(null,G__9770,G__9771,G__9772,G__9773,G__9774,G__9775,G__9776));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9780__i = 0, G__9780__a = new Array(arguments.length -  0);
while (G__9780__i < G__9780__a.length) {G__9780__a[G__9780__i] = arguments[G__9780__i + 0]; ++G__9780__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9780__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__9781){
var args__8262__auto__ = cljs.core.seq(arglist__9781);
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
var vec__9786 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9786,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9786,(1),null);
var G__9787 = cljs.core.cst$kw$class;
var G__9788 = "navbar navbar-inverse navbar-fixed-top";
var G__9789 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9787,G__9788,G__9789) : tailrecursion.hoplon.div.call(null,G__9787,G__9788,G__9789));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9790__i = 0, G__9790__a = new Array(arguments.length -  0);
while (G__9790__i < G__9790__a.length) {G__9790__a[G__9790__i] = arguments[G__9790__i + 0]; ++G__9790__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9790__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9791){
var args__8262__auto__ = cljs.core.seq(arglist__9791);
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
var vec__9798 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9798,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9798,(1),null);
var G__9799 = cljs.core.cst$kw$class;
var G__9800 = "navbar navbar-inverse navbar-static-top";
var G__9801 = cljs.core.cst$kw$style;
var G__9802 = "margin-bottom:0;";
var G__9803 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9799,G__9800,G__9801,G__9802,G__9803) : tailrecursion.hoplon.div.call(null,G__9799,G__9800,G__9801,G__9802,G__9803));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9804__i = 0, G__9804__a = new Array(arguments.length -  0);
while (G__9804__i < G__9804__a.length) {G__9804__a[G__9804__i] = arguments[G__9804__i + 0]; ++G__9804__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9804__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9805){
var args__8262__auto__ = cljs.core.seq(arglist__9805);
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
var vec__9807 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9807,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9807,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9808__i = 0, G__9808__a = new Array(arguments.length -  0);
while (G__9808__i < G__9808__a.length) {G__9808__a[G__9808__i] = arguments[G__9808__i + 0]; ++G__9808__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9808__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9809){
var args__8262__auto__ = cljs.core.seq(arglist__9809);
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
var vec__9817 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9817,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9817,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9818 = cljs.core.cst$kw$class;
var G__9819 = "navbar-brand";
var G__9820 = cljs.core.cst$kw$click;
var G__9821 = ((function (G__9818,G__9819,G__9820,vec__9817,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9818,G__9819,G__9820,vec__9817,_,kids))
;
var G__9822 = cljs.core.cst$kw$href;
var G__9823 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9818,G__9819,G__9820,G__9821,G__9822,G__9823) : tailrecursion.hoplon.a.call(null,G__9818,G__9819,G__9820,G__9821,G__9822,G__9823));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9824__i = 0, G__9824__a = new Array(arguments.length -  0);
while (G__9824__i < G__9824__a.length) {G__9824__a[G__9824__i] = arguments[G__9824__i + 0]; ++G__9824__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9824__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9825){
var args__8262__auto__ = cljs.core.seq(arglist__9825);
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
var vec__9834 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9834,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9834,(1),null);
var G__9837 = cljs.core.cst$kw$class;
var G__9838 = tailrecursion.javelin.formula(((function (G__9837,vec__9834,attr,kids){
return (function (G__9840,G__9841){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9840.cljs$core$IFn$_invoke$arity$2 ? G__9840.cljs$core$IFn$_invoke$arity$2(G__9841,"menu") : G__9840.call(null,G__9841,"menu"))], null);
});})(G__9837,vec__9834,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9837,G__9838,G__9839) : tailrecursion.hoplon.div.call(null,G__9837,G__9838,G__9839));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9842__i = 0, G__9842__a = new Array(arguments.length -  0);
while (G__9842__i < G__9842__a.length) {G__9842__a[G__9842__i] = arguments[G__9842__i + 0]; ++G__9842__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9842__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9843){
var args__8262__auto__ = cljs.core.seq(arglist__9843);
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
var vec__9857 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9860 = cljs.core.cst$kw$style;
var G__9861 = tailrecursion.javelin.formula(((function (G__9860,vec__9857,_,___$1){
return (function (G__9864,G__9865){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9864.cljs$core$IFn$_invoke$arity$2 ? G__9864.cljs$core$IFn$_invoke$arity$2("menu",G__9865) : G__9864.call(null,"menu",G__9865)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9860,vec__9857,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9862 = cljs.core.cst$kw$class;
var G__9863 = tailrecursion.javelin.formula(((function (G__9860,G__9861,G__9862,vec__9857,_,___$1){
return (function (G__9867,G__9868,G__9866){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9869 = (G__9867.cljs$core$IFn$_invoke$arity$2 ? G__9867.cljs$core$IFn$_invoke$arity$2("menu",G__9868) : G__9867.call(null,"menu",G__9868));
return (G__9866.cljs$core$IFn$_invoke$arity$1 ? G__9866.cljs$core$IFn$_invoke$arity$1(G__9869) : G__9866.call(null,G__9869));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9867.cljs$core$IFn$_invoke$arity$2 ? G__9867.cljs$core$IFn$_invoke$arity$2("menu",G__9868) : G__9867.call(null,"menu",G__9868))], null);
});})(G__9860,G__9861,G__9862,vec__9857,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9860,G__9861,G__9862,G__9863) : tailrecursion.hoplon.span.call(null,G__9860,G__9861,G__9862,G__9863));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9870__i = 0, G__9870__a = new Array(arguments.length -  0);
while (G__9870__i < G__9870__a.length) {G__9870__a[G__9870__i] = arguments[G__9870__i + 0]; ++G__9870__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9870__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9871){
var args__8262__auto__ = cljs.core.seq(arglist__9871);
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
var vec__9887 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9887,(0),null);
var map__9888__$1 = ((((!((map__9888 == null)))?((((map__9888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9888):map__9888);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9888__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9887,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9893 = cljs.core.cst$kw$class;
var G__9894 = tailrecursion.javelin.formula(((function (G__9893,lc_name,vec__9887,map__9888,map__9888__$1,name,_){
return (function (G__9896,G__9897,G__9898){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9896.cljs$core$IFn$_invoke$arity$2 ? G__9896.cljs$core$IFn$_invoke$arity$2(G__9897,G__9898) : G__9896.call(null,G__9897,G__9898))], null);
});})(G__9893,lc_name,vec__9887,map__9888,map__9888__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9895 = (function (){var G__9899 = cljs.core.cst$kw$href;
var G__9900 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9901 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9899,G__9900,G__9901) : tailrecursion.hoplon.a.call(null,G__9899,G__9900,G__9901));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9893,G__9894,G__9895) : tailrecursion.hoplon.li.call(null,G__9893,G__9894,G__9895));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9902__i = 0, G__9902__a = new Array(arguments.length -  0);
while (G__9902__i < G__9902__a.length) {G__9902__a[G__9902__i] = arguments[G__9902__i + 0]; ++G__9902__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9902__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9903){
var args__8262__auto__ = cljs.core.seq(arglist__9903);
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
var vec__9912 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9912,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9912,(1),null);
var G__9915 = cljs.core.cst$kw$class;
var G__9916 = tailrecursion.javelin.formula(((function (G__9915,vec__9912,_,___$1){
return (function (G__9918,G__9919){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9918.cljs$core$IFn$_invoke$arity$2 ? G__9918.cljs$core$IFn$_invoke$arity$2(G__9919,null) : G__9918.call(null,G__9919,null))) || ((G__9918.cljs$core$IFn$_invoke$arity$2 ? G__9918.cljs$core$IFn$_invoke$arity$2(G__9919,"index") : G__9918.call(null,G__9919,"index")))], null);
});})(G__9915,vec__9912,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9917 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9915,G__9916,G__9917) : tailrecursion.hoplon.li.call(null,G__9915,G__9916,G__9917));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9920__i = 0, G__9920__a = new Array(arguments.length -  0);
while (G__9920__i < G__9920__a.length) {G__9920__a[G__9920__i] = arguments[G__9920__i + 0]; ++G__9920__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9920__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9921){
var args__8262__auto__ = cljs.core.seq(arglist__9921);
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
var vec__9930 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,(1),null);
var G__9933 = cljs.core.cst$kw$class;
var G__9934 = tailrecursion.javelin.formula(((function (G__9933,vec__9930,_,___$1){
return (function (G__9936,G__9937){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9936.cljs$core$IFn$_invoke$arity$2 ? G__9936.cljs$core$IFn$_invoke$arity$2(G__9937,"book") : G__9936.call(null,G__9937,"book"))], null);
});})(G__9933,vec__9930,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9935 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9933,G__9934,G__9935) : tailrecursion.hoplon.li.call(null,G__9933,G__9934,G__9935));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9938__i = 0, G__9938__a = new Array(arguments.length -  0);
while (G__9938__i < G__9938__a.length) {G__9938__a[G__9938__i] = arguments[G__9938__i + 0]; ++G__9938__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9938__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9939){
var args__8262__auto__ = cljs.core.seq(arglist__9939);
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
var vec__9941 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9941,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9941,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9942__i = 0, G__9942__a = new Array(arguments.length -  0);
while (G__9942__i < G__9942__a.length) {G__9942__a[G__9942__i] = arguments[G__9942__i + 0]; ++G__9942__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9942__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9943){
var args__8262__auto__ = cljs.core.seq(arglist__9943);
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
var vec__9945 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9945,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9945,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9946__i = 0, G__9946__a = new Array(arguments.length -  0);
while (G__9946__i < G__9946__a.length) {G__9946__a[G__9946__i] = arguments[G__9946__i + 0]; ++G__9946__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9946__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9947){
var args__8262__auto__ = cljs.core.seq(arglist__9947);
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
var vec__9951 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9951,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9951,(1),null);
var G__9952 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9953 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9952,G__9953) : tailrecursion.hoplon.div.call(null,G__9952,G__9953));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9954__i = 0, G__9954__a = new Array(arguments.length -  0);
while (G__9954__i < G__9954__a.length) {G__9954__a[G__9954__i] = arguments[G__9954__i + 0]; ++G__9954__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9954__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9955){
var args__8262__auto__ = cljs.core.seq(arglist__9955);
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
var vec__9957 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9957,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9957,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9958__i = 0, G__9958__a = new Array(arguments.length -  0);
while (G__9958__i < G__9958__a.length) {G__9958__a[G__9958__i] = arguments[G__9958__i + 0]; ++G__9958__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9958__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9959){
var args__8262__auto__ = cljs.core.seq(arglist__9959);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
