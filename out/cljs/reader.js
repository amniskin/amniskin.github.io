// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

cljs.reader.PushbackReader = (function (){var obj161761 = {};
return obj161761;
})();

/**
 * Returns the next char from the Reader,
 * nil if the end of stream has been reached
 */
cljs.reader.read_char = (function cljs$reader$read_char(reader){
if((function (){var and__4198__auto__ = reader;
if(and__4198__auto__){
return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else {
return and__4198__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else {
var x__4846__auto__ = (((reader == null))?null:reader);
return (function (){var or__4210__auto__ = (cljs.reader.read_char[(function (){var G__161765 = x__4846__auto__;
return goog.typeOf(G__161765);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.reader.read_char["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});

/**
 * Push back a single character on to the stream
 */
cljs.reader.unread = (function cljs$reader$unread(reader,ch){
if((function (){var and__4198__auto__ = reader;
if(and__4198__auto__){
return reader.cljs$reader$PushbackReader$unread$arity$2;
} else {
return and__4198__auto__;
}
})()){
return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else {
var x__4846__auto__ = (((reader == null))?null:reader);
return (function (){var or__4210__auto__ = (cljs.reader.unread[(function (){var G__161769 = x__4846__auto__;
return goog.typeOf(G__161769);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.reader.unread["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});


/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var self__ = this;
var reader__$1 = this;
if((self__.buffer.length === (0))){
self__.idx = (self__.idx + (1));

return (self__.s[self__.idx]);
} else {
return self__.buffer.pop();
}
});

cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var self__ = this;
var reader__$1 = this;
return self__.buffer.push(ch);
});

cljs.reader.StringPushbackReader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

cljs.reader.StringPushbackReader.cljs$lang$type = true;

cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";

cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.reader/StringPushbackReader");
});

cljs.reader.__GT_StringPushbackReader = (function cljs$reader$__GT_StringPushbackReader(s,buffer,idx){
return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});

cljs.reader.push_back_reader = (function cljs$reader$push_back_reader(s){

return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
 * Checks whether a given character is whitespace
 */
cljs.reader.whitespace_QMARK_ = (function cljs$reader$whitespace_QMARK_(ch){
var or__4210__auto__ = (function (){var G__161773 = ch;
return goog.string.isBreakingWhitespace(G__161773);
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return ("," === ch);
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.reader.numeric_QMARK_ = (function cljs$reader$numeric_QMARK_(ch){
var G__161775 = ch;
return goog.string.isNumeric(G__161775);
});
/**
 * Checks whether the character begins a comment.
 */
cljs.reader.comment_prefix_QMARK_ = (function cljs$reader$comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.reader.number_literal_QMARK_ = (function cljs$reader$number_literal_QMARK_(reader,initch){
return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch);

return next_ch;
})())));
});


cljs.reader.reader_error = (function cljs$reader$reader_error(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
});

cljs.reader.reader_error.cljs$lang$maxFixedArity = (1);

cljs.reader.reader_error.cljs$lang$applyTo = (function (seq161776){
var G__161777 = cljs.core.first(seq161776);
var seq161776__$1 = cljs.core.next(seq161776);
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__161777,seq161776__$1);
});
cljs.reader.macro_terminating_QMARK_ = (function cljs$reader$macro_terminating_QMARK_(ch){
var and__4198__auto__ = !((ch === "#"));
if(and__4198__auto__){
var and__4198__auto____$1 = !((ch === "'"));
if(and__4198__auto____$1){
var and__4198__auto____$2 = !((ch === ":"));
if(and__4198__auto____$2){
var G__161785 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__161785) : cljs.reader.macros.call(null,G__161785));
} else {
return and__4198__auto____$2;
}
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
});
cljs.reader.read_token = (function cljs$reader$read_token(rdr,initch){
var sb = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(rdr);
while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch))){
cljs.reader.unread(rdr,ch);

return sb.toString();
} else {
var G__161786 = (function (){
sb.append(ch);

return sb;
})()
;
var G__161787 = cljs.reader.read_char(rdr);
sb = G__161786;
ch = G__161787;
continue;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.reader.skip_line = (function cljs$reader$skip_line(reader,_){
while(true){
var ch = cljs.reader.read_char(reader);
if(((ch === "\n")) || ((ch === "\r")) || ((ch == null))){
return reader;
} else {
continue;
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function cljs$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((!((matches == null))) && (((matches[(0)]) === s))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
cljs.reader.match_int = (function cljs$reader$match_int(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);
var ie8_fix = (groups[(2)]);
var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);
if(!((zero == null))){
return (0);
} else {
var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__161792 = (groups[(6)]);
var G__161793 = (10);
return parseInt(G__161792,G__161793);
})()]:[null,null]
))));
var n = (a[(0)]);
var radix = (a[(1)]);
if((n == null)){
return null;
} else {
var parsed = (function (){var G__161794 = n;
var G__161795 = radix;
return parseInt(G__161794,G__161795);
})();
if(("-" === (groups[(1)]))){
return (- parsed);
} else {
return parsed;
}
}
}
});
cljs.reader.match_ratio = (function cljs$reader$match_ratio(s){
var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);
var numinator = (groups[(1)]);
var denominator = (groups[(2)]);
return ((function (){var G__161800 = numinator;
var G__161801 = (10);
return parseInt(G__161800,G__161801);
})() / (function (){var G__161802 = denominator;
var G__161803 = (10);
return parseInt(G__161802,G__161803);
})());
});
cljs.reader.match_float = (function cljs$reader$match_float(s){
var G__161805 = s;
return parseFloat(G__161805);
});
cljs.reader.match_number = (function cljs$reader$match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s))){
return cljs.reader.match_int(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s))){
return cljs.reader.match_ratio(s);
} else {
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s))){
return cljs.reader.match_float(s);
} else {
return null;
}
}
}
});
cljs.reader.escape_char_map = (function cljs$reader$escape_char_map(c){
if((c === "t")){
return "\t";
} else {
if((c === "r")){
return "\r";
} else {
if((c === "n")){
return "\n";
} else {
if((c === "\\")){
return "\\";
} else {
if((c === "\"")){
return "\"";
} else {
if((c === "b")){
return "\b";
} else {
if((c === "f")){
return "\f";
} else {
return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function cljs$reader$read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function cljs$reader$read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function cljs$reader$validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str))){
return unicode_str;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function cljs$reader$make_unicode_char(code_str){
var code = (function (){var G__161808 = code_str;
var G__161809 = (16);
return parseInt(G__161808,G__161809);
})();
return String.fromCharCode(code);
});
cljs.reader.escape_char = (function cljs$reader$escape_char(buffer,reader){
var ch = cljs.reader.read_char(reader);
var mapresult = cljs.reader.escape_char_map(ch);
if(cljs.core.truth_(mapresult)){
return mapresult;
} else {
if((ch === "x")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else {
if((ch === "u")){
return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else {
if(cljs.reader.numeric_QMARK_(ch)){
return String.fromCharCode(ch);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.reader.read_past = (function cljs$reader$read_past(pred,rdr){
var ch = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var G__161811 = ch;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__161811) : pred.call(null,G__161811));
})())){
var G__161812 = cljs.reader.read_char(rdr);
ch = G__161812;
continue;
} else {
return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function cljs$reader$read_delimited_list(delim,rdr,recursive_QMARK_){
var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}

if((delim === ch)){
return cljs.core.persistent_BANG_(a);
} else {
var temp__4423__auto__ = (function (){var G__161820 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__161820) : cljs.reader.macros.call(null,G__161820));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var macrofn = temp__4423__auto__;
var mret = (function (){var G__161821 = rdr;
var G__161822 = ch;
return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__161821,G__161822) : macrofn.call(null,G__161821,G__161822));
})();
var G__161827 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__161827;
continue;
} else {
cljs.reader.unread(rdr,ch);

var o = (function (){var G__161823 = rdr;
var G__161824 = true;
var G__161825 = null;
var G__161826 = recursive_QMARK_;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__161823,G__161824,G__161825,G__161826) : cljs.reader.read.call(null,G__161823,G__161824,G__161825,G__161826));
})();
var G__161828 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__161828;
continue;
}
}
break;
}
});
cljs.reader.not_implemented = (function cljs$reader$not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function cljs$reader$read_dispatch(rdr,_){
var ch = cljs.reader.read_char(rdr);
var dm = (function (){var G__161834 = ch;
return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__161834) : cljs.reader.dispatch_macros.call(null,G__161834));
})();
if(cljs.core.truth_(dm)){
var G__161835 = rdr;
var G__161836 = _;
return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__161835,G__161836) : dm.call(null,G__161835,G__161836));
} else {
var temp__4423__auto__ = (function (){var G__161837 = rdr;
var G__161838 = ch;
return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__161837,G__161838) : cljs.reader.maybe_read_tagged_type.call(null,G__161837,G__161838));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var obj = temp__4423__auto__;
return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function cljs$reader$read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmatched delimiter ",ch], 0));
});
cljs.reader.read_list = (function cljs$reader$read_list(rdr,_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function cljs$reader$read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function cljs$reader$read_map(rdr,_){
var l = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l))){
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function cljs$reader$read_number(reader,initch){
var buffer = (new goog.string.StringBuffer(initch));
var ch = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__4210__auto__ = (ch == null);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = cljs.reader.whitespace_QMARK_(ch);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
var G__161844 = ch;
return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__161844) : cljs.reader.macros.call(null,G__161844));
}
}
})())){
cljs.reader.unread(reader,ch);

var s = buffer.toString();
var or__4210__auto__ = cljs.reader.match_number(s);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else {
var G__161845 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__161846 = cljs.reader.read_char(reader);
buffer = G__161845;
ch = G__161846;
continue;
}
break;
}
});
cljs.reader.read_string_STAR_ = (function cljs$reader$read_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
var G__161847 = (function (){
buffer.append(cljs.reader.escape_char(buffer,reader));

return buffer;
})()
;
var G__161848 = cljs.reader.read_char(reader);
buffer = G__161847;
ch = G__161848;
continue;
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__161849 = (function (){
buffer.append(ch);

return buffer;
})()
;
var G__161850 = cljs.reader.read_char(reader);
buffer = G__161849;
ch = G__161850;
continue;

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function cljs$reader$read_raw_string_STAR_(reader,_){
var buffer = (new goog.string.StringBuffer());
var ch = cljs.reader.read_char(reader);
while(true){
if((ch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
if(("\\" === ch)){
buffer.append(ch);

var nch = cljs.reader.read_char(reader);
if((nch == null)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
var G__161855 = (function (){var G__161853 = buffer;
G__161853.append(nch);

return G__161853;
})();
var G__161856 = cljs.reader.read_char(reader);
buffer = G__161855;
ch = G__161856;
continue;
}
} else {
if(("\"" === ch)){
return buffer.toString();
} else {
var G__161857 = (function (){var G__161854 = buffer;
G__161854.append(ch);

return G__161854;
})();
var G__161858 = cljs.reader.read_char(reader);
buffer = G__161857;
ch = G__161858;
continue;

}
}
}
break;
}
});
cljs.reader.special_symbols = (function cljs$reader$special_symbols(t,not_found){
if((t === "nil")){
return null;
} else {
if((t === "true")){
return true;
} else {
if((t === "false")){
return false;
} else {
if((t === "/")){
return new cljs.core.Symbol(null,"/","/",-1371932971,null);
} else {
return not_found;

}
}
}
}
});
cljs.reader.read_symbol = (function cljs$reader$read_symbol(reader,initch){
var token = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_((function (){var and__4198__auto__ = (function (){var G__161865 = token;
var G__161866 = "/";
return goog.string.contains(G__161865,G__161866);
})();
if(cljs.core.truth_(and__4198__auto__)){
return !((token.length === (1)));
} else {
return and__4198__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else {
return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function cljs$reader$read_keyword(reader,initch){
var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);
var token__$1 = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1))))){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else {
if((!((ns == null))) && ((ns.length > (0)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function cljs$reader$desugar_meta(f){
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,f], null);
} else {
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
return f;

}
}
}
});
cljs.reader.wrapping_reader = (function cljs$reader$wrapping_reader(sym){
return (function (rdr,_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__161871 = rdr;
var G__161872 = true;
var G__161873 = null;
var G__161874 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__161871,G__161872,G__161873,G__161874) : cljs.reader.read.call(null,G__161871,G__161872,G__161873,G__161874));
})()),sym);
});
});
cljs.reader.throwing_reader = (function cljs$reader$throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function cljs$reader$read_meta(rdr,_){
var m = cljs.reader.desugar_meta((function (){var G__161884 = rdr;
var G__161885 = true;
var G__161886 = null;
var G__161887 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__161884,G__161885,G__161886,G__161887) : cljs.reader.read.call(null,G__161884,G__161885,G__161886,G__161887));
})());
if(cljs.core.map_QMARK_(m)){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}

