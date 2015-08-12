// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ui.book');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book.location = tailrecursion.javelin.formula.call(null,(function (G__28328){
return G__28328;
})).call(null,ui.info.location);
ui.book._STAR_book_data_STAR_ = tailrecursion.javelin.cell.call(null,cljs.core.PersistentArrayMap.EMPTY);
ui.book.scroll_location = tailrecursion.javelin.cell.call(null,null);
ui.book.scroll_map = tailrecursion.javelin.formula.call(null,(function (G__28332,G__28331,G__28337,G__28338,G__28334,G__28335,G__28336,G__28333){
return G__28331.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28332.call(null,(function (p__28329){
var vec__28330 = p__28329;
var k = cljs.core.nth.call(null,vec__28330,(0),null);
var v = cljs.core.nth.call(null,vec__28330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28333.call(null,k),G__28334.call(null,v)], null);
}),G__28335.call(null,(1),G__28336.call(null,(2),G__28337.call(null,G__28338,/\//)))));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,ui.book.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
ui.book.make_link = (function ui$book$make_link(){
var G__28340 = arguments.length;
switch (G__28340) {
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
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$2 = (function (ch,sect){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$3 = (function (ch,sect,sub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$core$IFn$_invoke$arity$4 = (function (ch,sect,sub,ssub){
return [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/sect/"),cljs.core.str(sect),cljs.core.str("/sub/"),cljs.core.str(sub),cljs.core.str("/ssub/"),cljs.core.str(ssub),cljs.core.str("/")].join('');
});

ui.book.make_link.cljs$lang$maxFixedArity = 4;
ui.book.get_chapters = (function ui$book$get_chapters(data){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data);
});
ui.book.get_sects = (function ui$book$get_sects(data,ch){
return new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_subsects = (function ui$book$get_subsects(data,ch,sect){
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect));
});
ui.book.get_ssubs = (function ui$book$get_ssubs(data,ch,sect,sub){
return new cljs.core.Keyword(null,"ssub","ssub",1000444057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch)).call(null,sect)).call(null,sub));
});
ui.book.get_exs = (function ui$book$get_exs(data,ch){
return new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_figs = (function ui$book$get_figs(data,ch){
return new cljs.core.Keyword(null,"fig","fig",-109728497).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
ui.book.get_footnotes = (function ui$book$get_footnotes(data,ch){
return new cljs.core.Keyword(null,"footnote","footnote",-1569223153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(data).call(null,ch));
});
/**
 * @param {...*} var_args
 */
ui.book.part = (function() { 
var ui$book$part__delegate = function (args__5784__auto__){
var vec__28347 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28348 = cljs.core.nth.call(null,vec__28347,(0),null);
var map__28348__$1 = ((cljs.core.seq_QMARK_.call(null,map__28348))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var size = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var link = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28347,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),tailrecursion.javelin.formula.call(null,((function (vec__28347,map__28348,map__28348__$1,size,link,title,kids){
return (function (G__28349,G__28350,G__28351){
return G__28349.call(null,G__28350,G__28351);
});})(vec__28347,map__28348,map__28348__$1,size,link,title,kids))
).call(null,cljs.core._EQ_,ui.info.route_STAR_,link),new cljs.core.Keyword(null,"at-top","at-top",-1582989340),((function (vec__28347,map__28348,map__28348__$1,size,link,title,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.book.scroll_location,link);
});})(vec__28347,map__28348,map__28348__$1,size,link,title,kids))
,size.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-left",title),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"",kids));
};
var ui$book$part = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28352__i = 0, G__28352__a = new Array(arguments.length -  0);
while (G__28352__i < G__28352__a.length) {G__28352__a[G__28352__i] = arguments[G__28352__i + 0]; ++G__28352__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28352__a,0);
} 
return ui$book$part__delegate.call(this,args__5784__auto__);};
ui$book$part.cljs$lang$maxFixedArity = 0;
ui$book$part.cljs$lang$applyTo = (function (arglist__28353){
var args__5784__auto__ = cljs.core.seq(arglist__28353);
return ui$book$part__delegate(args__5784__auto__);
});
ui$book$part.cljs$core$IFn$_invoke$arity$variadic = ui$book$part__delegate;
return ui$book$part;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.container = (function() { 
var ui$book$container__delegate = function (args__5784__auto__){
var vec__28355 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28355,(0),null);
var kids = cljs.core.nth.call(null,vec__28355,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-justify",new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10%; padding-right:5%;"),attr,kids);
};
var ui$book$container = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28356__i = 0, G__28356__a = new Array(arguments.length -  0);
while (G__28356__i < G__28356__a.length) {G__28356__a[G__28356__i] = arguments[G__28356__i + 0]; ++G__28356__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28356__a,0);
} 
return ui$book$container__delegate.call(this,args__5784__auto__);};
ui$book$container.cljs$lang$maxFixedArity = 0;
ui$book$container.cljs$lang$applyTo = (function (arglist__28357){
var args__5784__auto__ = cljs.core.seq(arglist__28357);
return ui$book$container__delegate(args__5784__auto__);
});
ui$book$container.cljs$core$IFn$_invoke$arity$variadic = ui$book$container__delegate;
return ui$book$container;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.about = (function() { 
var ui$book$about__delegate = function (args__5784__auto__){
var vec__28363 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28364 = cljs.core.nth.call(null,vec__28363,(0),null);
var map__28364__$1 = ((cljs.core.seq_QMARK_.call(null,map__28364))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364):map__28364);
var title = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"title","title",636505583));
var tagline = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"tagline","tagline",281987682));
var kids = cljs.core.nth.call(null,vec__28363,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),tailrecursion.javelin.formula.call(null,((function (vec__28363,map__28364,map__28364__$1,title,tagline,kids){
return (function (G__28365,G__28366,G__28367){
return G__28365.call(null,G__28366.call(null,"#!/home/"),[cljs.core.str("#!/"),cljs.core.str(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(G__28367)),cljs.core.str("/")].join(''));
});})(vec__28363,map__28364,map__28364__$1,title,tagline,kids))
).call(null,cljs.core._EQ_,tailrecursion.hoplon.route_cell,ui.book._STAR_book_data_STAR_),new cljs.core.Keyword(null,"at-top","at-top",-1582989340),((function (vec__28363,map__28364,map__28364__$1,title,tagline,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.book.scroll_location,[cljs.core.str("#!/"),cljs.core.str(new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_))),cljs.core.str("/")].join(''));
});})(vec__28363,map__28364,map__28364__$1,title,tagline,kids))
,new cljs.core.Keyword(null,"class","class",-2030961996),"text-justify",tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"text-left",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_))),tailrecursion.hoplon.h3.call(null,new cljs.core.Keyword(null,"tagline","tagline",281987682).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_))),tailrecursion.hoplon.div.call(null,kids));
};
var ui$book$about = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28368__i = 0, G__28368__a = new Array(arguments.length -  0);
while (G__28368__i < G__28368__a.length) {G__28368__a[G__28368__i] = arguments[G__28368__i + 0]; ++G__28368__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28368__a,0);
} 
return ui$book$about__delegate.call(this,args__5784__auto__);};
ui$book$about.cljs$lang$maxFixedArity = 0;
ui$book$about.cljs$lang$applyTo = (function (arglist__28369){
var args__5784__auto__ = cljs.core.seq(arglist__28369);
return ui$book$about__delegate(args__5784__auto__);
});
ui$book$about.cljs$core$IFn$_invoke$arity$variadic = ui$book$about__delegate;
return ui$book$about;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.chapter = (function() { 
var ui$book$chapter__delegate = function (args__5784__auto__){
var vec__28372 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28373 = cljs.core.nth.call(null,vec__28372,(0),null);
var map__28373__$1 = ((cljs.core.seq_QMARK_.call(null,map__28373))?cljs.core.apply.call(null,cljs.core.hash_map,map__28373):map__28373);
var title = cljs.core.get.call(null,map__28373__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28372,(1),null);
var ch = (cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_))) + (1));
var link = ui.book.make_link.call(null,ch);
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,link,this_data,title__$1,vec__28372,map__28373,map__28373__$1,title,kids){
return (function (p1__3254_SHARP_){
return cljs.core.assoc_in.call(null,p1__3254_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch], null),this_data);
});})(ch,link,this_data,title__$1,vec__28372,map__28373,map__28373__$1,title,kids))
);

