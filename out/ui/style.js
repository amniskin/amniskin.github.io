// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.style');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.style.location = tailrecursion.javelin.formula((function (G__162436){
return G__162436;
})).call(null,ui.info.location);
ui.style.bg_color = "#5CBEFF";
/**
 * @param {...*} var_args
 */
ui.style.page = (function() { 
var ui$style$page__delegate = function (args__10403__auto__){
var vec__162453 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162453,(0),null);
var map__162454__$1 = ((cljs.core.seq_QMARK_(map__162454))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162454):map__162454);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162454__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162453,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__162455 = cljs.core.constant$keyword$toggle;
var G__162456 = tailrecursion.javelin.formula(((function (G__162455,vec__162453,map__162454,map__162454__$1,name,kids){
return (function (G__162459,G__162460,G__162461){
var G__162462 = G__162460;
var G__162463 = G__162461;
return (G__162459.cljs$core$IFn$_invoke$arity$2 ? G__162459.cljs$core$IFn$_invoke$arity$2(G__162462,G__162463) : G__162459.call(null,G__162462,G__162463));
});})(G__162455,vec__162453,map__162454,map__162454__$1,name,kids))
).call(null,cljs.core._EQ_,ui.info.location,name);
var G__162457 = cljs.core.constant$keyword$scroll_DASH_to;
var G__162458 = tailrecursion.javelin.formula(((function (G__162455,G__162456,G__162457,vec__162453,map__162454,map__162454__$1,name,kids){
return (function (G__162465,G__162464,G__162466){
var G__162467 = G__162465;
var G__162468 = G__162466;
return (G__162464.cljs$core$IFn$_invoke$arity$2 ? G__162464.cljs$core$IFn$_invoke$arity$2(G__162467,G__162468) : G__162464.call(null,G__162467,G__162468));
});})(G__162455,G__162456,G__162457,vec__162453,map__162454,map__162454__$1,name,kids))
).call(null,ui.info.scroll_location,cljs.core._EQ_,name);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162455,G__162456,G__162457,G__162458) : tailrecursion.hoplon.div.call(null,G__162455,G__162456,G__162457,G__162458));
})(),kids);
};
var ui$style$page = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162469__i = 0, G__162469__a = new Array(arguments.length -  0);
while (G__162469__i < G__162469__a.length) {G__162469__a[G__162469__i] = arguments[G__162469__i + 0]; ++G__162469__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162469__a,0);
} 
return ui$style$page__delegate.call(this,args__10403__auto__);};
ui$style$page.cljs$lang$maxFixedArity = 0;
ui$style$page.cljs$lang$applyTo = (function (arglist__162470){
var args__10403__auto__ = cljs.core.seq(arglist__162470);
return ui$style$page__delegate(args__10403__auto__);
});
ui$style$page.cljs$core$IFn$_invoke$arity$variadic = ui$style$page__delegate;
return ui$style$page;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.sidebar = (function() { 
var ui$style$sidebar__delegate = function (args__10403__auto__){
var vec__162474 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162474,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162474,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162475 = cljs.core.constant$keyword$class;
var G__162476 = "col-md-4 col-sm-4 hidden-xs";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162475,G__162476) : tailrecursion.hoplon.div.call(null,G__162475,G__162476));
})(),attr,kids);
};
var ui$style$sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162477__i = 0, G__162477__a = new Array(arguments.length -  0);
while (G__162477__i < G__162477__a.length) {G__162477__a[G__162477__i] = arguments[G__162477__i + 0]; ++G__162477__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162477__a,0);
} 
return ui$style$sidebar__delegate.call(this,args__10403__auto__);};
ui$style$sidebar.cljs$lang$maxFixedArity = 0;
ui$style$sidebar.cljs$lang$applyTo = (function (arglist__162478){
var args__10403__auto__ = cljs.core.seq(arglist__162478);
return ui$style$sidebar__delegate(args__10403__auto__);
});
ui$style$sidebar.cljs$core$IFn$_invoke$arity$variadic = ui$style$sidebar__delegate;
return ui$style$sidebar;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.divider = (function() { 
var ui$style$divider__delegate = function (args__10403__auto__){
var vec__162484 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162484,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162484,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162485 = cljs.core.constant$keyword$class;
var G__162486 = "hidden-xs";
var G__162487 = cljs.core.constant$keyword$style;
var G__162488 = "height: 100px";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162485,G__162486,G__162487,G__162488) : tailrecursion.hoplon.div.call(null,G__162485,G__162486,G__162487,G__162488));
})(),attr,kids);
};
var ui$style$divider = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162489__i = 0, G__162489__a = new Array(arguments.length -  0);
while (G__162489__i < G__162489__a.length) {G__162489__a[G__162489__i] = arguments[G__162489__i + 0]; ++G__162489__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162489__a,0);
} 
return ui$style$divider__delegate.call(this,args__10403__auto__);};
ui$style$divider.cljs$lang$maxFixedArity = 0;
ui$style$divider.cljs$lang$applyTo = (function (arglist__162490){
var args__10403__auto__ = cljs.core.seq(arglist__162490);
return ui$style$divider__delegate(args__10403__auto__);
});
ui$style$divider.cljs$core$IFn$_invoke$arity$variadic = ui$style$divider__delegate;
return ui$style$divider;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.content_with_sidebar = (function() { 
var ui$style$content_with_sidebar__delegate = function (args__10403__auto__){
var vec__162496 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162496,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162496,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162497 = cljs.core.constant$keyword$class;
var G__162498 = "col-md-8 col-sm-8 col-xs-12";
var G__162499 = cljs.core.constant$keyword$style;
var G__162500 = "padding-right-5%; padding-bottom-5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162497,G__162498,G__162499,G__162500) : tailrecursion.hoplon.div.call(null,G__162497,G__162498,G__162499,G__162500));
})(),attr,kids);
};
var ui$style$content_with_sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162501__i = 0, G__162501__a = new Array(arguments.length -  0);
while (G__162501__i < G__162501__a.length) {G__162501__a[G__162501__i] = arguments[G__162501__i + 0]; ++G__162501__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162501__a,0);
} 
return ui$style$content_with_sidebar__delegate.call(this,args__10403__auto__);};
ui$style$content_with_sidebar.cljs$lang$maxFixedArity = 0;
ui$style$content_with_sidebar.cljs$lang$applyTo = (function (arglist__162502){
var args__10403__auto__ = cljs.core.seq(arglist__162502);
return ui$style$content_with_sidebar__delegate(args__10403__auto__);
});
ui$style$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = ui$style$content_with_sidebar__delegate;
return ui$style$content_with_sidebar;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.container = (function() { 
var ui$style$container__delegate = function (args__10403__auto__){
var vec__162506 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162506,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162506,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162507 = cljs.core.constant$keyword$class;
var G__162508 = "container";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162507,G__162508) : tailrecursion.hoplon.div.call(null,G__162507,G__162508));
})(),attr,kids);
};
var ui$style$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162509__i = 0, G__162509__a = new Array(arguments.length -  0);
while (G__162509__i < G__162509__a.length) {G__162509__a[G__162509__i] = arguments[G__162509__i + 0]; ++G__162509__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162509__a,0);
} 
return ui$style$container__delegate.call(this,args__10403__auto__);};
ui$style$container.cljs$lang$maxFixedArity = 0;
ui$style$container.cljs$lang$applyTo = (function (arglist__162510){
var args__10403__auto__ = cljs.core.seq(arglist__162510);
return ui$style$container__delegate(args__10403__auto__);
});
ui$style$container.cljs$core$IFn$_invoke$arity$variadic = ui$style$container__delegate;
return ui$style$container;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.glyph_list_black = (function() { 
var ui$style$glyph_list_black__delegate = function (args__10403__auto__){
var vec__162516 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162516,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162516,(1),null);
var G__162517 = cljs.core.constant$keyword$class;
var G__162518 = "glyphicon glyphicon--list-alt";
var G__162519 = cljs.core.constant$keyword$style;
var G__162520 = "color:black;";
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__162517,G__162518,G__162519,G__162520) : tailrecursion.hoplon.span.call(null,G__162517,G__162518,G__162519,G__162520));
};
var ui$style$glyph_list_black = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162521__i = 0, G__162521__a = new Array(arguments.length -  0);
while (G__162521__i < G__162521__a.length) {G__162521__a[G__162521__i] = arguments[G__162521__i + 0]; ++G__162521__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162521__a,0);
} 
return ui$style$glyph_list_black__delegate.call(this,args__10403__auto__);};
ui$style$glyph_list_black.cljs$lang$maxFixedArity = 0;
ui$style$glyph_list_black.cljs$lang$applyTo = (function (arglist__162522){
var args__10403__auto__ = cljs.core.seq(arglist__162522);
return ui$style$glyph_list_black__delegate(args__10403__auto__);
});
ui$style$glyph_list_black.cljs$core$IFn$_invoke$arity$variadic = ui$style$glyph_list_black__delegate;
return ui$style$glyph_list_black;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.jumbotron = (function() { 
var ui$style$jumbotron__delegate = function (args__10403__auto__){
var vec__162528 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162528,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162528,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162529 = cljs.core.constant$keyword$class;
var G__162530 = "jumbotron";
var G__162531 = cljs.core.constant$keyword$style;
var G__162532 = "background-color: inherit;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162529,G__162530,G__162531,G__162532) : tailrecursion.hoplon.div.call(null,G__162529,G__162530,G__162531,G__162532));
})(),attr,kids);
};
var ui$style$jumbotron = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162533__i = 0, G__162533__a = new Array(arguments.length -  0);
while (G__162533__i < G__162533__a.length) {G__162533__a[G__162533__i] = arguments[G__162533__i + 0]; ++G__162533__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162533__a,0);
} 
return ui$style$jumbotron__delegate.call(this,args__10403__auto__);};
ui$style$jumbotron.cljs$lang$maxFixedArity = 0;
ui$style$jumbotron.cljs$lang$applyTo = (function (arglist__162534){
var args__10403__auto__ = cljs.core.seq(arglist__162534);
return ui$style$jumbotron__delegate(args__10403__auto__);
});
ui$style$jumbotron.cljs$core$IFn$_invoke$arity$variadic = ui$style$jumbotron__delegate;
return ui$style$jumbotron;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.background = (function() { 
var ui$style$background__delegate = function (args__10403__auto__){
var vec__162542 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162542,(0),null);
var map__162543__$1 = ((cljs.core.seq_QMARK_(map__162543))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162543):map__162543);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162543__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162542,(1),null);
var G__162544 = cljs.core.constant$keyword$style;
var G__162545 = [cljs.core.str("display:block; background-image:url('"),cljs.core.str(url),cljs.core.str("'); background-size:length:auto 100vh; background-repeat: no-repeat;background-attachment:fixed;")].join('');
var G__162546 = cljs.core.constant$keyword$on_DASH_screen_STAR_;
var G__162547 = ((function (G__162544,G__162545,G__162546,vec__162542,map__162543,map__162543__$1,url,kids){
return (function (p1__3428_SHARP_,p2__3429_SHARP_){
return p1__3428_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__3429_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__162544,G__162545,G__162546,vec__162542,map__162543,map__162543__$1,url,kids))
;
var G__162548 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__162544,G__162545,G__162546,G__162547,G__162548) : tailrecursion.hoplon.div.call(null,G__162544,G__162545,G__162546,G__162547,G__162548));
};
var ui$style$background = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162549__i = 0, G__162549__a = new Array(arguments.length -  0);
while (G__162549__i < G__162549__a.length) {G__162549__a[G__162549__i] = arguments[G__162549__i + 0]; ++G__162549__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162549__a,0);
} 
return ui$style$background__delegate.call(this,args__10403__auto__);};
ui$style$background.cljs$lang$maxFixedArity = 0;
ui$style$background.cljs$lang$applyTo = (function (arglist__162550){
var args__10403__auto__ = cljs.core.seq(arglist__162550);
return ui$style$background__delegate(args__10403__auto__);
});
ui$style$background.cljs$core$IFn$_invoke$arity$variadic = ui$style$background__delegate;
return ui$style$background;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.background_section = (function() { 
var ui$style$background_section__delegate = function (args__10403__auto__){
var vec__162561 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162561,(0),null);
var map__162562__$1 = ((cljs.core.seq_QMARK_(map__162562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162562):map__162562);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162562__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162561,(1),null);
return ui.style.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$url,url,ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__162563 = cljs.core.constant$keyword$style;
var G__162564 = "padding-top:20%;padding-bottom:20%;";
var G__162565 = cljs.core.constant$keyword$class;
var G__162566 = "col-sm-6 col-sm-offset-3 text-center";
var G__162567 = (function (){var G__162568 = cljs.core.constant$keyword$style;
var G__162569 = "color: #ffffff; padding:20px;background-color:rgba(5,5,5,.8)";
var G__162570 = kids;
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__162568,G__162569,G__162570) : tailrecursion.hoplon.h2.call(null,G__162568,G__162569,G__162570));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__162563,G__162564,G__162565,G__162566,G__162567) : tailrecursion.hoplon.div.call(null,G__162563,G__162564,G__162565,G__162566,G__162567));
})()], 0))], 0));
};
var ui$style$background_section = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162571__i = 0, G__162571__a = new Array(arguments.length -  0);
while (G__162571__i < G__162571__a.length) {G__162571__a[G__162571__i] = arguments[G__162571__i + 0]; ++G__162571__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162571__a,0);
} 
return ui$style$background_section__delegate.call(this,args__10403__auto__);};
ui$style$background_section.cljs$lang$maxFixedArity = 0;
ui$style$background_section.cljs$lang$applyTo = (function (arglist__162572){
var args__10403__auto__ = cljs.core.seq(arglist__162572);
return ui$style$background_section__delegate(args__10403__auto__);
});
ui$style$background_section.cljs$core$IFn$_invoke$arity$variadic = ui$style$background_section__delegate;
return ui$style$background_section;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.row = (function() { 
var ui$style$row__delegate = function (args__10403__auto__){
var vec__162576 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162576,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162576,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162577 = cljs.core.constant$keyword$class;
var G__162578 = "row";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162577,G__162578) : tailrecursion.hoplon.div.call(null,G__162577,G__162578));
})(),attr,kids);
};
var ui$style$row = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162579__i = 0, G__162579__a = new Array(arguments.length -  0);
while (G__162579__i < G__162579__a.length) {G__162579__a[G__162579__i] = arguments[G__162579__i + 0]; ++G__162579__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162579__a,0);
} 
return ui$style$row__delegate.call(this,args__10403__auto__);};
ui$style$row.cljs$lang$maxFixedArity = 0;
ui$style$row.cljs$lang$applyTo = (function (arglist__162580){
var args__10403__auto__ = cljs.core.seq(arglist__162580);
return ui$style$row__delegate(args__10403__auto__);
});
ui$style$row.cljs$core$IFn$_invoke$arity$variadic = ui$style$row__delegate;
return ui$style$row;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.well = (function() { 
var ui$style$well__delegate = function (args__10403__auto__){
var vec__162584 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162584,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162584,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162585 = cljs.core.constant$keyword$class;
var G__162586 = "well";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162585,G__162586) : tailrecursion.hoplon.div.call(null,G__162585,G__162586));
})(),attr,kids);
};
var ui$style$well = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162587__i = 0, G__162587__a = new Array(arguments.length -  0);
while (G__162587__i < G__162587__a.length) {G__162587__a[G__162587__i] = arguments[G__162587__i + 0]; ++G__162587__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162587__a,0);
} 
return ui$style$well__delegate.call(this,args__10403__auto__);};
ui$style$well.cljs$lang$maxFixedArity = 0;
ui$style$well.cljs$lang$applyTo = (function (arglist__162588){
var args__10403__auto__ = cljs.core.seq(arglist__162588);
return ui$style$well__delegate(args__10403__auto__);
});
ui$style$well.cljs$core$IFn$_invoke$arity$variadic = ui$style$well__delegate;
return ui$style$well;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.content_bubble = (function() { 
var ui$style$content_bubble__delegate = function (args__10403__auto__){
var vec__162593 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162593,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162593,(1),null);
var G__162594 = cljs.core.constant$keyword$class;
var G__162595 = "col-md-4 col-sm-4 col-xs-12";
var G__162596 = ui.style.well.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__162594,G__162595,G__162596) : tailrecursion.hoplon.div.call(null,G__162594,G__162595,G__162596));
};
var ui$style$content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162597__i = 0, G__162597__a = new Array(arguments.length -  0);
while (G__162597__i < G__162597__a.length) {G__162597__a[G__162597__i] = arguments[G__162597__i + 0]; ++G__162597__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162597__a,0);
} 
return ui$style$content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$content_bubble.cljs$lang$applyTo = (function (arglist__162598){
var args__10403__auto__ = cljs.core.seq(arglist__162598);
return ui$style$content_bubble__delegate(args__10403__auto__);
});
ui$style$content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$content_bubble__delegate;
return ui$style$content_bubble;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.img_content_bubble = (function() { 
var ui$style$img_content_bubble__delegate = function (args__10403__auto__){
var vec__162608 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162608,(0),null);
var map__162609__$1 = ((cljs.core.seq_QMARK_(map__162609))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162609):map__162609);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162609__$1,cljs.core.constant$keyword$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162608,(1),null);
return ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__162610 = cljs.core.constant$keyword$src;
var G__162611 = src;
var G__162612 = cljs.core.constant$keyword$class;
var G__162613 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__162610,G__162611,G__162612,G__162613) : tailrecursion.hoplon.img.call(null,G__162610,G__162611,G__162612,G__162613));
})(),(function (){var G__162614 = cljs.core.constant$keyword$style;
var G__162615 = "padding-top:5;";
var G__162616 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__162614,G__162615,G__162616) : tailrecursion.hoplon.div.call(null,G__162614,G__162615,G__162616));
})()], 0));
};
var ui$style$img_content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162617__i = 0, G__162617__a = new Array(arguments.length -  0);
while (G__162617__i < G__162617__a.length) {G__162617__a[G__162617__i] = arguments[G__162617__i + 0]; ++G__162617__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162617__a,0);
} 
return ui$style$img_content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$img_content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$img_content_bubble.cljs$lang$applyTo = (function (arglist__162618){
var args__10403__auto__ = cljs.core.seq(arglist__162618);
return ui$style$img_content_bubble__delegate(args__10403__auto__);
});
ui$style$img_content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$img_content_bubble__delegate;
return ui$style$img_content_bubble;
})()
;
