define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        DrunkBeer = Backbone.Model.extend({

            urlRoot: "http://vps46538.ovh.net/web/app.php/api/user/beer/beers",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        DrunkBeerCollection = Backbone.Collection.extend({

            model: DrunkBeer,

            url: "http://vps46538.ovh.net/web/app.php/api/user/beer/beers"

        });

    return {
        DrunkBeer: DrunkBeer,
        DrunkBeerCollection: DrunkBeerCollection
    };

});