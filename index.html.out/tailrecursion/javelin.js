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

var G__10382 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10380_SHARP_,p2__10381_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10380_SHARP_,p2__10381_SHARP_,p2__10381_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10382;
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
}catch (e10384){if((e10384 instanceof Error)){
var _ = e10384;
return null;
} else {
throw e10384;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__10387 = c;
tailrecursion.javelin.add_sync_BANG_(G__10387);

return G__10387;
} else {
var G__10388 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__10388));

return G__10388;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10397 = arguments.length;
var i__6062__auto___10398 = (0);
while(true){
if((i__6062__auto___10398 < len__6061__auto___10397)){
args__6068__auto__.push((arguments[i__6062__auto___10398]));

var G__10399 = (i__6062__auto___10398 + (1));
i__6062__auto___10398 = G__10399;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10391){
var vec__10392 = p__10391;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10393 = cljs.core.seq(srcs);
var chunk__10394 = null;
var count__10395 = (0);
var i__10396 = (0);
while(true){
if((i__10396 < count__10395)){
var src = chunk__10394.cljs$core$IIndexed$_nth$arity$2(null,i__10396);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10400 = seq__10393;
var G__10401 = chunk__10394;
var G__10402 = count__10395;
var G__10403 = (i__10396 + (1));
seq__10393 = G__10400;
chunk__10394 = G__10401;
count__10395 = G__10402;
i__10396 = G__10403;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10393);
if(temp__4425__auto__){
var seq__10393__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10393__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10393__$1);
var G__10404 = cljs.core.chunk_rest(seq__10393__$1);
var G__10405 = c__5806__auto__;
var G__10406 = cljs.core.count(c__5806__auto__);
var G__10407 = (0);
seq__10393 = G__10404;
chunk__10394 = G__10405;
count__10395 = G__10406;
i__10396 = G__10407;
continue;
} else {
var src = cljs.core.first(seq__10393__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10408 = cljs.core.next(seq__10393__$1);
var G__10409 = null;
var G__10410 = (0);
var G__10411 = (0);
seq__10393 = G__10408;
chunk__10394 = G__10409;
count__10395 = G__10410;
i__10396 = G__10411;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10389){
var G__10390 = cljs.core.first(seq10389);
var seq10389__$1 = cljs.core.next(seq10389);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10390,seq10389__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___10430 = arguments.length;
var i__6062__auto___10431 = (0);
while(true){
if((i__6062__auto___10431 < len__6061__auto___10430)){
args__6068__auto__.push((arguments[i__6062__auto___10431]));

var G__10432 = (i__6062__auto___10431 + (1));
i__6062__auto___10431 = G__10432;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10416){
var vec__10417 = p__10416;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__10418_10433 = cljs.core.seq(this$.sources);
var chunk__10419_10434 = null;
var count__10420_10435 = (0);
var i__10421_10436 = (0);
while(true){
if((i__10421_10436 < count__10420_10435)){
var source_10437 = chunk__10419_10434.cljs$core$IIndexed$_nth$arity$2(null,i__10421_10436);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10437) : tailrecursion.javelin.cell_QMARK_.call(null,source_10437)))){
source_10437.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10437.sinks,this$);

if((source_10437.rank > this$.rank)){
var seq__10422_10438 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10418_10433,chunk__10419_10434,count__10420_10435,i__10421_10436,source_10437,vec__10417,f,sources){
return (function (p1__10412_SHARP_){
return p1__10412_SHARP_.sinks;
});})(seq__10418_10433,chunk__10419_10434,count__10420_10435,i__10421_10436,source_10437,vec__10417,f,sources))
,source_10437));
var chunk__10423_10439 = null;
var count__10424_10440 = (0);
var i__10425_10441 = (0);
while(true){
if((i__10425_10441 < count__10424_10440)){
var dep_10442 = chunk__10423_10439.cljs$core$IIndexed$_nth$arity$2(null,i__10425_10441);
dep_10442.rank = tailrecursion.javelin.next_rank();

var G__10443 = seq__10422_10438;
var G__10444 = chunk__10423_10439;
var G__10445 = count__10424_10440;
var G__10446 = (i__10425_10441 + (1));
seq__10422_10438 = G__10443;
chunk__10423_10439 = G__10444;
count__10424_10440 = G__10445;
i__10425_10441 = G__10446;
continue;
} else {
var temp__4425__auto___10447 = cljs.core.seq(seq__10422_10438);
if(temp__4425__auto___10447){
var seq__10422_10448__$1 = temp__4425__auto___10447;
if(cljs.core.chunked_seq_QMARK_(seq__10422_10448__$1)){
var c__5806__auto___10449 = cljs.core.chunk_first(seq__10422_10448__$1);
var G__10450 = cljs.core.chunk_rest(seq__10422_10448__$1);
var G__10451 = c__5806__auto___10449;
var G__10452 = cljs.core.count(c__5806__auto___10449);
var G__10453 = (0);
seq__10422_10438 = G__10450;
chunk__10423_10439 = G__10451;
count__10424_10440 = G__10452;
i__10425_10441 = G__10453;
continue;
} else {
var dep_10454 = cljs.core.first(seq__10422_10448__$1);
dep_10454.rank = tailrecursion.javelin.next_rank();

var G__10455 = cljs.core.next(seq__10422_10448__$1);
var G__10456 = null;
var G__10457 = (0);
var G__10458 = (0);
seq__10422_10438 = G__10455;
chunk__10423_10439 = G__10456;
count__10424_10440 = G__10457;
i__10425_10441 = G__10458;
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

var G__10459 = seq__10418_10433;
var G__10460 = chunk__10419_10434;
var G__10461 = count__10420_10435;
var G__10462 = (i__10421_10436 + (1));
seq__10418_10433 = G__10459;
chunk__10419_10434 = G__10460;
count__10420_10435 = G__10461;
i__10421_10436 = G__10462;
continue;
} else {
var temp__4425__auto___10463 = cljs.core.seq(seq__10418_10433);
if(temp__4425__auto___10463){
var seq__10418_10464__$1 = temp__4425__auto___10463;
if(cljs.core.chunked_seq_QMARK_(seq__10418_10464__$1)){
var c__5806__auto___10465 = cljs.core.chunk_first(seq__10418_10464__$1);
var G__10466 = cljs.core.chunk_rest(seq__10418_10464__$1);
var G__10467 = c__5806__auto___10465;
var G__10468 = cljs.core.count(c__5806__auto___10465);
var G__10469 = (0);
seq__10418_10433 = G__10466;
chunk__10419_10434 = G__10467;
count__10420_10435 = G__10468;
i__10421_10436 = G__10469;
continue;
} else {
var source_10470 = cljs.core.first(seq__10418_10464__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10470) : tailrecursion.javelin.cell_QMARK_.call(null,source_10470)))){
source_10470.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10470.sinks,this$);

if((source_10470.rank > this$.rank)){
var seq__10426_10471 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10418_10433,chunk__10419_10434,count__10420_10435,i__10421_10436,source_10470,seq__10418_10464__$1,temp__4425__auto___10463,vec__10417,f,sources){
return (function (p1__10412_SHARP_){
return p1__10412_SHARP_.sinks;
});})(seq__10418_10433,chunk__10419_10434,count__10420_10435,i__10421_10436,source_10470,seq__10418_10464__$1,temp__4425__auto___10463,vec__10417,f,sources))
,source_10470));
var chunk__10427_10472 = null;
var count__10428_10473 = (0);
var i__10429_10474 = (0);
while(true){
if((i__10429_10474 < count__10428_10473)){
var dep_10475 = chunk__10427_10472.cljs$core$IIndexed$_nth$arity$2(null,i__10429_10474);
dep_10475.rank = tailrecursion.javelin.next_rank();

var G__10476 = seq__10426_10471;
var G__10477 = chunk__10427_10472;
var G__10478 = count__10428_10473;
var G__10479 = (i__10429_10474 + (1));
seq__10426_10471 = G__10476;
chunk__10427_10472 = G__10477;
count__10428_10473 = G__10478;
i__10429_10474 = G__10479;
continue;
} else {
var temp__4425__auto___10480__$1 = cljs.core.seq(seq__10426_10471);
if(temp__4425__auto___10480__$1){
var seq__10426_10481__$1 = temp__4425__auto___10480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10426_10481__$1)){
var c__5806__auto___10482 = cljs.core.chunk_first(seq__10426_10481__$1);
var G__10483 = cljs.core.chunk_rest(seq__10426_10481__$1);
var G__10484 = c__5806__auto___10482;
var G__10485 = cljs.core.count(c__5806__auto___10482);
var G__10486 = (0);
seq__10426_10471 = G__10483;
chunk__10427_10472 = G__10484;
count__10428_10473 = G__10485;
i__10429_10474 = G__10486;
continue;
} else {
var dep_10487 = cljs.core.first(seq__10426_10481__$1);
dep_10487.rank = tailrecursion.javelin.next_rank();

var G__10488 = cljs.core.next(seq__10426_10481__$1);
var G__10489 = null;
var G__10490 = (0);
var G__10491 = (0);
seq__10426_10471 = G__10488;
chunk__10427_10472 = G__10489;
count__10428_10473 = G__10490;
i__10429_10474 = G__10491;
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

var G__10492 = cljs.core.next(seq__10418_10464__$1);
var G__10493 = null;
var G__10494 = (0);
var G__10495 = (0);
seq__10418_10433 = G__10492;
chunk__10419_10434 = G__10493;
count__10420_10435 = G__10494;
i__10421_10436 = G__10495;
continue;
}
} else {
}
}
break;
}

