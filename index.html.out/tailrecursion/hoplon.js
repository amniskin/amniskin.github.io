// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10623_SHARP_){
return (p1__10623_SHARP_ instanceof Node);
}):(function (p1__10624_SHARP_){
try{return p1__10624_SHARP_.nodeType;
}catch (e10625){if((e10625 instanceof Error)){
var _ = e10625;
return null;
} else {
throw e10625;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10626_SHARP_){
try{return cljs.core.vector_QMARK_(p1__10626_SHARP_);
}catch (e10627){if((e10627 instanceof Error)){
var _ = e10627;
return null;
} else {
throw e10627;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10628_SHARP_){
try{return cljs.core.seq_QMARK_(p1__10628_SHARP_);
}catch (e10629){if((e10629 instanceof Error)){
var _ = e10629;
return null;
} else {
throw e10629;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10630_SHARP_){
if(cljs.core.truth_((function (){var and__4830__auto__ = console;
if(cljs.core.truth_(and__4830__auto__)){
return console.log;
} else {
return and__4830__auto__;
}
})())){
return console.log(p1__10630_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args10631 = [];
var len__5881__auto___10635 = arguments.length;
var i__5882__auto___10636 = (0);
while(true){
if((i__5882__auto___10636 < len__5881__auto___10635)){
args10631.push((arguments[i__5882__auto___10636]));

var G__10637 = (i__5882__auto___10636 + (1));
i__5882__auto___10636 = G__10637;
continue;
} else {
}
break;
}

var G__10633 = args10631.length;
switch (G__10633) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10631.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10634){if((e10634 instanceof Error)){
var _ = e10634;
return not_found;
} else {
throw e10634;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args10639 = [];
var len__5881__auto___10642 = arguments.length;
var i__5882__auto___10643 = (0);
while(true){
if((i__5882__auto___10643 < len__5881__auto___10642)){
args10639.push((arguments[i__5882__auto___10643]));

var G__10644 = (i__5882__auto___10643 + (1));
i__5882__auto___10643 = G__10644;
continue;
} else {
}
break;
}

var G__10641 = args10639.length;
switch (G__10641) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10639.length)].join('')));

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
var G__10654 = args;
var vec__10655 = G__10654;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10655,(0),null);
var args__$1 = cljs.core.nthnext(vec__10655,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__10654__$1 = G__10654;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__10656 = G__10654__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10656,(0),null);
var args__$2 = cljs.core.nthnext(vec__10656,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__10657 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__10654__$1,attr__$2,kids__$2,vec__10656,arg__$1,args__$2,attr,kids,G__10654,vec__10655,arg,args__$1){
return (function (p1__10646_SHARP_,p2__10647_SHARP_,p3__10648_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__10646_SHARP_,p2__10647_SHARP_,p3__10648_SHARP_);
});})(attr__$1,kids__$1,G__10654__$1,attr__$2,kids__$2,vec__10656,arg__$1,args__$2,attr,kids,G__10654,vec__10655,arg,args__$1))
,attr__$2,arg__$1);
var G__10658 = kids__$2;
var G__10659 = args__$2;
attr__$1 = G__10657;
kids__$1 = G__10658;
G__10654__$1 = G__10659;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__10660 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__10661 = kids__$2;
var G__10662 = cljs.core.rest(args__$2);
attr__$1 = G__10660;
kids__$1 = G__10661;
G__10654__$1 = G__10662;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__10663 = attr__$2;
var G__10664 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10665 = args__$2;
attr__$1 = G__10663;
kids__$1 = G__10664;
G__10654__$1 = G__10665;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__10666 = attr__$2;
var G__10667 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__10668 = args__$2;
attr__$1 = G__10666;
kids__$1 = G__10667;
G__10654__$1 = G__10668;
continue;
} else {
var G__10669 = attr__$2;
var G__10670 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__10671 = args__$2;
attr__$1 = G__10669;
kids__$1 = G__10670;
G__10654__$1 = G__10671;
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
var G__10687_10692 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__10689_10694 = this$__$2;
var G__10690_10695 = k;
var G__10691_10696 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10689_10694,G__10690_10695,G__10691_10696) : tailrecursion.hoplon.do_BANG_.call(null,G__10689_10694,G__10690_10695,G__10691_10696));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__10673_SHARP_,p2__10674_SHARP_,p3__10675_SHARP_,p4__10672_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__10672_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__10672_SHARP_));
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
var G__10688_10693 = (0);
setTimeout(G__10687_10692,G__10688_10693);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10697_SHARP_,p2__10698_SHARP_){
return p1__10697_SHARP_.appendChild(p2__10698_SHARP_);
}):(function (p1__10699_SHARP_,p2__10700_SHARP_){
try{return p1__10699_SHARP_.appendChild(p2__10700_SHARP_);
}catch (e10701){if((e10701 instanceof Error)){
var _ = e10701;
return null;
} else {
throw e10701;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__10704 = this$;
var G__10705 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__10704,G__10705) : tailrecursion.hoplon.add_children_BANG_.call(null,G__10704,G__10705));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__10711){
var vec__10717 = p__10711;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10717,(0),null);
var _ = cljs.core.nthnext(vec__10717,(1));
var kids = vec__10717;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10717,child_cell,_,kids){
return (function (p1__10707_SHARP_,p2__10708_SHARP_,p3__10709_SHARP_,p4__10706_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10706_SHARP_);
});})(vec__10717,child_cell,_,kids))
);
} else {
var node_10722 = ((function (vec__10717,child_cell,_,kids){
return (function (p1__10710_SHARP_){
if(typeof p1__10710_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10710_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10710_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10710_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10710_SHARP_)))){
return p1__10710_SHARP_;
} else {
return null;
}
}
});})(vec__10717,child_cell,_,kids))
;
var seq__10718_10723 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__10719_10724 = null;
var count__10720_10725 = (0);
var i__10721_10726 = (0);
while(true){
if((i__10721_10726 < count__10720_10725)){
var x_10727 = chunk__10719_10724.cljs$core$IIndexed$_nth$arity$2(null,i__10721_10726);
var temp__4425__auto___10728 = node_10722(x_10727);
if(cljs.core.truth_(temp__4425__auto___10728)){
var x_10729__$1 = temp__4425__auto___10728;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10729__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10729__$1));
} else {
}

