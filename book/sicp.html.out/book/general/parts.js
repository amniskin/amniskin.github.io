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
var args161076 = [];
var len__6061__auto___161079 = arguments.length;
var i__6062__auto___161080 = (0);
while(true){
if((i__6062__auto___161080 < len__6061__auto___161079)){
args161076.push((arguments[i__6062__auto___161080]));

var G__161081 = (i__6062__auto___161080 + (1));
i__6062__auto___161080 = G__161081;
continue;
} else {
}
break;
}

var G__161078 = args161076.length;
switch (G__161078) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args161076.length)].join('')));

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
var vec__161098 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161098,(0),null);
var map__161099__$1 = ((((!((map__161099 == null)))?((((map__161099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161099):map__161099);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161099__$1,cljs.core.cst$kw$size);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161099__$1,cljs.core.cst$kw$link);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161099__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161098,(1),null);
var G__161104 = cljs.core.cst$kw$scroll_DASH_to;
var G__161105 = tailrecursion.javelin.formula(((function (G__161104,vec__161098,map__161099,map__161099__$1,size,link,title,kids){
return (function (G__161110,G__161111,G__161112){
return (G__161110.cljs$core$IFn$_invoke$arity$2 ? G__161110.cljs$core$IFn$_invoke$arity$2(G__161111,G__161112) : G__161110.call(null,G__161111,G__161112));
});})(G__161104,vec__161098,map__161099,map__161099__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link);
var G__161106 = cljs.core.cst$kw$at_DASH_top;
var G__161107 = ((function (G__161104,G__161105,G__161106,vec__161098,map__161099,map__161099__$1,size,link,title,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(general.toc.scroll_location,link) : cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link));
});})(G__161104,G__161105,G__161106,vec__161098,map__161099,map__161099__$1,size,link,title,kids))
;
var G__161108 = (size.cljs$core$IFn$_invoke$arity$3 ? size.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"text-left",title) : size.call(null,cljs.core.cst$kw$class,"text-left",title));
var G__161109 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"",kids) : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"",kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__161104,G__161105,G__161106,G__161107,G__161108,G__161109) : tailrecursion.hoplon.div.call(null,G__161104,G__161105,G__161106,G__161107,G__161108,G__161109));
};
var book$general$parts$part = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161113__i = 0, G__161113__a = new Array(arguments.length -  0);
while (G__161113__i < G__161113__a.length) {G__161113__a[G__161113__i] = arguments[G__161113__i + 0]; ++G__161113__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161113__a,0);
} 
return book$general$parts$part__delegate.call(this,args__8262__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__161114){
var args__8262__auto__ = cljs.core.seq(arglist__161114);
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
var vec__161116 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161116,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161116,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;") : tailrecursion.hoplon.div.call(null,cljs.core.cst$kw$class,"text-justify",cljs.core.cst$kw$style,"padding-left:10%; padding-right:5%;")),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161117__i = 0, G__161117__a = new Array(arguments.length -  0);
while (G__161117__i < G__161117__a.length) {G__161117__a[G__161117__i] = arguments[G__161117__i + 0]; ++G__161117__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161117__a,0);
} 
return book$general$parts$content__delegate.call(this,args__8262__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__161118){
var args__8262__auto__ = cljs.core.seq(arglist__161118);
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
var vec__161147 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161147,(0),null);
var map__161148__$1 = ((((!((map__161148 == null)))?((((map__161148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161148):map__161148);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161148__$1,cljs.core.cst$kw$title);
var tagline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161148__$1,cljs.core.cst$kw$tagline);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161147,(1),null);
var G__161155 = cljs.core.cst$kw$scroll_DASH_to;
var G__161156 = tailrecursion.javelin.formula(((function (G__161155,vec__161147,map__161148,map__161148__$1,title,tagline,kids){
return (function (G__161164,G__161165,G__161166){
var G__161167 = G__161165;
var G__161168 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1(G__161166)),cljs.core.str("/")].join('');
return (G__161164.cljs$core$IFn$_invoke$arity$2 ? G__161164.cljs$core$IFn$_invoke$arity$2(G__161167,G__161168) : G__161164.call(null,G__161167,G__161168));
});})(G__161155,vec__161147,map__161148,map__161148__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_);
var G__161157 = cljs.core.cst$kw$at_DASH_top;
var G__161158 = ((function (G__161155,G__161156,G__161157,vec__161147,map__161148,map__161148__$1,title,tagline,kids){
return (function (){
var G__161169 = general.toc.scroll_location;
var G__161170 = [cljs.core.str("#!/"),cljs.core.str(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/")].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161169,G__161170) : cljs.core.reset_BANG_.call(null,G__161169,G__161170));
});})(G__161155,G__161156,G__161157,vec__161147,map__161148,map__161148__$1,title,tagline,kids))
;
var G__161159 = cljs.core.cst$kw$class;
var G__161160 = "text-justify";
var G__161161 = (function (){var G__161171 = cljs.core.cst$kw$class;
var G__161172 = "text-left";
var G__161173 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__161171,G__161172,G__161173) : tailrecursion.hoplon.h1.call(null,G__161171,G__161172,G__161173));
})();
var G__161162 = (function (){var G__161174 = cljs.core.cst$kw$tagline.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__161174) : tailrecursion.hoplon.h3.call(null,G__161174));
})();
var G__161163 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.div.call(null,kids));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$9(G__161155,G__161156,G__161157,G__161158,G__161159,G__161160,G__161161,G__161162,G__161163) : tailrecursion.hoplon.div.call(null,G__161155,G__161156,G__161157,G__161158,G__161159,G__161160,G__161161,G__161162,G__161163));
};
var book$general$parts$about = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161175__i = 0, G__161175__a = new Array(arguments.length -  0);
while (G__161175__i < G__161175__a.length) {G__161175__a[G__161175__i] = arguments[G__161175__i + 0]; ++G__161175__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161175__a,0);
} 
return book$general$parts$about__delegate.call(this,args__8262__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__161176){
var args__8262__auto__ = cljs.core.seq(arglist__161176);
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
var vec__161180 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161180,(0),null);
var map__161181__$1 = ((((!((map__161181 == null)))?((((map__161181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161181):map__161181);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161181__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161180,(1),null);
var ch = (cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$1(ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__161180,map__161181,map__161181__$1,title,kids){
return (function (p1__2099_SHARP_){
return cljs.core.assoc_in(p1__2099_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__161180,map__161181,map__161181__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h1,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$chapter = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161183__i = 0, G__161183__a = new Array(arguments.length -  0);
while (G__161183__i < G__161183__a.length) {G__161183__a[G__161183__i] = arguments[G__161183__i + 0]; ++G__161183__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161183__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__8262__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__161184){
var args__8262__auto__ = cljs.core.seq(arglist__161184);
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
var vec__161188 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161188,(0),null);
var map__161189__$1 = ((((!((map__161189 == null)))?((((map__161189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161189):map__161189);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161189__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161188,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect__$1 = (cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$2(ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__161188,map__161189,map__161189__$1,title,kids){
return (function (p1__2100_SHARP_){
return cljs.core.assoc_in(p1__2100_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__161188,map__161189,map__161189__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h2,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$sect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161191__i = 0, G__161191__a = new Array(arguments.length -  0);
while (G__161191__i < G__161191__a.length) {G__161191__a[G__161191__i] = arguments[G__161191__i + 0]; ++G__161191__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161191__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__8262__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__161192){
var args__8262__auto__ = cljs.core.seq(arglist__161192);
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
var vec__161196 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161196,(0),null);
var map__161197__$1 = ((((!((map__161197 == null)))?((((map__161197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161197):map__161197);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161197__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161196,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = (cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$3(ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__161196,map__161197,map__161197__$1,title,kids){
return (function (p1__2101_SHARP_){
return cljs.core.assoc_in(p1__2101_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__161196,map__161197,map__161197__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$subsect = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161199__i = 0, G__161199__a = new Array(arguments.length -  0);
while (G__161199__i < G__161199__a.length) {G__161199__a[G__161199__i] = arguments[G__161199__i + 0]; ++G__161199__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161199__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__8262__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__161200){
var args__8262__auto__ = cljs.core.seq(arglist__161200);
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
var vec__161204 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161204,(0),null);
var map__161205__$1 = ((((!((map__161205 == null)))?((((map__161205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161205):map__161205);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161205__$1,cljs.core.cst$kw$title);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161204,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub__$1 = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$ssub,cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
var title__$1 = title;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__161204,map__161205,map__161205__$1,title,kids){
return (function (p1__2102_SHARP_){
return cljs.core.assoc_in(p1__2102_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__161204,map__161205,map__161205__$1,title,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h4,cljs.core.cst$kw$title,title__$1,cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$ssub = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161207__i = 0, G__161207__a = new Array(arguments.length -  0);
while (G__161207__i < G__161207__a.length) {G__161207__a[G__161207__i] = arguments[G__161207__i + 0]; ++G__161207__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161207__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__8262__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__161208){
var args__8262__auto__ = cljs.core.seq(arglist__161208);
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
var vec__161210 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161210,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161210,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var sect = cljs.core.count(book.general.parts.get_sects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch));
var sub = cljs.core.count(book.general.parts.get_subsects((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect));
var ssub = (cljs.core.count(book.general.parts.get_ssubs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.cljs$core$IFn$_invoke$arity$4(ch,sect,sub,ssub);
var end_exers = cljs.core.count(cljs.core.cst$kw$ex.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ch.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ch,sect,sub,ssub,link,end_exers,vec__161210,attr,kids){
return (function (p1__2103_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__2103_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__161210,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"exercises",cljs.core.cst$kw$title,title,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__161210,attr,kids){
return (function (p1__2104_SHARP_){
return cljs.core.assoc_in(p1__2104_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$sect,sect,cljs.core.cst$kw$sub,sub,cljs.core.cst$kw$ssub,ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__161210,attr,kids))
);

return book.general.parts.part.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$size,tailrecursion.hoplon.h3,cljs.core.cst$kw$title,"",cljs.core.cst$kw$link,link,kids], 0));
};
var book$general$parts$exercises = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161211__i = 0, G__161211__a = new Array(arguments.length -  0);
while (G__161211__i < G__161211__a.length) {G__161211__a[G__161211__i] = arguments[G__161211__i + 0]; ++G__161211__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161211__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__8262__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__161212){
var args__8262__auto__ = cljs.core.seq(arglist__161212);
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
var vec__161222 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161222,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161222,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ex = (cljs.core.count(book.general.parts.get_exs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"exercise",cljs.core.cst$kw$link,[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__161222,attr,kids){
return (function (p1__2105_SHARP_){
return cljs.core.assoc_in(p1__2105_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$ex,ex], null),this_data);
});})(ch,ex,this_data,vec__161222,attr,kids))
);

var G__161224 = cljs.core.cst$kw$type;
var G__161225 = "exercise";
var G__161226 = cljs.core.cst$kw$class;
var G__161227 = "exercise";
var G__161228 = (function (){var G__161230 = [cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('');
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__161230) : tailrecursion.hoplon.h3.call(null,G__161230));
})();
var G__161229 = kids;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__161224,G__161225,G__161226,G__161227,G__161228,G__161229) : tailrecursion.hoplon.div.call(null,G__161224,G__161225,G__161226,G__161227,G__161228,G__161229));
};
var book$general$parts$exercise = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161231__i = 0, G__161231__a = new Array(arguments.length -  0);
while (G__161231__i < G__161231__a.length) {G__161231__a[G__161231__i] = arguments[G__161231__i + 0]; ++G__161231__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161231__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__8262__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__161232){
var args__8262__auto__ = cljs.core.seq(arglist__161232);
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
var vec__161245 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161245,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161245,(1),null);
var open = tailrecursion.javelin.cell(false);
var button_text = tailrecursion.javelin.formula(((function (open,vec__161245,_,children){
return (function (G__161246){
return [cljs.core.str((cljs.core.truth_(G__161246)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__161245,_,children))
).call(null,open);
var G__161250 = (function (){var G__161252 = cljs.core.cst$kw$click;
var G__161253 = ((function (G__161252,open,button_text,vec__161245,_,children){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open,cljs.core.not);
});})(G__161252,open,button_text,vec__161245,_,children))
;
var G__161254 = button_text;
return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(G__161252,G__161253,G__161254) : tailrecursion.hoplon.button.call(null,G__161252,G__161253,G__161254));
})();
var G__161251 = (function (){var G__161255 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"solution",cljs.core.cst$kw$toggle,open], null);
var G__161256 = children;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__161255,G__161256) : tailrecursion.hoplon.div.call(null,G__161255,G__161256));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__161250,G__161251) : tailrecursion.hoplon.div.call(null,G__161250,G__161251));
};
var book$general$parts$q_a = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161257__i = 0, G__161257__a = new Array(arguments.length -  0);
while (G__161257__i < G__161257__a.length) {G__161257__a[G__161257__i] = arguments[G__161257__i + 0]; ++G__161257__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161257__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__8262__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__161258){
var args__8262__auto__ = cljs.core.seq(arglist__161258);
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
var vec__161268 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__161269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161268,(0),null);
var map__161269__$1 = ((((!((map__161269 == null)))?((((map__161269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__161269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__161269):map__161269);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__161269__$1,cljs.core.cst$kw$footer);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161268,(1),null);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var figr = (cljs.core.count(book.general.parts.get_figs((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case(cljs.core.cst$kw$short_DASH_title.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$footer,footer,cljs.core.cst$kw$src,src,cljs.core.cst$kw$link,link], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__161268,map__161269,map__161269__$1,footer,_){
return (function (p1__2106_SHARP_){
return cljs.core.assoc_in(p1__2106_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ch,ch,cljs.core.cst$kw$fig,figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__161268,map__161269,map__161269__$1,footer,_))
);

var G__161271 = (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3") : tailrecursion.hoplon.img.call(null,cljs.core.cst$kw$src,src,cljs.core.cst$kw$class,"img-responsive",cljs.core.cst$kw$alt,"Figure 1.3"));
var G__161272 = (function (){var G__161274 = (function (){var G__161276 = [cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('');
return (tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.b.cljs$core$IFn$_invoke$arity$1(G__161276) : tailrecursion.hoplon.b.call(null,G__161276));
})();
var G__161275 = footer;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__161274,G__161275) : tailrecursion.hoplon.p.call(null,G__161274,G__161275));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__161271,G__161272) : tailrecursion.hoplon.div.call(null,G__161271,G__161272));
};
var book$general$parts$fig = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161277__i = 0, G__161277__a = new Array(arguments.length -  0);
while (G__161277__i < G__161277__a.length) {G__161277__a[G__161277__i] = arguments[G__161277__i + 0]; ++G__161277__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161277__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__8262__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__161278){
var args__8262__auto__ = cljs.core.seq(arglist__161278);
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
var vec__161284 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161284,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161284,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__161285 = cljs.core.cst$kw$class;
var G__161286 = "img-responsive";
var G__161287 = cljs.core.cst$kw$src;
var G__161288 = [cljs.core.str("/"),cljs.core.str(cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(attr))].join('');
return (tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.img.cljs$core$IFn$_invoke$arity$4(G__161285,G__161286,G__161287,G__161288) : tailrecursion.hoplon.img.call(null,G__161285,G__161286,G__161287,G__161288));
})(),kids);
};
var book$general$parts$image = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161289__i = 0, G__161289__a = new Array(arguments.length -  0);
while (G__161289__i < G__161289__a.length) {G__161289__a[G__161289__i] = arguments[G__161289__i + 0]; ++G__161289__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161289__a,0);
} 
return book$general$parts$image__delegate.call(this,args__8262__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__161290){
var args__8262__auto__ = cljs.core.seq(arglist__161290);
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
var vec__161317 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161317,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161317,(1),null);
var hidden = tailrecursion.javelin.cell(true);
var ch = cljs.core.count(book.general.parts.get_chapters((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))));
var ftn = (cljs.core.count(cljs.core.cst$kw$footnote.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(book.general.parts._STAR_book_data_STAR_) : cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__161317,attr,kids){
return (function (p1__2107_SHARP_){
return cljs.core.assoc_in(p1__2107_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnote,ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__161317,attr,kids))
);

var G__161324 = cljs.core.cst$kw$style;
var G__161325 = "display:inline;";
var G__161326 = (function (){var G__161328 = cljs.core.cst$kw$click;
var G__161329 = ((function (G__161328,G__161324,G__161325,hidden,ch,ftn,this_data,vec__161317,attr,kids){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,cljs.core.not);
});})(G__161328,G__161324,G__161325,hidden,ch,ftn,this_data,vec__161317,attr,kids))
;
var G__161330 = cljs.core.cst$kw$style;
var G__161331 = "color:#0000ff";
var G__161332 = (function (){var G__161333 = [cljs.core.str(ftn)].join('');
return (tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.sup.cljs$core$IFn$_invoke$arity$1(G__161333) : tailrecursion.hoplon.sup.call(null,G__161333));
})();
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(G__161328,G__161329,G__161330,G__161331,G__161332) : tailrecursion.hoplon.span.call(null,G__161328,G__161329,G__161330,G__161331,G__161332));
})();
var G__161327 = (function (){var G__161335 = cljs.core.cst$kw$class;
var G__161336 = tailrecursion.javelin.formula(((function (G__161335,G__161324,G__161325,G__161326,hidden,ch,ftn,this_data,vec__161317,attr,kids){
return (function (G__161338){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hidden,G__161338,cljs.core.cst$kw$popover,true,cljs.core.cst$kw$bottom,true], null);
});})(G__161335,G__161324,G__161325,G__161326,hidden,ch,ftn,this_data,vec__161317,attr,kids))
).call(null,hidden);
var G__161337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var G__161339 = cljs.core.cst$kw$class;
var G__161340 = "popover-content";
var G__161341 = cljs.core.cst$kw$click;
var G__161342 = ((function (G__161339,G__161340,G__161341,G__161335,G__161336,G__161324,G__161325,G__161326,hidden,ch,ftn,this_data,vec__161317,attr,kids){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hidden,true) : cljs.core.reset_BANG_.call(null,hidden,true));
});})(G__161339,G__161340,G__161341,G__161335,G__161336,G__161324,G__161325,G__161326,hidden,ch,ftn,this_data,vec__161317,attr,kids))
;
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__161339,G__161340,G__161341,G__161342) : tailrecursion.hoplon.div.call(null,G__161339,G__161340,G__161341,G__161342));
})(),attr,kids);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__161335,G__161336,G__161337) : tailrecursion.hoplon.div.call(null,G__161335,G__161336,G__161337));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__161324,G__161325,G__161326,G__161327) : tailrecursion.hoplon.div.call(null,G__161324,G__161325,G__161326,G__161327));
};
var book$general$parts$footnote = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__161343__i = 0, G__161343__a = new Array(arguments.length -  0);
while (G__161343__i < G__161343__a.length) {G__161343__a[G__161343__i] = arguments[G__161343__i + 0]; ++G__161343__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__161343__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__8262__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__161344){
var args__8262__auto__ = cljs.core.seq(arglist__161344);
return book$general$parts$footnote__delegate(args__8262__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
tailrecursion.hoplon.markdown.quoted_node.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$double_DASH_angle,(function (_,kids){
return book.general.parts.footnote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([kids], 0));
}));
