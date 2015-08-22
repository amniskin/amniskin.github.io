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
var vec__8974 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__8975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8974,(0),null);
var map__8975__$1 = ((((!((map__8975 == null)))?((((map__8975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8975):map__8975);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8975__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8974,(1),null);
var G__8980 = cljs.core.cst$kw$type;
var G__8981 = "button";
var G__8982 = cljs.core.cst$kw$class;
var G__8983 = tailrecursion.javelin.formula(((function (G__8980,G__8981,G__8982,vec__8974,map__8975,map__8975__$1,name,kids){
return (function (G__8987,G__8988,G__8989){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__8987.cljs$core$IFn$_invoke$arity$2 ? G__8987.cljs$core$IFn$_invoke$arity$2(G__8988,G__8989) : G__8987.call(null,G__8988,G__8989))], null);
});})(G__8980,G__8981,G__8982,vec__8974,map__8975,map__8975__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__8984 = cljs.core.cst$kw$click;
var G__8985 = ((function (G__8980,G__8981,G__8982,G__8983,G__8984,vec__8974,map__8975,map__8975__$1,name,kids){
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
});})(G__8980,G__8981,G__8982,G__8983,G__8984,vec__8974,map__8975,map__8975__$1,name,kids))
;
var G__8986 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__8980,G__8981,G__8982,G__8983,G__8984,G__8985,G__8986) : tailrecursion.hoplon.button.call(null,G__8980,G__8981,G__8982,G__8983,G__8984,G__8985,G__8986));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__8990__i = 0, G__8990__a = new Array(arguments.length -  0);
while (G__8990__i < G__8990__a.length) {G__8990__a[G__8990__i] = arguments[G__8990__i + 0]; ++G__8990__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__8990__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__8991){
var args__8262__auto__ = cljs.core.seq(arglist__8991);
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
var vec__8996 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8996,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8996,(1),null);
var G__8997 = cljs.core.cst$kw$class;
var G__8998 = "navbar navbar-inverse navbar-fixed-top";
var G__8999 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__8997,G__8998,G__8999) : tailrecursion.hoplon.div.call(null,G__8997,G__8998,G__8999));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9000__i = 0, G__9000__a = new Array(arguments.length -  0);
while (G__9000__i < G__9000__a.length) {G__9000__a[G__9000__i] = arguments[G__9000__i + 0]; ++G__9000__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9000__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9001){
var args__8262__auto__ = cljs.core.seq(arglist__9001);
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
var vec__9008 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9008,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9008,(1),null);
var G__9009 = cljs.core.cst$kw$class;
var G__9010 = "navbar navbar-inverse navbar-static-top";
var G__9011 = cljs.core.cst$kw$style;
var G__9012 = "margin-bottom:0;";
var G__9013 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9009,G__9010,G__9011,G__9012,G__9013) : tailrecursion.hoplon.div.call(null,G__9009,G__9010,G__9011,G__9012,G__9013));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9014__i = 0, G__9014__a = new Array(arguments.length -  0);
while (G__9014__i < G__9014__a.length) {G__9014__a[G__9014__i] = arguments[G__9014__i + 0]; ++G__9014__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9014__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9015){
var args__8262__auto__ = cljs.core.seq(arglist__9015);
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
var vec__9017 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9017,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9017,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9018__i = 0, G__9018__a = new Array(arguments.length -  0);
while (G__9018__i < G__9018__a.length) {G__9018__a[G__9018__i] = arguments[G__9018__i + 0]; ++G__9018__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9018__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9019){
var args__8262__auto__ = cljs.core.seq(arglist__9019);
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
var vec__9027 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9028 = cljs.core.cst$kw$class;
var G__9029 = "navbar-brand";
var G__9030 = cljs.core.cst$kw$click;
var G__9031 = ((function (G__9028,G__9029,G__9030,vec__9027,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9028,G__9029,G__9030,vec__9027,_,kids))
;
var G__9032 = cljs.core.cst$kw$href;
var G__9033 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9028,G__9029,G__9030,G__9031,G__9032,G__9033) : tailrecursion.hoplon.a.call(null,G__9028,G__9029,G__9030,G__9031,G__9032,G__9033));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9034__i = 0, G__9034__a = new Array(arguments.length -  0);
while (G__9034__i < G__9034__a.length) {G__9034__a[G__9034__i] = arguments[G__9034__i + 0]; ++G__9034__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9034__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9035){
var args__8262__auto__ = cljs.core.seq(arglist__9035);
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
var vec__9044 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,(1),null);
var G__9047 = cljs.core.cst$kw$class;
var G__9048 = tailrecursion.javelin.formula(((function (G__9047,vec__9044,attr,kids){
return (function (G__9050,G__9051){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9050.cljs$core$IFn$_invoke$arity$2 ? G__9050.cljs$core$IFn$_invoke$arity$2(G__9051,"menu") : G__9050.call(null,G__9051,"menu"))], null);
});})(G__9047,vec__9044,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9047,G__9048,G__9049) : tailrecursion.hoplon.div.call(null,G__9047,G__9048,G__9049));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9052__i = 0, G__9052__a = new Array(arguments.length -  0);
while (G__9052__i < G__9052__a.length) {G__9052__a[G__9052__i] = arguments[G__9052__i + 0]; ++G__9052__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9052__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9053){
var args__8262__auto__ = cljs.core.seq(arglist__9053);
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
var vec__9067 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9067,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9067,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9070 = cljs.core.cst$kw$style;
var G__9071 = tailrecursion.javelin.formula(((function (G__9070,vec__9067,_,___$1){
return (function (G__9074,G__9075){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9074.cljs$core$IFn$_invoke$arity$2 ? G__9074.cljs$core$IFn$_invoke$arity$2("menu",G__9075) : G__9074.call(null,"menu",G__9075)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9070,vec__9067,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9072 = cljs.core.cst$kw$class;
var G__9073 = tailrecursion.javelin.formula(((function (G__9070,G__9071,G__9072,vec__9067,_,___$1){
return (function (G__9077,G__9078,G__9076){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9079 = (G__9077.cljs$core$IFn$_invoke$arity$2 ? G__9077.cljs$core$IFn$_invoke$arity$2("menu",G__9078) : G__9077.call(null,"menu",G__9078));
return (G__9076.cljs$core$IFn$_invoke$arity$1 ? G__9076.cljs$core$IFn$_invoke$arity$1(G__9079) : G__9076.call(null,G__9079));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9077.cljs$core$IFn$_invoke$arity$2 ? G__9077.cljs$core$IFn$_invoke$arity$2("menu",G__9078) : G__9077.call(null,"menu",G__9078))], null);
});})(G__9070,G__9071,G__9072,vec__9067,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9070,G__9071,G__9072,G__9073) : tailrecursion.hoplon.span.call(null,G__9070,G__9071,G__9072,G__9073));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9080__i = 0, G__9080__a = new Array(arguments.length -  0);
while (G__9080__i < G__9080__a.length) {G__9080__a[G__9080__i] = arguments[G__9080__i + 0]; ++G__9080__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9080__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9081){
var args__8262__auto__ = cljs.core.seq(arglist__9081);
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
var vec__9097 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,(0),null);
var map__9098__$1 = ((((!((map__9098 == null)))?((((map__9098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9098):map__9098);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9098__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9103 = cljs.core.cst$kw$class;
var G__9104 = tailrecursion.javelin.formula(((function (G__9103,lc_name,vec__9097,map__9098,map__9098__$1,name,_){
return (function (G__9106,G__9107,G__9108){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9106.cljs$core$IFn$_invoke$arity$2 ? G__9106.cljs$core$IFn$_invoke$arity$2(G__9107,G__9108) : G__9106.call(null,G__9107,G__9108))], null);
});})(G__9103,lc_name,vec__9097,map__9098,map__9098__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9105 = (function (){var G__9109 = cljs.core.cst$kw$href;
var G__9110 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9111 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9109,G__9110,G__9111) : tailrecursion.hoplon.a.call(null,G__9109,G__9110,G__9111));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9103,G__9104,G__9105) : tailrecursion.hoplon.li.call(null,G__9103,G__9104,G__9105));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9112__i = 0, G__9112__a = new Array(arguments.length -  0);
while (G__9112__i < G__9112__a.length) {G__9112__a[G__9112__i] = arguments[G__9112__i + 0]; ++G__9112__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9112__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9113){
var args__8262__auto__ = cljs.core.seq(arglist__9113);
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
var vec__9122 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(1),null);
var G__9125 = cljs.core.cst$kw$class;
var G__9126 = tailrecursion.javelin.formula(((function (G__9125,vec__9122,_,___$1){
return (function (G__9128,G__9129){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9128.cljs$core$IFn$_invoke$arity$2 ? G__9128.cljs$core$IFn$_invoke$arity$2(G__9129,null) : G__9128.call(null,G__9129,null))) || ((G__9128.cljs$core$IFn$_invoke$arity$2 ? G__9128.cljs$core$IFn$_invoke$arity$2(G__9129,"index") : G__9128.call(null,G__9129,"index")))], null);
});})(G__9125,vec__9122,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9127 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9125,G__9126,G__9127) : tailrecursion.hoplon.li.call(null,G__9125,G__9126,G__9127));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9130__i = 0, G__9130__a = new Array(arguments.length -  0);
while (G__9130__i < G__9130__a.length) {G__9130__a[G__9130__i] = arguments[G__9130__i + 0]; ++G__9130__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9130__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9131){
var args__8262__auto__ = cljs.core.seq(arglist__9131);
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
var vec__9140 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9140,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9140,(1),null);
var G__9143 = cljs.core.cst$kw$class;
var G__9144 = tailrecursion.javelin.formula(((function (G__9143,vec__9140,_,___$1){
return (function (G__9146,G__9147){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9146.cljs$core$IFn$_invoke$arity$2 ? G__9146.cljs$core$IFn$_invoke$arity$2(G__9147,"book") : G__9146.call(null,G__9147,"book"))], null);
});})(G__9143,vec__9140,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9145 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9143,G__9144,G__9145) : tailrecursion.hoplon.li.call(null,G__9143,G__9144,G__9145));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9148__i = 0, G__9148__a = new Array(arguments.length -  0);
while (G__9148__i < G__9148__a.length) {G__9148__a[G__9148__i] = arguments[G__9148__i + 0]; ++G__9148__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9148__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9149){
var args__8262__auto__ = cljs.core.seq(arglist__9149);
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
var vec__9151 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9151,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9151,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9152__i = 0, G__9152__a = new Array(arguments.length -  0);
while (G__9152__i < G__9152__a.length) {G__9152__a[G__9152__i] = arguments[G__9152__i + 0]; ++G__9152__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9152__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9153){
var args__8262__auto__ = cljs.core.seq(arglist__9153);
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
var vec__9155 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9155,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9156__i = 0, G__9156__a = new Array(arguments.length -  0);
while (G__9156__i < G__9156__a.length) {G__9156__a[G__9156__i] = arguments[G__9156__i + 0]; ++G__9156__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9156__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9157){
var args__8262__auto__ = cljs.core.seq(arglist__9157);
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
var vec__9161 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9161,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9161,(1),null);
var G__9162 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9163 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9162,G__9163) : tailrecursion.hoplon.div.call(null,G__9162,G__9163));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9164__i = 0, G__9164__a = new Array(arguments.length -  0);
while (G__9164__i < G__9164__a.length) {G__9164__a[G__9164__i] = arguments[G__9164__i + 0]; ++G__9164__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9164__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9165){
var args__8262__auto__ = cljs.core.seq(arglist__9165);
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
var vec__9167 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9168__i = 0, G__9168__a = new Array(arguments.length -  0);
while (G__9168__i < G__9168__a.length) {G__9168__a[G__9168__i] = arguments[G__9168__i + 0]; ++G__9168__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9168__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9169){
var args__8262__auto__ = cljs.core.seq(arglist__9169);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
