// Compiled by ClojureScript 0.0-3308 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12785_SHARP_){
return (p1__12785_SHARP_ instanceof Node);
}):(function (p1__12786_SHARP_){
try{return p1__12786_SHARP_.nodeType;
}catch (e12787){if((e12787 instanceof Error)){
var _ = e12787;
return null;
} else {
throw e12787;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12788_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__12788_SHARP_);
}catch (e12789){if((e12789 instanceof Error)){
var _ = e12789;
return null;
} else {
throw e12789;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12790_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__12790_SHARP_);
}catch (e12791){if((e12791 instanceof Error)){
var _ = e12791;
return null;
} else {
throw e12791;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__12792_SHARP_){
if(cljs.core.truth_((function (){var and__4198__auto__ = console;
if(cljs.core.truth_(and__4198__auto__)){
return console.log;
} else {
return and__4198__auto__;
}
})())){
return console.log(p1__12792_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var G__12794 = arguments.length;
switch (G__12794) {
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
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e12795){if((e12795 instanceof Error)){
var _ = e12795;
return not_found;
} else {
throw e12795;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var G__12798 = arguments.length;
switch (G__12798) {
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
var G__12808 = args;
var vec__12809 = G__12808;
var arg = cljs.core.nth.call(null,vec__12809,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__12809,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__12808__$1 = G__12808;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__12810 = G__12808__$1;
var arg__$1 = cljs.core.nth.call(null,vec__12810,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__12810,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__12811 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__12808__$1,attr__$2,kids__$2,vec__12810,arg__$1,args__$2,attr,kids,G__12808,vec__12809,arg,args__$1){
return (function (p1__12800_SHARP_,p2__12801_SHARP_,p3__12802_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__12800_SHARP_,p2__12801_SHARP_,p3__12802_SHARP_);
});})(attr__$1,kids__$1,G__12808__$1,attr__$2,kids__$2,vec__12810,arg__$1,args__$2,attr,kids,G__12808,vec__12809,arg,args__$1))
,attr__$2,arg__$1);
var G__12812 = kids__$2;
var G__12813 = args__$2;
attr__$1 = G__12811;
kids__$1 = G__12812;
G__12808__$1 = G__12813;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__12814 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__12815 = kids__$2;
var G__12816 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__12814;
kids__$1 = G__12815;
G__12808__$1 = G__12816;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__12817 = attr__$2;
var G__12818 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__12819 = args__$2;
attr__$1 = G__12817;
kids__$1 = G__12818;
G__12808__$1 = G__12819;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__12820 = attr__$2;
var G__12821 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__12822 = args__$2;
attr__$1 = G__12820;
kids__$1 = G__12821;
G__12808__$1 = G__12822;
continue;
} else {
var G__12823 = attr__$2;
var G__12824 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__12825 = args__$2;
attr__$1 = G__12823;
kids__$1 = G__12824;
G__12808__$1 = G__12825;
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
return (function (p1__12827_SHARP_,p2__12828_SHARP_,p3__12829_SHARP_,p4__12826_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__12826_SHARP_);
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__12830_SHARP_,p2__12831_SHARP_){
return p1__12830_SHARP_.appendChild(p2__12831_SHARP_);
}):(function (p1__12832_SHARP_,p2__12833_SHARP_){
try{return p1__12832_SHARP_.appendChild(p2__12833_SHARP_);
}catch (e12834){if((e12834 instanceof Error)){
var _ = e12834;
return null;
} else {
throw e12834;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__12840){
var vec__12846 = p__12840;
var child_cell = cljs.core.nth.call(null,vec__12846,(0),null);
var _ = cljs.core.nthnext.call(null,vec__12846,(1));
var kids = vec__12846;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__12846,child_cell,_,kids){
return (function (p1__12836_SHARP_,p2__12837_SHARP_,p3__12838_SHARP_,p4__12835_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__12835_SHARP_);
});})(vec__12846,child_cell,_,kids))
);
} else {
var node_12851 = ((function (vec__12846,child_cell,_,kids){
return (function (p1__12839_SHARP_){
if(typeof p1__12839_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__12839_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__12839_SHARP_))){
return p1__12839_SHARP_;
} else {
return null;
}
}
});})(vec__12846,child_cell,_,kids))
;
var seq__12847_12852 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__12848_12853 = null;
var count__12849_12854 = (0);
var i__12850_12855 = (0);
while(true){
if((i__12850_12855 < count__12849_12854)){
var x_12856 = cljs.core._nth.call(null,chunk__12848_12853,i__12850_12855);
var temp__4425__auto___12857 = node_12851.call(null,x_12856);
if(cljs.core.truth_(temp__4425__auto___12857)){
var x_12858__$1 = temp__4425__auto___12857;
tailrecursion.hoplon.append_child.call(null,this$,x_12858__$1);
} else {
}

var G__12859 = seq__12847_12852;
var G__12860 = chunk__12848_12853;
var G__12861 = count__12849_12854;
var G__12862 = (i__12850_12855 + (1));
seq__12847_12852 = G__12859;
chunk__12848_12853 = G__12860;
count__12849_12854 = G__12861;
i__12850_12855 = G__12862;
continue;
} else {
var temp__4425__auto___12863 = cljs.core.seq.call(null,seq__12847_12852);
if(temp__4425__auto___12863){
var seq__12847_12864__$1 = temp__4425__auto___12863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12847_12864__$1)){
var c__4995__auto___12865 = cljs.core.chunk_first.call(null,seq__12847_12864__$1);
var G__12866 = cljs.core.chunk_rest.call(null,seq__12847_12864__$1);
var G__12867 = c__4995__auto___12865;
var G__12868 = cljs.core.count.call(null,c__4995__auto___12865);
var G__12869 = (0);
seq__12847_12852 = G__12866;
chunk__12848_12853 = G__12867;
count__12849_12854 = G__12868;
i__12850_12855 = G__12869;
continue;
} else {
var x_12870 = cljs.core.first.call(null,seq__12847_12864__$1);
var temp__4425__auto___12871__$1 = node_12851.call(null,x_12870);
if(cljs.core.truth_(temp__4425__auto___12871__$1)){
var x_12872__$1 = temp__4425__auto___12871__$1;
tailrecursion.hoplon.append_child.call(null,this$,x_12872__$1);
} else {
}

var G__12873 = cljs.core.next.call(null,seq__12847_12864__$1);
var G__12874 = null;
var G__12875 = (0);
var G__12876 = (0);
seq__12847_12852 = G__12873;
chunk__12848_12853 = G__12874;
count__12849_12854 = G__12875;
i__12850_12855 = G__12876;
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
var G__12884__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12878 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12878,(0),null);
var kids = cljs.core.nth.call(null,vec__12878,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12879 = this$;
G__12879.hoplonIFn(attr,kids);

return G__12879;
} else {
var G__12880 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12880,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12880,kids);

return G__12880;
}
};
var G__12884 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12885__i = 0, G__12885__a = new Array(arguments.length -  1);
while (G__12885__i < G__12885__a.length) {G__12885__a[G__12885__i] = arguments[G__12885__i + 1]; ++G__12885__i;}
  args = new cljs.core.IndexedSeq(G__12885__a,0);
} 
return G__12884__delegate.call(this,self__,args);};
G__12884.cljs$lang$maxFixedArity = 1;
G__12884.cljs$lang$applyTo = (function (arglist__12886){
var self__ = cljs.core.first(arglist__12886);
var args = cljs.core.rest(arglist__12886);
return G__12884__delegate(self__,args);
});
G__12884.cljs$core$IFn$_invoke$arity$variadic = G__12884__delegate;
return G__12884;
})()
;

