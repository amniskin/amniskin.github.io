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

var G__10214 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__10212_SHARP_,p2__10213_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10212_SHARP_,p2__10213_SHARP_,p2__10213_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__10214;
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
}catch (e10216){if((e10216 instanceof Error)){
var _ = e10216;
return null;
} else {
throw e10216;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__10219 = c;
tailrecursion.javelin.add_sync_BANG_(G__10219);

return G__10219;
} else {
var G__10220 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__10220));

return G__10220;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___10229 = arguments.length;
var i__5882__auto___10230 = (0);
while(true){
if((i__5882__auto___10230 < len__5881__auto___10229)){
args__5888__auto__.push((arguments[i__5882__auto___10230]));

var G__10231 = (i__5882__auto___10230 + (1));
i__5882__auto___10230 = G__10231;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10223){
var vec__10224 = p__10223;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10224,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__10225 = cljs.core.seq(srcs);
var chunk__10226 = null;
var count__10227 = (0);
var i__10228 = (0);
while(true){
if((i__10228 < count__10227)){
var src = chunk__10226.cljs$core$IIndexed$_nth$arity$2(null,i__10228);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10232 = seq__10225;
var G__10233 = chunk__10226;
var G__10234 = count__10227;
var G__10235 = (i__10228 + (1));
seq__10225 = G__10232;
chunk__10226 = G__10233;
count__10227 = G__10234;
i__10228 = G__10235;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10225);
if(temp__4425__auto__){
var seq__10225__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10225__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10225__$1);
var G__10236 = cljs.core.chunk_rest(seq__10225__$1);
var G__10237 = c__5626__auto__;
var G__10238 = cljs.core.count(c__5626__auto__);
var G__10239 = (0);
seq__10225 = G__10236;
chunk__10226 = G__10237;
count__10227 = G__10238;
i__10228 = G__10239;
continue;
} else {
var src = cljs.core.first(seq__10225__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__10240 = cljs.core.next(seq__10225__$1);
var G__10241 = null;
var G__10242 = (0);
var G__10243 = (0);
seq__10225 = G__10240;
chunk__10226 = G__10241;
count__10227 = G__10242;
i__10228 = G__10243;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq10221){
var G__10222 = cljs.core.first(seq10221);
var seq10221__$1 = cljs.core.next(seq10221);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10222,seq10221__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___10262 = arguments.length;
var i__5882__auto___10263 = (0);
while(true){
if((i__5882__auto___10263 < len__5881__auto___10262)){
args__5888__auto__.push((arguments[i__5882__auto___10263]));

var G__10264 = (i__5882__auto___10263 + (1));
i__5882__auto___10263 = G__10264;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__10248){
var vec__10249 = p__10248;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10249,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10249,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__10250_10265 = cljs.core.seq(this$.sources);
var chunk__10251_10266 = null;
var count__10252_10267 = (0);
var i__10253_10268 = (0);
while(true){
if((i__10253_10268 < count__10252_10267)){
var source_10269 = chunk__10251_10266.cljs$core$IIndexed$_nth$arity$2(null,i__10253_10268);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10269) : tailrecursion.javelin.cell_QMARK_.call(null,source_10269)))){
source_10269.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10269.sinks,this$);

if((source_10269.rank > this$.rank)){
var seq__10254_10270 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10250_10265,chunk__10251_10266,count__10252_10267,i__10253_10268,source_10269,vec__10249,f,sources){
return (function (p1__10244_SHARP_){
return p1__10244_SHARP_.sinks;
});})(seq__10250_10265,chunk__10251_10266,count__10252_10267,i__10253_10268,source_10269,vec__10249,f,sources))
,source_10269));
var chunk__10255_10271 = null;
var count__10256_10272 = (0);
var i__10257_10273 = (0);
while(true){
if((i__10257_10273 < count__10256_10272)){
var dep_10274 = chunk__10255_10271.cljs$core$IIndexed$_nth$arity$2(null,i__10257_10273);
dep_10274.rank = tailrecursion.javelin.next_rank();

var G__10275 = seq__10254_10270;
var G__10276 = chunk__10255_10271;
var G__10277 = count__10256_10272;
var G__10278 = (i__10257_10273 + (1));
seq__10254_10270 = G__10275;
chunk__10255_10271 = G__10276;
count__10256_10272 = G__10277;
i__10257_10273 = G__10278;
continue;
} else {
var temp__4425__auto___10279 = cljs.core.seq(seq__10254_10270);
if(temp__4425__auto___10279){
var seq__10254_10280__$1 = temp__4425__auto___10279;
if(cljs.core.chunked_seq_QMARK_(seq__10254_10280__$1)){
var c__5626__auto___10281 = cljs.core.chunk_first(seq__10254_10280__$1);
var G__10282 = cljs.core.chunk_rest(seq__10254_10280__$1);
var G__10283 = c__5626__auto___10281;
var G__10284 = cljs.core.count(c__5626__auto___10281);
var G__10285 = (0);
seq__10254_10270 = G__10282;
chunk__10255_10271 = G__10283;
count__10256_10272 = G__10284;
i__10257_10273 = G__10285;
continue;
} else {
var dep_10286 = cljs.core.first(seq__10254_10280__$1);
dep_10286.rank = tailrecursion.javelin.next_rank();

var G__10287 = cljs.core.next(seq__10254_10280__$1);
var G__10288 = null;
var G__10289 = (0);
var G__10290 = (0);
seq__10254_10270 = G__10287;
chunk__10255_10271 = G__10288;
count__10256_10272 = G__10289;
i__10257_10273 = G__10290;
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

var G__10291 = seq__10250_10265;
var G__10292 = chunk__10251_10266;
var G__10293 = count__10252_10267;
var G__10294 = (i__10253_10268 + (1));
seq__10250_10265 = G__10291;
chunk__10251_10266 = G__10292;
count__10252_10267 = G__10293;
i__10253_10268 = G__10294;
continue;
} else {
var temp__4425__auto___10295 = cljs.core.seq(seq__10250_10265);
if(temp__4425__auto___10295){
var seq__10250_10296__$1 = temp__4425__auto___10295;
if(cljs.core.chunked_seq_QMARK_(seq__10250_10296__$1)){
var c__5626__auto___10297 = cljs.core.chunk_first(seq__10250_10296__$1);
var G__10298 = cljs.core.chunk_rest(seq__10250_10296__$1);
var G__10299 = c__5626__auto___10297;
var G__10300 = cljs.core.count(c__5626__auto___10297);
var G__10301 = (0);
seq__10250_10265 = G__10298;
chunk__10251_10266 = G__10299;
count__10252_10267 = G__10300;
i__10253_10268 = G__10301;
continue;
} else {
var source_10302 = cljs.core.first(seq__10250_10296__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_10302) : tailrecursion.javelin.cell_QMARK_.call(null,source_10302)))){
source_10302.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10302.sinks,this$);

if((source_10302.rank > this$.rank)){
var seq__10258_10303 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10250_10265,chunk__10251_10266,count__10252_10267,i__10253_10268,source_10302,seq__10250_10296__$1,temp__4425__auto___10295,vec__10249,f,sources){
return (function (p1__10244_SHARP_){
return p1__10244_SHARP_.sinks;
});})(seq__10250_10265,chunk__10251_10266,count__10252_10267,i__10253_10268,source_10302,seq__10250_10296__$1,temp__4425__auto___10295,vec__10249,f,sources))
,source_10302));
var chunk__10259_10304 = null;
var count__10260_10305 = (0);
var i__10261_10306 = (0);
while(true){
if((i__10261_10306 < count__10260_10305)){
var dep_10307 = chunk__10259_10304.cljs$core$IIndexed$_nth$arity$2(null,i__10261_10306);
dep_10307.rank = tailrecursion.javelin.next_rank();

var G__10308 = seq__10258_10303;
var G__10309 = chunk__10259_10304;
var G__10310 = count__10260_10305;
var G__10311 = (i__10261_10306 + (1));
seq__10258_10303 = G__10308;
chunk__10259_10304 = G__10309;
count__10260_10305 = G__10310;
i__10261_10306 = G__10311;
continue;
} else {
var temp__4425__auto___10312__$1 = cljs.core.seq(seq__10258_10303);
if(temp__4425__auto___10312__$1){
var seq__10258_10313__$1 = temp__4425__auto___10312__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10258_10313__$1)){
var c__5626__auto___10314 = cljs.core.chunk_first(seq__10258_10313__$1);
var G__10315 = cljs.core.chunk_rest(seq__10258_10313__$1);
var G__10316 = c__5626__auto___10314;
var G__10317 = cljs.core.count(c__5626__auto___10314);
var G__10318 = (0);
seq__10258_10303 = G__10315;
chunk__10259_10304 = G__10316;
count__10260_10305 = G__10317;
i__10261_10306 = G__10318;
continue;
} else {
var dep_10319 = cljs.core.first(seq__10258_10313__$1);
dep_10319.rank = tailrecursion.javelin.next_rank();

var G__10320 = cljs.core.next(seq__10258_10313__$1);
var G__10321 = null;
var G__10322 = (0);
var G__10323 = (0);
seq__10258_10303 = G__10320;
chunk__10259_10304 = G__10321;
count__10260_10305 = G__10322;
i__10261_10306 = G__10323;
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

var G__10324 = cljs.core.next(seq__10250_10296__$1);
var G__10325 = null;
var G__10326 = (0);
var G__10327 = (0);
seq__10250_10265 = G__10324;
chunk__10251_10266 = G__10325;
count__10252_10267 = G__10326;
i__10253_10268 = G__10327;
continue;
}
} else {
}
}
break;
}

