// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.toc_mobile');
goog.require('cljs.core');
goog.require('general.navbar');
goog.require('tailrecursion.hoplon');
goog.require('general.toc');
goog.require('tailrecursion.javelin');
goog.require('general.bootstrap');
goog.require('clojure.string');
/**
 * @param {...*} var_args
 */
general.toc_mobile.toc_link = (function() { 
var general$toc_mobile$toc_link__delegate = function (args__6627__auto__){
var vec__17293 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17294 = cljs.core.nth.call(null,vec__17293,(0),null);
var map__17294__$1 = ((((!((map__17294 == null)))?((((map__17294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17294):map__17294);
var link = cljs.core.get.call(null,map__17294__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17294__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17293,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula.call(null,((function (vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (G__17296,G__17297,G__17298){
return G__17296.call(null,G__17297,G__17298);
});})(vec__17293,map__17294,map__17294__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (G__17299,G__17300,G__17301){
return G__17299.call(null,G__17300,G__17301);
});})(scroll_link_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (G__17302,G__17303){
var or__5022__auto__ = G__17302;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__17303;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (G__17304){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__17304], null);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_))
).call(null,active_QMARK_),new cljs.core.Keyword(null,"click","click",1912301393),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (){
cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null);

return cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_))
,new cljs.core.Keyword(null,"hover","hover",-341141711),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_){
return (function (){
return cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17293,map__17294,map__17294__$1,link,title,_))
,new cljs.core.Keyword(null,"href","href",-793805698),link,title);
};
var general$toc_mobile$toc_link = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17305__i = 0, G__17305__a = new Array(arguments.length -  0);
while (G__17305__i < G__17305__a.length) {G__17305__a[G__17305__i] = arguments[G__17305__i + 0]; ++G__17305__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17305__a,0);
} 
return general$toc_mobile$toc_link__delegate.call(this,args__6627__auto__);};
general$toc_mobile$toc_link.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc_link.cljs$lang$applyTo = (function (arglist__17306){
var args__6627__auto__ = cljs.core.seq(arglist__17306);
return general$toc_mobile$toc_link__delegate(args__6627__auto__);
});
general$toc_mobile$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc_link__delegate;
return general$toc_mobile$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_ch = (function() { 
var general$toc_mobile$li_ch__delegate = function (args__6627__auto__){
var vec__17310 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17311 = cljs.core.nth.call(null,vec__17310,(0),null);
var map__17311__$1 = ((((!((map__17311 == null)))?((((map__17311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17311):map__17311);
var link = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17310,(1),null);
return tailrecursion.hoplon.li.call(null,general.toc_mobile.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc_mobile$li_ch = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17313__i = 0, G__17313__a = new Array(arguments.length -  0);
while (G__17313__i < G__17313__a.length) {G__17313__a[G__17313__i] = arguments[G__17313__i + 0]; ++G__17313__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17313__a,0);
} 
return general$toc_mobile$li_ch__delegate.call(this,args__6627__auto__);};
general$toc_mobile$li_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_ch.cljs$lang$applyTo = (function (arglist__17314){
var args__6627__auto__ = cljs.core.seq(arglist__17314);
return general$toc_mobile$li_ch__delegate(args__6627__auto__);
});
general$toc_mobile$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_ch__delegate;
return general$toc_mobile$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sect = (function() { 
var general$toc_mobile$li_sect__delegate = function (args__6627__auto__){
var vec__17318 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17319 = cljs.core.nth.call(null,vec__17318,(0),null);
var map__17319__$1 = ((((!((map__17319 == null)))?((((map__17319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17319):map__17319);
var link = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17318,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"margin-left:0px; font-size:13px;",general.toc_mobile.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc_mobile$li_sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17321__i = 0, G__17321__a = new Array(arguments.length -  0);
while (G__17321__i < G__17321__a.length) {G__17321__a[G__17321__i] = arguments[G__17321__i + 0]; ++G__17321__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17321__a,0);
} 
return general$toc_mobile$li_sect__delegate.call(this,args__6627__auto__);};
general$toc_mobile$li_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sect.cljs$lang$applyTo = (function (arglist__17322){
var args__6627__auto__ = cljs.core.seq(arglist__17322);
return general$toc_mobile$li_sect__delegate(args__6627__auto__);
});
general$toc_mobile$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sect__delegate;
return general$toc_mobile$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.li_sub = (function() { 
var general$toc_mobile$li_sub__delegate = function (args__6627__auto__){
var vec__17326 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17327 = cljs.core.nth.call(null,vec__17326,(0),null);
var map__17327__$1 = ((((!((map__17327 == null)))?((((map__17327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17327):map__17327);
var link = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17326,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"font-size:12px;",general.toc_mobile.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc_mobile$li_sub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17329__i = 0, G__17329__a = new Array(arguments.length -  0);
while (G__17329__i < G__17329__a.length) {G__17329__a[G__17329__i] = arguments[G__17329__i + 0]; ++G__17329__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17329__a,0);
} 
return general$toc_mobile$li_sub__delegate.call(this,args__6627__auto__);};
general$toc_mobile$li_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$li_sub.cljs$lang$applyTo = (function (arglist__17330){
var args__6627__auto__ = cljs.core.seq(arglist__17330);
return general$toc_mobile$li_sub__delegate(args__6627__auto__);
});
general$toc_mobile$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$li_sub__delegate;
return general$toc_mobile$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ch = (function() { 
var general$toc_mobile$ul_ch__delegate = function (args__6627__auto__){
var vec__17332 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__17332,(0),null);
var kids = cljs.core.nth.call(null,vec__17332,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"),kids);
};
var general$toc_mobile$ul_ch = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17333__i = 0, G__17333__a = new Array(arguments.length -  0);
while (G__17333__i < G__17333__a.length) {G__17333__a[G__17333__i] = arguments[G__17333__i + 0]; ++G__17333__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17333__a,0);
} 
return general$toc_mobile$ul_ch__delegate.call(this,args__6627__auto__);};
general$toc_mobile$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ch.cljs$lang$applyTo = (function (arglist__17334){
var args__6627__auto__ = cljs.core.seq(arglist__17334);
return general$toc_mobile$ul_ch__delegate(args__6627__auto__);
});
general$toc_mobile$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ch__delegate;
return general$toc_mobile$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sect = (function() { 
var general$toc_mobile$ul_sect__delegate = function (args__6627__auto__){
var vec__17342 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17343 = cljs.core.nth.call(null,vec__17342,(0),null);
var map__17343__$1 = ((((!((map__17343 == null)))?((((map__17343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17343):map__17343);
var ch = cljs.core.get.call(null,map__17343__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var kids = cljs.core.nth.call(null,vec__17342,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17342,map__17343,map__17343__$1,ch,kids){
return (function (G__17346,G__17348,G__17345,G__17347){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17345.call(null,G__17346.call(null,G__17347,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17348)))], null);
});})(vec__17342,map__17343,map__17343__$1,ch,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,cljs.core.not,ch)),kids);
};
var general$toc_mobile$ul_sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17349__i = 0, G__17349__a = new Array(arguments.length -  0);
while (G__17349__i < G__17349__a.length) {G__17349__a[G__17349__i] = arguments[G__17349__i + 0]; ++G__17349__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17349__a,0);
} 
return general$toc_mobile$ul_sect__delegate.call(this,args__6627__auto__);};
general$toc_mobile$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sect.cljs$lang$applyTo = (function (arglist__17350){
var args__6627__auto__ = cljs.core.seq(arglist__17350);
return general$toc_mobile$ul_sect__delegate(args__6627__auto__);
});
general$toc_mobile$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sect__delegate;
return general$toc_mobile$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_sub = (function() { 
var general$toc_mobile$ul_sub__delegate = function (args__6627__auto__){
var vec__17359 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17360 = cljs.core.nth.call(null,vec__17359,(0),null);
var map__17360__$1 = ((((!((map__17360 == null)))?((((map__17360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17360):map__17360);
var ch = cljs.core.get.call(null,map__17360__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__17360__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var kids = cljs.core.nth.call(null,vec__17359,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17359,map__17360,map__17360__$1,ch,sect,kids){
return (function (G__17363,G__17364,G__17366,G__17362,G__17365){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17362.call(null,(G__17363.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17364),G__17365)) && (G__17363.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__17364),G__17366)))], null);
});})(vec__17359,map__17360,map__17360__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,cljs.core.not,ch)),kids);
};
var general$toc_mobile$ul_sub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17367__i = 0, G__17367__a = new Array(arguments.length -  0);
while (G__17367__i < G__17367__a.length) {G__17367__a[G__17367__i] = arguments[G__17367__i + 0]; ++G__17367__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17367__a,0);
} 
return general$toc_mobile$ul_sub__delegate.call(this,args__6627__auto__);};
general$toc_mobile$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_sub.cljs$lang$applyTo = (function (arglist__17368){
var args__6627__auto__ = cljs.core.seq(arglist__17368);
return general$toc_mobile$ul_sub__delegate(args__6627__auto__);
});
general$toc_mobile$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_sub__delegate;
return general$toc_mobile$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.ul_ssub = (function() { 
var general$toc_mobile$ul_ssub__delegate = function (args__6627__auto__){
var vec__17378 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17379 = cljs.core.nth.call(null,vec__17378,(0),null);
var map__17379__$1 = ((((!((map__17379 == null)))?((((map__17379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17379):map__17379);
var ch = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var sub = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var kids = cljs.core.nth.call(null,vec__17378,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left: 10px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17378,map__17379,map__17379__$1,ch,sect,sub,kids){
return (function (G__17382,G__17383,G__17385,G__17386,G__17381,G__17384){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17381.call(null,(G__17382.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17383),G__17384)) && (G__17382.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__17383),G__17385)) && (G__17382.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__17383),G__17386)))], null);
});})(vec__17378,map__17379,map__17379__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,general.toc.scroll_map,sect,sub,cljs.core.not,ch)),kids);
};
var general$toc_mobile$ul_ssub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17387__i = 0, G__17387__a = new Array(arguments.length -  0);
while (G__17387__i < G__17387__a.length) {G__17387__a[G__17387__i] = arguments[G__17387__i + 0]; ++G__17387__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17387__a,0);
} 
return general$toc_mobile$ul_ssub__delegate.call(this,args__6627__auto__);};
general$toc_mobile$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc_mobile$ul_ssub.cljs$lang$applyTo = (function (arglist__17388){
var args__6627__auto__ = cljs.core.seq(arglist__17388);
return general$toc_mobile$ul_ssub__delegate(args__6627__auto__);
});
general$toc_mobile$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$ul_ssub__delegate;
return general$toc_mobile$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc_mobile.toc = (function() { 
var general$toc_mobile$toc__delegate = function (args__6627__auto__){
var vec__17450 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17451 = cljs.core.nth.call(null,vec__17450,(0),null);
var map__17451__$1 = ((((!((map__17451 == null)))?((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17451):map__17451);
var data = cljs.core.get.call(null,map__17451__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _ = cljs.core.nth.call(null,vec__17450,(1),null);
var vec__17453 = new cljs.core.Keyword(null,"toc-hierarchy","toc-hierarchy",-863557290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var one = cljs.core.nth.call(null,vec__17453,(0),null);
var two = cljs.core.nth.call(null,vec__17453,(1),null);
var three = cljs.core.nth.call(null,vec__17453,(2),null);
var four = cljs.core.nth.call(null,vec__17453,(3),null);
return general.bootstrap.row.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17454,G__17455){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible-xs","visible-xs",-1594593856),true,new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),true,new cljs.core.Keyword(null,"collapse","collapse",-1218136136),true,new cljs.core.Keyword(null,"in","in",-1531184865),G__17454.call(null,G__17455,"toc")], null);
});})(vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,cljs.core._EQ_,general.navbar.nav_active),(function (){var all_chapters = tailrecursion.javelin.formula.call(null,((function (vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17457,G__17458,G__17456){
return G__17456.call(null,G__17457,G__17458);
});})(vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula.call(null,((function (all_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17461,G__17459,G__17460){
return G__17459.call(null,(1),(G__17460.call(null,G__17461) + (1)));
});})(all_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc_mobile.ul_ch.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_chapters,null,((function (all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (item__6638__auto__){
var vec__17462 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,item__6638__auto__));
var ch = cljs.core.nth.call(null,vec__17462,(0),null);
var title = tailrecursion.javelin.formula.call(null,((function (vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17464,G__17465,G__17463){
return G__17463.call(null,G__17464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17465,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula.call(null,((function (title,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17467,G__17468,G__17466){
return G__17466.call(null,G__17467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17468,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula.call(null,((function (title,link,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17470,G__17471,G__17472,G__17469){
return G__17469.call(null,G__17470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17471,G__17472], null));
});})(title,link,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17475,G__17473,G__17474){
return G__17473.call(null,(1),(G__17474.call(null,G__17475) + (1)));
});})(title,link,all_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc_mobile.li_ch.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title),general.toc_mobile.ul_sect.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_sects,null,((function (title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (item__6638__auto____$1){
var vec__17476 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,item__6638__auto____$1));
var sect = cljs.core.nth.call(null,vec__17476,(0),null);
var title__$1 = tailrecursion.javelin.formula.call(null,((function (vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17478,G__17479,G__17477){
return G__17477.call(null,G__17478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17479,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula.call(null,((function (title__$1,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17481,G__17482,G__17480){
return G__17480.call(null,G__17481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17482,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$1,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17484,G__17485,G__17486,G__17483){
return G__17483.call(null,G__17484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17485,G__17486], null));
});})(title__$1,link__$1,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17487,G__17489,G__17488){
return G__17487.call(null,(1),(G__17488.call(null,G__17489) + (1)));
});})(title__$1,link__$1,all_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc_mobile.li_sect.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$1,new cljs.core.Keyword(null,"title","title",636505583),title__$1),general.toc_mobile.ul_sub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_subs,null,((function (title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (item__6638__auto____$2){
var vec__17490 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,item__6638__auto____$2));
var sub = cljs.core.nth.call(null,vec__17490,(0),null);
var title__$2 = tailrecursion.javelin.formula.call(null,((function (vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17493,G__17492,G__17491){
return G__17491.call(null,G__17492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17493,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula.call(null,((function (title__$2,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17496,G__17495,G__17494){
return G__17494.call(null,G__17495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17496,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$2,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17499,G__17498,G__17500,G__17497){
return G__17497.call(null,G__17498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17499,G__17500], null));
});})(title__$2,link__$2,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17501,G__17503,G__17502){
return G__17501.call(null,(1),(G__17502.call(null,G__17503) + (1)));
});})(title__$2,link__$2,all_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc_mobile.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$2,new cljs.core.Keyword(null,"title","title",636505583),title__$2),general.toc_mobile.ul_ssub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_ssub,null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (item__6638__auto____$3){
var vec__17504 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,item__6638__auto____$3));
var ssub = cljs.core.nth.call(null,vec__17504,(0),null);
var title__$3 = tailrecursion.javelin.formula.call(null,((function (vec__17504,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17507,G__17506,G__17505){
return G__17505.call(null,G__17506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17507,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17504,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula.call(null,((function (title__$3,vec__17504,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_){
return (function (G__17510,G__17509,G__17508){
return G__17508.call(null,G__17509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17510,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$3,vec__17504,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc_mobile.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$3,new cljs.core.Keyword(null,"title","title",636505583),title__$3);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__17490,sub,title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
)));
});})(title__$1,link__$1,all_subs,num_subs,vec__17476,sect,title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
)));
});})(title,link,all_sects,num_sects,vec__17462,ch,all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
)));
});})(all_chapters,num_chapters,vec__17453,one,two,three,four,vec__17450,map__17451,map__17451__$1,data,_))
));
})()));
};
var general$toc_mobile$toc = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17511__i = 0, G__17511__a = new Array(arguments.length -  0);
while (G__17511__i < G__17511__a.length) {G__17511__a[G__17511__i] = arguments[G__17511__i + 0]; ++G__17511__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17511__a,0);
} 
return general$toc_mobile$toc__delegate.call(this,args__6627__auto__);};
general$toc_mobile$toc.cljs$lang$maxFixedArity = 0;
general$toc_mobile$toc.cljs$lang$applyTo = (function (arglist__17512){
var args__6627__auto__ = cljs.core.seq(arglist__17512);
return general$toc_mobile$toc__delegate(args__6627__auto__);
});
general$toc_mobile$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc_mobile$toc__delegate;
return general$toc_mobile$toc;
})()
;

//# sourceMappingURL=toc_mobile.js.map