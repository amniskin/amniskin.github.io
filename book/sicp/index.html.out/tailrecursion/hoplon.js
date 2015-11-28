// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__295212_SHARP_){
return (p1__295212_SHARP_ instanceof Node);
}):(function (p1__295213_SHARP_){
try{return p1__295213_SHARP_.nodeType;
}catch (e295214){if((e295214 instanceof Error)){
var _ = e295214;
return null;
} else {
throw e295214;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__295215_SHARP_){
try{return cljs.core.vector_QMARK_(p1__295215_SHARP_);
}catch (e295216){if((e295216 instanceof Error)){
var _ = e295216;
return null;
} else {
throw e295216;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__295217_SHARP_){
try{return cljs.core.seq_QMARK_(p1__295217_SHARP_);
}catch (e295218){if((e295218 instanceof Error)){
var _ = e295218;
return null;
} else {
throw e295218;

}
}}));
cljs.core.set_print_fn_BANG_((function (p1__295219_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__295219_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args295220 = [];
var len__6061__auto___295224 = arguments.length;
var i__6062__auto___295225 = (0);
while(true){
if((i__6062__auto___295225 < len__6061__auto___295224)){
args295220.push((arguments[i__6062__auto___295225]));

var G__295226 = (i__6062__auto___295225 + (1));
i__6062__auto___295225 = G__295226;
continue;
} else {
}
break;
}

var G__295222 = args295220.length;
switch (G__295222) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295220.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e295223){if((e295223 instanceof Error)){
var _ = e295223;
return not_found;
} else {
throw e295223;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args295228 = [];
var len__6061__auto___295231 = arguments.length;
var i__6062__auto___295232 = (0);
while(true){
if((i__6062__auto___295232 < len__6061__auto___295231)){
args295228.push((arguments[i__6062__auto___295232]));

var G__295233 = (i__6062__auto___295232 + (1));
i__6062__auto___295232 = G__295233;
continue;
} else {
}
break;
}

var G__295230 = args295228.length;
switch (G__295230) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295228.length)].join('')));

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
var G__295243 = args;
var vec__295244 = G__295243;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295244,(0),null);
var args__$1 = cljs.core.nthnext(vec__295244,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__295243__$1 = G__295243;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__295245 = G__295243__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295245,(0),null);
var args__$2 = cljs.core.nthnext(vec__295245,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__295246 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__295243__$1,attr__$2,kids__$2,vec__295245,arg__$1,args__$2,attr,kids,G__295243,vec__295244,arg,args__$1){
return (function (p1__295235_SHARP_,p2__295236_SHARP_,p3__295237_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__295235_SHARP_,p2__295236_SHARP_,p3__295237_SHARP_);
});})(attr__$1,kids__$1,G__295243__$1,attr__$2,kids__$2,vec__295245,arg__$1,args__$2,attr,kids,G__295243,vec__295244,arg,args__$1))
,attr__$2,arg__$1);
var G__295247 = kids__$2;
var G__295248 = args__$2;
attr__$1 = G__295246;
kids__$1 = G__295247;
G__295243__$1 = G__295248;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__295249 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__295250 = kids__$2;
var G__295251 = cljs.core.rest(args__$2);
attr__$1 = G__295249;
kids__$1 = G__295250;
G__295243__$1 = G__295251;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__295252 = attr__$2;
var G__295253 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__295254 = args__$2;
attr__$1 = G__295252;
kids__$1 = G__295253;
G__295243__$1 = G__295254;
continue;
} else {
if(cljs.core.truth_((tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__295255 = attr__$2;
var G__295256 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__295257 = args__$2;
attr__$1 = G__295255;
kids__$1 = G__295256;
G__295243__$1 = G__295257;
continue;
} else {
var G__295258 = attr__$2;
var G__295259 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__295260 = args__$2;
attr__$1 = G__295258;
kids__$1 = G__295259;
G__295243__$1 = G__295260;
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
var G__295276_295281 = ((function (this$__$1){
return (function (){
return cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v))){
var G__295278_295283 = this$__$2;
var G__295279_295284 = k;
var G__295280_295285 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__295278_295283,G__295279_295284,G__295280_295285) : tailrecursion.hoplon.do_BANG_.call(null,G__295278_295283,G__295279_295284,G__295280_295285));

cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (this$__$1){
return (function (p1__295262_SHARP_,p2__295263_SHARP_,p3__295264_SHARP_,p4__295261_SHARP_){
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$2,k,p4__295261_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__295261_SHARP_));
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
var G__295277_295282 = (0);
setTimeout(G__295276_295281,G__295277_295282);

return this$__$1;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__295286_SHARP_,p2__295287_SHARP_){
return p1__295286_SHARP_.appendChild(p2__295287_SHARP_);
}):(function (p1__295288_SHARP_,p2__295289_SHARP_){
try{return p1__295288_SHARP_.appendChild(p2__295289_SHARP_);
}catch (e295290){if((e295290 instanceof Error)){
var _ = e295290;
return null;
} else {
throw e295290;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

var G__295293 = this$;
var G__295294 = ((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null));
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(G__295293,G__295294) : tailrecursion.hoplon.add_children_BANG_.call(null,G__295293,G__295294));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__295300){
var vec__295306 = p__295300;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295306,(0),null);
var _ = cljs.core.nthnext(vec__295306,(1));
var kids = vec__295306;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell))){
tailrecursion.hoplon.replace_children_BANG_(this$,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(child_cell) : cljs.core.deref.call(null,child_cell)));

cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__295306,child_cell,_,kids){
return (function (p1__295296_SHARP_,p2__295297_SHARP_,p3__295298_SHARP_,p4__295295_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_(this$,p4__295295_SHARP_);
});})(vec__295306,child_cell,_,kids))
);
} else {
var node_295311 = ((function (vec__295306,child_cell,_,kids){
return (function (p1__295299_SHARP_){
if(typeof p1__295299_SHARP_ === 'string'){
return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__295299_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__295299_SHARP_));
} else {
if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__295299_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__295299_SHARP_)))){
return p1__295299_SHARP_;
} else {
return null;
}
}
});})(vec__295306,child_cell,_,kids))
;
var seq__295307_295312 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__295308_295313 = null;
var count__295309_295314 = (0);
var i__295310_295315 = (0);
while(true){
if((i__295310_295315 < count__295309_295314)){
var x_295316 = chunk__295308_295313.cljs$core$IIndexed$_nth$arity$2(null,i__295310_295315);
var temp__4425__auto___295317 = node_295311(x_295316);
if(cljs.core.truth_(temp__4425__auto___295317)){
var x_295318__$1 = temp__4425__auto___295317;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_295318__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_295318__$1));
} else {
}

