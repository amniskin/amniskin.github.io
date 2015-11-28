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

var G__293991 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__293989_SHARP_,p2__293990_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__293989_SHARP_,p2__293990_SHARP_,p2__293990_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__293991;
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
}catch (e293993){if((e293993 instanceof Error)){
var _ = e293993;
return null;
} else {
throw e293993;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__293996 = c;
tailrecursion.javelin.add_sync_BANG_(G__293996);

return G__293996;
} else {
var G__293997 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__293997));

return G__293997;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___294006 = arguments.length;
var i__6062__auto___294007 = (0);
while(true){
if((i__6062__auto___294007 < len__6061__auto___294006)){
args__6068__auto__.push((arguments[i__6062__auto___294007]));

var G__294008 = (i__6062__auto___294007 + (1));
i__6062__auto___294007 = G__294008;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__294000){
var vec__294001 = p__294000;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294001,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__294002 = cljs.core.seq(srcs);
var chunk__294003 = null;
var count__294004 = (0);
var i__294005 = (0);
while(true){
if((i__294005 < count__294004)){
var src = chunk__294003.cljs$core$IIndexed$_nth$arity$2(null,i__294005);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__294009 = seq__294002;
var G__294010 = chunk__294003;
var G__294011 = count__294004;
var G__294012 = (i__294005 + (1));
seq__294002 = G__294009;
chunk__294003 = G__294010;
count__294004 = G__294011;
i__294005 = G__294012;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__294002);
if(temp__4425__auto__){
var seq__294002__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__294002__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__294002__$1);
var G__294013 = cljs.core.chunk_rest(seq__294002__$1);
var G__294014 = c__5806__auto__;
var G__294015 = cljs.core.count(c__5806__auto__);
var G__294016 = (0);
seq__294002 = G__294013;
chunk__294003 = G__294014;
count__294004 = G__294015;
i__294005 = G__294016;
continue;
} else {
var src = cljs.core.first(seq__294002__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__294017 = cljs.core.next(seq__294002__$1);
var G__294018 = null;
var G__294019 = (0);
var G__294020 = (0);
seq__294002 = G__294017;
chunk__294003 = G__294018;
count__294004 = G__294019;
i__294005 = G__294020;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq293998){
var G__293999 = cljs.core.first(seq293998);
var seq293998__$1 = cljs.core.next(seq293998);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__293999,seq293998__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___294039 = arguments.length;
var i__6062__auto___294040 = (0);
while(true){
if((i__6062__auto___294040 < len__6061__auto___294039)){
args__6068__auto__.push((arguments[i__6062__auto___294040]));

var G__294041 = (i__6062__auto___294040 + (1));
i__6062__auto___294040 = G__294041;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__294025){
var vec__294026 = p__294025;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294026,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294026,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__294027_294042 = cljs.core.seq(this$.sources);
var chunk__294028_294043 = null;
var count__294029_294044 = (0);
var i__294030_294045 = (0);
while(true){
if((i__294030_294045 < count__294029_294044)){
var source_294046 = chunk__294028_294043.cljs$core$IIndexed$_nth$arity$2(null,i__294030_294045);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_294046) : tailrecursion.javelin.cell_QMARK_.call(null,source_294046)))){
source_294046.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_294046.sinks,this$);

if((source_294046.rank > this$.rank)){
var seq__294031_294047 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__294027_294042,chunk__294028_294043,count__294029_294044,i__294030_294045,source_294046,vec__294026,f,sources){
return (function (p1__294021_SHARP_){
return p1__294021_SHARP_.sinks;
});})(seq__294027_294042,chunk__294028_294043,count__294029_294044,i__294030_294045,source_294046,vec__294026,f,sources))
,source_294046));
var chunk__294032_294048 = null;
var count__294033_294049 = (0);
var i__294034_294050 = (0);
while(true){
if((i__294034_294050 < count__294033_294049)){
var dep_294051 = chunk__294032_294048.cljs$core$IIndexed$_nth$arity$2(null,i__294034_294050);
dep_294051.rank = tailrecursion.javelin.next_rank();

var G__294052 = seq__294031_294047;
var G__294053 = chunk__294032_294048;
var G__294054 = count__294033_294049;
var G__294055 = (i__294034_294050 + (1));
seq__294031_294047 = G__294052;
chunk__294032_294048 = G__294053;
count__294033_294049 = G__294054;
i__294034_294050 = G__294055;
continue;
} else {
var temp__4425__auto___294056 = cljs.core.seq(seq__294031_294047);
if(temp__4425__auto___294056){
var seq__294031_294057__$1 = temp__4425__auto___294056;
if(cljs.core.chunked_seq_QMARK_(seq__294031_294057__$1)){
var c__5806__auto___294058 = cljs.core.chunk_first(seq__294031_294057__$1);
var G__294059 = cljs.core.chunk_rest(seq__294031_294057__$1);
var G__294060 = c__5806__auto___294058;
var G__294061 = cljs.core.count(c__5806__auto___294058);
var G__294062 = (0);
seq__294031_294047 = G__294059;
chunk__294032_294048 = G__294060;
count__294033_294049 = G__294061;
i__294034_294050 = G__294062;
continue;
} else {
var dep_294063 = cljs.core.first(seq__294031_294057__$1);
dep_294063.rank = tailrecursion.javelin.next_rank();

var G__294064 = cljs.core.next(seq__294031_294057__$1);
var G__294065 = null;
var G__294066 = (0);
var G__294067 = (0);
seq__294031_294047 = G__294064;
chunk__294032_294048 = G__294065;
count__294033_294049 = G__294066;
i__294034_294050 = G__294067;
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

var G__294068 = seq__294027_294042;
var G__294069 = chunk__294028_294043;
var G__294070 = count__294029_294044;
var G__294071 = (i__294030_294045 + (1));
seq__294027_294042 = G__294068;
chunk__294028_294043 = G__294069;
count__294029_294044 = G__294070;
i__294030_294045 = G__294071;
continue;
} else {
var temp__4425__auto___294072 = cljs.core.seq(seq__294027_294042);
if(temp__4425__auto___294072){
var seq__294027_294073__$1 = temp__4425__auto___294072;
if(cljs.core.chunked_seq_QMARK_(seq__294027_294073__$1)){
var c__5806__auto___294074 = cljs.core.chunk_first(seq__294027_294073__$1);
var G__294075 = cljs.core.chunk_rest(seq__294027_294073__$1);
var G__294076 = c__5806__auto___294074;
var G__294077 = cljs.core.count(c__5806__auto___294074);
var G__294078 = (0);
seq__294027_294042 = G__294075;
chunk__294028_294043 = G__294076;
count__294029_294044 = G__294077;
i__294030_294045 = G__294078;
continue;
} else {
var source_294079 = cljs.core.first(seq__294027_294073__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_294079) : tailrecursion.javelin.cell_QMARK_.call(null,source_294079)))){
source_294079.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_294079.sinks,this$);

if((source_294079.rank > this$.rank)){
var seq__294035_294080 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__294027_294042,chunk__294028_294043,count__294029_294044,i__294030_294045,source_294079,seq__294027_294073__$1,temp__4425__auto___294072,vec__294026,f,sources){
return (function (p1__294021_SHARP_){
return p1__294021_SHARP_.sinks;
});})(seq__294027_294042,chunk__294028_294043,count__294029_294044,i__294030_294045,source_294079,seq__294027_294073__$1,temp__4425__auto___294072,vec__294026,f,sources))
,source_294079));
var chunk__294036_294081 = null;
var count__294037_294082 = (0);
var i__294038_294083 = (0);
while(true){
if((i__294038_294083 < count__294037_294082)){
var dep_294084 = chunk__294036_294081.cljs$core$IIndexed$_nth$arity$2(null,i__294038_294083);
dep_294084.rank = tailrecursion.javelin.next_rank();

var G__294085 = seq__294035_294080;
var G__294086 = chunk__294036_294081;
var G__294087 = count__294037_294082;
var G__294088 = (i__294038_294083 + (1));
seq__294035_294080 = G__294085;
chunk__294036_294081 = G__294086;
count__294037_294082 = G__294087;
i__294038_294083 = G__294088;
continue;
} else {
var temp__4425__auto___294089__$1 = cljs.core.seq(seq__294035_294080);
if(temp__4425__auto___294089__$1){
var seq__294035_294090__$1 = temp__4425__auto___294089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__294035_294090__$1)){
var c__5806__auto___294091 = cljs.core.chunk_first(seq__294035_294090__$1);
var G__294092 = cljs.core.chunk_rest(seq__294035_294090__$1);
var G__294093 = c__5806__auto___294091;
var G__294094 = cljs.core.count(c__5806__auto___294091);
var G__294095 = (0);
seq__294035_294080 = G__294092;
chunk__294036_294081 = G__294093;
count__294037_294082 = G__294094;
i__294038_294083 = G__294095;
continue;
} else {
var dep_294096 = cljs.core.first(seq__294035_294090__$1);
dep_294096.rank = tailrecursion.javelin.next_rank();

var G__294097 = cljs.core.next(seq__294035_294090__$1);
var G__294098 = null;
var G__294099 = (0);
var G__294100 = (0);
seq__294035_294080 = G__294097;
chunk__294036_294081 = G__294098;
count__294037_294082 = G__294099;
i__294038_294083 = G__294100;
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

var G__294101 = cljs.core.next(seq__294027_294073__$1);
var G__294102 = null;
var G__294103 = (0);
var G__294104 = (0);
seq__294027_294042 = G__294101;
chunk__294028_294043 = G__294102;
count__294029_294044 = G__294103;
i__294030_294045 = G__294104;
continue;
}
} else {
}
}
break;
}

