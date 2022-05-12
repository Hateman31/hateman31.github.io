// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_2048.utils');
goog.require('cljs.core');
my_2048.utils.arrow_direction = new cljs.core.PersistentArrayMap(null, 4, ["ArrowDown",new cljs.core.Keyword(null,"down","down",1565245570),"ArrowUp",new cljs.core.Keyword(null,"up","up",-269712113),"ArrowLeft",new cljs.core.Keyword(null,"left","left",-399115937),"ArrowRight",new cljs.core.Keyword(null,"right","right",-452581833)], null);
my_2048.utils.tile_color = cljs.core.PersistentHashMap.fromArrays([(0),(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#776e65","#edcf72","#ede0c8","#edcc61","#f67c5f","#edcc61","#edc53f","#f65e3b","#eee4da","#f59563","#edc22e","#f2b179"]);
my_2048.utils.font_color = new cljs.core.PersistentArrayMap(null, 2, [true,"#776e65",false,"#f9f6f2"], null);
my_2048.utils.draw_square = (function my_2048$utils$draw_square(point,ctx,tile_size){
var vec__20832 = point;
var m = cljs.core.nth.call(null,vec__20832,(0),null);
var n = cljs.core.nth.call(null,vec__20832,(1),null);
return ctx.fillRect(m,n,tile_size,tile_size);
});
my_2048.utils.get_vertexes = (function my_2048$utils$get_vertexes(tile_side,grid_side_size,tile_gap){
var vertex_distance = (tile_side + tile_gap);
var vertex_xy = (function (){var iter__4523__auto__ = ((function (vertex_distance){
return (function my_2048$utils$get_vertexes_$_iter__20837(s__20838){
return (new cljs.core.LazySeq(null,((function (vertex_distance){
return (function (){
var s__20838__$1 = s__20838;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20838__$1);
if(temp__5720__auto__){
var s__20838__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20838__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20838__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20840 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20839 = (0);
while(true){
if((i__20839 < size__4522__auto__)){
var vertex_num = cljs.core._nth.call(null,c__4521__auto__,i__20839);
cljs.core.chunk_append.call(null,b__20840,(vertex_distance * vertex_num));

var G__20853 = (i__20839 + (1));
i__20839 = G__20853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20840),my_2048$utils$get_vertexes_$_iter__20837.call(null,cljs.core.chunk_rest.call(null,s__20838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20840),null);
}
} else {
var vertex_num = cljs.core.first.call(null,s__20838__$2);
return cljs.core.cons.call(null,(vertex_distance * vertex_num),my_2048$utils$get_vertexes_$_iter__20837.call(null,cljs.core.rest.call(null,s__20838__$2)));
}
} else {
return null;
}
break;
}
});})(vertex_distance))
,null,null));
});})(vertex_distance))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,grid_side_size));
})();
var position2vec = ((function (vertex_distance,vertex_xy){
return (function (p1__20835_SHARP_,p2__20836_SHARP_){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.vec.call(null,p1__20835_SHARP_),cljs.core.vec.call(null,p2__20836_SHARP_));
});})(vertex_distance,vertex_xy))
;
var vertexes = (function (){var iter__4523__auto__ = ((function (vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20841(s__20842){
return (new cljs.core.LazySeq(null,((function (vertex_distance,vertex_xy,position2vec){
return (function (){
var s__20842__$1 = s__20842;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__20842__$1);
if(temp__5720__auto__){
var s__20842__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20842__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20842__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20844 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20843 = (0);
while(true){
if((i__20843 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__20843);
cljs.core.chunk_append.call(null,b__20844,(function (){var iter__4523__auto__ = ((function (i__20843,x,c__4521__auto__,size__4522__auto__,b__20844,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20841_$_iter__20845(s__20846){
return (new cljs.core.LazySeq(null,((function (i__20843,x,c__4521__auto__,size__4522__auto__,b__20844,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec){
return (function (){
var s__20846__$1 = s__20846;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__20846__$1);
if(temp__5720__auto____$1){
var s__20846__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20846__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__20846__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__20848 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__20847 = (0);
while(true){
if((i__20847 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__20847);
cljs.core.chunk_append.call(null,b__20848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20854 = (i__20847 + (1));
i__20847 = G__20854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),my_2048$utils$get_vertexes_$_iter__20841_$_iter__20845.call(null,cljs.core.chunk_rest.call(null,s__20846__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),null);
}
} else {
var y = cljs.core.first.call(null,s__20846__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20841_$_iter__20845.call(null,cljs.core.rest.call(null,s__20846__$2)));
}
} else {
return null;
}
break;
}
});})(i__20843,x,c__4521__auto__,size__4522__auto__,b__20844,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec))
,null,null));
});})(i__20843,x,c__4521__auto__,size__4522__auto__,b__20844,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__4523__auto__.call(null,vertex_xy);
})());

var G__20855 = (i__20843 + (1));
i__20843 = G__20855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20844),my_2048$utils$get_vertexes_$_iter__20841.call(null,cljs.core.chunk_rest.call(null,s__20842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20844),null);
}
} else {
var x = cljs.core.first.call(null,s__20842__$2);
return cljs.core.cons.call(null,(function (){var iter__4523__auto__ = ((function (x,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20841_$_iter__20849(s__20850){
return (new cljs.core.LazySeq(null,((function (x,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec){
return (function (){
var s__20850__$1 = s__20850;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__20850__$1);
if(temp__5720__auto____$1){
var s__20850__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20850__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20850__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20852 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20851 = (0);
while(true){
if((i__20851 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__20851);
cljs.core.chunk_append.call(null,b__20852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20856 = (i__20851 + (1));
i__20851 = G__20856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20852),my_2048$utils$get_vertexes_$_iter__20841_$_iter__20849.call(null,cljs.core.chunk_rest.call(null,s__20850__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20852),null);
}
} else {
var y = cljs.core.first.call(null,s__20850__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20841_$_iter__20849.call(null,cljs.core.rest.call(null,s__20850__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec))
,null,null));
});})(x,s__20842__$2,temp__5720__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__4523__auto__.call(null,vertex_xy);
})(),my_2048$utils$get_vertexes_$_iter__20841.call(null,cljs.core.rest.call(null,s__20842__$2)));
}
} else {
return null;
}
break;
}
});})(vertex_distance,vertex_xy,position2vec))
,null,null));
});})(vertex_distance,vertex_xy,position2vec))
;
return iter__4523__auto__.call(null,vertex_xy);
})();
return cljs.core.reduce.call(null,position2vec,cljs.core.PersistentVector.EMPTY,vertexes);
});
my_2048.utils.get_ctx = (function my_2048$utils$get_ctx(canvas){
return canvas.getContext("2d");
});
my_2048.utils.set_color = (function my_2048$utils$set_color(ctx,color){
return ctx.fillStyle = color;
});
my_2048.utils.set_font = (function my_2048$utils$set_font(ctx,font){
return ctx.font = font;
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
var seq__20857_20901 = cljs.core.seq.call(null,game_field);
var chunk__20858_20902 = null;
var count__20859_20903 = (0);
var i__20860_20904 = (0);
while(true){
if((i__20860_20904 < count__20859_20903)){
var vec__20867_20905 = cljs.core._nth.call(null,chunk__20858_20902,i__20860_20904);
var point_20906 = cljs.core.nth.call(null,vec__20867_20905,(0),null);
var cell_value_20907 = cljs.core.nth.call(null,vec__20867_20905,(1),null);
my_2048.utils.set_color.call(null,ctx,my_2048.utils.tile_color.call(null,cell_value_20907));

my_2048.utils.draw_square.call(null,point_20906,ctx,tile_size);


var G__20908 = seq__20857_20901;
var G__20909 = chunk__20858_20902;
var G__20910 = count__20859_20903;
var G__20911 = (i__20860_20904 + (1));
seq__20857_20901 = G__20908;
chunk__20858_20902 = G__20909;
count__20859_20903 = G__20910;
i__20860_20904 = G__20911;
continue;
} else {
var temp__5720__auto___20912 = cljs.core.seq.call(null,seq__20857_20901);
if(temp__5720__auto___20912){
var seq__20857_20913__$1 = temp__5720__auto___20912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20857_20913__$1)){
var c__4550__auto___20914 = cljs.core.chunk_first.call(null,seq__20857_20913__$1);
var G__20915 = cljs.core.chunk_rest.call(null,seq__20857_20913__$1);
var G__20916 = c__4550__auto___20914;
var G__20917 = cljs.core.count.call(null,c__4550__auto___20914);
var G__20918 = (0);
seq__20857_20901 = G__20915;
chunk__20858_20902 = G__20916;
count__20859_20903 = G__20917;
i__20860_20904 = G__20918;
continue;
} else {
var vec__20870_20919 = cljs.core.first.call(null,seq__20857_20913__$1);
var point_20920 = cljs.core.nth.call(null,vec__20870_20919,(0),null);
var cell_value_20921 = cljs.core.nth.call(null,vec__20870_20919,(1),null);
my_2048.utils.set_color.call(null,ctx,my_2048.utils.tile_color.call(null,cell_value_20921));

my_2048.utils.draw_square.call(null,point_20920,ctx,tile_size);


var G__20922 = cljs.core.next.call(null,seq__20857_20913__$1);
var G__20923 = null;
var G__20924 = (0);
var G__20925 = (0);
seq__20857_20901 = G__20922;
chunk__20858_20902 = G__20923;
count__20859_20903 = G__20924;
i__20860_20904 = G__20925;
continue;
}
} else {
}
}
break;
}

var seq__20873 = cljs.core.seq.call(null,game_field);
var chunk__20874 = null;
var count__20875 = (0);
var i__20876 = (0);
while(true){
if((i__20876 < count__20875)){
var vec__20889 = cljs.core._nth.call(null,chunk__20874,i__20876);
var point = cljs.core.nth.call(null,vec__20889,(0),null);
var cell_value = cljs.core.nth.call(null,vec__20889,(1),null);
if((cell_value > (0))){
var text_20926 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20892_20927 = point;
var x_20928 = cljs.core.nth.call(null,vec__20892_20927,(0),null);
var y_20929 = cljs.core.nth.call(null,vec__20892_20927,(1),null);
var font_size_20930 = my_2048.utils.get_font_size.call(null,cell_value);
var font_20931 = [font_size_20930,"px serif"].join('');
var delta_x_20932 = my_2048.utils.get_delta_x.call(null,cell_value);
var delta_y_20933 = (55);
my_2048.utils.set_color.call(null,ctx,my_2048.utils.font_color.call(null,(cell_value < (8))));

my_2048.utils.set_font.call(null,ctx,font_20931);

ctx.fillText(text_20926,(x_20928 + delta_x_20932),(y_20929 + delta_y_20933));
} else {
}


var G__20934 = seq__20873;
var G__20935 = chunk__20874;
var G__20936 = count__20875;
var G__20937 = (i__20876 + (1));
seq__20873 = G__20934;
chunk__20874 = G__20935;
count__20875 = G__20936;
i__20876 = G__20937;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__20873);
if(temp__5720__auto__){
var seq__20873__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20873__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__20873__$1);
var G__20938 = cljs.core.chunk_rest.call(null,seq__20873__$1);
var G__20939 = c__4550__auto__;
var G__20940 = cljs.core.count.call(null,c__4550__auto__);
var G__20941 = (0);
seq__20873 = G__20938;
chunk__20874 = G__20939;
count__20875 = G__20940;
i__20876 = G__20941;
continue;
} else {
var vec__20895 = cljs.core.first.call(null,seq__20873__$1);
var point = cljs.core.nth.call(null,vec__20895,(0),null);
var cell_value = cljs.core.nth.call(null,vec__20895,(1),null);
if((cell_value > (0))){
var text_20942 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20898_20943 = point;
var x_20944 = cljs.core.nth.call(null,vec__20898_20943,(0),null);
var y_20945 = cljs.core.nth.call(null,vec__20898_20943,(1),null);
var font_size_20946 = my_2048.utils.get_font_size.call(null,cell_value);
var font_20947 = [font_size_20946,"px serif"].join('');
var delta_x_20948 = my_2048.utils.get_delta_x.call(null,cell_value);
var delta_y_20949 = (55);
my_2048.utils.set_color.call(null,ctx,my_2048.utils.font_color.call(null,(cell_value < (8))));

my_2048.utils.set_font.call(null,ctx,font_20947);

ctx.fillText(text_20942,(x_20944 + delta_x_20948),(y_20945 + delta_y_20949));
} else {
}


var G__20950 = cljs.core.next.call(null,seq__20873__$1);
var G__20951 = null;
var G__20952 = (0);
var G__20953 = (0);
seq__20873 = G__20950;
chunk__20874 = G__20951;
count__20875 = G__20952;
i__20876 = G__20953;
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
var ctx = my_2048.utils.get_ctx.call(null,canvas);
var w = canvas.width;
var h = canvas.height;
return ctx.clearRect((0),(0),w,h);
});

//# sourceMappingURL=utils.js.map?rel=1652340836393
