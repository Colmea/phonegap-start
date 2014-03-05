define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        BeerListView        = require('app/views/BeerList'),
        models              = require('app/models/beer'),
        tpl                 = require('text!tpl/Home.html'),
        Vent                = require('EventBus'),

        template = _.template(tpl);


    return Backbone.View.extend({


        initialize: function () {
            this.beerList = new models.BeerCollection();
            this.render();

            Vent.on("view:home:render", this.render, this);
           
        },

        render: function () {
            console.log('render home');


           $(this.el).html(template());
            this.listView = new BeerListView({collection: this.beerList, el: $(".scroller", this.el)});


            return this;
        },

        events: {
            "keypress .search-key": "search",
            "click #button-search": "displaySearch",
            "click #button-login-facebook": "loginFacebook",

        },

        displaySearch: function (event) {
            console.log('display search');
            $('.search-bar').show();
            $('#search-input').focus();
        },

        search: function (event) {

             if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();

                $('#loader').show();
                var key = $('.search-key').val();

                this.beerList.fetch({reset: true, data: {name: key, access_token: token.access_token}});

            }
        },

        loginFacebook: function (event) {
            FB.login(
                function(response) {
                    if (response.session) {
                        alert('you are logged in');
                    } else {
                        alert('you are not logged in');
                    }
                },
                { scope: "email" }
            );
        }

    });

});