// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
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
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
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

var G__10394 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10392_SHARP_,p2__10393_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10392_SHARP_,p2__10393_SHARP_,p2__10393_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10394;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : tailrecursion.javelin.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
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
}catch (e10396){if((e10396 instanceof Error)){
var _ = e10396;
return null;
} else {
throw e10396;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__10399 = c;
tailrecursion.javelin.add_sync_BANG_(G__10399);

return G__10399;
} else {
var G__10400 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__10400));

return G__10400;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10409 = arguments.length;
var i__6062__auto___10410 = (0);
while(true){
if((i__6062__auto___10410 < len__6061__auto___10409)){
args__6068__auto__.push((arguments[i__6062__auto___10410]));

var G__10411 = (i__6062__auto___10410 + (1));
i__6062__auto___10410 = G__10411;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10403){
var vec__10404 = p__10403;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10404,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10405 = cljs.core.seq(srcs);
var chunk__10406 = null;
var count__10407 = (0);
var i__10408 = (0);
while(true){
if((i__10408 < count__10407)){
var src = chunk__10406.cljs$core$IIndexed$_nth$arity$2(null,i__10408);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10412 = seq__10405;
var G__10413 = chunk__10406;
var G__10414 = count__10407;
var G__10415 = (i__10408 + (1));
seq__10405 = G__10412;
chunk__10406 = G__10413;
count__10407 = G__10414;
i__10408 = G__10415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10405);
if(temp__4425__auto__){
var seq__10405__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10405__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10405__$1);
var G__10416 = cljs.core.chunk_rest(seq__10405__$1);
var G__10417 = c__5806__auto__;
var G__10418 = cljs.core.count(c__5806__auto__);
var G__10419 = (0);
seq__10405 = G__10416;
chunk__10406 = G__10417;
count__10407 = G__10418;
i__10408 = G__10419;
continue;
} else {
var src = cljs.core.first(seq__10405__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10420 = cljs.core.next(seq__10405__$1);
var G__10421 = null;
var G__10422 = (0);
var G__10423 = (0);
seq__10405 = G__10420;
chunk__10406 = G__10421;
count__10407 = G__10422;
i__10408 = G__10423;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10401){
var G__10402 = cljs.core.first(seq10401);
var seq10401__$1 = cljs.core.next(seq10401);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10402,seq10401__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10442 = arguments.length;
var i__6062__auto___10443 = (0);
while(true){
if((i__6062__auto___10443 < len__6061__auto___10442)){
args__6068__auto__.push((arguments[i__6062__auto___10443]));

var G__10444 = (i__6062__auto___10443 + (1));
i__6062__auto___10443 = G__10444;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10428){
var vec__10429 = p__10428;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10429,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10429,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__10430_10445 = cljs.core.seq(this$.sources);
var chunk__10431_10446 = null;
var count__10432_10447 = (0);
var i__10433_10448 = (0);
while(true){
if((i__10433_10448 < count__10432_10447)){
var source_10449 = chunk__10431_10446.cljs$core$IIndexed$_nth$arity$2(null,i__10433_10448);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10449) : tailrecursion.javelin.cell_QMARK_.call(null,source_10449)))){
source_10449.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10449.sinks,this$);

if((source_10449.rank > this$.rank)){
var seq__10434_10450 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10430_10445,chunk__10431_10446,count__10432_10447,i__10433_10448,source_10449,vec__10429,f,sources){
return (function (p1__10424_SHARP_){
return p1__10424_SHARP_.sinks;
});})(seq__10430_10445,chunk__10431_10446,count__10432_10447,i__10433_10448,source_10449,vec__10429,f,sources))
,source_10449));
var chunk__10435_10451 = null;
var count__10436_10452 = (0);
var i__10437_10453 = (0);
while(true){
if((i__10437_10453 < count__10436_10452)){
var dep_10454 = chunk__10435_10451.cljs$core$IIndexed$_nth$arity$2(null,i__10437_10453);
dep_10454.rank = tailrecursion.javelin.next_rank();

var G__10455 = seq__10434_10450;
var G__10456 = chunk__10435_10451;
var G__10457 = count__10436_10452;
var G__10458 = (i__10437_10453 + (1));
seq__10434_10450 = G__10455;
chunk__10435_10451 = G__10456;
count__10436_10452 = G__10457;
i__10437_10453 = G__10458;
continue;
} else {
var temp__4425__auto___10459 = cljs.core.seq(seq__10434_10450);
if(temp__4425__auto___10459){
var seq__10434_10460__$1 = temp__4425__auto___10459;
if(cljs.core.chunked_seq_QMARK_(seq__10434_10460__$1)){
var c__5806__auto___10461 = cljs.core.chunk_first(seq__10434_10460__$1);
var G__10462 = cljs.core.chunk_rest(seq__10434_10460__$1);
var G__10463 = c__5806__auto___10461;
var G__10464 = cljs.core.count(c__5806__auto___10461);
var G__10465 = (0);
seq__10434_10450 = G__10462;
chunk__10435_10451 = G__10463;
count__10436_10452 = G__10464;
i__10437_10453 = G__10465;
continue;
} else {
var dep_10466 = cljs.core.first(seq__10434_10460__$1);
dep_10466.rank = tailrecursion.javelin.next_rank();

var G__10467 = cljs.core.next(seq__10434_10460__$1);
var G__10468 = null;
var G__10469 = (0);
var G__10470 = (0);
seq__10434_10450 = G__10467;
chunk__10435_10451 = G__10468;
count__10436_10452 = G__10469;
i__10437_10453 = G__10470;
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

var G__10471 = seq__10430_10445;
var G__10472 = chunk__10431_10446;
var G__10473 = count__10432_10447;
var G__10474 = (i__10433_10448 + (1));
seq__10430_10445 = G__10471;
chunk__10431_10446 = G__10472;
count__10432_10447 = G__10473;
i__10433_10448 = G__10474;
continue;
} else {
var temp__4425__auto___10475 = cljs.core.seq(seq__10430_10445);
if(temp__4425__auto___10475){
var seq__10430_10476__$1 = temp__4425__auto___10475;
if(cljs.core.chunked_seq_QMARK_(seq__10430_10476__$1)){
var c__5806__auto___10477 = cljs.core.chunk_first(seq__10430_10476__$1);
var G__10478 = cljs.core.chunk_rest(seq__10430_10476__$1);
var G__10479 = c__5806__auto___10477;
var G__10480 = cljs.core.count(c__5806__auto___10477);
var G__10481 = (0);
seq__10430_10445 = G__10478;
chunk__10431_10446 = G__10479;
count__10432_10447 = G__10480;
i__10433_10448 = G__10481;
continue;
} else {
var source_10482 = cljs.core.first(seq__10430_10476__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10482) : tailrecursion.javelin.cell_QMARK_.call(null,source_10482)))){
source_10482.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10482.sinks,this$);

if((source_10482.rank > this$.rank)){
var seq__10438_10483 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10430_10445,chunk__10431_10446,count__10432_10447,i__10433_10448,source_10482,seq__10430_10476__$1,temp__4425__auto___10475,vec__10429,f,sources){
return (function (p1__10424_SHARP_){
return p1__10424_SHARP_.sinks;
});})(seq__10430_10445,chunk__10431_10446,count__10432_10447,i__10433_10448,source_10482,seq__10430_10476__$1,temp__4425__auto___10475,vec__10429,f,sources))
,source_10482));
var chunk__10439_10484 = null;
var count__10440_10485 = (0);
var i__10441_10486 = (0);
while(true){
if((i__10441_10486 < count__10440_10485)){
var dep_10487 = chunk__10439_10484.cljs$core$IIndexed$_nth$arity$2(null,i__10441_10486);
dep_10487.rank = tailrecursion.javelin.next_rank();

var G__10488 = seq__10438_10483;
var G__10489 = chunk__10439_10484;
var G__10490 = count__10440_10485;
var G__10491 = (i__10441_10486 + (1));
seq__10438_10483 = G__10488;
chunk__10439_10484 = G__10489;
count__10440_10485 = G__10490;
i__10441_10486 = G__10491;
continue;
} else {
var temp__4425__auto___10492__$1 = cljs.core.seq(seq__10438_10483);
if(temp__4425__auto___10492__$1){
var seq__10438_10493__$1 = temp__4425__auto___10492__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10438_10493__$1)){
var c__5806__auto___10494 = cljs.core.chunk_first(seq__10438_10493__$1);
var G__10495 = cljs.core.chunk_rest(seq__10438_10493__$1);
var G__10496 = c__5806__auto___10494;
var G__10497 = cljs.core.count(c__5806__auto___10494);
var G__10498 = (0);
seq__10438_10483 = G__10495;
chunk__10439_10484 = G__10496;
count__10440_10485 = G__10497;
i__10441_10486 = G__10498;
continue;
} else {
var dep_10499 = cljs.core.first(seq__10438_10493__$1);
dep_10499.rank = tailrecursion.javelin.next_rank();

var G__10500 = cljs.core.next(seq__10438_10493__$1);
var G__10501 = null;
var G__10502 = (0);
var G__10503 = (0);
seq__10438_10483 = G__10500;
chunk__10439_10484 = G__10501;
count__10440_10485 = G__10502;
i__10441_10486 = G__10503;
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

var G__10504 = cljs.core.next(seq__10430_10476__$1);
var G__10505 = null;
var G__10506 = (0);
var G__10507 = (0);
seq__10430_10445 = G__10504;
chunk__10431_10446 = G__10505;
count__10432_10447 = G__10506;
i__10433_10448 = G__10507;
continue;
}
} else {
}
}
break;
}

