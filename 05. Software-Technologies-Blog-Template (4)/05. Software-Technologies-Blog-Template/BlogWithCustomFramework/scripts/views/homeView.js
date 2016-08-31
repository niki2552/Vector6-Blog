/**
 * Created by Lucifer on 29-Aug-16.
 */
class HomeView{
    constructor(mainContentSelector,wrapperSelector){
        this._mainContentSelector = mainContentSelector;
        this._wrapperSelector = wrapperSelector;
    }
    showGuestPage(mainData,sidebarData) {
        let _that = this;
       $.get('templates/welcome-guest.html', function(template){
           let renderedTemplate = Mustache.render(template,null);
         console.log('maina');

           $(_that._wrapperSelector).html(renderedTemplate);

           $.get('templates/posts.html',function(template){
              let blogPosts = {
                  blogPosts:mainData
              };
               

               let renderedPosts = Mustache.render(template,blogPosts);
               $('.articles').html(renderedPosts);
           });
           $.get('templates/recent-posts.html',function(template){
               let recentPosts = {
                   recentPosts:sidebarData
               };


               let renderedPosts = Mustache.render(template,recentPosts);
               $('.recent-posts').html(renderedPosts);
           });


       });
    }
    showUserPage(mainData,sidebarData){
        let _that = this;
        console.log('pich4');
        $.get('templates/welcome-user.html', function(template){
            let renderedTemplate = Mustache.render(template,null);
         console.log('pich5');

            $(_that.wrapperSelector).html(renderedTemplate);
             console.log('pich6');
            $.get('templates/posts.html',function(template){
                let blogPosts = {
                    blogPosts:mainData
                };
            console.log('pich7');

                let renderedPosts = Mustache.render(template,blogPosts);
                $('.articles').html(renderedPosts);
            });
            console.log('pich8');
            $.get('templates/recent-posts.html',function(template){
                let recentPosts = {
                    recentPosts:sidebarData
                };
                  console.log('pich9');

                let renderedPosts = Mustache.render(template,recentPosts);
                $('.recent-posts').html(renderedPosts);
            });
            console.log('pich10');

        });
        console.log('pich12');
    }
}