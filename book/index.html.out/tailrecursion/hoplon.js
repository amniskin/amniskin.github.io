// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__8927_SHARP_){
return (p1__8927_SHARP_ instanceof Node);
}):(function (p1__8928_SHARP_){
try{return p1__8928_SHARP_.nodeType;
}catch (e8929){if((e8929 instanceof Error)){
var _ = e8929;
return null;
} else {
throw e8929;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8930_SHARP_){
try{return cljs.core.vector_QMARK_(p1__8930_SHARP_);
}catch (e8931){if((e8931 instanceof Error)){
var _ = e8931;
return null;
} else {
throw e8931;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8932_SHARP_){
try{return cljs.core.seq_QMARK_(p1__8932_SHARP_);
}catch (e8933){if((e8933 instanceof Error)){
var _ = e8933;
return null;
} else {
throw e8933;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__8934_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__8934_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args8935 = [];
var len__6061__auto___8939 = arguments.length;
var i__6062__auto___8940 = (0);
while(true){
if((i__6062__auto___8940 < len__6061__auto___8939)){
args8935.push((arguments[i__6062__auto___8940]));

var G__8941 = (i__6062__auto___8940 + (1));
i__6062__auto___8940 = G__8941;
continue;
} else {
}
break;
}

var G__8937 = args8935.length;
switch (G__8937) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8935.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e8938){if((e8938 instanceof Error)){
var _ = e8938;
return not_found;
} else {
throw e8938;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args8943 = [];
var len__6061__auto___8946 = arguments.length;
var i__6062__auto___8947 = (0);
while(true){
if((i__6062__auto___8947 < len__6061__auto___8946)){
args8943.push((arguments[i__6062__auto___8947]));

var G__8948 = (i__6062__auto___8947 + (1));
i__6062__auto___8947 = G__8948;
continue;
} else {
}
break;
}

var G__8945 = args8943.length;
switch (G__8945) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8943.length)].join('')));

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
var G__8958 = args;
var vec__8959 = G__8958;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8959,(0),null);
var args__$1 = cljs.core.nthnext(vec__8959,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8958__$1 = G__8958;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8960 = G__8958__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8960,(0),null);
var args__$2 = cljs.core.nthnext(vec__8960,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__8961 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__8958__$1,attr__$2,kids__$2,vec__8960,arg__$1,args__$2,attr,kids,G__8958,vec__8959,arg,args__$1){
return (function (p1__8950_SHARP_,p2__8951_SHARP_,p3__8952_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__8950_SHARP_,p2__8951_SHARP_,p3__8952_SHARP_);
});})(attr__$1,kids__$1,G__8958__$1,attr__$2,kids__$2,vec__8960,arg__$1,args__$2,attr,kids,G__8958,vec__8959,arg,args__$1))
,attr__$2,arg__$1);
var G__8962 = kids__$2;
var G__8963 = args__$2;
attr__$1 = G__8961;
kids__$1 = G__8962;
G__8958__$1 = G__8963;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8964 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__8965 = kids__$2;
var G__8966 = cljs.core.rest(args__$2);
attr__$1 = G__8964;
kids__$1 = G__8965;
G__8958__$1 = G__8966;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__8967 = attr__$2;
var G__8968 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8969 = args__$2;
attr__$1 = G__8967;
kids__$1 = G__8968;
G__8958__$1 = G__8969;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__8970 = attr__$2;
var G__8971 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8972 = args__$2;
attr__$1 = G__8970;
kids__$1 = G__8971;
G__8958__$1 = G__8972;
continue;
} else {
var G__8973 = attr__$2;
var G__8974 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__8975 = args__$2;
attr__$1 = G__8973;
kids__$1 = G__8974;
G__8958__$1 = G__8975;
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
var G__8991_8996 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__8993_8998 = this$__$2;
var G__8994_8999 = k;
var G__8995_9000 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__8993_8998,G__8994_8999,G__8995_9000) : tailrecursion.hoplon.do_BANG_.call(null,G__8993_8998,G__8994_8999,G__8995_9000));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__8977_SHARP_,p2__8978_SHARP_,p3__8979_SHARP_,p4__8976_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__8976_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__8976_SHARP_));
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
var G__8992_8997 = (0);
setTimeout(G__8991_8996,G__8992_8997);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9001_SHARP_,p2__9002_SHARP_){
return p1__9001_SHARP_.appendChild(p2__9002_SHARP_);
}):(function (p1__9003_SHARP_,p2__9004_SHARP_){
try{return p1__9003_SHARP_.appendChild(p2__9004_SHARP_);
}catch (e9005){if((e9005 instanceof Error)){
var _ = e9005;
return null;
} else {
throw e9005;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__9008 = this$;
var G__9009 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__9008,G__9009) : tailrecursion.hoplon.add_children_BANG_.call(null,G__9008,G__9009));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__9015){
var vec__9021 = p__9015;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9021,(0),null);
var _ = cljs.core.nthnext(vec__9021,(1));
var kids = vec__9021;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__9021,child_cell,_,kids){
return (function (p1__9011_SHARP_,p2__9012_SHARP_,p3__9013_SHARP_,p4__9010_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__9010_SHARP_);
});})(vec__9021,child_cell,_,kids))
);
} else {
var node_9026 = ((function (vec__9021,child_cell,_,kids){
return (function (p1__9014_SHARP_){
if(typeof p1__9014_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__9014_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__9014_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__9014_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__9014_SHARP_)))){
return p1__9014_SHARP_;
} else {
return null;
}
}
});})(vec__9021,child_cell,_,kids))
;
var seq__9022_9027 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__9023_9028 = null;
var count__9024_9029 = (0);
var i__9025_9030 = (0);
while(true){
if((i__9025_9030 < count__9024_9029)){
var x_9031 = chunk__9023_9028.cljs$core$IIndexed$_nth$arity$2(null,i__9025_9030);
var temp__4425__auto___9032 = node_9026(x_9031);
if(cljs.core.truth_(temp__4425__auto___9032)){
var x_9033__$1 = temp__4425__auto___9032;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9033__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_9033__$1));
} else {
}

