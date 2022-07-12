gdjs.LVSLCode = {};
gdjs.LVSLCode.GDNewTextObjects1= [];
gdjs.LVSLCode.GDNewTextObjects2= [];
gdjs.LVSLCode.GDNewSpriteObjects1= [];
gdjs.LVSLCode.GDNewSpriteObjects2= [];
gdjs.LVSLCode.GDNewText2Objects1= [];
gdjs.LVSLCode.GDNewText2Objects2= [];
gdjs.LVSLCode.GDNewText23Objects1= [];
gdjs.LVSLCode.GDNewText23Objects2= [];
gdjs.LVSLCode.GDNewText232Objects1= [];
gdjs.LVSLCode.GDNewText232Objects2= [];
gdjs.LVSLCode.GDNewText2322Objects1= [];
gdjs.LVSLCode.GDNewText2322Objects2= [];
gdjs.LVSLCode.GDNewText22Objects1= [];
gdjs.LVSLCode.GDNewText22Objects2= [];

gdjs.LVSLCode.conditionTrue_0 = {val:false};
gdjs.LVSLCode.condition0IsTrue_0 = {val:false};
gdjs.LVSLCode.condition1IsTrue_0 = {val:false};
gdjs.LVSLCode.condition2IsTrue_0 = {val:false};


gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.LVSLCode.GDNewText2Objects1});
gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText22Objects1Objects = Hashtable.newFrom({"NewText22": gdjs.LVSLCode.GDNewText22Objects1});
gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText23Objects1Objects = Hashtable.newFrom({"NewText23": gdjs.LVSLCode.GDNewText23Objects1});
gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText232Objects1Objects = Hashtable.newFrom({"NewText232": gdjs.LVSLCode.GDNewText232Objects1});
gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText2322Objects1Objects = Hashtable.newFrom({"NewText2322": gdjs.LVSLCode.GDNewText2322Objects1});
gdjs.LVSLCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.LVSLCode.GDNewText2Objects1);

gdjs.LVSLCode.condition0IsTrue_0.val = false;
gdjs.LVSLCode.condition1IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LVSLCode.condition0IsTrue_0.val ) {
{
gdjs.LVSLCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText2Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.LVSLCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText22"), gdjs.LVSLCode.GDNewText22Objects1);

gdjs.LVSLCode.condition0IsTrue_0.val = false;
gdjs.LVSLCode.condition1IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LVSLCode.condition0IsTrue_0.val ) {
{
gdjs.LVSLCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText22Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.LVSLCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV2", false);
}}

}


{


gdjs.LVSLCode.condition0IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.LVSLCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText23"), gdjs.LVSLCode.GDNewText23Objects1);

gdjs.LVSLCode.condition0IsTrue_0.val = false;
gdjs.LVSLCode.condition1IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LVSLCode.condition0IsTrue_0.val ) {
{
gdjs.LVSLCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText23Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.LVSLCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText232"), gdjs.LVSLCode.GDNewText232Objects1);

gdjs.LVSLCode.condition0IsTrue_0.val = false;
gdjs.LVSLCode.condition1IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LVSLCode.condition0IsTrue_0.val ) {
{
gdjs.LVSLCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText232Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.LVSLCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2322"), gdjs.LVSLCode.GDNewText2322Objects1);

gdjs.LVSLCode.condition0IsTrue_0.val = false;
gdjs.LVSLCode.condition1IsTrue_0.val = false;
{
gdjs.LVSLCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LVSLCode.condition0IsTrue_0.val ) {
{
gdjs.LVSLCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LVSLCode.mapOfGDgdjs_46LVSLCode_46GDNewText2322Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.LVSLCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV5", false);
}}

}


{


{
}

}


};

gdjs.LVSLCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LVSLCode.GDNewTextObjects1.length = 0;
gdjs.LVSLCode.GDNewTextObjects2.length = 0;
gdjs.LVSLCode.GDNewSpriteObjects1.length = 0;
gdjs.LVSLCode.GDNewSpriteObjects2.length = 0;
gdjs.LVSLCode.GDNewText2Objects1.length = 0;
gdjs.LVSLCode.GDNewText2Objects2.length = 0;
gdjs.LVSLCode.GDNewText23Objects1.length = 0;
gdjs.LVSLCode.GDNewText23Objects2.length = 0;
gdjs.LVSLCode.GDNewText232Objects1.length = 0;
gdjs.LVSLCode.GDNewText232Objects2.length = 0;
gdjs.LVSLCode.GDNewText2322Objects1.length = 0;
gdjs.LVSLCode.GDNewText2322Objects2.length = 0;
gdjs.LVSLCode.GDNewText22Objects1.length = 0;
gdjs.LVSLCode.GDNewText22Objects2.length = 0;

gdjs.LVSLCode.eventsList0(runtimeScene);
return;

}

gdjs['LVSLCode'] = gdjs.LVSLCode;
