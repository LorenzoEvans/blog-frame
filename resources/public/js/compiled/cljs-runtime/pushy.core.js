goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__39858 = h;
G__39858.setUseFragment(false);

G__39858.setPathPrefix("");

G__39858.setEnabled(true);

return G__39858;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__39860 = arguments.length;
switch (G__39860) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__39862 = arguments.length;
switch (G__39862) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4434__auto__.call(null,this$,token));
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4431__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4434__auto__.call(null,this$,token,title));
} else {
var m__4431__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4431__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__39864 = arguments.length;
switch (G__39864) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4434__auto__.call(null,this$,token));
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4431__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4434__auto__.call(null,this$,token,title));
} else {
var m__4431__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4431__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.get_token[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.get_token["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39914 = arguments.length;
var i__4731__auto___39915 = (0);
while(true){
if((i__4731__auto___39915 < len__4730__auto___39914)){
args__4736__auto__.push((arguments[i__4731__auto___39915]));

var G__39916 = (i__4731__auto___39915 + (1));
i__4731__auto___39915 = G__39916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__39868){
var map__39869 = p__39868;
var map__39869__$1 = (((((!((map__39869 == null))))?(((((map__39869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39869):map__39869);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39869__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39869__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39869__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core39871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core39871 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,history,processable_url_QMARK_,match_fn,map__39869,p__39868,meta39872){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.match_fn = match_fn;
this.map__39869 = map__39869;
this.p__39868 = p__39868;
this.meta39872 = meta39872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core39871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_39873,meta39872__$1){
var self__ = this;
var _39873__$1 = this;
return (new pushy.core.t_pushy$core39871(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.history,self__.processable_url_QMARK_,self__.match_fn,self__.map__39869,self__.p__39868,meta39872__$1));
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_39873){
var self__ = this;
var _39873__$1 = this;
return self__.meta39872;
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,(function (){var G__39874 = self__.history;
var G__39875 = goog.history.EventType.NAVIGATE;
var G__39876 = ((function (G__39874,G__39875,this$__$1,history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5735__auto__ = (function (){var G__39877 = (function (){var G__39878 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__39878) : self__.match_fn.call(null,G__39878));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__39877) : self__.identity_fn.call(null,G__39877));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
});})(G__39874,G__39875,this$__$1,history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;
return goog.events.listen(G__39874,G__39875,G__39876);
})());

var temp__5735__auto___39917 = (function (){var G__39879 = (function (){var G__39880 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__39880) : self__.match_fn.call(null,G__39880));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__39879) : self__.identity_fn.call(null,G__39879));
})();
if(cljs.core.truth_(temp__5735__auto___39917)){
var match_39918 = temp__5735__auto___39917;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_39918) : self__.dispatch_fn.call(null,match_39918));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click(((function (this$__$1,history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (e){
var temp__5735__auto__ = (function (){var G__39881 = e;
var G__39881__$1 = (((G__39881 == null))?null:G__39881.target);
if((G__39881__$1 == null)){
return null;
} else {
return G__39881__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4120__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not(e.altKey)) && (cljs.core.not(e.ctrlKey)) && (cljs.core.not(e.metaKey)) && (cljs.core.not(e.shiftKey)) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)));
} else {
return and__4120__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__39882 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__39882) : self__.identity_fn.call(null,G__39882));
})())){
var temp__5733__auto___39919 = el.title;
if(cljs.core.truth_(temp__5733__auto___39919)){
var title_39920 = temp__5733__auto___39919;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_39920);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
));

return null;
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__39883_39921 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__39884_39922 = null;
var count__39885_39923 = (0);
var i__39886_39924 = (0);
while(true){
if((i__39886_39924 < count__39885_39923)){
var key_39925 = chunk__39884_39922.cljs$core$IIndexed$_nth$arity$2(null,i__39886_39924);
goog.events.unlistenByKey(key_39925);


var G__39926 = seq__39883_39921;
var G__39927 = chunk__39884_39922;
var G__39928 = count__39885_39923;
var G__39929 = (i__39886_39924 + (1));
seq__39883_39921 = G__39926;
chunk__39884_39922 = G__39927;
count__39885_39923 = G__39928;
i__39886_39924 = G__39929;
continue;
} else {
var temp__5735__auto___39930 = cljs.core.seq(seq__39883_39921);
if(temp__5735__auto___39930){
var seq__39883_39931__$1 = temp__5735__auto___39930;
if(cljs.core.chunked_seq_QMARK_(seq__39883_39931__$1)){
var c__4550__auto___39932 = cljs.core.chunk_first(seq__39883_39931__$1);
var G__39933 = cljs.core.chunk_rest(seq__39883_39931__$1);
var G__39934 = c__4550__auto___39932;
var G__39935 = cljs.core.count(c__4550__auto___39932);
var G__39936 = (0);
seq__39883_39921 = G__39933;
chunk__39884_39922 = G__39934;
count__39885_39923 = G__39935;
i__39886_39924 = G__39936;
continue;
} else {
var key_39937 = cljs.core.first(seq__39883_39931__$1);
goog.events.unlistenByKey(key_39937);


var G__39938 = cljs.core.next(seq__39883_39931__$1);
var G__39939 = null;
var G__39940 = (0);
var G__39941 = (0);
seq__39883_39921 = G__39938;
chunk__39884_39922 = G__39939;
count__39885_39923 = G__39940;
i__39886_39924 = G__39941;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.getBasis = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"map__39869","map__39869",1703656703,null),new cljs.core.Symbol(null,"p__39868","p__39868",-1756726497,null),new cljs.core.Symbol(null,"meta39872","meta39872",-11762590,null)], null);
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

pushy.core.t_pushy$core39871.cljs$lang$type = true;

pushy.core.t_pushy$core39871.cljs$lang$ctorStr = "pushy.core/t_pushy$core39871";

pushy.core.t_pushy$core39871.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"pushy.core/t_pushy$core39871");
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

/**
 * Positional factory function for pushy.core/t_pushy$core39871.
 */
pushy.core.__GT_t_pushy$core39871 = ((function (history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_){
return (function pushy$core$__GT_t_pushy$core39871(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,history__$1,processable_url_QMARK___$1,match_fn__$1,map__39869__$2,p__39868__$1,meta39872){
return (new pushy.core.t_pushy$core39871(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,history__$1,processable_url_QMARK___$1,match_fn__$1,map__39869__$2,p__39868__$1,meta39872));
});})(history,event_keys,map__39869,map__39869__$1,processable_url_QMARK_,identity_fn,prevent_default_when_no_match_QMARK_))
;

}

return (new pushy.core.t_pushy$core39871(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,history,processable_url_QMARK_,match_fn,map__39869__$1,p__39868,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
pushy.core.pushy.cljs$lang$applyTo = (function (seq39865){
var G__39866 = cljs.core.first(seq39865);
var seq39865__$1 = cljs.core.next(seq39865);
var G__39867 = cljs.core.first(seq39865__$1);
var seq39865__$2 = cljs.core.next(seq39865__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39866,G__39867,seq39865__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__39888 = arguments.length;
switch (G__39888) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__39890 = arguments.length;
switch (G__39890) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=pushy.core.js.map
