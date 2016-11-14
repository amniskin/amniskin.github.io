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

var G__8338 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8336_SHARP_,p2__8337_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8336_SHARP_,p2__8337_SHARP_,p2__8337_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8338;
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
}catch (e8340){if((e8340 instanceof Error)){
var _ = e8340;
return null;
} else {
throw e8340;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__8343 = c;
tailrecursion.javelin.add_sync_BANG_(G__8343);

return G__8343;
} else {
var G__8344 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__8344));

return G__8344;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___8353 = arguments.length;
var i__5882__auto___8354 = (0);
while(true){
if((i__5882__auto___8354 < len__5881__auto___8353)){
args__5888__auto__.push((arguments[i__5882__auto___8354]));

var G__8355 = (i__5882__auto___8354 + (1));
i__5882__auto___8354 = G__8355;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8347){
var vec__8348 = p__8347;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8348,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8349 = cljs.core.seq(srcs);
var chunk__8350 = null;
var count__8351 = (0);
var i__8352 = (0);
while(true){
if((i__8352 < count__8351)){
var src = chunk__8350.cljs$core$IIndexed$_nth$arity$2(null,i__8352);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__8356 = seq__8349;
var G__8357 = chunk__8350;
var G__8358 = count__8351;
var G__8359 = (i__8352 + (1));
seq__8349 = G__8356;
chunk__8350 = G__8357;
count__8351 = G__8358;
i__8352 = G__8359;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8349);
if(temp__4425__auto__){
var seq__8349__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8349__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8349__$1);
var G__8360 = cljs.core.chunk_rest(seq__8349__$1);
var G__8361 = c__5626__auto__;
var G__8362 = cljs.core.count(c__5626__auto__);
var G__8363 = (0);
seq__8349 = G__8360;
chunk__8350 = G__8361;
count__8351 = G__8362;
i__8352 = G__8363;
continue;
} else {
var src = cljs.core.first(seq__8349__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__8364 = cljs.core.next(seq__8349__$1);
var G__8365 = null;
var G__8366 = (0);
var G__8367 = (0);
seq__8349 = G__8364;
chunk__8350 = G__8365;
count__8351 = G__8366;
i__8352 = G__8367;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8345){
var G__8346 = cljs.core.first(seq8345);
var seq8345__$1 = cljs.core.next(seq8345);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8346,seq8345__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___8386 = arguments.length;
var i__5882__auto___8387 = (0);
while(true){
if((i__5882__auto___8387 < len__5881__auto___8386)){
args__5888__auto__.push((arguments[i__5882__auto___8387]));

var G__8388 = (i__5882__auto___8387 + (1));
i__5882__auto___8387 = G__8388;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8372){
var vec__8373 = p__8372;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8373,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8373,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__8374_8389 = cljs.core.seq(this$.sources);
var chunk__8375_8390 = null;
var count__8376_8391 = (0);
var i__8377_8392 = (0);
while(true){
if((i__8377_8392 < count__8376_8391)){
var source_8393 = chunk__8375_8390.cljs$core$IIndexed$_nth$arity$2(null,i__8377_8392);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_8393) : tailrecursion.javelin.cell_QMARK_.call(null,source_8393)))){
source_8393.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_8393.sinks,this$);

if((source_8393.rank > this$.rank)){
var seq__8378_8394 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__8374_8389,chunk__8375_8390,count__8376_8391,i__8377_8392,source_8393,vec__8373,f,sources){
return (function (p1__8368_SHARP_){
return p1__8368_SHARP_.sinks;
});})(seq__8374_8389,chunk__8375_8390,count__8376_8391,i__8377_8392,source_8393,vec__8373,f,sources))
,source_8393));
var chunk__8379_8395 = null;
var count__8380_8396 = (0);
var i__8381_8397 = (0);
while(true){
if((i__8381_8397 < count__8380_8396)){
var dep_8398 = chunk__8379_8395.cljs$core$IIndexed$_nth$arity$2(null,i__8381_8397);
dep_8398.rank = tailrecursion.javelin.next_rank();

var G__8399 = seq__8378_8394;
var G__8400 = chunk__8379_8395;
var G__8401 = count__8380_8396;
var G__8402 = (i__8381_8397 + (1));
seq__8378_8394 = G__8399;
chunk__8379_8395 = G__8400;
count__8380_8396 = G__8401;
i__8381_8397 = G__8402;
continue;
} else {
var temp__4425__auto___8403 = cljs.core.seq(seq__8378_8394);
if(temp__4425__auto___8403){
var seq__8378_8404__$1 = temp__4425__auto___8403;
if(cljs.core.chunked_seq_QMARK_(seq__8378_8404__$1)){
var c__5626__auto___8405 = cljs.core.chunk_first(seq__8378_8404__$1);
var G__8406 = cljs.core.chunk_rest(seq__8378_8404__$1);
var G__8407 = c__5626__auto___8405;
var G__8408 = cljs.core.count(c__5626__auto___8405);
var G__8409 = (0);
seq__8378_8394 = G__8406;
chunk__8379_8395 = G__8407;
count__8380_8396 = G__8408;
i__8381_8397 = G__8409;
continue;
} else {
var dep_8410 = cljs.core.first(seq__8378_8404__$1);
dep_8410.rank = tailrecursion.javelin.next_rank();

var G__8411 = cljs.core.next(seq__8378_8404__$1);
var G__8412 = null;
var G__8413 = (0);
var G__8414 = (0);
seq__8378_8394 = G__8411;
chunk__8379_8395 = G__8412;
count__8380_8396 = G__8413;
i__8381_8397 = G__8414;
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

var G__8415 = seq__8374_8389;
var G__8416 = chunk__8375_8390;
var G__8417 = count__8376_8391;
var G__8418 = (i__8377_8392 + (1));
seq__8374_8389 = G__8415;
chunk__8375_8390 = G__8416;
count__8376_8391 = G__8417;
i__8377_8392 = G__8418;
continue;
} else {
var temp__4425__auto___8419 = cljs.core.seq(seq__8374_8389);
if(temp__4425__auto___8419){
var seq__8374_8420__$1 = temp__4425__auto___8419;
if(cljs.core.chunked_seq_QMARK_(seq__8374_8420__$1)){
var c__5626__auto___8421 = cljs.core.chunk_first(seq__8374_8420__$1);
var G__8422 = cljs.core.chunk_rest(seq__8374_8420__$1);
var G__8423 = c__5626__auto___8421;
var G__8424 = cljs.core.count(c__5626__auto___8421);
var G__8425 = (0);
seq__8374_8389 = G__8422;
chunk__8375_8390 = G__8423;
count__8376_8391 = G__8424;
i__8377_8392 = G__8425;
continue;
} else {
var source_8426 = cljs.core.first(seq__8374_8420__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_8426) : tailrecursion.javelin.cell_QMARK_.call(null,source_8426)))){
source_8426.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_8426.sinks,this$);

if((source_8426.rank > this$.rank)){
var seq__8382_8427 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__8374_8389,chunk__8375_8390,count__8376_8391,i__8377_8392,source_8426,seq__8374_8420__$1,temp__4425__auto___8419,vec__8373,f,sources){
return (function (p1__8368_SHARP_){
return p1__8368_SHARP_.sinks;
});})(seq__8374_8389,chunk__8375_8390,count__8376_8391,i__8377_8392,source_8426,seq__8374_8420__$1,temp__4425__auto___8419,vec__8373,f,sources))
,source_8426));
var chunk__8383_8428 = null;
var count__8384_8429 = (0);
var i__8385_8430 = (0);
while(true){
if((i__8385_8430 < count__8384_8429)){
var dep_8431 = chunk__8383_8428.cljs$core$IIndexed$_nth$arity$2(null,i__8385_8430);
dep_8431.rank = tailrecursion.javelin.next_rank();

var G__8432 = seq__8382_8427;
var G__8433 = chunk__8383_8428;
var G__8434 = count__8384_8429;
var G__8435 = (i__8385_8430 + (1));
seq__8382_8427 = G__8432;
chunk__8383_8428 = G__8433;
count__8384_8429 = G__8434;
i__8385_8430 = G__8435;
continue;
} else {
var temp__4425__auto___8436__$1 = cljs.core.seq(seq__8382_8427);
if(temp__4425__auto___8436__$1){
var seq__8382_8437__$1 = temp__4425__auto___8436__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8382_8437__$1)){
var c__5626__auto___8438 = cljs.core.chunk_first(seq__8382_8437__$1);
var G__8439 = cljs.core.chunk_rest(seq__8382_8437__$1);
var G__8440 = c__5626__auto___8438;
var G__8441 = cljs.core.count(c__5626__auto___8438);
var G__8442 = (0);
seq__8382_8427 = G__8439;
chunk__8383_8428 = G__8440;
count__8384_8429 = G__8441;
i__8385_8430 = G__8442;
continue;
} else {
var dep_8443 = cljs.core.first(seq__8382_8437__$1);
dep_8443.rank = tailrecursion.javelin.next_rank();

var G__8444 = cljs.core.next(seq__8382_8437__$1);
var G__8445 = null;
var G__8446 = (0);
var G__8447 = (0);
seq__8382_8427 = G__8444;
chunk__8383_8428 = G__8445;
count__8384_8429 = G__8446;
i__8385_8430 = G__8447;
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

var G__8448 = cljs.core.next(seq__8374_8420__$1);
var G__8449 = null;
var G__8450 = (0);
var G__8451 = (0);
seq__8374_8389 = G__8448;
chunk__8375_8390 = G__8449;
count__8376_8391 = G__8450;
i__8377_8392 = G__8451;
continue;
}
} else {
}
}
break;
}

