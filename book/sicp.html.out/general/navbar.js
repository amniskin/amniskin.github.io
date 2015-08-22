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
var vec__179971 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__179972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__179971,(0),null);
var map__179972__$1 = ((((!((map__179972 == null)))?((((map__179972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__179972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__179972):map__179972);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__179972__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__179971,(1),null);
var G__179977 = cljs.core.cst$kw$type;
var G__179978 = "button";
var G__179979 = cljs.core.cst$kw$class;
var G__179980 = tailrecursion.javelin.formula(((function (G__179977,G__179978,G__179979,vec__179971,map__179972,map__179972__$1,name,kids){
return (function (G__179984,G__179985,G__179986){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__179984.cljs$core$IFn$_invoke$arity$2 ? G__179984.cljs$core$IFn$_invoke$arity$2(G__179985,G__179986) : G__179984.call(null,G__179985,G__179986))], null);
});})(G__179977,G__179978,G__179979,vec__179971,map__179972,map__179972__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__179981 = cljs.core.cst$kw$click;
var G__179982 = ((function (G__179977,G__179978,G__179979,G__179980,G__179981,vec__179971,map__179972,map__179972__$1,name,kids){
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
});})(G__179977,G__179978,G__179979,G__179980,G__179981,vec__179971,map__179972,map__179972__$1,name,kids))
;
var G__179983 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__179977,G__179978,G__179979,G__179980,G__179981,G__179982,G__179983) : tailrecursion.hoplon.button.call(null,G__179977,G__179978,G__179979,G__179980,G__179981,G__179982,G__179983));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__179987__i = 0, G__179987__a = new Array(arguments.length -  0);
while (G__179987__i < G__179987__a.length) {G__179987__a[G__179987__i] = arguments[G__179987__i + 0]; ++G__179987__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__179987__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__179988){
var args__8262__auto__ = cljs.core.seq(arglist__179988);
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
var vec__179993 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__179993,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__179993,(1),null);
var G__179994 = cljs.core.cst$kw$class;
var G__179995 = "navbar navbar-inverse navbar-fixed-top";
var G__179996 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__179994,G__179995,G__179996) : tailrecursion.hoplon.div.call(null,G__179994,G__179995,G__179996));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__179997__i = 0, G__179997__a = new Array(arguments.length -  0);
while (G__179997__i < G__179997__a.length) {G__179997__a[G__179997__i] = arguments[G__179997__i + 0]; ++G__179997__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__179997__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__179998){
var args__8262__auto__ = cljs.core.seq(arglist__179998);
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
var vec__180005 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180005,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180005,(1),null);
var G__180006 = cljs.core.cst$kw$class;
var G__180007 = "navbar navbar-inverse navbar-static-top";
var G__180008 = cljs.core.cst$kw$style;
var G__180009 = "margin-bottom:0;";
var G__180010 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__180006,G__180007,G__180008,G__180009,G__180010) : tailrecursion.hoplon.div.call(null,G__180006,G__180007,G__180008,G__180009,G__180010));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180011__i = 0, G__180011__a = new Array(arguments.length -  0);
while (G__180011__i < G__180011__a.length) {G__180011__a[G__180011__i] = arguments[G__180011__i + 0]; ++G__180011__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180011__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__180012){
var args__8262__auto__ = cljs.core.seq(arglist__180012);
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
var vec__180014 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180014,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180014,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180015__i = 0, G__180015__a = new Array(arguments.length -  0);
while (G__180015__i < G__180015__a.length) {G__180015__a[G__180015__i] = arguments[G__180015__i + 0]; ++G__180015__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180015__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__180016){
var args__8262__auto__ = cljs.core.seq(arglist__180016);
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
var vec__180024 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180024,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180024,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__180025 = cljs.core.cst$kw$class;
var G__180026 = "navbar-brand";
var G__180027 = cljs.core.cst$kw$click;
var G__180028 = ((function (G__180025,G__180026,G__180027,vec__180024,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__180025,G__180026,G__180027,vec__180024,_,kids))
;
var G__180029 = cljs.core.cst$kw$href;
var G__180030 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__180025,G__180026,G__180027,G__180028,G__180029,G__180030) : tailrecursion.hoplon.a.call(null,G__180025,G__180026,G__180027,G__180028,G__180029,G__180030));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180031__i = 0, G__180031__a = new Array(arguments.length -  0);
while (G__180031__i < G__180031__a.length) {G__180031__a[G__180031__i] = arguments[G__180031__i + 0]; ++G__180031__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180031__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__180032){
var args__8262__auto__ = cljs.core.seq(arglist__180032);
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
var vec__180041 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180041,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180041,(1),null);
var G__180044 = cljs.core.cst$kw$class;
var G__180045 = tailrecursion.javelin.formula(((function (G__180044,vec__180041,attr,kids){
return (function (G__180047,G__180048){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__180047.cljs$core$IFn$_invoke$arity$2 ? G__180047.cljs$core$IFn$_invoke$arity$2(G__180048,"menu") : G__180047.call(null,G__180048,"menu"))], null);
});})(G__180044,vec__180041,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__180046 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__180044,G__180045,G__180046) : tailrecursion.hoplon.div.call(null,G__180044,G__180045,G__180046));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180049__i = 0, G__180049__a = new Array(arguments.length -  0);
while (G__180049__i < G__180049__a.length) {G__180049__a[G__180049__i] = arguments[G__180049__i + 0]; ++G__180049__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180049__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__180050){
var args__8262__auto__ = cljs.core.seq(arglist__180050);
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
var vec__180064 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180064,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180064,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__180067 = cljs.core.cst$kw$style;
var G__180068 = tailrecursion.javelin.formula(((function (G__180067,vec__180064,_,___$1){
return (function (G__180071,G__180072){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__180071.cljs$core$IFn$_invoke$arity$2 ? G__180071.cljs$core$IFn$_invoke$arity$2("menu",G__180072) : G__180071.call(null,"menu",G__180072)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__180067,vec__180064,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__180069 = cljs.core.cst$kw$class;
var G__180070 = tailrecursion.javelin.formula(((function (G__180067,G__180068,G__180069,vec__180064,_,___$1){
return (function (G__180074,G__180075,G__180073){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__180076 = (G__180074.cljs$core$IFn$_invoke$arity$2 ? G__180074.cljs$core$IFn$_invoke$arity$2("menu",G__180075) : G__180074.call(null,"menu",G__180075));
return (G__180073.cljs$core$IFn$_invoke$arity$1 ? G__180073.cljs$core$IFn$_invoke$arity$1(G__180076) : G__180073.call(null,G__180076));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__180074.cljs$core$IFn$_invoke$arity$2 ? G__180074.cljs$core$IFn$_invoke$arity$2("menu",G__180075) : G__180074.call(null,"menu",G__180075))], null);
});})(G__180067,G__180068,G__180069,vec__180064,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__180067,G__180068,G__180069,G__180070) : tailrecursion.hoplon.span.call(null,G__180067,G__180068,G__180069,G__180070));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180077__i = 0, G__180077__a = new Array(arguments.length -  0);
while (G__180077__i < G__180077__a.length) {G__180077__a[G__180077__i] = arguments[G__180077__i + 0]; ++G__180077__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180077__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__180078){
var args__8262__auto__ = cljs.core.seq(arglist__180078);
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
var vec__180094 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__180095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180094,(0),null);
var map__180095__$1 = ((((!((map__180095 == null)))?((((map__180095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__180095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__180095):map__180095);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__180095__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180094,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__180100 = cljs.core.cst$kw$class;
var G__180101 = tailrecursion.javelin.formula(((function (G__180100,lc_name,vec__180094,map__180095,map__180095__$1,name,_){
return (function (G__180103,G__180104,G__180105){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__180103.cljs$core$IFn$_invoke$arity$2 ? G__180103.cljs$core$IFn$_invoke$arity$2(G__180104,G__180105) : G__180103.call(null,G__180104,G__180105))], null);
});})(G__180100,lc_name,vec__180094,map__180095,map__180095__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__180102 = (function (){var G__180106 = cljs.core.cst$kw$href;
var G__180107 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__180108 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__180106,G__180107,G__180108) : tailrecursion.hoplon.a.call(null,G__180106,G__180107,G__180108));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180100,G__180101,G__180102) : tailrecursion.hoplon.li.call(null,G__180100,G__180101,G__180102));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180109__i = 0, G__180109__a = new Array(arguments.length -  0);
while (G__180109__i < G__180109__a.length) {G__180109__a[G__180109__i] = arguments[G__180109__i + 0]; ++G__180109__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180109__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__180110){
var args__8262__auto__ = cljs.core.seq(arglist__180110);
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
var vec__180119 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180119,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180119,(1),null);
var G__180122 = cljs.core.cst$kw$class;
var G__180123 = tailrecursion.javelin.formula(((function (G__180122,vec__180119,_,___$1){
return (function (G__180125,G__180126){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__180125.cljs$core$IFn$_invoke$arity$2 ? G__180125.cljs$core$IFn$_invoke$arity$2(G__180126,null) : G__180125.call(null,G__180126,null))) || ((G__180125.cljs$core$IFn$_invoke$arity$2 ? G__180125.cljs$core$IFn$_invoke$arity$2(G__180126,"index") : G__180125.call(null,G__180126,"index")))], null);
});})(G__180122,vec__180119,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__180124 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180122,G__180123,G__180124) : tailrecursion.hoplon.li.call(null,G__180122,G__180123,G__180124));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180127__i = 0, G__180127__a = new Array(arguments.length -  0);
while (G__180127__i < G__180127__a.length) {G__180127__a[G__180127__i] = arguments[G__180127__i + 0]; ++G__180127__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180127__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__180128){
var args__8262__auto__ = cljs.core.seq(arglist__180128);
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
var vec__180137 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180137,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180137,(1),null);
var G__180140 = cljs.core.cst$kw$class;
var G__180141 = tailrecursion.javelin.formula(((function (G__180140,vec__180137,_,___$1){
return (function (G__180143,G__180144){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__180143.cljs$core$IFn$_invoke$arity$2 ? G__180143.cljs$core$IFn$_invoke$arity$2(G__180144,"book") : G__180143.call(null,G__180144,"book"))], null);
});})(G__180140,vec__180137,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__180142 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__180140,G__180141,G__180142) : tailrecursion.hoplon.li.call(null,G__180140,G__180141,G__180142));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180145__i = 0, G__180145__a = new Array(arguments.length -  0);
while (G__180145__i < G__180145__a.length) {G__180145__a[G__180145__i] = arguments[G__180145__i + 0]; ++G__180145__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180145__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__180146){
var args__8262__auto__ = cljs.core.seq(arglist__180146);
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
var vec__180148 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180148,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180148,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180149__i = 0, G__180149__a = new Array(arguments.length -  0);
while (G__180149__i < G__180149__a.length) {G__180149__a[G__180149__i] = arguments[G__180149__i + 0]; ++G__180149__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180149__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__180150){
var args__8262__auto__ = cljs.core.seq(arglist__180150);
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
var vec__180152 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180152,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180152,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180153__i = 0, G__180153__a = new Array(arguments.length -  0);
while (G__180153__i < G__180153__a.length) {G__180153__a[G__180153__i] = arguments[G__180153__i + 0]; ++G__180153__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180153__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__180154){
var args__8262__auto__ = cljs.core.seq(arglist__180154);
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
var vec__180158 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180158,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180158,(1),null);
var G__180159 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__180160 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__180159,G__180160) : tailrecursion.hoplon.div.call(null,G__180159,G__180160));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180161__i = 0, G__180161__a = new Array(arguments.length -  0);
while (G__180161__i < G__180161__a.length) {G__180161__a[G__180161__i] = arguments[G__180161__i + 0]; ++G__180161__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180161__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__180162){
var args__8262__auto__ = cljs.core.seq(arglist__180162);
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
var vec__180164 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180164,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__180164,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__180165__i = 0, G__180165__a = new Array(arguments.length -  0);
while (G__180165__i < G__180165__a.length) {G__180165__a[G__180165__i] = arguments[G__180165__i + 0]; ++G__180165__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__180165__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__180166){
var args__8262__auto__ = cljs.core.seq(arglist__180166);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
