/**
 * Created by Lucifer on 29-Aug-16.
 */
class UserController{
    constructor(userView, requester, baseUrl, appKey){
        this._userView = userView;
        this._requester = requester;
        this._appkey = appKey;
        this._baseServiceUrl = baseUrl;

    }
    showLoginPage(){
        this._userView.showLoginPage();
    }
    showRegisterPage(){
        this._userView.showRegisterPage();
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
       // let requestData = {
       //     username:data.username,
       //     password:data.password,
       //     fullname:data.fullname};
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

    }
    logout(){
        sessionStorage.clear();
    }
}