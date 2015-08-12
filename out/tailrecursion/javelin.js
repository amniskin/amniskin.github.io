// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__161435 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161435) : cljs.core.atom.call(null,G__161435));
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
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__161454 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161454) : branch_QMARK_.call(null,G__161454));
})())?(function (){var G__161455 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__161455) : children.call(null,G__161455));
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

var G__161458 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__161456_SHARP_,p2__161457_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__161456_SHARP_,p2__161457_SHARP_,p2__161457_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__161458;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((function (){var G__161461 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161461) : tailrecursion.javelin.cell_QMARK_.call(null,G__161461));
})())){
var G__161462 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161462) : cljs.core.deref.call(null,G__161462));
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
}catch (e161464){if((e161464 instanceof Error)){
var _ = e161464;
return null;
} else {
throw e161464;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__161467 = c;
tailrecursion.javelin.add_sync_BANG_(G__161467);

return G__161467;
} else {
var G__161468 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__161468));

return G__161468;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__161471){
var vec__161472 = p__161471;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161472,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__161473 = cljs.core.seq(srcs);
var chunk__161474 = null;
var count__161475 = (0);
var i__161476 = (0);
while(true){
if((i__161476 < count__161475)){
var src = chunk__161474.cljs$core$IIndexed$_nth$arity$2(null,i__161476);
if(cljs.core.truth_((function (){var G__161477 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161477) : tailrecursion.javelin.cell_QMARK_.call(null,G__161477));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__161479 = seq__161473;
var G__161480 = chunk__161474;
var G__161481 = count__161475;
var G__161482 = (i__161476 + (1));
seq__161473 = G__161479;
chunk__161474 = G__161480;
count__161475 = G__161481;
i__161476 = G__161482;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__161473);
if(temp__4425__auto__){
var seq__161473__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__161473__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__161473__$1);
var G__161483 = cljs.core.chunk_rest(seq__161473__$1);
var G__161484 = c__4995__auto__;
var G__161485 = cljs.core.count(c__4995__auto__);
var G__161486 = (0);
seq__161473 = G__161483;
chunk__161474 = G__161484;
count__161475 = G__161485;
i__161476 = G__161486;
continue;
} else {
var src = cljs.core.first(seq__161473__$1);
if(cljs.core.truth_((function (){var G__161478 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161478) : tailrecursion.javelin.cell_QMARK_.call(null,G__161478));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__161487 = cljs.core.next(seq__161473__$1);
var G__161488 = null;
var G__161489 = (0);
var G__161490 = (0);
seq__161473 = G__161487;
chunk__161474 = G__161488;
count__161475 = G__161489;
i__161476 = G__161490;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq161469){
var G__161470 = cljs.core.first(seq161469);
var seq161469__$1 = cljs.core.next(seq161469);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__161470,seq161469__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__161495){
var vec__161496 = p__161495;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161496,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161496,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__161497_161511 = cljs.core.seq(this$.sources);
var chunk__161498_161512 = null;
var count__161499_161513 = (0);
var i__161500_161514 = (0);
while(true){
if((i__161500_161514 < count__161499_161513)){
var source_161515 = chunk__161498_161512.cljs$core$IIndexed$_nth$arity$2(null,i__161500_161514);
if(cljs.core.truth_((function (){var G__161501 = source_161515;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161501) : tailrecursion.javelin.cell_QMARK_.call(null,G__161501));
})())){
source_161515.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_161515.sinks,this$);

if((source_161515.rank > this$.rank)){
var seq__161502_161516 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__161497_161511,chunk__161498_161512,count__161499_161513,i__161500_161514,source_161515,vec__161496,f,sources){
return (function (p1__161491_SHARP_){
return p1__161491_SHARP_.sinks;
});})(seq__161497_161511,chunk__161498_161512,count__161499_161513,i__161500_161514,source_161515,vec__161496,f,sources))
,source_161515));
var chunk__161503_161517 = null;
var count__161504_161518 = (0);
var i__161505_161519 = (0);
while(true){
if((i__161505_161519 < count__161504_161518)){
var dep_161520 = chunk__161503_161517.cljs$core$IIndexed$_nth$arity$2(null,i__161505_161519);
dep_161520.rank = tailrecursion.javelin.next_rank();

var G__161521 = seq__161502_161516;
var G__161522 = chunk__161503_161517;
var G__161523 = count__161504_161518;
var G__161524 = (i__161505_161519 + (1));
seq__161502_161516 = G__161521;
chunk__161503_161517 = G__161522;
count__161504_161518 = G__161523;
i__161505_161519 = G__161524;
continue;
} else {
var temp__4425__auto___161525 = cljs.core.seq(seq__161502_161516);
if(temp__4425__auto___161525){
var seq__161502_161526__$1 = temp__4425__auto___161525;
if(cljs.core.chunked_seq_QMARK_(seq__161502_161526__$1)){
var c__4995__auto___161527 = cljs.core.chunk_first(seq__161502_161526__$1);
var G__161528 = cljs.core.chunk_rest(seq__161502_161526__$1);
var G__161529 = c__4995__auto___161527;
var G__161530 = cljs.core.count(c__4995__auto___161527);
var G__161531 = (0);
seq__161502_161516 = G__161528;
chunk__161503_161517 = G__161529;
count__161504_161518 = G__161530;
i__161505_161519 = G__161531;
continue;
} else {
var dep_161532 = cljs.core.first(seq__161502_161526__$1);
dep_161532.rank = tailrecursion.javelin.next_rank();

var G__161533 = cljs.core.next(seq__161502_161526__$1);
var G__161534 = null;
var G__161535 = (0);
var G__161536 = (0);
seq__161502_161516 = G__161533;
chunk__161503_161517 = G__161534;
count__161504_161518 = G__161535;
i__161505_161519 = G__161536;
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

var G__161537 = seq__161497_161511;
var G__161538 = chunk__161498_161512;
var G__161539 = count__161499_161513;
var G__161540 = (i__161500_161514 + (1));
seq__161497_161511 = G__161537;
chunk__161498_161512 = G__161538;
count__161499_161513 = G__161539;
i__161500_161514 = G__161540;
continue;
} else {
var temp__4425__auto___161541 = cljs.core.seq(seq__161497_161511);
if(temp__4425__auto___161541){
var seq__161497_161542__$1 = temp__4425__auto___161541;
if(cljs.core.chunked_seq_QMARK_(seq__161497_161542__$1)){
var c__4995__auto___161543 = cljs.core.chunk_first(seq__161497_161542__$1);
var G__161544 = cljs.core.chunk_rest(seq__161497_161542__$1);
var G__161545 = c__4995__auto___161543;
var G__161546 = cljs.core.count(c__4995__auto___161543);
var G__161547 = (0);
seq__161497_161511 = G__161544;
chunk__161498_161512 = G__161545;
count__161499_161513 = G__161546;
i__161500_161514 = G__161547;
continue;
} else {
var source_161548 = cljs.core.first(seq__161497_161542__$1);
if(cljs.core.truth_((function (){var G__161506 = source_161548;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161506) : tailrecursion.javelin.cell_QMARK_.call(null,G__161506));
})())){
source_161548.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_161548.sinks,this$);

if((source_161548.rank > this$.rank)){
var seq__161507_161549 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__161497_161511,chunk__161498_161512,count__161499_161513,i__161500_161514,source_161548,seq__161497_161542__$1,temp__4425__auto___161541,vec__161496,f,sources){
return (function (p1__161491_SHARP_){
return p1__161491_SHARP_.sinks;
});})(seq__161497_161511,chunk__161498_161512,count__161499_161513,i__161500_161514,source_161548,seq__161497_161542__$1,temp__4425__auto___161541,vec__161496,f,sources))
,source_161548));
var chunk__161508_161550 = null;
var count__161509_161551 = (0);
var i__161510_161552 = (0);
while(true){
if((i__161510_161552 < count__161509_161551)){
var dep_161553 = chunk__161508_161550.cljs$core$IIndexed$_nth$arity$2(null,i__161510_161552);
dep_161553.rank = tailrecursion.javelin.next_rank();

var G__161554 = seq__161507_161549;
var G__161555 = chunk__161508_161550;
var G__161556 = count__161509_161551;
var G__161557 = (i__161510_161552 + (1));
seq__161507_161549 = G__161554;
chunk__161508_161550 = G__161555;
count__161509_161551 = G__161556;
i__161510_161552 = G__161557;
continue;
} else {
var temp__4425__auto___161558__$1 = cljs.core.seq(seq__161507_161549);
if(temp__4425__auto___161558__$1){
var seq__161507_161559__$1 = temp__4425__auto___161558__$1;
if(cljs.core.chunked_seq_QMARK_(seq__161507_161559__$1)){
var c__4995__auto___161560 = cljs.core.chunk_first(seq__161507_161559__$1);
var G__161561 = cljs.core.chunk_rest(seq__161507_161559__$1);
var G__161562 = c__4995__auto___161560;
var G__161563 = cljs.core.count(c__4995__auto___161560);
var G__161564 = (0);
seq__161507_161549 = G__161561;
chunk__161508_161550 = G__161562;
count__161509_161551 = G__161563;
i__161510_161552 = G__161564;
continue;
} else {
var dep_161565 = cljs.core.first(seq__161507_161559__$1);
dep_161565.rank = tailrecursion.javelin.next_rank();

var G__161566 = cljs.core.next(seq__161507_161559__$1);
var G__161567 = null;
var G__161568 = (0);
var G__161569 = (0);
seq__161507_161549 = G__161566;
chunk__161508_161550 = G__161567;
count__161509_161551 = G__161568;
i__161510_161552 = G__161569;
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

var G__161570 = cljs.core.next(seq__161497_161542__$1);
var G__161571 = null;
var G__161572 = (0);
var G__161573 = (0);
seq__161497_161511 = G__161570;
chunk__161498_161512 = G__161571;
count__161499_161513 = G__161572;
i__161500_161514 = G__161573;
continue;
}
} else {
}
}
break;
}

var compute_161574 = ((function (vec__161496,f,sources){
return (function (p1__161492_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__161492_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__161492_SHARP_)));
});})(vec__161496,f,sources))
;
this$.thunk = ((function (compute_161574,vec__161496,f,sources){
return (function (){
return this$.state = compute_161574(this$.sources);
});})(compute_161574,vec__161496,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq161493){
var G__161494 = cljs.core.first(seq161493);
var seq161493__$1 = cljs.core.next(seq161493);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__161494,seq161493__$1);
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
if(cljs.core.truth_((function (){var G__161575 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161575) : tailrecursion.javelin.lens_QMARK_.call(null,G__161575));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__161576 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161576) : tailrecursion.javelin.input_QMARK_.call(null,G__161576));
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
var G__161577 = this$__$1;
var G__161578 = (function (){var G__161579 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__161579) : f.call(null,G__161579));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161577,G__161578) : cljs.core.reset_BANG_.call(null,G__161577,G__161578));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__161580 = this$__$1;
var G__161581 = (function (){var G__161582 = this$__$1.state;
var G__161583 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__161582,G__161583) : f.call(null,G__161582,G__161583));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161580,G__161581) : cljs.core.reset_BANG_.call(null,G__161580,G__161581));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__161584 = this$__$1;
var G__161585 = (function (){var G__161586 = this$__$1.state;
var G__161587 = a;
var G__161588 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__161586,G__161587,G__161588) : f.call(null,G__161586,G__161587,G__161588));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161584,G__161585) : cljs.core.reset_BANG_.call(null,G__161584,G__161585));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__161589 = this$__$1;
var G__161590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161589,G__161590) : cljs.core.reset_BANG_.call(null,G__161589,G__161590));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__161591 = cljs.core.seq(self__.watches);
var chunk__161592 = null;
var count__161593 = (0);
var i__161594 = (0);
while(true){
if((i__161594 < count__161593)){
var vec__161595 = chunk__161592.cljs$core$IIndexed$_nth$arity$2(null,i__161594);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161595,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161595,(1),null);
var G__161596_161605 = key;
var G__161597_161606 = this$__$1;
var G__161598_161607 = o;
var G__161599_161608 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__161596_161605,G__161597_161606,G__161598_161607,G__161599_161608) : f.call(null,G__161596_161605,G__161597_161606,G__161598_161607,G__161599_161608));

