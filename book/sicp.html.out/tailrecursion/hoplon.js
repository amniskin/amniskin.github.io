// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__253370_SHARP_){
return (p1__253370_SHARP_ instanceof Node);
}):(function (p1__253371_SHARP_){
try{return p1__253371_SHARP_.nodeType;
}catch (e253372){if((e253372 instanceof Error)){
var _ = e253372;
return null;
} else {
throw e253372;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__253373_SHARP_){
try{return cljs.core.vector_QMARK_(p1__253373_SHARP_);
}catch (e253374){if((e253374 instanceof Error)){
var _ = e253374;
return null;
} else {
throw e253374;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__253375_SHARP_){
try{return cljs.core.seq_QMARK_(p1__253375_SHARP_);
}catch (e253376){if((e253376 instanceof Error)){
var _ = e253376;
return null;
} else {
throw e253376;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__253377_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__253377_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args253378 = [];
var len__6061__auto___253382 = arguments.length;
var i__6062__auto___253383 = (0);
while(true){
if((i__6062__auto___253383 < len__6061__auto___253382)){
args253378.push((arguments[i__6062__auto___253383]));

var G__253384 = (i__6062__auto___253383 + (1));
i__6062__auto___253383 = G__253384;
continue;
} else {
}
break;
}

var G__253380 = args253378.length;
switch (G__253380) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args253378.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e253381){if((e253381 instanceof Error)){
var _ = e253381;
return not_found;
} else {
throw e253381;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args253386 = [];
var len__6061__auto___253389 = arguments.length;
var i__6062__auto___253390 = (0);
while(true){
if((i__6062__auto___253390 < len__6061__auto___253389)){
args253386.push((arguments[i__6062__auto___253390]));

var G__253391 = (i__6062__auto___253390 + (1));
i__6062__auto___253390 = G__253391;
continue;
} else {
}
break;
}

var G__253388 = args253386.length;
switch (G__253388) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args253386.length)].join('')));

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
var G__253401 = args;
var vec__253402 = G__253401;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253402,(0),null);
var args__$1 = cljs.core.nthnext(vec__253402,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__253401__$1 = G__253401;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__253403 = G__253401__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253403,(0),null);
var args__$2 = cljs.core.nthnext(vec__253403,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__253404 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__253401__$1,attr__$2,kids__$2,vec__253403,arg__$1,args__$2,attr,kids,G__253401,vec__253402,arg,args__$1){
return (function (p1__253393_SHARP_,p2__253394_SHARP_,p3__253395_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__253393_SHARP_,p2__253394_SHARP_,p3__253395_SHARP_);
});})(attr__$1,kids__$1,G__253401__$1,attr__$2,kids__$2,vec__253403,arg__$1,args__$2,attr,kids,G__253401,vec__253402,arg,args__$1))
,attr__$2,arg__$1);
var G__253405 = kids__$2;
var G__253406 = args__$2;
attr__$1 = G__253404;
kids__$1 = G__253405;
G__253401__$1 = G__253406;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__253407 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__253408 = kids__$2;
var G__253409 = cljs.core.rest(args__$2);
attr__$1 = G__253407;
kids__$1 = G__253408;
G__253401__$1 = G__253409;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__253410 = attr__$2;
var G__253411 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__253412 = args__$2;
attr__$1 = G__253410;
kids__$1 = G__253411;
G__253401__$1 = G__253412;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__253413 = attr__$2;
var G__253414 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__253415 = args__$2;
attr__$1 = G__253413;
kids__$1 = G__253414;
G__253401__$1 = G__253415;
continue;
} else {
var G__253416 = attr__$2;
var G__253417 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__253418 = args__$2;
attr__$1 = G__253416;
kids__$1 = G__253417;
G__253401__$1 = G__253418;
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
var G__253434_253439 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__253436_253441 = this$__$2;
var G__253437_253442 = k;
var G__253438_253443 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__253436_253441,G__253437_253442,G__253438_253443) : tailrecursion.hoplon.do_BANG_.call(null,G__253436_253441,G__253437_253442,G__253438_253443));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__253420_SHARP_,p2__253421_SHARP_,p3__253422_SHARP_,p4__253419_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__253419_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__253419_SHARP_));
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
var G__253435_253440 = (0);
setTimeout(G__253434_253439,G__253435_253440);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__253444_SHARP_,p2__253445_SHARP_){
return p1__253444_SHARP_.appendChild(p2__253445_SHARP_);
}):(function (p1__253446_SHARP_,p2__253447_SHARP_){
try{return p1__253446_SHARP_.appendChild(p2__253447_SHARP_);
}catch (e253448){if((e253448 instanceof Error)){
var _ = e253448;
return null;
} else {
throw e253448;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__253451 = this$;
var G__253452 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__253451,G__253452) : tailrecursion.hoplon.add_children_BANG_.call(null,G__253451,G__253452));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__253458){
var vec__253464 = p__253458;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253464,(0),null);
var _ = cljs.core.nthnext(vec__253464,(1));
var kids = vec__253464;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__253464,child_cell,_,kids){
return (function (p1__253454_SHARP_,p2__253455_SHARP_,p3__253456_SHARP_,p4__253453_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__253453_SHARP_);
});})(vec__253464,child_cell,_,kids))
);
} else {
var node_253469 = ((function (vec__253464,child_cell,_,kids){
return (function (p1__253457_SHARP_){
if(typeof p1__253457_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__253457_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__253457_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__253457_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__253457_SHARP_)))){
return p1__253457_SHARP_;
} else {
return null;
}
}
});})(vec__253464,child_cell,_,kids))
;
var seq__253465_253470 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__253466_253471 = null;
var count__253467_253472 = (0);
var i__253468_253473 = (0);
while(true){
if((i__253468_253473 < count__253467_253472)){
var x_253474 = chunk__253466_253471.cljs$core$IIndexed$_nth$arity$2(null,i__253468_253473);
var temp__4425__auto___253475 = node_253469(x_253474);
if(cljs.core.truth_(temp__4425__auto___253475)){
var x_253476__$1 = temp__4425__auto___253475;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_253476__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_253476__$1));
} else {
}

