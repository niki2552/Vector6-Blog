/**
 * Created by Lucifer on 28-Jul-16.
 */
class homeController{
    constructor (homeView, requester, baseUrl , appkey)
    {
     this._homeView = homeView;
     this._requester = requester;
     this._appkey = appkey;   
     this._baseServiceUrl = baseUrl; //TODO
    }
    showGuestPage()
    {
        this._homeView.showGuestPage();
    }
    showUserPage()
    {
        this._homeView.showUserPage();
    }

}
