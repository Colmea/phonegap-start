require.config({
    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: 'js/lib',

    paths: {
        jquery: "jquery",
        underscore: "underscore",
        backbone: "backbone",
        localstorage: 'backbone.localStorage',
        app: '../app',
        tpl: '../tpl',
        'facebook': '//connect.facebook.net/en_US/all'
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
        },
        'facebook' : {
          exports: 'FB'
        }
    }
});

require(['jquery', 'backbone', 'app/router', 'fb'], function ($, Backbone, Router) {

    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});