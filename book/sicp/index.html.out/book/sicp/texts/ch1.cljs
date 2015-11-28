(ns book.sicp.texts.ch1 (:require [tailrecursion.hoplon.markdown :as md] [book.sicp.book-data :as data] [tailrecursion.hoplon :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen on-append! progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track seq?* data u dl select html thead del eventsource append-child fieldset aside figure figcaption sentinel q on! bdi video address caption parse-args dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir html-time add-attributes! html-map sup dfn sub mark script big button wbr strong li dt frameset td tr section th optgroup iframe legend em kbd spliced article isindex abbr command <!-- source output basefont route-cell header datalist tfoot s ins footer title is-ie8 h5 canvas param font div option summary samp center small style textarea loop-tpl* strike h4 tt head add-children! ol details col vector?* label rt when-dom h6 link page-load colgroup meter html-meta text-val! bdo --> b code node? noframes replace-children! noscript safe-nth h2 area br]] [tailrecursion.javelin :refer [input? cell cell? destroy-cell! ^{:private true} last-rank ^{:deprecated true} lift lens? set-formula! cell-doseq* ^{:dynamic true, :private true} *tx* deref* set-cell! lens formula? alts! dosync* cell-map formula]]) (:require-macros [tailrecursion.hoplon.markdown :refer [md]] [tailrecursion.hoplon :refer [text with-timeout sexp defelem def-values with-page-load with-dom loop-tpl with-interval with-init!]] [tailrecursion.javelin :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]]))

