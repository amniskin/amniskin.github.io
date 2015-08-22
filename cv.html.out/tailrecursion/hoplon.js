// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__9959_SHARP_){
return (p1__9959_SHARP_ instanceof Node);
}):(function (p1__9960_SHARP_){
try{return p1__9960_SHARP_.nodeType;
}catch (e9961){if((e9961 instanceof Error)){
var _ = e9961;
return null;
} else {
throw e9961;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9962_SHARP_){
try{return cljs.core.vector_QMARK_(p1__9962_SHARP_);
}catch (e9963){if((e9963 instanceof Error)){
var _ = e9963;
return null;
} else {
throw e9963;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9964_SHARP_){
try{return cljs.core.seq_QMARK_(p1__9964_SHARP_);
}catch (e9965){if((e9965 instanceof Error)){
var _ = e9965;
return null;
} else {
throw e9965;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__9966_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__9966_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args9967 = [];
var len__6061__auto___9971 = arguments.length;
var i__6062__auto___9972 = (0);
while(true){
if((i__6062__auto___9972 < len__6061__auto___9971)){
args9967.push((arguments[i__6062__auto___9972]));

var G__9973 = (i__6062__auto___9972 + (1));
i__6062__auto___9972 = G__9973;
continue;
} else {
}
break;
}

var G__9969 = args9967.length;
switch (G__9969) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9967.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e9970){if((e9970 instanceof Error)){
var _ = e9970;
return not_found;
} else {
throw e9970;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args9975 = [];
var len__6061__auto___9978 = arguments.length;
var i__6062__auto___9979 = (0);
while(true){
if((i__6062__auto___9979 < len__6061__auto___9978)){
args9975.push((arguments[i__6062__auto___9979]));

var G__9980 = (i__6062__auto___9979 + (1));
i__6062__auto___9979 = G__9980;
continue;
} else {
}
break;
}

var G__9977 = args9975.length;
switch (G__9977) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9975.length)].join('')));

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
var G__9990 = args;
var vec__9991 = G__9990;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9991,(0),null);
var args__$1 = cljs.core.nthnext(vec__9991,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__9990__$1 = G__9990;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9992 = G__9990__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,(0),null);
var args__$2 = cljs.core.nthnext(vec__9992,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__9993 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__9990__$1,attr__$2,kids__$2,vec__9992,arg__$1,args__$2,attr,kids,G__9990,vec__9991,arg,args__$1){
return (function (p1__9982_SHARP_,p2__9983_SHARP_,p3__9984_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__9982_SHARP_,p2__9983_SHARP_,p3__9984_SHARP_);
});})(attr__$1,kids__$1,G__9990__$1,attr__$2,kids__$2,vec__9992,arg__$1,args__$2,attr,kids,G__9990,vec__9991,arg,args__$1))
,attr__$2,arg__$1);
var G__9994 = kids__$2;
var G__9995 = args__$2;
attr__$1 = G__9993;
kids__$1 = G__9994;
G__9990__$1 = G__9995;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__9996 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__9997 = kids__$2;
var G__9998 = cljs.core.rest(args__$2);
attr__$1 = G__9996;
kids__$1 = G__9997;
G__9990__$1 = G__9998;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__9999 = attr__$2;
var G__10000 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10001 = args__$2;
attr__$1 = G__9999;
kids__$1 = G__10000;
G__9990__$1 = G__10001;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10002 = attr__$2;
var G__10003 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10004 = args__$2;
attr__$1 = G__10002;
kids__$1 = G__10003;
G__9990__$1 = G__10004;
continue;
} else {
var G__10005 = attr__$2;
var G__10006 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10007 = args__$2;
attr__$1 = G__10005;
kids__$1 = G__10006;
G__9990__$1 = G__10007;
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
var G__10023_10028 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10025_10030 = this$__$2;
var G__10026_10031 = k;
var G__10027_10032 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10025_10030,G__10026_10031,G__10027_10032) : tailrecursion.hoplon.do_BANG_.call(null,G__10025_10030,G__10026_10031,G__10027_10032));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10009_SHARP_,p2__10010_SHARP_,p3__10011_SHARP_,p4__10008_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10008_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10008_SHARP_));
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
var G__10024_10029 = (0);
setTimeout(G__10023_10028,G__10024_10029);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10033_SHARP_,p2__10034_SHARP_){
return p1__10033_SHARP_.appendChild(p2__10034_SHARP_);
}):(function (p1__10035_SHARP_,p2__10036_SHARP_){
try{return p1__10035_SHARP_.appendChild(p2__10036_SHARP_);
}catch (e10037){if((e10037 instanceof Error)){
var _ = e10037;
return null;
} else {
throw e10037;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10040 = this$;
var G__10041 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10040,G__10041) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10040,G__10041));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10047){
var vec__10053 = p__10047;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10053,(0),null);
var _ = cljs.core.nthnext(vec__10053,(1));
var kids = vec__10053;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10053,child_cell,_,kids){
return (function (p1__10043_SHARP_,p2__10044_SHARP_,p3__10045_SHARP_,p4__10042_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10042_SHARP_);
});})(vec__10053,child_cell,_,kids))
);
} else {
var node_10058 = ((function (vec__10053,child_cell,_,kids){
return (function (p1__10046_SHARP_){
if(typeof p1__10046_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10046_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10046_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10046_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10046_SHARP_)))){
return p1__10046_SHARP_;
} else {
return null;
}
}
});})(vec__10053,child_cell,_,kids))
;
var seq__10054_10059 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10055_10060 = null;
var count__10056_10061 = (0);
var i__10057_10062 = (0);
while(true){
if((i__10057_10062 < count__10056_10061)){
var x_10063 = chunk__10055_10060.cljs$core$IIndexed$_nth$arity$2(null,i__10057_10062);
var temp__4425__auto___10064 = node_10058(x_10063);
if(cljs.core.truth_(temp__4425__auto___10064)){
var x_10065__$1 = temp__4425__auto___10064;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10065__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10065__$1));
} else {
}

