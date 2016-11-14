// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__295032_SHARP_){
return (p1__295032_SHARP_ instanceof Node);
}):(function (p1__295033_SHARP_){
try{return p1__295033_SHARP_.nodeType;
}catch (e295034){if((e295034 instanceof Error)){
var _ = e295034;
return null;
} else {
throw e295034;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__295035_SHARP_){
try{return cljs.core.vector_QMARK_(p1__295035_SHARP_);
}catch (e295036){if((e295036 instanceof Error)){
var _ = e295036;
return null;
} else {
throw e295036;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__295037_SHARP_){
try{return cljs.core.seq_QMARK_(p1__295037_SHARP_);
}catch (e295038){if((e295038 instanceof Error)){
var _ = e295038;
return null;
} else {
throw e295038;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__295039_SHARP_){
if(cljs.core.truth_((function (){var and__4830__auto__ = console;
if(cljs.core.truth_(and__4830__auto__)){
return console.log;
} else {
return and__4830__auto__;
}
})())){
return console.log(p1__295039_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args295040 = [];
var len__5881__auto___295044 = arguments.length;
var i__5882__auto___295045 = (0);
while(true){
if((i__5882__auto___295045 < len__5881__auto___295044)){
args295040.push((arguments[i__5882__auto___295045]));

var G__295046 = (i__5882__auto___295045 + (1));
i__5882__auto___295045 = G__295046;
continue;
} else {
}
break;
}

var G__295042 = args295040.length;
switch (G__295042) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295040.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e295043){if((e295043 instanceof Error)){
var _ = e295043;
return not_found;
} else {
throw e295043;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args295048 = [];
var len__5881__auto___295051 = arguments.length;
var i__5882__auto___295052 = (0);
while(true){
if((i__5882__auto___295052 < len__5881__auto___295051)){
args295048.push((arguments[i__5882__auto___295052]));

var G__295053 = (i__5882__auto___295052 + (1));
i__5882__auto___295052 = G__295053;
continue;
} else {
}
break;
}

var G__295050 = args295048.length;
switch (G__295050) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295048.length)].join('')));

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
var G__295063 = args;
var vec__295064 = G__295063;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295064,(0),null);
var args__$1 = cljs.core.nthnext(vec__295064,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__295063__$1 = G__295063;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__295065 = G__295063__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295065,(0),null);
var args__$2 = cljs.core.nthnext(vec__295065,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__295066 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__295063__$1,attr__$2,kids__$2,vec__295065,arg__$1,args__$2,attr,kids,G__295063,vec__295064,arg,args__$1){
return (function (p1__295055_SHARP_,p2__295056_SHARP_,p3__295057_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__295055_SHARP_,p2__295056_SHARP_,p3__295057_SHARP_);
});})(attr__$1,kids__$1,G__295063__$1,attr__$2,kids__$2,vec__295065,arg__$1,args__$2,attr,kids,G__295063,vec__295064,arg,args__$1))
,attr__$2,arg__$1);
var G__295067 = kids__$2;
var G__295068 = args__$2;
attr__$1 = G__295066;
kids__$1 = G__295067;
G__295063__$1 = G__295068;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__295069 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__295070 = kids__$2;
var G__295071 = cljs.core.rest(args__$2);
attr__$1 = G__295069;
kids__$1 = G__295070;
G__295063__$1 = G__295071;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__295072 = attr__$2;
var G__295073 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__295074 = args__$2;
attr__$1 = G__295072;
kids__$1 = G__295073;
G__295063__$1 = G__295074;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__295075 = attr__$2;
var G__295076 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__295077 = args__$2;
attr__$1 = G__295075;
kids__$1 = G__295076;
G__295063__$1 = G__295077;
continue;
} else {
var G__295078 = attr__$2;
var G__295079 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__295080 = args__$2;
attr__$1 = G__295078;
kids__$1 = G__295079;
G__295063__$1 = G__295080;
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
var G__295096_295101 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__295098_295103 = this$__$2;
var G__295099_295104 = k;
var G__295100_295105 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__295098_295103,G__295099_295104,G__295100_295105) : tailrecursion.hoplon.do_BANG_.call(null,G__295098_295103,G__295099_295104,G__295100_295105));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__295082_SHARP_,p2__295083_SHARP_,p3__295084_SHARP_,p4__295081_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__295081_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__295081_SHARP_));
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
var G__295097_295102 = (0);
setTimeout(G__295096_295101,G__295097_295102);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__295106_SHARP_,p2__295107_SHARP_){
return p1__295106_SHARP_.appendChild(p2__295107_SHARP_);
}):(function (p1__295108_SHARP_,p2__295109_SHARP_){
try{return p1__295108_SHARP_.appendChild(p2__295109_SHARP_);
}catch (e295110){if((e295110 instanceof Error)){
var _ = e295110;
return null;
} else {
throw e295110;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__295113 = this$;
var G__295114 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__295113,G__295114) : tailrecursion.hoplon.add_children_BANG_.call(null,G__295113,G__295114));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__295120){
var vec__295126 = p__295120;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295126,(0),null);
var _ = cljs.core.nthnext(vec__295126,(1));
var kids = vec__295126;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__295126,child_cell,_,kids){
return (function (p1__295116_SHARP_,p2__295117_SHARP_,p3__295118_SHARP_,p4__295115_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__295115_SHARP_);
});})(vec__295126,child_cell,_,kids))
);
} else {
var node_295131 = ((function (vec__295126,child_cell,_,kids){
return (function (p1__295119_SHARP_){
if(typeof p1__295119_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__295119_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__295119_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__295119_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__295119_SHARP_)))){
return p1__295119_SHARP_;
} else {
return null;
}
}
});})(vec__295126,child_cell,_,kids))
;
var seq__295127_295132 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__295128_295133 = null;
var count__295129_295134 = (0);
var i__295130_295135 = (0);
while(true){
if((i__295130_295135 < count__295129_295134)){
var x_295136 = chunk__295128_295133.cljs$core$IIndexed$_nth$arity$2(null,i__295130_295135);
var temp__4425__auto___295137 = node_295131(x_295136);
if(cljs.core.truth_(temp__4425__auto___295137)){
var x_295138__$1 = temp__4425__auto___295137;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_295138__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_295138__$1));
} else {
}

