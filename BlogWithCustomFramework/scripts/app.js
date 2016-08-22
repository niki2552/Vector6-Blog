(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_r1OME6Oc"; // Place your appKey from Kinvey here...
    let appSecret = "5d0458d8227d4b338b3caa34f946d645"; // Place your appSecret from Kinvey here...
    var _guestCredentials = "323bc7bf-db80-42c0-8fa4-1ad81ef9af54.YjBiDZne+Tck10Prt4keDlVKrC6gJKV9VKvAKe8RbUw="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AutorizationService(baseUrl, appKey, appSecret, _guestCredentials);
    let requester = new Requester(authService);

    authService.initAuthorizationType("Kinvey");
    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
    let homeView = new HomeView(mainContentSelector, selector);
    let homeController = new HomeController(homeView,requester,baseUrl,appKey);
    let userView = new UserView(mainContentSelector, selector);
    let userController = new UserController(userView,requester,baseUrl,appKey);
    let postView = new PostView(mainContentSelector,selector);
    let postController = new PostController(postView,requester,baseUrl,appKey);

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
        let fullName = sessionStorage.getItem('fullName');
        postController.showCreatePostPage(fullName,authService.isLogedIn());
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