return ui.book.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h1,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var ui$book$chapter = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28374__i = 0, G__28374__a = new Array(arguments.length -  0);
while (G__28374__i < G__28374__a.length) {G__28374__a[G__28374__i] = arguments[G__28374__i + 0]; ++G__28374__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28374__a,0);
} 
return ui$book$chapter__delegate.call(this,args__5784__auto__);};
ui$book$chapter.cljs$lang$maxFixedArity = 0;
ui$book$chapter.cljs$lang$applyTo = (function (arglist__28375){
var args__5784__auto__ = cljs.core.seq(arglist__28375);
return ui$book$chapter__delegate(args__5784__auto__);
});
ui$book$chapter.cljs$core$IFn$_invoke$arity$variadic = ui$book$chapter__delegate;
return ui$book$chapter;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.sect = (function() { 
var ui$book$sect__delegate = function (args__5784__auto__){
var vec__28378 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28379 = cljs.core.nth.call(null,vec__28378,(0),null);
var map__28379__$1 = ((cljs.core.seq_QMARK_.call(null,map__28379))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var title = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28378,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var sect__$1 = (cljs.core.count.call(null,ui.book.get_sects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch)) + (1));
var link = ui.book.make_link.call(null,ch,sect__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect__$1,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect__$1),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,sect__$1,link,this_data,title__$1,vec__28378,map__28379,map__28379__$1,title,kids){
return (function (p1__3255_SHARP_){
return cljs.core.assoc_in.call(null,p1__3255_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect__$1], null),this_data);
});})(ch,sect__$1,link,this_data,title__$1,vec__28378,map__28379,map__28379__$1,title,kids))
);

