//	HYPE.documents["index_iphone_hype"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "index_iphone_hype_Resources";
	var documentName = "index_iphone_hype";
	var documentLoaderFilename = "indexiphonehype_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"initialValues":{"7A645A16-BEFD-4B07-951F-859643416831-349-0000090CFEA383E5":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","Height":"275px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"265px","Opacity":"0.118007","Width":"320px","TagName":"div","InnerHTML":"<img src=\"./images/index_iphone_info.png\" width=\"320\" height=\"275\">"},"488CD96C-8457-4DBF-AFAC-7F3D82286899-349-000008BE853C1F8B":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"0px","Cursor":"pointer","Height":"355px","BackgroundSize":"100% 100%","ZIndex":"4","Overflow":"visible","Top":"0px","ActionOnMouseClick":{"type":1,"transition":2,"sceneOid":"76308796-B42B-4B53-A93B-F8DFD96D41F0-1033-00001630AA506125"},"Width":"320px","Opacity":"1.000000","InnerHTML":"<img src=\"./images/index_iphone_hisd.png\" width=\"320\" height=\"355\">","TagName":"div"},"07F3FF92-2D4E-44F5-807C-20A3F296F4BC-1625-000008E4B46AB900":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","Height":"320px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","Top":"-55px","BackgroundRepeat":"no-repeat","Width":"320px","Opacity":"0.120000","TagName":"div","InnerHTML":"<img src=\"./images/index_iphone_icon.png\" width=\"320\" height=\"320\">"}},"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"488CD96C-8457-4DBF-AFAC-7F3D82286899-349-000008BE853C1F8B","startTime":0}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":3.0333333015441895}},"id":"762AE8C0-A0C4-4D28-B21B-F3F1EB262344-349-000008BA8851873C","sceneIndex":0,"perspective":"600px","oid":"762AE8C0-A0C4-4D28-B21B-F3F1EB262344-349-000008BA8851873C","onSceneAnimationCompleteAction":{"type":1,"transition":2,"sceneOid":"76308796-B42B-4B53-A93B-F8DFD96D41F0-1033-00001630AA506125"},"name":"hisd","backgroundColor":"#FFFFFF"},{"initialValues":{"E55A6175-FA76-4298-921F-4CB47CF034A2-349-000008B592DD3590":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"0px","BackgroundImage":"index_iphone_info.png","Height":"275px","Overflow":"visible","Width":"320px","ZIndex":"26","BackgroundSize":"100% 100%","Top":"265px","BackgroundRepeat":"no-repeat","TagName":"div","InnerHTML":"<img src=\"./images/index_iphone_info.png\" width=\"320\" height=\"275\">"},"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE":{"BorderStyleRight":"None","ActionOnMouseClick":{"goToURL":"intro_iphone.html","type":5,"openInNewWindow":false},"BackgroundColor":"","WordWrap":"break-word","Display":"inline","BorderStyleTop":"None","BorderWidthBottom":"0px","Opacity":"1.000000","BorderWidthRight":"0px","BorderWidthTop":"0px","ButtonHover":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_hover","BorderStyleLeft":"None","BorderColorBottom":"#A0A0A0","FontSize":"13px","BorderRadiusTopRight":"0px","TextColor":"#000000","InnerHTML":"<br>","Height":"123px","TextAlign":"center","ZIndex":"27","PaddingLeft":"6px","Top":"16px","BorderColorTop":"#A0A0A0","UserSelect":"none","WhiteSpaceCollapsing":"preserve","PaddingTop":"6px","TagName":"div","BorderStyleBottom":"None","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","Width":"119px","BorderColorLeft":"#A0A0A0","Left":"93px","BorderRadiusBottomRight":"0px","BorderColorRight":"#A0A0A0","BorderRadiusBottomLeft":"0px","ButtonPress":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_pressed","BorderRadiusTopLeft":"0px","BorderWidthLeft":"0px","Overflow":"visible","Cursor":"pointer"},"D97966E5-1936-4D08-BD95-85FAAF4BC936-349-000008E8F0E7A940":{"BorderStyleRight":"None","ActionOnMouseClick":{"type":5,"goToURL":"facebook/index.html","openInNewWindow":true},"Display":"inline","WordWrap":"break-word","BorderStyleTop":"None","BorderWidthBottom":"0px","BorderWidthRight":"0px","BorderWidthTop":"0px","BorderColorBottom":"#A0A0A0","BorderStyleLeft":"None","FontSize":"13px","TextColor":"#000000","InnerHTML":"<br>","Height":"32px","BorderColorTop":"#A0A0A0","TextAlign":"center","ZIndex":"28","Top":"390px","PaddingLeft":"6px","UserSelect":"none","WhiteSpaceCollapsing":"preserve","PaddingTop":"6px","TagName":"div","BorderStyleBottom":"None","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","Width":"149px","BorderColorLeft":"#A0A0A0","Left":"79px","BorderColorRight":"#A0A0A0","BorderWidthLeft":"0px","Overflow":"visible","Cursor":"pointer"},"B8DEF10F-C008-4688-A109-9A65BFE89C70-349-000008FB8B2F1954":{"BorderStyleRight":"None","ActionOnMouseClick":{"goToURL":"http://hongiksidi.com/2011/","type":5,"openInNewWindow":true},"Display":"inline","WordWrap":"break-word","BorderStyleTop":"None","BorderWidthBottom":"0px","BorderWidthRight":"0px","BorderWidthTop":"0px","BorderColorBottom":"#A0A0A0","BorderStyleLeft":"None","FontSize":"13px","TextColor":"#000000","InnerHTML":"<br>","Height":"32px","BorderColorTop":"#A0A0A0","TextAlign":"center","ZIndex":"30","Top":"496px","PaddingLeft":"6px","UserSelect":"none","WhiteSpaceCollapsing":"preserve","PaddingTop":"6px","TagName":"div","BorderStyleBottom":"None","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","Width":"255px","BorderColorLeft":"#A0A0A0","Left":"29px","BorderColorRight":"#A0A0A0","BorderWidthLeft":"0px","Overflow":"visible","Cursor":"pointer"},"E77C43D8-14F1-4AE6-B048-8CEF809BF20C-349-000008B5920119D8":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"0px","Display":"inline","Height":"320px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"25","Top":"-55px","BackgroundRepeat":"no-repeat","Width":"320px","Opacity":"1.000000","TagName":"div","InnerHTML":"<img src=\"./images/index_iphone_icon.png\" width=\"320\" height=\"320\">"},"F1729723-9AE2-49F0-9C46-DADA73C57E3F-1625-00000C4DAE0DC74F":{"BorderStyleRight":"None","ActionOnMouseClick":{"type":5,"goToURL":"video/index.html","openInNewWindow":true},"Display":"inline","WordWrap":"break-word","BorderStyleTop":"None","BorderWidthBottom":"0px","BorderWidthRight":"0px","BorderWidthTop":"0px","BorderColorBottom":"#A0A0A0","BorderStyleLeft":"None","FontSize":"13px","TextColor":"#000000","InnerHTML":"<br>","Height":"32px","BorderColorTop":"#A0A0A0","TextAlign":"center","ZIndex":"31","Top":"346px","PaddingLeft":"6px","UserSelect":"none","WhiteSpaceCollapsing":"preserve","PaddingTop":"6px","TagName":"div","BorderStyleBottom":"None","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","Width":"181px","BorderColorLeft":"#A0A0A0","Left":"63px","BorderColorRight":"#A0A0A0","BorderWidthLeft":"0px","Overflow":"visible","Cursor":"pointer"},"E9878C09-0AD0-4A0F-8A37-039B0E9B155F-349-000008F76E7ADB09":{"BorderStyleRight":"None","ActionOnMouseClick":{"goToURL":"http://daramcorporation.com","type":5,"openInNewWindow":true},"Display":"inline","WordWrap":"break-word","BorderStyleTop":"None","BorderWidthBottom":"0px","BorderWidthRight":"0px","BorderWidthTop":"0px","BorderColorBottom":"#A0A0A0","BorderStyleLeft":"None","FontSize":"13px","TextColor":"#000000","InnerHTML":"<br>","Height":"44px","BorderColorTop":"#A0A0A0","TextAlign":"center","ZIndex":"29","Top":"441px","PaddingLeft":"6px","UserSelect":"none","WhiteSpaceCollapsing":"preserve","PaddingTop":"6px","TagName":"div","BorderStyleBottom":"None","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","Width":"41px","BorderColorLeft":"#A0A0A0","Left":"136px","BorderColorRight":"#A0A0A0","BorderWidthLeft":"0px","Overflow":"visible","Cursor":"pointer"}},"timelines":{"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_hover":{"framesPerSecond":30,"animations":[],"identifier":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_hover","name":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_hover","duration":0},"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_pressed":{"framesPerSecond":30,"animations":[{"startValue":"123px","isRelative":true,"endValue":"123px","identifier":"Height","duration":1,"timingFunction":"easeinout","type":0,"oid":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE","startTime":0},{"startValue":"16px","isRelative":true,"endValue":"16px","identifier":"Top","duration":1,"timingFunction":"easeinout","type":0,"oid":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE","startTime":0}],"identifier":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_pressed","name":"4DBA021D-304C-4736-BAA9-CDED59CABCCD-349-000008D51324FEDE_pressed","duration":1},"1F4C849B-26A7-46E9-AEBD-C4E7ECBFA56A-3427-000013BB2FCDAD71":{"framesPerSecond":30,"animations":[],"identifier":"1F4C849B-26A7-46E9-AEBD-C4E7ECBFA56A-3427-000013BB2FCDAD71","name":"video","duration":0},"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":0},"FF7D8479-3454-480A-9E87-1AE21253D88D-3427-000014C0D640D4ED":{"framesPerSecond":30,"animations":[],"identifier":"FF7D8479-3454-480A-9E87-1AE21253D88D-3427-000014C0D640D4ED","name":"video close","duration":0}},"id":"76308796-B42B-4B53-A93B-F8DFD96D41F0-1033-00001630AA506125","sceneIndex":1,"perspective":"600px","oid":"76308796-B42B-4B53-A93B-F8DFD96D41F0-1033-00001630AA506125","onSceneAnimationCompleteAction":{"type":0},"name":"index","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {"DFC1B43D-89E6-41DF-974F-54CECD4271CB-3427-00001332AFAE73B1":"back"};


	
	var Custom = (function() {
	return {

back : function(hypeDocument, element) {
window.setTimeout(function () { hypeDocument.showSceneNamed("index", this.kSceneTransitionCrossfade)} , 4.00 * 1000.0); 
hypeDocument.playTimelineNamed(hypeDocument.currentSceneName()); 
	
}
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "indexiphonehype_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = false;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

