goog.provide('my_2048.game');
my_2048.game.field_transitions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(12),(1),(5),(9),(13),(2),(6),(10),(14),(3),(7),(11),(15)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(11),(7),(3),(14),(10),(6),(2),(13),(9),(5),(1),(12),(8),(4),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(0),(7),(6),(5),(4),(11),(10),(9),(8),(15),(14),(13),(12)], null)], null);
my_2048.game.matrix_to_vector = (function my_2048$game$matrix_to_vector(matrix){
var G__21007 = matrix;
var vec__21008 = G__21007;
var seq__21009 = cljs.core.seq(vec__21008);
var first__21010 = cljs.core.first(seq__21009);
var seq__21009__$1 = cljs.core.next(seq__21009);
var x = first__21010;
var xs = seq__21009__$1;
var res = cljs.core.PersistentVector.EMPTY;
var G__21007__$1 = G__21007;
var res__$1 = res;
while(true){
var vec__21021 = G__21007__$1;
var seq__21022 = cljs.core.seq(vec__21021);
var first__21023 = cljs.core.first(seq__21022);
var seq__21022__$1 = cljs.core.next(seq__21022);
var x__$1 = first__21023;
var xs__$1 = seq__21022__$1;
var res__$2 = res__$1;
var el = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,res__$2,x__$1);
if((xs__$1 == null)){
return el;
} else {
var G__21106 = xs__$1;
var G__21107 = el;
G__21007__$1 = G__21106;
res__$1 = G__21107;
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
my_2048.game.can_merge_QMARK_ = (function my_2048$game$can_merge_QMARK_(p__21024){
var vec__21025 = p__21024;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(1),null);
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
var vec__21035 = row__$1;
var seq__21036 = cljs.core.seq(vec__21035);
var first__21037 = cljs.core.first(seq__21036);
var seq__21036__$1 = cljs.core.next(seq__21036);
var x = first__21037;
var vec__21038 = seq__21036__$1;
var seq__21039 = cljs.core.seq(vec__21038);
var first__21040 = cljs.core.first(seq__21039);
var seq__21039__$1 = cljs.core.next(seq__21039);
var y = first__21040;
var xs = seq__21039__$1;
var ys = vec__21038;
if((y == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(res,row__$1);
} else {
if((x === y)){
var G__21115 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,((2) * x));
var G__21116 = xs;
res = G__21115;
row__$1 = G__21116;
continue;
} else {
var G__21117 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,x);
var G__21118 = ys;
res = G__21117;
row__$1 = G__21118;
continue;

}
}
break;
}
});
my_2048.game.del_zeroes = (function my_2048$game$del_zeroes(row){
return cljs.core.vec((function (){var iter__5523__auto__ = (function my_2048$game$del_zeroes_$_iter__21042(s__21043){
return (new cljs.core.LazySeq(null,(function (){
var s__21043__$1 = s__21043;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21043__$1);
if(temp__5804__auto__){
var s__21043__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21043__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21043__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21045 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21044 = (0);
while(true){
if((i__21044 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__21044);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(0))){
cljs.core.chunk_append(b__21045,c);

var G__21119 = (i__21044 + (1));
i__21044 = G__21119;
continue;
} else {
var G__21120 = (i__21044 + (1));
i__21044 = G__21120;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21045),my_2048$game$del_zeroes_$_iter__21042(cljs.core.chunk_rest(s__21043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21045),null);
}
} else {
var c = cljs.core.first(s__21043__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,(0))){
return cljs.core.cons(c,my_2048$game$del_zeroes_$_iter__21042(cljs.core.rest(s__21043__$2)));
} else {
var G__21121 = cljs.core.rest(s__21043__$2);
s__21043__$1 = G__21121;
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
var indexes = (function (){var iter__5523__auto__ = (function my_2048$game$get_rand_index_$_iter__21047(s__21048){
return (new cljs.core.LazySeq(null,(function (){
var s__21048__$1 = s__21048;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21048__$1);
if(temp__5804__auto__){
var s__21048__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21048__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21048__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21050 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21049 = (0);
while(true){
if((i__21049 < size__5522__auto__)){
var vec__21051 = cljs.core._nth(c__5521__auto__,i__21049);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(1),null);
if(cljs.core.truth_((fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(item) : fun.call(null,item)))){
cljs.core.chunk_append(b__21050,i);

var G__21124 = (i__21049 + (1));
i__21049 = G__21124;
continue;
} else {
var G__21125 = (i__21049 + (1));
i__21049 = G__21125;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21050),my_2048$game$get_rand_index_$_iter__21047(cljs.core.chunk_rest(s__21048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21050),null);
}
} else {
var vec__21054 = cljs.core.first(s__21048__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21054,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21054,(1),null);
if(cljs.core.truth_((fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(item) : fun.call(null,item)))){
return cljs.core.cons(i,my_2048$game$get_rand_index_$_iter__21047(cljs.core.rest(s__21048__$2)));
} else {
var G__21126 = cljs.core.rest(s__21048__$2);
s__21048__$1 = G__21126;
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
return cljs.core.vec((function (){var iter__5523__auto__ = (function my_2048$game$update_coll_$_iter__21064(s__21065){
return (new cljs.core.LazySeq(null,(function (){
var s__21065__$1 = s__21065;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21065__$1);
if(temp__5804__auto__){
var s__21065__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21065__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21065__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21067 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21066 = (0);
while(true){
if((i__21066 < size__5522__auto__)){
var vec__21068 = cljs.core._nth(c__5521__auto__,i__21066);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(1),null);
cljs.core.chunk_append(b__21067,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,index))?new_item:item));

var G__21128 = (i__21066 + (1));
i__21066 = G__21128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21067),my_2048$game$update_coll_$_iter__21064(cljs.core.chunk_rest(s__21065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21067),null);
}
} else {
var vec__21071 = cljs.core.first(s__21065__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,index))?new_item:item),my_2048$game$update_coll_$_iter__21064(cljs.core.rest(s__21065__$2)));
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
var vec__21075 = cell;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21075,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21075,(1),null);
var row = (grid.cljs$core$IFn$_invoke$arity$1 ? grid.cljs$core$IFn$_invoke$arity$1(x) : grid.call(null,x));
var new_item = my_2048.game.get_2_or_4();
var new_row = my_2048.game.update_coll(row,y,new_item);
return my_2048.game.update_coll(grid,x,new_row);
});
my_2048.game.update_row = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(my_2048.game.add_zeroes,my_2048.game.collapse_row,my_2048.game.del_zeroes);
my_2048.game.divide_by_4 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.vec),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.partition,(4)));
my_2048.game.field_transform = (function my_2048$game$field_transform(direction,game_field){
var transition = (my_2048.game.field_transitions.cljs$core$IFn$_invoke$arity$1 ? my_2048.game.field_transitions.cljs$core$IFn$_invoke$arity$1(direction) : my_2048.game.field_transitions.call(null,direction));
var iter__5523__auto__ = (function my_2048$game$field_transform_$_iter__21079(s__21080){
return (new cljs.core.LazySeq(null,(function (){
var s__21080__$1 = s__21080;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21080__$1);
if(temp__5804__auto__){
var s__21080__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21080__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21080__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21082 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21081 = (0);
while(true){
if((i__21081 < size__5522__auto__)){
var cell_num = cljs.core._nth(c__5521__auto__,i__21081);
cljs.core.chunk_append(b__21082,cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_field,cell_num));

var G__21129 = (i__21081 + (1));
i__21081 = G__21129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21082),my_2048$game$field_transform_$_iter__21079(cljs.core.chunk_rest(s__21080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21082),null);
}
} else {
var cell_num = cljs.core.first(s__21080__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(game_field,cell_num),my_2048$game$field_transform_$_iter__21079(cljs.core.rest(s__21080__$2)));
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
var rotate = (function (p1__21083_SHARP_){
return my_2048.game.rotate_grid(direction,p1__21083_SHARP_);
});
var update_rows = (function (p1__21084_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(my_2048.game.update_row,p1__21084_SHARP_);
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
var vec__21086 = rand_pair();
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(1),null);
var vec__21089 = rand_pair();
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21089,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21089,(1),null);
return my_2048.game.add_new_item(my_2048.game.add_new_item(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null));
});
my_2048.game.get_score = (function my_2048$game$get_score(state){
var f = (function (p1__21092_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__21092_SHARP_);
});
return f(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,state));
});
my_2048.game.lose_QMARK_ = (function my_2048$game$lose_QMARK_(grid){
var movable_row_QMARK_ = (function (p1__21094_SHARP_){
var or__5045__auto__ = my_2048.game.has_zero_QMARK_(p1__21094_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return my_2048.game.has_pair_QMARK_(p1__21094_SHARP_);
}
});
var rotated_grid = my_2048.game.rotate_grid(new cljs.core.Keyword(null,"up","up",-269712113),grid);
var unmovable_grid_QMARK_ = (function (p1__21095_SHARP_){
return cljs.core.not_any_QMARK_(movable_row_QMARK_,p1__21095_SHARP_);
});
return ((unmovable_grid_QMARK_(grid)) && (unmovable_grid_QMARK_(rotated_grid)));
});
my_2048.game.win_QMARK_ = (function my_2048$game$win_QMARK_(grid){
var game_field = my_2048.game.matrix_to_vector(grid);
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,(2048)),grid);
});

//# sourceMappingURL=my_2048.game.js.map