var compute_10496 = ((function (vec__10417,f,sources){
return (function (p1__10413_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10413_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10413_SHARP_)));
});})(vec__10417,f,sources))
;
this$.thunk = ((function (compute_10496,vec__10417,f,sources){
return (function (){
return this$.state = compute_10496(this$.sources);
});})(compute_10496,vec__10417,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq10414){
var G__10415 = cljs.core.first(seq10414);
var seq10414__$1 = cljs.core.next(seq10414);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10415,seq10414__$1);
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
var G__10498 = this$__$1;
var G__10499 = (function (){var G__10500 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10500) : f.call(null,G__10500));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10498,G__10499) : cljs.core.reset_BANG_.call(null,G__10498,G__10499));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__10503 = this$__$1;
var G__10504 = (function (){var G__10505 = this$__$1.state;
var G__10506 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10505,G__10506) : f.call(null,G__10505,G__10506));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10503,G__10504) : cljs.core.reset_BANG_.call(null,G__10503,G__10504));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__10510 = this$__$1;
var G__10511 = (function (){var G__10512 = this$__$1.state;
var G__10513 = a;
var G__10514 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10512,G__10513,G__10514) : f.call(null,G__10512,G__10513,G__10514));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10510,G__10511) : cljs.core.reset_BANG_.call(null,G__10510,G__10511));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__10515 = this$__$1;
var G__10516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10515,G__10516) : cljs.core.reset_BANG_.call(null,G__10515,G__10516));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__10517 = cljs.core.seq(self__.watches);
var chunk__10518 = null;
var count__10519 = (0);
var i__10520 = (0);
while(true){
if((i__10520 < count__10519)){
var vec__10521 = chunk__10518.cljs$core$IIndexed$_nth$arity$2(null,i__10520);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10521,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10521,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10523 = seq__10517;
var G__10524 = chunk__10518;
var G__10525 = count__10519;
var G__10526 = (i__10520 + (1));
seq__10517 = G__10523;
chunk__10518 = G__10524;
count__10519 = G__10525;
i__10520 = G__10526;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10517);
if(temp__4425__auto__){
var seq__10517__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10517__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10517__$1);
var G__10527 = cljs.core.chunk_rest(seq__10517__$1);
var G__10528 = c__5806__auto__;
var G__10529 = cljs.core.count(c__5806__auto__);
var G__10530 = (0);
seq__10517 = G__10527;
chunk__10518 = G__10528;
count__10519 = G__10529;
i__10520 = G__10530;
continue;
} else {
var vec__10522 = cljs.core.first(seq__10517__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10522,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10522,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10531 = cljs.core.next(seq__10517__$1);
var G__10532 = null;
var G__10533 = (0);
var G__10534 = (0);
seq__10517 = G__10531;
chunk__10518 = G__10532;
count__10519 = G__10533;
i__10520 = G__10534;
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
var G__10535__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__10535 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10536__i = 0, G__10536__a = new Array(arguments.length -  0);
while (G__10536__i < G__10536__a.length) {G__10536__a[G__10536__i] = arguments[G__10536__i + 0]; ++G__10536__i;}
  sources = new cljs.core.IndexedSeq(G__10536__a,0);
} 
return G__10535__delegate.call(this,sources);};
G__10535.cljs$lang$maxFixedArity = 0;
G__10535.cljs$lang$applyTo = (function (arglist__10537){
var sources = cljs.core.seq(arglist__10537);
return G__10535__delegate(sources);
});
G__10535.cljs$core$IFn$_invoke$arity$variadic = G__10535__delegate;
return G__10535;
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
var bind = (function (p1__10538_SHARP_){
var _STAR_tx_STAR_10542 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__10543 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10543) : cljs.core.atom.call(null,G__10543));
})();

