goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__45099_45625 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__45100_45626 = ((function (G__45099_45625){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__45099_45625))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45099_45625,G__45100_45626) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45099_45625,G__45100_45626));
var G__45103_45627 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__45104_45628 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45105_45629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45106_45630 = ((function (G__45103_45627,G__45104_45628,G__45105_45629){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__45103_45627,G__45104_45628,G__45105_45629))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45103_45627,G__45104_45628,G__45105_45629,G__45106_45630) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45103_45627,G__45104_45628,G__45105_45629,G__45106_45630));
var G__45109_45631 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__45110_45632 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45111_45633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__45112_45634 = ((function (G__45109_45631,G__45110_45632,G__45111_45633){
return (function (panel_width_PERCENT_,p__45113){
var vec__45114 = p__45113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45114,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45114,(1),null);
return (((function (){var G__45117 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__45117);
})() * n) / 100.0);
});})(G__45109_45631,G__45110_45632,G__45111_45633))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45109_45631,G__45110_45632,G__45111_45633,G__45112_45634) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45109_45631,G__45110_45632,G__45111_45633,G__45112_45634));
var G__45118_45635 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__45119_45636 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45120_45637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45121_45638 = ((function (G__45118_45635,G__45119_45636,G__45120_45637){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__45118_45635,G__45119_45636,G__45120_45637))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45118_45635,G__45119_45636,G__45120_45637,G__45121_45638) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45118_45635,G__45119_45636,G__45120_45637,G__45121_45638));
var G__45123_45639 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__45124_45640 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45125_45641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__45126_45642 = ((function (G__45123_45639,G__45124_45640,G__45125_45641){
return (function (width,p__45128){
var vec__45129 = p__45128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45129,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45129,(1),null);
return ((function (){var G__45133 = (width / n);
return Math.ceil(G__45133);
})() * n);
});})(G__45123_45639,G__45124_45640,G__45125_45641))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45123_45639,G__45124_45640,G__45125_45641,G__45126_45642) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45123_45639,G__45124_45640,G__45125_45641,G__45126_45642));
var G__45135_45644 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__45136_45645 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45137_45646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45138_45647 = ((function (G__45135_45644,G__45136_45645,G__45137_45646){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__45135_45644,G__45136_45645,G__45137_45646))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45135_45644,G__45136_45645,G__45137_45646,G__45138_45647) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45135_45644,G__45136_45645,G__45137_45646,G__45138_45647));
var G__45139_45649 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__45140_45650 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45141_45651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45142_45652 = ((function (G__45139_45649,G__45140_45650,G__45141_45651){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__45139_45649,G__45140_45650,G__45141_45651))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45139_45649,G__45140_45650,G__45141_45651,G__45142_45652) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45139_45649,G__45140_45650,G__45141_45651,G__45142_45652));
var G__45143_45653 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__45144_45654 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45145_45655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45146_45656 = ((function (G__45143_45653,G__45144_45654,G__45145_45655){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__45143_45653,G__45144_45654,G__45145_45655))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45143_45653,G__45144_45654,G__45145_45655,G__45146_45656) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45143_45653,G__45144_45654,G__45145_45655,G__45146_45656));
var G__45148_45657 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__45149_45658 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45150_45659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45151_45660 = ((function (G__45148_45657,G__45149_45658,G__45150_45659){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__45148_45657,G__45149_45658,G__45150_45659))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45148_45657,G__45149_45658,G__45150_45659,G__45151_45660) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45148_45657,G__45149_45658,G__45150_45659,G__45151_45660));
var G__45157_45662 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__45158_45663 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45159_45664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45160_45665 = ((function (G__45157_45662,G__45158_45663,G__45159_45664){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__45157_45662,G__45158_45663,G__45159_45664))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45157_45662,G__45158_45663,G__45159_45664,G__45160_45665) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45157_45662,G__45158_45663,G__45159_45664,G__45160_45665));
var G__45161_45673 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__45162_45674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45163_45675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45164_45676 = ((function (G__45161_45673,G__45162_45674,G__45163_45675){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__45161_45673,G__45162_45674,G__45163_45675))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45161_45673,G__45162_45674,G__45163_45675,G__45164_45676) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45161_45673,G__45162_45674,G__45163_45675,G__45164_45676));
var G__45165_45682 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__45166_45683 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45167_45684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45168_45685 = ((function (G__45165_45682,G__45166_45683,G__45167_45684){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__45165_45682,G__45166_45683,G__45167_45684))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45165_45682,G__45166_45683,G__45167_45684,G__45168_45685) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45165_45682,G__45166_45683,G__45167_45684,G__45168_45685));
var G__45170_45686 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__45171_45687 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45172_45688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__45173_45689 = ((function (G__45170_45686,G__45171_45687,G__45172_45688){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__45170_45686,G__45171_45687,G__45172_45688))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45170_45686,G__45171_45687,G__45172_45688,G__45173_45689) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45170_45686,G__45171_45687,G__45172_45688,G__45173_45689));
var G__45174_45691 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__45175_45692 = ((function (G__45174_45691){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__45174_45691))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45174_45691,G__45175_45692) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45174_45691,G__45175_45692));
var G__45177_45699 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__45178_45700 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45179_45701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__45180_45702 = ((function (G__45177_45699,G__45178_45700,G__45179_45701){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__45177_45699,G__45178_45700,G__45179_45701))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45177_45699,G__45178_45700,G__45179_45701,G__45180_45702) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45177_45699,G__45178_45700,G__45179_45701,G__45180_45702));
var G__45182_45707 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__45183_45708 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45184_45709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__45185_45710 = ((function (G__45182_45707,G__45183_45708,G__45184_45709){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__45182_45707,G__45183_45708,G__45184_45709))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45182_45707,G__45183_45708,G__45184_45709,G__45185_45710) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45182_45707,G__45183_45708,G__45184_45709,G__45185_45710));
var G__45187_45714 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__45188_45715 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45189_45716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__45190_45717 = ((function (G__45187_45714,G__45188_45715,G__45189_45716){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__45187_45714,G__45188_45715,G__45189_45716){
return (function (p1__45186_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__45186_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__45186_SHARP_));
});})(G__45187_45714,G__45188_45715,G__45189_45716))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__45187_45714,G__45188_45715,G__45189_45716))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45187_45714,G__45188_45715,G__45189_45716,G__45190_45717) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45187_45714,G__45188_45715,G__45189_45716,G__45190_45717));
var G__45203_45721 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__45204_45722 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45205_45723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__45206_45724 = ((function (G__45203_45721,G__45204_45722,G__45205_45723){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__45203_45721,G__45204_45722,G__45205_45723))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45203_45721,G__45204_45722,G__45205_45723,G__45206_45724) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45203_45721,G__45204_45722,G__45205_45723,G__45206_45724));
var G__45207_45737 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__45208_45738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45209_45739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__45210_45740 = ((function (G__45207_45737,G__45208_45738,G__45209_45739){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__45207_45737,G__45208_45738,G__45209_45739))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45207_45737,G__45208_45738,G__45209_45739,G__45210_45740) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45207_45737,G__45208_45738,G__45209_45739,G__45210_45740));
var G__45211_45741 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__45212_45742 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45213_45743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__45214_45744 = ((function (G__45211_45741,G__45212_45742,G__45213_45743){
return (function (expansions,p__45215){
var vec__45216 = p__45215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45216,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45216,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__45211_45741,G__45212_45742,G__45213_45743))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45211_45741,G__45212_45742,G__45213_45743,G__45214_45744) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45211_45741,G__45212_45742,G__45213_45743,G__45214_45744));
var G__45219_45746 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__45220_45747 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45221_45748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__45222_45749 = ((function (G__45219_45746,G__45220_45747,G__45221_45748){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__45219_45746,G__45220_45747,G__45221_45748))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45219_45746,G__45220_45747,G__45221_45748,G__45222_45749) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45219_45746,G__45220_45747,G__45221_45748,G__45222_45749));
var G__45224_45754 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__45225_45755 = ((function (G__45224_45754){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45224_45754))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45224_45754,G__45225_45755) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45224_45754,G__45225_45755));
var G__45226_45756 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__45227_45757 = ((function (G__45226_45756){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45226_45756))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45226_45756,G__45227_45757) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45226_45756,G__45227_45757));
var G__45228_45759 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__45229_45760 = ((function (G__45228_45759){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__45228_45759))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45228_45759,G__45229_45760) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45228_45759,G__45229_45760));
var G__45230_45764 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__45231_45765 = ((function (G__45230_45764){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__45230_45764))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45230_45764,G__45231_45765) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45230_45764,G__45231_45765));
var G__45232_45780 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__45233_45781 = ((function (G__45232_45780){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__45232_45780))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45232_45780,G__45233_45781) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45232_45780,G__45233_45781));
var G__45234_45793 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__45235_45794 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45236_45795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__45237_45796 = ((function (G__45234_45793,G__45235_45794,G__45236_45795){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__45234_45793,G__45235_45794,G__45236_45795))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45234_45793,G__45235_45794,G__45236_45795,G__45237_45796) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45234_45793,G__45235_45794,G__45236_45795,G__45237_45796));
var G__45238_45809 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__45239_45810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45240_45811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__45241_45812 = ((function (G__45238_45809,G__45239_45810,G__45240_45811){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__45238_45809,G__45239_45810,G__45240_45811))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45238_45809,G__45239_45810,G__45240_45811,G__45241_45812) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45238_45809,G__45239_45810,G__45240_45811,G__45241_45812));
var G__45242_45817 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__45243_45818 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45244_45819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__45245_45820 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45246_45821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__45247_45822 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45248_45823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__45249_45824 = ((function (G__45242_45817,G__45243_45818,G__45244_45819,G__45245_45820,G__45246_45821,G__45247_45822,G__45248_45823){
return (function (p__45250,_){
var vec__45254 = p__45250;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__45242_45817,G__45243_45818,G__45244_45819,G__45245_45820,G__45246_45821,G__45247_45822,G__45248_45823))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__45242_45817,G__45243_45818,G__45244_45819,G__45245_45820,G__45246_45821,G__45247_45822,G__45248_45823,G__45249_45824) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45242_45817,G__45243_45818,G__45244_45819,G__45245_45820,G__45246_45821,G__45247_45822,G__45248_45823,G__45249_45824));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__45257,_){
var vec__45258 = p__45257;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__45258,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__45258,traces,filtered_views))
),traces);
});
var G__45261_45853 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__45262_45854 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45263_45855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45264_45856 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45265_45857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__45266_45858 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45261_45853,G__45262_45854,G__45263_45855,G__45264_45856,G__45265_45857,G__45266_45858) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45261_45853,G__45262_45854,G__45263_45855,G__45264_45856,G__45265_45857,G__45266_45858));
var G__45267_45866 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__45268_45867 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45269_45868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__45270_45869 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45271_45870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__45272_45871 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45267_45866,G__45268_45867,G__45269_45868,G__45270_45869,G__45271_45870,G__45272_45871) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45267_45866,G__45268_45867,G__45269_45868,G__45270_45869,G__45271_45870,G__45272_45871));
var G__45273_45879 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__45274_45880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45275_45881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__45276_45882 = ((function (G__45273_45879,G__45274_45880,G__45275_45881){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__45273_45879,G__45274_45880,G__45275_45881))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45273_45879,G__45274_45880,G__45275_45881,G__45276_45882) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45273_45879,G__45274_45880,G__45275_45881,G__45276_45882));
var G__45277_45910 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__45278_45911 = ((function (G__45277_45910){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__45277_45910))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45277_45910,G__45278_45911) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45277_45910,G__45278_45911));
var G__45279_45913 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__45280_45914 = ((function (G__45279_45913){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45279_45913))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45279_45913,G__45280_45914) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45279_45913,G__45280_45914));
var G__45281_45916 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__45282_45917 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45283_45918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__45284_45919 = ((function (G__45281_45916,G__45282_45917,G__45283_45918){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__45281_45916,G__45282_45917,G__45283_45918))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45281_45916,G__45282_45917,G__45283_45918,G__45284_45919) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45281_45916,G__45282_45917,G__45283_45918,G__45284_45919));
var G__45285_45924 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__45286_45925 = ((function (G__45285_45924){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45285_45924))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45285_45924,G__45286_45925) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45285_45924,G__45286_45925));
var G__45287_45926 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__45288_45927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45289_45928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45290_45929 = ((function (G__45287_45926,G__45288_45927,G__45289_45928){
return (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});})(G__45287_45926,G__45288_45927,G__45289_45928))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45287_45926,G__45288_45927,G__45289_45928,G__45290_45929) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45287_45926,G__45288_45927,G__45289_45928,G__45290_45929));
var G__45291_45936 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__45292_45937 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45293_45938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45294_45939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45295_45940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__45296_45941 = ((function (G__45291_45936,G__45292_45937,G__45293_45938,G__45294_45939,G__45295_45940){
return (function (p__45300,_){
var vec__45301 = p__45300;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45301,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45301,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__45291_45936,G__45292_45937,G__45293_45938,G__45294_45939,G__45295_45940))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45291_45936,G__45292_45937,G__45293_45938,G__45294_45939,G__45295_45940,G__45296_45941) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45291_45936,G__45292_45937,G__45293_45938,G__45294_45939,G__45295_45940,G__45296_45941));
var G__45305_45946 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__45306_45947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45307_45948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__45308_45949 = ((function (G__45305_45946,G__45306_45947,G__45307_45948){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__45305_45946,G__45306_45947,G__45307_45948))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45305_45946,G__45306_45947,G__45307_45948,G__45308_45949) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45305_45946,G__45306_45947,G__45307_45948,G__45308_45949));
var G__45309_45953 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__45310_45954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45311_45955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__45312_45956 = ((function (G__45309_45953,G__45310_45954,G__45311_45955){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__45309_45953,G__45310_45954,G__45311_45955))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45309_45953,G__45310_45954,G__45311_45955,G__45312_45956) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45309_45953,G__45310_45954,G__45311_45955,G__45312_45956));
var G__45313_45957 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__45314_45958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45315_45959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__45316_45960 = ((function (G__45313_45957,G__45314_45958,G__45315_45959){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__45313_45957,G__45314_45958,G__45315_45959))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45313_45957,G__45314_45958,G__45315_45959,G__45316_45960) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45313_45957,G__45314_45958,G__45315_45959,G__45316_45960));
var G__45317_45962 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__45318_45963 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45319_45964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45320_45965 = ((function (G__45317_45962,G__45318_45963,G__45319_45964){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__45317_45962,G__45318_45963,G__45319_45964))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45317_45962,G__45318_45963,G__45319_45964,G__45320_45965) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45317_45962,G__45318_45963,G__45319_45964,G__45320_45965));
var G__45322_45966 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__45323_45967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45324_45968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45325_45969 = ((function (G__45322_45966,G__45323_45967,G__45324_45968){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__45322_45966,G__45323_45967,G__45324_45968))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45322_45966,G__45323_45967,G__45324_45968,G__45325_45969) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45322_45966,G__45323_45967,G__45324_45968,G__45325_45969));
var G__45326_45973 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__45327_45974 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45328_45975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__45329_45976 = ((function (G__45326_45973,G__45327_45974,G__45328_45975){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__45326_45973,G__45327_45974,G__45328_45975))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45326_45973,G__45327_45974,G__45328_45975,G__45329_45976) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45326_45973,G__45327_45974,G__45328_45975,G__45329_45976));
var G__45330_45980 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__45331_45981 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45332_45982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45333_45983 = ((function (G__45330_45980,G__45331_45981,G__45332_45982){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__45330_45980,G__45331_45981,G__45332_45982))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45330_45980,G__45331_45981,G__45332_45982,G__45333_45983) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45330_45980,G__45331_45981,G__45332_45982,G__45333_45983));
var G__45334_45996 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__45335_45997 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45336_45998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__45337_45999 = ((function (G__45334_45996,G__45335_45997,G__45336_45998){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__45334_45996,G__45335_45997,G__45336_45998))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45334_45996,G__45335_45997,G__45336_45998,G__45337_45999) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45334_45996,G__45335_45997,G__45336_45998,G__45337_45999));
var G__45338_46000 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__45339_46001 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45340_46002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__45341_46003 = ((function (G__45338_46000,G__45339_46001,G__45340_46002){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__45338_46000,G__45339_46001,G__45340_46002))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45338_46000,G__45339_46001,G__45340_46002,G__45341_46003) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45338_46000,G__45339_46001,G__45340_46002,G__45341_46003));
var G__45348_46004 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__45349_46005 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45350_46006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__45351_46007 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45352_46008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__45353_46009 = ((function (G__45348_46004,G__45349_46005,G__45350_46006,G__45351_46007,G__45352_46008){
return (function (p__45354){
var vec__45355 = p__45354;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__45348_46004,G__45349_46005,G__45350_46006,G__45351_46007,G__45352_46008))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45348_46004,G__45349_46005,G__45350_46006,G__45351_46007,G__45352_46008,G__45353_46009) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45348_46004,G__45349_46005,G__45350_46006,G__45351_46007,G__45352_46008,G__45353_46009));
var G__45358_46011 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__45359_46012 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45360_46013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__45361_46014 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45362_46015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__45363_46016 = ((function (G__45358_46011,G__45359_46012,G__45360_46013,G__45361_46014,G__45362_46015){
return (function (p__45364){
var vec__45365 = p__45364;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45365,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45365,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__45358_46011,G__45359_46012,G__45360_46013,G__45361_46014,G__45362_46015))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45358_46011,G__45359_46012,G__45360_46013,G__45361_46014,G__45362_46015,G__45363_46016) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45358_46011,G__45359_46012,G__45360_46013,G__45361_46014,G__45362_46015,G__45363_46016));
var G__45370_46025 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__45371_46026 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45372_46027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45373_46028 = ((function (G__45370_46025,G__45371_46026,G__45372_46027){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__45370_46025,G__45371_46026,G__45372_46027))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45370_46025,G__45371_46026,G__45372_46027,G__45373_46028) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45370_46025,G__45371_46026,G__45372_46027,G__45373_46028));
var G__45377_46030 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__45378_46031 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45379_46032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45380_46033 = ((function (G__45377_46030,G__45378_46031,G__45379_46032){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__45377_46030,G__45378_46031,G__45379_46032){
return (function (p1__45376_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__45376_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__45376_SHARP_)));
});})(G__45377_46030,G__45378_46031,G__45379_46032))
,traces);
});})(G__45377_46030,G__45378_46031,G__45379_46032))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45377_46030,G__45378_46031,G__45379_46032,G__45380_46033) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45377_46030,G__45378_46031,G__45379_46032,G__45380_46033));
var G__45381_46036 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__45382_46037 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45383_46038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__45384_46039 = ((function (G__45381_46036,G__45382_46037,G__45383_46038){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__45381_46036,G__45382_46037,G__45383_46038))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45381_46036,G__45382_46037,G__45383_46038,G__45384_46039) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45381_46036,G__45382_46037,G__45383_46038,G__45384_46039));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__45389 = arguments.length;
switch (G__45389) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46048 = arguments.length;
var i__4731__auto___46049 = (0);
while(true){
if((i__4731__auto___46049 < len__4730__auto___46048)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46049]));

