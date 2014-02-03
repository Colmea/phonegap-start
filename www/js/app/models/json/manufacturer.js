define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Manufacturer = Backbone.Model.extend({

            urlRoot: "http://vps46538.ovh.net/web/app.php/api/manufacturers",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        ManufacturerCollection = Backbone.Collection.extend({

            model: Manufacturer,

            url: "http://vps46538.ovh.net/web/app.php/api/manufacturers"

        });

    return {
        Manufacturer: Manufacturer,
        ManufacturerCollection: ManufacturerCollection
    };

});