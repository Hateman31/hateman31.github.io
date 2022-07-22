goog.provide('my_2048.core');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
my_2048.core.game = document.getElementById("game");
my_2048.core.grid_size = (function (){var w = window.innerWidth;
var h = window.innerHeight;
return (0.8 * (function (){var x__5133__auto__ = w;
var y__5134__auto__ = h;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
})();
my_2048.core.tile_size = (function (){var f1 = (function (p1__12193_SHARP_){
return (p1__12193_SHARP_ - (9));
});
var f2 = (function (p1__12194_SHARP_){
return (p1__12194_SHARP_ / (4));
});
return f2(f1(my_2048.core.game.width));
})();
my_2048.core.background = my_2048.core.game.getContext("2d");
my_2048.core.render_game = (function my_2048$core$render_game(game_state){
my_2048.utils.clear_canvas(my_2048.core.game);

return my_2048.utils.draw_field(my_2048.core.background,my_2048.core.tile_size,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,my_2048.utils.get_vertexes(my_2048.core.tile_size,(4),(3)),my_2048.game.matrix_to_vector(game_state)));
});
my_2048.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_2048.game.init_state());
my_2048.core.update_field_BANG_ = (function my_2048$core$update_field_BANG_(direction){
var shift = (function (p1__12195_SHARP_){
return my_2048.game.update_grid(p1__12195_SHARP_,direction);
});
if(cljs.core.truth_((function (){var and__5043__auto__ = direction;
if(cljs.core.truth_(and__5043__auto__)){
return my_2048.game.grid_movable_QMARK_(my_2048.game.rotate_grid(direction,cljs.core.deref(my_2048.core.game_state)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_2048.core.game_state,shift);
} else {
return null;
}
});
my_2048.core.main = (function my_2048$core$main(){
my_2048.swipe.arrowSwipe().subscribe(my_2048.core.update_field_BANG_);

my_2048.swipe.touchSwipe(document).subscribe(my_2048.core.update_field_BANG_);

cljs.core.add_watch(my_2048.core.game_state,new cljs.core.Keyword(null,"updating","updating",1454028951),(function (p1__12197_SHARP_,p2__12198_SHARP_,p3__12199_SHARP_,p4__12196_SHARP_){
return my_2048.core.render_game(p4__12196_SHARP_);
}));

cljs.core.add_watch(my_2048.core.game_state,new cljs.core.Keyword(null,"game-ending","game-ending",-972968126),(function (p1__12201_SHARP_,p2__12202_SHARP_,p3__12203_SHARP_,p4__12200_SHARP_){
var game_state = p4__12200_SHARP_;
if(cljs.core.truth_(my_2048.game.win_QMARK_(game_state))){
return alert("You won!");
} else {
if(my_2048.game.lose_QMARK_(game_state)){
return alert("You lost!");
} else {
return null;
}
}
}));

return my_2048.core.render_game(cljs.core.deref(my_2048.core.game_state));
});

//# sourceMappingURL=my_2048.core.js.map
