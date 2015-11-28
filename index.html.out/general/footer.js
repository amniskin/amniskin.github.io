// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.footer');
goog.require('cljs.core');
goog.require('general.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.footer.content = (function() { 
var general$footer$content__delegate = function (args__6627__auto__){
var vec__14619 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var _ = cljs.core.nth.call(null,vec__14619,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14619,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-12",tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"text-align:center;",[cljs.core.str("\u00A9 "),cljs.core.str(general.info.date.getFullYear()),cljs.core.str(" Aaron Niskin. All rights reserved.")].join('')));
};
var general$footer$content = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14620__i = 0, G__14620__a = new Array(arguments.length -  0);
while (G__14620__i < G__14620__a.length) {G__14620__a[G__14620__i] = arguments[G__14620__i + 0]; ++G__14620__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14620__a,0);
} 
return general$footer$content__delegate.call(this,args__6627__auto__);};
general$footer$content.cljs$lang$maxFixedArity = 0;
general$footer$content.cljs$lang$applyTo = (function (arglist__14621){
var args__6627__auto__ = cljs.core.seq(arglist__14621);
return general$footer$content__delegate(args__6627__auto__);
});
general$footer$content.cljs$core$IFn$_invoke$arity$variadic = general$footer$content__delegate;
return general$footer$content;
})()
;

//# sourceMappingURL=footer.js.map