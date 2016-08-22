class HomeController {
    constructor (homeView,requester,baseUrl,appKey) {
        this._homeView = homeView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl;
    }
    showGuestPage()
{
    let _that = this;

    let recentPosts = [];

    let requestUrl = this._baseServiceUrl + "/appdata/"+ this._appKey + "/posts/";
    this._homeView.showGuestPage();
}
    showUserPage()
    {
        this._homeView = showUserPage;
    }
}