// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ui.book_toc');
goog.require('cljs.core');
goog.require('ui.book');
goog.require('ui.style');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.book_toc.hover_cell = tailrecursion.javelin.cell.call(null,null);
/**
 * @param {...*} var_args
 */
ui.book_toc.toc_link = (function() { 
var ui$book_toc$toc_link__delegate = function (args__5784__auto__){
var vec__28137 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28138 = cljs.core.nth.call(null,vec__28137,(0),null);
var map__28138__$1 = ((cljs.core.seq_QMARK_.call(null,map__28138))?cljs.core.apply.call(null,cljs.core.hash_map,map__28138):map__28138);
var link = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__28137,(1),null);
var scroll_link_QMARK_ = tailrecursion.javelin.formula.call(null,((function (vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (G__28139,G__28140,G__28141){
return G__28139.call(null,G__28140,G__28141);
});})(vec__28137,map__28138,map__28138__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book.scroll_location,link);
var hover_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (G__28142,G__28143,G__28144){
return G__28142.call(null,G__28143,G__28144);
});})(scroll_link_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_))
).call(null,cljs.core._EQ_,ui.book_toc.hover_cell,link);
var active_QMARK_ = tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (G__28145,G__28146){
var or__4210__auto__ = G__28145;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__28146;
}
});})(scroll_link_QMARK_,hover_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_))
).call(null,scroll_link_QMARK_,hover_QMARK_);
return tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (G__28147){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),G__28147], null);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_))
).call(null,active_QMARK_),new cljs.core.Keyword(null,"click","click",1912301393),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (){
cljs.core.reset_BANG_.call(null,ui.book.scroll_location,null);

return cljs.core.reset_BANG_.call(null,ui.book.scroll_location,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_))
,new cljs.core.Keyword(null,"hover","hover",-341141711),((function (scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.book_toc.hover_cell,link);
});})(scroll_link_QMARK_,hover_QMARK_,active_QMARK_,vec__28137,map__28138,map__28138__$1,link,title,_))
,new cljs.core.Keyword(null,"href","href",-793805698),link,title);
};
var ui$book_toc$toc_link = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28148__i = 0, G__28148__a = new Array(arguments.length -  0);
while (G__28148__i < G__28148__a.length) {G__28148__a[G__28148__i] = arguments[G__28148__i + 0]; ++G__28148__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28148__a,0);
} 
return ui$book_toc$toc_link__delegate.call(this,args__5784__auto__);};
ui$book_toc$toc_link.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc_link.cljs$lang$applyTo = (function (arglist__28149){
var args__5784__auto__ = cljs.core.seq(arglist__28149);
return ui$book_toc$toc_link__delegate(args__5784__auto__);
});
ui$book_toc$toc_link.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc_link__delegate;
return ui$book_toc$toc_link;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_ch = (function() { 
var ui$book_toc$li_ch__delegate = function (args__5784__auto__){
var vec__28152 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28153 = cljs.core.nth.call(null,vec__28152,(0),null);
var map__28153__$1 = ((cljs.core.seq_QMARK_.call(null,map__28153))?cljs.core.apply.call(null,cljs.core.hash_map,map__28153):map__28153);
var link = cljs.core.get.call(null,map__28153__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__28153__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__28152,(1),null);
return tailrecursion.hoplon.li.call(null,ui.book_toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var ui$book_toc$li_ch = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28154__i = 0, G__28154__a = new Array(arguments.length -  0);
while (G__28154__i < G__28154__a.length) {G__28154__a[G__28154__i] = arguments[G__28154__i + 0]; ++G__28154__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28154__a,0);
} 
return ui$book_toc$li_ch__delegate.call(this,args__5784__auto__);};
ui$book_toc$li_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_ch.cljs$lang$applyTo = (function (arglist__28155){
var args__5784__auto__ = cljs.core.seq(arglist__28155);
return ui$book_toc$li_ch__delegate(args__5784__auto__);
});
ui$book_toc$li_ch.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_ch__delegate;
return ui$book_toc$li_ch;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_sect = (function() { 
var ui$book_toc$li_sect__delegate = function (args__5784__auto__){
var vec__28158 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28159 = cljs.core.nth.call(null,vec__28158,(0),null);
var map__28159__$1 = ((cljs.core.seq_QMARK_.call(null,map__28159))?cljs.core.apply.call(null,cljs.core.hash_map,map__28159):map__28159);
var link = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__28158,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"margin-left:0px; font-size:13px;",ui.book_toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var ui$book_toc$li_sect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28160__i = 0, G__28160__a = new Array(arguments.length -  0);
while (G__28160__i < G__28160__a.length) {G__28160__a[G__28160__i] = arguments[G__28160__i + 0]; ++G__28160__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28160__a,0);
} 
return ui$book_toc$li_sect__delegate.call(this,args__5784__auto__);};
ui$book_toc$li_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sect.cljs$lang$applyTo = (function (arglist__28161){
var args__5784__auto__ = cljs.core.seq(arglist__28161);
return ui$book_toc$li_sect__delegate(args__5784__auto__);
});
ui$book_toc$li_sect.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_sect__delegate;
return ui$book_toc$li_sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.li_sub = (function() { 
var ui$book_toc$li_sub__delegate = function (args__5784__auto__){
var vec__28164 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28165 = cljs.core.nth.call(null,vec__28164,(0),null);
var map__28165__$1 = ((cljs.core.seq_QMARK_.call(null,map__28165))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165):map__28165);
var link = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var title = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"title","title",636505583));
var _ = cljs.core.nth.call(null,vec__28164,(1),null);
return tailrecursion.hoplon.li.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"font-size:12px;",ui.book_toc.toc_link.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title));
};
var ui$book_toc$li_sub = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28166__i = 0, G__28166__a = new Array(arguments.length -  0);
while (G__28166__i < G__28166__a.length) {G__28166__a[G__28166__i] = arguments[G__28166__i + 0]; ++G__28166__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28166__a,0);
} 
return ui$book_toc$li_sub__delegate.call(this,args__5784__auto__);};
ui$book_toc$li_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$li_sub.cljs$lang$applyTo = (function (arglist__28167){
var args__5784__auto__ = cljs.core.seq(arglist__28167);
return ui$book_toc$li_sub__delegate(args__5784__auto__);
});
ui$book_toc$li_sub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$li_sub__delegate;
return ui$book_toc$li_sub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_ch = (function() { 
var ui$book_toc$ul_ch__delegate = function (args__5784__auto__){
var vec__28169 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28169,(0),null);
var kids = cljs.core.nth.call(null,vec__28169,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"list-unstyled"),kids);
};
var ui$book_toc$ul_ch = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28170__i = 0, G__28170__a = new Array(arguments.length -  0);
while (G__28170__i < G__28170__a.length) {G__28170__a[G__28170__i] = arguments[G__28170__i + 0]; ++G__28170__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28170__a,0);
} 
return ui$book_toc$ul_ch__delegate.call(this,args__5784__auto__);};
ui$book_toc$ul_ch.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ch.cljs$lang$applyTo = (function (arglist__28171){
var args__5784__auto__ = cljs.core.seq(arglist__28171);
return ui$book_toc$ul_ch__delegate(args__5784__auto__);
});
ui$book_toc$ul_ch.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_ch__delegate;
return ui$book_toc$ul_ch;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_sect = (function() { 
var ui$book_toc$ul_sect__delegate = function (args__5784__auto__){
var vec__28178 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28179 = cljs.core.nth.call(null,vec__28178,(0),null);
var map__28179__$1 = ((cljs.core.seq_QMARK_.call(null,map__28179))?cljs.core.apply.call(null,cljs.core.hash_map,map__28179):map__28179);
var ch = cljs.core.get.call(null,map__28179__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var kids = cljs.core.nth.call(null,vec__28178,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__28178,map__28179,map__28179__$1,ch,kids){
return (function (G__28181,G__28183,G__28180,G__28182){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__28180.call(null,G__28181.call(null,G__28182,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__28183)))], null);
});})(vec__28178,map__28179,map__28179__$1,ch,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,cljs.core.not,ch)),kids);
};
var ui$book_toc$ul_sect = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28184__i = 0, G__28184__a = new Array(arguments.length -  0);
while (G__28184__i < G__28184__a.length) {G__28184__a[G__28184__i] = arguments[G__28184__i + 0]; ++G__28184__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28184__a,0);
} 
return ui$book_toc$ul_sect__delegate.call(this,args__5784__auto__);};
ui$book_toc$ul_sect.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sect.cljs$lang$applyTo = (function (arglist__28185){
var args__5784__auto__ = cljs.core.seq(arglist__28185);
return ui$book_toc$ul_sect__delegate(args__5784__auto__);
});
ui$book_toc$ul_sect.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_sect__delegate;
return ui$book_toc$ul_sect;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_sub = (function() { 
var ui$book_toc$ul_sub__delegate = function (args__5784__auto__){
var vec__28193 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28194 = cljs.core.nth.call(null,vec__28193,(0),null);
var map__28194__$1 = ((cljs.core.seq_QMARK_.call(null,map__28194))?cljs.core.apply.call(null,cljs.core.hash_map,map__28194):map__28194);
var ch = cljs.core.get.call(null,map__28194__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__28194__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var kids = cljs.core.nth.call(null,vec__28193,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left:10px; padding-top:0px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__28193,map__28194,map__28194__$1,ch,sect,kids){
return (function (G__28196,G__28197,G__28199,G__28195,G__28198){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__28195.call(null,(G__28196.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__28197),G__28198)) && (G__28196.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__28197),G__28199)))], null);
});})(vec__28193,map__28194,map__28194__$1,ch,sect,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,cljs.core.not,ch)),kids);
};
var ui$book_toc$ul_sub = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28200__i = 0, G__28200__a = new Array(arguments.length -  0);
while (G__28200__i < G__28200__a.length) {G__28200__a[G__28200__i] = arguments[G__28200__i + 0]; ++G__28200__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28200__a,0);
} 
return ui$book_toc$ul_sub__delegate.call(this,args__5784__auto__);};
ui$book_toc$ul_sub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_sub.cljs$lang$applyTo = (function (arglist__28201){
var args__5784__auto__ = cljs.core.seq(arglist__28201);
return ui$book_toc$ul_sub__delegate(args__5784__auto__);
});
ui$book_toc$ul_sub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_sub__delegate;
return ui$book_toc$ul_sub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.ul_ssub = (function() { 
var ui$book_toc$ul_ssub__delegate = function (args__5784__auto__){
var vec__28210 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__28211 = cljs.core.nth.call(null,vec__28210,(0),null);
var map__28211__$1 = ((cljs.core.seq_QMARK_.call(null,map__28211))?cljs.core.apply.call(null,cljs.core.hash_map,map__28211):map__28211);
var ch = cljs.core.get.call(null,map__28211__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sect = cljs.core.get.call(null,map__28211__$1,new cljs.core.Keyword(null,"sect","sect",709352997));
var sub = cljs.core.get.call(null,map__28211__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var kids = cljs.core.nth.call(null,vec__28210,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.ul.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-left: 10px;",new cljs.core.Keyword(null,"class","class",-2030961996),tailrecursion.javelin.formula.call(null,((function (vec__28210,map__28211,map__28211__$1,ch,sect,sub,kids){
return (function (G__28213,G__28214,G__28216,G__28217,G__28212,G__28215){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-unstyled","list-unstyled",1746476596),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),G__28212.call(null,(G__28213.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(G__28214),G__28215)) && (G__28213.call(null,new cljs.core.Keyword(null,"sect","sect",709352997).cljs$core$IFn$_invoke$arity$1(G__28214),G__28216)) && (G__28213.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__28214),G__28217)))], null);
});})(vec__28210,map__28211,map__28211__$1,ch,sect,sub,kids))
).call(null,cljs.core._EQ_,ui.book.scroll_map,sect,sub,cljs.core.not,ch)),kids);
};
var ui$book_toc$ul_ssub = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28218__i = 0, G__28218__a = new Array(arguments.length -  0);
while (G__28218__i < G__28218__a.length) {G__28218__a[G__28218__i] = arguments[G__28218__i + 0]; ++G__28218__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28218__a,0);
} 
return ui$book_toc$ul_ssub__delegate.call(this,args__5784__auto__);};
ui$book_toc$ul_ssub.cljs$lang$maxFixedArity = 0;
ui$book_toc$ul_ssub.cljs$lang$applyTo = (function (arglist__28219){
var args__5784__auto__ = cljs.core.seq(arglist__28219);
return ui$book_toc$ul_ssub__delegate(args__5784__auto__);
});
ui$book_toc$ul_ssub.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$ul_ssub__delegate;
return ui$book_toc$ul_ssub;
})()
;
/**
 * @param {...*} var_args
 */
