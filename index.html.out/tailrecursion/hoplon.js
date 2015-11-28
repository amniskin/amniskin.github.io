// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10803_SHARP_){
return (p1__10803_SHARP_ instanceof Node);
}):(function (p1__10804_SHARP_){
try{return p1__10804_SHARP_.nodeType;
}catch (e10805){if((e10805 instanceof Error)){
var _ = e10805;
return null;
} else {
throw e10805;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10806_SHARP_){
try{return cljs.core.vector_QMARK_(p1__10806_SHARP_);
}catch (e10807){if((e10807 instanceof Error)){
var _ = e10807;
return null;
} else {
throw e10807;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10808_SHARP_){
try{return cljs.core.seq_QMARK_(p1__10808_SHARP_);
}catch (e10809){if((e10809 instanceof Error)){
var _ = e10809;
return null;
} else {
throw e10809;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10810_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__10810_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args10811 = [];
var len__6061__auto___10815 = arguments.length;
var i__6062__auto___10816 = (0);
while(true){
if((i__6062__auto___10816 < len__6061__auto___10815)){
args10811.push((arguments[i__6062__auto___10816]));

var G__10817 = (i__6062__auto___10816 + (1));
i__6062__auto___10816 = G__10817;
continue;
} else {
}
break;
}

var G__10813 = args10811.length;
switch (G__10813) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10811.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10814){if((e10814 instanceof Error)){
var _ = e10814;
return not_found;
} else {
throw e10814;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args10819 = [];
var len__6061__auto___10822 = arguments.length;
var i__6062__auto___10823 = (0);
while(true){
if((i__6062__auto___10823 < len__6061__auto___10822)){
args10819.push((arguments[i__6062__auto___10823]));

var G__10824 = (i__6062__auto___10823 + (1));
i__6062__auto___10823 = G__10824;
continue;
} else {
}
break;
}

var G__10821 = args10819.length;
switch (G__10821) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10819.length)].join('')));

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
var G__10834 = args;
var vec__10835 = G__10834;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10835,(0),null);
var args__$1 = cljs.core.nthnext(vec__10835,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__10834__$1 = G__10834;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10836 = G__10834__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10836,(0),null);
var args__$2 = cljs.core.nthnext(vec__10836,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10837 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__10834__$1,attr__$2,kids__$2,vec__10836,arg__$1,args__$2,attr,kids,G__10834,vec__10835,arg,args__$1){
return (function (p1__10826_SHARP_,p2__10827_SHARP_,p3__10828_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10826_SHARP_,p2__10827_SHARP_,p3__10828_SHARP_);
});})(attr__$1,kids__$1,G__10834__$1,attr__$2,kids__$2,vec__10836,arg__$1,args__$2,attr,kids,G__10834,vec__10835,arg,args__$1))
,attr__$2,arg__$1);
var G__10838 = kids__$2;
var G__10839 = args__$2;
attr__$1 = G__10837;
kids__$1 = G__10838;
G__10834__$1 = G__10839;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10840 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10841 = kids__$2;
var G__10842 = cljs.core.rest(args__$2);
attr__$1 = G__10840;
kids__$1 = G__10841;
G__10834__$1 = G__10842;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__10843 = attr__$2;
var G__10844 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10845 = args__$2;
attr__$1 = G__10843;
kids__$1 = G__10844;
G__10834__$1 = G__10845;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10846 = attr__$2;
var G__10847 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10848 = args__$2;
attr__$1 = G__10846;
kids__$1 = G__10847;
G__10834__$1 = G__10848;
continue;
} else {
var G__10849 = attr__$2;
var G__10850 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10851 = args__$2;
attr__$1 = G__10849;
kids__$1 = G__10850;
G__10834__$1 = G__10851;
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
var G__10867_10872 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10869_10874 = this$__$2;
var G__10870_10875 = k;
var G__10871_10876 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10869_10874,G__10870_10875,G__10871_10876) : tailrecursion.hoplon.do_BANG_.call(null,G__10869_10874,G__10870_10875,G__10871_10876));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10853_SHARP_,p2__10854_SHARP_,p3__10855_SHARP_,p4__10852_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10852_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10852_SHARP_));
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
var G__10868_10873 = (0);
setTimeout(G__10867_10872,G__10868_10873);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10877_SHARP_,p2__10878_SHARP_){
return p1__10877_SHARP_.appendChild(p2__10878_SHARP_);
}):(function (p1__10879_SHARP_,p2__10880_SHARP_){
try{return p1__10879_SHARP_.appendChild(p2__10880_SHARP_);
}catch (e10881){if((e10881 instanceof Error)){
var _ = e10881;
return null;
} else {
throw e10881;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10884 = this$;
var G__10885 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10884,G__10885) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10884,G__10885));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10891){
var vec__10897 = p__10891;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10897,(0),null);
var _ = cljs.core.nthnext(vec__10897,(1));
var kids = vec__10897;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10897,child_cell,_,kids){
return (function (p1__10887_SHARP_,p2__10888_SHARP_,p3__10889_SHARP_,p4__10886_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10886_SHARP_);
});})(vec__10897,child_cell,_,kids))
);
} else {
var node_10902 = ((function (vec__10897,child_cell,_,kids){
return (function (p1__10890_SHARP_){
if(typeof p1__10890_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10890_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10890_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10890_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10890_SHARP_)))){
return p1__10890_SHARP_;
} else {
return null;
}
}
});})(vec__10897,child_cell,_,kids))
;
var seq__10898_10903 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10899_10904 = null;
var count__10900_10905 = (0);
var i__10901_10906 = (0);
while(true){
if((i__10901_10906 < count__10900_10905)){
var x_10907 = chunk__10899_10904.cljs$core$IIndexed$_nth$arity$2(null,i__10901_10906);
var temp__4425__auto___10908 = node_10902(x_10907);
if(cljs.core.truth_(temp__4425__auto___10908)){
var x_10909__$1 = temp__4425__auto___10908;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10909__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10909__$1));
} else {
}

