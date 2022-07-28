goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19534 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_19534(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19536 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_19536(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17941 = coll;
var G__17942 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17941,G__17942) : shadow.dom.lazy_native_coll_seq.call(null,G__17941,G__17942));
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
var G__17999 = arguments.length;
switch (G__17999) {
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
var G__18062 = arguments.length;
switch (G__18062) {
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
var G__18078 = arguments.length;
switch (G__18078) {
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
var G__18122 = arguments.length;
switch (G__18122) {
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
var G__18148 = arguments.length;
switch (G__18148) {
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
var G__18175 = arguments.length;
switch (G__18175) {
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
}catch (e18227){if((e18227 instanceof Object)){
var e = e18227;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18227;

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
var seq__18260 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18261 = null;
var count__18262 = (0);
var i__18263 = (0);
while(true){
if((i__18263 < count__18262)){
var el = chunk__18261.cljs$core$IIndexed$_nth$arity$2(null,i__18263);
var handler_19555__$1 = ((function (seq__18260,chunk__18261,count__18262,i__18263,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18260,chunk__18261,count__18262,i__18263,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19555__$1);


var G__19556 = seq__18260;
var G__19557 = chunk__18261;
var G__19558 = count__18262;
var G__19559 = (i__18263 + (1));
seq__18260 = G__19556;
chunk__18261 = G__19557;
count__18262 = G__19558;
i__18263 = G__19559;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18260);
if(temp__5804__auto__){
var seq__18260__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18260__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18260__$1);
var G__19560 = cljs.core.chunk_rest(seq__18260__$1);
var G__19561 = c__5568__auto__;
var G__19562 = cljs.core.count(c__5568__auto__);
var G__19563 = (0);
seq__18260 = G__19560;
chunk__18261 = G__19561;
count__18262 = G__19562;
i__18263 = G__19563;
continue;
} else {
var el = cljs.core.first(seq__18260__$1);
var handler_19564__$1 = ((function (seq__18260,chunk__18261,count__18262,i__18263,el,seq__18260__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18260,chunk__18261,count__18262,i__18263,el,seq__18260__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19564__$1);


var G__19565 = cljs.core.next(seq__18260__$1);
var G__19566 = null;
var G__19567 = (0);
var G__19568 = (0);
seq__18260 = G__19565;
chunk__18261 = G__19566;
count__18262 = G__19567;
i__18263 = G__19568;
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
var G__18343 = arguments.length;
switch (G__18343) {
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
var seq__18409 = cljs.core.seq(events);
var chunk__18410 = null;
var count__18411 = (0);
var i__18412 = (0);
while(true){
if((i__18412 < count__18411)){
var vec__18437 = chunk__18410.cljs$core$IIndexed$_nth$arity$2(null,i__18412);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19571 = seq__18409;
var G__19572 = chunk__18410;
var G__19573 = count__18411;
var G__19574 = (i__18412 + (1));
seq__18409 = G__19571;
chunk__18410 = G__19572;
count__18411 = G__19573;
i__18412 = G__19574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18409);
if(temp__5804__auto__){
var seq__18409__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18409__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18409__$1);
var G__19576 = cljs.core.chunk_rest(seq__18409__$1);
var G__19577 = c__5568__auto__;
var G__19578 = cljs.core.count(c__5568__auto__);
var G__19579 = (0);
seq__18409 = G__19576;
chunk__18410 = G__19577;
count__18411 = G__19578;
i__18412 = G__19579;
continue;
} else {
var vec__18454 = cljs.core.first(seq__18409__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19580 = cljs.core.next(seq__18409__$1);
var G__19581 = null;
var G__19582 = (0);
var G__19583 = (0);
seq__18409 = G__19580;
chunk__18410 = G__19581;
count__18411 = G__19582;
i__18412 = G__19583;
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
var seq__18469 = cljs.core.seq(styles);
var chunk__18470 = null;
var count__18471 = (0);
var i__18472 = (0);
while(true){
if((i__18472 < count__18471)){
var vec__18491 = chunk__18470.cljs$core$IIndexed$_nth$arity$2(null,i__18472);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19584 = seq__18469;
var G__19585 = chunk__18470;
var G__19586 = count__18471;
var G__19587 = (i__18472 + (1));
seq__18469 = G__19584;
chunk__18470 = G__19585;
count__18471 = G__19586;
i__18472 = G__19587;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18469);
if(temp__5804__auto__){
var seq__18469__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18469__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18469__$1);
var G__19592 = cljs.core.chunk_rest(seq__18469__$1);
var G__19593 = c__5568__auto__;
var G__19594 = cljs.core.count(c__5568__auto__);
var G__19595 = (0);
seq__18469 = G__19592;
chunk__18470 = G__19593;
count__18471 = G__19594;
i__18472 = G__19595;
continue;
} else {
var vec__18504 = cljs.core.first(seq__18469__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19597 = cljs.core.next(seq__18469__$1);
var G__19598 = null;
var G__19599 = (0);
var G__19600 = (0);
seq__18469 = G__19597;
chunk__18470 = G__19598;
count__18471 = G__19599;
i__18472 = G__19600;
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
var G__18518_19602 = key;
var G__18518_19603__$1 = (((G__18518_19602 instanceof cljs.core.Keyword))?G__18518_19602.fqn:null);
switch (G__18518_19603__$1) {
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
var ks_19609 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19609,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19609,"aria-");
}
})())){
el.setAttribute(ks_19609,value);
} else {
(el[ks_19609] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18592){
var map__18593 = p__18592;
var map__18593__$1 = cljs.core.__destructure_map(map__18593);
var props = map__18593__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18601 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18607 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18607,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18607;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18614 = arguments.length;
switch (G__18614) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18632){
var vec__18633 = p__18632;
var seq__18634 = cljs.core.seq(vec__18633);
var first__18635 = cljs.core.first(seq__18634);
var seq__18634__$1 = cljs.core.next(seq__18634);
var nn = first__18635;
var first__18635__$1 = cljs.core.first(seq__18634__$1);
var seq__18634__$2 = cljs.core.next(seq__18634__$1);
var np = first__18635__$1;
var nc = seq__18634__$2;
var node = vec__18633;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18640 = nn;
var G__18641 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18640,G__18641) : create_fn.call(null,G__18640,G__18641));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18644 = nn;
var G__18645 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18644,G__18645) : create_fn.call(null,G__18644,G__18645));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18647 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18647,(1),null);
var seq__18650_19622 = cljs.core.seq(node_children);
var chunk__18651_19623 = null;
var count__18652_19624 = (0);
var i__18653_19625 = (0);
while(true){
if((i__18653_19625 < count__18652_19624)){
var child_struct_19626 = chunk__18651_19623.cljs$core$IIndexed$_nth$arity$2(null,i__18653_19625);
var children_19627 = shadow.dom.dom_node(child_struct_19626);
if(cljs.core.seq_QMARK_(children_19627)){
var seq__18710_19628 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19627));
var chunk__18712_19629 = null;
var count__18713_19630 = (0);
var i__18714_19631 = (0);
while(true){
if((i__18714_19631 < count__18713_19630)){
var child_19633 = chunk__18712_19629.cljs$core$IIndexed$_nth$arity$2(null,i__18714_19631);
if(cljs.core.truth_(child_19633)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19633);


var G__19634 = seq__18710_19628;
var G__19635 = chunk__18712_19629;
var G__19636 = count__18713_19630;
var G__19637 = (i__18714_19631 + (1));
seq__18710_19628 = G__19634;
chunk__18712_19629 = G__19635;
count__18713_19630 = G__19636;
i__18714_19631 = G__19637;
continue;
} else {
var G__19639 = seq__18710_19628;
var G__19640 = chunk__18712_19629;
var G__19641 = count__18713_19630;
var G__19642 = (i__18714_19631 + (1));
seq__18710_19628 = G__19639;
chunk__18712_19629 = G__19640;
count__18713_19630 = G__19641;
i__18714_19631 = G__19642;
continue;
}
} else {
var temp__5804__auto___19643 = cljs.core.seq(seq__18710_19628);
if(temp__5804__auto___19643){
var seq__18710_19644__$1 = temp__5804__auto___19643;
if(cljs.core.chunked_seq_QMARK_(seq__18710_19644__$1)){
var c__5568__auto___19645 = cljs.core.chunk_first(seq__18710_19644__$1);
var G__19646 = cljs.core.chunk_rest(seq__18710_19644__$1);
var G__19647 = c__5568__auto___19645;
var G__19648 = cljs.core.count(c__5568__auto___19645);
var G__19649 = (0);
seq__18710_19628 = G__19646;
chunk__18712_19629 = G__19647;
count__18713_19630 = G__19648;
i__18714_19631 = G__19649;
continue;
} else {
var child_19650 = cljs.core.first(seq__18710_19644__$1);
if(cljs.core.truth_(child_19650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19650);


var G__19651 = cljs.core.next(seq__18710_19644__$1);
var G__19652 = null;
var G__19653 = (0);
var G__19654 = (0);
seq__18710_19628 = G__19651;
chunk__18712_19629 = G__19652;
count__18713_19630 = G__19653;
i__18714_19631 = G__19654;
continue;
} else {
var G__19655 = cljs.core.next(seq__18710_19644__$1);
var G__19656 = null;
var G__19657 = (0);
var G__19658 = (0);
seq__18710_19628 = G__19655;
chunk__18712_19629 = G__19656;
count__18713_19630 = G__19657;
i__18714_19631 = G__19658;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19627);
}


var G__19659 = seq__18650_19622;
var G__19660 = chunk__18651_19623;
var G__19661 = count__18652_19624;
var G__19662 = (i__18653_19625 + (1));
seq__18650_19622 = G__19659;
chunk__18651_19623 = G__19660;
count__18652_19624 = G__19661;
i__18653_19625 = G__19662;
continue;
} else {
var temp__5804__auto___19663 = cljs.core.seq(seq__18650_19622);
if(temp__5804__auto___19663){
var seq__18650_19664__$1 = temp__5804__auto___19663;
if(cljs.core.chunked_seq_QMARK_(seq__18650_19664__$1)){
var c__5568__auto___19665 = cljs.core.chunk_first(seq__18650_19664__$1);
var G__19666 = cljs.core.chunk_rest(seq__18650_19664__$1);
var G__19667 = c__5568__auto___19665;
var G__19668 = cljs.core.count(c__5568__auto___19665);
var G__19669 = (0);
seq__18650_19622 = G__19666;
chunk__18651_19623 = G__19667;
count__18652_19624 = G__19668;
i__18653_19625 = G__19669;
continue;
} else {
var child_struct_19670 = cljs.core.first(seq__18650_19664__$1);
var children_19671 = shadow.dom.dom_node(child_struct_19670);
if(cljs.core.seq_QMARK_(children_19671)){
var seq__18753_19672 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19671));
var chunk__18755_19673 = null;
var count__18756_19674 = (0);
var i__18757_19675 = (0);
while(true){
if((i__18757_19675 < count__18756_19674)){
var child_19676 = chunk__18755_19673.cljs$core$IIndexed$_nth$arity$2(null,i__18757_19675);
if(cljs.core.truth_(child_19676)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19676);


var G__19677 = seq__18753_19672;
var G__19678 = chunk__18755_19673;
var G__19679 = count__18756_19674;
var G__19680 = (i__18757_19675 + (1));
seq__18753_19672 = G__19677;
chunk__18755_19673 = G__19678;
count__18756_19674 = G__19679;
i__18757_19675 = G__19680;
continue;
} else {
var G__19681 = seq__18753_19672;
var G__19682 = chunk__18755_19673;
var G__19683 = count__18756_19674;
var G__19684 = (i__18757_19675 + (1));
seq__18753_19672 = G__19681;
chunk__18755_19673 = G__19682;
count__18756_19674 = G__19683;
i__18757_19675 = G__19684;
continue;
}
} else {
var temp__5804__auto___19685__$1 = cljs.core.seq(seq__18753_19672);
if(temp__5804__auto___19685__$1){
var seq__18753_19686__$1 = temp__5804__auto___19685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18753_19686__$1)){
var c__5568__auto___19687 = cljs.core.chunk_first(seq__18753_19686__$1);
var G__19688 = cljs.core.chunk_rest(seq__18753_19686__$1);
var G__19689 = c__5568__auto___19687;
var G__19690 = cljs.core.count(c__5568__auto___19687);
var G__19691 = (0);
seq__18753_19672 = G__19688;
chunk__18755_19673 = G__19689;
count__18756_19674 = G__19690;
i__18757_19675 = G__19691;
continue;
} else {
var child_19692 = cljs.core.first(seq__18753_19686__$1);
if(cljs.core.truth_(child_19692)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19692);


var G__19694 = cljs.core.next(seq__18753_19686__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__18753_19672 = G__19694;
chunk__18755_19673 = G__19695;
count__18756_19674 = G__19696;
i__18757_19675 = G__19697;
continue;
} else {
var G__19699 = cljs.core.next(seq__18753_19686__$1);
var G__19700 = null;
var G__19701 = (0);
var G__19702 = (0);
seq__18753_19672 = G__19699;
chunk__18755_19673 = G__19700;
count__18756_19674 = G__19701;
i__18757_19675 = G__19702;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19671);
}


var G__19703 = cljs.core.next(seq__18650_19664__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__18650_19622 = G__19703;
chunk__18651_19623 = G__19704;
count__18652_19624 = G__19705;
i__18653_19625 = G__19706;
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
var seq__18810 = cljs.core.seq(node);
var chunk__18811 = null;
var count__18812 = (0);
var i__18813 = (0);
while(true){
if((i__18813 < count__18812)){
var n = chunk__18811.cljs$core$IIndexed$_nth$arity$2(null,i__18813);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19710 = seq__18810;
var G__19711 = chunk__18811;
var G__19712 = count__18812;
var G__19713 = (i__18813 + (1));
seq__18810 = G__19710;
chunk__18811 = G__19711;
count__18812 = G__19712;
i__18813 = G__19713;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18810);
if(temp__5804__auto__){
var seq__18810__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18810__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18810__$1);
var G__19716 = cljs.core.chunk_rest(seq__18810__$1);
var G__19717 = c__5568__auto__;
var G__19718 = cljs.core.count(c__5568__auto__);
var G__19719 = (0);
seq__18810 = G__19716;
chunk__18811 = G__19717;
count__18812 = G__19718;
i__18813 = G__19719;
continue;
} else {
var n = cljs.core.first(seq__18810__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19720 = cljs.core.next(seq__18810__$1);
var G__19721 = null;
var G__19722 = (0);
var G__19723 = (0);
seq__18810 = G__19720;
chunk__18811 = G__19721;
count__18812 = G__19722;
i__18813 = G__19723;
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
var G__18831 = arguments.length;
switch (G__18831) {
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
var G__18847 = arguments.length;
switch (G__18847) {
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
var G__18862 = arguments.length;
switch (G__18862) {
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
var len__5769__auto___19735 = arguments.length;
var i__5770__auto___19736 = (0);
while(true){
if((i__5770__auto___19736 < len__5769__auto___19735)){
args__5775__auto__.push((arguments[i__5770__auto___19736]));

var G__19737 = (i__5770__auto___19736 + (1));
i__5770__auto___19736 = G__19737;
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
var seq__18896_19741 = cljs.core.seq(nodes);
var chunk__18897_19742 = null;
var count__18898_19743 = (0);
var i__18899_19744 = (0);
while(true){
if((i__18899_19744 < count__18898_19743)){
var node_19746 = chunk__18897_19742.cljs$core$IIndexed$_nth$arity$2(null,i__18899_19744);
fragment.appendChild(shadow.dom._to_dom(node_19746));


var G__19747 = seq__18896_19741;
var G__19748 = chunk__18897_19742;
var G__19749 = count__18898_19743;
var G__19750 = (i__18899_19744 + (1));
seq__18896_19741 = G__19747;
chunk__18897_19742 = G__19748;
count__18898_19743 = G__19749;
i__18899_19744 = G__19750;
continue;
} else {
var temp__5804__auto___19751 = cljs.core.seq(seq__18896_19741);
if(temp__5804__auto___19751){
var seq__18896_19752__$1 = temp__5804__auto___19751;
if(cljs.core.chunked_seq_QMARK_(seq__18896_19752__$1)){
var c__5568__auto___19753 = cljs.core.chunk_first(seq__18896_19752__$1);
var G__19754 = cljs.core.chunk_rest(seq__18896_19752__$1);
var G__19755 = c__5568__auto___19753;
var G__19756 = cljs.core.count(c__5568__auto___19753);
var G__19757 = (0);
seq__18896_19741 = G__19754;
chunk__18897_19742 = G__19755;
count__18898_19743 = G__19756;
i__18899_19744 = G__19757;
continue;
} else {
var node_19758 = cljs.core.first(seq__18896_19752__$1);
fragment.appendChild(shadow.dom._to_dom(node_19758));


var G__19759 = cljs.core.next(seq__18896_19752__$1);
var G__19760 = null;
var G__19761 = (0);
var G__19762 = (0);
seq__18896_19741 = G__19759;
chunk__18897_19742 = G__19760;
count__18898_19743 = G__19761;
i__18899_19744 = G__19762;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18887));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18915_19763 = cljs.core.seq(scripts);
var chunk__18916_19764 = null;
var count__18917_19765 = (0);
var i__18918_19766 = (0);
while(true){
if((i__18918_19766 < count__18917_19765)){
var vec__18934_19767 = chunk__18916_19764.cljs$core$IIndexed$_nth$arity$2(null,i__18918_19766);
var script_tag_19768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18934_19767,(0),null);
var script_body_19769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18934_19767,(1),null);
eval(script_body_19769);


var G__19770 = seq__18915_19763;
var G__19771 = chunk__18916_19764;
var G__19772 = count__18917_19765;
var G__19773 = (i__18918_19766 + (1));
seq__18915_19763 = G__19770;
chunk__18916_19764 = G__19771;
count__18917_19765 = G__19772;
i__18918_19766 = G__19773;
continue;
} else {
var temp__5804__auto___19774 = cljs.core.seq(seq__18915_19763);
if(temp__5804__auto___19774){
var seq__18915_19775__$1 = temp__5804__auto___19774;
if(cljs.core.chunked_seq_QMARK_(seq__18915_19775__$1)){
var c__5568__auto___19776 = cljs.core.chunk_first(seq__18915_19775__$1);
var G__19777 = cljs.core.chunk_rest(seq__18915_19775__$1);
var G__19778 = c__5568__auto___19776;
var G__19779 = cljs.core.count(c__5568__auto___19776);
var G__19780 = (0);
seq__18915_19763 = G__19777;
chunk__18916_19764 = G__19778;
count__18917_19765 = G__19779;
i__18918_19766 = G__19780;
continue;
} else {
var vec__18945_19781 = cljs.core.first(seq__18915_19775__$1);
var script_tag_19782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945_19781,(0),null);
var script_body_19783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18945_19781,(1),null);
eval(script_body_19783);


var G__19784 = cljs.core.next(seq__18915_19775__$1);
var G__19785 = null;
var G__19786 = (0);
var G__19787 = (0);
seq__18915_19763 = G__19784;
chunk__18916_19764 = G__19785;
count__18917_19765 = G__19786;
i__18918_19766 = G__19787;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18950){
var vec__18951 = p__18950;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
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
var G__18964 = arguments.length;
switch (G__18964) {
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
var seq__18966 = cljs.core.seq(style_keys);
var chunk__18967 = null;
var count__18968 = (0);
var i__18969 = (0);
while(true){
if((i__18969 < count__18968)){
var it = chunk__18967.cljs$core$IIndexed$_nth$arity$2(null,i__18969);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19793 = seq__18966;
var G__19794 = chunk__18967;
var G__19795 = count__18968;
var G__19796 = (i__18969 + (1));
seq__18966 = G__19793;
chunk__18967 = G__19794;
count__18968 = G__19795;
i__18969 = G__19796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18966);
if(temp__5804__auto__){
var seq__18966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18966__$1);
var G__19797 = cljs.core.chunk_rest(seq__18966__$1);
var G__19798 = c__5568__auto__;
var G__19799 = cljs.core.count(c__5568__auto__);
var G__19800 = (0);
seq__18966 = G__19797;
chunk__18967 = G__19798;
count__18968 = G__19799;
i__18969 = G__19800;
continue;
} else {
var it = cljs.core.first(seq__18966__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19801 = cljs.core.next(seq__18966__$1);
var G__19802 = null;
var G__19803 = (0);
var G__19804 = (0);
seq__18966 = G__19801;
chunk__18967 = G__19802;
count__18968 = G__19803;
i__18969 = G__19804;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18986,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18999 = k18986;
var G__18999__$1 = (((G__18999 instanceof cljs.core.Keyword))?G__18999.fqn:null);
switch (G__18999__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18986,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19005){
var vec__19007 = p__19005;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19007,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19007,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18985){
var self__ = this;
var G__18985__$1 = this;
return (new cljs.core.RecordIter((0),G__18985__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18987,other18988){
var self__ = this;
var this18987__$1 = this;
return (((!((other18988 == null)))) && ((((this18987__$1.constructor === other18988.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18987__$1.x,other18988.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18987__$1.y,other18988.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18987__$1.__extmap,other18988.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18986){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19037 = k18986;
var G__19037__$1 = (((G__19037 instanceof cljs.core.Keyword))?G__19037.fqn:null);
switch (G__19037__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18986);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18985){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19040 = cljs.core.keyword_identical_QMARK_;
var expr__19041 = k__5352__auto__;
if(cljs.core.truth_((pred__19040.cljs$core$IFn$_invoke$arity$2 ? pred__19040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19041) : pred__19040.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19041)))){
return (new shadow.dom.Coordinate(G__18985,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19040.cljs$core$IFn$_invoke$arity$2 ? pred__19040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19041) : pred__19040.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19041)))){
return (new shadow.dom.Coordinate(self__.x,G__18985,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18985),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18985){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18985,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18991){
var extmap__5385__auto__ = (function (){var G__19057 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18991,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19057);
} else {
return G__19057;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18991),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18991),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19074,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19088 = k19074;
var G__19088__$1 = (((G__19088 instanceof cljs.core.Keyword))?G__19088.fqn:null);
switch (G__19088__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19074,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19093){
var vec__19094 = p__19093;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19073){
var self__ = this;
var G__19073__$1 = this;
return (new cljs.core.RecordIter((0),G__19073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19075,other19076){
var self__ = this;
var this19075__$1 = this;
return (((!((other19076 == null)))) && ((((this19075__$1.constructor === other19076.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19075__$1.w,other19076.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19075__$1.h,other19076.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19075__$1.__extmap,other19076.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19074){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19118 = k19074;
var G__19118__$1 = (((G__19118 instanceof cljs.core.Keyword))?G__19118.fqn:null);
switch (G__19118__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19074);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19073){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19119 = cljs.core.keyword_identical_QMARK_;
var expr__19120 = k__5352__auto__;
if(cljs.core.truth_((pred__19119.cljs$core$IFn$_invoke$arity$2 ? pred__19119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19120) : pred__19119.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19120)))){
return (new shadow.dom.Size(G__19073,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19119.cljs$core$IFn$_invoke$arity$2 ? pred__19119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19120) : pred__19119.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19120)))){
return (new shadow.dom.Size(self__.w,G__19073,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19073),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19073){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19073,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19078){
var extmap__5385__auto__ = (function (){var G__19128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19078,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19078)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19128);
} else {
return G__19128;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19078),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19078),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__19840 = (i + (1));
var G__19841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19840;
ret = G__19841;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19156){
var vec__19157 = p__19156;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19165 = arguments.length;
switch (G__19165) {
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
var G__19845 = ps;
var G__19846 = (i + (1));
el__$1 = G__19845;
i = G__19846;
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
var vec__19234 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19257_19855 = cljs.core.seq(props);
var chunk__19258_19856 = null;
var count__19259_19857 = (0);
var i__19260_19858 = (0);
while(true){
if((i__19260_19858 < count__19259_19857)){
var vec__19303_19859 = chunk__19258_19856.cljs$core$IIndexed$_nth$arity$2(null,i__19260_19858);
var k_19860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303_19859,(0),null);
var v_19861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303_19859,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19860);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19860),v_19861);


var G__19864 = seq__19257_19855;
var G__19865 = chunk__19258_19856;
var G__19866 = count__19259_19857;
var G__19867 = (i__19260_19858 + (1));
seq__19257_19855 = G__19864;
chunk__19258_19856 = G__19865;
count__19259_19857 = G__19866;
i__19260_19858 = G__19867;
continue;
} else {
var temp__5804__auto___19868 = cljs.core.seq(seq__19257_19855);
if(temp__5804__auto___19868){
var seq__19257_19869__$1 = temp__5804__auto___19868;
if(cljs.core.chunked_seq_QMARK_(seq__19257_19869__$1)){
var c__5568__auto___19870 = cljs.core.chunk_first(seq__19257_19869__$1);
var G__19871 = cljs.core.chunk_rest(seq__19257_19869__$1);
var G__19872 = c__5568__auto___19870;
var G__19873 = cljs.core.count(c__5568__auto___19870);
var G__19874 = (0);
seq__19257_19855 = G__19871;
chunk__19258_19856 = G__19872;
count__19259_19857 = G__19873;
i__19260_19858 = G__19874;
continue;
} else {
var vec__19309_19875 = cljs.core.first(seq__19257_19869__$1);
var k_19876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309_19875,(0),null);
var v_19877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309_19875,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19876);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19876),v_19877);


var G__19878 = cljs.core.next(seq__19257_19869__$1);
var G__19879 = null;
var G__19880 = (0);
var G__19881 = (0);
seq__19257_19855 = G__19878;
chunk__19258_19856 = G__19879;
count__19259_19857 = G__19880;
i__19260_19858 = G__19881;
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
var vec__19321 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(1),null);
var seq__19324_19889 = cljs.core.seq(node_children);
var chunk__19326_19890 = null;
var count__19327_19891 = (0);
var i__19328_19892 = (0);
while(true){
if((i__19328_19892 < count__19327_19891)){
var child_struct_19893 = chunk__19326_19890.cljs$core$IIndexed$_nth$arity$2(null,i__19328_19892);
if((!((child_struct_19893 == null)))){
if(typeof child_struct_19893 === 'string'){
var text_19894 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19894),child_struct_19893].join(''));
} else {
var children_19895 = shadow.dom.svg_node(child_struct_19893);
if(cljs.core.seq_QMARK_(children_19895)){
var seq__19414_19896 = cljs.core.seq(children_19895);
var chunk__19416_19897 = null;
var count__19417_19898 = (0);
var i__19418_19899 = (0);
while(true){
if((i__19418_19899 < count__19417_19898)){
var child_19903 = chunk__19416_19897.cljs$core$IIndexed$_nth$arity$2(null,i__19418_19899);
if(cljs.core.truth_(child_19903)){
node.appendChild(child_19903);


var G__19904 = seq__19414_19896;
var G__19905 = chunk__19416_19897;
var G__19906 = count__19417_19898;
var G__19907 = (i__19418_19899 + (1));
seq__19414_19896 = G__19904;
chunk__19416_19897 = G__19905;
count__19417_19898 = G__19906;
i__19418_19899 = G__19907;
continue;
} else {
var G__19908 = seq__19414_19896;
var G__19909 = chunk__19416_19897;
var G__19910 = count__19417_19898;
var G__19911 = (i__19418_19899 + (1));
seq__19414_19896 = G__19908;
chunk__19416_19897 = G__19909;
count__19417_19898 = G__19910;
i__19418_19899 = G__19911;
continue;
}
} else {
var temp__5804__auto___19912 = cljs.core.seq(seq__19414_19896);
if(temp__5804__auto___19912){
var seq__19414_19913__$1 = temp__5804__auto___19912;
if(cljs.core.chunked_seq_QMARK_(seq__19414_19913__$1)){
var c__5568__auto___19914 = cljs.core.chunk_first(seq__19414_19913__$1);
var G__19916 = cljs.core.chunk_rest(seq__19414_19913__$1);
var G__19917 = c__5568__auto___19914;
var G__19918 = cljs.core.count(c__5568__auto___19914);
var G__19919 = (0);
seq__19414_19896 = G__19916;
chunk__19416_19897 = G__19917;
count__19417_19898 = G__19918;
i__19418_19899 = G__19919;
continue;
} else {
var child_19920 = cljs.core.first(seq__19414_19913__$1);
if(cljs.core.truth_(child_19920)){
node.appendChild(child_19920);


var G__19921 = cljs.core.next(seq__19414_19913__$1);
var G__19922 = null;
var G__19923 = (0);
var G__19924 = (0);
seq__19414_19896 = G__19921;
chunk__19416_19897 = G__19922;
count__19417_19898 = G__19923;
i__19418_19899 = G__19924;
continue;
} else {
var G__19925 = cljs.core.next(seq__19414_19913__$1);
var G__19926 = null;
var G__19927 = (0);
var G__19928 = (0);
seq__19414_19896 = G__19925;
chunk__19416_19897 = G__19926;
count__19417_19898 = G__19927;
i__19418_19899 = G__19928;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19895);
}
}


var G__19932 = seq__19324_19889;
var G__19933 = chunk__19326_19890;
var G__19934 = count__19327_19891;
var G__19935 = (i__19328_19892 + (1));
seq__19324_19889 = G__19932;
chunk__19326_19890 = G__19933;
count__19327_19891 = G__19934;
i__19328_19892 = G__19935;
continue;
} else {
var G__19936 = seq__19324_19889;
var G__19937 = chunk__19326_19890;
var G__19938 = count__19327_19891;
var G__19939 = (i__19328_19892 + (1));
seq__19324_19889 = G__19936;
chunk__19326_19890 = G__19937;
count__19327_19891 = G__19938;
i__19328_19892 = G__19939;
continue;
}
} else {
var temp__5804__auto___19940 = cljs.core.seq(seq__19324_19889);
if(temp__5804__auto___19940){
var seq__19324_19941__$1 = temp__5804__auto___19940;
if(cljs.core.chunked_seq_QMARK_(seq__19324_19941__$1)){
var c__5568__auto___19942 = cljs.core.chunk_first(seq__19324_19941__$1);
var G__19943 = cljs.core.chunk_rest(seq__19324_19941__$1);
var G__19944 = c__5568__auto___19942;
var G__19945 = cljs.core.count(c__5568__auto___19942);
var G__19946 = (0);
seq__19324_19889 = G__19943;
chunk__19326_19890 = G__19944;
count__19327_19891 = G__19945;
i__19328_19892 = G__19946;
continue;
} else {
var child_struct_19947 = cljs.core.first(seq__19324_19941__$1);
if((!((child_struct_19947 == null)))){
if(typeof child_struct_19947 === 'string'){
var text_19948 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19948),child_struct_19947].join(''));
} else {
var children_19949 = shadow.dom.svg_node(child_struct_19947);
if(cljs.core.seq_QMARK_(children_19949)){
var seq__19474_19950 = cljs.core.seq(children_19949);
var chunk__19476_19951 = null;
var count__19477_19952 = (0);
var i__19478_19953 = (0);
while(true){
if((i__19478_19953 < count__19477_19952)){
var child_19954 = chunk__19476_19951.cljs$core$IIndexed$_nth$arity$2(null,i__19478_19953);
if(cljs.core.truth_(child_19954)){
node.appendChild(child_19954);


var G__19955 = seq__19474_19950;
var G__19956 = chunk__19476_19951;
var G__19957 = count__19477_19952;
var G__19958 = (i__19478_19953 + (1));
seq__19474_19950 = G__19955;
chunk__19476_19951 = G__19956;
count__19477_19952 = G__19957;
i__19478_19953 = G__19958;
continue;
} else {
var G__19960 = seq__19474_19950;
var G__19961 = chunk__19476_19951;
var G__19962 = count__19477_19952;
var G__19963 = (i__19478_19953 + (1));
seq__19474_19950 = G__19960;
chunk__19476_19951 = G__19961;
count__19477_19952 = G__19962;
i__19478_19953 = G__19963;
continue;
}
} else {
var temp__5804__auto___19964__$1 = cljs.core.seq(seq__19474_19950);
if(temp__5804__auto___19964__$1){
var seq__19474_19965__$1 = temp__5804__auto___19964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19474_19965__$1)){
var c__5568__auto___19966 = cljs.core.chunk_first(seq__19474_19965__$1);
var G__19967 = cljs.core.chunk_rest(seq__19474_19965__$1);
var G__19968 = c__5568__auto___19966;
var G__19969 = cljs.core.count(c__5568__auto___19966);
var G__19970 = (0);
seq__19474_19950 = G__19967;
chunk__19476_19951 = G__19968;
count__19477_19952 = G__19969;
i__19478_19953 = G__19970;
continue;
} else {
var child_19971 = cljs.core.first(seq__19474_19965__$1);
if(cljs.core.truth_(child_19971)){
node.appendChild(child_19971);


var G__19972 = cljs.core.next(seq__19474_19965__$1);
var G__19973 = null;
var G__19974 = (0);
var G__19975 = (0);
seq__19474_19950 = G__19972;
chunk__19476_19951 = G__19973;
count__19477_19952 = G__19974;
i__19478_19953 = G__19975;
continue;
} else {
var G__19976 = cljs.core.next(seq__19474_19965__$1);
var G__19977 = null;
var G__19978 = (0);
var G__19979 = (0);
seq__19474_19950 = G__19976;
chunk__19476_19951 = G__19977;
count__19477_19952 = G__19978;
i__19478_19953 = G__19979;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19949);
}
}


var G__19980 = cljs.core.next(seq__19324_19941__$1);
var G__19981 = null;
var G__19982 = (0);
var G__19983 = (0);
seq__19324_19889 = G__19980;
chunk__19326_19890 = G__19981;
count__19327_19891 = G__19982;
i__19328_19892 = G__19983;
continue;
} else {
var G__19984 = cljs.core.next(seq__19324_19941__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19324_19889 = G__19984;
chunk__19326_19890 = G__19985;
count__19327_19891 = G__19986;
i__19328_19892 = G__19987;
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
var len__5769__auto___19992 = arguments.length;
var i__5770__auto___19993 = (0);
while(true){
if((i__5770__auto___19993 < len__5769__auto___19992)){
args__5775__auto__.push((arguments[i__5770__auto___19993]));

var G__19994 = (i__5770__auto___19993 + (1));
i__5770__auto___19993 = G__19994;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19488){
var G__19489 = cljs.core.first(seq19488);
var seq19488__$1 = cljs.core.next(seq19488);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19489,seq19488__$1);
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
var G__19506 = arguments.length;
switch (G__19506) {
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
var c__13958__auto___20001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13959__auto__ = (function (){var switch__13647__auto__ = (function (state_19512){
var state_val_19513 = (state_19512[(1)]);
if((state_val_19513 === (1))){
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19512__$1,(2),once_or_cleanup);
} else {
if((state_val_19513 === (2))){
var inst_19509 = (state_19512[(2)]);
var inst_19510 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19512__$1 = (function (){var statearr_19517 = state_19512;
(statearr_19517[(7)] = inst_19509);

return statearr_19517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19512__$1,inst_19510);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13648__auto__ = null;
var shadow$dom$state_machine__13648__auto____0 = (function (){
var statearr_19518 = [null,null,null,null,null,null,null,null];
(statearr_19518[(0)] = shadow$dom$state_machine__13648__auto__);

(statearr_19518[(1)] = (1));

return statearr_19518;
});
var shadow$dom$state_machine__13648__auto____1 = (function (state_19512){
while(true){
var ret_value__13649__auto__ = (function (){try{while(true){
var result__13650__auto__ = switch__13647__auto__(state_19512);
if(cljs.core.keyword_identical_QMARK_(result__13650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13650__auto__;
}
break;
}
}catch (e19519){var ex__13651__auto__ = e19519;
var statearr_19520_20002 = state_19512;
(statearr_19520_20002[(2)] = ex__13651__auto__);


if(cljs.core.seq((state_19512[(4)]))){
var statearr_19521_20003 = state_19512;
(statearr_19521_20003[(1)] = cljs.core.first((state_19512[(4)])));

} else {
throw ex__13651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20004 = state_19512;
state_19512 = G__20004;
continue;
} else {
return ret_value__13649__auto__;
}
break;
}
});
shadow$dom$state_machine__13648__auto__ = function(state_19512){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13648__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13648__auto____1.call(this,state_19512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13648__auto____0;
shadow$dom$state_machine__13648__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13648__auto____1;
return shadow$dom$state_machine__13648__auto__;
})()
})();
var state__13960__auto__ = (function (){var statearr_19522 = f__13959__auto__();
(statearr_19522[(6)] = c__13958__auto___20001);

return statearr_19522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13960__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
