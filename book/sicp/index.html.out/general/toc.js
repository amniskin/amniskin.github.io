// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.toc');
goog.require('cljs.core');
goog.require('general.info');
goog.require('general.bootstrap');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.toc.scroll_location = tailrecursion.javelin.cell.call(null,null);
general.toc.scroll_map = tailrecursion.javelin.formula.call(null,(function (G__17518,G__17517,G__17523,G__17524,G__17520,G__17522,G__17521,G__17519){
return G__17517.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17518.call(null,(function (p__17515){
var vec__17516 = p__17515;
var k = cljs.core.nth.call(null,vec__17516,(0),null);
var v = cljs.core.nth.call(null,vec__17516,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17519.call(null,k),G__17520.call(null,v)], null);
}),G__17521.call(null,(2),G__17522.call(null,(1),G__17523.call(null,G__17524,/\//)))));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.toc.scroll_location,parseInt,cljs.core.drop,cljs.core.partition,cljs.core.keyword);
general.toc.hover_cell = tailrecursion.javelin.cell.call(null,null);
/**
 * @param {...*} var_args
 */
general.toc.toc_link = (function() { 
var general$toc$toc_link__delegate = function (args__6627__auto__){
var vec__17537 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17538 = cljs.core.nth.call(null,vec__17537,(0),null);
var map__17538__$1 = ((((!((map__17538 == null)))?((((map__17538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17538):map__17538);
var link = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17538__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17537,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula.call(null,((function (vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (G__17540,G__17541,G__17542){
return G__17540.call(null,G__17541,G__17542);
});})(vec__17537,map__17538,map__17538__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (G__17543,G__17544,G__17545){
return G__17543.call(null,G__17544,G__17545);
});})(scroll_link_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_))
).call(null,cljs.core._EQ_,general.toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (G__17546,G__17547){
var or__5022__auto__ = G__17546;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__17547;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (G__17548){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__17548], null);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_))
).call(null,active_QMARK_),new cljs.core.Keyword(null,"click","click",1912301393),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (){
cljs.core.reset_BANG_.call(null,general.toc.scroll_location,null);

return cljs.core.reset_BANG_.call(null,general.toc.scroll_location,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_))
,new cljs.core.Keyword(null,"hover","hover",-341141711),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_){
return (function (){
return cljs.core.reset_BANG_.call(null,general.toc.hover_cell,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__17537,map__17538,map__17538__$1,link,title,_))
,new cljs.core.Keyword(null,"href","href",-793805698),link,title);
};
var general$toc$toc_link = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17549__i = 0, G__17549__a = new Array(arguments.length -  0);
while (G__17549__i < G__17549__a.length) {G__17549__a[G__17549__i] = arguments[G__17549__i + 0]; ++G__17549__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17549__a,0);
} 
return general$toc$toc_link__delegate.call(this,args__6627__auto__);};
general$toc$toc_link.cljs$lang$maxFixedArity = 0;
general$toc$toc_link.cljs$lang$applyTo = (function (arglist__17550){
var args__6627__auto__ = cljs.core.seq(arglist__17550);
return general$toc$toc_link__delegate(args__6627__auto__);
});
general$toc$toc_link.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc_link__delegate;
return general$toc$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_ch = (function() { 
var general$toc$li_ch__delegate = function (args__6627__auto__){
var vec__17554 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17555 = cljs.core.nth.call(null,vec__17554,(0),null);
var map__17555__$1 = ((((!((map__17555 == null)))?((((map__17555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17555):map__17555);
var link = cljs.core.get.call(null,map__17555__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17555__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17554,(1),null);
return tailrecursion.hoplon.li.call(null,general.toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc$li_ch = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17557__i = 0, G__17557__a = new Array(arguments.length -  0);
while (G__17557__i < G__17557__a.length) {G__17557__a[G__17557__i] = arguments[G__17557__i + 0]; ++G__17557__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17557__a,0);
} 
return general$toc$li_ch__delegate.call(this,args__6627__auto__);};
general$toc$li_ch.cljs$lang$maxFixedArity = 0;
general$toc$li_ch.cljs$lang$applyTo = (function (arglist__17558){
var args__6627__auto__ = cljs.core.seq(arglist__17558);
return general$toc$li_ch__delegate(args__6627__auto__);
});
general$toc$li_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_ch__delegate;
return general$toc$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sect = (function() { 
var general$toc$li_sect__delegate = function (args__6627__auto__){
var vec__17562 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17563 = cljs.core.nth.call(null,vec__17562,(0),null);
var map__17563__$1 = ((((!((map__17563 == null)))?((((map__17563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17563):map__17563);
var link = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17562,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"margin-left:0px; font-size:13px;",general.toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc$li_sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17565__i = 0, G__17565__a = new Array(arguments.length -  0);
while (G__17565__i < G__17565__a.length) {G__17565__a[G__17565__i] = arguments[G__17565__i + 0]; ++G__17565__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17565__a,0);
} 
return general$toc$li_sect__delegate.call(this,args__6627__auto__);};
general$toc$li_sect.cljs$lang$maxFixedArity = 0;
general$toc$li_sect.cljs$lang$applyTo = (function (arglist__17566){
var args__6627__auto__ = cljs.core.seq(arglist__17566);
return general$toc$li_sect__delegate(args__6627__auto__);
});
general$toc$li_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sect__delegate;
return general$toc$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.li_sub = (function() { 
var general$toc$li_sub__delegate = function (args__6627__auto__){
var vec__17570 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17571 = cljs.core.nth.call(null,vec__17570,(0),null);
var map__17571__$1 = ((((!((map__17571 == null)))?((((map__17571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17571):map__17571);
var link = cljs.core.get.call(null,map__17571__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__17571__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__17570,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"font-size:12px;",general.toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var general$toc$li_sub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17573__i = 0, G__17573__a = new Array(arguments.length -  0);
while (G__17573__i < G__17573__a.length) {G__17573__a[G__17573__i] = arguments[G__17573__i + 0]; ++G__17573__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17573__a,0);
} 
return general$toc$li_sub__delegate.call(this,args__6627__auto__);};
general$toc$li_sub.cljs$lang$maxFixedArity = 0;
general$toc$li_sub.cljs$lang$applyTo = (function (arglist__17574){
var args__6627__auto__ = cljs.core.seq(arglist__17574);
return general$toc$li_sub__delegate(args__6627__auto__);
});
general$toc$li_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$li_sub__delegate;
return general$toc$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ch = (function() { 
var general$toc$ul_ch__delegate = function (args__6627__auto__){
var vec__17576 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__17576,(0),null);
var kids = cljs.core.nth.call(null,vec__17576,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"list-unstyled"),kids);
};
var general$toc$ul_ch = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17577__i = 0, G__17577__a = new Array(arguments.length -  0);
while (G__17577__i < G__17577__a.length) {G__17577__a[G__17577__i] = arguments[G__17577__i + 0]; ++G__17577__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17577__a,0);
} 
return general$toc$ul_ch__delegate.call(this,args__6627__auto__);};
general$toc$ul_ch.cljs$lang$maxFixedArity = 0;
general$toc$ul_ch.cljs$lang$applyTo = (function (arglist__17578){
var args__6627__auto__ = cljs.core.seq(arglist__17578);
return general$toc$ul_ch__delegate(args__6627__auto__);
});
general$toc$ul_ch.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ch__delegate;
return general$toc$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sect = (function() { 
var general$toc$ul_sect__delegate = function (args__6627__auto__){
var vec__17586 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17587 = cljs.core.nth.call(null,vec__17586,(0),null);
var map__17587__$1 = ((((!((map__17587 == null)))?((((map__17587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17587):map__17587);
var ch = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var kids = cljs.core.nth.call(null,vec__17586,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17586,map__17587,map__17587__$1,ch,kids){
return (function (G__17592,G__17590,G__17589,G__17591){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17589.call(null,G__17590.call(null,G__17591,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17592)))], null);
});})(vec__17586,map__17587,map__17587__$1,ch,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,cljs.core.not,ch)),kids);
};
var general$toc$ul_sect = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17593__i = 0, G__17593__a = new Array(arguments.length -  0);
while (G__17593__i < G__17593__a.length) {G__17593__a[G__17593__i] = arguments[G__17593__i + 0]; ++G__17593__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17593__a,0);
} 
return general$toc$ul_sect__delegate.call(this,args__6627__auto__);};
general$toc$ul_sect.cljs$lang$maxFixedArity = 0;
general$toc$ul_sect.cljs$lang$applyTo = (function (arglist__17594){
var args__6627__auto__ = cljs.core.seq(arglist__17594);
return general$toc$ul_sect__delegate(args__6627__auto__);
});
general$toc$ul_sect.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sect__delegate;
return general$toc$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_sub = (function() { 
var general$toc$ul_sub__delegate = function (args__6627__auto__){
var vec__17603 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17604 = cljs.core.nth.call(null,vec__17603,(0),null);
var map__17604__$1 = ((((!((map__17604 == null)))?((((map__17604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17604):map__17604);
var ch = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var kids = cljs.core.nth.call(null,vec__17603,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17603,map__17604,map__17604__$1,ch,sect,kids){
return (function (G__17608,G__17607,G__17610,G__17606,G__17609){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17606.call(null,(G__17607.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17608),G__17609)) && (G__17607.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__17608),G__17610)))], null);
});})(vec__17603,map__17604,map__17604__$1,ch,sect,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,cljs.core.not,ch)),kids);
};
var general$toc$ul_sub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17611__i = 0, G__17611__a = new Array(arguments.length -  0);
while (G__17611__i < G__17611__a.length) {G__17611__a[G__17611__i] = arguments[G__17611__i + 0]; ++G__17611__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17611__a,0);
} 
return general$toc$ul_sub__delegate.call(this,args__6627__auto__);};
general$toc$ul_sub.cljs$lang$maxFixedArity = 0;
general$toc$ul_sub.cljs$lang$applyTo = (function (arglist__17612){
var args__6627__auto__ = cljs.core.seq(arglist__17612);
return general$toc$ul_sub__delegate(args__6627__auto__);
});
general$toc$ul_sub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_sub__delegate;
return general$toc$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.ul_ssub = (function() { 
var general$toc$ul_ssub__delegate = function (args__6627__auto__){
var vec__17622 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17623 = cljs.core.nth.call(null,vec__17622,(0),null);
var map__17623__$1 = ((((!((map__17623 == null)))?((((map__17623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17623):map__17623);
var ch = cljs.core.get.call(null,map__17623__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__17623__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var sub = cljs.core.get.call(null,map__17623__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var kids = cljs.core.nth.call(null,vec__17622,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left: 10px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__17622,map__17623,map__17623__$1,ch,sect,sub,kids){
return (function (G__17627,G__17626,G__17629,G__17630,G__17625,G__17628){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__17625.call(null,(G__17626.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__17627),G__17628)) && (G__17626.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__17627),G__17629)) && (G__17626.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__17627),G__17630)))], null);
});})(vec__17622,map__17623,map__17623__$1,ch,sect,sub,kids))
).call(null,general.toc.scroll_map,cljs.core._EQ_,sect,sub,cljs.core.not,ch)),kids);
};
var general$toc$ul_ssub = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17631__i = 0, G__17631__a = new Array(arguments.length -  0);
while (G__17631__i < G__17631__a.length) {G__17631__a[G__17631__i] = arguments[G__17631__i + 0]; ++G__17631__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17631__a,0);
} 
return general$toc$ul_ssub__delegate.call(this,args__6627__auto__);};
general$toc$ul_ssub.cljs$lang$maxFixedArity = 0;
general$toc$ul_ssub.cljs$lang$applyTo = (function (arglist__17632){
var args__6627__auto__ = cljs.core.seq(arglist__17632);
return general$toc$ul_ssub__delegate(args__6627__auto__);
});
general$toc$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = general$toc$ul_ssub__delegate;
return general$toc$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
general.toc.toc = (function() { 
var general$toc$toc__delegate = function (args__6627__auto__){
var vec__17692 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__17693 = cljs.core.nth.call(null,vec__17692,(0),null);
var map__17693__$1 = ((((!((map__17693 == null)))?((((map__17693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17693):map__17693);
var data = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _ = cljs.core.nth.call(null,vec__17692,(1),null);
var vec__17695 = new cljs.core.Keyword(null,"toc-hierarchy","toc-hierarchy",-863557290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var one = cljs.core.nth.call(null,vec__17695,(0),null);
var two = cljs.core.nth.call(null,vec__17695,(1),null);
var three = cljs.core.nth.call(null,vec__17695,(2),null);
var four = cljs.core.nth.call(null,vec__17695,(3),null);
return general.bootstrap.row.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-3 col-sm-3 toc",tailrecursion.hoplon.h3.call(null,"Table of Contents"),(function (){var all_chapters = tailrecursion.javelin.formula.call(null,((function (vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17697,G__17698,G__17696){
return G__17696.call(null,G__17697,G__17698);
});})(vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,data,one,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula.call(null,((function (all_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17701,G__17699,G__17700){
return G__17699.call(null,(1),(G__17700.call(null,G__17701) + (1)));
});})(all_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return general.toc.ul_ch.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_chapters,null,((function (all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (item__6638__auto__){
var vec__17702 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,item__6638__auto__));
var ch = cljs.core.nth.call(null,vec__17702,(0),null);
var title = tailrecursion.javelin.formula.call(null,((function (vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17704,G__17705,G__17703){
return G__17703.call(null,G__17704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17705,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula.call(null,((function (title,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17707,G__17708,G__17706){
return G__17706.call(null,G__17707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17708,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula.call(null,((function (title,link,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17710,G__17711,G__17712,G__17709){
return G__17709.call(null,G__17710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17711,G__17712], null));
});})(title,link,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_chapters,ch,two,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17715,G__17713,G__17714){
return G__17713.call(null,(1),(G__17714.call(null,G__17715) + (1)));
});})(title,link,all_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_sects,cljs.core.range,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc.li_ch.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title),general.toc.ul_sect.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_sects,null,((function (title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (item__6638__auto____$1){
var vec__17716 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,item__6638__auto____$1));
var sect = cljs.core.nth.call(null,vec__17716,(0),null);
var title__$1 = tailrecursion.javelin.formula.call(null,((function (vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17718,G__17719,G__17717){
return G__17717.call(null,G__17718,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17719,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula.call(null,((function (title__$1,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17721,G__17722,G__17720){
return G__17720.call(null,G__17721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17722,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$1,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17724,G__17725,G__17726,G__17723){
return G__17723.call(null,G__17724,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17725,G__17726], null));
});})(title__$1,link__$1,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,all_sects,sect,three,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17727,G__17729,G__17728){
return G__17727.call(null,(1),(G__17728.call(null,G__17729) + (1)));
});})(title__$1,link__$1,all_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,cljs.core.range,all_subs,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc.li_sect.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$1,new cljs.core.Keyword(null,"title","title",636505583),title__$1),general.toc.ul_sub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_subs,null,((function (title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (item__6638__auto____$2){
var vec__17730 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,item__6638__auto____$2));
var sub = cljs.core.nth.call(null,vec__17730,(0),null);
var title__$2 = tailrecursion.javelin.formula.call(null,((function (vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17733,G__17732,G__17731){
return G__17731.call(null,G__17732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17733,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula.call(null,((function (title__$2,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17736,G__17735,G__17734){
return G__17734.call(null,G__17735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17736,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$2,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17739,G__17738,G__17740,G__17737){
return G__17737.call(null,G__17738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17739,G__17740], null));
});})(title__$2,link__$2,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,sub,all_subs,four,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17741,G__17743,G__17742){
return G__17741.call(null,(1),(G__17742.call(null,G__17743) + (1)));
});})(title__$2,link__$2,all_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,cljs.core.range,all_ssub,cljs.core.count);
return tailrecursion.hoplon.div.call(null,general.toc.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$2,new cljs.core.Keyword(null,"title","title",636505583),title__$2),general.toc.ul_ssub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_ssub,null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (item__6638__auto____$3){
var vec__17744 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,item__6638__auto____$3));
var ssub = cljs.core.nth.call(null,vec__17744,(0),null);
var title__$3 = tailrecursion.javelin.formula.call(null,((function (vec__17744,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17747,G__17746,G__17745){
return G__17745.call(null,G__17746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17747,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__17744,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula.call(null,((function (title__$3,vec__17744,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_){
return (function (G__17750,G__17749,G__17748){
return G__17748.call(null,G__17749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17750,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$3,vec__17744,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
).call(null,ssub,all_ssub,cljs.core.get_in);
return general.toc.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$3,new cljs.core.Keyword(null,"title","title",636505583),title__$3);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__17730,sub,title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
)));
});})(title__$1,link__$1,all_subs,num_subs,vec__17716,sect,title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
)));
});})(title,link,all_sects,num_sects,vec__17702,ch,all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
)));
});})(all_chapters,num_chapters,vec__17695,one,two,three,four,vec__17692,map__17693,map__17693__$1,data,_))
));
})()));
};
var general$toc$toc = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__17751__i = 0, G__17751__a = new Array(arguments.length -  0);
while (G__17751__i < G__17751__a.length) {G__17751__a[G__17751__i] = arguments[G__17751__i + 0]; ++G__17751__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__17751__a,0);
} 
return general$toc$toc__delegate.call(this,args__6627__auto__);};
general$toc$toc.cljs$lang$maxFixedArity = 0;
general$toc$toc.cljs$lang$applyTo = (function (arglist__17752){
var args__6627__auto__ = cljs.core.seq(arglist__17752);
return general$toc$toc__delegate(args__6627__auto__);
});
general$toc$toc.cljs$core$IFn$_invoke$arity$variadic = general$toc$toc__delegate;
return general$toc$toc;
})()
;

//# sourceMappingURL=toc.js.map