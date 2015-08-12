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
var vec__86108 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__86109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86108,(0),null);
var map__86109__$1 = ((cljs.core.seq_QMARK_(map__86109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86109):map__86109);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86109__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86108,(1),null);
var G__86110 = cljs.core.constant$keyword$type;
var G__86111 = "button";
var G__86112 = cljs.core.constant$keyword$class;
var G__86113 = tailrecursion.javelin.formula(((function (G__86110,G__86111,G__86112,vec__86108,map__86109,map__86109__$1,name,kids){
return (function (G__86117,G__86119,G__86118){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$navbar_DASH_toggle,true,cljs.core.constant$keyword$collapsed,true,cljs.core.constant$keyword$active,(function (){var G__86120 = G__86118;
var G__86121 = G__86119;
return (G__86117.cljs$core$IFn$_invoke$arity$2 ? G__86117.cljs$core$IFn$_invoke$arity$2(G__86120,G__86121) : G__86117.call(null,G__86120,G__86121));
})()], null);
});})(G__86110,G__86111,G__86112,vec__86108,map__86109,map__86109__$1,name,kids))
).call(null,cljs.core._EQ_,name,ui.info.nav_active);
var G__86114 = cljs.core.constant$keyword$click;
var G__86115 = ((function (G__86110,G__86111,G__86112,G__86113,G__86114,vec__86108,map__86109,map__86109__$1,name,kids){
return (function (){
if(cljs.core.not((function (){var G__86122 = ui.info.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86122) : cljs.core.deref.call(null,G__86122));
})())){
var G__86123 = ui.info.nav_active;
var G__86124 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86123,G__86124) : cljs.core.reset_BANG_.call(null,G__86123,G__86124));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__86125 = ui.info.nav_active;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86125) : cljs.core.deref.call(null,G__86125));
})(),name)){
var G__86126 = ui.info.nav_active;
var G__86127 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86126,G__86127) : cljs.core.reset_BANG_.call(null,G__86126,G__86127));
} else {
var G__86128 = ui.info.nav_active;
var G__86129 = name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86128,G__86129) : cljs.core.reset_BANG_.call(null,G__86128,G__86129));

}
}
});})(G__86110,G__86111,G__86112,G__86113,G__86114,vec__86108,map__86109,map__86109__$1,name,kids))
;
var G__86116 = kids;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$7(G__86110,G__86111,G__86112,G__86113,G__86114,G__86115,G__86116) : tailrecursion.hoplon.button.call(null,G__86110,G__86111,G__86112,G__86113,G__86114,G__86115,G__86116));
};
var ui$navbar$nav_button = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86130__i = 0, G__86130__a = new Array(arguments.length -  0);
while (G__86130__i < G__86130__a.length) {G__86130__a[G__86130__i] = arguments[G__86130__i + 0]; ++G__86130__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86130__a,0);
} 
return ui$navbar$nav_button__delegate.call(this,args__10403__auto__);};
ui$navbar$nav_button.cljs$lang$maxFixedArity = 0;
ui$navbar$nav_button.cljs$lang$applyTo = (function (arglist__86131){
var args__10403__auto__ = cljs.core.seq(arglist__86131);
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
var vec__86136 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86136,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86136,(1),null);
var G__86137 = cljs.core.constant$keyword$class;
var G__86138 = "navbar navbar-inverse navbar-fixed-top";
var G__86139 = ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__86137,G__86138,G__86139) : tailrecursion.hoplon.div.call(null,G__86137,G__86138,G__86139));
};
var ui$navbar$bar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86140__i = 0, G__86140__a = new Array(arguments.length -  0);
while (G__86140__i < G__86140__a.length) {G__86140__a[G__86140__i] = arguments[G__86140__i + 0]; ++G__86140__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86140__a,0);
} 
return ui$navbar$bar__delegate.call(this,args__10403__auto__);};
ui$navbar$bar.cljs$lang$maxFixedArity = 0;
ui$navbar$bar.cljs$lang$applyTo = (function (arglist__86141){
var args__10403__auto__ = cljs.core.seq(arglist__86141);
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
var vec__86145 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86145,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86145,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__86146 = cljs.core.constant$keyword$class;
var G__86147 = "navbar-header";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__86146,G__86147) : tailrecursion.hoplon.div.call(null,G__86146,G__86147));
})(),kids);
};
var ui$navbar$header2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86148__i = 0, G__86148__a = new Array(arguments.length -  0);
while (G__86148__i < G__86148__a.length) {G__86148__a[G__86148__i] = arguments[G__86148__i + 0]; ++G__86148__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86148__a,0);
} 
return ui$navbar$header2__delegate.call(this,args__10403__auto__);};
ui$navbar$header2.cljs$lang$maxFixedArity = 0;
ui$navbar$header2.cljs$lang$applyTo = (function (arglist__86149){
var args__10403__auto__ = cljs.core.seq(arglist__86149);
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
var vec__86159 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86159,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86159,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__86160 = cljs.core.constant$keyword$class;
var G__86161 = "navbar-brand";
var G__86162 = cljs.core.constant$keyword$click;
var G__86163 = ((function (G__86160,G__86161,G__86162,vec__86159,_,kids){
return (function (){
var G__86166 = ui.info.nav_active;
var G__86167 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86166,G__86167) : cljs.core.reset_BANG_.call(null,G__86166,G__86167));
});})(G__86160,G__86161,G__86162,vec__86159,_,kids))
;
var G__86164 = cljs.core.constant$keyword$href;
var G__86165 = ui.navbar.home;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$6(G__86160,G__86161,G__86162,G__86163,G__86164,G__86165) : tailrecursion.hoplon.a.call(null,G__86160,G__86161,G__86162,G__86163,G__86164,G__86165));
})(),kids);
};
var ui$navbar$brand = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86168__i = 0, G__86168__a = new Array(arguments.length -  0);
while (G__86168__i < G__86168__a.length) {G__86168__a[G__86168__i] = arguments[G__86168__i + 0]; ++G__86168__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86168__a,0);
} 
return ui$navbar$brand__delegate.call(this,args__10403__auto__);};
ui$navbar$brand.cljs$lang$maxFixedArity = 0;
ui$navbar$brand.cljs$lang$applyTo = (function (arglist__86169){
var args__10403__auto__ = cljs.core.seq(arglist__86169);
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
var vec__86180 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86180,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86180,(1),null);
var G__86181 = cljs.core.constant$keyword$class;
var G__86182 = tailrecursion.javelin.formula(((function (G__86181,vec__86180,attr,kids){
return (function (G__86184,G__86185){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$collapse,true,cljs.core.constant$keyword$navbar_DASH_collapse,true,cljs.core.constant$keyword$in,(function (){var G__86186 = G__86185;
var G__86187 = "menu";
return (G__86184.cljs$core$IFn$_invoke$arity$2 ? G__86184.cljs$core$IFn$_invoke$arity$2(G__86186,G__86187) : G__86184.call(null,G__86186,G__86187));
})()], null);
});})(G__86181,vec__86180,attr,kids))
).call(null,cljs.core._EQ_,ui.info.nav_active);
var G__86183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__86188 = cljs.core.constant$keyword$class;
var G__86189 = "nav navbar-nav";
return (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(G__86188,G__86189) : tailrecursion.hoplon.ul.call(null,G__86188,G__86189));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__86181,G__86182,G__86183) : tailrecursion.hoplon.div.call(null,G__86181,G__86182,G__86183));
};
var ui$navbar$menu2 = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86190__i = 0, G__86190__a = new Array(arguments.length -  0);
while (G__86190__i < G__86190__a.length) {G__86190__a[G__86190__i] = arguments[G__86190__i + 0]; ++G__86190__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86190__a,0);
} 
return ui$navbar$menu2__delegate.call(this,args__10403__auto__);};
ui$navbar$menu2.cljs$lang$maxFixedArity = 0;
ui$navbar$menu2.cljs$lang$applyTo = (function (arglist__86191){
var args__10403__auto__ = cljs.core.seq(arglist__86191);
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
var vec__86213 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__86214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86213,(0),null);
var map__86214__$1 = ((cljs.core.seq_QMARK_(map__86214))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86214):map__86214);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86214__$1,cljs.core.constant$keyword$name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86213,(1),null);
var lc_name = clojure.string.lower_case(name);
var G__86215 = cljs.core.constant$keyword$class;
var G__86216 = tailrecursion.javelin.formula(((function (G__86215,lc_name,vec__86213,map__86214,map__86214__$1,name,_){
return (function (G__86218,G__86219,G__86220){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$active,(function (){var G__86221 = G__86219;
var G__86222 = G__86220;
return (G__86218.cljs$core$IFn$_invoke$arity$2 ? G__86218.cljs$core$IFn$_invoke$arity$2(G__86221,G__86222) : G__86218.call(null,G__86221,G__86222));
})()], null);
});})(G__86215,lc_name,vec__86213,map__86214,map__86214__$1,name,_))
).call(null,cljs.core._EQ_,ui.info.location,lc_name);
var G__86217 = (function (){var G__86223 = cljs.core.constant$keyword$click;
var G__86224 = ((function (G__86223,G__86215,G__86216,lc_name,vec__86213,map__86214,map__86214__$1,name,_){
return (function (){
var G__86228_86234 = ui.info.scroll_location;
var G__86229_86235 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86228_86234,G__86229_86235) : cljs.core.reset_BANG_.call(null,G__86228_86234,G__86229_86235));

var G__86230_86236 = ui.info.scroll_location;
var G__86231_86237 = lc_name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86230_86236,G__86231_86237) : cljs.core.reset_BANG_.call(null,G__86230_86236,G__86231_86237));

var G__86232 = ui.info.nav_active;
var G__86233 = null;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86232,G__86233) : cljs.core.reset_BANG_.call(null,G__86232,G__86233));
});})(G__86223,G__86215,G__86216,lc_name,vec__86213,map__86214,map__86214__$1,name,_))
;
var G__86225 = cljs.core.constant$keyword$href;
var G__86226 = [cljs.core.str("#!/"),cljs.core.str(lc_name),cljs.core.str("/")].join('');
var G__86227 = name;
return (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(G__86223,G__86224,G__86225,G__86226,G__86227) : tailrecursion.hoplon.a.call(null,G__86223,G__86224,G__86225,G__86226,G__86227));
})();
return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(G__86215,G__86216,G__86217) : tailrecursion.hoplon.li.call(null,G__86215,G__86216,G__86217));
};
var ui$navbar$item = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__86238__i = 0, G__86238__a = new Array(arguments.length -  0);
while (G__86238__i < G__86238__a.length) {G__86238__a[G__86238__i] = arguments[G__86238__i + 0]; ++G__86238__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__86238__a,0);
} 
return ui$navbar$item__delegate.call(this,args__10403__auto__);};
ui$navbar$item.cljs$lang$maxFixedArity = 0;
ui$navbar$item.cljs$lang$applyTo = (function (arglist__86239){
var args__10403__auto__ = cljs.core.seq(arglist__86239);
return ui$navbar$item__delegate(args__10403__auto__);
});
ui$navbar$item.cljs$core$IFn$_invoke$arity$variadic = ui$navbar$item__delegate;
return ui$navbar$item;
})()
;
