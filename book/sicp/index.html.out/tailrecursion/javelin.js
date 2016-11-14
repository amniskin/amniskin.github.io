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

var G__293811 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__293809_SHARP_,p2__293810_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__293809_SHARP_,p2__293810_SHARP_,p2__293810_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__293811;
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
}catch (e293813){if((e293813 instanceof Error)){
var _ = e293813;
return null;
} else {
throw e293813;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__293816 = c;
tailrecursion.javelin.add_sync_BANG_(G__293816);

return G__293816;
} else {
var G__293817 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__293817));

return G__293817;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___293826 = arguments.length;
var i__5882__auto___293827 = (0);
while(true){
if((i__5882__auto___293827 < len__5881__auto___293826)){
args__5888__auto__.push((arguments[i__5882__auto___293827]));

var G__293828 = (i__5882__auto___293827 + (1));
i__5882__auto___293827 = G__293828;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__293820){
var vec__293821 = p__293820;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293821,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__293822 = cljs.core.seq(srcs);
var chunk__293823 = null;
var count__293824 = (0);
var i__293825 = (0);
while(true){
if((i__293825 < count__293824)){
var src = chunk__293823.cljs$core$IIndexed$_nth$arity$2(null,i__293825);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__293829 = seq__293822;
var G__293830 = chunk__293823;
var G__293831 = count__293824;
var G__293832 = (i__293825 + (1));
seq__293822 = G__293829;
chunk__293823 = G__293830;
count__293824 = G__293831;
i__293825 = G__293832;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__293822);
if(temp__4425__auto__){
var seq__293822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__293822__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__293822__$1);
var G__293833 = cljs.core.chunk_rest(seq__293822__$1);
var G__293834 = c__5626__auto__;
var G__293835 = cljs.core.count(c__5626__auto__);
var G__293836 = (0);
seq__293822 = G__293833;
chunk__293823 = G__293834;
count__293824 = G__293835;
i__293825 = G__293836;
continue;
} else {
var src = cljs.core.first(seq__293822__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__293837 = cljs.core.next(seq__293822__$1);
var G__293838 = null;
var G__293839 = (0);
var G__293840 = (0);
seq__293822 = G__293837;
chunk__293823 = G__293838;
count__293824 = G__293839;
i__293825 = G__293840;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq293818){
var G__293819 = cljs.core.first(seq293818);
var seq293818__$1 = cljs.core.next(seq293818);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__293819,seq293818__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__5888__auto__ = [];
var len__5881__auto___293859 = arguments.length;
var i__5882__auto___293860 = (0);
while(true){
if((i__5882__auto___293860 < len__5881__auto___293859)){
args__5888__auto__.push((arguments[i__5882__auto___293860]));

var G__293861 = (i__5882__auto___293860 + (1));
i__5882__auto___293860 = G__293861;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((1) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5889__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__293845){
var vec__293846 = p__293845;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293846,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293846,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__293847_293862 = cljs.core.seq(this$.sources);
var chunk__293848_293863 = null;
var count__293849_293864 = (0);
var i__293850_293865 = (0);
while(true){
if((i__293850_293865 < count__293849_293864)){
var source_293866 = chunk__293848_293863.cljs$core$IIndexed$_nth$arity$2(null,i__293850_293865);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_293866) : tailrecursion.javelin.cell_QMARK_.call(null,source_293866)))){
source_293866.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_293866.sinks,this$);

if((source_293866.rank > this$.rank)){
var seq__293851_293867 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__293847_293862,chunk__293848_293863,count__293849_293864,i__293850_293865,source_293866,vec__293846,f,sources){
return (function (p1__293841_SHARP_){
return p1__293841_SHARP_.sinks;
});})(seq__293847_293862,chunk__293848_293863,count__293849_293864,i__293850_293865,source_293866,vec__293846,f,sources))
,source_293866));
var chunk__293852_293868 = null;
var count__293853_293869 = (0);
var i__293854_293870 = (0);
while(true){
if((i__293854_293870 < count__293853_293869)){
var dep_293871 = chunk__293852_293868.cljs$core$IIndexed$_nth$arity$2(null,i__293854_293870);
dep_293871.rank = tailrecursion.javelin.next_rank();

var G__293872 = seq__293851_293867;
var G__293873 = chunk__293852_293868;
var G__293874 = count__293853_293869;
var G__293875 = (i__293854_293870 + (1));
seq__293851_293867 = G__293872;
chunk__293852_293868 = G__293873;
count__293853_293869 = G__293874;
i__293854_293870 = G__293875;
continue;
} else {
var temp__4425__auto___293876 = cljs.core.seq(seq__293851_293867);
if(temp__4425__auto___293876){
var seq__293851_293877__$1 = temp__4425__auto___293876;
if(cljs.core.chunked_seq_QMARK_(seq__293851_293877__$1)){
var c__5626__auto___293878 = cljs.core.chunk_first(seq__293851_293877__$1);
var G__293879 = cljs.core.chunk_rest(seq__293851_293877__$1);
var G__293880 = c__5626__auto___293878;
var G__293881 = cljs.core.count(c__5626__auto___293878);
var G__293882 = (0);
seq__293851_293867 = G__293879;
chunk__293852_293868 = G__293880;
count__293853_293869 = G__293881;
i__293854_293870 = G__293882;
continue;
} else {
var dep_293883 = cljs.core.first(seq__293851_293877__$1);
dep_293883.rank = tailrecursion.javelin.next_rank();

var G__293884 = cljs.core.next(seq__293851_293877__$1);
var G__293885 = null;
var G__293886 = (0);
var G__293887 = (0);
seq__293851_293867 = G__293884;
chunk__293852_293868 = G__293885;
count__293853_293869 = G__293886;
i__293854_293870 = G__293887;
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

var G__293888 = seq__293847_293862;
var G__293889 = chunk__293848_293863;
var G__293890 = count__293849_293864;
var G__293891 = (i__293850_293865 + (1));
seq__293847_293862 = G__293888;
chunk__293848_293863 = G__293889;
count__293849_293864 = G__293890;
i__293850_293865 = G__293891;
continue;
} else {
var temp__4425__auto___293892 = cljs.core.seq(seq__293847_293862);
if(temp__4425__auto___293892){
var seq__293847_293893__$1 = temp__4425__auto___293892;
if(cljs.core.chunked_seq_QMARK_(seq__293847_293893__$1)){
var c__5626__auto___293894 = cljs.core.chunk_first(seq__293847_293893__$1);
var G__293895 = cljs.core.chunk_rest(seq__293847_293893__$1);
var G__293896 = c__5626__auto___293894;
var G__293897 = cljs.core.count(c__5626__auto___293894);
var G__293898 = (0);
seq__293847_293862 = G__293895;
chunk__293848_293863 = G__293896;
count__293849_293864 = G__293897;
i__293850_293865 = G__293898;
continue;
} else {
var source_293899 = cljs.core.first(seq__293847_293893__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_293899) : tailrecursion.javelin.cell_QMARK_.call(null,source_293899)))){
source_293899.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_293899.sinks,this$);

if((source_293899.rank > this$.rank)){
var seq__293855_293900 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__293847_293862,chunk__293848_293863,count__293849_293864,i__293850_293865,source_293899,seq__293847_293893__$1,temp__4425__auto___293892,vec__293846,f,sources){
return (function (p1__293841_SHARP_){
return p1__293841_SHARP_.sinks;
});})(seq__293847_293862,chunk__293848_293863,count__293849_293864,i__293850_293865,source_293899,seq__293847_293893__$1,temp__4425__auto___293892,vec__293846,f,sources))
,source_293899));
var chunk__293856_293901 = null;
var count__293857_293902 = (0);
var i__293858_293903 = (0);
while(true){
if((i__293858_293903 < count__293857_293902)){
var dep_293904 = chunk__293856_293901.cljs$core$IIndexed$_nth$arity$2(null,i__293858_293903);
dep_293904.rank = tailrecursion.javelin.next_rank();

var G__293905 = seq__293855_293900;
var G__293906 = chunk__293856_293901;
var G__293907 = count__293857_293902;
var G__293908 = (i__293858_293903 + (1));
seq__293855_293900 = G__293905;
chunk__293856_293901 = G__293906;
count__293857_293902 = G__293907;
i__293858_293903 = G__293908;
continue;
} else {
var temp__4425__auto___293909__$1 = cljs.core.seq(seq__293855_293900);
if(temp__4425__auto___293909__$1){
var seq__293855_293910__$1 = temp__4425__auto___293909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__293855_293910__$1)){
var c__5626__auto___293911 = cljs.core.chunk_first(seq__293855_293910__$1);
var G__293912 = cljs.core.chunk_rest(seq__293855_293910__$1);
var G__293913 = c__5626__auto___293911;
var G__293914 = cljs.core.count(c__5626__auto___293911);
var G__293915 = (0);
seq__293855_293900 = G__293912;
chunk__293856_293901 = G__293913;
count__293857_293902 = G__293914;
i__293858_293903 = G__293915;
continue;
} else {
var dep_293916 = cljs.core.first(seq__293855_293910__$1);
dep_293916.rank = tailrecursion.javelin.next_rank();

var G__293917 = cljs.core.next(seq__293855_293910__$1);
var G__293918 = null;
var G__293919 = (0);
var G__293920 = (0);
seq__293855_293900 = G__293917;
chunk__293856_293901 = G__293918;
count__293857_293902 = G__293919;
i__293858_293903 = G__293920;
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

var G__293921 = cljs.core.next(seq__293847_293893__$1);
var G__293922 = null;
var G__293923 = (0);
var G__293924 = (0);
seq__293847_293862 = G__293921;
chunk__293848_293863 = G__293922;
count__293849_293864 = G__293923;
i__293850_293865 = G__293924;
continue;
}
} else {
}
}
break;
}