return ui.book.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h2,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var ui$book$sect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28380__i = 0, G__28380__a = new Array(arguments.length -  0);
while (G__28380__i < G__28380__a.length) {G__28380__a[G__28380__i] = arguments[G__28380__i + 0]; ++G__28380__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28380__a,0);
} 
return ui$book$sect__delegate.call(this,args__5784__auto__);};
ui$book$sect.cljs$lang$maxFixedArity = 0;
ui$book$sect.cljs$lang$applyTo = (function (arglist__28381){
var args__5784__auto__ = cljs.core.seq(arglist__28381);
return ui$book$sect__delegate(args__5784__auto__);
});
ui$book$sect.cljs$core$IFn$_invoke$arity$variadic = ui$book$sect__delegate;
return ui$book$sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.subsect = (function() { 
var ui$book$subsect__delegate = function (args__5784__auto__){
var vec__28384 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28385 = cljs.core.nth.call(null,vec__28384,(0),null);
var map__28385__$1 = ((cljs.core.seq_QMARK_.call(null,map__28385))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);
var title = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28384,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,ui.book.get_sects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch));
var sub = (cljs.core.count.call(null,ui.book.get_subsects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch,sect)) + (1));
var link = ui.book.make_link.call(null,ch,sect,sub);
var this_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = [cljs.core.str(ch),cljs.core.str("."),cljs.core.str(sect),cljs.core.str("."),cljs.core.str(sub),cljs.core.str(" "),cljs.core.str(title)].join('');
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,link,this_data,title__$1,vec__28384,map__28385,map__28385__$1,title,kids){
return (function (p1__3256_SHARP_){
return cljs.core.assoc_in.call(null,p1__3256_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub], null),this_data);
});})(ch,sect,sub,link,this_data,title__$1,vec__28384,map__28385,map__28385__$1,title,kids))
);

