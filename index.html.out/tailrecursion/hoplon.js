// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljsjs.jquery');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__8109_SHARP_){
return (p1__8109_SHARP_ instanceof Node);
}):(function (p1__8110_SHARP_){
try{return p1__8110_SHARP_.nodeType;
}catch (e8111){if((e8111 instanceof Error)){
var _ = e8111;
return null;
} else {
throw e8111;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8112_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8112_SHARP_);
}catch (e8113){if((e8113 instanceof Error)){
var _ = e8113;
return null;
} else {
throw e8113;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8114_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8114_SHARP_);
}catch (e8115){if((e8115 instanceof Error)){
var _ = e8115;
return null;
} else {
throw e8115;

}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__8116_SHARP_){
if(cljs.core.truth_((function (){var and__5010__auto__ = console;
if(cljs.core.truth_(and__5010__auto__)){
return console.log;
} else {
return and__5010__auto__;
}
})())){
return console.log(p1__8116_SHARP_);
} else {
return null;
}
}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args8117 = [];
var len__6061__auto___8121 = arguments.length;
var i__6062__auto___8122 = (0);
while(true){
if((i__6062__auto___8122 < len__6061__auto___8121)){
args8117.push((arguments[i__6062__auto___8122]));

var G__8123 = (i__6062__auto___8122 + (1));
i__6062__auto___8122 = G__8123;
continue;
} else {
}
break;
}

var G__8119 = args8117.length;
switch (G__8119) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8117.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8120){if((e8120 instanceof Error)){
var _ = e8120;
return not_found;
} else {
throw e8120;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args8125 = [];
var len__6061__auto___8128 = arguments.length;
var i__6062__auto___8129 = (0);
while(true){
if((i__6062__auto___8129 < len__6061__auto___8128)){
args8125.push((arguments[i__6062__auto___8129]));

var G__8130 = (i__6062__auto___8129 + (1));
i__6062__auto___8129 = G__8130;
continue;
} else {
}
break;
}

var G__8127 = args8125.length;
switch (G__8127) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8125.length)].join('')));

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
var G__8140 = args;
var vec__8141 = G__8140;
var arg = cljs.core.nth.call(null,vec__8141,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8141,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8140__$1 = G__8140;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8142 = G__8140__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8142,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8142,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8143 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8140__$1,attr__$2,kids__$2,vec__8142,arg__$1,args__$2,attr,kids,G__8140,vec__8141,arg,args__$1){
return (function (p1__8132_SHARP_,p2__8133_SHARP_,p3__8134_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8132_SHARP_,p2__8133_SHARP_,p3__8134_SHARP_);
});})(attr__$1,kids__$1,G__8140__$1,attr__$2,kids__$2,vec__8142,arg__$1,args__$2,attr,kids,G__8140,vec__8141,arg,args__$1))
,attr__$2,arg__$1);
var G__8144 = kids__$2;
var G__8145 = args__$2;
attr__$1 = G__8143;
kids__$1 = G__8144;
G__8140__$1 = G__8145;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8146 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8147 = kids__$2;
var G__8148 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8146;
kids__$1 = G__8147;
G__8140__$1 = G__8148;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8149 = attr__$2;
var G__8150 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8151 = args__$2;
attr__$1 = G__8149;
kids__$1 = G__8150;
G__8140__$1 = G__8151;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8152 = attr__$2;
var G__8153 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8154 = args__$2;
attr__$1 = G__8152;
kids__$1 = G__8153;
G__8140__$1 = G__8154;
continue;
} else {
var G__8155 = attr__$2;
var G__8156 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8157 = args__$2;
attr__$1 = G__8155;
kids__$1 = G__8156;
G__8140__$1 = G__8157;
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
return (function (p1__8159_SHARP_,p2__8160_SHARP_,p3__8161_SHARP_,p4__8158_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$2,k,p4__8158_SHARP_);
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
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__8162_SHARP_,p2__8163_SHARP_){
return p1__8162_SHARP_.appendChild(p2__8163_SHARP_);
}):(function (p1__8164_SHARP_,p2__8165_SHARP_){
try{return p1__8164_SHARP_.appendChild(p2__8165_SHARP_);
}catch (e8166){if((e8166 instanceof Error)){
var _ = e8166;
return null;
} else {
throw e8166;

}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function tailrecursion$hoplon$replace_children_BANG_(this$,new_children){
jQuery(this$).empty();

return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__8172){
var vec__8178 = p__8172;
var child_cell = cljs.core.nth.call(null,vec__8178,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8178,(1));
var kids = vec__8178;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell))){
tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));

cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__8178,child_cell,_,kids){
return (function (p1__8168_SHARP_,p2__8169_SHARP_,p3__8170_SHARP_,p4__8167_SHARP_){
return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__8167_SHARP_);
});})(vec__8178,child_cell,_,kids))
);
} else {
var node_8183 = ((function (vec__8178,child_cell,_,kids){
return (function (p1__8171_SHARP_){
if(typeof p1__8171_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__8171_SHARP_);
} else {
if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__8171_SHARP_))){
return p1__8171_SHARP_;
} else {
return null;
}
}
});})(vec__8178,child_cell,_,kids))
;
var seq__8179_8184 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8180_8185 = null;
var count__8181_8186 = (0);
var i__8182_8187 = (0);
while(true){
if((i__8182_8187 < count__8181_8186)){
var x_8188 = cljs.core._nth.call(null,chunk__8180_8185,i__8182_8187);
var temp__4425__auto___8189 = node_8183.call(null,x_8188);
if(cljs.core.truth_(temp__4425__auto___8189)){
var x_8190__$1 = temp__4425__auto___8189;
tailrecursion.hoplon.append_child.call(null,this$,x_8190__$1);
} else {
}

var G__8191 = seq__8179_8184;
var G__8192 = chunk__8180_8185;
var G__8193 = count__8181_8186;
var G__8194 = (i__8182_8187 + (1));
seq__8179_8184 = G__8191;
chunk__8180_8185 = G__8192;
count__8181_8186 = G__8193;
i__8182_8187 = G__8194;
continue;
} else {
var temp__4425__auto___8195 = cljs.core.seq.call(null,seq__8179_8184);
if(temp__4425__auto___8195){
var seq__8179_8196__$1 = temp__4425__auto___8195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8179_8196__$1)){
var c__5806__auto___8197 = cljs.core.chunk_first.call(null,seq__8179_8196__$1);
var G__8198 = cljs.core.chunk_rest.call(null,seq__8179_8196__$1);
var G__8199 = c__5806__auto___8197;
var G__8200 = cljs.core.count.call(null,c__5806__auto___8197);
var G__8201 = (0);
seq__8179_8184 = G__8198;
chunk__8180_8185 = G__8199;
count__8181_8186 = G__8200;
i__8182_8187 = G__8201;
continue;
} else {
var x_8202 = cljs.core.first.call(null,seq__8179_8196__$1);
var temp__4425__auto___8203__$1 = node_8183.call(null,x_8202);
if(cljs.core.truth_(temp__4425__auto___8203__$1)){
var x_8204__$1 = temp__4425__auto___8203__$1;
tailrecursion.hoplon.append_child.call(null,this$,x_8204__$1);
} else {
}

var G__8205 = cljs.core.next.call(null,seq__8179_8196__$1);
var G__8206 = null;
var G__8207 = (0);
var G__8208 = (0);
seq__8179_8184 = G__8205;
chunk__8180_8185 = G__8206;
count__8181_8186 = G__8207;
i__8182_8187 = G__8208;
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
var G__8216__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8210 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8210,(0),null);
var kids = cljs.core.nth.call(null,vec__8210,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8211 = this$;
G__8211.hoplonIFn(attr,kids);

return G__8211;
} else {
var G__8212 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__8212,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__8212,kids);

return G__8212;
}
};
var G__8216 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8217__i = 0, G__8217__a = new Array(arguments.length -  1);
while (G__8217__i < G__8217__a.length) {G__8217__a[G__8217__i] = arguments[G__8217__i + 1]; ++G__8217__i;}
  args = new cljs.core.IndexedSeq(G__8217__a,0);
} 
return G__8216__delegate.call(this,self__,args);};
G__8216.cljs$lang$maxFixedArity = 1;
G__8216.cljs$lang$applyTo = (function (arglist__8218){
var self__ = cljs.core.first(arglist__8218);
var args = cljs.core.rest(arglist__8218);
return G__8216__delegate(self__,args);
});
G__8216.cljs$core$IFn$_invoke$arity$variadic = G__8216__delegate;
return G__8216;
})()
;

