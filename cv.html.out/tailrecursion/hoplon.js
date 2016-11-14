// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9787_SHARP_){
return (p1__9787_SHARP_ instanceof Node);
}):(function (p1__9788_SHARP_){
try{return p1__9788_SHARP_.nodeType;
}catch (e9789){if((e9789 instanceof Error)){
var _ = e9789;
return null;
} else {
throw e9789;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9790_SHARP_){
try{return cljs.core.vector_QMARK_(p1__9790_SHARP_);
}catch (e9791){if((e9791 instanceof Error)){
var _ = e9791;
return null;
} else {
throw e9791;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9792_SHARP_){
try{return cljs.core.seq_QMARK_(p1__9792_SHARP_);
}catch (e9793){if((e9793 instanceof Error)){
var _ = e9793;
return null;
} else {
throw e9793;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__9794_SHARP_){
if(cljs.core.truth_((function (){var and__4830__auto__ = console;
if(cljs.core.truth_(and__4830__auto__)){
return console.log;
} else {
return and__4830__auto__;
}
})())){
return console.log(p1__9794_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args9795 = [];
var len__5881__auto___9799 = arguments.length;
var i__5882__auto___9800 = (0);
while(true){
if((i__5882__auto___9800 < len__5881__auto___9799)){
args9795.push((arguments[i__5882__auto___9800]));

var G__9801 = (i__5882__auto___9800 + (1));
i__5882__auto___9800 = G__9801;
continue;
} else {
}
break;
}

var G__9797 = args9795.length;
switch (G__9797) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9795.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e9798){if((e9798 instanceof Error)){
var _ = e9798;
return not_found;
} else {
throw e9798;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args9803 = [];
var len__5881__auto___9806 = arguments.length;
var i__5882__auto___9807 = (0);
while(true){
if((i__5882__auto___9807 < len__5881__auto___9806)){
args9803.push((arguments[i__5882__auto___9807]));

var G__9808 = (i__5882__auto___9807 + (1));
i__5882__auto___9807 = G__9808;
continue;
} else {
}
break;
}

var G__9805 = args9803.length;
switch (G__9805) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9803.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__9818 = args;
var vec__9819 = G__9818;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9819,(0),null);
var args__$1 = cljs.core.nthnext(vec__9819,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__9818__$1 = G__9818;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9820 = G__9818__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9820,(0),null);
var args__$2 = cljs.core.nthnext(vec__9820,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__9821 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__9818__$1,attr__$2,kids__$2,vec__9820,arg__$1,args__$2,attr,kids,G__9818,vec__9819,arg,args__$1){
return (function (p1__9810_SHARP_,p2__9811_SHARP_,p3__9812_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__9810_SHARP_,p2__9811_SHARP_,p3__9812_SHARP_);
});})(attr__$1,kids__$1,G__9818__$1,attr__$2,kids__$2,vec__9820,arg__$1,args__$2,attr,kids,G__9818,vec__9819,arg,args__$1))
,attr__$2,arg__$1);
var G__9822 = kids__$2;
var G__9823 = args__$2;
attr__$1 = G__9821;
kids__$1 = G__9822;
G__9818__$1 = G__9823;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__9824 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__9825 = kids__$2;
var G__9826 = cljs.core.rest(args__$2);
attr__$1 = G__9824;
kids__$1 = G__9825;
G__9818__$1 = G__9826;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__9827 = attr__$2;
var G__9828 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__9829 = args__$2;
attr__$1 = G__9827;
kids__$1 = G__9828;
G__9818__$1 = G__9829;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__9830 = attr__$2;
var G__9831 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__9832 = args__$2;
attr__$1 = G__9830;
kids__$1 = G__9831;
G__9818__$1 = G__9832;
continue;
} else {
var G__9833 = attr__$2;
var G__9834 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__9835 = args__$2;
attr__$1 = G__9833;
kids__$1 = G__9834;
G__9818__$1 = G__9835;
continue;

}
}
}
}
}
break;
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function tailrecursion$hoplon$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
var G__9851_9856 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__9853_9858 = this$__$2;
var G__9854_9859 = k;
var G__9855_9860 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9853_9858,G__9854_9859,G__9855_9860) : tailrecursion.hoplon.do_BANG_.call(null,G__9853_9858,G__9854_9859,G__9855_9860));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__9837_SHARP_,p2__9838_SHARP_,p3__9839_SHARP_,p4__9836_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__9836_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__9836_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$__$2,k,v));
} else {
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,v) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,v));

}
}

