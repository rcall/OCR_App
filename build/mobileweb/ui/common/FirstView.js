//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var f = Ti.Filesystem.getFile("/mobileweb/apple_startup_images/Default.jpg");
	console.log(f.exists());
	var myImage = f.read();
	
	var ocrClient = Ti.Network.createHTTPClient();

	ocrClient.onload = function(e) {
		console.log('hello');
		console.log(e);
		//what to do with response..
	}
	ocrClient.onerror = function(e) {
		console.log(e.error);
	}
	
	ocrClient.open('POST', 'http://api.ocrapiservice.com/1.0/rest/ocr');
	ocrClient.setRequestHeader("content-type", "application/json");
	var params = {
		'apikey':'d52P5jnAFf',
		'language':'en',
		'image':myImage
	};
	
	ocrClient.send(JSON.stringify(params));
	console.log("made it");
	return self;
}

module.exports = FirstView;
