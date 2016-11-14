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

var G__9378 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__9376_SHARP_,p2__9377_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9376_SHARP_,p2__9377_SHARP_,p2__9377_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__9378;
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
}catch (e9380){if((e9380 instanceof Error)){
var _ = e9380;
return null;
} else {
throw e9380;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__9383 = c;
tailrecursion.javelin.add_sync_BANG_(G__9383);

return G__9383;
} else {
var G__9384 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__9384));

return G__9384;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___9393 = arguments.length;
var i__5882__auto___9394 = (0);
while(true){
if((i__5882__auto___9394 < len__5881__auto___9393)){
args__5888__auto__.push((arguments[i__5882__auto___9394]));

var G__9395 = (i__5882__auto___9394 + (1));
i__5882__auto___9394 = G__9395;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9387){
var vec__9388 = p__9387;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9388,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__9389 = cljs.core.seq(srcs);
var chunk__9390 = null;
var count__9391 = (0);
var i__9392 = (0);
while(true){
if((i__9392 < count__9391)){
var src = chunk__9390.cljs$core$IIndexed$_nth$arity$2(null,i__9392);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9396 = seq__9389;
var G__9397 = chunk__9390;
var G__9398 = count__9391;
var G__9399 = (i__9392 + (1));
seq__9389 = G__9396;
chunk__9390 = G__9397;
count__9391 = G__9398;
i__9392 = G__9399;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9389);
if(temp__4425__auto__){
var seq__9389__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9389__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__9389__$1);
var G__9400 = cljs.core.chunk_rest(seq__9389__$1);
var G__9401 = c__5626__auto__;
var G__9402 = cljs.core.count(c__5626__auto__);
var G__9403 = (0);
seq__9389 = G__9400;
chunk__9390 = G__9401;
count__9391 = G__9402;
i__9392 = G__9403;
continue;
} else {
var src = cljs.core.first(seq__9389__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__9404 = cljs.core.next(seq__9389__$1);
var G__9405 = null;
var G__9406 = (0);
var G__9407 = (0);
seq__9389 = G__9404;
chunk__9390 = G__9405;
count__9391 = G__9406;
i__9392 = G__9407;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq9385){
var G__9386 = cljs.core.first(seq9385);
var seq9385__$1 = cljs.core.next(seq9385);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9386,seq9385__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___9426 = arguments.length;
var i__5882__auto___9427 = (0);
while(true){
if((i__5882__auto___9427 < len__5881__auto___9426)){
args__5888__auto__.push((arguments[i__5882__auto___9427]));

var G__9428 = (i__5882__auto___9427 + (1));
i__5882__auto___9427 = G__9428;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__9412){
var vec__9413 = p__9412;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9413,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9413,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__9414_9429 = cljs.core.seq(this$.sources);
var chunk__9415_9430 = null;
var count__9416_9431 = (0);
var i__9417_9432 = (0);
while(true){
if((i__9417_9432 < count__9416_9431)){
var source_9433 = chunk__9415_9430.cljs$core$IIndexed$_nth$arity$2(null,i__9417_9432);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9433) : tailrecursion.javelin.cell_QMARK_.call(null,source_9433)))){
source_9433.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9433.sinks,this$);

if((source_9433.rank > this$.rank)){
var seq__9418_9434 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9414_9429,chunk__9415_9430,count__9416_9431,i__9417_9432,source_9433,vec__9413,f,sources){
return (function (p1__9408_SHARP_){
return p1__9408_SHARP_.sinks;
});})(seq__9414_9429,chunk__9415_9430,count__9416_9431,i__9417_9432,source_9433,vec__9413,f,sources))
,source_9433));
var chunk__9419_9435 = null;
var count__9420_9436 = (0);
var i__9421_9437 = (0);
while(true){
if((i__9421_9437 < count__9420_9436)){
var dep_9438 = chunk__9419_9435.cljs$core$IIndexed$_nth$arity$2(null,i__9421_9437);
dep_9438.rank = tailrecursion.javelin.next_rank();

var G__9439 = seq__9418_9434;
var G__9440 = chunk__9419_9435;
var G__9441 = count__9420_9436;
var G__9442 = (i__9421_9437 + (1));
seq__9418_9434 = G__9439;
chunk__9419_9435 = G__9440;
count__9420_9436 = G__9441;
i__9421_9437 = G__9442;
continue;
} else {
var temp__4425__auto___9443 = cljs.core.seq(seq__9418_9434);
if(temp__4425__auto___9443){
var seq__9418_9444__$1 = temp__4425__auto___9443;
if(cljs.core.chunked_seq_QMARK_(seq__9418_9444__$1)){
var c__5626__auto___9445 = cljs.core.chunk_first(seq__9418_9444__$1);
var G__9446 = cljs.core.chunk_rest(seq__9418_9444__$1);
var G__9447 = c__5626__auto___9445;
var G__9448 = cljs.core.count(c__5626__auto___9445);
var G__9449 = (0);
seq__9418_9434 = G__9446;
chunk__9419_9435 = G__9447;
count__9420_9436 = G__9448;
i__9421_9437 = G__9449;
continue;
} else {
var dep_9450 = cljs.core.first(seq__9418_9444__$1);
dep_9450.rank = tailrecursion.javelin.next_rank();

var G__9451 = cljs.core.next(seq__9418_9444__$1);
var G__9452 = null;
var G__9453 = (0);
var G__9454 = (0);
seq__9418_9434 = G__9451;
chunk__9419_9435 = G__9452;
count__9420_9436 = G__9453;
i__9421_9437 = G__9454;
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

var G__9455 = seq__9414_9429;
var G__9456 = chunk__9415_9430;
var G__9457 = count__9416_9431;
var G__9458 = (i__9417_9432 + (1));
seq__9414_9429 = G__9455;
chunk__9415_9430 = G__9456;
count__9416_9431 = G__9457;
i__9417_9432 = G__9458;
continue;
} else {
var temp__4425__auto___9459 = cljs.core.seq(seq__9414_9429);
if(temp__4425__auto___9459){
var seq__9414_9460__$1 = temp__4425__auto___9459;
if(cljs.core.chunked_seq_QMARK_(seq__9414_9460__$1)){
var c__5626__auto___9461 = cljs.core.chunk_first(seq__9414_9460__$1);
var G__9462 = cljs.core.chunk_rest(seq__9414_9460__$1);
var G__9463 = c__5626__auto___9461;
var G__9464 = cljs.core.count(c__5626__auto___9461);
var G__9465 = (0);
seq__9414_9429 = G__9462;
chunk__9415_9430 = G__9463;
count__9416_9431 = G__9464;
i__9417_9432 = G__9465;
continue;
} else {
var source_9466 = cljs.core.first(seq__9414_9460__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_9466) : tailrecursion.javelin.cell_QMARK_.call(null,source_9466)))){
source_9466.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9466.sinks,this$);

if((source_9466.rank > this$.rank)){
var seq__9422_9467 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9414_9429,chunk__9415_9430,count__9416_9431,i__9417_9432,source_9466,seq__9414_9460__$1,temp__4425__auto___9459,vec__9413,f,sources){
return (function (p1__9408_SHARP_){
return p1__9408_SHARP_.sinks;
});})(seq__9414_9429,chunk__9415_9430,count__9416_9431,i__9417_9432,source_9466,seq__9414_9460__$1,temp__4425__auto___9459,vec__9413,f,sources))
,source_9466));
var chunk__9423_9468 = null;
var count__9424_9469 = (0);
var i__9425_9470 = (0);
while(true){
if((i__9425_9470 < count__9424_9469)){
var dep_9471 = chunk__9423_9468.cljs$core$IIndexed$_nth$arity$2(null,i__9425_9470);
dep_9471.rank = tailrecursion.javelin.next_rank();

var G__9472 = seq__9422_9467;
var G__9473 = chunk__9423_9468;
var G__9474 = count__9424_9469;
var G__9475 = (i__9425_9470 + (1));
seq__9422_9467 = G__9472;
chunk__9423_9468 = G__9473;
count__9424_9469 = G__9474;
i__9425_9470 = G__9475;
continue;
} else {
var temp__4425__auto___9476__$1 = cljs.core.seq(seq__9422_9467);
if(temp__4425__auto___9476__$1){
var seq__9422_9477__$1 = temp__4425__auto___9476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9422_9477__$1)){
var c__5626__auto___9478 = cljs.core.chunk_first(seq__9422_9477__$1);
var G__9479 = cljs.core.chunk_rest(seq__9422_9477__$1);
var G__9480 = c__5626__auto___9478;
var G__9481 = cljs.core.count(c__5626__auto___9478);
var G__9482 = (0);
seq__9422_9467 = G__9479;
chunk__9423_9468 = G__9480;
count__9424_9469 = G__9481;
i__9425_9470 = G__9482;
continue;
} else {
var dep_9483 = cljs.core.first(seq__9422_9477__$1);
dep_9483.rank = tailrecursion.javelin.next_rank();

var G__9484 = cljs.core.next(seq__9422_9477__$1);
var G__9485 = null;
var G__9486 = (0);
var G__9487 = (0);
seq__9422_9467 = G__9484;
chunk__9423_9468 = G__9485;
count__9424_9469 = G__9486;
i__9425_9470 = G__9487;
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

var G__9488 = cljs.core.next(seq__9414_9460__$1);
var G__9489 = null;
var G__9490 = (0);
var G__9491 = (0);
seq__9414_9429 = G__9488;
chunk__9415_9430 = G__9489;
count__9416_9431 = G__9490;
i__9417_9432 = G__9491;
continue;
}
} else {
}
}
break;
}

