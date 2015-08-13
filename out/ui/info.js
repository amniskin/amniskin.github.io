// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.info.date = (new Date());
ui.info.nav_active = tailrecursion.javelin.cell(null);
ui.info.nav_height = (50);
ui.info.scroll_location = tailrecursion.javelin.cell(null);
ui.info.do_watch = (function ui$info$do_watch(){
var G__88805 = arguments.length;
switch (G__88805) {
case 2:
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ui.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

ui.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__88806_88812 = init;
var G__88807_88813 = (function (){var G__88808 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__88808) : cljs.core.deref.call(null,G__88808));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__88806_88812,G__88807_88813) : f.call(null,G__88806_88812,G__88807_88813));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
var G__88809 = old;
var G__88810 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__88809,G__88810) : f.call(null,G__88809,G__88810));
});})(k))
);

return k;
});

ui.info.do_watch.cljs$lang$maxFixedArity = 3;
ui.info.screen_height = tailrecursion.javelin.cell((function (){var G__88814 = window;
return jQuery(G__88814);
})().height());
ui.info.scroll_top = tailrecursion.javelin.cell((0));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
var G__88815 = (function (){
if(cljs.core.truth_(v)){
var body = (function (){var G__88817 = "body,html";
return jQuery(G__88817);
})();
var elem__$1 = (function (){var G__88818 = elem;
return jQuery(G__88818);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,(elem__$1.offset().top - ui.info.nav_height)], null)));
} else {
return null;
}
});
var G__88816 = (0);
return setTimeout(G__88815,G__88816);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = (function (){var G__88819 = elem;
return jQuery(G__88819);
})();
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__88821,G__88820,G__88822){
return [cljs.core.str("50% "),cljs.core.str((((G__88820 + G__88821) - G__88822) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,ui.info.screen_height,ui.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
var d_88829 = (function (){var G__88823 = document;
return jQuery(G__88823);
})();
var G__88824_88830 = d_88829;
var G__88825_88831 = cljs.core.constant$keyword$scroll;
var G__88826_88832 = ((function (G__88824_88830,G__88825_88831,d_88829){
return (function (){
var G__88827 = ui.info.scroll_top;
var G__88828 = d_88829.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88827,G__88828) : cljs.core.reset_BANG_.call(null,G__88827,G__88828));
});})(G__88824_88830,G__88825_88831,d_88829))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__88824_88830,G__88825_88831,G__88826_88832) : tailrecursion.hoplon.on_BANG_.call(null,G__88824_88830,G__88825_88831,G__88826_88832));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen,(function (elem,k,callback){
var G__88833 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__88838,G__88835,G__88837,G__88836){
var e = (function (){var G__88839 = G__88836;
return (G__88835.cljs$core$IFn$_invoke$arity$1 ? G__88835.cljs$core$IFn$_invoke$arity$1(G__88839) : G__88835.call(null,G__88839));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__88837);
var s_bot__$1 = (G__88838 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,ui.info.screen_height,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__2109_SHARP_,p2__2108_SHARP_){
var G__88840 = elem;
var G__88841 = cljs.core.boolean$(p2__2108_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__88840,G__88841) : callback.call(null,G__88840,G__88841));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__88834 = (0);
return setTimeout(G__88833,G__88834);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__88842 = (function (){
var e = (function (){var G__88844 = elem;
return jQuery(G__88844);
})();
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__88847,G__88845,G__88846){
return ((G__88845 + G__88846) - G__88847);
});})(e,e_top,e_bot))
).call(null,ui.info.screen_height,e_top,ui.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__88849,G__88848){
return (G__88848 + G__88849);
});})(e,e_top,e_bot,begin))
).call(null,ui.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__88852,G__88850,G__88851){
return ((G__88850 - G__88851) / (G__88852 - G__88851));
});})(e,e_top,e_bot,begin,end))
).call(null,end,ui.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__88853){
if(cljs.core.truth_((((0) <= G__88853)) && ((G__88853 <= (1))))){
return G__88853;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__2111_SHARP_,p2__2110_SHARP_){
var G__88854 = elem;
var G__88855 = prcnt;
var G__88856 = cljs.core.boolean$(p2__2110_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__88854,G__88855,G__88856) : callback.call(null,G__88854,G__88855,G__88856));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__88843 = (0);
return setTimeout(G__88842,G__88843);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$at_DASH_top,(function (elem,k,callback){
var G__88857 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__88859,G__88861,G__88860){
var e = (function (){var G__88862 = G__88860;
return (G__88859.cljs$core$IFn$_invoke$arity$1 ? G__88859.cljs$core$IFn$_invoke$arity$1(G__88862) : G__88859.call(null,G__88862));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__88861))) && ((((50) + G__88861) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__2113_SHARP_,p2__2112_SHARP_){
var G__88863 = cljs.core.boolean$(p2__2112_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__88863) : callback.call(null,G__88863));
});})(e_top,e_bot,c))
);
});
var G__88858 = (0);
return setTimeout(G__88857,G__88858);
}));
var w_88870 = (function (){var G__88864 = window;
return jQuery(G__88864);
})();
var G__88865_88871 = w_88870;
var G__88866_88872 = cljs.core.constant$keyword$resize;
var G__88867_88873 = ((function (G__88865_88871,G__88866_88872,w_88870){
return (function (){
var G__88868 = ui.info.screen_height;
var G__88869 = w_88870.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__88868,G__88869) : cljs.core.reset_BANG_.call(null,G__88868,G__88869));
});})(G__88865_88871,G__88866_88872,w_88870))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__88865_88871,G__88866_88872,G__88867_88873) : tailrecursion.hoplon.on_BANG_.call(null,G__88865_88871,G__88866_88872,G__88867_88873));
ui.info.home = "#!/home/";
ui.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.info.home], 0));
ui.info.route = tailrecursion.javelin.formula((function (G__88877,G__88881,G__88876,G__88880,G__88879,G__88878){
var G__88882 = cljs.core.PersistentArrayMap.EMPTY;
var G__88883 = (function (){var G__88884 = ((function (G__88882){
return (function (p__88874){
var vec__88875 = p__88874;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88875,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__88886 = k;
return (G__88878.cljs$core$IFn$_invoke$arity$1 ? G__88878.cljs$core$IFn$_invoke$arity$1(G__88886) : G__88878.call(null,G__88886));
})(),v], null);
});})(G__88882))
;
var G__88885 = (function (){var G__88887 = (2);
var G__88888 = (function (){var G__88889 = G__88881;
var G__88890 = /\//;
return (G__88880.cljs$core$IFn$_invoke$arity$2 ? G__88880.cljs$core$IFn$_invoke$arity$2(G__88889,G__88890) : G__88880.call(null,G__88889,G__88890));
})();
return (G__88879.cljs$core$IFn$_invoke$arity$2 ? G__88879.cljs$core$IFn$_invoke$arity$2(G__88887,G__88888) : G__88879.call(null,G__88887,G__88888));
})();
return (G__88877.cljs$core$IFn$_invoke$arity$2 ? G__88877.cljs$core$IFn$_invoke$arity$2(G__88884,G__88885) : G__88877.call(null,G__88884,G__88885));
})();
return (G__88876.cljs$core$IFn$_invoke$arity$2 ? G__88876.cljs$core$IFn$_invoke$arity$2(G__88882,G__88883) : G__88876.call(null,G__88882,G__88883));
})).call(null,cljs.core.map,ui.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
ui.info.location = tailrecursion.javelin.formula((function (G__88891){
var G__88892 = cljs.core.constant$keyword$_SHARP__BANG_;
return (G__88891.cljs$core$IFn$_invoke$arity$1 ? G__88891.cljs$core$IFn$_invoke$arity$1(G__88892) : G__88891.call(null,G__88892));
})).call(null,ui.info.route);
