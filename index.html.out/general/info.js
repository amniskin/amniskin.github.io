// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args9844 = [];
var len__5881__auto___9849 = arguments.length;
var i__5882__auto___9850 = (0);
while(true){
if((i__5882__auto___9850 < len__5881__auto___9849)){
args9844.push((arguments[i__5882__auto___9850]));

var G__9851 = (i__5882__auto___9850 + (1));
i__5882__auto___9850 = G__9851;
continue;
} else {
}
break;
}

var G__9846 = args9844.length;
switch (G__9846) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9844.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__9847_9853 = init;
var G__9848_9854 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9847_9853,G__9848_9854) : f.call(null,G__9847_9853,G__9848_9854));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

general.info.do_watch.cljs$lang$maxFixedArity = 3;
general.info.home = null;
general.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.info.home], 0));
general.info.route = tailrecursion.javelin.formula((function (G__9858,G__9862,G__9857,G__9861,G__9860,G__9859){
var G__9863 = cljs.core.PersistentArrayMap.EMPTY;
var G__9864 = (function (){var G__9865 = ((function (G__9863){
return (function (p__9855){
var vec__9856 = p__9855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9856,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9859.cljs$core$IFn$_invoke$arity$1 ? G__9859.cljs$core$IFn$_invoke$arity$1(k) : G__9859.call(null,k)),v], null);
});})(G__9863))
;
var G__9866 = (function (){var G__9867 = (2);
var G__9868 = (G__9861.cljs$core$IFn$_invoke$arity$2 ? G__9861.cljs$core$IFn$_invoke$arity$2(G__9862,/\//) : G__9861.call(null,G__9862,/\//));
return (G__9860.cljs$core$IFn$_invoke$arity$2 ? G__9860.cljs$core$IFn$_invoke$arity$2(G__9867,G__9868) : G__9860.call(null,G__9867,G__9868));
})();
return (G__9858.cljs$core$IFn$_invoke$arity$2 ? G__9858.cljs$core$IFn$_invoke$arity$2(G__9865,G__9866) : G__9858.call(null,G__9865,G__9866));
})();
return (G__9857.cljs$core$IFn$_invoke$arity$2 ? G__9857.cljs$core$IFn$_invoke$arity$2(G__9863,G__9864) : G__9857.call(null,G__9863,G__9864));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__9872,G__9871,G__9875,G__9876,G__9874,G__9873){
var G__9877 = cljs.core.PersistentArrayMap.EMPTY;
var G__9878 = (function (){var G__9879 = ((function (G__9877){
return (function (p__9869){
var vec__9870 = p__9869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9870,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9873.cljs$core$IFn$_invoke$arity$1 ? G__9873.cljs$core$IFn$_invoke$arity$1(k) : G__9873.call(null,k)),v], null);
});})(G__9877))
;
var G__9880 = (function (){var G__9881 = (2);
var G__9882 = (G__9875.cljs$core$IFn$_invoke$arity$2 ? G__9875.cljs$core$IFn$_invoke$arity$2(G__9876,/\//) : G__9875.call(null,G__9876,/\//));
return (G__9874.cljs$core$IFn$_invoke$arity$2 ? G__9874.cljs$core$IFn$_invoke$arity$2(G__9881,G__9882) : G__9874.call(null,G__9881,G__9882));
})();
return (G__9872.cljs$core$IFn$_invoke$arity$2 ? G__9872.cljs$core$IFn$_invoke$arity$2(G__9879,G__9880) : G__9872.call(null,G__9879,G__9880));
})();
return (G__9871.cljs$core$IFn$_invoke$arity$2 ? G__9871.cljs$core$IFn$_invoke$arity$2(G__9877,G__9878) : G__9871.call(null,G__9877,G__9878));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_9890 = jQuery(window);
var G__9885_9891 = w_9890;
var G__9886_9892 = cljs.core.cst$kw$resize;
var G__9887_9893 = ((function (G__9885_9891,G__9886_9892,w_9890){
return (function (){
var G__9888 = general.info.screen_height;
var G__9889 = w_9890.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9888,G__9889) : cljs.core.reset_BANG_.call(null,G__9888,G__9889));
});})(G__9885_9891,G__9886_9892,w_9890))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9885_9891,G__9886_9892,G__9887_9893) : tailrecursion.hoplon.on_BANG_.call(null,G__9885_9891,G__9886_9892,G__9887_9893));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_9901 = jQuery(document);
var G__9896_9902 = d_9901;
var G__9897_9903 = cljs.core.cst$kw$scroll;
var G__9898_9904 = ((function (G__9896_9902,G__9897_9903,d_9901){
return (function (){
var G__9899 = general.info.scroll_top;
var G__9900 = d_9901.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9899,G__9900) : cljs.core.reset_BANG_.call(null,G__9899,G__9900));
});})(G__9896_9902,G__9897_9903,d_9901))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9896_9902,G__9897_9903,G__9898_9904) : tailrecursion.hoplon.on_BANG_.call(null,G__9896_9902,G__9897_9903,G__9898_9904));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__9905 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__9906 = (0);
return setTimeout(G__9905,G__9906);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__9908,G__9907,G__9909){
return [cljs.core.str("50% "),cljs.core.str((((G__9907 + G__9908) - G__9909) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__9916 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__9921,G__9918,G__9920,G__9919){
var e = (G__9918.cljs$core$IFn$_invoke$arity$1 ? G__9918.cljs$core$IFn$_invoke$arity$1(G__9919) : G__9918.call(null,G__9919));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__9920);
var s_bot__$1 = (G__9921 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__1425_SHARP_,p2__1424_SHARP_){
var G__9922 = elem;
var G__9923 = cljs.core.boolean$(p2__1424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__9922,G__9923) : callback.call(null,G__9922,G__9923));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__9917 = (0);
return setTimeout(G__9916,G__9917);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__9936 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__9940,G__9938,G__9939){
return ((G__9938 + G__9939) - G__9940);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__9942,G__9941){
return (G__9941 + G__9942);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__9945,G__9943,G__9944){
return ((G__9943 - G__9944) / (G__9945 - G__9944));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__9946){
if(cljs.core.truth_((((0) <= G__9946)) && ((G__9946 <= (1))))){
return G__9946;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__1427_SHARP_,p2__1426_SHARP_){
var G__9947 = elem;
var G__9948 = prcnt;
var G__9949 = cljs.core.boolean$(p2__1426_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__9947,G__9948,G__9949) : callback.call(null,G__9947,G__9948,G__9949));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__9937 = (0);
return setTimeout(G__9936,G__9937);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__9954 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__9956,G__9958,G__9957){
var e = (G__9956.cljs$core$IFn$_invoke$arity$1 ? G__9956.cljs$core$IFn$_invoke$arity$1(G__9957) : G__9956.call(null,G__9957));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__9958))) && ((((50) + G__9958) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__1429_SHARP_,p2__1428_SHARP_){
var G__9959 = cljs.core.boolean$(p2__1428_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__9959) : callback.call(null,G__9959));
});})(e_top,e_bot,c))
);
});
var G__9955 = (0);
return setTimeout(G__9954,G__9955);
}));