var compute_294105 = ((function (vec__294026,f,sources){
return (function (p1__294022_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__294022_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__294022_SHARP_)));
});})(vec__294026,f,sources))
;
this$.thunk = ((function (compute_294105,vec__294026,f,sources){
return (function (){
return this$.state = compute_294105(this$.sources);
});})(compute_294105,vec__294026,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq294023){
var G__294024 = cljs.core.first(seq294023);
var seq294023__$1 = cljs.core.next(seq294023);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__294024,seq294023__$1);
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
var G__294107 = this$__$1;
var G__294108 = (function (){var G__294109 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__294109) : f.call(null,G__294109));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__294107,G__294108) : cljs.core.reset_BANG_.call(null,G__294107,G__294108));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__294112 = this$__$1;
var G__294113 = (function (){var G__294114 = this$__$1.state;
var G__294115 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__294114,G__294115) : f.call(null,G__294114,G__294115));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__294112,G__294113) : cljs.core.reset_BANG_.call(null,G__294112,G__294113));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__294119 = this$__$1;
var G__294120 = (function (){var G__294121 = this$__$1.state;
var G__294122 = a;
var G__294123 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__294121,G__294122,G__294123) : f.call(null,G__294121,G__294122,G__294123));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__294119,G__294120) : cljs.core.reset_BANG_.call(null,G__294119,G__294120));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__294124 = this$__$1;
var G__294125 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__294124,G__294125) : cljs.core.reset_BANG_.call(null,G__294124,G__294125));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__294126 = cljs.core.seq(self__.watches);
var chunk__294127 = null;
var count__294128 = (0);
var i__294129 = (0);
while(true){
if((i__294129 < count__294128)){
var vec__294130 = chunk__294127.cljs$core$IIndexed$_nth$arity$2(null,i__294129);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294130,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294130,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__294132 = seq__294126;
var G__294133 = chunk__294127;
var G__294134 = count__294128;
var G__294135 = (i__294129 + (1));
seq__294126 = G__294132;
chunk__294127 = G__294133;
count__294128 = G__294134;
i__294129 = G__294135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__294126);
if(temp__4425__auto__){
var seq__294126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__294126__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__294126__$1);
var G__294136 = cljs.core.chunk_rest(seq__294126__$1);
var G__294137 = c__5806__auto__;
var G__294138 = cljs.core.count(c__5806__auto__);
var G__294139 = (0);
seq__294126 = G__294136;
chunk__294127 = G__294137;
count__294128 = G__294138;
i__294129 = G__294139;
continue;
} else {
var vec__294131 = cljs.core.first(seq__294126__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294131,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__294131,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__294140 = cljs.core.next(seq__294126__$1);
var G__294141 = null;
var G__294142 = (0);
var G__294143 = (0);
seq__294126 = G__294140;
chunk__294127 = G__294141;
count__294128 = G__294142;
i__294129 = G__294143;
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
var G__294144__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__294144 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__294145__i = 0, G__294145__a = new Array(arguments.length -  0);
while (G__294145__i < G__294145__a.length) {G__294145__a[G__294145__i] = arguments[G__294145__i + 0]; ++G__294145__i;}
  sources = new cljs.core.IndexedSeq(G__294145__a,0);
} 
return G__294144__delegate.call(this,sources);};
G__294144.cljs$lang$maxFixedArity = 0;
G__294144.cljs$lang$applyTo = (function (arglist__294146){
var sources = cljs.core.seq(arglist__294146);
return G__294144__delegate(sources);
});
G__294144.cljs$core$IFn$_invoke$arity$variadic = G__294144__delegate;
return G__294144;
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
var bind = (function (p1__294147_SHARP_){
var _STAR_tx_STAR_294151 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__294152 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__294152) : cljs.core.atom.call(null,G__294152));
})();

