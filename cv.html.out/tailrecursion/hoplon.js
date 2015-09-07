// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9967_SHARP_){
return (p1__9967_SHARP_ instanceof Node);
}):(function (p1__9968_SHARP_){
try{return p1__9968_SHARP_.nodeType;
}catch (e9969){if((e9969 instanceof Error)){
var _ = e9969;
return null;
} else {
throw e9969;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9970_SHARP_){
try{return cljs.core.vector_QMARK_(p1__9970_SHARP_);
}catch (e9971){if((e9971 instanceof Error)){
var _ = e9971;
return null;
} else {
throw e9971;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9972_SHARP_){
try{return cljs.core.seq_QMARK_(p1__9972_SHARP_);
}catch (e9973){if((e9973 instanceof Error)){
var _ = e9973;
return null;
} else {
throw e9973;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__9974_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__9974_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args9975 = [];
var len__6061__auto___9979 = arguments.length;
var i__6062__auto___9980 = (0);
while(true){
if((i__6062__auto___9980 < len__6061__auto___9979)){
args9975.push((arguments[i__6062__auto___9980]));

var G__9981 = (i__6062__auto___9980 + (1));
i__6062__auto___9980 = G__9981;
continue;
} else {
}
break;
}

var G__9977 = args9975.length;
switch (G__9977) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9975.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e9978){if((e9978 instanceof Error)){
var _ = e9978;
return not_found;
} else {
throw e9978;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args9983 = [];
var len__6061__auto___9986 = arguments.length;
var i__6062__auto___9987 = (0);
while(true){
if((i__6062__auto___9987 < len__6061__auto___9986)){
args9983.push((arguments[i__6062__auto___9987]));

var G__9988 = (i__6062__auto___9987 + (1));
i__6062__auto___9987 = G__9988;
continue;
} else {
}
break;
}

var G__9985 = args9983.length;
switch (G__9985) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9983.length)].join('')));

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
var G__9998 = args;
var vec__9999 = G__9998;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9999,(0),null);
var args__$1 = cljs.core.nthnext(vec__9999,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__9998__$1 = G__9998;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10000 = G__9998__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10000,(0),null);
var args__$2 = cljs.core.nthnext(vec__10000,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10001 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__9998__$1,attr__$2,kids__$2,vec__10000,arg__$1,args__$2,attr,kids,G__9998,vec__9999,arg,args__$1){
return (function (p1__9990_SHARP_,p2__9991_SHARP_,p3__9992_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__9990_SHARP_,p2__9991_SHARP_,p3__9992_SHARP_);
});})(attr__$1,kids__$1,G__9998__$1,attr__$2,kids__$2,vec__10000,arg__$1,args__$2,attr,kids,G__9998,vec__9999,arg,args__$1))
,attr__$2,arg__$1);
var G__10002 = kids__$2;
var G__10003 = args__$2;
attr__$1 = G__10001;
kids__$1 = G__10002;
G__9998__$1 = G__10003;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10004 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10005 = kids__$2;
var G__10006 = cljs.core.rest(args__$2);
attr__$1 = G__10004;
kids__$1 = G__10005;
G__9998__$1 = G__10006;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__10007 = attr__$2;
var G__10008 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10009 = args__$2;
attr__$1 = G__10007;
kids__$1 = G__10008;
G__9998__$1 = G__10009;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10010 = attr__$2;
var G__10011 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10012 = args__$2;
attr__$1 = G__10010;
kids__$1 = G__10011;
G__9998__$1 = G__10012;
continue;
} else {
var G__10013 = attr__$2;
var G__10014 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10015 = args__$2;
attr__$1 = G__10013;
kids__$1 = G__10014;
G__9998__$1 = G__10015;
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
var G__10031_10036 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10033_10038 = this$__$2;
var G__10034_10039 = k;
var G__10035_10040 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10033_10038,G__10034_10039,G__10035_10040) : tailrecursion.hoplon.do_BANG_.call(null,G__10033_10038,G__10034_10039,G__10035_10040));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10017_SHARP_,p2__10018_SHARP_,p3__10019_SHARP_,p4__10016_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10016_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10016_SHARP_));
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
var G__10032_10037 = (0);
setTimeout(G__10031_10036,G__10032_10037);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10041_SHARP_,p2__10042_SHARP_){
return p1__10041_SHARP_.appendChild(p2__10042_SHARP_);
}):(function (p1__10043_SHARP_,p2__10044_SHARP_){
try{return p1__10043_SHARP_.appendChild(p2__10044_SHARP_);
}catch (e10045){if((e10045 instanceof Error)){
var _ = e10045;
return null;
} else {
throw e10045;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10048 = this$;
var G__10049 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10048,G__10049) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10048,G__10049));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10055){
var vec__10061 = p__10055;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10061,(0),null);
var _ = cljs.core.nthnext(vec__10061,(1));
var kids = vec__10061;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10061,child_cell,_,kids){
return (function (p1__10051_SHARP_,p2__10052_SHARP_,p3__10053_SHARP_,p4__10050_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10050_SHARP_);
});})(vec__10061,child_cell,_,kids))
);
} else {
var node_10066 = ((function (vec__10061,child_cell,_,kids){
return (function (p1__10054_SHARP_){
if(typeof p1__10054_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10054_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10054_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10054_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10054_SHARP_)))){
return p1__10054_SHARP_;
} else {
return null;
}
}
});})(vec__10061,child_cell,_,kids))
;
var seq__10062_10067 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10063_10068 = null;
var count__10064_10069 = (0);
var i__10065_10070 = (0);
while(true){
if((i__10065_10070 < count__10064_10069)){
var x_10071 = chunk__10063_10068.cljs$core$IIndexed$_nth$arity$2(null,i__10065_10070);
var temp__4425__auto___10072 = node_10066(x_10071);
if(cljs.core.truth_(temp__4425__auto___10072)){
var x_10073__$1 = temp__4425__auto___10072;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10073__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10073__$1));
} else {
}

