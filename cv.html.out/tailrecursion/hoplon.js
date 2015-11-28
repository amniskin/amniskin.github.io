// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7979_SHARP_){
return (p1__7979_SHARP_ instanceof Node);
}):(function (p1__7980_SHARP_){
try{return p1__7980_SHARP_.nodeType;
}catch (e7981){if((e7981 instanceof Error)){
var _ = e7981;
return null;
} else {
throw e7981;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__7982_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__7982_SHARP_);
}catch (e7983){if((e7983 instanceof Error)){
var _ = e7983;
return null;
} else {
throw e7983;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__7984_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__7984_SHARP_);
}catch (e7985){if((e7985 instanceof Error)){
var _ = e7985;
return null;
} else {
throw e7985;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__7986_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__7986_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args7987 = [];
var len__6061__auto___7991 = arguments.length;
var i__6062__auto___7992 = (0);
while(true){
if((i__6062__auto___7992 < len__6061__auto___7991)){
args7987.push((arguments[i__6062__auto___7992]));

var G__7993 = (i__6062__auto___7992 + (1));
i__6062__auto___7992 = G__7993;
continue;
} else {
}
break;
}

var G__7989 = args7987.length;
switch (G__7989) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7987.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e7990){if((e7990 instanceof Error)){
var _ = e7990;
return not_found;
} else {
throw e7990;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args7995 = [];
var len__6061__auto___7998 = arguments.length;
var i__6062__auto___7999 = (0);
while(true){
if((i__6062__auto___7999 < len__6061__auto___7998)){
args7995.push((arguments[i__6062__auto___7999]));

var G__8000 = (i__6062__auto___7999 + (1));
i__6062__auto___7999 = G__8000;
continue;
} else {
}
break;
}

var G__7997 = args7995.length;
switch (G__7997) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7995.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.call(null,f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8010 = args;
var vec__8011 = G__8010;
var arg = cljs.core.nth.call(null,vec__8011,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8011,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8010__$1 = G__8010;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8012 = G__8010__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8012,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8012,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8013 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8010__$1,attr__$2,kids__$2,vec__8012,arg__$1,args__$2,attr,kids,G__8010,vec__8011,arg,args__$1){
return (function (p1__8002_SHARP_,p2__8003_SHARP_,p3__8004_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8002_SHARP_,p2__8003_SHARP_,p3__8004_SHARP_);
});})(attr__$1,kids__$1,G__8010__$1,attr__$2,kids__$2,vec__8012,arg__$1,args__$2,attr,kids,G__8010,vec__8011,arg,args__$1))
,attr__$2,arg__$1);
var G__8014 = kids__$2;
var G__8015 = args__$2;
attr__$1 = G__8013;
kids__$1 = G__8014;
G__8010__$1 = G__8015;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8016 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8017 = kids__$2;
var G__8018 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8016;
kids__$1 = G__8017;
G__8010__$1 = G__8018;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8019 = attr__$2;
var G__8020 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8021 = args__$2;
attr__$1 = G__8019;
kids__$1 = G__8020;
G__8010__$1 = G__8021;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8022 = attr__$2;
var G__8023 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8024 = args__$2;
attr__$1 = G__8022;
kids__$1 = G__8023;
G__8010__$1 = G__8024;
continue;
} else {
var G__8025 = attr__$2;
var G__8026 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8027 = args__$2;
attr__$1 = G__8025;
kids__$1 = G__8026;
G__8010__$1 = G__8027;
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
setTimeout(((function (this$__$1){
return (function (){
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v))){
tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,cljs.core.deref.call(null,v));

cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (this$__$1){
return (function (p1__8029_SHARP_,p2__8030_SHARP_,p3__8031_SHARP_,p4__8028_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__8028_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
tailrecursion.hoplon.on_BANG_.call(null,this$__$2,k,v);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,v);

}
}

return this$__$2;
});})(this$__$1))
,this$__$1,attr);
});})(this$__$1))
,(0));

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__8032_SHARP_,p2__8033_SHARP_){
return p1__8032_SHARP_.appendChild(p2__8033_SHARP_);
}):(function (p1__8034_SHARP_,p2__8035_SHARP_){
try{return p1__8034_SHARP_.appendChild(p2__8035_SHARP_);
}catch (e8036){if((e8036 instanceof Error)){
var _ = e8036;
return null;
} else {
throw e8036;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__8042){
var vec__8048 = p__8042;
var child_cell = cljs.core.nth.call(null,vec__8048,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8048,(1));
var kids = vec__8048;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__8048,child_cell,_,kids){
return (function (p1__8038_SHARP_,p2__8039_SHARP_,p3__8040_SHARP_,p4__8037_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__8037_SHARP_);
});})(vec__8048,child_cell,_,kids))
);
} else {
var node_8053 = ((function (vec__8048,child_cell,_,kids){
return (function (p1__8041_SHARP_){
if(typeof p1__8041_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__8041_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__8041_SHARP_))){
return p1__8041_SHARP_;
} else {
return null;
}
}
});})(vec__8048,child_cell,_,kids))
;
var seq__8049_8054 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8050_8055 = null;
var count__8051_8056 = (0);
var i__8052_8057 = (0);
while(true){
if((i__8052_8057 < count__8051_8056)){
var x_8058 = cljs.core._nth.call(null,chunk__8050_8055,i__8052_8057);
var temp__4425__auto___8059 = node_8053.call(null,x_8058);
if(cljs.core.truth_(temp__4425__auto___8059)){
var x_8060__$1 = temp__4425__auto___8059;
tailrecursion.hoplon.append_child.call(null,this$,x_8060__$1);
} else {
}

var G__8061 = seq__8049_8054;
var G__8062 = chunk__8050_8055;
var G__8063 = count__8051_8056;
var G__8064 = (i__8052_8057 + (1));
seq__8049_8054 = G__8061;
chunk__8050_8055 = G__8062;
count__8051_8056 = G__8063;
i__8052_8057 = G__8064;
continue;
} else {
var temp__4425__auto___8065 = cljs.core.seq.call(null,seq__8049_8054);
if(temp__4425__auto___8065){
var seq__8049_8066__$1 = temp__4425__auto___8065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8049_8066__$1)){
var c__5806__auto___8067 = cljs.core.chunk_first.call(null,seq__8049_8066__$1);
var G__8068 = cljs.core.chunk_rest.call(null,seq__8049_8066__$1);
var G__8069 = c__5806__auto___8067;
var G__8070 = cljs.core.count.call(null,c__5806__auto___8067);
var G__8071 = (0);
seq__8049_8054 = G__8068;
chunk__8050_8055 = G__8069;
count__8051_8056 = G__8070;
i__8052_8057 = G__8071;
continue;
} else {
var x_8072 = cljs.core.first.call(null,seq__8049_8066__$1);
var temp__4425__auto___8073__$1 = node_8053.call(null,x_8072);
if(cljs.core.truth_(temp__4425__auto___8073__$1)){
var x_8074__$1 = temp__4425__auto___8073__$1;
tailrecursion.hoplon.append_child.call(null,this$,x_8074__$1);
} else {
}

var G__8075 = cljs.core.next.call(null,seq__8049_8066__$1);
var G__8076 = null;
var G__8077 = (0);
var G__8078 = (0);
seq__8049_8054 = G__8075;
chunk__8050_8055 = G__8076;
count__8051_8056 = G__8077;
i__8052_8057 = G__8078;
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8086__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8080 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8080,(0),null);
var kids = cljs.core.nth.call(null,vec__8080,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8081 = this$;
G__8081.hoplonIFn(attr,kids);

return G__8081;
} else {
var G__8082 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__8082,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__8082,kids);

return G__8082;
}
};
var G__8086 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8087__i = 0, G__8087__a = new Array(arguments.length -  1);
while (G__8087__i < G__8087__a.length) {G__8087__a[G__8087__i] = arguments[G__8087__i + 1]; ++G__8087__i;}
  args = new cljs.core.IndexedSeq(G__8087__a,0);
} 
return G__8086__delegate.call(this,self__,args);};
G__8086.cljs$lang$maxFixedArity = 1;
G__8086.cljs$lang$applyTo = (function (arglist__8088){
var self__ = cljs.core.first(arglist__8088);
var args = cljs.core.rest(arglist__8088);
return G__8086__delegate(self__,args);
});
G__8086.cljs$core$IFn$_invoke$arity$variadic = G__8086__delegate;
return G__8086;
})()
;

