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

var G__14321 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__14319_SHARP_,p2__14320_SHARP_){
return cljs.core.assoc.call(null,p1__14319_SHARP_,p2__14320_SHARP_,p2__14320_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__14321;
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
}catch (e14323){if((e14323 instanceof Error)){
var _ = e14323;
return null;
} else {
throw e14323;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__14326 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__14326);

return G__14326;
} else {
var G__14327 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__14327));

return G__14327;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___14336 = arguments.length;
var i__6062__auto___14337 = (0);
while(true){
if((i__6062__auto___14337 < len__6061__auto___14336)){
args__6068__auto__.push((arguments[i__6062__auto___14337]));

var G__14338 = (i__6062__auto___14337 + (1));
i__6062__auto___14337 = G__14338;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__14330){
var vec__14331 = p__14330;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__14331,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__14332 = cljs.core.seq.call(null,srcs);
var chunk__14333 = null;
var count__14334 = (0);
var i__14335 = (0);
while(true){
if((i__14335 < count__14334)){
var src = cljs.core._nth.call(null,chunk__14333,i__14335);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__14339 = seq__14332;
var G__14340 = chunk__14333;
var G__14341 = count__14334;
var G__14342 = (i__14335 + (1));
seq__14332 = G__14339;
chunk__14333 = G__14340;
count__14334 = G__14341;
i__14335 = G__14342;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14332);
if(temp__4425__auto__){
var seq__14332__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14332__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14332__$1);
var G__14343 = cljs.core.chunk_rest.call(null,seq__14332__$1);
var G__14344 = c__5806__auto__;
var G__14345 = cljs.core.count.call(null,c__5806__auto__);
var G__14346 = (0);
seq__14332 = G__14343;
chunk__14333 = G__14344;
count__14334 = G__14345;
i__14335 = G__14346;
continue;
} else {
var src = cljs.core.first.call(null,seq__14332__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__14347 = cljs.core.next.call(null,seq__14332__$1);
var G__14348 = null;
var G__14349 = (0);
var G__14350 = (0);
seq__14332 = G__14347;
chunk__14333 = G__14348;
count__14334 = G__14349;
i__14335 = G__14350;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq14328){
var G__14329 = cljs.core.first.call(null,seq14328);
var seq14328__$1 = cljs.core.next.call(null,seq14328);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14329,seq14328__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___14369 = arguments.length;
var i__6062__auto___14370 = (0);
while(true){
if((i__6062__auto___14370 < len__6061__auto___14369)){
args__6068__auto__.push((arguments[i__6062__auto___14370]));

var G__14371 = (i__6062__auto___14370 + (1));
i__6062__auto___14370 = G__14371;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__14355){
var vec__14356 = p__14355;
var f = cljs.core.nth.call(null,vec__14356,(0),null);
var sources = cljs.core.nth.call(null,vec__14356,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__14357_14372 = cljs.core.seq.call(null,this$.sources);
var chunk__14358_14373 = null;
var count__14359_14374 = (0);
var i__14360_14375 = (0);
while(true){
if((i__14360_14375 < count__14359_14374)){
var source_14376 = cljs.core._nth.call(null,chunk__14358_14373,i__14360_14375);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_14376))){
source_14376.sinks = cljs.core.conj.call(null,source_14376.sinks,this$);

if((source_14376.rank > this$.rank)){
var seq__14361_14377 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__14357_14372,chunk__14358_14373,count__14359_14374,i__14360_14375,source_14376,vec__14356,f,sources){
return (function (p1__14351_SHARP_){
return p1__14351_SHARP_.sinks;
});})(seq__14357_14372,chunk__14358_14373,count__14359_14374,i__14360_14375,source_14376,vec__14356,f,sources))
,source_14376));
var chunk__14362_14378 = null;
var count__14363_14379 = (0);
var i__14364_14380 = (0);
while(true){
if((i__14364_14380 < count__14363_14379)){
var dep_14381 = cljs.core._nth.call(null,chunk__14362_14378,i__14364_14380);
dep_14381.rank = tailrecursion.javelin.next_rank.call(null);

var G__14382 = seq__14361_14377;
var G__14383 = chunk__14362_14378;
var G__14384 = count__14363_14379;
var G__14385 = (i__14364_14380 + (1));
seq__14361_14377 = G__14382;
chunk__14362_14378 = G__14383;
count__14363_14379 = G__14384;
i__14364_14380 = G__14385;
continue;
} else {
var temp__4425__auto___14386 = cljs.core.seq.call(null,seq__14361_14377);
if(temp__4425__auto___14386){
var seq__14361_14387__$1 = temp__4425__auto___14386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14361_14387__$1)){
var c__5806__auto___14388 = cljs.core.chunk_first.call(null,seq__14361_14387__$1);
var G__14389 = cljs.core.chunk_rest.call(null,seq__14361_14387__$1);
var G__14390 = c__5806__auto___14388;
var G__14391 = cljs.core.count.call(null,c__5806__auto___14388);
var G__14392 = (0);
seq__14361_14377 = G__14389;
chunk__14362_14378 = G__14390;
count__14363_14379 = G__14391;
i__14364_14380 = G__14392;
continue;
} else {
var dep_14393 = cljs.core.first.call(null,seq__14361_14387__$1);
dep_14393.rank = tailrecursion.javelin.next_rank.call(null);

var G__14394 = cljs.core.next.call(null,seq__14361_14387__$1);
var G__14395 = null;
var G__14396 = (0);
var G__14397 = (0);
seq__14361_14377 = G__14394;
chunk__14362_14378 = G__14395;
count__14363_14379 = G__14396;
i__14364_14380 = G__14397;
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

var G__14398 = seq__14357_14372;
var G__14399 = chunk__14358_14373;
var G__14400 = count__14359_14374;
var G__14401 = (i__14360_14375 + (1));
seq__14357_14372 = G__14398;
chunk__14358_14373 = G__14399;
count__14359_14374 = G__14400;
i__14360_14375 = G__14401;
continue;
} else {
var temp__4425__auto___14402 = cljs.core.seq.call(null,seq__14357_14372);
if(temp__4425__auto___14402){
var seq__14357_14403__$1 = temp__4425__auto___14402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14357_14403__$1)){
var c__5806__auto___14404 = cljs.core.chunk_first.call(null,seq__14357_14403__$1);
var G__14405 = cljs.core.chunk_rest.call(null,seq__14357_14403__$1);
var G__14406 = c__5806__auto___14404;
var G__14407 = cljs.core.count.call(null,c__5806__auto___14404);
var G__14408 = (0);
seq__14357_14372 = G__14405;
chunk__14358_14373 = G__14406;
count__14359_14374 = G__14407;
i__14360_14375 = G__14408;
continue;
} else {
var source_14409 = cljs.core.first.call(null,seq__14357_14403__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_14409))){
source_14409.sinks = cljs.core.conj.call(null,source_14409.sinks,this$);

if((source_14409.rank > this$.rank)){
var seq__14365_14410 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__14357_14372,chunk__14358_14373,count__14359_14374,i__14360_14375,source_14409,seq__14357_14403__$1,temp__4425__auto___14402,vec__14356,f,sources){
return (function (p1__14351_SHARP_){
return p1__14351_SHARP_.sinks;
});})(seq__14357_14372,chunk__14358_14373,count__14359_14374,i__14360_14375,source_14409,seq__14357_14403__$1,temp__4425__auto___14402,vec__14356,f,sources))
,source_14409));
var chunk__14366_14411 = null;
var count__14367_14412 = (0);
var i__14368_14413 = (0);
while(true){
if((i__14368_14413 < count__14367_14412)){
var dep_14414 = cljs.core._nth.call(null,chunk__14366_14411,i__14368_14413);
dep_14414.rank = tailrecursion.javelin.next_rank.call(null);

var G__14415 = seq__14365_14410;
var G__14416 = chunk__14366_14411;
var G__14417 = count__14367_14412;
var G__14418 = (i__14368_14413 + (1));
seq__14365_14410 = G__14415;
chunk__14366_14411 = G__14416;
count__14367_14412 = G__14417;
i__14368_14413 = G__14418;
continue;
} else {
var temp__4425__auto___14419__$1 = cljs.core.seq.call(null,seq__14365_14410);
if(temp__4425__auto___14419__$1){
var seq__14365_14420__$1 = temp__4425__auto___14419__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14365_14420__$1)){
var c__5806__auto___14421 = cljs.core.chunk_first.call(null,seq__14365_14420__$1);
var G__14422 = cljs.core.chunk_rest.call(null,seq__14365_14420__$1);
var G__14423 = c__5806__auto___14421;
var G__14424 = cljs.core.count.call(null,c__5806__auto___14421);
var G__14425 = (0);
seq__14365_14410 = G__14422;
chunk__14366_14411 = G__14423;
count__14367_14412 = G__14424;
i__14368_14413 = G__14425;
continue;
} else {
var dep_14426 = cljs.core.first.call(null,seq__14365_14420__$1);
dep_14426.rank = tailrecursion.javelin.next_rank.call(null);

var G__14427 = cljs.core.next.call(null,seq__14365_14420__$1);
var G__14428 = null;
var G__14429 = (0);
var G__14430 = (0);
seq__14365_14410 = G__14427;
chunk__14366_14411 = G__14428;
count__14367_14412 = G__14429;
i__14368_14413 = G__14430;
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

var G__14431 = cljs.core.next.call(null,seq__14357_14403__$1);
var G__14432 = null;
var G__14433 = (0);
var G__14434 = (0);
seq__14357_14372 = G__14431;
chunk__14358_14373 = G__14432;
count__14359_14374 = G__14433;
i__14360_14375 = G__14434;
continue;
}
} else {
}
}
break;
}

