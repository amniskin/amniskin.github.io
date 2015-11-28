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

var G__7186 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7184_SHARP_,p2__7185_SHARP_){
return cljs.core.assoc.call(null,p1__7184_SHARP_,p2__7185_SHARP_,p2__7185_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7186;
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
}catch (e7188){if((e7188 instanceof Error)){
var _ = e7188;
return null;
} else {
throw e7188;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7191 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7191);

return G__7191;
} else {
var G__7192 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7192));

return G__7192;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7201 = arguments.length;
var i__6062__auto___7202 = (0);
while(true){
if((i__6062__auto___7202 < len__6061__auto___7201)){
args__6068__auto__.push((arguments[i__6062__auto___7202]));

var G__7203 = (i__6062__auto___7202 + (1));
i__6062__auto___7202 = G__7203;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7195){
var vec__7196 = p__7195;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7196,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7197 = cljs.core.seq.call(null,srcs);
var chunk__7198 = null;
var count__7199 = (0);
var i__7200 = (0);
while(true){
if((i__7200 < count__7199)){
var src = cljs.core._nth.call(null,chunk__7198,i__7200);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7204 = seq__7197;
var G__7205 = chunk__7198;
var G__7206 = count__7199;
var G__7207 = (i__7200 + (1));
seq__7197 = G__7204;
chunk__7198 = G__7205;
count__7199 = G__7206;
i__7200 = G__7207;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7197);
if(temp__4425__auto__){
var seq__7197__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7197__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7197__$1);
var G__7208 = cljs.core.chunk_rest.call(null,seq__7197__$1);
var G__7209 = c__5806__auto__;
var G__7210 = cljs.core.count.call(null,c__5806__auto__);
var G__7211 = (0);
seq__7197 = G__7208;
chunk__7198 = G__7209;
count__7199 = G__7210;
i__7200 = G__7211;
continue;
} else {
var src = cljs.core.first.call(null,seq__7197__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7212 = cljs.core.next.call(null,seq__7197__$1);
var G__7213 = null;
var G__7214 = (0);
var G__7215 = (0);
seq__7197 = G__7212;
chunk__7198 = G__7213;
count__7199 = G__7214;
i__7200 = G__7215;
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

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7193){
var G__7194 = cljs.core.first.call(null,seq7193);
var seq7193__$1 = cljs.core.next.call(null,seq7193);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7194,seq7193__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7234 = arguments.length;
var i__6062__auto___7235 = (0);
while(true){
if((i__6062__auto___7235 < len__6061__auto___7234)){
args__6068__auto__.push((arguments[i__6062__auto___7235]));

var G__7236 = (i__6062__auto___7235 + (1));
i__6062__auto___7235 = G__7236;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7220){
var vec__7221 = p__7220;
var f = cljs.core.nth.call(null,vec__7221,(0),null);
var sources = cljs.core.nth.call(null,vec__7221,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7222_7237 = cljs.core.seq.call(null,this$.sources);
var chunk__7223_7238 = null;
var count__7224_7239 = (0);
var i__7225_7240 = (0);
while(true){
if((i__7225_7240 < count__7224_7239)){
var source_7241 = cljs.core._nth.call(null,chunk__7223_7238,i__7225_7240);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7241))){
source_7241.sinks = cljs.core.conj.call(null,source_7241.sinks,this$);

if((source_7241.rank > this$.rank)){
var seq__7226_7242 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7222_7237,chunk__7223_7238,count__7224_7239,i__7225_7240,source_7241,vec__7221,f,sources){
return (function (p1__7216_SHARP_){
return p1__7216_SHARP_.sinks;
});})(seq__7222_7237,chunk__7223_7238,count__7224_7239,i__7225_7240,source_7241,vec__7221,f,sources))
,source_7241));
var chunk__7227_7243 = null;
var count__7228_7244 = (0);
var i__7229_7245 = (0);
while(true){
if((i__7229_7245 < count__7228_7244)){
var dep_7246 = cljs.core._nth.call(null,chunk__7227_7243,i__7229_7245);
dep_7246.rank = tailrecursion.javelin.next_rank.call(null);

var G__7247 = seq__7226_7242;
var G__7248 = chunk__7227_7243;
var G__7249 = count__7228_7244;
var G__7250 = (i__7229_7245 + (1));
seq__7226_7242 = G__7247;
chunk__7227_7243 = G__7248;
count__7228_7244 = G__7249;
i__7229_7245 = G__7250;
continue;
} else {
var temp__4425__auto___7251 = cljs.core.seq.call(null,seq__7226_7242);
if(temp__4425__auto___7251){
var seq__7226_7252__$1 = temp__4425__auto___7251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7226_7252__$1)){
var c__5806__auto___7253 = cljs.core.chunk_first.call(null,seq__7226_7252__$1);
var G__7254 = cljs.core.chunk_rest.call(null,seq__7226_7252__$1);
var G__7255 = c__5806__auto___7253;
var G__7256 = cljs.core.count.call(null,c__5806__auto___7253);
var G__7257 = (0);
seq__7226_7242 = G__7254;
chunk__7227_7243 = G__7255;
count__7228_7244 = G__7256;
i__7229_7245 = G__7257;
continue;
} else {
var dep_7258 = cljs.core.first.call(null,seq__7226_7252__$1);
dep_7258.rank = tailrecursion.javelin.next_rank.call(null);

var G__7259 = cljs.core.next.call(null,seq__7226_7252__$1);
var G__7260 = null;
var G__7261 = (0);
var G__7262 = (0);
seq__7226_7242 = G__7259;
chunk__7227_7243 = G__7260;
count__7228_7244 = G__7261;
i__7229_7245 = G__7262;
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

var G__7263 = seq__7222_7237;
var G__7264 = chunk__7223_7238;
var G__7265 = count__7224_7239;
var G__7266 = (i__7225_7240 + (1));
seq__7222_7237 = G__7263;
chunk__7223_7238 = G__7264;
count__7224_7239 = G__7265;
i__7225_7240 = G__7266;
continue;
} else {
var temp__4425__auto___7267 = cljs.core.seq.call(null,seq__7222_7237);
if(temp__4425__auto___7267){
var seq__7222_7268__$1 = temp__4425__auto___7267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7222_7268__$1)){
var c__5806__auto___7269 = cljs.core.chunk_first.call(null,seq__7222_7268__$1);
var G__7270 = cljs.core.chunk_rest.call(null,seq__7222_7268__$1);
var G__7271 = c__5806__auto___7269;
var G__7272 = cljs.core.count.call(null,c__5806__auto___7269);
var G__7273 = (0);
seq__7222_7237 = G__7270;
chunk__7223_7238 = G__7271;
count__7224_7239 = G__7272;
i__7225_7240 = G__7273;
continue;
} else {
var source_7274 = cljs.core.first.call(null,seq__7222_7268__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7274))){
source_7274.sinks = cljs.core.conj.call(null,source_7274.sinks,this$);

if((source_7274.rank > this$.rank)){
var seq__7230_7275 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7222_7237,chunk__7223_7238,count__7224_7239,i__7225_7240,source_7274,seq__7222_7268__$1,temp__4425__auto___7267,vec__7221,f,sources){
return (function (p1__7216_SHARP_){
return p1__7216_SHARP_.sinks;
});})(seq__7222_7237,chunk__7223_7238,count__7224_7239,i__7225_7240,source_7274,seq__7222_7268__$1,temp__4425__auto___7267,vec__7221,f,sources))
,source_7274));
var chunk__7231_7276 = null;
var count__7232_7277 = (0);
var i__7233_7278 = (0);
while(true){
if((i__7233_7278 < count__7232_7277)){
var dep_7279 = cljs.core._nth.call(null,chunk__7231_7276,i__7233_7278);
dep_7279.rank = tailrecursion.javelin.next_rank.call(null);

var G__7280 = seq__7230_7275;
var G__7281 = chunk__7231_7276;
var G__7282 = count__7232_7277;
var G__7283 = (i__7233_7278 + (1));
seq__7230_7275 = G__7280;
chunk__7231_7276 = G__7281;
count__7232_7277 = G__7282;
i__7233_7278 = G__7283;
continue;
} else {
var temp__4425__auto___7284__$1 = cljs.core.seq.call(null,seq__7230_7275);
if(temp__4425__auto___7284__$1){
var seq__7230_7285__$1 = temp__4425__auto___7284__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7230_7285__$1)){
var c__5806__auto___7286 = cljs.core.chunk_first.call(null,seq__7230_7285__$1);
var G__7287 = cljs.core.chunk_rest.call(null,seq__7230_7285__$1);
var G__7288 = c__5806__auto___7286;
var G__7289 = cljs.core.count.call(null,c__5806__auto___7286);
var G__7290 = (0);
seq__7230_7275 = G__7287;
chunk__7231_7276 = G__7288;
count__7232_7277 = G__7289;
i__7233_7278 = G__7290;
continue;
} else {
var dep_7291 = cljs.core.first.call(null,seq__7230_7285__$1);
dep_7291.rank = tailrecursion.javelin.next_rank.call(null);

var G__7292 = cljs.core.next.call(null,seq__7230_7285__$1);
var G__7293 = null;
var G__7294 = (0);
var G__7295 = (0);
seq__7230_7275 = G__7292;
chunk__7231_7276 = G__7293;
count__7232_7277 = G__7294;
i__7233_7278 = G__7295;
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

var G__7296 = cljs.core.next.call(null,seq__7222_7268__$1);
var G__7297 = null;
var G__7298 = (0);
var G__7299 = (0);
seq__7222_7237 = G__7296;
chunk__7223_7238 = G__7297;
count__7224_7239 = G__7298;
i__7225_7240 = G__7299;
continue;
}
} else {
}
}
break;
}