var G__295319 = seq__295307_295312;
var G__295320 = chunk__295308_295313;
var G__295321 = count__295309_295314;
var G__295322 = (i__295310_295315 + (1));
seq__295307_295312 = G__295319;
chunk__295308_295313 = G__295320;
count__295309_295314 = G__295321;
i__295310_295315 = G__295322;
continue;
} else {
var temp__4425__auto___295323 = cljs.core.seq(seq__295307_295312);
if(temp__4425__auto___295323){
var seq__295307_295324__$1 = temp__4425__auto___295323;
if(cljs.core.chunked_seq_QMARK_(seq__295307_295324__$1)){
var c__5806__auto___295325 = cljs.core.chunk_first(seq__295307_295324__$1);
var G__295326 = cljs.core.chunk_rest(seq__295307_295324__$1);
var G__295327 = c__5806__auto___295325;
var G__295328 = cljs.core.count(c__5806__auto___295325);
var G__295329 = (0);
seq__295307_295312 = G__295326;
chunk__295308_295313 = G__295327;
count__295309_295314 = G__295328;
i__295310_295315 = G__295329;
continue;
} else {
var x_295330 = cljs.core.first(seq__295307_295324__$1);
var temp__4425__auto___295331__$1 = node_295311(x_295330);
if(cljs.core.truth_(temp__4425__auto___295331__$1)){
var x_295332__$1 = temp__4425__auto___295331__$1;
(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_295332__$1) : tailrecursion.hoplon.append_child.call(null,this$,x_295332__$1));
} else {
}

var G__295333 = cljs.core.next(seq__295307_295324__$1);
var G__295334 = null;
var G__295335 = (0);
var G__295336 = (0);
seq__295307_295312 = G__295333;
chunk__295308_295313 = G__295334;
count__295309_295314 = G__295335;
i__295310_295315 = G__295336;
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
var G__295344__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__295338 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295338,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295338,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__295339 = this$;
G__295339.hoplonIFn(attr,kids);

return G__295339;
} else {
var G__295340 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__295340,attr);

tailrecursion.hoplon.add_children_BANG_(G__295340,kids);

return G__295340;
}
};
var G__295344 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__295345__i = 0, G__295345__a = new Array(arguments.length -  1);
while (G__295345__i < G__295345__a.length) {G__295345__a[G__295345__i] = arguments[G__295345__i + 1]; ++G__295345__i;}
  args = new cljs.core.IndexedSeq(G__295345__a,0);
} 
return G__295344__delegate.call(this,self__,args);};
G__295344.cljs$lang$maxFixedArity = 1;
G__295344.cljs$lang$applyTo = (function (arglist__295346){
var self__ = cljs.core.first(arglist__295346);
var args = cljs.core.rest(arglist__295346);
return G__295344__delegate(self__,args);
});
G__295344.cljs$core$IFn$_invoke$arity$variadic = G__295344__delegate;
return G__295344;
})()
;

