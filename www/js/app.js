require.config({

    baseUrl: 'js/lib',

    paths: {
        jquery: "jquery",
        underscore: "underscore",
        backbone: "backbone",
        app: '../app',
        tpl: '../tpl',

    },

    map: {
        '*': {
            'app/models/beer': 'app/models/json/beer',
            'app/models/manufacturer': 'app/models/json/manufacturer'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
         'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router', 'EventBus'], function ($, Backbone, Router, EventBus) {


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