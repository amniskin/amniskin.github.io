// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ui.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.info.date = (new Date());
ui.info.nav_active = tailrecursion.javelin.cell.call(null,null);
ui.info.nav_height = (50);
ui.info.scroll_location = tailrecursion.javelin.cell.call(null,null);
ui.info.do_watch = (function ui$info$do_watch(){
var G__25958 = arguments.length;
switch (G__25958) {
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
return ui.info.do_watch.call(null,atom,null,f);
});

ui.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

ui.info.do_watch.cljs$lang$maxFixedArity = 3;
ui.info.screen_height = tailrecursion.javelin.cell.call(null,jQuery(window).height());
ui.info.scroll_top = tailrecursion.javelin.cell.call(null,(0));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),(elem__$1.offset().top - ui.info.nav_height)], null)));
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
return (function (G__25961,G__25960,G__25962){
return [cljs.core.str("50% "),cljs.core.str((((G__25960 + G__25961) - G__25962) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,ui.info.screen_height,ui.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
var d_25963 = jQuery(document);
tailrecursion.hoplon.on_BANG_.call(null,d_25963,new cljs.core.Keyword(null,"scroll","scroll",971553779),((function (d_25963){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.info.scroll_top,d_25963.scrollTop());
});})(d_25963))
);
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword(null,"on-screen","on-screen",-569746088),(function (elem,k,callback){
return setTimeout((function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula.call(null,((function (e_top,e_bot,s_top,s_bot){
return (function (G__25967,G__25964,G__25966,G__25965){
var e = G__25964.call(null,G__25965);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__25966);
var s_bot__$1 = (G__25967 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,ui.info.screen_height,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.call(null,c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__10214_SHARP_,p2__10213_SHARP_){
return callback.call(null,elem,cljs.core.boolean$.call(null,p2__10213_SHARP_));
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
return (function (G__25970,G__25968,G__25969){
return ((G__25968 + G__25969) - G__25970);
});})(e,e_top,e_bot))
).call(null,ui.info.screen_height,e_top,ui.info.nav_height);
var end = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin){
return (function (G__25972,G__25971){
return (G__25971 + G__25972);
});})(e,e_top,e_bot,begin))
).call(null,ui.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end){
return (function (G__25975,G__25973,G__25974){
return ((G__25973 - G__25974) / (G__25975 - G__25974));
});})(e,e_top,e_bot,begin,end))
).call(null,end,ui.info.scroll_top,begin);
var c = tailrecursion.javelin.formula.call(null,((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__25976){
if(cljs.core.truth_((((0) <= G__25976)) && ((G__25976 <= (1))))){
return G__25976;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return ui.info.do_watch.call(null,c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__10216_SHARP_,p2__10215_SHARP_){
return callback.call(null,elem,prcnt,cljs.core.boolean$.call(null,p2__10215_SHARP_));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword(null,"at-top","at-top",-1582989340),(function (elem,k,callback){
return setTimeout((function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula.call(null,((function (e_top,e_bot){
return (function (G__25977,G__25979,G__25978){
var e = G__25977.call(null,G__25978);
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__25979))) && ((((50) + G__25979) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,ui.info.scroll_top,elem);
return ui.info.do_watch.call(null,c,((function (e_top,e_bot,c){
return (function (p1__10218_SHARP_,p2__10217_SHARP_){
return callback.call(null,cljs.core.boolean$.call(null,p2__10217_SHARP_));
});})(e_top,e_bot,c))
);
}),(0));
}));
var w_25980 = jQuery(window);
tailrecursion.hoplon.on_BANG_.call(null,w_25980,new cljs.core.Keyword(null,"resize","resize",297367086),((function (w_25980){
return (function (){
return cljs.core.reset_BANG_.call(null,ui.info.screen_height,w_25980.height());
});})(w_25980))
);
ui.info.home = "#!/home/";
ui.info.route_STAR_ = tailrecursion.hoplon.route_cell.call(null,ui.info.home);
ui.info.route = tailrecursion.javelin.formula.call(null,(function (G__25984,G__25988,G__25983,G__25987,G__25986,G__25985){
return G__25983.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25984.call(null,(function (p__25981){
var vec__25982 = p__25981;
var k = cljs.core.nth.call(null,vec__25982,(0),null);
var v = cljs.core.nth.call(null,vec__25982,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25985.call(null,k),v], null);
}),G__25986.call(null,(2),G__25987.call(null,G__25988,/\//))));
})).call(null,cljs.core.map,ui.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
ui.info.location = tailrecursion.javelin.formula.call(null,(function (G__25989){
return G__25989.call(null,new cljs.core.Keyword(null,"#!","#!",-848511395));
})).call(null,ui.info.route);

//# sourceMappingURL=info.js.map