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
var vec__85182 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__85183 = cljs.core.nth.call(null,vec__85182,(0),null);
var map__85183__$1 = ((((!((map__85183 == null)))?((((map__85183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85183):map__85183);
var name = cljs.core.get.call(null,map__85183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kids = cljs.core.nth.call(null,vec__85182,(1),null);
return tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__85182,map__85183,map__85183__$1,name,kids){
return (function (G__85185,G__85186,G__85187){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-toggle","navbar-toggle",1370701347),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true,new cljs.core.Keyword(null,"active","active",1895962068),G__85185.call(null,G__85186,G__85187)], null);
});})(vec__85182,map__85183,map__85183__$1,name,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active,name),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__85182,map__85183,map__85183__$1,name,kids){
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
});})(vec__85182,map__85183,map__85183__$1,name,kids))
,kids);
};
var general$navbar$nav_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85188__i = 0, G__85188__a = new Array(arguments.length -  0);
while (G__85188__i < G__85188__a.length) {G__85188__a[G__85188__i] = arguments[G__85188__i + 0]; ++G__85188__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85188__a,0);
} 
return general$navbar$nav_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_button.cljs$lang$applyTo = (function (arglist__85189){
var args__6627__auto__ = cljs.core.seq(arglist__85189);
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
var vec__85191 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85191,(0),null);
var kids = cljs.core.nth.call(null,vec__85191,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top",general.bootstrap.container.call(null,kids));
};
var general$navbar$fixed_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85192__i = 0, G__85192__a = new Array(arguments.length -  0);
while (G__85192__i < G__85192__a.length) {G__85192__a[G__85192__i] = arguments[G__85192__i + 0]; ++G__85192__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85192__a,0);
} 
return general$navbar$fixed_bar__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_bar.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_bar.cljs$lang$applyTo = (function (arglist__85193){
var args__6627__auto__ = cljs.core.seq(arglist__85193);
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
var vec__85195 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85195,(0),null);
var kids = cljs.core.nth.call(null,vec__85195,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-static-top",new cljs.core.Keyword(null,"style","style",-496642736),"margin-bottom:0;",general.bootstrap.container.call(null,kids));
};
var general$navbar$static_bar = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85196__i = 0, G__85196__a = new Array(arguments.length -  0);
while (G__85196__i < G__85196__a.length) {G__85196__a[G__85196__i] = arguments[G__85196__i + 0]; ++G__85196__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85196__a,0);
} 
return general$navbar$static_bar__delegate.call(this,args__6627__auto__);};
general$navbar$static_bar.cljs$lang$maxFixedArity = 0;
general$navbar$static_bar.cljs$lang$applyTo = (function (arglist__85197){
var args__6627__auto__ = cljs.core.seq(arglist__85197);
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
var vec__85199 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85199,(0),null);
var kids = cljs.core.nth.call(null,vec__85199,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-header"),kids);
};
var general$navbar$header2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85200__i = 0, G__85200__a = new Array(arguments.length -  0);
while (G__85200__i < G__85200__a.length) {G__85200__a[G__85200__i] = arguments[G__85200__i + 0]; ++G__85200__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85200__a,0);
} 
return general$navbar$header2__delegate.call(this,args__6627__auto__);};
general$navbar$header2.cljs$lang$maxFixedArity = 0;
general$navbar$header2.cljs$lang$applyTo = (function (arglist__85201){
var args__6627__auto__ = cljs.core.seq(arglist__85201);
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
var vec__85203 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85203,(0),null);
var kids = cljs.core.nth.call(null,vec__85203,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand",new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__85203,_,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,general.navbar.nav_active,null);
});})(vec__85203,_,kids))
,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html"),kids);
};
var general$navbar$brand = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85204__i = 0, G__85204__a = new Array(arguments.length -  0);
while (G__85204__i < G__85204__a.length) {G__85204__a[G__85204__i] = arguments[G__85204__i + 0]; ++G__85204__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85204__a,0);
} 
return general$navbar$brand__delegate.call(this,args__6627__auto__);};
general$navbar$brand.cljs$lang$maxFixedArity = 0;
general$navbar$brand.cljs$lang$applyTo = (function (arglist__85205){
var args__6627__auto__ = cljs.core.seq(arglist__85205);
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
var vec__85209 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__85209,(0),null);
var kids = cljs.core.nth.call(null,vec__85209,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__85209,attr,kids){
return (function (G__85210,G__85211){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__85210.call(null,G__85211,"menu")], null);
});})(vec__85209,attr,kids))
).call(null,cljs.core._EQ_,general.navbar.nav_active),cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"),attr,kids));
};
var general$navbar$menu2 = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85212__i = 0, G__85212__a = new Array(arguments.length -  0);
while (G__85212__i < G__85212__a.length) {G__85212__a[G__85212__i] = arguments[G__85212__i + 0]; ++G__85212__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85212__a,0);
} 
return general$navbar$menu2__delegate.call(this,args__6627__auto__);};
general$navbar$menu2.cljs$lang$maxFixedArity = 0;
general$navbar$menu2.cljs$lang$applyTo = (function (arglist__85213){
var args__6627__auto__ = cljs.core.seq(arglist__85213);
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
var vec__85220 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85220,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__85220,(1),null);
return general.navbar.nav_button.call(null,tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"style","style",-496642736),tailrecursion.javelin.formula.call(null,((function (vec__85220,_,___$1){
return (function (G__85221,G__85222){
return [cljs.core.str("color:"),cljs.core.str((cljs.core.truth_(G__85221.call(null,"menu",G__85222))?"white":"black")),cljs.core.str(";")].join('');
});})(vec__85220,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active),new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__85220,_,___$1){
return (function (G__85224,G__85225,G__85223){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"glyphicon-chevron-down","glyphicon-chevron-down",-1437611070),G__85223.call(null,G__85224.call(null,"menu",G__85225)),new cljs.core.Keyword(null,"glyphicon-chevron-up","glyphicon-chevron-up",-1645226574),G__85224.call(null,"menu",G__85225)], null);
});})(vec__85220,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.nav_active,cljs.core.not)),new cljs.core.Keyword(null,"name","name",1843675177),"menu");
};
var general$navbar$nav_menu_button = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85226__i = 0, G__85226__a = new Array(arguments.length -  0);
while (G__85226__i < G__85226__a.length) {G__85226__a[G__85226__i] = arguments[G__85226__i + 0]; ++G__85226__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85226__a,0);
} 
return general$navbar$nav_menu_button__delegate.call(this,args__6627__auto__);};
general$navbar$nav_menu_button.cljs$lang$maxFixedArity = 0;
general$navbar$nav_menu_button.cljs$lang$applyTo = (function (arglist__85227){
var args__6627__auto__ = cljs.core.seq(arglist__85227);
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
var vec__85234 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__85235 = cljs.core.nth.call(null,vec__85234,(0),null);
var map__85235__$1 = ((((!((map__85235 == null)))?((((map__85235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85235):map__85235);
var name = cljs.core.get.call(null,map__85235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var _ = cljs.core.nth.call(null,vec__85234,(1),null);
var lc_name = clojure.string.lower_case.call(null,name);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (lc_name,vec__85234,map__85235,map__85235__$1,name,_){
return (function (G__85237,G__85238,G__85239){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__85237.call(null,G__85238,G__85239)], null);
});})(lc_name,vec__85234,map__85235,map__85235__$1,name,_))
).call(null,cljs.core._EQ_,general.navbar.location,lc_name),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("/"),cljs.core.str(lc_name),cljs.core.str(".html")].join(''),name));
};
var general$navbar$item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85240__i = 0, G__85240__a = new Array(arguments.length -  0);
while (G__85240__i < G__85240__a.length) {G__85240__a[G__85240__i] = arguments[G__85240__i + 0]; ++G__85240__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85240__a,0);
} 
return general$navbar$item__delegate.call(this,args__6627__auto__);};
general$navbar$item.cljs$lang$maxFixedArity = 0;
general$navbar$item.cljs$lang$applyTo = (function (arglist__85241){
var args__6627__auto__ = cljs.core.seq(arglist__85241);
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
var vec__85245 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85245,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__85245,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__85245,_,___$1){
return (function (G__85246,G__85247){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(G__85246.call(null,G__85247,null)) || (G__85246.call(null,G__85247,"index"))], null);
});})(vec__85245,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/index.html","Home"));
};
var general$navbar$home_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85248__i = 0, G__85248__a = new Array(arguments.length -  0);
while (G__85248__i < G__85248__a.length) {G__85248__a[G__85248__i] = arguments[G__85248__i + 0]; ++G__85248__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85248__a,0);
} 
return general$navbar$home_item__delegate.call(this,args__6627__auto__);};
general$navbar$home_item.cljs$lang$maxFixedArity = 0;
general$navbar$home_item.cljs$lang$applyTo = (function (arglist__85249){
var args__6627__auto__ = cljs.core.seq(arglist__85249);
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
var vec__85253 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85253,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__85253,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__85253,_,___$1){
return (function (G__85254,G__85255){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__85254.call(null,G__85255,"book")], null);
});})(vec__85253,_,___$1))
).call(null,cljs.core._EQ_,general.navbar.location),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"/book/sicp/index.html","SICP"));
};
var general$navbar$sicp_item = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85256__i = 0, G__85256__a = new Array(arguments.length -  0);
while (G__85256__i < G__85256__a.length) {G__85256__a[G__85256__i] = arguments[G__85256__i + 0]; ++G__85256__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85256__a,0);
} 
return general$navbar$sicp_item__delegate.call(this,args__6627__auto__);};
general$navbar$sicp_item.cljs$lang$maxFixedArity = 0;
general$navbar$sicp_item.cljs$lang$applyTo = (function (arglist__85257){
var args__6627__auto__ = cljs.core.seq(arglist__85257);
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
var vec__85259 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85259,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__85259,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"height:50px");
};
var general$navbar$fixed_offset = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85260__i = 0, G__85260__a = new Array(arguments.length -  0);
while (G__85260__i < G__85260__a.length) {G__85260__a[G__85260__i] = arguments[G__85260__i + 0]; ++G__85260__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85260__a,0);
} 
return general$navbar$fixed_offset__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_offset.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_offset.cljs$lang$applyTo = (function (arglist__85261){
var args__6627__auto__ = cljs.core.seq(arglist__85261);
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
var vec__85263 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__85263,(0),null);
var kids = cljs.core.nth.call(null,vec__85263,(1),null);
return general.navbar.fixed_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$fixed_nav = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85264__i = 0, G__85264__a = new Array(arguments.length -  0);
while (G__85264__i < G__85264__a.length) {G__85264__a[G__85264__i] = arguments[G__85264__i + 0]; ++G__85264__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85264__a,0);
} 
return general$navbar$fixed_nav__delegate.call(this,args__6627__auto__);};
general$navbar$fixed_nav.cljs$lang$maxFixedArity = 0;
general$navbar$fixed_nav.cljs$lang$applyTo = (function (arglist__85265){
var args__6627__auto__ = cljs.core.seq(arglist__85265);
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
var vec__85267 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__85267,(0),null);
var kids = cljs.core.nth.call(null,vec__85267,(1),null);
return tailrecursion.hoplon.div.call(null,general.navbar.fixed_nav.call(null,attr,kids),general.navbar.fixed_offset.call(null));
};
var general$navbar$fixed = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85268__i = 0, G__85268__a = new Array(arguments.length -  0);
while (G__85268__i < G__85268__a.length) {G__85268__a[G__85268__i] = arguments[G__85268__i + 0]; ++G__85268__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85268__a,0);
} 
return general$navbar$fixed__delegate.call(this,args__6627__auto__);};
general$navbar$fixed.cljs$lang$maxFixedArity = 0;
general$navbar$fixed.cljs$lang$applyTo = (function (arglist__85269){
var args__6627__auto__ = cljs.core.seq(arglist__85269);
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
var vec__85271 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__85271,(0),null);
var kids = cljs.core.nth.call(null,vec__85271,(1),null);
return general.navbar.static_bar.call(null,general.navbar.header2.call(null,general.navbar.nav_menu_button.call(null),kids,general.navbar.brand.call(null,"\u039Baron Niskin")),general.navbar.menu2.call(null,general.navbar.home_item.call(null),general.navbar.sicp_item.call(null),general.navbar.item.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"CV")));
};
var general$navbar$static = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__85272__i = 0, G__85272__a = new Array(arguments.length -  0);
while (G__85272__i < G__85272__a.length) {G__85272__a[G__85272__i] = arguments[G__85272__i + 0]; ++G__85272__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__85272__a,0);
} 
return general$navbar$static__delegate.call(this,args__6627__auto__);};
general$navbar$static.cljs$lang$maxFixedArity = 0;
general$navbar$static.cljs$lang$applyTo = (function (arglist__85273){
var args__6627__auto__ = cljs.core.seq(arglist__85273);
return general$navbar$static__delegate(args__6627__auto__);
});
general$navbar$static.cljs$core$IFn$_invoke$arity$variadic = general$navbar$static__delegate;
return general$navbar$static;
})()
;

//# sourceMappingURL=navbar.js.map