var G__10074 = seq__10062_10067;
var G__10075 = chunk__10063_10068;
var G__10076 = count__10064_10069;
var G__10077 = (i__10065_10070 + (1));
seq__10062_10067 = G__10074;
chunk__10063_10068 = G__10075;
count__10064_10069 = G__10076;
i__10065_10070 = G__10077;
continue;
} else {
var temp__4425__auto___10078 = cljs.core.seq(seq__10062_10067);
if(temp__4425__auto___10078){
var seq__10062_10079__$1 = temp__4425__auto___10078;
if(cljs.core.chunked_seq_QMARK_(seq__10062_10079__$1)){
var c__5806__auto___10080 = cljs.core.chunk_first(seq__10062_10079__$1);
var G__10081 = cljs.core.chunk_rest(seq__10062_10079__$1);
var G__10082 = c__5806__auto___10080;
var G__10083 = cljs.core.count(c__5806__auto___10080);
var G__10084 = (0);
seq__10062_10067 = G__10081;
chunk__10063_10068 = G__10082;
count__10064_10069 = G__10083;
i__10065_10070 = G__10084;
continue;
} else {
var x_10085 = cljs.core.first(seq__10062_10079__$1);
var temp__4425__auto___10086__$1 = node_10066(x_10085);
if(cljs.core.truth_(temp__4425__auto___10086__$1)){
var x_10087__$1 = temp__4425__auto___10086__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10087__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10087__$1));
} else {
}

var G__10088 = cljs.core.next(seq__10062_10079__$1);
var G__10089 = null;
var G__10090 = (0);
var G__10091 = (0);
seq__10062_10067 = G__10088;
chunk__10063_10068 = G__10089;
count__10064_10069 = G__10090;
i__10065_10070 = G__10091;
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
var G__10099__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10093 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10093,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10094 = this$;
G__10094.hoplonIFn(attr,kids);

return G__10094;
} else {
var G__10095 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10095,attr);

tailrecursion.hoplon.add_children_BANG_(G__10095,kids);

