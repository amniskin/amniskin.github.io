// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.book');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book.location = tailrecursion.javelin.formula((function (G__145347){
return G__145347;
})).call(null,ui.info.location);
ui.book._STAR_book_data_STAR_ = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);
ui.book.scroll_location = tailrecursion.javelin.cell(null);
ui.book.scroll_map = tailrecursion.javelin.formula((function (G__145351,G__145350,G__145356,G__145357,G__145353,G__145354,G__145355,G__145352){
var G__145358 = cljs.core.PersistentArrayMap.EMPTY;
var G__145359 = (function (){var G__145360 = ((function (G__145358){
return (function (p__145348){
var vec__145349 = p__145348;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145349,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__145362 = k;
return (G__145352.cljs$core$IFn$_invoke$arity$1 ? G__145352.cljs$core$IFn$_invoke$arity$1(G__145362) : G__145352.call(null,G__145362));
})(),(function (){var G__145363 = v;
return (G__145353.cljs$core$IFn$_invoke$arity$1 ? G__145353.cljs$core$IFn$_invoke$arity$1(G__145363) : G__145353.call(null,G__145363));
})()], null);
});})(G__145358))
;
var G__145361 = (function (){var G__145364 = (1);
var G__145365 = (function (){var G__145366 = (2);
var G__145367 = (function (){var G__145368 = G__145357;
var G__145369 = /\//;
return (G__145356.cljs$core$IFn$_invoke$arity$2 ? G__145356.cljs$core$IFn$_invoke$arity$2(G__145368,G__145369) : G__145356.call(null,G__145368,G__145369));
})();
return (G__145355.cljs$core$IFn$_invoke$arity$2 ? G__145355.cljs$core$IFn$_invoke$arity$2(G__145366,G__145367) : G__145355.call(null,G__145366,G__145367));
})();
return (G__145354.cljs$core$IFn$_invoke$arity$2 ? G__145354.cljs$core$IFn$_invoke$arity$2(G__145364,G__145365) : G__145354.call(null,G__145364,G__145365));
})();
return (G__145351.cljs$core$IFn$_invoke$arity$2 ? G__145351.cljs$core$IFn$_invoke$arity$2(G__145360,G__145361) : G__145351.call(null,G__145360,G__145361));
})();
return (G__145350.cljs$core$IFn$_invoke$arity$2 ? G__145350.cljs$core$IFn$_invoke$arity$2(G__145358,G__145359) : G__145350.call(null,G__145358,G__145359));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,ui.book.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
ui.book.make_link = (function ui$book$make_link(){
var G__145371 = arguments.length;
switch (G__145371) {
case 1:
return ui.book.make_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ui.book.make_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ui.book.make_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return ui.book.make_link.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145372 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145372) : cljs.core.deref.call(null,G__145372));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$2 = (function (ch,sect){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145373 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145373) : cljs.core.deref.call(null,G__145373));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$3 = (function (ch,sect,sub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145374 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145374) : cljs.core.deref.call(null,G__145374));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$4 = (function (ch,sect,sub,ssub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145375 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145375) : cljs.core.deref.call(null,G__145375));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/ssub/"),cljs.core.str(ssub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$lang$maxFixedArity = 4;
ui.book.get_chapters = (function ui$book$get_chapters(data){
return cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data);
});
ui.book.get_sects = (function ui$book$get_sects(data,ch){
return cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_subsects = (function ui$book$get_subsects(data,ch,sect){
return cljs.core.constant$keyword$sub.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect));
});
ui.book.get_ssubs = (function ui$book$get_ssubs(data,ch,sect,sub){
return cljs.core.constant$keyword$ssub.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$sub.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect)).call(null,sub));
});
ui.book.get_exs = (function ui$book$get_exs(data,ch){
return cljs.core.constant$keyword$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_figs = (function ui$book$get_figs(data,ch){
return cljs.core.constant$keyword$fig.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_footnotes = (function ui$book$get_footnotes(data,ch){
return cljs.core.constant$keyword$footnote.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
/**
 * @param {...*} var_args
 */
ui.book.part = (function() { 
var ui$book$part__delegate = function (args__10403__auto__){
var vec__145398 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145398,(0),null);
var map__145399__$1 = ((cljs.core.seq_QMARK_(map__145399))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145399):map__145399);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145399__$1,cljs.core.constant$keyword$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145399__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145399__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145398,(1),null);
var G__145400 = cljs.core.constant$keyword$scroll_DASH_to;
var G__145401 = tailrecursion.javelin.formula(((function (G__145400,vec__145398,map__145399,map__145399__$1,size,link,title,kids){
return (function (G__145406,G__145407,G__145408){
var G__145409 = G__145407;
var G__145410 = G__145408;
return (G__145406.cljs$core$IFn$_invoke$arity$2 ? G__145406.cljs$core$IFn$_invoke$arity$2(G__145409,G__145410) : G__145406.call(null,G__145409,G__145410));
});})(G__145400,vec__145398,map__145399,map__145399__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,ui.info.route_STAR_,link);
var G__145402 = cljs.core.constant$keyword$at_DASH_top;
var G__145403 = ((function (G__145400,G__145401,G__145402,vec__145398,map__145399,map__145399__$1,size,link,title,kids){
return (function (){
var G__145411 = ui.book.scroll_location;
var G__145412 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145411,G__145412) : cljs.core.reset_BANG_.call(null,G__145411,G__145412));
});})(G__145400,G__145401,G__145402,vec__145398,map__145399,map__145399__$1,size,link,title,kids))
;
var G__145404 = (function (){var G__145413 = cljs.core.constant$keyword$class;
var G__145414 = "text-left";
var G__145415 = title;
return (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(G__145413,G__145414,G__145415) : size.call(null,G__145413,G__145414,G__145415));
})();
var G__145405 = (function (){var G__145416 = cljs.core.constant$keyword$class;
var G__145417 = "";
var G__145418 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__145416,G__145417,G__145418) : tailrecursion.hoplon.div.call(null,G__145416,G__145417,G__145418));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__145400,G__145401,G__145402,G__145403,G__145404,G__145405) : tailrecursion.hoplon.div.call(null,G__145400,G__145401,G__145402,G__145403,G__145404,G__145405));
};
var ui$book$part = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145419__i = 0, G__145419__a = new Array(arguments.length -  0);
while (G__145419__i < G__145419__a.length) {G__145419__a[G__145419__i] = arguments[G__145419__i + 0]; ++G__145419__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145419__a,0);
} 
return ui$book$part__delegate.call(this,args__10403__auto__);};
ui$book$part.cljs$lang$maxFixedArity = 0;
ui$book$part.cljs$lang$applyTo = (function (arglist__145420){
var args__10403__auto__ = cljs.core.seq(arglist__145420);
return ui$book$part__delegate(args__10403__auto__);
});
ui$book$part.cljs$core$IFn$_invoke$arity$variadic = ui$book$part__delegate;
return ui$book$part;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.container = (function() { 
var ui$book$container__delegate = function (args__10403__auto__){
var vec__145426 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145426,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145426,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145427 = cljs.core.constant$keyword$class;
var G__145428 = "text-justify";
var G__145429 = cljs.core.constant$keyword$style;
var G__145430 = "padding-left:10%; padding-right:5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145427,G__145428,G__145429,G__145430) : tailrecursion.hoplon.div.call(null,G__145427,G__145428,G__145429,G__145430));
})(),attr,kids);
};
var ui$book$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145431__i = 0, G__145431__a = new Array(arguments.length -  0);
while (G__145431__i < G__145431__a.length) {G__145431__a[G__145431__i] = arguments[G__145431__i + 0]; ++G__145431__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145431__a,0);
} 
return ui$book$container__delegate.call(this,args__10403__auto__);};
ui$book$container.cljs$lang$maxFixedArity = 0;
ui$book$container.cljs$lang$applyTo = (function (arglist__145432){
var args__10403__auto__ = cljs.core.seq(arglist__145432);
return ui$book$container__delegate(args__10403__auto__);
});
ui$book$container.cljs$core$IFn$_invoke$arity$variadic = ui$book$container__delegate;
return ui$book$container;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.about = (function() { 
var ui$book$about__delegate = function (args__10403__auto__){
var vec__145460 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145460,(0),null);
var map__145461__$1 = ((cljs.core.seq_QMARK_(map__145461))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145461):map__145461);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145461__$1,cljs.core.constant$keyword$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145461__$1,cljs.core.constant$keyword$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145460,(1),null);
var G__145462 = cljs.core.constant$keyword$scroll_DASH_to;
var G__145463 = tailrecursion.javelin.formula(((function (G__145462,vec__145460,map__145461,map__145461__$1,title,tagline,kids){
return (function (G__145471,G__145472,G__145473){
var G__145474 = (function (){var G__145476 = "#!/home/";
return (G__145472.cljs$core$IFn$_invoke$arity$1 ? G__145472.cljs$core$IFn$_invoke$arity$1(G__145476) : G__145472.call(null,G__145476));
})();
var G__145475 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__145473)),cljs.core.str("/")].join('');
return (G__145471.cljs$core$IFn$_invoke$arity$2 ? G__145471.cljs$core$IFn$_invoke$arity$2(G__145474,G__145475) : G__145471.call(null,G__145474,G__145475));
});})(G__145462,vec__145460,map__145461,map__145461__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,tailrecursion.hoplon.route_cell,ui.book._STAR_book_data_STAR_);
var G__145464 = cljs.core.constant$keyword$at_DASH_top;
var G__145465 = ((function (G__145462,G__145463,G__145464,vec__145460,map__145461,map__145461__$1,title,tagline,kids){
return (function (){
var G__145477 = ui.book.scroll_location;
var G__145478 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145479 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145479) : cljs.core.deref.call(null,G__145479));
})())),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145477,G__145478) : cljs.core.reset_BANG_.call(null,G__145477,G__145478));
});})(G__145462,G__145463,G__145464,vec__145460,map__145461,map__145461__$1,title,tagline,kids))
;
var G__145466 = cljs.core.constant$keyword$class;
var G__145467 = "text-justify";
var G__145468 = (function (){var G__145480 = cljs.core.constant$keyword$class;
var G__145481 = "text-left";
var G__145482 = cljs.core.constant$keyword$title.cljs$core$IFn$_invoke$arity$1((function (){var G__145483 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145483) : cljs.core.deref.call(null,G__145483));
})());
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__145480,G__145481,G__145482) : tailrecursion.hoplon.h1.call(null,G__145480,G__145481,G__145482));
})();
var G__145469 = (function (){var G__145484 = cljs.core.constant$keyword$tagline.cljs$core$IFn$_invoke$arity$1((function (){var G__145485 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145485) : cljs.core.deref.call(null,G__145485));
})());
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145484) : tailrecursion.hoplon.h3.call(null,G__145484));
})();
var G__145470 = (function (){var G__145486 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__145486) : tailrecursion.hoplon.div.call(null,G__145486));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__145462,G__145463,G__145464,G__145465,G__145466,G__145467,G__145468,G__145469,G__145470) : tailrecursion.hoplon.div.call(null,G__145462,G__145463,G__145464,G__145465,G__145466,G__145467,G__145468,G__145469,G__145470));
};
var ui$book$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145487__i = 0, G__145487__a = new Array(arguments.length -  0);
while (G__145487__i < G__145487__a.length) {G__145487__a[G__145487__i] = arguments[G__145487__i + 0]; ++G__145487__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145487__a,0);
} 
return ui$book$about__delegate.call(this,args__10403__auto__);};
ui$book$about.cljs$lang$maxFixedArity = 0;
ui$book$about.cljs$lang$applyTo = (function (arglist__145488){
var args__10403__auto__ = cljs.core.seq(arglist__145488);
return ui$book$about__delegate(args__10403__auto__);
});
ui$book$about.cljs$core$IFn$_invoke$arity$variadic = ui$book$about__delegate;
return ui$book$about;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.chapter = (function() { 
var ui$book$chapter__delegate = function (args__10403__auto__){
var vec__145492 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145492,(0),null);
var map__145493__$1 = ((cljs.core.seq_QMARK_(map__145493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145493):map__145493);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145493__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145492,(1),null);
var ch = (cljs.core.count(ui.book.get_chapters((function (){var G__145494 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145494) : cljs.core.deref.call(null,G__145494));
})())) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__145492,map__145493,map__145493__$1,title,kids){
return (function (p1__2924_SHARP_){
return cljs.core.assoc_in(p1__2924_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__145492,map__145493,map__145493__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h1,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145495__i = 0, G__145495__a = new Array(arguments.length -  0);
while (G__145495__i < G__145495__a.length) {G__145495__a[G__145495__i] = arguments[G__145495__i + 0]; ++G__145495__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145495__a,0);
} 
return ui$book$chapter__delegate.call(this,args__10403__auto__);};
ui$book$chapter.cljs$lang$maxFixedArity = 0;
ui$book$chapter.cljs$lang$applyTo = (function (arglist__145496){
var args__10403__auto__ = cljs.core.seq(arglist__145496);
return ui$book$chapter__delegate(args__10403__auto__);
});
ui$book$chapter.cljs$core$IFn$_invoke$arity$variadic = ui$book$chapter__delegate;
return ui$book$chapter;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.sect = (function() { 
var ui$book$sect__delegate = function (args__10403__auto__){
var vec__145501 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145501,(0),null);
var map__145502__$1 = ((cljs.core.seq_QMARK_(map__145502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145502):map__145502);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145502__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145501,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145503 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145503) : cljs.core.deref.call(null,G__145503));
})()));
var sect__$1 = (cljs.core.count(ui.book.get_sects((function (){var G__145504 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145504) : cljs.core.deref.call(null,G__145504));
})(),ch)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__145501,map__145502,map__145502__$1,title,kids){
return (function (p1__2925_SHARP_){
return cljs.core.assoc_in(p1__2925_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__145501,map__145502,map__145502__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h2,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145505__i = 0, G__145505__a = new Array(arguments.length -  0);
while (G__145505__i < G__145505__a.length) {G__145505__a[G__145505__i] = arguments[G__145505__i + 0]; ++G__145505__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145505__a,0);
} 
return ui$book$sect__delegate.call(this,args__10403__auto__);};
ui$book$sect.cljs$lang$maxFixedArity = 0;
ui$book$sect.cljs$lang$applyTo = (function (arglist__145506){
var args__10403__auto__ = cljs.core.seq(arglist__145506);
return ui$book$sect__delegate(args__10403__auto__);
});
ui$book$sect.cljs$core$IFn$_invoke$arity$variadic = ui$book$sect__delegate;
return ui$book$sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.subsect = (function() { 
var ui$book$subsect__delegate = function (args__10403__auto__){
var vec__145512 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145512,(0),null);
var map__145513__$1 = ((cljs.core.seq_QMARK_(map__145513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145513):map__145513);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145513__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145512,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145514 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145514) : cljs.core.deref.call(null,G__145514));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145515 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145515) : cljs.core.deref.call(null,G__145515));
})(),ch));
var sub = (cljs.core.count(ui.book.get_subsects((function (){var G__145516 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145516) : cljs.core.deref.call(null,G__145516));
})(),ch,sect)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__145512,map__145513,map__145513__$1,title,kids){
return (function (p1__2926_SHARP_){
return cljs.core.assoc_in(p1__2926_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__145512,map__145513,map__145513__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145517__i = 0, G__145517__a = new Array(arguments.length -  0);
while (G__145517__i < G__145517__a.length) {G__145517__a[G__145517__i] = arguments[G__145517__i + 0]; ++G__145517__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145517__a,0);
} 
return ui$book$subsect__delegate.call(this,args__10403__auto__);};
ui$book$subsect.cljs$lang$maxFixedArity = 0;
ui$book$subsect.cljs$lang$applyTo = (function (arglist__145518){
var args__10403__auto__ = cljs.core.seq(arglist__145518);
return ui$book$subsect__delegate(args__10403__auto__);
});
ui$book$subsect.cljs$core$IFn$_invoke$arity$variadic = ui$book$subsect__delegate;
return ui$book$subsect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.ssub = (function() { 
var ui$book$ssub__delegate = function (args__10403__auto__){
var vec__145525 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145525,(0),null);
var map__145526__$1 = ((cljs.core.seq_QMARK_(map__145526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145526):map__145526);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145526__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145525,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145527 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145527) : cljs.core.deref.call(null,G__145527));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145528 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145528) : cljs.core.deref.call(null,G__145528));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__145529 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145529) : cljs.core.deref.call(null,G__145529));
})(),ch,sect));
var ssub__$1 = (cljs.core.count(ui.book.get_ssubs((function (){var G__145530 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145530) : cljs.core.deref.call(null,G__145530));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1,cljs.core.constant$keyword$type,cljs.core.constant$keyword$ssub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__145525,map__145526,map__145526__$1,title,kids){
return (function (p1__2927_SHARP_){
return cljs.core.assoc_in(p1__2927_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__145525,map__145526,map__145526__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h4,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145531__i = 0, G__145531__a = new Array(arguments.length -  0);
while (G__145531__i < G__145531__a.length) {G__145531__a[G__145531__i] = arguments[G__145531__i + 0]; ++G__145531__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145531__a,0);
} 
return ui$book$ssub__delegate.call(this,args__10403__auto__);};
ui$book$ssub.cljs$lang$maxFixedArity = 0;
ui$book$ssub.cljs$lang$applyTo = (function (arglist__145532){
var args__10403__auto__ = cljs.core.seq(arglist__145532);
return ui$book$ssub__delegate(args__10403__auto__);
});
ui$book$ssub.cljs$core$IFn$_invoke$arity$variadic = ui$book$ssub__delegate;
return ui$book$ssub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.exercises = (function() { 
var ui$book$exercises__delegate = function (args__10403__auto__){
var vec__145539 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145539,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145539,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145540 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145540) : cljs.core.deref.call(null,G__145540));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145541 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145541) : cljs.core.deref.call(null,G__145541));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__145542 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145542) : cljs.core.deref.call(null,G__145542));
})(),ch,sect));
var ssub = (cljs.core.count(ui.book.get_ssubs((function (){var G__145543 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145543) : cljs.core.deref.call(null,G__145543));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.constant$keyword$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1((function (){var G__145544 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145544) : cljs.core.deref.call(null,G__145544));
})()).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__145539,attr,kids){
return (function (p1__2928_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__2928_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__145539,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"exercises",cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__145539,attr,kids){
return (function (p1__2929_SHARP_){
return cljs.core.assoc_in(p1__2929_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__145539,attr,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,"",cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145545__i = 0, G__145545__a = new Array(arguments.length -  0);
while (G__145545__i < G__145545__a.length) {G__145545__a[G__145545__i] = arguments[G__145545__i + 0]; ++G__145545__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145545__a,0);
} 
return ui$book$exercises__delegate.call(this,args__10403__auto__);};
ui$book$exercises.cljs$lang$maxFixedArity = 0;
ui$book$exercises.cljs$lang$applyTo = (function (arglist__145546){
var args__10403__auto__ = cljs.core.seq(arglist__145546);
return ui$book$exercises__delegate(args__10403__auto__);
});
ui$book$exercises.cljs$core$IFn$_invoke$arity$variadic = ui$book$exercises__delegate;
return ui$book$exercises;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.exercise = (function() { 
var ui$book$exercise__delegate = function (args__10403__auto__){
var vec__145557 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145557,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145557,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145558 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145558) : cljs.core.deref.call(null,G__145558));
})()));
var ex = (cljs.core.count(ui.book.get_exs((function (){var G__145559 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145559) : cljs.core.deref.call(null,G__145559));
})(),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"exercise",cljs.core.constant$keyword$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__145557,attr,kids){
return (function (p1__2930_SHARP_){
return cljs.core.assoc_in(p1__2930_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__145557,attr,kids))
);

var G__145560 = cljs.core.constant$keyword$type;
var G__145561 = "exercise";
var G__145562 = cljs.core.constant$keyword$class;
var G__145563 = "exercise";
var G__145564 = (function (){var G__145566 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145566) : tailrecursion.hoplon.h3.call(null,G__145566));
})();
var G__145565 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__145560,G__145561,G__145562,G__145563,G__145564,G__145565) : tailrecursion.hoplon.div.call(null,G__145560,G__145561,G__145562,G__145563,G__145564,G__145565));
};
var ui$book$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145567__i = 0, G__145567__a = new Array(arguments.length -  0);
while (G__145567__i < G__145567__a.length) {G__145567__a[G__145567__i] = arguments[G__145567__i + 0]; ++G__145567__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145567__a,0);
} 
return ui$book$exercise__delegate.call(this,args__10403__auto__);};
ui$book$exercise.cljs$lang$maxFixedArity = 0;
ui$book$exercise.cljs$lang$applyTo = (function (arglist__145568){
var args__10403__auto__ = cljs.core.seq(arglist__145568);
return ui$book$exercise__delegate(args__10403__auto__);
});
ui$book$exercise.cljs$core$IFn$_invoke$arity$variadic = ui$book$exercise__delegate;
return ui$book$exercise;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.q_a = (function() { 
var ui$book$q_a__delegate = function (args__10403__auto__){
var vec__145578 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145578,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145578,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__145578,_,children){
return (function (G__145579){
return [cljs.core.str((cljs.core.truth_(G__145579)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__145578,_,children))
).call(null,open);
var G__145580 = (function (){var G__145582 = cljs.core.constant$keyword$click;
var G__145583 = ((function (G__145582,open,button_text,vec__145578,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__145582,open,button_text,vec__145578,_,children))
;
var G__145584 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__145582,G__145583,G__145584) : tailrecursion.hoplon.button.call(null,G__145582,G__145583,G__145584));
})();
var G__145581 = (function (){var G__145585 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,"solution",cljs.core.constant$keyword$toggle,open], null);
var G__145586 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145585,G__145586) : tailrecursion.hoplon.div.call(null,G__145585,G__145586));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145580,G__145581) : tailrecursion.hoplon.div.call(null,G__145580,G__145581));
};
var ui$book$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145587__i = 0, G__145587__a = new Array(arguments.length -  0);
while (G__145587__i < G__145587__a.length) {G__145587__a[G__145587__i] = arguments[G__145587__i + 0]; ++G__145587__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145587__a,0);
} 
return ui$book$q_a__delegate.call(this,args__10403__auto__);};
ui$book$q_a.cljs$lang$maxFixedArity = 0;
ui$book$q_a.cljs$lang$applyTo = (function (arglist__145588){
var args__10403__auto__ = cljs.core.seq(arglist__145588);
return ui$book$q_a__delegate(args__10403__auto__);
});
ui$book$q_a.cljs$core$IFn$_invoke$arity$variadic = ui$book$q_a__delegate;
return ui$book$q_a;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.fig = (function() { 
var ui$book$fig__delegate = function (args__10403__auto__){
var vec__145606 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145606,(0),null);
var map__145607__$1 = ((cljs.core.seq_QMARK_(map__145607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145607):map__145607);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145607__$1,cljs.core.constant$keyword$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145606,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145608 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145608) : cljs.core.deref.call(null,G__145608));
})()));
var figr = (cljs.core.count(ui.book.get_figs((function (){var G__145609 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145609) : cljs.core.deref.call(null,G__145609));
})(),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145610 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145610) : cljs.core.deref.call(null,G__145610));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("img/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145611 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145611) : cljs.core.deref.call(null,G__145611));
})()))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$footer,footer,cljs.core.constant$keyword$src,src,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__145606,map__145607,map__145607__$1,footer,_){
return (function (p1__2931_SHARP_){
return cljs.core.assoc_in(p1__2931_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__145606,map__145607,map__145607__$1,footer,_))
);

var G__145612 = (function (){var G__145614 = cljs.core.constant$keyword$src;
var G__145615 = src;
var G__145616 = cljs.core.constant$keyword$class;
var G__145617 = "img-responsive";
var G__145618 = cljs.core.constant$keyword$alt;
var G__145619 = "Figure 1.3";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__145614,G__145615,G__145616,G__145617,G__145618,G__145619) : tailrecursion.hoplon.img.call(null,G__145614,G__145615,G__145616,G__145617,G__145618,G__145619));
})();
var G__145613 = (function (){var G__145620 = (function (){var G__145622 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__145622) : tailrecursion.hoplon.b.call(null,G__145622));
})();
var G__145621 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__145620,G__145621) : tailrecursion.hoplon.p.call(null,G__145620,G__145621));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145612,G__145613) : tailrecursion.hoplon.div.call(null,G__145612,G__145613));
};
var ui$book$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145623__i = 0, G__145623__a = new Array(arguments.length -  0);
while (G__145623__i < G__145623__a.length) {G__145623__a[G__145623__i] = arguments[G__145623__i + 0]; ++G__145623__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145623__a,0);
} 
return ui$book$fig__delegate.call(this,args__10403__auto__);};
ui$book$fig.cljs$lang$maxFixedArity = 0;
ui$book$fig.cljs$lang$applyTo = (function (arglist__145624){
var args__10403__auto__ = cljs.core.seq(arglist__145624);
return ui$book$fig__delegate(args__10403__auto__);
});
ui$book$fig.cljs$core$IFn$_invoke$arity$variadic = ui$book$fig__delegate;
return ui$book$fig;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.image = (function() { 
var ui$book$image__delegate = function (args__10403__auto__){
var vec__145628 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145628,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145628,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145629 = cljs.core.constant$keyword$class;
var G__145630 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2(G__145629,G__145630) : tailrecursion.hoplon.img.call(null,G__145629,G__145630));
})(),attr,kids);
};
var ui$book$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145631__i = 0, G__145631__a = new Array(arguments.length -  0);
while (G__145631__i < G__145631__a.length) {G__145631__a[G__145631__i] = arguments[G__145631__i + 0]; ++G__145631__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145631__a,0);
} 
return ui$book$image__delegate.call(this,args__10403__auto__);};
ui$book$image.cljs$lang$maxFixedArity = 0;
ui$book$image.cljs$lang$applyTo = (function (arglist__145632){
var args__10403__auto__ = cljs.core.seq(arglist__145632);
return ui$book$image__delegate(args__10403__auto__);
});
ui$book$image.cljs$core$IFn$_invoke$arity$variadic = ui$book$image__delegate;
return ui$book$image;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.footnote = (function() { 
var ui$book$footnote__delegate = function (args__10403__auto__){
var vec__145656 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145656,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145656,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145657 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145657) : cljs.core.deref.call(null,G__145657));
})()));
var ftn = (cljs.core.count(cljs.core.constant$keyword$footnote.cljs$core$IFn$_invoke$arity$1((function (){var G__145658 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145658) : cljs.core.deref.call(null,G__145658));
})())) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__145656,attr,kids){
return (function (p1__2932_SHARP_){
return cljs.core.assoc_in(p1__2932_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__145656,attr,kids))
);

var G__145659 = cljs.core.constant$keyword$style;
var G__145660 = "display:inline;";
var G__145661 = (function (){var G__145663 = cljs.core.constant$keyword$click;
var G__145664 = ((function (G__145663,G__145659,G__145660,hidden,ch,ftn,this_data,vec__145656,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__145663,G__145659,G__145660,hidden,ch,ftn,this_data,vec__145656,attr,kids))
;
var G__145665 = cljs.core.constant$keyword$style;
var G__145666 = "color:#0000ff";
var G__145667 = (function (){var G__145668 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__145668) : tailrecursion.hoplon.sup.call(null,G__145668));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__145663,G__145664,G__145665,G__145666,G__145667) : tailrecursion.hoplon.span.call(null,G__145663,G__145664,G__145665,G__145666,G__145667));
})();
var G__145662 = (function (){var G__145669 = cljs.core.constant$keyword$class;
var G__145670 = tailrecursion.javelin.formula(((function (G__145669,G__145659,G__145660,G__145661,hidden,ch,ftn,this_data,vec__145656,attr,kids){
return (function (G__145672){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$hidden,G__145672,cljs.core.constant$keyword$popover,true,cljs.core.constant$keyword$bottom,true], null);
});})(G__145669,G__145659,G__145660,G__145661,hidden,ch,ftn,this_data,vec__145656,attr,kids))
).call(null,hidden);
var G__145671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145673 = cljs.core.constant$keyword$class;
var G__145674 = "popover-content";
var G__145675 = cljs.core.constant$keyword$click;
var G__145676 = ((function (G__145673,G__145674,G__145675,G__145669,G__145670,G__145659,G__145660,G__145661,hidden,ch,ftn,this_data,vec__145656,attr,kids){
return (function (){
var G__145677 = hidden;
var G__145678 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145677,G__145678) : cljs.core.reset_BANG_.call(null,G__145677,G__145678));
});})(G__145673,G__145674,G__145675,G__145669,G__145670,G__145659,G__145660,G__145661,hidden,ch,ftn,this_data,vec__145656,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145673,G__145674,G__145675,G__145676) : tailrecursion.hoplon.div.call(null,G__145673,G__145674,G__145675,G__145676));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__145669,G__145670,G__145671) : tailrecursion.hoplon.div.call(null,G__145669,G__145670,G__145671));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145659,G__145660,G__145661,G__145662) : tailrecursion.hoplon.div.call(null,G__145659,G__145660,G__145661,G__145662));
};
var ui$book$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145679__i = 0, G__145679__a = new Array(arguments.length -  0);
while (G__145679__i < G__145679__a.length) {G__145679__a[G__145679__i] = arguments[G__145679__i + 0]; ++G__145679__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145679__a,0);
} 
return ui$book$footnote__delegate.call(this,args__10403__auto__);};
ui$book$footnote.cljs$lang$maxFixedArity = 0;
ui$book$footnote.cljs$lang$applyTo = (function (arglist__145680){
var args__10403__auto__ = cljs.core.seq(arglist__145680);
return ui$book$footnote__delegate(args__10403__auto__);
});
ui$book$footnote.cljs$core$IFn$_invoke$arity$variadic = ui$book$footnote__delegate;
return ui$book$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$double_DASH_angle,(function (_,kids){
return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
