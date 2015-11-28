// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7419_SHARP_){
return (p1__7419_SHARP_ instanceof Node);
}):(function (p1__7420_SHARP_){
try{return p1__7420_SHARP_.nodeType;
}catch (e7421){if((e7421 instanceof Error)){
var _ = e7421;
return null;
} else {
throw e7421;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__7422_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__7422_SHARP_);
}catch (e7423){if((e7423 instanceof Error)){
var _ = e7423;
return null;
} else {
throw e7423;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__7424_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__7424_SHARP_);
}catch (e7425){if((e7425 instanceof Error)){
var _ = e7425;
return null;
} else {
throw e7425;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__7426_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__7426_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args7427 = [];
var len__6061__auto___7431 = arguments.length;
var i__6062__auto___7432 = (0);
while(true){
if((i__6062__auto___7432 < len__6061__auto___7431)){
args7427.push((arguments[i__6062__auto___7432]));

var G__7433 = (i__6062__auto___7432 + (1));
i__6062__auto___7432 = G__7433;
continue;
} else {
}
break;
}

var G__7429 = args7427.length;
switch (G__7429) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7427.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e7430){if((e7430 instanceof Error)){
var _ = e7430;
return not_found;
} else {
throw e7430;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args7435 = [];
var len__6061__auto___7438 = arguments.length;
var i__6062__auto___7439 = (0);
while(true){
if((i__6062__auto___7439 < len__6061__auto___7438)){
args7435.push((arguments[i__6062__auto___7439]));

var G__7440 = (i__6062__auto___7439 + (1));
i__6062__auto___7439 = G__7440;
continue;
} else {
}
break;
}

var G__7437 = args7435.length;
switch (G__7437) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7435.length)].join('')));

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
var G__7450 = args;
var vec__7451 = G__7450;
var arg = cljs.core.nth.call(null,vec__7451,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__7451,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__7450__$1 = G__7450;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__7452 = G__7450__$1;
var arg__$1 = cljs.core.nth.call(null,vec__7452,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__7452,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__7453 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__7450__$1,attr__$2,kids__$2,vec__7452,arg__$1,args__$2,attr,kids,G__7450,vec__7451,arg,args__$1){
return (function (p1__7442_SHARP_,p2__7443_SHARP_,p3__7444_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__7442_SHARP_,p2__7443_SHARP_,p3__7444_SHARP_);
});})(attr__$1,kids__$1,G__7450__$1,attr__$2,kids__$2,vec__7452,arg__$1,args__$2,attr,kids,G__7450,vec__7451,arg,args__$1))
,attr__$2,arg__$1);
var G__7454 = kids__$2;
var G__7455 = args__$2;
attr__$1 = G__7453;
kids__$1 = G__7454;
G__7450__$1 = G__7455;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__7456 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__7457 = kids__$2;
var G__7458 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__7456;
kids__$1 = G__7457;
G__7450__$1 = G__7458;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__7459 = attr__$2;
var G__7460 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__7461 = args__$2;
attr__$1 = G__7459;
kids__$1 = G__7460;
G__7450__$1 = G__7461;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__7462 = attr__$2;
var G__7463 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__7464 = args__$2;
attr__$1 = G__7462;
kids__$1 = G__7463;
G__7450__$1 = G__7464;
continue;
} else {
var G__7465 = attr__$2;
var G__7466 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__7467 = args__$2;
attr__$1 = G__7465;
kids__$1 = G__7466;
G__7450__$1 = G__7467;
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
return (function (p1__7469_SHARP_,p2__7470_SHARP_,p3__7471_SHARP_,p4__7468_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__7468_SHARP_);
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7472_SHARP_,p2__7473_SHARP_){
return p1__7472_SHARP_.appendChild(p2__7473_SHARP_);
}):(function (p1__7474_SHARP_,p2__7475_SHARP_){
try{return p1__7474_SHARP_.appendChild(p2__7475_SHARP_);
}catch (e7476){if((e7476 instanceof Error)){
var _ = e7476;
return null;
} else {
throw e7476;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__7482){
var vec__7488 = p__7482;
var child_cell = cljs.core.nth.call(null,vec__7488,(0),null);
var _ = cljs.core.nthnext.call(null,vec__7488,(1));
var kids = vec__7488;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__7488,child_cell,_,kids){
return (function (p1__7478_SHARP_,p2__7479_SHARP_,p3__7480_SHARP_,p4__7477_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__7477_SHARP_);
});})(vec__7488,child_cell,_,kids))
);
} else {
var node_7493 = ((function (vec__7488,child_cell,_,kids){
return (function (p1__7481_SHARP_){
if(typeof p1__7481_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__7481_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__7481_SHARP_))){
return p1__7481_SHARP_;
} else {
return null;
}
}
});})(vec__7488,child_cell,_,kids))
;
var seq__7489_7494 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__7490_7495 = null;
var count__7491_7496 = (0);
var i__7492_7497 = (0);
while(true){
if((i__7492_7497 < count__7491_7496)){
var x_7498 = cljs.core._nth.call(null,chunk__7490_7495,i__7492_7497);
var temp__4425__auto___7499 = node_7493.call(null,x_7498);
if(cljs.core.truth_(temp__4425__auto___7499)){
var x_7500__$1 = temp__4425__auto___7499;
tailrecursion.hoplon.append_child.call(null,this$,x_7500__$1);
} else {
}

var G__7501 = seq__7489_7494;
var G__7502 = chunk__7490_7495;
var G__7503 = count__7491_7496;
var G__7504 = (i__7492_7497 + (1));
seq__7489_7494 = G__7501;
chunk__7490_7495 = G__7502;
count__7491_7496 = G__7503;
i__7492_7497 = G__7504;
continue;
} else {
var temp__4425__auto___7505 = cljs.core.seq.call(null,seq__7489_7494);
if(temp__4425__auto___7505){
var seq__7489_7506__$1 = temp__4425__auto___7505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7489_7506__$1)){
var c__5806__auto___7507 = cljs.core.chunk_first.call(null,seq__7489_7506__$1);
var G__7508 = cljs.core.chunk_rest.call(null,seq__7489_7506__$1);
var G__7509 = c__5806__auto___7507;
var G__7510 = cljs.core.count.call(null,c__5806__auto___7507);
var G__7511 = (0);
seq__7489_7494 = G__7508;
chunk__7490_7495 = G__7509;
count__7491_7496 = G__7510;
i__7492_7497 = G__7511;
continue;
} else {
var x_7512 = cljs.core.first.call(null,seq__7489_7506__$1);
var temp__4425__auto___7513__$1 = node_7493.call(null,x_7512);
if(cljs.core.truth_(temp__4425__auto___7513__$1)){
var x_7514__$1 = temp__4425__auto___7513__$1;
tailrecursion.hoplon.append_child.call(null,this$,x_7514__$1);
} else {
}

var G__7515 = cljs.core.next.call(null,seq__7489_7506__$1);
var G__7516 = null;
var G__7517 = (0);
var G__7518 = (0);
seq__7489_7494 = G__7515;
chunk__7490_7495 = G__7516;
count__7491_7496 = G__7517;
i__7492_7497 = G__7518;
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
var G__7526__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__7520 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7520,(0),null);
var kids = cljs.core.nth.call(null,vec__7520,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7521 = this$;
G__7521.hoplonIFn(attr,kids);

return G__7521;
} else {
var G__7522 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7522,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7522,kids);

return G__7522;
}
};
var G__7526 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__7527__i = 0, G__7527__a = new Array(arguments.length -  1);
while (G__7527__i < G__7527__a.length) {G__7527__a[G__7527__i] = arguments[G__7527__i + 1]; ++G__7527__i;}
  args = new cljs.core.IndexedSeq(G__7527__a,0);
} 
return G__7526__delegate.call(this,self__,args);};
G__7526.cljs$lang$maxFixedArity = 1;
G__7526.cljs$lang$applyTo = (function (arglist__7528){
var self__ = cljs.core.first(arglist__7528);
var args = cljs.core.rest(arglist__7528);
return G__7526__delegate(self__,args);
});
G__7526.cljs$core$IFn$_invoke$arity$variadic = G__7526__delegate;
return G__7526;
})()
;

