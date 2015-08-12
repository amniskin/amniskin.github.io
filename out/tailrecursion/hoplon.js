// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__162042_SHARP_){
return (p1__162042_SHARP_ instanceof Node);
}):(function (p1__162043_SHARP_){
try{return p1__162043_SHARP_.nodeType;
}catch (e162044){if((e162044 instanceof Error)){
var _ = e162044;
return null;
} else {
throw e162044;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__162045_SHARP_){
try{return cljs.core.vector_QMARK_(p1__162045_SHARP_);
}catch (e162046){if((e162046 instanceof Error)){
var _ = e162046;
return null;
} else {
throw e162046;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__162047_SHARP_){
try{return cljs.core.seq_QMARK_(p1__162047_SHARP_);
}catch (e162048){if((e162048 instanceof Error)){
var _ = e162048;
return null;
} else {
throw e162048;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__162049_SHARP_){
if(cljs.core.truth_((function (){var and__4198__auto__ = console;
if(cljs.core.truth_(and__4198__auto__)){
return console.log;
} else {
return and__4198__auto__;
}
})())){
return console.log(p1__162049_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__162051 = arguments.length;
switch (G__162051) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e162052){if((e162052 instanceof Error)){
var _ = e162052;
return not_found;
} else {
throw e162052;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__162055 = arguments.length;
switch (G__162055) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__162067 = args;
var vec__162068 = G__162067;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162068,(0),null);
var args__$1 = cljs.core.nthnext(vec__162068,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__162067__$1 = G__162067;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__162069 = G__162067__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162069,(0),null);
var args__$2 = cljs.core.nthnext(vec__162069,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__162072 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__162067__$1,attr__$2,kids__$2,vec__162069,arg__$1,args__$2,attr,kids,G__162067,vec__162068,arg,args__$1){
return (function (p1__162057_SHARP_,p2__162058_SHARP_,p3__162059_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__162057_SHARP_,p2__162058_SHARP_,p3__162059_SHARP_);
});})(attr__$1,kids__$1,G__162067__$1,attr__$2,kids__$2,vec__162069,arg__$1,args__$2,attr,kids,G__162067,vec__162068,arg,args__$1))
,attr__$2,arg__$1);
var G__162073 = kids__$2;
var G__162074 = args__$2;
attr__$1 = G__162072;
kids__$1 = G__162073;
G__162067__$1 = G__162074;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__162075 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__162076 = kids__$2;
var G__162077 = cljs.core.rest(args__$2);
attr__$1 = G__162075;
kids__$1 = G__162076;
G__162067__$1 = G__162077;
continue;
} else {
if(cljs.core.truth_((function (){var G__162070 = arg__$1;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__162070) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__162070));
})())){
var G__162078 = attr__$2;
var G__162079 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__162080 = args__$2;
attr__$1 = G__162078;
kids__$1 = G__162079;
G__162067__$1 = G__162080;
continue;
} else {
if(cljs.core.truth_((function (){var G__162071 = arg__$1;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__162071) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__162071));
})())){
var G__162081 = attr__$2;
var G__162082 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__162083 = args__$2;
attr__$1 = G__162081;
kids__$1 = G__162082;
G__162067__$1 = G__162083;
continue;
} else {
var G__162084 = attr__$2;
var G__162085 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__162086 = args__$2;
attr__$1 = G__162084;
kids__$1 = G__162085;
G__162067__$1 = G__162086;
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
var G__162106_162121 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__162108_162123 = this$__$2;
var G__162109_162124 = k;
var G__162110_162125 = (function (){var G__162111 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162111) : cljs.core.deref.call(null,G__162111));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162108_162123,G__162109_162124,G__162110_162125) : tailrecursion.hoplon.do_BANG_.call(null,G__162108_162123,G__162109_162124,G__162110_162125));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__162088_SHARP_,p2__162089_SHARP_,p3__162090_SHARP_,p4__162087_SHARP_){
var G__162112 = this$__$2;
var G__162113 = k;
var G__162114 = p4__162087_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162112,G__162113,G__162114) : tailrecursion.hoplon.do_BANG_.call(null,G__162112,G__162113,G__162114));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
var G__162115_162126 = this$__$2;
var G__162116_162127 = k;
var G__162117_162128 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__162115_162126,G__162116_162127,G__162117_162128) : tailrecursion.hoplon.on_BANG_.call(null,G__162115_162126,G__162116_162127,G__162117_162128));
} else {
var G__162118_162129 = this$__$2;
var G__162119_162130 = k;
var G__162120_162131 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162118_162129,G__162119_162130,G__162120_162131) : tailrecursion.hoplon.do_BANG_.call(null,G__162118_162129,G__162119_162130,G__162120_162131));

}
}