var G__10910 = seq__10898_10903;
var G__10911 = chunk__10899_10904;
var G__10912 = count__10900_10905;
var G__10913 = (i__10901_10906 + (1));
seq__10898_10903 = G__10910;
chunk__10899_10904 = G__10911;
count__10900_10905 = G__10912;
i__10901_10906 = G__10913;
continue;
} else {
var temp__4425__auto___10914 = cljs.core.seq(seq__10898_10903);
if(temp__4425__auto___10914){
var seq__10898_10915__$1 = temp__4425__auto___10914;
if(cljs.core.chunked_seq_QMARK_(seq__10898_10915__$1)){
var c__5806__auto___10916 = cljs.core.chunk_first(seq__10898_10915__$1);
var G__10917 = cljs.core.chunk_rest(seq__10898_10915__$1);
var G__10918 = c__5806__auto___10916;
var G__10919 = cljs.core.count(c__5806__auto___10916);
var G__10920 = (0);
seq__10898_10903 = G__10917;
chunk__10899_10904 = G__10918;
count__10900_10905 = G__10919;
i__10901_10906 = G__10920;
continue;
} else {
var x_10921 = cljs.core.first(seq__10898_10915__$1);
var temp__4425__auto___10922__$1 = node_10902(x_10921);
if(cljs.core.truth_(temp__4425__auto___10922__$1)){
var x_10923__$1 = temp__4425__auto___10922__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10923__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10923__$1));
} else {
}

var G__10924 = cljs.core.next(seq__10898_10915__$1);
var G__10925 = null;
var G__10926 = (0);
var G__10927 = (0);
seq__10898_10903 = G__10924;
chunk__10899_10904 = G__10925;
count__10900_10905 = G__10926;
i__10901_10906 = G__10927;
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
var G__10935__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10929 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10930 = this$;
G__10930.hoplonIFn(attr,kids);

return G__10930;
} else {
var G__10931 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10931,attr);

tailrecursion.hoplon.add_children_BANG_(G__10931,kids);

