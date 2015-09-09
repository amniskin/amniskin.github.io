// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__276698_SHARP_){
return (p1__276698_SHARP_ instanceof Node);
}):(function (p1__276699_SHARP_){
try{return p1__276699_SHARP_.nodeType;
}catch (e276700){if((e276700 instanceof Error)){
var _ = e276700;
return null;
} else {
throw e276700;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__276701_SHARP_){
try{return cljs.core.vector_QMARK_(p1__276701_SHARP_);
}catch (e276702){if((e276702 instanceof Error)){
var _ = e276702;
return null;
} else {
throw e276702;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__276703_SHARP_){
try{return cljs.core.seq_QMARK_(p1__276703_SHARP_);
}catch (e276704){if((e276704 instanceof Error)){
var _ = e276704;
return null;
} else {
throw e276704;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__276705_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__276705_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args276706 = [];
var len__6061__auto___276710 = arguments.length;
var i__6062__auto___276711 = (0);
while(true){
if((i__6062__auto___276711 < len__6061__auto___276710)){
args276706.push((arguments[i__6062__auto___276711]));

var G__276712 = (i__6062__auto___276711 + (1));
i__6062__auto___276711 = G__276712;
continue;
} else {
}
break;
}

var G__276708 = args276706.length;
switch (G__276708) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args276706.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e276709){if((e276709 instanceof Error)){
var _ = e276709;
return not_found;
} else {
throw e276709;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args276714 = [];
var len__6061__auto___276717 = arguments.length;
var i__6062__auto___276718 = (0);
while(true){
if((i__6062__auto___276718 < len__6061__auto___276717)){
args276714.push((arguments[i__6062__auto___276718]));

var G__276719 = (i__6062__auto___276718 + (1));
i__6062__auto___276718 = G__276719;
continue;
} else {
}
break;
}

var G__276716 = args276714.length;
switch (G__276716) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args276714.length)].join('')));

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
var G__276729 = args;
var vec__276730 = G__276729;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276730,(0),null);
var args__$1 = cljs.core.nthnext(vec__276730,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__276729__$1 = G__276729;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__276731 = G__276729__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276731,(0),null);
var args__$2 = cljs.core.nthnext(vec__276731,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__276732 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__276729__$1,attr__$2,kids__$2,vec__276731,arg__$1,args__$2,attr,kids,G__276729,vec__276730,arg,args__$1){
return (function (p1__276721_SHARP_,p2__276722_SHARP_,p3__276723_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__276721_SHARP_,p2__276722_SHARP_,p3__276723_SHARP_);
});})(attr__$1,kids__$1,G__276729__$1,attr__$2,kids__$2,vec__276731,arg__$1,args__$2,attr,kids,G__276729,vec__276730,arg,args__$1))
,attr__$2,arg__$1);
var G__276733 = kids__$2;
var G__276734 = args__$2;
attr__$1 = G__276732;
kids__$1 = G__276733;
G__276729__$1 = G__276734;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__276735 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__276736 = kids__$2;
var G__276737 = cljs.core.rest(args__$2);
attr__$1 = G__276735;
kids__$1 = G__276736;
G__276729__$1 = G__276737;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__276738 = attr__$2;
var G__276739 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__276740 = args__$2;
attr__$1 = G__276738;
kids__$1 = G__276739;
G__276729__$1 = G__276740;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__276741 = attr__$2;
var G__276742 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__276743 = args__$2;
attr__$1 = G__276741;
kids__$1 = G__276742;
G__276729__$1 = G__276743;
continue;
} else {
var G__276744 = attr__$2;
var G__276745 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__276746 = args__$2;
attr__$1 = G__276744;
kids__$1 = G__276745;
G__276729__$1 = G__276746;
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
var G__276762_276767 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__276764_276769 = this$__$2;
var G__276765_276770 = k;
var G__276766_276771 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__276764_276769,G__276765_276770,G__276766_276771) : tailrecursion.hoplon.do_BANG_.call(null,G__276764_276769,G__276765_276770,G__276766_276771));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__276748_SHARP_,p2__276749_SHARP_,p3__276750_SHARP_,p4__276747_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__276747_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__276747_SHARP_));
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
var G__276763_276768 = (0);
setTimeout(G__276762_276767,G__276763_276768);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__276772_SHARP_,p2__276773_SHARP_){
return p1__276772_SHARP_.appendChild(p2__276773_SHARP_);
}):(function (p1__276774_SHARP_,p2__276775_SHARP_){
try{return p1__276774_SHARP_.appendChild(p2__276775_SHARP_);
}catch (e276776){if((e276776 instanceof Error)){
var _ = e276776;
return null;
} else {
throw e276776;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__276779 = this$;
var G__276780 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__276779,G__276780) : tailrecursion.hoplon.add_children_BANG_.call(null,G__276779,G__276780));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__276786){
var vec__276792 = p__276786;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276792,(0),null);
var _ = cljs.core.nthnext(vec__276792,(1));
var kids = vec__276792;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__276792,child_cell,_,kids){
return (function (p1__276782_SHARP_,p2__276783_SHARP_,p3__276784_SHARP_,p4__276781_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__276781_SHARP_);
});})(vec__276792,child_cell,_,kids))
);
} else {
var node_276797 = ((function (vec__276792,child_cell,_,kids){
return (function (p1__276785_SHARP_){
if(typeof p1__276785_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__276785_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__276785_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__276785_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__276785_SHARP_)))){
return p1__276785_SHARP_;
} else {
return null;
}
}
});})(vec__276792,child_cell,_,kids))
;
var seq__276793_276798 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__276794_276799 = null;
var count__276795_276800 = (0);
var i__276796_276801 = (0);
while(true){
if((i__276796_276801 < count__276795_276800)){
var x_276802 = chunk__276794_276799.cljs$core$IIndexed$_nth$arity$2(null,i__276796_276801);
var temp__4425__auto___276803 = node_276797(x_276802);
if(cljs.core.truth_(temp__4425__auto___276803)){
var x_276804__$1 = temp__4425__auto___276803;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_276804__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_276804__$1));
} else {
}