ui.book_toc.toc = (function() { 
var ui$book_toc$toc__delegate = function (args__5784__auto__){
var vec__28272 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28272,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28272,(1),null);
return ui.style.row.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-3 col-sm-3 toc",tailrecursion.hoplon.h3.call(null,"Table of Contents"),(function (){var all_chapters = tailrecursion.javelin.formula.call(null,((function (vec__28272,_,___$1){
return (function (G__28274,G__28273){
return G__28273.call(null,G__28274,new cljs.core.Keyword(null,"ch","ch",-554717905));
});})(vec__28272,_,___$1))
).call(null,ui.book._STAR_book_data_STAR_,cljs.core.get);
var num_chapters = tailrecursion.javelin.formula.call(null,((function (all_chapters,vec__28272,_,___$1){
return (function (G__28277,G__28275,G__28276){
return G__28275.call(null,(1),(G__28276.call(null,G__28277) + (1)));
});})(all_chapters,vec__28272,_,___$1))
).call(null,all_chapters,cljs.core.range,cljs.core.count);
return ui.book_toc.ul_ch.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_chapters,null,((function (all_chapters,num_chapters,vec__28272,_,___$1){
return (function (item__5795__auto__){
var vec__28278 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (all_chapters,num_chapters,vec__28272,_,___$1){
return (function (ch){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null);
});})(all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,item__5795__auto__));
var ch = cljs.core.nth.call(null,vec__28278,(0),null);
var title = tailrecursion.javelin.formula.call(null,((function (vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28280,G__28281,G__28279){
return G__28279.call(null,G__28280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28281,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var link = tailrecursion.javelin.formula.call(null,((function (title,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28283,G__28284,G__28282){
return G__28282.call(null,G__28283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28284,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var all_sects = tailrecursion.javelin.formula.call(null,((function (title,link,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28286,G__28287,G__28285){
return G__28285.call(null,G__28286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28287,new cljs.core.Keyword(null,"sect","sect",709352997)], null));
});})(title,link,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_chapters,ch,cljs.core.get_in);
var num_sects = tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28290,G__28288,G__28289){
return G__28288.call(null,(1),(G__28289.call(null,G__28290) + (1)));
});})(title,link,all_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_sects,cljs.core.range,cljs.core.count);
return tailrecursion.hoplon.div.call(null,ui.book_toc.li_ch.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"title","title",636505583),title),ui.book_toc.ul_sect.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_sects,null,((function (title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (item__5795__auto____$1){
var vec__28291 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (sect){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sect], null);
});})(title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,item__5795__auto____$1));
var sect = cljs.core.nth.call(null,vec__28291,(0),null);
var title__$1 = tailrecursion.javelin.formula.call(null,((function (vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28293,G__28294,G__28292){
return G__28292.call(null,G__28293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28294,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var link__$1 = tailrecursion.javelin.formula.call(null,((function (title__$1,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28296,G__28297,G__28295){
return G__28295.call(null,G__28296,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28297,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$1,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var all_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28299,G__28300,G__28298){
return G__28298.call(null,G__28299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28300,new cljs.core.Keyword(null,"sub","sub",-2093760025)], null));
});})(title__$1,link__$1,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,all_sects,sect,cljs.core.get_in);
var num_subs = tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28301,G__28303,G__28302){
return G__28301.call(null,(1),(G__28302.call(null,G__28303) + (1)));
});})(title__$1,link__$1,all_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
return tailrecursion.hoplon.div.call(null,ui.book_toc.li_sect.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$1,new cljs.core.Keyword(null,"title","title",636505583),title__$1),ui.book_toc.ul_sub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_subs,null,((function (title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (item__5795__auto____$2){
var vec__28304 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (sub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
});})(title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,item__5795__auto____$2));
var sub = cljs.core.nth.call(null,vec__28304,(0),null);
var title__$2 = tailrecursion.javelin.formula.call(null,((function (vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28307,G__28306,G__28305){
return G__28305.call(null,G__28306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28307,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var link__$2 = tailrecursion.javelin.formula.call(null,((function (title__$2,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28310,G__28309,G__28308){
return G__28308.call(null,G__28309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28310,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$2,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var all_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28313,G__28312,G__28311){
return G__28311.call(null,G__28312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28313,new cljs.core.Keyword(null,"ssub","ssub",1000444057)], null));
});})(title__$2,link__$2,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,sub,all_subs,cljs.core.get_in);
var num_ssub = tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28314,G__28316,G__28315){
return G__28314.call(null,(1),(G__28315.call(null,G__28316) + (1)));
});})(title__$2,link__$2,all_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,cljs.core.range,all_subs,cljs.core.count);
return tailrecursion.hoplon.div.call(null,ui.book_toc.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$2,new cljs.core.Keyword(null,"title","title",636505583),title__$2),ui.book_toc.ul_ssub.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905),ch,new cljs.core.Keyword(null,"sect","sect",709352997),sect,new cljs.core.Keyword(null,"sub","sub",-2093760025),sub,tailrecursion.hoplon.loop_tpl_STAR_.call(null,num_ssub,null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (item__5795__auto____$3){
var vec__28317 = tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.formula.call(null,((function (title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (ssub){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ssub], null);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,item__5795__auto____$3));
var ssub = cljs.core.nth.call(null,vec__28317,(0),null);
var title__$3 = tailrecursion.javelin.formula.call(null,((function (vec__28317,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28320,G__28319,G__28318){
return G__28318.call(null,G__28319,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28320,new cljs.core.Keyword(null,"title","title",636505583)], null));
});})(vec__28317,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
var link__$3 = tailrecursion.javelin.formula.call(null,((function (title__$3,vec__28317,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1){
return (function (G__28323,G__28322,G__28321){
return G__28321.call(null,G__28322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28323,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});})(title__$3,vec__28317,ssub,title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
).call(null,ssub,all_ssub,cljs.core.get_in);
return ui.book_toc.li_sub.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),link__$3,new cljs.core.Keyword(null,"title","title",636505583),title__$3);
});})(title__$2,link__$2,all_ssub,num_ssub,vec__28304,sub,title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
)));
});})(title__$1,link__$1,all_subs,num_subs,vec__28291,sect,title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
)));
});})(title,link,all_sects,num_sects,vec__28278,ch,all_chapters,num_chapters,vec__28272,_,___$1))
)));
});})(all_chapters,num_chapters,vec__28272,_,___$1))
));
})()));
};
var ui$book_toc$toc = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28324__i = 0, G__28324__a = new Array(arguments.length -  0);
while (G__28324__i < G__28324__a.length) {G__28324__a[G__28324__i] = arguments[G__28324__i + 0]; ++G__28324__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28324__a,0);
} 
return ui$book_toc$toc__delegate.call(this,args__5784__auto__);};
ui$book_toc$toc.cljs$lang$maxFixedArity = 0;
ui$book_toc$toc.cljs$lang$applyTo = (function (arglist__28325){
var args__5784__auto__ = cljs.core.seq(arglist__28325);
return ui$book_toc$toc__delegate(args__5784__auto__);
});
ui$book_toc$toc.cljs$core$IFn$_invoke$arity$variadic = ui$book_toc$toc__delegate;
return ui$book_toc$toc;
})()
;

//# sourceMappingURL=book_toc.js.map