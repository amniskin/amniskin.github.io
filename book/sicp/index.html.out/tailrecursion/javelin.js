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

var G__272607 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__272605_SHARP_,p2__272606_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__272605_SHARP_,p2__272606_SHARP_,p2__272606_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__272607;
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
}catch (e272609){if((e272609 instanceof Error)){
var _ = e272609;
return null;
} else {
throw e272609;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__272612 = c;
tailrecursion.javelin.add_sync_BANG_(G__272612);

return G__272612;
} else {
var G__272613 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__272613));

return G__272613;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___272622 = arguments.length;
var i__6062__auto___272623 = (0);
while(true){
if((i__6062__auto___272623 < len__6061__auto___272622)){
args__6068__auto__.push((arguments[i__6062__auto___272623]));

var G__272624 = (i__6062__auto___272623 + (1));
i__6062__auto___272623 = G__272624;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__272616){
var vec__272617 = p__272616;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272617,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__272618 = cljs.core.seq(srcs);
var chunk__272619 = null;
var count__272620 = (0);
var i__272621 = (0);
while(true){
if((i__272621 < count__272620)){
var src = chunk__272619.cljs$core$IIndexed$_nth$arity$2(null,i__272621);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__272625 = seq__272618;
var G__272626 = chunk__272619;
var G__272627 = count__272620;
var G__272628 = (i__272621 + (1));
seq__272618 = G__272625;
chunk__272619 = G__272626;
count__272620 = G__272627;
i__272621 = G__272628;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__272618);
if(temp__4425__auto__){
var seq__272618__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__272618__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__272618__$1);
var G__272629 = cljs.core.chunk_rest(seq__272618__$1);
var G__272630 = c__5806__auto__;
var G__272631 = cljs.core.count(c__5806__auto__);
var G__272632 = (0);
seq__272618 = G__272629;
chunk__272619 = G__272630;
count__272620 = G__272631;
i__272621 = G__272632;
continue;
} else {
var src = cljs.core.first(seq__272618__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__272633 = cljs.core.next(seq__272618__$1);
var G__272634 = null;
var G__272635 = (0);
var G__272636 = (0);
seq__272618 = G__272633;
chunk__272619 = G__272634;
count__272620 = G__272635;
i__272621 = G__272636;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq272614){
var G__272615 = cljs.core.first(seq272614);
var seq272614__$1 = cljs.core.next(seq272614);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__272615,seq272614__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___272655 = arguments.length;
var i__6062__auto___272656 = (0);
while(true){
if((i__6062__auto___272656 < len__6061__auto___272655)){
args__6068__auto__.push((arguments[i__6062__auto___272656]));

var G__272657 = (i__6062__auto___272656 + (1));
i__6062__auto___272656 = G__272657;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__272641){
var vec__272642 = p__272641;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272642,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272642,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__272643_272658 = cljs.core.seq(this$.sources);
var chunk__272644_272659 = null;
var count__272645_272660 = (0);
var i__272646_272661 = (0);
while(true){
if((i__272646_272661 < count__272645_272660)){
var source_272662 = chunk__272644_272659.cljs$core$IIndexed$_nth$arity$2(null,i__272646_272661);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_272662) : tailrecursion.javelin.cell_QMARK_.call(null,source_272662)))){
source_272662.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_272662.sinks,this$);

if((source_272662.rank > this$.rank)){
var seq__272647_272663 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__272643_272658,chunk__272644_272659,count__272645_272660,i__272646_272661,source_272662,vec__272642,f,sources){
return (function (p1__272637_SHARP_){
return p1__272637_SHARP_.sinks;
});})(seq__272643_272658,chunk__272644_272659,count__272645_272660,i__272646_272661,source_272662,vec__272642,f,sources))
,source_272662));
var chunk__272648_272664 = null;
var count__272649_272665 = (0);
var i__272650_272666 = (0);
while(true){
if((i__272650_272666 < count__272649_272665)){
var dep_272667 = chunk__272648_272664.cljs$core$IIndexed$_nth$arity$2(null,i__272650_272666);
dep_272667.rank = tailrecursion.javelin.next_rank();

var G__272668 = seq__272647_272663;
var G__272669 = chunk__272648_272664;
var G__272670 = count__272649_272665;
var G__272671 = (i__272650_272666 + (1));
seq__272647_272663 = G__272668;
chunk__272648_272664 = G__272669;
count__272649_272665 = G__272670;
i__272650_272666 = G__272671;
continue;
} else {
var temp__4425__auto___272672 = cljs.core.seq(seq__272647_272663);
if(temp__4425__auto___272672){
var seq__272647_272673__$1 = temp__4425__auto___272672;
if(cljs.core.chunked_seq_QMARK_(seq__272647_272673__$1)){
var c__5806__auto___272674 = cljs.core.chunk_first(seq__272647_272673__$1);
var G__272675 = cljs.core.chunk_rest(seq__272647_272673__$1);
var G__272676 = c__5806__auto___272674;
var G__272677 = cljs.core.count(c__5806__auto___272674);
var G__272678 = (0);
seq__272647_272663 = G__272675;
chunk__272648_272664 = G__272676;
count__272649_272665 = G__272677;
i__272650_272666 = G__272678;
continue;
} else {
var dep_272679 = cljs.core.first(seq__272647_272673__$1);
dep_272679.rank = tailrecursion.javelin.next_rank();

var G__272680 = cljs.core.next(seq__272647_272673__$1);
var G__272681 = null;
var G__272682 = (0);
var G__272683 = (0);
seq__272647_272663 = G__272680;
chunk__272648_272664 = G__272681;
count__272649_272665 = G__272682;
i__272650_272666 = G__272683;
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

var G__272684 = seq__272643_272658;
var G__272685 = chunk__272644_272659;
var G__272686 = count__272645_272660;
var G__272687 = (i__272646_272661 + (1));
seq__272643_272658 = G__272684;
chunk__272644_272659 = G__272685;
count__272645_272660 = G__272686;
i__272646_272661 = G__272687;
continue;
} else {
var temp__4425__auto___272688 = cljs.core.seq(seq__272643_272658);
if(temp__4425__auto___272688){
var seq__272643_272689__$1 = temp__4425__auto___272688;
if(cljs.core.chunked_seq_QMARK_(seq__272643_272689__$1)){
var c__5806__auto___272690 = cljs.core.chunk_first(seq__272643_272689__$1);
var G__272691 = cljs.core.chunk_rest(seq__272643_272689__$1);
var G__272692 = c__5806__auto___272690;
var G__272693 = cljs.core.count(c__5806__auto___272690);
var G__272694 = (0);
seq__272643_272658 = G__272691;
chunk__272644_272659 = G__272692;
count__272645_272660 = G__272693;
i__272646_272661 = G__272694;
continue;
} else {
var source_272695 = cljs.core.first(seq__272643_272689__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_272695) : tailrecursion.javelin.cell_QMARK_.call(null,source_272695)))){
source_272695.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_272695.sinks,this$);

if((source_272695.rank > this$.rank)){
var seq__272651_272696 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__272643_272658,chunk__272644_272659,count__272645_272660,i__272646_272661,source_272695,seq__272643_272689__$1,temp__4425__auto___272688,vec__272642,f,sources){
return (function (p1__272637_SHARP_){
return p1__272637_SHARP_.sinks;
});})(seq__272643_272658,chunk__272644_272659,count__272645_272660,i__272646_272661,source_272695,seq__272643_272689__$1,temp__4425__auto___272688,vec__272642,f,sources))
,source_272695));
var chunk__272652_272697 = null;
var count__272653_272698 = (0);
var i__272654_272699 = (0);
while(true){
if((i__272654_272699 < count__272653_272698)){
var dep_272700 = chunk__272652_272697.cljs$core$IIndexed$_nth$arity$2(null,i__272654_272699);
dep_272700.rank = tailrecursion.javelin.next_rank();

var G__272701 = seq__272651_272696;
var G__272702 = chunk__272652_272697;
var G__272703 = count__272653_272698;
var G__272704 = (i__272654_272699 + (1));
seq__272651_272696 = G__272701;
chunk__272652_272697 = G__272702;
count__272653_272698 = G__272703;
i__272654_272699 = G__272704;
continue;
} else {
var temp__4425__auto___272705__$1 = cljs.core.seq(seq__272651_272696);
if(temp__4425__auto___272705__$1){
var seq__272651_272706__$1 = temp__4425__auto___272705__$1;
if(cljs.core.chunked_seq_QMARK_(seq__272651_272706__$1)){
var c__5806__auto___272707 = cljs.core.chunk_first(seq__272651_272706__$1);
var G__272708 = cljs.core.chunk_rest(seq__272651_272706__$1);
var G__272709 = c__5806__auto___272707;
var G__272710 = cljs.core.count(c__5806__auto___272707);
var G__272711 = (0);
seq__272651_272696 = G__272708;
chunk__272652_272697 = G__272709;
count__272653_272698 = G__272710;
i__272654_272699 = G__272711;
continue;
} else {
var dep_272712 = cljs.core.first(seq__272651_272706__$1);
dep_272712.rank = tailrecursion.javelin.next_rank();

var G__272713 = cljs.core.next(seq__272651_272706__$1);
var G__272714 = null;
var G__272715 = (0);
var G__272716 = (0);
seq__272651_272696 = G__272713;
chunk__272652_272697 = G__272714;
count__272653_272698 = G__272715;
i__272654_272699 = G__272716;
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

var G__272717 = cljs.core.next(seq__272643_272689__$1);
var G__272718 = null;
var G__272719 = (0);
var G__272720 = (0);
seq__272643_272658 = G__272717;
chunk__272644_272659 = G__272718;
count__272645_272660 = G__272719;
i__272646_272661 = G__272720;
continue;
}
} else {
}
}
break;
}