var G__10730 = seq__10718_10723;
var G__10731 = chunk__10719_10724;
var G__10732 = count__10720_10725;
var G__10733 = (i__10721_10726 + (1));
seq__10718_10723 = G__10730;
chunk__10719_10724 = G__10731;
count__10720_10725 = G__10732;
i__10721_10726 = G__10733;
continue;
} else {
var temp__4425__auto___10734 = cljs.core.seq(seq__10718_10723);
if(temp__4425__auto___10734){
var seq__10718_10735__$1 = temp__4425__auto___10734;
if(cljs.core.chunked_seq_QMARK_(seq__10718_10735__$1)){
var c__5626__auto___10736 = cljs.core.chunk_first(seq__10718_10735__$1);
var G__10737 = cljs.core.chunk_rest(seq__10718_10735__$1);
var G__10738 = c__5626__auto___10736;
var G__10739 = cljs.core.count(c__5626__auto___10736);
var G__10740 = (0);
seq__10718_10723 = G__10737;
chunk__10719_10724 = G__10738;
count__10720_10725 = G__10739;
i__10721_10726 = G__10740;
continue;
} else {
var x_10741 = cljs.core.first(seq__10718_10735__$1);
var temp__4425__auto___10742__$1 = node_10722(x_10741);
if(cljs.core.truth_(temp__4425__auto___10742__$1)){
var x_10743__$1 = temp__4425__auto___10742__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10743__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_10743__$1));
} else {
}

var G__10744 = cljs.core.next(seq__10718_10735__$1);
var G__10745 = null;
var G__10746 = (0);
var G__10747 = (0);
seq__10718_10723 = G__10744;
chunk__10719_10724 = G__10745;
count__10720_10725 = G__10746;
i__10721_10726 = G__10747;
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
var G__10755__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__10749 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10749,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10749,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10750 = this$;
G__10750.hoplonIFn(attr,kids);

return G__10750;
} else {
var G__10751 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10751,attr);

tailrecursion.hoplon.add_children_BANG_(G__10751,kids);

