// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10791_SHARP_){
return (p1__10791_SHARP_ instanceof Node);
}):(function (p1__10792_SHARP_){
try{return p1__10792_SHARP_.nodeType;
}catch (e10793){if((e10793 instanceof Error)){
var _ = e10793;
return null;
} else {
throw e10793;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10794_SHARP_){
try{return cljs.core.vector_QMARK_(p1__10794_SHARP_);
}catch (e10795){if((e10795 instanceof Error)){
var _ = e10795;
return null;
} else {
throw e10795;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10796_SHARP_){
try{return cljs.core.seq_QMARK_(p1__10796_SHARP_);
}catch (e10797){if((e10797 instanceof Error)){
var _ = e10797;
return null;
} else {
throw e10797;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10798_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__10798_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args10799 = [];
var len__6061__auto___10803 = arguments.length;
var i__6062__auto___10804 = (0);
while(true){
if((i__6062__auto___10804 < len__6061__auto___10803)){
args10799.push((arguments[i__6062__auto___10804]));

var G__10805 = (i__6062__auto___10804 + (1));
i__6062__auto___10804 = G__10805;
continue;
} else {
}
break;
}

var G__10801 = args10799.length;
switch (G__10801) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10799.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10802){if((e10802 instanceof Error)){
var _ = e10802;
return not_found;
} else {
throw e10802;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args10807 = [];
var len__6061__auto___10810 = arguments.length;
var i__6062__auto___10811 = (0);
while(true){
if((i__6062__auto___10811 < len__6061__auto___10810)){
args10807.push((arguments[i__6062__auto___10811]));

var G__10812 = (i__6062__auto___10811 + (1));
i__6062__auto___10811 = G__10812;
continue;
} else {
}
break;
}

var G__10809 = args10807.length;
switch (G__10809) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10807.length)].join('')));

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
var G__10822 = args;
var vec__10823 = G__10822;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10823,(0),null);
var args__$1 = cljs.core.nthnext(vec__10823,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__10822__$1 = G__10822;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10824 = G__10822__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10824,(0),null);
var args__$2 = cljs.core.nthnext(vec__10824,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10825 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__10822__$1,attr__$2,kids__$2,vec__10824,arg__$1,args__$2,attr,kids,G__10822,vec__10823,arg,args__$1){
return (function (p1__10814_SHARP_,p2__10815_SHARP_,p3__10816_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10814_SHARP_,p2__10815_SHARP_,p3__10816_SHARP_);
});})(attr__$1,kids__$1,G__10822__$1,attr__$2,kids__$2,vec__10824,arg__$1,args__$2,attr,kids,G__10822,vec__10823,arg,args__$1))
,attr__$2,arg__$1);
var G__10826 = kids__$2;
var G__10827 = args__$2;
attr__$1 = G__10825;
kids__$1 = G__10826;
G__10822__$1 = G__10827;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10828 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10829 = kids__$2;
var G__10830 = cljs.core.rest(args__$2);
attr__$1 = G__10828;
kids__$1 = G__10829;
G__10822__$1 = G__10830;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__10831 = attr__$2;
var G__10832 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10833 = args__$2;
attr__$1 = G__10831;
kids__$1 = G__10832;
G__10822__$1 = G__10833;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10834 = attr__$2;
var G__10835 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10836 = args__$2;
attr__$1 = G__10834;
kids__$1 = G__10835;
G__10822__$1 = G__10836;
continue;
} else {
var G__10837 = attr__$2;
var G__10838 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10839 = args__$2;
attr__$1 = G__10837;
kids__$1 = G__10838;
G__10822__$1 = G__10839;
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
var G__10855_10860 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10857_10862 = this$__$2;
var G__10858_10863 = k;
var G__10859_10864 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10857_10862,G__10858_10863,G__10859_10864) : tailrecursion.hoplon.do_BANG_.call(null,G__10857_10862,G__10858_10863,G__10859_10864));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10841_SHARP_,p2__10842_SHARP_,p3__10843_SHARP_,p4__10840_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10840_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10840_SHARP_));
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
var G__10856_10861 = (0);
setTimeout(G__10855_10860,G__10856_10861);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10865_SHARP_,p2__10866_SHARP_){
return p1__10865_SHARP_.appendChild(p2__10866_SHARP_);
}):(function (p1__10867_SHARP_,p2__10868_SHARP_){
try{return p1__10867_SHARP_.appendChild(p2__10868_SHARP_);
}catch (e10869){if((e10869 instanceof Error)){
var _ = e10869;
return null;
} else {
throw e10869;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10872 = this$;
var G__10873 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10872,G__10873) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10872,G__10873));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10879){
var vec__10885 = p__10879;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10885,(0),null);
var _ = cljs.core.nthnext(vec__10885,(1));
var kids = vec__10885;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10885,child_cell,_,kids){
return (function (p1__10875_SHARP_,p2__10876_SHARP_,p3__10877_SHARP_,p4__10874_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10874_SHARP_);
});})(vec__10885,child_cell,_,kids))
);
} else {
var node_10890 = ((function (vec__10885,child_cell,_,kids){
return (function (p1__10878_SHARP_){
if(typeof p1__10878_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10878_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10878_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10878_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10878_SHARP_)))){
return p1__10878_SHARP_;
} else {
return null;
}
}
});})(vec__10885,child_cell,_,kids))
;
var seq__10886_10891 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10887_10892 = null;
var count__10888_10893 = (0);
var i__10889_10894 = (0);
while(true){
if((i__10889_10894 < count__10888_10893)){
var x_10895 = chunk__10887_10892.cljs$core$IIndexed$_nth$arity$2(null,i__10889_10894);
var temp__4425__auto___10896 = node_10890(x_10895);
if(cljs.core.truth_(temp__4425__auto___10896)){
var x_10897__$1 = temp__4425__auto___10896;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10897__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10897__$1));
} else {
}