var compute_7300 = ((function (vec__7221,f,sources){
return (function (p1__7217_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7217_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7217_SHARP_)));
});})(vec__7221,f,sources))
;
this$.thunk = ((function (compute_7300,vec__7221,f,sources){
return (function (){
return this$.state = compute_7300.call(null,this$.sources);
});})(compute_7300,vec__7221,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7218){
var G__7219 = cljs.core.first.call(null,seq7218);
var seq7218__$1 = cljs.core.next.call(null,seq7218);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7219,seq7218__$1);
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
var seq__7301 = cljs.core.seq.call(null,self__.watches);
var chunk__7302 = null;
var count__7303 = (0);
var i__7304 = (0);
while(true){
if((i__7304 < count__7303)){
var vec__7305 = cljs.core._nth.call(null,chunk__7302,i__7304);
var key = cljs.core.nth.call(null,vec__7305,(0),null);
var f = cljs.core.nth.call(null,vec__7305,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7307 = seq__7301;
var G__7308 = chunk__7302;
var G__7309 = count__7303;
var G__7310 = (i__7304 + (1));
seq__7301 = G__7307;
chunk__7302 = G__7308;
count__7303 = G__7309;
i__7304 = G__7310;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7301);
if(temp__4425__auto__){
var seq__7301__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7301__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7301__$1);
var G__7311 = cljs.core.chunk_rest.call(null,seq__7301__$1);
var G__7312 = c__5806__auto__;
var G__7313 = cljs.core.count.call(null,c__5806__auto__);
var G__7314 = (0);
seq__7301 = G__7311;
chunk__7302 = G__7312;
count__7303 = G__7313;
i__7304 = G__7314;
continue;
} else {
var vec__7306 = cljs.core.first.call(null,seq__7301__$1);
var key = cljs.core.nth.call(null,vec__7306,(0),null);
var f = cljs.core.nth.call(null,vec__7306,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7315 = cljs.core.next.call(null,seq__7301__$1);
var G__7316 = null;
var G__7317 = (0);
var G__7318 = (0);
seq__7301 = G__7315;
chunk__7302 = G__7316;
count__7303 = G__7317;
i__7304 = G__7318;
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
var G__7319__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__7319 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__7320__i = 0, G__7320__a = new Array(arguments.length -  0);
while (G__7320__i < G__7320__a.length) {G__7320__a[G__7320__i] = arguments[G__7320__i + 0]; ++G__7320__i;}
  sources = new cljs.core.IndexedSeq(G__7320__a,0);
} 
return G__7319__delegate.call(this,sources);};
G__7319.cljs$lang$maxFixedArity = 0;
G__7319.cljs$lang$applyTo = (function (arglist__7321){
var sources = cljs.core.seq(arglist__7321);
return G__7319__delegate(sources);
});
G__7319.cljs$core$IFn$_invoke$arity$variadic = G__7319__delegate;
return G__7319;
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
var bind = (function (p1__7322_SHARP_){
var _STAR_tx_STAR_7325 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__7322_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7325;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_7326 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7326;
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
var len__6061__auto___7333 = arguments.length;
var i__6062__auto___7334 = (0);
while(true){
if((i__6062__auto___7334 < len__6061__auto___7333)){
args__6068__auto__.push((arguments[i__6062__auto___7334]));

var G__7335 = (i__6062__auto___7334 + (1));
i__6062__auto___7334 = G__7335;
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
return (function (p1__7327_SHARP_,p2__7328_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7327_SHARP_,p2__7328_SHARP_),p2__7328_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__7330_SHARP_,p2__7329_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7330_SHARP_,p2__7329_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7336__delegate = function (rest__7331_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7331_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__7331_SHARP_);

return news;
};
var G__7336 = function (var_args){
var rest__7331_SHARP_ = null;
if (arguments.length > 0) {
var G__7337__i = 0, G__7337__a = new Array(arguments.length -  0);
while (G__7337__i < G__7337__a.length) {G__7337__a[G__7337__i] = arguments[G__7337__i + 0]; ++G__7337__i;}
  rest__7331_SHARP_ = new cljs.core.IndexedSeq(G__7337__a,0);
} 
return G__7336__delegate.call(this,rest__7331_SHARP_);};
G__7336.cljs$lang$maxFixedArity = 0;
G__7336.cljs$lang$applyTo = (function (arglist__7338){
var rest__7331_SHARP_ = cljs.core.seq(arglist__7338);
return G__7336__delegate(rest__7331_SHARP_);
});
G__7336.cljs$core$IFn$_invoke$arity$variadic = G__7336__delegate;
return G__7336;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq7332){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7332));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__7339_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__7339_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__7340_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__7340_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__7345_7349 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__7346_7350 = null;
var count__7347_7351 = (0);
var i__7348_7352 = (0);
while(true){
if((i__7348_7352 < count__7347_7351)){
var i_7353 = cljs.core._nth.call(null,chunk__7346_7350,i__7348_7352);
f__$1.call(null,ith_item__$1.call(null,i_7353));

var G__7354 = seq__7345_7349;
var G__7355 = chunk__7346_7350;
var G__7356 = count__7347_7351;
var G__7357 = (i__7348_7352 + (1));
seq__7345_7349 = G__7354;
chunk__7346_7350 = G__7355;
count__7347_7351 = G__7356;
i__7348_7352 = G__7357;
continue;
} else {
var temp__4425__auto___7358 = cljs.core.seq.call(null,seq__7345_7349);
if(temp__4425__auto___7358){
var seq__7345_7359__$1 = temp__4425__auto___7358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7345_7359__$1)){
var c__5806__auto___7360 = cljs.core.chunk_first.call(null,seq__7345_7359__$1);
var G__7361 = cljs.core.chunk_rest.call(null,seq__7345_7359__$1);
var G__7362 = c__5806__auto___7360;
var G__7363 = cljs.core.count.call(null,c__5806__auto___7360);
var G__7364 = (0);
seq__7345_7349 = G__7361;
chunk__7346_7350 = G__7362;
count__7347_7351 = G__7363;
i__7348_7352 = G__7364;
continue;
} else {
var i_7365 = cljs.core.first.call(null,seq__7345_7359__$1);
f__$1.call(null,ith_item__$1.call(null,i_7365));

var G__7366 = cljs.core.next.call(null,seq__7345_7359__$1);
var G__7367 = null;
var G__7368 = (0);
var G__7369 = (0);
seq__7345_7349 = G__7366;
chunk__7346_7350 = G__7367;
count__7347_7351 = G__7368;
i__7348_7352 = G__7369;
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