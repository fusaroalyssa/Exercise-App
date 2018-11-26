 import * as api from "./api_access";

 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1162535940567920',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
      
    FB.AppEvents.logPageView();   
      
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   export function FBLogin(){
    FB.login(
     response => statusChangeCallback(response), 
    {scope: 'public_profile,email,user_photos'}
    )
}

function statusChangeCallback(response){
    FB.api("/me", data =>{
        console.log(data);
        api.Login(data.name, data.id, response.authResponse.accessToken)
    })
    console.log(response);
}