return this$__$2;
});})(this$__$1))
,this$__$1,attr);
});})(this$__$1))
;
var G__9852_9857 = (0);
setTimeout(G__9851_9856,G__9852_9857);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9861_SHARP_,p2__9862_SHARP_){
return p1__9861_SHARP_.appendChild(p2__9862_SHARP_);
}):(function (p1__9863_SHARP_,p2__9864_SHARP_){
try{return p1__9863_SHARP_.appendChild(p2__9864_SHARP_);
}catch (e9865){if((e9865 instanceof Error)){
var _ = e9865;
return null;
} else {
throw e9865;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__9868 = this$;
var G__9869 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__9868,G__9869) : tailrecursion.hoplon.add_children_BANG_.call(null,G__9868,G__9869));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__9875){
var vec__9881 = p__9875;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9881,(0),null);
var _ = cljs.core.nthnext(vec__9881,(1));
var kids = vec__9881;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__9881,child_cell,_,kids){
return (function (p1__9871_SHARP_,p2__9872_SHARP_,p3__9873_SHARP_,p4__9870_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__9870_SHARP_);
});})(vec__9881,child_cell,_,kids))
);
} else {
var node_9886 = ((function (vec__9881,child_cell,_,kids){
return (function (p1__9874_SHARP_){
if(typeof p1__9874_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__9874_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__9874_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9874_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__9874_SHARP_)))){
return p1__9874_SHARP_;
} else {
return null;
}
}
});})(vec__9881,child_cell,_,kids))
;
var seq__9882_9887 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__9883_9888 = null;
var count__9884_9889 = (0);
var i__9885_9890 = (0);
while(true){
if((i__9885_9890 < count__9884_9889)){
var x_9891 = chunk__9883_9888.cljs$core$IIndexed$_nth$arity$2(null,i__9885_9890);
var temp__4425__auto___9892 = node_9886(x_9891);
if(cljs.core.truth_(temp__4425__auto___9892)){
var x_9893__$1 = temp__4425__auto___9892;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9893__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_9893__$1));
} else {
}

var G__9894 = seq__9882_9887;
var G__9895 = chunk__9883_9888;
var G__9896 = count__9884_9889;
var G__9897 = (i__9885_9890 + (1));
seq__9882_9887 = G__9894;
chunk__9883_9888 = G__9895;
count__9884_9889 = G__9896;
i__9885_9890 = G__9897;
continue;
} else {
var temp__4425__auto___9898 = cljs.core.seq(seq__9882_9887);
if(temp__4425__auto___9898){
var seq__9882_9899__$1 = temp__4425__auto___9898;
if(cljs.core.chunked_seq_QMARK_(seq__9882_9899__$1)){
var c__5626__auto___9900 = cljs.core.chunk_first(seq__9882_9899__$1);
var G__9901 = cljs.core.chunk_rest(seq__9882_9899__$1);
var G__9902 = c__5626__auto___9900;
var G__9903 = cljs.core.count(c__5626__auto___9900);
var G__9904 = (0);
seq__9882_9887 = G__9901;
chunk__9883_9888 = G__9902;
count__9884_9889 = G__9903;
i__9885_9890 = G__9904;
continue;
} else {
var x_9905 = cljs.core.first(seq__9882_9899__$1);
var temp__4425__auto___9906__$1 = node_9886(x_9905);
if(cljs.core.truth_(temp__4425__auto___9906__$1)){
var x_9907__$1 = temp__4425__auto___9906__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9907__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_9907__$1));
} else {
}

var G__9908 = cljs.core.next(seq__9882_9899__$1);
var G__9909 = null;
var G__9910 = (0);
var G__9911 = (0);
seq__9882_9887 = G__9908;
chunk__9883_9888 = G__9909;
count__9884_9889 = G__9910;
i__9885_9890 = G__9911;
continue;
}
} else {
}
}
break;
}
}

return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function tailrecursion$hoplon$on_append_BANG_(this$,f){
return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__9919__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9913 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9913,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9913,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9914 = this$;
G__9914.hoplonIFn(attr,kids);

return G__9914;
} else {
var G__9915 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9915,attr);

tailrecursion.hoplon.add_children_BANG_(G__9915,kids);

