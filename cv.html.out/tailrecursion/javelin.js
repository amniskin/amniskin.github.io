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

var G__9550 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9548_SHARP_,p2__9549_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9548_SHARP_,p2__9549_SHARP_,p2__9549_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9550;
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
}catch (e9552){if((e9552 instanceof Error)){
var _ = e9552;
return null;
} else {
throw e9552;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__9555 = c;
tailrecursion.javelin.add_sync_BANG_(G__9555);

return G__9555;
} else {
var G__9556 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__9556));

return G__9556;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9565 = arguments.length;
var i__6062__auto___9566 = (0);
while(true){
if((i__6062__auto___9566 < len__6061__auto___9565)){
args__6068__auto__.push((arguments[i__6062__auto___9566]));

var G__9567 = (i__6062__auto___9566 + (1));
i__6062__auto___9566 = G__9567;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9559){
var vec__9560 = p__9559;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9561 = cljs.core.seq(srcs);
var chunk__9562 = null;
var count__9563 = (0);
var i__9564 = (0);
while(true){
if((i__9564 < count__9563)){
var src = chunk__9562.cljs$core$IIndexed$_nth$arity$2(null,i__9564);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9568 = seq__9561;
var G__9569 = chunk__9562;
var G__9570 = count__9563;
var G__9571 = (i__9564 + (1));
seq__9561 = G__9568;
chunk__9562 = G__9569;
count__9563 = G__9570;
i__9564 = G__9571;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9561);
if(temp__4425__auto__){
var seq__9561__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9561__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9561__$1);
var G__9572 = cljs.core.chunk_rest(seq__9561__$1);
var G__9573 = c__5806__auto__;
var G__9574 = cljs.core.count(c__5806__auto__);
var G__9575 = (0);
seq__9561 = G__9572;
chunk__9562 = G__9573;
count__9563 = G__9574;
i__9564 = G__9575;
continue;
} else {
var src = cljs.core.first(seq__9561__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9576 = cljs.core.next(seq__9561__$1);
var G__9577 = null;
var G__9578 = (0);
var G__9579 = (0);
seq__9561 = G__9576;
chunk__9562 = G__9577;
count__9563 = G__9578;
i__9564 = G__9579;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9557){
var G__9558 = cljs.core.first(seq9557);
var seq9557__$1 = cljs.core.next(seq9557);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9558,seq9557__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___9598 = arguments.length;
var i__6062__auto___9599 = (0);
while(true){
if((i__6062__auto___9599 < len__6061__auto___9598)){
args__6068__auto__.push((arguments[i__6062__auto___9599]));

var G__9600 = (i__6062__auto___9599 + (1));
i__6062__auto___9599 = G__9600;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9584){
var vec__9585 = p__9584;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9585,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9585,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9586_9601 = cljs.core.seq(this$.sources);
var chunk__9587_9602 = null;
var count__9588_9603 = (0);
var i__9589_9604 = (0);
while(true){
if((i__9589_9604 < count__9588_9603)){
var source_9605 = chunk__9587_9602.cljs$core$IIndexed$_nth$arity$2(null,i__9589_9604);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9605) : tailrecursion.javelin.cell_QMARK_.call(null,source_9605)))){
source_9605.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9605.sinks,this$);

if((source_9605.rank > this$.rank)){
var seq__9590_9606 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9586_9601,chunk__9587_9602,count__9588_9603,i__9589_9604,source_9605,vec__9585,f,sources){
return (function (p1__9580_SHARP_){
return p1__9580_SHARP_.sinks;
});})(seq__9586_9601,chunk__9587_9602,count__9588_9603,i__9589_9604,source_9605,vec__9585,f,sources))
,source_9605));
var chunk__9591_9607 = null;
var count__9592_9608 = (0);
var i__9593_9609 = (0);
while(true){
if((i__9593_9609 < count__9592_9608)){
var dep_9610 = chunk__9591_9607.cljs$core$IIndexed$_nth$arity$2(null,i__9593_9609);
dep_9610.rank = tailrecursion.javelin.next_rank();

var G__9611 = seq__9590_9606;
var G__9612 = chunk__9591_9607;
var G__9613 = count__9592_9608;
var G__9614 = (i__9593_9609 + (1));
seq__9590_9606 = G__9611;
chunk__9591_9607 = G__9612;
count__9592_9608 = G__9613;
i__9593_9609 = G__9614;
continue;
} else {
var temp__4425__auto___9615 = cljs.core.seq(seq__9590_9606);
if(temp__4425__auto___9615){
var seq__9590_9616__$1 = temp__4425__auto___9615;
if(cljs.core.chunked_seq_QMARK_(seq__9590_9616__$1)){
var c__5806__auto___9617 = cljs.core.chunk_first(seq__9590_9616__$1);
var G__9618 = cljs.core.chunk_rest(seq__9590_9616__$1);
var G__9619 = c__5806__auto___9617;
var G__9620 = cljs.core.count(c__5806__auto___9617);
var G__9621 = (0);
seq__9590_9606 = G__9618;
chunk__9591_9607 = G__9619;
count__9592_9608 = G__9620;
i__9593_9609 = G__9621;
continue;
} else {
var dep_9622 = cljs.core.first(seq__9590_9616__$1);
dep_9622.rank = tailrecursion.javelin.next_rank();

var G__9623 = cljs.core.next(seq__9590_9616__$1);
var G__9624 = null;
var G__9625 = (0);
var G__9626 = (0);
seq__9590_9606 = G__9623;
chunk__9591_9607 = G__9624;
count__9592_9608 = G__9625;
i__9593_9609 = G__9626;
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

var G__9627 = seq__9586_9601;
var G__9628 = chunk__9587_9602;
var G__9629 = count__9588_9603;
var G__9630 = (i__9589_9604 + (1));
seq__9586_9601 = G__9627;
chunk__9587_9602 = G__9628;
count__9588_9603 = G__9629;
i__9589_9604 = G__9630;
continue;
} else {
var temp__4425__auto___9631 = cljs.core.seq(seq__9586_9601);
if(temp__4425__auto___9631){
var seq__9586_9632__$1 = temp__4425__auto___9631;
if(cljs.core.chunked_seq_QMARK_(seq__9586_9632__$1)){
var c__5806__auto___9633 = cljs.core.chunk_first(seq__9586_9632__$1);
var G__9634 = cljs.core.chunk_rest(seq__9586_9632__$1);
var G__9635 = c__5806__auto___9633;
var G__9636 = cljs.core.count(c__5806__auto___9633);
var G__9637 = (0);
seq__9586_9601 = G__9634;
chunk__9587_9602 = G__9635;
count__9588_9603 = G__9636;
i__9589_9604 = G__9637;
continue;
} else {
var source_9638 = cljs.core.first(seq__9586_9632__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9638) : tailrecursion.javelin.cell_QMARK_.call(null,source_9638)))){
source_9638.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9638.sinks,this$);

if((source_9638.rank > this$.rank)){
var seq__9594_9639 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9586_9601,chunk__9587_9602,count__9588_9603,i__9589_9604,source_9638,seq__9586_9632__$1,temp__4425__auto___9631,vec__9585,f,sources){
return (function (p1__9580_SHARP_){
return p1__9580_SHARP_.sinks;
});})(seq__9586_9601,chunk__9587_9602,count__9588_9603,i__9589_9604,source_9638,seq__9586_9632__$1,temp__4425__auto___9631,vec__9585,f,sources))
,source_9638));
var chunk__9595_9640 = null;
var count__9596_9641 = (0);
var i__9597_9642 = (0);
while(true){
if((i__9597_9642 < count__9596_9641)){
var dep_9643 = chunk__9595_9640.cljs$core$IIndexed$_nth$arity$2(null,i__9597_9642);
dep_9643.rank = tailrecursion.javelin.next_rank();

var G__9644 = seq__9594_9639;
var G__9645 = chunk__9595_9640;
var G__9646 = count__9596_9641;
var G__9647 = (i__9597_9642 + (1));
seq__9594_9639 = G__9644;
chunk__9595_9640 = G__9645;
count__9596_9641 = G__9646;
i__9597_9642 = G__9647;
continue;
} else {
var temp__4425__auto___9648__$1 = cljs.core.seq(seq__9594_9639);
if(temp__4425__auto___9648__$1){
var seq__9594_9649__$1 = temp__4425__auto___9648__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9594_9649__$1)){
var c__5806__auto___9650 = cljs.core.chunk_first(seq__9594_9649__$1);
var G__9651 = cljs.core.chunk_rest(seq__9594_9649__$1);
var G__9652 = c__5806__auto___9650;
var G__9653 = cljs.core.count(c__5806__auto___9650);
var G__9654 = (0);
seq__9594_9639 = G__9651;
chunk__9595_9640 = G__9652;
count__9596_9641 = G__9653;
i__9597_9642 = G__9654;
continue;
} else {
var dep_9655 = cljs.core.first(seq__9594_9649__$1);
dep_9655.rank = tailrecursion.javelin.next_rank();

var G__9656 = cljs.core.next(seq__9594_9649__$1);
var G__9657 = null;
var G__9658 = (0);
var G__9659 = (0);
seq__9594_9639 = G__9656;
chunk__9595_9640 = G__9657;
count__9596_9641 = G__9658;
i__9597_9642 = G__9659;
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

var G__9660 = cljs.core.next(seq__9586_9632__$1);
var G__9661 = null;
var G__9662 = (0);
var G__9663 = (0);
seq__9586_9601 = G__9660;
chunk__9587_9602 = G__9661;
count__9588_9603 = G__9662;
i__9589_9604 = G__9663;
continue;
}
} else {
}
}
break;
}