return G__10095;
}
};
var G__10099 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10100__i = 0, G__10100__a = new Array(arguments.length -  1);
while (G__10100__i < G__10100__a.length) {G__10100__a[G__10100__i] = arguments[G__10100__i + 1]; ++G__10100__i;}
  args = new cljs.core.IndexedSeq(G__10100__a,0);
} 
return G__10099__delegate.call(this,self__,args);};
G__10099.cljs$lang$maxFixedArity = 1;
G__10099.cljs$lang$applyTo = (function (arglist__10101){
var self__ = cljs.core.first(arglist__10101);
var args = cljs.core.rest(arglist__10101);
return G__10099__delegate(self__,args);
});
G__10099.cljs$core$IFn$_invoke$arity$variadic = G__10099__delegate;
return G__10099;
})()
;

Element.prototype.apply = (function (self__,args10092){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10092)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10102__delegate = function (args){
var this$ = this;
var vec__10096 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10096,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10096,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10097 = this$;
G__10097.hoplonIFn(attr,kids);

return G__10097;
} else {
var G__10098 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10098,attr);

tailrecursion.hoplon.add_children_BANG_(G__10098,kids);

return G__10098;
}
};
var G__10102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10103__i = 0, G__10103__a = new Array(arguments.length -  0);
while (G__10103__i < G__10103__a.length) {G__10103__a[G__10103__i] = arguments[G__10103__i + 0]; ++G__10103__i;}
  args = new cljs.core.IndexedSeq(G__10103__a,0);
} 
return G__10102__delegate.call(this,args);};
G__10102.cljs$lang$maxFixedArity = 0;
G__10102.cljs$lang$applyTo = (function (arglist__10104){
var args = cljs.core.seq(arglist__10104);
return G__10102__delegate(args);
});
G__10102.cljs$core$IFn$_invoke$arity$variadic = G__10102__delegate;
return G__10102;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10115__delegate = function (args){
var vec__10110 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10110,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10110,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10111 = cljs.core.seq(kids);
var chunk__10112 = null;
var count__10113 = (0);
var i__10114 = (0);
while(true){
if((i__10114 < count__10113)){
var k = chunk__10112.cljs$core$IIndexed$_nth$arity$2(null,i__10114);
elem.appendChild(k);

var G__10116 = seq__10111;
var G__10117 = chunk__10112;
var G__10118 = count__10113;
var G__10119 = (i__10114 + (1));
seq__10111 = G__10116;
chunk__10112 = G__10117;
count__10113 = G__10118;
i__10114 = G__10119;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10111);
if(temp__4425__auto__){
var seq__10111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10111__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10111__$1);
var G__10120 = cljs.core.chunk_rest(seq__10111__$1);
var G__10121 = c__5806__auto__;
var G__10122 = cljs.core.count(c__5806__auto__);
var G__10123 = (0);
seq__10111 = G__10120;
chunk__10112 = G__10121;
count__10113 = G__10122;
i__10114 = G__10123;
continue;
} else {
var k = cljs.core.first(seq__10111__$1);
elem.appendChild(k);

var G__10124 = cljs.core.next(seq__10111__$1);
var G__10125 = null;
var G__10126 = (0);
var G__10127 = (0);
seq__10111 = G__10124;
chunk__10112 = G__10125;
count__10113 = G__10126;
i__10114 = G__10127;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10128__i = 0, G__10128__a = new Array(arguments.length -  0);
while (G__10128__i < G__10128__a.length) {G__10128__a[G__10128__i] = arguments[G__10128__i + 0]; ++G__10128__i;}
  args = new cljs.core.IndexedSeq(G__10128__a,0);
} 
return G__10115__delegate.call(this,args);};
G__10115.cljs$lang$maxFixedArity = 0;
G__10115.cljs$lang$applyTo = (function (arglist__10129){
var args = cljs.core.seq(arglist__10129);
return G__10115__delegate(args);
});
G__10115.cljs$core$IFn$_invoke$arity$variadic = G__10115__delegate;
return G__10115;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10130__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10131__i = 0, G__10131__a = new Array(arguments.length -  0);
while (G__10131__i < G__10131__a.length) {G__10131__a[G__10131__i] = arguments[G__10131__i + 0]; ++G__10131__i;}
  args = new cljs.core.IndexedSeq(G__10131__a,0);
} 
return G__10130__delegate.call(this,args);};
G__10130.cljs$lang$maxFixedArity = 0;
G__10130.cljs$lang$applyTo = (function (arglist__10132){
var args = cljs.core.seq(arglist__10132);
return G__10130__delegate(args);
});
G__10130.cljs$core$IFn$_invoke$arity$variadic = G__10130__delegate;
return G__10130;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___10135 = arguments.length;
var i__6062__auto___10136 = (0);
while(true){
if((i__6062__auto___10136 < len__6061__auto___10135)){
args__6068__auto__.push((arguments[i__6062__auto___10136]));

var G__10137 = (i__6062__auto___10136 + (1));
i__6062__auto___10136 = G__10137;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10134 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10134,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10134,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10133){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10133));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10138_SHARP_){
return document.createTextNode(p1__10138_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10139_SHARP_){
return document.createComment(p1__10139_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10140_SHARP_){
var e = (function (){var G__10141 = p1__10140_SHARP_.target;
return jQuery(G__10141);
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
return p1__10140_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10142 = [];
var len__6061__auto___10145 = arguments.length;
var i__6062__auto___10146 = (0);
while(true){
if((i__6062__auto___10146 < len__6061__auto___10145)){
args10142.push((arguments[i__6062__auto___10146]));

var G__10147 = (i__6062__auto___10146 + (1));
i__6062__auto___10146 = G__10147;
continue;
} else {
}
break;
}

var G__10144 = args10142.length;
switch (G__10144) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10142.length)].join('')));

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
var args10149 = [];
var len__6061__auto___10152 = arguments.length;
var i__6062__auto___10153 = (0);
while(true){
if((i__6062__auto___10153 < len__6061__auto___10152)){
args10149.push((arguments[i__6062__auto___10153]));

var G__10154 = (i__6062__auto___10153 + (1));
i__6062__auto___10153 = G__10154;
continue;
} else {
}
break;
}

var G__10151 = args10149.length;
switch (G__10151) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10149.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10156 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10156) : cljs.core.atom.call(null,G__10156));
})();
var prefer_table__5917__auto__ = (function (){var G__10157 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10157) : cljs.core.atom.call(null,G__10157));
})();
var method_cache__5918__auto__ = (function (){var G__10158 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10158) : cljs.core.atom.call(null,G__10158));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10159 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10159) : cljs.core.atom.call(null,G__10159));
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
var G__10160 = elem;
var G__10161 = cljs.core.cst$kw$attr;
var G__10162 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10160,G__10161,G__10162) : tailrecursion.hoplon.do_BANG_.call(null,G__10160,G__10161,G__10162));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10163__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10163 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10164__i = 0, G__10164__a = new Array(arguments.length -  2);
while (G__10164__i < G__10164__a.length) {G__10164__a[G__10164__i] = arguments[G__10164__i + 2]; ++G__10164__i;}
  args = new cljs.core.IndexedSeq(G__10164__a,0);
} 
return G__10163__delegate.call(this,elem,_,args);};
G__10163.cljs$lang$maxFixedArity = 2;
G__10163.cljs$lang$applyTo = (function (arglist__10165){
var elem = cljs.core.first(arglist__10165);
arglist__10165 = cljs.core.next(arglist__10165);
var _ = cljs.core.first(arglist__10165);
var args = cljs.core.rest(arglist__10165);
return G__10163__delegate(elem,_,args);
});
G__10163.cljs$core$IFn$_invoke$arity$variadic = G__10163__delegate;
return G__10163;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10166 = cljs.core.seq(kvs);
var chunk__10167 = null;
var count__10168 = (0);
var i__10169 = (0);
while(true){
if((i__10169 < count__10168)){
var vec__10170 = chunk__10167.cljs$core$IIndexed$_nth$arity$2(null,i__10169);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(1),null);
var k_10172__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10172__$1);
} else {
e.attr(k_10172__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10172__$1:v));
}

