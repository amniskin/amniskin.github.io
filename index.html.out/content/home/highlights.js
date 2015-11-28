// Compiled by ClojureScript 1.7.48 {}
goog.provide('content.home.highlights');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.highlights.left_img_content = (function() { 
var content$home$highlights$left_img_content__delegate = function (args__6627__auto__){
var vec__14881 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14882 = cljs.core.nth.call(null,vec__14881,(0),null);
var map__14882__$1 = ((((!((map__14882 == null)))?((((map__14882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14882):map__14882);
var src = cljs.core.get.call(null,map__14882__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var kids = cljs.core.nth.call(null,vec__14881,(1),null);
return general.bootstrap.container.call(null,general.bootstrap.row.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"display: flex; align-items: center;",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4 col-sm-4 col-xs-12",new cljs.core.Keyword(null,"style","style",-496642736),"height:auto; display: block;",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"style","style",-496642736),"display:inline-block; width: auto; margin-left:auto; margin-right;auto;",new cljs.core.Keyword(null,"src","src",-1651076051),src)),general.bootstrap.well.call(null,cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8 col-sm-8 col-xs-12"),kids))));
};
var content$home$highlights$left_img_content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14884__i = 0, G__14884__a = new Array(arguments.length -  0);
while (G__14884__i < G__14884__a.length) {G__14884__a[G__14884__i] = arguments[G__14884__i + 0]; ++G__14884__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14884__a,0);
} 
return content$home$highlights$left_img_content__delegate.call(this,args__6627__auto__);};
content$home$highlights$left_img_content.cljs$lang$maxFixedArity = 0;
content$home$highlights$left_img_content.cljs$lang$applyTo = (function (arglist__14885){
var args__6627__auto__ = cljs.core.seq(arglist__14885);
return content$home$highlights$left_img_content__delegate(args__6627__auto__);
});
content$home$highlights$left_img_content.cljs$core$IFn$_invoke$arity$variadic = content$home$highlights$left_img_content__delegate;
return content$home$highlights$left_img_content;
})()
;
/**
 * @param {...*} var_args
 */
content.home.highlights.right_img_content = (function() { 
var content$home$highlights$right_img_content__delegate = function (args__6627__auto__){
var vec__14889 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14890 = cljs.core.nth.call(null,vec__14889,(0),null);
var map__14890__$1 = ((((!((map__14890 == null)))?((((map__14890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14890):map__14890);
var src = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var kids = cljs.core.nth.call(null,vec__14889,(1),null);
return general.bootstrap.container.call(null,general.bootstrap.row.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"display: flex; align-items: center;",general.bootstrap.well.call(null,cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8 col-sm-8 col-xs-12",new cljs.core.Keyword(null,"style","style",-496642736),"display: flex; align-items: center;"),kids)),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4 col-sm-4 col-xs-12",new cljs.core.Keyword(null,"style","style",-496642736),"height:auto; display: block;",tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive",new cljs.core.Keyword(null,"style","style",-496642736),"display:inline-block; width: auto; margin-left:auto; margin-right;auto;",new cljs.core.Keyword(null,"src","src",-1651076051),src))));
};
var content$home$highlights$right_img_content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14892__i = 0, G__14892__a = new Array(arguments.length -  0);
while (G__14892__i < G__14892__a.length) {G__14892__a[G__14892__i] = arguments[G__14892__i + 0]; ++G__14892__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14892__a,0);
} 
return content$home$highlights$right_img_content__delegate.call(this,args__6627__auto__);};
content$home$highlights$right_img_content.cljs$lang$maxFixedArity = 0;
content$home$highlights$right_img_content.cljs$lang$applyTo = (function (arglist__14893){
var args__6627__auto__ = cljs.core.seq(arglist__14893);
return content$home$highlights$right_img_content__delegate(args__6627__auto__);
});
content$home$highlights$right_img_content.cljs$core$IFn$_invoke$arity$variadic = content$home$highlights$right_img_content__delegate;
return content$home$highlights$right_img_content;
})()
;
/**
 * @param {...*} var_args
 */
content.home.highlights.content = (function() { 
var content$home$highlights$content__delegate = function (args__6627__auto__){
var vec__14895 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var attr = cljs.core.nth.call(null,vec__14895,(0),null);
var kids = cljs.core.nth.call(null,vec__14895,(1),null);
return general.bootstrap.container.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-12 col-sm-12",content.home.highlights.left_img_content.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/home/person-teaching.png",tailrecursion.hoplon.h2.call(null,"I am a Miami based tutor specializing in everything Science\n                                                            Technology Engineering and Mathematics (STEM).")),content.home.highlights.right_img_content.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/home/question-answer.png",tailrecursion.hoplon.h2.call(null,"You have questions; let me answer them. I've been tutoring since\n                                2009, and I've learned some things along the way.")),content.home.highlights.left_img_content.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/home/torture.png",tailrecursion.hoplon.h2.call(null,"Learning a new subject doesn't have to be torturous. I pride\n                               myself on my ability to show students the simplicity in their\n                               studies and build from there.")),content.home.highlights.right_img_content.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"img/home/study.png",tailrecursion.hoplon.h2.call(null,"Whatever the subject, if I can't tutor you I will do my best to\n                                find a suitable, reliable and knowledgeable tutor who can. Don't\n                                trust your education to just anybody."))));
};
var content$home$highlights$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14896__i = 0, G__14896__a = new Array(arguments.length -  0);
while (G__14896__i < G__14896__a.length) {G__14896__a[G__14896__i] = arguments[G__14896__i + 0]; ++G__14896__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14896__a,0);
} 
return content$home$highlights$content__delegate.call(this,args__6627__auto__);};
content$home$highlights$content.cljs$lang$maxFixedArity = 0;
content$home$highlights$content.cljs$lang$applyTo = (function (arglist__14897){
var args__6627__auto__ = cljs.core.seq(arglist__14897);
return content$home$highlights$content__delegate(args__6627__auto__);
});
content$home$highlights$content.cljs$core$IFn$_invoke$arity$variadic = content$home$highlights$content__delegate;
return content$home$highlights$content;
})()
;

//# sourceMappingURL=highlights.js.map