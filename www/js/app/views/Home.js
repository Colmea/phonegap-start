define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        DrunkBeerListView        = require('app/views/DrunkBeerList'),
        models              = require('app/models/drunkBeer'),
        tpl                 = require('text!tpl/Home.html'),
        Vent                = require('EventBus'),

        template = _.template(tpl);


    return Backbone.View.extend({


        initialize: function () {
            this.drunkBeerList = new models.DrunkBeerCollection();
            this.render();

            // Init event handler 'render'
            Vent.on("view:home:render", this.render, this);
           
        },

        render: function () {
            console.log('render home');

            if (window.token != undefined) {
                // Fetch drunk beers
                $('#loader').show();
                this.drunkBeerList.fetch({reset: true, data: {access_token: token.access_token}});
            }

            $(this.el).html(template());
            this.listView = new DrunkBeerListView({collection: this.drunkBeerList, el: $("#container-drunk-beer-list", this.el)});

            return this;
        },

        events: {
           

        }

    });

});