var G__276805 = seq__276793_276798;
var G__276806 = chunk__276794_276799;
var G__276807 = count__276795_276800;
var G__276808 = (i__276796_276801 + (1));
seq__276793_276798 = G__276805;
chunk__276794_276799 = G__276806;
count__276795_276800 = G__276807;
i__276796_276801 = G__276808;
continue;
} else {
var temp__4425__auto___276809 = cljs.core.seq(seq__276793_276798);
if(temp__4425__auto___276809){
var seq__276793_276810__$1 = temp__4425__auto___276809;
if(cljs.core.chunked_seq_QMARK_(seq__276793_276810__$1)){
var c__5806__auto___276811 = cljs.core.chunk_first(seq__276793_276810__$1);
var G__276812 = cljs.core.chunk_rest(seq__276793_276810__$1);
var G__276813 = c__5806__auto___276811;
var G__276814 = cljs.core.count(c__5806__auto___276811);
var G__276815 = (0);
seq__276793_276798 = G__276812;
chunk__276794_276799 = G__276813;
count__276795_276800 = G__276814;
i__276796_276801 = G__276815;
continue;
} else {
var x_276816 = cljs.core.first(seq__276793_276810__$1);
var temp__4425__auto___276817__$1 = node_276797(x_276816);
if(cljs.core.truth_(temp__4425__auto___276817__$1)){
var x_276818__$1 = temp__4425__auto___276817__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_276818__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_276818__$1));
} else {
}

var G__276819 = cljs.core.next(seq__276793_276810__$1);
var G__276820 = null;
var G__276821 = (0);
var G__276822 = (0);
seq__276793_276798 = G__276819;
chunk__276794_276799 = G__276820;
count__276795_276800 = G__276821;
i__276796_276801 = G__276822;
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
var G__276830__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__276824 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276824,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276824,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__276825 = this$;
G__276825.hoplonIFn(attr,kids);

return G__276825;
} else {
var G__276826 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__276826,attr);

tailrecursion.hoplon.add_children_BANG_(G__276826,kids);