var compute_272721 = ((function (vec__272642,f,sources){
return (function (p1__272638_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__272638_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__272638_SHARP_)));
});})(vec__272642,f,sources))
;
this$.thunk = ((function (compute_272721,vec__272642,f,sources){
return (function (){
return this$.state = compute_272721(this$.sources);
});})(compute_272721,vec__272642,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq272639){
var G__272640 = cljs.core.first(seq272639);
var seq272639__$1 = cljs.core.next(seq272639);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__272640,seq272639__$1);
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
var G__272723 = this$__$1;
var G__272724 = (function (){var G__272725 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__272725) : f.call(null,G__272725));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__272723,G__272724) : cljs.core.reset_BANG_.call(null,G__272723,G__272724));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__272728 = this$__$1;
var G__272729 = (function (){var G__272730 = this$__$1.state;
var G__272731 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__272730,G__272731) : f.call(null,G__272730,G__272731));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__272728,G__272729) : cljs.core.reset_BANG_.call(null,G__272728,G__272729));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__272735 = this$__$1;
var G__272736 = (function (){var G__272737 = this$__$1.state;
var G__272738 = a;
var G__272739 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__272737,G__272738,G__272739) : f.call(null,G__272737,G__272738,G__272739));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__272735,G__272736) : cljs.core.reset_BANG_.call(null,G__272735,G__272736));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__272740 = this$__$1;
var G__272741 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__272740,G__272741) : cljs.core.reset_BANG_.call(null,G__272740,G__272741));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__272742 = cljs.core.seq(self__.watches);
var chunk__272743 = null;
var count__272744 = (0);
var i__272745 = (0);
while(true){
if((i__272745 < count__272744)){
var vec__272746 = chunk__272743.cljs$core$IIndexed$_nth$arity$2(null,i__272745);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272746,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272746,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__272748 = seq__272742;
var G__272749 = chunk__272743;
var G__272750 = count__272744;
var G__272751 = (i__272745 + (1));
seq__272742 = G__272748;
chunk__272743 = G__272749;
count__272744 = G__272750;
i__272745 = G__272751;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__272742);
if(temp__4425__auto__){
var seq__272742__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__272742__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__272742__$1);
var G__272752 = cljs.core.chunk_rest(seq__272742__$1);
var G__272753 = c__5806__auto__;
var G__272754 = cljs.core.count(c__5806__auto__);
var G__272755 = (0);
seq__272742 = G__272752;
chunk__272743 = G__272753;
count__272744 = G__272754;
i__272745 = G__272755;
continue;
} else {
var vec__272747 = cljs.core.first(seq__272742__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272747,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__272747,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__272756 = cljs.core.next(seq__272742__$1);
var G__272757 = null;
var G__272758 = (0);
var G__272759 = (0);
seq__272742 = G__272756;
chunk__272743 = G__272757;
count__272744 = G__272758;
i__272745 = G__272759;
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
var G__272760__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__272760 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__272761__i = 0, G__272761__a = new Array(arguments.length -  0);
while (G__272761__i < G__272761__a.length) {G__272761__a[G__272761__i] = arguments[G__272761__i + 0]; ++G__272761__i;}
  sources = new cljs.core.IndexedSeq(G__272761__a,0);
} 
return G__272760__delegate.call(this,sources);};
G__272760.cljs$lang$maxFixedArity = 0;
G__272760.cljs$lang$applyTo = (function (arglist__272762){
var sources = cljs.core.seq(arglist__272762);
return G__272760__delegate(sources);
});
G__272760.cljs$core$IFn$_invoke$arity$variadic = G__272760__delegate;
return G__272760;
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
var bind = (function (p1__272763_SHARP_){
var _STAR_tx_STAR_272767 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__272768 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__272768) : cljs.core.atom.call(null,G__272768));
})();

