// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('content.home.testimonials');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.testimonials.from = (function() { 
var content$home$testimonials$from__delegate = function (args__10403__auto__){
var vec__160908 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var map__160909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160908,(0),null);
var map__160909__$1 = ((cljs.core.seq_QMARK_(map__160909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160909):map__160909);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160909__$1,cljs.core.constant$keyword$name);
var place = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160909__$1,cljs.core.constant$keyword$place);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160909__$1,cljs.core.constant$keyword$date);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160908,(1),null);
var G__160910 = cljs.core.constant$keyword$class;
var G__160911 = "small";
var G__160912 = [cljs.core.str("- "),cljs.core.str(name),cljs.core.str(", "),cljs.core.str(place),cljs.core.str(" "),cljs.core.str(date)].join('');
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(G__160910,G__160911,G__160912) : tailrecursion.hoplon.p.call(null,G__160910,G__160911,G__160912));
};
var content$home$testimonials$from = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160913__i = 0, G__160913__a = new Array(arguments.length -  0);
while (G__160913__i < G__160913__a.length) {G__160913__a[G__160913__i] = arguments[G__160913__i + 0]; ++G__160913__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160913__a,0);
} 
return content$home$testimonials$from__delegate.call(this,args__10403__auto__);};
content$home$testimonials$from.cljs$lang$maxFixedArity = 0;
content$home$testimonials$from.cljs$lang$applyTo = (function (arglist__160914){
var args__10403__auto__ = cljs.core.seq(arglist__160914);
return content$home$testimonials$from__delegate(args__10403__auto__);
});
content$home$testimonials$from.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$from__delegate;
return content$home$testimonials$from;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.heading = (function() { 
var content$home$testimonials$heading__delegate = function (args__10403__auto__){
var vec__160917 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160917,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160917,(1),null);
var G__160918 = kids;
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(G__160918) : tailrecursion.hoplon.h3.call(null,G__160918));
};
var content$home$testimonials$heading = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160919__i = 0, G__160919__a = new Array(arguments.length -  0);
while (G__160919__i < G__160919__a.length) {G__160919__a[G__160919__i] = arguments[G__160919__i + 0]; ++G__160919__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160919__a,0);
} 
return content$home$testimonials$heading__delegate.call(this,args__10403__auto__);};
content$home$testimonials$heading.cljs$lang$maxFixedArity = 0;
content$home$testimonials$heading.cljs$lang$applyTo = (function (arglist__160920){
var args__10403__auto__ = cljs.core.seq(arglist__160920);
return content$home$testimonials$heading__delegate(args__10403__auto__);
});
content$home$testimonials$heading.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$heading__delegate;
return content$home$testimonials$heading;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.review = (function() { 
var content$home$testimonials$review__delegate = function (args__10403__auto__){
var vec__160923 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160923,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160923,(1),null);
var G__160924 = kids;
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__160924) : tailrecursion.hoplon.p.call(null,G__160924));
};
var content$home$testimonials$review = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160925__i = 0, G__160925__a = new Array(arguments.length -  0);
while (G__160925__i < G__160925__a.length) {G__160925__a[G__160925__i] = arguments[G__160925__i + 0]; ++G__160925__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160925__a,0);
} 
return content$home$testimonials$review__delegate.call(this,args__10403__auto__);};
content$home$testimonials$review.cljs$lang$maxFixedArity = 0;
content$home$testimonials$review.cljs$lang$applyTo = (function (arglist__160926){
var args__10403__auto__ = cljs.core.seq(arglist__160926);
return content$home$testimonials$review__delegate(args__10403__auto__);
});
content$home$testimonials$review.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$review__delegate;
return content$home$testimonials$review;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.content = (function() { 
var content$home$testimonials$content__delegate = function (args__10403__auto__){
var vec__160931 = tailrecursion.hoplon.parse_args(args__10403__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160931,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160931,(1),null);
return ui.style.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__160932 = cljs.core.constant$keyword$style;
var G__160933 = "text-align: center;";
var G__160934 = "What my clients think of me.";
return (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(G__160932,G__160933,G__160934) : tailrecursion.hoplon.h1.call(null,G__160932,G__160933,G__160934));
})(),ui.style.divider(),ui.style.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invaluable Asset"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron has been an invaluable asset as a tutor to my nephew. He\n                is very patient, professional, and knowledgeable. He has been\n                able to identify what areas need to be addressed for the best\n                outcome. He is also teaching him study skills, note-taking, and\n                assisting him as a mentor. I feel very fortunate to have found\n                him."], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Sandra",cljs.core.constant$keyword$place,"Miami, Fl",cljs.core.constant$keyword$date,"12/02/2014"], 0))], 0)),ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["A Great Experience"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Working with Aaron has been a great experience. He is very\n           knowledgeable and explains hard to understand concepts very well. He\n           is a natural at teaching and a pleasure to work with. Highly\n           recommend!!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Jasmin",cljs.core.constant$keyword$place,"Miami, Fl",cljs.core.constant$keyword$date,"09/22/2014"], 0))], 0)),ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Very Likeable and Competent Tutor"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["My son was unsettled by the thought of having a tutor for his HS\n           Calculus course, but he needed some help. Aaron has such a laid back\n           personality that my son was able to focus on the lessons without\n           feeling stressed. Aaron is very knowledgeable and was able to help\n           my son pass his online course with an A!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Desiree",cljs.core.constant$keyword$place,"Miami, Fl",cljs.core.constant$keyword$date,"01/04/13"], 0))], 0))], 0)),ui.style.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Extremely Helpful... One of the Best"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron is one of the best calculus tutors I've met so far. He\n                helps you understand the methods and rules of math, and never\n                fails to miss a detail. His ways of teaching are extremely helpful\n                and I would definitely recommend him!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Abdulla",cljs.core.constant$keyword$place,"Miami, FL",cljs.core.constant$keyword$date,"10/02/2014"], 0))], 0)),ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Great tutor!!"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron has tutored me for physics, and has done a great job so\n                far. He is really knowledgeable about the subject and explains\n                things thoroughly. I would recommend him to anyone who not only\n                wants to pass a class, but who wants to understand it. He also\n                really cares about the grades received and is flexible with his\n                tutoring times."], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Paulina",cljs.core.constant$keyword$place,"Miami, FL",cljs.core.constant$keyword$date,"05/26/2012"], 0))], 0)),ui.style.content_bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Best Tutor Ever!"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Mr. Aaron is a very very patient tutor. When my first lesson\n                was scheduled I was so nervous because the subject (math) was\n                very complicated but he made me feel comfortable. He not only\n                explained me the subject in a very clear way but showed me how\n                to solve all type of math problems. I can truly say that it was\n                the best experience I have ever had with a tutor. "], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,"Patricia",cljs.core.constant$keyword$place,"Miami, FL",cljs.core.constant$keyword$date,"02/06/2012"], 0))], 0))], 0))], 0));
};
var content$home$testimonials$content = function (var_args){
var args__10403__auto__ = null;
if (arguments.length > 0) {
var G__160935__i = 0, G__160935__a = new Array(arguments.length -  0);
while (G__160935__i < G__160935__a.length) {G__160935__a[G__160935__i] = arguments[G__160935__i + 0]; ++G__160935__i;}
  args__10403__auto__ = new cljs.core.IndexedSeq(G__160935__a,0);
} 
return content$home$testimonials$content__delegate.call(this,args__10403__auto__);};
content$home$testimonials$content.cljs$lang$maxFixedArity = 0;
content$home$testimonials$content.cljs$lang$applyTo = (function (arglist__160936){
var args__10403__auto__ = cljs.core.seq(arglist__160936);
return content$home$testimonials$content__delegate(args__10403__auto__);
});
content$home$testimonials$content.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$content__delegate;
return content$home$testimonials$content;
})()
;
