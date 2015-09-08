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
var args181530 = [];
var len__6061__auto___181533 = arguments.length;
var i__6062__auto___181534 = (0);
while(true){
if((i__6062__auto___181534 < len__6061__auto___181533)){
args181530.push((arguments[i__6062__auto___181534]));

var G__181535 = (i__6062__auto___181534 + (1));
i__6062__auto___181534 = G__181535;
continue;
} else {
}
break;
}

var G__181532 = args181530.length;
switch (G__181532) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args181530.length)].join('')));

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
var vec__181552 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181552,(0),null);
var map__181553__$1 = ((((!((map__181553 == null)))?((((map__181553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181553):map__181553);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181553__$1,cljs.core.cst$kw$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181553__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181553__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181552,(1),null);
var G__181558 = cljs.core.cst$kw$scroll_DASH_to;
var G__181559 = tailrecursion.javelin.formula(((function (G__181558,vec__181552,map__181553,map__181553__$1,size,link,title,kids){
return (function (G__181564,G__181565,G__181566){
return (G__181564.cljs$core$IFn$_invoke$arity$2 ? G__181564.cljs$core$IFn$_invoke$arity$2(G__181565,G__181566) : G__181564.call(null,G__181565,G__181566));
});})(G__181558,vec__181552,map__181553,map__181553__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link);
var G__181560 = cljs.core.cst$kw$at_DASH_top;
var G__181561 = ((function (G__181558,G__181559,G__181560,vec__181552,map__181553,map__181553__$1,size,link,title,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__181558,G__181559,G__181560,vec__181552,map__181553,map__181553__$1,size,link,title,kids))
;
var G__181562 = (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"text-left",title) : size.call(null,cljs.core.cst$kw$class,"text-left",title));
var G__181563 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"",kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__181558,G__181559,G__181560,G__181561,G__181562,G__181563) : tailrecursion.hoplon.div.call(null,G__181558,G__181559,G__181560,G__181561,G__181562,G__181563));
};
var book$general$parts$part = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181567__i = 0, G__181567__a = new Array(arguments.length -  0);
while (G__181567__i < G__181567__a.length) {G__181567__a[G__181567__i] = arguments[G__181567__i + 0]; ++G__181567__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181567__a,0);
} 
return book$general$parts$part__delegate.call(this,args__8262__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__181568){
var args__8262__auto__ = cljs.core.seq(arglist__181568);
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
var vec__181570 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181570,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181570,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;")),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181571__i = 0, G__181571__a = new Array(arguments.length -  0);
while (G__181571__i < G__181571__a.length) {G__181571__a[G__181571__i] = arguments[G__181571__i + 0]; ++G__181571__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181571__a,0);
} 
return book$general$parts$content__delegate.call(this,args__8262__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__181572){
var args__8262__auto__ = cljs.core.seq(arglist__181572);
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
var vec__181601 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181601,(0),null);
var map__181602__$1 = ((((!((map__181602 == null)))?((((map__181602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181602):map__181602);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181602__$1,cljs.core.cst$kw$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181602__$1,cljs.core.cst$kw$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181601,(1),null);
var G__181609 = cljs.core.cst$kw$scroll_DASH_to;
var G__181610 = tailrecursion.javelin.formula(((function (G__181609,vec__181601,map__181602,map__181602__$1,title,tagline,kids){
return (function (G__181618,G__181619,G__181620){
var G__181621 = G__181619;
var G__181622 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__181620)),cljs.core.str("/")].join('');
return (G__181618.cljs$core$IFn$_invoke$arity$2 ? G__181618.cljs$core$IFn$_invoke$arity$2(G__181621,G__181622) : G__181618.call(null,G__181621,G__181622));
});})(G__181609,vec__181601,map__181602,map__181602__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_);
var G__181611 = cljs.core.cst$kw$at_DASH_top;
var G__181612 = ((function (G__181609,G__181610,G__181611,vec__181601,map__181602,map__181602__$1,title,tagline,kids){
return (function (){
var G__181623 = general.toc.scroll_location;
var G__181624 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__181623,G__181624) : cljs.core.reset_BANG_.call(null,G__181623,G__181624));
});})(G__181609,G__181610,G__181611,vec__181601,map__181602,map__181602__$1,title,tagline,kids))
;
var G__181613 = cljs.core.cst$kw$class;
var G__181614 = "text-justify";
var G__181615 = (function (){var G__181625 = cljs.core.cst$kw$class;
var G__181626 = "text-left";
var G__181627 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__181625,G__181626,G__181627) : tailrecursion.hoplon.h1.call(null,G__181625,G__181626,G__181627));
})();
var G__181616 = (function (){var G__181628 = cljs.core.cst$kw$tagline.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__181628) : tailrecursion.hoplon.h3.call(null,G__181628));
})();
var G__181617 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.div.call(null,kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__181609,G__181610,G__181611,G__181612,G__181613,G__181614,G__181615,G__181616,G__181617) : tailrecursion.hoplon.div.call(null,G__181609,G__181610,G__181611,G__181612,G__181613,G__181614,G__181615,G__181616,G__181617));
};
var book$general$parts$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181629__i = 0, G__181629__a = new Array(arguments.length -  0);
while (G__181629__i < G__181629__a.length) {G__181629__a[G__181629__i] = arguments[G__181629__i + 0]; ++G__181629__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181629__a,0);
} 
return book$general$parts$about__delegate.call(this,args__8262__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__181630){
var args__8262__auto__ = cljs.core.seq(arglist__181630);
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
var vec__181634 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181634,(0),null);
var map__181635__$1 = ((((!((map__181635 == null)))?((((map__181635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181635):map__181635);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181635__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181634,(1),null);
var ch = (cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__181634,map__181635,map__181635__$1,title,kids){
return (function (p1__2596_SHARP_){
return cljs.core.assoc_in(p1__2596_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__181634,map__181635,map__181635__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h1,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181637__i = 0, G__181637__a = new Array(arguments.length -  0);
while (G__181637__i < G__181637__a.length) {G__181637__a[G__181637__i] = arguments[G__181637__i + 0]; ++G__181637__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181637__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__8262__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__181638){
var args__8262__auto__ = cljs.core.seq(arglist__181638);
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
var vec__181642 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181642,(0),null);
var map__181643__$1 = ((((!((map__181643 == null)))?((((map__181643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181643):map__181643);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181643__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181642,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect__$1 = (cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__181642,map__181643,map__181643__$1,title,kids){
return (function (p1__2597_SHARP_){
return cljs.core.assoc_in(p1__2597_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__181642,map__181643,map__181643__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h2,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181645__i = 0, G__181645__a = new Array(arguments.length -  0);
while (G__181645__i < G__181645__a.length) {G__181645__a[G__181645__i] = arguments[G__181645__i + 0]; ++G__181645__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181645__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__8262__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__181646){
var args__8262__auto__ = cljs.core.seq(arglist__181646);
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
var vec__181650 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181650,(0),null);
var map__181651__$1 = ((((!((map__181651 == null)))?((((map__181651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181651):map__181651);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181651__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181650,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = (cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__181650,map__181651,map__181651__$1,title,kids){
return (function (p1__2598_SHARP_){
return cljs.core.assoc_in(p1__2598_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__181650,map__181651,map__181651__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181653__i = 0, G__181653__a = new Array(arguments.length -  0);
while (G__181653__i < G__181653__a.length) {G__181653__a[G__181653__i] = arguments[G__181653__i + 0]; ++G__181653__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181653__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__8262__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__181654){
var args__8262__auto__ = cljs.core.seq(arglist__181654);
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
var vec__181658 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181658,(0),null);
var map__181659__$1 = ((((!((map__181659 == null)))?((((map__181659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181659):map__181659);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181659__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181658,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub__$1 = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$ssub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__181658,map__181659,map__181659__$1,title,kids){
return (function (p1__2599_SHARP_){
return cljs.core.assoc_in(p1__2599_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__181658,map__181659,map__181659__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h4,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181661__i = 0, G__181661__a = new Array(arguments.length -  0);
while (G__181661__i < G__181661__a.length) {G__181661__a[G__181661__i] = arguments[G__181661__i + 0]; ++G__181661__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181661__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__8262__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__181662){
var args__8262__auto__ = cljs.core.seq(arglist__181662);
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
var vec__181664 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181664,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181664,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__181664,attr,kids){
return (function (p1__2600_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__2600_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__181664,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"exercises",cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__181664,attr,kids){
return (function (p1__2601_SHARP_){
return cljs.core.assoc_in(p1__2601_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__181664,attr,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,"",cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181665__i = 0, G__181665__a = new Array(arguments.length -  0);
while (G__181665__i < G__181665__a.length) {G__181665__a[G__181665__i] = arguments[G__181665__i + 0]; ++G__181665__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181665__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__8262__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__181666){
var args__8262__auto__ = cljs.core.seq(arglist__181666);
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
var vec__181676 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181676,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181676,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ex = (cljs.core.count(book.general.parts.get_exs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"exercise",cljs.core.cst$kw$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__181676,attr,kids){
return (function (p1__2602_SHARP_){
return cljs.core.assoc_in(p1__2602_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__181676,attr,kids))
);

var G__181678 = cljs.core.cst$kw$type;
var G__181679 = "exercise";
var G__181680 = cljs.core.cst$kw$class;
var G__181681 = "exercise";
var G__181682 = (function (){var G__181684 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__181684) : tailrecursion.hoplon.h3.call(null,G__181684));
})();
var G__181683 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__181678,G__181679,G__181680,G__181681,G__181682,G__181683) : tailrecursion.hoplon.div.call(null,G__181678,G__181679,G__181680,G__181681,G__181682,G__181683));
};
var book$general$parts$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181685__i = 0, G__181685__a = new Array(arguments.length -  0);
while (G__181685__i < G__181685__a.length) {G__181685__a[G__181685__i] = arguments[G__181685__i + 0]; ++G__181685__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181685__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__8262__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__181686){
var args__8262__auto__ = cljs.core.seq(arglist__181686);
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
var vec__181699 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181699,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181699,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__181699,_,children){
return (function (G__181700){
return [cljs.core.str((cljs.core.truth_(G__181700)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__181699,_,children))
).call(null,open);
var G__181704 = (function (){var G__181706 = cljs.core.cst$kw$click;
var G__181707 = ((function (G__181706,open,button_text,vec__181699,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__181706,open,button_text,vec__181699,_,children))
;
var G__181708 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__181706,G__181707,G__181708) : tailrecursion.hoplon.button.call(null,G__181706,G__181707,G__181708));
})();
var G__181705 = (function (){var G__181709 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"solution",cljs.core.cst$kw$toggle,open], null);
var G__181710 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181709,G__181710) : tailrecursion.hoplon.div.call(null,G__181709,G__181710));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181704,G__181705) : tailrecursion.hoplon.div.call(null,G__181704,G__181705));
};
var book$general$parts$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181711__i = 0, G__181711__a = new Array(arguments.length -  0);
while (G__181711__i < G__181711__a.length) {G__181711__a[G__181711__i] = arguments[G__181711__i + 0]; ++G__181711__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181711__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__8262__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__181712){
var args__8262__auto__ = cljs.core.seq(arglist__181712);
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
var vec__181722 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__181723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181722,(0),null);
var map__181723__$1 = ((((!((map__181723 == null)))?((((map__181723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__181723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__181723):map__181723);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__181723__$1,cljs.core.cst$kw$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181722,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var figr = (cljs.core.count(book.general.parts.get_figs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$footer,footer,cljs.core.cst$kw$src,src,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__181722,map__181723,map__181723__$1,footer,_){
return (function (p1__2603_SHARP_){
return cljs.core.assoc_in(p1__2603_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__181722,map__181723,map__181723__$1,footer,_))
);

var G__181725 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3"));
var G__181726 = (function (){var G__181728 = (function (){var G__181730 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__181730) : tailrecursion.hoplon.b.call(null,G__181730));
})();
var G__181729 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__181728,G__181729) : tailrecursion.hoplon.p.call(null,G__181728,G__181729));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__181725,G__181726) : tailrecursion.hoplon.div.call(null,G__181725,G__181726));
};
var book$general$parts$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181731__i = 0, G__181731__a = new Array(arguments.length -  0);
while (G__181731__i < G__181731__a.length) {G__181731__a[G__181731__i] = arguments[G__181731__i + 0]; ++G__181731__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181731__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__8262__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__181732){
var args__8262__auto__ = cljs.core.seq(arglist__181732);
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
var vec__181738 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181738,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181738,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__181739 = cljs.core.cst$kw$class;
var G__181740 = "img-responsive";
var G__181741 = cljs.core.cst$kw$src;
var G__181742 = [cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(attr))].join('');
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__181739,G__181740,G__181741,G__181742) : tailrecursion.hoplon.img.call(null,G__181739,G__181740,G__181741,G__181742));
})(),kids);
};
var book$general$parts$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181743__i = 0, G__181743__a = new Array(arguments.length -  0);
while (G__181743__i < G__181743__a.length) {G__181743__a[G__181743__i] = arguments[G__181743__i + 0]; ++G__181743__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181743__a,0);
} 
return book$general$parts$image__delegate.call(this,args__8262__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__181744){
var args__8262__auto__ = cljs.core.seq(arglist__181744);
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
var vec__181771 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181771,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181771,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ftn = (cljs.core.count(cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__181771,attr,kids){
return (function (p1__2604_SHARP_){
return cljs.core.assoc_in(p1__2604_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__181771,attr,kids))
);

var G__181778 = cljs.core.cst$kw$style;
var G__181779 = "display:inline;";
var G__181780 = (function (){var G__181782 = cljs.core.cst$kw$click;
var G__181783 = ((function (G__181782,G__181778,G__181779,hidden,ch,ftn,this_data,vec__181771,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__181782,G__181778,G__181779,hidden,ch,ftn,this_data,vec__181771,attr,kids))
;
var G__181784 = cljs.core.cst$kw$style;
var G__181785 = "color:#0000ff";
var G__181786 = (function (){var G__181787 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__181787) : tailrecursion.hoplon.sup.call(null,G__181787));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__181782,G__181783,G__181784,G__181785,G__181786) : tailrecursion.hoplon.span.call(null,G__181782,G__181783,G__181784,G__181785,G__181786));
})();
var G__181781 = (function (){var G__181789 = cljs.core.cst$kw$class;
var G__181790 = tailrecursion.javelin.formula(((function (G__181789,G__181778,G__181779,G__181780,hidden,ch,ftn,this_data,vec__181771,attr,kids){
return (function (G__181792){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,G__181792,cljs.core.cst$kw$popover,true,cljs.core.cst$kw$bottom,true], null);
});})(G__181789,G__181778,G__181779,G__181780,hidden,ch,ftn,this_data,vec__181771,attr,kids))
).call(null,hidden);
var G__181791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__181793 = cljs.core.cst$kw$class;
var G__181794 = "popover-content";
var G__181795 = cljs.core.cst$kw$click;
var G__181796 = ((function (G__181793,G__181794,G__181795,G__181789,G__181790,G__181778,G__181779,G__181780,hidden,ch,ftn,this_data,vec__181771,attr,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,true) : cljs.core.reset_BANG_.call(null,hidden,true));
});})(G__181793,G__181794,G__181795,G__181789,G__181790,G__181778,G__181779,G__181780,hidden,ch,ftn,this_data,vec__181771,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__181793,G__181794,G__181795,G__181796) : tailrecursion.hoplon.div.call(null,G__181793,G__181794,G__181795,G__181796));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__181789,G__181790,G__181791) : tailrecursion.hoplon.div.call(null,G__181789,G__181790,G__181791));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__181778,G__181779,G__181780,G__181781) : tailrecursion.hoplon.div.call(null,G__181778,G__181779,G__181780,G__181781));
};
var book$general$parts$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__181797__i = 0, G__181797__a = new Array(arguments.length -  0);
while (G__181797__i < G__181797__a.length) {G__181797__a[G__181797__i] = arguments[G__181797__i + 0]; ++G__181797__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__181797__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__8262__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__181798){
var args__8262__auto__ = cljs.core.seq(arglist__181798);
return book$general$parts$footnote__delegate(args__8262__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