return ui.book.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h3,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var ui$book$subsect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28386__i = 0, G__28386__a = new Array(arguments.length -  0);
while (G__28386__i < G__28386__a.length) {G__28386__a[G__28386__i] = arguments[G__28386__i + 0]; ++G__28386__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28386__a,0);
} 
return ui$book$subsect__delegate.call(this,args__5784__auto__);};
ui$book$subsect.cljs$lang$maxFixedArity = 0;
ui$book$subsect.cljs$lang$applyTo = (function (arglist__28387){
var args__5784__auto__ = cljs.core.seq(arglist__28387);
return ui$book$subsect__delegate(args__5784__auto__);
});
ui$book$subsect.cljs$core$IFn$_invoke$arity$variadic = ui$book$subsect__delegate;
return ui$book$subsect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.ssub = (function() { 
var ui$book$ssub__delegate = function (args__5784__auto__){
var vec__28390 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28391 = cljs.core.nth.call(null,vec__28390,(0),null);
var map__28391__$1 = ((cljs.core.seq_QMARK_.call(null,map__28391))?cljs.core.apply.call(null,cljs.core.hash_map,map__28391):map__28391);
var title = cljs.core.get.call(null,map__28391__$1,new cljs.core.Keyword(null,"title","title",636505583));
var kids = cljs.core.nth.call(null,vec__28390,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,ui.book.get_sects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch));
var sub = cljs.core.count.call(null,ui.book.get_subsects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch,sect));
var ssub__$1 = (cljs.core.count.call(null,ui.book.get_ssubs.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch,sect,sub)) + (1));
var link = ui.book.make_link.call(null,ch,sect,sub,ssub__$1);
var this_data = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ssub","ssub",1000444057),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
var title__$1 = title;
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__28390,map__28391,map__28391__$1,title,kids){
return (function (p1__3257_SHARP_){
return cljs.core.assoc_in.call(null,p1__3257_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub__$1], null),this_data);
});})(ch,sect,sub,ssub__$1,link,this_data,title__$1,vec__28390,map__28391,map__28391__$1,title,kids))
);

return ui.book.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h4,new cljs.core.Keyword(null,"title","title",636505583),title__$1,new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var ui$book$ssub = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28392__i = 0, G__28392__a = new Array(arguments.length -  0);
while (G__28392__i < G__28392__a.length) {G__28392__a[G__28392__i] = arguments[G__28392__i + 0]; ++G__28392__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28392__a,0);
} 
return ui$book$ssub__delegate.call(this,args__5784__auto__);};
ui$book$ssub.cljs$lang$maxFixedArity = 0;
ui$book$ssub.cljs$lang$applyTo = (function (arglist__28393){
var args__5784__auto__ = cljs.core.seq(arglist__28393);
return ui$book$ssub__delegate(args__5784__auto__);
});
ui$book$ssub.cljs$core$IFn$_invoke$arity$variadic = ui$book$ssub__delegate;
return ui$book$ssub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.exercises = (function() { 
var ui$book$exercises__delegate = function (args__5784__auto__){
var vec__28395 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28395,(0),null);
var kids = cljs.core.nth.call(null,vec__28395,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var sect = cljs.core.count.call(null,ui.book.get_sects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch));
var sub = cljs.core.count.call(null,ui.book.get_subsects.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch,sect));
var ssub = (cljs.core.count.call(null,ui.book.get_ssubs.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch,sect,sub)) + (1));
var link = ui.book.make_link.call(null,ch,sect,sub,ssub);
var end_exers = cljs.core.count.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)).call(null,ch)));
var first_exs = ((end_exers - cljs.core.count.call(null,cljs.core.filter.call(null,((function (ch,sect,sub,ssub,link,end_exers,vec__28395,attr,kids){
return (function (p1__3258_SHARP_){
return !(cljs.core._EQ_.call(null,"",p1__3258_SHARP_));
});})(ch,sect,sub,ssub,link,end_exers,vec__28395,attr,kids))
,kids))) + (1));
var title = [cljs.core.str("Exercise"),cljs.core.str(((cljs.core._EQ_.call(null,(0),(end_exers - first_exs)))?[cljs.core.str(" ")].join(''):[cljs.core.str("s "),cljs.core.str(first_exs),cljs.core.str("-")].join(''))),cljs.core.str(end_exers)].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"exercises",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__28395,attr,kids){
return (function (p1__3259_SHARP_){
return cljs.core.assoc_in.call(null,p1__3259_SHARP_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,new cljs.core.Keyword(null,"ssub","ssub",1000444057),ssub], null),this_data);
});})(ch,sect,sub,ssub,link,end_exers,first_exs,title,this_data,vec__28395,attr,kids))
);

