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
return (function (p1__7276_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7276_SHARP_,path);
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
var seq__7281 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7282 = null;
var count__7283 = (0);
var i__7284 = (0);
while(true){
if((i__7284 < count__7283)){
var s = cljs.core._nth.call(null,chunk__7282,i__7284);
var temp__4425__auto___7285 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7285)){
var sheet_7286 = temp__4425__auto___7285;
var temp__4425__auto___7287__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7286.href,changed);
if(cljs.core.truth_(temp__4425__auto___7287__$1)){
var href_uri_7288 = temp__4425__auto___7287__$1;
sheet_7286.ownerNode.href = href_uri_7288.makeUnique().toString();
} else {
}
} else {
}

var G__7289 = seq__7281;
var G__7290 = chunk__7282;
var G__7291 = count__7283;
var G__7292 = (i__7284 + (1));
seq__7281 = G__7289;
chunk__7282 = G__7290;
count__7283 = G__7291;
i__7284 = G__7292;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7281);
if(temp__4425__auto__){
var seq__7281__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7281__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7281__$1);
var G__7293 = cljs.core.chunk_rest.call(null,seq__7281__$1);
var G__7294 = c__5806__auto__;
var G__7295 = cljs.core.count.call(null,c__5806__auto__);
var G__7296 = (0);
seq__7281 = G__7293;
chunk__7282 = G__7294;
count__7283 = G__7295;
i__7284 = G__7296;
continue;
} else {
var s = cljs.core.first.call(null,seq__7281__$1);
var temp__4425__auto___7297__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7297__$1)){
var sheet_7298 = temp__4425__auto___7297__$1;
var temp__4425__auto___7299__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7298.href,changed);
if(cljs.core.truth_(temp__4425__auto___7299__$2)){
var href_uri_7300 = temp__4425__auto___7299__$2;
sheet_7298.ownerNode.href = href_uri_7300.makeUnique().toString();
} else {
}
} else {
}

var G__7301 = cljs.core.next.call(null,seq__7281__$1);
var G__7302 = null;
var G__7303 = (0);
var G__7304 = (0);
seq__7281 = G__7301;
chunk__7282 = G__7302;
count__7283 = G__7303;
i__7284 = G__7304;
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
var seq__7309 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7310 = null;
var count__7311 = (0);
var i__7312 = (0);
while(true){
if((i__7312 < count__7311)){
var s = cljs.core._nth.call(null,chunk__7310,i__7312);
var temp__4425__auto___7313 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7313)){
var image_7314 = temp__4425__auto___7313;
var temp__4425__auto___7315__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7314.src,changed);
if(cljs.core.truth_(temp__4425__auto___7315__$1)){
var href_uri_7316 = temp__4425__auto___7315__$1;
image_7314.src = href_uri_7316.makeUnique().toString();
} else {
}
} else {
}

var G__7317 = seq__7309;
var G__7318 = chunk__7310;
var G__7319 = count__7311;
var G__7320 = (i__7312 + (1));
seq__7309 = G__7317;
chunk__7310 = G__7318;
count__7311 = G__7319;
i__7312 = G__7320;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7309);
if(temp__4425__auto__){
var seq__7309__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7309__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7309__$1);
var G__7321 = cljs.core.chunk_rest.call(null,seq__7309__$1);
var G__7322 = c__5806__auto__;
var G__7323 = cljs.core.count.call(null,c__5806__auto__);
var G__7324 = (0);
seq__7309 = G__7321;
chunk__7310 = G__7322;
count__7311 = G__7323;
i__7312 = G__7324;
continue;
} else {
var s = cljs.core.first.call(null,seq__7309__$1);
var temp__4425__auto___7325__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7325__$1)){
var image_7326 = temp__4425__auto___7325__$1;
var temp__4425__auto___7327__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7326.src,changed);
if(cljs.core.truth_(temp__4425__auto___7327__$2)){
var href_uri_7328 = temp__4425__auto___7327__$2;
image_7326.src = href_uri_7328.makeUnique().toString();
} else {
}
} else {
}

