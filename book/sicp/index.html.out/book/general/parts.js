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
var args202914 = [];
var len__6061__auto___202917 = arguments.length;
var i__6062__auto___202918 = (0);
while(true){
if((i__6062__auto___202918 < len__6061__auto___202917)){
args202914.push((arguments[i__6062__auto___202918]));

var G__202919 = (i__6062__auto___202918 + (1));
i__6062__auto___202918 = G__202919;
continue;
} else {
}
break;
}

var G__202916 = args202914.length;
switch (G__202916) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202914.length)].join('')));

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
var vec__202936 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202936,(0),null);
var map__202937__$1 = ((((!((map__202937 == null)))?((((map__202937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202937):map__202937);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202937__$1,cljs.core.cst$kw$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202937__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202937__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202936,(1),null);
var G__202942 = cljs.core.cst$kw$scroll_DASH_to;
var G__202943 = tailrecursion.javelin.formula(((function (G__202942,vec__202936,map__202937,map__202937__$1,size,link,title,kids){
return (function (G__202948,G__202949,G__202950){
return (G__202948.cljs$core$IFn$_invoke$arity$2 ? G__202948.cljs$core$IFn$_invoke$arity$2(G__202949,G__202950) : G__202948.call(null,G__202949,G__202950));
});})(G__202942,vec__202936,map__202937,map__202937__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link);
var G__202944 = cljs.core.cst$kw$at_DASH_top;
var G__202945 = ((function (G__202942,G__202943,G__202944,vec__202936,map__202937,map__202937__$1,size,link,title,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__202942,G__202943,G__202944,vec__202936,map__202937,map__202937__$1,size,link,title,kids))
;
var G__202946 = (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"text-left",title) : size.call(null,cljs.core.cst$kw$class,"text-left",title));
var G__202947 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"",kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__202942,G__202943,G__202944,G__202945,G__202946,G__202947) : tailrecursion.hoplon.div.call(null,G__202942,G__202943,G__202944,G__202945,G__202946,G__202947));
};
var book$general$parts$part = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202951__i = 0, G__202951__a = new Array(arguments.length -  0);
while (G__202951__i < G__202951__a.length) {G__202951__a[G__202951__i] = arguments[G__202951__i + 0]; ++G__202951__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202951__a,0);
} 
return book$general$parts$part__delegate.call(this,args__8262__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__202952){
var args__8262__auto__ = cljs.core.seq(arglist__202952);
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
var vec__202954 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202954,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202954,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;")),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__202955__i = 0, G__202955__a = new Array(arguments.length -  0);
while (G__202955__i < G__202955__a.length) {G__202955__a[G__202955__i] = arguments[G__202955__i + 0]; ++G__202955__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__202955__a,0);
} 
return book$general$parts$content__delegate.call(this,args__8262__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__202956){
var args__8262__auto__ = cljs.core.seq(arglist__202956);
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
var vec__202985 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__202986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202985,(0),null);
var map__202986__$1 = ((((!((map__202986 == null)))?((((map__202986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202986):map__202986);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202986__$1,cljs.core.cst$kw$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202986__$1,cljs.core.cst$kw$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202985,(1),null);
var G__202993 = cljs.core.cst$kw$scroll_DASH_to;
var G__202994 = tailrecursion.javelin.formula(((function (G__202993,vec__202985,map__202986,map__202986__$1,title,tagline,kids){
return (function (G__203002,G__203003,G__203004){
var G__203005 = G__203003;
var G__203006 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__203004)),cljs.core.str("/")].join('');
return (G__203002.cljs$core$IFn$_invoke$arity$2 ? G__203002.cljs$core$IFn$_invoke$arity$2(G__203005,G__203006) : G__203002.call(null,G__203005,G__203006));
});})(G__202993,vec__202985,map__202986,map__202986__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_);
var G__202995 = cljs.core.cst$kw$at_DASH_top;
var G__202996 = ((function (G__202993,G__202994,G__202995,vec__202985,map__202986,map__202986__$1,title,tagline,kids){
return (function (){
var G__203007 = general.toc.scroll_location;
var G__203008 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__203007,G__203008) : cljs.core.reset_BANG_.call(null,G__203007,G__203008));
});})(G__202993,G__202994,G__202995,vec__202985,map__202986,map__202986__$1,title,tagline,kids))
;
var G__202997 = cljs.core.cst$kw$class;
var G__202998 = "text-justify";
var G__202999 = (function (){var G__203009 = cljs.core.cst$kw$class;
var G__203010 = "text-left";
var G__203011 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__203009,G__203010,G__203011) : tailrecursion.hoplon.h1.call(null,G__203009,G__203010,G__203011));
})();
var G__203000 = (function (){var G__203012 = cljs.core.cst$kw$tagline.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__203012) : tailrecursion.hoplon.h3.call(null,G__203012));
})();
var G__203001 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.div.call(null,kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__202993,G__202994,G__202995,G__202996,G__202997,G__202998,G__202999,G__203000,G__203001) : tailrecursion.hoplon.div.call(null,G__202993,G__202994,G__202995,G__202996,G__202997,G__202998,G__202999,G__203000,G__203001));
};
var book$general$parts$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203013__i = 0, G__203013__a = new Array(arguments.length -  0);
while (G__203013__i < G__203013__a.length) {G__203013__a[G__203013__i] = arguments[G__203013__i + 0]; ++G__203013__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203013__a,0);
} 
return book$general$parts$about__delegate.call(this,args__8262__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__203014){
var args__8262__auto__ = cljs.core.seq(arglist__203014);
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
var vec__203018 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203018,(0),null);
var map__203019__$1 = ((((!((map__203019 == null)))?((((map__203019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203019):map__203019);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203019__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203018,(1),null);
var ch = (cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__203018,map__203019,map__203019__$1,title,kids){
return (function (p1__6893_SHARP_){
return cljs.core.assoc_in(p1__6893_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__203018,map__203019,map__203019__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h1,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203021__i = 0, G__203021__a = new Array(arguments.length -  0);
while (G__203021__i < G__203021__a.length) {G__203021__a[G__203021__i] = arguments[G__203021__i + 0]; ++G__203021__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203021__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__8262__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__203022){
var args__8262__auto__ = cljs.core.seq(arglist__203022);
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
var vec__203026 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203026,(0),null);
var map__203027__$1 = ((((!((map__203027 == null)))?((((map__203027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203027):map__203027);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203027__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203026,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect__$1 = (cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__203026,map__203027,map__203027__$1,title,kids){
return (function (p1__6894_SHARP_){
return cljs.core.assoc_in(p1__6894_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__203026,map__203027,map__203027__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h2,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203029__i = 0, G__203029__a = new Array(arguments.length -  0);
while (G__203029__i < G__203029__a.length) {G__203029__a[G__203029__i] = arguments[G__203029__i + 0]; ++G__203029__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203029__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__8262__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__203030){
var args__8262__auto__ = cljs.core.seq(arglist__203030);
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
var vec__203034 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203034,(0),null);
var map__203035__$1 = ((((!((map__203035 == null)))?((((map__203035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203035):map__203035);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203035__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203034,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = (cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__203034,map__203035,map__203035__$1,title,kids){
return (function (p1__6895_SHARP_){
return cljs.core.assoc_in(p1__6895_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__203034,map__203035,map__203035__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203037__i = 0, G__203037__a = new Array(arguments.length -  0);
while (G__203037__i < G__203037__a.length) {G__203037__a[G__203037__i] = arguments[G__203037__i + 0]; ++G__203037__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203037__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__8262__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__203038){
var args__8262__auto__ = cljs.core.seq(arglist__203038);
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
var vec__203042 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203042,(0),null);
var map__203043__$1 = ((((!((map__203043 == null)))?((((map__203043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203043):map__203043);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203043__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203042,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub__$1 = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$ssub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__203042,map__203043,map__203043__$1,title,kids){
return (function (p1__6896_SHARP_){
return cljs.core.assoc_in(p1__6896_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__203042,map__203043,map__203043__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h4,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203045__i = 0, G__203045__a = new Array(arguments.length -  0);
while (G__203045__i < G__203045__a.length) {G__203045__a[G__203045__i] = arguments[G__203045__i + 0]; ++G__203045__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203045__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__8262__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__203046){
var args__8262__auto__ = cljs.core.seq(arglist__203046);
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
var vec__203048 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203048,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203048,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__203048,attr,kids){
return (function (p1__6897_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__6897_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__203048,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"exercises",cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__203048,attr,kids){
return (function (p1__6898_SHARP_){
return cljs.core.assoc_in(p1__6898_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__203048,attr,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,"",cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203049__i = 0, G__203049__a = new Array(arguments.length -  0);
while (G__203049__i < G__203049__a.length) {G__203049__a[G__203049__i] = arguments[G__203049__i + 0]; ++G__203049__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203049__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__8262__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__203050){
var args__8262__auto__ = cljs.core.seq(arglist__203050);
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
var vec__203060 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203060,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203060,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ex = (cljs.core.count(book.general.parts.get_exs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"exercise",cljs.core.cst$kw$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__203060,attr,kids){
return (function (p1__6899_SHARP_){
return cljs.core.assoc_in(p1__6899_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__203060,attr,kids))
);

var G__203062 = cljs.core.cst$kw$type;
var G__203063 = "exercise";
var G__203064 = cljs.core.cst$kw$class;
var G__203065 = "exercise";
var G__203066 = (function (){var G__203068 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__203068) : tailrecursion.hoplon.h3.call(null,G__203068));
})();
var G__203067 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__203062,G__203063,G__203064,G__203065,G__203066,G__203067) : tailrecursion.hoplon.div.call(null,G__203062,G__203063,G__203064,G__203065,G__203066,G__203067));
};
var book$general$parts$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203069__i = 0, G__203069__a = new Array(arguments.length -  0);
while (G__203069__i < G__203069__a.length) {G__203069__a[G__203069__i] = arguments[G__203069__i + 0]; ++G__203069__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203069__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__8262__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__203070){
var args__8262__auto__ = cljs.core.seq(arglist__203070);
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
var vec__203083 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203083,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203083,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__203083,_,children){
return (function (G__203084){
return [cljs.core.str((cljs.core.truth_(G__203084)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__203083,_,children))
).call(null,open);
var G__203088 = (function (){var G__203090 = cljs.core.cst$kw$click;
var G__203091 = ((function (G__203090,open,button_text,vec__203083,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__203090,open,button_text,vec__203083,_,children))
;
var G__203092 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__203090,G__203091,G__203092) : tailrecursion.hoplon.button.call(null,G__203090,G__203091,G__203092));
})();
var G__203089 = (function (){var G__203093 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"solution",cljs.core.cst$kw$toggle,open], null);
var G__203094 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__203093,G__203094) : tailrecursion.hoplon.div.call(null,G__203093,G__203094));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__203088,G__203089) : tailrecursion.hoplon.div.call(null,G__203088,G__203089));
};
var book$general$parts$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203095__i = 0, G__203095__a = new Array(arguments.length -  0);
while (G__203095__i < G__203095__a.length) {G__203095__a[G__203095__i] = arguments[G__203095__i + 0]; ++G__203095__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203095__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__8262__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__203096){
var args__8262__auto__ = cljs.core.seq(arglist__203096);
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
var vec__203106 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__203107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203106,(0),null);
var map__203107__$1 = ((((!((map__203107 == null)))?((((map__203107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__203107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__203107):map__203107);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__203107__$1,cljs.core.cst$kw$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203106,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var figr = (cljs.core.count(book.general.parts.get_figs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$footer,footer,cljs.core.cst$kw$src,src,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__203106,map__203107,map__203107__$1,footer,_){
return (function (p1__6900_SHARP_){
return cljs.core.assoc_in(p1__6900_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__203106,map__203107,map__203107__$1,footer,_))
);

var G__203109 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3"));
var G__203110 = (function (){var G__203112 = (function (){var G__203114 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__203114) : tailrecursion.hoplon.b.call(null,G__203114));
})();
var G__203113 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__203112,G__203113) : tailrecursion.hoplon.p.call(null,G__203112,G__203113));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__203109,G__203110) : tailrecursion.hoplon.div.call(null,G__203109,G__203110));
};
var book$general$parts$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203115__i = 0, G__203115__a = new Array(arguments.length -  0);
while (G__203115__i < G__203115__a.length) {G__203115__a[G__203115__i] = arguments[G__203115__i + 0]; ++G__203115__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203115__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__8262__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__203116){
var args__8262__auto__ = cljs.core.seq(arglist__203116);
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
var vec__203122 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203122,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203122,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__203123 = cljs.core.cst$kw$class;
var G__203124 = "img-responsive";
var G__203125 = cljs.core.cst$kw$src;
var G__203126 = [cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(attr))].join('');
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__203123,G__203124,G__203125,G__203126) : tailrecursion.hoplon.img.call(null,G__203123,G__203124,G__203125,G__203126));
})(),kids);
};
var book$general$parts$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203127__i = 0, G__203127__a = new Array(arguments.length -  0);
while (G__203127__i < G__203127__a.length) {G__203127__a[G__203127__i] = arguments[G__203127__i + 0]; ++G__203127__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203127__a,0);
} 
return book$general$parts$image__delegate.call(this,args__8262__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__203128){
var args__8262__auto__ = cljs.core.seq(arglist__203128);
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
var vec__203155 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203155,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__203155,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ftn = (cljs.core.count(cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__203155,attr,kids){
return (function (p1__6901_SHARP_){
return cljs.core.assoc_in(p1__6901_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__203155,attr,kids))
);

var G__203162 = cljs.core.cst$kw$style;
var G__203163 = "display:inline;";
var G__203164 = (function (){var G__203166 = cljs.core.cst$kw$click;
var G__203167 = ((function (G__203166,G__203162,G__203163,hidden,ch,ftn,this_data,vec__203155,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__203166,G__203162,G__203163,hidden,ch,ftn,this_data,vec__203155,attr,kids))
;
var G__203168 = cljs.core.cst$kw$style;
var G__203169 = "color:#0000ff";
var G__203170 = (function (){var G__203171 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__203171) : tailrecursion.hoplon.sup.call(null,G__203171));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__203166,G__203167,G__203168,G__203169,G__203170) : tailrecursion.hoplon.span.call(null,G__203166,G__203167,G__203168,G__203169,G__203170));
})();
var G__203165 = (function (){var G__203173 = cljs.core.cst$kw$class;
var G__203174 = tailrecursion.javelin.formula(((function (G__203173,G__203162,G__203163,G__203164,hidden,ch,ftn,this_data,vec__203155,attr,kids){
return (function (G__203176){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,G__203176,cljs.core.cst$kw$popover,true,cljs.core.cst$kw$bottom,true], null);
});})(G__203173,G__203162,G__203163,G__203164,hidden,ch,ftn,this_data,vec__203155,attr,kids))
).call(null,hidden);
var G__203175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__203177 = cljs.core.cst$kw$class;
var G__203178 = "popover-content";
var G__203179 = cljs.core.cst$kw$click;
var G__203180 = ((function (G__203177,G__203178,G__203179,G__203173,G__203174,G__203162,G__203163,G__203164,hidden,ch,ftn,this_data,vec__203155,attr,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,true) : cljs.core.reset_BANG_.call(null,hidden,true));
});})(G__203177,G__203178,G__203179,G__203173,G__203174,G__203162,G__203163,G__203164,hidden,ch,ftn,this_data,vec__203155,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__203177,G__203178,G__203179,G__203180) : tailrecursion.hoplon.div.call(null,G__203177,G__203178,G__203179,G__203180));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__203173,G__203174,G__203175) : tailrecursion.hoplon.div.call(null,G__203173,G__203174,G__203175));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__203162,G__203163,G__203164,G__203165) : tailrecursion.hoplon.div.call(null,G__203162,G__203163,G__203164,G__203165));
};
var book$general$parts$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__203181__i = 0, G__203181__a = new Array(arguments.length -  0);
while (G__203181__i < G__203181__a.length) {G__203181__a[G__203181__i] = arguments[G__203181__i + 0]; ++G__203181__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__203181__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__8262__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__203182){
var args__8262__auto__ = cljs.core.seq(arglist__203182);
return book$general$parts$footnote__delegate(args__8262__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