Element.prototype.apply = (function (self__,args8209){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8209)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8219__delegate = function (args){
var this$ = this;
var vec__8213 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8213,(0),null);
var kids = cljs.core.nth.call(null,vec__8213,(1),null);
if(cljs.core.truth_(this$.hoplonIFn)){
var G__8214 = this$;
G__8214.hoplonIFn(attr,kids);

return G__8214;
} else {
var G__8215 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__8215,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__8215,kids);

return G__8215;
}
};
var G__8219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8220__i = 0, G__8220__a = new Array(arguments.length -  0);
while (G__8220__i < G__8220__a.length) {G__8220__a[G__8220__i] = arguments[G__8220__i + 0]; ++G__8220__i;}
  args = new cljs.core.IndexedSeq(G__8220__a,0);
} 
return G__8219__delegate.call(this,args);};
G__8219.cljs$lang$maxFixedArity = 0;
G__8219.cljs$lang$applyTo = (function (arglist__8221){
var args = cljs.core.seq(arglist__8221);
return G__8219__delegate(args);
});
G__8219.cljs$core$IFn$_invoke$arity$variadic = G__8219__delegate;
return G__8219;
})()
;
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__8232__delegate = function (args){
var vec__8227 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8227,(0),null);
var kids = cljs.core.nth.call(null,vec__8227,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

jQuery(elem).empty();

var seq__8228 = cljs.core.seq.call(null,kids);
var chunk__8229 = null;
var count__8230 = (0);
var i__8231 = (0);
while(true){
if((i__8231 < count__8230)){
var k = cljs.core._nth.call(null,chunk__8229,i__8231);
elem.appendChild(k);

var G__8233 = seq__8228;
var G__8234 = chunk__8229;
var G__8235 = count__8230;
var G__8236 = (i__8231 + (1));
seq__8228 = G__8233;
chunk__8229 = G__8234;
count__8230 = G__8235;
i__8231 = G__8236;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8228);
if(temp__4425__auto__){
var seq__8228__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8228__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8228__$1);
var G__8237 = cljs.core.chunk_rest.call(null,seq__8228__$1);
var G__8238 = c__5806__auto__;
var G__8239 = cljs.core.count.call(null,c__5806__auto__);
var G__8240 = (0);
seq__8228 = G__8237;
chunk__8229 = G__8238;
count__8230 = G__8239;
i__8231 = G__8240;
continue;
} else {
var k = cljs.core.first.call(null,seq__8228__$1);
elem.appendChild(k);

var G__8241 = cljs.core.next.call(null,seq__8228__$1);
var G__8242 = null;
var G__8243 = (0);
var G__8244 = (0);
seq__8228 = G__8241;
chunk__8229 = G__8242;
count__8230 = G__8243;
i__8231 = G__8244;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__8232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8245__i = 0, G__8245__a = new Array(arguments.length -  0);
while (G__8245__i < G__8245__a.length) {G__8245__a[G__8245__i] = arguments[G__8245__i + 0]; ++G__8245__i;}
  args = new cljs.core.IndexedSeq(G__8245__a,0);
} 
return G__8232__delegate.call(this,args);};
G__8232.cljs$lang$maxFixedArity = 0;
G__8232.cljs$lang$applyTo = (function (arglist__8246){
var args = cljs.core.seq(arglist__8246);
return G__8232__delegate(args);
});
G__8232.cljs$core$IFn$_invoke$arity$variadic = G__8232__delegate;
return G__8232;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__8247__delegate = function (args){
return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__8247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8248__i = 0, G__8248__a = new Array(arguments.length -  0);
while (G__8248__i < G__8248__a.length) {G__8248__a[G__8248__i] = arguments[G__8248__i + 0]; ++G__8248__i;}
  args = new cljs.core.IndexedSeq(G__8248__a,0);
} 
return G__8247__delegate.call(this,args);};
G__8247.cljs$lang$maxFixedArity = 0;
G__8247.cljs$lang$applyTo = (function (arglist__8249){
var args = cljs.core.seq(arglist__8249);
return G__8247__delegate(args);
});
G__8247.cljs$core$IFn$_invoke$arity$variadic = G__8247__delegate;
return G__8247;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___8252 = arguments.length;
var i__6062__auto___8253 = (0);
while(true){
if((i__6062__auto___8253 < len__6061__auto___8252)){
args__6068__auto__.push((arguments[i__6062__auto___8253]));

var G__8254 = (i__6062__auto___8253 + (1));
i__6062__auto___8253 = G__8254;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8251 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8251,(0),null);
var _ = cljs.core.nth.call(null,vec__8251,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq8250){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8250));
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
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__8255_SHARP_){
return document.createTextNode(p1__8255_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__8256_SHARP_){
return document.createComment(p1__8256_SHARP_);
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
return jQuery("body").on("submit",(function (p1__8257_SHARP_){
var e = jQuery(p1__8257_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8257_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args8258 = [];
var len__6061__auto___8261 = arguments.length;
var i__6062__auto___8262 = (0);
while(true){
if((i__6062__auto___8262 < len__6061__auto___8261)){
args8258.push((arguments[i__6062__auto___8262]));

var G__8263 = (i__6062__auto___8262 + (1));
i__6062__auto___8262 = G__8263;
continue;
} else {
}
break;
}

var G__8260 = args8258.length;
switch (G__8260) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8258.length)].join('')));

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
var args8265 = [];
var len__6061__auto___8268 = arguments.length;
var i__6062__auto___8269 = (0);
while(true){
if((i__6062__auto___8269 < len__6061__auto___8268)){
args8265.push((arguments[i__6062__auto___8269]));

var G__8270 = (i__6062__auto___8269 + (1));
i__6062__auto___8269 = G__8270;
continue;
} else {
}
break;
}

var G__8267 = args8265.length;
switch (G__8267) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8265.length)].join('')));

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
var G__8272__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__8272 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8273__i = 0, G__8273__a = new Array(arguments.length -  2);
while (G__8273__i < G__8273__a.length) {G__8273__a[G__8273__i] = arguments[G__8273__i + 2]; ++G__8273__i;}
  args = new cljs.core.IndexedSeq(G__8273__a,0);
} 
return G__8272__delegate.call(this,elem,_,args);};
G__8272.cljs$lang$maxFixedArity = 2;
G__8272.cljs$lang$applyTo = (function (arglist__8274){
var elem = cljs.core.first(arglist__8274);
arglist__8274 = cljs.core.next(arglist__8274);
var _ = cljs.core.first(arglist__8274);
var args = cljs.core.rest(arglist__8274);
return G__8272__delegate(elem,_,args);
});
G__8272.cljs$core$IFn$_invoke$arity$variadic = G__8272__delegate;
return G__8272;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8275 = cljs.core.seq.call(null,kvs);
var chunk__8276 = null;
var count__8277 = (0);
var i__8278 = (0);
while(true){
if((i__8278 < count__8277)){
var vec__8279 = cljs.core._nth.call(null,chunk__8276,i__8278);
var k = cljs.core.nth.call(null,vec__8279,(0),null);
var v = cljs.core.nth.call(null,vec__8279,(1),null);
var k_8281__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8281__$1);
} else {
e.attr(k_8281__$1,((cljs.core._EQ_.call(null,true,v))?k_8281__$1:v));
}

