// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.cv.main');
goog.require('cljs.core');
goog.require('ui.style');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.cv.main.content = (function() { 
var content$cv$main$content__delegate = function (args__5784__auto__){
var vec__13166 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__13166,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13166,(1),null);
return ui.style.page.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"cv",tailrecursion.hoplon.iframe.call(null,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),tailrecursion.javelin.formula.call(null,((function (vec__13166,_,___$1){
return (function (G__13167){
return (G__13167 - (50));
});})(vec__13166,_,___$1))
).call(null,ui.info.screen_height),new cljs.core.Keyword(null,"src","src",-1651076051),"pdf/My_CV.pdf",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0"));
};
var content$cv$main$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__13168__i = 0, G__13168__a = new Array(arguments.length -  0);
while (G__13168__i < G__13168__a.length) {G__13168__a[G__13168__i] = arguments[G__13168__i + 0]; ++G__13168__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__13168__a,0);
} 
return content$cv$main$content__delegate.call(this,args__5784__auto__);};
content$cv$main$content.cljs$lang$maxFixedArity = 0;
content$cv$main$content.cljs$lang$applyTo = (function (arglist__13169){
var args__5784__auto__ = cljs.core.seq(arglist__13169);
return content$cv$main$content__delegate(args__5784__auto__);
});
content$cv$main$content.cljs$core$IFn$_invoke$arity$variadic = content$cv$main$content__delegate;
return content$cv$main$content;
})()
;

//# sourceMappingURL=main.js.map