var G__10173 = seq__10166;
var G__10174 = chunk__10167;
var G__10175 = count__10168;
var G__10176 = (i__10169 + (1));
seq__10166 = G__10173;
chunk__10167 = G__10174;
count__10168 = G__10175;
i__10169 = G__10176;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10166);
if(temp__4425__auto__){
var seq__10166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10166__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10166__$1);
var G__10177 = cljs.core.chunk_rest(seq__10166__$1);
var G__10178 = c__5806__auto__;
var G__10179 = cljs.core.count(c__5806__auto__);
var G__10180 = (0);
seq__10166 = G__10177;
chunk__10167 = G__10178;
count__10168 = G__10179;
i__10169 = G__10180;
continue;
} else {
var vec__10171 = cljs.core.first(seq__10166__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(1),null);
var k_10181__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10181__$1);
} else {
e.attr(k_10181__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10181__$1:v));
}

var G__10182 = cljs.core.next(seq__10166__$1);
var G__10183 = null;
var G__10184 = (0);
var G__10185 = (0);
seq__10166 = G__10182;
chunk__10167 = G__10183;
count__10168 = G__10184;
i__10169 = G__10185;
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
return (function (p1__10186_SHARP_){
return cljs.core.zipmap(p1__10186_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__10187 = cljs.core.seq(clmap);
var chunk__10188 = null;
var count__10189 = (0);
var i__10190 = (0);
while(true){
if((i__10190 < count__10189)){
var vec__10191 = chunk__10188.cljs$core$IIndexed$_nth$arity$2(null,i__10190);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10191,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10193 = seq__10187;
var G__10194 = chunk__10188;
var G__10195 = count__10189;
var G__10196 = (i__10190 + (1));
seq__10187 = G__10193;
chunk__10188 = G__10194;
count__10189 = G__10195;
i__10190 = G__10196;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10187);
if(temp__4425__auto__){
var seq__10187__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10187__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10187__$1);
var G__10197 = cljs.core.chunk_rest(seq__10187__$1);
var G__10198 = c__5806__auto__;
var G__10199 = cljs.core.count(c__5806__auto__);
var G__10200 = (0);
seq__10187 = G__10197;
chunk__10188 = G__10198;
count__10189 = G__10199;
i__10190 = G__10200;
continue;
} else {
var vec__10192 = cljs.core.first(seq__10187__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10201 = cljs.core.next(seq__10187__$1);
var G__10202 = null;
var G__10203 = (0);
var G__10204 = (0);
seq__10187 = G__10201;
chunk__10188 = G__10202;
count__10189 = G__10203;
i__10190 = G__10204;
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
var seq__10205 = cljs.core.seq(kvs);
var chunk__10206 = null;
var count__10207 = (0);
var i__10208 = (0);
while(true){
if((i__10208 < count__10207)){
var vec__10209 = chunk__10206.cljs$core$IIndexed$_nth$arity$2(null,i__10208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10209,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10211 = seq__10205;
var G__10212 = chunk__10206;
var G__10213 = count__10207;
var G__10214 = (i__10208 + (1));
seq__10205 = G__10211;
chunk__10206 = G__10212;
count__10207 = G__10213;
i__10208 = G__10214;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10205);
if(temp__4425__auto__){
var seq__10205__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10205__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10205__$1);
var G__10215 = cljs.core.chunk_rest(seq__10205__$1);
var G__10216 = c__5806__auto__;
var G__10217 = cljs.core.count(c__5806__auto__);
var G__10218 = (0);
seq__10205 = G__10215;
chunk__10206 = G__10216;
count__10207 = G__10217;
i__10208 = G__10218;
continue;
} else {
var vec__10210 = cljs.core.first(seq__10205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10219 = cljs.core.next(seq__10205__$1);
var G__10220 = null;
var G__10221 = (0);
var G__10222 = (0);
seq__10205 = G__10219;
chunk__10206 = G__10220;
count__10207 = G__10221;
i__10208 = G__10222;
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
var G__10223 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__10224 = (0);
return setTimeout(G__10223,G__10224);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10225 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10225) : cljs.core.atom.call(null,G__10225));
})();
var prefer_table__5917__auto__ = (function (){var G__10226 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10226) : cljs.core.atom.call(null,G__10226));
})();
var method_cache__5918__auto__ = (function (){var G__10227 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10227) : cljs.core.atom.call(null,G__10227));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10228 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10228) : cljs.core.atom.call(null,G__10228));
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
return (function (){var G__10229 = this$__$1.target;
return jQuery(G__10229);
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
var G__10232_10234 = init;
var G__10233_10235 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10232_10234,G__10233_10235) : f.call(null,G__10232_10234,G__10233_10235));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__10252 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10252) : cljs.core.atom.call(null,G__10252));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__10253,G__10254){
return (G__10253.cljs$core$IFn$_invoke$arity$1 ? G__10253.cljs$core$IFn$_invoke$arity$1(G__10254) : G__10253.call(null,G__10254));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__10256,G__10255){
return (G__10255.cljs$core$IFn$_invoke$arity$1 ? G__10255.cljs$core$IFn$_invoke$arity$1(G__10256) : G__10255.call(null,G__10256));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__10236_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__10259,G__10258,G__10257){
return (G__10257.cljs$core$IFn$_invoke$arity$2 ? G__10257.cljs$core$IFn$_invoke$arity$2(G__10258,G__10259) : G__10257.call(null,G__10258,G__10259));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__10236_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__10237_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__10237_SHARP_) : cljs.core.deref.call(null,p1__10237_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10237_SHARP_,cljs.core.rest);

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
var seq__10260 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10261 = null;
var count__10262 = (0);
var i__10263 = (0);
while(true){
if((i__10263 < count__10262)){
var i = chunk__10261.cljs$core$IIndexed$_nth$arity$2(null,i__10263);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__10264 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10264) : tpl.call(null,G__10264));
}
})());