var G__10898 = seq__10886_10891;
var G__10899 = chunk__10887_10892;
var G__10900 = count__10888_10893;
var G__10901 = (i__10889_10894 + (1));
seq__10886_10891 = G__10898;
chunk__10887_10892 = G__10899;
count__10888_10893 = G__10900;
i__10889_10894 = G__10901;
continue;
} else {
var temp__4425__auto___10902 = cljs.core.seq(seq__10886_10891);
if(temp__4425__auto___10902){
var seq__10886_10903__$1 = temp__4425__auto___10902;
if(cljs.core.chunked_seq_QMARK_(seq__10886_10903__$1)){
var c__5806__auto___10904 = cljs.core.chunk_first(seq__10886_10903__$1);
var G__10905 = cljs.core.chunk_rest(seq__10886_10903__$1);
var G__10906 = c__5806__auto___10904;
var G__10907 = cljs.core.count(c__5806__auto___10904);
var G__10908 = (0);
seq__10886_10891 = G__10905;
chunk__10887_10892 = G__10906;
count__10888_10893 = G__10907;
i__10889_10894 = G__10908;
continue;
} else {
var x_10909 = cljs.core.first(seq__10886_10903__$1);
var temp__4425__auto___10910__$1 = node_10890(x_10909);
if(cljs.core.truth_(temp__4425__auto___10910__$1)){
var x_10911__$1 = temp__4425__auto___10910__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10911__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10911__$1));
} else {
}

var G__10912 = cljs.core.next(seq__10886_10903__$1);
var G__10913 = null;
var G__10914 = (0);
var G__10915 = (0);
seq__10886_10891 = G__10912;
chunk__10887_10892 = G__10913;
count__10888_10893 = G__10914;
i__10889_10894 = G__10915;
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
var G__10923__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10917 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10917,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10917,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10918 = this$;
G__10918.hoplonIFn(attr,kids);

return G__10918;
} else {
var G__10919 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10919,attr);

tailrecursion.hoplon.add_children_BANG_(G__10919,kids);

