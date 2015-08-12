// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
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
var ui$navbar$nav_button__delegate = function (args__10403__auto__){
var vec__86112 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__86113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86112,(0),null);
var map__86113__$1 = ((cljs.core.seq_QMARK_(map__86113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86113):map__86113);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86113__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86112,(1),null);
var G__86114 = cljs.core.constant$keyword$type;
var G__86115 = "button";
var G__86116 = cljs.core.constant$keyword$class;
var G__86117 = tailrecursion.javelin.formula(((function (G__86114,G__86115,G__86116,vec__86112,map__86113,map__86113__$1,name,kids){
return (function (G__86121,G__86123,G__86122){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$navbar_DASH_toggle,true,cljs.core.constant$keyword$collapsed,true,cljs.core.constant$keyword$active,(function (){var G__86124 = G__86122;
var G__86125 = G__86123;
return (G__86121.cljs$core$IFn$_invoke$arity$2 ? G__86121.cljs$core$IFn$_invoke$arity$2(G__86124,G__86125) : G__86121.call(null,G__86124,G__86125));
})()], null);
});})(G__86114,G__86115,G__86116,vec__86112,map__86113,map__86113__$1,name,kids))
).call(null,cljs.core._EQ_,name,ui.info.nav_active);
var G__86118 = cljs.core.constant$keyword$click;
var G__86119 = ((function (G__86114,G__86115,G__86116,G__86117,G__86118,vec__86112,map__86113,map__86113__$1,name,kids){
return (function (){
if(cljs.core.not((function (){var G__86126 = ui.info.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86126) : cljs.core.deref.call(null,G__86126));
})())){
var G__86127 = ui.info.nav_active;
var G__86128 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86127,G__86128) : cljs.core.reset_BANG_.call(null,G__86127,G__86128));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__86129 = ui.info.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86129) : cljs.core.deref.call(null,G__86129));
})(),name)){
var G__86130 = ui.info.nav_active;
var G__86131 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86130,G__86131) : cljs.core.reset_BANG_.call(null,G__86130,G__86131));
} else {
var G__86132 = ui.info.nav_active;
var G__86133 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86132,G__86133) : cljs.core.reset_BANG_.call(null,G__86132,G__86133));

}
}
});})(G__86114,G__86115,G__86116,G__86117,G__86118,vec__86112,map__86113,map__86113__$1,name,kids))
;
var G__86120 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__86114,G__86115,G__86116,G__86117,G__86118,G__86119,G__86120) : tailrecursion.hoplon.button.call(null,G__86114,G__86115,G__86116,G__86117,G__86118,G__86119,G__86120));
};
var ui$navbar$nav_button = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86134__i = 0, G__86134__a = new Array(arguments.length -  0);
while (G__86134__i < G__86134__a.length) {G__86134__a[G__86134__i] = arguments[G__86134__i + 0]; ++G__86134__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86134__a,0);
} 
return ui$navbar$nav_button__delegate.call(this,args__10403__auto__);};
ui$navbar$nav_button.cljs$lang$maxFixedArity = 0;
ui$navbar$nav_button.cljs$lang$applyTo = (function (arglist__86135){
var args__10403__auto__ = cljs.core.seq(arglist__86135);
return ui$navbar$nav_button__delegate(args__10403__auto__);
});
ui$navbar$nav_button.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$nav_button__delegate;
return ui$navbar$nav_button;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.bar = (function() { 
var ui$navbar$bar__delegate = function (args__10403__auto__){
var vec__86140 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86140,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86140,(1),null);
var G__86141 = cljs.core.constant$keyword$class;
var G__86142 = "navbar navbar-inverse navbar-fixed-top";
var G__86143 = ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__86141,G__86142,G__86143) : tailrecursion.hoplon.div.call(null,G__86141,G__86142,G__86143));
};
var ui$navbar$bar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86144__i = 0, G__86144__a = new Array(arguments.length -  0);
while (G__86144__i < G__86144__a.length) {G__86144__a[G__86144__i] = arguments[G__86144__i + 0]; ++G__86144__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86144__a,0);
} 
return ui$navbar$bar__delegate.call(this,args__10403__auto__);};
ui$navbar$bar.cljs$lang$maxFixedArity = 0;
ui$navbar$bar.cljs$lang$applyTo = (function (arglist__86145){
var args__10403__auto__ = cljs.core.seq(arglist__86145);
return ui$navbar$bar__delegate(args__10403__auto__);
});
ui$navbar$bar.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$bar__delegate;
return ui$navbar$bar;
})()
;
/**
 * @param {...*} var_args
 */
