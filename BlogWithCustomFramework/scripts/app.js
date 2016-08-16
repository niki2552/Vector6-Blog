(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_rka7vnDu"; // Place your appKey from Kinvey here...
    let appSecret = "fa1a9da9869944f9bd11aa9c6d41a48f"; // Place your appSecret from Kinvey here...
    var _guestCredentials = "d3aa5b68-2f0c-46c1-b7e2-decac611afd1.PseIikC2YQlEyqW2jE5FbqubyKu7E3zzw0ljwbazT0E="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AutorizationService(baseUrl, appKey, appSecret, _guestCredentials);
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");
    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView);
    let userView = new UserView(mainContentSelector, selector);
    let userController = new UserController(userView);
    let postView = new PostView(mainContentSelector,selector);
    let postController = new PostController(postView);

    initEventServices();

    onRoute("#/", function () {
        // Check if user is logged in and if its not show the guest page, otherwise show the user page...
        if(authService.isLoggedIn())
        {
            homeController.showUserPage()
        }
        else
        {
            homeController.showUserPage();
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
        postController.showCreatePostPage();
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
        userController.login();
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
        userController.register();
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
        postController.createNewPost(data);
    });

    run('#/');
})();
