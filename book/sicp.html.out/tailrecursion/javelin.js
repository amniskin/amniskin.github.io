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

var G__252149 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__252147_SHARP_,p2__252148_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__252147_SHARP_,p2__252148_SHARP_,p2__252148_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__252149;
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
}catch (e252151){if((e252151 instanceof Error)){
var _ = e252151;
return null;
} else {
throw e252151;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__252154 = c;
tailrecursion.javelin.add_sync_BANG_(G__252154);

return G__252154;
} else {
var G__252155 = c;
tailrecursion.javelin.propagate_STAR_(tailrecursion.javelin.cell__GT_pm(G__252155));

return G__252155;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___252164 = arguments.length;
var i__6062__auto___252165 = (0);
while(true){
if((i__6062__auto___252165 < len__6061__auto___252164)){
args__6068__auto__.push((arguments[i__6062__auto___252165]));

var G__252166 = (i__6062__auto___252165 + (1));
i__6062__auto___252165 = G__252166;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__252158){
var vec__252159 = p__252158;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252159,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__252160 = cljs.core.seq(srcs);
var chunk__252161 = null;
var count__252162 = (0);
var i__252163 = (0);
while(true){
if((i__252163 < count__252162)){
var src = chunk__252161.cljs$core$IIndexed$_nth$arity$2(null,i__252163);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__252167 = seq__252160;
var G__252168 = chunk__252161;
var G__252169 = count__252162;
var G__252170 = (i__252163 + (1));
seq__252160 = G__252167;
chunk__252161 = G__252168;
count__252162 = G__252169;
i__252163 = G__252170;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__252160);
if(temp__4425__auto__){
var seq__252160__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__252160__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__252160__$1);
var G__252171 = cljs.core.chunk_rest(seq__252160__$1);
var G__252172 = c__5806__auto__;
var G__252173 = cljs.core.count(c__5806__auto__);
var G__252174 = (0);
seq__252160 = G__252171;
chunk__252161 = G__252172;
count__252162 = G__252173;
i__252163 = G__252174;
continue;
} else {
var src = cljs.core.first(seq__252160__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : tailrecursion.javelin.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__252175 = cljs.core.next(seq__252160__$1);
var G__252176 = null;
var G__252177 = (0);
var G__252178 = (0);
seq__252160 = G__252175;
chunk__252161 = G__252176;
count__252162 = G__252177;
i__252163 = G__252178;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq252156){
var G__252157 = cljs.core.first(seq252156);
var seq252156__$1 = cljs.core.next(seq252156);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__252157,seq252156__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___252197 = arguments.length;
var i__6062__auto___252198 = (0);
while(true){
if((i__6062__auto___252198 < len__6061__auto___252197)){
args__6068__auto__.push((arguments[i__6062__auto___252198]));

var G__252199 = (i__6062__auto___252198 + (1));
i__6062__auto___252198 = G__252199;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__252183){
var vec__252184 = p__252183;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252184,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252184,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__252185_252200 = cljs.core.seq(this$.sources);
var chunk__252186_252201 = null;
var count__252187_252202 = (0);
var i__252188_252203 = (0);
while(true){
if((i__252188_252203 < count__252187_252202)){
var source_252204 = chunk__252186_252201.cljs$core$IIndexed$_nth$arity$2(null,i__252188_252203);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_252204) : tailrecursion.javelin.cell_QMARK_.call(null,source_252204)))){
source_252204.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_252204.sinks,this$);

if((source_252204.rank > this$.rank)){
var seq__252189_252205 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__252185_252200,chunk__252186_252201,count__252187_252202,i__252188_252203,source_252204,vec__252184,f,sources){
return (function (p1__252179_SHARP_){
return p1__252179_SHARP_.sinks;
});})(seq__252185_252200,chunk__252186_252201,count__252187_252202,i__252188_252203,source_252204,vec__252184,f,sources))
,source_252204));
var chunk__252190_252206 = null;
var count__252191_252207 = (0);
var i__252192_252208 = (0);
while(true){
if((i__252192_252208 < count__252191_252207)){
var dep_252209 = chunk__252190_252206.cljs$core$IIndexed$_nth$arity$2(null,i__252192_252208);
dep_252209.rank = tailrecursion.javelin.next_rank();

var G__252210 = seq__252189_252205;
var G__252211 = chunk__252190_252206;
var G__252212 = count__252191_252207;
var G__252213 = (i__252192_252208 + (1));
seq__252189_252205 = G__252210;
chunk__252190_252206 = G__252211;
count__252191_252207 = G__252212;
i__252192_252208 = G__252213;
continue;
} else {
var temp__4425__auto___252214 = cljs.core.seq(seq__252189_252205);
if(temp__4425__auto___252214){
var seq__252189_252215__$1 = temp__4425__auto___252214;
if(cljs.core.chunked_seq_QMARK_(seq__252189_252215__$1)){
var c__5806__auto___252216 = cljs.core.chunk_first(seq__252189_252215__$1);
var G__252217 = cljs.core.chunk_rest(seq__252189_252215__$1);
var G__252218 = c__5806__auto___252216;
var G__252219 = cljs.core.count(c__5806__auto___252216);
var G__252220 = (0);
seq__252189_252205 = G__252217;
chunk__252190_252206 = G__252218;
count__252191_252207 = G__252219;
i__252192_252208 = G__252220;
continue;
} else {
var dep_252221 = cljs.core.first(seq__252189_252215__$1);
dep_252221.rank = tailrecursion.javelin.next_rank();

var G__252222 = cljs.core.next(seq__252189_252215__$1);
var G__252223 = null;
var G__252224 = (0);
var G__252225 = (0);
seq__252189_252205 = G__252222;
chunk__252190_252206 = G__252223;
count__252191_252207 = G__252224;
i__252192_252208 = G__252225;
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

var G__252226 = seq__252185_252200;
var G__252227 = chunk__252186_252201;
var G__252228 = count__252187_252202;
var G__252229 = (i__252188_252203 + (1));
seq__252185_252200 = G__252226;
chunk__252186_252201 = G__252227;
count__252187_252202 = G__252228;
i__252188_252203 = G__252229;
continue;
} else {
var temp__4425__auto___252230 = cljs.core.seq(seq__252185_252200);
if(temp__4425__auto___252230){
var seq__252185_252231__$1 = temp__4425__auto___252230;
if(cljs.core.chunked_seq_QMARK_(seq__252185_252231__$1)){
var c__5806__auto___252232 = cljs.core.chunk_first(seq__252185_252231__$1);
var G__252233 = cljs.core.chunk_rest(seq__252185_252231__$1);
var G__252234 = c__5806__auto___252232;
var G__252235 = cljs.core.count(c__5806__auto___252232);
var G__252236 = (0);
seq__252185_252200 = G__252233;
chunk__252186_252201 = G__252234;
count__252187_252202 = G__252235;
i__252188_252203 = G__252236;
continue;
} else {
var source_252237 = cljs.core.first(seq__252185_252231__$1);
if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_252237) : tailrecursion.javelin.cell_QMARK_.call(null,source_252237)))){
source_252237.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_252237.sinks,this$);

if((source_252237.rank > this$.rank)){
var seq__252193_252238 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__252185_252200,chunk__252186_252201,count__252187_252202,i__252188_252203,source_252237,seq__252185_252231__$1,temp__4425__auto___252230,vec__252184,f,sources){
return (function (p1__252179_SHARP_){
return p1__252179_SHARP_.sinks;
});})(seq__252185_252200,chunk__252186_252201,count__252187_252202,i__252188_252203,source_252237,seq__252185_252231__$1,temp__4425__auto___252230,vec__252184,f,sources))
,source_252237));
var chunk__252194_252239 = null;
var count__252195_252240 = (0);
var i__252196_252241 = (0);
while(true){
if((i__252196_252241 < count__252195_252240)){
var dep_252242 = chunk__252194_252239.cljs$core$IIndexed$_nth$arity$2(null,i__252196_252241);
dep_252242.rank = tailrecursion.javelin.next_rank();

var G__252243 = seq__252193_252238;
var G__252244 = chunk__252194_252239;
var G__252245 = count__252195_252240;
var G__252246 = (i__252196_252241 + (1));
seq__252193_252238 = G__252243;
chunk__252194_252239 = G__252244;
count__252195_252240 = G__252245;
i__252196_252241 = G__252246;
continue;
} else {
var temp__4425__auto___252247__$1 = cljs.core.seq(seq__252193_252238);
if(temp__4425__auto___252247__$1){
var seq__252193_252248__$1 = temp__4425__auto___252247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__252193_252248__$1)){
var c__5806__auto___252249 = cljs.core.chunk_first(seq__252193_252248__$1);
var G__252250 = cljs.core.chunk_rest(seq__252193_252248__$1);
var G__252251 = c__5806__auto___252249;
var G__252252 = cljs.core.count(c__5806__auto___252249);
var G__252253 = (0);
seq__252193_252238 = G__252250;
chunk__252194_252239 = G__252251;
count__252195_252240 = G__252252;
i__252196_252241 = G__252253;
continue;
} else {
var dep_252254 = cljs.core.first(seq__252193_252248__$1);
dep_252254.rank = tailrecursion.javelin.next_rank();

var G__252255 = cljs.core.next(seq__252193_252248__$1);
var G__252256 = null;
var G__252257 = (0);
var G__252258 = (0);
seq__252193_252238 = G__252255;
chunk__252194_252239 = G__252256;
count__252195_252240 = G__252257;
i__252196_252241 = G__252258;
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

var G__252259 = cljs.core.next(seq__252185_252231__$1);
var G__252260 = null;
var G__252261 = (0);
var G__252262 = (0);
seq__252185_252200 = G__252259;
chunk__252186_252201 = G__252260;
count__252187_252202 = G__252261;
i__252188_252203 = G__252262;
continue;
}
} else {
}
}
break;
}

