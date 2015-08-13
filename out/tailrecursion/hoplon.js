// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__166852_SHARP_){
return (p1__166852_SHARP_ instanceof Node);
}):(function (p1__166853_SHARP_){
try{return p1__166853_SHARP_.nodeType;
}catch (e166854){if((e166854 instanceof Error)){
var _ = e166854;
return null;
} else {
throw e166854;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__166855_SHARP_){
try{return cljs.core.vector_QMARK_(p1__166855_SHARP_);
}catch (e166856){if((e166856 instanceof Error)){
var _ = e166856;
return null;
} else {
throw e166856;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__166857_SHARP_){
try{return cljs.core.seq_QMARK_(p1__166857_SHARP_);
}catch (e166858){if((e166858 instanceof Error)){
var _ = e166858;
return null;
} else {
throw e166858;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__166859_SHARP_){
if(cljs.core.truth_((function (){var and__4198__auto__ = console;
if(cljs.core.truth_(and__4198__auto__)){
return console.log;
} else {
return and__4198__auto__;
}
})())){
return console.log(p1__166859_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__166861 = arguments.length;
switch (G__166861) {
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
}catch (e166862){if((e166862 instanceof Error)){
var _ = e166862;
return not_found;
} else {
throw e166862;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__166865 = arguments.length;
switch (G__166865) {
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
var G__166877 = args;
var vec__166878 = G__166877;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166878,(0),null);
var args__$1 = cljs.core.nthnext(vec__166878,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__166877__$1 = G__166877;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__166879 = G__166877__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166879,(0),null);
var args__$2 = cljs.core.nthnext(vec__166879,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__166882 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__166877__$1,attr__$2,kids__$2,vec__166879,arg__$1,args__$2,attr,kids,G__166877,vec__166878,arg,args__$1){
return (function (p1__166867_SHARP_,p2__166868_SHARP_,p3__166869_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__166867_SHARP_,p2__166868_SHARP_,p3__166869_SHARP_);
});})(attr__$1,kids__$1,G__166877__$1,attr__$2,kids__$2,vec__166879,arg__$1,args__$2,attr,kids,G__166877,vec__166878,arg,args__$1))
,attr__$2,arg__$1);
var G__166883 = kids__$2;
var G__166884 = args__$2;
attr__$1 = G__166882;
kids__$1 = G__166883;
G__166877__$1 = G__166884;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__166885 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__166886 = kids__$2;
var G__166887 = cljs.core.rest(args__$2);
attr__$1 = G__166885;
kids__$1 = G__166886;
G__166877__$1 = G__166887;
continue;
} else {
if(cljs.core.truth_((function (){var G__166880 = arg__$1;
return (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__166880) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,G__166880));
})())){
var G__166888 = attr__$2;
var G__166889 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__166890 = args__$2;
attr__$1 = G__166888;
kids__$1 = G__166889;
G__166877__$1 = G__166890;
continue;
} else {
if(cljs.core.truth_((function (){var G__166881 = arg__$1;
return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__166881) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,G__166881));
})())){
var G__166891 = attr__$2;
var G__166892 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__166893 = args__$2;
attr__$1 = G__166891;
kids__$1 = G__166892;
G__166877__$1 = G__166893;
continue;
} else {
var G__166894 = attr__$2;
var G__166895 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__166896 = args__$2;
attr__$1 = G__166894;
kids__$1 = G__166895;
G__166877__$1 = G__166896;
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
var G__166916_166931 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__166918_166933 = this$__$2;
var G__166919_166934 = k;
var G__166920_166935 = (function (){var G__166921 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166921) : cljs.core.deref.call(null,G__166921));
})();
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__166918_166933,G__166919_166934,G__166920_166935) : tailrecursion.hoplon.do_BANG_.call(null,G__166918_166933,G__166919_166934,G__166920_166935));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__166898_SHARP_,p2__166899_SHARP_,p3__166900_SHARP_,p4__166897_SHARP_){
var G__166922 = this$__$2;
var G__166923 = k;
var G__166924 = p4__166897_SHARP_;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__166922,G__166923,G__166924) : tailrecursion.hoplon.do_BANG_.call(null,G__166922,G__166923,G__166924));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
var G__166925_166936 = this$__$2;
var G__166926_166937 = k;
var G__166927_166938 = v;
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(G__166925_166936,G__166926_166937,G__166927_166938) : tailrecursion.hoplon.on_BANG_.call(null,G__166925_166936,G__166926_166937,G__166927_166938));
} else {
var G__166928_166939 = this$__$2;
var G__166929_166940 = k;
var G__166930_166941 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__166928_166939,G__166929_166940,G__166930_166941) : tailrecursion.hoplon.do_BANG_.call(null,G__166928_166939,G__166929_166940,G__166930_166941));

}
}

