// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__8747_SHARP_){
return (p1__8747_SHARP_ instanceof Node);
}):(function (p1__8748_SHARP_){
try{return p1__8748_SHARP_.nodeType;
}catch (e8749){if((e8749 instanceof Error)){
var _ = e8749;
return null;
} else {
throw e8749;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8750_SHARP_){
try{return cljs.core.vector_QMARK_(p1__8750_SHARP_);
}catch (e8751){if((e8751 instanceof Error)){
var _ = e8751;
return null;
} else {
throw e8751;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8752_SHARP_){
try{return cljs.core.seq_QMARK_(p1__8752_SHARP_);
}catch (e8753){if((e8753 instanceof Error)){
var _ = e8753;
return null;
} else {
throw e8753;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__8754_SHARP_){
if(cljs.core.truth_((function (){var and__4830__auto__ = console;
if(cljs.core.truth_(and__4830__auto__)){
return console.log;
} else {
return and__4830__auto__;
}
})())){
return console.log(p1__8754_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args8755 = [];
var len__5881__auto___8759 = arguments.length;
var i__5882__auto___8760 = (0);
while(true){
if((i__5882__auto___8760 < len__5881__auto___8759)){
args8755.push((arguments[i__5882__auto___8760]));

var G__8761 = (i__5882__auto___8760 + (1));
i__5882__auto___8760 = G__8761;
continue;
} else {
}
break;
}

var G__8757 = args8755.length;
switch (G__8757) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8755.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e8758){if((e8758 instanceof Error)){
var _ = e8758;
return not_found;
} else {
throw e8758;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args8763 = [];
var len__5881__auto___8766 = arguments.length;
var i__5882__auto___8767 = (0);
while(true){
if((i__5882__auto___8767 < len__5881__auto___8766)){
args8763.push((arguments[i__5882__auto___8767]));

var G__8768 = (i__5882__auto___8767 + (1));
i__5882__auto___8767 = G__8768;
continue;
} else {
}
break;
}

var G__8765 = args8763.length;
switch (G__8765) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8763.length)].join('')));

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
var G__8778 = args;
var vec__8779 = G__8778;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8779,(0),null);
var args__$1 = cljs.core.nthnext(vec__8779,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8778__$1 = G__8778;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8780 = G__8778__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8780,(0),null);
var args__$2 = cljs.core.nthnext(vec__8780,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__8781 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__8778__$1,attr__$2,kids__$2,vec__8780,arg__$1,args__$2,attr,kids,G__8778,vec__8779,arg,args__$1){
return (function (p1__8770_SHARP_,p2__8771_SHARP_,p3__8772_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__8770_SHARP_,p2__8771_SHARP_,p3__8772_SHARP_);
});})(attr__$1,kids__$1,G__8778__$1,attr__$2,kids__$2,vec__8780,arg__$1,args__$2,attr,kids,G__8778,vec__8779,arg,args__$1))
,attr__$2,arg__$1);
var G__8782 = kids__$2;
var G__8783 = args__$2;
attr__$1 = G__8781;
kids__$1 = G__8782;
G__8778__$1 = G__8783;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8784 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__8785 = kids__$2;
var G__8786 = cljs.core.rest(args__$2);
attr__$1 = G__8784;
kids__$1 = G__8785;
G__8778__$1 = G__8786;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__8787 = attr__$2;
var G__8788 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8789 = args__$2;
attr__$1 = G__8787;
kids__$1 = G__8788;
G__8778__$1 = G__8789;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__8790 = attr__$2;
var G__8791 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__8792 = args__$2;
attr__$1 = G__8790;
kids__$1 = G__8791;
G__8778__$1 = G__8792;
continue;
} else {
var G__8793 = attr__$2;
var G__8794 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__8795 = args__$2;
attr__$1 = G__8793;
kids__$1 = G__8794;
G__8778__$1 = G__8795;
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
var G__8811_8816 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__8813_8818 = this$__$2;
var G__8814_8819 = k;
var G__8815_8820 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__8813_8818,G__8814_8819,G__8815_8820) : tailrecursion.hoplon.do_BANG_.call(null,G__8813_8818,G__8814_8819,G__8815_8820));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__8797_SHARP_,p2__8798_SHARP_,p3__8799_SHARP_,p4__8796_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__8796_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__8796_SHARP_));
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
var G__8812_8817 = (0);
setTimeout(G__8811_8816,G__8812_8817);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__8821_SHARP_,p2__8822_SHARP_){
return p1__8821_SHARP_.appendChild(p2__8822_SHARP_);
}):(function (p1__8823_SHARP_,p2__8824_SHARP_){
try{return p1__8823_SHARP_.appendChild(p2__8824_SHARP_);
}catch (e8825){if((e8825 instanceof Error)){
var _ = e8825;
return null;
} else {
throw e8825;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__8828 = this$;
var G__8829 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__8828,G__8829) : tailrecursion.hoplon.add_children_BANG_.call(null,G__8828,G__8829));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__8835){
var vec__8841 = p__8835;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8841,(0),null);
var _ = cljs.core.nthnext(vec__8841,(1));
var kids = vec__8841;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__8841,child_cell,_,kids){
return (function (p1__8831_SHARP_,p2__8832_SHARP_,p3__8833_SHARP_,p4__8830_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__8830_SHARP_);
});})(vec__8841,child_cell,_,kids))
);
} else {
var node_8846 = ((function (vec__8841,child_cell,_,kids){
return (function (p1__8834_SHARP_){
if(typeof p1__8834_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__8834_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__8834_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__8834_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__8834_SHARP_)))){
return p1__8834_SHARP_;
} else {
return null;
}
}
});})(vec__8841,child_cell,_,kids))
;
var seq__8842_8847 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__8843_8848 = null;
var count__8844_8849 = (0);
var i__8845_8850 = (0);
while(true){
if((i__8845_8850 < count__8844_8849)){
var x_8851 = chunk__8843_8848.cljs$core$IIndexed$_nth$arity$2(null,i__8845_8850);
var temp__4425__auto___8852 = node_8846(x_8851);
if(cljs.core.truth_(temp__4425__auto___8852)){
var x_8853__$1 = temp__4425__auto___8852;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_8853__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_8853__$1));
} else {
}

