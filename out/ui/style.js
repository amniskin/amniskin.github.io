// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.style');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.style.location = tailrecursion.javelin.formula((function (G__162444){
return G__162444;
})).call(null,ui.info.location);
ui.style.bg_color = "#5CBEFF";
/**
 * @param {...*} var_args
 */
ui.style.page = (function() { 
var ui$style$page__delegate = function (args__10403__auto__){
var vec__162461 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162461,(0),null);
var map__162462__$1 = ((cljs.core.seq_QMARK_(map__162462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162462):map__162462);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162462__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162461,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__162463 = cljs.core.constant$keyword$toggle;
var G__162464 = tailrecursion.javelin.formula(((function (G__162463,vec__162461,map__162462,map__162462__$1,name,kids){
return (function (G__162467,G__162468,G__162469){
var G__162470 = G__162468;
var G__162471 = G__162469;
return (G__162467.cljs$core$IFn$_invoke$arity$2 ? G__162467.cljs$core$IFn$_invoke$arity$2(G__162470,G__162471) : G__162467.call(null,G__162470,G__162471));
});})(G__162463,vec__162461,map__162462,map__162462__$1,name,kids))
).call(null,cljs.core._EQ_,ui.info.location,name);
var G__162465 = cljs.core.constant$keyword$scroll_DASH_to;
var G__162466 = tailrecursion.javelin.formula(((function (G__162463,G__162464,G__162465,vec__162461,map__162462,map__162462__$1,name,kids){
return (function (G__162473,G__162472,G__162474){
var G__162475 = G__162473;
var G__162476 = G__162474;
return (G__162472.cljs$core$IFn$_invoke$arity$2 ? G__162472.cljs$core$IFn$_invoke$arity$2(G__162475,G__162476) : G__162472.call(null,G__162475,G__162476));
});})(G__162463,G__162464,G__162465,vec__162461,map__162462,map__162462__$1,name,kids))
).call(null,ui.info.scroll_location,cljs.core._EQ_,name);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162463,G__162464,G__162465,G__162466) : tailrecursion.hoplon.div.call(null,G__162463,G__162464,G__162465,G__162466));
})(),kids);
};
var ui$style$page = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162477__i = 0, G__162477__a = new Array(arguments.length -  0);
while (G__162477__i < G__162477__a.length) {G__162477__a[G__162477__i] = arguments[G__162477__i + 0]; ++G__162477__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162477__a,0);
} 
return ui$style$page__delegate.call(this,args__10403__auto__);};
ui$style$page.cljs$lang$maxFixedArity = 0;
ui$style$page.cljs$lang$applyTo = (function (arglist__162478){
var args__10403__auto__ = cljs.core.seq(arglist__162478);
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
var vec__162482 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162482,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162482,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162483 = cljs.core.constant$keyword$class;
var G__162484 = "col-md-4 col-sm-4 hidden-xs";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162483,G__162484) : tailrecursion.hoplon.div.call(null,G__162483,G__162484));
})(),attr,kids);
};
var ui$style$sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162485__i = 0, G__162485__a = new Array(arguments.length -  0);
while (G__162485__i < G__162485__a.length) {G__162485__a[G__162485__i] = arguments[G__162485__i + 0]; ++G__162485__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162485__a,0);
} 
return ui$style$sidebar__delegate.call(this,args__10403__auto__);};
ui$style$sidebar.cljs$lang$maxFixedArity = 0;
ui$style$sidebar.cljs$lang$applyTo = (function (arglist__162486){
var args__10403__auto__ = cljs.core.seq(arglist__162486);
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
var vec__162492 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162492,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162492,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162493 = cljs.core.constant$keyword$class;
var G__162494 = "hidden-xs";
var G__162495 = cljs.core.constant$keyword$style;
var G__162496 = "height: 100px";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162493,G__162494,G__162495,G__162496) : tailrecursion.hoplon.div.call(null,G__162493,G__162494,G__162495,G__162496));
})(),attr,kids);
};
var ui$style$divider = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162497__i = 0, G__162497__a = new Array(arguments.length -  0);
while (G__162497__i < G__162497__a.length) {G__162497__a[G__162497__i] = arguments[G__162497__i + 0]; ++G__162497__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162497__a,0);
} 
return ui$style$divider__delegate.call(this,args__10403__auto__);};
ui$style$divider.cljs$lang$maxFixedArity = 0;
ui$style$divider.cljs$lang$applyTo = (function (arglist__162498){
var args__10403__auto__ = cljs.core.seq(arglist__162498);
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
var vec__162504 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162504,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162504,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162505 = cljs.core.constant$keyword$class;
var G__162506 = "col-md-8 col-sm-8 col-xs-12";
var G__162507 = cljs.core.constant$keyword$style;
var G__162508 = "padding-right-5%; padding-bottom-5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162505,G__162506,G__162507,G__162508) : tailrecursion.hoplon.div.call(null,G__162505,G__162506,G__162507,G__162508));
})(),attr,kids);
};
var ui$style$content_with_sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162509__i = 0, G__162509__a = new Array(arguments.length -  0);
while (G__162509__i < G__162509__a.length) {G__162509__a[G__162509__i] = arguments[G__162509__i + 0]; ++G__162509__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162509__a,0);
} 
return ui$style$content_with_sidebar__delegate.call(this,args__10403__auto__);};
ui$style$content_with_sidebar.cljs$lang$maxFixedArity = 0;
ui$style$content_with_sidebar.cljs$lang$applyTo = (function (arglist__162510){
var args__10403__auto__ = cljs.core.seq(arglist__162510);
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
var vec__162514 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162514,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162514,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162515 = cljs.core.constant$keyword$class;
var G__162516 = "container";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162515,G__162516) : tailrecursion.hoplon.div.call(null,G__162515,G__162516));
})(),attr,kids);
};
var ui$style$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162517__i = 0, G__162517__a = new Array(arguments.length -  0);
while (G__162517__i < G__162517__a.length) {G__162517__a[G__162517__i] = arguments[G__162517__i + 0]; ++G__162517__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162517__a,0);
} 
return ui$style$container__delegate.call(this,args__10403__auto__);};
ui$style$container.cljs$lang$maxFixedArity = 0;
ui$style$container.cljs$lang$applyTo = (function (arglist__162518){
var args__10403__auto__ = cljs.core.seq(arglist__162518);
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
var vec__162524 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162524,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162524,(1),null);
var G__162525 = cljs.core.constant$keyword$class;
var G__162526 = "glyphicon glyphicon--list-alt";
var G__162527 = cljs.core.constant$keyword$style;
var G__162528 = "color:black;";
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__162525,G__162526,G__162527,G__162528) : tailrecursion.hoplon.span.call(null,G__162525,G__162526,G__162527,G__162528));
};
var ui$style$glyph_list_black = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162529__i = 0, G__162529__a = new Array(arguments.length -  0);
while (G__162529__i < G__162529__a.length) {G__162529__a[G__162529__i] = arguments[G__162529__i + 0]; ++G__162529__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162529__a,0);
} 
return ui$style$glyph_list_black__delegate.call(this,args__10403__auto__);};
ui$style$glyph_list_black.cljs$lang$maxFixedArity = 0;
ui$style$glyph_list_black.cljs$lang$applyTo = (function (arglist__162530){
var args__10403__auto__ = cljs.core.seq(arglist__162530);
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
var vec__162536 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162536,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162536,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162537 = cljs.core.constant$keyword$class;
var G__162538 = "jumbotron";
var G__162539 = cljs.core.constant$keyword$style;
var G__162540 = "background-color: inherit;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__162537,G__162538,G__162539,G__162540) : tailrecursion.hoplon.div.call(null,G__162537,G__162538,G__162539,G__162540));
})(),attr,kids);
};
var ui$style$jumbotron = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162541__i = 0, G__162541__a = new Array(arguments.length -  0);
while (G__162541__i < G__162541__a.length) {G__162541__a[G__162541__i] = arguments[G__162541__i + 0]; ++G__162541__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162541__a,0);
} 
return ui$style$jumbotron__delegate.call(this,args__10403__auto__);};
ui$style$jumbotron.cljs$lang$maxFixedArity = 0;
ui$style$jumbotron.cljs$lang$applyTo = (function (arglist__162542){
var args__10403__auto__ = cljs.core.seq(arglist__162542);
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
var vec__162550 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162550,(0),null);
var map__162551__$1 = ((cljs.core.seq_QMARK_(map__162551))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162551):map__162551);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162551__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162550,(1),null);
var G__162552 = cljs.core.constant$keyword$style;
var G__162553 = [cljs.core.str("display:block; background-image:url('"),cljs.core.str(url),cljs.core.str("'); background-size:length:auto 100vh; background-repeat: no-repeat;background-attachment:fixed;")].join('');
var G__162554 = cljs.core.constant$keyword$on_DASH_screen_STAR_;
var G__162555 = ((function (G__162552,G__162553,G__162554,vec__162550,map__162551,map__162551__$1,url,kids){
return (function (p1__4754_SHARP_,p2__4755_SHARP_){
return p1__4754_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__4755_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__162552,G__162553,G__162554,vec__162550,map__162551,map__162551__$1,url,kids))
;
var G__162556 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__162552,G__162553,G__162554,G__162555,G__162556) : tailrecursion.hoplon.div.call(null,G__162552,G__162553,G__162554,G__162555,G__162556));
};
var ui$style$background = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162557__i = 0, G__162557__a = new Array(arguments.length -  0);
while (G__162557__i < G__162557__a.length) {G__162557__a[G__162557__i] = arguments[G__162557__i + 0]; ++G__162557__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162557__a,0);
} 
return ui$style$background__delegate.call(this,args__10403__auto__);};
ui$style$background.cljs$lang$maxFixedArity = 0;
ui$style$background.cljs$lang$applyTo = (function (arglist__162558){
var args__10403__auto__ = cljs.core.seq(arglist__162558);
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
var vec__162569 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162569,(0),null);
var map__162570__$1 = ((cljs.core.seq_QMARK_(map__162570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162570):map__162570);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162570__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162569,(1),null);
return ui.style.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$url,url,ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__162571 = cljs.core.constant$keyword$style;
var G__162572 = "padding-top:20%;padding-bottom:20%;";
var G__162573 = cljs.core.constant$keyword$class;
var G__162574 = "col-sm-6 col-sm-offset-3 text-center";
var G__162575 = (function (){var G__162576 = cljs.core.constant$keyword$style;
var G__162577 = "color: #ffffff; padding:20px;background-color:rgba(5,5,5,.8)";
var G__162578 = kids;
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__162576,G__162577,G__162578) : tailrecursion.hoplon.h2.call(null,G__162576,G__162577,G__162578));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__162571,G__162572,G__162573,G__162574,G__162575) : tailrecursion.hoplon.div.call(null,G__162571,G__162572,G__162573,G__162574,G__162575));
})()], 0))], 0));
};
var ui$style$background_section = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162579__i = 0, G__162579__a = new Array(arguments.length -  0);
while (G__162579__i < G__162579__a.length) {G__162579__a[G__162579__i] = arguments[G__162579__i + 0]; ++G__162579__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162579__a,0);
} 
return ui$style$background_section__delegate.call(this,args__10403__auto__);};
ui$style$background_section.cljs$lang$maxFixedArity = 0;
ui$style$background_section.cljs$lang$applyTo = (function (arglist__162580){
var args__10403__auto__ = cljs.core.seq(arglist__162580);
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
var vec__162584 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162584,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162584,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162585 = cljs.core.constant$keyword$class;
var G__162586 = "row";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162585,G__162586) : tailrecursion.hoplon.div.call(null,G__162585,G__162586));
})(),attr,kids);
};
var ui$style$row = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162587__i = 0, G__162587__a = new Array(arguments.length -  0);
while (G__162587__i < G__162587__a.length) {G__162587__a[G__162587__i] = arguments[G__162587__i + 0]; ++G__162587__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162587__a,0);
} 
return ui$style$row__delegate.call(this,args__10403__auto__);};
ui$style$row.cljs$lang$maxFixedArity = 0;
ui$style$row.cljs$lang$applyTo = (function (arglist__162588){
var args__10403__auto__ = cljs.core.seq(arglist__162588);
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
var vec__162592 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162592,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162592,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__162593 = cljs.core.constant$keyword$class;
var G__162594 = "well";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__162593,G__162594) : tailrecursion.hoplon.div.call(null,G__162593,G__162594));
})(),attr,kids);
};
var ui$style$well = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162595__i = 0, G__162595__a = new Array(arguments.length -  0);
while (G__162595__i < G__162595__a.length) {G__162595__a[G__162595__i] = arguments[G__162595__i + 0]; ++G__162595__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162595__a,0);
} 
return ui$style$well__delegate.call(this,args__10403__auto__);};
ui$style$well.cljs$lang$maxFixedArity = 0;
ui$style$well.cljs$lang$applyTo = (function (arglist__162596){
var args__10403__auto__ = cljs.core.seq(arglist__162596);
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
var vec__162601 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162601,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162601,(1),null);
var G__162602 = cljs.core.constant$keyword$class;
var G__162603 = "col-md-4 col-sm-4 col-xs-12";
var G__162604 = ui.style.well.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__162602,G__162603,G__162604) : tailrecursion.hoplon.div.call(null,G__162602,G__162603,G__162604));
};
var ui$style$content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162605__i = 0, G__162605__a = new Array(arguments.length -  0);
while (G__162605__i < G__162605__a.length) {G__162605__a[G__162605__i] = arguments[G__162605__i + 0]; ++G__162605__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162605__a,0);
} 
return ui$style$content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$content_bubble.cljs$lang$applyTo = (function (arglist__162606){
var args__10403__auto__ = cljs.core.seq(arglist__162606);
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
var vec__162616 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__162617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162616,(0),null);
var map__162617__$1 = ((cljs.core.seq_QMARK_(map__162617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__162617):map__162617);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__162617__$1,cljs.core.constant$keyword$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162616,(1),null);
return ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__162618 = cljs.core.constant$keyword$src;
var G__162619 = src;
var G__162620 = cljs.core.constant$keyword$class;
var G__162621 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__162618,G__162619,G__162620,G__162621) : tailrecursion.hoplon.img.call(null,G__162618,G__162619,G__162620,G__162621));
})(),(function (){var G__162622 = cljs.core.constant$keyword$style;
var G__162623 = "padding-top:5;";
var G__162624 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__162622,G__162623,G__162624) : tailrecursion.hoplon.div.call(null,G__162622,G__162623,G__162624));
})()], 0));
};
var ui$style$img_content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__162625__i = 0, G__162625__a = new Array(arguments.length -  0);
while (G__162625__i < G__162625__a.length) {G__162625__a[G__162625__i] = arguments[G__162625__i + 0]; ++G__162625__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__162625__a,0);
} 
return ui$style$img_content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$img_content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$img_content_bubble.cljs$lang$applyTo = (function (arglist__162626){
var args__10403__auto__ = cljs.core.seq(arglist__162626);
return ui$style$img_content_bubble__delegate(args__10403__auto__);
});
ui$style$img_content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$img_content_bubble__delegate;
return ui$style$img_content_bubble;
})()
;
