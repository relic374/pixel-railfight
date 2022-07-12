gdjs.SMOKECode = {};
gdjs.SMOKECode.GDNewTiledSpriteObjects1= [];
gdjs.SMOKECode.GDNewTiledSpriteObjects2= [];
gdjs.SMOKECode.GDNewTextObjects1= [];
gdjs.SMOKECode.GDNewTextObjects2= [];
gdjs.SMOKECode.GDNewBBTextObjects1= [];
gdjs.SMOKECode.GDNewBBTextObjects2= [];

gdjs.SMOKECode.conditionTrue_0 = {val:false};
gdjs.SMOKECode.condition0IsTrue_0 = {val:false};
gdjs.SMOKECode.condition1IsTrue_0 = {val:false};
gdjs.SMOKECode.conditionTrue_1 = {val:false};
gdjs.SMOKECode.condition0IsTrue_1 = {val:false};
gdjs.SMOKECode.condition1IsTrue_1 = {val:false};


gdjs.SMOKECode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.SMOKECode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.SMOKECode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.SMOKECode.GDNewTiledSpriteObjects1[i].addForce(500, 500, 0);
}
}}

}


{


gdjs.SMOKECode.condition0IsTrue_0.val = false;
{
{gdjs.SMOKECode.conditionTrue_1 = gdjs.SMOKECode.condition0IsTrue_0;
gdjs.SMOKECode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16107908);
}
}if (gdjs.SMOKECode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Colt_45-Afroman-Without_Intro_(getmp3.pro).mp3", false, 100, 1);
}}

}


};

gdjs.SMOKECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SMOKECode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SMOKECode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SMOKECode.GDNewTextObjects1.length = 0;
gdjs.SMOKECode.GDNewTextObjects2.length = 0;
gdjs.SMOKECode.GDNewBBTextObjects1.length = 0;
gdjs.SMOKECode.GDNewBBTextObjects2.length = 0;

gdjs.SMOKECode.eventsList0(runtimeScene);
return;

}

gdjs['SMOKECode'] = gdjs.SMOKECode;
