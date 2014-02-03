define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Beer = Backbone.Model.extend({

            urlRoot: "http://localhost/beer/web/app_dev.php/api/beername",

            initialize: function () {
               
            }

        }),

        BeerCollection = Backbone.Collection.extend({

            model: Beer,

            url: "http://localhost/beer/web/app_dev.php/api/beers"

        

        });


    return {
        Beer: Beer,
        BeerCollection: BeerCollection
    };

});