// Compiled by ClojureScript 1.10.339 {}
goog.provide('boil_cljs.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
cljs.core.println.call(null,"This text is printed from src/boil_cljs/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof boil_cljs !== 'undefined') && (typeof boil_cljs.core !== 'undefined') && (typeof boil_cljs.core.app_state !== 'undefined')){
} else {
boil_cljs.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
boil_cljs.core.click_count = reagent.core.atom.call(null,(0));
boil_cljs.core.multiply = (function boil_cljs$core$multiply(x,y){
return (x * y);
});
boil_cljs.core.get_app_element = (function boil_cljs$core$get_app_element(){
return goog.dom.getElement("app");
});
boil_cljs.core.inc_atom = (function boil_cljs$core$inc_atom(at,num){
return cljs.core.swap_BANG_.call(null,at,cljs.core._PLUS_,num);
});
boil_cljs.core.hello_world = (function boil_cljs$core$hello_world(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,boil_cljs.core.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return boil_cljs.core.inc_atom.call(null,boil_cljs.core.click_count,(3));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Keep Going",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Keep Going");
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Shoot",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Shoot");
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Bomb",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Bomb");
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Retreat",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Retreat");
})], null)], null)], null);
});
boil_cljs.core.mount = (function boil_cljs$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boil_cljs.core.hello_world], null),el);
});
boil_cljs.core.mount_app_element = (function boil_cljs$core$mount_app_element(){
var temp__5457__auto__ = boil_cljs.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return boil_cljs.core.mount.call(null,el);
} else {
return null;
}
});
boil_cljs.core.mount_app_element.call(null);
boil_cljs.core.on_reload = (function boil_cljs$core$on_reload(){
return boil_cljs.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