var compute_9492 = ((function (vec__9413,f,sources){
return (function (p1__9409_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9409_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9409_SHARP_)));
});})(vec__9413,f,sources))
;
this$.thunk = ((function (compute_9492,vec__9413,f,sources){
return (function (){
return this$.state = compute_9492(this$.sources);
});})(compute_9492,vec__9413,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq9410){
var G__9411 = cljs.core.first(seq9410);
var seq9410__$1 = cljs.core.next(seq9410);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9411,seq9410__$1);
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
var G__9494 = this$__$1;
var G__9495 = (function (){var G__9496 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9496) : f.call(null,G__9496));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9494,G__9495) : cljs.core.reset_BANG_.call(null,G__9494,G__9495));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__9499 = this$__$1;
var G__9500 = (function (){var G__9501 = this$__$1.state;
var G__9502 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9501,G__9502) : f.call(null,G__9501,G__9502));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9499,G__9500) : cljs.core.reset_BANG_.call(null,G__9499,G__9500));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__9506 = this$__$1;
var G__9507 = (function (){var G__9508 = this$__$1.state;
var G__9509 = a;
var G__9510 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9508,G__9509,G__9510) : f.call(null,G__9508,G__9509,G__9510));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9506,G__9507) : cljs.core.reset_BANG_.call(null,G__9506,G__9507));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__9511 = this$__$1;
var G__9512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9511,G__9512) : cljs.core.reset_BANG_.call(null,G__9511,G__9512));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9513 = cljs.core.seq(self__.watches);
var chunk__9514 = null;
var count__9515 = (0);
var i__9516 = (0);
while(true){
if((i__9516 < count__9515)){
var vec__9517 = chunk__9514.cljs$core$IIndexed$_nth$arity$2(null,i__9516);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9517,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9517,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9519 = seq__9513;
var G__9520 = chunk__9514;
var G__9521 = count__9515;
var G__9522 = (i__9516 + (1));
seq__9513 = G__9519;
chunk__9514 = G__9520;
count__9515 = G__9521;
i__9516 = G__9522;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9513);
if(temp__4425__auto__){
var seq__9513__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9513__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__9513__$1);
var G__9523 = cljs.core.chunk_rest(seq__9513__$1);
var G__9524 = c__5626__auto__;
var G__9525 = cljs.core.count(c__5626__auto__);
var G__9526 = (0);
seq__9513 = G__9523;
chunk__9514 = G__9524;
count__9515 = G__9525;
i__9516 = G__9526;
continue;
} else {
var vec__9518 = cljs.core.first(seq__9513__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9518,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9518,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__9527 = cljs.core.next(seq__9513__$1);
var G__9528 = null;
var G__9529 = (0);
var G__9530 = (0);
seq__9513 = G__9527;
chunk__9514 = G__9528;
count__9515 = G__9529;
i__9516 = G__9530;
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

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5421__auto__,writer__5422__auto__,opt__5423__auto__){
return cljs.core._write(writer__5422__auto__,"tailrecursion.javelin/Cell");
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
if(cljs.core.truth_((function (){var and__4830__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4830__auto__)){
return c.thunk;
} else {
return and__4830__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4830__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4830__auto__)){
return c.update;
} else {
return and__4830__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4830__auto__ = tailrecursion.javelin.cell_QMARK_(c);
if(cljs.core.truth_(and__4830__auto__)){
return cljs.core.not(tailrecursion.javelin.formula_QMARK_(c));
} else {
return and__4830__auto__;
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
var G__9531__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__9531 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9532__i = 0, G__9532__a = new Array(arguments.length -  0);
while (G__9532__i < G__9532__a.length) {G__9532__a[G__9532__i] = arguments[G__9532__i + 0]; ++G__9532__i;}
  sources = new cljs.core.IndexedSeq(G__9532__a,0);
} 
return G__9531__delegate.call(this,sources);};
G__9531.cljs$lang$maxFixedArity = 0;
G__9531.cljs$lang$applyTo = (function (arglist__9533){
var sources = cljs.core.seq(arglist__9533);
return G__9531__delegate(sources);
});
G__9531.cljs$core$IFn$_invoke$arity$variadic = G__9531__delegate;
return G__9531;
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
var bind = (function (p1__9534_SHARP_){
var _STAR_tx_STAR_9538 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__9539 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9539) : cljs.core.atom.call(null,G__9539));
})();

try{return (p1__9534_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__9534_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__9534_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9538;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_9540 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_9540;
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
var args__5888__auto__ = [];
var len__5881__auto___9548 = arguments.length;
var i__5882__auto___9549 = (0);
while(true){
if((i__5882__auto___9549 < len__5881__auto___9548)){
args__5888__auto__.push((arguments[i__5882__auto___9549]));

var G__9550 = (i__5882__auto___9549 + (1));
i__5882__auto___9549 = G__9550;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__9547 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9547) : cljs.core.atom.call(null,G__9547));
})();
var tag_neq = ((function (olds){
return (function (p1__9541_SHARP_,p2__9542_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9541_SHARP_,p2__9542_SHARP_),p2__9542_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9544_SHARP_,p2__9543_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9544_SHARP_,p2__9543_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9551__delegate = function (rest__9545_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__9545_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__9545_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__9545_SHARP_));

return news;
};
var G__9551 = function (var_args){
var rest__9545_SHARP_ = null;
if (arguments.length > 0) {
var G__9552__i = 0, G__9552__a = new Array(arguments.length -  0);
while (G__9552__i < G__9552__a.length) {G__9552__a[G__9552__i] = arguments[G__9552__i + 0]; ++G__9552__i;}
  rest__9545_SHARP_ = new cljs.core.IndexedSeq(G__9552__a,0);
} 
return G__9551__delegate.call(this,rest__9545_SHARP_);};
G__9551.cljs$lang$maxFixedArity = 0;
G__9551.cljs$lang$applyTo = (function (arglist__9553){
var rest__9545_SHARP_ = cljs.core.seq(arglist__9553);
return G__9551__delegate(rest__9545_SHARP_);
});
G__9551.cljs$core$IFn$_invoke$arity$variadic = G__9551__delegate;
return G__9551;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq9546){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9546));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9554_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9554_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9555_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9555_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9562_9568 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__9563_9569 = null;
var count__9564_9570 = (0);
var i__9565_9571 = (0);
while(true){
if((i__9565_9571 < count__9564_9570)){
var i_9572 = chunk__9563_9569.cljs$core$IIndexed$_nth$arity$2(null,i__9565_9571);
var G__9566_9573 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9572) : ith_item__$1.call(null,i_9572));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9566_9573) : f__$1.call(null,G__9566_9573));

