// Compiled by ClojureScript 1.7.48 {}
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

var G__7746 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7744_SHARP_,p2__7745_SHARP_){
return cljs.core.assoc.call(null,p1__7744_SHARP_,p2__7745_SHARP_,p2__7745_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7746;
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
}catch (e7748){if((e7748 instanceof Error)){
var _ = e7748;
return null;
} else {
throw e7748;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7751 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7751);

return G__7751;
} else {
var G__7752 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7752));

return G__7752;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7761 = arguments.length;
var i__6062__auto___7762 = (0);
while(true){
if((i__6062__auto___7762 < len__6061__auto___7761)){
args__6068__auto__.push((arguments[i__6062__auto___7762]));

var G__7763 = (i__6062__auto___7762 + (1));
i__6062__auto___7762 = G__7763;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7755){
var vec__7756 = p__7755;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7756,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7757 = cljs.core.seq.call(null,srcs);
var chunk__7758 = null;
var count__7759 = (0);
var i__7760 = (0);
while(true){
if((i__7760 < count__7759)){
var src = cljs.core._nth.call(null,chunk__7758,i__7760);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7764 = seq__7757;
var G__7765 = chunk__7758;
var G__7766 = count__7759;
var G__7767 = (i__7760 + (1));
seq__7757 = G__7764;
chunk__7758 = G__7765;
count__7759 = G__7766;
i__7760 = G__7767;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7757);
if(temp__4425__auto__){
var seq__7757__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7757__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7757__$1);
var G__7768 = cljs.core.chunk_rest.call(null,seq__7757__$1);
var G__7769 = c__5806__auto__;
var G__7770 = cljs.core.count.call(null,c__5806__auto__);
var G__7771 = (0);
seq__7757 = G__7768;
chunk__7758 = G__7769;
count__7759 = G__7770;
i__7760 = G__7771;
continue;
} else {
var src = cljs.core.first.call(null,seq__7757__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7772 = cljs.core.next.call(null,seq__7757__$1);
var G__7773 = null;
var G__7774 = (0);
var G__7775 = (0);
seq__7757 = G__7772;
chunk__7758 = G__7773;
count__7759 = G__7774;
i__7760 = G__7775;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7753){
var G__7754 = cljs.core.first.call(null,seq7753);
var seq7753__$1 = cljs.core.next.call(null,seq7753);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7754,seq7753__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7794 = arguments.length;
var i__6062__auto___7795 = (0);
while(true){
if((i__6062__auto___7795 < len__6061__auto___7794)){
args__6068__auto__.push((arguments[i__6062__auto___7795]));

var G__7796 = (i__6062__auto___7795 + (1));
i__6062__auto___7795 = G__7796;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7780){
var vec__7781 = p__7780;
var f = cljs.core.nth.call(null,vec__7781,(0),null);
var sources = cljs.core.nth.call(null,vec__7781,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7782_7797 = cljs.core.seq.call(null,this$.sources);
var chunk__7783_7798 = null;
var count__7784_7799 = (0);
var i__7785_7800 = (0);
while(true){
if((i__7785_7800 < count__7784_7799)){
var source_7801 = cljs.core._nth.call(null,chunk__7783_7798,i__7785_7800);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7801))){
source_7801.sinks = cljs.core.conj.call(null,source_7801.sinks,this$);

if((source_7801.rank > this$.rank)){
var seq__7786_7802 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7782_7797,chunk__7783_7798,count__7784_7799,i__7785_7800,source_7801,vec__7781,f,sources){
return (function (p1__7776_SHARP_){
return p1__7776_SHARP_.sinks;
});})(seq__7782_7797,chunk__7783_7798,count__7784_7799,i__7785_7800,source_7801,vec__7781,f,sources))
,source_7801));
var chunk__7787_7803 = null;
var count__7788_7804 = (0);
var i__7789_7805 = (0);
while(true){
if((i__7789_7805 < count__7788_7804)){
var dep_7806 = cljs.core._nth.call(null,chunk__7787_7803,i__7789_7805);
dep_7806.rank = tailrecursion.javelin.next_rank.call(null);

var G__7807 = seq__7786_7802;
var G__7808 = chunk__7787_7803;
var G__7809 = count__7788_7804;
var G__7810 = (i__7789_7805 + (1));
seq__7786_7802 = G__7807;
chunk__7787_7803 = G__7808;
count__7788_7804 = G__7809;
i__7789_7805 = G__7810;
continue;
} else {
var temp__4425__auto___7811 = cljs.core.seq.call(null,seq__7786_7802);
if(temp__4425__auto___7811){
var seq__7786_7812__$1 = temp__4425__auto___7811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7786_7812__$1)){
var c__5806__auto___7813 = cljs.core.chunk_first.call(null,seq__7786_7812__$1);
var G__7814 = cljs.core.chunk_rest.call(null,seq__7786_7812__$1);
var G__7815 = c__5806__auto___7813;
var G__7816 = cljs.core.count.call(null,c__5806__auto___7813);
var G__7817 = (0);
seq__7786_7802 = G__7814;
chunk__7787_7803 = G__7815;
count__7788_7804 = G__7816;
i__7789_7805 = G__7817;
continue;
} else {
var dep_7818 = cljs.core.first.call(null,seq__7786_7812__$1);
dep_7818.rank = tailrecursion.javelin.next_rank.call(null);

var G__7819 = cljs.core.next.call(null,seq__7786_7812__$1);
var G__7820 = null;
var G__7821 = (0);
var G__7822 = (0);
seq__7786_7802 = G__7819;
chunk__7787_7803 = G__7820;
count__7788_7804 = G__7821;
i__7789_7805 = G__7822;
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

var G__7823 = seq__7782_7797;
var G__7824 = chunk__7783_7798;
var G__7825 = count__7784_7799;
var G__7826 = (i__7785_7800 + (1));
seq__7782_7797 = G__7823;
chunk__7783_7798 = G__7824;
count__7784_7799 = G__7825;
i__7785_7800 = G__7826;
continue;
} else {
var temp__4425__auto___7827 = cljs.core.seq.call(null,seq__7782_7797);
if(temp__4425__auto___7827){
var seq__7782_7828__$1 = temp__4425__auto___7827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7782_7828__$1)){
var c__5806__auto___7829 = cljs.core.chunk_first.call(null,seq__7782_7828__$1);
var G__7830 = cljs.core.chunk_rest.call(null,seq__7782_7828__$1);
var G__7831 = c__5806__auto___7829;
var G__7832 = cljs.core.count.call(null,c__5806__auto___7829);
var G__7833 = (0);
seq__7782_7797 = G__7830;
chunk__7783_7798 = G__7831;
count__7784_7799 = G__7832;
i__7785_7800 = G__7833;
continue;
} else {
var source_7834 = cljs.core.first.call(null,seq__7782_7828__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7834))){
source_7834.sinks = cljs.core.conj.call(null,source_7834.sinks,this$);

if((source_7834.rank > this$.rank)){
var seq__7790_7835 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7782_7797,chunk__7783_7798,count__7784_7799,i__7785_7800,source_7834,seq__7782_7828__$1,temp__4425__auto___7827,vec__7781,f,sources){
return (function (p1__7776_SHARP_){
return p1__7776_SHARP_.sinks;
});})(seq__7782_7797,chunk__7783_7798,count__7784_7799,i__7785_7800,source_7834,seq__7782_7828__$1,temp__4425__auto___7827,vec__7781,f,sources))
,source_7834));
var chunk__7791_7836 = null;
var count__7792_7837 = (0);
var i__7793_7838 = (0);
while(true){
if((i__7793_7838 < count__7792_7837)){
var dep_7839 = cljs.core._nth.call(null,chunk__7791_7836,i__7793_7838);
dep_7839.rank = tailrecursion.javelin.next_rank.call(null);

var G__7840 = seq__7790_7835;
var G__7841 = chunk__7791_7836;
var G__7842 = count__7792_7837;
var G__7843 = (i__7793_7838 + (1));
seq__7790_7835 = G__7840;
chunk__7791_7836 = G__7841;
count__7792_7837 = G__7842;
i__7793_7838 = G__7843;
continue;
} else {
var temp__4425__auto___7844__$1 = cljs.core.seq.call(null,seq__7790_7835);
if(temp__4425__auto___7844__$1){
var seq__7790_7845__$1 = temp__4425__auto___7844__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7790_7845__$1)){
var c__5806__auto___7846 = cljs.core.chunk_first.call(null,seq__7790_7845__$1);
var G__7847 = cljs.core.chunk_rest.call(null,seq__7790_7845__$1);
var G__7848 = c__5806__auto___7846;
var G__7849 = cljs.core.count.call(null,c__5806__auto___7846);
var G__7850 = (0);
seq__7790_7835 = G__7847;
chunk__7791_7836 = G__7848;
count__7792_7837 = G__7849;
i__7793_7838 = G__7850;
continue;
} else {
var dep_7851 = cljs.core.first.call(null,seq__7790_7845__$1);
dep_7851.rank = tailrecursion.javelin.next_rank.call(null);

var G__7852 = cljs.core.next.call(null,seq__7790_7845__$1);
var G__7853 = null;
var G__7854 = (0);
var G__7855 = (0);
seq__7790_7835 = G__7852;
chunk__7791_7836 = G__7853;
count__7792_7837 = G__7854;
i__7793_7838 = G__7855;
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

var G__7856 = cljs.core.next.call(null,seq__7782_7828__$1);
var G__7857 = null;
var G__7858 = (0);
var G__7859 = (0);
seq__7782_7797 = G__7856;
chunk__7783_7798 = G__7857;
count__7784_7799 = G__7858;
i__7785_7800 = G__7859;
continue;
}
} else {
}
}
break;
}