var G__10066 = seq__10054_10059;
var G__10067 = chunk__10055_10060;
var G__10068 = count__10056_10061;
var G__10069 = (i__10057_10062 + (1));
seq__10054_10059 = G__10066;
chunk__10055_10060 = G__10067;
count__10056_10061 = G__10068;
i__10057_10062 = G__10069;
continue;
} else {
var temp__4425__auto___10070 = cljs.core.seq(seq__10054_10059);
if(temp__4425__auto___10070){
var seq__10054_10071__$1 = temp__4425__auto___10070;
if(cljs.core.chunked_seq_QMARK_(seq__10054_10071__$1)){
var c__5806__auto___10072 = cljs.core.chunk_first(seq__10054_10071__$1);
var G__10073 = cljs.core.chunk_rest(seq__10054_10071__$1);
var G__10074 = c__5806__auto___10072;
var G__10075 = cljs.core.count(c__5806__auto___10072);
var G__10076 = (0);
seq__10054_10059 = G__10073;
chunk__10055_10060 = G__10074;
count__10056_10061 = G__10075;
i__10057_10062 = G__10076;
continue;
} else {
var x_10077 = cljs.core.first(seq__10054_10071__$1);
var temp__4425__auto___10078__$1 = node_10058(x_10077);
if(cljs.core.truth_(temp__4425__auto___10078__$1)){
var x_10079__$1 = temp__4425__auto___10078__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10079__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10079__$1));
} else {
}

var G__10080 = cljs.core.next(seq__10054_10071__$1);
var G__10081 = null;
var G__10082 = (0);
var G__10083 = (0);
seq__10054_10059 = G__10080;
chunk__10055_10060 = G__10081;
count__10056_10061 = G__10082;
i__10057_10062 = G__10083;
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
var G__10091__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10085 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10086 = this$;
G__10086.hoplonIFn(attr,kids);

return G__10086;
} else {
var G__10087 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10087,attr);

tailrecursion.hoplon.add_children_BANG_(G__10087,kids);

