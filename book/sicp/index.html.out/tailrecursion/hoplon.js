// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__273828_SHARP_){
return (p1__273828_SHARP_ instanceof Node);
}):(function (p1__273829_SHARP_){
try{return p1__273829_SHARP_.nodeType;
}catch (e273830){if((e273830 instanceof Error)){
var _ = e273830;
return null;
} else {
throw e273830;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__273831_SHARP_){
try{return cljs.core.vector_QMARK_(p1__273831_SHARP_);
}catch (e273832){if((e273832 instanceof Error)){
var _ = e273832;
return null;
} else {
throw e273832;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__273833_SHARP_){
try{return cljs.core.seq_QMARK_(p1__273833_SHARP_);
}catch (e273834){if((e273834 instanceof Error)){
var _ = e273834;
return null;
} else {
throw e273834;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__273835_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__273835_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args273836 = [];
var len__6061__auto___273840 = arguments.length;
var i__6062__auto___273841 = (0);
while(true){
if((i__6062__auto___273841 < len__6061__auto___273840)){
args273836.push((arguments[i__6062__auto___273841]));

var G__273842 = (i__6062__auto___273841 + (1));
i__6062__auto___273841 = G__273842;
continue;
} else {
}
break;
}

var G__273838 = args273836.length;
switch (G__273838) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args273836.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e273839){if((e273839 instanceof Error)){
var _ = e273839;
return not_found;
} else {
throw e273839;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args273844 = [];
var len__6061__auto___273847 = arguments.length;
var i__6062__auto___273848 = (0);
while(true){
if((i__6062__auto___273848 < len__6061__auto___273847)){
args273844.push((arguments[i__6062__auto___273848]));

var G__273849 = (i__6062__auto___273848 + (1));
i__6062__auto___273848 = G__273849;
continue;
} else {
}
break;
}

var G__273846 = args273844.length;
switch (G__273846) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args273844.length)].join('')));

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
var G__273859 = args;
var vec__273860 = G__273859;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273860,(0),null);
var args__$1 = cljs.core.nthnext(vec__273860,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__273859__$1 = G__273859;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__273861 = G__273859__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273861,(0),null);
var args__$2 = cljs.core.nthnext(vec__273861,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__273862 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__273859__$1,attr__$2,kids__$2,vec__273861,arg__$1,args__$2,attr,kids,G__273859,vec__273860,arg,args__$1){
return (function (p1__273851_SHARP_,p2__273852_SHARP_,p3__273853_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__273851_SHARP_,p2__273852_SHARP_,p3__273853_SHARP_);
});})(attr__$1,kids__$1,G__273859__$1,attr__$2,kids__$2,vec__273861,arg__$1,args__$2,attr,kids,G__273859,vec__273860,arg,args__$1))
,attr__$2,arg__$1);
var G__273863 = kids__$2;
var G__273864 = args__$2;
attr__$1 = G__273862;
kids__$1 = G__273863;
G__273859__$1 = G__273864;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__273865 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__273866 = kids__$2;
var G__273867 = cljs.core.rest(args__$2);
attr__$1 = G__273865;
kids__$1 = G__273866;
G__273859__$1 = G__273867;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__273868 = attr__$2;
var G__273869 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__273870 = args__$2;
attr__$1 = G__273868;
kids__$1 = G__273869;
G__273859__$1 = G__273870;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__273871 = attr__$2;
var G__273872 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__273873 = args__$2;
attr__$1 = G__273871;
kids__$1 = G__273872;
G__273859__$1 = G__273873;
continue;
} else {
var G__273874 = attr__$2;
var G__273875 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__273876 = args__$2;
attr__$1 = G__273874;
kids__$1 = G__273875;
G__273859__$1 = G__273876;
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
var G__273892_273897 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__273894_273899 = this$__$2;
var G__273895_273900 = k;
var G__273896_273901 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__273894_273899,G__273895_273900,G__273896_273901) : tailrecursion.hoplon.do_BANG_.call(null,G__273894_273899,G__273895_273900,G__273896_273901));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__273878_SHARP_,p2__273879_SHARP_,p3__273880_SHARP_,p4__273877_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__273877_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__273877_SHARP_));
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
var G__273893_273898 = (0);
setTimeout(G__273892_273897,G__273893_273898);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__273902_SHARP_,p2__273903_SHARP_){
return p1__273902_SHARP_.appendChild(p2__273903_SHARP_);
}):(function (p1__273904_SHARP_,p2__273905_SHARP_){
try{return p1__273904_SHARP_.appendChild(p2__273905_SHARP_);
}catch (e273906){if((e273906 instanceof Error)){
var _ = e273906;
return null;
} else {
throw e273906;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__273909 = this$;
var G__273910 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__273909,G__273910) : tailrecursion.hoplon.add_children_BANG_.call(null,G__273909,G__273910));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__273916){
var vec__273922 = p__273916;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273922,(0),null);
var _ = cljs.core.nthnext(vec__273922,(1));
var kids = vec__273922;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__273922,child_cell,_,kids){
return (function (p1__273912_SHARP_,p2__273913_SHARP_,p3__273914_SHARP_,p4__273911_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__273911_SHARP_);
});})(vec__273922,child_cell,_,kids))
);
} else {
var node_273927 = ((function (vec__273922,child_cell,_,kids){
return (function (p1__273915_SHARP_){
if(typeof p1__273915_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__273915_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__273915_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__273915_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__273915_SHARP_)))){
return p1__273915_SHARP_;
} else {
return null;
}
}
});})(vec__273922,child_cell,_,kids))
;
var seq__273923_273928 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__273924_273929 = null;
var count__273925_273930 = (0);
var i__273926_273931 = (0);
while(true){
if((i__273926_273931 < count__273925_273930)){
var x_273932 = chunk__273924_273929.cljs$core$IIndexed$_nth$arity$2(null,i__273926_273931);
var temp__4425__auto___273933 = node_273927(x_273932);
if(cljs.core.truth_(temp__4425__auto___273933)){
var x_273934__$1 = temp__4425__auto___273933;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_273934__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_273934__$1));
} else {
}

