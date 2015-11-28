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
return (function (p1__7050_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7050_SHARP_,path);
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
var seq__7055 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7056 = null;
var count__7057 = (0);
var i__7058 = (0);
while(true){
if((i__7058 < count__7057)){
var s = cljs.core._nth.call(null,chunk__7056,i__7058);
var temp__4425__auto___7059 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7059)){
var sheet_7060 = temp__4425__auto___7059;
var temp__4425__auto___7061__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7060.href,changed);
if(cljs.core.truth_(temp__4425__auto___7061__$1)){
var href_uri_7062 = temp__4425__auto___7061__$1;
sheet_7060.ownerNode.href = href_uri_7062.makeUnique().toString();
} else {
}
} else {
}

var G__7063 = seq__7055;
var G__7064 = chunk__7056;
var G__7065 = count__7057;
var G__7066 = (i__7058 + (1));
seq__7055 = G__7063;
chunk__7056 = G__7064;
count__7057 = G__7065;
i__7058 = G__7066;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7055);
if(temp__4425__auto__){
var seq__7055__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7055__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7055__$1);
var G__7067 = cljs.core.chunk_rest.call(null,seq__7055__$1);
var G__7068 = c__5806__auto__;
var G__7069 = cljs.core.count.call(null,c__5806__auto__);
var G__7070 = (0);
seq__7055 = G__7067;
chunk__7056 = G__7068;
count__7057 = G__7069;
i__7058 = G__7070;
continue;
} else {
var s = cljs.core.first.call(null,seq__7055__$1);
var temp__4425__auto___7071__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7071__$1)){
var sheet_7072 = temp__4425__auto___7071__$1;
var temp__4425__auto___7073__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7072.href,changed);
if(cljs.core.truth_(temp__4425__auto___7073__$2)){
var href_uri_7074 = temp__4425__auto___7073__$2;
sheet_7072.ownerNode.href = href_uri_7074.makeUnique().toString();
} else {
}
} else {
}

var G__7075 = cljs.core.next.call(null,seq__7055__$1);
var G__7076 = null;
var G__7077 = (0);
var G__7078 = (0);
seq__7055 = G__7075;
chunk__7056 = G__7076;
count__7057 = G__7077;
i__7058 = G__7078;
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
var seq__7083 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7084 = null;
var count__7085 = (0);
var i__7086 = (0);
while(true){
if((i__7086 < count__7085)){
var s = cljs.core._nth.call(null,chunk__7084,i__7086);
var temp__4425__auto___7087 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7087)){
var image_7088 = temp__4425__auto___7087;
var temp__4425__auto___7089__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7088.src,changed);
if(cljs.core.truth_(temp__4425__auto___7089__$1)){
var href_uri_7090 = temp__4425__auto___7089__$1;
image_7088.src = href_uri_7090.makeUnique().toString();
} else {
}
} else {
}

var G__7091 = seq__7083;
var G__7092 = chunk__7084;
var G__7093 = count__7085;
var G__7094 = (i__7086 + (1));
seq__7083 = G__7091;
chunk__7084 = G__7092;
count__7085 = G__7093;
i__7086 = G__7094;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7083);
if(temp__4425__auto__){
var seq__7083__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7083__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7083__$1);
var G__7095 = cljs.core.chunk_rest.call(null,seq__7083__$1);
var G__7096 = c__5806__auto__;
var G__7097 = cljs.core.count.call(null,c__5806__auto__);
var G__7098 = (0);
seq__7083 = G__7095;
chunk__7084 = G__7096;
count__7085 = G__7097;
i__7086 = G__7098;
continue;
} else {
var s = cljs.core.first.call(null,seq__7083__$1);
var temp__4425__auto___7099__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7099__$1)){
var image_7100 = temp__4425__auto___7099__$1;
var temp__4425__auto___7101__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7100.src,changed);
if(cljs.core.truth_(temp__4425__auto___7101__$2)){
var href_uri_7102 = temp__4425__auto___7101__$2;
image_7100.src = href_uri_7102.makeUnique().toString();
} else {
}
} else {
}