Element.prototype.apply = (function (self__,args8079){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8079)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8089__delegate = function (args){
var this$ = this;
var vec__8083 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8083,(0),null);
var kids = cljs.core.nth.call(null,vec__8083,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8084 = this$;
G__8084.hoplonIFn(attr,kids);

return G__8084;
} else {
var G__8085 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__8085,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__8085,kids);

return G__8085;
}
};
var G__8089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8090__i = 0, G__8090__a = new Array(arguments.length -  0);
while (G__8090__i < G__8090__a.length) {G__8090__a[G__8090__i] = arguments[G__8090__i + 0]; ++G__8090__i;}
  args = new cljs.core.IndexedSeq(G__8090__a,0);
} 
return G__8089__delegate.call(this,args);};
G__8089.cljs$lang$maxFixedArity = 0;
G__8089.cljs$lang$applyTo = (function (arglist__8091){
var args = cljs.core.seq(arglist__8091);
return G__8089__delegate(args);
});
G__8089.cljs$core$IFn$_invoke$arity$variadic = G__8089__delegate;
return G__8089;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__8102__delegate = function (args){
var vec__8097 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8097,(0),null);
var kids = cljs.core.nth.call(null,vec__8097,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__8098 = cljs.core.seq.call(null,kids);
var chunk__8099 = null;
var count__8100 = (0);
var i__8101 = (0);
while(true){
if((i__8101 < count__8100)){
var k = cljs.core._nth.call(null,chunk__8099,i__8101);
elem.appendChild(k);

var G__8103 = seq__8098;
var G__8104 = chunk__8099;
var G__8105 = count__8100;
var G__8106 = (i__8101 + (1));
seq__8098 = G__8103;
chunk__8099 = G__8104;
count__8100 = G__8105;
i__8101 = G__8106;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8098);
if(temp__4425__auto__){
var seq__8098__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8098__$1);
var G__8107 = cljs.core.chunk_rest.call(null,seq__8098__$1);
var G__8108 = c__5806__auto__;
var G__8109 = cljs.core.count.call(null,c__5806__auto__);
var G__8110 = (0);
seq__8098 = G__8107;
chunk__8099 = G__8108;
count__8100 = G__8109;
i__8101 = G__8110;
continue;
} else {
var k = cljs.core.first.call(null,seq__8098__$1);
elem.appendChild(k);

var G__8111 = cljs.core.next.call(null,seq__8098__$1);
var G__8112 = null;
var G__8113 = (0);
var G__8114 = (0);
seq__8098 = G__8111;
chunk__8099 = G__8112;
count__8100 = G__8113;
i__8101 = G__8114;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__8102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8115__i = 0, G__8115__a = new Array(arguments.length -  0);
while (G__8115__i < G__8115__a.length) {G__8115__a[G__8115__i] = arguments[G__8115__i + 0]; ++G__8115__i;}
  args = new cljs.core.IndexedSeq(G__8115__a,0);
} 
return G__8102__delegate.call(this,args);};
G__8102.cljs$lang$maxFixedArity = 0;
G__8102.cljs$lang$applyTo = (function (arglist__8116){
var args = cljs.core.seq(arglist__8116);
return G__8102__delegate(args);
});
G__8102.cljs$core$IFn$_invoke$arity$variadic = G__8102__delegate;
return G__8102;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__8117__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__8117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8118__i = 0, G__8118__a = new Array(arguments.length -  0);
while (G__8118__i < G__8118__a.length) {G__8118__a[G__8118__i] = arguments[G__8118__i + 0]; ++G__8118__i;}
  args = new cljs.core.IndexedSeq(G__8118__a,0);
} 
return G__8117__delegate.call(this,args);};
G__8117.cljs$lang$maxFixedArity = 0;
G__8117.cljs$lang$applyTo = (function (arglist__8119){
var args = cljs.core.seq(arglist__8119);
return G__8117__delegate(args);
});
G__8117.cljs$core$IFn$_invoke$arity$variadic = G__8117__delegate;
return G__8117;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___8122 = arguments.length;
var i__6062__auto___8123 = (0);
while(true){
if((i__6062__auto___8123 < len__6061__auto___8122)){
args__6068__auto__.push((arguments[i__6062__auto___8123]));

var G__8124 = (i__6062__auto___8123 + (1));
i__6062__auto___8123 = G__8124;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8121 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8121,(0),null);
var _ = cljs.core.nth.call(null,vec__8121,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq8120){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8120));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__8125_SHARP_){
return document.createTextNode(p1__8125_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__8126_SHARP_){
return document.createComment(p1__8126_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = new cljs.core.Keyword("tailrecursion.hoplon","-->","tailrecursion.hoplon/-->",-492295756);
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8127_SHARP_){
var e = jQuery(p1__8127_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8127_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args8128 = [];
var len__6061__auto___8131 = arguments.length;
var i__6062__auto___8132 = (0);
while(true){
if((i__6062__auto___8132 < len__6061__auto___8131)){
args8128.push((arguments[i__6062__auto___8132]));

var G__8133 = (i__6062__auto___8132 + (1));
i__6062__auto___8132 = G__8133;
continue;
} else {
}
break;
}

var G__8130 = args8128.length;
switch (G__8130) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8128.length)].join('')));

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
var args8135 = [];
var len__6061__auto___8138 = arguments.length;
var i__6062__auto___8139 = (0);
while(true){
if((i__6062__auto___8139 < len__6061__auto___8138)){
args8135.push((arguments[i__6062__auto___8139]));

var G__8140 = (i__6062__auto___8139 + (1));
i__6062__auto___8139 = G__8140;
continue;
} else {
}
break;
}

