function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
	
    if(_id == 1){
    var btnXPosArr = [172,22,22];
    var btnYPosArr = [64, 114.95, 270.9];
    var highlightedBtnSrc = ['set-1.png', 'set-2.png', 'set-3.png'];
    var buttonArr = [];
    var sampleArray = [];
    var bubbleArr = [];
    var lastBtnClick;
    var bubbleTitleArr = ["ID_set01_header", "ID_set02_header", "ID_set03_header"];
    var bubbleTextArr = ["ID_set01_body", "ID_set02_body", "ID_set03_body"];
    var defaultClickedBtn = 0;
    

    var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
    imgElement.id = "domElement_img";
    imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='640' src="+highlightedBtnSrc[0]+"></img>";
    console.log("created");
    $("#slide_1").append(imgElement);
    $("#imgHighlighted").css("top", "0px");
    $("#imgHighlighted").css("left", "0px");
    var imhDomElement = new createjs.DOMElement(imgElement);

    for (var i = 0; i < 3; i++) {
        var btn2 = getCJSElement("TEXTBOX", { x: 419.95, y: 90.9, width: 230.2, height: 280, size: 11, titleId: bubbleTitleArr[i], bodyId: bubbleTextArr[i] });
        _container.addChild(btn2);
        bubbleArr[i] = btn2;
        if(i == 0){
            bubbleArr[0].visible = true;
        }else{
            bubbleArr[i].visible = false;
        }
        

        var htmlElement = document.createElement("div");
        htmlElement.style.cssText = "position:absolute;";
        htmlElement.id = "domElement_" + i;
        
       $("#slide_1").append(htmlElement);
        
       

        if(i == 0){
             htmlElement.innerHTML = "<img id=" + i + " 'height='45' width='45' src='plus_btn_over2.png'></img>";
             //$("#" + i).off("click", clickFunction);
        }else{
             htmlElement.innerHTML = "<img id=" + i + " 'height='45' width='45' src='plus_btn.png'></img>"; 
        }

        $("#" + i).on("mouseover", mouseOverFunc);
        $("#" + i).on("mouseout", mouseOutFunc);
        $("#" + i).on("click", clickFunction);

        $("#domElement_" + i).css("top", btnYPosArr[i] + "px")
        $("#domElement_" + i).css("left", btnXPosArr[i] + "px")
        $("#domElement_" + i).css("cursor", "pointer")
    }

    var domElement = new createjs.DOMElement(htmlElement);

}
function clickFunction(e) {

        if(defaultClickedBtn == e.target.id){
            return;
        }
        $("#imgHighlighted").attr("src", highlightedBtnSrc[e.target.id]);
        if (lastBtnClick != null) {

            $("#" + lastBtnClick).attr("src", "plus_btn.png");
            $("#" + lastBtnClick).on("mouseover", mouseOverFunc);
            $("#" + lastBtnClick).on("mouseout", mouseOutFunc);
            bubbleArr[lastBtnClick].visible = false;

        }else{
            $("#" + 0).attr("src", "plus_btn.png");
            $("#" + 0).on("mouseover", mouseOverFunc);
            $("#" + 0).on("mouseout", mouseOutFunc);
            bubbleArr[0].visible = false;
        }
        lastBtnClick = e.target.id
        $("#" + e.target.id).attr("src", "plus_btn_over2.png");
        $("#" + e.target.id).off("mouseover", mouseOverFunc);
        $("#" + e.target.id).off("mouseout", mouseOutFunc);
        bubbleArr[e.target.id].visible = true;

        defaultClickedBtn = e.target.id;
    }


    function mouseOverFunc(e) {
        if(defaultClickedBtn == e.target.id){
            return;
        }
        $("#" + e.target.id).attr("src", "plus_btn_over.png");
    
    }


    function mouseOutFunc(e) {
        if(defaultClickedBtn == e.target.id){
            return;
        }
        $("#" + e.target.id).attr("src", "plus_btn.png");
    }
    
});
