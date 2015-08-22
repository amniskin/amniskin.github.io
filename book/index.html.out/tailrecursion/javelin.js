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

var G__8518 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8516_SHARP_,p2__8517_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8516_SHARP_,p2__8517_SHARP_,p2__8517_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8518;
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
}catch (e8520){if((e8520 instanceof Error)){
var _ = e8520;
return null;
} else {
throw e8520;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__8523 = c;
tailrecursion.javelin.add_sync_BANG_(G__8523);

return G__8523;
} else {
var G__8524 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__8524));

return G__8524;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___8533 = arguments.length;
var i__6062__auto___8534 = (0);
while(true){
if((i__6062__auto___8534 < len__6061__auto___8533)){
args__6068__auto__.push((arguments[i__6062__auto___8534]));

var G__8535 = (i__6062__auto___8534 + (1));
i__6062__auto___8534 = G__8535;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8527){
var vec__8528 = p__8527;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8528,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8529 = cljs.core.seq(srcs);
var chunk__8530 = null;
var count__8531 = (0);
var i__8532 = (0);
while(true){
if((i__8532 < count__8531)){
var src = chunk__8530.cljs$core$IIndexed$_nth$arity$2(null,i__8532);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__8536 = seq__8529;
var G__8537 = chunk__8530;
var G__8538 = count__8531;
var G__8539 = (i__8532 + (1));
seq__8529 = G__8536;
chunk__8530 = G__8537;
count__8531 = G__8538;
i__8532 = G__8539;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8529);
if(temp__4425__auto__){
var seq__8529__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8529__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__8529__$1);
var G__8540 = cljs.core.chunk_rest(seq__8529__$1);
var G__8541 = c__5806__auto__;
var G__8542 = cljs.core.count(c__5806__auto__);
var G__8543 = (0);
seq__8529 = G__8540;
chunk__8530 = G__8541;
count__8531 = G__8542;
i__8532 = G__8543;
continue;
} else {
var src = cljs.core.first(seq__8529__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__8544 = cljs.core.next(seq__8529__$1);
var G__8545 = null;
var G__8546 = (0);
var G__8547 = (0);
seq__8529 = G__8544;
chunk__8530 = G__8545;
count__8531 = G__8546;
i__8532 = G__8547;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8525){
var G__8526 = cljs.core.first(seq8525);
var seq8525__$1 = cljs.core.next(seq8525);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8526,seq8525__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___8566 = arguments.length;
var i__6062__auto___8567 = (0);
while(true){
if((i__6062__auto___8567 < len__6061__auto___8566)){
args__6068__auto__.push((arguments[i__6062__auto___8567]));

var G__8568 = (i__6062__auto___8567 + (1));
i__6062__auto___8567 = G__8568;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8552){
var vec__8553 = p__8552;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8553,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8553,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__8554_8569 = cljs.core.seq(this$.sources);
var chunk__8555_8570 = null;
var count__8556_8571 = (0);
var i__8557_8572 = (0);
while(true){
if((i__8557_8572 < count__8556_8571)){
var source_8573 = chunk__8555_8570.cljs$core$IIndexed$_nth$arity$2(null,i__8557_8572);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_8573) : tailrecursion.javelin.cell_QMARK_.call(null,source_8573)))){
source_8573.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_8573.sinks,this$);

if((source_8573.rank > this$.rank)){
var seq__8558_8574 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__8554_8569,chunk__8555_8570,count__8556_8571,i__8557_8572,source_8573,vec__8553,f,sources){
return (function (p1__8548_SHARP_){
return p1__8548_SHARP_.sinks;
});})(seq__8554_8569,chunk__8555_8570,count__8556_8571,i__8557_8572,source_8573,vec__8553,f,sources))
,source_8573));
var chunk__8559_8575 = null;
var count__8560_8576 = (0);
var i__8561_8577 = (0);
while(true){
if((i__8561_8577 < count__8560_8576)){
var dep_8578 = chunk__8559_8575.cljs$core$IIndexed$_nth$arity$2(null,i__8561_8577);
dep_8578.rank = tailrecursion.javelin.next_rank();

var G__8579 = seq__8558_8574;
var G__8580 = chunk__8559_8575;
var G__8581 = count__8560_8576;
var G__8582 = (i__8561_8577 + (1));
seq__8558_8574 = G__8579;
chunk__8559_8575 = G__8580;
count__8560_8576 = G__8581;
i__8561_8577 = G__8582;
continue;
} else {
var temp__4425__auto___8583 = cljs.core.seq(seq__8558_8574);
if(temp__4425__auto___8583){
var seq__8558_8584__$1 = temp__4425__auto___8583;
if(cljs.core.chunked_seq_QMARK_(seq__8558_8584__$1)){
var c__5806__auto___8585 = cljs.core.chunk_first(seq__8558_8584__$1);
var G__8586 = cljs.core.chunk_rest(seq__8558_8584__$1);
var G__8587 = c__5806__auto___8585;
var G__8588 = cljs.core.count(c__5806__auto___8585);
var G__8589 = (0);
seq__8558_8574 = G__8586;
chunk__8559_8575 = G__8587;
count__8560_8576 = G__8588;
i__8561_8577 = G__8589;
continue;
} else {
var dep_8590 = cljs.core.first(seq__8558_8584__$1);
dep_8590.rank = tailrecursion.javelin.next_rank();

var G__8591 = cljs.core.next(seq__8558_8584__$1);
var G__8592 = null;
var G__8593 = (0);
var G__8594 = (0);
seq__8558_8574 = G__8591;
chunk__8559_8575 = G__8592;
count__8560_8576 = G__8593;
i__8561_8577 = G__8594;
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

var G__8595 = seq__8554_8569;
var G__8596 = chunk__8555_8570;
var G__8597 = count__8556_8571;
var G__8598 = (i__8557_8572 + (1));
seq__8554_8569 = G__8595;
chunk__8555_8570 = G__8596;
count__8556_8571 = G__8597;
i__8557_8572 = G__8598;
continue;
} else {
var temp__4425__auto___8599 = cljs.core.seq(seq__8554_8569);
if(temp__4425__auto___8599){
var seq__8554_8600__$1 = temp__4425__auto___8599;
if(cljs.core.chunked_seq_QMARK_(seq__8554_8600__$1)){
var c__5806__auto___8601 = cljs.core.chunk_first(seq__8554_8600__$1);
var G__8602 = cljs.core.chunk_rest(seq__8554_8600__$1);
var G__8603 = c__5806__auto___8601;
var G__8604 = cljs.core.count(c__5806__auto___8601);
var G__8605 = (0);
seq__8554_8569 = G__8602;
chunk__8555_8570 = G__8603;
count__8556_8571 = G__8604;
i__8557_8572 = G__8605;
continue;
} else {
var source_8606 = cljs.core.first(seq__8554_8600__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_8606) : tailrecursion.javelin.cell_QMARK_.call(null,source_8606)))){
source_8606.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_8606.sinks,this$);

if((source_8606.rank > this$.rank)){
var seq__8562_8607 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__8554_8569,chunk__8555_8570,count__8556_8571,i__8557_8572,source_8606,seq__8554_8600__$1,temp__4425__auto___8599,vec__8553,f,sources){
return (function (p1__8548_SHARP_){
return p1__8548_SHARP_.sinks;
});})(seq__8554_8569,chunk__8555_8570,count__8556_8571,i__8557_8572,source_8606,seq__8554_8600__$1,temp__4425__auto___8599,vec__8553,f,sources))
,source_8606));
var chunk__8563_8608 = null;
var count__8564_8609 = (0);
var i__8565_8610 = (0);
while(true){
if((i__8565_8610 < count__8564_8609)){
var dep_8611 = chunk__8563_8608.cljs$core$IIndexed$_nth$arity$2(null,i__8565_8610);
dep_8611.rank = tailrecursion.javelin.next_rank();

var G__8612 = seq__8562_8607;
var G__8613 = chunk__8563_8608;
var G__8614 = count__8564_8609;
var G__8615 = (i__8565_8610 + (1));
seq__8562_8607 = G__8612;
chunk__8563_8608 = G__8613;
count__8564_8609 = G__8614;
i__8565_8610 = G__8615;
continue;
} else {
var temp__4425__auto___8616__$1 = cljs.core.seq(seq__8562_8607);
if(temp__4425__auto___8616__$1){
var seq__8562_8617__$1 = temp__4425__auto___8616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8562_8617__$1)){
var c__5806__auto___8618 = cljs.core.chunk_first(seq__8562_8617__$1);
var G__8619 = cljs.core.chunk_rest(seq__8562_8617__$1);
var G__8620 = c__5806__auto___8618;
var G__8621 = cljs.core.count(c__5806__auto___8618);
var G__8622 = (0);
seq__8562_8607 = G__8619;
chunk__8563_8608 = G__8620;
count__8564_8609 = G__8621;
i__8565_8610 = G__8622;
continue;
} else {
var dep_8623 = cljs.core.first(seq__8562_8617__$1);
dep_8623.rank = tailrecursion.javelin.next_rank();

var G__8624 = cljs.core.next(seq__8562_8617__$1);
var G__8625 = null;
var G__8626 = (0);
var G__8627 = (0);
seq__8562_8607 = G__8624;
chunk__8563_8608 = G__8625;
count__8564_8609 = G__8626;
i__8565_8610 = G__8627;
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

var G__8628 = cljs.core.next(seq__8554_8600__$1);
var G__8629 = null;
var G__8630 = (0);
var G__8631 = (0);
seq__8554_8569 = G__8628;
chunk__8555_8570 = G__8629;
count__8556_8571 = G__8630;
i__8557_8572 = G__8631;
continue;
}
} else {
}
}
break;
}