return this$__$2;
});})(this$__$1))
,this$__$1,attr);
});})(this$__$1))
;
var G__162107_162122 = (0);
setTimeout(G__162106_162121,G__162107_162122);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__162132_SHARP_,p2__162133_SHARP_){
return p1__162132_SHARP_.appendChild(p2__162133_SHARP_);
}):(function (p1__162134_SHARP_,p2__162135_SHARP_){
try{return p1__162134_SHARP_.appendChild(p2__162135_SHARP_);
}catch (e162136){if((e162136 instanceof Error)){
var _ = e162136;
return null;
} else {
throw e162136;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
(function (){var G__162140 = this$;
return jQuery(G__162140);
})().empty();

var G__162141 = this$;
var G__162142 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__162141,G__162142) : tailrecursion.hoplon.add_children_BANG_.call(null,G__162141,G__162142));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__162148){
var vec__162161 = p__162148;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162161,(0),null);
var _ = cljs.core.nthnext(vec__162161,(1));
var kids = vec__162161;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__162162 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162162) : cljs.core.deref.call(null,G__162162));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__162161,child_cell,_,kids){
return (function (p1__162144_SHARP_,p2__162145_SHARP_,p3__162146_SHARP_,p4__162143_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__162143_SHARP_);
});})(vec__162161,child_cell,_,kids))
);
} else {
var node_162173 = ((function (vec__162161,child_cell,_,kids){
return (function (p1__162147_SHARP_){
if(typeof p1__162147_SHARP_ === 'string'){
var G__162163 = p1__162147_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__162163) : tailrecursion.hoplon.$text.call(null,G__162163));
} else {
if(cljs.core.truth_((function (){var G__162164 = p1__162147_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__162164) : tailrecursion.hoplon.node_QMARK_.call(null,G__162164));
})())){
return p1__162147_SHARP_;
} else {
return null;
}
}
});})(vec__162161,child_cell,_,kids))
;
var seq__162165_162174 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__162166_162175 = null;
var count__162167_162176 = (0);
var i__162168_162177 = (0);
while(true){
if((i__162168_162177 < count__162167_162176)){
var x_162178 = chunk__162166_162175.cljs$core$IIndexed$_nth$arity$2(null,i__162168_162177);
var temp__4425__auto___162179 = node_162173(x_162178);
if(cljs.core.truth_(temp__4425__auto___162179)){
var x_162180__$1 = temp__4425__auto___162179;
var G__162169_162181 = this$;
var G__162170_162182 = x_162180__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__162169_162181,G__162170_162182) : tailrecursion.hoplon.append_child.call(null,G__162169_162181,G__162170_162182));
} else {
}

