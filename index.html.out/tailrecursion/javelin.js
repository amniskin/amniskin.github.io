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

var G__10390 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10388_SHARP_,p2__10389_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10388_SHARP_,p2__10389_SHARP_,p2__10389_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10390;
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
}catch (e10392){if((e10392 instanceof Error)){
var _ = e10392;
return null;
} else {
throw e10392;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__10395 = c;
tailrecursion.javelin.add_sync_BANG_(G__10395);

return G__10395;
} else {
var G__10396 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__10396));

return G__10396;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10405 = arguments.length;
var i__6062__auto___10406 = (0);
while(true){
if((i__6062__auto___10406 < len__6061__auto___10405)){
args__6068__auto__.push((arguments[i__6062__auto___10406]));

var G__10407 = (i__6062__auto___10406 + (1));
i__6062__auto___10406 = G__10407;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10399){
var vec__10400 = p__10399;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10401 = cljs.core.seq(srcs);
var chunk__10402 = null;
var count__10403 = (0);
var i__10404 = (0);
while(true){
if((i__10404 < count__10403)){
var src = chunk__10402.cljs$core$IIndexed$_nth$arity$2(null,i__10404);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10408 = seq__10401;
var G__10409 = chunk__10402;
var G__10410 = count__10403;
var G__10411 = (i__10404 + (1));
seq__10401 = G__10408;
chunk__10402 = G__10409;
count__10403 = G__10410;
i__10404 = G__10411;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10401);
if(temp__4425__auto__){
var seq__10401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10401__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10401__$1);
var G__10412 = cljs.core.chunk_rest(seq__10401__$1);
var G__10413 = c__5806__auto__;
var G__10414 = cljs.core.count(c__5806__auto__);
var G__10415 = (0);
seq__10401 = G__10412;
chunk__10402 = G__10413;
count__10403 = G__10414;
i__10404 = G__10415;
continue;
} else {
var src = cljs.core.first(seq__10401__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10416 = cljs.core.next(seq__10401__$1);
var G__10417 = null;
var G__10418 = (0);
var G__10419 = (0);
seq__10401 = G__10416;
chunk__10402 = G__10417;
count__10403 = G__10418;
i__10404 = G__10419;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10397){
var G__10398 = cljs.core.first(seq10397);
var seq10397__$1 = cljs.core.next(seq10397);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10398,seq10397__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10438 = arguments.length;
var i__6062__auto___10439 = (0);
while(true){
if((i__6062__auto___10439 < len__6061__auto___10438)){
args__6068__auto__.push((arguments[i__6062__auto___10439]));

var G__10440 = (i__6062__auto___10439 + (1));
i__6062__auto___10439 = G__10440;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10424){
var vec__10425 = p__10424;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10425,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10425,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__10426_10441 = cljs.core.seq(this$.sources);
var chunk__10427_10442 = null;
var count__10428_10443 = (0);
var i__10429_10444 = (0);
while(true){
if((i__10429_10444 < count__10428_10443)){
var source_10445 = chunk__10427_10442.cljs$core$IIndexed$_nth$arity$2(null,i__10429_10444);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10445) : tailrecursion.javelin.cell_QMARK_.call(null,source_10445)))){
source_10445.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10445.sinks,this$);

if((source_10445.rank > this$.rank)){
var seq__10430_10446 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10426_10441,chunk__10427_10442,count__10428_10443,i__10429_10444,source_10445,vec__10425,f,sources){
return (function (p1__10420_SHARP_){
return p1__10420_SHARP_.sinks;
});})(seq__10426_10441,chunk__10427_10442,count__10428_10443,i__10429_10444,source_10445,vec__10425,f,sources))
,source_10445));
var chunk__10431_10447 = null;
var count__10432_10448 = (0);
var i__10433_10449 = (0);
while(true){
if((i__10433_10449 < count__10432_10448)){
var dep_10450 = chunk__10431_10447.cljs$core$IIndexed$_nth$arity$2(null,i__10433_10449);
dep_10450.rank = tailrecursion.javelin.next_rank();

var G__10451 = seq__10430_10446;
var G__10452 = chunk__10431_10447;
var G__10453 = count__10432_10448;
var G__10454 = (i__10433_10449 + (1));
seq__10430_10446 = G__10451;
chunk__10431_10447 = G__10452;
count__10432_10448 = G__10453;
i__10433_10449 = G__10454;
continue;
} else {
var temp__4425__auto___10455 = cljs.core.seq(seq__10430_10446);
if(temp__4425__auto___10455){
var seq__10430_10456__$1 = temp__4425__auto___10455;
if(cljs.core.chunked_seq_QMARK_(seq__10430_10456__$1)){
var c__5806__auto___10457 = cljs.core.chunk_first(seq__10430_10456__$1);
var G__10458 = cljs.core.chunk_rest(seq__10430_10456__$1);
var G__10459 = c__5806__auto___10457;
var G__10460 = cljs.core.count(c__5806__auto___10457);
var G__10461 = (0);
seq__10430_10446 = G__10458;
chunk__10431_10447 = G__10459;
count__10432_10448 = G__10460;
i__10433_10449 = G__10461;
continue;
} else {
var dep_10462 = cljs.core.first(seq__10430_10456__$1);
dep_10462.rank = tailrecursion.javelin.next_rank();

var G__10463 = cljs.core.next(seq__10430_10456__$1);
var G__10464 = null;
var G__10465 = (0);
var G__10466 = (0);
seq__10430_10446 = G__10463;
chunk__10431_10447 = G__10464;
count__10432_10448 = G__10465;
i__10433_10449 = G__10466;
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

var G__10467 = seq__10426_10441;
var G__10468 = chunk__10427_10442;
var G__10469 = count__10428_10443;
var G__10470 = (i__10429_10444 + (1));
seq__10426_10441 = G__10467;
chunk__10427_10442 = G__10468;
count__10428_10443 = G__10469;
i__10429_10444 = G__10470;
continue;
} else {
var temp__4425__auto___10471 = cljs.core.seq(seq__10426_10441);
if(temp__4425__auto___10471){
var seq__10426_10472__$1 = temp__4425__auto___10471;
if(cljs.core.chunked_seq_QMARK_(seq__10426_10472__$1)){
var c__5806__auto___10473 = cljs.core.chunk_first(seq__10426_10472__$1);
var G__10474 = cljs.core.chunk_rest(seq__10426_10472__$1);
var G__10475 = c__5806__auto___10473;
var G__10476 = cljs.core.count(c__5806__auto___10473);
var G__10477 = (0);
seq__10426_10441 = G__10474;
chunk__10427_10442 = G__10475;
count__10428_10443 = G__10476;
i__10429_10444 = G__10477;
continue;
} else {
var source_10478 = cljs.core.first(seq__10426_10472__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10478) : tailrecursion.javelin.cell_QMARK_.call(null,source_10478)))){
source_10478.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10478.sinks,this$);

if((source_10478.rank > this$.rank)){
var seq__10434_10479 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10426_10441,chunk__10427_10442,count__10428_10443,i__10429_10444,source_10478,seq__10426_10472__$1,temp__4425__auto___10471,vec__10425,f,sources){
return (function (p1__10420_SHARP_){
return p1__10420_SHARP_.sinks;
});})(seq__10426_10441,chunk__10427_10442,count__10428_10443,i__10429_10444,source_10478,seq__10426_10472__$1,temp__4425__auto___10471,vec__10425,f,sources))
,source_10478));
var chunk__10435_10480 = null;
var count__10436_10481 = (0);
var i__10437_10482 = (0);
while(true){
if((i__10437_10482 < count__10436_10481)){
var dep_10483 = chunk__10435_10480.cljs$core$IIndexed$_nth$arity$2(null,i__10437_10482);
dep_10483.rank = tailrecursion.javelin.next_rank();

var G__10484 = seq__10434_10479;
var G__10485 = chunk__10435_10480;
var G__10486 = count__10436_10481;
var G__10487 = (i__10437_10482 + (1));
seq__10434_10479 = G__10484;
chunk__10435_10480 = G__10485;
count__10436_10481 = G__10486;
i__10437_10482 = G__10487;
continue;
} else {
var temp__4425__auto___10488__$1 = cljs.core.seq(seq__10434_10479);
if(temp__4425__auto___10488__$1){
var seq__10434_10489__$1 = temp__4425__auto___10488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10434_10489__$1)){
var c__5806__auto___10490 = cljs.core.chunk_first(seq__10434_10489__$1);
var G__10491 = cljs.core.chunk_rest(seq__10434_10489__$1);
var G__10492 = c__5806__auto___10490;
var G__10493 = cljs.core.count(c__5806__auto___10490);
var G__10494 = (0);
seq__10434_10479 = G__10491;
chunk__10435_10480 = G__10492;
count__10436_10481 = G__10493;
i__10437_10482 = G__10494;
continue;
} else {
var dep_10495 = cljs.core.first(seq__10434_10489__$1);
dep_10495.rank = tailrecursion.javelin.next_rank();

var G__10496 = cljs.core.next(seq__10434_10489__$1);
var G__10497 = null;
var G__10498 = (0);
var G__10499 = (0);
seq__10434_10479 = G__10496;
chunk__10435_10480 = G__10497;
count__10436_10481 = G__10498;
i__10437_10482 = G__10499;
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

var G__10500 = cljs.core.next(seq__10426_10472__$1);
var G__10501 = null;
var G__10502 = (0);
var G__10503 = (0);
seq__10426_10441 = G__10500;
chunk__10427_10442 = G__10501;
count__10428_10443 = G__10502;
i__10429_10444 = G__10503;
continue;
}
} else {
}
}
break;
}