var G__161609 = seq__161591;
var G__161610 = chunk__161592;
var G__161611 = count__161593;
var G__161612 = (i__161594 + (1));
seq__161591 = G__161609;
chunk__161592 = G__161610;
count__161593 = G__161611;
i__161594 = G__161612;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__161591);
if(temp__4425__auto__){
var seq__161591__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__161591__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__161591__$1);
var G__161613 = cljs.core.chunk_rest(seq__161591__$1);
var G__161614 = c__4995__auto__;
var G__161615 = cljs.core.count(c__4995__auto__);
var G__161616 = (0);
seq__161591 = G__161613;
chunk__161592 = G__161614;
count__161593 = G__161615;
i__161594 = G__161616;
continue;
} else {
var vec__161600 = cljs.core.first(seq__161591__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161600,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161600,(1),null);
var G__161601_161617 = key;
var G__161602_161618 = this$__$1;
var G__161603_161619 = o;
var G__161604_161620 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__161601_161617,G__161602_161618,G__161603_161619,G__161604_161620) : f.call(null,G__161601_161617,G__161602_161618,G__161603_161619,G__161604_161620));

var G__161621 = cljs.core.next(seq__161591__$1);
var G__161622 = null;
var G__161623 = (0);
var G__161624 = (0);
seq__161591 = G__161621;
chunk__161592 = G__161622;
count__161593 = G__161623;
i__161594 = G__161624;
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
var G__161627__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__161626 = cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__161626) : tailrecursion.javelin.cell.call(null,G__161626));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__161627 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__161628__i = 0, G__161628__a = new Array(arguments.length -  0);
while (G__161628__i < G__161628__a.length) {G__161628__a[G__161628__i] = arguments[G__161628__i + 0]; ++G__161628__i;}
  sources = new cljs.core.IndexedSeq(G__161628__a,0);
} 
return G__161627__delegate.call(this,sources);};
G__161627.cljs$lang$maxFixedArity = 0;
G__161627.cljs$lang$applyTo = (function (arglist__161629){
var sources = cljs.core.seq(arglist__161629);
return G__161627__delegate(sources);
});
G__161627.cljs$core$IFn$_invoke$arity$variadic = G__161627__delegate;
return G__161627;
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
var bind = (function (p1__161630_SHARP_){
var _STAR_tx_STAR_161635 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__161636 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161636) : cljs.core.atom.call(null,G__161636));
})();

