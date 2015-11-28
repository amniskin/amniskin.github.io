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

var G__9558 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9556_SHARP_,p2__9557_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9556_SHARP_,p2__9557_SHARP_,p2__9557_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9558;
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
}catch (e9560){if((e9560 instanceof Error)){
var _ = e9560;
return null;
} else {
throw e9560;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__9563 = c;
tailrecursion.javelin.add_sync_BANG_(G__9563);

return G__9563;
} else {
var G__9564 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__9564));

return G__9564;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9573 = arguments.length;
var i__6062__auto___9574 = (0);
while(true){
if((i__6062__auto___9574 < len__6061__auto___9573)){
args__6068__auto__.push((arguments[i__6062__auto___9574]));

var G__9575 = (i__6062__auto___9574 + (1));
i__6062__auto___9574 = G__9575;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9567){
var vec__9568 = p__9567;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9568,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9569 = cljs.core.seq(srcs);
var chunk__9570 = null;
var count__9571 = (0);
var i__9572 = (0);
while(true){
if((i__9572 < count__9571)){
var src = chunk__9570.cljs$core$IIndexed$_nth$arity$2(null,i__9572);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9576 = seq__9569;
var G__9577 = chunk__9570;
var G__9578 = count__9571;
var G__9579 = (i__9572 + (1));
seq__9569 = G__9576;
chunk__9570 = G__9577;
count__9571 = G__9578;
i__9572 = G__9579;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9569);
if(temp__4425__auto__){
var seq__9569__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9569__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9569__$1);
var G__9580 = cljs.core.chunk_rest(seq__9569__$1);
var G__9581 = c__5806__auto__;
var G__9582 = cljs.core.count(c__5806__auto__);
var G__9583 = (0);
seq__9569 = G__9580;
chunk__9570 = G__9581;
count__9571 = G__9582;
i__9572 = G__9583;
continue;
} else {
var src = cljs.core.first(seq__9569__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9584 = cljs.core.next(seq__9569__$1);
var G__9585 = null;
var G__9586 = (0);
var G__9587 = (0);
seq__9569 = G__9584;
chunk__9570 = G__9585;
count__9571 = G__9586;
i__9572 = G__9587;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9565){
var G__9566 = cljs.core.first(seq9565);
var seq9565__$1 = cljs.core.next(seq9565);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9566,seq9565__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9606 = arguments.length;
var i__6062__auto___9607 = (0);
while(true){
if((i__6062__auto___9607 < len__6061__auto___9606)){
args__6068__auto__.push((arguments[i__6062__auto___9607]));

var G__9608 = (i__6062__auto___9607 + (1));
i__6062__auto___9607 = G__9608;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9592){
var vec__9593 = p__9592;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9593,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9594_9609 = cljs.core.seq(this$.sources);
var chunk__9595_9610 = null;
var count__9596_9611 = (0);
var i__9597_9612 = (0);
while(true){
if((i__9597_9612 < count__9596_9611)){
var source_9613 = chunk__9595_9610.cljs$core$IIndexed$_nth$arity$2(null,i__9597_9612);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9613) : tailrecursion.javelin.cell_QMARK_.call(null,source_9613)))){
source_9613.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9613.sinks,this$);

if((source_9613.rank > this$.rank)){
var seq__9598_9614 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9594_9609,chunk__9595_9610,count__9596_9611,i__9597_9612,source_9613,vec__9593,f,sources){
return (function (p1__9588_SHARP_){
return p1__9588_SHARP_.sinks;
});})(seq__9594_9609,chunk__9595_9610,count__9596_9611,i__9597_9612,source_9613,vec__9593,f,sources))
,source_9613));
var chunk__9599_9615 = null;
var count__9600_9616 = (0);
var i__9601_9617 = (0);
while(true){
if((i__9601_9617 < count__9600_9616)){
var dep_9618 = chunk__9599_9615.cljs$core$IIndexed$_nth$arity$2(null,i__9601_9617);
dep_9618.rank = tailrecursion.javelin.next_rank();

var G__9619 = seq__9598_9614;
var G__9620 = chunk__9599_9615;
var G__9621 = count__9600_9616;
var G__9622 = (i__9601_9617 + (1));
seq__9598_9614 = G__9619;
chunk__9599_9615 = G__9620;
count__9600_9616 = G__9621;
i__9601_9617 = G__9622;
continue;
} else {
var temp__4425__auto___9623 = cljs.core.seq(seq__9598_9614);
if(temp__4425__auto___9623){
var seq__9598_9624__$1 = temp__4425__auto___9623;
if(cljs.core.chunked_seq_QMARK_(seq__9598_9624__$1)){
var c__5806__auto___9625 = cljs.core.chunk_first(seq__9598_9624__$1);
var G__9626 = cljs.core.chunk_rest(seq__9598_9624__$1);
var G__9627 = c__5806__auto___9625;
var G__9628 = cljs.core.count(c__5806__auto___9625);
var G__9629 = (0);
seq__9598_9614 = G__9626;
chunk__9599_9615 = G__9627;
count__9600_9616 = G__9628;
i__9601_9617 = G__9629;
continue;
} else {
var dep_9630 = cljs.core.first(seq__9598_9624__$1);
dep_9630.rank = tailrecursion.javelin.next_rank();

var G__9631 = cljs.core.next(seq__9598_9624__$1);
var G__9632 = null;
var G__9633 = (0);
var G__9634 = (0);
seq__9598_9614 = G__9631;
chunk__9599_9615 = G__9632;
count__9600_9616 = G__9633;
i__9601_9617 = G__9634;
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

var G__9635 = seq__9594_9609;
var G__9636 = chunk__9595_9610;
var G__9637 = count__9596_9611;
var G__9638 = (i__9597_9612 + (1));
seq__9594_9609 = G__9635;
chunk__9595_9610 = G__9636;
count__9596_9611 = G__9637;
i__9597_9612 = G__9638;
continue;
} else {
var temp__4425__auto___9639 = cljs.core.seq(seq__9594_9609);
if(temp__4425__auto___9639){
var seq__9594_9640__$1 = temp__4425__auto___9639;
if(cljs.core.chunked_seq_QMARK_(seq__9594_9640__$1)){
var c__5806__auto___9641 = cljs.core.chunk_first(seq__9594_9640__$1);
var G__9642 = cljs.core.chunk_rest(seq__9594_9640__$1);
var G__9643 = c__5806__auto___9641;
var G__9644 = cljs.core.count(c__5806__auto___9641);
var G__9645 = (0);
seq__9594_9609 = G__9642;
chunk__9595_9610 = G__9643;
count__9596_9611 = G__9644;
i__9597_9612 = G__9645;
continue;
} else {
var source_9646 = cljs.core.first(seq__9594_9640__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9646) : tailrecursion.javelin.cell_QMARK_.call(null,source_9646)))){
source_9646.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9646.sinks,this$);

if((source_9646.rank > this$.rank)){
var seq__9602_9647 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9594_9609,chunk__9595_9610,count__9596_9611,i__9597_9612,source_9646,seq__9594_9640__$1,temp__4425__auto___9639,vec__9593,f,sources){
return (function (p1__9588_SHARP_){
return p1__9588_SHARP_.sinks;
});})(seq__9594_9609,chunk__9595_9610,count__9596_9611,i__9597_9612,source_9646,seq__9594_9640__$1,temp__4425__auto___9639,vec__9593,f,sources))
,source_9646));
var chunk__9603_9648 = null;
var count__9604_9649 = (0);
var i__9605_9650 = (0);
while(true){
if((i__9605_9650 < count__9604_9649)){
var dep_9651 = chunk__9603_9648.cljs$core$IIndexed$_nth$arity$2(null,i__9605_9650);
dep_9651.rank = tailrecursion.javelin.next_rank();

var G__9652 = seq__9602_9647;
var G__9653 = chunk__9603_9648;
var G__9654 = count__9604_9649;
var G__9655 = (i__9605_9650 + (1));
seq__9602_9647 = G__9652;
chunk__9603_9648 = G__9653;
count__9604_9649 = G__9654;
i__9605_9650 = G__9655;
continue;
} else {
var temp__4425__auto___9656__$1 = cljs.core.seq(seq__9602_9647);
if(temp__4425__auto___9656__$1){
var seq__9602_9657__$1 = temp__4425__auto___9656__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9602_9657__$1)){
var c__5806__auto___9658 = cljs.core.chunk_first(seq__9602_9657__$1);
var G__9659 = cljs.core.chunk_rest(seq__9602_9657__$1);
var G__9660 = c__5806__auto___9658;
var G__9661 = cljs.core.count(c__5806__auto___9658);
var G__9662 = (0);
seq__9602_9647 = G__9659;
chunk__9603_9648 = G__9660;
count__9604_9649 = G__9661;
i__9605_9650 = G__9662;
continue;
} else {
var dep_9663 = cljs.core.first(seq__9602_9657__$1);
dep_9663.rank = tailrecursion.javelin.next_rank();

var G__9664 = cljs.core.next(seq__9602_9657__$1);
var G__9665 = null;
var G__9666 = (0);
var G__9667 = (0);
seq__9602_9647 = G__9664;
chunk__9603_9648 = G__9665;
count__9604_9649 = G__9666;
i__9605_9650 = G__9667;
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

var G__9668 = cljs.core.next(seq__9594_9640__$1);
var G__9669 = null;
var G__9670 = (0);
var G__9671 = (0);
seq__9594_9609 = G__9668;
chunk__9595_9610 = G__9669;
count__9596_9611 = G__9670;
i__9597_9612 = G__9671;
continue;
}
} else {
}
}
break;
}

