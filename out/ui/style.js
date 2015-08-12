// Compiled by ClojureScript 0.0-3308 {}
goog.provide('ui.style');
goog.require('cljs.core');
goog.require('ui.info');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
ui.style.location = tailrecursion.javelin.formula.call(null,(function (G__29002){
return G__29002;
})).call(null,ui.info.location);
ui.style.bg_color = "#5CBEFF";
/**
 * @param {...*} var_args
 */
ui.style.page = (function() { 
var ui$style$page__delegate = function (args__5784__auto__){
var vec__29011 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__29012 = cljs.core.nth.call(null,vec__29011,(0),null);
var map__29012__$1 = ((cljs.core.seq_QMARK_.call(null,map__29012))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var name = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kids = cljs.core.nth.call(null,vec__29011,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),tailrecursion.javelin.formula.call(null,((function (vec__29011,map__29012,map__29012__$1,name,kids){
return (function (G__29013,G__29014,G__29015){
return G__29013.call(null,G__29014,G__29015);
});})(vec__29011,map__29012,map__29012__$1,name,kids))
).call(null,cljs.core._EQ_,ui.info.location,name),new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),tailrecursion.javelin.formula.call(null,((function (vec__29011,map__29012,map__29012__$1,name,kids){
return (function (G__29017,G__29016,G__29018){
return G__29016.call(null,G__29017,G__29018);
});})(vec__29011,map__29012,map__29012__$1,name,kids))
).call(null,ui.info.scroll_location,cljs.core._EQ_,name)),kids);
};
var ui$style$page = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29019__i = 0, G__29019__a = new Array(arguments.length -  0);
while (G__29019__i < G__29019__a.length) {G__29019__a[G__29019__i] = arguments[G__29019__i + 0]; ++G__29019__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29019__a,0);
} 
return ui$style$page__delegate.call(this,args__5784__auto__);};
ui$style$page.cljs$lang$maxFixedArity = 0;
ui$style$page.cljs$lang$applyTo = (function (arglist__29020){
var args__5784__auto__ = cljs.core.seq(arglist__29020);
return ui$style$page__delegate(args__5784__auto__);
});
ui$style$page.cljs$core$IFn$_invoke$arity$variadic = ui$style$page__delegate;
return ui$style$page;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.sidebar = (function() { 
var ui$style$sidebar__delegate = function (args__5784__auto__){
var vec__29022 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29022,(0),null);
var kids = cljs.core.nth.call(null,vec__29022,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4 col-sm-4 hidden-xs"),attr,kids);
};
var ui$style$sidebar = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29023__i = 0, G__29023__a = new Array(arguments.length -  0);
while (G__29023__i < G__29023__a.length) {G__29023__a[G__29023__i] = arguments[G__29023__i + 0]; ++G__29023__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29023__a,0);
} 
return ui$style$sidebar__delegate.call(this,args__5784__auto__);};
ui$style$sidebar.cljs$lang$maxFixedArity = 0;
ui$style$sidebar.cljs$lang$applyTo = (function (arglist__29024){
var args__5784__auto__ = cljs.core.seq(arglist__29024);
return ui$style$sidebar__delegate(args__5784__auto__);
});
ui$style$sidebar.cljs$core$IFn$_invoke$arity$variadic = ui$style$sidebar__delegate;
return ui$style$sidebar;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.divider = (function() { 
var ui$style$divider__delegate = function (args__5784__auto__){
var vec__29026 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29026,(0),null);
var kids = cljs.core.nth.call(null,vec__29026,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"hidden-xs",new cljs.core.Keyword(null,"style","style",-496642736),"height: 100px"),attr,kids);
};
var ui$style$divider = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29027__i = 0, G__29027__a = new Array(arguments.length -  0);
while (G__29027__i < G__29027__a.length) {G__29027__a[G__29027__i] = arguments[G__29027__i + 0]; ++G__29027__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29027__a,0);
} 
return ui$style$divider__delegate.call(this,args__5784__auto__);};
ui$style$divider.cljs$lang$maxFixedArity = 0;
ui$style$divider.cljs$lang$applyTo = (function (arglist__29028){
var args__5784__auto__ = cljs.core.seq(arglist__29028);
return ui$style$divider__delegate(args__5784__auto__);
});
ui$style$divider.cljs$core$IFn$_invoke$arity$variadic = ui$style$divider__delegate;
return ui$style$divider;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.content_with_sidebar = (function() { 
var ui$style$content_with_sidebar__delegate = function (args__5784__auto__){
var vec__29030 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29030,(0),null);
var kids = cljs.core.nth.call(null,vec__29030,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8 col-sm-8 col-xs-12",new cljs.core.Keyword(null,"style","style",-496642736),"padding-right-5%; padding-bottom-5%;"),attr,kids);
};
var ui$style$content_with_sidebar = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29031__i = 0, G__29031__a = new Array(arguments.length -  0);
while (G__29031__i < G__29031__a.length) {G__29031__a[G__29031__i] = arguments[G__29031__i + 0]; ++G__29031__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29031__a,0);
} 
return ui$style$content_with_sidebar__delegate.call(this,args__5784__auto__);};
ui$style$content_with_sidebar.cljs$lang$maxFixedArity = 0;
ui$style$content_with_sidebar.cljs$lang$applyTo = (function (arglist__29032){
var args__5784__auto__ = cljs.core.seq(arglist__29032);
return ui$style$content_with_sidebar__delegate(args__5784__auto__);
});
ui$style$content_with_sidebar.cljs$core$IFn$_invoke$arity$variadic = ui$style$content_with_sidebar__delegate;
return ui$style$content_with_sidebar;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.container = (function() { 
var ui$style$container__delegate = function (args__5784__auto__){
var vec__29034 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29034,(0),null);
var kids = cljs.core.nth.call(null,vec__29034,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"container"),attr,kids);
};
var ui$style$container = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29035__i = 0, G__29035__a = new Array(arguments.length -  0);
while (G__29035__i < G__29035__a.length) {G__29035__a[G__29035__i] = arguments[G__29035__i + 0]; ++G__29035__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29035__a,0);
} 
return ui$style$container__delegate.call(this,args__5784__auto__);};
ui$style$container.cljs$lang$maxFixedArity = 0;
ui$style$container.cljs$lang$applyTo = (function (arglist__29036){
var args__5784__auto__ = cljs.core.seq(arglist__29036);
return ui$style$container__delegate(args__5784__auto__);
});
ui$style$container.cljs$core$IFn$_invoke$arity$variadic = ui$style$container__delegate;
return ui$style$container;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.glyph_list_black = (function() { 
var ui$style$glyph_list_black__delegate = function (args__5784__auto__){
var vec__29038 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var _ = cljs.core.nth.call(null,vec__29038,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29038,(1),null);
return tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"glyphicon glyphicon--list-alt",new cljs.core.Keyword(null,"style","style",-496642736),"color:black;");
};
var ui$style$glyph_list_black = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29039__i = 0, G__29039__a = new Array(arguments.length -  0);
while (G__29039__i < G__29039__a.length) {G__29039__a[G__29039__i] = arguments[G__29039__i + 0]; ++G__29039__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29039__a,0);
} 
return ui$style$glyph_list_black__delegate.call(this,args__5784__auto__);};
ui$style$glyph_list_black.cljs$lang$maxFixedArity = 0;
ui$style$glyph_list_black.cljs$lang$applyTo = (function (arglist__29040){
var args__5784__auto__ = cljs.core.seq(arglist__29040);
return ui$style$glyph_list_black__delegate(args__5784__auto__);
});
ui$style$glyph_list_black.cljs$core$IFn$_invoke$arity$variadic = ui$style$glyph_list_black__delegate;
return ui$style$glyph_list_black;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.jumbotron = (function() { 
var ui$style$jumbotron__delegate = function (args__5784__auto__){
var vec__29042 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29042,(0),null);
var kids = cljs.core.nth.call(null,vec__29042,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"jumbotron",new cljs.core.Keyword(null,"style","style",-496642736),"background-color: inherit;"),attr,kids);
};
var ui$style$jumbotron = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29043__i = 0, G__29043__a = new Array(arguments.length -  0);
while (G__29043__i < G__29043__a.length) {G__29043__a[G__29043__i] = arguments[G__29043__i + 0]; ++G__29043__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29043__a,0);
} 
return ui$style$jumbotron__delegate.call(this,args__5784__auto__);};
ui$style$jumbotron.cljs$lang$maxFixedArity = 0;
ui$style$jumbotron.cljs$lang$applyTo = (function (arglist__29044){
var args__5784__auto__ = cljs.core.seq(arglist__29044);
return ui$style$jumbotron__delegate(args__5784__auto__);
});
ui$style$jumbotron.cljs$core$IFn$_invoke$arity$variadic = ui$style$jumbotron__delegate;
return ui$style$jumbotron;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.background = (function() { 
var ui$style$background__delegate = function (args__5784__auto__){
var vec__29047 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__29048 = cljs.core.nth.call(null,vec__29047,(0),null);
var map__29048__$1 = ((cljs.core.seq_QMARK_.call(null,map__29048))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var url = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__29047,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("display:block; background-image:url('"),cljs.core.str(url),cljs.core.str("'); background-size:length:auto 100vh; background-repeat: no-repeat;background-attachment:fixed;")].join(''),new cljs.core.Keyword(null,"on-screen*","on-screen*",194938181),((function (vec__29047,map__29048,map__29048__$1,url,kids){
return (function (p1__4589_SHARP_,p2__4590_SHARP_){
return p1__4589_SHARP_.style.backgroundPosition = [cljs.core.str("50% +"),cljs.core.str(((1000) * p2__4590_SHARP_)),cljs.core.str("+ %")].join('');
});})(vec__29047,map__29048,map__29048__$1,url,kids))
,kids);
};
var ui$style$background = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29049__i = 0, G__29049__a = new Array(arguments.length -  0);
while (G__29049__i < G__29049__a.length) {G__29049__a[G__29049__i] = arguments[G__29049__i + 0]; ++G__29049__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29049__a,0);
} 
return ui$style$background__delegate.call(this,args__5784__auto__);};
ui$style$background.cljs$lang$maxFixedArity = 0;
ui$style$background.cljs$lang$applyTo = (function (arglist__29050){
var args__5784__auto__ = cljs.core.seq(arglist__29050);
return ui$style$background__delegate(args__5784__auto__);
});
ui$style$background.cljs$core$IFn$_invoke$arity$variadic = ui$style$background__delegate;
return ui$style$background;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.background_section = (function() { 
var ui$style$background_section__delegate = function (args__5784__auto__){
var vec__29053 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__29054 = cljs.core.nth.call(null,vec__29053,(0),null);
var map__29054__$1 = ((cljs.core.seq_QMARK_.call(null,map__29054))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var url = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"url","url",276297046));
var kids = cljs.core.nth.call(null,vec__29053,(1),null);
return ui.style.background.call(null,new cljs.core.Keyword(null,"url","url",276297046),url,ui.style.container.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top:20%;padding-bottom:20%;",new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-6 col-sm-offset-3 text-center",tailrecursion.hoplon.h2.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"color: #ffffff; padding:20px;background-color:rgba(5,5,5,.8)",kids))));
};
var ui$style$background_section = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29055__i = 0, G__29055__a = new Array(arguments.length -  0);
while (G__29055__i < G__29055__a.length) {G__29055__a[G__29055__i] = arguments[G__29055__i + 0]; ++G__29055__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29055__a,0);
} 
return ui$style$background_section__delegate.call(this,args__5784__auto__);};
ui$style$background_section.cljs$lang$maxFixedArity = 0;
ui$style$background_section.cljs$lang$applyTo = (function (arglist__29056){
var args__5784__auto__ = cljs.core.seq(arglist__29056);
return ui$style$background_section__delegate(args__5784__auto__);
});
ui$style$background_section.cljs$core$IFn$_invoke$arity$variadic = ui$style$background_section__delegate;
return ui$style$background_section;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.row = (function() { 
var ui$style$row__delegate = function (args__5784__auto__){
var vec__29058 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29058,(0),null);
var kids = cljs.core.nth.call(null,vec__29058,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"row"),attr,kids);
};
var ui$style$row = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29059__i = 0, G__29059__a = new Array(arguments.length -  0);
while (G__29059__i < G__29059__a.length) {G__29059__a[G__29059__i] = arguments[G__29059__i + 0]; ++G__29059__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29059__a,0);
} 
return ui$style$row__delegate.call(this,args__5784__auto__);};
ui$style$row.cljs$lang$maxFixedArity = 0;
ui$style$row.cljs$lang$applyTo = (function (arglist__29060){
var args__5784__auto__ = cljs.core.seq(arglist__29060);
return ui$style$row__delegate(args__5784__auto__);
});
ui$style$row.cljs$core$IFn$_invoke$arity$variadic = ui$style$row__delegate;
return ui$style$row;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.well = (function() { 
var ui$style$well__delegate = function (args__5784__auto__){
var vec__29062 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29062,(0),null);
var kids = cljs.core.nth.call(null,vec__29062,(1),null);
return cljs.core.apply.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"well"),attr,kids);
};
var ui$style$well = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29063__i = 0, G__29063__a = new Array(arguments.length -  0);
while (G__29063__i < G__29063__a.length) {G__29063__a[G__29063__i] = arguments[G__29063__i + 0]; ++G__29063__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29063__a,0);
} 
return ui$style$well__delegate.call(this,args__5784__auto__);};
ui$style$well.cljs$lang$maxFixedArity = 0;
ui$style$well.cljs$lang$applyTo = (function (arglist__29064){
var args__5784__auto__ = cljs.core.seq(arglist__29064);
return ui$style$well__delegate(args__5784__auto__);
});
ui$style$well.cljs$core$IFn$_invoke$arity$variadic = ui$style$well__delegate;
return ui$style$well;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.content_bubble = (function() { 
var ui$style$content_bubble__delegate = function (args__5784__auto__){
var vec__29066 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__29066,(0),null);
var kids = cljs.core.nth.call(null,vec__29066,(1),null);
return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4 col-sm-4 col-xs-12",ui.style.well.call(null,attr,kids));
};
var ui$style$content_bubble = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29067__i = 0, G__29067__a = new Array(arguments.length -  0);
while (G__29067__i < G__29067__a.length) {G__29067__a[G__29067__i] = arguments[G__29067__i + 0]; ++G__29067__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29067__a,0);
} 
return ui$style$content_bubble__delegate.call(this,args__5784__auto__);};
ui$style$content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$content_bubble.cljs$lang$applyTo = (function (arglist__29068){
var args__5784__auto__ = cljs.core.seq(arglist__29068);
return ui$style$content_bubble__delegate(args__5784__auto__);
});
ui$style$content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$content_bubble__delegate;
return ui$style$content_bubble;
})()
;
/**
 * @param {...*} var_args
 */
