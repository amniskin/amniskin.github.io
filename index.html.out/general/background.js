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
var vec__14841 = tailrecursion.hoplon.parse_args.call(null,args__6627__auto__);
var map__14842 = cljs.core.nth.call(null,vec__14841,(0),null);
var map__14842__$1 = ((((!((map__14842 == null)))?((((map__14842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14842):map__14842);
var url = cljs.core.get.call(null,map__14842__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__14841,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("display: block;\n                    background-image:url('"),cljs.core.str(url),cljs.core.str("');\n                    background-size:length:auto 100vh;\n                    background-repeat: no-repeat;\n                    background-attachment:fixed;")].join(''),new cljs.core.Keyword(null,"on-screen*","on-screen*",194938181),((function (vec__14841,map__14842,map__14842__$1,url,kids){
return (function (p1__4581_SHARP_,p2__4582_SHARP_){
return p1__4581_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__4582_SHARP_)),cljs.core.str("+ %")].join('');
});})(vec__14841,map__14842,map__14842__$1,url,kids))
,kids);
};
var general$background$fixed_img = function (var_args){
var args__6627__auto__ = null;
if (arguments.length > 0) {
var G__14844__i = 0, G__14844__a = new Array(arguments.length -  0);
while (G__14844__i < G__14844__a.length) {G__14844__a[G__14844__i] = arguments[G__14844__i + 0]; ++G__14844__i;}
  args__6627__auto__ = new cljs.core.IndexedSeq(G__14844__a,0);
} 
return general$background$fixed_img__delegate.call(this,args__6627__auto__);};
general$background$fixed_img.cljs$lang$maxFixedArity = 0;
general$background$fixed_img.cljs$lang$applyTo = (function (arglist__14845){
var args__6627__auto__ = cljs.core.seq(arglist__14845);
return general$background$fixed_img__delegate(args__6627__auto__);
});
general$background$fixed_img.cljs$core$IFn$_invoke$arity$variadic = general$background$fixed_img__delegate;
return general$background$fixed_img;
})()
;

//# sourceMappingURL=background.js.map