return G__10919;
}
};
var G__10923 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10924__i = 0, G__10924__a = new Array(arguments.length -  1);
while (G__10924__i < G__10924__a.length) {G__10924__a[G__10924__i] = arguments[G__10924__i + 1]; ++G__10924__i;}
  args = new cljs.core.IndexedSeq(G__10924__a,0);
} 
return G__10923__delegate.call(this,self__,args);};
G__10923.cljs$lang$maxFixedArity = 1;
G__10923.cljs$lang$applyTo = (function (arglist__10925){
var self__ = cljs.core.first(arglist__10925);
var args = cljs.core.rest(arglist__10925);
return G__10923__delegate(self__,args);
});
G__10923.cljs$core$IFn$_invoke$arity$variadic = G__10923__delegate;
return G__10923;
})()
;

Element.prototype.apply = (function (self__,args10916){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10916)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10926__delegate = function (args){
var this$ = this;
var vec__10920 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10920,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10920,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10921 = this$;
G__10921.hoplonIFn(attr,kids);

return G__10921;
} else {
var G__10922 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10922,attr);

tailrecursion.hoplon.add_children_BANG_(G__10922,kids);

return G__10922;
}
};
var G__10926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10927__i = 0, G__10927__a = new Array(arguments.length -  0);
while (G__10927__i < G__10927__a.length) {G__10927__a[G__10927__i] = arguments[G__10927__i + 0]; ++G__10927__i;}
  args = new cljs.core.IndexedSeq(G__10927__a,0);
} 
return G__10926__delegate.call(this,args);};
G__10926.cljs$lang$maxFixedArity = 0;
G__10926.cljs$lang$applyTo = (function (arglist__10928){
var args = cljs.core.seq(arglist__10928);
return G__10926__delegate(args);
});
G__10926.cljs$core$IFn$_invoke$arity$variadic = G__10926__delegate;
return G__10926;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10939__delegate = function (args){
var vec__10934 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10934,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10934,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10935 = cljs.core.seq(kids);
var chunk__10936 = null;
var count__10937 = (0);
var i__10938 = (0);
while(true){
if((i__10938 < count__10937)){
var k = chunk__10936.cljs$core$IIndexed$_nth$arity$2(null,i__10938);
elem.appendChild(k);

var G__10940 = seq__10935;
var G__10941 = chunk__10936;
var G__10942 = count__10937;
var G__10943 = (i__10938 + (1));
seq__10935 = G__10940;
chunk__10936 = G__10941;
count__10937 = G__10942;
i__10938 = G__10943;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10935);
if(temp__4425__auto__){
var seq__10935__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10935__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10935__$1);
var G__10944 = cljs.core.chunk_rest(seq__10935__$1);
var G__10945 = c__5806__auto__;
var G__10946 = cljs.core.count(c__5806__auto__);
var G__10947 = (0);
seq__10935 = G__10944;
chunk__10936 = G__10945;
count__10937 = G__10946;
i__10938 = G__10947;
continue;
} else {
var k = cljs.core.first(seq__10935__$1);
elem.appendChild(k);

var G__10948 = cljs.core.next(seq__10935__$1);
var G__10949 = null;
var G__10950 = (0);
var G__10951 = (0);
seq__10935 = G__10948;
chunk__10936 = G__10949;
count__10937 = G__10950;
i__10938 = G__10951;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10952__i = 0, G__10952__a = new Array(arguments.length -  0);
while (G__10952__i < G__10952__a.length) {G__10952__a[G__10952__i] = arguments[G__10952__i + 0]; ++G__10952__i;}
  args = new cljs.core.IndexedSeq(G__10952__a,0);
} 
return G__10939__delegate.call(this,args);};
G__10939.cljs$lang$maxFixedArity = 0;
G__10939.cljs$lang$applyTo = (function (arglist__10953){
var args = cljs.core.seq(arglist__10953);
return G__10939__delegate(args);
});
G__10939.cljs$core$IFn$_invoke$arity$variadic = G__10939__delegate;
return G__10939;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10954__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10955__i = 0, G__10955__a = new Array(arguments.length -  0);
while (G__10955__i < G__10955__a.length) {G__10955__a[G__10955__i] = arguments[G__10955__i + 0]; ++G__10955__i;}
  args = new cljs.core.IndexedSeq(G__10955__a,0);
} 
return G__10954__delegate.call(this,args);};
G__10954.cljs$lang$maxFixedArity = 0;
G__10954.cljs$lang$applyTo = (function (arglist__10956){
var args = cljs.core.seq(arglist__10956);
return G__10954__delegate(args);
});
G__10954.cljs$core$IFn$_invoke$arity$variadic = G__10954__delegate;
return G__10954;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___10959 = arguments.length;
var i__6062__auto___10960 = (0);
while(true){
if((i__6062__auto___10960 < len__6061__auto___10959)){
args__6068__auto__.push((arguments[i__6062__auto___10960]));

var G__10961 = (i__6062__auto___10960 + (1));
i__6062__auto___10960 = G__10961;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10958 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10958,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10958,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10957){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10957));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10962_SHARP_){
return document.createTextNode(p1__10962_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10963_SHARP_){
return document.createComment(p1__10963_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10964_SHARP_){
var e = (function (){var G__10965 = p1__10964_SHARP_.target;
return jQuery(G__10965);
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
return p1__10964_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10966 = [];
var len__6061__auto___10969 = arguments.length;
var i__6062__auto___10970 = (0);
while(true){
if((i__6062__auto___10970 < len__6061__auto___10969)){
args10966.push((arguments[i__6062__auto___10970]));

var G__10971 = (i__6062__auto___10970 + (1));
i__6062__auto___10970 = G__10971;
continue;
} else {
}
break;
}

var G__10968 = args10966.length;
switch (G__10968) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10966.length)].join('')));

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
var args10973 = [];
var len__6061__auto___10976 = arguments.length;
var i__6062__auto___10977 = (0);
while(true){
if((i__6062__auto___10977 < len__6061__auto___10976)){
args10973.push((arguments[i__6062__auto___10977]));

var G__10978 = (i__6062__auto___10977 + (1));
i__6062__auto___10977 = G__10978;
continue;
} else {
}
break;
}

var G__10975 = args10973.length;
switch (G__10975) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10973.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10980 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10980) : cljs.core.atom.call(null,G__10980));
})();
var prefer_table__5917__auto__ = (function (){var G__10981 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10981) : cljs.core.atom.call(null,G__10981));
})();
var method_cache__5918__auto__ = (function (){var G__10982 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10982) : cljs.core.atom.call(null,G__10982));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10983 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10983) : cljs.core.atom.call(null,G__10983));
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
var G__10984 = elem;
var G__10985 = cljs.core.cst$kw$attr;
var G__10986 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10984,G__10985,G__10986) : tailrecursion.hoplon.do_BANG_.call(null,G__10984,G__10985,G__10986));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10987__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10987 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10988__i = 0, G__10988__a = new Array(arguments.length -  2);
while (G__10988__i < G__10988__a.length) {G__10988__a[G__10988__i] = arguments[G__10988__i + 2]; ++G__10988__i;}
  args = new cljs.core.IndexedSeq(G__10988__a,0);
} 
return G__10987__delegate.call(this,elem,_,args);};
G__10987.cljs$lang$maxFixedArity = 2;
G__10987.cljs$lang$applyTo = (function (arglist__10989){
var elem = cljs.core.first(arglist__10989);
arglist__10989 = cljs.core.next(arglist__10989);
var _ = cljs.core.first(arglist__10989);
var args = cljs.core.rest(arglist__10989);
return G__10987__delegate(elem,_,args);
});
G__10987.cljs$core$IFn$_invoke$arity$variadic = G__10987__delegate;
return G__10987;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10990 = cljs.core.seq(kvs);
var chunk__10991 = null;
var count__10992 = (0);
var i__10993 = (0);
while(true){
if((i__10993 < count__10992)){
var vec__10994 = chunk__10991.cljs$core$IIndexed$_nth$arity$2(null,i__10993);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10994,(1),null);
var k_10996__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10996__$1);
} else {
e.attr(k_10996__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10996__$1:v));
}