try{return (p1__161630_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__161630_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__161630_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_161635;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__161637 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161637) : cljs.core.deref.call(null,G__161637));
})();
var _STAR_tx_STAR_161638 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_161638;
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
var olds = (function (){var G__161645 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161645) : cljs.core.atom.call(null,G__161645));
})();
var tag_neq = ((function (olds){
return (function (p1__161639_SHARP_,p2__161640_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__161639_SHARP_,p2__161640_SHARP_),p2__161640_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__161642_SHARP_,p2__161641_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__161642_SHARP_,p2__161641_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__161649__delegate = function (rest__161643_SHARP_){
var news = diff((function (){var G__161646 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161646) : cljs.core.deref.call(null,G__161646));
})(),rest__161643_SHARP_);
var G__161647_161650 = olds;
var G__161648_161651 = rest__161643_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161647_161650,G__161648_161651) : cljs.core.reset_BANG_.call(null,G__161647_161650,G__161648_161651));

return news;
};
var G__161649 = function (var_args){
var rest__161643_SHARP_ = null;
if (arguments.length > 0) {
var G__161652__i = 0, G__161652__a = new Array(arguments.length -  0);
while (G__161652__i < G__161652__a.length) {G__161652__a[G__161652__i] = arguments[G__161652__i + 0]; ++G__161652__i;}
  rest__161643_SHARP_ = new cljs.core.IndexedSeq(G__161652__a,0);
} 
return G__161649__delegate.call(this,rest__161643_SHARP_);};
G__161649.cljs$lang$maxFixedArity = 0;
G__161649.cljs$lang$applyTo = (function (arglist__161653){
var rest__161643_SHARP_ = cljs.core.seq(arglist__161653);
return G__161649__delegate(rest__161643_SHARP_);
});
G__161649.cljs$core$IFn$_invoke$arity$variadic = G__161649__delegate;
return G__161649;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq161644){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq161644));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__161654_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__161654_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__161656 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161656) : cljs.core.deref.call(null,G__161656));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__161657_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__161657_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__161667_161676 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__161668_161677 = null;
var count__161669_161678 = (0);
var i__161670_161679 = (0);
while(true){
if((i__161670_161679 < count__161669_161678)){
var i_161680 = chunk__161668_161677.cljs$core$IIndexed$_nth$arity$2(null,i__161670_161679);
var G__161671_161681 = (function (){var G__161672 = i_161680;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__161672) : ith_item__$1.call(null,G__161672));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__161671_161681) : f__$1.call(null,G__161671_161681));