var G__295139 = seq__295127_295132;
var G__295140 = chunk__295128_295133;
var G__295141 = count__295129_295134;
var G__295142 = (i__295130_295135 + (1));
seq__295127_295132 = G__295139;
chunk__295128_295133 = G__295140;
count__295129_295134 = G__295141;
i__295130_295135 = G__295142;
continue;
} else {
var temp__4425__auto___295143 = cljs.core.seq(seq__295127_295132);
if(temp__4425__auto___295143){
var seq__295127_295144__$1 = temp__4425__auto___295143;
if(cljs.core.chunked_seq_QMARK_(seq__295127_295144__$1)){
var c__5626__auto___295145 = cljs.core.chunk_first(seq__295127_295144__$1);
var G__295146 = cljs.core.chunk_rest(seq__295127_295144__$1);
var G__295147 = c__5626__auto___295145;
var G__295148 = cljs.core.count(c__5626__auto___295145);
var G__295149 = (0);
seq__295127_295132 = G__295146;
chunk__295128_295133 = G__295147;
count__295129_295134 = G__295148;
i__295130_295135 = G__295149;
continue;
} else {
var x_295150 = cljs.core.first(seq__295127_295144__$1);
var temp__4425__auto___295151__$1 = node_295131(x_295150);
if(cljs.core.truth_(temp__4425__auto___295151__$1)){
var x_295152__$1 = temp__4425__auto___295151__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_295152__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_295152__$1));
} else {
}

var G__295153 = cljs.core.next(seq__295127_295144__$1);
var G__295154 = null;
var G__295155 = (0);
var G__295156 = (0);
seq__295127_295132 = G__295153;
chunk__295128_295133 = G__295154;
count__295129_295134 = G__295155;
i__295130_295135 = G__295156;
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
var G__295164__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__295158 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295158,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295158,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__295159 = this$;
G__295159.hoplonIFn(attr,kids);

return G__295159;
} else {
var G__295160 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__295160,attr);

tailrecursion.hoplon.add_children_BANG_(G__295160,kids);