var G__8137 = args8135.length;
switch (G__8137) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8135.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8142__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__8142 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8143__i = 0, G__8143__a = new Array(arguments.length -  2);
while (G__8143__i < G__8143__a.length) {G__8143__a[G__8143__i] = arguments[G__8143__i + 2]; ++G__8143__i;}
  args = new cljs.core.IndexedSeq(G__8143__a,0);
} 
return G__8142__delegate.call(this,elem,_,args);};
G__8142.cljs$lang$maxFixedArity = 2;
G__8142.cljs$lang$applyTo = (function (arglist__8144){
var elem = cljs.core.first(arglist__8144);
arglist__8144 = cljs.core.next(arglist__8144);
var _ = cljs.core.first(arglist__8144);
var args = cljs.core.rest(arglist__8144);
return G__8142__delegate(elem,_,args);
});
G__8142.cljs$core$IFn$_invoke$arity$variadic = G__8142__delegate;
return G__8142;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8145 = cljs.core.seq.call(null,kvs);
var chunk__8146 = null;
var count__8147 = (0);
var i__8148 = (0);
while(true){
if((i__8148 < count__8147)){
var vec__8149 = cljs.core._nth.call(null,chunk__8146,i__8148);
var k = cljs.core.nth.call(null,vec__8149,(0),null);
var v = cljs.core.nth.call(null,vec__8149,(1),null);
var k_8151__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8151__$1);
} else {
e.attr(k_8151__$1,((cljs.core._EQ_.call(null,true,v))?k_8151__$1:v));
}

