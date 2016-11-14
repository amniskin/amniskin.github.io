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
var args202734 = [];
var len__5881__auto___202737 = arguments.length;
var i__5882__auto___202738 = (0);
while(true){
if((i__5882__auto___202738 < len__5881__auto___202737)){
args202734.push((arguments[i__5882__auto___202738]));

var G__202739 = (i__5882__auto___202738 + (1));
i__5882__auto___202738 = G__202739;
continue;
} else {
}
break;
}

var G__202736 = args202734.length;
switch (G__202736) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202734.length)].join('')));

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
var book$general$parts$part__delegate = function (args__8082__auto__){
var vec__202756 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202756,(0),null);
var map__202757__$1 = ((((!((map__202757 == null)))?((((map__202757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202757):map__202757);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202757__$1,cljs.core.cst$kw$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202757__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202757__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202756,(1),null);
var G__202762 = cljs.core.cst$kw$scroll_DASH_to;
var G__202763 = tailrecursion.javelin.formula(((function (G__202762,vec__202756,map__202757,map__202757__$1,size,link,title,kids){
return (function (G__202768,G__202769,G__202770){
return (G__202768.cljs$core$IFn$_invoke$arity$2 ? G__202768.cljs$core$IFn$_invoke$arity$2(G__202769,G__202770) : G__202768.call(null,G__202769,G__202770));
});})(G__202762,vec__202756,map__202757,map__202757__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link);
var G__202764 = cljs.core.cst$kw$at_DASH_top;
var G__202765 = ((function (G__202762,G__202763,G__202764,vec__202756,map__202757,map__202757__$1,size,link,title,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__202762,G__202763,G__202764,vec__202756,map__202757,map__202757__$1,size,link,title,kids))
;
var G__202766 = (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"text-left",title) : size.call(null,cljs.core.cst$kw$class,"text-left",title));
var G__202767 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"",kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__202762,G__202763,G__202764,G__202765,G__202766,G__202767) : tailrecursion.hoplon.div.call(null,G__202762,G__202763,G__202764,G__202765,G__202766,G__202767));
};
var book$general$parts$part = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202771__i = 0, G__202771__a = new Array(arguments.length -  0);
while (G__202771__i < G__202771__a.length) {G__202771__a[G__202771__i] = arguments[G__202771__i + 0]; ++G__202771__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202771__a,0);
} 
return book$general$parts$part__delegate.call(this,args__8082__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__202772){
var args__8082__auto__ = cljs.core.seq(arglist__202772);
return book$general$parts$part__delegate(args__8082__auto__);
});
book$general$parts$part.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$part__delegate;
return book$general$parts$part;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.content = (function() { 
var book$general$parts$content__delegate = function (args__8082__auto__){
var vec__202774 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202774,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202774,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;")),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202775__i = 0, G__202775__a = new Array(arguments.length -  0);
while (G__202775__i < G__202775__a.length) {G__202775__a[G__202775__i] = arguments[G__202775__i + 0]; ++G__202775__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202775__a,0);
} 
return book$general$parts$content__delegate.call(this,args__8082__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__202776){
var args__8082__auto__ = cljs.core.seq(arglist__202776);
return book$general$parts$content__delegate(args__8082__auto__);
});
book$general$parts$content.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$content__delegate;
return book$general$parts$content;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.about = (function() { 
var book$general$parts$about__delegate = function (args__8082__auto__){
var vec__202805 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202805,(0),null);
var map__202806__$1 = ((((!((map__202806 == null)))?((((map__202806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202806):map__202806);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202806__$1,cljs.core.cst$kw$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202806__$1,cljs.core.cst$kw$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202805,(1),null);
var G__202813 = cljs.core.cst$kw$scroll_DASH_to;
var G__202814 = tailrecursion.javelin.formula(((function (G__202813,vec__202805,map__202806,map__202806__$1,title,tagline,kids){
return (function (G__202822,G__202823,G__202824){
var G__202825 = G__202823;
var G__202826 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__202824)),cljs.core.str("/")].join('');
return (G__202822.cljs$core$IFn$_invoke$arity$2 ? G__202822.cljs$core$IFn$_invoke$arity$2(G__202825,G__202826) : G__202822.call(null,G__202825,G__202826));
});})(G__202813,vec__202805,map__202806,map__202806__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_);
var G__202815 = cljs.core.cst$kw$at_DASH_top;
var G__202816 = ((function (G__202813,G__202814,G__202815,vec__202805,map__202806,map__202806__$1,title,tagline,kids){
return (function (){
var G__202827 = general.toc.scroll_location;
var G__202828 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__202827,G__202828) : cljs.core.reset_BANG_.call(null,G__202827,G__202828));
});})(G__202813,G__202814,G__202815,vec__202805,map__202806,map__202806__$1,title,tagline,kids))
;
var G__202817 = cljs.core.cst$kw$class;
var G__202818 = "text-justify";
var G__202819 = (function (){var G__202829 = cljs.core.cst$kw$class;
var G__202830 = "text-left";
var G__202831 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__202829,G__202830,G__202831) : tailrecursion.hoplon.h1.call(null,G__202829,G__202830,G__202831));
})();
var G__202820 = (function (){var G__202832 = cljs.core.cst$kw$tagline.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__202832) : tailrecursion.hoplon.h3.call(null,G__202832));
})();
var G__202821 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.div.call(null,kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__202813,G__202814,G__202815,G__202816,G__202817,G__202818,G__202819,G__202820,G__202821) : tailrecursion.hoplon.div.call(null,G__202813,G__202814,G__202815,G__202816,G__202817,G__202818,G__202819,G__202820,G__202821));
};
var book$general$parts$about = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202833__i = 0, G__202833__a = new Array(arguments.length -  0);
while (G__202833__i < G__202833__a.length) {G__202833__a[G__202833__i] = arguments[G__202833__i + 0]; ++G__202833__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202833__a,0);
} 
return book$general$parts$about__delegate.call(this,args__8082__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__202834){
var args__8082__auto__ = cljs.core.seq(arglist__202834);
return book$general$parts$about__delegate(args__8082__auto__);
});
book$general$parts$about.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$about__delegate;
return book$general$parts$about;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.chapter = (function() { 
var book$general$parts$chapter__delegate = function (args__8082__auto__){
var vec__202838 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202838,(0),null);
var map__202839__$1 = ((((!((map__202839 == null)))?((((map__202839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202839):map__202839);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202839__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202838,(1),null);
var ch = (cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__202838,map__202839,map__202839__$1,title,kids){
return (function (p1__6878_SHARP_){
return cljs.core.assoc_in(p1__6878_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__202838,map__202839,map__202839__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h1,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$chapter = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202841__i = 0, G__202841__a = new Array(arguments.length -  0);
while (G__202841__i < G__202841__a.length) {G__202841__a[G__202841__i] = arguments[G__202841__i + 0]; ++G__202841__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202841__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__8082__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__202842){
var args__8082__auto__ = cljs.core.seq(arglist__202842);
return book$general$parts$chapter__delegate(args__8082__auto__);
});
book$general$parts$chapter.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$chapter__delegate;
return book$general$parts$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.sect = (function() { 
var book$general$parts$sect__delegate = function (args__8082__auto__){
var vec__202846 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202846,(0),null);
var map__202847__$1 = ((((!((map__202847 == null)))?((((map__202847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202847):map__202847);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202847__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202846,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect__$1 = (cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__202846,map__202847,map__202847__$1,title,kids){
return (function (p1__6879_SHARP_){
return cljs.core.assoc_in(p1__6879_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__202846,map__202847,map__202847__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h2,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$sect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202849__i = 0, G__202849__a = new Array(arguments.length -  0);
while (G__202849__i < G__202849__a.length) {G__202849__a[G__202849__i] = arguments[G__202849__i + 0]; ++G__202849__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202849__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__8082__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__202850){
var args__8082__auto__ = cljs.core.seq(arglist__202850);
return book$general$parts$sect__delegate(args__8082__auto__);
});
book$general$parts$sect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$sect__delegate;
return book$general$parts$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.subsect = (function() { 
var book$general$parts$subsect__delegate = function (args__8082__auto__){
var vec__202854 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202854,(0),null);
var map__202855__$1 = ((((!((map__202855 == null)))?((((map__202855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202855):map__202855);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202855__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202854,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = (cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__202854,map__202855,map__202855__$1,title,kids){
return (function (p1__6880_SHARP_){
return cljs.core.assoc_in(p1__6880_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__202854,map__202855,map__202855__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$subsect = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202857__i = 0, G__202857__a = new Array(arguments.length -  0);
while (G__202857__i < G__202857__a.length) {G__202857__a[G__202857__i] = arguments[G__202857__i + 0]; ++G__202857__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202857__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__8082__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__202858){
var args__8082__auto__ = cljs.core.seq(arglist__202858);
return book$general$parts$subsect__delegate(args__8082__auto__);
});
book$general$parts$subsect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$subsect__delegate;
return book$general$parts$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.ssub = (function() { 
var book$general$parts$ssub__delegate = function (args__8082__auto__){
var vec__202862 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202862,(0),null);
var map__202863__$1 = ((((!((map__202863 == null)))?((((map__202863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202863):map__202863);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202863__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202862,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub__$1 = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$ssub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__202862,map__202863,map__202863__$1,title,kids){
return (function (p1__6881_SHARP_){
return cljs.core.assoc_in(p1__6881_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__202862,map__202863,map__202863__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h4,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$ssub = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202865__i = 0, G__202865__a = new Array(arguments.length -  0);
while (G__202865__i < G__202865__a.length) {G__202865__a[G__202865__i] = arguments[G__202865__i + 0]; ++G__202865__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202865__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__8082__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__202866){
var args__8082__auto__ = cljs.core.seq(arglist__202866);
return book$general$parts$ssub__delegate(args__8082__auto__);
});
book$general$parts$ssub.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$ssub__delegate;
return book$general$parts$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercises = (function() { 
var book$general$parts$exercises__delegate = function (args__8082__auto__){
var vec__202868 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202868,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202868,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__202868,attr,kids){
return (function (p1__6882_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__6882_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__202868,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"exercises",cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__202868,attr,kids){
return (function (p1__6883_SHARP_){
return cljs.core.assoc_in(p1__6883_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__202868,attr,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,"",cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$exercises = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202869__i = 0, G__202869__a = new Array(arguments.length -  0);
while (G__202869__i < G__202869__a.length) {G__202869__a[G__202869__i] = arguments[G__202869__i + 0]; ++G__202869__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202869__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__8082__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__202870){
var args__8082__auto__ = cljs.core.seq(arglist__202870);
return book$general$parts$exercises__delegate(args__8082__auto__);
});
book$general$parts$exercises.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercises__delegate;
return book$general$parts$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercise = (function() { 
var book$general$parts$exercise__delegate = function (args__8082__auto__){
var vec__202880 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202880,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202880,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ex = (cljs.core.count(book.general.parts.get_exs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"exercise",cljs.core.cst$kw$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__202880,attr,kids){
return (function (p1__6884_SHARP_){
return cljs.core.assoc_in(p1__6884_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__202880,attr,kids))
);

var G__202882 = cljs.core.cst$kw$type;
var G__202883 = "exercise";
var G__202884 = cljs.core.cst$kw$class;
var G__202885 = "exercise";
var G__202886 = (function (){var G__202888 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__202888) : tailrecursion.hoplon.h3.call(null,G__202888));
})();
var G__202887 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__202882,G__202883,G__202884,G__202885,G__202886,G__202887) : tailrecursion.hoplon.div.call(null,G__202882,G__202883,G__202884,G__202885,G__202886,G__202887));
};
var book$general$parts$exercise = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202889__i = 0, G__202889__a = new Array(arguments.length -  0);
while (G__202889__i < G__202889__a.length) {G__202889__a[G__202889__i] = arguments[G__202889__i + 0]; ++G__202889__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202889__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__8082__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__202890){
var args__8082__auto__ = cljs.core.seq(arglist__202890);
return book$general$parts$exercise__delegate(args__8082__auto__);
});
book$general$parts$exercise.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercise__delegate;
return book$general$parts$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.q_a = (function() { 
var book$general$parts$q_a__delegate = function (args__8082__auto__){
var vec__202903 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202903,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202903,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__202903,_,children){
return (function (G__202904){
return [cljs.core.str((cljs.core.truth_(G__202904)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__202903,_,children))
).call(null,open);
var G__202908 = (function (){var G__202910 = cljs.core.cst$kw$click;
var G__202911 = ((function (G__202910,open,button_text,vec__202903,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__202910,open,button_text,vec__202903,_,children))
;
var G__202912 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__202910,G__202911,G__202912) : tailrecursion.hoplon.button.call(null,G__202910,G__202911,G__202912));
})();
var G__202909 = (function (){var G__202913 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"solution",cljs.core.cst$kw$toggle,open], null);
var G__202914 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202913,G__202914) : tailrecursion.hoplon.div.call(null,G__202913,G__202914));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202908,G__202909) : tailrecursion.hoplon.div.call(null,G__202908,G__202909));
};
var book$general$parts$q_a = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202915__i = 0, G__202915__a = new Array(arguments.length -  0);
while (G__202915__i < G__202915__a.length) {G__202915__a[G__202915__i] = arguments[G__202915__i + 0]; ++G__202915__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202915__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__8082__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__202916){
var args__8082__auto__ = cljs.core.seq(arglist__202916);
return book$general$parts$q_a__delegate(args__8082__auto__);
});
book$general$parts$q_a.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$q_a__delegate;
return book$general$parts$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.fig = (function() { 
var book$general$parts$fig__delegate = function (args__8082__auto__){
var vec__202926 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var map__202927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202926,(0),null);
var map__202927__$1 = ((((!((map__202927 == null)))?((((map__202927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__202927):map__202927);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__202927__$1,cljs.core.cst$kw$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202926,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var figr = (cljs.core.count(book.general.parts.get_figs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$footer,footer,cljs.core.cst$kw$src,src,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__202926,map__202927,map__202927__$1,footer,_){
return (function (p1__6885_SHARP_){
return cljs.core.assoc_in(p1__6885_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__202926,map__202927,map__202927__$1,footer,_))
);

var G__202929 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3"));
var G__202930 = (function (){var G__202932 = (function (){var G__202934 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__202934) : tailrecursion.hoplon.b.call(null,G__202934));
})();
var G__202933 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__202932,G__202933) : tailrecursion.hoplon.p.call(null,G__202932,G__202933));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__202929,G__202930) : tailrecursion.hoplon.div.call(null,G__202929,G__202930));
};
var book$general$parts$fig = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202935__i = 0, G__202935__a = new Array(arguments.length -  0);
while (G__202935__i < G__202935__a.length) {G__202935__a[G__202935__i] = arguments[G__202935__i + 0]; ++G__202935__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202935__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__8082__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__202936){
var args__8082__auto__ = cljs.core.seq(arglist__202936);
return book$general$parts$fig__delegate(args__8082__auto__);
});
book$general$parts$fig.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$fig__delegate;
return book$general$parts$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.image = (function() { 
var book$general$parts$image__delegate = function (args__8082__auto__){
var vec__202942 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202942,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202942,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__202943 = cljs.core.cst$kw$class;
var G__202944 = "img-responsive";
var G__202945 = cljs.core.cst$kw$src;
var G__202946 = [cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(attr))].join('');
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__202943,G__202944,G__202945,G__202946) : tailrecursion.hoplon.img.call(null,G__202943,G__202944,G__202945,G__202946));
})(),kids);
};
var book$general$parts$image = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__202947__i = 0, G__202947__a = new Array(arguments.length -  0);
while (G__202947__i < G__202947__a.length) {G__202947__a[G__202947__i] = arguments[G__202947__i + 0]; ++G__202947__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__202947__a,0);
} 
return book$general$parts$image__delegate.call(this,args__8082__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__202948){
var args__8082__auto__ = cljs.core.seq(arglist__202948);
return book$general$parts$image__delegate(args__8082__auto__);
});
book$general$parts$image.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$image__delegate;
return book$general$parts$image;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.footnote = (function() { 
var book$general$parts$footnote__delegate = function (args__8082__auto__){
var vec__202975 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202975,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202975,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ftn = (cljs.core.count(cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__202975,attr,kids){
return (function (p1__6886_SHARP_){
return cljs.core.assoc_in(p1__6886_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__202975,attr,kids))
);

var G__202982 = cljs.core.cst$kw$style;
var G__202983 = "display:inline;";
var G__202984 = (function (){var G__202986 = cljs.core.cst$kw$click;
var G__202987 = ((function (G__202986,G__202982,G__202983,hidden,ch,ftn,this_data,vec__202975,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__202986,G__202982,G__202983,hidden,ch,ftn,this_data,vec__202975,attr,kids))
;
var G__202988 = cljs.core.cst$kw$style;
var G__202989 = "color:#0000ff";
var G__202990 = (function (){var G__202991 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__202991) : tailrecursion.hoplon.sup.call(null,G__202991));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__202986,G__202987,G__202988,G__202989,G__202990) : tailrecursion.hoplon.span.call(null,G__202986,G__202987,G__202988,G__202989,G__202990));
})();
var G__202985 = (function (){var G__202993 = cljs.core.cst$kw$class;
var G__202994 = tailrecursion.javelin.formula(((function (G__202993,G__202982,G__202983,G__202984,hidden,ch,ftn,this_data,vec__202975,attr,kids){
return (function (G__202996){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,G__202996,cljs.core.cst$kw$popover,true,cljs.core.cst$kw$bottom,true], null);
});})(G__202993,G__202982,G__202983,G__202984,hidden,ch,ftn,this_data,vec__202975,attr,kids))
).call(null,hidden);
var G__202995 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__202997 = cljs.core.cst$kw$class;
var G__202998 = "popover-content";
var G__202999 = cljs.core.cst$kw$click;
var G__203000 = ((function (G__202997,G__202998,G__202999,G__202993,G__202994,G__202982,G__202983,G__202984,hidden,ch,ftn,this_data,vec__202975,attr,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,true) : cljs.core.reset_BANG_.call(null,hidden,true));
});})(G__202997,G__202998,G__202999,G__202993,G__202994,G__202982,G__202983,G__202984,hidden,ch,ftn,this_data,vec__202975,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__202997,G__202998,G__202999,G__203000) : tailrecursion.hoplon.div.call(null,G__202997,G__202998,G__202999,G__203000));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__202993,G__202994,G__202995) : tailrecursion.hoplon.div.call(null,G__202993,G__202994,G__202995));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__202982,G__202983,G__202984,G__202985) : tailrecursion.hoplon.div.call(null,G__202982,G__202983,G__202984,G__202985));
};
var book$general$parts$footnote = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__203001__i = 0, G__203001__a = new Array(arguments.length -  0);
while (G__203001__i < G__203001__a.length) {G__203001__a[G__203001__i] = arguments[G__203001__i + 0]; ++G__203001__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__203001__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__8082__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__203002){
var args__8082__auto__ = cljs.core.seq(arglist__203002);
return book$general$parts$footnote__delegate(args__8082__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
