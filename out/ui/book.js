// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.book');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book.location = tailrecursion.javelin.formula((function (G__145351){
return G__145351;
})).call(null,ui.info.location);
ui.book._STAR_book_data_STAR_ = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);
ui.book.scroll_location = tailrecursion.javelin.cell(null);
ui.book.scroll_map = tailrecursion.javelin.formula((function (G__145355,G__145354,G__145360,G__145361,G__145357,G__145358,G__145359,G__145356){
var G__145362 = cljs.core.PersistentArrayMap.EMPTY;
var G__145363 = (function (){var G__145364 = ((function (G__145362){
return (function (p__145352){
var vec__145353 = p__145352;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145353,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__145366 = k;
return (G__145356.cljs$core$IFn$_invoke$arity$1 ? G__145356.cljs$core$IFn$_invoke$arity$1(G__145366) : G__145356.call(null,G__145366));
})(),(function (){var G__145367 = v;
return (G__145357.cljs$core$IFn$_invoke$arity$1 ? G__145357.cljs$core$IFn$_invoke$arity$1(G__145367) : G__145357.call(null,G__145367));
})()], null);
});})(G__145362))
;
var G__145365 = (function (){var G__145368 = (1);
var G__145369 = (function (){var G__145370 = (2);
var G__145371 = (function (){var G__145372 = G__145361;
var G__145373 = /\//;
return (G__145360.cljs$core$IFn$_invoke$arity$2 ? G__145360.cljs$core$IFn$_invoke$arity$2(G__145372,G__145373) : G__145360.call(null,G__145372,G__145373));
})();
return (G__145359.cljs$core$IFn$_invoke$arity$2 ? G__145359.cljs$core$IFn$_invoke$arity$2(G__145370,G__145371) : G__145359.call(null,G__145370,G__145371));
})();
return (G__145358.cljs$core$IFn$_invoke$arity$2 ? G__145358.cljs$core$IFn$_invoke$arity$2(G__145368,G__145369) : G__145358.call(null,G__145368,G__145369));
})();
return (G__145355.cljs$core$IFn$_invoke$arity$2 ? G__145355.cljs$core$IFn$_invoke$arity$2(G__145364,G__145365) : G__145355.call(null,G__145364,G__145365));
})();
return (G__145354.cljs$core$IFn$_invoke$arity$2 ? G__145354.cljs$core$IFn$_invoke$arity$2(G__145362,G__145363) : G__145354.call(null,G__145362,G__145363));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,ui.book.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
ui.book.make_link = (function ui$book$make_link(){
var G__145375 = arguments.length;
switch (G__145375) {
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
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145376 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145376) : cljs.core.deref.call(null,G__145376));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$2 = (function (ch,sect){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145377 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145377) : cljs.core.deref.call(null,G__145377));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$3 = (function (ch,sect,sub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145378 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145378) : cljs.core.deref.call(null,G__145378));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$4 = (function (ch,sect,sub,ssub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145379 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145379) : cljs.core.deref.call(null,G__145379));
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
var vec__145402 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145402,(0),null);
var map__145403__$1 = ((cljs.core.seq_QMARK_(map__145403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145403):map__145403);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145403__$1,cljs.core.constant$keyword$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145403__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145403__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145402,(1),null);
var G__145404 = cljs.core.constant$keyword$scroll_DASH_to;
var G__145405 = tailrecursion.javelin.formula(((function (G__145404,vec__145402,map__145403,map__145403__$1,size,link,title,kids){
return (function (G__145410,G__145411,G__145412){
var G__145413 = G__145411;
var G__145414 = G__145412;
return (G__145410.cljs$core$IFn$_invoke$arity$2 ? G__145410.cljs$core$IFn$_invoke$arity$2(G__145413,G__145414) : G__145410.call(null,G__145413,G__145414));
});})(G__145404,vec__145402,map__145403,map__145403__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,ui.info.route_STAR_,link);
var G__145406 = cljs.core.constant$keyword$at_DASH_top;
var G__145407 = ((function (G__145404,G__145405,G__145406,vec__145402,map__145403,map__145403__$1,size,link,title,kids){
return (function (){
var G__145415 = ui.book.scroll_location;
var G__145416 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145415,G__145416) : cljs.core.reset_BANG_.call(null,G__145415,G__145416));
});})(G__145404,G__145405,G__145406,vec__145402,map__145403,map__145403__$1,size,link,title,kids))
;
var G__145408 = (function (){var G__145417 = cljs.core.constant$keyword$class;
var G__145418 = "text-left";
var G__145419 = title;
return (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(G__145417,G__145418,G__145419) : size.call(null,G__145417,G__145418,G__145419));
})();
var G__145409 = (function (){var G__145420 = cljs.core.constant$keyword$class;
var G__145421 = "";
var G__145422 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__145420,G__145421,G__145422) : tailrecursion.hoplon.div.call(null,G__145420,G__145421,G__145422));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__145404,G__145405,G__145406,G__145407,G__145408,G__145409) : tailrecursion.hoplon.div.call(null,G__145404,G__145405,G__145406,G__145407,G__145408,G__145409));
};
var ui$book$part = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145423__i = 0, G__145423__a = new Array(arguments.length -  0);
while (G__145423__i < G__145423__a.length) {G__145423__a[G__145423__i] = arguments[G__145423__i + 0]; ++G__145423__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145423__a,0);
} 
return ui$book$part__delegate.call(this,args__10403__auto__);};
ui$book$part.cljs$lang$maxFixedArity = 0;
ui$book$part.cljs$lang$applyTo = (function (arglist__145424){
var args__10403__auto__ = cljs.core.seq(arglist__145424);
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
var vec__145430 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145430,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145430,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145431 = cljs.core.constant$keyword$class;
var G__145432 = "text-justify";
var G__145433 = cljs.core.constant$keyword$style;
var G__145434 = "padding-left:10%; padding-right:5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145431,G__145432,G__145433,G__145434) : tailrecursion.hoplon.div.call(null,G__145431,G__145432,G__145433,G__145434));
})(),attr,kids);
};
var ui$book$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145435__i = 0, G__145435__a = new Array(arguments.length -  0);
while (G__145435__i < G__145435__a.length) {G__145435__a[G__145435__i] = arguments[G__145435__i + 0]; ++G__145435__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145435__a,0);
} 
return ui$book$container__delegate.call(this,args__10403__auto__);};
ui$book$container.cljs$lang$maxFixedArity = 0;
ui$book$container.cljs$lang$applyTo = (function (arglist__145436){
var args__10403__auto__ = cljs.core.seq(arglist__145436);
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
var vec__145464 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145464,(0),null);
var map__145465__$1 = ((cljs.core.seq_QMARK_(map__145465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145465):map__145465);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145465__$1,cljs.core.constant$keyword$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145465__$1,cljs.core.constant$keyword$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145464,(1),null);
var G__145466 = cljs.core.constant$keyword$scroll_DASH_to;
var G__145467 = tailrecursion.javelin.formula(((function (G__145466,vec__145464,map__145465,map__145465__$1,title,tagline,kids){
return (function (G__145475,G__145476,G__145477){
var G__145478 = (function (){var G__145480 = "#!/home/";
return (G__145476.cljs$core$IFn$_invoke$arity$1 ? G__145476.cljs$core$IFn$_invoke$arity$1(G__145480) : G__145476.call(null,G__145480));
})();
var G__145479 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__145477)),cljs.core.str("/")].join('');
return (G__145475.cljs$core$IFn$_invoke$arity$2 ? G__145475.cljs$core$IFn$_invoke$arity$2(G__145478,G__145479) : G__145475.call(null,G__145478,G__145479));
});})(G__145466,vec__145464,map__145465,map__145465__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,tailrecursion.hoplon.route_cell,ui.book._STAR_book_data_STAR_);
var G__145468 = cljs.core.constant$keyword$at_DASH_top;
var G__145469 = ((function (G__145466,G__145467,G__145468,vec__145464,map__145465,map__145465__$1,title,tagline,kids){
return (function (){
var G__145481 = ui.book.scroll_location;
var G__145482 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145483 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145483) : cljs.core.deref.call(null,G__145483));
})())),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145481,G__145482) : cljs.core.reset_BANG_.call(null,G__145481,G__145482));
});})(G__145466,G__145467,G__145468,vec__145464,map__145465,map__145465__$1,title,tagline,kids))
;
var G__145470 = cljs.core.constant$keyword$class;
var G__145471 = "text-justify";
var G__145472 = (function (){var G__145484 = cljs.core.constant$keyword$class;
var G__145485 = "text-left";
var G__145486 = cljs.core.constant$keyword$title.cljs$core$IFn$_invoke$arity$1((function (){var G__145487 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145487) : cljs.core.deref.call(null,G__145487));
})());
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__145484,G__145485,G__145486) : tailrecursion.hoplon.h1.call(null,G__145484,G__145485,G__145486));
})();
var G__145473 = (function (){var G__145488 = cljs.core.constant$keyword$tagline.cljs$core$IFn$_invoke$arity$1((function (){var G__145489 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145489) : cljs.core.deref.call(null,G__145489));
})());
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145488) : tailrecursion.hoplon.h3.call(null,G__145488));
})();
var G__145474 = (function (){var G__145490 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__145490) : tailrecursion.hoplon.div.call(null,G__145490));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__145466,G__145467,G__145468,G__145469,G__145470,G__145471,G__145472,G__145473,G__145474) : tailrecursion.hoplon.div.call(null,G__145466,G__145467,G__145468,G__145469,G__145470,G__145471,G__145472,G__145473,G__145474));
};
var ui$book$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145491__i = 0, G__145491__a = new Array(arguments.length -  0);
while (G__145491__i < G__145491__a.length) {G__145491__a[G__145491__i] = arguments[G__145491__i + 0]; ++G__145491__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145491__a,0);
} 
return ui$book$about__delegate.call(this,args__10403__auto__);};
ui$book$about.cljs$lang$maxFixedArity = 0;
ui$book$about.cljs$lang$applyTo = (function (arglist__145492){
var args__10403__auto__ = cljs.core.seq(arglist__145492);
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
var vec__145496 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145496,(0),null);
var map__145497__$1 = ((cljs.core.seq_QMARK_(map__145497))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145497):map__145497);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145497__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145496,(1),null);
var ch = (cljs.core.count(ui.book.get_chapters((function (){var G__145498 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145498) : cljs.core.deref.call(null,G__145498));
})())) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__145496,map__145497,map__145497__$1,title,kids){
return (function (p1__3425_SHARP_){
return cljs.core.assoc_in(p1__3425_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__145496,map__145497,map__145497__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h1,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145499__i = 0, G__145499__a = new Array(arguments.length -  0);
while (G__145499__i < G__145499__a.length) {G__145499__a[G__145499__i] = arguments[G__145499__i + 0]; ++G__145499__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145499__a,0);
} 
return ui$book$chapter__delegate.call(this,args__10403__auto__);};
ui$book$chapter.cljs$lang$maxFixedArity = 0;
ui$book$chapter.cljs$lang$applyTo = (function (arglist__145500){
var args__10403__auto__ = cljs.core.seq(arglist__145500);
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
var vec__145505 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145505,(0),null);
var map__145506__$1 = ((cljs.core.seq_QMARK_(map__145506))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145506):map__145506);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145506__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145505,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145507 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145507) : cljs.core.deref.call(null,G__145507));
})()));
var sect__$1 = (cljs.core.count(ui.book.get_sects((function (){var G__145508 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145508) : cljs.core.deref.call(null,G__145508));
})(),ch)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__145505,map__145506,map__145506__$1,title,kids){
return (function (p1__3426_SHARP_){
return cljs.core.assoc_in(p1__3426_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__145505,map__145506,map__145506__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h2,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145509__i = 0, G__145509__a = new Array(arguments.length -  0);
while (G__145509__i < G__145509__a.length) {G__145509__a[G__145509__i] = arguments[G__145509__i + 0]; ++G__145509__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145509__a,0);
} 
return ui$book$sect__delegate.call(this,args__10403__auto__);};
ui$book$sect.cljs$lang$maxFixedArity = 0;
ui$book$sect.cljs$lang$applyTo = (function (arglist__145510){
var args__10403__auto__ = cljs.core.seq(arglist__145510);
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
var vec__145516 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145516,(0),null);
var map__145517__$1 = ((cljs.core.seq_QMARK_(map__145517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145517):map__145517);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145517__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145516,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145518 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145518) : cljs.core.deref.call(null,G__145518));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145519 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145519) : cljs.core.deref.call(null,G__145519));
})(),ch));
var sub = (cljs.core.count(ui.book.get_subsects((function (){var G__145520 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145520) : cljs.core.deref.call(null,G__145520));
})(),ch,sect)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__145516,map__145517,map__145517__$1,title,kids){
return (function (p1__3427_SHARP_){
return cljs.core.assoc_in(p1__3427_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__145516,map__145517,map__145517__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145521__i = 0, G__145521__a = new Array(arguments.length -  0);
while (G__145521__i < G__145521__a.length) {G__145521__a[G__145521__i] = arguments[G__145521__i + 0]; ++G__145521__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145521__a,0);
} 
return ui$book$subsect__delegate.call(this,args__10403__auto__);};
ui$book$subsect.cljs$lang$maxFixedArity = 0;
ui$book$subsect.cljs$lang$applyTo = (function (arglist__145522){
var args__10403__auto__ = cljs.core.seq(arglist__145522);
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
var vec__145529 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145529,(0),null);
var map__145530__$1 = ((cljs.core.seq_QMARK_(map__145530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145530):map__145530);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145530__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145529,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145531 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145531) : cljs.core.deref.call(null,G__145531));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145532 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145532) : cljs.core.deref.call(null,G__145532));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__145533 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145533) : cljs.core.deref.call(null,G__145533));
})(),ch,sect));
var ssub__$1 = (cljs.core.count(ui.book.get_ssubs((function (){var G__145534 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145534) : cljs.core.deref.call(null,G__145534));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1,cljs.core.constant$keyword$type,cljs.core.constant$keyword$ssub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__145529,map__145530,map__145530__$1,title,kids){
return (function (p1__3428_SHARP_){
return cljs.core.assoc_in(p1__3428_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__145529,map__145530,map__145530__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h4,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145535__i = 0, G__145535__a = new Array(arguments.length -  0);
while (G__145535__i < G__145535__a.length) {G__145535__a[G__145535__i] = arguments[G__145535__i + 0]; ++G__145535__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145535__a,0);
} 
return ui$book$ssub__delegate.call(this,args__10403__auto__);};
ui$book$ssub.cljs$lang$maxFixedArity = 0;
ui$book$ssub.cljs$lang$applyTo = (function (arglist__145536){
var args__10403__auto__ = cljs.core.seq(arglist__145536);
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
var vec__145543 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145543,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145543,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145544 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145544) : cljs.core.deref.call(null,G__145544));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__145545 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145545) : cljs.core.deref.call(null,G__145545));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__145546 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145546) : cljs.core.deref.call(null,G__145546));
})(),ch,sect));
var ssub = (cljs.core.count(ui.book.get_ssubs((function (){var G__145547 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145547) : cljs.core.deref.call(null,G__145547));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.constant$keyword$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1((function (){var G__145548 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145548) : cljs.core.deref.call(null,G__145548));
})()).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__145543,attr,kids){
return (function (p1__3429_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__3429_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__145543,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"exercises",cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__145543,attr,kids){
return (function (p1__3430_SHARP_){
return cljs.core.assoc_in(p1__3430_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__145543,attr,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,"",cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145549__i = 0, G__145549__a = new Array(arguments.length -  0);
while (G__145549__i < G__145549__a.length) {G__145549__a[G__145549__i] = arguments[G__145549__i + 0]; ++G__145549__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145549__a,0);
} 
return ui$book$exercises__delegate.call(this,args__10403__auto__);};
ui$book$exercises.cljs$lang$maxFixedArity = 0;
ui$book$exercises.cljs$lang$applyTo = (function (arglist__145550){
var args__10403__auto__ = cljs.core.seq(arglist__145550);
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
var vec__145561 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145561,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145561,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145562 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145562) : cljs.core.deref.call(null,G__145562));
})()));
var ex = (cljs.core.count(ui.book.get_exs((function (){var G__145563 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145563) : cljs.core.deref.call(null,G__145563));
})(),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"exercise",cljs.core.constant$keyword$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__145561,attr,kids){
return (function (p1__3431_SHARP_){
return cljs.core.assoc_in(p1__3431_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__145561,attr,kids))
);

var G__145564 = cljs.core.constant$keyword$type;
var G__145565 = "exercise";
var G__145566 = cljs.core.constant$keyword$class;
var G__145567 = "exercise";
var G__145568 = (function (){var G__145570 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__145570) : tailrecursion.hoplon.h3.call(null,G__145570));
})();
var G__145569 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__145564,G__145565,G__145566,G__145567,G__145568,G__145569) : tailrecursion.hoplon.div.call(null,G__145564,G__145565,G__145566,G__145567,G__145568,G__145569));
};
var ui$book$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145571__i = 0, G__145571__a = new Array(arguments.length -  0);
while (G__145571__i < G__145571__a.length) {G__145571__a[G__145571__i] = arguments[G__145571__i + 0]; ++G__145571__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145571__a,0);
} 
return ui$book$exercise__delegate.call(this,args__10403__auto__);};
ui$book$exercise.cljs$lang$maxFixedArity = 0;
ui$book$exercise.cljs$lang$applyTo = (function (arglist__145572){
var args__10403__auto__ = cljs.core.seq(arglist__145572);
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
var vec__145582 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145582,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145582,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__145582,_,children){
return (function (G__145583){
return [cljs.core.str((cljs.core.truth_(G__145583)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__145582,_,children))
).call(null,open);
var G__145584 = (function (){var G__145586 = cljs.core.constant$keyword$click;
var G__145587 = ((function (G__145586,open,button_text,vec__145582,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__145586,open,button_text,vec__145582,_,children))
;
var G__145588 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__145586,G__145587,G__145588) : tailrecursion.hoplon.button.call(null,G__145586,G__145587,G__145588));
})();
var G__145585 = (function (){var G__145589 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,"solution",cljs.core.constant$keyword$toggle,open], null);
var G__145590 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145589,G__145590) : tailrecursion.hoplon.div.call(null,G__145589,G__145590));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145584,G__145585) : tailrecursion.hoplon.div.call(null,G__145584,G__145585));
};
var ui$book$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145591__i = 0, G__145591__a = new Array(arguments.length -  0);
while (G__145591__i < G__145591__a.length) {G__145591__a[G__145591__i] = arguments[G__145591__i + 0]; ++G__145591__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145591__a,0);
} 
return ui$book$q_a__delegate.call(this,args__10403__auto__);};
ui$book$q_a.cljs$lang$maxFixedArity = 0;
ui$book$q_a.cljs$lang$applyTo = (function (arglist__145592){
var args__10403__auto__ = cljs.core.seq(arglist__145592);
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
var vec__145610 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__145611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145610,(0),null);
var map__145611__$1 = ((cljs.core.seq_QMARK_(map__145611))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__145611):map__145611);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__145611__$1,cljs.core.constant$keyword$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145610,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145612 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145612) : cljs.core.deref.call(null,G__145612));
})()));
var figr = (cljs.core.count(ui.book.get_figs((function (){var G__145613 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145613) : cljs.core.deref.call(null,G__145613));
})(),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145614 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145614) : cljs.core.deref.call(null,G__145614));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("img/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__145615 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145615) : cljs.core.deref.call(null,G__145615));
})()))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$footer,footer,cljs.core.constant$keyword$src,src,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__145610,map__145611,map__145611__$1,footer,_){
return (function (p1__3432_SHARP_){
return cljs.core.assoc_in(p1__3432_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__145610,map__145611,map__145611__$1,footer,_))
);

var G__145616 = (function (){var G__145618 = cljs.core.constant$keyword$src;
var G__145619 = src;
var G__145620 = cljs.core.constant$keyword$class;
var G__145621 = "img-responsive";
var G__145622 = cljs.core.constant$keyword$alt;
var G__145623 = "Figure 1.3";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__145618,G__145619,G__145620,G__145621,G__145622,G__145623) : tailrecursion.hoplon.img.call(null,G__145618,G__145619,G__145620,G__145621,G__145622,G__145623));
})();
var G__145617 = (function (){var G__145624 = (function (){var G__145626 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__145626) : tailrecursion.hoplon.b.call(null,G__145626));
})();
var G__145625 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__145624,G__145625) : tailrecursion.hoplon.p.call(null,G__145624,G__145625));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__145616,G__145617) : tailrecursion.hoplon.div.call(null,G__145616,G__145617));
};
var ui$book$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145627__i = 0, G__145627__a = new Array(arguments.length -  0);
while (G__145627__i < G__145627__a.length) {G__145627__a[G__145627__i] = arguments[G__145627__i + 0]; ++G__145627__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145627__a,0);
} 
return ui$book$fig__delegate.call(this,args__10403__auto__);};
ui$book$fig.cljs$lang$maxFixedArity = 0;
ui$book$fig.cljs$lang$applyTo = (function (arglist__145628){
var args__10403__auto__ = cljs.core.seq(arglist__145628);
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
var vec__145632 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145632,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145632,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145633 = cljs.core.constant$keyword$class;
var G__145634 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2(G__145633,G__145634) : tailrecursion.hoplon.img.call(null,G__145633,G__145634));
})(),attr,kids);
};
var ui$book$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145635__i = 0, G__145635__a = new Array(arguments.length -  0);
while (G__145635__i < G__145635__a.length) {G__145635__a[G__145635__i] = arguments[G__145635__i + 0]; ++G__145635__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145635__a,0);
} 
return ui$book$image__delegate.call(this,args__10403__auto__);};
ui$book$image.cljs$lang$maxFixedArity = 0;
ui$book$image.cljs$lang$applyTo = (function (arglist__145636){
var args__10403__auto__ = cljs.core.seq(arglist__145636);
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
var vec__145660 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145660,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__145660,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__145661 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145661) : cljs.core.deref.call(null,G__145661));
})()));
var ftn = (cljs.core.count(cljs.core.constant$keyword$footnote.cljs$core$IFn$_invoke$arity$1((function (){var G__145662 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__145662) : cljs.core.deref.call(null,G__145662));
})())) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__145660,attr,kids){
return (function (p1__3433_SHARP_){
return cljs.core.assoc_in(p1__3433_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__145660,attr,kids))
);

var G__145663 = cljs.core.constant$keyword$style;
var G__145664 = "display:inline;";
var G__145665 = (function (){var G__145667 = cljs.core.constant$keyword$click;
var G__145668 = ((function (G__145667,G__145663,G__145664,hidden,ch,ftn,this_data,vec__145660,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__145667,G__145663,G__145664,hidden,ch,ftn,this_data,vec__145660,attr,kids))
;
var G__145669 = cljs.core.constant$keyword$style;
var G__145670 = "color:#0000ff";
var G__145671 = (function (){var G__145672 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__145672) : tailrecursion.hoplon.sup.call(null,G__145672));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__145667,G__145668,G__145669,G__145670,G__145671) : tailrecursion.hoplon.span.call(null,G__145667,G__145668,G__145669,G__145670,G__145671));
})();
var G__145666 = (function (){var G__145673 = cljs.core.constant$keyword$class;
var G__145674 = tailrecursion.javelin.formula(((function (G__145673,G__145663,G__145664,G__145665,hidden,ch,ftn,this_data,vec__145660,attr,kids){
return (function (G__145676){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$hidden,G__145676,cljs.core.constant$keyword$popover,true,cljs.core.constant$keyword$bottom,true], null);
});})(G__145673,G__145663,G__145664,G__145665,hidden,ch,ftn,this_data,vec__145660,attr,kids))
).call(null,hidden);
var G__145675 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__145677 = cljs.core.constant$keyword$class;
var G__145678 = "popover-content";
var G__145679 = cljs.core.constant$keyword$click;
var G__145680 = ((function (G__145677,G__145678,G__145679,G__145673,G__145674,G__145663,G__145664,G__145665,hidden,ch,ftn,this_data,vec__145660,attr,kids){
return (function (){
var G__145681 = hidden;
var G__145682 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__145681,G__145682) : cljs.core.reset_BANG_.call(null,G__145681,G__145682));
});})(G__145677,G__145678,G__145679,G__145673,G__145674,G__145663,G__145664,G__145665,hidden,ch,ftn,this_data,vec__145660,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145677,G__145678,G__145679,G__145680) : tailrecursion.hoplon.div.call(null,G__145677,G__145678,G__145679,G__145680));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__145673,G__145674,G__145675) : tailrecursion.hoplon.div.call(null,G__145673,G__145674,G__145675));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__145663,G__145664,G__145665,G__145666) : tailrecursion.hoplon.div.call(null,G__145663,G__145664,G__145665,G__145666));
};
var ui$book$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__145683__i = 0, G__145683__a = new Array(arguments.length -  0);
while (G__145683__i < G__145683__a.length) {G__145683__a[G__145683__i] = arguments[G__145683__i + 0]; ++G__145683__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__145683__a,0);
} 
return ui$book$footnote__delegate.call(this,args__10403__auto__);};
ui$book$footnote.cljs$lang$maxFixedArity = 0;
ui$book$footnote.cljs$lang$applyTo = (function (arglist__145684){
var args__10403__auto__ = cljs.core.seq(arglist__145684);
return ui$book$footnote__delegate(args__10403__auto__);
});
ui$book$footnote.cljs$core$IFn$_invoke$arity$variadic = ui$book$footnote__delegate;
return ui$book$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$double_DASH_angle,(function (_,kids){
return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
