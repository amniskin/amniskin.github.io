// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = (function (){var G__161443 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161443) : cljs.core.atom.call(null,G__161443));
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
return cljs.core.cons(node,tailrecursion$javelin$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((function (){var G__161462 = node;
return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161462) : branch_QMARK_.call(null,G__161462));
})())?(function (){var G__161463 = node;
return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__161463) : children.call(null,G__161463));
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

var G__161466 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__161464_SHARP_,p2__161465_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__161464_SHARP_,p2__161465_SHARP_,p2__161465_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__161466;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_((function (){var G__161469 = x;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161469) : tailrecursion.javelin.cell_QMARK_.call(null,G__161469));
})())){
var G__161470 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161470) : cljs.core.deref.call(null,G__161470));
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
}catch (e161472){if((e161472 instanceof Error)){
var _ = e161472;
return null;
} else {
throw e161472;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__161475 = c;
tailrecursion.javelin.add_sync_BANG_(G__161475);

return G__161475;
} else {
var G__161476 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__161476));

return G__161476;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__161479){
var vec__161480 = p__161479;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161480,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__161481 = cljs.core.seq(srcs);
var chunk__161482 = null;
var count__161483 = (0);
var i__161484 = (0);
while(true){
if((i__161484 < count__161483)){
var src = chunk__161482.cljs$core$IIndexed$_nth$arity$2(null,i__161484);
if(cljs.core.truth_((function (){var G__161485 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161485) : tailrecursion.javelin.cell_QMARK_.call(null,G__161485));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__161487 = seq__161481;
var G__161488 = chunk__161482;
var G__161489 = count__161483;
var G__161490 = (i__161484 + (1));
seq__161481 = G__161487;
chunk__161482 = G__161488;
count__161483 = G__161489;
i__161484 = G__161490;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__161481);
if(temp__4425__auto__){
var seq__161481__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__161481__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__161481__$1);
var G__161491 = cljs.core.chunk_rest(seq__161481__$1);
var G__161492 = c__4995__auto__;
var G__161493 = cljs.core.count(c__4995__auto__);
var G__161494 = (0);
seq__161481 = G__161491;
chunk__161482 = G__161492;
count__161483 = G__161493;
i__161484 = G__161494;
continue;
} else {
var src = cljs.core.first(seq__161481__$1);
if(cljs.core.truth_((function (){var G__161486 = src;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161486) : tailrecursion.javelin.cell_QMARK_.call(null,G__161486));
})())){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__161495 = cljs.core.next(seq__161481__$1);
var G__161496 = null;
var G__161497 = (0);
var G__161498 = (0);
seq__161481 = G__161495;
chunk__161482 = G__161496;
count__161483 = G__161497;
i__161484 = G__161498;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq161477){
var G__161478 = cljs.core.first(seq161477);
var seq161477__$1 = cljs.core.next(seq161477);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__161478,seq161477__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__161503){
var vec__161504 = p__161503;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161504,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161504,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__161505_161519 = cljs.core.seq(this$.sources);
var chunk__161506_161520 = null;
var count__161507_161521 = (0);
var i__161508_161522 = (0);
while(true){
if((i__161508_161522 < count__161507_161521)){
var source_161523 = chunk__161506_161520.cljs$core$IIndexed$_nth$arity$2(null,i__161508_161522);
if(cljs.core.truth_((function (){var G__161509 = source_161523;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161509) : tailrecursion.javelin.cell_QMARK_.call(null,G__161509));
})())){
source_161523.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_161523.sinks,this$);

if((source_161523.rank > this$.rank)){
var seq__161510_161524 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__161505_161519,chunk__161506_161520,count__161507_161521,i__161508_161522,source_161523,vec__161504,f,sources){
return (function (p1__161499_SHARP_){
return p1__161499_SHARP_.sinks;
});})(seq__161505_161519,chunk__161506_161520,count__161507_161521,i__161508_161522,source_161523,vec__161504,f,sources))
,source_161523));
var chunk__161511_161525 = null;
var count__161512_161526 = (0);
var i__161513_161527 = (0);
while(true){
if((i__161513_161527 < count__161512_161526)){
var dep_161528 = chunk__161511_161525.cljs$core$IIndexed$_nth$arity$2(null,i__161513_161527);
dep_161528.rank = tailrecursion.javelin.next_rank();

var G__161529 = seq__161510_161524;
var G__161530 = chunk__161511_161525;
var G__161531 = count__161512_161526;
var G__161532 = (i__161513_161527 + (1));
seq__161510_161524 = G__161529;
chunk__161511_161525 = G__161530;
count__161512_161526 = G__161531;
i__161513_161527 = G__161532;
continue;
} else {
var temp__4425__auto___161533 = cljs.core.seq(seq__161510_161524);
if(temp__4425__auto___161533){
var seq__161510_161534__$1 = temp__4425__auto___161533;
if(cljs.core.chunked_seq_QMARK_(seq__161510_161534__$1)){
var c__4995__auto___161535 = cljs.core.chunk_first(seq__161510_161534__$1);
var G__161536 = cljs.core.chunk_rest(seq__161510_161534__$1);
var G__161537 = c__4995__auto___161535;
var G__161538 = cljs.core.count(c__4995__auto___161535);
var G__161539 = (0);
seq__161510_161524 = G__161536;
chunk__161511_161525 = G__161537;
count__161512_161526 = G__161538;
i__161513_161527 = G__161539;
continue;
} else {
var dep_161540 = cljs.core.first(seq__161510_161534__$1);
dep_161540.rank = tailrecursion.javelin.next_rank();

var G__161541 = cljs.core.next(seq__161510_161534__$1);
var G__161542 = null;
var G__161543 = (0);
var G__161544 = (0);
seq__161510_161524 = G__161541;
chunk__161511_161525 = G__161542;
count__161512_161526 = G__161543;
i__161513_161527 = G__161544;
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

var G__161545 = seq__161505_161519;
var G__161546 = chunk__161506_161520;
var G__161547 = count__161507_161521;
var G__161548 = (i__161508_161522 + (1));
seq__161505_161519 = G__161545;
chunk__161506_161520 = G__161546;
count__161507_161521 = G__161547;
i__161508_161522 = G__161548;
continue;
} else {
var temp__4425__auto___161549 = cljs.core.seq(seq__161505_161519);
if(temp__4425__auto___161549){
var seq__161505_161550__$1 = temp__4425__auto___161549;
if(cljs.core.chunked_seq_QMARK_(seq__161505_161550__$1)){
var c__4995__auto___161551 = cljs.core.chunk_first(seq__161505_161550__$1);
var G__161552 = cljs.core.chunk_rest(seq__161505_161550__$1);
var G__161553 = c__4995__auto___161551;
var G__161554 = cljs.core.count(c__4995__auto___161551);
var G__161555 = (0);
seq__161505_161519 = G__161552;
chunk__161506_161520 = G__161553;
count__161507_161521 = G__161554;
i__161508_161522 = G__161555;
continue;
} else {
var source_161556 = cljs.core.first(seq__161505_161550__$1);
if(cljs.core.truth_((function (){var G__161514 = source_161556;
return (tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161514) : tailrecursion.javelin.cell_QMARK_.call(null,G__161514));
})())){
source_161556.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_161556.sinks,this$);

if((source_161556.rank > this$.rank)){
var seq__161515_161557 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__161505_161519,chunk__161506_161520,count__161507_161521,i__161508_161522,source_161556,seq__161505_161550__$1,temp__4425__auto___161549,vec__161504,f,sources){
return (function (p1__161499_SHARP_){
return p1__161499_SHARP_.sinks;
});})(seq__161505_161519,chunk__161506_161520,count__161507_161521,i__161508_161522,source_161556,seq__161505_161550__$1,temp__4425__auto___161549,vec__161504,f,sources))
,source_161556));
var chunk__161516_161558 = null;
var count__161517_161559 = (0);
var i__161518_161560 = (0);
while(true){
if((i__161518_161560 < count__161517_161559)){
var dep_161561 = chunk__161516_161558.cljs$core$IIndexed$_nth$arity$2(null,i__161518_161560);
dep_161561.rank = tailrecursion.javelin.next_rank();

var G__161562 = seq__161515_161557;
var G__161563 = chunk__161516_161558;
var G__161564 = count__161517_161559;
var G__161565 = (i__161518_161560 + (1));
seq__161515_161557 = G__161562;
chunk__161516_161558 = G__161563;
count__161517_161559 = G__161564;
i__161518_161560 = G__161565;
continue;
} else {
var temp__4425__auto___161566__$1 = cljs.core.seq(seq__161515_161557);
if(temp__4425__auto___161566__$1){
var seq__161515_161567__$1 = temp__4425__auto___161566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__161515_161567__$1)){
var c__4995__auto___161568 = cljs.core.chunk_first(seq__161515_161567__$1);
var G__161569 = cljs.core.chunk_rest(seq__161515_161567__$1);
var G__161570 = c__4995__auto___161568;
var G__161571 = cljs.core.count(c__4995__auto___161568);
var G__161572 = (0);
seq__161515_161557 = G__161569;
chunk__161516_161558 = G__161570;
count__161517_161559 = G__161571;
i__161518_161560 = G__161572;
continue;
} else {
var dep_161573 = cljs.core.first(seq__161515_161567__$1);
dep_161573.rank = tailrecursion.javelin.next_rank();

var G__161574 = cljs.core.next(seq__161515_161567__$1);
var G__161575 = null;
var G__161576 = (0);
var G__161577 = (0);
seq__161515_161557 = G__161574;
chunk__161516_161558 = G__161575;
count__161517_161559 = G__161576;
i__161518_161560 = G__161577;
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

var G__161578 = cljs.core.next(seq__161505_161550__$1);
var G__161579 = null;
var G__161580 = (0);
var G__161581 = (0);
seq__161505_161519 = G__161578;
chunk__161506_161520 = G__161579;
count__161507_161521 = G__161580;
i__161508_161522 = G__161581;
continue;
}
} else {
}
}
break;
}

