/**
 * Created by Lucifer on 08-Aug-16.
 */
class postController{
    constructor (postView , requester , baseUrl , appkey)
    {
        this._postView = postView;
        this._requester = requester;
        this._appkey = appkey;
        this._baseServiceUrl = baseUrl; //+ "/appdata/"+ appkey + "/posts";
    }
    showCreatePostPage()
    {
        this._postView.showCreatePostPage()
        {

        }
    }
    createNewPost(data)
    {

    }
}