var G__9034 = seq__9022_9027;
var G__9035 = chunk__9023_9028;
var G__9036 = count__9024_9029;
var G__9037 = (i__9025_9030 + (1));
seq__9022_9027 = G__9034;
chunk__9023_9028 = G__9035;
count__9024_9029 = G__9036;
i__9025_9030 = G__9037;
continue;
} else {
var temp__4425__auto___9038 = cljs.core.seq(seq__9022_9027);
if(temp__4425__auto___9038){
var seq__9022_9039__$1 = temp__4425__auto___9038;
if(cljs.core.chunked_seq_QMARK_(seq__9022_9039__$1)){
var c__5806__auto___9040 = cljs.core.chunk_first(seq__9022_9039__$1);
var G__9041 = cljs.core.chunk_rest(seq__9022_9039__$1);
var G__9042 = c__5806__auto___9040;
var G__9043 = cljs.core.count(c__5806__auto___9040);
var G__9044 = (0);
seq__9022_9027 = G__9041;
chunk__9023_9028 = G__9042;
count__9024_9029 = G__9043;
i__9025_9030 = G__9044;
continue;
} else {
var x_9045 = cljs.core.first(seq__9022_9039__$1);
var temp__4425__auto___9046__$1 = node_9026(x_9045);
if(cljs.core.truth_(temp__4425__auto___9046__$1)){
var x_9047__$1 = temp__4425__auto___9046__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_9047__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_9047__$1));
} else {
}

var G__9048 = cljs.core.next(seq__9022_9039__$1);
var G__9049 = null;
var G__9050 = (0);
var G__9051 = (0);
seq__9022_9027 = G__9048;
chunk__9023_9028 = G__9049;
count__9024_9029 = G__9050;
i__9025_9030 = G__9051;
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
var G__9059__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9053 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9053,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9053,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9054 = this$;
G__9054.hoplonIFn(attr,kids);

return G__9054;
} else {
var G__9055 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9055,attr);

tailrecursion.hoplon.add_children_BANG_(G__9055,kids);