ui.style.img_content_bubble = (function() { 
var ui$style$img_content_bubble__delegate = function (args__5784__auto__){
var vec__29071 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var map__29072 = cljs.core.nth.call(null,vec__29071,(0),null);
var map__29072__$1 = ((cljs.core.seq_QMARK_.call(null,map__29072))?cljs.core.apply.call(null,cljs.core.hash_map,map__29072):map__29072);
var src = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var kids = cljs.core.nth.call(null,vec__29071,(1),null);
return ui.style.content_bubble.call(null,tailrecursion.hoplon.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"class","class",-2030961996),"img-responsive"),tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"style","style",-496642736),"padding-top:5;",kids));
};
var ui$style$img_content_bubble = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__29073__i = 0, G__29073__a = new Array(arguments.length -  0);
while (G__29073__i < G__29073__a.length) {G__29073__a[G__29073__i] = arguments[G__29073__i + 0]; ++G__29073__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__29073__a,0);
} 
return ui$style$img_content_bubble__delegate.call(this,args__5784__auto__);};
ui$style$img_content_bubble.cljs$lang$maxFixedArity = 0;
ui$style$img_content_bubble.cljs$lang$applyTo = (function (arglist__29074){
var args__5784__auto__ = cljs.core.seq(arglist__29074);
return ui$style$img_content_bubble__delegate(args__5784__auto__);
});
ui$style$img_content_bubble.cljs$core$IFn$_invoke$arity$variadic = ui$style$img_content_bubble__delegate;
return ui$style$img_content_bubble;
})()
;

//# sourceMappingURL=style.js.map