return G__10087;
}
};
var G__10091 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10092__i = 0, G__10092__a = new Array(arguments.length -  1);
while (G__10092__i < G__10092__a.length) {G__10092__a[G__10092__i] = arguments[G__10092__i + 1]; ++G__10092__i;}
  args = new cljs.core.IndexedSeq(G__10092__a,0);
} 
return G__10091__delegate.call(this,self__,args);};
G__10091.cljs$lang$maxFixedArity = 1;
G__10091.cljs$lang$applyTo = (function (arglist__10093){
var self__ = cljs.core.first(arglist__10093);
var args = cljs.core.rest(arglist__10093);
return G__10091__delegate(self__,args);
});
G__10091.cljs$core$IFn$_invoke$arity$variadic = G__10091__delegate;
return G__10091;
})()
;

Element.prototype.apply = (function (self__,args10084){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10084)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10094__delegate = function (args){
var this$ = this;
var vec__10088 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10088,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10088,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10089 = this$;
G__10089.hoplonIFn(attr,kids);

return G__10089;
} else {
var G__10090 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10090,attr);

tailrecursion.hoplon.add_children_BANG_(G__10090,kids);

return G__10090;
}
};
var G__10094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10095__i = 0, G__10095__a = new Array(arguments.length -  0);
while (G__10095__i < G__10095__a.length) {G__10095__a[G__10095__i] = arguments[G__10095__i + 0]; ++G__10095__i;}
  args = new cljs.core.IndexedSeq(G__10095__a,0);
} 
return G__10094__delegate.call(this,args);};
G__10094.cljs$lang$maxFixedArity = 0;
G__10094.cljs$lang$applyTo = (function (arglist__10096){
var args = cljs.core.seq(arglist__10096);
return G__10094__delegate(args);
});
G__10094.cljs$core$IFn$_invoke$arity$variadic = G__10094__delegate;
return G__10094;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10107__delegate = function (args){
var vec__10102 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10102,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10102,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10103 = cljs.core.seq(kids);
var chunk__10104 = null;
var count__10105 = (0);
var i__10106 = (0);
while(true){
if((i__10106 < count__10105)){
var k = chunk__10104.cljs$core$IIndexed$_nth$arity$2(null,i__10106);
elem.appendChild(k);

var G__10108 = seq__10103;
var G__10109 = chunk__10104;
var G__10110 = count__10105;
var G__10111 = (i__10106 + (1));
seq__10103 = G__10108;
chunk__10104 = G__10109;
count__10105 = G__10110;
i__10106 = G__10111;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10103);
if(temp__4425__auto__){
var seq__10103__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10103__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10103__$1);
var G__10112 = cljs.core.chunk_rest(seq__10103__$1);
var G__10113 = c__5806__auto__;
var G__10114 = cljs.core.count(c__5806__auto__);
var G__10115 = (0);
seq__10103 = G__10112;
chunk__10104 = G__10113;
count__10105 = G__10114;
i__10106 = G__10115;
continue;
} else {
var k = cljs.core.first(seq__10103__$1);
elem.appendChild(k);

var G__10116 = cljs.core.next(seq__10103__$1);
var G__10117 = null;
var G__10118 = (0);
var G__10119 = (0);
seq__10103 = G__10116;
chunk__10104 = G__10117;
count__10105 = G__10118;
i__10106 = G__10119;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10120__i = 0, G__10120__a = new Array(arguments.length -  0);
while (G__10120__i < G__10120__a.length) {G__10120__a[G__10120__i] = arguments[G__10120__i + 0]; ++G__10120__i;}
  args = new cljs.core.IndexedSeq(G__10120__a,0);
} 
return G__10107__delegate.call(this,args);};
G__10107.cljs$lang$maxFixedArity = 0;
G__10107.cljs$lang$applyTo = (function (arglist__10121){
var args = cljs.core.seq(arglist__10121);
return G__10107__delegate(args);
});
G__10107.cljs$core$IFn$_invoke$arity$variadic = G__10107__delegate;
return G__10107;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10122__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10123__i = 0, G__10123__a = new Array(arguments.length -  0);
while (G__10123__i < G__10123__a.length) {G__10123__a[G__10123__i] = arguments[G__10123__i + 0]; ++G__10123__i;}
  args = new cljs.core.IndexedSeq(G__10123__a,0);
} 
return G__10122__delegate.call(this,args);};
G__10122.cljs$lang$maxFixedArity = 0;
G__10122.cljs$lang$applyTo = (function (arglist__10124){
var args = cljs.core.seq(arglist__10124);
return G__10122__delegate(args);
});
G__10122.cljs$core$IFn$_invoke$arity$variadic = G__10122__delegate;
return G__10122;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___10127 = arguments.length;
var i__6062__auto___10128 = (0);
while(true){
if((i__6062__auto___10128 < len__6061__auto___10127)){
args__6068__auto__.push((arguments[i__6062__auto___10128]));

var G__10129 = (i__6062__auto___10128 + (1));
i__6062__auto___10128 = G__10129;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10126 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10126,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10125){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10125));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10130_SHARP_){
return document.createTextNode(p1__10130_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10131_SHARP_){
return document.createComment(p1__10131_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10132_SHARP_){
var e = (function (){var G__10133 = p1__10132_SHARP_.target;
return jQuery(G__10133);
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
return p1__10132_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10134 = [];
var len__6061__auto___10137 = arguments.length;
var i__6062__auto___10138 = (0);
while(true){
if((i__6062__auto___10138 < len__6061__auto___10137)){
args10134.push((arguments[i__6062__auto___10138]));

var G__10139 = (i__6062__auto___10138 + (1));
i__6062__auto___10138 = G__10139;
continue;
} else {
}
break;
}

var G__10136 = args10134.length;
switch (G__10136) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10134.length)].join('')));

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
var args10141 = [];
var len__6061__auto___10144 = arguments.length;
var i__6062__auto___10145 = (0);
while(true){
if((i__6062__auto___10145 < len__6061__auto___10144)){
args10141.push((arguments[i__6062__auto___10145]));

var G__10146 = (i__6062__auto___10145 + (1));
i__6062__auto___10145 = G__10146;
continue;
} else {
}
break;
}

var G__10143 = args10141.length;
switch (G__10143) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10141.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10148 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10148) : cljs.core.atom.call(null,G__10148));
})();
var prefer_table__5917__auto__ = (function (){var G__10149 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10149) : cljs.core.atom.call(null,G__10149));
})();
var method_cache__5918__auto__ = (function (){var G__10150 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10150) : cljs.core.atom.call(null,G__10150));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10151 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10151) : cljs.core.atom.call(null,G__10151));
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
var G__10152 = elem;
var G__10153 = cljs.core.cst$kw$attr;
var G__10154 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10152,G__10153,G__10154) : tailrecursion.hoplon.do_BANG_.call(null,G__10152,G__10153,G__10154));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10155__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10155 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10156__i = 0, G__10156__a = new Array(arguments.length -  2);
while (G__10156__i < G__10156__a.length) {G__10156__a[G__10156__i] = arguments[G__10156__i + 2]; ++G__10156__i;}
  args = new cljs.core.IndexedSeq(G__10156__a,0);
} 
return G__10155__delegate.call(this,elem,_,args);};
G__10155.cljs$lang$maxFixedArity = 2;
G__10155.cljs$lang$applyTo = (function (arglist__10157){
var elem = cljs.core.first(arglist__10157);
arglist__10157 = cljs.core.next(arglist__10157);
var _ = cljs.core.first(arglist__10157);
var args = cljs.core.rest(arglist__10157);
return G__10155__delegate(elem,_,args);
});
G__10155.cljs$core$IFn$_invoke$arity$variadic = G__10155__delegate;
return G__10155;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10158 = cljs.core.seq(kvs);
var chunk__10159 = null;
var count__10160 = (0);
var i__10161 = (0);
while(true){
if((i__10161 < count__10160)){
var vec__10162 = chunk__10159.cljs$core$IIndexed$_nth$arity$2(null,i__10161);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10162,(1),null);
var k_10164__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10164__$1);
} else {
e.attr(k_10164__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10164__$1:v));
}

