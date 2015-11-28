// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__14699_SHARP_){
return (p1__14699_SHARP_ instanceof Node);
}):(function (p1__14700_SHARP_){
try{return p1__14700_SHARP_.nodeType;
}catch (e14701){if((e14701 instanceof Error)){
var _ = e14701;
return null;
} else {
throw e14701;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14702_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__14702_SHARP_);
}catch (e14703){if((e14703 instanceof Error)){
var _ = e14703;
return null;
} else {
throw e14703;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14704_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__14704_SHARP_);
}catch (e14705){if((e14705 instanceof Error)){
var _ = e14705;
return null;
} else {
throw e14705;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__14706_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__14706_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args14707 = [];
var len__6061__auto___14711 = arguments.length;
var i__6062__auto___14712 = (0);
while(true){
if((i__6062__auto___14712 < len__6061__auto___14711)){
args14707.push((arguments[i__6062__auto___14712]));

var G__14713 = (i__6062__auto___14712 + (1));
i__6062__auto___14712 = G__14713;
continue;
} else {
}
break;
}

var G__14709 = args14707.length;
switch (G__14709) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14707.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e14710){if((e14710 instanceof Error)){
var _ = e14710;
return not_found;
} else {
throw e14710;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args14715 = [];
var len__6061__auto___14718 = arguments.length;
var i__6062__auto___14719 = (0);
while(true){
if((i__6062__auto___14719 < len__6061__auto___14718)){
args14715.push((arguments[i__6062__auto___14719]));

var G__14720 = (i__6062__auto___14719 + (1));
i__6062__auto___14719 = G__14720;
continue;
} else {
}
break;
}

var G__14717 = args14715.length;
switch (G__14717) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14715.length)].join('')));

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
var G__14730 = args;
var vec__14731 = G__14730;
var arg = cljs.core.nth.call(null,vec__14731,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__14731,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__14730__$1 = G__14730;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14732 = G__14730__$1;
var arg__$1 = cljs.core.nth.call(null,vec__14732,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__14732,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__14733 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__14730__$1,attr__$2,kids__$2,vec__14732,arg__$1,args__$2,attr,kids,G__14730,vec__14731,arg,args__$1){
return (function (p1__14722_SHARP_,p2__14723_SHARP_,p3__14724_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__14722_SHARP_,p2__14723_SHARP_,p3__14724_SHARP_);
});})(attr__$1,kids__$1,G__14730__$1,attr__$2,kids__$2,vec__14732,arg__$1,args__$2,attr,kids,G__14730,vec__14731,arg,args__$1))
,attr__$2,arg__$1);
var G__14734 = kids__$2;
var G__14735 = args__$2;
attr__$1 = G__14733;
kids__$1 = G__14734;
G__14730__$1 = G__14735;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__14736 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__14737 = kids__$2;
var G__14738 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__14736;
kids__$1 = G__14737;
G__14730__$1 = G__14738;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__14739 = attr__$2;
var G__14740 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__14741 = args__$2;
attr__$1 = G__14739;
kids__$1 = G__14740;
G__14730__$1 = G__14741;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__14742 = attr__$2;
var G__14743 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__14744 = args__$2;
attr__$1 = G__14742;
kids__$1 = G__14743;
G__14730__$1 = G__14744;
continue;
} else {
var G__14745 = attr__$2;
var G__14746 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__14747 = args__$2;
attr__$1 = G__14745;
kids__$1 = G__14746;
G__14730__$1 = G__14747;
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
return (function (p1__14749_SHARP_,p2__14750_SHARP_,p3__14751_SHARP_,p4__14748_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__14748_SHARP_);
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__14752_SHARP_,p2__14753_SHARP_){
return p1__14752_SHARP_.appendChild(p2__14753_SHARP_);
}):(function (p1__14754_SHARP_,p2__14755_SHARP_){
try{return p1__14754_SHARP_.appendChild(p2__14755_SHARP_);
}catch (e14756){if((e14756 instanceof Error)){
var _ = e14756;
return null;
} else {
throw e14756;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__14762){
var vec__14768 = p__14762;
var child_cell = cljs.core.nth.call(null,vec__14768,(0),null);
var _ = cljs.core.nthnext.call(null,vec__14768,(1));
var kids = vec__14768;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__14768,child_cell,_,kids){
return (function (p1__14758_SHARP_,p2__14759_SHARP_,p3__14760_SHARP_,p4__14757_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__14757_SHARP_);
});})(vec__14768,child_cell,_,kids))
);
} else {
var node_14773 = ((function (vec__14768,child_cell,_,kids){
return (function (p1__14761_SHARP_){
if(typeof p1__14761_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__14761_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__14761_SHARP_))){
return p1__14761_SHARP_;
} else {
return null;
}
}
});})(vec__14768,child_cell,_,kids))
;
var seq__14769_14774 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__14770_14775 = null;
var count__14771_14776 = (0);
var i__14772_14777 = (0);
while(true){
if((i__14772_14777 < count__14771_14776)){
var x_14778 = cljs.core._nth.call(null,chunk__14770_14775,i__14772_14777);
var temp__4425__auto___14779 = node_14773.call(null,x_14778);
if(cljs.core.truth_(temp__4425__auto___14779)){
var x_14780__$1 = temp__4425__auto___14779;
tailrecursion.hoplon.append_child.call(null,this$,x_14780__$1);
} else {
}

var G__14781 = seq__14769_14774;
var G__14782 = chunk__14770_14775;
var G__14783 = count__14771_14776;
var G__14784 = (i__14772_14777 + (1));
seq__14769_14774 = G__14781;
chunk__14770_14775 = G__14782;
count__14771_14776 = G__14783;
i__14772_14777 = G__14784;
continue;
} else {
var temp__4425__auto___14785 = cljs.core.seq.call(null,seq__14769_14774);
if(temp__4425__auto___14785){
var seq__14769_14786__$1 = temp__4425__auto___14785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14769_14786__$1)){
var c__5806__auto___14787 = cljs.core.chunk_first.call(null,seq__14769_14786__$1);
var G__14788 = cljs.core.chunk_rest.call(null,seq__14769_14786__$1);
var G__14789 = c__5806__auto___14787;
var G__14790 = cljs.core.count.call(null,c__5806__auto___14787);
var G__14791 = (0);
seq__14769_14774 = G__14788;
chunk__14770_14775 = G__14789;
count__14771_14776 = G__14790;
i__14772_14777 = G__14791;
continue;
} else {
var x_14792 = cljs.core.first.call(null,seq__14769_14786__$1);
var temp__4425__auto___14793__$1 = node_14773.call(null,x_14792);
if(cljs.core.truth_(temp__4425__auto___14793__$1)){
var x_14794__$1 = temp__4425__auto___14793__$1;
tailrecursion.hoplon.append_child.call(null,this$,x_14794__$1);
} else {
}

var G__14795 = cljs.core.next.call(null,seq__14769_14786__$1);
var G__14796 = null;
var G__14797 = (0);
var G__14798 = (0);
seq__14769_14774 = G__14795;
chunk__14770_14775 = G__14796;
count__14771_14776 = G__14797;
i__14772_14777 = G__14798;
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
var G__14806__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14800 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__14800,(0),null);
var kids = cljs.core.nth.call(null,vec__14800,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__14801 = this$;
G__14801.hoplonIFn(attr,kids);

return G__14801;
} else {
var G__14802 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14802,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__14802,kids);

return G__14802;
}
};
var G__14806 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14807__i = 0, G__14807__a = new Array(arguments.length -  1);
while (G__14807__i < G__14807__a.length) {G__14807__a[G__14807__i] = arguments[G__14807__i + 1]; ++G__14807__i;}
  args = new cljs.core.IndexedSeq(G__14807__a,0);
} 
return G__14806__delegate.call(this,self__,args);};
G__14806.cljs$lang$maxFixedArity = 1;
G__14806.cljs$lang$applyTo = (function (arglist__14808){
var self__ = cljs.core.first(arglist__14808);
var args = cljs.core.rest(arglist__14808);
return G__14806__delegate(self__,args);
});
G__14806.cljs$core$IFn$_invoke$arity$variadic = G__14806__delegate;
return G__14806;
})()
;