var compute_161582 = ((function (vec__161504,f,sources){
return (function (p1__161500_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__161500_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__161500_SHARP_)));
});})(vec__161504,f,sources))
;
this$.thunk = ((function (compute_161582,vec__161504,f,sources){
return (function (){
return this$.state = compute_161582(this$.sources);
});})(compute_161582,vec__161504,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq161501){
var G__161502 = cljs.core.first(seq161501);
var seq161501__$1 = cljs.core.next(seq161501);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__161502,seq161501__$1);
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
if(cljs.core.truth_((function (){var G__161583 = this$__$1;
return (tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161583) : tailrecursion.javelin.lens_QMARK_.call(null,G__161583));
})())){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((function (){var G__161584 = this$__$1;
return (tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.input_QMARK_.cljs$core$IFn$_invoke$arity$1(G__161584) : tailrecursion.javelin.input_QMARK_.call(null,G__161584));
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
var G__161585 = this$__$1;
var G__161586 = (function (){var G__161587 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__161587) : f.call(null,G__161587));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161585,G__161586) : cljs.core.reset_BANG_.call(null,G__161585,G__161586));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__161588 = this$__$1;
var G__161589 = (function (){var G__161590 = this$__$1.state;
var G__161591 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__161590,G__161591) : f.call(null,G__161590,G__161591));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161588,G__161589) : cljs.core.reset_BANG_.call(null,G__161588,G__161589));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__161592 = this$__$1;
var G__161593 = (function (){var G__161594 = this$__$1.state;
var G__161595 = a;
var G__161596 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__161594,G__161595,G__161596) : f.call(null,G__161594,G__161595,G__161596));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161592,G__161593) : cljs.core.reset_BANG_.call(null,G__161592,G__161593));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__161597 = this$__$1;
var G__161598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161597,G__161598) : cljs.core.reset_BANG_.call(null,G__161597,G__161598));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__161599 = cljs.core.seq(self__.watches);
var chunk__161600 = null;
var count__161601 = (0);
var i__161602 = (0);
while(true){
if((i__161602 < count__161601)){
var vec__161603 = chunk__161600.cljs$core$IIndexed$_nth$arity$2(null,i__161602);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161603,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161603,(1),null);
var G__161604_161613 = key;
var G__161605_161614 = this$__$1;
var G__161606_161615 = o;
var G__161607_161616 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__161604_161613,G__161605_161614,G__161606_161615,G__161607_161616) : f.call(null,G__161604_161613,G__161605_161614,G__161606_161615,G__161607_161616));

