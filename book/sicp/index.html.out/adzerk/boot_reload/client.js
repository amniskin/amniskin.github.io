// Compiled by ClojureScript 1.7.48 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.client.alive_QMARK_ = (function adzerk$boot_reload$client$alive_QMARK_(){
return !((cljs.core.deref.call(null,adzerk.boot_reload.client.ws_conn) == null));
});
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(){
var args__6068__auto__ = [];
var len__6061__auto___16972 = arguments.length;
var i__6062__auto___16973 = (0);
while(true){
if((i__6062__auto___16973 < len__6061__auto___16972)){
args__6068__auto__.push((arguments[i__6062__auto___16973]));

var G__16974 = (i__6062__auto___16973 + (1));
i__6062__auto___16973 = G__16974;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16970){
var vec__16971 = p__16970;
var opts = cljs.core.nth.call(null,vec__16971,(0),null);
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__16971,opts){
return (function (evt){
clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,window.location.protocol));

return console.info("Reload websocket connected.");
});})(conn,vec__16971,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__16971,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
if(cljs.core.vector_QMARK_.call(null,msg)){
return adzerk.boot_reload.reload.reload.call(null,opts,msg);
} else {
return null;
}
});})(conn,vec__16971,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__16971,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__16971,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__16971,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__16971,opts))
);

return clojure.browser.net.connect.call(null,conn,url);
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq16968){
var G__16969 = cljs.core.first.call(null,seq16968);
var seq16968__$1 = cljs.core.next.call(null,seq16968);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__16969,seq16968__$1);
});

//# sourceMappingURL=client.js.map