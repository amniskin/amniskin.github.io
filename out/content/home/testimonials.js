// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.home.testimonials');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.testimonials.from = (function() { 
var content$home$testimonials$from__delegate = function (args__5784__auto__){
var vec__28948 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28949 = cljs.core.nth.call(null,vec__28948,(0),null);
var map__28949__$1 = ((cljs.core.seq_QMARK_.call(null,map__28949))?cljs.core.apply.call(null,cljs.core.hash_map,map__28949):map__28949);
var name = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var place = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"place","place",-819689466));
var date = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var _ = cljs.core.nth.call(null,vec__28948,(1),null);
return tailrecursion.hoplon.p.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"small",[cljs.core.str("- "),cljs.core.str(name),cljs.core.str(", "),cljs.core.str(place),cljs.core.str(" "),cljs.core.str(date)].join(''));
};
var content$home$testimonials$from = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28950__i = 0, G__28950__a = new Array(arguments.length -  0);
while (G__28950__i < G__28950__a.length) {G__28950__a[G__28950__i] = arguments[G__28950__i + 0]; ++G__28950__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28950__a,0);
} 
return content$home$testimonials$from__delegate.call(this,args__5784__auto__);};
content$home$testimonials$from.cljs$lang$maxFixedArity = 0;
content$home$testimonials$from.cljs$lang$applyTo = (function (arglist__28951){
var args__5784__auto__ = cljs.core.seq(arglist__28951);
return content$home$testimonials$from__delegate(args__5784__auto__);
});
content$home$testimonials$from.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$from__delegate;
return content$home$testimonials$from;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.heading = (function() { 
var content$home$testimonials$heading__delegate = function (args__5784__auto__){
var vec__28953 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28953,(0),null);
var kids = cljs.core.nth.call(null,vec__28953,(1),null);
return tailrecursion.hoplon.h3.call(null,kids);
};
var content$home$testimonials$heading = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28954__i = 0, G__28954__a = new Array(arguments.length -  0);
while (G__28954__i < G__28954__a.length) {G__28954__a[G__28954__i] = arguments[G__28954__i + 0]; ++G__28954__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28954__a,0);
} 
return content$home$testimonials$heading__delegate.call(this,args__5784__auto__);};
content$home$testimonials$heading.cljs$lang$maxFixedArity = 0;
content$home$testimonials$heading.cljs$lang$applyTo = (function (arglist__28955){
var args__5784__auto__ = cljs.core.seq(arglist__28955);
return content$home$testimonials$heading__delegate(args__5784__auto__);
});
content$home$testimonials$heading.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$heading__delegate;
return content$home$testimonials$heading;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.review = (function() { 
var content$home$testimonials$review__delegate = function (args__5784__auto__){
var vec__28957 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28957,(0),null);
var kids = cljs.core.nth.call(null,vec__28957,(1),null);
return tailrecursion.hoplon.p.call(null,kids);
};
var content$home$testimonials$review = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28958__i = 0, G__28958__a = new Array(arguments.length -  0);
while (G__28958__i < G__28958__a.length) {G__28958__a[G__28958__i] = arguments[G__28958__i + 0]; ++G__28958__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28958__a,0);
} 
return content$home$testimonials$review__delegate.call(this,args__5784__auto__);};
content$home$testimonials$review.cljs$lang$maxFixedArity = 0;
content$home$testimonials$review.cljs$lang$applyTo = (function (arglist__28959){
var args__5784__auto__ = cljs.core.seq(arglist__28959);
return content$home$testimonials$review__delegate(args__5784__auto__);
});
content$home$testimonials$review.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$review__delegate;
return content$home$testimonials$review;
})()
;
/**
 * @param {...*} var_args
 */
content.home.testimonials.content = (function() { 
var content$home$testimonials$content__delegate = function (args__5784__auto__){
var vec__28961 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__28961,(0),null);
var kids = cljs.core.nth.call(null,vec__28961,(1),null);
return ui.style.container.call(null,tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"text-align: center;","What my clients think of me."),ui.style.divider.call(null),ui.style.row.call(null,ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"Invaluable Asset"),content.home.testimonials.review.call(null,"Aaron has been an invaluable asset as a tutor to my nephew. He\n                is very patient, professional, and knowledgeable. He has been\n                able to identify what areas need to be addressed for the best\n                outcome. He is also teaching him study skills, note-taking, and\n                assisting him as a mentor. I feel very fortunate to have found\n                him."),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Sandra",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"12/02/2014")),ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"A Great Experience"),content.home.testimonials.review.call(null,"Working with Aaron has been a great experience. He is very\n           knowledgeable and explains hard to understand concepts very well. He\n           is a natural at teaching and a pleasure to work with. Highly\n           recommend!!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Jasmin",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"09/22/2014")),ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"Very Likeable and Competent Tutor"),content.home.testimonials.review.call(null,"My son was unsettled by the thought of having a tutor for his HS\n           Calculus course, but he needed some help. Aaron has such a laid back\n           personality that my son was able to focus on the lessons without\n           feeling stressed. Aaron is very knowledgeable and was able to help\n           my son pass his online course with an A!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Desiree",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, Fl",new cljs.core.Keyword(null,"date","date",-1463434462),"01/04/13"))),ui.style.row.call(null,ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"Extremely Helpful... One of the Best"),content.home.testimonials.review.call(null,"Aaron is one of the best calculus tutors I've met so far. He\n                helps you understand the methods and rules of math, and never\n                fails to miss a detail. His ways of teaching are extremely helpful\n                and I would definitely recommend him!"),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Abdulla",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"10/02/2014")),ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"Great tutor!!"),content.home.testimonials.review.call(null,"Aaron has tutored me for physics, and has done a great job so\n                far. He is really knowledgeable about the subject and explains\n                things thoroughly. I would recommend him to anyone who not only\n                wants to pass a class, but who wants to understand it. He also\n                really cares about the grades received and is flexible with his\n                tutoring times."),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Paulina",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"05/26/2012")),ui.style.content_bubble.call(null,content.home.testimonials.heading.call(null,"Best Tutor Ever!"),content.home.testimonials.review.call(null,"Mr. Aaron is a very very patient tutor. When my first lesson\n                was scheduled I was so nervous because the subject (math) was\n                very complicated but he made me feel comfortable. He not only\n                explained me the subject in a very clear way but showed me how\n                to solve all type of math problems. I can truly say that it was\n                the best experience I have ever had with a tutor. "),content.home.testimonials.from.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"Patricia",new cljs.core.Keyword(null,"place","place",-819689466),"Miami, FL",new cljs.core.Keyword(null,"date","date",-1463434462),"02/06/2012"))));
};
var content$home$testimonials$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28962__i = 0, G__28962__a = new Array(arguments.length -  0);
while (G__28962__i < G__28962__a.length) {G__28962__a[G__28962__i] = arguments[G__28962__i + 0]; ++G__28962__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28962__a,0);
} 
return content$home$testimonials$content__delegate.call(this,args__5784__auto__);};
content$home$testimonials$content.cljs$lang$maxFixedArity = 0;
content$home$testimonials$content.cljs$lang$applyTo = (function (arglist__28963){
var args__5784__auto__ = cljs.core.seq(arglist__28963);
return content$home$testimonials$content__delegate(args__5784__auto__);
});
content$home$testimonials$content.cljs$core$IFn$_invoke$arity$variadic = content$home$testimonials$content__delegate;
return content$home$testimonials$content;
})()
;

//# sourceMappingURL=testimonials.js.map