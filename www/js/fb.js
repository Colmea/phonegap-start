define(['facebook'], function(){
  FB.init({
    appId      : '343327865812997',
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});