return this$__$2;
});})(this$__$1))
,this$__$1,attr);
});})(this$__$1))
;
var G__166917_166932 = (0);
setTimeout(G__166916_166931,G__166917_166932);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__166942_SHARP_,p2__166943_SHARP_){
return p1__166942_SHARP_.appendChild(p2__166943_SHARP_);
}):(function (p1__166944_SHARP_,p2__166945_SHARP_){
try{return p1__166944_SHARP_.appendChild(p2__166945_SHARP_);
}catch (e166946){if((e166946 instanceof Error)){
var _ = e166946;
return null;
} else {
throw e166946;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
(function (){var G__166950 = this$;
return jQuery(G__166950);
})().empty();

var G__166951 = this$;
var G__166952 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__166951,G__166952) : tailrecursion.hoplon.add_children_BANG_.call(null,G__166951,G__166952));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__166958){
var vec__166971 = p__166958;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__166971,(0),null);
var _ = cljs.core.nthnext(vec__166971,(1));
var kids = vec__166971;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(function (){var G__166972 = child_cell;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__166972) : cljs.core.deref.call(null,G__166972));
})());

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__166971,child_cell,_,kids){
return (function (p1__166954_SHARP_,p2__166955_SHARP_,p3__166956_SHARP_,p4__166953_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__166953_SHARP_);
});})(vec__166971,child_cell,_,kids))
);
} else {
var node_166983 = ((function (vec__166971,child_cell,_,kids){
return (function (p1__166957_SHARP_){
if(typeof p1__166957_SHARP_ === 'string'){
var G__166973 = p1__166957_SHARP_;
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(G__166973) : tailrecursion.hoplon.$text.call(null,G__166973));
} else {
if(cljs.core.truth_((function (){var G__166974 = p1__166957_SHARP_;
return (tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__166974) : tailrecursion.hoplon.node_QMARK_.call(null,G__166974));
})())){
return p1__166957_SHARP_;
} else {
return null;
}
}
});})(vec__166971,child_cell,_,kids))
;
var seq__166975_166984 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__166976_166985 = null;
var count__166977_166986 = (0);
var i__166978_166987 = (0);
while(true){
if((i__166978_166987 < count__166977_166986)){
var x_166988 = chunk__166976_166985.cljs$core$IIndexed$_nth$arity$2(null,i__166978_166987);
var temp__4425__auto___166989 = node_166983(x_166988);
if(cljs.core.truth_(temp__4425__auto___166989)){
var x_166990__$1 = temp__4425__auto___166989;
var G__166979_166991 = this$;
var G__166980_166992 = x_166990__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__166979_166991,G__166980_166992) : tailrecursion.hoplon.append_child.call(null,G__166979_166991,G__166980_166992));
} else {
}

