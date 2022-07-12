gdjs.pauseCode = {};
gdjs.pauseCode.GDNewTextObjects1= [];
gdjs.pauseCode.GDNewTextObjects2= [];
gdjs.pauseCode.GDNewTiledSpriteObjects1= [];
gdjs.pauseCode.GDNewTiledSpriteObjects2= [];
gdjs.pauseCode.GDNewSpriteObjects1= [];
gdjs.pauseCode.GDNewSpriteObjects2= [];
gdjs.pauseCode.GDNewText2Objects1= [];
gdjs.pauseCode.GDNewText2Objects2= [];
gdjs.pauseCode.GDNewText22Objects1= [];
gdjs.pauseCode.GDNewText22Objects2= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};
gdjs.pauseCode.condition2IsTrue_0 = {val:false};


gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.pauseCode.GDNewText2Objects1});
gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewText22Objects1Objects = Hashtable.newFrom({"NewText22": gdjs.pauseCode.GDNewText22Objects1});
gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.pauseCode.GDNewText2Objects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewText2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText22"), gdjs.pauseCode.GDNewText22Objects1);

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDNewText22Objects1Objects, runtimeScene, true, false);
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDNewTextObjects1.length = 0;
gdjs.pauseCode.GDNewTextObjects2.length = 0;
gdjs.pauseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.pauseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.pauseCode.GDNewSpriteObjects1.length = 0;
gdjs.pauseCode.GDNewSpriteObjects2.length = 0;
gdjs.pauseCode.GDNewText2Objects1.length = 0;
gdjs.pauseCode.GDNewText2Objects2.length = 0;
gdjs.pauseCode.GDNewText22Objects1.length = 0;
gdjs.pauseCode.GDNewText22Objects2.length = 0;

gdjs.pauseCode.eventsList0(runtimeScene);
return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
