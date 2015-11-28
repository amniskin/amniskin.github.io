// Compiled by ClojureScript 1.7.48 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__17075_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__17075_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__17080 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__17081 = null;
var count__17082 = (0);
var i__17083 = (0);
while(true){
if((i__17083 < count__17082)){
var s = cljs.core._nth.call(null,chunk__17081,i__17083);
var temp__4425__auto___17084 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___17084)){
var sheet_17085 = temp__4425__auto___17084;
var temp__4425__auto___17086__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_17085.href,changed);
if(cljs.core.truth_(temp__4425__auto___17086__$1)){
var href_uri_17087 = temp__4425__auto___17086__$1;
sheet_17085.ownerNode.href = href_uri_17087.makeUnique().toString();
} else {
}
} else {
}

var G__17088 = seq__17080;
var G__17089 = chunk__17081;
var G__17090 = count__17082;
var G__17091 = (i__17083 + (1));
seq__17080 = G__17088;
chunk__17081 = G__17089;
count__17082 = G__17090;
i__17083 = G__17091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17080);
if(temp__4425__auto__){
var seq__17080__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17080__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__17080__$1);
var G__17092 = cljs.core.chunk_rest.call(null,seq__17080__$1);
var G__17093 = c__5806__auto__;
var G__17094 = cljs.core.count.call(null,c__5806__auto__);
var G__17095 = (0);
seq__17080 = G__17092;
chunk__17081 = G__17093;
count__17082 = G__17094;
i__17083 = G__17095;
continue;
} else {
var s = cljs.core.first.call(null,seq__17080__$1);
var temp__4425__auto___17096__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___17096__$1)){
var sheet_17097 = temp__4425__auto___17096__$1;
var temp__4425__auto___17098__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_17097.href,changed);
if(cljs.core.truth_(temp__4425__auto___17098__$2)){
var href_uri_17099 = temp__4425__auto___17098__$2;
sheet_17097.ownerNode.href = href_uri_17099.makeUnique().toString();
} else {
}
} else {
}

var G__17100 = cljs.core.next.call(null,seq__17080__$1);
var G__17101 = null;
var G__17102 = (0);
var G__17103 = (0);
seq__17080 = G__17100;
chunk__17081 = G__17101;
count__17082 = G__17102;
i__17083 = G__17103;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__17108 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__17109 = null;
var count__17110 = (0);
var i__17111 = (0);
while(true){
if((i__17111 < count__17110)){
var s = cljs.core._nth.call(null,chunk__17109,i__17111);
var temp__4425__auto___17112 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___17112)){
var image_17113 = temp__4425__auto___17112;
var temp__4425__auto___17114__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_17113.src,changed);
if(cljs.core.truth_(temp__4425__auto___17114__$1)){
var href_uri_17115 = temp__4425__auto___17114__$1;
image_17113.src = href_uri_17115.makeUnique().toString();
} else {
}
} else {
}

var G__17116 = seq__17108;
var G__17117 = chunk__17109;
var G__17118 = count__17110;
var G__17119 = (i__17111 + (1));
seq__17108 = G__17116;
chunk__17109 = G__17117;
count__17110 = G__17118;
i__17111 = G__17119;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17108);
if(temp__4425__auto__){
var seq__17108__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17108__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__17108__$1);
var G__17120 = cljs.core.chunk_rest.call(null,seq__17108__$1);
var G__17121 = c__5806__auto__;
var G__17122 = cljs.core.count.call(null,c__5806__auto__);
var G__17123 = (0);
seq__17108 = G__17120;
chunk__17109 = G__17121;
count__17110 = G__17122;
i__17111 = G__17123;
continue;
} else {
var s = cljs.core.first.call(null,seq__17108__$1);
var temp__4425__auto___17124__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___17124__$1)){
var image_17125 = temp__4425__auto___17124__$1;
var temp__4425__auto___17126__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_17125.src,changed);
if(cljs.core.truth_(temp__4425__auto___17126__$2)){
var href_uri_17127 = temp__4425__auto___17126__$2;
image_17125.src = href_uri_17127.makeUnique().toString();
} else {
}
} else {
}