(sexp {} "defelem content [attr kids]" (data/chapter {:title "Building Abstractions with Procedures"} (md {} "> The acts of the mind, wherein it exerts its power over simple ideas,\nare chiefly these three: 1. Combining several simple ideas into one\ncompound one, and thus all complex ideas are made. 2. The second is\nbringing two ideas, whether simple or complex, together, and setting them\nby one another so as to take a view of them at once, without uniting them\ninto one, by which it gets all its ideas of relations. 3. The third is\nseparating them from all other ideas that accompany them in their real\nexistence: this is called abstraction, and thus all its general ideas are\nmade.\n>\n> John Locke, *An Essay Concerning Human Understanding* (1690)\n\nWe are about to study the idea of a *computational process*.\nComputational processes are abstract beings that inhabit\ncomputers. As they evolve, processes manipulate other\nabstract things called *data*. The evolution of a process is\ndirected by a pattern of rules called a *program*. People\ncreate programs to direct processes. In effect, we conjure\nthe spirits of the computer with our spells.\n\nA computational process is indeed much like a sorcerer's\nidea of a spirit. It cannot be seen or touched. It is not\ncomposed of matter at all. However, it is very real. It can\nperform intellectual work. It can answer questions. It can\naffect the world by disbursing money at a bank or by\ncontrolling a robot arm in a factory. The programs we use to\nconjure processes are like a sorcerer's spells. They are\ncarefully composed from symbolic expressions in arcane and\nesoteric *programming languages* that prescribe the tasks we\nwant our processes to perform.\n\nA computational process, in a correctly working computer,\nexecutes programs precisely and accurately. Thus, like the\nsorcerer's apprentice, novice programmers must learn to\nunderstand and to anticipate the consequences of their\nconjuring. Even small errors (usually called *bugs* or\n*glitches*) in programs can have complex and unanticipated\nconsequences.\n\nFortunately, learning to program is considerably less\ndangerous than learning sorcery, because the spirits we deal\nwith are conveniently contained in a secure way. Real-world\nprogramming, however, requires care, expertise, and wisdom.\nA small bug in a computer-aided design program, for example,\ncan lead to the catastrophic collapse of an airplane or a\ndam or the self-destruction of an industrial robot.\n\nMaster software engineers have the ability to organize\nprograms so that they can be reasonably sure that the\nresulting processes will perform the tasks intended. They\ncan visualize the behavior of their systems in advance. They\nknow how to structure programs so that unanticipated\nproblems do not lead to catastrophic consequences, and when\nproblems do arise, they can *debug* their programs.\nWell-designed computational systems, like well-designed\nautomobiles or nuclear reactors, are designed in a modular\nmanner, so that the parts can be constructed, replaced, and\ndebugged separately.\n\n### Programming in Lisp\n\nWe need an appropriate language for describing processes,\nand we will use for this purpose the programming language\nLisp. Just as our everyday thoughts are usually expressed in\nour natural language (such as English, French, or Japanese),\nand descriptions of quantitative phenomena are expressed\nwith mathematical notations, our procedural thoughts will be\nexpressed in Lisp. Lisp was invented in the late 1950s as a\nformalism for reasoning about the use of certain kinds of\nlogical expressions, called *recursion equations*, as a\nmodel for computation. The language was conceived by John\nMcCarthy and is based on his paper ``Recursive Functions of\nSymbolic Expressions and Their Computation by Machine''\n(McCarthy 1960).\n\nDespite its inception as a mathematical formalism, Lisp is a\npractical programming language. A Lisp *interpreter* is a\nmachine that carries out processes described in the Lisp\nlanguage. The first Lisp interpreter was implemented by\nMcCarthy with the help of colleagues and students in the\nArtificial Intelligence Group of the MIT Research Laboratory\nof Electronics and in the MIT Computation\nCenter.<<The *Lisp 1 Programmer's Manual* appeared in 1960, and the *Lisp\n1.5 Programmer's Manual* (McCarthy 1965) was published in 1962. The early\nhistory of Lisp is described in McCarthy 1978.>> Lisp, whose name is an\nacronym for LISt Processing, was designed to provide symbol-manipulating\ncapabilities for attacking programming problems such as the symbolic\ndifferentiation and integration of algebraic expressions. It included for\nthis purpose new data objects known as atoms and lists, which most\nstrikingly set it apart from all other languages of the period.\n  \nLisp was not the product of a concerted design effort.\nInstead, it evolved informally in an experimental manner in\nresponse to users' needs and to pragmatic implementation\nconsiderations. Lisp's informal evolution has continued\nthrough the years, and the community of Lisp users has\ntraditionally resisted attempts to promulgate any\n``official'' definition of the language. This evolution,\ntogether with the flexibility and elegance of the initial\nconception, has enabled Lisp, which is the second oldest\nlanguage in widespread use today (only Fortran is older), to\ncontinually adapt to encompass the most modern ideas about\nprogram design. Thus, Lisp is by now a family of dialects,\nwhich, while sharing most of the original features, may\ndiffer from one another in significant ways. The dialect of Lisp used in\nthis book is called Scheme.<<The two dialects in which most major Lisp\nprograms of the 1970s were written are MacLisp (Moon 1978; Pitman 1983),\ndeveloped at the MIT Project MAC, and Interlisp (Teitelman 1974),\ndeveloped at Bolt Beranek and Newman Inc. and the Xerox Palo Alto\nResearch Center. Portable Standard Lisp (Hearn 1969; Griss 1981) was a\nLisp dialect designed to be easily portable between different machines.\nMacLisp spawned a number of subdialects, such as Franz Lisp, which was\ndeveloped at the University of California at Berkeley, and Zetalisp (Moon\n1981), which was based on a special-purpose processor designed at the MIT\nArtificial Intelligence Laboratory to run Lisp very efficiently. The Lisp\ndialect used in this book, called Scheme (Steele 1975), was invented in\n1975 by Guy Lewis Steele Jr. and Gerald Jay Sussman of the MIT Artificial\nIntelligence Laboratory and later reimplemented for instructional use at\nMIT. Scheme became an IEEE standard in 1990 (IEEE 1990). The Common Lisp\ndialect (Steele 1982, Steele 1990) was developed by the Lisp community to\ncombine features from the earlier Lisp dialects to make an industrial\nstandard for Lisp. Common Lisp became an ANSI standard in 1994 (ANSI\n1994).>>\n\nBecause of its experimental character and its emphasis on\nsymbol manipulation, Lisp was at first very inefficient for\nnumerical computations, at least in comparison with Fortran.\nOver the years, however, Lisp compilers have been developed\nthat translate programs into machine code that can perform\nnumerical computations reasonably efficiently. And for\nspecial applications, Lisp has been used with great\neffectiveness.<<One such special application was a breakthrough\ncomputation of scientific importance -- an integration of the motion of\nthe Solar System that extended previous results by nearly two orders of\nmagnitude, and demonstrated that the dynamics of the Solar System is\nchaotic. This computation was made possible by new integration\nalgorithms, a special-purpose compiler, and a special-purpose computer\nall implemented with the aid of software tools written in Lisp (Abelson\net al. 1992; Sussman and Wisdom 1992).>> Although Lisp has not yet\novercome its old reputation as hopelessly inefficient, Lisp is now used\nin many applications where efficiency is not the central concern. For\nexample, Lisp has become a language of choice for operating-system shell\nlanguages and for extension languages for editors and computer-aided\ndesign systems.\n\nIf Lisp is not a mainstream language, why are we using it as\nthe framework for our discussion of programming? Because the\nlanguage possesses unique features that make it an excellent\nmedium for studying important programming constructs and\ndata structures and for relating them to the linguistic\nfeatures that support them. The most significant of these\nfeatures is the fact that Lisp descriptions of processes,\ncalled *procedures*, can themselves be represented and\nmanipulated as Lisp data. The importance of this is that\nthere are powerful program-design techniques that rely on\nthe ability to blur the traditional distinction between\n``passive'' data and ``active'' processes. As we shall\ndiscover, Lisp's flexibility in handling procedures as data\nmakes it one of the most convenient languages in existence\nfor exploring these techniques. The ability to represent\nprocedures as data also makes Lisp an excellent language for\nwriting programs that must manipulate other programs as\ndata, such as the interpreters and compilers that support\ncomputer languages. Above and beyond these considerations,\nprogramming in Lisp is great fun.")))