Element.prototype.apply = (function (self__,args12877){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12877)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12887__delegate = function (args){
var this$ = this;
var vec__12881 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__12881,(0),null);
var kids = cljs.core.nth.call(null,vec__12881,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__12882 = this$;
G__12882.hoplonIFn(attr,kids);

return G__12882;
} else {
var G__12883 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__12883,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__12883,kids);

return G__12883;
}
};
var G__12887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12888__i = 0, G__12888__a = new Array(arguments.length -  0);
while (G__12888__i < G__12888__a.length) {G__12888__a[G__12888__i] = arguments[G__12888__i + 0]; ++G__12888__i;}
  args = new cljs.core.IndexedSeq(G__12888__a,0);
} 
return G__12887__delegate.call(this,args);};
G__12887.cljs$lang$maxFixedArity = 0;
G__12887.cljs$lang$applyTo = (function (arglist__12889){
var args = cljs.core.seq(arglist__12889);
return G__12887__delegate(args);
});
G__12887.cljs$core$IFn$_invoke$arity$variadic = G__12887__delegate;
return G__12887;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__12900__delegate = function (args){
var vec__12895 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12895,(0),null);
var kids = cljs.core.nth.call(null,vec__12895,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__12896 = cljs.core.seq.call(null,kids);
var chunk__12897 = null;
var count__12898 = (0);
var i__12899 = (0);
while(true){
if((i__12899 < count__12898)){
var k = cljs.core._nth.call(null,chunk__12897,i__12899);
elem.appendChild(k);

var G__12901 = seq__12896;
var G__12902 = chunk__12897;
var G__12903 = count__12898;
var G__12904 = (i__12899 + (1));
seq__12896 = G__12901;
chunk__12897 = G__12902;
count__12898 = G__12903;
i__12899 = G__12904;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12896);
if(temp__4425__auto__){
var seq__12896__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12896__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12896__$1);
var G__12905 = cljs.core.chunk_rest.call(null,seq__12896__$1);
var G__12906 = c__4995__auto__;
var G__12907 = cljs.core.count.call(null,c__4995__auto__);
var G__12908 = (0);
seq__12896 = G__12905;
chunk__12897 = G__12906;
count__12898 = G__12907;
i__12899 = G__12908;
continue;
} else {
var k = cljs.core.first.call(null,seq__12896__$1);
elem.appendChild(k);

var G__12909 = cljs.core.next.call(null,seq__12896__$1);
var G__12910 = null;
var G__12911 = (0);
var G__12912 = (0);
seq__12896 = G__12909;
chunk__12897 = G__12910;
count__12898 = G__12911;
i__12899 = G__12912;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__12900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12913__i = 0, G__12913__a = new Array(arguments.length -  0);
while (G__12913__i < G__12913__a.length) {G__12913__a[G__12913__i] = arguments[G__12913__i + 0]; ++G__12913__i;}
  args = new cljs.core.IndexedSeq(G__12913__a,0);
} 
return G__12900__delegate.call(this,args);};
G__12900.cljs$lang$maxFixedArity = 0;
G__12900.cljs$lang$applyTo = (function (arglist__12914){
var args = cljs.core.seq(arglist__12914);
return G__12900__delegate(args);
});
G__12900.cljs$core$IFn$_invoke$arity$variadic = G__12900__delegate;
return G__12900;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__12915__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__12915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12916__i = 0, G__12916__a = new Array(arguments.length -  0);
while (G__12916__i < G__12916__a.length) {G__12916__a[G__12916__i] = arguments[G__12916__i + 0]; ++G__12916__i;}
  args = new cljs.core.IndexedSeq(G__12916__a,0);
} 
return G__12915__delegate.call(this,args);};
G__12915.cljs$lang$maxFixedArity = 0;
G__12915.cljs$lang$applyTo = (function (arglist__12917){
var args = cljs.core.seq(arglist__12917);
return G__12915__delegate(args);
});
G__12915.cljs$core$IFn$_invoke$arity$variadic = G__12915__delegate;
return G__12915;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__12919 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__12919,(0),null);
var _ = cljs.core.nth.call(null,vec__12919,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq12918){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12918));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__12920_SHARP_){
return document.createTextNode(p1__12920_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__12921_SHARP_){
return document.createComment(p1__12921_SHARP_);
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
return jQuery("body").on("submit",(function (p1__12922_SHARP_){
var e = jQuery(p1__12922_SHARP_.target);
if(cljs.core.truth_((function (){var or__4210__auto__ = e.attr("action");
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__12922_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var G__12924 = arguments.length;
switch (G__12924) {
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
var G__12927 = arguments.length;
switch (G__12927) {
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
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5109__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__12929__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__12929 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12930__i = 0, G__12930__a = new Array(arguments.length -  2);
while (G__12930__i < G__12930__a.length) {G__12930__a[G__12930__i] = arguments[G__12930__i + 2]; ++G__12930__i;}
  args = new cljs.core.IndexedSeq(G__12930__a,0);
} 
return G__12929__delegate.call(this,elem,_,args);};
G__12929.cljs$lang$maxFixedArity = 2;
G__12929.cljs$lang$applyTo = (function (arglist__12931){
var elem = cljs.core.first(arglist__12931);
arglist__12931 = cljs.core.next(arglist__12931);
var _ = cljs.core.first(arglist__12931);
var args = cljs.core.rest(arglist__12931);
return G__12929__delegate(elem,_,args);
});
G__12929.cljs$core$IFn$_invoke$arity$variadic = G__12929__delegate;
return G__12929;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12932 = cljs.core.seq.call(null,kvs);
var chunk__12933 = null;
var count__12934 = (0);
var i__12935 = (0);
while(true){
if((i__12935 < count__12934)){
var vec__12936 = cljs.core._nth.call(null,chunk__12933,i__12935);
var k = cljs.core.nth.call(null,vec__12936,(0),null);
var v = cljs.core.nth.call(null,vec__12936,(1),null);
var k_12938__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12938__$1);
} else {
e.attr(k_12938__$1,((cljs.core._EQ_.call(null,true,v))?k_12938__$1:v));
}

var G__12939 = seq__12932;
var G__12940 = chunk__12933;
var G__12941 = count__12934;
var G__12942 = (i__12935 + (1));
seq__12932 = G__12939;
chunk__12933 = G__12940;
count__12934 = G__12941;
i__12935 = G__12942;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12932);
if(temp__4425__auto__){
var seq__12932__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12932__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12932__$1);
var G__12943 = cljs.core.chunk_rest.call(null,seq__12932__$1);
var G__12944 = c__4995__auto__;
var G__12945 = cljs.core.count.call(null,c__4995__auto__);
var G__12946 = (0);
seq__12932 = G__12943;
chunk__12933 = G__12944;
count__12934 = G__12945;
i__12935 = G__12946;
continue;
} else {
var vec__12937 = cljs.core.first.call(null,seq__12932__$1);
var k = cljs.core.nth.call(null,vec__12937,(0),null);
var v = cljs.core.nth.call(null,vec__12937,(1),null);
var k_12947__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_12947__$1);
} else {
e.attr(k_12947__$1,((cljs.core._EQ_.call(null,true,v))?k_12947__$1:v));
}

var G__12948 = cljs.core.next.call(null,seq__12932__$1);
var G__12949 = null;
var G__12950 = (0);
var G__12951 = (0);
seq__12932 = G__12948;
chunk__12933 = G__12949;
count__12934 = G__12950;
i__12935 = G__12951;
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
return (function (p1__12952_SHARP_){
return cljs.core.zipmap.call(null,p1__12952_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__12953 = cljs.core.seq.call(null,clmap);
var chunk__12954 = null;
var count__12955 = (0);
var i__12956 = (0);
while(true){
if((i__12956 < count__12955)){
var vec__12957 = cljs.core._nth.call(null,chunk__12954,i__12956);
var c = cljs.core.nth.call(null,vec__12957,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12957,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12959 = seq__12953;
var G__12960 = chunk__12954;
var G__12961 = count__12955;
var G__12962 = (i__12956 + (1));
seq__12953 = G__12959;
chunk__12954 = G__12960;
count__12955 = G__12961;
i__12956 = G__12962;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12953);
if(temp__4425__auto__){
var seq__12953__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12953__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12953__$1);
var G__12963 = cljs.core.chunk_rest.call(null,seq__12953__$1);
var G__12964 = c__4995__auto__;
var G__12965 = cljs.core.count.call(null,c__4995__auto__);
var G__12966 = (0);
seq__12953 = G__12963;
chunk__12954 = G__12964;
count__12955 = G__12965;
i__12956 = G__12966;
continue;
} else {
var vec__12958 = cljs.core.first.call(null,seq__12953__$1);
var c = cljs.core.nth.call(null,vec__12958,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__12958,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__12967 = cljs.core.next.call(null,seq__12953__$1);
var G__12968 = null;
var G__12969 = (0);
var G__12970 = (0);
seq__12953 = G__12967;
chunk__12954 = G__12968;
count__12955 = G__12969;
i__12956 = G__12970;
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
var seq__12971 = cljs.core.seq.call(null,kvs);
var chunk__12972 = null;
var count__12973 = (0);
var i__12974 = (0);
while(true){
if((i__12974 < count__12973)){
var vec__12975 = cljs.core._nth.call(null,chunk__12972,i__12974);
var k = cljs.core.nth.call(null,vec__12975,(0),null);
var v = cljs.core.nth.call(null,vec__12975,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12977 = seq__12971;
var G__12978 = chunk__12972;
var G__12979 = count__12973;
var G__12980 = (i__12974 + (1));
seq__12971 = G__12977;
chunk__12972 = G__12978;
count__12973 = G__12979;
i__12974 = G__12980;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12971);
if(temp__4425__auto__){
var seq__12971__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12971__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__12971__$1);
var G__12981 = cljs.core.chunk_rest.call(null,seq__12971__$1);
var G__12982 = c__4995__auto__;
var G__12983 = cljs.core.count.call(null,c__4995__auto__);
var G__12984 = (0);
seq__12971 = G__12981;
chunk__12972 = G__12982;
count__12973 = G__12983;
i__12974 = G__12984;
continue;
} else {
var vec__12976 = cljs.core.first.call(null,seq__12971__$1);
var k = cljs.core.nth.call(null,vec__12976,(0),null);
var v = cljs.core.nth.call(null,vec__12976,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__12985 = cljs.core.next.call(null,seq__12971__$1);
var G__12986 = null;
var G__12987 = (0);
var G__12988 = (0);
seq__12971 = G__12985;
chunk__12972 = G__12986;
count__12973 = G__12987;
i__12974 = G__12988;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5109__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
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
return (function (G__13002,G__13003){
return G__13002.call(null,G__13003);
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq){
return (function (G__13005,G__13004){
return G__13004.call(null,G__13005);
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__12989_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__13008,G__13007,G__13006){
return G__13006.call(null,G__13007,G__13008);
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__12989_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__12990_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__12990_SHARP_));
cljs.core.swap_BANG_.call(null,p1__12990_SHARP_,cljs.core.rest);

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
var seq__13009 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__13010 = null;
var count__13011 = (0);
var i__13012 = (0);
while(true){
if((i__13012 < count__13011)){
var i = cljs.core._nth.call(null,chunk__13010,i__13012);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__13013 = seq__13009;
var G__13014 = chunk__13010;
var G__13015 = count__13011;
var G__13016 = (i__13012 + (1));
seq__13009 = G__13013;
chunk__13010 = G__13014;
count__13011 = G__13015;
i__13012 = G__13016;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13009);
if(temp__4425__auto__){
var seq__13009__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13009__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__13009__$1);
var G__13017 = cljs.core.chunk_rest.call(null,seq__13009__$1);
var G__13018 = c__4995__auto__;
var G__13019 = cljs.core.count.call(null,c__4995__auto__);
var G__13020 = (0);
seq__13009 = G__13017;
chunk__13010 = G__13018;
count__13011 = G__13019;
i__13012 = G__13020;
continue;
} else {
var i = cljs.core.first.call(null,seq__13009__$1);
p.appendChild((function (){var or__4210__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__13021 = cljs.core.next.call(null,seq__13009__$1);
var G__13022 = null;
var G__13023 = (0);
var G__13024 = (0);
seq__13009 = G__13021;
chunk__13010 = G__13022;
count__13011 = G__13023;
i__13012 = G__13024;
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
cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,p.removeChild(p.lastChild));

var G__13025 = (___$1 + (1));
___$1 = G__13025;
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

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__13027){
var vec__13028 = p__13027;
var default$ = cljs.core.nth.call(null,vec__13028,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__13028,default$){
return (function (G__13029,G__13031,G__13030){
var or__4210__auto__ = (function (){var and__4198__auto__ = G__13029.call(null,G__13030);
if(cljs.core.truth_(and__4198__auto__)){
return G__13030;
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__13031;
}
});})(c,vec__13028,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__13028,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__13028,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq13026){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13026));
});

//# sourceMappingURL=hoplon.js.map