return G__9915;
}
};
var G__9919 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9920__i = 0, G__9920__a = new Array(arguments.length -  1);
while (G__9920__i < G__9920__a.length) {G__9920__a[G__9920__i] = arguments[G__9920__i + 1]; ++G__9920__i;}
  args = new cljs.core.IndexedSeq(G__9920__a,0);
} 
return G__9919__delegate.call(this,self__,args);};
G__9919.cljs$lang$maxFixedArity = 1;
G__9919.cljs$lang$applyTo = (function (arglist__9921){
var self__ = cljs.core.first(arglist__9921);
var args = cljs.core.rest(arglist__9921);
return G__9919__delegate(self__,args);
});
G__9919.cljs$core$IFn$_invoke$arity$variadic = G__9919__delegate;
return G__9919;
})()
;

Element.prototype.apply = (function (self__,args9912){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9912)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9922__delegate = function (args){
var this$ = this;
var vec__9916 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9916,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9916,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9917 = this$;
G__9917.hoplonIFn(attr,kids);

return G__9917;
} else {
var G__9918 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9918,attr);

tailrecursion.hoplon.add_children_BANG_(G__9918,kids);

return G__9918;
}
};
var G__9922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9923__i = 0, G__9923__a = new Array(arguments.length -  0);
while (G__9923__i < G__9923__a.length) {G__9923__a[G__9923__i] = arguments[G__9923__i + 0]; ++G__9923__i;}
  args = new cljs.core.IndexedSeq(G__9923__a,0);
} 
return G__9922__delegate.call(this,args);};
G__9922.cljs$lang$maxFixedArity = 0;
G__9922.cljs$lang$applyTo = (function (arglist__9924){
var args = cljs.core.seq(arglist__9924);
return G__9922__delegate(args);
});
G__9922.cljs$core$IFn$_invoke$arity$variadic = G__9922__delegate;
return G__9922;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__9935__delegate = function (args){
var vec__9930 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9930,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__9931 = cljs.core.seq(kids);
var chunk__9932 = null;
var count__9933 = (0);
var i__9934 = (0);
while(true){
if((i__9934 < count__9933)){
var k = chunk__9932.cljs$core$IIndexed$_nth$arity$2(null,i__9934);
elem.appendChild(k);

var G__9936 = seq__9931;
var G__9937 = chunk__9932;
var G__9938 = count__9933;
var G__9939 = (i__9934 + (1));
seq__9931 = G__9936;
chunk__9932 = G__9937;
count__9933 = G__9938;
i__9934 = G__9939;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9931);
if(temp__4425__auto__){
var seq__9931__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9931__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__9931__$1);
var G__9940 = cljs.core.chunk_rest(seq__9931__$1);
var G__9941 = c__5626__auto__;
var G__9942 = cljs.core.count(c__5626__auto__);
var G__9943 = (0);
seq__9931 = G__9940;
chunk__9932 = G__9941;
count__9933 = G__9942;
i__9934 = G__9943;
continue;
} else {
var k = cljs.core.first(seq__9931__$1);
elem.appendChild(k);

var G__9944 = cljs.core.next(seq__9931__$1);
var G__9945 = null;
var G__9946 = (0);
var G__9947 = (0);
seq__9931 = G__9944;
chunk__9932 = G__9945;
count__9933 = G__9946;
i__9934 = G__9947;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__9935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9948__i = 0, G__9948__a = new Array(arguments.length -  0);
while (G__9948__i < G__9948__a.length) {G__9948__a[G__9948__i] = arguments[G__9948__i + 0]; ++G__9948__i;}
  args = new cljs.core.IndexedSeq(G__9948__a,0);
} 
return G__9935__delegate.call(this,args);};
G__9935.cljs$lang$maxFixedArity = 0;
G__9935.cljs$lang$applyTo = (function (arglist__9949){
var args = cljs.core.seq(arglist__9949);
return G__9935__delegate(args);
});
G__9935.cljs$core$IFn$_invoke$arity$variadic = G__9935__delegate;
return G__9935;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__9950__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__9950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9951__i = 0, G__9951__a = new Array(arguments.length -  0);
while (G__9951__i < G__9951__a.length) {G__9951__a[G__9951__i] = arguments[G__9951__i + 0]; ++G__9951__i;}
  args = new cljs.core.IndexedSeq(G__9951__a,0);
} 
return G__9950__delegate.call(this,args);};
G__9950.cljs$lang$maxFixedArity = 0;
G__9950.cljs$lang$applyTo = (function (arglist__9952){
var args = cljs.core.seq(arglist__9952);
return G__9950__delegate(args);
});
G__9950.cljs$core$IFn$_invoke$arity$variadic = G__9950__delegate;
return G__9950;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__5888__auto__ = [];
var len__5881__auto___9955 = arguments.length;
var i__5882__auto___9956 = (0);
while(true){
if((i__5882__auto___9956 < len__5881__auto___9955)){
args__5888__auto__.push((arguments[i__5882__auto___9956]));

var G__9957 = (i__5882__auto___9956 + (1));
i__5882__auto___9956 = G__9957;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__9954 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9954,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9954,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq9953){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9953));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor("main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__9958_SHARP_){
return document.createTextNode(p1__9958_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__9959_SHARP_){
return document.createComment(p1__9959_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = cljs.core.cst$kw$tailrecursion$hoplon_SLASH__DASH__DASH__GT_;
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__9960_SHARP_){
var e = (function (){var G__9961 = p1__9960_SHARP_.target;
return jQuery(G__9961);
})();
if(cljs.core.truth_((function (){var or__4842__auto__ = e.attr("action");
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__9960_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args9962 = [];
var len__5881__auto___9965 = arguments.length;
var i__5882__auto___9966 = (0);
while(true){
if((i__5882__auto___9966 < len__5881__auto___9965)){
args9962.push((arguments[i__5882__auto___9966]));

var G__9967 = (i__5882__auto___9966 + (1));
i__5882__auto___9966 = G__9967;
continue;
} else {
}
break;
}

var G__9964 = args9962.length;
switch (G__9964) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9962.length)].join('')));

}
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.val([cljs.core.str(v)].join(''));
});

