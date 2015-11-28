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

var G__7876 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7874_SHARP_,p2__7875_SHARP_){
return cljs.core.assoc.call(null,p1__7874_SHARP_,p2__7875_SHARP_,p2__7875_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7876;
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
}catch (e7878){if((e7878 instanceof Error)){
var _ = e7878;
return null;
} else {
throw e7878;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7881 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7881);

return G__7881;
} else {
var G__7882 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7882));

return G__7882;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7891 = arguments.length;
var i__6062__auto___7892 = (0);
while(true){
if((i__6062__auto___7892 < len__6061__auto___7891)){
args__6068__auto__.push((arguments[i__6062__auto___7892]));

var G__7893 = (i__6062__auto___7892 + (1));
i__6062__auto___7892 = G__7893;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7885){
var vec__7886 = p__7885;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7886,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7887 = cljs.core.seq.call(null,srcs);
var chunk__7888 = null;
var count__7889 = (0);
var i__7890 = (0);
while(true){
if((i__7890 < count__7889)){
var src = cljs.core._nth.call(null,chunk__7888,i__7890);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7894 = seq__7887;
var G__7895 = chunk__7888;
var G__7896 = count__7889;
var G__7897 = (i__7890 + (1));
seq__7887 = G__7894;
chunk__7888 = G__7895;
count__7889 = G__7896;
i__7890 = G__7897;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7887);
if(temp__4425__auto__){
var seq__7887__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7887__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7887__$1);
var G__7898 = cljs.core.chunk_rest.call(null,seq__7887__$1);
var G__7899 = c__5806__auto__;
var G__7900 = cljs.core.count.call(null,c__5806__auto__);
var G__7901 = (0);
seq__7887 = G__7898;
chunk__7888 = G__7899;
count__7889 = G__7900;
i__7890 = G__7901;
continue;
} else {
var src = cljs.core.first.call(null,seq__7887__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7902 = cljs.core.next.call(null,seq__7887__$1);
var G__7903 = null;
var G__7904 = (0);
var G__7905 = (0);
seq__7887 = G__7902;
chunk__7888 = G__7903;
count__7889 = G__7904;
i__7890 = G__7905;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7883){
var G__7884 = cljs.core.first.call(null,seq7883);
var seq7883__$1 = cljs.core.next.call(null,seq7883);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7884,seq7883__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7924 = arguments.length;
var i__6062__auto___7925 = (0);
while(true){
if((i__6062__auto___7925 < len__6061__auto___7924)){
args__6068__auto__.push((arguments[i__6062__auto___7925]));

var G__7926 = (i__6062__auto___7925 + (1));
i__6062__auto___7925 = G__7926;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7910){
var vec__7911 = p__7910;
var f = cljs.core.nth.call(null,vec__7911,(0),null);
var sources = cljs.core.nth.call(null,vec__7911,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7912_7927 = cljs.core.seq.call(null,this$.sources);
var chunk__7913_7928 = null;
var count__7914_7929 = (0);
var i__7915_7930 = (0);
while(true){
if((i__7915_7930 < count__7914_7929)){
var source_7931 = cljs.core._nth.call(null,chunk__7913_7928,i__7915_7930);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7931))){
source_7931.sinks = cljs.core.conj.call(null,source_7931.sinks,this$);

if((source_7931.rank > this$.rank)){
var seq__7916_7932 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7912_7927,chunk__7913_7928,count__7914_7929,i__7915_7930,source_7931,vec__7911,f,sources){
return (function (p1__7906_SHARP_){
return p1__7906_SHARP_.sinks;
});})(seq__7912_7927,chunk__7913_7928,count__7914_7929,i__7915_7930,source_7931,vec__7911,f,sources))
,source_7931));
var chunk__7917_7933 = null;
var count__7918_7934 = (0);
var i__7919_7935 = (0);
while(true){
if((i__7919_7935 < count__7918_7934)){
var dep_7936 = cljs.core._nth.call(null,chunk__7917_7933,i__7919_7935);
dep_7936.rank = tailrecursion.javelin.next_rank.call(null);

var G__7937 = seq__7916_7932;
var G__7938 = chunk__7917_7933;
var G__7939 = count__7918_7934;
var G__7940 = (i__7919_7935 + (1));
seq__7916_7932 = G__7937;
chunk__7917_7933 = G__7938;
count__7918_7934 = G__7939;
i__7919_7935 = G__7940;
continue;
} else {
var temp__4425__auto___7941 = cljs.core.seq.call(null,seq__7916_7932);
if(temp__4425__auto___7941){
var seq__7916_7942__$1 = temp__4425__auto___7941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7916_7942__$1)){
var c__5806__auto___7943 = cljs.core.chunk_first.call(null,seq__7916_7942__$1);
var G__7944 = cljs.core.chunk_rest.call(null,seq__7916_7942__$1);
var G__7945 = c__5806__auto___7943;
var G__7946 = cljs.core.count.call(null,c__5806__auto___7943);
var G__7947 = (0);
seq__7916_7932 = G__7944;
chunk__7917_7933 = G__7945;
count__7918_7934 = G__7946;
i__7919_7935 = G__7947;
continue;
} else {
var dep_7948 = cljs.core.first.call(null,seq__7916_7942__$1);
dep_7948.rank = tailrecursion.javelin.next_rank.call(null);

var G__7949 = cljs.core.next.call(null,seq__7916_7942__$1);
var G__7950 = null;
var G__7951 = (0);
var G__7952 = (0);
seq__7916_7932 = G__7949;
chunk__7917_7933 = G__7950;
count__7918_7934 = G__7951;
i__7919_7935 = G__7952;
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

var G__7953 = seq__7912_7927;
var G__7954 = chunk__7913_7928;
var G__7955 = count__7914_7929;
var G__7956 = (i__7915_7930 + (1));
seq__7912_7927 = G__7953;
chunk__7913_7928 = G__7954;
count__7914_7929 = G__7955;
i__7915_7930 = G__7956;
continue;
} else {
var temp__4425__auto___7957 = cljs.core.seq.call(null,seq__7912_7927);
if(temp__4425__auto___7957){
var seq__7912_7958__$1 = temp__4425__auto___7957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7912_7958__$1)){
var c__5806__auto___7959 = cljs.core.chunk_first.call(null,seq__7912_7958__$1);
var G__7960 = cljs.core.chunk_rest.call(null,seq__7912_7958__$1);
var G__7961 = c__5806__auto___7959;
var G__7962 = cljs.core.count.call(null,c__5806__auto___7959);
var G__7963 = (0);
seq__7912_7927 = G__7960;
chunk__7913_7928 = G__7961;
count__7914_7929 = G__7962;
i__7915_7930 = G__7963;
continue;
} else {
var source_7964 = cljs.core.first.call(null,seq__7912_7958__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7964))){
source_7964.sinks = cljs.core.conj.call(null,source_7964.sinks,this$);

if((source_7964.rank > this$.rank)){
var seq__7920_7965 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7912_7927,chunk__7913_7928,count__7914_7929,i__7915_7930,source_7964,seq__7912_7958__$1,temp__4425__auto___7957,vec__7911,f,sources){
return (function (p1__7906_SHARP_){
return p1__7906_SHARP_.sinks;
});})(seq__7912_7927,chunk__7913_7928,count__7914_7929,i__7915_7930,source_7964,seq__7912_7958__$1,temp__4425__auto___7957,vec__7911,f,sources))
,source_7964));
var chunk__7921_7966 = null;
var count__7922_7967 = (0);
var i__7923_7968 = (0);
while(true){
if((i__7923_7968 < count__7922_7967)){
var dep_7969 = cljs.core._nth.call(null,chunk__7921_7966,i__7923_7968);
dep_7969.rank = tailrecursion.javelin.next_rank.call(null);

var G__7970 = seq__7920_7965;
var G__7971 = chunk__7921_7966;
var G__7972 = count__7922_7967;
var G__7973 = (i__7923_7968 + (1));
seq__7920_7965 = G__7970;
chunk__7921_7966 = G__7971;
count__7922_7967 = G__7972;
i__7923_7968 = G__7973;
continue;
} else {
var temp__4425__auto___7974__$1 = cljs.core.seq.call(null,seq__7920_7965);
if(temp__4425__auto___7974__$1){
var seq__7920_7975__$1 = temp__4425__auto___7974__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7920_7975__$1)){
var c__5806__auto___7976 = cljs.core.chunk_first.call(null,seq__7920_7975__$1);
var G__7977 = cljs.core.chunk_rest.call(null,seq__7920_7975__$1);
var G__7978 = c__5806__auto___7976;
var G__7979 = cljs.core.count.call(null,c__5806__auto___7976);
var G__7980 = (0);
seq__7920_7965 = G__7977;
chunk__7921_7966 = G__7978;
count__7922_7967 = G__7979;
i__7923_7968 = G__7980;
continue;
} else {
var dep_7981 = cljs.core.first.call(null,seq__7920_7975__$1);
dep_7981.rank = tailrecursion.javelin.next_rank.call(null);

var G__7982 = cljs.core.next.call(null,seq__7920_7975__$1);
var G__7983 = null;
var G__7984 = (0);
var G__7985 = (0);
seq__7920_7965 = G__7982;
chunk__7921_7966 = G__7983;
count__7922_7967 = G__7984;
i__7923_7968 = G__7985;
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

var G__7986 = cljs.core.next.call(null,seq__7912_7958__$1);
var G__7987 = null;
var G__7988 = (0);
var G__7989 = (0);
seq__7912_7927 = G__7986;
chunk__7913_7928 = G__7987;
count__7914_7929 = G__7988;
i__7915_7930 = G__7989;
continue;
}
} else {
}
}
break;
}

