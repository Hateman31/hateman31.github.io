// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26786_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26786_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26787 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26788 = null;
var count__26789 = (0);
var i__26790 = (0);
while(true){
if((i__26790 < count__26789)){
var n = cljs.core._nth.call(null,chunk__26788,i__26790);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26791 = seq__26787;
var G__26792 = chunk__26788;
var G__26793 = count__26789;
var G__26794 = (i__26790 + (1));
seq__26787 = G__26791;
chunk__26788 = G__26792;
count__26789 = G__26793;
i__26790 = G__26794;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26787);
if(temp__5720__auto__){
var seq__26787__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26787__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26787__$1);
var G__26795 = cljs.core.chunk_rest.call(null,seq__26787__$1);
var G__26796 = c__4550__auto__;
var G__26797 = cljs.core.count.call(null,c__4550__auto__);
var G__26798 = (0);
seq__26787 = G__26795;
chunk__26788 = G__26796;
count__26789 = G__26797;
i__26790 = G__26798;
continue;
} else {
var n = cljs.core.first.call(null,seq__26787__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26799 = cljs.core.next.call(null,seq__26787__$1);
var G__26800 = null;
var G__26801 = (0);
var G__26802 = (0);
seq__26787 = G__26799;
chunk__26788 = G__26800;
count__26789 = G__26801;
i__26790 = G__26802;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26803){
var vec__26804 = p__26803;
var _ = cljs.core.nth.call(null,vec__26804,(0),null);
var v = cljs.core.nth.call(null,vec__26804,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26807){
var vec__26808 = p__26807;
var k = cljs.core.nth.call(null,vec__26808,(0),null);
var v = cljs.core.nth.call(null,vec__26808,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26820_26828 = cljs.core.seq.call(null,deps);
var chunk__26821_26829 = null;
var count__26822_26830 = (0);
var i__26823_26831 = (0);
while(true){
if((i__26823_26831 < count__26822_26830)){
var dep_26832 = cljs.core._nth.call(null,chunk__26821_26829,i__26823_26831);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26832;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26832));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26832,(depth + (1)),state);
} else {
}


var G__26833 = seq__26820_26828;
var G__26834 = chunk__26821_26829;
var G__26835 = count__26822_26830;
var G__26836 = (i__26823_26831 + (1));
seq__26820_26828 = G__26833;
chunk__26821_26829 = G__26834;
count__26822_26830 = G__26835;
i__26823_26831 = G__26836;
continue;
} else {
var temp__5720__auto___26837 = cljs.core.seq.call(null,seq__26820_26828);
if(temp__5720__auto___26837){
var seq__26820_26838__$1 = temp__5720__auto___26837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26820_26838__$1)){
var c__4550__auto___26839 = cljs.core.chunk_first.call(null,seq__26820_26838__$1);
var G__26840 = cljs.core.chunk_rest.call(null,seq__26820_26838__$1);
var G__26841 = c__4550__auto___26839;
var G__26842 = cljs.core.count.call(null,c__4550__auto___26839);
var G__26843 = (0);
seq__26820_26828 = G__26840;
chunk__26821_26829 = G__26841;
count__26822_26830 = G__26842;
i__26823_26831 = G__26843;
continue;
} else {
var dep_26844 = cljs.core.first.call(null,seq__26820_26838__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26844;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26844));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26844,(depth + (1)),state);
} else {
}


var G__26845 = cljs.core.next.call(null,seq__26820_26838__$1);
var G__26846 = null;
var G__26847 = (0);
var G__26848 = (0);
seq__26820_26828 = G__26845;
chunk__26821_26829 = G__26846;
count__26822_26830 = G__26847;
i__26823_26831 = G__26848;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26824){
var vec__26825 = p__26824;
var seq__26826 = cljs.core.seq.call(null,vec__26825);
var first__26827 = cljs.core.first.call(null,seq__26826);
var seq__26826__$1 = cljs.core.next.call(null,seq__26826);
var x = first__26827;
var xs = seq__26826__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26825,seq__26826,first__26827,seq__26826__$1,x,xs,get_deps__$1){
return (function (p1__26811_SHARP_){
return clojure.set.difference.call(null,p1__26811_SHARP_,x);
});})(vec__26825,seq__26826,first__26827,seq__26826__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26849 = cljs.core.seq.call(null,provides);
var chunk__26850 = null;
var count__26851 = (0);
var i__26852 = (0);
while(true){
if((i__26852 < count__26851)){
var prov = cljs.core._nth.call(null,chunk__26850,i__26852);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26861_26869 = cljs.core.seq.call(null,requires);
var chunk__26862_26870 = null;
var count__26863_26871 = (0);
var i__26864_26872 = (0);
while(true){
if((i__26864_26872 < count__26863_26871)){
var req_26873 = cljs.core._nth.call(null,chunk__26862_26870,i__26864_26872);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26873,prov);


var G__26874 = seq__26861_26869;
var G__26875 = chunk__26862_26870;
var G__26876 = count__26863_26871;
var G__26877 = (i__26864_26872 + (1));
seq__26861_26869 = G__26874;
chunk__26862_26870 = G__26875;
count__26863_26871 = G__26876;
i__26864_26872 = G__26877;
continue;
} else {
var temp__5720__auto___26878 = cljs.core.seq.call(null,seq__26861_26869);
if(temp__5720__auto___26878){
var seq__26861_26879__$1 = temp__5720__auto___26878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26861_26879__$1)){
var c__4550__auto___26880 = cljs.core.chunk_first.call(null,seq__26861_26879__$1);
var G__26881 = cljs.core.chunk_rest.call(null,seq__26861_26879__$1);
var G__26882 = c__4550__auto___26880;
var G__26883 = cljs.core.count.call(null,c__4550__auto___26880);
var G__26884 = (0);
seq__26861_26869 = G__26881;
chunk__26862_26870 = G__26882;
count__26863_26871 = G__26883;
i__26864_26872 = G__26884;
continue;
} else {
var req_26885 = cljs.core.first.call(null,seq__26861_26879__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26885,prov);


var G__26886 = cljs.core.next.call(null,seq__26861_26879__$1);
var G__26887 = null;
var G__26888 = (0);
var G__26889 = (0);
seq__26861_26869 = G__26886;
chunk__26862_26870 = G__26887;
count__26863_26871 = G__26888;
i__26864_26872 = G__26889;
continue;
}
} else {
}
}
break;
}