var G__253477 = seq__253465_253470;
var G__253478 = chunk__253466_253471;
var G__253479 = count__253467_253472;
var G__253480 = (i__253468_253473 + (1));
seq__253465_253470 = G__253477;
chunk__253466_253471 = G__253478;
count__253467_253472 = G__253479;
i__253468_253473 = G__253480;
continue;
} else {
var temp__4425__auto___253481 = cljs.core.seq(seq__253465_253470);
if(temp__4425__auto___253481){
var seq__253465_253482__$1 = temp__4425__auto___253481;
if(cljs.core.chunked_seq_QMARK_(seq__253465_253482__$1)){
var c__5806__auto___253483 = cljs.core.chunk_first(seq__253465_253482__$1);
var G__253484 = cljs.core.chunk_rest(seq__253465_253482__$1);
var G__253485 = c__5806__auto___253483;
var G__253486 = cljs.core.count(c__5806__auto___253483);
var G__253487 = (0);
seq__253465_253470 = G__253484;
chunk__253466_253471 = G__253485;
count__253467_253472 = G__253486;
i__253468_253473 = G__253487;
continue;
} else {
var x_253488 = cljs.core.first(seq__253465_253482__$1);
var temp__4425__auto___253489__$1 = node_253469(x_253488);
if(cljs.core.truth_(temp__4425__auto___253489__$1)){
var x_253490__$1 = temp__4425__auto___253489__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_253490__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_253490__$1));
} else {
}

var G__253491 = cljs.core.next(seq__253465_253482__$1);
var G__253492 = null;
var G__253493 = (0);
var G__253494 = (0);
seq__253465_253470 = G__253491;
chunk__253466_253471 = G__253492;
count__253467_253472 = G__253493;
i__253468_253473 = G__253494;
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
var G__253502__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__253496 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253496,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253496,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__253497 = this$;
G__253497.hoplonIFn(attr,kids);

return G__253497;
} else {
var G__253498 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__253498,attr);

tailrecursion.hoplon.add_children_BANG_(G__253498,kids);

