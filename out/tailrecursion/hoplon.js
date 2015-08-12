// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__162034_SHARP_){
return (p1__162034_SHARP_ instanceof Node);
}):(function (p1__162035_SHARP_){
try{return p1__162035_SHARP_.nodeType;
}catch (e162036){if((e162036 instanceof Error)){
var _ = e162036;
return null;
} else {
throw e162036;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__162037_SHARP_){
try{return cljs.core.vector_QMARK_(p1__162037_SHARP_);
}catch (e162038){if((e162038 instanceof Error)){
var _ = e162038;
return null;
} else {
throw e162038;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__162039_SHARP_){
try{return cljs.core.seq_QMARK_(p1__162039_SHARP_);
}catch (e162040){if((e162040 instanceof Error)){
var _ = e162040;
return null;
} else {
throw e162040;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__162041_SHARP_){
if(cljs.core.truth_((function (){var and__4198__auto__ = console;
if(cljs.core.truth_(and__4198__auto__)){
return console.log;
} else {
return and__4198__auto__;
}
})())){
return console.log(p1__162041_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__162043 = arguments.length;
switch (G__162043) {
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
}catch (e162044){if((e162044 instanceof Error)){
var _ = e162044;
return not_found;
} else {
throw e162044;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__162047 = arguments.length;
switch (G__162047) {
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
var G__162059 = args;
var vec__162060 = G__162059;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162060,(0),null);
var args__$1 = cljs.core.nthnext(vec__162060,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__162059__$1 = G__162059;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__162061 = G__162059__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162061,(0),null);
var args__$2 = cljs.core.nthnext(vec__162061,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__162064 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__162059__$1,attr__$2,kids__$2,vec__162061,arg__$1,args__$2,attr,kids,G__162059,vec__162060,arg,args__$1){
return (function (p1__162049_SHARP_,p2__162050_SHARP_,p3__162051_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__162049_SHARP_,p2__162050_SHARP_,p3__162051_SHARP_);
});})(attr__$1,kids__$1,G__162059__$1,attr__$2,kids__$2,vec__162061,arg__$1,args__$2,attr,kids,G__162059,vec__162060,arg,args__$1))
,attr__$2,arg__$1);
var G__162065 = kids__$2;
var G__162066 = args__$2;
attr__$1 = G__162064;
kids__$1 = G__162065;
G__162059__$1 = G__162066;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__162067 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__162068 = kids__$2;
var G__162069 = cljs.core.rest(args__$2);
attr__$1 = G__162067;
kids__$1 = G__162068;
G__162059__$1 = G__162069;
continue;
} else {
if(cljs.core.truth_((function (){var G__162062 = arg__$1;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__162062) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__162062));
})())){
var G__162070 = attr__$2;
var G__162071 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__162072 = args__$2;
attr__$1 = G__162070;
kids__$1 = G__162071;
G__162059__$1 = G__162072;
continue;
} else {
if(cljs.core.truth_((function (){var G__162063 = arg__$1;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__162063) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__162063));
})())){
var G__162073 = attr__$2;
var G__162074 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__162075 = args__$2;
attr__$1 = G__162073;
kids__$1 = G__162074;
G__162059__$1 = G__162075;
continue;
} else {
var G__162076 = attr__$2;
var G__162077 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__162078 = args__$2;
attr__$1 = G__162076;
kids__$1 = G__162077;
G__162059__$1 = G__162078;
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
var G__162098_162113 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__162100_162115 = this$__$2;
var G__162101_162116 = k;
var G__162102_162117 = (function (){var G__162103 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162103) : cljs.core.deref.call(null,G__162103));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162100_162115,G__162101_162116,G__162102_162117) : tailrecursion.hoplon.do_BANG_.call(null,G__162100_162115,G__162101_162116,G__162102_162117));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__162080_SHARP_,p2__162081_SHARP_,p3__162082_SHARP_,p4__162079_SHARP_){
var G__162104 = this$__$2;
var G__162105 = k;
var G__162106 = p4__162079_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162104,G__162105,G__162106) : tailrecursion.hoplon.do_BANG_.call(null,G__162104,G__162105,G__162106));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
var G__162107_162118 = this$__$2;
var G__162108_162119 = k;
var G__162109_162120 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__162107_162118,G__162108_162119,G__162109_162120) : tailrecursion.hoplon.on_BANG_.call(null,G__162107_162118,G__162108_162119,G__162109_162120));
} else {
var G__162110_162121 = this$__$2;
var G__162111_162122 = k;
var G__162112_162123 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162110_162121,G__162111_162122,G__162112_162123) : tailrecursion.hoplon.do_BANG_.call(null,G__162110_162121,G__162111_162122,G__162112_162123));

}
}

