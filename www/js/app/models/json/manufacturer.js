define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Manufacturer = Backbone.Model.extend({

            urlRoot: "http://localhost/beer/web/app_dev.php/api/manufacturers",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        ManufacturerCollection = Backbone.Collection.extend({

            model: Manufacturer,

            url: "http://localhost/beer/web/app_dev.php/api/manufacturers"

        });

    return {
        Manufacturer: Manufacturer,
        ManufacturerCollection: ManufacturerCollection
    };

});