return G__276826;
}
};
var G__276830 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__276831__i = 0, G__276831__a = new Array(arguments.length -  1);
while (G__276831__i < G__276831__a.length) {G__276831__a[G__276831__i] = arguments[G__276831__i + 1]; ++G__276831__i;}
  args = new cljs.core.IndexedSeq(G__276831__a,0);
} 
return G__276830__delegate.call(this,self__,args);};
G__276830.cljs$lang$maxFixedArity = 1;
G__276830.cljs$lang$applyTo = (function (arglist__276832){
var self__ = cljs.core.first(arglist__276832);
var args = cljs.core.rest(arglist__276832);
return G__276830__delegate(self__,args);
});
G__276830.cljs$core$IFn$_invoke$arity$variadic = G__276830__delegate;
return G__276830;
})()
;

Element.prototype.apply = (function (self__,args276823){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args276823)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__276833__delegate = function (args){
var this$ = this;
var vec__276827 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276827,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276827,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__276828 = this$;
G__276828.hoplonIFn(attr,kids);

return G__276828;
} else {
var G__276829 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__276829,attr);

tailrecursion.hoplon.add_children_BANG_(G__276829,kids);

return G__276829;
}
};
var G__276833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276834__i = 0, G__276834__a = new Array(arguments.length -  0);
while (G__276834__i < G__276834__a.length) {G__276834__a[G__276834__i] = arguments[G__276834__i + 0]; ++G__276834__i;}
  args = new cljs.core.IndexedSeq(G__276834__a,0);
} 
return G__276833__delegate.call(this,args);};
G__276833.cljs$lang$maxFixedArity = 0;
G__276833.cljs$lang$applyTo = (function (arglist__276835){
var args = cljs.core.seq(arglist__276835);
return G__276833__delegate(args);
});
G__276833.cljs$core$IFn$_invoke$arity$variadic = G__276833__delegate;
return G__276833;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__276846__delegate = function (args){
var vec__276841 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276841,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276841,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__276842 = cljs.core.seq(kids);
var chunk__276843 = null;
var count__276844 = (0);
var i__276845 = (0);
while(true){
if((i__276845 < count__276844)){
var k = chunk__276843.cljs$core$IIndexed$_nth$arity$2(null,i__276845);
elem.appendChild(k);

var G__276847 = seq__276842;
var G__276848 = chunk__276843;
var G__276849 = count__276844;
var G__276850 = (i__276845 + (1));
seq__276842 = G__276847;
chunk__276843 = G__276848;
count__276844 = G__276849;
i__276845 = G__276850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__276842);
if(temp__4425__auto__){
var seq__276842__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__276842__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__276842__$1);
var G__276851 = cljs.core.chunk_rest(seq__276842__$1);
var G__276852 = c__5806__auto__;
var G__276853 = cljs.core.count(c__5806__auto__);
var G__276854 = (0);
seq__276842 = G__276851;
chunk__276843 = G__276852;
count__276844 = G__276853;
i__276845 = G__276854;
continue;
} else {
var k = cljs.core.first(seq__276842__$1);
elem.appendChild(k);

var G__276855 = cljs.core.next(seq__276842__$1);
var G__276856 = null;
var G__276857 = (0);
var G__276858 = (0);
seq__276842 = G__276855;
chunk__276843 = G__276856;
count__276844 = G__276857;
i__276845 = G__276858;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__276846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276859__i = 0, G__276859__a = new Array(arguments.length -  0);
while (G__276859__i < G__276859__a.length) {G__276859__a[G__276859__i] = arguments[G__276859__i + 0]; ++G__276859__i;}
  args = new cljs.core.IndexedSeq(G__276859__a,0);
} 
return G__276846__delegate.call(this,args);};
G__276846.cljs$lang$maxFixedArity = 0;
G__276846.cljs$lang$applyTo = (function (arglist__276860){
var args = cljs.core.seq(arglist__276860);
return G__276846__delegate(args);
});
G__276846.cljs$core$IFn$_invoke$arity$variadic = G__276846__delegate;
return G__276846;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__276861__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__276861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276862__i = 0, G__276862__a = new Array(arguments.length -  0);
while (G__276862__i < G__276862__a.length) {G__276862__a[G__276862__i] = arguments[G__276862__i + 0]; ++G__276862__i;}
  args = new cljs.core.IndexedSeq(G__276862__a,0);
} 
return G__276861__delegate.call(this,args);};
G__276861.cljs$lang$maxFixedArity = 0;
G__276861.cljs$lang$applyTo = (function (arglist__276863){
var args = cljs.core.seq(arglist__276863);
return G__276861__delegate(args);
});
G__276861.cljs$core$IFn$_invoke$arity$variadic = G__276861__delegate;
return G__276861;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___276866 = arguments.length;
var i__6062__auto___276867 = (0);
while(true){
if((i__6062__auto___276867 < len__6061__auto___276866)){
args__6068__auto__.push((arguments[i__6062__auto___276867]));

var G__276868 = (i__6062__auto___276867 + (1));
i__6062__auto___276867 = G__276868;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__276865 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276865,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276865,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq276864){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq276864));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__276869_SHARP_){
return document.createTextNode(p1__276869_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__276870_SHARP_){
return document.createComment(p1__276870_SHARP_);
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
return jQuery("body").on("submit",(function (p1__276871_SHARP_){
var e = (function (){var G__276872 = p1__276871_SHARP_.target;
return jQuery(G__276872);
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
return p1__276871_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args276873 = [];
var len__6061__auto___276876 = arguments.length;
var i__6062__auto___276877 = (0);
while(true){
if((i__6062__auto___276877 < len__6061__auto___276876)){
args276873.push((arguments[i__6062__auto___276877]));

var G__276878 = (i__6062__auto___276877 + (1));
i__6062__auto___276877 = G__276878;
continue;
} else {
}
break;
}

var G__276875 = args276873.length;
switch (G__276875) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args276873.length)].join('')));

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
var args276880 = [];
var len__6061__auto___276883 = arguments.length;
var i__6062__auto___276884 = (0);
while(true){
if((i__6062__auto___276884 < len__6061__auto___276883)){
args276880.push((arguments[i__6062__auto___276884]));

var G__276885 = (i__6062__auto___276884 + (1));
i__6062__auto___276884 = G__276885;
continue;
} else {
}
break;
}

var G__276882 = args276880.length;
switch (G__276882) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args276880.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__276887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276887) : cljs.core.atom.call(null,G__276887));
})();
var prefer_table__5917__auto__ = (function (){var G__276888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276888) : cljs.core.atom.call(null,G__276888));
})();
var method_cache__5918__auto__ = (function (){var G__276889 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276889) : cljs.core.atom.call(null,G__276889));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__276890 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276890) : cljs.core.atom.call(null,G__276890));
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
var G__276891 = elem;
var G__276892 = cljs.core.cst$kw$attr;
var G__276893 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__276891,G__276892,G__276893) : tailrecursion.hoplon.do_BANG_.call(null,G__276891,G__276892,G__276893));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__276894__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__276894 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__276895__i = 0, G__276895__a = new Array(arguments.length -  2);
while (G__276895__i < G__276895__a.length) {G__276895__a[G__276895__i] = arguments[G__276895__i + 2]; ++G__276895__i;}
  args = new cljs.core.IndexedSeq(G__276895__a,0);
} 
return G__276894__delegate.call(this,elem,_,args);};
G__276894.cljs$lang$maxFixedArity = 2;
G__276894.cljs$lang$applyTo = (function (arglist__276896){
var elem = cljs.core.first(arglist__276896);
arglist__276896 = cljs.core.next(arglist__276896);
var _ = cljs.core.first(arglist__276896);
var args = cljs.core.rest(arglist__276896);
return G__276894__delegate(elem,_,args);
});
G__276894.cljs$core$IFn$_invoke$arity$variadic = G__276894__delegate;
return G__276894;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__276897 = cljs.core.seq(kvs);
var chunk__276898 = null;
var count__276899 = (0);
var i__276900 = (0);
while(true){
if((i__276900 < count__276899)){
var vec__276901 = chunk__276898.cljs$core$IIndexed$_nth$arity$2(null,i__276900);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276901,(1),null);
var k_276903__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_276903__$1);
} else {
e.attr(k_276903__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_276903__$1:v));
}