var G__10997 = seq__10990;
var G__10998 = chunk__10991;
var G__10999 = count__10992;
var G__11000 = (i__10993 + (1));
seq__10990 = G__10997;
chunk__10991 = G__10998;
count__10992 = G__10999;
i__10993 = G__11000;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10990);
if(temp__4425__auto__){
var seq__10990__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10990__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10990__$1);
var G__11001 = cljs.core.chunk_rest(seq__10990__$1);
var G__11002 = c__5806__auto__;
var G__11003 = cljs.core.count(c__5806__auto__);
var G__11004 = (0);
seq__10990 = G__11001;
chunk__10991 = G__11002;
count__10992 = G__11003;
i__10993 = G__11004;
continue;
} else {
var vec__10995 = cljs.core.first(seq__10990__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10995,(1),null);
var k_11005__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11005__$1);
} else {
e.attr(k_11005__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11005__$1:v));
}

var G__11006 = cljs.core.next(seq__10990__$1);
var G__11007 = null;
var G__11008 = (0);
var G__11009 = (0);
seq__10990 = G__11006;
chunk__10991 = G__11007;
count__10992 = G__11008;
i__10993 = G__11009;
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
return (function (p1__11010_SHARP_){
return cljs.core.zipmap(p1__11010_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__11011 = cljs.core.seq(clmap);
var chunk__11012 = null;
var count__11013 = (0);
var i__11014 = (0);
while(true){
if((i__11014 < count__11013)){
var vec__11015 = chunk__11012.cljs$core$IIndexed$_nth$arity$2(null,i__11014);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11015,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11015,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11017 = seq__11011;
var G__11018 = chunk__11012;
var G__11019 = count__11013;
var G__11020 = (i__11014 + (1));
seq__11011 = G__11017;
chunk__11012 = G__11018;
count__11013 = G__11019;
i__11014 = G__11020;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11011);
if(temp__4425__auto__){
var seq__11011__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11011__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11011__$1);
var G__11021 = cljs.core.chunk_rest(seq__11011__$1);
var G__11022 = c__5806__auto__;
var G__11023 = cljs.core.count(c__5806__auto__);
var G__11024 = (0);
seq__11011 = G__11021;
chunk__11012 = G__11022;
count__11013 = G__11023;
i__11014 = G__11024;
continue;
} else {
var vec__11016 = cljs.core.first(seq__11011__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11025 = cljs.core.next(seq__11011__$1);
var G__11026 = null;
var G__11027 = (0);
var G__11028 = (0);
seq__11011 = G__11025;
chunk__11012 = G__11026;
count__11013 = G__11027;
i__11014 = G__11028;
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
var seq__11029 = cljs.core.seq(kvs);
var chunk__11030 = null;
var count__11031 = (0);
var i__11032 = (0);
while(true){
if((i__11032 < count__11031)){
var vec__11033 = chunk__11030.cljs$core$IIndexed$_nth$arity$2(null,i__11032);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11033,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11035 = seq__11029;
var G__11036 = chunk__11030;
var G__11037 = count__11031;
var G__11038 = (i__11032 + (1));
seq__11029 = G__11035;
chunk__11030 = G__11036;
count__11031 = G__11037;
i__11032 = G__11038;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11029);
if(temp__4425__auto__){
var seq__11029__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11029__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11029__$1);
var G__11039 = cljs.core.chunk_rest(seq__11029__$1);
var G__11040 = c__5806__auto__;
var G__11041 = cljs.core.count(c__5806__auto__);
var G__11042 = (0);
seq__11029 = G__11039;
chunk__11030 = G__11040;
count__11031 = G__11041;
i__11032 = G__11042;
continue;
} else {
var vec__11034 = cljs.core.first(seq__11029__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11043 = cljs.core.next(seq__11029__$1);
var G__11044 = null;
var G__11045 = (0);
var G__11046 = (0);
seq__11029 = G__11043;
chunk__11030 = G__11044;
count__11031 = G__11045;
i__11032 = G__11046;
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
var G__11047 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__11048 = (0);
return setTimeout(G__11047,G__11048);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__11049 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11049) : cljs.core.atom.call(null,G__11049));
})();
var prefer_table__5917__auto__ = (function (){var G__11050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11050) : cljs.core.atom.call(null,G__11050));
})();
var method_cache__5918__auto__ = (function (){var G__11051 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11051) : cljs.core.atom.call(null,G__11051));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__11052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11052) : cljs.core.atom.call(null,G__11052));
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
return (function (){var G__11053 = this$__$1.target;
return jQuery(G__11053);
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
var G__11056_11058 = init;
var G__11057_11059 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11056_11058,G__11057_11059) : f.call(null,G__11056_11058,G__11057_11059));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__11076 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11076) : cljs.core.atom.call(null,G__11076));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__11077,G__11078){
return (G__11077.cljs$core$IFn$_invoke$arity$1 ? G__11077.cljs$core$IFn$_invoke$arity$1(G__11078) : G__11077.call(null,G__11078));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__11080,G__11079){
return (G__11079.cljs$core$IFn$_invoke$arity$1 ? G__11079.cljs$core$IFn$_invoke$arity$1(G__11080) : G__11079.call(null,G__11080));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__11060_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__11082,G__11083,G__11081){
return (G__11081.cljs$core$IFn$_invoke$arity$2 ? G__11081.cljs$core$IFn$_invoke$arity$2(G__11082,G__11083) : G__11081.call(null,G__11082,G__11083));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__11060_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__11061_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__11061_SHARP_) : cljs.core.deref.call(null,p1__11061_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11061_SHARP_,cljs.core.rest);

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
var seq__11084 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__11085 = null;
var count__11086 = (0);
var i__11087 = (0);
while(true){
if((i__11087 < count__11086)){
var i = chunk__11085.cljs$core$IIndexed$_nth$arity$2(null,i__11087);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11088 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11088) : tpl.call(null,G__11088));
}
})());

