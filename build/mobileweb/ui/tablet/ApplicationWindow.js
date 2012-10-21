//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var indexView = Ti.UI.createWebView({url: '/ui/common/index.html'});
	self.add(indexView);
	
	return self;
}
	
//make constructor function the public component interface
module.exports = ApplicationWindow;