var compute_10508 = ((function (vec__10429,f,sources){
return (function (p1__10425_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10425_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10425_SHARP_)));
});})(vec__10429,f,sources))
;
this$.thunk = ((function (compute_10508,vec__10429,f,sources){
return (function (){
return this$.state = compute_10508(this$.sources);
});})(compute_10508,vec__10429,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq10426){
var G__10427 = cljs.core.first(seq10426);
var seq10426__$1 = cljs.core.next(seq10426);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10427,seq10426__$1);
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
if(cljs.core.truth_((tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : tailrecursion.javelin.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : tailrecursion.javelin.input_QMARK_.call(null,this$__$1)))){
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
var G__10510 = this$__$1;
var G__10511 = (function (){var G__10512 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10512) : f.call(null,G__10512));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10510,G__10511) : cljs.core.reset_BANG_.call(null,G__10510,G__10511));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__10515 = this$__$1;
var G__10516 = (function (){var G__10517 = this$__$1.state;
var G__10518 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10517,G__10518) : f.call(null,G__10517,G__10518));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10515,G__10516) : cljs.core.reset_BANG_.call(null,G__10515,G__10516));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__10522 = this$__$1;
var G__10523 = (function (){var G__10524 = this$__$1.state;
var G__10525 = a;
var G__10526 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10524,G__10525,G__10526) : f.call(null,G__10524,G__10525,G__10526));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10522,G__10523) : cljs.core.reset_BANG_.call(null,G__10522,G__10523));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__10527 = this$__$1;
var G__10528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10527,G__10528) : cljs.core.reset_BANG_.call(null,G__10527,G__10528));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__10529 = cljs.core.seq(self__.watches);
var chunk__10530 = null;
var count__10531 = (0);
var i__10532 = (0);
while(true){
if((i__10532 < count__10531)){
var vec__10533 = chunk__10530.cljs$core$IIndexed$_nth$arity$2(null,i__10532);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10533,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10533,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10535 = seq__10529;
var G__10536 = chunk__10530;
var G__10537 = count__10531;
var G__10538 = (i__10532 + (1));
seq__10529 = G__10535;
chunk__10530 = G__10536;
count__10531 = G__10537;
i__10532 = G__10538;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10529);
if(temp__4425__auto__){
var seq__10529__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10529__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10529__$1);
var G__10539 = cljs.core.chunk_rest(seq__10529__$1);
var G__10540 = c__5806__auto__;
var G__10541 = cljs.core.count(c__5806__auto__);
var G__10542 = (0);
seq__10529 = G__10539;
chunk__10530 = G__10540;
count__10531 = G__10541;
i__10532 = G__10542;
continue;
} else {
var vec__10534 = cljs.core.first(seq__10529__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10543 = cljs.core.next(seq__10529__$1);
var G__10544 = null;
var G__10545 = (0);
var G__10546 = (0);
seq__10529 = G__10543;
chunk__10530 = G__10544;
count__10531 = G__10545;
i__10532 = G__10546;
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
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write(writer__5602__auto__,"tailrecursion.javelin/Cell");
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return c.thunk;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return c.update;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__5010__auto__;
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
var G__10547__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__10547 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10548__i = 0, G__10548__a = new Array(arguments.length -  0);
while (G__10548__i < G__10548__a.length) {G__10548__a[G__10548__i] = arguments[G__10548__i + 0]; ++G__10548__i;}
  sources = new cljs.core.IndexedSeq(G__10548__a,0);
} 
return G__10547__delegate.call(this,sources);};
G__10547.cljs$lang$maxFixedArity = 0;
G__10547.cljs$lang$applyTo = (function (arglist__10549){
var sources = cljs.core.seq(arglist__10549);
return G__10547__delegate(sources);
});
G__10547.cljs$core$IFn$_invoke$arity$variadic = G__10547__delegate;
return G__10547;
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
var bind = (function (p1__10550_SHARP_){
var _STAR_tx_STAR_10554 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__10555 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10555) : cljs.core.atom.call(null,G__10555));
})();

