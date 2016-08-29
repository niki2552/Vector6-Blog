/**
 * Created by Lucifer on 29-Aug-16.
 */
class PostController {
    constructor(postView, requester, baseUrl, appKey){
        this._postView = postView;
        this._requester = requester;
        this._appkey = appKey;
        this._baseServiceUrl = baseUrl;
    }
    showCreatePostPage(){
        this._postView.showCreatePostPage();
    }
    showCreateNewPost(){
        
    }
    
}