var compute_9664 = ((function (vec__9585,f,sources){
return (function (p1__9581_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9581_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9581_SHARP_)));
});})(vec__9585,f,sources))
;
this$.thunk = ((function (compute_9664,vec__9585,f,sources){
return (function (){
return this$.state = compute_9664(this$.sources);
});})(compute_9664,vec__9585,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq9582){
var G__9583 = cljs.core.first(seq9582);
var seq9582__$1 = cljs.core.next(seq9582);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9583,seq9582__$1);
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
var G__9666 = this$__$1;
var G__9667 = (function (){var G__9668 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9668) : f.call(null,G__9668));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9666,G__9667) : cljs.core.reset_BANG_.call(null,G__9666,G__9667));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9671 = this$__$1;
var G__9672 = (function (){var G__9673 = this$__$1.state;
var G__9674 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9673,G__9674) : f.call(null,G__9673,G__9674));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9671,G__9672) : cljs.core.reset_BANG_.call(null,G__9671,G__9672));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9678 = this$__$1;
var G__9679 = (function (){var G__9680 = this$__$1.state;
var G__9681 = a;
var G__9682 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9680,G__9681,G__9682) : f.call(null,G__9680,G__9681,G__9682));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9678,G__9679) : cljs.core.reset_BANG_.call(null,G__9678,G__9679));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9683 = this$__$1;
var G__9684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9683,G__9684) : cljs.core.reset_BANG_.call(null,G__9683,G__9684));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9685 = cljs.core.seq(self__.watches);
var chunk__9686 = null;
var count__9687 = (0);
var i__9688 = (0);
while(true){
if((i__9688 < count__9687)){
var vec__9689 = chunk__9686.cljs$core$IIndexed$_nth$arity$2(null,i__9688);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9689,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9689,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9691 = seq__9685;
var G__9692 = chunk__9686;
var G__9693 = count__9687;
var G__9694 = (i__9688 + (1));
seq__9685 = G__9691;
chunk__9686 = G__9692;
count__9687 = G__9693;
i__9688 = G__9694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9685);
if(temp__4425__auto__){
var seq__9685__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9685__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9685__$1);
var G__9695 = cljs.core.chunk_rest(seq__9685__$1);
var G__9696 = c__5806__auto__;
var G__9697 = cljs.core.count(c__5806__auto__);
var G__9698 = (0);
seq__9685 = G__9695;
chunk__9686 = G__9696;
count__9687 = G__9697;
i__9688 = G__9698;
continue;
} else {
var vec__9690 = cljs.core.first(seq__9685__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9690,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9690,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9699 = cljs.core.next(seq__9685__$1);
var G__9700 = null;
var G__9701 = (0);
var G__9702 = (0);
seq__9685 = G__9699;
chunk__9686 = G__9700;
count__9687 = G__9701;
i__9688 = G__9702;
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
var G__9703__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9703 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9704__i = 0, G__9704__a = new Array(arguments.length -  0);
while (G__9704__i < G__9704__a.length) {G__9704__a[G__9704__i] = arguments[G__9704__i + 0]; ++G__9704__i;}
  sources = new cljs.core.IndexedSeq(G__9704__a,0);
} 
return G__9703__delegate.call(this,sources);};
G__9703.cljs$lang$maxFixedArity = 0;
G__9703.cljs$lang$applyTo = (function (arglist__9705){
var sources = cljs.core.seq(arglist__9705);
return G__9703__delegate(sources);
});
G__9703.cljs$core$IFn$_invoke$arity$variadic = G__9703__delegate;
return G__9703;
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
var bind = (function (p1__9706_SHARP_){
var _STAR_tx_STAR_9710 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__9711 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9711) : cljs.core.atom.call(null,G__9711));
})();