return G__295160;
}
};
var G__295164 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__295165__i = 0, G__295165__a = new Array(arguments.length -  1);
while (G__295165__i < G__295165__a.length) {G__295165__a[G__295165__i] = arguments[G__295165__i + 1]; ++G__295165__i;}
  args = new cljs.core.IndexedSeq(G__295165__a,0);
} 
return G__295164__delegate.call(this,self__,args);};
G__295164.cljs$lang$maxFixedArity = 1;
G__295164.cljs$lang$applyTo = (function (arglist__295166){
var self__ = cljs.core.first(arglist__295166);
var args = cljs.core.rest(arglist__295166);
return G__295164__delegate(self__,args);
});
G__295164.cljs$core$IFn$_invoke$arity$variadic = G__295164__delegate;
return G__295164;
})()
;

Element.prototype.apply = (function (self__,args295157){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args295157)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__295167__delegate = function (args){
var this$ = this;
var vec__295161 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295161,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295161,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__295162 = this$;
G__295162.hoplonIFn(attr,kids);

return G__295162;
} else {
var G__295163 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__295163,attr);

tailrecursion.hoplon.add_children_BANG_(G__295163,kids);

return G__295163;
}
};
var G__295167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295168__i = 0, G__295168__a = new Array(arguments.length -  0);
while (G__295168__i < G__295168__a.length) {G__295168__a[G__295168__i] = arguments[G__295168__i + 0]; ++G__295168__i;}
  args = new cljs.core.IndexedSeq(G__295168__a,0);
} 
return G__295167__delegate.call(this,args);};
G__295167.cljs$lang$maxFixedArity = 0;
G__295167.cljs$lang$applyTo = (function (arglist__295169){
var args = cljs.core.seq(arglist__295169);
return G__295167__delegate(args);
});
G__295167.cljs$core$IFn$_invoke$arity$variadic = G__295167__delegate;
return G__295167;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__295180__delegate = function (args){
var vec__295175 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295175,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295175,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__295176 = cljs.core.seq(kids);
var chunk__295177 = null;
var count__295178 = (0);
var i__295179 = (0);
while(true){
if((i__295179 < count__295178)){
var k = chunk__295177.cljs$core$IIndexed$_nth$arity$2(null,i__295179);
elem.appendChild(k);

var G__295181 = seq__295176;
var G__295182 = chunk__295177;
var G__295183 = count__295178;
var G__295184 = (i__295179 + (1));
seq__295176 = G__295181;
chunk__295177 = G__295182;
count__295178 = G__295183;
i__295179 = G__295184;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295176);
if(temp__4425__auto__){
var seq__295176__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295176__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__295176__$1);
var G__295185 = cljs.core.chunk_rest(seq__295176__$1);
var G__295186 = c__5626__auto__;
var G__295187 = cljs.core.count(c__5626__auto__);
var G__295188 = (0);
seq__295176 = G__295185;
chunk__295177 = G__295186;
count__295178 = G__295187;
i__295179 = G__295188;
continue;
} else {
var k = cljs.core.first(seq__295176__$1);
elem.appendChild(k);

var G__295189 = cljs.core.next(seq__295176__$1);
var G__295190 = null;
var G__295191 = (0);
var G__295192 = (0);
seq__295176 = G__295189;
chunk__295177 = G__295190;
count__295178 = G__295191;
i__295179 = G__295192;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__295180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295193__i = 0, G__295193__a = new Array(arguments.length -  0);
while (G__295193__i < G__295193__a.length) {G__295193__a[G__295193__i] = arguments[G__295193__i + 0]; ++G__295193__i;}
  args = new cljs.core.IndexedSeq(G__295193__a,0);
} 
return G__295180__delegate.call(this,args);};
G__295180.cljs$lang$maxFixedArity = 0;
G__295180.cljs$lang$applyTo = (function (arglist__295194){
var args = cljs.core.seq(arglist__295194);
return G__295180__delegate(args);
});
G__295180.cljs$core$IFn$_invoke$arity$variadic = G__295180__delegate;
return G__295180;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__295195__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__295195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295196__i = 0, G__295196__a = new Array(arguments.length -  0);
while (G__295196__i < G__295196__a.length) {G__295196__a[G__295196__i] = arguments[G__295196__i + 0]; ++G__295196__i;}
  args = new cljs.core.IndexedSeq(G__295196__a,0);
} 
return G__295195__delegate.call(this,args);};
G__295195.cljs$lang$maxFixedArity = 0;
G__295195.cljs$lang$applyTo = (function (arglist__295197){
var args = cljs.core.seq(arglist__295197);
return G__295195__delegate(args);
});
G__295195.cljs$core$IFn$_invoke$arity$variadic = G__295195__delegate;
return G__295195;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__5888__auto__ = [];
var len__5881__auto___295200 = arguments.length;
var i__5882__auto___295201 = (0);
while(true){
if((i__5882__auto___295201 < len__5881__auto___295200)){
args__5888__auto__.push((arguments[i__5882__auto___295201]));

var G__295202 = (i__5882__auto___295201 + (1));
i__5882__auto___295201 = G__295202;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__295199 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295199,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295199,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq295198){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq295198));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__295203_SHARP_){
return document.createTextNode(p1__295203_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__295204_SHARP_){
return document.createComment(p1__295204_SHARP_);
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
return jQuery("body").on("submit",(function (p1__295205_SHARP_){
var e = (function (){var G__295206 = p1__295205_SHARP_.target;
return jQuery(G__295206);
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
return p1__295205_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args295207 = [];
var len__5881__auto___295210 = arguments.length;
var i__5882__auto___295211 = (0);
while(true){
if((i__5882__auto___295211 < len__5881__auto___295210)){
args295207.push((arguments[i__5882__auto___295211]));

var G__295212 = (i__5882__auto___295211 + (1));
i__5882__auto___295211 = G__295212;
continue;
} else {
}
break;
}

var G__295209 = args295207.length;
switch (G__295209) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295207.length)].join('')));

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
var args295214 = [];
var len__5881__auto___295217 = arguments.length;
var i__5882__auto___295218 = (0);
while(true){
if((i__5882__auto___295218 < len__5881__auto___295217)){
args295214.push((arguments[i__5882__auto___295218]));

var G__295219 = (i__5882__auto___295218 + (1));
i__5882__auto___295218 = G__295219;
continue;
} else {
}
break;
}

var G__295216 = args295214.length;
switch (G__295216) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295214.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__295221 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295221) : cljs.core.atom.call(null,G__295221));
})();
var prefer_table__5737__auto__ = (function (){var G__295222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295222) : cljs.core.atom.call(null,G__295222));
})();
var method_cache__5738__auto__ = (function (){var G__295223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295223) : cljs.core.atom.call(null,G__295223));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__295224 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295224) : cljs.core.atom.call(null,G__295224));
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
var G__295225 = elem;
var G__295226 = cljs.core.cst$kw$attr;
var G__295227 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__295225,G__295226,G__295227) : tailrecursion.hoplon.do_BANG_.call(null,G__295225,G__295226,G__295227));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__295228__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__295228 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__295229__i = 0, G__295229__a = new Array(arguments.length -  2);
while (G__295229__i < G__295229__a.length) {G__295229__a[G__295229__i] = arguments[G__295229__i + 2]; ++G__295229__i;}
  args = new cljs.core.IndexedSeq(G__295229__a,0);
} 
return G__295228__delegate.call(this,elem,_,args);};
G__295228.cljs$lang$maxFixedArity = 2;
G__295228.cljs$lang$applyTo = (function (arglist__295230){
var elem = cljs.core.first(arglist__295230);
arglist__295230 = cljs.core.next(arglist__295230);
var _ = cljs.core.first(arglist__295230);
var args = cljs.core.rest(arglist__295230);
return G__295228__delegate(elem,_,args);
});
G__295228.cljs$core$IFn$_invoke$arity$variadic = G__295228__delegate;
return G__295228;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__295231 = cljs.core.seq(kvs);
var chunk__295232 = null;
var count__295233 = (0);
var i__295234 = (0);
while(true){
if((i__295234 < count__295233)){
var vec__295235 = chunk__295232.cljs$core$IIndexed$_nth$arity$2(null,i__295234);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295235,(1),null);
var k_295237__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_295237__$1);
} else {
e.attr(k_295237__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_295237__$1:v));
}