Element.prototype.apply = (function (self__,args14799){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14799)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14809__delegate = function (args){
var this$ = this;
var vec__14803 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__14803,(0),null);
var kids = cljs.core.nth.call(null,vec__14803,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__14804 = this$;
G__14804.hoplonIFn(attr,kids);

return G__14804;
} else {
var G__14805 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__14805,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__14805,kids);

return G__14805;
}
};
var G__14809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14810__i = 0, G__14810__a = new Array(arguments.length -  0);
while (G__14810__i < G__14810__a.length) {G__14810__a[G__14810__i] = arguments[G__14810__i + 0]; ++G__14810__i;}
  args = new cljs.core.IndexedSeq(G__14810__a,0);
} 
return G__14809__delegate.call(this,args);};
G__14809.cljs$lang$maxFixedArity = 0;
G__14809.cljs$lang$applyTo = (function (arglist__14811){
var args = cljs.core.seq(arglist__14811);
return G__14809__delegate(args);
});
G__14809.cljs$core$IFn$_invoke$arity$variadic = G__14809__delegate;
return G__14809;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__14822__delegate = function (args){
var vec__14817 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__14817,(0),null);
var kids = cljs.core.nth.call(null,vec__14817,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__14818 = cljs.core.seq.call(null,kids);
var chunk__14819 = null;
var count__14820 = (0);
var i__14821 = (0);
while(true){
if((i__14821 < count__14820)){
var k = cljs.core._nth.call(null,chunk__14819,i__14821);
elem.appendChild(k);

var G__14823 = seq__14818;
var G__14824 = chunk__14819;
var G__14825 = count__14820;
var G__14826 = (i__14821 + (1));
seq__14818 = G__14823;
chunk__14819 = G__14824;
count__14820 = G__14825;
i__14821 = G__14826;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14818);
if(temp__4425__auto__){
var seq__14818__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14818__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14818__$1);
var G__14827 = cljs.core.chunk_rest.call(null,seq__14818__$1);
var G__14828 = c__5806__auto__;
var G__14829 = cljs.core.count.call(null,c__5806__auto__);
var G__14830 = (0);
seq__14818 = G__14827;
chunk__14819 = G__14828;
count__14820 = G__14829;
i__14821 = G__14830;
continue;
} else {
var k = cljs.core.first.call(null,seq__14818__$1);
elem.appendChild(k);

var G__14831 = cljs.core.next.call(null,seq__14818__$1);
var G__14832 = null;
var G__14833 = (0);
var G__14834 = (0);
seq__14818 = G__14831;
chunk__14819 = G__14832;
count__14820 = G__14833;
i__14821 = G__14834;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__14822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14835__i = 0, G__14835__a = new Array(arguments.length -  0);
while (G__14835__i < G__14835__a.length) {G__14835__a[G__14835__i] = arguments[G__14835__i + 0]; ++G__14835__i;}
  args = new cljs.core.IndexedSeq(G__14835__a,0);
} 
return G__14822__delegate.call(this,args);};
G__14822.cljs$lang$maxFixedArity = 0;
G__14822.cljs$lang$applyTo = (function (arglist__14836){
var args = cljs.core.seq(arglist__14836);
return G__14822__delegate(args);
});
G__14822.cljs$core$IFn$_invoke$arity$variadic = G__14822__delegate;
return G__14822;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__14837__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__14837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14838__i = 0, G__14838__a = new Array(arguments.length -  0);
while (G__14838__i < G__14838__a.length) {G__14838__a[G__14838__i] = arguments[G__14838__i + 0]; ++G__14838__i;}
  args = new cljs.core.IndexedSeq(G__14838__a,0);
} 
return G__14837__delegate.call(this,args);};
G__14837.cljs$lang$maxFixedArity = 0;
G__14837.cljs$lang$applyTo = (function (arglist__14839){
var args = cljs.core.seq(arglist__14839);
return G__14837__delegate(args);
});
G__14837.cljs$core$IFn$_invoke$arity$variadic = G__14837__delegate;
return G__14837;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___14842 = arguments.length;
var i__6062__auto___14843 = (0);
while(true){
if((i__6062__auto___14843 < len__6061__auto___14842)){
args__6068__auto__.push((arguments[i__6062__auto___14843]));

var G__14844 = (i__6062__auto___14843 + (1));
i__6062__auto___14843 = G__14844;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__14841 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__14841,(0),null);
var _ = cljs.core.nth.call(null,vec__14841,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq14840){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14840));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__14845_SHARP_){
return document.createTextNode(p1__14845_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__14846_SHARP_){
return document.createComment(p1__14846_SHARP_);
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
return jQuery("body").on("submit",(function (p1__14847_SHARP_){
var e = jQuery(p1__14847_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__14847_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args14848 = [];
var len__6061__auto___14851 = arguments.length;
var i__6062__auto___14852 = (0);
while(true){
if((i__6062__auto___14852 < len__6061__auto___14851)){
args14848.push((arguments[i__6062__auto___14852]));

var G__14853 = (i__6062__auto___14852 + (1));
i__6062__auto___14852 = G__14853;
continue;
} else {
}
break;
}

var G__14850 = args14848.length;
switch (G__14850) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14848.length)].join('')));

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
var args14855 = [];
var len__6061__auto___14858 = arguments.length;
var i__6062__auto___14859 = (0);
while(true){
if((i__6062__auto___14859 < len__6061__auto___14858)){
args14855.push((arguments[i__6062__auto___14859]));

var G__14860 = (i__6062__auto___14859 + (1));
i__6062__auto___14859 = G__14860;
continue;
} else {
}
break;
}

var G__14857 = args14855.length;
switch (G__14857) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14855.length)].join('')));

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
var G__14862__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__14862 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14863__i = 0, G__14863__a = new Array(arguments.length -  2);
while (G__14863__i < G__14863__a.length) {G__14863__a[G__14863__i] = arguments[G__14863__i + 2]; ++G__14863__i;}
  args = new cljs.core.IndexedSeq(G__14863__a,0);
} 
return G__14862__delegate.call(this,elem,_,args);};
G__14862.cljs$lang$maxFixedArity = 2;
G__14862.cljs$lang$applyTo = (function (arglist__14864){
var elem = cljs.core.first(arglist__14864);
arglist__14864 = cljs.core.next(arglist__14864);
var _ = cljs.core.first(arglist__14864);
var args = cljs.core.rest(arglist__14864);
return G__14862__delegate(elem,_,args);
});
G__14862.cljs$core$IFn$_invoke$arity$variadic = G__14862__delegate;
return G__14862;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__14865 = cljs.core.seq.call(null,kvs);
var chunk__14866 = null;
var count__14867 = (0);
var i__14868 = (0);
while(true){
if((i__14868 < count__14867)){
var vec__14869 = cljs.core._nth.call(null,chunk__14866,i__14868);
var k = cljs.core.nth.call(null,vec__14869,(0),null);
var v = cljs.core.nth.call(null,vec__14869,(1),null);
var k_14871__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14871__$1);
} else {
e.attr(k_14871__$1,((cljs.core._EQ_.call(null,true,v))?k_14871__$1:v));
}

