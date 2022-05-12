// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_2048.game');
goog.require('cljs.core');
my_2048.game.field_transitions = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(12),(1),(5),(9),(13),(2),(6),(10),(14),(3),(7),(11),(15)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(11),(7),(3),(14),(10),(6),(2),(13),(9),(5),(1),(12),(8),(4),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(0),(7),(6),(5),(4),(11),(10),(9),(8),(15),(14),(13),(12)], null)], null);
my_2048.game.matrix_to_vector = (function my_2048$game$matrix_to_vector(matrix){
var G__20835 = matrix;
var vec__20836 = G__20835;
var seq__20837 = cljs.core.seq.call(null,vec__20836);
var first__20838 = cljs.core.first.call(null,seq__20837);
var seq__20837__$1 = cljs.core.next.call(null,seq__20837);
var x = first__20838;
var xs = seq__20837__$1;
var res = cljs.core.PersistentVector.EMPTY;
var G__20835__$1 = G__20835;
var res__$1 = res;
while(true){
var vec__20842 = G__20835__$1;
var seq__20843 = cljs.core.seq.call(null,vec__20842);
var first__20844 = cljs.core.first.call(null,seq__20843);
var seq__20843__$1 = cljs.core.next.call(null,seq__20843);
var x__$1 = first__20844;
var xs__$1 = seq__20843__$1;
var res__$2 = res__$1;
var el = cljs.core.reduce.call(null,cljs.core.conj,res__$2,x__$1);
if((xs__$1 == null)){
return el;
} else {
var G__20845 = xs__$1;
var G__20846 = el;
G__20835__$1 = G__20845;
res__$1 = G__20846;
continue;
}
break;
}
});
my_2048.game.has_pair_QMARK_ = (function my_2048$game$has_pair_QMARK_(row){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,row,cljs.core.rest.call(null,row)));
});
my_2048.game.has_zero_QMARK_ = (function my_2048$game$has_zero_QMARK_(row){
return cljs.core.some.call(null,cljs.core.zero_QMARK_,row);
});
my_2048.game.can_merge_QMARK_ = (function my_2048$game$can_merge_QMARK_(p__20847){
var vec__20848 = p__20847;
var a = cljs.core.nth.call(null,vec__20848,(0),null);
var b = cljs.core.nth.call(null,vec__20848,(1),null);
return (((((a > (0))) && ((a === b)))) || ((((a === (0))) && ((b > a)))));
});
my_2048.game.row_shiftable_QMARK_ = (function my_2048$game$row_shiftable_QMARK_(row){
return cljs.core.some.call(null,my_2048.game.can_merge_QMARK_,cljs.core.map.call(null,cljs.core.list,row,cljs.core.rest.call(null,row)));
});
my_2048.game.grid_movable_QMARK_ = (function my_2048$game$grid_movable_QMARK_(grid){
return cljs.core.some.call(null,my_2048.game.row_shiftable_QMARK_,grid);
});
my_2048.game.collapse_row = (function my_2048$game$collapse_row(row){
var res = cljs.core.PersistentVector.EMPTY;
var row__$1 = row;
while(true){
var vec__20857 = row__$1;
var seq__20858 = cljs.core.seq.call(null,vec__20857);
var first__20859 = cljs.core.first.call(null,seq__20858);
var seq__20858__$1 = cljs.core.next.call(null,seq__20858);
var x = first__20859;
var vec__20860 = seq__20858__$1;
var seq__20861 = cljs.core.seq.call(null,vec__20860);
var first__20862 = cljs.core.first.call(null,seq__20861);
var seq__20861__$1 = cljs.core.next.call(null,seq__20861);
var y = first__20862;
var xs = seq__20861__$1;
var ys = vec__20860;
if((y == null)){
return cljs.core.into.call(null,res,row__$1);
} else {
if((x === y)){
var G__20863 = cljs.core.conj.call(null,res,((2) * x));
var G__20864 = xs;
res = G__20863;
row__$1 = G__20864;
continue;
} else {
var G__20865 = cljs.core.conj.call(null,res,x);
var G__20866 = ys;
res = G__20865;
row__$1 = G__20866;
continue;

}
}
break;
}
});
my_2048.game.del_zeroes = (function my_2048$game$del_zeroes(row){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function my_2048$game$del_zeroes_$_iter__20867(s__20868){
return (new cljs.core.LazySeq(null,(function (){
var s__20868__$1 = s__20868;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20868__$1);
if(temp__5720__auto__){
var s__20868__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20868__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20868__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20870 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20869 = (0);
while(true){
if((i__20869 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__20869);
if(cljs.core.not_EQ_.call(null,c,(0))){
cljs.core.chunk_append.call(null,b__20870,c);

var G__20871 = (i__20869 + (1));
i__20869 = G__20871;
continue;
} else {
var G__20872 = (i__20869 + (1));
i__20869 = G__20872;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20870),my_2048$game$del_zeroes_$_iter__20867.call(null,cljs.core.chunk_rest.call(null,s__20868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20870),null);
}
} else {
var c = cljs.core.first.call(null,s__20868__$2);
if(cljs.core.not_EQ_.call(null,c,(0))){
return cljs.core.cons.call(null,c,my_2048$game$del_zeroes_$_iter__20867.call(null,cljs.core.rest.call(null,s__20868__$2)));
} else {
var G__20873 = cljs.core.rest.call(null,s__20868__$2);
s__20868__$1 = G__20873;
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
return iter__4523__auto__.call(null,row);
})());
});
my_2048.game.add_zeroes = (function my_2048$game$add_zeroes(row){
var len = cljs.core.count.call(null,row);
var delta = ((4) - len);
var zeroes = cljs.core.repeat.call(null,delta,(0));
return cljs.core.reduce.call(null,cljs.core.conj,row,zeroes);
});
my_2048.game.get_2_or_4 = (function my_2048$game$get_2_or_4(){
var p = cljs.core.rand.call(null);
if((p >= 0.95)){
return (4);
} else {
return (2);
}
});
my_2048.game.get_rand_index = (function my_2048$game$get_rand_index(coll,fun){
var coll_map = cljs.core.map_indexed.call(null,cljs.core.vector,coll);
var indexes = (function (){var iter__4523__auto__ = ((function (coll_map){
return (function my_2048$game$get_rand_index_$_iter__20874(s__20875){
return (new cljs.core.LazySeq(null,((function (coll_map){
return (function (){
var s__20875__$1 = s__20875;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20875__$1);
if(temp__5720__auto__){
var s__20875__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20875__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20875__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20877 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20876 = (0);
while(true){
if((i__20876 < size__4522__auto__)){
var vec__20878 = cljs.core._nth.call(null,c__4521__auto__,i__20876);
var i = cljs.core.nth.call(null,vec__20878,(0),null);
var item = cljs.core.nth.call(null,vec__20878,(1),null);
if(cljs.core.truth_(fun.call(null,item))){
cljs.core.chunk_append.call(null,b__20877,i);

var G__20884 = (i__20876 + (1));
i__20876 = G__20884;
continue;
} else {
var G__20885 = (i__20876 + (1));
i__20876 = G__20885;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20877),my_2048$game$get_rand_index_$_iter__20874.call(null,cljs.core.chunk_rest.call(null,s__20875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20877),null);
}
} else {
var vec__20881 = cljs.core.first.call(null,s__20875__$2);
var i = cljs.core.nth.call(null,vec__20881,(0),null);
var item = cljs.core.nth.call(null,vec__20881,(1),null);
if(cljs.core.truth_(fun.call(null,item))){
return cljs.core.cons.call(null,i,my_2048$game$get_rand_index_$_iter__20874.call(null,cljs.core.rest.call(null,s__20875__$2)));
} else {
var G__20886 = cljs.core.rest.call(null,s__20875__$2);
s__20875__$1 = G__20886;
continue;
}
}
} else {
return null;
}
break;
}
});})(coll_map))
,null,null));
});})(coll_map))
;
return iter__4523__auto__.call(null,coll_map);
})();
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.number_QMARK_,indexes))){
return cljs.core.rand_nth.call(null,indexes);
} else {
return null;
}
});
my_2048.game.contains_zero_QMARK_ = cljs.core.partial.call(null,cljs.core.some,cljs.core.zero_QMARK_);
my_2048.game.get_empty_cell = (function my_2048$game$get_empty_cell(grid){
var row_index = my_2048.game.get_rand_index.call(null,grid,my_2048.game.contains_zero_QMARK_);
if(typeof row_index === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,my_2048.game.get_rand_index.call(null,grid.call(null,row_index),cljs.core.zero_QMARK_)], null);
} else {
return null;
}
});
my_2048.game.update_coll = (function my_2048$game$update_coll(coll,index,new_item){
var coll_map = cljs.core.map_indexed.call(null,cljs.core.vector,coll);
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (coll_map){
return (function my_2048$game$update_coll_$_iter__20887(s__20888){
return (new cljs.core.LazySeq(null,((function (coll_map){
return (function (){
var s__20888__$1 = s__20888;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20888__$1);
if(temp__5720__auto__){
var s__20888__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20888__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20888__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20890 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20889 = (0);
while(true){
if((i__20889 < size__4522__auto__)){
var vec__20891 = cljs.core._nth.call(null,c__4521__auto__,i__20889);
var n = cljs.core.nth.call(null,vec__20891,(0),null);
var item = cljs.core.nth.call(null,vec__20891,(1),null);
cljs.core.chunk_append.call(null,b__20890,((cljs.core._EQ_.call(null,n,index))?new_item:item));

var G__20897 = (i__20889 + (1));
i__20889 = G__20897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20890),my_2048$game$update_coll_$_iter__20887.call(null,cljs.core.chunk_rest.call(null,s__20888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20890),null);
}
} else {
var vec__20894 = cljs.core.first.call(null,s__20888__$2);
var n = cljs.core.nth.call(null,vec__20894,(0),null);
var item = cljs.core.nth.call(null,vec__20894,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,n,index))?new_item:item),my_2048$game$update_coll_$_iter__20887.call(null,cljs.core.rest.call(null,s__20888__$2)));
}
} else {
return null;
}
break;
}
});})(coll_map))
,null,null));
});})(coll_map))
;
return iter__4523__auto__.call(null,coll_map);
})());
});
my_2048.game.add_new_item = (function my_2048$game$add_new_item(grid,cell){
var vec__20898 = cell;
var x = cljs.core.nth.call(null,vec__20898,(0),null);
var y = cljs.core.nth.call(null,vec__20898,(1),null);
var row = grid.call(null,x);
var new_item = my_2048.game.get_2_or_4.call(null);
var new_row = my_2048.game.update_coll.call(null,row,y,new_item);
return my_2048.game.update_coll.call(null,grid,x,new_row);
});
my_2048.game.update_row = cljs.core.comp.call(null,my_2048.game.add_zeroes,my_2048.game.collapse_row,my_2048.game.del_zeroes);
my_2048.game.divide_by_4 = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.vec),cljs.core.partial.call(null,cljs.core.partition,(4)));
my_2048.game.field_transform = (function my_2048$game$field_transform(direction,game_field){
var transition = my_2048.game.field_transitions.call(null,direction);
var iter__4523__auto__ = ((function (transition){
return (function my_2048$game$field_transform_$_iter__20901(s__20902){
return (new cljs.core.LazySeq(null,((function (transition){
return (function (){
var s__20902__$1 = s__20902;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20902__$1);
if(temp__5720__auto__){
var s__20902__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20902__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20902__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20904 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20903 = (0);
while(true){
if((i__20903 < size__4522__auto__)){
var cell_num = cljs.core._nth.call(null,c__4521__auto__,i__20903);
cljs.core.chunk_append.call(null,b__20904,cljs.core.get.call(null,game_field,cell_num));

var G__20905 = (i__20903 + (1));
i__20903 = G__20905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20904),my_2048$game$field_transform_$_iter__20901.call(null,cljs.core.chunk_rest.call(null,s__20902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20904),null);
}
} else {
var cell_num = cljs.core.first.call(null,s__20902__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,game_field,cell_num),my_2048$game$field_transform_$_iter__20901.call(null,cljs.core.rest.call(null,s__20902__$2)));
}
} else {
return null;
}
break;
}
});})(transition))
,null,null));
});})(transition))
;
return iter__4523__auto__.call(null,transition);
});
my_2048.game.rotate_grid = (function my_2048$game$rotate_grid(direction,grid){
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937))){
return grid;
} else {
return cljs.core.vec.call(null,my_2048.game.divide_by_4.call(null,my_2048.game.field_transform.call(null,direction,my_2048.game.matrix_to_vector.call(null,grid))));
}
});
my_2048.game.update_grid = (function my_2048$game$update_grid(grid,direction){
var rotate = (function (p1__20906_SHARP_){
return my_2048.game.rotate_grid.call(null,direction,p1__20906_SHARP_);
});
var update_rows = ((function (rotate){
return (function (p1__20907_SHARP_){
return cljs.core.mapv.call(null,my_2048.game.update_row,p1__20907_SHARP_);
});})(rotate))
;
var shifted_grid = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937)))?update_rows.call(null,grid):rotate.call(null,update_rows.call(null,rotate.call(null,grid))));
var free_cell = my_2048.game.get_empty_cell.call(null,shifted_grid);
if(cljs.core.truth_(free_cell)){
return my_2048.game.add_new_item.call(null,shifted_grid,free_cell);
} else {
return shifted_grid;
}
});
my_2048.game.init_state = (function my_2048$game$init_state(){
var row = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
var state = cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),row));
var rand_pair = ((function (row,state){
return (function (){
return cljs.core.take.call(null,(2),cljs.core.shuffle.call(null,cljs.core.range.call(null,(4))));
});})(row,state))
;
var vec__20908 = rand_pair.call(null);
var x1 = cljs.core.nth.call(null,vec__20908,(0),null);
var x2 = cljs.core.nth.call(null,vec__20908,(1),null);
var vec__20911 = rand_pair.call(null);
var y1 = cljs.core.nth.call(null,vec__20911,(0),null);
var y2 = cljs.core.nth.call(null,vec__20911,(1),null);
return my_2048.game.add_new_item.call(null,my_2048.game.add_new_item.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null));
});
my_2048.game.lose_QMARK_ = (function my_2048$game$lose_QMARK_(grid){
var movable_row_QMARK_ = (function (p1__20914_SHARP_){
var or__4131__auto__ = my_2048.game.has_zero_QMARK_.call(null,p1__20914_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return my_2048.game.has_pair_QMARK_.call(null,p1__20914_SHARP_);
}
});
var rotated_grid = my_2048.game.rotate_grid.call(null,new cljs.core.Keyword(null,"up","up",-269712113),grid);
var unmovable_grid_QMARK_ = ((function (movable_row_QMARK_,rotated_grid){
return (function (p1__20915_SHARP_){
return cljs.core.not_any_QMARK_.call(null,movable_row_QMARK_,p1__20915_SHARP_);
});})(movable_row_QMARK_,rotated_grid))
;
return ((unmovable_grid_QMARK_.call(null,grid)) && (unmovable_grid_QMARK_.call(null,rotated_grid)));
});
my_2048.game.win_QMARK_ = (function my_2048$game$win_QMARK_(grid){
var game_field = my_2048.game.matrix_to_vector.call(null,grid);
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,(2048)),grid);
});

//# sourceMappingURL=game.js.map?rel=1652342997368