try{return (p1__10538_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10538_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10538_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10542;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_10544 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10544;
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
var len__6061__auto___10552 = arguments.length;
var i__6062__auto___10553 = (0);
while(true){
if((i__6062__auto___10553 < len__6061__auto___10552)){
args__6068__auto__.push((arguments[i__6062__auto___10553]));

var G__10554 = (i__6062__auto___10553 + (1));
i__6062__auto___10553 = G__10554;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__10551 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10551) : cljs.core.atom.call(null,G__10551));
})();
var tag_neq = ((function (olds){
return (function (p1__10545_SHARP_,p2__10546_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10545_SHARP_,p2__10546_SHARP_),p2__10546_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10548_SHARP_,p2__10547_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10548_SHARP_,p2__10547_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10555__delegate = function (rest__10549_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__10549_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__10549_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__10549_SHARP_));

return news;
};
var G__10555 = function (var_args){
var rest__10549_SHARP_ = null;
if (arguments.length > 0) {
var G__10556__i = 0, G__10556__a = new Array(arguments.length -  0);
while (G__10556__i < G__10556__a.length) {G__10556__a[G__10556__i] = arguments[G__10556__i + 0]; ++G__10556__i;}
  rest__10549_SHARP_ = new cljs.core.IndexedSeq(G__10556__a,0);
} 
return G__10555__delegate.call(this,rest__10549_SHARP_);};
G__10555.cljs$lang$maxFixedArity = 0;
G__10555.cljs$lang$applyTo = (function (arglist__10557){
var rest__10549_SHARP_ = cljs.core.seq(arglist__10557);
return G__10555__delegate(rest__10549_SHARP_);
});
G__10555.cljs$core$IFn$_invoke$arity$variadic = G__10555__delegate;
return G__10555;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq10550){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10550));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10558_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10558_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10559_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10559_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10566_10572 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__10567_10573 = null;
var count__10568_10574 = (0);
var i__10569_10575 = (0);
while(true){
if((i__10569_10575 < count__10568_10574)){
var i_10576 = chunk__10567_10573.cljs$core$IIndexed$_nth$arity$2(null,i__10569_10575);
var G__10570_10577 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10576) : ith_item__$1.call(null,i_10576));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10570_10577) : f__$1.call(null,G__10570_10577));