var compute_293925 = ((function (vec__293846,f,sources){
return (function (p1__293842_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__293842_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__293842_SHARP_)));
});})(vec__293846,f,sources))
;
this$.thunk = ((function (compute_293925,vec__293846,f,sources){
return (function (){
return this$.state = compute_293925(this$.sources);
});})(compute_293925,vec__293846,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq293843){
var G__293844 = cljs.core.first(seq293843);
var seq293843__$1 = cljs.core.next(seq293843);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__293844,seq293843__$1);
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
var G__293927 = this$__$1;
var G__293928 = (function (){var G__293929 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__293929) : f.call(null,G__293929));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__293927,G__293928) : cljs.core.reset_BANG_.call(null,G__293927,G__293928));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__293932 = this$__$1;
var G__293933 = (function (){var G__293934 = this$__$1.state;
var G__293935 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__293934,G__293935) : f.call(null,G__293934,G__293935));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__293932,G__293933) : cljs.core.reset_BANG_.call(null,G__293932,G__293933));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__293939 = this$__$1;
var G__293940 = (function (){var G__293941 = this$__$1.state;
var G__293942 = a;
var G__293943 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__293941,G__293942,G__293943) : f.call(null,G__293941,G__293942,G__293943));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__293939,G__293940) : cljs.core.reset_BANG_.call(null,G__293939,G__293940));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__293944 = this$__$1;
var G__293945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__293944,G__293945) : cljs.core.reset_BANG_.call(null,G__293944,G__293945));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__293946 = cljs.core.seq(self__.watches);
var chunk__293947 = null;
var count__293948 = (0);
var i__293949 = (0);
while(true){
if((i__293949 < count__293948)){
var vec__293950 = chunk__293947.cljs$core$IIndexed$_nth$arity$2(null,i__293949);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293950,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293950,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__293952 = seq__293946;
var G__293953 = chunk__293947;
var G__293954 = count__293948;
var G__293955 = (i__293949 + (1));
seq__293946 = G__293952;
chunk__293947 = G__293953;
count__293948 = G__293954;
i__293949 = G__293955;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__293946);
if(temp__4425__auto__){
var seq__293946__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__293946__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__293946__$1);
var G__293956 = cljs.core.chunk_rest(seq__293946__$1);
var G__293957 = c__5626__auto__;
var G__293958 = cljs.core.count(c__5626__auto__);
var G__293959 = (0);
seq__293946 = G__293956;
chunk__293947 = G__293957;
count__293948 = G__293958;
i__293949 = G__293959;
continue;
} else {
var vec__293951 = cljs.core.first(seq__293946__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293951,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__293951,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__293960 = cljs.core.next(seq__293946__$1);
var G__293961 = null;
var G__293962 = (0);
var G__293963 = (0);
seq__293946 = G__293960;
chunk__293947 = G__293961;
count__293948 = G__293962;
i__293949 = G__293963;
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
var G__293964__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__293964 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__293965__i = 0, G__293965__a = new Array(arguments.length -  0);
while (G__293965__i < G__293965__a.length) {G__293965__a[G__293965__i] = arguments[G__293965__i + 0]; ++G__293965__i;}
  sources = new cljs.core.IndexedSeq(G__293965__a,0);
} 
return G__293964__delegate.call(this,sources);};
G__293964.cljs$lang$maxFixedArity = 0;
G__293964.cljs$lang$applyTo = (function (arglist__293966){
var sources = cljs.core.seq(arglist__293966);
return G__293964__delegate(sources);
});
G__293964.cljs$core$IFn$_invoke$arity$variadic = G__293964__delegate;
return G__293964;
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
var bind = (function (p1__293967_SHARP_){
var _STAR_tx_STAR_293971 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__293972 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__293972) : cljs.core.atom.call(null,G__293972));
})();