var G__166993 = seq__166975_166984;
var G__166994 = chunk__166976_166985;
var G__166995 = count__166977_166986;
var G__166996 = (i__166978_166987 + (1));
seq__166975_166984 = G__166993;
chunk__166976_166985 = G__166994;
count__166977_166986 = G__166995;
i__166978_166987 = G__166996;
continue;
} else {
var temp__4425__auto___166997 = cljs.core.seq(seq__166975_166984);
if(temp__4425__auto___166997){
var seq__166975_166998__$1 = temp__4425__auto___166997;
if(cljs.core.chunked_seq_QMARK_(seq__166975_166998__$1)){
var c__4995__auto___166999 = cljs.core.chunk_first(seq__166975_166998__$1);
var G__167000 = cljs.core.chunk_rest(seq__166975_166998__$1);
var G__167001 = c__4995__auto___166999;
var G__167002 = cljs.core.count(c__4995__auto___166999);
var G__167003 = (0);
seq__166975_166984 = G__167000;
chunk__166976_166985 = G__167001;
count__166977_166986 = G__167002;
i__166978_166987 = G__167003;
continue;
} else {
var x_167004 = cljs.core.first(seq__166975_166998__$1);
var temp__4425__auto___167005__$1 = node_166983(x_167004);
if(cljs.core.truth_(temp__4425__auto___167005__$1)){
var x_167006__$1 = temp__4425__auto___167005__$1;
var G__166981_167007 = this$;
var G__166982_167008 = x_167006__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(G__166981_167007,G__166982_167008) : tailrecursion.hoplon.append_child.call(null,G__166981_167007,G__166982_167008));
} else {
}

var G__167009 = cljs.core.next(seq__166975_166998__$1);
var G__167010 = null;
var G__167011 = (0);
var G__167012 = (0);
seq__166975_166984 = G__167009;
chunk__166976_166985 = G__167010;
count__166977_166986 = G__167011;
i__166978_166987 = G__167012;
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
var G__167020__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__167014 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167014,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167014,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__167015 = this$;
G__167015.hoplonIFn(attr,kids);

return G__167015;
} else {
var G__167016 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__167016,attr);

tailrecursion.hoplon.add_children_BANG_(G__167016,kids);

return G__167016;
}
};
var G__167020 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__167021__i = 0, G__167021__a = new Array(arguments.length -  1);
while (G__167021__i < G__167021__a.length) {G__167021__a[G__167021__i] = arguments[G__167021__i + 1]; ++G__167021__i;}
  args = new cljs.core.IndexedSeq(G__167021__a,0);
} 
return G__167020__delegate.call(this,self__,args);};
G__167020.cljs$lang$maxFixedArity = 1;
G__167020.cljs$lang$applyTo = (function (arglist__167022){
var self__ = cljs.core.first(arglist__167022);
var args = cljs.core.rest(arglist__167022);
return G__167020__delegate(self__,args);
});
G__167020.cljs$core$IFn$_invoke$arity$variadic = G__167020__delegate;
return G__167020;
})()
;