var G__46050 = (i__4731__auto___46049 + (1));
i__4731__auto___46049 = G__46050;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq45386){
var G__45387 = cljs.core.first(seq45386);
var seq45386__$1 = cljs.core.next(seq45386);
var G__45388 = cljs.core.first(seq45386__$1);
var seq45386__$2 = cljs.core.next(seq45386__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45387,G__45388,seq45386__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__45390_46059 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__45391_46060 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45392_46061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__45393_46062 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45394_46063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45395_46064 = ((function (G__45390_46059,G__45391_46060,G__45392_46061,G__45393_46062,G__45394_46063){
return (function (p__45396,p__45397){
var vec__45398 = p__45396;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45398,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45398,(1),null);
var vec__45401 = p__45397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45401,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45401,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__45406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45406,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45406,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__45390_46059,G__45391_46060,G__45392_46061,G__45393_46062,G__45394_46063))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45390_46059,G__45391_46060,G__45392_46061,G__45393_46062,G__45394_46063,G__45395_46064) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45390_46059,G__45391_46060,G__45392_46061,G__45393_46062,G__45394_46063,G__45395_46064));
var G__45409_46072 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__45410_46073 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45411_46074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__45412_46075 = ((function (G__45409_46072,G__45410_46073,G__45411_46074){
return (function (match){
var map__45413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__45413__$1 = (((((!((map__45413 == null))))?(((((map__45413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45413):map__45413);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__45409_46072,G__45410_46073,G__45411_46074))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45409_46072,G__45410_46073,G__45411_46074,G__45412_46075) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45409_46072,G__45410_46073,G__45411_46074,G__45412_46075));
var G__45416_46088 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__45417_46089 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45418_46090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45419_46091 = ((function (G__45416_46088,G__45417_46089,G__45418_46090){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__45416_46088,G__45417_46089,G__45418_46090))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45416_46088,G__45417_46089,G__45418_46090,G__45419_46091) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45416_46088,G__45417_46089,G__45418_46090,G__45419_46091));
var G__45420_46096 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__45421_46097 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45422_46098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45423_46099 = ((function (G__45420_46096,G__45421_46097,G__45422_46098){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__45420_46096,G__45421_46097,G__45422_46098))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45420_46096,G__45421_46097,G__45422_46098,G__45423_46099) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45420_46096,G__45421_46097,G__45422_46098,G__45423_46099));
var G__45424_46102 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__45425_46103 = ((function (G__45424_46102){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45424_46102))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45424_46102,G__45425_46103) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45424_46102,G__45425_46103));
var G__45426_46108 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__45427_46109 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45428_46110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45429_46111 = ((function (G__45426_46108,G__45427_46109,G__45428_46110){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__45426_46108,G__45427_46109,G__45428_46110))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45426_46108,G__45427_46109,G__45428_46110,G__45429_46111) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45426_46108,G__45427_46109,G__45428_46110,G__45429_46111));
var G__45430_46114 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__45431_46115 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45432_46116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45433_46117 = ((function (G__45430_46114,G__45431_46115,G__45432_46116){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__45430_46114,G__45431_46115,G__45432_46116))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45430_46114,G__45431_46115,G__45432_46116,G__45433_46117) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45430_46114,G__45431_46115,G__45432_46116,G__45433_46117));
var G__45439_46118 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__45440_46119 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45441_46120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__45442_46121 = ((function (G__45439_46118,G__45440_46119,G__45441_46120){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__45439_46118,G__45440_46119,G__45441_46120))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45439_46118,G__45440_46119,G__45441_46120,G__45442_46121) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45439_46118,G__45440_46119,G__45441_46120,G__45442_46121));
var G__45443_46126 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__45444_46127 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45445_46128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__45446_46129 = ((function (G__45443_46126,G__45444_46127,G__45445_46128){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__45443_46126,G__45444_46127,G__45445_46128))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45443_46126,G__45444_46127,G__45445_46128,G__45446_46129) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45443_46126,G__45444_46127,G__45445_46128,G__45446_46129));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__45447_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__45447_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__45448){
return cljs.core.coll_QMARK_(G__45448);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45453){
return cljs.core.map_QMARK_(G__45453);
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__45453){
return cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__45453){
return ((cljs.core.map_QMARK_(G__45453)) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__45453,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__45466){
return cljs.core.coll_QMARK_(G__45466);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__45467 = sub_type;
var G__45467__$1 = (((G__45467 instanceof cljs.core.Keyword))?G__45467.fqn:null);
switch (G__45467__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__46165 = (exp - (1));
var G__46166 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__46167 = cljs.core.rest(order__$1);
exp = G__46165;
total = G__46166;
order__$1 = G__46167;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__45471 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__45471__$1 = (((G__45471 instanceof cljs.core.Keyword))?G__45471.fqn:null);
switch (G__45471__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__45472,p__45473){
var vec__45474 = p__45472;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45474,(1),null);
var vec__45477 = p__45473;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__45474,sub_info,sub_state,vec__45477,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__45474,sub_info,sub_state,vec__45477,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__45474,sub_info,sub_state,vec__45477,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__45474,sub_info,sub_state,vec__45477,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__45480_46178 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__45481_46179 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45482_46180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__45483_46181 = ((function (G__45480_46178,G__45481_46179,G__45482_46180){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__45480_46178,G__45481_46179,G__45482_46180))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45480_46178,G__45481_46179,G__45482_46180,G__45483_46181) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45480_46178,G__45481_46179,G__45482_46180,G__45483_46181));
var G__45484_46182 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__45485_46183 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45486_46184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__45487_46185 = ((function (G__45484_46182,G__45485_46183,G__45486_46184){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__45484_46182,G__45485_46183,G__45486_46184))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45484_46182,G__45485_46183,G__45486_46184,G__45487_46185) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45484_46182,G__45485_46183,G__45486_46184,G__45487_46185));
var G__45488_46187 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__45489_46188 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45490_46189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__45491_46190 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45492_46191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__45493_46192 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45488_46187,G__45489_46188,G__45490_46189,G__45491_46190,G__45492_46191,G__45493_46192) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45488_46187,G__45489_46188,G__45490_46189,G__45491_46190,G__45492_46191,G__45493_46192));
var G__45494_46200 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__45495_46201 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45496_46202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__45497_46203 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45498_46204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__45499_46205 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45494_46200,G__45495_46201,G__45496_46202,G__45497_46203,G__45498_46204,G__45499_46205) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45494_46200,G__45495_46201,G__45496_46202,G__45497_46203,G__45498_46204,G__45499_46205));
var G__45500_46206 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__45501_46207 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45502_46208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__45503_46209 = ((function (G__45500_46206,G__45501_46207,G__45502_46208){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__45500_46206,G__45501_46207,G__45502_46208))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45500_46206,G__45501_46207,G__45502_46208,G__45503_46209) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45500_46206,G__45501_46207,G__45502_46208,G__45503_46209));
var G__45504_46211 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__45505_46212 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45506_46213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__45507_46214 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45508_46215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__45509_46216 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45510_46217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__45511_46218 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45512_46219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__45513_46220 = ((function (G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219){
return (function (p__45514){
var vec__45515 = p__45514;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(3),null);
var compare_fn = ((function (vec__45515,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__45515,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219))
;
var G__45518 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__45518__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__45518):G__45518);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__45518,G__45518__$1,compare_fn,vec__45515,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219){
return (function (p__45519){
var map__45520 = p__45519;
var map__45520__$1 = (((((!((map__45520 == null))))?(((((map__45520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45520):map__45520);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45520__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4131__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__45518,G__45518__$1,compare_fn,vec__45515,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219))
,G__45518__$1);
} else {
return G__45518__$1;
}
});})(G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219,G__45513_46220) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45504_46211,G__45505_46212,G__45506_46213,G__45507_46214,G__45508_46215,G__45509_46216,G__45510_46217,G__45511_46218,G__45512_46219,G__45513_46220));
var G__45522_46222 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__45523_46223 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45524_46224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__45525_46225 = ((function (G__45522_46222,G__45523_46223,G__45524_46224){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__45522_46222,G__45523_46223,G__45524_46224))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45522_46222,G__45523_46223,G__45524_46224,G__45525_46225) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45522_46222,G__45523_46223,G__45524_46224,G__45525_46225));
var G__45526_46226 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__45527_46227 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45528_46228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__45529_46229 = ((function (G__45526_46226,G__45527_46227,G__45528_46228){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__45526_46226,G__45527_46227,G__45528_46228))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45526_46226,G__45527_46227,G__45528_46228,G__45529_46229) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45526_46226,G__45527_46227,G__45528_46228,G__45529_46229));
var G__45530_46230 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__45531_46231 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45532_46232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__45533_46233 = ((function (G__45530_46230,G__45531_46231,G__45532_46232){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__45530_46230,G__45531_46231,G__45532_46232))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45530_46230,G__45531_46231,G__45532_46232,G__45533_46233) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45530_46230,G__45531_46231,G__45532_46232,G__45533_46233));
var G__45534_46234 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__45535_46235 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45536_46236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__45537_46237 = ((function (G__45534_46234,G__45535_46235,G__45536_46236){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__45534_46234,G__45535_46235,G__45536_46236))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45534_46234,G__45535_46235,G__45536_46236,G__45537_46237) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45534_46234,G__45535_46235,G__45536_46236,G__45537_46237));
var G__45538_46242 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__45539_46243 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45540_46244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__45541_46245 = ((function (G__45538_46242,G__45539_46243,G__45540_46244){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__45538_46242,G__45539_46243,G__45540_46244))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45538_46242,G__45539_46243,G__45540_46244,G__45541_46245) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45538_46242,G__45539_46243,G__45540_46244,G__45541_46245));
var G__45542_46246 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__45543_46247 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45544_46248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__45545_46249 = ((function (G__45542_46246,G__45543_46247,G__45544_46248){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__45542_46246,G__45543_46247,G__45544_46248))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45542_46246,G__45543_46247,G__45544_46248,G__45545_46249) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45542_46246,G__45543_46247,G__45544_46248,G__45545_46249));
var G__45546_46251 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__45547_46252 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45548_46253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__45549_46254 = ((function (G__45546_46251,G__45547_46252,G__45548_46253){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__45546_46251,G__45547_46252,G__45548_46253))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45546_46251,G__45547_46252,G__45548_46253,G__45549_46254) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45546_46251,G__45547_46252,G__45548_46253,G__45549_46254));
var G__45550_46258 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__45551_46259 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45552_46260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__45553_46261 = ((function (G__45550_46258,G__45551_46259,G__45552_46260){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__45550_46258,G__45551_46259,G__45552_46260))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45550_46258,G__45551_46259,G__45552_46260,G__45553_46261) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45550_46258,G__45551_46259,G__45552_46260,G__45553_46261));
var G__45554_46262 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__45555_46263 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45556_46264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__45557_46265 = ((function (G__45554_46262,G__45555_46263,G__45556_46264){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__45554_46262,G__45555_46263,G__45556_46264))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45554_46262,G__45555_46263,G__45556_46264,G__45557_46265) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45554_46262,G__45555_46263,G__45556_46264,G__45557_46265));
var G__45558_46269 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__45559_46270 = ((function (G__45558_46269){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45558_46269))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45558_46269,G__45559_46270) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45558_46269,G__45559_46270));
var G__45560_46272 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__45561_46273 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45562_46274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__45563_46275 = ((function (G__45560_46272,G__45561_46273,G__45562_46274){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__45560_46272,G__45561_46273,G__45562_46274){
return (function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5739__auto__,G__45560_46272,G__45561_46273,G__45562_46274){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5739__auto__,G__45560_46272,G__45561_46273,G__45562_46274))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__45560_46272,G__45561_46273,G__45562_46274))
,traces);
});})(G__45560_46272,G__45561_46273,G__45562_46274))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45560_46272,G__45561_46273,G__45562_46274,G__45563_46275) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45560_46272,G__45561_46273,G__45562_46274,G__45563_46275));
var G__45566_46284 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__45567_46285 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45568_46286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__45569_46287 = ((function (G__45566_46284,G__45567_46285,G__45568_46286){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__45566_46284,G__45567_46285,G__45568_46286))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45566_46284,G__45567_46285,G__45568_46286,G__45569_46287) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45566_46284,G__45567_46285,G__45568_46286,G__45569_46287));
var G__45570_46288 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__45571_46289 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45572_46290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__45573_46291 = ((function (G__45570_46288,G__45571_46289,G__45572_46290){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__45570_46288,G__45571_46289,G__45572_46290))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45570_46288,G__45571_46289,G__45572_46290,G__45573_46291) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45570_46288,G__45571_46289,G__45572_46290,G__45573_46291));
var G__45574_46292 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__45575_46293 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45576_46294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__45577_46295 = ((function (G__45574_46292,G__45575_46293,G__45576_46294){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__45574_46292,G__45575_46293,G__45576_46294))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45574_46292,G__45575_46293,G__45576_46294,G__45577_46295) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45574_46292,G__45575_46293,G__45576_46294,G__45577_46295));
var G__45580_46297 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__45581_46298 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45582_46299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__45583_46300 = ((function (G__45580_46297,G__45581_46298,G__45582_46299){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__45580_46297,G__45581_46298,G__45582_46299))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45580_46297,G__45581_46298,G__45582_46299,G__45583_46300) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45580_46297,G__45581_46298,G__45582_46299,G__45583_46300));
var G__45584_46301 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__45585_46302 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45586_46303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__45587_46304 = ((function (G__45584_46301,G__45585_46302,G__45586_46303){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__45584_46301,G__45585_46302,G__45586_46303))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45584_46301,G__45585_46302,G__45586_46303,G__45587_46304) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45584_46301,G__45585_46302,G__45586_46303,G__45587_46304));
var G__45588_46306 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__45589_46307 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45590_46308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__45591_46309 = ((function (G__45588_46306,G__45589_46307,G__45590_46308){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__45588_46306,G__45589_46307,G__45590_46308))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45588_46306,G__45589_46307,G__45590_46308,G__45591_46309) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45588_46306,G__45589_46307,G__45590_46308,G__45591_46309));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__45594_46310 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__45595_46311 = ((function (G__45594_46310){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__45594_46310))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45594_46310,G__45595_46311) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45594_46310,G__45595_46311));
var G__45596_46317 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__45597_46318 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45598_46319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__45599_46320 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45600_46321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__45601_46322 = ((function (G__45596_46317,G__45597_46318,G__45598_46319,G__45599_46320,G__45600_46321){
return (function (p__45602,_){
var vec__45603 = p__45602;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45603,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45603,(1),null);
var G__45606 = (window_width / char_width);
return Math.ceil(G__45606);
});})(G__45596_46317,G__45597_46318,G__45598_46319,G__45599_46320,G__45600_46321))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__45596_46317,G__45597_46318,G__45598_46319,G__45599_46320,G__45600_46321,G__45601_46322) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45596_46317,G__45597_46318,G__45598_46319,G__45599_46320,G__45600_46321,G__45601_46322));
var G__45607_46328 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__45608_46329 = ((function (G__45607_46328){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45607_46328))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45607_46328,G__45608_46329) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45607_46328,G__45608_46329));
var G__45609_46331 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__45610_46332 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45611_46333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__45612_46334 = ((function (G__45609_46331,G__45610_46332,G__45611_46333){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__45609_46331,G__45610_46332,G__45611_46333))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45609_46331,G__45610_46332,G__45611_46333,G__45612_46334) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45609_46331,G__45610_46332,G__45611_46333,G__45612_46334));
var G__45613_46339 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__45614_46340 = ((function (G__45613_46339){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__45613_46339))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45613_46339,G__45614_46340) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45613_46339,G__45614_46340));
var G__45615_46342 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__45616_46343 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__45617_46344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__45618_46345 = ((function (G__45615_46342,G__45616_46343,G__45617_46344){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__45615_46342,G__45616_46343,G__45617_46344))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__45615_46342,G__45616_46343,G__45617_46344,G__45618_46345) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45615_46342,G__45616_46343,G__45617_46344,G__45618_46345));
var G__45623_46350 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__45624_46351 = ((function (G__45623_46350){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});})(G__45623_46350))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45623_46350,G__45624_46351) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,G__45623_46350,G__45624_46351));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