var G__17128 = cljs.core.next.call(null,seq__17108__$1);
var G__17129 = null;
var G__17130 = (0);
var G__17131 = (0);
seq__17108 = G__17128;
chunk__17109 = G__17129;
count__17110 = G__17130;
i__17111 = G__17131;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__17134){
var map__17137 = p__17134;
var map__17137__$1 = ((((!((map__17137 == null)))?((((map__17137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17137):map__17137);
var on_jsload = cljs.core.get.call(null,map__17137__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__17137,map__17137__$1,on_jsload){
return (function (p1__17132_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__17132_SHARP_,".js");
});})(map__17137,map__17137__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__17137,map__17137__$1,on_jsload){
return (function (p1__17133_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__17133_SHARP_).makeUnique());
});})(js_files,map__17137,map__17137__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__17137,map__17137__$1,on_jsload){
return (function() { 
var G__17139__delegate = function (_){
return on_jsload.call(null);
};
var G__17139 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__17140__i = 0, G__17140__a = new Array(arguments.length -  0);
while (G__17140__i < G__17140__a.length) {G__17140__a[G__17140__i] = arguments[G__17140__i + 0]; ++G__17140__i;}
  _ = new cljs.core.IndexedSeq(G__17140__a,0);
} 
return G__17139__delegate.call(this,_);};
G__17139.cljs$lang$maxFixedArity = 0;
G__17139.cljs$lang$applyTo = (function (arglist__17141){
var _ = cljs.core.seq(arglist__17141);
return G__17139__delegate(_);
});
G__17139.cljs$core$IFn$_invoke$arity$variadic = G__17139__delegate;
return G__17139;
})()
;})(js_files,map__17137,map__17137__$1,on_jsload))
,((function (js_files,map__17137,map__17137__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__17137,map__17137__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__17146_17150 = cljs.core.seq.call(null,things_to_log);
var chunk__17147_17151 = null;
var count__17148_17152 = (0);
var i__17149_17153 = (0);
while(true){
if((i__17149_17153 < count__17148_17152)){
var t_17154 = cljs.core._nth.call(null,chunk__17147_17151,i__17149_17153);
console.log(t_17154);

var G__17155 = seq__17146_17150;
var G__17156 = chunk__17147_17151;
var G__17157 = count__17148_17152;
var G__17158 = (i__17149_17153 + (1));
seq__17146_17150 = G__17155;
chunk__17147_17151 = G__17156;
count__17148_17152 = G__17157;
i__17149_17153 = G__17158;
continue;
} else {
var temp__4425__auto___17159 = cljs.core.seq.call(null,seq__17146_17150);
if(temp__4425__auto___17159){
var seq__17146_17160__$1 = temp__4425__auto___17159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17146_17160__$1)){
var c__5806__auto___17161 = cljs.core.chunk_first.call(null,seq__17146_17160__$1);
var G__17162 = cljs.core.chunk_rest.call(null,seq__17146_17160__$1);
var G__17163 = c__5806__auto___17161;
var G__17164 = cljs.core.count.call(null,c__5806__auto___17161);
var G__17165 = (0);
seq__17146_17150 = G__17162;
chunk__17147_17151 = G__17163;
count__17148_17152 = G__17164;
i__17149_17153 = G__17165;
continue;
} else {
var t_17166 = cljs.core.first.call(null,seq__17146_17160__$1);
console.log(t_17166);

var G__17167 = cljs.core.next.call(null,seq__17146_17160__$1);
var G__17168 = null;
var G__17169 = (0);
var G__17170 = (0);
seq__17146_17150 = G__17167;
chunk__17147_17151 = G__17168;
count__17148_17152 = G__17169;
i__17149_17153 = G__17170;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__17172 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__17172,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__17172);

adzerk.boot_reload.reload.reload_css.call(null,G__17172);

adzerk.boot_reload.reload.reload_img.call(null,G__17172);

return G__17172;
});

//# sourceMappingURL=reload.js.map