// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ui.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.info.nav_active = tailrecursion.javelin.cell(null);
ui.info.nav_height = (50);
ui.info.scroll_location = tailrecursion.javelin.cell(null);
ui.info.do_watch = (function ui$info$do_watch(){
var G__86311 = arguments.length;
switch (G__86311) {
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
var G__86312_86318 = init;
var G__86313_86319 = (function (){var G__86314 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__86314) : cljs.core.deref.call(null,G__86314));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__86312_86318,G__86313_86319) : f.call(null,G__86312_86318,G__86313_86319));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
var G__86315 = old;
var G__86316 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__86315,G__86316) : f.call(null,G__86315,G__86316));
});})(k))
);

return k;
});

ui.info.do_watch.cljs$lang$maxFixedArity = 3;
ui.info.screen_height = tailrecursion.javelin.cell((function (){var G__86320 = window;
return jQuery(G__86320);
})().height());
ui.info.scroll_top = tailrecursion.javelin.cell((0));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
var G__86321 = (function (){
if(cljs.core.truth_(v)){
var body = (function (){var G__86323 = "body,html";
return jQuery(G__86323);
})();
var elem__$1 = (function (){var G__86324 = elem;
return jQuery(G__86324);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,(elem__$1.offset().top - ui.info.nav_height)], null)));
} else {
return null;
}
});
var G__86322 = (0);
return setTimeout(G__86321,G__86322);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = (function (){var G__86325 = elem;
return jQuery(G__86325);
})();
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__86327,G__86326,G__86328){
return [cljs.core.str("50% "),cljs.core.str((((G__86326 + G__86327) - G__86328) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,ui.info.screen_height,ui.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
var d_86335 = (function (){var G__86329 = document;
return jQuery(G__86329);
})();
var G__86330_86336 = d_86335;
var G__86331_86337 = cljs.core.constant$keyword$scroll;
var G__86332_86338 = ((function (G__86330_86336,G__86331_86337,d_86335){
return (function (){
var G__86333 = ui.info.scroll_top;
var G__86334 = d_86335.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86333,G__86334) : cljs.core.reset_BANG_.call(null,G__86333,G__86334));
});})(G__86330_86336,G__86331_86337,d_86335))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__86330_86336,G__86331_86337,G__86332_86338) : tailrecursion.hoplon.on_BANG_.call(null,G__86330_86336,G__86331_86337,G__86332_86338));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen,(function (elem,k,callback){
var G__86339 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__86344,G__86341,G__86343,G__86342){
var e = (function (){var G__86345 = G__86342;
return (G__86341.cljs$core$IFn$_invoke$arity$1 ? G__86341.cljs$core$IFn$_invoke$arity$1(G__86345) : G__86341.call(null,G__86345));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__86343);
var s_bot__$1 = (G__86344 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,ui.info.screen_height,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4586_SHARP_,p2__4585_SHARP_){
var G__86346 = elem;
var G__86347 = cljs.core.boolean$(p2__4585_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__86346,G__86347) : callback.call(null,G__86346,G__86347));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__86340 = (0);
return setTimeout(G__86339,G__86340);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__86348 = (function (){
var e = (function (){var G__86350 = elem;
return jQuery(G__86350);
})();
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__86353,G__86351,G__86352){
return ((G__86351 + G__86352) - G__86353);
});})(e,e_top,e_bot))
).call(null,ui.info.screen_height,e_top,ui.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__86355,G__86354){
return (G__86354 + G__86355);
});})(e,e_top,e_bot,begin))
).call(null,ui.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__86358,G__86356,G__86357){
return ((G__86356 - G__86357) / (G__86358 - G__86357));
});})(e,e_top,e_bot,begin,end))
).call(null,end,ui.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__86359){
if(cljs.core.truth_((((0) <= G__86359)) && ((G__86359 <= (1))))){
return G__86359;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4588_SHARP_,p2__4587_SHARP_){
var G__86360 = elem;
var G__86361 = prcnt;
var G__86362 = cljs.core.boolean$(p2__4587_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__86360,G__86361,G__86362) : callback.call(null,G__86360,G__86361,G__86362));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__86349 = (0);
return setTimeout(G__86348,G__86349);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$at_DASH_top,(function (elem,k,callback){
var G__86363 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__86365,G__86367,G__86366){
var e = (function (){var G__86368 = G__86366;
return (G__86365.cljs$core$IFn$_invoke$arity$1 ? G__86365.cljs$core$IFn$_invoke$arity$1(G__86368) : G__86365.call(null,G__86368));
})();
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__86367))) && ((((50) + G__86367) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4590_SHARP_,p2__4589_SHARP_){
var G__86369 = cljs.core.boolean$(p2__4589_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__86369) : callback.call(null,G__86369));
});})(e_top,e_bot,c))
);
});
var G__86364 = (0);
return setTimeout(G__86363,G__86364);
}));
var w_86376 = (function (){var G__86370 = window;
return jQuery(G__86370);
})();
var G__86371_86377 = w_86376;
var G__86372_86378 = cljs.core.constant$keyword$resize;
var G__86373_86379 = ((function (G__86371_86377,G__86372_86378,w_86376){
return (function (){
var G__86374 = ui.info.screen_height;
var G__86375 = w_86376.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__86374,G__86375) : cljs.core.reset_BANG_.call(null,G__86374,G__86375));
});})(G__86371_86377,G__86372_86378,w_86376))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__86371_86377,G__86372_86378,G__86373_86379) : tailrecursion.hoplon.on_BANG_.call(null,G__86371_86377,G__86372_86378,G__86373_86379));
ui.info.home = "#!/home/";
ui.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ui.info.home], 0));
ui.info.route = tailrecursion.javelin.formula((function (G__86383,G__86387,G__86382,G__86386,G__86385,G__86384){
var G__86388 = cljs.core.PersistentArrayMap.EMPTY;
var G__86389 = (function (){var G__86390 = ((function (G__86388){
return (function (p__86380){
var vec__86381 = p__86380;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86381,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__86392 = k;
return (G__86384.cljs$core$IFn$_invoke$arity$1 ? G__86384.cljs$core$IFn$_invoke$arity$1(G__86392) : G__86384.call(null,G__86392));
})(),v], null);
});})(G__86388))
;
var G__86391 = (function (){var G__86393 = (2);
var G__86394 = (function (){var G__86395 = G__86387;
var G__86396 = /\//;
return (G__86386.cljs$core$IFn$_invoke$arity$2 ? G__86386.cljs$core$IFn$_invoke$arity$2(G__86395,G__86396) : G__86386.call(null,G__86395,G__86396));
})();
return (G__86385.cljs$core$IFn$_invoke$arity$2 ? G__86385.cljs$core$IFn$_invoke$arity$2(G__86393,G__86394) : G__86385.call(null,G__86393,G__86394));
})();
return (G__86383.cljs$core$IFn$_invoke$arity$2 ? G__86383.cljs$core$IFn$_invoke$arity$2(G__86390,G__86391) : G__86383.call(null,G__86390,G__86391));
})();
return (G__86382.cljs$core$IFn$_invoke$arity$2 ? G__86382.cljs$core$IFn$_invoke$arity$2(G__86388,G__86389) : G__86382.call(null,G__86388,G__86389));
})).call(null,cljs.core.map,ui.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
ui.info.location = tailrecursion.javelin.formula((function (G__86397){
var G__86398 = cljs.core.constant$keyword$_SHARP__BANG_;
return (G__86397.cljs$core$IFn$_invoke$arity$1 ? G__86397.cljs$core$IFn$_invoke$arity$1(G__86398) : G__86397.call(null,G__86398));
})).call(null,ui.info.route);
