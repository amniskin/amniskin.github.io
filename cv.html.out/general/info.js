// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args12814 = [];
var len__6061__auto___12817 = arguments.length;
var i__6062__auto___12818 = (0);
while(true){
if((i__6062__auto___12818 < len__6061__auto___12817)){
args12814.push((arguments[i__6062__auto___12818]));

var G__12819 = (i__6062__auto___12818 + (1));
i__6062__auto___12818 = G__12819;
continue;
} else {
}
break;
}

var G__12816 = args12814.length;
switch (G__12816) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12814.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.call(null,atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

general.info.do_watch.cljs$lang$maxFixedArity = 3;
general.info.home = null;
general.info.route_STAR_ = tailrecursion.hoplon.route_cell.call(null,general.info.home);
general.info.route = tailrecursion.javelin.formula.call(null,(function (G__12824,G__12828,G__12823,G__12827,G__12826,G__12825){
return G__12823.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12824.call(null,(function (p__12821){
var vec__12822 = p__12821;
var k = cljs.core.nth.call(null,vec__12822,(0),null);
var v = cljs.core.nth.call(null,vec__12822,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12825.call(null,k),v], null);
}),G__12826.call(null,(2),G__12827.call(null,G__12828,/\//))));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell.call(null,null);
general.info.scroll_map = tailrecursion.javelin.formula.call(null,(function (G__12832,G__12831,G__12835,G__12836,G__12834,G__12833){
return G__12831.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12832.call(null,(function (p__12829){
var vec__12830 = p__12829;
var k = cljs.core.nth.call(null,vec__12830,(0),null);
var v = cljs.core.nth.call(null,vec__12830,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12833.call(null,k),v], null);
}),G__12834.call(null,(2),G__12835.call(null,G__12836,/\//))));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell.call(null,jQuery(window).height());
var w_12837 = jQuery(window);
tailrecursion.hoplon.on_BANG_.call(null,w_12837,new cljs.core.Keyword(null,"resize","resize",297367086),((function (w_12837){
return (function (){
return cljs.core.reset_BANG_.call(null,general.info.screen_height,w_12837.height());
});})(w_12837))
);
general.info.scroll_top = tailrecursion.javelin.cell.call(null,(0));
var d_12838 = jQuery(document);
tailrecursion.hoplon.on_BANG_.call(null,d_12838,new cljs.core.Keyword(null,"scroll","scroll",971553779),((function (d_12838){
return (function (){
return cljs.core.reset_BANG_.call(null,general.info.scroll_top,d_12838.scrollTop());
});})(d_12838))
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-background","scroll-background",765539910),(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula.call(null,((function (elem__$1,top){
return (function (G__12840,G__12839,G__12841){
return [cljs.core.str("50% "),cljs.core.str((((G__12839 + G__12840) - G__12841) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword(null,"on-screen","on-screen",-569746088),(function (elem,k,callback){
return setTimeout((function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula.call(null,((function (e_top,e_bot,s_top,s_bot){
return (function (G__12845,G__12842,G__12844,G__12843){
var e = G__12842.call(null,G__12843);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__12844);
var s_bot__$1 = (G__12845 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.call(null,c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__2430_SHARP_,p2__2429_SHARP_){
return callback.call(null,elem,cljs.core.boolean$.call(null,p2__2429_SHARP_));
});})(e_top,e_bot,s_top,s_bot,c))
);
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword(null,"on-screen*","on-screen*",194938181),(function (elem,k,callback){
return setTimeout((function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot){
return (function (G__12848,G__12846,G__12847){
return ((G__12846 + G__12847) - G__12848);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin){
return (function (G__12850,G__12849){
return (G__12849 + G__12850);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end){
return (function (G__12853,G__12851,G__12852){
return ((G__12851 - G__12852) / (G__12853 - G__12852));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__12854){
if(cljs.core.truth_((((0) <= G__12854)) && ((G__12854 <= (1))))){
return G__12854;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.call(null,c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__2432_SHARP_,p2__2431_SHARP_){
return callback.call(null,elem,prcnt,cljs.core.boolean$.call(null,p2__2431_SHARP_));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword(null,"at-top","at-top",-1582989340),(function (elem,k,callback){
return setTimeout((function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula.call(null,((function (e_top,e_bot){
return (function (G__12855,G__12857,G__12856){
var e = G__12855.call(null,G__12856);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__12857))) && ((((50) + G__12857) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.call(null,c,((function (e_top,e_bot,c){
return (function (p1__2434_SHARP_,p2__2433_SHARP_){
return callback.call(null,cljs.core.boolean$.call(null,p2__2433_SHARP_));
});})(e_top,e_bot,c))
);
}),(0));
}));

//# sourceMappingURL=info.js.map