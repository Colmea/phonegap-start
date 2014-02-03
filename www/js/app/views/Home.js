define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        BeerListView    = require('app/views/BeerList'),
        models              = require('app/models/beer'),
        tpl                 = require('text!tpl/Home.html'),

        template = _.template(tpl);


    return Backbone.View.extend({

        initialize: function () {
            this.beerList = new models.BeerCollection();
            this.render();
        },

        render: function () {
            this.$el.html(template());
            this.listView = new BeerListView({collection: this.beerList, el: $(".scroller", this.el)});

            return this;
        },

        events: {
            "keyup .search-key":    "search",
            "keypress .search-key": "onkeypress"
        },

        search: function (event) {
            var key = $('.search-key').val();

            // fetch only if at least 1 char
            if (key.length >= 1) {          
                this.beerList.fetch({reset: true, data: {name: key}});
            }
        },

        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        }

    });

});