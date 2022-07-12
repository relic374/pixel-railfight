gdjs.LV1Code = {};
gdjs.LV1Code.GDNewSpriteObjects1= [];
gdjs.LV1Code.GDNewSpriteObjects2= [];
gdjs.LV1Code.GDNewTiledSpriteObjects1= [];
gdjs.LV1Code.GDNewTiledSpriteObjects2= [];
gdjs.LV1Code.GDNewSprite2Objects1= [];
gdjs.LV1Code.GDNewSprite2Objects2= [];
gdjs.LV1Code.GDmyElapsedObjects1= [];
gdjs.LV1Code.GDmyElapsedObjects2= [];
gdjs.LV1Code.GDNewSprite3Objects1= [];
gdjs.LV1Code.GDNewSprite3Objects2= [];
gdjs.LV1Code.GDNewSprite4Objects1= [];
gdjs.LV1Code.GDNewSprite4Objects2= [];
gdjs.LV1Code.GDNewSprite5Objects1= [];
gdjs.LV1Code.GDNewSprite5Objects2= [];
gdjs.LV1Code.GDNewSprite6Objects1= [];
gdjs.LV1Code.GDNewSprite6Objects2= [];
gdjs.LV1Code.GDNewSprite7Objects1= [];
gdjs.LV1Code.GDNewSprite7Objects2= [];
gdjs.LV1Code.GDNewTextObjects1= [];
gdjs.LV1Code.GDNewTextObjects2= [];
gdjs.LV1Code.GDNewSprite8Objects1= [];
gdjs.LV1Code.GDNewSprite8Objects2= [];
gdjs.LV1Code.GDNewParticlesEmitterObjects1= [];
gdjs.LV1Code.GDNewParticlesEmitterObjects2= [];
gdjs.LV1Code.GDNewSprite9Objects1= [];
gdjs.LV1Code.GDNewSprite9Objects2= [];
gdjs.LV1Code.GDNewSprite10Objects1= [];
gdjs.LV1Code.GDNewSprite10Objects2= [];
gdjs.LV1Code.GDNewSprite16Objects1= [];
gdjs.LV1Code.GDNewSprite16Objects2= [];
gdjs.LV1Code.GDNewText2Objects1= [];
gdjs.LV1Code.GDNewText2Objects2= [];

gdjs.LV1Code.conditionTrue_0 = {val:false};
gdjs.LV1Code.condition0IsTrue_0 = {val:false};
gdjs.LV1Code.condition1IsTrue_0 = {val:false};
gdjs.LV1Code.condition2IsTrue_0 = {val:false};
gdjs.LV1Code.conditionTrue_1 = {val:false};
gdjs.LV1Code.condition0IsTrue_1 = {val:false};
gdjs.LV1Code.condition1IsTrue_1 = {val:false};
gdjs.LV1Code.condition2IsTrue_1 = {val:false};


gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV1Code.GDNewSpriteObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.LV1Code.GDNewSprite4Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV1Code.GDNewSpriteObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.LV1Code.GDNewSprite4Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.LV1Code.GDNewSprite6Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.LV1Code.GDNewSprite6Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.LV1Code.GDNewSprite8Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewParticlesEmitterObjects1Objects = Hashtable.newFrom({"NewParticlesEmitter": gdjs.LV1Code.GDNewParticlesEmitterObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV1Code.GDNewSpriteObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.LV1Code.GDNewSprite8Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV1Code.GDNewSpriteObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.LV1Code.GDNewSprite9Objects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LV1Code.GDNewSpriteObjects1});
gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite10Objects1Objects = Hashtable.newFrom({"NewSprite10": gdjs.LV1Code.GDNewSprite10Objects1});
gdjs.LV1Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "109;39;0");
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV1Code.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.LV1Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDmyElapsedObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.LV1Code.GDNewSprite4Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite4Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV1Code.GDmyElapsedObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.LV1Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSpriteObjects1[0].getPointX("")), "", 0);
}{for(var i = 0, len = gdjs.LV1Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDmyElapsedObjects1[i].setX((( gdjs.LV1Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSpriteObjects1[0].getPointX("")) - 370);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.LV1Code.GDNewSprite4Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite4Objects1Objects, true, runtimeScene, false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LV1Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.LV1Code.GDmyElapsedObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LV1Code.GDNewSprite2Objects1.length !== 0 ? gdjs.LV1Code.GDNewSprite2Objects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.LV1Code.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDmyElapsedObjects1[i].setPosition(2,13);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LV1Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.LV1Code.condition0IsTrue_0.val = true;
        gdjs.LV1Code.GDNewSpriteObjects1[k] = gdjs.LV1Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.LV1Code.GDNewSpriteObjects1.length = k;}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LV1Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.LV1Code.condition0IsTrue_0.val = true;
        gdjs.LV1Code.GDNewSpriteObjects1[k] = gdjs.LV1Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.LV1Code.GDNewSpriteObjects1.length = k;}if (gdjs.LV1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
gdjs.LV1Code.condition1IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 0.4;
}if ( gdjs.LV1Code.condition0IsTrue_0.val ) {
{
gdjs.LV1Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}}
if (gdjs.LV1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.LV1Code.GDNewSprite6Objects1.length = 0;

{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite6Objects1Objects, (( gdjs.LV1Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.LV1Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSpriteObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.LV1Code.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSprite6Objects1[i].addForce(1200, 0, 0);
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
{gdjs.LV1Code.conditionTrue_1 = gdjs.LV1Code.condition0IsTrue_0;
gdjs.LV1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16025124);
}
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LV1Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1111, 6, 6, 6, 0.5, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV1Code.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSprite8Objects1[i].addForceTowardObject((gdjs.LV1Code.GDNewSpriteObjects1.length !== 0 ? gdjs.LV1Code.GDNewSpriteObjects1[0] : null), 400, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.LV1Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV1Code.GDNewSprite8Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
gdjs.LV1Code.condition1IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite6Objects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if ( gdjs.LV1Code.condition0IsTrue_0.val ) {
{
{gdjs.LV1Code.conditionTrue_1 = gdjs.LV1Code.condition1IsTrue_0;
gdjs.LV1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16027260);
}
}}
if (gdjs.LV1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.LV1Code.GDNewSprite6Objects1 */
/* Reuse gdjs.LV1Code.GDNewSprite8Objects1 */
gdjs.LV1Code.GDNewParticlesEmitterObjects1.length = 0;

{for(var i = 0, len = gdjs.LV1Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.LV1Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewParticlesEmitterObjects1Objects, (( gdjs.LV1Code.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSprite8Objects1[0].getPointX("")), (( gdjs.LV1Code.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.LV1Code.GDNewSprite8Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.LV1Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewParticlesEmitterObjects1[i].setAngle(270);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.LV1Code.GDNewSprite8Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.LV1Code.GDNewSprite9Objects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSprite9Objects1[i].rotate(400, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.LV1Code.GDNewSprite9Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite9Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.LV1Code.GDNewSprite10Objects1);

gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSpriteObjects1Objects, gdjs.LV1Code.mapOfGDgdjs_46LV1Code_46GDNewSprite10Objects1Objects, false, runtimeScene, false);
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LV2", false);
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.LV1Code.condition0IsTrue_0.val = false;
{
gdjs.LV1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.LV1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LV1Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.LV1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.LV1Code.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


{
}

}


};

gdjs.LV1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LV1Code.GDNewSpriteObjects1.length = 0;
gdjs.LV1Code.GDNewSpriteObjects2.length = 0;
gdjs.LV1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.LV1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.LV1Code.GDNewSprite2Objects1.length = 0;
gdjs.LV1Code.GDNewSprite2Objects2.length = 0;
gdjs.LV1Code.GDmyElapsedObjects1.length = 0;
gdjs.LV1Code.GDmyElapsedObjects2.length = 0;
gdjs.LV1Code.GDNewSprite3Objects1.length = 0;
gdjs.LV1Code.GDNewSprite3Objects2.length = 0;
gdjs.LV1Code.GDNewSprite4Objects1.length = 0;
gdjs.LV1Code.GDNewSprite4Objects2.length = 0;
gdjs.LV1Code.GDNewSprite5Objects1.length = 0;
gdjs.LV1Code.GDNewSprite5Objects2.length = 0;
gdjs.LV1Code.GDNewSprite6Objects1.length = 0;
gdjs.LV1Code.GDNewSprite6Objects2.length = 0;
gdjs.LV1Code.GDNewSprite7Objects1.length = 0;
gdjs.LV1Code.GDNewSprite7Objects2.length = 0;
gdjs.LV1Code.GDNewTextObjects1.length = 0;
gdjs.LV1Code.GDNewTextObjects2.length = 0;
gdjs.LV1Code.GDNewSprite8Objects1.length = 0;
gdjs.LV1Code.GDNewSprite8Objects2.length = 0;
gdjs.LV1Code.GDNewParticlesEmitterObjects1.length = 0;
gdjs.LV1Code.GDNewParticlesEmitterObjects2.length = 0;
gdjs.LV1Code.GDNewSprite9Objects1.length = 0;
gdjs.LV1Code.GDNewSprite9Objects2.length = 0;
gdjs.LV1Code.GDNewSprite10Objects1.length = 0;
gdjs.LV1Code.GDNewSprite10Objects2.length = 0;
gdjs.LV1Code.GDNewSprite16Objects1.length = 0;
gdjs.LV1Code.GDNewSprite16Objects2.length = 0;
gdjs.LV1Code.GDNewText2Objects1.length = 0;
gdjs.LV1Code.GDNewText2Objects2.length = 0;

gdjs.LV1Code.eventsList0(runtimeScene);
return;

}

gdjs['LV1Code'] = gdjs.LV1Code;