try{return (p1__294147_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__294147_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__294147_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_294151;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_294153 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_294153;
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
var len__6061__auto___294161 = arguments.length;
var i__6062__auto___294162 = (0);
while(true){
if((i__6062__auto___294162 < len__6061__auto___294161)){
args__6068__auto__.push((arguments[i__6062__auto___294162]));

var G__294163 = (i__6062__auto___294162 + (1));
i__6062__auto___294162 = G__294163;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__294160 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__294160) : cljs.core.atom.call(null,G__294160));
})();
var tag_neq = ((function (olds){
return (function (p1__294154_SHARP_,p2__294155_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__294154_SHARP_,p2__294155_SHARP_),p2__294155_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__294157_SHARP_,p2__294156_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__294157_SHARP_,p2__294156_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__294164__delegate = function (rest__294158_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__294158_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__294158_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__294158_SHARP_));

return news;
};
var G__294164 = function (var_args){
var rest__294158_SHARP_ = null;
if (arguments.length > 0) {
var G__294165__i = 0, G__294165__a = new Array(arguments.length -  0);
while (G__294165__i < G__294165__a.length) {G__294165__a[G__294165__i] = arguments[G__294165__i + 0]; ++G__294165__i;}
  rest__294158_SHARP_ = new cljs.core.IndexedSeq(G__294165__a,0);
} 
return G__294164__delegate.call(this,rest__294158_SHARP_);};
G__294164.cljs$lang$maxFixedArity = 0;
G__294164.cljs$lang$applyTo = (function (arglist__294166){
var rest__294158_SHARP_ = cljs.core.seq(arglist__294166);
return G__294164__delegate(rest__294158_SHARP_);
});
G__294164.cljs$core$IFn$_invoke$arity$variadic = G__294164__delegate;
return G__294164;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq294159){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq294159));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__294167_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__294167_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__294168_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__294168_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__294175_294181 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__294176_294182 = null;
var count__294177_294183 = (0);
var i__294178_294184 = (0);
while(true){
if((i__294178_294184 < count__294177_294183)){
var i_294185 = chunk__294176_294182.cljs$core$IIndexed$_nth$arity$2(null,i__294178_294184);
var G__294179_294186 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_294185) : ith_item__$1.call(null,i_294185));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__294179_294186) : f__$1.call(null,G__294179_294186));

