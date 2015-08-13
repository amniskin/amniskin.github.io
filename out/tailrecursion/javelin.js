// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__166253 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__166253) : cljs.core.atom.call(null,G__166253));
})();
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__166272 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166272) : branch_QMARK_.call(null,G__166272));
})())?(function (){var G__166273 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__166273) : children.call(null,G__166273));
})():null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__166276 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__166274_SHARP_,p2__166275_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__166274_SHARP_,p2__166275_SHARP_,p2__166275_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__166276;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((function (){var G__166279 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166279) : tailrecursion.javelin.cell_QMARK_.call(null,G__166279));
})())){
var G__166280 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166280) : cljs.core.deref.call(null,G__166280));
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e166282){if((e166282 instanceof Error)){
var _ = e166282;
return null;
} else {
throw e166282;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__166285 = c;
tailrecursion.javelin.add_sync_BANG_(G__166285);

return G__166285;
} else {
var G__166286 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__166286));

return G__166286;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__166289){
var vec__166290 = p__166289;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166290,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__166291 = cljs.core.seq(srcs);
var chunk__166292 = null;
var count__166293 = (0);
var i__166294 = (0);
while(true){
if((i__166294 < count__166293)){
var src = chunk__166292.cljs$core$IIndexed$_nth$arity$2(null,i__166294);
if(cljs.core.truth_((function (){var G__166295 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166295) : tailrecursion.javelin.cell_QMARK_.call(null,G__166295));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__166297 = seq__166291;
var G__166298 = chunk__166292;
var G__166299 = count__166293;
var G__166300 = (i__166294 + (1));
seq__166291 = G__166297;
chunk__166292 = G__166298;
count__166293 = G__166299;
i__166294 = G__166300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__166291);
if(temp__4425__auto__){
var seq__166291__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__166291__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__166291__$1);
var G__166301 = cljs.core.chunk_rest(seq__166291__$1);
var G__166302 = c__4995__auto__;
var G__166303 = cljs.core.count(c__4995__auto__);
var G__166304 = (0);
seq__166291 = G__166301;
chunk__166292 = G__166302;
count__166293 = G__166303;
i__166294 = G__166304;
continue;
} else {
var src = cljs.core.first(seq__166291__$1);
if(cljs.core.truth_((function (){var G__166296 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166296) : tailrecursion.javelin.cell_QMARK_.call(null,G__166296));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__166305 = cljs.core.next(seq__166291__$1);
var G__166306 = null;
var G__166307 = (0);
var G__166308 = (0);
seq__166291 = G__166305;
chunk__166292 = G__166306;
count__166293 = G__166307;
i__166294 = G__166308;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq166287){
var G__166288 = cljs.core.first(seq166287);
var seq166287__$1 = cljs.core.next(seq166287);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__166288,seq166287__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__166313){
var vec__166314 = p__166313;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166314,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166314,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__166315_166329 = cljs.core.seq(this$.sources);
var chunk__166316_166330 = null;
var count__166317_166331 = (0);
var i__166318_166332 = (0);
while(true){
if((i__166318_166332 < count__166317_166331)){
var source_166333 = chunk__166316_166330.cljs$core$IIndexed$_nth$arity$2(null,i__166318_166332);
if(cljs.core.truth_((function (){var G__166319 = source_166333;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166319) : tailrecursion.javelin.cell_QMARK_.call(null,G__166319));
})())){
source_166333.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_166333.sinks,this$);

if((source_166333.rank > this$.rank)){
var seq__166320_166334 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__166315_166329,chunk__166316_166330,count__166317_166331,i__166318_166332,source_166333,vec__166314,f,sources){
return (function (p1__166309_SHARP_){
return p1__166309_SHARP_.sinks;
});})(seq__166315_166329,chunk__166316_166330,count__166317_166331,i__166318_166332,source_166333,vec__166314,f,sources))
,source_166333));
var chunk__166321_166335 = null;
var count__166322_166336 = (0);
var i__166323_166337 = (0);
while(true){
if((i__166323_166337 < count__166322_166336)){
var dep_166338 = chunk__166321_166335.cljs$core$IIndexed$_nth$arity$2(null,i__166323_166337);
dep_166338.rank = tailrecursion.javelin.next_rank();

var G__166339 = seq__166320_166334;
var G__166340 = chunk__166321_166335;
var G__166341 = count__166322_166336;
var G__166342 = (i__166323_166337 + (1));
seq__166320_166334 = G__166339;
chunk__166321_166335 = G__166340;
count__166322_166336 = G__166341;
i__166323_166337 = G__166342;
continue;
} else {
var temp__4425__auto___166343 = cljs.core.seq(seq__166320_166334);
if(temp__4425__auto___166343){
var seq__166320_166344__$1 = temp__4425__auto___166343;
if(cljs.core.chunked_seq_QMARK_(seq__166320_166344__$1)){
var c__4995__auto___166345 = cljs.core.chunk_first(seq__166320_166344__$1);
var G__166346 = cljs.core.chunk_rest(seq__166320_166344__$1);
var G__166347 = c__4995__auto___166345;
var G__166348 = cljs.core.count(c__4995__auto___166345);
var G__166349 = (0);
seq__166320_166334 = G__166346;
chunk__166321_166335 = G__166347;
count__166322_166336 = G__166348;
i__166323_166337 = G__166349;
continue;
} else {
var dep_166350 = cljs.core.first(seq__166320_166344__$1);
dep_166350.rank = tailrecursion.javelin.next_rank();

var G__166351 = cljs.core.next(seq__166320_166344__$1);
var G__166352 = null;
var G__166353 = (0);
var G__166354 = (0);
seq__166320_166334 = G__166351;
chunk__166321_166335 = G__166352;
count__166322_166336 = G__166353;
i__166323_166337 = G__166354;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__166355 = seq__166315_166329;
var G__166356 = chunk__166316_166330;
var G__166357 = count__166317_166331;
var G__166358 = (i__166318_166332 + (1));
seq__166315_166329 = G__166355;
chunk__166316_166330 = G__166356;
count__166317_166331 = G__166357;
i__166318_166332 = G__166358;
continue;
} else {
var temp__4425__auto___166359 = cljs.core.seq(seq__166315_166329);
if(temp__4425__auto___166359){
var seq__166315_166360__$1 = temp__4425__auto___166359;
if(cljs.core.chunked_seq_QMARK_(seq__166315_166360__$1)){
var c__4995__auto___166361 = cljs.core.chunk_first(seq__166315_166360__$1);
var G__166362 = cljs.core.chunk_rest(seq__166315_166360__$1);
var G__166363 = c__4995__auto___166361;
var G__166364 = cljs.core.count(c__4995__auto___166361);
var G__166365 = (0);
seq__166315_166329 = G__166362;
chunk__166316_166330 = G__166363;
count__166317_166331 = G__166364;
i__166318_166332 = G__166365;
continue;
} else {
var source_166366 = cljs.core.first(seq__166315_166360__$1);
if(cljs.core.truth_((function (){var G__166324 = source_166366;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166324) : tailrecursion.javelin.cell_QMARK_.call(null,G__166324));
})())){
source_166366.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_166366.sinks,this$);

if((source_166366.rank > this$.rank)){
var seq__166325_166367 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__166315_166329,chunk__166316_166330,count__166317_166331,i__166318_166332,source_166366,seq__166315_166360__$1,temp__4425__auto___166359,vec__166314,f,sources){
return (function (p1__166309_SHARP_){
return p1__166309_SHARP_.sinks;
});})(seq__166315_166329,chunk__166316_166330,count__166317_166331,i__166318_166332,source_166366,seq__166315_166360__$1,temp__4425__auto___166359,vec__166314,f,sources))
,source_166366));
var chunk__166326_166368 = null;
var count__166327_166369 = (0);
var i__166328_166370 = (0);
while(true){
if((i__166328_166370 < count__166327_166369)){
var dep_166371 = chunk__166326_166368.cljs$core$IIndexed$_nth$arity$2(null,i__166328_166370);
dep_166371.rank = tailrecursion.javelin.next_rank();

var G__166372 = seq__166325_166367;
var G__166373 = chunk__166326_166368;
var G__166374 = count__166327_166369;
var G__166375 = (i__166328_166370 + (1));
seq__166325_166367 = G__166372;
chunk__166326_166368 = G__166373;
count__166327_166369 = G__166374;
i__166328_166370 = G__166375;
continue;
} else {
var temp__4425__auto___166376__$1 = cljs.core.seq(seq__166325_166367);
if(temp__4425__auto___166376__$1){
var seq__166325_166377__$1 = temp__4425__auto___166376__$1;
if(cljs.core.chunked_seq_QMARK_(seq__166325_166377__$1)){
var c__4995__auto___166378 = cljs.core.chunk_first(seq__166325_166377__$1);
var G__166379 = cljs.core.chunk_rest(seq__166325_166377__$1);
var G__166380 = c__4995__auto___166378;
var G__166381 = cljs.core.count(c__4995__auto___166378);
var G__166382 = (0);
seq__166325_166367 = G__166379;
chunk__166326_166368 = G__166380;
count__166327_166369 = G__166381;
i__166328_166370 = G__166382;
continue;
} else {
var dep_166383 = cljs.core.first(seq__166325_166377__$1);
dep_166383.rank = tailrecursion.javelin.next_rank();

var G__166384 = cljs.core.next(seq__166325_166377__$1);
var G__166385 = null;
var G__166386 = (0);
var G__166387 = (0);
seq__166325_166367 = G__166384;
chunk__166326_166368 = G__166385;
count__166327_166369 = G__166386;
i__166328_166370 = G__166387;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__166388 = cljs.core.next(seq__166315_166360__$1);
var G__166389 = null;
var G__166390 = (0);
var G__166391 = (0);
seq__166315_166329 = G__166388;
chunk__166316_166330 = G__166389;
count__166317_166331 = G__166390;
i__166318_166332 = G__166391;
continue;
}
} else {
}
}
break;
}

var compute_166392 = ((function (vec__166314,f,sources){
return (function (p1__166310_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__166310_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__166310_SHARP_)));
});})(vec__166314,f,sources))
;
this$.thunk = ((function (compute_166392,vec__166314,f,sources){
return (function (){
return this$.state = compute_166392(this$.sources);
});})(compute_166392,vec__166314,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq166311){
var G__166312 = cljs.core.first(seq166311);
var seq166311__$1 = cljs.core.next(seq166311);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__166312,seq166311__$1);
});

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__166393 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166393) : tailrecursion.javelin.lens_QMARK_.call(null,G__166393));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__166394 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166394) : tailrecursion.javelin.input_QMARK_.call(null,G__166394));
})())){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__166395 = this$__$1;
var G__166396 = (function (){var G__166397 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__166397) : f.call(null,G__166397));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__166395,G__166396) : cljs.core.reset_BANG_.call(null,G__166395,G__166396));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__166398 = this$__$1;
var G__166399 = (function (){var G__166400 = this$__$1.state;
var G__166401 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__166400,G__166401) : f.call(null,G__166400,G__166401));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__166398,G__166399) : cljs.core.reset_BANG_.call(null,G__166398,G__166399));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__166402 = this$__$1;
var G__166403 = (function (){var G__166404 = this$__$1.state;
var G__166405 = a;
var G__166406 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__166404,G__166405,G__166406) : f.call(null,G__166404,G__166405,G__166406));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__166402,G__166403) : cljs.core.reset_BANG_.call(null,G__166402,G__166403));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__166407 = this$__$1;
var G__166408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__166407,G__166408) : cljs.core.reset_BANG_.call(null,G__166407,G__166408));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__166409 = cljs.core.seq(self__.watches);
var chunk__166410 = null;
var count__166411 = (0);
var i__166412 = (0);
while(true){
if((i__166412 < count__166411)){
var vec__166413 = chunk__166410.cljs$core$IIndexed$_nth$arity$2(null,i__166412);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166413,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166413,(1),null);
var G__166414_166423 = key;
var G__166415_166424 = this$__$1;
var G__166416_166425 = o;
var G__166417_166426 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__166414_166423,G__166415_166424,G__166416_166425,G__166417_166426) : f.call(null,G__166414_166423,G__166415_166424,G__166416_166425,G__166417_166426));

