// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18961){
var map__18962 = p__18961;
var map__18962__$1 = ((((!((map__18962 == null)))?(((((map__18962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18962):map__18962);
var m = map__18962__$1;
var n = cljs.core.get.call(null,map__18962__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18964_18986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18965_18987 = null;
var count__18966_18988 = (0);
var i__18967_18989 = (0);
while(true){
if((i__18967_18989 < count__18966_18988)){
var f_18990 = cljs.core._nth.call(null,chunk__18965_18987,i__18967_18989);
cljs.core.println.call(null,"  ",f_18990);


var G__18991 = seq__18964_18986;
var G__18992 = chunk__18965_18987;
var G__18993 = count__18966_18988;
var G__18994 = (i__18967_18989 + (1));
seq__18964_18986 = G__18991;
chunk__18965_18987 = G__18992;
count__18966_18988 = G__18993;
i__18967_18989 = G__18994;
continue;
} else {
var temp__5457__auto___18995 = cljs.core.seq.call(null,seq__18964_18986);
if(temp__5457__auto___18995){
var seq__18964_18996__$1 = temp__5457__auto___18995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18964_18996__$1)){
var c__4351__auto___18997 = cljs.core.chunk_first.call(null,seq__18964_18996__$1);
var G__18998 = cljs.core.chunk_rest.call(null,seq__18964_18996__$1);
var G__18999 = c__4351__auto___18997;
var G__19000 = cljs.core.count.call(null,c__4351__auto___18997);
var G__19001 = (0);
seq__18964_18986 = G__18998;
chunk__18965_18987 = G__18999;
count__18966_18988 = G__19000;
i__18967_18989 = G__19001;
continue;
} else {
var f_19002 = cljs.core.first.call(null,seq__18964_18996__$1);
cljs.core.println.call(null,"  ",f_19002);


var G__19003 = cljs.core.next.call(null,seq__18964_18996__$1);
var G__19004 = null;
var G__19005 = (0);
var G__19006 = (0);
seq__18964_18986 = G__19003;
chunk__18965_18987 = G__19004;
count__18966_18988 = G__19005;
i__18967_18989 = G__19006;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19007 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19007);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19007)))?cljs.core.second.call(null,arglists_19007):arglists_19007));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18968_19008 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18969_19009 = null;
var count__18970_19010 = (0);
var i__18971_19011 = (0);
while(true){
if((i__18971_19011 < count__18970_19010)){
var vec__18972_19012 = cljs.core._nth.call(null,chunk__18969_19009,i__18971_19011);
var name_19013 = cljs.core.nth.call(null,vec__18972_19012,(0),null);
var map__18975_19014 = cljs.core.nth.call(null,vec__18972_19012,(1),null);
var map__18975_19015__$1 = ((((!((map__18975_19014 == null)))?(((((map__18975_19014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18975_19014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18975_19014):map__18975_19014);
var doc_19016 = cljs.core.get.call(null,map__18975_19015__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19017 = cljs.core.get.call(null,map__18975_19015__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19013);

cljs.core.println.call(null," ",arglists_19017);

if(cljs.core.truth_(doc_19016)){
cljs.core.println.call(null," ",doc_19016);
} else {
}


var G__19018 = seq__18968_19008;
var G__19019 = chunk__18969_19009;
var G__19020 = count__18970_19010;
var G__19021 = (i__18971_19011 + (1));
seq__18968_19008 = G__19018;
chunk__18969_19009 = G__19019;
count__18970_19010 = G__19020;
i__18971_19011 = G__19021;
continue;
} else {
var temp__5457__auto___19022 = cljs.core.seq.call(null,seq__18968_19008);
if(temp__5457__auto___19022){
var seq__18968_19023__$1 = temp__5457__auto___19022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18968_19023__$1)){
var c__4351__auto___19024 = cljs.core.chunk_first.call(null,seq__18968_19023__$1);
var G__19025 = cljs.core.chunk_rest.call(null,seq__18968_19023__$1);
var G__19026 = c__4351__auto___19024;
var G__19027 = cljs.core.count.call(null,c__4351__auto___19024);
var G__19028 = (0);
seq__18968_19008 = G__19025;
chunk__18969_19009 = G__19026;
count__18970_19010 = G__19027;
i__18971_19011 = G__19028;
continue;
} else {
var vec__18977_19029 = cljs.core.first.call(null,seq__18968_19023__$1);
var name_19030 = cljs.core.nth.call(null,vec__18977_19029,(0),null);
var map__18980_19031 = cljs.core.nth.call(null,vec__18977_19029,(1),null);
var map__18980_19032__$1 = ((((!((map__18980_19031 == null)))?(((((map__18980_19031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18980_19031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18980_19031):map__18980_19031);
var doc_19033 = cljs.core.get.call(null,map__18980_19032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19034 = cljs.core.get.call(null,map__18980_19032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19030);

cljs.core.println.call(null," ",arglists_19034);

if(cljs.core.truth_(doc_19033)){
cljs.core.println.call(null," ",doc_19033);
} else {
}


var G__19035 = cljs.core.next.call(null,seq__18968_19023__$1);
var G__19036 = null;
var G__19037 = (0);
var G__19038 = (0);
seq__18968_19008 = G__19035;
chunk__18969_19009 = G__19036;
count__18970_19010 = G__19037;
i__18971_19011 = G__19038;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18982 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18983 = null;
var count__18984 = (0);
var i__18985 = (0);
while(true){
if((i__18985 < count__18984)){
var role = cljs.core._nth.call(null,chunk__18983,i__18985);
var temp__5457__auto___19039__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19039__$1)){
var spec_19040 = temp__5457__auto___19039__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19040));
} else {
}


var G__19041 = seq__18982;
var G__19042 = chunk__18983;
var G__19043 = count__18984;
var G__19044 = (i__18985 + (1));
seq__18982 = G__19041;
chunk__18983 = G__19042;
count__18984 = G__19043;
i__18985 = G__19044;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18982);
if(temp__5457__auto____$1){
var seq__18982__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18982__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18982__$1);
var G__19045 = cljs.core.chunk_rest.call(null,seq__18982__$1);
var G__19046 = c__4351__auto__;
var G__19047 = cljs.core.count.call(null,c__4351__auto__);
var G__19048 = (0);
seq__18982 = G__19045;
chunk__18983 = G__19046;
count__18984 = G__19047;
i__18985 = G__19048;
continue;
} else {
var role = cljs.core.first.call(null,seq__18982__$1);
var temp__5457__auto___19049__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19049__$2)){
var spec_19050 = temp__5457__auto___19049__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19050));
} else {
}


var G__19051 = cljs.core.next.call(null,seq__18982__$1);
var G__19052 = null;
var G__19053 = (0);
var G__19054 = (0);
seq__18982 = G__19051;
chunk__18983 = G__19052;
count__18984 = G__19053;
i__18985 = G__19054;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
