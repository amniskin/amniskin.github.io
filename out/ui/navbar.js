// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.navbar');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('ui.style');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.navbar.nav_active = tailrecursion.javelin.cell(null);
ui.navbar.home = ui.info.home;
/**
 * @param {...*} var_args
 */
ui.navbar.nav_button = (function() { 
var ui$navbar$nav_button__delegate = function (args__10403__auto__){
var vec__88500 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__88501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88500,(0),null);
var map__88501__$1 = ((cljs.core.seq_QMARK_(map__88501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88501):map__88501);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88501__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88500,(1),null);
var G__88502 = cljs.core.constant$keyword$type;
var G__88503 = "button";
var G__88504 = cljs.core.constant$keyword$class;
var G__88505 = tailrecursion.javelin.formula(((function (G__88502,G__88503,G__88504,vec__88500,map__88501,map__88501__$1,name,kids){
return (function (G__88509,G__88510,G__88511){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$navbar_DASH_toggle,true,cljs.core.constant$keyword$collapsed,true,cljs.core.constant$keyword$active,(function (){var G__88512 = G__88510;
var G__88513 = G__88511;
return (G__88509.cljs$core$IFn$_invoke$arity$2 ? G__88509.cljs$core$IFn$_invoke$arity$2(G__88512,G__88513) : G__88509.call(null,G__88512,G__88513));
})()], null);
});})(G__88502,G__88503,G__88504,vec__88500,map__88501,map__88501__$1,name,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active,name);
var G__88506 = cljs.core.constant$keyword$click;
var G__88507 = ((function (G__88502,G__88503,G__88504,G__88505,G__88506,vec__88500,map__88501,map__88501__$1,name,kids){
return (function (){
if(cljs.core.not((function (){var G__88514 = ui.navbar.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__88514) : cljs.core.deref.call(null,G__88514));
})())){
var G__88515 = ui.navbar.nav_active;
var G__88516 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88515,G__88516) : cljs.core.reset_BANG_.call(null,G__88515,G__88516));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__88517 = ui.navbar.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__88517) : cljs.core.deref.call(null,G__88517));
})(),name)){
var G__88518 = ui.navbar.nav_active;
var G__88519 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88518,G__88519) : cljs.core.reset_BANG_.call(null,G__88518,G__88519));
} else {
var G__88520 = ui.info.nav_active;
var G__88521 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88520,G__88521) : cljs.core.reset_BANG_.call(null,G__88520,G__88521));

}
}
});})(G__88502,G__88503,G__88504,G__88505,G__88506,vec__88500,map__88501,map__88501__$1,name,kids))
;
var G__88508 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__88502,G__88503,G__88504,G__88505,G__88506,G__88507,G__88508) : tailrecursion.hoplon.button.call(null,G__88502,G__88503,G__88504,G__88505,G__88506,G__88507,G__88508));
};
var ui$navbar$nav_button = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88522__i = 0, G__88522__a = new Array(arguments.length -  0);
while (G__88522__i < G__88522__a.length) {G__88522__a[G__88522__i] = arguments[G__88522__i + 0]; ++G__88522__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88522__a,0);
} 
return ui$navbar$nav_button__delegate.call(this,args__10403__auto__);};
ui$navbar$nav_button.cljs$lang$maxFixedArity = 0;
ui$navbar$nav_button.cljs$lang$applyTo = (function (arglist__88523){
var args__10403__auto__ = cljs.core.seq(arglist__88523);
return ui$navbar$nav_button__delegate(args__10403__auto__);
});
ui$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$nav_button__delegate;
return ui$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.fixed_bar = (function() { 
var ui$navbar$fixed_bar__delegate = function (args__10403__auto__){
var vec__88528 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88528,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88528,(1),null);
var G__88529 = cljs.core.constant$keyword$class;
var G__88530 = "navbar navbar-inverse navbar-fixed-top";
var G__88531 = ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__88529,G__88530,G__88531) : tailrecursion.hoplon.div.call(null,G__88529,G__88530,G__88531));
};
var ui$navbar$fixed_bar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88532__i = 0, G__88532__a = new Array(arguments.length -  0);
while (G__88532__i < G__88532__a.length) {G__88532__a[G__88532__i] = arguments[G__88532__i + 0]; ++G__88532__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88532__a,0);
} 
return ui$navbar$fixed_bar__delegate.call(this,args__10403__auto__);};
ui$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
ui$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__88533){
var args__10403__auto__ = cljs.core.seq(arglist__88533);
return ui$navbar$fixed_bar__delegate(args__10403__auto__);
});
ui$navbar$fixed_bar.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$fixed_bar__delegate;
return ui$navbar$fixed_bar;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.static_bar = (function() { 
var ui$navbar$static_bar__delegate = function (args__10403__auto__){
var vec__88540 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88540,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88540,(1),null);
var G__88541 = cljs.core.constant$keyword$class;
var G__88542 = "navbar navbar-inverse navbar-static-top";
var G__88543 = cljs.core.constant$keyword$style;
var G__88544 = "margin-bottom:0;";
var G__88545 = ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__88541,G__88542,G__88543,G__88544,G__88545) : tailrecursion.hoplon.div.call(null,G__88541,G__88542,G__88543,G__88544,G__88545));
};
var ui$navbar$static_bar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88546__i = 0, G__88546__a = new Array(arguments.length -  0);
while (G__88546__i < G__88546__a.length) {G__88546__a[G__88546__i] = arguments[G__88546__i + 0]; ++G__88546__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88546__a,0);
} 
return ui$navbar$static_bar__delegate.call(this,args__10403__auto__);};
ui$navbar$static_bar.cljs$lang$maxFixedArity = 0;
ui$navbar$static_bar.cljs$lang$applyTo = (function (arglist__88547){
var args__10403__auto__ = cljs.core.seq(arglist__88547);
return ui$navbar$static_bar__delegate(args__10403__auto__);
});
ui$navbar$static_bar.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$static_bar__delegate;
return ui$navbar$static_bar;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.header2 = (function() { 
var ui$navbar$header2__delegate = function (args__10403__auto__){
var vec__88551 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88551,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88551,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__88552 = cljs.core.constant$keyword$class;
var G__88553 = "navbar-header";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__88552,G__88553) : tailrecursion.hoplon.div.call(null,G__88552,G__88553));
})(),kids);
};
var ui$navbar$header2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88554__i = 0, G__88554__a = new Array(arguments.length -  0);
while (G__88554__i < G__88554__a.length) {G__88554__a[G__88554__i] = arguments[G__88554__i + 0]; ++G__88554__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88554__a,0);
} 
return ui$navbar$header2__delegate.call(this,args__10403__auto__);};
ui$navbar$header2.cljs$lang$maxFixedArity = 0;
ui$navbar$header2.cljs$lang$applyTo = (function (arglist__88555){
var args__10403__auto__ = cljs.core.seq(arglist__88555);
return ui$navbar$header2__delegate(args__10403__auto__);
});
ui$navbar$header2.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$header2__delegate;
return ui$navbar$header2;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.brand = (function() { 
var ui$navbar$brand__delegate = function (args__10403__auto__){
var vec__88565 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88565,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88565,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__88566 = cljs.core.constant$keyword$class;
var G__88567 = "navbar-brand";
var G__88568 = cljs.core.constant$keyword$click;
var G__88569 = ((function (G__88566,G__88567,G__88568,vec__88565,_,kids){
return (function (){
var G__88572 = ui.navbar.nav_active;
var G__88573 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88572,G__88573) : cljs.core.reset_BANG_.call(null,G__88572,G__88573));
});})(G__88566,G__88567,G__88568,vec__88565,_,kids))
;
var G__88570 = cljs.core.constant$keyword$href;
var G__88571 = ui.navbar.home;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__88566,G__88567,G__88568,G__88569,G__88570,G__88571) : tailrecursion.hoplon.a.call(null,G__88566,G__88567,G__88568,G__88569,G__88570,G__88571));
})(),kids);
};
var ui$navbar$brand = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88574__i = 0, G__88574__a = new Array(arguments.length -  0);
while (G__88574__i < G__88574__a.length) {G__88574__a[G__88574__i] = arguments[G__88574__i + 0]; ++G__88574__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88574__a,0);
} 
return ui$navbar$brand__delegate.call(this,args__10403__auto__);};
ui$navbar$brand.cljs$lang$maxFixedArity = 0;
ui$navbar$brand.cljs$lang$applyTo = (function (arglist__88575){
var args__10403__auto__ = cljs.core.seq(arglist__88575);
return ui$navbar$brand__delegate(args__10403__auto__);
});
ui$navbar$brand.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$brand__delegate;
return ui$navbar$brand;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.menu2 = (function() { 
var ui$navbar$menu2__delegate = function (args__10403__auto__){
var vec__88586 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88586,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88586,(1),null);
var G__88587 = cljs.core.constant$keyword$class;
var G__88588 = tailrecursion.javelin.formula(((function (G__88587,vec__88586,attr,kids){
return (function (G__88590,G__88591){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$collapse,true,cljs.core.constant$keyword$navbar_DASH_collapse,true,cljs.core.constant$keyword$in,(function (){var G__88592 = G__88591;
var G__88593 = "menu";
return (G__88590.cljs$core$IFn$_invoke$arity$2 ? G__88590.cljs$core$IFn$_invoke$arity$2(G__88592,G__88593) : G__88590.call(null,G__88592,G__88593));
})()], null);
});})(G__88587,vec__88586,attr,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active);
var G__88589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__88594 = cljs.core.constant$keyword$class;
var G__88595 = "nav navbar-nav";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__88594,G__88595) : tailrecursion.hoplon.ul.call(null,G__88594,G__88595));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__88587,G__88588,G__88589) : tailrecursion.hoplon.div.call(null,G__88587,G__88588,G__88589));
};
var ui$navbar$menu2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88596__i = 0, G__88596__a = new Array(arguments.length -  0);
while (G__88596__i < G__88596__a.length) {G__88596__a[G__88596__i] = arguments[G__88596__i + 0]; ++G__88596__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88596__a,0);
} 
return ui$navbar$menu2__delegate.call(this,args__10403__auto__);};
ui$navbar$menu2.cljs$lang$maxFixedArity = 0;
ui$navbar$menu2.cljs$lang$applyTo = (function (arglist__88597){
var args__10403__auto__ = cljs.core.seq(arglist__88597);
return ui$navbar$menu2__delegate(args__10403__auto__);
});
ui$navbar$menu2.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$menu2__delegate;
return ui$navbar$menu2;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.item = (function() { 
var ui$navbar$item__delegate = function (args__10403__auto__){
var vec__88619 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__88620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88619,(0),null);
var map__88620__$1 = ((cljs.core.seq_QMARK_(map__88620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88620):map__88620);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88620__$1,cljs.core.constant$keyword$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88619,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__88621 = cljs.core.constant$keyword$class;
var G__88622 = tailrecursion.javelin.formula(((function (G__88621,lc_name,vec__88619,map__88620,map__88620__$1,name,_){
return (function (G__88624,G__88625,G__88626){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,(function (){var G__88627 = G__88625;
var G__88628 = G__88626;
return (G__88624.cljs$core$IFn$_invoke$arity$2 ? G__88624.cljs$core$IFn$_invoke$arity$2(G__88627,G__88628) : G__88624.call(null,G__88627,G__88628));
})()], null);
});})(G__88621,lc_name,vec__88619,map__88620,map__88620__$1,name,_))
).call(null,cljs.core._EQ_,ui.info.location,lc_name);
var G__88623 = (function (){var G__88629 = cljs.core.constant$keyword$click;
var G__88630 = ((function (G__88629,G__88621,G__88622,lc_name,vec__88619,map__88620,map__88620__$1,name,_){
return (function (){
var G__88634_88640 = ui.info.scroll_location;
var G__88635_88641 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88634_88640,G__88635_88641) : cljs.core.reset_BANG_.call(null,G__88634_88640,G__88635_88641));

var G__88636_88642 = ui.info.scroll_location;
var G__88637_88643 = lc_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88636_88642,G__88637_88643) : cljs.core.reset_BANG_.call(null,G__88636_88642,G__88637_88643));

var G__88638 = ui.navbar.nav_active;
var G__88639 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88638,G__88639) : cljs.core.reset_BANG_.call(null,G__88638,G__88639));
});})(G__88629,G__88621,G__88622,lc_name,vec__88619,map__88620,map__88620__$1,name,_))
;
var G__88631 = cljs.core.constant$keyword$href;
var G__88632 = [cljs.core.str("#!/"),cljs.core.str(lc_name),cljs.core.str("/")].join('');
var G__88633 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(G__88629,G__88630,G__88631,G__88632,G__88633) : tailrecursion.hoplon.a.call(null,G__88629,G__88630,G__88631,G__88632,G__88633));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__88621,G__88622,G__88623) : tailrecursion.hoplon.li.call(null,G__88621,G__88622,G__88623));
};
var ui$navbar$item = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88644__i = 0, G__88644__a = new Array(arguments.length -  0);
while (G__88644__i < G__88644__a.length) {G__88644__a[G__88644__i] = arguments[G__88644__i + 0]; ++G__88644__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88644__a,0);
} 
return ui$navbar$item__delegate.call(this,args__10403__auto__);};
ui$navbar$item.cljs$lang$maxFixedArity = 0;
ui$navbar$item.cljs$lang$applyTo = (function (arglist__88645){
var args__10403__auto__ = cljs.core.seq(arglist__88645);
return ui$navbar$item__delegate(args__10403__auto__);
});
ui$navbar$item.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$item__delegate;
return ui$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.fixed_offset = (function() { 
var ui$navbar$fixed_offset__delegate = function (args__10403__auto__){
var vec__88649 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88649,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88649,(1),null);
var G__88650 = cljs.core.constant$keyword$style;
var G__88651 = "height:50px";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__88650,G__88651) : tailrecursion.hoplon.div.call(null,G__88650,G__88651));
};
var ui$navbar$fixed_offset = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88652__i = 0, G__88652__a = new Array(arguments.length -  0);
while (G__88652__i < G__88652__a.length) {G__88652__a[G__88652__i] = arguments[G__88652__i + 0]; ++G__88652__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88652__a,0);
} 
return ui$navbar$fixed_offset__delegate.call(this,args__10403__auto__);};
ui$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
ui$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__88653){
var args__10403__auto__ = cljs.core.seq(arglist__88653);
return ui$navbar$fixed_offset__delegate(args__10403__auto__);
});
ui$navbar$fixed_offset.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$fixed_offset__delegate;
return ui$navbar$fixed_offset;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.fixed_nav = (function() { 
var ui$navbar$fixed_nav__delegate = function (args__10403__auto__){
var vec__88671 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88671,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88671,(1),null);
return ui.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__88672 = cljs.core.constant$keyword$style;
var G__88673 = tailrecursion.javelin.formula(((function (G__88672,vec__88671,attr,kids){
return (function (G__88676,G__88677){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((function (){var G__88678 = "menu";
var G__88679 = G__88677;
return (G__88676.cljs$core$IFn$_invoke$arity$2 ? G__88676.cljs$core$IFn$_invoke$arity$2(G__88678,G__88679) : G__88676.call(null,G__88678,G__88679));
})())?"white":"black")),cljs.core.str(";")].join('');
});})(G__88672,vec__88671,attr,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active);
var G__88674 = cljs.core.constant$keyword$class;
var G__88675 = tailrecursion.javelin.formula(((function (G__88672,G__88673,G__88674,vec__88671,attr,kids){
return (function (G__88681,G__88682,G__88680){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$glyphicon,true,cljs.core.constant$keyword$glyphicon_DASH_chevron_DASH_down,(function (){var G__88683 = (function (){var G__88684 = "menu";
var G__88685 = G__88682;
return (G__88681.cljs$core$IFn$_invoke$arity$2 ? G__88681.cljs$core$IFn$_invoke$arity$2(G__88684,G__88685) : G__88681.call(null,G__88684,G__88685));
})();
return (G__88680.cljs$core$IFn$_invoke$arity$1 ? G__88680.cljs$core$IFn$_invoke$arity$1(G__88683) : G__88680.call(null,G__88683));
})(),cljs.core.constant$keyword$glyphicon_DASH_chevron_DASH_up,(function (){var G__88686 = "menu";
var G__88687 = G__88682;
return (G__88681.cljs$core$IFn$_invoke$arity$2 ? G__88681.cljs$core$IFn$_invoke$arity$2(G__88686,G__88687) : G__88681.call(null,G__88686,G__88687));
})()], null);
});})(G__88672,G__88673,G__88674,vec__88671,attr,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__88672,G__88673,G__88674,G__88675) : tailrecursion.hoplon.span.call(null,G__88672,G__88673,G__88674,G__88675));
})(),cljs.core.constant$keyword$name,"menu"], 0)),ui.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),ui.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Home"], 0)),ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"SICP"], 0)),ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"CV"], 0))], 0))], 0));
};
var ui$navbar$fixed_nav = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88688__i = 0, G__88688__a = new Array(arguments.length -  0);
while (G__88688__i < G__88688__a.length) {G__88688__a[G__88688__i] = arguments[G__88688__i + 0]; ++G__88688__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88688__a,0);
} 
return ui$navbar$fixed_nav__delegate.call(this,args__10403__auto__);};
ui$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
ui$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__88689){
var args__10403__auto__ = cljs.core.seq(arglist__88689);
return ui$navbar$fixed_nav__delegate(args__10403__auto__);
});
ui$navbar$fixed_nav.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$fixed_nav__delegate;
return ui$navbar$fixed_nav;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.fixed = (function() { 
var ui$navbar$fixed__delegate = function (args__10403__auto__){
var vec__88693 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88693,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88693,(1),null);
var G__88694 = ui.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__88695 = ui.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__88694,G__88695) : tailrecursion.hoplon.div.call(null,G__88694,G__88695));
};
var ui$navbar$fixed = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88696__i = 0, G__88696__a = new Array(arguments.length -  0);
while (G__88696__i < G__88696__a.length) {G__88696__a[G__88696__i] = arguments[G__88696__i + 0]; ++G__88696__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88696__a,0);
} 
return ui$navbar$fixed__delegate.call(this,args__10403__auto__);};
ui$navbar$fixed.cljs$lang$maxFixedArity = 0;
ui$navbar$fixed.cljs$lang$applyTo = (function (arglist__88697){
var args__10403__auto__ = cljs.core.seq(arglist__88697);
return ui$navbar$fixed__delegate(args__10403__auto__);
});
ui$navbar$fixed.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$fixed__delegate;
return ui$navbar$fixed;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.static$ = (function() { 
var ui$navbar$static__delegate = function (args__10403__auto__){
var vec__88715 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88715,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88715,(1),null);
return ui.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__88716 = cljs.core.constant$keyword$style;
var G__88717 = tailrecursion.javelin.formula(((function (G__88716,vec__88715,attr,kids){
return (function (G__88720,G__88721){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((function (){var G__88722 = "menu";
var G__88723 = G__88721;
return (G__88720.cljs$core$IFn$_invoke$arity$2 ? G__88720.cljs$core$IFn$_invoke$arity$2(G__88722,G__88723) : G__88720.call(null,G__88722,G__88723));
})())?"white":"black")),cljs.core.str(";")].join('');
});})(G__88716,vec__88715,attr,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active);
var G__88718 = cljs.core.constant$keyword$class;
var G__88719 = tailrecursion.javelin.formula(((function (G__88716,G__88717,G__88718,vec__88715,attr,kids){
return (function (G__88725,G__88726,G__88724){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$glyphicon,true,cljs.core.constant$keyword$glyphicon_DASH_chevron_DASH_down,(function (){var G__88727 = (function (){var G__88728 = "menu";
var G__88729 = G__88726;
return (G__88725.cljs$core$IFn$_invoke$arity$2 ? G__88725.cljs$core$IFn$_invoke$arity$2(G__88728,G__88729) : G__88725.call(null,G__88728,G__88729));
})();
return (G__88724.cljs$core$IFn$_invoke$arity$1 ? G__88724.cljs$core$IFn$_invoke$arity$1(G__88727) : G__88724.call(null,G__88727));
})(),cljs.core.constant$keyword$glyphicon_DASH_chevron_DASH_up,(function (){var G__88730 = "menu";
var G__88731 = G__88726;
return (G__88725.cljs$core$IFn$_invoke$arity$2 ? G__88725.cljs$core$IFn$_invoke$arity$2(G__88730,G__88731) : G__88725.call(null,G__88730,G__88731));
})()], null);
});})(G__88716,G__88717,G__88718,vec__88715,attr,kids))
).call(null,cljs.core._EQ_,ui.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__88716,G__88717,G__88718,G__88719) : tailrecursion.hoplon.span.call(null,G__88716,G__88717,G__88718,G__88719));
})(),cljs.core.constant$keyword$name,"menu"], 0)),ui.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),ui.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Home"], 0)),ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"SICP"], 0)),ui.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"CV"], 0))], 0))], 0));
};
var ui$navbar$static = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__88732__i = 0, G__88732__a = new Array(arguments.length -  0);
while (G__88732__i < G__88732__a.length) {G__88732__a[G__88732__i] = arguments[G__88732__i + 0]; ++G__88732__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__88732__a,0);
} 
return ui$navbar$static__delegate.call(this,args__10403__auto__);};
ui$navbar$static.cljs$lang$maxFixedArity = 0;
ui$navbar$static.cljs$lang$applyTo = (function (arglist__88733){
var args__10403__auto__ = cljs.core.seq(arglist__88733);
return ui$navbar$static__delegate(args__10403__auto__);
});
ui$navbar$static.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$static__delegate;
return ui$navbar$static;
})()
;