return this$__$2;
});})(this$__$1))
,this$__$1,attr);
});})(this$__$1))
;
var G__162099_162114 = (0);
setTimeout(G__162098_162113,G__162099_162114);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__162124_SHARP_,p2__162125_SHARP_){
return p1__162124_SHARP_.appendChild(p2__162125_SHARP_);
}):(function (p1__162126_SHARP_,p2__162127_SHARP_){
try{return p1__162126_SHARP_.appendChild(p2__162127_SHARP_);
}catch (e162128){if((e162128 instanceof Error)){
var _ = e162128;
return null;
} else {
throw e162128;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
(function (){var G__162132 = this$;
return jQuery(G__162132);
})().empty();

var G__162133 = this$;
var G__162134 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__162133,G__162134) : tailrecursion.hoplon.add_children_BANG_.call(null,G__162133,G__162134));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__162140){
var vec__162153 = p__162140;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162153,(0),null);
var _ = cljs.core.nthnext(vec__162153,(1));
var kids = vec__162153;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__162154 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162154) : cljs.core.deref.call(null,G__162154));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__162153,child_cell,_,kids){
return (function (p1__162136_SHARP_,p2__162137_SHARP_,p3__162138_SHARP_,p4__162135_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__162135_SHARP_);
});})(vec__162153,child_cell,_,kids))
);
} else {
var node_162165 = ((function (vec__162153,child_cell,_,kids){
return (function (p1__162139_SHARP_){
if(typeof p1__162139_SHARP_ === 'string'){
var G__162155 = p1__162139_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__162155) : tailrecursion.hoplon.$text.call(null,G__162155));
} else {
if(cljs.core.truth_((function (){var G__162156 = p1__162139_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__162156) : tailrecursion.hoplon.node_QMARK_.call(null,G__162156));
})())){
return p1__162139_SHARP_;
} else {
return null;
}
}
});})(vec__162153,child_cell,_,kids))
;
var seq__162157_162166 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__162158_162167 = null;
var count__162159_162168 = (0);
var i__162160_162169 = (0);
while(true){
if((i__162160_162169 < count__162159_162168)){
var x_162170 = chunk__162158_162167.cljs$core$IIndexed$_nth$arity$2(null,i__162160_162169);
var temp__4425__auto___162171 = node_162165(x_162170);
if(cljs.core.truth_(temp__4425__auto___162171)){
var x_162172__$1 = temp__4425__auto___162171;
var G__162161_162173 = this$;
var G__162162_162174 = x_162172__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__162161_162173,G__162162_162174) : tailrecursion.hoplon.append_child.call(null,G__162161_162173,G__162162_162174));
} else {
}