try{return (p1__10550_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10550_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10550_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10554;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_10556 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10556;
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
var args__6068__auto__ = [];
var len__6061__auto___10564 = arguments.length;
var i__6062__auto___10565 = (0);
while(true){
if((i__6062__auto___10565 < len__6061__auto___10564)){
args__6068__auto__.push((arguments[i__6062__auto___10565]));

var G__10566 = (i__6062__auto___10565 + (1));
i__6062__auto___10565 = G__10566;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__10563 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10563) : cljs.core.atom.call(null,G__10563));
})();
var tag_neq = ((function (olds){
return (function (p1__10557_SHARP_,p2__10558_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10557_SHARP_,p2__10558_SHARP_),p2__10558_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10560_SHARP_,p2__10559_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10560_SHARP_,p2__10559_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10567__delegate = function (rest__10561_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__10561_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__10561_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__10561_SHARP_));

return news;
};
var G__10567 = function (var_args){
var rest__10561_SHARP_ = null;
if (arguments.length > 0) {
var G__10568__i = 0, G__10568__a = new Array(arguments.length -  0);
while (G__10568__i < G__10568__a.length) {G__10568__a[G__10568__i] = arguments[G__10568__i + 0]; ++G__10568__i;}
  rest__10561_SHARP_ = new cljs.core.IndexedSeq(G__10568__a,0);
} 
return G__10567__delegate.call(this,rest__10561_SHARP_);};
G__10567.cljs$lang$maxFixedArity = 0;
G__10567.cljs$lang$applyTo = (function (arglist__10569){
var rest__10561_SHARP_ = cljs.core.seq(arglist__10569);
return G__10567__delegate(rest__10561_SHARP_);
});
G__10567.cljs$core$IFn$_invoke$arity$variadic = G__10567__delegate;
return G__10567;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq10562){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10562));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10570_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10570_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10571_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10571_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10578_10584 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__10579_10585 = null;
var count__10580_10586 = (0);
var i__10581_10587 = (0);
while(true){
if((i__10581_10587 < count__10580_10586)){
var i_10588 = chunk__10579_10585.cljs$core$IIndexed$_nth$arity$2(null,i__10581_10587);
var G__10582_10589 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10588) : ith_item__$1.call(null,i_10588));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10582_10589) : f__$1.call(null,G__10582_10589));

