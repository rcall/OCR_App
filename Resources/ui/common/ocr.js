//ocr js
//just make sure we load jquery before loading this js file
//<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>

function getImageURL(image_file) {

	var cloudStorageKey = 'tCFuBUtTay1BQyUMoeqyBP_b8T5mCsXs';
	var extensionString = '?extension=jpg';
	var sendURL = 'http://ws.webservius.com/sts/v1/20mb/15m?wsvKey=' + cloudStorageKey + extensionString;
	
	$.ajax({
        type: "POST",
        url: sendURL,
        success: function (data){
          return data;
        }
    });
}

function sendOCR(cloud_image) {
	
	var ocrKey = '3pa5bP_YtlYkTThp0XnVnJb6m2C6BnX-';
	var sendURL = 'http://svc.webservius.com/v1/wisetrend/wiseocr/submit?wsvKey=' + key;
	
	$.ajax({
        type: "POST",
        url: sendURL,
        data: "<Job><InputURL>>" + cloud_image + "</InputURL>></Job>",
        success: function (data){
          //xml response will be returned here check for <error></error> in data to see if failed
          //get job url from xml
          //if no error, return job url
        }
    });
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