var G__8152 = seq__8145;
var G__8153 = chunk__8146;
var G__8154 = count__8147;
var G__8155 = (i__8148 + (1));
seq__8145 = G__8152;
chunk__8146 = G__8153;
count__8147 = G__8154;
i__8148 = G__8155;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8145);
if(temp__4425__auto__){
var seq__8145__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8145__$1);
var G__8156 = cljs.core.chunk_rest.call(null,seq__8145__$1);
var G__8157 = c__5806__auto__;
var G__8158 = cljs.core.count.call(null,c__5806__auto__);
var G__8159 = (0);
seq__8145 = G__8156;
chunk__8146 = G__8157;
count__8147 = G__8158;
i__8148 = G__8159;
continue;
} else {
var vec__8150 = cljs.core.first.call(null,seq__8145__$1);
var k = cljs.core.nth.call(null,vec__8150,(0),null);
var v = cljs.core.nth.call(null,vec__8150,(1),null);
var k_8160__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8160__$1);
} else {
e.attr(k_8160__$1,((cljs.core._EQ_.call(null,true,v))?k_8160__$1:v));
}

var G__8161 = cljs.core.next.call(null,seq__8145__$1);
var G__8162 = null;
var G__8163 = (0);
var G__8164 = (0);
seq__8145 = G__8161;
chunk__8146 = G__8162;
count__8147 = G__8163;
i__8148 = G__8164;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8165_SHARP_){
return cljs.core.zipmap.call(null,p1__8165_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8166 = cljs.core.seq.call(null,clmap);
var chunk__8167 = null;
var count__8168 = (0);
var i__8169 = (0);
while(true){
if((i__8169 < count__8168)){
var vec__8170 = cljs.core._nth.call(null,chunk__8167,i__8169);
var c = cljs.core.nth.call(null,vec__8170,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8170,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8172 = seq__8166;
var G__8173 = chunk__8167;
var G__8174 = count__8168;
var G__8175 = (i__8169 + (1));
seq__8166 = G__8172;
chunk__8167 = G__8173;
count__8168 = G__8174;
i__8169 = G__8175;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8166);
if(temp__4425__auto__){
var seq__8166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8166__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8166__$1);
var G__8176 = cljs.core.chunk_rest.call(null,seq__8166__$1);
var G__8177 = c__5806__auto__;
var G__8178 = cljs.core.count.call(null,c__5806__auto__);
var G__8179 = (0);
seq__8166 = G__8176;
chunk__8167 = G__8177;
count__8168 = G__8178;
i__8169 = G__8179;
continue;
} else {
var vec__8171 = cljs.core.first.call(null,seq__8166__$1);
var c = cljs.core.nth.call(null,vec__8171,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8171,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8180 = cljs.core.next.call(null,seq__8166__$1);
var G__8181 = null;
var G__8182 = (0);
var G__8183 = (0);
seq__8166 = G__8180;
chunk__8167 = G__8181;
count__8168 = G__8182;
i__8169 = G__8183;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8184 = cljs.core.seq.call(null,kvs);
var chunk__8185 = null;
var count__8186 = (0);
var i__8187 = (0);
while(true){
if((i__8187 < count__8186)){
var vec__8188 = cljs.core._nth.call(null,chunk__8185,i__8187);
var k = cljs.core.nth.call(null,vec__8188,(0),null);
var v = cljs.core.nth.call(null,vec__8188,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8190 = seq__8184;
var G__8191 = chunk__8185;
var G__8192 = count__8186;
var G__8193 = (i__8187 + (1));
seq__8184 = G__8190;
chunk__8185 = G__8191;
count__8186 = G__8192;
i__8187 = G__8193;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8184);
if(temp__4425__auto__){
var seq__8184__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8184__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8184__$1);
var G__8194 = cljs.core.chunk_rest.call(null,seq__8184__$1);
var G__8195 = c__5806__auto__;
var G__8196 = cljs.core.count.call(null,c__5806__auto__);
var G__8197 = (0);
seq__8184 = G__8194;
chunk__8185 = G__8195;
count__8186 = G__8196;
i__8187 = G__8197;
continue;
} else {
var vec__8189 = cljs.core.first.call(null,seq__8184__$1);
var k = cljs.core.nth.call(null,vec__8189,(0),null);
var v = cljs.core.nth.call(null,vec__8189,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8198 = cljs.core.next.call(null,seq__8184__$1);
var G__8199 = null;
var G__8200 = (0);
var G__8201 = (0);
seq__8184 = G__8198;
chunk__8185 = G__8199;
count__8186 = G__8200;
i__8187 = G__8201;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.sentinel = (function tailrecursion$hoplon$sentinel(){
return document.createElement("SENTINEL");
});
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(atom,init,f){
f.call(null,init,cljs.core.deref.call(null,atom));

return cljs.core.add_watch.call(null,atom,cljs.core.gensym.call(null),(function (_,___$1,old,new$){
return f.call(null,old,new$);
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = cljs.core.atom.call(null,(0));
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck){
return (function (G__8215,G__8216){
return G__8215.call(null,G__8216);
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq){
return (function (G__8218,G__8217){
return G__8217.call(null,G__8218);
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__8202_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__8220,G__8221,G__8219){
return G__8219.call(null,G__8220,G__8221);
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__8202_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__8203_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8203_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8203_SHARP_,cljs.core.rest);

return x;
});})(pool_size,on_deck,items_seq,cur_count,ith_item))
;
var d = tailrecursion.hoplon.sentinel.call(null);
tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_){
return (function (){
var p = d.parentNode;
p.removeChild(d);

return tailrecursion.hoplon.do_watch.call(null,cur_count,(0),((function (p,d,pool_size,on_deck,items_seq,cur_count,ith_item,shift_BANG_){
return (function (old,new$){
var diff = (new$ - old);
if((diff > (0))){
var seq__8222 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8223 = null;
var count__8224 = (0);
var i__8225 = (0);
while(true){
if((i__8225 < count__8224)){
var i = cljs.core._nth.call(null,chunk__8223,i__8225);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__8226 = seq__8222;
var G__8227 = chunk__8223;
var G__8228 = count__8224;
var G__8229 = (i__8225 + (1));
seq__8222 = G__8226;
chunk__8223 = G__8227;
count__8224 = G__8228;
i__8225 = G__8229;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8222);
if(temp__4425__auto__){
var seq__8222__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8222__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8222__$1);
var G__8230 = cljs.core.chunk_rest.call(null,seq__8222__$1);
var G__8231 = c__5806__auto__;
var G__8232 = cljs.core.count.call(null,c__5806__auto__);
var G__8233 = (0);
seq__8222 = G__8230;
chunk__8223 = G__8231;
count__8224 = G__8232;
i__8225 = G__8233;
continue;
} else {
var i = cljs.core.first.call(null,seq__8222__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__8234 = cljs.core.next.call(null,seq__8222__$1);
var G__8235 = null;
var G__8236 = (0);
var G__8237 = (0);
seq__8222 = G__8234;
chunk__8223 = G__8235;
count__8224 = G__8236;
i__8225 = G__8237;
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
cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,p.removeChild(p.lastChild));

var G__8238 = (___$1 + (1));
___$1 = G__8238;
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
var len__6061__auto___8245 = arguments.length;
var i__6062__auto___8246 = (0);
while(true){
if((i__6062__auto___8246 < len__6061__auto___8245)){
args__6068__auto__.push((arguments[i__6062__auto___8246]));

var G__8247 = (i__6062__auto___8246 + (1));
i__6062__auto___8246 = G__8247;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8240){
var vec__8241 = p__8240;
var default$ = cljs.core.nth.call(null,vec__8241,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__8241,default$){
return (function (G__8242,G__8244,G__8243){
var or__5022__auto__ = (function (){var and__5010__auto__ = G__8242.call(null,G__8243);
if(cljs.core.truth_(and__5010__auto__)){
return G__8243;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__8244;
}
});})(c,vec__8241,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8241,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8241,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq8239){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8239));
});

//# sourceMappingURL=hoplon.js.map