try{return (p1__272763_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__272763_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__272763_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_272767;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_272769 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_272769;
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
var len__6061__auto___272777 = arguments.length;
var i__6062__auto___272778 = (0);
while(true){
if((i__6062__auto___272778 < len__6061__auto___272777)){
args__6068__auto__.push((arguments[i__6062__auto___272778]));

var G__272779 = (i__6062__auto___272778 + (1));
i__6062__auto___272778 = G__272779;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__272776 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__272776) : cljs.core.atom.call(null,G__272776));
})();
var tag_neq = ((function (olds){
return (function (p1__272770_SHARP_,p2__272771_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__272770_SHARP_,p2__272771_SHARP_),p2__272771_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__272773_SHARP_,p2__272772_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__272773_SHARP_,p2__272772_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__272780__delegate = function (rest__272774_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__272774_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__272774_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__272774_SHARP_));

return news;
};
var G__272780 = function (var_args){
var rest__272774_SHARP_ = null;
if (arguments.length > 0) {
var G__272781__i = 0, G__272781__a = new Array(arguments.length -  0);
while (G__272781__i < G__272781__a.length) {G__272781__a[G__272781__i] = arguments[G__272781__i + 0]; ++G__272781__i;}
  rest__272774_SHARP_ = new cljs.core.IndexedSeq(G__272781__a,0);
} 
return G__272780__delegate.call(this,rest__272774_SHARP_);};
G__272780.cljs$lang$maxFixedArity = 0;
G__272780.cljs$lang$applyTo = (function (arglist__272782){
var rest__272774_SHARP_ = cljs.core.seq(arglist__272782);
return G__272780__delegate(rest__272774_SHARP_);
});
G__272780.cljs$core$IFn$_invoke$arity$variadic = G__272780__delegate;
return G__272780;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq272775){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq272775));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__272783_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__272783_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__272784_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__272784_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__272791_272797 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__272792_272798 = null;
var count__272793_272799 = (0);
var i__272794_272800 = (0);
while(true){
if((i__272794_272800 < count__272793_272799)){
var i_272801 = chunk__272792_272798.cljs$core$IIndexed$_nth$arity$2(null,i__272794_272800);
var G__272795_272802 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_272801) : ith_item__$1.call(null,i_272801));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__272795_272802) : f__$1.call(null,G__272795_272802));

