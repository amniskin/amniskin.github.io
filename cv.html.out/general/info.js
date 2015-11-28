// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args9276 = [];
var len__6061__auto___9281 = arguments.length;
var i__6062__auto___9282 = (0);
while(true){
if((i__6062__auto___9282 < len__6061__auto___9281)){
args9276.push((arguments[i__6062__auto___9282]));

var G__9283 = (i__6062__auto___9282 + (1));
i__6062__auto___9282 = G__9283;
continue;
} else {
}
break;
}

var G__9278 = args9276.length;
switch (G__9278) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9276.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__9279_9285 = init;
var G__9280_9286 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9279_9285,G__9280_9286) : f.call(null,G__9279_9285,G__9280_9286));

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
general.info.route = tailrecursion.javelin.formula((function (G__9290,G__9294,G__9289,G__9293,G__9292,G__9291){
var G__9295 = cljs.core.PersistentArrayMap.EMPTY;
var G__9296 = (function (){var G__9297 = ((function (G__9295){
return (function (p__9287){
var vec__9288 = p__9287;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9288,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9291.cljs$core$IFn$_invoke$arity$1 ? G__9291.cljs$core$IFn$_invoke$arity$1(k) : G__9291.call(null,k)),v], null);
});})(G__9295))
;
var G__9298 = (function (){var G__9299 = (2);
var G__9300 = (G__9293.cljs$core$IFn$_invoke$arity$2 ? G__9293.cljs$core$IFn$_invoke$arity$2(G__9294,/\//) : G__9293.call(null,G__9294,/\//));
return (G__9292.cljs$core$IFn$_invoke$arity$2 ? G__9292.cljs$core$IFn$_invoke$arity$2(G__9299,G__9300) : G__9292.call(null,G__9299,G__9300));
})();
return (G__9290.cljs$core$IFn$_invoke$arity$2 ? G__9290.cljs$core$IFn$_invoke$arity$2(G__9297,G__9298) : G__9290.call(null,G__9297,G__9298));
})();
return (G__9289.cljs$core$IFn$_invoke$arity$2 ? G__9289.cljs$core$IFn$_invoke$arity$2(G__9295,G__9296) : G__9289.call(null,G__9295,G__9296));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__9304,G__9303,G__9307,G__9308,G__9306,G__9305){
var G__9309 = cljs.core.PersistentArrayMap.EMPTY;
var G__9310 = (function (){var G__9311 = ((function (G__9309){
return (function (p__9301){
var vec__9302 = p__9301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9305.cljs$core$IFn$_invoke$arity$1 ? G__9305.cljs$core$IFn$_invoke$arity$1(k) : G__9305.call(null,k)),v], null);
});})(G__9309))
;
var G__9312 = (function (){var G__9313 = (2);
var G__9314 = (G__9307.cljs$core$IFn$_invoke$arity$2 ? G__9307.cljs$core$IFn$_invoke$arity$2(G__9308,/\//) : G__9307.call(null,G__9308,/\//));
return (G__9306.cljs$core$IFn$_invoke$arity$2 ? G__9306.cljs$core$IFn$_invoke$arity$2(G__9313,G__9314) : G__9306.call(null,G__9313,G__9314));
})();
return (G__9304.cljs$core$IFn$_invoke$arity$2 ? G__9304.cljs$core$IFn$_invoke$arity$2(G__9311,G__9312) : G__9304.call(null,G__9311,G__9312));
})();
return (G__9303.cljs$core$IFn$_invoke$arity$2 ? G__9303.cljs$core$IFn$_invoke$arity$2(G__9309,G__9310) : G__9303.call(null,G__9309,G__9310));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_9322 = jQuery(window);
var G__9317_9323 = w_9322;
var G__9318_9324 = cljs.core.cst$kw$resize;
var G__9319_9325 = ((function (G__9317_9323,G__9318_9324,w_9322){
return (function (){
var G__9320 = general.info.screen_height;
var G__9321 = w_9322.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9320,G__9321) : cljs.core.reset_BANG_.call(null,G__9320,G__9321));
});})(G__9317_9323,G__9318_9324,w_9322))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9317_9323,G__9318_9324,G__9319_9325) : tailrecursion.hoplon.on_BANG_.call(null,G__9317_9323,G__9318_9324,G__9319_9325));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_9333 = jQuery(document);
var G__9328_9334 = d_9333;
var G__9329_9335 = cljs.core.cst$kw$scroll;
var G__9330_9336 = ((function (G__9328_9334,G__9329_9335,d_9333){
return (function (){
var G__9331 = general.info.scroll_top;
var G__9332 = d_9333.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9331,G__9332) : cljs.core.reset_BANG_.call(null,G__9331,G__9332));
});})(G__9328_9334,G__9329_9335,d_9333))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9328_9334,G__9329_9335,G__9330_9336) : tailrecursion.hoplon.on_BANG_.call(null,G__9328_9334,G__9329_9335,G__9330_9336));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__9337 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__9338 = (0);
return setTimeout(G__9337,G__9338);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__9340,G__9339,G__9341){
return [cljs.core.str("50% "),cljs.core.str((((G__9339 + G__9340) - G__9341) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__9348 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__9353,G__9350,G__9352,G__9351){
var e = (G__9350.cljs$core$IFn$_invoke$arity$1 ? G__9350.cljs$core$IFn$_invoke$arity$1(G__9351) : G__9350.call(null,G__9351));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__9352);
var s_bot__$1 = (G__9353 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__3092_SHARP_,p2__3091_SHARP_){
var G__9354 = elem;
var G__9355 = cljs.core.boolean$(p2__3091_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__9354,G__9355) : callback.call(null,G__9354,G__9355));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__9349 = (0);
return setTimeout(G__9348,G__9349);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__9368 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__9372,G__9370,G__9371){
return ((G__9370 + G__9371) - G__9372);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__9374,G__9373){
return (G__9373 + G__9374);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__9377,G__9375,G__9376){
return ((G__9375 - G__9376) / (G__9377 - G__9376));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__9378){
if(cljs.core.truth_((((0) <= G__9378)) && ((G__9378 <= (1))))){
return G__9378;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__3094_SHARP_,p2__3093_SHARP_){
var G__9379 = elem;
var G__9380 = prcnt;
var G__9381 = cljs.core.boolean$(p2__3093_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__9379,G__9380,G__9381) : callback.call(null,G__9379,G__9380,G__9381));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__9369 = (0);
return setTimeout(G__9368,G__9369);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__9386 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__9388,G__9390,G__9389){
var e = (G__9388.cljs$core$IFn$_invoke$arity$1 ? G__9388.cljs$core$IFn$_invoke$arity$1(G__9389) : G__9388.call(null,G__9389));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__9390))) && ((((50) + G__9390) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__3096_SHARP_,p2__3095_SHARP_){
var G__9391 = cljs.core.boolean$(p2__3095_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__9391) : callback.call(null,G__9391));
});})(e_top,e_bot,c))
);
});
var G__9387 = (0);
return setTimeout(G__9386,G__9387);
}));