var G__166427 = seq__166409;
var G__166428 = chunk__166410;
var G__166429 = count__166411;
var G__166430 = (i__166412 + (1));
seq__166409 = G__166427;
chunk__166410 = G__166428;
count__166411 = G__166429;
i__166412 = G__166430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__166409);
if(temp__4425__auto__){
var seq__166409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__166409__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__166409__$1);
var G__166431 = cljs.core.chunk_rest(seq__166409__$1);
var G__166432 = c__4995__auto__;
var G__166433 = cljs.core.count(c__4995__auto__);
var G__166434 = (0);
seq__166409 = G__166431;
chunk__166410 = G__166432;
count__166411 = G__166433;
i__166412 = G__166434;
continue;
} else {
var vec__166418 = cljs.core.first(seq__166409__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166418,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166418,(1),null);
var G__166419_166435 = key;
var G__166420_166436 = this$__$1;
var G__166421_166437 = o;
var G__166422_166438 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__166419_166435,G__166420_166436,G__166421_166437,G__166422_166438) : f.call(null,G__166419_166435,G__166420_166436,G__166421_166437,G__166422_166438));

var G__166439 = cljs.core.next(seq__166409__$1);
var G__166440 = null;
var G__166441 = (0);
var G__166442 = (0);
seq__166409 = G__166439;
chunk__166410 = G__166440;
count__166411 = G__166441;
i__166412 = G__166442;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