try{return (p1__293967_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__293967_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__293967_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_293971;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_293973 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_293973;
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
var len__5881__auto___293981 = arguments.length;
var i__5882__auto___293982 = (0);
while(true){
if((i__5882__auto___293982 < len__5881__auto___293981)){
args__5888__auto__.push((arguments[i__5882__auto___293982]));

var G__293983 = (i__5882__auto___293982 + (1));
i__5882__auto___293982 = G__293983;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__293980 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__293980) : cljs.core.atom.call(null,G__293980));
})();
var tag_neq = ((function (olds){
return (function (p1__293974_SHARP_,p2__293975_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__293974_SHARP_,p2__293975_SHARP_),p2__293975_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__293977_SHARP_,p2__293976_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__293977_SHARP_,p2__293976_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__293984__delegate = function (rest__293978_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__293978_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__293978_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__293978_SHARP_));

return news;
};
var G__293984 = function (var_args){
var rest__293978_SHARP_ = null;
if (arguments.length > 0) {
var G__293985__i = 0, G__293985__a = new Array(arguments.length -  0);
while (G__293985__i < G__293985__a.length) {G__293985__a[G__293985__i] = arguments[G__293985__i + 0]; ++G__293985__i;}
  rest__293978_SHARP_ = new cljs.core.IndexedSeq(G__293985__a,0);
} 
return G__293984__delegate.call(this,rest__293978_SHARP_);};
G__293984.cljs$lang$maxFixedArity = 0;
G__293984.cljs$lang$applyTo = (function (arglist__293986){
var rest__293978_SHARP_ = cljs.core.seq(arglist__293986);
return G__293984__delegate(rest__293978_SHARP_);
});
G__293984.cljs$core$IFn$_invoke$arity$variadic = G__293984__delegate;
return G__293984;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq293979){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq293979));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__293987_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__293987_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__293988_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__293988_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__293995_294001 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__293996_294002 = null;
var count__293997_294003 = (0);
var i__293998_294004 = (0);
while(true){
if((i__293998_294004 < count__293997_294003)){
var i_294005 = chunk__293996_294002.cljs$core$IIndexed$_nth$arity$2(null,i__293998_294004);
var G__293999_294006 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_294005) : ith_item__$1.call(null,i_294005));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__293999_294006) : f__$1.call(null,G__293999_294006));

