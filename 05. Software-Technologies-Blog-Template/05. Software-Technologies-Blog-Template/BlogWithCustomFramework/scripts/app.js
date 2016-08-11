(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_rka7vnDu"; // Place your appKey from Kinvey here...
    let appSecret = "fa1a9da9869944f9bd11aa9c6d41a48f"; // Place your appSecret from Kinvey here...
    let _guestCredentials = "10c5f244-09cd-43b1-89fb-7603dec8a328.HNkhJPTucNWjcpWsTmvPYfpSwzmUUWVX3J5w+fKjK/c="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials);
    let request = new Requester(authService);

    authService.initAuthorizationType("Kinvey");
    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
     let homeView = new homeView(mainContentSelector,selector);
     let homeController = new homeController(homeView);

     let userView = new userView(mainContentSelector, selector);
     let userController = new UserController(userView);

     let postView = new postView (mainContentSelector, selector);
     let postController = new postController(postView);
    
    initEventServices();

    onRoute("#/", function () {
        // Check if user is logged in and if its not show the guest page, otherwise show the user page...
        if(authService.isLoggedIn())
        {
            homeController.showUserPage();
        }
        else
        {
            homeController.showGuestPage();
        }
    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...
    });

    onRoute("#/login", function () {
        // Show the login page...
        userController.showLoginPage(authService.isLoggedIn());
    });

    onRoute("#/register", function () {
        // Show the register page...
        userController.showRegisterPage(authService.isLoggedIn());
    });

    onRoute("#/logout", function () {
        // Logout the current user...
       userController.logout();
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
        let fullName = sessionStorage.getItem('fullName');
        postController.ShowCreatePostPage(fullName,authService.isLoggedIn());
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
        userController.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
        userController.register(data);
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
        postController.createNewPost(data);
    });

    run('#/');
})();
