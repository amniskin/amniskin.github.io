// Compiled by ClojureScript 0.0-3308 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,tailrecursion$javelin$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__12567 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__12565_SHARP_,p2__12566_SHARP_){
return cljs.core.assoc.call(null,p1__12565_SHARP_,p2__12566_SHARP_,p2__12566_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__12567;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e12569){if((e12569 instanceof Error)){
var _ = e12569;
return null;
} else {
throw e12569;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__12572 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__12572);

return G__12572;
} else {
var G__12573 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__12573));

return G__12573;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12576){
var vec__12577 = p__12576;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__12577,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12578 = cljs.core.seq.call(null,srcs);
var chunk__12579 = null;
var count__12580 = (0);
var i__12581 = (0);
while(true){
if((i__12581 < count__12580)){
var src = cljs.core._nth.call(null,chunk__12579,i__12581);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12582 = seq__12578;
var G__12583 = chunk__12579;
var G__12584 = count__12580;
var G__12585 = (i__12581 + (1));
seq__12578 = G__12582;
chunk__12579 = G__12583;
count__12580 = G__12584;
i__12581 = G__12585;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12578);
if(temp__4425__auto__){
var seq__12578__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12578__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12578__$1);
var G__12586 = cljs.core.chunk_rest.call(null,seq__12578__$1);
var G__12587 = c__4995__auto__;
var G__12588 = cljs.core.count.call(null,c__4995__auto__);
var G__12589 = (0);
seq__12578 = G__12586;
chunk__12579 = G__12587;
count__12580 = G__12588;
i__12581 = G__12589;
continue;
} else {
var src = cljs.core.first.call(null,seq__12578__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__12590 = cljs.core.next.call(null,seq__12578__$1);
var G__12591 = null;
var G__12592 = (0);
var G__12593 = (0);
seq__12578 = G__12590;
chunk__12579 = G__12591;
count__12580 = G__12592;
i__12581 = G__12593;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12574){
var G__12575 = cljs.core.first.call(null,seq12574);
var seq12574__$1 = cljs.core.next.call(null,seq12574);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12575,seq12574__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12598){
var vec__12599 = p__12598;
var f = cljs.core.nth.call(null,vec__12599,(0),null);
var sources = cljs.core.nth.call(null,vec__12599,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__12600_12612 = cljs.core.seq.call(null,this$.sources);
var chunk__12601_12613 = null;
var count__12602_12614 = (0);
var i__12603_12615 = (0);
while(true){
if((i__12603_12615 < count__12602_12614)){
var source_12616 = cljs.core._nth.call(null,chunk__12601_12613,i__12603_12615);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12616))){
source_12616.sinks = cljs.core.conj.call(null,source_12616.sinks,this$);

if((source_12616.rank > this$.rank)){
var seq__12604_12617 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12600_12612,chunk__12601_12613,count__12602_12614,i__12603_12615,source_12616,vec__12599,f,sources){
return (function (p1__12594_SHARP_){
return p1__12594_SHARP_.sinks;
});})(seq__12600_12612,chunk__12601_12613,count__12602_12614,i__12603_12615,source_12616,vec__12599,f,sources))
,source_12616));
var chunk__12605_12618 = null;
var count__12606_12619 = (0);
var i__12607_12620 = (0);
while(true){
if((i__12607_12620 < count__12606_12619)){
var dep_12621 = cljs.core._nth.call(null,chunk__12605_12618,i__12607_12620);
dep_12621.rank = tailrecursion.javelin.next_rank.call(null);

var G__12622 = seq__12604_12617;
var G__12623 = chunk__12605_12618;
var G__12624 = count__12606_12619;
var G__12625 = (i__12607_12620 + (1));
seq__12604_12617 = G__12622;
chunk__12605_12618 = G__12623;
count__12606_12619 = G__12624;
i__12607_12620 = G__12625;
continue;
} else {
var temp__4425__auto___12626 = cljs.core.seq.call(null,seq__12604_12617);
if(temp__4425__auto___12626){
var seq__12604_12627__$1 = temp__4425__auto___12626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12604_12627__$1)){
var c__4995__auto___12628 = cljs.core.chunk_first.call(null,seq__12604_12627__$1);
var G__12629 = cljs.core.chunk_rest.call(null,seq__12604_12627__$1);
var G__12630 = c__4995__auto___12628;
var G__12631 = cljs.core.count.call(null,c__4995__auto___12628);
var G__12632 = (0);
seq__12604_12617 = G__12629;
chunk__12605_12618 = G__12630;
count__12606_12619 = G__12631;
i__12607_12620 = G__12632;
continue;
} else {
var dep_12633 = cljs.core.first.call(null,seq__12604_12627__$1);
dep_12633.rank = tailrecursion.javelin.next_rank.call(null);

var G__12634 = cljs.core.next.call(null,seq__12604_12627__$1);
var G__12635 = null;
var G__12636 = (0);
var G__12637 = (0);
seq__12604_12617 = G__12634;
chunk__12605_12618 = G__12635;
count__12606_12619 = G__12636;
i__12607_12620 = G__12637;
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

var G__12638 = seq__12600_12612;
var G__12639 = chunk__12601_12613;
var G__12640 = count__12602_12614;
var G__12641 = (i__12603_12615 + (1));
seq__12600_12612 = G__12638;
chunk__12601_12613 = G__12639;
count__12602_12614 = G__12640;
i__12603_12615 = G__12641;
continue;
} else {
var temp__4425__auto___12642 = cljs.core.seq.call(null,seq__12600_12612);
if(temp__4425__auto___12642){
var seq__12600_12643__$1 = temp__4425__auto___12642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12600_12643__$1)){
var c__4995__auto___12644 = cljs.core.chunk_first.call(null,seq__12600_12643__$1);
var G__12645 = cljs.core.chunk_rest.call(null,seq__12600_12643__$1);
var G__12646 = c__4995__auto___12644;
var G__12647 = cljs.core.count.call(null,c__4995__auto___12644);
var G__12648 = (0);
seq__12600_12612 = G__12645;
chunk__12601_12613 = G__12646;
count__12602_12614 = G__12647;
i__12603_12615 = G__12648;
continue;
} else {
var source_12649 = cljs.core.first.call(null,seq__12600_12643__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_12649))){
source_12649.sinks = cljs.core.conj.call(null,source_12649.sinks,this$);

if((source_12649.rank > this$.rank)){
var seq__12608_12650 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__12600_12612,chunk__12601_12613,count__12602_12614,i__12603_12615,source_12649,seq__12600_12643__$1,temp__4425__auto___12642,vec__12599,f,sources){
return (function (p1__12594_SHARP_){
return p1__12594_SHARP_.sinks;
});})(seq__12600_12612,chunk__12601_12613,count__12602_12614,i__12603_12615,source_12649,seq__12600_12643__$1,temp__4425__auto___12642,vec__12599,f,sources))
,source_12649));
var chunk__12609_12651 = null;
var count__12610_12652 = (0);
var i__12611_12653 = (0);
while(true){
if((i__12611_12653 < count__12610_12652)){
var dep_12654 = cljs.core._nth.call(null,chunk__12609_12651,i__12611_12653);
dep_12654.rank = tailrecursion.javelin.next_rank.call(null);

var G__12655 = seq__12608_12650;
var G__12656 = chunk__12609_12651;
var G__12657 = count__12610_12652;
var G__12658 = (i__12611_12653 + (1));
seq__12608_12650 = G__12655;
chunk__12609_12651 = G__12656;
count__12610_12652 = G__12657;
i__12611_12653 = G__12658;
continue;
} else {
var temp__4425__auto___12659__$1 = cljs.core.seq.call(null,seq__12608_12650);
if(temp__4425__auto___12659__$1){
var seq__12608_12660__$1 = temp__4425__auto___12659__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12608_12660__$1)){
var c__4995__auto___12661 = cljs.core.chunk_first.call(null,seq__12608_12660__$1);
var G__12662 = cljs.core.chunk_rest.call(null,seq__12608_12660__$1);
var G__12663 = c__4995__auto___12661;
var G__12664 = cljs.core.count.call(null,c__4995__auto___12661);
var G__12665 = (0);
seq__12608_12650 = G__12662;
chunk__12609_12651 = G__12663;
count__12610_12652 = G__12664;
i__12611_12653 = G__12665;
continue;
} else {
var dep_12666 = cljs.core.first.call(null,seq__12608_12660__$1);
dep_12666.rank = tailrecursion.javelin.next_rank.call(null);

var G__12667 = cljs.core.next.call(null,seq__12608_12660__$1);
var G__12668 = null;
var G__12669 = (0);
var G__12670 = (0);
seq__12608_12650 = G__12667;
chunk__12609_12651 = G__12668;
count__12610_12652 = G__12669;
i__12611_12653 = G__12670;
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

var G__12671 = cljs.core.next.call(null,seq__12600_12643__$1);
var G__12672 = null;
var G__12673 = (0);
var G__12674 = (0);
seq__12600_12612 = G__12671;
chunk__12601_12613 = G__12672;
count__12602_12614 = G__12673;
i__12603_12615 = G__12674;
continue;
}
} else {
}
}
break;
}

