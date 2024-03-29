
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(){	
	
	//Create new div with scroll property into root container
	$("#commonMediaText").append("<div id='canvasId' style='top:60px;left:40px;position:absolute;width:600px;height:430px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = -5;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='1811' height='400'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = -10;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "4.4.1.2.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt01",x:"27.1",y:"130.45",width:"98.45",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt02",x:"231.2",y:"128.45",width:"85.35",expand:"up+down",align:"center",class:"moveLeft10"},						
						{compId:"ID_txt03",x:"404.9",y:"122.45",width:"84.6",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt04",x:"581.2",y:"123.45",width:"92.8",expand:"up+down",align:"center",class:"moveLeft10"},
						
						{compId:"ID_txt20",x:"80.95",y:"175.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt22",x:"635.7",y:"175.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt21",x:"450.7",y:"175.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						
						{compId:"ID_txt23",x:"1187.2",y:"175.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt07",x:"958.55",y:"123.45",width:"85.35",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt08",x:"1137.15",y:"122.45",width:"84.6",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt09",x:"1351.8",y:"123.45",width:"92.8",expand:"up+down",align:"center",class:"moveLeft10"},
						
						{compId:"ID_txt14",x:"141.15",y:"115.45",width:"50.65",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt15",x:"337.05",y:"114",width:"47.8",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt16",x:"509.95",y:"114",width:"45.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt17",x:"691.1",y:"114",width:"48.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt18",x:"1247.95",y:"114",width:"45.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt19",x:"1455.1",y:"114",width:"55.3",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt28",x:"1209.05",y:"134",width:"47.8",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt24",x:"1398.7",y:"175.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						
						{compId:"ID_txt26",x:"281.55",y:"66.5",width:"47.8",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt27",x:"1009.55",y:"66.5",width:"47.8",expand:"right",align:"left",class:"moveLeft10"},
						
						
						{compId:"ID_txt05",x:"748",y:"117",width:"110.5",expand:"down",align:"center"},
						{compId:"ID_txt06",x:"370",y:"228",width:"140.7",expand:"down",align:"center"},
						{compId:"ID_txt10",x:"1110",y:"230",width:"128.4",expand:"down",align:"center"},
						{compId:"ID_txt11",x:"1441",y:"236",width:"110.55",expand:"down",align:"center"},
						{compId:"ID_txt25",x:"-7.05",y:"44",width:"152",expand:"up",align:"center"}					
						
						];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
});