// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('content.home.testimonials');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('general.sections');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.testimonials.from = (function() { 
var content$home$testimonials$from__delegate = function (args__8262__auto__){
var vec__9688 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var map__9689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9688,(0),null);
var map__9689__$1 = ((((!((map__9689 == null)))?((((map__9689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9689):map__9689);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689__$1,cljs.core.cst$kw$name);
var place = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689__$1,cljs.core.cst$kw$place);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689__$1,cljs.core.cst$kw$date);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9688,(1),null);
var G__9691 = cljs.core.cst$kw$class;
var G__9692 = "small";
var G__9693 = [cljs.core.str("- "),cljs.core.str(name),cljs.core.str(", "),cljs.core.str(place),cljs.core.str(" "),cljs.core.str(date)].join('');
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(G__9691,G__9692,G__9693) : tailrecursion.hoplon.p.call(null,G__9691,G__9692,G__9693));
};
var content$home$testimonials$from = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9694__i = 0, G__9694__a = new Array(arguments.length -  0);
while (G__9694__i < G__9694__a.length) {G__9694__a[G__9694__i] = arguments[G__9694__i + 0]; ++G__9694__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9694__a,0);
} 
return content$home$testimonials$from__delegate.call(this,args__8262__auto__);};
content$home$testimonials$from.cljs$lang$maxFixedArity = 0;
content$home$testimonials$from.cljs$lang$applyTo = (function (arglist__9695){
var args__8262__auto__ = cljs.core.seq(arglist__9695);
return content$home$testimonials$from__delegate(args__8262__auto__);
});
content$home$testimonials$from.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$from__delegate;
return content$home$testimonials$from;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.heading = (function() { 
var content$home$testimonials$heading__delegate = function (args__8262__auto__){
var vec__9697 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,(1),null);
return (tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h3.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.h3.call(null,kids));
};
var content$home$testimonials$heading = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9698__i = 0, G__9698__a = new Array(arguments.length -  0);
while (G__9698__i < G__9698__a.length) {G__9698__a[G__9698__i] = arguments[G__9698__i + 0]; ++G__9698__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9698__a,0);
} 
return content$home$testimonials$heading__delegate.call(this,args__8262__auto__);};
content$home$testimonials$heading.cljs$lang$maxFixedArity = 0;
content$home$testimonials$heading.cljs$lang$applyTo = (function (arglist__9699){
var args__8262__auto__ = cljs.core.seq(arglist__9699);
return content$home$testimonials$heading__delegate(args__8262__auto__);
});
content$home$testimonials$heading.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$heading__delegate;
return content$home$testimonials$heading;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.review = (function() { 
var content$home$testimonials$review__delegate = function (args__8262__auto__){
var vec__9701 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9701,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9701,(1),null);
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(kids) : tailrecursion.hoplon.p.call(null,kids));
};
var content$home$testimonials$review = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9702__i = 0, G__9702__a = new Array(arguments.length -  0);
while (G__9702__i < G__9702__a.length) {G__9702__a[G__9702__i] = arguments[G__9702__i + 0]; ++G__9702__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9702__a,0);
} 
return content$home$testimonials$review__delegate.call(this,args__8262__auto__);};
content$home$testimonials$review.cljs$lang$maxFixedArity = 0;
content$home$testimonials$review.cljs$lang$applyTo = (function (arglist__9703){
var args__8262__auto__ = cljs.core.seq(arglist__9703);
return content$home$testimonials$review__delegate(args__8262__auto__);
});
content$home$testimonials$review.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$review__delegate;
return content$home$testimonials$review;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.content = (function() { 
var content$home$testimonials$content__delegate = function (args__8262__auto__){
var vec__9705 = tailrecursion.hoplon.parse_args(args__8262__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9705,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9705,(1),null);
return general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$style,"text-align: center;","What my clients think of me.") : tailrecursion.hoplon.h1.call(null,cljs.core.cst$kw$style,"text-align: center;","What my clients think of me.")),general.sections.divider(),general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invaluable Asset"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron has been an invaluable asset as a tutor to my nephew. He\n                is very patient, professional, and knowledgeable. He has been\n                able to identify what areas need to be addressed for the best\n                outcome. He is also teaching him study skills, note-taking, and\n                assisting him as a mentor. I feel very fortunate to have found\n                him."], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Sandra",cljs.core.cst$kw$place,"Miami, Fl",cljs.core.cst$kw$date,"12/02/2014"], 0))], 0)),general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["A Great Experience"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Working with Aaron has been a great experience. He is very\n           knowledgeable and explains hard to understand concepts very well. He\n           is a natural at teaching and a pleasure to work with. Highly\n           recommend!!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Jasmin",cljs.core.cst$kw$place,"Miami, Fl",cljs.core.cst$kw$date,"09/22/2014"], 0))], 0)),general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Very Likeable and Competent Tutor"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["My son was unsettled by the thought of having a tutor for his HS\n           Calculus course, but he needed some help. Aaron has such a laid back\n           personality that my son was able to focus on the lessons without\n           feeling stressed. Aaron is very knowledgeable and was able to help\n           my son pass his online course with an A!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Desiree",cljs.core.cst$kw$place,"Miami, Fl",cljs.core.cst$kw$date,"01/04/13"], 0))], 0))], 0)),general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Extremely Helpful... One of the Best"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron is one of the best calculus tutors I've met so far. He\n                helps you understand the methods and rules of math, and never\n                fails to miss a detail. His ways of teaching are extremely helpful\n                and I would definitely recommend him!"], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Abdulla",cljs.core.cst$kw$place,"Miami, FL",cljs.core.cst$kw$date,"10/02/2014"], 0))], 0)),general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Great tutor!!"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Aaron has tutored me for physics, and has done a great job so\n                far. He is really knowledgeable about the subject and explains\n                things thoroughly. I would recommend him to anyone who not only\n                wants to pass a class, but who wants to understand it. He also\n                really cares about the grades received and is flexible with his\n                tutoring times."], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Paulina",cljs.core.cst$kw$place,"Miami, FL",cljs.core.cst$kw$date,"05/26/2012"], 0))], 0)),general.sections.bubble.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([content.home.testimonials.heading.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Best Tutor Ever!"], 0)),content.home.testimonials.review.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Mr. Aaron is a very very patient tutor. When my first lesson\n                was scheduled I was so nervous because the subject (math) was\n                very complicated but he made me feel comfortable. He not only\n                explained me the subject in a very clear way but showed me how\n                to solve all type of math problems. I can truly say that it was\n                the best experience I have ever had with a tutor. "], 0)),content.home.testimonials.from.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$name,"Patricia",cljs.core.cst$kw$place,"Miami, FL",cljs.core.cst$kw$date,"02/06/2012"], 0))], 0))], 0))], 0));
};
var content$home$testimonials$content = function (var_args){
var args__8262__auto__ = null;
if (arguments.length > 0) {
var G__9706__i = 0, G__9706__a = new Array(arguments.length -  0);
while (G__9706__i < G__9706__a.length) {G__9706__a[G__9706__i] = arguments[G__9706__i + 0]; ++G__9706__i;}
  args__8262__auto__ = new cljs.core.IndexedSeq(G__9706__a,0);
} 
return content$home$testimonials$content__delegate.call(this,args__8262__auto__);};
content$home$testimonials$content.cljs$lang$maxFixedArity = 0;
content$home$testimonials$content.cljs$lang$applyTo = (function (arglist__9707){
var args__8262__auto__ = cljs.core.seq(arglist__9707);
return content$home$testimonials$content__delegate(args__8262__auto__);
});
content$home$testimonials$content.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$content__delegate;
return content$home$testimonials$content;
})()
;
