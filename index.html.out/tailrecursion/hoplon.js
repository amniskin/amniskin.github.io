// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10799_SHARP_){
return (p1__10799_SHARP_ instanceof Node);
}):(function (p1__10800_SHARP_){
try{return p1__10800_SHARP_.nodeType;
}catch (e10801){if((e10801 instanceof Error)){
var _ = e10801;
return null;
} else {
throw e10801;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10802_SHARP_){
try{return cljs.core.vector_QMARK_(p1__10802_SHARP_);
}catch (e10803){if((e10803 instanceof Error)){
var _ = e10803;
return null;
} else {
throw e10803;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10804_SHARP_){
try{return cljs.core.seq_QMARK_(p1__10804_SHARP_);
}catch (e10805){if((e10805 instanceof Error)){
var _ = e10805;
return null;
} else {
throw e10805;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10806_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__10806_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args10807 = [];
var len__6061__auto___10811 = arguments.length;
var i__6062__auto___10812 = (0);
while(true){
if((i__6062__auto___10812 < len__6061__auto___10811)){
args10807.push((arguments[i__6062__auto___10812]));

var G__10813 = (i__6062__auto___10812 + (1));
i__6062__auto___10812 = G__10813;
continue;
} else {
}
break;
}

var G__10809 = args10807.length;
switch (G__10809) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10807.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10810){if((e10810 instanceof Error)){
var _ = e10810;
return not_found;
} else {
throw e10810;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args10815 = [];
var len__6061__auto___10818 = arguments.length;
var i__6062__auto___10819 = (0);
while(true){
if((i__6062__auto___10819 < len__6061__auto___10818)){
args10815.push((arguments[i__6062__auto___10819]));

var G__10820 = (i__6062__auto___10819 + (1));
i__6062__auto___10819 = G__10820;
continue;
} else {
}
break;
}

var G__10817 = args10815.length;
switch (G__10817) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10815.length)].join('')));

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
var G__10830 = args;
var vec__10831 = G__10830;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10831,(0),null);
var args__$1 = cljs.core.nthnext(vec__10831,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__10830__$1 = G__10830;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10832 = G__10830__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10832,(0),null);
var args__$2 = cljs.core.nthnext(vec__10832,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10833 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__10830__$1,attr__$2,kids__$2,vec__10832,arg__$1,args__$2,attr,kids,G__10830,vec__10831,arg,args__$1){
return (function (p1__10822_SHARP_,p2__10823_SHARP_,p3__10824_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10822_SHARP_,p2__10823_SHARP_,p3__10824_SHARP_);
});})(attr__$1,kids__$1,G__10830__$1,attr__$2,kids__$2,vec__10832,arg__$1,args__$2,attr,kids,G__10830,vec__10831,arg,args__$1))
,attr__$2,arg__$1);
var G__10834 = kids__$2;
var G__10835 = args__$2;
attr__$1 = G__10833;
kids__$1 = G__10834;
G__10830__$1 = G__10835;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10836 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10837 = kids__$2;
var G__10838 = cljs.core.rest(args__$2);
attr__$1 = G__10836;
kids__$1 = G__10837;
G__10830__$1 = G__10838;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__10839 = attr__$2;
var G__10840 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10841 = args__$2;
attr__$1 = G__10839;
kids__$1 = G__10840;
G__10830__$1 = G__10841;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10842 = attr__$2;
var G__10843 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10844 = args__$2;
attr__$1 = G__10842;
kids__$1 = G__10843;
G__10830__$1 = G__10844;
continue;
} else {
var G__10845 = attr__$2;
var G__10846 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10847 = args__$2;
attr__$1 = G__10845;
kids__$1 = G__10846;
G__10830__$1 = G__10847;
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
var G__10863_10868 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10865_10870 = this$__$2;
var G__10866_10871 = k;
var G__10867_10872 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10865_10870,G__10866_10871,G__10867_10872) : tailrecursion.hoplon.do_BANG_.call(null,G__10865_10870,G__10866_10871,G__10867_10872));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10849_SHARP_,p2__10850_SHARP_,p3__10851_SHARP_,p4__10848_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10848_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10848_SHARP_));
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
var G__10864_10869 = (0);
setTimeout(G__10863_10868,G__10864_10869);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10873_SHARP_,p2__10874_SHARP_){
return p1__10873_SHARP_.appendChild(p2__10874_SHARP_);
}):(function (p1__10875_SHARP_,p2__10876_SHARP_){
try{return p1__10875_SHARP_.appendChild(p2__10876_SHARP_);
}catch (e10877){if((e10877 instanceof Error)){
var _ = e10877;
return null;
} else {
throw e10877;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10880 = this$;
var G__10881 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10880,G__10881) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10880,G__10881));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10887){
var vec__10893 = p__10887;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10893,(0),null);
var _ = cljs.core.nthnext(vec__10893,(1));
var kids = vec__10893;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10893,child_cell,_,kids){
return (function (p1__10883_SHARP_,p2__10884_SHARP_,p3__10885_SHARP_,p4__10882_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10882_SHARP_);
});})(vec__10893,child_cell,_,kids))
);
} else {
var node_10898 = ((function (vec__10893,child_cell,_,kids){
return (function (p1__10886_SHARP_){
if(typeof p1__10886_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10886_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10886_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10886_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10886_SHARP_)))){
return p1__10886_SHARP_;
} else {
return null;
}
}
});})(vec__10893,child_cell,_,kids))
;
var seq__10894_10899 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10895_10900 = null;
var count__10896_10901 = (0);
var i__10897_10902 = (0);
while(true){
if((i__10897_10902 < count__10896_10901)){
var x_10903 = chunk__10895_10900.cljs$core$IIndexed$_nth$arity$2(null,i__10897_10902);
var temp__4425__auto___10904 = node_10898(x_10903);
if(cljs.core.truth_(temp__4425__auto___10904)){
var x_10905__$1 = temp__4425__auto___10904;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10905__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10905__$1));
} else {
}