tailrecursion.hoplon.text_val_BANG_.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.check_val_BANG_ = (function tailrecursion$hoplon$check_val_BANG_(){
var args9969 = [];
var len__5881__auto___9972 = arguments.length;
var i__5882__auto___9973 = (0);
while(true){
if((i__5882__auto___9973 < len__5881__auto___9972)){
args9969.push((arguments[i__5882__auto___9973]));

var G__9974 = (i__5882__auto___9973 + (1));
i__5882__auto___9973 = G__9974;
continue;
} else {
}
break;
}

var G__9971 = args9969.length;
switch (G__9971) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9969.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__9976 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9976) : cljs.core.atom.call(null,G__9976));
})();
var prefer_table__5737__auto__ = (function (){var G__9977 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9977) : cljs.core.atom.call(null,G__9977));
})();
var method_cache__5738__auto__ = (function (){var G__9978 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9978) : cljs.core.atom.call(null,G__9978));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__9979 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9979) : cljs.core.atom.call(null,G__9979));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5740__auto__,method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__));
})();
}
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,(function (elem,key,val){
var G__9980 = elem;
var G__9981 = cljs.core.cst$kw$attr;
var G__9982 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9980,G__9981,G__9982) : tailrecursion.hoplon.do_BANG_.call(null,G__9980,G__9981,G__9982));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__9983__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9983 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9984__i = 0, G__9984__a = new Array(arguments.length -  2);
while (G__9984__i < G__9984__a.length) {G__9984__a[G__9984__i] = arguments[G__9984__i + 2]; ++G__9984__i;}
  args = new cljs.core.IndexedSeq(G__9984__a,0);
} 
return G__9983__delegate.call(this,elem,_,args);};
G__9983.cljs$lang$maxFixedArity = 2;
G__9983.cljs$lang$applyTo = (function (arglist__9985){
var elem = cljs.core.first(arglist__9985);
arglist__9985 = cljs.core.next(arglist__9985);
var _ = cljs.core.first(arglist__9985);
var args = cljs.core.rest(arglist__9985);
return G__9983__delegate(elem,_,args);
});
G__9983.cljs$core$IFn$_invoke$arity$variadic = G__9983__delegate;
return G__9983;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9986 = cljs.core.seq(kvs);
var chunk__9987 = null;
var count__9988 = (0);
var i__9989 = (0);
while(true){
if((i__9989 < count__9988)){
var vec__9990 = chunk__9987.cljs$core$IIndexed$_nth$arity$2(null,i__9989);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9990,(1),null);
var k_9992__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9992__$1);
} else {
e.attr(k_9992__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9992__$1:v));
}

