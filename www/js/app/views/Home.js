define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        BeerListView    = require('app/views/BeerList'),
        models              = require('app/models/beer'),
        tpl                 = require('text!tpl/Home.html'),
        FB                  = require('facebook'),

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
            "keypress .search-key": "search",
            "click #button-search": "displaySearch",
            "click #button-login-facebook": "loginFacebook",

        },

        displaySearch: function (event) {
            $('.search-bar').show();
            $('#search-input').focus();
        },

        search: function (event) {

             if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();

                $('#loader').show();
                var key = $('.search-key').val();
                this.beerList.fetch({reset: true, data: {name: key}});

            }
        },

        loginFacebook: function (event) {
            FB.login();
        }

    });

});