var compute_8632 = ((function (vec__8553,f,sources){
return (function (p1__8549_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__8549_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__8549_SHARP_)));
});})(vec__8553,f,sources))
;
this$.thunk = ((function (compute_8632,vec__8553,f,sources){
return (function (){
return this$.state = compute_8632(this$.sources);
});})(compute_8632,vec__8553,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq8550){
var G__8551 = cljs.core.first(seq8550);
var seq8550__$1 = cljs.core.next(seq8550);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8551,seq8550__$1);
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
var G__8634 = this$__$1;
var G__8635 = (function (){var G__8636 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8636) : f.call(null,G__8636));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8634,G__8635) : cljs.core.reset_BANG_.call(null,G__8634,G__8635));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__8639 = this$__$1;
var G__8640 = (function (){var G__8641 = this$__$1.state;
var G__8642 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8641,G__8642) : f.call(null,G__8641,G__8642));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8639,G__8640) : cljs.core.reset_BANG_.call(null,G__8639,G__8640));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__8646 = this$__$1;
var G__8647 = (function (){var G__8648 = this$__$1.state;
var G__8649 = a;
var G__8650 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8648,G__8649,G__8650) : f.call(null,G__8648,G__8649,G__8650));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8646,G__8647) : cljs.core.reset_BANG_.call(null,G__8646,G__8647));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__8651 = this$__$1;
var G__8652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8651,G__8652) : cljs.core.reset_BANG_.call(null,G__8651,G__8652));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8653 = cljs.core.seq(self__.watches);
var chunk__8654 = null;
var count__8655 = (0);
var i__8656 = (0);
while(true){
if((i__8656 < count__8655)){
var vec__8657 = chunk__8654.cljs$core$IIndexed$_nth$arity$2(null,i__8656);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8657,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8657,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__8659 = seq__8653;
var G__8660 = chunk__8654;
var G__8661 = count__8655;
var G__8662 = (i__8656 + (1));
seq__8653 = G__8659;
chunk__8654 = G__8660;
count__8655 = G__8661;
i__8656 = G__8662;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8653);
if(temp__4425__auto__){
var seq__8653__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8653__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__8653__$1);
var G__8663 = cljs.core.chunk_rest(seq__8653__$1);
var G__8664 = c__5806__auto__;
var G__8665 = cljs.core.count(c__5806__auto__);
var G__8666 = (0);
seq__8653 = G__8663;
chunk__8654 = G__8664;
count__8655 = G__8665;
i__8656 = G__8666;
continue;
} else {
var vec__8658 = cljs.core.first(seq__8653__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8658,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8658,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__8667 = cljs.core.next(seq__8653__$1);
var G__8668 = null;
var G__8669 = (0);
var G__8670 = (0);
seq__8653 = G__8667;
chunk__8654 = G__8668;
count__8655 = G__8669;
i__8656 = G__8670;
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
var G__8671__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__8671 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8672__i = 0, G__8672__a = new Array(arguments.length -  0);
while (G__8672__i < G__8672__a.length) {G__8672__a[G__8672__i] = arguments[G__8672__i + 0]; ++G__8672__i;}
  sources = new cljs.core.IndexedSeq(G__8672__a,0);
} 
return G__8671__delegate.call(this,sources);};
G__8671.cljs$lang$maxFixedArity = 0;
G__8671.cljs$lang$applyTo = (function (arglist__8673){
var sources = cljs.core.seq(arglist__8673);
return G__8671__delegate(sources);
});
G__8671.cljs$core$IFn$_invoke$arity$variadic = G__8671__delegate;
return G__8671;
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
var bind = (function (p1__8674_SHARP_){
var _STAR_tx_STAR_8678 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__8679 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8679) : cljs.core.atom.call(null,G__8679));
})();