var G__11090 = seq__11084;
var G__11091 = chunk__11085;
var G__11092 = count__11086;
var G__11093 = (i__11087 + (1));
seq__11084 = G__11090;
chunk__11085 = G__11091;
count__11086 = G__11092;
i__11087 = G__11093;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11084);
if(temp__4425__auto__){
var seq__11084__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11084__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11084__$1);
var G__11094 = cljs.core.chunk_rest(seq__11084__$1);
var G__11095 = c__5806__auto__;
var G__11096 = cljs.core.count(c__5806__auto__);
var G__11097 = (0);
seq__11084 = G__11094;
chunk__11085 = G__11095;
count__11086 = G__11096;
i__11087 = G__11097;
continue;
} else {
var i = cljs.core.first(seq__11084__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11089 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11089) : tpl.call(null,G__11089));
}
})());

var G__11098 = cljs.core.next(seq__11084__$1);
var G__11099 = null;
var G__11100 = (0);
var G__11101 = (0);
seq__11084 = G__11098;
chunk__11085 = G__11099;
count__11086 = G__11100;
i__11087 = G__11101;
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

var G__11102 = (___$1 + (1));
___$1 = G__11102;
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
var len__6061__auto___11111 = arguments.length;
var i__6062__auto___11112 = (0);
while(true){
if((i__6062__auto___11112 < len__6061__auto___11111)){
args__6068__auto__.push((arguments[i__6062__auto___11112]));

var G__11113 = (i__6062__auto___11112 + (1));
i__6062__auto___11112 = G__11113;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11104){
var vec__11105 = p__11104;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11105,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__11105,default$){
return (function (G__11106,G__11108,G__11107){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__11106.cljs$core$IFn$_invoke$arity$1 ? G__11106.cljs$core$IFn$_invoke$arity$1(G__11107) : G__11106.call(null,G__11107));
if(cljs.core.truth_(and__5010__auto__)){
return G__11107;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__11108;
}
});})(c,vec__11105,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11105,default$){
return (function (){
var G__11109 = c;
var G__11110 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11109,G__11110) : cljs.core.reset_BANG_.call(null,G__11109,G__11110));
});})(_,c,vec__11105,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq11103){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11103));
});
