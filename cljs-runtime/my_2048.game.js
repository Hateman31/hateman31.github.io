goog.provide('my_2048.game');
my_2048.game.field_transitions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(12),(1),(5),(9),(13),(2),(6),(10),(14),(3),(7),(11),(15)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(11),(7),(3),(14),(10),(6),(2),(13),(9),(5),(1),(12),(8),(4),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(0),(7),(6),(5),(4),(11),(10),(9),(8),(15),(14),(13),(12)], null)], null);
my_2048.game.matrix_to_vector = (function my_2048$game$matrix_to_vector(matrix){
var G__20966 = matrix;
var vec__20967 = G__20966;
var seq__20968 = cljs.core.seq(vec__20967);
var first__20969 = cljs.core.first(seq__20968);
var seq__20968__$1 = cljs.core.next(seq__20968);
var x = first__20969;
var xs = seq__20968__$1;
var res = cljs.core.PersistentVector.EMPTY;
var G__20966__$1 = G__20966;
var res__$1 = res;
while(true){
var vec__20974 = G__20966__$1;
var seq__20975 = cljs.core.seq(vec__20974);
var first__20976 = cljs.core.first(seq__20975);
var seq__20975__$1 = cljs.core.next(seq__20975);
var x__$1 = first__20976;
var xs__$1 = seq__20975__$1;
var res__$2 = res__$1;
var el = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,res__$2,x__$1);
if((xs__$1 == null)){
return el;
} else {
var G__21200 = xs__$1;
var G__21201 = el;
G__20966__$1 = G__21200;
res__$1 = G__21201;
continue;
}
break;
}
});
my_2048.game.has_pair_QMARK_ = (function my_2048$game$has_pair_QMARK_(row){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,row,cljs.core.rest(row)));
});
my_2048.game.has_zero_QMARK_ = (function my_2048$game$has_zero_QMARK_(row){
return cljs.core.some(cljs.core.zero_QMARK_,row);
});
my_2048.game.can_merge_QMARK_ = (function my_2048$game$can_merge_QMARK_(p__21004){
var vec__21005 = p__21004;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21005,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21005,(1),null);
return (((((a > (0))) && ((a === b)))) || ((((a === (0))) && ((b > a)))));
});
my_2048.game.row_shiftable_QMARK_ = (function my_2048$game$row_shiftable_QMARK_(row){
return cljs.core.some(my_2048.game.can_merge_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,row,cljs.core.rest(row)));
});
my_2048.game.grid_movable_QMARK_ = (function my_2048$game$grid_movable_QMARK_(grid){
return cljs.core.some(my_2048.game.row_shiftable_QMARK_,grid);
});
my_2048.game.collapse_row = (function my_2048$game$collapse_row(row){
var res = cljs.core.PersistentVector.EMPTY;
var row__$1 = row;
while(true){
var vec__21026 = row__$1;
var seq__21027 = cljs.core.seq(vec__21026);
var first__21028 = cljs.core.first(seq__21027);
var seq__21027__$1 = cljs.core.next(seq__21027);
var x = first__21028;
var vec__21029 = seq__21027__$1;
var seq__21030 = cljs.core.seq(vec__21029);
var first__21031 = cljs.core.first(seq__21030);
var seq__21030__$1 = cljs.core.next(seq__21030);
var y = first__21031;
var xs = seq__21030__$1;
var ys = vec__21029;
if((y == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,row__$1);
} else {
if((x === y)){
var G__21215 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,((2) * x));
var G__21216 = xs;
res = G__21215;
row__$1 = G__21216;
continue;
} else {
var G__21217 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,x);
var G__21218 = ys;
res = G__21217;
row__$1 = G__21218;
continue;

}
}
break;
}
});
my_2048.game.del_zeroes = (function my_2048$game$del_zeroes(row){
return cljs.core.vec((function (){var iter__5523__auto__ = (function my_2048$game$del_zeroes_$_iter__21033(s__21034){
return (new cljs.core.LazySeq(null,(function (){
var s__21034__$1 = s__21034;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21034__$1);
if(temp__5804__auto__){
var s__21034__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21034__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21034__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21036 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21035 = (0);
while(true){
if((i__21035 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__21035);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(0))){
cljs.core.chunk_append(b__21036,c);

var G__21219 = (i__21035 + (1));
i__21035 = G__21219;
continue;
} else {
var G__21220 = (i__21035 + (1));
i__21035 = G__21220;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21036),my_2048$game$del_zeroes_$_iter__21033(cljs.core.chunk_rest(s__21034__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21036),null);
}
} else {
var c = cljs.core.first(s__21034__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(0))){
return cljs.core.cons(c,my_2048$game$del_zeroes_$_iter__21033(cljs.core.rest(s__21034__$2)));
} else {
var G__21221 = cljs.core.rest(s__21034__$2);
s__21034__$1 = G__21221;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(row);
})());
});
my_2048.game.add_zeroes = (function my_2048$game$add_zeroes(row){
var len = cljs.core.count(row);
var delta = ((4) - len);
var zeroes = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(delta,(0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,row,zeroes);
});
my_2048.game.get_2_or_4 = (function my_2048$game$get_2_or_4(){
var p = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
if((p >= 0.95)){
return (4);
} else {
return (2);
}
});
my_2048.game.get_rand_index = (function my_2048$game$get_rand_index(coll,fun){
var coll_map = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
var indexes = (function (){var iter__5523__auto__ = (function my_2048$game$get_rand_index_$_iter__21056(s__21057){
return (new cljs.core.LazySeq(null,(function (){
var s__21057__$1 = s__21057;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21057__$1);
if(temp__5804__auto__){
var s__21057__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21057__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21057__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21059 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21058 = (0);
while(true){
if((i__21058 < size__5522__auto__)){
var vec__21061 = cljs.core._nth(c__5521__auto__,i__21058);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21061,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21061,(1),null);
if(cljs.core.truth_((fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(item) : fun.call(null,item)))){
cljs.core.chunk_append(b__21059,i);

var G__21222 = (i__21058 + (1));
i__21058 = G__21222;
continue;
} else {
var G__21223 = (i__21058 + (1));
i__21058 = G__21223;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21059),my_2048$game$get_rand_index_$_iter__21056(cljs.core.chunk_rest(s__21057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21059),null);
}
} else {
var vec__21064 = cljs.core.first(s__21057__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21064,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21064,(1),null);
if(cljs.core.truth_((fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(item) : fun.call(null,item)))){
return cljs.core.cons(i,my_2048$game$get_rand_index_$_iter__21056(cljs.core.rest(s__21057__$2)));
} else {
var G__21224 = cljs.core.rest(s__21057__$2);
s__21057__$1 = G__21224;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll_map);
})();
if(cljs.core.truth_(cljs.core.some(cljs.core.number_QMARK_,indexes))){
return cljs.core.rand_nth(indexes);
} else {
return null;
}
});
my_2048.game.contains_zero_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.zero_QMARK_);
my_2048.game.get_empty_cell = (function my_2048$game$get_empty_cell(grid){
var row_index = my_2048.game.get_rand_index(grid,my_2048.game.contains_zero_QMARK_);
if(typeof row_index === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,my_2048.game.get_rand_index((grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(row_index) : grid.call(null,row_index)),cljs.core.zero_QMARK_)], null);
} else {
return null;
}
});
my_2048.game.update_coll = (function my_2048$game$update_coll(coll,index,new_item){
var coll_map = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
return cljs.core.vec((function (){var iter__5523__auto__ = (function my_2048$game$update_coll_$_iter__21111(s__21112){
return (new cljs.core.LazySeq(null,(function (){
var s__21112__$1 = s__21112;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21112__$1);
if(temp__5804__auto__){
var s__21112__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21112__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21112__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21114 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21113 = (0);
while(true){
if((i__21113 < size__5522__auto__)){
var vec__21125 = cljs.core._nth(c__5521__auto__,i__21113);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21125,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21125,(1),null);
cljs.core.chunk_append(b__21114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,index))?new_item:item));

var G__21231 = (i__21113 + (1));
i__21113 = G__21231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21114),my_2048$game$update_coll_$_iter__21111(cljs.core.chunk_rest(s__21112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21114),null);
}
} else {
var vec__21144 = cljs.core.first(s__21112__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21144,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21144,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,index))?new_item:item),my_2048$game$update_coll_$_iter__21111(cljs.core.rest(s__21112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(coll_map);
})());
});
my_2048.game.add_new_item = (function my_2048$game$add_new_item(grid,cell){
var vec__21148 = cell;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21148,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21148,(1),null);
var row = (grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(x) : grid.call(null,x));
var new_item = my_2048.game.get_2_or_4();
var new_row = my_2048.game.update_coll(row,y,new_item);
return my_2048.game.update_coll(grid,x,new_row);
});
my_2048.game.update_row = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(my_2048.game.add_zeroes,my_2048.game.collapse_row,my_2048.game.del_zeroes);
my_2048.game.divide_by_4 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.vec),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.partition,(4)));
my_2048.game.field_transform = (function my_2048$game$field_transform(direction,game_field){
var transition = (my_2048.game.field_transitions.cljs$core$IFn$_invoke$arity$1 ? my_2048.game.field_transitions.cljs$core$IFn$_invoke$arity$1(direction) : my_2048.game.field_transitions.call(null,direction));
var iter__5523__auto__ = (function my_2048$game$field_transform_$_iter__21152(s__21153){
return (new cljs.core.LazySeq(null,(function (){
var s__21153__$1 = s__21153;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21153__$1);
if(temp__5804__auto__){
var s__21153__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21153__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21153__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21155 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21154 = (0);
while(true){
if((i__21154 < size__5522__auto__)){
var cell_num = cljs.core._nth(c__5521__auto__,i__21154);
cljs.core.chunk_append(b__21155,cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_field,cell_num));

var G__21235 = (i__21154 + (1));
i__21154 = G__21235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21155),my_2048$game$field_transform_$_iter__21152(cljs.core.chunk_rest(s__21153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21155),null);
}
} else {
var cell_num = cljs.core.first(s__21153__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_field,cell_num),my_2048$game$field_transform_$_iter__21152(cljs.core.rest(s__21153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(transition);
});
my_2048.game.rotate_grid = (function my_2048$game$rotate_grid(direction,grid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937))){
return grid;
} else {
return cljs.core.vec(my_2048.game.divide_by_4(my_2048.game.field_transform(direction,my_2048.game.matrix_to_vector(grid))));
}
});
my_2048.game.update_grid = (function my_2048$game$update_grid(grid,direction){
var rotate = (function (p1__21167_SHARP_){
return my_2048.game.rotate_grid(direction,p1__21167_SHARP_);
});
var update_rows = (function (p1__21168_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(my_2048.game.update_row,p1__21168_SHARP_);
});
var shifted_grid = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937)))?update_rows(grid):rotate(update_rows(rotate(grid))));
var free_cell = my_2048.game.get_empty_cell(shifted_grid);
if(cljs.core.truth_(free_cell)){
return my_2048.game.add_new_item(shifted_grid,free_cell);
} else {
return shifted_grid;
}
});
my_2048.game.init_state = (function my_2048$game$init_state(){
var row = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
var state = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),row));
var rand_pair = (function (){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4))));
});
var vec__21177 = rand_pair();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21177,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21177,(1),null);
var vec__21180 = rand_pair();
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21180,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21180,(1),null);
return my_2048.game.add_new_item(my_2048.game.add_new_item(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null));
});
my_2048.game.get_score = (function my_2048$game$get_score(state){
var f = (function (p1__21187_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__21187_SHARP_);
});
return f(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,state));
});
my_2048.game.lose_QMARK_ = (function my_2048$game$lose_QMARK_(grid){
var movable_row_QMARK_ = (function (p1__21195_SHARP_){
var or__5045__auto__ = my_2048.game.has_zero_QMARK_(p1__21195_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return my_2048.game.has_pair_QMARK_(p1__21195_SHARP_);
}
});
var rotated_grid = my_2048.game.rotate_grid(new cljs.core.Keyword(null,"up","up",-269712113),grid);
var unmovable_grid_QMARK_ = (function (p1__21196_SHARP_){
return cljs.core.not_any_QMARK_(movable_row_QMARK_,p1__21196_SHARP_);
});
return ((unmovable_grid_QMARK_(grid)) && (unmovable_grid_QMARK_(rotated_grid)));
});
my_2048.game.win_QMARK_ = (function my_2048$game$win_QMARK_(grid){
var game_field = my_2048.game.matrix_to_vector(grid);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,(2048)),grid);
});

//# sourceMappingURL=my_2048.game.js.map