var compute_7990 = ((function (vec__7911,f,sources){
return (function (p1__7907_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7907_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7907_SHARP_)));
});})(vec__7911,f,sources))
;
this$.thunk = ((function (compute_7990,vec__7911,f,sources){
return (function (){
return this$.state = compute_7990.call(null,this$.sources);
});})(compute_7990,vec__7911,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7908){
var G__7909 = cljs.core.first.call(null,seq7908);
var seq7908__$1 = cljs.core.next.call(null,seq7908);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7909,seq7908__$1);
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
var seq__7991 = cljs.core.seq.call(null,self__.watches);
var chunk__7992 = null;
var count__7993 = (0);
var i__7994 = (0);
while(true){
if((i__7994 < count__7993)){
var vec__7995 = cljs.core._nth.call(null,chunk__7992,i__7994);
var key = cljs.core.nth.call(null,vec__7995,(0),null);
var f = cljs.core.nth.call(null,vec__7995,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7997 = seq__7991;
var G__7998 = chunk__7992;
var G__7999 = count__7993;
var G__8000 = (i__7994 + (1));
seq__7991 = G__7997;
chunk__7992 = G__7998;
count__7993 = G__7999;
i__7994 = G__8000;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7991);
if(temp__4425__auto__){
var seq__7991__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7991__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7991__$1);
var G__8001 = cljs.core.chunk_rest.call(null,seq__7991__$1);
var G__8002 = c__5806__auto__;
var G__8003 = cljs.core.count.call(null,c__5806__auto__);
var G__8004 = (0);
seq__7991 = G__8001;
chunk__7992 = G__8002;
count__7993 = G__8003;
i__7994 = G__8004;
continue;
} else {
var vec__7996 = cljs.core.first.call(null,seq__7991__$1);
var key = cljs.core.nth.call(null,vec__7996,(0),null);
var f = cljs.core.nth.call(null,vec__7996,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8005 = cljs.core.next.call(null,seq__7991__$1);
var G__8006 = null;
var G__8007 = (0);
var G__8008 = (0);
seq__7991 = G__8005;
chunk__7992 = G__8006;
count__7993 = G__8007;
i__7994 = G__8008;
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
var G__8009__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__8009 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8010__i = 0, G__8010__a = new Array(arguments.length -  0);
while (G__8010__i < G__8010__a.length) {G__8010__a[G__8010__i] = arguments[G__8010__i + 0]; ++G__8010__i;}
  sources = new cljs.core.IndexedSeq(G__8010__a,0);
} 
return G__8009__delegate.call(this,sources);};
G__8009.cljs$lang$maxFixedArity = 0;
G__8009.cljs$lang$applyTo = (function (arglist__8011){
var sources = cljs.core.seq(arglist__8011);
return G__8009__delegate(sources);
});
G__8009.cljs$core$IFn$_invoke$arity$variadic = G__8009__delegate;
return G__8009;
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
var bind = (function (p1__8012_SHARP_){
var _STAR_tx_STAR_8015 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8012_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8015;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_8016 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_8016;
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
var len__6061__auto___8023 = arguments.length;
var i__6062__auto___8024 = (0);
while(true){
if((i__6062__auto___8024 < len__6061__auto___8023)){
args__6068__auto__.push((arguments[i__6062__auto___8024]));

var G__8025 = (i__6062__auto___8024 + (1));
i__6062__auto___8024 = G__8025;
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
return (function (p1__8017_SHARP_,p2__8018_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8017_SHARP_,p2__8018_SHARP_),p2__8018_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8020_SHARP_,p2__8019_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8020_SHARP_,p2__8019_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8026__delegate = function (rest__8021_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8021_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8021_SHARP_);

return news;
};
var G__8026 = function (var_args){
var rest__8021_SHARP_ = null;
if (arguments.length > 0) {
var G__8027__i = 0, G__8027__a = new Array(arguments.length -  0);
while (G__8027__i < G__8027__a.length) {G__8027__a[G__8027__i] = arguments[G__8027__i + 0]; ++G__8027__i;}
  rest__8021_SHARP_ = new cljs.core.IndexedSeq(G__8027__a,0);
} 
return G__8026__delegate.call(this,rest__8021_SHARP_);};
G__8026.cljs$lang$maxFixedArity = 0;
G__8026.cljs$lang$applyTo = (function (arglist__8028){
var rest__8021_SHARP_ = cljs.core.seq(arglist__8028);
return G__8026__delegate(rest__8021_SHARP_);
});
G__8026.cljs$core$IFn$_invoke$arity$variadic = G__8026__delegate;
return G__8026;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq8022){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8022));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8029_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__8029_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8030_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__8030_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8035_8039 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8036_8040 = null;
var count__8037_8041 = (0);
var i__8038_8042 = (0);
while(true){
if((i__8038_8042 < count__8037_8041)){
var i_8043 = cljs.core._nth.call(null,chunk__8036_8040,i__8038_8042);
f__$1.call(null,ith_item__$1.call(null,i_8043));

var G__8044 = seq__8035_8039;
var G__8045 = chunk__8036_8040;
var G__8046 = count__8037_8041;
var G__8047 = (i__8038_8042 + (1));
seq__8035_8039 = G__8044;
chunk__8036_8040 = G__8045;
count__8037_8041 = G__8046;
i__8038_8042 = G__8047;
continue;
} else {
var temp__4425__auto___8048 = cljs.core.seq.call(null,seq__8035_8039);
if(temp__4425__auto___8048){
var seq__8035_8049__$1 = temp__4425__auto___8048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8035_8049__$1)){
var c__5806__auto___8050 = cljs.core.chunk_first.call(null,seq__8035_8049__$1);
var G__8051 = cljs.core.chunk_rest.call(null,seq__8035_8049__$1);
var G__8052 = c__5806__auto___8050;
var G__8053 = cljs.core.count.call(null,c__5806__auto___8050);
var G__8054 = (0);
seq__8035_8039 = G__8051;
chunk__8036_8040 = G__8052;
count__8037_8041 = G__8053;
i__8038_8042 = G__8054;
continue;
} else {
var i_8055 = cljs.core.first.call(null,seq__8035_8049__$1);
f__$1.call(null,ith_item__$1.call(null,i_8055));

var G__8056 = cljs.core.next.call(null,seq__8035_8049__$1);
var G__8057 = null;
var G__8058 = (0);
var G__8059 = (0);
seq__8035_8039 = G__8056;
chunk__8036_8040 = G__8057;
count__8037_8041 = G__8058;
i__8038_8042 = G__8059;
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