var G__7329 = cljs.core.next.call(null,seq__7309__$1);
var G__7330 = null;
var G__7331 = (0);
var G__7332 = (0);
seq__7309 = G__7329;
chunk__7310 = G__7330;
count__7311 = G__7331;
i__7312 = G__7332;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7335){
var map__7338 = p__7335;
var map__7338__$1 = ((((!((map__7338 == null)))?((((map__7338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7338):map__7338);
var on_jsload = cljs.core.get.call(null,map__7338__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7338,map__7338__$1,on_jsload){
return (function (p1__7333_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7333_SHARP_,".js");
});})(map__7338,map__7338__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7338,map__7338__$1,on_jsload){
return (function (p1__7334_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7334_SHARP_).makeUnique());
});})(js_files,map__7338,map__7338__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7338,map__7338__$1,on_jsload){
return (function() { 
var G__7340__delegate = function (_){
return on_jsload.call(null);
};
var G__7340 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7341__i = 0, G__7341__a = new Array(arguments.length -  0);
while (G__7341__i < G__7341__a.length) {G__7341__a[G__7341__i] = arguments[G__7341__i + 0]; ++G__7341__i;}
  _ = new cljs.core.IndexedSeq(G__7341__a,0);
} 
return G__7340__delegate.call(this,_);};
G__7340.cljs$lang$maxFixedArity = 0;
G__7340.cljs$lang$applyTo = (function (arglist__7342){
var _ = cljs.core.seq(arglist__7342);
return G__7340__delegate(_);
});
G__7340.cljs$core$IFn$_invoke$arity$variadic = G__7340__delegate;
return G__7340;
})()
;})(js_files,map__7338,map__7338__$1,on_jsload))
,((function (js_files,map__7338,map__7338__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7338,map__7338__$1,on_jsload))
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

var seq__7347_7351 = cljs.core.seq.call(null,things_to_log);
var chunk__7348_7352 = null;
var count__7349_7353 = (0);
var i__7350_7354 = (0);
while(true){
if((i__7350_7354 < count__7349_7353)){
var t_7355 = cljs.core._nth.call(null,chunk__7348_7352,i__7350_7354);
console.log(t_7355);

var G__7356 = seq__7347_7351;
var G__7357 = chunk__7348_7352;
var G__7358 = count__7349_7353;
var G__7359 = (i__7350_7354 + (1));
seq__7347_7351 = G__7356;
chunk__7348_7352 = G__7357;
count__7349_7353 = G__7358;
i__7350_7354 = G__7359;
continue;
} else {
var temp__4425__auto___7360 = cljs.core.seq.call(null,seq__7347_7351);
if(temp__4425__auto___7360){
var seq__7347_7361__$1 = temp__4425__auto___7360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7347_7361__$1)){
var c__5806__auto___7362 = cljs.core.chunk_first.call(null,seq__7347_7361__$1);
var G__7363 = cljs.core.chunk_rest.call(null,seq__7347_7361__$1);
var G__7364 = c__5806__auto___7362;
var G__7365 = cljs.core.count.call(null,c__5806__auto___7362);
var G__7366 = (0);
seq__7347_7351 = G__7363;
chunk__7348_7352 = G__7364;
count__7349_7353 = G__7365;
i__7350_7354 = G__7366;
continue;
} else {
var t_7367 = cljs.core.first.call(null,seq__7347_7361__$1);
console.log(t_7367);

var G__7368 = cljs.core.next.call(null,seq__7347_7361__$1);
var G__7369 = null;
var G__7370 = (0);
var G__7371 = (0);
seq__7347_7351 = G__7368;
chunk__7348_7352 = G__7369;
count__7349_7353 = G__7370;
i__7350_7354 = G__7371;
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

var G__7373 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7373,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7373);

adzerk.boot_reload.reload.reload_css.call(null,G__7373);

adzerk.boot_reload.reload.reload_img.call(null,G__7373);

return G__7373;
});

//# sourceMappingURL=reload.js.map