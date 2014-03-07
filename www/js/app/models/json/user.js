define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        User = Backbone.Model.extend({

            urlRoot: "http://vps46538.ovh.net/web/app.php/api/user",

            initialize: function () {
                //this.reports = new BeerCollection();
                //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        UserCollection = Backbone.Collection.extend({

            model: User,

            url: "http://vps46538.ovh.net/web/app.php/api/users"

        });

    return {
        User: User,
        UserCollection: UserCollection
    };

});