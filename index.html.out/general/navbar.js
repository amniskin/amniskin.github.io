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
var vec__14518 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14519 = cljs.core.nth.call(null,vec__14518,(0),null);
var map__14519__$1 = ((((!((map__14519 == null)))?((((map__14519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14519):map__14519);
var name = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kids = cljs.core.nth.call(null,vec__14518,(1),null);
return tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__14518,map__14519,map__14519__$1,name,kids){
return (function (G__14521,G__14522,G__14523){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-toggle","navbar-toggle",1370701347),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true,new cljs.core.Keyword(null,"active","active",1895962068),G__14521.call(null,G__14522,G__14523)], null);
});})(vec__14518,map__14519,map__14519__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__14518,map__14519,map__14519__$1,name,kids){
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
});})(vec__14518,map__14519,map__14519__$1,name,kids))
,kids);
};
var general$navbar$nav_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14524__i = 0, G__14524__a = new Array(arguments.length -  0);
while (G__14524__i < G__14524__a.length) {G__14524__a[G__14524__i] = arguments[G__14524__i + 0]; ++G__14524__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14524__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__14525){
var args__6627__auto__ = cljs.core.seq(arglist__14525);
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
var vec__14527 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14527,(0),null);
var kids = cljs.core.nth.call(null,vec__14527,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top",general.bootstrap.container.call(null,kids));
};
var general$navbar$fixed_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14528__i = 0, G__14528__a = new Array(arguments.length -  0);
while (G__14528__i < G__14528__a.length) {G__14528__a[G__14528__i] = arguments[G__14528__i + 0]; ++G__14528__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14528__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__14529){
var args__6627__auto__ = cljs.core.seq(arglist__14529);
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
var vec__14531 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14531,(0),null);
var kids = cljs.core.nth.call(null,vec__14531,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-static-top",new cljs.core.Keyword(null,"style","style",-496642736),"margin-bottom:0;",general.bootstrap.container.call(null,kids));
};
var general$navbar$static_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14532__i = 0, G__14532__a = new Array(arguments.length -  0);
while (G__14532__i < G__14532__a.length) {G__14532__a[G__14532__i] = arguments[G__14532__i + 0]; ++G__14532__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14532__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__6627__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__14533){
var args__6627__auto__ = cljs.core.seq(arglist__14533);
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
var vec__14535 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14535,(0),null);
var kids = cljs.core.nth.call(null,vec__14535,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-header"),kids);
};
var general$navbar$header2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14536__i = 0, G__14536__a = new Array(arguments.length -  0);
while (G__14536__i < G__14536__a.length) {G__14536__a[G__14536__i] = arguments[G__14536__i + 0]; ++G__14536__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14536__a,0);
} 
return general$navbar$header2__delegate.call(this,args__6627__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__14537){
var args__6627__auto__ = cljs.core.seq(arglist__14537);
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
var vec__14539 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14539,(0),null);
var kids = cljs.core.nth.call(null,vec__14539,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand",new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__14539,_,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null);
});})(vec__14539,_,kids))
,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html"),kids);
};
var general$navbar$brand = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14540__i = 0, G__14540__a = new Array(arguments.length -  0);
while (G__14540__i < G__14540__a.length) {G__14540__a[G__14540__i] = arguments[G__14540__i + 0]; ++G__14540__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14540__a,0);
} 
return general$navbar$brand__delegate.call(this,args__6627__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__14541){
var args__6627__auto__ = cljs.core.seq(arglist__14541);
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
var vec__14545 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14545,(0),null);
var kids = cljs.core.nth.call(null,vec__14545,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__14545,attr,kids){
return (function (G__14546,G__14547){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__14546.call(null,G__14547,"menu")], null);
});})(vec__14545,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active),cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"),attr,kids));
};
var general$navbar$menu2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14548__i = 0, G__14548__a = new Array(arguments.length -  0);
while (G__14548__i < G__14548__a.length) {G__14548__a[G__14548__i] = arguments[G__14548__i + 0]; ++G__14548__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14548__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__6627__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__14549){
var args__6627__auto__ = cljs.core.seq(arglist__14549);
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
var vec__14556 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14556,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14556,(1),null);
return general.navbar.nav_button.call(null,tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"style","style",-496642736),tailrecursion.javelin.formula.call(null,((function (vec__14556,_,___$1){
return (function (G__14557,G__14558){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_(G__14557.call(null,"menu",G__14558))?"white":"black")),cljs.core.str(";")].join('');
});})(vec__14556,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active),new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__14556,_,___$1){
return (function (G__14560,G__14561,G__14559){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"glyphicon-chevron-down","glyphicon-chevron-down",-1437611070),G__14559.call(null,G__14560.call(null,"menu",G__14561)),new cljs.core.Keyword(null,"glyphicon-chevron-up","glyphicon-chevron-up",-1645226574),G__14560.call(null,"menu",G__14561)], null);
});})(vec__14556,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not)),new cljs.core.Keyword(null,"name","name",1843675177),"menu");
};
var general$navbar$nav_menu_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14562__i = 0, G__14562__a = new Array(arguments.length -  0);
while (G__14562__i < G__14562__a.length) {G__14562__a[G__14562__i] = arguments[G__14562__i + 0]; ++G__14562__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14562__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__14563){
var args__6627__auto__ = cljs.core.seq(arglist__14563);
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
var vec__14570 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14571 = cljs.core.nth.call(null,vec__14570,(0),null);
var map__14571__$1 = ((((!((map__14571 == null)))?((((map__14571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14571):map__14571);
var name = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var _ = cljs.core.nth.call(null,vec__14570,(1),null);
var lc_name = clojure.string.lower_case.call(null,name);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (lc_name,vec__14570,map__14571,map__14571__$1,name,_){
return (function (G__14573,G__14574,G__14575){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__14573.call(null,G__14574,G__14575)], null);
});})(lc_name,vec__14570,map__14571,map__14571__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join(''),name));
};
var general$navbar$item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14576__i = 0, G__14576__a = new Array(arguments.length -  0);
while (G__14576__i < G__14576__a.length) {G__14576__a[G__14576__i] = arguments[G__14576__i + 0]; ++G__14576__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14576__a,0);
} 
return general$navbar$item__delegate.call(this,args__6627__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__14577){
var args__6627__auto__ = cljs.core.seq(arglist__14577);
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
var vec__14581 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14581,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14581,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__14581,_,___$1){
return (function (G__14582,G__14583){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(G__14582.call(null,G__14583,null)) || (G__14582.call(null,G__14583,"index"))], null);
});})(vec__14581,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html","Home"));
};
var general$navbar$home_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14584__i = 0, G__14584__a = new Array(arguments.length -  0);
while (G__14584__i < G__14584__a.length) {G__14584__a[G__14584__i] = arguments[G__14584__i + 0]; ++G__14584__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14584__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__6627__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__14585){
var args__6627__auto__ = cljs.core.seq(arglist__14585);
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
var vec__14589 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14589,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14589,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__14589,_,___$1){
return (function (G__14590,G__14591){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__14590.call(null,G__14591,"book")], null);
});})(vec__14589,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/book/sicp/index.html","SICP"));
};
var general$navbar$sicp_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14592__i = 0, G__14592__a = new Array(arguments.length -  0);
while (G__14592__i < G__14592__a.length) {G__14592__a[G__14592__i] = arguments[G__14592__i + 0]; ++G__14592__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14592__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__6627__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__14593){
var args__6627__auto__ = cljs.core.seq(arglist__14593);
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
var vec__14595 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14595,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14595,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"height:50px");
};
var general$navbar$fixed_offset = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14596__i = 0, G__14596__a = new Array(arguments.length -  0);
while (G__14596__i < G__14596__a.length) {G__14596__a[G__14596__i] = arguments[G__14596__i + 0]; ++G__14596__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14596__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__14597){
var args__6627__auto__ = cljs.core.seq(arglist__14597);
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
var vec__14599 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14599,(0),null);
var kids = cljs.core.nth.call(null,vec__14599,(1),null);
return general.navbar.fixed_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$fixed_nav = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14600__i = 0, G__14600__a = new Array(arguments.length -  0);
while (G__14600__i < G__14600__a.length) {G__14600__a[G__14600__i] = arguments[G__14600__i + 0]; ++G__14600__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14600__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__14601){
var args__6627__auto__ = cljs.core.seq(arglist__14601);
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
var vec__14603 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14603,(0),null);
var kids = cljs.core.nth.call(null,vec__14603,(1),null);
return tailrecursion.hoplon.div.call(null,general.navbar.fixed_nav.call(null,attr,kids),general.navbar.fixed_offset.call(null));
};
var general$navbar$fixed = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14604__i = 0, G__14604__a = new Array(arguments.length -  0);
while (G__14604__i < G__14604__a.length) {G__14604__a[G__14604__i] = arguments[G__14604__i + 0]; ++G__14604__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14604__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__6627__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__14605){
var args__6627__auto__ = cljs.core.seq(arglist__14605);
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
var vec__14607 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14607,(0),null);
var kids = cljs.core.nth.call(null,vec__14607,(1),null);
return general.navbar.static_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$static = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14608__i = 0, G__14608__a = new Array(arguments.length -  0);
while (G__14608__i < G__14608__a.length) {G__14608__a[G__14608__i] = arguments[G__14608__i + 0]; ++G__14608__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14608__a,0);
} 
return general$navbar$static__delegate.call(this,args__6627__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__14609){
var args__6627__auto__ = cljs.core.seq(arglist__14609);
return general$navbar$static__delegate(args__6627__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;

//# sourceMappingURL=navbar.js.map