var G__161682 = seq__161667_161676;
var G__161683 = chunk__161668_161677;
var G__161684 = count__161669_161678;
var G__161685 = (i__161670_161679 + (1));
seq__161667_161676 = G__161682;
chunk__161668_161677 = G__161683;
count__161669_161678 = G__161684;
i__161670_161679 = G__161685;
continue;
} else {
var temp__4425__auto___161686 = cljs.core.seq(seq__161667_161676);
if(temp__4425__auto___161686){
var seq__161667_161687__$1 = temp__4425__auto___161686;
if(cljs.core.chunked_seq_QMARK_(seq__161667_161687__$1)){
var c__4995__auto___161688 = cljs.core.chunk_first(seq__161667_161687__$1);
var G__161689 = cljs.core.chunk_rest(seq__161667_161687__$1);
var G__161690 = c__4995__auto___161688;
var G__161691 = cljs.core.count(c__4995__auto___161688);
var G__161692 = (0);
seq__161667_161676 = G__161689;
chunk__161668_161677 = G__161690;
count__161669_161678 = G__161691;
i__161670_161679 = G__161692;
continue;
} else {
var i_161693 = cljs.core.first(seq__161667_161687__$1);
var G__161673_161694 = (function (){var G__161674 = i_161693;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__161674) : ith_item__$1.call(null,G__161674));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__161673_161694) : f__$1.call(null,G__161673_161694));

var G__161695 = cljs.core.next(seq__161667_161687__$1);
var G__161696 = null;
var G__161697 = (0);
var G__161698 = (0);
seq__161667_161676 = G__161695;
chunk__161668_161677 = G__161696;
count__161669_161678 = G__161697;
i__161670_161679 = G__161698;
continue;
}
} else {
}
}
break;
}

var G__161675 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__161675) : reset_pool_size_BANG_.call(null,G__161675));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