var G__10590 = seq__10578_10584;
var G__10591 = chunk__10579_10585;
var G__10592 = count__10580_10586;
var G__10593 = (i__10581_10587 + (1));
seq__10578_10584 = G__10590;
chunk__10579_10585 = G__10591;
count__10580_10586 = G__10592;
i__10581_10587 = G__10593;
continue;
} else {
var temp__4425__auto___10594 = cljs.core.seq(seq__10578_10584);
if(temp__4425__auto___10594){
var seq__10578_10595__$1 = temp__4425__auto___10594;
if(cljs.core.chunked_seq_QMARK_(seq__10578_10595__$1)){
var c__5806__auto___10596 = cljs.core.chunk_first(seq__10578_10595__$1);
var G__10597 = cljs.core.chunk_rest(seq__10578_10595__$1);
var G__10598 = c__5806__auto___10596;
var G__10599 = cljs.core.count(c__5806__auto___10596);
var G__10600 = (0);
seq__10578_10584 = G__10597;
chunk__10579_10585 = G__10598;
count__10580_10586 = G__10599;
i__10581_10587 = G__10600;
continue;
} else {
var i_10601 = cljs.core.first(seq__10578_10595__$1);
var G__10583_10602 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10601) : ith_item__$1.call(null,i_10601));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10583_10602) : f__$1.call(null,G__10583_10602));

var G__10603 = cljs.core.next(seq__10578_10595__$1);
var G__10604 = null;
var G__10605 = (0);
var G__10606 = (0);
seq__10578_10584 = G__10603;
chunk__10579_10585 = G__10604;
count__10580_10586 = G__10605;
i__10581_10587 = G__10606;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
