goog.provide('my_2048.swipe');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
my_2048.swipe.one_touch_QMARK_ = module$node_modules$rxjs$dist$cjs$index.filter((function (t){
return (t.touches.length === (1));
}));
my_2048.swipe.prevent_def = module$node_modules$rxjs$dist$cjs$index.tap((function (p1__12143_SHARP_){
return p1__12143_SHARP_.preventDefault();
}));
my_2048.swipe.get_xy = (function my_2048$swipe$get_xy(event){
var touches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.type,"touchend"))?event.changedTouches:event.touches);
var point = (touches[(0)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point.pageX,point.pageY], null);
});
my_2048.swipe.log = (function my_2048$swipe$log(msg){
return (function (event){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg,my_2048.swipe.get_xy(event)], 0));
});
});
my_2048.swipe.get_direction = (function my_2048$swipe$get_direction(dx,dy){
if((Math.abs(dx) >= Math.abs(dy))){
if((dx > (0))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
return new cljs.core.Keyword(null,"left","left",-399115937);
}
} else {
if((Math.abs(dx) < Math.abs(dy))){
if((dy > (0))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
} else {
return null;
}
}
});
my_2048.swipe.arrowSwipe = (function my_2048$swipe$arrowSwipe(){
return module$node_modules$rxjs$dist$cjs$index.fromEvent(document,"keydown").pipe(module$node_modules$rxjs$dist$cjs$index.map((function (event){
return (my_2048.utils.arrow_direction.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.arrow_direction.cljs$core$IFn$_invoke$arity$1(event.key) : my_2048.utils.arrow_direction.call(null,event.key));
})));
});
my_2048.swipe.touchSwipe = (function my_2048$swipe$touchSwipe(el){
var get_stream = (function (p1__12144_SHARP_){
var G__12145 = module$node_modules$rxjs$dist$cjs$index.fromEvent(el,p1__12144_SHARP_);
return (my_2048.swipe.prevent_def.cljs$core$IFn$_invoke$arity$1 ? my_2048.swipe.prevent_def.cljs$core$IFn$_invoke$arity$1(G__12145) : my_2048.swipe.prevent_def.call(null,G__12145));
});
var touch_start = get_stream("touchstart");
var touch_move = get_stream("touchmove");
var touch_end = get_stream("touchend");
var changedDirection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var is_growing_QMARK_ = (function (x0,y0,pt,nt){
var vec__12146 = pt;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(1),null);
var vec__12149 = nt;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149,(1),null);
var dpx = Math.abs((px - x0));
var dpy = Math.abs((y0 - py));
var dnx = Math.abs((nx - x0));
var dny = Math.abs((y0 - ny));
return (((dnx >= dpx)) && ((dny >= dpy)));
});
var swipe_pipe = (function (ts){
var touch0 = (ts.touches[(0)]);
var x0 = touch0.pageX;
var y0 = touch0.pageY;
return touch_move.pipe(my_2048.swipe.one_touch_QMARK_,module$node_modules$rxjs$dist$cjs$index.map(my_2048.swipe.get_xy),module$node_modules$rxjs$dist$cjs$index.map((function (p__12152,_){
var vec__12153 = p__12152;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12153,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12153,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),my_2048.swipe.get_direction((nx - x0),(y0 - ny))], null);
})),module$node_modules$rxjs$dist$cjs$index.pairwise(),module$node_modules$rxjs$dist$cjs$index.tap((function (p__12156,_){
var vec__12157 = p__12156;
var vec__12160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12157,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12160,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12160,(1),null);
var vec__12163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12157,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(changedDirection,(function (){
if((((cljs.core.deref(changedDirection) === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)))){
return (0);
} else {
return (1);
}
}));
})),module$node_modules$rxjs$dist$cjs$index.takeWhile((function (p__12166,_){
var vec__12167 = p__12166;
var vec__12170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12167,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12170,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12170,(1),null);
var vec__12173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12167,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173,(1),null);
return is_growing_QMARK_(x0,y0,pt,nt);
})),module$node_modules$rxjs$dist$cjs$index.takeWhile((function (p__12176,_){
var vec__12177 = p__12176;
var vec__12180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12177,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(1),null);
var vec__12183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12177,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(changedDirection),(1))))));
})),module$node_modules$rxjs$dist$cjs$index.takeUntil(touch_end),module$node_modules$rxjs$dist$cjs$index.last(),module$node_modules$rxjs$dist$cjs$index.map((function (p__12186,_,___$1){
var vec__12187 = p__12186;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12187,(0),null);
var vec__12190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12187,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(1),null);
return direction;
})));
});
var drag = touch_start.pipe(my_2048.swipe.one_touch_QMARK_,module$node_modules$rxjs$dist$cjs$index.switchMap(swipe_pipe));
drag.subscribe(cljs.core.println);

return drag;
});

//# sourceMappingURL=my_2048.swipe.js.map
