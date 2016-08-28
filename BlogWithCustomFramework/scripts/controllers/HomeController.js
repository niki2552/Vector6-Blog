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

    this._requester.get(requestUrl,function success(data)
    {

    },
    function error (data)
    {
        showPopup('error',"Error loading posts");
    }
    );
    data.sort(function(elem1 , elem2)
    {
        let date1 = new Date(elem1._kmd.ect);
        let date2 = new Date(elem1._kmd.ect);
        return date2- date1;
    });
    
    this._homeView.showGuestPage();
}
    showUserPage()
    {
        this._homeView = showUserPage;
    }
}