Element.prototype.apply = (function (self__,args7519){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7519)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__7529__delegate = function (args){
var this$ = this;
var vec__7523 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7523,(0),null);
var kids = cljs.core.nth.call(null,vec__7523,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__7524 = this$;
G__7524.hoplonIFn(attr,kids);

return G__7524;
} else {
var G__7525 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7525,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7525,kids);

return G__7525;
}
};
var G__7529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7530__i = 0, G__7530__a = new Array(arguments.length -  0);
while (G__7530__i < G__7530__a.length) {G__7530__a[G__7530__i] = arguments[G__7530__i + 0]; ++G__7530__i;}
  args = new cljs.core.IndexedSeq(G__7530__a,0);
} 
return G__7529__delegate.call(this,args);};
G__7529.cljs$lang$maxFixedArity = 0;
G__7529.cljs$lang$applyTo = (function (arglist__7531){
var args = cljs.core.seq(arglist__7531);
return G__7529__delegate(args);
});
G__7529.cljs$core$IFn$_invoke$arity$variadic = G__7529__delegate;
return G__7529;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__7542__delegate = function (args){
var vec__7537 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7537,(0),null);
var kids = cljs.core.nth.call(null,vec__7537,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__7538 = cljs.core.seq.call(null,kids);
var chunk__7539 = null;
var count__7540 = (0);
var i__7541 = (0);
while(true){
if((i__7541 < count__7540)){
var k = cljs.core._nth.call(null,chunk__7539,i__7541);
elem.appendChild(k);

var G__7543 = seq__7538;
var G__7544 = chunk__7539;
var G__7545 = count__7540;
var G__7546 = (i__7541 + (1));
seq__7538 = G__7543;
chunk__7539 = G__7544;
count__7540 = G__7545;
i__7541 = G__7546;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7538);
if(temp__4425__auto__){
var seq__7538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7538__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7538__$1);
var G__7547 = cljs.core.chunk_rest.call(null,seq__7538__$1);
var G__7548 = c__5806__auto__;
var G__7549 = cljs.core.count.call(null,c__5806__auto__);
var G__7550 = (0);
seq__7538 = G__7547;
chunk__7539 = G__7548;
count__7540 = G__7549;
i__7541 = G__7550;
continue;
} else {
var k = cljs.core.first.call(null,seq__7538__$1);
elem.appendChild(k);

var G__7551 = cljs.core.next.call(null,seq__7538__$1);
var G__7552 = null;
var G__7553 = (0);
var G__7554 = (0);
seq__7538 = G__7551;
chunk__7539 = G__7552;
count__7540 = G__7553;
i__7541 = G__7554;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__7542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7555__i = 0, G__7555__a = new Array(arguments.length -  0);
while (G__7555__i < G__7555__a.length) {G__7555__a[G__7555__i] = arguments[G__7555__i + 0]; ++G__7555__i;}
  args = new cljs.core.IndexedSeq(G__7555__a,0);
} 
return G__7542__delegate.call(this,args);};
G__7542.cljs$lang$maxFixedArity = 0;
G__7542.cljs$lang$applyTo = (function (arglist__7556){
var args = cljs.core.seq(arglist__7556);
return G__7542__delegate(args);
});
G__7542.cljs$core$IFn$_invoke$arity$variadic = G__7542__delegate;
return G__7542;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__7557__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__7557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7558__i = 0, G__7558__a = new Array(arguments.length -  0);
while (G__7558__i < G__7558__a.length) {G__7558__a[G__7558__i] = arguments[G__7558__i + 0]; ++G__7558__i;}
  args = new cljs.core.IndexedSeq(G__7558__a,0);
} 
return G__7557__delegate.call(this,args);};
G__7557.cljs$lang$maxFixedArity = 0;
G__7557.cljs$lang$applyTo = (function (arglist__7559){
var args = cljs.core.seq(arglist__7559);
return G__7557__delegate(args);
});
G__7557.cljs$core$IFn$_invoke$arity$variadic = G__7557__delegate;
return G__7557;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___7562 = arguments.length;
var i__6062__auto___7563 = (0);
while(true){
if((i__6062__auto___7563 < len__6061__auto___7562)){
args__6068__auto__.push((arguments[i__6062__auto___7563]));

var G__7564 = (i__6062__auto___7563 + (1));
i__6062__auto___7563 = G__7564;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7561 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7561,(0),null);
var _ = cljs.core.nth.call(null,vec__7561,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq7560){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7560));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__7565_SHARP_){
return document.createTextNode(p1__7565_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__7566_SHARP_){
return document.createComment(p1__7566_SHARP_);
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
return jQuery("body").on("submit",(function (p1__7567_SHARP_){
var e = jQuery(p1__7567_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__7567_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args7568 = [];
var len__6061__auto___7571 = arguments.length;
var i__6062__auto___7572 = (0);
while(true){
if((i__6062__auto___7572 < len__6061__auto___7571)){
args7568.push((arguments[i__6062__auto___7572]));

var G__7573 = (i__6062__auto___7572 + (1));
i__6062__auto___7572 = G__7573;
continue;
} else {
}
break;
}

var G__7570 = args7568.length;
switch (G__7570) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7568.length)].join('')));

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
var args7575 = [];
var len__6061__auto___7578 = arguments.length;
var i__6062__auto___7579 = (0);
while(true){
if((i__6062__auto___7579 < len__6061__auto___7578)){
args7575.push((arguments[i__6062__auto___7579]));

var G__7580 = (i__6062__auto___7579 + (1));
i__6062__auto___7579 = G__7580;
continue;
} else {
}
break;
}

var G__7577 = args7575.length;
switch (G__7577) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7575.length)].join('')));

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
var G__7582__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__7582 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__7583__i = 0, G__7583__a = new Array(arguments.length -  2);
while (G__7583__i < G__7583__a.length) {G__7583__a[G__7583__i] = arguments[G__7583__i + 2]; ++G__7583__i;}
  args = new cljs.core.IndexedSeq(G__7583__a,0);
} 
return G__7582__delegate.call(this,elem,_,args);};
G__7582.cljs$lang$maxFixedArity = 2;
G__7582.cljs$lang$applyTo = (function (arglist__7584){
var elem = cljs.core.first(arglist__7584);
arglist__7584 = cljs.core.next(arglist__7584);
var _ = cljs.core.first(arglist__7584);
var args = cljs.core.rest(arglist__7584);
return G__7582__delegate(elem,_,args);
});
G__7582.cljs$core$IFn$_invoke$arity$variadic = G__7582__delegate;
return G__7582;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7585 = cljs.core.seq.call(null,kvs);
var chunk__7586 = null;
var count__7587 = (0);
var i__7588 = (0);
while(true){
if((i__7588 < count__7587)){
var vec__7589 = cljs.core._nth.call(null,chunk__7586,i__7588);
var k = cljs.core.nth.call(null,vec__7589,(0),null);
var v = cljs.core.nth.call(null,vec__7589,(1),null);
var k_7591__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7591__$1);
} else {
e.attr(k_7591__$1,((cljs.core._EQ_.call(null,true,v))?k_7591__$1:v));
}