return G__10931;
}
};
var G__10935 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10936__i = 0, G__10936__a = new Array(arguments.length -  1);
while (G__10936__i < G__10936__a.length) {G__10936__a[G__10936__i] = arguments[G__10936__i + 1]; ++G__10936__i;}
  args = new cljs.core.IndexedSeq(G__10936__a,0);
} 
return G__10935__delegate.call(this,self__,args);};
G__10935.cljs$lang$maxFixedArity = 1;
G__10935.cljs$lang$applyTo = (function (arglist__10937){
var self__ = cljs.core.first(arglist__10937);
var args = cljs.core.rest(arglist__10937);
return G__10935__delegate(self__,args);
});
G__10935.cljs$core$IFn$_invoke$arity$variadic = G__10935__delegate;
return G__10935;
})()
;

Element.prototype.apply = (function (self__,args10928){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10928)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10938__delegate = function (args){
var this$ = this;
var vec__10932 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10933 = this$;
G__10933.hoplonIFn(attr,kids);

return G__10933;
} else {
var G__10934 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10934,attr);

tailrecursion.hoplon.add_children_BANG_(G__10934,kids);

return G__10934;
}
};
var G__10938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10939__i = 0, G__10939__a = new Array(arguments.length -  0);
while (G__10939__i < G__10939__a.length) {G__10939__a[G__10939__i] = arguments[G__10939__i + 0]; ++G__10939__i;}
  args = new cljs.core.IndexedSeq(G__10939__a,0);
} 
return G__10938__delegate.call(this,args);};
G__10938.cljs$lang$maxFixedArity = 0;
G__10938.cljs$lang$applyTo = (function (arglist__10940){
var args = cljs.core.seq(arglist__10940);
return G__10938__delegate(args);
});
G__10938.cljs$core$IFn$_invoke$arity$variadic = G__10938__delegate;
return G__10938;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10951__delegate = function (args){
var vec__10946 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10946,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10946,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10947 = cljs.core.seq(kids);
var chunk__10948 = null;
var count__10949 = (0);
var i__10950 = (0);
while(true){
if((i__10950 < count__10949)){
var k = chunk__10948.cljs$core$IIndexed$_nth$arity$2(null,i__10950);
elem.appendChild(k);

var G__10952 = seq__10947;
var G__10953 = chunk__10948;
var G__10954 = count__10949;
var G__10955 = (i__10950 + (1));
seq__10947 = G__10952;
chunk__10948 = G__10953;
count__10949 = G__10954;
i__10950 = G__10955;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10947);
if(temp__4425__auto__){
var seq__10947__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10947__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10947__$1);
var G__10956 = cljs.core.chunk_rest(seq__10947__$1);
var G__10957 = c__5806__auto__;
var G__10958 = cljs.core.count(c__5806__auto__);
var G__10959 = (0);
seq__10947 = G__10956;
chunk__10948 = G__10957;
count__10949 = G__10958;
i__10950 = G__10959;
continue;
} else {
var k = cljs.core.first(seq__10947__$1);
elem.appendChild(k);

var G__10960 = cljs.core.next(seq__10947__$1);
var G__10961 = null;
var G__10962 = (0);
var G__10963 = (0);
seq__10947 = G__10960;
chunk__10948 = G__10961;
count__10949 = G__10962;
i__10950 = G__10963;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10964__i = 0, G__10964__a = new Array(arguments.length -  0);
while (G__10964__i < G__10964__a.length) {G__10964__a[G__10964__i] = arguments[G__10964__i + 0]; ++G__10964__i;}
  args = new cljs.core.IndexedSeq(G__10964__a,0);
} 
return G__10951__delegate.call(this,args);};
G__10951.cljs$lang$maxFixedArity = 0;
G__10951.cljs$lang$applyTo = (function (arglist__10965){
var args = cljs.core.seq(arglist__10965);
return G__10951__delegate(args);
});
G__10951.cljs$core$IFn$_invoke$arity$variadic = G__10951__delegate;
return G__10951;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10966__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10967__i = 0, G__10967__a = new Array(arguments.length -  0);
while (G__10967__i < G__10967__a.length) {G__10967__a[G__10967__i] = arguments[G__10967__i + 0]; ++G__10967__i;}
  args = new cljs.core.IndexedSeq(G__10967__a,0);
} 
return G__10966__delegate.call(this,args);};
G__10966.cljs$lang$maxFixedArity = 0;
G__10966.cljs$lang$applyTo = (function (arglist__10968){
var args = cljs.core.seq(arglist__10968);
return G__10966__delegate(args);
});
G__10966.cljs$core$IFn$_invoke$arity$variadic = G__10966__delegate;
return G__10966;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___10971 = arguments.length;
var i__6062__auto___10972 = (0);
while(true){
if((i__6062__auto___10972 < len__6061__auto___10971)){
args__6068__auto__.push((arguments[i__6062__auto___10972]));

var G__10973 = (i__6062__auto___10972 + (1));
i__6062__auto___10972 = G__10973;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10970 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10970,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10970,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10969){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10969));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10974_SHARP_){
return document.createTextNode(p1__10974_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10975_SHARP_){
return document.createComment(p1__10975_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10976_SHARP_){
var e = (function (){var G__10977 = p1__10976_SHARP_.target;
return jQuery(G__10977);
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
return p1__10976_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10978 = [];
var len__6061__auto___10981 = arguments.length;
var i__6062__auto___10982 = (0);
while(true){
if((i__6062__auto___10982 < len__6061__auto___10981)){
args10978.push((arguments[i__6062__auto___10982]));

var G__10983 = (i__6062__auto___10982 + (1));
i__6062__auto___10982 = G__10983;
continue;
} else {
}
break;
}

var G__10980 = args10978.length;
switch (G__10980) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10978.length)].join('')));

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
var args10985 = [];
var len__6061__auto___10988 = arguments.length;
var i__6062__auto___10989 = (0);
while(true){
if((i__6062__auto___10989 < len__6061__auto___10988)){
args10985.push((arguments[i__6062__auto___10989]));

var G__10990 = (i__6062__auto___10989 + (1));
i__6062__auto___10989 = G__10990;
continue;
} else {
}
break;
}

var G__10987 = args10985.length;
switch (G__10987) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10985.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10992 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10992) : cljs.core.atom.call(null,G__10992));
})();
var prefer_table__5917__auto__ = (function (){var G__10993 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10993) : cljs.core.atom.call(null,G__10993));
})();
var method_cache__5918__auto__ = (function (){var G__10994 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10994) : cljs.core.atom.call(null,G__10994));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10995 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10995) : cljs.core.atom.call(null,G__10995));
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
var G__10996 = elem;
var G__10997 = cljs.core.cst$kw$attr;
var G__10998 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10996,G__10997,G__10998) : tailrecursion.hoplon.do_BANG_.call(null,G__10996,G__10997,G__10998));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10999__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10999 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__11000__i = 0, G__11000__a = new Array(arguments.length -  2);
while (G__11000__i < G__11000__a.length) {G__11000__a[G__11000__i] = arguments[G__11000__i + 2]; ++G__11000__i;}
  args = new cljs.core.IndexedSeq(G__11000__a,0);
} 
return G__10999__delegate.call(this,elem,_,args);};
G__10999.cljs$lang$maxFixedArity = 2;
G__10999.cljs$lang$applyTo = (function (arglist__11001){
var elem = cljs.core.first(arglist__11001);
arglist__11001 = cljs.core.next(arglist__11001);
var _ = cljs.core.first(arglist__11001);
var args = cljs.core.rest(arglist__11001);
return G__10999__delegate(elem,_,args);
});
G__10999.cljs$core$IFn$_invoke$arity$variadic = G__10999__delegate;
return G__10999;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__11002 = cljs.core.seq(kvs);
var chunk__11003 = null;
var count__11004 = (0);
var i__11005 = (0);
while(true){
if((i__11005 < count__11004)){
var vec__11006 = chunk__11003.cljs$core$IIndexed$_nth$arity$2(null,i__11005);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11006,(1),null);
var k_11008__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11008__$1);
} else {
e.attr(k_11008__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11008__$1:v));
}

