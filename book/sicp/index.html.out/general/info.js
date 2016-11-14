// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args202476 = [];
var len__5881__auto___202481 = arguments.length;
var i__5882__auto___202482 = (0);
while(true){
if((i__5882__auto___202482 < len__5881__auto___202481)){
args202476.push((arguments[i__5882__auto___202482]));

var G__202483 = (i__5882__auto___202482 + (1));
i__5882__auto___202482 = G__202483;
continue;
} else {
}
break;
}

var G__202478 = args202476.length;
switch (G__202478) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202476.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__202479_202485 = init;
var G__202480_202486 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__202479_202485,G__202480_202486) : f.call(null,G__202479_202485,G__202480_202486));

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
general.info.route = tailrecursion.javelin.formula((function (G__202490,G__202494,G__202489,G__202493,G__202492,G__202491){
var G__202495 = cljs.core.PersistentArrayMap.EMPTY;
var G__202496 = (function (){var G__202497 = ((function (G__202495){
return (function (p__202487){
var vec__202488 = p__202487;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202488,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__202491.cljs$core$IFn$_invoke$arity$1 ? G__202491.cljs$core$IFn$_invoke$arity$1(k) : G__202491.call(null,k)),v], null);
});})(G__202495))
;
var G__202498 = (function (){var G__202499 = (2);
var G__202500 = (G__202493.cljs$core$IFn$_invoke$arity$2 ? G__202493.cljs$core$IFn$_invoke$arity$2(G__202494,/\//) : G__202493.call(null,G__202494,/\//));
return (G__202492.cljs$core$IFn$_invoke$arity$2 ? G__202492.cljs$core$IFn$_invoke$arity$2(G__202499,G__202500) : G__202492.call(null,G__202499,G__202500));
})();
return (G__202490.cljs$core$IFn$_invoke$arity$2 ? G__202490.cljs$core$IFn$_invoke$arity$2(G__202497,G__202498) : G__202490.call(null,G__202497,G__202498));
})();
return (G__202489.cljs$core$IFn$_invoke$arity$2 ? G__202489.cljs$core$IFn$_invoke$arity$2(G__202495,G__202496) : G__202489.call(null,G__202495,G__202496));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__202504,G__202503,G__202507,G__202508,G__202506,G__202505){
var G__202509 = cljs.core.PersistentArrayMap.EMPTY;
var G__202510 = (function (){var G__202511 = ((function (G__202509){
return (function (p__202501){
var vec__202502 = p__202501;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202502,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202502,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__202505.cljs$core$IFn$_invoke$arity$1 ? G__202505.cljs$core$IFn$_invoke$arity$1(k) : G__202505.call(null,k)),v], null);
});})(G__202509))
;
var G__202512 = (function (){var G__202513 = (2);
var G__202514 = (G__202507.cljs$core$IFn$_invoke$arity$2 ? G__202507.cljs$core$IFn$_invoke$arity$2(G__202508,/\//) : G__202507.call(null,G__202508,/\//));
return (G__202506.cljs$core$IFn$_invoke$arity$2 ? G__202506.cljs$core$IFn$_invoke$arity$2(G__202513,G__202514) : G__202506.call(null,G__202513,G__202514));
})();
return (G__202504.cljs$core$IFn$_invoke$arity$2 ? G__202504.cljs$core$IFn$_invoke$arity$2(G__202511,G__202512) : G__202504.call(null,G__202511,G__202512));
})();
return (G__202503.cljs$core$IFn$_invoke$arity$2 ? G__202503.cljs$core$IFn$_invoke$arity$2(G__202509,G__202510) : G__202503.call(null,G__202509,G__202510));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_202522 = jQuery(window);
var G__202517_202523 = w_202522;
var G__202518_202524 = cljs.core.cst$kw$resize;
var G__202519_202525 = ((function (G__202517_202523,G__202518_202524,w_202522){
return (function (){
var G__202520 = general.info.screen_height;
var G__202521 = w_202522.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__202520,G__202521) : cljs.core.reset_BANG_.call(null,G__202520,G__202521));
});})(G__202517_202523,G__202518_202524,w_202522))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__202517_202523,G__202518_202524,G__202519_202525) : tailrecursion.hoplon.on_BANG_.call(null,G__202517_202523,G__202518_202524,G__202519_202525));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_202533 = jQuery(document);
var G__202528_202534 = d_202533;
var G__202529_202535 = cljs.core.cst$kw$scroll;
var G__202530_202536 = ((function (G__202528_202534,G__202529_202535,d_202533){
return (function (){
var G__202531 = general.info.scroll_top;
var G__202532 = d_202533.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__202531,G__202532) : cljs.core.reset_BANG_.call(null,G__202531,G__202532));
});})(G__202528_202534,G__202529_202535,d_202533))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__202528_202534,G__202529_202535,G__202530_202536) : tailrecursion.hoplon.on_BANG_.call(null,G__202528_202534,G__202529_202535,G__202530_202536));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__202537 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__202538 = (0);
return setTimeout(G__202537,G__202538);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__202540,G__202539,G__202541){
return [cljs.core.str("50% "),cljs.core.str((((G__202539 + G__202540) - G__202541) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__202548 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__202553,G__202550,G__202552,G__202551){
var e = (G__202550.cljs$core$IFn$_invoke$arity$1 ? G__202550.cljs$core$IFn$_invoke$arity$1(G__202551) : G__202550.call(null,G__202551));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__202552);
var s_bot__$1 = (G__202553 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__1425_SHARP_,p2__1424_SHARP_){
var G__202554 = elem;
var G__202555 = cljs.core.boolean$(p2__1424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__202554,G__202555) : callback.call(null,G__202554,G__202555));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__202549 = (0);
return setTimeout(G__202548,G__202549);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__202568 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__202572,G__202570,G__202571){
return ((G__202570 + G__202571) - G__202572);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__202574,G__202573){
return (G__202573 + G__202574);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__202577,G__202575,G__202576){
return ((G__202575 - G__202576) / (G__202577 - G__202576));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__202578){
if(cljs.core.truth_((((0) <= G__202578)) && ((G__202578 <= (1))))){
return G__202578;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__1427_SHARP_,p2__1426_SHARP_){
var G__202579 = elem;
var G__202580 = prcnt;
var G__202581 = cljs.core.boolean$(p2__1426_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__202579,G__202580,G__202581) : callback.call(null,G__202579,G__202580,G__202581));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__202569 = (0);
return setTimeout(G__202568,G__202569);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__202586 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__202588,G__202590,G__202589){
var e = (G__202588.cljs$core$IFn$_invoke$arity$1 ? G__202588.cljs$core$IFn$_invoke$arity$1(G__202589) : G__202588.call(null,G__202589));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__202590))) && ((((50) + G__202590) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__1429_SHARP_,p2__1428_SHARP_){
var G__202591 = cljs.core.boolean$(p2__1428_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__202591) : callback.call(null,G__202591));
});})(e_top,e_bot,c))
);
});
var G__202587 = (0);
return setTimeout(G__202586,G__202587);
}));