var G__272803 = seq__272791_272797;
var G__272804 = chunk__272792_272798;
var G__272805 = count__272793_272799;
var G__272806 = (i__272794_272800 + (1));
seq__272791_272797 = G__272803;
chunk__272792_272798 = G__272804;
count__272793_272799 = G__272805;
i__272794_272800 = G__272806;
continue;
} else {
var temp__4425__auto___272807 = cljs.core.seq(seq__272791_272797);
if(temp__4425__auto___272807){
var seq__272791_272808__$1 = temp__4425__auto___272807;
if(cljs.core.chunked_seq_QMARK_(seq__272791_272808__$1)){
var c__5806__auto___272809 = cljs.core.chunk_first(seq__272791_272808__$1);
var G__272810 = cljs.core.chunk_rest(seq__272791_272808__$1);
var G__272811 = c__5806__auto___272809;
var G__272812 = cljs.core.count(c__5806__auto___272809);
var G__272813 = (0);
seq__272791_272797 = G__272810;
chunk__272792_272798 = G__272811;
count__272793_272799 = G__272812;
i__272794_272800 = G__272813;
continue;
} else {
var i_272814 = cljs.core.first(seq__272791_272808__$1);
var G__272796_272815 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_272814) : ith_item__$1.call(null,i_272814));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__272796_272815) : f__$1.call(null,G__272796_272815));

var G__272816 = cljs.core.next(seq__272791_272808__$1);
var G__272817 = null;
var G__272818 = (0);
var G__272819 = (0);
seq__272791_272797 = G__272816;
chunk__272792_272798 = G__272817;
count__272793_272799 = G__272818;
i__272794_272800 = G__272819;
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