var G__161617 = seq__161599;
var G__161618 = chunk__161600;
var G__161619 = count__161601;
var G__161620 = (i__161602 + (1));
seq__161599 = G__161617;
chunk__161600 = G__161618;
count__161601 = G__161619;
i__161602 = G__161620;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__161599);
if(temp__4425__auto__){
var seq__161599__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__161599__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__161599__$1);
var G__161621 = cljs.core.chunk_rest(seq__161599__$1);
var G__161622 = c__4995__auto__;
var G__161623 = cljs.core.count(c__4995__auto__);
var G__161624 = (0);
seq__161599 = G__161621;
chunk__161600 = G__161622;
count__161601 = G__161623;
i__161602 = G__161624;
continue;
} else {
var vec__161608 = cljs.core.first(seq__161599__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161608,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161608,(1),null);
var G__161609_161625 = key;
var G__161610_161626 = this$__$1;
var G__161611_161627 = o;
var G__161612_161628 = n;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__161609_161625,G__161610_161626,G__161611_161627,G__161612_161628) : f.call(null,G__161609_161625,G__161610_161626,G__161611_161627,G__161612_161628));

var G__161629 = cljs.core.next(seq__161599__$1);
var G__161630 = null;
var G__161631 = (0);
var G__161632 = (0);
seq__161599 = G__161629;
chunk__161600 = G__161630;
count__161601 = G__161631;
i__161602 = G__161632;
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
var G__161635__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__161634 = cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none;
return (tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(G__161634) : tailrecursion.javelin.cell.call(null,G__161634));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__161635 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__161636__i = 0, G__161636__a = new Array(arguments.length -  0);
while (G__161636__i < G__161636__a.length) {G__161636__a[G__161636__i] = arguments[G__161636__i + 0]; ++G__161636__i;}
  sources = new cljs.core.IndexedSeq(G__161636__a,0);
} 
return G__161635__delegate.call(this,sources);};
G__161635.cljs$lang$maxFixedArity = 0;
G__161635.cljs$lang$applyTo = (function (arglist__161637){
var sources = cljs.core.seq(arglist__161637);
return G__161635__delegate(sources);
});
G__161635.cljs$core$IFn$_invoke$arity$variadic = G__161635__delegate;
return G__161635;
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
var bind = (function (p1__161638_SHARP_){
var _STAR_tx_STAR_161643 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__161644 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161644) : cljs.core.atom.call(null,G__161644));
})();