ui.navbar.header2 = (function() { 
var ui$navbar$header2__delegate = function (args__10403__auto__){
var vec__86149 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86149,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86149,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__86150 = cljs.core.constant$keyword$class;
var G__86151 = "navbar-header";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__86150,G__86151) : tailrecursion.hoplon.div.call(null,G__86150,G__86151));
})(),kids);
};
var ui$navbar$header2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86152__i = 0, G__86152__a = new Array(arguments.length -  0);
while (G__86152__i < G__86152__a.length) {G__86152__a[G__86152__i] = arguments[G__86152__i + 0]; ++G__86152__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86152__a,0);
} 
return ui$navbar$header2__delegate.call(this,args__10403__auto__);};
ui$navbar$header2.cljs$lang$maxFixedArity = 0;
ui$navbar$header2.cljs$lang$applyTo = (function (arglist__86153){
var args__10403__auto__ = cljs.core.seq(arglist__86153);
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
var vec__86163 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86163,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86163,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__86164 = cljs.core.constant$keyword$class;
var G__86165 = "navbar-brand";
var G__86166 = cljs.core.constant$keyword$click;
var G__86167 = ((function (G__86164,G__86165,G__86166,vec__86163,_,kids){
return (function (){
var G__86170 = ui.info.nav_active;
var G__86171 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86170,G__86171) : cljs.core.reset_BANG_.call(null,G__86170,G__86171));
});})(G__86164,G__86165,G__86166,vec__86163,_,kids))
;
var G__86168 = cljs.core.constant$keyword$href;
var G__86169 = ui.navbar.home;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__86164,G__86165,G__86166,G__86167,G__86168,G__86169) : tailrecursion.hoplon.a.call(null,G__86164,G__86165,G__86166,G__86167,G__86168,G__86169));
})(),kids);
};
var ui$navbar$brand = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86172__i = 0, G__86172__a = new Array(arguments.length -  0);
while (G__86172__i < G__86172__a.length) {G__86172__a[G__86172__i] = arguments[G__86172__i + 0]; ++G__86172__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86172__a,0);
} 
return ui$navbar$brand__delegate.call(this,args__10403__auto__);};
ui$navbar$brand.cljs$lang$maxFixedArity = 0;
ui$navbar$brand.cljs$lang$applyTo = (function (arglist__86173){
var args__10403__auto__ = cljs.core.seq(arglist__86173);
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
var vec__86184 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86184,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86184,(1),null);
var G__86185 = cljs.core.constant$keyword$class;
var G__86186 = tailrecursion.javelin.formula(((function (G__86185,vec__86184,attr,kids){
return (function (G__86188,G__86189){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$collapse,true,cljs.core.constant$keyword$navbar_DASH_collapse,true,cljs.core.constant$keyword$in,(function (){var G__86190 = G__86189;
var G__86191 = "menu";
return (G__86188.cljs$core$IFn$_invoke$arity$2 ? G__86188.cljs$core$IFn$_invoke$arity$2(G__86190,G__86191) : G__86188.call(null,G__86190,G__86191));
})()], null);
});})(G__86185,vec__86184,attr,kids))
).call(null,cljs.core._EQ_,ui.info.nav_active);
var G__86187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__86192 = cljs.core.constant$keyword$class;
var G__86193 = "nav navbar-nav";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__86192,G__86193) : tailrecursion.hoplon.ul.call(null,G__86192,G__86193));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__86185,G__86186,G__86187) : tailrecursion.hoplon.div.call(null,G__86185,G__86186,G__86187));
};
var ui$navbar$menu2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86194__i = 0, G__86194__a = new Array(arguments.length -  0);
while (G__86194__i < G__86194__a.length) {G__86194__a[G__86194__i] = arguments[G__86194__i + 0]; ++G__86194__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86194__a,0);
} 
return ui$navbar$menu2__delegate.call(this,args__10403__auto__);};
ui$navbar$menu2.cljs$lang$maxFixedArity = 0;
ui$navbar$menu2.cljs$lang$applyTo = (function (arglist__86195){
var args__10403__auto__ = cljs.core.seq(arglist__86195);
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
var vec__86217 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__86218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86217,(0),null);
var map__86218__$1 = ((cljs.core.seq_QMARK_(map__86218))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86218):map__86218);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86218__$1,cljs.core.constant$keyword$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86217,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__86219 = cljs.core.constant$keyword$class;
var G__86220 = tailrecursion.javelin.formula(((function (G__86219,lc_name,vec__86217,map__86218,map__86218__$1,name,_){
return (function (G__86222,G__86223,G__86224){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,(function (){var G__86225 = G__86223;
var G__86226 = G__86224;
return (G__86222.cljs$core$IFn$_invoke$arity$2 ? G__86222.cljs$core$IFn$_invoke$arity$2(G__86225,G__86226) : G__86222.call(null,G__86225,G__86226));
})()], null);
});})(G__86219,lc_name,vec__86217,map__86218,map__86218__$1,name,_))
).call(null,cljs.core._EQ_,ui.info.location,lc_name);
var G__86221 = (function (){var G__86227 = cljs.core.constant$keyword$click;
var G__86228 = ((function (G__86227,G__86219,G__86220,lc_name,vec__86217,map__86218,map__86218__$1,name,_){
return (function (){
var G__86232_86238 = ui.info.scroll_location;
var G__86233_86239 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86232_86238,G__86233_86239) : cljs.core.reset_BANG_.call(null,G__86232_86238,G__86233_86239));

var G__86234_86240 = ui.info.scroll_location;
var G__86235_86241 = lc_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86234_86240,G__86235_86241) : cljs.core.reset_BANG_.call(null,G__86234_86240,G__86235_86241));

var G__86236 = ui.info.nav_active;
var G__86237 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86236,G__86237) : cljs.core.reset_BANG_.call(null,G__86236,G__86237));
});})(G__86227,G__86219,G__86220,lc_name,vec__86217,map__86218,map__86218__$1,name,_))
;
var G__86229 = cljs.core.constant$keyword$href;
var G__86230 = [cljs.core.str("#!/"),cljs.core.str(lc_name),cljs.core.str("/")].join('');
var G__86231 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(G__86227,G__86228,G__86229,G__86230,G__86231) : tailrecursion.hoplon.a.call(null,G__86227,G__86228,G__86229,G__86230,G__86231));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__86219,G__86220,G__86221) : tailrecursion.hoplon.li.call(null,G__86219,G__86220,G__86221));
};
var ui$navbar$item = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86242__i = 0, G__86242__a = new Array(arguments.length -  0);
while (G__86242__i < G__86242__a.length) {G__86242__a[G__86242__i] = arguments[G__86242__i + 0]; ++G__86242__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86242__a,0);
} 
return ui$navbar$item__delegate.call(this,args__10403__auto__);};
ui$navbar$item.cljs$lang$maxFixedArity = 0;
ui$navbar$item.cljs$lang$applyTo = (function (arglist__86243){
var args__10403__auto__ = cljs.core.seq(arglist__86243);
return ui$navbar$item__delegate(args__10403__auto__);
});
ui$navbar$item.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$item__delegate;
return ui$navbar$item;
})()
;