var compute_10504 = ((function (vec__10425,f,sources){
return (function (p1__10421_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10421_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10421_SHARP_)));
});})(vec__10425,f,sources))
;
this$.thunk = ((function (compute_10504,vec__10425,f,sources){
return (function (){
return this$.state = compute_10504(this$.sources);
});})(compute_10504,vec__10425,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq10422){
var G__10423 = cljs.core.first(seq10422);
var seq10422__$1 = cljs.core.next(seq10422);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10423,seq10422__$1);
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
var G__10506 = this$__$1;
var G__10507 = (function (){var G__10508 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10508) : f.call(null,G__10508));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10506,G__10507) : cljs.core.reset_BANG_.call(null,G__10506,G__10507));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__10511 = this$__$1;
var G__10512 = (function (){var G__10513 = this$__$1.state;
var G__10514 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10513,G__10514) : f.call(null,G__10513,G__10514));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10511,G__10512) : cljs.core.reset_BANG_.call(null,G__10511,G__10512));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__10518 = this$__$1;
var G__10519 = (function (){var G__10520 = this$__$1.state;
var G__10521 = a;
var G__10522 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10520,G__10521,G__10522) : f.call(null,G__10520,G__10521,G__10522));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10518,G__10519) : cljs.core.reset_BANG_.call(null,G__10518,G__10519));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__10523 = this$__$1;
var G__10524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10523,G__10524) : cljs.core.reset_BANG_.call(null,G__10523,G__10524));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__10525 = cljs.core.seq(self__.watches);
var chunk__10526 = null;
var count__10527 = (0);
var i__10528 = (0);
while(true){
if((i__10528 < count__10527)){
var vec__10529 = chunk__10526.cljs$core$IIndexed$_nth$arity$2(null,i__10528);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10529,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10529,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10531 = seq__10525;
var G__10532 = chunk__10526;
var G__10533 = count__10527;
var G__10534 = (i__10528 + (1));
seq__10525 = G__10531;
chunk__10526 = G__10532;
count__10527 = G__10533;
i__10528 = G__10534;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10525);
if(temp__4425__auto__){
var seq__10525__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10525__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10525__$1);
var G__10535 = cljs.core.chunk_rest(seq__10525__$1);
var G__10536 = c__5806__auto__;
var G__10537 = cljs.core.count(c__5806__auto__);
var G__10538 = (0);
seq__10525 = G__10535;
chunk__10526 = G__10536;
count__10527 = G__10537;
i__10528 = G__10538;
continue;
} else {
var vec__10530 = cljs.core.first(seq__10525__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10539 = cljs.core.next(seq__10525__$1);
var G__10540 = null;
var G__10541 = (0);
var G__10542 = (0);
seq__10525 = G__10539;
chunk__10526 = G__10540;
count__10527 = G__10541;
i__10528 = G__10542;
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
var G__10543__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__10543 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10544__i = 0, G__10544__a = new Array(arguments.length -  0);
while (G__10544__i < G__10544__a.length) {G__10544__a[G__10544__i] = arguments[G__10544__i + 0]; ++G__10544__i;}
  sources = new cljs.core.IndexedSeq(G__10544__a,0);
} 
return G__10543__delegate.call(this,sources);};
G__10543.cljs$lang$maxFixedArity = 0;
G__10543.cljs$lang$applyTo = (function (arglist__10545){
var sources = cljs.core.seq(arglist__10545);
return G__10543__delegate(sources);
});
G__10543.cljs$core$IFn$_invoke$arity$variadic = G__10543__delegate;
return G__10543;
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
var bind = (function (p1__10546_SHARP_){
var _STAR_tx_STAR_10550 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__10551 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10551) : cljs.core.atom.call(null,G__10551));
})();