var G__295238 = seq__295231;
var G__295239 = chunk__295232;
var G__295240 = count__295233;
var G__295241 = (i__295234 + (1));
seq__295231 = G__295238;
chunk__295232 = G__295239;
count__295233 = G__295240;
i__295234 = G__295241;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295231);
if(temp__4425__auto__){
var seq__295231__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295231__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__295231__$1);
var G__295242 = cljs.core.chunk_rest(seq__295231__$1);
var G__295243 = c__5626__auto__;
var G__295244 = cljs.core.count(c__5626__auto__);
var G__295245 = (0);
seq__295231 = G__295242;
chunk__295232 = G__295243;
count__295233 = G__295244;
i__295234 = G__295245;
continue;
} else {
var vec__295236 = cljs.core.first(seq__295231__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295236,(1),null);
var k_295246__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_295246__$1);
} else {
e.attr(k_295246__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_295246__$1:v));
}

var G__295247 = cljs.core.next(seq__295231__$1);
var G__295248 = null;
var G__295249 = (0);
var G__295250 = (0);
seq__295231 = G__295247;
chunk__295232 = G__295248;
count__295233 = G__295249;
i__295234 = G__295250;
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
return (function (p1__295251_SHARP_){
return cljs.core.zipmap(p1__295251_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__295252 = cljs.core.seq(clmap);
var chunk__295253 = null;
var count__295254 = (0);
var i__295255 = (0);
while(true){
if((i__295255 < count__295254)){
var vec__295256 = chunk__295253.cljs$core$IIndexed$_nth$arity$2(null,i__295255);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295256,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295256,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__295258 = seq__295252;
var G__295259 = chunk__295253;
var G__295260 = count__295254;
var G__295261 = (i__295255 + (1));
seq__295252 = G__295258;
chunk__295253 = G__295259;
count__295254 = G__295260;
i__295255 = G__295261;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295252);
if(temp__4425__auto__){
var seq__295252__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295252__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__295252__$1);
var G__295262 = cljs.core.chunk_rest(seq__295252__$1);
var G__295263 = c__5626__auto__;
var G__295264 = cljs.core.count(c__5626__auto__);
var G__295265 = (0);
seq__295252 = G__295262;
chunk__295253 = G__295263;
count__295254 = G__295264;
i__295255 = G__295265;
continue;
} else {
var vec__295257 = cljs.core.first(seq__295252__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295257,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295257,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__295266 = cljs.core.next(seq__295252__$1);
var G__295267 = null;
var G__295268 = (0);
var G__295269 = (0);
seq__295252 = G__295266;
chunk__295253 = G__295267;
count__295254 = G__295268;
i__295255 = G__295269;
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
var seq__295270 = cljs.core.seq(kvs);
var chunk__295271 = null;
var count__295272 = (0);
var i__295273 = (0);
while(true){
if((i__295273 < count__295272)){
var vec__295274 = chunk__295271.cljs$core$IIndexed$_nth$arity$2(null,i__295273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295274,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__295276 = seq__295270;
var G__295277 = chunk__295271;
var G__295278 = count__295272;
var G__295279 = (i__295273 + (1));
seq__295270 = G__295276;
chunk__295271 = G__295277;
count__295272 = G__295278;
i__295273 = G__295279;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295270);
if(temp__4425__auto__){
var seq__295270__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295270__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__295270__$1);
var G__295280 = cljs.core.chunk_rest(seq__295270__$1);
var G__295281 = c__5626__auto__;
var G__295282 = cljs.core.count(c__5626__auto__);
var G__295283 = (0);
seq__295270 = G__295280;
chunk__295271 = G__295281;
count__295272 = G__295282;
i__295273 = G__295283;
continue;
} else {
var vec__295275 = cljs.core.first(seq__295270__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295275,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__295284 = cljs.core.next(seq__295270__$1);
var G__295285 = null;
var G__295286 = (0);
var G__295287 = (0);
seq__295270 = G__295284;
chunk__295271 = G__295285;
count__295272 = G__295286;
i__295273 = G__295287;
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
var G__295288 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__295289 = (0);
return setTimeout(G__295288,G__295289);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__295290 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295290) : cljs.core.atom.call(null,G__295290));
})();
var prefer_table__5737__auto__ = (function (){var G__295291 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295291) : cljs.core.atom.call(null,G__295291));
})();
var method_cache__5738__auto__ = (function (){var G__295292 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295292) : cljs.core.atom.call(null,G__295292));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__295293 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295293) : cljs.core.atom.call(null,G__295293));
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
return (function (){var G__295294 = this$__$1.target;
return jQuery(G__295294);
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
var G__295297_295299 = init;
var G__295298_295300 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__295297_295299,G__295298_295300) : f.call(null,G__295297_295299,G__295298_295300));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__295317 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295317) : cljs.core.atom.call(null,G__295317));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__295318,G__295319){
return (G__295318.cljs$core$IFn$_invoke$arity$1 ? G__295318.cljs$core$IFn$_invoke$arity$1(G__295319) : G__295318.call(null,G__295319));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__295321,G__295320){
return (G__295320.cljs$core$IFn$_invoke$arity$1 ? G__295320.cljs$core$IFn$_invoke$arity$1(G__295321) : G__295320.call(null,G__295321));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__295301_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__295324,G__295323,G__295322){
return (G__295322.cljs$core$IFn$_invoke$arity$2 ? G__295322.cljs$core$IFn$_invoke$arity$2(G__295323,G__295324) : G__295322.call(null,G__295323,G__295324));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__295301_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__295302_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__295302_SHARP_) : cljs.core.deref.call(null,p1__295302_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__295302_SHARP_,cljs.core.rest);

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
var seq__295325 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__295326 = null;
var count__295327 = (0);
var i__295328 = (0);
while(true){
if((i__295328 < count__295327)){
var i = chunk__295326.cljs$core$IIndexed$_nth$arity$2(null,i__295328);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__295329 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__295329) : tpl.call(null,G__295329));
}
})());