var G__8854 = seq__8842_8847;
var G__8855 = chunk__8843_8848;
var G__8856 = count__8844_8849;
var G__8857 = (i__8845_8850 + (1));
seq__8842_8847 = G__8854;
chunk__8843_8848 = G__8855;
count__8844_8849 = G__8856;
i__8845_8850 = G__8857;
continue;
} else {
var temp__4425__auto___8858 = cljs.core.seq(seq__8842_8847);
if(temp__4425__auto___8858){
var seq__8842_8859__$1 = temp__4425__auto___8858;
if(cljs.core.chunked_seq_QMARK_(seq__8842_8859__$1)){
var c__5626__auto___8860 = cljs.core.chunk_first(seq__8842_8859__$1);
var G__8861 = cljs.core.chunk_rest(seq__8842_8859__$1);
var G__8862 = c__5626__auto___8860;
var G__8863 = cljs.core.count(c__5626__auto___8860);
var G__8864 = (0);
seq__8842_8847 = G__8861;
chunk__8843_8848 = G__8862;
count__8844_8849 = G__8863;
i__8845_8850 = G__8864;
continue;
} else {
var x_8865 = cljs.core.first(seq__8842_8859__$1);
var temp__4425__auto___8866__$1 = node_8846(x_8865);
if(cljs.core.truth_(temp__4425__auto___8866__$1)){
var x_8867__$1 = temp__4425__auto___8866__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_8867__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_8867__$1));
} else {
}

var G__8868 = cljs.core.next(seq__8842_8859__$1);
var G__8869 = null;
var G__8870 = (0);
var G__8871 = (0);
seq__8842_8847 = G__8868;
chunk__8843_8848 = G__8869;
count__8844_8849 = G__8870;
i__8845_8850 = G__8871;
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
var G__8879__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8873 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8874 = this$;
G__8874.hoplonIFn(attr,kids);

return G__8874;
} else {
var G__8875 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__8875,attr);

tailrecursion.hoplon.add_children_BANG_(G__8875,kids);

