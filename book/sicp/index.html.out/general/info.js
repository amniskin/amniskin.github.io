// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('general.info');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tailrecursion.hoplon.markdown');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
general.info.do_watch = (function general$info$do_watch(){
var args184142 = [];
var len__6061__auto___184147 = arguments.length;
var i__6062__auto___184148 = (0);
while(true){
if((i__6062__auto___184148 < len__6061__auto___184147)){
args184142.push((arguments[i__6062__auto___184148]));

var G__184149 = (i__6062__auto___184148 + (1));
i__6062__auto___184148 = G__184149;
continue;
} else {
}
break;
}

var G__184144 = args184142.length;
switch (G__184144) {
case 2:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args184142.length)].join('')));

}
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return general.info.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

general.info.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__184145_184151 = init;
var G__184146_184152 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__184145_184151,G__184146_184152) : f.call(null,G__184145_184151,G__184146_184152));

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
general.info.route = tailrecursion.javelin.formula((function (G__184156,G__184160,G__184155,G__184159,G__184158,G__184157){
var G__184161 = cljs.core.PersistentArrayMap.EMPTY;
var G__184162 = (function (){var G__184163 = ((function (G__184161){
return (function (p__184153){
var vec__184154 = p__184153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184154,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__184157.cljs$core$IFn$_invoke$arity$1 ? G__184157.cljs$core$IFn$_invoke$arity$1(k) : G__184157.call(null,k)),v], null);
});})(G__184161))
;
var G__184164 = (function (){var G__184165 = (2);
var G__184166 = (G__184159.cljs$core$IFn$_invoke$arity$2 ? G__184159.cljs$core$IFn$_invoke$arity$2(G__184160,/\//) : G__184159.call(null,G__184160,/\//));
return (G__184158.cljs$core$IFn$_invoke$arity$2 ? G__184158.cljs$core$IFn$_invoke$arity$2(G__184165,G__184166) : G__184158.call(null,G__184165,G__184166));
})();
return (G__184156.cljs$core$IFn$_invoke$arity$2 ? G__184156.cljs$core$IFn$_invoke$arity$2(G__184163,G__184164) : G__184156.call(null,G__184163,G__184164));
})();
return (G__184155.cljs$core$IFn$_invoke$arity$2 ? G__184155.cljs$core$IFn$_invoke$arity$2(G__184161,G__184162) : G__184155.call(null,G__184161,G__184162));
})).call(null,cljs.core.map,general.info.route_STAR_,cljs.core.into,clojure.string.split,cljs.core.partition,cljs.core.keyword);
general.info.scroll_location = tailrecursion.javelin.cell(null);
general.info.scroll_map = tailrecursion.javelin.formula((function (G__184170,G__184169,G__184173,G__184174,G__184172,G__184171){
var G__184175 = cljs.core.PersistentArrayMap.EMPTY;
var G__184176 = (function (){var G__184177 = ((function (G__184175){
return (function (p__184167){
var vec__184168 = p__184167;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__184168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__184171.cljs$core$IFn$_invoke$arity$1 ? G__184171.cljs$core$IFn$_invoke$arity$1(k) : G__184171.call(null,k)),v], null);
});})(G__184175))
;
var G__184178 = (function (){var G__184179 = (2);
var G__184180 = (G__184173.cljs$core$IFn$_invoke$arity$2 ? G__184173.cljs$core$IFn$_invoke$arity$2(G__184174,/\//) : G__184173.call(null,G__184174,/\//));
return (G__184172.cljs$core$IFn$_invoke$arity$2 ? G__184172.cljs$core$IFn$_invoke$arity$2(G__184179,G__184180) : G__184172.call(null,G__184179,G__184180));
})();
return (G__184170.cljs$core$IFn$_invoke$arity$2 ? G__184170.cljs$core$IFn$_invoke$arity$2(G__184177,G__184178) : G__184170.call(null,G__184177,G__184178));
})();
return (G__184169.cljs$core$IFn$_invoke$arity$2 ? G__184169.cljs$core$IFn$_invoke$arity$2(G__184175,G__184176) : G__184169.call(null,G__184175,G__184176));
})).call(null,cljs.core.map,cljs.core.into,clojure.string.split,general.info.scroll_location,cljs.core.partition,cljs.core.keyword);
general.info.date = (new Date());
general.info.nav_height = (50);
general.info.screen_height = tailrecursion.javelin.cell(jQuery(window).height());
var w_184188 = jQuery(window);
var G__184183_184189 = w_184188;
var G__184184_184190 = cljs.core.cst$kw$resize;
var G__184185_184191 = ((function (G__184183_184189,G__184184_184190,w_184188){
return (function (){
var G__184186 = general.info.screen_height;
var G__184187 = w_184188.height();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__184186,G__184187) : cljs.core.reset_BANG_.call(null,G__184186,G__184187));
});})(G__184183_184189,G__184184_184190,w_184188))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__184183_184189,G__184184_184190,G__184185_184191) : tailrecursion.hoplon.on_BANG_.call(null,G__184183_184189,G__184184_184190,G__184185_184191));
general.info.scroll_top = tailrecursion.javelin.cell((0));
var d_184199 = jQuery(document);
var G__184194_184200 = d_184199;
var G__184195_184201 = cljs.core.cst$kw$scroll;
var G__184196_184202 = ((function (G__184194_184200,G__184195_184201,d_184199){
return (function (){
var G__184197 = general.info.scroll_top;
var G__184198 = d_184199.scrollTop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__184197,G__184198) : cljs.core.reset_BANG_.call(null,G__184197,G__184198));
});})(G__184194_184200,G__184195_184201,d_184199))
;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__184194_184200,G__184195_184201,G__184196_184202) : tailrecursion.hoplon.on_BANG_.call(null,G__184194_184200,G__184195_184201,G__184196_184202));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
var G__184203 = (function (){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,(elem__$1.offset().top - general.info.nav_height)], null)));
} else {
return null;
}
});
var G__184204 = (0);
return setTimeout(G__184203,G__184204);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_background,(function (elem,_,v){
if(cljs.core.truth_(v)){
var elem__$1 = jQuery(elem);
var top = elem__$1.offset().top;
var scroll = tailrecursion.javelin.formula(((function (elem__$1,top){
return (function (G__184206,G__184205,G__184207){
return [cljs.core.str("50% "),cljs.core.str((((G__184205 + G__184206) - G__184207) / (8))),cljs.core.str("px")].join('');
});})(elem__$1,top))
).call(null,general.info.screen_height,general.info.scroll_top,top);
return elem__$1.style.backgroundPosition = scroll;
} else {
return null;
}
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen,(function (elem,k,callback){
var G__184214 = (function (){
var e_top = (0);
var e_bot = (0);
var s_top = (0);
var s_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot,s_top,s_bot){
return (function (G__184219,G__184216,G__184218,G__184217){
var e = (G__184216.cljs$core$IFn$_invoke$arity$1 ? G__184216.cljs$core$IFn$_invoke$arity$1(G__184217) : G__184216.call(null,G__184217));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
var s_top__$1 = ((50) + G__184218);
var s_bot__$1 = (G__184219 + s_top__$1);
return (((e_top__$1 <= s_bot__$1)) && ((s_bot__$1 <= e_bot__$1))) || (((e_top__$1 <= s_top__$1)) && ((s_top__$1 <= e_bot__$1)));
});})(e_top,e_bot,s_top,s_bot))
).call(null,general.info.screen_height,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,s_top,s_bot,c){
return (function (p1__5742_SHARP_,p2__5741_SHARP_){
var G__184220 = elem;
var G__184221 = cljs.core.boolean$(p2__5741_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(G__184220,G__184221) : callback.call(null,G__184220,G__184221));
});})(e_top,e_bot,s_top,s_bot,c))
);
});
var G__184215 = (0);
return setTimeout(G__184214,G__184215);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$on_DASH_screen_STAR_,(function (elem,k,callback){
var G__184234 = (function (){
var e = jQuery(elem);
var e_top = e.offset().top;
var e_bot = (e_top + e.height());
var begin = tailrecursion.javelin.formula(((function (e,e_top,e_bot){
return (function (G__184238,G__184236,G__184237){
return ((G__184236 + G__184237) - G__184238);
});})(e,e_top,e_bot))
).call(null,general.info.screen_height,e_top,general.info.nav_height);
var end = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin){
return (function (G__184240,G__184239){
return (G__184239 + G__184240);
});})(e,e_top,e_bot,begin))
).call(null,general.info.nav_height,e_bot);
var prcnt = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end){
return (function (G__184243,G__184241,G__184242){
return ((G__184241 - G__184242) / (G__184243 - G__184242));
});})(e,e_top,e_bot,begin,end))
).call(null,end,general.info.scroll_top,begin);
var c = tailrecursion.javelin.formula(((function (e,e_top,e_bot,begin,end,prcnt){
return (function (G__184244){
if(cljs.core.truth_((((0) <= G__184244)) && ((G__184244 <= (1))))){
return G__184244;
} else {
return null;
}
});})(e,e_top,e_bot,begin,end,prcnt))
).call(null,prcnt);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e,e_top,e_bot,begin,end,prcnt,c){
return (function (p1__5744_SHARP_,p2__5743_SHARP_){
var G__184245 = elem;
var G__184246 = prcnt;
var G__184247 = cljs.core.boolean$(p2__5743_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(G__184245,G__184246,G__184247) : callback.call(null,G__184245,G__184246,G__184247));
});})(e,e_top,e_bot,begin,end,prcnt,c))
);
});
var G__184235 = (0);
return setTimeout(G__184234,G__184235);
}));
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$at_DASH_top,(function (elem,k,callback){
var G__184252 = (function (){
var e_top = (0);
var e_bot = (0);
var c = tailrecursion.javelin.formula(((function (e_top,e_bot){
return (function (G__184254,G__184256,G__184255){
var e = (G__184254.cljs$core$IFn$_invoke$arity$1 ? G__184254.cljs$core$IFn$_invoke$arity$1(G__184255) : G__184254.call(null,G__184255));
var e_top__$1 = e.offset().top;
var e_bot__$1 = (e_top__$1 + e.height());
return ((e_top__$1 <= ((50) + G__184256))) && ((((50) + G__184256) <= e_bot__$1));
});})(e_top,e_bot))
).call(null,jQuery,general.info.scroll_top,elem);
return general.info.do_watch.cljs$core$IFn$_invoke$arity$2(c,((function (e_top,e_bot,c){
return (function (p1__5746_SHARP_,p2__5745_SHARP_){
var G__184257 = cljs.core.boolean$(p2__5745_SHARP_);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__184257) : callback.call(null,G__184257));
});})(e_top,e_bot,c))
);
});
var G__184253 = (0);
return setTimeout(G__184252,G__184253);
}));
