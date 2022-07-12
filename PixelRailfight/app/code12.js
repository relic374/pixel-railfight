gdjs.ass_32idCode = {};
gdjs.ass_32idCode.GDNewTextObjects1= [];
gdjs.ass_32idCode.GDNewTextObjects2= [];
gdjs.ass_32idCode.GDNewText2Objects1= [];
gdjs.ass_32idCode.GDNewText2Objects2= [];
gdjs.ass_32idCode.GDNewTiledSpriteObjects1= [];
gdjs.ass_32idCode.GDNewTiledSpriteObjects2= [];
gdjs.ass_32idCode.GDNewSpriteObjects1= [];
gdjs.ass_32idCode.GDNewSpriteObjects2= [];
gdjs.ass_32idCode.GDNewSprite2Objects1= [];
gdjs.ass_32idCode.GDNewSprite2Objects2= [];
gdjs.ass_32idCode.GDNewText3Objects1= [];
gdjs.ass_32idCode.GDNewText3Objects2= [];

gdjs.ass_32idCode.conditionTrue_0 = {val:false};
gdjs.ass_32idCode.condition0IsTrue_0 = {val:false};


gdjs.ass_32idCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.ass_32idCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.ass_32idCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.ass_32idCode.GDNewText2Objects1[i].setGradient("LINEAR_HORIZONTAL", "255;0;0", "21;255;0", "199;0;255", "12;0;255");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ass_32idCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.ass_32idCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.ass_32idCode.GDNewSprite2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(2, 5, 5, 5, 0.02, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.ass_32idCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ass_32idCode.GDNewTextObjects1.length = 0;
gdjs.ass_32idCode.GDNewTextObjects2.length = 0;
gdjs.ass_32idCode.GDNewText2Objects1.length = 0;
gdjs.ass_32idCode.GDNewText2Objects2.length = 0;
gdjs.ass_32idCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ass_32idCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ass_32idCode.GDNewSpriteObjects1.length = 0;
gdjs.ass_32idCode.GDNewSpriteObjects2.length = 0;
gdjs.ass_32idCode.GDNewSprite2Objects1.length = 0;
gdjs.ass_32idCode.GDNewSprite2Objects2.length = 0;
gdjs.ass_32idCode.GDNewText3Objects1.length = 0;
gdjs.ass_32idCode.GDNewText3Objects2.length = 0;

gdjs.ass_32idCode.eventsList0(runtimeScene);
return;

}

gdjs['ass_32idCode'] = gdjs.ass_32idCode;