var G__9993 = seq__9986;
var G__9994 = chunk__9987;
var G__9995 = count__9988;
var G__9996 = (i__9989 + (1));
seq__9986 = G__9993;
chunk__9987 = G__9994;
count__9988 = G__9995;
i__9989 = G__9996;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9986);
if(temp__4425__auto__){
var seq__9986__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9986__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__9986__$1);
var G__9997 = cljs.core.chunk_rest(seq__9986__$1);
var G__9998 = c__5626__auto__;
var G__9999 = cljs.core.count(c__5626__auto__);
var G__10000 = (0);
seq__9986 = G__9997;
chunk__9987 = G__9998;
count__9988 = G__9999;
i__9989 = G__10000;
continue;
} else {
var vec__9991 = cljs.core.first(seq__9986__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9991,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9991,(1),null);
var k_10001__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10001__$1);
} else {
e.attr(k_10001__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10001__$1:v));
}

var G__10002 = cljs.core.next(seq__9986__$1);
var G__10003 = null;
var G__10004 = (0);
var G__10005 = (0);
seq__9986 = G__10002;
chunk__9987 = G__10003;
count__9988 = G__10004;
i__9989 = G__10005;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__10006_SHARP_){
return cljs.core.zipmap(p1__10006_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__10007 = cljs.core.seq(clmap);
var chunk__10008 = null;
var count__10009 = (0);
var i__10010 = (0);
while(true){
if((i__10010 < count__10009)){
var vec__10011 = chunk__10008.cljs$core$IIndexed$_nth$arity$2(null,i__10010);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10011,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10011,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10013 = seq__10007;
var G__10014 = chunk__10008;
var G__10015 = count__10009;
var G__10016 = (i__10010 + (1));
seq__10007 = G__10013;
chunk__10008 = G__10014;
count__10009 = G__10015;
i__10010 = G__10016;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10007);
if(temp__4425__auto__){
var seq__10007__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10007__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10007__$1);
var G__10017 = cljs.core.chunk_rest(seq__10007__$1);
var G__10018 = c__5626__auto__;
var G__10019 = cljs.core.count(c__5626__auto__);
var G__10020 = (0);
seq__10007 = G__10017;
chunk__10008 = G__10018;
count__10009 = G__10019;
i__10010 = G__10020;
continue;
} else {
var vec__10012 = cljs.core.first(seq__10007__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10012,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10012,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10021 = cljs.core.next(seq__10007__$1);
var G__10022 = null;
var G__10023 = (0);
var G__10024 = (0);
seq__10007 = G__10021;
chunk__10008 = G__10022;
count__10009 = G__10023;
i__10010 = G__10024;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10025 = cljs.core.seq(kvs);
var chunk__10026 = null;
var count__10027 = (0);
var i__10028 = (0);
while(true){
if((i__10028 < count__10027)){
var vec__10029 = chunk__10026.cljs$core$IIndexed$_nth$arity$2(null,i__10028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10029,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10031 = seq__10025;
var G__10032 = chunk__10026;
var G__10033 = count__10027;
var G__10034 = (i__10028 + (1));
seq__10025 = G__10031;
chunk__10026 = G__10032;
count__10027 = G__10033;
i__10028 = G__10034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10025);
if(temp__4425__auto__){
var seq__10025__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10025__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10025__$1);
var G__10035 = cljs.core.chunk_rest(seq__10025__$1);
var G__10036 = c__5626__auto__;
var G__10037 = cljs.core.count(c__5626__auto__);
var G__10038 = (0);
seq__10025 = G__10035;
chunk__10026 = G__10036;
count__10027 = G__10037;
i__10028 = G__10038;
continue;
} else {
var vec__10030 = cljs.core.first(seq__10025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10030,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10039 = cljs.core.next(seq__10025__$1);
var G__10040 = null;
var G__10041 = (0);
var G__10042 = (0);
seq__10025 = G__10039;
chunk__10026 = G__10040;
count__10027 = G__10041;
i__10028 = G__10042;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__10043 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__10044 = (0);
return setTimeout(G__10043,G__10044);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__10045 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10045) : cljs.core.atom.call(null,G__10045));
})();
var prefer_table__5737__auto__ = (function (){var G__10046 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10046) : cljs.core.atom.call(null,G__10046));
})();
var method_cache__5738__auto__ = (function (){var G__10047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10047) : cljs.core.atom.call(null,G__10047));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__10048 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10048) : cljs.core.atom.call(null,G__10048));
})();
var hierarchy__5740__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__,hierarchy__5740__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5740__auto__,method_table__5736__auto__,prefer_table__5737__auto__,method_cache__5738__auto__,cached_hierarchy__5739__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__10049 = this$__$1.target;
return jQuery(G__10049);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.sentinel = (function tailrecursion$hoplon$sentinel(){
return document.createElement("SENTINEL");
});
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(atom,init,f){
var G__10052_10054 = init;
var G__10053_10055 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10052_10054,G__10053_10055) : f.call(null,G__10052_10054,G__10053_10055));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__10072 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10072) : cljs.core.atom.call(null,G__10072));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__10073,G__10074){
return (G__10073.cljs$core$IFn$_invoke$arity$1 ? G__10073.cljs$core$IFn$_invoke$arity$1(G__10074) : G__10073.call(null,G__10074));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__10076,G__10075){
return (G__10075.cljs$core$IFn$_invoke$arity$1 ? G__10075.cljs$core$IFn$_invoke$arity$1(G__10076) : G__10075.call(null,G__10076));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__10056_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__10079,G__10078,G__10077){
return (G__10077.cljs$core$IFn$_invoke$arity$2 ? G__10077.cljs$core$IFn$_invoke$arity$2(G__10078,G__10079) : G__10077.call(null,G__10078,G__10079));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__10056_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__10057_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__10057_SHARP_) : cljs.core.deref.call(null,p1__10057_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10057_SHARP_,cljs.core.rest);

