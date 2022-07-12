gdjs.LV5Code = {};
gdjs.LV5Code.GDNewTiledSpriteObjects1= [];
gdjs.LV5Code.GDNewTiledSpriteObjects2= [];
gdjs.LV5Code.GDNewSpriteObjects1= [];
gdjs.LV5Code.GDNewSpriteObjects2= [];
gdjs.LV5Code.GDADObjects1= [];
gdjs.LV5Code.GDADObjects2= [];
gdjs.LV5Code.GDNewSprite2Objects1= [];
gdjs.LV5Code.GDNewSprite2Objects2= [];
gdjs.LV5Code.GDmyElapsedObjects1= [];
gdjs.LV5Code.GDmyElapsedObjects2= [];
gdjs.LV5Code.GDNewSprite3Objects1= [];
gdjs.LV5Code.GDNewSprite3Objects2= [];
gdjs.LV5Code.GDNewSprite4Objects1= [];
gdjs.LV5Code.GDNewSprite4Objects2= [];
gdjs.LV5Code.GDNewSprite5Objects1= [];
gdjs.LV5Code.GDNewSprite5Objects2= [];
gdjs.LV5Code.GDNewSprite6Objects1= [];
gdjs.LV5Code.GDNewSprite6Objects2= [];
gdjs.LV5Code.GDNewSprite7Objects1= [];
gdjs.LV5Code.GDNewSprite7Objects2= [];
gdjs.LV5Code.GDNewTextObjects1= [];
gdjs.LV5Code.GDNewTextObjects2= [];
gdjs.LV5Code.GDNewSprite8Objects1= [];
gdjs.LV5Code.GDNewSprite8Objects2= [];
gdjs.LV5Code.GDNewParticlesEmitterObjects1= [];
gdjs.LV5Code.GDNewParticlesEmitterObjects2= [];
gdjs.LV5Code.GDNewSprite16Objects1= [];
gdjs.LV5Code.GDNewSprite16Objects2= [];
gdjs.LV5Code.GDNewSprite9Objects1= [];
gdjs.LV5Code.GDNewSprite9Objects2= [];
gdjs.LV5Code.GDNewSprite10Objects1= [];
gdjs.LV5Code.GDNewSprite10Objects2= [];
gdjs.LV5Code.GDNewText2Objects1= [];
gdjs.LV5Code.GDNewText2Objects2= [];
gdjs.LV5Code.GDNewSprite11Objects1= [];
gdjs.LV5Code.GDNewSprite11Objects2= [];
gdjs.LV5Code.GDNewSprite12Objects1= [];
gdjs.LV5Code.GDNewSprite12Objects2= [];
gdjs.LV5Code.GDNewTiledSprite2Objects1= [];
gdjs.LV5Code.GDNewTiledSprite2Objects2= [];
gdjs.LV5Code.GDNewSprite13Objects1= [];
gdjs.LV5Code.GDNewSprite13Objects2= [];
gdjs.LV5Code.GDNewSprite14Objects1= [];
gdjs.LV5Code.GDNewSprite14Objects2= [];
gdjs.LV5Code.GDNewSprite15Objects1= [];
gdjs.LV5Code.GDNewSprite15Objects2= [];
gdjs.LV5Code.GDNewSprite17Objects1= [];
gdjs.LV5Code.GDNewSprite17Objects2= [];

gdjs.LV5Code.conditionTrue_0 = {val:false};
gdjs.LV5Code.condition0IsTrue_0 = {val:false};
gdjs.LV5Code.condition1IsTrue_0 = {val:false};
gdjs.LV5Code.condition2IsTrue_0 = {val:false};
gdjs.LV5Code.conditionTrue_1 = {val:false};
gdjs.LV5Code.condition0IsTrue_1 = {val:false};
gdjs.LV5Code.condition1IsTrue_1 = {val:false};
gdjs.LV5Code.condition2IsTrue_1 = {val:false};


gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV5Code.GDNewSpriteObjects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.LV5Code.GDNewSprite4Objects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV5Code.GDNewSpriteObjects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.LV5Code.GDNewSprite4Objects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.LV5Code.GDNewSprite6Objects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.LV5Code.GDNewSprite6Objects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.LV5Code.GDNewSprite8Objects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewParticlesEmitterObjects1Objects = Hashtable.newFrom({"NewParticlesEmitter": gdjs.LV5Code.GDNewParticlesEmitterObjects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV5Code.GDNewSpriteObjects1});
gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.LV5Code.GDNewSprite8Objects1});
gdjs.LV5Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "109;103;0");
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV5Code.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.LV5Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDmyElapsedObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.LV5Code.GDNewSprite4Objects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects, gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite4Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV5Code.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV5Code.GDmyElapsedObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.LV5Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSpriteObjects1[0].getPointX("")), "", 0);
}{for(var i = 0, len = gdjs.LV5Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDmyElapsedObjects1[i].setX((( gdjs.LV5Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSpriteObjects1[0].getPointX("")) - 370);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.LV5Code.GDNewSprite4Objects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects, gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite4Objects1Objects, true, runtimeScene, false);
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LV5Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV5Code.GDmyElapsedObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LV5Code.GDNewSprite2Objects1.length !== 0 ? gdjs.LV5Code.GDNewSprite2Objects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.LV5Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDmyElapsedObjects1[i].setPosition(2,13);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LV5Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.LV5Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.LV5Code.condition0IsTrue_0.val = true;
        gdjs.LV5Code.GDNewSpriteObjects1[k] = gdjs.LV5Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.LV5Code.GDNewSpriteObjects1.length = k;}if (gdjs.LV5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV5Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LV5Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.LV5Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.LV5Code.condition0IsTrue_0.val = true;
        gdjs.LV5Code.GDNewSpriteObjects1[k] = gdjs.LV5Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.LV5Code.GDNewSpriteObjects1.length = k;}if (gdjs.LV5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV5Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
gdjs.LV5Code.condition1IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 0.4;
}if ( gdjs.LV5Code.condition0IsTrue_0.val ) {
{
gdjs.LV5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}}
if (gdjs.LV5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.LV5Code.GDNewSprite6Objects1.length = 0;

{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite6Objects1Objects, (( gdjs.LV5Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.LV5Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSpriteObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.LV5Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite6Objects1[i].addForce(1200, 0, 0);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition0IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15843380);
}
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LV5Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1111, 6, 6, 6, 0.5, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV5Code.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite8Objects1[i].addForceTowardObject((gdjs.LV5Code.GDNewSpriteObjects1.length !== 0 ? gdjs.LV5Code.GDNewSpriteObjects1[0] : null), 400, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.LV5Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV5Code.GDNewSprite8Objects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
gdjs.LV5Code.condition1IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite6Objects1Objects, gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if ( gdjs.LV5Code.condition0IsTrue_0.val ) {
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition1IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15845308);
}
}}
if (gdjs.LV5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.LV5Code.GDNewSprite6Objects1 */
/* Reuse gdjs.LV5Code.GDNewSprite8Objects1 */
gdjs.LV5Code.GDNewParticlesEmitterObjects1.length = 0;

{for(var i = 0, len = gdjs.LV5Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LV5Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewParticlesEmitterObjects1Objects, (( gdjs.LV5Code.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSprite8Objects1[0].getPointX("")), (( gdjs.LV5Code.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.LV5Code.GDNewSprite8Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.LV5Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewParticlesEmitterObjects1[i].setAngle(270);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV5Code.GDNewSprite8Objects1);

gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSpriteObjects1Objects, gdjs.LV5Code.mapOfGDgdjs_46LV5Code_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition0IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15849204);
}
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LV5Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(3, 8, 8, 8, 0.04, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition0IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15850220);
}
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
gdjs.LV5Code.condition1IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 3;
}if ( gdjs.LV5Code.condition0IsTrue_0.val ) {
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition1IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15850980);
}
}}
if (gdjs.LV5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LV5Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.4, 32, 32, 32, 0.03, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition0IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15852788);
}
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.LV5Code.GDNewSprite11Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite11Objects1[i].setOpacity(1);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 4.5;
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.LV5Code.GDNewSprite11Objects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSprite11Objects1[i].getBehavior("Tween").addObjectOpacityTween("a", 255, "linear", 800, false);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 3;
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].activateBehavior("Physics2", true);
}
}{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].getBehavior("Physics2").applyForce(-(300), -(234), (gdjs.LV5Code.GDNewSpriteObjects1[i].getPointX("")), (gdjs.LV5Code.GDNewSpriteObjects1[i].getPointY("")));
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
{gdjs.LV5Code.conditionTrue_1 = gdjs.LV5Code.condition0IsTrue_0;
gdjs.LV5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15838076);
}
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV5Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV5Code.GDNewSpriteObjects1[i].activateBehavior("Physics2", false);
}
}}

}


