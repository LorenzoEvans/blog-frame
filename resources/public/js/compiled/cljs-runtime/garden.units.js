goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.util');
garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__40746,right){
var map__40747 = p__40746;
var map__40747__$1 = (((((!((map__40747 == null))))?(((((map__40747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40747):map__40747);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40747__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40747__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.name(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__5735__auto__ = cljs.core.re_matches(garden.units.unit_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__40749 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40749,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40749,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40749,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(garden.units.unit_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return garden.units.convert(x,unit);
}
} else {
var ex_message = garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type.getName(),cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__40752 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__40752__$1 = (((((!((map__40752 == null))))?(((((map__40752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40752):map__40752);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__40753 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__40753__$1 = (((((!((map__40753 == null))))?(((((map__40753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40753):map__40753);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40753__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__40756 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40756) : u.call(null,G__40756));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__40871__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__40871 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__40873__i = 0, G__40873__a = new Array(arguments.length -  2);
while (G__40873__i < G__40873__a.length) {G__40873__a[G__40873__i] = arguments[G__40873__i + 2]; ++G__40873__i;}
  more = new cljs.core.IndexedSeq(G__40873__a,0,null);
} 
return G__40871__delegate.call(this,x,y,more);};
G__40871.cljs$lang$maxFixedArity = 2;
G__40871.cljs$lang$applyTo = (function (arglist__40874){
var x = cljs.core.first(arglist__40874);
arglist__40874 = cljs.core.next(arglist__40874);
var y = cljs.core.first(arglist__40874);
var more = cljs.core.rest(arglist__40874);
return G__40871__delegate(x,y,more);
});
G__40871.cljs$core$IFn$_invoke$arity$variadic = G__40871__delegate;
return G__40871;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__40876 = null;
if (arguments.length > 2) {
var G__40877__i = 0, G__40877__a = new Array(arguments.length -  2);
while (G__40877__i < G__40877__a.length) {G__40877__a[G__40877__i] = arguments[G__40877__i + 2]; ++G__40877__i;}
G__40876 = new cljs.core.IndexedSeq(G__40877__a,0,null);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__40876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__40757 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40757) : u.call(null,G__40757));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__40758 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__40758__$1 = (((((!((map__40758 == null))))?(((((map__40758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40758):map__40758);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__40759 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__40759__$1 = (((((!((map__40759 == null))))?(((((map__40759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40759):map__40759);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40759__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__40762 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40762) : u.call(null,G__40762));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__40883__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__40883 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__40884__i = 0, G__40884__a = new Array(arguments.length -  2);
while (G__40884__i < G__40884__a.length) {G__40884__a[G__40884__i] = arguments[G__40884__i + 2]; ++G__40884__i;}
  more = new cljs.core.IndexedSeq(G__40884__a,0,null);
} 
return G__40883__delegate.call(this,x,y,more);};
G__40883.cljs$lang$maxFixedArity = 2;
G__40883.cljs$lang$applyTo = (function (arglist__40885){
var x = cljs.core.first(arglist__40885);
arglist__40885 = cljs.core.next(arglist__40885);
var y = cljs.core.first(arglist__40885);
var more = cljs.core.rest(arglist__40885);
return G__40883__delegate(x,y,more);
});
G__40883.cljs$core$IFn$_invoke$arity$variadic = G__40883__delegate;
return G__40883;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__40886 = null;
if (arguments.length > 2) {
var G__40887__i = 0, G__40887__a = new Array(arguments.length -  2);
while (G__40887__i < G__40887__a.length) {G__40887__a[G__40887__i] = arguments[G__40887__i + 2]; ++G__40887__i;}
G__40886 = new cljs.core.IndexedSeq(G__40887__a,0,null);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__40886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?((function (u){
return (function garden$units$make_unit_multiplier_$_percent_STAR_(x,y){
return ((x * y) / (100));
});})(u))
:cljs.core._STAR_);
return ((function (u,op){
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__40768 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__40768__$1 = (((((!((map__40768 == null))))?(((((map__40768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40768):map__40768);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40768__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__40769 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__40769__$1 = (((((!((map__40769 == null))))?(((((map__40769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40769):map__40769);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__40780 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40780) : u.call(null,G__40780));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__40888__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__40888 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__40889__i = 0, G__40889__a = new Array(arguments.length -  2);
while (G__40889__i < G__40889__a.length) {G__40889__a[G__40889__i] = arguments[G__40889__i + 2]; ++G__40889__i;}
  more = new cljs.core.IndexedSeq(G__40889__a,0,null);
} 
return G__40888__delegate.call(this,x,y,more);};
G__40888.cljs$lang$maxFixedArity = 2;
G__40888.cljs$lang$applyTo = (function (arglist__40890){
var x = cljs.core.first(arglist__40890);
arglist__40890 = cljs.core.next(arglist__40890);
var y = cljs.core.first(arglist__40890);
var more = cljs.core.rest(arglist__40890);
return G__40888__delegate(x,y,more);
});
G__40888.cljs$core$IFn$_invoke$arity$variadic = G__40888__delegate;
return G__40888;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__40891 = null;
if (arguments.length > 2) {
var G__40892__i = 0, G__40892__a = new Array(arguments.length -  2);
while (G__40892__i < G__40892__a.length) {G__40892__a[G__40892__i] = arguments[G__40892__i + 2]; ++G__40892__i;}
G__40891 = new cljs.core.IndexedSeq(G__40892__a,0,null);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__40891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u,op))
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?((function (u){
return (function garden$units$make_unit_divider_$_percent_div(x,y){
return ((100) * (x / y));
});})(u))
:cljs.core._SLASH_);
return ((function (u,op){
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__40784 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40784) : u.call(null,G__40784));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__40785 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__40785__$1 = (((((!((map__40785 == null))))?(((((map__40785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40785):map__40785);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40785__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__40786 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__40786__$1 = (((((!((map__40786 == null))))?(((((map__40786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40786):map__40786);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__40794 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__40794) : u.call(null,G__40794));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__40898__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__40898 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__40901__i = 0, G__40901__a = new Array(arguments.length -  2);
while (G__40901__i < G__40901__a.length) {G__40901__a[G__40901__i] = arguments[G__40901__i + 2]; ++G__40901__i;}
  more = new cljs.core.IndexedSeq(G__40901__a,0,null);
} 
return G__40898__delegate.call(this,x,y,more);};
G__40898.cljs$lang$maxFixedArity = 2;
G__40898.cljs$lang$applyTo = (function (arglist__40902){
var x = cljs.core.first(arglist__40902);
arglist__40902 = cljs.core.next(arglist__40902);
var y = cljs.core.first(arglist__40902);
var more = cljs.core.rest(arglist__40902);
return G__40898__delegate(x,y,more);
});
G__40898.cljs$core$IFn$_invoke$arity$variadic = G__40898__delegate;
return G__40898;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__40903 = null;
if (arguments.length > 2) {
var G__40904__i = 0, G__40904__a = new Array(arguments.length -  2);
while (G__40904__i < G__40904__a.length) {G__40904__a[G__40904__i] = arguments[G__40904__i + 2]; ++G__40904__i;}
G__40903 = new cljs.core.IndexedSeq(G__40904__a,0,null);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__40903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
;})(u,op))
});
garden.units.cm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.mm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.in$ = garden.units.make_unit_fn(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.px = garden.units.make_unit_fn(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"px","px",281329899));
garden.units.pt = garden.units.make_unit_fn(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pc = garden.units.make_unit_fn(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.percent = garden.units.make_unit_fn(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.em = garden.units.make_unit_fn(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"em","em",707813035));
garden.units.ex = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ch = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.rem = garden.units.make_unit_fn(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.vw = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vh = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vmin = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmax = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.deg = garden.units.make_unit_fn(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.grad = garden.units.make_unit_fn(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.rad = garden.units.make_unit_fn(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.turn = garden.units.make_unit_fn(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.s = garden.units.make_unit_fn(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.ms = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.Hz = garden.units.make_unit_fn(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.kHz = garden.units.make_unit_fn(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.dpi = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpcm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dppx = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=garden.units.js.map