var compute_8452 = ((function (vec__8373,f,sources){
return (function (p1__8369_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__8369_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__8369_SHARP_)));
});})(vec__8373,f,sources))
;
this$.thunk = ((function (compute_8452,vec__8373,f,sources){
return (function (){
return this$.state = compute_8452(this$.sources);
});})(compute_8452,vec__8373,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq8370){
var G__8371 = cljs.core.first(seq8370);
var seq8370__$1 = cljs.core.next(seq8370);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8371,seq8370__$1);
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
var G__8454 = this$__$1;
var G__8455 = (function (){var G__8456 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8456) : f.call(null,G__8456));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8454,G__8455) : cljs.core.reset_BANG_.call(null,G__8454,G__8455));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__8459 = this$__$1;
var G__8460 = (function (){var G__8461 = this$__$1.state;
var G__8462 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8461,G__8462) : f.call(null,G__8461,G__8462));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8459,G__8460) : cljs.core.reset_BANG_.call(null,G__8459,G__8460));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__8466 = this$__$1;
var G__8467 = (function (){var G__8468 = this$__$1.state;
var G__8469 = a;
var G__8470 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8468,G__8469,G__8470) : f.call(null,G__8468,G__8469,G__8470));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8466,G__8467) : cljs.core.reset_BANG_.call(null,G__8466,G__8467));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__8471 = this$__$1;
var G__8472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__8471,G__8472) : cljs.core.reset_BANG_.call(null,G__8471,G__8472));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8473 = cljs.core.seq(self__.watches);
var chunk__8474 = null;
var count__8475 = (0);
var i__8476 = (0);
while(true){
if((i__8476 < count__8475)){
var vec__8477 = chunk__8474.cljs$core$IIndexed$_nth$arity$2(null,i__8476);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8477,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8477,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__8479 = seq__8473;
var G__8480 = chunk__8474;
var G__8481 = count__8475;
var G__8482 = (i__8476 + (1));
seq__8473 = G__8479;
chunk__8474 = G__8480;
count__8475 = G__8481;
i__8476 = G__8482;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8473);
if(temp__4425__auto__){
var seq__8473__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8473__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8473__$1);
var G__8483 = cljs.core.chunk_rest(seq__8473__$1);
var G__8484 = c__5626__auto__;
var G__8485 = cljs.core.count(c__5626__auto__);
var G__8486 = (0);
seq__8473 = G__8483;
chunk__8474 = G__8484;
count__8475 = G__8485;
i__8476 = G__8486;
continue;
} else {
var vec__8478 = cljs.core.first(seq__8473__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8478,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8478,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__8487 = cljs.core.next(seq__8473__$1);
var G__8488 = null;
var G__8489 = (0);
var G__8490 = (0);
seq__8473 = G__8487;
chunk__8474 = G__8488;
count__8475 = G__8489;
i__8476 = G__8490;
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
var G__8491__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__8491 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8492__i = 0, G__8492__a = new Array(arguments.length -  0);
while (G__8492__i < G__8492__a.length) {G__8492__a[G__8492__i] = arguments[G__8492__i + 0]; ++G__8492__i;}
  sources = new cljs.core.IndexedSeq(G__8492__a,0);
} 
return G__8491__delegate.call(this,sources);};
G__8491.cljs$lang$maxFixedArity = 0;
G__8491.cljs$lang$applyTo = (function (arglist__8493){
var sources = cljs.core.seq(arglist__8493);
return G__8491__delegate(sources);
});
G__8491.cljs$core$IFn$_invoke$arity$variadic = G__8491__delegate;
return G__8491;
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
var bind = (function (p1__8494_SHARP_){
var _STAR_tx_STAR_8498 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__8499 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8499) : cljs.core.atom.call(null,G__8499));
})();

