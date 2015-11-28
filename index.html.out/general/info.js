// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args14624 = [];
var len__6061__auto___14627 = arguments.length;
var i__6062__auto___14628 = (0);
while(true){
if((i__6062__auto___14628 < len__6061__auto___14627)){
args14624.push((arguments[i__6062__auto___14628]));

var G__14629 = (i__6062__auto___14628 + (1));
i__6062__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var G__14626 = args14624.length;
switch (G__14626) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14624.length)].join('')));

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
general.info.route = tailrecursion.javelin.formula.call(null,(function (G__14634,G__14638,G__14633,G__14637,G__14636,G__14635){
return G__14633.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14634.call(null,(function (p__14631){
var vec__14632 = p__14631;
var k = cljs.core.nth.call(null,vec__14632,(0),null);
var v = cljs.core.nth.call(null,vec__14632,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14635.call(null,k),v], null);
}),G__14636.call(null,(2),G__14637.call(null,G__14638,/\//))));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell.call(null,null);
general.info.scroll_map = tailrecursion.javelin.formula.call(null,(function (G__14642,G__14641,G__14645,G__14646,G__14644,G__14643){
return G__14641.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14642.call(null,(function (p__14639){
var vec__14640 = p__14639;
var k = cljs.core.nth.call(null,vec__14640,(0),null);
var v = cljs.core.nth.call(null,vec__14640,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14643.call(null,k),v], null);
}),G__14644.call(null,(2),G__14645.call(null,G__14646,/\//))));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell.call(null,jQuery(window).height());
var w_14647 = jQuery(window);
tailrecursion.hoplon.on_BANG_.call(null,w_14647,new cljs.core.Keyword(null,"resize","resize",297367086),((function (w_14647){
return (function (){
return cljs.core.reset_BANG_.call(null,general.info.screen_height,w_14647.height());
});})(w_14647))
);
general.info.scroll_top = tailrecursion.javelin.cell.call(null,(0));
var d_14648 = jQuery(document);
tailrecursion.hoplon.on_BANG_.call(null,d_14648,new cljs.core.Keyword(null,"scroll","scroll",971553779),((function (d_14648){
return (function (){
return cljs.core.reset_BANG_.call(null,general.info.scroll_top,d_14648.scrollTop());
});})(d_14648))
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
return (function (G__14650,G__14649,G__14651){
return [cljs.core.str("50% "),cljs.core.str((((G__14649 + G__14650) - G__14651) / (8))),cljs.core.str("px")].join('');
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
return (function (G__14655,G__14652,G__14654,G__14653){
var e = G__14652.call(null,G__14653);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__14654);
var s_bot__$1 = (G__14655 + s_top__$1);
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
return (function (G__14658,G__14656,G__14657){
return ((G__14656 + G__14657) - G__14658);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin){
return (function (G__14660,G__14659){
return (G__14659 + G__14660);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end){
return (function (G__14663,G__14661,G__14662){
return ((G__14661 - G__14662) / (G__14663 - G__14662));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__14664){
if(cljs.core.truth_((((0) <= G__14664)) && ((G__14664 <= (1))))){
return G__14664;
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
return (function (G__14665,G__14667,G__14666){
var e = G__14665.call(null,G__14666);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__14667))) && ((((50) + G__14667) <= e_bot__$1));
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