{


gdjs.LV5Code.condition0IsTrue_0.val = false;
{
gdjs.LV5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 8.32;
}if (gdjs.LV5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;205;89");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "er", false);
}}

}


};

gdjs.LV5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LV5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.LV5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.LV5Code.GDNewSpriteObjects1.length = 0;
gdjs.LV5Code.GDNewSpriteObjects2.length = 0;
gdjs.LV5Code.GDADObjects1.length = 0;
gdjs.LV5Code.GDADObjects2.length = 0;
gdjs.LV5Code.GDNewSprite2Objects1.length = 0;
gdjs.LV5Code.GDNewSprite2Objects2.length = 0;
gdjs.LV5Code.GDmyElapsedObjects1.length = 0;
gdjs.LV5Code.GDmyElapsedObjects2.length = 0;
gdjs.LV5Code.GDNewSprite3Objects1.length = 0;
gdjs.LV5Code.GDNewSprite3Objects2.length = 0;
gdjs.LV5Code.GDNewSprite4Objects1.length = 0;
gdjs.LV5Code.GDNewSprite4Objects2.length = 0;
gdjs.LV5Code.GDNewSprite5Objects1.length = 0;
gdjs.LV5Code.GDNewSprite5Objects2.length = 0;
gdjs.LV5Code.GDNewSprite6Objects1.length = 0;
gdjs.LV5Code.GDNewSprite6Objects2.length = 0;
gdjs.LV5Code.GDNewSprite7Objects1.length = 0;
gdjs.LV5Code.GDNewSprite7Objects2.length = 0;
gdjs.LV5Code.GDNewTextObjects1.length = 0;
gdjs.LV5Code.GDNewTextObjects2.length = 0;
gdjs.LV5Code.GDNewSprite8Objects1.length = 0;
gdjs.LV5Code.GDNewSprite8Objects2.length = 0;
gdjs.LV5Code.GDNewParticlesEmitterObjects1.length = 0;
gdjs.LV5Code.GDNewParticlesEmitterObjects2.length = 0;
gdjs.LV5Code.GDNewSprite16Objects1.length = 0;
gdjs.LV5Code.GDNewSprite16Objects2.length = 0;
gdjs.LV5Code.GDNewSprite9Objects1.length = 0;
gdjs.LV5Code.GDNewSprite9Objects2.length = 0;
gdjs.LV5Code.GDNewSprite10Objects1.length = 0;
gdjs.LV5Code.GDNewSprite10Objects2.length = 0;
gdjs.LV5Code.GDNewText2Objects1.length = 0;
gdjs.LV5Code.GDNewText2Objects2.length = 0;
gdjs.LV5Code.GDNewSprite11Objects1.length = 0;
gdjs.LV5Code.GDNewSprite11Objects2.length = 0;
gdjs.LV5Code.GDNewSprite12Objects1.length = 0;
gdjs.LV5Code.GDNewSprite12Objects2.length = 0;
gdjs.LV5Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.LV5Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.LV5Code.GDNewSprite13Objects1.length = 0;
gdjs.LV5Code.GDNewSprite13Objects2.length = 0;
gdjs.LV5Code.GDNewSprite14Objects1.length = 0;
gdjs.LV5Code.GDNewSprite14Objects2.length = 0;
gdjs.LV5Code.GDNewSprite15Objects1.length = 0;
gdjs.LV5Code.GDNewSprite15Objects2.length = 0;
gdjs.LV5Code.GDNewSprite17Objects1.length = 0;
gdjs.LV5Code.GDNewSprite17Objects2.length = 0;

gdjs.LV5Code.eventsList0(runtimeScene);
return;

}

gdjs['LV5Code'] = gdjs.LV5Code;
