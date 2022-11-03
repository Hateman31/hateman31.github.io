goog.provide('my_2048.core');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
my_2048.core.game = document.getElementById("game");
my_2048.core.score_label = document.getElementById("score");
my_2048.core.grid_size = (function (){var w = window.innerWidth;
var h = window.innerHeight;
return (0.8 * (function (){var x__5133__auto__ = w;
var y__5134__auto__ = h;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
})();
my_2048.core.tile_size = (function (){var f1 = (function (p1__11523_SHARP_){
return (p1__11523_SHARP_ - (9));
});
var f2 = (function (p1__11524_SHARP_){
return (p1__11524_SHARP_ / (4));
});
return f2(f1(my_2048.core.game.width));
})();
my_2048.core.background = my_2048.core.game.getContext("2d");
my_2048.core.render_game = (function my_2048$core$render_game(game_state){
my_2048.utils.clear_canvas(my_2048.core.game);

return my_2048.utils.draw_field(my_2048.core.background,my_2048.core.tile_size,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,my_2048.utils.get_vertexes(my_2048.core.tile_size,(4),(3)),my_2048.game.matrix_to_vector(game_state)));
});
my_2048.core.render_score = (function my_2048$core$render_score(new_score){
return (my_2048.core.score_label.textContent = new_score);
});
my_2048.core.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_2048.game.init_state());
my_2048.core.prev_game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
my_2048.core.score = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(my_2048.game.get_score(cljs.core.deref(my_2048.core.game_state)));
my_2048.core.ignore_ending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
my_2048.core.win_msg = "You won! Do you want to continue?";
my_2048.core.lose_msg = "You lost! Do you want to play new game?";
my_2048.core.update_field_BANG_ = (function my_2048$core$update_field_BANG_(direction){
var shift = (function (p1__11525_SHARP_){
return my_2048.game.update_grid(p1__11525_SHARP_,direction);
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
my_2048.core.undobtn = document.getElementById("undobtn");
my_2048.core.start_new_game = (function my_2048$core$start_new_game(){
cljs.core.reset_BANG_(my_2048.core.game_state,my_2048.game.init_state());

return (my_2048.core.undobtn.disabled = true);
});
my_2048.core.finish_game = (function my_2048$core$finish_game(){
return my_2048.core.render_game(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)));
});
my_2048.core.main = (function my_2048$core$main(){
(my_2048.core.undobtn.disabled = true);

my_2048.swipe.arrowSwipe().subscribe(my_2048.core.update_field_BANG_);

my_2048.swipe.touchSwipe(my_2048.core.game).subscribe(my_2048.core.update_field_BANG_);

module$node_modules$rxjs$dist$cjs$index.fromEvent(document.getElementById("newgamebtn"),"click").subscribe((function (){
return my_2048.core.start_new_game();
}));

module$node_modules$rxjs$dist$cjs$index.fromEvent(my_2048.core.undobtn,"click").subscribe((function (){
cljs.core.reset_BANG_(my_2048.core.game_state,cljs.core.deref(my_2048.core.prev_game_state));

return (my_2048.core.undobtn.disabled = true);
}));

cljs.core.add_watch(my_2048.core.game_state,new cljs.core.Keyword(null,"updating","updating",1454028951),(function (p1__11528_SHARP_,p2__11529_SHARP_,p3__11527_SHARP_,p4__11526_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(my_2048.core.ignore_ending),my_2048.game.win_QMARK_(p4__11526_SHARP_)], 0));

my_2048.core.render_game(p4__11526_SHARP_);

cljs.core.reset_BANG_(my_2048.core.prev_game_state,p3__11527_SHARP_);

(my_2048.core.undobtn.disabled = false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_2048.core.score,(function (){
return my_2048.game.get_score(p4__11526_SHARP_);
}));

return my_2048.core.render_score(cljs.core.deref(my_2048.core.score));
}));

cljs.core.add_watch(my_2048.core.game_state,new cljs.core.Keyword(null,"game-ending","game-ending",-972968126),(function (p1__11531_SHARP_,p2__11532_SHARP_,p3__11533_SHARP_,p4__11530_SHARP_){
var game_state = p4__11530_SHARP_;
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(cljs.core.deref(my_2048.core.ignore_ending));
if(and__5043__auto__){
return my_2048.game.win_QMARK_(game_state);
} else {
return and__5043__auto__;
}
})())){
var continue_QMARK_ = confirm(my_2048.core.win_msg);
if(cljs.core.truth_(continue_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_2048.core.ignore_ending,(function (){
return continue_QMARK_;
}));
} else {
return my_2048.core.finish_game();
}
} else {
if(my_2048.game.lose_QMARK_(game_state)){
if(cljs.core.truth_(confirm(my_2048.core.lose_msg))){
return my_2048.core.start_new_game();
} else {
return my_2048.core.finish_game();
}
} else {
return null;
}
}
}));

my_2048.core.render_game(cljs.core.deref(my_2048.core.game_state));

return my_2048.core.render_score(cljs.core.deref(my_2048.core.score));
});

//# sourceMappingURL=my_2048.core.js.map