var G__10906 = seq__10894_10899;
var G__10907 = chunk__10895_10900;
var G__10908 = count__10896_10901;
var G__10909 = (i__10897_10902 + (1));
seq__10894_10899 = G__10906;
chunk__10895_10900 = G__10907;
count__10896_10901 = G__10908;
i__10897_10902 = G__10909;
continue;
} else {
var temp__4425__auto___10910 = cljs.core.seq(seq__10894_10899);
if(temp__4425__auto___10910){
var seq__10894_10911__$1 = temp__4425__auto___10910;
if(cljs.core.chunked_seq_QMARK_(seq__10894_10911__$1)){
var c__5806__auto___10912 = cljs.core.chunk_first(seq__10894_10911__$1);
var G__10913 = cljs.core.chunk_rest(seq__10894_10911__$1);
var G__10914 = c__5806__auto___10912;
var G__10915 = cljs.core.count(c__5806__auto___10912);
var G__10916 = (0);
seq__10894_10899 = G__10913;
chunk__10895_10900 = G__10914;
count__10896_10901 = G__10915;
i__10897_10902 = G__10916;
continue;
} else {
var x_10917 = cljs.core.first(seq__10894_10911__$1);
var temp__4425__auto___10918__$1 = node_10898(x_10917);
if(cljs.core.truth_(temp__4425__auto___10918__$1)){
var x_10919__$1 = temp__4425__auto___10918__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10919__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10919__$1));
} else {
}

var G__10920 = cljs.core.next(seq__10894_10911__$1);
var G__10921 = null;
var G__10922 = (0);
var G__10923 = (0);
seq__10894_10899 = G__10920;
chunk__10895_10900 = G__10921;
count__10896_10901 = G__10922;
i__10897_10902 = G__10923;
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
var G__10931__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10925 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10925,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10926 = this$;
G__10926.hoplonIFn(attr,kids);

return G__10926;
} else {
var G__10927 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10927,attr);

tailrecursion.hoplon.add_children_BANG_(G__10927,kids);