var G__10578 = seq__10566_10572;
var G__10579 = chunk__10567_10573;
var G__10580 = count__10568_10574;
var G__10581 = (i__10569_10575 + (1));
seq__10566_10572 = G__10578;
chunk__10567_10573 = G__10579;
count__10568_10574 = G__10580;
i__10569_10575 = G__10581;
continue;
} else {
var temp__4425__auto___10582 = cljs.core.seq(seq__10566_10572);
if(temp__4425__auto___10582){
var seq__10566_10583__$1 = temp__4425__auto___10582;
if(cljs.core.chunked_seq_QMARK_(seq__10566_10583__$1)){
var c__5806__auto___10584 = cljs.core.chunk_first(seq__10566_10583__$1);
var G__10585 = cljs.core.chunk_rest(seq__10566_10583__$1);
var G__10586 = c__5806__auto___10584;
var G__10587 = cljs.core.count(c__5806__auto___10584);
var G__10588 = (0);
seq__10566_10572 = G__10585;
chunk__10567_10573 = G__10586;
count__10568_10574 = G__10587;
i__10569_10575 = G__10588;
continue;
} else {
var i_10589 = cljs.core.first(seq__10566_10583__$1);
var G__10571_10590 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10589) : ith_item__$1.call(null,i_10589));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10571_10590) : f__$1.call(null,G__10571_10590));

var G__10591 = cljs.core.next(seq__10566_10583__$1);
var G__10592 = null;
var G__10593 = (0);
var G__10594 = (0);
seq__10566_10572 = G__10591;
chunk__10567_10573 = G__10592;
count__10568_10574 = G__10593;
i__10569_10575 = G__10594;
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