var G__7103 = cljs.core.next.call(null,seq__7083__$1);
var G__7104 = null;
var G__7105 = (0);
var G__7106 = (0);
seq__7083 = G__7103;
chunk__7084 = G__7104;
count__7085 = G__7105;
i__7086 = G__7106;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7109){
var map__7112 = p__7109;
var map__7112__$1 = ((((!((map__7112 == null)))?((((map__7112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7112):map__7112);
var on_jsload = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7112,map__7112__$1,on_jsload){
return (function (p1__7107_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7107_SHARP_,".js");
});})(map__7112,map__7112__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7112,map__7112__$1,on_jsload){
return (function (p1__7108_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7108_SHARP_).makeUnique());
});})(js_files,map__7112,map__7112__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7112,map__7112__$1,on_jsload){
return (function() { 
var G__7114__delegate = function (_){
return on_jsload.call(null);
};
var G__7114 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7115__i = 0, G__7115__a = new Array(arguments.length -  0);
while (G__7115__i < G__7115__a.length) {G__7115__a[G__7115__i] = arguments[G__7115__i + 0]; ++G__7115__i;}
  _ = new cljs.core.IndexedSeq(G__7115__a,0);
} 
return G__7114__delegate.call(this,_);};
G__7114.cljs$lang$maxFixedArity = 0;
G__7114.cljs$lang$applyTo = (function (arglist__7116){
var _ = cljs.core.seq(arglist__7116);
return G__7114__delegate(_);
});
G__7114.cljs$core$IFn$_invoke$arity$variadic = G__7114__delegate;
return G__7114;
})()
;})(js_files,map__7112,map__7112__$1,on_jsload))
,((function (js_files,map__7112,map__7112__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7112,map__7112__$1,on_jsload))
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

var seq__7121_7125 = cljs.core.seq.call(null,things_to_log);
var chunk__7122_7126 = null;
var count__7123_7127 = (0);
var i__7124_7128 = (0);
while(true){
if((i__7124_7128 < count__7123_7127)){
var t_7129 = cljs.core._nth.call(null,chunk__7122_7126,i__7124_7128);
console.log(t_7129);

var G__7130 = seq__7121_7125;
var G__7131 = chunk__7122_7126;
var G__7132 = count__7123_7127;
var G__7133 = (i__7124_7128 + (1));
seq__7121_7125 = G__7130;
chunk__7122_7126 = G__7131;
count__7123_7127 = G__7132;
i__7124_7128 = G__7133;
continue;
} else {
var temp__4425__auto___7134 = cljs.core.seq.call(null,seq__7121_7125);
if(temp__4425__auto___7134){
var seq__7121_7135__$1 = temp__4425__auto___7134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7121_7135__$1)){
var c__5806__auto___7136 = cljs.core.chunk_first.call(null,seq__7121_7135__$1);
var G__7137 = cljs.core.chunk_rest.call(null,seq__7121_7135__$1);
var G__7138 = c__5806__auto___7136;
var G__7139 = cljs.core.count.call(null,c__5806__auto___7136);
var G__7140 = (0);
seq__7121_7125 = G__7137;
chunk__7122_7126 = G__7138;
count__7123_7127 = G__7139;
i__7124_7128 = G__7140;
continue;
} else {
var t_7141 = cljs.core.first.call(null,seq__7121_7135__$1);
console.log(t_7141);

var G__7142 = cljs.core.next.call(null,seq__7121_7135__$1);
var G__7143 = null;
var G__7144 = (0);
var G__7145 = (0);
seq__7121_7125 = G__7142;
chunk__7122_7126 = G__7143;
count__7123_7127 = G__7144;
i__7124_7128 = G__7145;
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

var G__7147 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7147,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7147);

adzerk.boot_reload.reload.reload_css.call(null,G__7147);

adzerk.boot_reload.reload.reload_img.call(null,G__7147);

return G__7147;
});

//# sourceMappingURL=reload.js.map