var G__276904 = seq__276897;
var G__276905 = chunk__276898;
var G__276906 = count__276899;
var G__276907 = (i__276900 + (1));
seq__276897 = G__276904;
chunk__276898 = G__276905;
count__276899 = G__276906;
i__276900 = G__276907;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__276897);
if(temp__4425__auto__){
var seq__276897__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__276897__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__276897__$1);
var G__276908 = cljs.core.chunk_rest(seq__276897__$1);
var G__276909 = c__5806__auto__;
var G__276910 = cljs.core.count(c__5806__auto__);
var G__276911 = (0);
seq__276897 = G__276908;
chunk__276898 = G__276909;
count__276899 = G__276910;
i__276900 = G__276911;
continue;
} else {
var vec__276902 = cljs.core.first(seq__276897__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276902,(1),null);
var k_276912__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_276912__$1);
} else {
e.attr(k_276912__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_276912__$1:v));
}

var G__276913 = cljs.core.next(seq__276897__$1);
var G__276914 = null;
var G__276915 = (0);
var G__276916 = (0);
seq__276897 = G__276913;
chunk__276898 = G__276914;
count__276899 = G__276915;
i__276900 = G__276916;
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
return (function (p1__276917_SHARP_){
return cljs.core.zipmap(p1__276917_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__276918 = cljs.core.seq(clmap);
var chunk__276919 = null;
var count__276920 = (0);
var i__276921 = (0);
while(true){
if((i__276921 < count__276920)){
var vec__276922 = chunk__276919.cljs$core$IIndexed$_nth$arity$2(null,i__276921);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276922,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276922,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__276924 = seq__276918;
var G__276925 = chunk__276919;
var G__276926 = count__276920;
var G__276927 = (i__276921 + (1));
seq__276918 = G__276924;
chunk__276919 = G__276925;
count__276920 = G__276926;
i__276921 = G__276927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__276918);
if(temp__4425__auto__){
var seq__276918__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__276918__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__276918__$1);
var G__276928 = cljs.core.chunk_rest(seq__276918__$1);
var G__276929 = c__5806__auto__;
var G__276930 = cljs.core.count(c__5806__auto__);
var G__276931 = (0);
seq__276918 = G__276928;
chunk__276919 = G__276929;
count__276920 = G__276930;
i__276921 = G__276931;
continue;
} else {
var vec__276923 = cljs.core.first(seq__276918__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276923,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276923,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__276932 = cljs.core.next(seq__276918__$1);
var G__276933 = null;
var G__276934 = (0);
var G__276935 = (0);
seq__276918 = G__276932;
chunk__276919 = G__276933;
count__276920 = G__276934;
i__276921 = G__276935;
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
var seq__276936 = cljs.core.seq(kvs);
var chunk__276937 = null;
var count__276938 = (0);
var i__276939 = (0);
while(true){
if((i__276939 < count__276938)){
var vec__276940 = chunk__276937.cljs$core$IIndexed$_nth$arity$2(null,i__276939);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276940,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__276942 = seq__276936;
var G__276943 = chunk__276937;
var G__276944 = count__276938;
var G__276945 = (i__276939 + (1));
seq__276936 = G__276942;
chunk__276937 = G__276943;
count__276938 = G__276944;
i__276939 = G__276945;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__276936);
if(temp__4425__auto__){
var seq__276936__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__276936__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__276936__$1);
var G__276946 = cljs.core.chunk_rest(seq__276936__$1);
var G__276947 = c__5806__auto__;
var G__276948 = cljs.core.count(c__5806__auto__);
var G__276949 = (0);
seq__276936 = G__276946;
chunk__276937 = G__276947;
count__276938 = G__276948;
i__276939 = G__276949;
continue;
} else {
var vec__276941 = cljs.core.first(seq__276936__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__276941,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__276950 = cljs.core.next(seq__276936__$1);
var G__276951 = null;
var G__276952 = (0);
var G__276953 = (0);
seq__276936 = G__276950;
chunk__276937 = G__276951;
count__276938 = G__276952;
i__276939 = G__276953;
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
var G__276954 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__276955 = (0);
return setTimeout(G__276954,G__276955);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__276956 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276956) : cljs.core.atom.call(null,G__276956));
})();
var prefer_table__5917__auto__ = (function (){var G__276957 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276957) : cljs.core.atom.call(null,G__276957));
})();
var method_cache__5918__auto__ = (function (){var G__276958 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276958) : cljs.core.atom.call(null,G__276958));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__276959 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276959) : cljs.core.atom.call(null,G__276959));
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
return (function (){var G__276960 = this$__$1.target;
return jQuery(G__276960);
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
var G__276963_276965 = init;
var G__276964_276966 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__276963_276965,G__276964_276966) : f.call(null,G__276963_276965,G__276964_276966));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__276983 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__276983) : cljs.core.atom.call(null,G__276983));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__276984,G__276985){
return (G__276984.cljs$core$IFn$_invoke$arity$1 ? G__276984.cljs$core$IFn$_invoke$arity$1(G__276985) : G__276984.call(null,G__276985));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__276987,G__276986){
return (G__276986.cljs$core$IFn$_invoke$arity$1 ? G__276986.cljs$core$IFn$_invoke$arity$1(G__276987) : G__276986.call(null,G__276987));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__276967_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__276989,G__276990,G__276988){
return (G__276988.cljs$core$IFn$_invoke$arity$2 ? G__276988.cljs$core$IFn$_invoke$arity$2(G__276989,G__276990) : G__276988.call(null,G__276989,G__276990));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__276967_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__276968_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__276968_SHARP_) : cljs.core.deref.call(null,p1__276968_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__276968_SHARP_,cljs.core.rest);

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
var seq__276991 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__276992 = null;
var count__276993 = (0);
var i__276994 = (0);
while(true){
if((i__276994 < count__276993)){
var i = chunk__276992.cljs$core$IIndexed$_nth$arity$2(null,i__276994);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__276995 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__276995) : tpl.call(null,G__276995));
}
})());