return G__8875;
}
};
var G__8879 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8880__i = 0, G__8880__a = new Array(arguments.length -  1);
while (G__8880__i < G__8880__a.length) {G__8880__a[G__8880__i] = arguments[G__8880__i + 1]; ++G__8880__i;}
  args = new cljs.core.IndexedSeq(G__8880__a,0);
} 
return G__8879__delegate.call(this,self__,args);};
G__8879.cljs$lang$maxFixedArity = 1;
G__8879.cljs$lang$applyTo = (function (arglist__8881){
var self__ = cljs.core.first(arglist__8881);
var args = cljs.core.rest(arglist__8881);
return G__8879__delegate(self__,args);
});
G__8879.cljs$core$IFn$_invoke$arity$variadic = G__8879__delegate;
return G__8879;
})()
;

Element.prototype.apply = (function (self__,args8872){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8872)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8882__delegate = function (args){
var this$ = this;
var vec__8876 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8876,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8877 = this$;
G__8877.hoplonIFn(attr,kids);

return G__8877;
} else {
var G__8878 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__8878,attr);

tailrecursion.hoplon.add_children_BANG_(G__8878,kids);

return G__8878;
}
};
var G__8882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8883__i = 0, G__8883__a = new Array(arguments.length -  0);
while (G__8883__i < G__8883__a.length) {G__8883__a[G__8883__i] = arguments[G__8883__i + 0]; ++G__8883__i;}
  args = new cljs.core.IndexedSeq(G__8883__a,0);
} 
return G__8882__delegate.call(this,args);};
G__8882.cljs$lang$maxFixedArity = 0;
G__8882.cljs$lang$applyTo = (function (arglist__8884){
var args = cljs.core.seq(arglist__8884);
return G__8882__delegate(args);
});
G__8882.cljs$core$IFn$_invoke$arity$variadic = G__8882__delegate;
return G__8882;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__8895__delegate = function (args){
var vec__8890 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__8891 = cljs.core.seq(kids);
var chunk__8892 = null;
var count__8893 = (0);
var i__8894 = (0);
while(true){
if((i__8894 < count__8893)){
var k = chunk__8892.cljs$core$IIndexed$_nth$arity$2(null,i__8894);
elem.appendChild(k);

var G__8896 = seq__8891;
var G__8897 = chunk__8892;
var G__8898 = count__8893;
var G__8899 = (i__8894 + (1));
seq__8891 = G__8896;
chunk__8892 = G__8897;
count__8893 = G__8898;
i__8894 = G__8899;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8891);
if(temp__4425__auto__){
var seq__8891__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8891__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8891__$1);
var G__8900 = cljs.core.chunk_rest(seq__8891__$1);
var G__8901 = c__5626__auto__;
var G__8902 = cljs.core.count(c__5626__auto__);
var G__8903 = (0);
seq__8891 = G__8900;
chunk__8892 = G__8901;
count__8893 = G__8902;
i__8894 = G__8903;
continue;
} else {
var k = cljs.core.first(seq__8891__$1);
elem.appendChild(k);

var G__8904 = cljs.core.next(seq__8891__$1);
var G__8905 = null;
var G__8906 = (0);
var G__8907 = (0);
seq__8891 = G__8904;
chunk__8892 = G__8905;
count__8893 = G__8906;
i__8894 = G__8907;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__8895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8908__i = 0, G__8908__a = new Array(arguments.length -  0);
while (G__8908__i < G__8908__a.length) {G__8908__a[G__8908__i] = arguments[G__8908__i + 0]; ++G__8908__i;}
  args = new cljs.core.IndexedSeq(G__8908__a,0);
} 
return G__8895__delegate.call(this,args);};
G__8895.cljs$lang$maxFixedArity = 0;
G__8895.cljs$lang$applyTo = (function (arglist__8909){
var args = cljs.core.seq(arglist__8909);
return G__8895__delegate(args);
});
G__8895.cljs$core$IFn$_invoke$arity$variadic = G__8895__delegate;
return G__8895;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__8910__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__8910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8911__i = 0, G__8911__a = new Array(arguments.length -  0);
while (G__8911__i < G__8911__a.length) {G__8911__a[G__8911__i] = arguments[G__8911__i + 0]; ++G__8911__i;}
  args = new cljs.core.IndexedSeq(G__8911__a,0);
} 
return G__8910__delegate.call(this,args);};
G__8910.cljs$lang$maxFixedArity = 0;
G__8910.cljs$lang$applyTo = (function (arglist__8912){
var args = cljs.core.seq(arglist__8912);
return G__8910__delegate(args);
});
G__8910.cljs$core$IFn$_invoke$arity$variadic = G__8910__delegate;
return G__8910;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__5888__auto__ = [];
var len__5881__auto___8915 = arguments.length;
var i__5882__auto___8916 = (0);
while(true){
if((i__5882__auto___8916 < len__5881__auto___8915)){
args__5888__auto__.push((arguments[i__5882__auto___8916]));

var G__8917 = (i__5882__auto___8916 + (1));
i__5882__auto___8916 = G__8917;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8914 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8914,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq8913){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8913));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__8918_SHARP_){
return document.createTextNode(p1__8918_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__8919_SHARP_){
return document.createComment(p1__8919_SHARP_);
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
return jQuery("body").on("submit",(function (p1__8920_SHARP_){
var e = (function (){var G__8921 = p1__8920_SHARP_.target;
return jQuery(G__8921);
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
return p1__8920_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args8922 = [];
var len__5881__auto___8925 = arguments.length;
var i__5882__auto___8926 = (0);
while(true){
if((i__5882__auto___8926 < len__5881__auto___8925)){
args8922.push((arguments[i__5882__auto___8926]));

var G__8927 = (i__5882__auto___8926 + (1));
i__5882__auto___8926 = G__8927;
continue;
} else {
}
break;
}

var G__8924 = args8922.length;
switch (G__8924) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8922.length)].join('')));

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
var args8929 = [];
var len__5881__auto___8932 = arguments.length;
var i__5882__auto___8933 = (0);
while(true){
if((i__5882__auto___8933 < len__5881__auto___8932)){
args8929.push((arguments[i__5882__auto___8933]));

var G__8934 = (i__5882__auto___8933 + (1));
i__5882__auto___8933 = G__8934;
continue;
} else {
}
break;
}

var G__8931 = args8929.length;
switch (G__8931) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8929.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__8936 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8936) : cljs.core.atom.call(null,G__8936));
})();
var prefer_table__5737__auto__ = (function (){var G__8937 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8937) : cljs.core.atom.call(null,G__8937));
})();
var method_cache__5738__auto__ = (function (){var G__8938 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8938) : cljs.core.atom.call(null,G__8938));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__8939 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8939) : cljs.core.atom.call(null,G__8939));
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
var G__8940 = elem;
var G__8941 = cljs.core.cst$kw$attr;
var G__8942 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__8940,G__8941,G__8942) : tailrecursion.hoplon.do_BANG_.call(null,G__8940,G__8941,G__8942));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__8943__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__8943 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8944__i = 0, G__8944__a = new Array(arguments.length -  2);
while (G__8944__i < G__8944__a.length) {G__8944__a[G__8944__i] = arguments[G__8944__i + 2]; ++G__8944__i;}
  args = new cljs.core.IndexedSeq(G__8944__a,0);
} 
return G__8943__delegate.call(this,elem,_,args);};
G__8943.cljs$lang$maxFixedArity = 2;
G__8943.cljs$lang$applyTo = (function (arglist__8945){
var elem = cljs.core.first(arglist__8945);
arglist__8945 = cljs.core.next(arglist__8945);
var _ = cljs.core.first(arglist__8945);
var args = cljs.core.rest(arglist__8945);
return G__8943__delegate(elem,_,args);
});
G__8943.cljs$core$IFn$_invoke$arity$variadic = G__8943__delegate;
return G__8943;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8946 = cljs.core.seq(kvs);
var chunk__8947 = null;
var count__8948 = (0);
var i__8949 = (0);
while(true){
if((i__8949 < count__8948)){
var vec__8950 = chunk__8947.cljs$core$IIndexed$_nth$arity$2(null,i__8949);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8950,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8950,(1),null);
var k_8952__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8952__$1);
} else {
e.attr(k_8952__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8952__$1:v));
}

