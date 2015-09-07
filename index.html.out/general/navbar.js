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
var vec__9760 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9760,(0),null);
var map__9761__$1 = ((((!((map__9761 == null)))?((((map__9761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9761):map__9761);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9761__$1,cljs.core.cst$kw$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9760,(1),null);
var G__9766 = cljs.core.cst$kw$type;
var G__9767 = "button";
var G__9768 = cljs.core.cst$kw$class;
var G__9769 = tailrecursion.javelin.formula(((function (G__9766,G__9767,G__9768,vec__9760,map__9761,map__9761__$1,name,kids){
return (function (G__9773,G__9774,G__9775){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$navbar_DASH_toggle,true,cljs.core.cst$kw$collapsed,true,cljs.core.cst$kw$active,(G__9773.cljs$core$IFn$_invoke$arity$2 ? G__9773.cljs$core$IFn$_invoke$arity$2(G__9774,G__9775) : G__9773.call(null,G__9774,G__9775))], null);
});})(G__9766,G__9767,G__9768,vec__9760,map__9761,map__9761__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name);
var G__9770 = cljs.core.cst$kw$click;
var G__9771 = ((function (G__9766,G__9767,G__9768,G__9769,G__9770,vec__9760,map__9761,map__9761__$1,name,kids){
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
});})(G__9766,G__9767,G__9768,G__9769,G__9770,vec__9760,map__9761,map__9761__$1,name,kids))
;
var G__9772 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__9766,G__9767,G__9768,G__9769,G__9770,G__9771,G__9772) : tailrecursion.hoplon.button.call(null,G__9766,G__9767,G__9768,G__9769,G__9770,G__9771,G__9772));
};
var general$navbar$nav_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9776__i = 0, G__9776__a = new Array(arguments.length -  0);
while (G__9776__i < G__9776__a.length) {G__9776__a[G__9776__i] = arguments[G__9776__i + 0]; ++G__9776__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9776__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__9777){
var args__8262__auto__ = cljs.core.seq(arglist__9777);
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
var vec__9782 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,(1),null);
var G__9783 = cljs.core.cst$kw$class;
var G__9784 = "navbar navbar-inverse navbar-fixed-top";
var G__9785 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9783,G__9784,G__9785) : tailrecursion.hoplon.div.call(null,G__9783,G__9784,G__9785));
};
var general$navbar$fixed_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9786__i = 0, G__9786__a = new Array(arguments.length -  0);
while (G__9786__i < G__9786__a.length) {G__9786__a[G__9786__i] = arguments[G__9786__i + 0]; ++G__9786__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9786__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__9787){
var args__8262__auto__ = cljs.core.seq(arglist__9787);
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
var vec__9794 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9794,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9794,(1),null);
var G__9795 = cljs.core.cst$kw$class;
var G__9796 = "navbar navbar-inverse navbar-static-top";
var G__9797 = cljs.core.cst$kw$style;
var G__9798 = "margin-bottom:0;";
var G__9799 = general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__9795,G__9796,G__9797,G__9798,G__9799) : tailrecursion.hoplon.div.call(null,G__9795,G__9796,G__9797,G__9798,G__9799));
};
var general$navbar$static_bar = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9800__i = 0, G__9800__a = new Array(arguments.length -  0);
while (G__9800__i < G__9800__a.length) {G__9800__a[G__9800__i] = arguments[G__9800__i + 0]; ++G__9800__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9800__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__8262__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__9801){
var args__8262__auto__ = cljs.core.seq(arglist__9801);
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
var vec__9803 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9803,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9803,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"navbar-header") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"navbar-header")),kids);
};
var general$navbar$header2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9804__i = 0, G__9804__a = new Array(arguments.length -  0);
while (G__9804__i < G__9804__a.length) {G__9804__a[G__9804__i] = arguments[G__9804__i + 0]; ++G__9804__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9804__a,0);
} 
return general$navbar$header2__delegate.call(this,args__8262__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__9805){
var args__8262__auto__ = cljs.core.seq(arglist__9805);
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
var vec__9813 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9813,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9813,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__9814 = cljs.core.cst$kw$class;
var G__9815 = "navbar-brand";
var G__9816 = cljs.core.cst$kw$click;
var G__9817 = ((function (G__9814,G__9815,G__9816,vec__9813,_,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.navbar.nav_active,null) : cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null));
});})(G__9814,G__9815,G__9816,vec__9813,_,kids))
;
var G__9818 = cljs.core.cst$kw$href;
var G__9819 = "/index.html";
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__9814,G__9815,G__9816,G__9817,G__9818,G__9819) : tailrecursion.hoplon.a.call(null,G__9814,G__9815,G__9816,G__9817,G__9818,G__9819));
})(),kids);
};
var general$navbar$brand = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9820__i = 0, G__9820__a = new Array(arguments.length -  0);
while (G__9820__i < G__9820__a.length) {G__9820__a[G__9820__i] = arguments[G__9820__i + 0]; ++G__9820__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9820__a,0);
} 
return general$navbar$brand__delegate.call(this,args__8262__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__9821){
var args__8262__auto__ = cljs.core.seq(arglist__9821);
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
var vec__9830 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9830,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9830,(1),null);
var G__9833 = cljs.core.cst$kw$class;
var G__9834 = tailrecursion.javelin.formula(((function (G__9833,vec__9830,attr,kids){
return (function (G__9836,G__9837){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$collapse,true,cljs.core.cst$kw$navbar_DASH_collapse,true,cljs.core.cst$kw$in,(G__9836.cljs$core$IFn$_invoke$arity$2 ? G__9836.cljs$core$IFn$_invoke$arity$2(G__9837,"menu") : G__9836.call(null,G__9837,"menu"))], null);
});})(G__9833,vec__9830,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"nav navbar-nav") : tailrecursion.hoplon.ul.call(null,cljs.core.cst$kw$class,"nav navbar-nav")),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__9833,G__9834,G__9835) : tailrecursion.hoplon.div.call(null,G__9833,G__9834,G__9835));
};
var general$navbar$menu2 = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9838__i = 0, G__9838__a = new Array(arguments.length -  0);
while (G__9838__i < G__9838__a.length) {G__9838__a[G__9838__i] = arguments[G__9838__i + 0]; ++G__9838__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9838__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__8262__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__9839){
var args__8262__auto__ = cljs.core.seq(arglist__9839);
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
var vec__9853 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,(1),null);
return general.navbar.nav_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9856 = cljs.core.cst$kw$style;
var G__9857 = tailrecursion.javelin.formula(((function (G__9856,vec__9853,_,___$1){
return (function (G__9860,G__9861){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_((G__9860.cljs$core$IFn$_invoke$arity$2 ? G__9860.cljs$core$IFn$_invoke$arity$2("menu",G__9861) : G__9860.call(null,"menu",G__9861)))?"white":"black")),cljs.core.str(";")].join('');
});})(G__9856,vec__9853,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active);
var G__9858 = cljs.core.cst$kw$class;
var G__9859 = tailrecursion.javelin.formula(((function (G__9856,G__9857,G__9858,vec__9853,_,___$1){
return (function (G__9863,G__9864,G__9862){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_down,(function (){var G__9865 = (G__9863.cljs$core$IFn$_invoke$arity$2 ? G__9863.cljs$core$IFn$_invoke$arity$2("menu",G__9864) : G__9863.call(null,"menu",G__9864));
return (G__9862.cljs$core$IFn$_invoke$arity$1 ? G__9862.cljs$core$IFn$_invoke$arity$1(G__9865) : G__9862.call(null,G__9865));
})(),cljs.core.cst$kw$glyphicon_DASH_chevron_DASH_up,(G__9863.cljs$core$IFn$_invoke$arity$2 ? G__9863.cljs$core$IFn$_invoke$arity$2("menu",G__9864) : G__9863.call(null,"menu",G__9864))], null);
});})(G__9856,G__9857,G__9858,vec__9853,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not);
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__9856,G__9857,G__9858,G__9859) : tailrecursion.hoplon.span.call(null,G__9856,G__9857,G__9858,G__9859));
})(),cljs.core.cst$kw$name,"menu"], 0));
};
var general$navbar$nav_menu_button = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9866__i = 0, G__9866__a = new Array(arguments.length -  0);
while (G__9866__i < G__9866__a.length) {G__9866__a[G__9866__i] = arguments[G__9866__i + 0]; ++G__9866__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9866__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__8262__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__9867){
var args__8262__auto__ = cljs.core.seq(arglist__9867);
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
var vec__9883 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9883,(0),null);
var map__9884__$1 = ((((!((map__9884 == null)))?((((map__9884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9884):map__9884);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9884__$1,cljs.core.cst$kw$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9883,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__9889 = cljs.core.cst$kw$class;
var G__9890 = tailrecursion.javelin.formula(((function (G__9889,lc_name,vec__9883,map__9884,map__9884__$1,name,_){
return (function (G__9892,G__9893,G__9894){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9892.cljs$core$IFn$_invoke$arity$2 ? G__9892.cljs$core$IFn$_invoke$arity$2(G__9893,G__9894) : G__9892.call(null,G__9893,G__9894))], null);
});})(G__9889,lc_name,vec__9883,map__9884,map__9884__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name);
var G__9891 = (function (){var G__9895 = cljs.core.cst$kw$href;
var G__9896 = [cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join('');
var G__9897 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(G__9895,G__9896,G__9897) : tailrecursion.hoplon.a.call(null,G__9895,G__9896,G__9897));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9889,G__9890,G__9891) : tailrecursion.hoplon.li.call(null,G__9889,G__9890,G__9891));
};
var general$navbar$item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9898__i = 0, G__9898__a = new Array(arguments.length -  0);
while (G__9898__i < G__9898__a.length) {G__9898__a[G__9898__i] = arguments[G__9898__i + 0]; ++G__9898__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9898__a,0);
} 
return general$navbar$item__delegate.call(this,args__8262__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__9899){
var args__8262__auto__ = cljs.core.seq(arglist__9899);
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
var vec__9908 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,(1),null);
var G__9911 = cljs.core.cst$kw$class;
var G__9912 = tailrecursion.javelin.formula(((function (G__9911,vec__9908,_,___$1){
return (function (G__9914,G__9915){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,((G__9914.cljs$core$IFn$_invoke$arity$2 ? G__9914.cljs$core$IFn$_invoke$arity$2(G__9915,null) : G__9914.call(null,G__9915,null))) || ((G__9914.cljs$core$IFn$_invoke$arity$2 ? G__9914.cljs$core$IFn$_invoke$arity$2(G__9915,"index") : G__9914.call(null,G__9915,"index")))], null);
});})(G__9911,vec__9908,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9913 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/index.html","Home") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/index.html","Home"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9911,G__9912,G__9913) : tailrecursion.hoplon.li.call(null,G__9911,G__9912,G__9913));
};
var general$navbar$home_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9916__i = 0, G__9916__a = new Array(arguments.length -  0);
while (G__9916__i < G__9916__a.length) {G__9916__a[G__9916__i] = arguments[G__9916__i + 0]; ++G__9916__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9916__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__8262__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__9917){
var args__8262__auto__ = cljs.core.seq(arglist__9917);
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
var vec__9926 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9926,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9926,(1),null);
var G__9929 = cljs.core.cst$kw$class;
var G__9930 = tailrecursion.javelin.formula(((function (G__9929,vec__9926,_,___$1){
return (function (G__9932,G__9933){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,(G__9932.cljs$core$IFn$_invoke$arity$2 ? G__9932.cljs$core$IFn$_invoke$arity$2(G__9933,"book") : G__9932.call(null,G__9933,"book"))], null);
});})(G__9929,vec__9926,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location);
var G__9931 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"/book/sicp/index.html","SICP") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"/book/sicp/index.html","SICP"));
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__9929,G__9930,G__9931) : tailrecursion.hoplon.li.call(null,G__9929,G__9930,G__9931));
};
var general$navbar$sicp_item = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9934__i = 0, G__9934__a = new Array(arguments.length -  0);
while (G__9934__i < G__9934__a.length) {G__9934__a[G__9934__i] = arguments[G__9934__i + 0]; ++G__9934__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9934__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__8262__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__9935){
var args__8262__auto__ = cljs.core.seq(arglist__9935);
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
var vec__9937 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9937,(1),null);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$style,"height:50px") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$style,"height:50px"));
};
var general$navbar$fixed_offset = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9938__i = 0, G__9938__a = new Array(arguments.length -  0);
while (G__9938__i < G__9938__a.length) {G__9938__a[G__9938__i] = arguments[G__9938__i + 0]; ++G__9938__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9938__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__9939){
var args__8262__auto__ = cljs.core.seq(arglist__9939);
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
var vec__9941 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9941,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9941,(1),null);
return general.navbar.fixed_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$fixed_nav = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9942__i = 0, G__9942__a = new Array(arguments.length -  0);
while (G__9942__i < G__9942__a.length) {G__9942__a[G__9942__i] = arguments[G__9942__i + 0]; ++G__9942__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9942__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__8262__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__9943){
var args__8262__auto__ = cljs.core.seq(arglist__9943);
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
var vec__9947 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9947,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9947,(1),null);
var G__9948 = general.navbar.fixed_nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
var G__9949 = general.navbar.fixed_offset();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9948,G__9949) : tailrecursion.hoplon.div.call(null,G__9948,G__9949));
};
var general$navbar$fixed = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9950__i = 0, G__9950__a = new Array(arguments.length -  0);
while (G__9950__i < G__9950__a.length) {G__9950__a[G__9950__i] = arguments[G__9950__i + 0]; ++G__9950__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9950__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__8262__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__9951){
var args__8262__auto__ = cljs.core.seq(arglist__9951);
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
var vec__9953 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9953,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9953,(1),null);
return general.navbar.static_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.header2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.nav_menu_button(),kids,general.navbar.brand.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\u039Baron Niskin"], 0))], 0)),general.navbar.menu2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.navbar.home_item(),general.navbar.sicp_item(),general.navbar.item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"CV"], 0))], 0))], 0));
};
var general$navbar$static = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9954__i = 0, G__9954__a = new Array(arguments.length -  0);
while (G__9954__i < G__9954__a.length) {G__9954__a[G__9954__i] = arguments[G__9954__i + 0]; ++G__9954__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9954__a,0);
} 
return general$navbar$static__delegate.call(this,args__8262__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__9955){
var args__8262__auto__ = cljs.core.seq(arglist__9955);
return general$navbar$static__delegate(args__8262__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;
