//ocr js
//just make sure we load jquery before loading this js file
//<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>

function getImageURL(image_file) {

	console.log('inside getImagURL');
	var cloudStorageKey = 'tCFuBUtTay1BQyUMoeqyBP_b8T5mCsXs';
	var extensionString = '?extension=jpg';
	var sendURL = 'http://ws.webservius.com/sts/v1/20mb/15m?wsvKey=' + cloudStorageKey;
	
	$.ajax({
        type: "POST",
        url: sendURL,
        success: function (data){
          // return data;
          	console.log(data);
          	alert(data);
          //potential error handling
        }
    });
}

function sendOCR(cloud_image) {	
	
	var sendURL = 'http://api.ocrapiservice.com/1.0/rest/ocr';
	var xmlDoc = '<Job><InputURL>' + cloud_image + '</InputURL></Job>';

	console.log('new mother fuckin shit');
	$.post(sendURL, { 	image: "http://ocrapiservice.com/static/images/examples/english_text.png", 
						language: "en", 
						apikey: "d52P5jnAFf" 
					},
   		function(data) {
     		alert("Data Loaded: " + data);
   		});
	
	/*
	$.ajax({
        type: "POST",
        url: sendURL,
        data: xmlDoc,
        // contentType: "text/xml; charset=utf-8",
        success: function (data){
        	
        	console.log(data);
        	alert(data);
          //xml response will be returned here check for <error></error> in data to see if failed
          //get job url from xml
          //if no error, return job url
        }
   }); */
    console.log('inside after');
}

function checkOCR(job_url) {
	$.ajax({
        type: "GET",
        url: job_url,
        success: function (data){
          //check this xml data for successful job, status must be == "Finished"
          //if finished, xml <download><file><uri></uri></file></download> will contain files
          //by default this gives back txt and pdf, this can be adjusted
        }
    });
}
