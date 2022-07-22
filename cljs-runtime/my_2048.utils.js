goog.provide('my_2048.utils');
my_2048.utils.arrow_direction = new cljs.core.PersistentArrayMap(null, 4, ["ArrowDown",new cljs.core.Keyword(null,"down","down",1565245570),"ArrowUp",new cljs.core.Keyword(null,"up","up",-269712113),"ArrowLeft",new cljs.core.Keyword(null,"left","left",-399115937),"ArrowRight",new cljs.core.Keyword(null,"right","right",-452581833)], null);
my_2048.utils.tile_color = cljs.core.PersistentHashMap.fromArrays([(0),(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#776e65","#edcf72","#ede0c8","#edcc61","#f67c5f","#edcc61","#edc53f","#f65e3b","#eee4da","#f59563","#edc22e","#f2b179"]);
my_2048.utils.font_color = new cljs.core.PersistentArrayMap(null, 2, [true,"#776e65",false,"#f9f6f2"], null);
my_2048.utils.draw_square = (function my_2048$utils$draw_square(point,ctx,tile_size){
var vec__11325 = point;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(1),null);
return ctx.fillRect(m,n,tile_size,tile_size);
});
my_2048.utils.get_vertexes = (function my_2048$utils$get_vertexes(tile_side,grid_side_size,tile_gap){
var vertex_distance = (tile_side + tile_gap);
var vertex_xy = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__11330(s__11331){
return (new cljs.core.LazySeq(null,(function (){
var s__11331__$1 = s__11331;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11331__$1);
if(temp__5804__auto__){
var s__11331__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11331__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11331__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11333 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11332 = (0);
while(true){
if((i__11332 < size__5522__auto__)){
var vertex_num = cljs.core._nth(c__5521__auto__,i__11332);
cljs.core.chunk_append(b__11333,(vertex_distance * vertex_num));

var G__11397 = (i__11332 + (1));
i__11332 = G__11397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11333),my_2048$utils$get_vertexes_$_iter__11330(cljs.core.chunk_rest(s__11331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11333),null);
}
} else {
var vertex_num = cljs.core.first(s__11331__$2);
return cljs.core.cons((vertex_distance * vertex_num),my_2048$utils$get_vertexes_$_iter__11330(cljs.core.rest(s__11331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_side_size));
})();
var position2vec = (function (p1__11328_SHARP_,p2__11329_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.vec(p1__11328_SHARP_),cljs.core.vec(p2__11329_SHARP_));
});
var vertexes = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__11334(s__11335){
return (new cljs.core.LazySeq(null,(function (){
var s__11335__$1 = s__11335;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11335__$1);
if(temp__5804__auto__){
var s__11335__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11335__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11335__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11337 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11336 = (0);
while(true){
if((i__11336 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__11336);
cljs.core.chunk_append(b__11337,(function (){var iter__5523__auto__ = ((function (i__11336,x,c__5521__auto__,size__5522__auto__,b__11337,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__11334_$_iter__11338(s__11339){
return (new cljs.core.LazySeq(null,((function (i__11336,x,c__5521__auto__,size__5522__auto__,b__11337,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function (){
var s__11339__$1 = s__11339;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__11339__$1);
if(temp__5804__auto____$1){
var s__11339__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11339__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__11339__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__11341 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__11340 = (0);
while(true){
if((i__11340 < size__5522__auto____$1)){
var y = cljs.core._nth(c__5521__auto____$1,i__11340);
cljs.core.chunk_append(b__11341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__11407 = (i__11340 + (1));
i__11340 = G__11407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11341),my_2048$utils$get_vertexes_$_iter__11334_$_iter__11338(cljs.core.chunk_rest(s__11339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11341),null);
}
} else {
var y = cljs.core.first(s__11339__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__11334_$_iter__11338(cljs.core.rest(s__11339__$2)));
}
} else {
return null;
}
break;
}
});})(i__11336,x,c__5521__auto__,size__5522__auto__,b__11337,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
,null,null));
});})(i__11336,x,c__5521__auto__,size__5522__auto__,b__11337,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})());

var G__11408 = (i__11336 + (1));
i__11336 = G__11408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11337),my_2048$utils$get_vertexes_$_iter__11334(cljs.core.chunk_rest(s__11335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11337),null);
}
} else {
var x = cljs.core.first(s__11335__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__11334_$_iter__11342(s__11343){
return (new cljs.core.LazySeq(null,(function (){
var s__11343__$1 = s__11343;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__11343__$1);
if(temp__5804__auto____$1){
var s__11343__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11343__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11343__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11345 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11344 = (0);
while(true){
if((i__11344 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__11344);
cljs.core.chunk_append(b__11345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__11409 = (i__11344 + (1));
i__11344 = G__11409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11345),my_2048$utils$get_vertexes_$_iter__11334_$_iter__11342(cljs.core.chunk_rest(s__11343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11345),null);
}
} else {
var y = cljs.core.first(s__11343__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__11334_$_iter__11342(cljs.core.rest(s__11343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__11335__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})(),my_2048$utils$get_vertexes_$_iter__11334(cljs.core.rest(s__11335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vertex_xy);
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(position2vec,cljs.core.PersistentVector.EMPTY,vertexes);
});
my_2048.utils.get_ctx = (function my_2048$utils$get_ctx(canvas){
return canvas.getContext("2d");
});
my_2048.utils.set_color = (function my_2048$utils$set_color(ctx,color){
return (ctx.fillStyle = color);
});
my_2048.utils.set_font = (function my_2048$utils$set_font(ctx,font){
return (ctx.font = font);
});
my_2048.utils.get_font_size = (function my_2048$utils$get_font_size(value){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((value < (16)))?(45):(((value < (128)))?(40):(((value < (1024)))?(33):(27)
))));
});
my_2048.utils.get_delta_x = (function my_2048$utils$get_delta_x(value){
if((value < (16))){
return (24);
} else {
if((value < (128))){
return (16);
} else {
if((value < (1024))){
return (9);
} else {
return (6);

}
}
}
});
my_2048.utils.draw_field = (function my_2048$utils$draw_field(ctx,tile_size,game_field){
var seq__11346_11410 = cljs.core.seq(game_field);
var chunk__11347_11411 = null;
var count__11348_11412 = (0);
var i__11349_11413 = (0);
while(true){
if((i__11349_11413 < count__11348_11412)){
var vec__11356_11414 = chunk__11347_11411.cljs$core$IIndexed$_nth$arity$2(null,i__11349_11413);
var point_11415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11356_11414,(0),null);
var cell_value_11416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11356_11414,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_11416) : my_2048.utils.tile_color.call(null,cell_value_11416)));

my_2048.utils.draw_square(point_11415,ctx,tile_size);


var G__11417 = seq__11346_11410;
var G__11418 = chunk__11347_11411;
var G__11419 = count__11348_11412;
var G__11420 = (i__11349_11413 + (1));
seq__11346_11410 = G__11417;
chunk__11347_11411 = G__11418;
count__11348_11412 = G__11419;
i__11349_11413 = G__11420;
continue;
} else {
var temp__5804__auto___11421 = cljs.core.seq(seq__11346_11410);
if(temp__5804__auto___11421){
var seq__11346_11422__$1 = temp__5804__auto___11421;
if(cljs.core.chunked_seq_QMARK_(seq__11346_11422__$1)){
var c__5568__auto___11423 = cljs.core.chunk_first(seq__11346_11422__$1);
var G__11424 = cljs.core.chunk_rest(seq__11346_11422__$1);
var G__11425 = c__5568__auto___11423;
var G__11426 = cljs.core.count(c__5568__auto___11423);
var G__11427 = (0);
seq__11346_11410 = G__11424;
chunk__11347_11411 = G__11425;
count__11348_11412 = G__11426;
i__11349_11413 = G__11427;
continue;
} else {
var vec__11359_11428 = cljs.core.first(seq__11346_11422__$1);
var point_11429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11359_11428,(0),null);
var cell_value_11430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11359_11428,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_11430) : my_2048.utils.tile_color.call(null,cell_value_11430)));

my_2048.utils.draw_square(point_11429,ctx,tile_size);


var G__11431 = cljs.core.next(seq__11346_11422__$1);
var G__11432 = null;
var G__11433 = (0);
var G__11434 = (0);
seq__11346_11410 = G__11431;
chunk__11347_11411 = G__11432;
count__11348_11412 = G__11433;
i__11349_11413 = G__11434;
continue;
}
} else {
}
}
break;
}

var seq__11362 = cljs.core.seq(game_field);
var chunk__11363 = null;
var count__11364 = (0);
var i__11365 = (0);
while(true){
if((i__11365 < count__11364)){
var vec__11380 = chunk__11363.cljs$core$IIndexed$_nth$arity$2(null,i__11365);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11380,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11380,(1),null);
if((cell_value > (0))){
var text_11435 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__11383_11436 = point;
var x_11437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383_11436,(0),null);
var y_11438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11383_11436,(1),null);
var font_size_11439 = my_2048.utils.get_font_size(cell_value);
var font_11440 = [font_size_11439,"px serif"].join('');
var delta_x_11441 = my_2048.utils.get_delta_x(cell_value);
var delta_y_11442 = (55);
my_2048.utils.set_color(ctx,(function (){var G__11386 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__11386) : my_2048.utils.font_color.call(null,G__11386));
})());

my_2048.utils.set_font(ctx,font_11440);

ctx.fillText(text_11435,(x_11437 + delta_x_11441),(y_11438 + delta_y_11442));
} else {
}


var G__11443 = seq__11362;
var G__11444 = chunk__11363;
var G__11445 = count__11364;
var G__11446 = (i__11365 + (1));
seq__11362 = G__11443;
chunk__11363 = G__11444;
count__11364 = G__11445;
i__11365 = G__11446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11362);
if(temp__5804__auto__){
var seq__11362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11362__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11362__$1);
var G__11447 = cljs.core.chunk_rest(seq__11362__$1);
var G__11448 = c__5568__auto__;
var G__11449 = cljs.core.count(c__5568__auto__);
var G__11450 = (0);
seq__11362 = G__11447;
chunk__11363 = G__11448;
count__11364 = G__11449;
i__11365 = G__11450;
continue;
} else {
var vec__11387 = cljs.core.first(seq__11362__$1);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11387,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11387,(1),null);
if((cell_value > (0))){
var text_11451 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__11390_11452 = point;
var x_11453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11390_11452,(0),null);
var y_11454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11390_11452,(1),null);
var font_size_11455 = my_2048.utils.get_font_size(cell_value);
var font_11456 = [font_size_11455,"px serif"].join('');
var delta_x_11457 = my_2048.utils.get_delta_x(cell_value);
var delta_y_11458 = (55);
my_2048.utils.set_color(ctx,(function (){var G__11393 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__11393) : my_2048.utils.font_color.call(null,G__11393));
})());

my_2048.utils.set_font(ctx,font_11456);

ctx.fillText(text_11451,(x_11453 + delta_x_11457),(y_11454 + delta_y_11458));
} else {
}


var G__11459 = cljs.core.next(seq__11362__$1);
var G__11460 = null;
var G__11461 = (0);
var G__11462 = (0);
seq__11362 = G__11459;
chunk__11363 = G__11460;
count__11364 = G__11461;
i__11365 = G__11462;
continue;
}
} else {
return null;
}
}
break;
}
});
my_2048.utils.clear_canvas = (function my_2048$utils$clear_canvas(canvas){
var ctx = my_2048.utils.get_ctx(canvas);
var w = canvas.width;
var h = canvas.height;
return ctx.clearRect((0),(0),w,h);
});

//# sourceMappingURL=my_2048.utils.js.map
