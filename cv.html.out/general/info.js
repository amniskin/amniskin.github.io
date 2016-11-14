// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args9096 = [];
var len__5881__auto___9101 = arguments.length;
var i__5882__auto___9102 = (0);
while(true){
if((i__5882__auto___9102 < len__5881__auto___9101)){
args9096.push((arguments[i__5882__auto___9102]));

var G__9103 = (i__5882__auto___9102 + (1));
i__5882__auto___9102 = G__9103;
continue;
} else {
}
break;
}

var G__9098 = args9096.length;
switch (G__9098) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9096.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__9099_9105 = init;
var G__9100_9106 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9099_9105,G__9100_9106) : f.call(null,G__9099_9105,G__9100_9106));

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
general.info.route = tailrecursion.javelin.formula((function (G__9110,G__9114,G__9109,G__9113,G__9112,G__9111){
var G__9115 = cljs.core.PersistentArrayMap.EMPTY;
var G__9116 = (function (){var G__9117 = ((function (G__9115){
return (function (p__9107){
var vec__9108 = p__9107;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9111.cljs$core$IFn$_invoke$arity$1 ? G__9111.cljs$core$IFn$_invoke$arity$1(k) : G__9111.call(null,k)),v], null);
});})(G__9115))
;
var G__9118 = (function (){var G__9119 = (2);
var G__9120 = (G__9113.cljs$core$IFn$_invoke$arity$2 ? G__9113.cljs$core$IFn$_invoke$arity$2(G__9114,/\//) : G__9113.call(null,G__9114,/\//));
return (G__9112.cljs$core$IFn$_invoke$arity$2 ? G__9112.cljs$core$IFn$_invoke$arity$2(G__9119,G__9120) : G__9112.call(null,G__9119,G__9120));
})();
return (G__9110.cljs$core$IFn$_invoke$arity$2 ? G__9110.cljs$core$IFn$_invoke$arity$2(G__9117,G__9118) : G__9110.call(null,G__9117,G__9118));
})();
return (G__9109.cljs$core$IFn$_invoke$arity$2 ? G__9109.cljs$core$IFn$_invoke$arity$2(G__9115,G__9116) : G__9109.call(null,G__9115,G__9116));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__9124,G__9123,G__9127,G__9128,G__9126,G__9125){
var G__9129 = cljs.core.PersistentArrayMap.EMPTY;
var G__9130 = (function (){var G__9131 = ((function (G__9129){
return (function (p__9121){
var vec__9122 = p__9121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9122,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9125.cljs$core$IFn$_invoke$arity$1 ? G__9125.cljs$core$IFn$_invoke$arity$1(k) : G__9125.call(null,k)),v], null);
});})(G__9129))
;
var G__9132 = (function (){var G__9133 = (2);
var G__9134 = (G__9127.cljs$core$IFn$_invoke$arity$2 ? G__9127.cljs$core$IFn$_invoke$arity$2(G__9128,/\//) : G__9127.call(null,G__9128,/\//));
return (G__9126.cljs$core$IFn$_invoke$arity$2 ? G__9126.cljs$core$IFn$_invoke$arity$2(G__9133,G__9134) : G__9126.call(null,G__9133,G__9134));
})();
return (G__9124.cljs$core$IFn$_invoke$arity$2 ? G__9124.cljs$core$IFn$_invoke$arity$2(G__9131,G__9132) : G__9124.call(null,G__9131,G__9132));
})();
return (G__9123.cljs$core$IFn$_invoke$arity$2 ? G__9123.cljs$core$IFn$_invoke$arity$2(G__9129,G__9130) : G__9123.call(null,G__9129,G__9130));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_9142 = jQuery(window);
var G__9137_9143 = w_9142;
var G__9138_9144 = cljs.core.cst$kw$resize;
var G__9139_9145 = ((function (G__9137_9143,G__9138_9144,w_9142){
return (function (){
var G__9140 = general.info.screen_height;
var G__9141 = w_9142.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9140,G__9141) : cljs.core.reset_BANG_.call(null,G__9140,G__9141));
});})(G__9137_9143,G__9138_9144,w_9142))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9137_9143,G__9138_9144,G__9139_9145) : tailrecursion.hoplon.on_BANG_.call(null,G__9137_9143,G__9138_9144,G__9139_9145));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_9153 = jQuery(document);
var G__9148_9154 = d_9153;
var G__9149_9155 = cljs.core.cst$kw$scroll;
var G__9150_9156 = ((function (G__9148_9154,G__9149_9155,d_9153){
return (function (){
var G__9151 = general.info.scroll_top;
var G__9152 = d_9153.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9151,G__9152) : cljs.core.reset_BANG_.call(null,G__9151,G__9152));
});})(G__9148_9154,G__9149_9155,d_9153))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9148_9154,G__9149_9155,G__9150_9156) : tailrecursion.hoplon.on_BANG_.call(null,G__9148_9154,G__9149_9155,G__9150_9156));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__9157 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__9158 = (0);
return setTimeout(G__9157,G__9158);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__9160,G__9159,G__9161){
return [cljs.core.str("50% "),cljs.core.str((((G__9159 + G__9160) - G__9161) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__9168 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__9173,G__9170,G__9172,G__9171){
var e = (G__9170.cljs$core$IFn$_invoke$arity$1 ? G__9170.cljs$core$IFn$_invoke$arity$1(G__9171) : G__9170.call(null,G__9171));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__9172);
var s_bot__$1 = (G__9173 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__1425_SHARP_,p2__1424_SHARP_){
var G__9174 = elem;
var G__9175 = cljs.core.boolean$(p2__1424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__9174,G__9175) : callback.call(null,G__9174,G__9175));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__9169 = (0);
return setTimeout(G__9168,G__9169);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__9188 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__9192,G__9190,G__9191){
return ((G__9190 + G__9191) - G__9192);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__9194,G__9193){
return (G__9193 + G__9194);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__9197,G__9195,G__9196){
return ((G__9195 - G__9196) / (G__9197 - G__9196));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__9198){
if(cljs.core.truth_((((0) <= G__9198)) && ((G__9198 <= (1))))){
return G__9198;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__1427_SHARP_,p2__1426_SHARP_){
var G__9199 = elem;
var G__9200 = prcnt;
var G__9201 = cljs.core.boolean$(p2__1426_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__9199,G__9200,G__9201) : callback.call(null,G__9199,G__9200,G__9201));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__9189 = (0);
return setTimeout(G__9188,G__9189);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__9206 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__9208,G__9210,G__9209){
var e = (G__9208.cljs$core$IFn$_invoke$arity$1 ? G__9208.cljs$core$IFn$_invoke$arity$1(G__9209) : G__9208.call(null,G__9209));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__9210))) && ((((50) + G__9210) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__1429_SHARP_,p2__1428_SHARP_){
var G__9211 = cljs.core.boolean$(p2__1428_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__9211) : callback.call(null,G__9211));
});})(e_top,e_bot,c))
);
});
var G__9207 = (0);
return setTimeout(G__9206,G__9207);
}));