Element.prototype.apply = (function (self__,args167013){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args167013)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__167023__delegate = function (args){
var this$ = this;
var vec__167017 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167017,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167017,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__167018 = this$;
G__167018.hoplonIFn(attr,kids);

return G__167018;
} else {
var G__167019 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__167019,attr);

tailrecursion.hoplon.add_children_BANG_(G__167019,kids);

return G__167019;
}
};
var G__167023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167024__i = 0, G__167024__a = new Array(arguments.length -  0);
while (G__167024__i < G__167024__a.length) {G__167024__a[G__167024__i] = arguments[G__167024__i + 0]; ++G__167024__i;}
  args = new cljs.core.IndexedSeq(G__167024__a,0);
} 
return G__167023__delegate.call(this,args);};
G__167023.cljs$lang$maxFixedArity = 0;
G__167023.cljs$lang$applyTo = (function (arglist__167025){
var args = cljs.core.seq(arglist__167025);
return G__167023__delegate(args);
});
G__167023.cljs$core$IFn$_invoke$arity$variadic = G__167023__delegate;
return G__167023;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__167038__delegate = function (args){
var vec__167032 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167032,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167032,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

(function (){var G__167033 = elem;
return jQuery(G__167033);
})().empty();

var seq__167034 = cljs.core.seq(kids);
var chunk__167035 = null;
var count__167036 = (0);
var i__167037 = (0);
while(true){
if((i__167037 < count__167036)){
var k = chunk__167035.cljs$core$IIndexed$_nth$arity$2(null,i__167037);
elem.appendChild(k);

var G__167039 = seq__167034;
var G__167040 = chunk__167035;
var G__167041 = count__167036;
var G__167042 = (i__167037 + (1));
seq__167034 = G__167039;
chunk__167035 = G__167040;
count__167036 = G__167041;
i__167037 = G__167042;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__167034);
if(temp__4425__auto__){
var seq__167034__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__167034__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__167034__$1);
var G__167043 = cljs.core.chunk_rest(seq__167034__$1);
var G__167044 = c__4995__auto__;
var G__167045 = cljs.core.count(c__4995__auto__);
var G__167046 = (0);
seq__167034 = G__167043;
chunk__167035 = G__167044;
count__167036 = G__167045;
i__167037 = G__167046;
continue;
} else {
var k = cljs.core.first(seq__167034__$1);
elem.appendChild(k);

var G__167047 = cljs.core.next(seq__167034__$1);
var G__167048 = null;
var G__167049 = (0);
var G__167050 = (0);
seq__167034 = G__167047;
chunk__167035 = G__167048;
count__167036 = G__167049;
i__167037 = G__167050;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__167038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167051__i = 0, G__167051__a = new Array(arguments.length -  0);
while (G__167051__i < G__167051__a.length) {G__167051__a[G__167051__i] = arguments[G__167051__i + 0]; ++G__167051__i;}
  args = new cljs.core.IndexedSeq(G__167051__a,0);
} 
return G__167038__delegate.call(this,args);};
G__167038.cljs$lang$maxFixedArity = 0;
G__167038.cljs$lang$applyTo = (function (arglist__167052){
var args = cljs.core.seq(arglist__167052);
return G__167038__delegate(args);
});
G__167038.cljs$core$IFn$_invoke$arity$variadic = G__167038__delegate;
return G__167038;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__167053__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__167053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__167054__i = 0, G__167054__a = new Array(arguments.length -  0);
while (G__167054__i < G__167054__a.length) {G__167054__a[G__167054__i] = arguments[G__167054__i + 0]; ++G__167054__i;}
  args = new cljs.core.IndexedSeq(G__167054__a,0);
} 
return G__167053__delegate.call(this,args);};
G__167053.cljs$lang$maxFixedArity = 0;
G__167053.cljs$lang$applyTo = (function (arglist__167055){
var args = cljs.core.seq(arglist__167055);
return G__167053__delegate(args);
});
G__167053.cljs$core$IFn$_invoke$arity$variadic = G__167053__delegate;
return G__167053;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__167057 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167057,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167057,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq167056){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq167056));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__167058_SHARP_){
return document.createTextNode(p1__167058_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__167059_SHARP_){
return document.createComment(p1__167059_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = cljs.core.constant$keyword$tailrecursion$hoplon_SLASH__DASH__DASH__GT_;
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
var G__167061 = f;
return jQuery(G__167061);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return (function (){var G__167063 = document;
return jQuery(G__167063);
})().trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return (function (){var G__167065 = document;
return jQuery(G__167065);
})().on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){
return (function (){var G__167067 = "body";
return jQuery(G__167067);
})().on("submit",(function (p1__167066_SHARP_){
var e = (function (){var G__167068 = p1__167066_SHARP_.target;
return jQuery(G__167068);
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
return p1__167066_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__167070 = arguments.length;
switch (G__167070) {
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
var G__167073 = arguments.length;
switch (G__167073) {
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__167075 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167075) : cljs.core.atom.call(null,G__167075));
})();
var prefer_table__5106__auto__ = (function (){var G__167076 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167076) : cljs.core.atom.call(null,G__167076));
})();
var method_cache__5107__auto__ = (function (){var G__167077 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167077) : cljs.core.atom.call(null,G__167077));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__167078 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167078) : cljs.core.atom.call(null,G__167078));
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
var G__167079 = elem;
var G__167080 = cljs.core.constant$keyword$attr;
var G__167081 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__167079,G__167080,G__167081) : tailrecursion.hoplon.do_BANG_.call(null,G__167079,G__167080,G__167081));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$value,(function() { 
var G__167083__delegate = function (elem,_,args){
var e = (function (){var G__167082 = elem;
return jQuery(G__167082);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__167083 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__167084__i = 0, G__167084__a = new Array(arguments.length -  2);
while (G__167084__i < G__167084__a.length) {G__167084__a[G__167084__i] = arguments[G__167084__i + 2]; ++G__167084__i;}
  args = new cljs.core.IndexedSeq(G__167084__a,0);
} 
return G__167083__delegate.call(this,elem,_,args);};
G__167083.cljs$lang$maxFixedArity = 2;
G__167083.cljs$lang$applyTo = (function (arglist__167085){
var elem = cljs.core.first(arglist__167085);
arglist__167085 = cljs.core.next(arglist__167085);
var _ = cljs.core.first(arglist__167085);
var args = cljs.core.rest(arglist__167085);
return G__167083__delegate(elem,_,args);
});
G__167083.cljs$core$IFn$_invoke$arity$variadic = G__167083__delegate;
return G__167083;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$attr,(function (elem,_,kvs){
var e = (function (){var G__167086 = elem;
return jQuery(G__167086);
})();
var seq__167087 = cljs.core.seq(kvs);
var chunk__167088 = null;
var count__167089 = (0);
var i__167090 = (0);
while(true){
if((i__167090 < count__167089)){
var vec__167091 = chunk__167088.cljs$core$IIndexed$_nth$arity$2(null,i__167090);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167091,(1),null);
var k_167093__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_167093__$1);
} else {
e.attr(k_167093__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_167093__$1:v));
}

var G__167094 = seq__167087;
var G__167095 = chunk__167088;
var G__167096 = count__167089;
var G__167097 = (i__167090 + (1));
seq__167087 = G__167094;
chunk__167088 = G__167095;
count__167089 = G__167096;
i__167090 = G__167097;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__167087);
if(temp__4425__auto__){
var seq__167087__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__167087__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__167087__$1);
var G__167098 = cljs.core.chunk_rest(seq__167087__$1);
var G__167099 = c__4995__auto__;
var G__167100 = cljs.core.count(c__4995__auto__);
var G__167101 = (0);
seq__167087 = G__167098;
chunk__167088 = G__167099;
count__167089 = G__167100;
i__167090 = G__167101;
continue;
} else {
var vec__167092 = cljs.core.first(seq__167087__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167092,(1),null);
var k_167102__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_167102__$1);
} else {
e.attr(k_167102__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_167102__$1:v));
}