return G__9055;
}
};
var G__9059 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9060__i = 0, G__9060__a = new Array(arguments.length -  1);
while (G__9060__i < G__9060__a.length) {G__9060__a[G__9060__i] = arguments[G__9060__i + 1]; ++G__9060__i;}
  args = new cljs.core.IndexedSeq(G__9060__a,0);
} 
return G__9059__delegate.call(this,self__,args);};
G__9059.cljs$lang$maxFixedArity = 1;
G__9059.cljs$lang$applyTo = (function (arglist__9061){
var self__ = cljs.core.first(arglist__9061);
var args = cljs.core.rest(arglist__9061);
return G__9059__delegate(self__,args);
});
G__9059.cljs$core$IFn$_invoke$arity$variadic = G__9059__delegate;
return G__9059;
})()
;

Element.prototype.apply = (function (self__,args9052){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9052)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9062__delegate = function (args){
var this$ = this;
var vec__9056 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9056,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__9057 = this$;
G__9057.hoplonIFn(attr,kids);

return G__9057;
} else {
var G__9058 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__9058,attr);

tailrecursion.hoplon.add_children_BANG_(G__9058,kids);

return G__9058;
}
};
var G__9062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9063__i = 0, G__9063__a = new Array(arguments.length -  0);
while (G__9063__i < G__9063__a.length) {G__9063__a[G__9063__i] = arguments[G__9063__i + 0]; ++G__9063__i;}
  args = new cljs.core.IndexedSeq(G__9063__a,0);
} 
return G__9062__delegate.call(this,args);};
G__9062.cljs$lang$maxFixedArity = 0;
G__9062.cljs$lang$applyTo = (function (arglist__9064){
var args = cljs.core.seq(arglist__9064);
return G__9062__delegate(args);
});
G__9062.cljs$core$IFn$_invoke$arity$variadic = G__9062__delegate;
return G__9062;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__9075__delegate = function (args){
var vec__9070 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9070,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__9071 = cljs.core.seq(kids);
var chunk__9072 = null;
var count__9073 = (0);
var i__9074 = (0);
while(true){
if((i__9074 < count__9073)){
var k = chunk__9072.cljs$core$IIndexed$_nth$arity$2(null,i__9074);
elem.appendChild(k);

var G__9076 = seq__9071;
var G__9077 = chunk__9072;
var G__9078 = count__9073;
var G__9079 = (i__9074 + (1));
seq__9071 = G__9076;
chunk__9072 = G__9077;
count__9073 = G__9078;
i__9074 = G__9079;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9071);
if(temp__4425__auto__){
var seq__9071__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9071__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9071__$1);
var G__9080 = cljs.core.chunk_rest(seq__9071__$1);
var G__9081 = c__5806__auto__;
var G__9082 = cljs.core.count(c__5806__auto__);
var G__9083 = (0);
seq__9071 = G__9080;
chunk__9072 = G__9081;
count__9073 = G__9082;
i__9074 = G__9083;
continue;
} else {
var k = cljs.core.first(seq__9071__$1);
elem.appendChild(k);

var G__9084 = cljs.core.next(seq__9071__$1);
var G__9085 = null;
var G__9086 = (0);
var G__9087 = (0);
seq__9071 = G__9084;
chunk__9072 = G__9085;
count__9073 = G__9086;
i__9074 = G__9087;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__9075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9088__i = 0, G__9088__a = new Array(arguments.length -  0);
while (G__9088__i < G__9088__a.length) {G__9088__a[G__9088__i] = arguments[G__9088__i + 0]; ++G__9088__i;}
  args = new cljs.core.IndexedSeq(G__9088__a,0);
} 
return G__9075__delegate.call(this,args);};
G__9075.cljs$lang$maxFixedArity = 0;
G__9075.cljs$lang$applyTo = (function (arglist__9089){
var args = cljs.core.seq(arglist__9089);
return G__9075__delegate(args);
});
G__9075.cljs$core$IFn$_invoke$arity$variadic = G__9075__delegate;
return G__9075;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__9090__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__9090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9091__i = 0, G__9091__a = new Array(arguments.length -  0);
while (G__9091__i < G__9091__a.length) {G__9091__a[G__9091__i] = arguments[G__9091__i + 0]; ++G__9091__i;}
  args = new cljs.core.IndexedSeq(G__9091__a,0);
} 
return G__9090__delegate.call(this,args);};
G__9090.cljs$lang$maxFixedArity = 0;
G__9090.cljs$lang$applyTo = (function (arglist__9092){
var args = cljs.core.seq(arglist__9092);
return G__9090__delegate(args);
});
G__9090.cljs$core$IFn$_invoke$arity$variadic = G__9090__delegate;
return G__9090;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___9095 = arguments.length;
var i__6062__auto___9096 = (0);
while(true){
if((i__6062__auto___9096 < len__6061__auto___9095)){
args__6068__auto__.push((arguments[i__6062__auto___9096]));

var G__9097 = (i__6062__auto___9096 + (1));
i__6062__auto___9096 = G__9097;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__9094 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9094,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9094,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq9093){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9093));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__9098_SHARP_){
return document.createTextNode(p1__9098_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__9099_SHARP_){
return document.createComment(p1__9099_SHARP_);
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
return jQuery("body").on("submit",(function (p1__9100_SHARP_){
var e = (function (){var G__9101 = p1__9100_SHARP_.target;
return jQuery(G__9101);
})();
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__9100_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args9102 = [];
var len__6061__auto___9105 = arguments.length;
var i__6062__auto___9106 = (0);
while(true){
if((i__6062__auto___9106 < len__6061__auto___9105)){
args9102.push((arguments[i__6062__auto___9106]));

var G__9107 = (i__6062__auto___9106 + (1));
i__6062__auto___9106 = G__9107;
continue;
} else {
}
break;
}

var G__9104 = args9102.length;
switch (G__9104) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9102.length)].join('')));

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
var args9109 = [];
var len__6061__auto___9112 = arguments.length;
var i__6062__auto___9113 = (0);
while(true){
if((i__6062__auto___9113 < len__6061__auto___9112)){
args9109.push((arguments[i__6062__auto___9113]));

var G__9114 = (i__6062__auto___9113 + (1));
i__6062__auto___9113 = G__9114;
continue;
} else {
}
break;
}

var G__9111 = args9109.length;
switch (G__9111) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9109.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9116 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9116) : cljs.core.atom.call(null,G__9116));
})();
var prefer_table__5917__auto__ = (function (){var G__9117 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9117) : cljs.core.atom.call(null,G__9117));
})();
var method_cache__5918__auto__ = (function (){var G__9118 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9118) : cljs.core.atom.call(null,G__9118));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9119 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9119) : cljs.core.atom.call(null,G__9119));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,(function (elem,key,val){
var G__9120 = elem;
var G__9121 = cljs.core.cst$kw$attr;
var G__9122 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__9120,G__9121,G__9122) : tailrecursion.hoplon.do_BANG_.call(null,G__9120,G__9121,G__9122));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__9123__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9123 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9124__i = 0, G__9124__a = new Array(arguments.length -  2);
while (G__9124__i < G__9124__a.length) {G__9124__a[G__9124__i] = arguments[G__9124__i + 2]; ++G__9124__i;}
  args = new cljs.core.IndexedSeq(G__9124__a,0);
} 
return G__9123__delegate.call(this,elem,_,args);};
G__9123.cljs$lang$maxFixedArity = 2;
G__9123.cljs$lang$applyTo = (function (arglist__9125){
var elem = cljs.core.first(arglist__9125);
arglist__9125 = cljs.core.next(arglist__9125);
var _ = cljs.core.first(arglist__9125);
var args = cljs.core.rest(arglist__9125);
return G__9123__delegate(elem,_,args);
});
G__9123.cljs$core$IFn$_invoke$arity$variadic = G__9123__delegate;
return G__9123;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__9126 = cljs.core.seq(kvs);
var chunk__9127 = null;
var count__9128 = (0);
var i__9129 = (0);
while(true){
if((i__9129 < count__9128)){
var vec__9130 = chunk__9127.cljs$core$IIndexed$_nth$arity$2(null,i__9129);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9130,(1),null);
var k_9132__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9132__$1);
} else {
e.attr(k_9132__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9132__$1:v));
}

