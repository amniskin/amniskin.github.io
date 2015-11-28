// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__5775__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__14508(s__14509){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__14509__$1 = s__14509;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14509__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__14515 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__14515,(0),null);
var item_set = cljs.core.nth.call(null,vec__14515,(1),null);
var iterys__5771__auto__ = ((function (s__14509__$1,vec__14515,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__14508_$_iter__14510(s__14511){
return (new cljs.core.LazySeq(null,((function (s__14509__$1,vec__14515,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__14511__$1 = s__14511;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__14511__$1);
if(temp__4425__auto____$1){
var s__14511__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14511__$2)){
var c__5773__auto__ = cljs.core.chunk_first.call(null,s__14511__$2);
var size__5774__auto__ = cljs.core.count.call(null,c__5773__auto__);
var b__14513 = cljs.core.chunk_buffer.call(null,size__5774__auto__);
if((function (){var i__14512 = (0);
while(true){
if((i__14512 < size__5774__auto__)){
var item = cljs.core._nth.call(null,c__5773__auto__,i__14512);
cljs.core.chunk_append.call(null,b__14513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__14532 = (i__14512 + (1));
i__14512 = G__14532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),tailrecursion$priority_map$iter__14508_$_iter__14510.call(null,cljs.core.chunk_rest.call(null,s__14511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14513),null);
}
} else {
var item = cljs.core.first.call(null,s__14511__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__14508_$_iter__14510.call(null,cljs.core.rest.call(null,s__14511__$2)));
}
} else {
return null;
}
break;
}
});})(s__14509__$1,vec__14515,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__14509__$1,vec__14515,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__5772__auto__ = cljs.core.seq.call(null,iterys__5771__auto__.call(null,item_set));
if(fs__5772__auto__){
return cljs.core.concat.call(null,fs__5772__auto__,tailrecursion$priority_map$iter__14508.call(null,cljs.core.rest.call(null,s__14509__$1)));
} else {
var G__14533 = cljs.core.rest.call(null,s__14509__$1);
s__14509__$1 = G__14533;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__5775__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5438__auto__ = self__.__hash;
if(!((h__5438__auto__ == null))){
return h__5438__auto__;
} else {
var h__5438__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__5438__auto____$1;

return h__5438__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__5775__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__14516(s__14517){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__14517__$1 = s__14517;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14517__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__14523 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__14523,(0),null);
var item_set = cljs.core.nth.call(null,vec__14523,(1),null);
var iterys__5771__auto__ = ((function (s__14517__$1,vec__14523,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__14516_$_iter__14518(s__14519){
return (new cljs.core.LazySeq(null,((function (s__14517__$1,vec__14523,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__14519__$1 = s__14519;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__14519__$1);
if(temp__4425__auto____$1){
var s__14519__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14519__$2)){
var c__5773__auto__ = cljs.core.chunk_first.call(null,s__14519__$2);
var size__5774__auto__ = cljs.core.count.call(null,c__5773__auto__);
var b__14521 = cljs.core.chunk_buffer.call(null,size__5774__auto__);
if((function (){var i__14520 = (0);
while(true){
if((i__14520 < size__5774__auto__)){
var item = cljs.core._nth.call(null,c__5773__auto__,i__14520);
cljs.core.chunk_append.call(null,b__14521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__14534 = (i__14520 + (1));
i__14520 = G__14534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14521),tailrecursion$priority_map$iter__14516_$_iter__14518.call(null,cljs.core.chunk_rest.call(null,s__14519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14521),null);
}
} else {
var item = cljs.core.first.call(null,s__14519__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__14516_$_iter__14518.call(null,cljs.core.rest.call(null,s__14519__$2)));
}
} else {
return null;
}
break;
}
});})(s__14517__$1,vec__14523,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__14517__$1,vec__14523,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__5772__auto__ = cljs.core.seq.call(null,iterys__5771__auto__.call(null,item_set));
if(fs__5772__auto__){
return cljs.core.concat.call(null,fs__5772__auto__,tailrecursion$priority_map$iter__14516.call(null,cljs.core.rest.call(null,s__14517__$1)));
} else {
var G__14535 = cljs.core.rest.call(null,s__14517__$1);
s__14517__$1 = G__14535;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5775__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__14536 = null;
var G__14536__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__14536__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__14536 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__14536__2.call(this,self__,item);
case 3:
return G__14536__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14536.cljs$core$IFn$_invoke$arity$2 = G__14536__2;
G__14536.cljs$core$IFn$_invoke$arity$3 = G__14536__3;
return G__14536;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args14507){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14507)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__5775__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__14524(s__14525){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__14525__$1 = s__14525;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14525__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__14531 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__14531,(0),null);
var item_set = cljs.core.nth.call(null,vec__14531,(1),null);
var iterys__5771__auto__ = ((function (s__14525__$1,vec__14531,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__14524_$_iter__14526(s__14527){
return (new cljs.core.LazySeq(null,((function (s__14525__$1,vec__14531,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__14527__$1 = s__14527;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__14527__$1);
if(temp__4425__auto____$1){
var s__14527__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14527__$2)){
var c__5773__auto__ = cljs.core.chunk_first.call(null,s__14527__$2);
var size__5774__auto__ = cljs.core.count.call(null,c__5773__auto__);
var b__14529 = cljs.core.chunk_buffer.call(null,size__5774__auto__);
if((function (){var i__14528 = (0);
while(true){
if((i__14528 < size__5774__auto__)){
var item = cljs.core._nth.call(null,c__5773__auto__,i__14528);
cljs.core.chunk_append.call(null,b__14529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__14537 = (i__14528 + (1));
i__14528 = G__14537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14529),tailrecursion$priority_map$iter__14524_$_iter__14526.call(null,cljs.core.chunk_rest.call(null,s__14527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14529),null);
}
} else {
var item = cljs.core.first.call(null,s__14527__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__14524_$_iter__14526.call(null,cljs.core.rest.call(null,s__14527__$2)));
}
} else {
return null;
}
break;
}
});})(s__14525__$1,vec__14531,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__14525__$1,vec__14531,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__5772__auto__ = cljs.core.seq.call(null,iterys__5771__auto__.call(null,item_set));
if(fs__5772__auto__){
return cljs.core.concat.call(null,fs__5772__auto__,tailrecursion$priority_map$iter__14524.call(null,cljs.core.rest.call(null,s__14525__$1)));
} else {
var G__14538 = cljs.core.rest.call(null,s__14525__$1);
s__14525__$1 = G__14538;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__5775__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write.call(null,writer__5602__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 * Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(){
var args__6068__auto__ = [];
var len__6061__auto___14540 = arguments.length;
var i__6062__auto___14541 = (0);
while(true){
if((i__6062__auto___14541 < len__6061__auto___14540)){
args__6068__auto__.push((arguments[i__6062__auto___14541]));

var G__14542 = (i__6062__auto___14541 + (1));
i__6062__auto___14541 = G__14542;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__14543 = cljs.core.nnext.call(null,in$);
var G__14544 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14543;
out = G__14544;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq14539){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14539));
});
/**
 * keyval => key val
 * Returns a new priority map with supplied
 * mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(){
var args__6068__auto__ = [];
var len__6061__auto___14547 = arguments.length;
var i__6062__auto___14548 = (0);
while(true){
if((i__6062__auto___14548 < len__6061__auto___14547)){
args__6068__auto__.push((arguments[i__6062__auto___14548]));

var G__14549 = (i__6062__auto___14548 + (1));
i__6062__auto___14548 = G__14549;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__14550 = cljs.core.nnext.call(null,in$);
var G__14551 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__14550;
out = G__14551;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq14545){
var G__14546 = cljs.core.first.call(null,seq14545);
var seq14545__$1 = cljs.core.next.call(null,seq14545);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__14546,seq14545__$1);
});

//# sourceMappingURL=priority_map.js.map