var G__162175 = seq__162157_162166;
var G__162176 = chunk__162158_162167;
var G__162177 = count__162159_162168;
var G__162178 = (i__162160_162169 + (1));
seq__162157_162166 = G__162175;
chunk__162158_162167 = G__162176;
count__162159_162168 = G__162177;
i__162160_162169 = G__162178;
continue;
} else {
var temp__4425__auto___162179 = cljs.core.seq(seq__162157_162166);
if(temp__4425__auto___162179){
var seq__162157_162180__$1 = temp__4425__auto___162179;
if(cljs.core.chunked_seq_QMARK_(seq__162157_162180__$1)){
var c__4995__auto___162181 = cljs.core.chunk_first(seq__162157_162180__$1);
var G__162182 = cljs.core.chunk_rest(seq__162157_162180__$1);
var G__162183 = c__4995__auto___162181;
var G__162184 = cljs.core.count(c__4995__auto___162181);
var G__162185 = (0);
seq__162157_162166 = G__162182;
chunk__162158_162167 = G__162183;
count__162159_162168 = G__162184;
i__162160_162169 = G__162185;
continue;
} else {
var x_162186 = cljs.core.first(seq__162157_162180__$1);
var temp__4425__auto___162187__$1 = node_162165(x_162186);
if(cljs.core.truth_(temp__4425__auto___162187__$1)){
var x_162188__$1 = temp__4425__auto___162187__$1;
var G__162163_162189 = this$;
var G__162164_162190 = x_162188__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__162163_162189,G__162164_162190) : tailrecursion.hoplon.append_child.call(null,G__162163_162189,G__162164_162190));
} else {
}

var G__162191 = cljs.core.next(seq__162157_162180__$1);
var G__162192 = null;
var G__162193 = (0);
var G__162194 = (0);
seq__162157_162166 = G__162191;
chunk__162158_162167 = G__162192;
count__162159_162168 = G__162193;
i__162160_162169 = G__162194;
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
var G__162202__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__162196 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162196,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162196,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__162197 = this$;
G__162197.hoplonIFn(attr,kids);

return G__162197;
} else {
var G__162198 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__162198,attr);

tailrecursion.hoplon.add_children_BANG_(G__162198,kids);

return G__162198;
}
};
var G__162202 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__162203__i = 0, G__162203__a = new Array(arguments.length -  1);
while (G__162203__i < G__162203__a.length) {G__162203__a[G__162203__i] = arguments[G__162203__i + 1]; ++G__162203__i;}
  args = new cljs.core.IndexedSeq(G__162203__a,0);
} 
return G__162202__delegate.call(this,self__,args);};
G__162202.cljs$lang$maxFixedArity = 1;
G__162202.cljs$lang$applyTo = (function (arglist__162204){
var self__ = cljs.core.first(arglist__162204);
var args = cljs.core.rest(arglist__162204);
return G__162202__delegate(self__,args);
});
G__162202.cljs$core$IFn$_invoke$arity$variadic = G__162202__delegate;
return G__162202;
})()
;

Element.prototype.apply = (function (self__,args162195){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args162195)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__162205__delegate = function (args){
var this$ = this;
var vec__162199 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162199,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162199,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__162200 = this$;
G__162200.hoplonIFn(attr,kids);

return G__162200;
} else {
var G__162201 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__162201,attr);

tailrecursion.hoplon.add_children_BANG_(G__162201,kids);

return G__162201;
}
};
var G__162205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162206__i = 0, G__162206__a = new Array(arguments.length -  0);
while (G__162206__i < G__162206__a.length) {G__162206__a[G__162206__i] = arguments[G__162206__i + 0]; ++G__162206__i;}
  args = new cljs.core.IndexedSeq(G__162206__a,0);
} 
return G__162205__delegate.call(this,args);};
G__162205.cljs$lang$maxFixedArity = 0;
G__162205.cljs$lang$applyTo = (function (arglist__162207){
var args = cljs.core.seq(arglist__162207);
return G__162205__delegate(args);
});
G__162205.cljs$core$IFn$_invoke$arity$variadic = G__162205__delegate;
return G__162205;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__162220__delegate = function (args){
var vec__162214 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162214,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162214,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__162215 = elem;
return jQuery(G__162215);
})().empty();

