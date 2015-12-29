// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args10024 = [];
var len__6061__auto___10029 = arguments.length;
var i__6062__auto___10030 = (0);
while(true){
if((i__6062__auto___10030 < len__6061__auto___10029)){
args10024.push((arguments[i__6062__auto___10030]));

var G__10031 = (i__6062__auto___10030 + (1));
i__6062__auto___10030 = G__10031;
continue;
} else {
}
break;
}

var G__10026 = args10024.length;
switch (G__10026) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10024.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__10027_10033 = init;
var G__10028_10034 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10027_10033,G__10028_10034) : f.call(null,G__10027_10033,G__10028_10034));

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
general.info.route = tailrecursion.javelin.formula((function (G__10038,G__10042,G__10037,G__10041,G__10040,G__10039){
var G__10043 = cljs.core.PersistentArrayMap.EMPTY;
var G__10044 = (function (){var G__10045 = ((function (G__10043){
return (function (p__10035){
var vec__10036 = p__10035;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10036,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10039.cljs$core$IFn$_invoke$arity$1 ? G__10039.cljs$core$IFn$_invoke$arity$1(k) : G__10039.call(null,k)),v], null);
});})(G__10043))
;
var G__10046 = (function (){var G__10047 = (2);
var G__10048 = (G__10041.cljs$core$IFn$_invoke$arity$2 ? G__10041.cljs$core$IFn$_invoke$arity$2(G__10042,/\//) : G__10041.call(null,G__10042,/\//));
return (G__10040.cljs$core$IFn$_invoke$arity$2 ? G__10040.cljs$core$IFn$_invoke$arity$2(G__10047,G__10048) : G__10040.call(null,G__10047,G__10048));
})();
return (G__10038.cljs$core$IFn$_invoke$arity$2 ? G__10038.cljs$core$IFn$_invoke$arity$2(G__10045,G__10046) : G__10038.call(null,G__10045,G__10046));
})();
return (G__10037.cljs$core$IFn$_invoke$arity$2 ? G__10037.cljs$core$IFn$_invoke$arity$2(G__10043,G__10044) : G__10037.call(null,G__10043,G__10044));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__10052,G__10051,G__10055,G__10056,G__10054,G__10053){
var G__10057 = cljs.core.PersistentArrayMap.EMPTY;
var G__10058 = (function (){var G__10059 = ((function (G__10057){
return (function (p__10049){
var vec__10050 = p__10049;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10053.cljs$core$IFn$_invoke$arity$1 ? G__10053.cljs$core$IFn$_invoke$arity$1(k) : G__10053.call(null,k)),v], null);
});})(G__10057))
;
var G__10060 = (function (){var G__10061 = (2);
var G__10062 = (G__10055.cljs$core$IFn$_invoke$arity$2 ? G__10055.cljs$core$IFn$_invoke$arity$2(G__10056,/\//) : G__10055.call(null,G__10056,/\//));
return (G__10054.cljs$core$IFn$_invoke$arity$2 ? G__10054.cljs$core$IFn$_invoke$arity$2(G__10061,G__10062) : G__10054.call(null,G__10061,G__10062));
})();
return (G__10052.cljs$core$IFn$_invoke$arity$2 ? G__10052.cljs$core$IFn$_invoke$arity$2(G__10059,G__10060) : G__10052.call(null,G__10059,G__10060));
})();
return (G__10051.cljs$core$IFn$_invoke$arity$2 ? G__10051.cljs$core$IFn$_invoke$arity$2(G__10057,G__10058) : G__10051.call(null,G__10057,G__10058));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_10070 = jQuery(window);
var G__10065_10071 = w_10070;
var G__10066_10072 = cljs.core.cst$kw$resize;
var G__10067_10073 = ((function (G__10065_10071,G__10066_10072,w_10070){
return (function (){
var G__10068 = general.info.screen_height;
var G__10069 = w_10070.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10068,G__10069) : cljs.core.reset_BANG_.call(null,G__10068,G__10069));
});})(G__10065_10071,G__10066_10072,w_10070))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10065_10071,G__10066_10072,G__10067_10073) : tailrecursion.hoplon.on_BANG_.call(null,G__10065_10071,G__10066_10072,G__10067_10073));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_10081 = jQuery(document);
var G__10076_10082 = d_10081;
var G__10077_10083 = cljs.core.cst$kw$scroll;
var G__10078_10084 = ((function (G__10076_10082,G__10077_10083,d_10081){
return (function (){
var G__10079 = general.info.scroll_top;
var G__10080 = d_10081.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10079,G__10080) : cljs.core.reset_BANG_.call(null,G__10079,G__10080));
});})(G__10076_10082,G__10077_10083,d_10081))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10076_10082,G__10077_10083,G__10078_10084) : tailrecursion.hoplon.on_BANG_.call(null,G__10076_10082,G__10077_10083,G__10078_10084));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__10085 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__10086 = (0);
return setTimeout(G__10085,G__10086);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__10088,G__10087,G__10089){
return [cljs.core.str("50% "),cljs.core.str((((G__10087 + G__10088) - G__10089) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__10096 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__10101,G__10098,G__10100,G__10099){
var e = (G__10098.cljs$core$IFn$_invoke$arity$1 ? G__10098.cljs$core$IFn$_invoke$arity$1(G__10099) : G__10098.call(null,G__10099));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__10100);
var s_bot__$1 = (G__10101 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4740_SHARP_,p2__4739_SHARP_){
var G__10102 = elem;
var G__10103 = cljs.core.boolean$(p2__4739_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__10102,G__10103) : callback.call(null,G__10102,G__10103));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__10097 = (0);
return setTimeout(G__10096,G__10097);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__10116 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__10120,G__10118,G__10119){
return ((G__10118 + G__10119) - G__10120);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__10122,G__10121){
return (G__10121 + G__10122);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__10125,G__10123,G__10124){
return ((G__10123 - G__10124) / (G__10125 - G__10124));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__10126){
if(cljs.core.truth_((((0) <= G__10126)) && ((G__10126 <= (1))))){
return G__10126;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4742_SHARP_,p2__4741_SHARP_){
var G__10127 = elem;
var G__10128 = prcnt;
var G__10129 = cljs.core.boolean$(p2__4741_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__10127,G__10128,G__10129) : callback.call(null,G__10127,G__10128,G__10129));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__10117 = (0);
return setTimeout(G__10116,G__10117);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__10134 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__10136,G__10138,G__10137){
var e = (G__10136.cljs$core$IFn$_invoke$arity$1 ? G__10136.cljs$core$IFn$_invoke$arity$1(G__10137) : G__10136.call(null,G__10137));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__10138))) && ((((50) + G__10138) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4744_SHARP_,p2__4743_SHARP_){
var G__10139 = cljs.core.boolean$(p2__4743_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__10139) : callback.call(null,G__10139));
});})(e_top,e_bot,c))
);
});
var G__10135 = (0);
return setTimeout(G__10134,G__10135);
}));