var G__273935 = seq__273923_273928;
var G__273936 = chunk__273924_273929;
var G__273937 = count__273925_273930;
var G__273938 = (i__273926_273931 + (1));
seq__273923_273928 = G__273935;
chunk__273924_273929 = G__273936;
count__273925_273930 = G__273937;
i__273926_273931 = G__273938;
continue;
} else {
var temp__4425__auto___273939 = cljs.core.seq(seq__273923_273928);
if(temp__4425__auto___273939){
var seq__273923_273940__$1 = temp__4425__auto___273939;
if(cljs.core.chunked_seq_QMARK_(seq__273923_273940__$1)){
var c__5806__auto___273941 = cljs.core.chunk_first(seq__273923_273940__$1);
var G__273942 = cljs.core.chunk_rest(seq__273923_273940__$1);
var G__273943 = c__5806__auto___273941;
var G__273944 = cljs.core.count(c__5806__auto___273941);
var G__273945 = (0);
seq__273923_273928 = G__273942;
chunk__273924_273929 = G__273943;
count__273925_273930 = G__273944;
i__273926_273931 = G__273945;
continue;
} else {
var x_273946 = cljs.core.first(seq__273923_273940__$1);
var temp__4425__auto___273947__$1 = node_273927(x_273946);
if(cljs.core.truth_(temp__4425__auto___273947__$1)){
var x_273948__$1 = temp__4425__auto___273947__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_273948__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_273948__$1));
} else {
}

var G__273949 = cljs.core.next(seq__273923_273940__$1);
var G__273950 = null;
var G__273951 = (0);
var G__273952 = (0);
seq__273923_273928 = G__273949;
chunk__273924_273929 = G__273950;
count__273925_273930 = G__273951;
i__273926_273931 = G__273952;
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
var G__273960__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__273954 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273954,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273954,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__273955 = this$;
G__273955.hoplonIFn(attr,kids);

return G__273955;
} else {
var G__273956 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__273956,attr);

tailrecursion.hoplon.add_children_BANG_(G__273956,kids);