var compute_252263 = ((function (vec__252184,f,sources){
return (function (p1__252180_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__252180_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__252180_SHARP_)));
});})(vec__252184,f,sources))
;
this$.thunk = ((function (compute_252263,vec__252184,f,sources){
return (function (){
return this$.state = compute_252263(this$.sources);
});})(compute_252263,vec__252184,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_(this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq252181){
var G__252182 = cljs.core.first(seq252181);
var seq252181__$1 = cljs.core.next(seq252181);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__252182,seq252181__$1);
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
var G__252265 = this$__$1;
var G__252266 = (function (){var G__252267 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__252267) : f.call(null,G__252267));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__252265,G__252266) : cljs.core.reset_BANG_.call(null,G__252265,G__252266));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__252270 = this$__$1;
var G__252271 = (function (){var G__252272 = this$__$1.state;
var G__252273 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__252272,G__252273) : f.call(null,G__252272,G__252273));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__252270,G__252271) : cljs.core.reset_BANG_.call(null,G__252270,G__252271));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__252277 = this$__$1;
var G__252278 = (function (){var G__252279 = this$__$1.state;
var G__252280 = a;
var G__252281 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__252279,G__252280,G__252281) : f.call(null,G__252279,G__252280,G__252281));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__252277,G__252278) : cljs.core.reset_BANG_.call(null,G__252277,G__252278));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__252282 = this$__$1;
var G__252283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__252282,G__252283) : cljs.core.reset_BANG_.call(null,G__252282,G__252283));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__252284 = cljs.core.seq(self__.watches);
var chunk__252285 = null;
var count__252286 = (0);
var i__252287 = (0);
while(true){
if((i__252287 < count__252286)){
var vec__252288 = chunk__252285.cljs$core$IIndexed$_nth$arity$2(null,i__252287);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252288,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252288,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__252290 = seq__252284;
var G__252291 = chunk__252285;
var G__252292 = count__252286;
var G__252293 = (i__252287 + (1));
seq__252284 = G__252290;
chunk__252285 = G__252291;
count__252286 = G__252292;
i__252287 = G__252293;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__252284);
if(temp__4425__auto__){
var seq__252284__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__252284__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__252284__$1);
var G__252294 = cljs.core.chunk_rest(seq__252284__$1);
var G__252295 = c__5806__auto__;
var G__252296 = cljs.core.count(c__5806__auto__);
var G__252297 = (0);
seq__252284 = G__252294;
chunk__252285 = G__252295;
count__252286 = G__252296;
i__252287 = G__252297;
continue;
} else {
var vec__252289 = cljs.core.first(seq__252284__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252289,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__252289,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__252298 = cljs.core.next(seq__252284__$1);
var G__252299 = null;
var G__252300 = (0);
var G__252301 = (0);
seq__252284 = G__252298;
chunk__252285 = G__252299;
count__252286 = G__252300;
i__252287 = G__252301;
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
var G__252302__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tailrecursion$javelin_SLASH_none) : tailrecursion.javelin.cell.call(null,cljs.core.cst$kw$tailrecursion$javelin_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__252302 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__252303__i = 0, G__252303__a = new Array(arguments.length -  0);
while (G__252303__i < G__252303__a.length) {G__252303__a[G__252303__i] = arguments[G__252303__i + 0]; ++G__252303__i;}
  sources = new cljs.core.IndexedSeq(G__252303__a,0);
} 
return G__252302__delegate.call(this,sources);};
G__252302.cljs$lang$maxFixedArity = 0;
G__252302.cljs$lang$applyTo = (function (arglist__252304){
var sources = cljs.core.seq(arglist__252304);
return G__252302__delegate(sources);
});
G__252302.cljs$core$IFn$_invoke$arity$variadic = G__252302__delegate;
return G__252302;
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
var bind = (function (p1__252305_SHARP_){
var _STAR_tx_STAR_252309 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = (function (){var G__252310 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__252310) : cljs.core.atom.call(null,G__252310));
})();