var compute_9672 = ((function (vec__9593,f,sources){
return (function (p1__9589_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9589_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9589_SHARP_)));
});})(vec__9593,f,sources))
;
this$.thunk = ((function (compute_9672,vec__9593,f,sources){
return (function (){
return this$.state = compute_9672(this$.sources);
});})(compute_9672,vec__9593,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq9590){
var G__9591 = cljs.core.first(seq9590);
var seq9590__$1 = cljs.core.next(seq9590);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9591,seq9590__$1);
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
var G__9674 = this$__$1;
var G__9675 = (function (){var G__9676 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9676) : f.call(null,G__9676));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9674,G__9675) : cljs.core.reset_BANG_.call(null,G__9674,G__9675));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9679 = this$__$1;
var G__9680 = (function (){var G__9681 = this$__$1.state;
var G__9682 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9681,G__9682) : f.call(null,G__9681,G__9682));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9679,G__9680) : cljs.core.reset_BANG_.call(null,G__9679,G__9680));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9686 = this$__$1;
var G__9687 = (function (){var G__9688 = this$__$1.state;
var G__9689 = a;
var G__9690 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9688,G__9689,G__9690) : f.call(null,G__9688,G__9689,G__9690));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9686,G__9687) : cljs.core.reset_BANG_.call(null,G__9686,G__9687));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9691 = this$__$1;
var G__9692 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9691,G__9692) : cljs.core.reset_BANG_.call(null,G__9691,G__9692));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9693 = cljs.core.seq(self__.watches);
var chunk__9694 = null;
var count__9695 = (0);
var i__9696 = (0);
while(true){
if((i__9696 < count__9695)){
var vec__9697 = chunk__9694.cljs$core$IIndexed$_nth$arity$2(null,i__9696);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9699 = seq__9693;
var G__9700 = chunk__9694;
var G__9701 = count__9695;
var G__9702 = (i__9696 + (1));
seq__9693 = G__9699;
chunk__9694 = G__9700;
count__9695 = G__9701;
i__9696 = G__9702;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9693);
if(temp__4425__auto__){
var seq__9693__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9693__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9693__$1);
var G__9703 = cljs.core.chunk_rest(seq__9693__$1);
var G__9704 = c__5806__auto__;
var G__9705 = cljs.core.count(c__5806__auto__);
var G__9706 = (0);
seq__9693 = G__9703;
chunk__9694 = G__9704;
count__9695 = G__9705;
i__9696 = G__9706;
continue;
} else {
var vec__9698 = cljs.core.first(seq__9693__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9698,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9698,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9707 = cljs.core.next(seq__9693__$1);
var G__9708 = null;
var G__9709 = (0);
var G__9710 = (0);
seq__9693 = G__9707;
chunk__9694 = G__9708;
count__9695 = G__9709;
i__9696 = G__9710;
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
var G__9711__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9711 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9712__i = 0, G__9712__a = new Array(arguments.length -  0);
while (G__9712__i < G__9712__a.length) {G__9712__a[G__9712__i] = arguments[G__9712__i + 0]; ++G__9712__i;}
  sources = new cljs.core.IndexedSeq(G__9712__a,0);
} 
return G__9711__delegate.call(this,sources);};
G__9711.cljs$lang$maxFixedArity = 0;
G__9711.cljs$lang$applyTo = (function (arglist__9713){
var sources = cljs.core.seq(arglist__9713);
return G__9711__delegate(sources);
});
G__9711.cljs$core$IFn$_invoke$arity$variadic = G__9711__delegate;
return G__9711;
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
var bind = (function (p1__9714_SHARP_){
var _STAR_tx_STAR_9718 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__9719 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9719) : cljs.core.atom.call(null,G__9719));
})();