var G__9133 = seq__9126;
var G__9134 = chunk__9127;
var G__9135 = count__9128;
var G__9136 = (i__9129 + (1));
seq__9126 = G__9133;
chunk__9127 = G__9134;
count__9128 = G__9135;
i__9129 = G__9136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9126);
if(temp__4425__auto__){
var seq__9126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9126__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9126__$1);
var G__9137 = cljs.core.chunk_rest(seq__9126__$1);
var G__9138 = c__5806__auto__;
var G__9139 = cljs.core.count(c__5806__auto__);
var G__9140 = (0);
seq__9126 = G__9137;
chunk__9127 = G__9138;
count__9128 = G__9139;
i__9129 = G__9140;
continue;
} else {
var vec__9131 = cljs.core.first(seq__9126__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9131,(1),null);
var k_9141__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_9141__$1);
} else {
e.attr(k_9141__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_9141__$1:v));
}

var G__9142 = cljs.core.next(seq__9126__$1);
var G__9143 = null;
var G__9144 = (0);
var G__9145 = (0);
seq__9126 = G__9142;
chunk__9127 = G__9143;
count__9128 = G__9144;
i__9129 = G__9145;
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
return (function (p1__9146_SHARP_){
return cljs.core.zipmap(p1__9146_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__9147 = cljs.core.seq(clmap);
var chunk__9148 = null;
var count__9149 = (0);
var i__9150 = (0);
while(true){
if((i__9150 < count__9149)){
var vec__9151 = chunk__9148.cljs$core$IIndexed$_nth$arity$2(null,i__9150);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9151,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9151,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9153 = seq__9147;
var G__9154 = chunk__9148;
var G__9155 = count__9149;
var G__9156 = (i__9150 + (1));
seq__9147 = G__9153;
chunk__9148 = G__9154;
count__9149 = G__9155;
i__9150 = G__9156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9147);
if(temp__4425__auto__){
var seq__9147__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9147__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9147__$1);
var G__9157 = cljs.core.chunk_rest(seq__9147__$1);
var G__9158 = c__5806__auto__;
var G__9159 = cljs.core.count(c__5806__auto__);
var G__9160 = (0);
seq__9147 = G__9157;
chunk__9148 = G__9158;
count__9149 = G__9159;
i__9150 = G__9160;
continue;
} else {
var vec__9152 = cljs.core.first(seq__9147__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9152,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9152,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__9161 = cljs.core.next(seq__9147__$1);
var G__9162 = null;
var G__9163 = (0);
var G__9164 = (0);
seq__9147 = G__9161;
chunk__9148 = G__9162;
count__9149 = G__9163;
i__9150 = G__9164;
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
var seq__9165 = cljs.core.seq(kvs);
var chunk__9166 = null;
var count__9167 = (0);
var i__9168 = (0);
while(true){
if((i__9168 < count__9167)){
var vec__9169 = chunk__9166.cljs$core$IIndexed$_nth$arity$2(null,i__9168);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9169,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9171 = seq__9165;
var G__9172 = chunk__9166;
var G__9173 = count__9167;
var G__9174 = (i__9168 + (1));
seq__9165 = G__9171;
chunk__9166 = G__9172;
count__9167 = G__9173;
i__9168 = G__9174;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9165);
if(temp__4425__auto__){
var seq__9165__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9165__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9165__$1);
var G__9175 = cljs.core.chunk_rest(seq__9165__$1);
var G__9176 = c__5806__auto__;
var G__9177 = cljs.core.count(c__5806__auto__);
var G__9178 = (0);
seq__9165 = G__9175;
chunk__9166 = G__9176;
count__9167 = G__9177;
i__9168 = G__9178;
continue;
} else {
var vec__9170 = cljs.core.first(seq__9165__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9170,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__9179 = cljs.core.next(seq__9165__$1);
var G__9180 = null;
var G__9181 = (0);
var G__9182 = (0);
seq__9165 = G__9179;
chunk__9166 = G__9180;
count__9167 = G__9181;
i__9168 = G__9182;
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
var G__9183 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__9184 = (0);
return setTimeout(G__9183,G__9184);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__9185 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9185) : cljs.core.atom.call(null,G__9185));
})();
var prefer_table__5917__auto__ = (function (){var G__9186 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9186) : cljs.core.atom.call(null,G__9186));
})();
var method_cache__5918__auto__ = (function (){var G__9187 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9187) : cljs.core.atom.call(null,G__9187));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__9188 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9188) : cljs.core.atom.call(null,G__9188));
})();
var hierarchy__5920__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,cljs.core.cst$kw$tailrecursion$hoplon_SLASH_default,hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__9189 = this$__$1.target;
return jQuery(G__9189);
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
var G__9192_9194 = init;
var G__9193_9195 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9192_9194,G__9193_9195) : f.call(null,G__9192_9194,G__9193_9195));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__9212 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9212) : cljs.core.atom.call(null,G__9212));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__9213,G__9214){
return (G__9213.cljs$core$IFn$_invoke$arity$1 ? G__9213.cljs$core$IFn$_invoke$arity$1(G__9214) : G__9213.call(null,G__9214));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__9216,G__9215){
return (G__9215.cljs$core$IFn$_invoke$arity$1 ? G__9215.cljs$core$IFn$_invoke$arity$1(G__9216) : G__9215.call(null,G__9216));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__9196_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__9219,G__9218,G__9217){
return (G__9217.cljs$core$IFn$_invoke$arity$2 ? G__9217.cljs$core$IFn$_invoke$arity$2(G__9218,G__9219) : G__9217.call(null,G__9218,G__9219));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__9196_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__9197_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__9197_SHARP_) : cljs.core.deref.call(null,p1__9197_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__9197_SHARP_,cljs.core.rest);

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
var seq__9220 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__9221 = null;
var count__9222 = (0);
var i__9223 = (0);
while(true){
if((i__9223 < count__9222)){
var i = chunk__9221.cljs$core$IIndexed$_nth$arity$2(null,i__9223);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__9224 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__9224) : tpl.call(null,G__9224));
}
})());

