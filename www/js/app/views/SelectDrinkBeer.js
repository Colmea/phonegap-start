define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/SelectBeerList.html'),
        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
            this.collection.on("reset", this.refresh, this);
        },

        render: function () {
            this.$el.html(template({beers: this.collection.toJSON()}));

            $('#loader').hide();
            return this;
        },

        refresh: function() {
            this.$el.html(template({beers: this.collection.toJSON()}));

            $('#loader').hide();
            return this;

        },

        events: {
            "keypress .search-key": "search",
            "click .selectBeer": "selectBeer",
        },

        selectBeer: function(event) {

        },

        search: function (event) {

             if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();

                $('#loader').show();
                var key = $('.search-key').val();

                this.collection.fetch({reset: true, data: {name: key, access_token: token.access_token}});
            }
        },

    });

});