Element.prototype.apply = (function (self__,args295337){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args295337)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__295347__delegate = function (args){
var this$ = this;
var vec__295341 = tailrecursion.hoplon.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295341,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295341,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__295342 = this$;
G__295342.hoplonIFn(attr,kids);

return G__295342;
} else {
var G__295343 = this$;
tailrecursion.hoplon.add_attributes_BANG_(G__295343,attr);

tailrecursion.hoplon.add_children_BANG_(G__295343,kids);

return G__295343;
}
};
var G__295347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295348__i = 0, G__295348__a = new Array(arguments.length -  0);
while (G__295348__i < G__295348__a.length) {G__295348__a[G__295348__i] = arguments[G__295348__i + 0]; ++G__295348__i;}
  args = new cljs.core.IndexedSeq(G__295348__a,0);
} 
return G__295347__delegate.call(this,args);};
G__295347.cljs$lang$maxFixedArity = 0;
G__295347.cljs$lang$applyTo = (function (arglist__295349){
var args = cljs.core.seq(arglist__295349);
return G__295347__delegate(args);
});
G__295347.cljs$core$IFn$_invoke$arity$variadic = G__295347__delegate;
return G__295347;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__295360__delegate = function (args){
var vec__295355 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295355,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295355,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_(elem,attrs);

jQuery(elem).empty();

var seq__295356 = cljs.core.seq(kids);
var chunk__295357 = null;
var count__295358 = (0);
var i__295359 = (0);
while(true){
if((i__295359 < count__295358)){
var k = chunk__295357.cljs$core$IIndexed$_nth$arity$2(null,i__295359);
elem.appendChild(k);

var G__295361 = seq__295356;
var G__295362 = chunk__295357;
var G__295363 = count__295358;
var G__295364 = (i__295359 + (1));
seq__295356 = G__295361;
chunk__295357 = G__295362;
count__295358 = G__295363;
i__295359 = G__295364;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295356);
if(temp__4425__auto__){
var seq__295356__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295356__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__295356__$1);
var G__295365 = cljs.core.chunk_rest(seq__295356__$1);
var G__295366 = c__5806__auto__;
var G__295367 = cljs.core.count(c__5806__auto__);
var G__295368 = (0);
seq__295356 = G__295365;
chunk__295357 = G__295366;
count__295358 = G__295367;
i__295359 = G__295368;
continue;
} else {
var k = cljs.core.first(seq__295356__$1);
elem.appendChild(k);

var G__295369 = cljs.core.next(seq__295356__$1);
var G__295370 = null;
var G__295371 = (0);
var G__295372 = (0);
seq__295356 = G__295369;
chunk__295357 = G__295370;
count__295358 = G__295371;
i__295359 = G__295372;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__295360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295373__i = 0, G__295373__a = new Array(arguments.length -  0);
while (G__295373__i < G__295373__a.length) {G__295373__a[G__295373__i] = arguments[G__295373__i + 0]; ++G__295373__i;}
  args = new cljs.core.IndexedSeq(G__295373__a,0);
} 
return G__295360__delegate.call(this,args);};
G__295360.cljs$lang$maxFixedArity = 0;
G__295360.cljs$lang$applyTo = (function (arglist__295374){
var args = cljs.core.seq(arglist__295374);
return G__295360__delegate(args);
});
G__295360.cljs$core$IFn$_invoke$arity$variadic = G__295360__delegate;
return G__295360;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__295375__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__295375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295376__i = 0, G__295376__a = new Array(arguments.length -  0);
while (G__295376__i < G__295376__a.length) {G__295376__a[G__295376__i] = arguments[G__295376__i + 0]; ++G__295376__i;}
  args = new cljs.core.IndexedSeq(G__295376__a,0);
} 
return G__295375__delegate.call(this,args);};
G__295375.cljs$lang$maxFixedArity = 0;
G__295375.cljs$lang$applyTo = (function (arglist__295377){
var args = cljs.core.seq(arglist__295377);
return G__295375__delegate(args);
});
G__295375.cljs$core$IFn$_invoke$arity$variadic = G__295375__delegate;
return G__295375;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___295380 = arguments.length;
var i__6062__auto___295381 = (0);
while(true){
if((i__6062__auto___295381 < len__6061__auto___295380)){
args__6068__auto__.push((arguments[i__6062__auto___295381]));

var G__295382 = (i__6062__auto___295381 + (1));
i__6062__auto___295381 = G__295382;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__295379 = tailrecursion.hoplon.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295379,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295379,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq295378){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq295378));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__295383_SHARP_){
return document.createTextNode(p1__295383_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__295384_SHARP_){
return document.createComment(p1__295384_SHARP_);
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
return jQuery("body").on("submit",(function (p1__295385_SHARP_){
var e = (function (){var G__295386 = p1__295385_SHARP_.target;
return jQuery(G__295386);
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
return p1__295385_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args295387 = [];
var len__6061__auto___295390 = arguments.length;
var i__6062__auto___295391 = (0);
while(true){
if((i__6062__auto___295391 < len__6061__auto___295390)){
args295387.push((arguments[i__6062__auto___295391]));

var G__295392 = (i__6062__auto___295391 + (1));
i__6062__auto___295391 = G__295392;
continue;
} else {
}
break;
}

var G__295389 = args295387.length;
switch (G__295389) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295387.length)].join('')));

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
var args295394 = [];
var len__6061__auto___295397 = arguments.length;
var i__6062__auto___295398 = (0);
while(true){
if((i__6062__auto___295398 < len__6061__auto___295397)){
args295394.push((arguments[i__6062__auto___295398]));

var G__295399 = (i__6062__auto___295398 + (1));
i__6062__auto___295398 = G__295399;
continue;
} else {
}
break;
}

var G__295396 = args295394.length;
switch (G__295396) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295394.length)].join('')));

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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__295401 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295401) : cljs.core.atom.call(null,G__295401));
})();
var prefer_table__5917__auto__ = (function (){var G__295402 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295402) : cljs.core.atom.call(null,G__295402));
})();
var method_cache__5918__auto__ = (function (){var G__295403 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295403) : cljs.core.atom.call(null,G__295403));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__295404 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295404) : cljs.core.atom.call(null,G__295404));
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
var G__295405 = elem;
var G__295406 = cljs.core.cst$kw$attr;
var G__295407 = new cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__295405,G__295406,G__295407) : tailrecursion.hoplon.do_BANG_.call(null,G__295405,G__295406,G__295407));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__295408__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__295408 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__295409__i = 0, G__295409__a = new Array(arguments.length -  2);
while (G__295409__i < G__295409__a.length) {G__295409__a[G__295409__i] = arguments[G__295409__i + 2]; ++G__295409__i;}
  args = new cljs.core.IndexedSeq(G__295409__a,0);
} 
return G__295408__delegate.call(this,elem,_,args);};
G__295408.cljs$lang$maxFixedArity = 2;
G__295408.cljs$lang$applyTo = (function (arglist__295410){
var elem = cljs.core.first(arglist__295410);
arglist__295410 = cljs.core.next(arglist__295410);
var _ = cljs.core.first(arglist__295410);
var args = cljs.core.rest(arglist__295410);
return G__295408__delegate(elem,_,args);
});
G__295408.cljs$core$IFn$_invoke$arity$variadic = G__295408__delegate;
return G__295408;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__295411 = cljs.core.seq(kvs);
var chunk__295412 = null;
var count__295413 = (0);
var i__295414 = (0);
while(true){
if((i__295414 < count__295413)){
var vec__295415 = chunk__295412.cljs$core$IIndexed$_nth$arity$2(null,i__295414);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295415,(1),null);
var k_295417__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_295417__$1);
} else {
e.attr(k_295417__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_295417__$1:v));
}