return G__10927;
}
};
var G__10931 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10932__i = 0, G__10932__a = new Array(arguments.length -  1);
while (G__10932__i < G__10932__a.length) {G__10932__a[G__10932__i] = arguments[G__10932__i + 1]; ++G__10932__i;}
  args = new cljs.core.IndexedSeq(G__10932__a,0);
} 
return G__10931__delegate.call(this,self__,args);};
G__10931.cljs$lang$maxFixedArity = 1;
G__10931.cljs$lang$applyTo = (function (arglist__10933){
var self__ = cljs.core.first(arglist__10933);
var args = cljs.core.rest(arglist__10933);
return G__10931__delegate(self__,args);
});
G__10931.cljs$core$IFn$_invoke$arity$variadic = G__10931__delegate;
return G__10931;
})()
;

Element.prototype.apply = (function (self__,args10924){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10924)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10934__delegate = function (args){
var this$ = this;
var vec__10928 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10928,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10928,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10929 = this$;
G__10929.hoplonIFn(attr,kids);

return G__10929;
} else {
var G__10930 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10930,attr);

tailrecursion.hoplon.add_children_BANG_(G__10930,kids);

return G__10930;
}
};
var G__10934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10935__i = 0, G__10935__a = new Array(arguments.length -  0);
while (G__10935__i < G__10935__a.length) {G__10935__a[G__10935__i] = arguments[G__10935__i + 0]; ++G__10935__i;}
  args = new cljs.core.IndexedSeq(G__10935__a,0);
} 
return G__10934__delegate.call(this,args);};
G__10934.cljs$lang$maxFixedArity = 0;
G__10934.cljs$lang$applyTo = (function (arglist__10936){
var args = cljs.core.seq(arglist__10936);
return G__10934__delegate(args);
});
G__10934.cljs$core$IFn$_invoke$arity$variadic = G__10934__delegate;
return G__10934;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10947__delegate = function (args){
var vec__10942 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10942,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10942,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10943 = cljs.core.seq(kids);
var chunk__10944 = null;
var count__10945 = (0);
var i__10946 = (0);
while(true){
if((i__10946 < count__10945)){
var k = chunk__10944.cljs$core$IIndexed$_nth$arity$2(null,i__10946);
elem.appendChild(k);

var G__10948 = seq__10943;
var G__10949 = chunk__10944;
var G__10950 = count__10945;
var G__10951 = (i__10946 + (1));
seq__10943 = G__10948;
chunk__10944 = G__10949;
count__10945 = G__10950;
i__10946 = G__10951;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10943);
if(temp__4425__auto__){
var seq__10943__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10943__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10943__$1);
var G__10952 = cljs.core.chunk_rest(seq__10943__$1);
var G__10953 = c__5806__auto__;
var G__10954 = cljs.core.count(c__5806__auto__);
var G__10955 = (0);
seq__10943 = G__10952;
chunk__10944 = G__10953;
count__10945 = G__10954;
i__10946 = G__10955;
continue;
} else {
var k = cljs.core.first(seq__10943__$1);
elem.appendChild(k);

var G__10956 = cljs.core.next(seq__10943__$1);
var G__10957 = null;
var G__10958 = (0);
var G__10959 = (0);
seq__10943 = G__10956;
chunk__10944 = G__10957;
count__10945 = G__10958;
i__10946 = G__10959;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10960__i = 0, G__10960__a = new Array(arguments.length -  0);
while (G__10960__i < G__10960__a.length) {G__10960__a[G__10960__i] = arguments[G__10960__i + 0]; ++G__10960__i;}
  args = new cljs.core.IndexedSeq(G__10960__a,0);
} 
return G__10947__delegate.call(this,args);};
G__10947.cljs$lang$maxFixedArity = 0;
G__10947.cljs$lang$applyTo = (function (arglist__10961){
var args = cljs.core.seq(arglist__10961);
return G__10947__delegate(args);
});
G__10947.cljs$core$IFn$_invoke$arity$variadic = G__10947__delegate;
return G__10947;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10962__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10963__i = 0, G__10963__a = new Array(arguments.length -  0);
while (G__10963__i < G__10963__a.length) {G__10963__a[G__10963__i] = arguments[G__10963__i + 0]; ++G__10963__i;}
  args = new cljs.core.IndexedSeq(G__10963__a,0);
} 
return G__10962__delegate.call(this,args);};
G__10962.cljs$lang$maxFixedArity = 0;
G__10962.cljs$lang$applyTo = (function (arglist__10964){
var args = cljs.core.seq(arglist__10964);
return G__10962__delegate(args);
});
G__10962.cljs$core$IFn$_invoke$arity$variadic = G__10962__delegate;
return G__10962;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___10967 = arguments.length;
var i__6062__auto___10968 = (0);
while(true){
if((i__6062__auto___10968 < len__6061__auto___10967)){
args__6068__auto__.push((arguments[i__6062__auto___10968]));

var G__10969 = (i__6062__auto___10968 + (1));
i__6062__auto___10968 = G__10969;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10966 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10966,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10966,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10965){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10965));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10970_SHARP_){
return document.createTextNode(p1__10970_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10971_SHARP_){
return document.createComment(p1__10971_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10972_SHARP_){
var e = (function (){var G__10973 = p1__10972_SHARP_.target;
return jQuery(G__10973);
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
return p1__10972_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10974 = [];
var len__6061__auto___10977 = arguments.length;
var i__6062__auto___10978 = (0);
while(true){
if((i__6062__auto___10978 < len__6061__auto___10977)){
args10974.push((arguments[i__6062__auto___10978]));

var G__10979 = (i__6062__auto___10978 + (1));
i__6062__auto___10978 = G__10979;
continue;
} else {
}
break;
}

var G__10976 = args10974.length;
switch (G__10976) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10974.length)].join('')));

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
var args10981 = [];
var len__6061__auto___10984 = arguments.length;
var i__6062__auto___10985 = (0);
while(true){
if((i__6062__auto___10985 < len__6061__auto___10984)){
args10981.push((arguments[i__6062__auto___10985]));

var G__10986 = (i__6062__auto___10985 + (1));
i__6062__auto___10985 = G__10986;
continue;
} else {
}
break;
}

var G__10983 = args10981.length;
switch (G__10983) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10981.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__10988 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10988) : cljs.core.atom.call(null,G__10988));
})();
var prefer_table__5917__auto__ = (function (){var G__10989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10989) : cljs.core.atom.call(null,G__10989));
})();
var method_cache__5918__auto__ = (function (){var G__10990 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10990) : cljs.core.atom.call(null,G__10990));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__10991 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10991) : cljs.core.atom.call(null,G__10991));
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
var G__10992 = elem;
var G__10993 = cljs.core.cst$kw$attr;
var G__10994 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10992,G__10993,G__10994) : tailrecursion.hoplon.do_BANG_.call(null,G__10992,G__10993,G__10994));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10995__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10995 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10996__i = 0, G__10996__a = new Array(arguments.length -  2);
while (G__10996__i < G__10996__a.length) {G__10996__a[G__10996__i] = arguments[G__10996__i + 2]; ++G__10996__i;}
  args = new cljs.core.IndexedSeq(G__10996__a,0);
} 
return G__10995__delegate.call(this,elem,_,args);};
G__10995.cljs$lang$maxFixedArity = 2;
G__10995.cljs$lang$applyTo = (function (arglist__10997){
var elem = cljs.core.first(arglist__10997);
arglist__10997 = cljs.core.next(arglist__10997);
var _ = cljs.core.first(arglist__10997);
var args = cljs.core.rest(arglist__10997);
return G__10995__delegate(elem,_,args);
});
G__10995.cljs$core$IFn$_invoke$arity$variadic = G__10995__delegate;
return G__10995;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10998 = cljs.core.seq(kvs);
var chunk__10999 = null;
var count__11000 = (0);
var i__11001 = (0);
while(true){
if((i__11001 < count__11000)){
var vec__11002 = chunk__10999.cljs$core$IIndexed$_nth$arity$2(null,i__11001);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11002,(1),null);
var k_11004__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11004__$1);
} else {
e.attr(k_11004__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11004__$1:v));
}