try{return (p1__9706_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9706_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9706_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9710;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_9712 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9712;
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
var len__6061__auto___9720 = arguments.length;
var i__6062__auto___9721 = (0);
while(true){
if((i__6062__auto___9721 < len__6061__auto___9720)){
args__6068__auto__.push((arguments[i__6062__auto___9721]));

var G__9722 = (i__6062__auto___9721 + (1));
i__6062__auto___9721 = G__9722;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9719 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9719) : cljs.core.atom.call(null,G__9719));
})();
var tag_neq = ((function (olds){
return (function (p1__9713_SHARP_,p2__9714_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9713_SHARP_,p2__9714_SHARP_),p2__9714_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9716_SHARP_,p2__9715_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9716_SHARP_,p2__9715_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9723__delegate = function (rest__9717_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9717_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9717_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9717_SHARP_));

return news;
};
var G__9723 = function (var_args){
var rest__9717_SHARP_ = null;
if (arguments.length > 0) {
var G__9724__i = 0, G__9724__a = new Array(arguments.length -  0);
while (G__9724__i < G__9724__a.length) {G__9724__a[G__9724__i] = arguments[G__9724__i + 0]; ++G__9724__i;}
  rest__9717_SHARP_ = new cljs.core.IndexedSeq(G__9724__a,0);
} 
return G__9723__delegate.call(this,rest__9717_SHARP_);};
G__9723.cljs$lang$maxFixedArity = 0;
G__9723.cljs$lang$applyTo = (function (arglist__9725){
var rest__9717_SHARP_ = cljs.core.seq(arglist__9725);
return G__9723__delegate(rest__9717_SHARP_);
});
G__9723.cljs$core$IFn$_invoke$arity$variadic = G__9723__delegate;
return G__9723;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq9718){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9718));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9726_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9726_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9727_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9727_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9734_9740 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9735_9741 = null;
var count__9736_9742 = (0);
var i__9737_9743 = (0);
while(true){
if((i__9737_9743 < count__9736_9742)){
var i_9744 = chunk__9735_9741.cljs$core$IIndexed$_nth$arity$2(null,i__9737_9743);
var G__9738_9745 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9744) : ith_item__$1.call(null,i_9744));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9738_9745) : f__$1.call(null,G__9738_9745));

