goog.provide('my_2048.utils');
my_2048.utils.arrow_direction = new cljs.core.PersistentArrayMap(null, 4, ["ArrowDown",new cljs.core.Keyword(null,"down","down",1565245570),"ArrowUp",new cljs.core.Keyword(null,"up","up",-269712113),"ArrowLeft",new cljs.core.Keyword(null,"left","left",-399115937),"ArrowRight",new cljs.core.Keyword(null,"right","right",-452581833)], null);
my_2048.utils.tile_color = cljs.core.PersistentHashMap.fromArrays([(0),(128),(4),(512),(32),(256),(1024),(64),(2),(16),(2048),(8)],["#776e65","#edcf72","#ede0c8","#edcc61","#f67c5f","#edcc61","#edc53f","#f65e3b","#eee4da","#f59563","#edc22e","#f2b179"]);
my_2048.utils.font_color = new cljs.core.PersistentArrayMap(null, 2, [true,"#776e65",false,"#f9f6f2"], null);
my_2048.utils.draw_square = (function my_2048$utils$draw_square(point,ctx,tile_size){
var vec__20789 = point;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20789,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20789,(1),null);
return ctx.fillRect(m,n,tile_size,tile_size);
});
my_2048.utils.get_vertexes = (function my_2048$utils$get_vertexes(tile_side,grid_side_size,tile_gap){
var vertex_distance = (tile_side + tile_gap);
var vertex_xy = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__20796(s__20797){
return (new cljs.core.LazySeq(null,(function (){
var s__20797__$1 = s__20797;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20797__$1);
if(temp__5804__auto__){
var s__20797__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20797__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20797__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20799 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20798 = (0);
while(true){
if((i__20798 < size__5522__auto__)){
var vertex_num = cljs.core._nth(c__5521__auto__,i__20798);
cljs.core.chunk_append(b__20799,(vertex_distance * vertex_num));

var G__20888 = (i__20798 + (1));
i__20798 = G__20888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20799),my_2048$utils$get_vertexes_$_iter__20796(cljs.core.chunk_rest(s__20797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20799),null);
}
} else {
var vertex_num = cljs.core.first(s__20797__$2);
return cljs.core.cons((vertex_distance * vertex_num),my_2048$utils$get_vertexes_$_iter__20796(cljs.core.rest(s__20797__$2)));
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
var position2vec = (function (p1__20792_SHARP_,p2__20793_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.vec(p1__20792_SHARP_),cljs.core.vec(p2__20793_SHARP_));
});
var vertexes = (function (){var iter__5523__auto__ = (function my_2048$utils$get_vertexes_$_iter__20800(s__20801){
return (new cljs.core.LazySeq(null,(function (){
var s__20801__$1 = s__20801;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20801__$1);
if(temp__5804__auto__){
var s__20801__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20801__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20801__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20803 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20802 = (0);
while(true){
if((i__20802 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__20802);
cljs.core.chunk_append(b__20803,(function (){var iter__5523__auto__ = ((function (i__20802,x,c__5521__auto__,size__5522__auto__,b__20803,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20800_$_iter__20804(s__20805){
return (new cljs.core.LazySeq(null,((function (i__20802,x,c__5521__auto__,size__5522__auto__,b__20803,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function (){
var s__20805__$1 = s__20805;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20805__$1);
if(temp__5804__auto____$1){
var s__20805__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20805__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__20805__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__20807 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__20806 = (0);
while(true){
if((i__20806 < size__5522__auto____$1)){
var y = cljs.core._nth(c__5521__auto____$1,i__20806);
cljs.core.chunk_append(b__20807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20889 = (i__20806 + (1));
i__20806 = G__20889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20807),my_2048$utils$get_vertexes_$_iter__20800_$_iter__20804(cljs.core.chunk_rest(s__20805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20807),null);
}
} else {
var y = cljs.core.first(s__20805__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20800_$_iter__20804(cljs.core.rest(s__20805__$2)));
}
} else {
return null;
}
break;
}
});})(i__20802,x,c__5521__auto__,size__5522__auto__,b__20803,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
,null,null));
});})(i__20802,x,c__5521__auto__,size__5522__auto__,b__20803,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})());

var G__20890 = (i__20802 + (1));
i__20802 = G__20890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20803),my_2048$utils$get_vertexes_$_iter__20800(cljs.core.chunk_rest(s__20801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20803),null);
}
} else {
var x = cljs.core.first(s__20801__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (x,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec){
return (function my_2048$utils$get_vertexes_$_iter__20800_$_iter__20823(s__20824){
return (new cljs.core.LazySeq(null,(function (){
var s__20824__$1 = s__20824;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20824__$1);
if(temp__5804__auto____$1){
var s__20824__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20824__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20824__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20826 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20825 = (0);
while(true){
if((i__20825 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__20825);
cljs.core.chunk_append(b__20826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__20891 = (i__20825 + (1));
i__20825 = G__20891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20826),my_2048$utils$get_vertexes_$_iter__20800_$_iter__20823(cljs.core.chunk_rest(s__20824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20826),null);
}
} else {
var y = cljs.core.first(s__20824__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),my_2048$utils$get_vertexes_$_iter__20800_$_iter__20823(cljs.core.rest(s__20824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__20801__$2,temp__5804__auto__,vertex_distance,vertex_xy,position2vec))
;
return iter__5523__auto__(vertex_xy);
})(),my_2048$utils$get_vertexes_$_iter__20800(cljs.core.rest(s__20801__$2)));
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
var seq__20832_20901 = cljs.core.seq(game_field);
var chunk__20833_20902 = null;
var count__20834_20903 = (0);
var i__20835_20904 = (0);
while(true){
if((i__20835_20904 < count__20834_20903)){
var vec__20844_20905 = chunk__20833_20902.cljs$core$IIndexed$_nth$arity$2(null,i__20835_20904);
var point_20906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844_20905,(0),null);
var cell_value_20907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844_20905,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_20907) : my_2048.utils.tile_color.call(null,cell_value_20907)));

my_2048.utils.draw_square(point_20906,ctx,tile_size);


var G__20908 = seq__20832_20901;
var G__20909 = chunk__20833_20902;
var G__20910 = count__20834_20903;
var G__20911 = (i__20835_20904 + (1));
seq__20832_20901 = G__20908;
chunk__20833_20902 = G__20909;
count__20834_20903 = G__20910;
i__20835_20904 = G__20911;
continue;
} else {
var temp__5804__auto___20912 = cljs.core.seq(seq__20832_20901);
if(temp__5804__auto___20912){
var seq__20832_20913__$1 = temp__5804__auto___20912;
if(cljs.core.chunked_seq_QMARK_(seq__20832_20913__$1)){
var c__5568__auto___20914 = cljs.core.chunk_first(seq__20832_20913__$1);
var G__20915 = cljs.core.chunk_rest(seq__20832_20913__$1);
var G__20916 = c__5568__auto___20914;
var G__20917 = cljs.core.count(c__5568__auto___20914);
var G__20918 = (0);
seq__20832_20901 = G__20915;
chunk__20833_20902 = G__20916;
count__20834_20903 = G__20917;
i__20835_20904 = G__20918;
continue;
} else {
var vec__20847_20919 = cljs.core.first(seq__20832_20913__$1);
var point_20920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847_20919,(0),null);
var cell_value_20921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847_20919,(1),null);
my_2048.utils.set_color(ctx,(my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.tile_color.cljs$core$IFn$_invoke$arity$1(cell_value_20921) : my_2048.utils.tile_color.call(null,cell_value_20921)));

my_2048.utils.draw_square(point_20920,ctx,tile_size);


var G__20922 = cljs.core.next(seq__20832_20913__$1);
var G__20923 = null;
var G__20924 = (0);
var G__20925 = (0);
seq__20832_20901 = G__20922;
chunk__20833_20902 = G__20923;
count__20834_20903 = G__20924;
i__20835_20904 = G__20925;
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
var vec__20870 = chunk__20851.cljs$core$IIndexed$_nth$arity$2(null,i__20853);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20870,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20870,(1),null);
if((cell_value > (0))){
var text_20926 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20873_20927 = point;
var x_20928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20873_20927,(0),null);
var y_20929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20873_20927,(1),null);
var font_size_20930 = my_2048.utils.get_font_size(cell_value);
var font_20931 = [font_size_20930,"px serif"].join('');
var delta_x_20932 = my_2048.utils.get_delta_x(cell_value);
var delta_y_20933 = (55);
my_2048.utils.set_color(ctx,(function (){var G__20876 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__20876) : my_2048.utils.font_color.call(null,G__20876));
})());

my_2048.utils.set_font(ctx,font_20931);

ctx.fillText(text_20926,(x_20928 + delta_x_20932),(y_20929 + delta_y_20933));
} else {
}


var G__20934 = seq__20850;
var G__20935 = chunk__20851;
var G__20936 = count__20852;
var G__20937 = (i__20853 + (1));
seq__20850 = G__20934;
chunk__20851 = G__20935;
count__20852 = G__20936;
i__20853 = G__20937;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20850);
if(temp__5804__auto__){
var seq__20850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20850__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20850__$1);
var G__20938 = cljs.core.chunk_rest(seq__20850__$1);
var G__20939 = c__5568__auto__;
var G__20940 = cljs.core.count(c__5568__auto__);
var G__20941 = (0);
seq__20850 = G__20938;
chunk__20851 = G__20939;
count__20852 = G__20940;
i__20853 = G__20941;
continue;
} else {
var vec__20877 = cljs.core.first(seq__20850__$1);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20877,(0),null);
var cell_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20877,(1),null);
if((cell_value > (0))){
var text_20942 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_value);
var vec__20880_20943 = point;
var x_20944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20880_20943,(0),null);
var y_20945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20880_20943,(1),null);
var font_size_20946 = my_2048.utils.get_font_size(cell_value);
var font_20947 = [font_size_20946,"px serif"].join('');
var delta_x_20948 = my_2048.utils.get_delta_x(cell_value);
var delta_y_20949 = (55);
my_2048.utils.set_color(ctx,(function (){var G__20883 = (cell_value < (8));
return (my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.font_color.cljs$core$IFn$_invoke$arity$1(G__20883) : my_2048.utils.font_color.call(null,G__20883));
})());

my_2048.utils.set_font(ctx,font_20947);

ctx.fillText(text_20942,(x_20944 + delta_x_20948),(y_20945 + delta_y_20949));
} else {
}


var G__20950 = cljs.core.next(seq__20850__$1);
var G__20951 = null;
var G__20952 = (0);
var G__20953 = (0);
seq__20850 = G__20950;
chunk__20851 = G__20951;
count__20852 = G__20952;
i__20853 = G__20953;
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