return ui.book.part.call(null,new cljs.core.Keyword(null,"size","size",1098693007),tailrecursion.hoplon.h3,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"link","link",-1769163468),link,kids);
};
var ui$book$exercises = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28396__i = 0, G__28396__a = new Array(arguments.length -  0);
while (G__28396__i < G__28396__a.length) {G__28396__a[G__28396__i] = arguments[G__28396__i + 0]; ++G__28396__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28396__a,0);
} 
return ui$book$exercises__delegate.call(this,args__5784__auto__);};
ui$book$exercises.cljs$lang$maxFixedArity = 0;
ui$book$exercises.cljs$lang$applyTo = (function (arglist__28397){
var args__5784__auto__ = cljs.core.seq(arglist__28397);
return ui$book$exercises__delegate(args__5784__auto__);
});
ui$book$exercises.cljs$core$IFn$_invoke$arity$variadic = ui$book$exercises__delegate;
return ui$book$exercises;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.exercise = (function() { 
var ui$book$exercise__delegate = function (args__5784__auto__){
var vec__28399 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28399,(0),null);
var kids = cljs.core.nth.call(null,vec__28399,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var ex = (cljs.core.count.call(null,ui.book.get_exs.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch)) + (1));
var this_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"exercise",new cljs.core.Keyword(null,"link","link",-1769163468),[cljs.core.str("#!/sicp/ch/1/ex/"),cljs.core.str(ex)].join('')], null);
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,ex,this_data,vec__28399,attr,kids){
return (function (p1__3260_SHARP_){
return cljs.core.assoc_in.call(null,p1__3260_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex], null),this_data);
});})(ch,ex,this_data,vec__28399,attr,kids))
);