try{return (p1__8674_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__8674_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__8674_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8678;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_8680 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8680;
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
var len__6061__auto___8688 = arguments.length;
var i__6062__auto___8689 = (0);
while(true){
if((i__6062__auto___8689 < len__6061__auto___8688)){
args__6068__auto__.push((arguments[i__6062__auto___8689]));

var G__8690 = (i__6062__auto___8689 + (1));
i__6062__auto___8689 = G__8690;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__8687 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8687) : cljs.core.atom.call(null,G__8687));
})();
var tag_neq = ((function (olds){
return (function (p1__8681_SHARP_,p2__8682_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8681_SHARP_,p2__8682_SHARP_),p2__8682_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8684_SHARP_,p2__8683_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__8684_SHARP_,p2__8683_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8691__delegate = function (rest__8685_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__8685_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__8685_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__8685_SHARP_));

return news;
};
var G__8691 = function (var_args){
var rest__8685_SHARP_ = null;
if (arguments.length > 0) {
var G__8692__i = 0, G__8692__a = new Array(arguments.length -  0);
while (G__8692__i < G__8692__a.length) {G__8692__a[G__8692__i] = arguments[G__8692__i + 0]; ++G__8692__i;}
  rest__8685_SHARP_ = new cljs.core.IndexedSeq(G__8692__a,0);
} 
return G__8691__delegate.call(this,rest__8685_SHARP_);};
G__8691.cljs$lang$maxFixedArity = 0;
G__8691.cljs$lang$applyTo = (function (arglist__8693){
var rest__8685_SHARP_ = cljs.core.seq(arglist__8693);
return G__8691__delegate(rest__8685_SHARP_);
});
G__8691.cljs$core$IFn$_invoke$arity$variadic = G__8691__delegate;
return G__8691;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq8686){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8686));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__8694_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__8694_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8695_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__8695_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8702_8708 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__8703_8709 = null;
var count__8704_8710 = (0);
var i__8705_8711 = (0);
while(true){
if((i__8705_8711 < count__8704_8710)){
var i_8712 = chunk__8703_8709.cljs$core$IIndexed$_nth$arity$2(null,i__8705_8711);
var G__8706_8713 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_8712) : ith_item__$1.call(null,i_8712));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__8706_8713) : f__$1.call(null,G__8706_8713));