var G__295331 = seq__295325;
var G__295332 = chunk__295326;
var G__295333 = count__295327;
var G__295334 = (i__295328 + (1));
seq__295325 = G__295331;
chunk__295326 = G__295332;
count__295327 = G__295333;
i__295328 = G__295334;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295325);
if(temp__4425__auto__){
var seq__295325__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295325__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__295325__$1);
var G__295335 = cljs.core.chunk_rest(seq__295325__$1);
var G__295336 = c__5626__auto__;
var G__295337 = cljs.core.count(c__5626__auto__);
var G__295338 = (0);
seq__295325 = G__295335;
chunk__295326 = G__295336;
count__295327 = G__295337;
i__295328 = G__295338;
continue;
} else {
var i = cljs.core.first(seq__295325__$1);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__295330 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__295330) : tpl.call(null,G__295330));
}
})());

var G__295339 = cljs.core.next(seq__295325__$1);
var G__295340 = null;
var G__295341 = (0);
var G__295342 = (0);
seq__295325 = G__295339;
chunk__295326 = G__295340;
count__295327 = G__295341;
i__295328 = G__295342;
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

var G__295343 = (___$1 + (1));
___$1 = G__295343;
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
var len__5881__auto___295352 = arguments.length;
var i__5882__auto___295353 = (0);
while(true){
if((i__5882__auto___295353 < len__5881__auto___295352)){
args__5888__auto__.push((arguments[i__5882__auto___295353]));

var G__295354 = (i__5882__auto___295353 + (1));
i__5882__auto___295353 = G__295354;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__295345){
var vec__295346 = p__295345;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295346,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__295346,default$){
return (function (G__295347,G__295349,G__295348){
var or__4842__auto__ = (function (){var and__4830__auto__ = (G__295347.cljs$core$IFn$_invoke$arity$1 ? G__295347.cljs$core$IFn$_invoke$arity$1(G__295348) : G__295347.call(null,G__295348));
if(cljs.core.truth_(and__4830__auto__)){
return G__295348;
} else {
return and__4830__auto__;
}
})();
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__295349;
}
});})(c,vec__295346,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__295346,default$){
return (function (){
var G__295350 = c;
var G__295351 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__295350,G__295351) : cljs.core.reset_BANG_.call(null,G__295350,G__295351));
});})(_,c,vec__295346,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq295344){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq295344));
});
