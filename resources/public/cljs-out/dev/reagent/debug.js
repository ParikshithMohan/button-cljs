// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13010__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13011__i = 0, G__13011__a = new Array(arguments.length -  0);
while (G__13011__i < G__13011__a.length) {G__13011__a[G__13011__i] = arguments[G__13011__i + 0]; ++G__13011__i;}
  args = new cljs.core.IndexedSeq(G__13011__a,0,null);
} 
return G__13010__delegate.call(this,args);};
G__13010.cljs$lang$maxFixedArity = 0;
G__13010.cljs$lang$applyTo = (function (arglist__13012){
var args = cljs.core.seq(arglist__13012);
return G__13010__delegate(args);
});
G__13010.cljs$core$IFn$_invoke$arity$variadic = G__13010__delegate;
return G__13010;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13013__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13014__i = 0, G__13014__a = new Array(arguments.length -  0);
while (G__13014__i < G__13014__a.length) {G__13014__a[G__13014__i] = arguments[G__13014__i + 0]; ++G__13014__i;}
  args = new cljs.core.IndexedSeq(G__13014__a,0,null);
} 
return G__13013__delegate.call(this,args);};
G__13013.cljs$lang$maxFixedArity = 0;
G__13013.cljs$lang$applyTo = (function (arglist__13015){
var args = cljs.core.seq(arglist__13015);
return G__13013__delegate(args);
});
G__13013.cljs$core$IFn$_invoke$arity$variadic = G__13013__delegate;
return G__13013;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