try{return (p1__8494_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__8494_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__8494_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8498;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_8500 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8500;
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
var len__5881__auto___8508 = arguments.length;
var i__5882__auto___8509 = (0);
while(true){
if((i__5882__auto___8509 < len__5881__auto___8508)){
args__5888__auto__.push((arguments[i__5882__auto___8509]));

var G__8510 = (i__5882__auto___8509 + (1));
i__5882__auto___8509 = G__8510;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__8507 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8507) : cljs.core.atom.call(null,G__8507));
})();
var tag_neq = ((function (olds){
return (function (p1__8501_SHARP_,p2__8502_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__8501_SHARP_,p2__8502_SHARP_),p2__8502_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8504_SHARP_,p2__8503_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__8504_SHARP_,p2__8503_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8511__delegate = function (rest__8505_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__8505_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__8505_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__8505_SHARP_));

return news;
};
var G__8511 = function (var_args){
var rest__8505_SHARP_ = null;
if (arguments.length > 0) {
var G__8512__i = 0, G__8512__a = new Array(arguments.length -  0);
while (G__8512__i < G__8512__a.length) {G__8512__a[G__8512__i] = arguments[G__8512__i + 0]; ++G__8512__i;}
  rest__8505_SHARP_ = new cljs.core.IndexedSeq(G__8512__a,0);
} 
return G__8511__delegate.call(this,rest__8505_SHARP_);};
G__8511.cljs$lang$maxFixedArity = 0;
G__8511.cljs$lang$applyTo = (function (arglist__8513){
var rest__8505_SHARP_ = cljs.core.seq(arglist__8513);
return G__8511__delegate(rest__8505_SHARP_);
});
G__8511.cljs$core$IFn$_invoke$arity$variadic = G__8511__delegate;
return G__8511;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq8506){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8506));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__8514_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__8514_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8515_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__8515_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8522_8528 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__8523_8529 = null;
var count__8524_8530 = (0);
var i__8525_8531 = (0);
while(true){
if((i__8525_8531 < count__8524_8530)){
var i_8532 = chunk__8523_8529.cljs$core$IIndexed$_nth$arity$2(null,i__8525_8531);
var G__8526_8533 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_8532) : ith_item__$1.call(null,i_8532));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__8526_8533) : f__$1.call(null,G__8526_8533));

