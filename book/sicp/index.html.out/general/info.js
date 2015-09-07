// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args181272 = [];
var len__6061__auto___181277 = arguments.length;
var i__6062__auto___181278 = (0);
while(true){
if((i__6062__auto___181278 < len__6061__auto___181277)){
args181272.push((arguments[i__6062__auto___181278]));

var G__181279 = (i__6062__auto___181278 + (1));
i__6062__auto___181278 = G__181279;
continue;
} else {
}
break;
}

var G__181274 = args181272.length;
switch (G__181274) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args181272.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__181275_181281 = init;
var G__181276_181282 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__181275_181281,G__181276_181282) : f.call(null,G__181275_181281,G__181276_181282));

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
general.info.route = tailrecursion.javelin.formula((function (G__181286,G__181290,G__181285,G__181289,G__181288,G__181287){
var G__181291 = cljs.core.PersistentArrayMap.EMPTY;
var G__181292 = (function (){var G__181293 = ((function (G__181291){
return (function (p__181283){
var vec__181284 = p__181283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181284,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__181287.cljs$core$IFn$_invoke$arity$1 ? G__181287.cljs$core$IFn$_invoke$arity$1(k) : G__181287.call(null,k)),v], null);
});})(G__181291))
;
var G__181294 = (function (){var G__181295 = (2);
var G__181296 = (G__181289.cljs$core$IFn$_invoke$arity$2 ? G__181289.cljs$core$IFn$_invoke$arity$2(G__181290,/\//) : G__181289.call(null,G__181290,/\//));
return (G__181288.cljs$core$IFn$_invoke$arity$2 ? G__181288.cljs$core$IFn$_invoke$arity$2(G__181295,G__181296) : G__181288.call(null,G__181295,G__181296));
})();
return (G__181286.cljs$core$IFn$_invoke$arity$2 ? G__181286.cljs$core$IFn$_invoke$arity$2(G__181293,G__181294) : G__181286.call(null,G__181293,G__181294));
})();
return (G__181285.cljs$core$IFn$_invoke$arity$2 ? G__181285.cljs$core$IFn$_invoke$arity$2(G__181291,G__181292) : G__181285.call(null,G__181291,G__181292));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__181300,G__181299,G__181303,G__181304,G__181302,G__181301){
var G__181305 = cljs.core.PersistentArrayMap.EMPTY;
var G__181306 = (function (){var G__181307 = ((function (G__181305){
return (function (p__181297){
var vec__181298 = p__181297;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181298,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__181298,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__181301.cljs$core$IFn$_invoke$arity$1 ? G__181301.cljs$core$IFn$_invoke$arity$1(k) : G__181301.call(null,k)),v], null);
});})(G__181305))
;
var G__181308 = (function (){var G__181309 = (2);
var G__181310 = (G__181303.cljs$core$IFn$_invoke$arity$2 ? G__181303.cljs$core$IFn$_invoke$arity$2(G__181304,/\//) : G__181303.call(null,G__181304,/\//));
return (G__181302.cljs$core$IFn$_invoke$arity$2 ? G__181302.cljs$core$IFn$_invoke$arity$2(G__181309,G__181310) : G__181302.call(null,G__181309,G__181310));
})();
return (G__181300.cljs$core$IFn$_invoke$arity$2 ? G__181300.cljs$core$IFn$_invoke$arity$2(G__181307,G__181308) : G__181300.call(null,G__181307,G__181308));
})();
return (G__181299.cljs$core$IFn$_invoke$arity$2 ? G__181299.cljs$core$IFn$_invoke$arity$2(G__181305,G__181306) : G__181299.call(null,G__181305,G__181306));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_181318 = jQuery(window);
var G__181313_181319 = w_181318;
var G__181314_181320 = cljs.core.cst$kw$resize;
var G__181315_181321 = ((function (G__181313_181319,G__181314_181320,w_181318){
return (function (){
var G__181316 = general.info.screen_height;
var G__181317 = w_181318.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__181316,G__181317) : cljs.core.reset_BANG_.call(null,G__181316,G__181317));
});})(G__181313_181319,G__181314_181320,w_181318))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__181313_181319,G__181314_181320,G__181315_181321) : tailrecursion.hoplon.on_BANG_.call(null,G__181313_181319,G__181314_181320,G__181315_181321));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_181329 = jQuery(document);
var G__181324_181330 = d_181329;
var G__181325_181331 = cljs.core.cst$kw$scroll;
var G__181326_181332 = ((function (G__181324_181330,G__181325_181331,d_181329){
return (function (){
var G__181327 = general.info.scroll_top;
var G__181328 = d_181329.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__181327,G__181328) : cljs.core.reset_BANG_.call(null,G__181327,G__181328));
});})(G__181324_181330,G__181325_181331,d_181329))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__181324_181330,G__181325_181331,G__181326_181332) : tailrecursion.hoplon.on_BANG_.call(null,G__181324_181330,G__181325_181331,G__181326_181332));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__181333 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__181334 = (0);
return setTimeout(G__181333,G__181334);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__181336,G__181335,G__181337){
return [cljs.core.str("50% "),cljs.core.str((((G__181335 + G__181336) - G__181337) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__181344 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__181349,G__181346,G__181348,G__181347){
var e = (G__181346.cljs$core$IFn$_invoke$arity$1 ? G__181346.cljs$core$IFn$_invoke$arity$1(G__181347) : G__181346.call(null,G__181347));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__181348);
var s_bot__$1 = (G__181349 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__3762_SHARP_,p2__3761_SHARP_){
var G__181350 = elem;
var G__181351 = cljs.core.boolean$(p2__3761_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__181350,G__181351) : callback.call(null,G__181350,G__181351));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__181345 = (0);
return setTimeout(G__181344,G__181345);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__181364 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__181368,G__181366,G__181367){
return ((G__181366 + G__181367) - G__181368);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__181370,G__181369){
return (G__181369 + G__181370);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__181373,G__181371,G__181372){
return ((G__181371 - G__181372) / (G__181373 - G__181372));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__181374){
if(cljs.core.truth_((((0) <= G__181374)) && ((G__181374 <= (1))))){
return G__181374;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__3764_SHARP_,p2__3763_SHARP_){
var G__181375 = elem;
var G__181376 = prcnt;
var G__181377 = cljs.core.boolean$(p2__3763_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__181375,G__181376,G__181377) : callback.call(null,G__181375,G__181376,G__181377));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__181365 = (0);
return setTimeout(G__181364,G__181365);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__181382 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__181384,G__181386,G__181385){
var e = (G__181384.cljs$core$IFn$_invoke$arity$1 ? G__181384.cljs$core$IFn$_invoke$arity$1(G__181385) : G__181384.call(null,G__181385));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__181386))) && ((((50) + G__181386) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__3766_SHARP_,p2__3765_SHARP_){
var G__181387 = cljs.core.boolean$(p2__3765_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__181387) : callback.call(null,G__181387));
});})(e_top,e_bot,c))
);
});
var G__181383 = (0);
return setTimeout(G__181382,G__181383);
}));