tailrecursion.javelin.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return c.thunk;
} else {
return and__4198__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return c.update;
} else {
return and__4198__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__4198__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function tailrecursion$javelin$set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_(c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__166445__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__166444 = cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__166444) : tailrecursion.javelin.cell.call(null,G__166444));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__166445 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__166446__i = 0, G__166446__a = new Array(arguments.length -  0);
while (G__166446__i < G__166446__a.length) {G__166446__a[G__166446__i] = arguments[G__166446__i + 0]; ++G__166446__i;}
  sources = new cljs.core.IndexedSeq(G__166446__a,0);
} 
return G__166445__delegate.call(this,sources);};
G__166445.cljs$lang$maxFixedArity = 0;
G__166445.cljs$lang$applyTo = (function (arglist__166447){
var sources = cljs.core.seq(arglist__166447);
return G__166445__delegate(sources);
});
G__166445.cljs$core$IFn$_invoke$arity$variadic = G__166445__delegate;
return G__166445;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_((new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__166448_SHARP_){
var _STAR_tx_STAR_166453 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__166454 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__166454) : cljs.core.atom.call(null,G__166454));
})();

try{return (p1__166448_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__166448_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__166448_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_166453;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__166455 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166455) : cljs.core.deref.call(null,G__166455));
})();
var _STAR_tx_STAR_166456 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_166456;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__166463 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__166463) : cljs.core.atom.call(null,G__166463));
})();
var tag_neq = ((function (olds){
return (function (p1__166457_SHARP_,p2__166458_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__166457_SHARP_,p2__166458_SHARP_),p2__166458_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__166460_SHARP_,p2__166459_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__166460_SHARP_,p2__166459_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__166467__delegate = function (rest__166461_SHARP_){
var news = diff((function (){var G__166464 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166464) : cljs.core.deref.call(null,G__166464));
})(),rest__166461_SHARP_);
var G__166465_166468 = olds;
var G__166466_166469 = rest__166461_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__166465_166468,G__166466_166469) : cljs.core.reset_BANG_.call(null,G__166465_166468,G__166466_166469));

return news;
};
var G__166467 = function (var_args){
var rest__166461_SHARP_ = null;
if (arguments.length > 0) {
var G__166470__i = 0, G__166470__a = new Array(arguments.length -  0);
while (G__166470__i < G__166470__a.length) {G__166470__a[G__166470__i] = arguments[G__166470__i + 0]; ++G__166470__i;}
  rest__166461_SHARP_ = new cljs.core.IndexedSeq(G__166470__a,0);
} 
return G__166467__delegate.call(this,rest__166461_SHARP_);};
G__166467.cljs$lang$maxFixedArity = 0;
G__166467.cljs$lang$applyTo = (function (arglist__166471){
var rest__166461_SHARP_ = cljs.core.seq(arglist__166471);
return G__166467__delegate(rest__166461_SHARP_);
});
G__166467.cljs$core$IFn$_invoke$arity$variadic = G__166467__delegate;
return G__166467;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq166462){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq166462));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__166472_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__166472_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__166474 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166474) : cljs.core.deref.call(null,G__166474));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__166475_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__166475_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__166485_166494 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__166486_166495 = null;
var count__166487_166496 = (0);
var i__166488_166497 = (0);
while(true){
if((i__166488_166497 < count__166487_166496)){
var i_166498 = chunk__166486_166495.cljs$core$IIndexed$_nth$arity$2(null,i__166488_166497);
var G__166489_166499 = (function (){var G__166490 = i_166498;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__166490) : ith_item__$1.call(null,G__166490));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__166489_166499) : f__$1.call(null,G__166489_166499));