return G__273956;
}
};
var G__273960 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__273961__i = 0, G__273961__a = new Array(arguments.length -  1);
while (G__273961__i < G__273961__a.length) {G__273961__a[G__273961__i] = arguments[G__273961__i + 1]; ++G__273961__i;}
  args = new cljs.core.IndexedSeq(G__273961__a,0);
} 
return G__273960__delegate.call(this,self__,args);};
G__273960.cljs$lang$maxFixedArity = 1;
G__273960.cljs$lang$applyTo = (function (arglist__273962){
var self__ = cljs.core.first(arglist__273962);
var args = cljs.core.rest(arglist__273962);
return G__273960__delegate(self__,args);
});
G__273960.cljs$core$IFn$_invoke$arity$variadic = G__273960__delegate;
return G__273960;
})()
;

Element.prototype.apply = (function (self__,args273953){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args273953)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__273963__delegate = function (args){
var this$ = this;
var vec__273957 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273957,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273957,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__273958 = this$;
G__273958.hoplonIFn(attr,kids);

return G__273958;
} else {
var G__273959 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__273959,attr);

tailrecursion.hoplon.add_children_BANG_(G__273959,kids);

return G__273959;
}
};
var G__273963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273964__i = 0, G__273964__a = new Array(arguments.length -  0);
while (G__273964__i < G__273964__a.length) {G__273964__a[G__273964__i] = arguments[G__273964__i + 0]; ++G__273964__i;}
  args = new cljs.core.IndexedSeq(G__273964__a,0);
} 
return G__273963__delegate.call(this,args);};
G__273963.cljs$lang$maxFixedArity = 0;
G__273963.cljs$lang$applyTo = (function (arglist__273965){
var args = cljs.core.seq(arglist__273965);
return G__273963__delegate(args);
});
G__273963.cljs$core$IFn$_invoke$arity$variadic = G__273963__delegate;
return G__273963;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__273976__delegate = function (args){
var vec__273971 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273971,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273971,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__273972 = cljs.core.seq(kids);
var chunk__273973 = null;
var count__273974 = (0);
var i__273975 = (0);
while(true){
if((i__273975 < count__273974)){
var k = chunk__273973.cljs$core$IIndexed$_nth$arity$2(null,i__273975);
elem.appendChild(k);

var G__273977 = seq__273972;
var G__273978 = chunk__273973;
var G__273979 = count__273974;
var G__273980 = (i__273975 + (1));
seq__273972 = G__273977;
chunk__273973 = G__273978;
count__273974 = G__273979;
i__273975 = G__273980;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__273972);
if(temp__4425__auto__){
var seq__273972__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__273972__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__273972__$1);
var G__273981 = cljs.core.chunk_rest(seq__273972__$1);
var G__273982 = c__5806__auto__;
var G__273983 = cljs.core.count(c__5806__auto__);
var G__273984 = (0);
seq__273972 = G__273981;
chunk__273973 = G__273982;
count__273974 = G__273983;
i__273975 = G__273984;
continue;
} else {
var k = cljs.core.first(seq__273972__$1);
elem.appendChild(k);

var G__273985 = cljs.core.next(seq__273972__$1);
var G__273986 = null;
var G__273987 = (0);
var G__273988 = (0);
seq__273972 = G__273985;
chunk__273973 = G__273986;
count__273974 = G__273987;
i__273975 = G__273988;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__273976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273989__i = 0, G__273989__a = new Array(arguments.length -  0);
while (G__273989__i < G__273989__a.length) {G__273989__a[G__273989__i] = arguments[G__273989__i + 0]; ++G__273989__i;}
  args = new cljs.core.IndexedSeq(G__273989__a,0);
} 
return G__273976__delegate.call(this,args);};
G__273976.cljs$lang$maxFixedArity = 0;
G__273976.cljs$lang$applyTo = (function (arglist__273990){
var args = cljs.core.seq(arglist__273990);
return G__273976__delegate(args);
});
G__273976.cljs$core$IFn$_invoke$arity$variadic = G__273976__delegate;
return G__273976;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__273991__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__273991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__273992__i = 0, G__273992__a = new Array(arguments.length -  0);
while (G__273992__i < G__273992__a.length) {G__273992__a[G__273992__i] = arguments[G__273992__i + 0]; ++G__273992__i;}
  args = new cljs.core.IndexedSeq(G__273992__a,0);
} 
return G__273991__delegate.call(this,args);};
G__273991.cljs$lang$maxFixedArity = 0;
G__273991.cljs$lang$applyTo = (function (arglist__273993){
var args = cljs.core.seq(arglist__273993);
return G__273991__delegate(args);
});
G__273991.cljs$core$IFn$_invoke$arity$variadic = G__273991__delegate;
return G__273991;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___273996 = arguments.length;
var i__6062__auto___273997 = (0);
while(true){
if((i__6062__auto___273997 < len__6061__auto___273996)){
args__6068__auto__.push((arguments[i__6062__auto___273997]));

var G__273998 = (i__6062__auto___273997 + (1));
i__6062__auto___273997 = G__273998;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__273995 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273995,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__273995,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq273994){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq273994));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__273999_SHARP_){
return document.createTextNode(p1__273999_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__274000_SHARP_){
return document.createComment(p1__274000_SHARP_);
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
return jQuery("body").on("submit",(function (p1__274001_SHARP_){
var e = (function (){var G__274002 = p1__274001_SHARP_.target;
return jQuery(G__274002);
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
return p1__274001_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args274003 = [];
var len__6061__auto___274006 = arguments.length;
var i__6062__auto___274007 = (0);
while(true){
if((i__6062__auto___274007 < len__6061__auto___274006)){
args274003.push((arguments[i__6062__auto___274007]));

var G__274008 = (i__6062__auto___274007 + (1));
i__6062__auto___274007 = G__274008;
continue;
} else {
}
break;
}

var G__274005 = args274003.length;
switch (G__274005) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args274003.length)].join('')));

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
var args274010 = [];
var len__6061__auto___274013 = arguments.length;
var i__6062__auto___274014 = (0);
while(true){
if((i__6062__auto___274014 < len__6061__auto___274013)){
args274010.push((arguments[i__6062__auto___274014]));

var G__274015 = (i__6062__auto___274014 + (1));
i__6062__auto___274014 = G__274015;
continue;
} else {
}
break;
}

var G__274012 = args274010.length;
switch (G__274012) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args274010.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__274017 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274017) : cljs.core.atom.call(null,G__274017));
})();
var prefer_table__5917__auto__ = (function (){var G__274018 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274018) : cljs.core.atom.call(null,G__274018));
})();
var method_cache__5918__auto__ = (function (){var G__274019 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274019) : cljs.core.atom.call(null,G__274019));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__274020 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274020) : cljs.core.atom.call(null,G__274020));
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
var G__274021 = elem;
var G__274022 = cljs.core.cst$kw$attr;
var G__274023 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__274021,G__274022,G__274023) : tailrecursion.hoplon.do_BANG_.call(null,G__274021,G__274022,G__274023));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__274024__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__274024 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__274025__i = 0, G__274025__a = new Array(arguments.length -  2);
while (G__274025__i < G__274025__a.length) {G__274025__a[G__274025__i] = arguments[G__274025__i + 2]; ++G__274025__i;}
  args = new cljs.core.IndexedSeq(G__274025__a,0);
} 
return G__274024__delegate.call(this,elem,_,args);};
G__274024.cljs$lang$maxFixedArity = 2;
G__274024.cljs$lang$applyTo = (function (arglist__274026){
var elem = cljs.core.first(arglist__274026);
arglist__274026 = cljs.core.next(arglist__274026);
var _ = cljs.core.first(arglist__274026);
var args = cljs.core.rest(arglist__274026);
return G__274024__delegate(elem,_,args);
});
G__274024.cljs$core$IFn$_invoke$arity$variadic = G__274024__delegate;
return G__274024;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__274027 = cljs.core.seq(kvs);
var chunk__274028 = null;
var count__274029 = (0);
var i__274030 = (0);
while(true){
if((i__274030 < count__274029)){
var vec__274031 = chunk__274028.cljs$core$IIndexed$_nth$arity$2(null,i__274030);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274031,(1),null);
var k_274033__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_274033__$1);
} else {
e.attr(k_274033__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_274033__$1:v));
}

