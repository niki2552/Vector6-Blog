class UserController {
    constructor (userView,requester,baseUrl,appKey) {
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user/"+ appKey +"/";
    }
    showLoginPage()
    {
        this._userView = showLoginPage();
    }
    showRegisterPage()
    {
        this._userView = showRegisterPage();
    }
    register(data) {
        if (data.username.length< 6) {
            showPopup('error', 'Your UserName must be minimum 6 symbols');
            return;
        }
        if (data.FullName.length<5) {
            showPopup('error', 'Your UserName must be minimum 5 symbols');
            return;
        }
        if (data.password != data.confirmPassword) {
            showPopup('error', 'Check your password');
            return;
        }
        if (data.password.length<8) {
            showPopup('error', 'Short password');
            return;
        }
        delete data['confirmPassword'];

        this._requester.post(this._baseServiceUrl, data,
            function successCallback(response) {
                showPopup('success', 'You have successfully registered.');
                redirectUrl('#/login')
            },
            function errorCallBack(response) {
                showPopup('error', 'You have not registered.');
            });
    }
    login(data)
    {
    
    }
    logout()
    {
        sessionStorage.clear();
        redirectUrl('#/');
    }

}