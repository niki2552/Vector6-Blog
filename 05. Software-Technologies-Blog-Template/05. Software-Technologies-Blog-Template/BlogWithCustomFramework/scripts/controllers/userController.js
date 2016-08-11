/**
 * Created by Lucifer on 28-Jul-16.
 */
class UserController{
    controller(userView , requester , baseUrl , appkey)
    {
        this._userView = userView;
        this._requester = requester;
        this._appkey = appkey
        this._baseServiceUrl = baseUrl;// + "/user" + appkey + "/";
    }
    showLoginPage()
    {
        this._userView.showLoginPage();
    }
    ShowRegisterPage()
    {
        this._userView.show.RegisterPage();
    }
    register(data)
    {
    if(data.username.lenght < 6)
    {
        showPopup(error,"The username must contain atleast 6 characters");
        return;
    }
        if(data.fullname.lenght<6)
        {
            showPopup(error,"The fullname must contain atleast 6 characters")
            return;

            if(data.password != data.C)
    }
    login (data)
    {

    }

    logout()
    {
        sessionStorage.clear();
    }
}