return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"exercise",new cljs.core.Keyword(null,"class","class",-2030961996),"exercise",tailrecursion.hoplon.h3.call(null,[cljs.core.str("Exercise "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(ex)].join('')),kids);
};
var ui$book$exercise = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28400__i = 0, G__28400__a = new Array(arguments.length -  0);
while (G__28400__i < G__28400__a.length) {G__28400__a[G__28400__i] = arguments[G__28400__i + 0]; ++G__28400__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28400__a,0);
} 
return ui$book$exercise__delegate.call(this,args__5784__auto__);};
ui$book$exercise.cljs$lang$maxFixedArity = 0;
ui$book$exercise.cljs$lang$applyTo = (function (arglist__28401){
var args__5784__auto__ = cljs.core.seq(arglist__28401);
return ui$book$exercise__delegate(args__5784__auto__);
});
ui$book$exercise.cljs$core$IFn$_invoke$arity$variadic = ui$book$exercise__delegate;
return ui$book$exercise;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.q_a = (function() { 
var ui$book$q_a__delegate = function (args__5784__auto__){
var vec__28404 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28404,(0),null);
var children = cljs.core.nth.call(null,vec__28404,(1),null);
var open = tailrecursion.javelin.cell.call(null,false);
var button_text = tailrecursion.javelin.formula.call(null,((function (open,vec__28404,_,children){
return (function (G__28405){
return [cljs.core.str((cljs.core.truth_(G__28405)?"Hide":"Show")),cljs.core.str(" solution")].join('');
});})(open,vec__28404,_,children))
).call(null,open);
return tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (open,button_text,vec__28404,_,children){
return (function (){
return cljs.core.swap_BANG_.call(null,open,cljs.core.not);
});})(open,button_text,vec__28404,_,children))
,button_text),tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"solution",new cljs.core.Keyword(null,"toggle","toggle",1291842030),open], null),children));
};
var ui$book$q_a = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28406__i = 0, G__28406__a = new Array(arguments.length -  0);
while (G__28406__i < G__28406__a.length) {G__28406__a[G__28406__i] = arguments[G__28406__i + 0]; ++G__28406__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28406__a,0);
} 
return ui$book$q_a__delegate.call(this,args__5784__auto__);};
ui$book$q_a.cljs$lang$maxFixedArity = 0;
ui$book$q_a.cljs$lang$applyTo = (function (arglist__28407){
var args__5784__auto__ = cljs.core.seq(arglist__28407);
return ui$book$q_a__delegate(args__5784__auto__);
});
ui$book$q_a.cljs$core$IFn$_invoke$arity$variadic = ui$book$q_a__delegate;
return ui$book$q_a;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.fig = (function() { 
var ui$book$fig__delegate = function (args__5784__auto__){
var vec__28410 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28411 = cljs.core.nth.call(null,vec__28410,(0),null);
var map__28411__$1 = ((cljs.core.seq_QMARK_.call(null,map__28411))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var footer = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var _ = cljs.core.nth.call(null,vec__28410,(1),null);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var figr = (cljs.core.count.call(null,ui.book.get_figs.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_),ch)) + (1));
var link = [cljs.core.str("#!/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/ch/"),cljs.core.str(ch),cljs.core.str("/fig/"),cljs.core.str(figr),cljs.core.str("/")].join('');
var src = [cljs.core.str("img/"),cljs.core.str(clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"short-title","short-title",-1405732809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)))),cljs.core.str("/figure"),cljs.core.str(ch),cljs.core.str("_"),cljs.core.str(figr),cljs.core.str(".gif")].join('');
var this_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"footer","footer",1606445390),footer,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"link","link",-1769163468),link], null);
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (ch,figr,link,src,this_data,vec__28410,map__28411,map__28411__$1,footer,_){
return (function (p1__3261_SHARP_){
return cljs.core.assoc_in.call(null,p1__3261_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"fig","fig",-109728497),figr], null),this_data);
});})(ch,figr,link,src,this_data,vec__28410,map__28411,map__28411__$1,footer,_))
);

return tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"alt","alt",-3214426),"Figure 1.3"),tailrecursion.hoplon.p.call(null,tailrecursion.hoplon.b.call(null,[cljs.core.str("Figure "),cljs.core.str(ch),cljs.core.str("."),cljs.core.str(figr),cljs.core.str(": ")].join('')),footer));
};
var ui$book$fig = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28412__i = 0, G__28412__a = new Array(arguments.length -  0);
while (G__28412__i < G__28412__a.length) {G__28412__a[G__28412__i] = arguments[G__28412__i + 0]; ++G__28412__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28412__a,0);
} 
return ui$book$fig__delegate.call(this,args__5784__auto__);};
ui$book$fig.cljs$lang$maxFixedArity = 0;
ui$book$fig.cljs$lang$applyTo = (function (arglist__28413){
var args__5784__auto__ = cljs.core.seq(arglist__28413);
return ui$book$fig__delegate(args__5784__auto__);
});
ui$book$fig.cljs$core$IFn$_invoke$arity$variadic = ui$book$fig__delegate;
return ui$book$fig;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.image = (function() { 
var ui$book$image__delegate = function (args__5784__auto__){
var vec__28415 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28415,(0),null);
var kids = cljs.core.nth.call(null,vec__28415,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive"),attr,kids);
};
var ui$book$image = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28416__i = 0, G__28416__a = new Array(arguments.length -  0);
while (G__28416__i < G__28416__a.length) {G__28416__a[G__28416__i] = arguments[G__28416__i + 0]; ++G__28416__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28416__a,0);
} 
return ui$book$image__delegate.call(this,args__5784__auto__);};
ui$book$image.cljs$lang$maxFixedArity = 0;
ui$book$image.cljs$lang$applyTo = (function (arglist__28417){
var args__5784__auto__ = cljs.core.seq(arglist__28417);
return ui$book$image__delegate(args__5784__auto__);
});
ui$book$image.cljs$core$IFn$_invoke$arity$variadic = ui$book$image__delegate;
return ui$book$image;
})()
;
/**
 * @param {...*} var_args
 */
