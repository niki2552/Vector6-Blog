(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_rka7vnDu"; // Place your appKey from Kinvey here...
    let appSecret = "fa1a9da9869944f9bd11aa9c6d41a48f"; // Place your appSecret from Kinvey here...
    var _guestCredentials = "74b7cab6-ec30-4e3e-af71-04c8b218abff.UNISS4Xt5cva3WLnRX8jBV1qXo4BdmSD39QPSFYuiSA="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AutorizationService(baseUrl, appKey, appSecret, _guestCredentials);
    let requester = new Requester(authService);

    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, HomeController, UserView, UserController, PostView and PostController
    let homeView = new HomeView();

    initEventServices();

    onRoute("#/", function () {
        // Check if user is logged in and if its not show the guest page, otherwise show the user page...
    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...
    });

    onRoute("#/login", function () {
        // Show the login page...
    });

    onRoute("#/register", function () {
        // Show the register page...
    });

    onRoute("#/logout", function () {
        // Logout the current user...
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
    });

    run('#/');
})();
