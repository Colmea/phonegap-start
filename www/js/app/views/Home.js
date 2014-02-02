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
            console.log('search');
            var key = $('.search-key').val();
            this.beerList.fetch({reset: true, success : function(data){ console.log('yo'); }, data: {name: key}});
        },

        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        }

    });

});