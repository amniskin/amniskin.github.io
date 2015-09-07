// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args10020 = [];
var len__6061__auto___10025 = arguments.length;
var i__6062__auto___10026 = (0);
while(true){
if((i__6062__auto___10026 < len__6061__auto___10025)){
args10020.push((arguments[i__6062__auto___10026]));

var G__10027 = (i__6062__auto___10026 + (1));
i__6062__auto___10026 = G__10027;
continue;
} else {
}
break;
}

var G__10022 = args10020.length;
switch (G__10022) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10020.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__10023_10029 = init;
var G__10024_10030 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10023_10029,G__10024_10030) : f.call(null,G__10023_10029,G__10024_10030));

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
general.info.route = tailrecursion.javelin.formula((function (G__10034,G__10038,G__10033,G__10037,G__10036,G__10035){
var G__10039 = cljs.core.PersistentArrayMap.EMPTY;
var G__10040 = (function (){var G__10041 = ((function (G__10039){
return (function (p__10031){
var vec__10032 = p__10031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10032,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10035.cljs$core$IFn$_invoke$arity$1 ? G__10035.cljs$core$IFn$_invoke$arity$1(k) : G__10035.call(null,k)),v], null);
});})(G__10039))
;
var G__10042 = (function (){var G__10043 = (2);
var G__10044 = (G__10037.cljs$core$IFn$_invoke$arity$2 ? G__10037.cljs$core$IFn$_invoke$arity$2(G__10038,/\//) : G__10037.call(null,G__10038,/\//));
return (G__10036.cljs$core$IFn$_invoke$arity$2 ? G__10036.cljs$core$IFn$_invoke$arity$2(G__10043,G__10044) : G__10036.call(null,G__10043,G__10044));
})();
return (G__10034.cljs$core$IFn$_invoke$arity$2 ? G__10034.cljs$core$IFn$_invoke$arity$2(G__10041,G__10042) : G__10034.call(null,G__10041,G__10042));
})();
return (G__10033.cljs$core$IFn$_invoke$arity$2 ? G__10033.cljs$core$IFn$_invoke$arity$2(G__10039,G__10040) : G__10033.call(null,G__10039,G__10040));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__10048,G__10047,G__10051,G__10052,G__10050,G__10049){
var G__10053 = cljs.core.PersistentArrayMap.EMPTY;
var G__10054 = (function (){var G__10055 = ((function (G__10053){
return (function (p__10045){
var vec__10046 = p__10045;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10049.cljs$core$IFn$_invoke$arity$1 ? G__10049.cljs$core$IFn$_invoke$arity$1(k) : G__10049.call(null,k)),v], null);
});})(G__10053))
;
var G__10056 = (function (){var G__10057 = (2);
var G__10058 = (G__10051.cljs$core$IFn$_invoke$arity$2 ? G__10051.cljs$core$IFn$_invoke$arity$2(G__10052,/\//) : G__10051.call(null,G__10052,/\//));
return (G__10050.cljs$core$IFn$_invoke$arity$2 ? G__10050.cljs$core$IFn$_invoke$arity$2(G__10057,G__10058) : G__10050.call(null,G__10057,G__10058));
})();
return (G__10048.cljs$core$IFn$_invoke$arity$2 ? G__10048.cljs$core$IFn$_invoke$arity$2(G__10055,G__10056) : G__10048.call(null,G__10055,G__10056));
})();
return (G__10047.cljs$core$IFn$_invoke$arity$2 ? G__10047.cljs$core$IFn$_invoke$arity$2(G__10053,G__10054) : G__10047.call(null,G__10053,G__10054));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_10066 = jQuery(window);
var G__10061_10067 = w_10066;
var G__10062_10068 = cljs.core.cst$kw$resize;
var G__10063_10069 = ((function (G__10061_10067,G__10062_10068,w_10066){
return (function (){
var G__10064 = general.info.screen_height;
var G__10065 = w_10066.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10064,G__10065) : cljs.core.reset_BANG_.call(null,G__10064,G__10065));
});})(G__10061_10067,G__10062_10068,w_10066))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10061_10067,G__10062_10068,G__10063_10069) : tailrecursion.hoplon.on_BANG_.call(null,G__10061_10067,G__10062_10068,G__10063_10069));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_10077 = jQuery(document);
var G__10072_10078 = d_10077;
var G__10073_10079 = cljs.core.cst$kw$scroll;
var G__10074_10080 = ((function (G__10072_10078,G__10073_10079,d_10077){
return (function (){
var G__10075 = general.info.scroll_top;
var G__10076 = d_10077.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10075,G__10076) : cljs.core.reset_BANG_.call(null,G__10075,G__10076));
});})(G__10072_10078,G__10073_10079,d_10077))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10072_10078,G__10073_10079,G__10074_10080) : tailrecursion.hoplon.on_BANG_.call(null,G__10072_10078,G__10073_10079,G__10074_10080));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__10081 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__10082 = (0);
return setTimeout(G__10081,G__10082);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__10084,G__10083,G__10085){
return [cljs.core.str("50% "),cljs.core.str((((G__10083 + G__10084) - G__10085) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__10092 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__10097,G__10094,G__10096,G__10095){
var e = (G__10094.cljs$core$IFn$_invoke$arity$1 ? G__10094.cljs$core$IFn$_invoke$arity$1(G__10095) : G__10094.call(null,G__10095));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__10096);
var s_bot__$1 = (G__10097 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__3762_SHARP_,p2__3761_SHARP_){
var G__10098 = elem;
var G__10099 = cljs.core.boolean$(p2__3761_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__10098,G__10099) : callback.call(null,G__10098,G__10099));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__10093 = (0);
return setTimeout(G__10092,G__10093);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__10112 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__10116,G__10114,G__10115){
return ((G__10114 + G__10115) - G__10116);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__10118,G__10117){
return (G__10117 + G__10118);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__10121,G__10119,G__10120){
return ((G__10119 - G__10120) / (G__10121 - G__10120));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__10122){
if(cljs.core.truth_((((0) <= G__10122)) && ((G__10122 <= (1))))){
return G__10122;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__3764_SHARP_,p2__3763_SHARP_){
var G__10123 = elem;
var G__10124 = prcnt;
var G__10125 = cljs.core.boolean$(p2__3763_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__10123,G__10124,G__10125) : callback.call(null,G__10123,G__10124,G__10125));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__10113 = (0);
return setTimeout(G__10112,G__10113);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__10130 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__10132,G__10134,G__10133){
var e = (G__10132.cljs$core$IFn$_invoke$arity$1 ? G__10132.cljs$core$IFn$_invoke$arity$1(G__10133) : G__10132.call(null,G__10133));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__10134))) && ((((50) + G__10134) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__3766_SHARP_,p2__3765_SHARP_){
var G__10135 = cljs.core.boolean$(p2__3765_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__10135) : callback.call(null,G__10135));
});})(e_top,e_bot,c))
);
});
var G__10131 = (0);
return setTimeout(G__10130,G__10131);
}));
