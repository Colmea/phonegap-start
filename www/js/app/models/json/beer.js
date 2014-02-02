define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Beer = Backbone.Model.extend({

            urlRoot: "http://localhost/beer/web/app_dev.php/api/beers",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
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