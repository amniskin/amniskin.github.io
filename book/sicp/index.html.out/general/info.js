// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args202656 = [];
var len__6061__auto___202661 = arguments.length;
var i__6062__auto___202662 = (0);
while(true){
if((i__6062__auto___202662 < len__6061__auto___202661)){
args202656.push((arguments[i__6062__auto___202662]));

var G__202663 = (i__6062__auto___202662 + (1));
i__6062__auto___202662 = G__202663;
continue;
} else {
}
break;
}

var G__202658 = args202656.length;
switch (G__202658) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202656.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__202659_202665 = init;
var G__202660_202666 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__202659_202665,G__202660_202666) : f.call(null,G__202659_202665,G__202660_202666));

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
general.info.route = tailrecursion.javelin.formula((function (G__202670,G__202674,G__202669,G__202673,G__202672,G__202671){
var G__202675 = cljs.core.PersistentArrayMap.EMPTY;
var G__202676 = (function (){var G__202677 = ((function (G__202675){
return (function (p__202667){
var vec__202668 = p__202667;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202668,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__202671.cljs$core$IFn$_invoke$arity$1 ? G__202671.cljs$core$IFn$_invoke$arity$1(k) : G__202671.call(null,k)),v], null);
});})(G__202675))
;
var G__202678 = (function (){var G__202679 = (2);
var G__202680 = (G__202673.cljs$core$IFn$_invoke$arity$2 ? G__202673.cljs$core$IFn$_invoke$arity$2(G__202674,/\//) : G__202673.call(null,G__202674,/\//));
return (G__202672.cljs$core$IFn$_invoke$arity$2 ? G__202672.cljs$core$IFn$_invoke$arity$2(G__202679,G__202680) : G__202672.call(null,G__202679,G__202680));
})();
return (G__202670.cljs$core$IFn$_invoke$arity$2 ? G__202670.cljs$core$IFn$_invoke$arity$2(G__202677,G__202678) : G__202670.call(null,G__202677,G__202678));
})();
return (G__202669.cljs$core$IFn$_invoke$arity$2 ? G__202669.cljs$core$IFn$_invoke$arity$2(G__202675,G__202676) : G__202669.call(null,G__202675,G__202676));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__202684,G__202683,G__202687,G__202688,G__202686,G__202685){
var G__202689 = cljs.core.PersistentArrayMap.EMPTY;
var G__202690 = (function (){var G__202691 = ((function (G__202689){
return (function (p__202681){
var vec__202682 = p__202681;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__202682,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__202685.cljs$core$IFn$_invoke$arity$1 ? G__202685.cljs$core$IFn$_invoke$arity$1(k) : G__202685.call(null,k)),v], null);
});})(G__202689))
;
var G__202692 = (function (){var G__202693 = (2);
var G__202694 = (G__202687.cljs$core$IFn$_invoke$arity$2 ? G__202687.cljs$core$IFn$_invoke$arity$2(G__202688,/\//) : G__202687.call(null,G__202688,/\//));
return (G__202686.cljs$core$IFn$_invoke$arity$2 ? G__202686.cljs$core$IFn$_invoke$arity$2(G__202693,G__202694) : G__202686.call(null,G__202693,G__202694));
})();
return (G__202684.cljs$core$IFn$_invoke$arity$2 ? G__202684.cljs$core$IFn$_invoke$arity$2(G__202691,G__202692) : G__202684.call(null,G__202691,G__202692));
})();
return (G__202683.cljs$core$IFn$_invoke$arity$2 ? G__202683.cljs$core$IFn$_invoke$arity$2(G__202689,G__202690) : G__202683.call(null,G__202689,G__202690));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_202702 = jQuery(window);
var G__202697_202703 = w_202702;
var G__202698_202704 = cljs.core.cst$kw$resize;
var G__202699_202705 = ((function (G__202697_202703,G__202698_202704,w_202702){
return (function (){
var G__202700 = general.info.screen_height;
var G__202701 = w_202702.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__202700,G__202701) : cljs.core.reset_BANG_.call(null,G__202700,G__202701));
});})(G__202697_202703,G__202698_202704,w_202702))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__202697_202703,G__202698_202704,G__202699_202705) : tailrecursion.hoplon.on_BANG_.call(null,G__202697_202703,G__202698_202704,G__202699_202705));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_202713 = jQuery(document);
var G__202708_202714 = d_202713;
var G__202709_202715 = cljs.core.cst$kw$scroll;
var G__202710_202716 = ((function (G__202708_202714,G__202709_202715,d_202713){
return (function (){
var G__202711 = general.info.scroll_top;
var G__202712 = d_202713.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__202711,G__202712) : cljs.core.reset_BANG_.call(null,G__202711,G__202712));
});})(G__202708_202714,G__202709_202715,d_202713))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__202708_202714,G__202709_202715,G__202710_202716) : tailrecursion.hoplon.on_BANG_.call(null,G__202708_202714,G__202709_202715,G__202710_202716));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__202717 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__202718 = (0);
return setTimeout(G__202717,G__202718);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__202720,G__202719,G__202721){
return [cljs.core.str("50% "),cljs.core.str((((G__202719 + G__202720) - G__202721) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__202728 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__202733,G__202730,G__202732,G__202731){
var e = (G__202730.cljs$core$IFn$_invoke$arity$1 ? G__202730.cljs$core$IFn$_invoke$arity$1(G__202731) : G__202730.call(null,G__202731));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__202732);
var s_bot__$1 = (G__202733 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4740_SHARP_,p2__4739_SHARP_){
var G__202734 = elem;
var G__202735 = cljs.core.boolean$(p2__4739_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__202734,G__202735) : callback.call(null,G__202734,G__202735));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__202729 = (0);
return setTimeout(G__202728,G__202729);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__202748 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__202752,G__202750,G__202751){
return ((G__202750 + G__202751) - G__202752);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__202754,G__202753){
return (G__202753 + G__202754);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__202757,G__202755,G__202756){
return ((G__202755 - G__202756) / (G__202757 - G__202756));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__202758){
if(cljs.core.truth_((((0) <= G__202758)) && ((G__202758 <= (1))))){
return G__202758;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4742_SHARP_,p2__4741_SHARP_){
var G__202759 = elem;
var G__202760 = prcnt;
var G__202761 = cljs.core.boolean$(p2__4741_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__202759,G__202760,G__202761) : callback.call(null,G__202759,G__202760,G__202761));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__202749 = (0);
return setTimeout(G__202748,G__202749);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__202766 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__202768,G__202770,G__202769){
var e = (G__202768.cljs$core$IFn$_invoke$arity$1 ? G__202768.cljs$core$IFn$_invoke$arity$1(G__202769) : G__202768.call(null,G__202769));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__202770))) && ((((50) + G__202770) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4744_SHARP_,p2__4743_SHARP_){
var G__202771 = cljs.core.boolean$(p2__4743_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__202771) : callback.call(null,G__202771));
});})(e_top,e_bot,c))
);
});
var G__202767 = (0);
return setTimeout(G__202766,G__202767);
}));
