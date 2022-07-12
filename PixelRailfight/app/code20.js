gdjs.TIPZCode = {};
gdjs.TIPZCode.GDNewSpriteObjects1= [];
gdjs.TIPZCode.GDNewSpriteObjects2= [];
gdjs.TIPZCode.GDNewTextObjects1= [];
gdjs.TIPZCode.GDNewTextObjects2= [];
gdjs.TIPZCode.GDNewText2Objects1= [];
gdjs.TIPZCode.GDNewText2Objects2= [];
gdjs.TIPZCode.GDNewSprite2Objects1= [];
gdjs.TIPZCode.GDNewSprite2Objects2= [];
gdjs.TIPZCode.GDNewSprite22Objects1= [];
gdjs.TIPZCode.GDNewSprite22Objects2= [];
gdjs.TIPZCode.GDNewSprite3Objects1= [];
gdjs.TIPZCode.GDNewSprite3Objects2= [];
gdjs.TIPZCode.GDNewText3Objects1= [];
gdjs.TIPZCode.GDNewText3Objects2= [];

gdjs.TIPZCode.conditionTrue_0 = {val:false};
gdjs.TIPZCode.condition0IsTrue_0 = {val:false};
gdjs.TIPZCode.condition1IsTrue_0 = {val:false};


gdjs.TIPZCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;206;71");
}}

}


{


gdjs.TIPZCode.condition0IsTrue_0.val = false;
{
gdjs.TIPZCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.TIPZCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


};

gdjs.TIPZCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TIPZCode.GDNewSpriteObjects1.length = 0;
gdjs.TIPZCode.GDNewSpriteObjects2.length = 0;
gdjs.TIPZCode.GDNewTextObjects1.length = 0;
gdjs.TIPZCode.GDNewTextObjects2.length = 0;
gdjs.TIPZCode.GDNewText2Objects1.length = 0;
gdjs.TIPZCode.GDNewText2Objects2.length = 0;
gdjs.TIPZCode.GDNewSprite2Objects1.length = 0;
gdjs.TIPZCode.GDNewSprite2Objects2.length = 0;
gdjs.TIPZCode.GDNewSprite22Objects1.length = 0;
gdjs.TIPZCode.GDNewSprite22Objects2.length = 0;
gdjs.TIPZCode.GDNewSprite3Objects1.length = 0;
gdjs.TIPZCode.GDNewSprite3Objects2.length = 0;
gdjs.TIPZCode.GDNewText3Objects1.length = 0;
gdjs.TIPZCode.GDNewText3Objects2.length = 0;

gdjs.TIPZCode.eventsList0(runtimeScene);
return;

}

gdjs['TIPZCode'] = gdjs.TIPZCode;