var o = (function (){var G__161888 = rdr;
var G__161889 = true;
var G__161890 = null;
var G__161891 = true;
return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__161888,G__161889,G__161890,G__161891) : cljs.reader.read.call(null,G__161888,G__161889,G__161890,G__161891));
})();
if((function (){var G__161892 = o;
if(G__161892){
var bit__4884__auto__ = (G__161892.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4884__auto__) || (G__161892.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__161892.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__161892);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__161892);
}
})()){
return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function cljs$reader$read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function cljs$reader$read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function cljs$reader$read_discard(rdr,_){
var G__161897_161901 = rdr;
var G__161898_161902 = true;
var G__161899_161903 = null;
var G__161900_161904 = true;
(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__161897_161901,G__161898_161902,G__161899_161903,G__161900_161904) : cljs.reader.read.call(null,G__161897_161901,G__161898_161902,G__161899_161903,G__161900_161904));

return rdr;
});
cljs.reader.macros = (function cljs$reader$macros(c){
if((c === "\"")){
return cljs.reader.read_string_STAR_;
} else {
if((c === ":")){
return cljs.reader.read_keyword;
} else {
if((c === ";")){
return cljs.reader.read_comment;
} else {
if((c === "'")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else {
if((c === "@")){
return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else {
if((c === "^")){
return cljs.reader.read_meta;
} else {
if((c === "`")){
return cljs.reader.not_implemented;
} else {
if((c === "~")){
return cljs.reader.not_implemented;
} else {
if((c === "(")){
return cljs.reader.read_list;
} else {
if((c === ")")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "[")){
return cljs.reader.read_vector;
} else {
if((c === "]")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "{")){
return cljs.reader.read_map;
} else {
if((c === "}")){
return cljs.reader.read_unmatched_delimiter;
} else {
if((c === "\\")){
return cljs.reader.read_char;
} else {
if((c === "#")){
return cljs.reader.read_dispatch;
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function cljs$reader$dispatch_macros(s){
if((s === "{")){
return cljs.reader.read_set;
} else {
if((s === "<")){
return cljs.reader.throwing_reader("Unreadable form");
} else {
if((s === "\"")){
return cljs.reader.read_regex;
} else {
if((s === "!")){
return cljs.reader.read_comment;
} else {
if((s === "_")){
return cljs.reader.read_discard;
} else {
return null;

}
}
}
}
}
});
/**
 * Reads the first object from a PushbackReader. Returns the object read.
 * If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
 */
cljs.reader.read = (function cljs$reader$read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch = cljs.reader.read_char(reader);
if((ch == null)){
if(cljs.core.truth_(eof_is_error)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else {
return sentinel;
}
} else {
if(cljs.reader.whitespace_QMARK_(ch)){
var G__161913 = reader;
var G__161914 = eof_is_error;
var G__161915 = sentinel;
var G__161916 = is_recursive;
reader = G__161913;
eof_is_error = G__161914;
sentinel = G__161915;
is_recursive = G__161916;
continue;
} else {
if(cljs.reader.comment_prefix_QMARK_(ch)){
var G__161917 = (function (){var G__161909 = reader;
var G__161910 = ch;
return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__161909,G__161910) : cljs.reader.read_comment.call(null,G__161909,G__161910));
})();
var G__161918 = eof_is_error;
var G__161919 = sentinel;
var G__161920 = is_recursive;
reader = G__161917;
eof_is_error = G__161918;
sentinel = G__161919;
is_recursive = G__161920;
continue;
} else {
var f = cljs.reader.macros(ch);
var res = (cljs.core.truth_(f)?(function (){var G__161911 = reader;
var G__161912 = ch;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__161911,G__161912) : f.call(null,G__161911,G__161912));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));
if((res === reader)){
var G__161921 = reader;
var G__161922 = eof_is_error;
var G__161923 = sentinel;
var G__161924 = is_recursive;
reader = G__161921;
eof_is_error = G__161922;
sentinel = G__161923;
is_recursive = G__161924;
continue;
} else {
return res;
}

}
}
}
break;
}
});
/**
 * Reads one object from the string s
 */
cljs.reader.read_string = (function cljs$reader$read_string(s){
var r = cljs.reader.push_back_reader(s);
return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__161925 = b.append("0");
b = G__161925;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__4198__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__4198__auto__)){
var or__4210__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__4198__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = (function (){var G__161929 = s;
var G__161930 = (10);
return parseInt(G__161929,G__161930);
})();
if(cljs.core.not((function (){var G__161931 = n;
return isNaN(G__161931);
})())){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')], 0));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__161935 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161935,(10),null);
var v = vec__161935;
if(cljs.core.not(v)){
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(s)].join('')], 0));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4210__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__161936 = months__$1;
var G__161937 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__161936,G__161937) : cljs.reader.days_in_month.call(null,G__161936,G__161937));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4423__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__161939 = temp__4423__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161939,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__161952_161964 = cljs.core.seq(form);
var chunk__161953_161965 = null;
var count__161954_161966 = (0);
var i__161955_161967 = (0);
while(true){
if((i__161955_161967 < count__161954_161966)){
var x_161968 = chunk__161953_161965.cljs$core$IIndexed$_nth$arity$2(null,i__161955_161967);
arr.push(x_161968);

var G__161969 = seq__161952_161964;
var G__161970 = chunk__161953_161965;
var G__161971 = count__161954_161966;
var G__161972 = (i__161955_161967 + (1));
seq__161952_161964 = G__161969;
chunk__161953_161965 = G__161970;
count__161954_161966 = G__161971;
i__161955_161967 = G__161972;
continue;
} else {
var temp__4425__auto___161973 = cljs.core.seq(seq__161952_161964);
if(temp__4425__auto___161973){
var seq__161952_161974__$1 = temp__4425__auto___161973;
if(cljs.core.chunked_seq_QMARK_(seq__161952_161974__$1)){
var c__4995__auto___161975 = cljs.core.chunk_first(seq__161952_161974__$1);
var G__161976 = cljs.core.chunk_rest(seq__161952_161974__$1);
var G__161977 = c__4995__auto___161975;
var G__161978 = cljs.core.count(c__4995__auto___161975);
var G__161979 = (0);
seq__161952_161964 = G__161976;
chunk__161953_161965 = G__161977;
count__161954_161966 = G__161978;
i__161955_161967 = G__161979;
continue;
} else {
var x_161980 = cljs.core.first(seq__161952_161974__$1);
arr.push(x_161980);

var G__161981 = cljs.core.next(seq__161952_161974__$1);
var G__161982 = null;
var G__161983 = (0);
var G__161984 = (0);
seq__161952_161964 = G__161981;
chunk__161953_161965 = G__161982;
count__161954_161966 = G__161983;
i__161955_161967 = G__161984;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = (function (){var obj161957 = {};
return obj161957;
})();
var seq__161958_161985 = cljs.core.seq(form);
var chunk__161959_161986 = null;
var count__161960_161987 = (0);
var i__161961_161988 = (0);
while(true){
if((i__161961_161988 < count__161960_161987)){
var vec__161962_161989 = chunk__161959_161986.cljs$core$IIndexed$_nth$arity$2(null,i__161961_161988);
var k_161990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161962_161989,(0),null);
var v_161991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161962_161989,(1),null);
(obj[cljs.core.name(k_161990)] = v_161991);

var G__161992 = seq__161958_161985;
var G__161993 = chunk__161959_161986;
var G__161994 = count__161960_161987;
var G__161995 = (i__161961_161988 + (1));
seq__161958_161985 = G__161992;
chunk__161959_161986 = G__161993;
count__161960_161987 = G__161994;
i__161961_161988 = G__161995;
continue;
} else {
var temp__4425__auto___161996 = cljs.core.seq(seq__161958_161985);
if(temp__4425__auto___161996){
var seq__161958_161997__$1 = temp__4425__auto___161996;
if(cljs.core.chunked_seq_QMARK_(seq__161958_161997__$1)){
var c__4995__auto___161998 = cljs.core.chunk_first(seq__161958_161997__$1);
var G__161999 = cljs.core.chunk_rest(seq__161958_161997__$1);
var G__162000 = c__4995__auto___161998;
var G__162001 = cljs.core.count(c__4995__auto___161998);
var G__162002 = (0);
seq__161958_161985 = G__161999;
chunk__161959_161986 = G__162000;
count__161960_161987 = G__162001;
i__161961_161988 = G__162002;
continue;
} else {
var vec__161963_162003 = cljs.core.first(seq__161958_161997__$1);
var k_162004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161963_162003,(0),null);
var v_162005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__161963_162003,(1),null);
(obj[cljs.core.name(k_162004)] = v_162005);

var G__162006 = cljs.core.next(seq__161958_161997__$1);
var G__162007 = null;
var G__162008 = (0);
var G__162009 = (0);
seq__161958_161985 = G__162006;
chunk__161959_161986 = G__162007;
count__161960_161987 = G__162008;
i__161961_161988 = G__162009;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("JS literal expects a vector or map containing "),cljs.core.str("only string or unqualified keyword keys")].join('')], 0));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__162010 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162010) : cljs.core.atom.call(null,G__162010));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__162011 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__162011) : cljs.core.atom.call(null,G__162011));
})();
cljs.reader.maybe_read_tagged_type = (function cljs$reader$maybe_read_tagged_type(rdr,initch){
var tag = cljs.reader.read_symbol(rdr,initch);
var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__162018 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162018) : cljs.core.deref.call(null,G__162018));
})(),[cljs.core.str(tag)].join(''));
var dfn = (function (){var G__162019 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162019) : cljs.core.deref.call(null,G__162019));
})();
if(cljs.core.truth_(pfn)){
var G__162020 = cljs.reader.read(rdr,true,null,false);
return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__162020) : pfn.call(null,G__162020));
} else {
if(cljs.core.truth_(dfn)){
var G__162021 = tag;
var G__162022 = cljs.reader.read(rdr,true,null,false);
return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__162021,G__162022) : dfn.call(null,G__162021,G__162022));
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",[cljs.core.str(tag)].join('')," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__162023 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162023) : cljs.core.deref.call(null,G__162023));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__162025 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162025) : cljs.core.deref.call(null,G__162025));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var tag__$1 = [cljs.core.str(tag)].join('');
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__162027 = cljs.reader._STAR_tag_table_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162027) : cljs.core.deref.call(null,G__162027));
})(),tag__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = (function (){var G__162029 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162029) : cljs.core.deref.call(null,G__162029));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = (function (){var G__162031 = cljs.reader._STAR_default_data_reader_fn_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__162031) : cljs.core.deref.call(null,G__162031));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
