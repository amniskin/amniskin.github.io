// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.home = null;
general.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.info.home], 0));
general.info.route = tailrecursion.javelin.formula((function (G__9275,G__9279,G__9274,G__9278,G__9277,G__9276){
var G__9280 = cljs.core.PersistentArrayMap.EMPTY;
var G__9281 = (function (){var G__9282 = ((function (G__9280){
return (function (p__9272){
var vec__9273 = p__9272;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9276.cljs$core$IFn$_invoke$arity$1 ? G__9276.cljs$core$IFn$_invoke$arity$1(k) : G__9276.call(null,k)),v], null);
});})(G__9280))
;
var G__9283 = (function (){var G__9284 = (2);
var G__9285 = (G__9278.cljs$core$IFn$_invoke$arity$2 ? G__9278.cljs$core$IFn$_invoke$arity$2(G__9279,/\//) : G__9278.call(null,G__9279,/\//));
return (G__9277.cljs$core$IFn$_invoke$arity$2 ? G__9277.cljs$core$IFn$_invoke$arity$2(G__9284,G__9285) : G__9277.call(null,G__9284,G__9285));
})();
return (G__9275.cljs$core$IFn$_invoke$arity$2 ? G__9275.cljs$core$IFn$_invoke$arity$2(G__9282,G__9283) : G__9275.call(null,G__9282,G__9283));
})();
return (G__9274.cljs$core$IFn$_invoke$arity$2 ? G__9274.cljs$core$IFn$_invoke$arity$2(G__9280,G__9281) : G__9274.call(null,G__9280,G__9281));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__9289,G__9288,G__9292,G__9293,G__9291,G__9290){
var G__9294 = cljs.core.PersistentArrayMap.EMPTY;
var G__9295 = (function (){var G__9296 = ((function (G__9294){
return (function (p__9286){
var vec__9287 = p__9286;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9287,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__9290.cljs$core$IFn$_invoke$arity$1 ? G__9290.cljs$core$IFn$_invoke$arity$1(k) : G__9290.call(null,k)),v], null);
});})(G__9294))
;
var G__9297 = (function (){var G__9298 = (2);
var G__9299 = (G__9292.cljs$core$IFn$_invoke$arity$2 ? G__9292.cljs$core$IFn$_invoke$arity$2(G__9293,/\//) : G__9292.call(null,G__9293,/\//));
return (G__9291.cljs$core$IFn$_invoke$arity$2 ? G__9291.cljs$core$IFn$_invoke$arity$2(G__9298,G__9299) : G__9291.call(null,G__9298,G__9299));
})();
return (G__9289.cljs$core$IFn$_invoke$arity$2 ? G__9289.cljs$core$IFn$_invoke$arity$2(G__9296,G__9297) : G__9289.call(null,G__9296,G__9297));
})();
return (G__9288.cljs$core$IFn$_invoke$arity$2 ? G__9288.cljs$core$IFn$_invoke$arity$2(G__9294,G__9295) : G__9288.call(null,G__9294,G__9295));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.do_watch = (function general$info$do_watch(){
var args9300 = [];
var len__6061__auto___9305 = arguments.length;
var i__6062__auto___9306 = (0);
while(true){
if((i__6062__auto___9306 < len__6061__auto___9305)){
args9300.push((arguments[i__6062__auto___9306]));

var G__9307 = (i__6062__auto___9306 + (1));
i__6062__auto___9306 = G__9307;
continue;
} else {
}
break;
}

var G__9302 = args9300.length;
switch (G__9302) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9300.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__9303_9309 = init;
var G__9304_9310 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9303_9309,G__9304_9310) : f.call(null,G__9303_9309,G__9304_9310));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

general.info.do_watch.cljs$lang$maxFixedArity = 3;
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_9318 = jQuery(window);
var G__9313_9319 = w_9318;
var G__9314_9320 = cljs.core.cst$kw$resize;
var G__9315_9321 = ((function (G__9313_9319,G__9314_9320,w_9318){
return (function (){
var G__9316 = general.info.screen_height;
var G__9317 = w_9318.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9316,G__9317) : cljs.core.reset_BANG_.call(null,G__9316,G__9317));
});})(G__9313_9319,G__9314_9320,w_9318))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9313_9319,G__9314_9320,G__9315_9321) : tailrecursion.hoplon.on_BANG_.call(null,G__9313_9319,G__9314_9320,G__9315_9321));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_9329 = jQuery(document);
var G__9324_9330 = d_9329;
var G__9325_9331 = cljs.core.cst$kw$scroll;
var G__9326_9332 = ((function (G__9324_9330,G__9325_9331,d_9329){
return (function (){
var G__9327 = general.info.scroll_top;
var G__9328 = d_9329.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9327,G__9328) : cljs.core.reset_BANG_.call(null,G__9327,G__9328));
});})(G__9324_9330,G__9325_9331,d_9329))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__9324_9330,G__9325_9331,G__9326_9332) : tailrecursion.hoplon.on_BANG_.call(null,G__9324_9330,G__9325_9331,G__9326_9332));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__9333 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__9334 = (0);
return setTimeout(G__9333,G__9334);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__9336,G__9335,G__9337){
return [cljs.core.str("50% "),cljs.core.str((((G__9335 + G__9336) - G__9337) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__9344 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__9349,G__9346,G__9348,G__9347){
var e = (G__9346.cljs$core$IFn$_invoke$arity$1 ? G__9346.cljs$core$IFn$_invoke$arity$1(G__9347) : G__9346.call(null,G__9347));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__9348);
var s_bot__$1 = (G__9349 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4421_SHARP_,p2__4420_SHARP_){
var G__9350 = elem;
var G__9351 = cljs.core.boolean$(p2__4420_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__9350,G__9351) : callback.call(null,G__9350,G__9351));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__9345 = (0);
return setTimeout(G__9344,G__9345);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__9364 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__9368,G__9366,G__9367){
return ((G__9366 + G__9367) - G__9368);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__9370,G__9369){
return (G__9369 + G__9370);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__9373,G__9371,G__9372){
return ((G__9371 - G__9372) / (G__9373 - G__9372));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__9374){
if(cljs.core.truth_((((0) <= G__9374)) && ((G__9374 <= (1))))){
return G__9374;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4423_SHARP_,p2__4422_SHARP_){
var G__9375 = elem;
var G__9376 = prcnt;
var G__9377 = cljs.core.boolean$(p2__4422_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__9375,G__9376,G__9377) : callback.call(null,G__9375,G__9376,G__9377));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__9365 = (0);
return setTimeout(G__9364,G__9365);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__9382 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__9384,G__9386,G__9385){
var e = (G__9384.cljs$core$IFn$_invoke$arity$1 ? G__9384.cljs$core$IFn$_invoke$arity$1(G__9385) : G__9384.call(null,G__9385));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__9386))) && ((((50) + G__9386) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4425_SHARP_,p2__4424_SHARP_){
var G__9387 = cljs.core.boolean$(p2__4424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__9387) : callback.call(null,G__9387));
});})(e_top,e_bot,c))
);
});
var G__9383 = (0);
return setTimeout(G__9382,G__9383);
}));
