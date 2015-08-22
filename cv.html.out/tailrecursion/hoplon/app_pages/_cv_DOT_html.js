// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.hoplon.app_pages._cv_DOT_html');
goog.require('cljs.core');
goog.require('general.head');
goog.require('general.navbar');
goog.require('general.pdf');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$lang,"en",(function (){var G__8951 = (tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Aaron's CV") : tailrecursion.hoplon.title.call(null,"Aaron's CV"));
var G__8952 = general.head.viewport();
var G__8953 = general.head.bootstrap();
return (tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.head.cljs$core$IFn$_invoke$arity$3(G__8951,G__8952,G__8953) : tailrecursion.hoplon.head.call(null,G__8951,G__8952,G__8953));
})(),(function (){var G__8954 = general.navbar.fixed();
var G__8955 = general.pdf.viewer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$src,"/pdf/My_CV.pdf"], 0));
return (tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.body.cljs$core$IFn$_invoke$arity$2(G__8954,G__8955) : tailrecursion.hoplon.body.call(null,G__8954,G__8955));
})()], 0));
