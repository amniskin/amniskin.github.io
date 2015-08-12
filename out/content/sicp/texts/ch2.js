// Compiled by ClojureScript 0.0-3308 {}
goog.provide('content.sicp.texts.ch2');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.markdown');
goog.require('content.sicp.book_data');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
 * @param {...*} var_args
 */
content.sicp.texts.ch2.content = (function() { 
var content$sicp$texts$ch2$content__delegate = function (args__5784__auto__){
var vec__27611 = tailrecursion.hoplon.parse_args.call(null,args__5784__auto__);
var attr = cljs.core.nth.call(null,vec__27611,(0),null);
var kids = cljs.core.nth.call(null,vec__27611,(1),null);
return content.sicp.book_data.chapter.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Building Abstractions with Data"], null),(function (){var _STAR_references_STAR_27612 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_27613 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_references_STAR_,null);

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,null);

try{var _STAR_references_STAR_27614 = tailrecursion.hoplon.markdown._STAR_references_STAR_;
var _STAR_abbreviations_STAR_27615 = tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_;
tailrecursion.hoplon.markdown._STAR_references_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_references_STAR_,cljs.core.PersistentArrayMap.EMPTY);

tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = cljs.core.merge.call(null,tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_,cljs.core.List.EMPTY);

try{return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.markdown.block_quote_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738)], null),cljs.core.PersistentVector.EMPTY),tailrecursion.hoplon.markdown.ref_link_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"separator-space","separator-space",1127241784),null,new cljs.core.Keyword(null,"reference-key","reference-key",1667211677),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The mathematician"], null))," need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hermann Weyl, ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The Mathematical Way of Thinking"], null))], null))], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We concentrated in chapter 1 on computational processes and on the role of procedures in program design. We saw how to use primitive data (numbers) and primitive operations (arithmetic operations), how to combine procedures to form compound procedures through composition, conditionals, and the use of parameters, and how to abstract procedures by using defining forms. We saw that a procedure can be regarded as a pattern for the local evolution of a process, and we classified, reasoned about, and performed simple algorithmic analyses of some common patterns for processes as embodied in procedures. We also saw that higher-order procedures enhance the power of our language by enabling us to manipulate, and thereby to reason in terms of, general methods of computation. This is much of the essence of programming."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["In this chapter we are going to look at more complex data. All the procedures in chapter 1 operate on simple numerical data, and simple data are not sufficient for many of the problems we wish to address using computation. Programs are typically designed to model complex phenomena, and more often than not one must construct computational objects that have several parts in order to model real-world phenomena that have several aspects. Thus, whereas our focus in chapter 1 was on building abstractions by combining procedures to form compound procedures, we turn in this chapter to another key aspect of any programming language: the means it provides for building abstractions by combining data objects to form ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compound data"], null)),"."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Why do we want compound data in a programming language? For the same reasons that we want compound procedures: to elevate the conceptual level at which we can design our programs, to increase the modularity of our designs, and to enhance the expressive power of our language. Just as the ability to define procedures enables us to deal with processes at a higher conceptual level than that of the primitive operations of the language, the ability to construct compound data objects enables us to deal with data at a higher conceptual level than that of the primitive data objects of the language."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consider the task of designing a system to perform arithmetic with rational numbers. We could imagine an operation ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"add-rat"], null),cljs.core.PersistentVector.EMPTY)," that takes two rational numbers and produces their sum. In terms of simple data, a rational number can be thought of as two integers: a numerator and a denominator. Thus, we could design a program in which each rational number would be represented by two integers (a numerator and a denominator) and where add-rat would be implemented by two procedures (one producing the numerator of the sum and one producing the denominator). But this would be awkward, because we would then need to explicitly keep track of which numerators corresponded to which denominators. In a system intended to perform many operations on many rational numbers, such bookkeeping details would clutter the programs substantially, to say nothing of what they would do to our minds. It would be much better if we could ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["glue together"], null))," a numerator and denominator to form a pair ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"endash","endash",-1084701295)], null),cljs.core.PersistentVector.EMPTY)," a ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compound data object"], null))," ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"endash","endash",-1084701295)], null),cljs.core.PersistentVector.EMPTY)," that our programs could manipulate in a way that would be consistent with regarding a rational number as a single conceptual unit."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The use of compound data also enables us to increase the modularity of our programs. If we can manipulate rational numbers directly as objects in their own right, then we can separate the part of our program that deals with rational numbers per se from the details of how rational numbers may be represented as pairs of integers. The general technique of isolating the parts of a program that deal with how data objects are represented from the parts of a program that deal with how data objects are used is a powerful design methodology called ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data abstraction"], null)),". We will see how data abstraction makes programs much easier to design, maintain, and modify."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The use of compound data leads to a real increase in the expressive power of our programming language. Consider the idea of forming a ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear combination"], null))," \\(ax + by\\). We might like to write a procedure that would accept \\(a\\), \\(b\\), \\(x\\), and \\(y\\) as arguments and return the value of \\(ax + by\\). This presents no difficulty if the arguments are to be numbers, because we can readily define the procedure"], null)),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"highlight",new cljs.core.Keyword(null,"style","style",-496642736),"background: #f8f8f8"], null),tailrecursion.hoplon.pre.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"line-height: 125%"], null),"(",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #008000; font-weight: bold"], null),"defn "),tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"linear-combination")," [",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"a")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"b")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"x")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"y"),"]\n  (",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #008000"], null),"+ "),"(",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #008000"], null),"* "),tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"a")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"x"),") (",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #008000"], null),"* "),tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"b")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"y"),")))\n"))),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["But suppose we are not concerned only with numbers. Suppose we would like to express, in procedural terms, the idea that one can form linear combinations whenever addition and multiplication are defined ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"endash","endash",-1084701295)], null),cljs.core.PersistentVector.EMPTY)," for rational numbers, complex numbers, polynomials, or whatever. We could express this as a procedure of the form"], null)),tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"highlight",new cljs.core.Keyword(null,"style","style",-496642736),"background: #f8f8f8"], null),tailrecursion.hoplon.pre.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"line-height: 125%"], null),"(",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #008000; font-weight: bold"], null),"defn "),tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"linear-combination")," [",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"a")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"b")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"x")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"y"),"]\n  (",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #0000FF"], null),"add")," (",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #0000FF"], null),"mul")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"a")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"x"),") (",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #0000FF"], null),"mul")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"b")," ",tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: #19177C"], null),"y"),")))\n"))),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.fromArray(["where ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"add"], null),cljs.core.PersistentVector.EMPTY)," and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"mul"], null),cljs.core.PersistentVector.EMPTY)," are not the primitive procedures + and * but rather more complex things that will perform the appropriate operations for whatever kinds of data we pass in as the arguments ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"a"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"b"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),cljs.core.PersistentVector.EMPTY),", and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"y"], null),cljs.core.PersistentVector.EMPTY),". The key point is that the only thing ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"linear-combination"], null),cljs.core.PersistentVector.EMPTY)," should need to know about ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"a"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"b"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),cljs.core.PersistentVector.EMPTY),", and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"y"], null),cljs.core.PersistentVector.EMPTY)," is that the procedures ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"add"], null),cljs.core.PersistentVector.EMPTY)," and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"mul"], null),cljs.core.PersistentVector.EMPTY)," will perform the appropriate manipulations. From the perspective of the procedure ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"linear-combination"], null),cljs.core.PersistentVector.EMPTY),", it is irrelevant what ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"a"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"b"], null),cljs.core.PersistentVector.EMPTY),", ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),cljs.core.PersistentVector.EMPTY),", and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"y"], null),cljs.core.PersistentVector.EMPTY)," are and even more irrelevant how they might happen to be represented in terms of more primitive data. This same example shows why it is important that our programming language provide the ability to manipulate compound objects directly: Without this, there is no way for a procedure such as ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"linear-combination"], null),cljs.core.PersistentVector.EMPTY)," to pass its arguments along to ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"add"], null),cljs.core.PersistentVector.EMPTY)," and ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"mul"], null),cljs.core.PersistentVector.EMPTY)," without having to know their detailed structure.",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double-angle","double-angle",-1539114060)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The ability to directly manipulate procedures provides an analogous increase in the expressive power of a programming language. For example, in ",tailrecursion.hoplon.markdown.exp_link_node.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"#!/sicp/ch/1/sect/3/sub/1/",new cljs.core.Keyword(null,"title","title",636505583),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section 1.3.1"], null))," we introduced the ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"sum"], null),cljs.core.PersistentVector.EMPTY)," procedure, which takes a procedure ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"term"], null),cljs.core.PersistentVector.EMPTY)," as an argument and computes the sum of the values of ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"term"], null),cljs.core.PersistentVector.EMPTY)," over some specified interval. In order to define ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"sum"], null),cljs.core.PersistentVector.EMPTY),", it is crucial that we be able to speak of a procedure such as term as an entity in its own right, without regard for how term might be expressed with more primitive operations. Indeed, if we did not have the notion of ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a procedure,"], null))," it is doubtful that we would ever even think of the possibility of defining an operation such as ",tailrecursion.hoplon.markdown.code_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"sum"], null),cljs.core.PersistentVector.EMPTY),". Moreover, insofar as performing the summation is concerned, the details of how term may be constructed from more primitive operations are irrelevant."], null))," We begin this chapter by implementing the rational-number arithmetic system mentioned above. This will form the background for our discussion of compound data and data abstraction. As with compound procedures, the main issue to be addressed is that of abstraction as a technique for coping with complexity, and we will see how data abstraction enables us to erect suitable ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["abstraction barriers"], null))," between different parts of a program."], true)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We will see that the key to forming compound data is that a programming language should provide some kind of ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["glue"], null))," so that data objects can be combined to form more complex data objects. There are many possible kinds of glue. Indeed, we will discover how to form compound data using no special ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null))," operations at all, only procedures. This will further blur the distinction between ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["procedure"], null))," and ",tailrecursion.hoplon.markdown.quoted_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"double","double",884886883)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data,"], null))," which was already becoming tenuous toward the end of chapter 1. We will also explore some conventional techniques for representing sequences and trees. One key idea in dealing with compound data is the notion of ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["closure"], null))," ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"endash","endash",-1084701295)], null),cljs.core.PersistentVector.EMPTY)," that the glue we use for combining data objects should allow us to combine not only primitive data objects, but compound data objects as well. Another key idea is that compound data objects can serve as ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conventional interfaces"], null))," for combining program modules in mix-and-match ways. We illustrate some of these ideas by presenting a simple graphics language that exploits closure."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["We will then augment the representational power of our language by introducing ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["symbolic expressions"], null))," ",tailrecursion.hoplon.markdown.simple_node.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"endash","endash",-1084701295)], null),cljs.core.PersistentVector.EMPTY)," data whose elementary parts can be arbitrary symbols rather than only numbers. We explore various alternatives for representing sets of objects. We will find that, just as a given numerical function can be computed by many different computational processes, there are many ways in which a given data structure can be represented in terms of simpler objects, and the choice of representation can have significant impact on the time and space requirements of processes that manipulate the data. We will investigate these ideas in the context of symbolic differentiation, the representation of sets, and the encoding of information."], null)),tailrecursion.hoplon.markdown.para_node.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Next we will take up the problem of working with data that may be represented differently by different parts of a program. This leads to the need to implement generic operations, which must handle many different types of data. Maintaining modularity in the presence of ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["generic operations"], null))," requires more powerful abstraction barriers than can be erected with simple data abstraction alone. In particular, we introduce ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-directed programming"], null))," as a technique that allows individual data representations to be designed in isolation and then combined ",tailrecursion.hoplon.markdown.strong_emph_super_node.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),"*",new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"strong","strong",269529000),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["additively"], null))," (i.e., without modification). To illustrate the power of this approach to system design, we close the chapter by applying what we have learned to the implementation of a package for performing symbolic arithmetic on polynomials, in which the coefficients of the polynomials can be integers, rational numbers, complex numbers, and even other polynomials."], null))], null);
}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_27615;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_27614;
}}finally {tailrecursion.hoplon.markdown._STAR_abbreviations_STAR_ = _STAR_abbreviations_STAR_27613;

tailrecursion.hoplon.markdown._STAR_references_STAR_ = _STAR_references_STAR_27612;
}})());
};
var content$sicp$texts$ch2$content = function (var_args){
var args__5784__auto__ = null;
if (arguments.length > 0) {
var G__27616__i = 0, G__27616__a = new Array(arguments.length -  0);
while (G__27616__i < G__27616__a.length) {G__27616__a[G__27616__i] = arguments[G__27616__i + 0]; ++G__27616__i;}
  args__5784__auto__ = new cljs.core.IndexedSeq(G__27616__a,0);
} 
return content$sicp$texts$ch2$content__delegate.call(this,args__5784__auto__);};
content$sicp$texts$ch2$content.cljs$lang$maxFixedArity = 0;
content$sicp$texts$ch2$content.cljs$lang$applyTo = (function (arglist__27617){
var args__5784__auto__ = cljs.core.seq(arglist__27617);
return content$sicp$texts$ch2$content__delegate(args__5784__auto__);
});
content$sicp$texts$ch2$content.cljs$core$IFn$_invoke$arity$variadic = content$sicp$texts$ch2$content__delegate;
return content$sicp$texts$ch2$content;
})()
;

//# sourceMappingURL=ch2.js.map