var compute_10328 = ((function (vec__10249,f,sources){
return (function (p1__10245_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10245_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10245_SHARP_)));
});})(vec__10249,f,sources))
;
this$.thunk = ((function (compute_10328,vec__10249,f,sources){
return (function (){
return this$.state = compute_10328(this$.sources);
});})(compute_10328,vec__10249,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq10246){
var G__10247 = cljs.core.first(seq10246);
var seq10246__$1 = cljs.core.next(seq10246);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10247,seq10246__$1);
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
var G__10330 = this$__$1;
var G__10331 = (function (){var G__10332 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10332) : f.call(null,G__10332));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10330,G__10331) : cljs.core.reset_BANG_.call(null,G__10330,G__10331));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__10335 = this$__$1;
var G__10336 = (function (){var G__10337 = this$__$1.state;
var G__10338 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10337,G__10338) : f.call(null,G__10337,G__10338));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10335,G__10336) : cljs.core.reset_BANG_.call(null,G__10335,G__10336));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__10342 = this$__$1;
var G__10343 = (function (){var G__10344 = this$__$1.state;
var G__10345 = a;
var G__10346 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10344,G__10345,G__10346) : f.call(null,G__10344,G__10345,G__10346));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10342,G__10343) : cljs.core.reset_BANG_.call(null,G__10342,G__10343));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__10347 = this$__$1;
var G__10348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10347,G__10348) : cljs.core.reset_BANG_.call(null,G__10347,G__10348));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__10349 = cljs.core.seq(self__.watches);
var chunk__10350 = null;
var count__10351 = (0);
var i__10352 = (0);
while(true){
if((i__10352 < count__10351)){
var vec__10353 = chunk__10350.cljs$core$IIndexed$_nth$arity$2(null,i__10352);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10355 = seq__10349;
var G__10356 = chunk__10350;
var G__10357 = count__10351;
var G__10358 = (i__10352 + (1));
seq__10349 = G__10355;
chunk__10350 = G__10356;
count__10351 = G__10357;
i__10352 = G__10358;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10349);
if(temp__4425__auto__){
var seq__10349__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10349__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10349__$1);
var G__10359 = cljs.core.chunk_rest(seq__10349__$1);
var G__10360 = c__5626__auto__;
var G__10361 = cljs.core.count(c__5626__auto__);
var G__10362 = (0);
seq__10349 = G__10359;
chunk__10350 = G__10360;
count__10351 = G__10361;
i__10352 = G__10362;
continue;
} else {
var vec__10354 = cljs.core.first(seq__10349__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__10363 = cljs.core.next(seq__10349__$1);
var G__10364 = null;
var G__10365 = (0);
var G__10366 = (0);
seq__10349 = G__10363;
chunk__10350 = G__10364;
count__10351 = G__10365;
i__10352 = G__10366;
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
var G__10367__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__10367 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__10368__i = 0, G__10368__a = new Array(arguments.length -  0);
while (G__10368__i < G__10368__a.length) {G__10368__a[G__10368__i] = arguments[G__10368__i + 0]; ++G__10368__i;}
  sources = new cljs.core.IndexedSeq(G__10368__a,0);
} 
return G__10367__delegate.call(this,sources);};
G__10367.cljs$lang$maxFixedArity = 0;
G__10367.cljs$lang$applyTo = (function (arglist__10369){
var sources = cljs.core.seq(arglist__10369);
return G__10367__delegate(sources);
});
G__10367.cljs$core$IFn$_invoke$arity$variadic = G__10367__delegate;
return G__10367;
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
var bind = (function (p1__10370_SHARP_){
var _STAR_tx_STAR_10374 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__10375 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10375) : cljs.core.atom.call(null,G__10375));
})();

