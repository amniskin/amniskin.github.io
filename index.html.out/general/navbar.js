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
var vec__9584 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9584,(0),null);
var map__9585__$1 = ((((!((map__9585 == null)))?((((map__9585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9585):map__9585);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9585__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9584,(1),null);
var G__9590 = cljs.core.cst$kw$type;
var G__9591 = "button";
var G__9592 = cljs.core.cst$kw$class;
var G__9593 = tailrecursion.javelin.formula(((function (G__9590,G__9591,G__9592,vec__9584,map__9585,map__9585__$1,name,kids){
return (function (G__9597,G__9598,G__9599){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__9597.cljs$core$IFn$_invoke$arity$2 ? G__9597.cljs$core$IFn$_invoke$arity$2(G__9598,G__9599) : G__9597.call(null,G__9598,G__9599))], null);
});})(G__9590,G__9591,G__9592,vec__9584,map__9585,map__9585__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__9594 = cljs.core.cst$kw$click;
var G__9595 = ((function (G__9590,G__9591,G__9592,G__9593,G__9594,vec__9584,map__9585,map__9585__$1,name,kids){
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
});})(G__9590,G__9591,G__9592,G__9593,G__9594,vec__9584,map__9585,map__9585__$1,name,kids))
;
var G__9596 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__9590,G__9591,G__9592,G__9593,G__9594,G__9595,G__9596) : tailrecursion.hoplon.button.call(null,G__9590,G__9591,G__9592,G__9593,G__9594,G__9595,G__9596));
};
var general$navbar$nav_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9600__i = 0, G__9600__a = new Array(arguments.length -  0);
while (G__9600__i < G__9600__a.length) {G__9600__a[G__9600__i] = arguments[G__9600__i + 0]; ++G__9600__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9600__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__9601){
var args__8082__auto__ = cljs.core.seq(arglist__9601);
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
var vec__9606 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9606,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9606,(1),null);
var G__9607 = cljs.core.cst$kw$class;
var G__9608 = "navbar navbar-inverse navbar-fixed-top";
var G__9609 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9607,G__9608,G__9609) : tailrecursion.hoplon.div.call(null,G__9607,G__9608,G__9609));
};
var general$navbar$fixed_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9610__i = 0, G__9610__a = new Array(arguments.length -  0);
while (G__9610__i < G__9610__a.length) {G__9610__a[G__9610__i] = arguments[G__9610__i + 0]; ++G__9610__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9610__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9611){
var args__8082__auto__ = cljs.core.seq(arglist__9611);
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
var vec__9618 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9618,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9618,(1),null);
var G__9619 = cljs.core.cst$kw$class;
var G__9620 = "navbar navbar-inverse navbar-static-top";
var G__9621 = cljs.core.cst$kw$style;
var G__9622 = "margin-bottom:0;";
var G__9623 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9619,G__9620,G__9621,G__9622,G__9623) : tailrecursion.hoplon.div.call(null,G__9619,G__9620,G__9621,G__9622,G__9623));
};
var general$navbar$static_bar = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9624__i = 0, G__9624__a = new Array(arguments.length -  0);
while (G__9624__i < G__9624__a.length) {G__9624__a[G__9624__i] = arguments[G__9624__i + 0]; ++G__9624__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9624__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8082__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9625){
var args__8082__auto__ = cljs.core.seq(arglist__9625);
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
var vec__9627 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9627,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9627,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9628__i = 0, G__9628__a = new Array(arguments.length -  0);
while (G__9628__i < G__9628__a.length) {G__9628__a[G__9628__i] = arguments[G__9628__i + 0]; ++G__9628__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9628__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8082__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9629){
var args__8082__auto__ = cljs.core.seq(arglist__9629);
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
var vec__9637 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9637,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9637,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9638 = cljs.core.cst$kw$class;
var G__9639 = "navbar-brand";
var G__9640 = cljs.core.cst$kw$click;
var G__9641 = ((function (G__9638,G__9639,G__9640,vec__9637,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9638,G__9639,G__9640,vec__9637,_,kids))
;
var G__9642 = cljs.core.cst$kw$href;
var G__9643 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9638,G__9639,G__9640,G__9641,G__9642,G__9643) : tailrecursion.hoplon.a.call(null,G__9638,G__9639,G__9640,G__9641,G__9642,G__9643));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9644__i = 0, G__9644__a = new Array(arguments.length -  0);
while (G__9644__i < G__9644__a.length) {G__9644__a[G__9644__i] = arguments[G__9644__i + 0]; ++G__9644__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9644__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8082__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9645){
var args__8082__auto__ = cljs.core.seq(arglist__9645);
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
var vec__9654 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654,(1),null);
var G__9657 = cljs.core.cst$kw$class;
var G__9658 = tailrecursion.javelin.formula(((function (G__9657,vec__9654,attr,kids){
return (function (G__9660,G__9661){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9660.cljs$core$IFn$_invoke$arity$2 ? G__9660.cljs$core$IFn$_invoke$arity$2(G__9661,"menu") : G__9660.call(null,G__9661,"menu"))], null);
});})(G__9657,vec__9654,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9657,G__9658,G__9659) : tailrecursion.hoplon.div.call(null,G__9657,G__9658,G__9659));
};
var general$navbar$menu2 = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9662__i = 0, G__9662__a = new Array(arguments.length -  0);
while (G__9662__i < G__9662__a.length) {G__9662__a[G__9662__i] = arguments[G__9662__i + 0]; ++G__9662__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9662__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8082__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9663){
var args__8082__auto__ = cljs.core.seq(arglist__9663);
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
var vec__9677 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9677,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9677,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9680 = cljs.core.cst$kw$style;
var G__9681 = tailrecursion.javelin.formula(((function (G__9680,vec__9677,_,___$1){
return (function (G__9684,G__9685){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9684.cljs$core$IFn$_invoke$arity$2 ? G__9684.cljs$core$IFn$_invoke$arity$2("menu",G__9685) : G__9684.call(null,"menu",G__9685)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9680,vec__9677,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9682 = cljs.core.cst$kw$class;
var G__9683 = tailrecursion.javelin.formula(((function (G__9680,G__9681,G__9682,vec__9677,_,___$1){
return (function (G__9687,G__9688,G__9686){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9689 = (G__9687.cljs$core$IFn$_invoke$arity$2 ? G__9687.cljs$core$IFn$_invoke$arity$2("menu",G__9688) : G__9687.call(null,"menu",G__9688));
return (G__9686.cljs$core$IFn$_invoke$arity$1 ? G__9686.cljs$core$IFn$_invoke$arity$1(G__9689) : G__9686.call(null,G__9689));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9687.cljs$core$IFn$_invoke$arity$2 ? G__9687.cljs$core$IFn$_invoke$arity$2("menu",G__9688) : G__9687.call(null,"menu",G__9688))], null);
});})(G__9680,G__9681,G__9682,vec__9677,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9680,G__9681,G__9682,G__9683) : tailrecursion.hoplon.span.call(null,G__9680,G__9681,G__9682,G__9683));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9690__i = 0, G__9690__a = new Array(arguments.length -  0);
while (G__9690__i < G__9690__a.length) {G__9690__a[G__9690__i] = arguments[G__9690__i + 0]; ++G__9690__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9690__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8082__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9691){
var args__8082__auto__ = cljs.core.seq(arglist__9691);
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
var vec__9707 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__9708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9707,(0),null);
var map__9708__$1 = ((((!((map__9708 == null)))?((((map__9708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9708):map__9708);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9708__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9707,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9713 = cljs.core.cst$kw$class;
var G__9714 = tailrecursion.javelin.formula(((function (G__9713,lc_name,vec__9707,map__9708,map__9708__$1,name,_){
return (function (G__9716,G__9717,G__9718){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9716.cljs$core$IFn$_invoke$arity$2 ? G__9716.cljs$core$IFn$_invoke$arity$2(G__9717,G__9718) : G__9716.call(null,G__9717,G__9718))], null);
});})(G__9713,lc_name,vec__9707,map__9708,map__9708__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9715 = (function (){var G__9719 = cljs.core.cst$kw$href;
var G__9720 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9721 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9719,G__9720,G__9721) : tailrecursion.hoplon.a.call(null,G__9719,G__9720,G__9721));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9713,G__9714,G__9715) : tailrecursion.hoplon.li.call(null,G__9713,G__9714,G__9715));
};
var general$navbar$item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9722__i = 0, G__9722__a = new Array(arguments.length -  0);
while (G__9722__i < G__9722__a.length) {G__9722__a[G__9722__i] = arguments[G__9722__i + 0]; ++G__9722__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9722__a,0);
} 
return general$navbar$item__delegate.call(this,args__8082__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9723){
var args__8082__auto__ = cljs.core.seq(arglist__9723);
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
var vec__9732 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9732,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9732,(1),null);
var G__9735 = cljs.core.cst$kw$class;
var G__9736 = tailrecursion.javelin.formula(((function (G__9735,vec__9732,_,___$1){
return (function (G__9738,G__9739){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9738.cljs$core$IFn$_invoke$arity$2 ? G__9738.cljs$core$IFn$_invoke$arity$2(G__9739,null) : G__9738.call(null,G__9739,null))) || ((G__9738.cljs$core$IFn$_invoke$arity$2 ? G__9738.cljs$core$IFn$_invoke$arity$2(G__9739,"index") : G__9738.call(null,G__9739,"index")))], null);
});})(G__9735,vec__9732,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9737 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9735,G__9736,G__9737) : tailrecursion.hoplon.li.call(null,G__9735,G__9736,G__9737));
};
var general$navbar$home_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9740__i = 0, G__9740__a = new Array(arguments.length -  0);
while (G__9740__i < G__9740__a.length) {G__9740__a[G__9740__i] = arguments[G__9740__i + 0]; ++G__9740__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9740__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8082__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9741){
var args__8082__auto__ = cljs.core.seq(arglist__9741);
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
var vec__9750 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9750,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9750,(1),null);
var G__9753 = cljs.core.cst$kw$class;
var G__9754 = tailrecursion.javelin.formula(((function (G__9753,vec__9750,_,___$1){
return (function (G__9756,G__9757){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9756.cljs$core$IFn$_invoke$arity$2 ? G__9756.cljs$core$IFn$_invoke$arity$2(G__9757,"book") : G__9756.call(null,G__9757,"book"))], null);
});})(G__9753,vec__9750,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9755 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9753,G__9754,G__9755) : tailrecursion.hoplon.li.call(null,G__9753,G__9754,G__9755));
};
var general$navbar$sicp_item = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9758__i = 0, G__9758__a = new Array(arguments.length -  0);
while (G__9758__i < G__9758__a.length) {G__9758__a[G__9758__i] = arguments[G__9758__i + 0]; ++G__9758__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9758__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8082__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9759){
var args__8082__auto__ = cljs.core.seq(arglist__9759);
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
var vec__9761 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9761,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9761,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9762__i = 0, G__9762__a = new Array(arguments.length -  0);
while (G__9762__i < G__9762__a.length) {G__9762__a[G__9762__i] = arguments[G__9762__i + 0]; ++G__9762__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9762__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9763){
var args__8082__auto__ = cljs.core.seq(arglist__9763);
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
var vec__9765 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9765,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9765,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9766__i = 0, G__9766__a = new Array(arguments.length -  0);
while (G__9766__i < G__9766__a.length) {G__9766__a[G__9766__i] = arguments[G__9766__i + 0]; ++G__9766__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9766__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8082__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9767){
var args__8082__auto__ = cljs.core.seq(arglist__9767);
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
var vec__9771 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771,(1),null);
var G__9772 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9773 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9772,G__9773) : tailrecursion.hoplon.div.call(null,G__9772,G__9773));
};
var general$navbar$fixed = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9774__i = 0, G__9774__a = new Array(arguments.length -  0);
while (G__9774__i < G__9774__a.length) {G__9774__a[G__9774__i] = arguments[G__9774__i + 0]; ++G__9774__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9774__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8082__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9775){
var args__8082__auto__ = cljs.core.seq(arglist__9775);
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
var vec__9777 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9777,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9777,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__9778__i = 0, G__9778__a = new Array(arguments.length -  0);
while (G__9778__i < G__9778__a.length) {G__9778__a[G__9778__i] = arguments[G__9778__i + 0]; ++G__9778__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__9778__a,0);
} 
return general$navbar$static__delegate.call(this,args__8082__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9779){
var args__8082__auto__ = cljs.core.seq(arglist__9779);
return general$navbar$static__delegate(args__8082__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
