gdjs.CGRATSCode = {};
gdjs.CGRATSCode.GDNewTiledSpriteObjects1= [];
gdjs.CGRATSCode.GDNewTiledSpriteObjects2= [];
gdjs.CGRATSCode.GDNewTextObjects1= [];
gdjs.CGRATSCode.GDNewTextObjects2= [];
gdjs.CGRATSCode.GDNewText2Objects1= [];
gdjs.CGRATSCode.GDNewText2Objects2= [];
gdjs.CGRATSCode.GDNewSpriteObjects1= [];
gdjs.CGRATSCode.GDNewSpriteObjects2= [];
gdjs.CGRATSCode.GDNewText3Objects1= [];
gdjs.CGRATSCode.GDNewText3Objects2= [];

gdjs.CGRATSCode.conditionTrue_0 = {val:false};
gdjs.CGRATSCode.condition0IsTrue_0 = {val:false};
gdjs.CGRATSCode.condition1IsTrue_0 = {val:false};


gdjs.CGRATSCode.eventsList0 = function(runtimeScene) {

{


gdjs.CGRATSCode.condition0IsTrue_0.val = false;
{
gdjs.CGRATSCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CGRATSCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "s");
}}

}


{


gdjs.CGRATSCode.condition0IsTrue_0.val = false;
{
gdjs.CGRATSCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "s") >= 3;
}if (gdjs.CGRATSCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DONE", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.CGRATSCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.CGRATSCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.CGRATSCode.GDNewText3Objects1[i].setGradient("LINEAR_HORIZONTAL", "255;0;0", "39;255;0", "0;15;255", "190;0;255");
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.CGRATSCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.CGRATSCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.CGRATSCode.GDNewSpriteObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(3, 6, 6, 6, 0.5, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.CGRATSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CGRATSCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CGRATSCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CGRATSCode.GDNewTextObjects1.length = 0;
gdjs.CGRATSCode.GDNewTextObjects2.length = 0;
gdjs.CGRATSCode.GDNewText2Objects1.length = 0;
gdjs.CGRATSCode.GDNewText2Objects2.length = 0;
gdjs.CGRATSCode.GDNewSpriteObjects1.length = 0;
gdjs.CGRATSCode.GDNewSpriteObjects2.length = 0;
gdjs.CGRATSCode.GDNewText3Objects1.length = 0;
gdjs.CGRATSCode.GDNewText3Objects2.length = 0;

gdjs.CGRATSCode.eventsList0(runtimeScene);
return;

}

gdjs['CGRATSCode'] = gdjs.CGRATSCode;