try{return (p1__10546_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10546_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10546_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10550;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_10552 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10552;
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
var len__6061__auto___10560 = arguments.length;
var i__6062__auto___10561 = (0);
while(true){
if((i__6062__auto___10561 < len__6061__auto___10560)){
args__6068__auto__.push((arguments[i__6062__auto___10561]));

var G__10562 = (i__6062__auto___10561 + (1));
i__6062__auto___10561 = G__10562;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__10559 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10559) : cljs.core.atom.call(null,G__10559));
})();
var tag_neq = ((function (olds){
return (function (p1__10553_SHARP_,p2__10554_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10553_SHARP_,p2__10554_SHARP_),p2__10554_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10556_SHARP_,p2__10555_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10556_SHARP_,p2__10555_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10563__delegate = function (rest__10557_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__10557_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__10557_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__10557_SHARP_));

return news;
};
var G__10563 = function (var_args){
var rest__10557_SHARP_ = null;
if (arguments.length > 0) {
var G__10564__i = 0, G__10564__a = new Array(arguments.length -  0);
while (G__10564__i < G__10564__a.length) {G__10564__a[G__10564__i] = arguments[G__10564__i + 0]; ++G__10564__i;}
  rest__10557_SHARP_ = new cljs.core.IndexedSeq(G__10564__a,0);
} 
return G__10563__delegate.call(this,rest__10557_SHARP_);};
G__10563.cljs$lang$maxFixedArity = 0;
G__10563.cljs$lang$applyTo = (function (arglist__10565){
var rest__10557_SHARP_ = cljs.core.seq(arglist__10565);
return G__10563__delegate(rest__10557_SHARP_);
});
G__10563.cljs$core$IFn$_invoke$arity$variadic = G__10563__delegate;
return G__10563;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq10558){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10558));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10566_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10566_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10567_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10567_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10574_10580 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__10575_10581 = null;
var count__10576_10582 = (0);
var i__10577_10583 = (0);
while(true){
if((i__10577_10583 < count__10576_10582)){
var i_10584 = chunk__10575_10581.cljs$core$IIndexed$_nth$arity$2(null,i__10577_10583);
var G__10578_10585 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10584) : ith_item__$1.call(null,i_10584));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10578_10585) : f__$1.call(null,G__10578_10585));