ui.book.footnote = (function() { 
var ui$book$footnote__delegate = function (args__5784__auto__){
var vec__28420 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28420,(0),null);
var kids = cljs.core.nth.call(null,vec__28420,(1),null);
var hidden = tailrecursion.javelin.cell.call(null,true);
var ch = cljs.core.count.call(null,ui.book.get_chapters.call(null,cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_)));
var ftn = (cljs.core.count.call(null,new cljs.core.Keyword(null,"footnote","footnote",-1569223153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ui.book._STAR_book_data_STAR_))) + (1));
var this_data = kids;
cljs.core.swap_BANG_.call(null,ui.book._STAR_book_data_STAR_,((function (hidden,ch,ftn,this_data,vec__28420,attr,kids){
return (function (p1__3262_SHARP_){
return cljs.core.assoc_in.call(null,p1__3262_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnote","footnote",-1569223153),ftn], null),this_data);
});})(hidden,ch,ftn,this_data,vec__28420,attr,kids))
);

return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"display:inline;",tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (hidden,ch,ftn,this_data,vec__28420,attr,kids){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden,cljs.core.not);
});})(hidden,ch,ftn,this_data,vec__28420,attr,kids))
,new cljs.core.Keyword(null,"style","style",-496642736),"color:#0000ff",tailrecursion.hoplon.sup.call(null,[cljs.core.str(ftn)].join(''))),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (hidden,ch,ftn,this_data,vec__28420,attr,kids){
return (function (G__28421){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__28421,new cljs.core.Keyword(null,"popover","popover",-1809582136),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),true], null);
});})(hidden,ch,ftn,this_data,vec__28420,attr,kids))
).call(null,hidden),cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"popover-content",new cljs.core.Keyword(null,"click","click",1912301393),((function (hidden,ch,ftn,this_data,vec__28420,attr,kids){
return (function (){
return cljs.core.reset_BANG_.call(null,hidden,true);
});})(hidden,ch,ftn,this_data,vec__28420,attr,kids))
),attr,kids)));
};
var ui$book$footnote = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28422__i = 0, G__28422__a = new Array(arguments.length -  0);
while (G__28422__i < G__28422__a.length) {G__28422__a[G__28422__i] = arguments[G__28422__i + 0]; ++G__28422__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28422__a,0);
} 
return ui$book$footnote__delegate.call(this,args__5784__auto__);};
ui$book$footnote.cljs$lang$maxFixedArity = 0;
ui$book$footnote.cljs$lang$applyTo = (function (arglist__28423){
var args__5784__auto__ = cljs.core.seq(arglist__28423);
return ui$book$footnote__delegate(args__5784__auto__);
});
ui$book$footnote.cljs$core$IFn$_invoke$arity$variadic = ui$book$footnote__delegate;
return ui$book$footnote;
})()
;
cljs.core._add_method.call(null,tailrecursion.hoplon.markdown.quoted_node,new cljs.core.Keyword(null,"double-angle","double-angle",-1539114060),(function (_,kids){
return ui.book.footnote.call(null,kids);
}));

//# sourceMappingURL=book.js.map