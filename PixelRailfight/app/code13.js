gdjs.TIT_32CARDCode = {};
gdjs.TIT_32CARDCode.GDNewTextObjects1= [];
gdjs.TIT_32CARDCode.GDNewTextObjects2= [];
gdjs.TIT_32CARDCode.GDNewText2Objects1= [];
gdjs.TIT_32CARDCode.GDNewText2Objects2= [];
gdjs.TIT_32CARDCode.GDNewTiledSpriteObjects1= [];
gdjs.TIT_32CARDCode.GDNewTiledSpriteObjects2= [];
gdjs.TIT_32CARDCode.GDNewSpriteObjects1= [];
gdjs.TIT_32CARDCode.GDNewSpriteObjects2= [];
gdjs.TIT_32CARDCode.GDNewSprite2Objects1= [];
gdjs.TIT_32CARDCode.GDNewSprite2Objects2= [];

gdjs.TIT_32CARDCode.conditionTrue_0 = {val:false};
gdjs.TIT_32CARDCode.condition0IsTrue_0 = {val:false};


gdjs.TIT_32CARDCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.TIT_32CARDCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.TIT_32CARDCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.TIT_32CARDCode.GDNewText2Objects1[i].setGradient("LINEAR_HORIZONTAL", "255;0;0", "21;255;0", "199;0;255", "12;0;255");
}
}}

}


};

gdjs.TIT_32CARDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TIT_32CARDCode.GDNewTextObjects1.length = 0;
gdjs.TIT_32CARDCode.GDNewTextObjects2.length = 0;
gdjs.TIT_32CARDCode.GDNewText2Objects1.length = 0;
gdjs.TIT_32CARDCode.GDNewText2Objects2.length = 0;
gdjs.TIT_32CARDCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.TIT_32CARDCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.TIT_32CARDCode.GDNewSpriteObjects1.length = 0;
gdjs.TIT_32CARDCode.GDNewSpriteObjects2.length = 0;
gdjs.TIT_32CARDCode.GDNewSprite2Objects1.length = 0;
gdjs.TIT_32CARDCode.GDNewSprite2Objects2.length = 0;

gdjs.TIT_32CARDCode.eventsList0(runtimeScene);
return;

}

gdjs['TIT_32CARDCode'] = gdjs.TIT_32CARDCode;
