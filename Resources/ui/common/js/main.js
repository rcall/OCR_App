function openResult(image){
	alert("image processing disabled");
	
	// var resultView = Ti.UI.createWebView({url: '/ui/common/html/result.html'});
	self.getChildren()[0].url = '/ui/common/html/result.html';
}