return G__10751;
}
};
var G__10755 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__10756__i = 0, G__10756__a = new Array(arguments.length -  1);
while (G__10756__i < G__10756__a.length) {G__10756__a[G__10756__i] = arguments[G__10756__i + 1]; ++G__10756__i;}
  args = new cljs.core.IndexedSeq(G__10756__a,0);
} 
return G__10755__delegate.call(this,self__,args);};
G__10755.cljs$lang$maxFixedArity = 1;
G__10755.cljs$lang$applyTo = (function (arglist__10757){
var self__ = cljs.core.first(arglist__10757);
var args = cljs.core.rest(arglist__10757);
return G__10755__delegate(self__,args);
});
G__10755.cljs$core$IFn$_invoke$arity$variadic = G__10755__delegate;
return G__10755;
})()
;

Element.prototype.apply = (function (self__,args10748){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10748)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__10758__delegate = function (args){
var this$ = this;
var vec__10752 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10752,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10752,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__10753 = this$;
G__10753.hoplonIFn(attr,kids);

return G__10753;
} else {
var G__10754 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__10754,attr);

tailrecursion.hoplon.add_children_BANG_(G__10754,kids);

return G__10754;
}
};
var G__10758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10759__i = 0, G__10759__a = new Array(arguments.length -  0);
while (G__10759__i < G__10759__a.length) {G__10759__a[G__10759__i] = arguments[G__10759__i + 0]; ++G__10759__i;}
  args = new cljs.core.IndexedSeq(G__10759__a,0);
} 
return G__10758__delegate.call(this,args);};
G__10758.cljs$lang$maxFixedArity = 0;
G__10758.cljs$lang$applyTo = (function (arglist__10760){
var args = cljs.core.seq(arglist__10760);
return G__10758__delegate(args);
});
G__10758.cljs$core$IFn$_invoke$arity$variadic = G__10758__delegate;
return G__10758;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__10771__delegate = function (args){
var vec__10766 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10766,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10766,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__10767 = cljs.core.seq(kids);
var chunk__10768 = null;
var count__10769 = (0);
var i__10770 = (0);
while(true){
if((i__10770 < count__10769)){
var k = chunk__10768.cljs$core$IIndexed$_nth$arity$2(null,i__10770);
elem.appendChild(k);

var G__10772 = seq__10767;
var G__10773 = chunk__10768;
var G__10774 = count__10769;
var G__10775 = (i__10770 + (1));
seq__10767 = G__10772;
chunk__10768 = G__10773;
count__10769 = G__10774;
i__10770 = G__10775;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10767);
if(temp__4425__auto__){
var seq__10767__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10767__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10767__$1);
var G__10776 = cljs.core.chunk_rest(seq__10767__$1);
var G__10777 = c__5626__auto__;
var G__10778 = cljs.core.count(c__5626__auto__);
var G__10779 = (0);
seq__10767 = G__10776;
chunk__10768 = G__10777;
count__10769 = G__10778;
i__10770 = G__10779;
continue;
} else {
var k = cljs.core.first(seq__10767__$1);
elem.appendChild(k);

var G__10780 = cljs.core.next(seq__10767__$1);
var G__10781 = null;
var G__10782 = (0);
var G__10783 = (0);
seq__10767 = G__10780;
chunk__10768 = G__10781;
count__10769 = G__10782;
i__10770 = G__10783;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__10771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10784__i = 0, G__10784__a = new Array(arguments.length -  0);
while (G__10784__i < G__10784__a.length) {G__10784__a[G__10784__i] = arguments[G__10784__i + 0]; ++G__10784__i;}
  args = new cljs.core.IndexedSeq(G__10784__a,0);
} 
return G__10771__delegate.call(this,args);};
G__10771.cljs$lang$maxFixedArity = 0;
G__10771.cljs$lang$applyTo = (function (arglist__10785){
var args = cljs.core.seq(arglist__10785);
return G__10771__delegate(args);
});
G__10771.cljs$core$IFn$_invoke$arity$variadic = G__10771__delegate;
return G__10771;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__10786__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__10786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10787__i = 0, G__10787__a = new Array(arguments.length -  0);
while (G__10787__i < G__10787__a.length) {G__10787__a[G__10787__i] = arguments[G__10787__i + 0]; ++G__10787__i;}
  args = new cljs.core.IndexedSeq(G__10787__a,0);
} 
return G__10786__delegate.call(this,args);};
G__10786.cljs$lang$maxFixedArity = 0;
G__10786.cljs$lang$applyTo = (function (arglist__10788){
var args = cljs.core.seq(arglist__10788);
return G__10786__delegate(args);
});
G__10786.cljs$core$IFn$_invoke$arity$variadic = G__10786__delegate;
return G__10786;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__5888__auto__ = [];
var len__5881__auto___10791 = arguments.length;
var i__5882__auto___10792 = (0);
while(true){
if((i__5882__auto___10792 < len__5881__auto___10791)){
args__5888__auto__.push((arguments[i__5882__auto___10792]));

var G__10793 = (i__5882__auto___10792 + (1));
i__5882__auto___10792 = G__10793;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__10790 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10790,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq10789){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10789));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__10794_SHARP_){
return document.createTextNode(p1__10794_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__10795_SHARP_){
return document.createComment(p1__10795_SHARP_);
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
return jQuery("body").on("submit",(function (p1__10796_SHARP_){
var e = (function (){var G__10797 = p1__10796_SHARP_.target;
return jQuery(G__10797);
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
return p1__10796_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args10798 = [];
var len__5881__auto___10801 = arguments.length;
var i__5882__auto___10802 = (0);
while(true){
if((i__5882__auto___10802 < len__5881__auto___10801)){
args10798.push((arguments[i__5882__auto___10802]));

var G__10803 = (i__5882__auto___10802 + (1));
i__5882__auto___10802 = G__10803;
continue;
} else {
}
break;
}

var G__10800 = args10798.length;
switch (G__10800) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10798.length)].join('')));

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
var args10805 = [];
var len__5881__auto___10808 = arguments.length;
var i__5882__auto___10809 = (0);
while(true){
if((i__5882__auto___10809 < len__5881__auto___10808)){
args10805.push((arguments[i__5882__auto___10809]));

var G__10810 = (i__5882__auto___10809 + (1));
i__5882__auto___10809 = G__10810;
continue;
} else {
}
break;
}

var G__10807 = args10805.length;
switch (G__10807) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10805.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__10812 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10812) : cljs.core.atom.call(null,G__10812));
})();
var prefer_table__5737__auto__ = (function (){var G__10813 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10813) : cljs.core.atom.call(null,G__10813));
})();
var method_cache__5738__auto__ = (function (){var G__10814 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10814) : cljs.core.atom.call(null,G__10814));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__10815 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10815) : cljs.core.atom.call(null,G__10815));
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
var G__10816 = elem;
var G__10817 = cljs.core.cst$kw$attr;
var G__10818 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__10816,G__10817,G__10818) : tailrecursion.hoplon.do_BANG_.call(null,G__10816,G__10817,G__10818));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__10819__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__10819 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__10820__i = 0, G__10820__a = new Array(arguments.length -  2);
while (G__10820__i < G__10820__a.length) {G__10820__a[G__10820__i] = arguments[G__10820__i + 2]; ++G__10820__i;}
  args = new cljs.core.IndexedSeq(G__10820__a,0);
} 
return G__10819__delegate.call(this,elem,_,args);};
G__10819.cljs$lang$maxFixedArity = 2;
G__10819.cljs$lang$applyTo = (function (arglist__10821){
var elem = cljs.core.first(arglist__10821);
arglist__10821 = cljs.core.next(arglist__10821);
var _ = cljs.core.first(arglist__10821);
var args = cljs.core.rest(arglist__10821);
return G__10819__delegate(elem,_,args);
});
G__10819.cljs$core$IFn$_invoke$arity$variadic = G__10819__delegate;
return G__10819;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__10822 = cljs.core.seq(kvs);
var chunk__10823 = null;
var count__10824 = (0);
var i__10825 = (0);
while(true){
if((i__10825 < count__10824)){
var vec__10826 = chunk__10823.cljs$core$IIndexed$_nth$arity$2(null,i__10825);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10826,(1),null);
var k_10828__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10828__$1);
} else {
e.attr(k_10828__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10828__$1:v));
}