var G__295418 = seq__295411;
var G__295419 = chunk__295412;
var G__295420 = count__295413;
var G__295421 = (i__295414 + (1));
seq__295411 = G__295418;
chunk__295412 = G__295419;
count__295413 = G__295420;
i__295414 = G__295421;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295411);
if(temp__4425__auto__){
var seq__295411__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295411__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__295411__$1);
var G__295422 = cljs.core.chunk_rest(seq__295411__$1);
var G__295423 = c__5806__auto__;
var G__295424 = cljs.core.count(c__5806__auto__);
var G__295425 = (0);
seq__295411 = G__295422;
chunk__295412 = G__295423;
count__295413 = G__295424;
i__295414 = G__295425;
continue;
} else {
var vec__295416 = cljs.core.first(seq__295411__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295416,(1),null);
var k_295426__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_295426__$1);
} else {
e.attr(k_295426__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_295426__$1:v));
}

var G__295427 = cljs.core.next(seq__295411__$1);
var G__295428 = null;
var G__295429 = (0);
var G__295430 = (0);
seq__295411 = G__295427;
chunk__295412 = G__295428;
count__295413 = G__295429;
i__295414 = G__295430;
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
return (function (p1__295431_SHARP_){
return cljs.core.zipmap(p1__295431_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__295432 = cljs.core.seq(clmap);
var chunk__295433 = null;
var count__295434 = (0);
var i__295435 = (0);
while(true){
if((i__295435 < count__295434)){
var vec__295436 = chunk__295433.cljs$core$IIndexed$_nth$arity$2(null,i__295435);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295436,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295436,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__295438 = seq__295432;
var G__295439 = chunk__295433;
var G__295440 = count__295434;
var G__295441 = (i__295435 + (1));
seq__295432 = G__295438;
chunk__295433 = G__295439;
count__295434 = G__295440;
i__295435 = G__295441;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295432);
if(temp__4425__auto__){
var seq__295432__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295432__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__295432__$1);
var G__295442 = cljs.core.chunk_rest(seq__295432__$1);
var G__295443 = c__5806__auto__;
var G__295444 = cljs.core.count(c__5806__auto__);
var G__295445 = (0);
seq__295432 = G__295442;
chunk__295433 = G__295443;
count__295434 = G__295444;
i__295435 = G__295445;
continue;
} else {
var vec__295437 = cljs.core.first(seq__295432__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295437,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295437,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__295446 = cljs.core.next(seq__295432__$1);
var G__295447 = null;
var G__295448 = (0);
var G__295449 = (0);
seq__295432 = G__295446;
chunk__295433 = G__295447;
count__295434 = G__295448;
i__295435 = G__295449;
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
var seq__295450 = cljs.core.seq(kvs);
var chunk__295451 = null;
var count__295452 = (0);
var i__295453 = (0);
while(true){
if((i__295453 < count__295452)){
var vec__295454 = chunk__295451.cljs$core$IIndexed$_nth$arity$2(null,i__295453);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295454,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__295456 = seq__295450;
var G__295457 = chunk__295451;
var G__295458 = count__295452;
var G__295459 = (i__295453 + (1));
seq__295450 = G__295456;
chunk__295451 = G__295457;
count__295452 = G__295458;
i__295453 = G__295459;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295450);
if(temp__4425__auto__){
var seq__295450__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295450__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__295450__$1);
var G__295460 = cljs.core.chunk_rest(seq__295450__$1);
var G__295461 = c__5806__auto__;
var G__295462 = cljs.core.count(c__5806__auto__);
var G__295463 = (0);
seq__295450 = G__295460;
chunk__295451 = G__295461;
count__295452 = G__295462;
i__295453 = G__295463;
continue;
} else {
var vec__295455 = cljs.core.first(seq__295450__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295455,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__295464 = cljs.core.next(seq__295450__$1);
var G__295465 = null;
var G__295466 = (0);
var G__295467 = (0);
seq__295450 = G__295464;
chunk__295451 = G__295465;
count__295452 = G__295466;
i__295453 = G__295467;
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
var G__295468 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__295469 = (0);
return setTimeout(G__295468,G__295469);
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = (function (){var G__295470 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295470) : cljs.core.atom.call(null,G__295470));
})();
var prefer_table__5917__auto__ = (function (){var G__295471 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295471) : cljs.core.atom.call(null,G__295471));
})();
var method_cache__5918__auto__ = (function (){var G__295472 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295472) : cljs.core.atom.call(null,G__295472));
})();
var cached_hierarchy__5919__auto__ = (function (){var G__295473 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295473) : cljs.core.atom.call(null,G__295473));
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
return (function (){var G__295474 = this$__$1.target;
return jQuery(G__295474);
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
var G__295477_295479 = init;
var G__295478_295480 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__295477_295479,G__295478_295480) : f.call(null,G__295477_295479,G__295478_295480));

return cljs.core.add_watch(atom,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),(function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,_,tpl){
var pool_size = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var on_deck = (function (){var G__295497 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__295497) : cljs.core.atom.call(null,G__295497));
})();
var items_seq = tailrecursion.javelin.formula(((function (pool_size,on_deck){
return (function (G__295498,G__295499){
return (G__295498.cljs$core$IFn$_invoke$arity$1 ? G__295498.cljs$core$IFn$_invoke$arity$1(G__295499) : G__295498.call(null,G__295499));
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq){
return (function (G__295501,G__295500){
return (G__295500.cljs$core$IFn$_invoke$arity$1 ? G__295500.cljs$core$IFn$_invoke$arity$1(G__295501) : G__295500.call(null,G__295501));
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__295481_SHARP_){
return tailrecursion.javelin.formula(((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__295504,G__295503,G__295502){
return (G__295502.cljs$core$IFn$_invoke$arity$2 ? G__295502.cljs$core$IFn$_invoke$arity$2(G__295503,G__295504) : G__295502.call(null,G__295503,G__295504));
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__295481_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__295482_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__295482_SHARP_) : cljs.core.deref.call(null,p1__295482_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__295482_SHARP_,cljs.core.rest);

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
var seq__295505 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__295506 = null;
var count__295507 = (0);
var i__295508 = (0);
while(true){
if((i__295508 < count__295507)){
var i = chunk__295506.cljs$core$IIndexed$_nth$arity$2(null,i__295508);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__295509 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__295509) : tpl.call(null,G__295509));
}
})());

var G__295511 = seq__295505;
var G__295512 = chunk__295506;
var G__295513 = count__295507;
var G__295514 = (i__295508 + (1));
seq__295505 = G__295511;
chunk__295506 = G__295512;
count__295507 = G__295513;
i__295508 = G__295514;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__295505);
if(temp__4425__auto__){
var seq__295505__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__295505__$1)){
var c__5806__auto__ = cljs.core.chunk_first(seq__295505__$1);
var G__295515 = cljs.core.chunk_rest(seq__295505__$1);
var G__295516 = c__5806__auto__;
var G__295517 = cljs.core.count(c__5806__auto__);
var G__295518 = (0);
seq__295505 = G__295515;
chunk__295506 = G__295516;
count__295507 = G__295517;
i__295508 = G__295518;
continue;
} else {
var i = cljs.core.first(seq__295505__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__295510 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__295510) : tpl.call(null,G__295510));
}
})());

