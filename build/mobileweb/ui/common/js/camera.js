function takePicture(onSuccess){
	alert("blah");
	// if(Ti.Media.isCameraSupported){
		// Ti.Media.showCamera(function (item){
			// if(item.mediaType != "MEDIA_TYPE_PHOTO")
			// {
				// //TODO: error, wrong media type returned
				// alert("Picture not found, aborting");
			// } else {
				// onSuccess(item);
			// }
		// });
	// } else {
		alert("No suitable camera found");
		onSuccess("text!");
	// }
}
