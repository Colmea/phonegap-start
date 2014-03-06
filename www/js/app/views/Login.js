define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Vent                = require('EventBus'),
        tpl                 = require('text!tpl/Login.html'),
        HomeView    = require('app/views/Home'),
        
        template = _.template(tpl);


    return Backbone.View.extend({

        initialize: function () {
            this.render();

        

        },

        render: function () {
            console.log('render login');

            this.$el.html(template()); 
            
            return this;
        },

        events: {
            "click #button-login": "login",

        },

        login: function (event) {

            $('#loader').show();
            var username = $('#form-login-username').val();
            var password = $('#form-login-password').val();

            var urlLogin = "http://vps46538.ovh.net/web/oauth/v2/token?client_id=1_3jjeppbcjjeok8owosc4gg4k8gok8sksoos008g4wg4c00g4gs&client_secret=v832znqzp9cgckwcos0w44kgk4okgwwkkws8sckk4ww0gcok4&grant_type=password";
            urlLogin += '&username=' + username + '&password=' + password;

            $.getJSON( urlLogin, function( data )
            {
                window.token = data;
                $('#loader').hide();

                this.homepage = new HomeView({el: $(".page-center", this.el)});
            });
            
        }

    });

});