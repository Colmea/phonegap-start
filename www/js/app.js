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

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {

    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
    console.log('FB init...');
    FB.init({ appId: '343327865812997', nativeInterface: CDV.FB, useCachedDialogs: false });
    document.getElementById('data').innerHTML = "";
});