var G__11009 = seq__11002;
var G__11010 = chunk__11003;
var G__11011 = count__11004;
var G__11012 = (i__11005 + (1));
seq__11002 = G__11009;
chunk__11003 = G__11010;
count__11004 = G__11011;
i__11005 = G__11012;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11002);
if(temp__4425__auto__){
var seq__11002__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11002__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11002__$1);
var G__11013 = cljs.core.chunk_rest(seq__11002__$1);
var G__11014 = c__5806__auto__;
var G__11015 = cljs.core.count(c__5806__auto__);
var G__11016 = (0);
seq__11002 = G__11013;
chunk__11003 = G__11014;
count__11004 = G__11015;
i__11005 = G__11016;
continue;
} else {
var vec__11007 = cljs.core.first(seq__11002__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11007,(1),null);
var k_11017__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11017__$1);
} else {
e.attr(k_11017__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11017__$1:v));
}

var G__11018 = cljs.core.next(seq__11002__$1);
var G__11019 = null;
var G__11020 = (0);
var G__11021 = (0);
seq__11002 = G__11018;
chunk__11003 = G__11019;
count__11004 = G__11020;
i__11005 = G__11021;
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
return (function (p1__11022_SHARP_){
return cljs.core.zipmap(p1__11022_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__11023 = cljs.core.seq(clmap);
var chunk__11024 = null;
var count__11025 = (0);
var i__11026 = (0);
while(true){
if((i__11026 < count__11025)){
var vec__11027 = chunk__11024.cljs$core$IIndexed$_nth$arity$2(null,i__11026);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11027,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11027,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11029 = seq__11023;
var G__11030 = chunk__11024;
var G__11031 = count__11025;
var G__11032 = (i__11026 + (1));
seq__11023 = G__11029;
chunk__11024 = G__11030;
count__11025 = G__11031;
i__11026 = G__11032;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11023);
if(temp__4425__auto__){
var seq__11023__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11023__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11023__$1);
var G__11033 = cljs.core.chunk_rest(seq__11023__$1);
var G__11034 = c__5806__auto__;
var G__11035 = cljs.core.count(c__5806__auto__);
var G__11036 = (0);
seq__11023 = G__11033;
chunk__11024 = G__11034;
count__11025 = G__11035;
i__11026 = G__11036;
continue;
} else {
var vec__11028 = cljs.core.first(seq__11023__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11037 = cljs.core.next(seq__11023__$1);
var G__11038 = null;
var G__11039 = (0);
var G__11040 = (0);
seq__11023 = G__11037;
chunk__11024 = G__11038;
count__11025 = G__11039;
i__11026 = G__11040;
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
var seq__11041 = cljs.core.seq(kvs);
var chunk__11042 = null;
var count__11043 = (0);
var i__11044 = (0);
while(true){
if((i__11044 < count__11043)){
var vec__11045 = chunk__11042.cljs$core$IIndexed$_nth$arity$2(null,i__11044);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11047 = seq__11041;
var G__11048 = chunk__11042;
var G__11049 = count__11043;
var G__11050 = (i__11044 + (1));
seq__11041 = G__11047;
chunk__11042 = G__11048;
count__11043 = G__11049;
i__11044 = G__11050;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11041);
if(temp__4425__auto__){
var seq__11041__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11041__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11041__$1);
var G__11051 = cljs.core.chunk_rest(seq__11041__$1);
var G__11052 = c__5806__auto__;
var G__11053 = cljs.core.count(c__5806__auto__);
var G__11054 = (0);
seq__11041 = G__11051;
chunk__11042 = G__11052;
count__11043 = G__11053;
i__11044 = G__11054;
continue;
} else {
var vec__11046 = cljs.core.first(seq__11041__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11055 = cljs.core.next(seq__11041__$1);
var G__11056 = null;
var G__11057 = (0);
var G__11058 = (0);
seq__11041 = G__11055;
chunk__11042 = G__11056;
count__11043 = G__11057;
i__11044 = G__11058;
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
var G__11059 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__11060 = (0);
return setTimeout(G__11059,G__11060);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__11061 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11061) : cljs.core.atom.call(null,G__11061));
})();
var prefer_table__5917__auto__ = (function (){var G__11062 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11062) : cljs.core.atom.call(null,G__11062));
})();
var method_cache__5918__auto__ = (function (){var G__11063 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11063) : cljs.core.atom.call(null,G__11063));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__11064 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11064) : cljs.core.atom.call(null,G__11064));
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
return (function (){var G__11065 = this$__$1.target;
return jQuery(G__11065);
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
var G__11068_11070 = init;
var G__11069_11071 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11068_11070,G__11069_11071) : f.call(null,G__11068_11070,G__11069_11071));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__11088 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11088) : cljs.core.atom.call(null,G__11088));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__11089,G__11090){
return (G__11089.cljs$core$IFn$_invoke$arity$1 ? G__11089.cljs$core$IFn$_invoke$arity$1(G__11090) : G__11089.call(null,G__11090));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__11092,G__11091){
return (G__11091.cljs$core$IFn$_invoke$arity$1 ? G__11091.cljs$core$IFn$_invoke$arity$1(G__11092) : G__11091.call(null,G__11092));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__11072_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__11095,G__11094,G__11093){
return (G__11093.cljs$core$IFn$_invoke$arity$2 ? G__11093.cljs$core$IFn$_invoke$arity$2(G__11094,G__11095) : G__11093.call(null,G__11094,G__11095));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__11072_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__11073_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__11073_SHARP_) : cljs.core.deref.call(null,p1__11073_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11073_SHARP_,cljs.core.rest);

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
var seq__11096 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__11097 = null;
var count__11098 = (0);
var i__11099 = (0);
while(true){
if((i__11099 < count__11098)){
var i = chunk__11097.cljs$core$IIndexed$_nth$arity$2(null,i__11099);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11100 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11100) : tpl.call(null,G__11100));
}
})());