try{return (p1__10370_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10370_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10370_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10374;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_10376 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_10376;
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
var len__5881__auto___10384 = arguments.length;
var i__5882__auto___10385 = (0);
while(true){
if((i__5882__auto___10385 < len__5881__auto___10384)){
args__5888__auto__.push((arguments[i__5882__auto___10385]));

var G__10386 = (i__5882__auto___10385 + (1));
i__5882__auto___10385 = G__10386;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__10383 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10383) : cljs.core.atom.call(null,G__10383));
})();
var tag_neq = ((function (olds){
return (function (p1__10377_SHARP_,p2__10378_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10377_SHARP_,p2__10378_SHARP_),p2__10378_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__10380_SHARP_,p2__10379_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10380_SHARP_,p2__10379_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10387__delegate = function (rest__10381_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__10381_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__10381_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__10381_SHARP_));

return news;
};
var G__10387 = function (var_args){
var rest__10381_SHARP_ = null;
if (arguments.length > 0) {
var G__10388__i = 0, G__10388__a = new Array(arguments.length -  0);
while (G__10388__i < G__10388__a.length) {G__10388__a[G__10388__i] = arguments[G__10388__i + 0]; ++G__10388__i;}
  rest__10381_SHARP_ = new cljs.core.IndexedSeq(G__10388__a,0);
} 
return G__10387__delegate.call(this,rest__10381_SHARP_);};
G__10387.cljs$lang$maxFixedArity = 0;
G__10387.cljs$lang$applyTo = (function (arglist__10389){
var rest__10381_SHARP_ = cljs.core.seq(arglist__10389);
return G__10387__delegate(rest__10381_SHARP_);
});
G__10387.cljs$core$IFn$_invoke$arity$variadic = G__10387__delegate;
return G__10387;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq10382){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10382));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10390_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10390_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__10391_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10391_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__10398_10404 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__10399_10405 = null;
var count__10400_10406 = (0);
var i__10401_10407 = (0);
while(true){
if((i__10401_10407 < count__10400_10406)){
var i_10408 = chunk__10399_10405.cljs$core$IIndexed$_nth$arity$2(null,i__10401_10407);
var G__10402_10409 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10408) : ith_item__$1.call(null,i_10408));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10402_10409) : f__$1.call(null,G__10402_10409));

