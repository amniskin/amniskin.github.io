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
var vec__200425 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__200426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200425,(0),null);
var map__200426__$1 = ((((!((map__200426 == null)))?((((map__200426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__200426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__200426):map__200426);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__200426__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200425,(1),null);
var G__200431 = cljs.core.cst$kw$type;
var G__200432 = "button";
var G__200433 = cljs.core.cst$kw$class;
var G__200434 = tailrecursion.javelin.formula(((function (G__200431,G__200432,G__200433,vec__200425,map__200426,map__200426__$1,name,kids){
return (function (G__200438,G__200439,G__200440){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__200438.cljs$core$IFn$_invoke$arity$2 ? G__200438.cljs$core$IFn$_invoke$arity$2(G__200439,G__200440) : G__200438.call(null,G__200439,G__200440))], null);
});})(G__200431,G__200432,G__200433,vec__200425,map__200426,map__200426__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__200435 = cljs.core.cst$kw$click;
var G__200436 = ((function (G__200431,G__200432,G__200433,G__200434,G__200435,vec__200425,map__200426,map__200426__$1,name,kids){
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
});})(G__200431,G__200432,G__200433,G__200434,G__200435,vec__200425,map__200426,map__200426__$1,name,kids))
;
var G__200437 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__200431,G__200432,G__200433,G__200434,G__200435,G__200436,G__200437) : tailrecursion.hoplon.button.call(null,G__200431,G__200432,G__200433,G__200434,G__200435,G__200436,G__200437));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200441__i = 0, G__200441__a = new Array(arguments.length -  0);
while (G__200441__i < G__200441__a.length) {G__200441__a[G__200441__i] = arguments[G__200441__i + 0]; ++G__200441__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200441__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__200442){
var args__8262__auto__ = cljs.core.seq(arglist__200442);
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
var vec__200447 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200447,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200447,(1),null);
var G__200448 = cljs.core.cst$kw$class;
var G__200449 = "navbar navbar-inverse navbar-fixed-top";
var G__200450 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__200448,G__200449,G__200450) : tailrecursion.hoplon.div.call(null,G__200448,G__200449,G__200450));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200451__i = 0, G__200451__a = new Array(arguments.length -  0);
while (G__200451__i < G__200451__a.length) {G__200451__a[G__200451__i] = arguments[G__200451__i + 0]; ++G__200451__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200451__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__200452){
var args__8262__auto__ = cljs.core.seq(arglist__200452);
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
var vec__200459 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200459,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200459,(1),null);
var G__200460 = cljs.core.cst$kw$class;
var G__200461 = "navbar navbar-inverse navbar-static-top";
var G__200462 = cljs.core.cst$kw$style;
var G__200463 = "margin-bottom:0;";
var G__200464 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__200460,G__200461,G__200462,G__200463,G__200464) : tailrecursion.hoplon.div.call(null,G__200460,G__200461,G__200462,G__200463,G__200464));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200465__i = 0, G__200465__a = new Array(arguments.length -  0);
while (G__200465__i < G__200465__a.length) {G__200465__a[G__200465__i] = arguments[G__200465__i + 0]; ++G__200465__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200465__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__200466){
var args__8262__auto__ = cljs.core.seq(arglist__200466);
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
var vec__200468 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200468,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200468,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200469__i = 0, G__200469__a = new Array(arguments.length -  0);
while (G__200469__i < G__200469__a.length) {G__200469__a[G__200469__i] = arguments[G__200469__i + 0]; ++G__200469__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200469__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__200470){
var args__8262__auto__ = cljs.core.seq(arglist__200470);
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
var vec__200478 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200478,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200478,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__200479 = cljs.core.cst$kw$class;
var G__200480 = "navbar-brand";
var G__200481 = cljs.core.cst$kw$click;
var G__200482 = ((function (G__200479,G__200480,G__200481,vec__200478,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__200479,G__200480,G__200481,vec__200478,_,kids))
;
var G__200483 = cljs.core.cst$kw$href;
var G__200484 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__200479,G__200480,G__200481,G__200482,G__200483,G__200484) : tailrecursion.hoplon.a.call(null,G__200479,G__200480,G__200481,G__200482,G__200483,G__200484));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200485__i = 0, G__200485__a = new Array(arguments.length -  0);
while (G__200485__i < G__200485__a.length) {G__200485__a[G__200485__i] = arguments[G__200485__i + 0]; ++G__200485__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200485__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__200486){
var args__8262__auto__ = cljs.core.seq(arglist__200486);
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
var vec__200495 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200495,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200495,(1),null);
var G__200498 = cljs.core.cst$kw$class;
var G__200499 = tailrecursion.javelin.formula(((function (G__200498,vec__200495,attr,kids){
return (function (G__200501,G__200502){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__200501.cljs$core$IFn$_invoke$arity$2 ? G__200501.cljs$core$IFn$_invoke$arity$2(G__200502,"menu") : G__200501.call(null,G__200502,"menu"))], null);
});})(G__200498,vec__200495,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__200500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__200498,G__200499,G__200500) : tailrecursion.hoplon.div.call(null,G__200498,G__200499,G__200500));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200503__i = 0, G__200503__a = new Array(arguments.length -  0);
while (G__200503__i < G__200503__a.length) {G__200503__a[G__200503__i] = arguments[G__200503__i + 0]; ++G__200503__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200503__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__200504){
var args__8262__auto__ = cljs.core.seq(arglist__200504);
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
var vec__200518 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200518,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200518,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__200521 = cljs.core.cst$kw$style;
var G__200522 = tailrecursion.javelin.formula(((function (G__200521,vec__200518,_,___$1){
return (function (G__200525,G__200526){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__200525.cljs$core$IFn$_invoke$arity$2 ? G__200525.cljs$core$IFn$_invoke$arity$2("menu",G__200526) : G__200525.call(null,"menu",G__200526)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__200521,vec__200518,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__200523 = cljs.core.cst$kw$class;
var G__200524 = tailrecursion.javelin.formula(((function (G__200521,G__200522,G__200523,vec__200518,_,___$1){
return (function (G__200528,G__200529,G__200527){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__200530 = (G__200528.cljs$core$IFn$_invoke$arity$2 ? G__200528.cljs$core$IFn$_invoke$arity$2("menu",G__200529) : G__200528.call(null,"menu",G__200529));
return (G__200527.cljs$core$IFn$_invoke$arity$1 ? G__200527.cljs$core$IFn$_invoke$arity$1(G__200530) : G__200527.call(null,G__200530));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__200528.cljs$core$IFn$_invoke$arity$2 ? G__200528.cljs$core$IFn$_invoke$arity$2("menu",G__200529) : G__200528.call(null,"menu",G__200529))], null);
});})(G__200521,G__200522,G__200523,vec__200518,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__200521,G__200522,G__200523,G__200524) : tailrecursion.hoplon.span.call(null,G__200521,G__200522,G__200523,G__200524));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200531__i = 0, G__200531__a = new Array(arguments.length -  0);
while (G__200531__i < G__200531__a.length) {G__200531__a[G__200531__i] = arguments[G__200531__i + 0]; ++G__200531__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200531__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__200532){
var args__8262__auto__ = cljs.core.seq(arglist__200532);
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
var vec__200548 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__200549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200548,(0),null);
var map__200549__$1 = ((((!((map__200549 == null)))?((((map__200549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__200549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__200549):map__200549);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__200549__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200548,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__200554 = cljs.core.cst$kw$class;
var G__200555 = tailrecursion.javelin.formula(((function (G__200554,lc_name,vec__200548,map__200549,map__200549__$1,name,_){
return (function (G__200557,G__200558,G__200559){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__200557.cljs$core$IFn$_invoke$arity$2 ? G__200557.cljs$core$IFn$_invoke$arity$2(G__200558,G__200559) : G__200557.call(null,G__200558,G__200559))], null);
});})(G__200554,lc_name,vec__200548,map__200549,map__200549__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__200556 = (function (){var G__200560 = cljs.core.cst$kw$href;
var G__200561 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__200562 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__200560,G__200561,G__200562) : tailrecursion.hoplon.a.call(null,G__200560,G__200561,G__200562));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__200554,G__200555,G__200556) : tailrecursion.hoplon.li.call(null,G__200554,G__200555,G__200556));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200563__i = 0, G__200563__a = new Array(arguments.length -  0);
while (G__200563__i < G__200563__a.length) {G__200563__a[G__200563__i] = arguments[G__200563__i + 0]; ++G__200563__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200563__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__200564){
var args__8262__auto__ = cljs.core.seq(arglist__200564);
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
var vec__200573 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200573,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200573,(1),null);
var G__200576 = cljs.core.cst$kw$class;
var G__200577 = tailrecursion.javelin.formula(((function (G__200576,vec__200573,_,___$1){
return (function (G__200579,G__200580){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__200579.cljs$core$IFn$_invoke$arity$2 ? G__200579.cljs$core$IFn$_invoke$arity$2(G__200580,null) : G__200579.call(null,G__200580,null))) || ((G__200579.cljs$core$IFn$_invoke$arity$2 ? G__200579.cljs$core$IFn$_invoke$arity$2(G__200580,"index") : G__200579.call(null,G__200580,"index")))], null);
});})(G__200576,vec__200573,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__200578 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__200576,G__200577,G__200578) : tailrecursion.hoplon.li.call(null,G__200576,G__200577,G__200578));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200581__i = 0, G__200581__a = new Array(arguments.length -  0);
while (G__200581__i < G__200581__a.length) {G__200581__a[G__200581__i] = arguments[G__200581__i + 0]; ++G__200581__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200581__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__200582){
var args__8262__auto__ = cljs.core.seq(arglist__200582);
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
var vec__200591 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200591,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200591,(1),null);
var G__200594 = cljs.core.cst$kw$class;
var G__200595 = tailrecursion.javelin.formula(((function (G__200594,vec__200591,_,___$1){
return (function (G__200597,G__200598){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__200597.cljs$core$IFn$_invoke$arity$2 ? G__200597.cljs$core$IFn$_invoke$arity$2(G__200598,"book") : G__200597.call(null,G__200598,"book"))], null);
});})(G__200594,vec__200591,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__200596 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__200594,G__200595,G__200596) : tailrecursion.hoplon.li.call(null,G__200594,G__200595,G__200596));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200599__i = 0, G__200599__a = new Array(arguments.length -  0);
while (G__200599__i < G__200599__a.length) {G__200599__a[G__200599__i] = arguments[G__200599__i + 0]; ++G__200599__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200599__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__200600){
var args__8262__auto__ = cljs.core.seq(arglist__200600);
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
var vec__200602 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200602,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200602,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200603__i = 0, G__200603__a = new Array(arguments.length -  0);
while (G__200603__i < G__200603__a.length) {G__200603__a[G__200603__i] = arguments[G__200603__i + 0]; ++G__200603__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200603__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__200604){
var args__8262__auto__ = cljs.core.seq(arglist__200604);
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
var vec__200606 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200606,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200606,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200607__i = 0, G__200607__a = new Array(arguments.length -  0);
while (G__200607__i < G__200607__a.length) {G__200607__a[G__200607__i] = arguments[G__200607__i + 0]; ++G__200607__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200607__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__200608){
var args__8262__auto__ = cljs.core.seq(arglist__200608);
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
var vec__200612 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200612,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200612,(1),null);
var G__200613 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__200614 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__200613,G__200614) : tailrecursion.hoplon.div.call(null,G__200613,G__200614));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200615__i = 0, G__200615__a = new Array(arguments.length -  0);
while (G__200615__i < G__200615__a.length) {G__200615__a[G__200615__i] = arguments[G__200615__i + 0]; ++G__200615__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200615__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__200616){
var args__8262__auto__ = cljs.core.seq(arglist__200616);
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
var vec__200618 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200618,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__200618,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__200619__i = 0, G__200619__a = new Array(arguments.length -  0);
while (G__200619__i < G__200619__a.length) {G__200619__a[G__200619__i] = arguments[G__200619__i + 0]; ++G__200619__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__200619__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__200620){
var args__8262__auto__ = cljs.core.seq(arglist__200620);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