var G__11102 = seq__11096;
var G__11103 = chunk__11097;
var G__11104 = count__11098;
var G__11105 = (i__11099 + (1));
seq__11096 = G__11102;
chunk__11097 = G__11103;
count__11098 = G__11104;
i__11099 = G__11105;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11096);
if(temp__4425__auto__){
var seq__11096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11096__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11096__$1);
var G__11106 = cljs.core.chunk_rest(seq__11096__$1);
var G__11107 = c__5806__auto__;
var G__11108 = cljs.core.count(c__5806__auto__);
var G__11109 = (0);
seq__11096 = G__11106;
chunk__11097 = G__11107;
count__11098 = G__11108;
i__11099 = G__11109;
continue;
} else {
var i = cljs.core.first(seq__11096__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11101 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11101) : tpl.call(null,G__11101));
}
})());

var G__11110 = cljs.core.next(seq__11096__$1);
var G__11111 = null;
var G__11112 = (0);
var G__11113 = (0);
seq__11096 = G__11110;
chunk__11097 = G__11111;
count__11098 = G__11112;
i__11099 = G__11113;
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

var G__11114 = (___$1 + (1));
___$1 = G__11114;
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
var len__6061__auto___11123 = arguments.length;
var i__6062__auto___11124 = (0);
while(true){
if((i__6062__auto___11124 < len__6061__auto___11123)){
args__6068__auto__.push((arguments[i__6062__auto___11124]));

var G__11125 = (i__6062__auto___11124 + (1));
i__6062__auto___11124 = G__11125;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11116){
var vec__11117 = p__11116;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11117,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__11117,default$){
return (function (G__11118,G__11120,G__11119){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__11118.cljs$core$IFn$_invoke$arity$1 ? G__11118.cljs$core$IFn$_invoke$arity$1(G__11119) : G__11118.call(null,G__11119));
if(cljs.core.truth_(and__5010__auto__)){
return G__11119;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__11120;
}
});})(c,vec__11117,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11117,default$){
return (function (){
var G__11121 = c;
var G__11122 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11121,G__11122) : cljs.core.reset_BANG_.call(null,G__11121,G__11122));
});})(_,c,vec__11117,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq11115){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11115));
});
