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
var vec__8978 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__8979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8978,(0),null);
var map__8979__$1 = ((((!((map__8979 == null)))?((((map__8979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8979):map__8979);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8979__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8978,(1),null);
var G__8984 = cljs.core.cst$kw$type;
var G__8985 = "button";
var G__8986 = cljs.core.cst$kw$class;
var G__8987 = tailrecursion.javelin.formula(((function (G__8984,G__8985,G__8986,vec__8978,map__8979,map__8979__$1,name,kids){
return (function (G__8991,G__8992,G__8993){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__8991.cljs$core$IFn$_invoke$arity$2 ? G__8991.cljs$core$IFn$_invoke$arity$2(G__8992,G__8993) : G__8991.call(null,G__8992,G__8993))], null);
});})(G__8984,G__8985,G__8986,vec__8978,map__8979,map__8979__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__8988 = cljs.core.cst$kw$click;
var G__8989 = ((function (G__8984,G__8985,G__8986,G__8987,G__8988,vec__8978,map__8979,map__8979__$1,name,kids){
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
});})(G__8984,G__8985,G__8986,G__8987,G__8988,vec__8978,map__8979,map__8979__$1,name,kids))
;
var G__8990 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__8984,G__8985,G__8986,G__8987,G__8988,G__8989,G__8990) : tailrecursion.hoplon.button.call(null,G__8984,G__8985,G__8986,G__8987,G__8988,G__8989,G__8990));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__8994__i = 0, G__8994__a = new Array(arguments.length -  0);
while (G__8994__i < G__8994__a.length) {G__8994__a[G__8994__i] = arguments[G__8994__i + 0]; ++G__8994__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__8994__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__8995){
var args__8262__auto__ = cljs.core.seq(arglist__8995);
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
var vec__9000 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9000,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9000,(1),null);
var G__9001 = cljs.core.cst$kw$class;
var G__9002 = "navbar navbar-inverse navbar-fixed-top";
var G__9003 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9001,G__9002,G__9003) : tailrecursion.hoplon.div.call(null,G__9001,G__9002,G__9003));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9004__i = 0, G__9004__a = new Array(arguments.length -  0);
while (G__9004__i < G__9004__a.length) {G__9004__a[G__9004__i] = arguments[G__9004__i + 0]; ++G__9004__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9004__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9005){
var args__8262__auto__ = cljs.core.seq(arglist__9005);
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
var vec__9012 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9012,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9012,(1),null);
var G__9013 = cljs.core.cst$kw$class;
var G__9014 = "navbar navbar-inverse navbar-static-top";
var G__9015 = cljs.core.cst$kw$style;
var G__9016 = "margin-bottom:0;";
var G__9017 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9013,G__9014,G__9015,G__9016,G__9017) : tailrecursion.hoplon.div.call(null,G__9013,G__9014,G__9015,G__9016,G__9017));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9018__i = 0, G__9018__a = new Array(arguments.length -  0);
while (G__9018__i < G__9018__a.length) {G__9018__a[G__9018__i] = arguments[G__9018__i + 0]; ++G__9018__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9018__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9019){
var args__8262__auto__ = cljs.core.seq(arglist__9019);
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
var vec__9021 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9021,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9021,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9022__i = 0, G__9022__a = new Array(arguments.length -  0);
while (G__9022__i < G__9022__a.length) {G__9022__a[G__9022__i] = arguments[G__9022__i + 0]; ++G__9022__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9022__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9023){
var args__8262__auto__ = cljs.core.seq(arglist__9023);
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
var vec__9031 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9031,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9031,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9032 = cljs.core.cst$kw$class;
var G__9033 = "navbar-brand";
var G__9034 = cljs.core.cst$kw$click;
var G__9035 = ((function (G__9032,G__9033,G__9034,vec__9031,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9032,G__9033,G__9034,vec__9031,_,kids))
;
var G__9036 = cljs.core.cst$kw$href;
var G__9037 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9032,G__9033,G__9034,G__9035,G__9036,G__9037) : tailrecursion.hoplon.a.call(null,G__9032,G__9033,G__9034,G__9035,G__9036,G__9037));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9038__i = 0, G__9038__a = new Array(arguments.length -  0);
while (G__9038__i < G__9038__a.length) {G__9038__a[G__9038__i] = arguments[G__9038__i + 0]; ++G__9038__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9038__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9039){
var args__8262__auto__ = cljs.core.seq(arglist__9039);
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
var vec__9048 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9048,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9048,(1),null);
var G__9051 = cljs.core.cst$kw$class;
var G__9052 = tailrecursion.javelin.formula(((function (G__9051,vec__9048,attr,kids){
return (function (G__9054,G__9055){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9054.cljs$core$IFn$_invoke$arity$2 ? G__9054.cljs$core$IFn$_invoke$arity$2(G__9055,"menu") : G__9054.call(null,G__9055,"menu"))], null);
});})(G__9051,vec__9048,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9051,G__9052,G__9053) : tailrecursion.hoplon.div.call(null,G__9051,G__9052,G__9053));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9056__i = 0, G__9056__a = new Array(arguments.length -  0);
while (G__9056__i < G__9056__a.length) {G__9056__a[G__9056__i] = arguments[G__9056__i + 0]; ++G__9056__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9056__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9057){
var args__8262__auto__ = cljs.core.seq(arglist__9057);
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
var vec__9071 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9071,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9071,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9074 = cljs.core.cst$kw$style;
var G__9075 = tailrecursion.javelin.formula(((function (G__9074,vec__9071,_,___$1){
return (function (G__9078,G__9079){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9078.cljs$core$IFn$_invoke$arity$2 ? G__9078.cljs$core$IFn$_invoke$arity$2("menu",G__9079) : G__9078.call(null,"menu",G__9079)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9074,vec__9071,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9076 = cljs.core.cst$kw$class;
var G__9077 = tailrecursion.javelin.formula(((function (G__9074,G__9075,G__9076,vec__9071,_,___$1){
return (function (G__9081,G__9082,G__9080){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9083 = (G__9081.cljs$core$IFn$_invoke$arity$2 ? G__9081.cljs$core$IFn$_invoke$arity$2("menu",G__9082) : G__9081.call(null,"menu",G__9082));
return (G__9080.cljs$core$IFn$_invoke$arity$1 ? G__9080.cljs$core$IFn$_invoke$arity$1(G__9083) : G__9080.call(null,G__9083));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9081.cljs$core$IFn$_invoke$arity$2 ? G__9081.cljs$core$IFn$_invoke$arity$2("menu",G__9082) : G__9081.call(null,"menu",G__9082))], null);
});})(G__9074,G__9075,G__9076,vec__9071,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9074,G__9075,G__9076,G__9077) : tailrecursion.hoplon.span.call(null,G__9074,G__9075,G__9076,G__9077));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9084__i = 0, G__9084__a = new Array(arguments.length -  0);
while (G__9084__i < G__9084__a.length) {G__9084__a[G__9084__i] = arguments[G__9084__i + 0]; ++G__9084__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9084__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9085){
var args__8262__auto__ = cljs.core.seq(arglist__9085);
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
var vec__9101 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,(0),null);
var map__9102__$1 = ((((!((map__9102 == null)))?((((map__9102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9102):map__9102);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9102__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9107 = cljs.core.cst$kw$class;
var G__9108 = tailrecursion.javelin.formula(((function (G__9107,lc_name,vec__9101,map__9102,map__9102__$1,name,_){
return (function (G__9110,G__9111,G__9112){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9110.cljs$core$IFn$_invoke$arity$2 ? G__9110.cljs$core$IFn$_invoke$arity$2(G__9111,G__9112) : G__9110.call(null,G__9111,G__9112))], null);
});})(G__9107,lc_name,vec__9101,map__9102,map__9102__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9109 = (function (){var G__9113 = cljs.core.cst$kw$href;
var G__9114 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9115 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9113,G__9114,G__9115) : tailrecursion.hoplon.a.call(null,G__9113,G__9114,G__9115));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9107,G__9108,G__9109) : tailrecursion.hoplon.li.call(null,G__9107,G__9108,G__9109));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9116__i = 0, G__9116__a = new Array(arguments.length -  0);
while (G__9116__i < G__9116__a.length) {G__9116__a[G__9116__i] = arguments[G__9116__i + 0]; ++G__9116__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9116__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9117){
var args__8262__auto__ = cljs.core.seq(arglist__9117);
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
var vec__9126 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9126,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9126,(1),null);
var G__9129 = cljs.core.cst$kw$class;
var G__9130 = tailrecursion.javelin.formula(((function (G__9129,vec__9126,_,___$1){
return (function (G__9132,G__9133){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9132.cljs$core$IFn$_invoke$arity$2 ? G__9132.cljs$core$IFn$_invoke$arity$2(G__9133,null) : G__9132.call(null,G__9133,null))) || ((G__9132.cljs$core$IFn$_invoke$arity$2 ? G__9132.cljs$core$IFn$_invoke$arity$2(G__9133,"index") : G__9132.call(null,G__9133,"index")))], null);
});})(G__9129,vec__9126,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9131 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9129,G__9130,G__9131) : tailrecursion.hoplon.li.call(null,G__9129,G__9130,G__9131));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9134__i = 0, G__9134__a = new Array(arguments.length -  0);
while (G__9134__i < G__9134__a.length) {G__9134__a[G__9134__i] = arguments[G__9134__i + 0]; ++G__9134__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9134__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9135){
var args__8262__auto__ = cljs.core.seq(arglist__9135);
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
var vec__9144 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9144,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9144,(1),null);
var G__9147 = cljs.core.cst$kw$class;
var G__9148 = tailrecursion.javelin.formula(((function (G__9147,vec__9144,_,___$1){
return (function (G__9150,G__9151){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9150.cljs$core$IFn$_invoke$arity$2 ? G__9150.cljs$core$IFn$_invoke$arity$2(G__9151,"book") : G__9150.call(null,G__9151,"book"))], null);
});})(G__9147,vec__9144,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9149 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9147,G__9148,G__9149) : tailrecursion.hoplon.li.call(null,G__9147,G__9148,G__9149));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9152__i = 0, G__9152__a = new Array(arguments.length -  0);
while (G__9152__i < G__9152__a.length) {G__9152__a[G__9152__i] = arguments[G__9152__i + 0]; ++G__9152__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9152__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9153){
var args__8262__auto__ = cljs.core.seq(arglist__9153);
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
var vec__9155 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9156__i = 0, G__9156__a = new Array(arguments.length -  0);
while (G__9156__i < G__9156__a.length) {G__9156__a[G__9156__i] = arguments[G__9156__i + 0]; ++G__9156__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9156__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9157){
var args__8262__auto__ = cljs.core.seq(arglist__9157);
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
var vec__9159 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9159,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9159,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9160__i = 0, G__9160__a = new Array(arguments.length -  0);
while (G__9160__i < G__9160__a.length) {G__9160__a[G__9160__i] = arguments[G__9160__i + 0]; ++G__9160__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9160__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9161){
var args__8262__auto__ = cljs.core.seq(arglist__9161);
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
var vec__9165 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9165,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9165,(1),null);
var G__9166 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9167 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9166,G__9167) : tailrecursion.hoplon.div.call(null,G__9166,G__9167));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9168__i = 0, G__9168__a = new Array(arguments.length -  0);
while (G__9168__i < G__9168__a.length) {G__9168__a[G__9168__i] = arguments[G__9168__i + 0]; ++G__9168__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9168__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9169){
var args__8262__auto__ = cljs.core.seq(arglist__9169);
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
var vec__9171 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9171,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9171,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9172__i = 0, G__9172__a = new Array(arguments.length -  0);
while (G__9172__i < G__9172__a.length) {G__9172__a[G__9172__i] = arguments[G__9172__i + 0]; ++G__9172__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9172__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9173){
var args__8262__auto__ = cljs.core.seq(arglist__9173);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
