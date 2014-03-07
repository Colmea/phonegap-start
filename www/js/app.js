require.config({

    baseUrl: 'js/lib',

    paths: {
        bootstrap: "bootstrap",
        jquery: "jquery",
        underscore: "underscore",
        backbone: "backbone",
        app: '../app',
        tpl: '../tpl',


    },

    map: {
        '*': {
            'app/models/beer': 'app/models/json/beer',
            'app/models/manufacturer': 'app/models/json/manufacturer',
            'app/models/user': 'app/models/json/user',
            'app/models/drunkBeer': 'app/models/json/drunkBeer'
        }
    },

    shim: {
        'bootstrap': {
            exports: 'bootstrap'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
         'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'bootstrap', 'app/router', 'EventBus'], function ($, Backbone, bootstrap, Router, EventBus) {


    var router = new Router();

    // Init back button
    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    // Init history
    Backbone.history.start();

    // Init Facebook
    console.log('FB init...');
    FB.init({ appId: '343327865812997', nativeInterface: CDV.FB, useCachedDialogs: false });

    // Create empty token
    window.token = null;

    document.getElementById('data').innerHTML = "";
});