var G__166500 = seq__166485_166494;
var G__166501 = chunk__166486_166495;
var G__166502 = count__166487_166496;
var G__166503 = (i__166488_166497 + (1));
seq__166485_166494 = G__166500;
chunk__166486_166495 = G__166501;
count__166487_166496 = G__166502;
i__166488_166497 = G__166503;
continue;
} else {
var temp__4425__auto___166504 = cljs.core.seq(seq__166485_166494);
if(temp__4425__auto___166504){
var seq__166485_166505__$1 = temp__4425__auto___166504;
if(cljs.core.chunked_seq_QMARK_(seq__166485_166505__$1)){
var c__4995__auto___166506 = cljs.core.chunk_first(seq__166485_166505__$1);
var G__166507 = cljs.core.chunk_rest(seq__166485_166505__$1);
var G__166508 = c__4995__auto___166506;
var G__166509 = cljs.core.count(c__4995__auto___166506);
var G__166510 = (0);
seq__166485_166494 = G__166507;
chunk__166486_166495 = G__166508;
count__166487_166496 = G__166509;
i__166488_166497 = G__166510;
continue;
} else {
var i_166511 = cljs.core.first(seq__166485_166505__$1);
var G__166491_166512 = (function (){var G__166492 = i_166511;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__166492) : ith_item__$1.call(null,G__166492));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__166491_166512) : f__$1.call(null,G__166491_166512));

var G__166513 = cljs.core.next(seq__166485_166505__$1);
var G__166514 = null;
var G__166515 = (0);
var G__166516 = (0);
seq__166485_166494 = G__166513;
chunk__166486_166495 = G__166514;
count__166487_166496 = G__166515;
i__166488_166497 = G__166516;
continue;
}
} else {
}
}
break;
}

var G__166493 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__166493) : reset_pool_size_BANG_.call(null,G__166493));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