var G__8282 = seq__8275;
var G__8283 = chunk__8276;
var G__8284 = count__8277;
var G__8285 = (i__8278 + (1));
seq__8275 = G__8282;
chunk__8276 = G__8283;
count__8277 = G__8284;
i__8278 = G__8285;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8275);
if(temp__4425__auto__){
var seq__8275__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8275__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8275__$1);
var G__8286 = cljs.core.chunk_rest.call(null,seq__8275__$1);
var G__8287 = c__5806__auto__;
var G__8288 = cljs.core.count.call(null,c__5806__auto__);
var G__8289 = (0);
seq__8275 = G__8286;
chunk__8276 = G__8287;
count__8277 = G__8288;
i__8278 = G__8289;
continue;
} else {
var vec__8280 = cljs.core.first.call(null,seq__8275__$1);
var k = cljs.core.nth.call(null,vec__8280,(0),null);
var v = cljs.core.nth.call(null,vec__8280,(1),null);
var k_8290__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8290__$1);
} else {
e.attr(k_8290__$1,((cljs.core._EQ_.call(null,true,v))?k_8290__$1:v));
}

var G__8291 = cljs.core.next.call(null,seq__8275__$1);
var G__8292 = null;
var G__8293 = (0);
var G__8294 = (0);
seq__8275 = G__8291;
chunk__8276 = G__8292;
count__8277 = G__8293;
i__8278 = G__8294;
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
return (function (p1__8295_SHARP_){
return cljs.core.zipmap.call(null,p1__8295_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8296 = cljs.core.seq.call(null,clmap);
var chunk__8297 = null;
var count__8298 = (0);
var i__8299 = (0);
while(true){
if((i__8299 < count__8298)){
var vec__8300 = cljs.core._nth.call(null,chunk__8297,i__8299);
var c = cljs.core.nth.call(null,vec__8300,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8300,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8302 = seq__8296;
var G__8303 = chunk__8297;
var G__8304 = count__8298;
var G__8305 = (i__8299 + (1));
seq__8296 = G__8302;
chunk__8297 = G__8303;
count__8298 = G__8304;
i__8299 = G__8305;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8296);
if(temp__4425__auto__){
var seq__8296__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8296__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8296__$1);
var G__8306 = cljs.core.chunk_rest.call(null,seq__8296__$1);
var G__8307 = c__5806__auto__;
var G__8308 = cljs.core.count.call(null,c__5806__auto__);
var G__8309 = (0);
seq__8296 = G__8306;
chunk__8297 = G__8307;
count__8298 = G__8308;
i__8299 = G__8309;
continue;
} else {
var vec__8301 = cljs.core.first.call(null,seq__8296__$1);
var c = cljs.core.nth.call(null,vec__8301,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8301,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8310 = cljs.core.next.call(null,seq__8296__$1);
var G__8311 = null;
var G__8312 = (0);
var G__8313 = (0);
seq__8296 = G__8310;
chunk__8297 = G__8311;
count__8298 = G__8312;
i__8299 = G__8313;
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
var seq__8314 = cljs.core.seq.call(null,kvs);
var chunk__8315 = null;
var count__8316 = (0);
var i__8317 = (0);
while(true){
if((i__8317 < count__8316)){
var vec__8318 = cljs.core._nth.call(null,chunk__8315,i__8317);
var k = cljs.core.nth.call(null,vec__8318,(0),null);
var v = cljs.core.nth.call(null,vec__8318,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8320 = seq__8314;
var G__8321 = chunk__8315;
var G__8322 = count__8316;
var G__8323 = (i__8317 + (1));
seq__8314 = G__8320;
chunk__8315 = G__8321;
count__8316 = G__8322;
i__8317 = G__8323;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8314);
if(temp__4425__auto__){
var seq__8314__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8314__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8314__$1);
var G__8324 = cljs.core.chunk_rest.call(null,seq__8314__$1);
var G__8325 = c__5806__auto__;
var G__8326 = cljs.core.count.call(null,c__5806__auto__);
var G__8327 = (0);
seq__8314 = G__8324;
chunk__8315 = G__8325;
count__8316 = G__8326;
i__8317 = G__8327;
continue;
} else {
var vec__8319 = cljs.core.first.call(null,seq__8314__$1);
var k = cljs.core.nth.call(null,vec__8319,(0),null);
var v = cljs.core.nth.call(null,vec__8319,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8328 = cljs.core.next.call(null,seq__8314__$1);
var G__8329 = null;
var G__8330 = (0);
var G__8331 = (0);
seq__8314 = G__8328;
chunk__8315 = G__8329;
count__8316 = G__8330;
i__8317 = G__8331;
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
return (function (G__8345,G__8346){
return G__8345.call(null,G__8346);
});})(pool_size,on_deck))
).call(null,cljs.core.seq,items);
var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq){
return (function (G__8348,G__8347){
return G__8347.call(null,G__8348);
});})(pool_size,on_deck,items_seq))
).call(null,items_seq,cljs.core.count);
var ith_item = ((function (pool_size,on_deck,items_seq,cur_count){
return (function (p1__8332_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (pool_size,on_deck,items_seq,cur_count){
return (function (G__8351,G__8350,G__8349){
return G__8349.call(null,G__8350,G__8351);
});})(pool_size,on_deck,items_seq,cur_count))
).call(null,p1__8332_SHARP_,items_seq,tailrecursion.hoplon.safe_nth);
});})(pool_size,on_deck,items_seq,cur_count))
;
var shift_BANG_ = ((function (pool_size,on_deck,items_seq,cur_count,ith_item){
return (function (p1__8333_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8333_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8333_SHARP_,cljs.core.rest);

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
var seq__8352 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8353 = null;
var count__8354 = (0);
var i__8355 = (0);
while(true){
if((i__8355 < count__8354)){
var i = cljs.core._nth.call(null,chunk__8353,i__8355);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__8356 = seq__8352;
var G__8357 = chunk__8353;
var G__8358 = count__8354;
var G__8359 = (i__8355 + (1));
seq__8352 = G__8356;
chunk__8353 = G__8357;
count__8354 = G__8358;
i__8355 = G__8359;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8352);
if(temp__4425__auto__){
var seq__8352__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8352__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__8352__$1);
var G__8360 = cljs.core.chunk_rest.call(null,seq__8352__$1);
var G__8361 = c__5806__auto__;
var G__8362 = cljs.core.count.call(null,c__5806__auto__);
var G__8363 = (0);
seq__8352 = G__8360;
chunk__8353 = G__8361;
count__8354 = G__8362;
i__8355 = G__8363;
continue;
} else {
var i = cljs.core.first.call(null,seq__8352__$1);
p.appendChild((function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})());

var G__8364 = cljs.core.next.call(null,seq__8352__$1);
var G__8365 = null;
var G__8366 = (0);
var G__8367 = (0);
seq__8352 = G__8364;
chunk__8353 = G__8365;
count__8354 = G__8366;
i__8355 = G__8367;
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

var G__8368 = (___$1 + (1));
___$1 = G__8368;
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
var len__6061__auto___8375 = arguments.length;
var i__6062__auto___8376 = (0);
while(true){
if((i__6062__auto___8376 < len__6061__auto___8375)){
args__6068__auto__.push((arguments[i__6062__auto___8376]));

var G__8377 = (i__6062__auto___8376 + (1));
i__6062__auto___8376 = G__8377;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8370){
var vec__8371 = p__8370;
var default$ = cljs.core.nth.call(null,vec__8371,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__8371,default$){
return (function (G__8372,G__8374,G__8373){
var or__5022__auto__ = (function (){var and__5010__auto__ = G__8372.call(null,G__8373);
if(cljs.core.truth_(and__5010__auto__)){
return G__8373;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__8374;
}
});})(c,vec__8371,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8371,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8371,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq8369){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8369));
});

//# sourceMappingURL=hoplon.js.map