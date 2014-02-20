define(['facebook'], function(){

		console.log('fb init');

		FB._https = false;

		 FB.init({
		    appId      : '343327865812997',
		  });

		 /*
		FB.getLoginStatus(function(response) {
		console.log(response);
		});
		*/
 
});