var G__10165 = seq__10158;
var G__10166 = chunk__10159;
var G__10167 = count__10160;
var G__10168 = (i__10161 + (1));
seq__10158 = G__10165;
chunk__10159 = G__10166;
count__10160 = G__10167;
i__10161 = G__10168;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10158);
if(temp__4425__auto__){
var seq__10158__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10158__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10158__$1);
var G__10169 = cljs.core.chunk_rest(seq__10158__$1);
var G__10170 = c__5806__auto__;
var G__10171 = cljs.core.count(c__5806__auto__);
var G__10172 = (0);
seq__10158 = G__10169;
chunk__10159 = G__10170;
count__10160 = G__10171;
i__10161 = G__10172;
continue;
} else {
var vec__10163 = cljs.core.first(seq__10158__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10163,(1),null);
var k_10173__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10173__$1);
} else {
e.attr(k_10173__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10173__$1:v));
}

var G__10174 = cljs.core.next(seq__10158__$1);
var G__10175 = null;
var G__10176 = (0);
var G__10177 = (0);
seq__10158 = G__10174;
chunk__10159 = G__10175;
count__10160 = G__10176;
i__10161 = G__10177;
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
return (function (p1__10178_SHARP_){
return cljs.core.zipmap(p1__10178_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__10179 = cljs.core.seq(clmap);
var chunk__10180 = null;
var count__10181 = (0);
var i__10182 = (0);
while(true){
if((i__10182 < count__10181)){
var vec__10183 = chunk__10180.cljs$core$IIndexed$_nth$arity$2(null,i__10182);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10183,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10183,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10185 = seq__10179;
var G__10186 = chunk__10180;
var G__10187 = count__10181;
var G__10188 = (i__10182 + (1));
seq__10179 = G__10185;
chunk__10180 = G__10186;
count__10181 = G__10187;
i__10182 = G__10188;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10179);
if(temp__4425__auto__){
var seq__10179__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10179__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10179__$1);
var G__10189 = cljs.core.chunk_rest(seq__10179__$1);
var G__10190 = c__5806__auto__;
var G__10191 = cljs.core.count(c__5806__auto__);
var G__10192 = (0);
seq__10179 = G__10189;
chunk__10180 = G__10190;
count__10181 = G__10191;
i__10182 = G__10192;
continue;
} else {
var vec__10184 = cljs.core.first(seq__10179__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10193 = cljs.core.next(seq__10179__$1);
var G__10194 = null;
var G__10195 = (0);
var G__10196 = (0);
seq__10179 = G__10193;
chunk__10180 = G__10194;
count__10181 = G__10195;
i__10182 = G__10196;
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
var seq__10197 = cljs.core.seq(kvs);
var chunk__10198 = null;
var count__10199 = (0);
var i__10200 = (0);
while(true){
if((i__10200 < count__10199)){
var vec__10201 = chunk__10198.cljs$core$IIndexed$_nth$arity$2(null,i__10200);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10201,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10203 = seq__10197;
var G__10204 = chunk__10198;
var G__10205 = count__10199;
var G__10206 = (i__10200 + (1));
seq__10197 = G__10203;
chunk__10198 = G__10204;
count__10199 = G__10205;
i__10200 = G__10206;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10197);
if(temp__4425__auto__){
var seq__10197__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10197__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10197__$1);
var G__10207 = cljs.core.chunk_rest(seq__10197__$1);
var G__10208 = c__5806__auto__;
var G__10209 = cljs.core.count(c__5806__auto__);
var G__10210 = (0);
seq__10197 = G__10207;
chunk__10198 = G__10208;
count__10199 = G__10209;
i__10200 = G__10210;
continue;
} else {
var vec__10202 = cljs.core.first(seq__10197__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10202,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10211 = cljs.core.next(seq__10197__$1);
var G__10212 = null;
var G__10213 = (0);
var G__10214 = (0);
seq__10197 = G__10211;
chunk__10198 = G__10212;
count__10199 = G__10213;
i__10200 = G__10214;
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
var G__10215 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__10216 = (0);
return setTimeout(G__10215,G__10216);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10217 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10217) : cljs.core.atom.call(null,G__10217));
})();
var prefer_table__5917__auto__ = (function (){var G__10218 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10218) : cljs.core.atom.call(null,G__10218));
})();
var method_cache__5918__auto__ = (function (){var G__10219 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10219) : cljs.core.atom.call(null,G__10219));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10220 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10220) : cljs.core.atom.call(null,G__10220));
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
return (function (){var G__10221 = this$__$1.target;
return jQuery(G__10221);
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
var G__10224_10226 = init;
var G__10225_10227 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10224_10226,G__10225_10227) : f.call(null,G__10224_10226,G__10225_10227));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__10244 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10244) : cljs.core.atom.call(null,G__10244));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__10245,G__10246){
return (G__10245.cljs$core$IFn$_invoke$arity$1 ? G__10245.cljs$core$IFn$_invoke$arity$1(G__10246) : G__10245.call(null,G__10246));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__10248,G__10247){
return (G__10247.cljs$core$IFn$_invoke$arity$1 ? G__10247.cljs$core$IFn$_invoke$arity$1(G__10248) : G__10247.call(null,G__10248));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__10228_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__10250,G__10251,G__10249){
return (G__10249.cljs$core$IFn$_invoke$arity$2 ? G__10249.cljs$core$IFn$_invoke$arity$2(G__10250,G__10251) : G__10249.call(null,G__10250,G__10251));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__10228_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__10229_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__10229_SHARP_) : cljs.core.deref.call(null,p1__10229_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10229_SHARP_,cljs.core.rest);

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
var seq__10252 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10253 = null;
var count__10254 = (0);
var i__10255 = (0);
while(true){
if((i__10255 < count__10254)){
var i = chunk__10253.cljs$core$IIndexed$_nth$arity$2(null,i__10255);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__10256 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10256) : tpl.call(null,G__10256));
}
})());