var G__10266 = seq__10260;
var G__10267 = chunk__10261;
var G__10268 = count__10262;
var G__10269 = (i__10263 + (1));
seq__10260 = G__10266;
chunk__10261 = G__10267;
count__10262 = G__10268;
i__10263 = G__10269;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10260);
if(temp__4425__auto__){
var seq__10260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10260__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10260__$1);
var G__10270 = cljs.core.chunk_rest(seq__10260__$1);
var G__10271 = c__5806__auto__;
var G__10272 = cljs.core.count(c__5806__auto__);
var G__10273 = (0);
seq__10260 = G__10270;
chunk__10261 = G__10271;
count__10262 = G__10272;
i__10263 = G__10273;
continue;
} else {
var i = cljs.core.first(seq__10260__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__10265 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10265) : tpl.call(null,G__10265));
}
})());

var G__10274 = cljs.core.next(seq__10260__$1);
var G__10275 = null;
var G__10276 = (0);
var G__10277 = (0);
seq__10260 = G__10274;
chunk__10261 = G__10275;
count__10262 = G__10276;
i__10263 = G__10277;
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

var G__10278 = (___$1 + (1));
___$1 = G__10278;
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
var len__6061__auto___10287 = arguments.length;
var i__6062__auto___10288 = (0);
while(true){
if((i__6062__auto___10288 < len__6061__auto___10287)){
args__6068__auto__.push((arguments[i__6062__auto___10288]));

var G__10289 = (i__6062__auto___10288 + (1));
i__6062__auto___10288 = G__10289;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10280){
var vec__10281 = p__10280;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10281,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__10281,default$){
return (function (G__10282,G__10284,G__10283){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__10282.cljs$core$IFn$_invoke$arity$1 ? G__10282.cljs$core$IFn$_invoke$arity$1(G__10283) : G__10282.call(null,G__10283));
if(cljs.core.truth_(and__5010__auto__)){
return G__10283;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__10284;
}
});})(c,vec__10281,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__10281,default$){
return (function (){
var G__10285 = c;
var G__10286 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10285,G__10286) : cljs.core.reset_BANG_.call(null,G__10285,G__10286));
});})(_,c,vec__10281,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq10279){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10279));
});