var G__14872 = seq__14865;
var G__14873 = chunk__14866;
var G__14874 = count__14867;
var G__14875 = (i__14868 + (1));
seq__14865 = G__14872;
chunk__14866 = G__14873;
count__14867 = G__14874;
i__14868 = G__14875;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14865);
if(temp__4425__auto__){
var seq__14865__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14865__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14865__$1);
var G__14876 = cljs.core.chunk_rest.call(null,seq__14865__$1);
var G__14877 = c__5806__auto__;
var G__14878 = cljs.core.count.call(null,c__5806__auto__);
var G__14879 = (0);
seq__14865 = G__14876;
chunk__14866 = G__14877;
count__14867 = G__14878;
i__14868 = G__14879;
continue;
} else {
var vec__14870 = cljs.core.first.call(null,seq__14865__$1);
var k = cljs.core.nth.call(null,vec__14870,(0),null);
var v = cljs.core.nth.call(null,vec__14870,(1),null);
var k_14880__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_14880__$1);
} else {
e.attr(k_14880__$1,((cljs.core._EQ_.call(null,true,v))?k_14880__$1:v));
}

var G__14881 = cljs.core.next.call(null,seq__14865__$1);
var G__14882 = null;
var G__14883 = (0);
var G__14884 = (0);
seq__14865 = G__14881;
chunk__14866 = G__14882;
count__14867 = G__14883;
i__14868 = G__14884;
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
return (function (p1__14885_SHARP_){
return cljs.core.zipmap.call(null,p1__14885_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__14886 = cljs.core.seq.call(null,clmap);
var chunk__14887 = null;
var count__14888 = (0);
var i__14889 = (0);
while(true){
if((i__14889 < count__14888)){
var vec__14890 = cljs.core._nth.call(null,chunk__14887,i__14889);
var c = cljs.core.nth.call(null,vec__14890,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__14890,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__14892 = seq__14886;
var G__14893 = chunk__14887;
var G__14894 = count__14888;
var G__14895 = (i__14889 + (1));
seq__14886 = G__14892;
chunk__14887 = G__14893;
count__14888 = G__14894;
i__14889 = G__14895;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14886);
if(temp__4425__auto__){
var seq__14886__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14886__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14886__$1);
var G__14896 = cljs.core.chunk_rest.call(null,seq__14886__$1);
var G__14897 = c__5806__auto__;
var G__14898 = cljs.core.count.call(null,c__5806__auto__);
var G__14899 = (0);
seq__14886 = G__14896;
chunk__14887 = G__14897;
count__14888 = G__14898;
i__14889 = G__14899;
continue;
} else {
var vec__14891 = cljs.core.first.call(null,seq__14886__$1);
var c = cljs.core.nth.call(null,vec__14891,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__14891,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__14900 = cljs.core.next.call(null,seq__14886__$1);
var G__14901 = null;
var G__14902 = (0);
var G__14903 = (0);
seq__14886 = G__14900;
chunk__14887 = G__14901;
count__14888 = G__14902;
i__14889 = G__14903;
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
var seq__14904 = cljs.core.seq.call(null,kvs);
var chunk__14905 = null;
var count__14906 = (0);
var i__14907 = (0);
while(true){
if((i__14907 < count__14906)){
var vec__14908 = cljs.core._nth.call(null,chunk__14905,i__14907);
var k = cljs.core.nth.call(null,vec__14908,(0),null);
var v = cljs.core.nth.call(null,vec__14908,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__14910 = seq__14904;
var G__14911 = chunk__14905;
var G__14912 = count__14906;
var G__14913 = (i__14907 + (1));
seq__14904 = G__14910;
chunk__14905 = G__14911;
count__14906 = G__14912;
i__14907 = G__14913;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14904);
if(temp__4425__auto__){
var seq__14904__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14904__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14904__$1);
var G__14914 = cljs.core.chunk_rest.call(null,seq__14904__$1);
var G__14915 = c__5806__auto__;
var G__14916 = cljs.core.count.call(null,c__5806__auto__);
var G__14917 = (0);
seq__14904 = G__14914;
chunk__14905 = G__14915;
count__14906 = G__14916;
i__14907 = G__14917;
continue;
} else {
var vec__14909 = cljs.core.first.call(null,seq__14904__$1);
var k = cljs.core.nth.call(null,vec__14909,(0),null);
var v = cljs.core.nth.call(null,vec__14909,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__14918 = cljs.core.next.call(null,seq__14904__$1);
var G__14919 = null;
var G__14920 = (0);
var G__14921 = (0);
seq__14904 = G__14918;
chunk__14905 = G__14919;
count__14906 = G__14920;
i__14907 = G__14921;
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
return (function (G__14935,G__14936){
return G__14935.call(null,G__14936);
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq){
return (function (G__14938,G__14937){
return G__14937.call(null,G__14938);
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__14922_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__14941,G__14940,G__14939){
return G__14939.call(null,G__14940,G__14941);
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__14922_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__14923_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__14923_SHARP_));
cljs.core.swap_BANG_.call(null,p1__14923_SHARP_,cljs.core.rest);

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
var seq__14942 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__14943 = null;
var count__14944 = (0);
var i__14945 = (0);
while(true){
if((i__14945 < count__14944)){
var i = cljs.core._nth.call(null,chunk__14943,i__14945);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__14946 = seq__14942;
var G__14947 = chunk__14943;
var G__14948 = count__14944;
var G__14949 = (i__14945 + (1));
seq__14942 = G__14946;
chunk__14943 = G__14947;
count__14944 = G__14948;
i__14945 = G__14949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14942);
if(temp__4425__auto__){
var seq__14942__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14942__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__14942__$1);
var G__14950 = cljs.core.chunk_rest.call(null,seq__14942__$1);
var G__14951 = c__5806__auto__;
var G__14952 = cljs.core.count.call(null,c__5806__auto__);
var G__14953 = (0);
seq__14942 = G__14950;
chunk__14943 = G__14951;
count__14944 = G__14952;
i__14945 = G__14953;
continue;
} else {
var i = cljs.core.first.call(null,seq__14942__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__14954 = cljs.core.next.call(null,seq__14942__$1);
var G__14955 = null;
var G__14956 = (0);
var G__14957 = (0);
seq__14942 = G__14954;
chunk__14943 = G__14955;
count__14944 = G__14956;
i__14945 = G__14957;
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

var G__14958 = (___$1 + (1));
___$1 = G__14958;
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
var len__6061__auto___14965 = arguments.length;
var i__6062__auto___14966 = (0);
while(true){
if((i__6062__auto___14966 < len__6061__auto___14965)){
args__6068__auto__.push((arguments[i__6062__auto___14966]));

var G__14967 = (i__6062__auto___14966 + (1));
i__6062__auto___14966 = G__14967;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14960){
var vec__14961 = p__14960;
var default$ = cljs.core.nth.call(null,vec__14961,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__14961,default$){
return (function (G__14962,G__14964,G__14963){
var or__5022__auto__ = (function (){var and__5010__auto__ = G__14962.call(null,G__14963);
if(cljs.core.truth_(and__5010__auto__)){
return G__14963;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__14964;
}
});})(c,vec__14961,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__14961,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__14961,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq14959){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14959));
});

//# sourceMappingURL=hoplon.js.map