var G__7592 = seq__7585;
var G__7593 = chunk__7586;
var G__7594 = count__7587;
var G__7595 = (i__7588 + (1));
seq__7585 = G__7592;
chunk__7586 = G__7593;
count__7587 = G__7594;
i__7588 = G__7595;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7585);
if(temp__4425__auto__){
var seq__7585__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7585__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7585__$1);
var G__7596 = cljs.core.chunk_rest.call(null,seq__7585__$1);
var G__7597 = c__5806__auto__;
var G__7598 = cljs.core.count.call(null,c__5806__auto__);
var G__7599 = (0);
seq__7585 = G__7596;
chunk__7586 = G__7597;
count__7587 = G__7598;
i__7588 = G__7599;
continue;
} else {
var vec__7590 = cljs.core.first.call(null,seq__7585__$1);
var k = cljs.core.nth.call(null,vec__7590,(0),null);
var v = cljs.core.nth.call(null,vec__7590,(1),null);
var k_7600__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7600__$1);
} else {
e.attr(k_7600__$1,((cljs.core._EQ_.call(null,true,v))?k_7600__$1:v));
}

var G__7601 = cljs.core.next.call(null,seq__7585__$1);
var G__7602 = null;
var G__7603 = (0);
var G__7604 = (0);
seq__7585 = G__7601;
chunk__7586 = G__7602;
count__7587 = G__7603;
i__7588 = G__7604;
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
return (function (p1__7605_SHARP_){
return cljs.core.zipmap.call(null,p1__7605_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__7606 = cljs.core.seq.call(null,clmap);
var chunk__7607 = null;
var count__7608 = (0);
var i__7609 = (0);
while(true){
if((i__7609 < count__7608)){
var vec__7610 = cljs.core._nth.call(null,chunk__7607,i__7609);
var c = cljs.core.nth.call(null,vec__7610,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7610,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7612 = seq__7606;
var G__7613 = chunk__7607;
var G__7614 = count__7608;
var G__7615 = (i__7609 + (1));
seq__7606 = G__7612;
chunk__7607 = G__7613;
count__7608 = G__7614;
i__7609 = G__7615;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7606);
if(temp__4425__auto__){
var seq__7606__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7606__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7606__$1);
var G__7616 = cljs.core.chunk_rest.call(null,seq__7606__$1);
var G__7617 = c__5806__auto__;
var G__7618 = cljs.core.count.call(null,c__5806__auto__);
var G__7619 = (0);
seq__7606 = G__7616;
chunk__7607 = G__7617;
count__7608 = G__7618;
i__7609 = G__7619;
continue;
} else {
var vec__7611 = cljs.core.first.call(null,seq__7606__$1);
var c = cljs.core.nth.call(null,vec__7611,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7611,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7620 = cljs.core.next.call(null,seq__7606__$1);
var G__7621 = null;
var G__7622 = (0);
var G__7623 = (0);
seq__7606 = G__7620;
chunk__7607 = G__7621;
count__7608 = G__7622;
i__7609 = G__7623;
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
var seq__7624 = cljs.core.seq.call(null,kvs);
var chunk__7625 = null;
var count__7626 = (0);
var i__7627 = (0);
while(true){
if((i__7627 < count__7626)){
var vec__7628 = cljs.core._nth.call(null,chunk__7625,i__7627);
var k = cljs.core.nth.call(null,vec__7628,(0),null);
var v = cljs.core.nth.call(null,vec__7628,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7630 = seq__7624;
var G__7631 = chunk__7625;
var G__7632 = count__7626;
var G__7633 = (i__7627 + (1));
seq__7624 = G__7630;
chunk__7625 = G__7631;
count__7626 = G__7632;
i__7627 = G__7633;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7624);
if(temp__4425__auto__){
var seq__7624__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7624__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7624__$1);
var G__7634 = cljs.core.chunk_rest.call(null,seq__7624__$1);
var G__7635 = c__5806__auto__;
var G__7636 = cljs.core.count.call(null,c__5806__auto__);
var G__7637 = (0);
seq__7624 = G__7634;
chunk__7625 = G__7635;
count__7626 = G__7636;
i__7627 = G__7637;
continue;
} else {
var vec__7629 = cljs.core.first.call(null,seq__7624__$1);
var k = cljs.core.nth.call(null,vec__7629,(0),null);
var v = cljs.core.nth.call(null,vec__7629,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7638 = cljs.core.next.call(null,seq__7624__$1);
var G__7639 = null;
var G__7640 = (0);
var G__7641 = (0);
seq__7624 = G__7638;
chunk__7625 = G__7639;
count__7626 = G__7640;
i__7627 = G__7641;
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
return (function (G__7655,G__7656){
return G__7655.call(null,G__7656);
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq){
return (function (G__7658,G__7657){
return G__7657.call(null,G__7658);
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__7642_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__7660,G__7661,G__7659){
return G__7659.call(null,G__7660,G__7661);
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__7642_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__7643_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__7643_SHARP_));
cljs.core.swap_BANG_.call(null,p1__7643_SHARP_,cljs.core.rest);

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
var seq__7662 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__7663 = null;
var count__7664 = (0);
var i__7665 = (0);
while(true){
if((i__7665 < count__7664)){
var i = cljs.core._nth.call(null,chunk__7663,i__7665);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__7666 = seq__7662;
var G__7667 = chunk__7663;
var G__7668 = count__7664;
var G__7669 = (i__7665 + (1));
seq__7662 = G__7666;
chunk__7663 = G__7667;
count__7664 = G__7668;
i__7665 = G__7669;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7662);
if(temp__4425__auto__){
var seq__7662__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7662__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7662__$1);
var G__7670 = cljs.core.chunk_rest.call(null,seq__7662__$1);
var G__7671 = c__5806__auto__;
var G__7672 = cljs.core.count.call(null,c__5806__auto__);
var G__7673 = (0);
seq__7662 = G__7670;
chunk__7663 = G__7671;
count__7664 = G__7672;
i__7665 = G__7673;
continue;
} else {
var i = cljs.core.first.call(null,seq__7662__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__7674 = cljs.core.next.call(null,seq__7662__$1);
var G__7675 = null;
var G__7676 = (0);
var G__7677 = (0);
seq__7662 = G__7674;
chunk__7663 = G__7675;
count__7664 = G__7676;
i__7665 = G__7677;
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

var G__7678 = (___$1 + (1));
___$1 = G__7678;
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
var len__6061__auto___7685 = arguments.length;
var i__6062__auto___7686 = (0);
while(true){
if((i__6062__auto___7686 < len__6061__auto___7685)){
args__6068__auto__.push((arguments[i__6062__auto___7686]));

var G__7687 = (i__6062__auto___7686 + (1));
i__6062__auto___7686 = G__7687;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__7680){
var vec__7681 = p__7680;
var default$ = cljs.core.nth.call(null,vec__7681,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__7681,default$){
return (function (G__7682,G__7684,G__7683){
var or__5022__auto__ = (function (){var and__5010__auto__ = G__7682.call(null,G__7683);
if(cljs.core.truth_(and__5010__auto__)){
return G__7683;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__7684;
}
});})(c,vec__7681,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__7681,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__7681,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq7679){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7679));
});

//# sourceMappingURL=hoplon.js.map