var G__9574 = seq__9562_9568;
var G__9575 = chunk__9563_9569;
var G__9576 = count__9564_9570;
var G__9577 = (i__9565_9571 + (1));
seq__9562_9568 = G__9574;
chunk__9563_9569 = G__9575;
count__9564_9570 = G__9576;
i__9565_9571 = G__9577;
continue;
} else {
var temp__4425__auto___9578 = cljs.core.seq(seq__9562_9568);
if(temp__4425__auto___9578){
var seq__9562_9579__$1 = temp__4425__auto___9578;
if(cljs.core.chunked_seq_QMARK_(seq__9562_9579__$1)){
var c__5626__auto___9580 = cljs.core.chunk_first(seq__9562_9579__$1);
var G__9581 = cljs.core.chunk_rest(seq__9562_9579__$1);
var G__9582 = c__5626__auto___9580;
var G__9583 = cljs.core.count(c__5626__auto___9580);
var G__9584 = (0);
seq__9562_9568 = G__9581;
chunk__9563_9569 = G__9582;
count__9564_9570 = G__9583;
i__9565_9571 = G__9584;
continue;
} else {
var i_9585 = cljs.core.first(seq__9562_9579__$1);
var G__9567_9586 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9585) : ith_item__$1.call(null,i_9585));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__9567_9586) : f__$1.call(null,G__9567_9586));

var G__9587 = cljs.core.next(seq__9562_9579__$1);
var G__9588 = null;
var G__9589 = (0);
var G__9590 = (0);
seq__9562_9568 = G__9587;
chunk__9563_9569 = G__9588;
count__9564_9570 = G__9589;
i__9565_9571 = G__9590;
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