var G__294007 = seq__293995_294001;
var G__294008 = chunk__293996_294002;
var G__294009 = count__293997_294003;
var G__294010 = (i__293998_294004 + (1));
seq__293995_294001 = G__294007;
chunk__293996_294002 = G__294008;
count__293997_294003 = G__294009;
i__293998_294004 = G__294010;
continue;
} else {
var temp__4425__auto___294011 = cljs.core.seq(seq__293995_294001);
if(temp__4425__auto___294011){
var seq__293995_294012__$1 = temp__4425__auto___294011;
if(cljs.core.chunked_seq_QMARK_(seq__293995_294012__$1)){
var c__5626__auto___294013 = cljs.core.chunk_first(seq__293995_294012__$1);
var G__294014 = cljs.core.chunk_rest(seq__293995_294012__$1);
var G__294015 = c__5626__auto___294013;
var G__294016 = cljs.core.count(c__5626__auto___294013);
var G__294017 = (0);
seq__293995_294001 = G__294014;
chunk__293996_294002 = G__294015;
count__293997_294003 = G__294016;
i__293998_294004 = G__294017;
continue;
} else {
var i_294018 = cljs.core.first(seq__293995_294012__$1);
var G__294000_294019 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_294018) : ith_item__$1.call(null,i_294018));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__294000_294019) : f__$1.call(null,G__294000_294019));

var G__294020 = cljs.core.next(seq__293995_294012__$1);
var G__294021 = null;
var G__294022 = (0);
var G__294023 = (0);
seq__293995_294001 = G__294020;
chunk__293996_294002 = G__294021;
count__293997_294003 = G__294022;
i__293998_294004 = G__294023;
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