var G__162183 = seq__162165_162174;
var G__162184 = chunk__162166_162175;
var G__162185 = count__162167_162176;
var G__162186 = (i__162168_162177 + (1));
seq__162165_162174 = G__162183;
chunk__162166_162175 = G__162184;
count__162167_162176 = G__162185;
i__162168_162177 = G__162186;
continue;
} else {
var temp__4425__auto___162187 = cljs.core.seq(seq__162165_162174);
if(temp__4425__auto___162187){
var seq__162165_162188__$1 = temp__4425__auto___162187;
if(cljs.core.chunked_seq_QMARK_(seq__162165_162188__$1)){
var c__4995__auto___162189 = cljs.core.chunk_first(seq__162165_162188__$1);
var G__162190 = cljs.core.chunk_rest(seq__162165_162188__$1);
var G__162191 = c__4995__auto___162189;
var G__162192 = cljs.core.count(c__4995__auto___162189);
var G__162193 = (0);
seq__162165_162174 = G__162190;
chunk__162166_162175 = G__162191;
count__162167_162176 = G__162192;
i__162168_162177 = G__162193;
continue;
} else {
var x_162194 = cljs.core.first(seq__162165_162188__$1);
var temp__4425__auto___162195__$1 = node_162173(x_162194);
if(cljs.core.truth_(temp__4425__auto___162195__$1)){
var x_162196__$1 = temp__4425__auto___162195__$1;
var G__162171_162197 = this$;
var G__162172_162198 = x_162196__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__162171_162197,G__162172_162198) : tailrecursion.hoplon.append_child.call(null,G__162171_162197,G__162172_162198));
} else {
}

var G__162199 = cljs.core.next(seq__162165_162188__$1);
var G__162200 = null;
var G__162201 = (0);
var G__162202 = (0);
seq__162165_162174 = G__162199;
chunk__162166_162175 = G__162200;
count__162167_162176 = G__162201;
i__162168_162177 = G__162202;
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
var G__162210__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__162204 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162204,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162204,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__162205 = this$;
G__162205.hoplonIFn(attr,kids);

return G__162205;
} else {
var G__162206 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__162206,attr);

tailrecursion.hoplon.add_children_BANG_(G__162206,kids);

return G__162206;
}
};
var G__162210 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__162211__i = 0, G__162211__a = new Array(arguments.length -  1);
while (G__162211__i < G__162211__a.length) {G__162211__a[G__162211__i] = arguments[G__162211__i + 1]; ++G__162211__i;}
  args = new cljs.core.IndexedSeq(G__162211__a,0);
} 
return G__162210__delegate.call(this,self__,args);};
G__162210.cljs$lang$maxFixedArity = 1;
G__162210.cljs$lang$applyTo = (function (arglist__162212){
var self__ = cljs.core.first(arglist__162212);
var args = cljs.core.rest(arglist__162212);
return G__162210__delegate(self__,args);
});
G__162210.cljs$core$IFn$_invoke$arity$variadic = G__162210__delegate;
return G__162210;
})()
;

Element.prototype.apply = (function (self__,args162203){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args162203)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__162213__delegate = function (args){
var this$ = this;
var vec__162207 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162207,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162207,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__162208 = this$;
G__162208.hoplonIFn(attr,kids);

return G__162208;
} else {
var G__162209 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__162209,attr);

tailrecursion.hoplon.add_children_BANG_(G__162209,kids);

return G__162209;
}
};
var G__162213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162214__i = 0, G__162214__a = new Array(arguments.length -  0);
while (G__162214__i < G__162214__a.length) {G__162214__a[G__162214__i] = arguments[G__162214__i + 0]; ++G__162214__i;}
  args = new cljs.core.IndexedSeq(G__162214__a,0);
} 
return G__162213__delegate.call(this,args);};
G__162213.cljs$lang$maxFixedArity = 0;
G__162213.cljs$lang$applyTo = (function (arglist__162215){
var args = cljs.core.seq(arglist__162215);
return G__162213__delegate(args);
});
G__162213.cljs$core$IFn$_invoke$arity$variadic = G__162213__delegate;
return G__162213;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__162228__delegate = function (args){
var vec__162222 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162222,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162222,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__162223 = elem;
return jQuery(G__162223);
})().empty();

