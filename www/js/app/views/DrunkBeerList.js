define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/DrunkBeerList.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
            this.collection.on("reset", this.render, this);
        },

        render: function () {
            console.log('render drunkBeer list');
     
            this.$el.html(template({drunkBeers: this.collection.toJSON()}));

            $('#loader').hide();
            return this;
        }

    });

});