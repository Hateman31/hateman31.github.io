// Compiled by ClojureScript 1.10.520 {}
goog.provide('my_2048.core');
goog.require('cljs.core');
goog.require('my_2048.utils');
goog.require('my_2048.game');
my_2048.core.game = document.getElementById("game");
my_2048.core.grid_size = (function (){var w = window.innerWidth;
var h = window.innerHeight;
return (0.8 * (function (){var x__4222__auto__ = w;
var y__4223__auto__ = h;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
})();
my_2048.core.tile_size = (function (){var f1 = (function (p1__20918_SHARP_){
return (p1__20918_SHARP_ - (9));
});
var f2 = ((function (f1){
return (function (p1__20919_SHARP_){
return (p1__20919_SHARP_ / (4));
});})(f1))
;
return f2.call(null,f1.call(null,my_2048.core.game.width));
})();
my_2048.core.background = my_2048.core.game.getContext("2d");
my_2048.core.render_game = (function my_2048$core$render_game(game_state){
my_2048.utils.clear_canvas.call(null,my_2048.core.game);

return my_2048.utils.draw_field.call(null,my_2048.core.background,my_2048.core.tile_size,cljs.core.map.call(null,cljs.core.list,my_2048.utils.get_vertexes.call(null,my_2048.core.tile_size,(4),(3)),my_2048.game.matrix_to_vector.call(null,game_state)));
});
my_2048.core.game_state = cljs.core.atom.call(null,my_2048.game.init_state.call(null));
document.addEventListener("keydown",(function (event){
var direction = my_2048.utils.arrow_direction.call(null,event.key);
var shift = ((function (direction){
return (function (p1__20920_SHARP_){
return my_2048.game.update_grid.call(null,p1__20920_SHARP_,direction);
});})(direction))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = direction;
if(cljs.core.truth_(and__4120__auto__)){
return my_2048.game.grid_movable_QMARK_.call(null,my_2048.game.rotate_grid.call(null,direction,cljs.core.deref.call(null,my_2048.core.game_state)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,my_2048.core.game_state,shift);
} else {
return null;
}
}));
cljs.core.add_watch.call(null,my_2048.core.game_state,new cljs.core.Keyword(null,"updating","updating",1454028951),(function (p1__20922_SHARP_,p2__20923_SHARP_,p3__20924_SHARP_,p4__20921_SHARP_){
return my_2048.core.render_game.call(null,p4__20921_SHARP_);
}));
cljs.core.add_watch.call(null,my_2048.core.game_state,new cljs.core.Keyword(null,"game-ending","game-ending",-972968126),(function (p1__20926_SHARP_,p2__20927_SHARP_,p3__20928_SHARP_,p4__20925_SHARP_){
return (function (){var game_state = p4__20925_SHARP_;
if(cljs.core.truth_(my_2048.game.win_QMARK_.call(null,game_state))){
return alert("You won!");
} else {
if(my_2048.game.lose_QMARK_.call(null,game_state)){
return alert("You lost!");
} else {
return null;
}
}
})().call(null);
}));
my_2048.core.render_game.call(null,cljs.core.deref.call(null,my_2048.core.game_state));

//# sourceMappingURL=core.js.map?rel=1652342997423
