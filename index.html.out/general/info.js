// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.home = null;
general.info.route_STAR_ = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([general.info.home], 0));
general.info.route = tailrecursion.javelin.formula((function (G__10019,G__10023,G__10018,G__10022,G__10021,G__10020){
var G__10024 = cljs.core.PersistentArrayMap.EMPTY;
var G__10025 = (function (){var G__10026 = ((function (G__10024){
return (function (p__10016){
var vec__10017 = p__10016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10017,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10020.cljs$core$IFn$_invoke$arity$1 ? G__10020.cljs$core$IFn$_invoke$arity$1(k) : G__10020.call(null,k)),v], null);
});})(G__10024))
;
var G__10027 = (function (){var G__10028 = (2);
var G__10029 = (G__10022.cljs$core$IFn$_invoke$arity$2 ? G__10022.cljs$core$IFn$_invoke$arity$2(G__10023,/\//) : G__10022.call(null,G__10023,/\//));
return (G__10021.cljs$core$IFn$_invoke$arity$2 ? G__10021.cljs$core$IFn$_invoke$arity$2(G__10028,G__10029) : G__10021.call(null,G__10028,G__10029));
})();
return (G__10019.cljs$core$IFn$_invoke$arity$2 ? G__10019.cljs$core$IFn$_invoke$arity$2(G__10026,G__10027) : G__10019.call(null,G__10026,G__10027));
})();
return (G__10018.cljs$core$IFn$_invoke$arity$2 ? G__10018.cljs$core$IFn$_invoke$arity$2(G__10024,G__10025) : G__10018.call(null,G__10024,G__10025));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__10033,G__10032,G__10036,G__10037,G__10035,G__10034){
var G__10038 = cljs.core.PersistentArrayMap.EMPTY;
var G__10039 = (function (){var G__10040 = ((function (G__10038){
return (function (p__10030){
var vec__10031 = p__10030;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10031,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10034.cljs$core$IFn$_invoke$arity$1 ? G__10034.cljs$core$IFn$_invoke$arity$1(k) : G__10034.call(null,k)),v], null);
});})(G__10038))
;
var G__10041 = (function (){var G__10042 = (2);
var G__10043 = (G__10036.cljs$core$IFn$_invoke$arity$2 ? G__10036.cljs$core$IFn$_invoke$arity$2(G__10037,/\//) : G__10036.call(null,G__10037,/\//));
return (G__10035.cljs$core$IFn$_invoke$arity$2 ? G__10035.cljs$core$IFn$_invoke$arity$2(G__10042,G__10043) : G__10035.call(null,G__10042,G__10043));
})();
return (G__10033.cljs$core$IFn$_invoke$arity$2 ? G__10033.cljs$core$IFn$_invoke$arity$2(G__10040,G__10041) : G__10033.call(null,G__10040,G__10041));
})();
return (G__10032.cljs$core$IFn$_invoke$arity$2 ? G__10032.cljs$core$IFn$_invoke$arity$2(G__10038,G__10039) : G__10032.call(null,G__10038,G__10039));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.do_watch = (function general$info$do_watch(){
var args10044 = [];
var len__6061__auto___10049 = arguments.length;
var i__6062__auto___10050 = (0);
while(true){
if((i__6062__auto___10050 < len__6061__auto___10049)){
args10044.push((arguments[i__6062__auto___10050]));

var G__10051 = (i__6062__auto___10050 + (1));
i__6062__auto___10050 = G__10051;
continue;
} else {
}
break;
}

var G__10046 = args10044.length;
switch (G__10046) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10044.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__10047_10053 = init;
var G__10048_10054 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10047_10053,G__10048_10054) : f.call(null,G__10047_10053,G__10048_10054));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

general.info.do_watch.cljs$lang$maxFixedArity = 3;
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_10062 = jQuery(window);
var G__10057_10063 = w_10062;
var G__10058_10064 = cljs.core.cst$kw$resize;
var G__10059_10065 = ((function (G__10057_10063,G__10058_10064,w_10062){
return (function (){
var G__10060 = general.info.screen_height;
var G__10061 = w_10062.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10060,G__10061) : cljs.core.reset_BANG_.call(null,G__10060,G__10061));
});})(G__10057_10063,G__10058_10064,w_10062))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10057_10063,G__10058_10064,G__10059_10065) : tailrecursion.hoplon.on_BANG_.call(null,G__10057_10063,G__10058_10064,G__10059_10065));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_10073 = jQuery(document);
var G__10068_10074 = d_10073;
var G__10069_10075 = cljs.core.cst$kw$scroll;
var G__10070_10076 = ((function (G__10068_10074,G__10069_10075,d_10073){
return (function (){
var G__10071 = general.info.scroll_top;
var G__10072 = d_10073.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10071,G__10072) : cljs.core.reset_BANG_.call(null,G__10071,G__10072));
});})(G__10068_10074,G__10069_10075,d_10073))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__10068_10074,G__10069_10075,G__10070_10076) : tailrecursion.hoplon.on_BANG_.call(null,G__10068_10074,G__10069_10075,G__10070_10076));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__10077 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__10078 = (0);
return setTimeout(G__10077,G__10078);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__10080,G__10079,G__10081){
return [cljs.core.str("50% "),cljs.core.str((((G__10079 + G__10080) - G__10081) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__10088 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__10093,G__10090,G__10092,G__10091){
var e = (G__10090.cljs$core$IFn$_invoke$arity$1 ? G__10090.cljs$core$IFn$_invoke$arity$1(G__10091) : G__10090.call(null,G__10091));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__10092);
var s_bot__$1 = (G__10093 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__4421_SHARP_,p2__4420_SHARP_){
var G__10094 = elem;
var G__10095 = cljs.core.boolean$(p2__4420_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__10094,G__10095) : callback.call(null,G__10094,G__10095));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__10089 = (0);
return setTimeout(G__10088,G__10089);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__10108 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__10112,G__10110,G__10111){
return ((G__10110 + G__10111) - G__10112);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__10114,G__10113){
return (G__10113 + G__10114);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__10117,G__10115,G__10116){
return ((G__10115 - G__10116) / (G__10117 - G__10116));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__10118){
if(cljs.core.truth_((((0) <= G__10118)) && ((G__10118 <= (1))))){
return G__10118;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__4423_SHARP_,p2__4422_SHARP_){
var G__10119 = elem;
var G__10120 = prcnt;
var G__10121 = cljs.core.boolean$(p2__4422_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__10119,G__10120,G__10121) : callback.call(null,G__10119,G__10120,G__10121));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__10109 = (0);
return setTimeout(G__10108,G__10109);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__10126 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__10128,G__10130,G__10129){
var e = (G__10128.cljs$core$IFn$_invoke$arity$1 ? G__10128.cljs$core$IFn$_invoke$arity$1(G__10129) : G__10128.call(null,G__10129));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__10130))) && ((((50) + G__10130) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__4425_SHARP_,p2__4424_SHARP_){
var G__10131 = cljs.core.boolean$(p2__4424_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__10131) : callback.call(null,G__10131));
});})(e_top,e_bot,c))
);
});
var G__10127 = (0);
return setTimeout(G__10126,G__10127);
}));