var seq__162216 = cljs.core.seq(kids);
var chunk__162217 = null;
var count__162218 = (0);
var i__162219 = (0);
while(true){
if((i__162219 < count__162218)){
var k = chunk__162217.cljs$core$IIndexed$_nth$arity$2(null,i__162219);
elem.appendChild(k);

var G__162221 = seq__162216;
var G__162222 = chunk__162217;
var G__162223 = count__162218;
var G__162224 = (i__162219 + (1));
seq__162216 = G__162221;
chunk__162217 = G__162222;
count__162218 = G__162223;
i__162219 = G__162224;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162216);
if(temp__4425__auto__){
var seq__162216__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162216__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162216__$1);
var G__162225 = cljs.core.chunk_rest(seq__162216__$1);
var G__162226 = c__4995__auto__;
var G__162227 = cljs.core.count(c__4995__auto__);
var G__162228 = (0);
seq__162216 = G__162225;
chunk__162217 = G__162226;
count__162218 = G__162227;
i__162219 = G__162228;
continue;
} else {
var k = cljs.core.first(seq__162216__$1);
elem.appendChild(k);

var G__162229 = cljs.core.next(seq__162216__$1);
var G__162230 = null;
var G__162231 = (0);
var G__162232 = (0);
seq__162216 = G__162229;
chunk__162217 = G__162230;
count__162218 = G__162231;
i__162219 = G__162232;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__162220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162233__i = 0, G__162233__a = new Array(arguments.length -  0);
while (G__162233__i < G__162233__a.length) {G__162233__a[G__162233__i] = arguments[G__162233__i + 0]; ++G__162233__i;}
  args = new cljs.core.IndexedSeq(G__162233__a,0);
} 
return G__162220__delegate.call(this,args);};
G__162220.cljs$lang$maxFixedArity = 0;
G__162220.cljs$lang$applyTo = (function (arglist__162234){
var args = cljs.core.seq(arglist__162234);
return G__162220__delegate(args);
});
G__162220.cljs$core$IFn$_invoke$arity$variadic = G__162220__delegate;
return G__162220;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__162235__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__162235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__162236__i = 0, G__162236__a = new Array(arguments.length -  0);
while (G__162236__i < G__162236__a.length) {G__162236__a[G__162236__i] = arguments[G__162236__i + 0]; ++G__162236__i;}
  args = new cljs.core.IndexedSeq(G__162236__a,0);
} 
return G__162235__delegate.call(this,args);};
G__162235.cljs$lang$maxFixedArity = 0;
G__162235.cljs$lang$applyTo = (function (arglist__162237){
var args = cljs.core.seq(arglist__162237);
return G__162235__delegate(args);
});
G__162235.cljs$core$IFn$_invoke$arity$variadic = G__162235__delegate;
return G__162235;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__162239 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162239,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162239,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq162238){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq162238));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__162240_SHARP_){
return document.createTextNode(p1__162240_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__162241_SHARP_){
return document.createComment(p1__162241_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = cljs.core.constant$keyword$tailrecursion$hoplon_SLASH__DASH__DASH__GT_;
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
var G__162243 = f;
return jQuery(G__162243);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return (function (){var G__162245 = document;
return jQuery(G__162245);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return (function (){var G__162247 = document;
return jQuery(G__162247);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__162249 = "body";
return jQuery(G__162249);
})().on("submit",(function (p1__162248_SHARP_){
var e = (function (){var G__162250 = p1__162248_SHARP_.target;
return jQuery(G__162250);
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
return p1__162248_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__162252 = arguments.length;
switch (G__162252) {
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
var G__162255 = arguments.length;
switch (G__162255) {
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__162257 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162257) : cljs.core.atom.call(null,G__162257));
})();
var prefer_table__5106__auto__ = (function (){var G__162258 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162258) : cljs.core.atom.call(null,G__162258));
})();
var method_cache__5107__auto__ = (function (){var G__162259 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162259) : cljs.core.atom.call(null,G__162259));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__162260 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162260) : cljs.core.atom.call(null,G__162260));
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
var G__162261 = elem;
var G__162262 = cljs.core.constant$keyword$attr;
var G__162263 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162261,G__162262,G__162263) : tailrecursion.hoplon.do_BANG_.call(null,G__162261,G__162262,G__162263));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$value,(function() { 
var G__162265__delegate = function (elem,_,args){
var e = (function (){var G__162264 = elem;
return jQuery(G__162264);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__162265 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__162266__i = 0, G__162266__a = new Array(arguments.length -  2);
while (G__162266__i < G__162266__a.length) {G__162266__a[G__162266__i] = arguments[G__162266__i + 2]; ++G__162266__i;}
  args = new cljs.core.IndexedSeq(G__162266__a,0);
} 
return G__162265__delegate.call(this,elem,_,args);};
G__162265.cljs$lang$maxFixedArity = 2;
G__162265.cljs$lang$applyTo = (function (arglist__162267){
var elem = cljs.core.first(arglist__162267);
arglist__162267 = cljs.core.next(arglist__162267);
var _ = cljs.core.first(arglist__162267);
var args = cljs.core.rest(arglist__162267);
return G__162265__delegate(elem,_,args);
});
G__162265.cljs$core$IFn$_invoke$arity$variadic = G__162265__delegate;
return G__162265;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$attr,(function (elem,_,kvs){
var e = (function (){var G__162268 = elem;
return jQuery(G__162268);
})();
var seq__162269 = cljs.core.seq(kvs);
var chunk__162270 = null;
var count__162271 = (0);
var i__162272 = (0);
while(true){
if((i__162272 < count__162271)){
var vec__162273 = chunk__162270.cljs$core$IIndexed$_nth$arity$2(null,i__162272);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162273,(1),null);
var k_162275__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_162275__$1);
} else {
e.attr(k_162275__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_162275__$1:v));
}

var G__162276 = seq__162269;
var G__162277 = chunk__162270;
var G__162278 = count__162271;
var G__162279 = (i__162272 + (1));
seq__162269 = G__162276;
chunk__162270 = G__162277;
count__162271 = G__162278;
i__162272 = G__162279;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162269);
if(temp__4425__auto__){
var seq__162269__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162269__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162269__$1);
var G__162280 = cljs.core.chunk_rest(seq__162269__$1);
var G__162281 = c__4995__auto__;
var G__162282 = cljs.core.count(c__4995__auto__);
var G__162283 = (0);
seq__162269 = G__162280;
chunk__162270 = G__162281;
count__162271 = G__162282;
i__162272 = G__162283;
continue;
} else {
var vec__162274 = cljs.core.first(seq__162269__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162274,(1),null);
var k_162284__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_162284__$1);
} else {
e.attr(k_162284__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_162284__$1:v));
}

var G__162285 = cljs.core.next(seq__162269__$1);
var G__162286 = null;
var G__162287 = (0);
var G__162288 = (0);
seq__162269 = G__162285;
chunk__162270 = G__162286;
count__162271 = G__162287;
i__162272 = G__162288;
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
var elem__$1 = (function (){var G__162290 = elem;
return jQuery(G__162290);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__162289_SHARP_){
return cljs.core.zipmap(p1__162289_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__162291 = cljs.core.seq(clmap);
var chunk__162292 = null;
var count__162293 = (0);
var i__162294 = (0);
while(true){
if((i__162294 < count__162293)){
var vec__162295 = chunk__162292.cljs$core$IIndexed$_nth$arity$2(null,i__162294);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162295,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162295,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__162297 = seq__162291;
var G__162298 = chunk__162292;
var G__162299 = count__162293;
var G__162300 = (i__162294 + (1));
seq__162291 = G__162297;
chunk__162292 = G__162298;
count__162293 = G__162299;
i__162294 = G__162300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162291);
if(temp__4425__auto__){
var seq__162291__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162291__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162291__$1);
var G__162301 = cljs.core.chunk_rest(seq__162291__$1);
var G__162302 = c__4995__auto__;
var G__162303 = cljs.core.count(c__4995__auto__);
var G__162304 = (0);
seq__162291 = G__162301;
chunk__162292 = G__162302;
count__162293 = G__162303;
i__162294 = G__162304;
continue;
} else {
var vec__162296 = cljs.core.first(seq__162291__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162296,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162296,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__162305 = cljs.core.next(seq__162291__$1);
var G__162306 = null;
var G__162307 = (0);
var G__162308 = (0);
seq__162291 = G__162305;
chunk__162292 = G__162306;
count__162293 = G__162307;
i__162294 = G__162308;
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
var e = (function (){var G__162309 = elem;
return jQuery(G__162309);
})();
var seq__162310 = cljs.core.seq(kvs);
var chunk__162311 = null;
var count__162312 = (0);
var i__162313 = (0);
while(true){
if((i__162313 < count__162312)){
var vec__162314 = chunk__162311.cljs$core$IIndexed$_nth$arity$2(null,i__162313);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162314,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__162316 = seq__162310;
var G__162317 = chunk__162311;
var G__162318 = count__162312;
var G__162319 = (i__162313 + (1));
seq__162310 = G__162316;
chunk__162311 = G__162317;
count__162312 = G__162318;
i__162313 = G__162319;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162310);
if(temp__4425__auto__){
var seq__162310__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162310__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162310__$1);
var G__162320 = cljs.core.chunk_rest(seq__162310__$1);
var G__162321 = c__4995__auto__;
var G__162322 = cljs.core.count(c__4995__auto__);
var G__162323 = (0);
seq__162310 = G__162320;
chunk__162311 = G__162321;
count__162312 = G__162322;
i__162313 = G__162323;
continue;
} else {
var vec__162315 = cljs.core.first(seq__162310__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162315,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__162324 = cljs.core.next(seq__162310__$1);
var G__162325 = null;
var G__162326 = (0);
var G__162327 = (0);
seq__162310 = G__162324;
chunk__162311 = G__162325;
count__162312 = G__162326;
i__162313 = G__162327;
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
return (function (){var G__162328 = elem;
return jQuery(G__162328);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__162329 = elem;
return jQuery(G__162329);
})().hide().slideDown("fast");
} else {
return (function (){var G__162330 = elem;
return jQuery(G__162330);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__162331 = elem;
return jQuery(G__162331);
})().hide().fadeIn("fast");
} else {
return (function (){var G__162332 = elem;
return jQuery(G__162332);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus,(function (elem,_,v){
var G__162333 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__162335 = elem;
return jQuery(G__162335);
})().focus();
} else {
return (function (){var G__162336 = elem;
return jQuery(G__162336);
})().focusout();
}
});
var G__162334 = (0);
return setTimeout(G__162333,G__162334);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$select,(function (elem,_,___$1){
return (function (){var G__162337 = elem;
return jQuery(G__162337);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__162338_162344 = elem;
var G__162339_162345 = cljs.core.constant$keyword$focus;
var G__162340_162346 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162338_162344,G__162339_162345,G__162340_162346) : tailrecursion.hoplon.do_BANG_.call(null,G__162338_162344,G__162339_162345,G__162340_162346));

var G__162341 = elem;
var G__162342 = cljs.core.constant$keyword$select;
var G__162343 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__162341,G__162342,G__162343) : tailrecursion.hoplon.do_BANG_.call(null,G__162341,G__162342,G__162343));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$text,(function (elem,_,v){
return (function (){var G__162347 = elem;
return jQuery(G__162347);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (elem,_,v){
return (function (){var G__162348 = elem;
return jQuery(G__162348);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__162349 = "body,html";
return jQuery(G__162349);
})();
var elem__$1 = (function (){var G__162350 = elem;
return jQuery(G__162350);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__162351 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162351) : cljs.core.atom.call(null,G__162351));
})();
var prefer_table__5106__auto__ = (function (){var G__162352 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162352) : cljs.core.atom.call(null,G__162352));
})();
var method_cache__5107__auto__ = (function (){var G__162353 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162353) : cljs.core.atom.call(null,G__162353));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__162354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162354) : cljs.core.atom.call(null,G__162354));
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
return (function (){var G__162355 = this$__$1.target;
return jQuery(G__162355);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__162356 = elem;
return jQuery(G__162356);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.sentinel = (function tailrecursion$hoplon$sentinel(){
return document.createElement("SENTINEL");
});
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(atom,init,f){
var G__162362_162367 = init;
var G__162363_162368 = (function (){var G__162364 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162364) : cljs.core.deref.call(null,G__162364));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__162362_162367,G__162363_162368) : f.call(null,G__162362_162367,G__162363_162368));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
var G__162365 = old;
var G__162366 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__162365,G__162366) : f.call(null,G__162365,G__162366));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (function (){var G__162391 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162391) : cljs.core.atom.call(null,G__162391));
})();
var on_deck = (function (){var G__162392 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162392) : cljs.core.atom.call(null,G__162392));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__162393,G__162394){
var G__162395 = G__162394;
return (G__162393.cljs$core$IFn$_invoke$arity$1 ? G__162393.cljs$core$IFn$_invoke$arity$1(G__162395) : G__162393.call(null,G__162395));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__162397,G__162396){
var G__162398 = G__162397;
return (G__162396.cljs$core$IFn$_invoke$arity$1 ? G__162396.cljs$core$IFn$_invoke$arity$1(G__162398) : G__162396.call(null,G__162398));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__162369_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__162400,G__162399,G__162401){
var G__162402 = G__162400;
var G__162403 = G__162401;
return (G__162399.cljs$core$IFn$_invoke$arity$2 ? G__162399.cljs$core$IFn$_invoke$arity$2(G__162402,G__162403) : G__162399.call(null,G__162402,G__162403));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,tailrecursion.hoplon.safe_nth,p1__162369_SHARP_);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__162370_SHARP_){
var x = cljs.core.first((function (){var G__162404 = p1__162370_SHARP_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162404) : cljs.core.deref.call(null,G__162404));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__162370_SHARP_,cljs.core.rest);

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
var seq__162405 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__162406 = null;
var count__162407 = (0);
var i__162408 = (0);
while(true){
if((i__162408 < count__162407)){
var i = chunk__162406.cljs$core$IIndexed$_nth$arity$2(null,i__162408);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__162409 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__162409) : tpl.call(null,G__162409));
}
})());