var compute_12675 = ((function (vec__12599,f,sources){
return (function (p1__12595_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__12595_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__12595_SHARP_)));
});})(vec__12599,f,sources))
;
this$.thunk = ((function (compute_12675,vec__12599,f,sources){
return (function (){
return this$.state = compute_12675.call(null,this$.sources);
});})(compute_12675,vec__12599,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq12596){
var G__12597 = cljs.core.first.call(null,seq12596);
var seq12596__$1 = cljs.core.next.call(null,seq12596);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12597,seq12596__$1);
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
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
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
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__12676 = cljs.core.seq.call(null,self__.watches);
var chunk__12677 = null;
var count__12678 = (0);
var i__12679 = (0);
while(true){
if((i__12679 < count__12678)){
var vec__12680 = cljs.core._nth.call(null,chunk__12677,i__12679);
var key = cljs.core.nth.call(null,vec__12680,(0),null);
var f = cljs.core.nth.call(null,vec__12680,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12682 = seq__12676;
var G__12683 = chunk__12677;
var G__12684 = count__12678;
var G__12685 = (i__12679 + (1));
seq__12676 = G__12682;
chunk__12677 = G__12683;
count__12678 = G__12684;
i__12679 = G__12685;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12676);
if(temp__4425__auto__){
var seq__12676__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12676__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12676__$1);
var G__12686 = cljs.core.chunk_rest.call(null,seq__12676__$1);
var G__12687 = c__4995__auto__;
var G__12688 = cljs.core.count.call(null,c__4995__auto__);
var G__12689 = (0);
seq__12676 = G__12686;
chunk__12677 = G__12687;
count__12678 = G__12688;
i__12679 = G__12689;
continue;
} else {
var vec__12681 = cljs.core.first.call(null,seq__12676__$1);
var key = cljs.core.nth.call(null,vec__12681,(0),null);
var f = cljs.core.nth.call(null,vec__12681,(1),null);
f.call(null,key,this$__$1,o,n);

var G__12690 = cljs.core.next.call(null,seq__12676__$1);
var G__12691 = null;
var G__12692 = (0);
var G__12693 = (0);
seq__12676 = G__12690;
chunk__12677 = G__12691;
count__12678 = G__12692;
i__12679 = G__12693;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write.call(null,writer__4790__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__4198__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
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

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__12694__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__12694 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__12695__i = 0, G__12695__a = new Array(arguments.length -  0);
while (G__12695__i < G__12695__a.length) {G__12695__a[G__12695__i] = arguments[G__12695__i + 0]; ++G__12695__i;}
  sources = new cljs.core.IndexedSeq(G__12695__a,0);
} 
return G__12694__delegate.call(this,sources);};
G__12694.cljs$lang$maxFixedArity = 0;
G__12694.cljs$lang$applyTo = (function (arglist__12696){
var sources = cljs.core.seq(arglist__12696);
return G__12694__delegate(sources);
});
G__12694.cljs$core$IFn$_invoke$arity$variadic = G__12694__delegate;
return G__12694;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__12697_SHARP_){
var _STAR_tx_STAR_12700 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__12697_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12700;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_12701 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_12701;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__12702_SHARP_,p2__12703_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__12702_SHARP_,p2__12703_SHARP_),p2__12703_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__12705_SHARP_,p2__12704_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__12705_SHARP_,p2__12704_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__12708__delegate = function (rest__12706_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__12706_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__12706_SHARP_);

return news;
};
var G__12708 = function (var_args){
var rest__12706_SHARP_ = null;
if (arguments.length > 0) {
var G__12709__i = 0, G__12709__a = new Array(arguments.length -  0);
while (G__12709__i < G__12709__a.length) {G__12709__a[G__12709__i] = arguments[G__12709__i + 0]; ++G__12709__i;}
  rest__12706_SHARP_ = new cljs.core.IndexedSeq(G__12709__a,0);
} 
return G__12708__delegate.call(this,rest__12706_SHARP_);};
G__12708.cljs$lang$maxFixedArity = 0;
G__12708.cljs$lang$applyTo = (function (arglist__12710){
var rest__12706_SHARP_ = cljs.core.seq(arglist__12710);
return G__12708__delegate(rest__12706_SHARP_);
});
G__12708.cljs$core$IFn$_invoke$arity$variadic = G__12708__delegate;
return G__12708;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq12707){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12707));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__12711_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__12711_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__12712_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__12712_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__12717_12721 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__12718_12722 = null;
var count__12719_12723 = (0);
var i__12720_12724 = (0);
while(true){
if((i__12720_12724 < count__12719_12723)){
var i_12725 = cljs.core._nth.call(null,chunk__12718_12722,i__12720_12724);
f__$1.call(null,ith_item__$1.call(null,i_12725));

var G__12726 = seq__12717_12721;
var G__12727 = chunk__12718_12722;
var G__12728 = count__12719_12723;
var G__12729 = (i__12720_12724 + (1));
seq__12717_12721 = G__12726;
chunk__12718_12722 = G__12727;
count__12719_12723 = G__12728;
i__12720_12724 = G__12729;
continue;
} else {
var temp__4425__auto___12730 = cljs.core.seq.call(null,seq__12717_12721);
if(temp__4425__auto___12730){
var seq__12717_12731__$1 = temp__4425__auto___12730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12717_12731__$1)){
var c__4995__auto___12732 = cljs.core.chunk_first.call(null,seq__12717_12731__$1);
var G__12733 = cljs.core.chunk_rest.call(null,seq__12717_12731__$1);
var G__12734 = c__4995__auto___12732;
var G__12735 = cljs.core.count.call(null,c__4995__auto___12732);
var G__12736 = (0);
seq__12717_12721 = G__12733;
chunk__12718_12722 = G__12734;
count__12719_12723 = G__12735;
i__12720_12724 = G__12736;
continue;
} else {
var i_12737 = cljs.core.first.call(null,seq__12717_12731__$1);
f__$1.call(null,ith_item__$1.call(null,i_12737));

var G__12738 = cljs.core.next.call(null,seq__12717_12731__$1);
var G__12739 = null;
var G__12740 = (0);
var G__12741 = (0);
seq__12717_12721 = G__12738;
chunk__12718_12722 = G__12739;
count__12719_12723 = G__12740;
i__12720_12724 = G__12741;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=javelin.js.map