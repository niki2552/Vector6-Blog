/**
 * Created by Lucifer on 29-Aug-16.
 */
class HomeController {
    constructor(homeView, requester, baseUrl, appKey){
        this._homeView = homeView;
        this._requester = requester;
        this._appkey = appKey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appKey + "/posts";
    }
    showGuestPage() {
        let _that = this;
        this._requester.get(this._baseServiceUrl,function(response){
            showPopup('success','Vzeh ti dannite');
            _that._homeView.showGuestPage(response);
        },
        function(data){
         showPopup('error','greshka pri vzimane na danni');
        });

    }
    showUserPage() {

    }
}
