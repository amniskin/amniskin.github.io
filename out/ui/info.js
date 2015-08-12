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
var G__86315 = arguments.length;
switch (G__86315) {
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
var G__86316_86322 = init;
var G__86317_86323 = (function (){var G__86318 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86318) : cljs.core.deref.call(null,G__86318));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__86316_86322,G__86317_86323) : f.call(null,G__86316_86322,G__86317_86323));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
var G__86319 = old;
var G__86320 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__86319,G__86320) : f.call(null,G__86319,G__86320));
});})(k))
);

return k;
});

ui.info.do_watch.cljs$lang$maxFixedArity = 3;
ui.info.screen_height = tailrecursion.javelin.cell((function (){var G__86324 = window;
return jQuery(G__86324);
})().height());
ui.info.scroll_top = tailrecursion.javelin.cell((0));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
var G__86325 = (function (){
if(cljs.core.truth_(v)){
var body = (function (){var G__86327 = "body,html";
return jQuery(G__86327);
})();
var elem__$1 = (function (){var G__86328 = elem;
return jQuery(G__86328);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,(elem__$1.offset().top - ui.info.nav_height)], null)));
} else {
return null;
}
});
var G__86326 = (0);
return setTimeout(G__86325,G__86326);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = (function (){var G__86329 = elem;
return jQuery(G__86329);
})();
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__86331,G__86330,G__86332){
return [cljs.core.str("50% "),cljs.core.str((((G__86330 + G__86331) - G__86332) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,ui.info.screen_height,ui.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
var d_86339 = (function (){var G__86333 = document;
return jQuery(G__86333);
})();
var G__86334_86340 = d_86339;
var G__86335_86341 = cljs.core.constant$keyword$scroll;
var G__86336_86342 = ((function (G__86334_86340,G__86335_86341,d_86339){
return (function (){
var G__86337 = ui.info.scroll_top;
var G__86338 = d_86339.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86337,G__86338) : cljs.core.reset_BANG_.call(null,G__86337,G__86338));
});})(G__86334_86340,G__86335_86341,d_86339))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__86334_86340,G__86335_86341,G__86336_86342) : tailrecursion.hoplon.on_BANG_.call(null,G__86334_86340,G__86335_86341,G__86336_86342));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen,(function (elem,k,callback){
var G__86343 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__86348,G__86345,G__86347,G__86346){
var e = (function (){var G__86349 = G__86346;
return (G__86345.cljs$core$IFn$_invoke$arity$1 ? G__86345.cljs$core$IFn$_invoke$arity$1(G__86349) : G__86345.call(null,G__86349));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__86347);
var s_bot__$1 = (G__86348 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,ui.info.screen_height,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__3255_SHARP_,p2__3254_SHARP_){
var G__86350 = elem;
var G__86351 = cljs.core.boolean$(p2__3254_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__86350,G__86351) : callback.call(null,G__86350,G__86351));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__86344 = (0);
return setTimeout(G__86343,G__86344);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__86352 = (function (){
var e = (function (){var G__86354 = elem;
return jQuery(G__86354);
})();
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__86357,G__86355,G__86356){
return ((G__86355 + G__86356) - G__86357);
});})(e,e_top,e_bot))
).call(null,ui.info.screen_height,e_top,ui.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__86359,G__86358){
return (G__86358 + G__86359);
});})(e,e_top,e_bot,begin))
).call(null,ui.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__86362,G__86360,G__86361){
return ((G__86360 - G__86361) / (G__86362 - G__86361));
});})(e,e_top,e_bot,begin,end))
).call(null,end,ui.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__86363){
if(cljs.core.truth_((((0) <= G__86363)) && ((G__86363 <= (1))))){
return G__86363;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__3257_SHARP_,p2__3256_SHARP_){
var G__86364 = elem;
var G__86365 = prcnt;
var G__86366 = cljs.core.boolean$(p2__3256_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__86364,G__86365,G__86366) : callback.call(null,G__86364,G__86365,G__86366));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__86353 = (0);
return setTimeout(G__86352,G__86353);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$at_DASH_top,(function (elem,k,callback){
var G__86367 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__86369,G__86371,G__86370){
var e = (function (){var G__86372 = G__86370;
return (G__86369.cljs$core$IFn$_invoke$arity$1 ? G__86369.cljs$core$IFn$_invoke$arity$1(G__86372) : G__86369.call(null,G__86372));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__86371))) && ((((50) + G__86371) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__3259_SHARP_,p2__3258_SHARP_){
var G__86373 = cljs.core.boolean$(p2__3258_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__86373) : callback.call(null,G__86373));
});})(e_top,e_bot,c))
);
});
var G__86368 = (0);
return setTimeout(G__86367,G__86368);
}));
var w_86380 = (function (){var G__86374 = window;
return jQuery(G__86374);
})();
var G__86375_86381 = w_86380;
var G__86376_86382 = cljs.core.constant$keyword$resize;
var G__86377_86383 = ((function (G__86375_86381,G__86376_86382,w_86380){
return (function (){
var G__86378 = ui.info.screen_height;
var G__86379 = w_86380.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86378,G__86379) : cljs.core.reset_BANG_.call(null,G__86378,G__86379));
});})(G__86375_86381,G__86376_86382,w_86380))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__86375_86381,G__86376_86382,G__86377_86383) : tailrecursion.hoplon.on_BANG_.call(null,G__86375_86381,G__86376_86382,G__86377_86383));
ui.info.home = "#!/home/";
ui.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.info.home], 0));
ui.info.route = tailrecursion.javelin.formula((function (G__86387,G__86391,G__86386,G__86390,G__86389,G__86388){
var G__86392 = cljs.core.PersistentArrayMap.EMPTY;
var G__86393 = (function (){var G__86394 = ((function (G__86392){
return (function (p__86384){
var vec__86385 = p__86384;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86385,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__86396 = k;
return (G__86388.cljs$core$IFn$_invoke$arity$1 ? G__86388.cljs$core$IFn$_invoke$arity$1(G__86396) : G__86388.call(null,G__86396));
})(),v], null);
});})(G__86392))
;
var G__86395 = (function (){var G__86397 = (2);
var G__86398 = (function (){var G__86399 = G__86391;
var G__86400 = /\//;
return (G__86390.cljs$core$IFn$_invoke$arity$2 ? G__86390.cljs$core$IFn$_invoke$arity$2(G__86399,G__86400) : G__86390.call(null,G__86399,G__86400));
})();
return (G__86389.cljs$core$IFn$_invoke$arity$2 ? G__86389.cljs$core$IFn$_invoke$arity$2(G__86397,G__86398) : G__86389.call(null,G__86397,G__86398));
})();
return (G__86387.cljs$core$IFn$_invoke$arity$2 ? G__86387.cljs$core$IFn$_invoke$arity$2(G__86394,G__86395) : G__86387.call(null,G__86394,G__86395));
})();
return (G__86386.cljs$core$IFn$_invoke$arity$2 ? G__86386.cljs$core$IFn$_invoke$arity$2(G__86392,G__86393) : G__86386.call(null,G__86392,G__86393));
})).call(null,cljs.core.map,ui.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
ui.info.location = tailrecursion.javelin.formula((function (G__86401){
var G__86402 = cljs.core.constant$keyword$_SHARP__BANG_;
return (G__86401.cljs$core$IFn$_invoke$arity$1 ? G__86401.cljs$core$IFn$_invoke$arity$1(G__86402) : G__86401.call(null,G__86402));
})).call(null,ui.info.route);
