// Compiled by ClojureScript 1.7.48 {}
goog.provide('book.general.parts');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.markdown');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('general.toc');
goog.require('tailrecursion.javelin');
goog.require('clojure.string');
book.general.parts._STAR_book_data_STAR_ = tailrecursion.javelin.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
book.general.parts.make_link = (function book$general$parts$make_link(){
var args84713 = [];
var len__6061__auto___84716 = arguments.length;
var i__6062__auto___84717 = (0);
while(true){
if((i__6062__auto___84717 < len__6061__auto___84716)){
args84713.push((arguments[i__6062__auto___84717]));

var G__84718 = (i__6062__auto___84717 + (1));
i__6062__auto___84717 = G__84718;
continue;
} else {
}
break;
}

var G__84715 = args84713.length;
switch (G__84715) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args84713.length)].join('')));

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
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data);
});
book.general.parts.get_sects = (function book$general$parts$get_sects(data,ch){
return new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_subsects = (function book$general$parts$get_subsects(data,ch,sect){
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect));
});
book.general.parts.get_ssubs = (function book$general$parts$get_ssubs(data,ch,sect,sub){
return new cljs.core.Keyword(null,"ssub","ssub",1000444057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect)).call(null,sub));
});
book.general.parts.get_exs = (function book$general$parts$get_exs(data,ch){
return new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_figs = (function book$general$parts$get_figs(data,ch){
return new cljs.core.Keyword(null,"fig","fig",-109728497).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
book.general.parts.get_footnotes = (function book$general$parts$get_footnotes(data,ch){
return new cljs.core.Keyword(null,"footnote","footnote",-1569223153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
/**
 * @param {...*} var_args
 */
book.general.parts.part = (function() { 
var book$general$parts$part__delegate = function (args__6627__auto__){
var vec__84726 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84727 = cljs.core.nth.call(null,vec__84726,(0),null);
var map__84727__$1 = ((((!((map__84727 == null)))?((((map__84727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84727):map__84727);
var size = cljs.core.get.call(null,map__84727__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var link = cljs.core.get.call(null,map__84727__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__84727__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84726,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),tailrecursion.javelin.formula.call(null,((function (vec__84726,map__84727,map__84727__$1,size,link,title,kids){
return (function (G__84729,G__84730,G__84731){
return G__84729.call(null,G__84730,G__84731);
});})(vec__84726,map__84727,map__84727__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,link),new cljs.core.Keyword(null,"at-top","at-top",-1582989340),((function (vec__84726,map__84727,map__84727__$1,size,link,title,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link);
});})(vec__84726,map__84727,map__84727__$1,size,link,title,kids))
,size.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-left",title),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"",kids));
};
var book$general$parts$part = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84732__i = 0, G__84732__a = new Array(arguments.length -  0);
while (G__84732__i < G__84732__a.length) {G__84732__a[G__84732__i] = arguments[G__84732__i + 0]; ++G__84732__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84732__a,0);
} 
return book$general$parts$part__delegate.call(this,args__6627__auto__);};
book$general$parts$part.cljs$lang$maxFixedArity = 0;
book$general$parts$part.cljs$lang$applyTo = (function (arglist__84733){
var args__6627__auto__ = cljs.core.seq(arglist__84733);
return book$general$parts$part__delegate(args__6627__auto__);
});
book$general$parts$part.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$part__delegate;
return book$general$parts$part;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.content = (function() { 
var book$general$parts$content__delegate = function (args__6627__auto__){
var vec__84735 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84735,(0),null);
var kids = cljs.core.nth.call(null,vec__84735,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-justify",new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10%; padding-right:5%;"),attr,kids);
};
var book$general$parts$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84736__i = 0, G__84736__a = new Array(arguments.length -  0);
while (G__84736__i < G__84736__a.length) {G__84736__a[G__84736__i] = arguments[G__84736__i + 0]; ++G__84736__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84736__a,0);
} 
return book$general$parts$content__delegate.call(this,args__6627__auto__);};
book$general$parts$content.cljs$lang$maxFixedArity = 0;
book$general$parts$content.cljs$lang$applyTo = (function (arglist__84737){
var args__6627__auto__ = cljs.core.seq(arglist__84737);
return book$general$parts$content__delegate(args__6627__auto__);
});
book$general$parts$content.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$content__delegate;
return book$general$parts$content;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.about = (function() { 
var book$general$parts$about__delegate = function (args__6627__auto__){
var vec__84744 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84745 = cljs.core.nth.call(null,vec__84744,(0),null);
var map__84745__$1 = ((((!((map__84745 == null)))?((((map__84745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84745):map__84745);
var title = cljs.core.get.call(null,map__84745__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tagline = cljs.core.get.call(null,map__84745__$1,new cljs.core.Keyword(null,"tagline","tagline",281987682));
var kids = cljs.core.nth.call(null,vec__84744,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),tailrecursion.javelin.formula.call(null,((function (vec__84744,map__84745,map__84745__$1,title,tagline,kids){
return (function (G__84747,G__84748,G__84749){
return G__84747.call(null,G__84748,[cljs.core.str("#!/"),cljs.core.str(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(G__84749)),cljs.core.str("/")].join(''));
});})(vec__84744,map__84745,map__84745__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,general.info.route_STAR_,book.general.parts._STAR_book_data_STAR_),new cljs.core.Keyword(null,"at-top","at-top",-1582989340),((function (vec__84744,map__84745,map__84745__$1,title,tagline,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,general.toc.scroll_location,[cljs.core.str("#!/"),cljs.core.str(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))),cljs.core.str("/")].join(''));
});})(vec__84744,map__84745,map__84745__$1,title,tagline,kids))
,new cljs.core.Keyword(null,"class","class",-2030961996),"text-justify",tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-left",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))),tailrecursion.hoplon.h3.call(null,new cljs.core.Keyword(null,"tagline","tagline",281987682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))),tailrecursion.hoplon.div.call(null,kids));
};
var book$general$parts$about = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84750__i = 0, G__84750__a = new Array(arguments.length -  0);
while (G__84750__i < G__84750__a.length) {G__84750__a[G__84750__i] = arguments[G__84750__i + 0]; ++G__84750__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84750__a,0);
} 
return book$general$parts$about__delegate.call(this,args__6627__auto__);};
book$general$parts$about.cljs$lang$maxFixedArity = 0;
book$general$parts$about.cljs$lang$applyTo = (function (arglist__84751){
var args__6627__auto__ = cljs.core.seq(arglist__84751);
return book$general$parts$about__delegate(args__6627__auto__);
});
book$general$parts$about.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$about__delegate;
return book$general$parts$about;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.chapter = (function() { 
var book$general$parts$chapter__delegate = function (args__6627__auto__){
var vec__84755 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84756 = cljs.core.nth.call(null,vec__84755,(0),null);
var map__84756__$1 = ((((!((map__84756 == null)))?((((map__84756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84756):map__84756);
var title = cljs.core.get.call(null,map__84756__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84755,(1),null);
var ch = (cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))) + (1));
var link = book.general.parts.make_link.call(null,ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__84755,map__84756,map__84756__$1,title,kids){
return (function (p1__5408_SHARP_){
return cljs.core.assoc_in.call(null,p1__5408_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__84755,map__84756,map__84756__$1,title,kids))
);

return book.general.parts.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h1,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var book$general$parts$chapter = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84758__i = 0, G__84758__a = new Array(arguments.length -  0);
while (G__84758__i < G__84758__a.length) {G__84758__a[G__84758__i] = arguments[G__84758__i + 0]; ++G__84758__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84758__a,0);
} 
return book$general$parts$chapter__delegate.call(this,args__6627__auto__);};
book$general$parts$chapter.cljs$lang$maxFixedArity = 0;
book$general$parts$chapter.cljs$lang$applyTo = (function (arglist__84759){
var args__6627__auto__ = cljs.core.seq(arglist__84759);
return book$general$parts$chapter__delegate(args__6627__auto__);
});
book$general$parts$chapter.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$chapter__delegate;
return book$general$parts$chapter;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.sect = (function() { 
var book$general$parts$sect__delegate = function (args__6627__auto__){
var vec__84763 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84764 = cljs.core.nth.call(null,vec__84763,(0),null);
var map__84764__$1 = ((((!((map__84764 == null)))?((((map__84764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84764):map__84764);
var title = cljs.core.get.call(null,map__84764__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84763,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var sect__$1 = (cljs.core.count.call(null,book.general.parts.get_sects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch)) + (1));
var link = book.general.parts.make_link.call(null,ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect__$1,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__84763,map__84764,map__84764__$1,title,kids){
return (function (p1__5409_SHARP_){
return cljs.core.assoc_in.call(null,p1__5409_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__84763,map__84764,map__84764__$1,title,kids))
);

return book.general.parts.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h2,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var book$general$parts$sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84766__i = 0, G__84766__a = new Array(arguments.length -  0);
while (G__84766__i < G__84766__a.length) {G__84766__a[G__84766__i] = arguments[G__84766__i + 0]; ++G__84766__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84766__a,0);
} 
return book$general$parts$sect__delegate.call(this,args__6627__auto__);};
book$general$parts$sect.cljs$lang$maxFixedArity = 0;
book$general$parts$sect.cljs$lang$applyTo = (function (arglist__84767){
var args__6627__auto__ = cljs.core.seq(arglist__84767);
return book$general$parts$sect__delegate(args__6627__auto__);
});
book$general$parts$sect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$sect__delegate;
return book$general$parts$sect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.subsect = (function() { 
var book$general$parts$subsect__delegate = function (args__6627__auto__){
var vec__84771 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84772 = cljs.core.nth.call(null,vec__84771,(0),null);
var map__84772__$1 = ((((!((map__84772 == null)))?((((map__84772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84772):map__84772);
var title = cljs.core.get.call(null,map__84772__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84771,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,book.general.parts.get_sects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch));
var sub = (cljs.core.count.call(null,book.general.parts.get_subsects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch,sect)) + (1));
var link = book.general.parts.make_link.call(null,ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__84771,map__84772,map__84772__$1,title,kids){
return (function (p1__5410_SHARP_){
return cljs.core.assoc_in.call(null,p1__5410_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__84771,map__84772,map__84772__$1,title,kids))
);

return book.general.parts.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h3,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var book$general$parts$subsect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84774__i = 0, G__84774__a = new Array(arguments.length -  0);
while (G__84774__i < G__84774__a.length) {G__84774__a[G__84774__i] = arguments[G__84774__i + 0]; ++G__84774__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84774__a,0);
} 
return book$general$parts$subsect__delegate.call(this,args__6627__auto__);};
book$general$parts$subsect.cljs$lang$maxFixedArity = 0;
book$general$parts$subsect.cljs$lang$applyTo = (function (arglist__84775){
var args__6627__auto__ = cljs.core.seq(arglist__84775);
return book$general$parts$subsect__delegate(args__6627__auto__);
});
book$general$parts$subsect.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$subsect__delegate;
return book$general$parts$subsect;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.ssub = (function() { 
var book$general$parts$ssub__delegate = function (args__6627__auto__){
var vec__84779 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84780 = cljs.core.nth.call(null,vec__84779,(0),null);
var map__84780__$1 = ((((!((map__84780 == null)))?((((map__84780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84780):map__84780);
var title = cljs.core.get.call(null,map__84780__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__84779,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,book.general.parts.get_sects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch));
var sub = cljs.core.count.call(null,book.general.parts.get_subsects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch,sect));
var ssub__$1 = (cljs.core.count.call(null,book.general.parts.get_ssubs.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.call(null,ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ssub","ssub",1000444057),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = title;
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__84779,map__84780,map__84780__$1,title,kids){
return (function (p1__5411_SHARP_){
return cljs.core.assoc_in.call(null,p1__5411_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__84779,map__84780,map__84780__$1,title,kids))
);

return book.general.parts.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h4,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var book$general$parts$ssub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84782__i = 0, G__84782__a = new Array(arguments.length -  0);
while (G__84782__i < G__84782__a.length) {G__84782__a[G__84782__i] = arguments[G__84782__i + 0]; ++G__84782__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84782__a,0);
} 
return book$general$parts$ssub__delegate.call(this,args__6627__auto__);};
book$general$parts$ssub.cljs$lang$maxFixedArity = 0;
book$general$parts$ssub.cljs$lang$applyTo = (function (arglist__84783){
var args__6627__auto__ = cljs.core.seq(arglist__84783);
return book$general$parts$ssub__delegate(args__6627__auto__);
});
book$general$parts$ssub.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$ssub__delegate;
return book$general$parts$ssub;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercises = (function() { 
var book$general$parts$exercises__delegate = function (args__6627__auto__){
var vec__84785 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84785,(0),null);
var kids = cljs.core.nth.call(null,vec__84785,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,book.general.parts.get_sects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch));
var sub = cljs.core.count.call(null,book.general.parts.get_subsects.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch,sect));
var ssub = (cljs.core.count.call(null,book.general.parts.get_ssubs.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch,sect,sub)) + (1));
var link = book.general.parts.make_link.call(null,ch,sect,sub,ssub);
var end_exers = cljs.core.count.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count.call(null,cljs.core.filter.call(null,((function (ch,sect,sub,ssub,link,end_exers,vec__84785,attr,kids){
return (function (p1__5412_SHARP_){
return !(cljs.core._EQ_.call(null,"",p1__5412_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__84785,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.call(null,(0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"exercises",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__84785,attr,kids){
return (function (p1__5413_SHARP_){
return cljs.core.assoc_in.call(null,p1__5413_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__84785,attr,kids))
);

return book.general.parts.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h3,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var book$general$parts$exercises = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84786__i = 0, G__84786__a = new Array(arguments.length -  0);
while (G__84786__i < G__84786__a.length) {G__84786__a[G__84786__i] = arguments[G__84786__i + 0]; ++G__84786__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84786__a,0);
} 
return book$general$parts$exercises__delegate.call(this,args__6627__auto__);};
book$general$parts$exercises.cljs$lang$maxFixedArity = 0;
book$general$parts$exercises.cljs$lang$applyTo = (function (arglist__84787){
var args__6627__auto__ = cljs.core.seq(arglist__84787);
return book$general$parts$exercises__delegate(args__6627__auto__);
});
book$general$parts$exercises.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercises__delegate;
return book$general$parts$exercises;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.exercise = (function() { 
var book$general$parts$exercise__delegate = function (args__6627__auto__){
var vec__84789 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84789,(0),null);
var kids = cljs.core.nth.call(null,vec__84789,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var ex = (cljs.core.count.call(null,book.general.parts.get_exs.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"exercise",new cljs.core.Keyword(null,"link","link",-1769163468),[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__84789,attr,kids){
return (function (p1__5414_SHARP_){
return cljs.core.assoc_in.call(null,p1__5414_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex], null),this_data);
});})(ch,ex,this_data,vec__84789,attr,kids))
);

return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"exercise",new cljs.core.Keyword(null,"class","class",-2030961996),"exercise",tailrecursion.hoplon.h3.call(null,[cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('')),kids);
};
var book$general$parts$exercise = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84790__i = 0, G__84790__a = new Array(arguments.length -  0);
while (G__84790__i < G__84790__a.length) {G__84790__a[G__84790__i] = arguments[G__84790__i + 0]; ++G__84790__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84790__a,0);
} 
return book$general$parts$exercise__delegate.call(this,args__6627__auto__);};
book$general$parts$exercise.cljs$lang$maxFixedArity = 0;
book$general$parts$exercise.cljs$lang$applyTo = (function (arglist__84791){
var args__6627__auto__ = cljs.core.seq(arglist__84791);
return book$general$parts$exercise__delegate(args__6627__auto__);
});
book$general$parts$exercise.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$exercise__delegate;
return book$general$parts$exercise;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.q_a = (function() { 
var book$general$parts$q_a__delegate = function (args__6627__auto__){
var vec__84794 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__84794,(0),null);
var children = cljs.core.nth.call(null,vec__84794,(1),null);
var open = tailrecursion.javelin.cell.call(null,false);
var button_text = tailrecursion.javelin.formula.call(null,((function (open,vec__84794,_,children){
return (function (G__84795){
return [cljs.core.str((cljs.core.truth_(G__84795)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__84794,_,children))
).call(null,open);
return tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (open,button_text,vec__84794,_,children){
return (function (){
return cljs.core.swap_BANG_.call(null,open,cljs.core.not);
});})(open,button_text,vec__84794,_,children))
,button_text),tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"solution",new cljs.core.Keyword(null,"toggle","toggle",1291842030),open], null),children));
};
var book$general$parts$q_a = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84796__i = 0, G__84796__a = new Array(arguments.length -  0);
while (G__84796__i < G__84796__a.length) {G__84796__a[G__84796__i] = arguments[G__84796__i + 0]; ++G__84796__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84796__a,0);
} 
return book$general$parts$q_a__delegate.call(this,args__6627__auto__);};
book$general$parts$q_a.cljs$lang$maxFixedArity = 0;
book$general$parts$q_a.cljs$lang$applyTo = (function (arglist__84797){
var args__6627__auto__ = cljs.core.seq(arglist__84797);
return book$general$parts$q_a__delegate(args__6627__auto__);
});
book$general$parts$q_a.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$q_a__delegate;
return book$general$parts$q_a;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.fig = (function() { 
var book$general$parts$fig__delegate = function (args__6627__auto__){
var vec__84801 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__84802 = cljs.core.nth.call(null,vec__84801,(0),null);
var map__84802__$1 = ((((!((map__84802 == null)))?((((map__84802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84802):map__84802);
var footer = cljs.core.get.call(null,map__84802__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var _ = cljs.core.nth.call(null,vec__84801,(1),null);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var figr = (cljs.core.count.call(null,book.general.parts.get_figs.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("/img/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"footer","footer",1606445390),footer,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__84801,map__84802,map__84802__$1,footer,_){
return (function (p1__5415_SHARP_){
return cljs.core.assoc_in.call(null,p1__5415_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"fig","fig",-109728497),figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__84801,map__84802,map__84802__$1,footer,_))
);

return tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"alt","alt",-3214426),"Figure 1.3"),tailrecursion.hoplon.p.call(null,tailrecursion.hoplon.b.call(null,[cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('')),footer));
};
var book$general$parts$fig = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84804__i = 0, G__84804__a = new Array(arguments.length -  0);
while (G__84804__i < G__84804__a.length) {G__84804__a[G__84804__i] = arguments[G__84804__i + 0]; ++G__84804__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84804__a,0);
} 
return book$general$parts$fig__delegate.call(this,args__6627__auto__);};
book$general$parts$fig.cljs$lang$maxFixedArity = 0;
book$general$parts$fig.cljs$lang$applyTo = (function (arglist__84805){
var args__6627__auto__ = cljs.core.seq(arglist__84805);
return book$general$parts$fig__delegate(args__6627__auto__);
});
book$general$parts$fig.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$fig__delegate;
return book$general$parts$fig;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.image = (function() { 
var book$general$parts$image__delegate = function (args__6627__auto__){
var vec__84807 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84807,(0),null);
var kids = cljs.core.nth.call(null,vec__84807,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attr))].join('')),kids);
};
var book$general$parts$image = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84808__i = 0, G__84808__a = new Array(arguments.length -  0);
while (G__84808__i < G__84808__a.length) {G__84808__a[G__84808__i] = arguments[G__84808__i + 0]; ++G__84808__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84808__a,0);
} 
return book$general$parts$image__delegate.call(this,args__6627__auto__);};
book$general$parts$image.cljs$lang$maxFixedArity = 0;
book$general$parts$image.cljs$lang$applyTo = (function (arglist__84809){
var args__6627__auto__ = cljs.core.seq(arglist__84809);
return book$general$parts$image__delegate(args__6627__auto__);
});
book$general$parts$image.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$image__delegate;
return book$general$parts$image;
})()
;
/**
 * @param {...*} var_args
 */
book.general.parts.footnote = (function() { 
var book$general$parts$footnote__delegate = function (args__6627__auto__){
var vec__84812 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__84812,(0),null);
var kids = cljs.core.nth.call(null,vec__84812,(1),null);
var hidden = tailrecursion.javelin.cell.call(null,true);
var ch = cljs.core.count.call(null,book.general.parts.get_chapters.call(null,cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_)));
var ftn = (cljs.core.count.call(null,new cljs.core.Keyword(null,"footnote","footnote",-1569223153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,book.general.parts._STAR_book_data_STAR_))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.call(null,book.general.parts._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__84812,attr,kids){
return (function (p1__5416_SHARP_){
return cljs.core.assoc_in.call(null,p1__5416_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnote","footnote",-1569223153),ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__84812,attr,kids))
);

return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"display:inline;",tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (hidden,ch,ftn,this_data,vec__84812,attr,kids){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden,cljs.core.not);
});})(hidden,ch,ftn,this_data,vec__84812,attr,kids))
,new cljs.core.Keyword(null,"style","style",-496642736),"color:#0000ff",tailrecursion.hoplon.sup.call(null,[cljs.core.str(ftn)].join(''))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (hidden,ch,ftn,this_data,vec__84812,attr,kids){
return (function (G__84813){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__84813,new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),true], null);
});})(hidden,ch,ftn,this_data,vec__84812,attr,kids))
).call(null,hidden),cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"popover-content",new cljs.core.Keyword(null,"click","click",1912301393),((function (hidden,ch,ftn,this_data,vec__84812,attr,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,hidden,true);
});})(hidden,ch,ftn,this_data,vec__84812,attr,kids))
),attr,kids)));
};
var book$general$parts$footnote = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__84814__i = 0, G__84814__a = new Array(arguments.length -  0);
while (G__84814__i < G__84814__a.length) {G__84814__a[G__84814__i] = arguments[G__84814__i + 0]; ++G__84814__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__84814__a,0);
} 
return book$general$parts$footnote__delegate.call(this,args__6627__auto__);};
book$general$parts$footnote.cljs$lang$maxFixedArity = 0;
book$general$parts$footnote.cljs$lang$applyTo = (function (arglist__84815){
var args__6627__auto__ = cljs.core.seq(arglist__84815);
return book$general$parts$footnote__delegate(args__6627__auto__);
});
book$general$parts$footnote.cljs$core$IFn$_invoke$arity$variadic = book$general$parts$footnote__delegate;
return book$general$parts$footnote;
})()
;
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.quoted_node,new cljs.core.Keyword(null,"double-angle","double-angle",-1539114060),(function (_,kids){
return book.general.parts.footnote.call(null,kids);
}));

//# sourceMappingURL=parts.js.map