var G__10410 = seq__10398_10404;
var G__10411 = chunk__10399_10405;
var G__10412 = count__10400_10406;
var G__10413 = (i__10401_10407 + (1));
seq__10398_10404 = G__10410;
chunk__10399_10405 = G__10411;
count__10400_10406 = G__10412;
i__10401_10407 = G__10413;
continue;
} else {
var temp__4425__auto___10414 = cljs.core.seq(seq__10398_10404);
if(temp__4425__auto___10414){
var seq__10398_10415__$1 = temp__4425__auto___10414;
if(cljs.core.chunked_seq_QMARK_(seq__10398_10415__$1)){
var c__5626__auto___10416 = cljs.core.chunk_first(seq__10398_10415__$1);
var G__10417 = cljs.core.chunk_rest(seq__10398_10415__$1);
var G__10418 = c__5626__auto___10416;
var G__10419 = cljs.core.count(c__5626__auto___10416);
var G__10420 = (0);
seq__10398_10404 = G__10417;
chunk__10399_10405 = G__10418;
count__10400_10406 = G__10419;
i__10401_10407 = G__10420;
continue;
} else {
var i_10421 = cljs.core.first(seq__10398_10415__$1);
var G__10403_10422 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10421) : ith_item__$1.call(null,i_10421));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__10403_10422) : f__$1.call(null,G__10403_10422));

var G__10423 = cljs.core.next(seq__10398_10415__$1);
var G__10424 = null;
var G__10425 = (0);
var G__10426 = (0);
seq__10398_10404 = G__10423;
chunk__10399_10405 = G__10424;
count__10400_10406 = G__10425;
i__10401_10407 = G__10426;
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