var G__11005 = seq__10998;
var G__11006 = chunk__10999;
var G__11007 = count__11000;
var G__11008 = (i__11001 + (1));
seq__10998 = G__11005;
chunk__10999 = G__11006;
count__11000 = G__11007;
i__11001 = G__11008;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10998);
if(temp__4425__auto__){
var seq__10998__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10998__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__10998__$1);
var G__11009 = cljs.core.chunk_rest(seq__10998__$1);
var G__11010 = c__5806__auto__;
var G__11011 = cljs.core.count(c__5806__auto__);
var G__11012 = (0);
seq__10998 = G__11009;
chunk__10999 = G__11010;
count__11000 = G__11011;
i__11001 = G__11012;
continue;
} else {
var vec__11003 = cljs.core.first(seq__10998__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003,(1),null);
var k_11013__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_11013__$1);
} else {
e.attr(k_11013__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11013__$1:v));
}

var G__11014 = cljs.core.next(seq__10998__$1);
var G__11015 = null;
var G__11016 = (0);
var G__11017 = (0);
seq__10998 = G__11014;
chunk__10999 = G__11015;
count__11000 = G__11016;
i__11001 = G__11017;
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
return (function (p1__11018_SHARP_){
return cljs.core.zipmap(p1__11018_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__11019 = cljs.core.seq(clmap);
var chunk__11020 = null;
var count__11021 = (0);
var i__11022 = (0);
while(true){
if((i__11022 < count__11021)){
var vec__11023 = chunk__11020.cljs$core$IIndexed$_nth$arity$2(null,i__11022);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11025 = seq__11019;
var G__11026 = chunk__11020;
var G__11027 = count__11021;
var G__11028 = (i__11022 + (1));
seq__11019 = G__11025;
chunk__11020 = G__11026;
count__11021 = G__11027;
i__11022 = G__11028;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11019);
if(temp__4425__auto__){
var seq__11019__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11019__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11019__$1);
var G__11029 = cljs.core.chunk_rest(seq__11019__$1);
var G__11030 = c__5806__auto__;
var G__11031 = cljs.core.count(c__5806__auto__);
var G__11032 = (0);
seq__11019 = G__11029;
chunk__11020 = G__11030;
count__11021 = G__11031;
i__11022 = G__11032;
continue;
} else {
var vec__11024 = cljs.core.first(seq__11019__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11033 = cljs.core.next(seq__11019__$1);
var G__11034 = null;
var G__11035 = (0);
var G__11036 = (0);
seq__11019 = G__11033;
chunk__11020 = G__11034;
count__11021 = G__11035;
i__11022 = G__11036;
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
var seq__11037 = cljs.core.seq(kvs);
var chunk__11038 = null;
var count__11039 = (0);
var i__11040 = (0);
while(true){
if((i__11040 < count__11039)){
var vec__11041 = chunk__11038.cljs$core$IIndexed$_nth$arity$2(null,i__11040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11043 = seq__11037;
var G__11044 = chunk__11038;
var G__11045 = count__11039;
var G__11046 = (i__11040 + (1));
seq__11037 = G__11043;
chunk__11038 = G__11044;
count__11039 = G__11045;
i__11040 = G__11046;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11037);
if(temp__4425__auto__){
var seq__11037__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11037__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11037__$1);
var G__11047 = cljs.core.chunk_rest(seq__11037__$1);
var G__11048 = c__5806__auto__;
var G__11049 = cljs.core.count(c__5806__auto__);
var G__11050 = (0);
seq__11037 = G__11047;
chunk__11038 = G__11048;
count__11039 = G__11049;
i__11040 = G__11050;
continue;
} else {
var vec__11042 = cljs.core.first(seq__11037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__11051 = cljs.core.next(seq__11037__$1);
var G__11052 = null;
var G__11053 = (0);
var G__11054 = (0);
seq__11037 = G__11051;
chunk__11038 = G__11052;
count__11039 = G__11053;
i__11040 = G__11054;
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
var G__11055 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__11056 = (0);
return setTimeout(G__11055,G__11056);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__11057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11057) : cljs.core.atom.call(null,G__11057));
})();
var prefer_table__5917__auto__ = (function (){var G__11058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11058) : cljs.core.atom.call(null,G__11058));
})();
var method_cache__5918__auto__ = (function (){var G__11059 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11059) : cljs.core.atom.call(null,G__11059));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__11060 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11060) : cljs.core.atom.call(null,G__11060));
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
return (function (){var G__11061 = this$__$1.target;
return jQuery(G__11061);
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
var G__11064_11066 = init;
var G__11065_11067 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11064_11066,G__11065_11067) : f.call(null,G__11064_11066,G__11065_11067));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__11084 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11084) : cljs.core.atom.call(null,G__11084));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__11085,G__11086){
return (G__11085.cljs$core$IFn$_invoke$arity$1 ? G__11085.cljs$core$IFn$_invoke$arity$1(G__11086) : G__11085.call(null,G__11086));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__11088,G__11087){
return (G__11087.cljs$core$IFn$_invoke$arity$1 ? G__11087.cljs$core$IFn$_invoke$arity$1(G__11088) : G__11087.call(null,G__11088));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__11068_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__11091,G__11090,G__11089){
return (G__11089.cljs$core$IFn$_invoke$arity$2 ? G__11089.cljs$core$IFn$_invoke$arity$2(G__11090,G__11091) : G__11089.call(null,G__11090,G__11091));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__11068_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__11069_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__11069_SHARP_) : cljs.core.deref.call(null,p1__11069_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__11069_SHARP_,cljs.core.rest);

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
var seq__11092 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__11093 = null;
var count__11094 = (0);
var i__11095 = (0);
while(true){
if((i__11095 < count__11094)){
var i = chunk__11093.cljs$core$IIndexed$_nth$arity$2(null,i__11095);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11096 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11096) : tpl.call(null,G__11096));
}
})());

