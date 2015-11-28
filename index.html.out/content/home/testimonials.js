// Compiled by ClojureScript 1.7.48 {}
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
var content$home$testimonials$from__delegate = function (args__6627__auto__){
var vec__8423 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__8424 = cljs.core.nth.call(null,vec__8423,(0),null);
var map__8424__$1 = ((((!((map__8424 == null)))?((((map__8424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8424):map__8424);
var name = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var place = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"place","place",-819689466));
var date = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var _ = cljs.core.nth.call(null,vec__8423,(1),null);
return tailrecursion.hoplon.p.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"small",[cljs.core.str("- "),cljs.core.str(name),cljs.core.str(", "),cljs.core.str(place),cljs.core.str(" "),cljs.core.str(date)].join(''));
};
var content$home$testimonials$from = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__8426__i = 0, G__8426__a = new Array(arguments.length -  0);
while (G__8426__i < G__8426__a.length) {G__8426__a[G__8426__i] = arguments[G__8426__i + 0]; ++G__8426__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__8426__a,0);
} 
return content$home$testimonials$from__delegate.call(this,args__6627__auto__);};
content$home$testimonials$from.cljs$lang$maxFixedArity = 0;
content$home$testimonials$from.cljs$lang$applyTo = (function (arglist__8427){
var args__6627__auto__ = cljs.core.seq(arglist__8427);
return content$home$testimonials$from__delegate(args__6627__auto__);
});
content$home$testimonials$from.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$from__delegate;
return content$home$testimonials$from;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.heading = (function() { 
var content$home$testimonials$heading__delegate = function (args__6627__auto__){
var vec__8429 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__8429,(0),null);
var kids = cljs.core.nth.call(null,vec__8429,(1),null);
return tailrecursion.hoplon.h3.call(null,kids);
};
var content$home$testimonials$heading = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__8430__i = 0, G__8430__a = new Array(arguments.length -  0);
while (G__8430__i < G__8430__a.length) {G__8430__a[G__8430__i] = arguments[G__8430__i + 0]; ++G__8430__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__8430__a,0);
} 
return content$home$testimonials$heading__delegate.call(this,args__6627__auto__);};
content$home$testimonials$heading.cljs$lang$maxFixedArity = 0;
content$home$testimonials$heading.cljs$lang$applyTo = (function (arglist__8431){
var args__6627__auto__ = cljs.core.seq(arglist__8431);
return content$home$testimonials$heading__delegate(args__6627__auto__);
});
content$home$testimonials$heading.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$heading__delegate;
return content$home$testimonials$heading;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.review = (function() { 
var content$home$testimonials$review__delegate = function (args__6627__auto__){
var vec__8433 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__8433,(0),null);
var kids = cljs.core.nth.call(null,vec__8433,(1),null);
return tailrecursion.hoplon.p.call(null,kids);
};
var content$home$testimonials$review = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__8434__i = 0, G__8434__a = new Array(arguments.length -  0);
while (G__8434__i < G__8434__a.length) {G__8434__a[G__8434__i] = arguments[G__8434__i + 0]; ++G__8434__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__8434__a,0);
} 
return content$home$testimonials$review__delegate.call(this,args__6627__auto__);};
content$home$testimonials$review.cljs$lang$maxFixedArity = 0;
content$home$testimonials$review.cljs$lang$applyTo = (function (arglist__8435){
var args__6627__auto__ = cljs.core.seq(arglist__8435);
return content$home$testimonials$review__delegate(args__6627__auto__);
});
content$home$testimonials$review.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$review__delegate;
return content$home$testimonials$review;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.content = (function() { 
var content$home$testimonials$content__delegate = function (args__6627__auto__){
var vec__8437 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__8437,(0),null);
var kids = cljs.core.nth.call(null,vec__8437,(1),null);
return general.bootstrap.container.call(null,tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"text-align: center;","What my clients think of me."),general.sections.divider.call(null),general.bootstrap.row.call(null,general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"Invaluable Asset"),content.home.testimonials.review.call(null,"Aaron has been an invaluable asset as a tutor to my nephew. He\n                is very patient, professional, and knowledgeable. He has been\n                able to identify what areas need to be addressed for the best\n                outcome. He is also teaching him study skills, note-taking, and\n                assisting him as a mentor. I feel very fortunate to have found\n                him."),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Sandra",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"12/02/2014")),general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"A Great Experience"),content.home.testimonials.review.call(null,"Working with Aaron has been a great experience. He is very\n           knowledgeable and explains hard to understand concepts very well. He\n           is a natural at teaching and a pleasure to work with. Highly\n           recommend!!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Jasmin",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"09/22/2014")),general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"Very Likeable and Competent Tutor"),content.home.testimonials.review.call(null,"My son was unsettled by the thought of having a tutor for his HS\n           Calculus course, but he needed some help. Aaron has such a laid back\n           personality that my son was able to focus on the lessons without\n           feeling stressed. Aaron is very knowledgeable and was able to help\n           my son pass his online course with an A!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Desiree",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"01/04/13"))),general.bootstrap.row.call(null,general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"Extremely Helpful... One of the Best"),content.home.testimonials.review.call(null,"Aaron is one of the best calculus tutors I've met so far. He\n                helps you understand the methods and rules of math, and never\n                fails to miss a detail. His ways of teaching are extremely helpful\n                and I would definitely recommend him!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Abdulla",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"10/02/2014")),general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"Great tutor!!"),content.home.testimonials.review.call(null,"Aaron has tutored me for physics, and has done a great job so\n                far. He is really knowledgeable about the subject and explains\n                things thoroughly. I would recommend him to anyone who not only\n                wants to pass a class, but who wants to understand it. He also\n                really cares about the grades received and is flexible with his\n                tutoring times."),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Paulina",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"05/26/2012")),general.sections.bubble.call(null,content.home.testimonials.heading.call(null,"Best Tutor Ever!"),content.home.testimonials.review.call(null,"Mr. Aaron is a very very patient tutor. When my first lesson\n                was scheduled I was so nervous because the subject (math) was\n                very complicated but he made me feel comfortable. He not only\n                explained me the subject in a very clear way but showed me how\n                to solve all type of math problems. I can truly say that it was\n                the best experience I have ever had with a tutor. "),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Patricia",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"02/06/2012"))));
};
var content$home$testimonials$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__8438__i = 0, G__8438__a = new Array(arguments.length -  0);
while (G__8438__i < G__8438__a.length) {G__8438__a[G__8438__i] = arguments[G__8438__i + 0]; ++G__8438__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__8438__a,0);
} 
return content$home$testimonials$content__delegate.call(this,args__6627__auto__);};
content$home$testimonials$content.cljs$lang$maxFixedArity = 0;
content$home$testimonials$content.cljs$lang$applyTo = (function (arglist__8439){
var args__6627__auto__ = cljs.core.seq(arglist__8439);
return content$home$testimonials$content__delegate(args__6627__auto__);
});
content$home$testimonials$content.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$content__delegate;
return content$home$testimonials$content;
})()
;

//# sourceMappingURL=testimonials.js.map