gdjs.baseCode = {};
gdjs.baseCode.GDNewTiledSpriteObjects1= [];
gdjs.baseCode.GDNewTiledSpriteObjects2= [];
gdjs.baseCode.GDNewSpriteObjects1= [];
gdjs.baseCode.GDNewSpriteObjects2= [];
gdjs.baseCode.GDNewSprite2Objects1= [];
gdjs.baseCode.GDNewSprite2Objects2= [];
gdjs.baseCode.GDmyElapsedObjects1= [];
gdjs.baseCode.GDmyElapsedObjects2= [];
gdjs.baseCode.GDNewSprite3Objects1= [];
gdjs.baseCode.GDNewSprite3Objects2= [];
gdjs.baseCode.GDNewSprite4Objects1= [];
gdjs.baseCode.GDNewSprite4Objects2= [];
gdjs.baseCode.GDNewSprite5Objects1= [];
gdjs.baseCode.GDNewSprite5Objects2= [];
gdjs.baseCode.GDNewSprite6Objects1= [];
gdjs.baseCode.GDNewSprite6Objects2= [];
gdjs.baseCode.GDNewSprite7Objects1= [];
gdjs.baseCode.GDNewSprite7Objects2= [];
gdjs.baseCode.GDNewTextObjects1= [];
gdjs.baseCode.GDNewTextObjects2= [];
gdjs.baseCode.GDNewSprite8Objects1= [];
gdjs.baseCode.GDNewSprite8Objects2= [];
gdjs.baseCode.GDNewParticlesEmitterObjects1= [];
gdjs.baseCode.GDNewParticlesEmitterObjects2= [];
gdjs.baseCode.GDNewSprite16Objects1= [];
gdjs.baseCode.GDNewSprite16Objects2= [];
gdjs.baseCode.GDNewSprite9Objects1= [];
gdjs.baseCode.GDNewSprite9Objects2= [];

gdjs.baseCode.conditionTrue_0 = {val:false};
gdjs.baseCode.condition0IsTrue_0 = {val:false};
gdjs.baseCode.condition1IsTrue_0 = {val:false};
gdjs.baseCode.condition2IsTrue_0 = {val:false};
gdjs.baseCode.conditionTrue_1 = {val:false};
gdjs.baseCode.condition0IsTrue_1 = {val:false};
gdjs.baseCode.condition1IsTrue_1 = {val:false};
gdjs.baseCode.condition2IsTrue_1 = {val:false};


gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.baseCode.GDNewSpriteObjects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.baseCode.GDNewSprite4Objects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.baseCode.GDNewSpriteObjects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.baseCode.GDNewSprite4Objects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.baseCode.GDNewSprite6Objects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.baseCode.GDNewSprite6Objects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.baseCode.GDNewSprite8Objects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewParticlesEmitterObjects1Objects = Hashtable.newFrom({"NewParticlesEmitter": gdjs.baseCode.GDNewParticlesEmitterObjects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.baseCode.GDNewSpriteObjects1});
gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.baseCode.GDNewSprite8Objects1});
gdjs.baseCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.baseCode.GDmyElapsedObjects1);
{runtimeScene.getVariables().get("myElapsed").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "elapsedTimer"));
}{runtimeScene.getVariables().get("myElapsed").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("myElapsed"))), 0, 5));
}{for(var i = 0, len = gdjs.baseCode.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDmyElapsedObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("myElapsed")));
}
}}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.baseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "elapsedTimer");
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.baseCode.GDNewSprite4Objects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects, gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite4Objects1Objects, false, runtimeScene, false);
}if (gdjs.baseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.baseCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.baseCode.GDmyElapsedObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.baseCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSpriteObjects1[0].getPointX("")), "", 0);
}{for(var i = 0, len = gdjs.baseCode.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDmyElapsedObjects1[i].setX((( gdjs.baseCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSpriteObjects1[0].getPointX("")) - 370);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.baseCode.GDNewSprite4Objects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects, gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite4Objects1Objects, true, runtimeScene, false);
}if (gdjs.baseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.baseCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("myElapsed"), gdjs.baseCode.GDmyElapsedObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.baseCode.GDNewSprite2Objects1.length !== 0 ? gdjs.baseCode.GDNewSprite2Objects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.baseCode.GDmyElapsedObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDmyElapsedObjects1[i].setPosition(2,13);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.baseCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.baseCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.baseCode.condition0IsTrue_0.val = true;
        gdjs.baseCode.GDNewSpriteObjects1[k] = gdjs.baseCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.baseCode.GDNewSpriteObjects1.length = k;}if (gdjs.baseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.baseCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.baseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSpriteObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.baseCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs.baseCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.baseCode.condition0IsTrue_0.val = true;
        gdjs.baseCode.GDNewSpriteObjects1[k] = gdjs.baseCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.baseCode.GDNewSpriteObjects1.length = k;}if (gdjs.baseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.baseCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.baseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSpriteObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
gdjs.baseCode.condition1IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "b") >= 0.4;
}if ( gdjs.baseCode.condition0IsTrue_0.val ) {
{
gdjs.baseCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}}
if (gdjs.baseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
gdjs.baseCode.GDNewSprite6Objects1.length = 0;

{for(var i = 0, len = gdjs.baseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSpriteObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite6Objects1Objects, (( gdjs.baseCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.baseCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSpriteObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.baseCode.GDNewSprite6Objects1);
{for(var i = 0, len = gdjs.baseCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSprite6Objects1[i].addForce(1200, 0, 0);
}
}}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
{
{gdjs.baseCode.conditionTrue_1 = gdjs.baseCode.condition0IsTrue_0;
gdjs.baseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15985236);
}
}if (gdjs.baseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "b");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.baseCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.baseCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewTextObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1111, 6, 6, 6, 0.5, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.baseCode.GDNewSprite8Objects1);
{for(var i = 0, len = gdjs.baseCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSprite8Objects1[i].addForceTowardObject((gdjs.baseCode.GDNewSpriteObjects1.length !== 0 ? gdjs.baseCode.GDNewSpriteObjects1[0] : null), 400, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.baseCode.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.baseCode.GDNewSprite8Objects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
gdjs.baseCode.condition1IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite6Objects1Objects, gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if ( gdjs.baseCode.condition0IsTrue_0.val ) {
{
{gdjs.baseCode.conditionTrue_1 = gdjs.baseCode.condition1IsTrue_0;
gdjs.baseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15987372);
}
}}
if (gdjs.baseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.baseCode.GDNewSprite6Objects1 */
/* Reuse gdjs.baseCode.GDNewSprite8Objects1 */
gdjs.baseCode.GDNewParticlesEmitterObjects1.length = 0;

{for(var i = 0, len = gdjs.baseCode.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.baseCode.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewParticlesEmitterObjects1Objects, (( gdjs.baseCode.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSprite8Objects1[0].getPointX("")), (( gdjs.baseCode.GDNewSprite8Objects1.length === 0 ) ? 0 :gdjs.baseCode.GDNewSprite8Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.baseCode.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewParticlesEmitterObjects1[i].setAngle(270);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.baseCode.GDNewSprite8Objects1);

gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSpriteObjects1Objects, gdjs.baseCode.mapOfGDgdjs_46baseCode_46GDNewSprite8Objects1Objects, false, runtimeScene, false);
}if (gdjs.baseCode.condition0IsTrue_0.val) {
}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.baseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.baseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.baseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.baseCode.condition0IsTrue_0.val = false;
{
gdjs.baseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.baseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.baseCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.baseCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.baseCode.GDNewSpriteObjects1[i].setAnimation(3);
}
}}

}


{


{
}

}


};

gdjs.baseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.baseCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.baseCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.baseCode.GDNewSpriteObjects1.length = 0;
gdjs.baseCode.GDNewSpriteObjects2.length = 0;
gdjs.baseCode.GDNewSprite2Objects1.length = 0;
gdjs.baseCode.GDNewSprite2Objects2.length = 0;
gdjs.baseCode.GDmyElapsedObjects1.length = 0;
gdjs.baseCode.GDmyElapsedObjects2.length = 0;
gdjs.baseCode.GDNewSprite3Objects1.length = 0;
gdjs.baseCode.GDNewSprite3Objects2.length = 0;
gdjs.baseCode.GDNewSprite4Objects1.length = 0;
gdjs.baseCode.GDNewSprite4Objects2.length = 0;
gdjs.baseCode.GDNewSprite5Objects1.length = 0;
gdjs.baseCode.GDNewSprite5Objects2.length = 0;
gdjs.baseCode.GDNewSprite6Objects1.length = 0;
gdjs.baseCode.GDNewSprite6Objects2.length = 0;
gdjs.baseCode.GDNewSprite7Objects1.length = 0;
gdjs.baseCode.GDNewSprite7Objects2.length = 0;
gdjs.baseCode.GDNewTextObjects1.length = 0;
gdjs.baseCode.GDNewTextObjects2.length = 0;
gdjs.baseCode.GDNewSprite8Objects1.length = 0;
gdjs.baseCode.GDNewSprite8Objects2.length = 0;
gdjs.baseCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.baseCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.baseCode.GDNewSprite16Objects1.length = 0;
gdjs.baseCode.GDNewSprite16Objects2.length = 0;
gdjs.baseCode.GDNewSprite9Objects1.length = 0;
gdjs.baseCode.GDNewSprite9Objects2.length = 0;

gdjs.baseCode.eventsList0(runtimeScene);
return;

}

gdjs['baseCode'] = gdjs.baseCode;