var G__10586 = seq__10574_10580;
var G__10587 = chunk__10575_10581;
var G__10588 = count__10576_10582;
var G__10589 = (i__10577_10583 + (1));
seq__10574_10580 = G__10586;
chunk__10575_10581 = G__10587;
count__10576_10582 = G__10588;
i__10577_10583 = G__10589;
continue;
} else {
var temp__4425__auto___10590 = cljs.core.seq(seq__10574_10580);
if(temp__4425__auto___10590){
var seq__10574_10591__$1 = temp__4425__auto___10590;
if(cljs.core.chunked_seq_QMARK_(seq__10574_10591__$1)){
var c__5806__auto___10592 = cljs.core.chunk_first(seq__10574_10591__$1);
var G__10593 = cljs.core.chunk_rest(seq__10574_10591__$1);
var G__10594 = c__5806__auto___10592;
var G__10595 = cljs.core.count(c__5806__auto___10592);
var G__10596 = (0);
seq__10574_10580 = G__10593;
chunk__10575_10581 = G__10594;
count__10576_10582 = G__10595;
i__10577_10583 = G__10596;
continue;
} else {
var i_10597 = cljs.core.first(seq__10574_10591__$1);
var G__10579_10598 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10597) : ith_item__$1.call(null,i_10597));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10579_10598) : f__$1.call(null,G__10579_10598));

var G__10599 = cljs.core.next(seq__10574_10591__$1);
var G__10600 = null;
var G__10601 = (0);
var G__10602 = (0);
seq__10574_10580 = G__10599;
chunk__10575_10581 = G__10600;
count__10576_10582 = G__10601;
i__10577_10583 = G__10602;
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
