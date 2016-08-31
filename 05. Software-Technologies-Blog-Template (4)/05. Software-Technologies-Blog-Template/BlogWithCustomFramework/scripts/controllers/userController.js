/**
 * Created by Lucifer on 29-Aug-16.
 */
class UserController{
    constructor(userView, requester, baseUrl, appKey){
        this._userView = userView;
        this._requester = requester;
        this._appkey = appKey;
        this._baseServiceUrl = baseUrl + "/user/" + appKey + "/";

    }
    showLoginPage(isLoggedIn){
        this._userView.showLoginPage(isLoggedIn);
    }
    showRegisterPage(isLoggedIn){
        this._userView.showRegisterPage(isLoggedIn);
    }
    register(data){
        if(data.username.lenght <6){
          showPopup('error','Oprai si username-a');
          return;
      }
        if(data.fullname.lenght < 5){
            showPopup('error','Smeni si imeto');
            return;
        }
        if(data.password != data.confirmPassword){
            showPopup('error','Nauchi si parolata');
            return;
        }
        if(data.password.lenght < 8){
            showPopup('error','Kusa ti e parolata');
        }

        delete data('confirmPassword');

        this._requester.post(this._baseServiceUrl,data,
        function successCallback(response){
          showPopup('success','Bravo registrira se');
            redirectUrl('#/login');
        },
        function errorCallback(response){
            showPopup('error','Pak nishto ne napravi');
        });
    }
    login(data){
        let requestUrl = this._baseServiceUrl + "login";
     this._requester.post(requestUrl,data,
         function successCallback(response){
             sessionStorage.setItem('username', response.username);
             sessionStorage.setItem('_authToken', response._kmd.authtoken);
             sessionStorage.setItem('fullName', response.fullname);
             showPopup('success','Bravo logna se');
             console.log('maina');
             redirectUrl('#/');
             console.log('maina2');
         },
         function errorCallback(response){
             showPopup('error','Pak nishto ne napravi');
         });
    }
    logout(){
        sessionStorage.clear();
    }
}