return G__253498;
}
};
var G__253502 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__253503__i = 0, G__253503__a = new Array(arguments.length -  1);
while (G__253503__i < G__253503__a.length) {G__253503__a[G__253503__i] = arguments[G__253503__i + 1]; ++G__253503__i;}
  args = new cljs.core.IndexedSeq(G__253503__a,0);
} 
return G__253502__delegate.call(this,self__,args);};
G__253502.cljs$lang$maxFixedArity = 1;
G__253502.cljs$lang$applyTo = (function (arglist__253504){
var self__ = cljs.core.first(arglist__253504);
var args = cljs.core.rest(arglist__253504);
return G__253502__delegate(self__,args);
});
G__253502.cljs$core$IFn$_invoke$arity$variadic = G__253502__delegate;
return G__253502;
})()
;

Element.prototype.apply = (function (self__,args253495){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args253495)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__253505__delegate = function (args){
var this$ = this;
var vec__253499 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253499,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253499,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__253500 = this$;
G__253500.hoplonIFn(attr,kids);

return G__253500;
} else {
var G__253501 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__253501,attr);

tailrecursion.hoplon.add_children_BANG_(G__253501,kids);

return G__253501;
}
};
var G__253505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253506__i = 0, G__253506__a = new Array(arguments.length -  0);
while (G__253506__i < G__253506__a.length) {G__253506__a[G__253506__i] = arguments[G__253506__i + 0]; ++G__253506__i;}
  args = new cljs.core.IndexedSeq(G__253506__a,0);
} 
return G__253505__delegate.call(this,args);};
G__253505.cljs$lang$maxFixedArity = 0;
G__253505.cljs$lang$applyTo = (function (arglist__253507){
var args = cljs.core.seq(arglist__253507);
return G__253505__delegate(args);
});
G__253505.cljs$core$IFn$_invoke$arity$variadic = G__253505__delegate;
return G__253505;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__253518__delegate = function (args){
var vec__253513 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253513,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253513,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__253514 = cljs.core.seq(kids);
var chunk__253515 = null;
var count__253516 = (0);
var i__253517 = (0);
while(true){
if((i__253517 < count__253516)){
var k = chunk__253515.cljs$core$IIndexed$_nth$arity$2(null,i__253517);
elem.appendChild(k);

var G__253519 = seq__253514;
var G__253520 = chunk__253515;
var G__253521 = count__253516;
var G__253522 = (i__253517 + (1));
seq__253514 = G__253519;
chunk__253515 = G__253520;
count__253516 = G__253521;
i__253517 = G__253522;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__253514);
if(temp__4425__auto__){
var seq__253514__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__253514__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__253514__$1);
var G__253523 = cljs.core.chunk_rest(seq__253514__$1);
var G__253524 = c__5806__auto__;
var G__253525 = cljs.core.count(c__5806__auto__);
var G__253526 = (0);
seq__253514 = G__253523;
chunk__253515 = G__253524;
count__253516 = G__253525;
i__253517 = G__253526;
continue;
} else {
var k = cljs.core.first(seq__253514__$1);
elem.appendChild(k);

var G__253527 = cljs.core.next(seq__253514__$1);
var G__253528 = null;
var G__253529 = (0);
var G__253530 = (0);
seq__253514 = G__253527;
chunk__253515 = G__253528;
count__253516 = G__253529;
i__253517 = G__253530;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__253518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253531__i = 0, G__253531__a = new Array(arguments.length -  0);
while (G__253531__i < G__253531__a.length) {G__253531__a[G__253531__i] = arguments[G__253531__i + 0]; ++G__253531__i;}
  args = new cljs.core.IndexedSeq(G__253531__a,0);
} 
return G__253518__delegate.call(this,args);};
G__253518.cljs$lang$maxFixedArity = 0;
G__253518.cljs$lang$applyTo = (function (arglist__253532){
var args = cljs.core.seq(arglist__253532);
return G__253518__delegate(args);
});
G__253518.cljs$core$IFn$_invoke$arity$variadic = G__253518__delegate;
return G__253518;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__253533__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__253533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253534__i = 0, G__253534__a = new Array(arguments.length -  0);
while (G__253534__i < G__253534__a.length) {G__253534__a[G__253534__i] = arguments[G__253534__i + 0]; ++G__253534__i;}
  args = new cljs.core.IndexedSeq(G__253534__a,0);
} 
return G__253533__delegate.call(this,args);};
G__253533.cljs$lang$maxFixedArity = 0;
G__253533.cljs$lang$applyTo = (function (arglist__253535){
var args = cljs.core.seq(arglist__253535);
return G__253533__delegate(args);
});
G__253533.cljs$core$IFn$_invoke$arity$variadic = G__253533__delegate;
return G__253533;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___253538 = arguments.length;
var i__6062__auto___253539 = (0);
while(true){
if((i__6062__auto___253539 < len__6061__auto___253538)){
args__6068__auto__.push((arguments[i__6062__auto___253539]));

var G__253540 = (i__6062__auto___253539 + (1));
i__6062__auto___253539 = G__253540;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__253537 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253537,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253537,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq253536){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq253536));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__253541_SHARP_){
return document.createTextNode(p1__253541_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__253542_SHARP_){
return document.createComment(p1__253542_SHARP_);
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
return jQuery("body").on("submit",(function (p1__253543_SHARP_){
var e = (function (){var G__253544 = p1__253543_SHARP_.target;
return jQuery(G__253544);
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
return p1__253543_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args253545 = [];
var len__6061__auto___253548 = arguments.length;
var i__6062__auto___253549 = (0);
while(true){
if((i__6062__auto___253549 < len__6061__auto___253548)){
args253545.push((arguments[i__6062__auto___253549]));

var G__253550 = (i__6062__auto___253549 + (1));
i__6062__auto___253549 = G__253550;
continue;
} else {
}
break;
}

var G__253547 = args253545.length;
switch (G__253547) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args253545.length)].join('')));

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
var args253552 = [];
var len__6061__auto___253555 = arguments.length;
var i__6062__auto___253556 = (0);
while(true){
if((i__6062__auto___253556 < len__6061__auto___253555)){
args253552.push((arguments[i__6062__auto___253556]));

var G__253557 = (i__6062__auto___253556 + (1));
i__6062__auto___253556 = G__253557;
continue;
} else {
}
break;
}

var G__253554 = args253552.length;
switch (G__253554) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args253552.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__253559 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253559) : cljs.core.atom.call(null,G__253559));
})();
var prefer_table__5917__auto__ = (function (){var G__253560 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253560) : cljs.core.atom.call(null,G__253560));
})();
var method_cache__5918__auto__ = (function (){var G__253561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253561) : cljs.core.atom.call(null,G__253561));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__253562 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253562) : cljs.core.atom.call(null,G__253562));
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
var G__253563 = elem;
var G__253564 = cljs.core.cst$kw$attr;
var G__253565 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__253563,G__253564,G__253565) : tailrecursion.hoplon.do_BANG_.call(null,G__253563,G__253564,G__253565));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__253566__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__253566 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__253567__i = 0, G__253567__a = new Array(arguments.length -  2);
while (G__253567__i < G__253567__a.length) {G__253567__a[G__253567__i] = arguments[G__253567__i + 2]; ++G__253567__i;}
  args = new cljs.core.IndexedSeq(G__253567__a,0);
} 
return G__253566__delegate.call(this,elem,_,args);};
G__253566.cljs$lang$maxFixedArity = 2;
G__253566.cljs$lang$applyTo = (function (arglist__253568){
var elem = cljs.core.first(arglist__253568);
arglist__253568 = cljs.core.next(arglist__253568);
var _ = cljs.core.first(arglist__253568);
var args = cljs.core.rest(arglist__253568);
return G__253566__delegate(elem,_,args);
});
G__253566.cljs$core$IFn$_invoke$arity$variadic = G__253566__delegate;
return G__253566;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__253569 = cljs.core.seq(kvs);
var chunk__253570 = null;
var count__253571 = (0);
var i__253572 = (0);
while(true){
if((i__253572 < count__253571)){
var vec__253573 = chunk__253570.cljs$core$IIndexed$_nth$arity$2(null,i__253572);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253573,(1),null);
var k_253575__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_253575__$1);
} else {
e.attr(k_253575__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_253575__$1:v));
}