var G__11098 = seq__11092;
var G__11099 = chunk__11093;
var G__11100 = count__11094;
var G__11101 = (i__11095 + (1));
seq__11092 = G__11098;
chunk__11093 = G__11099;
count__11094 = G__11100;
i__11095 = G__11101;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11092);
if(temp__4425__auto__){
var seq__11092__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11092__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__11092__$1);
var G__11102 = cljs.core.chunk_rest(seq__11092__$1);
var G__11103 = c__5806__auto__;
var G__11104 = cljs.core.count(c__5806__auto__);
var G__11105 = (0);
seq__11092 = G__11102;
chunk__11093 = G__11103;
count__11094 = G__11104;
i__11095 = G__11105;
continue;
} else {
var i = cljs.core.first(seq__11092__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__11097 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__11097) : tpl.call(null,G__11097));
}
})());

var G__11106 = cljs.core.next(seq__11092__$1);
var G__11107 = null;
var G__11108 = (0);
var G__11109 = (0);
seq__11092 = G__11106;
chunk__11093 = G__11107;
count__11094 = G__11108;
i__11095 = G__11109;
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

var G__11110 = (___$1 + (1));
___$1 = G__11110;
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
var len__6061__auto___11119 = arguments.length;
var i__6062__auto___11120 = (0);
while(true){
if((i__6062__auto___11120 < len__6061__auto___11119)){
args__6068__auto__.push((arguments[i__6062__auto___11120]));

var G__11121 = (i__6062__auto___11120 + (1));
i__6062__auto___11120 = G__11121;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__11112){
var vec__11113 = p__11112;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11113,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__11113,default$){
return (function (G__11114,G__11116,G__11115){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__11114.cljs$core$IFn$_invoke$arity$1 ? G__11114.cljs$core$IFn$_invoke$arity$1(G__11115) : G__11114.call(null,G__11115));
if(cljs.core.truth_(and__5010__auto__)){
return G__11115;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__11116;
}
});})(c,vec__11113,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__11113,default$){
return (function (){
var G__11117 = c;
var G__11118 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11117,G__11118) : cljs.core.reset_BANG_.call(null,G__11117,G__11118));
});})(_,c,vec__11113,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq11111){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11111));
});
