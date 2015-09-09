// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('book.general.parts');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.markdown');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('general.toc');
goog.require('tailrecursion.javelin');
goog.require('clojure.string');
book.general.parts._STAR_book_data_STAR_ = tailrecursion.javelin.cell(cljs.core.PersistentArrayMap.EMPTY);
book.general.parts.make_link = (function book$general$parts$make_link(){
var args184400 = [];
var len__6061__auto___184403 = arguments.length;
var i__6062__auto___184404 = (0);
while(true){
if((i__6062__auto___184404 < len__6061__auto___184403)){
args184400.push((arguments[i__6062__auto___184404]));

var G__184405 = (i__6062__auto___184404 + (1));
i__6062__auto___184404 = G__184405;
continue;
} else {
}
break;
}

var G__184402 = args184400.length;
switch (G__184402) {
case 1:
return book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args184400.length)].join('')));

}
});

book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return [cljs.core.str("#!/ch/"),cljs.core.str(ch),cljs.core.str("/")].join('');
});

book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2 = (function (ch,sect){
return [cljs.core.str("#!/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/")].join('');
});

book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3 = (function (ch,sect,sub){
return [cljs.core.str("#!/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/")].join('');
});

book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4 = (function (ch,sect,sub,ssub){
return [cljs.core.str("#!/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/ssub/"),cljs.core.str(ssub),cljs.core.str("/")].join('');
});

