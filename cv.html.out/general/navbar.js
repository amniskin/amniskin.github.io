// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.navbar');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.navbar.nav_active = tailrecursion.javelin.cell.call(null,null);
general.navbar.location = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.second.call(null,clojure.string.split.call(null,location.pathname,/\//)),/\./));
general.navbar.height = tailrecursion.javelin.cell.call(null,(50));
/**
 * @param {...*} var_args
 */
general.navbar.nav_button = (function() { 
var general$navbar$nav_button__delegate = function (args__6627__auto__){
var vec__12672 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12673 = cljs.core.nth.call(null,vec__12672,(0),null);
var map__12673__$1 = ((((!((map__12673 == null)))?((((map__12673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12673):map__12673);
var name = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kids = cljs.core.nth.call(null,vec__12672,(1),null);
return tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__12672,map__12673,map__12673__$1,name,kids){
return (function (G__12675,G__12676,G__12677){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-toggle","navbar-toggle",1370701347),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true,new cljs.core.Keyword(null,"active","active",1895962068),G__12675.call(null,G__12676,G__12677)], null);
});})(vec__12672,map__12673,map__12673__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__12672,map__12673,map__12673__$1,name,kids){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,general.navbar.nav_active))){
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,name);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,general.navbar.nav_active),name)){
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null);
} else {
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,name);

}
}
});})(vec__12672,map__12673,map__12673__$1,name,kids))
,kids);
};
var general$navbar$nav_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12678__i = 0, G__12678__a = new Array(arguments.length -  0);
while (G__12678__i < G__12678__a.length) {G__12678__a[G__12678__i] = arguments[G__12678__i + 0]; ++G__12678__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12678__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__12679){
var args__6627__auto__ = cljs.core.seq(arglist__12679);
return general$navbar$nav_button__delegate(args__6627__auto__);
});
general$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_button__delegate;
return general$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_bar = (function() { 
var general$navbar$fixed_bar__delegate = function (args__6627__auto__){
var vec__12681 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12681,(0),null);
var kids = cljs.core.nth.call(null,vec__12681,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top",general.bootstrap.container.call(null,kids));
};
var general$navbar$fixed_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12682__i = 0, G__12682__a = new Array(arguments.length -  0);
while (G__12682__i < G__12682__a.length) {G__12682__a[G__12682__i] = arguments[G__12682__i + 0]; ++G__12682__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12682__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__12683){
var args__6627__auto__ = cljs.core.seq(arglist__12683);
return general$navbar$fixed_bar__delegate(args__6627__auto__);
});
general$navbar$fixed_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_bar__delegate;
return general$navbar$fixed_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static_bar = (function() { 
var general$navbar$static_bar__delegate = function (args__6627__auto__){
var vec__12685 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12685,(0),null);
var kids = cljs.core.nth.call(null,vec__12685,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-static-top",new cljs.core.Keyword(null,"style","style",-496642736),"margin-bottom:0;",general.bootstrap.container.call(null,kids));
};
var general$navbar$static_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12686__i = 0, G__12686__a = new Array(arguments.length -  0);
while (G__12686__i < G__12686__a.length) {G__12686__a[G__12686__i] = arguments[G__12686__i + 0]; ++G__12686__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12686__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__6627__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__12687){
var args__6627__auto__ = cljs.core.seq(arglist__12687);
return general$navbar$static_bar__delegate(args__6627__auto__);
});
general$navbar$static_bar.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static_bar__delegate;
return general$navbar$static_bar;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.header2 = (function() { 
var general$navbar$header2__delegate = function (args__6627__auto__){
var vec__12689 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12689,(0),null);
var kids = cljs.core.nth.call(null,vec__12689,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-header"),kids);
};
var general$navbar$header2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12690__i = 0, G__12690__a = new Array(arguments.length -  0);
while (G__12690__i < G__12690__a.length) {G__12690__a[G__12690__i] = arguments[G__12690__i + 0]; ++G__12690__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12690__a,0);
} 
return general$navbar$header2__delegate.call(this,args__6627__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__12691){
var args__6627__auto__ = cljs.core.seq(arglist__12691);
return general$navbar$header2__delegate(args__6627__auto__);
});
general$navbar$header2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$header2__delegate;
return general$navbar$header2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.brand = (function() { 
var general$navbar$brand__delegate = function (args__6627__auto__){
var vec__12693 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12693,(0),null);
var kids = cljs.core.nth.call(null,vec__12693,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand",new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__12693,_,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null);
});})(vec__12693,_,kids))
,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html"),kids);
};
var general$navbar$brand = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12694__i = 0, G__12694__a = new Array(arguments.length -  0);
while (G__12694__i < G__12694__a.length) {G__12694__a[G__12694__i] = arguments[G__12694__i + 0]; ++G__12694__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12694__a,0);
} 
return general$navbar$brand__delegate.call(this,args__6627__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__12695){
var args__6627__auto__ = cljs.core.seq(arglist__12695);
return general$navbar$brand__delegate(args__6627__auto__);
});
general$navbar$brand.cljs$core$IFn$_invoke$arity$variadic = general$navbar$brand__delegate;
return general$navbar$brand;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.menu2 = (function() { 
var general$navbar$menu2__delegate = function (args__6627__auto__){
var vec__12699 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12699,(0),null);
var kids = cljs.core.nth.call(null,vec__12699,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__12699,attr,kids){
return (function (G__12700,G__12701){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__12700.call(null,G__12701,"menu")], null);
});})(vec__12699,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active),cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"),attr,kids));
};
var general$navbar$menu2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12702__i = 0, G__12702__a = new Array(arguments.length -  0);
while (G__12702__i < G__12702__a.length) {G__12702__a[G__12702__i] = arguments[G__12702__i + 0]; ++G__12702__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12702__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__6627__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__12703){
var args__6627__auto__ = cljs.core.seq(arglist__12703);
return general$navbar$menu2__delegate(args__6627__auto__);
});
general$navbar$menu2.cljs$core$IFn$_invoke$arity$variadic = general$navbar$menu2__delegate;
return general$navbar$menu2;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.nav_menu_button = (function() { 
var general$navbar$nav_menu_button__delegate = function (args__6627__auto__){
var vec__12710 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12710,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12710,(1),null);
return general.navbar.nav_button.call(null,tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"style","style",-496642736),tailrecursion.javelin.formula.call(null,((function (vec__12710,_,___$1){
return (function (G__12711,G__12712){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_(G__12711.call(null,"menu",G__12712))?"white":"black")),cljs.core.str(";")].join('');
});})(vec__12710,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active),new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__12710,_,___$1){
return (function (G__12714,G__12715,G__12713){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"glyphicon-chevron-down","glyphicon-chevron-down",-1437611070),G__12713.call(null,G__12714.call(null,"menu",G__12715)),new cljs.core.Keyword(null,"glyphicon-chevron-up","glyphicon-chevron-up",-1645226574),G__12714.call(null,"menu",G__12715)], null);
});})(vec__12710,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not)),new cljs.core.Keyword(null,"name","name",1843675177),"menu");
};
var general$navbar$nav_menu_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12716__i = 0, G__12716__a = new Array(arguments.length -  0);
while (G__12716__i < G__12716__a.length) {G__12716__a[G__12716__i] = arguments[G__12716__i + 0]; ++G__12716__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12716__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__12717){
var args__6627__auto__ = cljs.core.seq(arglist__12717);
return general$navbar$nav_menu_button__delegate(args__6627__auto__);
});
general$navbar$nav_menu_button.cljs$core$IFn$_invoke$arity$variadic = general$navbar$nav_menu_button__delegate;
return general$navbar$nav_menu_button;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.item = (function() { 
var general$navbar$item__delegate = function (args__6627__auto__){
var vec__12724 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__12725 = cljs.core.nth.call(null,vec__12724,(0),null);
var map__12725__$1 = ((((!((map__12725 == null)))?((((map__12725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12725):map__12725);
var name = cljs.core.get.call(null,map__12725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var _ = cljs.core.nth.call(null,vec__12724,(1),null);
var lc_name = clojure.string.lower_case.call(null,name);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (lc_name,vec__12724,map__12725,map__12725__$1,name,_){
return (function (G__12727,G__12728,G__12729){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__12727.call(null,G__12728,G__12729)], null);
});})(lc_name,vec__12724,map__12725,map__12725__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join(''),name));
};
var general$navbar$item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12730__i = 0, G__12730__a = new Array(arguments.length -  0);
while (G__12730__i < G__12730__a.length) {G__12730__a[G__12730__i] = arguments[G__12730__i + 0]; ++G__12730__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12730__a,0);
} 
return general$navbar$item__delegate.call(this,args__6627__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__12731){
var args__6627__auto__ = cljs.core.seq(arglist__12731);
return general$navbar$item__delegate(args__6627__auto__);
});
general$navbar$item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$item__delegate;
return general$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.home_item = (function() { 
var general$navbar$home_item__delegate = function (args__6627__auto__){
var vec__12735 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12735,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12735,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__12735,_,___$1){
return (function (G__12736,G__12737){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(G__12736.call(null,G__12737,null)) || (G__12736.call(null,G__12737,"index"))], null);
});})(vec__12735,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html","Home"));
};
var general$navbar$home_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12738__i = 0, G__12738__a = new Array(arguments.length -  0);
while (G__12738__i < G__12738__a.length) {G__12738__a[G__12738__i] = arguments[G__12738__i + 0]; ++G__12738__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12738__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__6627__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__12739){
var args__6627__auto__ = cljs.core.seq(arglist__12739);
return general$navbar$home_item__delegate(args__6627__auto__);
});
general$navbar$home_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$home_item__delegate;
return general$navbar$home_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.sicp_item = (function() { 
var general$navbar$sicp_item__delegate = function (args__6627__auto__){
var vec__12743 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12743,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12743,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__12743,_,___$1){
return (function (G__12744,G__12745){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__12744.call(null,G__12745,"book")], null);
});})(vec__12743,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/book/sicp/index.html","SICP"));
};
var general$navbar$sicp_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12746__i = 0, G__12746__a = new Array(arguments.length -  0);
while (G__12746__i < G__12746__a.length) {G__12746__a[G__12746__i] = arguments[G__12746__i + 0]; ++G__12746__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12746__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__6627__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__12747){
var args__6627__auto__ = cljs.core.seq(arglist__12747);
return general$navbar$sicp_item__delegate(args__6627__auto__);
});
general$navbar$sicp_item.cljs$core$IFn$_invoke$arity$variadic = general$navbar$sicp_item__delegate;
return general$navbar$sicp_item;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_offset = (function() { 
var general$navbar$fixed_offset__delegate = function (args__6627__auto__){
var vec__12749 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12749,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12749,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"height:50px");
};
var general$navbar$fixed_offset = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12750__i = 0, G__12750__a = new Array(arguments.length -  0);
while (G__12750__i < G__12750__a.length) {G__12750__a[G__12750__i] = arguments[G__12750__i + 0]; ++G__12750__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12750__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__12751){
var args__6627__auto__ = cljs.core.seq(arglist__12751);
return general$navbar$fixed_offset__delegate(args__6627__auto__);
});
general$navbar$fixed_offset.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_offset__delegate;
return general$navbar$fixed_offset;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed_nav = (function() { 
var general$navbar$fixed_nav__delegate = function (args__6627__auto__){
var vec__12753 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__12753,(0),null);
var kids = cljs.core.nth.call(null,vec__12753,(1),null);
return general.navbar.fixed_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$fixed_nav = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12754__i = 0, G__12754__a = new Array(arguments.length -  0);
while (G__12754__i < G__12754__a.length) {G__12754__a[G__12754__i] = arguments[G__12754__i + 0]; ++G__12754__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12754__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__12755){
var args__6627__auto__ = cljs.core.seq(arglist__12755);
return general$navbar$fixed_nav__delegate(args__6627__auto__);
});
general$navbar$fixed_nav.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed_nav__delegate;
return general$navbar$fixed_nav;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.fixed = (function() { 
var general$navbar$fixed__delegate = function (args__6627__auto__){
var vec__12757 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12757,(0),null);
var kids = cljs.core.nth.call(null,vec__12757,(1),null);
return tailrecursion.hoplon.div.call(null,general.navbar.fixed_nav.call(null,attr,kids),general.navbar.fixed_offset.call(null));
};
var general$navbar$fixed = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12758__i = 0, G__12758__a = new Array(arguments.length -  0);
while (G__12758__i < G__12758__a.length) {G__12758__a[G__12758__i] = arguments[G__12758__i + 0]; ++G__12758__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12758__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__6627__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__12759){
var args__6627__auto__ = cljs.core.seq(arglist__12759);
return general$navbar$fixed__delegate(args__6627__auto__);
});
general$navbar$fixed.cljs$core$IFn$_invoke$arity$variadic = general$navbar$fixed__delegate;
return general$navbar$fixed;
})()
;
/**
 * @param {...*} var_args
 */
general.navbar.static$ = (function() { 
var general$navbar$static__delegate = function (args__6627__auto__){
var vec__12761 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__12761,(0),null);
var kids = cljs.core.nth.call(null,vec__12761,(1),null);
return general.navbar.static_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$static = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__12762__i = 0, G__12762__a = new Array(arguments.length -  0);
while (G__12762__i < G__12762__a.length) {G__12762__a[G__12762__i] = arguments[G__12762__i + 0]; ++G__12762__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__12762__a,0);
} 
return general$navbar$static__delegate.call(this,args__6627__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__12763){
var args__6627__auto__ = cljs.core.seq(arglist__12763);
return general$navbar$static__delegate(args__6627__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;

//# sourceMappingURL=navbar.js.map