// Compiled by ClojureScript 0.0-3308 {}
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
return (function (p1__9235_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9235_SHARP_,path);
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
var seq__9240 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9241 = null;
var count__9242 = (0);
var i__9243 = (0);
while(true){
if((i__9243 < count__9242)){
var s = cljs.core._nth.call(null,chunk__9241,i__9243);
var temp__4425__auto___9244 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9244)){
var sheet_9245 = temp__4425__auto___9244;
var temp__4425__auto___9246__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9245.href,changed);
if(cljs.core.truth_(temp__4425__auto___9246__$1)){
var href_uri_9247 = temp__4425__auto___9246__$1;
sheet_9245.ownerNode.href = href_uri_9247.makeUnique().toString();
} else {
}
} else {
}

var G__9248 = seq__9240;
var G__9249 = chunk__9241;
var G__9250 = count__9242;
var G__9251 = (i__9243 + (1));
seq__9240 = G__9248;
chunk__9241 = G__9249;
count__9242 = G__9250;
i__9243 = G__9251;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9240);
if(temp__4425__auto__){
var seq__9240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9240__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__9240__$1);
var G__9252 = cljs.core.chunk_rest.call(null,seq__9240__$1);
var G__9253 = c__4995__auto__;
var G__9254 = cljs.core.count.call(null,c__4995__auto__);
var G__9255 = (0);
seq__9240 = G__9252;
chunk__9241 = G__9253;
count__9242 = G__9254;
i__9243 = G__9255;
continue;
} else {
var s = cljs.core.first.call(null,seq__9240__$1);
var temp__4425__auto___9256__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9256__$1)){
var sheet_9257 = temp__4425__auto___9256__$1;
var temp__4425__auto___9258__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9257.href,changed);
if(cljs.core.truth_(temp__4425__auto___9258__$2)){
var href_uri_9259 = temp__4425__auto___9258__$2;
sheet_9257.ownerNode.href = href_uri_9259.makeUnique().toString();
} else {
}
} else {
}

var G__9260 = cljs.core.next.call(null,seq__9240__$1);
var G__9261 = null;
var G__9262 = (0);
var G__9263 = (0);
seq__9240 = G__9260;
chunk__9241 = G__9261;
count__9242 = G__9262;
i__9243 = G__9263;
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
var seq__9268 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9269 = null;
var count__9270 = (0);
var i__9271 = (0);
while(true){
if((i__9271 < count__9270)){
var s = cljs.core._nth.call(null,chunk__9269,i__9271);
var temp__4425__auto___9272 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9272)){
var image_9273 = temp__4425__auto___9272;
var temp__4425__auto___9274__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9273.src,changed);
if(cljs.core.truth_(temp__4425__auto___9274__$1)){
var href_uri_9275 = temp__4425__auto___9274__$1;
image_9273.src = href_uri_9275.makeUnique().toString();
} else {
}
} else {
}

var G__9276 = seq__9268;
var G__9277 = chunk__9269;
var G__9278 = count__9270;
var G__9279 = (i__9271 + (1));
seq__9268 = G__9276;
chunk__9269 = G__9277;
count__9270 = G__9278;
i__9271 = G__9279;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9268);
if(temp__4425__auto__){
var seq__9268__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9268__$1)){
var c__4995__auto__ = cljs.core.chunk_first.call(null,seq__9268__$1);
var G__9280 = cljs.core.chunk_rest.call(null,seq__9268__$1);
var G__9281 = c__4995__auto__;
var G__9282 = cljs.core.count.call(null,c__4995__auto__);
var G__9283 = (0);
seq__9268 = G__9280;
chunk__9269 = G__9281;
count__9270 = G__9282;
i__9271 = G__9283;
continue;
} else {
var s = cljs.core.first.call(null,seq__9268__$1);
var temp__4425__auto___9284__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9284__$1)){
var image_9285 = temp__4425__auto___9284__$1;
var temp__4425__auto___9286__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9285.src,changed);
if(cljs.core.truth_(temp__4425__auto___9286__$2)){
var href_uri_9287 = temp__4425__auto___9286__$2;
image_9285.src = href_uri_9287.makeUnique().toString();
} else {
}
} else {
}

