// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ui.navbar');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('ui.style');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.navbar.home = ui.info.home;
/**
 * @param {...*} var_args
 */
ui.navbar.nav_button = (function() { 
var ui$navbar$nav_button__delegate = function (args__5784__auto__){
var vec__13123 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13124 = cljs.core.nth.call(null,vec__13123,(0),null);
var map__13124__$1 = ((cljs.core.seq_QMARK_.call(null,map__13124))?cljs.core.apply.call(null,cljs.core.hash_map,map__13124):map__13124);
var name = cljs.core.get.call(null,map__13124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kids = cljs.core.nth.call(null,vec__13123,(1),null);
return tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__13123,map__13124,map__13124__$1,name,kids){
return (function (G__13125,G__13127,G__13126){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar-toggle","navbar-toggle",1370701347),true,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true,new cljs.core.Keyword(null,"active","active",1895962068),G__13125.call(null,G__13126,G__13127)], null);
});})(vec__13123,map__13124,map__13124__$1,name,kids))
).call(null,cljs.core._EQ_,name,ui.info.nav_active),new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__13123,map__13124,map__13124__$1,name,kids){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,ui.info.nav_active))){
return cljs.core.reset_BANG_.call(null,ui.info.nav_active,name);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ui.info.nav_active),name)){
return cljs.core.reset_BANG_.call(null,ui.info.nav_active,null);
} else {
return cljs.core.reset_BANG_.call(null,ui.info.nav_active,name);

}
}
});})(vec__13123,map__13124,map__13124__$1,name,kids))
,kids);
};
var ui$navbar$nav_button = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13128__i = 0, G__13128__a = new Array(arguments.length -  0);
while (G__13128__i < G__13128__a.length) {G__13128__a[G__13128__i] = arguments[G__13128__i + 0]; ++G__13128__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13128__a,0);
} 
return ui$navbar$nav_button__delegate.call(this,args__5784__auto__);};
ui$navbar$nav_button.cljs$lang$maxFixedArity = 0;
ui$navbar$nav_button.cljs$lang$applyTo = (function (arglist__13129){
var args__5784__auto__ = cljs.core.seq(arglist__13129);
return ui$navbar$nav_button__delegate(args__5784__auto__);
});
ui$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$nav_button__delegate;
return ui$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.bar = (function() { 
var ui$navbar$bar__delegate = function (args__5784__auto__){
var vec__13131 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__13131,(0),null);
var kids = cljs.core.nth.call(null,vec__13131,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top",ui.style.container.call(null,kids));
};
var ui$navbar$bar = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13132__i = 0, G__13132__a = new Array(arguments.length -  0);
while (G__13132__i < G__13132__a.length) {G__13132__a[G__13132__i] = arguments[G__13132__i + 0]; ++G__13132__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13132__a,0);
} 
return ui$navbar$bar__delegate.call(this,args__5784__auto__);};
ui$navbar$bar.cljs$lang$maxFixedArity = 0;
ui$navbar$bar.cljs$lang$applyTo = (function (arglist__13133){
var args__5784__auto__ = cljs.core.seq(arglist__13133);
return ui$navbar$bar__delegate(args__5784__auto__);
});
ui$navbar$bar.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$bar__delegate;
return ui$navbar$bar;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.header2 = (function() { 
var ui$navbar$header2__delegate = function (args__5784__auto__){
var vec__13135 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__13135,(0),null);
var kids = cljs.core.nth.call(null,vec__13135,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-header"),kids);
};
var ui$navbar$header2 = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13136__i = 0, G__13136__a = new Array(arguments.length -  0);
while (G__13136__i < G__13136__a.length) {G__13136__a[G__13136__i] = arguments[G__13136__i + 0]; ++G__13136__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13136__a,0);
} 
return ui$navbar$header2__delegate.call(this,args__5784__auto__);};
ui$navbar$header2.cljs$lang$maxFixedArity = 0;
ui$navbar$header2.cljs$lang$applyTo = (function (arglist__13137){
var args__5784__auto__ = cljs.core.seq(arglist__13137);
return ui$navbar$header2__delegate(args__5784__auto__);
});
ui$navbar$header2.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$header2__delegate;
return ui$navbar$header2;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.brand = (function() { 
var ui$navbar$brand__delegate = function (args__5784__auto__){
var vec__13139 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__13139,(0),null);
var kids = cljs.core.nth.call(null,vec__13139,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand",new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__13139,_,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.info.nav_active,null);
});})(vec__13139,_,kids))
,new cljs.core.Keyword(null,"href","href",-793805698),ui.navbar.home),kids);
};
var ui$navbar$brand = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13140__i = 0, G__13140__a = new Array(arguments.length -  0);
while (G__13140__i < G__13140__a.length) {G__13140__a[G__13140__i] = arguments[G__13140__i + 0]; ++G__13140__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13140__a,0);
} 
return ui$navbar$brand__delegate.call(this,args__5784__auto__);};
ui$navbar$brand.cljs$lang$maxFixedArity = 0;
ui$navbar$brand.cljs$lang$applyTo = (function (arglist__13141){
var args__5784__auto__ = cljs.core.seq(arglist__13141);
return ui$navbar$brand__delegate(args__5784__auto__);
});
ui$navbar$brand.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$brand__delegate;
return ui$navbar$brand;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.menu2 = (function() { 
var ui$navbar$menu2__delegate = function (args__5784__auto__){
var vec__13145 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__13145,(0),null);
var kids = cljs.core.nth.call(null,vec__13145,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__13145,attr,kids){
return (function (G__13146,G__13147){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__13146.call(null,G__13147,"menu")], null);
});})(vec__13145,attr,kids))
).call(null,cljs.core._EQ_,ui.info.nav_active),cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"),attr,kids));
};
var ui$navbar$menu2 = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13148__i = 0, G__13148__a = new Array(arguments.length -  0);
while (G__13148__i < G__13148__a.length) {G__13148__a[G__13148__i] = arguments[G__13148__i + 0]; ++G__13148__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13148__a,0);
} 
return ui$navbar$menu2__delegate.call(this,args__5784__auto__);};
ui$navbar$menu2.cljs$lang$maxFixedArity = 0;
ui$navbar$menu2.cljs$lang$applyTo = (function (arglist__13149){
var args__5784__auto__ = cljs.core.seq(arglist__13149);
return ui$navbar$menu2__delegate(args__5784__auto__);
});
ui$navbar$menu2.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$menu2__delegate;
return ui$navbar$menu2;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.item = (function() { 
var ui$navbar$item__delegate = function (args__5784__auto__){
var vec__13155 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__13156 = cljs.core.nth.call(null,vec__13155,(0),null);
var map__13156__$1 = ((cljs.core.seq_QMARK_.call(null,map__13156))?cljs.core.apply.call(null,cljs.core.hash_map,map__13156):map__13156);
var name = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var _ = cljs.core.nth.call(null,vec__13155,(1),null);
var lc_name = clojure.string.lower_case.call(null,name);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (lc_name,vec__13155,map__13156,map__13156__$1,name,_){
return (function (G__13157,G__13158,G__13159){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__13157.call(null,G__13158,G__13159)], null);
});})(lc_name,vec__13155,map__13156,map__13156__$1,name,_))
).call(null,cljs.core._EQ_,ui.info.location,lc_name),tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (lc_name,vec__13155,map__13156,map__13156__$1,name,_){
return (function (){
cljs.core.reset_BANG_.call(null,ui.info.scroll_location,null);

cljs.core.reset_BANG_.call(null,ui.info.scroll_location,lc_name);

return cljs.core.reset_BANG_.call(null,ui.info.nav_active,null);
});})(lc_name,vec__13155,map__13156,map__13156__$1,name,_))
,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("#!/"),cljs.core.str(lc_name),cljs.core.str("/")].join(''),name));
};
var ui$navbar$item = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13160__i = 0, G__13160__a = new Array(arguments.length -  0);
while (G__13160__i < G__13160__a.length) {G__13160__a[G__13160__i] = arguments[G__13160__i + 0]; ++G__13160__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13160__a,0);
} 
return ui$navbar$item__delegate.call(this,args__5784__auto__);};
ui$navbar$item.cljs$lang$maxFixedArity = 0;
ui$navbar$item.cljs$lang$applyTo = (function (arglist__13161){
var args__5784__auto__ = cljs.core.seq(arglist__13161);
return ui$navbar$item__delegate(args__5784__auto__);
});
ui$navbar$item.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$item__delegate;
return ui$navbar$item;
})()
;

//# sourceMappingURL=navbar.js.map