var seq__162224 = cljs.core.seq(kids);
var chunk__162225 = null;
var count__162226 = (0);
var i__162227 = (0);
while(true){
if((i__162227 < count__162226)){
var k = chunk__162225.cljs$core$IIndexed$_nth$arity$2(null,i__162227);
elem.appendChild(k);

var G__162229 = seq__162224;
var G__162230 = chunk__162225;
var G__162231 = count__162226;
var G__162232 = (i__162227 + (1));
seq__162224 = G__162229;
chunk__162225 = G__162230;
count__162226 = G__162231;
i__162227 = G__162232;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162224);
if(temp__4425__auto__){
var seq__162224__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162224__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162224__$1);
var G__162233 = cljs.core.chunk_rest(seq__162224__$1);
var G__162234 = c__4995__auto__;
var G__162235 = cljs.core.count(c__4995__auto__);
var G__162236 = (0);
seq__162224 = G__162233;
chunk__162225 = G__162234;
count__162226 = G__162235;
i__162227 = G__162236;
continue;
} else {
var k = cljs.core.first(seq__162224__$1);
elem.appendChild(k);

var G__162237 = cljs.core.next(seq__162224__$1);
var G__162238 = null;
var G__162239 = (0);
var G__162240 = (0);
seq__162224 = G__162237;
chunk__162225 = G__162238;
count__162226 = G__162239;
i__162227 = G__162240;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__162228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162241__i = 0, G__162241__a = new Array(arguments.length -  0);
while (G__162241__i < G__162241__a.length) {G__162241__a[G__162241__i] = arguments[G__162241__i + 0]; ++G__162241__i;}
  args = new cljs.core.IndexedSeq(G__162241__a,0);
} 
return G__162228__delegate.call(this,args);};
G__162228.cljs$lang$maxFixedArity = 0;
G__162228.cljs$lang$applyTo = (function (arglist__162242){
var args = cljs.core.seq(arglist__162242);
return G__162228__delegate(args);
});
G__162228.cljs$core$IFn$_invoke$arity$variadic = G__162228__delegate;
return G__162228;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__162243__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__162243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162244__i = 0, G__162244__a = new Array(arguments.length -  0);
while (G__162244__i < G__162244__a.length) {G__162244__a[G__162244__i] = arguments[G__162244__i + 0]; ++G__162244__i;}
  args = new cljs.core.IndexedSeq(G__162244__a,0);
} 
return G__162243__delegate.call(this,args);};
G__162243.cljs$lang$maxFixedArity = 0;
G__162243.cljs$lang$applyTo = (function (arglist__162245){
var args = cljs.core.seq(arglist__162245);
return G__162243__delegate(args);
});
G__162243.cljs$core$IFn$_invoke$arity$variadic = G__162243__delegate;
return G__162243;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__162247 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162247,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq162246){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq162246));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__162248_SHARP_){
return document.createTextNode(p1__162248_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__162249_SHARP_){
return document.createComment(p1__162249_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = cljs.core.constant$keyword$tailrecursion$hoplon_SLASH__DASH__DASH__GT_;
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
var G__162251 = f;
return jQuery(G__162251);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return (function (){var G__162253 = document;
return jQuery(G__162253);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return (function (){var G__162255 = document;
return jQuery(G__162255);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__162257 = "body";
return jQuery(G__162257);
})().on("submit",(function (p1__162256_SHARP_){
var e = (function (){var G__162258 = p1__162256_SHARP_.target;
return jQuery(G__162258);
})();
if(cljs.core.truth_((function (){var or__4210__auto__ = e.attr("action");
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__162256_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__162260 = arguments.length;
switch (G__162260) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var G__162263 = arguments.length;
switch (G__162263) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__162265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162265) : cljs.core.atom.call(null,G__162265));
})();
var prefer_table__5106__auto__ = (function (){var G__162266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162266) : cljs.core.atom.call(null,G__162266));
})();
var method_cache__5107__auto__ = (function (){var G__162267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162267) : cljs.core.atom.call(null,G__162267));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__162268 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162268) : cljs.core.atom.call(null,G__162268));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$default,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default], null),cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","do!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,key,val){
var G__162269 = elem;
var G__162270 = cljs.core.constant$keyword$attr;
var G__162271 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162269,G__162270,G__162271) : tailrecursion.hoplon.do_BANG_.call(null,G__162269,G__162270,G__162271));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$value,(function() { 
var G__162273__delegate = function (elem,_,args){
var e = (function (){var G__162272 = elem;
return jQuery(G__162272);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__162273 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__162274__i = 0, G__162274__a = new Array(arguments.length -  2);
while (G__162274__i < G__162274__a.length) {G__162274__a[G__162274__i] = arguments[G__162274__i + 2]; ++G__162274__i;}
  args = new cljs.core.IndexedSeq(G__162274__a,0);
} 
return G__162273__delegate.call(this,elem,_,args);};
G__162273.cljs$lang$maxFixedArity = 2;
G__162273.cljs$lang$applyTo = (function (arglist__162275){
var elem = cljs.core.first(arglist__162275);
arglist__162275 = cljs.core.next(arglist__162275);
var _ = cljs.core.first(arglist__162275);
var args = cljs.core.rest(arglist__162275);
return G__162273__delegate(elem,_,args);
});
G__162273.cljs$core$IFn$_invoke$arity$variadic = G__162273__delegate;
return G__162273;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$attr,(function (elem,_,kvs){
var e = (function (){var G__162276 = elem;
return jQuery(G__162276);
})();
var seq__162277 = cljs.core.seq(kvs);
var chunk__162278 = null;
var count__162279 = (0);
var i__162280 = (0);
while(true){
if((i__162280 < count__162279)){
var vec__162281 = chunk__162278.cljs$core$IIndexed$_nth$arity$2(null,i__162280);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162281,(1),null);
var k_162283__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_162283__$1);
} else {
e.attr(k_162283__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_162283__$1:v));
}

var G__162284 = seq__162277;
var G__162285 = chunk__162278;
var G__162286 = count__162279;
var G__162287 = (i__162280 + (1));
seq__162277 = G__162284;
chunk__162278 = G__162285;
count__162279 = G__162286;
i__162280 = G__162287;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162277);
if(temp__4425__auto__){
var seq__162277__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162277__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162277__$1);
var G__162288 = cljs.core.chunk_rest(seq__162277__$1);
var G__162289 = c__4995__auto__;
var G__162290 = cljs.core.count(c__4995__auto__);
var G__162291 = (0);
seq__162277 = G__162288;
chunk__162278 = G__162289;
count__162279 = G__162290;
i__162280 = G__162291;
continue;
} else {
var vec__162282 = cljs.core.first(seq__162277__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162282,(1),null);
var k_162292__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_162292__$1);
} else {
e.attr(k_162292__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_162292__$1:v));
}

