// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.footer.main');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.footer.main.content = (function() { 
var content$footer$main$content__delegate = function (args__5784__auto__){
var vec__28997 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__28997,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28997,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-12",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"text-align:center;",[cljs.core.str("\u00A9 "),cljs.core.str(ui.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('')));
};
var content$footer$main$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__28998__i = 0, G__28998__a = new Array(arguments.length -  0);
while (G__28998__i < G__28998__a.length) {G__28998__a[G__28998__i] = arguments[G__28998__i + 0]; ++G__28998__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__28998__a,0);
} 
return content$footer$main$content__delegate.call(this,args__5784__auto__);};
content$footer$main$content.cljs$lang$maxFixedArity = 0;
content$footer$main$content.cljs$lang$applyTo = (function (arglist__28999){
var args__5784__auto__ = cljs.core.seq(arglist__28999);
return content$footer$main$content__delegate(args__5784__auto__);
});
content$footer$main$content.cljs$core$IFn$_invoke$arity$variadic = content$footer$main$content__delegate;
return content$footer$main$content;
})()
;

//# sourceMappingURL=main.js.map