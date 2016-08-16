class UserController {
    constructor (userView,requester,baseUrl,appKey) {
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl;
    }
    showLoginPage()
    {
        this._userView = showLoginPage();
    }
    showRegisterPage()
    {
        this._userView = showRegisterPage();
    }
    register(data)
    {
        
    }
    login(data)
    {

    }
    logout()
    {
        sessionStorage.clear();
    }

}