var G__167103 = cljs.core.next(seq__167087__$1);
var G__167104 = null;
var G__167105 = (0);
var G__167106 = (0);
seq__167087 = G__167103;
chunk__167088 = G__167104;
count__167089 = G__167105;
i__167090 = G__167106;
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
var elem__$1 = (function (){var G__167108 = elem;
return jQuery(G__167108);
})();
var __GT_map = ((function (elem__$1){
return (function (p1__167107_SHARP_){
return cljs.core.zipmap(p1__167107_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__167109 = cljs.core.seq(clmap);
var chunk__167110 = null;
var count__167111 = (0);
var i__167112 = (0);
while(true){
if((i__167112 < count__167111)){
var vec__167113 = chunk__167110.cljs$core$IIndexed$_nth$arity$2(null,i__167112);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167113,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167113,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__167115 = seq__167109;
var G__167116 = chunk__167110;
var G__167117 = count__167111;
var G__167118 = (i__167112 + (1));
seq__167109 = G__167115;
chunk__167110 = G__167116;
count__167111 = G__167117;
i__167112 = G__167118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__167109);
if(temp__4425__auto__){
var seq__167109__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__167109__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__167109__$1);
var G__167119 = cljs.core.chunk_rest(seq__167109__$1);
var G__167120 = c__4995__auto__;
var G__167121 = cljs.core.count(c__4995__auto__);
var G__167122 = (0);
seq__167109 = G__167119;
chunk__167110 = G__167120;
count__167111 = G__167121;
i__167112 = G__167122;
continue;
} else {
var vec__167114 = cljs.core.first(seq__167109__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167114,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167114,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__167123 = cljs.core.next(seq__167109__$1);
var G__167124 = null;
var G__167125 = (0);
var G__167126 = (0);
seq__167109 = G__167123;
chunk__167110 = G__167124;
count__167111 = G__167125;
i__167112 = G__167126;
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
var e = (function (){var G__167127 = elem;
return jQuery(G__167127);
})();
var seq__167128 = cljs.core.seq(kvs);
var chunk__167129 = null;
var count__167130 = (0);
var i__167131 = (0);
while(true){
if((i__167131 < count__167130)){
var vec__167132 = chunk__167129.cljs$core$IIndexed$_nth$arity$2(null,i__167131);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167132,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__167134 = seq__167128;
var G__167135 = chunk__167129;
var G__167136 = count__167130;
var G__167137 = (i__167131 + (1));
seq__167128 = G__167134;
chunk__167129 = G__167135;
count__167130 = G__167136;
i__167131 = G__167137;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__167128);
if(temp__4425__auto__){
var seq__167128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__167128__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__167128__$1);
var G__167138 = cljs.core.chunk_rest(seq__167128__$1);
var G__167139 = c__4995__auto__;
var G__167140 = cljs.core.count(c__4995__auto__);
var G__167141 = (0);
seq__167128 = G__167138;
chunk__167129 = G__167139;
count__167130 = G__167140;
i__167131 = G__167141;
continue;
} else {
var vec__167133 = cljs.core.first(seq__167128__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167133,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__167142 = cljs.core.next(seq__167128__$1);
var G__167143 = null;
var G__167144 = (0);
var G__167145 = (0);
seq__167128 = G__167142;
chunk__167129 = G__167143;
count__167130 = G__167144;
i__167131 = G__167145;
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
return (function (){var G__167146 = elem;
return jQuery(G__167146);
})().toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__167147 = elem;
return jQuery(G__167147);
})().hide().slideDown("fast");
} else {
return (function (){var G__167148 = elem;
return jQuery(G__167148);
})().slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return (function (){var G__167149 = elem;
return jQuery(G__167149);
})().hide().fadeIn("fast");
} else {
return (function (){var G__167150 = elem;
return jQuery(G__167150);
})().fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus,(function (elem,_,v){
var G__167151 = (function (){
if(cljs.core.truth_(v)){
return (function (){var G__167153 = elem;
return jQuery(G__167153);
})().focus();
} else {
return (function (){var G__167154 = elem;
return jQuery(G__167154);
})().focusout();
}
});
var G__167152 = (0);
return setTimeout(G__167151,G__167152);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$select,(function (elem,_,___$1){
return (function (){var G__167155 = elem;
return jQuery(G__167155);
})().select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__167156_167162 = elem;
var G__167157_167163 = cljs.core.constant$keyword$focus;
var G__167158_167164 = v;
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__167156_167162,G__167157_167163,G__167158_167164) : tailrecursion.hoplon.do_BANG_.call(null,G__167156_167162,G__167157_167163,G__167158_167164));

var G__167159 = elem;
var G__167160 = cljs.core.constant$keyword$select;
var G__167161 = v;
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__167159,G__167160,G__167161) : tailrecursion.hoplon.do_BANG_.call(null,G__167159,G__167160,G__167161));
} else {
return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$text,(function (elem,_,v){
return (function (){var G__167165 = elem;
return jQuery(G__167165);
})().text([cljs.core.str(v)].join(''));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (elem,_,v){
return (function (){var G__167166 = elem;
return jQuery(G__167166);
})().html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = (function (){var G__167167 = "body,html";
return jQuery(G__167167);
})();
var elem__$1 = (function (){var G__167168 = elem;
return jQuery(G__167168);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5105__auto__ = (function (){var G__167169 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167169) : cljs.core.atom.call(null,G__167169));
})();
var prefer_table__5106__auto__ = (function (){var G__167170 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167170) : cljs.core.atom.call(null,G__167170));
})();
var method_cache__5107__auto__ = (function (){var G__167171 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167171) : cljs.core.atom.call(null,G__167171));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__167172 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167172) : cljs.core.atom.call(null,G__167172));
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
return (function (){var G__167173 = this$__$1.target;
return jQuery(G__167173);
})().val();
});
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$tailrecursion$hoplon_SLASH_default,(function (elem,event,callback){
return tailrecursion.hoplon.when_dom(elem,(function (){
return (function (){var G__167174 = elem;
return jQuery(G__167174);
})().on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.sentinel = (function tailrecursion$hoplon$sentinel(){
return document.createElement("SENTINEL");
});
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(atom,init,f){
var G__167180_167185 = init;
var G__167181_167186 = (function (){var G__167182 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__167182) : cljs.core.deref.call(null,G__167182));
})();
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__167180_167185,G__167181_167186) : f.call(null,G__167180_167185,G__167181_167186));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
var G__167183 = old;
var G__167184 = new$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__167183,G__167184) : f.call(null,G__167183,G__167184));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (function (){var G__167209 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167209) : cljs.core.atom.call(null,G__167209));
})();
var on_deck = (function (){var G__167210 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__167210) : cljs.core.atom.call(null,G__167210));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__167211,G__167212){
var G__167213 = G__167212;
return (G__167211.cljs$core$IFn$_invoke$arity$1 ? G__167211.cljs$core$IFn$_invoke$arity$1(G__167213) : G__167211.call(null,G__167213));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__167215,G__167214){
var G__167216 = G__167215;
return (G__167214.cljs$core$IFn$_invoke$arity$1 ? G__167214.cljs$core$IFn$_invoke$arity$1(G__167216) : G__167214.call(null,G__167216));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__167187_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__167218,G__167219,G__167217){
var G__167220 = G__167218;
var G__167221 = G__167219;
return (G__167217.cljs$core$IFn$_invoke$arity$2 ? G__167217.cljs$core$IFn$_invoke$arity$2(G__167220,G__167221) : G__167217.call(null,G__167220,G__167221));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__167187_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__167188_SHARP_){
var x = cljs.core.first((function (){var G__167222 = p1__167188_SHARP_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__167222) : cljs.core.deref.call(null,G__167222));
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__167188_SHARP_,cljs.core.rest);

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
var seq__167223 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__167224 = null;
var count__167225 = (0);
var i__167226 = (0);
while(true){
if((i__167226 < count__167225)){
var i = chunk__167224.cljs$core$IIndexed$_nth$arity$2(null,i__167226);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__167227 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__167227) : tpl.call(null,G__167227));
}
})());