var G__295519 = cljs.core.next(seq__295505__$1);
var G__295520 = null;
var G__295521 = (0);
var G__295522 = (0);
seq__295505 = G__295519;
chunk__295506 = G__295520;
count__295507 = G__295521;
i__295508 = G__295522;
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

var G__295523 = (___$1 + (1));
___$1 = G__295523;
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
var len__6061__auto___295532 = arguments.length;
var i__6062__auto___295533 = (0);
while(true){
if((i__6062__auto___295533 < len__6061__auto___295532)){
args__6068__auto__.push((arguments[i__6062__auto___295533]));

var G__295534 = (i__6062__auto___295533 + (1));
i__6062__auto___295533 = G__295534;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__295525){
var vec__295526 = p__295525;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__295526,(0),null);
var c = tailrecursion.javelin.cell(window.location.hash);
var _ = tailrecursion.javelin.formula(((function (c,vec__295526,default$){
return (function (G__295527,G__295529,G__295528){
var or__5022__auto__ = (function (){var and__5010__auto__ = (G__295527.cljs$core$IFn$_invoke$arity$1 ? G__295527.cljs$core$IFn$_invoke$arity$1(G__295528) : G__295527.call(null,G__295528));
if(cljs.core.truth_(and__5010__auto__)){
return G__295528;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__295529;
}
});})(c,vec__295526,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__295526,default$){
return (function (){
var G__295530 = c;
var G__295531 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__295530,G__295531) : cljs.core.reset_BANG_.call(null,G__295530,G__295531));
});})(_,c,vec__295526,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq295524){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq295524));
});