var G__162293 = cljs.core.next(seq__162277__$1);
var G__162294 = null;
var G__162295 = (0);
var G__162296 = (0);
seq__162277 = G__162293;
chunk__162278 = G__162294;
count__162279 = G__162295;
i__162280 = G__162296;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$class,(function (elem,_,kvs){
var elem__$1 = (function (){var G__162298 = elem;
return jQuery(G__162298);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__162297_SHARP_){
return cljs.core.zipmap(p1__162297_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__162299 = cljs.core.seq(clmap);
var chunk__162300 = null;
var count__162301 = (0);
var i__162302 = (0);
while(true){
if((i__162302 < count__162301)){
var vec__162303 = chunk__162300.cljs$core$IIndexed$_nth$arity$2(null,i__162302);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162303,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162303,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__162305 = seq__162299;
var G__162306 = chunk__162300;
var G__162307 = count__162301;
var G__162308 = (i__162302 + (1));
seq__162299 = G__162305;
chunk__162300 = G__162306;
count__162301 = G__162307;
i__162302 = G__162308;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162299);
if(temp__4425__auto__){
var seq__162299__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162299__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162299__$1);
var G__162309 = cljs.core.chunk_rest(seq__162299__$1);
var G__162310 = c__4995__auto__;
var G__162311 = cljs.core.count(c__4995__auto__);
var G__162312 = (0);
seq__162299 = G__162309;
chunk__162300 = G__162310;
count__162301 = G__162311;
i__162302 = G__162312;
continue;
} else {
var vec__162304 = cljs.core.first(seq__162299__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162304,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162304,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__162313 = cljs.core.next(seq__162299__$1);
var G__162314 = null;
var G__162315 = (0);
var G__162316 = (0);
seq__162299 = G__162313;
chunk__162300 = G__162314;
count__162301 = G__162315;
i__162302 = G__162316;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$css,(function (elem,_,kvs){
var e = (function (){var G__162317 = elem;
return jQuery(G__162317);
})();
var seq__162318 = cljs.core.seq(kvs);
var chunk__162319 = null;
var count__162320 = (0);
var i__162321 = (0);
while(true){
if((i__162321 < count__162320)){
var vec__162322 = chunk__162319.cljs$core$IIndexed$_nth$arity$2(null,i__162321);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162322,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__162324 = seq__162318;
var G__162325 = chunk__162319;
var G__162326 = count__162320;
var G__162327 = (i__162321 + (1));
seq__162318 = G__162324;
chunk__162319 = G__162325;
count__162320 = G__162326;
i__162321 = G__162327;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162318);
if(temp__4425__auto__){
var seq__162318__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162318__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162318__$1);
var G__162328 = cljs.core.chunk_rest(seq__162318__$1);
var G__162329 = c__4995__auto__;
var G__162330 = cljs.core.count(c__4995__auto__);
var G__162331 = (0);
seq__162318 = G__162328;
chunk__162319 = G__162329;
count__162320 = G__162330;
i__162321 = G__162331;
continue;
} else {
var vec__162323 = cljs.core.first(seq__162318__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162323,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__162332 = cljs.core.next(seq__162318__$1);
var G__162333 = null;
var G__162334 = (0);
var G__162335 = (0);
seq__162318 = G__162332;
chunk__162319 = G__162333;
count__162320 = G__162334;
i__162321 = G__162335;
continue;
}
} else {
return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$toggle,(function (elem,_,v){
return (function (){var G__162336 = elem;
return jQuery(G__162336);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__162337 = elem;
return jQuery(G__162337);
})().hide().slideDown("fast");
} else {
return (function (){var G__162338 = elem;
return jQuery(G__162338);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__162339 = elem;
return jQuery(G__162339);
})().hide().fadeIn("fast");
} else {
return (function (){var G__162340 = elem;
return jQuery(G__162340);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus,(function (elem,_,v){
var G__162341 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__162343 = elem;
return jQuery(G__162343);
})().focus();
} else {
return (function (){var G__162344 = elem;
return jQuery(G__162344);
})().focusout();
}
});
var G__162342 = (0);
return setTimeout(G__162341,G__162342);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$select,(function (elem,_,___$1){
return (function (){var G__162345 = elem;
return jQuery(G__162345);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__162346_162352 = elem;
var G__162347_162353 = cljs.core.constant$keyword$focus;
var G__162348_162354 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162346_162352,G__162347_162353,G__162348_162354) : tailrecursion.hoplon.do_BANG_.call(null,G__162346_162352,G__162347_162353,G__162348_162354));

var G__162349 = elem;
var G__162350 = cljs.core.constant$keyword$select;
var G__162351 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162349,G__162350,G__162351) : tailrecursion.hoplon.do_BANG_.call(null,G__162349,G__162350,G__162351));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$text,(function (elem,_,v){
return (function (){var G__162355 = elem;
return jQuery(G__162355);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (elem,_,v){
return (function (){var G__162356 = elem;
return jQuery(G__162356);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__162357 = "body,html";
return jQuery(G__162357);
})();
var elem__$1 = (function (){var G__162358 = elem;
return jQuery(G__162358);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__162359 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162359) : cljs.core.atom.call(null,G__162359));
})();
var prefer_table__5106__auto__ = (function (){var G__162360 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162360) : cljs.core.atom.call(null,G__162360));
})();
var method_cache__5107__auto__ = (function (){var G__162361 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162361) : cljs.core.atom.call(null,G__162361));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__162362 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162362) : cljs.core.atom.call(null,G__162362));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$default,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default], null),cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tailrecursion.hoplon","on!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__162363 = this$__$1.target;
return jQuery(G__162363);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__162364 = elem;
return jQuery(G__162364);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.sentinel = (function tailrecursion$hoplon$sentinel(){
return document.createElement("SENTINEL");
});
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(atom,init,f){
var G__162370_162375 = init;
var G__162371_162376 = (function (){var G__162372 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162372) : cljs.core.deref.call(null,G__162372));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__162370_162375,G__162371_162376) : f.call(null,G__162370_162375,G__162371_162376));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
var G__162373 = old;
var G__162374 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__162373,G__162374) : f.call(null,G__162373,G__162374));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (function (){var G__162399 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162399) : cljs.core.atom.call(null,G__162399));
})();
var on_deck = (function (){var G__162400 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162400) : cljs.core.atom.call(null,G__162400));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__162401,G__162402){
var G__162403 = G__162402;
return (G__162401.cljs$core$IFn$_invoke$arity$1 ? G__162401.cljs$core$IFn$_invoke$arity$1(G__162403) : G__162401.call(null,G__162403));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__162405,G__162404){
var G__162406 = G__162405;
return (G__162404.cljs$core$IFn$_invoke$arity$1 ? G__162404.cljs$core$IFn$_invoke$arity$1(G__162406) : G__162404.call(null,G__162406));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__162377_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__162409,G__162408,G__162407){
var G__162410 = G__162408;
var G__162411 = G__162409;
return (G__162407.cljs$core$IFn$_invoke$arity$2 ? G__162407.cljs$core$IFn$_invoke$arity$2(G__162410,G__162411) : G__162407.call(null,G__162410,G__162411));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__162377_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__162378_SHARP_){
var x = cljs.core.first((function (){var G__162412 = p1__162378_SHARP_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162412) : cljs.core.deref.call(null,G__162412));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__162378_SHARP_,cljs.core.rest);

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
var seq__162413 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__162414 = null;
var count__162415 = (0);
var i__162416 = (0);
while(true){
if((i__162416 < count__162415)){
var i = chunk__162414.cljs$core$IIndexed$_nth$arity$2(null,i__162416);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__162417 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__162417) : tpl.call(null,G__162417));
}
})());