var G__10829 = seq__10822;
var G__10830 = chunk__10823;
var G__10831 = count__10824;
var G__10832 = (i__10825 + (1));
seq__10822 = G__10829;
chunk__10823 = G__10830;
count__10824 = G__10831;
i__10825 = G__10832;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10822);
if(temp__4425__auto__){
var seq__10822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10822__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10822__$1);
var G__10833 = cljs.core.chunk_rest(seq__10822__$1);
var G__10834 = c__5626__auto__;
var G__10835 = cljs.core.count(c__5626__auto__);
var G__10836 = (0);
seq__10822 = G__10833;
chunk__10823 = G__10834;
count__10824 = G__10835;
i__10825 = G__10836;
continue;
} else {
var vec__10827 = cljs.core.first(seq__10822__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10827,(1),null);
var k_10837__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_10837__$1);
} else {
e.attr(k_10837__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_10837__$1:v));
}

var G__10838 = cljs.core.next(seq__10822__$1);
var G__10839 = null;
var G__10840 = (0);
var G__10841 = (0);
seq__10822 = G__10838;
chunk__10823 = G__10839;
count__10824 = G__10840;
i__10825 = G__10841;
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
return (function (p1__10842_SHARP_){
return cljs.core.zipmap(p1__10842_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__10843 = cljs.core.seq(clmap);
var chunk__10844 = null;
var count__10845 = (0);
var i__10846 = (0);
while(true){
if((i__10846 < count__10845)){
var vec__10847 = chunk__10844.cljs$core$IIndexed$_nth$arity$2(null,i__10846);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10847,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10847,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10849 = seq__10843;
var G__10850 = chunk__10844;
var G__10851 = count__10845;
var G__10852 = (i__10846 + (1));
seq__10843 = G__10849;
chunk__10844 = G__10850;
count__10845 = G__10851;
i__10846 = G__10852;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10843);
if(temp__4425__auto__){
var seq__10843__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10843__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10843__$1);
var G__10853 = cljs.core.chunk_rest(seq__10843__$1);
var G__10854 = c__5626__auto__;
var G__10855 = cljs.core.count(c__5626__auto__);
var G__10856 = (0);
seq__10843 = G__10853;
chunk__10844 = G__10854;
count__10845 = G__10855;
i__10846 = G__10856;
continue;
} else {
var vec__10848 = cljs.core.first(seq__10843__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10848,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10848,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__10857 = cljs.core.next(seq__10843__$1);
var G__10858 = null;
var G__10859 = (0);
var G__10860 = (0);
seq__10843 = G__10857;
chunk__10844 = G__10858;
count__10845 = G__10859;
i__10846 = G__10860;
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
var seq__10861 = cljs.core.seq(kvs);
var chunk__10862 = null;
var count__10863 = (0);
var i__10864 = (0);
while(true){
if((i__10864 < count__10863)){
var vec__10865 = chunk__10862.cljs$core$IIndexed$_nth$arity$2(null,i__10864);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10865,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10867 = seq__10861;
var G__10868 = chunk__10862;
var G__10869 = count__10863;
var G__10870 = (i__10864 + (1));
seq__10861 = G__10867;
chunk__10862 = G__10868;
count__10863 = G__10869;
i__10864 = G__10870;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10861);
if(temp__4425__auto__){
var seq__10861__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10861__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10861__$1);
var G__10871 = cljs.core.chunk_rest(seq__10861__$1);
var G__10872 = c__5626__auto__;
var G__10873 = cljs.core.count(c__5626__auto__);
var G__10874 = (0);
seq__10861 = G__10871;
chunk__10862 = G__10872;
count__10863 = G__10873;
i__10864 = G__10874;
continue;
} else {
var vec__10866 = cljs.core.first(seq__10861__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10866,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__10875 = cljs.core.next(seq__10861__$1);
var G__10876 = null;
var G__10877 = (0);
var G__10878 = (0);
seq__10861 = G__10875;
chunk__10862 = G__10876;
count__10863 = G__10877;
i__10864 = G__10878;
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
var G__10879 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__10880 = (0);
return setTimeout(G__10879,G__10880);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5736__auto__ = (function (){var G__10881 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10881) : cljs.core.atom.call(null,G__10881));
})();
var prefer_table__5737__auto__ = (function (){var G__10882 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10882) : cljs.core.atom.call(null,G__10882));
})();
var method_cache__5738__auto__ = (function (){var G__10883 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10883) : cljs.core.atom.call(null,G__10883));
})();
var cached_hierarchy__5739__auto__ = (function (){var G__10884 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10884) : cljs.core.atom.call(null,G__10884));
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
return (function (){var G__10885 = this$__$1.target;
return jQuery(G__10885);
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
var G__10888_10890 = init;
var G__10889_10891 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10888_10890,G__10889_10891) : f.call(null,G__10888_10890,G__10889_10891));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__10908 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10908) : cljs.core.atom.call(null,G__10908));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__10909,G__10910){
return (G__10909.cljs$core$IFn$_invoke$arity$1 ? G__10909.cljs$core$IFn$_invoke$arity$1(G__10910) : G__10909.call(null,G__10910));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__10912,G__10911){
return (G__10911.cljs$core$IFn$_invoke$arity$1 ? G__10911.cljs$core$IFn$_invoke$arity$1(G__10912) : G__10911.call(null,G__10912));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__10892_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__10914,G__10913,G__10915){
return (G__10913.cljs$core$IFn$_invoke$arity$2 ? G__10913.cljs$core$IFn$_invoke$arity$2(G__10914,G__10915) : G__10913.call(null,G__10914,G__10915));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,tailrecursion.hoplon.safe_nth,p1__10892_SHARP_);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__10893_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__10893_SHARP_) : cljs.core.deref.call(null,p1__10893_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10893_SHARP_,cljs.core.rest);

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
var seq__10916 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__10917 = null;
var count__10918 = (0);
var i__10919 = (0);
while(true){
if((i__10919 < count__10918)){
var i = chunk__10917.cljs$core$IIndexed$_nth$arity$2(null,i__10919);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__10920 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10920) : tpl.call(null,G__10920));
}
})());

