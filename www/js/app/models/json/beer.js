define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Beer = Backbone.Model.extend({

            urlRoot: "http://vps46538.ovh.net/web/app.php/api/beers",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        BeerCollection = Backbone.Collection.extend({

            model: Beer,

            url: "http://vps46538.ovh.net/web/app.php/api/beers"

        });

    return {
        Beer: Beer,
        BeerCollection: BeerCollection
    };

});