var G__162411 = seq__162405;
var G__162412 = chunk__162406;
var G__162413 = count__162407;
var G__162414 = (i__162408 + (1));
seq__162405 = G__162411;
chunk__162406 = G__162412;
count__162407 = G__162413;
i__162408 = G__162414;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__162405);
if(temp__4425__auto__){
var seq__162405__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__162405__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__162405__$1);
var G__162415 = cljs.core.chunk_rest(seq__162405__$1);
var G__162416 = c__4995__auto__;
var G__162417 = cljs.core.count(c__4995__auto__);
var G__162418 = (0);
seq__162405 = G__162415;
chunk__162406 = G__162416;
count__162407 = G__162417;
i__162408 = G__162418;
continue;
} else {
var i = cljs.core.first(seq__162405__$1);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__162410 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__162410) : tpl.call(null,G__162410));
}
})());

var G__162419 = cljs.core.next(seq__162405__$1);
var G__162420 = null;
var G__162421 = (0);
var G__162422 = (0);
seq__162405 = G__162419;
chunk__162406 = G__162420;
count__162407 = G__162421;
i__162408 = G__162422;
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

var G__162423 = (___$1 + (1));
___$1 = G__162423;
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

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__162425){
var vec__162426 = p__162425;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__162426,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__162426,default$){
return (function (G__162427,G__162429,G__162428){
var or__4210__auto__ = (function (){var and__4198__auto__ = (function (){var G__162430 = G__162428;
return (G__162427.cljs$core$IFn$_invoke$arity$1 ? G__162427.cljs$core$IFn$_invoke$arity$1(G__162430) : G__162427.call(null,G__162430));
})();
if(cljs.core.truth_(and__4198__auto__)){
return G__162428;
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__162429;
}
});})(c,vec__162426,default$))
).call(null,cljs.core.seq,default$,c);
(function (){var G__162431 = window;
return jQuery(G__162431);
})().on("hashchange",((function (_,c,vec__162426,default$){
return (function (){
var G__162432 = c;
var G__162433 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__162432,G__162433) : cljs.core.reset_BANG_.call(null,G__162432,G__162433));
});})(_,c,vec__162426,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq162424){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq162424));
});
