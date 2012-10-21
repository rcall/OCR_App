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
	
	
	var ocrKey = '3pa5bP_YtlYkTThp0XnVnJb6m2C6BnX-';
	var sendURL = 'http://svc.webservius.com/v1/wisetrend/wiseocr/submit?wsvKey=' + ocrKey;
	
	$.ajax({
        type: "POST",
        url: sendURL,
        processData: false,
        data: "<Job><InputURL>" + cloud_image + "</InputURL></Job>",
        // contentType: "text/xml; charset=utf-8",
        success: function (data){
        	
        	console.log(data);
        	alert(data);
          //xml response will be returned here check for <error></error> in data to see if failed
          //get job url from xml
          //if no error, return job url
        }
    });
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
