// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.book');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book.location = tailrecursion.javelin.formula((function (G__150065){
return G__150065;
})).call(null,ui.info.location);
ui.book._STAR_book_data_STAR_ = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);
ui.book.scroll_location = tailrecursion.javelin.cell(null);
ui.book.scroll_map = tailrecursion.javelin.formula((function (G__150069,G__150068,G__150074,G__150075,G__150071,G__150072,G__150073,G__150070){
var G__150076 = cljs.core.PersistentArrayMap.EMPTY;
var G__150077 = (function (){var G__150078 = ((function (G__150076){
return (function (p__150066){
var vec__150067 = p__150066;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150067,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__150080 = k;
return (G__150070.cljs$core$IFn$_invoke$arity$1 ? G__150070.cljs$core$IFn$_invoke$arity$1(G__150080) : G__150070.call(null,G__150080));
})(),(function (){var G__150081 = v;
return (G__150071.cljs$core$IFn$_invoke$arity$1 ? G__150071.cljs$core$IFn$_invoke$arity$1(G__150081) : G__150071.call(null,G__150081));
})()], null);
});})(G__150076))
;
var G__150079 = (function (){var G__150082 = (1);
var G__150083 = (function (){var G__150084 = (2);
var G__150085 = (function (){var G__150086 = G__150075;
var G__150087 = /\//;
return (G__150074.cljs$core$IFn$_invoke$arity$2 ? G__150074.cljs$core$IFn$_invoke$arity$2(G__150086,G__150087) : G__150074.call(null,G__150086,G__150087));
})();
return (G__150073.cljs$core$IFn$_invoke$arity$2 ? G__150073.cljs$core$IFn$_invoke$arity$2(G__150084,G__150085) : G__150073.call(null,G__150084,G__150085));
})();
return (G__150072.cljs$core$IFn$_invoke$arity$2 ? G__150072.cljs$core$IFn$_invoke$arity$2(G__150082,G__150083) : G__150072.call(null,G__150082,G__150083));
})();
return (G__150069.cljs$core$IFn$_invoke$arity$2 ? G__150069.cljs$core$IFn$_invoke$arity$2(G__150078,G__150079) : G__150069.call(null,G__150078,G__150079));
})();
return (G__150068.cljs$core$IFn$_invoke$arity$2 ? G__150068.cljs$core$IFn$_invoke$arity$2(G__150076,G__150077) : G__150068.call(null,G__150076,G__150077));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,ui.book.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
ui.book.make_link = (function ui$book$make_link(){
var G__150089 = arguments.length;
switch (G__150089) {
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
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150090 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150090) : cljs.core.deref.call(null,G__150090));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$2 = (function (ch,sect){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150091 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150091) : cljs.core.deref.call(null,G__150091));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$3 = (function (ch,sect,sub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150092 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150092) : cljs.core.deref.call(null,G__150092));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$4 = (function (ch,sect,sub,ssub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150093 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150093) : cljs.core.deref.call(null,G__150093));
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
var vec__150116 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150116,(0),null);
var map__150117__$1 = ((cljs.core.seq_QMARK_(map__150117))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150117):map__150117);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150117__$1,cljs.core.constant$keyword$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150117__$1,cljs.core.constant$keyword$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150117__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150116,(1),null);
var G__150118 = cljs.core.constant$keyword$scroll_DASH_to;
var G__150119 = tailrecursion.javelin.formula(((function (G__150118,vec__150116,map__150117,map__150117__$1,size,link,title,kids){
return (function (G__150124,G__150125,G__150126){
var G__150127 = G__150125;
var G__150128 = G__150126;
return (G__150124.cljs$core$IFn$_invoke$arity$2 ? G__150124.cljs$core$IFn$_invoke$arity$2(G__150127,G__150128) : G__150124.call(null,G__150127,G__150128));
});})(G__150118,vec__150116,map__150117,map__150117__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,ui.info.route_STAR_,link);
var G__150120 = cljs.core.constant$keyword$at_DASH_top;
var G__150121 = ((function (G__150118,G__150119,G__150120,vec__150116,map__150117,map__150117__$1,size,link,title,kids){
return (function (){
var G__150129 = ui.book.scroll_location;
var G__150130 = link;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__150129,G__150130) : cljs.core.reset_BANG_.call(null,G__150129,G__150130));
});})(G__150118,G__150119,G__150120,vec__150116,map__150117,map__150117__$1,size,link,title,kids))
;
var G__150122 = (function (){var G__150131 = cljs.core.constant$keyword$class;
var G__150132 = "text-left";
var G__150133 = title;
return (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(G__150131,G__150132,G__150133) : size.call(null,G__150131,G__150132,G__150133));
})();
var G__150123 = (function (){var G__150134 = cljs.core.constant$keyword$class;
var G__150135 = "";
var G__150136 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__150134,G__150135,G__150136) : tailrecursion.hoplon.div.call(null,G__150134,G__150135,G__150136));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__150118,G__150119,G__150120,G__150121,G__150122,G__150123) : tailrecursion.hoplon.div.call(null,G__150118,G__150119,G__150120,G__150121,G__150122,G__150123));
};
var ui$book$part = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150137__i = 0, G__150137__a = new Array(arguments.length -  0);
while (G__150137__i < G__150137__a.length) {G__150137__a[G__150137__i] = arguments[G__150137__i + 0]; ++G__150137__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150137__a,0);
} 
return ui$book$part__delegate.call(this,args__10403__auto__);};
ui$book$part.cljs$lang$maxFixedArity = 0;
ui$book$part.cljs$lang$applyTo = (function (arglist__150138){
var args__10403__auto__ = cljs.core.seq(arglist__150138);
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
var vec__150144 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150144,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150144,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__150145 = cljs.core.constant$keyword$class;
var G__150146 = "text-justify";
var G__150147 = cljs.core.constant$keyword$style;
var G__150148 = "padding-left:10%; padding-right:5%;";
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__150145,G__150146,G__150147,G__150148) : tailrecursion.hoplon.div.call(null,G__150145,G__150146,G__150147,G__150148));
})(),attr,kids);
};
var ui$book$container = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150149__i = 0, G__150149__a = new Array(arguments.length -  0);
while (G__150149__i < G__150149__a.length) {G__150149__a[G__150149__i] = arguments[G__150149__i + 0]; ++G__150149__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150149__a,0);
} 
return ui$book$container__delegate.call(this,args__10403__auto__);};
ui$book$container.cljs$lang$maxFixedArity = 0;
ui$book$container.cljs$lang$applyTo = (function (arglist__150150){
var args__10403__auto__ = cljs.core.seq(arglist__150150);
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
var vec__150178 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150178,(0),null);
var map__150179__$1 = ((cljs.core.seq_QMARK_(map__150179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150179):map__150179);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150179__$1,cljs.core.constant$keyword$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150179__$1,cljs.core.constant$keyword$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150178,(1),null);
var G__150180 = cljs.core.constant$keyword$scroll_DASH_to;
var G__150181 = tailrecursion.javelin.formula(((function (G__150180,vec__150178,map__150179,map__150179__$1,title,tagline,kids){
return (function (G__150189,G__150190,G__150191){
var G__150192 = (function (){var G__150194 = "#!/home/";
return (G__150190.cljs$core$IFn$_invoke$arity$1 ? G__150190.cljs$core$IFn$_invoke$arity$1(G__150194) : G__150190.call(null,G__150194));
})();
var G__150193 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__150191)),cljs.core.str("/")].join('');
return (G__150189.cljs$core$IFn$_invoke$arity$2 ? G__150189.cljs$core$IFn$_invoke$arity$2(G__150192,G__150193) : G__150189.call(null,G__150192,G__150193));
});})(G__150180,vec__150178,map__150179,map__150179__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,tailrecursion.hoplon.route_cell,ui.book._STAR_book_data_STAR_);
var G__150182 = cljs.core.constant$keyword$at_DASH_top;
var G__150183 = ((function (G__150180,G__150181,G__150182,vec__150178,map__150179,map__150179__$1,title,tagline,kids){
return (function (){
var G__150195 = ui.book.scroll_location;
var G__150196 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150197 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150197) : cljs.core.deref.call(null,G__150197));
})())),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__150195,G__150196) : cljs.core.reset_BANG_.call(null,G__150195,G__150196));
});})(G__150180,G__150181,G__150182,vec__150178,map__150179,map__150179__$1,title,tagline,kids))
;
var G__150184 = cljs.core.constant$keyword$class;
var G__150185 = "text-justify";
var G__150186 = (function (){var G__150198 = cljs.core.constant$keyword$class;
var G__150199 = "text-left";
var G__150200 = cljs.core.constant$keyword$title.cljs$core$IFn$_invoke$arity$1((function (){var G__150201 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150201) : cljs.core.deref.call(null,G__150201));
})());
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__150198,G__150199,G__150200) : tailrecursion.hoplon.h1.call(null,G__150198,G__150199,G__150200));
})();
var G__150187 = (function (){var G__150202 = cljs.core.constant$keyword$tagline.cljs$core$IFn$_invoke$arity$1((function (){var G__150203 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150203) : cljs.core.deref.call(null,G__150203));
})());
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__150202) : tailrecursion.hoplon.h3.call(null,G__150202));
})();
var G__150188 = (function (){var G__150204 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__150204) : tailrecursion.hoplon.div.call(null,G__150204));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__150180,G__150181,G__150182,G__150183,G__150184,G__150185,G__150186,G__150187,G__150188) : tailrecursion.hoplon.div.call(null,G__150180,G__150181,G__150182,G__150183,G__150184,G__150185,G__150186,G__150187,G__150188));
};
var ui$book$about = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150205__i = 0, G__150205__a = new Array(arguments.length -  0);
while (G__150205__i < G__150205__a.length) {G__150205__a[G__150205__i] = arguments[G__150205__i + 0]; ++G__150205__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150205__a,0);
} 
return ui$book$about__delegate.call(this,args__10403__auto__);};
ui$book$about.cljs$lang$maxFixedArity = 0;
ui$book$about.cljs$lang$applyTo = (function (arglist__150206){
var args__10403__auto__ = cljs.core.seq(arglist__150206);
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
var vec__150210 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150210,(0),null);
var map__150211__$1 = ((cljs.core.seq_QMARK_(map__150211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150211):map__150211);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150211__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150210,(1),null);
var ch = (cljs.core.count(ui.book.get_chapters((function (){var G__150212 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150212) : cljs.core.deref.call(null,G__150212));
})())) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__150210,map__150211,map__150211__$1,title,kids){
return (function (p1__1439_SHARP_){
return cljs.core.assoc_in(p1__1439_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__150210,map__150211,map__150211__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h1,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$chapter = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150213__i = 0, G__150213__a = new Array(arguments.length -  0);
while (G__150213__i < G__150213__a.length) {G__150213__a[G__150213__i] = arguments[G__150213__i + 0]; ++G__150213__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150213__a,0);
} 
return ui$book$chapter__delegate.call(this,args__10403__auto__);};
ui$book$chapter.cljs$lang$maxFixedArity = 0;
ui$book$chapter.cljs$lang$applyTo = (function (arglist__150214){
var args__10403__auto__ = cljs.core.seq(arglist__150214);
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
var vec__150219 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150219,(0),null);
var map__150220__$1 = ((cljs.core.seq_QMARK_(map__150220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150220):map__150220);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150220__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150219,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150221 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150221) : cljs.core.deref.call(null,G__150221));
})()));
var sect__$1 = (cljs.core.count(ui.book.get_sects((function (){var G__150222 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150222) : cljs.core.deref.call(null,G__150222));
})(),ch)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__150219,map__150220,map__150220__$1,title,kids){
return (function (p1__1440_SHARP_){
return cljs.core.assoc_in(p1__1440_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__150219,map__150220,map__150220__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h2,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$sect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150223__i = 0, G__150223__a = new Array(arguments.length -  0);
while (G__150223__i < G__150223__a.length) {G__150223__a[G__150223__i] = arguments[G__150223__i + 0]; ++G__150223__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150223__a,0);
} 
return ui$book$sect__delegate.call(this,args__10403__auto__);};
ui$book$sect.cljs$lang$maxFixedArity = 0;
ui$book$sect.cljs$lang$applyTo = (function (arglist__150224){
var args__10403__auto__ = cljs.core.seq(arglist__150224);
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
var vec__150230 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150230,(0),null);
var map__150231__$1 = ((cljs.core.seq_QMARK_(map__150231))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150231):map__150231);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150231__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150230,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150232 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150232) : cljs.core.deref.call(null,G__150232));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__150233 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150233) : cljs.core.deref.call(null,G__150233));
})(),ch));
var sub = (cljs.core.count(ui.book.get_subsects((function (){var G__150234 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150234) : cljs.core.deref.call(null,G__150234));
})(),ch,sect)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__150230,map__150231,map__150231__$1,title,kids){
return (function (p1__1441_SHARP_){
return cljs.core.assoc_in(p1__1441_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__150230,map__150231,map__150231__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$subsect = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150235__i = 0, G__150235__a = new Array(arguments.length -  0);
while (G__150235__i < G__150235__a.length) {G__150235__a[G__150235__i] = arguments[G__150235__i + 0]; ++G__150235__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150235__a,0);
} 
return ui$book$subsect__delegate.call(this,args__10403__auto__);};
ui$book$subsect.cljs$lang$maxFixedArity = 0;
ui$book$subsect.cljs$lang$applyTo = (function (arglist__150236){
var args__10403__auto__ = cljs.core.seq(arglist__150236);
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
var vec__150243 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150243,(0),null);
var map__150244__$1 = ((cljs.core.seq_QMARK_(map__150244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150244):map__150244);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150244__$1,cljs.core.constant$keyword$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150243,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150245 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150245) : cljs.core.deref.call(null,G__150245));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__150246 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150246) : cljs.core.deref.call(null,G__150246));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__150247 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150247) : cljs.core.deref.call(null,G__150247));
})(),ch,sect));
var ssub__$1 = (cljs.core.count(ui.book.get_ssubs((function (){var G__150248 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150248) : cljs.core.deref.call(null,G__150248));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1,cljs.core.constant$keyword$type,cljs.core.constant$keyword$ssub,cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__150243,map__150244,map__150244__$1,title,kids){
return (function (p1__1442_SHARP_){
return cljs.core.assoc_in(p1__1442_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__150243,map__150244,map__150244__$1,title,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h4,cljs.core.constant$keyword$title,title__$1,cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$ssub = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150249__i = 0, G__150249__a = new Array(arguments.length -  0);
while (G__150249__i < G__150249__a.length) {G__150249__a[G__150249__i] = arguments[G__150249__i + 0]; ++G__150249__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150249__a,0);
} 
return ui$book$ssub__delegate.call(this,args__10403__auto__);};
ui$book$ssub.cljs$lang$maxFixedArity = 0;
ui$book$ssub.cljs$lang$applyTo = (function (arglist__150250){
var args__10403__auto__ = cljs.core.seq(arglist__150250);
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
var vec__150257 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150257,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150257,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150258 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150258) : cljs.core.deref.call(null,G__150258));
})()));
var sect = cljs.core.count(ui.book.get_sects((function (){var G__150259 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150259) : cljs.core.deref.call(null,G__150259));
})(),ch));
var sub = cljs.core.count(ui.book.get_subsects((function (){var G__150260 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150260) : cljs.core.deref.call(null,G__150260));
})(),ch,sect));
var ssub = (cljs.core.count(ui.book.get_ssubs((function (){var G__150261 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150261) : cljs.core.deref.call(null,G__150261));
})(),ch,sect,sub)) + (1));
var link = ui.book.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.constant$keyword$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ch.cljs$core$IFn$_invoke$arity$1((function (){var G__150262 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150262) : cljs.core.deref.call(null,G__150262));
})()).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__150257,attr,kids){
return (function (p1__1443_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__1443_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__150257,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"exercises",cljs.core.constant$keyword$title,title,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__150257,attr,kids){
return (function (p1__1444_SHARP_){
return cljs.core.assoc_in(p1__1444_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$sect,sect,cljs.core.constant$keyword$sub,sub,cljs.core.constant$keyword$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__150257,attr,kids))
);

return ui.book.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$size,tailrecursion.hoplon.h3,cljs.core.constant$keyword$title,"",cljs.core.constant$keyword$link,link,kids], 0));
};
var ui$book$exercises = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150263__i = 0, G__150263__a = new Array(arguments.length -  0);
while (G__150263__i < G__150263__a.length) {G__150263__a[G__150263__i] = arguments[G__150263__i + 0]; ++G__150263__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150263__a,0);
} 
return ui$book$exercises__delegate.call(this,args__10403__auto__);};
ui$book$exercises.cljs$lang$maxFixedArity = 0;
ui$book$exercises.cljs$lang$applyTo = (function (arglist__150264){
var args__10403__auto__ = cljs.core.seq(arglist__150264);
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
var vec__150275 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150275,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150275,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150276 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150276) : cljs.core.deref.call(null,G__150276));
})()));
var ex = (cljs.core.count(ui.book.get_exs((function (){var G__150277 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150277) : cljs.core.deref.call(null,G__150277));
})(),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"exercise",cljs.core.constant$keyword$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__150275,attr,kids){
return (function (p1__1445_SHARP_){
return cljs.core.assoc_in(p1__1445_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__150275,attr,kids))
);

var G__150278 = cljs.core.constant$keyword$type;
var G__150279 = "exercise";
var G__150280 = cljs.core.constant$keyword$class;
var G__150281 = "exercise";
var G__150282 = (function (){var G__150284 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__150284) : tailrecursion.hoplon.h3.call(null,G__150284));
})();
var G__150283 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__150278,G__150279,G__150280,G__150281,G__150282,G__150283) : tailrecursion.hoplon.div.call(null,G__150278,G__150279,G__150280,G__150281,G__150282,G__150283));
};
var ui$book$exercise = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150285__i = 0, G__150285__a = new Array(arguments.length -  0);
while (G__150285__i < G__150285__a.length) {G__150285__a[G__150285__i] = arguments[G__150285__i + 0]; ++G__150285__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150285__a,0);
} 
return ui$book$exercise__delegate.call(this,args__10403__auto__);};
ui$book$exercise.cljs$lang$maxFixedArity = 0;
ui$book$exercise.cljs$lang$applyTo = (function (arglist__150286){
var args__10403__auto__ = cljs.core.seq(arglist__150286);
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
var vec__150296 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150296,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150296,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__150296,_,children){
return (function (G__150297){
return [cljs.core.str((cljs.core.truth_(G__150297)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__150296,_,children))
).call(null,open);
var G__150298 = (function (){var G__150300 = cljs.core.constant$keyword$click;
var G__150301 = ((function (G__150300,open,button_text,vec__150296,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__150300,open,button_text,vec__150296,_,children))
;
var G__150302 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__150300,G__150301,G__150302) : tailrecursion.hoplon.button.call(null,G__150300,G__150301,G__150302));
})();
var G__150299 = (function (){var G__150303 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,"solution",cljs.core.constant$keyword$toggle,open], null);
var G__150304 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150303,G__150304) : tailrecursion.hoplon.div.call(null,G__150303,G__150304));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150298,G__150299) : tailrecursion.hoplon.div.call(null,G__150298,G__150299));
};
var ui$book$q_a = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150305__i = 0, G__150305__a = new Array(arguments.length -  0);
while (G__150305__i < G__150305__a.length) {G__150305__a[G__150305__i] = arguments[G__150305__i + 0]; ++G__150305__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150305__a,0);
} 
return ui$book$q_a__delegate.call(this,args__10403__auto__);};
ui$book$q_a.cljs$lang$maxFixedArity = 0;
ui$book$q_a.cljs$lang$applyTo = (function (arglist__150306){
var args__10403__auto__ = cljs.core.seq(arglist__150306);
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
var vec__150324 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__150325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150324,(0),null);
var map__150325__$1 = ((cljs.core.seq_QMARK_(map__150325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__150325):map__150325);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__150325__$1,cljs.core.constant$keyword$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150324,(1),null);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150326 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150326) : cljs.core.deref.call(null,G__150326));
})()));
var figr = (cljs.core.count(ui.book.get_figs((function (){var G__150327 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150327) : cljs.core.deref.call(null,G__150327));
})(),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150328 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150328) : cljs.core.deref.call(null,G__150328));
})()))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("img/"),cljs.core.str(clojure.string.lower_case(cljs.core.constant$keyword$short_DASH_title.cljs$core$IFn$_invoke$arity$1((function (){var G__150329 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150329) : cljs.core.deref.call(null,G__150329));
})()))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$footer,footer,cljs.core.constant$keyword$src,src,cljs.core.constant$keyword$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__150324,map__150325,map__150325__$1,footer,_){
return (function (p1__1446_SHARP_){
return cljs.core.assoc_in(p1__1446_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ch,ch,cljs.core.constant$keyword$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__150324,map__150325,map__150325__$1,footer,_))
);

var G__150330 = (function (){var G__150332 = cljs.core.constant$keyword$src;
var G__150333 = src;
var G__150334 = cljs.core.constant$keyword$class;
var G__150335 = "img-responsive";
var G__150336 = cljs.core.constant$keyword$alt;
var G__150337 = "Figure 1.3";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(G__150332,G__150333,G__150334,G__150335,G__150336,G__150337) : tailrecursion.hoplon.img.call(null,G__150332,G__150333,G__150334,G__150335,G__150336,G__150337));
})();
var G__150331 = (function (){var G__150338 = (function (){var G__150340 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__150340) : tailrecursion.hoplon.b.call(null,G__150340));
})();
var G__150339 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__150338,G__150339) : tailrecursion.hoplon.p.call(null,G__150338,G__150339));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__150330,G__150331) : tailrecursion.hoplon.div.call(null,G__150330,G__150331));
};
var ui$book$fig = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150341__i = 0, G__150341__a = new Array(arguments.length -  0);
while (G__150341__i < G__150341__a.length) {G__150341__a[G__150341__i] = arguments[G__150341__i + 0]; ++G__150341__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150341__a,0);
} 
return ui$book$fig__delegate.call(this,args__10403__auto__);};
ui$book$fig.cljs$lang$maxFixedArity = 0;
ui$book$fig.cljs$lang$applyTo = (function (arglist__150342){
var args__10403__auto__ = cljs.core.seq(arglist__150342);
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
var vec__150346 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150346,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150346,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__150347 = cljs.core.constant$keyword$class;
var G__150348 = "img-responsive";
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$2(G__150347,G__150348) : tailrecursion.hoplon.img.call(null,G__150347,G__150348));
})(),attr,kids);
};
var ui$book$image = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150349__i = 0, G__150349__a = new Array(arguments.length -  0);
while (G__150349__i < G__150349__a.length) {G__150349__a[G__150349__i] = arguments[G__150349__i + 0]; ++G__150349__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150349__a,0);
} 
return ui$book$image__delegate.call(this,args__10403__auto__);};
ui$book$image.cljs$lang$maxFixedArity = 0;
ui$book$image.cljs$lang$applyTo = (function (arglist__150350){
var args__10403__auto__ = cljs.core.seq(arglist__150350);
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
var vec__150374 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150374,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__150374,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(ui.book.get_chapters((function (){var G__150375 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150375) : cljs.core.deref.call(null,G__150375));
})()));
var ftn = (cljs.core.count(cljs.core.constant$keyword$footnote.cljs$core$IFn$_invoke$arity$1((function (){var G__150376 = ui.book._STAR_book_data_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__150376) : cljs.core.deref.call(null,G__150376));
})())) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ui.book._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__150374,attr,kids){
return (function (p1__1447_SHARP_){
return cljs.core.assoc_in(p1__1447_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__150374,attr,kids))
);

var G__150377 = cljs.core.constant$keyword$style;
var G__150378 = "display:inline;";
var G__150379 = (function (){var G__150381 = cljs.core.constant$keyword$click;
var G__150382 = ((function (G__150381,G__150377,G__150378,hidden,ch,ftn,this_data,vec__150374,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__150381,G__150377,G__150378,hidden,ch,ftn,this_data,vec__150374,attr,kids))
;
var G__150383 = cljs.core.constant$keyword$style;
var G__150384 = "color:#0000ff";
var G__150385 = (function (){var G__150386 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__150386) : tailrecursion.hoplon.sup.call(null,G__150386));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__150381,G__150382,G__150383,G__150384,G__150385) : tailrecursion.hoplon.span.call(null,G__150381,G__150382,G__150383,G__150384,G__150385));
})();
var G__150380 = (function (){var G__150387 = cljs.core.constant$keyword$class;
var G__150388 = tailrecursion.javelin.formula(((function (G__150387,G__150377,G__150378,G__150379,hidden,ch,ftn,this_data,vec__150374,attr,kids){
return (function (G__150390){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$hidden,G__150390,cljs.core.constant$keyword$popover,true,cljs.core.constant$keyword$bottom,true], null);
});})(G__150387,G__150377,G__150378,G__150379,hidden,ch,ftn,this_data,vec__150374,attr,kids))
).call(null,hidden);
var G__150389 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__150391 = cljs.core.constant$keyword$class;
var G__150392 = "popover-content";
var G__150393 = cljs.core.constant$keyword$click;
var G__150394 = ((function (G__150391,G__150392,G__150393,G__150387,G__150388,G__150377,G__150378,G__150379,hidden,ch,ftn,this_data,vec__150374,attr,kids){
return (function (){
var G__150395 = hidden;
var G__150396 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__150395,G__150396) : cljs.core.reset_BANG_.call(null,G__150395,G__150396));
});})(G__150391,G__150392,G__150393,G__150387,G__150388,G__150377,G__150378,G__150379,hidden,ch,ftn,this_data,vec__150374,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__150391,G__150392,G__150393,G__150394) : tailrecursion.hoplon.div.call(null,G__150391,G__150392,G__150393,G__150394));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__150387,G__150388,G__150389) : tailrecursion.hoplon.div.call(null,G__150387,G__150388,G__150389));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__150377,G__150378,G__150379,G__150380) : tailrecursion.hoplon.div.call(null,G__150377,G__150378,G__150379,G__150380));
};
var ui$book$footnote = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__150397__i = 0, G__150397__a = new Array(arguments.length -  0);
while (G__150397__i < G__150397__a.length) {G__150397__a[G__150397__i] = arguments[G__150397__i + 0]; ++G__150397__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__150397__a,0);
} 
return ui$book$footnote__delegate.call(this,args__10403__auto__);};
ui$book$footnote.cljs$lang$maxFixedArity = 0;
ui$book$footnote.cljs$lang$applyTo = (function (arglist__150398){
var args__10403__auto__ = cljs.core.seq(arglist__150398);
return ui$book$footnote__delegate(args__10403__auto__);
});
ui$book$footnote.cljs$core$IFn$_invoke$arity$variadic = ui$book$footnote__delegate;
return ui$book$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$double_DASH_angle,(function (_,kids){
return ui.book.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