var G__253576 = seq__253569;
var G__253577 = chunk__253570;
var G__253578 = count__253571;
var G__253579 = (i__253572 + (1));
seq__253569 = G__253576;
chunk__253570 = G__253577;
count__253571 = G__253578;
i__253572 = G__253579;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__253569);
if(temp__4425__auto__){
var seq__253569__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__253569__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__253569__$1);
var G__253580 = cljs.core.chunk_rest(seq__253569__$1);
var G__253581 = c__5806__auto__;
var G__253582 = cljs.core.count(c__5806__auto__);
var G__253583 = (0);
seq__253569 = G__253580;
chunk__253570 = G__253581;
count__253571 = G__253582;
i__253572 = G__253583;
continue;
} else {
var vec__253574 = cljs.core.first(seq__253569__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253574,(1),null);
var k_253584__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_253584__$1);
} else {
e.attr(k_253584__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_253584__$1:v));
}

var G__253585 = cljs.core.next(seq__253569__$1);
var G__253586 = null;
var G__253587 = (0);
var G__253588 = (0);
seq__253569 = G__253585;
chunk__253570 = G__253586;
count__253571 = G__253587;
i__253572 = G__253588;
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
return (function (p1__253589_SHARP_){
return cljs.core.zipmap(p1__253589_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__253590 = cljs.core.seq(clmap);
var chunk__253591 = null;
var count__253592 = (0);
var i__253593 = (0);
while(true){
if((i__253593 < count__253592)){
var vec__253594 = chunk__253591.cljs$core$IIndexed$_nth$arity$2(null,i__253593);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253594,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253594,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__253596 = seq__253590;
var G__253597 = chunk__253591;
var G__253598 = count__253592;
var G__253599 = (i__253593 + (1));
seq__253590 = G__253596;
chunk__253591 = G__253597;
count__253592 = G__253598;
i__253593 = G__253599;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__253590);
if(temp__4425__auto__){
var seq__253590__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__253590__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__253590__$1);
var G__253600 = cljs.core.chunk_rest(seq__253590__$1);
var G__253601 = c__5806__auto__;
var G__253602 = cljs.core.count(c__5806__auto__);
var G__253603 = (0);
seq__253590 = G__253600;
chunk__253591 = G__253601;
count__253592 = G__253602;
i__253593 = G__253603;
continue;
} else {
var vec__253595 = cljs.core.first(seq__253590__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253595,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253595,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__253604 = cljs.core.next(seq__253590__$1);
var G__253605 = null;
var G__253606 = (0);
var G__253607 = (0);
seq__253590 = G__253604;
chunk__253591 = G__253605;
count__253592 = G__253606;
i__253593 = G__253607;
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
var seq__253608 = cljs.core.seq(kvs);
var chunk__253609 = null;
var count__253610 = (0);
var i__253611 = (0);
while(true){
if((i__253611 < count__253610)){
var vec__253612 = chunk__253609.cljs$core$IIndexed$_nth$arity$2(null,i__253611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253612,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__253614 = seq__253608;
var G__253615 = chunk__253609;
var G__253616 = count__253610;
var G__253617 = (i__253611 + (1));
seq__253608 = G__253614;
chunk__253609 = G__253615;
count__253610 = G__253616;
i__253611 = G__253617;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__253608);
if(temp__4425__auto__){
var seq__253608__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__253608__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__253608__$1);
var G__253618 = cljs.core.chunk_rest(seq__253608__$1);
var G__253619 = c__5806__auto__;
var G__253620 = cljs.core.count(c__5806__auto__);
var G__253621 = (0);
seq__253608 = G__253618;
chunk__253609 = G__253619;
count__253610 = G__253620;
i__253611 = G__253621;
continue;
} else {
var vec__253613 = cljs.core.first(seq__253608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253613,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__253622 = cljs.core.next(seq__253608__$1);
var G__253623 = null;
var G__253624 = (0);
var G__253625 = (0);
seq__253608 = G__253622;
chunk__253609 = G__253623;
count__253610 = G__253624;
i__253611 = G__253625;
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
var G__253626 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__253627 = (0);
return setTimeout(G__253626,G__253627);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__253628 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253628) : cljs.core.atom.call(null,G__253628));
})();
var prefer_table__5917__auto__ = (function (){var G__253629 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253629) : cljs.core.atom.call(null,G__253629));
})();
var method_cache__5918__auto__ = (function (){var G__253630 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253630) : cljs.core.atom.call(null,G__253630));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__253631 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253631) : cljs.core.atom.call(null,G__253631));
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
return (function (){var G__253632 = this$__$1.target;
return jQuery(G__253632);
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
var G__253635_253637 = init;
var G__253636_253638 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__253635_253637,G__253636_253638) : f.call(null,G__253635_253637,G__253636_253638));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__253655 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__253655) : cljs.core.atom.call(null,G__253655));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__253656,G__253657){
return (G__253656.cljs$core$IFn$_invoke$arity$1 ? G__253656.cljs$core$IFn$_invoke$arity$1(G__253657) : G__253656.call(null,G__253657));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__253659,G__253658){
return (G__253658.cljs$core$IFn$_invoke$arity$1 ? G__253658.cljs$core$IFn$_invoke$arity$1(G__253659) : G__253658.call(null,G__253659));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__253639_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__253661,G__253662,G__253660){
return (G__253660.cljs$core$IFn$_invoke$arity$2 ? G__253660.cljs$core$IFn$_invoke$arity$2(G__253661,G__253662) : G__253660.call(null,G__253661,G__253662));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,items_seq,p1__253639_SHARP_,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__253640_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__253640_SHARP_) : cljs.core.deref.call(null,p1__253640_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__253640_SHARP_,cljs.core.rest);

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
var seq__253663 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__253664 = null;
var count__253665 = (0);
var i__253666 = (0);
while(true){
if((i__253666 < count__253665)){
var i = chunk__253664.cljs$core$IIndexed$_nth$arity$2(null,i__253666);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__253667 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__253667) : tpl.call(null,G__253667));
}
})());