var G__8534 = seq__8522_8528;
var G__8535 = chunk__8523_8529;
var G__8536 = count__8524_8530;
var G__8537 = (i__8525_8531 + (1));
seq__8522_8528 = G__8534;
chunk__8523_8529 = G__8535;
count__8524_8530 = G__8536;
i__8525_8531 = G__8537;
continue;
} else {
var temp__4425__auto___8538 = cljs.core.seq(seq__8522_8528);
if(temp__4425__auto___8538){
var seq__8522_8539__$1 = temp__4425__auto___8538;
if(cljs.core.chunked_seq_QMARK_(seq__8522_8539__$1)){
var c__5626__auto___8540 = cljs.core.chunk_first(seq__8522_8539__$1);
var G__8541 = cljs.core.chunk_rest(seq__8522_8539__$1);
var G__8542 = c__5626__auto___8540;
var G__8543 = cljs.core.count(c__5626__auto___8540);
var G__8544 = (0);
seq__8522_8528 = G__8541;
chunk__8523_8529 = G__8542;
count__8524_8530 = G__8543;
i__8525_8531 = G__8544;
continue;
} else {
var i_8545 = cljs.core.first(seq__8522_8539__$1);
var G__8527_8546 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_8545) : ith_item__$1.call(null,i_8545));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__8527_8546) : f__$1.call(null,G__8527_8546));

var G__8547 = cljs.core.next(seq__8522_8539__$1);
var G__8548 = null;
var G__8549 = (0);
var G__8550 = (0);
seq__8522_8528 = G__8547;
chunk__8523_8529 = G__8548;
count__8524_8530 = G__8549;
i__8525_8531 = G__8550;
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