var G__274034 = seq__274027;
var G__274035 = chunk__274028;
var G__274036 = count__274029;
var G__274037 = (i__274030 + (1));
seq__274027 = G__274034;
chunk__274028 = G__274035;
count__274029 = G__274036;
i__274030 = G__274037;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__274027);
if(temp__4425__auto__){
var seq__274027__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__274027__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__274027__$1);
var G__274038 = cljs.core.chunk_rest(seq__274027__$1);
var G__274039 = c__5806__auto__;
var G__274040 = cljs.core.count(c__5806__auto__);
var G__274041 = (0);
seq__274027 = G__274038;
chunk__274028 = G__274039;
count__274029 = G__274040;
i__274030 = G__274041;
continue;
} else {
var vec__274032 = cljs.core.first(seq__274027__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274032,(1),null);
var k_274042__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_274042__$1);
} else {
e.attr(k_274042__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_274042__$1:v));
}

var G__274043 = cljs.core.next(seq__274027__$1);
var G__274044 = null;
var G__274045 = (0);
var G__274046 = (0);
seq__274027 = G__274043;
chunk__274028 = G__274044;
count__274029 = G__274045;
i__274030 = G__274046;
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
return (function (p1__274047_SHARP_){
return cljs.core.zipmap(p1__274047_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__274048 = cljs.core.seq(clmap);
var chunk__274049 = null;
var count__274050 = (0);
var i__274051 = (0);
while(true){
if((i__274051 < count__274050)){
var vec__274052 = chunk__274049.cljs$core$IIndexed$_nth$arity$2(null,i__274051);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274052,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274052,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__274054 = seq__274048;
var G__274055 = chunk__274049;
var G__274056 = count__274050;
var G__274057 = (i__274051 + (1));
seq__274048 = G__274054;
chunk__274049 = G__274055;
count__274050 = G__274056;
i__274051 = G__274057;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__274048);
if(temp__4425__auto__){
var seq__274048__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__274048__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__274048__$1);
var G__274058 = cljs.core.chunk_rest(seq__274048__$1);
var G__274059 = c__5806__auto__;
var G__274060 = cljs.core.count(c__5806__auto__);
var G__274061 = (0);
seq__274048 = G__274058;
chunk__274049 = G__274059;
count__274050 = G__274060;
i__274051 = G__274061;
continue;
} else {
var vec__274053 = cljs.core.first(seq__274048__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274053,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274053,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__274062 = cljs.core.next(seq__274048__$1);
var G__274063 = null;
var G__274064 = (0);
var G__274065 = (0);
seq__274048 = G__274062;
chunk__274049 = G__274063;
count__274050 = G__274064;
i__274051 = G__274065;
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
var seq__274066 = cljs.core.seq(kvs);
var chunk__274067 = null;
var count__274068 = (0);
var i__274069 = (0);
while(true){
if((i__274069 < count__274068)){
var vec__274070 = chunk__274067.cljs$core$IIndexed$_nth$arity$2(null,i__274069);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274070,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__274072 = seq__274066;
var G__274073 = chunk__274067;
var G__274074 = count__274068;
var G__274075 = (i__274069 + (1));
seq__274066 = G__274072;
chunk__274067 = G__274073;
count__274068 = G__274074;
i__274069 = G__274075;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__274066);
if(temp__4425__auto__){
var seq__274066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__274066__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__274066__$1);
var G__274076 = cljs.core.chunk_rest(seq__274066__$1);
var G__274077 = c__5806__auto__;
var G__274078 = cljs.core.count(c__5806__auto__);
var G__274079 = (0);
seq__274066 = G__274076;
chunk__274067 = G__274077;
count__274068 = G__274078;
i__274069 = G__274079;
continue;
} else {
var vec__274071 = cljs.core.first(seq__274066__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274071,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__274080 = cljs.core.next(seq__274066__$1);
var G__274081 = null;
var G__274082 = (0);
var G__274083 = (0);
seq__274066 = G__274080;
chunk__274067 = G__274081;
count__274068 = G__274082;
i__274069 = G__274083;
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
var G__274084 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__274085 = (0);
return setTimeout(G__274084,G__274085);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__274086 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274086) : cljs.core.atom.call(null,G__274086));
})();
var prefer_table__5917__auto__ = (function (){var G__274087 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274087) : cljs.core.atom.call(null,G__274087));
})();
var method_cache__5918__auto__ = (function (){var G__274088 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274088) : cljs.core.atom.call(null,G__274088));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__274089 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274089) : cljs.core.atom.call(null,G__274089));
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
return (function (){var G__274090 = this$__$1.target;
return jQuery(G__274090);
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
var G__274093_274095 = init;
var G__274094_274096 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__274093_274095,G__274094_274096) : f.call(null,G__274093_274095,G__274094_274096));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__274113 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__274113) : cljs.core.atom.call(null,G__274113));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__274114,G__274115){
return (G__274114.cljs$core$IFn$_invoke$arity$1 ? G__274114.cljs$core$IFn$_invoke$arity$1(G__274115) : G__274114.call(null,G__274115));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__274117,G__274116){
return (G__274116.cljs$core$IFn$_invoke$arity$1 ? G__274116.cljs$core$IFn$_invoke$arity$1(G__274117) : G__274116.call(null,G__274117));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__274097_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__274120,G__274119,G__274118){
return (G__274118.cljs$core$IFn$_invoke$arity$2 ? G__274118.cljs$core$IFn$_invoke$arity$2(G__274119,G__274120) : G__274118.call(null,G__274119,G__274120));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__274097_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__274098_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__274098_SHARP_) : cljs.core.deref.call(null,p1__274098_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__274098_SHARP_,cljs.core.rest);

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
var seq__274121 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__274122 = null;
var count__274123 = (0);
var i__274124 = (0);
while(true){
if((i__274124 < count__274123)){
var i = chunk__274122.cljs$core$IIndexed$_nth$arity$2(null,i__274124);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__274125 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__274125) : tpl.call(null,G__274125));
}
})());