var G__276997 = seq__276991;
var G__276998 = chunk__276992;
var G__276999 = count__276993;
var G__277000 = (i__276994 + (1));
seq__276991 = G__276997;
chunk__276992 = G__276998;
count__276993 = G__276999;
i__276994 = G__277000;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__276991);
if(temp__4425__auto__){
var seq__276991__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__276991__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__276991__$1);
var G__277001 = cljs.core.chunk_rest(seq__276991__$1);
var G__277002 = c__5806__auto__;
var G__277003 = cljs.core.count(c__5806__auto__);
var G__277004 = (0);
seq__276991 = G__277001;
chunk__276992 = G__277002;
count__276993 = G__277003;
i__276994 = G__277004;
continue;
} else {
var i = cljs.core.first(seq__276991__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__276996 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__276996) : tpl.call(null,G__276996));
}
})());

var G__277005 = cljs.core.next(seq__276991__$1);
var G__277006 = null;
var G__277007 = (0);
var G__277008 = (0);
seq__276991 = G__277005;
chunk__276992 = G__277006;
count__276993 = G__277007;
i__276994 = G__277008;
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

var G__277009 = (___$1 + (1));
___$1 = G__277009;
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
var len__6061__auto___277018 = arguments.length;
var i__6062__auto___277019 = (0);
while(true){
if((i__6062__auto___277019 < len__6061__auto___277018)){
args__6068__auto__.push((arguments[i__6062__auto___277019]));

var G__277020 = (i__6062__auto___277019 + (1));
i__6062__auto___277019 = G__277020;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__277011){
var vec__277012 = p__277011;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__277012,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__277012,default$){
return (function (G__277013,G__277015,G__277014){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__277013.cljs$core$IFn$_invoke$arity$1 ? G__277013.cljs$core$IFn$_invoke$arity$1(G__277014) : G__277013.call(null,G__277014));
if(cljs.core.truth_(and__5010__auto__)){
return G__277014;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__277015;
}
});})(c,vec__277012,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__277012,default$){
return (function (){
var G__277016 = c;
var G__277017 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__277016,G__277017) : cljs.core.reset_BANG_.call(null,G__277016,G__277017));
});})(_,c,vec__277012,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq277010){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq277010));
});
