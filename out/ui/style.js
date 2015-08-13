// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.style');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.style.location = tailrecursion.javelin.formula((function (G__167254){
return G__167254;
})).call(null,ui.info.location);
ui.style.bg_color = "#5CBEFF";
/**
 * @param {...*} var_args
 */
ui.style.page = (function() { 
var ui$style$page__delegate = function (args__10403__auto__){
var vec__167271 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__167272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167271,(0),null);
var map__167272__$1 = ((cljs.core.seq_QMARK_(map__167272))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__167272):map__167272);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__167272__$1,cljs.core.constant$keyword$name);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167271,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__167273 = cljs.core.constant$keyword$toggle;
var G__167274 = tailrecursion.javelin.formula(((function (G__167273,vec__167271,map__167272,map__167272__$1,name,kids){
return (function (G__167277,G__167278,G__167279){
var G__167280 = G__167278;
var G__167281 = G__167279;
return (G__167277.cljs$core$IFn$_invoke$arity$2 ? G__167277.cljs$core$IFn$_invoke$arity$2(G__167280,G__167281) : G__167277.call(null,G__167280,G__167281));
});})(G__167273,vec__167271,map__167272,map__167272__$1,name,kids))
).call(null,cljs.core._EQ_,ui.info.location,name);
var G__167275 = cljs.core.constant$keyword$scroll_DASH_to;
var G__167276 = tailrecursion.javelin.formula(((function (G__167273,G__167274,G__167275,vec__167271,map__167272,map__167272__$1,name,kids){
return (function (G__167283,G__167282,G__167284){
var G__167285 = G__167283;
var G__167286 = G__167284;
return (G__167282.cljs$core$IFn$_invoke$arity$2 ? G__167282.cljs$core$IFn$_invoke$arity$2(G__167285,G__167286) : G__167282.call(null,G__167285,G__167286));
});})(G__167273,G__167274,G__167275,vec__167271,map__167272,map__167272__$1,name,kids))
).call(null,ui.info.scroll_location,cljs.core._EQ_,name);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__167273,G__167274,G__167275,G__167276) : tailrecursion.hoplon.div.call(null,G__167273,G__167274,G__167275,G__167276));
})(),kids);
};
var ui$style$page = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167287__i = 0, G__167287__a = new Array(arguments.length -  0);
while (G__167287__i < G__167287__a.length) {G__167287__a[G__167287__i] = arguments[G__167287__i + 0]; ++G__167287__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167287__a,0);
} 
return ui$style$page__delegate.call(this,args__10403__auto__);};
ui$style$page.cljs$lang$maxFixedArity = 0;
ui$style$page.cljs$lang$applyTo = (function (arglist__167288){
var args__10403__auto__ = cljs.core.seq(arglist__167288);
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
var vec__167292 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167292,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167292,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167293 = cljs.core.constant$keyword$class;
var G__167294 = "col-md-4 col-sm-4 hidden-xs";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__167293,G__167294) : tailrecursion.hoplon.div.call(null,G__167293,G__167294));
})(),attr,kids);
};
var ui$style$sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167295__i = 0, G__167295__a = new Array(arguments.length -  0);
while (G__167295__i < G__167295__a.length) {G__167295__a[G__167295__i] = arguments[G__167295__i + 0]; ++G__167295__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167295__a,0);
} 
return ui$style$sidebar__delegate.call(this,args__10403__auto__);};
ui$style$sidebar.cljs$lang$maxFixedArity = 0;
ui$style$sidebar.cljs$lang$applyTo = (function (arglist__167296){
var args__10403__auto__ = cljs.core.seq(arglist__167296);
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
var vec__167302 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167302,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167302,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167303 = cljs.core.constant$keyword$class;
var G__167304 = "hidden-xs";
var G__167305 = cljs.core.constant$keyword$style;
var G__167306 = "height: 100px";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__167303,G__167304,G__167305,G__167306) : tailrecursion.hoplon.div.call(null,G__167303,G__167304,G__167305,G__167306));
})(),attr,kids);
};
var ui$style$divider = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167307__i = 0, G__167307__a = new Array(arguments.length -  0);
while (G__167307__i < G__167307__a.length) {G__167307__a[G__167307__i] = arguments[G__167307__i + 0]; ++G__167307__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167307__a,0);
} 
return ui$style$divider__delegate.call(this,args__10403__auto__);};
ui$style$divider.cljs$lang$maxFixedArity = 0;
ui$style$divider.cljs$lang$applyTo = (function (arglist__167308){
var args__10403__auto__ = cljs.core.seq(arglist__167308);
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
var vec__167314 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167314,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167314,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167315 = cljs.core.constant$keyword$class;
var G__167316 = "col-md-8 col-sm-8 col-xs-12";
var G__167317 = cljs.core.constant$keyword$style;
var G__167318 = "padding-right-5%; padding-bottom-5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__167315,G__167316,G__167317,G__167318) : tailrecursion.hoplon.div.call(null,G__167315,G__167316,G__167317,G__167318));
})(),attr,kids);
};
var ui$style$content_with_sidebar = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167319__i = 0, G__167319__a = new Array(arguments.length -  0);
while (G__167319__i < G__167319__a.length) {G__167319__a[G__167319__i] = arguments[G__167319__i + 0]; ++G__167319__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167319__a,0);
} 
return ui$style$content_with_sidebar__delegate.call(this,args__10403__auto__);};
ui$style$content_with_sidebar.cljs$lang$maxFixedArity = 0;
ui$style$content_with_sidebar.cljs$lang$applyTo = (function (arglist__167320){
var args__10403__auto__ = cljs.core.seq(arglist__167320);
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
var vec__167324 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167324,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167324,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167325 = cljs.core.constant$keyword$class;
var G__167326 = "container";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__167325,G__167326) : tailrecursion.hoplon.div.call(null,G__167325,G__167326));
})(),attr,kids);
};
var ui$style$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167327__i = 0, G__167327__a = new Array(arguments.length -  0);
while (G__167327__i < G__167327__a.length) {G__167327__a[G__167327__i] = arguments[G__167327__i + 0]; ++G__167327__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167327__a,0);
} 
return ui$style$container__delegate.call(this,args__10403__auto__);};
ui$style$container.cljs$lang$maxFixedArity = 0;
ui$style$container.cljs$lang$applyTo = (function (arglist__167328){
var args__10403__auto__ = cljs.core.seq(arglist__167328);
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
var vec__167334 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167334,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167334,(1),null);
var G__167335 = cljs.core.constant$keyword$class;
var G__167336 = "glyphicon glyphicon--list-alt";
var G__167337 = cljs.core.constant$keyword$style;
var G__167338 = "color:black;";
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__167335,G__167336,G__167337,G__167338) : tailrecursion.hoplon.span.call(null,G__167335,G__167336,G__167337,G__167338));
};
var ui$style$glyph_list_black = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167339__i = 0, G__167339__a = new Array(arguments.length -  0);
while (G__167339__i < G__167339__a.length) {G__167339__a[G__167339__i] = arguments[G__167339__i + 0]; ++G__167339__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167339__a,0);
} 
return ui$style$glyph_list_black__delegate.call(this,args__10403__auto__);};
ui$style$glyph_list_black.cljs$lang$maxFixedArity = 0;
ui$style$glyph_list_black.cljs$lang$applyTo = (function (arglist__167340){
var args__10403__auto__ = cljs.core.seq(arglist__167340);
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
var vec__167346 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167346,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167346,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167347 = cljs.core.constant$keyword$class;
var G__167348 = "jumbotron";
var G__167349 = cljs.core.constant$keyword$style;
var G__167350 = "background-color: inherit;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__167347,G__167348,G__167349,G__167350) : tailrecursion.hoplon.div.call(null,G__167347,G__167348,G__167349,G__167350));
})(),attr,kids);
};
var ui$style$jumbotron = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167351__i = 0, G__167351__a = new Array(arguments.length -  0);
while (G__167351__i < G__167351__a.length) {G__167351__a[G__167351__i] = arguments[G__167351__i + 0]; ++G__167351__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167351__a,0);
} 
return ui$style$jumbotron__delegate.call(this,args__10403__auto__);};
ui$style$jumbotron.cljs$lang$maxFixedArity = 0;
ui$style$jumbotron.cljs$lang$applyTo = (function (arglist__167352){
var args__10403__auto__ = cljs.core.seq(arglist__167352);
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
var vec__167360 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__167361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167360,(0),null);
var map__167361__$1 = ((cljs.core.seq_QMARK_(map__167361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__167361):map__167361);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__167361__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167360,(1),null);
var G__167362 = cljs.core.constant$keyword$style;
var G__167363 = [cljs.core.str("display:block; background-image:url('"),cljs.core.str(url),cljs.core.str("'); background-size:length:auto 100vh; background-repeat: no-repeat;background-attachment:fixed;")].join('');
var G__167364 = cljs.core.constant$keyword$on_DASH_screen_STAR_;
var G__167365 = ((function (G__167362,G__167363,G__167364,vec__167360,map__167361,map__167361__$1,url,kids){
return (function (p1__2444_SHARP_,p2__2445_SHARP_){
return p1__2444_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__2445_SHARP_)),cljs.core.str("+ %")].join('');
});})(G__167362,G__167363,G__167364,vec__167360,map__167361,map__167361__$1,url,kids))
;
var G__167366 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__167362,G__167363,G__167364,G__167365,G__167366) : tailrecursion.hoplon.div.call(null,G__167362,G__167363,G__167364,G__167365,G__167366));
};
var ui$style$background = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167367__i = 0, G__167367__a = new Array(arguments.length -  0);
while (G__167367__i < G__167367__a.length) {G__167367__a[G__167367__i] = arguments[G__167367__i + 0]; ++G__167367__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167367__a,0);
} 
return ui$style$background__delegate.call(this,args__10403__auto__);};
ui$style$background.cljs$lang$maxFixedArity = 0;
ui$style$background.cljs$lang$applyTo = (function (arglist__167368){
var args__10403__auto__ = cljs.core.seq(arglist__167368);
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
var vec__167379 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__167380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167379,(0),null);
var map__167380__$1 = ((cljs.core.seq_QMARK_(map__167380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__167380):map__167380);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__167380__$1,cljs.core.constant$keyword$url);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167379,(1),null);
return ui.style.background.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$url,url,ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__167381 = cljs.core.constant$keyword$style;
var G__167382 = "padding-top:20%;padding-bottom:20%;";
var G__167383 = cljs.core.constant$keyword$class;
var G__167384 = "col-sm-6 col-sm-offset-3 text-center";
var G__167385 = (function (){var G__167386 = cljs.core.constant$keyword$style;
var G__167387 = "color: #ffffff; padding:20px;background-color:rgba(5,5,5,.8)";
var G__167388 = kids;
return (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$3(G__167386,G__167387,G__167388) : tailrecursion.hoplon.h2.call(null,G__167386,G__167387,G__167388));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(G__167381,G__167382,G__167383,G__167384,G__167385) : tailrecursion.hoplon.div.call(null,G__167381,G__167382,G__167383,G__167384,G__167385));
})()], 0))], 0));
};
var ui$style$background_section = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167389__i = 0, G__167389__a = new Array(arguments.length -  0);
while (G__167389__i < G__167389__a.length) {G__167389__a[G__167389__i] = arguments[G__167389__i + 0]; ++G__167389__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167389__a,0);
} 
return ui$style$background_section__delegate.call(this,args__10403__auto__);};
ui$style$background_section.cljs$lang$maxFixedArity = 0;
ui$style$background_section.cljs$lang$applyTo = (function (arglist__167390){
var args__10403__auto__ = cljs.core.seq(arglist__167390);
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
var vec__167394 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167394,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167394,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167395 = cljs.core.constant$keyword$class;
var G__167396 = "row";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__167395,G__167396) : tailrecursion.hoplon.div.call(null,G__167395,G__167396));
})(),attr,kids);
};
var ui$style$row = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167397__i = 0, G__167397__a = new Array(arguments.length -  0);
while (G__167397__i < G__167397__a.length) {G__167397__a[G__167397__i] = arguments[G__167397__i + 0]; ++G__167397__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167397__a,0);
} 
return ui$style$row__delegate.call(this,args__10403__auto__);};
ui$style$row.cljs$lang$maxFixedArity = 0;
ui$style$row.cljs$lang$applyTo = (function (arglist__167398){
var args__10403__auto__ = cljs.core.seq(arglist__167398);
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
var vec__167402 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167402,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167402,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__167403 = cljs.core.constant$keyword$class;
var G__167404 = "well";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__167403,G__167404) : tailrecursion.hoplon.div.call(null,G__167403,G__167404));
})(),attr,kids);
};
var ui$style$well = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167405__i = 0, G__167405__a = new Array(arguments.length -  0);
while (G__167405__i < G__167405__a.length) {G__167405__a[G__167405__i] = arguments[G__167405__i + 0]; ++G__167405__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167405__a,0);
} 
return ui$style$well__delegate.call(this,args__10403__auto__);};
ui$style$well.cljs$lang$maxFixedArity = 0;
ui$style$well.cljs$lang$applyTo = (function (arglist__167406){
var args__10403__auto__ = cljs.core.seq(arglist__167406);
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
var vec__167411 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167411,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167411,(1),null);
var G__167412 = cljs.core.constant$keyword$class;
var G__167413 = "col-md-4 col-sm-4 col-xs-12";
var G__167414 = ui.style.well.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attr,kids], 0));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__167412,G__167413,G__167414) : tailrecursion.hoplon.div.call(null,G__167412,G__167413,G__167414));
};
var ui$style$content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167415__i = 0, G__167415__a = new Array(arguments.length -  0);
while (G__167415__i < G__167415__a.length) {G__167415__a[G__167415__i] = arguments[G__167415__i + 0]; ++G__167415__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167415__a,0);
} 
return ui$style$content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$content_bubble.cljs$lang$applyTo = (function (arglist__167416){
var args__10403__auto__ = cljs.core.seq(arglist__167416);
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
var vec__167426 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__167427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167426,(0),null);
var map__167427__$1 = ((cljs.core.seq_QMARK_(map__167427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__167427):map__167427);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__167427__$1,cljs.core.constant$keyword$src);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167426,(1),null);
return ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__167428 = cljs.core.constant$keyword$src;
var G__167429 = src;
var G__167430 = cljs.core.constant$keyword$class;
var G__167431 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__167428,G__167429,G__167430,G__167431) : tailrecursion.hoplon.img.call(null,G__167428,G__167429,G__167430,G__167431));
})(),(function (){var G__167432 = cljs.core.constant$keyword$style;
var G__167433 = "padding-top:5;";
var G__167434 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__167432,G__167433,G__167434) : tailrecursion.hoplon.div.call(null,G__167432,G__167433,G__167434));
})()], 0));
};
var ui$style$img_content_bubble = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__167435__i = 0, G__167435__a = new Array(arguments.length -  0);
while (G__167435__i < G__167435__a.length) {G__167435__a[G__167435__i] = arguments[G__167435__i + 0]; ++G__167435__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__167435__a,0);
} 
return ui$style$img_content_bubble__delegate.call(this,args__10403__auto__);};
ui$style$img_content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$img_content_bubble.cljs$lang$applyTo = (function (arglist__167436){
var args__10403__auto__ = cljs.core.seq(arglist__167436);
return ui$style$img_content_bubble__delegate(args__10403__auto__);
});
ui$style$img_content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$img_content_bubble__delegate;
return ui$style$img_content_bubble;
})()
;