try{return (p1__9714_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9714_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9714_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9718;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_9720 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9720;
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
var len__6061__auto___9728 = arguments.length;
var i__6062__auto___9729 = (0);
while(true){
if((i__6062__auto___9729 < len__6061__auto___9728)){
args__6068__auto__.push((arguments[i__6062__auto___9729]));

var G__9730 = (i__6062__auto___9729 + (1));
i__6062__auto___9729 = G__9730;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9727 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9727) : cljs.core.atom.call(null,G__9727));
})();
var tag_neq = ((function (olds){
return (function (p1__9721_SHARP_,p2__9722_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9721_SHARP_,p2__9722_SHARP_),p2__9722_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9724_SHARP_,p2__9723_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9724_SHARP_,p2__9723_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9731__delegate = function (rest__9725_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9725_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9725_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9725_SHARP_));

return news;
};
var G__9731 = function (var_args){
var rest__9725_SHARP_ = null;
if (arguments.length > 0) {
var G__9732__i = 0, G__9732__a = new Array(arguments.length -  0);
while (G__9732__i < G__9732__a.length) {G__9732__a[G__9732__i] = arguments[G__9732__i + 0]; ++G__9732__i;}
  rest__9725_SHARP_ = new cljs.core.IndexedSeq(G__9732__a,0);
} 
return G__9731__delegate.call(this,rest__9725_SHARP_);};
G__9731.cljs$lang$maxFixedArity = 0;
G__9731.cljs$lang$applyTo = (function (arglist__9733){
var rest__9725_SHARP_ = cljs.core.seq(arglist__9733);
return G__9731__delegate(rest__9725_SHARP_);
});
G__9731.cljs$core$IFn$_invoke$arity$variadic = G__9731__delegate;
return G__9731;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq9726){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9726));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9734_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9734_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9735_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9735_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9742_9748 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9743_9749 = null;
var count__9744_9750 = (0);
var i__9745_9751 = (0);
while(true){
if((i__9745_9751 < count__9744_9750)){
var i_9752 = chunk__9743_9749.cljs$core$IIndexed$_nth$arity$2(null,i__9745_9751);
var G__9746_9753 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9752) : ith_item__$1.call(null,i_9752));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9746_9753) : f__$1.call(null,G__9746_9753));

