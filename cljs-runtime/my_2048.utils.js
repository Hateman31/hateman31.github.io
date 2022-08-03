goog.provide('my_2048.utils');
my_2048.utils.arrow_direction = new cljs.core.PersistentArrayMap(null, 4, ["ArrowDown",new cljs.core.Keyword(null,"down","down",1565245570),"ArrowUp",new cljs.core.Keyword(null,"up","up",-269712113),"ArrowLeft",new cljs.core.Keyword(null,"left","left",-399115937),"ArrowRight",new cljs.core.Keyword(null,"right","right",-452581833)], null);
my_2048.utils.tile_color = cljs.core.PersistentHashMap.fromArrays([(0),(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#776e65","#edcf72","#ede0c8","#edcc61","#f67c5f","#edcc61","#edc53f","#f65e3b","#eee4da","#f59563","#edc22e","#f2b179"]);
my_2048.utils.font_color = new cljs.core.PersistentArrayMap(null, 2, [true,"#776e65",false,"#f9f6f2"], null);
my_2048.utils.draw_square = (function my_2048$utils$draw_square(point,ctx,tile_size){
var vec__20796 = point;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20796,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20796,(1),null);
return ctx.fillRect(m,n,tile_size,tile_size);
});
my_2048.utils.get_vertexes = (function my_2048$utils$get_vertexes(tile_side,grid_side_size,tile_gap){
var vertex_distance = (tile_side + tile_gap);
var vertex_xy = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__20801(s__20802){
return (new cljs.core.LazySeq(null,(function (){
var s__20802__$1 = s__20802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20802__$1);
if(temp__5804__auto__){
var s__20802__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20802__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20802__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20804 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20803 = (0);
while(true){
if((i__20803 < size__5522__auto__)){
var vertex_num = cljs.core._nth(c__5521__auto__,i__20803);
cljs.core.chunk_append(b__20804,(vertex_distance * vertex_num));

var G__20897 = (i__20803 + (1));
i__20803 = G__20897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20804),my_2048$utils$get_vertexes_$_iter__20801(cljs.core.chunk_rest(s__20802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20804),null);
}
} else {
var vertex_num = cljs.core.first(s__20802__$2);
return cljs.core.cons((vertex_distance * vertex_num),my_2048$utils$get_vertexes_$_iter__20801(cljs.core.rest(s__20802__$2)));
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
var position2vec = (function (p1__20799_SHARP_,p2__20800_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.vec(p1__20799_SHARP_),cljs.core.vec(p2__20800_SHARP_));
});
var vertexes = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__20805(s__20806){
return (new cljs.core.LazySeq(null,(function (){
var s__20806__$1 = s__20806;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20806__$1);
if(temp__5804__auto__){
var s__20806__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20806__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20806__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20808 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20807 = (0);
while(true){
if((i__20807 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__20807);
cljs.core.chunk_append(b__20808,(function (){var iter__5523__auto__ = ((function (i__20807,x,c__5521__auto__,size__5522__auto__,b__20808,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20805_$_iter__20814(s__20815){
return (new cljs.core.LazySeq(null,((function (i__20807,x,c__5521__auto__,size__5522__auto__,b__20808,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function (){
var s__20815__$1 = s__20815;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20815__$1);
if(temp__5804__auto____$1){
var s__20815__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20815__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__20815__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__20817 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__20816 = (0);
while(true){
if((i__20816 < size__5522__auto____$1)){
var y = cljs.core._nth(c__5521__auto____$1,i__20816);
cljs.core.chunk_append(b__20817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20899 = (i__20816 + (1));
i__20816 = G__20899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20817),my_2048$utils$get_vertexes_$_iter__20805_$_iter__20814(cljs.core.chunk_rest(s__20815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20817),null);
}
} else {
var y = cljs.core.first(s__20815__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20805_$_iter__20814(cljs.core.rest(s__20815__$2)));
}
} else {
return null;
}
break;
}
});})(i__20807,x,c__5521__auto__,size__5522__auto__,b__20808,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
,null,null));
});})(i__20807,x,c__5521__auto__,size__5522__auto__,b__20808,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})());

var G__20900 = (i__20807 + (1));
i__20807 = G__20900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20808),my_2048$utils$get_vertexes_$_iter__20805(cljs.core.chunk_rest(s__20806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20808),null);
}
} else {
var x = cljs.core.first(s__20806__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20805_$_iter__20821(s__20822){
return (new cljs.core.LazySeq(null,(function (){
var s__20822__$1 = s__20822;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20822__$1);
if(temp__5804__auto____$1){
var s__20822__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20822__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20822__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20824 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20823 = (0);
while(true){
if((i__20823 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__20823);
cljs.core.chunk_append(b__20824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20901 = (i__20823 + (1));
i__20823 = G__20901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20824),my_2048$utils$get_vertexes_$_iter__20805_$_iter__20821(cljs.core.chunk_rest(s__20822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20824),null);
}
} else {
var y = cljs.core.first(s__20822__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20805_$_iter__20821(cljs.core.rest(s__20822__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__20806__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})(),my_2048$utils$get_vertexes_$_iter__20805(cljs.core.rest(s__20806__$2)));
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
var seq__20831_20909 = cljs.core.seq(game_field);
var chunk__20832_20910 = null;
var count__20833_20911 = (0);
var i__20834_20912 = (0);
while(true){
if((i__20834_20912 < count__20833_20911)){
var vec__20842_20913 = chunk__20832_20910.cljs$core$IIndexed$_nth$arity$2(null,i__20834_20912);
var point_20914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842_20913,(0),null);
var cell_value_20915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842_20913,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_20915) : my_2048.utils.tile_color.call(null,cell_value_20915)));

my_2048.utils.draw_square(point_20914,ctx,tile_size);


var G__20917 = seq__20831_20909;
var G__20918 = chunk__20832_20910;
var G__20919 = count__20833_20911;
var G__20920 = (i__20834_20912 + (1));
seq__20831_20909 = G__20917;
chunk__20832_20910 = G__20918;
count__20833_20911 = G__20919;
i__20834_20912 = G__20920;
continue;
} else {
var temp__5804__auto___20921 = cljs.core.seq(seq__20831_20909);
if(temp__5804__auto___20921){
var seq__20831_20922__$1 = temp__5804__auto___20921;
if(cljs.core.chunked_seq_QMARK_(seq__20831_20922__$1)){
var c__5568__auto___20923 = cljs.core.chunk_first(seq__20831_20922__$1);
var G__20924 = cljs.core.chunk_rest(seq__20831_20922__$1);
var G__20925 = c__5568__auto___20923;
var G__20926 = cljs.core.count(c__5568__auto___20923);
var G__20927 = (0);
seq__20831_20909 = G__20924;
chunk__20832_20910 = G__20925;
count__20833_20911 = G__20926;
i__20834_20912 = G__20927;
continue;
} else {
var vec__20847_20928 = cljs.core.first(seq__20831_20922__$1);
var point_20929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847_20928,(0),null);
var cell_value_20930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847_20928,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_20930) : my_2048.utils.tile_color.call(null,cell_value_20930)));

my_2048.utils.draw_square(point_20929,ctx,tile_size);


var G__20931 = cljs.core.next(seq__20831_20922__$1);
var G__20932 = null;
var G__20933 = (0);
var G__20934 = (0);
seq__20831_20909 = G__20931;
chunk__20832_20910 = G__20932;
count__20833_20911 = G__20933;
i__20834_20912 = G__20934;
continue;
}
} else {
}
}
break;
}

var seq__20850 = cljs.core.seq(game_field);
var chunk__20851 = null;
var count__20852 = (0);
var i__20853 = (0);
while(true){
if((i__20853 < count__20852)){
var vec__20868 = chunk__20851.cljs$core$IIndexed$_nth$arity$2(null,i__20853);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(1),null);
if((cell_value > (0))){
var text_20943 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20871_20944 = point;
var x_20945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871_20944,(0),null);
var y_20946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20871_20944,(1),null);
var font_size_20948 = my_2048.utils.get_font_size(cell_value);
var font_20949 = [font_size_20948,"px serif"].join('');
var delta_x_20950 = my_2048.utils.get_delta_x(cell_value);
var delta_y_20951 = (55);
my_2048.utils.set_color(ctx,(function (){var G__20875 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__20875) : my_2048.utils.font_color.call(null,G__20875));
})());

my_2048.utils.set_font(ctx,font_20949);

ctx.fillText(text_20943,(x_20945 + delta_x_20950),(y_20946 + delta_y_20951));
} else {
}


var G__20972 = seq__20850;
var G__20973 = chunk__20851;
var G__20974 = count__20852;
var G__20975 = (i__20853 + (1));
seq__20850 = G__20972;
chunk__20851 = G__20973;
count__20852 = G__20974;
i__20853 = G__20975;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20850);
if(temp__5804__auto__){
var seq__20850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20850__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20850__$1);
var G__20976 = cljs.core.chunk_rest(seq__20850__$1);
var G__20977 = c__5568__auto__;
var G__20978 = cljs.core.count(c__5568__auto__);
var G__20979 = (0);
seq__20850 = G__20976;
chunk__20851 = G__20977;
count__20852 = G__20978;
i__20853 = G__20979;
continue;
} else {
var vec__20879 = cljs.core.first(seq__20850__$1);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20879,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20879,(1),null);
if((cell_value > (0))){
var text_20980 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20882_20981 = point;
var x_20982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20882_20981,(0),null);
var y_20983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20882_20981,(1),null);
var font_size_20984 = my_2048.utils.get_font_size(cell_value);
var font_20985 = [font_size_20984,"px serif"].join('');
var delta_x_20986 = my_2048.utils.get_delta_x(cell_value);
var delta_y_20987 = (55);
my_2048.utils.set_color(ctx,(function (){var G__20885 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__20885) : my_2048.utils.font_color.call(null,G__20885));
})());

my_2048.utils.set_font(ctx,font_20985);

ctx.fillText(text_20980,(x_20982 + delta_x_20986),(y_20983 + delta_y_20987));
} else {
}


var G__20988 = cljs.core.next(seq__20850__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20850 = G__20988;
chunk__20851 = G__20989;
count__20852 = G__20990;
i__20853 = G__20991;
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
