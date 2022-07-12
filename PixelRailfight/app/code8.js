gdjs.DONECode = {};
gdjs.DONECode.GDNewTextObjects1= [];
gdjs.DONECode.GDNewTextObjects2= [];
gdjs.DONECode.GDNewText2Objects1= [];
gdjs.DONECode.GDNewText2Objects2= [];
gdjs.DONECode.GDNewSpriteObjects1= [];
gdjs.DONECode.GDNewSpriteObjects2= [];
gdjs.DONECode.GDNewTiledSpriteObjects1= [];
gdjs.DONECode.GDNewTiledSpriteObjects2= [];
gdjs.DONECode.GDNewText3Objects1= [];
gdjs.DONECode.GDNewText3Objects2= [];
gdjs.DONECode.GDNewText32Objects1= [];
gdjs.DONECode.GDNewText32Objects2= [];
gdjs.DONECode.GDNewText322Objects1= [];
gdjs.DONECode.GDNewText322Objects2= [];

gdjs.DONECode.conditionTrue_0 = {val:false};
gdjs.DONECode.condition0IsTrue_0 = {val:false};
gdjs.DONECode.condition1IsTrue_0 = {val:false};
gdjs.DONECode.condition2IsTrue_0 = {val:false};


gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects = Hashtable.newFrom({"NewText322": gdjs.DONECode.GDNewText322Objects1});
gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects = Hashtable.newFrom({"NewText322": gdjs.DONECode.GDNewText322Objects1});
gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects = Hashtable.newFrom({"NewText322": gdjs.DONECode.GDNewText322Objects1});
gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText3Objects1Objects = Hashtable.newFrom({"NewText3": gdjs.DONECode.GDNewText3Objects1});
gdjs.DONECode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.DONECode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.DONECode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText2Objects1[i].setGradient("LINEAR_HORIZONTAL", "255;0;0", "30;255;0", "0;50;255", "255;0;213");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.DONECode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.DONECode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 4, 4, 4, 0.4, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.DONECode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.DONECode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 4, 4, 4, 0.4, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.DONECode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.DONECode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewTiledSpriteObjects1[i].addForce(50, 0, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText322"), gdjs.DONECode.GDNewText322Objects1);
{for(var i = 0, len = gdjs.DONECode.GDNewText322Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText322Objects1[i].setGradient("LINEAR_HORIZONTAL", "179;0;255", "0;255;139", "136;0;255", "0;255;228");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText322"), gdjs.DONECode.GDNewText322Objects1);

gdjs.DONECode.condition0IsTrue_0.val = false;
{
gdjs.DONECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects, runtimeScene, true, false);
}if (gdjs.DONECode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText32"), gdjs.DONECode.GDNewText32Objects1);
/* Reuse gdjs.DONECode.GDNewText322Objects1 */
{for(var i = 0, len = gdjs.DONECode.GDNewText322Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText322Objects1[i].getBehavior("Flash").Flash(1111, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DONECode.GDNewText32Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText32Objects1[i].getBehavior("Flash").Flash(1111, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText322"), gdjs.DONECode.GDNewText322Objects1);

gdjs.DONECode.condition0IsTrue_0.val = false;
{
gdjs.DONECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects, runtimeScene, true, true);
}if (gdjs.DONECode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText32"), gdjs.DONECode.GDNewText32Objects1);
/* Reuse gdjs.DONECode.GDNewText322Objects1 */
{for(var i = 0, len = gdjs.DONECode.GDNewText32Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText32Objects1[i].getBehavior("Flash").Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.DONECode.GDNewText322Objects1.length ;i < len;++i) {
    gdjs.DONECode.GDNewText322Objects1[i].getBehavior("Flash").Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText322"), gdjs.DONECode.GDNewText322Objects1);

gdjs.DONECode.condition0IsTrue_0.val = false;
gdjs.DONECode.condition1IsTrue_0.val = false;
{
gdjs.DONECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText322Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DONECode.condition0IsTrue_0.val ) {
{
gdjs.DONECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.DONECode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.DONECode.GDNewText3Objects1);

gdjs.DONECode.condition0IsTrue_0.val = false;
gdjs.DONECode.condition1IsTrue_0.val = false;
{
gdjs.DONECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DONECode.mapOfGDgdjs_46DONECode_46GDNewText3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.DONECode.condition0IsTrue_0.val ) {
{
gdjs.DONECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DONECode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://discord.com/invite/G3NXCg2vgu", runtimeScene);
}}

}


};

gdjs.DONECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DONECode.GDNewTextObjects1.length = 0;
gdjs.DONECode.GDNewTextObjects2.length = 0;
gdjs.DONECode.GDNewText2Objects1.length = 0;
gdjs.DONECode.GDNewText2Objects2.length = 0;
gdjs.DONECode.GDNewSpriteObjects1.length = 0;
gdjs.DONECode.GDNewSpriteObjects2.length = 0;
gdjs.DONECode.GDNewTiledSpriteObjects1.length = 0;
gdjs.DONECode.GDNewTiledSpriteObjects2.length = 0;
gdjs.DONECode.GDNewText3Objects1.length = 0;
gdjs.DONECode.GDNewText3Objects2.length = 0;
gdjs.DONECode.GDNewText32Objects1.length = 0;
gdjs.DONECode.GDNewText32Objects2.length = 0;
gdjs.DONECode.GDNewText322Objects1.length = 0;
gdjs.DONECode.GDNewText322Objects2.length = 0;

gdjs.DONECode.eventsList0(runtimeScene);
return;

}

gdjs['DONECode'] = gdjs.DONECode;