try{return (p1__252305_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__252305_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__252305_SHARP_.call(null));
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_252309;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tailrecursion.javelin._STAR_tx_STAR_) : cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_));
var _STAR_tx_STAR_252311 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_(tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_252311;
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
var len__6061__auto___252319 = arguments.length;
var i__6062__auto___252320 = (0);
while(true){
if((i__6062__auto___252320 < len__6061__auto___252319)){
args__6068__auto__.push((arguments[i__6062__auto___252320]));

var G__252321 = (i__6062__auto___252320 + (1));
i__6062__auto___252320 = G__252321;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__252318 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$tailrecursion$javelin_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__252318) : cljs.core.atom.call(null,G__252318));
})();
var tag_neq = ((function (olds){
return (function (p1__252312_SHARP_,p2__252313_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__252312_SHARP_,p2__252313_SHARP_),p2__252313_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__252315_SHARP_,p2__252314_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__252315_SHARP_,p2__252314_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__252322__delegate = function (rest__252316_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__252316_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__252316_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__252316_SHARP_));

return news;
};
var G__252322 = function (var_args){
var rest__252316_SHARP_ = null;
if (arguments.length > 0) {
var G__252323__i = 0, G__252323__a = new Array(arguments.length -  0);
while (G__252323__i < G__252323__a.length) {G__252323__a[G__252323__i] = arguments[G__252323__i + 0]; ++G__252323__i;}
  rest__252316_SHARP_ = new cljs.core.IndexedSeq(G__252323__a,0);
} 
return G__252322__delegate.call(this,rest__252316_SHARP_);};
G__252322.cljs$lang$maxFixedArity = 0;
G__252322.cljs$lang$applyTo = (function (arglist__252324){
var rest__252316_SHARP_ = cljs.core.seq(arglist__252324);
return G__252322__delegate(rest__252316_SHARP_);
});
G__252322.cljs$core$IFn$_invoke$arity$variadic = G__252322__delegate;
return G__252322;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.formula(proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq252317){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq252317));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__252325_SHARP_){
return tailrecursion.javelin.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__252325_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell((0));
var cur_count = tailrecursion.javelin.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__252326_SHARP_){
return tailrecursion.javelin.formula(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__252326_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__252333_252339 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__252334_252340 = null;
var count__252335_252341 = (0);
var i__252336_252342 = (0);
while(true){
if((i__252336_252342 < count__252335_252341)){
var i_252343 = chunk__252334_252340.cljs$core$IIndexed$_nth$arity$2(null,i__252336_252342);
var G__252337_252344 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_252343) : ith_item__$1.call(null,i_252343));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__252337_252344) : f__$1.call(null,G__252337_252344));

