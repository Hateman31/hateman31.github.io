goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18176 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18176(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18177 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18177(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17480 = coll;
var G__17481 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17480,G__17481) : shadow.dom.lazy_native_coll_seq.call(null,G__17480,G__17481));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17495 = arguments.length;
switch (G__17495) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17497 = arguments.length;
switch (G__17497) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17507 = arguments.length;
switch (G__17507) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17512 = arguments.length;
switch (G__17512) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17524 = arguments.length;
switch (G__17524) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17536 = arguments.length;
switch (G__17536) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17538){if((e17538 instanceof Object)){
var e = e17538;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17538;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17546 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17547 = null;
var count__17548 = (0);
var i__17549 = (0);
while(true){
if((i__17549 < count__17548)){
var el = chunk__17547.cljs$core$IIndexed$_nth$arity$2(null,i__17549);
var handler_18184__$1 = ((function (seq__17546,chunk__17547,count__17548,i__17549,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17546,chunk__17547,count__17548,i__17549,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18184__$1);


var G__18185 = seq__17546;
var G__18186 = chunk__17547;
var G__18187 = count__17548;
var G__18188 = (i__17549 + (1));
seq__17546 = G__18185;
chunk__17547 = G__18186;
count__17548 = G__18187;
i__17549 = G__18188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17546);
if(temp__5804__auto__){
var seq__17546__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17546__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17546__$1);
var G__18189 = cljs.core.chunk_rest(seq__17546__$1);
var G__18190 = c__5568__auto__;
var G__18191 = cljs.core.count(c__5568__auto__);
var G__18192 = (0);
seq__17546 = G__18189;
chunk__17547 = G__18190;
count__17548 = G__18191;
i__17549 = G__18192;
continue;
} else {
var el = cljs.core.first(seq__17546__$1);
var handler_18193__$1 = ((function (seq__17546,chunk__17547,count__17548,i__17549,el,seq__17546__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17546,chunk__17547,count__17548,i__17549,el,seq__17546__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18193__$1);


var G__18194 = cljs.core.next(seq__17546__$1);
var G__18195 = null;
var G__18196 = (0);
var G__18197 = (0);
seq__17546 = G__18194;
chunk__17547 = G__18195;
count__17548 = G__18196;
i__17549 = G__18197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17568 = arguments.length;
switch (G__17568) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17581 = cljs.core.seq(events);
var chunk__17582 = null;
var count__17583 = (0);
var i__17584 = (0);
while(true){
if((i__17584 < count__17583)){
var vec__17598 = chunk__17582.cljs$core$IIndexed$_nth$arity$2(null,i__17584);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17598,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18199 = seq__17581;
var G__18200 = chunk__17582;
var G__18201 = count__17583;
var G__18202 = (i__17584 + (1));
seq__17581 = G__18199;
chunk__17582 = G__18200;
count__17583 = G__18201;
i__17584 = G__18202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17581);
if(temp__5804__auto__){
var seq__17581__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17581__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17581__$1);
var G__18205 = cljs.core.chunk_rest(seq__17581__$1);
var G__18206 = c__5568__auto__;
var G__18207 = cljs.core.count(c__5568__auto__);
var G__18208 = (0);
seq__17581 = G__18205;
chunk__17582 = G__18206;
count__17583 = G__18207;
i__17584 = G__18208;
continue;
} else {
var vec__17602 = cljs.core.first(seq__17581__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18209 = cljs.core.next(seq__17581__$1);
var G__18210 = null;
var G__18211 = (0);
var G__18212 = (0);
seq__17581 = G__18209;
chunk__17582 = G__18210;
count__17583 = G__18211;
i__17584 = G__18212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17606 = cljs.core.seq(styles);
var chunk__17607 = null;
var count__17608 = (0);
var i__17609 = (0);
while(true){
if((i__17609 < count__17608)){
var vec__17626 = chunk__17607.cljs$core$IIndexed$_nth$arity$2(null,i__17609);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18213 = seq__17606;
var G__18214 = chunk__17607;
var G__18215 = count__17608;
var G__18216 = (i__17609 + (1));
seq__17606 = G__18213;
chunk__17607 = G__18214;
count__17608 = G__18215;
i__17609 = G__18216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17606);
if(temp__5804__auto__){
var seq__17606__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17606__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17606__$1);
var G__18217 = cljs.core.chunk_rest(seq__17606__$1);
var G__18218 = c__5568__auto__;
var G__18219 = cljs.core.count(c__5568__auto__);
var G__18220 = (0);
seq__17606 = G__18217;
chunk__17607 = G__18218;
count__17608 = G__18219;
i__17609 = G__18220;
continue;
} else {
var vec__17635 = cljs.core.first(seq__17606__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18221 = cljs.core.next(seq__17606__$1);
var G__18222 = null;
var G__18223 = (0);
var G__18224 = (0);
seq__17606 = G__18221;
chunk__17607 = G__18222;
count__17608 = G__18223;
i__17609 = G__18224;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17642_18225 = key;
var G__17642_18226__$1 = (((G__17642_18225 instanceof cljs.core.Keyword))?G__17642_18225.fqn:null);
switch (G__17642_18226__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18228 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18228,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18228,"aria-");
}
})())){
el.setAttribute(ks_18228,value);
} else {
(el[ks_18228] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17668){
var map__17670 = p__17668;
var map__17670__$1 = cljs.core.__destructure_map(map__17670);
var props = map__17670__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17673 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17673,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17673,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17673,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17677 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17677,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17677;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17682 = arguments.length;
switch (G__17682) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17687){
var vec__17688 = p__17687;
var seq__17689 = cljs.core.seq(vec__17688);
var first__17690 = cljs.core.first(seq__17689);
var seq__17689__$1 = cljs.core.next(seq__17689);
var nn = first__17690;
var first__17690__$1 = cljs.core.first(seq__17689__$1);
var seq__17689__$2 = cljs.core.next(seq__17689__$1);
var np = first__17690__$1;
var nc = seq__17689__$2;
var node = vec__17688;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17692 = nn;
var G__17693 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17692,G__17693) : create_fn.call(null,G__17692,G__17693));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17694 = nn;
var G__17695 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17694,G__17695) : create_fn.call(null,G__17694,G__17695));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17696 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17696,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17696,(1),null);
var seq__17699_18233 = cljs.core.seq(node_children);
var chunk__17700_18234 = null;
var count__17701_18235 = (0);
var i__17702_18236 = (0);
while(true){
if((i__17702_18236 < count__17701_18235)){
var child_struct_18237 = chunk__17700_18234.cljs$core$IIndexed$_nth$arity$2(null,i__17702_18236);
var children_18238 = shadow.dom.dom_node(child_struct_18237);
if(cljs.core.seq_QMARK_(children_18238)){
var seq__17776_18239 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18238));
var chunk__17778_18240 = null;
var count__17779_18241 = (0);
var i__17780_18242 = (0);
while(true){
if((i__17780_18242 < count__17779_18241)){
var child_18243 = chunk__17778_18240.cljs$core$IIndexed$_nth$arity$2(null,i__17780_18242);
if(cljs.core.truth_(child_18243)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18243);


var G__18244 = seq__17776_18239;
var G__18245 = chunk__17778_18240;
var G__18246 = count__17779_18241;
var G__18247 = (i__17780_18242 + (1));
seq__17776_18239 = G__18244;
chunk__17778_18240 = G__18245;
count__17779_18241 = G__18246;
i__17780_18242 = G__18247;
continue;
} else {
var G__18248 = seq__17776_18239;
var G__18249 = chunk__17778_18240;
var G__18250 = count__17779_18241;
var G__18251 = (i__17780_18242 + (1));
seq__17776_18239 = G__18248;
chunk__17778_18240 = G__18249;
count__17779_18241 = G__18250;
i__17780_18242 = G__18251;
continue;
}
} else {
var temp__5804__auto___18252 = cljs.core.seq(seq__17776_18239);
if(temp__5804__auto___18252){
var seq__17776_18253__$1 = temp__5804__auto___18252;
if(cljs.core.chunked_seq_QMARK_(seq__17776_18253__$1)){
var c__5568__auto___18254 = cljs.core.chunk_first(seq__17776_18253__$1);
var G__18255 = cljs.core.chunk_rest(seq__17776_18253__$1);
var G__18256 = c__5568__auto___18254;
var G__18257 = cljs.core.count(c__5568__auto___18254);
var G__18258 = (0);
seq__17776_18239 = G__18255;
chunk__17778_18240 = G__18256;
count__17779_18241 = G__18257;
i__17780_18242 = G__18258;
continue;
} else {
var child_18259 = cljs.core.first(seq__17776_18253__$1);
if(cljs.core.truth_(child_18259)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18259);


var G__18260 = cljs.core.next(seq__17776_18253__$1);
var G__18261 = null;
var G__18262 = (0);
var G__18263 = (0);
seq__17776_18239 = G__18260;
chunk__17778_18240 = G__18261;
count__17779_18241 = G__18262;
i__17780_18242 = G__18263;
continue;
} else {
var G__18264 = cljs.core.next(seq__17776_18253__$1);
var G__18265 = null;
var G__18266 = (0);
var G__18267 = (0);
seq__17776_18239 = G__18264;
chunk__17778_18240 = G__18265;
count__17779_18241 = G__18266;
i__17780_18242 = G__18267;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18238);
}


var G__18268 = seq__17699_18233;
var G__18269 = chunk__17700_18234;
var G__18270 = count__17701_18235;
var G__18271 = (i__17702_18236 + (1));
seq__17699_18233 = G__18268;
chunk__17700_18234 = G__18269;
count__17701_18235 = G__18270;
i__17702_18236 = G__18271;
continue;
} else {
var temp__5804__auto___18272 = cljs.core.seq(seq__17699_18233);
if(temp__5804__auto___18272){
var seq__17699_18273__$1 = temp__5804__auto___18272;
if(cljs.core.chunked_seq_QMARK_(seq__17699_18273__$1)){
var c__5568__auto___18274 = cljs.core.chunk_first(seq__17699_18273__$1);
var G__18275 = cljs.core.chunk_rest(seq__17699_18273__$1);
var G__18276 = c__5568__auto___18274;
var G__18277 = cljs.core.count(c__5568__auto___18274);
var G__18278 = (0);
seq__17699_18233 = G__18275;
chunk__17700_18234 = G__18276;
count__17701_18235 = G__18277;
i__17702_18236 = G__18278;
continue;
} else {
var child_struct_18279 = cljs.core.first(seq__17699_18273__$1);
var children_18280 = shadow.dom.dom_node(child_struct_18279);
if(cljs.core.seq_QMARK_(children_18280)){
var seq__17784_18281 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18280));
var chunk__17786_18282 = null;
var count__17787_18283 = (0);
var i__17788_18284 = (0);
while(true){
if((i__17788_18284 < count__17787_18283)){
var child_18285 = chunk__17786_18282.cljs$core$IIndexed$_nth$arity$2(null,i__17788_18284);
if(cljs.core.truth_(child_18285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18285);


var G__18286 = seq__17784_18281;
var G__18287 = chunk__17786_18282;
var G__18288 = count__17787_18283;
var G__18289 = (i__17788_18284 + (1));
seq__17784_18281 = G__18286;
chunk__17786_18282 = G__18287;
count__17787_18283 = G__18288;
i__17788_18284 = G__18289;
continue;
} else {
var G__18290 = seq__17784_18281;
var G__18291 = chunk__17786_18282;
var G__18292 = count__17787_18283;
var G__18293 = (i__17788_18284 + (1));
seq__17784_18281 = G__18290;
chunk__17786_18282 = G__18291;
count__17787_18283 = G__18292;
i__17788_18284 = G__18293;
continue;
}
} else {
var temp__5804__auto___18294__$1 = cljs.core.seq(seq__17784_18281);
if(temp__5804__auto___18294__$1){
var seq__17784_18295__$1 = temp__5804__auto___18294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17784_18295__$1)){
var c__5568__auto___18296 = cljs.core.chunk_first(seq__17784_18295__$1);
var G__18297 = cljs.core.chunk_rest(seq__17784_18295__$1);
var G__18298 = c__5568__auto___18296;
var G__18299 = cljs.core.count(c__5568__auto___18296);
var G__18300 = (0);
seq__17784_18281 = G__18297;
chunk__17786_18282 = G__18298;
count__17787_18283 = G__18299;
i__17788_18284 = G__18300;
continue;
} else {
var child_18301 = cljs.core.first(seq__17784_18295__$1);
if(cljs.core.truth_(child_18301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18301);


var G__18302 = cljs.core.next(seq__17784_18295__$1);
var G__18303 = null;
var G__18304 = (0);
var G__18305 = (0);
seq__17784_18281 = G__18302;
chunk__17786_18282 = G__18303;
count__17787_18283 = G__18304;
i__17788_18284 = G__18305;
continue;
} else {
var G__18306 = cljs.core.next(seq__17784_18295__$1);
var G__18307 = null;
var G__18308 = (0);
var G__18309 = (0);
seq__17784_18281 = G__18306;
chunk__17786_18282 = G__18307;
count__17787_18283 = G__18308;
i__17788_18284 = G__18309;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18280);
}


var G__18310 = cljs.core.next(seq__17699_18273__$1);
var G__18311 = null;
var G__18312 = (0);
var G__18313 = (0);
seq__17699_18233 = G__18310;
chunk__17700_18234 = G__18311;
count__17701_18235 = G__18312;
i__17702_18236 = G__18313;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17803 = cljs.core.seq(node);
var chunk__17804 = null;
var count__17805 = (0);
var i__17806 = (0);
while(true){
if((i__17806 < count__17805)){
var n = chunk__17804.cljs$core$IIndexed$_nth$arity$2(null,i__17806);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18316 = seq__17803;
var G__18317 = chunk__17804;
var G__18318 = count__17805;
var G__18319 = (i__17806 + (1));
seq__17803 = G__18316;
chunk__17804 = G__18317;
count__17805 = G__18318;
i__17806 = G__18319;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17803);
if(temp__5804__auto__){
var seq__17803__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17803__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17803__$1);
var G__18320 = cljs.core.chunk_rest(seq__17803__$1);
var G__18321 = c__5568__auto__;
var G__18322 = cljs.core.count(c__5568__auto__);
var G__18323 = (0);
seq__17803 = G__18320;
chunk__17804 = G__18321;
count__17805 = G__18322;
i__17806 = G__18323;
continue;
} else {
var n = cljs.core.first(seq__17803__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18324 = cljs.core.next(seq__17803__$1);
var G__18325 = null;
var G__18326 = (0);
var G__18327 = (0);
seq__17803 = G__18324;
chunk__17804 = G__18325;
count__17805 = G__18326;
i__17806 = G__18327;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17823 = arguments.length;
switch (G__17823) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17834 = arguments.length;
switch (G__17834) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17843 = arguments.length;
switch (G__17843) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18338 = arguments.length;
var i__5770__auto___18339 = (0);
while(true){
if((i__5770__auto___18339 < len__5769__auto___18338)){
args__5775__auto__.push((arguments[i__5770__auto___18339]));

var G__18340 = (i__5770__auto___18339 + (1));
i__5770__auto___18339 = G__18340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17854_18341 = cljs.core.seq(nodes);
var chunk__17855_18342 = null;
var count__17856_18343 = (0);
var i__17857_18344 = (0);
while(true){
if((i__17857_18344 < count__17856_18343)){
var node_18345 = chunk__17855_18342.cljs$core$IIndexed$_nth$arity$2(null,i__17857_18344);
fragment.appendChild(shadow.dom._to_dom(node_18345));


var G__18346 = seq__17854_18341;
var G__18347 = chunk__17855_18342;
var G__18348 = count__17856_18343;
var G__18349 = (i__17857_18344 + (1));
seq__17854_18341 = G__18346;
chunk__17855_18342 = G__18347;
count__17856_18343 = G__18348;
i__17857_18344 = G__18349;
continue;
} else {
var temp__5804__auto___18350 = cljs.core.seq(seq__17854_18341);
if(temp__5804__auto___18350){
var seq__17854_18351__$1 = temp__5804__auto___18350;
if(cljs.core.chunked_seq_QMARK_(seq__17854_18351__$1)){
var c__5568__auto___18352 = cljs.core.chunk_first(seq__17854_18351__$1);
var G__18353 = cljs.core.chunk_rest(seq__17854_18351__$1);
var G__18354 = c__5568__auto___18352;
var G__18355 = cljs.core.count(c__5568__auto___18352);
var G__18356 = (0);
seq__17854_18341 = G__18353;
chunk__17855_18342 = G__18354;
count__17856_18343 = G__18355;
i__17857_18344 = G__18356;
continue;
} else {
var node_18357 = cljs.core.first(seq__17854_18351__$1);
fragment.appendChild(shadow.dom._to_dom(node_18357));


var G__18358 = cljs.core.next(seq__17854_18351__$1);
var G__18359 = null;
var G__18360 = (0);
var G__18361 = (0);
seq__17854_18341 = G__18358;
chunk__17855_18342 = G__18359;
count__17856_18343 = G__18360;
i__17857_18344 = G__18361;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17848));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17875_18362 = cljs.core.seq(scripts);
var chunk__17876_18363 = null;
var count__17877_18364 = (0);
var i__17878_18365 = (0);
while(true){
if((i__17878_18365 < count__17877_18364)){
var vec__17888_18366 = chunk__17876_18363.cljs$core$IIndexed$_nth$arity$2(null,i__17878_18365);
var script_tag_18367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17888_18366,(0),null);
var script_body_18368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17888_18366,(1),null);
eval(script_body_18368);


var G__18369 = seq__17875_18362;
var G__18370 = chunk__17876_18363;
var G__18371 = count__17877_18364;
var G__18372 = (i__17878_18365 + (1));
seq__17875_18362 = G__18369;
chunk__17876_18363 = G__18370;
count__17877_18364 = G__18371;
i__17878_18365 = G__18372;
continue;
} else {
var temp__5804__auto___18373 = cljs.core.seq(seq__17875_18362);
if(temp__5804__auto___18373){
var seq__17875_18374__$1 = temp__5804__auto___18373;
if(cljs.core.chunked_seq_QMARK_(seq__17875_18374__$1)){
var c__5568__auto___18375 = cljs.core.chunk_first(seq__17875_18374__$1);
var G__18376 = cljs.core.chunk_rest(seq__17875_18374__$1);
var G__18377 = c__5568__auto___18375;
var G__18378 = cljs.core.count(c__5568__auto___18375);
var G__18379 = (0);
seq__17875_18362 = G__18376;
chunk__17876_18363 = G__18377;
count__17877_18364 = G__18378;
i__17878_18365 = G__18379;
continue;
} else {
var vec__17895_18380 = cljs.core.first(seq__17875_18374__$1);
var script_tag_18381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895_18380,(0),null);
var script_body_18382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17895_18380,(1),null);
eval(script_body_18382);


var G__18383 = cljs.core.next(seq__17875_18374__$1);
var G__18384 = null;
var G__18385 = (0);
var G__18386 = (0);
seq__17875_18362 = G__18383;
chunk__17876_18363 = G__18384;
count__17877_18364 = G__18385;
i__17878_18365 = G__18386;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17901){
var vec__17902 = p__17901;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17911 = arguments.length;
switch (G__17911) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17933 = cljs.core.seq(style_keys);
var chunk__17934 = null;
var count__17935 = (0);
var i__17936 = (0);
while(true){
if((i__17936 < count__17935)){
var it = chunk__17934.cljs$core$IIndexed$_nth$arity$2(null,i__17936);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18391 = seq__17933;
var G__18392 = chunk__17934;
var G__18393 = count__17935;
var G__18394 = (i__17936 + (1));
seq__17933 = G__18391;
chunk__17934 = G__18392;
count__17935 = G__18393;
i__17936 = G__18394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17933);
if(temp__5804__auto__){
var seq__17933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17933__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17933__$1);
var G__18395 = cljs.core.chunk_rest(seq__17933__$1);
var G__18396 = c__5568__auto__;
var G__18397 = cljs.core.count(c__5568__auto__);
var G__18398 = (0);
seq__17933 = G__18395;
chunk__17934 = G__18396;
count__17935 = G__18397;
i__17936 = G__18398;
continue;
} else {
var it = cljs.core.first(seq__17933__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18399 = cljs.core.next(seq__17933__$1);
var G__18400 = null;
var G__18401 = (0);
var G__18402 = (0);
seq__17933 = G__18399;
chunk__17934 = G__18400;
count__17935 = G__18401;
i__17936 = G__18402;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17947,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17957 = k17947;
var G__17957__$1 = (((G__17957 instanceof cljs.core.Keyword))?G__17957.fqn:null);
switch (G__17957__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17947,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17962){
var vec__17964 = p__17962;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17946){
var self__ = this;
var G__17946__$1 = this;
return (new cljs.core.RecordIter((0),G__17946__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17949,other17950){
var self__ = this;
var this17949__$1 = this;
return (((!((other17950 == null)))) && ((((this17949__$1.constructor === other17950.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17949__$1.x,other17950.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17949__$1.y,other17950.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17949__$1.__extmap,other17950.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17947){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17975 = k17947;
var G__17975__$1 = (((G__17975 instanceof cljs.core.Keyword))?G__17975.fqn:null);
switch (G__17975__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17947);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17946){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17976 = cljs.core.keyword_identical_QMARK_;
var expr__17977 = k__5352__auto__;
if(cljs.core.truth_((pred__17976.cljs$core$IFn$_invoke$arity$2 ? pred__17976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17977) : pred__17976.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17977)))){
return (new shadow.dom.Coordinate(G__17946,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17976.cljs$core$IFn$_invoke$arity$2 ? pred__17976.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17977) : pred__17976.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17977)))){
return (new shadow.dom.Coordinate(self__.x,G__17946,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17946),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17946){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17946,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17951){
var extmap__5385__auto__ = (function (){var G__17987 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17951,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17951)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17987);
} else {
return G__17987;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17951),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17951),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18000,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18011 = k18000;
var G__18011__$1 = (((G__18011 instanceof cljs.core.Keyword))?G__18011.fqn:null);
switch (G__18011__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18000,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18015){
var vec__18017 = p__18015;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18017,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17999){
var self__ = this;
var G__17999__$1 = this;
return (new cljs.core.RecordIter((0),G__17999__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18001,other18002){
var self__ = this;
var this18001__$1 = this;
return (((!((other18002 == null)))) && ((((this18001__$1.constructor === other18002.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18001__$1.w,other18002.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18001__$1.h,other18002.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18001__$1.__extmap,other18002.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18000){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18042 = k18000;
var G__18042__$1 = (((G__18042 instanceof cljs.core.Keyword))?G__18042.fqn:null);
switch (G__18042__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18000);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17999){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18047 = cljs.core.keyword_identical_QMARK_;
var expr__18048 = k__5352__auto__;
if(cljs.core.truth_((pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18048) : pred__18047.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18048)))){
return (new shadow.dom.Size(G__17999,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18047.cljs$core$IFn$_invoke$arity$2 ? pred__18047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18048) : pred__18047.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18048)))){
return (new shadow.dom.Size(self__.w,G__17999,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17999),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17999){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17999,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18006){
var extmap__5385__auto__ = (function (){var G__18062 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18006,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18062);
} else {
return G__18062;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18006),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18006),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18415 = (i + (1));
var G__18416 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18415;
ret = G__18416;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18089){
var vec__18090 = p__18089;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18090,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18097 = arguments.length;
switch (G__18097) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18421 = ps;
var G__18422 = (i + (1));
el__$1 = G__18421;
i = G__18422;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18107 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18107,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18107,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18107,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18110_18430 = cljs.core.seq(props);
var chunk__18111_18431 = null;
var count__18112_18432 = (0);
var i__18113_18433 = (0);
while(true){
if((i__18113_18433 < count__18112_18432)){
var vec__18120_18434 = chunk__18111_18431.cljs$core$IIndexed$_nth$arity$2(null,i__18113_18433);
var k_18435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120_18434,(0),null);
var v_18436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18120_18434,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18435);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18435),v_18436);


var G__18437 = seq__18110_18430;
var G__18438 = chunk__18111_18431;
var G__18439 = count__18112_18432;
var G__18440 = (i__18113_18433 + (1));
seq__18110_18430 = G__18437;
chunk__18111_18431 = G__18438;
count__18112_18432 = G__18439;
i__18113_18433 = G__18440;
continue;
} else {
var temp__5804__auto___18444 = cljs.core.seq(seq__18110_18430);
if(temp__5804__auto___18444){
var seq__18110_18445__$1 = temp__5804__auto___18444;
if(cljs.core.chunked_seq_QMARK_(seq__18110_18445__$1)){
var c__5568__auto___18446 = cljs.core.chunk_first(seq__18110_18445__$1);
var G__18447 = cljs.core.chunk_rest(seq__18110_18445__$1);
var G__18448 = c__5568__auto___18446;
var G__18449 = cljs.core.count(c__5568__auto___18446);
var G__18450 = (0);
seq__18110_18430 = G__18447;
chunk__18111_18431 = G__18448;
count__18112_18432 = G__18449;
i__18113_18433 = G__18450;
continue;
} else {
var vec__18123_18451 = cljs.core.first(seq__18110_18445__$1);
var k_18452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18123_18451,(0),null);
var v_18453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18123_18451,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18452);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18452),v_18453);


var G__18454 = cljs.core.next(seq__18110_18445__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__18110_18430 = G__18454;
chunk__18111_18431 = G__18455;
count__18112_18432 = G__18456;
i__18113_18433 = G__18457;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18127 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(1),null);
var seq__18130_18461 = cljs.core.seq(node_children);
var chunk__18132_18462 = null;
var count__18133_18463 = (0);
var i__18134_18464 = (0);
while(true){
if((i__18134_18464 < count__18133_18463)){
var child_struct_18466 = chunk__18132_18462.cljs$core$IIndexed$_nth$arity$2(null,i__18134_18464);
if((!((child_struct_18466 == null)))){
if(typeof child_struct_18466 === 'string'){
var text_18468 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18468),child_struct_18466].join(''));
} else {
var children_18469 = shadow.dom.svg_node(child_struct_18466);
if(cljs.core.seq_QMARK_(children_18469)){
var seq__18148_18470 = cljs.core.seq(children_18469);
var chunk__18150_18471 = null;
var count__18151_18472 = (0);
var i__18152_18473 = (0);
while(true){
if((i__18152_18473 < count__18151_18472)){
var child_18475 = chunk__18150_18471.cljs$core$IIndexed$_nth$arity$2(null,i__18152_18473);
if(cljs.core.truth_(child_18475)){
node.appendChild(child_18475);


var G__18476 = seq__18148_18470;
var G__18477 = chunk__18150_18471;
var G__18478 = count__18151_18472;
var G__18479 = (i__18152_18473 + (1));
seq__18148_18470 = G__18476;
chunk__18150_18471 = G__18477;
count__18151_18472 = G__18478;
i__18152_18473 = G__18479;
continue;
} else {
var G__18480 = seq__18148_18470;
var G__18481 = chunk__18150_18471;
var G__18482 = count__18151_18472;
var G__18483 = (i__18152_18473 + (1));
seq__18148_18470 = G__18480;
chunk__18150_18471 = G__18481;
count__18151_18472 = G__18482;
i__18152_18473 = G__18483;
continue;
}
} else {
var temp__5804__auto___18484 = cljs.core.seq(seq__18148_18470);
if(temp__5804__auto___18484){
var seq__18148_18485__$1 = temp__5804__auto___18484;
if(cljs.core.chunked_seq_QMARK_(seq__18148_18485__$1)){
var c__5568__auto___18486 = cljs.core.chunk_first(seq__18148_18485__$1);
var G__18487 = cljs.core.chunk_rest(seq__18148_18485__$1);
var G__18488 = c__5568__auto___18486;
var G__18489 = cljs.core.count(c__5568__auto___18486);
var G__18490 = (0);
seq__18148_18470 = G__18487;
chunk__18150_18471 = G__18488;
count__18151_18472 = G__18489;
i__18152_18473 = G__18490;
continue;
} else {
var child_18491 = cljs.core.first(seq__18148_18485__$1);
if(cljs.core.truth_(child_18491)){
node.appendChild(child_18491);


var G__18492 = cljs.core.next(seq__18148_18485__$1);
var G__18493 = null;
var G__18494 = (0);
var G__18495 = (0);
seq__18148_18470 = G__18492;
chunk__18150_18471 = G__18493;
count__18151_18472 = G__18494;
i__18152_18473 = G__18495;
continue;
} else {
var G__18496 = cljs.core.next(seq__18148_18485__$1);
var G__18497 = null;
var G__18498 = (0);
var G__18499 = (0);
seq__18148_18470 = G__18496;
chunk__18150_18471 = G__18497;
count__18151_18472 = G__18498;
i__18152_18473 = G__18499;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18469);
}
}


var G__18500 = seq__18130_18461;
var G__18501 = chunk__18132_18462;
var G__18502 = count__18133_18463;
var G__18503 = (i__18134_18464 + (1));
seq__18130_18461 = G__18500;
chunk__18132_18462 = G__18501;
count__18133_18463 = G__18502;
i__18134_18464 = G__18503;
continue;
} else {
var G__18504 = seq__18130_18461;
var G__18505 = chunk__18132_18462;
var G__18506 = count__18133_18463;
var G__18507 = (i__18134_18464 + (1));
seq__18130_18461 = G__18504;
chunk__18132_18462 = G__18505;
count__18133_18463 = G__18506;
i__18134_18464 = G__18507;
continue;
}
} else {
var temp__5804__auto___18508 = cljs.core.seq(seq__18130_18461);
if(temp__5804__auto___18508){
var seq__18130_18509__$1 = temp__5804__auto___18508;
if(cljs.core.chunked_seq_QMARK_(seq__18130_18509__$1)){
var c__5568__auto___18510 = cljs.core.chunk_first(seq__18130_18509__$1);
var G__18511 = cljs.core.chunk_rest(seq__18130_18509__$1);
var G__18512 = c__5568__auto___18510;
var G__18513 = cljs.core.count(c__5568__auto___18510);
var G__18514 = (0);
seq__18130_18461 = G__18511;
chunk__18132_18462 = G__18512;
count__18133_18463 = G__18513;
i__18134_18464 = G__18514;
continue;
} else {
var child_struct_18515 = cljs.core.first(seq__18130_18509__$1);
if((!((child_struct_18515 == null)))){
if(typeof child_struct_18515 === 'string'){
var text_18516 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18516),child_struct_18515].join(''));
} else {
var children_18517 = shadow.dom.svg_node(child_struct_18515);
if(cljs.core.seq_QMARK_(children_18517)){
var seq__18154_18518 = cljs.core.seq(children_18517);
var chunk__18156_18519 = null;
var count__18157_18520 = (0);
var i__18158_18521 = (0);
while(true){
if((i__18158_18521 < count__18157_18520)){
var child_18522 = chunk__18156_18519.cljs$core$IIndexed$_nth$arity$2(null,i__18158_18521);
if(cljs.core.truth_(child_18522)){
node.appendChild(child_18522);


var G__18527 = seq__18154_18518;
var G__18528 = chunk__18156_18519;
var G__18529 = count__18157_18520;
var G__18530 = (i__18158_18521 + (1));
seq__18154_18518 = G__18527;
chunk__18156_18519 = G__18528;
count__18157_18520 = G__18529;
i__18158_18521 = G__18530;
continue;
} else {
var G__18531 = seq__18154_18518;
var G__18532 = chunk__18156_18519;
var G__18533 = count__18157_18520;
var G__18534 = (i__18158_18521 + (1));
seq__18154_18518 = G__18531;
chunk__18156_18519 = G__18532;
count__18157_18520 = G__18533;
i__18158_18521 = G__18534;
continue;
}
} else {
var temp__5804__auto___18535__$1 = cljs.core.seq(seq__18154_18518);
if(temp__5804__auto___18535__$1){
var seq__18154_18536__$1 = temp__5804__auto___18535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18154_18536__$1)){
var c__5568__auto___18537 = cljs.core.chunk_first(seq__18154_18536__$1);
var G__18541 = cljs.core.chunk_rest(seq__18154_18536__$1);
var G__18542 = c__5568__auto___18537;
var G__18543 = cljs.core.count(c__5568__auto___18537);
var G__18544 = (0);
seq__18154_18518 = G__18541;
chunk__18156_18519 = G__18542;
count__18157_18520 = G__18543;
i__18158_18521 = G__18544;
continue;
} else {
var child_18548 = cljs.core.first(seq__18154_18536__$1);
if(cljs.core.truth_(child_18548)){
node.appendChild(child_18548);


var G__18549 = cljs.core.next(seq__18154_18536__$1);
var G__18550 = null;
var G__18551 = (0);
var G__18552 = (0);
seq__18154_18518 = G__18549;
chunk__18156_18519 = G__18550;
count__18157_18520 = G__18551;
i__18158_18521 = G__18552;
continue;
} else {
var G__18553 = cljs.core.next(seq__18154_18536__$1);
var G__18554 = null;
var G__18555 = (0);
var G__18556 = (0);
seq__18154_18518 = G__18553;
chunk__18156_18519 = G__18554;
count__18157_18520 = G__18555;
i__18158_18521 = G__18556;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18517);
}
}


var G__18557 = cljs.core.next(seq__18130_18509__$1);
var G__18558 = null;
var G__18559 = (0);
var G__18560 = (0);
seq__18130_18461 = G__18557;
chunk__18132_18462 = G__18558;
count__18133_18463 = G__18559;
i__18134_18464 = G__18560;
continue;
} else {
var G__18561 = cljs.core.next(seq__18130_18509__$1);
var G__18562 = null;
var G__18563 = (0);
var G__18564 = (0);
seq__18130_18461 = G__18561;
chunk__18132_18462 = G__18562;
count__18133_18463 = G__18563;
i__18134_18464 = G__18564;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18565 = arguments.length;
var i__5770__auto___18566 = (0);
while(true){
if((i__5770__auto___18566 < len__5769__auto___18565)){
args__5775__auto__.push((arguments[i__5770__auto___18566]));

var G__18577 = (i__5770__auto___18566 + (1));
i__5770__auto___18566 = G__18577;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18160){
var G__18161 = cljs.core.first(seq18160);
var seq18160__$1 = cljs.core.next(seq18160);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18161,seq18160__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18163 = arguments.length;
switch (G__18163) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15871__auto___18580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15872__auto__ = (function (){var switch__15695__auto__ = (function (state_18168){
var state_val_18169 = (state_18168[(1)]);
if((state_val_18169 === (1))){
var state_18168__$1 = state_18168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18168__$1,(2),once_or_cleanup);
} else {
if((state_val_18169 === (2))){
var inst_18165 = (state_18168[(2)]);
var inst_18166 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18168__$1 = (function (){var statearr_18170 = state_18168;
(statearr_18170[(7)] = inst_18165);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18168__$1,inst_18166);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15696__auto__ = null;
var shadow$dom$state_machine__15696__auto____0 = (function (){
var statearr_18171 = [null,null,null,null,null,null,null,null];
(statearr_18171[(0)] = shadow$dom$state_machine__15696__auto__);

(statearr_18171[(1)] = (1));

return statearr_18171;
});
var shadow$dom$state_machine__15696__auto____1 = (function (state_18168){
while(true){
var ret_value__15697__auto__ = (function (){try{while(true){
var result__15698__auto__ = switch__15695__auto__(state_18168);
if(cljs.core.keyword_identical_QMARK_(result__15698__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15698__auto__;
}
break;
}
}catch (e18172){var ex__15699__auto__ = e18172;
var statearr_18173_18584 = state_18168;
(statearr_18173_18584[(2)] = ex__15699__auto__);


if(cljs.core.seq((state_18168[(4)]))){
var statearr_18174_18585 = state_18168;
(statearr_18174_18585[(1)] = cljs.core.first((state_18168[(4)])));

} else {
throw ex__15699__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15697__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18586 = state_18168;
state_18168 = G__18586;
continue;
} else {
return ret_value__15697__auto__;
}
break;
}
});
shadow$dom$state_machine__15696__auto__ = function(state_18168){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15696__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15696__auto____1.call(this,state_18168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15696__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15696__auto____0;
shadow$dom$state_machine__15696__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15696__auto____1;
return shadow$dom$state_machine__15696__auto__;
})()
})();
var state__15873__auto__ = (function (){var statearr_18175 = f__15872__auto__();
(statearr_18175[(6)] = c__15871__auto___18580);

return statearr_18175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15873__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