try{return (p1__161638_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__161638_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__161638_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_161643;
}});
var prop = ((function (bind){
return (function (){
var tx = (function (){var G__161645 = tailrecursion.javelin._STAR_tx_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161645) : cljs.core.deref.call(null,G__161645));
})();
var _STAR_tx_STAR_161646 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_161646;
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
var olds = (function (){var G__161653 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__161653) : cljs.core.atom.call(null,G__161653));
})();
var tag_neq = ((function (olds){
return (function (p1__161647_SHARP_,p2__161648_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__161647_SHARP_,p2__161648_SHARP_),p2__161648_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__161650_SHARP_,p2__161649_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__161650_SHARP_,p2__161649_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__161657__delegate = function (rest__161651_SHARP_){
var news = diff((function (){var G__161654 = olds;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161654) : cljs.core.deref.call(null,G__161654));
})(),rest__161651_SHARP_);
var G__161655_161658 = olds;
var G__161656_161659 = rest__161651_SHARP_;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__161655_161658,G__161656_161659) : cljs.core.reset_BANG_.call(null,G__161655_161658,G__161656_161659));

return news;
};
var G__161657 = function (var_args){
var rest__161651_SHARP_ = null;
if (arguments.length > 0) {
var G__161660__i = 0, G__161660__a = new Array(arguments.length -  0);
while (G__161660__i < G__161660__a.length) {G__161660__a[G__161660__i] = arguments[G__161660__i + 0]; ++G__161660__i;}
  rest__161651_SHARP_ = new cljs.core.IndexedSeq(G__161660__a,0);
} 
return G__161657__delegate.call(this,rest__161651_SHARP_);};
G__161657.cljs$lang$maxFixedArity = 0;
G__161657.cljs$lang$applyTo = (function (arglist__161661){
var rest__161651_SHARP_ = cljs.core.seq(arglist__161661);
return G__161657__delegate(rest__161651_SHARP_);
});
G__161657.cljs$core$IFn$_invoke$arity$variadic = G__161657__delegate;
return G__161657;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq161652){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq161652));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__161662_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__161662_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((function (){var G__161664 = cseq;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__161664) : cljs.core.deref.call(null,G__161664));
})())));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__161665_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__161665_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__161675_161684 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__161676_161685 = null;
var count__161677_161686 = (0);
var i__161678_161687 = (0);
while(true){
if((i__161678_161687 < count__161677_161686)){
var i_161688 = chunk__161676_161685.cljs$core$IIndexed$_nth$arity$2(null,i__161678_161687);
var G__161679_161689 = (function (){var G__161680 = i_161688;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__161680) : ith_item__$1.call(null,G__161680));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__161679_161689) : f__$1.call(null,G__161679_161689));