var G__8714 = seq__8702_8708;
var G__8715 = chunk__8703_8709;
var G__8716 = count__8704_8710;
var G__8717 = (i__8705_8711 + (1));
seq__8702_8708 = G__8714;
chunk__8703_8709 = G__8715;
count__8704_8710 = G__8716;
i__8705_8711 = G__8717;
continue;
} else {
var temp__4425__auto___8718 = cljs.core.seq(seq__8702_8708);
if(temp__4425__auto___8718){
var seq__8702_8719__$1 = temp__4425__auto___8718;
if(cljs.core.chunked_seq_QMARK_(seq__8702_8719__$1)){
var c__5806__auto___8720 = cljs.core.chunk_first(seq__8702_8719__$1);
var G__8721 = cljs.core.chunk_rest(seq__8702_8719__$1);
var G__8722 = c__5806__auto___8720;
var G__8723 = cljs.core.count(c__5806__auto___8720);
var G__8724 = (0);
seq__8702_8708 = G__8721;
chunk__8703_8709 = G__8722;
count__8704_8710 = G__8723;
i__8705_8711 = G__8724;
continue;
} else {
var i_8725 = cljs.core.first(seq__8702_8719__$1);
var G__8707_8726 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_8725) : ith_item__$1.call(null,i_8725));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__8707_8726) : f__$1.call(null,G__8707_8726));

var G__8727 = cljs.core.next(seq__8702_8719__$1);
var G__8728 = null;
var G__8729 = (0);
var G__8730 = (0);
seq__8702_8708 = G__8727;
chunk__8703_8709 = G__8728;
count__8704_8710 = G__8729;
i__8705_8711 = G__8730;
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