var G__26890 = seq__26849;
var G__26891 = chunk__26850;
var G__26892 = count__26851;
var G__26893 = (i__26852 + (1));
seq__26849 = G__26890;
chunk__26850 = G__26891;
count__26851 = G__26892;
i__26852 = G__26893;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26849);
if(temp__5720__auto__){
var seq__26849__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26849__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26849__$1);
var G__26894 = cljs.core.chunk_rest.call(null,seq__26849__$1);
var G__26895 = c__4550__auto__;
var G__26896 = cljs.core.count.call(null,c__4550__auto__);
var G__26897 = (0);
seq__26849 = G__26894;
chunk__26850 = G__26895;
count__26851 = G__26896;
i__26852 = G__26897;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26849__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26865_26898 = cljs.core.seq.call(null,requires);
var chunk__26866_26899 = null;
var count__26867_26900 = (0);
var i__26868_26901 = (0);
while(true){
if((i__26868_26901 < count__26867_26900)){
var req_26902 = cljs.core._nth.call(null,chunk__26866_26899,i__26868_26901);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26902,prov);


var G__26903 = seq__26865_26898;
var G__26904 = chunk__26866_26899;
var G__26905 = count__26867_26900;
var G__26906 = (i__26868_26901 + (1));
seq__26865_26898 = G__26903;
chunk__26866_26899 = G__26904;
count__26867_26900 = G__26905;
i__26868_26901 = G__26906;
continue;
} else {
var temp__5720__auto___26907__$1 = cljs.core.seq.call(null,seq__26865_26898);
if(temp__5720__auto___26907__$1){
var seq__26865_26908__$1 = temp__5720__auto___26907__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26865_26908__$1)){
var c__4550__auto___26909 = cljs.core.chunk_first.call(null,seq__26865_26908__$1);
var G__26910 = cljs.core.chunk_rest.call(null,seq__26865_26908__$1);
var G__26911 = c__4550__auto___26909;
var G__26912 = cljs.core.count.call(null,c__4550__auto___26909);
var G__26913 = (0);
seq__26865_26898 = G__26910;
chunk__26866_26899 = G__26911;
count__26867_26900 = G__26912;
i__26868_26901 = G__26913;
continue;
} else {
var req_26914 = cljs.core.first.call(null,seq__26865_26908__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26914,prov);


var G__26915 = cljs.core.next.call(null,seq__26865_26908__$1);
var G__26916 = null;
var G__26917 = (0);
var G__26918 = (0);
seq__26865_26898 = G__26915;
chunk__26866_26899 = G__26916;
count__26867_26900 = G__26917;
i__26868_26901 = G__26918;
continue;
}
} else {
}
}
break;
}