var G__253669 = seq__253663;
var G__253670 = chunk__253664;
var G__253671 = count__253665;
var G__253672 = (i__253666 + (1));
seq__253663 = G__253669;
chunk__253664 = G__253670;
count__253665 = G__253671;
i__253666 = G__253672;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__253663);
if(temp__4425__auto__){
var seq__253663__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__253663__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__253663__$1);
var G__253673 = cljs.core.chunk_rest(seq__253663__$1);
var G__253674 = c__5806__auto__;
var G__253675 = cljs.core.count(c__5806__auto__);
var G__253676 = (0);
seq__253663 = G__253673;
chunk__253664 = G__253674;
count__253665 = G__253675;
i__253666 = G__253676;
continue;
} else {
var i = cljs.core.first(seq__253663__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__253668 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__253668) : tpl.call(null,G__253668));
}
})());

var G__253677 = cljs.core.next(seq__253663__$1);
var G__253678 = null;
var G__253679 = (0);
var G__253680 = (0);
seq__253663 = G__253677;
chunk__253664 = G__253678;
count__253665 = G__253679;
i__253666 = G__253680;
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

var G__253681 = (___$1 + (1));
___$1 = G__253681;
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
var len__6061__auto___253690 = arguments.length;
var i__6062__auto___253691 = (0);
while(true){
if((i__6062__auto___253691 < len__6061__auto___253690)){
args__6068__auto__.push((arguments[i__6062__auto___253691]));

var G__253692 = (i__6062__auto___253691 + (1));
i__6062__auto___253691 = G__253692;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__253683){
var vec__253684 = p__253683;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__253684,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__253684,default$){
return (function (G__253685,G__253687,G__253686){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__253685.cljs$core$IFn$_invoke$arity$1 ? G__253685.cljs$core$IFn$_invoke$arity$1(G__253686) : G__253685.call(null,G__253686));
if(cljs.core.truth_(and__5010__auto__)){
return G__253686;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__253687;
}
});})(c,vec__253684,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__253684,default$){
return (function (){
var G__253688 = c;
var G__253689 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__253688,G__253689) : cljs.core.reset_BANG_.call(null,G__253688,G__253689));
});})(_,c,vec__253684,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq253682){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq253682));
});
