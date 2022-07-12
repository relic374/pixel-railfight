gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene2Code.GDNewTextObjects2= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32scene2Code.GDNewTextObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewTextObjects1[k] = gdjs.Untitled_32scene2Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewTextObjects1.length = k;}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTextObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