var G__26919 = cljs.core.next.call(null,seq__26849__$1);
var G__26920 = null;
var G__26921 = (0);
var G__26922 = (0);
seq__26849 = G__26919;
chunk__26850 = G__26920;
count__26851 = G__26921;
i__26852 = G__26922;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26923_26927 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26924_26928 = null;
var count__26925_26929 = (0);
var i__26926_26930 = (0);
while(true){
if((i__26926_26930 < count__26925_26929)){
var ns_26931 = cljs.core._nth.call(null,chunk__26924_26928,i__26926_26930);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26931);


var G__26932 = seq__26923_26927;
var G__26933 = chunk__26924_26928;
var G__26934 = count__26925_26929;
var G__26935 = (i__26926_26930 + (1));
seq__26923_26927 = G__26932;
chunk__26924_26928 = G__26933;
count__26925_26929 = G__26934;
i__26926_26930 = G__26935;
continue;
} else {
var temp__5720__auto___26936 = cljs.core.seq.call(null,seq__26923_26927);
if(temp__5720__auto___26936){
var seq__26923_26937__$1 = temp__5720__auto___26936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26923_26937__$1)){
var c__4550__auto___26938 = cljs.core.chunk_first.call(null,seq__26923_26937__$1);
var G__26939 = cljs.core.chunk_rest.call(null,seq__26923_26937__$1);
var G__26940 = c__4550__auto___26938;
var G__26941 = cljs.core.count.call(null,c__4550__auto___26938);
var G__26942 = (0);
seq__26923_26927 = G__26939;
chunk__26924_26928 = G__26940;
count__26925_26929 = G__26941;
i__26926_26930 = G__26942;
continue;
} else {
var ns_26943 = cljs.core.first.call(null,seq__26923_26937__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26943);


var G__26944 = cljs.core.next.call(null,seq__26923_26937__$1);
var G__26945 = null;
var G__26946 = (0);
var G__26947 = (0);
seq__26923_26927 = G__26944;
chunk__26924_26928 = G__26945;
count__26925_26929 = G__26946;
i__26926_26930 = G__26947;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26948__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26949__i = 0, G__26949__a = new Array(arguments.length -  0);
while (G__26949__i < G__26949__a.length) {G__26949__a[G__26949__i] = arguments[G__26949__i + 0]; ++G__26949__i;}
  args = new cljs.core.IndexedSeq(G__26949__a,0,null);
} 
return G__26948__delegate.call(this,args);};
G__26948.cljs$lang$maxFixedArity = 0;
G__26948.cljs$lang$applyTo = (function (arglist__26950){
var args = cljs.core.seq(arglist__26950);
return G__26948__delegate(args);
});
G__26948.cljs$core$IFn$_invoke$arity$variadic = G__26948__delegate;
return G__26948;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26951_SHARP_,p2__26952_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26951_SHARP_)),p2__26952_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26953_SHARP_,p2__26954_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26953_SHARP_),p2__26954_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26955 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26955.addCallback(((function (G__26955){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26955))
);

G__26955.addErrback(((function (G__26955){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26955))
);

return G__26955;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26956){if((e26956 instanceof Error)){
var e = e26956;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26956;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26957){if((e26957 instanceof Error)){
var e = e26957;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26957;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26958 = cljs.core._EQ_;
var expr__26959 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26959))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26959))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26958.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26959))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26958,expr__26959){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26958,expr__26959))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26961,callback){
var map__26962 = p__26961;
var map__26962__$1 = (((((!((map__26962 == null))))?(((((map__26962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var file_msg = map__26962__$1;
var request_url = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26962,map__26962__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26962,map__26962__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__){
return (function (state_27000){
var state_val_27001 = (state_27000[(1)]);
if((state_val_27001 === (7))){
var inst_26996 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27002_27028 = state_27000__$1;
(statearr_27002_27028[(2)] = inst_26996);

(statearr_27002_27028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (1))){
var state_27000__$1 = state_27000;
var statearr_27003_27029 = state_27000__$1;
(statearr_27003_27029[(2)] = null);

(statearr_27003_27029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (4))){
var inst_26966 = (state_27000[(7)]);
var inst_26966__$1 = (state_27000[(2)]);
var state_27000__$1 = (function (){var statearr_27004 = state_27000;
(statearr_27004[(7)] = inst_26966__$1);

return statearr_27004;
})();
if(cljs.core.truth_(inst_26966__$1)){
var statearr_27005_27030 = state_27000__$1;
(statearr_27005_27030[(1)] = (5));

} else {
var statearr_27006_27031 = state_27000__$1;
(statearr_27006_27031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (15))){
var inst_26979 = (state_27000[(8)]);
var inst_26981 = (state_27000[(9)]);
var inst_26983 = inst_26981.call(null,inst_26979);
var state_27000__$1 = state_27000;
var statearr_27007_27032 = state_27000__$1;
(statearr_27007_27032[(2)] = inst_26983);

(statearr_27007_27032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (13))){
var inst_26990 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27008_27033 = state_27000__$1;
(statearr_27008_27033[(2)] = inst_26990);

(statearr_27008_27033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (6))){
var state_27000__$1 = state_27000;
var statearr_27009_27034 = state_27000__$1;
(statearr_27009_27034[(2)] = null);

(statearr_27009_27034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (17))){
var inst_26987 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27010_27035 = state_27000__$1;
(statearr_27010_27035[(2)] = inst_26987);

(statearr_27010_27035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (3))){
var inst_26998 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27000__$1,inst_26998);
} else {
if((state_val_27001 === (12))){
var state_27000__$1 = state_27000;
var statearr_27011_27036 = state_27000__$1;
(statearr_27011_27036[(2)] = null);

(statearr_27011_27036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (2))){
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27000__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27001 === (11))){
var inst_26971 = (state_27000[(10)]);
var inst_26977 = figwheel.client.file_reloading.blocking_load.call(null,inst_26971);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27000__$1,(14),inst_26977);
} else {
if((state_val_27001 === (9))){
var inst_26971 = (state_27000[(10)]);
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26971)){
var statearr_27012_27037 = state_27000__$1;
(statearr_27012_27037[(1)] = (11));

} else {
var statearr_27013_27038 = state_27000__$1;
(statearr_27013_27038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (5))){
var inst_26966 = (state_27000[(7)]);
var inst_26972 = (state_27000[(11)]);
var inst_26971 = cljs.core.nth.call(null,inst_26966,(0),null);
var inst_26972__$1 = cljs.core.nth.call(null,inst_26966,(1),null);
var state_27000__$1 = (function (){var statearr_27014 = state_27000;
(statearr_27014[(11)] = inst_26972__$1);

(statearr_27014[(10)] = inst_26971);

return statearr_27014;
})();
if(cljs.core.truth_(inst_26972__$1)){
var statearr_27015_27039 = state_27000__$1;
(statearr_27015_27039[(1)] = (8));

} else {
var statearr_27016_27040 = state_27000__$1;
(statearr_27016_27040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (14))){
var inst_26981 = (state_27000[(9)]);
var inst_26971 = (state_27000[(10)]);
var inst_26979 = (state_27000[(2)]);
var inst_26980 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26981__$1 = cljs.core.get.call(null,inst_26980,inst_26971);
var state_27000__$1 = (function (){var statearr_27017 = state_27000;
(statearr_27017[(8)] = inst_26979);

(statearr_27017[(9)] = inst_26981__$1);

return statearr_27017;
})();
if(cljs.core.truth_(inst_26981__$1)){
var statearr_27018_27041 = state_27000__$1;
(statearr_27018_27041[(1)] = (15));

} else {
var statearr_27019_27042 = state_27000__$1;
(statearr_27019_27042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (16))){
var inst_26979 = (state_27000[(8)]);
var inst_26985 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26979);
var state_27000__$1 = state_27000;
var statearr_27020_27043 = state_27000__$1;
(statearr_27020_27043[(2)] = inst_26985);

(statearr_27020_27043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (10))){
var inst_26992 = (state_27000[(2)]);
var state_27000__$1 = (function (){var statearr_27021 = state_27000;
(statearr_27021[(12)] = inst_26992);

return statearr_27021;
})();
var statearr_27022_27044 = state_27000__$1;
(statearr_27022_27044[(2)] = null);

(statearr_27022_27044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (8))){
var inst_26972 = (state_27000[(11)]);
var inst_26974 = eval(inst_26972);
var state_27000__$1 = state_27000;
var statearr_27023_27045 = state_27000__$1;
(statearr_27023_27045[(2)] = inst_26974);

(statearr_27023_27045[(1)] = (10));


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
});})(c__24843__auto__))
;
return ((function (switch__24748__auto__,c__24843__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24749__auto__ = null;
var figwheel$client$file_reloading$state_machine__24749__auto____0 = (function (){
var statearr_27024 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27024[(0)] = figwheel$client$file_reloading$state_machine__24749__auto__);

(statearr_27024[(1)] = (1));

return statearr_27024;
});
var figwheel$client$file_reloading$state_machine__24749__auto____1 = (function (state_27000){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27025){if((e27025 instanceof Object)){
var ex__24752__auto__ = e27025;
var statearr_27026_27046 = state_27000;
(statearr_27026_27046[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_27000;
state_27000 = G__27047;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24749__auto__ = function(state_27000){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24749__auto____1.call(this,state_27000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24749__auto____0;
figwheel$client$file_reloading$state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24749__auto____1;
return figwheel$client$file_reloading$state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__))
})();
var state__24845__auto__ = (function (){var statearr_27027 = f__24844__auto__.call(null);
(statearr_27027[(6)] = c__24843__auto__);

return statearr_27027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__))
);

return c__24843__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27049 = arguments.length;
switch (G__27049) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27051,callback){
var map__27052 = p__27051;
var map__27052__$1 = (((((!((map__27052 == null))))?(((((map__27052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27052):map__27052);
var file_msg = map__27052__$1;
var namespace = cljs.core.get.call(null,map__27052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27052,map__27052__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27052,map__27052__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27054){
var map__27055 = p__27054;
var map__27055__$1 = (((((!((map__27055 == null))))?(((((map__27055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27055):map__27055);
var file_msg = map__27055__$1;
var namespace = cljs.core.get.call(null,map__27055__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27057){
var map__27058 = p__27057;
var map__27058__$1 = (((((!((map__27058 == null))))?(((((map__27058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27058):map__27058);
var file_msg = map__27058__$1;
var namespace = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27060,callback){
var map__27061 = p__27060;
var map__27061__$1 = (((((!((map__27061 == null))))?(((((map__27061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27061):map__27061);
var file_msg = map__27061__$1;
var request_url = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24843__auto___27111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto___27111,out){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto___27111,out){
return (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (1))){
var inst_27070 = cljs.core.seq.call(null,files);
var inst_27071 = cljs.core.first.call(null,inst_27070);
var inst_27072 = cljs.core.next.call(null,inst_27070);
var inst_27073 = files;
var state_27096__$1 = (function (){var statearr_27098 = state_27096;
(statearr_27098[(7)] = inst_27073);

(statearr_27098[(8)] = inst_27071);

(statearr_27098[(9)] = inst_27072);

return statearr_27098;
})();
var statearr_27099_27112 = state_27096__$1;
(statearr_27099_27112[(2)] = null);

(statearr_27099_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (2))){
var inst_27073 = (state_27096[(7)]);
var inst_27079 = (state_27096[(10)]);
var inst_27078 = cljs.core.seq.call(null,inst_27073);
var inst_27079__$1 = cljs.core.first.call(null,inst_27078);
var inst_27080 = cljs.core.next.call(null,inst_27078);
var inst_27081 = (inst_27079__$1 == null);
var inst_27082 = cljs.core.not.call(null,inst_27081);
var state_27096__$1 = (function (){var statearr_27100 = state_27096;
(statearr_27100[(11)] = inst_27080);

(statearr_27100[(10)] = inst_27079__$1);

return statearr_27100;
})();
if(inst_27082){
var statearr_27101_27113 = state_27096__$1;
(statearr_27101_27113[(1)] = (4));

} else {
var statearr_27102_27114 = state_27096__$1;
(statearr_27102_27114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (3))){
var inst_27094 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27096__$1,inst_27094);
} else {
if((state_val_27097 === (4))){
var inst_27079 = (state_27096[(10)]);
var inst_27084 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27079);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27096__$1,(7),inst_27084);
} else {
if((state_val_27097 === (5))){
var inst_27090 = cljs.core.async.close_BANG_.call(null,out);
var state_27096__$1 = state_27096;
var statearr_27103_27115 = state_27096__$1;
(statearr_27103_27115[(2)] = inst_27090);

(statearr_27103_27115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (6))){
var inst_27092 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27104_27116 = state_27096__$1;
(statearr_27104_27116[(2)] = inst_27092);

(statearr_27104_27116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (7))){
var inst_27080 = (state_27096[(11)]);
var inst_27086 = (state_27096[(2)]);
var inst_27087 = cljs.core.async.put_BANG_.call(null,out,inst_27086);
var inst_27073 = inst_27080;
var state_27096__$1 = (function (){var statearr_27105 = state_27096;
(statearr_27105[(7)] = inst_27073);

(statearr_27105[(12)] = inst_27087);

return statearr_27105;
})();
var statearr_27106_27117 = state_27096__$1;
(statearr_27106_27117[(2)] = null);

(statearr_27106_27117[(1)] = (2));


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
});})(c__24843__auto___27111,out))
;
return ((function (switch__24748__auto__,c__24843__auto___27111,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____0 = (function (){
var statearr_27107 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27107[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__);

(statearr_27107[(1)] = (1));

return statearr_27107;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____1 = (function (state_27096){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object)){
var ex__24752__auto__ = e27108;
var statearr_27109_27118 = state_27096;
(statearr_27109_27118[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27119 = state_27096;
state_27096 = G__27119;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto___27111,out))
})();
var state__24845__auto__ = (function (){var statearr_27110 = f__24844__auto__.call(null);
(statearr_27110[(6)] = c__24843__auto___27111);

return statearr_27110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto___27111,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27120,opts){
var map__27121 = p__27120;
var map__27121__$1 = (((((!((map__27121 == null))))?(((((map__27121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27121):map__27121);
var eval_body = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27123){var e = e27123;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27124_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27124_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27125){
var vec__27126 = p__27125;
var k = cljs.core.nth.call(null,vec__27126,(0),null);
var v = cljs.core.nth.call(null,vec__27126,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27129){
var vec__27130 = p__27129;
var k = cljs.core.nth.call(null,vec__27130,(0),null);
var v = cljs.core.nth.call(null,vec__27130,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27136,p__27137){
var map__27138 = p__27136;
var map__27138__$1 = (((((!((map__27138 == null))))?(((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var opts = map__27138__$1;
var before_jsload = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27139 = p__27137;
var map__27139__$1 = (((((!((map__27139 == null))))?(((((map__27139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27139):map__27139);
var msg = map__27139__$1;
var files = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24844__auto__ = (function (){var switch__24748__auto__ = ((function (c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27293){
var state_val_27294 = (state_27293[(1)]);
if((state_val_27294 === (7))){
var inst_27155 = (state_27293[(7)]);
var inst_27154 = (state_27293[(8)]);
var inst_27153 = (state_27293[(9)]);
var inst_27156 = (state_27293[(10)]);
var inst_27161 = cljs.core._nth.call(null,inst_27154,inst_27156);
var inst_27162 = figwheel.client.file_reloading.eval_body.call(null,inst_27161,opts);
var inst_27163 = (inst_27156 + (1));
var tmp27295 = inst_27155;
var tmp27296 = inst_27154;
var tmp27297 = inst_27153;
var inst_27153__$1 = tmp27297;
var inst_27154__$1 = tmp27296;
var inst_27155__$1 = tmp27295;
var inst_27156__$1 = inst_27163;
var state_27293__$1 = (function (){var statearr_27298 = state_27293;
(statearr_27298[(7)] = inst_27155__$1);

(statearr_27298[(11)] = inst_27162);

(statearr_27298[(8)] = inst_27154__$1);

(statearr_27298[(9)] = inst_27153__$1);

(statearr_27298[(10)] = inst_27156__$1);

return statearr_27298;
})();
var statearr_27299_27382 = state_27293__$1;
(statearr_27299_27382[(2)] = null);

(statearr_27299_27382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (20))){
var inst_27196 = (state_27293[(12)]);
var inst_27204 = figwheel.client.file_reloading.sort_files.call(null,inst_27196);
var state_27293__$1 = state_27293;
var statearr_27300_27383 = state_27293__$1;
(statearr_27300_27383[(2)] = inst_27204);

(statearr_27300_27383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (27))){
var state_27293__$1 = state_27293;
var statearr_27301_27384 = state_27293__$1;
(statearr_27301_27384[(2)] = null);

(statearr_27301_27384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (1))){
var inst_27145 = (state_27293[(13)]);
var inst_27142 = before_jsload.call(null,files);
var inst_27143 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27144 = (function (){return ((function (inst_27145,inst_27142,inst_27143,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27133_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27133_SHARP_);
});
;})(inst_27145,inst_27142,inst_27143,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27145__$1 = cljs.core.filter.call(null,inst_27144,files);
var inst_27146 = cljs.core.not_empty.call(null,inst_27145__$1);
var state_27293__$1 = (function (){var statearr_27302 = state_27293;
(statearr_27302[(14)] = inst_27142);

(statearr_27302[(15)] = inst_27143);

(statearr_27302[(13)] = inst_27145__$1);

return statearr_27302;
})();
if(cljs.core.truth_(inst_27146)){
var statearr_27303_27385 = state_27293__$1;
(statearr_27303_27385[(1)] = (2));

} else {
var statearr_27304_27386 = state_27293__$1;
(statearr_27304_27386[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (24))){
var state_27293__$1 = state_27293;
var statearr_27305_27387 = state_27293__$1;
(statearr_27305_27387[(2)] = null);

(statearr_27305_27387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (39))){
var inst_27246 = (state_27293[(16)]);
var state_27293__$1 = state_27293;
var statearr_27306_27388 = state_27293__$1;
(statearr_27306_27388[(2)] = inst_27246);

(statearr_27306_27388[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (46))){
var inst_27288 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27307_27389 = state_27293__$1;
(statearr_27307_27389[(2)] = inst_27288);

(statearr_27307_27389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (4))){
var inst_27190 = (state_27293[(2)]);
var inst_27191 = cljs.core.List.EMPTY;
var inst_27192 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27191);
var inst_27193 = (function (){return ((function (inst_27190,inst_27191,inst_27192,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27134_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27134_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27134_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27134_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27190,inst_27191,inst_27192,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27194 = cljs.core.filter.call(null,inst_27193,files);
var inst_27195 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27196 = cljs.core.concat.call(null,inst_27194,inst_27195);
var state_27293__$1 = (function (){var statearr_27308 = state_27293;
(statearr_27308[(17)] = inst_27192);

(statearr_27308[(12)] = inst_27196);

(statearr_27308[(18)] = inst_27190);

return statearr_27308;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27309_27390 = state_27293__$1;
(statearr_27309_27390[(1)] = (16));

} else {
var statearr_27310_27391 = state_27293__$1;
(statearr_27310_27391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (15))){
var inst_27180 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27311_27392 = state_27293__$1;
(statearr_27311_27392[(2)] = inst_27180);

(statearr_27311_27392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (21))){
var inst_27206 = (state_27293[(19)]);
var inst_27206__$1 = (state_27293[(2)]);
var inst_27207 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27206__$1);
var state_27293__$1 = (function (){var statearr_27312 = state_27293;
(statearr_27312[(19)] = inst_27206__$1);

return statearr_27312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27293__$1,(22),inst_27207);
} else {
if((state_val_27294 === (31))){
var inst_27291 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27293__$1,inst_27291);
} else {
if((state_val_27294 === (32))){
var inst_27246 = (state_27293[(16)]);
var inst_27251 = inst_27246.cljs$lang$protocol_mask$partition0$;
var inst_27252 = (inst_27251 & (64));
var inst_27253 = inst_27246.cljs$core$ISeq$;
var inst_27254 = (cljs.core.PROTOCOL_SENTINEL === inst_27253);
var inst_27255 = ((inst_27252) || (inst_27254));
var state_27293__$1 = state_27293;
if(cljs.core.truth_(inst_27255)){
var statearr_27313_27393 = state_27293__$1;
(statearr_27313_27393[(1)] = (35));

} else {
var statearr_27314_27394 = state_27293__$1;
(statearr_27314_27394[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (40))){
var inst_27268 = (state_27293[(20)]);
var inst_27267 = (state_27293[(2)]);
var inst_27268__$1 = cljs.core.get.call(null,inst_27267,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27269 = cljs.core.get.call(null,inst_27267,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27270 = cljs.core.not_empty.call(null,inst_27268__$1);
var state_27293__$1 = (function (){var statearr_27315 = state_27293;
(statearr_27315[(20)] = inst_27268__$1);

(statearr_27315[(21)] = inst_27269);

return statearr_27315;
})();
if(cljs.core.truth_(inst_27270)){
var statearr_27316_27395 = state_27293__$1;
(statearr_27316_27395[(1)] = (41));

} else {
var statearr_27317_27396 = state_27293__$1;
(statearr_27317_27396[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (33))){
var state_27293__$1 = state_27293;
var statearr_27318_27397 = state_27293__$1;
(statearr_27318_27397[(2)] = false);

(statearr_27318_27397[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (13))){
var inst_27166 = (state_27293[(22)]);
var inst_27170 = cljs.core.chunk_first.call(null,inst_27166);
var inst_27171 = cljs.core.chunk_rest.call(null,inst_27166);
var inst_27172 = cljs.core.count.call(null,inst_27170);
var inst_27153 = inst_27171;
var inst_27154 = inst_27170;
var inst_27155 = inst_27172;
var inst_27156 = (0);
var state_27293__$1 = (function (){var statearr_27319 = state_27293;
(statearr_27319[(7)] = inst_27155);

(statearr_27319[(8)] = inst_27154);

(statearr_27319[(9)] = inst_27153);

(statearr_27319[(10)] = inst_27156);

return statearr_27319;
})();
var statearr_27320_27398 = state_27293__$1;
(statearr_27320_27398[(2)] = null);

(statearr_27320_27398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (22))){
var inst_27209 = (state_27293[(23)]);
var inst_27214 = (state_27293[(24)]);
var inst_27210 = (state_27293[(25)]);
var inst_27206 = (state_27293[(19)]);
var inst_27209__$1 = (state_27293[(2)]);
var inst_27210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27209__$1);
var inst_27211 = (function (){var all_files = inst_27206;
var res_SINGLEQUOTE_ = inst_27209__$1;
var res = inst_27210__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27209,inst_27214,inst_27210,inst_27206,inst_27209__$1,inst_27210__$1,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27135_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27135_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27209,inst_27214,inst_27210,inst_27206,inst_27209__$1,inst_27210__$1,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27212 = cljs.core.filter.call(null,inst_27211,inst_27209__$1);
var inst_27213 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27214__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27213);
var inst_27215 = cljs.core.not_empty.call(null,inst_27214__$1);
var state_27293__$1 = (function (){var statearr_27321 = state_27293;
(statearr_27321[(23)] = inst_27209__$1);

(statearr_27321[(26)] = inst_27212);

(statearr_27321[(24)] = inst_27214__$1);

(statearr_27321[(25)] = inst_27210__$1);

return statearr_27321;
})();
if(cljs.core.truth_(inst_27215)){
var statearr_27322_27399 = state_27293__$1;
(statearr_27322_27399[(1)] = (23));

} else {
var statearr_27323_27400 = state_27293__$1;
(statearr_27323_27400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (36))){
var state_27293__$1 = state_27293;
var statearr_27324_27401 = state_27293__$1;
(statearr_27324_27401[(2)] = false);

(statearr_27324_27401[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (41))){
var inst_27268 = (state_27293[(20)]);
var inst_27272 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27273 = cljs.core.map.call(null,inst_27272,inst_27268);
var inst_27274 = cljs.core.pr_str.call(null,inst_27273);
var inst_27275 = ["figwheel-no-load meta-data: ",inst_27274].join('');
var inst_27276 = figwheel.client.utils.log.call(null,inst_27275);
var state_27293__$1 = state_27293;
var statearr_27325_27402 = state_27293__$1;
(statearr_27325_27402[(2)] = inst_27276);

(statearr_27325_27402[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (43))){
var inst_27269 = (state_27293[(21)]);
var inst_27279 = (state_27293[(2)]);
var inst_27280 = cljs.core.not_empty.call(null,inst_27269);
var state_27293__$1 = (function (){var statearr_27326 = state_27293;
(statearr_27326[(27)] = inst_27279);

return statearr_27326;
})();
if(cljs.core.truth_(inst_27280)){
var statearr_27327_27403 = state_27293__$1;
(statearr_27327_27403[(1)] = (44));

} else {
var statearr_27328_27404 = state_27293__$1;
(statearr_27328_27404[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (29))){
var inst_27209 = (state_27293[(23)]);
var inst_27212 = (state_27293[(26)]);
var inst_27214 = (state_27293[(24)]);
var inst_27246 = (state_27293[(16)]);
var inst_27210 = (state_27293[(25)]);
var inst_27206 = (state_27293[(19)]);
var inst_27242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27245 = (function (){var all_files = inst_27206;
var res_SINGLEQUOTE_ = inst_27209;
var res = inst_27210;
var files_not_loaded = inst_27212;
var dependencies_that_loaded = inst_27214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27246,inst_27210,inst_27206,inst_27242,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27244){
var map__27329 = p__27244;
var map__27329__$1 = (((((!((map__27329 == null))))?(((((map__27329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27329):map__27329);
var namespace = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27246,inst_27210,inst_27206,inst_27242,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27246__$1 = cljs.core.group_by.call(null,inst_27245,inst_27212);
var inst_27248 = (inst_27246__$1 == null);
var inst_27249 = cljs.core.not.call(null,inst_27248);
var state_27293__$1 = (function (){var statearr_27331 = state_27293;
(statearr_27331[(16)] = inst_27246__$1);

(statearr_27331[(28)] = inst_27242);

return statearr_27331;
})();
if(inst_27249){
var statearr_27332_27405 = state_27293__$1;
(statearr_27332_27405[(1)] = (32));

} else {
var statearr_27333_27406 = state_27293__$1;
(statearr_27333_27406[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (44))){
var inst_27269 = (state_27293[(21)]);
var inst_27282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27269);
var inst_27283 = cljs.core.pr_str.call(null,inst_27282);
var inst_27284 = ["not required: ",inst_27283].join('');
var inst_27285 = figwheel.client.utils.log.call(null,inst_27284);
var state_27293__$1 = state_27293;
var statearr_27334_27407 = state_27293__$1;
(statearr_27334_27407[(2)] = inst_27285);

(statearr_27334_27407[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (6))){
var inst_27187 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27335_27408 = state_27293__$1;
(statearr_27335_27408[(2)] = inst_27187);

(statearr_27335_27408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (28))){
var inst_27212 = (state_27293[(26)]);
var inst_27239 = (state_27293[(2)]);
var inst_27240 = cljs.core.not_empty.call(null,inst_27212);
var state_27293__$1 = (function (){var statearr_27336 = state_27293;
(statearr_27336[(29)] = inst_27239);

return statearr_27336;
})();
if(cljs.core.truth_(inst_27240)){
var statearr_27337_27409 = state_27293__$1;
(statearr_27337_27409[(1)] = (29));

} else {
var statearr_27338_27410 = state_27293__$1;
(statearr_27338_27410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (25))){
var inst_27210 = (state_27293[(25)]);
var inst_27226 = (state_27293[(2)]);
var inst_27227 = cljs.core.not_empty.call(null,inst_27210);
var state_27293__$1 = (function (){var statearr_27339 = state_27293;
(statearr_27339[(30)] = inst_27226);

return statearr_27339;
})();
if(cljs.core.truth_(inst_27227)){
var statearr_27340_27411 = state_27293__$1;
(statearr_27340_27411[(1)] = (26));

} else {
var statearr_27341_27412 = state_27293__$1;
(statearr_27341_27412[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (34))){
var inst_27262 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
if(cljs.core.truth_(inst_27262)){
var statearr_27342_27413 = state_27293__$1;
(statearr_27342_27413[(1)] = (38));

} else {
var statearr_27343_27414 = state_27293__$1;
(statearr_27343_27414[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (17))){
var state_27293__$1 = state_27293;
var statearr_27344_27415 = state_27293__$1;
(statearr_27344_27415[(2)] = recompile_dependents);

(statearr_27344_27415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (3))){
var state_27293__$1 = state_27293;
var statearr_27345_27416 = state_27293__$1;
(statearr_27345_27416[(2)] = null);

(statearr_27345_27416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (12))){
var inst_27183 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27346_27417 = state_27293__$1;
(statearr_27346_27417[(2)] = inst_27183);

(statearr_27346_27417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (2))){
var inst_27145 = (state_27293[(13)]);
var inst_27152 = cljs.core.seq.call(null,inst_27145);
var inst_27153 = inst_27152;
var inst_27154 = null;
var inst_27155 = (0);
var inst_27156 = (0);
var state_27293__$1 = (function (){var statearr_27347 = state_27293;
(statearr_27347[(7)] = inst_27155);

(statearr_27347[(8)] = inst_27154);

(statearr_27347[(9)] = inst_27153);

(statearr_27347[(10)] = inst_27156);

return statearr_27347;
})();
var statearr_27348_27418 = state_27293__$1;
(statearr_27348_27418[(2)] = null);

(statearr_27348_27418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (23))){
var inst_27209 = (state_27293[(23)]);
var inst_27212 = (state_27293[(26)]);
var inst_27214 = (state_27293[(24)]);
var inst_27210 = (state_27293[(25)]);
var inst_27206 = (state_27293[(19)]);
var inst_27217 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27219 = (function (){var all_files = inst_27206;
var res_SINGLEQUOTE_ = inst_27209;
var res = inst_27210;
var files_not_loaded = inst_27212;
var dependencies_that_loaded = inst_27214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27217,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27218){
var map__27349 = p__27218;
var map__27349__$1 = (((((!((map__27349 == null))))?(((((map__27349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27349):map__27349);
var request_url = cljs.core.get.call(null,map__27349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27217,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27220 = cljs.core.reverse.call(null,inst_27214);
var inst_27221 = cljs.core.map.call(null,inst_27219,inst_27220);
var inst_27222 = cljs.core.pr_str.call(null,inst_27221);
var inst_27223 = figwheel.client.utils.log.call(null,inst_27222);
var state_27293__$1 = (function (){var statearr_27351 = state_27293;
(statearr_27351[(31)] = inst_27217);

return statearr_27351;
})();
var statearr_27352_27419 = state_27293__$1;
(statearr_27352_27419[(2)] = inst_27223);

(statearr_27352_27419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (35))){
var state_27293__$1 = state_27293;
var statearr_27353_27420 = state_27293__$1;
(statearr_27353_27420[(2)] = true);

(statearr_27353_27420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (19))){
var inst_27196 = (state_27293[(12)]);
var inst_27202 = figwheel.client.file_reloading.expand_files.call(null,inst_27196);
var state_27293__$1 = state_27293;
var statearr_27354_27421 = state_27293__$1;
(statearr_27354_27421[(2)] = inst_27202);

(statearr_27354_27421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (11))){
var state_27293__$1 = state_27293;
var statearr_27355_27422 = state_27293__$1;
(statearr_27355_27422[(2)] = null);

(statearr_27355_27422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (9))){
var inst_27185 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27356_27423 = state_27293__$1;
(statearr_27356_27423[(2)] = inst_27185);

(statearr_27356_27423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (5))){
var inst_27155 = (state_27293[(7)]);
var inst_27156 = (state_27293[(10)]);
var inst_27158 = (inst_27156 < inst_27155);
var inst_27159 = inst_27158;
var state_27293__$1 = state_27293;
if(cljs.core.truth_(inst_27159)){
var statearr_27357_27424 = state_27293__$1;
(statearr_27357_27424[(1)] = (7));

} else {
var statearr_27358_27425 = state_27293__$1;
(statearr_27358_27425[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (14))){
var inst_27166 = (state_27293[(22)]);
var inst_27175 = cljs.core.first.call(null,inst_27166);
var inst_27176 = figwheel.client.file_reloading.eval_body.call(null,inst_27175,opts);
var inst_27177 = cljs.core.next.call(null,inst_27166);
var inst_27153 = inst_27177;
var inst_27154 = null;
var inst_27155 = (0);
var inst_27156 = (0);
var state_27293__$1 = (function (){var statearr_27359 = state_27293;
(statearr_27359[(7)] = inst_27155);

(statearr_27359[(32)] = inst_27176);

(statearr_27359[(8)] = inst_27154);

(statearr_27359[(9)] = inst_27153);

(statearr_27359[(10)] = inst_27156);

return statearr_27359;
})();
var statearr_27360_27426 = state_27293__$1;
(statearr_27360_27426[(2)] = null);

(statearr_27360_27426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (45))){
var state_27293__$1 = state_27293;
var statearr_27361_27427 = state_27293__$1;
(statearr_27361_27427[(2)] = null);

(statearr_27361_27427[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (26))){
var inst_27209 = (state_27293[(23)]);
var inst_27212 = (state_27293[(26)]);
var inst_27214 = (state_27293[(24)]);
var inst_27210 = (state_27293[(25)]);
var inst_27206 = (state_27293[(19)]);
var inst_27229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27231 = (function (){var all_files = inst_27206;
var res_SINGLEQUOTE_ = inst_27209;
var res = inst_27210;
var files_not_loaded = inst_27212;
var dependencies_that_loaded = inst_27214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27229,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27230){
var map__27362 = p__27230;
var map__27362__$1 = (((((!((map__27362 == null))))?(((((map__27362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27362):map__27362);
var namespace = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27229,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27232 = cljs.core.map.call(null,inst_27231,inst_27210);
var inst_27233 = cljs.core.pr_str.call(null,inst_27232);
var inst_27234 = figwheel.client.utils.log.call(null,inst_27233);
var inst_27235 = (function (){var all_files = inst_27206;
var res_SINGLEQUOTE_ = inst_27209;
var res = inst_27210;
var files_not_loaded = inst_27212;
var dependencies_that_loaded = inst_27214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27229,inst_27231,inst_27232,inst_27233,inst_27234,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27209,inst_27212,inst_27214,inst_27210,inst_27206,inst_27229,inst_27231,inst_27232,inst_27233,inst_27234,state_val_27294,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27236 = setTimeout(inst_27235,(10));
var state_27293__$1 = (function (){var statearr_27364 = state_27293;
(statearr_27364[(33)] = inst_27229);

(statearr_27364[(34)] = inst_27234);

return statearr_27364;
})();
var statearr_27365_27428 = state_27293__$1;
(statearr_27365_27428[(2)] = inst_27236);

(statearr_27365_27428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (16))){
var state_27293__$1 = state_27293;
var statearr_27366_27429 = state_27293__$1;
(statearr_27366_27429[(2)] = reload_dependents);

(statearr_27366_27429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (38))){
var inst_27246 = (state_27293[(16)]);
var inst_27264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27246);
var state_27293__$1 = state_27293;
var statearr_27367_27430 = state_27293__$1;
(statearr_27367_27430[(2)] = inst_27264);

(statearr_27367_27430[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (30))){
var state_27293__$1 = state_27293;
var statearr_27368_27431 = state_27293__$1;
(statearr_27368_27431[(2)] = null);

(statearr_27368_27431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (10))){
var inst_27166 = (state_27293[(22)]);
var inst_27168 = cljs.core.chunked_seq_QMARK_.call(null,inst_27166);
var state_27293__$1 = state_27293;
if(inst_27168){
var statearr_27369_27432 = state_27293__$1;
(statearr_27369_27432[(1)] = (13));

} else {
var statearr_27370_27433 = state_27293__$1;
(statearr_27370_27433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (18))){
var inst_27200 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
if(cljs.core.truth_(inst_27200)){
var statearr_27371_27434 = state_27293__$1;
(statearr_27371_27434[(1)] = (19));

} else {
var statearr_27372_27435 = state_27293__$1;
(statearr_27372_27435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (42))){
var state_27293__$1 = state_27293;
var statearr_27373_27436 = state_27293__$1;
(statearr_27373_27436[(2)] = null);

(statearr_27373_27436[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (37))){
var inst_27259 = (state_27293[(2)]);
var state_27293__$1 = state_27293;
var statearr_27374_27437 = state_27293__$1;
(statearr_27374_27437[(2)] = inst_27259);

(statearr_27374_27437[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27294 === (8))){
var inst_27166 = (state_27293[(22)]);
var inst_27153 = (state_27293[(9)]);
var inst_27166__$1 = cljs.core.seq.call(null,inst_27153);
var state_27293__$1 = (function (){var statearr_27375 = state_27293;
(statearr_27375[(22)] = inst_27166__$1);

return statearr_27375;
})();
if(inst_27166__$1){
var statearr_27376_27438 = state_27293__$1;
(statearr_27376_27438[(1)] = (10));

} else {
var statearr_27377_27439 = state_27293__$1;
(statearr_27377_27439[(1)] = (11));

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
});})(c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24748__auto__,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____0 = (function (){
var statearr_27378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27378[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__);

(statearr_27378[(1)] = (1));

return statearr_27378;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____1 = (function (state_27293){
while(true){
var ret_value__24750__auto__ = (function (){try{while(true){
var result__24751__auto__ = switch__24748__auto__.call(null,state_27293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24751__auto__;
}
break;
}
}catch (e27379){if((e27379 instanceof Object)){
var ex__24752__auto__ = e27379;
var statearr_27380_27440 = state_27293;
(statearr_27380_27440[(5)] = ex__24752__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27441 = state_27293;
state_27293 = G__27441;
continue;
} else {
return ret_value__24750__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__ = function(state_27293){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____1.call(this,state_27293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24749__auto__;
})()
;})(switch__24748__auto__,c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24845__auto__ = (function (){var statearr_27381 = f__24844__auto__.call(null);
(statearr_27381[(6)] = c__24843__auto__);

return statearr_27381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24845__auto__);
});})(c__24843__auto__,map__27138,map__27138__$1,opts,before_jsload,on_jsload,reload_dependents,map__27139,map__27139__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24843__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27444,link){
var map__27445 = p__27444;
var map__27445__$1 = (((((!((map__27445 == null))))?(((((map__27445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27445):map__27445);
var file = cljs.core.get.call(null,map__27445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__27445,map__27445__$1,file){
return (function (p1__27442_SHARP_,p2__27443_SHARP_){
if(cljs.core._EQ_.call(null,p1__27442_SHARP_,p2__27443_SHARP_)){
return p1__27442_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__27445,map__27445__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27448){
var map__27449 = p__27448;
var map__27449__$1 = (((((!((map__27449 == null))))?(((((map__27449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27449):map__27449);
var match_length = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27447_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27447_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27451_SHARP_,p2__27452_SHARP_){
return cljs.core.assoc.call(null,p1__27451_SHARP_,cljs.core.get.call(null,p2__27452_SHARP_,key),p2__27452_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27453 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27453);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27453);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27454,p__27455){
var map__27456 = p__27454;
var map__27456__$1 = (((((!((map__27456 == null))))?(((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var on_cssload = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27457 = p__27455;
var map__27457__$1 = (((((!((map__27457 == null))))?(((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var files_msg = map__27457__$1;
var files = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1652343001473
