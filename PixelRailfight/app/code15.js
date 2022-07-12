gdjs.CONCode = {};
gdjs.CONCode.GDNewTextObjects1= [];
gdjs.CONCode.GDNewTextObjects2= [];
gdjs.CONCode.GDNewSpriteObjects1= [];
gdjs.CONCode.GDNewSpriteObjects2= [];
gdjs.CONCode.GDNewSprite2Objects1= [];
gdjs.CONCode.GDNewSprite2Objects2= [];
gdjs.CONCode.GDNewSprite3Objects1= [];
gdjs.CONCode.GDNewSprite3Objects2= [];
gdjs.CONCode.GDNewSprite4Objects1= [];
gdjs.CONCode.GDNewSprite4Objects2= [];
gdjs.CONCode.GDNewSprite5Objects1= [];
gdjs.CONCode.GDNewSprite5Objects2= [];
gdjs.CONCode.GDNewSprite6Objects1= [];
gdjs.CONCode.GDNewSprite6Objects2= [];
gdjs.CONCode.GDNewSprite7Objects1= [];
gdjs.CONCode.GDNewSprite7Objects2= [];
gdjs.CONCode.GDNewText2Objects1= [];
gdjs.CONCode.GDNewText2Objects2= [];
gdjs.CONCode.GDNewSprite8Objects1= [];
gdjs.CONCode.GDNewSprite8Objects2= [];
gdjs.CONCode.GDNewSprite62Objects1= [];
gdjs.CONCode.GDNewSprite62Objects2= [];
gdjs.CONCode.GDNewSprite9Objects1= [];
gdjs.CONCode.GDNewSprite9Objects2= [];
gdjs.CONCode.GDNewTiledSpriteObjects1= [];
gdjs.CONCode.GDNewTiledSpriteObjects2= [];
gdjs.CONCode.GDNewSprite10Objects1= [];
gdjs.CONCode.GDNewSprite10Objects2= [];
gdjs.CONCode.GDNewSprite11Objects1= [];
gdjs.CONCode.GDNewSprite11Objects2= [];
gdjs.CONCode.GDNewSprite12Objects1= [];
gdjs.CONCode.GDNewSprite12Objects2= [];
gdjs.CONCode.GDNewSprite13Objects1= [];
gdjs.CONCode.GDNewSprite13Objects2= [];
gdjs.CONCode.GDNewSprite14Objects1= [];
gdjs.CONCode.GDNewSprite14Objects2= [];
gdjs.CONCode.GDNewSprite15Objects1= [];
gdjs.CONCode.GDNewSprite15Objects2= [];

gdjs.CONCode.conditionTrue_0 = {val:false};
gdjs.CONCode.condition0IsTrue_0 = {val:false};
gdjs.CONCode.condition1IsTrue_0 = {val:false};
gdjs.CONCode.condition2IsTrue_0 = {val:false};
gdjs.CONCode.conditionTrue_1 = {val:false};
gdjs.CONCode.condition0IsTrue_1 = {val:false};
gdjs.CONCode.condition1IsTrue_1 = {val:false};
gdjs.CONCode.condition2IsTrue_1 = {val:false};


gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite62Objects1Objects = Hashtable.newFrom({"NewSprite62": gdjs.CONCode.GDNewSprite62Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite62Objects1Objects = Hashtable.newFrom({"NewSprite62": gdjs.CONCode.GDNewSprite62Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.CONCode.GDNewSprite5Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite13Objects1Objects = Hashtable.newFrom({"NewSprite13": gdjs.CONCode.GDNewSprite13Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.CONCode.GDNewSprite4Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite15Objects1Objects = Hashtable.newFrom({"NewSprite15": gdjs.CONCode.GDNewSprite15Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.CONCode.GDNewSprite4Objects1});
gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite15Objects1Objects = Hashtable.newFrom({"NewSprite15": gdjs.CONCode.GDNewSprite15Objects1});
gdjs.CONCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.7, "", 0);
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
gdjs.CONCode.condition1IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 0.4;
}if ( gdjs.CONCode.condition0IsTrue_0.val ) {
{
gdjs.CONCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}}
if (gdjs.CONCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
gdjs.CONCode.GDNewSprite62Objects1.length = 0;

{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite62Objects1Objects, (( gdjs.CONCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.CONCode.GDNewSprite3Objects1[0].getPointX("")), (( gdjs.CONCode.GDNewSprite3Objects1.length === 0 ) ? 0 :gdjs.CONCode.GDNewSprite3Objects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite62"), gdjs.CONCode.GDNewSprite62Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite62Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite62Objects1[i].addForce(1200, 0, 0);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
{gdjs.CONCode.conditionTrue_1 = gdjs.CONCode.condition0IsTrue_0;
gdjs.CONCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16141020);
}
}if (gdjs.CONCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.CONCode.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite62"), gdjs.CONCode.GDNewSprite62Objects1);

gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite62Objects1Objects, gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite5Objects1Objects, false, runtimeScene, false);
}if (gdjs.CONCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CONCode.GDNewSprite62Objects1 */
{for(var i = 0, len = gdjs.CONCode.GDNewSprite62Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite62Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
gdjs.CONCode.condition1IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 0.4);
}if ( gdjs.CONCode.condition0IsTrue_0.val ) {
{
gdjs.CONCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e"));
}}
if (gdjs.CONCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(3);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(3);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


{
}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
gdjs.CONCode.condition1IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs.CONCode.condition0IsTrue_0.val ) {
{
{gdjs.CONCode.conditionTrue_1 = gdjs.CONCode.condition1IsTrue_0;
gdjs.CONCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16149268);
}
}}
if (gdjs.CONCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
gdjs.CONCode.condition1IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.CONCode.condition0IsTrue_0.val ) {
{
{gdjs.CONCode.conditionTrue_1 = gdjs.CONCode.condition1IsTrue_0;
gdjs.CONCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16149684);
}
}}
if (gdjs.CONCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CONCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite3Objects1[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite13"), gdjs.CONCode.GDNewSprite13Objects1);

gdjs.CONCode.condition0IsTrue_0.val = false;
gdjs.CONCode.condition1IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite13Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CONCode.condition0IsTrue_0.val ) {
{
gdjs.CONCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CONCode.condition1IsTrue_0.val) {
{gdjs.evtTools.debuggerTools.enableDebugDraw(runtimeScene, true, true, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite15"), gdjs.CONCode.GDNewSprite15Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.CONCode.GDNewSprite4Objects1);

gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite4Objects1Objects, gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite15Objects1Objects, false, runtimeScene, false);
}if (gdjs.CONCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite14"), gdjs.CONCode.GDNewSprite14Objects1);
{for(var i = 0, len = gdjs.CONCode.GDNewSprite14Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite14Objects1[i].activateBehavior("LinearMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite15"), gdjs.CONCode.GDNewSprite15Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.CONCode.GDNewSprite4Objects1);

gdjs.CONCode.condition0IsTrue_0.val = false;
{
gdjs.CONCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite4Objects1Objects, gdjs.CONCode.mapOfGDgdjs_46CONCode_46GDNewSprite15Objects1Objects, false, runtimeScene, false);
}if (gdjs.CONCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CONCode.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.CONCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.CONCode.GDNewSprite4Objects1[i].activateBehavior("LinearMovement", false);
}
}}

}


};

gdjs.CONCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CONCode.GDNewTextObjects1.length = 0;
gdjs.CONCode.GDNewTextObjects2.length = 0;
gdjs.CONCode.GDNewSpriteObjects1.length = 0;
gdjs.CONCode.GDNewSpriteObjects2.length = 0;
gdjs.CONCode.GDNewSprite2Objects1.length = 0;
gdjs.CONCode.GDNewSprite2Objects2.length = 0;
gdjs.CONCode.GDNewSprite3Objects1.length = 0;
gdjs.CONCode.GDNewSprite3Objects2.length = 0;
gdjs.CONCode.GDNewSprite4Objects1.length = 0;
gdjs.CONCode.GDNewSprite4Objects2.length = 0;
gdjs.CONCode.GDNewSprite5Objects1.length = 0;
gdjs.CONCode.GDNewSprite5Objects2.length = 0;
gdjs.CONCode.GDNewSprite6Objects1.length = 0;
gdjs.CONCode.GDNewSprite6Objects2.length = 0;
gdjs.CONCode.GDNewSprite7Objects1.length = 0;
gdjs.CONCode.GDNewSprite7Objects2.length = 0;
gdjs.CONCode.GDNewText2Objects1.length = 0;
gdjs.CONCode.GDNewText2Objects2.length = 0;
gdjs.CONCode.GDNewSprite8Objects1.length = 0;
gdjs.CONCode.GDNewSprite8Objects2.length = 0;
gdjs.CONCode.GDNewSprite62Objects1.length = 0;
gdjs.CONCode.GDNewSprite62Objects2.length = 0;
gdjs.CONCode.GDNewSprite9Objects1.length = 0;
gdjs.CONCode.GDNewSprite9Objects2.length = 0;
gdjs.CONCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CONCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CONCode.GDNewSprite10Objects1.length = 0;
gdjs.CONCode.GDNewSprite10Objects2.length = 0;
gdjs.CONCode.GDNewSprite11Objects1.length = 0;
gdjs.CONCode.GDNewSprite11Objects2.length = 0;
gdjs.CONCode.GDNewSprite12Objects1.length = 0;
gdjs.CONCode.GDNewSprite12Objects2.length = 0;
gdjs.CONCode.GDNewSprite13Objects1.length = 0;
gdjs.CONCode.GDNewSprite13Objects2.length = 0;
gdjs.CONCode.GDNewSprite14Objects1.length = 0;
gdjs.CONCode.GDNewSprite14Objects2.length = 0;
gdjs.CONCode.GDNewSprite15Objects1.length = 0;
gdjs.CONCode.GDNewSprite15Objects2.length = 0;

gdjs.CONCode.eventsList0(runtimeScene);
return;

}

gdjs['CONCode'] = gdjs.CONCode;