var G__9746 = seq__9734_9740;
var G__9747 = chunk__9735_9741;
var G__9748 = count__9736_9742;
var G__9749 = (i__9737_9743 + (1));
seq__9734_9740 = G__9746;
chunk__9735_9741 = G__9747;
count__9736_9742 = G__9748;
i__9737_9743 = G__9749;
continue;
} else {
var temp__4425__auto___9750 = cljs.core.seq(seq__9734_9740);
if(temp__4425__auto___9750){
var seq__9734_9751__$1 = temp__4425__auto___9750;
if(cljs.core.chunked_seq_QMARK_(seq__9734_9751__$1)){
var c__5806__auto___9752 = cljs.core.chunk_first(seq__9734_9751__$1);
var G__9753 = cljs.core.chunk_rest(seq__9734_9751__$1);
var G__9754 = c__5806__auto___9752;
var G__9755 = cljs.core.count(c__5806__auto___9752);
var G__9756 = (0);
seq__9734_9740 = G__9753;
chunk__9735_9741 = G__9754;
count__9736_9742 = G__9755;
i__9737_9743 = G__9756;
continue;
} else {
var i_9757 = cljs.core.first(seq__9734_9751__$1);
var G__9739_9758 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9757) : ith_item__$1.call(null,i_9757));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9739_9758) : f__$1.call(null,G__9739_9758));

var G__9759 = cljs.core.next(seq__9734_9751__$1);
var G__9760 = null;
var G__9761 = (0);
var G__9762 = (0);
seq__9734_9740 = G__9759;
chunk__9735_9741 = G__9760;
count__9736_9742 = G__9761;
i__9737_9743 = G__9762;
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