return x;
});})(pool_size,on_deck,items_seq,cur_count,ith_item))
;
var d = tailrecursion.hoplon.sentinel();
tailrecursion.hoplon.when_dom(d,((function (d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.hoplon.do_watch(cur_count,(0),((function (p,d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_){
return (function (old,new$){
var diff = (new$ - old);
if((diff > (0))){
var seq__10080 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10081 = null;
var count__10082 = (0);
var i__10083 = (0);
while(true){
if((i__10083 < count__10082)){
var i = chunk__10081.cljs$core$IIndexed$_nth$arity$2(null,i__10083);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__10084 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10084) : tpl.call(null,G__10084));
}
})());

var G__10086 = seq__10080;
var G__10087 = chunk__10081;
var G__10088 = count__10082;
var G__10089 = (i__10083 + (1));
seq__10080 = G__10086;
chunk__10081 = G__10087;
count__10082 = G__10088;
i__10083 = G__10089;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10080);
if(temp__4425__auto__){
var seq__10080__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10080__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10080__$1);
var G__10090 = cljs.core.chunk_rest(seq__10080__$1);
var G__10091 = c__5626__auto__;
var G__10092 = cljs.core.count(c__5626__auto__);
var G__10093 = (0);
seq__10080 = G__10090;
chunk__10081 = G__10091;
count__10082 = G__10092;
i__10083 = G__10093;
continue;
} else {
var i = cljs.core.first(seq__10080__$1);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__10085 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10085) : tpl.call(null,G__10085));
}
})());

var G__10094 = cljs.core.next(seq__10080__$1);
var G__10095 = null;
var G__10096 = (0);
var G__10097 = (0);
seq__10080 = G__10094;
chunk__10081 = G__10095;
count__10082 = G__10096;
i__10083 = G__10097;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5726__auto__ = (- diff);
var ___$1 = (0);
while(true){
if((___$1 < n__5726__auto__)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,p.removeChild(p.lastChild));

var G__10098 = (___$1 + (1));
___$1 = G__10098;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(p,d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_))
);
});})(d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_))
);

return d;
});
tailrecursion.hoplon.route_cell = (function tailrecursion$hoplon$route_cell(){
var args__5888__auto__ = [];
var len__5881__auto___10107 = arguments.length;
var i__5882__auto___10108 = (0);
while(true){
if((i__5882__auto___10108 < len__5881__auto___10107)){
args__5888__auto__.push((arguments[i__5882__auto___10108]));

var G__10109 = (i__5882__auto___10108 + (1));
i__5882__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10100){
var vec__10101 = p__10100;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10101,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__10101,default$){
return (function (G__10102,G__10104,G__10103){
var or__4842__auto__ = (function (){var and__4830__auto__ = (G__10102.cljs$core$IFn$_invoke$arity$1 ? G__10102.cljs$core$IFn$_invoke$arity$1(G__10103) : G__10102.call(null,G__10103));
if(cljs.core.truth_(and__4830__auto__)){
return G__10103;
} else {
return and__4830__auto__;
}
})();
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__10104;
}
});})(c,vec__10101,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__10101,default$){
return (function (){
var G__10105 = c;
var G__10106 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10105,G__10106) : cljs.core.reset_BANG_.call(null,G__10105,G__10106));
});})(_,c,vec__10101,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq10099){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10099));
});