var G__10922 = seq__10916;
var G__10923 = chunk__10917;
var G__10924 = count__10918;
var G__10925 = (i__10919 + (1));
seq__10916 = G__10922;
chunk__10917 = G__10923;
count__10918 = G__10924;
i__10919 = G__10925;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10916);
if(temp__4425__auto__){
var seq__10916__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10916__$1)){
var c__5626__auto__ = cljs.core.chunk_first(seq__10916__$1);
var G__10926 = cljs.core.chunk_rest(seq__10916__$1);
var G__10927 = c__5626__auto__;
var G__10928 = cljs.core.count(c__5626__auto__);
var G__10929 = (0);
seq__10916 = G__10926;
chunk__10917 = G__10927;
count__10918 = G__10928;
i__10919 = G__10929;
continue;
} else {
var i = cljs.core.first(seq__10916__$1);
p.appendChild((function (){var or__4842__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
var G__10921 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__10921) : tpl.call(null,G__10921));
}
})());

var G__10930 = cljs.core.next(seq__10916__$1);
var G__10931 = null;
var G__10932 = (0);
var G__10933 = (0);
seq__10916 = G__10930;
chunk__10917 = G__10931;
count__10918 = G__10932;
i__10919 = G__10933;
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

var G__10934 = (___$1 + (1));
___$1 = G__10934;
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
var len__5881__auto___10943 = arguments.length;
var i__5882__auto___10944 = (0);
while(true){
if((i__5882__auto___10944 < len__5881__auto___10943)){
args__5888__auto__.push((arguments[i__5882__auto___10944]));

var G__10945 = (i__5882__auto___10944 + (1));
i__5882__auto___10944 = G__10945;
continue;
} else {
}
break;
}

var argseq__5889__auto__ = ((((0) < args__5888__auto__.length))?(new cljs.core.IndexedSeq(args__5888__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5889__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__10936){
var vec__10937 = p__10936;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10937,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__10937,default$){
return (function (G__10938,G__10940,G__10939){
var or__4842__auto__ = (function (){var and__4830__auto__ = (G__10938.cljs$core$IFn$_invoke$arity$1 ? G__10938.cljs$core$IFn$_invoke$arity$1(G__10939) : G__10938.call(null,G__10939));
if(cljs.core.truth_(and__4830__auto__)){
return G__10939;
} else {
return and__4830__auto__;
}
})();
if(cljs.core.truth_(or__4842__auto__)){
return or__4842__auto__;
} else {
return G__10940;
}
});})(c,vec__10937,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__10937,default$){
return (function (){
var G__10941 = c;
var G__10942 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10941,G__10942) : cljs.core.reset_BANG_.call(null,G__10941,G__10942));
});})(_,c,vec__10937,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq10935){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10935));
});