var G__252345 = seq__252333_252339;
var G__252346 = chunk__252334_252340;
var G__252347 = count__252335_252341;
var G__252348 = (i__252336_252342 + (1));
seq__252333_252339 = G__252345;
chunk__252334_252340 = G__252346;
count__252335_252341 = G__252347;
i__252336_252342 = G__252348;
continue;
} else {
var temp__4425__auto___252349 = cljs.core.seq(seq__252333_252339);
if(temp__4425__auto___252349){
var seq__252333_252350__$1 = temp__4425__auto___252349;
if(cljs.core.chunked_seq_QMARK_(seq__252333_252350__$1)){
var c__5806__auto___252351 = cljs.core.chunk_first(seq__252333_252350__$1);
var G__252352 = cljs.core.chunk_rest(seq__252333_252350__$1);
var G__252353 = c__5806__auto___252351;
var G__252354 = cljs.core.count(c__5806__auto___252351);
var G__252355 = (0);
seq__252333_252339 = G__252352;
chunk__252334_252340 = G__252353;
count__252335_252341 = G__252354;
i__252336_252342 = G__252355;
continue;
} else {
var i_252356 = cljs.core.first(seq__252333_252350__$1);
var G__252338_252357 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_252356) : ith_item__$1.call(null,i_252356));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__252338_252357) : f__$1.call(null,G__252338_252357));

var G__252358 = cljs.core.next(seq__252333_252350__$1);
var G__252359 = null;
var G__252360 = (0);
var G__252361 = (0);
seq__252333_252339 = G__252358;
chunk__252334_252340 = G__252359;
count__252335_252341 = G__252360;
i__252336_252342 = G__252361;
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