var compute_14435 = ((function (vec__14356,f,sources){
return (function (p1__14352_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__14352_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__14352_SHARP_)));
});})(vec__14356,f,sources))
;
this$.thunk = ((function (compute_14435,vec__14356,f,sources){
return (function (){
return this$.state = compute_14435.call(null,this$.sources);
});})(compute_14435,vec__14356,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq14353){
var G__14354 = cljs.core.first.call(null,seq14353);
var seq14353__$1 = cljs.core.next.call(null,seq14353);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14354,seq14353__$1);
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
var seq__14436 = cljs.core.seq.call(null,self__.watches);
var chunk__14437 = null;
var count__14438 = (0);
var i__14439 = (0);
while(true){
if((i__14439 < count__14438)){
var vec__14440 = cljs.core._nth.call(null,chunk__14437,i__14439);
var key = cljs.core.nth.call(null,vec__14440,(0),null);
var f = cljs.core.nth.call(null,vec__14440,(1),null);
f.call(null,key,this$__$1,o,n);

var G__14442 = seq__14436;
var G__14443 = chunk__14437;
var G__14444 = count__14438;
var G__14445 = (i__14439 + (1));
seq__14436 = G__14442;
chunk__14437 = G__14443;
count__14438 = G__14444;
i__14439 = G__14445;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14436);
if(temp__4425__auto__){
var seq__14436__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14436__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14436__$1);
var G__14446 = cljs.core.chunk_rest.call(null,seq__14436__$1);
var G__14447 = c__5806__auto__;
var G__14448 = cljs.core.count.call(null,c__5806__auto__);
var G__14449 = (0);
seq__14436 = G__14446;
chunk__14437 = G__14447;
count__14438 = G__14448;
i__14439 = G__14449;
continue;
} else {
var vec__14441 = cljs.core.first.call(null,seq__14436__$1);
var key = cljs.core.nth.call(null,vec__14441,(0),null);
var f = cljs.core.nth.call(null,vec__14441,(1),null);
f.call(null,key,this$__$1,o,n);

var G__14450 = cljs.core.next.call(null,seq__14436__$1);
var G__14451 = null;
var G__14452 = (0);
var G__14453 = (0);
seq__14436 = G__14450;
chunk__14437 = G__14451;
count__14438 = G__14452;
i__14439 = G__14453;
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
var G__14454__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__14454 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__14455__i = 0, G__14455__a = new Array(arguments.length -  0);
while (G__14455__i < G__14455__a.length) {G__14455__a[G__14455__i] = arguments[G__14455__i + 0]; ++G__14455__i;}
  sources = new cljs.core.IndexedSeq(G__14455__a,0);
} 
return G__14454__delegate.call(this,sources);};
G__14454.cljs$lang$maxFixedArity = 0;
G__14454.cljs$lang$applyTo = (function (arglist__14456){
var sources = cljs.core.seq(arglist__14456);
return G__14454__delegate(sources);
});
G__14454.cljs$core$IFn$_invoke$arity$variadic = G__14454__delegate;
return G__14454;
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
var bind = (function (p1__14457_SHARP_){
var _STAR_tx_STAR_14460 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__14457_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_14460;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_14461 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_14461;
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
var len__6061__auto___14468 = arguments.length;
var i__6062__auto___14469 = (0);
while(true){
if((i__6062__auto___14469 < len__6061__auto___14468)){
args__6068__auto__.push((arguments[i__6062__auto___14469]));

var G__14470 = (i__6062__auto___14469 + (1));
i__6062__auto___14469 = G__14470;
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
return (function (p1__14462_SHARP_,p2__14463_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__14462_SHARP_,p2__14463_SHARP_),p2__14463_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__14465_SHARP_,p2__14464_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__14465_SHARP_,p2__14464_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__14471__delegate = function (rest__14466_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__14466_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__14466_SHARP_);

return news;
};
var G__14471 = function (var_args){
var rest__14466_SHARP_ = null;
if (arguments.length > 0) {
var G__14472__i = 0, G__14472__a = new Array(arguments.length -  0);
while (G__14472__i < G__14472__a.length) {G__14472__a[G__14472__i] = arguments[G__14472__i + 0]; ++G__14472__i;}
  rest__14466_SHARP_ = new cljs.core.IndexedSeq(G__14472__a,0);
} 
return G__14471__delegate.call(this,rest__14466_SHARP_);};
G__14471.cljs$lang$maxFixedArity = 0;
G__14471.cljs$lang$applyTo = (function (arglist__14473){
var rest__14466_SHARP_ = cljs.core.seq(arglist__14473);
return G__14471__delegate(rest__14466_SHARP_);
});
G__14471.cljs$core$IFn$_invoke$arity$variadic = G__14471__delegate;
return G__14471;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq14467){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14467));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__14474_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__14474_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__14475_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__14475_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__14480_14484 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__14481_14485 = null;
var count__14482_14486 = (0);
var i__14483_14487 = (0);
while(true){
if((i__14483_14487 < count__14482_14486)){
var i_14488 = cljs.core._nth.call(null,chunk__14481_14485,i__14483_14487);
f__$1.call(null,ith_item__$1.call(null,i_14488));

var G__14489 = seq__14480_14484;
var G__14490 = chunk__14481_14485;
var G__14491 = count__14482_14486;
var G__14492 = (i__14483_14487 + (1));
seq__14480_14484 = G__14489;
chunk__14481_14485 = G__14490;
count__14482_14486 = G__14491;
i__14483_14487 = G__14492;
continue;
} else {
var temp__4425__auto___14493 = cljs.core.seq.call(null,seq__14480_14484);
if(temp__4425__auto___14493){
var seq__14480_14494__$1 = temp__4425__auto___14493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14480_14494__$1)){
var c__5806__auto___14495 = cljs.core.chunk_first.call(null,seq__14480_14494__$1);
var G__14496 = cljs.core.chunk_rest.call(null,seq__14480_14494__$1);
var G__14497 = c__5806__auto___14495;
var G__14498 = cljs.core.count.call(null,c__5806__auto___14495);
var G__14499 = (0);
seq__14480_14484 = G__14496;
chunk__14481_14485 = G__14497;
count__14482_14486 = G__14498;
i__14483_14487 = G__14499;
continue;
} else {
var i_14500 = cljs.core.first.call(null,seq__14480_14494__$1);
f__$1.call(null,ith_item__$1.call(null,i_14500));

var G__14501 = cljs.core.next.call(null,seq__14480_14494__$1);
var G__14502 = null;
var G__14503 = (0);
var G__14504 = (0);
seq__14480_14484 = G__14501;
chunk__14481_14485 = G__14502;
count__14482_14486 = G__14503;
i__14483_14487 = G__14504;
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