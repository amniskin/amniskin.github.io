// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.home = null;
general.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.info.home], 0));
general.info.route = tailrecursion.javelin.formula((function (G__160821,G__160825,G__160820,G__160824,G__160823,G__160822){
var G__160826 = cljs.core.PersistentArrayMap.EMPTY;
var G__160827 = (function (){var G__160828 = ((function (G__160826){
return (function (p__160818){
var vec__160819 = p__160818;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160819,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__160822.cljs$core$IFn$_invoke$arity$1 ? G__160822.cljs$core$IFn$_invoke$arity$1(k) : G__160822.call(null,k)),v], null);
});})(G__160826))
;
var G__160829 = (function (){var G__160830 = (2);
var G__160831 = (G__160824.cljs$core$IFn$_invoke$arity$2 ? G__160824.cljs$core$IFn$_invoke$arity$2(G__160825,/\//) : G__160824.call(null,G__160825,/\//));
return (G__160823.cljs$core$IFn$_invoke$arity$2 ? G__160823.cljs$core$IFn$_invoke$arity$2(G__160830,G__160831) : G__160823.call(null,G__160830,G__160831));
})();
return (G__160821.cljs$core$IFn$_invoke$arity$2 ? G__160821.cljs$core$IFn$_invoke$arity$2(G__160828,G__160829) : G__160821.call(null,G__160828,G__160829));
})();
return (G__160820.cljs$core$IFn$_invoke$arity$2 ? G__160820.cljs$core$IFn$_invoke$arity$2(G__160826,G__160827) : G__160820.call(null,G__160826,G__160827));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__160835,G__160834,G__160838,G__160839,G__160837,G__160836){
var G__160840 = cljs.core.PersistentArrayMap.EMPTY;
var G__160841 = (function (){var G__160842 = ((function (G__160840){
return (function (p__160832){
var vec__160833 = p__160832;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160833,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__160836.cljs$core$IFn$_invoke$arity$1 ? G__160836.cljs$core$IFn$_invoke$arity$1(k) : G__160836.call(null,k)),v], null);
});})(G__160840))
;
var G__160843 = (function (){var G__160844 = (2);
var G__160845 = (G__160838.cljs$core$IFn$_invoke$arity$2 ? G__160838.cljs$core$IFn$_invoke$arity$2(G__160839,/\//) : G__160838.call(null,G__160839,/\//));
return (G__160837.cljs$core$IFn$_invoke$arity$2 ? G__160837.cljs$core$IFn$_invoke$arity$2(G__160844,G__160845) : G__160837.call(null,G__160844,G__160845));
})();
return (G__160835.cljs$core$IFn$_invoke$arity$2 ? G__160835.cljs$core$IFn$_invoke$arity$2(G__160842,G__160843) : G__160835.call(null,G__160842,G__160843));
})();
return (G__160834.cljs$core$IFn$_invoke$arity$2 ? G__160834.cljs$core$IFn$_invoke$arity$2(G__160840,G__160841) : G__160834.call(null,G__160840,G__160841));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.do_watch = (function general$info$do_watch(){
var args160846 = [];
var len__6061__auto___160851 = arguments.length;
var i__6062__auto___160852 = (0);
while(true){
if((i__6062__auto___160852 < len__6061__auto___160851)){
args160846.push((arguments[i__6062__auto___160852]));

var G__160853 = (i__6062__auto___160852 + (1));
i__6062__auto___160852 = G__160853;
continue;
} else {
}
break;
}

var G__160848 = args160846.length;
switch (G__160848) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args160846.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__160849_160855 = init;
var G__160850_160856 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__160849_160855,G__160850_160856) : f.call(null,G__160849_160855,G__160850_160856));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

general.info.do_watch.cljs$lang$maxFixedArity = 3;
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_160864 = jQuery(window);
var G__160859_160865 = w_160864;
var G__160860_160866 = cljs.core.cst$kw$resize;
var G__160861_160867 = ((function (G__160859_160865,G__160860_160866,w_160864){
return (function (){
var G__160862 = general.info.screen_height;
var G__160863 = w_160864.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__160862,G__160863) : cljs.core.reset_BANG_.call(null,G__160862,G__160863));
});})(G__160859_160865,G__160860_160866,w_160864))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__160859_160865,G__160860_160866,G__160861_160867) : tailrecursion.hoplon.on_BANG_.call(null,G__160859_160865,G__160860_160866,G__160861_160867));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_160875 = jQuery(document);
var G__160870_160876 = d_160875;
var G__160871_160877 = cljs.core.cst$kw$scroll;
var G__160872_160878 = ((function (G__160870_160876,G__160871_160877,d_160875){
return (function (){
var G__160873 = general.info.scroll_top;
var G__160874 = d_160875.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__160873,G__160874) : cljs.core.reset_BANG_.call(null,G__160873,G__160874));
});})(G__160870_160876,G__160871_160877,d_160875))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__160870_160876,G__160871_160877,G__160872_160878) : tailrecursion.hoplon.on_BANG_.call(null,G__160870_160876,G__160871_160877,G__160872_160878));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__160879 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__160880 = (0);
return setTimeout(G__160879,G__160880);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__160882,G__160881,G__160883){
return [cljs.core.str("50% "),cljs.core.str((((G__160881 + G__160882) - G__160883) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__160890 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__160895,G__160892,G__160894,G__160893){
var e = (G__160892.cljs$core$IFn$_invoke$arity$1 ? G__160892.cljs$core$IFn$_invoke$arity$1(G__160893) : G__160892.call(null,G__160893));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__160894);
var s_bot__$1 = (G__160895 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4421_SHARP_,p2__4420_SHARP_){
var G__160896 = elem;
var G__160897 = cljs.core.boolean$(p2__4420_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__160896,G__160897) : callback.call(null,G__160896,G__160897));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__160891 = (0);
return setTimeout(G__160890,G__160891);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__160910 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__160914,G__160912,G__160913){
return ((G__160912 + G__160913) - G__160914);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__160916,G__160915){
return (G__160915 + G__160916);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__160919,G__160917,G__160918){
return ((G__160917 - G__160918) / (G__160919 - G__160918));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__160920){
if(cljs.core.truth_((((0) <= G__160920)) && ((G__160920 <= (1))))){
return G__160920;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4423_SHARP_,p2__4422_SHARP_){
var G__160921 = elem;
var G__160922 = prcnt;
var G__160923 = cljs.core.boolean$(p2__4422_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__160921,G__160922,G__160923) : callback.call(null,G__160921,G__160922,G__160923));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__160911 = (0);
return setTimeout(G__160910,G__160911);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__160928 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__160930,G__160932,G__160931){
var e = (G__160930.cljs$core$IFn$_invoke$arity$1 ? G__160930.cljs$core$IFn$_invoke$arity$1(G__160931) : G__160930.call(null,G__160931));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__160932))) && ((((50) + G__160932) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4425_SHARP_,p2__4424_SHARP_){
var G__160933 = cljs.core.boolean$(p2__4424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__160933) : callback.call(null,G__160933));
});})(e_top,e_bot,c))
);
});
var G__160929 = (0);
return setTimeout(G__160928,G__160929);
}));