var G__8953 = seq__8946;
var G__8954 = chunk__8947;
var G__8955 = count__8948;
var G__8956 = (i__8949 + (1));
seq__8946 = G__8953;
chunk__8947 = G__8954;
count__8948 = G__8955;
i__8949 = G__8956;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8946);
if(temp__4425__auto__){
var seq__8946__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8946__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8946__$1);
var G__8957 = cljs.core.chunk_rest(seq__8946__$1);
var G__8958 = c__5626__auto__;
var G__8959 = cljs.core.count(c__5626__auto__);
var G__8960 = (0);
seq__8946 = G__8957;
chunk__8947 = G__8958;
count__8948 = G__8959;
i__8949 = G__8960;
continue;
} else {
var vec__8951 = cljs.core.first(seq__8946__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8951,(1),null);
var k_8961__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_8961__$1);
} else {
e.attr(k_8961__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_8961__$1:v));
}

var G__8962 = cljs.core.next(seq__8946__$1);
var G__8963 = null;
var G__8964 = (0);
var G__8965 = (0);
seq__8946 = G__8962;
chunk__8947 = G__8963;
count__8948 = G__8964;
i__8949 = G__8965;
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
return (function (p1__8966_SHARP_){
return cljs.core.zipmap(p1__8966_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__8967 = cljs.core.seq(clmap);
var chunk__8968 = null;
var count__8969 = (0);
var i__8970 = (0);
while(true){
if((i__8970 < count__8969)){
var vec__8971 = chunk__8968.cljs$core$IIndexed$_nth$arity$2(null,i__8970);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8971,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8971,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8973 = seq__8967;
var G__8974 = chunk__8968;
var G__8975 = count__8969;
var G__8976 = (i__8970 + (1));
seq__8967 = G__8973;
chunk__8968 = G__8974;
count__8969 = G__8975;
i__8970 = G__8976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8967);
if(temp__4425__auto__){
var seq__8967__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8967__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8967__$1);
var G__8977 = cljs.core.chunk_rest(seq__8967__$1);
var G__8978 = c__5626__auto__;
var G__8979 = cljs.core.count(c__5626__auto__);
var G__8980 = (0);
seq__8967 = G__8977;
chunk__8968 = G__8978;
count__8969 = G__8979;
i__8970 = G__8980;
continue;
} else {
var vec__8972 = cljs.core.first(seq__8967__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8972,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8972,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__8981 = cljs.core.next(seq__8967__$1);
var G__8982 = null;
var G__8983 = (0);
var G__8984 = (0);
seq__8967 = G__8981;
chunk__8968 = G__8982;
count__8969 = G__8983;
i__8970 = G__8984;
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
var seq__8985 = cljs.core.seq(kvs);
var chunk__8986 = null;
var count__8987 = (0);
var i__8988 = (0);
while(true){
if((i__8988 < count__8987)){
var vec__8989 = chunk__8986.cljs$core$IIndexed$_nth$arity$2(null,i__8988);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8989,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8991 = seq__8985;
var G__8992 = chunk__8986;
var G__8993 = count__8987;
var G__8994 = (i__8988 + (1));
seq__8985 = G__8991;
chunk__8986 = G__8992;
count__8987 = G__8993;
i__8988 = G__8994;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8985);
if(temp__4425__auto__){
var seq__8985__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8985__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__8985__$1);
var G__8995 = cljs.core.chunk_rest(seq__8985__$1);
var G__8996 = c__5626__auto__;
var G__8997 = cljs.core.count(c__5626__auto__);
var G__8998 = (0);
seq__8985 = G__8995;
chunk__8986 = G__8996;
count__8987 = G__8997;
i__8988 = G__8998;
continue;
} else {
var vec__8990 = cljs.core.first(seq__8985__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8990,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__8999 = cljs.core.next(seq__8985__$1);
var G__9000 = null;
var G__9001 = (0);
var G__9002 = (0);
seq__8985 = G__8999;
chunk__8986 = G__9000;
count__8987 = G__9001;
i__8988 = G__9002;
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
var G__9003 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__9004 = (0);
return setTimeout(G__9003,G__9004);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__9005 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9005) : cljs.core.atom.call(null,G__9005));
})();
var prefer_table__5737__auto__ = (function (){var G__9006 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9006) : cljs.core.atom.call(null,G__9006));
})();
var method_cache__5738__auto__ = (function (){var G__9007 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9007) : cljs.core.atom.call(null,G__9007));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__9008 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9008) : cljs.core.atom.call(null,G__9008));
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
return (function (){var G__9009 = this$__$1.target;
return jQuery(G__9009);
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
var G__9012_9014 = init;
var G__9013_9015 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9012_9014,G__9013_9015) : f.call(null,G__9012_9014,G__9013_9015));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__9032 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9032) : cljs.core.atom.call(null,G__9032));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__9033,G__9034){
return (G__9033.cljs$core$IFn$_invoke$arity$1 ? G__9033.cljs$core$IFn$_invoke$arity$1(G__9034) : G__9033.call(null,G__9034));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__9036,G__9035){
return (G__9035.cljs$core$IFn$_invoke$arity$1 ? G__9035.cljs$core$IFn$_invoke$arity$1(G__9036) : G__9035.call(null,G__9036));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__9016_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__9039,G__9038,G__9037){
return (G__9037.cljs$core$IFn$_invoke$arity$2 ? G__9037.cljs$core$IFn$_invoke$arity$2(G__9038,G__9039) : G__9037.call(null,G__9038,G__9039));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__9016_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__9017_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__9017_SHARP_) : cljs.core.deref.call(null,p1__9017_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__9017_SHARP_,cljs.core.rest);

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
var seq__9040 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__9041 = null;
var count__9042 = (0);
var i__9043 = (0);
while(true){
if((i__9043 < count__9042)){
var i = chunk__9041.cljs$core$IIndexed$_nth$arity$2(null,i__9043);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__9044 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__9044) : tpl.call(null,G__9044));
}
})());