var G__10258 = seq__10252;
var G__10259 = chunk__10253;
var G__10260 = count__10254;
var G__10261 = (i__10255 + (1));
seq__10252 = G__10258;
chunk__10253 = G__10259;
count__10254 = G__10260;
i__10255 = G__10261;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10252);
if(temp__4425__auto__){
var seq__10252__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10252__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10252__$1);
var G__10262 = cljs.core.chunk_rest(seq__10252__$1);
var G__10263 = c__5806__auto__;
var G__10264 = cljs.core.count(c__5806__auto__);
var G__10265 = (0);
seq__10252 = G__10262;
chunk__10253 = G__10263;
count__10254 = G__10264;
i__10255 = G__10265;
continue;
} else {
var i = cljs.core.first(seq__10252__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__10257 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10257) : tpl.call(null,G__10257));
}
})());

var G__10266 = cljs.core.next(seq__10252__$1);
var G__10267 = null;
var G__10268 = (0);
var G__10269 = (0);
seq__10252 = G__10266;
chunk__10253 = G__10267;
count__10254 = G__10268;
i__10255 = G__10269;
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

var G__10270 = (___$1 + (1));
___$1 = G__10270;
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
var len__6061__auto___10279 = arguments.length;
var i__6062__auto___10280 = (0);
while(true){
if((i__6062__auto___10280 < len__6061__auto___10279)){
args__6068__auto__.push((arguments[i__6062__auto___10280]));

var G__10281 = (i__6062__auto___10280 + (1));
i__6062__auto___10280 = G__10281;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10272){
var vec__10273 = p__10272;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__10273,default$){
return (function (G__10274,G__10276,G__10275){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__10274.cljs$core$IFn$_invoke$arity$1 ? G__10274.cljs$core$IFn$_invoke$arity$1(G__10275) : G__10274.call(null,G__10275));
if(cljs.core.truth_(and__5010__auto__)){
return G__10275;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__10276;
}
});})(c,vec__10273,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__10273,default$){
return (function (){
var G__10277 = c;
var G__10278 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10277,G__10278) : cljs.core.reset_BANG_.call(null,G__10277,G__10278));
});})(_,c,vec__10273,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq10271){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10271));
});