var G__9226 = seq__9220;
var G__9227 = chunk__9221;
var G__9228 = count__9222;
var G__9229 = (i__9223 + (1));
seq__9220 = G__9226;
chunk__9221 = G__9227;
count__9222 = G__9228;
i__9223 = G__9229;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9220);
if(temp__4425__auto__){
var seq__9220__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9220__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__9220__$1);
var G__9230 = cljs.core.chunk_rest(seq__9220__$1);
var G__9231 = c__5806__auto__;
var G__9232 = cljs.core.count(c__5806__auto__);
var G__9233 = (0);
seq__9220 = G__9230;
chunk__9221 = G__9231;
count__9222 = G__9232;
i__9223 = G__9233;
continue;
} else {
var i = cljs.core.first(seq__9220__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__9225 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__9225) : tpl.call(null,G__9225));
}
})());

var G__9234 = cljs.core.next(seq__9220__$1);
var G__9235 = null;
var G__9236 = (0);
var G__9237 = (0);
seq__9220 = G__9234;
chunk__9221 = G__9235;
count__9222 = G__9236;
i__9223 = G__9237;
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
var n__5906__auto__ = (- diff);
var ___$1 = (0);
while(true){
if((___$1 < n__5906__auto__)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,p.removeChild(p.lastChild));

var G__9238 = (___$1 + (1));
___$1 = G__9238;
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
var args__6068__auto__ = [];
var len__6061__auto___9247 = arguments.length;
var i__6062__auto___9248 = (0);
while(true){
if((i__6062__auto___9248 < len__6061__auto___9247)){
args__6068__auto__.push((arguments[i__6062__auto___9248]));

var G__9249 = (i__6062__auto___9248 + (1));
i__6062__auto___9248 = G__9249;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9240){
var vec__9241 = p__9240;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9241,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__9241,default$){
return (function (G__9242,G__9244,G__9243){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__9242.cljs$core$IFn$_invoke$arity$1 ? G__9242.cljs$core$IFn$_invoke$arity$1(G__9243) : G__9242.call(null,G__9243));
if(cljs.core.truth_(and__5010__auto__)){
return G__9243;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__9244;
}
});})(c,vec__9241,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__9241,default$){
return (function (){
var G__9245 = c;
var G__9246 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9245,G__9246) : cljs.core.reset_BANG_.call(null,G__9245,G__9246));
});})(_,c,vec__9241,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq9239){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9239));
});