var G__9046 = seq__9040;
var G__9047 = chunk__9041;
var G__9048 = count__9042;
var G__9049 = (i__9043 + (1));
seq__9040 = G__9046;
chunk__9041 = G__9047;
count__9042 = G__9048;
i__9043 = G__9049;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9040);
if(temp__4425__auto__){
var seq__9040__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9040__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__9040__$1);
var G__9050 = cljs.core.chunk_rest(seq__9040__$1);
var G__9051 = c__5626__auto__;
var G__9052 = cljs.core.count(c__5626__auto__);
var G__9053 = (0);
seq__9040 = G__9050;
chunk__9041 = G__9051;
count__9042 = G__9052;
i__9043 = G__9053;
continue;
} else {
var i = cljs.core.first(seq__9040__$1);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__9045 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__9045) : tpl.call(null,G__9045));
}
})());

var G__9054 = cljs.core.next(seq__9040__$1);
var G__9055 = null;
var G__9056 = (0);
var G__9057 = (0);
seq__9040 = G__9054;
chunk__9041 = G__9055;
count__9042 = G__9056;
i__9043 = G__9057;
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

var G__9058 = (___$1 + (1));
___$1 = G__9058;
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
var len__5881__auto___9067 = arguments.length;
var i__5882__auto___9068 = (0);
while(true){
if((i__5882__auto___9068 < len__5881__auto___9067)){
args__5888__auto__.push((arguments[i__5882__auto___9068]));

var G__9069 = (i__5882__auto___9068 + (1));
i__5882__auto___9068 = G__9069;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9060){
var vec__9061 = p__9060;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9061,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__9061,default$){
return (function (G__9062,G__9064,G__9063){
var or__4842__auto__ = (function (){var and__4830__auto__ = (G__9062.cljs$core$IFn$_invoke$arity$1 ? G__9062.cljs$core$IFn$_invoke$arity$1(G__9063) : G__9062.call(null,G__9063));
if(cljs.core.truth_(and__4830__auto__)){
return G__9063;
} else {
return and__4830__auto__;
}
})();
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__9064;
}
});})(c,vec__9061,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__9061,default$){
return (function (){
var G__9065 = c;
var G__9066 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9065,G__9066) : cljs.core.reset_BANG_.call(null,G__9065,G__9066));
});})(_,c,vec__9061,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq9059){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9059));
});