var G__162419 = seq__162413;
var G__162420 = chunk__162414;
var G__162421 = count__162415;
var G__162422 = (i__162416 + (1));
seq__162413 = G__162419;
chunk__162414 = G__162420;
count__162415 = G__162421;
i__162416 = G__162422;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162413);
if(temp__4425__auto__){
var seq__162413__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162413__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162413__$1);
var G__162423 = cljs.core.chunk_rest(seq__162413__$1);
var G__162424 = c__4995__auto__;
var G__162425 = cljs.core.count(c__4995__auto__);
var G__162426 = (0);
seq__162413 = G__162423;
chunk__162414 = G__162424;
count__162415 = G__162425;
i__162416 = G__162426;
continue;
} else {
var i = cljs.core.first(seq__162413__$1);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__162418 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__162418) : tpl.call(null,G__162418));
}
})());

var G__162427 = cljs.core.next(seq__162413__$1);
var G__162428 = null;
var G__162429 = (0);
var G__162430 = (0);
seq__162413 = G__162427;
chunk__162414 = G__162428;
count__162415 = G__162429;
i__162416 = G__162430;
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
var n__5095__auto__ = (- diff);
var ___$1 = (0);
while(true){
if((___$1 < n__5095__auto__)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,p.removeChild(p.lastChild));

var G__162431 = (___$1 + (1));
___$1 = G__162431;
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
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__162433){
var vec__162434 = p__162433;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162434,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__162434,default$){
return (function (G__162435,G__162437,G__162436){
var or__4210__auto__ = (function (){var and__4198__auto__ = (function (){var G__162438 = G__162436;
return (G__162435.cljs$core$IFn$_invoke$arity$1 ? G__162435.cljs$core$IFn$_invoke$arity$1(G__162438) : G__162435.call(null,G__162438));
})();
if(cljs.core.truth_(and__4198__auto__)){
return G__162436;
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__162437;
}
});})(c,vec__162434,default$))
).call(null,cljs.core.seq,default$,c);
(function (){var G__162439 = window;
return jQuery(G__162439);
})().on("hashchange",((function (_,c,vec__162434,default$){
return (function (){
var G__162440 = c;
var G__162441 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__162440,G__162441) : cljs.core.reset_BANG_.call(null,G__162440,G__162441));
});})(_,c,vec__162434,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq162432){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq162432));
});