book.general.parts.make_link.cljs$lang$maxFixedArity = 4;
book.general.parts.get_chapters = (function book$general$parts$get_chapters(data){
return cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data);
});
book.general.parts.get_sects = (function book$general$parts$get_sects(data,ch){
return cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_subsects = (function book$general$parts$get_subsects(data,ch,sect){
return cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect));
});
book.general.parts.get_ssubs = (function book$general$parts$get_ssubs(data,ch,sect,sub){
return cljs.core.cst$kw$ssub.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sect.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect)).call(null,sub));
});
book.general.parts.get_exs = (function book$general$parts$get_exs(data,ch){
return cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_figs = (function book$general$parts$get_figs(data,ch){
return cljs.core.cst$kw$fig.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_footnotes = (function book$general$parts$get_footnotes(data,ch){
return cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
/**
 * @param {...*} var_args
 */
book.general.parts.part = (function() { 
var book$general$parts$part__delegate = function (args__8262__auto__){
var vec__184422 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184422,(0),null);
var map__184423__$1 = ((((!((map__184423 == null)))?((((map__184423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184423):map__184423);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184423__$1,cljs.core.cst$kw$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184423__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184423__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184422,(1),null);
var G__184428 = cljs.core.cst$kw$scroll_DASH_to;
var G__184429 = tailrecursion.javelin.formula(((function (G__184428,vec__184422,map__184423,map__184423__$1,size,link,title,kids){
return (function (G__184434,G__184435,G__184436){
return (G__184434.cljs$core$IFn$_invoke$arity$2 ? G__184434.cljs$core$IFn$_invoke$arity$2(G__184435,G__184436) : G__184434.call(null,G__184435,G__184436));
});})(G__184428,vec__184422,map__184423,map__184423__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link);
var G__184430 = cljs.core.cst$kw$at_DASH_top;
var G__184431 = ((function (G__184428,G__184429,G__184430,vec__184422,map__184423,map__184423__$1,size,link,title,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__184428,G__184429,G__184430,vec__184422,map__184423,map__184423__$1,size,link,title,kids))
;
var G__184432 = (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"text-left",title) : size.call(null,cljs.core.cst$kw$class,"text-left",title));
var G__184433 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"",kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__184428,G__184429,G__184430,G__184431,G__184432,G__184433) : tailrecursion.hoplon.div.call(null,G__184428,G__184429,G__184430,G__184431,G__184432,G__184433));
};
var book$general$parts$part = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184437__i = 0, G__184437__a = new Array(arguments.length -  0);
while (G__184437__i < G__184437__a.length) {G__184437__a[G__184437__i] = arguments[G__184437__i + 0]; ++G__184437__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184437__a,0);
} 
return book$general$parts$part__delegate.call(this,args__8262__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__184438){
var args__8262__auto__ = cljs.core.seq(arglist__184438);
return book$general$parts$part__delegate(args__8262__auto__);
});
book$general$parts$part.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$part__delegate;
return book$general$parts$part;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.content = (function() { 
var book$general$parts$content__delegate = function (args__8262__auto__){
var vec__184440 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184440,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184440,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;")),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184441__i = 0, G__184441__a = new Array(arguments.length -  0);
while (G__184441__i < G__184441__a.length) {G__184441__a[G__184441__i] = arguments[G__184441__i + 0]; ++G__184441__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184441__a,0);
} 
return book$general$parts$content__delegate.call(this,args__8262__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__184442){
var args__8262__auto__ = cljs.core.seq(arglist__184442);
return book$general$parts$content__delegate(args__8262__auto__);
});
book$general$parts$content.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$content__delegate;
return book$general$parts$content;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.about = (function() { 
var book$general$parts$about__delegate = function (args__8262__auto__){
var vec__184471 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184471,(0),null);
var map__184472__$1 = ((((!((map__184472 == null)))?((((map__184472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184472):map__184472);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184472__$1,cljs.core.cst$kw$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184472__$1,cljs.core.cst$kw$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184471,(1),null);
var G__184479 = cljs.core.cst$kw$scroll_DASH_to;
var G__184480 = tailrecursion.javelin.formula(((function (G__184479,vec__184471,map__184472,map__184472__$1,title,tagline,kids){
return (function (G__184488,G__184489,G__184490){
var G__184491 = G__184489;
var G__184492 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__184490)),cljs.core.str("/")].join('');
return (G__184488.cljs$core$IFn$_invoke$arity$2 ? G__184488.cljs$core$IFn$_invoke$arity$2(G__184491,G__184492) : G__184488.call(null,G__184491,G__184492));
});})(G__184479,vec__184471,map__184472,map__184472__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_);
var G__184481 = cljs.core.cst$kw$at_DASH_top;
var G__184482 = ((function (G__184479,G__184480,G__184481,vec__184471,map__184472,map__184472__$1,title,tagline,kids){
return (function (){
var G__184493 = general.toc.scroll_location;
var G__184494 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__184493,G__184494) : cljs.core.reset_BANG_.call(null,G__184493,G__184494));
});})(G__184479,G__184480,G__184481,vec__184471,map__184472,map__184472__$1,title,tagline,kids))
;
var G__184483 = cljs.core.cst$kw$class;
var G__184484 = "text-justify";
var G__184485 = (function (){var G__184495 = cljs.core.cst$kw$class;
var G__184496 = "text-left";
var G__184497 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__184495,G__184496,G__184497) : tailrecursion.hoplon.h1.call(null,G__184495,G__184496,G__184497));
})();
var G__184486 = (function (){var G__184498 = cljs.core.cst$kw$tagline.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__184498) : tailrecursion.hoplon.h3.call(null,G__184498));
})();
var G__184487 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.div.call(null,kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__184479,G__184480,G__184481,G__184482,G__184483,G__184484,G__184485,G__184486,G__184487) : tailrecursion.hoplon.div.call(null,G__184479,G__184480,G__184481,G__184482,G__184483,G__184484,G__184485,G__184486,G__184487));
};
var book$general$parts$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184499__i = 0, G__184499__a = new Array(arguments.length -  0);
while (G__184499__i < G__184499__a.length) {G__184499__a[G__184499__i] = arguments[G__184499__i + 0]; ++G__184499__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184499__a,0);
} 
return book$general$parts$about__delegate.call(this,args__8262__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__184500){
var args__8262__auto__ = cljs.core.seq(arglist__184500);
return book$general$parts$about__delegate(args__8262__auto__);
});
book$general$parts$about.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$about__delegate;
return book$general$parts$about;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.chapter = (function() { 
var book$general$parts$chapter__delegate = function (args__8262__auto__){
var vec__184504 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184504,(0),null);
var map__184505__$1 = ((((!((map__184505 == null)))?((((map__184505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184505):map__184505);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184505__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184504,(1),null);
var ch = (cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__184504,map__184505,map__184505__$1,title,kids){
return (function (p1__2596_SHARP_){
return cljs.core.assoc_in(p1__2596_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__184504,map__184505,map__184505__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h1,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184507__i = 0, G__184507__a = new Array(arguments.length -  0);
while (G__184507__i < G__184507__a.length) {G__184507__a[G__184507__i] = arguments[G__184507__i + 0]; ++G__184507__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184507__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__8262__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__184508){
var args__8262__auto__ = cljs.core.seq(arglist__184508);
return book$general$parts$chapter__delegate(args__8262__auto__);
});
book$general$parts$chapter.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$chapter__delegate;
return book$general$parts$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.sect = (function() { 
var book$general$parts$sect__delegate = function (args__8262__auto__){
var vec__184512 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184512,(0),null);
var map__184513__$1 = ((((!((map__184513 == null)))?((((map__184513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184513):map__184513);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184513__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184512,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect__$1 = (cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__184512,map__184513,map__184513__$1,title,kids){
return (function (p1__2597_SHARP_){
return cljs.core.assoc_in(p1__2597_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__184512,map__184513,map__184513__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h2,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184515__i = 0, G__184515__a = new Array(arguments.length -  0);
while (G__184515__i < G__184515__a.length) {G__184515__a[G__184515__i] = arguments[G__184515__i + 0]; ++G__184515__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184515__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__8262__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__184516){
var args__8262__auto__ = cljs.core.seq(arglist__184516);
return book$general$parts$sect__delegate(args__8262__auto__);
});
book$general$parts$sect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$sect__delegate;
return book$general$parts$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.subsect = (function() { 
var book$general$parts$subsect__delegate = function (args__8262__auto__){
var vec__184520 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184520,(0),null);
var map__184521__$1 = ((((!((map__184521 == null)))?((((map__184521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184521):map__184521);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184521__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184520,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = (cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__184520,map__184521,map__184521__$1,title,kids){
return (function (p1__2598_SHARP_){
return cljs.core.assoc_in(p1__2598_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__184520,map__184521,map__184521__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184523__i = 0, G__184523__a = new Array(arguments.length -  0);
while (G__184523__i < G__184523__a.length) {G__184523__a[G__184523__i] = arguments[G__184523__i + 0]; ++G__184523__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184523__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__8262__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__184524){
var args__8262__auto__ = cljs.core.seq(arglist__184524);
return book$general$parts$subsect__delegate(args__8262__auto__);
});
book$general$parts$subsect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$subsect__delegate;
return book$general$parts$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.ssub = (function() { 
var book$general$parts$ssub__delegate = function (args__8262__auto__){
var vec__184528 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184528,(0),null);
var map__184529__$1 = ((((!((map__184529 == null)))?((((map__184529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184529):map__184529);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184529__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184528,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub__$1 = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$ssub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__184528,map__184529,map__184529__$1,title,kids){
return (function (p1__2599_SHARP_){
return cljs.core.assoc_in(p1__2599_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__184528,map__184529,map__184529__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h4,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184531__i = 0, G__184531__a = new Array(arguments.length -  0);
while (G__184531__i < G__184531__a.length) {G__184531__a[G__184531__i] = arguments[G__184531__i + 0]; ++G__184531__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184531__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__8262__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__184532){
var args__8262__auto__ = cljs.core.seq(arglist__184532);
return book$general$parts$ssub__delegate(args__8262__auto__);
});
book$general$parts$ssub.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$ssub__delegate;
return book$general$parts$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercises = (function() { 
var book$general$parts$exercises__delegate = function (args__8262__auto__){
var vec__184534 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184534,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184534,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__184534,attr,kids){
return (function (p1__2600_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__2600_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__184534,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"exercises",cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__184534,attr,kids){
return (function (p1__2601_SHARP_){
return cljs.core.assoc_in(p1__2601_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__184534,attr,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,"",cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184535__i = 0, G__184535__a = new Array(arguments.length -  0);
while (G__184535__i < G__184535__a.length) {G__184535__a[G__184535__i] = arguments[G__184535__i + 0]; ++G__184535__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184535__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__8262__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__184536){
var args__8262__auto__ = cljs.core.seq(arglist__184536);
return book$general$parts$exercises__delegate(args__8262__auto__);
});
book$general$parts$exercises.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercises__delegate;
return book$general$parts$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercise = (function() { 
var book$general$parts$exercise__delegate = function (args__8262__auto__){
var vec__184546 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184546,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184546,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ex = (cljs.core.count(book.general.parts.get_exs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"exercise",cljs.core.cst$kw$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__184546,attr,kids){
return (function (p1__2602_SHARP_){
return cljs.core.assoc_in(p1__2602_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__184546,attr,kids))
);

var G__184548 = cljs.core.cst$kw$type;
var G__184549 = "exercise";
var G__184550 = cljs.core.cst$kw$class;
var G__184551 = "exercise";
var G__184552 = (function (){var G__184554 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__184554) : tailrecursion.hoplon.h3.call(null,G__184554));
})();
var G__184553 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__184548,G__184549,G__184550,G__184551,G__184552,G__184553) : tailrecursion.hoplon.div.call(null,G__184548,G__184549,G__184550,G__184551,G__184552,G__184553));
};
var book$general$parts$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184555__i = 0, G__184555__a = new Array(arguments.length -  0);
while (G__184555__i < G__184555__a.length) {G__184555__a[G__184555__i] = arguments[G__184555__i + 0]; ++G__184555__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184555__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__8262__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__184556){
var args__8262__auto__ = cljs.core.seq(arglist__184556);
return book$general$parts$exercise__delegate(args__8262__auto__);
});
book$general$parts$exercise.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercise__delegate;
return book$general$parts$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.q_a = (function() { 
var book$general$parts$q_a__delegate = function (args__8262__auto__){
var vec__184569 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184569,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184569,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__184569,_,children){
return (function (G__184570){
return [cljs.core.str((cljs.core.truth_(G__184570)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__184569,_,children))
).call(null,open);
var G__184574 = (function (){var G__184576 = cljs.core.cst$kw$click;
var G__184577 = ((function (G__184576,open,button_text,vec__184569,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__184576,open,button_text,vec__184569,_,children))
;
var G__184578 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__184576,G__184577,G__184578) : tailrecursion.hoplon.button.call(null,G__184576,G__184577,G__184578));
})();
var G__184575 = (function (){var G__184579 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"solution",cljs.core.cst$kw$toggle,open], null);
var G__184580 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184579,G__184580) : tailrecursion.hoplon.div.call(null,G__184579,G__184580));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184574,G__184575) : tailrecursion.hoplon.div.call(null,G__184574,G__184575));
};
var book$general$parts$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184581__i = 0, G__184581__a = new Array(arguments.length -  0);
while (G__184581__i < G__184581__a.length) {G__184581__a[G__184581__i] = arguments[G__184581__i + 0]; ++G__184581__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184581__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__8262__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__184582){
var args__8262__auto__ = cljs.core.seq(arglist__184582);
return book$general$parts$q_a__delegate(args__8262__auto__);
});
book$general$parts$q_a.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$q_a__delegate;
return book$general$parts$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.fig = (function() { 
var book$general$parts$fig__delegate = function (args__8262__auto__){
var vec__184592 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__184593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184592,(0),null);
var map__184593__$1 = ((((!((map__184593 == null)))?((((map__184593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__184593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184593):map__184593);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184593__$1,cljs.core.cst$kw$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184592,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var figr = (cljs.core.count(book.general.parts.get_figs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$footer,footer,cljs.core.cst$kw$src,src,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__184592,map__184593,map__184593__$1,footer,_){
return (function (p1__2603_SHARP_){
return cljs.core.assoc_in(p1__2603_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__184592,map__184593,map__184593__$1,footer,_))
);

var G__184595 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3"));
var G__184596 = (function (){var G__184598 = (function (){var G__184600 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__184600) : tailrecursion.hoplon.b.call(null,G__184600));
})();
var G__184599 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__184598,G__184599) : tailrecursion.hoplon.p.call(null,G__184598,G__184599));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__184595,G__184596) : tailrecursion.hoplon.div.call(null,G__184595,G__184596));
};
var book$general$parts$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184601__i = 0, G__184601__a = new Array(arguments.length -  0);
while (G__184601__i < G__184601__a.length) {G__184601__a[G__184601__i] = arguments[G__184601__i + 0]; ++G__184601__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184601__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__8262__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__184602){
var args__8262__auto__ = cljs.core.seq(arglist__184602);
return book$general$parts$fig__delegate(args__8262__auto__);
});
book$general$parts$fig.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$fig__delegate;
return book$general$parts$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.image = (function() { 
var book$general$parts$image__delegate = function (args__8262__auto__){
var vec__184608 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184608,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184608,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__184609 = cljs.core.cst$kw$class;
var G__184610 = "img-responsive";
var G__184611 = cljs.core.cst$kw$src;
var G__184612 = [cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(attr))].join('');
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__184609,G__184610,G__184611,G__184612) : tailrecursion.hoplon.img.call(null,G__184609,G__184610,G__184611,G__184612));
})(),kids);
};
var book$general$parts$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184613__i = 0, G__184613__a = new Array(arguments.length -  0);
while (G__184613__i < G__184613__a.length) {G__184613__a[G__184613__i] = arguments[G__184613__i + 0]; ++G__184613__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184613__a,0);
} 
return book$general$parts$image__delegate.call(this,args__8262__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__184614){
var args__8262__auto__ = cljs.core.seq(arglist__184614);
return book$general$parts$image__delegate(args__8262__auto__);
});
book$general$parts$image.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$image__delegate;
return book$general$parts$image;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.footnote = (function() { 
var book$general$parts$footnote__delegate = function (args__8262__auto__){
var vec__184641 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184641,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184641,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ftn = (cljs.core.count(cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__184641,attr,kids){
return (function (p1__2604_SHARP_){
return cljs.core.assoc_in(p1__2604_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__184641,attr,kids))
);

var G__184648 = cljs.core.cst$kw$style;
var G__184649 = "display:inline;";
var G__184650 = (function (){var G__184652 = cljs.core.cst$kw$click;
var G__184653 = ((function (G__184652,G__184648,G__184649,hidden,ch,ftn,this_data,vec__184641,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__184652,G__184648,G__184649,hidden,ch,ftn,this_data,vec__184641,attr,kids))
;
var G__184654 = cljs.core.cst$kw$style;
var G__184655 = "color:#0000ff";
var G__184656 = (function (){var G__184657 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__184657) : tailrecursion.hoplon.sup.call(null,G__184657));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__184652,G__184653,G__184654,G__184655,G__184656) : tailrecursion.hoplon.span.call(null,G__184652,G__184653,G__184654,G__184655,G__184656));
})();
var G__184651 = (function (){var G__184659 = cljs.core.cst$kw$class;
var G__184660 = tailrecursion.javelin.formula(((function (G__184659,G__184648,G__184649,G__184650,hidden,ch,ftn,this_data,vec__184641,attr,kids){
return (function (G__184662){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,G__184662,cljs.core.cst$kw$popover,true,cljs.core.cst$kw$bottom,true], null);
});})(G__184659,G__184648,G__184649,G__184650,hidden,ch,ftn,this_data,vec__184641,attr,kids))
).call(null,hidden);
var G__184661 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__184663 = cljs.core.cst$kw$class;
var G__184664 = "popover-content";
var G__184665 = cljs.core.cst$kw$click;
var G__184666 = ((function (G__184663,G__184664,G__184665,G__184659,G__184660,G__184648,G__184649,G__184650,hidden,ch,ftn,this_data,vec__184641,attr,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,true) : cljs.core.reset_BANG_.call(null,hidden,true));
});})(G__184663,G__184664,G__184665,G__184659,G__184660,G__184648,G__184649,G__184650,hidden,ch,ftn,this_data,vec__184641,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__184663,G__184664,G__184665,G__184666) : tailrecursion.hoplon.div.call(null,G__184663,G__184664,G__184665,G__184666));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__184659,G__184660,G__184661) : tailrecursion.hoplon.div.call(null,G__184659,G__184660,G__184661));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__184648,G__184649,G__184650,G__184651) : tailrecursion.hoplon.div.call(null,G__184648,G__184649,G__184650,G__184651));
};
var book$general$parts$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__184667__i = 0, G__184667__a = new Array(arguments.length -  0);
while (G__184667__i < G__184667__a.length) {G__184667__a[G__184667__i] = arguments[G__184667__i + 0]; ++G__184667__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__184667__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__8262__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__184668){
var args__8262__auto__ = cljs.core.seq(arglist__184668);
return book$general$parts$footnote__delegate(args__8262__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