var G__167229 = seq__167223;
var G__167230 = chunk__167224;
var G__167231 = count__167225;
var G__167232 = (i__167226 + (1));
seq__167223 = G__167229;
chunk__167224 = G__167230;
count__167225 = G__167231;
i__167226 = G__167232;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__167223);
if(temp__4425__auto__){
var seq__167223__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__167223__$1)){
var c__4995__auto__ = cljs.core.chunk_first(seq__167223__$1);
var G__167233 = cljs.core.chunk_rest(seq__167223__$1);
var G__167234 = c__4995__auto__;
var G__167235 = cljs.core.count(c__4995__auto__);
var G__167236 = (0);
seq__167223 = G__167233;
chunk__167224 = G__167234;
count__167225 = G__167235;
i__167226 = G__167236;
continue;
} else {
var i = cljs.core.first(seq__167223__$1);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__167228 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__167228) : tpl.call(null,G__167228));
}
})());

var G__167237 = cljs.core.next(seq__167223__$1);
var G__167238 = null;
var G__167239 = (0);
var G__167240 = (0);
seq__167223 = G__167237;
chunk__167224 = G__167238;
count__167225 = G__167239;
i__167226 = G__167240;
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

var G__167241 = (___$1 + (1));
___$1 = G__167241;
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

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__167243){
var vec__167244 = p__167243;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__167244,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__167244,default$){
return (function (G__167245,G__167247,G__167246){
var or__4210__auto__ = (function (){var and__4198__auto__ = (function (){var G__167248 = G__167246;
return (G__167245.cljs$core$IFn$_invoke$arity$1 ? G__167245.cljs$core$IFn$_invoke$arity$1(G__167248) : G__167245.call(null,G__167248));
})();
if(cljs.core.truth_(and__4198__auto__)){
return G__167246;
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__167247;
}
});})(c,vec__167244,default$))
).call(null,cljs.core.seq,default$,c);
(function (){var G__167249 = window;
return jQuery(G__167249);
})().on("hashchange",((function (_,c,vec__167244,default$){
return (function (){
var G__167250 = c;
var G__167251 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__167250,G__167251) : cljs.core.reset_BANG_.call(null,G__167250,G__167251));
});})(_,c,vec__167244,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq167242){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq167242));
});