var compute_7860 = ((function (vec__7781,f,sources){
return (function (p1__7777_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7777_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7777_SHARP_)));
});})(vec__7781,f,sources))
;
this$.thunk = ((function (compute_7860,vec__7781,f,sources){
return (function (){
return this$.state = compute_7860.call(null,this$.sources);
});})(compute_7860,vec__7781,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7778){
var G__7779 = cljs.core.first.call(null,seq7778);
var seq7778__$1 = cljs.core.next.call(null,seq7778);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7779,seq7778__$1);
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
var seq__7861 = cljs.core.seq.call(null,self__.watches);
var chunk__7862 = null;
var count__7863 = (0);
var i__7864 = (0);
while(true){
if((i__7864 < count__7863)){
var vec__7865 = cljs.core._nth.call(null,chunk__7862,i__7864);
var key = cljs.core.nth.call(null,vec__7865,(0),null);
var f = cljs.core.nth.call(null,vec__7865,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7867 = seq__7861;
var G__7868 = chunk__7862;
var G__7869 = count__7863;
var G__7870 = (i__7864 + (1));
seq__7861 = G__7867;
chunk__7862 = G__7868;
count__7863 = G__7869;
i__7864 = G__7870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7861);
if(temp__4425__auto__){
var seq__7861__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7861__$1);
var G__7871 = cljs.core.chunk_rest.call(null,seq__7861__$1);
var G__7872 = c__5806__auto__;
var G__7873 = cljs.core.count.call(null,c__5806__auto__);
var G__7874 = (0);
seq__7861 = G__7871;
chunk__7862 = G__7872;
count__7863 = G__7873;
i__7864 = G__7874;
continue;
} else {
var vec__7866 = cljs.core.first.call(null,seq__7861__$1);
var key = cljs.core.nth.call(null,vec__7866,(0),null);
var f = cljs.core.nth.call(null,vec__7866,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7875 = cljs.core.next.call(null,seq__7861__$1);
var G__7876 = null;
var G__7877 = (0);
var G__7878 = (0);
seq__7861 = G__7875;
chunk__7862 = G__7876;
count__7863 = G__7877;
i__7864 = G__7878;
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

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write.call(null,writer__5602__auto__,"tailrecursion.javelin/Cell");
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
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

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__7879__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__7879 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__7880__i = 0, G__7880__a = new Array(arguments.length -  0);
while (G__7880__i < G__7880__a.length) {G__7880__a[G__7880__i] = arguments[G__7880__i + 0]; ++G__7880__i;}
  sources = new cljs.core.IndexedSeq(G__7880__a,0);
} 
return G__7879__delegate.call(this,sources);};
G__7879.cljs$lang$maxFixedArity = 0;
G__7879.cljs$lang$applyTo = (function (arglist__7881){
var sources = cljs.core.seq(arglist__7881);
return G__7879__delegate(sources);
});
G__7879.cljs$core$IFn$_invoke$arity$variadic = G__7879__delegate;
return G__7879;
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
var bind = (function (p1__7882_SHARP_){
var _STAR_tx_STAR_7885 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__7882_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7885;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_7886 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7886;
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
var args__6068__auto__ = [];
var len__6061__auto___7893 = arguments.length;
var i__6062__auto___7894 = (0);
while(true){
if((i__6062__auto___7894 < len__6061__auto___7893)){
args__6068__auto__.push((arguments[i__6062__auto___7894]));

var G__7895 = (i__6062__auto___7894 + (1));
i__6062__auto___7894 = G__7895;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__7887_SHARP_,p2__7888_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7887_SHARP_,p2__7888_SHARP_),p2__7888_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__7890_SHARP_,p2__7889_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7890_SHARP_,p2__7889_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7896__delegate = function (rest__7891_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7891_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__7891_SHARP_);

return news;
};
var G__7896 = function (var_args){
var rest__7891_SHARP_ = null;
if (arguments.length > 0) {
var G__7897__i = 0, G__7897__a = new Array(arguments.length -  0);
while (G__7897__i < G__7897__a.length) {G__7897__a[G__7897__i] = arguments[G__7897__i + 0]; ++G__7897__i;}
  rest__7891_SHARP_ = new cljs.core.IndexedSeq(G__7897__a,0);
} 
return G__7896__delegate.call(this,rest__7891_SHARP_);};
G__7896.cljs$lang$maxFixedArity = 0;
G__7896.cljs$lang$applyTo = (function (arglist__7898){
var rest__7891_SHARP_ = cljs.core.seq(arglist__7898);
return G__7896__delegate(rest__7891_SHARP_);
});
G__7896.cljs$core$IFn$_invoke$arity$variadic = G__7896__delegate;
return G__7896;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq7892){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7892));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__7899_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__7899_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__7900_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__7900_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__7905_7909 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__7906_7910 = null;
var count__7907_7911 = (0);
var i__7908_7912 = (0);
while(true){
if((i__7908_7912 < count__7907_7911)){
var i_7913 = cljs.core._nth.call(null,chunk__7906_7910,i__7908_7912);
f__$1.call(null,ith_item__$1.call(null,i_7913));

var G__7914 = seq__7905_7909;
var G__7915 = chunk__7906_7910;
var G__7916 = count__7907_7911;
var G__7917 = (i__7908_7912 + (1));
seq__7905_7909 = G__7914;
chunk__7906_7910 = G__7915;
count__7907_7911 = G__7916;
i__7908_7912 = G__7917;
continue;
} else {
var temp__4425__auto___7918 = cljs.core.seq.call(null,seq__7905_7909);
if(temp__4425__auto___7918){
var seq__7905_7919__$1 = temp__4425__auto___7918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7905_7919__$1)){
var c__5806__auto___7920 = cljs.core.chunk_first.call(null,seq__7905_7919__$1);
var G__7921 = cljs.core.chunk_rest.call(null,seq__7905_7919__$1);
var G__7922 = c__5806__auto___7920;
var G__7923 = cljs.core.count.call(null,c__5806__auto___7920);
var G__7924 = (0);
seq__7905_7909 = G__7921;
chunk__7906_7910 = G__7922;
count__7907_7911 = G__7923;
i__7908_7912 = G__7924;
continue;
} else {
var i_7925 = cljs.core.first.call(null,seq__7905_7919__$1);
f__$1.call(null,ith_item__$1.call(null,i_7925));

var G__7926 = cljs.core.next.call(null,seq__7905_7919__$1);
var G__7927 = null;
var G__7928 = (0);
var G__7929 = (0);
seq__7905_7909 = G__7926;
chunk__7906_7910 = G__7927;
count__7907_7911 = G__7928;
i__7908_7912 = G__7929;
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