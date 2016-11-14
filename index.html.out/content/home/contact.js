// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('content.home.contact');
goog.require('cljs.core');
goog.require('general.bootstrap');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.home.contact.content = (function() { 
var content$home$contact$content__delegate = function (args__8082__auto__){
var vec__11241 = tailrecursion.hoplon.parse_args(args__8082__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,(1),null);
return general.bootstrap.container.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11372 = cljs.core.cst$kw$class;
var G__11373 = "col-md-8 col-sm-8 col-xs-12";
var G__11374 = (function (){var G__11421 = cljs.core.cst$kw$action;
var G__11422 = "https://docs.google.com/forms/d/16bW8Vz8Z3sjWN1LurIOy3AM64oTXO7eSkzRcVNQYKVo/formResponse";
var G__11423 = cljs.core.cst$kw$method;
var G__11424 = "post";
var G__11425 = cljs.core.cst$kw$id;
var G__11426 = "ss-form";
var G__11427 = cljs.core.cst$kw$target;
var G__11428 = "_self";
var G__11429 = cljs.core.cst$kw$onsubmit;
var G__11430 = "";
var G__11431 = general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var valid_QMARK_ = tailrecursion.javelin.cell(null);
var G__11446 = cljs.core.cst$kw$class;
var G__11447 = "col-xs-12 col-sm-6 col-md-6";
var G__11448 = (function (){var G__11449 = cljs.core.cst$kw$class;
var G__11450 = tailrecursion.javelin.formula(((function (G__11449,G__11446,G__11447,valid_QMARK_,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_group,true,cljs.core.cst$kw$has_DASH_success,false,cljs.core.cst$kw$has_DASH_error,false,cljs.core.cst$kw$has_DASH_feedback,true], null);
});})(G__11449,G__11446,G__11447,valid_QMARK_,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids))
).call(null);
var G__11451 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$for,"entry.1351197672",cljs.core.cst$kw$class,"control-label","First Name") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry.1351197672",cljs.core.cst$kw$class,"control-label","First Name"));
var G__11452 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$12 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$12(cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry.1351197672",cljs.core.cst$kw$placeholder,"First",cljs.core.cst$kw$aria_DASH_describedby,"first-nameStatus",cljs.core.cst$kw$name,"entry.1351197672") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry.1351197672",cljs.core.cst$kw$placeholder,"First",cljs.core.cst$kw$aria_DASH_describedby,"first-nameStatus",cljs.core.cst$kw$name,"entry.1351197672"));
var G__11453 = (function (){var G__11455 = cljs.core.cst$kw$class;
var G__11456 = tailrecursion.javelin.formula(((function (G__11455,G__11449,G__11450,G__11451,G__11452,G__11446,G__11447,valid_QMARK_,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_ok,false,cljs.core.cst$kw$glyphicon_DASH_remove,false,cljs.core.cst$kw$form_DASH_control_DASH_feedback,true], null);
});})(G__11455,G__11449,G__11450,G__11451,G__11452,G__11446,G__11447,valid_QMARK_,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids))
).call(null);
var G__11457 = cljs.core.cst$kw$aria_DASH_hidden;
var G__11458 = "true";
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__11455,G__11456,G__11457,G__11458) : tailrecursion.hoplon.span.call(null,G__11455,G__11456,G__11457,G__11458));
})();
var G__11454 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$id,"first-nameStatus",cljs.core.cst$kw$class,"sr-only","(success)") : tailrecursion.hoplon.span.call(null,cljs.core.cst$kw$id,"first-nameStatus",cljs.core.cst$kw$class,"sr-only","(success)"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__11449,G__11450,G__11451,G__11452,G__11453,G__11454) : tailrecursion.hoplon.div.call(null,G__11449,G__11450,G__11451,G__11452,G__11453,G__11454));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__11446,G__11447,G__11448) : tailrecursion.hoplon.div.call(null,G__11446,G__11447,G__11448));
})(),(function (){var G__11469 = cljs.core.cst$kw$class;
var G__11470 = "col-xs-12 col-sm-6 col-md-6";
var G__11471 = (function (){var G__11472 = cljs.core.cst$kw$class;
var G__11473 = tailrecursion.javelin.formula(((function (G__11472,G__11469,G__11470,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$form_DASH_group,true,cljs.core.cst$kw$has_DASH_success,false,cljs.core.cst$kw$has_DASH_error,false,cljs.core.cst$kw$has_DASH_feedback,true], null);
});})(G__11472,G__11469,G__11470,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids))
).call(null);
var G__11474 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$for,"entry_1358483461",cljs.core.cst$kw$class,"control-label","Last Name") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_1358483461",cljs.core.cst$kw$class,"control-label","Last Name"));
var G__11475 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$12 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$12(cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1358483461",cljs.core.cst$kw$placeholder,"Last",cljs.core.cst$kw$aria_DASH_describedby,"last-nameStatus",cljs.core.cst$kw$name,"entry_1358483461") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1358483461",cljs.core.cst$kw$placeholder,"Last",cljs.core.cst$kw$aria_DASH_describedby,"last-nameStatus",cljs.core.cst$kw$name,"entry_1358483461"));
var G__11476 = (function (){var G__11478 = cljs.core.cst$kw$class;
var G__11479 = tailrecursion.javelin.formula(((function (G__11478,G__11472,G__11473,G__11474,G__11475,G__11469,G__11470,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$glyphicon,true,cljs.core.cst$kw$glyphicon_DASH_ok,false,cljs.core.cst$kw$glyphicon_DASH_remove,false,cljs.core.cst$kw$form_DASH_control_DASH_feedback,true], null);
});})(G__11478,G__11472,G__11473,G__11474,G__11475,G__11469,G__11470,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11372,G__11373,vec__11241,attr,kids))
).call(null);
var G__11480 = cljs.core.cst$kw$aria_DASH_hidden;
var G__11481 = "true";
return (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$4(G__11478,G__11479,G__11480,G__11481) : tailrecursion.hoplon.span.call(null,G__11478,G__11479,G__11480,G__11481));
})();
var G__11477 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$id,"last-nameStatus",cljs.core.cst$kw$class,"sr-only","(success)") : tailrecursion.hoplon.span.call(null,cljs.core.cst$kw$id,"last-nameStatus",cljs.core.cst$kw$class,"sr-only","(success)"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__11472,G__11473,G__11474,G__11475,G__11476,G__11477) : tailrecursion.hoplon.div.call(null,G__11472,G__11473,G__11474,G__11475,G__11476,G__11477));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__11469,G__11470,G__11471) : tailrecursion.hoplon.div.call(null,G__11469,G__11470,G__11471));
})()], 0));
var G__11432 = general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11482 = cljs.core.cst$kw$class;
var G__11483 = "form-group has-feedback col-md-8 col-sm-12 col-xs-12";
var G__11484 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$for,"entry_254642901",cljs.core.cst$kw$class,"control-label","Email Address") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_254642901",cljs.core.cst$kw$class,"control-label","Email Address"));
var G__11485 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"email",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_254642901",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$name,"entry_254642901") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"email",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_254642901",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$name,"entry_254642901"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__11482,G__11483,G__11484,G__11485) : tailrecursion.hoplon.div.call(null,G__11482,G__11483,G__11484,G__11485));
})(),(function (){var G__11486 = cljs.core.cst$kw$class;
var G__11487 = "form-group col-md-4 col-sm-12 col-xs-12";
var G__11488 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$for,"entry_1652734510",cljs.core.cst$kw$class,"control-label","Telephone Number") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_1652734510",cljs.core.cst$kw$class,"control-label","Telephone Number"));
var G__11489 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"tel",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1652734510",cljs.core.cst$kw$placeholder,"Phone",cljs.core.cst$kw$name,"entry_1652734510") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"tel",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1652734510",cljs.core.cst$kw$placeholder,"Phone",cljs.core.cst$kw$name,"entry_1652734510"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__11486,G__11487,G__11488,G__11489) : tailrecursion.hoplon.div.call(null,G__11486,G__11487,G__11488,G__11489));
})()], 0));
var G__11433 = general.bootstrap.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__11490 = cljs.core.cst$kw$class;
var G__11491 = "form-group col-md-4 col-sm-12 col-xs-12";
var G__11492 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$for,"entry_825591887","Start Date") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_825591887","Start Date"));
var G__11493 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"date",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_825591887",cljs.core.cst$kw$placeholder,"Date",cljs.core.cst$kw$name,"entry_825591887") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"date",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_825591887",cljs.core.cst$kw$placeholder,"Date",cljs.core.cst$kw$name,"entry_825591887"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__11490,G__11491,G__11492,G__11493) : tailrecursion.hoplon.div.call(null,G__11490,G__11491,G__11492,G__11493));
})(),(function (){var G__11494 = cljs.core.cst$kw$class;
var G__11495 = "form-group col-md-8 col-sm-12 col-xs-12";
var G__11496 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$for,"entry_1486611433","What subject(s) are you inquiring about?") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_1486611433","What subject(s) are you inquiring about?"));
var G__11497 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1486611433",cljs.core.cst$kw$placeholder,"Subjects",cljs.core.cst$kw$name,"entry_1486611433") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1486611433",cljs.core.cst$kw$placeholder,"Subjects",cljs.core.cst$kw$name,"entry_1486611433"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__11494,G__11495,G__11496,G__11497) : tailrecursion.hoplon.div.call(null,G__11494,G__11495,G__11496,G__11497));
})()], 0));
var G__11434 = (function (){var G__11498 = cljs.core.cst$kw$class;
var G__11499 = "form-group";
var G__11500 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$for,"entry_1996187647","Any special considerations or requirements?") : tailrecursion.hoplon.label.call(null,cljs.core.cst$kw$for,"entry_1996187647","Any special considerations or requirements?"));
var G__11501 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1996187647",cljs.core.cst$kw$placeholder,"Considerations",cljs.core.cst$kw$name,"entry_1996187647") : tailrecursion.hoplon.input.call(null,cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"entry_1996187647",cljs.core.cst$kw$placeholder,"Considerations",cljs.core.cst$kw$name,"entry_1996187647"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(G__11498,G__11499,G__11500,G__11501) : tailrecursion.hoplon.div.call(null,G__11498,G__11499,G__11500,G__11501));
})();
var G__11435 = (function (){var G__11502 = cljs.core.cst$kw$class;
var G__11503 = "form-group";
var G__11504 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$10(cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"submit",cljs.core.cst$kw$text,"Submit",cljs.core.cst$kw$value,"submit") : tailrecursion.hoplon.button.call(null,cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"submit",cljs.core.cst$kw$text,"Submit",cljs.core.cst$kw$value,"submit"));
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__11502,G__11503,G__11504) : tailrecursion.hoplon.div.call(null,G__11502,G__11503,G__11504));
})().call(null);
return (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$15 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$15(G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11431,G__11432,G__11433,G__11434,G__11435) : tailrecursion.hoplon.form.call(null,G__11421,G__11422,G__11423,G__11424,G__11425,G__11426,G__11427,G__11428,G__11429,G__11430,G__11431,G__11432,G__11433,G__11434,G__11435));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(G__11372,G__11373,G__11374) : tailrecursion.hoplon.div.call(null,G__11372,G__11373,G__11374));
})(),(function (){var G__11505 = cljs.core.cst$kw$class;
var G__11506 = "col-md-4 col-sm-4 col-xs-12";
var G__11507 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Get in touch!") : tailrecursion.hoplon.h2.call(null,"Get in touch!"));
var G__11508 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Whether you're struggling in a course, doing well in a course but want\n         a deeper understanding of the material, or you just want to learn\n         something new, I can help. If you have any questions, comments or\n         complaints, please feel free to contact me.") : tailrecursion.hoplon.p.call(null,"Whether you're struggling in a course, doing well in a course but want\n         a deeper understanding of the material, or you just want to learn\n         something new, I can help. If you have any questions, comments or\n         complaints, please feel free to contact me."));
var G__11509 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("I tutor everywhere from Miami Beach to Westchester (FIU area). If you\n         need tutoring someplace else, feel free to contact me and I will\n         either try to accommodate your needs myself, or I will do my best to\n         find a tutor who can accommodate your needs.") : tailrecursion.hoplon.p.call(null,"I tutor everywhere from Miami Beach to Westchester (FIU area). If you\n         need tutoring someplace else, feel free to contact me and I will\n         either try to accommodate your needs myself, or I will do my best to\n         find a tutor who can accommodate your needs."));
var G__11510 = (function (){var G__11519 = (function (){var G__11522 = (function (){var G__11524 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"glyphicon glyphicon-earphone") : tailrecursion.hoplon.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-earphone"));
var G__11525 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"tel: 3058946475","  (305) 894-6475") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"tel: 3058946475","  (305) 894-6475"));
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__11524,G__11525) : tailrecursion.hoplon.p.call(null,G__11524,G__11525));
})();
var G__11523 = (function (){var G__11526 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,"glyphicon glyphicon-envelope") : tailrecursion.hoplon.span.call(null,cljs.core.cst$kw$class,"glyphicon glyphicon-envelope"));
var G__11527 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,"mailto: amniskin@gmail.com","  amniskin@gmail.com") : tailrecursion.hoplon.a.call(null,cljs.core.cst$kw$href,"mailto: amniskin@gmail.com","  amniskin@gmail.com"));
return (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2(G__11526,G__11527) : tailrecursion.hoplon.p.call(null,G__11526,G__11527));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__11522,G__11523) : tailrecursion.hoplon.div.call(null,G__11522,G__11523));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(G__11519) : tailrecursion.hoplon.div.call(null,G__11519));
})();
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(G__11505,G__11506,G__11507,G__11508,G__11509,G__11510) : tailrecursion.hoplon.div.call(null,G__11505,G__11506,G__11507,G__11508,G__11509,G__11510));
})()], 0));
};
var content$home$contact$content = function (var_args){
var args__8082__auto__ = null;
if (arguments.length > 0) {
var G__11528__i = 0, G__11528__a = new Array(arguments.length -  0);
while (G__11528__i < G__11528__a.length) {G__11528__a[G__11528__i] = arguments[G__11528__i + 0]; ++G__11528__i;}
  args__8082__auto__ = new cljs.core.IndexedSeq(G__11528__a,0);
} 
return content$home$contact$content__delegate.call(this,args__8082__auto__);};
content$home$contact$content.cljs$lang$maxFixedArity = 0;
content$home$contact$content.cljs$lang$applyTo = (function (arglist__11529){
var args__8082__auto__ = cljs.core.seq(arglist__11529);
return content$home$contact$content__delegate(args__8082__auto__);
});
content$home$contact$content.cljs$core$IFn$_invoke$arity$variadic = content$home$contact$content__delegate;
return content$home$contact$content;
})()
;
