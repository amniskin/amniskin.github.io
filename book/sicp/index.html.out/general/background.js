// Compiled by ClojureScript 1.7.48 {}
goog.provide('general.background');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
general.background.fixed_img = (function() { 
var general$background$fixed_img__delegate = function (args__6627__auto__){
var vec__86231 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__86232 = cljs.core.nth.call(null,vec__86231,(0),null);
var map__86232__$1 = ((((!((map__86232 == null)))?((((map__86232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86232):map__86232);
var url = cljs.core.get.call(null,map__86232__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__86231,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join(''),new cljs.core.Keyword(null,"on-screen*","on-screen*",194938181),((function (vec__86231,map__86232,map__86232__$1,url,kids){
return (function (p1__4581_SHARP_,p2__4582_SHARP_){
return p1__4581_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__4582_SHARP_)),cljs.core.str("+ %")].join('');
});})(vec__86231,map__86232,map__86232__$1,url,kids))
,kids);
};
var general$background$fixed_img = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__86234__i = 0, G__86234__a = new Array(arguments.length -  0);
while (G__86234__i < G__86234__a.length) {G__86234__a[G__86234__i] = arguments[G__86234__i + 0]; ++G__86234__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__86234__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__6627__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__86235){
var args__6627__auto__ = cljs.core.seq(arglist__86235);
return general$background$fixed_img__delegate(args__6627__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;

//# sourceMappingURL=background.js.map