var G__9288 = cljs.core.next.call(null,seq__9268__$1);
var G__9289 = null;
var G__9290 = (0);
var G__9291 = (0);
seq__9268 = G__9288;
chunk__9269 = G__9289;
count__9270 = G__9290;
i__9271 = G__9291;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9294){
var map__9296 = p__9294;
var map__9296__$1 = ((cljs.core.seq_QMARK_.call(null,map__9296))?cljs.core.apply.call(null,cljs.core.hash_map,map__9296):map__9296);
var on_jsload = cljs.core.get.call(null,map__9296__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9296,map__9296__$1,on_jsload){
return (function (p1__9292_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9292_SHARP_,".js");
});})(map__9296,map__9296__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9296,map__9296__$1,on_jsload){
return (function (p1__9293_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9293_SHARP_).makeUnique());
});})(js_files,map__9296,map__9296__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9296,map__9296__$1,on_jsload){
return (function() { 
var G__9297__delegate = function (_){
return on_jsload.call(null);
};
var G__9297 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9298__i = 0, G__9298__a = new Array(arguments.length -  0);
while (G__9298__i < G__9298__a.length) {G__9298__a[G__9298__i] = arguments[G__9298__i + 0]; ++G__9298__i;}
  _ = new cljs.core.IndexedSeq(G__9298__a,0);
} 
return G__9297__delegate.call(this,_);};
G__9297.cljs$lang$maxFixedArity = 0;
G__9297.cljs$lang$applyTo = (function (arglist__9299){
var _ = cljs.core.seq(arglist__9299);
return G__9297__delegate(_);
});
G__9297.cljs$core$IFn$_invoke$arity$variadic = G__9297__delegate;
return G__9297;
})()
;})(js_files,map__9296,map__9296__$1,on_jsload))
,((function (js_files,map__9296,map__9296__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9296,map__9296__$1,on_jsload))
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

var seq__9304_9308 = cljs.core.seq.call(null,things_to_log);
var chunk__9305_9309 = null;
var count__9306_9310 = (0);
var i__9307_9311 = (0);
while(true){
if((i__9307_9311 < count__9306_9310)){
var t_9312 = cljs.core._nth.call(null,chunk__9305_9309,i__9307_9311);
console.log(t_9312);

var G__9313 = seq__9304_9308;
var G__9314 = chunk__9305_9309;
var G__9315 = count__9306_9310;
var G__9316 = (i__9307_9311 + (1));
seq__9304_9308 = G__9313;
chunk__9305_9309 = G__9314;
count__9306_9310 = G__9315;
i__9307_9311 = G__9316;
continue;
} else {
var temp__4425__auto___9317 = cljs.core.seq.call(null,seq__9304_9308);
if(temp__4425__auto___9317){
var seq__9304_9318__$1 = temp__4425__auto___9317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9304_9318__$1)){
var c__4995__auto___9319 = cljs.core.chunk_first.call(null,seq__9304_9318__$1);
var G__9320 = cljs.core.chunk_rest.call(null,seq__9304_9318__$1);
var G__9321 = c__4995__auto___9319;
var G__9322 = cljs.core.count.call(null,c__4995__auto___9319);
var G__9323 = (0);
seq__9304_9308 = G__9320;
chunk__9305_9309 = G__9321;
count__9306_9310 = G__9322;
i__9307_9311 = G__9323;
continue;
} else {
var t_9324 = cljs.core.first.call(null,seq__9304_9318__$1);
console.log(t_9324);

var G__9325 = cljs.core.next.call(null,seq__9304_9318__$1);
var G__9326 = null;
var G__9327 = (0);
var G__9328 = (0);
seq__9304_9308 = G__9325;
chunk__9305_9309 = G__9326;
count__9306_9310 = G__9327;
i__9307_9311 = G__9328;
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

var G__9330 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9330,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9330);

adzerk.boot_reload.reload.reload_css.call(null,G__9330);

adzerk.boot_reload.reload.reload_img.call(null,G__9330);

return G__9330;
});

//# sourceMappingURL=reload.js.map