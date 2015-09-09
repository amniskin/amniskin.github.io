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
var vec__203295 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203295,(0),null);
var map__203296__$1 = ((((!((map__203296 == null)))?((((map__203296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203296):map__203296);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203296__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203295,(1),null);
var G__203301 = cljs.core.cst$kw$type;
var G__203302 = "button";
var G__203303 = cljs.core.cst$kw$class;
var G__203304 = tailrecursion.javelin.formula(((function (G__203301,G__203302,G__203303,vec__203295,map__203296,map__203296__$1,name,kids){
return (function (G__203308,G__203309,G__203310){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__203308.cljs$core$IFn$_invoke$arity$2 ? G__203308.cljs$core$IFn$_invoke$arity$2(G__203309,G__203310) : G__203308.call(null,G__203309,G__203310))], null);
});})(G__203301,G__203302,G__203303,vec__203295,map__203296,map__203296__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__203305 = cljs.core.cst$kw$click;
var G__203306 = ((function (G__203301,G__203302,G__203303,G__203304,G__203305,vec__203295,map__203296,map__203296__$1,name,kids){
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
});})(G__203301,G__203302,G__203303,G__203304,G__203305,vec__203295,map__203296,map__203296__$1,name,kids))
;
var G__203307 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__203301,G__203302,G__203303,G__203304,G__203305,G__203306,G__203307) : tailrecursion.hoplon.button.call(null,G__203301,G__203302,G__203303,G__203304,G__203305,G__203306,G__203307));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203311__i = 0, G__203311__a = new Array(arguments.length -  0);
while (G__203311__i < G__203311__a.length) {G__203311__a[G__203311__i] = arguments[G__203311__i + 0]; ++G__203311__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203311__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__203312){
var args__8262__auto__ = cljs.core.seq(arglist__203312);
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
var vec__203317 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203317,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203317,(1),null);
var G__203318 = cljs.core.cst$kw$class;
var G__203319 = "navbar navbar-inverse navbar-fixed-top";
var G__203320 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__203318,G__203319,G__203320) : tailrecursion.hoplon.div.call(null,G__203318,G__203319,G__203320));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203321__i = 0, G__203321__a = new Array(arguments.length -  0);
while (G__203321__i < G__203321__a.length) {G__203321__a[G__203321__i] = arguments[G__203321__i + 0]; ++G__203321__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203321__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__203322){
var args__8262__auto__ = cljs.core.seq(arglist__203322);
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
var vec__203329 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203329,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203329,(1),null);
var G__203330 = cljs.core.cst$kw$class;
var G__203331 = "navbar navbar-inverse navbar-static-top";
var G__203332 = cljs.core.cst$kw$style;
var G__203333 = "margin-bottom:0;";
var G__203334 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__203330,G__203331,G__203332,G__203333,G__203334) : tailrecursion.hoplon.div.call(null,G__203330,G__203331,G__203332,G__203333,G__203334));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203335__i = 0, G__203335__a = new Array(arguments.length -  0);
while (G__203335__i < G__203335__a.length) {G__203335__a[G__203335__i] = arguments[G__203335__i + 0]; ++G__203335__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203335__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__203336){
var args__8262__auto__ = cljs.core.seq(arglist__203336);
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
var vec__203338 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203338,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203338,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203339__i = 0, G__203339__a = new Array(arguments.length -  0);
while (G__203339__i < G__203339__a.length) {G__203339__a[G__203339__i] = arguments[G__203339__i + 0]; ++G__203339__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203339__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__203340){
var args__8262__auto__ = cljs.core.seq(arglist__203340);
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
var vec__203348 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203348,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203348,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__203349 = cljs.core.cst$kw$class;
var G__203350 = "navbar-brand";
var G__203351 = cljs.core.cst$kw$click;
var G__203352 = ((function (G__203349,G__203350,G__203351,vec__203348,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__203349,G__203350,G__203351,vec__203348,_,kids))
;
var G__203353 = cljs.core.cst$kw$href;
var G__203354 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__203349,G__203350,G__203351,G__203352,G__203353,G__203354) : tailrecursion.hoplon.a.call(null,G__203349,G__203350,G__203351,G__203352,G__203353,G__203354));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203355__i = 0, G__203355__a = new Array(arguments.length -  0);
while (G__203355__i < G__203355__a.length) {G__203355__a[G__203355__i] = arguments[G__203355__i + 0]; ++G__203355__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203355__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__203356){
var args__8262__auto__ = cljs.core.seq(arglist__203356);
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
var vec__203365 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203365,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203365,(1),null);
var G__203368 = cljs.core.cst$kw$class;
var G__203369 = tailrecursion.javelin.formula(((function (G__203368,vec__203365,attr,kids){
return (function (G__203371,G__203372){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__203371.cljs$core$IFn$_invoke$arity$2 ? G__203371.cljs$core$IFn$_invoke$arity$2(G__203372,"menu") : G__203371.call(null,G__203372,"menu"))], null);
});})(G__203368,vec__203365,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__203370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__203368,G__203369,G__203370) : tailrecursion.hoplon.div.call(null,G__203368,G__203369,G__203370));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203373__i = 0, G__203373__a = new Array(arguments.length -  0);
while (G__203373__i < G__203373__a.length) {G__203373__a[G__203373__i] = arguments[G__203373__i + 0]; ++G__203373__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203373__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__203374){
var args__8262__auto__ = cljs.core.seq(arglist__203374);
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
var vec__203388 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203388,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203388,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__203391 = cljs.core.cst$kw$style;
var G__203392 = tailrecursion.javelin.formula(((function (G__203391,vec__203388,_,___$1){
return (function (G__203395,G__203396){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__203395.cljs$core$IFn$_invoke$arity$2 ? G__203395.cljs$core$IFn$_invoke$arity$2("menu",G__203396) : G__203395.call(null,"menu",G__203396)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__203391,vec__203388,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__203393 = cljs.core.cst$kw$class;
var G__203394 = tailrecursion.javelin.formula(((function (G__203391,G__203392,G__203393,vec__203388,_,___$1){
return (function (G__203398,G__203399,G__203397){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__203400 = (G__203398.cljs$core$IFn$_invoke$arity$2 ? G__203398.cljs$core$IFn$_invoke$arity$2("menu",G__203399) : G__203398.call(null,"menu",G__203399));
return (G__203397.cljs$core$IFn$_invoke$arity$1 ? G__203397.cljs$core$IFn$_invoke$arity$1(G__203400) : G__203397.call(null,G__203400));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__203398.cljs$core$IFn$_invoke$arity$2 ? G__203398.cljs$core$IFn$_invoke$arity$2("menu",G__203399) : G__203398.call(null,"menu",G__203399))], null);
});})(G__203391,G__203392,G__203393,vec__203388,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__203391,G__203392,G__203393,G__203394) : tailrecursion.hoplon.span.call(null,G__203391,G__203392,G__203393,G__203394));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203401__i = 0, G__203401__a = new Array(arguments.length -  0);
while (G__203401__i < G__203401__a.length) {G__203401__a[G__203401__i] = arguments[G__203401__i + 0]; ++G__203401__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203401__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__203402){
var args__8262__auto__ = cljs.core.seq(arglist__203402);
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
var vec__203418 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203418,(0),null);
var map__203419__$1 = ((((!((map__203419 == null)))?((((map__203419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203419):map__203419);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203419__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203418,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__203424 = cljs.core.cst$kw$class;
var G__203425 = tailrecursion.javelin.formula(((function (G__203424,lc_name,vec__203418,map__203419,map__203419__$1,name,_){
return (function (G__203427,G__203428,G__203429){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__203427.cljs$core$IFn$_invoke$arity$2 ? G__203427.cljs$core$IFn$_invoke$arity$2(G__203428,G__203429) : G__203427.call(null,G__203428,G__203429))], null);
});})(G__203424,lc_name,vec__203418,map__203419,map__203419__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__203426 = (function (){var G__203430 = cljs.core.cst$kw$href;
var G__203431 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__203432 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__203430,G__203431,G__203432) : tailrecursion.hoplon.a.call(null,G__203430,G__203431,G__203432));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__203424,G__203425,G__203426) : tailrecursion.hoplon.li.call(null,G__203424,G__203425,G__203426));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203433__i = 0, G__203433__a = new Array(arguments.length -  0);
while (G__203433__i < G__203433__a.length) {G__203433__a[G__203433__i] = arguments[G__203433__i + 0]; ++G__203433__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203433__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__203434){
var args__8262__auto__ = cljs.core.seq(arglist__203434);
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
var vec__203443 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203443,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203443,(1),null);
var G__203446 = cljs.core.cst$kw$class;
var G__203447 = tailrecursion.javelin.formula(((function (G__203446,vec__203443,_,___$1){
return (function (G__203449,G__203450){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__203449.cljs$core$IFn$_invoke$arity$2 ? G__203449.cljs$core$IFn$_invoke$arity$2(G__203450,null) : G__203449.call(null,G__203450,null))) || ((G__203449.cljs$core$IFn$_invoke$arity$2 ? G__203449.cljs$core$IFn$_invoke$arity$2(G__203450,"index") : G__203449.call(null,G__203450,"index")))], null);
});})(G__203446,vec__203443,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__203448 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__203446,G__203447,G__203448) : tailrecursion.hoplon.li.call(null,G__203446,G__203447,G__203448));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203451__i = 0, G__203451__a = new Array(arguments.length -  0);
while (G__203451__i < G__203451__a.length) {G__203451__a[G__203451__i] = arguments[G__203451__i + 0]; ++G__203451__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203451__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__203452){
var args__8262__auto__ = cljs.core.seq(arglist__203452);
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
var vec__203461 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203461,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203461,(1),null);
var G__203464 = cljs.core.cst$kw$class;
var G__203465 = tailrecursion.javelin.formula(((function (G__203464,vec__203461,_,___$1){
return (function (G__203467,G__203468){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__203467.cljs$core$IFn$_invoke$arity$2 ? G__203467.cljs$core$IFn$_invoke$arity$2(G__203468,"book") : G__203467.call(null,G__203468,"book"))], null);
});})(G__203464,vec__203461,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__203466 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__203464,G__203465,G__203466) : tailrecursion.hoplon.li.call(null,G__203464,G__203465,G__203466));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203469__i = 0, G__203469__a = new Array(arguments.length -  0);
while (G__203469__i < G__203469__a.length) {G__203469__a[G__203469__i] = arguments[G__203469__i + 0]; ++G__203469__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203469__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__203470){
var args__8262__auto__ = cljs.core.seq(arglist__203470);
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
var vec__203472 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203472,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203472,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203473__i = 0, G__203473__a = new Array(arguments.length -  0);
while (G__203473__i < G__203473__a.length) {G__203473__a[G__203473__i] = arguments[G__203473__i + 0]; ++G__203473__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203473__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__203474){
var args__8262__auto__ = cljs.core.seq(arglist__203474);
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
var vec__203476 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203476,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203476,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203477__i = 0, G__203477__a = new Array(arguments.length -  0);
while (G__203477__i < G__203477__a.length) {G__203477__a[G__203477__i] = arguments[G__203477__i + 0]; ++G__203477__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203477__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__203478){
var args__8262__auto__ = cljs.core.seq(arglist__203478);
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
var vec__203482 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203482,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203482,(1),null);
var G__203483 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__203484 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__203483,G__203484) : tailrecursion.hoplon.div.call(null,G__203483,G__203484));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203485__i = 0, G__203485__a = new Array(arguments.length -  0);
while (G__203485__i < G__203485__a.length) {G__203485__a[G__203485__i] = arguments[G__203485__i + 0]; ++G__203485__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203485__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__203486){
var args__8262__auto__ = cljs.core.seq(arglist__203486);
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
var vec__203488 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203488,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203488,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203489__i = 0, G__203489__a = new Array(arguments.length -  0);
while (G__203489__i < G__203489__a.length) {G__203489__a[G__203489__i] = arguments[G__203489__i + 0]; ++G__203489__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203489__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__203490){
var args__8262__auto__ = cljs.core.seq(arglist__203490);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
