// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27648){if((e27648 instanceof Error)){
var e = e27648;
return "Error: Unable to stringify";
} else {
throw e27648;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27651 = arguments.length;
switch (G__27651) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27649_SHARP_){
if(typeof p1__27649_SHARP_ === 'string'){
return p1__27649_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27649_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27654 = arguments.length;
var i__4731__auto___27655 = (0);
while(true){
if((i__4731__auto___27655 < len__4730__auto___27654)){
args__4736__auto__.push((arguments[i__4731__auto___27655]));

var G__27656 = (i__4731__auto___27655 + (1));
i__4731__auto___27655 = G__27656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27653));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27658 = arguments.length;
var i__4731__auto___27659 = (0);
while(true){
if((i__4731__auto___27659 < len__4730__auto___27658)){
args__4736__auto__.push((arguments[i__4731__auto___27659]));

var G__27660 = (i__4731__auto___27659 + (1));
i__4731__auto___27659 = G__27660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27657));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27661){
var map__27662 = p__27661;
var map__27662__$1 = (((((!((map__27662 == null))))?(((((map__27662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27662):map__27662);
var message = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24843__auto___27741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___27741,ch){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___27741,ch){
return (function (state_27713){
var state_val_27714 = (state_27713[(1)]);
if((state_val_27714 === (7))){
var inst_27709 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27715_27742 = state_27713__$1;
(statearr_27715_27742[(2)] = inst_27709);

(statearr_27715_27742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (1))){
var state_27713__$1 = state_27713;
var statearr_27716_27743 = state_27713__$1;
(statearr_27716_27743[(2)] = null);

(statearr_27716_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (4))){
var inst_27666 = (state_27713[(7)]);
var inst_27666__$1 = (state_27713[(2)]);
var state_27713__$1 = (function (){var statearr_27717 = state_27713;
(statearr_27717[(7)] = inst_27666__$1);

return statearr_27717;
})();
if(cljs.core.truth_(inst_27666__$1)){
var statearr_27718_27744 = state_27713__$1;
(statearr_27718_27744[(1)] = (5));

} else {
var statearr_27719_27745 = state_27713__$1;
(statearr_27719_27745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (15))){
var inst_27673 = (state_27713[(8)]);
var inst_27688 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27673);
var inst_27689 = cljs.core.first.call(null,inst_27688);
var inst_27690 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27689);
var inst_27691 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27690)].join('');
var inst_27692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27691);
var state_27713__$1 = state_27713;
var statearr_27720_27746 = state_27713__$1;
(statearr_27720_27746[(2)] = inst_27692);

(statearr_27720_27746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (13))){
var inst_27697 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27721_27747 = state_27713__$1;
(statearr_27721_27747[(2)] = inst_27697);

(statearr_27721_27747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (6))){
var state_27713__$1 = state_27713;
var statearr_27722_27748 = state_27713__$1;
(statearr_27722_27748[(2)] = null);

(statearr_27722_27748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (17))){
var inst_27695 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27723_27749 = state_27713__$1;
(statearr_27723_27749[(2)] = inst_27695);

(statearr_27723_27749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (3))){
var inst_27711 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else {
if((state_val_27714 === (12))){
var inst_27672 = (state_27713[(9)]);
var inst_27686 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27672,opts);
var state_27713__$1 = state_27713;
if(inst_27686){
var statearr_27724_27750 = state_27713__$1;
(statearr_27724_27750[(1)] = (15));

} else {
var statearr_27725_27751 = state_27713__$1;
(statearr_27725_27751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (2))){
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27713__$1,(4),ch);
} else {
if((state_val_27714 === (11))){
var inst_27673 = (state_27713[(8)]);
var inst_27678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27679 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27673);
var inst_27680 = cljs.core.async.timeout.call(null,(1000));
var inst_27681 = [inst_27679,inst_27680];
var inst_27682 = (new cljs.core.PersistentVector(null,2,(5),inst_27678,inst_27681,null));
var state_27713__$1 = state_27713;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27713__$1,(14),inst_27682);
} else {
if((state_val_27714 === (9))){
var inst_27673 = (state_27713[(8)]);
var inst_27699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27700 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27673);
var inst_27701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27700);
var inst_27702 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27701)].join('');
var inst_27703 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27702);
var state_27713__$1 = (function (){var statearr_27726 = state_27713;
(statearr_27726[(10)] = inst_27699);

return statearr_27726;
})();
var statearr_27727_27752 = state_27713__$1;
(statearr_27727_27752[(2)] = inst_27703);

(statearr_27727_27752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (5))){
var inst_27666 = (state_27713[(7)]);
var inst_27668 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27669 = (new cljs.core.PersistentArrayMap(null,2,inst_27668,null));
var inst_27670 = (new cljs.core.PersistentHashSet(null,inst_27669,null));
var inst_27671 = figwheel.client.focus_msgs.call(null,inst_27670,inst_27666);
var inst_27672 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27671);
var inst_27673 = cljs.core.first.call(null,inst_27671);
var inst_27674 = figwheel.client.autoload_QMARK_.call(null);
var state_27713__$1 = (function (){var statearr_27728 = state_27713;
(statearr_27728[(8)] = inst_27673);

(statearr_27728[(9)] = inst_27672);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27674)){
var statearr_27729_27753 = state_27713__$1;
(statearr_27729_27753[(1)] = (8));

} else {
var statearr_27730_27754 = state_27713__$1;
(statearr_27730_27754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (14))){
var inst_27684 = (state_27713[(2)]);
var state_27713__$1 = state_27713;
var statearr_27731_27755 = state_27713__$1;
(statearr_27731_27755[(2)] = inst_27684);

(statearr_27731_27755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (16))){
var state_27713__$1 = state_27713;
var statearr_27732_27756 = state_27713__$1;
(statearr_27732_27756[(2)] = null);

(statearr_27732_27756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (10))){
var inst_27705 = (state_27713[(2)]);
var state_27713__$1 = (function (){var statearr_27733 = state_27713;
(statearr_27733[(11)] = inst_27705);

return statearr_27733;
})();
var statearr_27734_27757 = state_27713__$1;
(statearr_27734_27757[(2)] = null);

(statearr_27734_27757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27714 === (8))){
var inst_27672 = (state_27713[(9)]);
var inst_27676 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27672,opts);
var state_27713__$1 = state_27713;
if(cljs.core.truth_(inst_27676)){
var statearr_27735_27758 = state_27713__$1;
(statearr_27735_27758[(1)] = (11));

} else {
var statearr_27736_27759 = state_27713__$1;
(statearr_27736_27759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto___27741,ch))
;
return ((function (switch__24748__auto__,c__24843__auto___27741,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____0 = (function (){
var statearr_27737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27737[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__);

(statearr_27737[(1)] = (1));

return statearr_27737;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____1 = (function (state_27713){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27738){if((e27738 instanceof Object)){
var ex__24752__auto__ = e27738;
var statearr_27739_27760 = state_27713;
(statearr_27739_27760[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27713;
state_27713 = G__27761;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24749__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___27741,ch))
})();
var state__24845__auto__ = (function (){var statearr_27740 = f__24844__auto__.call(null);
(statearr_27740[(6)] = c__24843__auto___27741);

return statearr_27740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___27741,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27762_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27762_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27768 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27768){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27764 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27765 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27766 = true;
var _STAR_print_fn_STAR__temp_val__27767 = ((function (_STAR_print_newline_STAR__orig_val__27764,_STAR_print_fn_STAR__orig_val__27765,_STAR_print_newline_STAR__temp_val__27766,sb,base_path_27768){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27764,_STAR_print_fn_STAR__orig_val__27765,_STAR_print_newline_STAR__temp_val__27766,sb,base_path_27768))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27766;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27767;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27765;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27764;
}}catch (e27763){if((e27763 instanceof Error)){
var e = e27763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27768], null));
} else {
var e = e27763;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27768))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27769){
var map__27770 = p__27769;
var map__27770__$1 = (((((!((map__27770 == null))))?(((((map__27770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27770):map__27770);
var opts = map__27770__$1;
var build_id = cljs.core.get.call(null,map__27770__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27770,map__27770__$1,opts,build_id){
return (function (p__27772){
var vec__27773 = p__27772;
var seq__27774 = cljs.core.seq.call(null,vec__27773);
var first__27775 = cljs.core.first.call(null,seq__27774);
var seq__27774__$1 = cljs.core.next.call(null,seq__27774);
var map__27776 = first__27775;
var map__27776__$1 = (((((!((map__27776 == null))))?(((((map__27776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27776):map__27776);
var msg = map__27776__$1;
var msg_name = cljs.core.get.call(null,map__27776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27774__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27773,seq__27774,first__27775,seq__27774__$1,map__27776,map__27776__$1,msg,msg_name,_,map__27770,map__27770__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27773,seq__27774,first__27775,seq__27774__$1,map__27776,map__27776__$1,msg,msg_name,_,map__27770,map__27770__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27770,map__27770__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27778){
var vec__27779 = p__27778;
var seq__27780 = cljs.core.seq.call(null,vec__27779);
var first__27781 = cljs.core.first.call(null,seq__27780);
var seq__27780__$1 = cljs.core.next.call(null,seq__27780);
var map__27782 = first__27781;
var map__27782__$1 = (((((!((map__27782 == null))))?(((((map__27782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27782):map__27782);
var msg = map__27782__$1;
var msg_name = cljs.core.get.call(null,map__27782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27780__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27784){
var map__27785 = p__27784;
var map__27785__$1 = (((((!((map__27785 == null))))?(((((map__27785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27785):map__27785);
var on_compile_warning = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27785,map__27785__$1,on_compile_warning,on_compile_fail){
return (function (p__27787){
var vec__27788 = p__27787;
var seq__27789 = cljs.core.seq.call(null,vec__27788);
var first__27790 = cljs.core.first.call(null,seq__27789);
var seq__27789__$1 = cljs.core.next.call(null,seq__27789);
var map__27791 = first__27790;
var map__27791__$1 = (((((!((map__27791 == null))))?(((((map__27791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27791):map__27791);
var msg = map__27791__$1;
var msg_name = cljs.core.get.call(null,map__27791__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27789__$1;
var pred__27793 = cljs.core._EQ_;
var expr__27794 = msg_name;
if(cljs.core.truth_(pred__27793.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27794))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27793.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27794))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27785,map__27785__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__,msg_hist,msg_names,msg){
return (function (state_27883){
var state_val_27884 = (state_27883[(1)]);
if((state_val_27884 === (7))){
var inst_27803 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
if(cljs.core.truth_(inst_27803)){
var statearr_27885_27932 = state_27883__$1;
(statearr_27885_27932[(1)] = (8));

} else {
var statearr_27886_27933 = state_27883__$1;
(statearr_27886_27933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (20))){
var inst_27877 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27887_27934 = state_27883__$1;
(statearr_27887_27934[(2)] = inst_27877);

(statearr_27887_27934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (27))){
var inst_27873 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27888_27935 = state_27883__$1;
(statearr_27888_27935[(2)] = inst_27873);

(statearr_27888_27935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (1))){
var inst_27796 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27883__$1 = state_27883;
if(cljs.core.truth_(inst_27796)){
var statearr_27889_27936 = state_27883__$1;
(statearr_27889_27936[(1)] = (2));

} else {
var statearr_27890_27937 = state_27883__$1;
(statearr_27890_27937[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (24))){
var inst_27875 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27891_27938 = state_27883__$1;
(statearr_27891_27938[(2)] = inst_27875);

(statearr_27891_27938[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (4))){
var inst_27881 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27883__$1,inst_27881);
} else {
if((state_val_27884 === (15))){
var inst_27879 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27892_27939 = state_27883__$1;
(statearr_27892_27939[(2)] = inst_27879);

(statearr_27892_27939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (21))){
var inst_27832 = (state_27883[(2)]);
var inst_27833 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27834 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27833);
var state_27883__$1 = (function (){var statearr_27893 = state_27883;
(statearr_27893[(7)] = inst_27832);

return statearr_27893;
})();
var statearr_27894_27940 = state_27883__$1;
(statearr_27894_27940[(2)] = inst_27834);

(statearr_27894_27940[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (31))){
var inst_27862 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27862){
var statearr_27895_27941 = state_27883__$1;
(statearr_27895_27941[(1)] = (34));

} else {
var statearr_27896_27942 = state_27883__$1;
(statearr_27896_27942[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (32))){
var inst_27871 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27897_27943 = state_27883__$1;
(statearr_27897_27943[(2)] = inst_27871);

(statearr_27897_27943[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (33))){
var inst_27858 = (state_27883[(2)]);
var inst_27859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27859);
var state_27883__$1 = (function (){var statearr_27898 = state_27883;
(statearr_27898[(8)] = inst_27858);

return statearr_27898;
})();
var statearr_27899_27944 = state_27883__$1;
(statearr_27899_27944[(2)] = inst_27860);

(statearr_27899_27944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (13))){
var inst_27817 = figwheel.client.heads_up.clear.call(null);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(16),inst_27817);
} else {
if((state_val_27884 === (22))){
var inst_27838 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27839 = figwheel.client.heads_up.append_warning_message.call(null,inst_27838);
var state_27883__$1 = state_27883;
var statearr_27900_27945 = state_27883__$1;
(statearr_27900_27945[(2)] = inst_27839);

(statearr_27900_27945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (36))){
var inst_27869 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27901_27946 = state_27883__$1;
(statearr_27901_27946[(2)] = inst_27869);

(statearr_27901_27946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (29))){
var inst_27849 = (state_27883[(2)]);
var inst_27850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27850);
var state_27883__$1 = (function (){var statearr_27902 = state_27883;
(statearr_27902[(9)] = inst_27849);

return statearr_27902;
})();
var statearr_27903_27947 = state_27883__$1;
(statearr_27903_27947[(2)] = inst_27851);

(statearr_27903_27947[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (6))){
var inst_27798 = (state_27883[(10)]);
var state_27883__$1 = state_27883;
var statearr_27904_27948 = state_27883__$1;
(statearr_27904_27948[(2)] = inst_27798);

(statearr_27904_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (28))){
var inst_27845 = (state_27883[(2)]);
var inst_27846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27847 = figwheel.client.heads_up.display_warning.call(null,inst_27846);
var state_27883__$1 = (function (){var statearr_27905 = state_27883;
(statearr_27905[(11)] = inst_27845);

return statearr_27905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(29),inst_27847);
} else {
if((state_val_27884 === (25))){
var inst_27843 = figwheel.client.heads_up.clear.call(null);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(28),inst_27843);
} else {
if((state_val_27884 === (34))){
var inst_27864 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(37),inst_27864);
} else {
if((state_val_27884 === (17))){
var inst_27823 = (state_27883[(2)]);
var inst_27824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27825 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27824);
var state_27883__$1 = (function (){var statearr_27906 = state_27883;
(statearr_27906[(12)] = inst_27823);

return statearr_27906;
})();
var statearr_27907_27949 = state_27883__$1;
(statearr_27907_27949[(2)] = inst_27825);

(statearr_27907_27949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (3))){
var inst_27815 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27815){
var statearr_27908_27950 = state_27883__$1;
(statearr_27908_27950[(1)] = (13));

} else {
var statearr_27909_27951 = state_27883__$1;
(statearr_27909_27951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (12))){
var inst_27811 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27910_27952 = state_27883__$1;
(statearr_27910_27952[(2)] = inst_27811);

(statearr_27910_27952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (2))){
var inst_27798 = (state_27883[(10)]);
var inst_27798__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27883__$1 = (function (){var statearr_27911 = state_27883;
(statearr_27911[(10)] = inst_27798__$1);

return statearr_27911;
})();
if(cljs.core.truth_(inst_27798__$1)){
var statearr_27912_27953 = state_27883__$1;
(statearr_27912_27953[(1)] = (5));

} else {
var statearr_27913_27954 = state_27883__$1;
(statearr_27913_27954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (23))){
var inst_27841 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27841){
var statearr_27914_27955 = state_27883__$1;
(statearr_27914_27955[(1)] = (25));

} else {
var statearr_27915_27956 = state_27883__$1;
(statearr_27915_27956[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (35))){
var state_27883__$1 = state_27883;
var statearr_27916_27957 = state_27883__$1;
(statearr_27916_27957[(2)] = null);

(statearr_27916_27957[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (19))){
var inst_27836 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27836){
var statearr_27917_27958 = state_27883__$1;
(statearr_27917_27958[(1)] = (22));

} else {
var statearr_27918_27959 = state_27883__$1;
(statearr_27918_27959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (11))){
var inst_27807 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27919_27960 = state_27883__$1;
(statearr_27919_27960[(2)] = inst_27807);

(statearr_27919_27960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (9))){
var inst_27809 = figwheel.client.heads_up.clear.call(null);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(12),inst_27809);
} else {
if((state_val_27884 === (5))){
var inst_27800 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27883__$1 = state_27883;
var statearr_27920_27961 = state_27883__$1;
(statearr_27920_27961[(2)] = inst_27800);

(statearr_27920_27961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (14))){
var inst_27827 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27827){
var statearr_27921_27962 = state_27883__$1;
(statearr_27921_27962[(1)] = (18));

} else {
var statearr_27922_27963 = state_27883__$1;
(statearr_27922_27963[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (26))){
var inst_27853 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27883__$1 = state_27883;
if(inst_27853){
var statearr_27923_27964 = state_27883__$1;
(statearr_27923_27964[(1)] = (30));

} else {
var statearr_27924_27965 = state_27883__$1;
(statearr_27924_27965[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (16))){
var inst_27819 = (state_27883[(2)]);
var inst_27820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27821 = figwheel.client.heads_up.display_exception.call(null,inst_27820);
var state_27883__$1 = (function (){var statearr_27925 = state_27883;
(statearr_27925[(13)] = inst_27819);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(17),inst_27821);
} else {
if((state_val_27884 === (30))){
var inst_27855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27856 = figwheel.client.heads_up.display_warning.call(null,inst_27855);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(33),inst_27856);
} else {
if((state_val_27884 === (10))){
var inst_27813 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27926_27966 = state_27883__$1;
(statearr_27926_27966[(2)] = inst_27813);

(statearr_27926_27966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (18))){
var inst_27829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27830 = figwheel.client.heads_up.display_exception.call(null,inst_27829);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(21),inst_27830);
} else {
if((state_val_27884 === (37))){
var inst_27866 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27927_27967 = state_27883__$1;
(statearr_27927_27967[(2)] = inst_27866);

(statearr_27927_27967[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (8))){
var inst_27805 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(11),inst_27805);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24843__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24748__auto__,c__24843__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____0 = (function (){
var statearr_27928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27928[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__);

(statearr_27928[(1)] = (1));

return statearr_27928;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____1 = (function (state_27883){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27929){if((e27929 instanceof Object)){
var ex__24752__auto__ = e27929;
var statearr_27930_27968 = state_27883;
(statearr_27930_27968[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27969 = state_27883;
state_27883 = G__27969;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__ = function(state_27883){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____1.call(this,state_27883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__,msg_hist,msg_names,msg))
})();
var state__24845__auto__ = (function (){var statearr_27931 = f__24844__auto__.call(null);
(statearr_27931[(6)] = c__24843__auto__);

return statearr_27931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__,msg_hist,msg_names,msg))
);

return c__24843__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24843__auto___27998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___27998,ch){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___27998,ch){
return (function (state_27984){
var state_val_27985 = (state_27984[(1)]);
if((state_val_27985 === (1))){
var state_27984__$1 = state_27984;
var statearr_27986_27999 = state_27984__$1;
(statearr_27986_27999[(2)] = null);

(statearr_27986_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (2))){
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27984__$1,(4),ch);
} else {
if((state_val_27985 === (3))){
var inst_27982 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27984__$1,inst_27982);
} else {
if((state_val_27985 === (4))){
var inst_27972 = (state_27984[(7)]);
var inst_27972__$1 = (state_27984[(2)]);
var state_27984__$1 = (function (){var statearr_27987 = state_27984;
(statearr_27987[(7)] = inst_27972__$1);

return statearr_27987;
})();
if(cljs.core.truth_(inst_27972__$1)){
var statearr_27988_28000 = state_27984__$1;
(statearr_27988_28000[(1)] = (5));

} else {
var statearr_27989_28001 = state_27984__$1;
(statearr_27989_28001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (5))){
var inst_27972 = (state_27984[(7)]);
var inst_27974 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27972);
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27984__$1,(8),inst_27974);
} else {
if((state_val_27985 === (6))){
var state_27984__$1 = state_27984;
var statearr_27990_28002 = state_27984__$1;
(statearr_27990_28002[(2)] = null);

(statearr_27990_28002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (7))){
var inst_27980 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27991_28003 = state_27984__$1;
(statearr_27991_28003[(2)] = inst_27980);

(statearr_27991_28003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (8))){
var inst_27976 = (state_27984[(2)]);
var state_27984__$1 = (function (){var statearr_27992 = state_27984;
(statearr_27992[(8)] = inst_27976);

return statearr_27992;
})();
var statearr_27993_28004 = state_27984__$1;
(statearr_27993_28004[(2)] = null);

(statearr_27993_28004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24843__auto___27998,ch))
;
return ((function (switch__24748__auto__,c__24843__auto___27998,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24749__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24749__auto____0 = (function (){
var statearr_27994 = [null,null,null,null,null,null,null,null,null];
(statearr_27994[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24749__auto__);

(statearr_27994[(1)] = (1));

return statearr_27994;
});
var figwheel$client$heads_up_plugin_$_state_machine__24749__auto____1 = (function (state_27984){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27995){if((e27995 instanceof Object)){
var ex__24752__auto__ = e27995;
var statearr_27996_28005 = state_27984;
(statearr_27996_28005[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28006 = state_27984;
state_27984 = G__28006;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24749__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24749__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24749__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24749__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___27998,ch))
})();
var state__24845__auto__ = (function (){var statearr_27997 = f__24844__auto__.call(null);
(statearr_27997[(6)] = c__24843__auto___27998);

return statearr_27997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___27998,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__){
return (function (state_28012){
var state_val_28013 = (state_28012[(1)]);
if((state_val_28013 === (1))){
var inst_28007 = cljs.core.async.timeout.call(null,(3000));
var state_28012__$1 = state_28012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28012__$1,(2),inst_28007);
} else {
if((state_val_28013 === (2))){
var inst_28009 = (state_28012[(2)]);
var inst_28010 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28012__$1 = (function (){var statearr_28014 = state_28012;
(statearr_28014[(7)] = inst_28009);

return statearr_28014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28012__$1,inst_28010);
} else {
return null;
}
}
});})(c__24843__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____0 = (function (){
var statearr_28015 = [null,null,null,null,null,null,null,null];
(statearr_28015[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__);

(statearr_28015[(1)] = (1));

return statearr_28015;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____1 = (function (state_28012){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_28012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e28016){if((e28016 instanceof Object)){
var ex__24752__auto__ = e28016;
var statearr_28017_28019 = state_28012;
(statearr_28017_28019[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28020 = state_28012;
state_28012 = G__28020;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__ = function(state_28012){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____1.call(this,state_28012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24749__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__))
})();
var state__24845__auto__ = (function (){var statearr_28018 = f__24844__auto__.call(null);
(statearr_28018[(6)] = c__24843__auto__);

return statearr_28018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__))
);

return c__24843__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__,figwheel_version,temp__5720__auto__){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (1))){
var inst_28021 = cljs.core.async.timeout.call(null,(2000));
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(2),inst_28021);
} else {
if((state_val_28028 === (2))){
var inst_28023 = (state_28027[(2)]);
var inst_28024 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28025 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28024);
var state_28027__$1 = (function (){var statearr_28029 = state_28027;
(statearr_28029[(7)] = inst_28023);

return statearr_28029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
return null;
}
}
});})(c__24843__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____0 = (function (){
var statearr_28030 = [null,null,null,null,null,null,null,null];
(statearr_28030[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__);

(statearr_28030[(1)] = (1));

return statearr_28030;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____1 = (function (state_28027){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e28031){if((e28031 instanceof Object)){
var ex__24752__auto__ = e28031;
var statearr_28032_28034 = state_28027;
(statearr_28032_28034[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28035 = state_28027;
state_28027 = G__28035;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__,figwheel_version,temp__5720__auto__))
})();
var state__24845__auto__ = (function (){var statearr_28033 = f__24844__auto__.call(null);
(statearr_28033[(6)] = c__24843__auto__);

return statearr_28033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__,figwheel_version,temp__5720__auto__))
);

return c__24843__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28036){
var map__28037 = p__28036;
var map__28037__$1 = (((((!((map__28037 == null))))?(((((map__28037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var file = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28039 = "";
var G__28039__$1 = (cljs.core.truth_(file)?[G__28039,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28039);
var G__28039__$2 = (cljs.core.truth_(line)?[G__28039__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28039__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28039__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28039__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28040){
var map__28041 = p__28040;
var map__28041__$1 = (((((!((map__28041 == null))))?(((((map__28041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var ed = map__28041__$1;
var exception_data = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28044 = (function (){var G__28043 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28043)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28043;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28044);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28045){
var map__28046 = p__28045;
var map__28046__$1 = (((((!((map__28046 == null))))?(((((map__28046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28046):map__28046);
var w = map__28046__$1;
var message = cljs.core.get.call(null,map__28046__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28048 = cljs.core.seq.call(null,plugins);
var chunk__28049 = null;
var count__28050 = (0);
var i__28051 = (0);
while(true){
if((i__28051 < count__28050)){
var vec__28058 = cljs.core._nth.call(null,chunk__28049,i__28051);
var k = cljs.core.nth.call(null,vec__28058,(0),null);
var plugin = cljs.core.nth.call(null,vec__28058,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28064 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28048,chunk__28049,count__28050,i__28051,pl_28064,vec__28058,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28064.call(null,msg_hist);
});})(seq__28048,chunk__28049,count__28050,i__28051,pl_28064,vec__28058,k,plugin))
);
} else {
}


var G__28065 = seq__28048;
var G__28066 = chunk__28049;
var G__28067 = count__28050;
var G__28068 = (i__28051 + (1));
seq__28048 = G__28065;
chunk__28049 = G__28066;
count__28050 = G__28067;
i__28051 = G__28068;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28048);
if(temp__5720__auto__){
var seq__28048__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28048__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28048__$1);
var G__28069 = cljs.core.chunk_rest.call(null,seq__28048__$1);
var G__28070 = c__4550__auto__;
var G__28071 = cljs.core.count.call(null,c__4550__auto__);
var G__28072 = (0);
seq__28048 = G__28069;
chunk__28049 = G__28070;
count__28050 = G__28071;
i__28051 = G__28072;
continue;
} else {
var vec__28061 = cljs.core.first.call(null,seq__28048__$1);
var k = cljs.core.nth.call(null,vec__28061,(0),null);
var plugin = cljs.core.nth.call(null,vec__28061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28073 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28048,chunk__28049,count__28050,i__28051,pl_28073,vec__28061,k,plugin,seq__28048__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28073.call(null,msg_hist);
});})(seq__28048,chunk__28049,count__28050,i__28051,pl_28073,vec__28061,k,plugin,seq__28048__$1,temp__5720__auto__))
);
} else {
}


var G__28074 = cljs.core.next.call(null,seq__28048__$1);
var G__28075 = null;
var G__28076 = (0);
var G__28077 = (0);
seq__28048 = G__28074;
chunk__28049 = G__28075;
count__28050 = G__28076;
i__28051 = G__28077;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28079 = arguments.length;
switch (G__28079) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28080_28085 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28081_28086 = null;
var count__28082_28087 = (0);
var i__28083_28088 = (0);
while(true){
if((i__28083_28088 < count__28082_28087)){
var msg_28089 = cljs.core._nth.call(null,chunk__28081_28086,i__28083_28088);
figwheel.client.socket.handle_incoming_message.call(null,msg_28089);


var G__28090 = seq__28080_28085;
var G__28091 = chunk__28081_28086;
var G__28092 = count__28082_28087;
var G__28093 = (i__28083_28088 + (1));
seq__28080_28085 = G__28090;
chunk__28081_28086 = G__28091;
count__28082_28087 = G__28092;
i__28083_28088 = G__28093;
continue;
} else {
var temp__5720__auto___28094 = cljs.core.seq.call(null,seq__28080_28085);
if(temp__5720__auto___28094){
var seq__28080_28095__$1 = temp__5720__auto___28094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28080_28095__$1)){
var c__4550__auto___28096 = cljs.core.chunk_first.call(null,seq__28080_28095__$1);
var G__28097 = cljs.core.chunk_rest.call(null,seq__28080_28095__$1);
var G__28098 = c__4550__auto___28096;
var G__28099 = cljs.core.count.call(null,c__4550__auto___28096);
var G__28100 = (0);
seq__28080_28085 = G__28097;
chunk__28081_28086 = G__28098;
count__28082_28087 = G__28099;
i__28083_28088 = G__28100;
continue;
} else {
var msg_28101 = cljs.core.first.call(null,seq__28080_28095__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28101);


var G__28102 = cljs.core.next.call(null,seq__28080_28095__$1);
var G__28103 = null;
var G__28104 = (0);
var G__28105 = (0);
seq__28080_28085 = G__28102;
chunk__28081_28086 = G__28103;
count__28082_28087 = G__28104;
i__28083_28088 = G__28105;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28110 = arguments.length;
var i__4731__auto___28111 = (0);
while(true){
if((i__4731__auto___28111 < len__4730__auto___28110)){
args__4736__auto__.push((arguments[i__4731__auto___28111]));

var G__28112 = (i__4731__auto___28111 + (1));
i__4731__auto___28111 = G__28112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28107){
var map__28108 = p__28107;
var map__28108__$1 = (((((!((map__28108 == null))))?(((((map__28108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28108):map__28108);
var opts = map__28108__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28106));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28113){if((e28113 instanceof Error)){
var e = e28113;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28113;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28114){
var map__28115 = p__28114;
var map__28115__$1 = (((((!((map__28115 == null))))?(((((map__28115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);
var msg_name = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1652343001811