var G__9754 = seq__9742_9748;
var G__9755 = chunk__9743_9749;
var G__9756 = count__9744_9750;
var G__9757 = (i__9745_9751 + (1));
seq__9742_9748 = G__9754;
chunk__9743_9749 = G__9755;
count__9744_9750 = G__9756;
i__9745_9751 = G__9757;
continue;
} else {
var temp__4425__auto___9758 = cljs.core.seq(seq__9742_9748);
if(temp__4425__auto___9758){
var seq__9742_9759__$1 = temp__4425__auto___9758;
if(cljs.core.chunked_seq_QMARK_(seq__9742_9759__$1)){
var c__5806__auto___9760 = cljs.core.chunk_first(seq__9742_9759__$1);
var G__9761 = cljs.core.chunk_rest(seq__9742_9759__$1);
var G__9762 = c__5806__auto___9760;
var G__9763 = cljs.core.count(c__5806__auto___9760);
var G__9764 = (0);
seq__9742_9748 = G__9761;
chunk__9743_9749 = G__9762;
count__9744_9750 = G__9763;
i__9745_9751 = G__9764;
continue;
} else {
var i_9765 = cljs.core.first(seq__9742_9759__$1);
var G__9747_9766 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9765) : ith_item__$1.call(null,i_9765));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9747_9766) : f__$1.call(null,G__9747_9766));

var G__9767 = cljs.core.next(seq__9742_9759__$1);
var G__9768 = null;
var G__9769 = (0);
var G__9770 = (0);
seq__9742_9748 = G__9767;
chunk__9743_9749 = G__9768;
count__9744_9750 = G__9769;
i__9745_9751 = G__9770;
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