var G__274127 = seq__274121;
var G__274128 = chunk__274122;
var G__274129 = count__274123;
var G__274130 = (i__274124 + (1));
seq__274121 = G__274127;
chunk__274122 = G__274128;
count__274123 = G__274129;
i__274124 = G__274130;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__274121);
if(temp__4425__auto__){
var seq__274121__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__274121__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__274121__$1);
var G__274131 = cljs.core.chunk_rest(seq__274121__$1);
var G__274132 = c__5806__auto__;
var G__274133 = cljs.core.count(c__5806__auto__);
var G__274134 = (0);
seq__274121 = G__274131;
chunk__274122 = G__274132;
count__274123 = G__274133;
i__274124 = G__274134;
continue;
} else {
var i = cljs.core.first(seq__274121__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__274126 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__274126) : tpl.call(null,G__274126));
}
})());

var G__274135 = cljs.core.next(seq__274121__$1);
var G__274136 = null;
var G__274137 = (0);
var G__274138 = (0);
seq__274121 = G__274135;
chunk__274122 = G__274136;
count__274123 = G__274137;
i__274124 = G__274138;
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

var G__274139 = (___$1 + (1));
___$1 = G__274139;
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
var len__6061__auto___274148 = arguments.length;
var i__6062__auto___274149 = (0);
while(true){
if((i__6062__auto___274149 < len__6061__auto___274148)){
args__6068__auto__.push((arguments[i__6062__auto___274149]));

var G__274150 = (i__6062__auto___274149 + (1));
i__6062__auto___274149 = G__274150;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__274141){
var vec__274142 = p__274141;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__274142,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__274142,default$){
return (function (G__274143,G__274145,G__274144){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__274143.cljs$core$IFn$_invoke$arity$1 ? G__274143.cljs$core$IFn$_invoke$arity$1(G__274144) : G__274143.call(null,G__274144));
if(cljs.core.truth_(and__5010__auto__)){
return G__274144;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__274145;
}
});})(c,vec__274142,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__274142,default$){
return (function (){
var G__274146 = c;
var G__274147 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__274146,G__274147) : cljs.core.reset_BANG_.call(null,G__274146,G__274147));
});})(_,c,vec__274142,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq274140){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq274140));
});