var G__294187 = seq__294175_294181;
var G__294188 = chunk__294176_294182;
var G__294189 = count__294177_294183;
var G__294190 = (i__294178_294184 + (1));
seq__294175_294181 = G__294187;
chunk__294176_294182 = G__294188;
count__294177_294183 = G__294189;
i__294178_294184 = G__294190;
continue;
} else {
var temp__4425__auto___294191 = cljs.core.seq(seq__294175_294181);
if(temp__4425__auto___294191){
var seq__294175_294192__$1 = temp__4425__auto___294191;
if(cljs.core.chunked_seq_QMARK_(seq__294175_294192__$1)){
var c__5806__auto___294193 = cljs.core.chunk_first(seq__294175_294192__$1);
var G__294194 = cljs.core.chunk_rest(seq__294175_294192__$1);
var G__294195 = c__5806__auto___294193;
var G__294196 = cljs.core.count(c__5806__auto___294193);
var G__294197 = (0);
seq__294175_294181 = G__294194;
chunk__294176_294182 = G__294195;
count__294177_294183 = G__294196;
i__294178_294184 = G__294197;
continue;
} else {
var i_294198 = cljs.core.first(seq__294175_294192__$1);
var G__294180_294199 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_294198) : ith_item__$1.call(null,i_294198));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__294180_294199) : f__$1.call(null,G__294180_294199));

var G__294200 = cljs.core.next(seq__294175_294192__$1);
var G__294201 = null;
var G__294202 = (0);
var G__294203 = (0);
seq__294175_294181 = G__294200;
chunk__294176_294182 = G__294201;
count__294177_294183 = G__294202;
i__294178_294184 = G__294203;
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