var G__161690 = seq__161675_161684;
var G__161691 = chunk__161676_161685;
var G__161692 = count__161677_161686;
var G__161693 = (i__161678_161687 + (1));
seq__161675_161684 = G__161690;
chunk__161676_161685 = G__161691;
count__161677_161686 = G__161692;
i__161678_161687 = G__161693;
continue;
} else {
var temp__4425__auto___161694 = cljs.core.seq(seq__161675_161684);
if(temp__4425__auto___161694){
var seq__161675_161695__$1 = temp__4425__auto___161694;
if(cljs.core.chunked_seq_QMARK_(seq__161675_161695__$1)){
var c__4995__auto___161696 = cljs.core.chunk_first(seq__161675_161695__$1);
var G__161697 = cljs.core.chunk_rest(seq__161675_161695__$1);
var G__161698 = c__4995__auto___161696;
var G__161699 = cljs.core.count(c__4995__auto___161696);
var G__161700 = (0);
seq__161675_161684 = G__161697;
chunk__161676_161685 = G__161698;
count__161677_161686 = G__161699;
i__161678_161687 = G__161700;
continue;
} else {
var i_161701 = cljs.core.first(seq__161675_161695__$1);
var G__161681_161702 = (function (){var G__161682 = i_161701;
return (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(G__161682) : ith_item__$1.call(null,G__161682));
})();
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__161681_161702) : f__$1.call(null,G__161681_161702));

var G__161703 = cljs.core.next(seq__161675_161695__$1);
var G__161704 = null;
var G__161705 = (0);
var G__161706 = (0);
seq__161675_161684 = G__161703;
chunk__161676_161685 = G__161704;
count__161677_161686 = G__161705;
i__161678_161687 = G__161706;
continue;
}
} else {
}
}
break;
}

var G__161683 = cur_count__$1;
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(G__161683) : reset_pool_size_BANG_.call(null,G__161683));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
